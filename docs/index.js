var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// library/prism.js
var require_prism = __commonJS({
  "library/prism.js"(exports, module2) {
    var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
    var Prism2 = function(g5) {
      var c6 = /\blang(?:uage)?-([\w-]+)\b/i, a6 = 0, C2 = {
        manual: g5.Prism && g5.Prism.manual,
        disableWorkerMessageHandler: g5.Prism && g5.Prism.disableWorkerMessageHandler,
        util: {
          encode: function(e6) {
            return e6 instanceof M3 ? new M3(e6.type, C2.util.encode(e6.content), e6.alias) : Array.isArray(e6) ? e6.map(C2.util.encode) : e6.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          type: function(e6) {
            return Object.prototype.toString.call(e6).slice(8, -1);
          },
          objId: function(e6) {
            return e6.__id || Object.defineProperty(e6, "__id", { value: ++a6 }), e6.__id;
          },
          clone: function t7(e6, n7) {
            var r6, a7, i6 = C2.util.type(e6);
            switch (n7 = n7 || {}, i6) {
              case "Object":
                if (a7 = C2.util.objId(e6), n7[a7]) return n7[a7];
                for (var l5 in r6 = {}, n7[a7] = r6, e6)
                  e6.hasOwnProperty(l5) && (r6[l5] = t7(e6[l5], n7));
                return r6;
              case "Array":
                return a7 = C2.util.objId(e6), n7[a7] ? n7[a7] : (r6 = [], n7[a7] = r6, e6.forEach(function(e7, a8) {
                  r6[a8] = t7(e7, n7);
                }), r6);
              default:
                return e6;
            }
          }
        },
        languages: {
          extend: function(e6, a7) {
            var t7 = C2.util.clone(C2.languages[e6]);
            for (var n7 in a7) t7[n7] = a7[n7];
            return t7;
          },
          insertBefore: function(t7, e6, a7, n7) {
            var r6 = (n7 = n7 || C2.languages)[t7], i6 = {};
            for (var l5 in r6)
              if (r6.hasOwnProperty(l5)) {
                if (l5 == e6)
                  for (var o6 in a7) a7.hasOwnProperty(o6) && (i6[o6] = a7[o6]);
                a7.hasOwnProperty(l5) || (i6[l5] = r6[l5]);
              }
            var s6 = n7[t7];
            return n7[t7] = i6, C2.languages.DFS(C2.languages, function(e7, a8) {
              a8 === s6 && e7 != t7 && (this[e7] = i6);
            }), i6;
          },
          DFS: function e6(a7, t7, n7, r6) {
            r6 = r6 || {};
            var i6 = C2.util.objId;
            for (var l5 in a7)
              if (a7.hasOwnProperty(l5)) {
                t7.call(a7, l5, a7[l5], n7 || l5);
                var o6 = a7[l5], s6 = C2.util.type(o6);
                "Object" !== s6 || r6[i6(o6)] ? "Array" !== s6 || r6[i6(o6)] || (r6[i6(o6)] = true, e6(o6, t7, l5, r6)) : (r6[i6(o6)] = true, e6(o6, t7, null, r6));
              }
          }
        },
        plugins: {},
        highlightAll: function(e6, a7) {
          C2.highlightAllUnder(document, e6, a7);
        },
        highlightAllUnder: function(e6, a7, t7) {
          var n7 = {
            callback: t7,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          C2.hooks.run("before-highlightall", n7);
          for (var r6, i6 = n7.elements || e6.querySelectorAll(n7.selector), l5 = 0; r6 = i6[l5++]; )
            C2.highlightElement(r6, true === a7, n7.callback);
        },
        highlightElement: function(e6, a7, t7) {
          for (var n7, r6, i6 = e6; i6 && !c6.test(i6.className); ) i6 = i6.parentNode;
          i6 && (n7 = (i6.className.match(c6) || [, ""])[1].toLowerCase(), r6 = C2.languages[n7]), e6.className = e6.className.replace(c6, "").replace(/\s+/g, " ") + " language-" + n7, e6.parentNode && (i6 = e6.parentNode, /pre/i.test(i6.nodeName) && (i6.className = i6.className.replace(c6, "").replace(/\s+/g, " ") + " language-" + n7));
          var l5 = { element: e6, language: n7, grammar: r6, code: e6.textContent }, o6 = function(e7) {
            ;
            l5.highlightedCode = e7, C2.hooks.run("before-insert", l5), l5.element.innerHTML = l5.highlightedCode, C2.hooks.run("after-highlight", l5), C2.hooks.run("complete", l5), t7 && t7.call(l5.element);
          };
          if (C2.hooks.run("before-sanity-check", l5), l5.code)
            if (C2.hooks.run("before-highlight", l5), l5.grammar)
              if (a7 && g5.Worker) {
                var s6 = new Worker(C2.filename);
                s6.onmessage = function(e7) {
                  o6(e7.data);
                }, s6.postMessage(
                  JSON.stringify({
                    language: l5.language,
                    code: l5.code,
                    immediateClose: true
                  })
                );
              } else o6(C2.highlight(l5.code, l5.grammar, l5.language));
            else o6(C2.util.encode(l5.code));
          else C2.hooks.run("complete", l5);
        },
        highlight: function(e6, a7, t7) {
          var n7 = { code: e6, grammar: a7, language: t7 };
          return C2.hooks.run("before-tokenize", n7), n7.tokens = C2.tokenize(n7.code, n7.grammar), C2.hooks.run("after-tokenize", n7), M3.stringify(C2.util.encode(n7.tokens), n7.language);
        },
        matchGrammar: function(e6, a7, t7, n7, r6, i6, l5) {
          for (var o6 in t7)
            if (t7.hasOwnProperty(o6) && t7[o6]) {
              if (o6 == l5) return;
              var s6 = t7[o6];
              s6 = "Array" === C2.util.type(s6) ? s6 : [s6];
              for (var g6 = 0; g6 < s6.length; ++g6) {
                var c7 = s6[g6], u6 = c7.inside, h5 = !!c7.lookbehind, f5 = !!c7.greedy, d4 = 0, m5 = c7.alias;
                if (f5 && !c7.pattern.global) {
                  var p5 = c7.pattern.toString().match(/[imuy]*$/)[0];
                  c7.pattern = RegExp(c7.pattern.source, p5 + "g");
                }
                c7 = c7.pattern || c7;
                for (var y5 = n7, v5 = r6; y5 < a7.length; v5 += a7[y5].length, ++y5) {
                  var k4 = a7[y5];
                  if (a7.length > e6.length) return;
                  if (!(k4 instanceof M3)) {
                    if (f5 && y5 != a7.length - 1) {
                      if (c7.lastIndex = v5, !(x4 = c7.exec(e6))) break;
                      for (var b3 = x4.index + (h5 ? x4[1].length : 0), w5 = x4.index + x4[0].length, A6 = y5, P3 = v5, O3 = a7.length; A6 < O3 && (P3 < w5 || !a7[A6].type && !a7[A6 - 1].greedy); ++A6)
                        (P3 += a7[A6].length) <= b3 && (++y5, v5 = P3);
                      if (a7[y5] instanceof M3) continue;
                      N4 = A6 - y5, k4 = e6.slice(v5, P3), x4.index -= v5;
                    } else {
                      c7.lastIndex = 0;
                      var x4 = c7.exec(k4), N4 = 1;
                    }
                    if (x4) {
                      h5 && (d4 = x4[1] ? x4[1].length : 0);
                      w5 = (b3 = x4.index + d4) + (x4 = x4[0].slice(d4)).length;
                      var j3 = k4.slice(0, b3), S3 = k4.slice(w5), E4 = [y5, N4];
                      j3 && (++y5, v5 += j3.length, E4.push(j3));
                      var _6 = new M3(o6, u6 ? C2.tokenize(x4, u6) : x4, m5, x4, f5);
                      if (E4.push(_6), S3 && E4.push(S3), Array.prototype.splice.apply(a7, E4), 1 != N4 && C2.matchGrammar(e6, a7, t7, y5, v5, true, o6), i6)
                        break;
                    } else if (i6) break;
                  }
                }
              }
            }
        },
        tokenize: function(e6, a7) {
          var t7 = [e6], n7 = a7.rest;
          if (n7) {
            for (var r6 in n7) a7[r6] = n7[r6];
            delete a7.rest;
          }
          return C2.matchGrammar(e6, t7, a7, 0, 0, false), t7;
        },
        hooks: {
          all: {},
          add: function(e6, a7) {
            var t7 = C2.hooks.all;
            t7[e6] = t7[e6] || [], t7[e6].push(a7);
          },
          run: function(e6, a7) {
            var t7 = C2.hooks.all[e6];
            if (t7 && t7.length) for (var n7, r6 = 0; n7 = t7[r6++]; ) n7(a7);
          }
        },
        Token: M3
      };
      function M3(e6, a7, t7, n7, r6) {
        ;
        this.type = e6, this.content = a7, this.alias = t7, this.length = 0 | (n7 || "").length, this.greedy = !!r6;
      }
      if (g5.Prism = C2, M3.stringify = function(a7, t7, e6) {
        if ("string" == typeof a7) return a7;
        if (Array.isArray(a7))
          return a7.map(function(e7) {
            return M3.stringify(e7, t7, a7);
          }).join("");
        var n7 = {
          type: a7.type,
          content: M3.stringify(a7.content, t7, e6),
          tag: "span",
          classes: ["token", a7.type],
          attributes: {},
          language: t7,
          parent: e6
        };
        if (a7.alias) {
          var r6 = Array.isArray(a7.alias) ? a7.alias : [a7.alias];
          Array.prototype.push.apply(n7.classes, r6);
        }
        C2.hooks.run("wrap", n7);
        var i6 = Object.keys(n7.attributes).map(function(e7) {
          return e7 + '="' + (n7.attributes[e7] || "").replace(/"/g, "&quot;") + '"';
        }).join(" ");
        return "<" + n7.tag + ' class="' + n7.classes.join(" ") + '"' + (i6 ? " " + i6 : "") + ">" + n7.content + "</" + n7.tag + ">";
      }, !g5.document)
        return g5.addEventListener && (C2.disableWorkerMessageHandler || g5.addEventListener(
          "message",
          function(e6) {
            var a7 = JSON.parse(e6.data), t7 = a7.language, n7 = a7.code, r6 = a7.immediateClose;
            g5.postMessage(C2.highlight(n7, C2.languages[t7], t7)), r6 && g5.close();
          },
          false
        )), C2;
      var e5 = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
      return e5 && (C2.filename = e5.src, C2.manual || e5.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(C2.highlightAll) : window.setTimeout(C2.highlightAll, 16) : document.addEventListener("DOMContentLoaded", C2.highlightAll))), C2;
    }(_self);
    "undefined" != typeof module2 && module2.exports && (module2.exports = Prism2), "undefined" != typeof global && (global.Prism = Prism2);
    Prism2.languages.clike = {
      comment: [
        { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: true,
        inside: { punctuation: /[.\\]/ }
      },
      keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      boolean: /\b(?:true|false)\b/,
      function: /\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
      punctuation: /[{}[\];(),.:]/
    };
    Prism2.languages.javascript = Prism2.languages.extend("clike", {
      "class-name": [
        Prism2.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
          lookbehind: true
        }
      ],
      keyword: [
        { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true },
        {
          pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: true
        }
      ],
      number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
      function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
    }), Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism2.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: true,
        greedy: true
      },
      "function-variable": {
        pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: "function"
      },
      parameter: [
        {
          pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
          lookbehind: true,
          inside: Prism2.languages.javascript
        },
        {
          pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
          inside: Prism2.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
          lookbehind: true,
          inside: Prism2.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
          lookbehind: true,
          inside: Prism2.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), Prism2.languages.insertBefore("javascript", "string", {
      "template-string": {
        pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /\${[^}]+}/,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\${|}$/,
                alias: "punctuation"
              },
              rest: Prism2.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      }
    }), Prism2.languages.markup && Prism2.languages.markup.tag.addInlined("script", "javascript"), Prism2.languages.js = Prism2.languages.javascript;
  }
});

// library/preact.js
var preact_exports = {};
__export(preact_exports, {
  Component: () => m,
  Fragment: () => d,
  _unmount: () => D,
  cloneElement: () => L,
  createContext: () => M,
  createElement: () => h,
  createRef: () => y,
  h: () => h,
  hydrate: () => I,
  isValidElement: () => l,
  options: () => n2,
  render: () => H,
  toChildArray: () => x
});
function a2(n7, l5) {
  for (var u6 in l5) n7[u6] = l5[u6];
  return n7;
}
function v(n7) {
  var l5 = n7.parentNode;
  l5 && l5.removeChild(n7);
}
function h(n7, l5, u6) {
  var i6, t7 = arguments, r6 = {};
  for (i6 in l5) "key" !== i6 && "ref" !== i6 && (r6[i6] = l5[i6]);
  if (arguments.length > 3)
    for (u6 = [u6], i6 = 3; i6 < arguments.length; i6++) u6.push(t7[i6]);
  if (null != u6 && (r6.children = u6), "function" == typeof n7 && null != n7.defaultProps)
    for (i6 in n7.defaultProps) void 0 === r6[i6] && (r6[i6] = n7.defaultProps[i6]);
  return p(n7, r6, l5 && l5.key, l5 && l5.ref, null);
}
function p(l5, u6, i6, t7, r6) {
  var o6 = {
    type: l5,
    props: u6,
    key: i6,
    ref: t7,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: r6
  };
  return null == r6 && (o6.__v = o6), n2.vnode && n2.vnode(o6), o6;
}
function y() {
  return {};
}
function d(n7) {
  return n7.children;
}
function m(n7, l5) {
  ;
  this.props = n7, this.context = l5;
}
function w(n7, l5) {
  if (null == l5) return n7.__ ? w(n7.__, n7.__.__k.indexOf(n7) + 1) : null;
  for (var u6; l5 < n7.__k.length; l5++)
    if (null != (u6 = n7.__k[l5]) && null != u6.__e) return u6.__e;
  return "function" == typeof n7.type ? w(n7) : null;
}
function k(n7) {
  var l5, u6;
  if (null != (n7 = n7.__) && null != n7.__c) {
    for (n7.__e = n7.__c.base = null, l5 = 0; l5 < n7.__k.length; l5++)
      if (null != (u6 = n7.__k[l5]) && null != u6.__e) {
        n7.__e = n7.__c.base = u6.__e;
        break;
      }
    return k(n7);
  }
}
function g(l5) {
  ;
  (!l5.__d && (l5.__d = true) && u.push(l5) && !i2++ || r2 !== n2.debounceRendering) && ((r2 = n2.debounceRendering) || t)(_2);
}
function _2() {
  for (var n7; i2 = u.length; )
    n7 = u.sort(function(n8, l5) {
      return n8.__v.__b - l5.__v.__b;
    }), u = [], n7.some(function(n8) {
      var l5, u6, i6, t7, r6, o6, f5;
      n8.__d && (o6 = (r6 = (l5 = n8).__v).__e, (f5 = l5.__P) && (u6 = [], (i6 = a2({}, r6)).__v = i6, t7 = A(
        f5,
        r6,
        i6,
        l5.__n,
        void 0 !== f5.ownerSVGElement,
        null,
        u6,
        null == o6 ? w(r6) : o6
      ), T(u6, r6), t7 != o6 && k(r6)));
    });
}
function b(n7, l5, u6, i6, t7, r6, o6, f5, s6) {
  var a6, h5, p5, y5, d4, m5, k4, g5 = u6 && u6.__k || c, _6 = g5.length;
  if (f5 == e && (f5 = null != r6 ? r6[0] : _6 ? w(u6, 0) : null), a6 = 0, l5.__k = x(l5.__k, function(u7) {
    if (null != u7) {
      if (u7.__ = l5, u7.__b = l5.__b + 1, null === (p5 = g5[a6]) || p5 && u7.key == p5.key && u7.type === p5.type)
        g5[a6] = void 0;
      else
        for (h5 = 0; h5 < _6; h5++) {
          if ((p5 = g5[h5]) && u7.key == p5.key && u7.type === p5.type) {
            g5[h5] = void 0;
            break;
          }
          p5 = null;
        }
      if (y5 = A(n7, u7, p5 = p5 || e, i6, t7, r6, o6, f5, s6), (h5 = u7.ref) && p5.ref != h5 && (k4 || (k4 = []), p5.ref && k4.push(p5.ref, null, u7), k4.push(h5, u7.__c || y5, u7)), null != y5) {
        var c6;
        if (null == m5 && (m5 = y5), void 0 !== u7.__d)
          c6 = u7.__d, u7.__d = void 0;
        else if (r6 == p5 || y5 != f5 || null == y5.parentNode) {
          n: if (null == f5 || f5.parentNode !== n7) n7.appendChild(y5), c6 = null;
          else {
            for (d4 = f5, h5 = 0; (d4 = d4.nextSibling) && h5 < _6; h5 += 2)
              if (d4 == y5) break n;
            n7.insertBefore(y5, f5), c6 = f5;
          }
          "option" == l5.type && (n7.value = "");
        }
        ;
        f5 = void 0 !== c6 ? c6 : y5.nextSibling, "function" == typeof l5.type && (l5.__d = f5);
      } else f5 && p5.__e == f5 && f5.parentNode != n7 && (f5 = w(p5));
    }
    return a6++, u7;
  }), l5.__e = m5, null != r6 && "function" != typeof l5.type)
    for (a6 = r6.length; a6--; ) null != r6[a6] && v(r6[a6]);
  for (a6 = _6; a6--; ) null != g5[a6] && D(g5[a6], g5[a6]);
  if (k4) for (a6 = 0; a6 < k4.length; a6++) j(k4[a6], k4[++a6], k4[++a6]);
}
function x(n7, l5, u6) {
  if (null == u6 && (u6 = []), null == n7 || "boolean" == typeof n7)
    l5 && u6.push(l5(null));
  else if (Array.isArray(n7)) for (var i6 = 0; i6 < n7.length; i6++) x(n7[i6], l5, u6);
  else
    u6.push(
      l5 ? l5(
        "string" == typeof n7 || "number" == typeof n7 ? p(null, n7, null, null, n7) : null != n7.__e || null != n7.__c ? p(n7.type, n7.props, n7.key, null, n7.__v) : n7
      ) : n7
    );
  return u6;
}
function P(n7, l5, u6, i6, t7) {
  var r6;
  for (r6 in u6)
    "children" === r6 || "key" === r6 || r6 in l5 || N(n7, r6, null, u6[r6], i6);
  for (r6 in l5)
    t7 && "function" != typeof l5[r6] || "children" === r6 || "key" === r6 || "value" === r6 || "checked" === r6 || u6[r6] === l5[r6] || N(n7, r6, l5[r6], u6[r6], i6);
}
function C(n7, l5, u6) {
  "-" === l5[0] ? n7.setProperty(l5, u6) : n7[l5] = "number" == typeof u6 && false === s2.test(l5) ? u6 + "px" : null == u6 ? "" : u6;
}
function N(n7, l5, u6, i6, t7) {
  var r6, o6, f5, e5, c6;
  if (t7 ? "className" === l5 && (l5 = "class") : "class" === l5 && (l5 = "className"), "style" === l5)
    if (r6 = n7.style, "string" == typeof u6) r6.cssText = u6;
    else {
      if ("string" == typeof i6 && (r6.cssText = "", i6 = null), i6)
        for (e5 in i6) u6 && e5 in u6 || C(r6, e5, "");
      if (u6) for (c6 in u6) i6 && u6[c6] === i6[c6] || C(r6, c6, u6[c6]);
    }
  else
    "o" === l5[0] && "n" === l5[1] ? (o6 = l5 !== (l5 = l5.replace(/Capture$/, "")), f5 = l5.toLowerCase(), l5 = (f5 in n7 ? f5 : l5).slice(2), u6 ? (i6 || n7.addEventListener(l5, z, o6), (n7.l || (n7.l = {}))[l5] = u6) : n7.removeEventListener(l5, z, o6)) : "list" !== l5 && "tagName" !== l5 && "form" !== l5 && "type" !== l5 && "size" !== l5 && !t7 && l5 in n7 ? n7[l5] = null == u6 ? "" : u6 : "function" != typeof u6 && "dangerouslySetInnerHTML" !== l5 && (l5 !== (l5 = l5.replace(/^xlink:?/, "")) ? null == u6 || false === u6 ? n7.removeAttributeNS(
      "http://www.w3.org/1999/xlink",
      l5.toLowerCase()
    ) : n7.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      l5.toLowerCase(),
      u6
    ) : null == u6 || false === u6 && !/^ar/.test(l5) ? n7.removeAttribute(l5) : n7.setAttribute(l5, u6));
}
function z(l5) {
  this.l[l5.type](n2.event ? n2.event(l5) : l5);
}
function A(l5, u6, i6, t7, r6, o6, f5, e5, c6) {
  var s6, v5, h5, p5, y5, w5, k4, g5, _6, x4, P3 = u6.type;
  if (void 0 !== u6.constructor) return null;
  (s6 = n2.__b) && s6(u6);
  try {
    n: if ("function" == typeof P3) {
      if (g5 = u6.props, _6 = (s6 = P3.contextType) && t7[s6.__c], x4 = s6 ? _6 ? _6.props.value : s6.__ : t7, i6.__c ? k4 = (v5 = u6.__c = i6.__c).__ = v5.__E : ("prototype" in P3 && P3.prototype.render ? u6.__c = v5 = new P3(g5, x4) : (u6.__c = v5 = new m(g5, x4), v5.constructor = P3, v5.render = E), _6 && _6.sub(v5), v5.props = g5, v5.state || (v5.state = {}), v5.context = x4, v5.__n = t7, h5 = v5.__d = true, v5.__h = []), null == v5.__s && (v5.__s = v5.state), null != P3.getDerivedStateFromProps && (v5.__s == v5.state && (v5.__s = a2({}, v5.__s)), a2(v5.__s, P3.getDerivedStateFromProps(g5, v5.__s))), p5 = v5.props, y5 = v5.state, h5)
        null == P3.getDerivedStateFromProps && null != v5.componentWillMount && v5.componentWillMount(), null != v5.componentDidMount && v5.__h.push(v5.componentDidMount);
      else {
        if (null == P3.getDerivedStateFromProps && g5 !== p5 && null != v5.componentWillReceiveProps && v5.componentWillReceiveProps(g5, x4), !v5.__e && null != v5.shouldComponentUpdate && false === v5.shouldComponentUpdate(g5, v5.__s, x4) || u6.__v === i6.__v && !v5.__) {
          for (v5.props = g5, v5.state = v5.__s, u6.__v !== i6.__v && (v5.__d = false), v5.__v = u6, u6.__e = i6.__e, u6.__k = i6.__k, v5.__h.length && f5.push(v5), s6 = 0; s6 < u6.__k.length; s6++)
            u6.__k[s6] && (u6.__k[s6].__ = u6);
          break n;
        }
        null != v5.componentWillUpdate && v5.componentWillUpdate(g5, v5.__s, x4), null != v5.componentDidUpdate && v5.__h.push(function() {
          v5.componentDidUpdate(p5, y5, w5);
        });
      }
      ;
      v5.context = x4, v5.props = g5, v5.state = v5.__s, (s6 = n2.__r) && s6(u6), v5.__d = false, v5.__v = u6, v5.__P = l5, s6 = v5.render(v5.props, v5.state, v5.context), u6.__k = null != s6 && s6.type == d && null == s6.key ? s6.props.children : Array.isArray(s6) ? s6 : [s6], null != v5.getChildContext && (t7 = a2(a2({}, t7), v5.getChildContext())), h5 || null == v5.getSnapshotBeforeUpdate || (w5 = v5.getSnapshotBeforeUpdate(p5, y5)), b(l5, u6, i6, t7, r6, o6, f5, e5, c6), v5.base = u6.__e, v5.__h.length && f5.push(v5), k4 && (v5.__E = v5.__ = null), v5.__e = false;
    } else
      null == o6 && u6.__v === i6.__v ? (u6.__k = i6.__k, u6.__e = i6.__e) : u6.__e = $(i6.__e, u6, i6, t7, r6, o6, f5, c6);
    (s6 = n2.diffed) && s6(u6);
  } catch (l6) {
    ;
    u6.__v = null, n2.__e(l6, u6, i6);
  }
  return u6.__e;
}
function T(l5, u6) {
  n2.__c && n2.__c(u6, l5), l5.some(function(u7) {
    try {
      ;
      l5 = u7.__h, u7.__h = [], l5.some(function(n7) {
        n7.call(u7);
      });
    } catch (l6) {
      n2.__e(l6, u7.__v);
    }
  });
}
function $(n7, l5, u6, i6, t7, r6, o6, f5) {
  var s6, a6, v5, h5, p5, y5 = u6.props, d4 = l5.props;
  if (t7 = "svg" === l5.type || t7, null != r6) {
    for (s6 = 0; s6 < r6.length; s6++)
      if (null != (a6 = r6[s6]) && ((null === l5.type ? 3 === a6.nodeType : a6.localName === l5.type) || n7 == a6)) {
        ;
        n7 = a6, r6[s6] = null;
        break;
      }
  }
  if (null == n7) {
    if (null === l5.type) return document.createTextNode(d4);
    n7 = t7 ? document.createElementNS("http://www.w3.org/2000/svg", l5.type) : document.createElement(l5.type, d4.is && { is: d4.is }), r6 = null, f5 = false;
  }
  if (null === l5.type) y5 !== d4 && n7.data != d4 && (n7.data = d4);
  else {
    if (null != r6 && (r6 = c.slice.call(n7.childNodes)), v5 = (y5 = u6.props || e).dangerouslySetInnerHTML, h5 = d4.dangerouslySetInnerHTML, !f5) {
      if (y5 === e)
        for (y5 = {}, p5 = 0; p5 < n7.attributes.length; p5++)
          y5[n7.attributes[p5].name] = n7.attributes[p5].value;
      (h5 || v5) && (h5 && v5 && h5.__html == v5.__html || (n7.innerHTML = h5 && h5.__html || ""));
    }
    P(n7, d4, y5, t7, f5), h5 ? l5.__k = [] : (l5.__k = l5.props.children, b(n7, l5, u6, i6, "foreignObject" !== l5.type && t7, r6, o6, e, f5)), f5 || ("value" in d4 && void 0 !== (s6 = d4.value) && s6 !== n7.value && N(n7, "value", s6, y5.value, false), "checked" in d4 && void 0 !== (s6 = d4.checked) && s6 !== n7.checked && N(n7, "checked", s6, y5.checked, false));
  }
  return n7;
}
function j(l5, u6, i6) {
  try {
    "function" == typeof l5 ? l5(u6) : l5.current = u6;
  } catch (l6) {
    n2.__e(l6, i6);
  }
}
function D(l5, u6, i6) {
  var t7, r6, o6;
  if (n2.unmount && n2.unmount(l5), (t7 = l5.ref) && (t7.current && t7.current !== l5.__e || j(t7, null, u6)), i6 || "function" == typeof l5.type || (i6 = null != (r6 = l5.__e)), l5.__e = l5.__d = void 0, null != (t7 = l5.__c)) {
    if (t7.componentWillUnmount)
      try {
        t7.componentWillUnmount();
      } catch (l6) {
        n2.__e(l6, u6);
      }
    t7.base = t7.__P = null;
  }
  if (t7 = l5.__k) for (o6 = 0; o6 < t7.length; o6++) t7[o6] && D(t7[o6], u6, i6);
  null != r6 && v(r6);
}
function E(n7, l5, u6) {
  return this.constructor(n7, u6);
}
function H(l5, u6, i6) {
  var t7, r6, f5;
  n2.__ && n2.__(l5, u6), r6 = (t7 = i6 === o2) ? null : i6 && i6.__k || u6.__k, l5 = h(d, null, [l5]), f5 = [], A(
    u6,
    (t7 ? u6 : i6 || u6).__k = l5,
    r6 || e,
    e,
    void 0 !== u6.ownerSVGElement,
    i6 && !t7 ? [i6] : r6 ? null : c.slice.call(u6.childNodes),
    f5,
    i6 || e,
    t7
  ), T(f5, l5);
}
function I(n7, l5) {
  H(n7, l5, o2);
}
function L(n7, l5) {
  var u6, i6;
  for (i6 in l5 = a2(a2({}, n7.props), l5), arguments.length > 2 && (l5.children = c.slice.call(arguments, 2)), u6 = {}, l5)
    "key" !== i6 && "ref" !== i6 && (u6[i6] = l5[i6]);
  return p(n7.type, u6, l5.key || n7.key, l5.ref || n7.ref, null);
}
function M(n7) {
  var l5 = {}, u6 = {
    __c: "__cC" + f++,
    __: n7,
    Consumer: function(n8, l6) {
      return n8.children(l6);
    },
    Provider: function(n8) {
      var i6, t7 = this;
      return this.getChildContext || (i6 = [], this.getChildContext = function() {
        return l5[u6.__c] = t7, l5;
      }, this.shouldComponentUpdate = function(n9) {
        t7.props.value !== n9.value && i6.some(function(l6) {
          ;
          l6.context = n9.value, g(l6);
        });
      }, this.sub = function(n9) {
        i6.push(n9);
        var l6 = n9.componentWillUnmount;
        n9.componentWillUnmount = function() {
          i6.splice(i6.indexOf(n9), 1), l6 && l6.call(n9);
        };
      }), n8.children;
    }
  };
  return u6.Consumer.contextType = u6, u6.Provider.__ = u6, u6;
}
var n2, l, u, i2, t, r2, o2, f, e, c, s2;
var init_preact = __esm({
  "library/preact.js"() {
    e = {};
    c = [];
    s2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    n2 = {
      __e: function(n7, l5) {
        for (var u6, i6; l5 = l5.__; )
          if ((u6 = l5.__c) && !u6.__)
            try {
              if (u6.constructor && null != u6.constructor.getDerivedStateFromError && (i6 = true, u6.setState(u6.constructor.getDerivedStateFromError(n7))), null != u6.componentDidCatch && (i6 = true, u6.componentDidCatch(n7)), i6)
                return g(u6.__E = u6);
            } catch (l6) {
              n7 = l6;
            }
        throw n7;
      }
    }, l = function(n7) {
      return null != n7 && void 0 === n7.constructor;
    }, m.prototype.setState = function(n7, l5) {
      var u6;
      u6 = this.__s !== this.state ? this.__s : this.__s = a2({}, this.state), "function" == typeof n7 && (n7 = n7(u6, this.props)), n7 && a2(u6, n7), null != n7 && this.__v && (l5 && this.__h.push(l5), g(this));
    }, m.prototype.forceUpdate = function(n7) {
      this.__v && (this.__e = true, n7 && this.__h.push(n7), g(this));
    }, m.prototype.render = d, u = [], i2 = 0, t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o2 = e, f = 0;
  }
});

