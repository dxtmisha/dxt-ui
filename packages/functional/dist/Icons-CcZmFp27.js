var jt = Object.defineProperty;
var Bt = (e, n, t) => n in e ? jt(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var y = (e, n, t) => Bt(e, typeof n != "symbol" ? n + "" : n, t);
function nt(e) {
  return e instanceof Function || typeof e == "function";
}
function Dn(e) {
  return nt(e) ? e() : e;
}
async function Ht(e) {
  const n = Dn(e);
  return n instanceof Promise ? await n : n;
}
function Mn(e) {
  return !!(e && typeof e == "object");
}
function Le(e, n) {
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
function Kt(e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const t of e.split(",")) n[t] = 1;
  return (t) => t in n;
}
const x = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ie = () => {
}, Gt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), O = Object.assign, Ut = Object.prototype.hasOwnProperty, E = (e, n) => Ut.call(e, n), D = Array.isArray, ue = (e) => Ue(e) === "[object Map]", Wt = (e) => Ue(e) === "[object Set]", z = (e) => typeof e == "function", L = (e) => typeof e == "string", ve = (e) => typeof e == "symbol", N = (e) => e !== null && typeof e == "object", Jt = (e) => (N(e) || z(e)) && z(e.then) && z(e.catch), Yt = Object.prototype.toString, Ue = (e) => Yt.call(e), tt = (e) => Ue(e).slice(8, -1), qt = (e) => Ue(e) === "[object Object]", Cn = (e) => L(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ot = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (t) => n[t] || (n[t] = e(t));
}, st = ot((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zt = ot(
  (e) => e ? `on${st(e)}` : ""
), U = (e, n) => !Object.is(e, n), Qt = (e, n, t, o = !1) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: t
  });
};
let In;
const We = () => In || (In = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _n(e) {
  if (D(e)) {
    const n = {};
    for (let t = 0; t < e.length; t++) {
      const o = e[t], s = L(o) ? to(o) : _n(o);
      if (s)
        for (const r in s)
          n[r] = s[r];
    }
    return n;
  } else if (L(e) || N(e))
    return e;
}
const Xt = /;(?![^(]*\))/g, eo = /:([^]+)/, no = /\/\*[^]*?\*\//g;
function to(e) {
  const n = {};
  return e.replace(no, "").split(Xt).forEach((t) => {
    if (t) {
      const o = t.split(eo);
      o.length > 1 && (n[o[0].trim()] = o[1].trim());
    }
  }), n;
}
function En(e) {
  let n = "";
  if (L(e))
    n = e;
  else if (D(e))
    for (let t = 0; t < e.length; t++) {
      const o = En(e[t]);
      o && (n += o + " ");
    }
  else if (N(e))
    for (const t in e)
      e[t] && (n += t + " ");
  return n.trim();
}
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function $(e, ...n) {
  console.warn(`[Vue warn] ${e}`, ...n);
}
let m;
const Ze = /* @__PURE__ */ new WeakSet();
class oo {
  constructor(n) {
    this.fn = n, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ze.has(this) && (Ze.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || at(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Vn(this), it(this);
    const n = m, t = I;
    m = this, I = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && m !== this && $(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ut(this), m = n, I = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let n = this.deps; n; n = n.nextDep)
        Sn(n);
      this.deps = this.depsTail = void 0, Vn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ze.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    un(this) && this.run();
  }
  get dirty() {
    return un(this);
  }
}
let rt = 0, ye, me;
function at(e, n = !1) {
  if (e.flags |= 8, n) {
    e.next = me, me = e;
    return;
  }
  e.next = ye, ye = e;
}
function An() {
  rt++;
}
function zn() {
  if (--rt > 0)
    return;
  if (me) {
    let n = me;
    for (me = void 0; n; ) {
      const t = n.next;
      n.next = void 0, n.flags &= -9, n = t;
    }
  }
  let e;
  for (; ye; ) {
    let n = ye;
    for (ye = void 0; n; ) {
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
function it(e) {
  for (let n = e.deps; n; n = n.nextDep)
    n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
}
function ut(e) {
  let n, t = e.depsTail, o = t;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === t && (t = s), Sn(o), so(o)) : n = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = n, e.depsTail = t;
}
function un(e) {
  for (let n = e.deps; n; n = n.nextDep)
    if (n.dep.version !== n.version || n.dep.computed && (ct(n.dep.computed) || n.dep.version !== n.version))
      return !0;
  return !!e._dirty;
}
function ct(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ee))
    return;
  e.globalVersion = Ee;
  const n = e.dep;
  if (e.flags |= 2, n.version > 0 && !e.isSSR && e.deps && !un(e)) {
    e.flags &= -3;
    return;
  }
  const t = m, o = I;
  m = e, I = !0;
  try {
    it(e);
    const s = e.fn(e._value);
    (n.version === 0 || U(s, e._value)) && (e._value = s, n.version++);
  } catch (s) {
    throw n.version++, s;
  } finally {
    m = t, I = o, ut(e), e.flags &= -3;
  }
}
function Sn(e, n = !1) {
  const { dep: t, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && t.subsHead === e && (t.subsHead = s), t.subs === e && (t.subs = o, !o && t.computed)) {
    t.computed.flags &= -5;
    for (let r = t.computed.deps; r; r = r.nextDep)
      Sn(r, !0);
  }
  !n && !--t.sc && t.map && t.map.delete(t.key);
}
function so(e) {
  const { prevDep: n, nextDep: t } = e;
  n && (n.nextDep = t, e.prevDep = void 0), t && (t.prevDep = n, e.nextDep = void 0);
}
let I = !0;
const lt = [];
function ke() {
  lt.push(I), I = !1;
}
function Ne() {
  const e = lt.pop();
  I = e === void 0 ? !0 : e;
}
function Vn(e) {
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
let Ee = 0;
class ro {
  constructor(n, t) {
    this.sub = n, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class bn {
  constructor(n) {
    this.computed = n, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(n) {
    if (!m || !I || m === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== m)
      t = this.activeLink = new ro(m, this), m.deps ? (t.prevDep = m.depsTail, m.depsTail.nextDep = t, m.depsTail = t) : m.deps = m.depsTail = t, ft(t);
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
    this.version++, Ee++, this.notify(n);
  }
  notify(n) {
    An();
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
function ft(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let o = n.deps; o; o = o.nextDep)
        ft(o);
    }
    const t = e.dep.subs;
    t !== e && (e.prevSub = t, t && (t.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const $e = /* @__PURE__ */ new WeakMap(), Z = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), cn = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ae = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function A(e, n, t) {
  if (I && m) {
    let o = $e.get(e);
    o || $e.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(t);
    s || (o.set(t, s = new bn()), s.map = o, s.key = t), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: n,
      key: t
    }) : s.track();
  }
}
function K(e, n, t, o, s, r) {
  const a = $e.get(e);
  if (!a) {
    Ee++;
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
  if (An(), n === "clear")
    a.forEach(i);
  else {
    const c = D(e), l = c && Cn(t);
    if (c && t === "length") {
      const p = Number(o);
      a.forEach((u, f) => {
        (f === "length" || f === Ae || !ve(f) && f >= p) && i(u);
      });
    } else
      switch ((t !== void 0 || a.has(void 0)) && i(a.get(t)), l && i(a.get(Ae)), n) {
        case "add":
          c ? l && i(a.get("length")) : (i(a.get(Z)), ue(e) && i(a.get(cn)));
          break;
        case "delete":
          c || (i(a.get(Z)), ue(e) && i(a.get(cn)));
          break;
        case "set":
          ue(e) && i(a.get(Z));
          break;
      }
  }
  zn();
}
function ao(e, n) {
  const t = $e.get(e);
  return t && t.get(n);
}
function ne(e) {
  const n = d(e);
  return n === e ? n : (A(n, "iterate", Ae), w(e) ? n : n.map(k));
}
function vn(e) {
  return A(e = d(e), "iterate", Ae), e;
}
const io = {
  __proto__: null,
  [Symbol.iterator]() {
    return Qe(this, Symbol.iterator, k);
  },
  concat(...e) {
    return ne(this).concat(
      ...e.map((n) => D(n) ? ne(n) : n)
    );
  },
  entries() {
    return Qe(this, "entries", (e) => (e[1] = k(e[1]), e));
  },
  every(e, n) {
    return F(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return F(this, "filter", e, n, (t) => t.map(k), arguments);
  },
  find(e, n) {
    return F(this, "find", e, n, k, arguments);
  },
  findIndex(e, n) {
    return F(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return F(this, "findLast", e, n, k, arguments);
  },
  findLastIndex(e, n) {
    return F(this, "findLastIndex", e, n, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, n) {
    return F(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return Xe(this, "includes", e);
  },
  indexOf(...e) {
    return Xe(this, "indexOf", e);
  },
  join(e) {
    return ne(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Xe(this, "lastIndexOf", e);
  },
  map(e, n) {
    return F(this, "map", e, n, void 0, arguments);
  },
  pop() {
    return pe(this, "pop");
  },
  push(...e) {
    return pe(this, "push", e);
  },
  reduce(e, ...n) {
    return Ln(this, "reduce", e, n);
  },
  reduceRight(e, ...n) {
    return Ln(this, "reduceRight", e, n);
  },
  shift() {
    return pe(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, n) {
    return F(this, "some", e, n, void 0, arguments);
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
    return Qe(this, "values", k);
  }
};
function Qe(e, n, t) {
  const o = vn(e), s = o[n]();
  return o !== e && !w(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = t(r.value)), r;
  }), s;
}
const uo = Array.prototype;
function F(e, n, t, o, s, r) {
  const a = vn(e), i = a !== e && !w(e), c = a[n];
  if (c !== uo[n]) {
    const u = c.apply(e, r);
    return i ? k(u) : u;
  }
  let l = t;
  a !== e && (i ? l = function(u, f) {
    return t.call(this, k(u), f, e);
  } : t.length > 2 && (l = function(u, f) {
    return t.call(this, u, f, e);
  }));
  const p = c.call(a, l, o);
  return i && s ? s(p) : p;
}
function Ln(e, n, t, o) {
  const s = vn(e);
  let r = t;
  return s !== e && (w(e) ? t.length > 3 && (r = function(a, i, c) {
    return t.call(this, a, i, c, e);
  }) : r = function(a, i, c) {
    return t.call(this, a, k(i), c, e);
  }), s[n](r, ...o);
}
function Xe(e, n, t) {
  const o = d(e);
  A(o, "iterate", Ae);
  const s = o[n](...t);
  return (s === -1 || s === !1) && ze(t[0]) ? (t[0] = d(t[0]), o[n](...t)) : s;
}
function pe(e, n, t = []) {
  ke(), An();
  const o = d(e)[n].apply(e, t);
  return zn(), Ne(), o;
}
const co = /* @__PURE__ */ Kt("__proto__,__v_isRef,__isVue"), pt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ve)
);
function lo(e) {
  ve(e) || (e = String(e));
  const n = d(this);
  return A(n, "has", e), n.hasOwnProperty(e);
}
class ht {
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
      return o === (s ? r ? mt : yt : r ? _o : gt).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(o) ? n : void 0;
    const a = D(n);
    if (!s) {
      let c;
      if (a && (c = io[t]))
        return c;
      if (t === "hasOwnProperty")
        return lo;
    }
    const i = Reflect.get(
      n,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      S(n) ? n : o
    );
    return (ve(t) ? pt.has(t) : co(t)) || (s || A(n, "get", t), r) ? i : S(i) ? a && Cn(t) ? i : i.value : N(i) ? s ? Mt(i) : Dt(i) : i;
  }
}
class fo extends ht {
  constructor(n = !1) {
    super(!1, n);
  }
  set(n, t, o, s) {
    let r = n[t];
    if (!this._isShallow) {
      const c = B(r);
      if (!w(o) && !B(o) && (r = d(r), o = d(o)), !D(n) && S(r) && !S(o))
        return c ? !1 : (r.value = o, !0);
    }
    const a = D(n) && Cn(t) ? Number(t) < n.length : E(n, t), i = Reflect.set(
      n,
      t,
      o,
      S(n) ? n : s
    );
    return n === d(s) && (a ? U(o, r) && K(n, "set", t, o, r) : K(n, "add", t, o)), i;
  }
  deleteProperty(n, t) {
    const o = E(n, t), s = n[t], r = Reflect.deleteProperty(n, t);
    return r && o && K(n, "delete", t, void 0, s), r;
  }
  has(n, t) {
    const o = Reflect.has(n, t);
    return (!ve(t) || !pt.has(t)) && A(n, "has", t), o;
  }
  ownKeys(n) {
    return A(
      n,
      "iterate",
      D(n) ? "length" : Z
    ), Reflect.ownKeys(n);
  }
}
class dt extends ht {
  constructor(n = !1) {
    super(!0, n);
  }
  set(n, t) {
    return process.env.NODE_ENV !== "production" && $(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      n
    ), !0;
  }
  deleteProperty(n, t) {
    return process.env.NODE_ENV !== "production" && $(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      n
    ), !0;
  }
}
const po = /* @__PURE__ */ new fo(), ho = /* @__PURE__ */ new dt(), go = /* @__PURE__ */ new dt(!0), ln = (e) => e, Re = (e) => Reflect.getPrototypeOf(e);
function yo(e, n, t) {
  return function(...o) {
    const s = this.__v_raw, r = d(s), a = ue(r), i = e === "entries" || e === Symbol.iterator && a, c = e === "keys" && a, l = s[e](...o), p = t ? ln : n ? fn : k;
    return !n && A(
      r,
      "iterate",
      c ? cn : Z
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
function Te(e) {
  return function(...n) {
    if (process.env.NODE_ENV !== "production") {
      const t = n[0] ? `on key "${n[0]}" ` : "";
      $(
        `${st(e)} operation ${t}failed: target is readonly.`,
        d(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function mo(e, n) {
  const t = {
    get(s) {
      const r = this.__v_raw, a = d(r), i = d(s);
      e || (U(s, i) && A(a, "get", s), A(a, "get", i));
      const { has: c } = Re(a), l = n ? ln : e ? fn : k;
      if (c.call(a, s))
        return l(r.get(s));
      if (c.call(a, i))
        return l(r.get(i));
      r !== a && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && A(d(s), "iterate", Z), Reflect.get(s, "size", s);
    },
    has(s) {
      const r = this.__v_raw, a = d(r), i = d(s);
      return e || (U(s, i) && A(a, "has", s), A(a, "has", i)), s === i ? r.has(s) : r.has(s) || r.has(i);
    },
    forEach(s, r) {
      const a = this, i = a.__v_raw, c = d(i), l = n ? ln : e ? fn : k;
      return !e && A(c, "iterate", Z), i.forEach((p, u) => s.call(r, l(p), l(u), a));
    }
  };
  return O(
    t,
    e ? {
      add: Te("add"),
      set: Te("set"),
      delete: Te("delete"),
      clear: Te("clear")
    } : {
      add(s) {
        !n && !w(s) && !B(s) && (s = d(s));
        const r = d(this);
        return Re(r).has.call(r, s) || (r.add(s), K(r, "add", s, s)), this;
      },
      set(s, r) {
        !n && !w(r) && !B(r) && (r = d(r));
        const a = d(this), { has: i, get: c } = Re(a);
        let l = i.call(a, s);
        l ? process.env.NODE_ENV !== "production" && $n(a, i, s) : (s = d(s), l = i.call(a, s));
        const p = c.call(a, s);
        return a.set(s, r), l ? U(r, p) && K(a, "set", s, r, p) : K(a, "add", s, r), this;
      },
      delete(s) {
        const r = d(this), { has: a, get: i } = Re(r);
        let c = a.call(r, s);
        c ? process.env.NODE_ENV !== "production" && $n(r, a, s) : (s = d(s), c = a.call(r, s));
        const l = i ? i.call(r, s) : void 0, p = r.delete(s);
        return c && K(r, "delete", s, void 0, l), p;
      },
      clear() {
        const s = d(this), r = s.size !== 0, a = process.env.NODE_ENV !== "production" ? ue(s) ? new Map(s) : new Set(s) : void 0, i = s.clear();
        return r && K(
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
    t[s] = yo(s, e, n);
  }), t;
}
function kn(e, n) {
  const t = mo(e, n);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    E(t, s) && s in o ? t : o,
    s,
    r
  );
}
const Do = {
  get: /* @__PURE__ */ kn(!1, !1)
}, Mo = {
  get: /* @__PURE__ */ kn(!0, !1)
}, Co = {
  get: /* @__PURE__ */ kn(!0, !0)
};
function $n(e, n, t) {
  const o = d(t);
  if (o !== t && n.call(e, o)) {
    const s = tt(e);
    $(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const gt = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap();
function Eo(e) {
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
function Ao(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Eo(tt(e));
}
function Dt(e) {
  return B(e) ? e : Nn(
    e,
    !1,
    po,
    Do,
    gt
  );
}
function Mt(e) {
  return Nn(
    e,
    !0,
    ho,
    Mo,
    yt
  );
}
function Pe(e) {
  return Nn(
    e,
    !0,
    go,
    Co,
    mt
  );
}
function Nn(e, n, t, o, s) {
  if (!N(e))
    return process.env.NODE_ENV !== "production" && $(
      `value cannot be made ${n ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const a = Ao(e);
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
function w(e) {
  return !!(e && e.__v_isShallow);
}
function ze(e) {
  return e ? !!e.__v_raw : !1;
}
function d(e) {
  const n = e && e.__v_raw;
  return n ? d(n) : e;
}
function zo(e) {
  return !E(e, "__v_skip") && Object.isExtensible(e) && Qt(e, "__v_skip", !0), e;
}
const k = (e) => N(e) ? Dt(e) : e, fn = (e) => N(e) ? Mt(e) : e;
function S(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Fs(e) {
  return Ct(e, !1);
}
function js(e) {
  return Ct(e, !0);
}
function Ct(e, n) {
  return S(e) ? e : new So(e, n);
}
class So {
  constructor(n, t) {
    this.dep = new bn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? n : d(n), this._value = t ? n : k(n), this.__v_isShallow = t;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(n) {
    const t = this._rawValue, o = this.__v_isShallow || w(n) || B(n);
    n = o ? n : d(n), U(n, t) && (this._rawValue = n, this._value = o ? n : k(n), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: n,
      oldValue: t
    }) : this.dep.trigger());
  }
}
function Bs(e) {
  e.dep && (process.env.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function bo(e) {
  return S(e) ? e.value : e;
}
const vo = {
  get: (e, n, t) => n === "__v_raw" ? e : bo(Reflect.get(e, n, t)),
  set: (e, n, t, o) => {
    const s = e[n];
    return S(s) && !S(t) ? (s.value = t, !0) : Reflect.set(e, n, t, o);
  }
};
function ko(e) {
  return ce(e) ? e : new Proxy(e, vo);
}
function Hs(e) {
  process.env.NODE_ENV !== "production" && !ze(e) && $("toRefs() expects a reactive object but received a plain one.");
  const n = D(e) ? new Array(e.length) : {};
  for (const t in e)
    n[t] = wo(e, t);
  return n;
}
class No {
  constructor(n, t, o) {
    this._object = n, this._key = t, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const n = this._object[this._key];
    return this._value = n === void 0 ? this._defaultValue : n;
  }
  set value(n) {
    this._object[this._key] = n;
  }
  get dep() {
    return ao(d(this._object), this._key);
  }
}
function wo(e, n, t) {
  const o = e[n];
  return S(o) ? o : new No(e, n, t);
}
class Oo {
  constructor(n, t, o) {
    this.fn = n, this.setter = t, this._value = void 0, this.dep = new bn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ee - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    m !== this)
      return at(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const n = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return ct(this), n && (n.version = this.dep.version), this._value;
  }
  set value(n) {
    this.setter ? this.setter(n) : process.env.NODE_ENV !== "production" && $("Write operation failed: computed value is readonly");
  }
}
function Ro(e, n, t = !1) {
  let o, s;
  z(e) ? o = e : (o = e.get, s = e.set);
  const r = new Oo(o, s, t);
  return process.env.NODE_ENV, r;
}
const xe = {}, Fe = /* @__PURE__ */ new WeakMap();
let Y;
function To(e, n = !1, t = Y) {
  if (t) {
    let o = Fe.get(t);
    o || Fe.set(t, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !n && $(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Po(e, n, t = x) {
  const { immediate: o, deep: s, once: r, scheduler: a, augmentJob: i, call: c } = t, l = (g) => {
    (t.onWarn || $)(
      "Invalid watch source: ",
      g,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (g) => s ? g : w(g) || s === !1 || s === 0 ? G(g, 1) : G(g);
  let u, f, h, _, R = !1, we = !1;
  if (S(e) ? (f = () => e.value, R = w(e)) : ce(e) ? (f = () => p(e), R = !0) : D(e) ? (we = !0, R = e.some((g) => ce(g) || w(g)), f = () => e.map((g) => {
    if (S(g))
      return g.value;
    if (ce(g))
      return p(g);
    if (z(g))
      return c ? c(g, 2) : g();
    process.env.NODE_ENV !== "production" && l(g);
  })) : z(e) ? n ? f = c ? () => c(e, 2) : e : f = () => {
    if (h) {
      ke();
      try {
        h();
      } finally {
        Ne();
      }
    }
    const g = Y;
    Y = u;
    try {
      return c ? c(e, 3, [_]) : e(_);
    } finally {
      Y = g;
    }
  } : (f = ie, process.env.NODE_ENV !== "production" && l(e)), n && s) {
    const g = f, V = s === !0 ? 1 / 0 : s;
    f = () => G(g(), V);
  }
  const ee = () => {
    u.stop();
  };
  if (r && n) {
    const g = n;
    n = (...V) => {
      g(...V), ee();
    };
  }
  let J = we ? new Array(e.length).fill(xe) : xe;
  const fe = (g) => {
    if (!(!(u.flags & 1) || !u.dirty && !g))
      if (n) {
        const V = u.run();
        if (s || R || (we ? V.some((qe, Oe) => U(qe, J[Oe])) : U(V, J))) {
          h && h();
          const qe = Y;
          Y = u;
          try {
            const Oe = [
              V,
              // pass undefined as the old value when it's changed for the first time
              J === xe ? void 0 : we && J[0] === xe ? [] : J,
              _
            ];
            c ? c(n, 3, Oe) : (
              // @ts-expect-error
              n(...Oe)
            ), J = V;
          } finally {
            Y = qe;
          }
        }
      } else
        u.run();
  };
  return i && i(fe), u = new oo(f), u.scheduler = a ? () => a(fe, !1) : fe, _ = (g) => To(g, !1, u), h = u.onStop = () => {
    const g = Fe.get(u);
    if (g) {
      if (c)
        c(g, 4);
      else
        for (const V of g) V();
      Fe.delete(u);
    }
  }, process.env.NODE_ENV !== "production" && (u.onTrack = t.onTrack, u.onTrigger = t.onTrigger), n ? o ? fe(!0) : J = u.run() : a ? a(fe.bind(null, !0), !0) : u.run(), ee.pause = u.pause.bind(u), ee.resume = u.resume.bind(u), ee.stop = ee, ee;
}
function G(e, n = 1 / 0, t) {
  if (n <= 0 || !N(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), n--, S(e))
    G(e.value, n, t);
  else if (D(e))
    for (let o = 0; o < e.length; o++)
      G(e[o], n, t);
  else if (Wt(e) || ue(e))
    e.forEach((o) => {
      G(o, n, t);
    });
  else if (qt(e)) {
    for (const o in e)
      G(e[o], n, t);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && G(e[o], n, t);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Q = [];
function xo(e) {
  Q.push(e);
}
function Io() {
  Q.pop();
}
let en = !1;
function M(e, ...n) {
  if (en) return;
  en = !0, ke();
  const t = Q.length ? Q[Q.length - 1].component : null, o = t && t.appContext.config.warnHandler, s = Vo();
  if (o)
    Je(
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
          ({ vnode: r }) => `at <${Lt(t, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...n];
    s.length && r.push(`
`, ...Lo(s)), console.warn(...r);
  }
  Ne(), en = !1;
}
function Vo() {
  let e = Q[Q.length - 1];
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
function Lo(e) {
  const n = [];
  return e.forEach((t, o) => {
    n.push(...o === 0 ? [] : [`
`], ...$o(t));
  }), n;
}
function $o({ vnode: e, recurseCount: n }) {
  const t = n > 0 ? `... (${n} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Lt(
    e.component,
    e.type,
    o
  )}`, r = ">" + t;
  return e.props ? [s, ...Fo(e.props), r] : [s + r];
}
function Fo(e) {
  const n = [], t = Object.keys(e);
  return t.slice(0, 3).forEach((o) => {
    n.push(..._t(o, e[o]));
  }), t.length > 3 && n.push(" ..."), n;
}
function _t(e, n, t) {
  return L(n) ? (n = JSON.stringify(n), t ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? t ? n : [`${e}=${n}`] : S(n) ? (n = _t(e, d(n.value), !0), t ? n : [`${e}=Ref<`, n, ">"]) : z(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = d(n), t ? n : [`${e}=`, n]);
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
function Je(e, n, t, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Rn(s, n, t);
  }
}
function On(e, n, t, o) {
  if (z(e)) {
    const s = Je(e, n, t, o);
    return s && Jt(s) && s.catch((r) => {
      Rn(r, n, t);
    }), s;
  }
  if (D(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(On(e[r], n, t, o));
    return s;
  } else process.env.NODE_ENV !== "production" && M(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Rn(e, n, t, o = !0) {
  const s = n ? n.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: a } = n && n.appContext.config || x;
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
      ke(), Je(r, null, 10, [
        e,
        c,
        l
      ]), Ne();
      return;
    }
  }
  jo(e, t, s, o, a);
}
function jo(e, n, t, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = wn[n];
    if (t && xo(t), M(`Unhandled error${r ? ` during execution of ${r}` : ""}`), t && Io(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const T = [];
let j = -1;
const le = [];
let H = null, oe = 0;
const Et = /* @__PURE__ */ Promise.resolve();
let je = null;
const Bo = 100;
function Ho(e) {
  const n = je || Et;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function Ko(e) {
  let n = j + 1, t = T.length;
  for (; n < t; ) {
    const o = n + t >>> 1, s = T[o], r = Se(s);
    r < e || r === e && s.flags & 2 ? n = o + 1 : t = o;
  }
  return n;
}
function Tn(e) {
  if (!(e.flags & 1)) {
    const n = Se(e), t = T[T.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= Se(t) ? T.push(e) : T.splice(Ko(n), 0, e), e.flags |= 1, At();
  }
}
function At() {
  je || (je = Et.then(St));
}
function zt(e) {
  D(e) ? le.push(...e) : H && e.id === -1 ? H.splice(oe + 1, 0, e) : e.flags & 1 || (le.push(e), e.flags |= 1), At();
}
function Go(e) {
  if (le.length) {
    const n = [...new Set(le)].sort(
      (t, o) => Se(t) - Se(o)
    );
    if (le.length = 0, H) {
      H.push(...n);
      return;
    }
    for (H = n, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), oe = 0; oe < H.length; oe++) {
      const t = H[oe];
      process.env.NODE_ENV !== "production" && bt(e, t) || (t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2);
    }
    H = null, oe = 0;
  }
}
const Se = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function St(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const n = process.env.NODE_ENV !== "production" ? (t) => bt(e, t) : ie;
  try {
    for (j = 0; j < T.length; j++) {
      const t = T[j];
      if (t && !(t.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && n(t))
          continue;
        t.flags & 4 && (t.flags &= -2), Je(
          t,
          t.i,
          t.i ? 15 : 14
        ), t.flags & 4 || (t.flags &= -2);
      }
    }
  } finally {
    for (; j < T.length; j++) {
      const t = T[j];
      t && (t.flags &= -2);
    }
    j = -1, T.length = 0, Go(e), je = null, (T.length || le.length) && St(e);
  }
}
function bt(e, n) {
  const t = e.get(n) || 0;
  if (t > Bo) {
    const o = n.i, s = o && Vt(o.type);
    return Rn(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(n, t + 1), !1;
}
const nn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (We().__VUE_HMR_RUNTIME__ = {
  createRecord: tn(Uo),
  rerender: tn(Wo),
  reload: tn(Jo)
});
const Be = /* @__PURE__ */ new Map();
function Uo(e, n) {
  return Be.has(e) ? !1 : (Be.set(e, {
    initialDef: He(n),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function He(e) {
  return $t(e) ? e.__vccOpts : e;
}
function Wo(e, n) {
  const t = Be.get(e);
  t && (t.initialDef.render = n, [...t.instances].forEach((o) => {
    n && (o.render = n, He(o.type).render = n), o.renderCache = [], o.update();
  }));
}
function Jo(e, n) {
  const t = Be.get(e);
  if (!t) return;
  n = He(n), Fn(t.initialDef, n);
  const o = [...t.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], a = He(r.type);
    let i = nn.get(a);
    i || (a !== t.initialDef && Fn(a, n), nn.set(a, i = /* @__PURE__ */ new Set())), i.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (i.add(r), r.ceReload(n.styles), i.delete(r)) : r.parent ? Tn(() => {
      r.parent.update(), i.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(a);
  }
  zt(() => {
    nn.clear();
  });
}
function Fn(e, n) {
  O(e, n);
  for (const t in e)
    t !== "__file" && !(t in n) && delete e[t];
}
function tn(e) {
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
let se, Ie = [];
function vt(e, n) {
  var t, o;
  se = e, se ? (se.enabled = !0, Ie.forEach(({ event: s, args: r }) => se.emit(s, ...r)), Ie = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (t = window.navigator) == null ? void 0 : t.userAgent) != null && o.includes("jsdom")) ? ((n.__VUE_DEVTOOLS_HOOK_REPLAY__ = n.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    vt(r, n);
  }), setTimeout(() => {
    se || (n.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ie = []);
  }, 3e3)) : Ie = [];
}
let X = null, Yo = null;
const qo = (e) => e.__isTeleport;
function kt(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, kt(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
We().requestIdleCallback;
We().cancelIdleCallback;
function Zo(e, n, t = P, o = !1) {
  if (t) {
    const s = t[e] || (t[e] = []), r = n.__weh || (n.__weh = (...a) => {
      ke();
      const i = It(t), c = On(n, t, e, a);
      return i(), Ne(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Zt(wn[e].replace(/ hook$/, ""));
    M(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Qo = (e) => (n, t = P) => {
  (!be || e === "sp") && Zo(e, (...o) => n(...o), t);
}, Ks = Qo("um"), Xo = Symbol.for("v-ndc"), pn = (e) => e ? Es(e) ? Ss(e) : pn(e.parent) : null, De = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ O(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Pe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Pe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Pe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Pe(e.refs) : e.refs,
    $parent: (e) => pn(e.parent),
    $root: (e) => pn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ns(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Tn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ho.bind(e.proxy)),
    $watch: (e) => fs.bind(e)
  })
), on = (e, n) => e !== x && !e.__isScriptSetup && E(e, n), es = {
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
        if (on(o, n))
          return a[n] = 1, o[n];
        if (s !== x && E(s, n))
          return a[n] = 2, s[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (l = e.propsOptions[0]) && E(l, n)
        )
          return a[n] = 3, r[n];
        if (t !== x && E(t, n))
          return a[n] = 4, t[n];
        a[n] = 0;
      }
    }
    const p = De[n];
    let u, f;
    if (p)
      return n === "$attrs" ? (A(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && n === "$slots" && A(e, "get", n), p(e);
    if (
      // css module (injected by vue-loader)
      (u = i.__cssModules) && (u = u[n])
    )
      return u;
    if (t !== x && E(t, n))
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
    return on(s, n) ? (s[n] = t, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && E(s, n) ? (M(`Cannot mutate <script setup> binding "${n}" from Options API.`), !1) : o !== x && E(o, n) ? (o[n] = t, !0) : E(e.props, n) ? (process.env.NODE_ENV !== "production" && M(`Attempting to mutate prop "${n}". Props are readonly.`), !1) : n[0] === "$" && n.slice(1) in e ? (process.env.NODE_ENV !== "production" && M(
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
    return !!t[a] || e !== x && E(e, a) || on(n, a) || (i = r[0]) && E(i, a) || E(o, a) || E(De, a) || E(s.config.globalProperties, a);
  },
  defineProperty(e, n, t) {
    return t.get != null ? e._.accessCache[n] = 0 : E(t, "value") && this.set(e, n, t.value, null), Reflect.defineProperty(e, n, t);
  }
};
process.env.NODE_ENV !== "production" && (es.ownKeys = (e) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Gs() {
  return Nt().slots;
}
function Us() {
  return Nt().attrs;
}
function Nt() {
  const e = xt();
  return process.env.NODE_ENV !== "production" && !e && M("useContext() called without active instance."), e.setupContext || (e.setupContext = zs(e));
}
function jn(e) {
  return D(e) ? e.reduce(
    (n, t) => (n[t] = null, n),
    {}
  ) : e;
}
function ns(e) {
  const n = e.type, { mixins: t, extends: o } = n, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: a }
  } = e.appContext, i = r.get(n);
  let c;
  return i ? c = i : !s.length && !t && !o ? c = n : (c = {}, s.length && s.forEach(
    (l) => Ke(c, l, a, !0)
  ), Ke(c, n, a)), N(n) && r.set(n, c), c;
}
function Ke(e, n, t, o = !1) {
  const { mixins: s, extends: r } = n;
  r && Ke(e, r, t, !0), s && s.forEach(
    (a) => Ke(e, a, t, !0)
  );
  for (const a in n)
    if (o && a === "expose")
      process.env.NODE_ENV !== "production" && M(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const i = ts[a] || t && t[a];
      e[a] = i ? i(e[a], n[a]) : n[a];
    }
  return e;
}
const ts = {
  data: Bn,
  props: Kn,
  emits: Kn,
  // objects
  methods: de,
  computed: de,
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
  components: de,
  directives: de,
  // watch
  watch: ss,
  // provide / inject
  provide: Bn,
  inject: os
};
function Bn(e, n) {
  return n ? e ? function() {
    return O(
      z(e) ? e.call(this, this) : e,
      z(n) ? n.call(this, this) : n
    );
  } : n : e;
}
function os(e, n) {
  return de(Hn(e), Hn(n));
}
function Hn(e) {
  if (D(e)) {
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
function de(e, n) {
  return e ? O(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function Kn(e, n) {
  return e ? D(e) && D(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : O(
    /* @__PURE__ */ Object.create(null),
    jn(e),
    jn(n ?? {})
  ) : n;
}
function ss(e, n) {
  if (!e) return n;
  if (!n) return e;
  const t = O(/* @__PURE__ */ Object.create(null), e);
  for (const o in n)
    t[o] = b(e[o], n[o]);
  return t;
}
let rs = null;
function Ws(e, n) {
  if (!P)
    process.env.NODE_ENV !== "production" && M("provide() can only be used inside setup().");
  else {
    let t = P.provides;
    const o = P.parent && P.parent.provides;
    o === t && (t = P.provides = Object.create(o)), t[e] = n;
  }
}
function as(e, n, t = !1) {
  const o = P || X;
  if (o || rs) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return t && z(n) ? n.call(o && o.proxy) : n;
    process.env.NODE_ENV !== "production" && M(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
const is = {}, wt = (e) => Object.getPrototypeOf(e) === is, us = ds, cs = Symbol.for("v-scx"), ls = () => {
  {
    const e = as(cs);
    return e || process.env.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Js(e, n) {
  return Pn(e, null, n);
}
function Ys(e, n, t) {
  return process.env.NODE_ENV !== "production" && !z(n) && M(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Pn(e, n, t);
}
function Pn(e, n, t = x) {
  const { immediate: o, deep: s, flush: r, once: a } = t;
  process.env.NODE_ENV !== "production" && !n && (o !== void 0 && M(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && M(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), a !== void 0 && M(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const i = O({}, t);
  process.env.NODE_ENV !== "production" && (i.onWarn = M);
  const c = n && o || !n && r !== "post";
  let l;
  if (be) {
    if (r === "sync") {
      const h = ls();
      l = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!c) {
      const h = () => {
      };
      return h.stop = ie, h.resume = ie, h.pause = ie, h;
    }
  }
  const p = P;
  i.call = (h, _, R) => On(h, p, _, R);
  let u = !1;
  r === "post" ? i.scheduler = (h) => {
    us(h, p && p.suspense);
  } : r !== "sync" && (u = !0, i.scheduler = (h, _) => {
    _ ? h() : Tn(h);
  }), i.augmentJob = (h) => {
    n && (h.flags |= 4), u && (h.flags |= 2, p && (h.id = p.uid, h.i = p));
  };
  const f = Po(e, n, i);
  return be && (l ? l.push(f) : c && f()), f;
}
function fs(e, n, t) {
  const o = this.proxy, s = L(e) ? e.includes(".") ? ps(o, e) : () => o[e] : e.bind(o, o);
  let r;
  z(n) ? r = n : (r = n.handler, t = n);
  const a = It(this), i = Pn(s, r.bind(o), t);
  return a(), i;
}
function ps(e, n) {
  const t = n.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < t.length && o; s++)
      o = o[t[s]];
    return o;
  };
}
const hs = (e) => e.__isSuspense;
function ds(e, n) {
  n && n.pendingBranch ? D(e) ? n.effects.push(...e) : n.effects.push(e) : zt(e);
}
const Ot = Symbol.for("v-fgt"), gs = Symbol.for("v-txt"), ys = Symbol.for("v-cmt");
let re = null;
function hn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const ms = (...e) => Tt(
  ...e
), Rt = ({ key: e }) => e ?? null, Ve = ({
  ref: e,
  ref_key: n,
  ref_for: t
}) => (typeof e == "number" && (e = "" + e), e != null ? L(e) || S(e) || z(e) ? { i: X, r: e, k: n, f: !!t } : e : null);
function Ds(e, n = null, t = null, o = 0, s = null, r = e === Ot ? 0 : 1, a = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && Rt(n),
    ref: n && Ve(n),
    scopeId: Yo,
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
    ctx: X
  };
  return i ? (xn(c, t), r & 128 && e.normalize(c)) : t && (c.shapeFlag |= L(t) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && M("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !a && // has current parent block
  re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && re.push(c), c;
}
const ge = process.env.NODE_ENV !== "production" ? ms : Tt;
function Tt(e, n = null, t = null, o = 0, s = null, r = !1) {
  if ((!e || e === Xo) && (process.env.NODE_ENV !== "production" && !e && M(`Invalid vnode type when creating vnode: ${e}.`), e = ys), hn(e)) {
    const i = Ge(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return t && xn(i, t), !r && re && (i.shapeFlag & 6 ? re[re.indexOf(e)] = i : re.push(i)), i.patchFlag = -2, i;
  }
  if ($t(e) && (e = e.__vccOpts), n) {
    n = Ms(n);
    let { class: i, style: c } = n;
    i && !L(i) && (n.class = En(i)), N(c) && (ze(c) && !D(c) && (c = O({}, c)), n.style = _n(c));
  }
  const a = L(e) ? 1 : hs(e) ? 128 : qo(e) ? 64 : N(e) ? 4 : z(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && ze(e) && (e = d(e), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ds(
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
function Ms(e) {
  return e ? ze(e) || wt(e) ? O({}, e) : e : null;
}
function Ge(e, n, t = !1, o = !1) {
  const { props: s, ref: r, patchFlag: a, children: i, transition: c } = e, l = n ? _s(s || {}, n) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Rt(l),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && r ? D(r) ? r.concat(Ve(n)) : [r, Ve(n)] : Ve(n)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && a === -1 && D(i) ? i.map(Pt) : i,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: n && e.type !== Ot ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && Ge(e.ssContent),
    ssFallback: e.ssFallback && Ge(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && o && kt(
    p,
    c.clone(p)
  ), p;
}
function Pt(e) {
  const n = Ge(e);
  return D(e.children) && (n.children = e.children.map(Pt)), n;
}
function Cs(e = " ", n = 0) {
  return ge(gs, null, e, n);
}
function xn(e, n) {
  let t = 0;
  const { shapeFlag: o } = e;
  if (n == null)
    n = null;
  else if (D(n))
    t = 16;
  else if (typeof n == "object")
    if (o & 65) {
      const s = n.default;
      s && (s._c && (s._d = !1), xn(e, s()), s._c && (s._d = !0));
      return;
    } else
      t = 32, !n._ && !wt(n) && (n._ctx = X);
  else z(n) ? (n = { default: n, _ctx: X }, t = 32) : (n = String(n), o & 64 ? (t = 16, n = [Cs(n)]) : t = 8);
  e.children = n, e.shapeFlag |= t;
}
function _s(...e) {
  const n = {};
  for (let t = 0; t < e.length; t++) {
    const o = e[t];
    for (const s in o)
      if (s === "class")
        n.class !== o.class && (n.class = En([n.class, o.class]));
      else if (s === "style")
        n.style = _n([n.style, o.style]);
      else if (Gt(s)) {
        const r = n[s], a = o[s];
        a && r !== a && !(D(r) && r.includes(a)) && (n[s] = r ? [].concat(r, a) : a);
      } else s !== "" && (n[s] = o[s]);
  }
  return n;
}
let P = null;
const xt = () => P || X;
let dn;
{
  const e = We(), n = (t, o) => {
    let s;
    return (s = e[t]) || (s = e[t] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((a) => a(r)) : s[0](r);
    };
  };
  dn = n(
    "__VUE_INSTANCE_SETTERS__",
    (t) => P = t
  ), n(
    "__VUE_SSR_SETTERS__",
    (t) => be = t
  );
}
const It = (e) => {
  const n = P;
  return dn(e), e.scope.on(), () => {
    e.scope.off(), dn(n);
  };
};
function Es(e) {
  return e.vnode.shapeFlag & 4;
}
let be = !1;
const Gn = process.env.NODE_ENV !== "production" ? {
  get(e, n) {
    return A(e, "get", ""), e[n];
  },
  set() {
    return M("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return M("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, n) {
    return A(e, "get", ""), e[n];
  }
};
function As(e) {
  return new Proxy(e.slots, {
    get(n, t) {
      return A(e, "get", "$slots"), n[t];
    }
  });
}
function zs(e) {
  const n = (t) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && M("expose() should be called only once per setup()."), t != null)) {
      let o = typeof t;
      o === "object" && (D(t) ? o = "array" : S(t) && (o = "ref")), o !== "object" && M(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = t || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let t, o;
    return Object.freeze({
      get attrs() {
        return t || (t = new Proxy(e.attrs, Gn));
      },
      get slots() {
        return o || (o = As(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: n
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Gn),
      slots: e.slots,
      emit: e.emit,
      expose: n
    };
}
function Ss(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ko(zo(e.exposed)), {
    get(n, t) {
      if (t in n)
        return n[t];
      if (t in De)
        return De[t](e);
    },
    has(n, t) {
      return t in n || t in De;
    }
  })) : e.proxy;
}
const bs = /(?:^|[-_])(\w)/g, vs = (e) => e.replace(bs, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function Vt(e, n = !0) {
  return z(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Lt(e, n, t = !1) {
  let o = Vt(n);
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
  return o ? vs(o) : t ? "App" : "Anonymous";
}
function $t(e) {
  return z(e) && "__vccOpts" in e;
}
const qs = (e, n) => {
  const t = Ro(e, n, be);
  if (process.env.NODE_ENV !== "production") {
    const o = xt();
    o && o.appContext.config.warnRecursiveComputed && (t._warnRecursive = !0);
  }
  return t;
};
function Zs(e, n, t) {
  const o = arguments.length;
  return o === 2 ? N(n) && !D(n) ? hn(n) ? ge(e, null, [n]) : ge(e, n) : ge(e, null, n) : (o > 3 ? t = Array.prototype.slice.call(arguments, 2) : o === 3 && hn(t) && (t = [t]), ge(e, n, t));
}
function ks() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, n = { style: "color:#1677ff" }, t = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(u) {
      return N(u) ? u.__isVue ? ["div", e, "VueInstance"] : S(u) ? [
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
        ["span", e, w(u) ? "ShallowReactive" : "Reactive"],
        "<",
        i(u),
        `>${B(u) ? " (readonly)" : ""}`
      ] : B(u) ? [
        "div",
        {},
        ["span", e, w(u) ? "ShallowReadonly" : "Readonly"],
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
    u.type.props && u.props && f.push(a("props", d(u.props))), u.setupState !== x && f.push(a("setup", u.setupState)), u.data !== x && f.push(a("data", d(u.data)));
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
    return typeof u == "number" ? ["span", n, u] : typeof u == "string" ? ["span", t, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : N(u) ? ["object", { object: f ? d(u) : u }] : ["span", t, String(u)];
  }
  function c(u, f) {
    const h = u.type;
    if (z(h))
      return;
    const _ = {};
    for (const R in u.ctx)
      l(h, R, f) && (_[R] = u.ctx[R]);
    return _;
  }
  function l(u, f, h) {
    const _ = u[h];
    if (D(_) && _.includes(f) || N(_) && f in _ || u.extends && l(u.extends, f, h) || u.mixins && u.mixins.some((R) => l(R, f, h)))
      return !0;
  }
  function p(u) {
    return w(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
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
function Ns() {
  ks();
}
process.env.NODE_ENV !== "production" && Ns();
function sn(e) {
  return S(e) ? e.value : e;
}
function ws(e, n = "=", t = "&") {
  return Le(
    e,
    (o, s) => `${s}${n}${encodeURIComponent(String(o).trim())}`
  ).sort().join(t);
}
function W() {
  return typeof window < "u";
}
function Ye(e) {
  return e == null;
}
function he(e) {
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
        return Array.isArray(e) ? e.length > 0 : Object.values(e).some((n) => !Ye(n));
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
function gn(e) {
  return typeof e == "string";
}
function Os(e, n) {
  return Math.floor(Math.random() * (n - e + 1) + e);
}
function yn(e) {
  return Array.isArray(e) ? e : [e];
}
function Ft(e) {
  return W() && e === window;
}
function ae(e) {
  if (W())
    return Ft(e) ? document.body : gn(e) ? document.querySelector(e) ?? void 0 : e;
}
function Un(e) {
  return Ft(e) ? e : ae(e);
}
function Rs(e) {
  var n;
  return !!((n = ae(e)) != null && n.closest("html"));
}
class Wn {
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
      Rs(this.elementControl) ? ((t = this.listener) == null || t.call(this.element, n, this.detail), Mn(this.options) && ((o = this.options) != null && o.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    y(this, "activity", !1);
    y(this, "activityItems", []);
    this.listener = o, this.options = s, this.detail = r, this.element = Un(n), this.elementControl = ae(n), this.type = yn(t);
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
    const t = Un(n);
    return this.elementControlEdit || (this.elementControl = ae(n)), this.element = t, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(n) {
    return this.elementControl = ae(n), this.elementControlEdit = !Ye(this.elementControl), this.elementControlEdit || (this.elementControl = ae(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(n) {
    return this.type = yn(n), this.reset(), this;
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
const Jn = "ui-loading", Ce = class Ce {
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
    new Wn(window, Jn, n).setElementControl(t).start();
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
y(Ce, "value", 0), y(Ce, "event"), W() && (Ce.event = new Wn(window, Jn));
let q = Ce;
function Ts(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ps(e, n) {
  return Ye(e) ? !1 : Array.isArray(n) ? n.includes(e) : e === n;
}
let Yn = "ui-storage";
class xs {
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
    if (o in rn)
      return rn[o];
    const s = this.getValue();
    s && (this.value = s.value, this.age = s.age), rn[o] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(n) {
    Yn = n;
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
    return this.value = Dn(n), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? (t = this.getMethod()) == null || t.removeItem(this.getIndex()) : (o = this.getMethod()) == null || o.setItem(this.getIndex(), JSON.stringify({
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
    return Ye(n) || this.age && this.age + n * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (W())
      return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${Yn}${this.name}`;
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
const rn = {}, Is = /* @__PURE__ */ JSON.parse('[{"country":"US","countryAlternative":["EN"],"language":"en","languageAlternative":["us"],"firstDay":"Su","zone":"America/New_York","phoneCode":"1","phoneMask":["+1-***-***-****"]},{"country":"GB","countryAlternative":["UK"],"language":"en","firstDay":"Mo","zone":"Europe/London","phoneCode":"44","phoneMask":["+44-**-****-****"]},{"country":"AF","language":"fa","firstDay":"Sa","zone":"Asia/Kabul","phoneCode":"93","phoneMask":["+93-**-***-****"]},{"country":"AL","language":"sq","firstDay":"Mo","zone":"Europe/Tirane","phoneCode":"355","phoneMask":["+355-***-***-***"]},{"country":"DZ","language":"ar","firstDay":"Sa","zone":"Africa/Algiers","phoneCode":"213","phoneMask":["+213-**-***-****"]},{"country":"AS","language":"en","firstDay":null,"zone":"Pacific/Pago_Pago","phoneCode":"1-684","phoneMask":["+1-684-***-****"]},{"country":"AD","language":"ca","firstDay":"Mo","zone":"Europe/Andorra","phoneCode":"376","phoneMask":["+376-***-***"]},{"country":"AO","language":"pt","firstDay":null,"zone":"Africa/Lagos","phoneCode":"244","phoneMask":["+244-***-***-***"]},{"country":"AI","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-264","phoneMask":["+1-264-***-****"]},{"country":"AQ","language":"en","firstDay":null,"zone":"Antarctica/Troll","phoneCode":"672","phoneMask":["+672-1-**-***"]},{"country":"AG","language":"en","firstDay":null,"zone":"America/Antigua","phoneCode":"1-268","phoneMask":["+1-268-***-****"]},{"country":"AR","language":"es","firstDay":"Su","zone":"America/Argentina/Buenos_Aires","phoneCode":"54","phoneMask":["+54-***-***-****"]},{"country":"AM","language":"hy","firstDay":"Mo","zone":"Asia/Yerevan","phoneCode":"374","phoneMask":["+374-**-***-***"]},{"country":"AW","language":"nl","firstDay":null,"zone":"America/Curacao","phoneCode":"297","phoneMask":["+297-***-****"]},{"country":"AU","language":"en","firstDay":"Mo","zone":"Australia/Sydney","phoneCode":"61","phoneMask":["+61-*-****-****"]},{"country":"AT","language":"de","firstDay":"Mo","zone":"Europe/Vienna","phoneCode":"43","phoneMask":["+43-***-***-****","+43-***-***-*****"]},{"country":"AZ","language":"az","firstDay":"Mo","zone":"Asia/Baku","phoneCode":"994","phoneMask":"+994-**-***-**-**"},{"country":"BS","language":"en","firstDay":null,"zone":"America/Nassau","phoneCode":"1-242","phoneMask":"+1-242-***-****"},{"country":"BH","language":"ar","firstDay":"Sa","zone":"Asia/Bahrain","phoneCode":"973","phoneMask":"+973-****-****"},{"country":"BD","language":"bn","firstDay":null,"zone":"Asia/Dhaka","phoneCode":"880","phoneMask":"+880-**-***-***"},{"country":"BB","language":"en","firstDay":null,"zone":"America/Barbados","phoneCode":"1-246","phoneMask":"+1-246-***-****"},{"country":"BY","language":"be","firstDay":"Mo","zone":"Europe/Minsk","phoneCode":"375","phoneMask":"+375-**-***-**-**"},{"country":"BE","language":"nl","firstDay":"Mo","zone":"Europe/Brussels","phoneCode":"32","phoneMask":"+32-***-***-***"},{"country":"BZ","language":"en","firstDay":"Su","zone":"America/Belize","phoneCode":"501","phoneMask":"+501-***-****"},{"country":"BJ","language":"fr","firstDay":null,"zone":"Africa/Lagos","phoneCode":"229","phoneMask":"+229-**-**-****"},{"country":"BM","language":"en","firstDay":null,"zone":"Atlantic/Bermuda","phoneCode":"1-441","phoneMask":"+1-441-***-****"},{"country":"BT","language":"dz","firstDay":null,"zone":"Asia/Thimphu","phoneCode":"975","phoneMask":["+975-*-***-***","+975-17-***-***"]},{"country":"BO","language":"es","firstDay":"Su","zone":"America/La_Paz","phoneCode":"591","phoneMask":"+591-*-***-****"},{"country":"BA","language":"bs","firstDay":null,"zone":"Europe/Belgrade","phoneCode":"387","phoneMask":["+387-**-****","+387-**-*****"]},{"country":"BW","language":"en","firstDay":null,"zone":"Africa/Maputo","phoneCode":"267","phoneMask":"+267-**-***-***"},{"country":"BR","language":"pt","firstDay":"Su","zone":"America/Sao_Paulo","phoneCode":"55","phoneMask":["+55-**-****-****","+55-**-*****-****"]},{"country":"IO","language":"en","firstDay":null,"zone":"Indian/Chagos","phoneCode":"246","phoneMask":"+246-***-****"},{"country":"VG","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-284","phoneMask":"+1-284-***-****"},{"country":"BN","language":"ms","firstDay":"Mo","zone":"Asia/Brunei","phoneCode":"673","phoneMask":"+673-***-****"},{"country":"BG","language":"bg","firstDay":"Mo","zone":"Europe/Sofia","phoneCode":"359","phoneMask":"+359-***-***-***"},{"country":"BF","language":"fr","firstDay":null,"zone":"Africa/Abidjan","phoneCode":"226","phoneMask":"+226-**-**-****"},{"country":"BI","language":"fr","firstDay":null,"zone":"Africa/Maputo","phoneCode":"257","phoneMask":"+257-**-**-****"},{"country":"KH","language":"km","firstDay":null,"zone":"Asia/Phnom_Penh","phoneCode":"855","phoneMask":"+855-**-***-***"},{"country":"CM","phoneCode":"237","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":"+237-****-****"},{"country":"CA","phoneCode":"1","zone":"America/Toronto","language":"en","firstDay":"Su","phoneMask":"+1-***-***-****"},{"country":"CV","phoneCode":"238","zone":"Atlantic/Cape_Verde","language":"pt","firstDay":null,"phoneMask":"+238-***-**-**"},{"country":"KY","phoneCode":"1-345","zone":"America/Cayman","language":"en","firstDay":null,"phoneMask":"+1-345-***-****"},{"country":"CF","phoneCode":"236","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+236-**-**-****"},{"country":"TD","phoneCode":"235","zone":"Africa/Ndjamena","language":"fr","firstDay":null,"phoneMask":"+235-**-**-**-**"},{"country":"CL","phoneCode":"56","zone":"America/Santiago","language":"es","firstDay":"Su","phoneMask":"+56-*-****-****"},{"country":"CN","phoneCode":"86","zone":"Asia/Shanghai","language":"zh","firstDay":"Su","phoneMask":["+86-***-****-***","+86-***-****-****","+86-**-*****-*****"]},{"country":"CX","phoneCode":"61","zone":"Indian/Christmas","language":"en","firstDay":null},{"country":"CC","phoneCode":"61","zone":"Indian/Cocos","language":"ms","firstDay":null},{"country":"CO","phoneCode":"57","zone":"America/Bogota","language":"es","firstDay":"Su","phoneMask":"+57-***-***-****"},{"country":"KM","phoneCode":"269","zone":"Indian/Comoro","language":"ar","firstDay":null,"phoneMask":"+269-**-*****"},{"country":"CK","phoneCode":"682","zone":"Pacific/Rarotonga","language":"en","firstDay":null,"phoneMask":"+682-**-***"},{"country":"CR","phoneCode":"506","zone":"America/Costa_Rica","language":"es","firstDay":"Su","phoneMask":"+506-****-****"},{"country":"HR","phoneCode":"385","zone":"Europe/Belgrade","language":"hr","firstDay":"Mo","phoneMask":"+385-**-***-***"},{"country":"CU","phoneCode":"53","zone":"America/Havana","language":"es","firstDay":null,"phoneMask":"+53-*-***-****"},{"country":"CW","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+599-***-****"},{"country":"CY","phoneCode":"357","zone":"Asia/Nicosia","language":"el","firstDay":null,"phoneMask":"+357-**-***-***"},{"country":"CZ","phoneCode":"420","zone":"Europe/Prague","language":"cs","languageAlternative":["cz"],"firstDay":"Mo","phoneMask":"+420-***-***-***"},{"country":"CD","phoneCode":"243","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+243-***-***-***"},{"country":"DK","phoneCode":"45","zone":"Europe/Copenhagen","language":"da","firstDay":"Mo","phoneMask":"+45-**-**-**-**"},{"country":"DJ","phoneCode":"253","zone":"Africa/Djibouti","language":"fr","firstDay":null,"phoneMask":"+253-**-**-**-**"},{"country":"DM","phoneCode":"1-767","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-767-***-****"},{"country":"DO","phoneCode":"1-809","zone":"North America","language":"America/Santo_Domingo","firstDay":"Su","phoneMask":["+1-809-***-****","+1-829-***-****","+1-849-***-****"]},{"country":"TL","phoneCode":"670","zone":"Asia/Dili","language":"tet","firstDay":null,"phoneMask":["+670-***-****","+670-77-*-*****","+670-78-*-*****"]},{"country":"EC","phoneCode":"593","zone":"America/Guayaquil","language":"es","firstDay":"Su","phoneMask":["+593-*-***-****","+593-**-***-****"]},{"country":"EG","phoneCode":"20","zone":"Africa/Cairo","language":"ar","firstDay":"Sa","phoneMask":"+20-***-***-****"},{"country":"SV","phoneCode":"503","zone":"America/El_Salvador","language":"es","firstDay":"Su","phoneMask":"+503-**-**-****"},{"country":"GQ","phoneCode":"240","zone":"Africa/Lagos","language":"es","firstDay":null,"phoneMask":"+240-**-***-****"},{"country":"ER","phoneCode":"291","zone":"Africa/Asmara","language":"aa","firstDay":null,"phoneMask":"+291-*-***-***"},{"country":"EE","phoneCode":"372","zone":"Europe/Tallinn","language":"et","firstDay":"Mo","phoneMask":["+372-***-****","+372-****-****"]},{"country":"ET","phoneCode":"251","zone":"Africa/Addis_Ababa","language":"am","firstDay":null,"phoneMask":"+251-**-***-****"},{"country":"FK","phoneCode":"500","zone":"Atlantic/Stanley","language":"en","firstDay":null,"phoneMask":"+500-*****"},{"country":"FO","phoneCode":"298","zone":"Atlantic/Faroe","language":"fo","firstDay":null,"phoneMask":"+298-***-***"},{"country":"FJ","phoneCode":"679","zone":"Pacific/Fiji","language":"en","firstDay":null,"phoneMask":"+679-**-*****"},{"country":"FI","phoneCode":"358","zone":"Europe/Helsinki","language":"fi","firstDay":"Mo","phoneMask":["+358-***-***-**-*","+358-***-***-**-**"]},{"country":"FR","phoneCode":"33","zone":"Europe/Paris","language":"fr","firstDay":"Mo","phoneMask":["+33-***-***-***","+262-*****-****","+508-**-****","+590-***-***-***"]},{"country":"PF","phoneCode":"689","zone":"Pacific/Tahiti","language":"fr","firstDay":null,"phoneMask":"+689-**-**-**"},{"country":"GA","phoneCode":"241","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+241-*-**-**-**"},{"country":"GM","phoneCode":"220","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+220-***-**-**"},{"country":"GE","phoneCode":"995","zone":"Asia/Tbilisi","language":"ka","firstDay":"Mo","phoneMask":"+995-***-***-***"},{"country":"DE","phoneCode":"49","zone":"Europe/Berlin","language":"de","firstDay":"Mo","phoneMask":["+49-***-***","+49-***-***-****","+49-****-***-****"]},{"country":"GH","phoneCode":"233","zone":"Africa/Accra","language":"en","firstDay":null,"phoneMask":"+233-***-***-***"},{"country":"GI","phoneCode":"350","zone":"Europe/Gibraltar","language":"en","firstDay":null,"phoneMask":"+350-***-*****"},{"country":"GR","phoneCode":"30","zone":"Europe/Athens","language":"el","firstDay":"Mo","phoneMask":"+30-***-***-****"},{"country":"GL","phoneCode":"299","zone":"America/Godthab","language":"kl","firstDay":null,"phoneMask":"+299-**-**-**"},{"country":"GD","phoneCode":"1-473","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-473-***-****"},{"country":"GU","phoneCode":"1-671","zone":"Pacific/Guam","language":"en","firstDay":null,"phoneMask":"+1-671-***-****"},{"country":"GT","phoneCode":"502","zone":"America/Guatemala","language":"es","firstDay":"Su","phoneMask":"+502-*-***-****"},{"country":"GG","phoneCode":"44-1481","zone":"Europe/London","language":"en","firstDay":null},{"country":"GN","phoneCode":"224","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+224-**-***-***"},{"country":"GW","phoneCode":"245","zone":"Africa/Bissau","language":"pt","firstDay":null,"phoneMask":"+245-*-******"},{"country":"GY","phoneCode":"592","zone":"America/Guyana","language":"en","firstDay":null,"phoneMask":"+592-***-****"},{"country":"HT","phoneCode":"509","zone":"America/Port-au-Prince","language":"ht","firstDay":null,"phoneMask":"+509-**-**-****"},{"country":"HN","phoneCode":"504","zone":"America/Tegucigalpa","language":"es","firstDay":"Su","phoneMask":"+504-****-****"},{"country":"HK","phoneCode":"852","zone":"Asia/Hong_Kong","language":"zh","firstDay":"Su","phoneMask":"+852-****-****"},{"country":"HU","phoneCode":"36","zone":"Europe/Budapest","language":"hu","firstDay":"Mo","phoneMask":"+36-***-***-***","nameFormat":"lf"},{"country":"IS","phoneCode":"354","zone":"Atlantic/Reykjavik","language":"is","firstDay":"Mo","phoneMask":"+354-***-****"},{"country":"IN","phoneCode":"91","zone":"Asia/Kolkata","language":"en","firstDay":"Mo","phoneMask":"+91-****-***-***"},{"country":"ID","phoneCode":"62","zone":"Asia/Jakarta","language":"id","firstDay":"Mo","phoneMask":["+62-**-***-**","+62-**-***-***","+62-**-***-****","+62-8-**-***-***","+62-8-**-***-****","+62-8-**-***-**-***"]},{"country":"IR","phoneCode":"98","zone":"Asia/Tehran","language":"fa","firstDay":"Sa","phoneMask":"+98-***-***-****"},{"country":"IQ","phoneCode":"964","zone":"Asia/Baghdad","language":"ar","firstDay":"Sa","phoneMask":"+964-***-***-****"},{"country":"IE","firstDay":"Mo","language":"en","phoneCode":"353","phoneMask":"+353-***-***-***","zone":"Europe/Dublin"},{"country":"IM","firstDay":null,"language":"Pound","phoneCode":"44-1624","zone":"Isle of Man"},{"country":"IL","firstDay":"Su","language":"he","languageAlternative":["il"],"phoneCode":"972","phoneMask":["+972-*-***-****","+972-5-*-***-****"],"zone":"Asia/Jerusalem"},{"country":"IT","firstDay":"Mo","language":"it","phoneCode":"39","phoneMask":"+39-***-****-***","zone":"Europe/Rome"},{"country":"CI","phoneCode":"225","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+225-**-***-***"},{"country":"JM","phoneCode":"1-876","zone":"America/Jamaica","language":"en","firstDay":"Su","phoneMask":"+1-876-***-****"},{"country":"JP","phoneCode":"81","zone":"Asia/Tokyo","language":"ja","firstDay":"Su","phoneMask":["+81-***-***-***","+81-**-****-****"],"nameFormat":"lf"},{"country":"JE","phoneCode":"44-1534","zone":"Europe/London","language":"en","firstDay":null},{"country":"JO","phoneCode":"962","zone":"Asia/Amman","language":"ar","firstDay":"Sa","phoneMask":"+962-*-****-****"},{"country":"KZ","phoneCode":"7","zone":"Asia/Almaty","language":"kk","firstDay":"Mo","phoneMask":["+7-6-**-***-**-**","+7-7-**-***-**-**"],"nameFormat":"lf"},{"country":"KE","phoneCode":"254","zone":"Africa/Nairobi","language":"en","firstDay":"Su","phoneMask":"+254-***-******"},{"country":"KI","phoneCode":"686","zone":"Pacific/Tarawa","language":"en","firstDay":null,"phoneMask":"+686-**-***"},{"country":"XK","phoneCode":"383","zone":"Europe/Belgrade","language":"sq","firstDay":"Mo"},{"country":"KW","phoneCode":"965","zone":"Asia/Kuwait","language":"ar","firstDay":"Sa","phoneMask":"+965-****-****"},{"country":"KG","phoneCode":"996","zone":"Asia/Bishkek","language":"ky","firstDay":"Mo","phoneMask":"+996-***-***-***"},{"country":"LA","phoneCode":"856","zone":"Asia/Vientiane","language":"lo","firstDay":null,"phoneMask":["+856-**-***-***","+856-20-**-***-***"]},{"country":"LV","phoneCode":"371","zone":"Europe/Riga","language":"lv","firstDay":"Mo","phoneMask":"+371-**-***-***"},{"country":"LB","phoneCode":"961","zone":"Asia/Beirut","language":"ar","firstDay":"Mo","phoneMask":["+961-*-***-***","+961-**-***-***"]},{"country":"LS","phoneCode":"266","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+266-*-***-****"},{"country":"LR","phoneCode":"231","zone":"Africa/Monrovia","language":"en","firstDay":null,"phoneMask":"+231-**-***-***"},{"country":"LY","phoneCode":"218","zone":"Africa/Tripoli","language":"ar","firstDay":"Sa","phoneMask":["+218-**-***-***","+218-21-***-****"]},{"country":"LI","phoneCode":"423","zone":"Europe/Zurich","language":"de","firstDay":null,"phoneMask":"+423-***-***-****"},{"country":"LT","phoneCode":"370","zone":"Europe/Vilnius","language":"lt","firstDay":"Mo","phoneMask":"+370-***-**-***"},{"country":"LU","phoneCode":"352","zone":"Europe/Luxembourg","language":"lb","firstDay":"Mo","phoneMask":"+352-***-***-***"},{"country":"MO","phoneCode":"853","zone":"Asia/Macau","language":"zh","firstDay":null,"phoneMask":"+853-****-****"},{"country":"MK","phoneCode":"389","zone":"Europe/Belgrade","language":"mk","firstDay":"Mo","phoneMask":"+389-**-***-***"},{"country":"MG","phoneCode":"261","zone":"Indian/Antananarivo","language":"fr","firstDay":null,"phoneMask":"+261-**-**-*****"},{"country":"MW","phoneCode":"265","zone":"Africa/Maputo","language":"ny","firstDay":null,"phoneMask":["+265-*-****-****","+265-1-***-***"]},{"country":"MY","phoneCode":"60","zone":"Asia/Kuala_Lumpur","language":"ms","firstDay":"Mo","phoneMask":["+60-*-***-***","+60-**-***-***","+60-**-***-****","+60-***-***-***"]},{"country":"MV","phoneCode":"960","zone":"Indian/Maldives","language":"dv","firstDay":null,"phoneMask":"+960-***-****"},{"country":"ML","phoneCode":"223","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+223-**-**-****"},{"country":"MT","phoneCode":"356","zone":"Europe/Malta","language":"mt","firstDay":null,"phoneMask":"+356-****-****"},{"country":"MH","phoneCode":"692","zone":"Pacific/Majuro","language":"mh","firstDay":null,"phoneMask":"+692-***-****"},{"country":"MR","phoneCode":"222","zone":"Africa/Abidjan","language":"ar","firstDay":null,"phoneMask":"+222-**-**-****"},{"country":"MU","phoneCode":"230","zone":"Indian/Mauritius","language":"en","firstDay":null,"phoneMask":"+230-***-****"},{"country":"YT","phoneCode":"262","zone":"Indian/Mayotte","language":"fr","firstDay":null},{"country":"MX","phoneCode":"52","zone":"America/Mexico_City","language":"es","firstDay":"Su","phoneMask":["+52-**-**-****","+52-***-***-****"]},{"country":"FM","phoneCode":"691","zone":"Pacific/Pohnpei","language":"en","firstDay":null,"phoneMask":"+691-***-****"},{"country":"MD","phoneCode":"373","zone":"Europe/Chisinau","language":"ro","firstDay":null,"phoneMask":"+373-****-****"},{"country":"MC","phoneCode":"377","zone":"Europe/Monaco","language":"fr","firstDay":"Mo","phoneMask":["+377-**-***-***","+377-***-***-***"]},{"country":"MN","phoneCode":"976","zone":"Asia/Ulaanbaatar","language":"mn","firstDay":"Mo","phoneMask":"+976-**-**-****"},{"country":"ME","phoneCode":"382","zone":"Europe/Belgrade","language":"sr","firstDay":null,"phoneMask":"+382-**-***-***"},{"country":"MS","phoneCode":"1-664","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-664-***-****"},{"country":"MA","phoneCode":"212","zone":"Africa/Casablanca","language":"ar","firstDay":"Mo","phoneMask":"+212-**-****-***"},{"country":"MZ","phoneCode":"258","zone":"Africa/Maputo","language":"pt","firstDay":null,"phoneMask":"+258-**-***-***"},{"country":"MM","phoneCode":"95","zone":"Asia/Rangoon","language":"my","firstDay":null,"phoneMask":["+95-***-***","+95-*-***-***","+95-**-***-***"]},{"country":"NA","phoneCode":"264","zone":"Africa/Windhoek","language":"en","firstDay":null,"phoneMask":"+264-**-***-****"},{"country":"NR","phoneCode":"674","zone":"Pacific/Nauru","language":"na","firstDay":null,"phoneMask":"+674-***-****"},{"country":"NP","phoneCode":"977","zone":"Asia/Kathmandu","language":"ne","firstDay":null,"phoneMask":"+977-**-***-***"},{"country":"NL","phoneCode":"31","zone":"Europe/Amsterdam","language":"nl","firstDay":"Mo","phoneMask":"+31-**-***-****"},{"country":"AN","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":["+599-***-****","+599-9-***-****"]},{"country":"NC","phoneCode":"687","zone":"Pacific/Noumea","language":"fr","firstDay":null,"phoneMask":"+687-**-****"},{"country":"NZ","phoneCode":"64","zone":"Pacific/Auckland","language":"en","firstDay":"Mo","phoneMask":["+64-**-***-***","+64-***-***-***","+64-***-***-****"]},{"country":"NI","phoneCode":"505","zone":"America/Managua","language":"es","firstDay":"Su","phoneMask":"+505-****-****"},{"country":"NE","phoneCode":"227","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+227-**-**-****"},{"country":"NG","phoneCode":"234","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":["+234-**-***-**","+234-**-***-***","+234-***-***-****"]},{"country":"NU","phoneCode":"683","zone":"Pacific/Niue","language":"niu","firstDay":null,"phoneMask":"+683-****"},{"country":"KP","phoneCode":"850","zone":"Asia/Pyongyang","language":"ko","firstDay":null,"phoneMask":["+850-***-***","+850-**-***-***","+850-****-****","+850-***-****-***","+850-****-*************","+850-191-***-****"]},{"country":"MP","phoneCode":"1-670","zone":"Pacific/Saipan","language":"fil","firstDay":null,"phoneMask":"+1-670-***-****"},{"country":"NO","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":"Mo","phoneMask":"+47-***-**-***"},{"country":"OM","phoneCode":"968","zone":"Asia/Muscat","language":"ar","firstDay":"Sa","phoneMask":"+968-**-***-***"},{"country":"PK","phoneCode":"92","zone":"Asia/Karachi","language":"ur","firstDay":"Mo","phoneMask":"+92-***-***-****"},{"country":"PW","phoneCode":"680","zone":"Pacific/Palau","language":"pau","firstDay":null,"phoneMask":"+680-***-****"},{"country":"PS","phoneCode":"970","zone":"Asia/Hebron","language":"ar","firstDay":null,"phoneMask":"+970-**-***-****"},{"country":"PA","phoneCode":"507","zone":"America/Panama","language":"es","firstDay":"Su","phoneMask":"+507-***-****"},{"country":"PG","phoneCode":"675","zone":"Pacific/Port_Moresby","language":"en","firstDay":null,"phoneMask":"+675-***-**-***"},{"country":"PY","phoneCode":"595","zone":"America/Asuncion","language":"es","firstDay":"Mo","phoneMask":"+595-***-***-***"},{"country":"PE","phoneCode":"51","zone":"America/Lima","language":"es","firstDay":"Su","phoneMask":"+51-***-***-***"},{"country":"PH","phoneCode":"63","zone":"Asia/Manila","language":"tl","firstDay":"Su","phoneMask":"+63-***-***-****"},{"country":"PN","phoneCode":"64","zone":"Pacific/Pitcairn","language":"en","firstDay":null},{"country":"PL","phoneCode":"48","zone":"Europe/Warsaw","language":"pl","firstDay":"Mo","phoneMask":"+48-***-***-***"},{"country":"PT","phoneCode":"351","zone":"Europe/Lisbon","language":"pt","firstDay":"Mo","phoneMask":"+351-**-***-****"},{"country":"PR","phoneCode":"1-787","zone":"San Juan","language":"Dollar","firstDay":"Su"},{"country":"QA","phoneCode":"974","zone":"Asia/Qatar","language":"ar","firstDay":"Sa","phoneMask":"+974-****-****"},{"country":"CG","phoneCode":"242","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+242-**-***-****"},{"country":"RE","phoneCode":"262","zone":"Indian/Reunion","language":"fr","firstDay":null,"phoneMask":"+262-*****-****"},{"country":"RO","phoneCode":"40","zone":"Europe/Bucharest","language":"ro","firstDay":"Mo","phoneMask":"+40-**-***-****"},{"country":"RU","phoneCode":"7","phoneWithin":"8","zone":"Europe/Moscow","language":"ru","firstDay":"Mo","phoneMask":"+7-***-***-**-**","nameFormat":"lsf"},{"country":"RW","phoneCode":"250","zone":"Africa/Maputo","language":"rw","firstDay":null,"phoneMask":"+250-***-***-***"},{"country":"BL","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"SH","phoneCode":"290","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+290-****"},{"country":"KN","phoneCode":"1-869","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-869-***-****"},{"country":"LC","phoneCode":"1-758","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-758-***-****"},{"country":"MF","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"PM","phoneCode":"508","zone":"America/Miquelon","language":"fr","firstDay":null},{"country":"VC","phoneCode":"1-784","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-784-***-****"},{"country":"WS","phoneCode":"685","zone":"Pacific/Apia","language":"sm","firstDay":null,"phoneMask":"+685-**-****"},{"country":"SM","phoneCode":"378","zone":"Europe/Rome","language":"it","firstDay":null,"phoneMask":"+378-****-******"},{"country":"ST","phoneCode":"239","zone":"Africa/Abidjan","language":"pt","firstDay":null,"phoneMask":"+239-**-*****"},{"country":"SA","phoneCode":"966","zone":"Asia/Riyadh","language":"ar","firstDay":"Sa","phoneMask":["+966-*-***-****","+966-5-****-****"]},{"country":"SN","phoneCode":"221","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+221-**-***-****"},{"country":"RS","phoneCode":"381","zone":"Europe/Belgrade","language":"sr","firstDay":"Mo","phoneMask":"+381-**-***-****"},{"country":"SC","phoneCode":"248","zone":"Indian/Mahe","language":"en","firstDay":null,"phoneMask":"+248-*-***-***"},{"country":"SL","phoneCode":"232","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+232-**-******"},{"country":"SG","phoneCode":"65","zone":"Asia/Singapore","language":"cmn","firstDay":"Mo","phoneMask":"+65-****-****"},{"country":"SX","phoneCode":"1-721","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+1-721-***-****"},{"country":"SK","phoneCode":"421","zone":"Europe/Prague","language":"sk","firstDay":"Mo","phoneMask":"+421-***-***-***"},{"country":"SI","phoneCode":"386","zone":"Europe/Belgrade","language":"sl","firstDay":null,"phoneMask":"+386-**-***-***"},{"country":"SB","phoneCode":"677","zone":"Pacific/Guadalcanal","language":"en","firstDay":null,"phoneMask":["+677-*****","+677-***-****"]},{"country":"SO","phoneCode":"252","zone":"Africa/Mogadishu","language":"so","firstDay":null,"phoneMask":["+252-*-***-***","+252-**-***-***"]},{"country":"ZA","phoneCode":"27","zone":"Africa/Johannesburg","language":"zu","firstDay":"Su","phoneMask":"+27-**-***-****"},{"country":"KR","phoneCode":"82","zone":"Asia/Seoul","language":"ko","firstDay":"Su","phoneMask":["+82-**-***-****","+82-**-***-****-**"],"nameFormat":"lf"},{"country":"SS","phoneCode":"211","zone":"Africa/Khartoum","language":"en","firstDay":null,"phoneMask":"+211-**-***-****"},{"country":"ES","phoneCode":"34","zone":"Europe/Madrid","language":"es","firstDay":"Mo","phoneMask":"+34-***-***-***"},{"country":"LK","phoneCode":"94","zone":"Asia/Colombo","language":"si","firstDay":null,"phoneMask":"+94-**-***-****"},{"country":"SD","phoneCode":"249","zone":"Africa/Khartoum","language":"ar","firstDay":null,"phoneMask":"+249-**-***-****"},{"country":"SR","phoneCode":"597","zone":"America/Paramaribo","language":"nl","firstDay":null,"phoneMask":["+597-***-***","+597-***-****"]},{"country":"SJ","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":null},{"country":"SZ","phoneCode":"268","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+268-**-**-****"},{"country":"SE","phoneCode":"46","zone":"Europe/Stockholm","language":"sv","firstDay":"Mo","phoneMask":"+46-**-***-****"},{"country":"CH","phoneCode":"41","zone":"Europe/Zurich","language":"de","firstDay":"Mo","phoneMask":"+41-**-***-****"},{"country":"SY","phoneCode":"963","zone":"Asia/Damascus","language":"ar","firstDay":"Sa","phoneMask":"+963-**-****-***"},{"country":"TW","phoneCode":"886","zone":"Asia/Taipei","language":"zh","firstDay":"Su","phoneMask":["+886-****-****","+886-*-****-****"]},{"country":"TJ","phoneCode":"992","zone":"Asia/Dushanbe","language":"tg","firstDay":null,"phoneMask":"+992-**-***-****"},{"country":"TZ","phoneCode":"255","zone":"Africa/Dar_es_Salaam","language":"sw","firstDay":null,"phoneMask":"+255-**-***-****"},{"country":"TH","phoneCode":"66","zone":"Asia/Bangkok","language":"th","firstDay":"Mo","phoneMask":"+66-**-***-****"},{"country":"TG","phoneCode":"228","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+228-**-***-***"},{"country":"TK","phoneCode":"690","zone":"Pacific/Fakaofo","language":"tkl","firstDay":null,"phoneMask":"+690-****"},{"country":"TO","phoneCode":"676","zone":"Pacific/Tongatapu","language":"to","firstDay":null,"phoneMask":"+676-*****"},{"country":"TT","phoneCode":"1-868","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-868-***-****"},{"country":"TN","phoneCode":"216","zone":"Africa/Tunis","language":"ar","firstDay":"Mo","phoneMask":"+216-**-***-***"},{"country":"TR","phoneCode":"90","zone":"Europe/Istanbul","language":"tr","firstDay":"Mo","phoneMask":"+90-***-***-****"},{"country":"TM","phoneCode":"993","zone":"Asia/Ashgabat","language":"tk","firstDay":null,"phoneMask":"+993-*-***-****"},{"country":"TC","phoneCode":"1-649","zone":"America/Grand_Turk","language":"en","firstDay":null,"phoneMask":"+1-649-***-****"},{"country":"TV","phoneCode":"688","zone":"Pacific/Funafuti","language":"tvl","firstDay":null,"phoneMask":["+688-2-****","+688-90-****"]},{"country":"VI","phoneCode":"1-340","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-340-***-****"},{"country":"UG","phoneCode":"256","zone":"Africa/Kampala","language":"en","firstDay":null,"phoneMask":"+256-***-***-***"},{"country":"UA","phoneCode":"380","zone":"Europe/Kiev","language":"uk","languageAlternative":["ua"],"firstDay":"Mo","phoneMask":"+380-**-***-**-**"},{"country":"AE","phoneCode":"971","zone":"Asia/Dubai","language":"ar","firstDay":"Sa","phoneMask":["+971-*-***-****","+971-5-*-***-****"]},{"country":"UY","phoneCode":"598","zone":"America/Montevideo","language":"es","firstDay":"Mo","phoneMask":"+598-*-***-**-**"},{"country":"UZ","phoneCode":"998","zone":"Asia/Tashkent","language":"uz","firstDay":"Mo","phoneMask":"+998-**-***-****"},{"country":"VU","phoneCode":"678","zone":"Pacific/Efate","language":"bi","firstDay":null,"phoneMask":["+678-*****","+678-**-*****"]},{"country":"VA","phoneCode":"379","zone":"Europe/Rome","language":"la","firstDay":null,"phoneMask":"+39-6-698-*****"},{"country":"VE","phoneCode":"58","zone":"America/Caracas","language":"es","firstDay":"Su","phoneMask":"+58-***-***-****"},{"country":"VN","phoneCode":"84","zone":"Asia/Ho_Chi_Minh","language":"vi","firstDay":"Mo","phoneMask":["+84-**-****-***","+84-***-****-***"],"nameFormat":"fsl"},{"country":"WF","phoneCode":"681","zone":"Pacific/Wallis","language":"wls","firstDay":null,"phoneMask":"+681-**-****"},{"country":"EH","phoneCode":"212","zone":"Africa/El_Aaiun","language":"ar","firstDay":null},{"country":"YE","phoneCode":"967","zone":"Asia/Aden","language":"ar","firstDay":"Sa","phoneMask":["+967-*-***-***","+967-**-***-***","+967-***-***-***"]},{"country":"ZM","phoneCode":"260","zone":"Africa/Maputo","language":"en","firstDay":null,"phoneMask":"+260-**-***-****"},{"country":"ZW","phoneCode":"263","zone":"Africa/Maputo","language":"en","firstDay":"Su","phoneMask":"+263-*-******"},{"country":"GF","phoneCode":"594","zone":"America/Cayenne","language":"fr","firstDay":"Mo","phoneMask":"+594-*****-****"},{"country":"MQ","phoneCode":"596","zone":"America/Martinique","language":"fr","firstDay":"Mo","phoneMask":"+596-***-**-**-**"},{"country":"NF","phoneCode":"672-3","zone":"Pacific/Norfolk","language":"en","firstDay":"Mo","phoneMask":"+672-3-**-***"},{"country":"IC","phoneCode":"3428","zone":"Europe/Berlin","language":"es","firstDay":"Mo"}]'), Vs = "geo-code", v = class v {
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
    return Is;
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
    return n && (n.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (t = this.getByCodeFull(n)), !t && n.match(/[A-Z]{2}/) && (t = this.getByCountry(this.toCountry(n))), !t && n.match(/[a-z]{2}/) && (t = this.getByLanguage(this.toLanguage(n)))), this.toFull(Ts(t ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(n) {
    return this.getList().find(
      (t) => Ps(n, [
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
    return W() && (this.storage.get() || ((n = document.querySelector("html")) == null ? void 0 : n.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
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
y(v, "storage", new xs(Vs)), y(v, "location"), y(v, "item"), y(v, "language"), y(v, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), v.location = v.findLocation(), v.language = v.findLanguage(v.location), v.item = v.getByCode(v.location);
let Me = v;
var Ls = /* @__PURE__ */ ((e) => (e.get = "GET", e.post = "POST", e.put = "PUT", e.delete = "DELETE", e))(Ls || {});
const qn = "d-response-loading", Zn = [], C = class C {
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
      return he(t) && (o["Content-Type"] = t), o;
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
    if (n instanceof FormData)
      return n;
    if (t !== "GET" && he(n))
      return gn(n) ? n : JSON.stringify(n);
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
      const s = t.match(/\?/) ? "&" : "?", r = typeof n == "object" ? ws(n) : n;
      if (he(r))
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
      const t = sn(this.requestDefault);
      if (n instanceof FormData)
        Le(t, (o, s) => {
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
    return gn(n) ? await this.fetch({
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
    return this.response.push(...yn(n)), C;
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
      if (Dn(sn(r == null ? void 0 : r.disable)) !== !0 && (r.path instanceof RegExp && n.match(r.path) || n === r.path) && t === r.method && (Zn.indexOf(r) === -1 || s)) {
        const a = this.addRequestDefault(r == null ? void 0 : r.request);
        let i = !1;
        if (o === a || a === "*any" ? i = !0 : he(o) && he(a) && te(o) && te(a) && !(o instanceof FormData) && !(a instanceof FormData) && Object.values(o).length === Object.values(a).length && (i = Object.entries(a).reduce(
          (c, [l, p]) => c && (p === (o == null ? void 0 : o[l]) || p === "*any"),
          !0
        )), i)
          return s && console.warn(`Response type: ${r.path}`), Zn.push(r), !0;
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
    q.show();
    try {
      this.preparationItem && r && await this.makePreparation();
      const l = await this.makeQuery(n), p = a && this.preparationEndItem ? await this.makePreparationEnd(l) : {};
      if (this.status = l.status, this.statusText = l.statusText, p != null && p.reset)
        return q.hide(), await this.fetch(n);
      s ? c = await s(l) : "data" in p ? c = p.data : l.headers.get("Content-Type") === "application/json" ? c = await l.json() : c = { data: await l.text() };
    } catch (l) {
      o && console.error("Api: ", l), this.error = l;
    }
    return q.hide(), this.makeData(c, t);
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
      Ht(
        nt(n.response) ? n.response(t) : n.response
      ).then((s) => {
        sn(n == null ? void 0 : n.lag) ? (q.show(), setTimeout(() => {
          this.stopResponseLoading(), o(s), q.hide();
        }, Os(0, 2e3))) : (this.stopResponseLoading(), o(s));
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
    this.responseLoading && clearTimeout(this.responseLoading), W() && document.body.classList.add(qn);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  static stopResponseLoading() {
    this.responseLoading = setTimeout(() => {
      this.responseLoading = void 0, W() && document.body.classList.remove(qn);
    }, 1200);
  }
};
y(C, "url", "/api/"), y(C, "response", []), y(C, "responseLoading"), y(C, "headers", {}), y(C, "requestDefault"), y(C, "preparation", !1), y(C, "preparationItem"), y(C, "preparationEndItem"), y(C, "status"), y(C, "statusText"), y(C, "error"), y(C, "lastResponse"), y(C, "lastMessage");
let mn = C;
const an = "__UI_ICON", Qn = 320, Xn = "--LOAD--", _e = class _e {
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
    return typeof s == "string" ? s === Xn && o > 0 ? (await this.wait(), this.get(n, t, o - Qn)) : s : await s;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return Le(this.icons, (n, t) => t.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${mn.isLocalhost(), ""}${this.url}`;
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
    this.icons[this.getName(n)] = Xn;
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
    Le(n, (t, o) => this.add(o, t));
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
    return new Promise((n) => setTimeout(() => n(), Qn));
  }
};
y(_e, "icons", {}), y(_e, "url", "/icons/"), W() && (an in window || (window[an] = {}), _e.icons = window[an]);
let et = _e;
export {
  mn as A,
  Ps as B,
  Js as C,
  xs as D,
  Wn as E,
  Ts as F,
  Me as G,
  Ls as H,
  et as I,
  Ht as J,
  Un as K,
  q as L,
  nt as M,
  Rs as N,
  Ft as O,
  he as a,
  Ye as b,
  gn as c,
  ae as d,
  Dn as e,
  Le as f,
  ws as g,
  Mn as h,
  W as i,
  te as j,
  qs as k,
  Zs as l,
  sn as m,
  Hs as n,
  Gs as o,
  S as p,
  Bs as q,
  Fs as r,
  js as s,
  yn as t,
  Us as u,
  Ks as v,
  Ys as w,
  Os as x,
  as as y,
  Ws as z
};
