import { options as n } from './preact.js'
var t,
  u,
  r,
  i = 0,
  o = [],
  c = n.__r,
  f = n.diffed,
  e = n.__c,
  a = n.unmount
function v(t, r) {
  n.__h && n.__h(u, t, i || r), (i = 0)
  var o = u.__H || (u.__H = { __: [], __h: [] })
  return t >= o.__.length && o.__.push({}), o.__[t]
}
function m(n) {
  return (i = 1), p(E, n)
}
function p(n, r, i) {
  var o = v(t++, 2)
  return (
    o.__c ||
      ((o.__c = u),
      (o.__ = [
        i ? i(r) : E(void 0, r),
        function (t) {
          var u = n(o.__[0], t)
          o.__[0] !== u && ((o.__[0] = u), o.__c.setState({}))
        },
      ])),
    o.__
  )
}
function l(r, i) {
  var o = v(t++, 3)
  !n.__s && x(o.__H, i) && ((o.__ = r), (o.__H = i), u.__H.__h.push(o))
}
function y(r, i) {
  var o = v(t++, 4)
  !n.__s && x(o.__H, i) && ((o.__ = r), (o.__H = i), u.__h.push(o))
}
function d(n) {
  return (
    (i = 5),
    h(function () {
      return { current: n }
    }, [])
  )
}
function s(n, t, u) {
  ;(i = 6),
    y(
      function () {
        'function' == typeof n ? n(t()) : n && (n.current = t())
      },
      null == u ? u : u.concat(n)
    )
}
function h(n, u) {
  var r = v(t++, 7)
  return x(r.__H, u) ? ((r.__H = u), (r.__h = n), (r.__ = n())) : r.__
}
function T(n, t) {
  return (
    (i = 8),
    h(function () {
      return n
    }, t)
  )
}
function w(n) {
  var r = u.context[n.__c],
    i = v(t++, 9)
  return (
    (i.__c = n),
    r ? (null == i.__ && ((i.__ = !0), r.sub(u)), r.props.value) : n.__
  )
}
function A(t, u) {
  n.useDebugValue && n.useDebugValue(u ? u(t) : t)
}
function F(n) {
  var r = v(t++, 10),
    i = m()
  return (
    (r.__ = n),
    u.componentDidCatch ||
      (u.componentDidCatch = function (n) {
        r.__ && r.__(n), i[1](n)
      }),
    [
      i[0],
      function () {
        i[1](void 0)
      },
    ]
  )
}
function _() {
  o.some(function (t) {
    if (t.__P)
      try {
        t.__H.__h.forEach(g), t.__H.__h.forEach(q), (t.__H.__h = [])
      } catch (u) {
        return (t.__H.__h = []), n.__e(u, t.__v), !0
      }
  }),
    (o = [])
}
function g(n) {
  n.t && n.t()
}
function q(n) {
  var t = n.__()
  'function' == typeof t && (n.t = t)
}
function x(n, t) {
  return (
    !n ||
    t.some(function (t, u) {
      return t !== n[u]
    })
  )
}
function E(n, t) {
  return 'function' == typeof t ? t(n) : t
}
;(n.__r = function (n) {
  c && c(n),
    (t = 0),
    (u = n.__c).__H &&
      (u.__H.__h.forEach(g), u.__H.__h.forEach(q), (u.__H.__h = []))
}),
  (n.diffed = function (t) {
    f && f(t)
    var u = t.__c
    if (u) {
      var i = u.__H
      i &&
        i.__h.length &&
        ((1 !== o.push(u) && r === n.requestAnimationFrame) ||
          (
            (r = n.requestAnimationFrame) ||
            function (n) {
              var t,
                u = function () {
                  clearTimeout(r), cancelAnimationFrame(t), setTimeout(n)
                },
                r = setTimeout(u, 100)
              'undefined' != typeof window && (t = requestAnimationFrame(u))
            }
          )(_))
    }
  }),
  (n.__c = function (t, u) {
    u.some(function (t) {
      try {
        t.__h.forEach(g),
          (t.__h = t.__h.filter(function (n) {
            return !n.__ || q(n)
          }))
      } catch (r) {
        u.some(function (n) {
          n.__h && (n.__h = [])
        }),
          (u = []),
          n.__e(r, t.__v)
      }
    }),
      e && e(t, u)
  }),
  (n.unmount = function (t) {
    a && a(t)
    var u = t.__c
    if (u) {
      var r = u.__H
      if (r)
        try {
          r.__.forEach(function (n) {
            return n.t && n.t()
          })
        } catch (t) {
          n.__e(t, u.__v)
        }
    }
  })
export {
  m as useState,
  p as useReducer,
  l as useEffect,
  y as useLayoutEffect,
  d as useRef,
  s as useImperativeHandle,
  h as useMemo,
  T as useCallback,
  w as useContext,
  A as useDebugValue,
  F as useErrorBoundary,
}
