var n,
  l,
  u,
  i,
  t,
  r,
  o,
  f,
  e = {},
  c = [],
  s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i
function a(n, l) {
  for (var u in l) n[u] = l[u]
  return n
}
function v(n) {
  var l = n.parentNode
  l && l.removeChild(n)
}
function h(n, l, u) {
  var i,
    t = arguments,
    r = {}
  for (i in l) 'key' !== i && 'ref' !== i && (r[i] = l[i])
  if (arguments.length > 3)
    for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i])
  if (
    (null != u && (r.children = u),
    'function' == typeof n && null != n.defaultProps)
  )
    for (i in n.defaultProps) void 0 === r[i] && (r[i] = n.defaultProps[i])
  return p(n, r, l && l.key, l && l.ref, null)
}
function p(l, u, i, t, r) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: r,
  }
  return null == r && (o.__v = o), n.vnode && n.vnode(o), o
}
function y() {
  return {}
}
function d(n) {
  return n.children
}
function m(n, l) {
  ;(this.props = n), (this.context = l)
}
function w(n, l) {
  if (null == l) return n.__ ? w(n.__, n.__.__k.indexOf(n) + 1) : null
  for (var u; l < n.__k.length; l++)
    if (null != (u = n.__k[l]) && null != u.__e) return u.__e
  return 'function' == typeof n.type ? w(n) : null
}
function k(n) {
  var l, u
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
      if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e
        break
      }
    return k(n)
  }
}
function g(l) {
  ;((!l.__d && (l.__d = !0) && u.push(l) && !i++) ||
    r !== n.debounceRendering) &&
    ((r = n.debounceRendering) || t)(_)
}
function _() {
  for (var n; (i = u.length); )
    (n = u.sort(function (n, l) {
      return n.__v.__b - l.__v.__b
    })),
      (u = []),
      n.some(function (n) {
        var l, u, i, t, r, o, f
        n.__d &&
          ((o = (r = (l = n).__v).__e),
          (f = l.__P) &&
            ((u = []),
            ((i = a({}, r)).__v = i),
            (t = A(
              f,
              r,
              i,
              l.__n,
              void 0 !== f.ownerSVGElement,
              null,
              u,
              null == o ? w(r) : o
            )),
            T(u, r),
            t != o && k(r)))
      })
}
function b(n, l, u, i, t, r, o, f, s) {
  var a,
    h,
    p,
    y,
    d,
    m,
    k,
    g = (u && u.__k) || c,
    _ = g.length
  if (
    (f == e && (f = null != r ? r[0] : _ ? w(u, 0) : null),
    (a = 0),
    (l.__k = x(l.__k, function (u) {
      if (null != u) {
        if (
          ((u.__ = l),
          (u.__b = l.__b + 1),
          null === (p = g[a]) || (p && u.key == p.key && u.type === p.type))
        )
          g[a] = void 0
        else
          for (h = 0; h < _; h++) {
            if ((p = g[h]) && u.key == p.key && u.type === p.type) {
              g[h] = void 0
              break
            }
            p = null
          }
        if (
          ((y = A(n, u, (p = p || e), i, t, r, o, f, s)),
          (h = u.ref) &&
            p.ref != h &&
            (k || (k = []),
            p.ref && k.push(p.ref, null, u),
            k.push(h, u.__c || y, u)),
          null != y)
        ) {
          var c
          if ((null == m && (m = y), void 0 !== u.__d))
            (c = u.__d), (u.__d = void 0)
          else if (r == p || y != f || null == y.parentNode) {
            n: if (null == f || f.parentNode !== n) n.appendChild(y), (c = null)
            else {
              for (d = f, h = 0; (d = d.nextSibling) && h < _; h += 2)
                if (d == y) break n
              n.insertBefore(y, f), (c = f)
            }
            'option' == l.type && (n.value = '')
          }
          ;(f = void 0 !== c ? c : y.nextSibling),
            'function' == typeof l.type && (l.__d = f)
        } else f && p.__e == f && f.parentNode != n && (f = w(p))
      }
      return a++, u
    })),
    (l.__e = m),
    null != r && 'function' != typeof l.type)
  )
    for (a = r.length; a--; ) null != r[a] && v(r[a])
  for (a = _; a--; ) null != g[a] && D(g[a], g[a])
  if (k) for (a = 0; a < k.length; a++) j(k[a], k[++a], k[++a])
}
function x(n, l, u) {
  if ((null == u && (u = []), null == n || 'boolean' == typeof n))
    l && u.push(l(null))
  else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) x(n[i], l, u)
  else
    u.push(
      l
        ? l(
            'string' == typeof n || 'number' == typeof n
              ? p(null, n, null, null, n)
              : null != n.__e || null != n.__c
              ? p(n.type, n.props, n.key, null, n.__v)
              : n
          )
        : n
    )
  return u
}
function P(n, l, u, i, t) {
  var r
  for (r in u)
    'children' === r || 'key' === r || r in l || N(n, r, null, u[r], i)
  for (r in l)
    (t && 'function' != typeof l[r]) ||
      'children' === r ||
      'key' === r ||
      'value' === r ||
      'checked' === r ||
      u[r] === l[r] ||
      N(n, r, l[r], u[r], i)
}
function C(n, l, u) {
  '-' === l[0]
    ? n.setProperty(l, u)
    : (n[l] =
        'number' == typeof u && !1 === s.test(l)
          ? u + 'px'
          : null == u
          ? ''
          : u)
}
function N(n, l, u, i, t) {
  var r, o, f, e, c
  if (
    (t
      ? 'className' === l && (l = 'class')
      : 'class' === l && (l = 'className'),
    'style' === l)
  )
    if (((r = n.style), 'string' == typeof u)) r.cssText = u
    else {
      if (('string' == typeof i && ((r.cssText = ''), (i = null)), i))
        for (e in i) (u && e in u) || C(r, e, '')
      if (u) for (c in u) (i && u[c] === i[c]) || C(r, c, u[c])
    }
  else
    'o' === l[0] && 'n' === l[1]
      ? ((o = l !== (l = l.replace(/Capture$/, ''))),
        (f = l.toLowerCase()),
        (l = (f in n ? f : l).slice(2)),
        u
          ? (i || n.addEventListener(l, z, o), ((n.l || (n.l = {}))[l] = u))
          : n.removeEventListener(l, z, o))
      : 'list' !== l &&
        'tagName' !== l &&
        'form' !== l &&
        'type' !== l &&
        'size' !== l &&
        !t &&
        l in n
      ? (n[l] = null == u ? '' : u)
      : 'function' != typeof u &&
        'dangerouslySetInnerHTML' !== l &&
        (l !== (l = l.replace(/^xlink:?/, ''))
          ? null == u || !1 === u
            ? n.removeAttributeNS(
                'http://www.w3.org/1999/xlink',
                l.toLowerCase()
              )
            : n.setAttributeNS(
                'http://www.w3.org/1999/xlink',
                l.toLowerCase(),
                u
              )
          : null == u || (!1 === u && !/^ar/.test(l))
          ? n.removeAttribute(l)
          : n.setAttribute(l, u))
}
function z(l) {
  this.l[l.type](n.event ? n.event(l) : l)
}
function A(l, u, i, t, r, o, f, e, c) {
  var s,
    v,
    h,
    p,
    y,
    w,
    k,
    g,
    _,
    x,
    P = u.type
  if (void 0 !== u.constructor) return null
  ;(s = n.__b) && s(u)
  try {
    n: if ('function' == typeof P) {
      if (
        ((g = u.props),
        (_ = (s = P.contextType) && t[s.__c]),
        (x = s ? (_ ? _.props.value : s.__) : t),
        i.__c
          ? (k = (v = u.__c = i.__c).__ = v.__E)
          : ('prototype' in P && P.prototype.render
              ? (u.__c = v = new P(g, x))
              : ((u.__c = v = new m(g, x)),
                (v.constructor = P),
                (v.render = E)),
            _ && _.sub(v),
            (v.props = g),
            v.state || (v.state = {}),
            (v.context = x),
            (v.__n = t),
            (h = v.__d = !0),
            (v.__h = [])),
        null == v.__s && (v.__s = v.state),
        null != P.getDerivedStateFromProps &&
          (v.__s == v.state && (v.__s = a({}, v.__s)),
          a(v.__s, P.getDerivedStateFromProps(g, v.__s))),
        (p = v.props),
        (y = v.state),
        h)
      )
        null == P.getDerivedStateFromProps &&
          null != v.componentWillMount &&
          v.componentWillMount(),
          null != v.componentDidMount && v.__h.push(v.componentDidMount)
      else {
        if (
          (null == P.getDerivedStateFromProps &&
            g !== p &&
            null != v.componentWillReceiveProps &&
            v.componentWillReceiveProps(g, x),
          (!v.__e &&
            null != v.shouldComponentUpdate &&
            !1 === v.shouldComponentUpdate(g, v.__s, x)) ||
            (u.__v === i.__v && !v.__))
        ) {
          for (
            v.props = g,
              v.state = v.__s,
              u.__v !== i.__v && (v.__d = !1),
              v.__v = u,
              u.__e = i.__e,
              u.__k = i.__k,
              v.__h.length && f.push(v),
              s = 0;
            s < u.__k.length;
            s++
          )
            u.__k[s] && (u.__k[s].__ = u)
          break n
        }
        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x),
          null != v.componentDidUpdate &&
            v.__h.push(function () {
              v.componentDidUpdate(p, y, w)
            })
      }
      ;(v.context = x),
        (v.props = g),
        (v.state = v.__s),
        (s = n.__r) && s(u),
        (v.__d = !1),
        (v.__v = u),
        (v.__P = l),
        (s = v.render(v.props, v.state, v.context)),
        (u.__k =
          null != s && s.type == d && null == s.key
            ? s.props.children
            : Array.isArray(s)
            ? s
            : [s]),
        null != v.getChildContext && (t = a(a({}, t), v.getChildContext())),
        h ||
          null == v.getSnapshotBeforeUpdate ||
          (w = v.getSnapshotBeforeUpdate(p, y)),
        b(l, u, i, t, r, o, f, e, c),
        (v.base = u.__e),
        v.__h.length && f.push(v),
        k && (v.__E = v.__ = null),
        (v.__e = !1)
    } else
      null == o && u.__v === i.__v
        ? ((u.__k = i.__k), (u.__e = i.__e))
        : (u.__e = $(i.__e, u, i, t, r, o, f, c))
    ;(s = n.diffed) && s(u)
  } catch (l) {
    ;(u.__v = null), n.__e(l, u, i)
  }
  return u.__e
}
function T(l, u) {
  n.__c && n.__c(u, l),
    l.some(function (u) {
      try {
        ;(l = u.__h),
          (u.__h = []),
          l.some(function (n) {
            n.call(u)
          })
      } catch (l) {
        n.__e(l, u.__v)
      }
    })
}
function $(n, l, u, i, t, r, o, f) {
  var s,
    a,
    v,
    h,
    p,
    y = u.props,
    d = l.props
  if (((t = 'svg' === l.type || t), null != r))
    for (s = 0; s < r.length; s++)
      if (
        null != (a = r[s]) &&
        ((null === l.type ? 3 === a.nodeType : a.localName === l.type) ||
          n == a)
      ) {
        ;(n = a), (r[s] = null)
        break
      }
  if (null == n) {
    if (null === l.type) return document.createTextNode(d)
    ;(n = t
      ? document.createElementNS('http://www.w3.org/2000/svg', l.type)
      : document.createElement(l.type, d.is && { is: d.is })),
      (r = null),
      (f = !1)
  }
  if (null === l.type) y !== d && n.data != d && (n.data = d)
  else {
    if (
      (null != r && (r = c.slice.call(n.childNodes)),
      (v = (y = u.props || e).dangerouslySetInnerHTML),
      (h = d.dangerouslySetInnerHTML),
      !f)
    ) {
      if (y === e)
        for (y = {}, p = 0; p < n.attributes.length; p++)
          y[n.attributes[p].name] = n.attributes[p].value
      ;(h || v) &&
        ((h && v && h.__html == v.__html) ||
          (n.innerHTML = (h && h.__html) || ''))
    }
    P(n, d, y, t, f),
      h
        ? (l.__k = [])
        : ((l.__k = l.props.children),
          b(n, l, u, i, 'foreignObject' !== l.type && t, r, o, e, f)),
      f ||
        ('value' in d &&
          void 0 !== (s = d.value) &&
          s !== n.value &&
          N(n, 'value', s, y.value, !1),
        'checked' in d &&
          void 0 !== (s = d.checked) &&
          s !== n.checked &&
          N(n, 'checked', s, y.checked, !1))
  }
  return n
}
function j(l, u, i) {
  try {
    'function' == typeof l ? l(u) : (l.current = u)
  } catch (l) {
    n.__e(l, i)
  }
}
function D(l, u, i) {
  var t, r, o
  if (
    (n.unmount && n.unmount(l),
    (t = l.ref) && ((t.current && t.current !== l.__e) || j(t, null, u)),
    i || 'function' == typeof l.type || (i = null != (r = l.__e)),
    (l.__e = l.__d = void 0),
    null != (t = l.__c))
  ) {
    if (t.componentWillUnmount)
      try {
        t.componentWillUnmount()
      } catch (l) {
        n.__e(l, u)
      }
    t.base = t.__P = null
  }
  if ((t = l.__k)) for (o = 0; o < t.length; o++) t[o] && D(t[o], u, i)
  null != r && v(r)
}
function E(n, l, u) {
  return this.constructor(n, u)
}
function H(l, u, i) {
  var t, r, f
  n.__ && n.__(l, u),
    (r = (t = i === o) ? null : (i && i.__k) || u.__k),
    (l = h(d, null, [l])),
    (f = []),
    A(
      u,
      ((t ? u : i || u).__k = l),
      r || e,
      e,
      void 0 !== u.ownerSVGElement,
      i && !t ? [i] : r ? null : c.slice.call(u.childNodes),
      f,
      i || e,
      t
    ),
    T(f, l)
}
function I(n, l) {
  H(n, l, o)
}
function L(n, l) {
  var u, i
  for (i in ((l = a(a({}, n.props), l)),
  arguments.length > 2 && (l.children = c.slice.call(arguments, 2)),
  (u = {}),
  l))
    'key' !== i && 'ref' !== i && (u[i] = l[i])
  return p(n.type, u, l.key || n.key, l.ref || n.ref, null)
}
function M(n) {
  var l = {},
    u = {
      __c: '__cC' + f++,
      __: n,
      Consumer: function (n, l) {
        return n.children(l)
      },
      Provider: function (n) {
        var i,
          t = this
        return (
          this.getChildContext ||
            ((i = []),
            (this.getChildContext = function () {
              return (l[u.__c] = t), l
            }),
            (this.shouldComponentUpdate = function (n) {
              t.props.value !== n.value &&
                i.some(function (l) {
                  ;(l.context = n.value), g(l)
                })
            }),
            (this.sub = function (n) {
              i.push(n)
              var l = n.componentWillUnmount
              n.componentWillUnmount = function () {
                i.splice(i.indexOf(n), 1), l && l.call(n)
              }
            })),
          n.children
        )
      },
    }
  return (u.Consumer.contextType = u), (u.Provider.__ = u), u
}
;(n = {
  __e: function (n, l) {
    for (var u, i; (l = l.__); )
      if ((u = l.__c) && !u.__)
        try {
          if (
            (u.constructor &&
              null != u.constructor.getDerivedStateFromError &&
              ((i = !0), u.setState(u.constructor.getDerivedStateFromError(n))),
            null != u.componentDidCatch && ((i = !0), u.componentDidCatch(n)),
            i)
          )
            return g((u.__E = u))
        } catch (l) {
          n = l
        }
    throw n
  },
}),
  (l = function (n) {
    return null != n && void 0 === n.constructor
  }),
  (m.prototype.setState = function (n, l) {
    var u
    ;(u = this.__s !== this.state ? this.__s : (this.__s = a({}, this.state))),
      'function' == typeof n && (n = n(u, this.props)),
      n && a(u, n),
      null != n && this.__v && (l && this.__h.push(l), g(this))
  }),
  (m.prototype.forceUpdate = function (n) {
    this.__v && ((this.__e = !0), n && this.__h.push(n), g(this))
  }),
  (m.prototype.render = d),
  (u = []),
  (i = 0),
  (t =
    'function' == typeof Promise
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (o = e),
  (f = 0)
export {
  H as render,
  I as hydrate,
  h as createElement,
  h,
  d as Fragment,
  y as createRef,
  l as isValidElement,
  m as Component,
  L as cloneElement,
  M as createContext,
  x as toChildArray,
  D as _unmount,
  n as options,
}
