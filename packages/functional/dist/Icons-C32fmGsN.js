var zn = Object.defineProperty;
var Sn = (e, t, n) => t in e ? zn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var R = (e, t, n) => Sn(e, typeof t != "symbol" ? t + "" : t, n);
function Bt(e) {
  return e instanceof Function || typeof e == "function";
}
function ct(e) {
  return Bt(e) ? e() : e;
}
async function bn(e) {
  const t = ct(e);
  return t instanceof Promise ? await t : t;
}
function lt(e) {
  return !!(e && typeof e == "object");
}
function Te(e, t) {
  if (lt(e)) {
    const n = [];
    return e instanceof Map ? e.forEach((o, s) => n.push(t(o, s, e))) : Array.isArray(e) ? e.forEach((o, s) => n.push(t(o, s, e))) : Object.entries(e).forEach(
      ([o, s]) => n.push(t(s, o, e))
    ), n.filter((o) => o !== void 0);
  }
  return [];
}
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function wn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const me = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ne = () => {
}, Nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), j = Object.assign, On = Object.prototype.hasOwnProperty, Qe = (e, t) => On.call(e, t), m = Array.isArray, oe = (e) => Le(e) === "[object Map]", Tn = (e) => Le(e) === "[object Set]", _ = (e) => typeof e == "function", x = (e) => typeof e == "string", ve = (e) => typeof e == "symbol", v = (e) => e !== null && typeof e == "object", Rn = (e) => (v(e) || _(e)) && _(e.then) && _(e.catch), Pn = Object.prototype.toString, Le = (e) => Pn.call(e), jt = (e) => Le(e).slice(8, -1), In = (e) => Le(e) === "[object Object]", ft = (e) => x(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ht = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Kt = Ht((e) => e.charAt(0).toUpperCase() + e.slice(1)), xn = Ht(
  (e) => e ? `on${Kt(e)}` : ""
), B = (e, t) => !Object.is(e, t);
let vt;
const Fe = () => vt || (vt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pt(e) {
  if (m(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = x(o) ? $n(o) : pt(o);
      if (s)
        for (const a in s)
          t[a] = s[a];
    }
    return t;
  } else if (x(e) || v(e))
    return e;
}
const Vn = /;(?![^(]*\))/g, Ln = /:([^]+)/, Fn = /\/\*[^]*?\*\//g;
function $n(e) {
  const t = {};
  return e.replace(Fn, "").split(Vn).forEach((n) => {
    if (n) {
      const o = n.split(Ln);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ht(e) {
  let t = "";
  if (x(e))
    t = e;
  else if (m(e))
    for (let n = 0; n < e.length; n++) {
      const o = ht(e[n]);
      o && (t += o + " ");
    }
  else if (v(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function O(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let y;
const He = /* @__PURE__ */ new WeakSet();
class Bn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, He.has(this) && (He.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Wt(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, At(this), Ut(this);
    const t = y, n = N;
    y = this, N = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && y !== this && O(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Jt(this), y = t, N = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        yt(t);
      this.deps = this.depsTail = void 0, At(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? He.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Xe(this) && this.run();
  }
  get dirty() {
    return Xe(this);
  }
}
let Gt = 0, fe, pe;
function Wt(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = pe, pe = e;
    return;
  }
  e.next = fe, fe = e;
}
function dt() {
  Gt++;
}
function gt() {
  if (--Gt > 0)
    return;
  if (pe) {
    let t = pe;
    for (pe = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; fe; ) {
    let t = fe;
    for (fe = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ut(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Jt(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), yt(o), jn(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function Xe(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Yt(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Yt(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Me) || (e.globalVersion = Me, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xe(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = y, o = N;
  y = e, N = !0;
  try {
    Ut(e);
    const s = e.fn(e._value);
    (t.version === 0 || B(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    y = n, N = o, Jt(e), e.flags &= -3;
  }
}
function yt(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      yt(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function jn(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let N = !0;
const qt = [];
function ae() {
  qt.push(N), N = !1;
}
function re() {
  const e = qt.pop();
  N = e === void 0 ? !0 : e;
}
function At(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = y;
    y = void 0;
    try {
      t();
    } finally {
      y = n;
    }
  }
}
let Me = 0;
class Hn {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class mt {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!y || !N || y === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== y)
      n = this.activeLink = new Hn(y, this), y.deps ? (n.prevDep = y.depsTail, y.depsTail.nextDep = n, y.depsTail = n) : y.deps = y.depsTail = n, Zt(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = y.depsTail, n.nextDep = void 0, y.depsTail.nextDep = n, y.depsTail = n, y.deps === n && (y.deps = o);
    }
    return process.env.NODE_ENV !== "production" && y.onTrack && y.onTrack(
      j(
        {
          effect: y
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Me++, this.notify(t);
  }
  notify(t) {
    dt();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            j(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      gt();
    }
  }
}
function Zt(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Zt(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Re = /* @__PURE__ */ new WeakMap(), J = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), et = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), De = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function C(e, t, n) {
  if (N && y) {
    let o = Re.get(e);
    o || Re.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new mt()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function F(e, t, n, o, s, a) {
  const r = Re.get(e);
  if (!r) {
    Me++;
    return;
  }
  const i = (c) => {
    c && (process.env.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: a
    }) : c.trigger());
  };
  if (dt(), t === "clear")
    r.forEach(i);
  else {
    const c = m(e), f = c && ft(n);
    if (c && n === "length") {
      const p = Number(o);
      r.forEach((u, l) => {
        (l === "length" || l === De || !ve(l) && l >= p) && i(u);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && i(r.get(n)), f && i(r.get(De)), t) {
        case "add":
          c ? f && i(r.get("length")) : (i(r.get(J)), oe(e) && i(r.get(et)));
          break;
        case "delete":
          c || (i(r.get(J)), oe(e) && i(r.get(et)));
          break;
        case "set":
          oe(e) && i(r.get(J));
          break;
      }
  }
  gt();
}
function Kn(e, t) {
  const n = Re.get(e);
  return n && n.get(t);
}
function Z(e) {
  const t = d(e);
  return t === e ? t : (C(t, "iterate", De), z(e) ? t : t.map(k));
}
function Mt(e) {
  return C(e = d(e), "iterate", De), e;
}
const Gn = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ke(this, Symbol.iterator, k);
  },
  concat(...e) {
    return Z(this).concat(
      ...e.map((t) => m(t) ? Z(t) : t)
    );
  },
  entries() {
    return Ke(this, "entries", (e) => (e[1] = k(e[1]), e));
  },
  every(e, t) {
    return P(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return P(this, "filter", e, t, (n) => n.map(k), arguments);
  },
  find(e, t) {
    return P(this, "find", e, t, k, arguments);
  },
  findIndex(e, t) {
    return P(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return P(this, "findLast", e, t, k, arguments);
  },
  findLastIndex(e, t) {
    return P(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return P(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ge(this, "includes", e);
  },
  indexOf(...e) {
    return Ge(this, "indexOf", e);
  },
  join(e) {
    return Z(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ge(this, "lastIndexOf", e);
  },
  map(e, t) {
    return P(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ue(this, "pop");
  },
  push(...e) {
    return ue(this, "push", e);
  },
  reduce(e, ...t) {
    return zt(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return zt(this, "reduceRight", e, t);
  },
  shift() {
    return ue(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return P(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ue(this, "splice", e);
  },
  toReversed() {
    return Z(this).toReversed();
  },
  toSorted(e) {
    return Z(this).toSorted(e);
  },
  toSpliced(...e) {
    return Z(this).toSpliced(...e);
  },
  unshift(...e) {
    return ue(this, "unshift", e);
  },
  values() {
    return Ke(this, "values", k);
  }
};
function Ke(e, t, n) {
  const o = Mt(e), s = o[t]();
  return o !== e && !z(e) && (s._next = s.next, s.next = () => {
    const a = s._next();
    return a.done || (a.value = n(a.value)), a;
  }), s;
}
const Wn = Array.prototype;
function P(e, t, n, o, s, a) {
  const r = Mt(e), i = r !== e && !z(e), c = r[t];
  if (c !== Wn[t]) {
    const u = c.apply(e, a);
    return i ? k(u) : u;
  }
  let f = n;
  r !== e && (i ? f = function(u, l) {
    return n.call(this, k(u), l, e);
  } : n.length > 2 && (f = function(u, l) {
    return n.call(this, u, l, e);
  }));
  const p = c.call(r, f, o);
  return i && s ? s(p) : p;
}
function zt(e, t, n, o) {
  const s = Mt(e);
  let a = n;
  return s !== e && (z(e) ? n.length > 3 && (a = function(r, i, c) {
    return n.call(this, r, i, c, e);
  }) : a = function(r, i, c) {
    return n.call(this, r, k(i), c, e);
  }), s[t](a, ...o);
}
function Ge(e, t, n) {
  const o = d(e);
  C(o, "iterate", De);
  const s = o[t](...n);
  return (s === -1 || s === !1) && Ce(n[0]) ? (n[0] = d(n[0]), o[t](...n)) : s;
}
function ue(e, t, n = []) {
  ae(), dt();
  const o = d(e)[t].apply(e, n);
  return gt(), re(), o;
}
const Un = /* @__PURE__ */ wn("__proto__,__v_isRef,__isVue"), Qt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ve)
);
function Jn(e) {
  ve(e) || (e = String(e));
  const t = d(this);
  return C(t, "has", e), t.hasOwnProperty(e);
}
class Xt {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return o === (s ? a ? so : nn : a ? oo : tn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const r = m(t);
    if (!s) {
      let c;
      if (r && (c = Gn[n]))
        return c;
      if (n === "hasOwnProperty")
        return Jn;
    }
    const i = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      A(t) ? t : o
    );
    if ((ve(n) ? Qt.has(n) : Un(n)) || (s || C(t, "get", n), a))
      return i;
    if (A(i)) {
      const c = r && ft(n) ? i : i.value;
      return s && v(c) ? nt(c) : c;
    }
    return v(i) ? s ? nt(i) : on(i) : i;
  }
}
class Yn extends Xt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let a = t[n];
    if (!this._isShallow) {
      const c = V(a);
      if (!z(o) && !V(o) && (a = d(a), o = d(o)), !m(t) && A(a) && !A(o))
        return c ? (process.env.NODE_ENV !== "production" && O(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (a.value = o, !0);
    }
    const r = m(t) && ft(n) ? Number(n) < t.length : Qe(t, n), i = Reflect.set(
      t,
      n,
      o,
      A(t) ? t : s
    );
    return t === d(s) && (r ? B(o, a) && F(t, "set", n, o, a) : F(t, "add", n, o)), i;
  }
  deleteProperty(t, n) {
    const o = Qe(t, n), s = t[n], a = Reflect.deleteProperty(t, n);
    return a && o && F(t, "delete", n, void 0, s), a;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!ve(n) || !Qt.has(n)) && C(t, "has", n), o;
  }
  ownKeys(t) {
    return C(
      t,
      "iterate",
      m(t) ? "length" : J
    ), Reflect.ownKeys(t);
  }
}
class qn extends Xt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && O(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && O(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Zn = /* @__PURE__ */ new Yn(), Qn = /* @__PURE__ */ new qn(), tt = (e) => e, Se = (e) => Reflect.getPrototypeOf(e);
function Xn(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, a = d(s), r = oe(a), i = e === "entries" || e === Symbol.iterator && r, c = e === "keys" && r, f = s[e](...o), p = n ? tt : t ? ot : k;
    return !t && C(
      a,
      "iterate",
      c ? et : J
    ), {
      // iterator protocol
      next() {
        const { value: u, done: l } = f.next();
        return l ? { value: u, done: l } : {
          value: i ? [p(u[0]), p(u[1])] : p(u),
          done: l
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function be(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      O(
        `${Kt(e)} operation ${n}failed: target is readonly.`,
        d(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function eo(e, t) {
  const n = {
    get(s) {
      const a = this.__v_raw, r = d(a), i = d(s);
      e || (B(s, i) && C(r, "get", s), C(r, "get", i));
      const { has: c } = Se(r), f = t ? tt : e ? ot : k;
      if (c.call(r, s))
        return f(a.get(s));
      if (c.call(r, i))
        return f(a.get(i));
      a !== r && a.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && C(d(s), "iterate", J), s.size;
    },
    has(s) {
      const a = this.__v_raw, r = d(a), i = d(s);
      return e || (B(s, i) && C(r, "has", s), C(r, "has", i)), s === i ? a.has(s) : a.has(s) || a.has(i);
    },
    forEach(s, a) {
      const r = this, i = r.__v_raw, c = d(i), f = t ? tt : e ? ot : k;
      return !e && C(c, "iterate", J), i.forEach((p, u) => s.call(a, f(p), f(u), r));
    }
  };
  return j(
    n,
    e ? {
      add: be("add"),
      set: be("set"),
      delete: be("delete"),
      clear: be("clear")
    } : {
      add(s) {
        !t && !z(s) && !V(s) && (s = d(s));
        const a = d(this);
        return Se(a).has.call(a, s) || (a.add(s), F(a, "add", s, s)), this;
      },
      set(s, a) {
        !t && !z(a) && !V(a) && (a = d(a));
        const r = d(this), { has: i, get: c } = Se(r);
        let f = i.call(r, s);
        f ? process.env.NODE_ENV !== "production" && St(r, i, s) : (s = d(s), f = i.call(r, s));
        const p = c.call(r, s);
        return r.set(s, a), f ? B(a, p) && F(r, "set", s, a, p) : F(r, "add", s, a), this;
      },
      delete(s) {
        const a = d(this), { has: r, get: i } = Se(a);
        let c = r.call(a, s);
        c ? process.env.NODE_ENV !== "production" && St(a, r, s) : (s = d(s), c = r.call(a, s));
        const f = i ? i.call(a, s) : void 0, p = a.delete(s);
        return c && F(a, "delete", s, void 0, f), p;
      },
      clear() {
        const s = d(this), a = s.size !== 0, r = process.env.NODE_ENV !== "production" ? oe(s) ? new Map(s) : new Set(s) : void 0, i = s.clear();
        return a && F(
          s,
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
  ].forEach((s) => {
    n[s] = Xn(s, e, t);
  }), n;
}
function en(e, t) {
  const n = eo(e, t);
  return (o, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    Qe(n, s) && s in o ? n : o,
    s,
    a
  );
}
const to = {
  get: /* @__PURE__ */ en(!1, !1)
}, no = {
  get: /* @__PURE__ */ en(!0, !1)
};
function St(e, t, n) {
  const o = d(n);
  if (o !== n && t.call(e, o)) {
    const s = jt(e);
    O(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const tn = /* @__PURE__ */ new WeakMap(), oo = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new WeakMap();
function ao(e) {
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
function ro(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ao(jt(e));
}
function on(e) {
  return V(e) ? e : sn(
    e,
    !1,
    Zn,
    to,
    tn
  );
}
function nt(e) {
  return sn(
    e,
    !0,
    Qn,
    no,
    nn
  );
}
function sn(e, t, n, o, s) {
  if (!v(e))
    return process.env.NODE_ENV !== "production" && O(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = ro(e);
  if (a === 0)
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = new Proxy(
    e,
    a === 2 ? o : n
  );
  return s.set(e, i), i;
}
function he(e) {
  return V(e) ? he(e.__v_raw) : !!(e && e.__v_isReactive);
}
function V(e) {
  return !!(e && e.__v_isReadonly);
}
function z(e) {
  return !!(e && e.__v_isShallow);
}
function Ce(e) {
  return e ? !!e.__v_raw : !1;
}
function d(e) {
  const t = e && e.__v_raw;
  return t ? d(t) : e;
}
const k = (e) => v(e) ? on(e) : e, ot = (e) => v(e) ? nt(e) : e;
function A(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function hs(e) {
  return an(e, !1);
}
function ds(e) {
  return an(e, !0);
}
function an(e, t) {
  return A(e) ? e : new io(e, t);
}
class io {
  constructor(t, n) {
    this.dep = new mt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : d(t), this._value = n ? t : k(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || z(t) || V(t);
    t = o ? t : d(t), B(t, n) && (this._rawValue = t, this._value = o ? t : k(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function gs(e) {
  e.dep && (process.env.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function ys(e) {
  process.env.NODE_ENV !== "production" && !Ce(e) && O("toRefs() expects a reactive object but received a plain one.");
  const t = m(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = co(e, n);
  return t;
}
class uo {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Kn(d(this._object), this._key);
  }
}
function co(e, t, n) {
  const o = e[t];
  return A(o) ? o : new uo(e, t, n);
}
class lo {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new mt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Me - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    y !== this)
      return Wt(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Yt(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && O("Write operation failed: computed value is readonly");
  }
}
function fo(e, t, n = !1) {
  let o, s;
  _(e) ? o = e : (o = e.get, s = e.set);
  const a = new lo(o, s, n);
  return process.env.NODE_ENV, a;
}
const we = {}, Pe = /* @__PURE__ */ new WeakMap();
let G;
function po(e, t = !1, n = G) {
  if (n) {
    let o = Pe.get(n);
    o || Pe.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && O(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function ho(e, t, n = me) {
  const { immediate: o, deep: s, once: a, scheduler: r, augmentJob: i, call: c } = n, f = (g) => {
    (n.onWarn || O)(
      "Invalid watch source: ",
      g,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (g) => s ? g : z(g) || s === !1 || s === 0 ? $(g, 1) : $(g);
  let u, l, h, D, S = !1, Ae = !1;
  if (A(e) ? (l = () => e.value, S = z(e)) : he(e) ? (l = () => p(e), S = !0) : m(e) ? (Ae = !0, S = e.some((g) => he(g) || z(g)), l = () => e.map((g) => {
    if (A(g))
      return g.value;
    if (he(g))
      return p(g);
    if (_(g))
      return c ? c(g, 2) : g();
    process.env.NODE_ENV !== "production" && f(g);
  })) : _(e) ? t ? l = c ? () => c(e, 2) : e : l = () => {
    if (h) {
      ae();
      try {
        h();
      } finally {
        re();
      }
    }
    const g = G;
    G = u;
    try {
      return c ? c(e, 3, [D]) : e(D);
    } finally {
      G = g;
    }
  } : (l = ne, process.env.NODE_ENV !== "production" && f(e)), t && s) {
    const g = l, T = s === !0 ? 1 / 0 : s;
    l = () => $(g(), T);
  }
  const q = () => {
    u.stop();
  };
  if (a && t) {
    const g = t;
    t = (...T) => {
      g(...T), q();
    };
  }
  let K = Ae ? new Array(e.length).fill(we) : we;
  const ie = (g) => {
    if (!(!(u.flags & 1) || !u.dirty && !g))
      if (t) {
        const T = u.run();
        if (s || S || (Ae ? T.some((je, ze) => B(je, K[ze])) : B(T, K))) {
          h && h();
          const je = G;
          G = u;
          try {
            const ze = [
              T,
              // pass undefined as the old value when it's changed for the first time
              K === we ? void 0 : Ae && K[0] === we ? [] : K,
              D
            ];
            K = T, c ? c(t, 3, ze) : (
              // @ts-expect-error
              t(...ze)
            );
          } finally {
            G = je;
          }
        }
      } else
        u.run();
  };
  return i && i(ie), u = new Bn(l), u.scheduler = r ? () => r(ie, !1) : ie, D = (g) => po(g, !1, u), h = u.onStop = () => {
    const g = Pe.get(u);
    if (g) {
      if (c)
        c(g, 4);
      else
        for (const T of g) T();
      Pe.delete(u);
    }
  }, process.env.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? o ? ie(!0) : K = u.run() : r ? r(ie.bind(null, !0), !0) : u.run(), q.pause = u.pause.bind(u), q.resume = u.resume.bind(u), q.stop = q, q;
}
function $(e, t = 1 / 0, n) {
  if (t <= 0 || !v(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, A(e))
    $(e.value, t, n);
  else if (m(e))
    for (let o = 0; o < e.length; o++)
      $(e[o], t, n);
  else if (Tn(e) || oe(e))
    e.forEach((o) => {
      $(o, t, n);
    });
  else if (In(e)) {
    for (const o in e)
      $(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && $(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Y = [];
function go(e) {
  Y.push(e);
}
function yo() {
  Y.pop();
}
let We = !1;
function M(e, ...t) {
  if (We) return;
  We = !0, ae();
  const n = Y.length ? Y[Y.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = mo();
  if (o)
    $e(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((a) => {
          var r, i;
          return (i = (r = a.toString) == null ? void 0 : r.call(a)) != null ? i : JSON.stringify(a);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: a }) => `at <${kn(n, a.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const a = [`[Vue warn]: ${e}`, ...t];
    s.length && a.push(`
`, ...Mo(s)), console.warn(...a);
  }
  re(), We = !1;
}
function mo() {
  let e = Y[Y.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Mo(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Do(n));
  }), t;
}
function Do({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${kn(
    e.component,
    e.type,
    o
  )}`, a = ">" + n;
  return e.props ? [s, ...Co(e.props), a] : [s + a];
}
function Co(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...rn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function rn(e, t, n) {
  return x(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : A(t) ? (t = rn(e, d(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : _(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = d(t), n ? t : [`${e}=`, t]);
}
const Dt = {
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
function $e(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    _t(s, t, n);
  }
}
function Ct(e, t, n, o) {
  if (_(e)) {
    const s = $e(e, t, n, o);
    return s && Rn(s) && s.catch((a) => {
      _t(a, t, n);
    }), s;
  }
  if (m(e)) {
    const s = [];
    for (let a = 0; a < e.length; a++)
      s.push(Ct(e[a], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && M(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function _t(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: r } = t && t.appContext.config || me;
  if (t) {
    let i = t.parent;
    const c = t.proxy, f = process.env.NODE_ENV !== "production" ? Dt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const p = i.ec;
      if (p) {
        for (let u = 0; u < p.length; u++)
          if (p[u](e, c, f) === !1)
            return;
      }
      i = i.parent;
    }
    if (a) {
      ae(), $e(a, null, 10, [
        e,
        c,
        f
      ]), re();
      return;
    }
  }
  _o(e, n, s, o, r);
}
function _o(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const a = Dt[t];
    if (n && go(n), M(`Unhandled error${a ? ` during execution of ${a}` : ""}`), n && yo(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const b = [];
let I = -1;
const se = [];
let L = null, X = 0;
const Eo = /* @__PURE__ */ Promise.resolve();
let st = null;
const ko = 100;
function vo(e) {
  let t = I + 1, n = b.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = b[o], a = _e(s);
    a < e || a === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function un(e) {
  if (!(e.flags & 1)) {
    const t = _e(e), n = b[b.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= _e(n) ? b.push(e) : b.splice(vo(t), 0, e), e.flags |= 1, cn();
  }
}
function cn() {
  st || (st = Eo.then(fn));
}
function ln(e) {
  m(e) ? se.push(...e) : L && e.id === -1 ? L.splice(X + 1, 0, e) : e.flags & 1 || (se.push(e), e.flags |= 1), cn();
}
function Ao(e) {
  if (se.length) {
    const t = [...new Set(se)].sort(
      (n, o) => _e(n) - _e(o)
    );
    if (se.length = 0, L) {
      L.push(...t);
      return;
    }
    for (L = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), X = 0; X < L.length; X++) {
      const n = L[X];
      process.env.NODE_ENV !== "production" && pn(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    L = null, X = 0;
  }
}
const _e = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fn(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => pn(e, n) : ne;
  try {
    for (I = 0; I < b.length; I++) {
      const n = b[I];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), $e(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; I < b.length; I++) {
      const n = b[I];
      n && (n.flags &= -2);
    }
    I = -1, b.length = 0, Ao(e), st = null, (b.length || se.length) && fn(e);
  }
}
function pn(e, t) {
  const n = e.get(t) || 0;
  if (n > ko) {
    const o = t.i, s = o && En(o.type);
    return _t(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const Ue = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Fe().__VUE_HMR_RUNTIME__ = {
  createRecord: Je(zo),
  rerender: Je(So),
  reload: Je(bo)
});
const Ie = /* @__PURE__ */ new Map();
function zo(e, t) {
  return Ie.has(e) ? !1 : (Ie.set(e, {
    initialDef: xe(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function xe(e) {
  return vn(e) ? e.__vccOpts : e;
}
function So(e, t) {
  const n = Ie.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, xe(o.type).render = t), o.renderCache = [], o.job.flags & 8 || o.update();
  }));
}
function bo(e, t) {
  const n = Ie.get(e);
  if (!n) return;
  t = xe(t), bt(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const a = o[s], r = xe(a.type);
    let i = Ue.get(r);
    i || (r !== n.initialDef && bt(r, t), Ue.set(r, i = /* @__PURE__ */ new Set())), i.add(a), a.appContext.propsCache.delete(a.type), a.appContext.emitsCache.delete(a.type), a.appContext.optionsCache.delete(a.type), a.ceReload ? (i.add(a), a.ceReload(t.styles), i.delete(a)) : a.parent ? un(() => {
      a.job.flags & 8 || (a.parent.update(), i.delete(a));
    }) : a.appContext.reload ? a.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), a.root.ce && a !== a.root && a.root.ce._removeChildStyle(r);
  }
  ln(() => {
    Ue.clear();
  });
}
function bt(e, t) {
  j(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Je(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ee, Ne = [];
function hn(e, t) {
  var n, o;
  ee = e, ee ? (ee.enabled = !0, Ne.forEach(({ event: s, args: a }) => ee.emit(s, ...a)), Ne = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    hn(a, t);
  }), setTimeout(() => {
    ee || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ne = []);
  }, 3e3)) : Ne = [];
}
let Ee = null, wo = null;
const No = (e) => e.__isTeleport;
function dn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, dn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
Fe().requestIdleCallback;
Fe().cancelIdleCallback;
function Oo(e, t, n = w, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...r) => {
      ae();
      const i = qo(n), c = Ct(t, n, e, r);
      return i(), re(), c;
    });
    return o ? s.unshift(a) : s.push(a), a;
  } else if (process.env.NODE_ENV !== "production") {
    const s = xn(Dt[e].replace(/ hook$/, ""));
    M(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const To = (e) => (t, n = w) => {
  (!ke || e === "sp") && Oo(e, (...o) => t(...o), n);
}, ms = To("um"), Ro = Symbol.for("v-ndc"), Po = {};
process.env.NODE_ENV !== "production" && (Po.ownKeys = (e) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ms() {
  return gn("useSlots").slots;
}
function Ds() {
  return gn("useAttrs").attrs;
}
function gn(e) {
  const t = kt();
  return process.env.NODE_ENV !== "production" && !t && M(`${e}() called without active instance.`), t.setupContext || (t.setupContext = Qo(t));
}
let Io = null;
function Cs(e, t) {
  if (!w)
    process.env.NODE_ENV !== "production" && M("provide() can only be used inside setup().");
  else {
    let n = w.provides;
    const o = w.parent && w.parent.provides;
    o === n && (n = w.provides = Object.create(o)), n[e] = t;
  }
}
function xo(e, t, n = !1) {
  const o = kt();
  if (o || Io) {
    let s = o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && _(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && M(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
const Vo = {}, yn = (e) => Object.getPrototypeOf(e) === Vo, Lo = jo, Fo = Symbol.for("v-scx"), $o = () => {
  {
    const e = xo(Fo);
    return e || process.env.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function _s(e, t) {
  return mn(e, null, t);
}
function Es(e, t, n) {
  return process.env.NODE_ENV !== "production" && !_(t) && M(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), mn(e, t, n);
}
function mn(e, t, n = me) {
  const { immediate: o, deep: s, flush: a, once: r } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && M(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && M(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && M(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const i = j({}, n);
  process.env.NODE_ENV !== "production" && (i.onWarn = M);
  const c = t && o || !t && a !== "post";
  let f;
  if (ke) {
    if (a === "sync") {
      const h = $o();
      f = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!c) {
      const h = () => {
      };
      return h.stop = ne, h.resume = ne, h.pause = ne, h;
    }
  }
  const p = w;
  i.call = (h, D, S) => Ct(h, p, D, S);
  let u = !1;
  a === "post" ? i.scheduler = (h) => {
    Lo(h, p && p.suspense);
  } : a !== "sync" && (u = !0, i.scheduler = (h, D) => {
    D ? h() : un(h);
  }), i.augmentJob = (h) => {
    t && (h.flags |= 4), u && (h.flags |= 2, p && (h.id = p.uid, h.i = p));
  };
  const l = ho(e, t, i);
  return ke && (f ? f.push(l) : c && l()), l;
}
const Bo = (e) => e.__isSuspense;
function jo(e, t) {
  t && t.pendingBranch ? m(e) ? t.effects.push(...e) : t.effects.push(e) : ln(e);
}
const Mn = Symbol.for("v-fgt"), Ho = Symbol.for("v-txt"), Ko = Symbol.for("v-cmt");
function at(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Go = (...e) => Cn(
  ...e
), Dn = ({ key: e }) => e ?? null, Oe = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? x(e) || A(e) || _(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function Wo(e, t = null, n = null, o = 0, s = null, a = e === Mn ? 0 : 1, r = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Dn(t),
    ref: t && Oe(t),
    scopeId: wo,
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
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ee
  };
  return i ? (Et(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= x(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && M("VNode created with invalid key (NaN). VNode type:", c.type), c;
}
const le = process.env.NODE_ENV !== "production" ? Go : Cn;
function Cn(e, t = null, n = null, o = 0, s = null, a = !1) {
  if ((!e || e === Ro) && (process.env.NODE_ENV !== "production" && !e && M(`Invalid vnode type when creating vnode: ${e}.`), e = Ko), at(e)) {
    const i = Ve(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Et(i, n), i.patchFlag = -2, i;
  }
  if (vn(e) && (e = e.__vccOpts), t) {
    t = Uo(t);
    let { class: i, style: c } = t;
    i && !x(i) && (t.class = ht(i)), v(c) && (Ce(c) && !m(c) && (c = j({}, c)), t.style = pt(c));
  }
  const r = x(e) ? 1 : Bo(e) ? 128 : No(e) ? 64 : v(e) ? 4 : _(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && Ce(e) && (e = d(e), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Wo(
    e,
    t,
    n,
    o,
    s,
    r,
    a,
    !0
  );
}
function Uo(e) {
  return e ? Ce(e) || yn(e) ? j({}, e) : e : null;
}
function Ve(e, t, n = !1, o = !1) {
  const { props: s, ref: a, patchFlag: r, children: i, transition: c } = e, f = t ? Yo(s || {}, t) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Dn(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? m(a) ? a.concat(Oe(t)) : [a, Oe(t)] : Oe(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && m(i) ? i.map(_n) : i,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Mn ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Ve(e.ssContent),
    ssFallback: e.ssFallback && Ve(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && o && dn(
    p,
    c.clone(p)
  ), p;
}
function _n(e) {
  const t = Ve(e);
  return m(e.children) && (t.children = e.children.map(_n)), t;
}
function Jo(e = " ", t = 0) {
  return le(Ho, null, e, t);
}
function Et(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (m(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Et(e, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !t._ && !yn(t) && (t._ctx = Ee);
  else _(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Jo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Yo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = ht([t.class, o.class]));
      else if (s === "style")
        t.style = pt([t.style, o.style]);
      else if (Nn(s)) {
        const a = t[s], r = o[s];
        r && a !== r && !(m(a) && a.includes(r)) && (t[s] = a ? [].concat(a, r) : r);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
let w = null;
const kt = () => w || Ee;
let rt;
{
  const e = Fe(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (a) => {
      s.length > 1 ? s.forEach((r) => r(a)) : s[0](a);
    };
  };
  rt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => w = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => ke = n
  );
}
const qo = (e) => {
  const t = w;
  return rt(e), e.scope.on(), () => {
    e.scope.off(), rt(t);
  };
};
let ke = !1;
const wt = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return C(e, "get", ""), e[t];
  },
  set() {
    return M("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return M("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return C(e, "get", ""), e[t];
  }
};
function Zo(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return C(e, "get", "$slots"), t[n];
    }
  });
}
function Qo(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && M("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (m(n) ? o = "array" : A(n) && (o = "ref")), o !== "object" && M(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, wt));
      },
      get slots() {
        return o || (o = Zo(e));
      },
      get emit() {
        return (s, ...a) => e.emit(s, ...a);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, wt),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
const Xo = /(?:^|[-_])\w/g, es = (e) => e.replace(Xo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function En(e, t = !0) {
  return _(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function kn(e, t, n = !1) {
  let o = En(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (a) => {
      for (const r in a)
        if (a[r] === t)
          return r;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? es(o) : n ? "App" : "Anonymous";
}
function vn(e) {
  return _(e) && "__vccOpts" in e;
}
const ks = (e, t) => {
  const n = fo(e, t, ke);
  if (process.env.NODE_ENV !== "production") {
    const o = kt();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function vs(e, t, n) {
  try {
    const o = arguments.length;
    return o === 2 ? v(t) && !m(t) ? at(t) ? le(e, null, [t]) : le(e, t) : le(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && at(n) && (n = [n]), le(e, t, n));
  } finally {
  }
}
function ts() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!v(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (A(u)) {
        ae();
        const l = u.value;
        return re(), [
          "div",
          {},
          ["span", e, p(u)],
          "<",
          i(l),
          ">"
        ];
      } else {
        if (he(u))
          return [
            "div",
            {},
            ["span", e, z(u) ? "ShallowReactive" : "Reactive"],
            "<",
            i(u),
            `>${V(u) ? " (readonly)" : ""}`
          ];
        if (V(u))
          return [
            "div",
            {},
            ["span", e, z(u) ? "ShallowReadonly" : "Readonly"],
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
    const l = [];
    u.type.props && u.props && l.push(r("props", d(u.props))), u.setupState !== me && l.push(r("setup", u.setupState)), u.data !== me && l.push(r("data", d(u.data)));
    const h = c(u, "computed");
    h && l.push(r("computed", h));
    const D = c(u, "inject");
    return D && l.push(r("injected", D)), l.push([
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
    ]), l;
  }
  function r(u, l) {
    return l = j({}, l), Object.keys(l).length ? [
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
        ...Object.keys(l).map((h) => [
          "div",
          {},
          ["span", o, h + ": "],
          i(l[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(u, l = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : v(u) ? ["object", { object: l ? d(u) : u }] : ["span", n, String(u)];
  }
  function c(u, l) {
    const h = u.type;
    if (_(h))
      return;
    const D = {};
    for (const S in u.ctx)
      f(h, S, l) && (D[S] = u.ctx[S]);
    return D;
  }
  function f(u, l, h) {
    const D = u[h];
    if (m(D) && D.includes(l) || v(D) && l in D || u.extends && f(u.extends, l, h) || u.mixins && u.mixins.some((S) => f(S, l, h)))
      return !0;
  }
  function p(u) {
    return z(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ns() {
  ts();
}
process.env.NODE_ENV !== "production" && ns();
function Ye(e) {
  return A(e) ? e.value : e;
}
function os(e, t = "=", n = "&") {
  return Te(
    e,
    (o, s) => `${s}${t}${encodeURIComponent(String(o).trim())}`
  ).sort().join(n);
}
function H() {
  return typeof window < "u";
}
function Be(e) {
  return e == null;
}
function ce(e, t) {
  if (e) {
    if (t && e === "0")
      return !0;
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
        return Array.isArray(e) ? e.length > 0 : Object.values(e).some((n) => !Be(n));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(e);
      case "undefined":
        return !1;
      default:
        return !!e;
    }
  }
  return !1;
}
function Q(e) {
  return lt(e) && !Array.isArray(e);
}
function it(e) {
  return typeof e == "string";
}
function ss(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function ut(e) {
  return Array.isArray(e) ? e : [e];
}
function An(e) {
  return H() && e === window;
}
function te(e) {
  if (H())
    return An(e) ? document.body : it(e) ? document.querySelector(e) ?? void 0 : e;
}
function Nt(e) {
  return An(e) ? e : te(e);
}
function as(e) {
  return !!te(e)?.closest("html");
}
class Ot {
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
  constructor(t, n = ["click"], o, s, a) {
    this.listener = o, this.options = s, this.detail = a, this.element = Nt(t), this.elementControl = te(t), this.type = ut(n);
  }
  /**
   * Element.
   *
   * Элемент.
   */
  element;
  /**
   * Element for checking. If the element is missing in the DOM, the event is turned off.
   *
   * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
   */
  elementControl;
  elementControlEdit;
  /**
   * A case-sensitive string representing the event type to listen for.
   *
   * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
   */
  type;
  /**
   * The object that receives a notification (an object that implements the Event interface)
   * when an event of the specified type occurs. This must be null, an object with a
   * handleEvent() method, or a JavaScript function.
   *
   * Объект, который принимает уведомление, когда событие указанного типа произошло.
   * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
   */
  listenerRecent = (t) => {
    as(this.elementControl) ? (this.listener?.call(this.element, t, this.detail), lt(this.options) && this.options?.once && this.stop()) : this.stop();
  };
  /**
   * Event states.
   *
   * Состояния события.
   */
  activity = !1;
  activityItems = [];
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
  setElement(t) {
    const n = Nt(t);
    return this.elementControlEdit || (this.elementControl = te(t)), this.element = n, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(t) {
    return this.elementControl = te(t), this.elementControlEdit = !Be(this.elementControl), this.elementControlEdit || (this.elementControl = te(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(t) {
    return this.type = ut(t), this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param listener
   */
  setListener(t) {
    return this.listener = t, this;
  }
  /**
   * Modifying the options object that defines the characteristics of an object.
   *
   * Изменение объекта options, который определяет характеристики объекта.
   * @param options
   */
  setOptions(t) {
    return this.options = t, this.reset(), this;
  }
  /**
   * Modifying a dependent value for the dispatch method.
   *
   * Изменение зависимого значения для метода dispatch.
   * @param detail
   */
  setDetail(t) {
    return this.detail = t, this;
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
  dispatch(t = this.detail) {
    return this.type.forEach(
      (n) => this.element?.dispatchEvent(new CustomEvent(n, { detail: t }))
    ), this;
  }
  /**
   * Starting event listening.
   *
   * Запуск прослушивания события.
   */
  start() {
    return this.activity || (this.activity = !0, this.activityItems = [], this.type.forEach((t) => {
      this.element && !(t === "resize" && this.makeResize()) && !(t === "scroll-sync" && this.makeScroll()) && (this.element.addEventListener(t, this.listenerRecent, this.options), this.activityItems.push({
        element: this.element,
        type: t
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
      element: t,
      type: n,
      listener: o,
      observer: s
    }) => {
      s ? s.disconnect() : o ? t?.removeEventListener(n, o) : t?.removeEventListener(n, this.listenerRecent);
    })), this;
  }
  /**
   * Toggling event handler state.
   *
   * Переключение состояния работы события.
   * @param activity event activation/ активация события
   */
  toggle(t) {
    return t ? this.start() : this.stop();
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
      const t = new ResizeObserver(
        (n) => this.listenerRecent(n?.[0])
      );
      return t.observe(this.element), this.activityItems.push({
        element: this.element,
        type: "resize",
        observer: t
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
      let t = !1;
      const n = (o) => {
        t || (t = !0, requestAnimationFrame(() => {
          this.listenerRecent(o), t = !1;
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
const Tt = "ui-loading", ge = class ge {
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
  static registrationEvent(t, n) {
    new Ot(window, Tt, t).setElementControl(n).start();
  }
  /**
   * Calls the event listener.
   *
   * Вызывает слушателя событий.
   */
  static dispatch() {
    this.event?.dispatch({ loading: this.is() });
  }
};
R(ge, "value", 0), R(ge, "event"), H() && (ge.event = new Ot(window, Tt));
let W = ge;
function rs(e) {
  return JSON.parse(JSON.stringify(e));
}
function Rt(e) {
  switch (typeof e) {
    case "number":
      return !0;
    case "string":
      return !!e.match(/^[0-9]+$/);
    default:
      return !1;
  }
}
function Pt(e) {
  if (typeof e == "number")
    return e;
  if (!e)
    return 0;
  let t = e.replace(/[^\d., ]+/ig, "");
  return t.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? t = t.replace(/ /ig, "").replace(/,/ig, ".") : t.match(/,[0-9]{3}[,.]/ig) ? t = t.replace(/,/ig, "") : t.match(/[.][0-9]{3}[,.]/ig) ? t = t.replace(/[.]/ig, "").replace(/,/ig, ".") : t = t.replace(/,/ig, "."), parseFloat(t);
}
function is(e, t) {
  return Be(e) ? !1 : Array.isArray(t) ? t.includes(e) : Rt(e) && Rt(t) ? Pt(e) === Pt(t) : e === t;
}
let It = "ui-storage";
class us {
  /**
   * Constructor
   * @param name value name /<br>название значения
   * @param isSession should we use a session? /<br>использовать ли сессию?
   */
  constructor(t, n = !1) {
    this.name = t, this.isSession = n;
    const o = `${n ? "session" : "storage"}#${t}`;
    if (o in qe)
      return qe[o];
    const s = this.getValue();
    s && (this.value = s.value, this.age = s.age), qe[o] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(t) {
    It = t;
  }
  value;
  age;
  /**
   * Getting data from local storage.<br>
   * Получение данных из локального хранилища.
   * @param defaultValue default value /<br>значение по умолчанию
   * @param cache cache time /<br>время кэширования
   */
  get(t, n) {
    if (this.value !== null && this.value !== void 0 && this.isCache(n))
      return this.value;
    if (t !== void 0)
      return this.set(t);
  }
  /**
   * Changing data in storage.<br>
   * Изменение данных в хранилище.
   * @param value new values /<br>новые значения
   */
  set(t) {
    return this.value = ct(t), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? this.getMethod()?.removeItem(this.getIndex()) : this.getMethod()?.setItem(this.getIndex(), JSON.stringify({
      value: this.value,
      age: this.age
    })), this.value;
  }
  /**
   * Checks for storage time limit.<br>
   * Проверяет на лимит времени хранения.
   * @param cache cache time /<br>время кэширования
   */
  isCache(t) {
    return Be(t) || this.age && this.age + t * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (H())
      return this.isSession ? window?.sessionStorage : window?.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${It}${this.name}`;
  }
  /**
   * Getting data from storage.<br>
   * Получение данных из хранилища.
   */
  getValue() {
    const t = this.getMethod()?.getItem(this.getIndex());
    if (t)
      try {
        return JSON.parse(t);
      } catch (n) {
        console.error("DataStorage", n);
      }
  }
}
const qe = {}, cs = /* @__PURE__ */ JSON.parse('[{"country":"US","countryAlternative":["EN"],"language":"en","languageAlternative":["us"],"firstDay":"Su","zone":"America/New_York","phoneCode":"1","phoneMask":["+1-***-***-****"]},{"country":"GB","countryAlternative":["UK"],"language":"en","firstDay":"Mo","zone":"Europe/London","phoneCode":"44","phoneMask":["+44-**-****-****"]},{"country":"AF","language":"fa","firstDay":"Sa","zone":"Asia/Kabul","phoneCode":"93","phoneMask":["+93-**-***-****"]},{"country":"AL","language":"sq","firstDay":"Mo","zone":"Europe/Tirane","phoneCode":"355","phoneMask":["+355-***-***-***"]},{"country":"DZ","language":"ar","firstDay":"Sa","zone":"Africa/Algiers","phoneCode":"213","phoneMask":["+213-**-***-****"]},{"country":"AS","language":"en","firstDay":null,"zone":"Pacific/Pago_Pago","phoneCode":"1-684","phoneMask":["+1-684-***-****"]},{"country":"AD","language":"ca","firstDay":"Mo","zone":"Europe/Andorra","phoneCode":"376","phoneMask":["+376-***-***"]},{"country":"AO","language":"pt","firstDay":null,"zone":"Africa/Lagos","phoneCode":"244","phoneMask":["+244-***-***-***"]},{"country":"AI","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-264","phoneMask":["+1-264-***-****"]},{"country":"AQ","language":"en","firstDay":null,"zone":"Antarctica/Troll","phoneCode":"672","phoneMask":["+672-1-**-***"]},{"country":"AG","language":"en","firstDay":null,"zone":"America/Antigua","phoneCode":"1-268","phoneMask":["+1-268-***-****"]},{"country":"AR","language":"es","firstDay":"Su","zone":"America/Argentina/Buenos_Aires","phoneCode":"54","phoneMask":["+54-***-***-****"]},{"country":"AM","language":"hy","firstDay":"Mo","zone":"Asia/Yerevan","phoneCode":"374","phoneMask":["+374-**-***-***"]},{"country":"AW","language":"nl","firstDay":null,"zone":"America/Curacao","phoneCode":"297","phoneMask":["+297-***-****"]},{"country":"AU","language":"en","firstDay":"Mo","zone":"Australia/Sydney","phoneCode":"61","phoneMask":["+61-*-****-****"]},{"country":"AT","language":"de","firstDay":"Mo","zone":"Europe/Vienna","phoneCode":"43","phoneMask":["+43-***-***-****","+43-***-***-*****"]},{"country":"AZ","language":"az","firstDay":"Mo","zone":"Asia/Baku","phoneCode":"994","phoneMask":"+994-**-***-**-**"},{"country":"BS","language":"en","firstDay":null,"zone":"America/Nassau","phoneCode":"1-242","phoneMask":"+1-242-***-****"},{"country":"BH","language":"ar","firstDay":"Sa","zone":"Asia/Bahrain","phoneCode":"973","phoneMask":"+973-****-****"},{"country":"BD","language":"bn","firstDay":null,"zone":"Asia/Dhaka","phoneCode":"880","phoneMask":"+880-**-***-***"},{"country":"BB","language":"en","firstDay":null,"zone":"America/Barbados","phoneCode":"1-246","phoneMask":"+1-246-***-****"},{"country":"BY","language":"be","firstDay":"Mo","zone":"Europe/Minsk","phoneCode":"375","phoneMask":"+375-**-***-**-**"},{"country":"BE","language":"nl","firstDay":"Mo","zone":"Europe/Brussels","phoneCode":"32","phoneMask":"+32-***-***-***"},{"country":"BZ","language":"en","firstDay":"Su","zone":"America/Belize","phoneCode":"501","phoneMask":"+501-***-****"},{"country":"BJ","language":"fr","firstDay":null,"zone":"Africa/Lagos","phoneCode":"229","phoneMask":"+229-**-**-****"},{"country":"BM","language":"en","firstDay":null,"zone":"Atlantic/Bermuda","phoneCode":"1-441","phoneMask":"+1-441-***-****"},{"country":"BT","language":"dz","firstDay":null,"zone":"Asia/Thimphu","phoneCode":"975","phoneMask":["+975-*-***-***","+975-17-***-***"]},{"country":"BO","language":"es","firstDay":"Su","zone":"America/La_Paz","phoneCode":"591","phoneMask":"+591-*-***-****"},{"country":"BA","language":"bs","firstDay":null,"zone":"Europe/Belgrade","phoneCode":"387","phoneMask":["+387-**-****","+387-**-*****"]},{"country":"BW","language":"en","firstDay":null,"zone":"Africa/Maputo","phoneCode":"267","phoneMask":"+267-**-***-***"},{"country":"BR","language":"pt","firstDay":"Su","zone":"America/Sao_Paulo","phoneCode":"55","phoneMask":["+55-**-****-****","+55-**-*****-****"]},{"country":"IO","language":"en","firstDay":null,"zone":"Indian/Chagos","phoneCode":"246","phoneMask":"+246-***-****"},{"country":"VG","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-284","phoneMask":"+1-284-***-****"},{"country":"BN","language":"ms","firstDay":"Mo","zone":"Asia/Brunei","phoneCode":"673","phoneMask":"+673-***-****"},{"country":"BG","language":"bg","firstDay":"Mo","zone":"Europe/Sofia","phoneCode":"359","phoneMask":"+359-***-***-***"},{"country":"BF","language":"fr","firstDay":null,"zone":"Africa/Abidjan","phoneCode":"226","phoneMask":"+226-**-**-****"},{"country":"BI","language":"fr","firstDay":null,"zone":"Africa/Maputo","phoneCode":"257","phoneMask":"+257-**-**-****"},{"country":"KH","language":"km","firstDay":null,"zone":"Asia/Phnom_Penh","phoneCode":"855","phoneMask":"+855-**-***-***"},{"country":"CM","phoneCode":"237","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":"+237-****-****"},{"country":"CA","phoneCode":"1","zone":"America/Toronto","language":"en","firstDay":"Su","phoneMask":"+1-***-***-****"},{"country":"CV","phoneCode":"238","zone":"Atlantic/Cape_Verde","language":"pt","firstDay":null,"phoneMask":"+238-***-**-**"},{"country":"KY","phoneCode":"1-345","zone":"America/Cayman","language":"en","firstDay":null,"phoneMask":"+1-345-***-****"},{"country":"CF","phoneCode":"236","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+236-**-**-****"},{"country":"TD","phoneCode":"235","zone":"Africa/Ndjamena","language":"fr","firstDay":null,"phoneMask":"+235-**-**-**-**"},{"country":"CL","phoneCode":"56","zone":"America/Santiago","language":"es","firstDay":"Su","phoneMask":"+56-*-****-****"},{"country":"CN","phoneCode":"86","zone":"Asia/Shanghai","language":"zh","firstDay":"Su","phoneMask":["+86-***-****-***","+86-***-****-****","+86-**-*****-*****"]},{"country":"CX","phoneCode":"61","zone":"Indian/Christmas","language":"en","firstDay":null},{"country":"CC","phoneCode":"61","zone":"Indian/Cocos","language":"ms","firstDay":null},{"country":"CO","phoneCode":"57","zone":"America/Bogota","language":"es","firstDay":"Su","phoneMask":"+57-***-***-****"},{"country":"KM","phoneCode":"269","zone":"Indian/Comoro","language":"ar","firstDay":null,"phoneMask":"+269-**-*****"},{"country":"CK","phoneCode":"682","zone":"Pacific/Rarotonga","language":"en","firstDay":null,"phoneMask":"+682-**-***"},{"country":"CR","phoneCode":"506","zone":"America/Costa_Rica","language":"es","firstDay":"Su","phoneMask":"+506-****-****"},{"country":"HR","phoneCode":"385","zone":"Europe/Belgrade","language":"hr","firstDay":"Mo","phoneMask":"+385-**-***-***"},{"country":"CU","phoneCode":"53","zone":"America/Havana","language":"es","firstDay":null,"phoneMask":"+53-*-***-****"},{"country":"CW","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+599-***-****"},{"country":"CY","phoneCode":"357","zone":"Asia/Nicosia","language":"el","firstDay":null,"phoneMask":"+357-**-***-***"},{"country":"CZ","phoneCode":"420","zone":"Europe/Prague","language":"cs","languageAlternative":["cz"],"firstDay":"Mo","phoneMask":"+420-***-***-***"},{"country":"CD","phoneCode":"243","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+243-***-***-***"},{"country":"DK","phoneCode":"45","zone":"Europe/Copenhagen","language":"da","firstDay":"Mo","phoneMask":"+45-**-**-**-**"},{"country":"DJ","phoneCode":"253","zone":"Africa/Djibouti","language":"fr","firstDay":null,"phoneMask":"+253-**-**-**-**"},{"country":"DM","phoneCode":"1-767","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-767-***-****"},{"country":"DO","phoneCode":"1-809","zone":"North America","language":"America/Santo_Domingo","firstDay":"Su","phoneMask":["+1-809-***-****","+1-829-***-****","+1-849-***-****"]},{"country":"TL","phoneCode":"670","zone":"Asia/Dili","language":"tet","firstDay":null,"phoneMask":["+670-***-****","+670-77-*-*****","+670-78-*-*****"]},{"country":"EC","phoneCode":"593","zone":"America/Guayaquil","language":"es","firstDay":"Su","phoneMask":["+593-*-***-****","+593-**-***-****"]},{"country":"EG","phoneCode":"20","zone":"Africa/Cairo","language":"ar","firstDay":"Sa","phoneMask":"+20-***-***-****"},{"country":"SV","phoneCode":"503","zone":"America/El_Salvador","language":"es","firstDay":"Su","phoneMask":"+503-**-**-****"},{"country":"GQ","phoneCode":"240","zone":"Africa/Lagos","language":"es","firstDay":null,"phoneMask":"+240-**-***-****"},{"country":"ER","phoneCode":"291","zone":"Africa/Asmara","language":"aa","firstDay":null,"phoneMask":"+291-*-***-***"},{"country":"EE","phoneCode":"372","zone":"Europe/Tallinn","language":"et","firstDay":"Mo","phoneMask":["+372-***-****","+372-****-****"]},{"country":"ET","phoneCode":"251","zone":"Africa/Addis_Ababa","language":"am","firstDay":null,"phoneMask":"+251-**-***-****"},{"country":"FK","phoneCode":"500","zone":"Atlantic/Stanley","language":"en","firstDay":null,"phoneMask":"+500-*****"},{"country":"FO","phoneCode":"298","zone":"Atlantic/Faroe","language":"fo","firstDay":null,"phoneMask":"+298-***-***"},{"country":"FJ","phoneCode":"679","zone":"Pacific/Fiji","language":"en","firstDay":null,"phoneMask":"+679-**-*****"},{"country":"FI","phoneCode":"358","zone":"Europe/Helsinki","language":"fi","firstDay":"Mo","phoneMask":["+358-***-***-**-*","+358-***-***-**-**"]},{"country":"FR","phoneCode":"33","zone":"Europe/Paris","language":"fr","firstDay":"Mo","phoneMask":["+33-***-***-***","+262-*****-****","+508-**-****","+590-***-***-***"]},{"country":"PF","phoneCode":"689","zone":"Pacific/Tahiti","language":"fr","firstDay":null,"phoneMask":"+689-**-**-**"},{"country":"GA","phoneCode":"241","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+241-*-**-**-**"},{"country":"GM","phoneCode":"220","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+220-***-**-**"},{"country":"GE","phoneCode":"995","zone":"Asia/Tbilisi","language":"ka","firstDay":"Mo","phoneMask":"+995-***-***-***"},{"country":"DE","phoneCode":"49","zone":"Europe/Berlin","language":"de","firstDay":"Mo","phoneMask":["+49-***-***","+49-***-***-****","+49-****-***-****"]},{"country":"GH","phoneCode":"233","zone":"Africa/Accra","language":"en","firstDay":null,"phoneMask":"+233-***-***-***"},{"country":"GI","phoneCode":"350","zone":"Europe/Gibraltar","language":"en","firstDay":null,"phoneMask":"+350-***-*****"},{"country":"GR","phoneCode":"30","zone":"Europe/Athens","language":"el","firstDay":"Mo","phoneMask":"+30-***-***-****"},{"country":"GL","phoneCode":"299","zone":"America/Godthab","language":"kl","firstDay":null,"phoneMask":"+299-**-**-**"},{"country":"GD","phoneCode":"1-473","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-473-***-****"},{"country":"GU","phoneCode":"1-671","zone":"Pacific/Guam","language":"en","firstDay":null,"phoneMask":"+1-671-***-****"},{"country":"GT","phoneCode":"502","zone":"America/Guatemala","language":"es","firstDay":"Su","phoneMask":"+502-*-***-****"},{"country":"GG","phoneCode":"44-1481","zone":"Europe/London","language":"en","firstDay":null},{"country":"GN","phoneCode":"224","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+224-**-***-***"},{"country":"GW","phoneCode":"245","zone":"Africa/Bissau","language":"pt","firstDay":null,"phoneMask":"+245-*-******"},{"country":"GY","phoneCode":"592","zone":"America/Guyana","language":"en","firstDay":null,"phoneMask":"+592-***-****"},{"country":"HT","phoneCode":"509","zone":"America/Port-au-Prince","language":"ht","firstDay":null,"phoneMask":"+509-**-**-****"},{"country":"HN","phoneCode":"504","zone":"America/Tegucigalpa","language":"es","firstDay":"Su","phoneMask":"+504-****-****"},{"country":"HK","phoneCode":"852","zone":"Asia/Hong_Kong","language":"zh","firstDay":"Su","phoneMask":"+852-****-****"},{"country":"HU","phoneCode":"36","zone":"Europe/Budapest","language":"hu","firstDay":"Mo","phoneMask":"+36-***-***-***","nameFormat":"lf"},{"country":"IS","phoneCode":"354","zone":"Atlantic/Reykjavik","language":"is","firstDay":"Mo","phoneMask":"+354-***-****"},{"country":"IN","phoneCode":"91","zone":"Asia/Kolkata","language":"en","firstDay":"Mo","phoneMask":"+91-****-***-***"},{"country":"ID","phoneCode":"62","zone":"Asia/Jakarta","language":"id","firstDay":"Mo","phoneMask":["+62-**-***-**","+62-**-***-***","+62-**-***-****","+62-8-**-***-***","+62-8-**-***-****","+62-8-**-***-**-***"]},{"country":"IR","phoneCode":"98","zone":"Asia/Tehran","language":"fa","firstDay":"Sa","phoneMask":"+98-***-***-****"},{"country":"IQ","phoneCode":"964","zone":"Asia/Baghdad","language":"ar","firstDay":"Sa","phoneMask":"+964-***-***-****"},{"country":"IE","firstDay":"Mo","language":"en","phoneCode":"353","phoneMask":"+353-***-***-***","zone":"Europe/Dublin"},{"country":"IM","firstDay":null,"language":"Pound","phoneCode":"44-1624","zone":"Isle of Man"},{"country":"IL","firstDay":"Su","language":"he","languageAlternative":["il"],"phoneCode":"972","phoneMask":["+972-*-***-****","+972-5-*-***-****"],"zone":"Asia/Jerusalem"},{"country":"IT","firstDay":"Mo","language":"it","phoneCode":"39","phoneMask":"+39-***-****-***","zone":"Europe/Rome"},{"country":"CI","phoneCode":"225","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+225-**-***-***"},{"country":"JM","phoneCode":"1-876","zone":"America/Jamaica","language":"en","firstDay":"Su","phoneMask":"+1-876-***-****"},{"country":"JP","phoneCode":"81","zone":"Asia/Tokyo","language":"ja","firstDay":"Su","phoneMask":["+81-***-***-***","+81-**-****-****"],"nameFormat":"lf"},{"country":"JE","phoneCode":"44-1534","zone":"Europe/London","language":"en","firstDay":null},{"country":"JO","phoneCode":"962","zone":"Asia/Amman","language":"ar","firstDay":"Sa","phoneMask":"+962-*-****-****"},{"country":"KZ","phoneCode":"7","zone":"Asia/Almaty","language":"kk","firstDay":"Mo","phoneMask":["+7-6-**-***-**-**","+7-7-**-***-**-**"],"nameFormat":"lf"},{"country":"KE","phoneCode":"254","zone":"Africa/Nairobi","language":"en","firstDay":"Su","phoneMask":"+254-***-******"},{"country":"KI","phoneCode":"686","zone":"Pacific/Tarawa","language":"en","firstDay":null,"phoneMask":"+686-**-***"},{"country":"XK","phoneCode":"383","zone":"Europe/Belgrade","language":"sq","firstDay":"Mo"},{"country":"KW","phoneCode":"965","zone":"Asia/Kuwait","language":"ar","firstDay":"Sa","phoneMask":"+965-****-****"},{"country":"KG","phoneCode":"996","zone":"Asia/Bishkek","language":"ky","firstDay":"Mo","phoneMask":"+996-***-***-***"},{"country":"LA","phoneCode":"856","zone":"Asia/Vientiane","language":"lo","firstDay":null,"phoneMask":["+856-**-***-***","+856-20-**-***-***"]},{"country":"LV","phoneCode":"371","zone":"Europe/Riga","language":"lv","firstDay":"Mo","phoneMask":"+371-**-***-***"},{"country":"LB","phoneCode":"961","zone":"Asia/Beirut","language":"ar","firstDay":"Mo","phoneMask":["+961-*-***-***","+961-**-***-***"]},{"country":"LS","phoneCode":"266","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+266-*-***-****"},{"country":"LR","phoneCode":"231","zone":"Africa/Monrovia","language":"en","firstDay":null,"phoneMask":"+231-**-***-***"},{"country":"LY","phoneCode":"218","zone":"Africa/Tripoli","language":"ar","firstDay":"Sa","phoneMask":["+218-**-***-***","+218-21-***-****"]},{"country":"LI","phoneCode":"423","zone":"Europe/Zurich","language":"de","firstDay":null,"phoneMask":"+423-***-***-****"},{"country":"LT","phoneCode":"370","zone":"Europe/Vilnius","language":"lt","firstDay":"Mo","phoneMask":"+370-***-**-***"},{"country":"LU","phoneCode":"352","zone":"Europe/Luxembourg","language":"lb","firstDay":"Mo","phoneMask":"+352-***-***-***"},{"country":"MO","phoneCode":"853","zone":"Asia/Macau","language":"zh","firstDay":null,"phoneMask":"+853-****-****"},{"country":"MK","phoneCode":"389","zone":"Europe/Belgrade","language":"mk","firstDay":"Mo","phoneMask":"+389-**-***-***"},{"country":"MG","phoneCode":"261","zone":"Indian/Antananarivo","language":"fr","firstDay":null,"phoneMask":"+261-**-**-*****"},{"country":"MW","phoneCode":"265","zone":"Africa/Maputo","language":"ny","firstDay":null,"phoneMask":["+265-*-****-****","+265-1-***-***"]},{"country":"MY","phoneCode":"60","zone":"Asia/Kuala_Lumpur","language":"ms","firstDay":"Mo","phoneMask":["+60-*-***-***","+60-**-***-***","+60-**-***-****","+60-***-***-***"]},{"country":"MV","phoneCode":"960","zone":"Indian/Maldives","language":"dv","firstDay":null,"phoneMask":"+960-***-****"},{"country":"ML","phoneCode":"223","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+223-**-**-****"},{"country":"MT","phoneCode":"356","zone":"Europe/Malta","language":"mt","firstDay":null,"phoneMask":"+356-****-****"},{"country":"MH","phoneCode":"692","zone":"Pacific/Majuro","language":"mh","firstDay":null,"phoneMask":"+692-***-****"},{"country":"MR","phoneCode":"222","zone":"Africa/Abidjan","language":"ar","firstDay":null,"phoneMask":"+222-**-**-****"},{"country":"MU","phoneCode":"230","zone":"Indian/Mauritius","language":"en","firstDay":null,"phoneMask":"+230-***-****"},{"country":"YT","phoneCode":"262","zone":"Indian/Mayotte","language":"fr","firstDay":null},{"country":"MX","phoneCode":"52","zone":"America/Mexico_City","language":"es","firstDay":"Su","phoneMask":["+52-**-**-****","+52-***-***-****"]},{"country":"FM","phoneCode":"691","zone":"Pacific/Pohnpei","language":"en","firstDay":null,"phoneMask":"+691-***-****"},{"country":"MD","phoneCode":"373","zone":"Europe/Chisinau","language":"ro","firstDay":null,"phoneMask":"+373-****-****"},{"country":"MC","phoneCode":"377","zone":"Europe/Monaco","language":"fr","firstDay":"Mo","phoneMask":["+377-**-***-***","+377-***-***-***"]},{"country":"MN","phoneCode":"976","zone":"Asia/Ulaanbaatar","language":"mn","firstDay":"Mo","phoneMask":"+976-**-**-****"},{"country":"ME","phoneCode":"382","zone":"Europe/Belgrade","language":"sr","firstDay":null,"phoneMask":"+382-**-***-***"},{"country":"MS","phoneCode":"1-664","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-664-***-****"},{"country":"MA","phoneCode":"212","zone":"Africa/Casablanca","language":"ar","firstDay":"Mo","phoneMask":"+212-**-****-***"},{"country":"MZ","phoneCode":"258","zone":"Africa/Maputo","language":"pt","firstDay":null,"phoneMask":"+258-**-***-***"},{"country":"MM","phoneCode":"95","zone":"Asia/Rangoon","language":"my","firstDay":null,"phoneMask":["+95-***-***","+95-*-***-***","+95-**-***-***"]},{"country":"NA","phoneCode":"264","zone":"Africa/Windhoek","language":"en","firstDay":null,"phoneMask":"+264-**-***-****"},{"country":"NR","phoneCode":"674","zone":"Pacific/Nauru","language":"na","firstDay":null,"phoneMask":"+674-***-****"},{"country":"NP","phoneCode":"977","zone":"Asia/Kathmandu","language":"ne","firstDay":null,"phoneMask":"+977-**-***-***"},{"country":"NL","phoneCode":"31","zone":"Europe/Amsterdam","language":"nl","firstDay":"Mo","phoneMask":"+31-**-***-****"},{"country":"AN","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":["+599-***-****","+599-9-***-****"]},{"country":"NC","phoneCode":"687","zone":"Pacific/Noumea","language":"fr","firstDay":null,"phoneMask":"+687-**-****"},{"country":"NZ","phoneCode":"64","zone":"Pacific/Auckland","language":"en","firstDay":"Mo","phoneMask":["+64-**-***-***","+64-***-***-***","+64-***-***-****"]},{"country":"NI","phoneCode":"505","zone":"America/Managua","language":"es","firstDay":"Su","phoneMask":"+505-****-****"},{"country":"NE","phoneCode":"227","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+227-**-**-****"},{"country":"NG","phoneCode":"234","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":["+234-**-***-**","+234-**-***-***","+234-***-***-****"]},{"country":"NU","phoneCode":"683","zone":"Pacific/Niue","language":"niu","firstDay":null,"phoneMask":"+683-****"},{"country":"KP","phoneCode":"850","zone":"Asia/Pyongyang","language":"ko","firstDay":null,"phoneMask":["+850-***-***","+850-**-***-***","+850-****-****","+850-***-****-***","+850-****-*************","+850-191-***-****"]},{"country":"MP","phoneCode":"1-670","zone":"Pacific/Saipan","language":"fil","firstDay":null,"phoneMask":"+1-670-***-****"},{"country":"NO","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":"Mo","phoneMask":"+47-***-**-***"},{"country":"OM","phoneCode":"968","zone":"Asia/Muscat","language":"ar","firstDay":"Sa","phoneMask":"+968-**-***-***"},{"country":"PK","phoneCode":"92","zone":"Asia/Karachi","language":"ur","firstDay":"Mo","phoneMask":"+92-***-***-****"},{"country":"PW","phoneCode":"680","zone":"Pacific/Palau","language":"pau","firstDay":null,"phoneMask":"+680-***-****"},{"country":"PS","phoneCode":"970","zone":"Asia/Hebron","language":"ar","firstDay":null,"phoneMask":"+970-**-***-****"},{"country":"PA","phoneCode":"507","zone":"America/Panama","language":"es","firstDay":"Su","phoneMask":"+507-***-****"},{"country":"PG","phoneCode":"675","zone":"Pacific/Port_Moresby","language":"en","firstDay":null,"phoneMask":"+675-***-**-***"},{"country":"PY","phoneCode":"595","zone":"America/Asuncion","language":"es","firstDay":"Mo","phoneMask":"+595-***-***-***"},{"country":"PE","phoneCode":"51","zone":"America/Lima","language":"es","firstDay":"Su","phoneMask":"+51-***-***-***"},{"country":"PH","phoneCode":"63","zone":"Asia/Manila","language":"tl","firstDay":"Su","phoneMask":"+63-***-***-****"},{"country":"PN","phoneCode":"64","zone":"Pacific/Pitcairn","language":"en","firstDay":null},{"country":"PL","phoneCode":"48","zone":"Europe/Warsaw","language":"pl","firstDay":"Mo","phoneMask":"+48-***-***-***"},{"country":"PT","phoneCode":"351","zone":"Europe/Lisbon","language":"pt","firstDay":"Mo","phoneMask":"+351-**-***-****"},{"country":"PR","phoneCode":"1-787","zone":"San Juan","language":"Dollar","firstDay":"Su"},{"country":"QA","phoneCode":"974","zone":"Asia/Qatar","language":"ar","firstDay":"Sa","phoneMask":"+974-****-****"},{"country":"CG","phoneCode":"242","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+242-**-***-****"},{"country":"RE","phoneCode":"262","zone":"Indian/Reunion","language":"fr","firstDay":null,"phoneMask":"+262-*****-****"},{"country":"RO","phoneCode":"40","zone":"Europe/Bucharest","language":"ro","firstDay":"Mo","phoneMask":"+40-**-***-****"},{"country":"RU","phoneCode":"7","phoneWithin":"8","zone":"Europe/Moscow","language":"ru","firstDay":"Mo","phoneMask":"+7-***-***-**-**","nameFormat":"lsf"},{"country":"RW","phoneCode":"250","zone":"Africa/Maputo","language":"rw","firstDay":null,"phoneMask":"+250-***-***-***"},{"country":"BL","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"SH","phoneCode":"290","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+290-****"},{"country":"KN","phoneCode":"1-869","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-869-***-****"},{"country":"LC","phoneCode":"1-758","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-758-***-****"},{"country":"MF","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"PM","phoneCode":"508","zone":"America/Miquelon","language":"fr","firstDay":null},{"country":"VC","phoneCode":"1-784","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-784-***-****"},{"country":"WS","phoneCode":"685","zone":"Pacific/Apia","language":"sm","firstDay":null,"phoneMask":"+685-**-****"},{"country":"SM","phoneCode":"378","zone":"Europe/Rome","language":"it","firstDay":null,"phoneMask":"+378-****-******"},{"country":"ST","phoneCode":"239","zone":"Africa/Abidjan","language":"pt","firstDay":null,"phoneMask":"+239-**-*****"},{"country":"SA","phoneCode":"966","zone":"Asia/Riyadh","language":"ar","firstDay":"Sa","phoneMask":["+966-*-***-****","+966-5-****-****"]},{"country":"SN","phoneCode":"221","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+221-**-***-****"},{"country":"RS","phoneCode":"381","zone":"Europe/Belgrade","language":"sr","firstDay":"Mo","phoneMask":"+381-**-***-****"},{"country":"SC","phoneCode":"248","zone":"Indian/Mahe","language":"en","firstDay":null,"phoneMask":"+248-*-***-***"},{"country":"SL","phoneCode":"232","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+232-**-******"},{"country":"SG","phoneCode":"65","zone":"Asia/Singapore","language":"cmn","firstDay":"Mo","phoneMask":"+65-****-****"},{"country":"SX","phoneCode":"1-721","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+1-721-***-****"},{"country":"SK","phoneCode":"421","zone":"Europe/Prague","language":"sk","firstDay":"Mo","phoneMask":"+421-***-***-***"},{"country":"SI","phoneCode":"386","zone":"Europe/Belgrade","language":"sl","firstDay":null,"phoneMask":"+386-**-***-***"},{"country":"SB","phoneCode":"677","zone":"Pacific/Guadalcanal","language":"en","firstDay":null,"phoneMask":["+677-*****","+677-***-****"]},{"country":"SO","phoneCode":"252","zone":"Africa/Mogadishu","language":"so","firstDay":null,"phoneMask":["+252-*-***-***","+252-**-***-***"]},{"country":"ZA","phoneCode":"27","zone":"Africa/Johannesburg","language":"zu","firstDay":"Su","phoneMask":"+27-**-***-****"},{"country":"KR","phoneCode":"82","zone":"Asia/Seoul","language":"ko","firstDay":"Su","phoneMask":["+82-**-***-****","+82-**-***-****-**"],"nameFormat":"lf"},{"country":"SS","phoneCode":"211","zone":"Africa/Khartoum","language":"en","firstDay":null,"phoneMask":"+211-**-***-****"},{"country":"ES","phoneCode":"34","zone":"Europe/Madrid","language":"es","firstDay":"Mo","phoneMask":"+34-***-***-***"},{"country":"LK","phoneCode":"94","zone":"Asia/Colombo","language":"si","firstDay":null,"phoneMask":"+94-**-***-****"},{"country":"SD","phoneCode":"249","zone":"Africa/Khartoum","language":"ar","firstDay":null,"phoneMask":"+249-**-***-****"},{"country":"SR","phoneCode":"597","zone":"America/Paramaribo","language":"nl","firstDay":null,"phoneMask":["+597-***-***","+597-***-****"]},{"country":"SJ","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":null},{"country":"SZ","phoneCode":"268","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+268-**-**-****"},{"country":"SE","phoneCode":"46","zone":"Europe/Stockholm","language":"sv","firstDay":"Mo","phoneMask":"+46-**-***-****"},{"country":"CH","phoneCode":"41","zone":"Europe/Zurich","language":"de","firstDay":"Mo","phoneMask":"+41-**-***-****"},{"country":"SY","phoneCode":"963","zone":"Asia/Damascus","language":"ar","firstDay":"Sa","phoneMask":"+963-**-****-***"},{"country":"TW","phoneCode":"886","zone":"Asia/Taipei","language":"zh","firstDay":"Su","phoneMask":["+886-****-****","+886-*-****-****"]},{"country":"TJ","phoneCode":"992","zone":"Asia/Dushanbe","language":"tg","firstDay":null,"phoneMask":"+992-**-***-****"},{"country":"TZ","phoneCode":"255","zone":"Africa/Dar_es_Salaam","language":"sw","firstDay":null,"phoneMask":"+255-**-***-****"},{"country":"TH","phoneCode":"66","zone":"Asia/Bangkok","language":"th","firstDay":"Mo","phoneMask":"+66-**-***-****"},{"country":"TG","phoneCode":"228","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+228-**-***-***"},{"country":"TK","phoneCode":"690","zone":"Pacific/Fakaofo","language":"tkl","firstDay":null,"phoneMask":"+690-****"},{"country":"TO","phoneCode":"676","zone":"Pacific/Tongatapu","language":"to","firstDay":null,"phoneMask":"+676-*****"},{"country":"TT","phoneCode":"1-868","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-868-***-****"},{"country":"TN","phoneCode":"216","zone":"Africa/Tunis","language":"ar","firstDay":"Mo","phoneMask":"+216-**-***-***"},{"country":"TR","phoneCode":"90","zone":"Europe/Istanbul","language":"tr","firstDay":"Mo","phoneMask":"+90-***-***-****"},{"country":"TM","phoneCode":"993","zone":"Asia/Ashgabat","language":"tk","firstDay":null,"phoneMask":"+993-*-***-****"},{"country":"TC","phoneCode":"1-649","zone":"America/Grand_Turk","language":"en","firstDay":null,"phoneMask":"+1-649-***-****"},{"country":"TV","phoneCode":"688","zone":"Pacific/Funafuti","language":"tvl","firstDay":null,"phoneMask":["+688-2-****","+688-90-****"]},{"country":"VI","phoneCode":"1-340","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-340-***-****"},{"country":"UG","phoneCode":"256","zone":"Africa/Kampala","language":"en","firstDay":null,"phoneMask":"+256-***-***-***"},{"country":"UA","phoneCode":"380","zone":"Europe/Kiev","language":"uk","languageAlternative":["ua"],"firstDay":"Mo","phoneMask":"+380-**-***-**-**"},{"country":"AE","phoneCode":"971","zone":"Asia/Dubai","language":"ar","firstDay":"Sa","phoneMask":["+971-*-***-****","+971-5-*-***-****"]},{"country":"UY","phoneCode":"598","zone":"America/Montevideo","language":"es","firstDay":"Mo","phoneMask":"+598-*-***-**-**"},{"country":"UZ","phoneCode":"998","zone":"Asia/Tashkent","language":"uz","firstDay":"Mo","phoneMask":"+998-**-***-****"},{"country":"VU","phoneCode":"678","zone":"Pacific/Efate","language":"bi","firstDay":null,"phoneMask":["+678-*****","+678-**-*****"]},{"country":"VA","phoneCode":"379","zone":"Europe/Rome","language":"la","firstDay":null,"phoneMask":"+39-6-698-*****"},{"country":"VE","phoneCode":"58","zone":"America/Caracas","language":"es","firstDay":"Su","phoneMask":"+58-***-***-****"},{"country":"VN","phoneCode":"84","zone":"Asia/Ho_Chi_Minh","language":"vi","firstDay":"Mo","phoneMask":["+84-**-****-***","+84-***-****-***"],"nameFormat":"fsl"},{"country":"WF","phoneCode":"681","zone":"Pacific/Wallis","language":"wls","firstDay":null,"phoneMask":"+681-**-****"},{"country":"EH","phoneCode":"212","zone":"Africa/El_Aaiun","language":"ar","firstDay":null},{"country":"YE","phoneCode":"967","zone":"Asia/Aden","language":"ar","firstDay":"Sa","phoneMask":["+967-*-***-***","+967-**-***-***","+967-***-***-***"]},{"country":"ZM","phoneCode":"260","zone":"Africa/Maputo","language":"en","firstDay":null,"phoneMask":"+260-**-***-****"},{"country":"ZW","phoneCode":"263","zone":"Africa/Maputo","language":"en","firstDay":"Su","phoneMask":"+263-*-******"},{"country":"GF","phoneCode":"594","zone":"America/Cayenne","language":"fr","firstDay":"Mo","phoneMask":"+594-*****-****"},{"country":"MQ","phoneCode":"596","zone":"America/Martinique","language":"fr","firstDay":"Mo","phoneMask":"+596-***-**-**-**"},{"country":"NF","phoneCode":"672-3","zone":"Pacific/Norfolk","language":"en","firstDay":"Mo","phoneMask":"+672-3-**-***"},{"country":"IC","phoneCode":"3428","zone":"Europe/Berlin","language":"es","firstDay":"Mo"}]'), ls = "geo-code", E = class E {
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
    return cs;
  }
  /**
   * Returns the data about the country by its full code.
   *
   * Возвращает данные о стране по ее полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getByCode(t) {
    let n;
    return t && (t.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (n = this.getByCodeFull(t)), !n && t.match(/[A-Z]{2}/) && (n = this.getByCountry(this.toCountry(t))), !n && t.match(/[a-z]{2}/) && (n = this.getByLanguage(this.toLanguage(t)))), this.toFull(rs(n ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(t) {
    return this.getList().find(
      (n) => is(t, [
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
  static getByCountry(t) {
    return this.getList().find((n) => n.country === t || n?.countryAlternative?.find((o) => o === t));
  }
  /**
   * Returns the full data by language.
   *
   * Возвращает полные данные по языку.
   * @param language language/ язык
   */
  static getByLanguage(t) {
    return this.getList().find((n) => n.language === t || n?.languageAlternative?.find((o) => o === t));
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
    const t = Math.abs(Math.trunc(this.timezone / 60)).toString().padStart(2, "0"), n = Math.abs(this.timezone % 60).toString().padStart(2, "0");
    return this.timezone >= 0 ? `-${t}:${n}` : `+${t}:${n}`;
  }
  /**
   * Determines the current country by its full name.
   *
   * Определяет текущую страну по ее полному названию.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static find(t) {
    return this.getByCode(t);
  }
  /**
   * Returns a complete string with the country code and language.
   *
   * Возвращает полную строку с кодом страны и языка.
   * @param item object with data about the current country/
   * объект с данными об текущей стране
   */
  static toStandard(t) {
    return `${t.language}-${t.country}`;
  }
  /**
   * Changes the data by the full code.
   *
   * Изменяет данные по полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   * @param save save the result/ сохранить результат
   */
  static set(t, n) {
    this.location = t, this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location), n && this.storage.set(this.location);
  }
  /**
   * Changing the default timezone for transmitted dates.
   *
   * Изменение временной зоны по умолчанию для отправляемых дат
   * @param timezone new time zone/ новая временная зона
   */
  static setTimezone(t) {
    this.timezone = t;
  }
  /**
   * Determines the current location.
   *
   * Определяет текущую локацию.
   */
  static findLocation() {
    return H() && (this.storage.get() || document.querySelector("html")?.lang || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
  }
  /**
   * Determines the current language.
   *
   * Определяет текущий язык.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static findLanguage(t) {
    return t && t.match(/[a-z]{2}/) ? this.toLanguage(t) : this.item.language;
  }
  /**
   * Returns the country code by its full language-country.
   *
   * Возвращает код страны по ее полному язык-страна.
   * @param code country code/ код страна
   */
  static toCountry(t) {
    return t.replace(/[^A-Z]+/g, "");
  }
  /**
   * Returns the language code by its full language-country.<br>
   * Возвращает код языка по его полному язык-страна.
   * @param code country code/ код страна
   */
  static toLanguage(t) {
    return t.replace(/[^a-z]+/g, "");
  }
  /**
   * Adding missing data.<br>
   * Добавление недостающих данных.
   * @param item object with data about the current country/
   * объект с данными об текущей стране
   */
  static toFull(t) {
    return {
      ...t,
      standard: this.toStandard(t),
      firstDay: t?.firstDay || "Mo"
    };
  }
};
R(E, "storage", new us(ls)), R(E, "location"), R(E, "item"), R(E, "language"), R(E, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), E.location = E.findLocation(), E.language = E.findLanguage(E.location), E.item = E.getByCode(E.location);
let de = E;
var fs = /* @__PURE__ */ ((e) => (e.get = "GET", e.post = "POST", e.put = "PUT", e.delete = "DELETE", e))(fs || {});
const xt = "d-response-loading", Vt = [];
class U {
  static url = "/api/";
  static response = [];
  static responseLoading;
  static headers = {};
  static requestDefault;
  static preparation = !1;
  static preparationItem;
  static preparationEndItem;
  static status;
  static statusText;
  static error;
  static lastResponse;
  static lastMessage;
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
  static getHeaders(t, n = "application/json;charset=UTF-8") {
    if (t !== null) {
      const o = {
        ...this.headers,
        ...t || {}
      };
      return ce(n) && (o["Content-Type"] = n), o;
    }
  }
  /**
   * Getting the full path to the request script.
   *
   * Получение полного пути к скрипту запроса.
   * @param path path to the script/ путь к скрипту
   * @param api adding a path to the site’s API/ добавление пути к API сайта
   */
  static getUrl(t, n = !0) {
    return `${n ? this.url : ""}${t}`.replace("{locale}", de.getLocation()).replace("{country}", de.getCountry()).replace("{language}", de.getLanguage());
  }
  /**
   * Getting data for the body.
   *
   * Получение данных для тела.
   * @param request this request/ данный запрос
   * @param method method for request/ метод запрос
   */
  static getBody(t = {}, n = "GET") {
    if (t instanceof FormData)
      return t;
    if (n !== "GET" && ce(t))
      return it(t) ? t : JSON.stringify(t);
  }
  /**
   * Getting data for the body of the get method.
   *
   * Получение данных для тела метода get.
   * @param request this request/ данный запрос
   * @param path path to request/ путь к запрос
   * @param method method for request/ метод запрос
   */
  static getBodyForGet(t, n = "", o = "GET") {
    if (o === "GET") {
      const s = n.match(/\?/) ? "&" : "?", a = typeof t == "object" ? os(t) : t;
      if (ce(a))
        return `${s}${a}`;
    }
    return "";
  }
  /**
   * Returns a list of data about the emulator.
   *
   * Возвращает список данных об эмуляторе.
   */
  static getResponseList() {
    return this.response.filter((t) => t.isForGlobal !== !0);
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
  static addRequestDefault(t) {
    if (this.requestDefault) {
      const n = Ye(this.requestDefault);
      if (t instanceof FormData)
        Te(n, (o, s) => {
          t.has(s) || t.set(s, o);
        });
      else if (Q(t))
        return {
          ...n,
          ...t
        };
    }
    return t;
  }
  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  static setHeaders(t) {
    return Q(t) && (this.headers = t), U;
  }
  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  static setRequestDefault(t) {
    this.requestDefault = t;
  }
  /**
   * Change the base path to the script.
   *
   * Изменить базовый путь к скрипту.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(t) {
    return this.url = t, U;
  }
  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(t) {
    return this.preparationItem = t, U;
  }
  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(t) {
    return this.preparationEndItem = t, U;
  }
  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters/ строка запроса или список параметров
   */
  static async request(t) {
    return it(t) ? await this.fetch({
      path: t
    }) : await this.fetch(t);
  }
  /**
   * Sends a get method request.
   *
   * Отправляет запрос метода get.
   * @param request list of parameters/ список параметров
   */
  static get(t) {
    return this.request({
      ...t,
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
  static post(t) {
    return this.request({
      ...t,
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
  static put(t) {
    return this.request({
      ...t,
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
  static delete(t) {
    return this.request({
      ...t,
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
  static addResponse(t) {
    return this.response.push(...ut(t)), U;
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
  static getResponse(t = "", n, o, s) {
    return this.response.find((a) => {
      if (ct(Ye(a?.disable)) !== !0 && (a.path instanceof RegExp && t.match(a.path) || t === a.path) && n === a.method && (Vt.indexOf(a) === -1 || s)) {
        const r = this.addRequestDefault(a?.request);
        let i = !1;
        if (o === r || r === "*any" ? i = !0 : ce(o) && ce(r) && Q(o) && Q(r) && !(o instanceof FormData) && !(r instanceof FormData) && Object.values(o).length === Object.values(r).length && (i = Object.entries(r).reduce(
          (c, [f, p]) => c && (p === o?.[f] || p === "*any"),
          !0
        )), i)
          return s && console.warn(`Response type: ${a.path}`), Vt.push(a), !0;
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
  static async fetch(t) {
    const {
      toData: n = !0,
      hideError: o = !1,
      queryReturn: s = void 0,
      globalPreparation: a = !0,
      globalEnd: r = !0
    } = t, i = await this.makeEmulator(t);
    if (i)
      return i;
    let c = {};
    W.show();
    try {
      this.preparationItem && a && await this.makePreparation();
      const f = await this.makeQuery(t), p = r && this.preparationEndItem ? await this.makePreparationEnd(f) : {};
      if (this.status = f.status, this.statusText = f.statusText, p?.reset)
        return W.hide(), await this.fetch(t);
      s ? c = await s(f) : "data" in p ? c = p.data : (f.headers.get("Content-Type") ?? "").match("application/json") ? c = await f.json() : c = { data: await f.text() };
    } catch (f) {
      o && console.error("Api: ", f), this.error = f;
    }
    return W.hide(), this.makeData(c, n);
  }
  /**
   * Emulates an execution request.
   *
   * Эмулирует запрос выполнения.
   * @param response Data for pre-request/ Данные для пред-запроса
   * @param request data for the request/ данные для запроса
   */
  static fetchResponse(t, n) {
    return this.startResponseLoading(), new Promise((o) => {
      bn(
        Bt(t.response) ? t.response(n) : t.response
      ).then((s) => {
        Ye(t?.lag) ? (W.show(), setTimeout(() => {
          this.stopResponseLoading(), o(s), W.hide();
        }, ss(0, 2e3))) : (this.stopResponseLoading(), o(s));
      });
    });
  }
  /**
   * Выполнение эмулятора, если доступно
   * @param apiFetch property of the request/ свойство запроса
   */
  static async makeEmulator(t) {
    const {
      path: n = "",
      method: o = "GET",
      global: s = o === "GET",
      devMode: a = !1
    } = t;
    if (s || a) {
      const r = this.addRequestDefault(t.request), i = this.getResponse(n, o, r, a);
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
  static async makeQuery(t) {
    const n = this.addRequestDefault(t.request), {
      api: o = !0,
      path: s = "",
      pathFull: a = void 0,
      method: r = "GET",
      headers: i = {},
      type: c = "application/json;charset=UTF-8",
      init: f = {}
    } = t, p = a ?? this.getUrl(s, o), u = `${p}${this.getBodyForGet(n, p, r)}`, l = this.getHeaders(i, c), h = {
      ...f,
      method: r,
      body: this.getBody(n, r)
    };
    return l && (h.headers = l), await fetch(u, h);
  }
  /**
   * Preparation before executing the request.
   *
   * Подготовка перед выполнением запроса.
   */
  static async makePreparation() {
    return new Promise((t) => {
      this.preparation ? setTimeout(() => this.makePreparation().then(t), 160) : this.preparationItem ? (this.preparation = !0, this.preparationItem().then(() => {
        this.preparation = !1, t();
      })) : t();
    });
  }
  /**
   * Analysis of the request after execution.
   *
   * Анализ запроса после выполнения.
   * @param query data received in the request/ данные, полученные в запросе
   */
  static async makePreparationEnd(t) {
    let n = {};
    return this.preparationEndItem && (n = await this.preparationEndItem(t)), n;
  }
  /**
   * Transforms data if needed.
   *
   * Преобразует данные, если нужно.
   * @param data data for transformation/ данные для преобразования
   * @param toData is it necessary to process the data/ нужно ли обрабатывать данные
   */
  static makeData(t, n) {
    if (this.lastResponse = t, t && Q(t) && ("message" in t && (this.lastMessage = String(t.message)), n && "data" in t)) {
      if (Q(t.data)) {
        const o = { ...t.data };
        return "success" in t && (o.success = t.success), o;
      }
      return t.data;
    }
    return t;
  }
  /**
   * Enable loading for request emulation.
   *
   * Включить загрузку для эмуляции запроса.
   */
  static startResponseLoading() {
    this.responseLoading && clearTimeout(this.responseLoading), H() && document.body.classList.add(xt);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  static stopResponseLoading() {
    this.responseLoading = setTimeout(() => {
      this.responseLoading = void 0, H() && document.body.classList.remove(xt);
    }, 1200);
  }
}
const Ze = "__UI_ICON", Lt = 320, Ft = "--LOAD--", ye = class ye {
  /**
   * Checks if the given icon is in the list of connected icons.
   *
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name/ название иконки
   */
  static is(t) {
    return t in this.icons || this.getName(t) in this.icons;
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
  static async get(t, n = "", o = 1e3 * 60 * 3) {
    const s = this.icons?.[this.getName(t)] ?? this.icons?.[t] ?? `${t.replace(/^@/, n ?? this.url)}.svg`;
    return typeof s == "string" ? s === Ft && o > 0 ? (await this.wait(), this.get(t, n, o - Lt)) : s : await s;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return Te(this.icons, (t, n) => n.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${U.isLocalhost(), ""}${this.url}`;
  }
  /**
   * Adding custom icons.
   *
   * Добавление пользовательских иконок.
   * @param index icon name/ название иконки
   * @param file path to the file/ путь к файлу
   */
  static add(t, n) {
    this.icons[this.getName(t)] = n;
  }
  /**
   * Adding custom icons in loading mode.
   *
   * Добавление пользовательских иконок в режиме загрузки.
   * @param index icon name/ название иконки
   */
  static addLoad(t) {
    this.icons[this.getName(t)] = Ft;
  }
  /**
   * Adding custom global icons.
   *
   * Добавление пользовательских глобальных иконок.
   * @param index icon name/ название иконки
   * @param file path to the file/ путь к файлу
   */
  static addGlobal(t, n) {
    this.icons[this.getName(t)] = `${this.getUrlGlobal()}${n}`;
  }
  /**
   * Adding an icon by the list.
   *
   * Добавление иконки по списку.
   * @param list list of icons/ список иконки
   */
  static addByList(t) {
    Te(t, (n, o) => this.add(o, n));
  }
  /**
   * Changes the file path.
   *
   * Изменяет путь к файлу.
   * @param url new file path/ новый путь к файлу
   */
  static setUrl(t) {
    this.url = t;
  }
  /**
   * Returns the icon name.
   *
   * Возвращает название иконки.
   * @param index icon name/ название иконки
   */
  static getName(t) {
    return `@${t}`;
  }
  /**
   * Script execution delay.
   *
   * Задержка выполнения скрипта.
   */
  static wait() {
    return new Promise((t) => setTimeout(() => t(), Lt));
  }
};
R(ye, "icons", {}), R(ye, "url", "/icons/"), H() && (Ze in window || (window[Ze] = {}), ye.icons = window[Ze]);
let $t = ye;
export {
  U as A,
  xo as B,
  Cs as C,
  us as D,
  Ot as E,
  _s as F,
  de as G,
  rs as H,
  fs as I,
  $t as J,
  bn as K,
  W as L,
  Nt as M,
  Bt as N,
  as as O,
  Rt as P,
  An as Q,
  ce as a,
  Be as b,
  it as c,
  ut as d,
  ct as e,
  Te as f,
  os as g,
  A as h,
  H as i,
  ks as j,
  lt as k,
  Q as l,
  Ye as m,
  is as n,
  te as o,
  vs as p,
  ys as q,
  hs as r,
  Ms as s,
  Pt as t,
  Ds as u,
  gs as v,
  Es as w,
  ds as x,
  ms as y,
  ss as z
};
