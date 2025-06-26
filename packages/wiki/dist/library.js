var mn = Object.defineProperty;
var Mn = (t, e, n) => e in t ? mn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var l = (t, e, n) => Mn(t, typeof e != "symbol" ? e + "" : e, n);
function wt(t) {
  return t instanceof Function || typeof t == "function";
}
function B(t) {
  return wt(t) ? t() : t;
}
async function Dn(t) {
  const e = B(t);
  return e instanceof Promise ? await e : e;
}
function fe(t) {
  return !!(t && typeof t == "object");
}
function F(t, e) {
  if (fe(t)) {
    const n = [];
    return t instanceof Map ? t.forEach((o, a) => n.push(e(o, a, t))) : Array.isArray(t) ? t.forEach((o, a) => n.push(e(o, a, t))) : Object.entries(t).forEach(
      ([o, a]) => n.push(e(a, o, t))
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
function Cn(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const $e = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Nt = () => {
}, kn = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), G = Object.assign, vn = Object.prototype.hasOwnProperty, Fe = (t, e) => vn.call(t, e), M = Array.isArray, re = (t) => Ot(t) === "[object Map]", j = (t) => typeof t == "function", I = (t) => typeof t == "string", me = (t) => typeof t == "symbol", _ = (t) => t !== null && typeof t == "object", An = Object.prototype.toString, Ot = (t) => An.call(t), Tt = (t) => Ot(t).slice(8, -1), Ze = (t) => I(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, En = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, zn = En((t) => t.charAt(0).toUpperCase() + t.slice(1)), X = (t, e) => !Object.is(t, e);
let ut;
const we = () => ut || (ut = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qe(t) {
  if (M(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const o = t[n], a = I(o) ? wn(o) : qe(o);
      if (a)
        for (const s in a)
          e[s] = a[s];
    }
    return e;
  } else if (I(t) || _(t))
    return t;
}
const _n = /;(?![^(]*\))/g, Sn = /:([^]+)/, bn = /\/\*[^]*?\*\//g;
function wn(t) {
  const e = {};
  return t.replace(bn, "").split(_n).forEach((n) => {
    if (n) {
      const o = n.split(Sn);
      o.length > 1 && (e[o[0].trim()] = o[1].trim());
    }
  }), e;
}
function Qe(t) {
  let e = "";
  if (I(t))
    e = t;
  else if (M(t))
    for (let n = 0; n < t.length; n++) {
      const o = Qe(t[n]);
      o && (e += o + " ");
    }
  else if (_(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function te(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let d, Rt = 0, ie, ue;
function Nn(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = ue, ue = t;
    return;
  }
  t.next = ie, ie = t;
}
function Xe() {
  Rt++;
}
function et() {
  if (--Rt > 0)
    return;
  if (ue) {
    let e = ue;
    for (ue = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; ie; ) {
    let e = ie;
    for (ie = void 0; e; ) {
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
function On(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Tn(t) {
  let e, n = t.depsTail, o = n;
  for (; o; ) {
    const a = o.prevDep;
    o.version === -1 ? (o === n && (n = a), Pt(o), In(o)) : e = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = a;
  }
  t.deps = e, t.depsTail = n;
}
function Rn(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (It(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function It(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === pe))
    return;
  t.globalVersion = pe;
  const e = t.dep;
  if (t.flags |= 2, e.version > 0 && !t.isSSR && t.deps && !Rn(t)) {
    t.flags &= -3;
    return;
  }
  const n = d, o = $;
  d = t, $ = !0;
  try {
    On(t);
    const a = t.fn(t._value);
    (e.version === 0 || X(a, t._value)) && (t._value = a, e.version++);
  } catch (a) {
    throw e.version++, a;
  } finally {
    d = n, $ = o, Tn(t), t.flags &= -3;
  }
}
function Pt(t, e = !1) {
  const { dep: n, prevSub: o, nextSub: a } = t;
  if (o && (o.nextSub = a, t.prevSub = void 0), a && (a.prevSub = o, t.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === t && (n.subsHead = a), n.subs === t && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Pt(s, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function In(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let $ = !0;
const Lt = [];
function tt() {
  Lt.push($), $ = !1;
}
function nt() {
  const t = Lt.pop();
  $ = t === void 0 ? !0 : t;
}
let pe = 0;
class Pn {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ot {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!d || !$ || d === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== d)
      n = this.activeLink = new Pn(d, this), d.deps ? (n.prevDep = d.depsTail, d.depsTail.nextDep = n, d.depsTail = n) : d.deps = d.depsTail = n, xt(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = d.depsTail, n.nextDep = void 0, d.depsTail.nextDep = n, d.depsTail = n, d.deps === n && (d.deps = o);
    }
    return process.env.NODE_ENV !== "production" && d.onTrack && d.onTrack(
      G(
        {
          effect: d
        },
        e
      )
    ), n;
  }
  trigger(e) {
    this.version++, pe++, this.notify(e);
  }
  notify(e) {
    Xe();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            G(
              {
                effect: n.sub
              },
              e
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      et();
    }
  }
}
function xt(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let o = e.deps; o; o = o.nextDep)
        xt(o);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), process.env.NODE_ENV !== "production" && t.dep.subsHead === void 0 && (t.dep.subsHead = t), t.dep.subs = t;
  }
}
const je = /* @__PURE__ */ new WeakMap(), H = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Ke = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ge = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function v(t, e, n) {
  if ($ && d) {
    let o = je.get(t);
    o || je.set(t, o = /* @__PURE__ */ new Map());
    let a = o.get(n);
    a || (o.set(n, a = new ot()), a.map = o, a.key = n), process.env.NODE_ENV !== "production" ? a.track({
      target: t,
      type: e,
      key: n
    }) : a.track();
  }
}
function x(t, e, n, o, a, s) {
  const r = je.get(t);
  if (!r) {
    pe++;
    return;
  }
  const i = (c) => {
    c && (process.env.NODE_ENV !== "production" ? c.trigger({
      target: t,
      type: e,
      key: n,
      newValue: o,
      oldValue: a,
      oldTarget: s
    }) : c.trigger());
  };
  if (Xe(), e === "clear")
    r.forEach(i);
  else {
    const c = M(t), h = c && Ze(n);
    if (c && n === "length") {
      const p = Number(o);
      r.forEach((u, f) => {
        (f === "length" || f === ge || !me(f) && f >= p) && i(u);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && i(r.get(n)), h && i(r.get(ge)), e) {
        case "add":
          c ? h && i(r.get("length")) : (i(r.get(H)), re(t) && i(r.get(Ke)));
          break;
        case "delete":
          c || (i(r.get(H)), re(t) && i(r.get(Ke)));
          break;
        case "set":
          re(t) && i(r.get(H));
          break;
      }
  }
  et();
}
function Y(t) {
  const e = g(t);
  return e === t ? e : (v(e, "iterate", ge), S(t) ? e : e.map(k));
}
function at(t) {
  return v(t = g(t), "iterate", ge), t;
}
const Ln = {
  __proto__: null,
  [Symbol.iterator]() {
    return Oe(this, Symbol.iterator, k);
  },
  concat(...t) {
    return Y(this).concat(
      ...t.map((e) => M(e) ? Y(e) : e)
    );
  },
  entries() {
    return Oe(this, "entries", (t) => (t[1] = k(t[1]), t));
  },
  every(t, e) {
    return O(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return O(this, "filter", t, e, (n) => n.map(k), arguments);
  },
  find(t, e) {
    return O(this, "find", t, e, k, arguments);
  },
  findIndex(t, e) {
    return O(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return O(this, "findLast", t, e, k, arguments);
  },
  findLastIndex(t, e) {
    return O(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return O(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Te(this, "includes", t);
  },
  indexOf(...t) {
    return Te(this, "indexOf", t);
  },
  join(t) {
    return Y(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return Te(this, "lastIndexOf", t);
  },
  map(t, e) {
    return O(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return ae(this, "pop");
  },
  push(...t) {
    return ae(this, "push", t);
  },
  reduce(t, ...e) {
    return ct(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return ct(this, "reduceRight", t, e);
  },
  shift() {
    return ae(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return O(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return ae(this, "splice", t);
  },
  toReversed() {
    return Y(this).toReversed();
  },
  toSorted(t) {
    return Y(this).toSorted(t);
  },
  toSpliced(...t) {
    return Y(this).toSpliced(...t);
  },
  unshift(...t) {
    return ae(this, "unshift", t);
  },
  values() {
    return Oe(this, "values", k);
  }
};
function Oe(t, e, n) {
  const o = at(t), a = o[e]();
  return o !== t && !S(t) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.value && (s.value = n(s.value)), s;
  }), a;
}
const xn = Array.prototype;
function O(t, e, n, o, a, s) {
  const r = at(t), i = r !== t && !S(t), c = r[e];
  if (c !== xn[e]) {
    const u = c.apply(t, s);
    return i ? k(u) : u;
  }
  let h = n;
  r !== t && (i ? h = function(u, f) {
    return n.call(this, k(u), f, t);
  } : n.length > 2 && (h = function(u, f) {
    return n.call(this, u, f, t);
  }));
  const p = c.call(r, h, o);
  return i && a ? a(p) : p;
}
function ct(t, e, n, o) {
  const a = at(t);
  let s = n;
  return a !== t && (S(t) ? n.length > 3 && (s = function(r, i, c) {
    return n.call(this, r, i, c, t);
  }) : s = function(r, i, c) {
    return n.call(this, r, k(i), c, t);
  }), a[e](s, ...o);
}
function Te(t, e, n) {
  const o = g(t);
  v(o, "iterate", ge);
  const a = o[e](...n);
  return (a === -1 || a === !1) && Ae(n[0]) ? (n[0] = g(n[0]), o[e](...n)) : a;
}
function ae(t, e, n = []) {
  tt(), Xe();
  const o = g(t)[e].apply(t, n);
  return et(), nt(), o;
}
const Vn = /* @__PURE__ */ Cn("__proto__,__v_isRef,__isVue"), Vt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(me)
);
function Bn(t) {
  me(t) || (t = String(t));
  const e = g(this);
  return v(e, "has", t), e.hasOwnProperty(t);
}
class Bt {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, o) {
    if (n === "__v_skip") return e.__v_skip;
    const a = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (a ? s ? Yn : jt : s ? Gn : Ft).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(o) ? e : void 0;
    const r = M(e);
    if (!a) {
      let c;
      if (r && (c = Ln[n]))
        return c;
      if (n === "hasOwnProperty")
        return Bn;
    }
    const i = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      N(e) ? e : o
    );
    return (me(n) ? Vt.has(n) : Vn(n)) || (a || v(e, "get", n), s) ? i : N(i) ? r && Ze(n) ? i : i.value : _(i) ? a ? Wt(i) : Kt(i) : i;
  }
}
class $n extends Bt {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, o, a) {
    let s = e[n];
    if (!this._isShallow) {
      const c = P(s);
      if (!S(o) && !P(o) && (s = g(s), o = g(o)), !M(e) && N(s) && !N(o))
        return c ? !1 : (s.value = o, !0);
    }
    const r = M(e) && Ze(n) ? Number(n) < e.length : Fe(e, n), i = Reflect.set(
      e,
      n,
      o,
      N(e) ? e : a
    );
    return e === g(a) && (r ? X(o, s) && x(e, "set", n, o, s) : x(e, "add", n, o)), i;
  }
  deleteProperty(e, n) {
    const o = Fe(e, n), a = e[n], s = Reflect.deleteProperty(e, n);
    return s && o && x(e, "delete", n, void 0, a), s;
  }
  has(e, n) {
    const o = Reflect.has(e, n);
    return (!me(n) || !Vt.has(n)) && v(e, "has", n), o;
  }
  ownKeys(e) {
    return v(
      e,
      "iterate",
      M(e) ? "length" : H
    ), Reflect.ownKeys(e);
  }
}
class Fn extends Bt {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && te(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && te(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const jn = /* @__PURE__ */ new $n(), Kn = /* @__PURE__ */ new Fn(), We = (t) => t, Me = (t) => Reflect.getPrototypeOf(t);
function Wn(t, e, n) {
  return function(...o) {
    const a = this.__v_raw, s = g(a), r = re(s), i = t === "entries" || t === Symbol.iterator && r, c = t === "keys" && r, h = a[t](...o), p = n ? We : e ? Ue : k;
    return !e && v(
      s,
      "iterate",
      c ? Ke : H
    ), {
      // iterator protocol
      next() {
        const { value: u, done: f } = h.next();
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
function De(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      te(
        `${zn(t)} operation ${n}failed: target is readonly.`,
        g(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Un(t, e) {
  const n = {
    get(a) {
      const s = this.__v_raw, r = g(s), i = g(a);
      t || (X(a, i) && v(r, "get", a), v(r, "get", i));
      const { has: c } = Me(r), h = e ? We : t ? Ue : k;
      if (c.call(r, a))
        return h(s.get(a));
      if (c.call(r, i))
        return h(s.get(i));
      s !== r && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !t && v(g(a), "iterate", H), Reflect.get(a, "size", a);
    },
    has(a) {
      const s = this.__v_raw, r = g(s), i = g(a);
      return t || (X(a, i) && v(r, "has", a), v(r, "has", i)), a === i ? s.has(a) : s.has(a) || s.has(i);
    },
    forEach(a, s) {
      const r = this, i = r.__v_raw, c = g(i), h = e ? We : t ? Ue : k;
      return !t && v(c, "iterate", H), i.forEach((p, u) => a.call(s, h(p), h(u), r));
    }
  };
  return G(
    n,
    t ? {
      add: De("add"),
      set: De("set"),
      delete: De("delete"),
      clear: De("clear")
    } : {
      add(a) {
        !e && !S(a) && !P(a) && (a = g(a));
        const s = g(this);
        return Me(s).has.call(s, a) || (s.add(a), x(s, "add", a, a)), this;
      },
      set(a, s) {
        !e && !S(s) && !P(s) && (s = g(s));
        const r = g(this), { has: i, get: c } = Me(r);
        let h = i.call(r, a);
        h ? process.env.NODE_ENV !== "production" && lt(r, i, a) : (a = g(a), h = i.call(r, a));
        const p = c.call(r, a);
        return r.set(a, s), h ? X(s, p) && x(r, "set", a, s, p) : x(r, "add", a, s), this;
      },
      delete(a) {
        const s = g(this), { has: r, get: i } = Me(s);
        let c = r.call(s, a);
        c ? process.env.NODE_ENV !== "production" && lt(s, r, a) : (a = g(a), c = r.call(s, a));
        const h = i ? i.call(s, a) : void 0, p = s.delete(a);
        return c && x(s, "delete", a, void 0, h), p;
      },
      clear() {
        const a = g(this), s = a.size !== 0, r = process.env.NODE_ENV !== "production" ? re(a) ? new Map(a) : new Set(a) : void 0, i = a.clear();
        return s && x(
          a,
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
  ].forEach((a) => {
    n[a] = Wn(a, t, e);
  }), n;
}
function $t(t, e) {
  const n = Un(t, e);
  return (o, a, s) => a === "__v_isReactive" ? !t : a === "__v_isReadonly" ? t : a === "__v_raw" ? o : Reflect.get(
    Fe(n, a) && a in o ? n : o,
    a,
    s
  );
}
const Hn = {
  get: /* @__PURE__ */ $t(!1, !1)
}, Jn = {
  get: /* @__PURE__ */ $t(!0, !1)
};
function lt(t, e, n) {
  const o = g(n);
  if (o !== n && e.call(t, o)) {
    const a = Tt(t);
    te(
      `Reactive ${a} contains both the raw and reactive versions of the same object${a === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ft = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap();
function Zn(t) {
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
function qn(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Zn(Tt(t));
}
function Kt(t) {
  return P(t) ? t : Ut(
    t,
    !1,
    jn,
    Hn,
    Ft
  );
}
function Wt(t) {
  return Ut(
    t,
    !0,
    Kn,
    Jn,
    jt
  );
}
function Ut(t, e, n, o, a) {
  if (!_(t))
    return process.env.NODE_ENV !== "production" && te(
      `value cannot be made ${e ? "readonly" : "reactive"}: ${String(
        t
      )}`
    ), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = a.get(t);
  if (s)
    return s;
  const r = qn(t);
  if (r === 0)
    return t;
  const i = new Proxy(
    t,
    r === 2 ? o : n
  );
  return a.set(t, i), i;
}
function Ht(t) {
  return P(t) ? Ht(t.__v_raw) : !!(t && t.__v_isReactive);
}
function P(t) {
  return !!(t && t.__v_isReadonly);
}
function S(t) {
  return !!(t && t.__v_isShallow);
}
function Ae(t) {
  return t ? !!t.__v_raw : !1;
}
function g(t) {
  const e = t && t.__v_raw;
  return e ? g(e) : t;
}
const k = (t) => _(t) ? Kt(t) : t, Ue = (t) => _(t) ? Wt(t) : t;
function N(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function Qn(t) {
  return Jt(t, !1);
}
function Xn(t) {
  return Jt(t, !0);
}
function Jt(t, e) {
  return N(t) ? t : new eo(t, e);
}
class eo {
  constructor(e, n) {
    this.dep = new ot(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : g(e), this._value = n ? e : k(e), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, o = this.__v_isShallow || S(e) || P(e);
    e = o ? e : g(e), X(e, n) && (this._rawValue = e, this._value = o ? e : k(e), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: n
    }) : this.dep.trigger());
  }
}
class to {
  constructor(e, n, o) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new ot(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = pe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    d !== this)
      return Nn(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const e = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return It(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && te("Write operation failed: computed value is readonly");
  }
}
function no(t, e, n = !1) {
  let o, a;
  j(t) ? o = t : (o = t.get, a = t.set);
  const s = new to(o, a, n);
  return process.env.NODE_ENV, s;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const J = [];
function oo(t) {
  J.push(t);
}
function ao() {
  J.pop();
}
let Re = !1;
function ne(t, ...e) {
  if (Re) return;
  Re = !0, tt();
  const n = J.length ? J[J.length - 1].component : null, o = n && n.appContext.config.warnHandler, a = so();
  if (o)
    st(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + e.map((s) => {
          var r, i;
          return (i = (r = s.toString) == null ? void 0 : r.call(s)) != null ? i : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        a.map(
          ({ vnode: s }) => `at <${hn(n, s.type)}>`
        ).join(`
`),
        a
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    a.length && s.push(`
`, ...ro(a)), console.warn(...s);
  }
  nt(), Re = !1;
}
function so() {
  let t = J[J.length - 1];
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
function ro(t) {
  const e = [];
  return t.forEach((n, o) => {
    e.push(...o === 0 ? [] : [`
`], ...io(n));
  }), e;
}
function io({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", o = t.component ? t.component.parent == null : !1, a = ` at <${hn(
    t.component,
    t.type,
    o
  )}`, s = ">" + n;
  return t.props ? [a, ...uo(t.props), s] : [a + s];
}
function uo(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((o) => {
    e.push(...Gt(o, t[o]));
  }), n.length > 3 && e.push(" ..."), e;
}
function Gt(t, e, n) {
  return I(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : N(e) ? (e = Gt(t, g(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : j(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = g(e), n ? e : [`${t}=`, e]);
}
const Yt = {
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
  } catch (a) {
    Zt(a, e, n);
  }
}
function Zt(t, e, n, o = !0) {
  const a = e ? e.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: r } = e && e.appContext.config || $e;
  if (e) {
    let i = e.parent;
    const c = e.proxy, h = process.env.NODE_ENV !== "production" ? Yt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const p = i.ec;
      if (p) {
        for (let u = 0; u < p.length; u++)
          if (p[u](t, c, h) === !1)
            return;
      }
      i = i.parent;
    }
    if (s) {
      tt(), st(s, null, 10, [
        t,
        c,
        h
      ]), nt();
      return;
    }
  }
  co(t, n, a, o, r);
}
function co(t, e, n, o = !0, a = !1) {
  if (process.env.NODE_ENV !== "production") {
    const s = Yt[e];
    if (n && oo(n), ne(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && ao(), o)
      throw t;
    console.error(t);
  } else {
    if (a)
      throw t;
    console.error(t);
  }
}
const E = [];
let T = -1;
const ee = [];
let L = null, Z = 0;
const lo = /* @__PURE__ */ Promise.resolve();
let He = null;
const ho = 100;
function fo(t) {
  let e = T + 1, n = E.length;
  for (; e < n; ) {
    const o = e + n >>> 1, a = E[o], s = de(a);
    s < t || s === t && a.flags & 2 ? e = o + 1 : n = o;
  }
  return e;
}
function po(t) {
  if (!(t.flags & 1)) {
    const e = de(t), n = E[E.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= de(n) ? E.push(t) : E.splice(fo(e), 0, t), t.flags |= 1, qt();
  }
}
function qt() {
  He || (He = lo.then(Qt));
}
function go(t) {
  M(t) ? ee.push(...t) : L && t.id === -1 ? L.splice(Z + 1, 0, t) : t.flags & 1 || (ee.push(t), t.flags |= 1), qt();
}
function yo(t) {
  if (ee.length) {
    const e = [...new Set(ee)].sort(
      (n, o) => de(n) - de(o)
    );
    if (ee.length = 0, L) {
      L.push(...e);
      return;
    }
    for (L = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Z = 0; Z < L.length; Z++) {
      const n = L[Z];
      process.env.NODE_ENV !== "production" && Xt(t, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    L = null, Z = 0;
  }
}
const de = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Qt(t) {
  process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const e = process.env.NODE_ENV !== "production" ? (n) => Xt(t, n) : Nt;
  try {
    for (T = 0; T < E.length; T++) {
      const n = E[T];
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
    for (; T < E.length; T++) {
      const n = E[T];
      n && (n.flags &= -2);
    }
    T = -1, E.length = 0, yo(t), He = null, (E.length || ee.length) && Qt(t);
  }
}
function Xt(t, e) {
  const n = t.get(e) || 0;
  if (n > ho) {
    const o = e.i, a = o && ln(o.type);
    return Zt(
      `Maximum recursive updates exceeded${a ? ` in component <${a}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return t.set(e, n + 1), !1;
}
const Ie = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (we().__VUE_HMR_RUNTIME__ = {
  createRecord: Pe(mo),
  rerender: Pe(Mo),
  reload: Pe(Do)
});
const Ee = /* @__PURE__ */ new Map();
function mo(t, e) {
  return Ee.has(t) ? !1 : (Ee.set(t, {
    initialDef: ze(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ze(t) {
  return fn(t) ? t.__vccOpts : t;
}
function Mo(t, e) {
  const n = Ee.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((o) => {
    e && (o.render = e, ze(o.type).render = e), o.renderCache = [], o.update();
  }));
}
function Do(t, e) {
  const n = Ee.get(t);
  if (!n) return;
  e = ze(e), ht(n.initialDef, e);
  const o = [...n.instances];
  for (let a = 0; a < o.length; a++) {
    const s = o[a], r = ze(s.type);
    let i = Ie.get(r);
    i || (r !== n.initialDef && ht(r, e), Ie.set(r, i = /* @__PURE__ */ new Set())), i.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (i.add(s), s.ceReload(e.styles), i.delete(s)) : s.parent ? po(() => {
      s.parent.update(), i.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(r);
  }
  go(() => {
    Ie.clear();
  });
}
function ht(t, e) {
  G(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function Pe(t) {
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
let q, Ce = [];
function en(t, e) {
  var n, o;
  q = t, q ? (q.enabled = !0, Ce.forEach(({ event: a, args: s }) => q.emit(a, ...s)), Ce = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    en(s, e);
  }), setTimeout(() => {
    q || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ce = []);
  }, 3e3)) : Ce = [];
}
let ye = null, Co = null;
const ko = (t) => t.__isTeleport;
function tn(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, tn(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
we().requestIdleCallback;
we().cancelIdleCallback;
const vo = Symbol.for("v-ndc"), Ao = {};
process.env.NODE_ENV !== "production" && (Ao.ownKeys = (t) => (ne(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
const Eo = {}, nn = (t) => Object.getPrototypeOf(t) === Eo, zo = (t) => t.__isSuspense, on = Symbol.for("v-fgt"), _o = Symbol.for("v-txt"), So = Symbol.for("v-cmt");
function bo(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const wo = (...t) => sn(
  ...t
), an = ({ key: t }) => t ?? null, ve = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? I(t) || N(t) || j(t) ? { i: ye, r: t, k: e, f: !!n } : t : null);
function No(t, e = null, n = null, o = 0, a = null, s = t === on ? 0 : 1, r = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && an(e),
    ref: e && ve(e),
    scopeId: Co,
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
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: ye
  };
  return i ? (rt(c, n), s & 128 && t.normalize(c)) : n && (c.shapeFlag |= I(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && ne("VNode created with invalid key (NaN). VNode type:", c.type), c;
}
const Oo = process.env.NODE_ENV !== "production" ? wo : sn;
function sn(t, e = null, n = null, o = 0, a = null, s = !1) {
  if ((!t || t === vo) && (process.env.NODE_ENV !== "production" && !t && ne(`Invalid vnode type when creating vnode: ${t}.`), t = So), bo(t)) {
    const i = _e(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && rt(i, n), i.patchFlag = -2, i;
  }
  if (fn(t) && (t = t.__vccOpts), e) {
    e = To(e);
    let { class: i, style: c } = e;
    i && !I(i) && (e.class = Qe(i)), _(c) && (Ae(c) && !M(c) && (c = G({}, c)), e.style = qe(c));
  }
  const r = I(t) ? 1 : zo(t) ? 128 : ko(t) ? 64 : _(t) ? 4 : j(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && Ae(t) && (t = g(t), ne(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), No(
    t,
    e,
    n,
    o,
    a,
    r,
    s,
    !0
  );
}
function To(t) {
  return t ? Ae(t) || nn(t) ? G({}, t) : t : null;
}
function _e(t, e, n = !1, o = !1) {
  const { props: a, ref: s, patchFlag: r, children: i, transition: c } = t, h = e ? Io(a || {}, e) : a, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: h,
    key: h && an(h),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? M(s) ? s.concat(ve(e)) : [s, ve(e)] : ve(e)
    ) : s,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && M(i) ? i.map(rn) : i,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== on ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: t.ssContent && _e(t.ssContent),
    ssFallback: t.ssFallback && _e(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return c && o && tn(
    p,
    c.clone(p)
  ), p;
}
function rn(t) {
  const e = _e(t);
  return M(t.children) && (e.children = t.children.map(rn)), e;
}
function Ro(t = " ", e = 0) {
  return Oo(_o, null, t, e);
}
function rt(t, e) {
  let n = 0;
  const { shapeFlag: o } = t;
  if (e == null)
    e = null;
  else if (M(e))
    n = 16;
  else if (typeof e == "object")
    if (o & 65) {
      const a = e.default;
      a && (a._c && (a._d = !1), rt(t, a()), a._c && (a._d = !0));
      return;
    } else
      n = 32, !e._ && !nn(e) && (e._ctx = ye);
  else j(e) ? (e = { default: e, _ctx: ye }, n = 32) : (e = String(e), o & 64 ? (n = 16, e = [Ro(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Io(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (const a in o)
      if (a === "class")
        e.class !== o.class && (e.class = Qe([e.class, o.class]));
      else if (a === "style")
        e.style = qe([e.style, o.style]);
      else if (kn(a)) {
        const s = e[a], r = o[a];
        r && s !== r && !(M(s) && s.includes(r)) && (e[a] = s ? [].concat(s, r) : r);
      } else a !== "" && (e[a] = o[a]);
  }
  return e;
}
let un = null;
const Po = () => un || ye;
{
  const t = we(), e = (n, o) => {
    let a;
    return (a = t[n]) || (a = t[n] = []), a.push(o), (s) => {
      a.length > 1 ? a.forEach((r) => r(s)) : a[0](s);
    };
  };
  e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => un = n
  ), e(
    "__VUE_SSR_SETTERS__",
    (n) => cn = n
  );
}
let cn = !1;
process.env.NODE_ENV;
const Lo = /(?:^|[-_])(\w)/g, xo = (t) => t.replace(Lo, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function ln(t, e = !0) {
  return j(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function hn(t, e, n = !1) {
  let o = ln(e);
  if (!o && e.__file) {
    const a = e.__file.match(/([^/\\]+)\.\w+$/);
    a && (o = a[1]);
  }
  if (!o && t && t.parent) {
    const a = (s) => {
      for (const r in s)
        if (s[r] === e)
          return r;
    };
    o = a(
      t.components || t.parent.type.components
    ) || a(t.appContext.components);
  }
  return o ? xo(o) : n ? "App" : "Anonymous";
}
function fn(t) {
  return j(t) && "__vccOpts" in t;
}
const se = (t, e) => {
  const n = no(t, e, cn);
  if (process.env.NODE_ENV !== "production") {
    const o = Po();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Vo() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, a = {
    __vue_custom_formatter: !0,
    header(u) {
      return _(u) ? u.__isVue ? ["div", t, "VueInstance"] : N(u) ? [
        "div",
        {},
        ["span", t, p(u)],
        "<",
        // avoid debugger accessing value affecting behavior
        i("_value" in u ? u._value : u),
        ">"
      ] : Ht(u) ? [
        "div",
        {},
        ["span", t, S(u) ? "ShallowReactive" : "Reactive"],
        "<",
        i(u),
        `>${P(u) ? " (readonly)" : ""}`
      ] : P(u) ? [
        "div",
        {},
        ["span", t, S(u) ? "ShallowReadonly" : "Readonly"],
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
          ...s(u.$)
        ];
    }
  };
  function s(u) {
    const f = [];
    u.type.props && u.props && f.push(r("props", g(u.props))), u.setupState !== $e && f.push(r("setup", u.setupState)), u.data !== $e && f.push(r("data", g(u.data)));
    const D = c(u, "computed");
    D && f.push(r("computed", D));
    const w = c(u, "inject");
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
      ["object", { object: u }]
    ]), f;
  }
  function r(u, f) {
    return f = G({}, f), Object.keys(f).length ? [
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
        ...Object.keys(f).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          i(f[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(u, f = !0) {
    return typeof u == "number" ? ["span", e, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : _(u) ? ["object", { object: f ? g(u) : u }] : ["span", n, String(u)];
  }
  function c(u, f) {
    const D = u.type;
    if (j(D))
      return;
    const w = {};
    for (const oe in u.ctx)
      h(D, oe, f) && (w[oe] = u.ctx[oe]);
    return w;
  }
  function h(u, f, D) {
    const w = u[D];
    if (M(w) && w.includes(f) || _(w) && f in w || u.extends && h(u.extends, f, D) || u.mixins && u.mixins.some((oe) => h(oe, f, D)))
      return !0;
  }
  function p(u) {
    return S(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(a) : window.devtoolsFormatters = [a];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Bo() {
  Vo();
}
process.env.NODE_ENV !== "production" && Bo();
function Le(t) {
  return N(t) ? t.value : t;
}
function pn(t, e = "=", n = "&") {
  return F(
    t,
    (o, a) => `${a}${e}${encodeURIComponent(String(o).trim())}`
  ).sort().join(n);
}
function A() {
  return typeof window < "u";
}
function Ne(t) {
  return t == null;
}
function K(t) {
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
        return Array.isArray(t) ? t.length > 0 : Object.values(t).some((e) => !Ne(e));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(t);
      case "undefined":
        return !1;
      default:
        return !!t;
    }
  return !1;
}
function R(t) {
  return fe(t) && !Array.isArray(t);
}
function Je(t) {
  return typeof t == "string";
}
function $o(t, e) {
  return Math.floor(Math.random() * (e - t + 1) + t);
}
function Se(t) {
  return Array.isArray(t) ? t : [t];
}
function gn(t) {
  return A() && t === window;
}
function V(t) {
  if (A())
    return gn(t) ? document.body : Je(t) ? document.querySelector(t) ?? void 0 : t;
}
function ft(t) {
  return gn(t) ? t : V(t);
}
function Fo(t) {
  var e;
  return !!((e = V(t)) != null && e.closest("html"));
}
class pt {
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
  constructor(e, n = ["click"], o, a, s) {
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
      Fo(this.elementControl) ? ((n = this.listener) == null || n.call(this.element, e, this.detail), fe(this.options) && ((o = this.options) != null && o.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    l(this, "activity", !1);
    l(this, "activityItems", []);
    this.listener = o, this.options = a, this.detail = s, this.element = ft(e), this.elementControl = V(e), this.type = Se(n);
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
    const n = ft(e);
    return this.elementControlEdit || (this.elementControl = V(e)), this.element = n, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(e) {
    return this.elementControl = V(e), this.elementControlEdit = !Ne(this.elementControl), this.elementControlEdit || (this.elementControl = V(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(e) {
    return this.type = Se(e), this.reset(), this;
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
      observer: a
    }) => {
      a ? a.disconnect() : o ? e == null || e.removeEventListener(n, o) : e == null || e.removeEventListener(n, this.listenerRecent);
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
const gt = "ui-loading", ce = class ce {
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
    new pt(window, gt, e).setElementControl(n).start();
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
l(ce, "value", 0), l(ce, "event"), A() && (ce.event = new pt(window, gt));
let W = ce;
function jo(t) {
  return JSON.parse(JSON.stringify(t));
}
function dt(t) {
  switch (typeof t) {
    case "number":
      return !0;
    case "string":
      return !!t.match(/^[0-9]+$/);
    default:
      return !1;
  }
}
function yt(t) {
  if (typeof t == "number")
    return t;
  if (!t)
    return 0;
  let e = t.replace(/[^\d., ]+/ig, "");
  return e.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? e = e.replace(/ /ig, "").replace(/,/ig, ".") : e.match(/,[0-9]{3}[,.]/ig) ? e = e.replace(/,/ig, "") : e.match(/[.][0-9]{3}[,.]/ig) ? e = e.replace(/[.]/ig, "").replace(/,/ig, ".") : e = e.replace(/,/ig, "."), parseFloat(e);
}
function Ko(t, e) {
  return Ne(t) ? !1 : Array.isArray(e) ? e.includes(t) : dt(t) && dt(e) ? yt(t) === yt(e) : t === e;
}
let mt = "ui-storage";
class it {
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
    if (o in xe)
      return xe[o];
    const a = this.getValue();
    a && (this.value = a.value, this.age = a.age), xe[o] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(e) {
    mt = e;
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
    return Ne(e) || this.age && this.age + e * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (A())
      return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${mt}${this.name}`;
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
const xe = {}, Wo = /* @__PURE__ */ JSON.parse('[{"country":"US","countryAlternative":["EN"],"language":"en","languageAlternative":["us"],"firstDay":"Su","zone":"America/New_York","phoneCode":"1","phoneMask":["+1-***-***-****"]},{"country":"GB","countryAlternative":["UK"],"language":"en","firstDay":"Mo","zone":"Europe/London","phoneCode":"44","phoneMask":["+44-**-****-****"]},{"country":"AF","language":"fa","firstDay":"Sa","zone":"Asia/Kabul","phoneCode":"93","phoneMask":["+93-**-***-****"]},{"country":"AL","language":"sq","firstDay":"Mo","zone":"Europe/Tirane","phoneCode":"355","phoneMask":["+355-***-***-***"]},{"country":"DZ","language":"ar","firstDay":"Sa","zone":"Africa/Algiers","phoneCode":"213","phoneMask":["+213-**-***-****"]},{"country":"AS","language":"en","firstDay":null,"zone":"Pacific/Pago_Pago","phoneCode":"1-684","phoneMask":["+1-684-***-****"]},{"country":"AD","language":"ca","firstDay":"Mo","zone":"Europe/Andorra","phoneCode":"376","phoneMask":["+376-***-***"]},{"country":"AO","language":"pt","firstDay":null,"zone":"Africa/Lagos","phoneCode":"244","phoneMask":["+244-***-***-***"]},{"country":"AI","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-264","phoneMask":["+1-264-***-****"]},{"country":"AQ","language":"en","firstDay":null,"zone":"Antarctica/Troll","phoneCode":"672","phoneMask":["+672-1-**-***"]},{"country":"AG","language":"en","firstDay":null,"zone":"America/Antigua","phoneCode":"1-268","phoneMask":["+1-268-***-****"]},{"country":"AR","language":"es","firstDay":"Su","zone":"America/Argentina/Buenos_Aires","phoneCode":"54","phoneMask":["+54-***-***-****"]},{"country":"AM","language":"hy","firstDay":"Mo","zone":"Asia/Yerevan","phoneCode":"374","phoneMask":["+374-**-***-***"]},{"country":"AW","language":"nl","firstDay":null,"zone":"America/Curacao","phoneCode":"297","phoneMask":["+297-***-****"]},{"country":"AU","language":"en","firstDay":"Mo","zone":"Australia/Sydney","phoneCode":"61","phoneMask":["+61-*-****-****"]},{"country":"AT","language":"de","firstDay":"Mo","zone":"Europe/Vienna","phoneCode":"43","phoneMask":["+43-***-***-****","+43-***-***-*****"]},{"country":"AZ","language":"az","firstDay":"Mo","zone":"Asia/Baku","phoneCode":"994","phoneMask":"+994-**-***-**-**"},{"country":"BS","language":"en","firstDay":null,"zone":"America/Nassau","phoneCode":"1-242","phoneMask":"+1-242-***-****"},{"country":"BH","language":"ar","firstDay":"Sa","zone":"Asia/Bahrain","phoneCode":"973","phoneMask":"+973-****-****"},{"country":"BD","language":"bn","firstDay":null,"zone":"Asia/Dhaka","phoneCode":"880","phoneMask":"+880-**-***-***"},{"country":"BB","language":"en","firstDay":null,"zone":"America/Barbados","phoneCode":"1-246","phoneMask":"+1-246-***-****"},{"country":"BY","language":"be","firstDay":"Mo","zone":"Europe/Minsk","phoneCode":"375","phoneMask":"+375-**-***-**-**"},{"country":"BE","language":"nl","firstDay":"Mo","zone":"Europe/Brussels","phoneCode":"32","phoneMask":"+32-***-***-***"},{"country":"BZ","language":"en","firstDay":"Su","zone":"America/Belize","phoneCode":"501","phoneMask":"+501-***-****"},{"country":"BJ","language":"fr","firstDay":null,"zone":"Africa/Lagos","phoneCode":"229","phoneMask":"+229-**-**-****"},{"country":"BM","language":"en","firstDay":null,"zone":"Atlantic/Bermuda","phoneCode":"1-441","phoneMask":"+1-441-***-****"},{"country":"BT","language":"dz","firstDay":null,"zone":"Asia/Thimphu","phoneCode":"975","phoneMask":["+975-*-***-***","+975-17-***-***"]},{"country":"BO","language":"es","firstDay":"Su","zone":"America/La_Paz","phoneCode":"591","phoneMask":"+591-*-***-****"},{"country":"BA","language":"bs","firstDay":null,"zone":"Europe/Belgrade","phoneCode":"387","phoneMask":["+387-**-****","+387-**-*****"]},{"country":"BW","language":"en","firstDay":null,"zone":"Africa/Maputo","phoneCode":"267","phoneMask":"+267-**-***-***"},{"country":"BR","language":"pt","firstDay":"Su","zone":"America/Sao_Paulo","phoneCode":"55","phoneMask":["+55-**-****-****","+55-**-*****-****"]},{"country":"IO","language":"en","firstDay":null,"zone":"Indian/Chagos","phoneCode":"246","phoneMask":"+246-***-****"},{"country":"VG","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-284","phoneMask":"+1-284-***-****"},{"country":"BN","language":"ms","firstDay":"Mo","zone":"Asia/Brunei","phoneCode":"673","phoneMask":"+673-***-****"},{"country":"BG","language":"bg","firstDay":"Mo","zone":"Europe/Sofia","phoneCode":"359","phoneMask":"+359-***-***-***"},{"country":"BF","language":"fr","firstDay":null,"zone":"Africa/Abidjan","phoneCode":"226","phoneMask":"+226-**-**-****"},{"country":"BI","language":"fr","firstDay":null,"zone":"Africa/Maputo","phoneCode":"257","phoneMask":"+257-**-**-****"},{"country":"KH","language":"km","firstDay":null,"zone":"Asia/Phnom_Penh","phoneCode":"855","phoneMask":"+855-**-***-***"},{"country":"CM","phoneCode":"237","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":"+237-****-****"},{"country":"CA","phoneCode":"1","zone":"America/Toronto","language":"en","firstDay":"Su","phoneMask":"+1-***-***-****"},{"country":"CV","phoneCode":"238","zone":"Atlantic/Cape_Verde","language":"pt","firstDay":null,"phoneMask":"+238-***-**-**"},{"country":"KY","phoneCode":"1-345","zone":"America/Cayman","language":"en","firstDay":null,"phoneMask":"+1-345-***-****"},{"country":"CF","phoneCode":"236","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+236-**-**-****"},{"country":"TD","phoneCode":"235","zone":"Africa/Ndjamena","language":"fr","firstDay":null,"phoneMask":"+235-**-**-**-**"},{"country":"CL","phoneCode":"56","zone":"America/Santiago","language":"es","firstDay":"Su","phoneMask":"+56-*-****-****"},{"country":"CN","phoneCode":"86","zone":"Asia/Shanghai","language":"zh","firstDay":"Su","phoneMask":["+86-***-****-***","+86-***-****-****","+86-**-*****-*****"]},{"country":"CX","phoneCode":"61","zone":"Indian/Christmas","language":"en","firstDay":null},{"country":"CC","phoneCode":"61","zone":"Indian/Cocos","language":"ms","firstDay":null},{"country":"CO","phoneCode":"57","zone":"America/Bogota","language":"es","firstDay":"Su","phoneMask":"+57-***-***-****"},{"country":"KM","phoneCode":"269","zone":"Indian/Comoro","language":"ar","firstDay":null,"phoneMask":"+269-**-*****"},{"country":"CK","phoneCode":"682","zone":"Pacific/Rarotonga","language":"en","firstDay":null,"phoneMask":"+682-**-***"},{"country":"CR","phoneCode":"506","zone":"America/Costa_Rica","language":"es","firstDay":"Su","phoneMask":"+506-****-****"},{"country":"HR","phoneCode":"385","zone":"Europe/Belgrade","language":"hr","firstDay":"Mo","phoneMask":"+385-**-***-***"},{"country":"CU","phoneCode":"53","zone":"America/Havana","language":"es","firstDay":null,"phoneMask":"+53-*-***-****"},{"country":"CW","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+599-***-****"},{"country":"CY","phoneCode":"357","zone":"Asia/Nicosia","language":"el","firstDay":null,"phoneMask":"+357-**-***-***"},{"country":"CZ","phoneCode":"420","zone":"Europe/Prague","language":"cs","languageAlternative":["cz"],"firstDay":"Mo","phoneMask":"+420-***-***-***"},{"country":"CD","phoneCode":"243","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+243-***-***-***"},{"country":"DK","phoneCode":"45","zone":"Europe/Copenhagen","language":"da","firstDay":"Mo","phoneMask":"+45-**-**-**-**"},{"country":"DJ","phoneCode":"253","zone":"Africa/Djibouti","language":"fr","firstDay":null,"phoneMask":"+253-**-**-**-**"},{"country":"DM","phoneCode":"1-767","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-767-***-****"},{"country":"DO","phoneCode":"1-809","zone":"North America","language":"America/Santo_Domingo","firstDay":"Su","phoneMask":["+1-809-***-****","+1-829-***-****","+1-849-***-****"]},{"country":"TL","phoneCode":"670","zone":"Asia/Dili","language":"tet","firstDay":null,"phoneMask":["+670-***-****","+670-77-*-*****","+670-78-*-*****"]},{"country":"EC","phoneCode":"593","zone":"America/Guayaquil","language":"es","firstDay":"Su","phoneMask":["+593-*-***-****","+593-**-***-****"]},{"country":"EG","phoneCode":"20","zone":"Africa/Cairo","language":"ar","firstDay":"Sa","phoneMask":"+20-***-***-****"},{"country":"SV","phoneCode":"503","zone":"America/El_Salvador","language":"es","firstDay":"Su","phoneMask":"+503-**-**-****"},{"country":"GQ","phoneCode":"240","zone":"Africa/Lagos","language":"es","firstDay":null,"phoneMask":"+240-**-***-****"},{"country":"ER","phoneCode":"291","zone":"Africa/Asmara","language":"aa","firstDay":null,"phoneMask":"+291-*-***-***"},{"country":"EE","phoneCode":"372","zone":"Europe/Tallinn","language":"et","firstDay":"Mo","phoneMask":["+372-***-****","+372-****-****"]},{"country":"ET","phoneCode":"251","zone":"Africa/Addis_Ababa","language":"am","firstDay":null,"phoneMask":"+251-**-***-****"},{"country":"FK","phoneCode":"500","zone":"Atlantic/Stanley","language":"en","firstDay":null,"phoneMask":"+500-*****"},{"country":"FO","phoneCode":"298","zone":"Atlantic/Faroe","language":"fo","firstDay":null,"phoneMask":"+298-***-***"},{"country":"FJ","phoneCode":"679","zone":"Pacific/Fiji","language":"en","firstDay":null,"phoneMask":"+679-**-*****"},{"country":"FI","phoneCode":"358","zone":"Europe/Helsinki","language":"fi","firstDay":"Mo","phoneMask":["+358-***-***-**-*","+358-***-***-**-**"]},{"country":"FR","phoneCode":"33","zone":"Europe/Paris","language":"fr","firstDay":"Mo","phoneMask":["+33-***-***-***","+262-*****-****","+508-**-****","+590-***-***-***"]},{"country":"PF","phoneCode":"689","zone":"Pacific/Tahiti","language":"fr","firstDay":null,"phoneMask":"+689-**-**-**"},{"country":"GA","phoneCode":"241","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+241-*-**-**-**"},{"country":"GM","phoneCode":"220","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+220-***-**-**"},{"country":"GE","phoneCode":"995","zone":"Asia/Tbilisi","language":"ka","firstDay":"Mo","phoneMask":"+995-***-***-***"},{"country":"DE","phoneCode":"49","zone":"Europe/Berlin","language":"de","firstDay":"Mo","phoneMask":["+49-***-***","+49-***-***-****","+49-****-***-****"]},{"country":"GH","phoneCode":"233","zone":"Africa/Accra","language":"en","firstDay":null,"phoneMask":"+233-***-***-***"},{"country":"GI","phoneCode":"350","zone":"Europe/Gibraltar","language":"en","firstDay":null,"phoneMask":"+350-***-*****"},{"country":"GR","phoneCode":"30","zone":"Europe/Athens","language":"el","firstDay":"Mo","phoneMask":"+30-***-***-****"},{"country":"GL","phoneCode":"299","zone":"America/Godthab","language":"kl","firstDay":null,"phoneMask":"+299-**-**-**"},{"country":"GD","phoneCode":"1-473","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-473-***-****"},{"country":"GU","phoneCode":"1-671","zone":"Pacific/Guam","language":"en","firstDay":null,"phoneMask":"+1-671-***-****"},{"country":"GT","phoneCode":"502","zone":"America/Guatemala","language":"es","firstDay":"Su","phoneMask":"+502-*-***-****"},{"country":"GG","phoneCode":"44-1481","zone":"Europe/London","language":"en","firstDay":null},{"country":"GN","phoneCode":"224","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+224-**-***-***"},{"country":"GW","phoneCode":"245","zone":"Africa/Bissau","language":"pt","firstDay":null,"phoneMask":"+245-*-******"},{"country":"GY","phoneCode":"592","zone":"America/Guyana","language":"en","firstDay":null,"phoneMask":"+592-***-****"},{"country":"HT","phoneCode":"509","zone":"America/Port-au-Prince","language":"ht","firstDay":null,"phoneMask":"+509-**-**-****"},{"country":"HN","phoneCode":"504","zone":"America/Tegucigalpa","language":"es","firstDay":"Su","phoneMask":"+504-****-****"},{"country":"HK","phoneCode":"852","zone":"Asia/Hong_Kong","language":"zh","firstDay":"Su","phoneMask":"+852-****-****"},{"country":"HU","phoneCode":"36","zone":"Europe/Budapest","language":"hu","firstDay":"Mo","phoneMask":"+36-***-***-***","nameFormat":"lf"},{"country":"IS","phoneCode":"354","zone":"Atlantic/Reykjavik","language":"is","firstDay":"Mo","phoneMask":"+354-***-****"},{"country":"IN","phoneCode":"91","zone":"Asia/Kolkata","language":"en","firstDay":"Mo","phoneMask":"+91-****-***-***"},{"country":"ID","phoneCode":"62","zone":"Asia/Jakarta","language":"id","firstDay":"Mo","phoneMask":["+62-**-***-**","+62-**-***-***","+62-**-***-****","+62-8-**-***-***","+62-8-**-***-****","+62-8-**-***-**-***"]},{"country":"IR","phoneCode":"98","zone":"Asia/Tehran","language":"fa","firstDay":"Sa","phoneMask":"+98-***-***-****"},{"country":"IQ","phoneCode":"964","zone":"Asia/Baghdad","language":"ar","firstDay":"Sa","phoneMask":"+964-***-***-****"},{"country":"IE","firstDay":"Mo","language":"en","phoneCode":"353","phoneMask":"+353-***-***-***","zone":"Europe/Dublin"},{"country":"IM","firstDay":null,"language":"Pound","phoneCode":"44-1624","zone":"Isle of Man"},{"country":"IL","firstDay":"Su","language":"he","languageAlternative":["il"],"phoneCode":"972","phoneMask":["+972-*-***-****","+972-5-*-***-****"],"zone":"Asia/Jerusalem"},{"country":"IT","firstDay":"Mo","language":"it","phoneCode":"39","phoneMask":"+39-***-****-***","zone":"Europe/Rome"},{"country":"CI","phoneCode":"225","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+225-**-***-***"},{"country":"JM","phoneCode":"1-876","zone":"America/Jamaica","language":"en","firstDay":"Su","phoneMask":"+1-876-***-****"},{"country":"JP","phoneCode":"81","zone":"Asia/Tokyo","language":"ja","firstDay":"Su","phoneMask":["+81-***-***-***","+81-**-****-****"],"nameFormat":"lf"},{"country":"JE","phoneCode":"44-1534","zone":"Europe/London","language":"en","firstDay":null},{"country":"JO","phoneCode":"962","zone":"Asia/Amman","language":"ar","firstDay":"Sa","phoneMask":"+962-*-****-****"},{"country":"KZ","phoneCode":"7","zone":"Asia/Almaty","language":"kk","firstDay":"Mo","phoneMask":["+7-6-**-***-**-**","+7-7-**-***-**-**"],"nameFormat":"lf"},{"country":"KE","phoneCode":"254","zone":"Africa/Nairobi","language":"en","firstDay":"Su","phoneMask":"+254-***-******"},{"country":"KI","phoneCode":"686","zone":"Pacific/Tarawa","language":"en","firstDay":null,"phoneMask":"+686-**-***"},{"country":"XK","phoneCode":"383","zone":"Europe/Belgrade","language":"sq","firstDay":"Mo"},{"country":"KW","phoneCode":"965","zone":"Asia/Kuwait","language":"ar","firstDay":"Sa","phoneMask":"+965-****-****"},{"country":"KG","phoneCode":"996","zone":"Asia/Bishkek","language":"ky","firstDay":"Mo","phoneMask":"+996-***-***-***"},{"country":"LA","phoneCode":"856","zone":"Asia/Vientiane","language":"lo","firstDay":null,"phoneMask":["+856-**-***-***","+856-20-**-***-***"]},{"country":"LV","phoneCode":"371","zone":"Europe/Riga","language":"lv","firstDay":"Mo","phoneMask":"+371-**-***-***"},{"country":"LB","phoneCode":"961","zone":"Asia/Beirut","language":"ar","firstDay":"Mo","phoneMask":["+961-*-***-***","+961-**-***-***"]},{"country":"LS","phoneCode":"266","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+266-*-***-****"},{"country":"LR","phoneCode":"231","zone":"Africa/Monrovia","language":"en","firstDay":null,"phoneMask":"+231-**-***-***"},{"country":"LY","phoneCode":"218","zone":"Africa/Tripoli","language":"ar","firstDay":"Sa","phoneMask":["+218-**-***-***","+218-21-***-****"]},{"country":"LI","phoneCode":"423","zone":"Europe/Zurich","language":"de","firstDay":null,"phoneMask":"+423-***-***-****"},{"country":"LT","phoneCode":"370","zone":"Europe/Vilnius","language":"lt","firstDay":"Mo","phoneMask":"+370-***-**-***"},{"country":"LU","phoneCode":"352","zone":"Europe/Luxembourg","language":"lb","firstDay":"Mo","phoneMask":"+352-***-***-***"},{"country":"MO","phoneCode":"853","zone":"Asia/Macau","language":"zh","firstDay":null,"phoneMask":"+853-****-****"},{"country":"MK","phoneCode":"389","zone":"Europe/Belgrade","language":"mk","firstDay":"Mo","phoneMask":"+389-**-***-***"},{"country":"MG","phoneCode":"261","zone":"Indian/Antananarivo","language":"fr","firstDay":null,"phoneMask":"+261-**-**-*****"},{"country":"MW","phoneCode":"265","zone":"Africa/Maputo","language":"ny","firstDay":null,"phoneMask":["+265-*-****-****","+265-1-***-***"]},{"country":"MY","phoneCode":"60","zone":"Asia/Kuala_Lumpur","language":"ms","firstDay":"Mo","phoneMask":["+60-*-***-***","+60-**-***-***","+60-**-***-****","+60-***-***-***"]},{"country":"MV","phoneCode":"960","zone":"Indian/Maldives","language":"dv","firstDay":null,"phoneMask":"+960-***-****"},{"country":"ML","phoneCode":"223","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+223-**-**-****"},{"country":"MT","phoneCode":"356","zone":"Europe/Malta","language":"mt","firstDay":null,"phoneMask":"+356-****-****"},{"country":"MH","phoneCode":"692","zone":"Pacific/Majuro","language":"mh","firstDay":null,"phoneMask":"+692-***-****"},{"country":"MR","phoneCode":"222","zone":"Africa/Abidjan","language":"ar","firstDay":null,"phoneMask":"+222-**-**-****"},{"country":"MU","phoneCode":"230","zone":"Indian/Mauritius","language":"en","firstDay":null,"phoneMask":"+230-***-****"},{"country":"YT","phoneCode":"262","zone":"Indian/Mayotte","language":"fr","firstDay":null},{"country":"MX","phoneCode":"52","zone":"America/Mexico_City","language":"es","firstDay":"Su","phoneMask":["+52-**-**-****","+52-***-***-****"]},{"country":"FM","phoneCode":"691","zone":"Pacific/Pohnpei","language":"en","firstDay":null,"phoneMask":"+691-***-****"},{"country":"MD","phoneCode":"373","zone":"Europe/Chisinau","language":"ro","firstDay":null,"phoneMask":"+373-****-****"},{"country":"MC","phoneCode":"377","zone":"Europe/Monaco","language":"fr","firstDay":"Mo","phoneMask":["+377-**-***-***","+377-***-***-***"]},{"country":"MN","phoneCode":"976","zone":"Asia/Ulaanbaatar","language":"mn","firstDay":"Mo","phoneMask":"+976-**-**-****"},{"country":"ME","phoneCode":"382","zone":"Europe/Belgrade","language":"sr","firstDay":null,"phoneMask":"+382-**-***-***"},{"country":"MS","phoneCode":"1-664","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-664-***-****"},{"country":"MA","phoneCode":"212","zone":"Africa/Casablanca","language":"ar","firstDay":"Mo","phoneMask":"+212-**-****-***"},{"country":"MZ","phoneCode":"258","zone":"Africa/Maputo","language":"pt","firstDay":null,"phoneMask":"+258-**-***-***"},{"country":"MM","phoneCode":"95","zone":"Asia/Rangoon","language":"my","firstDay":null,"phoneMask":["+95-***-***","+95-*-***-***","+95-**-***-***"]},{"country":"NA","phoneCode":"264","zone":"Africa/Windhoek","language":"en","firstDay":null,"phoneMask":"+264-**-***-****"},{"country":"NR","phoneCode":"674","zone":"Pacific/Nauru","language":"na","firstDay":null,"phoneMask":"+674-***-****"},{"country":"NP","phoneCode":"977","zone":"Asia/Kathmandu","language":"ne","firstDay":null,"phoneMask":"+977-**-***-***"},{"country":"NL","phoneCode":"31","zone":"Europe/Amsterdam","language":"nl","firstDay":"Mo","phoneMask":"+31-**-***-****"},{"country":"AN","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":["+599-***-****","+599-9-***-****"]},{"country":"NC","phoneCode":"687","zone":"Pacific/Noumea","language":"fr","firstDay":null,"phoneMask":"+687-**-****"},{"country":"NZ","phoneCode":"64","zone":"Pacific/Auckland","language":"en","firstDay":"Mo","phoneMask":["+64-**-***-***","+64-***-***-***","+64-***-***-****"]},{"country":"NI","phoneCode":"505","zone":"America/Managua","language":"es","firstDay":"Su","phoneMask":"+505-****-****"},{"country":"NE","phoneCode":"227","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+227-**-**-****"},{"country":"NG","phoneCode":"234","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":["+234-**-***-**","+234-**-***-***","+234-***-***-****"]},{"country":"NU","phoneCode":"683","zone":"Pacific/Niue","language":"niu","firstDay":null,"phoneMask":"+683-****"},{"country":"KP","phoneCode":"850","zone":"Asia/Pyongyang","language":"ko","firstDay":null,"phoneMask":["+850-***-***","+850-**-***-***","+850-****-****","+850-***-****-***","+850-****-*************","+850-191-***-****"]},{"country":"MP","phoneCode":"1-670","zone":"Pacific/Saipan","language":"fil","firstDay":null,"phoneMask":"+1-670-***-****"},{"country":"NO","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":"Mo","phoneMask":"+47-***-**-***"},{"country":"OM","phoneCode":"968","zone":"Asia/Muscat","language":"ar","firstDay":"Sa","phoneMask":"+968-**-***-***"},{"country":"PK","phoneCode":"92","zone":"Asia/Karachi","language":"ur","firstDay":"Mo","phoneMask":"+92-***-***-****"},{"country":"PW","phoneCode":"680","zone":"Pacific/Palau","language":"pau","firstDay":null,"phoneMask":"+680-***-****"},{"country":"PS","phoneCode":"970","zone":"Asia/Hebron","language":"ar","firstDay":null,"phoneMask":"+970-**-***-****"},{"country":"PA","phoneCode":"507","zone":"America/Panama","language":"es","firstDay":"Su","phoneMask":"+507-***-****"},{"country":"PG","phoneCode":"675","zone":"Pacific/Port_Moresby","language":"en","firstDay":null,"phoneMask":"+675-***-**-***"},{"country":"PY","phoneCode":"595","zone":"America/Asuncion","language":"es","firstDay":"Mo","phoneMask":"+595-***-***-***"},{"country":"PE","phoneCode":"51","zone":"America/Lima","language":"es","firstDay":"Su","phoneMask":"+51-***-***-***"},{"country":"PH","phoneCode":"63","zone":"Asia/Manila","language":"tl","firstDay":"Su","phoneMask":"+63-***-***-****"},{"country":"PN","phoneCode":"64","zone":"Pacific/Pitcairn","language":"en","firstDay":null},{"country":"PL","phoneCode":"48","zone":"Europe/Warsaw","language":"pl","firstDay":"Mo","phoneMask":"+48-***-***-***"},{"country":"PT","phoneCode":"351","zone":"Europe/Lisbon","language":"pt","firstDay":"Mo","phoneMask":"+351-**-***-****"},{"country":"PR","phoneCode":"1-787","zone":"San Juan","language":"Dollar","firstDay":"Su"},{"country":"QA","phoneCode":"974","zone":"Asia/Qatar","language":"ar","firstDay":"Sa","phoneMask":"+974-****-****"},{"country":"CG","phoneCode":"242","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+242-**-***-****"},{"country":"RE","phoneCode":"262","zone":"Indian/Reunion","language":"fr","firstDay":null,"phoneMask":"+262-*****-****"},{"country":"RO","phoneCode":"40","zone":"Europe/Bucharest","language":"ro","firstDay":"Mo","phoneMask":"+40-**-***-****"},{"country":"RU","phoneCode":"7","phoneWithin":"8","zone":"Europe/Moscow","language":"ru","firstDay":"Mo","phoneMask":"+7-***-***-**-**","nameFormat":"lsf"},{"country":"RW","phoneCode":"250","zone":"Africa/Maputo","language":"rw","firstDay":null,"phoneMask":"+250-***-***-***"},{"country":"BL","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"SH","phoneCode":"290","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+290-****"},{"country":"KN","phoneCode":"1-869","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-869-***-****"},{"country":"LC","phoneCode":"1-758","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-758-***-****"},{"country":"MF","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"PM","phoneCode":"508","zone":"America/Miquelon","language":"fr","firstDay":null},{"country":"VC","phoneCode":"1-784","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-784-***-****"},{"country":"WS","phoneCode":"685","zone":"Pacific/Apia","language":"sm","firstDay":null,"phoneMask":"+685-**-****"},{"country":"SM","phoneCode":"378","zone":"Europe/Rome","language":"it","firstDay":null,"phoneMask":"+378-****-******"},{"country":"ST","phoneCode":"239","zone":"Africa/Abidjan","language":"pt","firstDay":null,"phoneMask":"+239-**-*****"},{"country":"SA","phoneCode":"966","zone":"Asia/Riyadh","language":"ar","firstDay":"Sa","phoneMask":["+966-*-***-****","+966-5-****-****"]},{"country":"SN","phoneCode":"221","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+221-**-***-****"},{"country":"RS","phoneCode":"381","zone":"Europe/Belgrade","language":"sr","firstDay":"Mo","phoneMask":"+381-**-***-****"},{"country":"SC","phoneCode":"248","zone":"Indian/Mahe","language":"en","firstDay":null,"phoneMask":"+248-*-***-***"},{"country":"SL","phoneCode":"232","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+232-**-******"},{"country":"SG","phoneCode":"65","zone":"Asia/Singapore","language":"cmn","firstDay":"Mo","phoneMask":"+65-****-****"},{"country":"SX","phoneCode":"1-721","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+1-721-***-****"},{"country":"SK","phoneCode":"421","zone":"Europe/Prague","language":"sk","firstDay":"Mo","phoneMask":"+421-***-***-***"},{"country":"SI","phoneCode":"386","zone":"Europe/Belgrade","language":"sl","firstDay":null,"phoneMask":"+386-**-***-***"},{"country":"SB","phoneCode":"677","zone":"Pacific/Guadalcanal","language":"en","firstDay":null,"phoneMask":["+677-*****","+677-***-****"]},{"country":"SO","phoneCode":"252","zone":"Africa/Mogadishu","language":"so","firstDay":null,"phoneMask":["+252-*-***-***","+252-**-***-***"]},{"country":"ZA","phoneCode":"27","zone":"Africa/Johannesburg","language":"zu","firstDay":"Su","phoneMask":"+27-**-***-****"},{"country":"KR","phoneCode":"82","zone":"Asia/Seoul","language":"ko","firstDay":"Su","phoneMask":["+82-**-***-****","+82-**-***-****-**"],"nameFormat":"lf"},{"country":"SS","phoneCode":"211","zone":"Africa/Khartoum","language":"en","firstDay":null,"phoneMask":"+211-**-***-****"},{"country":"ES","phoneCode":"34","zone":"Europe/Madrid","language":"es","firstDay":"Mo","phoneMask":"+34-***-***-***"},{"country":"LK","phoneCode":"94","zone":"Asia/Colombo","language":"si","firstDay":null,"phoneMask":"+94-**-***-****"},{"country":"SD","phoneCode":"249","zone":"Africa/Khartoum","language":"ar","firstDay":null,"phoneMask":"+249-**-***-****"},{"country":"SR","phoneCode":"597","zone":"America/Paramaribo","language":"nl","firstDay":null,"phoneMask":["+597-***-***","+597-***-****"]},{"country":"SJ","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":null},{"country":"SZ","phoneCode":"268","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+268-**-**-****"},{"country":"SE","phoneCode":"46","zone":"Europe/Stockholm","language":"sv","firstDay":"Mo","phoneMask":"+46-**-***-****"},{"country":"CH","phoneCode":"41","zone":"Europe/Zurich","language":"de","firstDay":"Mo","phoneMask":"+41-**-***-****"},{"country":"SY","phoneCode":"963","zone":"Asia/Damascus","language":"ar","firstDay":"Sa","phoneMask":"+963-**-****-***"},{"country":"TW","phoneCode":"886","zone":"Asia/Taipei","language":"zh","firstDay":"Su","phoneMask":["+886-****-****","+886-*-****-****"]},{"country":"TJ","phoneCode":"992","zone":"Asia/Dushanbe","language":"tg","firstDay":null,"phoneMask":"+992-**-***-****"},{"country":"TZ","phoneCode":"255","zone":"Africa/Dar_es_Salaam","language":"sw","firstDay":null,"phoneMask":"+255-**-***-****"},{"country":"TH","phoneCode":"66","zone":"Asia/Bangkok","language":"th","firstDay":"Mo","phoneMask":"+66-**-***-****"},{"country":"TG","phoneCode":"228","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+228-**-***-***"},{"country":"TK","phoneCode":"690","zone":"Pacific/Fakaofo","language":"tkl","firstDay":null,"phoneMask":"+690-****"},{"country":"TO","phoneCode":"676","zone":"Pacific/Tongatapu","language":"to","firstDay":null,"phoneMask":"+676-*****"},{"country":"TT","phoneCode":"1-868","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-868-***-****"},{"country":"TN","phoneCode":"216","zone":"Africa/Tunis","language":"ar","firstDay":"Mo","phoneMask":"+216-**-***-***"},{"country":"TR","phoneCode":"90","zone":"Europe/Istanbul","language":"tr","firstDay":"Mo","phoneMask":"+90-***-***-****"},{"country":"TM","phoneCode":"993","zone":"Asia/Ashgabat","language":"tk","firstDay":null,"phoneMask":"+993-*-***-****"},{"country":"TC","phoneCode":"1-649","zone":"America/Grand_Turk","language":"en","firstDay":null,"phoneMask":"+1-649-***-****"},{"country":"TV","phoneCode":"688","zone":"Pacific/Funafuti","language":"tvl","firstDay":null,"phoneMask":["+688-2-****","+688-90-****"]},{"country":"VI","phoneCode":"1-340","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-340-***-****"},{"country":"UG","phoneCode":"256","zone":"Africa/Kampala","language":"en","firstDay":null,"phoneMask":"+256-***-***-***"},{"country":"UA","phoneCode":"380","zone":"Europe/Kiev","language":"uk","languageAlternative":["ua"],"firstDay":"Mo","phoneMask":"+380-**-***-**-**"},{"country":"AE","phoneCode":"971","zone":"Asia/Dubai","language":"ar","firstDay":"Sa","phoneMask":["+971-*-***-****","+971-5-*-***-****"]},{"country":"UY","phoneCode":"598","zone":"America/Montevideo","language":"es","firstDay":"Mo","phoneMask":"+598-*-***-**-**"},{"country":"UZ","phoneCode":"998","zone":"Asia/Tashkent","language":"uz","firstDay":"Mo","phoneMask":"+998-**-***-****"},{"country":"VU","phoneCode":"678","zone":"Pacific/Efate","language":"bi","firstDay":null,"phoneMask":["+678-*****","+678-**-*****"]},{"country":"VA","phoneCode":"379","zone":"Europe/Rome","language":"la","firstDay":null,"phoneMask":"+39-6-698-*****"},{"country":"VE","phoneCode":"58","zone":"America/Caracas","language":"es","firstDay":"Su","phoneMask":"+58-***-***-****"},{"country":"VN","phoneCode":"84","zone":"Asia/Ho_Chi_Minh","language":"vi","firstDay":"Mo","phoneMask":["+84-**-****-***","+84-***-****-***"],"nameFormat":"fsl"},{"country":"WF","phoneCode":"681","zone":"Pacific/Wallis","language":"wls","firstDay":null,"phoneMask":"+681-**-****"},{"country":"EH","phoneCode":"212","zone":"Africa/El_Aaiun","language":"ar","firstDay":null},{"country":"YE","phoneCode":"967","zone":"Asia/Aden","language":"ar","firstDay":"Sa","phoneMask":["+967-*-***-***","+967-**-***-***","+967-***-***-***"]},{"country":"ZM","phoneCode":"260","zone":"Africa/Maputo","language":"en","firstDay":null,"phoneMask":"+260-**-***-****"},{"country":"ZW","phoneCode":"263","zone":"Africa/Maputo","language":"en","firstDay":"Su","phoneMask":"+263-*-******"},{"country":"GF","phoneCode":"594","zone":"America/Cayenne","language":"fr","firstDay":"Mo","phoneMask":"+594-*****-****"},{"country":"MQ","phoneCode":"596","zone":"America/Martinique","language":"fr","firstDay":"Mo","phoneMask":"+596-***-**-**-**"},{"country":"NF","phoneCode":"672-3","zone":"Pacific/Norfolk","language":"en","firstDay":"Mo","phoneMask":"+672-3-**-***"},{"country":"IC","phoneCode":"3428","zone":"Europe/Berlin","language":"es","firstDay":"Mo"}]'), Uo = "geo-code", C = class C {
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
    return Wo;
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
    return e && (e.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (n = this.getByCodeFull(e)), !n && e.match(/[A-Z]{2}/) && (n = this.getByCountry(this.toCountry(e))), !n && e.match(/[a-z]{2}/) && (n = this.getByLanguage(this.toLanguage(e)))), this.toFull(jo(n ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(e) {
    return this.getList().find(
      (n) => Ko(e, [
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
      return n.country === e || ((o = n == null ? void 0 : n.countryAlternative) == null ? void 0 : o.find((a) => a === e));
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
      return n.language === e || ((o = n == null ? void 0 : n.languageAlternative) == null ? void 0 : o.find((a) => a === e));
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
    return A() && (this.storage.get() || ((e = document.querySelector("html")) == null ? void 0 : e.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
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
l(C, "storage", new it(Uo)), l(C, "location"), l(C, "item"), l(C, "language"), l(C, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), C.location = C.findLocation(), C.language = C.findLanguage(C.location), C.item = C.getByCode(C.location);
let b = C;
const Mt = "d-response-loading", Dt = [], y = class y {
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
      return K(n) && (o["Content-Type"] = n), o;
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
    return `${n ? this.url : ""}${e}`.replace("{locale}", b.getLocation()).replace("{country}", b.getCountry()).replace("{language}", b.getLanguage());
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
    if (n !== "GET" && K(e))
      return Je(e) ? e : JSON.stringify(e);
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
      const a = n.match(/\?/) ? "&" : "?", s = typeof e == "object" ? pn(e) : e;
      if (K(s))
        return `${a}${s}`;
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
      const n = Le(this.requestDefault);
      if (e instanceof FormData)
        F(n, (o, a) => {
          e.has(a) || e.set(a, o);
        });
      else if (R(e))
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
    return R(e) && (this.headers = e), y;
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
    return Je(e) ? await this.fetch({
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
    return this.response.push(...Se(e)), y;
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
  static getResponse(e = "", n, o, a) {
    return this.response.find((s) => {
      if (B(Le(s == null ? void 0 : s.disable)) !== !0 && (s.path instanceof RegExp && e.match(s.path) || e === s.path) && n === s.method && (Dt.indexOf(s) === -1 || a)) {
        const r = this.addRequestDefault(s == null ? void 0 : s.request);
        let i = !1;
        if (o === r || r === "*any" ? i = !0 : K(o) && K(r) && R(o) && R(r) && !(o instanceof FormData) && !(r instanceof FormData) && Object.values(o).length === Object.values(r).length && (i = Object.entries(r).reduce(
          (c, [h, p]) => c && (p === (o == null ? void 0 : o[h]) || p === "*any"),
          !0
        )), i)
          return a && console.warn(`Response type: ${s.path}`), Dt.push(s), !0;
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
      queryReturn: a = void 0,
      globalPreparation: s = !0,
      globalEnd: r = !0
    } = e, i = await this.makeEmulator(e);
    if (i)
      return i;
    let c = {};
    W.show();
    try {
      this.preparationItem && s && await this.makePreparation();
      const h = await this.makeQuery(e), p = r && this.preparationEndItem ? await this.makePreparationEnd(h) : {};
      if (this.status = h.status, this.statusText = h.statusText, p != null && p.reset)
        return W.hide(), await this.fetch(e);
      a ? c = await a(h) : "data" in p ? c = p.data : (h.headers.get("Content-Type") ?? "").match("application/json") ? c = await h.json() : c = { data: await h.text() };
    } catch (h) {
      o && console.error("Api: ", h), this.error = h;
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
  static fetchResponse(e, n) {
    return this.startResponseLoading(), new Promise((o) => {
      Dn(
        wt(e.response) ? e.response(n) : e.response
      ).then((a) => {
        Le(e == null ? void 0 : e.lag) ? (W.show(), setTimeout(() => {
          this.stopResponseLoading(), o(a), W.hide();
        }, $o(0, 2e3))) : (this.stopResponseLoading(), o(a));
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
      global: a = o === "GET",
      devMode: s = !1
    } = e;
    if (a || s) {
      const r = this.addRequestDefault(e.request), i = this.getResponse(n, o, r, s);
      if (i) {
        const c = await this.fetchResponse(i, r);
        return s && console.warn("Response data:", n, r, c), c;
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
      path: a = "",
      pathFull: s = void 0,
      method: r = "GET",
      headers: i = {},
      type: c = "application/json;charset=UTF-8",
      init: h = {}
    } = e, p = s ?? this.getUrl(a, o), u = `${p}${this.getBodyForGet(n, p, r)}`, f = this.getHeaders(i, c), D = {
      ...h,
      method: r,
      body: this.getBody(n, r)
    };
    return f && (D.headers = f), await fetch(u, D);
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
    if (this.lastResponse = e, e && R(e) && ("message" in e && (this.lastMessage = String(e.message)), n && "data" in e)) {
      if (R(e.data)) {
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
    this.responseLoading && clearTimeout(this.responseLoading), A() && document.body.classList.add(Mt);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  static stopResponseLoading() {
    this.responseLoading = setTimeout(() => {
      this.responseLoading = void 0, A() && document.body.classList.remove(Mt);
    }, 1200);
  }
};
l(y, "url", "/api/"), l(y, "response", []), l(y, "responseLoading"), l(y, "headers", {}), l(y, "requestDefault"), l(y, "preparation", !1), l(y, "preparationItem"), l(y, "preparationEndItem"), l(y, "status"), l(y, "statusText"), l(y, "error"), l(y, "lastResponse"), l(y, "lastMessage");
let Ge = y;
class Ho {
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
class Jo {
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
    return e in this.cache || (this.cache[e] = new Ho(n)), this.cache[e];
  }
}
const be = class be {
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
l(be, "cache"), be.cache = new Jo();
let Ct = be;
function dn(t, e = !1) {
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
          if (e && A() && typeof (window == null ? void 0 : window[n]) == "function")
            return window[n];
        }
    }
  }
  return t;
}
const Go = "cookie-block";
class yn {
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
l(yn, "storage", new it(Go));
const ke = {};
class ta {
  constructor(e) {
    l(this, "value");
    l(this, "options", {});
    if (this.name = e, e in Ve)
      return Ve[e];
    this.value = ke == null ? void 0 : ke[e], Ve[e] = this;
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
    if (A() && !yn.get()) {
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
  if (A())
    for (const e of document.cookie.split(";")) {
      const [n, o] = e.trim().split("=");
      n && K(o) && (ke[n] = dn(o));
    }
})();
const Ve = {}, Q = class Q {
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
    let n = this.map, o, a = "";
    return this.toNumber(e).forEach((s) => {
      a === "" && s in n ? (o = n[s], n = n[s].next) : a += s;
    }), {
      item: o,
      phone: a
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
    if (K(e) && Array.isArray(n) && n.length > 0) {
      const o = this.removeZero(e), a = o.length;
      for (const s of n)
        if (this.getUnnecessaryLength(s) === a)
          return this.toStandard(o, s);
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
    const e = F(b.getList(), (n) => {
      if (n != null && n.phoneMask)
        return {
          phone: (n == null ? void 0 : n.phoneCode) && Number(n.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: (n == null ? void 0 : n.phoneWithin) || 0,
          mask: Se(n.phoneMask),
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
        let o = this.map, a;
        if (this.toNumber(n).forEach((s) => {
          s in o || (o[s] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), a = o[s], o = o[s].next;
        }), a) {
          a.value === void 0 && (a.info = e, a.value = e.value);
          const s = this.toWithin(n, e.within);
          a.mask.push(s), a.maskFull.push(s.replace(/\d/ig, "*")), a.items.push(e);
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
l(Q, "list", []), l(Q, "map", {}), Q.makeList(), Q.makeMap();
let kt = Q;
const U = class U {
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
    var a;
    const o = B(n);
    o !== ((a = this.hash) == null ? void 0 : a[e]) && (this.hash[e] = o, this.update());
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
      (...n) => (e[n[1]] = dn(n[2]), "")
    ), e;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${pn(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
    F(this.watch, (n, o) => {
      var a;
      ((a = this.hash) == null ? void 0 : a[o]) !== (e == null ? void 0 : e[o]) && n.forEach((s) => s(e[o]));
    });
  }
};
l(U, "hash", {}), l(U, "watch", {}), l(U, "block", !1), A() && (U.reload(), addEventListener("hashchange", () => U.reload()));
let vt = U;
const Be = "__UI_ICON", At = 320, Et = "--LOAD--", le = class le {
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
    var s, r;
    const a = ((s = this.icons) == null ? void 0 : s[this.getName(e)]) ?? ((r = this.icons) == null ? void 0 : r[e]) ?? `${e.replace(/^@/, n ?? this.url)}.svg`;
    return typeof a == "string" ? a === Et && o > 0 ? (await this.wait(), this.get(e, n, o - At)) : a : await a;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return F(this.icons, (e, n) => n.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${Ge.isLocalhost(), ""}${this.url}`;
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
    this.icons[this.getName(e)] = Et;
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
    F(e, (n, o) => this.add(o, n));
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
    return new Promise((e) => setTimeout(() => e(), At));
  }
};
l(le, "icons", {}), l(le, "url", "/icons/"), A() && (Be in window || (window[Be] = {}), le.icons = window[Be]);
let zt = le;
function Yo(t, e, n) {
  var o;
  return ((o = V(t)) == null ? void 0 : o[e]) ?? n;
}
function Zo(t, e, n) {
  const o = V(t);
  if (o) {
    const a = Yo(o, e);
    if (fe(a) && fe(n))
      F(n, (s, r) => {
        a[r] = B(s);
      });
    else {
      const s = B(n);
      !(e in o) && typeof s == "string" ? o.setAttribute(e.toString(), s) : o[e] = B(n);
    }
  }
  return o;
}
function _t(t, e = "div", n, o) {
  if (!A())
    return;
  const a = document.createElement(e);
  return typeof n == "function" ? n(a) : R(n) && F(n, (s, r) => {
    Zo(a, r, s);
  }), t == null || t.insertBefore(a, null), a;
}
const he = class he {
  /**
   * Constructor
   */
  constructor() {
    l(this, "item", Qn());
    l(this, "is", se(() => this.item.value !== void 0));
    he.is().then((e) => {
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
    return _t(document.body, "div", (e) => {
      e.style.height = "24px", e.style.overflowY = "scroll", e.style.position = "fixed", e.style.width = "100%", _t(e, "div", (n) => {
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
l(he, "storage", new it("scrollbar", !0)), l(he, "calculate", !1);
let St = he;
function Ye(t) {
  return Array.isArray(t);
}
function qo(t) {
  return t.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (e) => `${e.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...e) => `${e[1].toUpperCase()}`).replace(/^([A-Z])/, (e) => `${e.toLowerCase()}`);
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
    b.set(e, !0), this.item.value = b.getItem();
  }
};
l(z, "item", Xn(b.get())), l(z, "country", se(() => z.item.value.country)), l(z, "language", se(() => z.item.value.language)), l(z, "standard", se(() => z.item.value.standard)), l(z, "firstDay", se(() => z.item.value.firstDay));
let bt = z;
var m = /* @__PURE__ */ ((t) => (t.text = "text", t.string = "string", t.number = "number", t.boolean = "boolean", t.select = "select", t.array = "array", t.object = "object", t))(m || {}), Qo = /* @__PURE__ */ ((t) => (t.adaptive = "Adaptive", t.status = "Status", t.value = "Values", t.style = "Styles", t))(Qo || {});
class Xo {
  /**
   * Constructor
   * @param name - The name of the item in the wiki/ Название элемента в wiki
   * @param item - The item to convert to a Storybook args item/
   * Элемент, который нужно преобразовать в элемент аргументов Storybook
   */
  constructor(e, n) {
    this.name = e, this.item = n;
  }
  /**
   * Returns the name of the item in the wiki
   *
   * Возвращает название элемента в wiki
   * @return The name of the item in the wiki/ название элемента в wiki
   */
  getName() {
    return this.name;
  }
  /**
   * Returns the value of the item in the wiki
   *
   * Возвращает значение элемента в wiki
   * @return The value of the item in the wiki/ значение элемента в wiki
   */
  getValue() {
    return this.item.options.value;
  }
  /**
   * Converts the Wiki item to a Storybook args item
   *
   * Преобразует элемент Wiki в элемент аргументов Storybook
   */
  to() {
    switch (this.item.type) {
      case m.text:
      case m.string:
        return this.toString();
      case m.number:
        return this.toNumber();
      case m.boolean:
        return this.toBoolean();
      case m.select:
        return this.toSelect();
      case m.object:
      case m.array:
        return this.toObject();
    }
  }
  /**
   * Returns the category type of a property
   *
   * Возвращает тип категории у свойства
   */
  getCategory() {
    const e = this.item.options.category;
    return e ? { category: e } : {};
  }
  /**
   * Returns the default property values
   *
   * Возвращает значения свойства по умолчанию
   */
  getDefaultValue() {
    const e = this.item.options.type, n = this.item.options.defaultValue;
    let o;
    if (n !== void 0)
      switch (typeof n) {
        case "boolean":
          o = n ? "true" : "false";
          break;
        default:
          o = String(n);
          break;
      }
    else e === "boolean" && (o = "false");
    return o ? {
      defaultValue: { summary: o }
    } : {};
  }
  /**
   * Returns a property description based on the language
   *
   * Возвращает описание свойства с учетом языка
   */
  getDescription() {
    const e = b.getLanguage(), n = this.item.options.description;
    let o;
    return typeof n == "string" ? o = n : R(n) && e in n && (o = n[e]), o ? { description: o } : {};
  }
  /**
   * Returns the type of property
   *
   * Возвращает тип свойства
   */
  getType() {
    const e = this.item.options.type, n = this.item.options.options;
    let o;
    if (n)
      Ye(n) ? o = n.join(" | ") : R(n) && (o = Object.keys(n).join(" | "));
    else if (e)
      Ye(e) ? o = e.join(" | ") : o = e;
    else
      switch (this.item.type) {
        case m.select:
          o = String(m.object);
          break;
        case m.text:
          o = String(m.string);
          break;
        default:
          o = String(this.item.type);
      }
    return o ? {
      type: { summary: o }
    } : {};
  }
  /**
   * Function to create a Storybook args object with boolean type
   *
   * Функция для создания объекта аргументов Storybook с типом boolean
   */
  toBoolean() {
    return {
      control: m.boolean,
      table: {
        ...this.getCategory(),
        ...this.getDefaultValue(),
        ...this.getType()
      },
      ...this.getDescription()
    };
  }
  /**
   * Function to create a Storybook args object with number type
   *
   * Функция для создания объекта аргументов Storybook с типом number
   */
  toNumber() {
    const e = this.item.options, n = { type: m.number }, o = {
      ...this.getCategory(),
      ...this.getDefaultValue(),
      ...this.getType()
    };
    return "min" in e && (n.min = e.min), "max" in e && (n.min = e.max), {
      control: n,
      table: o,
      ...this.getDescription()
    };
  }
  /**
   * Function to create a Storybook args object with object type
   *
   * Функция для создания объекта аргументов Storybook с типом object
   */
  toObject() {
    return {
      control: m.object,
      table: {
        ...this.getCategory(),
        ...this.getType()
      },
      ...this.getDescription()
    };
  }
  /**
   * Function to create a Storybook args object with select type
   *
   * Функция для создания объекта аргументов Storybook с типом select
   */
  toSelect() {
    return {
      control: m.select,
      options: this.item.options.options,
      table: {
        ...this.getCategory(),
        ...this.getDefaultValue(),
        ...this.getType()
      },
      ...this.getDescription()
    };
  }
  /**
   * Function to create a Storybook args object with string type
   *
   * Функция для создания объекта аргументов Storybook с типом string
   */
  toString() {
    return {
      control: m.text,
      table: {
        ...this.getCategory(),
        ...this.getDefaultValue(),
        ...this.getType()
      },
      ...this.getDescription()
    };
  }
}
class na {
  /**
   * Creates a new instance of WikiStorybook
   *
   * Создает новый экземпляр WikiStorybook
   * @param component - Component name/ Название компонента
   * @param props - Properties for the component/ свойства для компонента
   * @param defaults - Default values for the component/ значения по умолчанию для компонента
   * @param wikiDesign - Design values for the wiki/ значения дизайна для wiki
   * @param wikiBasic - Basic values for the wiki/ базовые значения для wiki
   * @param wikiDescriptions - Component descriptions for the wiki/ описания компонентов для wiki
   */
  constructor(e, n, o, a, s, r) {
    l(this, "list");
    this.component = e, this.props = n, this.defaults = o, this.wikiDesign = a, this.wikiBasic = s, this.wikiDescriptions = r, this.list = this.initList();
  }
  /**
   * Returns the properties wiki for the component
   *
   * Возвращает wiki свойств для компонента
   * @return The properties wiki for the component/ wiki свойств для компонента
   */
  getWiki() {
    return console.log("this.initPropsWiki()", this.initPropsWiki()), this.initPropsWiki();
  }
  /**
   * Returns the description of the component from the wiki
   *
   * Возвращает описание компонента из wiki
   * @return The description of the component/ описание компонента
   */
  getDescription() {
    var o, a;
    const e = b.getLanguage(), n = this.wikiDescriptions.find((s) => s.name === this.component);
    if (n) {
      if (Ye(n.description))
        return ((o = n.description) == null ? void 0 : o[e]) ?? ((a = Object.values(n.description)) == null ? void 0 : a[0]);
      if (typeof n.description == "string")
        return n.description;
    }
    return "";
  }
  /**
   * Returns the values of the wiki items
   *
   * Возвращает значения элементов wiki
   * @return An object containing the values of the wiki items/ объект, содержащий значения элементов wiki
   */
  getValues() {
    const e = {};
    return this.list.forEach((n) => {
      const o = n.getName(), a = n.getValue();
      a !== void 0 && (e[o] = a);
    }), e;
  }
  /**
   * Returns a wiki item by its name
   *
   * Возвращает элемент wiki по его имени
   * @param name - The name of the wiki item/ имя элемента wiki
   */
  getWikiItem(e) {
    var n, o;
    if (e in this.wikiBasic || e in this.wikiDesign)
      return {
        ...((n = this.wikiBasic) == null ? void 0 : n[e]) ?? {},
        ...((o = this.wikiDesign) == null ? void 0 : o[e]) ?? {}
      };
  }
  /**
   * Adds a default value to the wiki item and a list of options
   *
   * Добавляет значение по умолчанию к элементу wiki и список опций
   * @param item - The item to convert/ элемент для преобразования
   * @param wiki - The wiki item to which the default value and options will be added/
   * элемент wiki, к которому будут добавлены значение по умолчанию и опции
   */
  toWikiItemChanged(e, n) {
    var o, a;
    return {
      ...n,
      options: {
        ...n.options,
        type: ((o = n.options) == null ? void 0 : o.type) ?? e.type,
        defaultValue: this.defaults[e.name],
        options: e.option ?? ((a = n.options) == null ? void 0 : a.options) ?? void 0
      }
    };
  }
  /**
   * Initializes the list of wiki items for the component
   *
   * Инициализирует список элементов wiki для компонента
   * @return The list of wiki items for the component/ список элементов wiki для компонента
   */
  initList() {
    const e = [];
    return this.props.forEach((n) => {
      const o = `${qo(this.component)}.${n.name}`, a = this.getWikiItem(o) ?? this.getWikiItem(n.name);
      a && e.push(
        new Xo(
          n.name,
          this.toWikiItemChanged(n, a)
        )
      );
    }), e;
  }
  /**
   * Initializes the properties list for the component
   *
   * Инициализирует список свойств для компонента
   * @return The list of properties for the component/ список свойств для компонента
   */
  initPropsWiki() {
    const e = {};
    return this.list.forEach((n) => {
      e[n.getName()] = n.to();
    }), e;
  }
}
export {
  Qo as StorybookCategory,
  m as StorybookControl,
  na as WikiStorybook,
  Xo as WikiStorybookItem
};
