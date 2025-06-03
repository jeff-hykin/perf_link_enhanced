import "./library/prism.js"
import { html, preact, uid, pSeries, average, startTesting, latestLocalStorage, updateProgress, extractValidSuites, decodeState } from "./utils.js"

import Tests from "./components/tests.js"
import Archive from "./components/archive.js"
import Results from "./components/results.js"
// import { convertImports } from "./library/parsing.js"
import { convertImports } from "./library/parsing.bundle.js"
// var convertImports = (x) => x
import { showToast, showErrorToast } from "https://esm.sh/gh/jeff-hykin/good-component@0.3.5/main/actions/show_toast.js"
globalThis.showToast = showToast
globalThis.showErrorToast = showErrorToast

const { render, useReducer, useEffect } = preact
const defaults = {
    started: false,
    dialog: true,
    aside: "results",
    suites: extractValidSuites(localStorage),
    runs: 100,
    duration: 1,
    progress: 0,
    id: uid(),
    searchTerm: "",
    title: "Finding numbers",
    before: `import { randomSelectElementAndIndex } from 'https://esm.sh/gh/jeff-hykin/good-js@1.17.1.0/source/flattened/random_select_element_and_index.js'\nconst data = [...Array(dimension1Value).keys()]\nconst { value: randomValue, index: randomIndex } = randomSelectElementAndIndex(data)`,
    tests: [
        { name: "Find item 100", code: "data.find(x => x == 100)", ops: 203360 },
        { name: "Find item 200", code: "data.find(x => x == 200)", ops: 99560 },
        { name: "Find item 400", code: "data.find(x => x == 400)", ops: 55350 },
        { name: "Find item 800", code: "data.find(x => x == 800)", ops: 27660 },
    ],
}
const setupWorker = ({code, onMessage}) => {
    const script = URL.createObjectURL(new Blob([code], { type: 'application/javascript' }))
    const worker = new Worker(script, { type: "module" })
    if (onMessage) {
        worker.onmessage = onMessage
    }
    return worker
}
    
