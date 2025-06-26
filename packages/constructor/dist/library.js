var vn = Object.defineProperty;
var En = (t, e, n) => e in t ? vn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var l = (t, e, n) => En(t, typeof e != "symbol" ? e + "" : e, n);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function _n(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const Ke = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Pt = () => {
}, An = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Z = Object.assign, zn = Object.prototype.hasOwnProperty, Ue = (t, e) => zn.call(t, e), M = Array.isArray, ue = (t) => It(t) === "[object Map]", K = (t) => typeof t == "function", I = (t) => typeof t == "string", ke = (t) => typeof t == "symbol", A = (t) => t !== null && typeof t == "object", Sn = Object.prototype.toString, It = (t) => Sn.call(t), Lt = (t) => It(t).slice(8, -1), Xe = (t) => I(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, bn = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, wn = bn((t) => t.charAt(0).toUpperCase() + t.slice(1)), oe = (t, e) => !Object.is(t, e);
let ft;
const Oe = () => ft || (ft = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function et(t) {
  if (M(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const o = t[n], s = I(o) ? Tn(o) : et(o);
      if (s)
        for (const a in s)
          e[a] = s[a];
    }
    return e;
  } else if (I(t) || A(t))
    return t;
}
const Nn = /;(?![^(]*\))/g, Rn = /:([^]+)/, On = /\/\*[^]*?\*\//g;
function Tn(t) {
  const e = {};
  return t.replace(On, "").split(Nn).forEach((n) => {
    if (n) {
      const o = n.split(Rn);
      o.length > 1 && (e[o[0].trim()] = o[1].trim());
    }
  }), e;
}
function tt(t) {
  let e = "";
  if (I(t))
    e = t;
  else if (M(t))
    for (let n = 0; n < t.length; n++) {
      const o = tt(t[n]);
      o && (e += o + " ");
    }
  else if (A(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function q(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let d, xt = 0, le, he;
function Pn(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = he, he = t;
    return;
  }
  t.next = le, le = t;
}
function nt() {
  xt++;
}
function ot() {
  if (--xt > 0)
    return;
  if (he) {
    let e = he;
    for (he = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; le; ) {
    let e = le;
    for (le = void 0; e; ) {
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
function In(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Ln(t) {
  let e, n = t.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), Ft(o), Vn(o)) : e = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  t.deps = e, t.depsTail = n;
}
function xn(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Vt(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Vt(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === de))
    return;
  t.globalVersion = de;
  const e = t.dep;
  if (t.flags |= 2, e.version > 0 && !t.isSSR && t.deps && !xn(t)) {
    t.flags &= -3;
    return;
  }
  const n = d, o = j;
  d = t, j = !0;
  try {
    In(t);
    const s = t.fn(t._value);
    (e.version === 0 || oe(s, t._value)) && (t._value = s, e.version++);
  } catch (s) {
    throw e.version++, s;
  } finally {
    d = n, j = o, Ln(t), t.flags &= -3;
  }
}
function Ft(t, e = !1) {
  const { dep: n, prevSub: o, nextSub: s } = t;
  if (o && (o.nextSub = s, t.prevSub = void 0), s && (s.prevSub = o, t.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === t && (n.subsHead = s), n.subs === t && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      Ft(a, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function Vn(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let j = !0;
const $t = [];
function st() {
  $t.push(j), j = !1;
}
function at() {
  const t = $t.pop();
  j = t === void 0 ? !0 : t;
}
let de = 0;
class Fn {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class rt {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!d || !j || d === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== d)
      n = this.activeLink = new Fn(d, this), d.deps ? (n.prevDep = d.depsTail, d.depsTail.nextDep = n, d.depsTail = n) : d.deps = d.depsTail = n, jt(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = d.depsTail, n.nextDep = void 0, d.depsTail.nextDep = n, d.depsTail = n, d.deps === n && (d.deps = o);
    }
    return process.env.NODE_ENV !== "production" && d.onTrack && d.onTrack(
      Z(
        {
          effect: d
        },
        e
      )
    ), n;
  }
  trigger(e) {
    this.version++, de++, this.notify(e);
  }
  notify(e) {
    nt();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Z(
              {
                effect: n.sub
              },
              e
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ot();
    }
  }
}
function jt(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let o = e.deps; o; o = o.nextDep)
        jt(o);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), process.env.NODE_ENV !== "production" && t.dep.subsHead === void 0 && (t.dep.subsHead = t), t.dep.subs = t;
  }
}
const Se = /* @__PURE__ */ new WeakMap(), J = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), He = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ye = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function v(t, e, n) {
  if (j && d) {
    let o = Se.get(t);
    o || Se.set(t, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new rt()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: t,
      type: e,
      key: n
    }) : s.track();
  }
}
function F(t, e, n, o, s, a) {
  const r = Se.get(t);
  if (!r) {
    de++;
    return;
  }
  const i = (u) => {
    u && (process.env.NODE_ENV !== "production" ? u.trigger({
      target: t,
      type: e,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: a
    }) : u.trigger());
  };
  if (nt(), e === "clear")
    r.forEach(i);
  else {
    const u = M(t), h = u && Xe(n);
    if (u && n === "length") {
      const p = Number(o);
      r.forEach((c, f) => {
        (f === "length" || f === ye || !ke(f) && f >= p) && i(c);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && i(r.get(n)), h && i(r.get(ye)), e) {
        case "add":
          u ? h && i(r.get("length")) : (i(r.get(J)), ue(t) && i(r.get(He)));
          break;
        case "delete":
          u || (i(r.get(J)), ue(t) && i(r.get(He)));
          break;
        case "set":
          ue(t) && i(r.get(J));
          break;
      }
  }
  ot();
}
function $n(t, e) {
  const n = Se.get(t);
  return n && n.get(e);
}
function Q(t) {
  const e = g(t);
  return e === t ? e : (v(e, "iterate", ye), S(t) ? e : e.map(k));
}
function it(t) {
  return v(t = g(t), "iterate", ye), t;
}
const jn = {
  __proto__: null,
  [Symbol.iterator]() {
    return Pe(this, Symbol.iterator, k);
  },
  concat(...t) {
    return Q(this).concat(
      ...t.map((e) => M(e) ? Q(e) : e)
    );
  },
  entries() {
    return Pe(this, "entries", (t) => (t[1] = k(t[1]), t));
  },
  every(t, e) {
    return R(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return R(this, "filter", t, e, (n) => n.map(k), arguments);
  },
  find(t, e) {
    return R(this, "find", t, e, k, arguments);
  },
  findIndex(t, e) {
    return R(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return R(this, "findLast", t, e, k, arguments);
  },
  findLastIndex(t, e) {
    return R(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return R(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Ie(this, "includes", t);
  },
  indexOf(...t) {
    return Ie(this, "indexOf", t);
  },
  join(t) {
    return Q(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return Ie(this, "lastIndexOf", t);
  },
  map(t, e) {
    return R(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return ie(this, "pop");
  },
  push(...t) {
    return ie(this, "push", t);
  },
  reduce(t, ...e) {
    return pt(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return pt(this, "reduceRight", t, e);
  },
  shift() {
    return ie(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return R(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return ie(this, "splice", t);
  },
  toReversed() {
    return Q(this).toReversed();
  },
  toSorted(t) {
    return Q(this).toSorted(t);
  },
  toSpliced(...t) {
    return Q(this).toSpliced(...t);
  },
  unshift(...t) {
    return ie(this, "unshift", t);
  },
  values() {
    return Pe(this, "values", k);
  }
};
function Pe(t, e, n) {
  const o = it(t), s = o[e]();
  return o !== t && !S(t) && (s._next = s.next, s.next = () => {
    const a = s._next();
    return a.value && (a.value = n(a.value)), a;
  }), s;
}
const Bn = Array.prototype;
function R(t, e, n, o, s, a) {
  const r = it(t), i = r !== t && !S(t), u = r[e];
  if (u !== Bn[e]) {
    const c = u.apply(t, a);
    return i ? k(c) : c;
  }
  let h = n;
  r !== t && (i ? h = function(c, f) {
    return n.call(this, k(c), f, t);
  } : n.length > 2 && (h = function(c, f) {
    return n.call(this, c, f, t);
  }));
  const p = u.call(r, h, o);
  return i && s ? s(p) : p;
}
function pt(t, e, n, o) {
  const s = it(t);
  let a = n;
  return s !== t && (S(t) ? n.length > 3 && (a = function(r, i, u) {
    return n.call(this, r, i, u, t);
  }) : a = function(r, i, u) {
    return n.call(this, r, k(i), u, t);
  }), s[e](a, ...o);
}
function Ie(t, e, n) {
  const o = g(t);
  v(o, "iterate", ye);
  const s = o[e](...n);
  return (s === -1 || s === !1) && me(n[0]) ? (n[0] = g(n[0]), o[e](...n)) : s;
}
function ie(t, e, n = []) {
  st(), nt();
  const o = g(t)[e].apply(t, n);
  return ot(), at(), o;
}
const Kn = /* @__PURE__ */ _n("__proto__,__v_isRef,__isVue"), Bt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(ke)
);
function Un(t) {
  ke(t) || (t = String(t));
  const e = g(this);
  return v(e, "has", t), e.hasOwnProperty(t);
}
class Kt {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, o) {
    if (n === "__v_skip") return e.__v_skip;
    const s = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return o === (s ? a ? eo : Wt : a ? Xn : Ht).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(o) ? e : void 0;
    const r = M(e);
    if (!s) {
      let u;
      if (r && (u = jn[n]))
        return u;
      if (n === "hasOwnProperty")
        return Un;
    }
    const i = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      b(e) ? e : o
    );
    return (ke(n) ? Bt.has(n) : Kn(n)) || (s || v(e, "get", n), a) ? i : b(i) ? r && Xe(n) ? i : i.value : A(i) ? s ? Gt(i) : Jt(i) : i;
  }
}
class Hn extends Kt {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, o, s) {
    let a = e[n];
    if (!this._isShallow) {
      const u = L(a);
      if (!S(o) && !L(o) && (a = g(a), o = g(o)), !M(e) && b(a) && !b(o))
        return u ? !1 : (a.value = o, !0);
    }
    const r = M(e) && Xe(n) ? Number(n) < e.length : Ue(e, n), i = Reflect.set(
      e,
      n,
      o,
      b(e) ? e : s
    );
    return e === g(s) && (r ? oe(o, a) && F(e, "set", n, o, a) : F(e, "add", n, o)), i;
  }
  deleteProperty(e, n) {
    const o = Ue(e, n), s = e[n], a = Reflect.deleteProperty(e, n);
    return a && o && F(e, "delete", n, void 0, s), a;
  }
  has(e, n) {
    const o = Reflect.has(e, n);
    return (!ke(n) || !Bt.has(n)) && v(e, "has", n), o;
  }
  ownKeys(e) {
    return v(
      e,
      "iterate",
      M(e) ? "length" : J
    ), Reflect.ownKeys(e);
  }
}
class Wn extends Kt {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && q(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && q(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const Jn = /* @__PURE__ */ new Hn(), Gn = /* @__PURE__ */ new Wn(), We = (t) => t, ve = (t) => Reflect.getPrototypeOf(t);
function Yn(t, e, n) {
  return function(...o) {
    const s = this.__v_raw, a = g(s), r = ue(a), i = t === "entries" || t === Symbol.iterator && r, u = t === "keys" && r, h = s[t](...o), p = n ? We : e ? Je : k;
    return !e && v(
      a,
      "iterate",
      u ? He : J
    ), {
      // iterator protocol
      next() {
        const { value: c, done: f } = h.next();
        return f ? { value: c, done: f } : {
          value: i ? [p(c[0]), p(c[1])] : p(c),
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
function Ee(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      q(
        `${wn(t)} operation ${n}failed: target is readonly.`,
        g(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Zn(t, e) {
  const n = {
    get(s) {
      const a = this.__v_raw, r = g(a), i = g(s);
      t || (oe(s, i) && v(r, "get", s), v(r, "get", i));
      const { has: u } = ve(r), h = e ? We : t ? Je : k;
      if (u.call(r, s))
        return h(a.get(s));
      if (u.call(r, i))
        return h(a.get(i));
      a !== r && a.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !t && v(g(s), "iterate", J), Reflect.get(s, "size", s);
    },
    has(s) {
      const a = this.__v_raw, r = g(a), i = g(s);
      return t || (oe(s, i) && v(r, "has", s), v(r, "has", i)), s === i ? a.has(s) : a.has(s) || a.has(i);
    },
    forEach(s, a) {
      const r = this, i = r.__v_raw, u = g(i), h = e ? We : t ? Je : k;
      return !t && v(u, "iterate", J), i.forEach((p, c) => s.call(a, h(p), h(c), r));
    }
  };
  return Z(
    n,
    t ? {
      add: Ee("add"),
      set: Ee("set"),
      delete: Ee("delete"),
      clear: Ee("clear")
    } : {
      add(s) {
        !e && !S(s) && !L(s) && (s = g(s));
        const a = g(this);
        return ve(a).has.call(a, s) || (a.add(s), F(a, "add", s, s)), this;
      },
      set(s, a) {
        !e && !S(a) && !L(a) && (a = g(a));
        const r = g(this), { has: i, get: u } = ve(r);
        let h = i.call(r, s);
        h ? process.env.NODE_ENV !== "production" && gt(r, i, s) : (s = g(s), h = i.call(r, s));
        const p = u.call(r, s);
        return r.set(s, a), h ? oe(a, p) && F(r, "set", s, a, p) : F(r, "add", s, a), this;
      },
      delete(s) {
        const a = g(this), { has: r, get: i } = ve(a);
        let u = r.call(a, s);
        u ? process.env.NODE_ENV !== "production" && gt(a, r, s) : (s = g(s), u = r.call(a, s));
        const h = i ? i.call(a, s) : void 0, p = a.delete(s);
        return u && F(a, "delete", s, void 0, h), p;
      },
      clear() {
        const s = g(this), a = s.size !== 0, r = process.env.NODE_ENV !== "production" ? ue(s) ? new Map(s) : new Set(s) : void 0, i = s.clear();
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
    n[s] = Yn(s, t, e);
  }), n;
}
function Ut(t, e) {
  const n = Zn(t, e);
  return (o, s, a) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? o : Reflect.get(
    Ue(n, s) && s in o ? n : o,
    s,
    a
  );
}
const qn = {
  get: /* @__PURE__ */ Ut(!1, !1)
}, Qn = {
  get: /* @__PURE__ */ Ut(!0, !1)
};
function gt(t, e, n) {
  const o = g(n);
  if (o !== n && e.call(t, o)) {
    const s = Lt(t);
    q(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ht = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakMap();
function to(t) {
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
function no(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : to(Lt(t));
}
function Jt(t) {
  return L(t) ? t : Yt(
    t,
    !1,
    Jn,
    qn,
    Ht
  );
}
function Gt(t) {
  return Yt(
    t,
    !0,
    Gn,
    Qn,
    Wt
  );
}
function Yt(t, e, n, o, s) {
  if (!A(t))
    return process.env.NODE_ENV !== "production" && q(
      `value cannot be made ${e ? "readonly" : "reactive"}: ${String(
        t
      )}`
    ), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const a = s.get(t);
  if (a)
    return a;
  const r = no(t);
  if (r === 0)
    return t;
  const i = new Proxy(
    t,
    r === 2 ? o : n
  );
  return s.set(t, i), i;
}
function Zt(t) {
  return L(t) ? Zt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function L(t) {
  return !!(t && t.__v_isReadonly);
}
function S(t) {
  return !!(t && t.__v_isShallow);
}
function me(t) {
  return t ? !!t.__v_raw : !1;
}
function g(t) {
  const e = t && t.__v_raw;
  return e ? g(e) : t;
}
const k = (t) => A(t) ? Jt(t) : t, Je = (t) => A(t) ? Gt(t) : t;
function b(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function oo(t) {
  return qt(t, !1);
}
function so(t) {
  return qt(t, !0);
}
function qt(t, e) {
  return b(t) ? t : new ao(t, e);
}
class ao {
  constructor(e, n) {
    this.dep = new rt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : g(e), this._value = n ? e : k(e), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, o = this.__v_isShallow || S(e) || L(e);
    e = o ? e : g(e), oe(e, n) && (this._rawValue = e, this._value = o ? e : k(e), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ro(t) {
  process.env.NODE_ENV !== "production" && !me(t) && q("toRefs() expects a reactive object but received a plain one.");
  const e = M(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = co(t, n);
  return e;
}
class io {
  constructor(e, n, o) {
    this._object = e, this._key = n, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const e = this._object[this._key];
    return this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return $n(g(this._object), this._key);
  }
}
function co(t, e, n) {
  const o = t[e];
  return b(o) ? o : new io(t, e, n);
}
class uo {
  constructor(e, n, o) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new rt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = de - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    d !== this)
      return Pn(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const e = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Vt(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && q("Write operation failed: computed value is readonly");
  }
}
function lo(t, e, n = !1) {
  let o, s;
  K(t) ? o = t : (o = t.get, s = t.set);
  const a = new uo(o, s, n);
  return process.env.NODE_ENV, a;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const G = [];
function ho(t) {
  G.push(t);
}
function fo() {
  G.pop();
}
let Le = !1;
function ae(t, ...e) {
  if (Le) return;
  Le = !0, st();
  const n = G.length ? G[G.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = po();
  if (o)
    ct(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + e.map((a) => {
          var r, i;
          return (i = (r = a.toString) == null ? void 0 : r.call(a)) != null ? i : JSON.stringify(a);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: a }) => `at <${dn(n, a.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const a = [`[Vue warn]: ${t}`, ...e];
    s.length && a.push(`
`, ...go(s)), console.warn(...a);
  }
  at(), Le = !1;
}
function po() {
  let t = G[G.length - 1];
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
function go(t) {
  const e = [];
  return t.forEach((n, o) => {
    e.push(...o === 0 ? [] : [`
`], ...yo(n));
  }), e;
}
function yo({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", o = t.component ? t.component.parent == null : !1, s = ` at <${dn(
    t.component,
    t.type,
    o
  )}`, a = ">" + n;
  return t.props ? [s, ...mo(t.props), a] : [s + a];
}
function mo(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((o) => {
    e.push(...Qt(o, t[o]));
  }), n.length > 3 && e.push(" ..."), e;
}
function Qt(t, e, n) {
  return I(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : b(e) ? (e = Qt(t, g(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : K(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = g(e), n ? e : [`${t}=`, e]);
}
const Xt = {
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
function ct(t, e, n, o) {
  try {
    return o ? t(...o) : t();
  } catch (s) {
    en(s, e, n);
  }
}
function en(t, e, n, o = !0) {
  const s = e ? e.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: r } = e && e.appContext.config || Ke;
  if (e) {
    let i = e.parent;
    const u = e.proxy, h = process.env.NODE_ENV !== "production" ? Xt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const p = i.ec;
      if (p) {
        for (let c = 0; c < p.length; c++)
          if (p[c](t, u, h) === !1)
            return;
      }
      i = i.parent;
    }
    if (a) {
      st(), ct(a, null, 10, [
        t,
        u,
        h
      ]), at();
      return;
    }
  }
  Mo(t, n, s, o, r);
}
function Mo(t, e, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const a = Xt[e];
    if (n && ho(n), ae(`Unhandled error${a ? ` during execution of ${a}` : ""}`), n && fo(), o)
      throw t;
    console.error(t);
  } else {
    if (s)
      throw t;
    console.error(t);
  }
}
const _ = [];
let O = -1;
const se = [];
let V = null, X = 0;
const Do = /* @__PURE__ */ Promise.resolve();
let Ge = null;
const Co = 100;
function ko(t) {
  let e = O + 1, n = _.length;
  for (; e < n; ) {
    const o = e + n >>> 1, s = _[o], a = Me(s);
    a < t || a === t && s.flags & 2 ? e = o + 1 : n = o;
  }
  return e;
}
function vo(t) {
  if (!(t.flags & 1)) {
    const e = Me(t), n = _[_.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Me(n) ? _.push(t) : _.splice(ko(e), 0, t), t.flags |= 1, tn();
  }
}
function tn() {
  Ge || (Ge = Do.then(nn));
}
function Eo(t) {
  M(t) ? se.push(...t) : V && t.id === -1 ? V.splice(X + 1, 0, t) : t.flags & 1 || (se.push(t), t.flags |= 1), tn();
}
function _o(t) {
  if (se.length) {
    const e = [...new Set(se)].sort(
      (n, o) => Me(n) - Me(o)
    );
    if (se.length = 0, V) {
      V.push(...e);
      return;
    }
    for (V = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), X = 0; X < V.length; X++) {
      const n = V[X];
      process.env.NODE_ENV !== "production" && on(t, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    V = null, X = 0;
  }
}
const Me = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function nn(t) {
  process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const e = process.env.NODE_ENV !== "production" ? (n) => on(t, n) : Pt;
  try {
    for (O = 0; O < _.length; O++) {
      const n = _[O];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ct(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; O < _.length; O++) {
      const n = _[O];
      n && (n.flags &= -2);
    }
    O = -1, _.length = 0, _o(t), Ge = null, (_.length || se.length) && nn(t);
  }
}
function on(t, e) {
  const n = t.get(e) || 0;
  if (n > Co) {
    const o = e.i, s = o && gn(o.type);
    return en(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return t.set(e, n + 1), !1;
}
const xe = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Oe().__VUE_HMR_RUNTIME__ = {
  createRecord: Ve(Ao),
  rerender: Ve(zo),
  reload: Ve(So)
});
const be = /* @__PURE__ */ new Map();
function Ao(t, e) {
  return be.has(t) ? !1 : (be.set(t, {
    initialDef: we(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function we(t) {
  return yn(t) ? t.__vccOpts : t;
}
function zo(t, e) {
  const n = be.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((o) => {
    e && (o.render = e, we(o.type).render = e), o.renderCache = [], o.update();
  }));
}
function So(t, e) {
  const n = be.get(t);
  if (!n) return;
  e = we(e), dt(n.initialDef, e);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const a = o[s], r = we(a.type);
    let i = xe.get(r);
    i || (r !== n.initialDef && dt(r, e), xe.set(r, i = /* @__PURE__ */ new Set())), i.add(a), a.appContext.propsCache.delete(a.type), a.appContext.emitsCache.delete(a.type), a.appContext.optionsCache.delete(a.type), a.ceReload ? (i.add(a), a.ceReload(e.styles), i.delete(a)) : a.parent ? vo(() => {
      a.parent.update(), i.delete(a);
    }) : a.appContext.reload ? a.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), a.root.ce && a !== a.root && a.root.ce._removeChildStyle(r);
  }
  Eo(() => {
    xe.clear();
  });
}
function dt(t, e) {
  Z(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function Ve(t) {
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
let ee, _e = [];
function sn(t, e) {
  var n, o;
  ee = t, ee ? (ee.enabled = !0, _e.forEach(({ event: s, args: a }) => ee.emit(s, ...a)), _e = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    sn(a, e);
  }), setTimeout(() => {
    ee || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, _e = []);
  }, 3e3)) : _e = [];
}
let De = null, bo = null;
const wo = (t) => t.__isTeleport;
function an(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, an(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
Oe().requestIdleCallback;
Oe().cancelIdleCallback;
const No = Symbol.for("v-ndc"), Ro = {};
process.env.NODE_ENV !== "production" && (Ro.ownKeys = (t) => (ae(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
const Oo = {}, rn = (t) => Object.getPrototypeOf(t) === Oo, To = (t) => t.__isSuspense, cn = Symbol.for("v-fgt"), Po = Symbol.for("v-txt"), Io = Symbol.for("v-cmt");
function Ye(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const Lo = (...t) => ln(
  ...t
), un = ({ key: t }) => t ?? null, ze = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? I(t) || b(t) || K(t) ? { i: De, r: t, k: e, f: !!n } : t : null);
function xo(t, e = null, n = null, o = 0, s = null, a = t === cn ? 0 : 1, r = !1, i = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && un(e),
    ref: e && ze(e),
    scopeId: bo,
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
    ctx: De
  };
  return i ? (ut(u, n), a & 128 && t.normalize(u)) : n && (u.shapeFlag |= I(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && ae("VNode created with invalid key (NaN). VNode type:", u.type), u;
}
const ce = process.env.NODE_ENV !== "production" ? Lo : ln;
function ln(t, e = null, n = null, o = 0, s = null, a = !1) {
  if ((!t || t === No) && (process.env.NODE_ENV !== "production" && !t && ae(`Invalid vnode type when creating vnode: ${t}.`), t = Io), Ye(t)) {
    const i = Ne(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && ut(i, n), i.patchFlag = -2, i;
  }
  if (yn(t) && (t = t.__vccOpts), e) {
    e = Vo(e);
    let { class: i, style: u } = e;
    i && !I(i) && (e.class = tt(i)), A(u) && (me(u) && !M(u) && (u = Z({}, u)), e.style = et(u));
  }
  const r = I(t) ? 1 : To(t) ? 128 : wo(t) ? 64 : A(t) ? 4 : K(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && me(t) && (t = g(t), ae(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), xo(
    t,
    e,
    n,
    o,
    s,
    r,
    a,
    !0
  );
}
function Vo(t) {
  return t ? me(t) || rn(t) ? Z({}, t) : t : null;
}
function Ne(t, e, n = !1, o = !1) {
  const { props: s, ref: a, patchFlag: r, children: i, transition: u } = t, h = e ? $o(s || {}, e) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: h,
    key: h && un(h),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? M(a) ? a.concat(ze(e)) : [a, ze(e)] : ze(e)
    ) : a,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && M(i) ? i.map(hn) : i,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== cn ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Ne(t.ssContent),
    ssFallback: t.ssFallback && Ne(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return u && o && an(
    p,
    u.clone(p)
  ), p;
}
function hn(t) {
  const e = Ne(t);
  return M(t.children) && (e.children = t.children.map(hn)), e;
}
function Fo(t = " ", e = 0) {
  return ce(Po, null, t, e);
}
function ut(t, e) {
  let n = 0;
  const { shapeFlag: o } = t;
  if (e == null)
    e = null;
  else if (M(e))
    n = 16;
  else if (typeof e == "object")
    if (o & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), ut(t, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !e._ && !rn(e) && (e._ctx = De);
  else K(e) ? (e = { default: e, _ctx: De }, n = 32) : (e = String(e), o & 64 ? (n = 16, e = [Fo(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function $o(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (const s in o)
      if (s === "class")
        e.class !== o.class && (e.class = tt([e.class, o.class]));
      else if (s === "style")
        e.style = et([e.style, o.style]);
      else if (An(s)) {
        const a = e[s], r = o[s];
        r && a !== r && !(M(a) && a.includes(r)) && (e[s] = a ? [].concat(a, r) : r);
      } else s !== "" && (e[s] = o[s]);
  }
  return e;
}
let fn = null;
const jo = () => fn || De;
{
  const t = Oe(), e = (n, o) => {
    let s;
    return (s = t[n]) || (s = t[n] = []), s.push(o), (a) => {
      s.length > 1 ? s.forEach((r) => r(a)) : s[0](a);
    };
  };
  e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => fn = n
  ), e(
    "__VUE_SSR_SETTERS__",
    (n) => pn = n
  );
}
let pn = !1;
process.env.NODE_ENV;
const Bo = /(?:^|[-_])(\w)/g, Ko = (t) => t.replace(Bo, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function gn(t, e = !0) {
  return K(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function dn(t, e, n = !1) {
  let o = gn(e);
  if (!o && e.__file) {
    const s = e.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && t && t.parent) {
    const s = (a) => {
      for (const r in a)
        if (a[r] === e)
          return r;
    };
    o = s(
      t.components || t.parent.type.components
    ) || s(t.appContext.components);
  }
  return o ? Ko(o) : n ? "App" : "Anonymous";
}
function yn(t) {
  return K(t) && "__vccOpts" in t;
}
const N = (t, e) => {
  const n = lo(t, e, pn);
  if (process.env.NODE_ENV !== "production") {
    const o = jo();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Uo(t, e, n) {
  const o = arguments.length;
  return o === 2 ? A(e) && !M(e) ? Ye(e) ? ce(t, null, [e]) : ce(t, e) : ce(t, null, e) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Ye(n) && (n = [n]), ce(t, e, n));
}
function Ho() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(c) {
      return A(c) ? c.__isVue ? ["div", t, "VueInstance"] : b(c) ? [
        "div",
        {},
        ["span", t, p(c)],
        "<",
        // avoid debugger accessing value affecting behavior
        i("_value" in c ? c._value : c),
        ">"
      ] : Zt(c) ? [
        "div",
        {},
        ["span", t, S(c) ? "ShallowReactive" : "Reactive"],
        "<",
        i(c),
        `>${L(c) ? " (readonly)" : ""}`
      ] : L(c) ? [
        "div",
        {},
        ["span", t, S(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        i(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...a(c.$)
        ];
    }
  };
  function a(c) {
    const f = [];
    c.type.props && c.props && f.push(r("props", g(c.props))), c.setupState !== Ke && f.push(r("setup", c.setupState)), c.data !== Ke && f.push(r("data", g(c.data)));
    const D = u(c, "computed");
    D && f.push(r("computed", D));
    const w = u(c, "inject");
    return w && f.push(r("injected", w)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), f;
  }
  function r(c, f) {
    return f = Z({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          i(f[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(c, f = !0) {
    return typeof c == "number" ? ["span", e, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", o, c] : A(c) ? ["object", { object: f ? g(c) : c }] : ["span", n, String(c)];
  }
  function u(c, f) {
    const D = c.type;
    if (K(D))
      return;
    const w = {};
    for (const re in c.ctx)
      h(D, re, f) && (w[re] = c.ctx[re]);
    return w;
  }
  function h(c, f, D) {
    const w = c[D];
    if (M(w) && w.includes(f) || A(w) && f in w || c.extends && h(c.extends, f, D) || c.mixins && c.mixins.some((re) => h(re, f, D)))
      return !0;
  }
  function p(c) {
    return S(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
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
function Wo() {
  Ho();
}
process.env.NODE_ENV !== "production" && Wo();
function mn(t) {
  return t instanceof Function || typeof t == "function";
}
function B(t) {
  return mn(t) ? t() : t;
}
async function Jo(t) {
  const e = B(t);
  return e instanceof Promise ? await e : e;
}
function Ce(t) {
  return !!(t && typeof t == "object");
}
function x(t, e) {
  if (Ce(t)) {
    const n = [];
    return t instanceof Map ? t.forEach((o, s) => n.push(e(o, s, t))) : Array.isArray(t) ? t.forEach((o, s) => n.push(e(o, s, t))) : Object.entries(t).forEach(
      ([o, s]) => n.push(e(s, o, t))
    ), n.filter((o) => o !== void 0);
  }
  return [];
}
function Fe(t) {
  return b(t) ? t.value : t;
}
function Mn(t, e = "=", n = "&") {
  return x(
    t,
    (o, s) => `${s}${e}${encodeURIComponent(String(o).trim())}`
  ).sort().join(n);
}
function E() {
  return typeof window < "u";
}
function Te(t) {
  return t == null;
}
function T(t) {
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
        return Array.isArray(t) ? t.length > 0 : Object.values(t).some((e) => !Te(e));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(t);
      case "undefined":
        return !1;
      default:
        return !!t;
    }
  return !1;
}
function U(t) {
  return Ce(t) && !Array.isArray(t);
}
function Ze(t) {
  return typeof t == "string";
}
function Go(t, e) {
  return Math.floor(Math.random() * (e - t + 1) + t);
}
function Y(t) {
  return Array.isArray(t) ? t : [t];
}
function Dn(t) {
  return E() && t === window;
}
function $(t) {
  if (E())
    return Dn(t) ? document.body : Ze(t) ? document.querySelector(t) ?? void 0 : t;
}
function yt(t) {
  return Dn(t) ? t : $(t);
}
function Yo(t) {
  var e;
  return !!((e = $(t)) != null && e.closest("html"));
}
class mt {
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
  constructor(e, n = ["click"], o, s, a) {
    /**
     * Element.
     *
     * Элемент.
     */
    l(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.
     *
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     */
    l(this, "elementControl");
    l(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.
     *
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     */
    l(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.
     *
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     */
    l(this, "listenerRecent", (e) => {
      var n, o;
      Yo(this.elementControl) ? ((n = this.listener) == null || n.call(this.element, e, this.detail), Ce(this.options) && ((o = this.options) != null && o.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    l(this, "activity", !1);
    l(this, "activityItems", []);
    this.listener = o, this.options = s, this.detail = a, this.element = yt(e), this.elementControl = $(e), this.type = Y(n);
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
    const n = yt(e);
    return this.elementControlEdit || (this.elementControl = $(e)), this.element = n, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(e) {
    return this.elementControl = $(e), this.elementControlEdit = !Te(this.elementControl), this.elementControlEdit || (this.elementControl = $(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(e) {
    return this.type = Y(e), this.reset(), this;
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
const Mt = "ui-loading", fe = class fe {
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
    new mt(window, Mt, e).setElementControl(n).start();
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
l(fe, "value", 0), l(fe, "event"), E() && (fe.event = new mt(window, Mt));
let H = fe;
function Zo(t) {
  return JSON.parse(JSON.stringify(t));
}
function Dt(t) {
  switch (typeof t) {
    case "number":
      return !0;
    case "string":
      return !!t.match(/^[0-9]+$/);
    default:
      return !1;
  }
}
function Ct(t) {
  if (typeof t == "number")
    return t;
  if (!t)
    return 0;
  let e = t.replace(/[^\d., ]+/ig, "");
  return e.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? e = e.replace(/ /ig, "").replace(/,/ig, ".") : e.match(/,[0-9]{3}[,.]/ig) ? e = e.replace(/,/ig, "") : e.match(/[.][0-9]{3}[,.]/ig) ? e = e.replace(/[.]/ig, "").replace(/,/ig, ".") : e = e.replace(/,/ig, "."), parseFloat(e);
}
function qo(t, e) {
  return Te(t) ? !1 : Array.isArray(e) ? e.includes(t) : Dt(t) && Dt(e) ? Ct(t) === Ct(e) : t === e;
}
let kt = "ui-storage";
class lt {
  /**
   * Constructor
   * @param name value name /<br>название значения
   * @param isSession should we use a session? /<br>использовать ли сессию?
   */
  constructor(e, n = !1) {
    l(this, "value");
    l(this, "age");
    this.name = e, this.isSession = n;
    const o = `${n ? "session" : "storage"}#${e}`;
    if (o in $e)
      return $e[o];
    const s = this.getValue();
    s && (this.value = s.value, this.age = s.age), $e[o] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(e) {
    kt = e;
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
    return this.value = B(e), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? (n = this.getMethod()) == null || n.removeItem(this.getIndex()) : (o = this.getMethod()) == null || o.setItem(this.getIndex(), JSON.stringify({
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
    return Te(e) || this.age && this.age + e * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (E())
      return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${kt}${this.name}`;
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
const $e = {}, Qo = /* @__PURE__ */ JSON.parse('[{"country":"US","countryAlternative":["EN"],"language":"en","languageAlternative":["us"],"firstDay":"Su","zone":"America/New_York","phoneCode":"1","phoneMask":["+1-***-***-****"]},{"country":"GB","countryAlternative":["UK"],"language":"en","firstDay":"Mo","zone":"Europe/London","phoneCode":"44","phoneMask":["+44-**-****-****"]},{"country":"AF","language":"fa","firstDay":"Sa","zone":"Asia/Kabul","phoneCode":"93","phoneMask":["+93-**-***-****"]},{"country":"AL","language":"sq","firstDay":"Mo","zone":"Europe/Tirane","phoneCode":"355","phoneMask":["+355-***-***-***"]},{"country":"DZ","language":"ar","firstDay":"Sa","zone":"Africa/Algiers","phoneCode":"213","phoneMask":["+213-**-***-****"]},{"country":"AS","language":"en","firstDay":null,"zone":"Pacific/Pago_Pago","phoneCode":"1-684","phoneMask":["+1-684-***-****"]},{"country":"AD","language":"ca","firstDay":"Mo","zone":"Europe/Andorra","phoneCode":"376","phoneMask":["+376-***-***"]},{"country":"AO","language":"pt","firstDay":null,"zone":"Africa/Lagos","phoneCode":"244","phoneMask":["+244-***-***-***"]},{"country":"AI","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-264","phoneMask":["+1-264-***-****"]},{"country":"AQ","language":"en","firstDay":null,"zone":"Antarctica/Troll","phoneCode":"672","phoneMask":["+672-1-**-***"]},{"country":"AG","language":"en","firstDay":null,"zone":"America/Antigua","phoneCode":"1-268","phoneMask":["+1-268-***-****"]},{"country":"AR","language":"es","firstDay":"Su","zone":"America/Argentina/Buenos_Aires","phoneCode":"54","phoneMask":["+54-***-***-****"]},{"country":"AM","language":"hy","firstDay":"Mo","zone":"Asia/Yerevan","phoneCode":"374","phoneMask":["+374-**-***-***"]},{"country":"AW","language":"nl","firstDay":null,"zone":"America/Curacao","phoneCode":"297","phoneMask":["+297-***-****"]},{"country":"AU","language":"en","firstDay":"Mo","zone":"Australia/Sydney","phoneCode":"61","phoneMask":["+61-*-****-****"]},{"country":"AT","language":"de","firstDay":"Mo","zone":"Europe/Vienna","phoneCode":"43","phoneMask":["+43-***-***-****","+43-***-***-*****"]},{"country":"AZ","language":"az","firstDay":"Mo","zone":"Asia/Baku","phoneCode":"994","phoneMask":"+994-**-***-**-**"},{"country":"BS","language":"en","firstDay":null,"zone":"America/Nassau","phoneCode":"1-242","phoneMask":"+1-242-***-****"},{"country":"BH","language":"ar","firstDay":"Sa","zone":"Asia/Bahrain","phoneCode":"973","phoneMask":"+973-****-****"},{"country":"BD","language":"bn","firstDay":null,"zone":"Asia/Dhaka","phoneCode":"880","phoneMask":"+880-**-***-***"},{"country":"BB","language":"en","firstDay":null,"zone":"America/Barbados","phoneCode":"1-246","phoneMask":"+1-246-***-****"},{"country":"BY","language":"be","firstDay":"Mo","zone":"Europe/Minsk","phoneCode":"375","phoneMask":"+375-**-***-**-**"},{"country":"BE","language":"nl","firstDay":"Mo","zone":"Europe/Brussels","phoneCode":"32","phoneMask":"+32-***-***-***"},{"country":"BZ","language":"en","firstDay":"Su","zone":"America/Belize","phoneCode":"501","phoneMask":"+501-***-****"},{"country":"BJ","language":"fr","firstDay":null,"zone":"Africa/Lagos","phoneCode":"229","phoneMask":"+229-**-**-****"},{"country":"BM","language":"en","firstDay":null,"zone":"Atlantic/Bermuda","phoneCode":"1-441","phoneMask":"+1-441-***-****"},{"country":"BT","language":"dz","firstDay":null,"zone":"Asia/Thimphu","phoneCode":"975","phoneMask":["+975-*-***-***","+975-17-***-***"]},{"country":"BO","language":"es","firstDay":"Su","zone":"America/La_Paz","phoneCode":"591","phoneMask":"+591-*-***-****"},{"country":"BA","language":"bs","firstDay":null,"zone":"Europe/Belgrade","phoneCode":"387","phoneMask":["+387-**-****","+387-**-*****"]},{"country":"BW","language":"en","firstDay":null,"zone":"Africa/Maputo","phoneCode":"267","phoneMask":"+267-**-***-***"},{"country":"BR","language":"pt","firstDay":"Su","zone":"America/Sao_Paulo","phoneCode":"55","phoneMask":["+55-**-****-****","+55-**-*****-****"]},{"country":"IO","language":"en","firstDay":null,"zone":"Indian/Chagos","phoneCode":"246","phoneMask":"+246-***-****"},{"country":"VG","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-284","phoneMask":"+1-284-***-****"},{"country":"BN","language":"ms","firstDay":"Mo","zone":"Asia/Brunei","phoneCode":"673","phoneMask":"+673-***-****"},{"country":"BG","language":"bg","firstDay":"Mo","zone":"Europe/Sofia","phoneCode":"359","phoneMask":"+359-***-***-***"},{"country":"BF","language":"fr","firstDay":null,"zone":"Africa/Abidjan","phoneCode":"226","phoneMask":"+226-**-**-****"},{"country":"BI","language":"fr","firstDay":null,"zone":"Africa/Maputo","phoneCode":"257","phoneMask":"+257-**-**-****"},{"country":"KH","language":"km","firstDay":null,"zone":"Asia/Phnom_Penh","phoneCode":"855","phoneMask":"+855-**-***-***"},{"country":"CM","phoneCode":"237","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":"+237-****-****"},{"country":"CA","phoneCode":"1","zone":"America/Toronto","language":"en","firstDay":"Su","phoneMask":"+1-***-***-****"},{"country":"CV","phoneCode":"238","zone":"Atlantic/Cape_Verde","language":"pt","firstDay":null,"phoneMask":"+238-***-**-**"},{"country":"KY","phoneCode":"1-345","zone":"America/Cayman","language":"en","firstDay":null,"phoneMask":"+1-345-***-****"},{"country":"CF","phoneCode":"236","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+236-**-**-****"},{"country":"TD","phoneCode":"235","zone":"Africa/Ndjamena","language":"fr","firstDay":null,"phoneMask":"+235-**-**-**-**"},{"country":"CL","phoneCode":"56","zone":"America/Santiago","language":"es","firstDay":"Su","phoneMask":"+56-*-****-****"},{"country":"CN","phoneCode":"86","zone":"Asia/Shanghai","language":"zh","firstDay":"Su","phoneMask":["+86-***-****-***","+86-***-****-****","+86-**-*****-*****"]},{"country":"CX","phoneCode":"61","zone":"Indian/Christmas","language":"en","firstDay":null},{"country":"CC","phoneCode":"61","zone":"Indian/Cocos","language":"ms","firstDay":null},{"country":"CO","phoneCode":"57","zone":"America/Bogota","language":"es","firstDay":"Su","phoneMask":"+57-***-***-****"},{"country":"KM","phoneCode":"269","zone":"Indian/Comoro","language":"ar","firstDay":null,"phoneMask":"+269-**-*****"},{"country":"CK","phoneCode":"682","zone":"Pacific/Rarotonga","language":"en","firstDay":null,"phoneMask":"+682-**-***"},{"country":"CR","phoneCode":"506","zone":"America/Costa_Rica","language":"es","firstDay":"Su","phoneMask":"+506-****-****"},{"country":"HR","phoneCode":"385","zone":"Europe/Belgrade","language":"hr","firstDay":"Mo","phoneMask":"+385-**-***-***"},{"country":"CU","phoneCode":"53","zone":"America/Havana","language":"es","firstDay":null,"phoneMask":"+53-*-***-****"},{"country":"CW","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+599-***-****"},{"country":"CY","phoneCode":"357","zone":"Asia/Nicosia","language":"el","firstDay":null,"phoneMask":"+357-**-***-***"},{"country":"CZ","phoneCode":"420","zone":"Europe/Prague","language":"cs","languageAlternative":["cz"],"firstDay":"Mo","phoneMask":"+420-***-***-***"},{"country":"CD","phoneCode":"243","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+243-***-***-***"},{"country":"DK","phoneCode":"45","zone":"Europe/Copenhagen","language":"da","firstDay":"Mo","phoneMask":"+45-**-**-**-**"},{"country":"DJ","phoneCode":"253","zone":"Africa/Djibouti","language":"fr","firstDay":null,"phoneMask":"+253-**-**-**-**"},{"country":"DM","phoneCode":"1-767","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-767-***-****"},{"country":"DO","phoneCode":"1-809","zone":"North America","language":"America/Santo_Domingo","firstDay":"Su","phoneMask":["+1-809-***-****","+1-829-***-****","+1-849-***-****"]},{"country":"TL","phoneCode":"670","zone":"Asia/Dili","language":"tet","firstDay":null,"phoneMask":["+670-***-****","+670-77-*-*****","+670-78-*-*****"]},{"country":"EC","phoneCode":"593","zone":"America/Guayaquil","language":"es","firstDay":"Su","phoneMask":["+593-*-***-****","+593-**-***-****"]},{"country":"EG","phoneCode":"20","zone":"Africa/Cairo","language":"ar","firstDay":"Sa","phoneMask":"+20-***-***-****"},{"country":"SV","phoneCode":"503","zone":"America/El_Salvador","language":"es","firstDay":"Su","phoneMask":"+503-**-**-****"},{"country":"GQ","phoneCode":"240","zone":"Africa/Lagos","language":"es","firstDay":null,"phoneMask":"+240-**-***-****"},{"country":"ER","phoneCode":"291","zone":"Africa/Asmara","language":"aa","firstDay":null,"phoneMask":"+291-*-***-***"},{"country":"EE","phoneCode":"372","zone":"Europe/Tallinn","language":"et","firstDay":"Mo","phoneMask":["+372-***-****","+372-****-****"]},{"country":"ET","phoneCode":"251","zone":"Africa/Addis_Ababa","language":"am","firstDay":null,"phoneMask":"+251-**-***-****"},{"country":"FK","phoneCode":"500","zone":"Atlantic/Stanley","language":"en","firstDay":null,"phoneMask":"+500-*****"},{"country":"FO","phoneCode":"298","zone":"Atlantic/Faroe","language":"fo","firstDay":null,"phoneMask":"+298-***-***"},{"country":"FJ","phoneCode":"679","zone":"Pacific/Fiji","language":"en","firstDay":null,"phoneMask":"+679-**-*****"},{"country":"FI","phoneCode":"358","zone":"Europe/Helsinki","language":"fi","firstDay":"Mo","phoneMask":["+358-***-***-**-*","+358-***-***-**-**"]},{"country":"FR","phoneCode":"33","zone":"Europe/Paris","language":"fr","firstDay":"Mo","phoneMask":["+33-***-***-***","+262-*****-****","+508-**-****","+590-***-***-***"]},{"country":"PF","phoneCode":"689","zone":"Pacific/Tahiti","language":"fr","firstDay":null,"phoneMask":"+689-**-**-**"},{"country":"GA","phoneCode":"241","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+241-*-**-**-**"},{"country":"GM","phoneCode":"220","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+220-***-**-**"},{"country":"GE","phoneCode":"995","zone":"Asia/Tbilisi","language":"ka","firstDay":"Mo","phoneMask":"+995-***-***-***"},{"country":"DE","phoneCode":"49","zone":"Europe/Berlin","language":"de","firstDay":"Mo","phoneMask":["+49-***-***","+49-***-***-****","+49-****-***-****"]},{"country":"GH","phoneCode":"233","zone":"Africa/Accra","language":"en","firstDay":null,"phoneMask":"+233-***-***-***"},{"country":"GI","phoneCode":"350","zone":"Europe/Gibraltar","language":"en","firstDay":null,"phoneMask":"+350-***-*****"},{"country":"GR","phoneCode":"30","zone":"Europe/Athens","language":"el","firstDay":"Mo","phoneMask":"+30-***-***-****"},{"country":"GL","phoneCode":"299","zone":"America/Godthab","language":"kl","firstDay":null,"phoneMask":"+299-**-**-**"},{"country":"GD","phoneCode":"1-473","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-473-***-****"},{"country":"GU","phoneCode":"1-671","zone":"Pacific/Guam","language":"en","firstDay":null,"phoneMask":"+1-671-***-****"},{"country":"GT","phoneCode":"502","zone":"America/Guatemala","language":"es","firstDay":"Su","phoneMask":"+502-*-***-****"},{"country":"GG","phoneCode":"44-1481","zone":"Europe/London","language":"en","firstDay":null},{"country":"GN","phoneCode":"224","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+224-**-***-***"},{"country":"GW","phoneCode":"245","zone":"Africa/Bissau","language":"pt","firstDay":null,"phoneMask":"+245-*-******"},{"country":"GY","phoneCode":"592","zone":"America/Guyana","language":"en","firstDay":null,"phoneMask":"+592-***-****"},{"country":"HT","phoneCode":"509","zone":"America/Port-au-Prince","language":"ht","firstDay":null,"phoneMask":"+509-**-**-****"},{"country":"HN","phoneCode":"504","zone":"America/Tegucigalpa","language":"es","firstDay":"Su","phoneMask":"+504-****-****"},{"country":"HK","phoneCode":"852","zone":"Asia/Hong_Kong","language":"zh","firstDay":"Su","phoneMask":"+852-****-****"},{"country":"HU","phoneCode":"36","zone":"Europe/Budapest","language":"hu","firstDay":"Mo","phoneMask":"+36-***-***-***","nameFormat":"lf"},{"country":"IS","phoneCode":"354","zone":"Atlantic/Reykjavik","language":"is","firstDay":"Mo","phoneMask":"+354-***-****"},{"country":"IN","phoneCode":"91","zone":"Asia/Kolkata","language":"en","firstDay":"Mo","phoneMask":"+91-****-***-***"},{"country":"ID","phoneCode":"62","zone":"Asia/Jakarta","language":"id","firstDay":"Mo","phoneMask":["+62-**-***-**","+62-**-***-***","+62-**-***-****","+62-8-**-***-***","+62-8-**-***-****","+62-8-**-***-**-***"]},{"country":"IR","phoneCode":"98","zone":"Asia/Tehran","language":"fa","firstDay":"Sa","phoneMask":"+98-***-***-****"},{"country":"IQ","phoneCode":"964","zone":"Asia/Baghdad","language":"ar","firstDay":"Sa","phoneMask":"+964-***-***-****"},{"country":"IE","firstDay":"Mo","language":"en","phoneCode":"353","phoneMask":"+353-***-***-***","zone":"Europe/Dublin"},{"country":"IM","firstDay":null,"language":"Pound","phoneCode":"44-1624","zone":"Isle of Man"},{"country":"IL","firstDay":"Su","language":"he","languageAlternative":["il"],"phoneCode":"972","phoneMask":["+972-*-***-****","+972-5-*-***-****"],"zone":"Asia/Jerusalem"},{"country":"IT","firstDay":"Mo","language":"it","phoneCode":"39","phoneMask":"+39-***-****-***","zone":"Europe/Rome"},{"country":"CI","phoneCode":"225","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+225-**-***-***"},{"country":"JM","phoneCode":"1-876","zone":"America/Jamaica","language":"en","firstDay":"Su","phoneMask":"+1-876-***-****"},{"country":"JP","phoneCode":"81","zone":"Asia/Tokyo","language":"ja","firstDay":"Su","phoneMask":["+81-***-***-***","+81-**-****-****"],"nameFormat":"lf"},{"country":"JE","phoneCode":"44-1534","zone":"Europe/London","language":"en","firstDay":null},{"country":"JO","phoneCode":"962","zone":"Asia/Amman","language":"ar","firstDay":"Sa","phoneMask":"+962-*-****-****"},{"country":"KZ","phoneCode":"7","zone":"Asia/Almaty","language":"kk","firstDay":"Mo","phoneMask":["+7-6-**-***-**-**","+7-7-**-***-**-**"],"nameFormat":"lf"},{"country":"KE","phoneCode":"254","zone":"Africa/Nairobi","language":"en","firstDay":"Su","phoneMask":"+254-***-******"},{"country":"KI","phoneCode":"686","zone":"Pacific/Tarawa","language":"en","firstDay":null,"phoneMask":"+686-**-***"},{"country":"XK","phoneCode":"383","zone":"Europe/Belgrade","language":"sq","firstDay":"Mo"},{"country":"KW","phoneCode":"965","zone":"Asia/Kuwait","language":"ar","firstDay":"Sa","phoneMask":"+965-****-****"},{"country":"KG","phoneCode":"996","zone":"Asia/Bishkek","language":"ky","firstDay":"Mo","phoneMask":"+996-***-***-***"},{"country":"LA","phoneCode":"856","zone":"Asia/Vientiane","language":"lo","firstDay":null,"phoneMask":["+856-**-***-***","+856-20-**-***-***"]},{"country":"LV","phoneCode":"371","zone":"Europe/Riga","language":"lv","firstDay":"Mo","phoneMask":"+371-**-***-***"},{"country":"LB","phoneCode":"961","zone":"Asia/Beirut","language":"ar","firstDay":"Mo","phoneMask":["+961-*-***-***","+961-**-***-***"]},{"country":"LS","phoneCode":"266","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+266-*-***-****"},{"country":"LR","phoneCode":"231","zone":"Africa/Monrovia","language":"en","firstDay":null,"phoneMask":"+231-**-***-***"},{"country":"LY","phoneCode":"218","zone":"Africa/Tripoli","language":"ar","firstDay":"Sa","phoneMask":["+218-**-***-***","+218-21-***-****"]},{"country":"LI","phoneCode":"423","zone":"Europe/Zurich","language":"de","firstDay":null,"phoneMask":"+423-***-***-****"},{"country":"LT","phoneCode":"370","zone":"Europe/Vilnius","language":"lt","firstDay":"Mo","phoneMask":"+370-***-**-***"},{"country":"LU","phoneCode":"352","zone":"Europe/Luxembourg","language":"lb","firstDay":"Mo","phoneMask":"+352-***-***-***"},{"country":"MO","phoneCode":"853","zone":"Asia/Macau","language":"zh","firstDay":null,"phoneMask":"+853-****-****"},{"country":"MK","phoneCode":"389","zone":"Europe/Belgrade","language":"mk","firstDay":"Mo","phoneMask":"+389-**-***-***"},{"country":"MG","phoneCode":"261","zone":"Indian/Antananarivo","language":"fr","firstDay":null,"phoneMask":"+261-**-**-*****"},{"country":"MW","phoneCode":"265","zone":"Africa/Maputo","language":"ny","firstDay":null,"phoneMask":["+265-*-****-****","+265-1-***-***"]},{"country":"MY","phoneCode":"60","zone":"Asia/Kuala_Lumpur","language":"ms","firstDay":"Mo","phoneMask":["+60-*-***-***","+60-**-***-***","+60-**-***-****","+60-***-***-***"]},{"country":"MV","phoneCode":"960","zone":"Indian/Maldives","language":"dv","firstDay":null,"phoneMask":"+960-***-****"},{"country":"ML","phoneCode":"223","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+223-**-**-****"},{"country":"MT","phoneCode":"356","zone":"Europe/Malta","language":"mt","firstDay":null,"phoneMask":"+356-****-****"},{"country":"MH","phoneCode":"692","zone":"Pacific/Majuro","language":"mh","firstDay":null,"phoneMask":"+692-***-****"},{"country":"MR","phoneCode":"222","zone":"Africa/Abidjan","language":"ar","firstDay":null,"phoneMask":"+222-**-**-****"},{"country":"MU","phoneCode":"230","zone":"Indian/Mauritius","language":"en","firstDay":null,"phoneMask":"+230-***-****"},{"country":"YT","phoneCode":"262","zone":"Indian/Mayotte","language":"fr","firstDay":null},{"country":"MX","phoneCode":"52","zone":"America/Mexico_City","language":"es","firstDay":"Su","phoneMask":["+52-**-**-****","+52-***-***-****"]},{"country":"FM","phoneCode":"691","zone":"Pacific/Pohnpei","language":"en","firstDay":null,"phoneMask":"+691-***-****"},{"country":"MD","phoneCode":"373","zone":"Europe/Chisinau","language":"ro","firstDay":null,"phoneMask":"+373-****-****"},{"country":"MC","phoneCode":"377","zone":"Europe/Monaco","language":"fr","firstDay":"Mo","phoneMask":["+377-**-***-***","+377-***-***-***"]},{"country":"MN","phoneCode":"976","zone":"Asia/Ulaanbaatar","language":"mn","firstDay":"Mo","phoneMask":"+976-**-**-****"},{"country":"ME","phoneCode":"382","zone":"Europe/Belgrade","language":"sr","firstDay":null,"phoneMask":"+382-**-***-***"},{"country":"MS","phoneCode":"1-664","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-664-***-****"},{"country":"MA","phoneCode":"212","zone":"Africa/Casablanca","language":"ar","firstDay":"Mo","phoneMask":"+212-**-****-***"},{"country":"MZ","phoneCode":"258","zone":"Africa/Maputo","language":"pt","firstDay":null,"phoneMask":"+258-**-***-***"},{"country":"MM","phoneCode":"95","zone":"Asia/Rangoon","language":"my","firstDay":null,"phoneMask":["+95-***-***","+95-*-***-***","+95-**-***-***"]},{"country":"NA","phoneCode":"264","zone":"Africa/Windhoek","language":"en","firstDay":null,"phoneMask":"+264-**-***-****"},{"country":"NR","phoneCode":"674","zone":"Pacific/Nauru","language":"na","firstDay":null,"phoneMask":"+674-***-****"},{"country":"NP","phoneCode":"977","zone":"Asia/Kathmandu","language":"ne","firstDay":null,"phoneMask":"+977-**-***-***"},{"country":"NL","phoneCode":"31","zone":"Europe/Amsterdam","language":"nl","firstDay":"Mo","phoneMask":"+31-**-***-****"},{"country":"AN","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":["+599-***-****","+599-9-***-****"]},{"country":"NC","phoneCode":"687","zone":"Pacific/Noumea","language":"fr","firstDay":null,"phoneMask":"+687-**-****"},{"country":"NZ","phoneCode":"64","zone":"Pacific/Auckland","language":"en","firstDay":"Mo","phoneMask":["+64-**-***-***","+64-***-***-***","+64-***-***-****"]},{"country":"NI","phoneCode":"505","zone":"America/Managua","language":"es","firstDay":"Su","phoneMask":"+505-****-****"},{"country":"NE","phoneCode":"227","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+227-**-**-****"},{"country":"NG","phoneCode":"234","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":["+234-**-***-**","+234-**-***-***","+234-***-***-****"]},{"country":"NU","phoneCode":"683","zone":"Pacific/Niue","language":"niu","firstDay":null,"phoneMask":"+683-****"},{"country":"KP","phoneCode":"850","zone":"Asia/Pyongyang","language":"ko","firstDay":null,"phoneMask":["+850-***-***","+850-**-***-***","+850-****-****","+850-***-****-***","+850-****-*************","+850-191-***-****"]},{"country":"MP","phoneCode":"1-670","zone":"Pacific/Saipan","language":"fil","firstDay":null,"phoneMask":"+1-670-***-****"},{"country":"NO","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":"Mo","phoneMask":"+47-***-**-***"},{"country":"OM","phoneCode":"968","zone":"Asia/Muscat","language":"ar","firstDay":"Sa","phoneMask":"+968-**-***-***"},{"country":"PK","phoneCode":"92","zone":"Asia/Karachi","language":"ur","firstDay":"Mo","phoneMask":"+92-***-***-****"},{"country":"PW","phoneCode":"680","zone":"Pacific/Palau","language":"pau","firstDay":null,"phoneMask":"+680-***-****"},{"country":"PS","phoneCode":"970","zone":"Asia/Hebron","language":"ar","firstDay":null,"phoneMask":"+970-**-***-****"},{"country":"PA","phoneCode":"507","zone":"America/Panama","language":"es","firstDay":"Su","phoneMask":"+507-***-****"},{"country":"PG","phoneCode":"675","zone":"Pacific/Port_Moresby","language":"en","firstDay":null,"phoneMask":"+675-***-**-***"},{"country":"PY","phoneCode":"595","zone":"America/Asuncion","language":"es","firstDay":"Mo","phoneMask":"+595-***-***-***"},{"country":"PE","phoneCode":"51","zone":"America/Lima","language":"es","firstDay":"Su","phoneMask":"+51-***-***-***"},{"country":"PH","phoneCode":"63","zone":"Asia/Manila","language":"tl","firstDay":"Su","phoneMask":"+63-***-***-****"},{"country":"PN","phoneCode":"64","zone":"Pacific/Pitcairn","language":"en","firstDay":null},{"country":"PL","phoneCode":"48","zone":"Europe/Warsaw","language":"pl","firstDay":"Mo","phoneMask":"+48-***-***-***"},{"country":"PT","phoneCode":"351","zone":"Europe/Lisbon","language":"pt","firstDay":"Mo","phoneMask":"+351-**-***-****"},{"country":"PR","phoneCode":"1-787","zone":"San Juan","language":"Dollar","firstDay":"Su"},{"country":"QA","phoneCode":"974","zone":"Asia/Qatar","language":"ar","firstDay":"Sa","phoneMask":"+974-****-****"},{"country":"CG","phoneCode":"242","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+242-**-***-****"},{"country":"RE","phoneCode":"262","zone":"Indian/Reunion","language":"fr","firstDay":null,"phoneMask":"+262-*****-****"},{"country":"RO","phoneCode":"40","zone":"Europe/Bucharest","language":"ro","firstDay":"Mo","phoneMask":"+40-**-***-****"},{"country":"RU","phoneCode":"7","phoneWithin":"8","zone":"Europe/Moscow","language":"ru","firstDay":"Mo","phoneMask":"+7-***-***-**-**","nameFormat":"lsf"},{"country":"RW","phoneCode":"250","zone":"Africa/Maputo","language":"rw","firstDay":null,"phoneMask":"+250-***-***-***"},{"country":"BL","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"SH","phoneCode":"290","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+290-****"},{"country":"KN","phoneCode":"1-869","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-869-***-****"},{"country":"LC","phoneCode":"1-758","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-758-***-****"},{"country":"MF","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"PM","phoneCode":"508","zone":"America/Miquelon","language":"fr","firstDay":null},{"country":"VC","phoneCode":"1-784","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-784-***-****"},{"country":"WS","phoneCode":"685","zone":"Pacific/Apia","language":"sm","firstDay":null,"phoneMask":"+685-**-****"},{"country":"SM","phoneCode":"378","zone":"Europe/Rome","language":"it","firstDay":null,"phoneMask":"+378-****-******"},{"country":"ST","phoneCode":"239","zone":"Africa/Abidjan","language":"pt","firstDay":null,"phoneMask":"+239-**-*****"},{"country":"SA","phoneCode":"966","zone":"Asia/Riyadh","language":"ar","firstDay":"Sa","phoneMask":["+966-*-***-****","+966-5-****-****"]},{"country":"SN","phoneCode":"221","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+221-**-***-****"},{"country":"RS","phoneCode":"381","zone":"Europe/Belgrade","language":"sr","firstDay":"Mo","phoneMask":"+381-**-***-****"},{"country":"SC","phoneCode":"248","zone":"Indian/Mahe","language":"en","firstDay":null,"phoneMask":"+248-*-***-***"},{"country":"SL","phoneCode":"232","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+232-**-******"},{"country":"SG","phoneCode":"65","zone":"Asia/Singapore","language":"cmn","firstDay":"Mo","phoneMask":"+65-****-****"},{"country":"SX","phoneCode":"1-721","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+1-721-***-****"},{"country":"SK","phoneCode":"421","zone":"Europe/Prague","language":"sk","firstDay":"Mo","phoneMask":"+421-***-***-***"},{"country":"SI","phoneCode":"386","zone":"Europe/Belgrade","language":"sl","firstDay":null,"phoneMask":"+386-**-***-***"},{"country":"SB","phoneCode":"677","zone":"Pacific/Guadalcanal","language":"en","firstDay":null,"phoneMask":["+677-*****","+677-***-****"]},{"country":"SO","phoneCode":"252","zone":"Africa/Mogadishu","language":"so","firstDay":null,"phoneMask":["+252-*-***-***","+252-**-***-***"]},{"country":"ZA","phoneCode":"27","zone":"Africa/Johannesburg","language":"zu","firstDay":"Su","phoneMask":"+27-**-***-****"},{"country":"KR","phoneCode":"82","zone":"Asia/Seoul","language":"ko","firstDay":"Su","phoneMask":["+82-**-***-****","+82-**-***-****-**"],"nameFormat":"lf"},{"country":"SS","phoneCode":"211","zone":"Africa/Khartoum","language":"en","firstDay":null,"phoneMask":"+211-**-***-****"},{"country":"ES","phoneCode":"34","zone":"Europe/Madrid","language":"es","firstDay":"Mo","phoneMask":"+34-***-***-***"},{"country":"LK","phoneCode":"94","zone":"Asia/Colombo","language":"si","firstDay":null,"phoneMask":"+94-**-***-****"},{"country":"SD","phoneCode":"249","zone":"Africa/Khartoum","language":"ar","firstDay":null,"phoneMask":"+249-**-***-****"},{"country":"SR","phoneCode":"597","zone":"America/Paramaribo","language":"nl","firstDay":null,"phoneMask":["+597-***-***","+597-***-****"]},{"country":"SJ","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":null},{"country":"SZ","phoneCode":"268","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+268-**-**-****"},{"country":"SE","phoneCode":"46","zone":"Europe/Stockholm","language":"sv","firstDay":"Mo","phoneMask":"+46-**-***-****"},{"country":"CH","phoneCode":"41","zone":"Europe/Zurich","language":"de","firstDay":"Mo","phoneMask":"+41-**-***-****"},{"country":"SY","phoneCode":"963","zone":"Asia/Damascus","language":"ar","firstDay":"Sa","phoneMask":"+963-**-****-***"},{"country":"TW","phoneCode":"886","zone":"Asia/Taipei","language":"zh","firstDay":"Su","phoneMask":["+886-****-****","+886-*-****-****"]},{"country":"TJ","phoneCode":"992","zone":"Asia/Dushanbe","language":"tg","firstDay":null,"phoneMask":"+992-**-***-****"},{"country":"TZ","phoneCode":"255","zone":"Africa/Dar_es_Salaam","language":"sw","firstDay":null,"phoneMask":"+255-**-***-****"},{"country":"TH","phoneCode":"66","zone":"Asia/Bangkok","language":"th","firstDay":"Mo","phoneMask":"+66-**-***-****"},{"country":"TG","phoneCode":"228","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+228-**-***-***"},{"country":"TK","phoneCode":"690","zone":"Pacific/Fakaofo","language":"tkl","firstDay":null,"phoneMask":"+690-****"},{"country":"TO","phoneCode":"676","zone":"Pacific/Tongatapu","language":"to","firstDay":null,"phoneMask":"+676-*****"},{"country":"TT","phoneCode":"1-868","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-868-***-****"},{"country":"TN","phoneCode":"216","zone":"Africa/Tunis","language":"ar","firstDay":"Mo","phoneMask":"+216-**-***-***"},{"country":"TR","phoneCode":"90","zone":"Europe/Istanbul","language":"tr","firstDay":"Mo","phoneMask":"+90-***-***-****"},{"country":"TM","phoneCode":"993","zone":"Asia/Ashgabat","language":"tk","firstDay":null,"phoneMask":"+993-*-***-****"},{"country":"TC","phoneCode":"1-649","zone":"America/Grand_Turk","language":"en","firstDay":null,"phoneMask":"+1-649-***-****"},{"country":"TV","phoneCode":"688","zone":"Pacific/Funafuti","language":"tvl","firstDay":null,"phoneMask":["+688-2-****","+688-90-****"]},{"country":"VI","phoneCode":"1-340","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-340-***-****"},{"country":"UG","phoneCode":"256","zone":"Africa/Kampala","language":"en","firstDay":null,"phoneMask":"+256-***-***-***"},{"country":"UA","phoneCode":"380","zone":"Europe/Kiev","language":"uk","languageAlternative":["ua"],"firstDay":"Mo","phoneMask":"+380-**-***-**-**"},{"country":"AE","phoneCode":"971","zone":"Asia/Dubai","language":"ar","firstDay":"Sa","phoneMask":["+971-*-***-****","+971-5-*-***-****"]},{"country":"UY","phoneCode":"598","zone":"America/Montevideo","language":"es","firstDay":"Mo","phoneMask":"+598-*-***-**-**"},{"country":"UZ","phoneCode":"998","zone":"Asia/Tashkent","language":"uz","firstDay":"Mo","phoneMask":"+998-**-***-****"},{"country":"VU","phoneCode":"678","zone":"Pacific/Efate","language":"bi","firstDay":null,"phoneMask":["+678-*****","+678-**-*****"]},{"country":"VA","phoneCode":"379","zone":"Europe/Rome","language":"la","firstDay":null,"phoneMask":"+39-6-698-*****"},{"country":"VE","phoneCode":"58","zone":"America/Caracas","language":"es","firstDay":"Su","phoneMask":"+58-***-***-****"},{"country":"VN","phoneCode":"84","zone":"Asia/Ho_Chi_Minh","language":"vi","firstDay":"Mo","phoneMask":["+84-**-****-***","+84-***-****-***"],"nameFormat":"fsl"},{"country":"WF","phoneCode":"681","zone":"Pacific/Wallis","language":"wls","firstDay":null,"phoneMask":"+681-**-****"},{"country":"EH","phoneCode":"212","zone":"Africa/El_Aaiun","language":"ar","firstDay":null},{"country":"YE","phoneCode":"967","zone":"Asia/Aden","language":"ar","firstDay":"Sa","phoneMask":["+967-*-***-***","+967-**-***-***","+967-***-***-***"]},{"country":"ZM","phoneCode":"260","zone":"Africa/Maputo","language":"en","firstDay":null,"phoneMask":"+260-**-***-****"},{"country":"ZW","phoneCode":"263","zone":"Africa/Maputo","language":"en","firstDay":"Su","phoneMask":"+263-*-******"},{"country":"GF","phoneCode":"594","zone":"America/Cayenne","language":"fr","firstDay":"Mo","phoneMask":"+594-*****-****"},{"country":"MQ","phoneCode":"596","zone":"America/Martinique","language":"fr","firstDay":"Mo","phoneMask":"+596-***-**-**-**"},{"country":"NF","phoneCode":"672-3","zone":"Pacific/Norfolk","language":"en","firstDay":"Mo","phoneMask":"+672-3-**-***"},{"country":"IC","phoneCode":"3428","zone":"Europe/Berlin","language":"es","firstDay":"Mo"}]'), Xo = "geo-code", C = class C {
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
    return Qo;
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
    return e && (e.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (n = this.getByCodeFull(e)), !n && e.match(/[A-Z]{2}/) && (n = this.getByCountry(this.toCountry(e))), !n && e.match(/[a-z]{2}/) && (n = this.getByLanguage(this.toLanguage(e)))), this.toFull(Zo(n ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(e) {
    return this.getList().find(
      (n) => qo(e, [
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
    return E() && (this.storage.get() || ((e = document.querySelector("html")) == null ? void 0 : e.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
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
l(C, "storage", new lt(Xo)), l(C, "location"), l(C, "item"), l(C, "language"), l(C, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), C.location = C.findLocation(), C.language = C.findLanguage(C.location), C.item = C.getByCode(C.location);
let P = C;
const vt = "d-response-loading", Et = [], y = class y {
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
      return T(n) && (o["Content-Type"] = n), o;
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
    return `${n ? this.url : ""}${e}`.replace("{locale}", P.getLocation()).replace("{country}", P.getCountry()).replace("{language}", P.getLanguage());
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
    if (n !== "GET" && T(e))
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
  static getBodyForGet(e, n = "", o = "GET") {
    if (o === "GET") {
      const s = n.match(/\?/) ? "&" : "?", a = typeof e == "object" ? Mn(e) : e;
      if (T(a))
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
      const n = Fe(this.requestDefault);
      if (e instanceof FormData)
        x(n, (o, s) => {
          e.has(s) || e.set(s, o);
        });
      else if (U(e))
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
    return U(e) && (this.headers = e), y;
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
    return this.url = e, y;
  }
  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(e) {
    return this.preparationItem = e, y;
  }
  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(e) {
    return this.preparationEndItem = e, y;
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
    return this.response.push(...Y(e)), y;
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
    return this.response.find((a) => {
      if (B(Fe(a == null ? void 0 : a.disable)) !== !0 && (a.path instanceof RegExp && e.match(a.path) || e === a.path) && n === a.method && (Et.indexOf(a) === -1 || s)) {
        const r = this.addRequestDefault(a == null ? void 0 : a.request);
        let i = !1;
        if (o === r || r === "*any" ? i = !0 : T(o) && T(r) && U(o) && U(r) && !(o instanceof FormData) && !(r instanceof FormData) && Object.values(o).length === Object.values(r).length && (i = Object.entries(r).reduce(
          (u, [h, p]) => u && (p === (o == null ? void 0 : o[h]) || p === "*any"),
          !0
        )), i)
          return s && console.warn(`Response type: ${a.path}`), Et.push(a), !0;
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
      globalPreparation: a = !0,
      globalEnd: r = !0
    } = e, i = await this.makeEmulator(e);
    if (i)
      return i;
    let u = {};
    H.show();
    try {
      this.preparationItem && a && await this.makePreparation();
      const h = await this.makeQuery(e), p = r && this.preparationEndItem ? await this.makePreparationEnd(h) : {};
      if (this.status = h.status, this.statusText = h.statusText, p != null && p.reset)
        return H.hide(), await this.fetch(e);
      s ? u = await s(h) : "data" in p ? u = p.data : (h.headers.get("Content-Type") ?? "").match("application/json") ? u = await h.json() : u = { data: await h.text() };
    } catch (h) {
      o && console.error("Api: ", h), this.error = h;
    }
    return H.hide(), this.makeData(u, n);
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
      Jo(
        mn(e.response) ? e.response(n) : e.response
      ).then((s) => {
        Fe(e == null ? void 0 : e.lag) ? (H.show(), setTimeout(() => {
          this.stopResponseLoading(), o(s), H.hide();
        }, Go(0, 2e3))) : (this.stopResponseLoading(), o(s));
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
      devMode: a = !1
    } = e;
    if (s || a) {
      const r = this.addRequestDefault(e.request), i = this.getResponse(n, o, r, a);
      if (i) {
        const u = await this.fetchResponse(i, r);
        return a && console.warn("Response data:", n, r, u), u;
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
      pathFull: a = void 0,
      method: r = "GET",
      headers: i = {},
      type: u = "application/json;charset=UTF-8",
      init: h = {}
    } = e, p = a ?? this.getUrl(s, o), c = `${p}${this.getBodyForGet(n, p, r)}`, f = this.getHeaders(i, u), D = {
      ...h,
      method: r,
      body: this.getBody(n, r)
    };
    return f && (D.headers = f), await fetch(c, D);
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
    if (this.lastResponse = e, e && U(e) && ("message" in e && (this.lastMessage = String(e.message)), n && "data" in e)) {
      if (U(e.data)) {
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
    this.responseLoading && clearTimeout(this.responseLoading), E() && document.body.classList.add(vt);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  static stopResponseLoading() {
    this.responseLoading = setTimeout(() => {
      this.responseLoading = void 0, E() && document.body.classList.remove(vt);
    }, 1200);
  }
};
l(y, "url", "/api/"), l(y, "response", []), l(y, "responseLoading"), l(y, "headers", {}), l(y, "requestDefault"), l(y, "preparation", !1), l(y, "preparationItem"), l(y, "preparationEndItem"), l(y, "status"), l(y, "statusText"), l(y, "error"), l(y, "lastResponse"), l(y, "lastMessage");
let qe = y;
class es {
  /**
   * Constructor
   * @param callback function for the cache/ функция для кэша
   */
  constructor(e) {
    l(this, "cache");
    l(this, "cacheOld");
    l(this, "comparisons", []);
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
class ts {
  constructor() {
    l(this, "cache", {});
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
    return e in this.cache || (this.cache[e] = new es(n)), this.cache[e];
  }
}
const Re = class Re {
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
l(Re, "cache"), Re.cache = new ts();
let _t = Re;
function ht(t, e = !1) {
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
          if (e && E() && typeof (window == null ? void 0 : window[n]) == "function")
            return window[n];
        }
    }
  }
  return t;
}
const ns = "cookie-block";
class Cn {
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
l(Cn, "storage", new lt(ns));
const Ae = {};
class gs {
  constructor(e) {
    l(this, "value");
    l(this, "options", {});
    if (this.name = e, e in je)
      return je[e];
    this.value = Ae == null ? void 0 : Ae[e], je[e] = this;
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
    this.value = B(e), Object.assign(this.options, n), this.update();
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
    if (E() && !Cn.get()) {
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
  if (E())
    for (const e of document.cookie.split(";")) {
      const [n, o] = e.trim().split("=");
      n && T(o) && (Ae[n] = ht(o));
    }
})();
const je = {}, te = class te {
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
    return this.toNumber(e).forEach((a) => {
      s === "" && a in n ? (o = n[a], n = n[a].next) : s += a;
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
    if (T(e) && Array.isArray(n) && n.length > 0) {
      const o = this.removeZero(e), s = o.length;
      for (const a of n)
        if (this.getUnnecessaryLength(a) === s)
          return this.toStandard(o, a);
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
    const e = x(P.getList(), (n) => {
      if (n != null && n.phoneMask)
        return {
          phone: (n == null ? void 0 : n.phoneCode) && Number(n.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: (n == null ? void 0 : n.phoneWithin) || 0,
          mask: Y(n.phoneMask),
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
        if (this.toNumber(n).forEach((a) => {
          a in o || (o[a] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), s = o[a], o = o[a].next;
        }), s) {
          s.value === void 0 && (s.info = e, s.value = e.value);
          const a = this.toWithin(n, e.within);
          s.mask.push(a), s.maskFull.push(a.replace(/\d/ig, "*")), s.items.push(e);
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
l(te, "list", []), l(te, "map", {}), te.makeList(), te.makeMap();
let At = te;
const W = class W {
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
    const o = B(n);
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
      (...n) => (e[n[1]] = ht(n[2]), "")
    ), e;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Mn(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
    x(this.watch, (n, o) => {
      var s;
      ((s = this.hash) == null ? void 0 : s[o]) !== (e == null ? void 0 : e[o]) && n.forEach((a) => a(e[o]));
    });
  }
};
l(W, "hash", {}), l(W, "watch", {}), l(W, "block", !1), E() && (W.reload(), addEventListener("hashchange", () => W.reload()));
let zt = W;
const Be = "__UI_ICON", St = 320, bt = "--LOAD--", pe = class pe {
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
    var a, r;
    const s = ((a = this.icons) == null ? void 0 : a[this.getName(e)]) ?? ((r = this.icons) == null ? void 0 : r[e]) ?? `${e.replace(/^@/, n ?? this.url)}.svg`;
    return typeof s == "string" ? s === bt && o > 0 ? (await this.wait(), this.get(e, n, o - St)) : s : await s;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return x(this.icons, (e, n) => n.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${qe.isLocalhost(), ""}${this.url}`;
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
    this.icons[this.getName(e)] = bt;
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
    x(e, (n, o) => this.add(o, n));
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
    return new Promise((e) => setTimeout(() => e(), St));
  }
};
l(pe, "icons", {}), l(pe, "url", "/icons/"), E() && (Be in window || (window[Be] = {}), pe.icons = window[Be]);
let wt = pe;
class kn {
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
l(kn, "router");
function os(t, e, n) {
  var o;
  return ((o = $(t)) == null ? void 0 : o[e]) ?? n;
}
function ss(t, e, n) {
  const o = $(t);
  if (o) {
    const s = os(o, e);
    if (Ce(s) && Ce(n))
      x(n, (a, r) => {
        s[r] = B(a);
      });
    else {
      const a = B(n);
      !(e in o) && typeof a == "string" ? o.setAttribute(e.toString(), a) : o[e] = B(n);
    }
  }
  return o;
}
function Nt(t, e = "div", n, o) {
  if (!E())
    return;
  const s = document.createElement(e);
  return typeof n == "function" ? n(s) : U(n) && x(n, (a, r) => {
    ss(s, r, a);
  }), t == null || t.insertBefore(s, null), s;
}
const ge = class ge {
  /**
   * Constructor
   */
  constructor() {
    l(this, "item", oo());
    l(this, "is", N(() => this.item.value !== void 0));
    ge.is().then((e) => {
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
    return Nt(document.body, "div", (e) => {
      e.style.height = "24px", e.style.overflowY = "scroll", e.style.position = "fixed", e.style.width = "100%", Nt(e, "div", (n) => {
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
l(ge, "storage", new lt("scrollbar", !0)), l(ge, "calculate", !1);
let Rt = ge;
function as(t) {
  return t && "class" in t && typeof t.class == "string" ? t.class : void 0;
}
function rs(t, e, n) {
  const o = as(e);
  return n && o ? `${n}.${o}` : n || o || t;
}
function Ot(t, e, n, o) {
  const s = rs(t, e, o);
  return Uo(t, { key: s, ...e }, n);
}
const z = class z {
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
    P.set(e, !0), this.item.value = P.getItem();
  }
};
l(z, "item", so(P.get())), l(z, "country", N(() => z.item.value.country)), l(z, "language", N(() => z.item.value.language)), l(z, "standard", N(() => z.item.value.standard)), l(z, "firstDay", N(() => z.item.value.firstDay));
let Tt = z;
function is(t) {
  return t.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (e) => `${e.toLowerCase()}`).replace(/^[A-Z]/, (e) => e.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (e) => `-${e.toLowerCase()}`).replace(/[A-Z]/g, (e) => e.toLowerCase());
}
class ds {
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
    l(this, "isEnabled", N(
      () => !this.props.disabled && !this.props.readonly && (!this.progress || !this.progress.isProgress.value)
    ));
    /**
     * checks if the read-only status is enabled/ проверяет, включён ли статус "только для чтения"
     */
    l(this, "isReadonly", N(() => !!this.props.readonly));
    /**
     * checks if the element is disabled/ проверяет, отключён ли элемент
     */
    l(this, "isDisabled", N(() => !!this.props.disabled));
    /**
     * checks if the element is disabled or the value is empty/
     * проверяет, отключён ли элемент или пустое ли значение
     */
    l(this, "isDisabledOrUndefined", N(() => this.isDisabled.value || void 0));
    this.props = e, this.progress = n;
  }
}
class ys {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param enabled Object for working with activity status/ Объект для работы со статусом активности
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(e, n, o) {
    l(this, "refs");
    this.props = e, this.enabled = n, this.emits = o, this.refs = ro(e);
  }
  /**
   * Exported values
   *
   * Экспортируемые значения
   */
  get expose() {
    return {
      value: this.refs.value,
      detail: this.refs.detail
    };
  }
  /**
   * Event trigger function
   *
   * Функция вызова события
   * @param event event object/ объект события
   * @param options data object/ объект с данными
   */
  onClick(e, n) {
    if (this.emits)
      if (n)
        this.emit(e, n);
      else if (this.toRouter())
        e.preventDefault();
      else if (this.enabled) {
        const o = this.getOptions(e);
        (this.enabled.isEnabled.value || o.type === "icon-trailing" && !this.enabled.isDisabled.value) && this.emit(e, o);
      } else
        this.emit(e, this.getOptions(e));
  }
  /**
   * Parameters for the event
   *
   * Параметры для события
   */
  getOptions(e) {
    return {
      type: this.getTargetType(e),
      value: this.props.value,
      detail: this.props.detail
    };
  }
  /**
   * Returns the type of the selected item
   *
   * Возвращает тип выбранного элемента
   */
  getTargetType(e) {
    var o, s, a;
    return ((a = (s = (o = e.target) == null ? void 0 : o.closest("[data-event-type]")) == null ? void 0 : s.dataset) == null ? void 0 : a.eventType) ?? "click";
  }
  /**
   * Changing the link through the router
   *
   * Изменение ссылки через router
   */
  toRouter() {
    return this.props.to ? (kn.push(this.props.to), !0) : !1;
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
class ms {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param labelReplacing additional elements/ дополнительные элементы
   * @param alternativeSlots alternative slots/ альтернативные слоты
   */
  constructor(e, n, o, s, a, r, i) {
    /** Label presence check/ Проверка наличия метки */
    l(this, "isLabel", N(() => {
      var e;
      return this.props.label || (e = this.labelReplacing) != null && e.value ? !0 : this.slots ? this.alternativeSlots ? "label" in this.slots : "default" in this.slots : !1;
    }));
    this.props = e, this.className = n, this.classesExtra = o, this.slots = s, this.elementsExtra = a, this.labelReplacing = r, this.alternativeSlots = i;
  }
  /**
   * Render the label
   *
   * Рендер метки
   * @param childrenExtra additional children/ дополнительные дочерние элементы
   */
  render(e) {
    const n = [];
    if (this.isLabel.value) {
      const o = [
        ...this.initLabel(),
        ...this.initLabelReplacing(),
        ...this.initSlot()
      ];
      this.elementsExtra && o.push(...this.elementsExtra()), e && o.push(...e), o.length > 0 && n.push(
        Ot(
          "span",
          { class: this.getClassName() },
          o,
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
    return this.classesExtra && e.push(this.classesExtra), e;
  }
  /**
   * Adds the label text if it exists
   *
   * Добавляет текст метки, если он есть
   */
  initLabel() {
    return T(this.props.label) ? [this.props.label] : [];
  }
  /**
   * Adds alternative label text if it exists
   *
   * Добавляет альтернативный текст метки, если он есть
   */
  initLabelReplacing() {
    var e;
    return T((e = this.labelReplacing) == null ? void 0 : e.value) ? [
      Ot(
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
    var e, n, o, s;
    if (this.slots) {
      if (this.alternativeSlots) {
        if ("label" in this.slots)
          return [(n = (e = this.slots).label) == null ? void 0 : n.call(e, {})];
      } else if ("default" in this.slots)
        return [(s = (o = this.slots).default) == null ? void 0 : s.call(o, {})];
    }
    return [];
  }
}
const m = {}, cs = "@dxt-ui", us = "node_modules", ls = "src", hs = "constructors", fs = "properties.json", ne = class ne {
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
    return m.existsSync(this.joinPath(e));
  }
  /**
   * Checks whether it is a directory.
   *
   * Проверяет, является ли это директорией.
   * @param path name of the element being checked/ название проверяемого элемента
   */
  static isDir(e) {
    var n;
    return this.is(e) ? ((n = m.statSync(this.joinPath(e))) == null ? void 0 : n.isDirectory()) ?? !1 : !this.joinPath(e).match(/\.\w+$/);
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
    return m.join(...Y(e));
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
    return this.joinPath([...Y(e), this.getFileName(n, o)]);
  }
  /**
   * Returns the root path.
   *
   * Возвращает корневой путь.
   */
  static getRoot() {
    return this.root;
  }
  /**
   * Returns the root project path
   *
   * Возвращает корневой путь проекта
   * @param rootProject root project path/ путь к корневому проекту
   * @param maxDepth maximum depth of search for the root project/ максимальная глубина поиска корневого проекта
   */
  static getRootProject(e = this.root, n = 10) {
    const o = this.joinPath([e, us, cs]);
    if (this.readDir(o).length > 0)
      return o;
    if (e.match(m.sep) && n > 0)
      return this.getRootProject(
        e.replace(/\/[^/]+$/, ""),
        n - 1
      );
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
    return n && n !== "" ? `${is(e)}.${n}` : e;
  }
  /**
   * Returns the path to the directory, removing the file name from the path.
   *
   * Возвращает путь к директории, убрав название файла из пути.
   * @param path path to the file/ путь к файлу
   */
  static getPathDir(e) {
    return this.isDir(e) ? this.joinPath(e) : m.dirname(this.joinPath(e));
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
    return [...Y(e), this.getFileName(n, o)];
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
    return this.joinPath(n || "").split(m.sep);
  }
  /**
   * Method returns an object whose properties represent significant elements of the path.
   *
   * Метод возвращает объект, свойства которого представляют существенные элементы пути.
   * @param path filename/ имя файла
   */
  static parse(e) {
    return m.parse(this.joinPath(e));
  }
  /**
   * Returns the directory separator symbol.
   *
   * Возвращает символ разделителя директории.
   */
  static sep() {
    return m.sep;
  }
  /**
   * Getting information about the file.
   *
   * Получение информации о файле.
   * @param path path to the file/ путь к файлу
   */
  static stat(e) {
    if (this.is(e))
      return { ...m.statSync(this.joinPath(e)) };
  }
  /**
   * Reads the contents of the directory.
   *
   * Читает содержимое директории.
   * @param path path to the directory/ путь к директории
   */
  static readDir(e) {
    return this.is(e) ? m.readdirSync(this.joinPath(e)) : [];
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
    return o.forEach((a) => {
      const r = [...e, a];
      this.isDir(r) ? s.push(...this.readDirRecursive(
        r,
        [...n, a]
      )) : s.push(this.joinPath([...n, a]));
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
      return ht(
        m.readFileSync(this.joinPath(e)).toString()
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
      return m.readFileSync(this.joinPath(e)).toString();
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
      n.push(o), this.is(n) || m.mkdirSync(this.joinPath(n));
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
    this.createDir(e), m.writeFileSync(
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
    this.createDir(e), m.copyFileSync(
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
    this.isDir(e) && m.rmSync(this.joinPath(e), {
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
    this.is(e) && m.unlinkSync(this.joinPath(e));
  }
  static rename(e, n) {
    m.renameSync(
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
    return this.joinPath(e).replace(`${this.root}${m.sep}`, "").replace(`${this.root}`, "");
  }
};
l(ne, "root"), l(ne, "module"), ne.module = !!__dirname.match("node_modules"), ne.root = process.cwd();
let Qe = ne;
const Ms = (t) => {
  const e = {};
  try {
    const n = __dirname;
    x(
      t,
      (o) => {
        const s = [
          n,
          "..",
          "..",
          "..",
          ls,
          hs,
          o,
          fs
        ], a = Qe.readFile(s);
        a && (e[o] = a);
      }
    );
  } catch (n) {
    console.error("getConstructorProperties", n);
  }
  return e;
};
export {
  ds as EnabledInclude,
  ys as EventClickInclude,
  ms as LabelInclude,
  Ms as getConstructorProperties
};
