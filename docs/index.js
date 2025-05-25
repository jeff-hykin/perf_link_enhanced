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
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
  "library/prism.js"(exports, module) {
    var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
    var Prism2 = function(g4) {
      var c5 = /\blang(?:uage)?-([\w-]+)\b/i, a5 = 0, C2 = {
        manual: g4.Prism && g4.Prism.manual,
        disableWorkerMessageHandler: g4.Prism && g4.Prism.disableWorkerMessageHandler,
        util: {
          encode: function(e5) {
            return e5 instanceof M2 ? new M2(e5.type, C2.util.encode(e5.content), e5.alias) : Array.isArray(e5) ? e5.map(C2.util.encode) : e5.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          type: function(e5) {
            return Object.prototype.toString.call(e5).slice(8, -1);
          },
          objId: function(e5) {
            return e5.__id || Object.defineProperty(e5, "__id", { value: ++a5 }), e5.__id;
          },
          clone: function t6(e5, n6) {
            var r5, a6, i5 = C2.util.type(e5);
            switch (n6 = n6 || {}, i5) {
              case "Object":
                if (a6 = C2.util.objId(e5), n6[a6]) return n6[a6];
                for (var l5 in r5 = {}, n6[a6] = r5, e5)
                  e5.hasOwnProperty(l5) && (r5[l5] = t6(e5[l5], n6));
                return r5;
              case "Array":
                return a6 = C2.util.objId(e5), n6[a6] ? n6[a6] : (r5 = [], n6[a6] = r5, e5.forEach(function(e6, a7) {
                  r5[a7] = t6(e6, n6);
                }), r5);
              default:
                return e5;
            }
          }
        },
        languages: {
          extend: function(e5, a6) {
            var t6 = C2.util.clone(C2.languages[e5]);
            for (var n6 in a6) t6[n6] = a6[n6];
            return t6;
          },
          insertBefore: function(t6, e5, a6, n6) {
            var r5 = (n6 = n6 || C2.languages)[t6], i5 = {};
            for (var l5 in r5)
              if (r5.hasOwnProperty(l5)) {
                if (l5 == e5)
                  for (var o5 in a6) a6.hasOwnProperty(o5) && (i5[o5] = a6[o5]);
                a6.hasOwnProperty(l5) || (i5[l5] = r5[l5]);
              }
            var s5 = n6[t6];
            return n6[t6] = i5, C2.languages.DFS(C2.languages, function(e6, a7) {
              a7 === s5 && e6 != t6 && (this[e6] = i5);
            }), i5;
          },
          DFS: function e5(a6, t6, n6, r5) {
            r5 = r5 || {};
            var i5 = C2.util.objId;
            for (var l5 in a6)
              if (a6.hasOwnProperty(l5)) {
                t6.call(a6, l5, a6[l5], n6 || l5);
                var o5 = a6[l5], s5 = C2.util.type(o5);
                "Object" !== s5 || r5[i5(o5)] ? "Array" !== s5 || r5[i5(o5)] || (r5[i5(o5)] = true, e5(o5, t6, l5, r5)) : (r5[i5(o5)] = true, e5(o5, t6, null, r5));
              }
          }
        },
        plugins: {},
        highlightAll: function(e5, a6) {
          C2.highlightAllUnder(document, e5, a6);
        },
        highlightAllUnder: function(e5, a6, t6) {
          var n6 = {
            callback: t6,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          C2.hooks.run("before-highlightall", n6);
          for (var r5, i5 = n6.elements || e5.querySelectorAll(n6.selector), l5 = 0; r5 = i5[l5++]; )
            C2.highlightElement(r5, true === a6, n6.callback);
        },
        highlightElement: function(e5, a6, t6) {
          for (var n6, r5, i5 = e5; i5 && !c5.test(i5.className); ) i5 = i5.parentNode;
          i5 && (n6 = (i5.className.match(c5) || [, ""])[1].toLowerCase(), r5 = C2.languages[n6]), e5.className = e5.className.replace(c5, "").replace(/\s+/g, " ") + " language-" + n6, e5.parentNode && (i5 = e5.parentNode, /pre/i.test(i5.nodeName) && (i5.className = i5.className.replace(c5, "").replace(/\s+/g, " ") + " language-" + n6));
          var l5 = { element: e5, language: n6, grammar: r5, code: e5.textContent }, o5 = function(e6) {
            ;
            l5.highlightedCode = e6, C2.hooks.run("before-insert", l5), l5.element.innerHTML = l5.highlightedCode, C2.hooks.run("after-highlight", l5), C2.hooks.run("complete", l5), t6 && t6.call(l5.element);
          };
          if (C2.hooks.run("before-sanity-check", l5), l5.code)
            if (C2.hooks.run("before-highlight", l5), l5.grammar)
              if (a6 && g4.Worker) {
                var s5 = new Worker(C2.filename);
                s5.onmessage = function(e6) {
                  o5(e6.data);
                }, s5.postMessage(
                  JSON.stringify({
                    language: l5.language,
                    code: l5.code,
                    immediateClose: true
                  })
                );
              } else o5(C2.highlight(l5.code, l5.grammar, l5.language));
            else o5(C2.util.encode(l5.code));
          else C2.hooks.run("complete", l5);
        },
        highlight: function(e5, a6, t6) {
          var n6 = { code: e5, grammar: a6, language: t6 };
          return C2.hooks.run("before-tokenize", n6), n6.tokens = C2.tokenize(n6.code, n6.grammar), C2.hooks.run("after-tokenize", n6), M2.stringify(C2.util.encode(n6.tokens), n6.language);
        },
        matchGrammar: function(e5, a6, t6, n6, r5, i5, l5) {
          for (var o5 in t6)
            if (t6.hasOwnProperty(o5) && t6[o5]) {
              if (o5 == l5) return;
              var s5 = t6[o5];
              s5 = "Array" === C2.util.type(s5) ? s5 : [s5];
              for (var g5 = 0; g5 < s5.length; ++g5) {
                var c6 = s5[g5], u5 = c6.inside, h4 = !!c6.lookbehind, f4 = !!c6.greedy, d4 = 0, m4 = c6.alias;
                if (f4 && !c6.pattern.global) {
                  var p4 = c6.pattern.toString().match(/[imuy]*$/)[0];
                  c6.pattern = RegExp(c6.pattern.source, p4 + "g");
                }
                c6 = c6.pattern || c6;
                for (var y4 = n6, v4 = r5; y4 < a6.length; v4 += a6[y4].length, ++y4) {
                  var k3 = a6[y4];
                  if (a6.length > e5.length) return;
                  if (!(k3 instanceof M2)) {
                    if (f4 && y4 != a6.length - 1) {
                      if (c6.lastIndex = v4, !(x3 = c6.exec(e5))) break;
                      for (var b2 = x3.index + (h4 ? x3[1].length : 0), w4 = x3.index + x3[0].length, A3 = y4, P3 = v4, O2 = a6.length; A3 < O2 && (P3 < w4 || !a6[A3].type && !a6[A3 - 1].greedy); ++A3)
                        (P3 += a6[A3].length) <= b2 && (++y4, v4 = P3);
                      if (a6[y4] instanceof M2) continue;
                      N3 = A3 - y4, k3 = e5.slice(v4, P3), x3.index -= v4;
                    } else {
                      c6.lastIndex = 0;
                      var x3 = c6.exec(k3), N3 = 1;
                    }
                    if (x3) {
                      h4 && (d4 = x3[1] ? x3[1].length : 0);
                      w4 = (b2 = x3.index + d4) + (x3 = x3[0].slice(d4)).length;
                      var j2 = k3.slice(0, b2), S = k3.slice(w4), E3 = [y4, N3];
                      j2 && (++y4, v4 += j2.length, E3.push(j2));
                      var _5 = new M2(o5, u5 ? C2.tokenize(x3, u5) : x3, m4, x3, f4);
                      if (E3.push(_5), S && E3.push(S), Array.prototype.splice.apply(a6, E3), 1 != N3 && C2.matchGrammar(e5, a6, t6, y4, v4, true, o5), i5)
                        break;
                    } else if (i5) break;
                  }
                }
              }
            }
        },
        tokenize: function(e5, a6) {
          var t6 = [e5], n6 = a6.rest;
          if (n6) {
            for (var r5 in n6) a6[r5] = n6[r5];
            delete a6.rest;
          }
          return C2.matchGrammar(e5, t6, a6, 0, 0, false), t6;
        },
        hooks: {
          all: {},
          add: function(e5, a6) {
            var t6 = C2.hooks.all;
            t6[e5] = t6[e5] || [], t6[e5].push(a6);
          },
          run: function(e5, a6) {
            var t6 = C2.hooks.all[e5];
            if (t6 && t6.length) for (var n6, r5 = 0; n6 = t6[r5++]; ) n6(a6);
          }
        },
        Token: M2
      };
      function M2(e5, a6, t6, n6, r5) {
        ;
        this.type = e5, this.content = a6, this.alias = t6, this.length = 0 | (n6 || "").length, this.greedy = !!r5;
      }
      if (g4.Prism = C2, M2.stringify = function(a6, t6, e5) {
        if ("string" == typeof a6) return a6;
        if (Array.isArray(a6))
          return a6.map(function(e6) {
            return M2.stringify(e6, t6, a6);
          }).join("");
        var n6 = {
          type: a6.type,
          content: M2.stringify(a6.content, t6, e5),
          tag: "span",
          classes: ["token", a6.type],
          attributes: {},
          language: t6,
          parent: e5
        };
        if (a6.alias) {
          var r5 = Array.isArray(a6.alias) ? a6.alias : [a6.alias];
          Array.prototype.push.apply(n6.classes, r5);
        }
        C2.hooks.run("wrap", n6);
        var i5 = Object.keys(n6.attributes).map(function(e6) {
          return e6 + '="' + (n6.attributes[e6] || "").replace(/"/g, "&quot;") + '"';
        }).join(" ");
        return "<" + n6.tag + ' class="' + n6.classes.join(" ") + '"' + (i5 ? " " + i5 : "") + ">" + n6.content + "</" + n6.tag + ">";
      }, !g4.document)
        return g4.addEventListener && (C2.disableWorkerMessageHandler || g4.addEventListener(
          "message",
          function(e5) {
            var a6 = JSON.parse(e5.data), t6 = a6.language, n6 = a6.code, r5 = a6.immediateClose;
            g4.postMessage(C2.highlight(n6, C2.languages[t6], t6)), r5 && g4.close();
          },
          false
        )), C2;
      var e4 = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
      return e4 && (C2.filename = e4.src, C2.manual || e4.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(C2.highlightAll) : window.setTimeout(C2.highlightAll, 16) : document.addEventListener("DOMContentLoaded", C2.highlightAll))), C2;
    }(_self);
    "undefined" != typeof module && module.exports && (module.exports = Prism2), "undefined" != typeof global && (global.Prism = Prism2);
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
  options: () => n,
  render: () => H,
  toChildArray: () => x
});
function a(n6, l5) {
  for (var u5 in l5) n6[u5] = l5[u5];
  return n6;
}
function v(n6) {
  var l5 = n6.parentNode;
  l5 && l5.removeChild(n6);
}
function h(n6, l5, u5) {
  var i5, t6 = arguments, r5 = {};
  for (i5 in l5) "key" !== i5 && "ref" !== i5 && (r5[i5] = l5[i5]);
  if (arguments.length > 3)
    for (u5 = [u5], i5 = 3; i5 < arguments.length; i5++) u5.push(t6[i5]);
  if (null != u5 && (r5.children = u5), "function" == typeof n6 && null != n6.defaultProps)
    for (i5 in n6.defaultProps) void 0 === r5[i5] && (r5[i5] = n6.defaultProps[i5]);
  return p(n6, r5, l5 && l5.key, l5 && l5.ref, null);
}
function p(l5, u5, i5, t6, r5) {
  var o5 = {
    type: l5,
    props: u5,
    key: i5,
    ref: t6,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: r5
  };
  return null == r5 && (o5.__v = o5), n.vnode && n.vnode(o5), o5;
}
function y() {
  return {};
}
function d(n6) {
  return n6.children;
}
function m(n6, l5) {
  ;
  this.props = n6, this.context = l5;
}
function w(n6, l5) {
  if (null == l5) return n6.__ ? w(n6.__, n6.__.__k.indexOf(n6) + 1) : null;
  for (var u5; l5 < n6.__k.length; l5++)
    if (null != (u5 = n6.__k[l5]) && null != u5.__e) return u5.__e;
  return "function" == typeof n6.type ? w(n6) : null;
}
function k(n6) {
  var l5, u5;
  if (null != (n6 = n6.__) && null != n6.__c) {
    for (n6.__e = n6.__c.base = null, l5 = 0; l5 < n6.__k.length; l5++)
      if (null != (u5 = n6.__k[l5]) && null != u5.__e) {
        n6.__e = n6.__c.base = u5.__e;
        break;
      }
    return k(n6);
  }
}
function g(l5) {
  ;
  (!l5.__d && (l5.__d = true) && u.push(l5) && !i++ || r !== n.debounceRendering) && ((r = n.debounceRendering) || t)(_);
}
function _() {
  for (var n6; i = u.length; )
    n6 = u.sort(function(n7, l5) {
      return n7.__v.__b - l5.__v.__b;
    }), u = [], n6.some(function(n7) {
      var l5, u5, i5, t6, r5, o5, f4;
      n7.__d && (o5 = (r5 = (l5 = n7).__v).__e, (f4 = l5.__P) && (u5 = [], (i5 = a({}, r5)).__v = i5, t6 = A(
        f4,
        r5,
        i5,
        l5.__n,
        void 0 !== f4.ownerSVGElement,
        null,
        u5,
        null == o5 ? w(r5) : o5
      ), T(u5, r5), t6 != o5 && k(r5)));
    });
}
function b(n6, l5, u5, i5, t6, r5, o5, f4, s5) {
  var a5, h4, p4, y4, d4, m4, k3, g4 = u5 && u5.__k || c, _5 = g4.length;
  if (f4 == e && (f4 = null != r5 ? r5[0] : _5 ? w(u5, 0) : null), a5 = 0, l5.__k = x(l5.__k, function(u6) {
    if (null != u6) {
      if (u6.__ = l5, u6.__b = l5.__b + 1, null === (p4 = g4[a5]) || p4 && u6.key == p4.key && u6.type === p4.type)
        g4[a5] = void 0;
      else
        for (h4 = 0; h4 < _5; h4++) {
          if ((p4 = g4[h4]) && u6.key == p4.key && u6.type === p4.type) {
            g4[h4] = void 0;
            break;
          }
          p4 = null;
        }
      if (y4 = A(n6, u6, p4 = p4 || e, i5, t6, r5, o5, f4, s5), (h4 = u6.ref) && p4.ref != h4 && (k3 || (k3 = []), p4.ref && k3.push(p4.ref, null, u6), k3.push(h4, u6.__c || y4, u6)), null != y4) {
        var c5;
        if (null == m4 && (m4 = y4), void 0 !== u6.__d)
          c5 = u6.__d, u6.__d = void 0;
        else if (r5 == p4 || y4 != f4 || null == y4.parentNode) {
          n: if (null == f4 || f4.parentNode !== n6) n6.appendChild(y4), c5 = null;
          else {
            for (d4 = f4, h4 = 0; (d4 = d4.nextSibling) && h4 < _5; h4 += 2)
              if (d4 == y4) break n;
            n6.insertBefore(y4, f4), c5 = f4;
          }
          "option" == l5.type && (n6.value = "");
        }
        ;
        f4 = void 0 !== c5 ? c5 : y4.nextSibling, "function" == typeof l5.type && (l5.__d = f4);
      } else f4 && p4.__e == f4 && f4.parentNode != n6 && (f4 = w(p4));
    }
    return a5++, u6;
  }), l5.__e = m4, null != r5 && "function" != typeof l5.type)
    for (a5 = r5.length; a5--; ) null != r5[a5] && v(r5[a5]);
  for (a5 = _5; a5--; ) null != g4[a5] && D(g4[a5], g4[a5]);
  if (k3) for (a5 = 0; a5 < k3.length; a5++) j(k3[a5], k3[++a5], k3[++a5]);
}
function x(n6, l5, u5) {
  if (null == u5 && (u5 = []), null == n6 || "boolean" == typeof n6)
    l5 && u5.push(l5(null));
  else if (Array.isArray(n6)) for (var i5 = 0; i5 < n6.length; i5++) x(n6[i5], l5, u5);
  else
    u5.push(
      l5 ? l5(
        "string" == typeof n6 || "number" == typeof n6 ? p(null, n6, null, null, n6) : null != n6.__e || null != n6.__c ? p(n6.type, n6.props, n6.key, null, n6.__v) : n6
      ) : n6
    );
  return u5;
}
function P(n6, l5, u5, i5, t6) {
  var r5;
  for (r5 in u5)
    "children" === r5 || "key" === r5 || r5 in l5 || N(n6, r5, null, u5[r5], i5);
  for (r5 in l5)
    t6 && "function" != typeof l5[r5] || "children" === r5 || "key" === r5 || "value" === r5 || "checked" === r5 || u5[r5] === l5[r5] || N(n6, r5, l5[r5], u5[r5], i5);
}
function C(n6, l5, u5) {
  "-" === l5[0] ? n6.setProperty(l5, u5) : n6[l5] = "number" == typeof u5 && false === s.test(l5) ? u5 + "px" : null == u5 ? "" : u5;
}
function N(n6, l5, u5, i5, t6) {
  var r5, o5, f4, e4, c5;
  if (t6 ? "className" === l5 && (l5 = "class") : "class" === l5 && (l5 = "className"), "style" === l5)
    if (r5 = n6.style, "string" == typeof u5) r5.cssText = u5;
    else {
      if ("string" == typeof i5 && (r5.cssText = "", i5 = null), i5)
        for (e4 in i5) u5 && e4 in u5 || C(r5, e4, "");
      if (u5) for (c5 in u5) i5 && u5[c5] === i5[c5] || C(r5, c5, u5[c5]);
    }
  else
    "o" === l5[0] && "n" === l5[1] ? (o5 = l5 !== (l5 = l5.replace(/Capture$/, "")), f4 = l5.toLowerCase(), l5 = (f4 in n6 ? f4 : l5).slice(2), u5 ? (i5 || n6.addEventListener(l5, z, o5), (n6.l || (n6.l = {}))[l5] = u5) : n6.removeEventListener(l5, z, o5)) : "list" !== l5 && "tagName" !== l5 && "form" !== l5 && "type" !== l5 && "size" !== l5 && !t6 && l5 in n6 ? n6[l5] = null == u5 ? "" : u5 : "function" != typeof u5 && "dangerouslySetInnerHTML" !== l5 && (l5 !== (l5 = l5.replace(/^xlink:?/, "")) ? null == u5 || false === u5 ? n6.removeAttributeNS(
      "http://www.w3.org/1999/xlink",
      l5.toLowerCase()
    ) : n6.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      l5.toLowerCase(),
      u5
    ) : null == u5 || false === u5 && !/^ar/.test(l5) ? n6.removeAttribute(l5) : n6.setAttribute(l5, u5));
}
function z(l5) {
  this.l[l5.type](n.event ? n.event(l5) : l5);
}
function A(l5, u5, i5, t6, r5, o5, f4, e4, c5) {
  var s5, v4, h4, p4, y4, w4, k3, g4, _5, x3, P3 = u5.type;
  if (void 0 !== u5.constructor) return null;
  (s5 = n.__b) && s5(u5);
  try {
    n: if ("function" == typeof P3) {
      if (g4 = u5.props, _5 = (s5 = P3.contextType) && t6[s5.__c], x3 = s5 ? _5 ? _5.props.value : s5.__ : t6, i5.__c ? k3 = (v4 = u5.__c = i5.__c).__ = v4.__E : ("prototype" in P3 && P3.prototype.render ? u5.__c = v4 = new P3(g4, x3) : (u5.__c = v4 = new m(g4, x3), v4.constructor = P3, v4.render = E), _5 && _5.sub(v4), v4.props = g4, v4.state || (v4.state = {}), v4.context = x3, v4.__n = t6, h4 = v4.__d = true, v4.__h = []), null == v4.__s && (v4.__s = v4.state), null != P3.getDerivedStateFromProps && (v4.__s == v4.state && (v4.__s = a({}, v4.__s)), a(v4.__s, P3.getDerivedStateFromProps(g4, v4.__s))), p4 = v4.props, y4 = v4.state, h4)
        null == P3.getDerivedStateFromProps && null != v4.componentWillMount && v4.componentWillMount(), null != v4.componentDidMount && v4.__h.push(v4.componentDidMount);
      else {
        if (null == P3.getDerivedStateFromProps && g4 !== p4 && null != v4.componentWillReceiveProps && v4.componentWillReceiveProps(g4, x3), !v4.__e && null != v4.shouldComponentUpdate && false === v4.shouldComponentUpdate(g4, v4.__s, x3) || u5.__v === i5.__v && !v4.__) {
          for (v4.props = g4, v4.state = v4.__s, u5.__v !== i5.__v && (v4.__d = false), v4.__v = u5, u5.__e = i5.__e, u5.__k = i5.__k, v4.__h.length && f4.push(v4), s5 = 0; s5 < u5.__k.length; s5++)
            u5.__k[s5] && (u5.__k[s5].__ = u5);
          break n;
        }
        null != v4.componentWillUpdate && v4.componentWillUpdate(g4, v4.__s, x3), null != v4.componentDidUpdate && v4.__h.push(function() {
          v4.componentDidUpdate(p4, y4, w4);
        });
      }
      ;
      v4.context = x3, v4.props = g4, v4.state = v4.__s, (s5 = n.__r) && s5(u5), v4.__d = false, v4.__v = u5, v4.__P = l5, s5 = v4.render(v4.props, v4.state, v4.context), u5.__k = null != s5 && s5.type == d && null == s5.key ? s5.props.children : Array.isArray(s5) ? s5 : [s5], null != v4.getChildContext && (t6 = a(a({}, t6), v4.getChildContext())), h4 || null == v4.getSnapshotBeforeUpdate || (w4 = v4.getSnapshotBeforeUpdate(p4, y4)), b(l5, u5, i5, t6, r5, o5, f4, e4, c5), v4.base = u5.__e, v4.__h.length && f4.push(v4), k3 && (v4.__E = v4.__ = null), v4.__e = false;
    } else
      null == o5 && u5.__v === i5.__v ? (u5.__k = i5.__k, u5.__e = i5.__e) : u5.__e = $(i5.__e, u5, i5, t6, r5, o5, f4, c5);
    (s5 = n.diffed) && s5(u5);
  } catch (l6) {
    ;
    u5.__v = null, n.__e(l6, u5, i5);
  }
  return u5.__e;
}
function T(l5, u5) {
  n.__c && n.__c(u5, l5), l5.some(function(u6) {
    try {
      ;
      l5 = u6.__h, u6.__h = [], l5.some(function(n6) {
        n6.call(u6);
      });
    } catch (l6) {
      n.__e(l6, u6.__v);
    }
  });
}
function $(n6, l5, u5, i5, t6, r5, o5, f4) {
  var s5, a5, v4, h4, p4, y4 = u5.props, d4 = l5.props;
  if (t6 = "svg" === l5.type || t6, null != r5) {
    for (s5 = 0; s5 < r5.length; s5++)
      if (null != (a5 = r5[s5]) && ((null === l5.type ? 3 === a5.nodeType : a5.localName === l5.type) || n6 == a5)) {
        ;
        n6 = a5, r5[s5] = null;
        break;
      }
  }
  if (null == n6) {
    if (null === l5.type) return document.createTextNode(d4);
    n6 = t6 ? document.createElementNS("http://www.w3.org/2000/svg", l5.type) : document.createElement(l5.type, d4.is && { is: d4.is }), r5 = null, f4 = false;
  }
  if (null === l5.type) y4 !== d4 && n6.data != d4 && (n6.data = d4);
  else {
    if (null != r5 && (r5 = c.slice.call(n6.childNodes)), v4 = (y4 = u5.props || e).dangerouslySetInnerHTML, h4 = d4.dangerouslySetInnerHTML, !f4) {
      if (y4 === e)
        for (y4 = {}, p4 = 0; p4 < n6.attributes.length; p4++)
          y4[n6.attributes[p4].name] = n6.attributes[p4].value;
      (h4 || v4) && (h4 && v4 && h4.__html == v4.__html || (n6.innerHTML = h4 && h4.__html || ""));
    }
    P(n6, d4, y4, t6, f4), h4 ? l5.__k = [] : (l5.__k = l5.props.children, b(n6, l5, u5, i5, "foreignObject" !== l5.type && t6, r5, o5, e, f4)), f4 || ("value" in d4 && void 0 !== (s5 = d4.value) && s5 !== n6.value && N(n6, "value", s5, y4.value, false), "checked" in d4 && void 0 !== (s5 = d4.checked) && s5 !== n6.checked && N(n6, "checked", s5, y4.checked, false));
  }
  return n6;
}
function j(l5, u5, i5) {
  try {
    "function" == typeof l5 ? l5(u5) : l5.current = u5;
  } catch (l6) {
    n.__e(l6, i5);
  }
}
function D(l5, u5, i5) {
  var t6, r5, o5;
  if (n.unmount && n.unmount(l5), (t6 = l5.ref) && (t6.current && t6.current !== l5.__e || j(t6, null, u5)), i5 || "function" == typeof l5.type || (i5 = null != (r5 = l5.__e)), l5.__e = l5.__d = void 0, null != (t6 = l5.__c)) {
    if (t6.componentWillUnmount)
      try {
        t6.componentWillUnmount();
      } catch (l6) {
        n.__e(l6, u5);
      }
    t6.base = t6.__P = null;
  }
  if (t6 = l5.__k) for (o5 = 0; o5 < t6.length; o5++) t6[o5] && D(t6[o5], u5, i5);
  null != r5 && v(r5);
}
function E(n6, l5, u5) {
  return this.constructor(n6, u5);
}
function H(l5, u5, i5) {
  var t6, r5, f4;
  n.__ && n.__(l5, u5), r5 = (t6 = i5 === o) ? null : i5 && i5.__k || u5.__k, l5 = h(d, null, [l5]), f4 = [], A(
    u5,
    (t6 ? u5 : i5 || u5).__k = l5,
    r5 || e,
    e,
    void 0 !== u5.ownerSVGElement,
    i5 && !t6 ? [i5] : r5 ? null : c.slice.call(u5.childNodes),
    f4,
    i5 || e,
    t6
  ), T(f4, l5);
}
function I(n6, l5) {
  H(n6, l5, o);
}
function L(n6, l5) {
  var u5, i5;
  for (i5 in l5 = a(a({}, n6.props), l5), arguments.length > 2 && (l5.children = c.slice.call(arguments, 2)), u5 = {}, l5)
    "key" !== i5 && "ref" !== i5 && (u5[i5] = l5[i5]);
  return p(n6.type, u5, l5.key || n6.key, l5.ref || n6.ref, null);
}
function M(n6) {
  var l5 = {}, u5 = {
    __c: "__cC" + f++,
    __: n6,
    Consumer: function(n7, l6) {
      return n7.children(l6);
    },
    Provider: function(n7) {
      var i5, t6 = this;
      return this.getChildContext || (i5 = [], this.getChildContext = function() {
        return l5[u5.__c] = t6, l5;
      }, this.shouldComponentUpdate = function(n8) {
        t6.props.value !== n8.value && i5.some(function(l6) {
          ;
          l6.context = n8.value, g(l6);
        });
      }, this.sub = function(n8) {
        i5.push(n8);
        var l6 = n8.componentWillUnmount;
        n8.componentWillUnmount = function() {
          i5.splice(i5.indexOf(n8), 1), l6 && l6.call(n8);
        };
      }), n7.children;
    }
  };
  return u5.Consumer.contextType = u5, u5.Provider.__ = u5, u5;
}
var n, l, u, i, t, r, o, f, e, c, s;
var init_preact = __esm({
  "library/preact.js"() {
    e = {};
    c = [];
    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    n = {
      __e: function(n6, l5) {
        for (var u5, i5; l5 = l5.__; )
          if ((u5 = l5.__c) && !u5.__)
            try {
              if (u5.constructor && null != u5.constructor.getDerivedStateFromError && (i5 = true, u5.setState(u5.constructor.getDerivedStateFromError(n6))), null != u5.componentDidCatch && (i5 = true, u5.componentDidCatch(n6)), i5)
                return g(u5.__E = u5);
            } catch (l6) {
              n6 = l6;
            }
        throw n6;
      }
    }, l = function(n6) {
      return null != n6 && void 0 === n6.constructor;
    }, m.prototype.setState = function(n6, l5) {
      var u5;
      u5 = this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n6 && (n6 = n6(u5, this.props)), n6 && a(u5, n6), null != n6 && this.__v && (l5 && this.__h.push(l5), g(this));
    }, m.prototype.forceUpdate = function(n6) {
      this.__v && (this.__e = true, n6 && this.__h.push(n6), g(this));
    }, m.prototype.render = d, u = [], i = 0, t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = e, f = 0;
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
  useImperativeHandle: () => s2,
  useLayoutEffect: () => y2,
  useMemo: () => h2,
  useReducer: () => p2,
  useRef: () => d2,
  useState: () => m2
});
function v2(t6, r5) {
  n.__h && n.__h(u2, t6, i2 || r5), i2 = 0;
  var o5 = u2.__H || (u2.__H = { __: [], __h: [] });
  return t6 >= o5.__.length && o5.__.push({}), o5.__[t6];
}
function m2(n6) {
  return i2 = 1, p2(E2, n6);
}
function p2(n6, r5, i5) {
  var o5 = v2(t2++, 2);
  return o5.__c || (o5.__c = u2, o5.__ = [
    i5 ? i5(r5) : E2(void 0, r5),
    function(t6) {
      var u5 = n6(o5.__[0], t6);
      o5.__[0] !== u5 && (o5.__[0] = u5, o5.__c.setState({}));
    }
  ]), o5.__;
}
function l2(r5, i5) {
  var o5 = v2(t2++, 3);
  !n.__s && x2(o5.__H, i5) && (o5.__ = r5, o5.__H = i5, u2.__H.__h.push(o5));
}
function y2(r5, i5) {
  var o5 = v2(t2++, 4);
  !n.__s && x2(o5.__H, i5) && (o5.__ = r5, o5.__H = i5, u2.__h.push(o5));
}
function d2(n6) {
  return i2 = 5, h2(function() {
    return { current: n6 };
  }, []);
}
function s2(n6, t6, u5) {
  ;
  i2 = 6, y2(
    function() {
      "function" == typeof n6 ? n6(t6()) : n6 && (n6.current = t6());
    },
    null == u5 ? u5 : u5.concat(n6)
  );
}
function h2(n6, u5) {
  var r5 = v2(t2++, 7);
  return x2(r5.__H, u5) ? (r5.__H = u5, r5.__h = n6, r5.__ = n6()) : r5.__;
}
function T2(n6, t6) {
  return i2 = 8, h2(function() {
    return n6;
  }, t6);
}
function w2(n6) {
  var r5 = u2.context[n6.__c], i5 = v2(t2++, 9);
  return i5.__c = n6, r5 ? (null == i5.__ && (i5.__ = true, r5.sub(u2)), r5.props.value) : n6.__;
}
function A2(t6, u5) {
  n.useDebugValue && n.useDebugValue(u5 ? u5(t6) : t6);
}
function F(n6) {
  var r5 = v2(t2++, 10), i5 = m2();
  return r5.__ = n6, u2.componentDidCatch || (u2.componentDidCatch = function(n7) {
    r5.__ && r5.__(n7), i5[1](n7);
  }), [
    i5[0],
    function() {
      i5[1](void 0);
    }
  ];
}
function _2() {
  o2.some(function(t6) {
    if (t6.__P)
      try {
        t6.__H.__h.forEach(g2), t6.__H.__h.forEach(q), t6.__H.__h = [];
      } catch (u5) {
        return t6.__H.__h = [], n.__e(u5, t6.__v), true;
      }
  }), o2 = [];
}
function g2(n6) {
  n6.t && n6.t();
}
function q(n6) {
  var t6 = n6.__();
  "function" == typeof t6 && (n6.t = t6);
}
function x2(n6, t6) {
  return !n6 || t6.some(function(t7, u5) {
    return t7 !== n6[u5];
  });
}
function E2(n6, t6) {
  return "function" == typeof t6 ? t6(n6) : t6;
}
var t2, u2, r2, i2, o2, c2, f2, e2, a2;
var init_hooks = __esm({
  "library/hooks.js"() {
    init_preact();
    i2 = 0;
    o2 = [];
    c2 = n.__r;
    f2 = n.diffed;
    e2 = n.__c;
    a2 = n.unmount;
    n.__r = function(n6) {
      c2 && c2(n6), t2 = 0, (u2 = n6.__c).__H && (u2.__H.__h.forEach(g2), u2.__H.__h.forEach(q), u2.__H.__h = []);
    }, n.diffed = function(t6) {
      f2 && f2(t6);
      var u5 = t6.__c;
      if (u5) {
        var i5 = u5.__H;
        i5 && i5.__h.length && (1 !== o2.push(u5) && r2 === n.requestAnimationFrame || ((r2 = n.requestAnimationFrame) || function(n6) {
          var t7, u6 = function() {
            clearTimeout(r5), cancelAnimationFrame(t7), setTimeout(n6);
          }, r5 = setTimeout(u6, 100);
          "undefined" != typeof window && (t7 = requestAnimationFrame(u6));
        })(_2));
      }
    }, n.__c = function(t6, u5) {
      u5.some(function(t7) {
        try {
          t7.__h.forEach(g2), t7.__h = t7.__h.filter(function(n6) {
            return !n6.__ || q(n6);
          });
        } catch (r5) {
          u5.some(function(n6) {
            n6.__h && (n6.__h = []);
          }), u5 = [], n.__e(r5, t7.__v);
        }
      }), e2 && e2(t6, u5);
    }, n.unmount = function(t6) {
      a2 && a2(t6);
      var u5 = t6.__c;
      if (u5) {
        var r5 = u5.__H;
        if (r5)
          try {
            r5.__.forEach(function(n6) {
              return n6.t && n6.t();
            });
          } catch (t7) {
            n.__e(t7, u5.__v);
          }
      }
    };
  }
});

// library/goober.js
function s3(r5) {
  var e4 = this || {}, n6 = r5.call ? r5(e4.p) : r5;
  return i3(
    n6.map ? u3(n6, [].slice.call(arguments, 1), e4.p) : n6,
    t3(e4.target),
    e4.g,
    e4.o
  );
}
var r3, t3, n2, a3, o3, c3, i3, u3, l3;
var init_goober = __esm({
  "library/goober.js"() {
    r3 = { data: "" };
    t3 = function(t6) {
      try {
        var e4 = t6 ? t6.querySelector("#_goober") : self._goober;
        return e4 || ((e4 = (t6 || document.head).appendChild(
          document.createElement("style")
        )).innerHTML = " ", e4.id = "_goober"), e4.firstChild;
      } catch (r5) {
      }
      return r3;
    };
    n2 = /(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi;
    a3 = /\/\*.*?\*\/|\s{2,}|\n/gm;
    o3 = function(r5, t6, e4) {
      var n6 = "", a5 = "", c5 = "";
      for (var i5 in r5) {
        var u5 = r5[i5];
        if ("object" == typeof u5) {
          var s5 = t6 + " " + i5;
          /&/g.test(i5) && (s5 = i5.replace(/&/g, t6)), "@" == i5[0] && (s5 = t6, "f" == i5[1] && (s5 = i5)), /@k/.test(i5) ? a5 += i5 + "{" + o3(u5, "", "") + "}" : a5 += o3(u5, s5, s5 == t6 ? i5 : e4 || "");
        } else
          /^@i/.test(i5) ? c5 = i5 + " " + u5 + ";" : n6 += i5.replace(/[A-Z]/g, "-$&").toLowerCase() + ":" + u5 + ";";
      }
      if (n6.charCodeAt(0)) {
        var f4 = t6 + "{" + n6 + "}";
        return e4 ? a5 + e4 + "{" + f4 + "}" : c5 + f4 + a5;
      }
      return c5 + a5;
    };
    c3 = {};
    i3 = function(r5, t6, e4, i5) {
      var u5 = JSON.stringify(r5), s5 = c3[u5] || (c3[u5] = ".go" + u5.split("").reduce(function(r6, t7) {
        return 101 * r6 + t7.charCodeAt(0) >>> 0;
      }, 11));
      return function(r6, t7, e5) {
        t7.data.indexOf(r6) < 0 && (t7.data = e5 ? r6 + t7.data : t7.data + r6);
      }(
        c3[s5] || (c3[s5] = o3(
          r5[0] ? function(r6) {
            for (var t7, e5 = [{}]; t7 = n2.exec(r6.replace(a3, "")); )
              t7[4] && e5.shift(), t7[3] ? e5.unshift(e5[0][t7[3]] = e5[0][t7[3]] || {}) : t7[4] || (e5[0][t7[1]] = t7[2]);
            return e5[0];
          }(r5) : r5,
          e4 ? "" : s5
        )),
        t6,
        i5
      ), s5.slice(1);
    };
    u3 = function(r5, t6, e4) {
      return r5.reduce(function(r6, n6, a5) {
        var o5 = t6[a5];
        if (o5 && o5.call) {
          var c5 = o5(e4), i5 = c5 && c5.props && c5.props.className || /^go/.test(c5) && c5;
          o5 = i5 ? "." + i5 : c5 && c5.props ? "" : c5;
        }
        return r6 + n6 + (null == o5 ? "" : o5);
      }, "");
    };
    l3 = s3.bind({ g: 1 });
  }
});

// library/htm.js
function htm_default(s5) {
  var r5 = t4.get(this);
  return r5 || (r5 = /* @__PURE__ */ new Map(), t4.set(this, r5)), (r5 = n3(
    this,
    r5.get(s5) || (r5.set(
      s5,
      r5 = function(n6) {
        for (var t6, s6, r6 = 1, e4 = "", u5 = "", h4 = [0], p4 = function(n7) {
          1 === r6 && (n7 || (e4 = e4.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h4.push(0, n7, e4) : 3 === r6 && (n7 || e4) ? (h4.push(3, n7, e4), r6 = 2) : 2 === r6 && "..." === e4 && n7 ? h4.push(4, n7, 0) : 2 === r6 && e4 && !n7 ? h4.push(5, 0, true, e4) : r6 >= 5 && ((e4 || !n7 && 5 === r6) && (h4.push(r6, 0, e4, s6), r6 = 6), n7 && (h4.push(r6, n7, 0, s6), r6 = 6)), e4 = "";
        }, a5 = 0; a5 < n6.length; a5++) {
          a5 && (1 === r6 && p4(), p4(a5));
          for (var l5 = 0; l5 < n6[a5].length; l5++)
            t6 = n6[a5][l5], 1 === r6 ? "<" === t6 ? (p4(), h4 = [h4], r6 = 3) : e4 += t6 : 4 === r6 ? "--" === e4 && ">" === t6 ? (r6 = 1, e4 = "") : e4 = t6 + e4[0] : u5 ? t6 === u5 ? u5 = "" : e4 += t6 : '"' === t6 || "'" === t6 ? u5 = t6 : ">" === t6 ? (p4(), r6 = 1) : r6 && ("=" === t6 ? (r6 = 5, s6 = e4, e4 = "") : "/" === t6 && (r6 < 5 || ">" === n6[a5][l5 + 1]) ? (p4(), 3 === r6 && (h4 = h4[0]), r6 = h4, (h4 = h4[0]).push(2, 0, r6), r6 = 0) : " " === t6 || "	" === t6 || "\n" === t6 || "\r" === t6 ? (p4(), r6 = 2) : e4 += t6), 3 === r6 && "!--" === e4 && (r6 = 4, h4 = h4[0]);
        }
        return p4(), h4;
      }(s5)
    ), r5),
    arguments,
    []
  )).length > 1 ? r5 : r5[0];
}
var n3, t4;
var init_htm = __esm({
  "library/htm.js"() {
    n3 = function(t6, s5, r5, e4) {
      var u5;
      s5[0] = 0;
      for (var h4 = 1; h4 < s5.length; h4++) {
        var p4 = s5[h4++], a5 = s5[h4] ? (s5[0] |= p4 ? 1 : 2, r5[s5[h4++]]) : s5[++h4];
        3 === p4 ? e4[0] = a5 : 4 === p4 ? e4[1] = Object.assign(e4[1] || {}, a5) : 5 === p4 ? (e4[1] = e4[1] || {})[s5[++h4]] = a5 : 6 === p4 ? e4[1][s5[++h4]] += a5 + "" : p4 ? (u5 = t6.apply(a5, n3(t6, a5, r5, ["", null])), e4.push(u5), a5[0] ? s5[0] |= 2 : (s5[h4 - 2] = 0, s5[h4] = u5)) : e4.push(a5);
      }
      return e4;
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
      await pReduce(tasks, async (_5, task) => {
        const value = await task();
        results.push(value);
      });
      return results;
    };
    average = (arr) => {
      var sums = {}, counts = {}, values = {}, results = [], ids = {}, name;
      for (var i5 = 0; i5 < arr.length; i5++) {
        name = arr[i5].code;
        if (!(name in sums)) {
          sums[name] = 0;
          counts[name] = 0;
          ids[name] = arr[i5].name;
        }
        values[name] = (values[name] || []).concat(arr[i5].ops);
        sums[name] += arr[i5].ops;
        counts[name]++;
      }
      for (name in sums) {
        results.push({
          name: ids[name],
          code: name,
          runs: values[name],
          ops: sums[name] < 0 ? -1 : sums[name] / counts[name] << 0
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
    extractValidSuites = (o5) => Object.entries(o5).reduce((a5, [k3, v4]) => {
      let suite2 = {};
      try {
        suite2 = JSON.parse(v4);
      } catch (e4) {
      }
      return suite2.before && suite2.tests ? [...a5, [k3, suite2]] : a5;
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
    updateProgress = (state2) => ({
      progress: state2.progress + state2.tests.length
    });
    insertItemAtIndex = (arr, index, item) => [
      ...arr.slice(0, index),
      item,
      ...arr.slice(index)
    ];
    updateTestCaseName = (id2, name) => (state2) => ({
      tests: state2.tests.map((t6, i5) => i5 === id2 ? { ...t6, name } : t6)
    });
    updateTestCaseCode = (id2, code) => (state2) => ({
      tests: state2.tests.map((t6, i5) => i5 === id2 ? { ...t6, code } : t6)
    });
    removeTestCase = (id2) => (state2) => ({
      tests: state2.tests.filter((_5, i5) => i5 !== id2)
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
      const x3 = JSON.stringify(state2);
      const link = `${location.origin}#${encodeURIComponent(btoa(x3))}`;
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
      } catch (e4) {
        console.log(e4);
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
      } catch (e4) {
        console.log(e4);
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
function n4(e4, t6) {
  if (!e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !t6 || "object" != typeof t6 && "function" != typeof t6 ? e4 : t6;
}
var e3, t5, i4, r4, o4, a4, s4, l4, c4, h3, u4, p3, d3, f3, y3, g3, _3, v3, m3, editor_default;
var init_editor = __esm({
  "components/editor.js"() {
    init_utils();
    e3 = Object.assign;
    t5 = /* @__PURE__ */ function() {
      function e4(e5, t6) {
        for (var n6 = 0; n6 < t6.length; n6++) {
          var i5 = t6[n6];
          i5.enumerable = i5.enumerable || false, i5.configurable = true, "value" in i5 && (i5.writable = true), Object.defineProperty(e5, i5.key, i5);
        }
      }
      return function(t6, n6, i5) {
        return n6 && e4(t6.prototype, n6), i5 && e4(t6, i5), t6;
      };
    }();
    i4 = 13;
    r4 = 9;
    o4 = 8;
    a4 = 89;
    s4 = 90;
    l4 = 77;
    c4 = 57;
    h3 = 219;
    u4 = 222;
    p3 = 192;
    d3 = 100;
    f3 = 3e3;
    y3 = "navigator" in window && /Win/i.test(navigator.platform);
    g3 = "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    _3 = "npm__react-simple-code-editor__textarea";
    v3 = function(v4) {
      function b2() {
        var t6, _5, v5;
        !function(e4, t7) {
          if (!(e4 instanceof t7)) throw new TypeError("Cannot call a class as a function");
        }(this, b2);
        for (var m4 = arguments.length, k3 = Array(m4), S = 0; S < m4; S++) k3[S] = arguments[S];
        return _5 = v5 = n4(this, (t6 = b2.__proto__ || Object.getPrototypeOf(b2)).call.apply(t6, [this].concat(k3))), v5.state = { capture: true }, v5._recordCurrentState = function() {
          var e4 = v5._input;
          if (e4) {
            var t7 = e4.value, n6 = e4.selectionStart, i5 = e4.selectionEnd;
            v5._recordChange({ value: t7, selectionStart: n6, selectionEnd: i5 });
          }
        }, v5._getLines = function(e4, t7) {
          return e4.substring(0, t7).split("\n");
        }, v5._recordChange = function(t7) {
          var n6 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i5 = v5._history, r5 = i5.stack, o5 = i5.offset;
          if (r5.length && o5 > -1) {
            v5._history.stack = r5.slice(0, o5 + 1);
            var a5 = v5._history.stack.length;
            if (a5 > d3) {
              var s5 = a5 - d3;
              v5._history.stack = r5.slice(s5, a5), v5._history.offset = Math.max(v5._history.offset - s5, 0);
            }
          }
          var l5 = Date.now();
          if (n6) {
            var c5 = v5._history.stack[v5._history.offset];
            if (c5 && l5 - c5.timestamp < f3) {
              var h4 = /[^a-z0-9]([a-z0-9]+)$/i, u5 = v5._getLines(c5.value, c5.selectionStart).pop().match(h4), p4 = v5._getLines(t7.value, t7.selectionStart).pop().match(h4);
              if (u5 && p4 && p4[1].startsWith(u5[1])) return void (v5._history.stack[v5._history.offset] = e3({}, t7, { timestamp: l5 }));
            }
          }
          v5._history.stack.push(e3({}, t7, { timestamp: l5 })), v5._history.offset++;
        }, v5._updateInput = function(e4) {
          var t7 = v5._input;
          t7 && (t7.value = e4.value, t7.selectionStart = e4.selectionStart, t7.selectionEnd = e4.selectionEnd, v5.props.onValueChange(e4.value));
        }, v5._applyEdits = function(t7) {
          var n6 = v5._input, i5 = v5._history.stack[v5._history.offset];
          i5 && n6 && (v5._history.stack[v5._history.offset] = e3({}, i5, { selectionStart: n6.selectionStart, selectionEnd: n6.selectionEnd })), v5._recordChange(t7), v5._updateInput(t7);
        }, v5._undoEdit = function() {
          var e4 = v5._history, t7 = e4.stack, n6 = e4.offset, i5 = t7[n6 - 1];
          i5 && (v5._updateInput(i5), v5._history.offset = Math.max(n6 - 1, 0));
        }, v5._redoEdit = function() {
          var e4 = v5._history, t7 = e4.stack, n6 = e4.offset, i5 = t7[n6 + 1];
          i5 && (v5._updateInput(i5), v5._history.offset = Math.min(n6 + 1, t7.length - 1));
        }, v5._handleKeyDown = function(e4) {
          var t7 = v5.props, n6 = t7.tabSize, d4 = t7.insertSpaces, f4 = t7.ignoreTabKey, _6 = t7.onKeyDown;
          if (!_6 || (_6(e4), !e4.defaultPrevented)) {
            var m5 = e4.target, b3 = m5.value, k4 = m5.selectionStart, S2 = m5.selectionEnd, C2 = (d4 ? " " : "     ").repeat(n6);
            if (e4.keyCode === r4 && !f4 && v5.state.capture) if (e4.preventDefault(), e4.shiftKey) {
              var E3 = v5._getLines(b3, k4), w4 = E3.length - 1, x3 = v5._getLines(b3, S2).length - 1, K = b3.split("\n").map(function(e5, t8) {
                return t8 >= w4 && t8 <= x3 && e5.startsWith(C2) ? e5.substring(C2.length) : e5;
              }).join("\n");
              if (b3 !== K) {
                var L3 = E3[w4];
                v5._applyEdits({ value: K, selectionStart: L3.startsWith(C2) ? k4 - C2.length : k4, selectionEnd: S2 - (b3.length - K.length) });
              }
            } else if (k4 !== S2) {
              var O2 = v5._getLines(b3, k4), D3 = O2.length - 1, I2 = v5._getLines(b3, S2).length - 1, z3 = O2[D3];
              v5._applyEdits({ value: b3.split("\n").map(function(e5, t8) {
                return t8 >= D3 && t8 <= I2 ? C2 + e5 : e5;
              }).join("\n"), selectionStart: /\S/.test(z3) ? k4 + C2.length : k4, selectionEnd: S2 + C2.length * (I2 - D3 + 1) });
            } else {
              var j2 = k4 + C2.length;
              v5._applyEdits({ value: b3.substring(0, k4) + C2 + b3.substring(S2), selectionStart: j2, selectionEnd: j2 });
            }
            else if (e4.keyCode === o4) {
              var P3 = k4 !== S2;
              if (b3.substring(0, k4).endsWith(C2) && !P3) {
                e4.preventDefault();
                var T3 = k4 - C2.length;
                v5._applyEdits({ value: b3.substring(0, k4 - C2.length) + b3.substring(S2), selectionStart: T3, selectionEnd: T3 });
              }
            } else if (e4.keyCode === i4) {
              if (k4 === S2) {
                var F3 = v5._getLines(b3, k4).pop().match(/^\s+/);
                if (F3 && F3[0]) {
                  e4.preventDefault();
                  var R = "\n" + F3[0], W = k4 + R.length;
                  v5._applyEdits({ value: b3.substring(0, k4) + R + b3.substring(S2), selectionStart: W, selectionEnd: W });
                }
              }
            } else if (e4.keyCode === c4 || e4.keyCode === h3 || e4.keyCode === u4 || e4.keyCode === p3) {
              var M2 = void 0;
              e4.keyCode === c4 && e4.shiftKey ? M2 = ["(", ")"] : e4.keyCode === h3 ? M2 = e4.shiftKey ? ["{", "}"] : ["[", "]"] : e4.keyCode === u4 ? M2 = e4.shiftKey ? ['"', '"'] : ["'", "'"] : e4.keyCode !== p3 || e4.shiftKey || (M2 = ["`", "`"]), k4 !== S2 && M2 && (e4.preventDefault(), v5._applyEdits({ value: b3.substring(0, k4) + M2[0] + b3.substring(k4, S2) + M2[1] + b3.substring(S2), selectionStart: k4, selectionEnd: S2 + 2 }));
            } else (g3 ? e4.metaKey && e4.keyCode === s4 : e4.ctrlKey && e4.keyCode === s4) && !e4.shiftKey && !e4.altKey ? (e4.preventDefault(), v5._undoEdit()) : (g3 ? e4.metaKey && e4.keyCode === s4 && e4.shiftKey : y3 ? e4.ctrlKey && e4.keyCode === a4 : e4.ctrlKey && e4.keyCode === s4 && e4.shiftKey) && !e4.altKey ? (e4.preventDefault(), v5._redoEdit()) : e4.keyCode !== l4 || !e4.ctrlKey || g3 && !e4.shiftKey || (e4.preventDefault(), v5.setState(function(e5) {
              return { capture: !e5.capture };
            }));
          }
        }, v5._handleChange = function(e4) {
          var t7 = e4.target, n6 = t7.value, i5 = t7.selectionStart, r5 = t7.selectionEnd;
          v5._recordChange({ value: n6, selectionStart: i5, selectionEnd: r5 }, true), v5.props.onValueChange(n6);
        }, v5._history = { stack: [], offset: -1 }, n4(v5, _5);
      }
      return function(e4, t6) {
        if ("function" != typeof t6 && null !== t6) throw new TypeError("Super expression must either be null or a function, not " + typeof t6);
        e4.prototype = Object.create(t6 && t6.prototype, { constructor: { value: e4, enumerable: false, writable: true, configurable: true } }), t6 && (Object.setPrototypeOf ? Object.setPrototypeOf(e4, t6) : e4.__proto__ = t6);
      }(b2, preact.Component), t5(b2, [{ key: "componentDidMount", value: function() {
        this._recordCurrentState();
      } }, { key: "render", value: function() {
        var t6 = this, n6 = this.props, i5 = n6.value, r5 = n6.style, o5 = n6.padding, a5 = n6.highlight, s5 = n6.textareaId, l5 = n6.autoFocus, c5 = n6.disabled, h4 = n6.form, u5 = n6.maxLength, p4 = n6.minLength, d4 = n6.name, f4 = n6.placeholder, y4 = n6.readOnly, g4 = n6.required, v5 = n6.onClick, b3 = n6.onFocus, k3 = n6.onBlur, S = n6.onKeyUp, C2 = (n6.onKeyDown, n6.onValueChange, n6.tabSize, n6.insertSpaces, n6.ignoreTabKey, function(e4, t7) {
          var n7 = {};
          for (var i6 in e4) t7.indexOf(i6) >= 0 || Object.prototype.hasOwnProperty.call(e4, i6) && (n7[i6] = e4[i6]);
          return n7;
        }(n6, ["value", "style", "padding", "highlight", "textareaId", "autoFocus", "disabled", "form", "maxLength", "minLength", "name", "placeholder", "readOnly", "required", "onClick", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onValueChange", "tabSize", "insertSpaces", "ignoreTabKey"])), E3 = { paddingTop: o5, paddingRight: o5, paddingBottom: o5, paddingLeft: o5 }, w4 = a5(i5);
        return preact.createElement("div", e3({}, C2, { style: e3({}, m3.container, r5) }), preact.createElement("textarea", { ref: function(e4) {
          return t6._input = e4;
        }, style: e3({}, m3.editor, m3.textarea, E3), className: _3, id: s5, value: i5, onInput: this._handleChange, onKeyDown: this._handleKeyDown, onClick: v5, onKeyUp: S, onFocus: b3, onBlur: k3, disabled: c5, form: h4, maxLength: u5, minLength: p4, name: d4, placeholder: f4, readOnly: y4, required: g4, autoFocus: l5, autoCapitalize: "off", autoComplete: "off", autoCorrect: "off", spellCheck: false, "data-gramm": false }), preact.createElement("pre", e3({ "aria-hidden": "true", style: e3({}, m3.editor, m3.highlight, E3) }, "string" == typeof w4 ? { dangerouslySetInnerHTML: { __html: w4 + "<br />" } } : { children: w4 })), preact.createElement("style", { type: "text/css", dangerouslySetInnerHTML: { __html: "\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.npm__react-simple-code-editor__textarea:empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .npm__react-simple-code-editor__textarea {\n    color: transparent !important;\n  }\n\n  .npm__react-simple-code-editor__textarea::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n" } }));
      } }, { key: "session", get: function() {
        return { history: this._history };
      }, set: function(e4) {
        this._history = e4.history;
      } }]), b2;
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
            <input disabled=${started2} className=${style.nameInput} onInput=${(e4) => dispatch2(updateTestCaseName(id2, e4.target.value))} value=${`${test.name}`} />
            <p>${test.ops !== -2 && (test.ops === -1 ? "Failed" : test.ops === 0 ? `Testing ${progressPercent}%` : `${Number(test.ops).toLocaleString("en")} ops/s`)}</p>
            <button disabled=${started2} className=${style.button} onClick=${(e4) => dispatch2(copyTestCase(id2))}>
                <${CopyIcon} />
            </button>
            <button disabled=${started2} className=${style.button} onClick=${(e4) => dispatch2(removeTestCase(id2))}>
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
            <${editor_default} value=${scaleMessagePrefix("1") + (dimension1Code2 || "[]") + scaleMessagePostfix("1")} onValueChange=${(dimension1Code3) => dispatch2({ dimension1Code: dimension1Code3.slice(scaleMessagePrefix("1").length, -scaleMessagePostfix("1").length) })} highlight=${highlightCode} padding=${20} style=${style.editor} />
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
        const t6 = exists ? uid() : title2 || uid();
        const key = exists ? uid() : id2;
        const data = { title: t6, before: before2, tests: tests2, updated: /* @__PURE__ */ new Date() };
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
      add: s3`
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
      start: s3`
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
      save: s3`
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
      button: s3`
        padding: 0;
        border: 0;
        > svg {
            fill: rgba(255, 255, 255, 0.62);
        }
        &:disabled {
            opacity: 0.5;
        }
    `,
      spinner: s3`
        width: 1rem;
        opacity: 0.5;
    `,
      nameInput: s3`
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
      id: s3`
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
      cmds: s3`
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
      list: s3`
        > * + * {
            margin-top: 1rem;
        }
    `,
      test: s3`
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        background-color: #2a2b2f;
        overflow: hidden;
        color: #fff;
    `,
      testHeader: s3`
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
      testToolbar: s3`
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
          onClick=${(e4) => e4.target.tagName === "DIALOG" && dispatch2({ aside: "results" })}
        >
          <div>
            <div className=${style2.searchInput}>
              <input
                onInput=${(e4) => dispatch2(setSearchTerm(e4.target.value))}
                placeholder="Search the archive..."
                value=${searchTerm}
              />
              <${SearchIcon} />
            </div>
            <ul className=${style2.list}>
              ${suites2.filter(
        (x3) => x3[1].title.toLowerCase().match(searchTerm.toLowerCase())
      ).sort(
        ([k3, v4], [k1, v1]) => +new Date(v4.updated) < +new Date(v1.updated) ? 0 : -1
      ).map(suite(dispatch2))}
            </ul>
          </div>
        </dialog>
      `;
    };
    style2 = {
      container: s3`
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
      list: s3`
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
      item: s3`
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
      searchInput: s3`
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
      showArchiveButton: s3`
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
    Bar = (tests2) => (test, i5) => {
      const max = Math.max(...tests2.map((x3) => x3.ops));
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
      <p className=${style3.id}>${i5 + 1}</p>
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
      for (let [[dimension12, _5], testRuns] of resultsPerCondition2 || []) {
        for (let { name, ops } of testRuns) {
          if (!testSeries[name]) {
            testSeries[name] = {
              x: [],
              y: [],
              name,
              mode: "lines+markers",
              type: "scatter"
            };
          }
          testSeries[name].x.push(dimension12);
          testSeries[name].y.push(ops);
        }
      }
      const traces = Object.values(testSeries);
      const id2 = `plotly-graph-${Math.random()}`;
      let element = html`<div style="margin-bottom: -3rem" id=${id2}></div>`;
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
        ${tests2.filter((x3) => x3.ops !== -2).map(Bar(tests2))}
      </div>
      <input
        className=${style3.title}
        onInput=${(e4) => dispatch2({ title: e4.target.value })}
        value=${title2}
      />
      ${element}
      <div style="position: absolute; bottom: -1rem; left: 1rem; color: gray;" >
        <div>
          <input type="checkbox" checked="${xUseLogScale}" onChange=${(e4) => {
        xUseLogScale = e4.target.checked;
        updatePlot();
      }}/>
          <span> </span>
          <span>X-axis log scale</span>
        </div>
        <div style="margin-left: 0;">
          <input type="checkbox" checked="${yUseLogScale}" onChange=${(e4) => {
        yUseLogScale = e4.target.checked;
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
      aside: s3`
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
      graph: s3`
    margin: 0 auto;
    flex: 1 1 100%;
    padding: 3rem 3rem 3rem;
    display: flex;
  `,
      title: s3`
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
      result: s3`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
      bar: s3`
    display: flex;
    align-items: flex-end;
    background: rgba(0, 0, 0, 0.1);
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
  `,
      label: s3`
    width: 3rem;
    margin-top: 1rem;
    height: 1rem;
    text-align: center;
    font-weight: 100;
    color: rgba(255, 255, 255, 0.5);
  `,
      spinner: s3`
    width: 1rem;
    height: 1rem;
    opacity: 0.5;
  `,
      id: s3`
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

// https://esm.sh/gh/jeff-hykin/good-component@0.3.5/denonext/main/actions/show_toast.mjs
function Te(e4, r5, t6) {
  return t6 = { path: r5, exports: {}, require: function(a5, s5) {
    return $t(a5, s5 ?? t6.path);
  } }, e4(t6, t6.exports), t6.exports;
}
function ke(e4) {
  return e4 && Object.prototype.hasOwnProperty.call(e4, "default") && Object.keys(e4).length === 1 ? e4.default : e4;
}
function $t() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
function Ue(e4, r5, t6) {
  return t6 = { path: r5, exports: {}, require: function(a5, s5) {
    return Mt(a5, s5 ?? t6.path);
  } }, e4(t6, t6.exports), t6.exports;
}
function Mt() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
function Ye(e4, r5) {
  return O(e4, 0) ^ 45 ? (((r5 << 2 ^ O(e4, 0)) << 2 ^ O(e4, 1)) << 2 ^ O(e4, 2)) << 2 ^ O(e4, 3) : 0;
}
function Oe(e4) {
  return e4.trim();
}
function q2(e4, r5) {
  return (e4 = r5.exec(e4)) ? e4[0] : e4;
}
function w3(e4, r5, t6) {
  return e4.replace(r5, t6);
}
function te(e4, r5) {
  return e4.indexOf(r5);
}
function O(e4, r5) {
  return e4.charCodeAt(r5) | 0;
}
function D2(e4, r5, t6) {
  return e4.slice(r5, t6);
}
function P2(e4) {
  return e4.length;
}
function ee(e4) {
  return e4.length;
}
function U(e4, r5) {
  return r5.push(e4), e4;
}
function je(e4, r5) {
  return e4.map(r5).join("");
}
function fe(e4, r5, t6, a5, s5, h4, f4) {
  return { value: e4, root: r5, parent: t6, type: a5, props: s5, children: h4, line: ce, column: V, length: f4, return: "" };
}
function J(e4, r5) {
  return Ze(fe("", null, null, "", null, null, 0), e4, { length: -e4.length }, r5);
}
function Je() {
  return $2;
}
function Qe() {
  return $2 = N2 > 0 ? O(H2, --N2) : 0, V--, $2 === 10 && (V = 1, ce--), $2;
}
function z2() {
  return $2 = N2 < Ae ? O(H2, N2++) : 0, V++, $2 === 10 && (V = 1, ce++), $2;
}
function G() {
  return O(H2, N2);
}
function re() {
  return N2;
}
function ue(e4, r5) {
  return D2(H2, e4, r5);
}
function ie(e4) {
  switch (e4) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Re(e4) {
  return ce = V = 1, Ae = P2(H2 = e4), N2 = 0, [];
}
function Ne(e4) {
  return H2 = "", e4;
}
function ne(e4) {
  return Oe(ue(N2 - 1, he(e4 === 91 ? e4 + 2 : e4 === 40 ? e4 + 1 : e4)));
}
function Xe(e4) {
  return Ne(tt(Re(e4)));
}
function et(e4) {
  for (; ($2 = G()) && $2 < 33; ) z2();
  return ie(e4) > 2 || ie($2) > 3 ? "" : " ";
}
function tt(e4) {
  for (; z2(); ) switch (ie($2)) {
    case 0:
      U(Ie(N2 - 1), e4);
      break;
    case 2:
      U(ne($2), e4);
      break;
    default:
      U(ae($2), e4);
  }
  return e4;
}
function rt(e4, r5) {
  for (; --r5 && z2() && !($2 < 48 || $2 > 102 || $2 > 57 && $2 < 65 || $2 > 70 && $2 < 97); ) ;
  return ue(e4, re() + (r5 < 6 && G() == 32 && z2() == 32));
}
function he(e4) {
  for (; z2(); ) switch ($2) {
    case e4:
      return N2;
    case 34:
    case 39:
      e4 !== 34 && e4 !== 39 && he($2);
      break;
    case 40:
      e4 === 41 && he(e4);
      break;
    case 92:
      z2();
      break;
  }
  return N2;
}
function nt(e4, r5) {
  for (; z2() && e4 + $2 !== 57; ) if (e4 + $2 === 84 && G() === 47) break;
  return "/*" + ue(r5, N2 - 1) + "*" + ae(e4 === 47 ? e4 : z2());
}
function Ie(e4) {
  for (; !ie(G()); ) z2();
  return ue(e4, N2);
}
function Dt(e4) {
  return Ne(se("", null, null, null, [""], e4 = Re(e4), 0, [0], e4));
}
function se(e4, r5, t6, a5, s5, h4, f4, p4, u5) {
  for (var g4 = 0, d4 = 0, b2 = f4, S = 0, E3 = 0, j2 = 0, C2 = 1, v4 = 1, i5 = 1, o5 = 0, c5 = "", l5 = s5, y4 = h4, x3 = a5, m4 = c5; v4; ) switch (j2 = o5, o5 = z2()) {
    case 40:
      if (j2 != 108 && O(m4, b2 - 1) == 58) {
        te(m4 += w3(ne(o5), "&", "&\f"), "&\f") != -1 && (i5 = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      m4 += ne(o5);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      m4 += et(j2);
      break;
    case 92:
      m4 += rt(re() - 1, 7);
      continue;
    case 47:
      switch (G()) {
        case 42:
        case 47:
          U(st(nt(z2(), re()), r5, t6), u5);
          break;
        default:
          m4 += "/";
      }
      break;
    case 123 * C2:
      p4[g4++] = P2(m4) * i5;
    case 125 * C2:
    case 59:
    case 0:
      switch (o5) {
        case 0:
        case 125:
          v4 = 0;
        case 59 + d4:
          E3 > 0 && P2(m4) - b2 && U(E3 > 32 ? Se(m4 + ";", a5, t6, b2 - 1) : Se(w3(m4, " ", "") + ";", a5, t6, b2 - 2), u5);
          break;
        case 59:
          m4 += ";";
        default:
          if (U(x3 = _e(m4, r5, t6, g4, d4, s5, p4, c5, l5 = [], y4 = [], b2), h4), o5 === 123) if (d4 === 0) se(m4, r5, x3, x3, l5, h4, b2, p4, y4);
          else switch (S === 99 && O(m4, 3) === 110 ? 100 : S) {
            case 100:
            case 109:
            case 115:
              se(e4, x3, x3, a5 && U(_e(e4, x3, x3, 0, 0, s5, p4, c5, s5, l5 = [], b2), y4), s5, y4, b2, p4, a5 ? l5 : y4);
              break;
            default:
              se(m4, x3, x3, x3, [""], y4, 0, p4, y4);
          }
      }
      g4 = d4 = E3 = 0, C2 = i5 = 1, c5 = m4 = "", b2 = f4;
      break;
    case 58:
      b2 = 1 + P2(m4), E3 = j2;
    default:
      if (C2 < 1) {
        if (o5 == 123) --C2;
        else if (o5 == 125 && C2++ == 0 && Qe() == 125) continue;
      }
      switch (m4 += ae(o5), o5 * C2) {
        case 38:
          i5 = d4 > 0 ? 1 : (m4 += "\f", -1);
          break;
        case 44:
          p4[g4++] = (P2(m4) - 1) * i5, i5 = 1;
          break;
        case 64:
          G() === 45 && (m4 += ne(z2())), S = G(), d4 = b2 = P2(c5 = m4 += Ie(re())), o5++;
          break;
        case 45:
          j2 === 45 && P2(m4) == 2 && (C2 = 0);
      }
  }
  return h4;
}
function _e(e4, r5, t6, a5, s5, h4, f4, p4, u5, g4, d4) {
  for (var b2 = s5 - 1, S = s5 === 0 ? h4 : [""], E3 = ee(S), j2 = 0, C2 = 0, v4 = 0; j2 < a5; ++j2) for (var i5 = 0, o5 = D2(e4, b2 + 1, b2 = He(C2 = f4[j2])), c5 = e4; i5 < E3; ++i5) (c5 = Oe(C2 > 0 ? S[i5] + " " + o5 : w3(o5, /&\f/g, S[i5]))) && (u5[v4++] = c5);
  return fe(e4, r5, t6, s5 === 0 ? oe : p4, u5, g4, d4);
}
function st(e4, r5, t6) {
  return fe(e4, r5, t6, $e, ae(Je()), D2(e4, 2, -2), 0);
}
function Se(e4, r5, t6, a5) {
  return fe(e4, r5, t6, me, D2(e4, 0, a5), D2(e4, a5 + 1, -1), a5);
}
function ze(e4, r5, t6) {
  switch (Ye(e4, r5)) {
    case 5103:
      return _4 + "print-" + e4 + e4;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return _4 + e4 + e4;
    case 4789:
      return Q + e4 + e4;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return _4 + e4 + Q + e4 + k2 + e4 + e4;
    case 5936:
      switch (O(e4, r5 + 11)) {
        case 114:
          return _4 + e4 + k2 + w3(e4, /[svh]\w+-[tblr]{2}/, "tb") + e4;
        case 108:
          return _4 + e4 + k2 + w3(e4, /[svh]\w+-[tblr]{2}/, "tb-rl") + e4;
        case 45:
          return _4 + e4 + k2 + w3(e4, /[svh]\w+-[tblr]{2}/, "lr") + e4;
      }
    case 6828:
    case 4268:
    case 2903:
      return _4 + e4 + k2 + e4 + e4;
    case 6165:
      return _4 + e4 + k2 + "flex-" + e4 + e4;
    case 5187:
      return _4 + e4 + w3(e4, /(\w+).+(:[^]+)/, _4 + "box-$1$2" + k2 + "flex-$1$2") + e4;
    case 5443:
      return _4 + e4 + k2 + "flex-item-" + w3(e4, /flex-|-self/g, "") + (q2(e4, /flex-|baseline/) ? "" : k2 + "grid-row-" + w3(e4, /flex-|-self/g, "")) + e4;
    case 4675:
      return _4 + e4 + k2 + "flex-line-pack" + w3(e4, /align-content|flex-|-self/g, "") + e4;
    case 5548:
      return _4 + e4 + k2 + w3(e4, "shrink", "negative") + e4;
    case 5292:
      return _4 + e4 + k2 + w3(e4, "basis", "preferred-size") + e4;
    case 6060:
      return _4 + "box-" + w3(e4, "-grow", "") + _4 + e4 + k2 + w3(e4, "grow", "positive") + e4;
    case 4554:
      return _4 + w3(e4, /([^-])(transform)/g, "$1" + _4 + "$2") + e4;
    case 6187:
      return w3(w3(w3(e4, /(zoom-|grab)/, _4 + "$1"), /(image-set)/, _4 + "$1"), e4, "") + e4;
    case 5495:
    case 3959:
      return w3(e4, /(image-set\([^]*)/, _4 + "$1$`$1");
    case 4968:
      return w3(w3(e4, /(.+:)(flex-)?(.*)/, _4 + "box-pack:$3" + k2 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + _4 + e4 + e4;
    case 4200:
      if (!q2(e4, /flex-|baseline/)) return k2 + "grid-column-align" + D2(e4, r5) + e4;
      break;
    case 2592:
    case 3360:
      return k2 + w3(e4, "template-", "") + e4;
    case 4384:
    case 3616:
      return t6 && t6.some(function(a5, s5) {
        return r5 = s5, q2(a5.props, /grid-\w+-end/);
      }) ? ~te(e4 + (t6 = t6[r5].value), "span") ? e4 : k2 + w3(e4, "-start", "") + e4 + k2 + "grid-row-span:" + (~te(t6, "span") ? q2(t6, /\d+/) : +q2(t6, /\d+/) - +q2(e4, /\d+/)) + ";" : k2 + w3(e4, "-start", "") + e4;
    case 4896:
    case 4128:
      return t6 && t6.some(function(a5) {
        return q2(a5.props, /grid-\w+-start/);
      }) ? e4 : k2 + w3(w3(e4, "-end", "-span"), "span ", "") + e4;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return w3(e4, /(.+)-inline(.+)/, _4 + "$1$2") + e4;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (P2(e4) - 1 - r5 > 6) switch (O(e4, r5 + 1)) {
        case 109:
          if (O(e4, r5 + 4) !== 45) break;
        case 102:
          return w3(e4, /(.+:)(.+)-([^]+)/, "$1" + _4 + "$2-$3$1" + Q + (O(e4, r5 + 3) == 108 ? "$3" : "$2-$3")) + e4;
        case 115:
          return ~te(e4, "stretch") ? ze(w3(e4, "stretch", "fill-available"), r5, t6) + e4 : e4;
      }
      break;
    case 5152:
    case 5920:
      return w3(e4, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(a5, s5, h4, f4, p4, u5, g4) {
        return k2 + s5 + ":" + h4 + g4 + (f4 ? k2 + s5 + "-span:" + (p4 ? u5 : +u5 - +h4) + g4 : "") + e4;
      });
    case 4949:
      if (O(e4, r5 + 6) === 121) return w3(e4, ":", ":" + _4) + e4;
      break;
    case 6444:
      switch (O(e4, O(e4, 14) === 45 ? 18 : 11)) {
        case 120:
          return w3(e4, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + _4 + (O(e4, 14) === 45 ? "inline-" : "") + "box$3$1" + _4 + "$2$3$1" + k2 + "$2box$3") + e4;
        case 100:
          return w3(e4, ":", ":" + k2) + e4;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return w3(e4, "scroll-", "scroll-snap-") + e4;
  }
  return e4;
}
function X(e4, r5) {
  for (var t6 = "", a5 = ee(e4), s5 = 0; s5 < a5; s5++) t6 += r5(e4[s5], s5, e4, r5) || "";
  return t6;
}
function Ft(e4, r5, t6, a5) {
  switch (e4.type) {
    case Ve:
    case me:
      return e4.return = e4.return || e4.value;
    case $e:
      return "";
    case Me:
      return e4.return = e4.value + "{" + X(e4.children, a5) + "}";
    case oe:
      e4.value = e4.props.join(",");
  }
  return P2(t6 = X(e4.children, a5)) ? e4.return = e4.value + "{" + t6 + "}" : "";
}
function Ut(e4) {
  var r5 = ee(e4);
  return function(t6, a5, s5, h4) {
    for (var f4 = "", p4 = 0; p4 < r5; p4++) f4 += e4[p4](t6, a5, s5, h4) || "";
    return f4;
  };
}
function Gt(e4) {
  return function(r5) {
    r5.root || (r5 = r5.return) && e4(r5);
  };
}
function Vt(e4, r5, t6, a5) {
  if (e4.length > -1 && !e4.return) switch (e4.type) {
    case me:
      e4.return = ze(e4.value, e4.length, t6);
      return;
    case Me:
      return X([J(e4, { value: w3(e4.value, "@", "@" + _4) })], a5);
    case oe:
      if (e4.length) return je(e4.props, function(s5) {
        switch (q2(s5, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return X([J(e4, { props: [w3(s5, /:(read-\w+)/, ":" + Q + "$1")] })], a5);
          case "::placeholder":
            return X([J(e4, { props: [w3(s5, /:(plac\w+)/, ":" + _4 + "input-$1")] }), J(e4, { props: [w3(s5, /:(plac\w+)/, ":" + Q + "$1")] }), J(e4, { props: [w3(s5, /:(plac\w+)/, k2 + "input-$1")] })], a5);
        }
        return "";
      });
  }
}
function Ht(e4) {
  switch (e4.type) {
    case oe:
      e4.props = e4.props.map(function(r5) {
        return je(Xe(r5), function(t6, a5, s5) {
          switch (O(t6, 0)) {
            case 12:
              return D2(t6, 1, P2(t6));
            case 0:
            case 40:
            case 43:
            case 62:
            case 126:
              return t6;
            case 58:
              s5[++a5] === "global" && (s5[a5] = "", s5[++a5] = "\f" + D2(s5[a5], a5 = 1, -1));
            case 32:
              return a5 === 1 ? "" : t6;
            default:
              switch (a5) {
                case 0:
                  return e4 = t6, ee(s5) > 1 ? "" : t6;
                case (a5 = ee(s5) - 1):
                case 2:
                  return a5 === 2 ? t6 + e4 + e4 : t6 + e4;
                default:
                  return t6;
              }
          }
        });
      });
  }
}
function ot(e4, r5, t6) {
  return t6 = { path: r5, exports: {}, require: function(a5, s5) {
    return Yt(a5, s5 ?? t6.path);
  } }, e4(t6, t6.exports), t6.exports;
}
function Yt() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
function at(e4, r5, t6) {
  return t6 = { path: r5, exports: {}, require: function(a5, s5) {
    return er(a5, s5 ?? t6.path);
  } }, e4(t6, t6.exports), t6.exports;
}
function er() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
function ct(e4, r5, t6) {
  return t6 = { path: r5, exports: {}, require: function(a5, s5) {
    return sr(a5, s5 ?? t6.path);
  } }, e4(t6, t6.exports), t6.exports;
}
function ye(e4) {
  return e4 && Object.prototype.hasOwnProperty.call(e4, "default") && Object.keys(e4).length === 1 ? e4.default : e4;
}
function sr() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
function pt(e4, r5, t6) {
  return t6 = { path: r5, exports: {}, require: function(a5, s5) {
    return pr(a5, s5 ?? t6.path);
  } }, e4(t6, t6.exports), t6.exports;
}
function pr() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
function dt(e4, r5, t6) {
  return t6 = { path: r5, exports: {}, require: function(a5, s5) {
    return mr(a5, s5 ?? t6.path);
  } }, e4(t6, t6.exports), t6.exports;
}
function mr() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
function ht(e4, r5, t6) {
  return t6 = { path: r5, exports: {}, require: function(a5, s5) {
    return br(a5, s5 ?? t6.path);
  } }, e4(t6, t6.exports), t6.exports;
}
function Pe(e4) {
  return e4 && Object.prototype.hasOwnProperty.call(e4, "default") && Object.keys(e4).length === 1 ? e4.default : e4;
}
function br() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
function yt(e4, r5, t6) {
  return t6 = { path: r5, exports: {}, require: function(a5, s5) {
    return kr(a5, s5 ?? t6.path);
  } }, e4(t6, t6.exports), t6.exports;
}
function kr() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var Ct, F2, De, Fe, Ot, Ce, jt, At, Ge, k2, Q, _4, $e, oe, me, Rt, Nt, Ve, It, zt, Wt, Pt, Bt, Me, Kt, Lt, qt, He, ae, Ze, ce, V, Ae, N2, $2, H2, Zt, it, Jt, Qt, Xt, We, tr, rr, nr, ir, n5, or, ar, cr, fr, ur, ft, ut, lr, dr, hr, lt, yr, gr, wr, xr, Er, vr, _r, Be, Sr, Tr, mt, Cr, pe, $r, Mr, Or, jr, Ar, Ee, ve, Rr, Nr, L2, Kr, B, Lr, qr, Dr, Fr, Ur, Gr, Vr, Hr, Ke, gt, Ir, zr, wt, le, ge, Wr, bt, Pr, Br, Le, xt, Qr;
var init_show_toast = __esm({
  "https://esm.sh/gh/jeff-hykin/good-component@0.3.5/denonext/main/actions/show_toast.mjs"() {
    Ct = Object.defineProperty;
    F2 = (e4, r5) => {
      for (var t6 in r5) Ct(e4, t6, { get: r5[t6], enumerable: true });
    };
    De = {};
    F2(De, { default: () => ur });
    Fe = {};
    F2(Fe, { StyleSheet: () => jt, __moduleExports: () => Ce, default: () => At });
    Ot = Ue(function(e4, r5) {
      Object.defineProperty(r5, "__esModule", { value: true });
      function t6(h4) {
        if (h4.sheet) return h4.sheet;
        for (var f4 = 0; f4 < document.styleSheets.length; f4++) if (document.styleSheets[f4].ownerNode === h4) return document.styleSheets[f4];
      }
      function a5(h4) {
        var f4 = document.createElement("style");
        return f4.setAttribute("data-emotion", h4.key), h4.nonce !== void 0 && f4.setAttribute("nonce", h4.nonce), f4.appendChild(document.createTextNode("")), f4.setAttribute("data-s", ""), f4;
      }
      var s5 = function() {
        function h4(p4) {
          var u5 = this;
          this._insertTag = function(g4) {
            var d4;
            u5.tags.length === 0 ? u5.insertionPoint ? d4 = u5.insertionPoint.nextSibling : u5.prepend ? d4 = u5.container.firstChild : d4 = u5.before : d4 = u5.tags[u5.tags.length - 1].nextSibling, u5.container.insertBefore(g4, d4), u5.tags.push(g4);
          }, this.isSpeedy = p4.speedy === void 0 ? true : p4.speedy, this.tags = [], this.ctr = 0, this.nonce = p4.nonce, this.key = p4.key, this.container = p4.container, this.prepend = p4.prepend, this.insertionPoint = p4.insertionPoint, this.before = null;
        }
        var f4 = h4.prototype;
        return f4.hydrate = function(u5) {
          u5.forEach(this._insertTag);
        }, f4.insert = function(u5) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(a5(this));
          var g4 = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var d4 = t6(g4);
            try {
              d4.insertRule(u5, d4.cssRules.length);
            } catch {
            }
          } else g4.appendChild(document.createTextNode(u5));
          this.ctr++;
        }, f4.flush = function() {
          this.tags.forEach(function(u5) {
            return u5.parentNode && u5.parentNode.removeChild(u5);
          }), this.tags = [], this.ctr = 0;
        }, h4;
      }();
      r5.StyleSheet = s5;
    });
    Ce = Ue(function(e4) {
      e4.exports = Ot;
    });
    jt = Ce.StyleSheet;
    At = Ce;
    Ge = {};
    F2(Ge, { CHARSET: () => It, COMMENT: () => $e, COUNTER_STYLE: () => Lt, DECLARATION: () => me, DOCUMENT: () => Pt, FONT_FACE: () => Kt, FONT_FEATURE_VALUES: () => qt, IMPORT: () => Ve, KEYFRAMES: () => Me, MEDIA: () => Nt, MOZ: () => Q, MS: () => k2, NAMESPACE: () => Bt, PAGE: () => Rt, RULESET: () => oe, SUPPORTS: () => Wt, VIEWPORT: () => zt, WEBKIT: () => _4, abs: () => He, alloc: () => Re, append: () => U, assign: () => Ze, caret: () => re, char: () => Je, character: () => $2, characters: () => H2, charat: () => O, column: () => V, combine: () => je, comment: () => st, commenter: () => nt, compile: () => Dt, copy: () => J, dealloc: () => Ne, declaration: () => Se, default: () => Zt, delimit: () => ne, delimiter: () => he, escaping: () => rt, from: () => ae, hash: () => Ye, identifier: () => Ie, indexof: () => te, length: () => Ae, line: () => ce, match: () => q2, middleware: () => Ut, namespace: () => Ht, next: () => z2, node: () => fe, parse: () => se, peek: () => G, position: () => N2, prefix: () => ze, prefixer: () => Vt, prev: () => Qe, replace: () => w3, ruleset: () => _e, rulesheet: () => Gt, serialize: () => X, sizeof: () => ee, slice: () => ue, stringify: () => Ft, strlen: () => P2, substr: () => D2, token: () => ie, tokenize: () => Xe, tokenizer: () => tt, trim: () => Oe, whitespace: () => et });
    k2 = "-ms-";
    Q = "-moz-";
    _4 = "-webkit-";
    $e = "comm";
    oe = "rule";
    me = "decl";
    Rt = "@page";
    Nt = "@media";
    Ve = "@import";
    It = "@charset";
    zt = "@viewport";
    Wt = "@supports";
    Pt = "@document";
    Bt = "@namespace";
    Me = "@keyframes";
    Kt = "@font-face";
    Lt = "@counter-style";
    qt = "@font-feature-values";
    He = Math.abs;
    ae = String.fromCharCode;
    Ze = Object.assign;
    ce = 1;
    V = 1;
    Ae = 0;
    N2 = 0;
    $2 = 0;
    H2 = "";
    Zt = null;
    it = {};
    F2(it, { default: () => Xt });
    Jt = ot(function(e4, r5) {
      Object.defineProperty(r5, "__esModule", { value: true });
      var t6 = function(s5) {
        var h4 = /* @__PURE__ */ new WeakMap();
        return function(f4) {
          if (h4.has(f4)) return h4.get(f4);
          var p4 = s5(f4);
          return h4.set(f4, p4), p4;
        };
      };
      r5.default = t6;
    });
    Qt = ot(function(e4) {
      e4.exports = Jt;
    });
    Xt = Qt;
    We = {};
    F2(We, { default: () => nr });
    tr = at(function(e4, r5) {
      Object.defineProperty(r5, "__esModule", { value: true });
      function t6(a5) {
        var s5 = /* @__PURE__ */ Object.create(null);
        return function(h4) {
          return s5[h4] === void 0 && (s5[h4] = a5(h4)), s5[h4];
        };
      }
      r5.default = t6;
    });
    rr = at(function(e4) {
      e4.exports = tr;
    });
    nr = rr;
    ir = ye(Fe);
    n5 = ye(Ge);
    or = ye(it);
    ar = ye(We);
    cr = ct(function(e4, r5) {
      Object.defineProperty(r5, "__esModule", { value: true });
      function t6(i5) {
        return i5 && i5.__esModule ? i5 : { default: i5 };
      }
      var a5 = t6(or), s5 = t6(ar), h4 = function(o5, c5, l5) {
        for (var y4 = 0, x3 = 0; y4 = x3, x3 = n5.peek(), y4 === 38 && x3 === 12 && (c5[l5] = 1), !n5.token(x3); ) n5.next();
        return n5.slice(o5, n5.position);
      }, f4 = function(o5, c5) {
        var l5 = -1, y4 = 44;
        do
          switch (n5.token(y4)) {
            case 0:
              y4 === 38 && n5.peek() === 12 && (c5[l5] = 1), o5[l5] += h4(n5.position - 1, c5, l5);
              break;
            case 2:
              o5[l5] += n5.delimit(y4);
              break;
            case 4:
              if (y4 === 44) {
                o5[++l5] = n5.peek() === 58 ? "&\f" : "", c5[l5] = o5[l5].length;
                break;
              }
            default:
              o5[l5] += n5.from(y4);
          }
        while (y4 = n5.next());
        return o5;
      }, p4 = function(o5, c5) {
        return n5.dealloc(f4(n5.alloc(o5), c5));
      }, u5 = /* @__PURE__ */ new WeakMap(), g4 = function(o5) {
        if (!(o5.type !== "rule" || !o5.parent || o5.length < 1)) {
          for (var c5 = o5.value, l5 = o5.parent, y4 = o5.column === l5.column && o5.line === l5.line; l5.type !== "rule"; ) if (l5 = l5.parent, !l5) return;
          if (!(o5.props.length === 1 && c5.charCodeAt(0) !== 58 && !u5.get(l5)) && !y4) {
            u5.set(o5, true);
            for (var x3 = [], m4 = p4(c5, x3), T3 = l5.props, M2 = 0, W = 0; M2 < m4.length; M2++) for (var K = 0; K < T3.length; K++, W++) o5.props[W] = x3[M2] ? m4[M2].replace(/&\f/g, T3[K]) : T3[K] + " " + m4[M2];
          }
        }
      }, d4 = function(o5) {
        if (o5.type === "decl") {
          var c5 = o5.value;
          c5.charCodeAt(0) === 108 && c5.charCodeAt(2) === 98 && (o5.return = "", o5.value = "");
        }
      };
      function b2(i5, o5) {
        switch (n5.hash(i5, o5)) {
          case 5103:
            return n5.WEBKIT + "print-" + i5 + i5;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return n5.WEBKIT + i5 + i5;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return n5.WEBKIT + i5 + n5.MOZ + i5 + n5.MS + i5 + i5;
          case 6828:
          case 4268:
            return n5.WEBKIT + i5 + n5.MS + i5 + i5;
          case 6165:
            return n5.WEBKIT + i5 + n5.MS + "flex-" + i5 + i5;
          case 5187:
            return n5.WEBKIT + i5 + n5.replace(i5, /(\w+).+(:[^]+)/, n5.WEBKIT + "box-$1$2" + n5.MS + "flex-$1$2") + i5;
          case 5443:
            return n5.WEBKIT + i5 + n5.MS + "flex-item-" + n5.replace(i5, /flex-|-self/, "") + i5;
          case 4675:
            return n5.WEBKIT + i5 + n5.MS + "flex-line-pack" + n5.replace(i5, /align-content|flex-|-self/, "") + i5;
          case 5548:
            return n5.WEBKIT + i5 + n5.MS + n5.replace(i5, "shrink", "negative") + i5;
          case 5292:
            return n5.WEBKIT + i5 + n5.MS + n5.replace(i5, "basis", "preferred-size") + i5;
          case 6060:
            return n5.WEBKIT + "box-" + n5.replace(i5, "-grow", "") + n5.WEBKIT + i5 + n5.MS + n5.replace(i5, "grow", "positive") + i5;
          case 4554:
            return n5.WEBKIT + n5.replace(i5, /([^-])(transform)/g, "$1" + n5.WEBKIT + "$2") + i5;
          case 6187:
            return n5.replace(n5.replace(n5.replace(i5, /(zoom-|grab)/, n5.WEBKIT + "$1"), /(image-set)/, n5.WEBKIT + "$1"), i5, "") + i5;
          case 5495:
          case 3959:
            return n5.replace(i5, /(image-set\([^]*)/, n5.WEBKIT + "$1$`$1");
          case 4968:
            return n5.replace(n5.replace(i5, /(.+:)(flex-)?(.*)/, n5.WEBKIT + "box-pack:$3" + n5.MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + n5.WEBKIT + i5 + i5;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return n5.replace(i5, /(.+)-inline(.+)/, n5.WEBKIT + "$1$2") + i5;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (n5.strlen(i5) - 1 - o5 > 6) switch (n5.charat(i5, o5 + 1)) {
              case 109:
                if (n5.charat(i5, o5 + 4) !== 45) break;
              case 102:
                return n5.replace(i5, /(.+:)(.+)-([^]+)/, "$1" + n5.WEBKIT + "$2-$3$1" + n5.MOZ + (n5.charat(i5, o5 + 3) == 108 ? "$3" : "$2-$3")) + i5;
              case 115:
                return ~n5.indexof(i5, "stretch") ? b2(n5.replace(i5, "stretch", "fill-available"), o5) + i5 : i5;
            }
            break;
          case 4949:
            if (n5.charat(i5, o5 + 1) !== 115) break;
          case 6444:
            switch (n5.charat(i5, n5.strlen(i5) - 3 - (~n5.indexof(i5, "!important") && 10))) {
              case 107:
                return n5.replace(i5, ":", ":" + n5.WEBKIT) + i5;
              case 101:
                return n5.replace(i5, /(.+:)([^;!]+)(;|!.+)?/, "$1" + n5.WEBKIT + (n5.charat(i5, 14) === 45 ? "inline-" : "") + "box$3$1" + n5.WEBKIT + "$2$3$1" + n5.MS + "$2box$3") + i5;
            }
            break;
          case 5936:
            switch (n5.charat(i5, o5 + 11)) {
              case 114:
                return n5.WEBKIT + i5 + n5.MS + n5.replace(i5, /[svh]\w+-[tblr]{2}/, "tb") + i5;
              case 108:
                return n5.WEBKIT + i5 + n5.MS + n5.replace(i5, /[svh]\w+-[tblr]{2}/, "tb-rl") + i5;
              case 45:
                return n5.WEBKIT + i5 + n5.MS + n5.replace(i5, /[svh]\w+-[tblr]{2}/, "lr") + i5;
            }
            return n5.WEBKIT + i5 + n5.MS + i5 + i5;
        }
        return i5;
      }
      var S = function(o5, c5, l5, y4) {
        if (o5.length > -1 && !o5.return) switch (o5.type) {
          case n5.DECLARATION:
            o5.return = b2(o5.value, o5.length);
            break;
          case n5.KEYFRAMES:
            return n5.serialize([n5.copy(o5, { value: n5.replace(o5.value, "@", "@" + n5.WEBKIT) })], y4);
          case n5.RULESET:
            if (o5.length) return n5.combine(o5.props, function(x3) {
              switch (n5.match(x3, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return n5.serialize([n5.copy(o5, { props: [n5.replace(x3, /:(read-\w+)/, ":" + n5.MOZ + "$1")] })], y4);
                case "::placeholder":
                  return n5.serialize([n5.copy(o5, { props: [n5.replace(x3, /:(plac\w+)/, ":" + n5.WEBKIT + "input-$1")] }), n5.copy(o5, { props: [n5.replace(x3, /:(plac\w+)/, ":" + n5.MOZ + "$1")] }), n5.copy(o5, { props: [n5.replace(x3, /:(plac\w+)/, n5.MS + "input-$1")] })], y4);
              }
              return "";
            });
        }
      }, E3 = typeof document < "u", j2 = E3 ? void 0 : a5.default(function() {
        return s5.default(function() {
          var i5 = {};
          return function(o5) {
            return i5[o5];
          };
        });
      }), C2 = [S], v4 = function(o5) {
        var c5 = o5.key;
        if (E3 && c5 === "css") {
          var l5 = document.querySelectorAll("style[data-emotion]:not([data-s])");
          Array.prototype.forEach.call(l5, function(I2) {
            var A3 = I2.getAttribute("data-emotion");
            A3.indexOf(" ") !== -1 && (document.head.appendChild(I2), I2.setAttribute("data-s", ""));
          });
        }
        var y4 = o5.stylisPlugins || C2, x3 = {}, m4, T3 = [];
        E3 && (m4 = o5.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + c5 + ' "]'), function(I2) {
          for (var A3 = I2.getAttribute("data-emotion").split(" "), R = 1; R < A3.length; R++) x3[A3[R]] = true;
          T3.push(I2);
        }));
        var M2, W = [g4, d4];
        if (E3) {
          var K, we = [n5.stringify, n5.rulesheet(function(I2) {
            K.insert(I2);
          })], Et = n5.middleware(W.concat(y4, we)), vt = function(A3) {
            return n5.serialize(n5.compile(A3), Et);
          };
          M2 = function(A3, R, Y, de) {
            K = Y, vt(A3 ? A3 + "{" + R.styles + "}" : R.styles), de && (Z.inserted[R.name] = true);
          };
        } else {
          var _t = [n5.stringify], St = n5.middleware(W.concat(y4, _t)), Tt = function(A3) {
            return n5.serialize(n5.compile(A3), St);
          }, be = j2(y4)(c5), kt = function(A3, R) {
            var Y = R.name;
            return be[Y] === void 0 && (be[Y] = Tt(A3 ? A3 + "{" + R.styles + "}" : R.styles)), be[Y];
          };
          M2 = function(A3, R, Y, de) {
            var qe = R.name, xe = kt(A3, R);
            if (Z.compat === void 0) return de && (Z.inserted[qe] = true), xe;
            if (de) Z.inserted[qe] = xe;
            else return xe;
          };
        }
        var Z = { key: c5, sheet: new ir.StyleSheet({ key: c5, container: m4, nonce: o5.nonce, speedy: o5.speedy, prepend: o5.prepend, insertionPoint: o5.insertionPoint }), nonce: o5.nonce, inserted: x3, registered: {}, insert: M2 };
        return Z.sheet.hydrate(T3), Z;
      };
      r5.default = v4;
    });
    fr = ct(function(e4) {
      e4.exports = cr;
    });
    ur = fr;
    ft = {};
    F2(ft, { __moduleExports: () => Be, default: () => Sr, serializeStyles: () => Tr });
    ut = {};
    F2(ut, { default: () => hr });
    lr = pt(function(e4, r5) {
      Object.defineProperty(r5, "__esModule", { value: true });
      function t6(a5) {
        for (var s5 = 0, h4, f4 = 0, p4 = a5.length; p4 >= 4; ++f4, p4 -= 4) h4 = a5.charCodeAt(f4) & 255 | (a5.charCodeAt(++f4) & 255) << 8 | (a5.charCodeAt(++f4) & 255) << 16 | (a5.charCodeAt(++f4) & 255) << 24, h4 = (h4 & 65535) * 1540483477 + ((h4 >>> 16) * 59797 << 16), h4 ^= h4 >>> 24, s5 = (h4 & 65535) * 1540483477 + ((h4 >>> 16) * 59797 << 16) ^ (s5 & 65535) * 1540483477 + ((s5 >>> 16) * 59797 << 16);
        switch (p4) {
          case 3:
            s5 ^= (a5.charCodeAt(f4 + 2) & 255) << 16;
          case 2:
            s5 ^= (a5.charCodeAt(f4 + 1) & 255) << 8;
          case 1:
            s5 ^= a5.charCodeAt(f4) & 255, s5 = (s5 & 65535) * 1540483477 + ((s5 >>> 16) * 59797 << 16);
        }
        return s5 ^= s5 >>> 13, s5 = (s5 & 65535) * 1540483477 + ((s5 >>> 16) * 59797 << 16), ((s5 ^ s5 >>> 15) >>> 0).toString(36);
      }
      r5.default = t6;
    });
    dr = pt(function(e4) {
      e4.exports = lr;
    });
    hr = dr;
    lt = {};
    F2(lt, { default: () => wr });
    yr = dt(function(e4, r5) {
      Object.defineProperty(r5, "__esModule", { value: true });
      var t6 = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
      r5.default = t6;
    });
    gr = dt(function(e4) {
      e4.exports = yr;
    });
    wr = gr;
    xr = Pe(ut);
    Er = Pe(lt);
    vr = Pe(We);
    _r = ht(function(e4, r5) {
      Object.defineProperty(r5, "__esModule", { value: true });
      function t6(o5) {
        return o5 && o5.__esModule ? o5 : { default: o5 };
      }
      var a5 = t6(xr), s5 = t6(Er), h4 = t6(vr), f4 = /[A-Z]|^ms/g, p4 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, u5 = function(c5) {
        return c5.charCodeAt(1) === 45;
      }, g4 = function(c5) {
        return c5 != null && typeof c5 != "boolean";
      }, d4 = h4.default(function(o5) {
        return u5(o5) ? o5 : o5.replace(f4, "-$&").toLowerCase();
      }), b2 = function(c5, l5) {
        switch (c5) {
          case "animation":
          case "animationName":
            if (typeof l5 == "string") return l5.replace(p4, function(y4, x3, m4) {
              return v4 = { name: x3, styles: m4, next: v4 }, x3;
            });
        }
        return s5.default[c5] !== 1 && !u5(c5) && typeof l5 == "number" && l5 !== 0 ? l5 + "px" : l5;
      }, S = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
      function E3(o5, c5, l5) {
        if (l5 == null) return "";
        if (l5.__emotion_styles !== void 0) return l5;
        switch (typeof l5) {
          case "boolean":
            return "";
          case "object": {
            if (l5.anim === 1) return v4 = { name: l5.name, styles: l5.styles, next: v4 }, l5.name;
            if (l5.styles !== void 0) {
              var y4 = l5.next;
              if (y4 !== void 0) for (; y4 !== void 0; ) v4 = { name: y4.name, styles: y4.styles, next: v4 }, y4 = y4.next;
              var x3 = l5.styles + ";";
              return x3;
            }
            return j2(o5, c5, l5);
          }
          case "function": {
            if (o5 !== void 0) {
              var m4 = v4, T3 = l5(o5);
              return v4 = m4, E3(o5, c5, T3);
            }
            break;
          }
        }
        if (c5 == null) return l5;
        var M2 = c5[l5];
        return M2 !== void 0 ? M2 : l5;
      }
      function j2(o5, c5, l5) {
        var y4 = "";
        if (Array.isArray(l5)) for (var x3 = 0; x3 < l5.length; x3++) y4 += E3(o5, c5, l5[x3]) + ";";
        else for (var m4 in l5) {
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
