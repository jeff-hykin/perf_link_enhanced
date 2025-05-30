/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=clike+javascript */
var _self =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {},
  Prism = (function (g) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i,
      a = 0,
      C = {
        manual: g.Prism && g.Prism.manual,
        disableWorkerMessageHandler:
          g.Prism && g.Prism.disableWorkerMessageHandler,
        util: {
          encode: function (e) {
            return e instanceof M
              ? new M(e.type, C.util.encode(e.content), e.alias)
              : Array.isArray(e)
              ? e.map(C.util.encode)
              : e
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ')
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1)
          },
          objId: function (e) {
            return (
              e.__id || Object.defineProperty(e, '__id', { value: ++a }), e.__id
            )
          },
          clone: function t(e, n) {
            var r,
              a,
              i = C.util.type(e)
            switch (((n = n || {}), i)) {
              case 'Object':
                if (((a = C.util.objId(e)), n[a])) return n[a]
                for (var l in ((r = {}), (n[a] = r), e))
                  e.hasOwnProperty(l) && (r[l] = t(e[l], n))
                return r
              case 'Array':
                return (
                  (a = C.util.objId(e)),
                  n[a]
                    ? n[a]
                    : ((r = []),
                      (n[a] = r),
                      e.forEach(function (e, a) {
                        r[a] = t(e, n)
                      }),
                      r)
                )
              default:
                return e
            }
          },
        },
        languages: {
          extend: function (e, a) {
            var t = C.util.clone(C.languages[e])
            for (var n in a) t[n] = a[n]
            return t
          },
          insertBefore: function (t, e, a, n) {
            var r = (n = n || C.languages)[t],
              i = {}
            for (var l in r)
              if (r.hasOwnProperty(l)) {
                if (l == e)
                  for (var o in a) a.hasOwnProperty(o) && (i[o] = a[o])
                a.hasOwnProperty(l) || (i[l] = r[l])
              }
            var s = n[t]
            return (
              (n[t] = i),
              C.languages.DFS(C.languages, function (e, a) {
                a === s && e != t && (this[e] = i)
              }),
              i
            )
          },
          DFS: function e(a, t, n, r) {
            r = r || {}
            var i = C.util.objId
            for (var l in a)
              if (a.hasOwnProperty(l)) {
                t.call(a, l, a[l], n || l)
                var o = a[l],
                  s = C.util.type(o)
                'Object' !== s || r[i(o)]
                  ? 'Array' !== s || r[i(o)] || ((r[i(o)] = !0), e(o, t, l, r))
                  : ((r[i(o)] = !0), e(o, t, null, r))
              }
          },
        },
        plugins: {},
        highlightAll: function (e, a) {
          C.highlightAllUnder(document, e, a)
        },
        highlightAllUnder: function (e, a, t) {
          var n = {
            callback: t,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          }
          C.hooks.run('before-highlightall', n)
          for (
            var r, i = n.elements || e.querySelectorAll(n.selector), l = 0;
            (r = i[l++]);

          )
            C.highlightElement(r, !0 === a, n.callback)
        },
        highlightElement: function (e, a, t) {
          for (var n, r, i = e; i && !c.test(i.className); ) i = i.parentNode
          i &&
            ((n = (i.className.match(c) || [, ''])[1].toLowerCase()),
            (r = C.languages[n])),
            (e.className =
              e.className.replace(c, '').replace(/\s+/g, ' ') +
              ' language-' +
              n),
            e.parentNode &&
              ((i = e.parentNode),
              /pre/i.test(i.nodeName) &&
                (i.className =
                  i.className.replace(c, '').replace(/\s+/g, ' ') +
                  ' language-' +
                  n))
          var l = { element: e, language: n, grammar: r, code: e.textContent },
            o = function (e) {
              ;(l.highlightedCode = e),
                C.hooks.run('before-insert', l),
                (l.element.innerHTML = l.highlightedCode),
                C.hooks.run('after-highlight', l),
                C.hooks.run('complete', l),
                t && t.call(l.element)
            }
          if ((C.hooks.run('before-sanity-check', l), l.code))
            if ((C.hooks.run('before-highlight', l), l.grammar))
              if (a && g.Worker) {
                var s = new Worker(C.filename)
                ;(s.onmessage = function (e) {
                  o(e.data)
                }),
                  s.postMessage(
                    JSON.stringify({
                      language: l.language,
                      code: l.code,
                      immediateClose: !0,
                    })
                  )
              } else o(C.highlight(l.code, l.grammar, l.language))
            else o(C.util.encode(l.code))
          else C.hooks.run('complete', l)
        },
        highlight: function (e, a, t) {
          var n = { code: e, grammar: a, language: t }
          return (
            C.hooks.run('before-tokenize', n),
            (n.tokens = C.tokenize(n.code, n.grammar)),
            C.hooks.run('after-tokenize', n),
            M.stringify(C.util.encode(n.tokens), n.language)
          )
        },
        matchGrammar: function (e, a, t, n, r, i, l) {
          for (var o in t)
            if (t.hasOwnProperty(o) && t[o]) {
              if (o == l) return
              var s = t[o]
              s = 'Array' === C.util.type(s) ? s : [s]
              for (var g = 0; g < s.length; ++g) {
                var c = s[g],
                  u = c.inside,
                  h = !!c.lookbehind,
                  f = !!c.greedy,
                  d = 0,
                  m = c.alias
                if (f && !c.pattern.global) {
                  var p = c.pattern.toString().match(/[imuy]*$/)[0]
                  c.pattern = RegExp(c.pattern.source, p + 'g')
                }
                c = c.pattern || c
                for (var y = n, v = r; y < a.length; v += a[y].length, ++y) {
                  var k = a[y]
                  if (a.length > e.length) return
                  if (!(k instanceof M)) {
                    if (f && y != a.length - 1) {
                      if (((c.lastIndex = v), !(x = c.exec(e)))) break
                      for (
                        var b = x.index + (h ? x[1].length : 0),
                          w = x.index + x[0].length,
                          A = y,
                          P = v,
                          O = a.length;
                        A < O && (P < w || (!a[A].type && !a[A - 1].greedy));
                        ++A
                      )
                        (P += a[A].length) <= b && (++y, (v = P))
                      if (a[y] instanceof M) continue
                      ;(N = A - y), (k = e.slice(v, P)), (x.index -= v)
                    } else {
                      c.lastIndex = 0
                      var x = c.exec(k),
                        N = 1
                    }
                    if (x) {
                      h && (d = x[1] ? x[1].length : 0)
                      w = (b = x.index + d) + (x = x[0].slice(d)).length
                      var j = k.slice(0, b),
                        S = k.slice(w),
                        E = [y, N]
                      j && (++y, (v += j.length), E.push(j))
                      var _ = new M(o, u ? C.tokenize(x, u) : x, m, x, f)
                      if (
                        (E.push(_),
                        S && E.push(S),
                        Array.prototype.splice.apply(a, E),
                        1 != N && C.matchGrammar(e, a, t, y, v, !0, o),
                        i)
                      )
                        break
                    } else if (i) break
                  }
                }
              }
            }
        },
        tokenize: function (e, a) {
          var t = [e],
            n = a.rest
          if (n) {
            for (var r in n) a[r] = n[r]
            delete a.rest
          }
          return C.matchGrammar(e, t, a, 0, 0, !1), t
        },
        hooks: {
          all: {},
          add: function (e, a) {
            var t = C.hooks.all
            ;(t[e] = t[e] || []), t[e].push(a)
          },
          run: function (e, a) {
            var t = C.hooks.all[e]
            if (t && t.length) for (var n, r = 0; (n = t[r++]); ) n(a)
          },
        },
        Token: M,
      }
    function M(e, a, t, n, r) {
      ;(this.type = e),
        (this.content = a),
        (this.alias = t),
        (this.length = 0 | (n || '').length),
        (this.greedy = !!r)
    }
    if (
      ((g.Prism = C),
      (M.stringify = function (a, t, e) {
        if ('string' == typeof a) return a
        if (Array.isArray(a))
          return a
            .map(function (e) {
              return M.stringify(e, t, a)
            })
            .join('')
        var n = {
          type: a.type,
          content: M.stringify(a.content, t, e),
          tag: 'span',
          classes: ['token', a.type],
          attributes: {},
          language: t,
          parent: e,
        }
        if (a.alias) {
          var r = Array.isArray(a.alias) ? a.alias : [a.alias]
          Array.prototype.push.apply(n.classes, r)
        }
        C.hooks.run('wrap', n)
        var i = Object.keys(n.attributes)
          .map(function (e) {
            return (
              e + '="' + (n.attributes[e] || '').replace(/"/g, '&quot;') + '"'
            )
          })
          .join(' ')
        return (
          '<' +
          n.tag +
          ' class="' +
          n.classes.join(' ') +
          '"' +
          (i ? ' ' + i : '') +
          '>' +
          n.content +
          '</' +
          n.tag +
          '>'
        )
      }),
      !g.document)
    )
      return (
        g.addEventListener &&
          (C.disableWorkerMessageHandler ||
            g.addEventListener(
              'message',
              function (e) {
                var a = JSON.parse(e.data),
                  t = a.language,
                  n = a.code,
                  r = a.immediateClose
                g.postMessage(C.highlight(n, C.languages[t], t)), r && g.close()
              },
              !1
            )),
        C
      )
    var e =
      document.currentScript ||
      [].slice.call(document.getElementsByTagName('script')).pop()
    return (
      e &&
        ((C.filename = e.src),
        C.manual ||
          e.hasAttribute('data-manual') ||
          ('loading' !== document.readyState
            ? window.requestAnimationFrame
              ? window.requestAnimationFrame(C.highlightAll)
              : window.setTimeout(C.highlightAll, 16)
            : document.addEventListener('DOMContentLoaded', C.highlightAll))),
      C
    )
  })(_self)
'undefined' != typeof module && module.exports && (module.exports = Prism),
  'undefined' != typeof global && (global.Prism = Prism)
Prism.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  'class-name': {
    pattern:
      /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
}
;(Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [
    Prism.languages.clike['class-name'],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  number:
    /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
  function:
    /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator:
    /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
})),
  (Prism.languages.javascript['class-name'][0].pattern =
    /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern:
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
      lookbehind: !0,
      greedy: !0,
    },
    'function-variable': {
      pattern:
        /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
      alias: 'function',
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript,
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  }),
  Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
      pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /\${[^}]+}/,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\${|}$/,
              alias: 'punctuation',
            },
            rest: Prism.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
  }),
  Prism.languages.markup &&
    Prism.languages.markup.tag.addInlined('script', 'javascript'),
  (Prism.languages.js = Prism.languages.javascript)