// TODO:
    // fix % progress not being synced up across dim runs (show loading, clear old output): http://127.0.0.1:8080/#eyJpZCI6ImF6ODJ3eHhpaW1wIiwidGl0bGUiOiJDb21wYXJpc29uIG9mIHN0dWZmIiwiYmVmb3JlIjoiY29uc3QgZGF0YSA9IG5ldyBTZXQoWy4uLkFycmF5KGRpbWVuc2lvbjFWYWx1ZSkua2V5cygpXSkiLCJ0ZXN0cyI6W3sibmFtZSI6Im1hbnVhbCBPKG4pIiwiY29kZSI6ImNvbnN0IGEgPSBuZXcgU2V0KClcbmZvciAobGV0IGVhY2ggb2YgZGF0YSkge1xuICAgIGEuYWRkKGVhY2gpXG59XG5jb25zb2xlLmxvZyhcImEuc2l6ZVwiLCBhLnNpemUpIiwicnVucyI6WzE3MywxMzAsMTUyLDIxNywyMTcsMTk1LDE3MywyMTcsMTMwLDg2LDEwOCw4NiwxMzAsMTMwLDE1MiwxMzAsMTMwLDg2LDEzMCwxMDgsMTMwLDEwOCwxMDgsMTMwLDE1MiwxNzMsMTk1LDIxNywxMzAsMTk1LDIxNywxOTUsMTk1LDIxNywyMTcsMjE3LDIzOSwyMTcsMjM5LDIzOSwyMTcsMjM5LDIzOSwyMzksMjM5LDIzOSwyMzksMjM5LDIxNywyMzksMjM5LDIxNywyMzksMjM5LDIxNywyMzksMjM5LDIxNywyMzksMjM5LDIzOSwyMTcsMjM5LDIzOSwyMzksMjM5LDIzOSwyMTcsMjM5LDIzOSwyMTcsMjM5LDIzOSwyMTcsMjM5LDIzOSwyMzksMjM5LDIxNywyMzksMjM5LDIxNywyMTcsMjM5LDIzOSwyMTcsMjM5LDIxNywyMzksMjM5LDIzOSwyMzksMjE3LDIzOSwyMzksMjE3LDIzOSwyMzksMjE3LDIzOV0sIm9wcyI6MjA1fSx7Im5hbWUiOiJidWlsdGluIE8obikiLCJjb2RlIjoiY29uc3QgYiA9IG5ldyBTZXQoZGF0YSlcbmNvbnNvbGUubG9nKFwiYi5zaXplXCIsIGIuc2l6ZSkiLCJydW5zIjpbODQ3LDYwOCw3ODIsMTEwOCwxMDY1LDk1Niw3ODIsOTU2LDQzNCwyNjAsMzI2LDIxNyw0MTMsNTIxLDYzMCwzMDQsNTQzLDM0NywzNjksNDEzLDQ1Niw0MTMsMzkxLDU4Niw3MTcsODI2LDg0Nyw5MTMsNjczLDg5MSw5MTMsOTEzLDkxMywxMDAwLDExNzMsMTAwMCwxMTMwLDEwNjUsMTA2NSwxMTczLDEwNjUsMTEzMCwxMTczLDExNzMsMTEzMCwxMTczLDExNzMsMTE1MiwxMTUyLDExNzMsMTE3MywxMTMwLDExNzMsMTE3MywxMTA4LDExNzMsMTE3MywxMDg2LDExNzMsMTE1MiwxMTczLDExMzAsMTE5NSwxMTUyLDExNzMsMTE3MywxMjE3LDExNzMsMTE5NSwxMTMwLDEwMjEsMTE3MywxMTA4LDEwODYsMTE5NSwxMTMwLDExNzMsMTE3MywxMDg2LDExNzMsMTA4NiwxMDQzLDExMDgsMTE3MywxMTk1LDExMzAsMTIxNyw5NzgsMTE3MywxMTMwLDExNTIsMTE3MywxMDQzLDExMzAsMTEzMCwxMDAwLDExNzMsMTE3MywxMTMwLDExNzNdLCJvcHMiOjk3NH1dLCJ1cGRhdGVkIjoiMjAyNS0wNS0yNVQxMTo1NTo0My4xODlaIiwiZGltZW5zaW9uMUNvZGUiOiJbMTAsMTAwLDEwMDAsMTAwMDAsMTAwXzAwMCwxMDAwMDAwXSJ9
    // add error output

const init = location.hash
    ? {
          ...defaults,
          ...decodeState(location.hash.slice(1)),
      }
    : defaults

const reducer = (state, update) => ({
    ...state,
    ...(typeof update === "function" ? update(state) : update),
})


