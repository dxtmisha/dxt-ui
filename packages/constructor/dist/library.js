var Xn = Object.defineProperty;
var eo = (t, e, n) => e in t ? Xn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var f = (t, e, n) => eo(t, typeof e != "symbol" ? e + "" : e, n);
function dn(t) {
  return t instanceof Function || typeof t == "function";
}
function q(t) {
  return dn(t) ? t() : t;
}
async function to(t) {
  const e = q(t);
  return e instanceof Promise ? await e : e;
}
function Ne(t) {
  return !!(t && typeof t == "object");
}
function H(t, e) {
  if (Ne(t)) {
    const n = [];
    return t instanceof Map ? t.forEach((o, s) => n.push(e(o, s, t))) : Array.isArray(t) ? t.forEach((o, s) => n.push(e(o, s, t))) : Object.entries(t).forEach(
      ([o, s]) => n.push(e(s, o, t))
    ), n.filter((o) => o !== void 0);
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
function no(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const L = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ye = () => {
}, oo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), P = Object.assign, so = Object.prototype.hasOwnProperty, _ = (t, e) => so.call(t, e), D = Array.isArray, me = (t) => et(t) === "[object Map]", ro = (t) => et(t) === "[object Set]", z = (t) => typeof t == "function", j = (t) => typeof t == "string", Te = (t) => typeof t == "symbol", N = (t) => t !== null && typeof t == "object", ao = (t) => (N(t) || z(t)) && z(t.then) && z(t.catch), io = Object.prototype.toString, et = (t) => io.call(t), gn = (t) => et(t).slice(8, -1), uo = (t) => et(t) === "[object Object]", bt = (t) => j(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, co = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, lo = co((t) => t.charAt(0).toUpperCase() + t.slice(1)), Q = (t, e) => !Object.is(t, e), ho = (t, e, n, o = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
};
let Kt;
const tt = () => Kt || (Kt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vt(t) {
  if (D(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const o = t[n], s = j(o) ? yo(o) : vt(o);
      if (s)
        for (const r in s)
          e[r] = s[r];
    }
    return e;
  } else if (j(t) || N(t))
    return t;
}
const fo = /;(?![^(]*\))/g, po = /:([^]+)/, go = /\/\*[^]*?\*\//g;
function yo(t) {
  const e = {};
  return t.replace(go, "").split(fo).forEach((n) => {
    if (n) {
      const o = n.split(po);
      o.length > 1 && (e[o[0].trim()] = o[1].trim());
    }
  }), e;
}
function Nt(t) {
  let e = "";
  if (j(t))
    e = t;
  else if (D(t))
    for (let n = 0; n < t.length; n++) {
      const o = Nt(t[n]);
      o && (e += o + " ");
    }
  else if (N(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function U(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let m;
const it = /* @__PURE__ */ new WeakSet();
class mo {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, it.has(this) && (it.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || mn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ht(this), Dn(this);
    const e = m, n = V;
    m = this, V = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && m !== this && U(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Cn(this), m = e, V = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Rt(e);
      this.deps = this.depsTail = void 0, Ht(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? it.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Dt(this) && this.run();
  }
  get dirty() {
    return Dt(this);
  }
}
let yn = 0, Se, ze;
function mn(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = ze, ze = t;
    return;
  }
  t.next = Se, Se = t;
}
function Ot() {
  yn++;
}
function Pt() {
  if (--yn > 0)
    return;
  if (ze) {
    let e = ze;
    for (ze = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; Se; ) {
    let e = Se;
    for (Se = void 0; e; ) {
      const n = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (o) {
          t || (t = o);
        }
      e = n;
    }
  }
  if (t) throw t;
}
function Dn(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Cn(t) {
  let e, n = t.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), Rt(o), Do(o)) : e = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  t.deps = e, t.depsTail = n;
}
function Dt(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Mn(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Mn(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Oe))
    return;
  t.globalVersion = Oe;
  const e = t.dep;
  if (t.flags |= 2, e.version > 0 && !t.isSSR && t.deps && !Dt(t)) {
    t.flags &= -3;
    return;
  }
  const n = m, o = V;
  m = t, V = !0;
  try {
    Dn(t);
    const s = t.fn(t._value);
    (e.version === 0 || Q(s, t._value)) && (t._value = s, e.version++);
  } catch (s) {
    throw e.version++, s;
  } finally {
    m = n, V = o, Cn(t), t.flags &= -3;
  }
}
function Rt(t, e = !1) {
  const { dep: n, prevSub: o, nextSub: s } = t;
  if (o && (o.nextSub = s, t.prevSub = void 0), s && (s.prevSub = o, t.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === t && (n.subsHead = s), n.subs === t && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Rt(r, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function Do(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let V = !0;
const En = [];
function nt() {
  En.push(V), V = !1;
}
function ot() {
  const t = En.pop();
  V = t === void 0 ? !0 : t;
}
function Ht(t) {
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
let Oe = 0;
class Co {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Tt {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!m || !V || m === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== m)
      n = this.activeLink = new Co(m, this), m.deps ? (n.prevDep = m.depsTail, m.depsTail.nextDep = n, m.depsTail = n) : m.deps = m.depsTail = n, _n(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = m.depsTail, n.nextDep = void 0, m.depsTail.nextDep = n, m.depsTail = n, m.deps === n && (m.deps = o);
    }
    return process.env.NODE_ENV !== "production" && m.onTrack && m.onTrack(
      P(
        {
          effect: m
        },
        e
      )
    ), n;
  }
  trigger(e) {
    this.version++, Oe++, this.notify(e);
  }
  notify(e) {
    Ot();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            P(
              {
                effect: n.sub
              },
              e
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Pt();
    }
  }
}
function _n(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let o = e.deps; o; o = o.nextDep)
        _n(o);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), process.env.NODE_ENV !== "production" && t.dep.subsHead === void 0 && (t.dep.subsHead = t), t.dep.subs = t;
  }
}
const Ct = /* @__PURE__ */ new WeakMap(), re = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Mt = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Pe = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function S(t, e, n) {
  if (V && m) {
    let o = Ct.get(t);
    o || Ct.set(t, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new Tt()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: t,
      type: e,
      key: n
    }) : s.track();
  }
}
function J(t, e, n, o, s, r) {
  const a = Ct.get(t);
  if (!a) {
    Oe++;
    return;
  }
  const i = (c) => {
    c && (process.env.NODE_ENV !== "production" ? c.trigger({
      target: t,
      type: e,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : c.trigger());
  };
  if (Ot(), e === "clear")
    a.forEach(i);
  else {
    const c = D(t), l = c && bt(n);
    if (c && n === "length") {
      const p = Number(o);
      a.forEach((u, h) => {
        (h === "length" || h === Pe || !Te(h) && h >= p) && i(u);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && i(a.get(n)), l && i(a.get(Pe)), e) {
        case "add":
          c ? l && i(a.get("length")) : (i(a.get(re)), me(t) && i(a.get(Mt)));
          break;
        case "delete":
          c || (i(a.get(re)), me(t) && i(a.get(Mt)));
          break;
        case "set":
          me(t) && i(a.get(re));
          break;
      }
  }
  Pt();
}
function le(t) {
  const e = g(t);
  return e === t ? e : (S(e, "iterate", Pe), O(t) ? e : e.map(v));
}
function It(t) {
  return S(t = g(t), "iterate", Pe), t;
}
const Mo = {
  __proto__: null,
  [Symbol.iterator]() {
    return ut(this, Symbol.iterator, v);
  },
  concat(...t) {
    return le(this).concat(
      ...t.map((e) => D(e) ? le(e) : e)
    );
  },
  entries() {
    return ut(this, "entries", (t) => (t[1] = v(t[1]), t));
  },
  every(t, e) {
    return F(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return F(this, "filter", t, e, (n) => n.map(v), arguments);
  },
  find(t, e) {
    return F(this, "find", t, e, v, arguments);
  },
  findIndex(t, e) {
    return F(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return F(this, "findLast", t, e, v, arguments);
  },
  findLastIndex(t, e) {
    return F(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return F(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return ct(this, "includes", t);
  },
  indexOf(...t) {
    return ct(this, "indexOf", t);
  },
  join(t) {
    return le(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return ct(this, "lastIndexOf", t);
  },
  map(t, e) {
    return F(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Ee(this, "pop");
  },
  push(...t) {
    return Ee(this, "push", t);
  },
  reduce(t, ...e) {
    return Ut(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Ut(this, "reduceRight", t, e);
  },
  shift() {
    return Ee(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return F(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Ee(this, "splice", t);
  },
  toReversed() {
    return le(this).toReversed();
  },
  toSorted(t) {
    return le(this).toSorted(t);
  },
  toSpliced(...t) {
    return le(this).toSpliced(...t);
  },
  unshift(...t) {
    return Ee(this, "unshift", t);
  },
  values() {
    return ut(this, "values", v);
  }
};
function ut(t, e, n) {
  const o = It(t), s = o[e]();
  return o !== t && !O(t) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = n(r.value)), r;
  }), s;
}
const Eo = Array.prototype;
function F(t, e, n, o, s, r) {
  const a = It(t), i = a !== t && !O(t), c = a[e];
  if (c !== Eo[e]) {
    const u = c.apply(t, r);
    return i ? v(u) : u;
  }
  let l = n;
  a !== t && (i ? l = function(u, h) {
    return n.call(this, v(u), h, t);
  } : n.length > 2 && (l = function(u, h) {
    return n.call(this, u, h, t);
  }));
  const p = c.call(a, l, o);
  return i && s ? s(p) : p;
}
function Ut(t, e, n, o) {
  const s = It(t);
  let r = n;
  return s !== t && (O(t) ? n.length > 3 && (r = function(a, i, c) {
    return n.call(this, a, i, c, t);
  }) : r = function(a, i, c) {
    return n.call(this, a, v(i), c, t);
  }), s[e](r, ...o);
}
function ct(t, e, n) {
  const o = g(t);
  S(o, "iterate", Pe);
  const s = o[e](...n);
  return (s === -1 || s === !1) && Ue(n[0]) ? (n[0] = g(n[0]), o[e](...n)) : s;
}
function Ee(t, e, n = []) {
  nt(), Ot();
  const o = g(t)[e].apply(t, n);
  return Pt(), ot(), o;
}
const _o = /* @__PURE__ */ no("__proto__,__v_isRef,__isVue"), An = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Te)
);
function Ao(t) {
  Te(t) || (t = String(t));
  const e = g(this);
  return S(e, "has", t), e.hasOwnProperty(t);
}
class Sn {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, o) {
    if (n === "__v_skip") return e.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? bn : wn : r ? Ro : kn).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(o) ? e : void 0;
    const a = D(e);
    if (!s) {
      let c;
      if (a && (c = Mo[n]))
        return c;
      if (n === "hasOwnProperty")
        return Ao;
    }
    const i = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      k(e) ? e : o
    );
    return (Te(n) ? An.has(n) : _o(n)) || (s || S(e, "get", n), r) ? i : k(i) ? a && bt(n) ? i : i.value : N(i) ? s ? Nn(i) : vn(i) : i;
  }
}
class So extends Sn {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, o, s) {
    let r = e[n];
    if (!this._isShallow) {
      const c = W(r);
      if (!O(o) && !W(o) && (r = g(r), o = g(o)), !D(e) && k(r) && !k(o))
        return c ? !1 : (r.value = o, !0);
    }
    const a = D(e) && bt(n) ? Number(n) < e.length : _(e, n), i = Reflect.set(
      e,
      n,
      o,
      k(e) ? e : s
    );
    return e === g(s) && (a ? Q(o, r) && J(e, "set", n, o, r) : J(e, "add", n, o)), i;
  }
  deleteProperty(e, n) {
    const o = _(e, n), s = e[n], r = Reflect.deleteProperty(e, n);
    return r && o && J(e, "delete", n, void 0, s), r;
  }
  has(e, n) {
    const o = Reflect.has(e, n);
    return (!Te(n) || !An.has(n)) && S(e, "has", n), o;
  }
  ownKeys(e) {
    return S(
      e,
      "iterate",
      D(e) ? "length" : re
    ), Reflect.ownKeys(e);
  }
}
class zn extends Sn {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && U(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && U(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const zo = /* @__PURE__ */ new So(), ko = /* @__PURE__ */ new zn(), wo = /* @__PURE__ */ new zn(!0), Et = (t) => t, Ve = (t) => Reflect.getPrototypeOf(t);
function bo(t, e, n) {
  return function(...o) {
    const s = this.__v_raw, r = g(s), a = me(r), i = t === "entries" || t === Symbol.iterator && a, c = t === "keys" && a, l = s[t](...o), p = n ? Et : e ? _t : v;
    return !e && S(
      r,
      "iterate",
      c ? Mt : re
    ), {
      // iterator protocol
      next() {
        const { value: u, done: h } = l.next();
        return h ? { value: u, done: h } : {
          value: i ? [p(u[0]), p(u[1])] : p(u),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function $e(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      U(
        `${lo(t)} operation ${n}failed: target is readonly.`,
        g(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function vo(t, e) {
  const n = {
    get(s) {
      const r = this.__v_raw, a = g(r), i = g(s);
      t || (Q(s, i) && S(a, "get", s), S(a, "get", i));
      const { has: c } = Ve(a), l = e ? Et : t ? _t : v;
      if (c.call(a, s))
        return l(r.get(s));
      if (c.call(a, i))
        return l(r.get(i));
      r !== a && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !t && S(g(s), "iterate", re), Reflect.get(s, "size", s);
    },
    has(s) {
      const r = this.__v_raw, a = g(r), i = g(s);
      return t || (Q(s, i) && S(a, "has", s), S(a, "has", i)), s === i ? r.has(s) : r.has(s) || r.has(i);
    },
    forEach(s, r) {
      const a = this, i = a.__v_raw, c = g(i), l = e ? Et : t ? _t : v;
      return !t && S(c, "iterate", re), i.forEach((p, u) => s.call(r, l(p), l(u), a));
    }
  };
  return P(
    n,
    t ? {
      add: $e("add"),
      set: $e("set"),
      delete: $e("delete"),
      clear: $e("clear")
    } : {
      add(s) {
        !e && !O(s) && !W(s) && (s = g(s));
        const r = g(this);
        return Ve(r).has.call(r, s) || (r.add(s), J(r, "add", s, s)), this;
      },
      set(s, r) {
        !e && !O(r) && !W(r) && (r = g(r));
        const a = g(this), { has: i, get: c } = Ve(a);
        let l = i.call(a, s);
        l ? process.env.NODE_ENV !== "production" && Wt(a, i, s) : (s = g(s), l = i.call(a, s));
        const p = c.call(a, s);
        return a.set(s, r), l ? Q(r, p) && J(a, "set", s, r, p) : J(a, "add", s, r), this;
      },
      delete(s) {
        const r = g(this), { has: a, get: i } = Ve(r);
        let c = a.call(r, s);
        c ? process.env.NODE_ENV !== "production" && Wt(r, a, s) : (s = g(s), c = a.call(r, s));
        const l = i ? i.call(r, s) : void 0, p = r.delete(s);
        return c && J(r, "delete", s, void 0, l), p;
      },
      clear() {
        const s = g(this), r = s.size !== 0, a = process.env.NODE_ENV !== "production" ? me(s) ? new Map(s) : new Set(s) : void 0, i = s.clear();
        return r && J(
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
    n[s] = bo(s, t, e);
  }), n;
}
function xt(t, e) {
  const n = vo(t, e);
  return (o, s, r) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? o : Reflect.get(
    _(n, s) && s in o ? n : o,
    s,
    r
  );
}
const No = {
  get: /* @__PURE__ */ xt(!1, !1)
}, Oo = {
  get: /* @__PURE__ */ xt(!0, !1)
}, Po = {
  get: /* @__PURE__ */ xt(!0, !0)
};
function Wt(t, e, n) {
  const o = g(n);
  if (o !== n && e.call(t, o)) {
    const s = gn(t);
    U(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const kn = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap();
function To(t) {
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
function Io(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : To(gn(t));
}
function vn(t) {
  return W(t) ? t : Lt(
    t,
    !1,
    zo,
    No,
    kn
  );
}
function Nn(t) {
  return Lt(
    t,
    !0,
    ko,
    Oo,
    wn
  );
}
function je(t) {
  return Lt(
    t,
    !0,
    wo,
    Po,
    bn
  );
}
function Lt(t, e, n, o, s) {
  if (!N(t))
    return process.env.NODE_ENV !== "production" && U(
      `value cannot be made ${e ? "readonly" : "reactive"}: ${String(
        t
      )}`
    ), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const r = s.get(t);
  if (r)
    return r;
  const a = Io(t);
  if (a === 0)
    return t;
  const i = new Proxy(
    t,
    a === 2 ? o : n
  );
  return s.set(t, i), i;
}
function De(t) {
  return W(t) ? De(t.__v_raw) : !!(t && t.__v_isReactive);
}
function W(t) {
  return !!(t && t.__v_isReadonly);
}
function O(t) {
  return !!(t && t.__v_isShallow);
}
function Ue(t) {
  return t ? !!t.__v_raw : !1;
}
function g(t) {
  const e = t && t.__v_raw;
  return e ? g(e) : t;
}
function xo(t) {
  return !_(t, "__v_skip") && Object.isExtensible(t) && ho(t, "__v_skip", !0), t;
}
const v = (t) => N(t) ? vn(t) : t, _t = (t) => N(t) ? Nn(t) : t;
function k(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function Lo(t) {
  return On(t, !1);
}
function Vo(t) {
  return On(t, !0);
}
function On(t, e) {
  return k(t) ? t : new $o(t, e);
}
class $o {
  constructor(e, n) {
    this.dep = new Tt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : g(e), this._value = n ? e : v(e), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, o = this.__v_isShallow || O(e) || W(e);
    e = o ? e : g(e), Q(e, n) && (this._rawValue = e, this._value = o ? e : v(e), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function jo(t) {
  return k(t) ? t.value : t;
}
const Fo = {
  get: (t, e, n) => e === "__v_raw" ? t : jo(Reflect.get(t, e, n)),
  set: (t, e, n, o) => {
    const s = t[e];
    return k(s) && !k(n) ? (s.value = n, !0) : Reflect.set(t, e, n, o);
  }
};
function Bo(t) {
  return De(t) ? t : new Proxy(t, Fo);
}
class Ko {
  constructor(e, n, o) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Tt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Oe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    m !== this)
      return mn(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const e = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Mn(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && U("Write operation failed: computed value is readonly");
  }
}
function Ho(t, e, n = !1) {
  let o, s;
  z(t) ? o = t : (o = t.get, s = t.set);
  const r = new Ko(o, s, n);
  return process.env.NODE_ENV, r;
}
const Fe = {}, We = /* @__PURE__ */ new WeakMap();
let ee;
function Uo(t, e = !1, n = ee) {
  if (n) {
    let o = We.get(n);
    o || We.set(n, o = []), o.push(t);
  } else process.env.NODE_ENV !== "production" && !e && U(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Wo(t, e, n = L) {
  const { immediate: o, deep: s, once: r, scheduler: a, augmentJob: i, call: c } = n, l = (y) => {
    (n.onWarn || U)(
      "Invalid watch source: ",
      y,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (y) => s ? y : O(y) || s === !1 || s === 0 ? Y(y, 1) : Y(y);
  let u, h, d, E, T = !1, xe = !1;
  if (k(t) ? (h = () => t.value, T = O(t)) : De(t) ? (h = () => p(t), T = !0) : D(t) ? (xe = !0, T = t.some((y) => De(y) || O(y)), h = () => t.map((y) => {
    if (k(y))
      return y.value;
    if (De(y))
      return p(y);
    if (z(y))
      return c ? c(y, 2) : y();
    process.env.NODE_ENV !== "production" && l(y);
  })) : z(t) ? e ? h = c ? () => c(t, 2) : t : h = () => {
    if (d) {
      nt();
      try {
        d();
      } finally {
        ot();
      }
    }
    const y = ee;
    ee = u;
    try {
      return c ? c(t, 3, [E]) : t(E);
    } finally {
      ee = y;
    }
  } : (h = ye, process.env.NODE_ENV !== "production" && l(t)), e && s) {
    const y = h, $ = s === !0 ? 1 / 0 : s;
    h = () => Y(y(), $);
  }
  const ce = () => {
    u.stop();
  };
  if (r && e) {
    const y = e;
    e = (...$) => {
      y(...$), ce();
    };
  }
  let X = xe ? new Array(t.length).fill(Fe) : Fe;
  const Me = (y) => {
    if (!(!(u.flags & 1) || !u.dirty && !y))
      if (e) {
        const $ = u.run();
        if (s || T || (xe ? $.some((at, Le) => Q(at, X[Le])) : Q($, X))) {
          d && d();
          const at = ee;
          ee = u;
          try {
            const Le = [
              $,
              // pass undefined as the old value when it's changed for the first time
              X === Fe ? void 0 : xe && X[0] === Fe ? [] : X,
              E
            ];
            c ? c(e, 3, Le) : (
              // @ts-expect-error
              e(...Le)
            ), X = $;
          } finally {
            ee = at;
          }
        }
      } else
        u.run();
  };
  return i && i(Me), u = new mo(h), u.scheduler = a ? () => a(Me, !1) : Me, E = (y) => Uo(y, !1, u), d = u.onStop = () => {
    const y = We.get(u);
    if (y) {
      if (c)
        c(y, 4);
      else
        for (const $ of y) $();
      We.delete(u);
    }
  }, process.env.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), e ? o ? Me(!0) : X = u.run() : a ? a(Me.bind(null, !0), !0) : u.run(), ce.pause = u.pause.bind(u), ce.resume = u.resume.bind(u), ce.stop = ce, ce;
}
function Y(t, e = 1 / 0, n) {
  if (e <= 0 || !N(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(t)))
    return t;
  if (n.add(t), e--, k(t))
    Y(t.value, e, n);
  else if (D(t))
    for (let o = 0; o < t.length; o++)
      Y(t[o], e, n);
  else if (ro(t) || me(t))
    t.forEach((o) => {
      Y(o, e, n);
    });
  else if (uo(t)) {
    for (const o in t)
      Y(t[o], e, n);
    for (const o of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, o) && Y(t[o], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ae = [];
function Go(t) {
  ae.push(t);
}
function Jo() {
  ae.pop();
}
let lt = !1;
function M(t, ...e) {
  if (lt) return;
  lt = !0, nt();
  const n = ae.length ? ae[ae.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Yo();
  if (o)
    st(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + e.map((r) => {
          var a, i;
          return (i = (a = r.toString) == null ? void 0 : a.call(r)) != null ? i : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Jn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${t}`, ...e];
    s.length && r.push(`
`, ...Zo(s)), console.warn(...r);
  }
  ot(), lt = !1;
}
function Yo() {
  let t = ae[ae.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const o = t.component && t.component.parent;
    t = o && o.vnode;
  }
  return e;
}
function Zo(t) {
  const e = [];
  return t.forEach((n, o) => {
    e.push(...o === 0 ? [] : [`
`], ...qo(n));
  }), e;
}
function qo({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", o = t.component ? t.component.parent == null : !1, s = ` at <${Jn(
    t.component,
    t.type,
    o
  )}`, r = ">" + n;
  return t.props ? [s, ...Qo(t.props), r] : [s + r];
}
function Qo(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((o) => {
    e.push(...Pn(o, t[o]));
  }), n.length > 3 && e.push(" ..."), e;
}
function Pn(t, e, n) {
  return j(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : k(e) ? (e = Pn(t, g(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : z(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = g(e), n ? e : [`${t}=`, e]);
}
const Rn = {
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
function st(t, e, n, o) {
  try {
    return o ? t(...o) : t();
  } catch (s) {
    Vt(s, e, n);
  }
}
function Tn(t, e, n, o) {
  if (z(t)) {
    const s = st(t, e, n, o);
    return s && ao(s) && s.catch((r) => {
      Vt(r, e, n);
    }), s;
  }
  if (D(t)) {
    const s = [];
    for (let r = 0; r < t.length; r++)
      s.push(Tn(t[r], e, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && M(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`
  );
}
function Vt(t, e, n, o = !0) {
  const s = e ? e.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: a } = e && e.appContext.config || L;
  if (e) {
    let i = e.parent;
    const c = e.proxy, l = process.env.NODE_ENV !== "production" ? Rn[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const p = i.ec;
      if (p) {
        for (let u = 0; u < p.length; u++)
          if (p[u](t, c, l) === !1)
            return;
      }
      i = i.parent;
    }
    if (r) {
      nt(), st(r, null, 10, [
        t,
        c,
        l
      ]), ot();
      return;
    }
  }
  Xo(t, n, s, o, a);
}
function Xo(t, e, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = Rn[e];
    if (n && Go(n), M(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Jo(), o)
      throw t;
    console.error(t);
  } else {
    if (s)
      throw t;
    console.error(t);
  }
}
const I = [];
let B = -1;
const Ce = [];
let G = null, he = 0;
const In = /* @__PURE__ */ Promise.resolve();
let Ge = null;
const es = 100;
function ts(t) {
  const e = Ge || In;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function ns(t) {
  let e = B + 1, n = I.length;
  for (; e < n; ) {
    const o = e + n >>> 1, s = I[o], r = Re(s);
    r < t || r === t && s.flags & 2 ? e = o + 1 : n = o;
  }
  return e;
}
function $t(t) {
  if (!(t.flags & 1)) {
    const e = Re(t), n = I[I.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Re(n) ? I.push(t) : I.splice(ns(e), 0, t), t.flags |= 1, xn();
  }
}
function xn() {
  Ge || (Ge = In.then(Vn));
}
function Ln(t) {
  D(t) ? Ce.push(...t) : G && t.id === -1 ? G.splice(he + 1, 0, t) : t.flags & 1 || (Ce.push(t), t.flags |= 1), xn();
}
function os(t) {
  if (Ce.length) {
    const e = [...new Set(Ce)].sort(
      (n, o) => Re(n) - Re(o)
    );
    if (Ce.length = 0, G) {
      G.push(...e);
      return;
    }
    for (G = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), he = 0; he < G.length; he++) {
      const n = G[he];
      process.env.NODE_ENV !== "production" && $n(t, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    G = null, he = 0;
  }
}
const Re = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Vn(t) {
  process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const e = process.env.NODE_ENV !== "production" ? (n) => $n(t, n) : ye;
  try {
    for (B = 0; B < I.length; B++) {
      const n = I[B];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        n.flags & 4 && (n.flags &= -2), st(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; B < I.length; B++) {
      const n = I[B];
      n && (n.flags &= -2);
    }
    B = -1, I.length = 0, os(t), Ge = null, (I.length || Ce.length) && Vn(t);
  }
}
function $n(t, e) {
  const n = t.get(e) || 0;
  if (n > es) {
    const o = e.i, s = o && Gn(o.type);
    return Vt(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return t.set(e, n + 1), !1;
}
const ht = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (tt().__VUE_HMR_RUNTIME__ = {
  createRecord: ft(ss),
  rerender: ft(rs),
  reload: ft(as)
});
const Je = /* @__PURE__ */ new Map();
function ss(t, e) {
  return Je.has(t) ? !1 : (Je.set(t, {
    initialDef: Ye(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ye(t) {
  return Yn(t) ? t.__vccOpts : t;
}
function rs(t, e) {
  const n = Je.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((o) => {
    e && (o.render = e, Ye(o.type).render = e), o.renderCache = [], o.update();
  }));
}
function as(t, e) {
  const n = Je.get(t);
  if (!n) return;
  e = Ye(e), Gt(n.initialDef, e);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], a = Ye(r.type);
    let i = ht.get(a);
    i || (a !== n.initialDef && Gt(a, e), ht.set(a, i = /* @__PURE__ */ new Set())), i.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (i.add(r), r.ceReload(e.styles), i.delete(r)) : r.parent ? $t(() => {
      r.parent.update(), i.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(a);
  }
  Ln(() => {
    ht.clear();
  });
}
function Gt(t, e) {
  P(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function ft(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let fe, Be = [];
function jn(t, e) {
  var n, o;
  fe = t, fe ? (fe.enabled = !0, Be.forEach(({ event: s, args: r }) => fe.emit(s, ...r)), Be = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    jn(r, e);
  }), setTimeout(() => {
    fe || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Be = []);
  }, 3e3)) : Be = [];
}
let ue = null, is = null;
const us = (t) => t.__isTeleport;
function Fn(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Fn(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
tt().requestIdleCallback;
tt().cancelIdleCallback;
const cs = Symbol.for("v-ndc"), At = (t) => t ? Ls(t) ? Vs(t) : At(t.parent) : null, ke = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ P(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => process.env.NODE_ENV !== "production" ? je(t.props) : t.props,
    $attrs: (t) => process.env.NODE_ENV !== "production" ? je(t.attrs) : t.attrs,
    $slots: (t) => process.env.NODE_ENV !== "production" ? je(t.slots) : t.slots,
    $refs: (t) => process.env.NODE_ENV !== "production" ? je(t.refs) : t.refs,
    $parent: (t) => At(t.parent),
    $root: (t) => At(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => hs(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      $t(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = ts.bind(t.proxy)),
    $watch: (t) => _s.bind(t)
  })
), pt = (t, e) => t !== L && !t.__isScriptSetup && _(t, e), ls = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: a, type: i, appContext: c } = t;
    if (process.env.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    let l;
    if (e[0] !== "$") {
      const d = a[e];
      if (d !== void 0)
        switch (d) {
          case 1:
            return o[e];
          case 2:
            return s[e];
          case 4:
            return n[e];
          case 3:
            return r[e];
        }
      else {
        if (pt(o, e))
          return a[e] = 1, o[e];
        if (s !== L && _(s, e))
          return a[e] = 2, s[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (l = t.propsOptions[0]) && _(l, e)
        )
          return a[e] = 3, r[e];
        if (n !== L && _(n, e))
          return a[e] = 4, n[e];
        a[e] = 0;
      }
    }
    const p = ke[e];
    let u, h;
    if (p)
      return e === "$attrs" ? (S(t.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && e === "$slots" && S(t, "get", e), p(t);
    if (
      // css module (injected by vue-loader)
      (u = i.__cssModules) && (u = u[e])
    )
      return u;
    if (n !== L && _(n, e))
      return a[e] = 4, n[e];
    if (
      // global properties
      h = c.config.globalProperties, _(h, e)
    )
      return h[e];
    process.env.NODE_ENV;
  },
  set({ _: t }, e, n) {
    const { data: o, setupState: s, ctx: r } = t;
    return pt(s, e) ? (s[e] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && _(s, e) ? (M(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : o !== L && _(o, e) ? (o[e] = n, !0) : _(t.props, e) ? (process.env.NODE_ENV !== "production" && M(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && M(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && e in t.appContext.config.globalProperties ? Object.defineProperty(r, e, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: o, appContext: s, propsOptions: r }
  }, a) {
    let i;
    return !!n[a] || t !== L && _(t, a) || pt(e, a) || (i = r[0]) && _(i, a) || _(o, a) || _(ke, a) || _(s.config.globalProperties, a);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : _(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
process.env.NODE_ENV !== "production" && (ls.ownKeys = (t) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function Jt(t) {
  return D(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function hs(t) {
  const e = t.type, { mixins: n, extends: o } = e, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: a }
  } = t.appContext, i = r.get(e);
  let c;
  return i ? c = i : !s.length && !n && !o ? c = e : (c = {}, s.length && s.forEach(
    (l) => Ze(c, l, a, !0)
  ), Ze(c, e, a)), N(e) && r.set(e, c), c;
}
function Ze(t, e, n, o = !1) {
  const { mixins: s, extends: r } = e;
  r && Ze(t, r, n, !0), s && s.forEach(
    (a) => Ze(t, a, n, !0)
  );
  for (const a in e)
    if (o && a === "expose")
      process.env.NODE_ENV !== "production" && M(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const i = fs[a] || n && n[a];
      t[a] = i ? i(t[a], e[a]) : e[a];
    }
  return t;
}
const fs = {
  data: Yt,
  props: qt,
  emits: qt,
  // objects
  methods: _e,
  computed: _e,
  // lifecycle
  beforeCreate: w,
  created: w,
  beforeMount: w,
  mounted: w,
  beforeUpdate: w,
  updated: w,
  beforeDestroy: w,
  beforeUnmount: w,
  destroyed: w,
  unmounted: w,
  activated: w,
  deactivated: w,
  errorCaptured: w,
  serverPrefetch: w,
  // assets
  components: _e,
  directives: _e,
  // watch
  watch: ds,
  // provide / inject
  provide: Yt,
  inject: ps
};
function Yt(t, e) {
  return e ? t ? function() {
    return P(
      z(t) ? t.call(this, this) : t,
      z(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function ps(t, e) {
  return _e(Zt(t), Zt(e));
}
function Zt(t) {
  if (D(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function w(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function _e(t, e) {
  return t ? P(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function qt(t, e) {
  return t ? D(t) && D(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : P(
    /* @__PURE__ */ Object.create(null),
    Jt(t),
    Jt(e ?? {})
  ) : e;
}
function ds(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = P(/* @__PURE__ */ Object.create(null), t);
  for (const o in e)
    n[o] = w(t[o], e[o]);
  return n;
}
let gs = null;
function ys(t, e, n = !1) {
  const o = Ie || ue;
  if (o || gs) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && t in s)
      return s[t];
    if (arguments.length > 1)
      return n && z(e) ? e.call(o && o.proxy) : e;
    process.env.NODE_ENV !== "production" && M(`injection "${String(t)}" not found.`);
  } else process.env.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
const ms = {}, Bn = (t) => Object.getPrototypeOf(t) === ms, Ds = zs, Cs = Symbol.for("v-scx"), Ms = () => {
  {
    const t = ys(Cs);
    return t || process.env.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function Es(t, e, n = L) {
  const { immediate: o, deep: s, flush: r, once: a } = n;
  process.env.NODE_ENV !== "production" && !e && (o !== void 0 && M(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && M(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), a !== void 0 && M(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const i = P({}, n);
  process.env.NODE_ENV !== "production" && (i.onWarn = M);
  const c = e && o || !e && r !== "post";
  let l;
  if (Qe) {
    if (r === "sync") {
      const d = Ms();
      l = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!c) {
      const d = () => {
      };
      return d.stop = ye, d.resume = ye, d.pause = ye, d;
    }
  }
  const p = Ie;
  i.call = (d, E, T) => Tn(d, p, E, T);
  let u = !1;
  r === "post" ? i.scheduler = (d) => {
    Ds(d, p && p.suspense);
  } : r !== "sync" && (u = !0, i.scheduler = (d, E) => {
    E ? d() : $t(d);
  }), i.augmentJob = (d) => {
    e && (d.flags |= 4), u && (d.flags |= 2, p && (d.id = p.uid, d.i = p));
  };
  const h = Wo(t, e, i);
  return Qe && (l ? l.push(h) : c && h()), h;
}
function _s(t, e, n) {
  const o = this.proxy, s = j(t) ? t.includes(".") ? As(o, t) : () => o[t] : t.bind(o, o);
  let r;
  z(e) ? r = e : (r = e.handler, n = e);
  const a = xs(this), i = Es(s, r.bind(o), n);
  return a(), i;
}
function As(t, e) {
  const n = e.split(".");
  return () => {
    let o = t;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const Ss = (t) => t.__isSuspense;
function zs(t, e) {
  e && e.pendingBranch ? D(t) ? e.effects.push(...t) : e.effects.push(t) : Ln(t);
}
const Kn = Symbol.for("v-fgt"), ks = Symbol.for("v-txt"), ws = Symbol.for("v-cmt");
let pe = null;
function bs(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const vs = (...t) => Un(
  ...t
), Hn = ({ key: t }) => t ?? null, He = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? j(t) || k(t) || z(t) ? { i: ue, r: t, k: e, f: !!n } : t : null);
function Ns(t, e = null, n = null, o = 0, s = null, r = t === Kn ? 0 : 1, a = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Hn(e),
    ref: e && He(e),
    scopeId: is,
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
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ue
  };
  return i ? (jt(c, n), r & 128 && t.normalize(c)) : n && (c.shapeFlag |= j(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && M("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !a && // has current parent block
  pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && pe.push(c), c;
}
const Os = process.env.NODE_ENV !== "production" ? vs : Un;
function Un(t, e = null, n = null, o = 0, s = null, r = !1) {
  if ((!t || t === cs) && (process.env.NODE_ENV !== "production" && !t && M(`Invalid vnode type when creating vnode: ${t}.`), t = ws), bs(t)) {
    const i = qe(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && jt(i, n), !r && pe && (i.shapeFlag & 6 ? pe[pe.indexOf(t)] = i : pe.push(i)), i.patchFlag = -2, i;
  }
  if (Yn(t) && (t = t.__vccOpts), e) {
    e = Ps(e);
    let { class: i, style: c } = e;
    i && !j(i) && (e.class = Nt(i)), N(c) && (Ue(c) && !D(c) && (c = P({}, c)), e.style = vt(c));
  }
  const a = j(t) ? 1 : Ss(t) ? 128 : us(t) ? 64 : N(t) ? 4 : z(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && Ue(t) && (t = g(t), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), Ns(
    t,
    e,
    n,
    o,
    s,
    a,
    r,
    !0
  );
}
function Ps(t) {
  return t ? Ue(t) || Bn(t) ? P({}, t) : t : null;
}
function qe(t, e, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: a, children: i, transition: c } = t, l = e ? Ts(s || {}, e) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: l,
    key: l && Hn(l),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? D(r) ? r.concat(He(e)) : [r, He(e)] : He(e)
    ) : r,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && a === -1 && D(i) ? i.map(Wn) : i,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Kn ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: t.ssContent && qe(t.ssContent),
    ssFallback: t.ssFallback && qe(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return c && o && Fn(
    p,
    c.clone(p)
  ), p;
}
function Wn(t) {
  const e = qe(t);
  return D(t.children) && (e.children = t.children.map(Wn)), e;
}
function Rs(t = " ", e = 0) {
  return Os(ks, null, t, e);
}
function jt(t, e) {
  let n = 0;
  const { shapeFlag: o } = t;
  if (e == null)
    e = null;
  else if (D(e))
    n = 16;
  else if (typeof e == "object")
    if (o & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), jt(t, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !e._ && !Bn(e) && (e._ctx = ue);
  else z(e) ? (e = { default: e, _ctx: ue }, n = 32) : (e = String(e), o & 64 ? (n = 16, e = [Rs(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Ts(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (const s in o)
      if (s === "class")
        e.class !== o.class && (e.class = Nt([e.class, o.class]));
      else if (s === "style")
        e.style = vt([e.style, o.style]);
      else if (oo(s)) {
        const r = e[s], a = o[s];
        a && r !== a && !(D(r) && r.includes(a)) && (e[s] = r ? [].concat(r, a) : a);
      } else s !== "" && (e[s] = o[s]);
  }
  return e;
}
let Ie = null;
const Is = () => Ie || ue;
let St;
{
  const t = tt(), e = (n, o) => {
    let s;
    return (s = t[n]) || (s = t[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((a) => a(r)) : s[0](r);
    };
  };
  St = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ie = n
  ), e(
    "__VUE_SSR_SETTERS__",
    (n) => Qe = n
  );
}
const xs = (t) => {
  const e = Ie;
  return St(t), t.scope.on(), () => {
    t.scope.off(), St(e);
  };
};
function Ls(t) {
  return t.vnode.shapeFlag & 4;
}
let Qe = !1;
process.env.NODE_ENV;
function Vs(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Bo(xo(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in ke)
        return ke[n](t);
    },
    has(e, n) {
      return n in e || n in ke;
    }
  })) : t.proxy;
}
const $s = /(?:^|[-_])(\w)/g, js = (t) => t.replace($s, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Gn(t, e = !0) {
  return z(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Jn(t, e, n = !1) {
  let o = Gn(e);
  if (!o && e.__file) {
    const s = e.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && t && t.parent) {
    const s = (r) => {
      for (const a in r)
        if (r[a] === e)
          return a;
    };
    o = s(
      t.components || t.parent.type.components
    ) || s(t.appContext.components);
  }
  return o ? js(o) : n ? "App" : "Anonymous";
}
function Yn(t) {
  return z(t) && "__vccOpts" in t;
}
const Ae = (t, e) => {
  const n = Ho(t, e, Qe);
  if (process.env.NODE_ENV !== "production") {
    const o = Is();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Fs() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(u) {
      return N(u) ? u.__isVue ? ["div", t, "VueInstance"] : k(u) ? [
        "div",
        {},
        ["span", t, p(u)],
        "<",
        // avoid debugger accessing value affecting behavior
        i("_value" in u ? u._value : u),
        ">"
      ] : De(u) ? [
        "div",
        {},
        ["span", t, O(u) ? "ShallowReactive" : "Reactive"],
        "<",
        i(u),
        `>${W(u) ? " (readonly)" : ""}`
      ] : W(u) ? [
        "div",
        {},
        ["span", t, O(u) ? "ShallowReadonly" : "Readonly"],
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
    const h = [];
    u.type.props && u.props && h.push(a("props", g(u.props))), u.setupState !== L && h.push(a("setup", u.setupState)), u.data !== L && h.push(a("data", g(u.data)));
    const d = c(u, "computed");
    d && h.push(a("computed", d));
    const E = c(u, "inject");
    return E && h.push(a("injected", E)), h.push([
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
    ]), h;
  }
  function a(u, h) {
    return h = P({}, h), Object.keys(h).length ? [
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
        ...Object.keys(h).map((d) => [
          "div",
          {},
          ["span", o, d + ": "],
          i(h[d], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(u, h = !0) {
    return typeof u == "number" ? ["span", e, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : N(u) ? ["object", { object: h ? g(u) : u }] : ["span", n, String(u)];
  }
  function c(u, h) {
    const d = u.type;
    if (z(d))
      return;
    const E = {};
    for (const T in u.ctx)
      l(d, T, h) && (E[T] = u.ctx[T]);
    return E;
  }
  function l(u, h, d) {
    const E = u[d];
    if (D(E) && E.includes(h) || N(E) && h in E || u.extends && l(u.extends, h, d) || u.mixins && u.mixins.some((T) => l(T, h, d)))
      return !0;
  }
  function p(u) {
    return O(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
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
function Bs() {
  Fs();
}
process.env.NODE_ENV !== "production" && Bs();
function dt(t) {
  return k(t) ? t.value : t;
}
function Zn(t, e = "=", n = "&") {
  return H(
    t,
    (o, s) => `${s}${e}${encodeURIComponent(String(o).trim())}`
  ).sort().join(n);
}
function R() {
  return typeof window < "u";
}
function rt(t) {
  return t == null;
}
function ne(t) {
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
        return Array.isArray(t) ? t.length > 0 : Object.values(t).some((e) => !rt(e));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(t);
      case "undefined":
        return !1;
      default:
        return !!t;
    }
  return !1;
}
function te(t) {
  return Ne(t) && !Array.isArray(t);
}
function zt(t) {
  return typeof t == "string";
}
function Ks(t, e) {
  return Math.floor(Math.random() * (e - t + 1) + t);
}
function ie(t) {
  return Array.isArray(t) ? t : [t];
}
function qn(t) {
  return R() && t === window;
}
function Z(t) {
  if (R())
    return qn(t) ? document.body : zt(t) ? document.querySelector(t) ?? void 0 : t;
}
function Qt(t) {
  return qn(t) ? t : Z(t);
}
function Hs(t) {
  var e;
  return !!((e = Z(t)) != null && e.closest("html"));
}
class Xt {
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
  constructor(e, n = ["click"], o, s, r) {
    /**
     * Element.
     *
     * Элемент.
     */
    f(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.
     *
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     */
    f(this, "elementControl");
    f(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.
     *
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     */
    f(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.
     *
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     */
    f(this, "listenerRecent", (e) => {
      var n, o;
      Hs(this.elementControl) ? ((n = this.listener) == null || n.call(this.element, e, this.detail), Ne(this.options) && ((o = this.options) != null && o.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    f(this, "activity", !1);
    f(this, "activityItems", []);
    this.listener = o, this.options = s, this.detail = r, this.element = Qt(e), this.elementControl = Z(e), this.type = ie(n);
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
    const n = Qt(e);
    return this.elementControlEdit || (this.elementControl = Z(e)), this.element = n, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(e) {
    return this.elementControl = Z(e), this.elementControlEdit = !rt(this.elementControl), this.elementControlEdit || (this.elementControl = Z(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(e) {
    return this.type = ie(e), this.reset(), this;
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
        var o;
        return (o = this.element) == null ? void 0 : o.dispatchEvent(new CustomEvent(n, { detail: e }));
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
      listener: o,
      observer: s
    }) => {
      s ? s.disconnect() : o ? e == null || e.removeEventListener(n, o) : e == null || e.removeEventListener(n, this.listenerRecent);
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
      const n = (o) => {
        e || (e = !0, requestAnimationFrame(() => {
          this.listenerRecent(o), e = !1;
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
const en = "ui-loading", we = class we {
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
    new Xt(window, en, e).setElementControl(n).start();
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
f(we, "value", 0), f(we, "event"), R() && (we.event = new Xt(window, en));
let oe = we;
function Us(t) {
  return JSON.parse(JSON.stringify(t));
}
function Ws(t, e) {
  return rt(t) ? !1 : Array.isArray(e) ? e.includes(t) : t === e;
}
let tn = "ui-storage";
class Ft {
  /**
   * Constructor
   * @param name value name /<br>название значения
   * @param isSession should we use a session? /<br>использовать ли сессию?
   */
  constructor(e, n = !1) {
    f(this, "value");
    f(this, "age");
    this.name = e, this.isSession = n;
    const o = `${n ? "session" : "storage"}#${e}`;
    if (o in gt)
      return gt[o];
    const s = this.getValue();
    s && (this.value = s.value, this.age = s.age), gt[o] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(e) {
    tn = e;
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
    var n, o;
    return this.value = q(e), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? (n = this.getMethod()) == null || n.removeItem(this.getIndex()) : (o = this.getMethod()) == null || o.setItem(this.getIndex(), JSON.stringify({
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
    return rt(e) || this.age && this.age + e * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (R())
      return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${tn}${this.name}`;
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
      } catch (o) {
        console.error("DataStorage", o);
      }
  }
}
const gt = {}, Gs = /* @__PURE__ */ JSON.parse('[{"country":"US","countryAlternative":["EN"],"language":"en","languageAlternative":["us"],"firstDay":"Su","zone":"America/New_York","phoneCode":"1","phoneMask":["+1-***-***-****"]},{"country":"GB","countryAlternative":["UK"],"language":"en","firstDay":"Mo","zone":"Europe/London","phoneCode":"44","phoneMask":["+44-**-****-****"]},{"country":"AF","language":"fa","firstDay":"Sa","zone":"Asia/Kabul","phoneCode":"93","phoneMask":["+93-**-***-****"]},{"country":"AL","language":"sq","firstDay":"Mo","zone":"Europe/Tirane","phoneCode":"355","phoneMask":["+355-***-***-***"]},{"country":"DZ","language":"ar","firstDay":"Sa","zone":"Africa/Algiers","phoneCode":"213","phoneMask":["+213-**-***-****"]},{"country":"AS","language":"en","firstDay":null,"zone":"Pacific/Pago_Pago","phoneCode":"1-684","phoneMask":["+1-684-***-****"]},{"country":"AD","language":"ca","firstDay":"Mo","zone":"Europe/Andorra","phoneCode":"376","phoneMask":["+376-***-***"]},{"country":"AO","language":"pt","firstDay":null,"zone":"Africa/Lagos","phoneCode":"244","phoneMask":["+244-***-***-***"]},{"country":"AI","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-264","phoneMask":["+1-264-***-****"]},{"country":"AQ","language":"en","firstDay":null,"zone":"Antarctica/Troll","phoneCode":"672","phoneMask":["+672-1-**-***"]},{"country":"AG","language":"en","firstDay":null,"zone":"America/Antigua","phoneCode":"1-268","phoneMask":["+1-268-***-****"]},{"country":"AR","language":"es","firstDay":"Su","zone":"America/Argentina/Buenos_Aires","phoneCode":"54","phoneMask":["+54-***-***-****"]},{"country":"AM","language":"hy","firstDay":"Mo","zone":"Asia/Yerevan","phoneCode":"374","phoneMask":["+374-**-***-***"]},{"country":"AW","language":"nl","firstDay":null,"zone":"America/Curacao","phoneCode":"297","phoneMask":["+297-***-****"]},{"country":"AU","language":"en","firstDay":"Mo","zone":"Australia/Sydney","phoneCode":"61","phoneMask":["+61-*-****-****"]},{"country":"AT","language":"de","firstDay":"Mo","zone":"Europe/Vienna","phoneCode":"43","phoneMask":["+43-***-***-****","+43-***-***-*****"]},{"country":"AZ","language":"az","firstDay":"Mo","zone":"Asia/Baku","phoneCode":"994","phoneMask":"+994-**-***-**-**"},{"country":"BS","language":"en","firstDay":null,"zone":"America/Nassau","phoneCode":"1-242","phoneMask":"+1-242-***-****"},{"country":"BH","language":"ar","firstDay":"Sa","zone":"Asia/Bahrain","phoneCode":"973","phoneMask":"+973-****-****"},{"country":"BD","language":"bn","firstDay":null,"zone":"Asia/Dhaka","phoneCode":"880","phoneMask":"+880-**-***-***"},{"country":"BB","language":"en","firstDay":null,"zone":"America/Barbados","phoneCode":"1-246","phoneMask":"+1-246-***-****"},{"country":"BY","language":"be","firstDay":"Mo","zone":"Europe/Minsk","phoneCode":"375","phoneMask":"+375-**-***-**-**"},{"country":"BE","language":"nl","firstDay":"Mo","zone":"Europe/Brussels","phoneCode":"32","phoneMask":"+32-***-***-***"},{"country":"BZ","language":"en","firstDay":"Su","zone":"America/Belize","phoneCode":"501","phoneMask":"+501-***-****"},{"country":"BJ","language":"fr","firstDay":null,"zone":"Africa/Lagos","phoneCode":"229","phoneMask":"+229-**-**-****"},{"country":"BM","language":"en","firstDay":null,"zone":"Atlantic/Bermuda","phoneCode":"1-441","phoneMask":"+1-441-***-****"},{"country":"BT","language":"dz","firstDay":null,"zone":"Asia/Thimphu","phoneCode":"975","phoneMask":["+975-*-***-***","+975-17-***-***"]},{"country":"BO","language":"es","firstDay":"Su","zone":"America/La_Paz","phoneCode":"591","phoneMask":"+591-*-***-****"},{"country":"BA","language":"bs","firstDay":null,"zone":"Europe/Belgrade","phoneCode":"387","phoneMask":["+387-**-****","+387-**-*****"]},{"country":"BW","language":"en","firstDay":null,"zone":"Africa/Maputo","phoneCode":"267","phoneMask":"+267-**-***-***"},{"country":"BR","language":"pt","firstDay":"Su","zone":"America/Sao_Paulo","phoneCode":"55","phoneMask":["+55-**-****-****","+55-**-*****-****"]},{"country":"IO","language":"en","firstDay":null,"zone":"Indian/Chagos","phoneCode":"246","phoneMask":"+246-***-****"},{"country":"VG","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-284","phoneMask":"+1-284-***-****"},{"country":"BN","language":"ms","firstDay":"Mo","zone":"Asia/Brunei","phoneCode":"673","phoneMask":"+673-***-****"},{"country":"BG","language":"bg","firstDay":"Mo","zone":"Europe/Sofia","phoneCode":"359","phoneMask":"+359-***-***-***"},{"country":"BF","language":"fr","firstDay":null,"zone":"Africa/Abidjan","phoneCode":"226","phoneMask":"+226-**-**-****"},{"country":"BI","language":"fr","firstDay":null,"zone":"Africa/Maputo","phoneCode":"257","phoneMask":"+257-**-**-****"},{"country":"KH","language":"km","firstDay":null,"zone":"Asia/Phnom_Penh","phoneCode":"855","phoneMask":"+855-**-***-***"},{"country":"CM","phoneCode":"237","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":"+237-****-****"},{"country":"CA","phoneCode":"1","zone":"America/Toronto","language":"en","firstDay":"Su","phoneMask":"+1-***-***-****"},{"country":"CV","phoneCode":"238","zone":"Atlantic/Cape_Verde","language":"pt","firstDay":null,"phoneMask":"+238-***-**-**"},{"country":"KY","phoneCode":"1-345","zone":"America/Cayman","language":"en","firstDay":null,"phoneMask":"+1-345-***-****"},{"country":"CF","phoneCode":"236","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+236-**-**-****"},{"country":"TD","phoneCode":"235","zone":"Africa/Ndjamena","language":"fr","firstDay":null,"phoneMask":"+235-**-**-**-**"},{"country":"CL","phoneCode":"56","zone":"America/Santiago","language":"es","firstDay":"Su","phoneMask":"+56-*-****-****"},{"country":"CN","phoneCode":"86","zone":"Asia/Shanghai","language":"zh","firstDay":"Su","phoneMask":["+86-***-****-***","+86-***-****-****","+86-**-*****-*****"]},{"country":"CX","phoneCode":"61","zone":"Indian/Christmas","language":"en","firstDay":null},{"country":"CC","phoneCode":"61","zone":"Indian/Cocos","language":"ms","firstDay":null},{"country":"CO","phoneCode":"57","zone":"America/Bogota","language":"es","firstDay":"Su","phoneMask":"+57-***-***-****"},{"country":"KM","phoneCode":"269","zone":"Indian/Comoro","language":"ar","firstDay":null,"phoneMask":"+269-**-*****"},{"country":"CK","phoneCode":"682","zone":"Pacific/Rarotonga","language":"en","firstDay":null,"phoneMask":"+682-**-***"},{"country":"CR","phoneCode":"506","zone":"America/Costa_Rica","language":"es","firstDay":"Su","phoneMask":"+506-****-****"},{"country":"HR","phoneCode":"385","zone":"Europe/Belgrade","language":"hr","firstDay":"Mo","phoneMask":"+385-**-***-***"},{"country":"CU","phoneCode":"53","zone":"America/Havana","language":"es","firstDay":null,"phoneMask":"+53-*-***-****"},{"country":"CW","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+599-***-****"},{"country":"CY","phoneCode":"357","zone":"Asia/Nicosia","language":"el","firstDay":null,"phoneMask":"+357-**-***-***"},{"country":"CZ","phoneCode":"420","zone":"Europe/Prague","language":"cs","languageAlternative":["cz"],"firstDay":"Mo","phoneMask":"+420-***-***-***"},{"country":"CD","phoneCode":"243","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+243-***-***-***"},{"country":"DK","phoneCode":"45","zone":"Europe/Copenhagen","language":"da","firstDay":"Mo","phoneMask":"+45-**-**-**-**"},{"country":"DJ","phoneCode":"253","zone":"Africa/Djibouti","language":"fr","firstDay":null,"phoneMask":"+253-**-**-**-**"},{"country":"DM","phoneCode":"1-767","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-767-***-****"},{"country":"DO","phoneCode":"1-809","zone":"North America","language":"America/Santo_Domingo","firstDay":"Su","phoneMask":["+1-809-***-****","+1-829-***-****","+1-849-***-****"]},{"country":"TL","phoneCode":"670","zone":"Asia/Dili","language":"tet","firstDay":null,"phoneMask":["+670-***-****","+670-77-*-*****","+670-78-*-*****"]},{"country":"EC","phoneCode":"593","zone":"America/Guayaquil","language":"es","firstDay":"Su","phoneMask":["+593-*-***-****","+593-**-***-****"]},{"country":"EG","phoneCode":"20","zone":"Africa/Cairo","language":"ar","firstDay":"Sa","phoneMask":"+20-***-***-****"},{"country":"SV","phoneCode":"503","zone":"America/El_Salvador","language":"es","firstDay":"Su","phoneMask":"+503-**-**-****"},{"country":"GQ","phoneCode":"240","zone":"Africa/Lagos","language":"es","firstDay":null,"phoneMask":"+240-**-***-****"},{"country":"ER","phoneCode":"291","zone":"Africa/Asmara","language":"aa","firstDay":null,"phoneMask":"+291-*-***-***"},{"country":"EE","phoneCode":"372","zone":"Europe/Tallinn","language":"et","firstDay":"Mo","phoneMask":["+372-***-****","+372-****-****"]},{"country":"ET","phoneCode":"251","zone":"Africa/Addis_Ababa","language":"am","firstDay":null,"phoneMask":"+251-**-***-****"},{"country":"FK","phoneCode":"500","zone":"Atlantic/Stanley","language":"en","firstDay":null,"phoneMask":"+500-*****"},{"country":"FO","phoneCode":"298","zone":"Atlantic/Faroe","language":"fo","firstDay":null,"phoneMask":"+298-***-***"},{"country":"FJ","phoneCode":"679","zone":"Pacific/Fiji","language":"en","firstDay":null,"phoneMask":"+679-**-*****"},{"country":"FI","phoneCode":"358","zone":"Europe/Helsinki","language":"fi","firstDay":"Mo","phoneMask":["+358-***-***-**-*","+358-***-***-**-**"]},{"country":"FR","phoneCode":"33","zone":"Europe/Paris","language":"fr","firstDay":"Mo","phoneMask":["+33-***-***-***","+262-*****-****","+508-**-****","+590-***-***-***"]},{"country":"PF","phoneCode":"689","zone":"Pacific/Tahiti","language":"fr","firstDay":null,"phoneMask":"+689-**-**-**"},{"country":"GA","phoneCode":"241","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+241-*-**-**-**"},{"country":"GM","phoneCode":"220","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+220-***-**-**"},{"country":"GE","phoneCode":"995","zone":"Asia/Tbilisi","language":"ka","firstDay":"Mo","phoneMask":"+995-***-***-***"},{"country":"DE","phoneCode":"49","zone":"Europe/Berlin","language":"de","firstDay":"Mo","phoneMask":["+49-***-***","+49-***-***-****","+49-****-***-****"]},{"country":"GH","phoneCode":"233","zone":"Africa/Accra","language":"en","firstDay":null,"phoneMask":"+233-***-***-***"},{"country":"GI","phoneCode":"350","zone":"Europe/Gibraltar","language":"en","firstDay":null,"phoneMask":"+350-***-*****"},{"country":"GR","phoneCode":"30","zone":"Europe/Athens","language":"el","firstDay":"Mo","phoneMask":"+30-***-***-****"},{"country":"GL","phoneCode":"299","zone":"America/Godthab","language":"kl","firstDay":null,"phoneMask":"+299-**-**-**"},{"country":"GD","phoneCode":"1-473","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-473-***-****"},{"country":"GU","phoneCode":"1-671","zone":"Pacific/Guam","language":"en","firstDay":null,"phoneMask":"+1-671-***-****"},{"country":"GT","phoneCode":"502","zone":"America/Guatemala","language":"es","firstDay":"Su","phoneMask":"+502-*-***-****"},{"country":"GG","phoneCode":"44-1481","zone":"Europe/London","language":"en","firstDay":null},{"country":"GN","phoneCode":"224","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+224-**-***-***"},{"country":"GW","phoneCode":"245","zone":"Africa/Bissau","language":"pt","firstDay":null,"phoneMask":"+245-*-******"},{"country":"GY","phoneCode":"592","zone":"America/Guyana","language":"en","firstDay":null,"phoneMask":"+592-***-****"},{"country":"HT","phoneCode":"509","zone":"America/Port-au-Prince","language":"ht","firstDay":null,"phoneMask":"+509-**-**-****"},{"country":"HN","phoneCode":"504","zone":"America/Tegucigalpa","language":"es","firstDay":"Su","phoneMask":"+504-****-****"},{"country":"HK","phoneCode":"852","zone":"Asia/Hong_Kong","language":"zh","firstDay":"Su","phoneMask":"+852-****-****"},{"country":"HU","phoneCode":"36","zone":"Europe/Budapest","language":"hu","firstDay":"Mo","phoneMask":"+36-***-***-***","nameFormat":"lf"},{"country":"IS","phoneCode":"354","zone":"Atlantic/Reykjavik","language":"is","firstDay":"Mo","phoneMask":"+354-***-****"},{"country":"IN","phoneCode":"91","zone":"Asia/Kolkata","language":"en","firstDay":"Mo","phoneMask":"+91-****-***-***"},{"country":"ID","phoneCode":"62","zone":"Asia/Jakarta","language":"id","firstDay":"Mo","phoneMask":["+62-**-***-**","+62-**-***-***","+62-**-***-****","+62-8-**-***-***","+62-8-**-***-****","+62-8-**-***-**-***"]},{"country":"IR","phoneCode":"98","zone":"Asia/Tehran","language":"fa","firstDay":"Sa","phoneMask":"+98-***-***-****"},{"country":"IQ","phoneCode":"964","zone":"Asia/Baghdad","language":"ar","firstDay":"Sa","phoneMask":"+964-***-***-****"},{"country":"IE","firstDay":"Mo","language":"en","phoneCode":"353","phoneMask":"+353-***-***-***","zone":"Europe/Dublin"},{"country":"IM","firstDay":null,"language":"Pound","phoneCode":"44-1624","zone":"Isle of Man"},{"country":"IL","firstDay":"Su","language":"he","languageAlternative":["il"],"phoneCode":"972","phoneMask":["+972-*-***-****","+972-5-*-***-****"],"zone":"Asia/Jerusalem"},{"country":"IT","firstDay":"Mo","language":"it","phoneCode":"39","phoneMask":"+39-***-****-***","zone":"Europe/Rome"},{"country":"CI","phoneCode":"225","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+225-**-***-***"},{"country":"JM","phoneCode":"1-876","zone":"America/Jamaica","language":"en","firstDay":"Su","phoneMask":"+1-876-***-****"},{"country":"JP","phoneCode":"81","zone":"Asia/Tokyo","language":"ja","firstDay":"Su","phoneMask":["+81-***-***-***","+81-**-****-****"],"nameFormat":"lf"},{"country":"JE","phoneCode":"44-1534","zone":"Europe/London","language":"en","firstDay":null},{"country":"JO","phoneCode":"962","zone":"Asia/Amman","language":"ar","firstDay":"Sa","phoneMask":"+962-*-****-****"},{"country":"KZ","phoneCode":"7","zone":"Asia/Almaty","language":"kk","firstDay":"Mo","phoneMask":["+7-6-**-***-**-**","+7-7-**-***-**-**"],"nameFormat":"lf"},{"country":"KE","phoneCode":"254","zone":"Africa/Nairobi","language":"en","firstDay":"Su","phoneMask":"+254-***-******"},{"country":"KI","phoneCode":"686","zone":"Pacific/Tarawa","language":"en","firstDay":null,"phoneMask":"+686-**-***"},{"country":"XK","phoneCode":"383","zone":"Europe/Belgrade","language":"sq","firstDay":"Mo"},{"country":"KW","phoneCode":"965","zone":"Asia/Kuwait","language":"ar","firstDay":"Sa","phoneMask":"+965-****-****"},{"country":"KG","phoneCode":"996","zone":"Asia/Bishkek","language":"ky","firstDay":"Mo","phoneMask":"+996-***-***-***"},{"country":"LA","phoneCode":"856","zone":"Asia/Vientiane","language":"lo","firstDay":null,"phoneMask":["+856-**-***-***","+856-20-**-***-***"]},{"country":"LV","phoneCode":"371","zone":"Europe/Riga","language":"lv","firstDay":"Mo","phoneMask":"+371-**-***-***"},{"country":"LB","phoneCode":"961","zone":"Asia/Beirut","language":"ar","firstDay":"Mo","phoneMask":["+961-*-***-***","+961-**-***-***"]},{"country":"LS","phoneCode":"266","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+266-*-***-****"},{"country":"LR","phoneCode":"231","zone":"Africa/Monrovia","language":"en","firstDay":null,"phoneMask":"+231-**-***-***"},{"country":"LY","phoneCode":"218","zone":"Africa/Tripoli","language":"ar","firstDay":"Sa","phoneMask":["+218-**-***-***","+218-21-***-****"]},{"country":"LI","phoneCode":"423","zone":"Europe/Zurich","language":"de","firstDay":null,"phoneMask":"+423-***-***-****"},{"country":"LT","phoneCode":"370","zone":"Europe/Vilnius","language":"lt","firstDay":"Mo","phoneMask":"+370-***-**-***"},{"country":"LU","phoneCode":"352","zone":"Europe/Luxembourg","language":"lb","firstDay":"Mo","phoneMask":"+352-***-***-***"},{"country":"MO","phoneCode":"853","zone":"Asia/Macau","language":"zh","firstDay":null,"phoneMask":"+853-****-****"},{"country":"MK","phoneCode":"389","zone":"Europe/Belgrade","language":"mk","firstDay":"Mo","phoneMask":"+389-**-***-***"},{"country":"MG","phoneCode":"261","zone":"Indian/Antananarivo","language":"fr","firstDay":null,"phoneMask":"+261-**-**-*****"},{"country":"MW","phoneCode":"265","zone":"Africa/Maputo","language":"ny","firstDay":null,"phoneMask":["+265-*-****-****","+265-1-***-***"]},{"country":"MY","phoneCode":"60","zone":"Asia/Kuala_Lumpur","language":"ms","firstDay":"Mo","phoneMask":["+60-*-***-***","+60-**-***-***","+60-**-***-****","+60-***-***-***"]},{"country":"MV","phoneCode":"960","zone":"Indian/Maldives","language":"dv","firstDay":null,"phoneMask":"+960-***-****"},{"country":"ML","phoneCode":"223","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+223-**-**-****"},{"country":"MT","phoneCode":"356","zone":"Europe/Malta","language":"mt","firstDay":null,"phoneMask":"+356-****-****"},{"country":"MH","phoneCode":"692","zone":"Pacific/Majuro","language":"mh","firstDay":null,"phoneMask":"+692-***-****"},{"country":"MR","phoneCode":"222","zone":"Africa/Abidjan","language":"ar","firstDay":null,"phoneMask":"+222-**-**-****"},{"country":"MU","phoneCode":"230","zone":"Indian/Mauritius","language":"en","firstDay":null,"phoneMask":"+230-***-****"},{"country":"YT","phoneCode":"262","zone":"Indian/Mayotte","language":"fr","firstDay":null},{"country":"MX","phoneCode":"52","zone":"America/Mexico_City","language":"es","firstDay":"Su","phoneMask":["+52-**-**-****","+52-***-***-****"]},{"country":"FM","phoneCode":"691","zone":"Pacific/Pohnpei","language":"en","firstDay":null,"phoneMask":"+691-***-****"},{"country":"MD","phoneCode":"373","zone":"Europe/Chisinau","language":"ro","firstDay":null,"phoneMask":"+373-****-****"},{"country":"MC","phoneCode":"377","zone":"Europe/Monaco","language":"fr","firstDay":"Mo","phoneMask":["+377-**-***-***","+377-***-***-***"]},{"country":"MN","phoneCode":"976","zone":"Asia/Ulaanbaatar","language":"mn","firstDay":"Mo","phoneMask":"+976-**-**-****"},{"country":"ME","phoneCode":"382","zone":"Europe/Belgrade","language":"sr","firstDay":null,"phoneMask":"+382-**-***-***"},{"country":"MS","phoneCode":"1-664","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-664-***-****"},{"country":"MA","phoneCode":"212","zone":"Africa/Casablanca","language":"ar","firstDay":"Mo","phoneMask":"+212-**-****-***"},{"country":"MZ","phoneCode":"258","zone":"Africa/Maputo","language":"pt","firstDay":null,"phoneMask":"+258-**-***-***"},{"country":"MM","phoneCode":"95","zone":"Asia/Rangoon","language":"my","firstDay":null,"phoneMask":["+95-***-***","+95-*-***-***","+95-**-***-***"]},{"country":"NA","phoneCode":"264","zone":"Africa/Windhoek","language":"en","firstDay":null,"phoneMask":"+264-**-***-****"},{"country":"NR","phoneCode":"674","zone":"Pacific/Nauru","language":"na","firstDay":null,"phoneMask":"+674-***-****"},{"country":"NP","phoneCode":"977","zone":"Asia/Kathmandu","language":"ne","firstDay":null,"phoneMask":"+977-**-***-***"},{"country":"NL","phoneCode":"31","zone":"Europe/Amsterdam","language":"nl","firstDay":"Mo","phoneMask":"+31-**-***-****"},{"country":"AN","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":["+599-***-****","+599-9-***-****"]},{"country":"NC","phoneCode":"687","zone":"Pacific/Noumea","language":"fr","firstDay":null,"phoneMask":"+687-**-****"},{"country":"NZ","phoneCode":"64","zone":"Pacific/Auckland","language":"en","firstDay":"Mo","phoneMask":["+64-**-***-***","+64-***-***-***","+64-***-***-****"]},{"country":"NI","phoneCode":"505","zone":"America/Managua","language":"es","firstDay":"Su","phoneMask":"+505-****-****"},{"country":"NE","phoneCode":"227","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+227-**-**-****"},{"country":"NG","phoneCode":"234","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":["+234-**-***-**","+234-**-***-***","+234-***-***-****"]},{"country":"NU","phoneCode":"683","zone":"Pacific/Niue","language":"niu","firstDay":null,"phoneMask":"+683-****"},{"country":"KP","phoneCode":"850","zone":"Asia/Pyongyang","language":"ko","firstDay":null,"phoneMask":["+850-***-***","+850-**-***-***","+850-****-****","+850-***-****-***","+850-****-*************","+850-191-***-****"]},{"country":"MP","phoneCode":"1-670","zone":"Pacific/Saipan","language":"fil","firstDay":null,"phoneMask":"+1-670-***-****"},{"country":"NO","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":"Mo","phoneMask":"+47-***-**-***"},{"country":"OM","phoneCode":"968","zone":"Asia/Muscat","language":"ar","firstDay":"Sa","phoneMask":"+968-**-***-***"},{"country":"PK","phoneCode":"92","zone":"Asia/Karachi","language":"ur","firstDay":"Mo","phoneMask":"+92-***-***-****"},{"country":"PW","phoneCode":"680","zone":"Pacific/Palau","language":"pau","firstDay":null,"phoneMask":"+680-***-****"},{"country":"PS","phoneCode":"970","zone":"Asia/Hebron","language":"ar","firstDay":null,"phoneMask":"+970-**-***-****"},{"country":"PA","phoneCode":"507","zone":"America/Panama","language":"es","firstDay":"Su","phoneMask":"+507-***-****"},{"country":"PG","phoneCode":"675","zone":"Pacific/Port_Moresby","language":"en","firstDay":null,"phoneMask":"+675-***-**-***"},{"country":"PY","phoneCode":"595","zone":"America/Asuncion","language":"es","firstDay":"Mo","phoneMask":"+595-***-***-***"},{"country":"PE","phoneCode":"51","zone":"America/Lima","language":"es","firstDay":"Su","phoneMask":"+51-***-***-***"},{"country":"PH","phoneCode":"63","zone":"Asia/Manila","language":"tl","firstDay":"Su","phoneMask":"+63-***-***-****"},{"country":"PN","phoneCode":"64","zone":"Pacific/Pitcairn","language":"en","firstDay":null},{"country":"PL","phoneCode":"48","zone":"Europe/Warsaw","language":"pl","firstDay":"Mo","phoneMask":"+48-***-***-***"},{"country":"PT","phoneCode":"351","zone":"Europe/Lisbon","language":"pt","firstDay":"Mo","phoneMask":"+351-**-***-****"},{"country":"PR","phoneCode":"1-787","zone":"San Juan","language":"Dollar","firstDay":"Su"},{"country":"QA","phoneCode":"974","zone":"Asia/Qatar","language":"ar","firstDay":"Sa","phoneMask":"+974-****-****"},{"country":"CG","phoneCode":"242","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+242-**-***-****"},{"country":"RE","phoneCode":"262","zone":"Indian/Reunion","language":"fr","firstDay":null,"phoneMask":"+262-*****-****"},{"country":"RO","phoneCode":"40","zone":"Europe/Bucharest","language":"ro","firstDay":"Mo","phoneMask":"+40-**-***-****"},{"country":"RU","phoneCode":"7","phoneWithin":"8","zone":"Europe/Moscow","language":"ru","firstDay":"Mo","phoneMask":"+7-***-***-**-**","nameFormat":"lsf"},{"country":"RW","phoneCode":"250","zone":"Africa/Maputo","language":"rw","firstDay":null,"phoneMask":"+250-***-***-***"},{"country":"BL","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"SH","phoneCode":"290","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+290-****"},{"country":"KN","phoneCode":"1-869","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-869-***-****"},{"country":"LC","phoneCode":"1-758","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-758-***-****"},{"country":"MF","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"PM","phoneCode":"508","zone":"America/Miquelon","language":"fr","firstDay":null},{"country":"VC","phoneCode":"1-784","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-784-***-****"},{"country":"WS","phoneCode":"685","zone":"Pacific/Apia","language":"sm","firstDay":null,"phoneMask":"+685-**-****"},{"country":"SM","phoneCode":"378","zone":"Europe/Rome","language":"it","firstDay":null,"phoneMask":"+378-****-******"},{"country":"ST","phoneCode":"239","zone":"Africa/Abidjan","language":"pt","firstDay":null,"phoneMask":"+239-**-*****"},{"country":"SA","phoneCode":"966","zone":"Asia/Riyadh","language":"ar","firstDay":"Sa","phoneMask":["+966-*-***-****","+966-5-****-****"]},{"country":"SN","phoneCode":"221","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+221-**-***-****"},{"country":"RS","phoneCode":"381","zone":"Europe/Belgrade","language":"sr","firstDay":"Mo","phoneMask":"+381-**-***-****"},{"country":"SC","phoneCode":"248","zone":"Indian/Mahe","language":"en","firstDay":null,"phoneMask":"+248-*-***-***"},{"country":"SL","phoneCode":"232","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+232-**-******"},{"country":"SG","phoneCode":"65","zone":"Asia/Singapore","language":"cmn","firstDay":"Mo","phoneMask":"+65-****-****"},{"country":"SX","phoneCode":"1-721","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+1-721-***-****"},{"country":"SK","phoneCode":"421","zone":"Europe/Prague","language":"sk","firstDay":"Mo","phoneMask":"+421-***-***-***"},{"country":"SI","phoneCode":"386","zone":"Europe/Belgrade","language":"sl","firstDay":null,"phoneMask":"+386-**-***-***"},{"country":"SB","phoneCode":"677","zone":"Pacific/Guadalcanal","language":"en","firstDay":null,"phoneMask":["+677-*****","+677-***-****"]},{"country":"SO","phoneCode":"252","zone":"Africa/Mogadishu","language":"so","firstDay":null,"phoneMask":["+252-*-***-***","+252-**-***-***"]},{"country":"ZA","phoneCode":"27","zone":"Africa/Johannesburg","language":"zu","firstDay":"Su","phoneMask":"+27-**-***-****"},{"country":"KR","phoneCode":"82","zone":"Asia/Seoul","language":"ko","firstDay":"Su","phoneMask":["+82-**-***-****","+82-**-***-****-**"],"nameFormat":"lf"},{"country":"SS","phoneCode":"211","zone":"Africa/Khartoum","language":"en","firstDay":null,"phoneMask":"+211-**-***-****"},{"country":"ES","phoneCode":"34","zone":"Europe/Madrid","language":"es","firstDay":"Mo","phoneMask":"+34-***-***-***"},{"country":"LK","phoneCode":"94","zone":"Asia/Colombo","language":"si","firstDay":null,"phoneMask":"+94-**-***-****"},{"country":"SD","phoneCode":"249","zone":"Africa/Khartoum","language":"ar","firstDay":null,"phoneMask":"+249-**-***-****"},{"country":"SR","phoneCode":"597","zone":"America/Paramaribo","language":"nl","firstDay":null,"phoneMask":["+597-***-***","+597-***-****"]},{"country":"SJ","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":null},{"country":"SZ","phoneCode":"268","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+268-**-**-****"},{"country":"SE","phoneCode":"46","zone":"Europe/Stockholm","language":"sv","firstDay":"Mo","phoneMask":"+46-**-***-****"},{"country":"CH","phoneCode":"41","zone":"Europe/Zurich","language":"de","firstDay":"Mo","phoneMask":"+41-**-***-****"},{"country":"SY","phoneCode":"963","zone":"Asia/Damascus","language":"ar","firstDay":"Sa","phoneMask":"+963-**-****-***"},{"country":"TW","phoneCode":"886","zone":"Asia/Taipei","language":"zh","firstDay":"Su","phoneMask":["+886-****-****","+886-*-****-****"]},{"country":"TJ","phoneCode":"992","zone":"Asia/Dushanbe","language":"tg","firstDay":null,"phoneMask":"+992-**-***-****"},{"country":"TZ","phoneCode":"255","zone":"Africa/Dar_es_Salaam","language":"sw","firstDay":null,"phoneMask":"+255-**-***-****"},{"country":"TH","phoneCode":"66","zone":"Asia/Bangkok","language":"th","firstDay":"Mo","phoneMask":"+66-**-***-****"},{"country":"TG","phoneCode":"228","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+228-**-***-***"},{"country":"TK","phoneCode":"690","zone":"Pacific/Fakaofo","language":"tkl","firstDay":null,"phoneMask":"+690-****"},{"country":"TO","phoneCode":"676","zone":"Pacific/Tongatapu","language":"to","firstDay":null,"phoneMask":"+676-*****"},{"country":"TT","phoneCode":"1-868","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-868-***-****"},{"country":"TN","phoneCode":"216","zone":"Africa/Tunis","language":"ar","firstDay":"Mo","phoneMask":"+216-**-***-***"},{"country":"TR","phoneCode":"90","zone":"Europe/Istanbul","language":"tr","firstDay":"Mo","phoneMask":"+90-***-***-****"},{"country":"TM","phoneCode":"993","zone":"Asia/Ashgabat","language":"tk","firstDay":null,"phoneMask":"+993-*-***-****"},{"country":"TC","phoneCode":"1-649","zone":"America/Grand_Turk","language":"en","firstDay":null,"phoneMask":"+1-649-***-****"},{"country":"TV","phoneCode":"688","zone":"Pacific/Funafuti","language":"tvl","firstDay":null,"phoneMask":["+688-2-****","+688-90-****"]},{"country":"VI","phoneCode":"1-340","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-340-***-****"},{"country":"UG","phoneCode":"256","zone":"Africa/Kampala","language":"en","firstDay":null,"phoneMask":"+256-***-***-***"},{"country":"UA","phoneCode":"380","zone":"Europe/Kiev","language":"uk","languageAlternative":["ua"],"firstDay":"Mo","phoneMask":"+380-**-***-**-**"},{"country":"AE","phoneCode":"971","zone":"Asia/Dubai","language":"ar","firstDay":"Sa","phoneMask":["+971-*-***-****","+971-5-*-***-****"]},{"country":"UY","phoneCode":"598","zone":"America/Montevideo","language":"es","firstDay":"Mo","phoneMask":"+598-*-***-**-**"},{"country":"UZ","phoneCode":"998","zone":"Asia/Tashkent","language":"uz","firstDay":"Mo","phoneMask":"+998-**-***-****"},{"country":"VU","phoneCode":"678","zone":"Pacific/Efate","language":"bi","firstDay":null,"phoneMask":["+678-*****","+678-**-*****"]},{"country":"VA","phoneCode":"379","zone":"Europe/Rome","language":"la","firstDay":null,"phoneMask":"+39-6-698-*****"},{"country":"VE","phoneCode":"58","zone":"America/Caracas","language":"es","firstDay":"Su","phoneMask":"+58-***-***-****"},{"country":"VN","phoneCode":"84","zone":"Asia/Ho_Chi_Minh","language":"vi","firstDay":"Mo","phoneMask":["+84-**-****-***","+84-***-****-***"],"nameFormat":"fsl"},{"country":"WF","phoneCode":"681","zone":"Pacific/Wallis","language":"wls","firstDay":null,"phoneMask":"+681-**-****"},{"country":"EH","phoneCode":"212","zone":"Africa/El_Aaiun","language":"ar","firstDay":null},{"country":"YE","phoneCode":"967","zone":"Asia/Aden","language":"ar","firstDay":"Sa","phoneMask":["+967-*-***-***","+967-**-***-***","+967-***-***-***"]},{"country":"ZM","phoneCode":"260","zone":"Africa/Maputo","language":"en","firstDay":null,"phoneMask":"+260-**-***-****"},{"country":"ZW","phoneCode":"263","zone":"Africa/Maputo","language":"en","firstDay":"Su","phoneMask":"+263-*-******"},{"country":"GF","phoneCode":"594","zone":"America/Cayenne","language":"fr","firstDay":"Mo","phoneMask":"+594-*****-****"},{"country":"MQ","phoneCode":"596","zone":"America/Martinique","language":"fr","firstDay":"Mo","phoneMask":"+596-***-**-**-**"},{"country":"NF","phoneCode":"672-3","zone":"Pacific/Norfolk","language":"en","firstDay":"Mo","phoneMask":"+672-3-**-***"},{"country":"IC","phoneCode":"3428","zone":"Europe/Berlin","language":"es","firstDay":"Mo"}]'), Js = "geo-code", b = class b {
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
    return Gs;
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
    return e && (e.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (n = this.getByCodeFull(e)), !n && e.match(/[A-Z]{2}/) && (n = this.getByCountry(this.toCountry(e))), !n && e.match(/[a-z]{2}/) && (n = this.getByLanguage(this.toLanguage(e)))), this.toFull(Us(n ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(e) {
    return this.getList().find(
      (n) => Ws(e, [
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
      var o;
      return n.country === e || ((o = n == null ? void 0 : n.countryAlternative) == null ? void 0 : o.find((s) => s === e));
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
      var o;
      return n.language === e || ((o = n == null ? void 0 : n.languageAlternative) == null ? void 0 : o.find((s) => s === e));
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
    return R() && (this.storage.get() || ((e = document.querySelector("html")) == null ? void 0 : e.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
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
f(b, "storage", new Ft(Js)), f(b, "location"), f(b, "item"), f(b, "language"), f(b, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), b.location = b.findLocation(), b.language = b.findLanguage(b.location), b.item = b.getByCode(b.location);
let K = b;
const nn = "d-response-loading", on = [], C = class C {
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
      const o = {
        ...this.headers,
        ...e || {}
      };
      return ne(n) && (o["Content-Type"] = n), o;
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
    return `${n ? this.url : ""}${e}`.replace("{locale}", K.getLocation()).replace("{country}", K.getCountry()).replace("{language}", K.getLanguage());
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
    if (n !== "GET" && ne(e))
      return zt(e) ? e : JSON.stringify(e);
  }
  /**
   * Getting data for the body of the get method.
   *
   * Получение данных для тела метода get.
   * @param request this request/ данный запрос
   * @param path path to request/ путь к запрос
   * @param method method for request/ метод запрос
   */
  static getBodyForGet(e, n = "", o = "GET") {
    if (o === "GET") {
      const s = n.match(/\?/) ? "&" : "?", r = typeof e == "object" ? Zn(e) : e;
      if (ne(r))
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
      const n = dt(this.requestDefault);
      if (e instanceof FormData)
        H(n, (o, s) => {
          e.has(s) || e.set(s, o);
        });
      else if (te(e))
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
    return te(e) && (this.headers = e), C;
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
    return zt(e) ? await this.fetch({
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
    return this.response.push(...ie(e)), C;
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
  static getResponse(e = "", n, o, s) {
    return this.response.find((r) => {
      if (q(dt(r == null ? void 0 : r.disable)) !== !0 && (r.path instanceof RegExp && e.match(r.path) || e === r.path) && n === r.method && (on.indexOf(r) === -1 || s)) {
        const a = this.addRequestDefault(r == null ? void 0 : r.request);
        let i = !1;
        if (o === a || a === "*any" ? i = !0 : ne(o) && ne(a) && te(o) && te(a) && !(o instanceof FormData) && !(a instanceof FormData) && Object.values(o).length === Object.values(a).length && (i = Object.entries(a).reduce(
          (c, [l, p]) => c && (p === (o == null ? void 0 : o[l]) || p === "*any"),
          !0
        )), i)
          return s && console.warn(`Response type: ${r.path}`), on.push(r), !0;
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
      hideError: o = !1,
      queryReturn: s = void 0,
      globalPreparation: r = !0,
      globalEnd: a = !0
    } = e, i = await this.makeEmulator(e);
    if (i)
      return i;
    let c = {};
    oe.show();
    try {
      this.preparationItem && r && await this.makePreparation();
      const l = await this.makeQuery(e), p = a && this.preparationEndItem ? await this.makePreparationEnd(l) : {};
      if (this.status = l.status, this.statusText = l.statusText, p != null && p.reset)
        return oe.hide(), await this.fetch(e);
      s ? c = await s(l) : "data" in p ? c = p.data : l.headers.get("Content-Type") === "application/json" ? c = await l.json() : c = { data: await l.text() };
    } catch (l) {
      o && console.error("Api: ", l), this.error = l;
    }
    return oe.hide(), this.makeData(c, n);
  }
  /**
   * Emulates an execution request.
   *
   * Эмулирует запрос выполнения.
   * @param response Data for pre-request/ Данные для пред-запроса
   * @param request data for the request/ данные для запроса
   */
  static fetchResponse(e, n) {
    return this.startResponseLoading(), new Promise((o) => {
      to(
        dn(e.response) ? e.response(n) : e.response
      ).then((s) => {
        dt(e == null ? void 0 : e.lag) ? (oe.show(), setTimeout(() => {
          this.stopResponseLoading(), o(s), oe.hide();
        }, Ks(0, 2e3))) : (this.stopResponseLoading(), o(s));
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
      method: o = "GET",
      global: s = o === "GET",
      devMode: r = !1
    } = e;
    if (s || r) {
      const a = this.addRequestDefault(e.request), i = this.getResponse(n, o, a, r);
      if (i) {
        const c = await this.fetchResponse(i, a);
        return r && console.warn("Response data:", n, a, c), c;
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
      api: o = !0,
      path: s = "",
      pathFull: r = void 0,
      method: a = "GET",
      headers: i = {},
      type: c = "application/json;charset=UTF-8",
      init: l = {}
    } = e, p = r ?? this.getUrl(s, o), u = `${p}${this.getBodyForGet(n, p, a)}`, h = this.getHeaders(i, c), d = {
      ...l,
      method: a,
      body: this.getBody(n, a)
    };
    return h && (d.headers = h), await fetch(u, d);
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
    if (this.lastResponse = e, e && te(e) && ("message" in e && (this.lastMessage = String(e.message)), n && "data" in e)) {
      if (te(e.data)) {
        const o = { ...e.data };
        return "success" in e && (o.success = e.success), o;
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
    this.responseLoading && clearTimeout(this.responseLoading), R() && document.body.classList.add(nn);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  static stopResponseLoading() {
    this.responseLoading = setTimeout(() => {
      this.responseLoading = void 0, R() && document.body.classList.remove(nn);
    }, 1200);
  }
};
f(C, "url", "/api/"), f(C, "response", []), f(C, "responseLoading"), f(C, "headers", {}), f(C, "requestDefault"), f(C, "preparation", !1), f(C, "preparationItem"), f(C, "preparationEndItem"), f(C, "status"), f(C, "statusText"), f(C, "error"), f(C, "lastResponse"), f(C, "lastMessage");
let kt = C;
class Ys {
  /**
   * Constructor
   * @param callback function for the cache/ функция для кэша
   */
  constructor(e) {
    f(this, "cache");
    f(this, "cacheOld");
    f(this, "comparisons", []);
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
    return this.cache === void 0 || this.comparisons.length !== e.length || this.comparisons.findIndex((n, o) => n !== e[o]) >= 0 ? (this.comparisons = [...e], !0) : !1;
  }
}
class Zs {
  constructor() {
    f(this, "cache", {});
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  get(e, n, o) {
    return this.getCacheItem(e, n).getCache(o ?? []);
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  async getAsync(e, n, o) {
    return await this.getCacheItem(e, n).getCacheAsync(o ?? []);
  }
  /**
   * Returns an instance of the object for working with the cache element.
   *
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   */
  getCacheItem(e, n) {
    return e in this.cache || (this.cache[e] = new Ys(n)), this.cache[e];
  }
}
const Xe = class Xe {
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  static get(e, n, o) {
    return this.cache.get(e, n, o);
  }
};
f(Xe, "cache"), Xe.cache = new Zs();
let sn = Xe;
function Bt(t, e = !1) {
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
          } catch (o) {
            console.error("transformation: JSON error", o);
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(n))
            return parseFloat(n);
          if (/^[0-9]+$/.exec(n))
            return parseInt(n, 10);
          if (e && R() && typeof (window == null ? void 0 : window[n]) == "function")
            return window[n];
        }
    }
  }
  return t;
}
const qs = "cookie-block";
class Qn {
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
f(Qn, "storage", new Ft(qs));
const Ke = {};
class rr {
  constructor(e) {
    f(this, "value");
    f(this, "options", {});
    if (this.name = e, e in yt)
      return yt[e];
    this.value = Ke == null ? void 0 : Ke[e], yt[e] = this;
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
    this.value = q(e), Object.assign(this.options, n), this.update();
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
    if (R() && !Qn.get()) {
      const o = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(o)}`,
        `max-age=${o === "" ? "-1" : this.getAge()}`,
        `SameSite=${((e = this.options) == null ? void 0 : e.sameSite) ?? "strict"}`,
        ...((n = this.options) == null ? void 0 : n.arguments) ?? []
      ].join("; ");
    }
  }
}
(() => {
  if (R())
    for (const e of document.cookie.split(";")) {
      const [n, o] = e.trim().split("=");
      n && ne(o) && (Ke[n] = Bt(o));
    }
})();
const yt = {}, de = class de {
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
    let n = this.map, o, s = "";
    return this.toNumber(e).forEach((r) => {
      s === "" && r in n ? (o = n[r], n = n[r].next) : s += r;
    }), {
      item: o,
      phone: s
    };
  }
  /**
   * Retrieves complete mask data by country code.
   *
   * Получает полные данные о маске по коду страны.
   * @param code country and language code/ код страны и языка
   */
  static getByCode(e) {
    var o;
    const n = this.get(e);
    if (n)
      return (o = this.getByPhone(n.phone.toString())) == null ? void 0 : o.item;
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
    if (ne(e) && Array.isArray(n) && n.length > 0) {
      const o = this.removeZero(e), s = o.length;
      for (const r of n)
        if (this.getUnnecessaryLength(r) === s)
          return this.toStandard(o, r);
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
    const e = H(K.getList(), (n) => {
      if (n != null && n.phoneMask)
        return {
          phone: (n == null ? void 0 : n.phoneCode) && Number(n.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: (n == null ? void 0 : n.phoneWithin) || 0,
          mask: ie(n.phoneMask),
          value: n.country
        };
    });
    this.list = e.sort((n, o) => n.phone - o.phone);
  }
  /**
   * Creating a map for search.
   *
   * Создание карты для поиска.
   */
  static makeMap() {
    this.list.forEach((e) => {
      e.mask.forEach((n) => {
        let o = this.map, s;
        if (this.toNumber(n).forEach((r) => {
          r in o || (o[r] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), s = o[r], o = o[r].next;
        }), s) {
          s.value === void 0 && (s.info = e, s.value = e.value);
          const r = this.toWithin(n, e.within);
          s.mask.push(r), s.maskFull.push(r.replace(/\d/ig, "*")), s.items.push(e);
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
    let o = 0;
    return n.replace(/\*/ig, () => e[o++]);
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
f(de, "list", []), f(de, "map", {}), de.makeList(), de.makeMap();
let rn = de;
const se = class se {
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
    var s;
    const o = q(n);
    o !== ((s = this.hash) == null ? void 0 : s[e]) && (this.hash[e] = o, this.update());
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
   * Obtaining data from the URL string.
   *
   * Получение данных из строки URL.
   */
  static getLocation() {
    const e = {};
    return location.hash.replace(
      /([\w-]+)[:=]([^;]+)/ig,
      (...n) => (e[n[1]] = Bt(n[2]), "")
    ), e;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Zn(this.hash, "=", ";")}`), requestAnimationFrame(() => {
      this.block = !1;
    });
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
   * Calling all functions whose data has changed.
   *
   * Вызов всех функций, у которых были изменены данные.
   * @param location fresh data/ свежий данные
   */
  static makeWatch(e) {
    H(this.watch, (n, o) => {
      var s;
      ((s = this.hash) == null ? void 0 : s[o]) !== (e == null ? void 0 : e[o]) && n.forEach((r) => r(e[o]));
    });
  }
};
f(se, "hash", {}), f(se, "watch", {}), f(se, "block", !1), R() && (se.reload(), addEventListener("hashchange", () => se.reload()));
let an = se;
const mt = "__UI_ICON", un = 320, cn = "--LOAD--", be = class be {
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
  static async get(e, n = "", o = 1e3 * 60 * 3) {
    var r, a;
    const s = ((r = this.icons) == null ? void 0 : r[this.getName(e)]) ?? ((a = this.icons) == null ? void 0 : a[e]) ?? `${e.replace(/^@/, n ?? this.url)}.svg`;
    return typeof s == "string" ? s === cn && o > 0 ? (await this.wait(), this.get(e, n, o - un)) : s : await s;
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
    this.icons[this.getName(e)] = cn;
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
    H(e, (n, o) => this.add(o, n));
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
    return new Promise((e) => setTimeout(() => e(), un));
  }
};
f(be, "icons", {}), f(be, "url", "/icons/"), R() && (mt in window || (window[mt] = {}), be.icons = window[mt]);
let ln = be;
function Qs(t, e, n) {
  var o;
  return ((o = Z(t)) == null ? void 0 : o[e]) ?? n;
}
function Xs(t, e, n) {
  const o = Z(t);
  if (o) {
    const s = Qs(o, e);
    if (Ne(s) && Ne(n))
      H(n, (r, a) => {
        s[a] = q(r);
      });
    else {
      const r = q(n);
      !(e in o) && typeof r == "string" ? o.setAttribute(e.toString(), r) : o[e] = q(n);
    }
  }
  return o;
}
function hn(t, e = "div", n, o) {
  if (!R())
    return;
  const s = document.createElement(e);
  return typeof n == "function" ? n(s) : te(n) && H(n, (r, a) => {
    Xs(s, a, r);
  }), t == null || t.insertBefore(s, null), s;
}
const ve = class ve {
  /**
   * Constructor
   */
  constructor() {
    f(this, "item", Lo());
    f(this, "is", Ae(() => this.item.value !== void 0));
    ve.is().then((e) => {
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
    return hn(document.body, "div", (e) => {
      e.style.height = "24px", e.style.overflowY = "scroll", e.style.position = "fixed", e.style.width = "100%", hn(e, "div", (n) => {
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
f(ve, "storage", new Ft("scrollbar", !0)), f(ve, "calculate", !1);
let fn = ve;
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
    K.set(e, !0), this.item.value = K.getItem();
  }
};
f(x, "item", Vo(K.get())), f(x, "country", Ae(() => x.item.value.country)), f(x, "language", Ae(() => x.item.value.language)), f(x, "standard", Ae(() => x.item.value.standard)), f(x, "firstDay", Ae(() => x.item.value.firstDay));
let pn = x;
function er(t) {
  return t.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (e) => `${e.toLowerCase()}`).replace(/^[A-Z]/, (e) => e.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (e) => `-${e.toLowerCase()}`).replace(/[A-Z]/g, (e) => e.toLowerCase());
}
const A = {}, ge = class ge {
  /**
   * The fs.existsSync() method is used to synchronously check if a file already
   * exists in the given path or not. It returns a boolean value which indicates
   * the presence of a file.
   *
   * Метод fs.existsSync() используется для синхронной проверки наличия файла в
   * указанном пути. Он возвращает логическое значение, которое указывает на
   * наличие файла.
   * @param path it holds the path of the file that has to be checked /
   * это содержит путь к файлу, который необходимо проверить
   */
  static is(e) {
    return A.existsSync(this.joinPath(e));
  }
  /**
   * Checks whether it is a directory.
   *
   * Проверяет, является ли это директорией.
   * @param path name of the element being checked/ название проверяемого элемента
   */
  static isDir(e) {
    var n;
    return this.is(e) ? ((n = A.statSync(this.joinPath(e))) == null ? void 0 : n.isDirectory()) ?? !1 : !this.joinPath(e).match(/\.\w+$/);
  }
  /**
   * Determines whether the package is connected as a module.
   *
   * Определяет, является ли пакет подключенным как модуль.
   */
  static isModule() {
    return this.module;
  }
  /**
   * The path.joinPath() method joins all given path segments together using the
   * platform-specific separator as a delimiter, then normalizes the resulting path.
   *
   * Метод path.joinPath() объединяет все указанные сегменты пути с использованием
   * специфического для платформы разделителя в качестве разделителя,
   * а затем нормализует полученный путь.
   * @param path a sequence of path segments/ последовательность сегментов пути
   */
  static joinPath(e) {
    return A.join(...ie(e));
  }
  /**
   * Getting the path to the file by its name and the path to the directory.
   *
   * Получение пути к файлу по его названию и пути к директории.
   * @param path path to the file/ путь к файлу
   * @param name file name/ название файла
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  static joinPathByName(e, n, o = "json") {
    return this.joinPath([...ie(e), this.getFileName(n, o)]);
  }
  /**
   * Returns the root path.
   *
   * Возвращает корневой путь.
   */
  static getRoot() {
    return this.root;
  }
  static getDirname() {
    return __dirname;
  }
  /**
   * Returns the file name.
   *
   * Возвращает имя файла.
   * @param name element name/ название элемента
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  static getFileName(e, n = "json") {
    return n && n !== "" ? `${er(e)}.${n}` : e;
  }
  /**
   * Returns the path to the directory, removing the file name from the path.
   *
   * Возвращает путь к директории, убрав название файла из пути.
   * @param path path to the file/ путь к файлу
   */
  static getPathDir(e) {
    return this.isDir(e) ? this.joinPath(e) : A.dirname(this.joinPath(e));
  }
  /**
   * Returns the path to the file.
   *
   * Возвращает путь к файлу.
   * @param path path to the file/ путь к файлу
   * @param name element name/ название элемента
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  static getPathFile(e, n, o = "json") {
    return [...ie(e), this.getFileName(n, o)];
  }
  /**
   * The method splits the path into an array of components.
   *
   * Метод разбивает путь на массив компонентов.
   * @param path path to the directory/ путь к директории
   */
  static splitForDir(e) {
    var o;
    const n = this.isDir(e) ? e : (o = this.parse(e)) == null ? void 0 : o.dir;
    return this.joinPath(n || "").split(A.sep);
  }
  /**
   * Method returns an object whose properties represent significant elements of the path.
   *
   * Метод возвращает объект, свойства которого представляют существенные элементы пути.
   * @param path filename/ имя файла
   */
  static parse(e) {
    return A.parse(this.joinPath(e));
  }
  /**
   * Returns the directory separator symbol.
   *
   * Возвращает символ разделителя директории.
   */
  static sep() {
    return A.sep;
  }
  /**
   * Getting information about the file.
   *
   * Получение информации о файле.
   * @param path path to the file/ путь к файлу
   */
  static stat(e) {
    if (this.is(e))
      return { ...A.statSync(this.joinPath(e)) };
  }
  /**
   * Reads the contents of the directory.
   *
   * Читает содержимое директории.
   * @param path path to the directory/ путь к директории
   */
  static readDir(e) {
    return this.is(e) ? A.readdirSync(this.joinPath(e)) : [];
  }
  /**
   * Reads the contents of the directory recursively.
   *
   * Читает содержимое директории рекурсивно.
   * @param path path to the directory/ путь к директории
   * @param fullPath recursive directory/ рекурсивная директория
   */
  static readDirRecursive(e, n = []) {
    const o = this.readDir(e), s = [];
    return o.forEach((r) => {
      const a = [...e, r];
      this.isDir(a) ? s.push(...this.readDirRecursive(
        a,
        [...n, r]
      )) : s.push(this.joinPath([...n, r]));
    }), s;
  }
  /**
   * Returns the contents of the path.
   *
   * Возвращает содержимое пути.
   * @param path filename/ имя файла
   */
  static readFile(e) {
    if (this.is(e))
      return Bt(
        A.readFileSync(this.joinPath(e)).toString()
      );
  }
  /**
   * Returns the content of the file, without converting the value.
   *
   * Возвращает содержимое файла, без преобразования значения.
   * @param path filename/ имя файла
   */
  static readFileOnly(e) {
    if (this.is(e))
      return A.readFileSync(this.joinPath(e)).toString();
  }
  /**
   * Synchronously creates a directory.
   *
   * Синхронно создает директорию.
   * @param path path to the directory/ путь к директории
   */
  static createDir(e) {
    const n = [this.root];
    this.splitForDir(this.removeRootInPath(e)).forEach((o) => {
      n.push(o), this.is(n) || A.mkdirSync(this.joinPath(n));
    });
  }
  /**
   * Writing data to a file.
   *
   * Запись данных в файл.
   * @param path path to the file/ путь к файлу
   * @param name file name/ название файла
   * @param value values for storage/ значения для хранения
   * @param extension file extension by default is ts/ расширение файла по умолчанию - ts
   */
  static write(e, n, o, s = "json") {
    this.writeByPath(
      this.joinPathByName(e, n, s),
      o
    );
  }
  /**
   * Writes to the selected path.
   *
   * Записывает по выбранному пути.
   * @param path path to the file/ путь к файлу
   * @param value values for storage/ значения для хранения
   */
  static writeByPath(e, n) {
    this.createDir(e), A.writeFileSync(
      this.joinPath(e),
      typeof n == "object" ? JSON.stringify(n) : n
    );
  }
  /**
   * Copy a file from the source path to the destination path.
   *
   * Копирования файла из исходного пути в целевой путь.
   * @param path path to the file/ путь к файлу
   * @param pathsSrc source filename to copy/ исходное имя файла для копирования
   */
  static copy(e, n) {
    this.createDir(e), A.copyFileSync(
      this.joinPath(n),
      this.joinPath(e)
    );
  }
  /**
   * Directory deletion.
   *
   * Удаление директории.
   * @param path path to the directory/ путь к директории
   */
  static removeDir(e) {
    this.isDir(e) && A.rmSync(this.joinPath(e), {
      recursive: !0,
      force: !0
    });
  }
  /**
   * File deletion.
   *
   * Удаление файла.
   * @param path path to the file/ путь к файлу
   */
  static removeFile(e) {
    this.is(e) && A.unlinkSync(this.joinPath(e));
  }
  static rename(e, n) {
    A.renameSync(
      this.joinPath(e),
      this.joinPath(n)
    );
  }
  /**
   * Removing root from the path.
   *
   * Удаление root из пути.
   * @param path path to the directory/ путь к директории
   */
  static removeRootInPath(e) {
    return this.joinPath(e).replace(`${this.root}${A.sep}`, "").replace(`${this.root}`, "");
  }
};
f(ge, "root"), f(ge, "module"), ge.module = !!__dirname.match("node_modules"), ge.root = process.cwd();
let wt = ge;
const tr = "src", nr = "constructors", or = "properties.json", ar = (t) => {
  const e = {};
  try {
    const n = __dirname;
    H(
      t,
      (o) => {
        const s = [
          n,
          "..",
          "..",
          "..",
          tr,
          nr,
          o,
          or
        ], r = wt.readFile(s);
        r && (e[o] = r);
      }
    );
  } catch (n) {
    console.error("getConstructorProperties", n);
  }
  return e;
};
export {
  ar as getConstructorProperties
};
