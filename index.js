import "./library/prism.js"
import { html, preact, uid, pSeries, average, startTesting, latestLocalStorage, updateProgress, extractValidSuites, decodeState } from "./utils.js"

import Tests from "./components/tests.js"
import Archive from "./components/archive.js"
import Results from "./components/results.js"

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
    title: "Finding numbers in an array of 1000",
    before: `const data = [...Array(1000).keys()]`,
    tests: [
        { name: "Find item 100", code: "data.find(x => x == 100)", ops: 203360 },
        { name: "Find item 200", code: "data.find(x => x == 200)", ops: 99560 },
        { name: "Find item 400", code: "data.find(x => x == 400)", ops: 55350 },
        { name: "Find item 800", code: "data.find(x => x == 800)", ops: 27660 },
    ],
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

import { showToast, showErrorToast } from "https://esm.sh/gh/jeff-hykin/good-component@0.3.5/main/actions/show_toast.js"

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
                    }
                    let dimension2 = []
                    try {
                        dimension2 = eval(dimension2Code || "[]")
                    } catch (error) {
                        showErrorToast(`When trying to eval dimension2, an error was thrown: ${error.message}`)
                    }
                    const dim1Empty = (!(dimension1 instanceof Array) || dimension1.length === 0)
                    const dim2Empty = (!(dimension2 instanceof Array) || dimension2.length === 0)
                    if (dim1Empty) {
                        dimension1 = [null]
                    }
                    if (dim2Empty) {
                        dimension2 = [null]
                    }
                    let resultsPerCondition = []
                    for (const dimension1Value of dimension1) {
                        for (const dimension2Value of dimension2) {
                            const dimensionResults = []
                            resultsPerCondition.push([
                                [dimension1Value, dimension2Value],
                                dimensionResults,
                            ])
                            const checkScript = URL.createObjectURL(new Blob([`
                                const dimension1Value = ${JSON.stringify(dimension1Value)}
                                const dimension2Value = ${JSON.stringify(dimension2Value)}
                                ${before};
                                onmessage = async (e) => {
                                    const test = e.data[0]
                                    let time
                                    ;(async () => {
                                        try {
                                            time = await eval(\`async () => {
                                                const start = Date.now()
                                                for (let i = 0; i < 10; i++) {
                                                    \${test.code};
                                                }
                                                return Date.now() - start || 1
                                            }\`)()
                                        } catch (e) {
                                            time = -1
                                        }
                                        postMessage(time)
                                    })()
                                }
                            `], { type: 'application/javascript' }))
                            const runScript = URL.createObjectURL(new Blob([`
                                const dimension1Value = ${JSON.stringify(dimension1Value)}
                                const dimension2Value = ${JSON.stringify(dimension2Value)}
                                ${before};
                                onmessage = async (e) => {
                                    const test = e.data[0]
                                    const duration = e.data[1]
                                    let result
                                    ;(async () => {
                                        try {
                                            result = await eval(\`async () => {
                                                let ops = 0;
                                                let end = Date.now() + \${duration};
                                                while (Date.now() < end) {
                                                    \${test.code};
                                                    ops++;
                                                }
                                                return ops;
                                            }\`)()
                                        } catch (e) {
                                            result = -1
                                        }
                                        postMessage(result === -1 ? result : (result * (1000 / duration)) << 0)
                                    })()
                                }
                            `], { type: 'application/javascript' }))
                            
                            const duration = await Promise.all(
                                tests.map(
                                    (test) =>
                                        new Promise((resolve) => {
                                            const worker = new Worker(checkScript, { type: "module" })
                                            worker.onmessage = (e) => {
                                                resolve(e.data)
                                                worker.terminate()
                                            }
                                            worker.postMessage([test])
                                        })
                                )
                            )
                            const bench = (test) =>
                                new Promise((resolve) => {
                                    const worker = new Worker(runScript, { type: "module" })
                                    worker.onmessage = (e) => {
                                        resolve({ ...test, ops: e.data })
                                        worker.terminate()
                                    }
                                    // TODO: is max really the right metric here? -- Jeff
                                    worker.postMessage([test, Math.max(...duration)])
                                })
                            const tasks = () => () => {
                                dispatch(updateProgress)
                                return Promise.all(tests.map(bench))
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
                    // TODO: plot these
                    dispatch({ resultsPerCondition })
                    // console.debug(`resultsPerCondition`, resultsPerCondition)
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