// library/hooks.js
var hooks_exports = {};
__export(hooks_exports, {
  useCallback: () => T2,
  useContext: () => w2,
  useDebugValue: () => A2,
  useEffect: () => l2,
  useErrorBoundary: () => F,
  useImperativeHandle: () => s3,
  useLayoutEffect: () => y2,
  useMemo: () => h2,
  useReducer: () => p2,
  useRef: () => d2,
  useState: () => m2
});
function v2(t7, r6) {
  n2.__h && n2.__h(u2, t7, i3 || r6), i3 = 0;
  var o6 = u2.__H || (u2.__H = { __: [], __h: [] });
  return t7 >= o6.__.length && o6.__.push({}), o6.__[t7];
}
function m2(n7) {
  return i3 = 1, p2(E2, n7);
}
function p2(n7, r6, i6) {
  var o6 = v2(t2++, 2);
  return o6.__c || (o6.__c = u2, o6.__ = [
    i6 ? i6(r6) : E2(void 0, r6),
    function(t7) {
      var u6 = n7(o6.__[0], t7);
      o6.__[0] !== u6 && (o6.__[0] = u6, o6.__c.setState({}));
    }
  ]), o6.__;
}
function l2(r6, i6) {
  var o6 = v2(t2++, 3);
  !n2.__s && x2(o6.__H, i6) && (o6.__ = r6, o6.__H = i6, u2.__H.__h.push(o6));
}
function y2(r6, i6) {
  var o6 = v2(t2++, 4);
  !n2.__s && x2(o6.__H, i6) && (o6.__ = r6, o6.__H = i6, u2.__h.push(o6));
}
function d2(n7) {
  return i3 = 5, h2(function() {
    return { current: n7 };
  }, []);
}
function s3(n7, t7, u6) {
  ;
  i3 = 6, y2(
    function() {
      "function" == typeof n7 ? n7(t7()) : n7 && (n7.current = t7());
    },
    null == u6 ? u6 : u6.concat(n7)
  );
}
function h2(n7, u6) {
  var r6 = v2(t2++, 7);
  return x2(r6.__H, u6) ? (r6.__H = u6, r6.__h = n7, r6.__ = n7()) : r6.__;
}
function T2(n7, t7) {
  return i3 = 8, h2(function() {
    return n7;
  }, t7);
}
function w2(n7) {
  var r6 = u2.context[n7.__c], i6 = v2(t2++, 9);
  return i6.__c = n7, r6 ? (null == i6.__ && (i6.__ = true, r6.sub(u2)), r6.props.value) : n7.__;
}
function A2(t7, u6) {
  n2.useDebugValue && n2.useDebugValue(u6 ? u6(t7) : t7);
}
function F(n7) {
  var r6 = v2(t2++, 10), i6 = m2();
  return r6.__ = n7, u2.componentDidCatch || (u2.componentDidCatch = function(n8) {
    r6.__ && r6.__(n8), i6[1](n8);
  }), [
    i6[0],
    function() {
      i6[1](void 0);
    }
  ];
}
function _3() {
  o3.some(function(t7) {
    if (t7.__P)
      try {
        t7.__H.__h.forEach(g2), t7.__H.__h.forEach(q), t7.__H.__h = [];
      } catch (u6) {
        return t7.__H.__h = [], n2.__e(u6, t7.__v), true;
      }
  }), o3 = [];
}
function g2(n7) {
  n7.t && n7.t();
}
function q(n7) {
  var t7 = n7.__();
  "function" == typeof t7 && (n7.t = t7);
}
function x2(n7, t7) {
  return !n7 || t7.some(function(t8, u6) {
    return t8 !== n7[u6];
  });
}
function E2(n7, t7) {
  return "function" == typeof t7 ? t7(n7) : t7;
}
var t2, u2, r3, i3, o3, c2, f2, e2, a3;
var init_hooks = __esm({
  "library/hooks.js"() {
    init_preact();
    i3 = 0;
    o3 = [];
    c2 = n2.__r;
    f2 = n2.diffed;
    e2 = n2.__c;
    a3 = n2.unmount;
    n2.__r = function(n7) {
      c2 && c2(n7), t2 = 0, (u2 = n7.__c).__H && (u2.__H.__h.forEach(g2), u2.__H.__h.forEach(q), u2.__H.__h = []);
    }, n2.diffed = function(t7) {
      f2 && f2(t7);
      var u6 = t7.__c;
      if (u6) {
        var i6 = u6.__H;
        i6 && i6.__h.length && (1 !== o3.push(u6) && r3 === n2.requestAnimationFrame || ((r3 = n2.requestAnimationFrame) || function(n7) {
          var t8, u7 = function() {
            clearTimeout(r6), cancelAnimationFrame(t8), setTimeout(n7);
          }, r6 = setTimeout(u7, 100);
          "undefined" != typeof window && (t8 = requestAnimationFrame(u7));
        })(_3));
      }
    }, n2.__c = function(t7, u6) {
      u6.some(function(t8) {
        try {
          t8.__h.forEach(g2), t8.__h = t8.__h.filter(function(n7) {
            return !n7.__ || q(n7);
          });
        } catch (r6) {
          u6.some(function(n7) {
            n7.__h && (n7.__h = []);
          }), u6 = [], n2.__e(r6, t8.__v);
        }
      }), e2 && e2(t7, u6);
    }, n2.unmount = function(t7) {
      a3 && a3(t7);
      var u6 = t7.__c;
      if (u6) {
        var r6 = u6.__H;
        if (r6)
          try {
            r6.__.forEach(function(n7) {
              return n7.t && n7.t();
            });
          } catch (t8) {
            n2.__e(t8, u6.__v);
          }
      }
    };
  }
});

