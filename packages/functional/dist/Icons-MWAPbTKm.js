var Vt = Object.defineProperty;
var Lt = (e, n, t) => n in e ? Vt(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var y = (e, n, t) => Lt(e, typeof n != "symbol" ? n + "" : n, t);
function Xn(e) {
  return e instanceof Function || typeof e == "function";
}
function mn(e) {
  return Xn(e) ? e() : e;
}
async function $t(e) {
  const n = mn(e);
  return n instanceof Promise ? await n : n;
}
function Mn(e) {
  return !!(e && typeof e == "object");
}
function Ve(e, n) {
  if (Mn(e)) {
    const t = [];
    return e instanceof Map ? e.forEach((o, s) => t.push(n(o, s, e))) : Array.isArray(e) ? e.forEach((o, s) => t.push(n(o, s, e))) : Object.entries(e).forEach(
      ([o, s]) => t.push(n(s, o, e))
    ), t.filter((o) => o !== void 0);
  }
  return [];
}
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ft(e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const t of e.split(",")) n[t] = 1;
  return (t) => t in n;
}
const P = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ie = () => {
}, Bt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), O = Object.assign, jt = Object.prototype.hasOwnProperty, E = (e, n) => jt.call(e, n), M = Array.isArray, ue = (e) => Ge(e) === "[object Map]", Ht = (e) => Ge(e) === "[object Set]", A = (e) => typeof e == "function", V = (e) => typeof e == "string", Se = (e) => typeof e == "symbol", w = (e) => e !== null && typeof e == "object", Kt = (e) => (w(e) || A(e)) && A(e.then) && A(e.catch), Gt = Object.prototype.toString, Ge = (e) => Gt.call(e), et = (e) => Ge(e).slice(8, -1), Ut = (e) => Ge(e) === "[object Object]", Dn = (e) => V(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nt = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (t) => n[t] || (n[t] = e(t));
}, tt = nt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Wt = nt(
  (e) => e ? `on${tt(e)}` : ""
), G = (e, n) => !Object.is(e, n), Jt = (e, n, t, o = !1) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: t
  });
};
let Pn;
const Ue = () => Pn || (Pn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cn(e) {
  if (M(e)) {
    const n = {};
    for (let t = 0; t < e.length; t++) {
      const o = e[t], s = V(o) ? Qt(o) : Cn(o);
      if (s)
        for (const r in s)
          n[r] = s[r];
    }
    return n;
  } else if (V(e) || w(e))
    return e;
}
const Yt = /;(?![^(]*\))/g, qt = /:([^]+)/, Zt = /\/\*[^]*?\*\//g;
function Qt(e) {
  const n = {};
  return e.replace(Zt, "").split(Yt).forEach((t) => {
    if (t) {
      const o = t.split(qt);
      o.length > 1 && (n[o[0].trim()] = o[1].trim());
    }
  }), n;
}
function _n(e) {
  let n = "";
  if (V(e))
    n = e;
  else if (M(e))
    for (let t = 0; t < e.length; t++) {
      const o = _n(e[t]);
      o && (n += o + " ");
    }
  else if (w(e))
    for (const t in e)
      e[t] && (n += t + " ");
  return n.trim();
}
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function F(e, ...n) {
  console.warn(`[Vue warn] ${e}`, ...n);
}
let m;
const qe = /* @__PURE__ */ new WeakSet();
class Xt {
  constructor(n) {
    this.fn = n, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qe.has(this) && (qe.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || st(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xn(this), rt(this);
    const n = m, t = x;
    m = this, x = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && m !== this && F(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), at(this), m = n, x = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let n = this.deps; n; n = n.nextDep)
        An(n);
      this.deps = this.depsTail = void 0, xn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    an(this) && this.run();
  }
  get dirty() {
    return an(this);
  }
}
let ot = 0, ge, ye;
function st(e, n = !1) {
  if (e.flags |= 8, n) {
    e.next = ye, ye = e;
    return;
  }
  e.next = ge, ge = e;
}
function En() {
  ot++;
}
function zn() {
  if (--ot > 0)
    return;
  if (ye) {
    let n = ye;
    for (ye = void 0; n; ) {
      const t = n.next;
      n.next = void 0, n.flags &= -9, n = t;
    }
  }
  let e;
  for (; ge; ) {
    let n = ge;
    for (ge = void 0; n; ) {
      const t = n.next;
      if (n.next = void 0, n.flags &= -9, n.flags & 1)
        try {
          n.trigger();
        } catch (o) {
          e || (e = o);
        }
      n = t;
    }
  }
  if (e) throw e;
}
function rt(e) {
  for (let n = e.deps; n; n = n.nextDep)
    n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
}
function at(e) {
  let n, t = e.depsTail, o = t;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === t && (t = s), An(o), eo(o)) : n = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = n, e.depsTail = t;
}
function an(e) {
  for (let n = e.deps; n; n = n.nextDep)
    if (n.dep.version !== n.version || n.dep.computed && (it(n.dep.computed) || n.dep.version !== n.version))
      return !0;
  return !!e._dirty;
}
function it(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === _e))
    return;
  e.globalVersion = _e;
  const n = e.dep;
  if (e.flags |= 2, n.version > 0 && !e.isSSR && e.deps && !an(e)) {
    e.flags &= -3;
    return;
  }
  const t = m, o = x;
  m = e, x = !0;
  try {
    rt(e);
    const s = e.fn(e._value);
    (n.version === 0 || G(s, e._value)) && (e._value = s, n.version++);
  } catch (s) {
    throw n.version++, s;
  } finally {
    m = t, x = o, at(e), e.flags &= -3;
  }
}
function An(e, n = !1) {
  const { dep: t, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && t.subsHead === e && (t.subsHead = s), t.subs === e && (t.subs = o, !o && t.computed)) {
    t.computed.flags &= -5;
    for (let r = t.computed.deps; r; r = r.nextDep)
      An(r, !0);
  }
  !n && !--t.sc && t.map && t.map.delete(t.key);
}
function eo(e) {
  const { prevDep: n, nextDep: t } = e;
  n && (n.nextDep = t, e.prevDep = void 0), t && (t.prevDep = n, e.nextDep = void 0);
}
let x = !0;
const ut = [];
function be() {
  ut.push(x), x = !1;
}
function ke() {
  const e = ut.pop();
  x = e === void 0 ? !0 : e;
}
function xn(e) {
  const { cleanup: n } = e;
  if (e.cleanup = void 0, n) {
    const t = m;
    m = void 0;
    try {
      n();
    } finally {
      m = t;
    }
  }
}
let _e = 0;
class no {
  constructor(n, t) {
    this.sub = n, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Sn {
  constructor(n) {
    this.computed = n, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(n) {
    if (!m || !x || m === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== m)
      t = this.activeLink = new no(m, this), m.deps ? (t.prevDep = m.depsTail, m.depsTail.nextDep = t, m.depsTail = t) : m.deps = m.depsTail = t, ct(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const o = t.nextDep;
      o.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = o), t.prevDep = m.depsTail, t.nextDep = void 0, m.depsTail.nextDep = t, m.depsTail = t, m.deps === t && (m.deps = o);
    }
    return process.env.NODE_ENV !== "production" && m.onTrack && m.onTrack(
      O(
        {
          effect: m
        },
        n
      )
    ), t;
  }
  trigger(n) {
    this.version++, _e++, this.notify(n);
  }
  notify(n) {
    En();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let t = this.subsHead; t; t = t.nextSub)
          t.sub.onTrigger && !(t.sub.flags & 8) && t.sub.onTrigger(
            O(
              {
                effect: t.sub
              },
              n
            )
          );
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      zn();
    }
  }
}
function ct(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let o = n.deps; o; o = o.nextDep)
        ct(o);
    }
    const t = e.dep.subs;
    t !== e && (e.prevSub = t, t && (t.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const un = /* @__PURE__ */ new WeakMap(), Y = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), cn = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ee = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function z(e, n, t) {
  if (x && m) {
    let o = un.get(e);
    o || un.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(t);
    s || (o.set(t, s = new Sn()), s.map = o, s.key = t), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: n,
      key: t
    }) : s.track();
  }
}
function H(e, n, t, o, s, r) {
  const a = un.get(e);
  if (!a) {
    _e++;
    return;
  }
  const i = (c) => {
    c && (process.env.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: n,
      key: t,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : c.trigger());
  };
  if (En(), n === "clear")
    a.forEach(i);
  else {
    const c = M(e), l = c && Dn(t);
    if (c && t === "length") {
      const p = Number(o);
      a.forEach((u, f) => {
        (f === "length" || f === Ee || !Se(f) && f >= p) && i(u);
      });
    } else
      switch ((t !== void 0 || a.has(void 0)) && i(a.get(t)), l && i(a.get(Ee)), n) {
        case "add":
          c ? l && i(a.get("length")) : (i(a.get(Y)), ue(e) && i(a.get(cn)));
          break;
        case "delete":
          c || (i(a.get(Y)), ue(e) && i(a.get(cn)));
          break;
        case "set":
          ue(e) && i(a.get(Y));
          break;
      }
  }
  zn();
}
function ne(e) {
  const n = d(e);
  return n === e ? n : (z(n, "iterate", Ee), v(e) ? n : n.map(N));
}
function bn(e) {
  return z(e = d(e), "iterate", Ee), e;
}
const to = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ze(this, Symbol.iterator, N);
  },
  concat(...e) {
    return ne(this).concat(
      ...e.map((n) => M(n) ? ne(n) : n)
    );
  },
  entries() {
    return Ze(this, "entries", (e) => (e[1] = N(e[1]), e));
  },
  every(e, n) {
    return L(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return L(this, "filter", e, n, (t) => t.map(N), arguments);
  },
  find(e, n) {
    return L(this, "find", e, n, N, arguments);
  },
  findIndex(e, n) {
    return L(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return L(this, "findLast", e, n, N, arguments);
  },
  findLastIndex(e, n) {
    return L(this, "findLastIndex", e, n, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, n) {
    return L(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return Qe(this, "includes", e);
  },
  indexOf(...e) {
    return Qe(this, "indexOf", e);
  },
  join(e) {
    return ne(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Qe(this, "lastIndexOf", e);
  },
  map(e, n) {
    return L(this, "map", e, n, void 0, arguments);
  },
  pop() {
    return pe(this, "pop");
  },
  push(...e) {
    return pe(this, "push", e);
  },
  reduce(e, ...n) {
    return In(this, "reduce", e, n);
  },
  reduceRight(e, ...n) {
    return In(this, "reduceRight", e, n);
  },
  shift() {
    return pe(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, n) {
    return L(this, "some", e, n, void 0, arguments);
  },
  splice(...e) {
    return pe(this, "splice", e);
  },
  toReversed() {
    return ne(this).toReversed();
  },
  toSorted(e) {
    return ne(this).toSorted(e);
  },
  toSpliced(...e) {
    return ne(this).toSpliced(...e);
  },
  unshift(...e) {
    return pe(this, "unshift", e);
  },
  values() {
    return Ze(this, "values", N);
  }
};
function Ze(e, n, t) {
  const o = bn(e), s = o[n]();
  return o !== e && !v(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = t(r.value)), r;
  }), s;
}
const oo = Array.prototype;
function L(e, n, t, o, s, r) {
  const a = bn(e), i = a !== e && !v(e), c = a[n];
  if (c !== oo[n]) {
    const u = c.apply(e, r);
    return i ? N(u) : u;
  }
  let l = t;
  a !== e && (i ? l = function(u, f) {
    return t.call(this, N(u), f, e);
  } : t.length > 2 && (l = function(u, f) {
    return t.call(this, u, f, e);
  }));
  const p = c.call(a, l, o);
  return i && s ? s(p) : p;
}
function In(e, n, t, o) {
  const s = bn(e);
  let r = t;
  return s !== e && (v(e) ? t.length > 3 && (r = function(a, i, c) {
    return t.call(this, a, i, c, e);
  }) : r = function(a, i, c) {
    return t.call(this, a, N(i), c, e);
  }), s[n](r, ...o);
}
function Qe(e, n, t) {
  const o = d(e);
  z(o, "iterate", Ee);
  const s = o[n](...t);
  return (s === -1 || s === !1) && Le(t[0]) ? (t[0] = d(t[0]), o[n](...t)) : s;
}
function pe(e, n, t = []) {
  be(), En();
  const o = d(e)[n].apply(e, t);
  return zn(), ke(), o;
}
const so = /* @__PURE__ */ Ft("__proto__,__v_isRef,__isVue"), lt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Se)
);
function ro(e) {
  Se(e) || (e = String(e));
  const n = d(this);
  return z(n, "has", e), n.hasOwnProperty(e);
}
class ft {
  constructor(n = !1, t = !1) {
    this._isReadonly = n, this._isShallow = t;
  }
  get(n, t, o) {
    if (t === "__v_skip") return n.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (t === "__v_isReactive")
      return !s;
    if (t === "__v_isReadonly")
      return s;
    if (t === "__v_isShallow")
      return r;
    if (t === "__v_raw")
      return o === (s ? r ? gt : dt : r ? yo : ht).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(o) ? n : void 0;
    const a = M(n);
    if (!s) {
      let c;
      if (a && (c = to[t]))
        return c;
      if (t === "hasOwnProperty")
        return ro;
    }
    const i = Reflect.get(
      n,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      S(n) ? n : o
    );
    return (Se(t) ? lt.has(t) : so(t)) || (s || z(n, "get", t), r) ? i : S(i) ? a && Dn(t) ? i : i.value : w(i) ? s ? mt(i) : yt(i) : i;
  }
}
class ao extends ft {
  constructor(n = !1) {
    super(!1, n);
  }
  set(n, t, o, s) {
    let r = n[t];
    if (!this._isShallow) {
      const c = B(r);
      if (!v(o) && !B(o) && (r = d(r), o = d(o)), !M(n) && S(r) && !S(o))
        return c ? !1 : (r.value = o, !0);
    }
    const a = M(n) && Dn(t) ? Number(t) < n.length : E(n, t), i = Reflect.set(
      n,
      t,
      o,
      S(n) ? n : s
    );
    return n === d(s) && (a ? G(o, r) && H(n, "set", t, o, r) : H(n, "add", t, o)), i;
  }
  deleteProperty(n, t) {
    const o = E(n, t), s = n[t], r = Reflect.deleteProperty(n, t);
    return r && o && H(n, "delete", t, void 0, s), r;
  }
  has(n, t) {
    const o = Reflect.has(n, t);
    return (!Se(t) || !lt.has(t)) && z(n, "has", t), o;
  }
  ownKeys(n) {
    return z(
      n,
      "iterate",
      M(n) ? "length" : Y
    ), Reflect.ownKeys(n);
  }
}
class pt extends ft {
  constructor(n = !1) {
    super(!0, n);
  }
  set(n, t) {
    return process.env.NODE_ENV !== "production" && F(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      n
    ), !0;
  }
  deleteProperty(n, t) {
    return process.env.NODE_ENV !== "production" && F(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      n
    ), !0;
  }
}
const io = /* @__PURE__ */ new ao(), uo = /* @__PURE__ */ new pt(), co = /* @__PURE__ */ new pt(!0), ln = (e) => e, ve = (e) => Reflect.getPrototypeOf(e);
function lo(e, n, t) {
  return function(...o) {
    const s = this.__v_raw, r = d(s), a = ue(r), i = e === "entries" || e === Symbol.iterator && a, c = e === "keys" && a, l = s[e](...o), p = t ? ln : n ? fn : N;
    return !n && z(
      r,
      "iterate",
      c ? cn : Y
    ), {
      // iterator protocol
      next() {
        const { value: u, done: f } = l.next();
        return f ? { value: u, done: f } : {
          value: i ? [p(u[0]), p(u[1])] : p(u),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Oe(e) {
  return function(...n) {
    if (process.env.NODE_ENV !== "production") {
      const t = n[0] ? `on key "${n[0]}" ` : "";
      F(
        `${tt(e)} operation ${t}failed: target is readonly.`,
        d(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fo(e, n) {
  const t = {
    get(s) {
      const r = this.__v_raw, a = d(r), i = d(s);
      e || (G(s, i) && z(a, "get", s), z(a, "get", i));
      const { has: c } = ve(a), l = n ? ln : e ? fn : N;
      if (c.call(a, s))
        return l(r.get(s));
      if (c.call(a, i))
        return l(r.get(i));
      r !== a && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && z(d(s), "iterate", Y), Reflect.get(s, "size", s);
    },
    has(s) {
      const r = this.__v_raw, a = d(r), i = d(s);
      return e || (G(s, i) && z(a, "has", s), z(a, "has", i)), s === i ? r.has(s) : r.has(s) || r.has(i);
    },
    forEach(s, r) {
      const a = this, i = a.__v_raw, c = d(i), l = n ? ln : e ? fn : N;
      return !e && z(c, "iterate", Y), i.forEach((p, u) => s.call(r, l(p), l(u), a));
    }
  };
  return O(
    t,
    e ? {
      add: Oe("add"),
      set: Oe("set"),
      delete: Oe("delete"),
      clear: Oe("clear")
    } : {
      add(s) {
        !n && !v(s) && !B(s) && (s = d(s));
        const r = d(this);
        return ve(r).has.call(r, s) || (r.add(s), H(r, "add", s, s)), this;
      },
      set(s, r) {
        !n && !v(r) && !B(r) && (r = d(r));
        const a = d(this), { has: i, get: c } = ve(a);
        let l = i.call(a, s);
        l ? process.env.NODE_ENV !== "production" && Vn(a, i, s) : (s = d(s), l = i.call(a, s));
        const p = c.call(a, s);
        return a.set(s, r), l ? G(r, p) && H(a, "set", s, r, p) : H(a, "add", s, r), this;
      },
      delete(s) {
        const r = d(this), { has: a, get: i } = ve(r);
        let c = a.call(r, s);
        c ? process.env.NODE_ENV !== "production" && Vn(r, a, s) : (s = d(s), c = a.call(r, s));
        const l = i ? i.call(r, s) : void 0, p = r.delete(s);
        return c && H(r, "delete", s, void 0, l), p;
      },
      clear() {
        const s = d(this), r = s.size !== 0, a = process.env.NODE_ENV !== "production" ? ue(s) ? new Map(s) : new Set(s) : void 0, i = s.clear();
        return r && H(
          s,
          "clear",
          void 0,
          void 0,
          a
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    t[s] = lo(s, e, n);
  }), t;
}
function kn(e, n) {
  const t = fo(e, n);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    E(t, s) && s in o ? t : o,
    s,
    r
  );
}
const po = {
  get: /* @__PURE__ */ kn(!1, !1)
}, ho = {
  get: /* @__PURE__ */ kn(!0, !1)
}, go = {
  get: /* @__PURE__ */ kn(!0, !0)
};
function Vn(e, n, t) {
  const o = d(t);
  if (o !== t && n.call(e, o)) {
    const s = et(e);
    F(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ht = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap();
function mo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Mo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mo(et(e));
}
function yt(e) {
  return B(e) ? e : Nn(
    e,
    !1,
    io,
    po,
    ht
  );
}
function mt(e) {
  return Nn(
    e,
    !0,
    uo,
    ho,
    dt
  );
}
function Te(e) {
  return Nn(
    e,
    !0,
    co,
    go,
    gt
  );
}
function Nn(e, n, t, o, s) {
  if (!w(e))
    return process.env.NODE_ENV !== "production" && F(
      `value cannot be made ${n ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const a = Mo(e);
  if (a === 0)
    return e;
  const i = new Proxy(
    e,
    a === 2 ? o : t
  );
  return s.set(e, i), i;
}
function ce(e) {
  return B(e) ? ce(e.__v_raw) : !!(e && e.__v_isReactive);
}
function B(e) {
  return !!(e && e.__v_isReadonly);
}
function v(e) {
  return !!(e && e.__v_isShallow);
}
function Le(e) {
  return e ? !!e.__v_raw : !1;
}
function d(e) {
  const n = e && e.__v_raw;
  return n ? d(n) : e;
}
function Do(e) {
  return !E(e, "__v_skip") && Object.isExtensible(e) && Jt(e, "__v_skip", !0), e;
}
const N = (e) => w(e) ? yt(e) : e, fn = (e) => w(e) ? mt(e) : e;
function S(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Rs(e) {
  return Co(e, !1);
}
function Co(e, n) {
  return S(e) ? e : new _o(e, n);
}
class _o {
  constructor(n, t) {
    this.dep = new Sn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? n : d(n), this._value = t ? n : N(n), this.__v_isShallow = t;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(n) {
    const t = this._rawValue, o = this.__v_isShallow || v(n) || B(n);
    n = o ? n : d(n), G(n, t) && (this._rawValue = n, this._value = o ? n : N(n), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: n,
      oldValue: t
    }) : this.dep.trigger());
  }
}
function Eo(e) {
  return S(e) ? e.value : e;
}
const zo = {
  get: (e, n, t) => n === "__v_raw" ? e : Eo(Reflect.get(e, n, t)),
  set: (e, n, t, o) => {
    const s = e[n];
    return S(s) && !S(t) ? (s.value = t, !0) : Reflect.set(e, n, t, o);
  }
};
function Ao(e) {
  return ce(e) ? e : new Proxy(e, zo);
}
class So {
  constructor(n, t, o) {
    this.fn = n, this.setter = t, this._value = void 0, this.dep = new Sn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = _e - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    m !== this)
      return st(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const n = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return it(this), n && (n.version = this.dep.version), this._value;
  }
  set value(n) {
    this.setter ? this.setter(n) : process.env.NODE_ENV !== "production" && F("Write operation failed: computed value is readonly");
  }
}
function bo(e, n, t = !1) {
  let o, s;
  A(e) ? o = e : (o = e.get, s = e.set);
  const r = new So(o, s, t);
  return process.env.NODE_ENV, r;
}
const Re = {}, $e = /* @__PURE__ */ new WeakMap();
let W;
function ko(e, n = !1, t = W) {
  if (t) {
    let o = $e.get(t);
    o || $e.set(t, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !n && F(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function No(e, n, t = P) {
  const { immediate: o, deep: s, once: r, scheduler: a, augmentJob: i, call: c } = t, l = (g) => {
    (t.onWarn || F)(
      "Invalid watch source: ",
      g,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (g) => s ? g : v(g) || s === !1 || s === 0 ? K(g, 1) : K(g);
  let u, f, h, _, T = !1, Ne = !1;
  if (S(e) ? (f = () => e.value, T = v(e)) : ce(e) ? (f = () => p(e), T = !0) : M(e) ? (Ne = !0, T = e.some((g) => ce(g) || v(g)), f = () => e.map((g) => {
    if (S(g))
      return g.value;
    if (ce(g))
      return p(g);
    if (A(g))
      return c ? c(g, 2) : g();
    process.env.NODE_ENV !== "production" && l(g);
  })) : A(e) ? n ? f = c ? () => c(e, 2) : e : f = () => {
    if (h) {
      be();
      try {
        h();
      } finally {
        ke();
      }
    }
    const g = W;
    W = u;
    try {
      return c ? c(e, 3, [_]) : e(_);
    } finally {
      W = g;
    }
  } : (f = ie, process.env.NODE_ENV !== "production" && l(e)), n && s) {
    const g = f, I = s === !0 ? 1 / 0 : s;
    f = () => K(g(), I);
  }
  const ee = () => {
    u.stop();
  };
  if (r && n) {
    const g = n;
    n = (...I) => {
      g(...I), ee();
    };
  }
  let U = Ne ? new Array(e.length).fill(Re) : Re;
  const fe = (g) => {
    if (!(!(u.flags & 1) || !u.dirty && !g))
      if (n) {
        const I = u.run();
        if (s || T || (Ne ? I.some((Ye, we) => G(Ye, U[we])) : G(I, U))) {
          h && h();
          const Ye = W;
          W = u;
          try {
            const we = [
              I,
              // pass undefined as the old value when it's changed for the first time
              U === Re ? void 0 : Ne && U[0] === Re ? [] : U,
              _
            ];
            c ? c(n, 3, we) : (
              // @ts-expect-error
              n(...we)
            ), U = I;
          } finally {
            W = Ye;
          }
        }
      } else
        u.run();
  };
  return i && i(fe), u = new Xt(f), u.scheduler = a ? () => a(fe, !1) : fe, _ = (g) => ko(g, !1, u), h = u.onStop = () => {
    const g = $e.get(u);
    if (g) {
      if (c)
        c(g, 4);
      else
        for (const I of g) I();
      $e.delete(u);
    }
  }, process.env.NODE_ENV !== "production" && (u.onTrack = t.onTrack, u.onTrigger = t.onTrigger), n ? o ? fe(!0) : U = u.run() : a ? a(fe.bind(null, !0), !0) : u.run(), ee.pause = u.pause.bind(u), ee.resume = u.resume.bind(u), ee.stop = ee, ee;
}
function K(e, n = 1 / 0, t) {
  if (n <= 0 || !w(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), n--, S(e))
    K(e.value, n, t);
  else if (M(e))
    for (let o = 0; o < e.length; o++)
      K(e[o], n, t);
  else if (Ht(e) || ue(e))
    e.forEach((o) => {
      K(o, n, t);
    });
  else if (Ut(e)) {
    for (const o in e)
      K(e[o], n, t);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && K(e[o], n, t);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const q = [];
function wo(e) {
  q.push(e);
}
function vo() {
  q.pop();
}
let Xe = !1;
function D(e, ...n) {
  if (Xe) return;
  Xe = !0, be();
  const t = q.length ? q[q.length - 1].component : null, o = t && t.appContext.config.warnHandler, s = Oo();
  if (o)
    We(
      o,
      t,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + n.map((r) => {
          var a, i;
          return (i = (a = r.toString) == null ? void 0 : a.call(r)) != null ? i : JSON.stringify(r);
        }).join(""),
        t && t.proxy,
        s.map(
          ({ vnode: r }) => `at <${Pt(t, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...n];
    s.length && r.push(`
`, ...To(s)), console.warn(...r);
  }
  ke(), Xe = !1;
}
function Oo() {
  let e = q[q.length - 1];
  if (!e)
    return [];
  const n = [];
  for (; e; ) {
    const t = n[0];
    t && t.vnode === e ? t.recurseCount++ : n.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return n;
}
function To(e) {
  const n = [];
  return e.forEach((t, o) => {
    n.push(...o === 0 ? [] : [`
`], ...Ro(t));
  }), n;
}
function Ro({ vnode: e, recurseCount: n }) {
  const t = n > 0 ? `... (${n} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Pt(
    e.component,
    e.type,
    o
  )}`, r = ">" + t;
  return e.props ? [s, ...Po(e.props), r] : [s + r];
}
function Po(e) {
  const n = [], t = Object.keys(e);
  return t.slice(0, 3).forEach((o) => {
    n.push(...Mt(o, e[o]));
  }), t.length > 3 && n.push(" ..."), n;
}
function Mt(e, n, t) {
  return V(n) ? (n = JSON.stringify(n), t ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? t ? n : [`${e}=${n}`] : S(n) ? (n = Mt(e, d(n.value), !0), t ? n : [`${e}=Ref<`, n, ">"]) : A(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = d(n), t ? n : [`${e}=`, n]);
}
const wn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function We(e, n, t, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    On(s, n, t);
  }
}
function vn(e, n, t, o) {
  if (A(e)) {
    const s = We(e, n, t, o);
    return s && Kt(s) && s.catch((r) => {
      On(r, n, t);
    }), s;
  }
  if (M(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(vn(e[r], n, t, o));
    return s;
  } else process.env.NODE_ENV !== "production" && D(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function On(e, n, t, o = !0) {
  const s = n ? n.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: a } = n && n.appContext.config || P;
  if (n) {
    let i = n.parent;
    const c = n.proxy, l = process.env.NODE_ENV !== "production" ? wn[t] : `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; i; ) {
      const p = i.ec;
      if (p) {
        for (let u = 0; u < p.length; u++)
          if (p[u](e, c, l) === !1)
            return;
      }
      i = i.parent;
    }
    if (r) {
      be(), We(r, null, 10, [
        e,
        c,
        l
      ]), ke();
      return;
    }
  }
  xo(e, t, s, o, a);
}
function xo(e, n, t, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = wn[n];
    if (t && wo(t), D(`Unhandled error${r ? ` during execution of ${r}` : ""}`), t && vo(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const R = [];
let $ = -1;
const le = [];
let j = null, oe = 0;
const Dt = /* @__PURE__ */ Promise.resolve();
let Fe = null;
const Io = 100;
function Vo(e) {
  const n = Fe || Dt;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function Lo(e) {
  let n = $ + 1, t = R.length;
  for (; n < t; ) {
    const o = n + t >>> 1, s = R[o], r = ze(s);
    r < e || r === e && s.flags & 2 ? n = o + 1 : t = o;
  }
  return n;
}
function Tn(e) {
  if (!(e.flags & 1)) {
    const n = ze(e), t = R[R.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= ze(t) ? R.push(e) : R.splice(Lo(n), 0, e), e.flags |= 1, Ct();
  }
}
function Ct() {
  Fe || (Fe = Dt.then(Et));
}
function _t(e) {
  M(e) ? le.push(...e) : j && e.id === -1 ? j.splice(oe + 1, 0, e) : e.flags & 1 || (le.push(e), e.flags |= 1), Ct();
}
function $o(e) {
  if (le.length) {
    const n = [...new Set(le)].sort(
      (t, o) => ze(t) - ze(o)
    );
    if (le.length = 0, j) {
      j.push(...n);
      return;
    }
    for (j = n, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), oe = 0; oe < j.length; oe++) {
      const t = j[oe];
      process.env.NODE_ENV !== "production" && zt(e, t) || (t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2);
    }
    j = null, oe = 0;
  }
}
const ze = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Et(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const n = process.env.NODE_ENV !== "production" ? (t) => zt(e, t) : ie;
  try {
    for ($ = 0; $ < R.length; $++) {
      const t = R[$];
      if (t && !(t.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && n(t))
          continue;
        t.flags & 4 && (t.flags &= -2), We(
          t,
          t.i,
          t.i ? 15 : 14
        ), t.flags & 4 || (t.flags &= -2);
      }
    }
  } finally {
    for (; $ < R.length; $++) {
      const t = R[$];
      t && (t.flags &= -2);
    }
    $ = -1, R.length = 0, $o(e), Fe = null, (R.length || le.length) && Et(e);
  }
}
function zt(e, n) {
  const t = e.get(n) || 0;
  if (t > Io) {
    const o = n.i, s = o && Rt(o.type);
    return On(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(n, t + 1), !1;
}
const en = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Ue().__VUE_HMR_RUNTIME__ = {
  createRecord: nn(Fo),
  rerender: nn(Bo),
  reload: nn(jo)
});
const Be = /* @__PURE__ */ new Map();
function Fo(e, n) {
  return Be.has(e) ? !1 : (Be.set(e, {
    initialDef: je(n),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function je(e) {
  return xt(e) ? e.__vccOpts : e;
}
function Bo(e, n) {
  const t = Be.get(e);
  t && (t.initialDef.render = n, [...t.instances].forEach((o) => {
    n && (o.render = n, je(o.type).render = n), o.renderCache = [], o.update();
  }));
}
function jo(e, n) {
  const t = Be.get(e);
  if (!t) return;
  n = je(n), Ln(t.initialDef, n);
  const o = [...t.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], a = je(r.type);
    let i = en.get(a);
    i || (a !== t.initialDef && Ln(a, n), en.set(a, i = /* @__PURE__ */ new Set())), i.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (i.add(r), r.ceReload(n.styles), i.delete(r)) : r.parent ? Tn(() => {
      r.parent.update(), i.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(a);
  }
  _t(() => {
    en.clear();
  });
}
function Ln(e, n) {
  O(e, n);
  for (const t in e)
    t !== "__file" && !(t in n) && delete e[t];
}
function nn(e) {
  return (n, t) => {
    try {
      return e(n, t);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let se, Pe = [];
function At(e, n) {
  var t, o;
  se = e, se ? (se.enabled = !0, Pe.forEach(({ event: s, args: r }) => se.emit(s, ...r)), Pe = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (t = window.navigator) == null ? void 0 : t.userAgent) != null && o.includes("jsdom")) ? ((n.__VUE_DEVTOOLS_HOOK_REPLAY__ = n.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    At(r, n);
  }), setTimeout(() => {
    se || (n.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Pe = []);
  }, 3e3)) : Pe = [];
}
let Z = null, Ho = null;
const Ko = (e) => e.__isTeleport;
function St(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, St(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
Ue().requestIdleCallback;
Ue().cancelIdleCallback;
function Go(e, n, t = X, o = !1) {
  if (t) {
    const s = t[e] || (t[e] = []), r = n.__weh || (n.__weh = (...a) => {
      be();
      const i = Tt(t), c = vn(n, t, e, a);
      return i(), ke(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Wt(wn[e].replace(/ hook$/, ""));
    D(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Uo = (e) => (n, t = X) => {
  (!Ae || e === "sp") && Go(e, (...o) => n(...o), t);
}, Ps = Uo("um"), Wo = Symbol.for("v-ndc"), pn = (e) => e ? ms(e) ? Ms(e) : pn(e.parent) : null, me = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ O(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Te(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Te(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Te(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Te(e.refs) : e.refs,
    $parent: (e) => pn(e.parent),
    $root: (e) => pn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Tn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Vo.bind(e.proxy)),
    $watch: (e) => rs.bind(e)
  })
), tn = (e, n) => e !== P && !e.__isScriptSetup && E(e, n), Jo = {
  get({ _: e }, n) {
    if (n === "__v_skip")
      return !0;
    const { ctx: t, setupState: o, data: s, props: r, accessCache: a, type: i, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && n === "__isVue")
      return !0;
    let l;
    if (n[0] !== "$") {
      const h = a[n];
      if (h !== void 0)
        switch (h) {
          case 1:
            return o[n];
          case 2:
            return s[n];
          case 4:
            return t[n];
          case 3:
            return r[n];
        }
      else {
        if (tn(o, n))
          return a[n] = 1, o[n];
        if (s !== P && E(s, n))
          return a[n] = 2, s[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (l = e.propsOptions[0]) && E(l, n)
        )
          return a[n] = 3, r[n];
        if (t !== P && E(t, n))
          return a[n] = 4, t[n];
        a[n] = 0;
      }
    }
    const p = me[n];
    let u, f;
    if (p)
      return n === "$attrs" ? (z(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && n === "$slots" && z(e, "get", n), p(e);
    if (
      // css module (injected by vue-loader)
      (u = i.__cssModules) && (u = u[n])
    )
      return u;
    if (t !== P && E(t, n))
      return a[n] = 4, t[n];
    if (
      // global properties
      f = c.config.globalProperties, E(f, n)
    )
      return f[n];
    process.env.NODE_ENV;
  },
  set({ _: e }, n, t) {
    const { data: o, setupState: s, ctx: r } = e;
    return tn(s, n) ? (s[n] = t, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && E(s, n) ? (D(`Cannot mutate <script setup> binding "${n}" from Options API.`), !1) : o !== P && E(o, n) ? (o[n] = t, !0) : E(e.props, n) ? (process.env.NODE_ENV !== "production" && D(`Attempting to mutate prop "${n}". Props are readonly.`), !1) : n[0] === "$" && n.slice(1) in e ? (process.env.NODE_ENV !== "production" && D(
      `Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && n in e.appContext.config.globalProperties ? Object.defineProperty(r, n, {
      enumerable: !0,
      configurable: !0,
      value: t
    }) : r[n] = t, !0);
  },
  has({
    _: { data: e, setupState: n, accessCache: t, ctx: o, appContext: s, propsOptions: r }
  }, a) {
    let i;
    return !!t[a] || e !== P && E(e, a) || tn(n, a) || (i = r[0]) && E(i, a) || E(o, a) || E(me, a) || E(s.config.globalProperties, a);
  },
  defineProperty(e, n, t) {
    return t.get != null ? e._.accessCache[n] = 0 : E(t, "value") && this.set(e, n, t.value, null), Reflect.defineProperty(e, n, t);
  }
};
process.env.NODE_ENV !== "production" && (Jo.ownKeys = (e) => (D(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function $n(e) {
  return M(e) ? e.reduce(
    (n, t) => (n[t] = null, n),
    {}
  ) : e;
}
function Yo(e) {
  const n = e.type, { mixins: t, extends: o } = n, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: a }
  } = e.appContext, i = r.get(n);
  let c;
  return i ? c = i : !s.length && !t && !o ? c = n : (c = {}, s.length && s.forEach(
    (l) => He(c, l, a, !0)
  ), He(c, n, a)), w(n) && r.set(n, c), c;
}
function He(e, n, t, o = !1) {
  const { mixins: s, extends: r } = n;
  r && He(e, r, t, !0), s && s.forEach(
    (a) => He(e, a, t, !0)
  );
  for (const a in n)
    if (o && a === "expose")
      process.env.NODE_ENV !== "production" && D(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const i = qo[a] || t && t[a];
      e[a] = i ? i(e[a], n[a]) : n[a];
    }
  return e;
}
const qo = {
  data: Fn,
  props: jn,
  emits: jn,
  // objects
  methods: he,
  computed: he,
  // lifecycle
  beforeCreate: b,
  created: b,
  beforeMount: b,
  mounted: b,
  beforeUpdate: b,
  updated: b,
  beforeDestroy: b,
  beforeUnmount: b,
  destroyed: b,
  unmounted: b,
  activated: b,
  deactivated: b,
  errorCaptured: b,
  serverPrefetch: b,
  // assets
  components: he,
  directives: he,
  // watch
  watch: Qo,
  // provide / inject
  provide: Fn,
  inject: Zo
};
function Fn(e, n) {
  return n ? e ? function() {
    return O(
      A(e) ? e.call(this, this) : e,
      A(n) ? n.call(this, this) : n
    );
  } : n : e;
}
function Zo(e, n) {
  return he(Bn(e), Bn(n));
}
function Bn(e) {
  if (M(e)) {
    const n = {};
    for (let t = 0; t < e.length; t++)
      n[e[t]] = e[t];
    return n;
  }
  return e;
}
function b(e, n) {
  return e ? [...new Set([].concat(e, n))] : n;
}
function he(e, n) {
  return e ? O(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function jn(e, n) {
  return e ? M(e) && M(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : O(
    /* @__PURE__ */ Object.create(null),
    $n(e),
    $n(n ?? {})
  ) : n;
}
function Qo(e, n) {
  if (!e) return n;
  if (!n) return e;
  const t = O(/* @__PURE__ */ Object.create(null), e);
  for (const o in n)
    t[o] = b(e[o], n[o]);
  return t;
}
let Xo = null;
function es(e, n, t = !1) {
  const o = X || Z;
  if (o || Xo) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return t && A(n) ? n.call(o && o.proxy) : n;
    process.env.NODE_ENV !== "production" && D(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && D("inject() can only be used inside setup() or functional components.");
}
const ns = {}, bt = (e) => Object.getPrototypeOf(e) === ns, ts = us, os = Symbol.for("v-scx"), ss = () => {
  {
    const e = es(os);
    return e || process.env.NODE_ENV !== "production" && D(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function xs(e, n) {
  return kt(e, null, n);
}
function kt(e, n, t = P) {
  const { immediate: o, deep: s, flush: r, once: a } = t;
  process.env.NODE_ENV !== "production" && !n && (o !== void 0 && D(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && D(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), a !== void 0 && D(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const i = O({}, t);
  process.env.NODE_ENV !== "production" && (i.onWarn = D);
  const c = n && o || !n && r !== "post";
  let l;
  if (Ae) {
    if (r === "sync") {
      const h = ss();
      l = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!c) {
      const h = () => {
      };
      return h.stop = ie, h.resume = ie, h.pause = ie, h;
    }
  }
  const p = X;
  i.call = (h, _, T) => vn(h, p, _, T);
  let u = !1;
  r === "post" ? i.scheduler = (h) => {
    ts(h, p && p.suspense);
  } : r !== "sync" && (u = !0, i.scheduler = (h, _) => {
    _ ? h() : Tn(h);
  }), i.augmentJob = (h) => {
    n && (h.flags |= 4), u && (h.flags |= 2, p && (h.id = p.uid, h.i = p));
  };
  const f = No(e, n, i);
  return Ae && (l ? l.push(f) : c && f()), f;
}
function rs(e, n, t) {
  const o = this.proxy, s = V(e) ? e.includes(".") ? as(o, e) : () => o[e] : e.bind(o, o);
  let r;
  A(n) ? r = n : (r = n.handler, t = n);
  const a = Tt(this), i = kt(s, r.bind(o), t);
  return a(), i;
}
function as(e, n) {
  const t = n.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < t.length && o; s++)
      o = o[t[s]];
    return o;
  };
}
const is = (e) => e.__isSuspense;
function us(e, n) {
  n && n.pendingBranch ? M(e) ? n.effects.push(...e) : n.effects.push(e) : _t(e);
}
const Nt = Symbol.for("v-fgt"), cs = Symbol.for("v-txt"), ls = Symbol.for("v-cmt");
let re = null;
function hn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const fs = (...e) => vt(
  ...e
), wt = ({ key: e }) => e ?? null, Ie = ({
  ref: e,
  ref_key: n,
  ref_for: t
}) => (typeof e == "number" && (e = "" + e), e != null ? V(e) || S(e) || A(e) ? { i: Z, r: e, k: n, f: !!t } : e : null);
function ps(e, n = null, t = null, o = 0, s = null, r = e === Nt ? 0 : 1, a = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && wt(n),
    ref: n && Ie(n),
    scopeId: Ho,
    slotScopeIds: null,
    children: t,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Z
  };
  return i ? (Rn(c, t), r & 128 && e.normalize(c)) : t && (c.shapeFlag |= V(t) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && D("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !a && // has current parent block
  re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && re.push(c), c;
}
const de = process.env.NODE_ENV !== "production" ? fs : vt;
function vt(e, n = null, t = null, o = 0, s = null, r = !1) {
  if ((!e || e === Wo) && (process.env.NODE_ENV !== "production" && !e && D(`Invalid vnode type when creating vnode: ${e}.`), e = ls), hn(e)) {
    const i = Ke(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return t && Rn(i, t), !r && re && (i.shapeFlag & 6 ? re[re.indexOf(e)] = i : re.push(i)), i.patchFlag = -2, i;
  }
  if (xt(e) && (e = e.__vccOpts), n) {
    n = hs(n);
    let { class: i, style: c } = n;
    i && !V(i) && (n.class = _n(i)), w(c) && (Le(c) && !M(c) && (c = O({}, c)), n.style = Cn(c));
  }
  const a = V(e) ? 1 : is(e) ? 128 : Ko(e) ? 64 : w(e) ? 4 : A(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && Le(e) && (e = d(e), D(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ps(
    e,
    n,
    t,
    o,
    s,
    a,
    r,
    !0
  );
}
function hs(e) {
  return e ? Le(e) || bt(e) ? O({}, e) : e : null;
}
function Ke(e, n, t = !1, o = !1) {
  const { props: s, ref: r, patchFlag: a, children: i, transition: c } = e, l = n ? gs(s || {}, n) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && wt(l),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && r ? M(r) ? r.concat(Ie(n)) : [r, Ie(n)] : Ie(n)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && a === -1 && M(i) ? i.map(Ot) : i,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: n && e.type !== Nt ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ke(e.ssContent),
    ssFallback: e.ssFallback && Ke(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && o && St(
    p,
    c.clone(p)
  ), p;
}
function Ot(e) {
  const n = Ke(e);
  return M(e.children) && (n.children = e.children.map(Ot)), n;
}
function ds(e = " ", n = 0) {
  return de(cs, null, e, n);
}
function Rn(e, n) {
  let t = 0;
  const { shapeFlag: o } = e;
  if (n == null)
    n = null;
  else if (M(n))
    t = 16;
  else if (typeof n == "object")
    if (o & 65) {
      const s = n.default;
      s && (s._c && (s._d = !1), Rn(e, s()), s._c && (s._d = !0));
      return;
    } else
      t = 32, !n._ && !bt(n) && (n._ctx = Z);
  else A(n) ? (n = { default: n, _ctx: Z }, t = 32) : (n = String(n), o & 64 ? (t = 16, n = [ds(n)]) : t = 8);
  e.children = n, e.shapeFlag |= t;
}
function gs(...e) {
  const n = {};
  for (let t = 0; t < e.length; t++) {
    const o = e[t];
    for (const s in o)
      if (s === "class")
        n.class !== o.class && (n.class = _n([n.class, o.class]));
      else if (s === "style")
        n.style = Cn([n.style, o.style]);
      else if (Bt(s)) {
        const r = n[s], a = o[s];
        a && r !== a && !(M(r) && r.includes(a)) && (n[s] = r ? [].concat(r, a) : a);
      } else s !== "" && (n[s] = o[s]);
  }
  return n;
}
let X = null;
const ys = () => X || Z;
let dn;
{
  const e = Ue(), n = (t, o) => {
    let s;
    return (s = e[t]) || (s = e[t] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((a) => a(r)) : s[0](r);
    };
  };
  dn = n(
    "__VUE_INSTANCE_SETTERS__",
    (t) => X = t
  ), n(
    "__VUE_SSR_SETTERS__",
    (t) => Ae = t
  );
}
const Tt = (e) => {
  const n = X;
  return dn(e), e.scope.on(), () => {
    e.scope.off(), dn(n);
  };
};
function ms(e) {
  return e.vnode.shapeFlag & 4;
}
let Ae = !1;
process.env.NODE_ENV;
function Ms(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ao(Do(e.exposed)), {
    get(n, t) {
      if (t in n)
        return n[t];
      if (t in me)
        return me[t](e);
    },
    has(n, t) {
      return t in n || t in me;
    }
  })) : e.proxy;
}
const Ds = /(?:^|[-_])(\w)/g, Cs = (e) => e.replace(Ds, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function Rt(e, n = !0) {
  return A(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Pt(e, n, t = !1) {
  let o = Rt(n);
  if (!o && n.__file) {
    const s = n.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const a in r)
        if (r[a] === n)
          return a;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? Cs(o) : t ? "App" : "Anonymous";
}
function xt(e) {
  return A(e) && "__vccOpts" in e;
}
const Is = (e, n) => {
  const t = bo(e, n, Ae);
  if (process.env.NODE_ENV !== "production") {
    const o = ys();
    o && o.appContext.config.warnRecursiveComputed && (t._warnRecursive = !0);
  }
  return t;
};
function Vs(e, n, t) {
  const o = arguments.length;
  return o === 2 ? w(n) && !M(n) ? hn(n) ? de(e, null, [n]) : de(e, n) : de(e, null, n) : (o > 3 ? t = Array.prototype.slice.call(arguments, 2) : o === 3 && hn(t) && (t = [t]), de(e, n, t));
}
function _s() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, n = { style: "color:#1677ff" }, t = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(u) {
      return w(u) ? u.__isVue ? ["div", e, "VueInstance"] : S(u) ? [
        "div",
        {},
        ["span", e, p(u)],
        "<",
        // avoid debugger accessing value affecting behavior
        i("_value" in u ? u._value : u),
        ">"
      ] : ce(u) ? [
        "div",
        {},
        ["span", e, v(u) ? "ShallowReactive" : "Reactive"],
        "<",
        i(u),
        `>${B(u) ? " (readonly)" : ""}`
      ] : B(u) ? [
        "div",
        {},
        ["span", e, v(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        i(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...r(u.$)
        ];
    }
  };
  function r(u) {
    const f = [];
    u.type.props && u.props && f.push(a("props", d(u.props))), u.setupState !== P && f.push(a("setup", u.setupState)), u.data !== P && f.push(a("data", d(u.data)));
    const h = c(u, "computed");
    h && f.push(a("computed", h));
    const _ = c(u, "inject");
    return _ && f.push(a("injected", _)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), f;
  }
  function a(u, f) {
    return f = O({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((h) => [
          "div",
          {},
          ["span", o, h + ": "],
          i(f[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(u, f = !0) {
    return typeof u == "number" ? ["span", n, u] : typeof u == "string" ? ["span", t, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : w(u) ? ["object", { object: f ? d(u) : u }] : ["span", t, String(u)];
  }
  function c(u, f) {
    const h = u.type;
    if (A(h))
      return;
    const _ = {};
    for (const T in u.ctx)
      l(h, T, f) && (_[T] = u.ctx[T]);
    return _;
  }
  function l(u, f, h) {
    const _ = u[h];
    if (M(_) && _.includes(f) || w(_) && f in _ || u.extends && l(u.extends, f, h) || u.mixins && u.mixins.some((T) => l(T, f, h)))
      return !0;
  }
  function p(u) {
    return v(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Es() {
  _s();
}
process.env.NODE_ENV !== "production" && Es();
function on(e) {
  return S(e) ? e.value : e;
}
function zs(e, n = "=", t = "&") {
  return Ve(
    e,
    (o, s) => `${s}${n}${encodeURIComponent(String(o).trim())}`
  ).sort().join(t);
}
function Q() {
  return typeof window < "u";
}
function Je(e) {
  return e == null;
}
function xe(e) {
  if (e)
    switch (typeof e) {
      case "bigint":
      case "number":
        return e !== 0;
      case "boolean":
        return e;
      case "function":
      case "symbol":
        return !0;
      case "object":
        return Array.isArray(e) ? e.length > 0 : Object.values(e).some((n) => !Je(n));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(e);
      case "undefined":
        return !1;
      default:
        return !!e;
    }
  return !1;
}
function te(e) {
  return Mn(e) && !Array.isArray(e);
}
function Hn(e) {
  return typeof e == "string";
}
function As(e, n) {
  return Math.floor(Math.random() * (n - e + 1) + e);
}
function gn(e) {
  return Array.isArray(e) ? e : [e];
}
function It(e) {
  return Q() && e === window;
}
function ae(e) {
  if (It(e))
    return document.body;
  if (typeof e == "string")
    try {
      return document.querySelector(e) ?? void 0;
    } catch {
      return;
    }
  return e;
}
function Kn(e) {
  return It(e) ? e : ae(e);
}
function Ss(e) {
  var n;
  return !!((n = ae(e)) != null && n.closest("html"));
}
class Gn {
  /**
   * Classes Constructor
   * @param elementSelector element/ элемент
   * @param type type/ тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs/ объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics/ объект options
   * @param detail an event-dependent value associated with the event/ зависимое от события
   * значение, связанное с событием
   */
  constructor(n, t = ["click"], o, s, r) {
    /**
     * Element.
     *
     * Элемент.
     */
    y(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.
     *
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     */
    y(this, "elementControl");
    y(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.
     *
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     */
    y(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.
     *
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     */
    y(this, "listenerRecent", (n) => {
      var t, o;
      Ss(this.elementControl) ? ((t = this.listener) == null || t.call(this.element, n, this.detail), Mn(this.options) && ((o = this.options) != null && o.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    y(this, "activity", !1);
    y(this, "activityItems", []);
    this.listener = o, this.options = s, this.detail = r, this.element = Kn(n), this.elementControl = ae(n), this.type = gn(t);
  }
  /**
   * Checks whether event listening is currently enabled.
   *
   * Проверяет, включено ли сейчас прослушивание события.
   */
  isActive() {
    return this.activity;
  }
  getElement() {
    return this.element;
  }
  /**
   * Change of an element for tracking.
   *
   * Изменение элемента для прослеживания.
   * @param elementSelector element/ элемент
   */
  setElement(n) {
    const t = Kn(n);
    return this.elementControlEdit || (this.elementControl = ae(n)), this.element = t, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(n) {
    return this.elementControl = ae(n), this.elementControlEdit = !Je(this.elementControl), this.elementControlEdit || (this.elementControl = ae(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(n) {
    return this.type = gn(n), this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param listener
   */
  setListener(n) {
    return this.listener = n, this;
  }
  /**
   * Modifying the options object that defines the characteristics of an object.
   *
   * Изменение объекта options, который определяет характеристики объекта.
   * @param options
   */
  setOptions(n) {
    return this.options = n, this.reset(), this;
  }
  /**
   * Modifying a dependent value for the dispatch method.
   *
   * Изменение зависимого значения для метода dispatch.
   * @param detail
   */
  setDetail(n) {
    return this.detail = n, this;
  }
  /**
   * The method of the EventTarget sends an Event to the object, (synchronously) invoking
   * the affected EventListeners in the appropriate order.
   *
   * Отправляет событие в общую систему событий. Это событие подчиняется тем же правилам
   * поведения "Захвата" и "Всплывания" как и непосредственно инициированные события.
   * @param detail an event-dependent value associated with the event/ зависимое от события
   * значение, связанное с событием
   */
  dispatch(n = this.detail) {
    return this.type.forEach(
      (t) => {
        var o;
        return (o = this.element) == null ? void 0 : o.dispatchEvent(new CustomEvent(t, { detail: n }));
      }
    ), this;
  }
  /**
   * Starting event listening.
   *
   * Запуск прослушивания события.
   */
  start() {
    return this.activity || (this.activity = !0, this.activityItems = [], this.type.forEach((n) => {
      this.element && !(n === "resize" && this.makeResize()) && !(n === "scroll-sync" && this.makeScroll()) && (this.element.addEventListener(n, this.listenerRecent, this.options), this.activityItems.push({
        element: this.element,
        type: n
      }));
    })), this;
  }
  /**
   * Stopping event listening.
   *
   * Остановка прослушивания события.
   */
  stop() {
    return this.activity && (this.activity = !1, this.activityItems.forEach(({
      element: n,
      type: t,
      listener: o,
      observer: s
    }) => {
      s ? s.disconnect() : o ? n == null || n.removeEventListener(t, o) : n == null || n.removeEventListener(t, this.listenerRecent);
    })), this;
  }
  /**
   * Toggling event handler state.
   *
   * Переключение состояния работы события.
   * @param activity event activation/ активация события
   */
  toggle(n) {
    return n ? this.start() : this.stop();
  }
  /**
   * Overloads the listening events.
   *
   * Перегружает события прослушивания.
   */
  reset() {
    return this.activity && (this.stop(), this.start()), this;
  }
  /**
   * Checks if the ResizeObserver object exists.
   *
   * Проверяет, существует ли объект ResizeObserver.
   */
  isObserver() {
    return "ResizeObserver" in window;
  }
  /**
   * The implementation of the resize event for an element.
   *
   * Реализация события изменения размера для элемента.
   */
  makeResize() {
    if (this.element && this.element instanceof HTMLElement && this.element !== document.body && this.isObserver()) {
      const n = new ResizeObserver(
        (t) => this.listenerRecent(t == null ? void 0 : t[0])
      );
      return n.observe(this.element), this.activityItems.push({
        element: this.element,
        type: "resize",
        observer: n
      }), !0;
    }
    return !1;
  }
  /**
   * Implementation of the scroll event for an element.
   *
   * Реализация события изменения положения скролла для элемента.
   */
  makeScroll() {
    if (this.element) {
      let n = !1;
      const t = (o) => {
        n || (n = !0, requestAnimationFrame(() => {
          this.listenerRecent(o), n = !1;
        }));
      };
      return this.element.addEventListener("scroll", t, this.options), this.element.addEventListener("resize", t, this.options), this.activityItems.push(
        {
          element: this.element,
          type: "scroll",
          listener: t
        },
        {
          element: this.element,
          type: "resize",
          listener: t
        }
      ), !0;
    }
    return !1;
  }
}
const Un = "ui-loading", De = class De {
  /**
   * Check if the loader is active now.
   *
   * Проверить, активен ли сейчас загрузчик.
   */
  static is() {
    return this.value > 0;
  }
  /**
   * Shows the loader.
   *
   * Показывает загрузчик.
   */
  static show() {
    this.value++, this.dispatch();
  }
  /**
   * Hides the loader.
   *
   * Скрывает загрузчик.
   */
  static hide() {
    this.is() && (this.value--, this.dispatch());
  }
  /**
   * Event registration to listen for data changes.
   *
   * Регистрация события для прослушивания изменений данных.
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs/ объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param element element/ элемент
   */
  static registrationEvent(n, t) {
    new Gn(window, Un, n).setElementControl(t).start();
  }
  /**
   * Calls the event listener.
   *
   * Вызывает слушателя событий.
   */
  static dispatch() {
    var n;
    (n = this.event) == null || n.dispatch({ loading: this.is() });
  }
};
y(De, "value", 0), y(De, "event"), Q() && (De.event = new Gn(window, Un));
let J = De;
function bs(e) {
  return JSON.parse(JSON.stringify(e));
}
function ks(e, n) {
  return Je(e) ? !1 : Array.isArray(n) ? n.includes(e) : e === n;
}
let Wn = "ui-storage";
class Ns {
  /**
   * Constructor
   * @param name value name /<br>название значения
   * @param isSession should we use a session? /<br>использовать ли сессию?
   */
  constructor(n, t = !1) {
    y(this, "value");
    y(this, "age");
    this.name = n, this.isSession = t;
    const o = `${t ? "session" : "storage"}#${n}`;
    if (o in sn)
      return sn[o];
    const s = this.getValue();
    s && (this.value = s.value, this.age = s.age), sn[o] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(n) {
    Wn = n;
  }
  /**
   * Getting data from local storage.<br>
   * Получение данных из локального хранилища.
   * @param defaultValue default value /<br>значение по умолчанию
   * @param cache cache time /<br>время кэширования
   */
  get(n, t) {
    if (this.value !== null && this.value !== void 0 && this.isCache(t))
      return this.value;
    if (n !== void 0)
      return this.set(n);
  }
  /**
   * Changing data in storage.<br>
   * Изменение данных в хранилище.
   * @param value new values /<br>новые значения
   */
  set(n) {
    var t, o;
    return this.value = mn(n), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? (t = this.getMethod()) == null || t.removeItem(this.getIndex()) : (o = this.getMethod()) == null || o.setItem(this.getIndex(), JSON.stringify({
      value: this.value,
      age: this.age
    })), this.value;
  }
  /**
   * Checks for storage time limit.<br>
   * Проверяет на лимит времени хранения.
   * @param cache cache time /<br>время кэширования
   */
  isCache(n) {
    return Je(n) || this.age && this.age + n * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (Q())
      return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${Wn}${this.name}`;
  }
  /**
   * Getting data from storage.<br>
   * Получение данных из хранилища.
   */
  getValue() {
    var t;
    const n = (t = this.getMethod()) == null ? void 0 : t.getItem(this.getIndex());
    if (n)
      try {
        return JSON.parse(n);
      } catch (o) {
        console.error("DataStorage", o);
      }
  }
}
const sn = {}, ws = /* @__PURE__ */ JSON.parse('[{"country":"US","countryAlternative":["EN"],"language":"en","languageAlternative":["us"],"firstDay":"Su","zone":"America/New_York","phoneCode":"1","phoneMask":["+1-***-***-****"]},{"country":"GB","countryAlternative":["UK"],"language":"en","firstDay":"Mo","zone":"Europe/London","phoneCode":"44","phoneMask":["+44-**-****-****"]},{"country":"AF","language":"fa","firstDay":"Sa","zone":"Asia/Kabul","phoneCode":"93","phoneMask":["+93-**-***-****"]},{"country":"AL","language":"sq","firstDay":"Mo","zone":"Europe/Tirane","phoneCode":"355","phoneMask":["+355-***-***-***"]},{"country":"DZ","language":"ar","firstDay":"Sa","zone":"Africa/Algiers","phoneCode":"213","phoneMask":["+213-**-***-****"]},{"country":"AS","language":"en","firstDay":null,"zone":"Pacific/Pago_Pago","phoneCode":"1-684","phoneMask":["+1-684-***-****"]},{"country":"AD","language":"ca","firstDay":"Mo","zone":"Europe/Andorra","phoneCode":"376","phoneMask":["+376-***-***"]},{"country":"AO","language":"pt","firstDay":null,"zone":"Africa/Lagos","phoneCode":"244","phoneMask":["+244-***-***-***"]},{"country":"AI","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-264","phoneMask":["+1-264-***-****"]},{"country":"AQ","language":"en","firstDay":null,"zone":"Antarctica/Troll","phoneCode":"672","phoneMask":["+672-1-**-***"]},{"country":"AG","language":"en","firstDay":null,"zone":"America/Antigua","phoneCode":"1-268","phoneMask":["+1-268-***-****"]},{"country":"AR","language":"es","firstDay":"Su","zone":"America/Argentina/Buenos_Aires","phoneCode":"54","phoneMask":["+54-***-***-****"]},{"country":"AM","language":"hy","firstDay":"Mo","zone":"Asia/Yerevan","phoneCode":"374","phoneMask":["+374-**-***-***"]},{"country":"AW","language":"nl","firstDay":null,"zone":"America/Curacao","phoneCode":"297","phoneMask":["+297-***-****"]},{"country":"AU","language":"en","firstDay":"Mo","zone":"Australia/Sydney","phoneCode":"61","phoneMask":["+61-*-****-****"]},{"country":"AT","language":"de","firstDay":"Mo","zone":"Europe/Vienna","phoneCode":"43","phoneMask":["+43-***-***-****","+43-***-***-*****"]},{"country":"AZ","language":"az","firstDay":"Mo","zone":"Asia/Baku","phoneCode":"994","phoneMask":"+994-**-***-**-**"},{"country":"BS","language":"en","firstDay":null,"zone":"America/Nassau","phoneCode":"1-242","phoneMask":"+1-242-***-****"},{"country":"BH","language":"ar","firstDay":"Sa","zone":"Asia/Bahrain","phoneCode":"973","phoneMask":"+973-****-****"},{"country":"BD","language":"bn","firstDay":null,"zone":"Asia/Dhaka","phoneCode":"880","phoneMask":"+880-**-***-***"},{"country":"BB","language":"en","firstDay":null,"zone":"America/Barbados","phoneCode":"1-246","phoneMask":"+1-246-***-****"},{"country":"BY","language":"be","firstDay":"Mo","zone":"Europe/Minsk","phoneCode":"375","phoneMask":"+375-**-***-**-**"},{"country":"BE","language":"nl","firstDay":"Mo","zone":"Europe/Brussels","phoneCode":"32","phoneMask":"+32-***-***-***"},{"country":"BZ","language":"en","firstDay":"Su","zone":"America/Belize","phoneCode":"501","phoneMask":"+501-***-****"},{"country":"BJ","language":"fr","firstDay":null,"zone":"Africa/Lagos","phoneCode":"229","phoneMask":"+229-**-**-****"},{"country":"BM","language":"en","firstDay":null,"zone":"Atlantic/Bermuda","phoneCode":"1-441","phoneMask":"+1-441-***-****"},{"country":"BT","language":"dz","firstDay":null,"zone":"Asia/Thimphu","phoneCode":"975","phoneMask":["+975-*-***-***","+975-17-***-***"]},{"country":"BO","language":"es","firstDay":"Su","zone":"America/La_Paz","phoneCode":"591","phoneMask":"+591-*-***-****"},{"country":"BA","language":"bs","firstDay":null,"zone":"Europe/Belgrade","phoneCode":"387","phoneMask":["+387-**-****","+387-**-*****"]},{"country":"BW","language":"en","firstDay":null,"zone":"Africa/Maputo","phoneCode":"267","phoneMask":"+267-**-***-***"},{"country":"BR","language":"pt","firstDay":"Su","zone":"America/Sao_Paulo","phoneCode":"55","phoneMask":["+55-**-****-****","+55-**-*****-****"]},{"country":"IO","language":"en","firstDay":null,"zone":"Indian/Chagos","phoneCode":"246","phoneMask":"+246-***-****"},{"country":"VG","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-284","phoneMask":"+1-284-***-****"},{"country":"BN","language":"ms","firstDay":"Mo","zone":"Asia/Brunei","phoneCode":"673","phoneMask":"+673-***-****"},{"country":"BG","language":"bg","firstDay":"Mo","zone":"Europe/Sofia","phoneCode":"359","phoneMask":"+359-***-***-***"},{"country":"BF","language":"fr","firstDay":null,"zone":"Africa/Abidjan","phoneCode":"226","phoneMask":"+226-**-**-****"},{"country":"BI","language":"fr","firstDay":null,"zone":"Africa/Maputo","phoneCode":"257","phoneMask":"+257-**-**-****"},{"country":"KH","language":"km","firstDay":null,"zone":"Asia/Phnom_Penh","phoneCode":"855","phoneMask":"+855-**-***-***"},{"country":"CM","phoneCode":"237","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":"+237-****-****"},{"country":"CA","phoneCode":"1","zone":"America/Toronto","language":"en","firstDay":"Su","phoneMask":"+1-***-***-****"},{"country":"CV","phoneCode":"238","zone":"Atlantic/Cape_Verde","language":"pt","firstDay":null,"phoneMask":"+238-***-**-**"},{"country":"KY","phoneCode":"1-345","zone":"America/Cayman","language":"en","firstDay":null,"phoneMask":"+1-345-***-****"},{"country":"CF","phoneCode":"236","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+236-**-**-****"},{"country":"TD","phoneCode":"235","zone":"Africa/Ndjamena","language":"fr","firstDay":null,"phoneMask":"+235-**-**-**-**"},{"country":"CL","phoneCode":"56","zone":"America/Santiago","language":"es","firstDay":"Su","phoneMask":"+56-*-****-****"},{"country":"CN","phoneCode":"86","zone":"Asia/Shanghai","language":"zh","firstDay":"Su","phoneMask":["+86-***-****-***","+86-***-****-****","+86-**-*****-*****"]},{"country":"CX","phoneCode":"61","zone":"Indian/Christmas","language":"en","firstDay":null},{"country":"CC","phoneCode":"61","zone":"Indian/Cocos","language":"ms","firstDay":null},{"country":"CO","phoneCode":"57","zone":"America/Bogota","language":"es","firstDay":"Su","phoneMask":"+57-***-***-****"},{"country":"KM","phoneCode":"269","zone":"Indian/Comoro","language":"ar","firstDay":null,"phoneMask":"+269-**-*****"},{"country":"CK","phoneCode":"682","zone":"Pacific/Rarotonga","language":"en","firstDay":null,"phoneMask":"+682-**-***"},{"country":"CR","phoneCode":"506","zone":"America/Costa_Rica","language":"es","firstDay":"Su","phoneMask":"+506-****-****"},{"country":"HR","phoneCode":"385","zone":"Europe/Belgrade","language":"hr","firstDay":"Mo","phoneMask":"+385-**-***-***"},{"country":"CU","phoneCode":"53","zone":"America/Havana","language":"es","firstDay":null,"phoneMask":"+53-*-***-****"},{"country":"CW","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+599-***-****"},{"country":"CY","phoneCode":"357","zone":"Asia/Nicosia","language":"el","firstDay":null,"phoneMask":"+357-**-***-***"},{"country":"CZ","phoneCode":"420","zone":"Europe/Prague","language":"cs","languageAlternative":["cz"],"firstDay":"Mo","phoneMask":"+420-***-***-***"},{"country":"CD","phoneCode":"243","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+243-***-***-***"},{"country":"DK","phoneCode":"45","zone":"Europe/Copenhagen","language":"da","firstDay":"Mo","phoneMask":"+45-**-**-**-**"},{"country":"DJ","phoneCode":"253","zone":"Africa/Djibouti","language":"fr","firstDay":null,"phoneMask":"+253-**-**-**-**"},{"country":"DM","phoneCode":"1-767","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-767-***-****"},{"country":"DO","phoneCode":"1-809","zone":"North America","language":"America/Santo_Domingo","firstDay":"Su","phoneMask":["+1-809-***-****","+1-829-***-****","+1-849-***-****"]},{"country":"TL","phoneCode":"670","zone":"Asia/Dili","language":"tet","firstDay":null,"phoneMask":["+670-***-****","+670-77-*-*****","+670-78-*-*****"]},{"country":"EC","phoneCode":"593","zone":"America/Guayaquil","language":"es","firstDay":"Su","phoneMask":["+593-*-***-****","+593-**-***-****"]},{"country":"EG","phoneCode":"20","zone":"Africa/Cairo","language":"ar","firstDay":"Sa","phoneMask":"+20-***-***-****"},{"country":"SV","phoneCode":"503","zone":"America/El_Salvador","language":"es","firstDay":"Su","phoneMask":"+503-**-**-****"},{"country":"GQ","phoneCode":"240","zone":"Africa/Lagos","language":"es","firstDay":null,"phoneMask":"+240-**-***-****"},{"country":"ER","phoneCode":"291","zone":"Africa/Asmara","language":"aa","firstDay":null,"phoneMask":"+291-*-***-***"},{"country":"EE","phoneCode":"372","zone":"Europe/Tallinn","language":"et","firstDay":"Mo","phoneMask":["+372-***-****","+372-****-****"]},{"country":"ET","phoneCode":"251","zone":"Africa/Addis_Ababa","language":"am","firstDay":null,"phoneMask":"+251-**-***-****"},{"country":"FK","phoneCode":"500","zone":"Atlantic/Stanley","language":"en","firstDay":null,"phoneMask":"+500-*****"},{"country":"FO","phoneCode":"298","zone":"Atlantic/Faroe","language":"fo","firstDay":null,"phoneMask":"+298-***-***"},{"country":"FJ","phoneCode":"679","zone":"Pacific/Fiji","language":"en","firstDay":null,"phoneMask":"+679-**-*****"},{"country":"FI","phoneCode":"358","zone":"Europe/Helsinki","language":"fi","firstDay":"Mo","phoneMask":["+358-***-***-**-*","+358-***-***-**-**"]},{"country":"FR","phoneCode":"33","zone":"Europe/Paris","language":"fr","firstDay":"Mo","phoneMask":["+33-***-***-***","+262-*****-****","+508-**-****","+590-***-***-***"]},{"country":"PF","phoneCode":"689","zone":"Pacific/Tahiti","language":"fr","firstDay":null,"phoneMask":"+689-**-**-**"},{"country":"GA","phoneCode":"241","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+241-*-**-**-**"},{"country":"GM","phoneCode":"220","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+220-***-**-**"},{"country":"GE","phoneCode":"995","zone":"Asia/Tbilisi","language":"ka","firstDay":"Mo","phoneMask":"+995-***-***-***"},{"country":"DE","phoneCode":"49","zone":"Europe/Berlin","language":"de","firstDay":"Mo","phoneMask":["+49-***-***","+49-***-***-****","+49-****-***-****"]},{"country":"GH","phoneCode":"233","zone":"Africa/Accra","language":"en","firstDay":null,"phoneMask":"+233-***-***-***"},{"country":"GI","phoneCode":"350","zone":"Europe/Gibraltar","language":"en","firstDay":null,"phoneMask":"+350-***-*****"},{"country":"GR","phoneCode":"30","zone":"Europe/Athens","language":"el","firstDay":"Mo","phoneMask":"+30-***-***-****"},{"country":"GL","phoneCode":"299","zone":"America/Godthab","language":"kl","firstDay":null,"phoneMask":"+299-**-**-**"},{"country":"GD","phoneCode":"1-473","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-473-***-****"},{"country":"GU","phoneCode":"1-671","zone":"Pacific/Guam","language":"en","firstDay":null,"phoneMask":"+1-671-***-****"},{"country":"GT","phoneCode":"502","zone":"America/Guatemala","language":"es","firstDay":"Su","phoneMask":"+502-*-***-****"},{"country":"GG","phoneCode":"44-1481","zone":"Europe/London","language":"en","firstDay":null},{"country":"GN","phoneCode":"224","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+224-**-***-***"},{"country":"GW","phoneCode":"245","zone":"Africa/Bissau","language":"pt","firstDay":null,"phoneMask":"+245-*-******"},{"country":"GY","phoneCode":"592","zone":"America/Guyana","language":"en","firstDay":null,"phoneMask":"+592-***-****"},{"country":"HT","phoneCode":"509","zone":"America/Port-au-Prince","language":"ht","firstDay":null,"phoneMask":"+509-**-**-****"},{"country":"HN","phoneCode":"504","zone":"America/Tegucigalpa","language":"es","firstDay":"Su","phoneMask":"+504-****-****"},{"country":"HK","phoneCode":"852","zone":"Asia/Hong_Kong","language":"zh","firstDay":"Su","phoneMask":"+852-****-****"},{"country":"HU","phoneCode":"36","zone":"Europe/Budapest","language":"hu","firstDay":"Mo","phoneMask":"+36-***-***-***","nameFormat":"lf"},{"country":"IS","phoneCode":"354","zone":"Atlantic/Reykjavik","language":"is","firstDay":"Mo","phoneMask":"+354-***-****"},{"country":"IN","phoneCode":"91","zone":"Asia/Kolkata","language":"en","firstDay":"Mo","phoneMask":"+91-****-***-***"},{"country":"ID","phoneCode":"62","zone":"Asia/Jakarta","language":"id","firstDay":"Mo","phoneMask":["+62-**-***-**","+62-**-***-***","+62-**-***-****","+62-8-**-***-***","+62-8-**-***-****","+62-8-**-***-**-***"]},{"country":"IR","phoneCode":"98","zone":"Asia/Tehran","language":"fa","firstDay":"Sa","phoneMask":"+98-***-***-****"},{"country":"IQ","phoneCode":"964","zone":"Asia/Baghdad","language":"ar","firstDay":"Sa","phoneMask":"+964-***-***-****"},{"country":"IE","firstDay":"Mo","language":"en","phoneCode":"353","phoneMask":"+353-***-***-***","zone":"Europe/Dublin"},{"country":"IM","firstDay":null,"language":"Pound","phoneCode":"44-1624","zone":"Isle of Man"},{"country":"IL","firstDay":"Su","language":"he","languageAlternative":["il"],"phoneCode":"972","phoneMask":["+972-*-***-****","+972-5-*-***-****"],"zone":"Asia/Jerusalem"},{"country":"IT","firstDay":"Mo","language":"it","phoneCode":"39","phoneMask":"+39-***-****-***","zone":"Europe/Rome"},{"country":"CI","phoneCode":"225","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+225-**-***-***"},{"country":"JM","phoneCode":"1-876","zone":"America/Jamaica","language":"en","firstDay":"Su","phoneMask":"+1-876-***-****"},{"country":"JP","phoneCode":"81","zone":"Asia/Tokyo","language":"ja","firstDay":"Su","phoneMask":["+81-***-***-***","+81-**-****-****"],"nameFormat":"lf"},{"country":"JE","phoneCode":"44-1534","zone":"Europe/London","language":"en","firstDay":null},{"country":"JO","phoneCode":"962","zone":"Asia/Amman","language":"ar","firstDay":"Sa","phoneMask":"+962-*-****-****"},{"country":"KZ","phoneCode":"7","zone":"Asia/Almaty","language":"kk","firstDay":"Mo","phoneMask":["+7-6-**-***-**-**","+7-7-**-***-**-**"],"nameFormat":"lf"},{"country":"KE","phoneCode":"254","zone":"Africa/Nairobi","language":"en","firstDay":"Su","phoneMask":"+254-***-******"},{"country":"KI","phoneCode":"686","zone":"Pacific/Tarawa","language":"en","firstDay":null,"phoneMask":"+686-**-***"},{"country":"XK","phoneCode":"383","zone":"Europe/Belgrade","language":"sq","firstDay":"Mo"},{"country":"KW","phoneCode":"965","zone":"Asia/Kuwait","language":"ar","firstDay":"Sa","phoneMask":"+965-****-****"},{"country":"KG","phoneCode":"996","zone":"Asia/Bishkek","language":"ky","firstDay":"Mo","phoneMask":"+996-***-***-***"},{"country":"LA","phoneCode":"856","zone":"Asia/Vientiane","language":"lo","firstDay":null,"phoneMask":["+856-**-***-***","+856-20-**-***-***"]},{"country":"LV","phoneCode":"371","zone":"Europe/Riga","language":"lv","firstDay":"Mo","phoneMask":"+371-**-***-***"},{"country":"LB","phoneCode":"961","zone":"Asia/Beirut","language":"ar","firstDay":"Mo","phoneMask":["+961-*-***-***","+961-**-***-***"]},{"country":"LS","phoneCode":"266","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+266-*-***-****"},{"country":"LR","phoneCode":"231","zone":"Africa/Monrovia","language":"en","firstDay":null,"phoneMask":"+231-**-***-***"},{"country":"LY","phoneCode":"218","zone":"Africa/Tripoli","language":"ar","firstDay":"Sa","phoneMask":["+218-**-***-***","+218-21-***-****"]},{"country":"LI","phoneCode":"423","zone":"Europe/Zurich","language":"de","firstDay":null,"phoneMask":"+423-***-***-****"},{"country":"LT","phoneCode":"370","zone":"Europe/Vilnius","language":"lt","firstDay":"Mo","phoneMask":"+370-***-**-***"},{"country":"LU","phoneCode":"352","zone":"Europe/Luxembourg","language":"lb","firstDay":"Mo","phoneMask":"+352-***-***-***"},{"country":"MO","phoneCode":"853","zone":"Asia/Macau","language":"zh","firstDay":null,"phoneMask":"+853-****-****"},{"country":"MK","phoneCode":"389","zone":"Europe/Belgrade","language":"mk","firstDay":"Mo","phoneMask":"+389-**-***-***"},{"country":"MG","phoneCode":"261","zone":"Indian/Antananarivo","language":"fr","firstDay":null,"phoneMask":"+261-**-**-*****"},{"country":"MW","phoneCode":"265","zone":"Africa/Maputo","language":"ny","firstDay":null,"phoneMask":["+265-*-****-****","+265-1-***-***"]},{"country":"MY","phoneCode":"60","zone":"Asia/Kuala_Lumpur","language":"ms","firstDay":"Mo","phoneMask":["+60-*-***-***","+60-**-***-***","+60-**-***-****","+60-***-***-***"]},{"country":"MV","phoneCode":"960","zone":"Indian/Maldives","language":"dv","firstDay":null,"phoneMask":"+960-***-****"},{"country":"ML","phoneCode":"223","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+223-**-**-****"},{"country":"MT","phoneCode":"356","zone":"Europe/Malta","language":"mt","firstDay":null,"phoneMask":"+356-****-****"},{"country":"MH","phoneCode":"692","zone":"Pacific/Majuro","language":"mh","firstDay":null,"phoneMask":"+692-***-****"},{"country":"MR","phoneCode":"222","zone":"Africa/Abidjan","language":"ar","firstDay":null,"phoneMask":"+222-**-**-****"},{"country":"MU","phoneCode":"230","zone":"Indian/Mauritius","language":"en","firstDay":null,"phoneMask":"+230-***-****"},{"country":"YT","phoneCode":"262","zone":"Indian/Mayotte","language":"fr","firstDay":null},{"country":"MX","phoneCode":"52","zone":"America/Mexico_City","language":"es","firstDay":"Su","phoneMask":["+52-**-**-****","+52-***-***-****"]},{"country":"FM","phoneCode":"691","zone":"Pacific/Pohnpei","language":"en","firstDay":null,"phoneMask":"+691-***-****"},{"country":"MD","phoneCode":"373","zone":"Europe/Chisinau","language":"ro","firstDay":null,"phoneMask":"+373-****-****"},{"country":"MC","phoneCode":"377","zone":"Europe/Monaco","language":"fr","firstDay":"Mo","phoneMask":["+377-**-***-***","+377-***-***-***"]},{"country":"MN","phoneCode":"976","zone":"Asia/Ulaanbaatar","language":"mn","firstDay":"Mo","phoneMask":"+976-**-**-****"},{"country":"ME","phoneCode":"382","zone":"Europe/Belgrade","language":"sr","firstDay":null,"phoneMask":"+382-**-***-***"},{"country":"MS","phoneCode":"1-664","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-664-***-****"},{"country":"MA","phoneCode":"212","zone":"Africa/Casablanca","language":"ar","firstDay":"Mo","phoneMask":"+212-**-****-***"},{"country":"MZ","phoneCode":"258","zone":"Africa/Maputo","language":"pt","firstDay":null,"phoneMask":"+258-**-***-***"},{"country":"MM","phoneCode":"95","zone":"Asia/Rangoon","language":"my","firstDay":null,"phoneMask":["+95-***-***","+95-*-***-***","+95-**-***-***"]},{"country":"NA","phoneCode":"264","zone":"Africa/Windhoek","language":"en","firstDay":null,"phoneMask":"+264-**-***-****"},{"country":"NR","phoneCode":"674","zone":"Pacific/Nauru","language":"na","firstDay":null,"phoneMask":"+674-***-****"},{"country":"NP","phoneCode":"977","zone":"Asia/Kathmandu","language":"ne","firstDay":null,"phoneMask":"+977-**-***-***"},{"country":"NL","phoneCode":"31","zone":"Europe/Amsterdam","language":"nl","firstDay":"Mo","phoneMask":"+31-**-***-****"},{"country":"AN","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":["+599-***-****","+599-9-***-****"]},{"country":"NC","phoneCode":"687","zone":"Pacific/Noumea","language":"fr","firstDay":null,"phoneMask":"+687-**-****"},{"country":"NZ","phoneCode":"64","zone":"Pacific/Auckland","language":"en","firstDay":"Mo","phoneMask":["+64-**-***-***","+64-***-***-***","+64-***-***-****"]},{"country":"NI","phoneCode":"505","zone":"America/Managua","language":"es","firstDay":"Su","phoneMask":"+505-****-****"},{"country":"NE","phoneCode":"227","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+227-**-**-****"},{"country":"NG","phoneCode":"234","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":["+234-**-***-**","+234-**-***-***","+234-***-***-****"]},{"country":"NU","phoneCode":"683","zone":"Pacific/Niue","language":"niu","firstDay":null,"phoneMask":"+683-****"},{"country":"KP","phoneCode":"850","zone":"Asia/Pyongyang","language":"ko","firstDay":null,"phoneMask":["+850-***-***","+850-**-***-***","+850-****-****","+850-***-****-***","+850-****-*************","+850-191-***-****"]},{"country":"MP","phoneCode":"1-670","zone":"Pacific/Saipan","language":"fil","firstDay":null,"phoneMask":"+1-670-***-****"},{"country":"NO","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":"Mo","phoneMask":"+47-***-**-***"},{"country":"OM","phoneCode":"968","zone":"Asia/Muscat","language":"ar","firstDay":"Sa","phoneMask":"+968-**-***-***"},{"country":"PK","phoneCode":"92","zone":"Asia/Karachi","language":"ur","firstDay":"Mo","phoneMask":"+92-***-***-****"},{"country":"PW","phoneCode":"680","zone":"Pacific/Palau","language":"pau","firstDay":null,"phoneMask":"+680-***-****"},{"country":"PS","phoneCode":"970","zone":"Asia/Hebron","language":"ar","firstDay":null,"phoneMask":"+970-**-***-****"},{"country":"PA","phoneCode":"507","zone":"America/Panama","language":"es","firstDay":"Su","phoneMask":"+507-***-****"},{"country":"PG","phoneCode":"675","zone":"Pacific/Port_Moresby","language":"en","firstDay":null,"phoneMask":"+675-***-**-***"},{"country":"PY","phoneCode":"595","zone":"America/Asuncion","language":"es","firstDay":"Mo","phoneMask":"+595-***-***-***"},{"country":"PE","phoneCode":"51","zone":"America/Lima","language":"es","firstDay":"Su","phoneMask":"+51-***-***-***"},{"country":"PH","phoneCode":"63","zone":"Asia/Manila","language":"tl","firstDay":"Su","phoneMask":"+63-***-***-****"},{"country":"PN","phoneCode":"64","zone":"Pacific/Pitcairn","language":"en","firstDay":null},{"country":"PL","phoneCode":"48","zone":"Europe/Warsaw","language":"pl","firstDay":"Mo","phoneMask":"+48-***-***-***"},{"country":"PT","phoneCode":"351","zone":"Europe/Lisbon","language":"pt","firstDay":"Mo","phoneMask":"+351-**-***-****"},{"country":"PR","phoneCode":"1-787","zone":"San Juan","language":"Dollar","firstDay":"Su"},{"country":"QA","phoneCode":"974","zone":"Asia/Qatar","language":"ar","firstDay":"Sa","phoneMask":"+974-****-****"},{"country":"CG","phoneCode":"242","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+242-**-***-****"},{"country":"RE","phoneCode":"262","zone":"Indian/Reunion","language":"fr","firstDay":null,"phoneMask":"+262-*****-****"},{"country":"RO","phoneCode":"40","zone":"Europe/Bucharest","language":"ro","firstDay":"Mo","phoneMask":"+40-**-***-****"},{"country":"RU","phoneCode":"7","phoneWithin":"8","zone":"Europe/Moscow","language":"ru","firstDay":"Mo","phoneMask":"+7-***-***-**-**","nameFormat":"lsf"},{"country":"RW","phoneCode":"250","zone":"Africa/Maputo","language":"rw","firstDay":null,"phoneMask":"+250-***-***-***"},{"country":"BL","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"SH","phoneCode":"290","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+290-****"},{"country":"KN","phoneCode":"1-869","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-869-***-****"},{"country":"LC","phoneCode":"1-758","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-758-***-****"},{"country":"MF","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"PM","phoneCode":"508","zone":"America/Miquelon","language":"fr","firstDay":null},{"country":"VC","phoneCode":"1-784","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-784-***-****"},{"country":"WS","phoneCode":"685","zone":"Pacific/Apia","language":"sm","firstDay":null,"phoneMask":"+685-**-****"},{"country":"SM","phoneCode":"378","zone":"Europe/Rome","language":"it","firstDay":null,"phoneMask":"+378-****-******"},{"country":"ST","phoneCode":"239","zone":"Africa/Abidjan","language":"pt","firstDay":null,"phoneMask":"+239-**-*****"},{"country":"SA","phoneCode":"966","zone":"Asia/Riyadh","language":"ar","firstDay":"Sa","phoneMask":["+966-*-***-****","+966-5-****-****"]},{"country":"SN","phoneCode":"221","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+221-**-***-****"},{"country":"RS","phoneCode":"381","zone":"Europe/Belgrade","language":"sr","firstDay":"Mo","phoneMask":"+381-**-***-****"},{"country":"SC","phoneCode":"248","zone":"Indian/Mahe","language":"en","firstDay":null,"phoneMask":"+248-*-***-***"},{"country":"SL","phoneCode":"232","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+232-**-******"},{"country":"SG","phoneCode":"65","zone":"Asia/Singapore","language":"cmn","firstDay":"Mo","phoneMask":"+65-****-****"},{"country":"SX","phoneCode":"1-721","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+1-721-***-****"},{"country":"SK","phoneCode":"421","zone":"Europe/Prague","language":"sk","firstDay":"Mo","phoneMask":"+421-***-***-***"},{"country":"SI","phoneCode":"386","zone":"Europe/Belgrade","language":"sl","firstDay":null,"phoneMask":"+386-**-***-***"},{"country":"SB","phoneCode":"677","zone":"Pacific/Guadalcanal","language":"en","firstDay":null,"phoneMask":["+677-*****","+677-***-****"]},{"country":"SO","phoneCode":"252","zone":"Africa/Mogadishu","language":"so","firstDay":null,"phoneMask":["+252-*-***-***","+252-**-***-***"]},{"country":"ZA","phoneCode":"27","zone":"Africa/Johannesburg","language":"zu","firstDay":"Su","phoneMask":"+27-**-***-****"},{"country":"KR","phoneCode":"82","zone":"Asia/Seoul","language":"ko","firstDay":"Su","phoneMask":["+82-**-***-****","+82-**-***-****-**"],"nameFormat":"lf"},{"country":"SS","phoneCode":"211","zone":"Africa/Khartoum","language":"en","firstDay":null,"phoneMask":"+211-**-***-****"},{"country":"ES","phoneCode":"34","zone":"Europe/Madrid","language":"es","firstDay":"Mo","phoneMask":"+34-***-***-***"},{"country":"LK","phoneCode":"94","zone":"Asia/Colombo","language":"si","firstDay":null,"phoneMask":"+94-**-***-****"},{"country":"SD","phoneCode":"249","zone":"Africa/Khartoum","language":"ar","firstDay":null,"phoneMask":"+249-**-***-****"},{"country":"SR","phoneCode":"597","zone":"America/Paramaribo","language":"nl","firstDay":null,"phoneMask":["+597-***-***","+597-***-****"]},{"country":"SJ","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":null},{"country":"SZ","phoneCode":"268","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+268-**-**-****"},{"country":"SE","phoneCode":"46","zone":"Europe/Stockholm","language":"sv","firstDay":"Mo","phoneMask":"+46-**-***-****"},{"country":"CH","phoneCode":"41","zone":"Europe/Zurich","language":"de","firstDay":"Mo","phoneMask":"+41-**-***-****"},{"country":"SY","phoneCode":"963","zone":"Asia/Damascus","language":"ar","firstDay":"Sa","phoneMask":"+963-**-****-***"},{"country":"TW","phoneCode":"886","zone":"Asia/Taipei","language":"zh","firstDay":"Su","phoneMask":["+886-****-****","+886-*-****-****"]},{"country":"TJ","phoneCode":"992","zone":"Asia/Dushanbe","language":"tg","firstDay":null,"phoneMask":"+992-**-***-****"},{"country":"TZ","phoneCode":"255","zone":"Africa/Dar_es_Salaam","language":"sw","firstDay":null,"phoneMask":"+255-**-***-****"},{"country":"TH","phoneCode":"66","zone":"Asia/Bangkok","language":"th","firstDay":"Mo","phoneMask":"+66-**-***-****"},{"country":"TG","phoneCode":"228","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+228-**-***-***"},{"country":"TK","phoneCode":"690","zone":"Pacific/Fakaofo","language":"tkl","firstDay":null,"phoneMask":"+690-****"},{"country":"TO","phoneCode":"676","zone":"Pacific/Tongatapu","language":"to","firstDay":null,"phoneMask":"+676-*****"},{"country":"TT","phoneCode":"1-868","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-868-***-****"},{"country":"TN","phoneCode":"216","zone":"Africa/Tunis","language":"ar","firstDay":"Mo","phoneMask":"+216-**-***-***"},{"country":"TR","phoneCode":"90","zone":"Europe/Istanbul","language":"tr","firstDay":"Mo","phoneMask":"+90-***-***-****"},{"country":"TM","phoneCode":"993","zone":"Asia/Ashgabat","language":"tk","firstDay":null,"phoneMask":"+993-*-***-****"},{"country":"TC","phoneCode":"1-649","zone":"America/Grand_Turk","language":"en","firstDay":null,"phoneMask":"+1-649-***-****"},{"country":"TV","phoneCode":"688","zone":"Pacific/Funafuti","language":"tvl","firstDay":null,"phoneMask":["+688-2-****","+688-90-****"]},{"country":"VI","phoneCode":"1-340","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-340-***-****"},{"country":"UG","phoneCode":"256","zone":"Africa/Kampala","language":"en","firstDay":null,"phoneMask":"+256-***-***-***"},{"country":"UA","phoneCode":"380","zone":"Europe/Kiev","language":"uk","languageAlternative":["ua"],"firstDay":"Mo","phoneMask":"+380-**-***-**-**"},{"country":"AE","phoneCode":"971","zone":"Asia/Dubai","language":"ar","firstDay":"Sa","phoneMask":["+971-*-***-****","+971-5-*-***-****"]},{"country":"UY","phoneCode":"598","zone":"America/Montevideo","language":"es","firstDay":"Mo","phoneMask":"+598-*-***-**-**"},{"country":"UZ","phoneCode":"998","zone":"Asia/Tashkent","language":"uz","firstDay":"Mo","phoneMask":"+998-**-***-****"},{"country":"VU","phoneCode":"678","zone":"Pacific/Efate","language":"bi","firstDay":null,"phoneMask":["+678-*****","+678-**-*****"]},{"country":"VA","phoneCode":"379","zone":"Europe/Rome","language":"la","firstDay":null,"phoneMask":"+39-6-698-*****"},{"country":"VE","phoneCode":"58","zone":"America/Caracas","language":"es","firstDay":"Su","phoneMask":"+58-***-***-****"},{"country":"VN","phoneCode":"84","zone":"Asia/Ho_Chi_Minh","language":"vi","firstDay":"Mo","phoneMask":["+84-**-****-***","+84-***-****-***"],"nameFormat":"fsl"},{"country":"WF","phoneCode":"681","zone":"Pacific/Wallis","language":"wls","firstDay":null,"phoneMask":"+681-**-****"},{"country":"EH","phoneCode":"212","zone":"Africa/El_Aaiun","language":"ar","firstDay":null},{"country":"YE","phoneCode":"967","zone":"Asia/Aden","language":"ar","firstDay":"Sa","phoneMask":["+967-*-***-***","+967-**-***-***","+967-***-***-***"]},{"country":"ZM","phoneCode":"260","zone":"Africa/Maputo","language":"en","firstDay":null,"phoneMask":"+260-**-***-****"},{"country":"ZW","phoneCode":"263","zone":"Africa/Maputo","language":"en","firstDay":"Su","phoneMask":"+263-*-******"},{"country":"GF","phoneCode":"594","zone":"America/Cayenne","language":"fr","firstDay":"Mo","phoneMask":"+594-*****-****"},{"country":"MQ","phoneCode":"596","zone":"America/Martinique","language":"fr","firstDay":"Mo","phoneMask":"+596-***-**-**-**"},{"country":"NF","phoneCode":"672-3","zone":"Pacific/Norfolk","language":"en","firstDay":"Mo","phoneMask":"+672-3-**-***"},{"country":"IC","phoneCode":"3428","zone":"Europe/Berlin","language":"es","firstDay":"Mo"}]'), vs = "geo-code", k = class k {
  /**
   * Information about the current country.
   *
   * Информация об текущей стране.
   */
  static get() {
    return this.item;
  }
  /**
   * Current country.
   *
   * Текущая страна.
   */
  static getCountry() {
    return this.item.country;
  }
  /**
   * Current language.
   *
   * Текущий язык.
   */
  static getLanguage() {
    return this.language;
  }
  /**
   * Full format according to the standard.
   *
   * Полный формат согласно стандарту.
   */
  static getStandard() {
    return this.item.standard;
  }
  /**
   * Returns the first day of the week.
   *
   * Возвращает первый день недели.
   */
  static getFirstDay() {
    return this.item.firstDay;
  }
  /**
   * Full format.
   *
   * Полный формат.
   */
  static getLocation() {
    return this.location;
  }
  /**
   * Obtaining processed data.
   *
   * Получение обработанных данных.
   */
  static getItem() {
    return {
      ...this.item,
      language: this.language
    };
  }
  /**
   * Returns the full list of countries.
   *
   * Возвращает полный список стран.
   */
  static getList() {
    return ws;
  }
  /**
   * Returns the data about the country by its full code.
   *
   * Возвращает данные о стране по ее полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getByCode(n) {
    let t;
    return n && (n.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (t = this.getByCodeFull(n)), !t && n.match(/[A-Z]{2}/) && (t = this.getByCountry(this.toCountry(n))), !t && n.match(/[a-z]{2}/) && (t = this.getByLanguage(this.toLanguage(n)))), this.toFull(bs(t ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(n) {
    return this.getList().find(
      (t) => ks(n, [
        `${t.language}-${t.country}`,
        `${t.country}-${t.language}`
      ])
    );
  }
  /**
   * Returns the full data by country.
   *
   * Возвращает полные данные по стране.
   * @param country country/ страна
   */
  static getByCountry(n) {
    return this.getList().find((t) => {
      var o;
      return t.country === n || ((o = t == null ? void 0 : t.countryAlternative) == null ? void 0 : o.find((s) => s === n));
    });
  }
  /**
   * Returns the full data by language.
   *
   * Возвращает полные данные по языку.
   * @param language language/ язык
   */
  static getByLanguage(n) {
    return this.getList().find((t) => {
      var o;
      return t.language === n || ((o = t == null ? void 0 : t.languageAlternative) == null ? void 0 : o.find((s) => s === n));
    });
  }
  /**
   * Retrieving the default timezone.
   *
   * Получение временной зоны по умолчанию
   */
  static getTimezone() {
    return this.timezone;
  }
  /**
   * Retrieving the default timezone (formatted view).
   *
   * Получение временной зоны по умолчанию (отформатированный вид).
   */
  static getTimezoneFormat() {
    const n = Math.abs(Math.trunc(this.timezone / 60)).toString().padStart(2, "0"), t = Math.abs(this.timezone % 60).toString().padStart(2, "0");
    return this.timezone >= 0 ? `+${n}:${t}` : `-${n}:${t}`;
  }
  /**
   * Determines the current country by its full name.
   *
   * Определяет текущую страну по ее полному названию.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static find(n) {
    return this.getByCode(n);
  }
  /**
   * Returns a complete string with the country code and language.
   *
   * Возвращает полную строку с кодом страны и языка.
   * @param item object with data about the current country/
   * объект с данными об текущей стране
   */
  static toStandard(n) {
    return `${n.language}-${n.country}`;
  }
  /**
   * Changes the data by the full code.
   *
   * Изменяет данные по полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   * @param save save the result/ сохранить результат
   */
  static set(n, t) {
    this.location = n, this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location), t && this.storage.set(this.location);
  }
  /**
   * Changing the default timezone for transmitted dates.
   *
   * Изменение временной зоны по умолчанию для отправляемых дат
   * @param timezone new time zone/ новая временная зона
   */
  static setTimezone(n) {
    this.timezone = n;
  }
  /**
   * Determines the current location.
   *
   * Определяет текущую локацию.
   */
  static findLocation() {
    var n;
    return Q() && (this.storage.get() || ((n = document.querySelector("html")) == null ? void 0 : n.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
  }
  /**
   * Determines the current language.
   *
   * Определяет текущий язык.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static findLanguage(n) {
    return n && n.match(/[a-z]{2}/) ? this.toLanguage(n) : this.item.language;
  }
  /**
   * Returns the country code by its full language-country.
   *
   * Возвращает код страны по ее полному язык-страна.
   * @param code country code/ код страна
   */
  static toCountry(n) {
    return n.replace(/[^A-Z]+/g, "");
  }
  /**
   * Returns the language code by its full language-country.<br>
   * Возвращает код языка по его полному язык-страна.
   * @param code country code/ код страна
   */
  static toLanguage(n) {
    return n.replace(/[^a-z]+/g, "");
  }
  /**
   * Adding missing data.<br>
   * Добавление недостающих данных.
   * @param item object with data about the current country/
   * объект с данными об текущей стране
   */
  static toFull(n) {
    return {
      ...n,
      standard: this.toStandard(n),
      firstDay: (n == null ? void 0 : n.firstDay) || "Mo"
    };
  }
};
y(k, "storage", new Ns(vs)), y(k, "location"), y(k, "item"), y(k, "language"), y(k, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), k.location = k.findLocation(), k.language = k.findLanguage(k.location), k.item = k.getByCode(k.location);
let Me = k;
var Os = /* @__PURE__ */ ((e) => (e.get = "GET", e.post = "POST", e.put = "PUT", e.delete = "DELETE", e))(Os || {});
const Jn = "d-response-loading", Yn = [], C = class C {
  /**
   * Is the server local.
   *
   * Является ли сервер локальный.
   */
  static isLocalhost() {
    return typeof location > "u" || location.hostname === "localhost";
  }
  /**
   * Returns the data of the last request.
   *
   * Возвращает данные последнего запроса.
   */
  static getLastResponse() {
    return this.lastResponse;
  }
  /**
   * Returns messages from the last request.
   *
   * Возвращает сообщения от последнего запроса.
   */
  static getLastMessage() {
    return this.lastMessage || "";
  }
  /**
   * Getting the header for the request.
   *
   * Получение заголовка для запроса.
   * @param value list of headers/ список заголовков
   * @param type type of request/ тип запроса
   */
  static getHeaders(n, t = "application/json;charset=UTF-8") {
    if (n !== null) {
      const o = {
        ...this.headers,
        ...n || {}
      };
      return t && (o["Content-Type"] = t), o;
    }
  }
  /**
   * Getting the full path to the request script.
   *
   * Получение полного пути к скрипту запроса.
   * @param path path to the script/ путь к скрипту
   * @param api adding a path to the site’s API/ добавление пути к API сайта
   */
  static getUrl(n, t = !0) {
    return `${t ? this.url : ""}${n}`.replace("{locale}", Me.getLocation()).replace("{country}", Me.getCountry()).replace("{language}", Me.getLanguage());
  }
  /**
   * Getting data for the body.
   *
   * Получение данных для тела.
   * @param request this request/ данный запрос
   * @param method method for request/ метод запрос
   */
  static getBody(n = {}, t = "GET") {
    if (t !== "GET" && xe(n))
      return n instanceof FormData || Hn(n) ? n : JSON.stringify(n);
  }
  /**
   * Getting data for the body of the get method.
   *
   * Получение данных для тела метода get.
   * @param request this request/ данный запрос
   * @param path path to request/ путь к запрос
   * @param method method for request/ метод запрос
   */
  static getBodyForGet(n, t = "", o = "GET") {
    if (o === "GET") {
      const s = t.match(/\?/) ? "&" : "?", r = typeof n == "object" ? zs(n) : n;
      if (xe(r))
        return `${s}${r}`;
    }
    return "";
  }
  /**
   * Returns a list of data about the emulator.
   *
   * Возвращает список данных об эмуляторе.
   */
  static getResponseList() {
    return this.response.filter((n) => n.isForGlobal !== !0);
  }
  /**
   * Returns the execution status code.
   *
   * Возвращает код статуса выполнения.
   */
  static getStatus() {
    return this.status;
  }
  /**
   * Returns the execution status text.
   *
   * Возвращает текст статуса выполнения.
   */
  static getStatusText() {
    return this.statusText;
  }
  /**
   * Returns the script execution error.
   *
   * Возвращает ошибку выполнения скрипта.
   */
  static getError() {
    return this.error;
  }
  /**
   * Adds default data to the request.
   *
   * Добавляет данные по умолчанию к запросу.
   */
  static addRequestDefault(n) {
    if (this.requestDefault) {
      const t = on(this.requestDefault);
      if (n instanceof FormData)
        Ve(t, (o, s) => {
          n.has(s) || n.set(s, o);
        });
      else if (te(n))
        return {
          ...t,
          ...n
        };
    }
    return n;
  }
  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  static setHeaders(n) {
    return te(n) && (this.headers = n), C;
  }
  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  static setRequestDefault(n) {
    this.requestDefault = n;
  }
  /**
   * Change the base path to the script.
   *
   * Изменить базовый путь к скрипту.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(n) {
    return this.url = n, C;
  }
  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(n) {
    return this.preparationItem = n, C;
  }
  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(n) {
    return this.preparationEndItem = n, C;
  }
  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters/ строка запроса или список параметров
   */
  static async request(n) {
    return Hn(n) ? await this.fetch({
      path: n
    }) : await this.fetch(n);
  }
  /**
   * Sends a get method request.
   *
   * Отправляет запрос метода get.
   * @param request list of parameters/ список параметров
   */
  static get(n) {
    return this.request({
      ...n,
      method: "GET"
      /* get */
    });
  }
  /**
   * Sends a post method request.
   *
   * Отправляет запрос метода post.
   * @param request list of parameters/ список параметров
   */
  static post(n) {
    return this.request({
      ...n,
      method: "POST"
      /* post */
    });
  }
  /**
   * Sends a put method request.
   *
   * Отправляет запрос метода put.
   * @param request list of parameters/ список параметров
   */
  static put(n) {
    return this.request({
      ...n,
      method: "PUT"
      /* put */
    });
  }
  /**
   * Sends a delete method request.
   *
   * Отправляет запрос метода delete.
   * @param request list of parameters/ список параметров
   */
  static delete(n) {
    return this.request({
      ...n,
      method: "DELETE"
      /* delete */
    });
  }
  /**
   * Adding cached requests.
   *
   * Добавление кешированных запросов.
   * @param response data for caching/ данные для кеширования
   */
  static addResponse(n) {
    return this.response.push(...gn(n)), C;
  }
  /**
   * Checks if there is a global cached request, if there is, returns it.
   *
   * Проверяет, есть ли глобальный кешированный запрос, если есть, возвращает его.
   * @param path link to the request/ ссылка на запрос
   * @param method request method/ метод запроса
   * @param request data for the request/ данные для запроса
   * @param devMode is it developer mode/ является ли режим разработчика
   */
  static getResponse(n = "", t, o, s) {
    return this.response.find((r) => {
      if (mn(on(r == null ? void 0 : r.disable)) !== !0 && (r.path instanceof RegExp && n.match(r.path) || n === r.path) && t === r.method && (Yn.indexOf(r) === -1 || s)) {
        const a = this.addRequestDefault(r == null ? void 0 : r.request);
        let i = !1;
        if (o === a || a === "*any" ? i = !0 : xe(o) && xe(a) && te(o) && te(a) && !(o instanceof FormData) && !(a instanceof FormData) && Object.values(o).length === Object.values(a).length && (i = Object.entries(a).reduce(
          (c, [l, p]) => c && (p === (o == null ? void 0 : o[l]) || p === "*any"),
          !0
        )), i)
          return s && console.warn(`Response type: ${r.path}`), Yn.push(r), !0;
      }
      return !1;
    });
  }
  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param apiFetch property of the request/ свойство запроса
   */
  static async fetch(n) {
    const {
      toData: t = !0,
      hideError: o = !1,
      queryReturn: s = void 0,
      globalPreparation: r = !0,
      globalEnd: a = !0
    } = n, i = await this.makeEmulator(n);
    if (i)
      return i;
    let c = {};
    J.show();
    try {
      this.preparationItem && r && await this.makePreparation();
      const l = await this.makeQuery(n), p = a && this.preparationEndItem ? await this.makePreparationEnd(l) : {};
      if (this.status = l.status, this.statusText = l.statusText, p != null && p.reset)
        return J.hide(), await this.fetch(n);
      s ? c = await s(l) : "data" in p ? c = p.data : l.headers.get("Content-Type") === "application/json" ? c = await l.json() : c = { data: await l.text() };
    } catch (l) {
      o && console.error("Api: ", l), this.error = l;
    }
    return J.hide(), this.makeData(c, t);
  }
  /**
   * Emulates an execution request.
   *
   * Эмулирует запрос выполнения.
   * @param response Data for pre-request/ Данные для пред-запроса
   * @param request data for the request/ данные для запроса
   */
  static fetchResponse(n, t) {
    return this.startResponseLoading(), new Promise((o) => {
      $t(
        Xn(n.response) ? n.response(t) : n.response
      ).then((s) => {
        on(n == null ? void 0 : n.lag) ? (J.show(), setTimeout(() => {
          this.stopResponseLoading(), o(s), J.hide();
        }, As(0, 2e3))) : (this.stopResponseLoading(), o(s));
      });
    });
  }
  /**
   * Выполнение эмулятора, если доступно
   * @param apiFetch property of the request/ свойство запроса
   */
  static async makeEmulator(n) {
    const {
      path: t = "",
      method: o = "GET",
      global: s = o === "GET",
      devMode: r = !1
    } = n;
    if (s || r) {
      const a = this.addRequestDefault(n.request), i = this.getResponse(t, o, a, r);
      if (i) {
        const c = await this.fetchResponse(i, a);
        return r && console.warn("Response data:", t, a, c), c;
      }
    }
  }
  /**
   * Executing the request.
   *
   * Выполнение запроса.
   * @param apiFetch property of the request/ свойство запроса
   */
  static async makeQuery(n) {
    const t = this.addRequestDefault(n.request), {
      api: o = !0,
      path: s = "",
      pathFull: r = void 0,
      method: a = "GET",
      headers: i = {},
      type: c = "application/json;charset=UTF-8",
      init: l = {}
    } = n, p = r ?? this.getUrl(s, o), u = `${p}${this.getBodyForGet(t, p, a)}`, f = this.getHeaders(i, c), h = {
      ...l,
      method: a,
      body: this.getBody(t, a)
    };
    return f && (h.headers = f), await fetch(u, h);
  }
  /**
   * Preparation before executing the request.
   *
   * Подготовка перед выполнением запроса.
   */
  static async makePreparation() {
    return new Promise((n) => {
      this.preparation ? setTimeout(() => this.makePreparation().then(n), 160) : this.preparationItem ? (this.preparation = !0, this.preparationItem().then(() => {
        this.preparation = !1, n();
      })) : n();
    });
  }
  /**
   * Analysis of the request after execution.
   *
   * Анализ запроса после выполнения.
   * @param query data received in the request/ данные, полученные в запросе
   */
  static async makePreparationEnd(n) {
    let t = {};
    return this.preparationEndItem && (t = await this.preparationEndItem(n)), t;
  }
  /**
   * Transforms data if needed.
   *
   * Преобразует данные, если нужно.
   * @param data data for transformation/ данные для преобразования
   * @param toData is it necessary to process the data/ нужно ли обрабатывать данные
   */
  static makeData(n, t) {
    if (this.lastResponse = n, n && te(n) && ("message" in n && (this.lastMessage = String(n.message)), t && "data" in n)) {
      if (te(n.data)) {
        const o = { ...n.data };
        return "success" in n && (o.success = n.success), o;
      }
      return n.data;
    }
    return n;
  }
  /**
   * Enable loading for request emulation.
   *
   * Включить загрузку для эмуляции запроса.
   */
  static startResponseLoading() {
    this.responseLoading && clearTimeout(this.responseLoading), Q() && document.body.classList.add(Jn);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  static stopResponseLoading() {
    this.responseLoading = setTimeout(() => {
      this.responseLoading = void 0, Q() && document.body.classList.remove(Jn);
    }, 1200);
  }
};
y(C, "url", "/api/"), y(C, "response", []), y(C, "responseLoading"), y(C, "headers", {}), y(C, "requestDefault"), y(C, "preparation", !1), y(C, "preparationItem"), y(C, "preparationEndItem"), y(C, "status"), y(C, "statusText"), y(C, "error"), y(C, "lastResponse"), y(C, "lastMessage");
let yn = C;
const rn = "__UI_ICON", qn = 320, Zn = "--LOAD--", Ce = class Ce {
  /**
   * Checks if the given icon is in the list of connected icons.
   *
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name/ название иконки
   */
  static is(n) {
    return n in this.icons || this.getName(n) in this.icons;
  }
  /**
   * Returns the icon by the name.
   *
   * Возвращает иконку по названию.
   * @param index icon name/ название иконки
   * @param url path to the storage location of the icon, if the icon does not exist/
   * путь к месту хранения иконки, если иконка не существует
   * @param wait waiting time for picture loading/
   * время ожидания загрузки картинки
   */
  static async get(n, t = "", o = 1e3 * 60 * 3) {
    var r, a;
    const s = ((r = this.icons) == null ? void 0 : r[this.getName(n)]) ?? ((a = this.icons) == null ? void 0 : a[n]) ?? `${n.replace(/^@/, t ?? this.url)}.svg`;
    return typeof s == "string" ? s === Zn && o > 0 ? (await this.wait(), this.get(n, t, o - qn)) : s : await s;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return Ve(this.icons, (n, t) => t.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${yn.isLocalhost(), ""}${this.url}`;
  }
  /**
   * Adding custom icons.
   *
   * Добавление пользовательских иконок.
   * @param index icon name/ название иконки
   * @param file path to the file/ путь к файлу
   */
  static add(n, t) {
    this.icons[this.getName(n)] = t;
  }
  /**
   * Adding custom icons in loading mode.
   *
   * Добавление пользовательских иконок в режиме загрузки.
   * @param index icon name/ название иконки
   */
  static addLoad(n) {
    this.icons[this.getName(n)] = Zn;
  }
  /**
   * Adding custom global icons.
   *
   * Добавление пользовательских глобальных иконок.
   * @param index icon name/ название иконки
   * @param file path to the file/ путь к файлу
   */
  static addGlobal(n, t) {
    this.icons[this.getName(n)] = `${this.getUrlGlobal()}${t}`;
  }
  /**
   * Adding an icon by the list.
   *
   * Добавление иконки по списку.
   * @param list list of icons/ список иконки
   */
  static addByList(n) {
    Ve(n, (t, o) => this.add(o, t));
  }
  /**
   * Changes the file path.
   *
   * Изменяет путь к файлу.
   * @param url new file path/ новый путь к файлу
   */
  static setUrl(n) {
    this.url = n;
  }
  /**
   * Returns the icon name.
   *
   * Возвращает название иконки.
   * @param index icon name/ название иконки
   */
  static getName(n) {
    return `@${n}`;
  }
  /**
   * Script execution delay.
   *
   * Задержка выполнения скрипта.
   */
  static wait() {
    return new Promise((n) => setTimeout(() => n(), qn));
  }
};
y(Ce, "icons", {}), y(Ce, "url", "/icons/"), Q() && (rn in window || (window[rn] = {}), Ce.icons = window[rn]);
let Qn = Ce;
export {
  Os as A,
  gn as B,
  Ns as D,
  Gn as E,
  Me as G,
  Qn as I,
  J as L,
  xe as a,
  Je as b,
  Mn as c,
  te as d,
  mn as e,
  Ve as f,
  ae as g,
  Is as h,
  Q as i,
  Hn as j,
  As as k,
  ks as l,
  bs as m,
  on as n,
  Ps as o,
  Vs as p,
  S as q,
  Rs as r,
  yn as s,
  $t as t,
  Kn as u,
  zs as v,
  xs as w,
  Xn as x,
  Ss as y,
  It as z
};
