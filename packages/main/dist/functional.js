var _s = Object.defineProperty;
var Ns = (t, e, n) => e in t ? _s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var h = (t, e, n) => Ns(t, typeof e != "symbol" ? e + "" : e, n);
function Tn(t) {
  return t instanceof Function || typeof t == "function";
}
function ee(t) {
  return Tn(t) ? t() : t;
}
async function zs(t) {
  const e = ee(t);
  return e instanceof Promise ? await e : e;
}
function E(t) {
  return !!(t && typeof t == "object");
}
function k(t, e) {
  if (E(t)) {
    const n = [];
    return t instanceof Map ? t.forEach((s, r) => n.push(e(s, r, t))) : Array.isArray(t) ? t.forEach((s, r) => n.push(e(s, r, t))) : Object.entries(t).forEach(
      ([s, r]) => n.push(e(r, s, t))
    ), n.filter((s) => s !== void 0);
  }
  return [];
}
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ls(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const We = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const be = () => {
}, Ts = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), ce = Object.assign, Is = Object.prototype.hasOwnProperty, Pt = (t, e) => Is.call(t, e), b = Array.isArray, Se = (t) => Dt(t) === "[object Map]", Os = (t) => Dt(t) === "[object Set]", L = (t) => typeof t == "function", te = (t) => typeof t == "string", qe = (t) => typeof t == "symbol", R = (t) => t !== null && typeof t == "object", Rs = (t) => (R(t) || L(t)) && L(t.then) && L(t.catch), Ps = Object.prototype.toString, Dt = (t) => Ps.call(t), In = (t) => Dt(t).slice(8, -1), xs = (t) => Dt(t) === "[object Object]", qt = (t) => te(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, On = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Rn = On((t) => t.charAt(0).toUpperCase() + t.slice(1)), Fs = On(
  (t) => t ? `on${Rn(t)}` : ""
), ie = (t, e) => !Object.is(t, e);
let fn;
const Ct = () => fn || (fn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qt(t) {
  if (b(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const s = t[n], r = te(s) ? Hs(s) : Qt(s);
      if (r)
        for (const o in r)
          e[o] = r[o];
    }
    return e;
  } else if (te(t) || R(t))
    return t;
}
const Bs = /;(?![^(]*\))/g, Vs = /:([^]+)/, js = /\/\*[^]*?\*\//g;
function Hs(t) {
  const e = {};
  return t.replace(js, "").split(Bs).forEach((n) => {
    if (n) {
      const s = n.split(Vs);
      s.length > 1 && (e[s[0].trim()] = s[1].trim());
    }
  }), e;
}
function Xt(t) {
  let e = "";
  if (te(t))
    e = t;
  else if (b(t))
    for (let n = 0; n < t.length; n++) {
      const s = Xt(t[n]);
      s && (e += s + " ");
    }
  else if (R(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Y(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let C;
const $t = /* @__PURE__ */ new WeakSet();
class Ws {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, $t.has(this) && ($t.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, pn(this), Fn(this);
    const e = C, n = H;
    C = this, H = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && C !== this && Y(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Bn(this), C = e, H = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        nn(e);
      this.deps = this.depsTail = void 0, pn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? $t.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    xt(this) && this.run();
  }
  get dirty() {
    return xt(this);
  }
}
let Pn = 0, Pe, xe;
function xn(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = xe, xe = t;
    return;
  }
  t.next = Pe, Pe = t;
}
function en() {
  Pn++;
}
function tn() {
  if (--Pn > 0)
    return;
  if (xe) {
    let e = xe;
    for (xe = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; Pe; ) {
    let e = Pe;
    for (Pe = void 0; e; ) {
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
function Fn(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Bn(t) {
  let e, n = t.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), nn(s), Ks(s)) : e = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  t.deps = e, t.depsTail = n;
}
function xt(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Vn(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Vn(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ke) || (t.globalVersion = Ke, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !xt(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = C, s = H;
  C = t, H = !0;
  try {
    Fn(t);
    const r = t.fn(t._value);
    (e.version === 0 || ie(r, t._value)) && (t.flags |= 128, t._value = r, e.version++);
  } catch (r) {
    throw e.version++, r;
  } finally {
    C = n, H = s, Bn(t), t.flags &= -3;
  }
}
function nn(t, e = !1) {
  const { dep: n, prevSub: s, nextSub: r } = t;
  if (s && (s.nextSub = r, t.prevSub = void 0), r && (r.prevSub = s, t.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === t && (n.subsHead = r), n.subs === t && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      nn(o, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function Ks(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let H = !0;
const jn = [];
function ze() {
  jn.push(H), H = !1;
}
function Le() {
  const t = jn.pop();
  H = t === void 0 ? !0 : t;
}
function pn(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const n = C;
    C = void 0;
    try {
      e();
    } finally {
      C = n;
    }
  }
}
let Ke = 0;
class Us {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class sn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!C || !H || C === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== C)
      n = this.activeLink = new Us(C, this), C.deps ? (n.prevDep = C.depsTail, C.depsTail.nextDep = n, C.depsTail = n) : C.deps = C.depsTail = n, Hn(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = C.depsTail, n.nextDep = void 0, C.depsTail.nextDep = n, C.depsTail = n, C.deps === n && (C.deps = s);
    }
    return process.env.NODE_ENV !== "production" && C.onTrack && C.onTrack(
      ce(
        {
          effect: C
        },
        e
      )
    ), n;
  }
  trigger(e) {
    this.version++, Ke++, this.notify(e);
  }
  notify(e) {
    en();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ce(
              {
                effect: n.sub
              },
              e
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      tn();
    }
  }
}
function Hn(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let s = e.deps; s; s = s.nextDep)
        Hn(s);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), process.env.NODE_ENV !== "production" && t.dep.subsHead === void 0 && (t.dep.subsHead = t), t.dep.subs = t;
  }
}
const ct = /* @__PURE__ */ new WeakMap(), ge = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Ft = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ue = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function N(t, e, n) {
  if (H && C) {
    let s = ct.get(t);
    s || ct.set(t, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new sn()), r.map = s, r.key = n), process.env.NODE_ENV !== "production" ? r.track({
      target: t,
      type: e,
      key: n
    }) : r.track();
  }
}
function re(t, e, n, s, r, o) {
  const i = ct.get(t);
  if (!i) {
    Ke++;
    return;
  }
  const u = (c) => {
    c && (process.env.NODE_ENV !== "production" ? c.trigger({
      target: t,
      type: e,
      key: n,
      newValue: s,
      oldValue: r,
      oldTarget: o
    }) : c.trigger());
  };
  if (en(), e === "clear")
    i.forEach(u);
  else {
    const c = b(t), f = c && qt(n);
    if (c && n === "length") {
      const d = Number(s);
      i.forEach((l, g) => {
        (g === "length" || g === Ue || !qe(g) && g >= d) && u(l);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && u(i.get(n)), f && u(i.get(Ue)), e) {
        case "add":
          c ? f && u(i.get("length")) : (u(i.get(ge)), Se(t) && u(i.get(Ft)));
          break;
        case "delete":
          c || (u(i.get(ge)), Se(t) && u(i.get(Ft)));
          break;
        case "set":
          Se(t) && u(i.get(ge));
          break;
      }
  }
  tn();
}
function Gs(t, e) {
  const n = ct.get(t);
  return n && n.get(e);
}
function De(t) {
  const e = m(t);
  return e === t ? e : (N(e, "iterate", Ue), P(t) ? e : e.map(I));
}
function rn(t) {
  return N(t = m(t), "iterate", Ue), t;
}
const Ys = {
  __proto__: null,
  [Symbol.iterator]() {
    return bt(this, Symbol.iterator, I);
  },
  concat(...t) {
    return De(this).concat(
      ...t.map((e) => b(e) ? De(e) : e)
    );
  },
  entries() {
    return bt(this, "entries", (t) => (t[1] = I(t[1]), t));
  },
  every(t, e) {
    return Z(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return Z(this, "filter", t, e, (n) => n.map(I), arguments);
  },
  find(t, e) {
    return Z(this, "find", t, e, I, arguments);
  },
  findIndex(t, e) {
    return Z(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return Z(this, "findLast", t, e, I, arguments);
  },
  findLastIndex(t, e) {
    return Z(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return Z(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return St(this, "includes", t);
  },
  indexOf(...t) {
    return St(this, "indexOf", t);
  },
  join(t) {
    return De(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return St(this, "lastIndexOf", t);
  },
  map(t, e) {
    return Z(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Ie(this, "pop");
  },
  push(...t) {
    return Ie(this, "push", t);
  },
  reduce(t, ...e) {
    return gn(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return gn(this, "reduceRight", t, e);
  },
  shift() {
    return Ie(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return Z(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Ie(this, "splice", t);
  },
  toReversed() {
    return De(this).toReversed();
  },
  toSorted(t) {
    return De(this).toSorted(t);
  },
  toSpliced(...t) {
    return De(this).toSpliced(...t);
  },
  unshift(...t) {
    return Ie(this, "unshift", t);
  },
  values() {
    return bt(this, "values", I);
  }
};
function bt(t, e, n) {
  const s = rn(t), r = s[e]();
  return s !== t && !P(t) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.value && (o.value = n(o.value)), o;
  }), r;
}
const Zs = Array.prototype;
function Z(t, e, n, s, r, o) {
  const i = rn(t), u = i !== t && !P(t), c = i[e];
  if (c !== Zs[e]) {
    const l = c.apply(t, o);
    return u ? I(l) : l;
  }
  let f = n;
  i !== t && (u ? f = function(l, g) {
    return n.call(this, I(l), g, t);
  } : n.length > 2 && (f = function(l, g) {
    return n.call(this, l, g, t);
  }));
  const d = c.call(i, f, s);
  return u && r ? r(d) : d;
}
function gn(t, e, n, s) {
  const r = rn(t);
  let o = n;
  return r !== t && (P(t) ? n.length > 3 && (o = function(i, u, c) {
    return n.call(this, i, u, c, t);
  }) : o = function(i, u, c) {
    return n.call(this, i, I(u), c, t);
  }), r[e](o, ...s);
}
function St(t, e, n) {
  const s = m(t);
  N(s, "iterate", Ue);
  const r = s[e](...n);
  return (r === -1 || r === !1) && Ge(n[0]) ? (n[0] = m(n[0]), s[e](...n)) : r;
}
function Ie(t, e, n = []) {
  ze(), en();
  const s = m(t)[e].apply(t, n);
  return tn(), Le(), s;
}
const Js = /* @__PURE__ */ Ls("__proto__,__v_isRef,__isVue"), Wn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(qe)
);
function qs(t) {
  qe(t) || (t = String(t));
  const e = m(this);
  return N(e, "has", t), e.hasOwnProperty(t);
}
class Kn {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, s) {
    if (n === "__v_skip") return e.__v_skip;
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? ar : Yn : o ? ir : Gn).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(s) ? e : void 0;
    const i = b(e);
    if (!r) {
      let c;
      if (i && (c = Ys[n]))
        return c;
      if (n === "hasOwnProperty")
        return qs;
    }
    const u = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      _(e) ? e : s
    );
    return (qe(n) ? Wn.has(n) : Js(n)) || (r || N(e, "get", n), o) ? u : _(u) ? i && qt(n) ? u : u.value : R(u) ? r ? Jn(u) : Zn(u) : u;
  }
}
class Qs extends Kn {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, s, r) {
    let o = e[n];
    if (!this._isShallow) {
      const c = ne(o);
      if (!P(s) && !ne(s) && (o = m(o), s = m(s)), !b(e) && _(o) && !_(s))
        return c ? !1 : (o.value = s, !0);
    }
    const i = b(e) && qt(n) ? Number(n) < e.length : Pt(e, n), u = Reflect.set(
      e,
      n,
      s,
      _(e) ? e : r
    );
    return e === m(r) && (i ? ie(s, o) && re(e, "set", n, s, o) : re(e, "add", n, s)), u;
  }
  deleteProperty(e, n) {
    const s = Pt(e, n), r = e[n], o = Reflect.deleteProperty(e, n);
    return o && s && re(e, "delete", n, void 0, r), o;
  }
  has(e, n) {
    const s = Reflect.has(e, n);
    return (!qe(n) || !Wn.has(n)) && N(e, "has", n), s;
  }
  ownKeys(e) {
    return N(
      e,
      "iterate",
      b(e) ? "length" : ge
    ), Reflect.ownKeys(e);
  }
}
class Xs extends Kn {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && Y(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && Y(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const er = /* @__PURE__ */ new Qs(), tr = /* @__PURE__ */ new Xs(), Bt = (t) => t, nt = (t) => Reflect.getPrototypeOf(t);
function nr(t, e, n) {
  return function(...s) {
    const r = this.__v_raw, o = m(r), i = Se(o), u = t === "entries" || t === Symbol.iterator && i, c = t === "keys" && i, f = r[t](...s), d = n ? Bt : e ? Vt : I;
    return !e && N(
      o,
      "iterate",
      c ? Ft : ge
    ), {
      // iterator protocol
      next() {
        const { value: l, done: g } = f.next();
        return g ? { value: l, done: g } : {
          value: u ? [d(l[0]), d(l[1])] : d(l),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function st(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      Y(
        `${Rn(t)} operation ${n}failed: target is readonly.`,
        m(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function sr(t, e) {
  const n = {
    get(r) {
      const o = this.__v_raw, i = m(o), u = m(r);
      t || (ie(r, u) && N(i, "get", r), N(i, "get", u));
      const { has: c } = nt(i), f = e ? Bt : t ? Vt : I;
      if (c.call(i, r))
        return f(o.get(r));
      if (c.call(i, u))
        return f(o.get(u));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !t && N(m(r), "iterate", ge), Reflect.get(r, "size", r);
    },
    has(r) {
      const o = this.__v_raw, i = m(o), u = m(r);
      return t || (ie(r, u) && N(i, "has", r), N(i, "has", u)), r === u ? o.has(r) : o.has(r) || o.has(u);
    },
    forEach(r, o) {
      const i = this, u = i.__v_raw, c = m(u), f = e ? Bt : t ? Vt : I;
      return !t && N(c, "iterate", ge), u.forEach((d, l) => r.call(o, f(d), f(l), i));
    }
  };
  return ce(
    n,
    t ? {
      add: st("add"),
      set: st("set"),
      delete: st("delete"),
      clear: st("clear")
    } : {
      add(r) {
        !e && !P(r) && !ne(r) && (r = m(r));
        const o = m(this);
        return nt(o).has.call(o, r) || (o.add(r), re(o, "add", r, r)), this;
      },
      set(r, o) {
        !e && !P(o) && !ne(o) && (o = m(o));
        const i = m(this), { has: u, get: c } = nt(i);
        let f = u.call(i, r);
        f ? process.env.NODE_ENV !== "production" && dn(i, u, r) : (r = m(r), f = u.call(i, r));
        const d = c.call(i, r);
        return i.set(r, o), f ? ie(o, d) && re(i, "set", r, o, d) : re(i, "add", r, o), this;
      },
      delete(r) {
        const o = m(this), { has: i, get: u } = nt(o);
        let c = i.call(o, r);
        c ? process.env.NODE_ENV !== "production" && dn(o, i, r) : (r = m(r), c = i.call(o, r));
        const f = u ? u.call(o, r) : void 0, d = o.delete(r);
        return c && re(o, "delete", r, void 0, f), d;
      },
      clear() {
        const r = m(this), o = r.size !== 0, i = process.env.NODE_ENV !== "production" ? Se(r) ? new Map(r) : new Set(r) : void 0, u = r.clear();
        return o && re(
          r,
          "clear",
          void 0,
          void 0,
          i
        ), u;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = nr(r, t, e);
  }), n;
}
function Un(t, e) {
  const n = sr(t, e);
  return (s, r, o) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? s : Reflect.get(
    Pt(n, r) && r in s ? n : s,
    r,
    o
  );
}
const rr = {
  get: /* @__PURE__ */ Un(!1, !1)
}, or = {
  get: /* @__PURE__ */ Un(!0, !1)
};
function dn(t, e, n) {
  const s = m(n);
  if (s !== n && e.call(t, s)) {
    const r = In(t);
    Y(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Gn = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap();
function ur(t) {
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
function cr(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : ur(In(t));
}
function Zn(t) {
  return ne(t) ? t : qn(
    t,
    !1,
    er,
    rr,
    Gn
  );
}
function Jn(t) {
  return qn(
    t,
    !0,
    tr,
    or,
    Yn
  );
}
function qn(t, e, n, s, r) {
  if (!R(t))
    return process.env.NODE_ENV !== "production" && Y(
      `value cannot be made ${e ? "readonly" : "reactive"}: ${String(
        t
      )}`
    ), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const o = cr(t);
  if (o === 0)
    return t;
  const i = r.get(t);
  if (i)
    return i;
  const u = new Proxy(
    t,
    o === 2 ? s : n
  );
  return r.set(t, u), u;
}
function Fe(t) {
  return ne(t) ? Fe(t.__v_raw) : !!(t && t.__v_isReactive);
}
function ne(t) {
  return !!(t && t.__v_isReadonly);
}
function P(t) {
  return !!(t && t.__v_isShallow);
}
function Ge(t) {
  return t ? !!t.__v_raw : !1;
}
function m(t) {
  const e = t && t.__v_raw;
  return e ? m(e) : t;
}
const I = (t) => R(t) ? Zn(t) : t, Vt = (t) => R(t) ? Jn(t) : t;
function _(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function W(t) {
  return Qn(t, !1);
}
function Qe(t) {
  return Qn(t, !0);
}
function Qn(t, e) {
  return _(t) ? t : new lr(t, e);
}
class lr {
  constructor(e, n) {
    this.dep = new sn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : m(e), this._value = n ? e : I(e), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, s = this.__v_isShallow || P(e) || ne(e);
    e = s ? e : m(e), ie(e, n) && (this._rawValue = e, this._value = s ? e : I(e), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function hr(t) {
  t.dep && (process.env.NODE_ENV !== "production" ? t.dep.trigger({
    target: t,
    type: "set",
    key: "value",
    newValue: t._value
  }) : t.dep.trigger());
}
function fr(t) {
  process.env.NODE_ENV !== "production" && !Ge(t) && Y("toRefs() expects a reactive object but received a plain one.");
  const e = b(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = gr(t, n);
  return e;
}
class pr {
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
    return Gs(m(this._object), this._key);
  }
}
function gr(t, e, n) {
  const s = t[e];
  return _(s) ? s : new pr(t, e, n);
}
class dr {
  constructor(e, n, s) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new sn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ke - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    C !== this)
      return xn(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const e = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Vn(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && Y("Write operation failed: computed value is readonly");
  }
}
function yr(t, e, n = !1) {
  let s, r;
  L(t) ? s = t : (s = t.get, r = t.set);
  const o = new dr(s, r, n);
  return process.env.NODE_ENV, o;
}
const rt = {}, lt = /* @__PURE__ */ new WeakMap();
let fe;
function mr(t, e = !1, n = fe) {
  if (n) {
    let s = lt.get(n);
    s || lt.set(n, s = []), s.push(t);
  } else process.env.NODE_ENV !== "production" && !e && Y(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Dr(t, e, n = We) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: u, call: c } = n, f = (D) => {
    (n.onWarn || Y)(
      "Invalid watch source: ",
      D,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (D) => r ? D : P(D) || r === !1 || r === 0 ? oe(D, 1) : oe(D);
  let l, g, y, M, z = !1, le = !1;
  if (_(t) ? (g = () => t.value, z = P(t)) : Fe(t) ? (g = () => d(t), z = !0) : b(t) ? (le = !0, z = t.some((D) => Fe(D) || P(D)), g = () => t.map((D) => {
    if (_(D))
      return D.value;
    if (Fe(D))
      return d(D);
    if (L(D))
      return c ? c(D, 2) : D();
    process.env.NODE_ENV !== "production" && f(D);
  })) : L(t) ? e ? g = c ? () => c(t, 2) : t : g = () => {
    if (y) {
      ze();
      try {
        y();
      } finally {
        Le();
      }
    }
    const D = fe;
    fe = l;
    try {
      return c ? c(t, 3, [M]) : t(M);
    } finally {
      fe = D;
    }
  } : (g = be, process.env.NODE_ENV !== "production" && f(t)), e && r) {
    const D = g, K = r === !0 ? 1 / 0 : r;
    g = () => oe(D(), K);
  }
  const me = () => {
    l.stop();
  };
  if (o && e) {
    const D = e;
    e = (...K) => {
      D(...K), me();
    };
  }
  let he = le ? new Array(t.length).fill(rt) : rt;
  const Te = (D) => {
    if (!(!(l.flags & 1) || !l.dirty && !D))
      if (e) {
        const K = l.run();
        if (r || z || (le ? K.some((kt, tt) => ie(kt, he[tt])) : ie(K, he))) {
          y && y();
          const kt = fe;
          fe = l;
          try {
            const tt = [
              K,
              // pass undefined as the old value when it's changed for the first time
              he === rt ? void 0 : le && he[0] === rt ? [] : he,
              M
            ];
            he = K, c ? c(e, 3, tt) : (
              // @ts-expect-error
              e(...tt)
            );
          } finally {
            fe = kt;
          }
        }
      } else
        l.run();
  };
  return u && u(Te), l = new Ws(g), l.scheduler = i ? () => i(Te, !1) : Te, M = (D) => mr(D, !1, l), y = l.onStop = () => {
    const D = lt.get(l);
    if (D) {
      if (c)
        c(D, 4);
      else
        for (const K of D) K();
      lt.delete(l);
    }
  }, process.env.NODE_ENV !== "production" && (l.onTrack = n.onTrack, l.onTrigger = n.onTrigger), e ? s ? Te(!0) : he = l.run() : i ? i(Te.bind(null, !0), !0) : l.run(), me.pause = l.pause.bind(l), me.resume = l.resume.bind(l), me.stop = me, me;
}
function oe(t, e = 1 / 0, n) {
  if (e <= 0 || !R(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(t)))
    return t;
  if (n.add(t), e--, _(t))
    oe(t.value, e, n);
  else if (b(t))
    for (let s = 0; s < t.length; s++)
      oe(t[s], e, n);
  else if (Os(t) || Se(t))
    t.forEach((s) => {
      oe(s, e, n);
    });
  else if (xs(t)) {
    for (const s in t)
      oe(t[s], e, n);
    for (const s of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, s) && oe(t[s], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const de = [];
function Cr(t) {
  de.push(t);
}
function Mr() {
  de.pop();
}
let Et = !1;
function S(t, ...e) {
  if (Et) return;
  Et = !0, ze();
  const n = de.length ? de[de.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = vr();
  if (s)
    Mt(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + e.map((o) => {
          var i, u;
          return (u = (i = o.toString) == null ? void 0 : i.call(o)) != null ? u : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${ms(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${t}`, ...e];
    r.length && o.push(`
`, ...kr(r)), console.warn(...o);
  }
  Le(), Et = !1;
}
function vr() {
  let t = de[de.length - 1];
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
function kr(t) {
  const e = [];
  return t.forEach((n, s) => {
    e.push(...s === 0 ? [] : [`
`], ...$r(n));
  }), e;
}
function $r({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", s = t.component ? t.component.parent == null : !1, r = ` at <${ms(
    t.component,
    t.type,
    s
  )}`, o = ">" + n;
  return t.props ? [r, ...br(t.props), o] : [r + o];
}
function br(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((s) => {
    e.push(...Xn(s, t[s]));
  }), n.length > 3 && e.push(" ..."), e;
}
function Xn(t, e, n) {
  return te(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : _(e) ? (e = Xn(t, m(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : L(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = m(e), n ? e : [`${t}=`, e]);
}
const on = {
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
function Mt(t, e, n, s) {
  try {
    return s ? t(...s) : t();
  } catch (r) {
    un(r, e, n);
  }
}
function an(t, e, n, s) {
  if (L(t)) {
    const r = Mt(t, e, n, s);
    return r && Rs(r) && r.catch((o) => {
      un(o, e, n);
    }), r;
  }
  if (b(t)) {
    const r = [];
    for (let o = 0; o < t.length; o++)
      r.push(an(t[o], e, n, s));
    return r;
  } else process.env.NODE_ENV !== "production" && S(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`
  );
}
function un(t, e, n, s = !0) {
  const r = e ? e.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = e && e.appContext.config || We;
  if (e) {
    let u = e.parent;
    const c = e.proxy, f = process.env.NODE_ENV !== "production" ? on[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const d = u.ec;
      if (d) {
        for (let l = 0; l < d.length; l++)
          if (d[l](t, c, f) === !1)
            return;
      }
      u = u.parent;
    }
    if (o) {
      ze(), Mt(o, null, 10, [
        t,
        c,
        f
      ]), Le();
      return;
    }
  }
  Sr(t, n, r, s, i);
}
function Sr(t, e, n, s = !0, r = !1) {
  if (process.env.NODE_ENV !== "production") {
    const o = on[e];
    if (n && Cr(n), S(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Mr(), s)
      throw t;
    console.error(t);
  } else {
    if (r)
      throw t;
    console.error(t);
  }
}
const F = [];
let J = -1;
const Ee = [];
let se = null, Me = 0;
const Er = /* @__PURE__ */ Promise.resolve();
let jt = null;
const Ar = 100;
function wr(t) {
  let e = J + 1, n = F.length;
  for (; e < n; ) {
    const s = e + n >>> 1, r = F[s], o = Ye(r);
    o < t || o === t && r.flags & 2 ? e = s + 1 : n = s;
  }
  return e;
}
function es(t) {
  if (!(t.flags & 1)) {
    const e = Ye(t), n = F[F.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Ye(n) ? F.push(t) : F.splice(wr(e), 0, t), t.flags |= 1, ts();
  }
}
function ts() {
  jt || (jt = Er.then(ss));
}
function ns(t) {
  b(t) ? Ee.push(...t) : se && t.id === -1 ? se.splice(Me + 1, 0, t) : t.flags & 1 || (Ee.push(t), t.flags |= 1), ts();
}
function _r(t) {
  if (Ee.length) {
    const e = [...new Set(Ee)].sort(
      (n, s) => Ye(n) - Ye(s)
    );
    if (Ee.length = 0, se) {
      se.push(...e);
      return;
    }
    for (se = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Me = 0; Me < se.length; Me++) {
      const n = se[Me];
      process.env.NODE_ENV !== "production" && rs(t, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    se = null, Me = 0;
  }
}
const Ye = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function ss(t) {
  process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const e = process.env.NODE_ENV !== "production" ? (n) => rs(t, n) : be;
  try {
    for (J = 0; J < F.length; J++) {
      const n = F[J];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Mt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; J < F.length; J++) {
      const n = F[J];
      n && (n.flags &= -2);
    }
    J = -1, F.length = 0, _r(t), jt = null, (F.length || Ee.length) && ss(t);
  }
}
function rs(t, e) {
  const n = t.get(e) || 0;
  if (n > Ar) {
    const s = e.i, r = s && ys(s.type);
    return un(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return t.set(e, n + 1), !1;
}
const At = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Ct().__VUE_HMR_RUNTIME__ = {
  createRecord: wt(Nr),
  rerender: wt(zr),
  reload: wt(Lr)
});
const ht = /* @__PURE__ */ new Map();
function Nr(t, e) {
  return ht.has(t) ? !1 : (ht.set(t, {
    initialDef: ft(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ft(t) {
  return Ds(t) ? t.__vccOpts : t;
}
function zr(t, e) {
  const n = ht.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((s) => {
    e && (s.render = e, ft(s.type).render = e), s.renderCache = [], s.update();
  }));
}
function Lr(t, e) {
  const n = ht.get(t);
  if (!n) return;
  e = ft(e), yn(n.initialDef, e);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const o = s[r], i = ft(o.type);
    let u = At.get(i);
    u || (i !== n.initialDef && yn(i, e), At.set(i, u = /* @__PURE__ */ new Set())), u.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (u.add(o), o.ceReload(e.styles), u.delete(o)) : o.parent ? es(() => {
      o.parent.update(), u.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(i);
  }
  ns(() => {
    At.clear();
  });
}
function yn(t, e) {
  ce(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function wt(t) {
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
let ve, ot = [];
function os(t, e) {
  var n, s;
  ve = t, ve ? (ve.enabled = !0, ot.forEach(({ event: r, args: o }) => ve.emit(r, ...o)), ot = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    os(o, e);
  }), setTimeout(() => {
    ve || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ot = []);
  }, 3e3)) : ot = [];
}
let _e = null, Tr = null;
const Ir = (t) => t.__isTeleport;
function is(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, is(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
Ct().requestIdleCallback;
Ct().cancelIdleCallback;
function Or(t, e, n = B, s = !1) {
  if (n) {
    const r = n[t] || (n[t] = []), o = e.__weh || (e.__weh = (...i) => {
      ze();
      const u = so(n), c = an(e, n, t, i);
      return u(), Le(), c;
    });
    return s ? r.unshift(o) : r.push(o), o;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Fs(on[t].replace(/ hook$/, ""));
    S(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Rr = (t) => (e, n = B) => {
  (!Ze || t === "sp") && Or(t, (...s) => e(...s), n);
}, Ht = Rr("um"), Pr = Symbol.for("v-ndc"), xr = {};
process.env.NODE_ENV !== "production" && (xr.ownKeys = (t) => (S(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function Fr() {
  return as().slots;
}
function Br() {
  return as().attrs;
}
function as() {
  const t = ds();
  return process.env.NODE_ENV !== "production" && !t && S("useContext() called without active instance."), t.setupContext || (t.setupContext = oo(t));
}
let Vr = null;
function jr(t, e) {
  if (!B)
    process.env.NODE_ENV !== "production" && S("provide() can only be used inside setup().");
  else {
    let n = B.provides;
    const s = B.parent && B.parent.provides;
    s === n && (n = B.provides = Object.create(s)), n[t] = e;
  }
}
function us(t, e, n = !1) {
  const s = B || _e;
  if (s || Vr) {
    let r = s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && t in r)
      return r[t];
    if (arguments.length > 1)
      return n && L(e) ? e.call(s && s.proxy) : e;
    process.env.NODE_ENV !== "production" && S(`injection "${String(t)}" not found.`);
  } else process.env.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
const Hr = {}, cs = (t) => Object.getPrototypeOf(t) === Hr, Wr = Zr, Kr = Symbol.for("v-scx"), Ur = () => {
  {
    const t = us(Kr);
    return t || process.env.NODE_ENV !== "production" && S(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function Gr(t, e) {
  return ls(t, null, e);
}
function O(t, e, n) {
  return process.env.NODE_ENV !== "production" && !L(e) && S(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ls(t, e, n);
}
function ls(t, e, n = We) {
  const { immediate: s, deep: r, flush: o, once: i } = n;
  process.env.NODE_ENV !== "production" && !e && (s !== void 0 && S(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && S(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && S(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = ce({}, n);
  process.env.NODE_ENV !== "production" && (u.onWarn = S);
  const c = e && s || !e && o !== "post";
  let f;
  if (Ze) {
    if (o === "sync") {
      const y = Ur();
      f = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!c) {
      const y = () => {
      };
      return y.stop = be, y.resume = be, y.pause = be, y;
    }
  }
  const d = B;
  u.call = (y, M, z) => an(y, d, M, z);
  let l = !1;
  o === "post" ? u.scheduler = (y) => {
    Wr(y, d && d.suspense);
  } : o !== "sync" && (l = !0, u.scheduler = (y, M) => {
    M ? y() : es(y);
  }), u.augmentJob = (y) => {
    e && (y.flags |= 4), l && (y.flags |= 2, d && (y.id = d.uid, y.i = d));
  };
  const g = Dr(t, e, u);
  return Ze && (f ? f.push(g) : c && g()), g;
}
const Yr = (t) => t.__isSuspense;
function Zr(t, e) {
  e && e.pendingBranch ? b(t) ? e.effects.push(...t) : e.effects.push(t) : ns(t);
}
const hs = Symbol.for("v-fgt"), Jr = Symbol.for("v-txt"), qr = Symbol.for("v-cmt");
function Wt(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const Qr = (...t) => ps(
  ...t
), fs = ({ key: t }) => t ?? null, at = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? te(t) || _(t) || L(t) ? { i: _e, r: t, k: e, f: !!n } : t : null);
function Xr(t, e = null, n = null, s = 0, r = null, o = t === hs ? 0 : 1, i = !1, u = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && fs(e),
    ref: e && at(e),
    scopeId: Tr,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: _e
  };
  return u ? (cn(c, n), o & 128 && t.normalize(c)) : n && (c.shapeFlag |= te(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && S("VNode created with invalid key (NaN). VNode type:", c.type), c;
}
const Oe = process.env.NODE_ENV !== "production" ? Qr : ps;
function ps(t, e = null, n = null, s = 0, r = null, o = !1) {
  if ((!t || t === Pr) && (process.env.NODE_ENV !== "production" && !t && S(`Invalid vnode type when creating vnode: ${t}.`), t = qr), Wt(t)) {
    const u = pt(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && cn(u, n), u.patchFlag = -2, u;
  }
  if (Ds(t) && (t = t.__vccOpts), e) {
    e = eo(e);
    let { class: u, style: c } = e;
    u && !te(u) && (e.class = Xt(u)), R(c) && (Ge(c) && !b(c) && (c = ce({}, c)), e.style = Qt(c));
  }
  const i = te(t) ? 1 : Yr(t) ? 128 : Ir(t) ? 64 : R(t) ? 4 : L(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Ge(t) && (t = m(t), S(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), Xr(
    t,
    e,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function eo(t) {
  return t ? Ge(t) || cs(t) ? ce({}, t) : t : null;
}
function pt(t, e, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: u, transition: c } = t, f = e ? no(r || {}, e) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: f,
    key: f && fs(f),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? b(o) ? o.concat(at(e)) : [o, at(e)] : at(e)
    ) : o,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && b(u) ? u.map(gs) : u,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== hs ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: t.ssContent && pt(t.ssContent),
    ssFallback: t.ssFallback && pt(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return c && s && is(
    d,
    c.clone(d)
  ), d;
}
function gs(t) {
  const e = pt(t);
  return b(t.children) && (e.children = t.children.map(gs)), e;
}
function to(t = " ", e = 0) {
  return Oe(Jr, null, t, e);
}
function cn(t, e) {
  let n = 0;
  const { shapeFlag: s } = t;
  if (e == null)
    e = null;
  else if (b(e))
    n = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), cn(t, r()), r._c && (r._d = !0));
      return;
    } else
      n = 32, !e._ && !cs(e) && (e._ctx = _e);
  else L(e) ? (e = { default: e, _ctx: _e }, n = 32) : (e = String(e), s & 64 ? (n = 16, e = [to(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function no(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (const r in s)
      if (r === "class")
        e.class !== s.class && (e.class = Xt([e.class, s.class]));
      else if (r === "style")
        e.style = Qt([e.style, s.style]);
      else if (Ts(r)) {
        const o = e[r], i = s[r];
        i && o !== i && !(b(o) && o.includes(i)) && (e[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (e[r] = s[r]);
  }
  return e;
}
let B = null;
const ds = () => B || _e;
let Kt;
{
  const t = Ct(), e = (n, s) => {
    let r;
    return (r = t[n]) || (r = t[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  Kt = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => B = n
  ), e(
    "__VUE_SSR_SETTERS__",
    (n) => Ze = n
  );
}
const so = (t) => {
  const e = B;
  return Kt(t), t.scope.on(), () => {
    t.scope.off(), Kt(e);
  };
};
let Ze = !1;
const mn = process.env.NODE_ENV !== "production" ? {
  get(t, e) {
    return N(t, "get", ""), t[e];
  },
  set() {
    return S("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return S("setupContext.attrs is readonly."), !1;
  }
} : {
  get(t, e) {
    return N(t, "get", ""), t[e];
  }
};
function ro(t) {
  return new Proxy(t.slots, {
    get(e, n) {
      return N(t, "get", "$slots"), e[n];
    }
  });
}
function oo(t) {
  const e = (n) => {
    if (process.env.NODE_ENV !== "production" && (t.exposed && S("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (b(n) ? s = "array" : _(n) && (s = "ref")), s !== "object" && S(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    t.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(t.attrs, mn));
      },
      get slots() {
        return s || (s = ro(t));
      },
      get emit() {
        return (r, ...o) => t.emit(r, ...o);
      },
      expose: e
    });
  } else
    return {
      attrs: new Proxy(t.attrs, mn),
      slots: t.slots,
      emit: t.emit,
      expose: e
    };
}
const io = /(?:^|[-_])(\w)/g, ao = (t) => t.replace(io, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function ys(t, e = !0) {
  return L(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function ms(t, e, n = !1) {
  let s = ys(e);
  if (!s && e.__file) {
    const r = e.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && t && t.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === e)
          return i;
    };
    s = r(
      t.components || t.parent.type.components
    ) || r(t.appContext.components);
  }
  return s ? ao(s) : n ? "App" : "Anonymous";
}
function Ds(t) {
  return L(t) && "__vccOpts" in t;
}
const p = (t, e) => {
  const n = yr(t, e, Ze);
  if (process.env.NODE_ENV !== "production") {
    const s = ds();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function uo(t, e, n) {
  const s = arguments.length;
  return s === 2 ? R(e) && !b(e) ? Wt(e) ? Oe(t, null, [e]) : Oe(t, e) : Oe(t, null, e) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Wt(n) && (n = [n]), Oe(t, e, n));
}
function co() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(l) {
      if (!R(l))
        return null;
      if (l.__isVue)
        return ["div", t, "VueInstance"];
      if (_(l)) {
        ze();
        const g = l.value;
        return Le(), [
          "div",
          {},
          ["span", t, d(l)],
          "<",
          u(g),
          ">"
        ];
      } else {
        if (Fe(l))
          return [
            "div",
            {},
            ["span", t, P(l) ? "ShallowReactive" : "Reactive"],
            "<",
            u(l),
            `>${ne(l) ? " (readonly)" : ""}`
          ];
        if (ne(l))
          return [
            "div",
            {},
            ["span", t, P(l) ? "ShallowReadonly" : "Readonly"],
            "<",
            u(l),
            ">"
          ];
      }
      return null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...o(l.$)
        ];
    }
  };
  function o(l) {
    const g = [];
    l.type.props && l.props && g.push(i("props", m(l.props))), l.setupState !== We && g.push(i("setup", l.setupState)), l.data !== We && g.push(i("data", m(l.data)));
    const y = c(l, "computed");
    y && g.push(i("computed", y));
    const M = c(l, "inject");
    return M && g.push(i("injected", M)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), g;
  }
  function i(l, g) {
    return g = ce({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((y) => [
          "div",
          {},
          ["span", s, y + ": "],
          u(g[y], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function u(l, g = !0) {
    return typeof l == "number" ? ["span", e, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", s, l] : R(l) ? ["object", { object: g ? m(l) : l }] : ["span", n, String(l)];
  }
  function c(l, g) {
    const y = l.type;
    if (L(y))
      return;
    const M = {};
    for (const z in l.ctx)
      f(y, z, g) && (M[z] = l.ctx[z]);
    return M;
  }
  function f(l, g, y) {
    const M = l[y];
    if (b(M) && M.includes(g) || R(M) && g in M || l.extends && f(l.extends, g, y) || l.mixins && l.mixins.some((z) => f(z, g, y)))
      return !0;
  }
  function d(l) {
    return P(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function lo() {
  co();
}
process.env.NODE_ENV !== "production" && lo();
function $(t) {
  return _(t) ? t.value : t;
}
function Cs(t, e = "=", n = "&") {
  return k(
    t,
    (s, r) => `${r}${e}${encodeURIComponent(String(s).trim())}`
  ).sort().join(n);
}
function v() {
  return typeof window < "u";
}
function Xe(t) {
  return t == null;
}
function U(t, e) {
  if (t) {
    if (e && t === "0")
      return !0;
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
        return Array.isArray(t) ? t.length > 0 : Object.values(t).some((n) => !Xe(n));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(t);
      case "undefined":
        return !1;
      default:
        return !!t;
    }
  }
  return !1;
}
function x(t) {
  return E(t) && !Array.isArray(t);
}
function Ne(t) {
  return typeof t == "string";
}
function Je(t, e) {
  return Math.floor(Math.random() * (e - t + 1) + t);
}
function ae(t) {
  return Array.isArray(t) ? t : [t];
}
function Ms(t) {
  return v() && t === window;
}
function G(t) {
  if (v())
    return Ms(t) ? document.body : Ne(t) ? document.querySelector(t) ?? void 0 : t;
}
function Dn(t) {
  return Ms(t) ? t : G(t);
}
function ho(t) {
  var e;
  return !!((e = G(t)) != null && e.closest("html"));
}
class Ut {
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
  constructor(e, n = ["click"], s, r, o) {
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
      ho(this.elementControl) ? ((n = this.listener) == null || n.call(this.element, e, this.detail), E(this.options) && ((s = this.options) != null && s.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    h(this, "activity", !1);
    h(this, "activityItems", []);
    this.listener = s, this.options = r, this.detail = o, this.element = Dn(e), this.elementControl = G(e), this.type = ae(n);
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
    const n = Dn(e);
    return this.elementControlEdit || (this.elementControl = G(e)), this.element = n, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(e) {
    return this.elementControl = G(e), this.elementControlEdit = !Xe(this.elementControl), this.elementControlEdit || (this.elementControl = G(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(e) {
    return this.type = ae(e), this.reset(), this;
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
      observer: r
    }) => {
      r ? r.disconnect() : s ? e == null || e.removeEventListener(n, s) : e == null || e.removeEventListener(n, this.listenerRecent);
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
const Cn = "ui-loading", Ve = class Ve {
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
    new Ut(window, Cn, e).setElementControl(n).start();
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
h(Ve, "value", 0), h(Ve, "event"), v() && (Ve.event = new Ut(window, Cn));
let Q = Ve;
function Ae(t) {
  return JSON.parse(JSON.stringify(t));
}
function Mn(t) {
  switch (typeof t) {
    case "number":
      return !0;
    case "string":
      return !!t.match(/^[0-9]+$/);
    default:
      return !1;
  }
}
function j(t) {
  if (typeof t == "number")
    return t;
  if (!t)
    return 0;
  let e = t.replace(/[^\d., ]+/ig, "");
  return e.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? e = e.replace(/ /ig, "").replace(/,/ig, ".") : e.match(/,[0-9]{3}[,.]/ig) ? e = e.replace(/,/ig, "") : e.match(/[.][0-9]{3}[,.]/ig) ? e = e.replace(/[.]/ig, "").replace(/,/ig, ".") : e = e.replace(/,/ig, "."), parseFloat(e);
}
function we(t, e) {
  return Xe(t) ? !1 : Array.isArray(e) ? e.includes(t) : Mn(t) && Mn(e) ? j(t) === j(e) : t === e;
}
let vn = "ui-storage";
class et {
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
    if (s in _t)
      return _t[s];
    const r = this.getValue();
    r && (this.value = r.value, this.age = r.age), _t[s] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(e) {
    vn = e;
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
    return this.value = ee(e), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? (n = this.getMethod()) == null || n.removeItem(this.getIndex()) : (s = this.getMethod()) == null || s.setItem(this.getIndex(), JSON.stringify({
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
    return Xe(e) || this.age && this.age + e * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (v())
      return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${vn}${this.name}`;
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
const _t = {}, fo = /* @__PURE__ */ JSON.parse('[{"country":"US","countryAlternative":["EN"],"language":"en","languageAlternative":["us"],"firstDay":"Su","zone":"America/New_York","phoneCode":"1","phoneMask":["+1-***-***-****"]},{"country":"GB","countryAlternative":["UK"],"language":"en","firstDay":"Mo","zone":"Europe/London","phoneCode":"44","phoneMask":["+44-**-****-****"]},{"country":"AF","language":"fa","firstDay":"Sa","zone":"Asia/Kabul","phoneCode":"93","phoneMask":["+93-**-***-****"]},{"country":"AL","language":"sq","firstDay":"Mo","zone":"Europe/Tirane","phoneCode":"355","phoneMask":["+355-***-***-***"]},{"country":"DZ","language":"ar","firstDay":"Sa","zone":"Africa/Algiers","phoneCode":"213","phoneMask":["+213-**-***-****"]},{"country":"AS","language":"en","firstDay":null,"zone":"Pacific/Pago_Pago","phoneCode":"1-684","phoneMask":["+1-684-***-****"]},{"country":"AD","language":"ca","firstDay":"Mo","zone":"Europe/Andorra","phoneCode":"376","phoneMask":["+376-***-***"]},{"country":"AO","language":"pt","firstDay":null,"zone":"Africa/Lagos","phoneCode":"244","phoneMask":["+244-***-***-***"]},{"country":"AI","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-264","phoneMask":["+1-264-***-****"]},{"country":"AQ","language":"en","firstDay":null,"zone":"Antarctica/Troll","phoneCode":"672","phoneMask":["+672-1-**-***"]},{"country":"AG","language":"en","firstDay":null,"zone":"America/Antigua","phoneCode":"1-268","phoneMask":["+1-268-***-****"]},{"country":"AR","language":"es","firstDay":"Su","zone":"America/Argentina/Buenos_Aires","phoneCode":"54","phoneMask":["+54-***-***-****"]},{"country":"AM","language":"hy","firstDay":"Mo","zone":"Asia/Yerevan","phoneCode":"374","phoneMask":["+374-**-***-***"]},{"country":"AW","language":"nl","firstDay":null,"zone":"America/Curacao","phoneCode":"297","phoneMask":["+297-***-****"]},{"country":"AU","language":"en","firstDay":"Mo","zone":"Australia/Sydney","phoneCode":"61","phoneMask":["+61-*-****-****"]},{"country":"AT","language":"de","firstDay":"Mo","zone":"Europe/Vienna","phoneCode":"43","phoneMask":["+43-***-***-****","+43-***-***-*****"]},{"country":"AZ","language":"az","firstDay":"Mo","zone":"Asia/Baku","phoneCode":"994","phoneMask":"+994-**-***-**-**"},{"country":"BS","language":"en","firstDay":null,"zone":"America/Nassau","phoneCode":"1-242","phoneMask":"+1-242-***-****"},{"country":"BH","language":"ar","firstDay":"Sa","zone":"Asia/Bahrain","phoneCode":"973","phoneMask":"+973-****-****"},{"country":"BD","language":"bn","firstDay":null,"zone":"Asia/Dhaka","phoneCode":"880","phoneMask":"+880-**-***-***"},{"country":"BB","language":"en","firstDay":null,"zone":"America/Barbados","phoneCode":"1-246","phoneMask":"+1-246-***-****"},{"country":"BY","language":"be","firstDay":"Mo","zone":"Europe/Minsk","phoneCode":"375","phoneMask":"+375-**-***-**-**"},{"country":"BE","language":"nl","firstDay":"Mo","zone":"Europe/Brussels","phoneCode":"32","phoneMask":"+32-***-***-***"},{"country":"BZ","language":"en","firstDay":"Su","zone":"America/Belize","phoneCode":"501","phoneMask":"+501-***-****"},{"country":"BJ","language":"fr","firstDay":null,"zone":"Africa/Lagos","phoneCode":"229","phoneMask":"+229-**-**-****"},{"country":"BM","language":"en","firstDay":null,"zone":"Atlantic/Bermuda","phoneCode":"1-441","phoneMask":"+1-441-***-****"},{"country":"BT","language":"dz","firstDay":null,"zone":"Asia/Thimphu","phoneCode":"975","phoneMask":["+975-*-***-***","+975-17-***-***"]},{"country":"BO","language":"es","firstDay":"Su","zone":"America/La_Paz","phoneCode":"591","phoneMask":"+591-*-***-****"},{"country":"BA","language":"bs","firstDay":null,"zone":"Europe/Belgrade","phoneCode":"387","phoneMask":["+387-**-****","+387-**-*****"]},{"country":"BW","language":"en","firstDay":null,"zone":"Africa/Maputo","phoneCode":"267","phoneMask":"+267-**-***-***"},{"country":"BR","language":"pt","firstDay":"Su","zone":"America/Sao_Paulo","phoneCode":"55","phoneMask":["+55-**-****-****","+55-**-*****-****"]},{"country":"IO","language":"en","firstDay":null,"zone":"Indian/Chagos","phoneCode":"246","phoneMask":"+246-***-****"},{"country":"VG","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-284","phoneMask":"+1-284-***-****"},{"country":"BN","language":"ms","firstDay":"Mo","zone":"Asia/Brunei","phoneCode":"673","phoneMask":"+673-***-****"},{"country":"BG","language":"bg","firstDay":"Mo","zone":"Europe/Sofia","phoneCode":"359","phoneMask":"+359-***-***-***"},{"country":"BF","language":"fr","firstDay":null,"zone":"Africa/Abidjan","phoneCode":"226","phoneMask":"+226-**-**-****"},{"country":"BI","language":"fr","firstDay":null,"zone":"Africa/Maputo","phoneCode":"257","phoneMask":"+257-**-**-****"},{"country":"KH","language":"km","firstDay":null,"zone":"Asia/Phnom_Penh","phoneCode":"855","phoneMask":"+855-**-***-***"},{"country":"CM","phoneCode":"237","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":"+237-****-****"},{"country":"CA","phoneCode":"1","zone":"America/Toronto","language":"en","firstDay":"Su","phoneMask":"+1-***-***-****"},{"country":"CV","phoneCode":"238","zone":"Atlantic/Cape_Verde","language":"pt","firstDay":null,"phoneMask":"+238-***-**-**"},{"country":"KY","phoneCode":"1-345","zone":"America/Cayman","language":"en","firstDay":null,"phoneMask":"+1-345-***-****"},{"country":"CF","phoneCode":"236","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+236-**-**-****"},{"country":"TD","phoneCode":"235","zone":"Africa/Ndjamena","language":"fr","firstDay":null,"phoneMask":"+235-**-**-**-**"},{"country":"CL","phoneCode":"56","zone":"America/Santiago","language":"es","firstDay":"Su","phoneMask":"+56-*-****-****"},{"country":"CN","phoneCode":"86","zone":"Asia/Shanghai","language":"zh","firstDay":"Su","phoneMask":["+86-***-****-***","+86-***-****-****","+86-**-*****-*****"]},{"country":"CX","phoneCode":"61","zone":"Indian/Christmas","language":"en","firstDay":null},{"country":"CC","phoneCode":"61","zone":"Indian/Cocos","language":"ms","firstDay":null},{"country":"CO","phoneCode":"57","zone":"America/Bogota","language":"es","firstDay":"Su","phoneMask":"+57-***-***-****"},{"country":"KM","phoneCode":"269","zone":"Indian/Comoro","language":"ar","firstDay":null,"phoneMask":"+269-**-*****"},{"country":"CK","phoneCode":"682","zone":"Pacific/Rarotonga","language":"en","firstDay":null,"phoneMask":"+682-**-***"},{"country":"CR","phoneCode":"506","zone":"America/Costa_Rica","language":"es","firstDay":"Su","phoneMask":"+506-****-****"},{"country":"HR","phoneCode":"385","zone":"Europe/Belgrade","language":"hr","firstDay":"Mo","phoneMask":"+385-**-***-***"},{"country":"CU","phoneCode":"53","zone":"America/Havana","language":"es","firstDay":null,"phoneMask":"+53-*-***-****"},{"country":"CW","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+599-***-****"},{"country":"CY","phoneCode":"357","zone":"Asia/Nicosia","language":"el","firstDay":null,"phoneMask":"+357-**-***-***"},{"country":"CZ","phoneCode":"420","zone":"Europe/Prague","language":"cs","languageAlternative":["cz"],"firstDay":"Mo","phoneMask":"+420-***-***-***"},{"country":"CD","phoneCode":"243","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+243-***-***-***"},{"country":"DK","phoneCode":"45","zone":"Europe/Copenhagen","language":"da","firstDay":"Mo","phoneMask":"+45-**-**-**-**"},{"country":"DJ","phoneCode":"253","zone":"Africa/Djibouti","language":"fr","firstDay":null,"phoneMask":"+253-**-**-**-**"},{"country":"DM","phoneCode":"1-767","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-767-***-****"},{"country":"DO","phoneCode":"1-809","zone":"North America","language":"America/Santo_Domingo","firstDay":"Su","phoneMask":["+1-809-***-****","+1-829-***-****","+1-849-***-****"]},{"country":"TL","phoneCode":"670","zone":"Asia/Dili","language":"tet","firstDay":null,"phoneMask":["+670-***-****","+670-77-*-*****","+670-78-*-*****"]},{"country":"EC","phoneCode":"593","zone":"America/Guayaquil","language":"es","firstDay":"Su","phoneMask":["+593-*-***-****","+593-**-***-****"]},{"country":"EG","phoneCode":"20","zone":"Africa/Cairo","language":"ar","firstDay":"Sa","phoneMask":"+20-***-***-****"},{"country":"SV","phoneCode":"503","zone":"America/El_Salvador","language":"es","firstDay":"Su","phoneMask":"+503-**-**-****"},{"country":"GQ","phoneCode":"240","zone":"Africa/Lagos","language":"es","firstDay":null,"phoneMask":"+240-**-***-****"},{"country":"ER","phoneCode":"291","zone":"Africa/Asmara","language":"aa","firstDay":null,"phoneMask":"+291-*-***-***"},{"country":"EE","phoneCode":"372","zone":"Europe/Tallinn","language":"et","firstDay":"Mo","phoneMask":["+372-***-****","+372-****-****"]},{"country":"ET","phoneCode":"251","zone":"Africa/Addis_Ababa","language":"am","firstDay":null,"phoneMask":"+251-**-***-****"},{"country":"FK","phoneCode":"500","zone":"Atlantic/Stanley","language":"en","firstDay":null,"phoneMask":"+500-*****"},{"country":"FO","phoneCode":"298","zone":"Atlantic/Faroe","language":"fo","firstDay":null,"phoneMask":"+298-***-***"},{"country":"FJ","phoneCode":"679","zone":"Pacific/Fiji","language":"en","firstDay":null,"phoneMask":"+679-**-*****"},{"country":"FI","phoneCode":"358","zone":"Europe/Helsinki","language":"fi","firstDay":"Mo","phoneMask":["+358-***-***-**-*","+358-***-***-**-**"]},{"country":"FR","phoneCode":"33","zone":"Europe/Paris","language":"fr","firstDay":"Mo","phoneMask":["+33-***-***-***","+262-*****-****","+508-**-****","+590-***-***-***"]},{"country":"PF","phoneCode":"689","zone":"Pacific/Tahiti","language":"fr","firstDay":null,"phoneMask":"+689-**-**-**"},{"country":"GA","phoneCode":"241","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+241-*-**-**-**"},{"country":"GM","phoneCode":"220","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+220-***-**-**"},{"country":"GE","phoneCode":"995","zone":"Asia/Tbilisi","language":"ka","firstDay":"Mo","phoneMask":"+995-***-***-***"},{"country":"DE","phoneCode":"49","zone":"Europe/Berlin","language":"de","firstDay":"Mo","phoneMask":["+49-***-***","+49-***-***-****","+49-****-***-****"]},{"country":"GH","phoneCode":"233","zone":"Africa/Accra","language":"en","firstDay":null,"phoneMask":"+233-***-***-***"},{"country":"GI","phoneCode":"350","zone":"Europe/Gibraltar","language":"en","firstDay":null,"phoneMask":"+350-***-*****"},{"country":"GR","phoneCode":"30","zone":"Europe/Athens","language":"el","firstDay":"Mo","phoneMask":"+30-***-***-****"},{"country":"GL","phoneCode":"299","zone":"America/Godthab","language":"kl","firstDay":null,"phoneMask":"+299-**-**-**"},{"country":"GD","phoneCode":"1-473","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-473-***-****"},{"country":"GU","phoneCode":"1-671","zone":"Pacific/Guam","language":"en","firstDay":null,"phoneMask":"+1-671-***-****"},{"country":"GT","phoneCode":"502","zone":"America/Guatemala","language":"es","firstDay":"Su","phoneMask":"+502-*-***-****"},{"country":"GG","phoneCode":"44-1481","zone":"Europe/London","language":"en","firstDay":null},{"country":"GN","phoneCode":"224","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+224-**-***-***"},{"country":"GW","phoneCode":"245","zone":"Africa/Bissau","language":"pt","firstDay":null,"phoneMask":"+245-*-******"},{"country":"GY","phoneCode":"592","zone":"America/Guyana","language":"en","firstDay":null,"phoneMask":"+592-***-****"},{"country":"HT","phoneCode":"509","zone":"America/Port-au-Prince","language":"ht","firstDay":null,"phoneMask":"+509-**-**-****"},{"country":"HN","phoneCode":"504","zone":"America/Tegucigalpa","language":"es","firstDay":"Su","phoneMask":"+504-****-****"},{"country":"HK","phoneCode":"852","zone":"Asia/Hong_Kong","language":"zh","firstDay":"Su","phoneMask":"+852-****-****"},{"country":"HU","phoneCode":"36","zone":"Europe/Budapest","language":"hu","firstDay":"Mo","phoneMask":"+36-***-***-***","nameFormat":"lf"},{"country":"IS","phoneCode":"354","zone":"Atlantic/Reykjavik","language":"is","firstDay":"Mo","phoneMask":"+354-***-****"},{"country":"IN","phoneCode":"91","zone":"Asia/Kolkata","language":"en","firstDay":"Mo","phoneMask":"+91-****-***-***"},{"country":"ID","phoneCode":"62","zone":"Asia/Jakarta","language":"id","firstDay":"Mo","phoneMask":["+62-**-***-**","+62-**-***-***","+62-**-***-****","+62-8-**-***-***","+62-8-**-***-****","+62-8-**-***-**-***"]},{"country":"IR","phoneCode":"98","zone":"Asia/Tehran","language":"fa","firstDay":"Sa","phoneMask":"+98-***-***-****"},{"country":"IQ","phoneCode":"964","zone":"Asia/Baghdad","language":"ar","firstDay":"Sa","phoneMask":"+964-***-***-****"},{"country":"IE","firstDay":"Mo","language":"en","phoneCode":"353","phoneMask":"+353-***-***-***","zone":"Europe/Dublin"},{"country":"IM","firstDay":null,"language":"Pound","phoneCode":"44-1624","zone":"Isle of Man"},{"country":"IL","firstDay":"Su","language":"he","languageAlternative":["il"],"phoneCode":"972","phoneMask":["+972-*-***-****","+972-5-*-***-****"],"zone":"Asia/Jerusalem"},{"country":"IT","firstDay":"Mo","language":"it","phoneCode":"39","phoneMask":"+39-***-****-***","zone":"Europe/Rome"},{"country":"CI","phoneCode":"225","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+225-**-***-***"},{"country":"JM","phoneCode":"1-876","zone":"America/Jamaica","language":"en","firstDay":"Su","phoneMask":"+1-876-***-****"},{"country":"JP","phoneCode":"81","zone":"Asia/Tokyo","language":"ja","firstDay":"Su","phoneMask":["+81-***-***-***","+81-**-****-****"],"nameFormat":"lf"},{"country":"JE","phoneCode":"44-1534","zone":"Europe/London","language":"en","firstDay":null},{"country":"JO","phoneCode":"962","zone":"Asia/Amman","language":"ar","firstDay":"Sa","phoneMask":"+962-*-****-****"},{"country":"KZ","phoneCode":"7","zone":"Asia/Almaty","language":"kk","firstDay":"Mo","phoneMask":["+7-6-**-***-**-**","+7-7-**-***-**-**"],"nameFormat":"lf"},{"country":"KE","phoneCode":"254","zone":"Africa/Nairobi","language":"en","firstDay":"Su","phoneMask":"+254-***-******"},{"country":"KI","phoneCode":"686","zone":"Pacific/Tarawa","language":"en","firstDay":null,"phoneMask":"+686-**-***"},{"country":"XK","phoneCode":"383","zone":"Europe/Belgrade","language":"sq","firstDay":"Mo"},{"country":"KW","phoneCode":"965","zone":"Asia/Kuwait","language":"ar","firstDay":"Sa","phoneMask":"+965-****-****"},{"country":"KG","phoneCode":"996","zone":"Asia/Bishkek","language":"ky","firstDay":"Mo","phoneMask":"+996-***-***-***"},{"country":"LA","phoneCode":"856","zone":"Asia/Vientiane","language":"lo","firstDay":null,"phoneMask":["+856-**-***-***","+856-20-**-***-***"]},{"country":"LV","phoneCode":"371","zone":"Europe/Riga","language":"lv","firstDay":"Mo","phoneMask":"+371-**-***-***"},{"country":"LB","phoneCode":"961","zone":"Asia/Beirut","language":"ar","firstDay":"Mo","phoneMask":["+961-*-***-***","+961-**-***-***"]},{"country":"LS","phoneCode":"266","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+266-*-***-****"},{"country":"LR","phoneCode":"231","zone":"Africa/Monrovia","language":"en","firstDay":null,"phoneMask":"+231-**-***-***"},{"country":"LY","phoneCode":"218","zone":"Africa/Tripoli","language":"ar","firstDay":"Sa","phoneMask":["+218-**-***-***","+218-21-***-****"]},{"country":"LI","phoneCode":"423","zone":"Europe/Zurich","language":"de","firstDay":null,"phoneMask":"+423-***-***-****"},{"country":"LT","phoneCode":"370","zone":"Europe/Vilnius","language":"lt","firstDay":"Mo","phoneMask":"+370-***-**-***"},{"country":"LU","phoneCode":"352","zone":"Europe/Luxembourg","language":"lb","firstDay":"Mo","phoneMask":"+352-***-***-***"},{"country":"MO","phoneCode":"853","zone":"Asia/Macau","language":"zh","firstDay":null,"phoneMask":"+853-****-****"},{"country":"MK","phoneCode":"389","zone":"Europe/Belgrade","language":"mk","firstDay":"Mo","phoneMask":"+389-**-***-***"},{"country":"MG","phoneCode":"261","zone":"Indian/Antananarivo","language":"fr","firstDay":null,"phoneMask":"+261-**-**-*****"},{"country":"MW","phoneCode":"265","zone":"Africa/Maputo","language":"ny","firstDay":null,"phoneMask":["+265-*-****-****","+265-1-***-***"]},{"country":"MY","phoneCode":"60","zone":"Asia/Kuala_Lumpur","language":"ms","firstDay":"Mo","phoneMask":["+60-*-***-***","+60-**-***-***","+60-**-***-****","+60-***-***-***"]},{"country":"MV","phoneCode":"960","zone":"Indian/Maldives","language":"dv","firstDay":null,"phoneMask":"+960-***-****"},{"country":"ML","phoneCode":"223","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+223-**-**-****"},{"country":"MT","phoneCode":"356","zone":"Europe/Malta","language":"mt","firstDay":null,"phoneMask":"+356-****-****"},{"country":"MH","phoneCode":"692","zone":"Pacific/Majuro","language":"mh","firstDay":null,"phoneMask":"+692-***-****"},{"country":"MR","phoneCode":"222","zone":"Africa/Abidjan","language":"ar","firstDay":null,"phoneMask":"+222-**-**-****"},{"country":"MU","phoneCode":"230","zone":"Indian/Mauritius","language":"en","firstDay":null,"phoneMask":"+230-***-****"},{"country":"YT","phoneCode":"262","zone":"Indian/Mayotte","language":"fr","firstDay":null},{"country":"MX","phoneCode":"52","zone":"America/Mexico_City","language":"es","firstDay":"Su","phoneMask":["+52-**-**-****","+52-***-***-****"]},{"country":"FM","phoneCode":"691","zone":"Pacific/Pohnpei","language":"en","firstDay":null,"phoneMask":"+691-***-****"},{"country":"MD","phoneCode":"373","zone":"Europe/Chisinau","language":"ro","firstDay":null,"phoneMask":"+373-****-****"},{"country":"MC","phoneCode":"377","zone":"Europe/Monaco","language":"fr","firstDay":"Mo","phoneMask":["+377-**-***-***","+377-***-***-***"]},{"country":"MN","phoneCode":"976","zone":"Asia/Ulaanbaatar","language":"mn","firstDay":"Mo","phoneMask":"+976-**-**-****"},{"country":"ME","phoneCode":"382","zone":"Europe/Belgrade","language":"sr","firstDay":null,"phoneMask":"+382-**-***-***"},{"country":"MS","phoneCode":"1-664","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-664-***-****"},{"country":"MA","phoneCode":"212","zone":"Africa/Casablanca","language":"ar","firstDay":"Mo","phoneMask":"+212-**-****-***"},{"country":"MZ","phoneCode":"258","zone":"Africa/Maputo","language":"pt","firstDay":null,"phoneMask":"+258-**-***-***"},{"country":"MM","phoneCode":"95","zone":"Asia/Rangoon","language":"my","firstDay":null,"phoneMask":["+95-***-***","+95-*-***-***","+95-**-***-***"]},{"country":"NA","phoneCode":"264","zone":"Africa/Windhoek","language":"en","firstDay":null,"phoneMask":"+264-**-***-****"},{"country":"NR","phoneCode":"674","zone":"Pacific/Nauru","language":"na","firstDay":null,"phoneMask":"+674-***-****"},{"country":"NP","phoneCode":"977","zone":"Asia/Kathmandu","language":"ne","firstDay":null,"phoneMask":"+977-**-***-***"},{"country":"NL","phoneCode":"31","zone":"Europe/Amsterdam","language":"nl","firstDay":"Mo","phoneMask":"+31-**-***-****"},{"country":"AN","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":["+599-***-****","+599-9-***-****"]},{"country":"NC","phoneCode":"687","zone":"Pacific/Noumea","language":"fr","firstDay":null,"phoneMask":"+687-**-****"},{"country":"NZ","phoneCode":"64","zone":"Pacific/Auckland","language":"en","firstDay":"Mo","phoneMask":["+64-**-***-***","+64-***-***-***","+64-***-***-****"]},{"country":"NI","phoneCode":"505","zone":"America/Managua","language":"es","firstDay":"Su","phoneMask":"+505-****-****"},{"country":"NE","phoneCode":"227","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+227-**-**-****"},{"country":"NG","phoneCode":"234","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":["+234-**-***-**","+234-**-***-***","+234-***-***-****"]},{"country":"NU","phoneCode":"683","zone":"Pacific/Niue","language":"niu","firstDay":null,"phoneMask":"+683-****"},{"country":"KP","phoneCode":"850","zone":"Asia/Pyongyang","language":"ko","firstDay":null,"phoneMask":["+850-***-***","+850-**-***-***","+850-****-****","+850-***-****-***","+850-****-*************","+850-191-***-****"]},{"country":"MP","phoneCode":"1-670","zone":"Pacific/Saipan","language":"fil","firstDay":null,"phoneMask":"+1-670-***-****"},{"country":"NO","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":"Mo","phoneMask":"+47-***-**-***"},{"country":"OM","phoneCode":"968","zone":"Asia/Muscat","language":"ar","firstDay":"Sa","phoneMask":"+968-**-***-***"},{"country":"PK","phoneCode":"92","zone":"Asia/Karachi","language":"ur","firstDay":"Mo","phoneMask":"+92-***-***-****"},{"country":"PW","phoneCode":"680","zone":"Pacific/Palau","language":"pau","firstDay":null,"phoneMask":"+680-***-****"},{"country":"PS","phoneCode":"970","zone":"Asia/Hebron","language":"ar","firstDay":null,"phoneMask":"+970-**-***-****"},{"country":"PA","phoneCode":"507","zone":"America/Panama","language":"es","firstDay":"Su","phoneMask":"+507-***-****"},{"country":"PG","phoneCode":"675","zone":"Pacific/Port_Moresby","language":"en","firstDay":null,"phoneMask":"+675-***-**-***"},{"country":"PY","phoneCode":"595","zone":"America/Asuncion","language":"es","firstDay":"Mo","phoneMask":"+595-***-***-***"},{"country":"PE","phoneCode":"51","zone":"America/Lima","language":"es","firstDay":"Su","phoneMask":"+51-***-***-***"},{"country":"PH","phoneCode":"63","zone":"Asia/Manila","language":"tl","firstDay":"Su","phoneMask":"+63-***-***-****"},{"country":"PN","phoneCode":"64","zone":"Pacific/Pitcairn","language":"en","firstDay":null},{"country":"PL","phoneCode":"48","zone":"Europe/Warsaw","language":"pl","firstDay":"Mo","phoneMask":"+48-***-***-***"},{"country":"PT","phoneCode":"351","zone":"Europe/Lisbon","language":"pt","firstDay":"Mo","phoneMask":"+351-**-***-****"},{"country":"PR","phoneCode":"1-787","zone":"San Juan","language":"Dollar","firstDay":"Su"},{"country":"QA","phoneCode":"974","zone":"Asia/Qatar","language":"ar","firstDay":"Sa","phoneMask":"+974-****-****"},{"country":"CG","phoneCode":"242","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+242-**-***-****"},{"country":"RE","phoneCode":"262","zone":"Indian/Reunion","language":"fr","firstDay":null,"phoneMask":"+262-*****-****"},{"country":"RO","phoneCode":"40","zone":"Europe/Bucharest","language":"ro","firstDay":"Mo","phoneMask":"+40-**-***-****"},{"country":"RU","phoneCode":"7","phoneWithin":"8","zone":"Europe/Moscow","language":"ru","firstDay":"Mo","phoneMask":"+7-***-***-**-**","nameFormat":"lsf"},{"country":"RW","phoneCode":"250","zone":"Africa/Maputo","language":"rw","firstDay":null,"phoneMask":"+250-***-***-***"},{"country":"BL","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"SH","phoneCode":"290","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+290-****"},{"country":"KN","phoneCode":"1-869","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-869-***-****"},{"country":"LC","phoneCode":"1-758","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-758-***-****"},{"country":"MF","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"PM","phoneCode":"508","zone":"America/Miquelon","language":"fr","firstDay":null},{"country":"VC","phoneCode":"1-784","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-784-***-****"},{"country":"WS","phoneCode":"685","zone":"Pacific/Apia","language":"sm","firstDay":null,"phoneMask":"+685-**-****"},{"country":"SM","phoneCode":"378","zone":"Europe/Rome","language":"it","firstDay":null,"phoneMask":"+378-****-******"},{"country":"ST","phoneCode":"239","zone":"Africa/Abidjan","language":"pt","firstDay":null,"phoneMask":"+239-**-*****"},{"country":"SA","phoneCode":"966","zone":"Asia/Riyadh","language":"ar","firstDay":"Sa","phoneMask":["+966-*-***-****","+966-5-****-****"]},{"country":"SN","phoneCode":"221","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+221-**-***-****"},{"country":"RS","phoneCode":"381","zone":"Europe/Belgrade","language":"sr","firstDay":"Mo","phoneMask":"+381-**-***-****"},{"country":"SC","phoneCode":"248","zone":"Indian/Mahe","language":"en","firstDay":null,"phoneMask":"+248-*-***-***"},{"country":"SL","phoneCode":"232","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+232-**-******"},{"country":"SG","phoneCode":"65","zone":"Asia/Singapore","language":"cmn","firstDay":"Mo","phoneMask":"+65-****-****"},{"country":"SX","phoneCode":"1-721","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+1-721-***-****"},{"country":"SK","phoneCode":"421","zone":"Europe/Prague","language":"sk","firstDay":"Mo","phoneMask":"+421-***-***-***"},{"country":"SI","phoneCode":"386","zone":"Europe/Belgrade","language":"sl","firstDay":null,"phoneMask":"+386-**-***-***"},{"country":"SB","phoneCode":"677","zone":"Pacific/Guadalcanal","language":"en","firstDay":null,"phoneMask":["+677-*****","+677-***-****"]},{"country":"SO","phoneCode":"252","zone":"Africa/Mogadishu","language":"so","firstDay":null,"phoneMask":["+252-*-***-***","+252-**-***-***"]},{"country":"ZA","phoneCode":"27","zone":"Africa/Johannesburg","language":"zu","firstDay":"Su","phoneMask":"+27-**-***-****"},{"country":"KR","phoneCode":"82","zone":"Asia/Seoul","language":"ko","firstDay":"Su","phoneMask":["+82-**-***-****","+82-**-***-****-**"],"nameFormat":"lf"},{"country":"SS","phoneCode":"211","zone":"Africa/Khartoum","language":"en","firstDay":null,"phoneMask":"+211-**-***-****"},{"country":"ES","phoneCode":"34","zone":"Europe/Madrid","language":"es","firstDay":"Mo","phoneMask":"+34-***-***-***"},{"country":"LK","phoneCode":"94","zone":"Asia/Colombo","language":"si","firstDay":null,"phoneMask":"+94-**-***-****"},{"country":"SD","phoneCode":"249","zone":"Africa/Khartoum","language":"ar","firstDay":null,"phoneMask":"+249-**-***-****"},{"country":"SR","phoneCode":"597","zone":"America/Paramaribo","language":"nl","firstDay":null,"phoneMask":["+597-***-***","+597-***-****"]},{"country":"SJ","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":null},{"country":"SZ","phoneCode":"268","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+268-**-**-****"},{"country":"SE","phoneCode":"46","zone":"Europe/Stockholm","language":"sv","firstDay":"Mo","phoneMask":"+46-**-***-****"},{"country":"CH","phoneCode":"41","zone":"Europe/Zurich","language":"de","firstDay":"Mo","phoneMask":"+41-**-***-****"},{"country":"SY","phoneCode":"963","zone":"Asia/Damascus","language":"ar","firstDay":"Sa","phoneMask":"+963-**-****-***"},{"country":"TW","phoneCode":"886","zone":"Asia/Taipei","language":"zh","firstDay":"Su","phoneMask":["+886-****-****","+886-*-****-****"]},{"country":"TJ","phoneCode":"992","zone":"Asia/Dushanbe","language":"tg","firstDay":null,"phoneMask":"+992-**-***-****"},{"country":"TZ","phoneCode":"255","zone":"Africa/Dar_es_Salaam","language":"sw","firstDay":null,"phoneMask":"+255-**-***-****"},{"country":"TH","phoneCode":"66","zone":"Asia/Bangkok","language":"th","firstDay":"Mo","phoneMask":"+66-**-***-****"},{"country":"TG","phoneCode":"228","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+228-**-***-***"},{"country":"TK","phoneCode":"690","zone":"Pacific/Fakaofo","language":"tkl","firstDay":null,"phoneMask":"+690-****"},{"country":"TO","phoneCode":"676","zone":"Pacific/Tongatapu","language":"to","firstDay":null,"phoneMask":"+676-*****"},{"country":"TT","phoneCode":"1-868","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-868-***-****"},{"country":"TN","phoneCode":"216","zone":"Africa/Tunis","language":"ar","firstDay":"Mo","phoneMask":"+216-**-***-***"},{"country":"TR","phoneCode":"90","zone":"Europe/Istanbul","language":"tr","firstDay":"Mo","phoneMask":"+90-***-***-****"},{"country":"TM","phoneCode":"993","zone":"Asia/Ashgabat","language":"tk","firstDay":null,"phoneMask":"+993-*-***-****"},{"country":"TC","phoneCode":"1-649","zone":"America/Grand_Turk","language":"en","firstDay":null,"phoneMask":"+1-649-***-****"},{"country":"TV","phoneCode":"688","zone":"Pacific/Funafuti","language":"tvl","firstDay":null,"phoneMask":["+688-2-****","+688-90-****"]},{"country":"VI","phoneCode":"1-340","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-340-***-****"},{"country":"UG","phoneCode":"256","zone":"Africa/Kampala","language":"en","firstDay":null,"phoneMask":"+256-***-***-***"},{"country":"UA","phoneCode":"380","zone":"Europe/Kiev","language":"uk","languageAlternative":["ua"],"firstDay":"Mo","phoneMask":"+380-**-***-**-**"},{"country":"AE","phoneCode":"971","zone":"Asia/Dubai","language":"ar","firstDay":"Sa","phoneMask":["+971-*-***-****","+971-5-*-***-****"]},{"country":"UY","phoneCode":"598","zone":"America/Montevideo","language":"es","firstDay":"Mo","phoneMask":"+598-*-***-**-**"},{"country":"UZ","phoneCode":"998","zone":"Asia/Tashkent","language":"uz","firstDay":"Mo","phoneMask":"+998-**-***-****"},{"country":"VU","phoneCode":"678","zone":"Pacific/Efate","language":"bi","firstDay":null,"phoneMask":["+678-*****","+678-**-*****"]},{"country":"VA","phoneCode":"379","zone":"Europe/Rome","language":"la","firstDay":null,"phoneMask":"+39-6-698-*****"},{"country":"VE","phoneCode":"58","zone":"America/Caracas","language":"es","firstDay":"Su","phoneMask":"+58-***-***-****"},{"country":"VN","phoneCode":"84","zone":"Asia/Ho_Chi_Minh","language":"vi","firstDay":"Mo","phoneMask":["+84-**-****-***","+84-***-****-***"],"nameFormat":"fsl"},{"country":"WF","phoneCode":"681","zone":"Pacific/Wallis","language":"wls","firstDay":null,"phoneMask":"+681-**-****"},{"country":"EH","phoneCode":"212","zone":"Africa/El_Aaiun","language":"ar","firstDay":null},{"country":"YE","phoneCode":"967","zone":"Asia/Aden","language":"ar","firstDay":"Sa","phoneMask":["+967-*-***-***","+967-**-***-***","+967-***-***-***"]},{"country":"ZM","phoneCode":"260","zone":"Africa/Maputo","language":"en","firstDay":null,"phoneMask":"+260-**-***-****"},{"country":"ZW","phoneCode":"263","zone":"Africa/Maputo","language":"en","firstDay":"Su","phoneMask":"+263-*-******"},{"country":"GF","phoneCode":"594","zone":"America/Cayenne","language":"fr","firstDay":"Mo","phoneMask":"+594-*****-****"},{"country":"MQ","phoneCode":"596","zone":"America/Martinique","language":"fr","firstDay":"Mo","phoneMask":"+596-***-**-**-**"},{"country":"NF","phoneCode":"672-3","zone":"Pacific/Norfolk","language":"en","firstDay":"Mo","phoneMask":"+672-3-**-***"},{"country":"IC","phoneCode":"3428","zone":"Europe/Berlin","language":"es","firstDay":"Mo"}]'), po = "geo-code", T = class T {
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
    return fo;
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
    return e && (e.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (n = this.getByCodeFull(e)), !n && e.match(/[A-Z]{2}/) && (n = this.getByCountry(this.toCountry(e))), !n && e.match(/[a-z]{2}/) && (n = this.getByLanguage(this.toLanguage(e)))), this.toFull(Ae(n ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(e) {
    return this.getList().find(
      (n) => we(e, [
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
      return n.country === e || ((s = n == null ? void 0 : n.countryAlternative) == null ? void 0 : s.find((r) => r === e));
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
      return n.language === e || ((s = n == null ? void 0 : n.languageAlternative) == null ? void 0 : s.find((r) => r === e));
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
    return v() && (this.storage.get() || ((e = document.querySelector("html")) == null ? void 0 : e.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
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
h(T, "storage", new et(po)), h(T, "location"), h(T, "item"), h(T, "language"), h(T, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), T.location = T.findLocation(), T.language = T.findLanguage(T.location), T.item = T.getByCode(T.location);
let w = T;
var go = /* @__PURE__ */ ((t) => (t.get = "GET", t.post = "POST", t.put = "PUT", t.delete = "DELETE", t))(go || {});
const kn = "d-response-loading", $n = [], A = class A {
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
      return U(n) && (s["Content-Type"] = n), s;
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
    return `${n ? this.url : ""}${e}`.replace("{locale}", w.getLocation()).replace("{country}", w.getCountry()).replace("{language}", w.getLanguage());
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
    if (n !== "GET" && U(e))
      return Ne(e) ? e : JSON.stringify(e);
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
      const r = n.match(/\?/) ? "&" : "?", o = typeof e == "object" ? Cs(e) : e;
      if (U(o))
        return `${r}${o}`;
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
      const n = $(this.requestDefault);
      if (e instanceof FormData)
        k(n, (s, r) => {
          e.has(r) || e.set(r, s);
        });
      else if (x(e))
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
    return x(e) && (this.headers = e), A;
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
    return this.url = e, A;
  }
  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(e) {
    return this.preparationItem = e, A;
  }
  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(e) {
    return this.preparationEndItem = e, A;
  }
  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters/ строка запроса или список параметров
   */
  static async request(e) {
    return Ne(e) ? await this.fetch({
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
    return this.response.push(...ae(e)), A;
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
  static getResponse(e = "", n, s, r) {
    return this.response.find((o) => {
      if (ee($(o == null ? void 0 : o.disable)) !== !0 && (o.path instanceof RegExp && e.match(o.path) || e === o.path) && n === o.method && ($n.indexOf(o) === -1 || r)) {
        const i = this.addRequestDefault(o == null ? void 0 : o.request);
        let u = !1;
        if (s === i || i === "*any" ? u = !0 : U(s) && U(i) && x(s) && x(i) && !(s instanceof FormData) && !(i instanceof FormData) && Object.values(s).length === Object.values(i).length && (u = Object.entries(i).reduce(
          (c, [f, d]) => c && (d === (s == null ? void 0 : s[f]) || d === "*any"),
          !0
        )), u)
          return r && console.warn(`Response type: ${o.path}`), $n.push(o), !0;
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
      queryReturn: r = void 0,
      globalPreparation: o = !0,
      globalEnd: i = !0
    } = e, u = await this.makeEmulator(e);
    if (u)
      return u;
    let c = {};
    Q.show();
    try {
      this.preparationItem && o && await this.makePreparation();
      const f = await this.makeQuery(e), d = i && this.preparationEndItem ? await this.makePreparationEnd(f) : {};
      if (this.status = f.status, this.statusText = f.statusText, d != null && d.reset)
        return Q.hide(), await this.fetch(e);
      r ? c = await r(f) : "data" in d ? c = d.data : (f.headers.get("Content-Type") ?? "").match("application/json") ? c = await f.json() : c = { data: await f.text() };
    } catch (f) {
      s && console.error("Api: ", f), this.error = f;
    }
    return Q.hide(), this.makeData(c, n);
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
      zs(
        Tn(e.response) ? e.response(n) : e.response
      ).then((r) => {
        $(e == null ? void 0 : e.lag) ? (Q.show(), setTimeout(() => {
          this.stopResponseLoading(), s(r), Q.hide();
        }, Je(0, 2e3))) : (this.stopResponseLoading(), s(r));
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
      global: r = s === "GET",
      devMode: o = !1
    } = e;
    if (r || o) {
      const i = this.addRequestDefault(e.request), u = this.getResponse(n, s, i, o);
      if (u) {
        const c = await this.fetchResponse(u, i);
        return o && console.warn("Response data:", n, i, c), c;
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
      path: r = "",
      pathFull: o = void 0,
      method: i = "GET",
      headers: u = {},
      type: c = "application/json;charset=UTF-8",
      init: f = {}
    } = e, d = o ?? this.getUrl(r, s), l = `${d}${this.getBodyForGet(n, d, i)}`, g = this.getHeaders(u, c), y = {
      ...f,
      method: i,
      body: this.getBody(n, i)
    };
    return g && (y.headers = g), await fetch(l, y);
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
    if (this.lastResponse = e, e && x(e) && ("message" in e && (this.lastMessage = String(e.message)), n && "data" in e)) {
      if (x(e.data)) {
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
    this.responseLoading && clearTimeout(this.responseLoading), v() && document.body.classList.add(kn);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  static stopResponseLoading() {
    this.responseLoading = setTimeout(() => {
      this.responseLoading = void 0, v() && document.body.classList.remove(kn);
    }, 1200);
  }
};
h(A, "url", "/api/"), h(A, "response", []), h(A, "responseLoading"), h(A, "headers", {}), h(A, "requestDefault"), h(A, "preparation", !1), h(A, "preparationItem"), h(A, "preparationEndItem"), h(A, "status"), h(A, "statusText"), h(A, "error"), h(A, "lastResponse"), h(A, "lastMessage");
let ye = A;
class yo {
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
class mo {
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
    return e in this.cache || (this.cache[e] = new yo(n)), this.cache[e];
  }
}
const mt = class mt {
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
h(mt, "cache"), mt.cache = new mo();
let bn = mt;
function vs(t, e = !1) {
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
          if (e && v() && typeof (window == null ? void 0 : window[n]) == "function")
            return window[n];
        }
    }
  }
  return t;
}
const Do = "cookie-block";
class ks {
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
h(ks, "storage", new et(Do));
const it = {};
class Co {
  constructor(e) {
    h(this, "value");
    h(this, "options", {});
    if (this.name = e, e in Nt)
      return Nt[e];
    this.value = it == null ? void 0 : it[e], Nt[e] = this;
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
    this.value = ee(e), Object.assign(this.options, n), this.update();
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
    if (v() && !ks.get()) {
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
  if (v())
    for (const e of document.cookie.split(";")) {
      const [n, s] = e.trim().split("=");
      n && U(s) && (it[n] = vs(s));
    }
})();
const Nt = {};
function X(t) {
  if (t instanceof Date)
    return t;
  if (Xe(t))
    return /* @__PURE__ */ new Date();
  if (typeof t == "number")
    return new Date(t);
  let e = t, n = w.getTimezoneFormat();
  t.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (r, o, i) => (e = o, n = i, r));
  const s = (/^\d{4}\d{2}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(e) && e.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6")) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(e) && `${e}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(e) && `${e}-01T00:00:00`) ?? (/^\d{4}$/.exec(e) && `${e}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}`) ?? e.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${s}${n}`);
}
function Gt(t, e) {
  return k(t, (n) => n == null ? void 0 : n[e]);
}
class vt {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(e = w.getLocation()) {
    h(this, "geo");
    this.geo = w.find(e);
    const n = this.getLocation();
    if (n in zt)
      return zt[n];
    zt[n] = this;
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
    let s = { type: "language" }, r;
    n && (typeof n == "string" ? s.type = n : s = {
      ...s,
      ...n
    });
    try {
      v() && (e ? r = new Intl.DisplayNames(this.getLocation(), s).of(e) : s.type === "language" ? r = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.language) : s.type === "region" && (r = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.country)));
    } catch (o) {
      console.error("display: ", o);
    }
    return r ?? e ?? "";
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
    return this.display(w.getByCode(e).language, s);
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
  fullName(e, n, s, r) {
    var u;
    const o = ((u = this.geo) == null ? void 0 : u.nameFormat) ?? "fl";
    let i;
    switch (o) {
      case "fsl":
        i = `${n}${s ? ` ${s}` : ""} ${e}`;
        break;
      case "lf":
        i = `${e} ${n}`;
        break;
      case "lsf":
        i = `${e}${s ? ` ${s}` : ""} ${n}`;
        break;
      default:
        i = `${n} ${e}`;
        break;
    }
    return r ? i.replace(/ (.)[^ ]+/ig, " $1.") : i;
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
    var s, r;
    return ((r = (s = this.numberObject(n)) == null ? void 0 : s.format) == null ? void 0 : r.call(s, j(e))) || e.toString();
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    var e, n, s, r, o;
    return ((o = (r = (s = (n = (e = this.numberObject()) == null ? void 0 : e.formatToParts) == null ? void 0 : n.call(e, 1.2)) == null ? void 0 : s.find) == null ? void 0 : r.call(s, (i) => i.type === "decimal")) == null ? void 0 : o.value) || ".";
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
    const r = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof n == "string" ? { currency: n } : n || {}
    }, o = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...i) => (r.currency = i[2].toUpperCase(), i[1]));
    if (s) {
      const i = this.numberObject(r);
      return i ? Gt(
        i.formatToParts(j(e)).filter((u) => ["literal", "currency"].indexOf(u.type) === -1),
        "value"
      ).join("") : e.toString();
    } else return "currency" in r ? this.number(
      typeof e == "number" ? e : o,
      r
    ) : this.number(
      typeof e == "number" ? e : o,
      {
        ...r,
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
    var s, r, o, i, u;
    return ((u = (i = (o = (r = (s = this.numberObject({
      style: "currency",
      currencyDisplay: n,
      currency: e
    })) == null ? void 0 : s.formatToParts) == null ? void 0 : r.call(s, 100)) == null ? void 0 : o.find) == null ? void 0 : i.call(o, (c) => c.type === "currency")) == null ? void 0 : u.value) || e;
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
    }, r = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...o) => (s.unit = o[2].toLowerCase(), o[1]));
    return this.number(r, s);
  }
  /**
   * Возвращает отформатированный размер файла
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  sizeFile(e, n = "byte") {
    const s = j(e);
    if (s > 1024 && Ne(n))
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
    return this.percent(j(e) / 100, n);
  }
  /**
   * Применять форматирование, учитывающее множественное число, и языковые правила, связанные с множественным числом
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param words list of words for formatting (in the format one|two|few|many|other|zero)/
   * список слов для форматирования (в формате `one|two|few|many|other|zero`)
   * @param options Property for PluralRules/ свойство для PluralRules
   * @param optionsNumber an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  plural(e, n, s, r) {
    const o = j(e), i = n.split("|");
    if (i.length > 1)
      try {
        if (v()) {
          const c = new Intl.PluralRules(this.getLocation(), s).select(o);
          let f;
          switch (c) {
            case "zero":
              f = i[i.length - 1];
              break;
            case "one":
              f = i == null ? void 0 : i[0];
              break;
            case "two":
              f = i == null ? void 0 : i[1];
              break;
            case "few":
              f = i != null && i[3] ? i == null ? void 0 : i[2] : i == null ? void 0 : i[1];
              break;
            case "many":
              f = (i == null ? void 0 : i[3]) || (i == null ? void 0 : i[2]) || (i == null ? void 0 : i[1]);
              break;
            case "other":
              i.length === 6 ? f = i[i.length - 2] : f = i[i.length - 1];
              break;
          }
          return `${this.number(o, r)} ${f ?? ""}`.trim();
        }
      } catch (u) {
        console.error("plural: ", u);
      }
    return `${this.number(o, r)} ${(i == null ? void 0 : i[0]) ?? ""}`.trim();
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
  date(e, n, s, r) {
    const o = X(e), i = typeof s == "string", u = this.dateOptions(n, i ? s : "short");
    return r && (u.hour12 = !1), i || Object.assign(u, s), o.toLocaleString(this.getLocation(), u);
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
    const r = X(e), o = s || /* @__PURE__ */ new Date(), i = {
      numeric: "auto",
      ...typeof n == "string" ? { style: n } : n || {}
    };
    let u = "second", c = (r.getTime() - o.getTime()) / 1e3;
    return Math.abs(c) >= 60 && (u = "minute", c /= 60, Math.abs(c) >= 60 && (u = "hour", c /= 60, Math.abs(c) >= 24 && (u = "day", c /= 24, Math.abs(c) >= 30 && (u = "month", c /= 30, Math.abs(c) >= 12 && (u = "year", c /= 12))))), this.relativeByValue(c, u, i);
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
  relativeLimit(e, n, s, r, o, i, u) {
    const c = X(e), f = s || /* @__PURE__ */ new Date(), d = new Date(f), l = new Date(f);
    return d.setDate(f.getDate() - n), l.setDate(f.getDate() + n), c >= d && c <= l ? this.relative(
      c,
      r,
      f
    ) : this.date(
      c,
      i,
      o,
      u
    );
  }
  /**
   * Возвращает отформатированное значение времени, прошедшего с момента события
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param unit time unit/ единица времени
   * @param styleOptions additional option or formatting style/ дополнительная опция или стиль форматирования
   */
  relativeByValue(e, n, s) {
    const r = {
      numeric: "auto",
      ...typeof s == "string" ? { style: s } : s || {}
    };
    try {
      if (v())
        return new Intl.RelativeTimeFormat(this.getLocation(), r).format(Math.round(j(e)), n);
    } catch (o) {
      console.error("relative: ", o);
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
      if (v())
        return Intl.DateTimeFormat(this.getLocation(), { month: n || "long" }).format(X(e));
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
      if (v()) {
        const s = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { month: e || "long" });
        for (let o = 0; o < 12; o++)
          s.setMonth(o), n.push({
            label: r.format(s).replace(/^./, (i) => i.toUpperCase()),
            value: o + 1
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
      if (v())
        return Intl.DateTimeFormat(this.getLocation(), { weekday: n || "long" }).format(X(e));
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
      if (v()) {
        const s = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }), o = s.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
        s.setDate(s.getDate() - o);
        for (let i = 0; i < 7; i++)
          n.push({
            label: r.format(s).replace(/^./, (u) => u.toUpperCase()),
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
  sort(e, n = (s, r) => [s, r]) {
    if (v()) {
      const s = new Intl.Collator(this.getLocation());
      return e.sort((r, o) => s.compare(...n(r, o)));
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
      if (v())
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
const zt = {};
class ln {
  /**
   * Constructor
   * @param date date for processing/ дата для обработки
   * @param type type of date format for output/ тип формата даты вывода
   * @param code country and language code/ код страны и языка
   */
  constructor(e, n = "date", s = w.getLocation()) {
    h(this, "date");
    h(this, "hour24", !1);
    h(this, "watch");
    this.type = n, this.code = s, this.date = X(e);
  }
  /**
   * Returns an object for working with formatting.
   *
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new vt(this.code);
  }
  /**
   * Returns a Date object.
   *
   * Возвращает объект Date.
   */
  getDate() {
    return this.date;
  }
  /**
   * Returns the type of data output.
   *
   * Возвращает тип вывода данных.
   */
  getType() {
    return this.type;
  }
  /**
   * Returns the format of hours.
   *
   * Возвращает формат часов.
   */
  getHoursType() {
    const e = this.clone();
    return e.setHours(23), e.toLocaleTimeString(this.getIntl().getLocation(), { hour: "2-digit" }).match(/23/ig) ? "24" : "12";
  }
  /**
   * Whether to use 12-hour time.
   *
   * Использовать ли 12-часовой формат времени.
   */
  getHour24() {
    return this.hour24;
  }
  /**
   * The method returns the difference, in minutes, between
   * a date as evaluated in the UTC time zone, and the same date as evaluated
   * in the local time zone.
   *
   * Метод возвращает смещение часового пояса относительно часового пояса UTC
   * в минутах для текущей локали.
   */
  getTimeZoneOffset() {
    return this.date.getTimezoneOffset();
  }
  /**
   * Returns the time zone as a string.
   *
   * Возвращает временную зону в виде строки.
   * @param style the style of the returned data/ стиль возвращаемых данных
   */
  getTimeZone(e) {
    const n = this.getTimeZoneOffset();
    if (e === "minute")
      return n.toString();
    const s = n / 60 * -1;
    if (e === "hour")
      return this.getIntl().number(Math.trunc(s), { signDisplay: "always" });
    const r = this.getIntl().number(Math.trunc(s), {
      signDisplay: "always",
      minimumIntegerDigits: 2
    }), o = s.toString().match(/.\d+/) ? "30" : "00";
    return e === "RFC" ? `${r}${o}` : `${r}:${o}`;
  }
  /**
   * Returns the code of the first day of the week.
   *
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    const e = this.getIntl().getFirstDay();
    return e === "Sa" ? 6 : e === "Su" ? 0 : 1;
  }
  /**
   * The method returns the year of the specified date according to local time.
   *
   * Метод возвращает год указанной даты по местному времени.
   */
  getYear() {
    return this.date.getFullYear();
  }
  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.
   *
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth() {
    return this.date.getMonth() + 1;
  }
  /**
   * The method returns the day of the month for the specified date according to local time.
   *
   * Метод возвращает день месяца указанной даты по местному времени
   */
  getDay() {
    return this.date.getDate();
  }
  /**
   * The method returns the hour for the specified date, according to local time.
   *
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour() {
    return this.date.getHours();
  }
  /**
   * The method returns the minutes in the specified date according to local time.
   *
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute() {
    return this.date.getMinutes();
  }
  /**
   * The method returns the seconds in the specified date according to local time.
   *
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond() {
    return this.date.getSeconds();
  }
  /**
   * Returns the last day of the week.
   *
   * Возвращает последний день недели.
   */
  getMaxDay() {
    return this.getMonth() > 0 ? this.cloneDayLast().getDay() : 0;
  }
  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output/ тип формата даты вывода
   * @param styleOptions the representation of the month/ представление месяца
   */
  locale(e = this.type, n) {
    return this.getIntl().date(
      this.date,
      e,
      n,
      this.hour24
    );
  }
  /**
   * Returns the formatted year.
   *
   * Возвращает отформатированный год.
   * @param style the representation of the month/ представление месяца
   */
  localeYear(e = "numeric") {
    return this.locale("year", { year: e });
  }
  /**
   * Returns the formatted month.
   *
   * Возвращает отформатированный месяц.
   * @param style the representation of the month/ представление месяца
   */
  localeMonth(e = "long") {
    return this.locale("month", { month: e });
  }
  /**
   * Returns the formatted day.
   *
   * Возвращает отформатированный день.
   * @param style the representation of the month/ представление месяца
   */
  localeDay(e = "numeric") {
    return this.locale("day", { day: e });
  }
  /**
   * Returns the formatted hour.
   *
   * Возвращает отформатированный час.
   * @param style the representation of the month/ представление месяца
   */
  localeHour(e = "numeric") {
    return this.locale("hour", { hour: e });
  }
  /**
   * Returns the formatted minute.
   *
   * Возвращает отформатированную минуту.
   * @param style the representation of the month/ представление месяца
   */
  localeMinute(e = "numeric") {
    return this.locale("minute", { minute: e });
  }
  /**
   * Returns the formatted second.
   *
   * Возвращает отформатированную секунду.
   * @param style the representation of the month/ представление месяца
   */
  localeSecond(e = "numeric") {
    return this.locale("second", { second: e });
  }
  /**
   * Output of standard data.
   *
   * Вывод стандартных данных.
   * @param timeZone add time zone/ добавить временную зону
   */
  standard(e = !0) {
    const n = new ln(this.date, this.type, "en-GB"), s = [];
    let r;
    return n.setHour24(!0), this.type === "hour-minute" ? r = n.locale(this.type, {
      year: "numeric",
      month: "2-digit",
      hour12: !1
    }) : (["full", "datetime", "date", "year-month", "year", "month", "day"].indexOf(this.type) !== -1 && (s.push(n.localeYear()), s.push(n.localeMonth("2-digit"))), ["full", "datetime", "date", "year", "month", "day"].indexOf(this.type) !== -1 && s.push(n.localeDay("2-digit")), ["full", "datetime", "time", "hour", "minute", "second"].indexOf(this.type) !== -1 && (r = n.locale("time"))), `${s.join("-")}${r ? `T${r}${e ? n.getTimeZone() : ""}` : ""}`;
  }
  /**
   * Change the date completely.
   *
   * Изменять полностью дату.
   * @param value an integer value representing the number/
   * целочисленное значение, представляющее число
   */
  setDate(e) {
    return this.date = X(e), this.update(), this;
  }
  /**
   * Change the type of data output.
   *
   * Изменить тип вывода данных.
   * @param value type of output/ тип вывод
   */
  setType(e) {
    return this.type = e, this.update(), this;
  }
  /**
   * Whether to use 12-hour time.
   *
   * Использовать ли 12-часовой формат времени.
   * @param value If true, output the 12-hour time format/
   * если true, выводить 12-часовой формат времени
   */
  setHour24(e) {
    return this.hour24 = e, this.update(), this;
  }
  /**
   * To change the location.
   *
   * Изменить местоположение.
   * @param code country and language code/ код страны и языка
   */
  setCode(e) {
    return this.code = e, this;
  }
  /**
   * The function is called when the data is updated.
   *
   * Функция вызывается при обновлении данных.
   * @param watch the function calls/ функция вызывает
   */
  setWatch(e) {
    return this.watch = e, this;
  }
  /**
   * The method sets the full year for a specified date according to local time.
   *
   * Метод устанавливает полный год указанной даты по местному времени.
   * @param value value/ значения
   */
  setYear(e) {
    return this.date.setFullYear(e), this.update(), this;
  }
  /**
   * The method sets the month for a specified date according to the currently set year.
   *
   * Метод устанавливает месяц указанной даты по местному времени.
   * @param value value/ значения
   */
  setMonth(e) {
    return this.date.setMonth(e - 1), this.update(), this;
  }
  /**
   * The method changes the day of the month of a given Date instance, based on local time.
   *
   * Метод устанавливает день месяца указанной даты по местному времени.
   * @param value value/ значения
   */
  setDay(e) {
    return this.date.setDate(e), this.update(), this;
  }
  /**
   * The method sets the hours for a specified date according to local time.
   *
   * Метод устанавливает часы указанной даты по местному времени.
   * @param value value/ значения
   */
  setHour(e) {
    return this.date.setHours(e), this.update(), this;
  }
  /**
   * The method sets the minutes for a specified date according to local time
   *
   * Метод устанавливает минуты указанной даты по местному времени
   * @param value value / значения
   */
  setMinute(e) {
    return this.date.setMinutes(e), this.update(), this;
  }
  /**
   * The method sets the seconds for a specified date according to local time.
   *
   * Метод устанавливает секунды указанной даты по местному времени.
   * @param value value/ значения
   */
  setSecond(e) {
    return this.date.setSeconds(e), this.update(), this;
  }
  /**
   * Shift the date by a given value in years.
   *
   * Сдвинуть дату на заданное значение в годах.
   * @param value values for moving/ значения для перемещения
   */
  moveByYear(e) {
    return this.setYear(this.date.getFullYear() + e), this;
  }
  /**
   * Shift the date by a given value in months.
   *
   * Сдвинуть дату на заданное значение в месяцах.
   * @param value values for moving/ значения для перемещения
   */
  moveByMonth(e) {
    return this.setMonth(this.date.getMonth() + 1 + e), this;
  }
  /**
   * Shift the date by a given value in days.
   *
   * Сдвинуть дату на заданное значение в днях.
   * @param value values for moving/ значения для перемещения
   */
  moveByDay(e) {
    return this.setDay(this.date.getDate() + e), this;
  }
  /**
   * Shift the date by a given value in hours.
   *
   * Сдвинуть дату на заданное значение в часах.
   * @param value values for moving/ значения для перемещения
   */
  moveByHour(e) {
    return this.setHour(this.date.getHours() + e), this;
  }
  /**
   * Shift the date by a given value in minutes.
   *
   * Сдвинуть дату на заданное значение в минутах.
   * @param value values for moving/ значения для перемещения
   */
  moveByMinute(e) {
    return this.setMinute(this.date.getMinutes() + e), this;
  }
  /**
   * Shift the date by a given value in seconds.
   *
   * Сдвинуть дату на заданное значение в секундах.
   * @param value values for moving/ значения для перемещения
   */
  moveBySecond(e) {
    return this.setSecond(this.date.getSeconds() + e), this;
  }
  /**
   * Translate to the first month.
   *
   * Переводить на первый месяц.
   */
  moveMonthFirst() {
    return this.setMonth(1), this;
  }
  /**
   * Translate to the first month.
   *
   * Переводить на первый месяц.
   */
  moveMonthLast() {
    return this.setMonth(12), this;
  }
  /**
   * Translate to the first day of the next month.
   *
   * Переводить на первый день следующего месяца.
   */
  moveMonthNext() {
    return this.setDay(1).moveByMonth(1), this;
  }
  /**
   * Translate to the first day of the previous month.
   *
   * Переводить на первый день предыдущего месяца.
   */
  moveMonthPrevious() {
    return this.setDay(1).moveByMonth(-1), this;
  }
  /**
   * Translate to the first day of the week.
   *
   * Переводить на первый день недели.
   */
  moveWeekdayFirst() {
    const e = this.date.getDay(), n = this.getFirstDayCode();
    return this.moveByDay(
      (n === 6 ? -1 : n) - e
    ), this;
  }
  /**
   * Translate to the last day of the week.
   *
   * Переводить на последний день недели.
   */
  moveWeekdayLast() {
    return this.moveWeekdayFirst().moveByDay(6), this;
  }
  /**
   * Translate to the first day of the first week of the month.
   *
   * Переводить на первый день первой недели месяца.
   */
  moveWeekdayFirstByMonth() {
    return this.moveDayFirst().moveWeekdayFirst(), this;
  }
  /**
   * Translate to the first day of the first full week of the following month.
   *
   * Переводить на первый день первой полной недели следующего месяца.
   */
  moveWeekdayLastByMonth() {
    return this.moveDayLast().moveWeekdayLast(), this;
  }
  /**
   * Translate to the next week.
   *
   * Переводить на следующую неделю.
   */
  moveWeekdayNext() {
    return this.moveWeekdayFirst().moveByDay(7), this;
  }
  /**
   * Translate to the previous week.
   *
   * Переводить на предыдущую неделю.
   */
  moveWeekdayPrevious() {
    return this.moveWeekdayFirst().moveByDay(-7), this;
  }
  /**
   * Translate to the first day of the month.
   *
   * Переводить на первый день месяца.
   */
  moveDayFirst() {
    return this.setDay(1), this;
  }
  /**
   * Translate to the last day of the month.
   *
   * Переводить на последний день месяца.
   */
  moveDayLast() {
    return this.setDay(1).moveByMonth(1).moveByDay(-1), this;
  }
  /**
   * Translate to the next day.
   *
   * Переводить на следующий день.
   */
  moveDayNext() {
    return this.moveByDay(1), this;
  }
  /**
   * Translate to the previous day.
   *
   * Переводить на предыдущий день.
   */
  moveDayPrevious() {
    return this.moveByDay(-1), this;
  }
  /**
   * Clone the Date object.
   *
   * Клонировать объект Date.
   */
  clone() {
    return new Date(this.date);
  }
  /**
   * Clone the GeoDate object.
   *
   * Клонировать объект GeoDate.
   */
  cloneClass() {
    return new this.constructor(
      this.clone(),
      this.type,
      this.code
    );
  }
  /**
   * Clone the GeoDate object and set the month to January.
   *
   * Клонировать объект GeoDate и установить месяц на январь.
   */
  cloneMonthFirst() {
    return this.cloneClass().moveMonthFirst();
  }
  /**
   * Clone the GeoDate object and move the month to the end of the year.
   *
   * Клонировать объект GeoDate и перевести месяц на конец года.
   */
  cloneMonthLast() {
    return this.cloneClass().moveMonthLast();
  }
  /**
   * Clone the GeoDate object and transfer it one month ahead.
   *
   * Клонировать объект GeoDate и перевести на 1 месяц вперед.
   */
  cloneMonthNext() {
    return this.cloneClass().moveMonthNext();
  }
  /**
   * Clone the GeoDate object and transfer it one month back.
   *
   * Клонировать объект GeoDate и перевести на 1 месяц назад.
   */
  cloneMonthPrevious() {
    return this.cloneClass().moveMonthPrevious();
  }
  /**
   * Returns the first day of the week according to the current date.
   *
   * Возвращает первый день недели по текущей дате.
   */
  cloneWeekdayFirst() {
    return this.cloneClass().moveWeekdayFirst();
  }
  /**
   * Returns the last day of the week according to the current date.
   *
   * Возвращает последний день недели по текущей дате.
   */
  cloneWeekdayLast() {
    return this.cloneClass().moveWeekdayLast();
  }
  /**
   * Returns the first day of the week according to the current month.
   *
   * Возвращает первый день недели по текущему месяцу.
   */
  cloneWeekdayFirstByMonth() {
    return this.cloneClass().moveWeekdayFirstByMonth();
  }
  /**
   * Returns the last day of the week according to the current month.
   *
   * Возвращает последний день недели по текущему месяцу.
   */
  cloneWeekdayLastByMonth() {
    return this.cloneClass().moveWeekdayLastByMonth();
  }
  /**
   * Returns the next week according to the current date.
   *
   * Возвращает следующую неделю по текущей дате.
   */
  cloneWeekdayNext() {
    return this.cloneClass().moveWeekdayNext();
  }
  /**
   * Returns the previous week according to the current date.
   *
   * Возвращает предыдущую неделю по текущей дате.
   */
  cloneWeekdayPrevious() {
    return this.cloneClass().moveWeekdayPrevious();
  }
  /**
   * Clone the GeoDate object and move the day to the beginning of the month.
   *
   * Клонировать объект GeoDate и перевести день на начало месяца.
   */
  cloneDayFirst() {
    return this.cloneClass().moveDayFirst();
  }
  /**
   * Clone the GeoDate object and move the day to the end of the month.
   *
   * Клонировать объект GeoDate и перевести день на конец месяца.
   */
  cloneDayLast() {
    return this.cloneClass().moveDayLast();
  }
  /**
   * Clone the GeoDate object and move by 1 day.
   *
   * Клонировать объект GeoDate и перевести на 1 день.
   */
  cloneDayNext() {
    return this.cloneClass().moveDayNext();
  }
  /**
   * Clone the GeoDate object and go back by 1 day.
   *
   * Клонировать объект GeoDate и вернуться на 1 день.
   */
  cloneDayPrevious() {
    return this.cloneClass().moveDayPrevious();
  }
  /**
   * Updating all values.
   *
   * Обновление всех значений.
   */
  update() {
    var e;
    return (e = this.watch) == null || e.call(
      this,
      this.date,
      this.type,
      this.hour24
    ), this;
  }
}
const a = "@flag", ke = class ke {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(e = w.getLocation()) {
    this.code = e;
  }
  /**
   * Returns information about the country and its flag.
   *
   * Возвращает информацию о стране и её флаге.
   * @param code country code/ код страны
   */
  get(e = this.code) {
    var s;
    const n = w.find(e);
    if (n) {
      const r = this.getCountry(n);
      return {
        language: this.getLanguage(n),
        country: r,
        standard: n.standard,
        icon: (s = ke.flags) == null ? void 0 : s[n.country],
        label: r,
        value: n.country
      };
    }
  }
  /**
   * Getting a link to the flag.
   *
   * Получение ссылки на флаг.
   * @param code country code/ код страны
   */
  getFlag(e = this.code) {
    var n;
    return (n = this.get(e)) == null ? void 0 : n.icon;
  }
  /**
   * Getting a list of countries by an array of codes.
   *
   * Получение списка стран по массиву с кодами.
   * @param codes country code/ код страны
   */
  getList(e) {
    return k(this.getCodes(e), (n) => this.get(n));
  }
  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code/ код страны.
   */
  getNational(e) {
    return k(this.getList(e), (n) => {
      const s = new ke(n.standard).get(n.standard);
      return {
        ...n,
        description: s == null ? void 0 : s.country,
        nationalLanguage: s == null ? void 0 : s.language,
        nationalCountry: s == null ? void 0 : s.country
      };
    });
  }
  /**
   * To change the location.
   *
   * Изменить местоположение.
   * @param code country and language code/ код страны и языка
   */
  setCode(e) {
    return this.code = e, this;
  }
  /**
   * Returns a special object for formatting.
   *
   * Возвращает специальный объект для работы с форматированием.
   */
  getLocation() {
    return new vt(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.
   *
   * Возвращает список стран для получения данных.
   * @param codes country code/ код страны
   */
  getCodes(e) {
    return e ?? Object.keys(ke.flags);
  }
  /**
   * Getting the name of the language.
   *
   * Получение названия языка.
   * @param data object with information of data/ объект с информацией данных
   */
  getLanguage(e) {
    return this.getLocation().languageName(e.language);
  }
  /**
   * Getting the name of the country.
   *
   * Получение названия страны.
   * @param data object with information of data/ объект с информацией данных
   */
  getCountry(e) {
    return this.getLocation().countryName(e.country);
  }
};
h(ke, "flags", {
  AD: `${a}-ad`,
  AE: `${a}-ae`,
  AF: `${a}-af`,
  AG: `${a}-ag`,
  AI: `${a}-ai`,
  AL: `${a}-al`,
  AM: `${a}-am`,
  AN: `${a}-an`,
  AO: `${a}-ao`,
  AQ: `${a}-aq`,
  AR: `${a}-ar`,
  AS: `${a}-as`,
  AT: `${a}-at`,
  AU: `${a}-au`,
  AW: `${a}-aw`,
  AZ: `${a}-az`,
  BA: `${a}-ba`,
  BB: `${a}-bb`,
  BD: `${a}-bd`,
  BE: `${a}-be`,
  BF: `${a}-bf`,
  BG: `${a}-bg`,
  BH: `${a}-bh`,
  BI: `${a}-bi`,
  BJ: `${a}-bj`,
  BL: `${a}-bl`,
  BM: `${a}-bm`,
  BN: `${a}-bn`,
  BO: `${a}-bo`,
  BR: `${a}-br`,
  BS: `${a}-bs`,
  BT: `${a}-bt`,
  BW: `${a}-bw`,
  BY: `${a}-by`,
  BZ: `${a}-bz`,
  CA: `${a}-ca`,
  CC: `${a}-cc`,
  CD: `${a}-cd`,
  CF: `${a}-cf`,
  CG: `${a}-cg`,
  CH: `${a}-ch`,
  CI: `${a}-ci`,
  CK: `${a}-ck`,
  CL: `${a}-cl`,
  CM: `${a}-cm`,
  CN: `${a}-cn`,
  CO: `${a}-co`,
  CR: `${a}-cr`,
  CU: `${a}-cu`,
  CV: `${a}-cv`,
  CW: `${a}-cw`,
  CX: `${a}-cx`,
  CY: `${a}-cy`,
  CZ: `${a}-cz`,
  DE: `${a}-de`,
  DJ: `${a}-dj`,
  DK: `${a}-dk`,
  DM: `${a}-dm`,
  DZ: `${a}-dz`,
  EC: `${a}-ec`,
  EE: `${a}-ee`,
  EG: `${a}-eg`,
  EH: `${a}-eh`,
  ER: `${a}-er`,
  ES: `${a}-es`,
  ET: `${a}-et`,
  FI: `${a}-fi`,
  FJ: `${a}-fj`,
  FK: `${a}-fk`,
  FM: `${a}-fm`,
  FO: `${a}-fo`,
  FR: `${a}-fr`,
  GA: `${a}-ga`,
  GB: `${a}-gb`,
  GD: `${a}-gd`,
  GE: `${a}-ge`,
  GF: `${a}-gf`,
  GG: `${a}-gg`,
  GH: `${a}-gh`,
  GI: `${a}-gi`,
  GL: `${a}-gl`,
  GM: `${a}-gm`,
  GN: `${a}-gn`,
  GQ: `${a}-gq`,
  GR: `${a}-gr`,
  GT: `${a}-gt`,
  GU: `${a}-gu`,
  GW: `${a}-gw`,
  GY: `${a}-gy`,
  HK: `${a}-hk`,
  HN: `${a}-hn`,
  HR: `${a}-hr`,
  HT: `${a}-ht`,
  HU: `${a}-hu`,
  ID: `${a}-id`,
  IE: `${a}-ie`,
  IL: `${a}-il`,
  IM: `${a}-im`,
  IN: `${a}-in`,
  IO: `${a}-io`,
  IQ: `${a}-iq`,
  IR: `${a}-ir`,
  IS: `${a}-is`,
  IT: `${a}-it`,
  JE: `${a}-je`,
  JM: `${a}-jm`,
  JO: `${a}-jo`,
  JP: `${a}-jp`,
  KE: `${a}-ke`,
  KG: `${a}-kg`,
  KH: `${a}-kh`,
  KI: `${a}-ki`,
  KM: `${a}-km`,
  KN: `${a}-kn`,
  KP: `${a}-kp`,
  KR: `${a}-kr`,
  KW: `${a}-kw`,
  KY: `${a}-ky`,
  KZ: `${a}-kz`,
  LA: `${a}-la`,
  LB: `${a}-lb`,
  LC: `${a}-lc`,
  LI: `${a}-li`,
  LK: `${a}-lk`,
  LR: `${a}-lr`,
  LS: `${a}-ls`,
  LT: `${a}-lt`,
  LU: `${a}-lu`,
  LV: `${a}-lv`,
  LY: `${a}-ly`,
  MA: `${a}-ma`,
  MC: `${a}-mc`,
  MD: `${a}-md`,
  ME: `${a}-me`,
  MF: `${a}-mf`,
  MG: `${a}-mg`,
  MH: `${a}-mh`,
  MK: `${a}-mk`,
  ML: `${a}-ml`,
  MM: `${a}-mm`,
  MN: `${a}-mn`,
  MO: `${a}-mo`,
  MP: `${a}-mp`,
  MQ: `${a}-mq`,
  MR: `${a}-mr`,
  MS: `${a}-ms`,
  MT: `${a}-mt`,
  MU: `${a}-mu`,
  MV: `${a}-mv`,
  MW: `${a}-mw`,
  MX: `${a}-mx`,
  MY: `${a}-my`,
  MZ: `${a}-mz`,
  NA: `${a}-na`,
  NC: `${a}-nc`,
  NE: `${a}-ne`,
  NF: `${a}-nf`,
  NG: `${a}-ng`,
  NI: `${a}-ni`,
  NL: `${a}-nl`,
  NO: `${a}-no`,
  NP: `${a}-np`,
  NR: `${a}-nr`,
  NU: `${a}-nu`,
  NZ: `${a}-nz`,
  OM: `${a}-om`,
  PA: `${a}-pa`,
  PE: `${a}-pe`,
  PF: `${a}-pf`,
  PG: `${a}-pg`,
  PH: `${a}-ph`,
  PK: `${a}-pk`,
  PL: `${a}-pl`,
  PM: `${a}-pm`,
  PN: `${a}-pn`,
  PR: `${a}-pr`,
  PS: `${a}-ps`,
  PT: `${a}-pt`,
  PW: `${a}-pw`,
  PY: `${a}-py`,
  QA: `${a}-qa`,
  RE: `${a}-re`,
  RO: `${a}-ro`,
  RS: `${a}-rs`,
  RU: `${a}-ru`,
  RW: `${a}-rw`,
  SA: `${a}-sa`,
  SB: `${a}-sb`,
  SC: `${a}-sc`,
  SD: `${a}-sd`,
  SE: `${a}-se`,
  SG: `${a}-sg`,
  SH: `${a}-sh`,
  SI: `${a}-si`,
  SJ: `${a}-sj`,
  SK: `${a}-sk`,
  SL: `${a}-sl`,
  SM: `${a}-sm`,
  SN: `${a}-sn`,
  SO: `${a}-so`,
  SR: `${a}-sr`,
  SS: `${a}-ss`,
  ST: `${a}-st`,
  SV: `${a}-sv`,
  SX: `${a}-sx`,
  SY: `${a}-sy`,
  SZ: `${a}-sz`,
  TC: `${a}-tc`,
  TD: `${a}-td`,
  TG: `${a}-tg`,
  TH: `${a}-th`,
  TJ: `${a}-tj`,
  TK: `${a}-tk`,
  TL: `${a}-tl`,
  TM: `${a}-tm`,
  TN: `${a}-tn`,
  TO: `${a}-to`,
  TR: `${a}-tr`,
  TT: `${a}-tt`,
  TV: `${a}-tv`,
  TW: `${a}-tw`,
  TZ: `${a}-tz`,
  UA: `${a}-ua`,
  UG: `${a}-ug`,
  US: `${a}-us`,
  UY: `${a}-uy`,
  UZ: `${a}-uz`,
  VA: `${a}-va`,
  VC: `${a}-vc`,
  VE: `${a}-ve`,
  VG: `${a}-vg`,
  VI: `${a}-vi`,
  VN: `${a}-vn`,
  VU: `${a}-vu`,
  WF: `${a}-wf`,
  WS: `${a}-ws`,
  YE: `${a}-ye`,
  YT: `${a}-yt`,
  ZA: `${a}-za`,
  ZM: `${a}-zm`,
  ZW: `${a}-zw`
});
let Yt = ke;
const $e = class $e {
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
    let n = this.map, s, r = "";
    return this.toNumber(e).forEach((o) => {
      r === "" && o in n ? (s = n[o], n = n[o].next) : r += o;
    }), {
      item: s,
      phone: r
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
    if (U(e) && Array.isArray(n) && n.length > 0) {
      const s = this.removeZero(e), r = s.length;
      for (const o of n)
        if (this.getUnnecessaryLength(o) === r)
          return this.toStandard(s, o);
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
    const e = k(w.getList(), (n) => {
      if (n != null && n.phoneMask)
        return {
          phone: (n == null ? void 0 : n.phoneCode) && Number(n.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: (n == null ? void 0 : n.phoneWithin) || 0,
          mask: ae(n.phoneMask),
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
        let s = this.map, r;
        if (this.toNumber(n).forEach((o) => {
          o in s || (s[o] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), r = s[o], s = s[o].next;
        }), r) {
          r.value === void 0 && (r.info = e, r.value = e.value);
          const o = this.toWithin(n, e.within);
          r.mask.push(o), r.maskFull.push(o.replace(/\d/ig, "*")), r.items.push(e);
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
h($e, "list", []), h($e, "map", {}), $e.makeList(), $e.makeMap();
let Sn = $e, Ce;
class Ko {
  /**
   * Returns the value by its name.
   *
   * Возвращает значение по его имени.
   * @param name property name/ название свойства
   */
  static get(e) {
    return Ce && (Ce == null ? void 0 : Ce[e]);
  }
  /**
   * Adds data, this method works only once.
   *
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data/ глобальные данные
   */
  static add(e) {
    Ce === void 0 && (Ce = { ...e });
  }
}
const pe = class pe {
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
    var r;
    const s = ee(n);
    s !== ((r = this.hash) == null ? void 0 : r[e]) && (this.hash[e] = s, this.update());
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
      (...n) => (e[n[1]] = vs(n[2]), "")
    ), e;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Cs(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
    k(this.watch, (n, s) => {
      var r;
      ((r = this.hash) == null ? void 0 : r[s]) !== (e == null ? void 0 : e[s]) && n.forEach((o) => o(e[s]));
    });
  }
};
h(pe, "hash", {}), h(pe, "watch", {}), h(pe, "block", !1), v() && (pe.reload(), addEventListener("hashchange", () => pe.reload()));
let Be = pe;
const Lt = "__UI_ICON", En = 320, An = "--LOAD--", je = class je {
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
    var o, i;
    const r = ((o = this.icons) == null ? void 0 : o[this.getName(e)]) ?? ((i = this.icons) == null ? void 0 : i[e]) ?? `${e.replace(/^@/, n ?? this.url)}.svg`;
    return typeof r == "string" ? r === An && s > 0 ? (await this.wait(), this.get(e, n, s - En)) : r : await r;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return k(this.icons, (e, n) => n.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${ye.isLocalhost(), ""}${this.url}`;
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
    this.icons[this.getName(e)] = An;
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
    k(e, (n, s) => this.add(s, n));
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
    return new Promise((e) => setTimeout(() => e(), En));
  }
};
h(je, "icons", {}), h(je, "url", "/icons/"), v() && (Lt in window || (window[Lt] = {}), je.icons = window[Lt]);
let wn = je;
function $s(t, e = "ig", n = ":value") {
  const s = t.replace(/([[\]\\^$.?*+()])/g, "\\$1");
  return new RegExp(n.replace(/:value/g, s), e);
}
class bs {
  /**
   * Creates an instance of ListData for managing list data.
   *
   * Создает экземпляр ListData для управления данными списка.
   * @param list List data / данные списка
   * @param focus Focused item / элемент в фокусе
   * @param highlight Search text for highlighting / текст поиска для выделения
   * @param highlightLengthStart Minimum length to start highlighting / минимальная длина для начала выделения
   * @param selected Selected items / выбранные элементы
   * @param keyValue Key for getting item value / ключ для получения значения элемента
   * @param keyLabel Key for getting item label / ключ для получения метки элемента
   * @param lite Threshold for lite mode / порог для облегченного режима
   * @param parent Parent identifier / идентификатор родителя
   */
  constructor(e, n, s, r, o, i, u, c, f) {
    h(this, "subList", {});
    /**
     * Returns a list for forming a list.
     *
     * Возвращает список для формирования списка.
     */
    h(this, "data", p(
      () => k(
        $(this.list) || [],
        (e, n) => this.initItem(n, e)
      )
    ));
    /**
     * Returns a simplified list for quick loading.
     *
     * Возвращает упрощенный список для быстрой загрузки.
     */
    h(this, "liteData", p(() => {
      if (this.isLite()) {
        const e = [];
        for (const n of this.data.value) {
          const s = {
            parent: this.parent,
            index: n.index,
            type: n.type,
            label: n.label,
            description: n.description,
            value: n.value
          };
          "description" in n && (s.description = n.description), e.push(s);
        }
        return e;
      }
      return this.data.value;
    }));
    /**
     * Returns a list of records with all additional data.
     *
     * Возвращает список записей со всеми дополнительными данными.
     */
    h(this, "fullData", p(() => {
      const e = this.getFocus(), n = this.getHighlight(), s = this.getSelected();
      return k(
        this.data.value,
        (r) => ({
          ...r,
          focus: e === r.index,
          highlight: n,
          selected: we(r.index, s)
        })
      );
    }));
    /**
     * Returns a map of all entries.
     *
     * Возвращает карту всех записей.
     */
    h(this, "map", p(() => {
      const e = [];
      return this.data.value.forEach((n) => {
        switch (n.type) {
          case "item":
            e.push(n);
            break;
          case "group":
          case "menu":
            e.push(
              n,
              ...this.getSubList(n).map.value
            );
            break;
        }
      }), e;
    }));
    /**  Returns a list consisting only of items/ Возвращает список, состоящий только из элементов. */
    h(this, "mapItems", p(() => this.map.value.filter((e) => e.type === "item")));
    /**
     * Returns a list consisting only of values for selection.
     *
     * Возвращает список, состоящий только из значений для выбора.
     */
    h(this, "items", p(() => this.map.value.filter(
      (e) => e.type === "item" || e.type === "group" || e.type === "menu"
    )));
    /**
     * Finds the first element that meets the search conditions.
     *
     * Находит первый элемент, соответствующий условиям поиска.
     */
    h(this, "highlightFirstItem", p(() => {
      const e = this.getHighlight(), n = e && e.length >= this.getHighlightLengthStart() && $s(e, "i");
      return n ? this.map.value.findIndex(
        (s) => {
          var r, o, i;
          return ((r = s.label) == null ? void 0 : r.toString().match(n)) || ((o = s.index) == null ? void 0 : o.toString().match(n)) || ((i = s.search) == null ? void 0 : i.toString().match(n));
        }
      ) : -1;
    }));
    /**
     * Is there a selected item.
     *
     * Есть ли выбранный элемент.
     */
    h(this, "isSelected", p(() => {
      const e = this.getSelected();
      return !!e && this.mapItems.value.findIndex((n) => we(n.index, e)) !== -1;
    }));
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     */
    h(this, "selectedList", p(() => {
      const e = this.getSelected();
      return e && this.isSelected.value ? this.mapItems.value.filter((n) => we(n.index, e)) : [];
    }));
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     */
    h(this, "selectedNames", p(() => Gt(this.selectedList.value, "label")));
    /**
     * Returns a list of selected item values on the map.
     *
     * Возвращает список значений выделенных элементов на карте.
     */
    h(this, "selectedValues", p(() => Gt(this.selectedList.value, "value")));
    this.list = e, this.focus = n, this.highlight = s, this.highlightLengthStart = r, this.selected = o, this.keyValue = i, this.keyLabel = u, this.lite = c, this.parent = f, _(e) && O(e, () => {
      this.subList = {};
    });
  }
  /**
   * Checks whether it is necessary to first display a simplified version.
   *
   * Проверяет, надо ли сначала вывести упрощенную версию.
   */
  isLite() {
    var e;
    return !!((e = this.lite) != null && e.value && this.data.value.length > this.lite.value);
  }
  /**
   * Checks if an element is in focus.
   *
   * Проверяет, есть ли элемент в фокусе.
   */
  isFocus() {
    const e = this.getFocus();
    return !!(e && this.map.value.findIndex((n) => n.index === e) !== -1);
  }
  /**
   * Checks if there is a selected item.
   *
   * Проверяет, есть ли выделенный элемент.
   */
  isHighlight() {
    return this.highlightFirstItem.value !== -1;
  }
  /**
   * Returns the number of records.
   *
   * Возвращает количество записей.
   */
  getLength() {
    return this.data.value.length;
  }
  /**
   * Returns the number of all available records.
   *
   * Возвращает количество всех доступных записей.
   */
  getLengthByMap() {
    return this.map.value.length;
  }
  /**
   * Returns the number of all available records.
   *
   * Возвращает количество всех доступных записей.
   */
  getLengthByItems() {
    return this.items.value.length;
  }
  /**
   * Returns the values in focus.
   *
   * Возвращает значения в фокусе.
   */
  getFocus() {
    var e;
    return (e = this.focus) == null ? void 0 : e.value;
  }
  /**
   * Returns the selected value.
   *
   * Возвращает выделенного значение.
   */
  getHighlight() {
    var e;
    return (e = this.highlight) == null ? void 0 : e.value;
  }
  /**
   * Returns the minimum length for highlight to start.
   *
   * Возвращает минимальную длину для начала выделения.
   */
  getHighlightLengthStart() {
    var e;
    return ((e = this.highlightLengthStart) == null ? void 0 : e.value) ?? 2;
  }
  /**
   * Returns the selected value.
   *
   * Возвращает выбранное значение.
   */
  getSelected() {
    var e;
    return (e = this.selected) == null ? void 0 : e.value;
  }
  /**
   * Returns an item by its index.
   *
   * Возвращает элемент по его индексу.
   * @param index item index/ индекс элемента
   */
  getItemByIndex(e) {
    const n = this.map.value.findIndex((s) => s.index === e);
    if (n !== -1)
      return {
        key: n,
        item: this.map.value[n]
      };
  }
  /**
   * Returns an item by its key.
   *
   * Возвращает элемент по его ключу.
   * @param key item key/ ключ элемента
   */
  getItemByKey(e) {
    var n;
    return (n = this.map.value) == null ? void 0 : n[e];
  }
  /**
   * Returns the first item with the specified parent.
   *
   * Возвращает первый элемент с указанным родителем.
   * @param parent parent identifier to search for / идентификатор родителя для поиска
   */
  getFirstItemByParent(e) {
    return this.map.value.find((n) => this.isInParent(e, n));
  }
  /**
   * Returns the last item with the specified parent.
   *
   * Возвращает последний элемент с указанным родителем.
   * @param parent parent identifier to search for / идентификатор родителя для поиска
   */
  getLastItemByParent(e) {
    return this.map.value.filter((n) => this.isInParent(e, n)).pop();
  }
  /**
   * Returns a sublist object for a group item.
   *
   * Возвращает объект подсписка для группового элемента.
   * @param item List item data/ данные элемента списка
   */
  getSubList(e) {
    return e.index in this.subList || (this.subList[e.index] = new bs(
      e.value,
      this.focus,
      this.highlight,
      this.highlightLengthStart,
      this.selected,
      this.keyValue,
      this.keyLabel,
      this.lite,
      e.index
    )), this.subList[e.index];
  }
  /**
   * Checks if the item is an item, group, or menu.
   *
   * Проверяет, является ли элемент элементом, группой или меню.
   * @param item List item data/ данные элемента списка
   */
  isItem(e) {
    return e.type === "item" || e.type === "group" || e.type === "menu";
  }
  /**
   * Checks if the item is in the specified parent.
   *
   * Проверяет, находится ли элемент в указанном родителе.
   * @param parent parent identifier to search for / идентификатор родителя для поиска
   * @param item List item data/ данные элемента списка
   */
  isInParent(e, n) {
    return n.parent === e && this.isItem(n);
  }
  /**
   * Returns the index for the list item.
   *
   * Возвращает индекс для элемента списка.
   * @param index current index / текущий индекс
   * @param value item value / значение элемента
   * @param key item key / ключ элемента
   * @param label item label / метка элемента
   */
  getIndex(e, n, s, r) {
    return e && !E(e) ? e : n && !E(n) ? n : s && r;
  }
  /**
   * Creates an object of the record element.
   *
   * Создает объект элемента записи.
   * @param key the value of the key in the element/ значения ключа у элемента
   * @param item selected element/ выбранный элемент
   */
  initItem(e, n) {
    var s, r;
    if (x(n)) {
      const o = n == null ? void 0 : n[((s = this.keyValue) == null ? void 0 : s.value) ?? "value"], i = (n == null ? void 0 : n[((r = this.keyLabel) == null ? void 0 : r.value) ?? "label"]) ?? o, u = this.getIndex(
        n == null ? void 0 : n.index,
        o,
        e,
        i
      );
      return {
        ...n,
        parent: this.parent,
        index: u,
        type: (n == null ? void 0 : n.type) ?? "item",
        label: i,
        value: o
      };
    }
    return {
      parent: this.parent,
      index: e.toString(),
      type: "item",
      label: n,
      value: e
    };
  }
}
class Mo {
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
h(Mo, "router");
function vo(t, e, n) {
  var s;
  return ((s = G(t)) == null ? void 0 : s[e]) ?? n;
}
function ko(t, e, n) {
  const s = G(t);
  if (s) {
    const r = vo(s, e);
    if (E(r) && E(n))
      k(n, (o, i) => {
        r[i] = ee(o);
      });
    else {
      const o = ee(n);
      !(e in s) && typeof o == "string" ? s.setAttribute(e.toString(), o) : s[e] = ee(n);
    }
  }
  return s;
}
function _n(t, e = "div", n, s) {
  if (!v())
    return;
  const r = document.createElement(e);
  return typeof n == "function" ? n(r) : x(n) && k(n, (o, i) => {
    ko(r, i, o);
  }), t == null || t.insertBefore(r, s ?? null), r;
}
const He = class He {
  /**
   * Constructor
   */
  constructor() {
    h(this, "item", W());
    h(this, "is", p(() => this.item.value !== void 0));
    He.is().then((e) => {
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
    return _n(document.body, "div", (e) => {
      e.style.height = "24px", e.style.overflowY = "scroll", e.style.position = "fixed", e.style.width = "100%", _n(e, "div", (n) => {
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
h(He, "storage", new et("scrollbar", !0)), h(He, "calculate", !1);
let Zt = He;
const $o = [
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v"
], bo = (t, e = {}) => {
  let n = String(t);
  if (t.match(/%[a-z]/)) {
    let s = 0;
    k(e, (r) => {
      n = n.replace(new RegExp(`%${$o[s++]}`, "g"), String(r));
    });
  } else
    k(e, (s, r) => {
      n = n.replace(new RegExp(`\\[${r}\\]`, "g"), String(s));
    });
  return n;
}, q = class q {
  /**
   * Getting the translation text by its code.
   *
   * Получение текста перевода по его коду.
   * @param name code name/ название кода
   * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
   */
  static async get(e, n) {
    var r;
    const s = this.getName(e);
    return s in this.data ? this.replacement(this.data[s], n) : (ye.isLocalhost() || await this.add(e), this.replacement(((r = this.data) == null ? void 0 : r[s]) ?? e));
  }
  /**
   * Getting the translation text by its code (Sync).
   *
   * Получение текста перевода по его коду (Sync).
   * @param name code name/ название кода
   * @param first If set to false, returns an empty string if there is no text/
   * если установлено false, возвращает пустую строку, если нет текста
   * @param replacement If set, replaces the text with the specified values/
   * если установлено, заменяет текст на указанные значения
   */
  static getSync(e, n = !1, s) {
    const r = this.getName(e);
    return r in this.data ? this.replacement(this.data[r], s) : n ? " " : e;
  }
  /**
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getList(e) {
    return new Promise((n) => {
      const s = {};
      let r = 0;
      for (const o of e) {
        const i = Array.isArray(o) ? o[0] : o, u = Array.isArray(o) ? o.slice(1) : void 0;
        this.get(i, u).then((c) => {
          s[i] = c, ++r >= e.length && n(s);
        });
      }
    });
  }
  /**
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations/ список кодов для получения переводов
   * @param first If set to false, returns an empty string if there is no text/
   * если установлено false, возвращает пустую строку, если нет текста
   */
  static getListSync(e, n = !1) {
    const s = {};
    for (const r of e) {
      const o = Array.isArray(r) ? r[0] : r, i = Array.isArray(r) ? r.slice(1) : void 0;
      s[o] = this.getSync(o, n, i);
    }
    return s;
  }
  /**
   * Added a list of translated texts.
   *
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static add(e) {
    return new Promise((n) => {
      this.getNamesNone(e).length > 0 ? (this.cache.push(...this.getNamesNone(e)), this.resolveList.push(n), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.timeout = void 0, this.make().then(() => {
          this.resolveList.forEach((r) => r()), this.resolveList = [];
        });
      }, 160)) : n();
    });
  }
  /**
   * Adds texts in sync mode.
   *
   * Добавляет тексты в режиме синхронизации.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static addSync(e) {
    k(e, (n, s) => {
      Ne(n) && U(n) && (this.data[this.getName(s)] = n);
    });
  }
  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static async addNormalOrSync(e) {
    if (U(e))
      if (ye.isLocalhost())
        this.addSync(e);
      else {
        const n = Object.keys(e);
        n.length > 0 && await this.add(n);
      }
  }
  /**
   * Change the path to the script for obtaining the translation.
   *
   * Изменить путь к скрипту для получения перевода.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(e) {
    return this.url = e, q;
  }
  static setPropsName(e) {
    return this.propsName = e, this;
  }
  /**
   * Getting the full title for translation.
   *
   * Получение полного названия для перевода.
   * @param name code name/ название кода
   */
  static getName(e) {
    return `${w.getLocation()}-${e}`;
  }
  /**
   * Returns a list of names that are not yet in the list.
   *
   * Возвращает список имен, которых еще нет в списке.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getNamesNone(e) {
    const n = [];
    return ae(e).forEach((s) => {
      s !== "__TRANSLATE_START__" && s !== "__TRANSLATE_END__" && !(this.getName(s) in this.data) && n.push(s);
    }), n;
  }
  /**
   * Getting the list of translations from the server.
   *
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    return await ye.get({
      api: !1,
      path: this.url,
      request: {
        [this.propsName]: this.cache
      },
      toData: !0,
      global: !0
    }) ?? {};
  }
  /**
   * Replaces the text with the specified values.
   *
   * Заменяет текст на указанные значения.
   * @param text text to replace/ текст для замены
   * @param replacement values for replacement/ значения для замены
   */
  static replacement(e, n) {
    return n ? bo(e, n) : e;
  }
  /**
   * Adding translation data from the server.
   *
   * Добавление данных по переводу с сервера.
   */
  static async make() {
    const e = await this.getResponse();
    this.cache.forEach((n) => {
      this.data[this.getName(n)] = (e == null ? void 0 : e[n]) ?? "";
    }), this.cache = [];
  }
};
h(q, "url", "/api/translate"), h(q, "propsName", "list"), h(q, "data", {}), h(q, "cache", []), h(q, "resolveList", []), h(q, "timeout");
let gt = q;
function hn(t) {
  return Array.isArray(t);
}
class So {
  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param watch data for tracking/ данные для слежения
   */
  constructor(e, n = Object.keys(e)) {
    h(this, "cache", {});
    this.props = e, this.watch = n;
  }
  /**
   * Checks if the value has been updated.
   *
   * Проверяет, обновлено ли значение.
   * @param name property name/ название свойства
   */
  is(e) {
    return hn(e) ? !!e.find((n) => this.isDifferent(n)) : this.isDifferent(e);
  }
  /**
   * Checks if there are changes in the data.
   *
   * Проверяет, есть ли изменения в данных.
   */
  isChanged() {
    const e = this.props;
    return !!this.watch.find((n) => n in e && this.isDifferent(n));
  }
  /**
   * Updates all values.
   *
   * Обновляет все значения.
   */
  update() {
    const e = this.props;
    this.watch.forEach((n) => {
      n in e && this.isDifferent(n) && (this.cache[n] = e[n]);
    });
  }
  /**
   * Checking additional data.
   *
   * Проверка дополнительных данных.
   * @param name property name/ название свойства
   */
  isDifferent(e) {
    var n, s;
    return ((n = this.cache) == null ? void 0 : n[e]) !== ((s = this.props) == null ? void 0 : s[e]);
  }
}
class Eo {
  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param callback callback function when the value changes/
   * функция обратного вызова при изменении значения
   * @param changed base data/ данный для слежения
   */
  constructor(e, n, s) {
    h(this, "event", {});
    h(this, "changed");
    this.props = e, this.callback = n, this.changed = new So(e, s);
  }
  /**
   * Calls the callback function.
   *
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update/ вынуждает обновлять данные
   */
  make(e) {
    return this.makeCallback(e), this;
  }
  /**
   * Checks if there are values in the property.
   *
   * Проверяет, есть ли значения в свойстве.
   * @param name property names/ названия свойств
   */
  is(e) {
    return e in this.props;
  }
  /**
   * Checks if the value has been changed by the property name.
   *
   * Проверяет, было ли изменено значение по названию свойства.
   * @param name property names/ названия свойств
   * @param nameProp names of properties of the input variable/ названия свойств входной переменной
   */
  isChanged(e, n) {
    return !(e in this.event) || this.changed.is(n || e);
  }
  /**
   * Calls the callback function.
   *
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update/ вынуждает обновлять данные
   */
  makeCallback(e = !1) {
    (e || this.changed.isChanged()) && (this.initEvent(), this.makeCallbackItem(), this.changed.update());
  }
  /**
   * The function calls an image call.
   *
   * Функция вызывает образный вызов.
   */
  makeCallbackItem() {
    this.callback && this.callback(this.event);
  }
}
class Uo extends Eo {
  /**
   * Calls the callback function.
   *
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update/ вынуждает обновлять данные
   */
  make(e) {
    return this.makeCallback(e).then(), this;
  }
  /**
   * Calls the callback function.
   *
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update/ вынуждает обновлять данные
   */
  async makeCallback(e) {
    (e || this.changed.isChanged()) && (await this.initEvent(), this.makeCallbackItem(), this.changed.update());
  }
}
function Ao(t) {
  return t && "class" in t && typeof t.class == "string" ? t.class : void 0;
}
function wo(t, e, n) {
  const s = Ao(e);
  return n && s ? `${n}.${s}` : n || s || t;
}
function _o(t, e, n, s) {
  const r = wo(t, e, s);
  return uo(t, { key: r, ...e }, n);
}
function Jt(t, e) {
  const n = t == null ? void 0 : t.class, s = e == null ? void 0 : e.class, r = t == null ? void 0 : t.style, o = e == null ? void 0 : e.style, i = {
    ...t,
    ...e
  };
  return n && s && (i.class = [], n && i.class.push(n), s && i.class.push(s)), r && o && (i.style = [], r && i.style.push(r), o && i.style.push(o)), i;
}
function No(...t) {
  let e = {};
  return t.forEach((n) => {
    n && (e = Jt(e, n));
  }), e;
}
class Ss {
  /**
   * Constructor
   * @param components list of connected components/ список подключенных компонентов
   * @param modification data for modification/ данные для модификации
   */
  constructor(e = {}, n) {
    /** Cache for computed properties/ Кэш для вычисляемых свойств */
    h(this, "caching", {});
    this.components = e, this.modification = n;
  }
  /**
   * Check the presence of the component.
   *
   * Проверить наличие компонента.
   * @param name name of the component/ названия компонента
   */
  is(e) {
    return e in this.components;
  }
  /**
   * Getting the object of the component.
   *
   * Получение объекта компонента.
   * @param name name of the component/ названия компонента
   */
  get(e) {
    var n;
    return (n = this.components) == null ? void 0 : n[e];
  }
  /**
   * Returns the modified input data of the connected components.
   *
   * Возвращает модифицированные входные данные у подключенных компонентов.
   * @param index the name of this/ название данного
   * @param props basic data/ базовые данные
   */
  getModification(e, n) {
    return e ? (e in this.caching || (this.caching[e] = p(() => this.computeModification(e))), n ? No(this.caching[e].value, n) : this.caching[e].value) : n;
  }
  /**
   * Rendering a component by its name and returning an array with one component.
   *
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component/ названия компонента
   * @param props property of the component/ свойство компонента
   * @param children sub-elements of the component/ под элементы компонента
   * @param index the name of the key/ названия ключа
   */
  render(e, n, s, r) {
    const o = this.renderOne(
      e,
      n,
      s,
      r
    );
    return o ? [o] : [];
  }
  /**
   * Rendering a component by its name.
   *
   * Рендеринг компонента по его имени.
   * @param name name of the component/ названия компонента
   * @param props property of the component/ свойство компонента
   * @param children sub-elements of the component/ под элементы компонента
   * @param index the name of the key/ названия ключа
   */
  renderOne(e, n, s, r) {
    if (this.is(e)) {
      const o = r ?? e;
      return _o(
        this.get(e),
        this.getModification(o, n),
        s,
        o
      );
    }
  }
  /**
   * Rendering the component by its name.
   *
   * Рендеринг компонента по его имени.
   * @param item an array to which the rendered object will be added/
   * массив, по которому будет добавлять объект
   * @param name name of the component/ названия компонента
   * @param props property of the component/ свойство компонента
   * @param children sub-elements of the component/ под элементы компонента
   * @param index the name of the key/ названия ключа
   */
  renderAdd(e, n, s, r, o) {
    return e.push(...this.render(n, s, r, o)), this;
  }
  /**
   * Calculates modified input data for connected components.
   *
   * Вычисляет модифицированные входные данные для подключенных компонентов.
   * @param index the name of this/ название данного
   */
  computeModification(e) {
    var s;
    const n = $((s = this.modification) == null ? void 0 : s[e]);
    if (n && x(n)) {
      const r = {};
      return k(n, (o, i) => {
        r[i] = $(o);
      }), r;
    }
    return {};
  }
}
class Go extends Ss {
}
function Es(t) {
  return t.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (e) => `${e.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...e) => `${e[1].toUpperCase()}`).replace(/^([A-Z])/, (e) => `${e.toLowerCase()}`);
}
class Yo {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(e, n, s) {
    h(this, "name");
    h(this, "element", W());
    h(this, "refs");
    h(this, "components");
    h(this, "emits");
    h(this, "classes");
    h(this, "classesSub");
    h(this, "styles");
    h(this, "stylesSub");
    h(this, "attrs");
    h(this, "slots");
    h(this, "dataExpose");
    this.props = n, this.options = s, this.name = this.initName(e), this.refs = this.props ? fr(this.props) : {}, this.components = new Ss(s == null ? void 0 : s.components, s == null ? void 0 : s.compMod), this.emits = s == null ? void 0 : s.emits, this.classes = p(() => this.updateClasses()), this.styles = p(() => this.updateStyles()), this.attrs = Br(), this.slots = Fr();
  }
  init() {
    return this.classesSub = p(() => this.initClasses()), this.stylesSub = p(() => this.initStyles()), this.dataExpose = this.initExpose(), this;
  }
  /**
   * Getting the class name.
   *
   * Получение названия класса.
   */
  getName() {
    return this.name.join("-");
  }
  /**
   * Getting the class name.
   *
   * Получение названия дизайна.
   */
  getDesign() {
    return this.name[0];
  }
  /**
   * Getting the class name.
   *
   * Получение названия класса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getSubClass(e) {
    return `${this.getName()}__${ae(e).join("__")}`;
  }
  /**
   * Getting the class name for the status.
   *
   * Получение названия класса для статуса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStatusClass(e) {
    return `${this.getName()}--${ae(e).join("--")}`;
  }
  /**
   * Getting the property name for the style.
   *
   * Получение названия свойства для стиля.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStyle(e) {
    return `--${this.getName()}-sys-${ae(e).join("-")}`;
  }
  /**
   * Getting additional parameters.
   *
   * Получение дополнительных параметров.
   */
  getAttrs() {
    const e = { ...this.attrs ?? {} };
    return "class" in e && delete e.class, "style" in e && delete e.style, e;
  }
  /**
   * List of available external variables.
   *
   * Список доступных переменных извне.
   */
  expose() {
    return this.dataExpose ?? {};
  }
  /**
   * The rendering method for the setup method.
   *
   * Метод рендеринга для метода настройки.
   */
  render() {
    return () => this.initRender();
  }
  /**
   * Initializes the slot.
   *
   * Инициализирует слот.
   * @param name slot name/ название слота
   * @param children if you pass this element, the slot will be added to it/
   * если передать этот элемент, то слот добавится в него
   * @param props property for the slot/ свойство для слота
   */
  initSlot(e, n, s = {}) {
    var r;
    if (this.slots && ((r = this.slots) != null && r[e]) && typeof this.slots[e] == "function") {
      const o = this.slots[e](s);
      return n && n.push(o), o;
    }
  }
  /**
   * Transformation of the class value into an object.
   *
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation/ список классов для преобразования
   */
  toClass(e) {
    return x(e) ? e : Array.isArray(e) ? { [e.filter((s) => typeof s == "string" && s.trim() !== "").join(" ")]: !0 } : typeof e == "string" ? { [e]: !0 } : {};
  }
  /**
   * Converts the class name to standard for the current component.
   *
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes/ список классов
   */
  toClassName(e) {
    if (E(e)) {
      const n = {};
      return k(e, (s, r) => {
        r.match(/\?\?/) ? n[r.replace(/\?\?/, this.getName())] = s : r.match(/\?/) ? n[r.replace(/\?/, this.name[0])] = s : n[r] = s;
      }), n;
    }
    return {};
  }
  /**
   * Getting component names as an array.
   *
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation/ название компонента для преобразования
   */
  initName(e) {
    return k(e.split(".", 2), (n) => Es(n));
  }
  /**
   * Updating data about the class.
   *
   * Обновление данных об классе.
   */
  updateClasses() {
    var s, r, o, i;
    const e = (s = this.classesSub) == null ? void 0 : s.value, n = (o = (r = this.options) == null ? void 0 : r.classes) == null ? void 0 : o.value;
    return e && n ? {
      ...e,
      ...n,
      main: {
        ...this.toClass(e == null ? void 0 : e.main),
        ...this.toClass(n == null ? void 0 : n.main),
        ...this.toClass((i = this.attrs) == null ? void 0 : i.class)
      }
    } : n ?? {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  updateStyles() {
    var s, r, o;
    const e = (s = this.stylesSub) == null ? void 0 : s.value, n = (o = (r = this.options) == null ? void 0 : r.styles) == null ? void 0 : o.value;
    return e && n ? {
      ...e,
      ...n
    } : n ?? {};
  }
}
function ue(t) {
  return _(t) ? t : W(t);
}
class Zo {
  /**
   * Constructor
   * @param date date for processing. дата для обработки
   * @param type type of date format for output. тип формата даты вывода
   * @param code country and language code. код страны и языка
   */
  constructor(e, n = "date", s = w.getLocation()) {
    h(this, "item");
    h(this, "type");
    h(this, "code");
    h(this, "date");
    h(this, "datetime");
    h(this, "year", p(() => this.date.value && this.datetime.getYear()));
    h(this, "month", p(() => this.date.value && this.datetime.getMonth()));
    h(this, "day", p(() => this.date.value && this.datetime.getDay()));
    h(this, "hour", p(() => this.date.value && this.datetime.getHour()));
    h(this, "minute", p(() => this.date.value && this.datetime.getMinute()));
    h(this, "second", p(() => this.date.value && this.datetime.getSecond()));
    this.item = ue(e), this.type = ue(n), this.code = ue(s), this.date = W(X(this.item.value)), this.datetime = new ln(
      this.date.value,
      this.type.value,
      this.code.value
    ), O(this.item, (r) => {
      this.date.value = X(r);
    }), O(this.type, (r) => this.datetime.setType(r)), O(this.code, (r) => this.datetime.setCode(r)), O(this.date, (r) => this.datetime.setDate(r)), this.datetime.setWatch(() => hr(this.date));
  }
  /**
   * Returns the basic data for the date.
   *
   * Возвращает основные данные для даты.
   */
  getItem() {
    return this.item;
  }
  /**
   * Returns a Date object.
   *
   * Возвращает объект Date.
   */
  getDate() {
    return this.date;
  }
  /**
   * Obtaining an object of the basic Datetime class.
   *
   * Получение объекта основного класса Datetime.
   */
  getDatetime() {
    return this.datetime;
  }
  /**
   * Returns the format of hours.
   *
   * Возвращает формат часов.
   */
  getHoursType() {
    return p(() => this.date.value && this.datetime.getHoursType());
  }
  /**
   * Returns the code of the first day of the week.
   *
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    return p(() => this.date.value && this.datetime.getFirstDayCode());
  }
  /**
   * The method returns the year of the specified date according to local time.
   *
   * Метод возвращает год указанной даты по местному времени.
   */
  getYear() {
    return this.year;
  }
  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.
   *
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth() {
    return this.month;
  }
  /**
   * The method returns the day of the month for the specified date according to local time.
   *
   * Метод возвращает день месяца указанной даты по местному времени.
   */
  getDay() {
    return this.day;
  }
  /**
   * The method returns the hour for the specified date, according to local time.
   *
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour() {
    return this.hour;
  }
  /**
   * The method returns the minutes in the specified date according to local time.
   *
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute() {
    return this.minute;
  }
  /**
   * The method returns the seconds in the specified date according to local time.
   *
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond() {
    return this.second;
  }
  /**
   * Returns the last day of the week.
   *
   * Возвращает последний день недели.
   */
  getMaxDay() {
    return p(() => this.date.value && this.datetime.getMaxDay());
  }
  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output. тип формата даты вывода
   * @param styleOptions the representation of the month. представление месяца
   */
  locale(e = this.type.value, n) {
    return p(() => this.date.value && this.datetime.locale(e, n));
  }
  /**
   * Output of standard data.
   *
   * Вывод стандартных данных.
   * @param timeZone add time zone. добавить временную зону
   */
  standard(e = !0) {
    return p(() => this.date.value && this.datetime.standard(e));
  }
}
class Jo extends Ut {
  /**
   * Classes Constructor
   * @param elementSelector element/ элемент
   * @param elementSelectorControl control element/ элемент управления
   * @param type type/ тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs/ объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics/ объект options
   * @param detail an event-dependent value associated with the event/ зависимое от события
   * значение, связанное с событием
   */
  constructor(e, n, s = ["click"], r, o, i) {
    const u = ue(e), c = ue(n);
    super(
      u.value,
      s,
      r,
      o,
      i
    ), c.value && this.setElementControl(c.value), O(u, (f) => this.setElement(f)), O(c, (f) => this.setElementControl(f));
  }
}
class qo {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(e = w.getLocation()) {
    h(this, "code");
    h(this, "flag");
    this.code = ue(e), this.flag = new Yt(this.code.value), O(this.code, (n) => this.flag.setCode(n));
  }
  /**
   * Obtaining a reactive object with the country code.
   *
   * Получение реактивного объекта с кодом страны.
   */
  getCode() {
    return this.code;
  }
  /**
   * Returns information about the country and its flag.
   *
   * Возвращает информацию о стране и её флаге.
   * @param code country code/ код страны
   */
  get(e = this.code.value) {
    return p(() => this.flag.get(e));
  }
  /**
   * Getting a link to the flag.
   *
   * Получение ссылки на флаг.
   * @param code country code/ код страны
   */
  getFlag(e = this.code.value) {
    return p(() => {
      var n;
      return (n = this.flag.get(e)) == null ? void 0 : n.icon;
    });
  }
  /**
   * Getting a list of countries by an array of codes.
   *
   * Получение списка стран по массиву с кодами.
   * @param codes country code/ код страны
   */
  getList(e) {
    return p(() => this.flag.getList(e));
  }
  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code/ код страны.
   */
  getNational(e) {
    return p(() => this.flag.getNational(e));
  }
}
const V = class V {
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
    w.set(e, !0), this.item.value = w.getItem();
  }
};
h(V, "item", Qe(w.get())), h(V, "country", p(() => V.item.value.country)), h(V, "language", p(() => V.item.value.language)), h(V, "standard", p(() => V.item.value.standard)), h(V, "firstDay", p(() => V.item.value.firstDay));
let dt = V;
class zo {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(e) {
    h(this, "location");
    h(this, "intl");
    this.location = ue(e), this.intl = p(() => new vt(this.location.value ?? dt.getLanguage().value));
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
    return p(() => this.intl.value.display($(e), n));
  }
  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  languageName(e, n) {
    return p(() => this.intl.value.languageName($(e), n));
  }
  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(e, n) {
    return p(() => this.intl.value.countryName($(e), n));
  }
  /**
   * In basic use without specifying a locale, a formatted string.
   *
   * При обычном использовании без указания локали форматированная строка
   *
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми
   * или всеми свойствами
   */
  number(e, n) {
    return p(() => this.intl.value.number($(e), n));
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    return p(() => this.intl.value.decimal());
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
    return p(
      () => this.intl.value.currency(
        $(e),
        $(n),
        s
      )
    );
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
    return p(() => this.intl.value.unit($(e), n));
  }
  /**
   * Number as a percentage.
   *
   * Число в виде процента.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  percent(e, n) {
    return p(() => this.intl.value.percent($(e), n));
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
    return p(() => this.intl.value.percentBy100($(e), n));
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
  date(e, n, s, r) {
    return p(() => this.intl.value.date($(e), n, s, r));
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
    return p(() => this.intl.value.relative($(e), n, s));
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
  relativeLimit(e, n, s, r, o, i, u) {
    return p(() => this.intl.value.relativeLimit(
      $(e),
      n,
      s,
      r,
      o,
      i,
      u
    ));
  }
  /**
   * Names of months.
   *
   * Названия месяцев.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the month/ представление месяца
   */
  month(e, n) {
    return p(() => this.intl.value.month($(e), n));
  }
  /**
   * Array to list of months.
   *
   * Массив в список месяцев.
   * @param style the representation of the month/ представление месяца
   */
  months(e) {
    return p(() => this.intl.value.months(e));
  }
  /**
   * Returns names of days of the week.
   *
   * Возвращает названия дней недели.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekday(e, n) {
    return p(() => this.intl.value.weekday($(e), n));
  }
  /**
   * An array of the list of names of the days of the week.
   *
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekdays(e) {
    return p(() => this.intl.value.weekdays(e));
  }
  /**
   * Time.
   *
   * Время.
   * @param value the date to format/ дата для форматирования
   */
  time(e) {
    return p(() => this.intl.value.time($(e)));
  }
}
const Lo = (t) => typeof t == "string" ? { method: t } : t || {};
let yt;
function Qo(t, e, n = !0, s, r, o) {
  const i = W(), u = ue(Lo(e)), c = W(!1), f = W(!1);
  let d = !0, l = 0;
  const g = async () => {
    if (d)
      return;
    const M = $(t);
    if ((!s || s.value) && M) {
      c.value = !0, f.value = !0;
      let z = {};
      const le = await ye.request({
        path: M,
        ...u.value
      });
      le && (z = le), r ? i.value = r(z) : i.value = z, c.value = !1;
    } else i.value !== void 0 && (i.value = void 0);
  }, y = () => {
    const M = [];
    n && M.push(u), _(t) && M.push(t), s && M.push(s), yt && M.push(yt), M.length > 0 && O(M, async () => {
      c.value || await g();
    });
  };
  return {
    get data() {
      return d && (d = !1, g().then()), y(), o && (l++, Ht(() => {
        l--, l < 1 && (console.warn("useApiRef: unmounted"), i.value = void 0, d = !0, l = 0);
      })), i;
    },
    get isStarting() {
      return p(() => i.value === void 0);
    },
    loading: c,
    get reading() {
      return p(() => f.value);
    },
    reset: g
  };
}
const Xo = (t) => {
  yt || (yt = t);
};
function ei(t, e, n) {
  if (t in Tt)
    return Tt[t];
  const s = new Co(t), r = W(s.get(e, n));
  return O(r, (o) => {
    s.set(o, n);
  }), Tt[t] = r, r;
}
const Tt = {};
function ti() {
  return new zo();
}
function ni(t, e) {
  if (t in It)
    return It[t];
  const n = Qe(Be.get(t, e));
  return O(n, (s) => Be.set(t, s)), Be.addWatch(t, (s) => {
    n.value = s;
  }), It[t] = n, n;
}
const It = {};
let Nn = Je(1e5, 9e5);
function ut(t, e) {
  const n = G(t);
  return n ? (U(n.id) || n.setAttribute("id", `id-${Nn++}`), e ? `#${n.id}${e}`.trim() : n.id) : `id-${Nn++}`;
}
const si = () => {
  const t = {}, e = "IntersectionObserver" in window ? new IntersectionObserver(
    (s) => {
      s.forEach((r) => {
        const o = ut(r.target);
        o in t && (t[o].status.value = r.isIntersecting);
      });
    },
    {
      rootMargin: "128px 0px"
    }
  ) : void 0, n = (s) => {
    if (s) {
      const r = ut(s);
      r in t && (e == null || e.unobserve(s), t[r].stopWatch(), delete t[r]);
    }
  };
  return {
    intersectionObserver: e,
    /**
     * Adding an element for tracking.
     *
     * Добавление элемента для отслеживания.
     * @param element element for tracking/ элемента для отслеживания
     */
    addLazyItem(s) {
      const r = Qe(!e);
      if (e) {
        const o = O(s, (i, u) => {
          if (u && e.unobserve(u), s.value) {
            const c = ut(s.value);
            t[c] = {
              status: r,
              stopWatch: o
            }, e.observe(s.value);
          } else
            n(s.value);
        }, { immediate: !0 });
      }
      return r;
    },
    /**
     * Removing an element from tracking.
     *
     * Удаление элемента из отслеживания.
     */
    removeLazyItem: n,
    /**
     * Removing all elements from tracking.
     *
     * Удаление всех элементов из отслеживания.
     */
    disconnectLazy: () => e == null ? void 0 : e.disconnect()
  };
};
function ri() {
  const t = Qe(Q.is());
  return Q.registrationEvent(({ detail: e }) => {
    t.value = e.loading;
  }), t;
}
function oi(t, e) {
  if (t in Ot)
    return Ot[t];
  const n = new et(t, !0), s = W(n.get(e));
  return O(s, (r) => n.set(r)), Ot[t] = s, s;
}
const Ot = {};
function ii(t, e, n) {
  if (t in Rt)
    return Rt[t];
  const s = new et(t), r = W(s.get(e, n));
  return O(r, (o) => s.set(o)), Rt[t] = r, r;
}
const Rt = {};
function To(t) {
  const e = Qe(gt.getListSync(t, !0)), n = async () => {
    e.value = { ...await gt.getList(t) };
  };
  O(dt.getLanguage(), n);
  for (const s in e.value)
    if (e.value[s] === s || e.value[s] === " ") {
      n().then();
      break;
    }
  return e;
}
const ai = (t) => To(t);
function ui(t) {
  return Ne(t) ? t.trim() : hn(t) && t.findIndex((e) => E(e)) === -1 ? t.join(", ") : E(t) ? JSON.stringify(t) : t === !0 ? "1" : (t == null ? void 0 : t.toString()) ?? "";
}
function Io(t, e) {
  return Array(e).fill(t);
}
function ci(t) {
  if (v())
    return document.querySelector(t) ?? void 0;
}
function li(t) {
  if (v())
    return document.querySelectorAll(t);
}
function hi(t) {
  t.preventDefault(), t.stopPropagation();
}
const As = [], Oo = Je(1e5, 999999);
function fi(t, e = !0, n = !1, s = !0) {
  let r;
  const o = `__execute_use${Oo}::${ut()}`, i = (...u) => {
    if (!n && s) {
      const c = us(o, void 0);
      if (c)
        return c;
      {
        let f = Object.freeze(t(...u));
        return jr(o, f), e && Ht(() => {
          f = void 0;
        }), f;
      }
    } else r || (r = Object.freeze(t(...u)), e && Ht(() => {
      r = void 0;
    }));
    return r;
  };
  return n && As.push(i), i;
}
function pi() {
  As.forEach((t) => t());
}
function Ro(t, e, n) {
  const s = () => {
    t(), e != null && e() ? Ro(t, e, n) : n == null || n();
  };
  v() ? requestAnimationFrame(s) : s();
}
function gi(t) {
  const e = {}, n = G(t);
  if (n)
    for (const s of n.attributes)
      e[s.name] = ((s == null ? void 0 : s.value) || (s == null ? void 0 : s.textContent)) ?? void 0;
  return e;
}
async function di(t) {
  var e;
  return ((e = t == null ? void 0 : t.clipboardData) == null ? void 0 : e.getData("text")) ?? (await navigator.clipboard.readText() || "");
}
function Po(t, e) {
  const n = e.split(".", 2), s = n[0];
  return t != null && t[s] && x(t[s]) && (n != null && n[1]) ? Po(t[s], n[1]) : (t == null ? void 0 : t[s]) ?? "";
}
function yi(t) {
  var e;
  return (t == null ? void 0 : t.key) ?? (t == null ? void 0 : t.code) ?? ((e = t == null ? void 0 : t.keyCode) == null ? void 0 : e.toString());
}
function ws(t) {
  return k(t, (e) => e.length);
}
function mi(t) {
  return Math.max(...ws(t));
}
function Di(t) {
  return Math.min(...ws(t));
}
function xo(t) {
  var e, n;
  return (t == null ? void 0 : t.clientX) || ((e = t == null ? void 0 : t.targetTouches) == null ? void 0 : e[0].clientX) || ((n = t == null ? void 0 : t.touches) == null ? void 0 : n[0].clientX) || 0;
}
function Fo(t) {
  var e, n;
  return (t == null ? void 0 : t.clientY) || ((e = t == null ? void 0 : t.targetTouches) == null ? void 0 : e[0].clientY) || ((n = t == null ? void 0 : t.touches) == null ? void 0 : n[0].clientY) || 0;
}
function Ci(t) {
  return {
    x: xo(t),
    y: Fo(t)
  };
}
function Mi(t, e) {
  const n = {};
  return e.forEach((s) => {
    s in t && t[s] !== void 0 && (n[s] = t[s]);
  }), n;
}
function vi(t, e = void 0) {
  const n = {};
  return k(t, (s, r) => {
    s !== e && (n[r] = s);
  }), n;
}
function ki(t) {
  return x(t) ? t : {};
}
function Bo(t, e) {
  return Io(t, e).join("");
}
function $i(t, e, n = "#", s = 2, r = 12) {
  const o = Je(t, e), i = [];
  for (let u = 0; u < o; u++)
    i.push(Bo(n, Je(s, r)));
  return i.join(" ");
}
function bi(t, e) {
  const n = t ?? 0;
  return e > n ? 100 / (e - n) : 0;
}
function Si(t, e) {
  const n = t ?? 0;
  return e > n ? (e - n) / 100 : 0;
}
const zn = 0;
function Ei(t, e, n) {
  const s = e == null ? void 0 : e.closest(t);
  if (e && s && s.scrollHeight !== s.offsetHeight)
    if (n) {
      const r = n.getBoundingClientRect(), o = s.getBoundingClientRect(), i = e.getBoundingClientRect();
      s.scrollTop = e.offsetTop - (r.top - o.top) - (r.height / 2 - i.height / 2), s.scrollTop + s.offsetHeight < e.offsetTop + e.offsetHeight && (s.scrollTop = e.offsetTop + e.offsetHeight - s.offsetHeight);
    } else s.scrollTop > e.offsetTop ? s.scrollTop = e.offsetTop - zn : s.scrollTop + s.offsetHeight < e.offsetTop + e.offsetHeight && (s.scrollTop = e.offsetTop + e.offsetHeight - s.offsetHeight + zn);
}
function Ai(t, e) {
  return t.indexOf(e) !== -1;
}
async function wi() {
  if (v()) {
    const t = await Zt.get();
    document.body.style.setProperty("--sys-scrollbar-offset", `${t}px`);
  }
}
function _i(t, e) {
  const n = {};
  return E(t) && E(e) && k(t, (s, r) => {
    r in e && (n[r] = s);
  }), n;
}
function Ni(t, e) {
  let n = Object.keys(t).length !== Object.keys(e).length;
  return n || k(t, (s, r) => {
    s !== (e == null ? void 0 : e[r]) && (n = !0);
  }), n;
}
function zi(t) {
  switch (typeof t) {
    case "number":
      return !0;
    case "string":
      return !!t.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
    default:
      return !1;
  }
}
function Li(t, e) {
  const n = Math.floor(e);
  return t >= n && t < n + 1;
}
function Ti(t, e) {
  return Array.isArray(t) ? t.every((n) => we(n, e)) : we(t, e);
}
function Vo(t, e = {}, n = "value", s = !1) {
  const r = typeof e == "string", o = r ? e : n, i = r ? {} : e;
  return t ? t && x(t) && (o in t || s) ? Jt(i, t) : Jt(i, { [o]: t }) : r ? {} : { ...i };
}
function Ii(t, e = {}, n = "value") {
  return p(() => Vo($(t), $(e), n));
}
const Oi = (t, e) => {
  const n = W();
  let s = !0;
  const r = () => {
    s && (Gr(async () => {
      const o = $(await t());
      o !== e && (n.value = o);
    }), s = !1);
  };
  return p(() => (r(), n.value));
};
function Ri(t, e) {
  t.value !== e && (t.value = e);
}
function Pi(t) {
  let e;
  return p(() => (e || (e = t()), e.value));
}
function jo(t) {
  return [...new Set(t)];
}
function Re(t, e, n = !0) {
  const s = Ae(t);
  return E(t) && E(e) && k(
    e,
    (r, o) => {
      const i = t == null ? void 0 : t[o];
      E(i) && E(r) ? n && Array.isArray(i) && Array.isArray(r) ? s[o] = Ae(jo([...i, ...r])) : s[o] = Re(
        Array.isArray(i) ? { ...i } : i,
        r,
        n
      ) : s[o] = E(r) ? Ae(r) : r;
    }
  ), s;
}
function xi(t, e) {
  let n = t;
  return k(e, (s, r) => {
    n = n.replace($s(`[${r}]`), ee(s));
  }), n;
}
function Fi(t) {
  const e = j(t);
  if (e > 0) {
    const n = String(Math.floor(e / 60)).padStart(2, "0"), s = String(e % 60).padStart(2, "0");
    return `${n}:${s}`;
  }
  return "00:00";
}
function Bi(t, e, {
  multiple: n = !1,
  maxlength: s = 0,
  alwaysChange: r = !0,
  notEmpty: o = !1
}) {
  if (n) {
    if (hn(t)) {
      const i = t.indexOf(e), u = [...t];
      return i !== -1 ? (!o || u.length > 1) && u.splice(i, 1) : (!s || t.length < s) && u.push(e), u;
    }
    return t === e ? [] : t ? [t, e] : [e];
  }
  return r || t !== e ? e : t;
}
function Vi(t, e, n) {
  if (E(t) && E(e)) {
    if (n) {
      let s = {}, r = !1;
      return k(t, (o, i) => {
        !r && (n === i || n === o) ? (r = !0, s = Re(s, e)) : r ? s = Re(s, { [i]: o }) : s[i] = E(o) ? Ae(o) : o;
      }), r ? s : Re(t, e);
    }
    if (E(e))
      return Re(t, e);
  }
  return Ae(t);
}
function ji(t) {
  return Es(t).replace(/^([a-z])/, (e) => `${e.toUpperCase()}`);
}
function Hi(t) {
  return t.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (e) => `${e.toLowerCase()}`).replace(/^[A-Z]/, (e) => e.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (e) => `-${e.toLowerCase()}`).replace(/[A-Z]/g, (e) => e.toLowerCase());
}
function Wi(t, e, n, s) {
  const r = j(t), o = j(e);
  return e && o < r ? `${Ln(o, n, s)}+` : Ln(r, n, s);
}
const Ln = (t, e, n) => e ? new vt(n).number(t) : t;
function Ho(t, e) {
  return 1 / t * e;
}
function Ki(t, e) {
  return Ho(t, e) * 100;
}
async function Ui(t) {
  if (v())
    try {
      await navigator.clipboard.writeText(t);
    } catch {
      document == null || document.execCommand(t);
    }
}
export {
  ye as Api,
  go as ApiMethodItem,
  mo as Cache,
  yo as CacheItem,
  bn as CacheStatic,
  Co as Cookie,
  ks as CookieBlock,
  et as DataStorage,
  ln as Datetime,
  Zo as DatetimeRef,
  Eo as DesignAbstract,
  Uo as DesignAsyncAbstract,
  So as DesignChanged,
  Go as DesignComp,
  Ss as DesignComponents,
  Yo as DesignConstructorAbstract,
  Ut as EventItem,
  Jo as EventRef,
  a as GEO_FLAG_ICON_NAME,
  w as Geo,
  Yt as GeoFlag,
  qo as GeoFlagRef,
  vt as GeoIntl,
  zo as GeoIntlRef,
  Sn as GeoPhone,
  dt as GeoRef,
  Ko as Global,
  Be as Hash,
  wn as Icons,
  bs as ListData,
  Q as Loading,
  Mo as RouterItem,
  Zt as ScrollbarWidth,
  gt as Translate,
  ui as anyToString,
  bo as applyTemplate,
  Io as arrFill,
  Ae as copyObject,
  _n as createElement,
  ci as domQuerySelector,
  li as domQuerySelectorAll,
  hi as eventStopPropagation,
  ee as executeFunction,
  zs as executePromise,
  fi as executeUse,
  pi as executeUseGlobalInit,
  k as forEach,
  Ro as frame,
  gi as getAttributes,
  Vo as getBind,
  Ii as getBindRef,
  Ao as getClassName,
  di as getClipboardData,
  Gt as getColumn,
  Oi as getComputedAsync,
  G as getElement,
  ut as getElementId,
  vo as getElementItem,
  Dn as getElementOrWindow,
  $s as getExp,
  wo as getIndexForRender,
  Po as getItemByPath,
  yi as getKey,
  ws as getLengthOfAllArray,
  mi as getMaxLengthAllArray,
  Di as getMinLengthAllArray,
  Ci as getMouseClient,
  xo as getMouseClientX,
  Fo as getMouseClientY,
  Mi as getObjectByKeys,
  vi as getObjectNoUndefined,
  ki as getObjectOrNone,
  $i as getRandomText,
  $ as getRef,
  Cs as getRequestString,
  bi as getStepPercent,
  Si as getStepValue,
  Ei as goScroll,
  Ai as inArray,
  wi as initScrollbarOffset,
  _i as intersectKey,
  hn as isArray,
  Ni as isDifferent,
  v as isDomRuntime,
  U as isFilled,
  zi as isFloat,
  Tn as isFunction,
  ho as isInDom,
  Li as isIntegerBetween,
  Xe as isNull,
  Mn as isNumber,
  E as isObject,
  x as isObjectNotArray,
  we as isSelected,
  Ti as isSelectedByList,
  Ne as isString,
  Ms as isWindow,
  Je as random,
  _o as render,
  Re as replaceRecursive,
  xi as replaceTemplate,
  Fi as secondToTime,
  Xo as setApiRefGlobalConditions,
  ko as setElementItem,
  Ri as setRef,
  Bi as setValues,
  Vi as splice,
  Bo as strFill,
  ai as t,
  ae as toArray,
  Jt as toBind,
  No as toBinds,
  Es as toCamelCase,
  ji as toCamelCaseFirst,
  Pi as toComputed,
  X as toDate,
  Hi as toKebabCase,
  j as toNumber,
  Wi as toNumberByMax,
  Ho as toPercent,
  Ki as toPercentBy100,
  ue as toRefItem,
  vs as transformation,
  jo as uniqueArray,
  Qo as useApiRef,
  ei as useCookieRef,
  ti as useGeoIntlRef,
  ni as useHashRef,
  si as useLazyRef,
  ri as useLoadingRef,
  oi as useSessionRef,
  ii as useStorageRef,
  To as useTranslateRef,
  Ui as writeClipboardData
};