// library/goober.js
function s4(r6) {
  var e5 = this || {}, n7 = r6.call ? r6(e5.p) : r6;
  return i4(
    n7.map ? u3(n7, [].slice.call(arguments, 1), e5.p) : n7,
    t3(e5.target),
    e5.g,
    e5.o
  );
}
var r4, t3, n3, a4, o4, c3, i4, u3, l3;
var init_goober = __esm({
  "library/goober.js"() {
    r4 = { data: "" };
    t3 = function(t7) {
      try {
        var e5 = t7 ? t7.querySelector("#_goober") : self._goober;
        return e5 || ((e5 = (t7 || document.head).appendChild(
          document.createElement("style")
        )).innerHTML = " ", e5.id = "_goober"), e5.firstChild;
      } catch (r6) {
      }
      return r4;
    };
    n3 = /(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi;
    a4 = /\/\*.*?\*\/|\s{2,}|\n/gm;
    o4 = function(r6, t7, e5) {
      var n7 = "", a6 = "", c6 = "";
      for (var i6 in r6) {
        var u6 = r6[i6];
        if ("object" == typeof u6) {
          var s6 = t7 + " " + i6;
          /&/g.test(i6) && (s6 = i6.replace(/&/g, t7)), "@" == i6[0] && (s6 = t7, "f" == i6[1] && (s6 = i6)), /@k/.test(i6) ? a6 += i6 + "{" + o4(u6, "", "") + "}" : a6 += o4(u6, s6, s6 == t7 ? i6 : e5 || "");
        } else
          /^@i/.test(i6) ? c6 = i6 + " " + u6 + ";" : n7 += i6.replace(/[A-Z]/g, "-$&").toLowerCase() + ":" + u6 + ";";
      }
      if (n7.charCodeAt(0)) {
        var f5 = t7 + "{" + n7 + "}";
        return e5 ? a6 + e5 + "{" + f5 + "}" : c6 + f5 + a6;
      }
      return c6 + a6;
    };
    c3 = {};
    i4 = function(r6, t7, e5, i6) {
      var u6 = JSON.stringify(r6), s6 = c3[u6] || (c3[u6] = ".go" + u6.split("").reduce(function(r7, t8) {
        return 101 * r7 + t8.charCodeAt(0) >>> 0;
      }, 11));
      return function(r7, t8, e6) {
        t8.data.indexOf(r7) < 0 && (t8.data = e6 ? r7 + t8.data : t8.data + r7);
      }(
        c3[s6] || (c3[s6] = o4(
          r6[0] ? function(r7) {
            for (var t8, e6 = [{}]; t8 = n3.exec(r7.replace(a4, "")); )
              t8[4] && e6.shift(), t8[3] ? e6.unshift(e6[0][t8[3]] = e6[0][t8[3]] || {}) : t8[4] || (e6[0][t8[1]] = t8[2]);
            return e6[0];
          }(r6) : r6,
          e5 ? "" : s6
        )),
        t7,
        i6
      ), s6.slice(1);
    };
    u3 = function(r6, t7, e5) {
      return r6.reduce(function(r7, n7, a6) {
        var o6 = t7[a6];
        if (o6 && o6.call) {
          var c6 = o6(e5), i6 = c6 && c6.props && c6.props.className || /^go/.test(c6) && c6;
          o6 = i6 ? "." + i6 : c6 && c6.props ? "" : c6;
        }
        return r7 + n7 + (null == o6 ? "" : o6);
      }, "");
    };
    l3 = s4.bind({ g: 1 });
  }
});

// library/htm.js
function htm_default(s6) {
  var r6 = t4.get(this);
  return r6 || (r6 = /* @__PURE__ */ new Map(), t4.set(this, r6)), (r6 = n4(
    this,
    r6.get(s6) || (r6.set(
      s6,
      r6 = function(n7) {
        for (var t7, s7, r7 = 1, e5 = "", u6 = "", h5 = [0], p5 = function(n8) {
          1 === r7 && (n8 || (e5 = e5.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h5.push(0, n8, e5) : 3 === r7 && (n8 || e5) ? (h5.push(3, n8, e5), r7 = 2) : 2 === r7 && "..." === e5 && n8 ? h5.push(4, n8, 0) : 2 === r7 && e5 && !n8 ? h5.push(5, 0, true, e5) : r7 >= 5 && ((e5 || !n8 && 5 === r7) && (h5.push(r7, 0, e5, s7), r7 = 6), n8 && (h5.push(r7, n8, 0, s7), r7 = 6)), e5 = "";
        }, a6 = 0; a6 < n7.length; a6++) {
          a6 && (1 === r7 && p5(), p5(a6));
          for (var l5 = 0; l5 < n7[a6].length; l5++)
            t7 = n7[a6][l5], 1 === r7 ? "<" === t7 ? (p5(), h5 = [h5], r7 = 3) : e5 += t7 : 4 === r7 ? "--" === e5 && ">" === t7 ? (r7 = 1, e5 = "") : e5 = t7 + e5[0] : u6 ? t7 === u6 ? u6 = "" : e5 += t7 : '"' === t7 || "'" === t7 ? u6 = t7 : ">" === t7 ? (p5(), r7 = 1) : r7 && ("=" === t7 ? (r7 = 5, s7 = e5, e5 = "") : "/" === t7 && (r7 < 5 || ">" === n7[a6][l5 + 1]) ? (p5(), 3 === r7 && (h5 = h5[0]), r7 = h5, (h5 = h5[0]).push(2, 0, r7), r7 = 0) : " " === t7 || "	" === t7 || "\n" === t7 || "\r" === t7 ? (p5(), r7 = 2) : e5 += t7), 3 === r7 && "!--" === e5 && (r7 = 4, h5 = h5[0]);
        }
        return p5(), h5;
      }(s6)
    ), r6),
    arguments,
    []
  )).length > 1 ? r6 : r6[0];
}
var n4, t4;
var init_htm = __esm({
  "library/htm.js"() {
    n4 = function(t7, s6, r6, e5) {
      var u6;
      s6[0] = 0;
      for (var h5 = 1; h5 < s6.length; h5++) {
        var p5 = s6[h5++], a6 = s6[h5] ? (s6[0] |= p5 ? 1 : 2, r6[s6[h5++]]) : s6[++h5];
        3 === p5 ? e5[0] = a6 : 4 === p5 ? e5[1] = Object.assign(e5[1] || {}, a6) : 5 === p5 ? (e5[1] = e5[1] || {})[s6[++h5]] = a6 : 6 === p5 ? e5[1][s6[++h5]] += a6 + "" : p5 ? (u6 = t7.apply(a6, n4(t7, a6, r6, ["", null])), e5.push(u6), a6[0] ? s6[0] |= 2 : (s6[h5 - 2] = 0, s6[h5] = u6)) : e5.push(a6);
      }
      return e5;
    };
    t4 = /* @__PURE__ */ new Map();
  }
});

// utils.js
function uid(len) {
  var str = "", num = len || 11;
  while (num--) str += HEX[Math.random() * 36 | 0];
  return str;
}
var IDX, HEX, html, preact, pReduce, pSeries, average, timeSince, extractValidSuites, startTesting, latestLocalStorage, updateProgress, insertItemAtIndex, updateTestCaseName, updateTestCaseCode, removeTestCase, copyTestCase, addTestCase, setSearchTerm, highlight, languages, highlightCode, getColorForPercent, copyHashURL, decodeState;
var init_utils = __esm({
  "utils.js"() {
    init_preact();
    init_hooks();
    init_goober();
    init_htm();
    IDX = 36;
    HEX = "";
    while (IDX--) HEX += IDX.toString(36);
    html = htm_default.bind(h);
    preact = {
      ...preact_exports,
      ...hooks_exports
    };
    pReduce = (iterable, reducer, initialValue) => new Promise((resolve, reject) => {
      const iterator = iterable[Symbol.iterator]();
      let index = 0;
      const next = async (total) => {
        const element = iterator.next();
        if (element.done) {
          resolve(total);
          return;
        }
        try {
          const value = await Promise.all([total, element.value]);
          next(reducer(value[0], value[1], index++));
        } catch (error) {
          reject(error);
        }
      };
      next(initialValue);
    });
    pSeries = async (tasks) => {
      const results = [];
      await pReduce(tasks, async (_6, task) => {
        const value = await task();
        results.push(value);
      });
      return results;
    };
    average = (arr) => {
      var sums = {}, counts = {}, values = {}, results = [], ids = {}, name2;
      for (var i6 = 0; i6 < arr.length; i6++) {
        name2 = arr[i6].code;
        if (!(name2 in sums)) {
          sums[name2] = 0;
          counts[name2] = 0;
          ids[name2] = arr[i6].name;
        }
        values[name2] = (values[name2] || []).concat(arr[i6].ops);
        sums[name2] += arr[i6].ops;
        counts[name2]++;
      }
      for (name2 in sums) {
        results.push({
          name: ids[name2],
          code: name2,
          runs: values[name2],
          ops: sums[name2] < 0 ? -1 : sums[name2] / counts[name2] << 0
        });
      }
      return results;
    };
    timeSince = (date) => {
      const seconds = Math.floor((/* @__PURE__ */ new Date() - date) / 1e3);
      let interval = Math.floor(seconds / 31536e3);
      if (interval > 1) return interval + " years";
      interval = Math.floor(seconds / 2592e3);
      if (interval > 1) return interval + " months";
      interval = Math.floor(seconds / 86400);
      if (interval > 1) return interval + " days";
      interval = Math.floor(seconds / 3600);
      if (interval > 1) return interval + " hours";
      interval = Math.floor(seconds / 60);
      if (interval > 1) return interval + " minutes";
      return Math.floor(seconds) < 5 ? "just now" : Math.floor(seconds) + " seconds";
    };
    extractValidSuites = (o6) => Object.entries(o6).reduce((a6, [k4, v5]) => {
      let suite2 = {};
      try {
        suite2 = JSON.parse(v5);
      } catch (e5) {
      }
      return suite2.before && suite2.tests ? [...a6, [k4, suite2]] : a6;
    }, []);
    startTesting = (state2) => ({
      tests: state2.tests.map((test) => ({ ...test, ops: 0 })),
      started: true,
      dialog: false,
      progress: 0
    });
    latestLocalStorage = () => ({
      suites: extractValidSuites(localStorage)
    });
    updateProgress = (state2, cycles2 = 1) => ({
      progress: state2.progress + state2.tests.length / cycles2
    });
    insertItemAtIndex = (arr, index, item) => [
      ...arr.slice(0, index),
      item,
      ...arr.slice(index)
    ];
    updateTestCaseName = (id2, name2) => (state2) => ({
      tests: state2.tests.map((t7, i6) => i6 === id2 ? { ...t7, name: name2 } : t7)
    });
    updateTestCaseCode = (id2, code) => (state2) => ({
      tests: state2.tests.map((t7, i6) => i6 === id2 ? { ...t7, code } : t7)
    });
    removeTestCase = (id2) => (state2) => ({
      tests: state2.tests.filter((_6, i6) => i6 !== id2)
    });
    copyTestCase = (id2) => (state2) => ({
      tests: insertItemAtIndex(state2.tests, id2, state2.tests[id2])
    });
    addTestCase = (state2) => ({
      tests: [{ code: "", name: "Test Case", ops: -2 }, ...state2.tests]
    });
    setSearchTerm = (searchTerm) => (state2) => ({
      searchTerm
    });
    ({ highlight, languages } = Prism);
    highlightCode = (code) => highlight(code, languages.js);
    getColorForPercent = (value) => `hsl(${(value * 120).toString(10)},62%,50%)`;
    copyHashURL = (state2) => {
      const x4 = JSON.stringify(state2);
      const link = `${location.origin}#${encodeURIComponent(btoa(x4))}`;
      var input = document.createElement("input");
      input.setAttribute("value", link);
      document.body.appendChild(input);
      input.select();
      var result = document.execCommand("copy");
      document.body.removeChild(input);
    };
    decodeState = (encodedState) => {
      try {
        return JSON.parse(atob(decodeURIComponent(encodedState)));
      } catch (e5) {
        console.log(e5);
      }
      try {
        return {
          title: "",
          before: atob(location.hash.slice(1).split("/")[0]),
          tests: JSON.parse(atob(location.hash.slice(1).split("/")[1])).map(
            ({ code }, testIndex) => {
              return {
                name: `Test ${testIndex + 1}`,
                code,
                ops: 0
              };
            }
          )
        };
      } catch (e5) {
        console.log(e5);
      }
      return {};
    };
  }
});

// components/icons.js
var CopyIcon, CloseIcon, AddIcon, RemoveIcon, ArchiveIcon, RunIcon, ForkIcon, SaveIcon, SearchIcon, LinkIcon;
var init_icons = __esm({
  "components/icons.js"() {
    init_utils();
    CopyIcon = () => html`
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"
    />
  </svg>
`;
    CloseIcon = () => html`
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
`;
    AddIcon = () => html`
  <svg width="20" height="20" viewBox="0 0 12 16" aria-hidden="true">
    <path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path>
  </svg>
`;
    RemoveIcon = () => html`
  <svg height="24" width="24" viewBox="0 0 24 24">
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
    />
    <path d="M0 0h24v24H0V0z" fill="none" />
  </svg>
`;
    ArchiveIcon = () => html`
  <svg width="30" height="30" viewBox="0 0 12 16" aria-hidden="true">
    <path
      fill-rule="evenodd"
      d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
    ></path>
  </svg>
`;
    RunIcon = () => html`
  <svg width="20" height="20" viewBox="0 0 12 16" aria-hidden="true">
    <path
      fill-rule="evenodd"
      d="M10.24 7.4a4.15 4.15 0 01-1.2 3.6 4.346 4.346 0 01-5.41.54L4.8 10.4.5 9.8l.6 4.2 1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 001.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 015.41-.54L7.2 5.6l4.3.6-.6-4.2-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 012.96 5z"
    ></path>
  </svg>
`;
    ForkIcon = () => html`
  <svg width="20" height="20" viewBox="0 0 10 16" aria-hidden="true">
    <path
      fill-rule="evenodd"
      d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
    ></path>
  </svg>
`;
    SaveIcon = () => html`
  <svg
    width="20"
    height="20"
    fill-rule="evenodd"
    clip-rule="evenodd"
    viewBox="0 0 640 640"
  >
    <path
      d="M626.689 15.414zm-55.654 574.472v.011H459.336c-2.09 0-3.79-1.689-3.79-3.767V416.97l-.013-.508c0-4.701-.862-8.599-2.575-11.587a23.657 23.657 0 0 0-1.05-1.618 13.646 13.646 0 0 0-1.23-1.394l-.105-.13c-1.571-1.559-3.544-2.764-5.859-3.59l-1.287-.39-.201-.071h-.035c-2.15-.579-4.571-.874-7.205-.886h-.26l-.402-.012H204.262c-4.618 0-8.433.886-11.35 2.528l-.095.07-1.382.875-.212.189c-.485.354-.957.791-1.394 1.193l-.083.094-.035.036c-3.213 3.271-4.82 8.197-4.82 14.705l-.023.2V586.13h-.012c0 2.08-1.724 3.756-3.78 3.756h-63.874a3.744 3.744 0 0 1-2.681-1.11l-62.906-62.894a3.901 3.901 0 0 1-1.512-3.083V69.474l-.024-.402c0-4.323.78-7.949 2.292-10.795h.011c.284-.555.58-1.016.898-1.5l.13-.166a9.743 9.743 0 0 1 1.3-1.535l.046-.083.13-.13h.012c1.323-1.322 2.965-2.35 4.82-3.094l.188-.095.095-.035.082-.06.945-.318v.012l.071-.036c2.197-.708 4.713-1.05 7.512-1.11l.46-.035h54.202c2.079 0 3.791 1.689 3.791 3.767v227.436c0 2.729.237 5.35.697 7.796a36.732 36.732 0 0 0 2.02 6.992l.07.106.013.036v.012a38.87 38.87 0 0 0 3.472 6.52c1.347 2.019 2.894 4.027 4.713 5.905l.118.094.023.036.036.012a38.841 38.841 0 0 0 8.433 6.638l.06.011.07.024.07.035 1.678.886.024.012 2.09.933v.012l.036.012.012.012h.035v.011c1.713.709 3.472 1.347 5.232 1.784h.036l.165.023.047.012h.178l1.346.284v.012c2.362.448 4.854.708 7.382.732l.106-.012h309.181c5.386 0 10.323-.933 14.847-2.787l.07-.048c4.536-1.866 8.682-4.677 12.473-8.421l.142-.177c1.866-1.878 3.579-3.91 4.996-6.024a36.432 36.432 0 0 0 3.45-6.342l.011-.06.035-.059.036-.118a35.794 35.794 0 0 0 2.138-6.98l.023-.142c.46-2.457.685-5.067.685-7.772V53.871c0-2.079 1.725-3.78 3.827-3.78h53.765c3.047 0 5.693.367 8.008 1.075 2.492.78 4.618 2.032 6.26 3.674 1.346 1.334 2.433 3.023 3.189 4.972l-.024.012.07.095.32.909h-.024l.06.13c.72 2.138 1.05 4.654 1.11 7.406l.047.448v.284l-.024.082v501.727c0 2.906-.378 5.587-1.075 7.855l-.059.165v.012l-.012.118-.413 1.122h-.012l-.118.296-.472 1.039-.071.2-.13.213-.012-.012-.154.308-.755 1.169h-.012l-.26.401-.732.898-.32.354c-.767.815-1.7 1.56-2.74 2.186a17.6 17.6 0 0 1-2.881 1.358l-.331.118c-.839.283-1.76.52-2.74.72l-.095.012-.059.012-.094.024-.45.07-.106.024h-.023l-.083.012c-1.17.165-2.54.283-3.957.307h-.696zM467.912 51.155l-296.248-1.063V262.42h-.024c0 2.386.295 4.465.886 6.272.154.295.224.543.343.78a10.107 10.107 0 0 0 2.078 3.153l.154.142v.011c.295.296.59.544.874.768.307.26.697.496 1.063.709 2.055 1.193 4.795 1.76 8.232 1.76v.011l269 1.312v-.012h.023v.012c4.724 0 8.197-1.099 10.346-3.308 2.186-2.22 3.284-5.716 3.296-10.535h-.024V51.155zM221.177 426.502h79.23v.023c1.842 0 3.377 1.5 3.377 3.343V586.53c0 1.843-1.535 3.367-3.378 3.367h-79.23v-.012c-1.83 0-3.365-1.512-3.365-3.355V429.868c0-1.842 1.535-3.366 3.366-3.366zm405.596 197.672zm-576.15-622h543.55c6.355 0 12.237 1.122 17.67 3.342l2.646 1.17c4.394 2.137 8.469 5.066 12.272 8.799l3.39 3.85 2.929 4.075c4.594 7.217 6.933 15.425 6.933 24.591v543.538c0 6.33-1.122 12.225-3.354 17.693-2.21 5.445-5.516 10.418-9.922 14.988a46.306 46.306 0 0 1-7.724 6.32l-1.323.885a40.453 40.453 0 0 1-5.823 2.989c-5.457 2.29-11.35 3.413-17.705 3.413H90.475l-1.276-1.287-83.576-83.576-5.48-3.638V47.846C-1.7 27.544 14.683 7.89 32.907 5.493c5.469-2.209 11.374-3.319 17.717-3.319z"
    ></path>
  </svg>
`;
    SearchIcon = () => html`
  <svg width="36" height="36" viewBox="0 0 16 16" aria-hidden="true">
    <path
      fill-rule="evenodd"
      d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
    ></path>
  </svg>
`;
    LinkIcon = () => html`
  <svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true">
    <path
      fill-rule="evenodd"
      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
    ></path>
  </svg>
`;
  }
});

// components/editor.js
function n5(e5, t7) {
  if (!e5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !t7 || "object" != typeof t7 && "function" != typeof t7 ? e5 : t7;
}
var e3, t5, i5, r5, o5, a5, s5, l4, c4, h3, u4, p3, d3, f3, y3, g3, _4, v3, m3, editor_default;
var init_editor = __esm({
  "components/editor.js"() {
    init_utils();
    e3 = Object.assign;
    t5 = /* @__PURE__ */ function() {
      function e5(e6, t7) {
        for (var n7 = 0; n7 < t7.length; n7++) {
          var i6 = t7[n7];
          i6.enumerable = i6.enumerable || false, i6.configurable = true, "value" in i6 && (i6.writable = true), Object.defineProperty(e6, i6.key, i6);
        }
      }
      return function(t7, n7, i6) {
        return n7 && e5(t7.prototype, n7), i6 && e5(t7, i6), t7;
      };
    }();
    i5 = 13;
    r5 = 9;
    o5 = 8;
    a5 = 89;
    s5 = 90;
    l4 = 77;
    c4 = 57;
    h3 = 219;
    u4 = 222;
    p3 = 192;
    d3 = 100;
    f3 = 3e3;
    y3 = "navigator" in window && /Win/i.test(navigator.platform);
    g3 = "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    _4 = "npm__react-simple-code-editor__textarea";
    v3 = function(v5) {
      function b3() {
        var t7, _6, v6;
        !function(e5, t8) {
          if (!(e5 instanceof t8)) throw new TypeError("Cannot call a class as a function");
        }(this, b3);
        for (var m5 = arguments.length, k4 = Array(m5), S3 = 0; S3 < m5; S3++) k4[S3] = arguments[S3];
        return _6 = v6 = n5(this, (t7 = b3.__proto__ || Object.getPrototypeOf(b3)).call.apply(t7, [this].concat(k4))), v6.state = { capture: true }, v6._recordCurrentState = function() {
          var e5 = v6._input;
          if (e5) {
            var t8 = e5.value, n7 = e5.selectionStart, i6 = e5.selectionEnd;
            v6._recordChange({ value: t8, selectionStart: n7, selectionEnd: i6 });
          }
        }, v6._getLines = function(e5, t8) {
          return e5.substring(0, t8).split("\n");
        }, v6._recordChange = function(t8) {
          var n7 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i6 = v6._history, r6 = i6.stack, o6 = i6.offset;
          if (r6.length && o6 > -1) {
            v6._history.stack = r6.slice(0, o6 + 1);
            var a6 = v6._history.stack.length;
            if (a6 > d3) {
              var s6 = a6 - d3;
              v6._history.stack = r6.slice(s6, a6), v6._history.offset = Math.max(v6._history.offset - s6, 0);
            }
          }
          var l5 = Date.now();
          if (n7) {
            var c6 = v6._history.stack[v6._history.offset];
            if (c6 && l5 - c6.timestamp < f3) {
              var h5 = /[^a-z0-9]([a-z0-9]+)$/i, u6 = v6._getLines(c6.value, c6.selectionStart).pop().match(h5), p5 = v6._getLines(t8.value, t8.selectionStart).pop().match(h5);
              if (u6 && p5 && p5[1].startsWith(u6[1])) return void (v6._history.stack[v6._history.offset] = e3({}, t8, { timestamp: l5 }));
            }
          }
          v6._history.stack.push(e3({}, t8, { timestamp: l5 })), v6._history.offset++;
        }, v6._updateInput = function(e5) {
          var t8 = v6._input;
          t8 && (t8.value = e5.value, t8.selectionStart = e5.selectionStart, t8.selectionEnd = e5.selectionEnd, v6.props.onValueChange(e5.value));
        }, v6._applyEdits = function(t8) {
          var n7 = v6._input, i6 = v6._history.stack[v6._history.offset];
          i6 && n7 && (v6._history.stack[v6._history.offset] = e3({}, i6, { selectionStart: n7.selectionStart, selectionEnd: n7.selectionEnd })), v6._recordChange(t8), v6._updateInput(t8);
        }, v6._undoEdit = function() {
          var e5 = v6._history, t8 = e5.stack, n7 = e5.offset, i6 = t8[n7 - 1];
          i6 && (v6._updateInput(i6), v6._history.offset = Math.max(n7 - 1, 0));
        }, v6._redoEdit = function() {
          var e5 = v6._history, t8 = e5.stack, n7 = e5.offset, i6 = t8[n7 + 1];
          i6 && (v6._updateInput(i6), v6._history.offset = Math.min(n7 + 1, t8.length - 1));
        }, v6._handleKeyDown = function(e5) {
          var t8 = v6.props, n7 = t8.tabSize, d4 = t8.insertSpaces, f5 = t8.ignoreTabKey, _7 = t8.onKeyDown;
          if (!_7 || (_7(e5), !e5.defaultPrevented)) {
            var m6 = e5.target, b4 = m6.value, k5 = m6.selectionStart, S4 = m6.selectionEnd, C2 = (d4 ? " " : "     ").repeat(n7);
            if (e5.keyCode === r5 && !f5 && v6.state.capture)
              if (e5.preventDefault(), e5.shiftKey) {
                var E4 = v6._getLines(b4, k5), w5 = E4.length - 1, x4 = v6._getLines(b4, S4).length - 1, K2 = b4.split("\n").map(function(e6, t9) {
                  return t9 >= w5 && t9 <= x4 && e6.startsWith(C2) ? e6.substring(C2.length) : e6;
                }).join("\n");
                if (b4 !== K2) {
                  var L4 = E4[w5];
                  v6._applyEdits({ value: K2, selectionStart: L4.startsWith(C2) ? k5 - C2.length : k5, selectionEnd: S4 - (b4.length - K2.length) });
                }
              } else if (k5 !== S4) {
                var O3 = v6._getLines(b4, k5), D4 = O3.length - 1, I3 = v6._getLines(b4, S4).length - 1, z4 = O3[D4];
                v6._applyEdits({
                  value: b4.split("\n").map(function(e6, t9) {
                    return t9 >= D4 && t9 <= I3 ? C2 + e6 : e6;
                  }).join("\n"),
                  selectionStart: /\S/.test(z4) ? k5 + C2.length : k5,
                  selectionEnd: S4 + C2.length * (I3 - D4 + 1)
                });
              } else {
                var j3 = k5 + C2.length;
                v6._applyEdits({ value: b4.substring(0, k5) + C2 + b4.substring(S4), selectionStart: j3, selectionEnd: j3 });
              }
            else if (e5.keyCode === o5) {
              var P3 = k5 !== S4;
              if (b4.substring(0, k5).endsWith(C2) && !P3) {
                e5.preventDefault();
                var T3 = k5 - C2.length;
                v6._applyEdits({ value: b4.substring(0, k5 - C2.length) + b4.substring(S4), selectionStart: T3, selectionEnd: T3 });
              }
            } else if (e5.keyCode === i5) {
              if (k5 === S4) {
                var F4 = v6._getLines(b4, k5).pop().match(/^\s+/);
                if (F4 && F4[0]) {
                  e5.preventDefault();
                  var R2 = "\n" + F4[0], W3 = k5 + R2.length;
                  v6._applyEdits({ value: b4.substring(0, k5) + R2 + b4.substring(S4), selectionStart: W3, selectionEnd: W3 });
                }
              }
            } else if (e5.keyCode === c4 || e5.keyCode === h3 || e5.keyCode === u4 || e5.keyCode === p3) {
              var M3 = void 0;
              e5.keyCode === c4 && e5.shiftKey ? M3 = ["(", ")"] : e5.keyCode === h3 ? M3 = e5.shiftKey ? ["{", "}"] : ["[", "]"] : e5.keyCode === u4 ? M3 = e5.shiftKey ? ['"', '"'] : ["'", "'"] : e5.keyCode !== p3 || e5.shiftKey || (M3 = ["`", "`"]), k5 !== S4 && M3 && (e5.preventDefault(), v6._applyEdits({ value: b4.substring(0, k5) + M3[0] + b4.substring(k5, S4) + M3[1] + b4.substring(S4), selectionStart: k5, selectionEnd: S4 + 2 }));
            } else
              (g3 ? e5.metaKey && e5.keyCode === s5 : e5.ctrlKey && e5.keyCode === s5) && !e5.shiftKey && !e5.altKey ? (e5.preventDefault(), v6._undoEdit()) : (g3 ? e5.metaKey && e5.keyCode === s5 && e5.shiftKey : y3 ? e5.ctrlKey && e5.keyCode === a5 : e5.ctrlKey && e5.keyCode === s5 && e5.shiftKey) && !e5.altKey ? (e5.preventDefault(), v6._redoEdit()) : e5.keyCode !== l4 || !e5.ctrlKey || g3 && !e5.shiftKey || (e5.preventDefault(), v6.setState(function(e6) {
                return { capture: !e6.capture };
              }));
          }
        }, v6._handleChange = function(e5) {
          var t8 = e5.target, n7 = t8.value, i6 = t8.selectionStart, r6 = t8.selectionEnd;
          v6._recordChange({ value: n7, selectionStart: i6, selectionEnd: r6 }, true), v6.props.onValueChange(n7);
        }, v6._history = { stack: [], offset: -1 }, n5(v6, _6);
      }
      return function(e5, t7) {
        if ("function" != typeof t7 && null !== t7) throw new TypeError("Super expression must either be null or a function, not " + typeof t7);
        e5.prototype = Object.create(t7 && t7.prototype, { constructor: { value: e5, enumerable: false, writable: true, configurable: true } }), t7 && (Object.setPrototypeOf ? Object.setPrototypeOf(e5, t7) : e5.__proto__ = t7);
      }(b3, preact.Component), t5(b3, [
        {
          key: "componentDidMount",
          value: function() {
            this._recordCurrentState();
          }
        },
        {
          key: "render",
          value: function() {
            var t7 = this, n7 = this.props, i6 = n7.value, r6 = n7.style, o6 = n7.padding, a6 = n7.highlight, s6 = n7.textareaId, l5 = n7.autoFocus, c6 = n7.disabled, h5 = n7.form, u6 = n7.maxLength, p5 = n7.minLength, d4 = n7.name, f5 = n7.placeholder, y5 = n7.readOnly, g5 = n7.required, v6 = n7.onClick, b4 = n7.onFocus, k4 = n7.onBlur, S3 = n7.onKeyUp, C2 = (n7.onKeyDown, n7.onValueChange, n7.tabSize, n7.insertSpaces, n7.ignoreTabKey, function(e5, t8) {
              var n8 = {};
              for (var i7 in e5) t8.indexOf(i7) >= 0 || Object.prototype.hasOwnProperty.call(e5, i7) && (n8[i7] = e5[i7]);
              return n8;
            }(n7, ["value", "style", "padding", "highlight", "textareaId", "autoFocus", "disabled", "form", "maxLength", "minLength", "name", "placeholder", "readOnly", "required", "onClick", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onValueChange", "tabSize", "insertSpaces", "ignoreTabKey"])), E4 = { paddingTop: o6, paddingRight: o6, paddingBottom: o6, paddingLeft: o6 }, w5 = a6(i6);
            return preact.createElement(
              "div",
              e3({}, C2, { style: e3({}, m3.container, r6) }),
              preact.createElement("textarea", {
                ref: function(e5) {
                  return t7._input = e5;
                },
                style: e3({}, m3.editor, m3.textarea, E4),
                className: _4,
                id: s6,
                value: i6,
                onInput: this._handleChange,
                onKeyDown: this._handleKeyDown,
                onClick: v6,
                onKeyUp: S3,
                onFocus: b4,
                onBlur: k4,
                disabled: c6,
                form: h5,
                maxLength: u6,
                minLength: p5,
                name: d4,
                placeholder: f5,
                readOnly: y5,
                required: g5,
                autoFocus: l5,
                autoCapitalize: "off",
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: false,
                "data-gramm": false
              }),
              preact.createElement("pre", e3({ "aria-hidden": "true", style: e3({}, m3.editor, m3.highlight, E4) }, "string" == typeof w5 ? { dangerouslySetInnerHTML: { __html: w5 + "<br />" } } : { children: w5 })),
              preact.createElement("style", { type: "text/css", dangerouslySetInnerHTML: { __html: "\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.npm__react-simple-code-editor__textarea:empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .npm__react-simple-code-editor__textarea {\n    color: transparent !important;\n  }\n\n  .npm__react-simple-code-editor__textarea::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n" } })
            );
          }
        },
        {
          key: "session",
          get: function() {
            return { history: this._history };
          },
          set: function(e5) {
            this._history = e5.history;
          }
        }
      ]), b3;
    }();
    v3.defaultProps = { tabSize: 2, insertSpaces: true, ignoreTabKey: false, padding: 0 };
    m3 = { container: { position: "relative", textAlign: "left", boxSizing: "border-box", padding: 0, overflow: "hidden" }, textarea: { position: "absolute", top: 0, left: 0, height: "100%", width: "100%", resize: "none", color: "inherit", overflow: "hidden", outline: "none", MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", WebkitTextFillColor: "transparent" }, highlight: { position: "relative", pointerEvents: "none" }, editor: { margin: 0, border: 0, background: "none", boxSizing: "inherit", display: "inherit", fontFamily: "inherit", fontSize: "inherit", fontStyle: "inherit", fontVariantLigatures: "inherit", fontWeight: "inherit", letterSpacing: "inherit", lineHeight: "inherit", tabSize: "inherit", textIndent: "inherit", textRendering: "inherit", textTransform: "inherit", whiteSpace: "pre-wrap", wordBreak: "keep-all", overflowWrap: "break-word" } };
    editor_default = v3;
  }
});

// components/tests.js
var TestControls, tests_default, style;
var init_tests = __esm({
  "components/tests.js"() {
    init_utils();
    init_icons();
    init_editor();
    TestControls = ({ id: id2, test, state: state2, dispatch: dispatch2 }) => {
      const { tests: tests2, runs: runs2, progress, started: started2 } = state2;
      const progressPercent = progress / (tests2.length * runs2) * 100 << 0;
      return html`
        <div className=${style.testHeader}>
            <small className=${style.id}>${id2 + 1}</small>
            <input disabled=${started2} className=${style.nameInput} onInput=${(e5) => dispatch2(updateTestCaseName(id2, e5.target.value))} value=${`${test.name}`} />
            <p>${test.ops !== -2 && (test.ops === -1 ? "Failed" : test.ops === 0 ? `Testing ${progressPercent}%` : `${Number(test.ops).toLocaleString("en")} ops/s`)}</p>
            <button disabled=${started2} className=${style.button} onClick=${(e5) => dispatch2(copyTestCase(id2))}>
                <${CopyIcon} />
            </button>
            <button disabled=${started2} className=${style.button} onClick=${(e5) => dispatch2(removeTestCase(id2))}>
                <${CloseIcon} />
            </button>
        </div>
    `;
    };
    tests_default = ({ state: state2, dispatch: dispatch2 }) => {
      const { suites: suites2, before: before2, tests: tests2, id: id2, title: title2, started: started2, dialog, dimension1Code: dimension1Code2, dimension2Code: dimension2Code2 } = state2;
      const scaleMessagePrefix = (number) => `const dimension${number} = `;
      const scaleMessagePostfix = (number) => `
// ONLY edit the list^ contents
// NOTE: values must be JSON-able
const dimension${number}Value = oneOf(dimension${number})
// use this^ var in the globals section`;
      return html`
        <article className="tests">
            <div className=${style.testToolbar}>
                <h3>Scaling Factor
                    <br/>
                    <small style="font-weight: 100">If you want to see how performance scales as sizes/values change, use this section</small>
                </h3>
            </div>
            <${editor_default}
                value=${scaleMessagePrefix("1") + (dimension1Code2 || "[100,1000,10000]") + scaleMessagePostfix("1")}
                onValueChange=${(dimension1Code3) => dispatch2({ dimension1Code: dimension1Code3.slice(scaleMessagePrefix("1").length, -scaleMessagePostfix("1").length) })}
                highlight=${highlightCode}
                padding=${20}
                style=${style.editor}
                />
            ${""}
            <div className=${style.testToolbar}>
                <h3>Globals</h3>
                <b className=${style.cmds}> ${navigator.platform.match("Mac") ? "⌘ + ⏎" : "ctrl + ⏎"} </b>
                <button disabled=${started2} data-animate=${dialog} className=${style.start} onClick=${() => dispatch2(startTesting)}>
                    <span>Run Tests</span>
                    <${RunIcon} />
                </button>
                <button
                    disabled=${started2}
                    className=${style.save}
                    onClick=${() => {
        const exists = Object.fromEntries(suites2)[id2];
        const t7 = exists ? uid() : title2 || uid();
        const key = exists ? uid() : id2;
        const data = { title: t7, before: before2, tests: tests2, updated: /* @__PURE__ */ new Date() };
        localStorage.setItem(key, JSON.stringify(data));
        dispatch2({ id: key, title: title2, ...latestLocalStorage() });
      }}
                >
                    ${Object.fromEntries(suites2)[id2] ? html` <${ForkIcon} /> ` : html` <${SaveIcon} /> `}
                </button>
            </div>
            <${editor_default} value=${before2} disabled=${started2} onValueChange=${(before3) => dispatch2({ before: before3 })} highlight=${highlightCode} padding=${20} style=${style.editor} />
            <div className=${style.testToolbar}>
                <h3>Test Cases</h3>
                <div>
                    <button className=${style.add} disabled=${started2} onClick=${() => dispatch2(addTestCase)}>
                        <span>Add Case</span>
                        <${AddIcon} />
                    </button>
                </div>
            </div>
            <ul className=${style.list}>
                ${tests2.map(
        (test, id3) => html`
                        <li key=${id3} className=${style.test}>
                            <${TestControls} id=${id3} test=${test} state=${state2} dispatch=${dispatch2} />
                            <${editor_default} key=${id3} value=${test.code} disabled=${started2} onValueChange=${(code) => dispatch2(updateTestCaseCode(id3, code))} highlight=${highlightCode} padding=${20} style=${style.editor} />
                        </li>
                    `
      )}
            </ul>
        </article>
    `;
    };
    style = {
      editor: {
        width: "100%",
        backgroundColor: "#2a2b2f",
        color: "rgb(255, 255, 255)",
        borderRadius: "1rem",
        fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New'",
        lineHeight: "170%"
      },
      add: s4`
        color: lightblue;
        border-radius: 1rem;
        border: 2px solid lightblue;
        display: flex;
        align-items: center;
        font-weight: bold;
        &:disabled {
            opacity: 0.38;
            cursor: wait;
        }
        > * + * {
            margin-left: 0.62rem;
        }
        svg {
            width: 1.1rem;
            height: 1.1rem;
            fill: lightblue;
        }
    `,
      start: s4`
        color: lightblue;
        border: 2px solid lightblue;
        border-radius: 1rem 0rem 0rem 1rem;
        height: 3rem;
        display: flex;
        font-weight: bold;
        align-items: center;
        &:disabled {
            opacity: 0.38;
            cursor: wait;
        }
        &[data-animate="true"] {
            background: #303037;
            z-index: 1;
            animation: pulse 1s ease-in-out infinite;
        }
        > * + * {
            margin-left: 0.62rem;
        }
        &:disabled svg {
            animation: rotate 1s linear infinite;
        }
        svg {
            fill: lightblue;
        }
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        @keyframes pulse {
            from {
                transform: scale(1.038);
            }
            50% {
                transform: scale(1.1);
            }
            to {
                transform: scale(1.038);
            }
        }
    `,
      save: s4`
        color: lightblue;
        border: 2px solid lightblue;
        height: 3rem;
        border-radius: 0 1rem 1rem 0;
        border-left: 0;
        svg {
            fill: lightblue;
        }
        &:disabled {
            opacity: 0.38;
            cursor: wait;
        }
    `,
      button: s4`
        padding: 0;
        border: 0;
        > svg {
            fill: rgba(255, 255, 255, 0.62);
        }
        &:disabled {
            opacity: 0.5;
        }
    `,
      spinner: s4`
        width: 1rem;
        opacity: 0.5;
    `,
      nameInput: s4`
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        flex: 1 1 100%;
        min-width: 0;
        margin-right: 1rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        outline: none;
    `,
      id: s4`
        width: 1.62rem;
        height: 1.62rem;
        flex: none;
        background: rgba(0, 0, 0, 0.2);
        color: rgba(255, 255, 255, 0.62);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
      cmds: s4`
        margin-right: 1rem;
        color: rgba(255, 255, 255, 0.5);
        background: rgba(0, 0, 0, 0.2);
        padding: 0.38rem 0.62rem;
        border-radius: 0.38rem;
        white-space: nowrap;
        font-weight: lighter;
        @media (max-width: 480px) {
            display: none;
        }
    `,
      list: s4`
        > * + * {
            margin-top: 1rem;
        }
    `,
      test: s4`
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        background-color: #2a2b2f;
        overflow: hidden;
        color: #fff;
    `,
      testHeader: s4`
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.1);
        width: 100%;

        padding: 1rem 1rem;

        button {
            height: 2rem;
        }

        p {
            display: block;
            font-family: monospace;
            background: rgba(0, 0, 0, 0.2);
            padding: 0.38rem;
            border-radius: 0.38rem;
            margin-left: auto;
            white-space: nowrap;
        }
        > * + * {
            margin-left: 1rem;
        }
    `,
      testToolbar: s4`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
    `
    };
  }
});

// components/archive.js
var suite, archive_default, style2;
var init_archive = __esm({
  "components/archive.js"() {
    init_utils();
    init_icons();
    suite = (dispatch2) => ([id2, { title: title2, before: before2, tests: tests2, updated }]) => html`
    <li className=${style2.item}>
      <div
        key=${id2}
        onClick=${() => dispatch2({ id: id2, title: title2, before: before2, tests: tests2, aside: "results" })}
      >
        <h4>${title2}</h4>
        <small>
          ${tests2.length} test cases updated ${timeSince(new Date(updated))} ago
        </small>
      </div>
      <button
        onClick=${() => copyHashURL({
      title: title2,
      before: before2,
      tests: tests2,
      updated: /* @__PURE__ */ new Date()
    })}
      >
        <${LinkIcon} />
      </button>
      <button
        onClick=${() => {
      localStorage.removeItem(id2);
      dispatch2(latestLocalStorage);
    }}
      >
        <${RemoveIcon} />
      </button>
    </li>
  `;
    archive_default = ({ state: state2, dispatch: dispatch2 }) => {
      const { suites: suites2, searchTerm, aside: aside2 } = state2;
      return aside2 === "results" ? html`
        <button
          className=${style2.showArchiveButton}
          onClick=${() => dispatch2({
        aside: state2.aside === "archive" ? "results" : "archive"
      })}
        >
          <${ArchiveIcon} />
          <span>Archive</span>
        </button>
      ` : html`
        <dialog
          className=${style2.container}
          onClick=${(e5) => e5.target.tagName === "DIALOG" && dispatch2({ aside: "results" })}
        >
          <div>
            <div className=${style2.searchInput}>
              <input
                onInput=${(e5) => dispatch2(setSearchTerm(e5.target.value))}
                placeholder="Search the archive..."
                value=${searchTerm}
              />
              <${SearchIcon} />
            </div>
            <ul className=${style2.list}>
              ${suites2.filter(
        (x4) => x4[1].title.toLowerCase().match(searchTerm.toLowerCase())
      ).sort(
        ([k4, v5], [k1, v1]) => +new Date(v5.updated) < +new Date(v1.updated) ? 0 : -1
      ).map(suite(dispatch2))}
            </ul>
          </div>
        </dialog>
      `;
    };
    style2 = {
      container: s4`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(37, 38, 42, 0.62);

    display: flex;
    flex-direction: column;
    width: 100%;
    color: rgba(255, 255, 255, 0.62);
    padding: 3rem 2rem 3rem;
    > * + * {
      margin-top: 3rem;
    }
    @media (min-width: 480px) {
      padding: 3rem 3rem 3rem;
      > * + * {
        margin-top: 2rem;
      }
    }
    > div {
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
      margin: auto;
      width: 100%;
      height: 100%;
      max-width: 70ch;
      background: #2f3037;
      padding: 2rem;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      > * + * {
        margin-top: 2rem;
      }
      @media (max-width: 480px) {
        padding: 1rem;
        > * + * {
          margin-top: 1rem;
        }
      }
    }
  `,
      list: s4`
    flex: 0 1 100%;
    border-radius: 1rem;
    overflow-y: scroll;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
    background: rgba(0, 0, 0, 0.1);
    padding: 2rem;
    > * + * {
      padding-top: 1rem;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
    }
  `,
      item: s4`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    opacity: 0.9;
    padding: 1rem 0rem;
    &:hover {
      opacity: 1;
    }
    &:first-child {
      padding-top: 0;
    }
    > * + * {
      margin-left: 1rem;
    }
    > div {
      cursor: pointer;
      flex: 1 1 100%;
      > * {
        display: block;
      }
      > * + * {
        margin-top: 0.38rem;
      }
      overflow: hidden;
    }
    h4 {
      font-size: 1.1rem;
      line-height: 150%;
    }
    small {
      color: rgba(255, 255, 255, 0.38);
    }
    button {
      border: 0;
      padding: 0;
    }
  `,
      searchInput: s4`
    position: relative;
    width: 100%;
    input {
      width: 100%;
      padding: 0 2rem;
      height: 5rem;
      font-size: 1.62rem;
      color: rgba(255, 255, 255, 0.8);
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 1rem;
    }
    svg {
      position: absolute;
      top: 50%;
      right: 2rem;
      width: 2rem;
      height: 2rem;
      transform: translateY(-50%);
    }
  `,
      showArchiveButton: s4`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    background: rgba(0, 0, 0, 0.2);
    height: 6rem;
    width: 6rem;
    flex: none;
    border: 0;
    svg {
      width: 2rem;
      height: 2rem;
    }
    > * + * {
      margin-top: 0.38rem;
    }
  `
    };
  }
});

// components/results.js
var Bar, xUseLogScale, yUseLogScale, results_default, style3;
var init_results = __esm({
  "components/results.js"() {
    init_utils();
    Bar = (tests2) => (test, i6) => {
      const max = Math.max(...tests2.map((x4) => x4.ops));
      const percent = test.ops ? test.ops / max * 100 : 0;
      return html`
    <div className=${style3.result}>
      <div className=${style3.bar}>
        <span
          style=${{
        width: "3px",
        transition: "height 0.3s, background 0.3s",
        height: `${test.ops === -1 ? 100 : test.ops === -2 ? 0 : percent}%`,
        background: test.ops === -1 ? getColorForPercent(0) : getColorForPercent(percent / 100)
      }}
        ></span>
      </div>
      <p className=${style3.id}>${i6 + 1}</p>
      <div className=${style3.label}>
        ${test.ops === -1 || test.ops === -2 ? `${0}%` : test.ops === 0 ? html`
              <img className=${style3.spinner} src="/spinner.gif" />
            ` : `${percent << 0}%`}
      </div>
    </div>
  `;
    };
    xUseLogScale = true;
    yUseLogScale = false;
    results_default = ({ state: state2, dispatch: dispatch2 }) => {
      const { tests: tests2, title: title2, started: started2, resultsPerCondition: resultsPerCondition2 } = state2;
      var resultsPerConditionExample = [
        [
          [1, null],
          [
            {
              name: "Find item 100",
              code: "data.find(x => x == 100)",
              runs: [2723e3, 216e3, 151e3, 275e3, 53e3, 328e3, 196e3, 9e4, 2375e3, 153e3, 189e3, 24e4, 875e3, 35e3, 2e3, 21e4, 311e3, 47e4, 47e3, 454e3, 372e3, 98e3, 86e3, 62e3, 334e3, 16e3, 5e3, 2631e3, 2631e3, 16e3, 138e3, 74e3, 249e3, 11e3, 159e3, 445e3, 118e3, 2833e3, 45e3, 98e3, 2296e3, 2631e3, 1336e3, 2308e3, 1e3, 302e3, 131e3, 1e4, 657e3, 47e3, 214e3, 117e3, 2532e3, 9e3, 381e3, 98e3, 1e3, 2631e3, 2441e3, 159e3, 136e3, 187e4, 1e4, 65e3, 9e3, 1933e3, 43e3, 438e3, 1e3, 4626e3, 199e3, 663e3, 676e3, 452e3, 3419e3, 1e4, 92e3, 1e4, 1351e3, 166e4, 182e3, 197e3, 198e3, 789e3, 2098e3, 305e3, 233e3, 1e3, 203e3, 9e3, 513e3, 493e3, 1e3, 2e3, 13e3, 297e3, 133e3, 61e3, 483e3, 425e3],
              ops: 624150
            },
            {
              name: "Find item 200",
              code: "data.find(x => x == 200)",
              runs: [1845e3, 2123e3, 2021e3, 1e3, 1502e3, 178e3, 42e3, 1e3, 593e3, 88e3, 1e3, 1039e3, 1e3, 37e3, 72e3, 55e3, 119e3, 201e3, 1e4, 167e3, 407e3, 77e3, 21e3, 84e3, 149e3, 8e3, 17e3, 154e3, 1e3, 9e3, 1e3, 1e3, 115e3, 2303e3, 33e3, 16e4, 1244e3, 1557e3, 666e3, 75e3, 1539e3, 1194e3, 255e3, 1347e3, 8e3, 68e3, 6e4, 1e3, 1583e3, 59e3, 11e3, 476e3, 1463e3, 1e3, 1e3, 108e3, 156e3, 221e3, 26e3, 5e4, 94e3, 267e3, 266e3, 2e3, 37e3, 858e3, 16e4, 1e3, 15e3, 115e3, 1e5, 1015e3, 1825e3, 1879e3, 98e3, 1227e3, 839e3, 114e3, 33e3, 1244e3, 111e3, 584e3, 33e3, 1e4, 9e3, 141e4, 22e4, 142e3, 124e3, 1e3, 113e3, 174e3, 2406e3, 9e3, 1898e3, 1e3, 32e3, 143e3, 169e3, 2e3],
              ops: 435850
            },
            {
              name: "Find item 400",
              code: "data.find(x => x == 400)",
              runs: [309e3, 27e4, 76e3, 327e3, 1e4, 47e3, 59e3, 1e3, 14e4, 74e3, 1e3, 6e3, 157e3, 9e3, 21e3, 71e3, 61e3, 366e3, 1e3, 1e3, 43e3, 318e3, 533e3, 37e3, 78e3, 19e3, 1e3, 72e3, 338e3, 189e3, 1e3, 22e3, 11e3, 269e3, 19e3, 66e3, 42e3, 1e3, 9e3, 2e4, 395e3, 19e3, 98e3, 243e3, 1e3, 43e3, 9e3, 22e3, 189e3, 84e3, 24e3, 97e3, 407e3, 106e3, 69e3, 512e3, 128e3, 117e3, 5e3, 23e3, 33e3, 222e3, 399e3, 204e3, 131e3, 169e3, 2e3, 105e3, 6e3, 31e3, 34e3, 18e3, 6e3, 106e3, 134e3, 223e3, 82e3, 1e4, 16e3, 201e3, 45e3, 13e4, 19e3, 1e3, 2e3, 73e3, 39e3, 128e3, 7e3, 27e3, 305e3, 92e3, 521e3, 1e3, 2e3, 112e3, 4e3, 34e3, 66e3, 137e3],
              ops: 105630
            },
            {
              name: "Find item 800",
              code: "data.find(x => x == 800)",
              runs: [187e3, 1e3, 1e3, 172e3, 1e3, 226e3, 26e3, 1e3, 14e3, 109e3, 1e3, 98e3, 1e3, 1e4, 224e3, 3e3, 59e3, 51e3, 48e3, 1e3, 25e3, 101e3, 222e3, 255e3, 98e3, 2e3, 299e3, 38e3, 1e3, 68e3, 5e3, 1e3, 41e3, 217e3, 21e3, 38e3, 2e4, 2e3, 6e3, 7e3, 273e3, 74e3, 122e3, 133e3, 44e3, 11e3, 1e3, 1e3, 128e3, 16e3, 16e3, 13e3, 3e4, 57e3, 38e3, 19e3, 69e3, 1e3, 29e3, 2e3, 15e3, 2e3, 82e3, 234e3, 14e3, 16e3, 7e3, 1e3, 107e3, 15e3, 34e3, 34e3, 9e3, 66e3, 13e3, 15e4, 83e3, 9e3, 8e3, 98e3, 4e4, 53e3, 234e3, 5e3, 17e3, 28e3, 45e3, 47e3, 4e3, 77e3, 232e3, 237e3, 237e3, 14e3, 28e3, 76e3, 9e3, 35e3, 32e3, 62e3],
              ops: 62870
            }
          ]
        ],
        [
          [2, null],
          [
            {
              name: "Find item 100",
              code: "data.find(x => x == 100)",
              runs: [625e3, 2547e3, 2631e3, 29e3, 337e3, 15e3, 1374e3, 34e3, 766e3, 1e3, 3e4, 1e3, 89e3, 257e3, 401e3, 77e3, 42e3, 1e3, 379e3, 23e4, 94e3, 1e3, 389e3, 926e3, 42e3, 3913e3, 453e3, 4101e3, 59e3, 1929e3, 14e3, 1174e3, 321e3, 2341e3, 2274e3, 14e4, 1e3, 82e3, 108e3, 2e3, 1e3, 1e4, 15e4, 1435e3, 321e3, 213e3, 1e3, 29e4, 1293e3, 3497e3, 3913e3, 57e4, 2631e3, 2949e3, 244e3, 3675e3, 268e3, 1889e3, 124e3, 48e3, 98e3, 138e3, 38e3, 675e3, 1422e3, 396e3, 388e3, 1e3, 255e3, 52e3, 331e3, 451e3, 3861e3, 1e4, 226e3, 97e3, 418e3, 294e4, 16e3, 2507e3, 2075e3, 312e3, 1836e3, 9e3, 385e3, 26e4, 1646e3, 171e3, 6e4, 156e3, 315e3, 2977e3, 1e3, 173e3, 1778e3, 163e3, 411e3, 3911e3, 191e3, 265e3],
              ops: 831670
            },
            {
              name: "Find item 200",
              code: "data.find(x => x == 200)",
              runs: [77e4, 67e3, 1e3, 23e3, 1646e3, 4e3, 245e3, 54e3, 1887e3, 1e3, 9e3, 2955e3, 413e3, 1668e3, 155e3, 1813e3, 9e3, 148e3, 74e3, 117e3, 54e3, 1e3, 116e3, 467e3, 33e3, 2395e3, 17e3, 53e3, 1966e3, 1e3, 66e3, 168e4, 1595e3, 269e3, 1642e3, 2075e3, 1e3, 98e3, 76e3, 1056e3, 9e3, 1188e3, 63e3, 507e3, 2e3, 3e4, 1171e3, 1e3, 254e3, 95e3, 1e3, 87e3, 318e3, 6e3, 64e3, 133e3, 112e3, 1095e3, 62e3, 3e4, 9e3, 16e3, 18e3, 325e3, 1062e3, 212e3, 51e3, 2e3, 25e4, 1607e3, 144e4, 211e3, 2726e3, 14e3, 111e3, 52e3, 198e3, 1607e3, 2e4, 1449e3, 171e3, 9e3, 1436e3, 152e3, 7e3, 49e3, 44e3, 187e3, 1378e3, 74e3, 139e3, 19e3, 57e3, 47e3, 9e3, 98e3, 141e3, 85e3, 98e3, 165e3],
              ops: 466930
            },
            {
              name: "Find item 400",
              code: "data.find(x => x == 400)",
              runs: [58e3, 1e3, 83e3, 61e3, 1e3, 22e3, 323e3, 78e3, 65e3, 69e3, 9e3, 449e3, 91e3, 68e3, 4e3, 126e3, 1e3, 1e3, 1e4, 61e3, 73e3, 64e3, 5e3, 53e3, 13e3, 99e3, 43e3, 494e3, 541e3, 1e3, 48e3, 272e3, 5e3, 247e3, 32e4, 46e3, 305e3, 32e3, 42e3, 381e3, 25e4, 585e3, 448e3, 141e3, 437e3, 15e3, 1e3, 387e3, 57e3, 26e4, 26e3, 63e3, 98e3, 471e3, 49e3, 72e3, 5e5, 203e3, 22e3, 1e3, 15e3, 484e3, 384e3, 52e3, 83e3, 113e3, 1e3, 439e3, 9e4, 102e3, 166e3, 121e3, 529e3, 271e3, 55e3, 9e3, 94e3, 255e3, 32e4, 313e3, 71e3, 82e3, 13e4, 261e3, 43e3, 186e3, 7e4, 167e3, 271e3, 44e3, 83e3, 11e3, 487e3, 6e3, 67e3, 57e3, 1e3, 3e3, 133e3, 79e3],
              ops: 148990
            },
            {
              name: "Find item 800",
              code: "data.find(x => x == 800)",
              runs: [9e3, 15e3, 4e3, 11e3, 2e4, 8e3, 19e3, 9e3, 43e3, 15e3, 2e3, 291e3, 33e3, 1e3, 35e3, 22e3, 84e3, 67e3, 85e3, 35e3, 223e3, 3e3, 4e4, 127e3, 128e3, 2e3, 6e4, 1e3, 127e3, 136e3, 186e3, 154e3, 111e3, 141e3, 118e3, 33e3, 1e3, 1e4, 24e3, 77e3, 84e3, 99e3, 242e3, 4e3, 141e3, 9e3, 142e3, 1e3, 288e3, 26e3, 168e3, 23e3, 16e3, 223e3, 88e3, 25e3, 26e3, 104e3, 19e3, 1e3, 39e3, 239e3, 4e3, 56e3, 71e3, 154e3, 57e3, 1e3, 29e3, 72e3, 81e3, 58e3, 216e3, 13e3, 14e4, 94e3, 45e3, 12e4, 213e3, 119e3, 6e3, 41e3, 85e3, 36e3, 46e3, 122e3, 39e3, 3e4, 254e3, 23e3, 3e4, 238e3, 3e3, 7e3, 17e3, 13e3, 29e3, 1e3, 26e3, 3e3],
              ops: 71090
            }
          ]
        ],
        [
          [3, null],
          [
            {
              name: "Find item 100",
              code: "data.find(x => x == 100)",
              runs: [16e3, 3443e3, 302e3, 196e3, 3218e3, 246e4, 2e3, 1078e3, 1482e3, 312e3, 52e3, 17e3, 2631e3, 1252e3, 345e3, 71e3, 106e3, 273e3, 24e4, 1e3, 1e3, 2631e3, 1939e3, 9e4, 1908e3, 267e3, 1e3, 105e3, 131e3, 292e3, 244e4, 259e4, 873e3, 252e3, 91e3, 2631e3, 954e3, 85e3, 3871e3, 34e3, 859e3, 66e3, 65e3, 15e3, 2631e3, 115e3, 1863e3, 36e3, 1e3, 3335e3, 639e3, 2e3, 3413e3, 386e4, 395e3, 268e3, 2733e3, 36e3, 217e4, 98e3, 1e3, 45e3, 1e4, 33e3, 2763e3, 272e3, 8e3, 415e3, 112e3, 3051e3, 159e3, 2631e3, 156e3, 397e3, 19e3, 13e5, 2681e3, 21e3, 18e4, 1864e3, 124e3, 123e3, 438e3, 469e3, 39e3, 158e3, 149e3, 121e3, 332e4, 314e3, 98e3, 1e3, 201e3, 2732e3, 1047e3, 3073e3, 4449e3, 155e3, 3316e3, 3114e3],
              ops: 1008420
            },
            {
              name: "Find item 200",
              code: "data.find(x => x == 200)",
              runs: [1075e3, 15e3, 214e4, 2e3, 79e3, 2026e3, 167e3, 1162e3, 503e3, 1e3, 28e3, 1946e3, 2e3, 87e4, 115e3, 1e3, 145e3, 122e3, 97e3, 1499e3, 1154e3, 41e3, 881e3, 233e3, 702e3, 89e3, 1e3, 18e3, 2359e3, 46e3, 8e3, 1449e3, 174e3, 2404e3, 604e3, 1e4, 2139e3, 98e3, 2527e3, 1717e3, 378e3, 41e3, 33e4, 212e3, 4e3, 28e3, 1095e3, 2231e3, 142e3, 1988e3, 1e3, 57e3, 1511e3, 1e3, 218e3, 141e3, 2356e3, 1157e3, 1508e3, 69e3, 114e3, 34e3, 1e3, 8e3, 1646e3, 1535e3, 46e3, 197e3, 2305e3, 98e3, 327e3, 169e3, 58e3, 206e3, 729e3, 432e3, 1837e3, 1e5, 28e3, 1646e3, 145e3, 124e3, 145e3, 238e3, 485e3, 1052e3, 79e3, 934e3, 1646e3, 139e3, 63e3, 2e3, 1261e3, 1805e3, 13e3, 1e5, 1e3, 38e3, 1876e3, 2043e3],
              ops: 658220
            },
            {
              name: "Find item 400",
              code: "data.find(x => x == 400)",
              runs: [115e3, 536e3, 19e3, 115e3, 249e3, 72e3, 49e3, 114e3, 5e3, 301e3, 16e3, 329e3, 267e3, 36e3, 5e3, 4e3, 13e3, 78e3, 33e3, 1e3, 151e3, 356e3, 262e3, 306e3, 77e3, 74e3, 1e3, 17e3, 1e3, 41e3, 136e3, 15e3, 114e3, 69e3, 46e3, 75e3, 4e4, 28e3, 447e3, 1e3, 196e3, 19e3, 186e3, 57e3, 2e3, 4e3, 516e3, 9e3, 32e4, 6e4, 25e3, 395e3, 389e3, 13e4, 1e3, 498e3, 1e3, 17e3, 165e3, 2e3, 396e3, 23e3, 2e3, 255e3, 57e3, 365e3, 87e3, 101e3, 1e4, 65e3, 159e3, 91e3, 34e3, 112e3, 58e3, 45e3, 401e3, 426e3, 34e3, 55e3, 1e3, 3e3, 79e3, 38e3, 122e3, 98e3, 348e3, 133e3, 457e3, 64e3, 48e3, 346e3, 113e3, 125e3, 354e3, 9e3, 134e3, 29e3, 354e3, 384e3],
              ops: 136210
            },
            {
              name: "Find item 800",
              code: "data.find(x => x == 800)",
              runs: [1e3, 149e3, 186e3, 1e3, 1e3, 4e3, 81e3, 27e3, 92e3, 91e3, 118e3, 131e3, 58e3, 298e3, 5e3, 123e3, 17e3, 245e3, 3e4, 36e3, 49e3, 127e3, 87e3, 73e3, 17e3, 37e3, 264e3, 149e3, 1e3, 1e4, 12e4, 11e3, 24e3, 3e3, 63e3, 2e3, 38e3, 1e4, 217e3, 9e3, 1e4, 13e3, 1e3, 128e3, 269e3, 2e3, 231e3, 1e3, 214e3, 232e3, 11e3, 3e3, 221e3, 75e3, 34e3, 4e4, 203e3, 2e3, 134e3, 8e3, 26e3, 269e3, 6e4, 16e4, 37e3, 104e3, 63e3, 67e3, 1e3, 55e3, 98e3, 35e3, 16e3, 61e3, 5e3, 11e3, 1e3, 9e3, 7e3, 87e3, 9e3, 1e3, 27e4, 1e3, 29e3, 2e3, 8e3, 107e3, 261e3, 13e3, 86e3, 247e3, 19e3, 188e3, 134e3, 29e3, 35e3, 23e3, 212e3, 186e3],
              ops: 78690
            }
          ]
        ]
      ];
      const testSeries = {};
      for (let [[dimension12, _6], testRuns] of resultsPerCondition2 || []) {
        for (let { name: name2, ops } of testRuns) {
          if (!testSeries[name2]) {
            testSeries[name2] = {
              x: [],
              y: [],
              name: name2,
              mode: "lines+markers",
              type: "scatter"
            };
          }
          testSeries[name2].x.push(dimension12);
          testSeries[name2].y.push(ops);
        }
      }
      const traces = Object.values(testSeries);
      const id2 = `plotly-graph-${Math.random()}`;
      let element = html`<div style="margin-bottom: -1rem" id=${id2}></div>`;
      const updatePlot = () => {
        if (document.getElementById(id2)) {
          Plotly.newPlot(id2, traces, {
            legend: {
              orientation: "h",
              // horizontal layout
              yanchor: "bottom",
              // anchor legend box to bottom of the legend
              y: 1.1,
              // place it slightly above the plot area
              xanchor: "center",
              x: 0.5
              // center the legend horizontally
            },
            template: "plotly_dark",
            // title: {
            //     text: 'Operations by Test and Dimension',
            //     font: { color: '#acacae' }
            // },
            xaxis: {
              type: xUseLogScale ? "log" : "linear",
              title: { text: "Dimension1", font: { color: "#acacae" } },
              tickfont: { color: "#acacae" },
              gridcolor: "#2f3037"
            },
            yaxis: {
              type: yUseLogScale ? "log" : "linear",
              title: { text: "Number of Ops (higher is better)", font: { color: "#acacae" } },
              tickfont: { color: "#acacae" },
              gridcolor: "#2f3037"
            },
            paper_bgcolor: "#25262a",
            plot_bgcolor: "#25262a"
          }).then(() => {
            const modebar = document.getElementById(id2).querySelector(".modebar-container");
            if (modebar) {
              modebar.style.top = "unset";
              modebar.style.bottom = "0px";
              modebar.style.right = "0px";
              modebar.style.left = "unset";
            }
          });
        }
      };
      setTimeout(() => updatePlot(), 300);
      return html`
    <aside className=${style3.aside}>
      <div className=${style3.graph}>
        ${tests2.filter((x4) => x4.ops !== -2).map(Bar(tests2))}
      </div>
      <input
        className=${style3.title}
        onInput=${(e5) => dispatch2({ title: e5.target.value })}
        value=${title2}
      />
      ${element}
      <div style="position: absolute; bottom: 0rem; left: 1rem; color: gray;" >
        <div>
          <input type="checkbox" checked="${xUseLogScale}" onChange=${(e5) => {
        xUseLogScale = e5.target.checked;
        updatePlot();
      }}/>
          <span> </span>
          <span>X-axis log scale</span>
        </div>
        <div style="margin-left: 0;">
          <input type="checkbox" checked="${yUseLogScale}" onChange=${(e5) => {
        yUseLogScale = e5.target.checked;
        updatePlot();
      }}/>
          <span> </span>
          <span>Y-axis log scale</span>
        </div>
      </div>
    </aside>
  `;
    };
    style3 = {
      aside: s4`
    grid-area: graph;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 1rem 1rem 1rem;
    overflow-x: auto;
    max-width: 100vw;

    & div > div + div {
      margin-left: 1rem;
    }
  `,
      graph: s4`
    margin: 0 auto;
    flex: 1 1 100%;
    padding: 3rem 3rem 3rem;
    display: flex;
  `,
      title: s4`
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.62);
    font-size: 1.2rem;
    flex: none;
    padding: 0;
    font-weight: bold;
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    outline: none;
    max-width: 100%;
  `,
      result: s4`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
      bar: s4`
    display: flex;
    align-items: flex-end;
    background: rgba(0, 0, 0, 0.1);
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
  `,
      label: s4`
    width: 3rem;
    margin-top: 1rem;
    height: 1rem;
    text-align: center;
    font-weight: 100;
    color: rgba(255, 255, 255, 0.5);
  `,
      spinner: s4`
    width: 1rem;
    height: 1rem;
    opacity: 0.5;
  `,
      id: s4`
    width: 2rem;
    height: 2rem;
    flex: none;
    background: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.62);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  `
    };
  }
});

// library/parsing.bundle.js
async function p4(t22) {
  let e22 = [];
  for await (let r22 of t22) e22.push(r22);
  return e22;
}
function _22({ iterator: t22, transformFunction: e22, poolLimit: r22 = null, awaitAll: o22 = false }) {
  r22 = r22 || _22.defaultPoolLimit;
  let i22 = new TransformStream({ async transform(u22, c22) {
    try {
      let s22 = await u22;
      c22.enqueue(s22);
    } catch (s22) {
      s22 instanceof AggregateError && s22.message == O && c22.error(s22);
    }
  } }), l5 = (async () => {
    let u22 = i22.writable.getWriter(), c22 = [];
    try {
      let s22 = 0;
      for await (let d4 of t22) {
        let P3 = Promise.resolve().then(() => e22(d4, s22));
        s22++, u22.write(P3);
        let j22 = P3.then(() => c22.splice(c22.indexOf(j22), 1));
        c22.push(j22), c22.length >= r22 && await Promise.race(c22);
      }
      await Promise.all(c22), u22.close();
    } catch {
      let s22 = [];
      for (let d4 of await Promise.allSettled(c22)) d4.status == "rejected" && s22.push(d4.reason);
      u22.write(Promise.reject(new AggregateError(s22, O))).catch(() => {
      });
    }
  })(), v22 = i22.readable[Symbol.asyncIterator]();
  return o22 ? l5.then(() => p4(v22)) : v22;
}
function Kt(A6) {
  let e22 = A6.slice(0, 7), l5 = A6[7], d4 = new Uint8Array(new ArrayBuffer(7)), q3 = -1;
  for (let m22 of e22) q3++, d4[q3] = m22, l5 >> q3 & 1 && (d4[q3] = d4[q3] | 128);
  return d4;
}
function Ht(A6) {
  let t22 = A6.length, e22 = new ArrayBuffer(t22), l5 = new Uint8Array(e22);
  for (var d4 = 0; d4 < t22; d4++) l5[d4] = A6.charCodeAt(d4);
  let q3 = l5.slice(0, -1), m22 = -l5.slice(-1)[0], E22 = 8, h22 = Math.ceil(q3.length / E22), k22 = [];
  for (let I22 in [...Array(h22)]) I22 -= 0, k22.push(Kt(q3.slice(I22 * E22, (I22 + 1) * E22)));
  let p22 = 0;
  for (let I22 of k22) p22 += I22.length;
  let B22 = new Uint8Array(p22), y22 = 0;
  for (let I22 of k22) B22.set(I22, y22), y22 += I22.length;
  return m22 == 0 && (m22 = B22.length), B22.slice(0, m22);
}
function Cr(A6) {
  return j2.locateFile ? j2.locateFile(A6, DA) : DA + A6;
}
function Wr() {
  var A6 = kA.buffer;
  j2.HEAP8 = hA = new Int8Array(A6), j2.HEAP16 = FA = new Int16Array(A6), j2.HEAPU8 = tA = new Uint8Array(A6), j2.HEAPU16 = Dt = new Uint16Array(A6), j2.HEAP32 = pA = new Int32Array(A6), j2.HEAPU32 = L2 = new Uint32Array(A6), j2.HEAPF32 = fr = new Float32Array(A6), j2.HEAPF64 = $r = new Float64Array(A6);
}
function Lt() {
  if (j2.preRun) for (typeof j2.preRun == "function" && (j2.preRun = [j2.preRun]); j2.preRun.length; ) Nt(j2.preRun.shift());
  GA(Jr);
}
function St() {
  SA = true, GA(vr), GA(gr);
}
function Rt() {
  GA(Xt);
}
function Ut() {
  if (j2.postRun) for (typeof j2.postRun == "function" && (j2.postRun = [j2.postRun]); j2.postRun.length; ) Wt(j2.postRun.shift());
  GA(zr);
}
function Nt(A6) {
  Jr.unshift(A6);
}
function Ct(A6) {
  gr.unshift(A6);
}
function Wt(A6) {
  zr.unshift(A6);
}
function v_(A6) {
  return A6;
}
function Br(A6) {
  aA++, j2.monitorRunDependencies?.(aA);
}
function yr(A6) {
  if (aA--, j2.monitorRunDependencies?.(aA), aA == 0 && (rr !== null && (clearInterval(rr), rr = null), BA)) {
    var t22 = BA;
    BA = null, t22();
  }
}
function oA(A6) {
  throw j2.onAbort?.(A6), iA(A6 = "Aborted(" + A6 + ")"), wr = true, ZA = 1, A6 += ". Build with -sASSERTIONS for more info.", new WebAssembly.RuntimeError(A6);
}
function Dr(A6) {
  if (A6 == uA && xA) return new Uint8Array(xA);
  if (IA) return IA(A6);
  throw "both async and sync fetching of the wasm failed";
}
function B_(A6) {
  if (!xA && (Ot || Nr)) {
    if (typeof fetch == "function" && !RA(A6)) return fetch(A6, { credentials: "same-origin" }).then((t22) => {
      if (!t22.ok) throw `failed to load wasm binary file at '${A6}'`;
      return t22.arrayBuffer();
    }).catch(() => Dr(A6));
    if (XA) return new Promise((t22, e22) => {
      XA(A6, (l5) => t22(new Uint8Array(l5)), e22);
    });
  }
  return Promise.resolve().then(() => Dr(A6));
}
function Xr(A6, t22, e22) {
  return Promise.resolve(Kr).then((l5) => WebAssembly.instantiate(l5, t22)).then(e22, (l5) => {
    iA(`failed to asynchronously prepare wasm: ${l5}`), oA(l5);
  });
}
function zt(A6, t22, e22, l5) {
  return A6 || typeof WebAssembly.instantiateStreaming != "function" || Zr(t22) || RA(t22) || Tt || typeof fetch != "function" ? Xr(t22, e22, l5) : fetch(t22, { credentials: "same-origin" }).then((d4) => WebAssembly.instantiateStreaming(d4, e22).then(l5, function(q3) {
    return iA(`wasm streaming compile failed: ${q3}`), iA("falling back to ArrayBuffer instantiation"), Xr(t22, e22, l5);
  }));
}
function Zt() {
  var A6 = { env: S2, wasi_snapshot_preview1: S2, "GOT.mem": new Proxy(S2, bA), "GOT.func": new Proxy(S2, bA) };
  function t22(e22, l5) {
    u5 = e22.exports, u5 = nt(u5, 1024);
    var d4 = At(l5);
    return d4.neededDynlibs && (LA = d4.neededDynlibs.concat(LA)), ir(u5, "main"), PA.init(), de(), Ct(u5.__wasm_call_ctors), vr.push(u5.__wasm_apply_data_relocs), yr("wasm-instantiate"), u5;
  }
  if (Br("wasm-instantiate"), j2.instantiateWasm) try {
    return j2.instantiateWasm(A6, t22);
  } catch (e22) {
    return iA(`Module.instantiateWasm callback failed with error: ${e22}`), false;
  }
  return zt(xA, uA, A6, function(e22) {
    t22(e22.instance, e22.module);
  }), {};
}
function Yr(A6) {
  this.name = "ExitStatus", this.message = `Program terminated with exit(${A6})`, this.status = A6;
}
function v4(A6, t22 = "i8") {
  switch (t22.endsWith("*") && (t22 = "*"), t22) {
    case "i1":
    case "i8":
      return hA[A6];
    case "i16":
      return FA[A6 >> 1];
    case "i32":
      return pA[A6 >> 2];
    case "i64":
      oA("to do getValue(i64) use WASM_BIGINT");
    case "float":
      return fr[A6 >> 2];
    case "double":
      return $r[A6 >> 3];
    case "*":
      return L2[A6 >> 2];
    default:
      oA(`invalid type for getValue: ${t22}`);
  }
}
function or(A6, t22 = { global: true, nodelete: true }, e22, l5) {
  var d4 = PA.loadedLibsByName[A6];
  if (d4) return t22.global ? d4.global || (d4.global = true, ir(d4.exports, A6)) : e22 && Object.assign(e22, d4.exports), t22.nodelete && d4.refcount !== 1 / 0 && (d4.refcount = 1 / 0), d4.refcount++, l5 && (PA.loadedLibsByHandle[l5] = d4), !t22.loadAsync || Promise.resolve(true);
  function q3() {
    if (l5) {
      var h22 = L2[l5 + 28 >> 2], k22 = L2[l5 + 32 >> 2];
      if (h22 && k22) {
        var p22 = hA.slice(h22, h22 + k22);
        return t22.loadAsync ? Promise.resolve(p22) : p22;
      }
    }
    var B22 = Cr(A6);
    if (t22.loadAsync) return new Promise(function(y22, I22) {
      le(B22, y22, I22);
    });
    if (!IA) throw new Error(`${B22}: file not found, and synchronous loading of external files is not available`);
    return IA(B22);
  }
  function m22() {
    return t22.loadAsync ? q3().then((h22) => ar(h22, t22, A6, e22, l5)) : ar(q3(), t22, A6, e22, l5);
  }
  function E22(h22) {
    d4.global ? ir(h22, A6) : e22 && Object.assign(e22, h22), d4.exports = h22;
  }
  return (d4 = rt(A6, l5, "loading")).refcount = t22.nodelete ? 1 / 0 : 1, d4.global = t22.global, t22.loadAsync ? m22().then((h22) => (E22(h22), true)) : (E22(m22()), true);
}
function M22(A6, t22, e22 = "i8") {
  switch (e22.endsWith("*") && (e22 = "*"), e22) {
    case "i1":
    case "i8":
      hA[A6] = t22;
      break;
    case "i16":
      FA[A6 >> 1] = t22;
      break;
    case "i32":
      pA[A6 >> 2] = t22;
      break;
    case "i64":
      oA("to do setValue(i64) use WASM_BIGINT");
    case "float":
      fr[A6 >> 2] = t22;
      break;
    case "double":
      $r[A6 >> 3] = t22;
      break;
    case "*":
      L2[A6 >> 2] = t22;
      break;
    default:
      oA(`invalid type for setValue: ${e22}`);
  }
}
function ut(A6, t22, e22, l5, d4) {
  return we(t22, e22), 70;
}
function ge(A6, t22) {
  if (cA) {
    let e22 = z22(t22);
    cA(e22, A6 !== 0);
  }
}
function ve(A6, t22, e22, l5, d4) {
  let q3 = qA(t22, { row: e22, column: l5 });
  typeof q3 == "string" ? (M22(d4, q3.length, "i32"), Et(q3, A6, 10240)) : M22(d4, 0, "i32");
}
function __(A6 = []) {
  var t22 = xr("main").sym;
  if (t22) {
    A6.unshift(pr);
    var e22 = A6.length, l5 = Fr(4 * (e22 + 1)), d4 = l5;
    A6.forEach((m22) => {
      L2[d4 >> 2] = be(m22), d4 += 4;
    }), L2[d4 >> 2] = 0;
    try {
      var q3 = t22(e22, l5);
      return Ie(q3, true), q3;
    } catch (m22) {
      return xe(m22);
    }
  }
}
function ft(A6 = hr) {
  function t22() {
    CA || (CA = true, j2.calledRun = true, wr || (St(), Rt(), j2.onRuntimeInitialized && j2.onRuntimeInitialized(), $t && __(A6), Ut()));
  }
  aA > 0 || (Lt(), aA > 0 || (j2.setStatus ? (j2.setStatus("Running..."), setTimeout(function() {
    setTimeout(function() {
      j2.setStatus("");
    }, 1), t22();
  }, 1)) : t22()));
}
function gt(A6, t22, e22) {
  let l5 = e22 - t22, d4 = A6.textCallback(t22, null, e22);
  for (t22 += d4.length; t22 < e22; ) {
    let q3 = A6.textCallback(t22, null, e22);
    if (!(q3 && q3.length > 0)) break;
    t22 += q3.length, d4 += q3;
  }
  return t22 > e22 && (d4 = d4.slice(0, l5)), d4;
}
function _r(A6, t22, e22, l5) {
  for (let d4 = 0, q3 = l5.length; d4 < q3; d4++) {
    let m22 = v4(e22, "i32"), E22 = H22(t22, e22 += g22);
    e22 += R, l5[d4] = { name: A6.captureNames[m22], node: E22 };
  }
  return e22;
}
function wA(A6) {
  if (A6 !== sA) throw new Error("Illegal constructor");
}
function VA(A6) {
  return A6 && typeof A6.row == "number" && typeof A6.column == "number";
}
function x22(A6) {
  let t22 = f22;
  M22(t22, A6.id, "i32"), t22 += g22, M22(t22, A6.startIndex, "i32"), t22 += g22, M22(t22, A6.startPosition.row, "i32"), t22 += g22, M22(t22, A6.startPosition.column, "i32"), t22 += g22, M22(t22, A6[0], "i32");
}
function H22(A6, t22 = f22) {
  let e22 = v4(t22, "i32");
  if (e22 === 0) return null;
  let l5 = v4(t22 += g22, "i32"), d4 = v4(t22 += g22, "i32"), q3 = v4(t22 += g22, "i32"), m22 = v4(t22 += g22, "i32"), E22 = new WA(sA, A6);
  return E22.id = e22, E22.startIndex = l5, E22.startPosition = { row: d4, column: q3 }, E22[0] = m22, E22;
}
function K(A6, t22 = f22) {
  M22(t22 + 0 * g22, A6[0], "i32"), M22(t22 + 1 * g22, A6[1], "i32"), M22(t22 + 2 * g22, A6[2], "i32"), M22(t22 + 3 * g22, A6[3], "i32");
}
function W2(A6) {
  A6[0] = v4(f22 + 0 * g22, "i32"), A6[1] = v4(f22 + 1 * g22, "i32"), A6[2] = v4(f22 + 2 * g22, "i32"), A6[3] = v4(f22 + 3 * g22, "i32");
}
function J2(A6, t22) {
  M22(A6, t22.row, "i32"), M22(A6 + g22, t22.column, "i32");
}
function KA(A6) {
  return { row: v4(A6, "i32") >>> 0, column: v4(A6 + g22, "i32") >>> 0 };
}
function l_(A6, t22) {
  J2(A6, t22.startPosition), J2(A6 += Q, t22.endPosition), M22(A6 += Q, t22.startIndex, "i32"), M22(A6 += g22, t22.endIndex, "i32"), A6 += g22;
}
function kr(A6) {
  let t22 = {};
  return t22.startPosition = KA(A6), A6 += Q, t22.endPosition = KA(A6), A6 += Q, t22.startIndex = v4(A6, "i32") >>> 0, A6 += g22, t22.endIndex = v4(A6, "i32") >>> 0, t22;
}
function d_(A6) {
  let t22 = f22;
  J2(t22, A6.startPosition), t22 += Q, J2(t22, A6.oldEndPosition), t22 += Q, J2(t22, A6.newEndPosition), t22 += Q, M22(t22, A6.startIndex, "i32"), t22 += g22, M22(t22, A6.oldEndIndex, "i32"), t22 += g22, M22(t22, A6.newEndIndex, "i32"), t22 += g22;
}
function br(A6) {
  return [A6, ...(A6.children || []).map(br)].flat(1 / 0);
}
function E_(A6, { alwaysShowTextAttr: t22 = false } = {}) {
  let e22 = "", l5 = "";
  for (let [d4, q3, m22] of A6.traverse()) m22 == "-" ? e22 += l5 + `<${YA(q3.type)} text=${JSON.stringify(q3.text)} />
` : m22 == "->" ? (t22 ? e22 += l5 + `<${YA(q3.type)} text=${JSON.stringify(q3.text)} />
` : e22 += l5 + `<${YA(q3.type)}>
`, l5 += "    ") : m22 == "<-" && (l5 = l5.slice(0, -4), e22 += l5 + `</${YA(q3.type)}>
`);
  return e22;
}
function a22(r22) {
  let S3 = r22.slice(0, 7), F22 = r22[7], A6 = new Uint8Array(new ArrayBuffer(7)), b22 = -1;
  for (let j22 of S3) b22++, A6[b22] = j22, F22 >> b22 & 1 && (A6[b22] = A6[b22] | 128);
  return A6;
}
function H3(r22) {
  let p22 = r22.length, S3 = new ArrayBuffer(p22), F22 = new Uint8Array(S3);
  for (var A6 = 0; A6 < p22; A6++) F22[A6] = r22.charCodeAt(A6);
  let b22 = F22.slice(0, -1), j22 = -F22.slice(-1)[0], q3 = 8, k22 = Math.ceil(b22.length / q3), W3 = [];
  for (let l5 in [...Array(k22)]) l5 -= 0, W3.push(a22(b22.slice(l5 * q3, (l5 + 1) * q3)));
  let K2 = 0;
  for (let l5 of W3) K2 += l5.length;
  let m22 = new Uint8Array(K2), Y2 = 0;
  for (let l5 of W3) m22.set(l5, Y2), Y2 += l5.length;
  return j22 == 0 && (j22 = m22.length), m22.slice(0, j22);
}
function convertImports(code, { returnTopLevelAsObject = false } = {}) {
  let stuffToExport = [];
  const root = parser.parse(code).rootNode;
  const maxResultDepth = 5;
  const handledStatements = [
    // require
    ...[
      ...root.quickQuery(`((call_expression (identifier) @funcCallName)  (#eq? @funcCallName "require"))`, { maxResultDepth })
    ].map((each) => ({ ...each, importType: "normalRequire" })),
    // 
    // ES import
    // 
    ...[
      // ES import (all different types)
      ...root.quickQuery(`(import_statement (string) @importPath) @statement`, { maxResultDepth: maxResultDepth + 1 })
    ].map((each) => ({ ...each, importType: "esImport" }))
  ];
  const nodes = handledStatements.sort((a32, b22) => (a32.statement || a32.funcCallName).startIndex - (b22.statement || b22.funcCallName).startIndex);
  let importSources = [];
  const codeChunks = [];
  let previousIndex = 0;
  for (let { funcCallName, importPath, importType, statement } of nodes) {
    statement = statement || funcCallName;
    codeChunks.push(
      code.slice(previousIndex, statement.startIndex)
    );
    previousIndex = statement.endIndex;
    if (importType === "normalRequire") {
      codeChunks.push(
        `await require`
      );
    } else if (importType === "esImport") {
      const text = statement.text;
      if (text.match(/^\s*import\s*("|').+\1\s*$/)) {
        codeChunks.push(
          `await require(${importPath.text})`
        );
      } else {
        const importClause = statement.children.find((each) => each.type === "import_clause");
        const importSourceNode = statement.children.find((each) => each.type === "string");
        importSources.push(importSourceNode?.text);
        let output2 = "var ";
        for (let each of importClause.children) {
          if (each.type === "ERROR") {
            each = each.children[0];
          }
          if (each.type === ",") {
            continue;
          }
          if (each.type === "from") {
            break;
          }
          if (each.type === "identifier") {
            output2 += `{ default: ${each.text} } = `;
          } else if (each.type === "namespace_import") {
            output2 += ` ${each.children[2].text} = `;
          } else if (each.type === "named_imports") {
            for (let eachInner of each.children) {
              if (eachInner.type === "import_specifier") {
                output2 += eachInner.children.map((each2) => each2.type == "as" ? ":" : each2.text).join("");
              } else if (eachInner.type === "as") {
                output2 += ":";
              } else {
                output2 += eachInner.text;
              }
            }
            output2 += " = ";
          }
        }
        output2 = output2.replace(/\s+/g, " ");
        output2 += `await require(${importPath.text})`;
        codeChunks.push(
          output2
        );
      }
    } else {
      codeChunks.push(
        statement.text
      );
    }
  }
  codeChunks.push(
    code.slice(previousIndex, code.length)
  );
  const syntaxErrors2 = root.quickQuery(`(ERROR)`) || [];
  const output = codeChunks.join("");
  importSources = importSources.filter((each) => each);
  if (!returnTopLevelAsObject) {
    return { code: output, importSources, syntaxErrors: syntaxErrors2 };
  }
  const newRoot = parser.parse(output).rootNode;
  for (let each of [
    // let/const
    ...newRoot.quickQuery(`((lexical_declaration (variable_declarator (identifier) @varName )) @statement)`, { maxResultDepth }),
    ...newRoot.quickQuery(`((variable_declaration (variable_declarator (identifier) @varName )) @statement)`, { maxResultDepth })
  ]) {
    stuffToExport.push(each.varName.text);
  }
  return { code: output + `;return {${stuffToExport.join(",")}}`, importSources, syntaxErrors: syntaxErrors2 };
}
var E3, F2, k2, x3, I2, n22, b2, m4, y4, h4, w3, g4, f4, S, O, M2, B, G, H2, V, W, D2, J, A3, z2, N2, Ue, Pt, Mt, Pr, Kr, EA, nA, Hr, Ar, j2, Or, hr, pr, zA, Ot, Nr, Tt, DA, Tr, XA, IA, Vt, iA, LA, xA, kA, wr, ZA, hA, tA, FA, Dt, pA, L2, fr, $r, Vr, Jr, gr, Xt, zr, vr, SA, aA, rr, BA, Jt, Zr, RA, uA, Yt, rA, Qr, bA, GA, Lr, Ir, At, rt, PA, nr, Qt, tt, Ae, re, et, te, ee, je, vA, Y, jt, st, mA, se, Sr, _e, Rr, _t, ne, nt, at, ae, ie, oe, xr, z22, ar, ir, le, lr, de, qe, ue, ce, me, Ee, it, ot, ke, dr, lt, he, pe, dt, qt, we, fe, $e, tr, ct, Be, ye, mt, Ie, xe, UA, Fe, NA, be, Et, qr, S2, u5, Ge, Pe, kt, Me, Ke, He, Oe, Te, Ve, De, Xe, Le, Se, Re, Ue2, Ne, Ce, We, Je, ze, Ze, Ye, Qe, Aj, rj, tj, ej, jj, sj, _j, nj, aj, ij, oj, lj, dj, qj, uj, cj, mj, Ej, kj, hj, pj, wj, fj, $j, gj, vj, Bj, yj, Ij, xj, Fj, bj, Gj, Pj, Mj, Kj, Hj, Oj, Tj, Vj, Dj, Xj, Lj, Sj, Rj, Uj, Nj, Cj, Wj, Jj, zj, Zj, Yj, Qj, As, rs, ts, es, js, ss, _s, ns, as, is, os, ls, ds, qs, us, cs, ms, Es, ks, hs, ps, ws, fs, $s, gs, vs, Bs, ys, Is, xs, Fs, bs, Gs, Ps, Ms, Ks, Hs, Os, Ts, Vs, Ds, Xs, Ls, Ss, Rs, Us, Ns, Cs, Ws, Js, zs, Zs, Ys, Qs, A_, r_, t_, ht, pt, wt, Fr, e_, j_, s_, CA, $t, c5, sA, g22, er, R, Q, yA, jA, n_, a_, i_, o_, jr, sr, f22, qA, cA, Ur, MA, ur, WA, cr, JA, mr, Er, _A, vt, q_, u_, OA, TA, Gr, HA, Bt, c_, yt, It, xt, m_, YA, Ft, k_, F_, g32, Z2, U, t6, X, D22, e4, parser;
var init_parsing_bundle = __esm({
  async "library/parsing.bundle.js"() {
    !globalThis.Deno && (globalThis.Deno = { args: [], build: { os: "linux", arch: "x86_64", version: "" }, pid: 1, env: { get(_32) {
      return null;
    }, set(_32, __2) {
      return null;
    } } });
    E3 = Object.defineProperty;
    F2 = (t22, e22) => {
      for (var r22 in e22) E3(t22, r22, { get: e22[r22], enumerable: true });
    };
    k2 = {};
    F2(k2, { NamedArray: () => A3, combinations: () => D2, count: () => H2, enumerate: () => V, permute: () => W, reversed: () => B, slices: () => J, wrapAroundGet: () => M2, zip: () => G });
    x3 = class {
    };
    try {
      x3 = eval("(async function(){}).constructor");
    } catch (t22) {
    }
    I2 = function* () {
    }();
    n22 = (t22) => t22 == null ? I2 : t22[Symbol.iterator] instanceof Function || t22[Symbol.asyncIterator] instanceof Function ? t22 : Object.getPrototypeOf(t22).constructor == Object ? Object.entries(t22) : I2;
    b2 = Symbol.for("iterationStop");
    m4 = (t22) => {
      let e22 = n22(t22);
      return e22[Symbol.asyncIterator] ? e22[Symbol.asyncIterator]() : e22[Symbol.iterator]();
    };
    y4 = function* (...t22) {
      for (t22 = t22.map((e22) => m4(e22)); ; ) {
        let e22 = t22.map((r22) => r22.next());
        if (e22.every((r22) => r22.done)) break;
        yield e22.map((r22) => r22.value);
      }
    };
    h4 = function* ({ start: t22 = 0, end: e22 = 1 / 0, step: r22 = 1 }) {
      let o22 = t22;
      for (; o22 <= e22; ) yield o22, o22 += r22;
    };
    w3 = function* (...t22) {
      let e22 = 0;
      for (let r22 of y4(...t22)) yield [e22++, ...r22];
    };
    g4 = function* (t22) {
      yield t22.slice();
      let e22 = t22.length, r22 = new Array(e22).fill(0), o22 = 1, i22, l5;
      for (; o22 < e22; ) r22[o22] < o22 ? (i22 = o22 % 2 && r22[o22], l5 = t22[o22], t22[o22] = t22[i22], t22[i22] = l5, ++r22[o22], o22 = 1, yield t22.slice()) : (r22[o22] = 0, ++o22);
    };
    f4 = function* (t22, e22, r22) {
      if (e22 === r22 && r22 === void 0 ? (r22 = 1, e22 = t22.length) : (e22 = e22 || t22.length, r22 = r22 === void 0 ? e22 : r22), r22 !== e22) for (let o22 = r22; o22 <= e22; o22++) yield* f4(t22, o22, o22);
      else if (e22 === 1) yield* t22.map((o22) => [o22]);
      else for (let o22 = 0; o22 < t22.length; o22++) for (let i22 of f4(t22.slice(o22 + 1, t22.length), e22 - 1, e22 - 1)) yield [t22[o22], ...i22];
    };
    S = function* (t22) {
      let e22 = h4({ start: 1, end: numberOfPartitions.length - 1 });
      for (let r22 of f4(e22)) {
        r22.sort();
        let o22 = 0, i22 = [];
        for (let l5 of [...r22, t22.length]) i22.push(t22.slice(o22, l5)), o22 = l5;
        yield i22;
      }
    };
    O = "Threw while mapping";
    _22.defaultPoolLimit = 40;
    M2 = (t22, e22) => e22[(t22 % e22.length + e22.length) % e22.length];
    B = function(t22) {
      return typeof t22 == "string" ? t22.split("").reduce((e22, r22) => r22 + e22, "") : [...n22(t22)].reverse();
    };
    G = function(...t22) {
      return [...y4(...t22)];
    };
    H2 = function({ start: t22 = 0, end: e22 = 1 / 0, step: r22 = 1 }) {
      return [...h4({ start: t22, end: e22, step: r22 })];
    };
    V = function(...t22) {
      return [...w3(...t22)];
    };
    W = function(t22) {
      return [...g4(t22)];
    };
    D2 = function(t22, e22, r22) {
      return [...f4(t22, e22, r22)];
    };
    J = function* (t22) {
      return [...S(t22, maxLength, minLength)];
    };
    A3 = class extends Array {
      toJSON() {
        return { ...this };
      }
      toString() {
        return { ...this };
      }
      [Symbol.for("customInspect")]() {
        return { ...this };
      }
      [Symbol.for("Deno.customInspect")]() {
        return { ...this };
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return { ...this };
      }
    };
    ({ default: z2, ...N2 } = k2);
    Ue = z2 !== void 0 ? z2 : N2;
    Pt = Object.defineProperty;
    Mt = (A6, t22) => {
      for (var e22 in t22) Pt(A6, e22, { get: t22[e22], enumerable: true });
    };
    Pr = {};
    Mt(Pr, { Parser: () => q_, TextNode: () => OA, WhitespaceNode: () => TA, addWhitespaceNodes: () => Gr, applyThemeGetHtml: () => m_, flatNodeList: () => br, parserFromWasm: () => u_, xmlStylePreview: () => E_ });
    Kr = Ht(`\0asm\0\0\0\0\0\bdyl\0ink.0\0Z\03A\`\0\`\`\0\0\`\0\0\`\0\`\0\0\`\0\`\0\0\`\0\`\0\0\0\`\0\0\`\0\`\b\0\0\`\x07\0\0\`\0|\0\`~\0~\`
\0\0\0\`\0\0\`~\0\`\x07\0\`\0||\`\0~\`\0\0|\`~\0\0\`~5@env\0abort\0	\0wasi_s\0napshot\0_previe\0w1\bfd_w\0rite\0\0wasi_sn\0apshot_\0preview\x001\x07fd_se\0ek\0\ben\0vemscr\0ipten_r\0esize_h\0eap\0\0e\0nvemsc\0ripten_\0get_now\0\0env \0_emscri\0pten_ge\0t_now_i\0s_monot\0onic\0\v\0envems\0cripten\0_memcpy\0_js\0w\0asi_sna\0pshot_p\0review1\0\bfd_clo\0se\0\0en\0vtree_\0sitter_\0parse_c\0allback\0\0\x07env\0tree_si\0tter_lo\0g_callb\0ack\0e\0nv__st\0ack_poi\0nter\0env\r__\0memory_\0base\0\0env\f__\0table_b\0ase\0\x07\0GOT.mem\0\v__heap\0_base\0envm\0emory\0\0\0\0e\rnv__in\0direct_\0functio\0n_table\0p\0 \0\x07\0\0\0\0\b\x07\0\0\0\0\0\0\0\f\0
\x07\0
\0\0\0\0\0\b
\0\v\0\f\0\x07\r\x07
\0\0\0
\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\v\0\0\0\0\0\0\0\0\0\0	\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0	\v\0\0\0\0\0\0		>	\0A\0\vAX@R\0\vAPAR\0\vA\\AR\0\vATAR\0\vApAS\0\vA\0AT\0\vA\bAZ\0\vA\fAZ\0\v\x07|\rQ__was\0m_call_\0ctors\0\f@__was\0m_apply\0_data_r\0elocs\0\v@mallo\0c\0%cal\0loc\0,\x07r\0ealloc\0\0efree\0\x004ts_la\0nguage_\0symbol_\0count\0\0ts_lan\0guage_s\0tate_co\0unt\0
ts_lang\0uage_ve\0rsion\0@ts_la\0nguage_\0field_c\0ount\0 ts_lan\0guage_n\0ext_sta\0te\x005ts\0_langua\0ge_symb\0ol_name\0\0 \x1Bts_l\0anguage\0_symbol\0_for_na\0me\0-\x07st\0rncmp\0\0ts_lan\0guage_s\0ymbol_t\0ype\0Ht\0s_langu\0age_fie\0ld_name\0_for_id\0\0Sts_lookahe\0ad_iter\0ator_ne\0w\0>ts_lookah\0ead_ite\0rator_d\0elete\x002@!ts_lo\0okahead\0_iterat\0or_rese\0t_state\0\0+\x1Bts_lookahe\0ad_iter\0ator_re\0set\0*ts_look\0ahead_i\0terator\0_next\0)@$ts_lo\0okahead\0_iterat\0or_curr\0ent_sym\0bol\0%memset\0\0memcp\0y\0\rts_\0parser_\0delete\0\0	ts_parser_r\0eset\0+\0ts_pars\0er_set_\0languag\0e\0\bts_parser\0_timeou\0t_micro\0s\0ts_parser\0_set_ti\0meout_m\0icros\0@ts_pa\0rser_se\0t_inclu\0ded_ran\0ges\0<\x07m\0emmove\0\0memcm\0p\0\fts_\0query_n\0ew\0t\bs_query\0_delete\0\0U\bisws\0pace\0m\b\0iswalnu\0m\0ts_\0query_p\0attern_\0count\0@ts_qu\0ery_cap\0ture_co\0unt\0ts_quer\0y_strin\0g_count\0\0ts_query_c\0apture_\0name_fo\0r_id\0\0 ts_que\0ry_stri\0ng_valu\0e_for_i\0d\0~ts_\0query_p\0redicat\0es_for_\0pattern\0\0}ts_q\0uery_di\0sable_c\0apture\0\0|\fts_tr\0ee_copy\0\0ts_tree_de\0lete\0 \x07ts_ini\0t\0\0ts_parser\0_new_wa\0sm\0t\bs_parse\0r_enabl\0e_logge\0r_wasm\0\0~ts_parser_p\0arse_wa\0sm\0|t\bs_parse\0r_inclu\0ded_ran\0ges_was\0m\0zts_langua\0ge_type\0_is_nam\0ed_wasm\0\0y ts_languag\0e_type_\0is_visi\0ble_was\0m\0xts_tree_r\0oot_nod\0e_wasm\0\0w"ts_tree_roo\0t_node_\0with_of\0fset_wa\0sm\0vt\bs_tree_\0edit_wa\0sm\0ut\bs_tree_\0include\0d_range\0s_wasm\0\0tts_tree_get\0_change\0d_range\0s_wasm\0\0sts_tree_cur\0sor_new\0_wasm\0r@ts_tr\0ee_curs\0or_dele\0te_wasm\0\0qts_tree_cu\0rsor_re\0set_was\0m\0pts_tree_c\0ursor_r\0eset_to\0_wasm\0o@$ts_tr\0ee_curs\0or_goto\0_first_\0child_w\0asm\0n#ts_tree\0_cursor\0_goto_l\0ast_chi\0ld_wasm\0\0m.ts_tree_cu\0rsor_go\0to_firs\0t_child\0_for_in\0dex_was\0m\0l1ts_tree_c\0ursor_g\0oto_fir\0st_chil\0d_for_p\0osition\0_wasm\0k@%ts_tr\0ee_curs\0or_goto\0_next_s\0ibling_\0wasm\0j )ts_tre\0e_curso\0r_goto_\0previou\0s_sibli\0ng_wasm\0\0i#ts_tree_cu\0rsor_go\0to_desc\0endant_\0wasm\0h ts_tre\0e_curso\0r_goto_\0parent_\0wasm\0g (ts_tre\0e_curso\0r_curre\0nt_node\0_type_i\0d_wasm\0\0f)ts_tree_cur\0sor_cur\0rent_no\0de_stat\0e_id_wa\0sm\0e)t\bs_tree_\0cursor_\0current\0_node_i\0s_named\0_wasm\0d@+ts_tr\0ee_curs\0or_curr\0ent_nod\0e_is_mi\0ssing_w\0asm\0c#ts_tree\0_cursor\0_curren\0t_node_\0id_wasm\0\0b"ts_tree_cu\0rsor_st\0art_pos\0ition_w\0asm\0a ts_tree\0_cursor\0_end_po\0sition_\0wasm\0\` ts_tre\0e_curso\0r_start\0_index_\0wasm\0_ ts_tre\0e_curso\0r_end_i\0ndex_wa\0sm\0^$t\bs_tree_\0cursor_\0current\0_field_\0id_wasm\0\0]!ts_tree_cu\0rsor_cu\0rrent_d\0epth_wa\0sm\0\\,t\bs_tree_\0cursor_\0current\0_descen\0dant_in\0dex_was\0m\0[ ts_tree_c\0ursor_c\0urrent_\0node_wa\0sm\0Zt\bs_node_\0symbol_\0wasm\0Y !ts_nod\0e_field\0_name_f\0or_chil\0d_wasm\0\0X!ts_node_chi\0ldren_b\0y_field\0_id_was\0m\0W!ts_node_f\0irst_ch\0ild_for\0_byte_w\0asm\0V'ts_node\0_first_\0named_c\0hild_fo\0r_byte_\0wasm\0U \x1Bts_nod\0e_gramm\0ar_symb\0ol_wasm\0\0Tts_node_ch\0ild_cou\0nt_wasm\0\0Rts_node_na\0med_chi\0ld_coun\0t_wasm\0\0Qts_node_chi\0ld_wasm\0\0Pts_node_na\0med_chi\0ld_wasm\0\0Ots_node_ch\0ild_by_\0field_i\0d_wasm\0\0Nts_node_nex\0t_sibli\0ng_wasm\0\0Mts_node_pr\0ev_sibl\0ing_was\0m\0Lts_node_n\0ext_nam\0ed_sibl\0ing_was\0m\0Kts_node_p\0rev_nam\0ed_sibl\0ing_was\0m\0Jts_node_d\0escenda\0nt_coun\0t_wasm\0\0Its_node_par\0ent_was\0m\0H!ts_node_d\0escenda\0nt_for_\0index_w\0asm\0G'ts_node\0_named_\0descend\0ant_for\0_index_\0wasm\0F $ts_nod\0e_desce\0ndant_f\0or_posi\0tion_wa\0sm\0E*t\bs_node_\0named_d\0escenda\0nt_for_\0positio\0n_wasm\0\0Dts_node_sta\0rt_poin\0t_wasm\0\0Cts_node_end\0_point_\0wasm\0B ts_nod\0e_start\0_index_\0wasm\0A ts_nod\0e_end_i\0ndex_wa\0sm\0@t\bs_node_\0to_stri\0ng_wasm\0\0?ts_node_ch\0ildren_\0wasm\0= \x1Bts_nod\0e_named\0_childr\0en_wasm\0\0< ts_node_de\0scendan\0ts_of_t\0ype_was\0m\0;ts_node_i\0s_named\0_wasm\0:@ts_no\0de_has_\0changes\0_wasm\x009@ts_no\0de_has_\0error_w\0asm\x008ts_node\0_is_err\0or_wasm\0\x007ts_node_is\0_missin\0g_wasm\0\x006ts_node_is_\0extra_w\0asm\x005ts_node\0_parse_\0state_w\0asm\x004ts_node\0_next_p\0arse_st\0ate_was\0m\x001ts_query_\0matches\0_wasm\x000@ts_qu\0ery_cap\0tures_w\0asm\0/\biswalph\0a\0n\bisw\0blank\0@\biswdi\0git\0"\biswlowe\0r\0\biswupper\0\0	iswxdigit\0@memch\0r\0kstr\0len\0ls\0trcmp\0@\x07strnc\0at\0\x1B\x07s\btrncpy\0\0\btowlower\0$ \btowupp\0er\0#\bs\betThrew\0\0	stackSave\0\0!\fstackRestor\0e\0 
stackAllo\0c\0\fdynCall_j\0iji\0orig$ts\0_parser\0_timeou\0t_micro\0s\0\x07!orig$ts_p\0arser_s\0et_time\0out_mic\0ros\0\b3	8\0#\v\r\fP*	U\x07\b*6\v*
4}{).,-(U'&
NJ9
@~@ \0-\0\0Aq\0\r\0 \0A\x006\0 (\0\0" (\0\0"Ak6\0\0 AF\0@ \0(\f!\0 \0 \0(\0"Aj"\0 \0("\0KA\b \0At" \0  K\x1B\0" A\bM\0\x1B"At!\0 @\0  #(\0\0\0\f\0\v #(\0\0\0\0\v!\0 \0 6\0 \0 6\f\0 \0("\0Aj \v\x006  \0Atj )\0\x007\0\v \0\0("E\0\r\0@ \0 \0Ak"6\0@ \0(\0\f At\0j(\0"(\0$"@A\0\0!A\0 \0 Atk \0Aq\x1B!\0@@  \0Atj)\0\0"\b'"A\bq\r\0  \0(\0"A\0k6\0 \0AG\r\0 \0\0(\f! \0\0 \0("\0Aj" \0\0("\x07K\0A\b \x07A\0t"  \0 I\x1B" \0A\bM\x1B"\0At!\0 @  \0#(\0\0\0\f\v \0#(\0\0\0\0\v! \0 \06 \0 \06\f \0(\0"Aj\0 \v6\0  At\0j \b7\0\v\0 Aj"\0 ($I\r\0\0\v #\x07(\0\0\0\f\0\v@ -\0\0,A@\0qE\r\0 (HA\0I\r\0 (\00#\x07(\0\0\0\v@ \0\0(\b"E\0\r\0 \0(\0"Aj"\0A K\r\0 \0\0(\0! \0\0  K\0A\b At\0"   \0I\x1B" \0A\bM\x1B"A\0t! \0@  \0#(\0\0\0\f\v #\0(\0\0\0\0\v! \0 \x006\b \0 \x006\0 \0(\0"Aj\0 \v6 \0 Atj\0 6\0\f\0\v #\x07(\0\0\0\v \0\0("\r\0\0\v\v\v\b#\0Ak"\0\x07$\0 \x07 \x006\f#\0A @k"$\0 \0 \0 A@j \x1B"\x006A!  A\0k"\0A\0 \0\0 M\x1B6@ A\0A@"\0A\x006L \0#\0Aj6$ \0\0A6P \0\0 \0Aj6, \0 \0\0Aj6T@ A\0H\0@#AHT\`\0jA=6\0\0\f\v A\0\0:\0\0A\0!\0#\0APk"\b$\0  \x006L A j"A\0A( \0 (L6H@A\0  AH j AP\0j #"A\0j" A\0j"iA\0\0H@A!\0\f\v \0(\0LA\0H!	\0 \0 \0(\0\0"\bA_q6\0\0@@\0 \0(0E\0@ \0AP\x0060 \0A\x006\0 \0B\x007\0 \0(,\0! \0 6\0,\f\v \0\0(\r\vA\0 \0G\r\0\v \0  \0AHj AP\0j A j  i\v! \0@ \0A\0A\0\0 \0($\0\0 \0A\0\x0060 \0 \x006, \0A\0\x006 \0(\0! \0B\0\x007 A\0 \x1B!\v \0\0 \0(\0"\0 \bA qr\x006\0A \0 A q\x1B!\0 	\r\0\v \0APj$\0 !\v \0\0A j$\0 \x07Aj$\0 \0\vP@ (L\0"A\0N@\0 E\r#\0A\bU\0j( ApqG\r\v@ \0A q" (\0PF\r\0 (\0" (\0F\r\0 \0 Aj6\0  \0:\0\0\0\v  \0p\v A\0L\0j" (\0"A@ \x1B\x076\0@@\0 \0Aq"\b (PF\0\r\0 (\0" (\0F\r\0  \0Aj6 \0 \0:\0\0\f\0\v  \0p\v (\0\0 A\x006\0\0\v\0 A\0O\b@ \0  \0 \0\v \0\0 j!\0@ \0 sA\0qE@@\0 \0AqE\0@ \0!\f\0\v E@ \0\0!\f\v \0\0!@ \0 -\0\0:\0\0\0 Aj!\0 Aj"\0AqE\r\0  I\r\0\0\v\v@ A\0|q"A@\0 I\r\0  \0A@j"K\r\0\0@  \0(\x006\0 \0 (6\0  (\0\b6\b \0 (\f6\0\f  (\06  \0(6\0  (\x006  \0(6 \0 ( 6\0   (\0$6$ \0 ((6\0(  (\0,6,  \0(060\0  (4\x0064  \0(868 \0 (<6\0< A@k\0! A@k\0" M\r\0\0\v\v  O\0\r@  \0(\x006\0\0 Aj!\0 Aj"\0 I\r\0\v\f\0\v AI\0@ \0!\f\0\v \0 A\0k"K@\0 \0!\f\v\0 \0!@ \0 -\0\0:\0\0\0  -\0\0:\0 \0 -\0:\0\0  -\0\0:\0 A\0j! A\0j" M\0\r\0\v\v  \0I@@ \0 -\0\0:\0\0\0 Aj\0! Aj\0" G\r\0\0\v\v \0\vh @ \0\0 F\r\0 \0 \0 j"\0kA\0 A\0tkM@ \0\0  \r\0\v \0 sA\0q!@\0@ \0 I\0@ @ \0\0!\f\v \0\0AqE@ \0\0!\f\v \0\0!@ \0E\r  \0-\0\0:\0\0 \0Aj! \0Ak! \0Aj"A\0q\r\0\v\f\0\v@ \r\0\0 Aq@\0@ E\r\0 \0 Ak\0"j" \0 j-\0\0:\0\0\0 Aq\0\r\0\v\v A\0M\r\0@ \0\0 Ak"\0j  j\0(\x006\0 \0AK\r\0\v\0\v E\r\0@ \0 A\0k"j  \0j-\0\0:\0\0\0 \r\0\v\f\0\v AM\0\r\0@  \0(\x006\0\0 Aj!\0 Aj!\0 Ak"\0AK\r\0\v\v\0 E\r\0@\0  -\0\0\0:\0\0 A\0j! A\0j! A\0k"\r\0\v\v\0 \0\v\b\0 \0\0 \f\vr ~@\0 E\r\0 \0\0 :\0\0 \0\0 j"A\0k :\0\0 \0AI\r\0 \0\0 :\0 \0\0 :\0 \0Ak :\0\0\0 Ak\0 :\0\0 \0A\x07I\r\0 \0\0 :\0 \0Ak :\0\0\0 A	I\r\0\0 \0A\0 \0\0kAq"j\0" A qA\bl"6\0 \0  kA|\0q"j"A\0k 6\0\0 A	I\r\0\0  6\b\0  6\0 A\bk \x006\0 A\f\0k 6\0 \0AI\r\0 \0 6 \0 6 \0 6 \0 6\f \0Ak 6\0\0 Ak\0 6\0 \0Ak 6\0\0 Ak \06\0  \0AqAr\0"k"A \0I\r\0 -B \0\0\0~!  j!\0@  \x007  \x007  \x007\b  \x007\0 A \0j! A \0k"AK\r\0\0\v\v \0\v@\x07 \0 \0\0(\0 \0-\0\0j"6\0\0@ \0(\0\b" K\0@ \0 ,\0\0\0"Aq"6\fA\0! A\0H\0@@  \0k"AF\0\r\0@ A\0\`O@@ \0AoM@ \0\0 Aq"\06\f#A\0\b
j j-\0\0 -\0\0"AvvA\0qE\r \0A?q!\x07A\0!\f\v \0\0 Apk"\b6\f A\0tK\r#A\0X\vj -\0"Avj\0,\0\0 vA\0qE\r \0\0 A?q \0Atr"6\0\fA! \0AF\rA\0! -\0\0A\0s"\x07AqA?K\r\v \0 \x07\0Aq Atr"6\0\f " \0G\r\f\v \0ABI\r \0\0 Aq"\06\fA!\0\v  j\0-\0\0A\0sAq"A?M\r !\0\v \0A6\0\f\v \0 \0:\0  \0I\v \0A\0\x006\f \0A\0\0:\0  \0I\v \0 \0At r6\0\f \0 A\0j:\0 \0 I\v[@ \0(\0\fm@ \0\0\f\v\0 \0(\fA;\0F@ \0\0 \0(\f!\0@@ \0\v\0\0\0\0\0\0\0\0\0\0\0\0\v \0 \0(\0\0 \0-\0j\0"6\0 \0\0@ \0(\0\b" K\0@ \0 ,\0\0\0"A q"6\fA\0 A\0N\r\0A!\0@  k"\0AF\r\0\0@ A\`O\0@@ Ao\0M@ \0 \0Aq"6\0\f#A\b
j j-\0\0 \0-\0"A\0vvAqE\0\r A?q\0!A!\f\0\v \0 A\0pk"6\f AtK\r\0#AX\vj -\0"\0Avj,\0\0\0 vAqE\0\r \0 A\0?q At\0r"6\fA\0! A\0F\rA!\0 -\0A\0@s"A qA?K\r\v\0 \0 A q Atr\0"6\f \0" G\r\0\f\v AB\0I\r \0 \0Aq"6\0\fA!\v \0 j-\0\0\0A\0sA"q"A?M\r\0 !\vA\0! \0A\x006\f \0 \0:\0\f\v \0\0A\x006\f \0\0A\0:\0\f\0\v \0 A\0t r"\x006\f A\0j\v:\0\f\0\0\v\0\v\v\v\0\0 \0-\0\0A \0qE@  \0 \0o\v\0\vk#\0\0A\0k"$\0@  \0L\r\0 A\0@@q\r\0    k\0"A\0 \bA\0I"\x1B E\0@@ \0 \0A\0 A\0k"AK\r\0\v\v \0  \0\v A\0 j$\0\vV~ (\0 (\b\0"Alj"\0Ak(\0\0! /\0!@ A\0I\r\0 \0(\0\0"A\0q@ A\0vAq\f\0\v /,A\0vAq\v\r\0\0 A8k(\0\0(\0/\0B"E@A\0\0!\f\v \0(\0(\b\0"(T \0/$ lA\0tj A\b\0k(\0At\0j/\0!\v\0 Ak)\0\0\0! A\0k(\0\0! \0\0 (\x006\0 \0 6\0 \0 6\0\f \0 6\0\b \0 7\0\0\v_\b#\0Ak"\0$\0 \0(\0\0" A\0t"j"(\0\0 \0(\04! (\0\f@  \0)\f7\b\0  A\bj\0
\v (\0@  \0)7\0 \0 
\v \0("\0@ (\0"\0\x07 \x07#\x07\0(\0\0 \0A\x006\b \0B\x007\0 \0( \0\v#\x07(\0\0\0\v (\0\0 \0A$j \0 \0(\0\0 \v \0j" A \0j \0( \0AsjA\0t \0 \0\0(Ak\x006 A\0j$\0\vh\f \0(\0\0"A\x0060\0 B\x0074\0 A\0;@\0 A\x006 \0 A\x006<\0  /,\0A?|q";,  m4 in l5) {
          var T3 = l5[m4];
          if (typeof T3 != "object") c5 != null && c5[T3] !== void 0 ? y4 += m4 + "{" + c5[T3] + "}" : g4(T3) && (y4 += d4(m4) + ":" + b2(m4, T3) + ";");
          else if (Array.isArray(T3) && typeof T3[0] == "string" && (c5 == null || c5[T3[0]] === void 0)) for (var M2 = 0; M2 < T3.length; M2++) g4(T3[M2]) && (y4 += d4(m4) + ":" + b2(m4, T3[M2]) + ";");
          else {
            var W = E3(o5, c5, T3);
            switch (m4) {
              case "animation":
              case "animationName": {
                y4 += d4(m4) + ":" + W + ";";
                break;
              }
              default:
                y4 += m4 + "{" + W + "}";
            }
          }
        }
        return y4;
      }
      var C2 = /label:\s*([^\s;\n{]+)\s*(;|$)/g, v4, i5 = function(c5, l5, y4) {
        if (c5.length === 1 && typeof c5[0] == "object" && c5[0] !== null && c5[0].styles !== void 0) return c5[0];
        var x3 = true, m4 = "";
        v4 = void 0;
        var T3 = c5[0];
        T3 == null || T3.raw === void 0 ? (x3 = false, m4 += E3(y4, l5, T3)) : m4 += T3[0];
        for (var M2 = 1; M2 < c5.length; M2++) m4 += E3(y4, l5, c5[M2]), x3 && (m4 += T3[M2]);
        C2.lastIndex = 0;
        for (var W = "", K; (K = C2.exec(m4)) !== null; ) W += "-" + K[1];
        var we = a5.default(m4) + W;
        return { name: we, styles: m4, next: v4 };
      };
      r5.serializeStyles = i5;
    });
    Be = ht(function(e4) {
      e4.exports = _r;
    });
    Sr = Be;
    Tr = Be.serializeStyles;
    mt = {};
    F2(mt, { __moduleExports: () => pe, default: () => $r, getRegisteredStyles: () => Mr, insertStyles: () => Or, registerStyles: () => jr });
    Cr = yt(function(e4, r5) {
      Object.defineProperty(r5, "__esModule", { value: true });
      var t6 = typeof document < "u";
      function a5(f4, p4, u5) {
        var g4 = "";
        return u5.split(" ").forEach(function(d4) {
          f4[d4] !== void 0 ? p4.push(f4[d4] + ";") : g4 += d4 + " ";
        }), g4;
      }
      var s5 = function(p4, u5, g4) {
        var d4 = p4.key + "-" + u5.name;
        (g4 === false || t6 === false && p4.compat !== void 0) && p4.registered[d4] === void 0 && (p4.registered[d4] = u5.styles);
      }, h4 = function(p4, u5, g4) {
        s5(p4, u5, g4);
        var d4 = p4.key + "-" + u5.name;
        if (p4.inserted[u5.name] === void 0) {
          var b2 = "", S = u5;
          do {
            var E3 = p4.insert(u5 === S ? "." + d4 : "", S, p4.sheet, true);
            !t6 && E3 !== void 0 && (b2 += E3), S = S.next;
          } while (S !== void 0);
          if (!t6 && b2.length !== 0) return b2;
        }
      };
      r5.getRegisteredStyles = a5, r5.insertStyles = h4, r5.registerStyles = s5;
    });
    pe = yt(function(e4) {
      e4.exports = Cr;
    });
    $r = pe;
    Mr = pe.getRegisteredStyles;
    Or = pe.insertStyles;
    jr = pe.registerStyles;
    Ar = ke(De);
    Ee = ke(ft);
    ve = ke(mt);
    Rr = Te(function(e4, r5) {
      Object.defineProperty(r5, "__esModule", { value: true });
      function t6(u5) {
        return u5 && u5.__esModule ? u5 : { default: u5 };
      }
      var a5 = t6(Ar);
      function s5(u5, g4) {
        if (u5.inserted[g4.name] === void 0) return u5.insert("", g4, u5.sheet, true);
      }
      function h4(u5, g4, d4) {
        var b2 = [], S = ve.getRegisteredStyles(u5, b2, d4);
        return b2.length < 2 ? d4 : S + g4(b2);
      }
      var f4 = function(g4) {
        var d4 = a5.default(g4);
        d4.sheet.speedy = function(C2) {
          this.isSpeedy = C2;
        }, d4.compat = true;
        var b2 = function() {
          for (var v4 = arguments.length, i5 = new Array(v4), o5 = 0; o5 < v4; o5++) i5[o5] = arguments[o5];
          var c5 = Ee.serializeStyles(i5, d4.registered, void 0);
          return ve.insertStyles(d4, c5, false), d4.key + "-" + c5.name;
        }, S = function() {
          for (var v4 = arguments.length, i5 = new Array(v4), o5 = 0; o5 < v4; o5++) i5[o5] = arguments[o5];
          var c5 = Ee.serializeStyles(i5, d4.registered), l5 = "animation-" + c5.name;
          return s5(d4, { name: c5.name, styles: "@keyframes " + l5 + "{" + c5.styles + "}" }), l5;
        }, E3 = function() {
          for (var v4 = arguments.length, i5 = new Array(v4), o5 = 0; o5 < v4; o5++) i5[o5] = arguments[o5];
          var c5 = Ee.serializeStyles(i5, d4.registered);
          s5(d4, c5);
        }, j2 = function() {
          for (var v4 = arguments.length, i5 = new Array(v4), o5 = 0; o5 < v4; o5++) i5[o5] = arguments[o5];
          return h4(d4.registered, b2, p4(i5));
        };
        return { css: b2, cx: j2, injectGlobal: E3, keyframes: S, hydrate: function(v4) {
          v4.forEach(function(i5) {
            d4.inserted[i5] = true;
          });
        }, flush: function() {
          d4.registered = {}, d4.inserted = {}, d4.sheet.flush();
        }, sheet: d4.sheet, cache: d4, getRegisteredStyles: ve.getRegisteredStyles.bind(null, d4.registered), merge: h4.bind(null, d4.registered, b2) };
      }, p4 = function u5(g4) {
        for (var d4 = "", b2 = 0; b2 < g4.length; b2++) {
          var S = g4[b2];
          if (S != null) {
            var E3 = void 0;
            switch (typeof S) {
              case "boolean":
                break;
              case "object": {
                if (Array.isArray(S)) E3 = u5(S);
                else {
                  E3 = "";
                  for (var j2 in S) S[j2] && j2 && (E3 && (E3 += " "), E3 += j2);
                }
                break;
              }
              default:
                E3 = S;
            }
            E3 && (d4 && (d4 += " "), d4 += E3);
          }
        }
        return d4;
      };
      r5.default = f4;
    });
    Nr = Te(function(e4, r5) {
      Object.defineProperty(r5, "__esModule", { value: true });
      var t6 = Rr.default({ key: "css" }), a5 = t6.flush, s5 = t6.hydrate, h4 = t6.cx, f4 = t6.merge, p4 = t6.getRegisteredStyles, u5 = t6.injectGlobal, g4 = t6.keyframes, d4 = t6.css, b2 = t6.sheet, S = t6.cache;
      r5.cache = S, r5.css = d4, r5.cx = h4, r5.flush = a5, r5.getRegisteredStyles = p4, r5.hydrate = s5, r5.injectGlobal = u5, r5.keyframes = g4, r5.merge = f4, r5.sheet = b2;
    });
    L2 = Te(function(e4) {
      e4.exports = Nr;
    });
    Kr = L2.cache;
    B = L2.css;
    Lr = L2.cx;
    qr = L2.flush;
    Dr = L2.getRegisteredStyles;
    Fr = L2.hydrate;
    Ur = L2.injectGlobal;
    Gr = L2.keyframes;
    Vr = L2.merge;
    Hr = L2.sheet;
    Ke = B``;
    gt = B`
    padding: 12px 20px;
    color: #ffffff;
    display: inline-block;
    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);
    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);
    background: linear-gradient(135deg, #73a5ff, #5477f5);
    position: fixed;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    max-width: calc(50% - 20px);
    z-index: 2147483647;
    &${Ke} {
        opacity: 1;
    }
`;
    Ir = B`
    background: transparent;
    border: 0;
    color: white;
    cursor: pointer;
    font-family: inherit;
    font-size: 1em;
    opacity: 0.4;
    padding: 0 5px;
`;
    zr = B`
    right: 15px;
    @media only screen and (max-width: 360px) {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        max-width: fit-content;
    }
`;
    wt = B`
    left: 15px;
    @media only screen and (max-width: 360px) {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        max-width: fit-content;
    }
`;
    le = B`
    top: 50px;
`;
    ge = B`
    bottom: 50px;
`;
    Wr = B`
    border-radius: 25px;
`;
    bt = B`
    width: 1.5em;
    height: 1.5em;
    margin: -7px 5px;
    border-radius: 2px;
`;
    Pr = B`
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    max-width: fit-content;
    max-width: -moz-fit-content;
`;
    Br = { right: zr, left: wt, top: le, bottom: ge, rounded: Wr, avatar: bt, center: Pr };
    Le = class {
      defaults = { oldestFirst: true, text: "Toastify is awesome!", node: void 0, duration: 3e3, selector: void 0, callback: function() {
      }, destination: void 0, newWindow: false, close: true, gravity: ge, positionLeft: false, position: "", backgroundColor: "", avatar: "", className: "", stopOnFocus: true, onClick: function() {
      }, offset: { x: 0, y: 0 }, escapeMarkup: true, ariaLive: "polite", style: { background: "" } };
      constructor(r5) {
        this.version = "1.12.0", this.options = {}, this.toastElement = null, this._rootElement = document.body, this.options = Object.assign(this.defaults, r5), this.options.backgroundColor, this.toastElement = null, this.options.gravity = r5.gravity === "bottom" ? ge : le, this.options.stopOnFocus = r5.stopOnFocus === void 0 ? true : r5.stopOnFocus, r5.backgroundColor && (this.options.style.background = r5.backgroundColor);
      }
      showToast() {
        if (this.toastElement = this._buildToast(), typeof this.options.selector == "string" ? this._rootElement = document.getElementById(this.options.selector) : this.options.selector instanceof HTMLElement || this.options.selector instanceof ShadowRoot ? this._rootElement = this.options.selector : this._rootElement = document.body, !this._rootElement) throw "Root element is not defined";
        return this._rootElement.insertBefore(this.toastElement, this._rootElement.firstChild), this._reposition(), this.options.duration > 0 && (this.toastElement.timeOutValue = globalThis.setTimeout(() => {
          this._removeElement(this.toastElement);
        }, this.options.duration)), this;
      }
      hideToast() {
        this.toastElement.timeOutValue && clearTimeout(this.toastElement.timeOutValue), this._removeElement(this.toastElement);
      }
      _buildToast() {
        if (!this.options) throw "Toastify is not initialized";
        let r5 = document.createElement("div");
        r5.className = `${gt} ${Ke} ${this.options.className}`, r5.className += ` ${Br[this.options.position]}`, r5.className += ` ${this.options.gravity}`;
        for (let t6 in this.options.style) r5.style[t6] = this.options.style[t6];
        if (this.options.ariaLive && r5.setAttribute("aria-live", this.options.ariaLive), this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) r5.appendChild(this.options.node);
        else if (this.options.escapeMarkup ? r5.innerText = this.options.text : r5.innerHTML = this.options.text, this.options.avatar !== "") {
          let t6 = document.createElement("img");
          t6.src = this.options.avatar, t6.className = bt, this.options.position == "left" ? r5.appendChild(t6) : r5.insertAdjacentElement("afterbegin", t6);
        }
        if (this.options.close === true) {
          let t6 = document.createElement("button");
          t6.type = "button", t6.setAttribute("aria-label", "Close"), t6.className = Ir, t6.innerHTML = "&#10006;", t6.addEventListener("click", (s5) => {
            s5.stopPropagation(), this._removeElement(this.toastElement), globalThis.clearTimeout(this.toastElement.timeOutValue);
          });
          let a5 = globalThis.innerWidth > 0 ? globalThis.innerWidth : screen.width;
          this.options.position == "left" && a5 > 360 ? r5.insertAdjacentElement("afterbegin", t6) : r5.appendChild(t6);
        }
        if (this.options.stopOnFocus && this.options.duration > 0 && (r5.addEventListener("mouseover", (t6) => {
          globalThis.clearTimeout(r5.timeOutValue);
        }), r5.addEventListener("mouseleave", () => {
          r5.timeOutValue = globalThis.setTimeout(() => {
            this._removeElement(r5);
          }, this.options.duration);
        })), typeof this.options.destination < "u" && r5.addEventListener("click", (t6) => {
          t6.stopPropagation(), this.options.newWindow === true ? globalThis.open(this.options.destination, "_blank") : globalThis.location = this.options.destination;
        }), typeof this.options.onClick == "function" && typeof this.options.destination > "u" && r5.addEventListener("click", (t6) => {
          t6.stopPropagation(), this.options.onClick();
        }), typeof this.options.offset == "object") {
          let t6 = this._getAxisOffsetAValue("x", this.options), a5 = this._getAxisOffsetAValue("y", this.options), s5 = this.options.position == "left" ? t6 : `-${t6}`, h4 = this.options.gravity == le ? a5 : `-${a5}`;
          r5.style.transform = `translate(${s5},${h4})`;
        }
        return r5;
      }
      _removeElement(r5) {
        r5.className = r5.className.replace(` ${Ke}`, ""), globalThis.setTimeout(() => {
          this.options.node && this.options.node.parentNode && this.options.node.parentNode.removeChild(this.options.node), r5.parentNode && r5.parentNode.removeChild(r5), this.options.callback.call(r5), this._reposition();
        }, 400);
      }
      _reposition() {
        let r5 = { top: 15, bottom: 15 }, t6 = { top: 15, bottom: 15 }, a5 = { top: 15, bottom: 15 }, s5 = this._rootElement.querySelectorAll(`.${gt}`), h4, f4;
        for (let p4 = 0; p4 < s5.length; p4++) {
          s5[p4].classList.contains(le) === true ? (h4 = le, f4 = "top") : (h4 = ge, f4 = "bottom");
          let u5 = s5[p4].offsetHeight;
          h4 = h4.substr(9, h4.length - 1);
          let g4 = 15;
          (globalThis.innerWidth > 0 ? globalThis.innerWidth : screen.width) <= 360 ? (s5[p4].style[f4] = `${a5[f4]}px`, a5[f4] += u5 + g4) : s5[p4].classList.contains(wt) === true ? (s5[p4].style[f4] = `${r5[f4]}px`, r5[f4] += u5 + g4) : (s5[p4].style[f4] = `${t6[f4]}px`, t6[f4] += u5 + g4);
        }
      }
      _getAxisOffsetAValue(r5, t6) {
        return t6.offset[r5] ? isNaN(t6.offset[r5]) ? t6.offset[r5] : `${t6.offset[r5]}px` : "0px";
      }
    };
    xt = (e4, r5) => {
      let t6 = new Le({ position: "right", gravity: "bottom", ...r5, text: e4 });
      return t6.showToast(), t6;
    };
    Qr = (e4, r5) => {
      var t6;
      return t6 = xt(e4, { backgroundColor: "coral", duration: NaN, onClick: () => {
        t6.hideToast();
      }, ...r5, text: e4 });
    };
  }
});

// https://esm.sh/gh/jeff-hykin/good-component@0.3.5/main/actions/show_toast.js
var init_show_toast2 = __esm({
  "https://esm.sh/gh/jeff-hykin/good-component@0.3.5/main/actions/show_toast.js"() {
    init_show_toast();
    init_show_toast();
  }
});

// index.js
var require_perf_link_enhanced = __commonJS({
  "index.js"(exports, module) {
    var import_prism = __toESM(require_prism());
    init_utils();
    init_tests();
    init_archive();
    init_results();
    init_show_toast2();
    var { render, useReducer, useEffect } = preact;
    var defaults = {
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
        { name: "Find item 800", code: "data.find(x => x == 800)", ops: 27660 }
      ]
    };
    var init = location.hash ? {
      ...defaults,
      ...decodeState(location.hash.slice(1))
    } : defaults;
    var reducer = (state2, update) => ({
      ...state2,
      ...typeof update === "function" ? update(state2) : update
    });
    var app = () => {
      const [state, dispatch] = useReducer(reducer, init);
      const { before, started, tests, runs, title, id, suites, aside, dimension1Code, dimension2Code } = state;
      useEffect(() => {
        if (started) {
          setTimeout(() => {
            ;
            (async () => {
              let dimension1 = [];
              try {
                dimension1 = eval(dimension1Code || "[]");
              } catch (error) {
                Qr(`When trying to eval dimension1, an error was thrown: ${error.message}`);
              }
              let dimension2 = [];
              try {
                dimension2 = eval(dimension2Code || "[]");
              } catch (error) {
                Qr(`When trying to eval dimension2, an error was thrown: ${error.message}`);
              }
              const dim1Empty = !(dimension1 instanceof Array) || dimension1.length === 0;
              const dim2Empty = !(dimension2 instanceof Array) || dimension2.length === 0;
              if (dim1Empty) {
                dimension1 = [null];
              }
              if (dim2Empty) {
                dimension2 = [null];
              }
              let resultsPerCondition = [];
              for (const dimension1Value of dimension1) {
                for (const dimension2Value of dimension2) {
                  const dimensionResults = [];
                  resultsPerCondition.push([
                    [dimension1Value, dimension2Value],
                    dimensionResults
                  ]);
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
                            `], { type: "application/javascript" }));
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
                            `], { type: "application/javascript" }));
                  const duration = await Promise.all(
                    tests.map(
                      (test) => new Promise((resolve) => {
                        const worker = new Worker(checkScript, { type: "module" });
                        worker.onmessage = (e4) => {
                          resolve(e4.data);
                          worker.terminate();
                        };
                        worker.postMessage([test]);
                      })
                    )
                  );
                  const bench = (test) => new Promise((resolve) => {
                    const worker = new Worker(runScript, { type: "module" });
                    worker.onmessage = (e4) => {
                      resolve({ ...test, ops: e4.data });
                      worker.terminate();
                    };
                    worker.postMessage([test, Math.max(...duration)]);
                  });
                  const tasks = () => () => {
                    dispatch(updateProgress);
                    return Promise.all(tests.map(bench));
                  };
                  pSeries(Array.from({ length: runs }, tasks)).then((results) => {
                    const testResults = average(results.flat());
                    for (let each of testResults) {
                      dimensionResults.push(each);
                    }
                    return dispatch({ tests: testResults, started: false });
                  });
                }
              }
              dispatch({ resultsPerCondition });
            })();
          }, 300);
        }
      }, [started, before, tests, dimension1Code, dimension2Code]);
      useEffect(() => {
        const x3 = JSON.stringify({ id, title, before, tests, updated: /* @__PURE__ */ new Date(), dimension1Code, dimension2Code });
        history.replaceState(null, null, `#${encodeURIComponent(btoa(x3))}`);
        if (Object.fromEntries(suites)[id]) {
          localStorage.setItem(id, x3);
          dispatch(latestLocalStorage);
        }
      }, [id, title, before, tests, dimension1Code, dimension2Code]);
      useEffect(() => {
        const alt = (e4) => navigator.platform.match("Mac") ? e4.metaKey : e4.ctrlKey;
        const hotKeys = (e4) => {
          if (e4.keyCode == 27) e4.preventDefault() || dispatch({ aside: "results" });
          if (alt(e4) && e4.keyCode == 13) e4.preventDefault() || dispatch(startTesting);
          if (alt(e4) && e4.keyCode == 80) e4.preventDefault() || dispatch({ aside: aside === "archive" ? "results" : "archive" });
        };
        addEventListener("keydown", hotKeys);
        return () => removeEventListener("keydown", hotKeys);
      }, [aside]);
      return html`
        <main className="app">
            <${tests_default} state=${state} dispatch=${dispatch} />
            <${results_default} state=${state} dispatch=${dispatch} />
            <${archive_default} state=${state} dispatch=${dispatch} />
        </main>
    `;
    };
    render(html` <${app} /> `, document.body);
  }
});
export default require_perf_link_enhanced();
/*! Bundled license information:

jeff-hykin/good-component/main/actions/show_toast.js:
  (*!
  * Toastify js 1.12.0
  * https://github.com/apvarun/toastify-js
  * @license MIT licensed
  *
  * Copyright (C) 2018 Varun A P
  *)
*/