const app = () => {
    const [state, dispatch] = useReducer(reducer, init)
    const { before, started, tests, runs, title, id, suites, aside, dimension1Code, dimension2Code } = state

    useEffect(() => {
        if (started) {
            setTimeout(() => {
                ;(async () => { // idk why so much nesting is needed (maybe try removing later) -- Jeff
                    
                    let dimension1 = []
                    try {
                        dimension1 = eval(dimension1Code || "[]")
                    } catch (error) {
                        showErrorToast(`When trying to eval dimension1, an error was thrown: ${error.message}`)
                        return dispatch({ started: false })
                    }
                    let dimension2 = []
                    try {
                        dimension2 = eval(dimension2Code || "[]")
                    } catch (error) {
                        showErrorToast(`When trying to eval dimension2, an error was thrown: ${error.message}`)
                        return dispatch({ started: false })
                    }
                    const dim1Empty = (!(dimension1 instanceof Array) || dimension1.length === 0)
                    const dim2Empty = (!(dimension2 instanceof Array) || dimension2.length === 0)
                    if (dim1Empty) {
                        dimension1 = [null]
                    }
                    if (dim2Empty) {
                        dimension2 = [null]
                    }
                    const {code:globalSectionCode, syntaxErrors} = convertImports(before)
                    if (syntaxErrors.length > 0) {
                        showErrorToast(`Syntax errors in the global section:\n${syntaxErrors.map(x=>x.text).join("\n")}`)
                        return dispatch({ started: false })
                    }
                    let resultsPerCondition = []
                    const cycles = dimension1.length * dimension2.length
                    for (const dimension1Value of dimension1) {
                        for (const dimension2Value of dimension2) {
                            const dimensionResults = []
                            resultsPerCondition.push([
                                [dimension1Value, dimension2Value],
                                dimensionResults,
                            ])
                            const numberOfLineBeforeEvalCode = 9
                            const setup = ({isCheckerScript=false})=>`
                                const isCheckerScript = ${JSON.stringify(isCheckerScript)}
                                const dimension1Value = ${JSON.stringify(dimension1Value)}
                                const dimension2Value = ${JSON.stringify(dimension2Value)}
                                // setup onmessage hook immediately
                                let resolvePromiseOfCallbackSetup 
                                let promiseOfCallbackSetup = new Promise((res,rej)=>{resolvePromiseOfCallbackSetup=res})
                                let callbackForTestRequest=()=>{}
                                onmessage = async (messageFromHost) => {
                                    await promiseOfCallbackSetup; callbackForTestRequest(messageFromHost)
                                    // replace self for future requests
                                    onmessage = callbackForTestRequest
                                }
                                var require = (x) => import(x)
                                let section = "globals"
                                await eval(${JSON.stringify(`((async ()=>{
                                    try {
                                        ${globalSectionCode};
                                        try {
                                            if (isCheckerScript) {
                                                callbackForTestRequest = (messageFromHost) => {
                                                    const testObject = messageFromHost.data[0]
                                                    let time
                                                    ;(async () => {
                                                        try {
                                                            time = await eval(\`async () => {
                                                                const start = performance.now()
                                                                for (let i = 0; i < 10; i++) {
                                                                    \${testObject.code};
                                                                }
                                                                return performance.now() - start || 1
                                                            }\`)()
                                                            postMessage(time)
                                                        } catch (e) {
                                                            postMessage({errorSection: "one of the test cases", errorMessage: \`\${e.message}\`, errorStack: \`\${e.stack}\`})
                                                        }
                                                    })()
                                                }
                                            // run script
                                            } else {
                                                callbackForTestRequest = (messageFromHost) => {
                                                    const testObject = messageFromHost.data[0]
                                                    const duration = messageFromHost.data[1]
                                                    let result
                                                    ;((async () => {
                                                        try {
                                                            result = await eval(\`async () => {
                                                                let ops = 0;
                                                                let end =  performance.now() + \${duration};
                                                                while ( performance.now() < end) {
                                                                    \${testObject.code};
                                                                    ops++;
                                                                }
                                                                return ops;
                                                            }\`)()
                                                            postMessage((result * (1000 / duration)) << 0)
                                                        } catch (e) {
                                                            postMessage({errorSection: "one of the test cases", errorMessage: \`\${e.message}\`, errorStack: \`\${e.stack}\`})
                                                        }
                                                    })())
                                                }
                                            }
                                        } catch (error) {
                                            postMessage({errorSection: "one of the test cases", errorMessage: \`\${error.message}\`, errorStack: \`\${error.stack}\`})
                                            return
                                        }
                                        section = "one of the test cases"
                                        resolvePromiseOfCallbackSetup()
                                    } catch (error) {
                                        postMessage({errorSection: "globals", errorMessage: \`\${error.message}\`, errorStack: \`\${error.stack}\`})
                                        return
                                    }
                                })())`)}).catch((error)=>{
                                    postMessage({errorSection: section, errorMessage: \`\${error.message}\`, errorStack: \`\${error.stack}\`})
                                })
                            `
                            const checkAndHandleWorkerError = (message) => {
                                if (message.data?.errorMessage) {
                                    let chop 
                                    if (message.data.errorSection === "globals") {
                                        chop = numberOfLineBeforeEvalCode
                                    } else {
                                        chop = numberOfLineBeforeEvalCode+16
                                    }
                                    let stackFixed = ((message.data.errorStack||"").match(/:\d+:\d+$/gm)||"").at(-1).split(":").map((x,i)=>i==1?x-chop:x).slice(0,-2).join(":")
                                    const error= "error: " + message.data.errorMessage+"\nfrom "+message.data.errorSection+stackFixed
                                    showErrorToast(error)
                                    dispatch({ started: false })
                                    return true
                                }
                            }
                            
                            // 
                            // check
                            // 
                            const checkerScript = setup({isCheckerScript:true})
                            const checkerPromises = []
                            for (const testObject of tests) {
                                let checkerResolver
                                let checkerPromise = new Promise((resolve) =>{ checkerResolver = resolve })
                                checkerPromises.push(checkerPromise)
                                const worker = setupWorker({code: checkerScript, onMessage: (message)=>{
                                    if (!checkAndHandleWorkerError(message)) {
                                        checkerResolver(message.data)
                                    }
                                    worker.terminate()
                                }})
                                worker.postMessage([testObject])
                            }
                            const durations = await Promise.all(checkerPromises)
                            
                            const runScript = setup({isCheckerScript:false})
                            const tasks = () => () => {
                                dispatch(updateProgress)
                                // dispatch((...args)=>updateProgress(...args, cycles))

                                // 
                                // run
                                // 
                                const runPromises = []
                                for (const testObject of tests) {
                                    let runResolver
                                    let runPromise = new Promise((resolve) =>{ runResolver = resolve })
                                    runPromises.push(runPromise)
                                    const worker = setupWorker({code: runScript, onMessage: (message)=>{
                                        if (!checkAndHandleWorkerError(message)) {
                                            runResolver({ ...testObject, ops: message.data })
                                            checkAndHandleWorkerError({ ...testObject, ops: message.data })
                                        }
                                        worker.terminate()
                                    }})
                                    // TODO: is max really the right metric here? -- Jeff
                                    worker.postMessage([testObject, Math.max(...durations)])
                                }
                                return Promise.all(runPromises)
                            }
                            
                            pSeries(Array.from({ length: runs }, tasks)).then((results) =>{
                                const testResults = average(results.flat())
                                for (let each of testResults) {
                                    dimensionResults.push(each)
                                }
                                // dimensionResults
                                return dispatch({ tests: testResults, started: false })
                            })
                        }
                    }
                    dispatch({ resultsPerCondition })
                })()
            }, 300)
        }
    }, [started, before, tests, dimension1Code, dimension2Code])

    useEffect(() => {
        const x = JSON.stringify({ id, title, before, tests, updated: new Date(), dimension1Code, dimension2Code })
        history.replaceState(null, null, `#${encodeURIComponent(btoa(x))}`)
        if (Object.fromEntries(suites)[id]) {
            localStorage.setItem(id, x)
            dispatch(latestLocalStorage)
        }
    }, [id, title, before, tests, dimension1Code, dimension2Code])

    useEffect(() => {
        const alt = (e) => (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
        const hotKeys = (e) => {
            if (e.keyCode == 27) e.preventDefault() || dispatch({ aside: "results" })
            if (alt(e) && e.keyCode == 13) e.preventDefault() || dispatch(startTesting)
            if (alt(e) && e.keyCode == 80) e.preventDefault() || dispatch({ aside: aside === "archive" ? "results" : "archive" })
        }
        addEventListener("keydown", hotKeys)
        return () => removeEventListener("keydown", hotKeys)
    }, [aside])

    return html`
        <main className="app">
            <${Tests} state=${state} dispatch=${dispatch} />
            <${Results} state=${state} dispatch=${dispatch} />
            <${Archive} state=${state} dispatch=${dispatch} />
        </main>
    `
}

render(html` <${app} /> `, document.body)
