import { preact as React } from "../utils.js"

let e = Object.assign,
    t = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n]
                ;(i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    })()
function n(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t
}
var i = 13,
    r = 9,
    o = 8,
    a = 89,
    s = 90,
    l = 77,
    c = 57,
    h = 219,
    u = 222,
    p = 192,
    d = 100,
    f = 3e3,
    y = "navigator" in window && /Win/i.test(navigator.platform),
    g = "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
    _ = "npm__react-simple-code-editor__textarea",
    v = (function (v) {
        function b() {
            var t, _, v
            !(function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, b)
            for (var m = arguments.length, k = Array(m), S = 0; S < m; S++) k[S] = arguments[S]
            return (
                (_ = v = n(this, (t = b.__proto__ || Object.getPrototypeOf(b)).call.apply(t, [this].concat(k)))),
                (v.state = { capture: !0 }),
                (v._recordCurrentState = function () {
                    var e = v._input
                    if (e) {
                        var t = e.value,
                            n = e.selectionStart,
                            i = e.selectionEnd
                        v._recordChange({ value: t, selectionStart: n, selectionEnd: i })
                    }
                }),
                (v._getLines = function (e, t) {
                    return e.substring(0, t).split("\n")
                }),
                (v._recordChange = function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = v._history,
                        r = i.stack,
                        o = i.offset
                    if (r.length && o > -1) {
                        v._history.stack = r.slice(0, o + 1)
                        var a = v._history.stack.length
                        if (a > d) {
                            var s = a - d
                            ;(v._history.stack = r.slice(s, a)), (v._history.offset = Math.max(v._history.offset - s, 0))
                        }
                    }
                    var l = Date.now()
                    if (n) {
                        var c = v._history.stack[v._history.offset]
                        if (c && l - c.timestamp < f) {
                            var h = /[^a-z0-9]([a-z0-9]+)$/i,
                                u = v._getLines(c.value, c.selectionStart).pop().match(h),
                                p = v._getLines(t.value, t.selectionStart).pop().match(h)
                            if (u && p && p[1].startsWith(u[1])) return void (v._history.stack[v._history.offset] = e({}, t, { timestamp: l }))
                        }
                    }
                    v._history.stack.push(e({}, t, { timestamp: l })), v._history.offset++
                }),
                (v._updateInput = function (e) {
                    var t = v._input
                    t && ((t.value = e.value), (t.selectionStart = e.selectionStart), (t.selectionEnd = e.selectionEnd), v.props.onValueChange(e.value))
                }),
                (v._applyEdits = function (t) {
                    var n = v._input,
                        i = v._history.stack[v._history.offset]
                    i && n && (v._history.stack[v._history.offset] = e({}, i, { selectionStart: n.selectionStart, selectionEnd: n.selectionEnd })), v._recordChange(t), v._updateInput(t)
                }),
                (v._undoEdit = function () {
                    var e = v._history,
                        t = e.stack,
                        n = e.offset,
                        i = t[n - 1]
                    i && (v._updateInput(i), (v._history.offset = Math.max(n - 1, 0)))
                }),
                (v._redoEdit = function () {
                    var e = v._history,
                        t = e.stack,
                        n = e.offset,
                        i = t[n + 1]
                    i && (v._updateInput(i), (v._history.offset = Math.min(n + 1, t.length - 1)))
                }),
                (v._handleKeyDown = function (e) {
                    var t = v.props,
                        n = t.tabSize,
                        d = t.insertSpaces,
                        f = t.ignoreTabKey,
                        _ = t.onKeyDown
                    if (!_ || (_(e), !e.defaultPrevented)) {
                        var m = e.target,
                            b = m.value,
                            k = m.selectionStart,
                            S = m.selectionEnd,
                            C = (d ? " " : "     ").repeat(n)
                        if (e.keyCode === r && !f && v.state.capture)
                            if ((e.preventDefault(), e.shiftKey)) {
                                var E = v._getLines(b, k),
                                    w = E.length - 1,
                                    x = v._getLines(b, S).length - 1,
                                    K = b
                                        .split("\n")
                                        .map(function (e, t) {
                                            return t >= w && t <= x && e.startsWith(C) ? e.substring(C.length) : e
                                        })
                                        .join("\n")
                                if (b !== K) {
                                    var L = E[w]
                                    v._applyEdits({ value: K, selectionStart: L.startsWith(C) ? k - C.length : k, selectionEnd: S - (b.length - K.length) })
                                }
                            } else if (k !== S) {
                                var O = v._getLines(b, k),
                                    D = O.length - 1,
                                    I = v._getLines(b, S).length - 1,
                                    z = O[D]
                                v._applyEdits({
                                    value: b
                                        .split("\n")
                                        .map(function (e, t) {
                                            return t >= D && t <= I ? C + e : e
                                        })
                                        .join("\n"),
                                    selectionStart: /\S/.test(z) ? k + C.length : k,
                                    selectionEnd: S + C.length * (I - D + 1),
                                })
                            } else {
                                var j = k + C.length
                                v._applyEdits({ value: b.substring(0, k) + C + b.substring(S), selectionStart: j, selectionEnd: j })
                            }
                        else if (e.keyCode === o) {
                            var P = k !== S
                            if (b.substring(0, k).endsWith(C) && !P) {
                                e.preventDefault()
                                var T = k - C.length
                                v._applyEdits({ value: b.substring(0, k - C.length) + b.substring(S), selectionStart: T, selectionEnd: T })
                            }
                        } else if (e.keyCode === i) {
                            if (k === S) {
                                var F = v._getLines(b, k).pop().match(/^\s+/)
                                if (F && F[0]) {
                                    e.preventDefault()
                                    var R = "\n" + F[0],
                                        W = k + R.length
                                    v._applyEdits({ value: b.substring(0, k) + R + b.substring(S), selectionStart: W, selectionEnd: W })
                                }
                            }
                        } else if (e.keyCode === c || e.keyCode === h || e.keyCode === u || e.keyCode === p) {
                            var M = void 0
                            e.keyCode === c && e.shiftKey ? (M = ["(", ")"]) : e.keyCode === h ? (M = e.shiftKey ? ["{", "}"] : ["[", "]"]) : e.keyCode === u ? (M = e.shiftKey ? ['"', '"'] : ["'", "'"]) : e.keyCode !== p || e.shiftKey || (M = ["`", "`"]), k !== S && M && (e.preventDefault(), v._applyEdits({ value: b.substring(0, k) + M[0] + b.substring(k, S) + M[1] + b.substring(S), selectionStart: k, selectionEnd: S + 2 }))
                        } else
                            (g ? e.metaKey && e.keyCode === s : e.ctrlKey && e.keyCode === s) && !e.shiftKey && !e.altKey
                                ? (e.preventDefault(), v._undoEdit())
                                : (g ? e.metaKey && e.keyCode === s && e.shiftKey : y ? e.ctrlKey && e.keyCode === a : e.ctrlKey && e.keyCode === s && e.shiftKey) && !e.altKey
                                ? (e.preventDefault(), v._redoEdit())
                                : e.keyCode !== l ||
                                  !e.ctrlKey ||
                                  (g && !e.shiftKey) ||
                                  (e.preventDefault(),
                                  v.setState(function (e) {
                                      return { capture: !e.capture }
                                  }))
                    }
                }),
                (v._handleChange = function (e) {
                    var t = e.target,
                        n = t.value,
                        i = t.selectionStart,
                        r = t.selectionEnd
                    v._recordChange({ value: n, selectionStart: i, selectionEnd: r }, !0), v.props.onValueChange(n)
                }),
                (v._history = { stack: [], offset: -1 }),
                n(v, _)
            )
        }
        return (
            (function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t)
                ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(b, React.Component),
            t(b, [
                {
                    key: "componentDidMount",
                    value: function () {
                        this._recordCurrentState()
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var t = this,
                            n = this.props,
                            i = n.value,
                            r = n.style,
                            o = n.padding,
                            a = n.highlight,
                            s = n.textareaId,
                            l = n.autoFocus,
                            c = n.disabled,
                            h = n.form,
                            u = n.maxLength,
                            p = n.minLength,
                            d = n.name,
                            f = n.placeholder,
                            y = n.readOnly,
                            g = n.required,
                            v = n.onClick,
                            b = n.onFocus,
                            k = n.onBlur,
                            S = n.onKeyUp,
                            C =
                                (n.onKeyDown,
                                n.onValueChange,
                                n.tabSize,
                                n.insertSpaces,
                                n.ignoreTabKey,
                                (function (e, t) {
                                    var n = {}
                                    for (var i in e) t.indexOf(i) >= 0 || (Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]))
                                    return n
                                })(n, ["value", "style", "padding", "highlight", "textareaId", "autoFocus", "disabled", "form", "maxLength", "minLength", "name", "placeholder", "readOnly", "required", "onClick", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onValueChange", "tabSize", "insertSpaces", "ignoreTabKey"])),
                            E = { paddingTop: o, paddingRight: o, paddingBottom: o, paddingLeft: o },
                            w = a(i)
                        return React.createElement(
                            "div",
                            e({}, C, { style: e({}, m.container, r) }),
                            React.createElement("textarea", {
                                ref: function (e) {
                                    return (t._input = e)
                                },
                                style: e({}, m.editor, m.textarea, E),
                                className: _,
                                id: s,
                                value: i,
                                onInput: this._handleChange,
                                onKeyDown: this._handleKeyDown,
                                onClick: v,
                                onKeyUp: S,
                                onFocus: b,
                                onBlur: k,
                                disabled: c,
                                form: h,
                                maxLength: u,
                                minLength: p,
                                name: d,
                                placeholder: f,
                                readOnly: y,
                                required: g,
                                autoFocus: l,
                                autoCapitalize: "off",
                                autoComplete: "off",
                                autoCorrect: "off",
                                spellCheck: !1,
                                "data-gramm": !1,
                            }),
                            React.createElement("pre", e({ "aria-hidden": "true", style: e({}, m.editor, m.highlight, E) }, "string" == typeof w ? { dangerouslySetInnerHTML: { __html: w + "<br />" } } : { children: w })),
                            React.createElement("style", { type: "text/css", dangerouslySetInnerHTML: { __html: "\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.npm__react-simple-code-editor__textarea:empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .npm__react-simple-code-editor__textarea {\n    color: transparent !important;\n  }\n\n  .npm__react-simple-code-editor__textarea::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n" } })
                        )
                    },
                },
                {
                    key: "session",
                    get: function () {
                        return { history: this._history }
                    },
                    set: function (e) {
                        this._history = e.history
                    },
                },
            ]),
            b
        )
    })()
v.defaultProps = { tabSize: 2, insertSpaces: !0, ignoreTabKey: !1, padding: 0 }
var m = { container: { position: "relative", textAlign: "left", boxSizing: "border-box", padding: 0, overflow: "hidden" }, textarea: { position: "absolute", top: 0, left: 0, height: "100%", width: "100%", resize: "none", color: "inherit", overflow: "hidden", outline: "none", MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", WebkitTextFillColor: "transparent" }, highlight: { position: "relative", pointerEvents: "none" }, editor: { margin: 0, border: 0, background: "none", boxSizing: "inherit", display: "inherit", fontFamily: "inherit", fontSize: "inherit", fontStyle: "inherit", fontVariantLigatures: "inherit", fontWeight: "inherit", letterSpacing: "inherit", lineHeight: "inherit", tabSize: "inherit", textIndent: "inherit", textRendering: "inherit", textTransform: "inherit", whiteSpace: "pre-wrap", wordBreak: "keep-all", overflowWrap: "break-word" } }

export default v
