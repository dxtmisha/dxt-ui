var Un = Object.defineProperty;
var Wn = (t, e, n) => e in t ? Un(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var h = (t, e, n) => Wn(t, typeof e != "symbol" ? e + "" : e, n);
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Gn(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const _e = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const le = () => {
}, Jn = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), q = Object.assign, Zn = Object.prototype.hasOwnProperty, dt = (t, e) => Zn.call(t, e), M = Array.isArray, he = (t) => Qe(t) === "[object Map]", Yn = (t) => Qe(t) === "[object Set]", b = (t) => typeof t == "function", j = (t) => typeof t == "string", Te = (t) => typeof t == "symbol", w = (t) => t !== null && typeof t == "object", qn = (t) => (w(t) || b(t)) && b(t.then) && b(t.catch), Qn = Object.prototype.toString, Qe = (t) => Qn.call(t), nn = (t) => Qe(t).slice(8, -1), Xn = (t) => Qe(t) === "[object Object]", Et = (t) => j(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, es = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, ts = es((t) => t.charAt(0).toUpperCase() + t.slice(1)), Z = (t, e) => !Object.is(t, e);
let Lt;
const Xe = () => Lt || (Lt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _t(t) {
  if (M(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const s = t[n], o = j(s) ? as(s) : _t(s);
      if (o)
        for (const a in o)
          e[a] = o[a];
    }
    return e;
  } else if (j(t) || w(t))
    return t;
}
const ns = /;(?![^(]*\))/g, ss = /:([^]+)/, os = /\/\*[^]*?\*\//g;
function as(t) {
  const e = {};
  return t.replace(os, "").split(ns).forEach((n) => {
    if (n) {
      const s = n.split(ss);
      s.length > 1 && (e[s[0].trim()] = s[1].trim());
    }
  }), e;
}
function At(t) {
  let e = "";
  if (j(t))
    e = t;
  else if (M(t))
    for (let n = 0; n < t.length; n++) {
      const s = At(t[n]);
      s && (e += s + " ");
    }
  else if (w(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function V(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let m;
const st = /* @__PURE__ */ new WeakSet();
class rs {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, st.has(this) && (st.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || on(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $t(this), an(this);
    const e = m, n = L;
    m = this, L = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && m !== this && V(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), rn(this), m = e, L = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        wt(e);
      this.deps = this.depsTail = void 0, $t(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? st.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    gt(this) && this.run();
  }
  get dirty() {
    return gt(this);
  }
}
let sn = 0, Me, Ce;
function on(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Ce, Ce = t;
    return;
  }
  t.next = Me, Me = t;
}
function St() {
  sn++;
}
function zt() {
  if (--sn > 0)
    return;
  if (Ce) {
    let e = Ce;
    for (Ce = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; Me; ) {
    let e = Me;
    for (Me = void 0; e; ) {
      const n = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (s) {
          t || (t = s);
        }
      e = n;
    }
  }
  if (t) throw t;
}
function an(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function rn(t) {
  let e, n = t.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), wt(s), is(s)) : e = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  t.deps = e, t.depsTail = n;
}
function gt(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (cn(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function cn(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ae) || (t.globalVersion = Ae, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !gt(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = m, s = L;
  m = t, L = !0;
  try {
    an(t);
    const o = t.fn(t._value);
    (e.version === 0 || Z(o, t._value)) && (t.flags |= 128, t._value = o, e.version++);
  } catch (o) {
    throw e.version++, o;
  } finally {
    m = n, L = s, rn(t), t.flags &= -3;
  }
}
function wt(t, e = !1) {
  const { dep: n, prevSub: s, nextSub: o } = t;
  if (s && (s.nextSub = o, t.prevSub = void 0), o && (o.prevSub = s, t.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === t && (n.subsHead = o), n.subs === t && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      wt(a, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function is(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let L = !0;
const un = [];
function Oe() {
  un.push(L), L = !1;
}
function Ie() {
  const t = un.pop();
  L = t === void 0 ? !0 : t;
}
function $t(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const n = m;
    m = void 0;
    try {
      e();
    } finally {
      m = n;
    }
  }
}
let Ae = 0;
class cs {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Nt {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!m || !L || m === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== m)
      n = this.activeLink = new cs(m, this), m.deps ? (n.prevDep = m.depsTail, m.depsTail.nextDep = n, m.depsTail = n) : m.deps = m.depsTail = n, ln(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = m.depsTail, n.nextDep = void 0, m.depsTail.nextDep = n, m.depsTail = n, m.deps === n && (m.deps = s);
    }
    return process.env.NODE_ENV !== "production" && m.onTrack && m.onTrack(
      q(
        {
          effect: m
        },
        e
      )
    ), n;
  }
  trigger(e) {
    this.version++, Ae++, this.notify(e);
  }
  notify(e) {
    St();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            q(
              {
                effect: n.sub
              },
              e
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      zt();
    }
  }
}
function ln(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let s = e.deps; s; s = s.nextDep)
        ln(s);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), process.env.NODE_ENV !== "production" && t.dep.subsHead === void 0 && (t.dep.subsHead = t), t.dep.subs = t;
  }
}
const Ke = /* @__PURE__ */ new WeakMap(), se = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), yt = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Se = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function S(t, e, n) {
  if (L && m) {
    let s = Ke.get(t);
    s || Ke.set(t, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Nt()), o.map = s, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: t,
      type: e,
      key: n
    }) : o.track();
  }
}
function W(t, e, n, s, o, a) {
  const r = Ke.get(t);
  if (!r) {
    Ae++;
    return;
  }
  const i = (c) => {
    c && (process.env.NODE_ENV !== "production" ? c.trigger({
      target: t,
      type: e,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: a
    }) : c.trigger());
  };
  if (St(), e === "clear")
    r.forEach(i);
  else {
    const c = M(t), l = c && Et(n);
    if (c && n === "length") {
      const p = Number(s);
      r.forEach((u, f) => {
        (f === "length" || f === Se || !Te(f) && f >= p) && i(u);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && i(r.get(n)), l && i(r.get(Se)), e) {
        case "add":
          c ? l && i(r.get("length")) : (i(r.get(se)), he(t) && i(r.get(yt)));
          break;
        case "delete":
          c || (i(r.get(se)), he(t) && i(r.get(yt)));
          break;
        case "set":
          he(t) && i(r.get(se));
          break;
      }
  }
  zt();
}
function us(t, e) {
  const n = Ke.get(t);
  return n && n.get(e);
}
function re(t) {
  const e = g(t);
  return e === t ? e : (S(e, "iterate", Se), N(t) ? e : e.map(_));
}
function Tt(t) {
  return S(t = g(t), "iterate", Se), t;
}
const ls = {
  __proto__: null,
  [Symbol.iterator]() {
    return ot(this, Symbol.iterator, _);
  },
  concat(...t) {
    return re(this).concat(
      ...t.map((e) => M(e) ? re(e) : e)
    );
  },
  entries() {
    return ot(this, "entries", (t) => (t[1] = _(t[1]), t));
  },
  every(t, e) {
    return F(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return F(this, "filter", t, e, (n) => n.map(_), arguments);
  },
  find(t, e) {
    return F(this, "find", t, e, _, arguments);
  },
  findIndex(t, e) {
    return F(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return F(this, "findLast", t, e, _, arguments);
  },
  findLastIndex(t, e) {
    return F(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return F(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return at(this, "includes", t);
  },
  indexOf(...t) {
    return at(this, "indexOf", t);
  },
  join(t) {
    return re(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return at(this, "lastIndexOf", t);
  },
  map(t, e) {
    return F(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return ye(this, "pop");
  },
  push(...t) {
    return ye(this, "push", t);
  },
  reduce(t, ...e) {
    return Pt(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Pt(this, "reduceRight", t, e);
  },
  shift() {
    return ye(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return F(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return ye(this, "splice", t);
  },
  toReversed() {
    return re(this).toReversed();
  },
  toSorted(t) {
    return re(this).toSorted(t);
  },
  toSpliced(...t) {
    return re(this).toSpliced(...t);
  },
  unshift(...t) {
    return ye(this, "unshift", t);
  },
  values() {
    return ot(this, "values", _);
  }
};
function ot(t, e, n) {
  const s = Tt(t), o = s[e]();
  return s !== t && !N(t) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.value && (a.value = n(a.value)), a;
  }), o;
}
const hs = Array.prototype;
function F(t, e, n, s, o, a) {
  const r = Tt(t), i = r !== t && !N(t), c = r[e];
  if (c !== hs[e]) {
    const u = c.apply(t, a);
    return i ? _(u) : u;
  }
  let l = n;
  r !== t && (i ? l = function(u, f) {
    return n.call(this, _(u), f, t);
  } : n.length > 2 && (l = function(u, f) {
    return n.call(this, u, f, t);
  }));
  const p = c.call(r, l, s);
  return i && o ? o(p) : p;
}
function Pt(t, e, n, s) {
  const o = Tt(t);
  let a = n;
  return o !== t && (N(t) ? n.length > 3 && (a = function(r, i, c) {
    return n.call(this, r, i, c, t);
  }) : a = function(r, i, c) {
    return n.call(this, r, _(i), c, t);
  }), o[e](a, ...s);
}
function at(t, e, n) {
  const s = g(t);
  S(s, "iterate", Se);
  const o = s[e](...n);
  return (o === -1 || o === !1) && ze(n[0]) ? (n[0] = g(n[0]), s[e](...n)) : o;
}
function ye(t, e, n = []) {
  Oe(), St();
  const s = g(t)[e].apply(t, n);
  return zt(), Ie(), s;
}
const fs = /* @__PURE__ */ Gn("__proto__,__v_isRef,__isVue"), hn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Te)
);
function ps(t) {
  Te(t) || (t = String(t));
  const e = g(this);
  return S(e, "has", t), e.hasOwnProperty(t);
}
class fn {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, s) {
    if (n === "__v_skip") return e.__v_skip;
    const o = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return s === (o ? a ? bs : gn : a ? ks : dn).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(s) ? e : void 0;
    const r = M(e);
    if (!o) {
      let c;
      if (r && (c = ls[n]))
        return c;
      if (n === "hasOwnProperty")
        return ps;
    }
    const i = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      T(e) ? e : s
    );
    return (Te(n) ? hn.has(n) : fs(n)) || (o || S(e, "get", n), a) ? i : T(i) ? r && Et(n) ? i : i.value : w(i) ? o ? mn(i) : yn(i) : i;
  }
}
class ds extends fn {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, s, o) {
    let a = e[n];
    if (!this._isShallow) {
      const c = K(a);
      if (!N(s) && !K(s) && (a = g(a), s = g(s)), !M(e) && T(a) && !T(s))
        return c ? !1 : (a.value = s, !0);
    }
    const r = M(e) && Et(n) ? Number(n) < e.length : dt(e, n), i = Reflect.set(
      e,
      n,
      s,
      T(e) ? e : o
    );
    return e === g(o) && (r ? Z(s, a) && W(e, "set", n, s, a) : W(e, "add", n, s)), i;
  }
  deleteProperty(e, n) {
    const s = dt(e, n), o = e[n], a = Reflect.deleteProperty(e, n);
    return a && s && W(e, "delete", n, void 0, o), a;
  }
  has(e, n) {
    const s = Reflect.has(e, n);
    return (!Te(n) || !hn.has(n)) && S(e, "has", n), s;
  }
  ownKeys(e) {
    return S(
      e,
      "iterate",
      M(e) ? "length" : se
    ), Reflect.ownKeys(e);
  }
}
class gs extends fn {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && V(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && V(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const ys = /* @__PURE__ */ new ds(), ms = /* @__PURE__ */ new gs(), mt = (t) => t, $e = (t) => Reflect.getPrototypeOf(t);
function Ds(t, e, n) {
  return function(...s) {
    const o = this.__v_raw, a = g(o), r = he(a), i = t === "entries" || t === Symbol.iterator && r, c = t === "keys" && r, l = o[t](...s), p = n ? mt : e ? Dt : _;
    return !e && S(
      a,
      "iterate",
      c ? yt : se
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
function Pe(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      V(
        `${ts(t)} operation ${n}failed: target is readonly.`,
        g(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Ms(t, e) {
  const n = {
    get(o) {
      const a = this.__v_raw, r = g(a), i = g(o);
      t || (Z(o, i) && S(r, "get", o), S(r, "get", i));
      const { has: c } = $e(r), l = e ? mt : t ? Dt : _;
      if (c.call(r, o))
        return l(a.get(o));
      if (c.call(r, i))
        return l(a.get(i));
      a !== r && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && S(g(o), "iterate", se), Reflect.get(o, "size", o);
    },
    has(o) {
      const a = this.__v_raw, r = g(a), i = g(o);
      return t || (Z(o, i) && S(r, "has", o), S(r, "has", i)), o === i ? a.has(o) : a.has(o) || a.has(i);
    },
    forEach(o, a) {
      const r = this, i = r.__v_raw, c = g(i), l = e ? mt : t ? Dt : _;
      return !t && S(c, "iterate", se), i.forEach((p, u) => o.call(a, l(p), l(u), r));
    }
  };
  return q(
    n,
    t ? {
      add: Pe("add"),
      set: Pe("set"),
      delete: Pe("delete"),
      clear: Pe("clear")
    } : {
      add(o) {
        !e && !N(o) && !K(o) && (o = g(o));
        const a = g(this);
        return $e(a).has.call(a, o) || (a.add(o), W(a, "add", o, o)), this;
      },
      set(o, a) {
        !e && !N(a) && !K(a) && (a = g(a));
        const r = g(this), { has: i, get: c } = $e(r);
        let l = i.call(r, o);
        l ? process.env.NODE_ENV !== "production" && Vt(r, i, o) : (o = g(o), l = i.call(r, o));
        const p = c.call(r, o);
        return r.set(o, a), l ? Z(a, p) && W(r, "set", o, a, p) : W(r, "add", o, a), this;
      },
      delete(o) {
        const a = g(this), { has: r, get: i } = $e(a);
        let c = r.call(a, o);
        c ? process.env.NODE_ENV !== "production" && Vt(a, r, o) : (o = g(o), c = r.call(a, o));
        const l = i ? i.call(a, o) : void 0, p = a.delete(o);
        return c && W(a, "delete", o, void 0, l), p;
      },
      clear() {
        const o = g(this), a = o.size !== 0, r = process.env.NODE_ENV !== "production" ? he(o) ? new Map(o) : new Set(o) : void 0, i = o.clear();
        return a && W(
          o,
          "clear",
          void 0,
          void 0,
          r
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Ds(o, t, e);
  }), n;
}
function pn(t, e) {
  const n = Ms(t, e);
  return (s, o, a) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? s : Reflect.get(
    dt(n, o) && o in s ? n : s,
    o,
    a
  );
}
const Cs = {
  get: /* @__PURE__ */ pn(!1, !1)
}, vs = {
  get: /* @__PURE__ */ pn(!0, !1)
};
function Vt(t, e, n) {
  const s = g(n);
  if (s !== n && e.call(t, s)) {
    const o = nn(t);
    V(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const dn = /* @__PURE__ */ new WeakMap(), ks = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ new WeakMap();
function Es(t) {
  switch (t) {
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
function _s(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Es(nn(t));
}
function yn(t) {
  return K(t) ? t : Dn(
    t,
    !1,
    ys,
    Cs,
    dn
  );
}
function mn(t) {
  return Dn(
    t,
    !0,
    ms,
    vs,
    gn
  );
}
function Dn(t, e, n, s, o) {
  if (!w(t))
    return process.env.NODE_ENV !== "production" && V(
      `value cannot be made ${e ? "readonly" : "reactive"}: ${String(
        t
      )}`
    ), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const a = _s(t);
  if (a === 0)
    return t;
  const r = o.get(t);
  if (r)
    return r;
  const i = new Proxy(
    t,
    a === 2 ? s : n
  );
  return o.set(t, i), i;
}
function ve(t) {
  return K(t) ? ve(t.__v_raw) : !!(t && t.__v_isReactive);
}
function K(t) {
  return !!(t && t.__v_isReadonly);
}
function N(t) {
  return !!(t && t.__v_isShallow);
}
function ze(t) {
  return t ? !!t.__v_raw : !1;
}
function g(t) {
  const e = t && t.__v_raw;
  return e ? g(e) : t;
}
const _ = (t) => w(t) ? yn(t) : t, Dt = (t) => w(t) ? mn(t) : t;
function T(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function As(t) {
  return Mn(t, !1);
}
function Ss(t) {
  return Mn(t, !0);
}
function Mn(t, e) {
  return T(t) ? t : new zs(t, e);
}
class zs {
  constructor(e, n) {
    this.dep = new Nt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : g(e), this._value = n ? e : _(e), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, s = this.__v_isShallow || N(e) || K(e);
    e = s ? e : g(e), Z(e, n) && (this._rawValue = e, this._value = s ? e : _(e), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ws(t) {
  process.env.NODE_ENV !== "production" && !ze(t) && V("toRefs() expects a reactive object but received a plain one.");
  const e = M(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = Ts(t, n);
  return e;
}
class Ns {
  constructor(e, n, s) {
    this._object = e, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const e = this._object[this._key];
    return this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return us(g(this._object), this._key);
  }
}
function Ts(t, e, n) {
  const s = t[e];
  return T(s) ? s : new Ns(t, e, n);
}
class Os {
  constructor(e, n, s) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Nt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ae - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    m !== this)
      return on(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const e = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return cn(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && V("Write operation failed: computed value is readonly");
  }
}
function Is(t, e, n = !1) {
  let s, o;
  b(t) ? s = t : (s = t.get, o = t.set);
  const a = new Os(s, o, n);
  return process.env.NODE_ENV, a;
}
const Ve = {}, He = /* @__PURE__ */ new WeakMap();
let X;
function Rs(t, e = !1, n = X) {
  if (n) {
    let s = He.get(n);
    s || He.set(n, s = []), s.push(t);
  } else process.env.NODE_ENV !== "production" && !e && V(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function xs(t, e, n = _e) {
  const { immediate: s, deep: o, once: a, scheduler: r, augmentJob: i, call: c } = n, l = (y) => {
    (n.onWarn || V)(
      "Invalid watch source: ",
      y,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (y) => o ? y : N(y) || o === !1 || o === 0 ? G(y, 1) : G(y);
  let u, f, d, v, I = !1, xe = !1;
  if (T(t) ? (f = () => t.value, I = N(t)) : ve(t) ? (f = () => p(t), I = !0) : M(t) ? (xe = !0, I = t.some((y) => ve(y) || N(y)), f = () => t.map((y) => {
    if (T(y))
      return y.value;
    if (ve(y))
      return p(y);
    if (b(y))
      return c ? c(y, 2) : y();
    process.env.NODE_ENV !== "production" && l(y);
  })) : b(t) ? e ? f = c ? () => c(t, 2) : t : f = () => {
    if (d) {
      Oe();
      try {
        d();
      } finally {
        Ie();
      }
    }
    const y = X;
    X = u;
    try {
      return c ? c(t, 3, [v]) : t(v);
    } finally {
      X = y;
    }
  } : (f = le, process.env.NODE_ENV !== "production" && l(t)), e && o) {
    const y = f, $ = o === !0 ? 1 / 0 : o;
    f = () => G(y(), $);
  }
  const ae = () => {
    u.stop();
  };
  if (a && e) {
    const y = e;
    e = (...$) => {
      y(...$), ae();
    };
  }
  let Q = xe ? new Array(t.length).fill(Ve) : Ve;
  const ge = (y) => {
    if (!(!(u.flags & 1) || !u.dirty && !y))
      if (e) {
        const $ = u.run();
        if (o || I || (xe ? $.some((nt, Le) => Z(nt, Q[Le])) : Z($, Q))) {
          d && d();
          const nt = X;
          X = u;
          try {
            const Le = [
              $,
              // pass undefined as the old value when it's changed for the first time
              Q === Ve ? void 0 : xe && Q[0] === Ve ? [] : Q,
              v
            ];
            Q = $, c ? c(e, 3, Le) : (
              // @ts-expect-error
              e(...Le)
            );
          } finally {
            X = nt;
          }
        }
      } else
        u.run();
  };
  return i && i(ge), u = new rs(f), u.scheduler = r ? () => r(ge, !1) : ge, v = (y) => Rs(y, !1, u), d = u.onStop = () => {
    const y = He.get(u);
    if (y) {
      if (c)
        c(y, 4);
      else
        for (const $ of y) $();
      He.delete(u);
    }
  }, process.env.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), e ? s ? ge(!0) : Q = u.run() : r ? r(ge.bind(null, !0), !0) : u.run(), ae.pause = u.pause.bind(u), ae.resume = u.resume.bind(u), ae.stop = ae, ae;
}
function G(t, e = 1 / 0, n) {
  if (e <= 0 || !w(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(t)))
    return t;
  if (n.add(t), e--, T(t))
    G(t.value, e, n);
  else if (M(t))
    for (let s = 0; s < t.length; s++)
      G(t[s], e, n);
  else if (Yn(t) || he(t))
    t.forEach((s) => {
      G(s, e, n);
    });
  else if (Xn(t)) {
    for (const s in t)
      G(t[s], e, n);
    for (const s of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, s) && G(t[s], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const oe = [];
function Ls(t) {
  oe.push(t);
}
function $s() {
  oe.pop();
}
let rt = !1;
function A(t, ...e) {
  if (rt) return;
  rt = !0, Oe();
  const n = oe.length ? oe[oe.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Ps();
  if (s)
    et(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + e.map((a) => {
          var r, i;
          return (i = (r = a.toString) == null ? void 0 : r.call(a)) != null ? i : JSON.stringify(a);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: a }) => `at <${Ln(n, a.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const a = [`[Vue warn]: ${t}`, ...e];
    o.length && a.push(`
`, ...Vs(o)), console.warn(...a);
  }
  Ie(), rt = !1;
}
function Ps() {
  let t = oe[oe.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const s = t.component && t.component.parent;
    t = s && s.vnode;
  }
  return e;
}
function Vs(t) {
  const e = [];
  return t.forEach((n, s) => {
    e.push(...s === 0 ? [] : [`
`], ...Fs(n));
  }), e;
}
function Fs({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", s = t.component ? t.component.parent == null : !1, o = ` at <${Ln(
    t.component,
    t.type,
    s
  )}`, a = ">" + n;
  return t.props ? [o, ...Bs(t.props), a] : [o + a];
}
function Bs(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((s) => {
    e.push(...Cn(s, t[s]));
  }), n.length > 3 && e.push(" ..."), e;
}
function Cn(t, e, n) {
  return j(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : T(e) ? (e = Cn(t, g(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : b(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = g(e), n ? e : [`${t}=`, e]);
}
const vn = {
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
function et(t, e, n, s) {
  try {
    return s ? t(...s) : t();
  } catch (o) {
    Ot(o, e, n);
  }
}
function kn(t, e, n, s) {
  if (b(t)) {
    const o = et(t, e, n, s);
    return o && qn(o) && o.catch((a) => {
      Ot(a, e, n);
    }), o;
  }
  if (M(t)) {
    const o = [];
    for (let a = 0; a < t.length; a++)
      o.push(kn(t[a], e, n, s));
    return o;
  } else process.env.NODE_ENV !== "production" && A(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`
  );
}
function Ot(t, e, n, s = !0) {
  const o = e ? e.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: r } = e && e.appContext.config || _e;
  if (e) {
    let i = e.parent;
    const c = e.proxy, l = process.env.NODE_ENV !== "production" ? vn[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const p = i.ec;
      if (p) {
        for (let u = 0; u < p.length; u++)
          if (p[u](t, c, l) === !1)
            return;
      }
      i = i.parent;
    }
    if (a) {
      Oe(), et(a, null, 10, [
        t,
        c,
        l
      ]), Ie();
      return;
    }
  }
  js(t, n, o, s, r);
}
function js(t, e, n, s = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const a = vn[e];
    if (n && Ls(n), A(`Unhandled error${a ? ` during execution of ${a}` : ""}`), n && $s(), s)
      throw t;
    console.error(t);
  } else {
    if (o)
      throw t;
    console.error(t);
  }
}
const R = [];
let B = -1;
const fe = [];
let U = null, ie = 0;
const Ks = /* @__PURE__ */ Promise.resolve();
let Mt = null;
const Hs = 100;
function Us(t) {
  let e = B + 1, n = R.length;
  for (; e < n; ) {
    const s = e + n >>> 1, o = R[s], a = we(o);
    a < t || a === t && o.flags & 2 ? e = s + 1 : n = s;
  }
  return e;
}
function bn(t) {
  if (!(t.flags & 1)) {
    const e = we(t), n = R[R.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= we(n) ? R.push(t) : R.splice(Us(e), 0, t), t.flags |= 1, En();
  }
}
function En() {
  Mt || (Mt = Ks.then(An));
}
function _n(t) {
  M(t) ? fe.push(...t) : U && t.id === -1 ? U.splice(ie + 1, 0, t) : t.flags & 1 || (fe.push(t), t.flags |= 1), En();
}
function Ws(t) {
  if (fe.length) {
    const e = [...new Set(fe)].sort(
      (n, s) => we(n) - we(s)
    );
    if (fe.length = 0, U) {
      U.push(...e);
      return;
    }
    for (U = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), ie = 0; ie < U.length; ie++) {
      const n = U[ie];
      process.env.NODE_ENV !== "production" && Sn(t, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    U = null, ie = 0;
  }
}
const we = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function An(t) {
  process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const e = process.env.NODE_ENV !== "production" ? (n) => Sn(t, n) : le;
  try {
    for (B = 0; B < R.length; B++) {
      const n = R[B];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        n.flags & 4 && (n.flags &= -2), et(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; B < R.length; B++) {
      const n = R[B];
      n && (n.flags &= -2);
    }
    B = -1, R.length = 0, Ws(t), Mt = null, (R.length || fe.length) && An(t);
  }
}
function Sn(t, e) {
  const n = t.get(e) || 0;
  if (n > Hs) {
    const s = e.i, o = s && xn(s.type);
    return Ot(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return t.set(e, n + 1), !1;
}
const it = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Xe().__VUE_HMR_RUNTIME__ = {
  createRecord: ct(Gs),
  rerender: ct(Js),
  reload: ct(Zs)
});
const Ue = /* @__PURE__ */ new Map();
function Gs(t, e) {
  return Ue.has(t) ? !1 : (Ue.set(t, {
    initialDef: We(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function We(t) {
  return $n(t) ? t.__vccOpts : t;
}
function Js(t, e) {
  const n = Ue.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((s) => {
    e && (s.render = e, We(s.type).render = e), s.renderCache = [], s.update();
  }));
}
function Zs(t, e) {
  const n = Ue.get(t);
  if (!n) return;
  e = We(e), Ft(n.initialDef, e);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const a = s[o], r = We(a.type);
    let i = it.get(r);
    i || (r !== n.initialDef && Ft(r, e), it.set(r, i = /* @__PURE__ */ new Set())), i.add(a), a.appContext.propsCache.delete(a.type), a.appContext.emitsCache.delete(a.type), a.appContext.optionsCache.delete(a.type), a.ceReload ? (i.add(a), a.ceReload(e.styles), i.delete(a)) : a.parent ? bn(() => {
      a.parent.update(), i.delete(a);
    }) : a.appContext.reload ? a.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), a.root.ce && a !== a.root && a.root.ce._removeChildStyle(r);
  }
  _n(() => {
    it.clear();
  });
}
function Ft(t, e) {
  q(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function ct(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ce, Fe = [];
function zn(t, e) {
  var n, s;
  ce = t, ce ? (ce.enabled = !0, Fe.forEach(({ event: o, args: a }) => ce.emit(o, ...a)), Fe = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    zn(a, e);
  }), setTimeout(() => {
    ce || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Fe = []);
  }, 3e3)) : Fe = [];
}
let pe = null, Ys = null;
const qs = (t) => t.__isTeleport;
function wn(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, wn(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
Xe().requestIdleCallback;
Xe().cancelIdleCallback;
const Qs = Symbol.for("v-ndc"), Xs = {};
process.env.NODE_ENV !== "production" && (Xs.ownKeys = (t) => (A(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
let eo = null;
function to(t, e, n = !1) {
  const s = tt || pe;
  if (s || eo) {
    let o = s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return n && b(e) ? e.call(s && s.proxy) : e;
    process.env.NODE_ENV !== "production" && A(`injection "${String(t)}" not found.`);
  } else process.env.NODE_ENV !== "production" && A("inject() can only be used inside setup() or functional components.");
}
const no = {}, Nn = (t) => Object.getPrototypeOf(t) === no, so = uo, oo = Symbol.for("v-scx"), ao = () => {
  {
    const t = to(oo);
    return t || process.env.NODE_ENV !== "production" && A(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function ro(t, e, n) {
  return process.env.NODE_ENV !== "production" && !b(e) && A(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), io(t, e, n);
}
function io(t, e, n = _e) {
  const { immediate: s, deep: o, flush: a, once: r } = n;
  process.env.NODE_ENV !== "production" && !e && (s !== void 0 && A(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && A(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && A(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const i = q({}, n);
  process.env.NODE_ENV !== "production" && (i.onWarn = A);
  const c = e && s || !e && a !== "post";
  let l;
  if (Je) {
    if (a === "sync") {
      const d = ao();
      l = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!c) {
      const d = () => {
      };
      return d.stop = le, d.resume = le, d.pause = le, d;
    }
  }
  const p = tt;
  i.call = (d, v, I) => kn(d, p, v, I);
  let u = !1;
  a === "post" ? i.scheduler = (d) => {
    so(d, p && p.suspense);
  } : a !== "sync" && (u = !0, i.scheduler = (d, v) => {
    v ? d() : bn(d);
  }), i.augmentJob = (d) => {
    e && (d.flags |= 4), u && (d.flags |= 2, p && (d.id = p.uid, d.i = p));
  };
  const f = xs(t, e, i);
  return Je && (l ? l.push(f) : c && f()), f;
}
const co = (t) => t.__isSuspense;
function uo(t, e) {
  e && e.pendingBranch ? M(t) ? e.effects.push(...t) : e.effects.push(t) : _n(t);
}
const Tn = Symbol.for("v-fgt"), lo = Symbol.for("v-txt"), ho = Symbol.for("v-cmt");
function Ct(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const fo = (...t) => In(
  ...t
), On = ({ key: t }) => t ?? null, je = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? j(t) || T(t) || b(t) ? { i: pe, r: t, k: e, f: !!n } : t : null);
function po(t, e = null, n = null, s = 0, o = null, a = t === Tn ? 0 : 1, r = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && On(e),
    ref: e && je(e),
    scopeId: Ys,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: a,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: pe
  };
  return i ? (It(c, n), a & 128 && t.normalize(c)) : n && (c.shapeFlag |= j(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && A("VNode created with invalid key (NaN). VNode type:", c.type), c;
}
const De = process.env.NODE_ENV !== "production" ? fo : In;
function In(t, e = null, n = null, s = 0, o = null, a = !1) {
  if ((!t || t === Qs) && (process.env.NODE_ENV !== "production" && !t && A(`Invalid vnode type when creating vnode: ${t}.`), t = ho), Ct(t)) {
    const i = Ge(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && It(i, n), i.patchFlag = -2, i;
  }
  if ($n(t) && (t = t.__vccOpts), e) {
    e = go(e);
    let { class: i, style: c } = e;
    i && !j(i) && (e.class = At(i)), w(c) && (ze(c) && !M(c) && (c = q({}, c)), e.style = _t(c));
  }
  const r = j(t) ? 1 : co(t) ? 128 : qs(t) ? 64 : w(t) ? 4 : b(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && ze(t) && (t = g(t), A(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), po(
    t,
    e,
    n,
    s,
    o,
    r,
    a,
    !0
  );
}
function go(t) {
  return t ? ze(t) || Nn(t) ? q({}, t) : t : null;
}
function Ge(t, e, n = !1, s = !1) {
  const { props: o, ref: a, patchFlag: r, children: i, transition: c } = t, l = e ? mo(o || {}, e) : o, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: l,
    key: l && On(l),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? M(a) ? a.concat(je(e)) : [a, je(e)] : je(e)
    ) : a,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && M(i) ? i.map(Rn) : i,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Tn ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Ge(t.ssContent),
    ssFallback: t.ssFallback && Ge(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return c && s && wn(
    p,
    c.clone(p)
  ), p;
}
function Rn(t) {
  const e = Ge(t);
  return M(t.children) && (e.children = t.children.map(Rn)), e;
}
function yo(t = " ", e = 0) {
  return De(lo, null, t, e);
}
function It(t, e) {
  let n = 0;
  const { shapeFlag: s } = t;
  if (e == null)
    e = null;
  else if (M(e))
    n = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), It(t, o()), o._c && (o._d = !0));
      return;
    } else
      n = 32, !e._ && !Nn(e) && (e._ctx = pe);
  else b(e) ? (e = { default: e, _ctx: pe }, n = 32) : (e = String(e), s & 64 ? (n = 16, e = [yo(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function mo(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (const o in s)
      if (o === "class")
        e.class !== s.class && (e.class = At([e.class, s.class]));
      else if (o === "style")
        e.style = _t([e.style, s.style]);
      else if (Jn(o)) {
        const a = e[o], r = s[o];
        r && a !== r && !(M(a) && a.includes(r)) && (e[o] = a ? [].concat(a, r) : r);
      } else o !== "" && (e[o] = s[o]);
  }
  return e;
}
let tt = null;
const Do = () => tt || pe;
{
  const t = Xe(), e = (n, s) => {
    let o;
    return (o = t[n]) || (o = t[n] = []), o.push(s), (a) => {
      o.length > 1 ? o.forEach((r) => r(a)) : o[0](a);
    };
  };
  e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => tt = n
  ), e(
    "__VUE_SSR_SETTERS__",
    (n) => Je = n
  );
}
let Je = !1;
process.env.NODE_ENV;
const Mo = /(?:^|[-_])(\w)/g, Co = (t) => t.replace(Mo, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function xn(t, e = !0) {
  return b(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Ln(t, e, n = !1) {
  let s = xn(e);
  if (!s && e.__file) {
    const o = e.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && t && t.parent) {
    const o = (a) => {
      for (const r in a)
        if (a[r] === e)
          return r;
    };
    s = o(
      t.components || t.parent.type.components
    ) || o(t.appContext.components);
  }
  return s ? Co(s) : n ? "App" : "Anonymous";
}
function $n(t) {
  return b(t) && "__vccOpts" in t;
}
const k = (t, e) => {
  const n = Is(t, e, Je);
  if (process.env.NODE_ENV !== "production") {
    const s = Do();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function vo(t, e, n) {
  const s = arguments.length;
  return s === 2 ? w(e) && !M(e) ? Ct(e) ? De(t, null, [e]) : De(t, e) : De(t, null, e) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Ct(n) && (n = [n]), De(t, e, n));
}
function ko() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!w(u))
        return null;
      if (u.__isVue)
        return ["div", t, "VueInstance"];
      if (T(u)) {
        Oe();
        const f = u.value;
        return Ie(), [
          "div",
          {},
          ["span", t, p(u)],
          "<",
          i(f),
          ">"
        ];
      } else {
        if (ve(u))
          return [
            "div",
            {},
            ["span", t, N(u) ? "ShallowReactive" : "Reactive"],
            "<",
            i(u),
            `>${K(u) ? " (readonly)" : ""}`
          ];
        if (K(u))
          return [
            "div",
            {},
            ["span", t, N(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            i(u),
            ">"
          ];
      }
      return null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...a(u.$)
        ];
    }
  };
  function a(u) {
    const f = [];
    u.type.props && u.props && f.push(r("props", g(u.props))), u.setupState !== _e && f.push(r("setup", u.setupState)), u.data !== _e && f.push(r("data", g(u.data)));
    const d = c(u, "computed");
    d && f.push(r("computed", d));
    const v = c(u, "inject");
    return v && f.push(r("injected", v)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), f;
  }
  function r(u, f) {
    return f = q({}, f), Object.keys(f).length ? [
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
        ...Object.keys(f).map((d) => [
          "div",
          {},
          ["span", s, d + ": "],
          i(f[d], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(u, f = !0) {
    return typeof u == "number" ? ["span", e, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", s, u] : w(u) ? ["object", { object: f ? g(u) : u }] : ["span", n, String(u)];
  }
  function c(u, f) {
    const d = u.type;
    if (b(d))
      return;
    const v = {};
    for (const I in u.ctx)
      l(d, I, f) && (v[I] = u.ctx[I]);
    return v;
  }
  function l(u, f, d) {
    const v = u[d];
    if (M(v) && v.includes(f) || w(v) && f in v || u.extends && l(u.extends, f, d) || u.mixins && u.mixins.some((I) => l(I, f, d)))
      return !0;
  }
  function p(u) {
    return N(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function bo() {
  ko();
}
process.env.NODE_ENV !== "production" && bo();
function Rt(t) {
  return t instanceof Function || typeof t == "function";
}
function Y(t) {
  return Rt(t) ? t() : t;
}
async function Eo(t) {
  const e = Y(t);
  return e instanceof Promise ? await e : e;
}
function Ne(t) {
  return !!(t && typeof t == "object");
}
function H(t, e) {
  if (Ne(t)) {
    const n = [];
    return t instanceof Map ? t.forEach((s, o) => n.push(e(s, o, t))) : Array.isArray(t) ? t.forEach((s, o) => n.push(e(s, o, t))) : Object.entries(t).forEach(
      ([s, o]) => n.push(e(o, s, t))
    ), n.filter((s) => s !== void 0);
  }
  return [];
}
function ut(t) {
  return T(t) ? t.value : t;
}
function Pn(t, e = "=", n = "&") {
  return H(
    t,
    (s, o) => `${o}${e}${encodeURIComponent(String(s).trim())}`
  ).sort().join(n);
}
function D() {
  return typeof window < "u";
}
function Re(t) {
  return t == null;
}
function z(t, e) {
  if (t)
    switch (typeof t) {
      case "bigint":
      case "number":
        return t !== 0;
      case "boolean":
        return t;
      case "function":
      case "symbol":
        return !0;
      case "object":
        return Array.isArray(t) ? t.length > 0 : Object.values(t).some((n) => !Re(n));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(t);
      case "undefined":
        return !1;
      default:
        return !!t;
    }
  return !1;
}
function ee(t) {
  return Ne(t) && !Array.isArray(t);
}
function Ze(t) {
  return typeof t == "string";
}
function _o(t, e) {
  return Math.floor(Math.random() * (e - t + 1) + t);
}
function Ye(t) {
  return Array.isArray(t) ? t : [t];
}
function Vn(t) {
  return D() && t === window;
}
function J(t) {
  if (D())
    return Vn(t) ? document.body : Ze(t) ? document.querySelector(t) ?? void 0 : t;
}
function Bt(t) {
  return Vn(t) ? t : J(t);
}
function Ao(t) {
  var e;
  return !!((e = J(t)) != null && e.closest("html"));
}
class jt {
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
  constructor(e, n = ["click"], s, o, a) {
    /**
     * Element.
     *
     * Элемент.
     */
    h(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.
     *
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     */
    h(this, "elementControl");
    h(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.
     *
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     */
    h(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.
     *
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     */
    h(this, "listenerRecent", (e) => {
      var n, s;
      Ao(this.elementControl) ? ((n = this.listener) == null || n.call(this.element, e, this.detail), Ne(this.options) && ((s = this.options) != null && s.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    h(this, "activity", !1);
    h(this, "activityItems", []);
    this.listener = s, this.options = o, this.detail = a, this.element = Bt(e), this.elementControl = J(e), this.type = Ye(n);
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
  setElement(e) {
    const n = Bt(e);
    return this.elementControlEdit || (this.elementControl = J(e)), this.element = n, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(e) {
    return this.elementControl = J(e), this.elementControlEdit = !Re(this.elementControl), this.elementControlEdit || (this.elementControl = J(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(e) {
    return this.type = Ye(e), this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param listener
   */
  setListener(e) {
    return this.listener = e, this;
  }
  /**
   * Modifying the options object that defines the characteristics of an object.
   *
   * Изменение объекта options, который определяет характеристики объекта.
   * @param options
   */
  setOptions(e) {
    return this.options = e, this.reset(), this;
  }
  /**
   * Modifying a dependent value for the dispatch method.
   *
   * Изменение зависимого значения для метода dispatch.
   * @param detail
   */
  setDetail(e) {
    return this.detail = e, this;
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
  dispatch(e = this.detail) {
    return this.type.forEach(
      (n) => {
        var s;
        return (s = this.element) == null ? void 0 : s.dispatchEvent(new CustomEvent(n, { detail: e }));
      }
    ), this;
  }
  /**
   * Starting event listening.
   *
   * Запуск прослушивания события.
   */
  start() {
    return this.activity || (this.activity = !0, this.activityItems = [], this.type.forEach((e) => {
      this.element && !(e === "resize" && this.makeResize()) && !(e === "scroll-sync" && this.makeScroll()) && (this.element.addEventListener(e, this.listenerRecent, this.options), this.activityItems.push({
        element: this.element,
        type: e
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
      element: e,
      type: n,
      listener: s,
      observer: o
    }) => {
      o ? o.disconnect() : s ? e == null || e.removeEventListener(n, s) : e == null || e.removeEventListener(n, this.listenerRecent);
    })), this;
  }
  /**
   * Toggling event handler state.
   *
   * Переключение состояния работы события.
   * @param activity event activation/ активация события
   */
  toggle(e) {
    return e ? this.start() : this.stop();
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
      const e = new ResizeObserver(
        (n) => this.listenerRecent(n == null ? void 0 : n[0])
      );
      return e.observe(this.element), this.activityItems.push({
        element: this.element,
        type: "resize",
        observer: e
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
      let e = !1;
      const n = (s) => {
        e || (e = !0, requestAnimationFrame(() => {
          this.listenerRecent(s), e = !1;
        }));
      };
      return this.element.addEventListener("scroll", n, this.options), this.element.addEventListener("resize", n, this.options), this.activityItems.push(
        {
          element: this.element,
          type: "scroll",
          listener: n
        },
        {
          element: this.element,
          type: "resize",
          listener: n
        }
      ), !0;
    }
    return !1;
  }
}
const Kt = "ui-loading", ke = class ke {
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
  static registrationEvent(e, n) {
    new jt(window, Kt, e).setElementControl(n).start();
  }
  /**
   * Calls the event listener.
   *
   * Вызывает слушателя событий.
   */
  static dispatch() {
    var e;
    (e = this.event) == null || e.dispatch({ loading: this.is() });
  }
};
h(ke, "value", 0), h(ke, "event"), D() && (ke.event = new jt(window, Kt));
let te = ke;
function So(t) {
  return JSON.parse(JSON.stringify(t));
}
function vt(t) {
  switch (typeof t) {
    case "number":
      return !0;
    case "string":
      return !!t.match(/^[0-9]+$/);
    default:
      return !1;
  }
}
function P(t) {
  if (typeof t == "number")
    return t;
  if (!t)
    return 0;
  let e = t.replace(/[^\d., ]+/ig, "");
  return e.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? e = e.replace(/ /ig, "").replace(/,/ig, ".") : e.match(/,[0-9]{3}[,.]/ig) ? e = e.replace(/,/ig, "") : e.match(/[.][0-9]{3}[,.]/ig) ? e = e.replace(/[.]/ig, "").replace(/,/ig, ".") : e = e.replace(/,/ig, "."), parseFloat(e);
}
function zo(t, e) {
  return Re(t) ? !1 : Array.isArray(e) ? e.includes(t) : vt(t) && vt(e) ? P(t) === P(e) : t === e;
}
let Ht = "ui-storage";
class xt {
  /**
   * Constructor
   * @param name value name /<br>название значения
   * @param isSession should we use a session? /<br>использовать ли сессию?
   */
  constructor(e, n = !1) {
    h(this, "value");
    h(this, "age");
    this.name = e, this.isSession = n;
    const s = `${n ? "session" : "storage"}#${e}`;
    if (s in lt)
      return lt[s];
    const o = this.getValue();
    o && (this.value = o.value, this.age = o.age), lt[s] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(e) {
    Ht = e;
  }
  /**
   * Getting data from local storage.<br>
   * Получение данных из локального хранилища.
   * @param defaultValue default value /<br>значение по умолчанию
   * @param cache cache time /<br>время кэширования
   */
  get(e, n) {
    if (this.value !== null && this.value !== void 0 && this.isCache(n))
      return this.value;
    if (e !== void 0)
      return this.set(e);
  }
  /**
   * Changing data in storage.<br>
   * Изменение данных в хранилище.
   * @param value new values /<br>новые значения
   */
  set(e) {
    var n, s;
    return this.value = Y(e), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? (n = this.getMethod()) == null || n.removeItem(this.getIndex()) : (s = this.getMethod()) == null || s.setItem(this.getIndex(), JSON.stringify({
      value: this.value,
      age: this.age
    })), this.value;
  }
  /**
   * Checks for storage time limit.<br>
   * Проверяет на лимит времени хранения.
   * @param cache cache time /<br>время кэширования
   */
  isCache(e) {
    return Re(e) || this.age && this.age + e * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (D())
      return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${Ht}${this.name}`;
  }
  /**
   * Getting data from storage.<br>
   * Получение данных из хранилища.
   */
  getValue() {
    var n;
    const e = (n = this.getMethod()) == null ? void 0 : n.getItem(this.getIndex());
    if (e)
      try {
        return JSON.parse(e);
      } catch (s) {
        console.error("DataStorage", s);
      }
  }
}
const lt = {}, wo = /* @__PURE__ */ JSON.parse('[{"country":"US","countryAlternative":["EN"],"language":"en","languageAlternative":["us"],"firstDay":"Su","zone":"America/New_York","phoneCode":"1","phoneMask":["+1-***-***-****"]},{"country":"GB","countryAlternative":["UK"],"language":"en","firstDay":"Mo","zone":"Europe/London","phoneCode":"44","phoneMask":["+44-**-****-****"]},{"country":"AF","language":"fa","firstDay":"Sa","zone":"Asia/Kabul","phoneCode":"93","phoneMask":["+93-**-***-****"]},{"country":"AL","language":"sq","firstDay":"Mo","zone":"Europe/Tirane","phoneCode":"355","phoneMask":["+355-***-***-***"]},{"country":"DZ","language":"ar","firstDay":"Sa","zone":"Africa/Algiers","phoneCode":"213","phoneMask":["+213-**-***-****"]},{"country":"AS","language":"en","firstDay":null,"zone":"Pacific/Pago_Pago","phoneCode":"1-684","phoneMask":["+1-684-***-****"]},{"country":"AD","language":"ca","firstDay":"Mo","zone":"Europe/Andorra","phoneCode":"376","phoneMask":["+376-***-***"]},{"country":"AO","language":"pt","firstDay":null,"zone":"Africa/Lagos","phoneCode":"244","phoneMask":["+244-***-***-***"]},{"country":"AI","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-264","phoneMask":["+1-264-***-****"]},{"country":"AQ","language":"en","firstDay":null,"zone":"Antarctica/Troll","phoneCode":"672","phoneMask":["+672-1-**-***"]},{"country":"AG","language":"en","firstDay":null,"zone":"America/Antigua","phoneCode":"1-268","phoneMask":["+1-268-***-****"]},{"country":"AR","language":"es","firstDay":"Su","zone":"America/Argentina/Buenos_Aires","phoneCode":"54","phoneMask":["+54-***-***-****"]},{"country":"AM","language":"hy","firstDay":"Mo","zone":"Asia/Yerevan","phoneCode":"374","phoneMask":["+374-**-***-***"]},{"country":"AW","language":"nl","firstDay":null,"zone":"America/Curacao","phoneCode":"297","phoneMask":["+297-***-****"]},{"country":"AU","language":"en","firstDay":"Mo","zone":"Australia/Sydney","phoneCode":"61","phoneMask":["+61-*-****-****"]},{"country":"AT","language":"de","firstDay":"Mo","zone":"Europe/Vienna","phoneCode":"43","phoneMask":["+43-***-***-****","+43-***-***-*****"]},{"country":"AZ","language":"az","firstDay":"Mo","zone":"Asia/Baku","phoneCode":"994","phoneMask":"+994-**-***-**-**"},{"country":"BS","language":"en","firstDay":null,"zone":"America/Nassau","phoneCode":"1-242","phoneMask":"+1-242-***-****"},{"country":"BH","language":"ar","firstDay":"Sa","zone":"Asia/Bahrain","phoneCode":"973","phoneMask":"+973-****-****"},{"country":"BD","language":"bn","firstDay":null,"zone":"Asia/Dhaka","phoneCode":"880","phoneMask":"+880-**-***-***"},{"country":"BB","language":"en","firstDay":null,"zone":"America/Barbados","phoneCode":"1-246","phoneMask":"+1-246-***-****"},{"country":"BY","language":"be","firstDay":"Mo","zone":"Europe/Minsk","phoneCode":"375","phoneMask":"+375-**-***-**-**"},{"country":"BE","language":"nl","firstDay":"Mo","zone":"Europe/Brussels","phoneCode":"32","phoneMask":"+32-***-***-***"},{"country":"BZ","language":"en","firstDay":"Su","zone":"America/Belize","phoneCode":"501","phoneMask":"+501-***-****"},{"country":"BJ","language":"fr","firstDay":null,"zone":"Africa/Lagos","phoneCode":"229","phoneMask":"+229-**-**-****"},{"country":"BM","language":"en","firstDay":null,"zone":"Atlantic/Bermuda","phoneCode":"1-441","phoneMask":"+1-441-***-****"},{"country":"BT","language":"dz","firstDay":null,"zone":"Asia/Thimphu","phoneCode":"975","phoneMask":["+975-*-***-***","+975-17-***-***"]},{"country":"BO","language":"es","firstDay":"Su","zone":"America/La_Paz","phoneCode":"591","phoneMask":"+591-*-***-****"},{"country":"BA","language":"bs","firstDay":null,"zone":"Europe/Belgrade","phoneCode":"387","phoneMask":["+387-**-****","+387-**-*****"]},{"country":"BW","language":"en","firstDay":null,"zone":"Africa/Maputo","phoneCode":"267","phoneMask":"+267-**-***-***"},{"country":"BR","language":"pt","firstDay":"Su","zone":"America/Sao_Paulo","phoneCode":"55","phoneMask":["+55-**-****-****","+55-**-*****-****"]},{"country":"IO","language":"en","firstDay":null,"zone":"Indian/Chagos","phoneCode":"246","phoneMask":"+246-***-****"},{"country":"VG","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-284","phoneMask":"+1-284-***-****"},{"country":"BN","language":"ms","firstDay":"Mo","zone":"Asia/Brunei","phoneCode":"673","phoneMask":"+673-***-****"},{"country":"BG","language":"bg","firstDay":"Mo","zone":"Europe/Sofia","phoneCode":"359","phoneMask":"+359-***-***-***"},{"country":"BF","language":"fr","firstDay":null,"zone":"Africa/Abidjan","phoneCode":"226","phoneMask":"+226-**-**-****"},{"country":"BI","language":"fr","firstDay":null,"zone":"Africa/Maputo","phoneCode":"257","phoneMask":"+257-**-**-****"},{"country":"KH","language":"km","firstDay":null,"zone":"Asia/Phnom_Penh","phoneCode":"855","phoneMask":"+855-**-***-***"},{"country":"CM","phoneCode":"237","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":"+237-****-****"},{"country":"CA","phoneCode":"1","zone":"America/Toronto","language":"en","firstDay":"Su","phoneMask":"+1-***-***-****"},{"country":"CV","phoneCode":"238","zone":"Atlantic/Cape_Verde","language":"pt","firstDay":null,"phoneMask":"+238-***-**-**"},{"country":"KY","phoneCode":"1-345","zone":"America/Cayman","language":"en","firstDay":null,"phoneMask":"+1-345-***-****"},{"country":"CF","phoneCode":"236","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+236-**-**-****"},{"country":"TD","phoneCode":"235","zone":"Africa/Ndjamena","language":"fr","firstDay":null,"phoneMask":"+235-**-**-**-**"},{"country":"CL","phoneCode":"56","zone":"America/Santiago","language":"es","firstDay":"Su","phoneMask":"+56-*-****-****"},{"country":"CN","phoneCode":"86","zone":"Asia/Shanghai","language":"zh","firstDay":"Su","phoneMask":["+86-***-****-***","+86-***-****-****","+86-**-*****-*****"]},{"country":"CX","phoneCode":"61","zone":"Indian/Christmas","language":"en","firstDay":null},{"country":"CC","phoneCode":"61","zone":"Indian/Cocos","language":"ms","firstDay":null},{"country":"CO","phoneCode":"57","zone":"America/Bogota","language":"es","firstDay":"Su","phoneMask":"+57-***-***-****"},{"country":"KM","phoneCode":"269","zone":"Indian/Comoro","language":"ar","firstDay":null,"phoneMask":"+269-**-*****"},{"country":"CK","phoneCode":"682","zone":"Pacific/Rarotonga","language":"en","firstDay":null,"phoneMask":"+682-**-***"},{"country":"CR","phoneCode":"506","zone":"America/Costa_Rica","language":"es","firstDay":"Su","phoneMask":"+506-****-****"},{"country":"HR","phoneCode":"385","zone":"Europe/Belgrade","language":"hr","firstDay":"Mo","phoneMask":"+385-**-***-***"},{"country":"CU","phoneCode":"53","zone":"America/Havana","language":"es","firstDay":null,"phoneMask":"+53-*-***-****"},{"country":"CW","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+599-***-****"},{"country":"CY","phoneCode":"357","zone":"Asia/Nicosia","language":"el","firstDay":null,"phoneMask":"+357-**-***-***"},{"country":"CZ","phoneCode":"420","zone":"Europe/Prague","language":"cs","languageAlternative":["cz"],"firstDay":"Mo","phoneMask":"+420-***-***-***"},{"country":"CD","phoneCode":"243","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+243-***-***-***"},{"country":"DK","phoneCode":"45","zone":"Europe/Copenhagen","language":"da","firstDay":"Mo","phoneMask":"+45-**-**-**-**"},{"country":"DJ","phoneCode":"253","zone":"Africa/Djibouti","language":"fr","firstDay":null,"phoneMask":"+253-**-**-**-**"},{"country":"DM","phoneCode":"1-767","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-767-***-****"},{"country":"DO","phoneCode":"1-809","zone":"North America","language":"America/Santo_Domingo","firstDay":"Su","phoneMask":["+1-809-***-****","+1-829-***-****","+1-849-***-****"]},{"country":"TL","phoneCode":"670","zone":"Asia/Dili","language":"tet","firstDay":null,"phoneMask":["+670-***-****","+670-77-*-*****","+670-78-*-*****"]},{"country":"EC","phoneCode":"593","zone":"America/Guayaquil","language":"es","firstDay":"Su","phoneMask":["+593-*-***-****","+593-**-***-****"]},{"country":"EG","phoneCode":"20","zone":"Africa/Cairo","language":"ar","firstDay":"Sa","phoneMask":"+20-***-***-****"},{"country":"SV","phoneCode":"503","zone":"America/El_Salvador","language":"es","firstDay":"Su","phoneMask":"+503-**-**-****"},{"country":"GQ","phoneCode":"240","zone":"Africa/Lagos","language":"es","firstDay":null,"phoneMask":"+240-**-***-****"},{"country":"ER","phoneCode":"291","zone":"Africa/Asmara","language":"aa","firstDay":null,"phoneMask":"+291-*-***-***"},{"country":"EE","phoneCode":"372","zone":"Europe/Tallinn","language":"et","firstDay":"Mo","phoneMask":["+372-***-****","+372-****-****"]},{"country":"ET","phoneCode":"251","zone":"Africa/Addis_Ababa","language":"am","firstDay":null,"phoneMask":"+251-**-***-****"},{"country":"FK","phoneCode":"500","zone":"Atlantic/Stanley","language":"en","firstDay":null,"phoneMask":"+500-*****"},{"country":"FO","phoneCode":"298","zone":"Atlantic/Faroe","language":"fo","firstDay":null,"phoneMask":"+298-***-***"},{"country":"FJ","phoneCode":"679","zone":"Pacific/Fiji","language":"en","firstDay":null,"phoneMask":"+679-**-*****"},{"country":"FI","phoneCode":"358","zone":"Europe/Helsinki","language":"fi","firstDay":"Mo","phoneMask":["+358-***-***-**-*","+358-***-***-**-**"]},{"country":"FR","phoneCode":"33","zone":"Europe/Paris","language":"fr","firstDay":"Mo","phoneMask":["+33-***-***-***","+262-*****-****","+508-**-****","+590-***-***-***"]},{"country":"PF","phoneCode":"689","zone":"Pacific/Tahiti","language":"fr","firstDay":null,"phoneMask":"+689-**-**-**"},{"country":"GA","phoneCode":"241","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+241-*-**-**-**"},{"country":"GM","phoneCode":"220","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+220-***-**-**"},{"country":"GE","phoneCode":"995","zone":"Asia/Tbilisi","language":"ka","firstDay":"Mo","phoneMask":"+995-***-***-***"},{"country":"DE","phoneCode":"49","zone":"Europe/Berlin","language":"de","firstDay":"Mo","phoneMask":["+49-***-***","+49-***-***-****","+49-****-***-****"]},{"country":"GH","phoneCode":"233","zone":"Africa/Accra","language":"en","firstDay":null,"phoneMask":"+233-***-***-***"},{"country":"GI","phoneCode":"350","zone":"Europe/Gibraltar","language":"en","firstDay":null,"phoneMask":"+350-***-*****"},{"country":"GR","phoneCode":"30","zone":"Europe/Athens","language":"el","firstDay":"Mo","phoneMask":"+30-***-***-****"},{"country":"GL","phoneCode":"299","zone":"America/Godthab","language":"kl","firstDay":null,"phoneMask":"+299-**-**-**"},{"country":"GD","phoneCode":"1-473","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-473-***-****"},{"country":"GU","phoneCode":"1-671","zone":"Pacific/Guam","language":"en","firstDay":null,"phoneMask":"+1-671-***-****"},{"country":"GT","phoneCode":"502","zone":"America/Guatemala","language":"es","firstDay":"Su","phoneMask":"+502-*-***-****"},{"country":"GG","phoneCode":"44-1481","zone":"Europe/London","language":"en","firstDay":null},{"country":"GN","phoneCode":"224","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+224-**-***-***"},{"country":"GW","phoneCode":"245","zone":"Africa/Bissau","language":"pt","firstDay":null,"phoneMask":"+245-*-******"},{"country":"GY","phoneCode":"592","zone":"America/Guyana","language":"en","firstDay":null,"phoneMask":"+592-***-****"},{"country":"HT","phoneCode":"509","zone":"America/Port-au-Prince","language":"ht","firstDay":null,"phoneMask":"+509-**-**-****"},{"country":"HN","phoneCode":"504","zone":"America/Tegucigalpa","language":"es","firstDay":"Su","phoneMask":"+504-****-****"},{"country":"HK","phoneCode":"852","zone":"Asia/Hong_Kong","language":"zh","firstDay":"Su","phoneMask":"+852-****-****"},{"country":"HU","phoneCode":"36","zone":"Europe/Budapest","language":"hu","firstDay":"Mo","phoneMask":"+36-***-***-***","nameFormat":"lf"},{"country":"IS","phoneCode":"354","zone":"Atlantic/Reykjavik","language":"is","firstDay":"Mo","phoneMask":"+354-***-****"},{"country":"IN","phoneCode":"91","zone":"Asia/Kolkata","language":"en","firstDay":"Mo","phoneMask":"+91-****-***-***"},{"country":"ID","phoneCode":"62","zone":"Asia/Jakarta","language":"id","firstDay":"Mo","phoneMask":["+62-**-***-**","+62-**-***-***","+62-**-***-****","+62-8-**-***-***","+62-8-**-***-****","+62-8-**-***-**-***"]},{"country":"IR","phoneCode":"98","zone":"Asia/Tehran","language":"fa","firstDay":"Sa","phoneMask":"+98-***-***-****"},{"country":"IQ","phoneCode":"964","zone":"Asia/Baghdad","language":"ar","firstDay":"Sa","phoneMask":"+964-***-***-****"},{"country":"IE","firstDay":"Mo","language":"en","phoneCode":"353","phoneMask":"+353-***-***-***","zone":"Europe/Dublin"},{"country":"IM","firstDay":null,"language":"Pound","phoneCode":"44-1624","zone":"Isle of Man"},{"country":"IL","firstDay":"Su","language":"he","languageAlternative":["il"],"phoneCode":"972","phoneMask":["+972-*-***-****","+972-5-*-***-****"],"zone":"Asia/Jerusalem"},{"country":"IT","firstDay":"Mo","language":"it","phoneCode":"39","phoneMask":"+39-***-****-***","zone":"Europe/Rome"},{"country":"CI","phoneCode":"225","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+225-**-***-***"},{"country":"JM","phoneCode":"1-876","zone":"America/Jamaica","language":"en","firstDay":"Su","phoneMask":"+1-876-***-****"},{"country":"JP","phoneCode":"81","zone":"Asia/Tokyo","language":"ja","firstDay":"Su","phoneMask":["+81-***-***-***","+81-**-****-****"],"nameFormat":"lf"},{"country":"JE","phoneCode":"44-1534","zone":"Europe/London","language":"en","firstDay":null},{"country":"JO","phoneCode":"962","zone":"Asia/Amman","language":"ar","firstDay":"Sa","phoneMask":"+962-*-****-****"},{"country":"KZ","phoneCode":"7","zone":"Asia/Almaty","language":"kk","firstDay":"Mo","phoneMask":["+7-6-**-***-**-**","+7-7-**-***-**-**"],"nameFormat":"lf"},{"country":"KE","phoneCode":"254","zone":"Africa/Nairobi","language":"en","firstDay":"Su","phoneMask":"+254-***-******"},{"country":"KI","phoneCode":"686","zone":"Pacific/Tarawa","language":"en","firstDay":null,"phoneMask":"+686-**-***"},{"country":"XK","phoneCode":"383","zone":"Europe/Belgrade","language":"sq","firstDay":"Mo"},{"country":"KW","phoneCode":"965","zone":"Asia/Kuwait","language":"ar","firstDay":"Sa","phoneMask":"+965-****-****"},{"country":"KG","phoneCode":"996","zone":"Asia/Bishkek","language":"ky","firstDay":"Mo","phoneMask":"+996-***-***-***"},{"country":"LA","phoneCode":"856","zone":"Asia/Vientiane","language":"lo","firstDay":null,"phoneMask":["+856-**-***-***","+856-20-**-***-***"]},{"country":"LV","phoneCode":"371","zone":"Europe/Riga","language":"lv","firstDay":"Mo","phoneMask":"+371-**-***-***"},{"country":"LB","phoneCode":"961","zone":"Asia/Beirut","language":"ar","firstDay":"Mo","phoneMask":["+961-*-***-***","+961-**-***-***"]},{"country":"LS","phoneCode":"266","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+266-*-***-****"},{"country":"LR","phoneCode":"231","zone":"Africa/Monrovia","language":"en","firstDay":null,"phoneMask":"+231-**-***-***"},{"country":"LY","phoneCode":"218","zone":"Africa/Tripoli","language":"ar","firstDay":"Sa","phoneMask":["+218-**-***-***","+218-21-***-****"]},{"country":"LI","phoneCode":"423","zone":"Europe/Zurich","language":"de","firstDay":null,"phoneMask":"+423-***-***-****"},{"country":"LT","phoneCode":"370","zone":"Europe/Vilnius","language":"lt","firstDay":"Mo","phoneMask":"+370-***-**-***"},{"country":"LU","phoneCode":"352","zone":"Europe/Luxembourg","language":"lb","firstDay":"Mo","phoneMask":"+352-***-***-***"},{"country":"MO","phoneCode":"853","zone":"Asia/Macau","language":"zh","firstDay":null,"phoneMask":"+853-****-****"},{"country":"MK","phoneCode":"389","zone":"Europe/Belgrade","language":"mk","firstDay":"Mo","phoneMask":"+389-**-***-***"},{"country":"MG","phoneCode":"261","zone":"Indian/Antananarivo","language":"fr","firstDay":null,"phoneMask":"+261-**-**-*****"},{"country":"MW","phoneCode":"265","zone":"Africa/Maputo","language":"ny","firstDay":null,"phoneMask":["+265-*-****-****","+265-1-***-***"]},{"country":"MY","phoneCode":"60","zone":"Asia/Kuala_Lumpur","language":"ms","firstDay":"Mo","phoneMask":["+60-*-***-***","+60-**-***-***","+60-**-***-****","+60-***-***-***"]},{"country":"MV","phoneCode":"960","zone":"Indian/Maldives","language":"dv","firstDay":null,"phoneMask":"+960-***-****"},{"country":"ML","phoneCode":"223","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+223-**-**-****"},{"country":"MT","phoneCode":"356","zone":"Europe/Malta","language":"mt","firstDay":null,"phoneMask":"+356-****-****"},{"country":"MH","phoneCode":"692","zone":"Pacific/Majuro","language":"mh","firstDay":null,"phoneMask":"+692-***-****"},{"country":"MR","phoneCode":"222","zone":"Africa/Abidjan","language":"ar","firstDay":null,"phoneMask":"+222-**-**-****"},{"country":"MU","phoneCode":"230","zone":"Indian/Mauritius","language":"en","firstDay":null,"phoneMask":"+230-***-****"},{"country":"YT","phoneCode":"262","zone":"Indian/Mayotte","language":"fr","firstDay":null},{"country":"MX","phoneCode":"52","zone":"America/Mexico_City","language":"es","firstDay":"Su","phoneMask":["+52-**-**-****","+52-***-***-****"]},{"country":"FM","phoneCode":"691","zone":"Pacific/Pohnpei","language":"en","firstDay":null,"phoneMask":"+691-***-****"},{"country":"MD","phoneCode":"373","zone":"Europe/Chisinau","language":"ro","firstDay":null,"phoneMask":"+373-****-****"},{"country":"MC","phoneCode":"377","zone":"Europe/Monaco","language":"fr","firstDay":"Mo","phoneMask":["+377-**-***-***","+377-***-***-***"]},{"country":"MN","phoneCode":"976","zone":"Asia/Ulaanbaatar","language":"mn","firstDay":"Mo","phoneMask":"+976-**-**-****"},{"country":"ME","phoneCode":"382","zone":"Europe/Belgrade","language":"sr","firstDay":null,"phoneMask":"+382-**-***-***"},{"country":"MS","phoneCode":"1-664","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-664-***-****"},{"country":"MA","phoneCode":"212","zone":"Africa/Casablanca","language":"ar","firstDay":"Mo","phoneMask":"+212-**-****-***"},{"country":"MZ","phoneCode":"258","zone":"Africa/Maputo","language":"pt","firstDay":null,"phoneMask":"+258-**-***-***"},{"country":"MM","phoneCode":"95","zone":"Asia/Rangoon","language":"my","firstDay":null,"phoneMask":["+95-***-***","+95-*-***-***","+95-**-***-***"]},{"country":"NA","phoneCode":"264","zone":"Africa/Windhoek","language":"en","firstDay":null,"phoneMask":"+264-**-***-****"},{"country":"NR","phoneCode":"674","zone":"Pacific/Nauru","language":"na","firstDay":null,"phoneMask":"+674-***-****"},{"country":"NP","phoneCode":"977","zone":"Asia/Kathmandu","language":"ne","firstDay":null,"phoneMask":"+977-**-***-***"},{"country":"NL","phoneCode":"31","zone":"Europe/Amsterdam","language":"nl","firstDay":"Mo","phoneMask":"+31-**-***-****"},{"country":"AN","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":["+599-***-****","+599-9-***-****"]},{"country":"NC","phoneCode":"687","zone":"Pacific/Noumea","language":"fr","firstDay":null,"phoneMask":"+687-**-****"},{"country":"NZ","phoneCode":"64","zone":"Pacific/Auckland","language":"en","firstDay":"Mo","phoneMask":["+64-**-***-***","+64-***-***-***","+64-***-***-****"]},{"country":"NI","phoneCode":"505","zone":"America/Managua","language":"es","firstDay":"Su","phoneMask":"+505-****-****"},{"country":"NE","phoneCode":"227","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+227-**-**-****"},{"country":"NG","phoneCode":"234","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":["+234-**-***-**","+234-**-***-***","+234-***-***-****"]},{"country":"NU","phoneCode":"683","zone":"Pacific/Niue","language":"niu","firstDay":null,"phoneMask":"+683-****"},{"country":"KP","phoneCode":"850","zone":"Asia/Pyongyang","language":"ko","firstDay":null,"phoneMask":["+850-***-***","+850-**-***-***","+850-****-****","+850-***-****-***","+850-****-*************","+850-191-***-****"]},{"country":"MP","phoneCode":"1-670","zone":"Pacific/Saipan","language":"fil","firstDay":null,"phoneMask":"+1-670-***-****"},{"country":"NO","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":"Mo","phoneMask":"+47-***-**-***"},{"country":"OM","phoneCode":"968","zone":"Asia/Muscat","language":"ar","firstDay":"Sa","phoneMask":"+968-**-***-***"},{"country":"PK","phoneCode":"92","zone":"Asia/Karachi","language":"ur","firstDay":"Mo","phoneMask":"+92-***-***-****"},{"country":"PW","phoneCode":"680","zone":"Pacific/Palau","language":"pau","firstDay":null,"phoneMask":"+680-***-****"},{"country":"PS","phoneCode":"970","zone":"Asia/Hebron","language":"ar","firstDay":null,"phoneMask":"+970-**-***-****"},{"country":"PA","phoneCode":"507","zone":"America/Panama","language":"es","firstDay":"Su","phoneMask":"+507-***-****"},{"country":"PG","phoneCode":"675","zone":"Pacific/Port_Moresby","language":"en","firstDay":null,"phoneMask":"+675-***-**-***"},{"country":"PY","phoneCode":"595","zone":"America/Asuncion","language":"es","firstDay":"Mo","phoneMask":"+595-***-***-***"},{"country":"PE","phoneCode":"51","zone":"America/Lima","language":"es","firstDay":"Su","phoneMask":"+51-***-***-***"},{"country":"PH","phoneCode":"63","zone":"Asia/Manila","language":"tl","firstDay":"Su","phoneMask":"+63-***-***-****"},{"country":"PN","phoneCode":"64","zone":"Pacific/Pitcairn","language":"en","firstDay":null},{"country":"PL","phoneCode":"48","zone":"Europe/Warsaw","language":"pl","firstDay":"Mo","phoneMask":"+48-***-***-***"},{"country":"PT","phoneCode":"351","zone":"Europe/Lisbon","language":"pt","firstDay":"Mo","phoneMask":"+351-**-***-****"},{"country":"PR","phoneCode":"1-787","zone":"San Juan","language":"Dollar","firstDay":"Su"},{"country":"QA","phoneCode":"974","zone":"Asia/Qatar","language":"ar","firstDay":"Sa","phoneMask":"+974-****-****"},{"country":"CG","phoneCode":"242","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+242-**-***-****"},{"country":"RE","phoneCode":"262","zone":"Indian/Reunion","language":"fr","firstDay":null,"phoneMask":"+262-*****-****"},{"country":"RO","phoneCode":"40","zone":"Europe/Bucharest","language":"ro","firstDay":"Mo","phoneMask":"+40-**-***-****"},{"country":"RU","phoneCode":"7","phoneWithin":"8","zone":"Europe/Moscow","language":"ru","firstDay":"Mo","phoneMask":"+7-***-***-**-**","nameFormat":"lsf"},{"country":"RW","phoneCode":"250","zone":"Africa/Maputo","language":"rw","firstDay":null,"phoneMask":"+250-***-***-***"},{"country":"BL","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"SH","phoneCode":"290","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+290-****"},{"country":"KN","phoneCode":"1-869","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-869-***-****"},{"country":"LC","phoneCode":"1-758","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-758-***-****"},{"country":"MF","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"PM","phoneCode":"508","zone":"America/Miquelon","language":"fr","firstDay":null},{"country":"VC","phoneCode":"1-784","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-784-***-****"},{"country":"WS","phoneCode":"685","zone":"Pacific/Apia","language":"sm","firstDay":null,"phoneMask":"+685-**-****"},{"country":"SM","phoneCode":"378","zone":"Europe/Rome","language":"it","firstDay":null,"phoneMask":"+378-****-******"},{"country":"ST","phoneCode":"239","zone":"Africa/Abidjan","language":"pt","firstDay":null,"phoneMask":"+239-**-*****"},{"country":"SA","phoneCode":"966","zone":"Asia/Riyadh","language":"ar","firstDay":"Sa","phoneMask":["+966-*-***-****","+966-5-****-****"]},{"country":"SN","phoneCode":"221","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+221-**-***-****"},{"country":"RS","phoneCode":"381","zone":"Europe/Belgrade","language":"sr","firstDay":"Mo","phoneMask":"+381-**-***-****"},{"country":"SC","phoneCode":"248","zone":"Indian/Mahe","language":"en","firstDay":null,"phoneMask":"+248-*-***-***"},{"country":"SL","phoneCode":"232","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+232-**-******"},{"country":"SG","phoneCode":"65","zone":"Asia/Singapore","language":"cmn","firstDay":"Mo","phoneMask":"+65-****-****"},{"country":"SX","phoneCode":"1-721","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+1-721-***-****"},{"country":"SK","phoneCode":"421","zone":"Europe/Prague","language":"sk","firstDay":"Mo","phoneMask":"+421-***-***-***"},{"country":"SI","phoneCode":"386","zone":"Europe/Belgrade","language":"sl","firstDay":null,"phoneMask":"+386-**-***-***"},{"country":"SB","phoneCode":"677","zone":"Pacific/Guadalcanal","language":"en","firstDay":null,"phoneMask":["+677-*****","+677-***-****"]},{"country":"SO","phoneCode":"252","zone":"Africa/Mogadishu","language":"so","firstDay":null,"phoneMask":["+252-*-***-***","+252-**-***-***"]},{"country":"ZA","phoneCode":"27","zone":"Africa/Johannesburg","language":"zu","firstDay":"Su","phoneMask":"+27-**-***-****"},{"country":"KR","phoneCode":"82","zone":"Asia/Seoul","language":"ko","firstDay":"Su","phoneMask":["+82-**-***-****","+82-**-***-****-**"],"nameFormat":"lf"},{"country":"SS","phoneCode":"211","zone":"Africa/Khartoum","language":"en","firstDay":null,"phoneMask":"+211-**-***-****"},{"country":"ES","phoneCode":"34","zone":"Europe/Madrid","language":"es","firstDay":"Mo","phoneMask":"+34-***-***-***"},{"country":"LK","phoneCode":"94","zone":"Asia/Colombo","language":"si","firstDay":null,"phoneMask":"+94-**-***-****"},{"country":"SD","phoneCode":"249","zone":"Africa/Khartoum","language":"ar","firstDay":null,"phoneMask":"+249-**-***-****"},{"country":"SR","phoneCode":"597","zone":"America/Paramaribo","language":"nl","firstDay":null,"phoneMask":["+597-***-***","+597-***-****"]},{"country":"SJ","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":null},{"country":"SZ","phoneCode":"268","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+268-**-**-****"},{"country":"SE","phoneCode":"46","zone":"Europe/Stockholm","language":"sv","firstDay":"Mo","phoneMask":"+46-**-***-****"},{"country":"CH","phoneCode":"41","zone":"Europe/Zurich","language":"de","firstDay":"Mo","phoneMask":"+41-**-***-****"},{"country":"SY","phoneCode":"963","zone":"Asia/Damascus","language":"ar","firstDay":"Sa","phoneMask":"+963-**-****-***"},{"country":"TW","phoneCode":"886","zone":"Asia/Taipei","language":"zh","firstDay":"Su","phoneMask":["+886-****-****","+886-*-****-****"]},{"country":"TJ","phoneCode":"992","zone":"Asia/Dushanbe","language":"tg","firstDay":null,"phoneMask":"+992-**-***-****"},{"country":"TZ","phoneCode":"255","zone":"Africa/Dar_es_Salaam","language":"sw","firstDay":null,"phoneMask":"+255-**-***-****"},{"country":"TH","phoneCode":"66","zone":"Asia/Bangkok","language":"th","firstDay":"Mo","phoneMask":"+66-**-***-****"},{"country":"TG","phoneCode":"228","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+228-**-***-***"},{"country":"TK","phoneCode":"690","zone":"Pacific/Fakaofo","language":"tkl","firstDay":null,"phoneMask":"+690-****"},{"country":"TO","phoneCode":"676","zone":"Pacific/Tongatapu","language":"to","firstDay":null,"phoneMask":"+676-*****"},{"country":"TT","phoneCode":"1-868","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-868-***-****"},{"country":"TN","phoneCode":"216","zone":"Africa/Tunis","language":"ar","firstDay":"Mo","phoneMask":"+216-**-***-***"},{"country":"TR","phoneCode":"90","zone":"Europe/Istanbul","language":"tr","firstDay":"Mo","phoneMask":"+90-***-***-****"},{"country":"TM","phoneCode":"993","zone":"Asia/Ashgabat","language":"tk","firstDay":null,"phoneMask":"+993-*-***-****"},{"country":"TC","phoneCode":"1-649","zone":"America/Grand_Turk","language":"en","firstDay":null,"phoneMask":"+1-649-***-****"},{"country":"TV","phoneCode":"688","zone":"Pacific/Funafuti","language":"tvl","firstDay":null,"phoneMask":["+688-2-****","+688-90-****"]},{"country":"VI","phoneCode":"1-340","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-340-***-****"},{"country":"UG","phoneCode":"256","zone":"Africa/Kampala","language":"en","firstDay":null,"phoneMask":"+256-***-***-***"},{"country":"UA","phoneCode":"380","zone":"Europe/Kiev","language":"uk","languageAlternative":["ua"],"firstDay":"Mo","phoneMask":"+380-**-***-**-**"},{"country":"AE","phoneCode":"971","zone":"Asia/Dubai","language":"ar","firstDay":"Sa","phoneMask":["+971-*-***-****","+971-5-*-***-****"]},{"country":"UY","phoneCode":"598","zone":"America/Montevideo","language":"es","firstDay":"Mo","phoneMask":"+598-*-***-**-**"},{"country":"UZ","phoneCode":"998","zone":"Asia/Tashkent","language":"uz","firstDay":"Mo","phoneMask":"+998-**-***-****"},{"country":"VU","phoneCode":"678","zone":"Pacific/Efate","language":"bi","firstDay":null,"phoneMask":["+678-*****","+678-**-*****"]},{"country":"VA","phoneCode":"379","zone":"Europe/Rome","language":"la","firstDay":null,"phoneMask":"+39-6-698-*****"},{"country":"VE","phoneCode":"58","zone":"America/Caracas","language":"es","firstDay":"Su","phoneMask":"+58-***-***-****"},{"country":"VN","phoneCode":"84","zone":"Asia/Ho_Chi_Minh","language":"vi","firstDay":"Mo","phoneMask":["+84-**-****-***","+84-***-****-***"],"nameFormat":"fsl"},{"country":"WF","phoneCode":"681","zone":"Pacific/Wallis","language":"wls","firstDay":null,"phoneMask":"+681-**-****"},{"country":"EH","phoneCode":"212","zone":"Africa/El_Aaiun","language":"ar","firstDay":null},{"country":"YE","phoneCode":"967","zone":"Asia/Aden","language":"ar","firstDay":"Sa","phoneMask":["+967-*-***-***","+967-**-***-***","+967-***-***-***"]},{"country":"ZM","phoneCode":"260","zone":"Africa/Maputo","language":"en","firstDay":null,"phoneMask":"+260-**-***-****"},{"country":"ZW","phoneCode":"263","zone":"Africa/Maputo","language":"en","firstDay":"Su","phoneMask":"+263-*-******"},{"country":"GF","phoneCode":"594","zone":"America/Cayenne","language":"fr","firstDay":"Mo","phoneMask":"+594-*****-****"},{"country":"MQ","phoneCode":"596","zone":"America/Martinique","language":"fr","firstDay":"Mo","phoneMask":"+596-***-**-**-**"},{"country":"NF","phoneCode":"672-3","zone":"Pacific/Norfolk","language":"en","firstDay":"Mo","phoneMask":"+672-3-**-***"},{"country":"IC","phoneCode":"3428","zone":"Europe/Berlin","language":"es","firstDay":"Mo"}]'), No = "geo-code", E = class E {
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
    return wo;
  }
  /**
   * Returns the data about the country by its full code.
   *
   * Возвращает данные о стране по ее полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getByCode(e) {
    let n;
    return e && (e.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (n = this.getByCodeFull(e)), !n && e.match(/[A-Z]{2}/) && (n = this.getByCountry(this.toCountry(e))), !n && e.match(/[a-z]{2}/) && (n = this.getByLanguage(this.toLanguage(e)))), this.toFull(So(n ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(e) {
    return this.getList().find(
      (n) => zo(e, [
        `${n.language}-${n.country}`,
        `${n.country}-${n.language}`
      ])
    );
  }
  /**
   * Returns the full data by country.
   *
   * Возвращает полные данные по стране.
   * @param country country/ страна
   */
  static getByCountry(e) {
    return this.getList().find((n) => {
      var s;
      return n.country === e || ((s = n == null ? void 0 : n.countryAlternative) == null ? void 0 : s.find((o) => o === e));
    });
  }
  /**
   * Returns the full data by language.
   *
   * Возвращает полные данные по языку.
   * @param language language/ язык
   */
  static getByLanguage(e) {
    return this.getList().find((n) => {
      var s;
      return n.language === e || ((s = n == null ? void 0 : n.languageAlternative) == null ? void 0 : s.find((o) => o === e));
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
    const e = Math.abs(Math.trunc(this.timezone / 60)).toString().padStart(2, "0"), n = Math.abs(this.timezone % 60).toString().padStart(2, "0");
    return this.timezone >= 0 ? `+${e}:${n}` : `-${e}:${n}`;
  }
  /**
   * Determines the current country by its full name.
   *
   * Определяет текущую страну по ее полному названию.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static find(e) {
    return this.getByCode(e);
  }
  /**
   * Returns a complete string with the country code and language.
   *
   * Возвращает полную строку с кодом страны и языка.
   * @param item object with data about the current country/
   * объект с данными об текущей стране
   */
  static toStandard(e) {
    return `${e.language}-${e.country}`;
  }
  /**
   * Changes the data by the full code.
   *
   * Изменяет данные по полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   * @param save save the result/ сохранить результат
   */
  static set(e, n) {
    this.location = e, this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location), n && this.storage.set(this.location);
  }
  /**
   * Changing the default timezone for transmitted dates.
   *
   * Изменение временной зоны по умолчанию для отправляемых дат
   * @param timezone new time zone/ новая временная зона
   */
  static setTimezone(e) {
    this.timezone = e;
  }
  /**
   * Determines the current location.
   *
   * Определяет текущую локацию.
   */
  static findLocation() {
    var e;
    return D() && (this.storage.get() || ((e = document.querySelector("html")) == null ? void 0 : e.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
  }
  /**
   * Determines the current language.
   *
   * Определяет текущий язык.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static findLanguage(e) {
    return e && e.match(/[a-z]{2}/) ? this.toLanguage(e) : this.item.language;
  }
  /**
   * Returns the country code by its full language-country.
   *
   * Возвращает код страны по ее полному язык-страна.
   * @param code country code/ код страна
   */
  static toCountry(e) {
    return e.replace(/[^A-Z]+/g, "");
  }
  /**
   * Returns the language code by its full language-country.<br>
   * Возвращает код языка по его полному язык-страна.
   * @param code country code/ код страна
   */
  static toLanguage(e) {
    return e.replace(/[^a-z]+/g, "");
  }
  /**
   * Adding missing data.<br>
   * Добавление недостающих данных.
   * @param item object with data about the current country/
   * объект с данными об текущей стране
   */
  static toFull(e) {
    return {
      ...e,
      standard: this.toStandard(e),
      firstDay: (e == null ? void 0 : e.firstDay) || "Mo"
    };
  }
};
h(E, "storage", new xt(No)), h(E, "location"), h(E, "item"), h(E, "language"), h(E, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), E.location = E.findLocation(), E.language = E.findLanguage(E.location), E.item = E.getByCode(E.location);
let O = E;
const Ut = "d-response-loading", Wt = [], C = class C {
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
  static getHeaders(e, n = "application/json;charset=UTF-8") {
    if (e !== null) {
      const s = {
        ...this.headers,
        ...e || {}
      };
      return z(n) && (s["Content-Type"] = n), s;
    }
  }
  /**
   * Getting the full path to the request script.
   *
   * Получение полного пути к скрипту запроса.
   * @param path path to the script/ путь к скрипту
   * @param api adding a path to the site’s API/ добавление пути к API сайта
   */
  static getUrl(e, n = !0) {
    return `${n ? this.url : ""}${e}`.replace("{locale}", O.getLocation()).replace("{country}", O.getCountry()).replace("{language}", O.getLanguage());
  }
  /**
   * Getting data for the body.
   *
   * Получение данных для тела.
   * @param request this request/ данный запрос
   * @param method method for request/ метод запрос
   */
  static getBody(e = {}, n = "GET") {
    if (e instanceof FormData)
      return e;
    if (n !== "GET" && z(e))
      return Ze(e) ? e : JSON.stringify(e);
  }
  /**
   * Getting data for the body of the get method.
   *
   * Получение данных для тела метода get.
   * @param request this request/ данный запрос
   * @param path path to request/ путь к запрос
   * @param method method for request/ метод запрос
   */
  static getBodyForGet(e, n = "", s = "GET") {
    if (s === "GET") {
      const o = n.match(/\?/) ? "&" : "?", a = typeof e == "object" ? Pn(e) : e;
      if (z(a))
        return `${o}${a}`;
    }
    return "";
  }
  /**
   * Returns a list of data about the emulator.
   *
   * Возвращает список данных об эмуляторе.
   */
  static getResponseList() {
    return this.response.filter((e) => e.isForGlobal !== !0);
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
  static addRequestDefault(e) {
    if (this.requestDefault) {
      const n = ut(this.requestDefault);
      if (e instanceof FormData)
        H(n, (s, o) => {
          e.has(o) || e.set(o, s);
        });
      else if (ee(e))
        return {
          ...n,
          ...e
        };
    }
    return e;
  }
  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  static setHeaders(e) {
    return ee(e) && (this.headers = e), C;
  }
  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  static setRequestDefault(e) {
    this.requestDefault = e;
  }
  /**
   * Change the base path to the script.
   *
   * Изменить базовый путь к скрипту.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(e) {
    return this.url = e, C;
  }
  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(e) {
    return this.preparationItem = e, C;
  }
  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(e) {
    return this.preparationEndItem = e, C;
  }
  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters/ строка запроса или список параметров
   */
  static async request(e) {
    return Ze(e) ? await this.fetch({
      path: e
    }) : await this.fetch(e);
  }
  /**
   * Sends a get method request.
   *
   * Отправляет запрос метода get.
   * @param request list of parameters/ список параметров
   */
  static get(e) {
    return this.request({
      ...e,
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
  static post(e) {
    return this.request({
      ...e,
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
  static put(e) {
    return this.request({
      ...e,
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
  static delete(e) {
    return this.request({
      ...e,
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
  static addResponse(e) {
    return this.response.push(...Ye(e)), C;
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
  static getResponse(e = "", n, s, o) {
    return this.response.find((a) => {
      if (Y(ut(a == null ? void 0 : a.disable)) !== !0 && (a.path instanceof RegExp && e.match(a.path) || e === a.path) && n === a.method && (Wt.indexOf(a) === -1 || o)) {
        const r = this.addRequestDefault(a == null ? void 0 : a.request);
        let i = !1;
        if (s === r || r === "*any" ? i = !0 : z(s) && z(r) && ee(s) && ee(r) && !(s instanceof FormData) && !(r instanceof FormData) && Object.values(s).length === Object.values(r).length && (i = Object.entries(r).reduce(
          (c, [l, p]) => c && (p === (s == null ? void 0 : s[l]) || p === "*any"),
          !0
        )), i)
          return o && console.warn(`Response type: ${a.path}`), Wt.push(a), !0;
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
  static async fetch(e) {
    const {
      toData: n = !0,
      hideError: s = !1,
      queryReturn: o = void 0,
      globalPreparation: a = !0,
      globalEnd: r = !0
    } = e, i = await this.makeEmulator(e);
    if (i)
      return i;
    let c = {};
    te.show();
    try {
      this.preparationItem && a && await this.makePreparation();
      const l = await this.makeQuery(e), p = r && this.preparationEndItem ? await this.makePreparationEnd(l) : {};
      if (this.status = l.status, this.statusText = l.statusText, p != null && p.reset)
        return te.hide(), await this.fetch(e);
      o ? c = await o(l) : "data" in p ? c = p.data : (l.headers.get("Content-Type") ?? "").match("application/json") ? c = await l.json() : c = { data: await l.text() };
    } catch (l) {
      s && console.error("Api: ", l), this.error = l;
    }
    return te.hide(), this.makeData(c, n);
  }
  /**
   * Emulates an execution request.
   *
   * Эмулирует запрос выполнения.
   * @param response Data for pre-request/ Данные для пред-запроса
   * @param request data for the request/ данные для запроса
   */
  static fetchResponse(e, n) {
    return this.startResponseLoading(), new Promise((s) => {
      Eo(
        Rt(e.response) ? e.response(n) : e.response
      ).then((o) => {
        ut(e == null ? void 0 : e.lag) ? (te.show(), setTimeout(() => {
          this.stopResponseLoading(), s(o), te.hide();
        }, _o(0, 2e3))) : (this.stopResponseLoading(), s(o));
      });
    });
  }
  /**
   * Выполнение эмулятора, если доступно
   * @param apiFetch property of the request/ свойство запроса
   */
  static async makeEmulator(e) {
    const {
      path: n = "",
      method: s = "GET",
      global: o = s === "GET",
      devMode: a = !1
    } = e;
    if (o || a) {
      const r = this.addRequestDefault(e.request), i = this.getResponse(n, s, r, a);
      if (i) {
        const c = await this.fetchResponse(i, r);
        return a && console.warn("Response data:", n, r, c), c;
      }
    }
  }
  /**
   * Executing the request.
   *
   * Выполнение запроса.
   * @param apiFetch property of the request/ свойство запроса
   */
  static async makeQuery(e) {
    const n = this.addRequestDefault(e.request), {
      api: s = !0,
      path: o = "",
      pathFull: a = void 0,
      method: r = "GET",
      headers: i = {},
      type: c = "application/json;charset=UTF-8",
      init: l = {}
    } = e, p = a ?? this.getUrl(o, s), u = `${p}${this.getBodyForGet(n, p, r)}`, f = this.getHeaders(i, c), d = {
      ...l,
      method: r,
      body: this.getBody(n, r)
    };
    return f && (d.headers = f), await fetch(u, d);
  }
  /**
   * Preparation before executing the request.
   *
   * Подготовка перед выполнением запроса.
   */
  static async makePreparation() {
    return new Promise((e) => {
      this.preparation ? setTimeout(() => this.makePreparation().then(e), 160) : this.preparationItem ? (this.preparation = !0, this.preparationItem().then(() => {
        this.preparation = !1, e();
      })) : e();
    });
  }
  /**
   * Analysis of the request after execution.
   *
   * Анализ запроса после выполнения.
   * @param query data received in the request/ данные, полученные в запросе
   */
  static async makePreparationEnd(e) {
    let n = {};
    return this.preparationEndItem && (n = await this.preparationEndItem(e)), n;
  }
  /**
   * Transforms data if needed.
   *
   * Преобразует данные, если нужно.
   * @param data data for transformation/ данные для преобразования
   * @param toData is it necessary to process the data/ нужно ли обрабатывать данные
   */
  static makeData(e, n) {
    if (this.lastResponse = e, e && ee(e) && ("message" in e && (this.lastMessage = String(e.message)), n && "data" in e)) {
      if (ee(e.data)) {
        const s = { ...e.data };
        return "success" in e && (s.success = e.success), s;
      }
      return e.data;
    }
    return e;
  }
  /**
   * Enable loading for request emulation.
   *
   * Включить загрузку для эмуляции запроса.
   */
  static startResponseLoading() {
    this.responseLoading && clearTimeout(this.responseLoading), D() && document.body.classList.add(Ut);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  static stopResponseLoading() {
    this.responseLoading = setTimeout(() => {
      this.responseLoading = void 0, D() && document.body.classList.remove(Ut);
    }, 1200);
  }
};
h(C, "url", "/api/"), h(C, "response", []), h(C, "responseLoading"), h(C, "headers", {}), h(C, "requestDefault"), h(C, "preparation", !1), h(C, "preparationItem"), h(C, "preparationEndItem"), h(C, "status"), h(C, "statusText"), h(C, "error"), h(C, "lastResponse"), h(C, "lastMessage");
let kt = C;
class To {
  /**
   * Constructor
   * @param callback function for the cache/ функция для кэша
   */
  constructor(e) {
    h(this, "cache");
    h(this, "cacheOld");
    h(this, "comparisons", []);
    this.callback = e;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  getCache(e) {
    return this.isUpdate(e) && (this.cacheOld = this.cache, this.setCache()), this.cache;
  }
  getCacheOld() {
    return this.cacheOld;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  async getCacheAsync(e) {
    return this.isUpdate(e) && (this.cacheOld = this.cache, await this.setCacheAsync()), this.cache;
  }
  /**
   * Overwrites or adds new values for the cache.
   *
   * Перезаписывает или добавляет новые значения для кэша.
   */
  setCache() {
    this.cache = this.callback();
  }
  /**
   * Overwrites or adds new values for the cache (Async).
   *
   * Перезаписывает или добавляет новые значения для кэша (Async).
   */
  async setCacheAsync() {
    this.cache = await this.callback();
  }
  /**
   * Checking additional data.
   *
   * Проверка дополнительных данных.
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  isUpdate(e) {
    return this.cache === void 0 || this.comparisons.length !== e.length || this.comparisons.findIndex((n, s) => n !== e[s]) >= 0 ? (this.comparisons = [...e], !0) : !1;
  }
}
class Oo {
  constructor() {
    h(this, "cache", {});
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  get(e, n, s) {
    return this.getCacheItem(e, n).getCache(s ?? []);
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  async getAsync(e, n, s) {
    return await this.getCacheItem(e, n).getCacheAsync(s ?? []);
  }
  /**
   * Returns an instance of the object for working with the cache element.
   *
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   */
  getCacheItem(e, n) {
    return e in this.cache || (this.cache[e] = new To(n)), this.cache[e];
  }
}
const qe = class qe {
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  static get(e, n, s) {
    return this.cache.get(e, n, s);
  }
};
h(qe, "cache"), qe.cache = new Oo();
let Gt = qe;
function Fn(t, e = !1) {
  if (typeof t == "string") {
    const n = t.trim();
    switch (n) {
      case "undefined":
        return;
      case "null":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        if (/^[{[]/.exec(n))
          try {
            return JSON.parse(n);
          } catch (s) {
            console.error("transformation: JSON error", s);
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(n))
            return parseFloat(n);
          if (/^[0-9]+$/.exec(n))
            return parseInt(n, 10);
          if (e && D() && typeof (window == null ? void 0 : window[n]) == "function")
            return window[n];
        }
    }
  }
  return t;
}
const Io = "cookie-block";
class Bn {
  /**
   * Obtaining status.
   *
   * Получение статуса.
   */
  static get() {
    return this.storage.get() ?? !1;
  }
  /**
   * Changing status.
   *
   * Изменение статуса.
   * @param value value to be changed/ значение, на которое будет изменен
   */
  static set(e) {
    this.storage.set(e);
  }
}
h(Bn, "storage", new xt(Io));
const Be = {};
class Ho {
  constructor(e) {
    h(this, "value");
    h(this, "options", {});
    if (this.name = e, e in ht)
      return ht[e];
    this.value = Be == null ? void 0 : Be[e], ht[e] = this;
  }
  /**
   * Get data or update if none.
   *
   * Получает данные или обновляет, если их нет.
   * @param defaultValue value or function to change data/ значение или функция для изменения данных
   * @param options additional parameters/ дополнительные параметры
   */
  get(e, n) {
    return this.value === void 0 && e && this.set(e, n), this.value;
  }
  /**
   * Updates cookie data.
   *
   * Обновляет данные cookie.
   * @param value value or function to change data/ значение или функция для изменения данных
   * @param options additional parameters/ дополнительные параметры
   */
  set(e, n) {
    this.value = Y(e), Object.assign(this.options, n), this.update();
  }
  /**
   * Delete cookie data.
   *
   * Удаление данных из cookie.
   */
  remove() {
    this.set("");
  }
  /**
   * Returns cache time.
   *
   * Возвращает время кэширования.
   */
  getAge() {
    var e;
    return ((e = this.options) == null ? void 0 : e.age) ?? 7 * 24 * 60 * 60;
  }
  /**
   * Update cookie data.
   *
   * Обновление данных cookie.
   */
  update() {
    var e, n;
    if (D() && !Bn.get()) {
      const s = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(s)}`,
        `max-age=${s === "" ? "-1" : this.getAge()}`,
        `SameSite=${((e = this.options) == null ? void 0 : e.sameSite) ?? "strict"}`,
        ...((n = this.options) == null ? void 0 : n.arguments) ?? []
      ].join("; ");
    }
  }
}
(() => {
  if (D())
    for (const e of document.cookie.split(";")) {
      const [n, s] = e.trim().split("=");
      n && z(s) && (Be[n] = Fn(s));
    }
})();
const ht = {};
function me(t) {
  if (t instanceof Date)
    return t;
  if (Re(t))
    return /* @__PURE__ */ new Date();
  if (typeof t == "number")
    return new Date(t);
  let e = t, n = O.getTimezoneFormat();
  t.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (o, a, r) => (e = a, n = r, o));
  const s = (/^\d{4}\d{2}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(e) && e.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6")) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(e) && `${e}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(e) && `${e}-01T00:00:00`) ?? (/^\d{4}$/.exec(e) && `${e}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}`) ?? e.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${s}${n}`);
}
function Ro(t, e) {
  return H(t, (n) => n == null ? void 0 : n[e]);
}
class xo {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(e = O.getLocation()) {
    h(this, "geo");
    this.geo = O.find(e);
    const n = this.getLocation();
    if (n in ft)
      return ft[n];
    ft[n] = this;
  }
  /**
   * Returns country code and language.
   *
   * Возвращает код страны и языка.
   */
  getLocation() {
    return this.geo.standard;
  }
  /**
   * Returns the first day of the week.
   *
   * Возвращает первый день недели.
   */
  getFirstDay() {
    return this.geo.firstDay;
  }
  /**
   * The consistent translation of language, region and script display names.
   *
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties/
   * объект с некоторыми или всеми из следующих свойств
   */
  display(e, n) {
    let s = { type: "language" }, o;
    n && (typeof n == "string" ? s.type = n : s = {
      ...s,
      ...n
    });
    try {
      D() && (e ? o = new Intl.DisplayNames(this.getLocation(), s).of(e) : s.type === "language" ? o = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.language) : s.type === "region" && (o = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.country)));
    } catch (a) {
      console.error("display: ", a);
    }
    return o ?? e ?? "";
  }
  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  languageName(e, n) {
    const s = {
      type: "language",
      style: n
    };
    return this.display(O.getByCode(e).language, s);
  }
  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(e, n) {
    const s = {
      type: "region",
      style: n
    };
    return this.display(e, s);
  }
  /**
   * The method returns a string containing the full name in a specific format.
   *
   * Метод возвращает строку, содержащую полное имя в определённом формате.
   * @param last last name/ фамилию
   * @param first first name/ имя
   * @param surname surname middle name (optional)/ отчество
   * @param short shorten the names/ сократить названия
   */
  fullName(e, n, s, o) {
    var i;
    const a = ((i = this.geo) == null ? void 0 : i.nameFormat) ?? "fl";
    let r;
    switch (a) {
      case "fsl":
        r = `${n}${s ? ` ${s}` : ""} ${e}`;
        break;
      case "lf":
        r = `${e} ${n}`;
        break;
      case "lsf":
        r = `${e}${s ? ` ${s}` : ""} ${n}`;
        break;
      default:
        r = `${n} ${e}`;
        break;
    }
    return o ? r.replace(/ (.)[^ ]+/ig, " $1.") : r;
  }
  /**
   * In basic use without specifying a locale, a formatted string.
   *
   * При обычном использовании без указания локали форматированная строка.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми
   * или всеми свойствами
   */
  number(e, n) {
    var s, o;
    return ((o = (s = this.numberObject(n)) == null ? void 0 : s.format) == null ? void 0 : o.call(s, P(e))) || e.toString();
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    var e, n, s, o, a;
    return ((a = (o = (s = (n = (e = this.numberObject()) == null ? void 0 : e.formatToParts) == null ? void 0 : n.call(e, 1.2)) == null ? void 0 : s.find) == null ? void 0 : o.call(s, (r) => r.type === "decimal")) == null ? void 0 : a.value) || ".";
  }
  /**
   * Currency formatting.
   *
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param currencyOptions the currency to use in currency formatting/
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol/ не выводить значок валюты
   */
  currency(e, n, s = !1) {
    const o = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof n == "string" ? { currency: n } : n || {}
    }, a = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...r) => (o.currency = r[2].toUpperCase(), r[1]));
    if (s) {
      const r = this.numberObject(o);
      return r ? Ro(
        r.formatToParts(P(e)).filter((i) => ["literal", "currency"].indexOf(i.type) === -1),
        "value"
      ).join("") : e.toString();
    } else return "currency" in o ? this.number(
      typeof e == "number" ? e : a,
      o
    ) : this.number(
      typeof e == "number" ? e : a,
      {
        ...o,
        style: "decimal"
      }
    );
  }
  /**
   * Returns the currency symbol if it exists, otherwise the currency code.
   *
   * Возвращает символ для валюты, если он есть, или сам код валюты.
   * @param currency the currency to use in currency formatting/
   * валюта для использования в форматировании валюты
   * @param currencyDisplay how to display the currency in currency formatting/
   * как отобразить валюту в формате валюты
   */
  currencySymbol(e, n = "symbol") {
    var s, o, a, r, i;
    return ((i = (r = (a = (o = (s = this.numberObject({
      style: "currency",
      currencyDisplay: n,
      currency: e
    })) == null ? void 0 : s.formatToParts) == null ? void 0 : o.call(s, 100)) == null ? void 0 : a.find) == null ? void 0 : r.call(a, (c) => c.type === "currency")) == null ? void 0 : i.value) || e;
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.
   *
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param unitOptions the unit to use in unit formatting/ блок для использования
   * в форматировании блока
   */
  unit(e, n) {
    const s = {
      style: "unit",
      ...typeof n == "string" ? { unit: n } : n || {}
    }, o = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...a) => (s.unit = a[2].toLowerCase(), a[1]));
    return this.number(o, s);
  }
  /**
   * Возвращает отформатированный размер файла
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  sizeFile(e, n = "byte") {
    const s = P(e);
    if (s > 1024 && Ze(n))
      switch (n) {
        case "byte":
          return this.sizeFile(s / 1024, "kilobyte");
        case "kilobyte":
          return this.sizeFile(s / 1024, "megabyte");
        case "megabyte":
          return this.sizeFile(s / 1024, "gigabyte");
        case "gigabyte":
          return this.sizeFile(s / 1024, "terabyte");
        case "terabyte":
          return this.sizeFile(s / 1024, "petabyte");
      }
    return this.unit(e, n);
  }
  /**
   * Number as a percentage.
   *
   * Число в виде процента.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  percent(e, n) {
    return this.number(e, {
      style: "percent",
      ...n || {}
    });
  }
  /**
   * Number as a percentage (unit).
   *
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(e, n) {
    return this.percent(P(e) / 100, n);
  }
  /**
   * Применять форматирование, учитывающее множественное число, и языковые правила, связанные с множественным числом
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param words list of words for formatting (in the format one|two|few|many|other|zero)/
   * список слов для форматирования (в формате `one|two|few|many|other|zero`)
   * @param options Property for PluralRules/ свойство для PluralRules
   * @param optionsNumber an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  plural(e, n, s, o) {
    const a = P(e), r = n.split("|");
    if (r.length > 1)
      try {
        if (D()) {
          const c = new Intl.PluralRules(this.getLocation(), s).select(a);
          let l;
          switch (c) {
            case "zero":
              l = r[r.length - 1];
              break;
            case "one":
              l = r == null ? void 0 : r[0];
              break;
            case "two":
              l = r == null ? void 0 : r[1];
              break;
            case "few":
              l = r != null && r[3] ? r == null ? void 0 : r[2] : r == null ? void 0 : r[1];
              break;
            case "many":
              l = (r == null ? void 0 : r[3]) || (r == null ? void 0 : r[2]) || (r == null ? void 0 : r[1]);
              break;
            case "other":
              r.length === 6 ? l = r[r.length - 2] : l = r[r.length - 1];
              break;
          }
          return `${this.number(a, o)} ${l ?? ""}`.trim();
        }
      } catch (i) {
        console.error("plural: ", i);
      }
    return `${this.number(a, o)} ${(r == null ? void 0 : r[0]) ?? ""}`.trim();
  }
  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format/ дата для форматирования
   * @param type type of data format/ тип формата data
   * @param styleOptions the representation of the month/ представление месяца
   * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
   */
  date(e, n, s, o) {
    const a = me(e), r = typeof s == "string", i = this.dateOptions(n, r ? s : "short");
    return o && (i.hour12 = !1), r || Object.assign(i, s), a.toLocaleString(this.getLocation(), i);
  }
  /**
   * Enables language-sensitive relative time formatting.
   *
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param styleOptions the length of the internationalized message/
   * длина интернационализированного сообщения
   * @param todayValue current day/ текущий день
   */
  relative(e, n, s) {
    const o = me(e), a = s || /* @__PURE__ */ new Date(), r = {
      numeric: "auto",
      ...typeof n == "string" ? { style: n } : n || {}
    };
    let i = "second", c = (o.getTime() - a.getTime()) / 1e3;
    return Math.abs(c) >= 60 && (i = "minute", c /= 60, Math.abs(c) >= 60 && (i = "hour", c /= 60, Math.abs(c) >= 24 && (i = "day", c /= 24, Math.abs(c) >= 30 && (i = "month", c /= 30, Math.abs(c) >= 12 && (i = "year", c /= 12))))), this.relativeByValue(c, i, r);
  }
  /**
   * Enables language-sensitive relative time formatting
   * Including the ability to add a limit to output the standard time format if the value
   * exceeds the allowable limit.
   *
   * Включает форматирование относительного времени с учетом языка.
   * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
   * если значение вышло за пределы допустимого.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param limit values that determine the output limit (values per day)/
   * значения, по которым определяем предел вывода (значения в день)
   * @param todayValue current day/ текущий день
   * @param relativeOptions the length of the internationalized message/
   * длина интернационализированного сообщения
   * @param dateOptions the representation of the month/ представление месяца
   * @param type type of data format/ тип формата data
   * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
   */
  relativeLimit(e, n, s, o, a, r, i) {
    const c = me(e), l = s || /* @__PURE__ */ new Date(), p = new Date(l), u = new Date(l);
    return p.setDate(l.getDate() - n), u.setDate(l.getDate() + n), c >= p && c <= u ? this.relative(
      c,
      o,
      l
    ) : this.date(
      c,
      r,
      a,
      i
    );
  }
  /**
   * Возвращает отформатированное значение времени, прошедшего с момента события
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param unit time unit/ единица времени
   * @param styleOptions additional option or formatting style/ дополнительная опция или стиль форматирования
   */
  relativeByValue(e, n, s) {
    const o = {
      numeric: "auto",
      ...typeof s == "string" ? { style: s } : s || {}
    };
    try {
      if (D())
        return new Intl.RelativeTimeFormat(this.getLocation(), o).format(Math.round(P(e)), n);
    } catch (a) {
      console.error("relative: ", a);
    }
    return "";
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the month/ представление месяца
   */
  month(e, n) {
    try {
      if (D())
        return Intl.DateTimeFormat(this.getLocation(), { month: n || "long" }).format(me(e));
    } catch (s) {
      console.error("month: ", s);
    }
    return "";
  }
  /**
   * Array to list of months.
   *
   * Массив в список месяцев.
   * @param style the representation of the month/ представление месяца
   */
  months(e) {
    const n = [{
      label: "",
      value: void 0
    }];
    try {
      if (D()) {
        const s = /* @__PURE__ */ new Date(), o = Intl.DateTimeFormat(this.getLocation(), { month: e || "long" });
        for (let a = 0; a < 12; a++)
          s.setMonth(a), n.push({
            label: o.format(s).replace(/^./, (r) => r.toUpperCase()),
            value: a + 1
          });
      }
    } catch (s) {
      console.error("months: ", s);
    }
    return n;
  }
  /**
   * Returns names of days of the week.
   *
   * Возвращает названия дней недели.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekday(e, n) {
    try {
      if (D())
        return Intl.DateTimeFormat(this.getLocation(), { weekday: n || "long" }).format(me(e));
    } catch (s) {
      console.error("weekday: ", s);
    }
    return "";
  }
  /**
   * An array of the list of names of the days of the week.
   *
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekdays(e) {
    const n = [{
      label: "",
      value: void 0
    }];
    try {
      if (D()) {
        const s = /* @__PURE__ */ new Date(), o = Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }), a = s.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
        s.setDate(s.getDate() - a);
        for (let r = 0; r < 7; r++)
          n.push({
            label: o.format(s).replace(/^./, (i) => i.toUpperCase()),
            value: s.getDay()
          }), s.setDate(s.getDate() + 1);
      }
    } catch (s) {
      console.error("weekdays: ", s);
    }
    return n;
  }
  /**
   * Time.
   *
   * Время.
   * @param value the date to format/ дата для форматирования
   */
  time(e) {
    return this.date(e, "time");
  }
  /**
   * Sorts strings taking into account the characteristics of countries.
   *
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data/ массив с данными
   * @param compareFn a function for sorting/ функция для сортировки
   */
  sort(e, n = (s, o) => [s, o]) {
    if (D()) {
      const s = new Intl.Collator(this.getLocation());
      return e.sort((o, a) => s.compare(...n(o, a)));
    }
    return e;
  }
  /**
   * The object enables language-sensitive number formatting.
   *
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties/
   * объект с некоторыми или всеми свойствами
   */
  numberObject(e) {
    try {
      if (D())
        return new Intl.NumberFormat(this.getLocation(), e);
    } catch (n) {
      console.error("numberObject: ", n);
    }
  }
  /**
   * Returns options for data according to its type.
   *
   * Возвращает options для data по его типу.
   * @param type type of data format/ тип формата data
   * @param display the representation of the month/ представление месяца
   */
  dateOptions(e, n = "short") {
    const s = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(e) !== -1 && (s.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month", "day-month"].indexOf(e) !== -1 && (s.month = n), ["full", "datetime", "date", void 0, "day", "day-month"].indexOf(e) !== -1 && (s.day = "2-digit"), e !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(e) !== -1 && (s.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(e) !== -1 && (s.minute = "2-digit"), ["full", "time", "second"].indexOf(e) !== -1 && (s.second = "2-digit")), s;
  }
}
const ft = {}, ue = class ue {
  /**
   * Getting an object with information about the phone code and country.
   *
   * Получение объекта с информацией о телефонном коде и стране.
   * @param code country and language code/ код страны и языка
   */
  static get(e) {
    return this.list.find((n) => e === n.value);
  }
  /**
   * Getting information by phone.
   *
   * Получение информации по телефону.
   * @param phone phone number/ номер телефон
   */
  static getByPhone(e) {
    let n = this.map, s, o = "";
    return this.toNumber(e).forEach((a) => {
      o === "" && a in n ? (s = n[a], n = n[a].next) : o += a;
    }), {
      item: s,
      phone: o
    };
  }
  /**
   * Retrieves complete mask data by country code.
   *
   * Получает полные данные о маске по коду страны.
   * @param code country and language code/ код страны и языка
   */
  static getByCode(e) {
    var s;
    const n = this.get(e);
    if (n)
      return (s = this.getByPhone(n.phone.toString())) == null ? void 0 : s.item;
  }
  /**
   * We get an array from a list of all phone numbers.
   *
   * Получаем массив из списка всех телефонных кодов.
   */
  static getList() {
    return this.list;
  }
  /**
   * We get a map of a tree, sorted by its code.
   *
   * Получаем карту дерева, отсортированную по его коду.
   */
  static getMap() {
    return this.map;
  }
  /**
   * Convert to phone mask.
   *
   * Преобразовать в маску телефона.
   * @param phone phone number/ номер телефон
   * @param masks a mask to transform a phone number/ маска для преобразования номер телефон
   */
  static toMask(e, n) {
    if (z(e) && Array.isArray(n) && n.length > 0) {
      const s = this.removeZero(e), o = s.length;
      for (const a of n)
        if (this.getUnnecessaryLength(a) === o)
          return this.toStandard(s, a);
    }
  }
  /**
   * Deletes the country code from the input number.
   *
   * Удаляет код страны по входному номеру.
   * @param phone phone number/ номер телефон
   */
  static removeZero(e) {
    return e.match(/^0/) ? e.replace(/^0/, "") : e.match(/^89/) ? e.replace(/^8/, "") : e;
  }
  /**
   * Returns the symbol by the internal country code.
   *
   * Возвращает символ по коду внутри страны.
   * @param within internal country code/ код внутри страны
   */
  static getWithinSymbol(e) {
    switch (e) {
      case 4:
      case "4":
        return "$";
      case 8:
      case "8":
        return "~";
    }
    return "=";
  }
  /**
   * Deletes all characters that do not belong to the mask.
   *
   * Удаляет все символы, не относящиеся к маске.
   * @param mask A mask to transform a phone number/ маска для преобразования номер телефон
   */
  static getUnnecessaryLength(e) {
    return e.replace(/[^*]+/ig, "").length;
  }
  /**
   * Creating a list for the map.
   *
   * Формирование списка для карты.
   */
  static makeList() {
    const e = H(O.getList(), (n) => {
      if (n != null && n.phoneMask)
        return {
          phone: (n == null ? void 0 : n.phoneCode) && Number(n.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: (n == null ? void 0 : n.phoneWithin) || 0,
          mask: Ye(n.phoneMask),
          value: n.country
        };
    });
    this.list = e.sort((n, s) => n.phone - s.phone);
  }
  /**
   * Creating a map for search.
   *
   * Создание карты для поиска.
   */
  static makeMap() {
    this.list.forEach((e) => {
      e.mask.forEach((n) => {
        let s = this.map, o;
        if (this.toNumber(n).forEach((a) => {
          a in s || (s[a] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), o = s[a], s = s[a].next;
        }), o) {
          o.value === void 0 && (o.info = e, o.value = e.value);
          const a = this.toWithin(n, e.within);
          o.mask.push(a), o.maskFull.push(a.replace(/\d/ig, "*")), o.items.push(e);
        }
      });
    });
  }
  /**
   * The method parses a string argument and returns a floating point number.
   *
   * Метод принимает строку в качестве аргумента и возвращает десятичное число.
   * @param value the value to parse/ текстовая строка
   */
  static toNumber(e) {
    return e.replace(/\D+/ig, "").split("");
  }
  /**
   * Converts the phone to a standard.
   *
   * Преобразовывает телефон в стандарт.
   * @param phone phone number/ номер телефон
   * @param mask a mask to transform a phone number/ маска для преобразования номер телефон
   */
  static toStandard(e, n) {
    let s = 0;
    return n.replace(/\*/ig, () => e[s++]);
  }
  /**
   * Replaces the first character with the internal country code
   *
   * Заменяет первый символ на код внутри страны.
   * @param mask a mask to transform a phone number/ маска для преобразования номер телефон
   * @param within internal country code/ код внутри страны
   */
  static toWithin(e, n) {
    return e.replace(/\*/, this.getWithinSymbol(n));
  }
};
h(ue, "list", []), h(ue, "map", {}), ue.makeList(), ue.makeMap();
let Jt = ue;
const ne = class ne {
  /**
   * Get data from hash.
   *
   * Получение данных из хэша.
   * @param name variable names/ названия переменных
   * @param defaultValue value or function to change data/ значение или функция для изменения данных
   */
  static get(e, n) {
    return !(e in this.hash) && n && this.set(e, n), this.hash[e];
  }
  /**
   * Change data in hash.
   *
   * Изменение данных в хэше.
   * @param name variable names/ названия переменных
   * @param callback value or function to change data/ значение или функция для изменения данных
   */
  static set(e, n) {
    var o;
    const s = Y(n);
    s !== ((o = this.hash) == null ? void 0 : o[e]) && (this.hash[e] = s, this.update());
  }
  /**
   * Adding an event when data is changed.
   *
   * Добавление события при изменении данных.
   * @param name variable names/ названия переменных
   * @param callback the function is called when the data is changed/ функция вызывается при изменении данных
   */
  static addWatch(e, n) {
    e in this.watch ? this.watch[e].push(n) : this.watch = { [e]: [n] };
  }
  /**
   * Update hash variable from URL string.
   *
   * Обновление переменной хэша из строки URL.
   */
  static reload() {
    if (!this.block) {
      const e = this.getLocation();
      this.makeWatch(e), this.hash = e;
    }
  }
  /**
   * Obtaining data from the URL string.
   *
   * Получение данных из строки URL.
   */
  static getLocation() {
    const e = {};
    return location.hash.replace(
      /([\w-]+)[:=]([^;]+)/ig,
      (...n) => (e[n[1]] = Fn(n[2]), "")
    ), e;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Pn(this.hash, "=", ";")}`), requestAnimationFrame(() => {
      this.block = !1;
    });
  }
  /**
   * Calling all functions whose data has changed.
   *
   * Вызов всех функций, у которых были изменены данные.
   * @param location fresh data/ свежий данные
   */
  static makeWatch(e) {
    H(this.watch, (n, s) => {
      var o;
      ((o = this.hash) == null ? void 0 : o[s]) !== (e == null ? void 0 : e[s]) && n.forEach((a) => a(e[s]));
    });
  }
};
h(ne, "hash", {}), h(ne, "watch", {}), h(ne, "block", !1), D() && (ne.reload(), addEventListener("hashchange", () => ne.reload()));
let Zt = ne;
const pt = "__UI_ICON", Yt = 320, qt = "--LOAD--", be = class be {
  /**
   * Checks if the given icon is in the list of connected icons.
   *
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name/ название иконки
   */
  static is(e) {
    return e in this.icons || this.getName(e) in this.icons;
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
  static async get(e, n = "", s = 1e3 * 60 * 3) {
    var a, r;
    const o = ((a = this.icons) == null ? void 0 : a[this.getName(e)]) ?? ((r = this.icons) == null ? void 0 : r[e]) ?? `${e.replace(/^@/, n ?? this.url)}.svg`;
    return typeof o == "string" ? o === qt && s > 0 ? (await this.wait(), this.get(e, n, s - Yt)) : o : await o;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return H(this.icons, (e, n) => n.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${kt.isLocalhost(), ""}${this.url}`;
  }
  /**
   * Adding custom icons.
   *
   * Добавление пользовательских иконок.
   * @param index icon name/ название иконки
   * @param file path to the file/ путь к файлу
   */
  static add(e, n) {
    this.icons[this.getName(e)] = n;
  }
  /**
   * Adding custom icons in loading mode.
   *
   * Добавление пользовательских иконок в режиме загрузки.
   * @param index icon name/ название иконки
   */
  static addLoad(e) {
    this.icons[this.getName(e)] = qt;
  }
  /**
   * Adding custom global icons.
   *
   * Добавление пользовательских глобальных иконок.
   * @param index icon name/ название иконки
   * @param file path to the file/ путь к файлу
   */
  static addGlobal(e, n) {
    this.icons[this.getName(e)] = `${this.getUrlGlobal()}${n}`;
  }
  /**
   * Adding an icon by the list.
   *
   * Добавление иконки по списку.
   * @param list list of icons/ список иконки
   */
  static addByList(e) {
    H(e, (n, s) => this.add(s, n));
  }
  /**
   * Changes the file path.
   *
   * Изменяет путь к файлу.
   * @param url new file path/ новый путь к файлу
   */
  static setUrl(e) {
    this.url = e;
  }
  /**
   * Returns the icon name.
   *
   * Возвращает название иконки.
   * @param index icon name/ название иконки
   */
  static getName(e) {
    return `@${e}`;
  }
  /**
   * Script execution delay.
   *
   * Задержка выполнения скрипта.
   */
  static wait() {
    return new Promise((e) => setTimeout(() => e(), Yt));
  }
};
h(be, "icons", {}), h(be, "url", "/icons/"), D() && (pt in window || (window[pt] = {}), be.icons = window[pt]);
let Qt = be;
function Lo(t, e = "ig", n = ":value") {
  const s = t.replace(/([[\]\\^$.?*+()])/g, "\\$1");
  return new RegExp(n.replace(/:value/g, s), e);
}
class jn {
  static get() {
    return this.router;
  }
  /**
   * Site path change.<br>
   * Изменение пути сайта.
   * @param to new path/ новый путь
   */
  static push(e) {
    this.router && this.router.push(e).then();
  }
  static set(e) {
    this.router = e;
  }
  static setOneTime(e) {
    this.router || this.set(e);
  }
}
h(jn, "router");
function $o(t, e, n) {
  var s;
  return ((s = J(t)) == null ? void 0 : s[e]) ?? n;
}
function Po(t, e, n) {
  const s = J(t);
  if (s) {
    const o = $o(s, e);
    if (Ne(o) && Ne(n))
      H(n, (a, r) => {
        o[r] = Y(a);
      });
    else {
      const a = Y(n);
      !(e in s) && typeof a == "string" ? s.setAttribute(e.toString(), a) : s[e] = Y(n);
    }
  }
  return s;
}
function Xt(t, e = "div", n, s) {
  if (!D())
    return;
  const o = document.createElement(e);
  return typeof n == "function" ? n(o) : ee(n) && H(n, (a, r) => {
    Po(o, r, a);
  }), t == null || t.insertBefore(o, null), o;
}
const Ee = class Ee {
  /**
   * Constructor
   */
  constructor() {
    h(this, "item", As());
    h(this, "is", k(() => this.item.value !== void 0));
    Ee.is().then((e) => {
      this.item.value = e;
    });
  }
  /**
   * Checks whether to enable scroll hiding.
   *
   * Проверяет, надо ли включить скрытие скролла.
   */
  static async is() {
    const e = await this.get();
    return e !== -1 && e <= 8;
  }
  /**
   * Returns the width of the scroll.
   *
   * Возвращает ширину скролла.
   */
  static async get() {
    const e = this.storage.get() ?? -1;
    if (!this.calculate && e === -1) {
      const n = await this.init();
      return this.storage.set(n), n;
    }
    return e;
  }
  /**
   * Creates elements to check the width of the scroll.
   *
   * Создает элементы для проверки ширины скролла.
   */
  static createElement() {
    return Xt(document.body, "div", (e) => {
      e.style.height = "24px", e.style.overflowY = "scroll", e.style.position = "fixed", e.style.width = "100%", Xt(e, "div", (n) => {
        n.style.height = "100px";
      });
    });
  }
  /**
   * Initialization of data to check the width of the scroll.
   *
   * Инициализация данных для проверки ширины скролла.
   */
  static init() {
    return new Promise((e) => {
      this.calculate = !0;
      const n = this.createElement();
      n ? requestAnimationFrame(() => {
        e(n.offsetWidth - n.clientWidth), n.remove(), this.calculate = !1;
      }) : e(0);
    });
  }
};
h(Ee, "storage", new xt("scrollbar", !0)), h(Ee, "calculate", !1);
let en = Ee;
function Vo(t) {
  return t && "class" in t && typeof t.class == "string" ? t.class : void 0;
}
function Fo(t, e, n) {
  const s = Vo(e);
  return n && s ? `${n}.${s}` : n || s || t;
}
function de(t, e, n, s) {
  const o = Fo(t, e, s);
  return vo(t, { key: o, ...e }, n);
}
function Kn(t) {
  return t.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (e) => `${e.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...e) => `${e[1].toUpperCase()}`).replace(/^([A-Z])/, (e) => `${e.toLowerCase()}`);
}
const x = class x {
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
    return this.country;
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
    return this.standard;
  }
  /**
    * Returns the first day of the week.
  *
    * Возвращает первый день недели.
    */
  static getFirstDay() {
    return this.firstDay;
  }
  /**
    * Changes the data by the full code.
  *
    * Изменяет данные по полному коду.
    * @param code country code, full form language-country or one of them/
    * код страны, полный вид язык-страна или один из них
    */
  static set(e) {
    O.set(e, !0), this.item.value = O.getItem();
  }
};
h(x, "item", Ss(O.get())), h(x, "country", k(() => x.item.value.country)), h(x, "language", k(() => x.item.value.language)), h(x, "standard", k(() => x.item.value.standard)), h(x, "firstDay", k(() => x.item.value.firstDay));
let bt = x;
function Bo(t) {
  return Kn(t).replace(/^([a-z])/, (e) => `${e.toUpperCase()}`);
}
function jo(t, e, n, s) {
  const o = P(t), a = P(e);
  return e && a < o ? `${tn(a, n, s)}+` : tn(o, n, s);
}
const tn = (t, e, n) => e ? new xo(n).number(t) : t;
class Uo {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(e, n, s, o) {
    /**
     * Returns true if caption is filled
     *
     * Возвращает true, если caption заполнен
     */
    h(this, "is", k(() => {
      var e;
      return !!(this.props.caption || (e = this.slots) != null && e.caption);
    }));
    this.props = e, this.className = n, this.slots = s, this.skeleton = o;
  }
  /**
   * Renders caption element with content from props or slots.
   *
   * Отображает элемент caption с содержимым из props или slots.
   */
  render() {
    var n, s, o, a;
    const e = [];
    return z(this.props.caption) && e.push(this.props.caption), (n = this.slots) != null && n.caption && e.push((o = (s = this.slots).caption) == null ? void 0 : o.call(s, {})), e.length > 0 ? [
      de(
        "div",
        {
          class: {
            [`${this.className}__caption`]: !0,
            ...(a = this.skeleton) == null ? void 0 : a.classes.value
          },
          "data-event-type": "caption"
        },
        e,
        "caption"
      )
    ] : [];
  }
}
class Wo {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(e, n, s, o) {
    /**
     * Check for the presence of a description
     *
     * Проверка наличия описания
     */
    h(this, "is", k(() => {
      var e;
      return !!(this.props.description || (e = this.slots) != null && e.description);
    }));
    this.props = e, this.className = n, this.slots = s, this.skeleton = o;
  }
  /**
   * Render the description
   *
   * Рендер описания
   */
  render() {
    var n, s, o, a;
    const e = [];
    return z(this.props.description) && e.push(this.props.description), (n = this.slots) != null && n.description && e.push((o = (s = this.slots).description) == null ? void 0 : o.call(s, {})), e.length > 0 ? [
      de(
        "div",
        {
          class: {
            [`${this.className}__description`]: !0,
            ...(a = this.skeleton) == null ? void 0 : a.classes.value
          }
        },
        e,
        "description"
      )
    ] : [];
  }
}
class Go {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param progress object for working with progress/ объект для работы с прогрессами
   */
  constructor(e, n) {
    /**
     * Checks if the element is active
     *
     * Проверяет, активен ли элемент
     */
    h(this, "isEnabled", k(
      () => !this.props.disabled && !this.props.readonly && (!this.progress || !this.progress.isProgress.value) && !!(!("dynamic" in this.props) || this.props.dynamic)
    ));
    /**
     * checks if the read-only status is enabled/ проверяет, включён ли статус "только для чтения"
     */
    h(this, "isReadonly", k(() => !!this.props.readonly));
    /**
     * checks if the element is disabled/ проверяет, отключён ли элемент
     */
    h(this, "isDisabled", k(() => !!this.props.disabled));
    /**
     * checks if the element is disabled or the value is empty/
     * проверяет, отключён ли элемент или пустое ли значение
     */
    h(this, "isDisabledOrUndefined", k(() => this.isDisabled.value || void 0));
    this.props = e, this.progress = n;
  }
}
class Jo {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param enabled Object for working with activity status/ Объект для работы со статусом активности
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(e, n, s) {
    h(this, "refs");
    /**
     * Event trigger function
     *
     * Функция вызова события
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    h(this, "onClick", (e, n) => {
      if (this.emits)
        if (n)
          this.emit(e, n);
        else if (this.toRouter())
          e.preventDefault();
        else if (this.enabled) {
          const s = this.getOptions(e);
          (this.enabled.isEnabled.value || s.type === "icon-trailing" && !this.enabled.isDisabled.value) && this.emit(e, s);
        } else
          this.emit(e, this.getOptions(e));
    });
    this.props = e, this.enabled = n, this.emits = s, this.refs = e ? ws(e) : void 0;
  }
  /**
   * Exported values
   *
   * Экспортируемые значения
   */
  get expose() {
    var e, n;
    return {
      value: (e = this.refs) == null ? void 0 : e.value,
      detail: (n = this.refs) == null ? void 0 : n.detail
    };
  }
  /**
   * Parameters for the event
   *
   * Параметры для события
   */
  getOptions(e) {
    var n, s;
    return {
      type: this.getTargetType(e),
      value: (n = this.props) == null ? void 0 : n.value,
      detail: (s = this.props) == null ? void 0 : s.detail
    };
  }
  /**
   * Returns the type of the selected item
   *
   * Возвращает тип выбранного элемента
   */
  getTargetType(e) {
    var s, o, a;
    return ((a = (o = (s = e.target) == null ? void 0 : s.closest("[data-event-type]")) == null ? void 0 : o.dataset) == null ? void 0 : a.eventType) ?? "click";
  }
  /**
   * Changing the link through the router
   *
   * Изменение ссылки через router
   */
  toRouter() {
    var e, n;
    return (e = this.props) != null && e.to ? (jn.push((n = this.props) == null ? void 0 : n.to), !0) : !1;
  }
  /**
   * Triggers the click event
   *
   * Вызывает событие клика
   * @param event event object/ объект события
   * @param options data object/ объект с данными
   */
  emit(e, n) {
    this.emits && (this.emits("click", e, n), this.emits("clickLite", n));
  }
}
class Hn {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param labelReplacing additional elements/ дополнительные элементы
   * @param alternativeSlots alternative slots/ альтернативные слоты
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(e, n, s, o, a, r, i, c) {
    /** Label presence check/ Проверка наличия метки */
    h(this, "is", k(() => {
      var e;
      return this.props.label || (e = this.labelReplacing) != null && e.value ? !0 : this.slots ? this.alternativeSlots ? "label" in this.slots : "default" in this.slots : !1;
    }));
    this.props = e, this.className = n, this.classesExtra = s, this.slots = o, this.elementsExtra = a, this.labelReplacing = r, this.alternativeSlots = i, this.skeleton = c;
  }
  /**
   * Render the label
   *
   * Рендер метки
   * @param childrenExtra additional children/ дополнительные дочерние элементы
   */
  render(e) {
    const n = [];
    if (this.is.value) {
      const s = [
        ...this.initLabel(),
        ...this.initLabelReplacing(),
        ...this.initSlot()
      ];
      this.elementsExtra && s.push(...this.elementsExtra()), e && s.push(...e), s.length > 0 && n.push(
        de(
          "span",
          { class: this.getClassName() },
          s,
          "label"
        )
      );
    }
    return n;
  }
  /**
   * Get the class name for the label
   *
   * Получение имени класса для метки
   */
  getClassName() {
    const e = [`${this.className}__label`];
    return this.classesExtra && e.push(this.classesExtra), this.skeleton && e.push(this.skeleton.classes.value), e;
  }
  /**
   * Adds the label text if it exists
   *
   * Добавляет текст метки, если он есть
   */
  initLabel() {
    var e;
    return !((e = this.labelReplacing) != null && e.value) && z(this.props.label) ? [this.props.label] : [];
  }
  /**
   * Adds alternative label text if it exists
   *
   * Добавляет альтернативный текст метки, если он есть
   */
  initLabelReplacing() {
    var e;
    return z((e = this.labelReplacing) == null ? void 0 : e.value) ? [
      de(
        "span",
        { innerHTML: this.labelReplacing.value },
        void 0,
        "highlight"
      )
    ] : [];
  }
  /**
   * Adds a slot for the label if it exists
   *
   * Добавляет слот для метки, если он есть
   */
  initSlot() {
    var e, n, s, o;
    if (this.slots) {
      if (this.alternativeSlots) {
        if ("label" in this.slots)
          return [(n = (e = this.slots).label) == null ? void 0 : n.call(e, {})];
      } else if ("default" in this.slots)
        return [(o = (s = this.slots).default) == null ? void 0 : o.call(s, {})];
    }
    return [];
  }
}
class Zo extends Hn {
  /**
   * Constructor for the LabelHighlightInclude class.
   *
   * Конструктор для класса LabelHighlightInclude.
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(n, s, o, a, r, i) {
    super(
      n,
      s,
      o,
      a,
      r,
      k(() => this.getLabel()),
      void 0,
      i
    );
    /**
     * Returns a string with highlighted parts.
     * If highlighting is not required, returns the original string.
     *
     * Возвращает строку с выделенными частями.
     * Если выделение не требуется, возвращает исходную строку.
     */
    h(this, "getLabel", () => {
      const n = this.props;
      if (n.highlight && n.highlight.length >= this.getLengthStart() && n.label) {
        const s = `${this.className}__highlight`, o = n.label.toString(), a = Lo(n.highlight, "i");
        if (o.match(a))
          return o.replace(a, (r) => `<span class="${s}">${r}</span>`);
        if (z(n.value) && n.value.toString().match(a))
          return `<span class="${s}">${o}</span>`;
      }
    });
    this.props = n, this.className = s, this.classesExtra = o, this.slots = a, this.elementsExtra = r, this.skeleton = i;
  }
  /**
   * Returns the minimum length of the string to start highlighting.
   *
   * Возвращает минимальную длину строки для начала выделения.
   */
  getLengthStart() {
    return this.props.highlightLengthStart ?? 2;
  }
}
class Yo extends Hn {
  /**
   * Constructor for working with text that has maximum values.
   *
   * Конструктор для работы с текстом, у которого есть максимальные значения.
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(e, n, s, o, a, r) {
    super(
      e,
      n,
      s,
      o,
      a,
      k(() => this.getNumber()),
      void 0,
      r
    ), this.props = e, this.className = n, this.classesExtra = s, this.slots = o, this.elementsExtra = a, this.skeleton = r;
  }
  /**
   * Returns text with conversion to maximum values.
   *
   * Возвращает текст с преобразованием в максимальные значения.
   */
  getNumber() {
    const e = this.props;
    if (e.label && vt(e.label))
      return jo(
        e.label,
        e.labelMax,
        e.formatting,
        bt.getLanguage().value
      ).toString();
  }
}
class qo {
  /**
   * Constructor
   * @param index The index key for the model property/ Ключ индекса для свойства модели
   * @param emits Function to emit events/ Функция для испускания событий
   * @param syncValue Reactive value to synchronize/ Реактивное значение для синхронизации
   */
  constructor(e, n, s) {
    this.index = e, this.emits = n, this.syncValue = s, s && ro(s, (o) => {
      this.emit(o);
    }, { immediate: !0 });
  }
  /**
   * Emits an event to update the model value.
   * Triggers the corresponding update event with the new value.
   *
   * Испускает событие для обновления значения модели.
   * Запускает соответствующее событие обновления с новым значением.
   * @param value The new value to set/ Новое значение для установки
   */
  emit(e) {
    Rt(this.emits) && (this.emits(`update:${Kn(this.index)}`, e), this.emits(`update:model${Bo(this.index)}`, e));
  }
}
class Qo {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(e, n, s, o) {
    /**
     * Returns true if prefix is filled
     *
     * Возвращает true, если prefix заполнен
     */
    h(this, "is", k(() => {
      var e;
      return !!(this.props.prefix || (e = this.slots) != null && e.prefix);
    }));
    this.props = e, this.className = n, this.slots = s, this.skeleton = o;
  }
  /**
   * Renders prefix element with content from props or slots.
   *
   * Отображает элемент prefix с содержимым из props или slots.
   */
  render() {
    var n, s, o, a;
    const e = [];
    return z(this.props.prefix) && e.push(this.props.prefix), (n = this.slots) != null && n.prefix && e.push((o = (s = this.slots).prefix) == null ? void 0 : o.call(s, {})), e.length > 0 ? [
      de(
        "div",
        {
          class: {
            [`${this.className}__prefix`]: !0,
            ...(a = this.skeleton) == null ? void 0 : a.classes.value
          },
          "data-event-type": "prefix"
        },
        e,
        "prefix"
      )
    ] : [];
  }
}
class Xo {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(e, n, s, o) {
    /**
     * Returns true if suffix is filled
     *
     * Возвращает true, если suffix заполнен
     */
    h(this, "is", k(() => {
      var e;
      return !!(this.props.suffix || (e = this.slots) != null && e.suffix);
    }));
    this.props = e, this.className = n, this.slots = s, this.skeleton = o;
  }
  /**
   * Renders suffix element with content from props or slots.
   *
   * Отображает элемент suffix с содержимым из props или slots.
   */
  render() {
    var n, s, o, a;
    const e = [];
    return z(this.props.suffix) && e.push(this.props.suffix), (n = this.slots) != null && n.suffix && e.push((o = (s = this.slots).suffix) == null ? void 0 : o.call(s, {})), e.length > 0 ? [
      de(
        "div",
        {
          class: {
            [`${this.className}__suffix`]: !0,
            ...(a = this.skeleton) == null ? void 0 : a.classes.value
          },
          "data-event-type": "suffix"
        },
        e,
        "suffix"
      )
    ] : [];
  }
}
const ea = (t) => `${t}-a--static`;
export {
  Uo as CaptionInclude,
  Wo as DescriptionInclude,
  Go as EnabledInclude,
  Jo as EventClickInclude,
  Zo as LabelHighlightInclude,
  Hn as LabelInclude,
  Yo as LabelNumberInclude,
  qo as ModelInclude,
  Qo as PrefixInclude,
  Xo as SuffixInclude,
  ea as getClassTegAStatic
};
