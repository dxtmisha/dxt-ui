var yr = Object.defineProperty;
var vr = (t, e, n) => e in t ? yr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var x = (t, e, n) => vr(t, typeof e != "symbol" ? e + "" : e, n);
function wo(t) {
  return t instanceof Function || typeof t == "function";
}
function ge(t) {
  return wo(t) ? t() : t;
}
async function xr(t) {
  const e = ge(t);
  return e instanceof Promise ? await e : e;
}
function at(t) {
  return !!(t && typeof t == "object");
}
function De(t, e) {
  if (at(t)) {
    const n = [];
    return t instanceof Map ? t.forEach((r, s) => n.push(e(r, s, t))) : Array.isArray(t) ? t.forEach((r, s) => n.push(e(r, s, t))) : Object.entries(t).forEach(
      ([r, s]) => n.push(e(s, r, t))
    ), n.filter((r) => r !== void 0);
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
function jr(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const qt = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Do = () => {
}, kr = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Pe = Object.assign, br = Object.prototype.hasOwnProperty, Kt = (t, e) => br.call(t, e), U = Array.isArray, tt = (t) => Eo(t) === "[object Map]", Ee = (t) => typeof t == "function", me = (t) => typeof t == "string", dt = (t) => typeof t == "symbol", se = (t) => t !== null && typeof t == "object", _r = Object.prototype.toString, Eo = (t) => _r.call(t), Mo = (t) => Eo(t).slice(8, -1), nn = (t) => me(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Cr = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, wr = Cr((t) => t.charAt(0).toUpperCase() + t.slice(1)), We = (t, e) => !Object.is(t, e);
let Dn;
const Rt = () => Dn || (Dn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function on(t) {
  if (U(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], s = me(r) ? Sr(r) : on(r);
      if (s)
        for (const c in s)
          e[c] = s[c];
    }
    return e;
  } else if (me(t) || se(t))
    return t;
}
const Dr = /;(?![^(]*\))/g, Er = /:([^]+)/, Mr = /\/\*[^]*?\*\//g;
function Sr(t) {
  const e = {};
  return t.replace(Mr, "").split(Dr).forEach((n) => {
    if (n) {
      const r = n.split(Er);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function rn(t) {
  let e = "";
  if (me(t))
    e = t;
  else if (U(t))
    for (let n = 0; n < t.length; n++) {
      const r = rn(t[n]);
      r && (e += r + " ");
    }
  else if (se(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ye(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let L, So = 0, nt, ot;
function Ar(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = ot, ot = t;
    return;
  }
  t.next = nt, nt = t;
}
function sn() {
  So++;
}
function an() {
  if (--So > 0)
    return;
  if (ot) {
    let e = ot;
    for (ot = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; nt; ) {
    let e = nt;
    for (nt = void 0; e; ) {
      const n = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (r) {
          t || (t = r);
        }
      e = n;
    }
  }
  if (t) throw t;
}
function Tr(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Rr(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), To(r), Nr(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  t.deps = e, t.depsTail = n;
}
function zr(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Ao(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Ao(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === ct) || (t.globalVersion = ct, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !zr(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = L, r = we;
  L = t, we = !0;
  try {
    Tr(t);
    const s = t.fn(t._value);
    (e.version === 0 || We(s, t._value)) && (t.flags |= 128, t._value = s, e.version++);
  } catch (s) {
    throw e.version++, s;
  } finally {
    L = n, we = r, Rr(t), t.flags &= -3;
  }
}
function To(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: s } = t;
  if (r && (r.nextSub = s, t.prevSub = void 0), s && (s.prevSub = r, t.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === t && (n.subsHead = s), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let c = n.computed.deps; c; c = c.nextDep)
      To(c, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function Nr(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let we = !0;
const Ro = [];
function zt() {
  Ro.push(we), we = !1;
}
function Nt() {
  const t = Ro.pop();
  we = t === void 0 ? !0 : t;
}
let ct = 0;
class Or {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class cn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!L || !we || L === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== L)
      n = this.activeLink = new Or(L, this), L.deps ? (n.prevDep = L.depsTail, L.depsTail.nextDep = n, L.depsTail = n) : L.deps = L.depsTail = n, zo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = L.depsTail, n.nextDep = void 0, L.depsTail.nextDep = n, L.depsTail = n, L.deps === n && (L.deps = r);
    }
    return process.env.NODE_ENV !== "production" && L.onTrack && L.onTrack(
      Pe(
        {
          effect: L
        },
        e
      )
    ), n;
  }
  trigger(e) {
    this.version++, ct++, this.notify(e);
  }
  notify(e) {
    sn();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Pe(
              {
                effect: n.sub
              },
              e
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      an();
    }
  }
}
function zo(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        zo(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), process.env.NODE_ENV !== "production" && t.dep.subsHead === void 0 && (t.dep.subsHead = t), t.dep.subs = t;
  }
}
const Xt = /* @__PURE__ */ new WeakMap(), Oe = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Gt = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), lt = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function K(t, e, n) {
  if (we && L) {
    let r = Xt.get(t);
    r || Xt.set(t, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new cn()), s.map = r, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: t,
      type: e,
      key: n
    }) : s.track();
  }
}
function _e(t, e, n, r, s, c) {
  const u = Xt.get(t);
  if (!u) {
    ct++;
    return;
  }
  const d = (g) => {
    g && (process.env.NODE_ENV !== "production" ? g.trigger({
      target: t,
      type: e,
      key: n,
      newValue: r,
      oldValue: s,
      oldTarget: c
    }) : g.trigger());
  };
  if (sn(), e === "clear")
    u.forEach(d);
  else {
    const g = U(t), j = g && nn(n);
    if (g && n === "length") {
      const _ = Number(r);
      u.forEach((f, b) => {
        (b === "length" || b === lt || !dt(b) && b >= _) && d(f);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && d(u.get(n)), j && d(u.get(lt)), e) {
        case "add":
          g ? j && d(u.get("length")) : (d(u.get(Oe)), tt(t) && d(u.get(Gt)));
          break;
        case "delete":
          g || (d(u.get(Oe)), tt(t) && d(u.get(Gt)));
          break;
        case "set":
          tt(t) && d(u.get(Oe));
          break;
      }
  }
  an();
}
function Fe(t) {
  const e = z(t);
  return e === t ? e : (K(e, "iterate", lt), ae(t) ? e : e.map(W));
}
function ln(t) {
  return K(t = z(t), "iterate", lt), t;
}
const Ir = {
  __proto__: null,
  [Symbol.iterator]() {
    return Lt(this, Symbol.iterator, W);
  },
  concat(...t) {
    return Fe(this).concat(
      ...t.map((e) => U(e) ? Fe(e) : e)
    );
  },
  entries() {
    return Lt(this, "entries", (t) => (t[1] = W(t[1]), t));
  },
  every(t, e) {
    return fe(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return fe(this, "filter", t, e, (n) => n.map(W), arguments);
  },
  find(t, e) {
    return fe(this, "find", t, e, W, arguments);
  },
  findIndex(t, e) {
    return fe(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return fe(this, "findLast", t, e, W, arguments);
  },
  findLastIndex(t, e) {
    return fe(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return fe(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return $t(this, "includes", t);
  },
  indexOf(...t) {
    return $t(this, "indexOf", t);
  },
  join(t) {
    return Fe(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return $t(this, "lastIndexOf", t);
  },
  map(t, e) {
    return fe(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Ge(this, "pop");
  },
  push(...t) {
    return Ge(this, "push", t);
  },
  reduce(t, ...e) {
    return En(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return En(this, "reduceRight", t, e);
  },
  shift() {
    return Ge(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return fe(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Ge(this, "splice", t);
  },
  toReversed() {
    return Fe(this).toReversed();
  },
  toSorted(t) {
    return Fe(this).toSorted(t);
  },
  toSpliced(...t) {
    return Fe(this).toSpliced(...t);
  },
  unshift(...t) {
    return Ge(this, "unshift", t);
  },
  values() {
    return Lt(this, "values", W);
  }
};
function Lt(t, e, n) {
  const r = ln(t), s = r[e]();
  return r !== t && !ae(t) && (s._next = s.next, s.next = () => {
    const c = s._next();
    return c.value && (c.value = n(c.value)), c;
  }), s;
}
const Pr = Array.prototype;
function fe(t, e, n, r, s, c) {
  const u = ln(t), d = u !== t && !ae(t), g = u[e];
  if (g !== Pr[e]) {
    const f = g.apply(t, c);
    return d ? W(f) : f;
  }
  let j = n;
  u !== t && (d ? j = function(f, b) {
    return n.call(this, W(f), b, t);
  } : n.length > 2 && (j = function(f, b) {
    return n.call(this, f, b, t);
  }));
  const _ = g.call(u, j, r);
  return d && s ? s(_) : _;
}
function En(t, e, n, r) {
  const s = ln(t);
  let c = n;
  return s !== t && (ae(t) ? n.length > 3 && (c = function(u, d, g) {
    return n.call(this, u, d, g, t);
  }) : c = function(u, d, g) {
    return n.call(this, u, W(d), g, t);
  }), s[e](c, ...r);
}
function $t(t, e, n) {
  const r = z(t);
  K(r, "iterate", lt);
  const s = r[e](...n);
  return (s === -1 || s === !1) && Dt(n[0]) ? (n[0] = z(n[0]), r[e](...n)) : s;
}
function Ge(t, e, n = []) {
  zt(), sn();
  const r = z(t)[e].apply(t, n);
  return an(), Nt(), r;
}
const Lr = /* @__PURE__ */ jr("__proto__,__v_isRef,__isVue"), No = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(dt)
);
function $r(t) {
  dt(t) || (t = String(t));
  const e = z(this);
  return K(e, "has", t), e.hasOwnProperty(t);
}
class Oo {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, r) {
    if (n === "__v_skip") return e.__v_skip;
    const s = this._isReadonly, c = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return c;
    if (n === "__v_raw")
      return r === (s ? c ? Xr : Lo : c ? Kr : Po).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = U(e);
    if (!s) {
      let g;
      if (u && (g = Ir[n]))
        return g;
      if (n === "hasOwnProperty")
        return $r;
    }
    const d = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ue(e) ? e : r
    );
    return (dt(n) ? No.has(n) : Lr(n)) || (s || K(e, "get", n), c) ? d : ue(d) ? u && nn(n) ? d : d.value : se(d) ? s ? Fo(d) : $o(d) : d;
  }
}
class Fr extends Oo {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, s) {
    let c = e[n];
    if (!this._isShallow) {
      const g = ye(c);
      if (!ae(r) && !ye(r) && (c = z(c), r = z(r)), !U(e) && ue(c) && !ue(r))
        return g ? !1 : (c.value = r, !0);
    }
    const u = U(e) && nn(n) ? Number(n) < e.length : Kt(e, n), d = Reflect.set(
      e,
      n,
      r,
      ue(e) ? e : s
    );
    return e === z(s) && (u ? We(r, c) && _e(e, "set", n, r, c) : _e(e, "add", n, r)), d;
  }
  deleteProperty(e, n) {
    const r = Kt(e, n), s = e[n], c = Reflect.deleteProperty(e, n);
    return c && r && _e(e, "delete", n, void 0, s), c;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!dt(n) || !No.has(n)) && K(e, "has", n), r;
  }
  ownKeys(e) {
    return K(
      e,
      "iterate",
      U(e) ? "length" : Oe
    ), Reflect.ownKeys(e);
  }
}
class Vr extends Oo {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && Ye(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && Ye(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const Ur = /* @__PURE__ */ new Fr(), Br = /* @__PURE__ */ new Vr(), Jt = (t) => t, xt = (t) => Reflect.getPrototypeOf(t);
function Wr(t, e, n) {
  return function(...r) {
    const s = this.__v_raw, c = z(s), u = tt(c), d = t === "entries" || t === Symbol.iterator && u, g = t === "keys" && u, j = s[t](...r), _ = n ? Jt : e ? Zt : W;
    return !e && K(
      c,
      "iterate",
      g ? Gt : Oe
    ), {
      // iterator protocol
      next() {
        const { value: f, done: b } = j.next();
        return b ? { value: f, done: b } : {
          value: d ? [_(f[0]), _(f[1])] : _(f),
          done: b
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function jt(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      Ye(
        `${wr(t)} operation ${n}failed: target is readonly.`,
        z(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Hr(t, e) {
  const n = {
    get(s) {
      const c = this.__v_raw, u = z(c), d = z(s);
      t || (We(s, d) && K(u, "get", s), K(u, "get", d));
      const { has: g } = xt(u), j = e ? Jt : t ? Zt : W;
      if (g.call(u, s))
        return j(c.get(s));
      if (g.call(u, d))
        return j(c.get(d));
      c !== u && c.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !t && K(z(s), "iterate", Oe), Reflect.get(s, "size", s);
    },
    has(s) {
      const c = this.__v_raw, u = z(c), d = z(s);
      return t || (We(s, d) && K(u, "has", s), K(u, "has", d)), s === d ? c.has(s) : c.has(s) || c.has(d);
    },
    forEach(s, c) {
      const u = this, d = u.__v_raw, g = z(d), j = e ? Jt : t ? Zt : W;
      return !t && K(g, "iterate", Oe), d.forEach((_, f) => s.call(c, j(_), j(f), u));
    }
  };
  return Pe(
    n,
    t ? {
      add: jt("add"),
      set: jt("set"),
      delete: jt("delete"),
      clear: jt("clear")
    } : {
      add(s) {
        !e && !ae(s) && !ye(s) && (s = z(s));
        const c = z(this);
        return xt(c).has.call(c, s) || (c.add(s), _e(c, "add", s, s)), this;
      },
      set(s, c) {
        !e && !ae(c) && !ye(c) && (c = z(c));
        const u = z(this), { has: d, get: g } = xt(u);
        let j = d.call(u, s);
        j ? process.env.NODE_ENV !== "production" && Mn(u, d, s) : (s = z(s), j = d.call(u, s));
        const _ = g.call(u, s);
        return u.set(s, c), j ? We(c, _) && _e(u, "set", s, c, _) : _e(u, "add", s, c), this;
      },
      delete(s) {
        const c = z(this), { has: u, get: d } = xt(c);
        let g = u.call(c, s);
        g ? process.env.NODE_ENV !== "production" && Mn(c, u, s) : (s = z(s), g = u.call(c, s));
        const j = d ? d.call(c, s) : void 0, _ = c.delete(s);
        return g && _e(c, "delete", s, void 0, j), _;
      },
      clear() {
        const s = z(this), c = s.size !== 0, u = process.env.NODE_ENV !== "production" ? tt(s) ? new Map(s) : new Set(s) : void 0, d = s.clear();
        return c && _e(
          s,
          "clear",
          void 0,
          void 0,
          u
        ), d;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = Wr(s, t, e);
  }), n;
}
function Io(t, e) {
  const n = Hr(t, e);
  return (r, s, c) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? r : Reflect.get(
    Kt(n, s) && s in r ? n : r,
    s,
    c
  );
}
const Yr = {
  get: /* @__PURE__ */ Io(!1, !1)
}, qr = {
  get: /* @__PURE__ */ Io(!0, !1)
};
function Mn(t, e, n) {
  const r = z(n);
  if (r !== n && e.call(t, r)) {
    const s = Mo(t);
    Ye(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Po = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap();
function Gr(t) {
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
function Jr(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Gr(Mo(t));
}
function $o(t) {
  return ye(t) ? t : Vo(
    t,
    !1,
    Ur,
    Yr,
    Po
  );
}
function Fo(t) {
  return Vo(
    t,
    !0,
    Br,
    qr,
    Lo
  );
}
function Vo(t, e, n, r, s) {
  if (!se(t))
    return process.env.NODE_ENV !== "production" && Ye(
      `value cannot be made ${e ? "readonly" : "reactive"}: ${String(
        t
      )}`
    ), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const c = Jr(t);
  if (c === 0)
    return t;
  const u = s.get(t);
  if (u)
    return u;
  const d = new Proxy(
    t,
    c === 2 ? r : n
  );
  return s.set(t, d), d;
}
function Uo(t) {
  return ye(t) ? Uo(t.__v_raw) : !!(t && t.__v_isReactive);
}
function ye(t) {
  return !!(t && t.__v_isReadonly);
}
function ae(t) {
  return !!(t && t.__v_isShallow);
}
function Dt(t) {
  return t ? !!t.__v_raw : !1;
}
function z(t) {
  const e = t && t.__v_raw;
  return e ? z(e) : t;
}
const W = (t) => se(t) ? $o(t) : t, Zt = (t) => se(t) ? Fo(t) : t;
function ue(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function Zr(t) {
  return Bo(t, !1);
}
function Qr(t) {
  return Bo(t, !0);
}
function Bo(t, e) {
  return ue(t) ? t : new ei(t, e);
}
class ei {
  constructor(e, n) {
    this.dep = new cn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : z(e), this._value = n ? e : W(e), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || ae(e) || ye(e);
    e = r ? e : z(e), We(e, n) && (this._rawValue = e, this._value = r ? e : W(e), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: n
    }) : this.dep.trigger());
  }
}
class ti {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new cn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ct - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    L !== this)
      return Ar(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const e = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ao(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && Ye("Write operation failed: computed value is readonly");
  }
}
function ni(t, e, n = !1) {
  let r, s;
  Ee(t) ? r = t : (r = t.get, s = t.set);
  const c = new ti(r, s, n);
  return process.env.NODE_ENV, c;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ie = [];
function oi(t) {
  Ie.push(t);
}
function ri() {
  Ie.pop();
}
let Ft = !1;
function qe(t, ...e) {
  if (Ft) return;
  Ft = !0, zt();
  const n = Ie.length ? Ie[Ie.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = ii();
  if (r)
    un(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + e.map((c) => {
          var u, d;
          return (d = (u = c.toString) == null ? void 0 : u.call(c)) != null ? d : JSON.stringify(c);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: c }) => `at <${sr(n, c.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const c = [`[Vue warn]: ${t}`, ...e];
    s.length && c.push(`
`, ...si(s)), console.warn(...c);
  }
  Nt(), Ft = !1;
}
function ii() {
  let t = Ie[Ie.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const r = t.component && t.component.parent;
    t = r && r.vnode;
  }
  return e;
}
function si(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...ai(n));
  }), e;
}
function ai({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, s = ` at <${sr(
    t.component,
    t.type,
    r
  )}`, c = ">" + n;
  return t.props ? [s, ...ci(t.props), c] : [s + c];
}
function ci(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...Wo(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function Wo(t, e, n) {
  return me(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : ue(e) ? (e = Wo(t, z(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : Ee(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = z(e), n ? e : [`${t}=`, e]);
}
const Ho = {
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
function un(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (s) {
    Yo(s, e, n);
  }
}
function Yo(t, e, n, r = !0) {
  const s = e ? e.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: u } = e && e.appContext.config || qt;
  if (e) {
    let d = e.parent;
    const g = e.proxy, j = process.env.NODE_ENV !== "production" ? Ho[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; d; ) {
      const _ = d.ec;
      if (_) {
        for (let f = 0; f < _.length; f++)
          if (_[f](t, g, j) === !1)
            return;
      }
      d = d.parent;
    }
    if (c) {
      zt(), un(c, null, 10, [
        t,
        g,
        j
      ]), Nt();
      return;
    }
  }
  li(t, n, s, r, u);
}
function li(t, e, n, r = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const c = Ho[e];
    if (n && oi(n), qe(`Unhandled error${c ? ` during execution of ${c}` : ""}`), n && ri(), r)
      throw t;
    console.error(t);
  } else {
    if (s)
      throw t;
    console.error(t);
  }
}
const Q = [];
let pe = -1;
const He = [];
let be = null, Ve = 0;
const ui = /* @__PURE__ */ Promise.resolve();
let Qt = null;
const hi = 100;
function di(t) {
  let e = pe + 1, n = Q.length;
  for (; e < n; ) {
    const r = e + n >>> 1, s = Q[r], c = ut(s);
    c < t || c === t && s.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function fi(t) {
  if (!(t.flags & 1)) {
    const e = ut(t), n = Q[Q.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= ut(n) ? Q.push(t) : Q.splice(di(e), 0, t), t.flags |= 1, qo();
  }
}
function qo() {
  Qt || (Qt = ui.then(Ko));
}
function pi(t) {
  U(t) ? He.push(...t) : be && t.id === -1 ? be.splice(Ve + 1, 0, t) : t.flags & 1 || (He.push(t), t.flags |= 1), qo();
}
function gi(t) {
  if (He.length) {
    const e = [...new Set(He)].sort(
      (n, r) => ut(n) - ut(r)
    );
    if (He.length = 0, be) {
      be.push(...e);
      return;
    }
    for (be = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Ve = 0; Ve < be.length; Ve++) {
      const n = be[Ve];
      process.env.NODE_ENV !== "production" && Xo(t, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    be = null, Ve = 0;
  }
}
const ut = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Ko(t) {
  process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const e = process.env.NODE_ENV !== "production" ? (n) => Xo(t, n) : Do;
  try {
    for (pe = 0; pe < Q.length; pe++) {
      const n = Q[pe];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        n.flags & 4 && (n.flags &= -2), un(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; pe < Q.length; pe++) {
      const n = Q[pe];
      n && (n.flags &= -2);
    }
    pe = -1, Q.length = 0, gi(t), Qt = null, (Q.length || He.length) && Ko(t);
  }
}
function Xo(t, e) {
  const n = t.get(e) || 0;
  if (n > hi) {
    const r = e.i, s = r && ir(r.type);
    return Yo(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return t.set(e, n + 1), !1;
}
const Vt = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Rt().__VUE_HMR_RUNTIME__ = {
  createRecord: Ut(mi),
  rerender: Ut(yi),
  reload: Ut(vi)
});
const Et = /* @__PURE__ */ new Map();
function mi(t, e) {
  return Et.has(t) ? !1 : (Et.set(t, {
    initialDef: Mt(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Mt(t) {
  return ar(t) ? t.__vccOpts : t;
}
function yi(t, e) {
  const n = Et.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, Mt(r.type).render = e), r.renderCache = [], r.update();
  }));
}
function vi(t, e) {
  const n = Et.get(t);
  if (!n) return;
  e = Mt(e), Sn(n.initialDef, e);
  const r = [...n.instances];
  for (let s = 0; s < r.length; s++) {
    const c = r[s], u = Mt(c.type);
    let d = Vt.get(u);
    d || (u !== n.initialDef && Sn(u, e), Vt.set(u, d = /* @__PURE__ */ new Set())), d.add(c), c.appContext.propsCache.delete(c.type), c.appContext.emitsCache.delete(c.type), c.appContext.optionsCache.delete(c.type), c.ceReload ? (d.add(c), c.ceReload(e.styles), d.delete(c)) : c.parent ? fi(() => {
      c.parent.update(), d.delete(c);
    }) : c.appContext.reload ? c.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), c.root.ce && c !== c.root && c.root.ce._removeChildStyle(u);
  }
  pi(() => {
    Vt.clear();
  });
}
function Sn(t, e) {
  Pe(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function Ut(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ue, kt = [];
function Go(t, e) {
  var n, r;
  Ue = t, Ue ? (Ue.enabled = !0, kt.forEach(({ event: s, args: c }) => Ue.emit(s, ...c)), kt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((c) => {
    Go(c, e);
  }), setTimeout(() => {
    Ue || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, kt = []);
  }, 3e3)) : kt = [];
}
let ht = null, xi = null;
const ji = (t) => t.__isTeleport;
function Jo(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Jo(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
Rt().requestIdleCallback;
Rt().cancelIdleCallback;
const ki = Symbol.for("v-ndc"), bi = {};
process.env.NODE_ENV !== "production" && (bi.ownKeys = (t) => (qe(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
const _i = {}, Zo = (t) => Object.getPrototypeOf(t) === _i, Ci = (t) => t.__isSuspense, Qo = Symbol.for("v-fgt"), wi = Symbol.for("v-txt"), Di = Symbol.for("v-cmt");
function Ei(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const Mi = (...t) => tr(
  ...t
), er = ({ key: t }) => t ?? null, wt = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? me(t) || ue(t) || Ee(t) ? { i: ht, r: t, k: e, f: !!n } : t : null);
function Si(t, e = null, n = null, r = 0, s = null, c = t === Qo ? 0 : 1, u = !1, d = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && er(e),
    ref: e && wt(e),
    scopeId: xi,
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
    shapeFlag: c,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ht
  };
  return d ? (hn(g, n), c & 128 && t.normalize(g)) : n && (g.shapeFlag |= me(n) ? 8 : 16), process.env.NODE_ENV !== "production" && g.key !== g.key && qe("VNode created with invalid key (NaN). VNode type:", g.type), g;
}
const Ai = process.env.NODE_ENV !== "production" ? Mi : tr;
function tr(t, e = null, n = null, r = 0, s = null, c = !1) {
  if ((!t || t === ki) && (process.env.NODE_ENV !== "production" && !t && qe(`Invalid vnode type when creating vnode: ${t}.`), t = Di), Ei(t)) {
    const d = St(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && hn(d, n), d.patchFlag = -2, d;
  }
  if (ar(t) && (t = t.__vccOpts), e) {
    e = Ti(e);
    let { class: d, style: g } = e;
    d && !me(d) && (e.class = rn(d)), se(g) && (Dt(g) && !U(g) && (g = Pe({}, g)), e.style = on(g));
  }
  const u = me(t) ? 1 : Ci(t) ? 128 : ji(t) ? 64 : se(t) ? 4 : Ee(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && u & 4 && Dt(t) && (t = z(t), qe(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), Si(
    t,
    e,
    n,
    r,
    s,
    u,
    c,
    !0
  );
}
function Ti(t) {
  return t ? Dt(t) || Zo(t) ? Pe({}, t) : t : null;
}
function St(t, e, n = !1, r = !1) {
  const { props: s, ref: c, patchFlag: u, children: d, transition: g } = t, j = e ? zi(s || {}, e) : s, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: j,
    key: j && er(j),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && c ? U(c) ? c.concat(wt(e)) : [c, wt(e)] : wt(e)
    ) : c,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && u === -1 && U(d) ? d.map(nr) : d,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Qo ? u === -1 ? 16 : u | 16 : u,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: g,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && St(t.ssContent),
    ssFallback: t.ssFallback && St(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return g && r && Jo(
    _,
    g.clone(_)
  ), _;
}
function nr(t) {
  const e = St(t);
  return U(t.children) && (e.children = t.children.map(nr)), e;
}
function Ri(t = " ", e = 0) {
  return Ai(wi, null, t, e);
}
function hn(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (U(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), hn(t, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !e._ && !Zo(e) && (e._ctx = ht);
  else Ee(e) ? (e = { default: e, _ctx: ht }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Ri(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function zi(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const s in r)
      if (s === "class")
        e.class !== r.class && (e.class = rn([e.class, r.class]));
      else if (s === "style")
        e.style = on([e.style, r.style]);
      else if (kr(s)) {
        const c = e[s], u = r[s];
        u && c !== u && !(U(c) && c.includes(u)) && (e[s] = c ? [].concat(c, u) : u);
      } else s !== "" && (e[s] = r[s]);
  }
  return e;
}
let or = null;
const Ni = () => or || ht;
{
  const t = Rt(), e = (n, r) => {
    let s;
    return (s = t[n]) || (s = t[n] = []), s.push(r), (c) => {
      s.length > 1 ? s.forEach((u) => u(c)) : s[0](c);
    };
  };
  e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => or = n
  ), e(
    "__VUE_SSR_SETTERS__",
    (n) => rr = n
  );
}
let rr = !1;
process.env.NODE_ENV;
const Oi = /(?:^|[-_])(\w)/g, Ii = (t) => t.replace(Oi, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function ir(t, e = !0) {
  return Ee(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function sr(t, e, n = !1) {
  let r = ir(e);
  if (!r && e.__file) {
    const s = e.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && t && t.parent) {
    const s = (c) => {
      for (const u in c)
        if (c[u] === e)
          return u;
    };
    r = s(
      t.components || t.parent.type.components
    ) || s(t.appContext.components);
  }
  return r ? Ii(r) : n ? "App" : "Anonymous";
}
function ar(t) {
  return Ee(t) && "__vccOpts" in t;
}
const Qe = (t, e) => {
  const n = ni(t, e, rr);
  if (process.env.NODE_ENV !== "production") {
    const r = Ni();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Pi() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!se(f))
        return null;
      if (f.__isVue)
        return ["div", t, "VueInstance"];
      if (ue(f)) {
        zt();
        const b = f.value;
        return Nt(), [
          "div",
          {},
          ["span", t, _(f)],
          "<",
          d(b),
          ">"
        ];
      } else {
        if (Uo(f))
          return [
            "div",
            {},
            ["span", t, ae(f) ? "ShallowReactive" : "Reactive"],
            "<",
            d(f),
            `>${ye(f) ? " (readonly)" : ""}`
          ];
        if (ye(f))
          return [
            "div",
            {},
            ["span", t, ae(f) ? "ShallowReadonly" : "Readonly"],
            "<",
            d(f),
            ">"
          ];
      }
      return null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...c(f.$)
        ];
    }
  };
  function c(f) {
    const b = [];
    f.type.props && f.props && b.push(u("props", z(f.props))), f.setupState !== qt && b.push(u("setup", f.setupState)), f.data !== qt && b.push(u("data", z(f.data)));
    const P = g(f, "computed");
    P && b.push(u("computed", P));
    const F = g(f, "inject");
    return F && b.push(u("injected", F)), b.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), b;
  }
  function u(f, b) {
    return b = Pe({}, b), Object.keys(b).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(b).map((P) => [
          "div",
          {},
          ["span", r, P + ": "],
          d(b[P], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function d(f, b = !0) {
    return typeof f == "number" ? ["span", e, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", r, f] : se(f) ? ["object", { object: b ? z(f) : f }] : ["span", n, String(f)];
  }
  function g(f, b) {
    const P = f.type;
    if (Ee(P))
      return;
    const F = {};
    for (const H in f.ctx)
      j(P, H, b) && (F[H] = f.ctx[H]);
    return F;
  }
  function j(f, b, P) {
    const F = f[P];
    if (U(F) && F.includes(b) || se(F) && b in F || f.extends && j(f.extends, b, P) || f.mixins && f.mixins.some((H) => j(H, b, P)))
      return !0;
  }
  function _(f) {
    return ae(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Li() {
  Pi();
}
process.env.NODE_ENV !== "production" && Li();
function Bt(t) {
  return ue(t) ? t.value : t;
}
function cr(t, e = "=", n = "&") {
  return De(
    t,
    (r, s) => `${s}${e}${encodeURIComponent(String(r).trim())}`
  ).sort().join(n);
}
function G() {
  return typeof window < "u";
}
function Ot(t) {
  return t == null;
}
function Re(t) {
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
        return Array.isArray(t) ? t.length > 0 : Object.values(t).some((e) => !Ot(e));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(t);
      case "undefined":
        return !1;
      default:
        return !!t;
    }
  return !1;
}
function ie(t) {
  return at(t) && !Array.isArray(t);
}
function en(t) {
  return typeof t == "string";
}
function $i(t, e) {
  return Math.floor(Math.random() * (e - t + 1) + t);
}
function At(t) {
  return Array.isArray(t) ? t : [t];
}
function lr(t) {
  return G() && t === window;
}
function Ce(t) {
  if (G())
    return lr(t) ? document.body : en(t) ? document.querySelector(t) ?? void 0 : t;
}
function An(t) {
  return lr(t) ? t : Ce(t);
}
function Fi(t) {
  var e;
  return !!((e = Ce(t)) != null && e.closest("html"));
}
class Tn {
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
  constructor(e, n = ["click"], r, s, c) {
    /**
     * Element.
     *
     * Элемент.
     */
    x(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.
     *
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     */
    x(this, "elementControl");
    x(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.
     *
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     */
    x(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.
     *
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     */
    x(this, "listenerRecent", (e) => {
      var n, r;
      Fi(this.elementControl) ? ((n = this.listener) == null || n.call(this.element, e, this.detail), at(this.options) && ((r = this.options) != null && r.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    x(this, "activity", !1);
    x(this, "activityItems", []);
    this.listener = r, this.options = s, this.detail = c, this.element = An(e), this.elementControl = Ce(e), this.type = At(n);
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
    const n = An(e);
    return this.elementControlEdit || (this.elementControl = Ce(e)), this.element = n, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(e) {
    return this.elementControl = Ce(e), this.elementControlEdit = !Ot(this.elementControl), this.elementControlEdit || (this.elementControl = Ce(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(e) {
    return this.type = At(e), this.reset(), this;
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
        var r;
        return (r = this.element) == null ? void 0 : r.dispatchEvent(new CustomEvent(n, { detail: e }));
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
      listener: r,
      observer: s
    }) => {
      s ? s.disconnect() : r ? e == null || e.removeEventListener(n, r) : e == null || e.removeEventListener(n, this.listenerRecent);
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
      const n = (r) => {
        e || (e = !0, requestAnimationFrame(() => {
          this.listenerRecent(r), e = !1;
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
const Rn = "ui-loading", rt = class rt {
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
    new Tn(window, Rn, e).setElementControl(n).start();
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
x(rt, "value", 0), x(rt, "event"), G() && (rt.event = new Tn(window, Rn));
let ze = rt;
function Vi(t) {
  return JSON.parse(JSON.stringify(t));
}
function zn(t) {
  switch (typeof t) {
    case "number":
      return !0;
    case "string":
      return !!t.match(/^[0-9]+$/);
    default:
      return !1;
  }
}
function Nn(t) {
  if (typeof t == "number")
    return t;
  if (!t)
    return 0;
  let e = t.replace(/[^\d., ]+/ig, "");
  return e.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? e = e.replace(/ /ig, "").replace(/,/ig, ".") : e.match(/,[0-9]{3}[,.]/ig) ? e = e.replace(/,/ig, "") : e.match(/[.][0-9]{3}[,.]/ig) ? e = e.replace(/[.]/ig, "").replace(/,/ig, ".") : e = e.replace(/,/ig, "."), parseFloat(e);
}
function Ui(t, e) {
  return Ot(t) ? !1 : Array.isArray(e) ? e.includes(t) : zn(t) && zn(e) ? Nn(t) === Nn(e) : t === e;
}
let On = "ui-storage";
class dn {
  /**
   * Constructor
   * @param name value name /<br>название значения
   * @param isSession should we use a session? /<br>использовать ли сессию?
   */
  constructor(e, n = !1) {
    x(this, "value");
    x(this, "age");
    this.name = e, this.isSession = n;
    const r = `${n ? "session" : "storage"}#${e}`;
    if (r in Wt)
      return Wt[r];
    const s = this.getValue();
    s && (this.value = s.value, this.age = s.age), Wt[r] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(e) {
    On = e;
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
    var n, r;
    return this.value = ge(e), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? (n = this.getMethod()) == null || n.removeItem(this.getIndex()) : (r = this.getMethod()) == null || r.setItem(this.getIndex(), JSON.stringify({
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
    return Ot(e) || this.age && this.age + e * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (G())
      return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${On}${this.name}`;
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
      } catch (r) {
        console.error("DataStorage", r);
      }
  }
}
const Wt = {}, Bi = /* @__PURE__ */ JSON.parse('[{"country":"US","countryAlternative":["EN"],"language":"en","languageAlternative":["us"],"firstDay":"Su","zone":"America/New_York","phoneCode":"1","phoneMask":["+1-***-***-****"]},{"country":"GB","countryAlternative":["UK"],"language":"en","firstDay":"Mo","zone":"Europe/London","phoneCode":"44","phoneMask":["+44-**-****-****"]},{"country":"AF","language":"fa","firstDay":"Sa","zone":"Asia/Kabul","phoneCode":"93","phoneMask":["+93-**-***-****"]},{"country":"AL","language":"sq","firstDay":"Mo","zone":"Europe/Tirane","phoneCode":"355","phoneMask":["+355-***-***-***"]},{"country":"DZ","language":"ar","firstDay":"Sa","zone":"Africa/Algiers","phoneCode":"213","phoneMask":["+213-**-***-****"]},{"country":"AS","language":"en","firstDay":null,"zone":"Pacific/Pago_Pago","phoneCode":"1-684","phoneMask":["+1-684-***-****"]},{"country":"AD","language":"ca","firstDay":"Mo","zone":"Europe/Andorra","phoneCode":"376","phoneMask":["+376-***-***"]},{"country":"AO","language":"pt","firstDay":null,"zone":"Africa/Lagos","phoneCode":"244","phoneMask":["+244-***-***-***"]},{"country":"AI","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-264","phoneMask":["+1-264-***-****"]},{"country":"AQ","language":"en","firstDay":null,"zone":"Antarctica/Troll","phoneCode":"672","phoneMask":["+672-1-**-***"]},{"country":"AG","language":"en","firstDay":null,"zone":"America/Antigua","phoneCode":"1-268","phoneMask":["+1-268-***-****"]},{"country":"AR","language":"es","firstDay":"Su","zone":"America/Argentina/Buenos_Aires","phoneCode":"54","phoneMask":["+54-***-***-****"]},{"country":"AM","language":"hy","firstDay":"Mo","zone":"Asia/Yerevan","phoneCode":"374","phoneMask":["+374-**-***-***"]},{"country":"AW","language":"nl","firstDay":null,"zone":"America/Curacao","phoneCode":"297","phoneMask":["+297-***-****"]},{"country":"AU","language":"en","firstDay":"Mo","zone":"Australia/Sydney","phoneCode":"61","phoneMask":["+61-*-****-****"]},{"country":"AT","language":"de","firstDay":"Mo","zone":"Europe/Vienna","phoneCode":"43","phoneMask":["+43-***-***-****","+43-***-***-*****"]},{"country":"AZ","language":"az","firstDay":"Mo","zone":"Asia/Baku","phoneCode":"994","phoneMask":"+994-**-***-**-**"},{"country":"BS","language":"en","firstDay":null,"zone":"America/Nassau","phoneCode":"1-242","phoneMask":"+1-242-***-****"},{"country":"BH","language":"ar","firstDay":"Sa","zone":"Asia/Bahrain","phoneCode":"973","phoneMask":"+973-****-****"},{"country":"BD","language":"bn","firstDay":null,"zone":"Asia/Dhaka","phoneCode":"880","phoneMask":"+880-**-***-***"},{"country":"BB","language":"en","firstDay":null,"zone":"America/Barbados","phoneCode":"1-246","phoneMask":"+1-246-***-****"},{"country":"BY","language":"be","firstDay":"Mo","zone":"Europe/Minsk","phoneCode":"375","phoneMask":"+375-**-***-**-**"},{"country":"BE","language":"nl","firstDay":"Mo","zone":"Europe/Brussels","phoneCode":"32","phoneMask":"+32-***-***-***"},{"country":"BZ","language":"en","firstDay":"Su","zone":"America/Belize","phoneCode":"501","phoneMask":"+501-***-****"},{"country":"BJ","language":"fr","firstDay":null,"zone":"Africa/Lagos","phoneCode":"229","phoneMask":"+229-**-**-****"},{"country":"BM","language":"en","firstDay":null,"zone":"Atlantic/Bermuda","phoneCode":"1-441","phoneMask":"+1-441-***-****"},{"country":"BT","language":"dz","firstDay":null,"zone":"Asia/Thimphu","phoneCode":"975","phoneMask":["+975-*-***-***","+975-17-***-***"]},{"country":"BO","language":"es","firstDay":"Su","zone":"America/La_Paz","phoneCode":"591","phoneMask":"+591-*-***-****"},{"country":"BA","language":"bs","firstDay":null,"zone":"Europe/Belgrade","phoneCode":"387","phoneMask":["+387-**-****","+387-**-*****"]},{"country":"BW","language":"en","firstDay":null,"zone":"Africa/Maputo","phoneCode":"267","phoneMask":"+267-**-***-***"},{"country":"BR","language":"pt","firstDay":"Su","zone":"America/Sao_Paulo","phoneCode":"55","phoneMask":["+55-**-****-****","+55-**-*****-****"]},{"country":"IO","language":"en","firstDay":null,"zone":"Indian/Chagos","phoneCode":"246","phoneMask":"+246-***-****"},{"country":"VG","language":"en","firstDay":null,"zone":"America/Port_of_Spain","phoneCode":"1-284","phoneMask":"+1-284-***-****"},{"country":"BN","language":"ms","firstDay":"Mo","zone":"Asia/Brunei","phoneCode":"673","phoneMask":"+673-***-****"},{"country":"BG","language":"bg","firstDay":"Mo","zone":"Europe/Sofia","phoneCode":"359","phoneMask":"+359-***-***-***"},{"country":"BF","language":"fr","firstDay":null,"zone":"Africa/Abidjan","phoneCode":"226","phoneMask":"+226-**-**-****"},{"country":"BI","language":"fr","firstDay":null,"zone":"Africa/Maputo","phoneCode":"257","phoneMask":"+257-**-**-****"},{"country":"KH","language":"km","firstDay":null,"zone":"Asia/Phnom_Penh","phoneCode":"855","phoneMask":"+855-**-***-***"},{"country":"CM","phoneCode":"237","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":"+237-****-****"},{"country":"CA","phoneCode":"1","zone":"America/Toronto","language":"en","firstDay":"Su","phoneMask":"+1-***-***-****"},{"country":"CV","phoneCode":"238","zone":"Atlantic/Cape_Verde","language":"pt","firstDay":null,"phoneMask":"+238-***-**-**"},{"country":"KY","phoneCode":"1-345","zone":"America/Cayman","language":"en","firstDay":null,"phoneMask":"+1-345-***-****"},{"country":"CF","phoneCode":"236","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+236-**-**-****"},{"country":"TD","phoneCode":"235","zone":"Africa/Ndjamena","language":"fr","firstDay":null,"phoneMask":"+235-**-**-**-**"},{"country":"CL","phoneCode":"56","zone":"America/Santiago","language":"es","firstDay":"Su","phoneMask":"+56-*-****-****"},{"country":"CN","phoneCode":"86","zone":"Asia/Shanghai","language":"zh","firstDay":"Su","phoneMask":["+86-***-****-***","+86-***-****-****","+86-**-*****-*****"]},{"country":"CX","phoneCode":"61","zone":"Indian/Christmas","language":"en","firstDay":null},{"country":"CC","phoneCode":"61","zone":"Indian/Cocos","language":"ms","firstDay":null},{"country":"CO","phoneCode":"57","zone":"America/Bogota","language":"es","firstDay":"Su","phoneMask":"+57-***-***-****"},{"country":"KM","phoneCode":"269","zone":"Indian/Comoro","language":"ar","firstDay":null,"phoneMask":"+269-**-*****"},{"country":"CK","phoneCode":"682","zone":"Pacific/Rarotonga","language":"en","firstDay":null,"phoneMask":"+682-**-***"},{"country":"CR","phoneCode":"506","zone":"America/Costa_Rica","language":"es","firstDay":"Su","phoneMask":"+506-****-****"},{"country":"HR","phoneCode":"385","zone":"Europe/Belgrade","language":"hr","firstDay":"Mo","phoneMask":"+385-**-***-***"},{"country":"CU","phoneCode":"53","zone":"America/Havana","language":"es","firstDay":null,"phoneMask":"+53-*-***-****"},{"country":"CW","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+599-***-****"},{"country":"CY","phoneCode":"357","zone":"Asia/Nicosia","language":"el","firstDay":null,"phoneMask":"+357-**-***-***"},{"country":"CZ","phoneCode":"420","zone":"Europe/Prague","language":"cs","languageAlternative":["cz"],"firstDay":"Mo","phoneMask":"+420-***-***-***"},{"country":"CD","phoneCode":"243","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+243-***-***-***"},{"country":"DK","phoneCode":"45","zone":"Europe/Copenhagen","language":"da","firstDay":"Mo","phoneMask":"+45-**-**-**-**"},{"country":"DJ","phoneCode":"253","zone":"Africa/Djibouti","language":"fr","firstDay":null,"phoneMask":"+253-**-**-**-**"},{"country":"DM","phoneCode":"1-767","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-767-***-****"},{"country":"DO","phoneCode":"1-809","zone":"North America","language":"America/Santo_Domingo","firstDay":"Su","phoneMask":["+1-809-***-****","+1-829-***-****","+1-849-***-****"]},{"country":"TL","phoneCode":"670","zone":"Asia/Dili","language":"tet","firstDay":null,"phoneMask":["+670-***-****","+670-77-*-*****","+670-78-*-*****"]},{"country":"EC","phoneCode":"593","zone":"America/Guayaquil","language":"es","firstDay":"Su","phoneMask":["+593-*-***-****","+593-**-***-****"]},{"country":"EG","phoneCode":"20","zone":"Africa/Cairo","language":"ar","firstDay":"Sa","phoneMask":"+20-***-***-****"},{"country":"SV","phoneCode":"503","zone":"America/El_Salvador","language":"es","firstDay":"Su","phoneMask":"+503-**-**-****"},{"country":"GQ","phoneCode":"240","zone":"Africa/Lagos","language":"es","firstDay":null,"phoneMask":"+240-**-***-****"},{"country":"ER","phoneCode":"291","zone":"Africa/Asmara","language":"aa","firstDay":null,"phoneMask":"+291-*-***-***"},{"country":"EE","phoneCode":"372","zone":"Europe/Tallinn","language":"et","firstDay":"Mo","phoneMask":["+372-***-****","+372-****-****"]},{"country":"ET","phoneCode":"251","zone":"Africa/Addis_Ababa","language":"am","firstDay":null,"phoneMask":"+251-**-***-****"},{"country":"FK","phoneCode":"500","zone":"Atlantic/Stanley","language":"en","firstDay":null,"phoneMask":"+500-*****"},{"country":"FO","phoneCode":"298","zone":"Atlantic/Faroe","language":"fo","firstDay":null,"phoneMask":"+298-***-***"},{"country":"FJ","phoneCode":"679","zone":"Pacific/Fiji","language":"en","firstDay":null,"phoneMask":"+679-**-*****"},{"country":"FI","phoneCode":"358","zone":"Europe/Helsinki","language":"fi","firstDay":"Mo","phoneMask":["+358-***-***-**-*","+358-***-***-**-**"]},{"country":"FR","phoneCode":"33","zone":"Europe/Paris","language":"fr","firstDay":"Mo","phoneMask":["+33-***-***-***","+262-*****-****","+508-**-****","+590-***-***-***"]},{"country":"PF","phoneCode":"689","zone":"Pacific/Tahiti","language":"fr","firstDay":null,"phoneMask":"+689-**-**-**"},{"country":"GA","phoneCode":"241","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+241-*-**-**-**"},{"country":"GM","phoneCode":"220","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+220-***-**-**"},{"country":"GE","phoneCode":"995","zone":"Asia/Tbilisi","language":"ka","firstDay":"Mo","phoneMask":"+995-***-***-***"},{"country":"DE","phoneCode":"49","zone":"Europe/Berlin","language":"de","firstDay":"Mo","phoneMask":["+49-***-***","+49-***-***-****","+49-****-***-****"]},{"country":"GH","phoneCode":"233","zone":"Africa/Accra","language":"en","firstDay":null,"phoneMask":"+233-***-***-***"},{"country":"GI","phoneCode":"350","zone":"Europe/Gibraltar","language":"en","firstDay":null,"phoneMask":"+350-***-*****"},{"country":"GR","phoneCode":"30","zone":"Europe/Athens","language":"el","firstDay":"Mo","phoneMask":"+30-***-***-****"},{"country":"GL","phoneCode":"299","zone":"America/Godthab","language":"kl","firstDay":null,"phoneMask":"+299-**-**-**"},{"country":"GD","phoneCode":"1-473","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-473-***-****"},{"country":"GU","phoneCode":"1-671","zone":"Pacific/Guam","language":"en","firstDay":null,"phoneMask":"+1-671-***-****"},{"country":"GT","phoneCode":"502","zone":"America/Guatemala","language":"es","firstDay":"Su","phoneMask":"+502-*-***-****"},{"country":"GG","phoneCode":"44-1481","zone":"Europe/London","language":"en","firstDay":null},{"country":"GN","phoneCode":"224","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+224-**-***-***"},{"country":"GW","phoneCode":"245","zone":"Africa/Bissau","language":"pt","firstDay":null,"phoneMask":"+245-*-******"},{"country":"GY","phoneCode":"592","zone":"America/Guyana","language":"en","firstDay":null,"phoneMask":"+592-***-****"},{"country":"HT","phoneCode":"509","zone":"America/Port-au-Prince","language":"ht","firstDay":null,"phoneMask":"+509-**-**-****"},{"country":"HN","phoneCode":"504","zone":"America/Tegucigalpa","language":"es","firstDay":"Su","phoneMask":"+504-****-****"},{"country":"HK","phoneCode":"852","zone":"Asia/Hong_Kong","language":"zh","firstDay":"Su","phoneMask":"+852-****-****"},{"country":"HU","phoneCode":"36","zone":"Europe/Budapest","language":"hu","firstDay":"Mo","phoneMask":"+36-***-***-***","nameFormat":"lf"},{"country":"IS","phoneCode":"354","zone":"Atlantic/Reykjavik","language":"is","firstDay":"Mo","phoneMask":"+354-***-****"},{"country":"IN","phoneCode":"91","zone":"Asia/Kolkata","language":"en","firstDay":"Mo","phoneMask":"+91-****-***-***"},{"country":"ID","phoneCode":"62","zone":"Asia/Jakarta","language":"id","firstDay":"Mo","phoneMask":["+62-**-***-**","+62-**-***-***","+62-**-***-****","+62-8-**-***-***","+62-8-**-***-****","+62-8-**-***-**-***"]},{"country":"IR","phoneCode":"98","zone":"Asia/Tehran","language":"fa","firstDay":"Sa","phoneMask":"+98-***-***-****"},{"country":"IQ","phoneCode":"964","zone":"Asia/Baghdad","language":"ar","firstDay":"Sa","phoneMask":"+964-***-***-****"},{"country":"IE","firstDay":"Mo","language":"en","phoneCode":"353","phoneMask":"+353-***-***-***","zone":"Europe/Dublin"},{"country":"IM","firstDay":null,"language":"Pound","phoneCode":"44-1624","zone":"Isle of Man"},{"country":"IL","firstDay":"Su","language":"he","languageAlternative":["il"],"phoneCode":"972","phoneMask":["+972-*-***-****","+972-5-*-***-****"],"zone":"Asia/Jerusalem"},{"country":"IT","firstDay":"Mo","language":"it","phoneCode":"39","phoneMask":"+39-***-****-***","zone":"Europe/Rome"},{"country":"CI","phoneCode":"225","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+225-**-***-***"},{"country":"JM","phoneCode":"1-876","zone":"America/Jamaica","language":"en","firstDay":"Su","phoneMask":"+1-876-***-****"},{"country":"JP","phoneCode":"81","zone":"Asia/Tokyo","language":"ja","firstDay":"Su","phoneMask":["+81-***-***-***","+81-**-****-****"],"nameFormat":"lf"},{"country":"JE","phoneCode":"44-1534","zone":"Europe/London","language":"en","firstDay":null},{"country":"JO","phoneCode":"962","zone":"Asia/Amman","language":"ar","firstDay":"Sa","phoneMask":"+962-*-****-****"},{"country":"KZ","phoneCode":"7","zone":"Asia/Almaty","language":"kk","firstDay":"Mo","phoneMask":["+7-6-**-***-**-**","+7-7-**-***-**-**"],"nameFormat":"lf"},{"country":"KE","phoneCode":"254","zone":"Africa/Nairobi","language":"en","firstDay":"Su","phoneMask":"+254-***-******"},{"country":"KI","phoneCode":"686","zone":"Pacific/Tarawa","language":"en","firstDay":null,"phoneMask":"+686-**-***"},{"country":"XK","phoneCode":"383","zone":"Europe/Belgrade","language":"sq","firstDay":"Mo"},{"country":"KW","phoneCode":"965","zone":"Asia/Kuwait","language":"ar","firstDay":"Sa","phoneMask":"+965-****-****"},{"country":"KG","phoneCode":"996","zone":"Asia/Bishkek","language":"ky","firstDay":"Mo","phoneMask":"+996-***-***-***"},{"country":"LA","phoneCode":"856","zone":"Asia/Vientiane","language":"lo","firstDay":null,"phoneMask":["+856-**-***-***","+856-20-**-***-***"]},{"country":"LV","phoneCode":"371","zone":"Europe/Riga","language":"lv","firstDay":"Mo","phoneMask":"+371-**-***-***"},{"country":"LB","phoneCode":"961","zone":"Asia/Beirut","language":"ar","firstDay":"Mo","phoneMask":["+961-*-***-***","+961-**-***-***"]},{"country":"LS","phoneCode":"266","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+266-*-***-****"},{"country":"LR","phoneCode":"231","zone":"Africa/Monrovia","language":"en","firstDay":null,"phoneMask":"+231-**-***-***"},{"country":"LY","phoneCode":"218","zone":"Africa/Tripoli","language":"ar","firstDay":"Sa","phoneMask":["+218-**-***-***","+218-21-***-****"]},{"country":"LI","phoneCode":"423","zone":"Europe/Zurich","language":"de","firstDay":null,"phoneMask":"+423-***-***-****"},{"country":"LT","phoneCode":"370","zone":"Europe/Vilnius","language":"lt","firstDay":"Mo","phoneMask":"+370-***-**-***"},{"country":"LU","phoneCode":"352","zone":"Europe/Luxembourg","language":"lb","firstDay":"Mo","phoneMask":"+352-***-***-***"},{"country":"MO","phoneCode":"853","zone":"Asia/Macau","language":"zh","firstDay":null,"phoneMask":"+853-****-****"},{"country":"MK","phoneCode":"389","zone":"Europe/Belgrade","language":"mk","firstDay":"Mo","phoneMask":"+389-**-***-***"},{"country":"MG","phoneCode":"261","zone":"Indian/Antananarivo","language":"fr","firstDay":null,"phoneMask":"+261-**-**-*****"},{"country":"MW","phoneCode":"265","zone":"Africa/Maputo","language":"ny","firstDay":null,"phoneMask":["+265-*-****-****","+265-1-***-***"]},{"country":"MY","phoneCode":"60","zone":"Asia/Kuala_Lumpur","language":"ms","firstDay":"Mo","phoneMask":["+60-*-***-***","+60-**-***-***","+60-**-***-****","+60-***-***-***"]},{"country":"MV","phoneCode":"960","zone":"Indian/Maldives","language":"dv","firstDay":null,"phoneMask":"+960-***-****"},{"country":"ML","phoneCode":"223","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+223-**-**-****"},{"country":"MT","phoneCode":"356","zone":"Europe/Malta","language":"mt","firstDay":null,"phoneMask":"+356-****-****"},{"country":"MH","phoneCode":"692","zone":"Pacific/Majuro","language":"mh","firstDay":null,"phoneMask":"+692-***-****"},{"country":"MR","phoneCode":"222","zone":"Africa/Abidjan","language":"ar","firstDay":null,"phoneMask":"+222-**-**-****"},{"country":"MU","phoneCode":"230","zone":"Indian/Mauritius","language":"en","firstDay":null,"phoneMask":"+230-***-****"},{"country":"YT","phoneCode":"262","zone":"Indian/Mayotte","language":"fr","firstDay":null},{"country":"MX","phoneCode":"52","zone":"America/Mexico_City","language":"es","firstDay":"Su","phoneMask":["+52-**-**-****","+52-***-***-****"]},{"country":"FM","phoneCode":"691","zone":"Pacific/Pohnpei","language":"en","firstDay":null,"phoneMask":"+691-***-****"},{"country":"MD","phoneCode":"373","zone":"Europe/Chisinau","language":"ro","firstDay":null,"phoneMask":"+373-****-****"},{"country":"MC","phoneCode":"377","zone":"Europe/Monaco","language":"fr","firstDay":"Mo","phoneMask":["+377-**-***-***","+377-***-***-***"]},{"country":"MN","phoneCode":"976","zone":"Asia/Ulaanbaatar","language":"mn","firstDay":"Mo","phoneMask":"+976-**-**-****"},{"country":"ME","phoneCode":"382","zone":"Europe/Belgrade","language":"sr","firstDay":null,"phoneMask":"+382-**-***-***"},{"country":"MS","phoneCode":"1-664","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-664-***-****"},{"country":"MA","phoneCode":"212","zone":"Africa/Casablanca","language":"ar","firstDay":"Mo","phoneMask":"+212-**-****-***"},{"country":"MZ","phoneCode":"258","zone":"Africa/Maputo","language":"pt","firstDay":null,"phoneMask":"+258-**-***-***"},{"country":"MM","phoneCode":"95","zone":"Asia/Rangoon","language":"my","firstDay":null,"phoneMask":["+95-***-***","+95-*-***-***","+95-**-***-***"]},{"country":"NA","phoneCode":"264","zone":"Africa/Windhoek","language":"en","firstDay":null,"phoneMask":"+264-**-***-****"},{"country":"NR","phoneCode":"674","zone":"Pacific/Nauru","language":"na","firstDay":null,"phoneMask":"+674-***-****"},{"country":"NP","phoneCode":"977","zone":"Asia/Kathmandu","language":"ne","firstDay":null,"phoneMask":"+977-**-***-***"},{"country":"NL","phoneCode":"31","zone":"Europe/Amsterdam","language":"nl","firstDay":"Mo","phoneMask":"+31-**-***-****"},{"country":"AN","phoneCode":"599","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":["+599-***-****","+599-9-***-****"]},{"country":"NC","phoneCode":"687","zone":"Pacific/Noumea","language":"fr","firstDay":null,"phoneMask":"+687-**-****"},{"country":"NZ","phoneCode":"64","zone":"Pacific/Auckland","language":"en","firstDay":"Mo","phoneMask":["+64-**-***-***","+64-***-***-***","+64-***-***-****"]},{"country":"NI","phoneCode":"505","zone":"America/Managua","language":"es","firstDay":"Su","phoneMask":"+505-****-****"},{"country":"NE","phoneCode":"227","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+227-**-**-****"},{"country":"NG","phoneCode":"234","zone":"Africa/Lagos","language":"en","firstDay":null,"phoneMask":["+234-**-***-**","+234-**-***-***","+234-***-***-****"]},{"country":"NU","phoneCode":"683","zone":"Pacific/Niue","language":"niu","firstDay":null,"phoneMask":"+683-****"},{"country":"KP","phoneCode":"850","zone":"Asia/Pyongyang","language":"ko","firstDay":null,"phoneMask":["+850-***-***","+850-**-***-***","+850-****-****","+850-***-****-***","+850-****-*************","+850-191-***-****"]},{"country":"MP","phoneCode":"1-670","zone":"Pacific/Saipan","language":"fil","firstDay":null,"phoneMask":"+1-670-***-****"},{"country":"NO","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":"Mo","phoneMask":"+47-***-**-***"},{"country":"OM","phoneCode":"968","zone":"Asia/Muscat","language":"ar","firstDay":"Sa","phoneMask":"+968-**-***-***"},{"country":"PK","phoneCode":"92","zone":"Asia/Karachi","language":"ur","firstDay":"Mo","phoneMask":"+92-***-***-****"},{"country":"PW","phoneCode":"680","zone":"Pacific/Palau","language":"pau","firstDay":null,"phoneMask":"+680-***-****"},{"country":"PS","phoneCode":"970","zone":"Asia/Hebron","language":"ar","firstDay":null,"phoneMask":"+970-**-***-****"},{"country":"PA","phoneCode":"507","zone":"America/Panama","language":"es","firstDay":"Su","phoneMask":"+507-***-****"},{"country":"PG","phoneCode":"675","zone":"Pacific/Port_Moresby","language":"en","firstDay":null,"phoneMask":"+675-***-**-***"},{"country":"PY","phoneCode":"595","zone":"America/Asuncion","language":"es","firstDay":"Mo","phoneMask":"+595-***-***-***"},{"country":"PE","phoneCode":"51","zone":"America/Lima","language":"es","firstDay":"Su","phoneMask":"+51-***-***-***"},{"country":"PH","phoneCode":"63","zone":"Asia/Manila","language":"tl","firstDay":"Su","phoneMask":"+63-***-***-****"},{"country":"PN","phoneCode":"64","zone":"Pacific/Pitcairn","language":"en","firstDay":null},{"country":"PL","phoneCode":"48","zone":"Europe/Warsaw","language":"pl","firstDay":"Mo","phoneMask":"+48-***-***-***"},{"country":"PT","phoneCode":"351","zone":"Europe/Lisbon","language":"pt","firstDay":"Mo","phoneMask":"+351-**-***-****"},{"country":"PR","phoneCode":"1-787","zone":"San Juan","language":"Dollar","firstDay":"Su"},{"country":"QA","phoneCode":"974","zone":"Asia/Qatar","language":"ar","firstDay":"Sa","phoneMask":"+974-****-****"},{"country":"CG","phoneCode":"242","zone":"Africa/Lagos","language":"fr","firstDay":null,"phoneMask":"+242-**-***-****"},{"country":"RE","phoneCode":"262","zone":"Indian/Reunion","language":"fr","firstDay":null,"phoneMask":"+262-*****-****"},{"country":"RO","phoneCode":"40","zone":"Europe/Bucharest","language":"ro","firstDay":"Mo","phoneMask":"+40-**-***-****"},{"country":"RU","phoneCode":"7","phoneWithin":"8","zone":"Europe/Moscow","language":"ru","firstDay":"Mo","phoneMask":"+7-***-***-**-**","nameFormat":"lsf"},{"country":"RW","phoneCode":"250","zone":"Africa/Maputo","language":"rw","firstDay":null,"phoneMask":"+250-***-***-***"},{"country":"BL","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"SH","phoneCode":"290","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+290-****"},{"country":"KN","phoneCode":"1-869","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-869-***-****"},{"country":"LC","phoneCode":"1-758","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-758-***-****"},{"country":"MF","phoneCode":"590","zone":"America/Port_of_Spain","language":"fr","firstDay":null},{"country":"PM","phoneCode":"508","zone":"America/Miquelon","language":"fr","firstDay":null},{"country":"VC","phoneCode":"1-784","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-784-***-****"},{"country":"WS","phoneCode":"685","zone":"Pacific/Apia","language":"sm","firstDay":null,"phoneMask":"+685-**-****"},{"country":"SM","phoneCode":"378","zone":"Europe/Rome","language":"it","firstDay":null,"phoneMask":"+378-****-******"},{"country":"ST","phoneCode":"239","zone":"Africa/Abidjan","language":"pt","firstDay":null,"phoneMask":"+239-**-*****"},{"country":"SA","phoneCode":"966","zone":"Asia/Riyadh","language":"ar","firstDay":"Sa","phoneMask":["+966-*-***-****","+966-5-****-****"]},{"country":"SN","phoneCode":"221","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+221-**-***-****"},{"country":"RS","phoneCode":"381","zone":"Europe/Belgrade","language":"sr","firstDay":"Mo","phoneMask":"+381-**-***-****"},{"country":"SC","phoneCode":"248","zone":"Indian/Mahe","language":"en","firstDay":null,"phoneMask":"+248-*-***-***"},{"country":"SL","phoneCode":"232","zone":"Africa/Abidjan","language":"en","firstDay":null,"phoneMask":"+232-**-******"},{"country":"SG","phoneCode":"65","zone":"Asia/Singapore","language":"cmn","firstDay":"Mo","phoneMask":"+65-****-****"},{"country":"SX","phoneCode":"1-721","zone":"America/Curacao","language":"nl","firstDay":null,"phoneMask":"+1-721-***-****"},{"country":"SK","phoneCode":"421","zone":"Europe/Prague","language":"sk","firstDay":"Mo","phoneMask":"+421-***-***-***"},{"country":"SI","phoneCode":"386","zone":"Europe/Belgrade","language":"sl","firstDay":null,"phoneMask":"+386-**-***-***"},{"country":"SB","phoneCode":"677","zone":"Pacific/Guadalcanal","language":"en","firstDay":null,"phoneMask":["+677-*****","+677-***-****"]},{"country":"SO","phoneCode":"252","zone":"Africa/Mogadishu","language":"so","firstDay":null,"phoneMask":["+252-*-***-***","+252-**-***-***"]},{"country":"ZA","phoneCode":"27","zone":"Africa/Johannesburg","language":"zu","firstDay":"Su","phoneMask":"+27-**-***-****"},{"country":"KR","phoneCode":"82","zone":"Asia/Seoul","language":"ko","firstDay":"Su","phoneMask":["+82-**-***-****","+82-**-***-****-**"],"nameFormat":"lf"},{"country":"SS","phoneCode":"211","zone":"Africa/Khartoum","language":"en","firstDay":null,"phoneMask":"+211-**-***-****"},{"country":"ES","phoneCode":"34","zone":"Europe/Madrid","language":"es","firstDay":"Mo","phoneMask":"+34-***-***-***"},{"country":"LK","phoneCode":"94","zone":"Asia/Colombo","language":"si","firstDay":null,"phoneMask":"+94-**-***-****"},{"country":"SD","phoneCode":"249","zone":"Africa/Khartoum","language":"ar","firstDay":null,"phoneMask":"+249-**-***-****"},{"country":"SR","phoneCode":"597","zone":"America/Paramaribo","language":"nl","firstDay":null,"phoneMask":["+597-***-***","+597-***-****"]},{"country":"SJ","phoneCode":"47","zone":"Europe/Oslo","language":"no","firstDay":null},{"country":"SZ","phoneCode":"268","zone":"Africa/Johannesburg","language":"en","firstDay":null,"phoneMask":"+268-**-**-****"},{"country":"SE","phoneCode":"46","zone":"Europe/Stockholm","language":"sv","firstDay":"Mo","phoneMask":"+46-**-***-****"},{"country":"CH","phoneCode":"41","zone":"Europe/Zurich","language":"de","firstDay":"Mo","phoneMask":"+41-**-***-****"},{"country":"SY","phoneCode":"963","zone":"Asia/Damascus","language":"ar","firstDay":"Sa","phoneMask":"+963-**-****-***"},{"country":"TW","phoneCode":"886","zone":"Asia/Taipei","language":"zh","firstDay":"Su","phoneMask":["+886-****-****","+886-*-****-****"]},{"country":"TJ","phoneCode":"992","zone":"Asia/Dushanbe","language":"tg","firstDay":null,"phoneMask":"+992-**-***-****"},{"country":"TZ","phoneCode":"255","zone":"Africa/Dar_es_Salaam","language":"sw","firstDay":null,"phoneMask":"+255-**-***-****"},{"country":"TH","phoneCode":"66","zone":"Asia/Bangkok","language":"th","firstDay":"Mo","phoneMask":"+66-**-***-****"},{"country":"TG","phoneCode":"228","zone":"Africa/Abidjan","language":"fr","firstDay":null,"phoneMask":"+228-**-***-***"},{"country":"TK","phoneCode":"690","zone":"Pacific/Fakaofo","language":"tkl","firstDay":null,"phoneMask":"+690-****"},{"country":"TO","phoneCode":"676","zone":"Pacific/Tongatapu","language":"to","firstDay":null,"phoneMask":"+676-*****"},{"country":"TT","phoneCode":"1-868","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-868-***-****"},{"country":"TN","phoneCode":"216","zone":"Africa/Tunis","language":"ar","firstDay":"Mo","phoneMask":"+216-**-***-***"},{"country":"TR","phoneCode":"90","zone":"Europe/Istanbul","language":"tr","firstDay":"Mo","phoneMask":"+90-***-***-****"},{"country":"TM","phoneCode":"993","zone":"Asia/Ashgabat","language":"tk","firstDay":null,"phoneMask":"+993-*-***-****"},{"country":"TC","phoneCode":"1-649","zone":"America/Grand_Turk","language":"en","firstDay":null,"phoneMask":"+1-649-***-****"},{"country":"TV","phoneCode":"688","zone":"Pacific/Funafuti","language":"tvl","firstDay":null,"phoneMask":["+688-2-****","+688-90-****"]},{"country":"VI","phoneCode":"1-340","zone":"America/Port_of_Spain","language":"en","firstDay":null,"phoneMask":"+1-340-***-****"},{"country":"UG","phoneCode":"256","zone":"Africa/Kampala","language":"en","firstDay":null,"phoneMask":"+256-***-***-***"},{"country":"UA","phoneCode":"380","zone":"Europe/Kiev","language":"uk","languageAlternative":["ua"],"firstDay":"Mo","phoneMask":"+380-**-***-**-**"},{"country":"AE","phoneCode":"971","zone":"Asia/Dubai","language":"ar","firstDay":"Sa","phoneMask":["+971-*-***-****","+971-5-*-***-****"]},{"country":"UY","phoneCode":"598","zone":"America/Montevideo","language":"es","firstDay":"Mo","phoneMask":"+598-*-***-**-**"},{"country":"UZ","phoneCode":"998","zone":"Asia/Tashkent","language":"uz","firstDay":"Mo","phoneMask":"+998-**-***-****"},{"country":"VU","phoneCode":"678","zone":"Pacific/Efate","language":"bi","firstDay":null,"phoneMask":["+678-*****","+678-**-*****"]},{"country":"VA","phoneCode":"379","zone":"Europe/Rome","language":"la","firstDay":null,"phoneMask":"+39-6-698-*****"},{"country":"VE","phoneCode":"58","zone":"America/Caracas","language":"es","firstDay":"Su","phoneMask":"+58-***-***-****"},{"country":"VN","phoneCode":"84","zone":"Asia/Ho_Chi_Minh","language":"vi","firstDay":"Mo","phoneMask":["+84-**-****-***","+84-***-****-***"],"nameFormat":"fsl"},{"country":"WF","phoneCode":"681","zone":"Pacific/Wallis","language":"wls","firstDay":null,"phoneMask":"+681-**-****"},{"country":"EH","phoneCode":"212","zone":"Africa/El_Aaiun","language":"ar","firstDay":null},{"country":"YE","phoneCode":"967","zone":"Asia/Aden","language":"ar","firstDay":"Sa","phoneMask":["+967-*-***-***","+967-**-***-***","+967-***-***-***"]},{"country":"ZM","phoneCode":"260","zone":"Africa/Maputo","language":"en","firstDay":null,"phoneMask":"+260-**-***-****"},{"country":"ZW","phoneCode":"263","zone":"Africa/Maputo","language":"en","firstDay":"Su","phoneMask":"+263-*-******"},{"country":"GF","phoneCode":"594","zone":"America/Cayenne","language":"fr","firstDay":"Mo","phoneMask":"+594-*****-****"},{"country":"MQ","phoneCode":"596","zone":"America/Martinique","language":"fr","firstDay":"Mo","phoneMask":"+596-***-**-**-**"},{"country":"NF","phoneCode":"672-3","zone":"Pacific/Norfolk","language":"en","firstDay":"Mo","phoneMask":"+672-3-**-***"},{"country":"IC","phoneCode":"3428","zone":"Europe/Berlin","language":"es","firstDay":"Mo"}]'), Wi = "geo-code", B = class B {
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
    return Bi;
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
    return e && (e.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (n = this.getByCodeFull(e)), !n && e.match(/[A-Z]{2}/) && (n = this.getByCountry(this.toCountry(e))), !n && e.match(/[a-z]{2}/) && (n = this.getByLanguage(this.toLanguage(e)))), this.toFull(Vi(n ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(e) {
    return this.getList().find(
      (n) => Ui(e, [
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
      var r;
      return n.country === e || ((r = n == null ? void 0 : n.countryAlternative) == null ? void 0 : r.find((s) => s === e));
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
      var r;
      return n.language === e || ((r = n == null ? void 0 : n.languageAlternative) == null ? void 0 : r.find((s) => s === e));
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
    return G() && (this.storage.get() || ((e = document.querySelector("html")) == null ? void 0 : e.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
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
x(B, "storage", new dn(Wi)), x(B, "location"), x(B, "item"), x(B, "language"), x(B, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), B.location = B.findLocation(), B.language = B.findLanguage(B.location), B.item = B.getByCode(B.location);
let ee = B;
const In = "d-response-loading", Pn = [], $ = class $ {
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
      const r = {
        ...this.headers,
        ...e || {}
      };
      return Re(n) && (r["Content-Type"] = n), r;
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
    return `${n ? this.url : ""}${e}`.replace("{locale}", ee.getLocation()).replace("{country}", ee.getCountry()).replace("{language}", ee.getLanguage());
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
    if (n !== "GET" && Re(e))
      return en(e) ? e : JSON.stringify(e);
  }
  /**
   * Getting data for the body of the get method.
   *
   * Получение данных для тела метода get.
   * @param request this request/ данный запрос
   * @param path path to request/ путь к запрос
   * @param method method for request/ метод запрос
   */
  static getBodyForGet(e, n = "", r = "GET") {
    if (r === "GET") {
      const s = n.match(/\?/) ? "&" : "?", c = typeof e == "object" ? cr(e) : e;
      if (Re(c))
        return `${s}${c}`;
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
      const n = Bt(this.requestDefault);
      if (e instanceof FormData)
        De(n, (r, s) => {
          e.has(s) || e.set(s, r);
        });
      else if (ie(e))
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
    return ie(e) && (this.headers = e), $;
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
    return this.url = e, $;
  }
  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(e) {
    return this.preparationItem = e, $;
  }
  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(e) {
    return this.preparationEndItem = e, $;
  }
  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters/ строка запроса или список параметров
   */
  static async request(e) {
    return en(e) ? await this.fetch({
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
    return this.response.push(...At(e)), $;
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
  static getResponse(e = "", n, r, s) {
    return this.response.find((c) => {
      if (ge(Bt(c == null ? void 0 : c.disable)) !== !0 && (c.path instanceof RegExp && e.match(c.path) || e === c.path) && n === c.method && (Pn.indexOf(c) === -1 || s)) {
        const u = this.addRequestDefault(c == null ? void 0 : c.request);
        let d = !1;
        if (r === u || u === "*any" ? d = !0 : Re(r) && Re(u) && ie(r) && ie(u) && !(r instanceof FormData) && !(u instanceof FormData) && Object.values(r).length === Object.values(u).length && (d = Object.entries(u).reduce(
          (g, [j, _]) => g && (_ === (r == null ? void 0 : r[j]) || _ === "*any"),
          !0
        )), d)
          return s && console.warn(`Response type: ${c.path}`), Pn.push(c), !0;
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
      hideError: r = !1,
      queryReturn: s = void 0,
      globalPreparation: c = !0,
      globalEnd: u = !0
    } = e, d = await this.makeEmulator(e);
    if (d)
      return d;
    let g = {};
    ze.show();
    try {
      this.preparationItem && c && await this.makePreparation();
      const j = await this.makeQuery(e), _ = u && this.preparationEndItem ? await this.makePreparationEnd(j) : {};
      if (this.status = j.status, this.statusText = j.statusText, _ != null && _.reset)
        return ze.hide(), await this.fetch(e);
      s ? g = await s(j) : "data" in _ ? g = _.data : (j.headers.get("Content-Type") ?? "").match("application/json") ? g = await j.json() : g = { data: await j.text() };
    } catch (j) {
      r && console.error("Api: ", j), this.error = j;
    }
    return ze.hide(), this.makeData(g, n);
  }
  /**
   * Emulates an execution request.
   *
   * Эмулирует запрос выполнения.
   * @param response Data for pre-request/ Данные для пред-запроса
   * @param request data for the request/ данные для запроса
   */
  static fetchResponse(e, n) {
    return this.startResponseLoading(), new Promise((r) => {
      xr(
        wo(e.response) ? e.response(n) : e.response
      ).then((s) => {
        Bt(e == null ? void 0 : e.lag) ? (ze.show(), setTimeout(() => {
          this.stopResponseLoading(), r(s), ze.hide();
        }, $i(0, 2e3))) : (this.stopResponseLoading(), r(s));
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
      method: r = "GET",
      global: s = r === "GET",
      devMode: c = !1
    } = e;
    if (s || c) {
      const u = this.addRequestDefault(e.request), d = this.getResponse(n, r, u, c);
      if (d) {
        const g = await this.fetchResponse(d, u);
        return c && console.warn("Response data:", n, u, g), g;
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
      api: r = !0,
      path: s = "",
      pathFull: c = void 0,
      method: u = "GET",
      headers: d = {},
      type: g = "application/json;charset=UTF-8",
      init: j = {}
    } = e, _ = c ?? this.getUrl(s, r), f = `${_}${this.getBodyForGet(n, _, u)}`, b = this.getHeaders(d, g), P = {
      ...j,
      method: u,
      body: this.getBody(n, u)
    };
    return b && (P.headers = b), await fetch(f, P);
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
    if (this.lastResponse = e, e && ie(e) && ("message" in e && (this.lastMessage = String(e.message)), n && "data" in e)) {
      if (ie(e.data)) {
        const r = { ...e.data };
        return "success" in e && (r.success = e.success), r;
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
    this.responseLoading && clearTimeout(this.responseLoading), G() && document.body.classList.add(In);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  static stopResponseLoading() {
    this.responseLoading = setTimeout(() => {
      this.responseLoading = void 0, G() && document.body.classList.remove(In);
    }, 1200);
  }
};
x($, "url", "/api/"), x($, "response", []), x($, "responseLoading"), x($, "headers", {}), x($, "requestDefault"), x($, "preparation", !1), x($, "preparationItem"), x($, "preparationEndItem"), x($, "status"), x($, "statusText"), x($, "error"), x($, "lastResponse"), x($, "lastMessage");
let tn = $;
class Hi {
  /**
   * Constructor
   * @param callback function for the cache/ функция для кэша
   */
  constructor(e) {
    x(this, "cache");
    x(this, "cacheOld");
    x(this, "comparisons", []);
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
    return this.cache === void 0 || this.comparisons.length !== e.length || this.comparisons.findIndex((n, r) => n !== e[r]) >= 0 ? (this.comparisons = [...e], !0) : !1;
  }
}
class Yi {
  constructor() {
    x(this, "cache", {});
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  get(e, n, r) {
    return this.getCacheItem(e, n).getCache(r ?? []);
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  async getAsync(e, n, r) {
    return await this.getCacheItem(e, n).getCacheAsync(r ?? []);
  }
  /**
   * Returns an instance of the object for working with the cache element.
   *
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   */
  getCacheItem(e, n) {
    return e in this.cache || (this.cache[e] = new Hi(n)), this.cache[e];
  }
}
const Tt = class Tt {
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  static get(e, n, r) {
    return this.cache.get(e, n, r);
  }
};
x(Tt, "cache"), Tt.cache = new Yi();
let Ln = Tt;
function ur(t, e = !1) {
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
          } catch (r) {
            console.error("transformation: JSON error", r);
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(n))
            return parseFloat(n);
          if (/^[0-9]+$/.exec(n))
            return parseInt(n, 10);
          if (e && G() && typeof (window == null ? void 0 : window[n]) == "function")
            return window[n];
        }
    }
  }
  return t;
}
const qi = "cookie-block";
class hr {
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
x(hr, "storage", new dn(qi));
const bt = {};
class $s {
  constructor(e) {
    x(this, "value");
    x(this, "options", {});
    if (this.name = e, e in Ht)
      return Ht[e];
    this.value = bt == null ? void 0 : bt[e], Ht[e] = this;
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
    this.value = ge(e), Object.assign(this.options, n), this.update();
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
    if (G() && !hr.get()) {
      const r = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(r)}`,
        `max-age=${r === "" ? "-1" : this.getAge()}`,
        `SameSite=${((e = this.options) == null ? void 0 : e.sameSite) ?? "strict"}`,
        ...((n = this.options) == null ? void 0 : n.arguments) ?? []
      ].join("; ");
    }
  }
}
(() => {
  if (G())
    for (const e of document.cookie.split(";")) {
      const [n, r] = e.trim().split("=");
      n && Re(r) && (bt[n] = ur(r));
    }
})();
const Ht = {}, Be = class Be {
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
    let n = this.map, r, s = "";
    return this.toNumber(e).forEach((c) => {
      s === "" && c in n ? (r = n[c], n = n[c].next) : s += c;
    }), {
      item: r,
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
    var r;
    const n = this.get(e);
    if (n)
      return (r = this.getByPhone(n.phone.toString())) == null ? void 0 : r.item;
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
    if (Re(e) && Array.isArray(n) && n.length > 0) {
      const r = this.removeZero(e), s = r.length;
      for (const c of n)
        if (this.getUnnecessaryLength(c) === s)
          return this.toStandard(r, c);
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
    const e = De(ee.getList(), (n) => {
      if (n != null && n.phoneMask)
        return {
          phone: (n == null ? void 0 : n.phoneCode) && Number(n.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: (n == null ? void 0 : n.phoneWithin) || 0,
          mask: At(n.phoneMask),
          value: n.country
        };
    });
    this.list = e.sort((n, r) => n.phone - r.phone);
  }
  /**
   * Creating a map for search.
   *
   * Создание карты для поиска.
   */
  static makeMap() {
    this.list.forEach((e) => {
      e.mask.forEach((n) => {
        let r = this.map, s;
        if (this.toNumber(n).forEach((c) => {
          c in r || (r[c] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), s = r[c], r = r[c].next;
        }), s) {
          s.value === void 0 && (s.info = e, s.value = e.value);
          const c = this.toWithin(n, e.within);
          s.mask.push(c), s.maskFull.push(c.replace(/\d/ig, "*")), s.items.push(e);
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
    let r = 0;
    return n.replace(/\*/ig, () => e[r++]);
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
x(Be, "list", []), x(Be, "map", {}), Be.makeList(), Be.makeMap();
let $n = Be;
const Ne = class Ne {
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
    const r = ge(n);
    r !== ((s = this.hash) == null ? void 0 : s[e]) && (this.hash[e] = r, this.update());
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
      (...n) => (e[n[1]] = ur(n[2]), "")
    ), e;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${cr(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
    De(this.watch, (n, r) => {
      var s;
      ((s = this.hash) == null ? void 0 : s[r]) !== (e == null ? void 0 : e[r]) && n.forEach((c) => c(e[r]));
    });
  }
};
x(Ne, "hash", {}), x(Ne, "watch", {}), x(Ne, "block", !1), G() && (Ne.reload(), addEventListener("hashchange", () => Ne.reload()));
let Fn = Ne;
const Yt = "__UI_ICON", Vn = 320, Un = "--LOAD--", it = class it {
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
  static async get(e, n = "", r = 1e3 * 60 * 3) {
    var c, u;
    const s = ((c = this.icons) == null ? void 0 : c[this.getName(e)]) ?? ((u = this.icons) == null ? void 0 : u[e]) ?? `${e.replace(/^@/, n ?? this.url)}.svg`;
    return typeof s == "string" ? s === Un && r > 0 ? (await this.wait(), this.get(e, n, r - Vn)) : s : await s;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return De(this.icons, (e, n) => n.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${tn.isLocalhost(), ""}${this.url}`;
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
    this.icons[this.getName(e)] = Un;
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
    De(e, (n, r) => this.add(r, n));
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
    return new Promise((e) => setTimeout(() => e(), Vn));
  }
};
x(it, "icons", {}), x(it, "url", "/icons/"), G() && (Yt in window || (window[Yt] = {}), it.icons = window[Yt]);
let Bn = it;
function Ki(t, e, n) {
  var r;
  return ((r = Ce(t)) == null ? void 0 : r[e]) ?? n;
}
function Xi(t, e, n) {
  const r = Ce(t);
  if (r) {
    const s = Ki(r, e);
    if (at(s) && at(n))
      De(n, (c, u) => {
        s[u] = ge(c);
      });
    else {
      const c = ge(n);
      !(e in r) && typeof c == "string" ? r.setAttribute(e.toString(), c) : r[e] = ge(n);
    }
  }
  return r;
}
function Wn(t, e = "div", n, r) {
  if (!G())
    return;
  const s = document.createElement(e);
  return typeof n == "function" ? n(s) : ie(n) && De(n, (c, u) => {
    Xi(s, u, c);
  }), t == null || t.insertBefore(s, null), s;
}
const st = class st {
  /**
   * Constructor
   */
  constructor() {
    x(this, "item", Zr());
    x(this, "is", Qe(() => this.item.value !== void 0));
    st.is().then((e) => {
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
    return Wn(document.body, "div", (e) => {
      e.style.height = "24px", e.style.overflowY = "scroll", e.style.position = "fixed", e.style.width = "100%", Wn(e, "div", (n) => {
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
x(st, "storage", new dn("scrollbar", !0)), x(st, "calculate", !1);
let Hn = st;
function Yn(t) {
  return Array.isArray(t);
}
function Gi(t) {
  return t.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (e) => `${e.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...e) => `${e[1].toUpperCase()}`).replace(/^([A-Z])/, (e) => `${e.toLowerCase()}`);
}
const re = class re {
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
    ee.set(e, !0), this.item.value = ee.getItem();
  }
};
x(re, "item", Qr(ee.get())), x(re, "country", Qe(() => re.item.value.country)), x(re, "language", Qe(() => re.item.value.language)), x(re, "standard", Qe(() => re.item.value.standard)), x(re, "firstDay", Qe(() => re.item.value.firstDay));
let qn = re;
var V = /* @__PURE__ */ ((t) => (t.text = "text", t.string = "string", t.number = "number", t.boolean = "boolean", t.select = "select", t.array = "array", t.object = "object", t))(V || {}), Ji = /* @__PURE__ */ ((t) => (t.adaptive = "Adaptive", t.status = "Status", t.value = "Values", t.style = "Styles", t))(Ji || {});
class Zi {
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
      case V.text:
      case V.string:
        return this.toString();
      case V.number:
        return this.toNumber();
      case V.boolean:
        return this.toBoolean();
      case V.select:
        return this.toSelect();
      case V.object:
      case V.array:
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
    let r;
    if (n !== void 0)
      switch (typeof n) {
        case "boolean":
          r = n ? "true" : "false";
          break;
        default:
          r = String(n);
          break;
      }
    else e === "boolean" && (r = "false");
    return r ? {
      defaultValue: { summary: r }
    } : {};
  }
  /**
   * Returns a property description based on the language
   *
   * Возвращает описание свойства с учетом языка
   */
  getDescription() {
    const e = ee.getLanguage(), n = this.item.options.description;
    let r;
    return typeof n == "string" ? r = n : ie(n) && e in n && (r = n[e]), r ? { description: r } : {};
  }
  /**
   * Returns the type of property
   *
   * Возвращает тип свойства
   */
  getType() {
    const e = this.item.options.type, n = this.item.options.options;
    let r;
    if (n)
      Yn(n) ? r = n.join(" | ") : ie(n) && (r = Object.keys(n).join(" | "));
    else if (e)
      Yn(e) ? r = e.join(" | ") : r = e;
    else
      switch (this.item.type) {
        case V.select:
          r = String(V.object);
          break;
        case V.text:
          r = String(V.string);
          break;
        default:
          r = String(this.item.type);
      }
    return r ? {
      type: { summary: r }
    } : {};
  }
  /**
   * Function to create a Storybook args object with boolean type
   *
   * Функция для создания объекта аргументов Storybook с типом boolean
   */
  toBoolean() {
    return {
      control: V.boolean,
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
    const e = this.item.options, n = { type: V.number }, r = {
      ...this.getCategory(),
      ...this.getDefaultValue(),
      ...this.getType()
    };
    return "min" in e && (n.min = e.min), "max" in e && (n.min = e.max), {
      control: n,
      table: r,
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
      control: V.object,
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
      control: V.select,
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
      control: V.text,
      table: {
        ...this.getCategory(),
        ...this.getDefaultValue(),
        ...this.getType()
      },
      ...this.getDescription()
    };
  }
}
class Fs {
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
  constructor(e, n, r, s, c, u) {
    x(this, "list");
    this.component = e, this.props = n, this.defaults = r, this.wikiDesign = s, this.wikiBasic = c, this.wikiDescriptions = u, this.list = this.initList();
  }
  /**
   * Returns the name of the component
   *
   * Возвращает имя компонента
   */
  getName() {
    return this.component;
  }
  /**
   * Returns the properties wiki for the component
   *
   * Возвращает wiki свойств для компонента
   * @return The properties wiki for the component/ wiki свойств для компонента
   */
  getWiki() {
    return this.initPropsWiki();
  }
  /**
   * Returns the description of the component from the wiki
   *
   * Возвращает описание компонента из wiki
   * @return The description of the component/ описание компонента
   */
  getDescription() {
    var e;
    return this.toDescriptionText((e = this.getDescriptionItem()) == null ? void 0 : e.description);
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
      const r = n.getName(), s = n.getValue();
      s !== void 0 && (e[r] = s);
    }), e;
  }
  /**
   * Returns a Storybook item by its ID
   *
   * Возвращает элемент Storybook по его ID
   * @param id - The ID of the story/ ID истории
   */
  getStoryItem(e) {
    const n = this.getDescriptionItem();
    if (n && n.stories)
      return n.stories.find((r) => r.id === e);
  }
  /**
   * Returns the name of the story by its ID
   *
   * Возвращает имя истории по ее ID
   * @param id - The ID of the story/ ID истории
   */
  getStoryName(e) {
    var n;
    return this.toDescriptionText(
      (n = this.getStoryItem(e)) == null ? void 0 : n.name
    );
  }
  /**
   * Returns a wiki item by its name
   *
   * Возвращает элемент wiki по его имени
   * @param name - The name of the wiki item/ имя элемента wiki
   */
  getWikiItem(e) {
    var n, r;
    if (e in this.wikiBasic || e in this.wikiDesign)
      return {
        ...((n = this.wikiBasic) == null ? void 0 : n[e]) ?? {},
        ...((r = this.wikiDesign) == null ? void 0 : r[e]) ?? {}
      };
  }
  /**
   * Returns the description item for the component
   *
   * Возвращает элемент описания для компонента
   * @return The description item for the component/ элемент описания для компонента
   */
  getDescriptionItem() {
    return this.wikiDescriptions.find((e) => e.name === this.component);
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
    var r, s;
    return {
      ...n,
      options: {
        ...n.options,
        type: ((r = n.options) == null ? void 0 : r.type) ?? e.type,
        defaultValue: this.defaults[e.name],
        options: e.option ?? ((s = n.options) == null ? void 0 : s.options) ?? void 0
      }
    };
  }
  /**
   * Converts the descriptions to text format
   *
   * Преобразует описания в текстовый формат
   * @param descriptions - The descriptions to convert/ Описания для преобразования
   */
  toDescriptionText(e) {
    var n;
    if (e) {
      const r = ee.getLanguage();
      return ie(e) ? (e == null ? void 0 : e[r]) ?? ((n = Object.values(e)) == null ? void 0 : n[0]) : e;
    }
    return "";
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
      const r = `${Gi(this.component)}.${n.name}`, s = this.getWikiItem(r) ?? this.getWikiItem(n.name);
      s && e.push(
        new Zi(
          n.name,
          this.toWikiItemChanged(n, s)
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
const Qi = {
  name: "Icon",
  description: {
    en: "Component for displaying icons",
    ru: "Компонент для отображения иконок"
  },
  possibilities: {
    en: [
      "displaying icons by name",
      "switching icons on active state",
      "animation support"
    ],
    ru: [
      "отображение иконок по имени",
      "переключение иконок в активном состоянии",
      "поддержка анимации"
    ]
  },
  import: [],
  stories: [
    {
      id: "IconState",
      name: {
        en: "Icon state",
        ru: "Состояние иконки"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <DesignComponent icon="heart_minus" iconActive="favorite" :active="true"/>
          </div>
        </div>
      `
    },
    {
      id: "IconDirection",
      name: {
        en: "Direction",
        ru: "Направление компонента"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">LTR</div>
            <DesignComponent dir icon="arrow_forward"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-item--rtl">
            <div class="wiki-storybook-item__label">RTL</div>
            <DesignComponent dir icon="arrow_forward"/>
          </div>
        </div>
      `
    },
    {
      id: "IconPalette",
      name: {
        en: "Palette",
        ru: "Палитра"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <DesignComponent icon="home" size="lg"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Palette</div>
            <DesignComponent icon="home" size="lg" asPalette/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Inverse</div>
            <DesignComponent icon="home" size="lg" asPalette inverse/>
          </div>
        </div>
      `
    },
    {
      id: "IconSkeleton",
      name: {
        en: "Skeleton",
        ru: "Скелетон"
      },
      components: ["Skeleton"],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <DesignSkeleton>
              <DesignComponent icon="home"/>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <DesignSkeleton :active="true">
              <DesignComponent isSkeleton icon="home" rounded="md"/>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Hidden</div>
            <DesignSkeleton :active="true">
              <DesignComponent icon="home"/>
            </DesignSkeleton>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Icon'} type={'icon'}/>
<Canvas of={Component.IconState}/>

<StorybookDescriptions componentName={'Style'} type={'dir'}/>
<Canvas of={Component.IconDirection}/>

<StorybookDescriptions componentName={'Style'} type={'asPalette'}/>
<Canvas of={Component.IconPalette}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.IconSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Icon'} type={'expose.isActive'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  }
}, es = {
  name: "Image",
  description: {
    en: "Image component for displaying images",
    ru: "Компонент для отображения изображений и иконок. Основан на `ImageDesign` и поддерживает работу с файлами, ссылками и именами икон"
  },
  possibilities: {
    en: [
      "support for various source types: string, `File`, image or PDF address",
      "adaptive sizing with `adaptive`, `objectWidth`, `objectHeight`",
      "cropping and positioning via `coordinator`, `x`, `y`",
      "rotation or hiding the component with properties `turn`, `hide`, `disabled`",
      "mode selection for filling (`size`: `auto`, `contain`, `cover`)"
    ],
    ru: [
      "поддержка различных типов исходников: строка, `File`, адрес картинки или PDF",
      "адаптивное измерение с помощью `adaptive`, `objectWidth`, `objectHeight`",
      "обрезка и позиционирование через `coordinator`, `x`, `y`",
      "поворот или скрытие компонента свойствами `turn`, `hide`, `disabled`",
      "выбор режима заполнения (`size`: `auto`, `contain`, `cover`)"
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  import: [
    "import { demoPdf, image1, phone1, phone2, phone3 } from '@dxt-ui/wiki/media'"
  ],
  stories: [
    {
      id: "ImageType",
      name: {
        en: "Value type",
        ru: "Тип значения"
      },
      setup: `
      return {
        image1,
        demoPdf
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Icon</div>
            <DesignComponent value="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Image/ contain</div>
            <DesignComponent :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--squared--max">
            <div class="wiki-storybook-item__label">PDF</div>
            <DesignComponent :value="demoPdf"/>
          </div>
        </div>
      `
    },
    {
      id: "ImageSize",
      name: {
        en: "Display control",
        ru: "Отображение"
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: auto (default)</div>
            <DesignComponent :value="image1" size="auto"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: contain</div>
            <DesignComponent :value="image1" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: cover</div>
            <DesignComponent :value="image1" size="cover"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator</div>
            <DesignComponent :value="image1" :coordinator="[60, 10, 10, 40]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">x, y</div>
            <DesignComponent :value="image1" x="20" y="-10"/>
          </div>
        </div>
      `
    },
    {
      id: "ImageAdaptive",
      name: {
        en: "Adapted images",
        ru: "Адаптированные изображения"
      },
      setup: `
      return {
        phone1,
        phone2,
        phone3
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone1" adaptive object-width="76.2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone2" adaptive object-width="71.9"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone3" adaptive object-width="129.9"/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Image'} type={'value'}/>
<Canvas of={Component.ImageType}/>

<StorybookDescriptions componentName={'Image'} type={'size'}/>
<Canvas of={Component.ImageSize}/>

<StorybookDescriptions componentName={'Image'} type={'adaptive'}/>
<Canvas of={Component.ImageAdaptive}/>
    `,
    events: `
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Image'} type={'expose.type'}/>
<StorybookDescriptions componentName={'Image'} type={'expose.data'}/>
    `
  }
}, ts = {
  name: "Skeleton",
  description: {
    en: "Skeleton component for displaying loading placeholders",
    ru: "Компонент для отображения заглушки загрузки. Создает анимированные плейсхолдеры для контента во время загрузки данных"
  },
  possibilities: {
    en: [
      "animated loading placeholders for content",
      "control visibility with `active` property",
      "child elements react to skeleton state via `isSkeleton` property or special classes",
      "customizable appearance and animation"
    ],
    ru: [
      "анимированные заглушки загрузки для контента",
      "управление видимостью через свойство `active`",
      "дочерние элементы реагируют на состояние скелетона через свойство `isSkeleton` или специальные классы",
      "настраиваемый внешний вид и анимация"
    ]
  },
  render: `
      <div class="wiki-storybook-item">
        <div class="wiki-storybook-card">
          <div class="wiki-storybook-card__image" style="background-image: url('\${image1}')"/>
          <div class="wiki-storybook-card__content">
            <div class="wiki-storybook-card__label">Название товара</div>
            <div class="wiki-storybook-card__information">Краткая подпись</div>
            <div class="wiki-storybook-card__description">
              Подробное описание товара, которое рассказывает о его основных характеристиках и преимуществах.
            </div>
            <div class="wiki-storybook-card__actions">
              <button>Купить</button>
            </div>
          </div>
        </div>
      </div>
    `,
  import: [
    "import { image1 } from '@dxt-ui/wiki/media'"
  ],
  stories: [
    {
      id: "SkeletonBasic",
      name: {
        en: "Basic usage",
        ru: "Базовое использование"
      },
      setup: `
      return {}
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Active skeleton</div>
            <DesignComponent :active="true">
              <div>Loading content...</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Inactive skeleton</div>
            <DesignComponent :active="false">
              <div>Loaded content</div>
            </DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: "SkeletonWithChildElements",
      name: {
        en: "With child elements",
        ru: "С дочерними элементами"
      },
      setup: `
      return {}
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Child elements with isSkeleton=true</div>
            <DesignComponent :active="true">
              <div :isSkeleton="true">Visible in skeleton mode</div>
              <div :isSkeleton="false">Hidden in skeleton mode</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Normal state</div>
            <DesignComponent :active="false">
              <div :isSkeleton="true">Normal content 1</div>
              <div :isSkeleton="false">Normal content 2</div>
            </DesignComponent>
          </div>
        </div>
      `
    }
  ]
}, ns = [
  Qi,
  es,
  ts
];
var _t = { exports: {} }, Je = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function os() {
  if (Kn) return Je;
  Kn = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(r, s, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      c = {};
      for (var d in s)
        d !== "key" && (c[d] = s[d]);
    } else c = s;
    return s = c.ref, {
      $$typeof: t,
      type: r,
      key: u,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return Je.Fragment = e, Je.jsx = n, Je.jsxs = n, Je;
}
var Ze = {}, Ct = { exports: {} }, D = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function rs() {
  if (Xn) return D;
  Xn = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), j = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), f = Symbol.iterator;
  function b(a) {
    return a === null || typeof a != "object" ? null : (a = f && a[f] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var P = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, F = Object.assign, H = {};
  function ce(a, h, y) {
    this.props = a, this.context = h, this.refs = H, this.updater = y || P;
  }
  ce.prototype.isReactComponent = {}, ce.prototype.setState = function(a, h) {
    if (typeof a != "object" && typeof a != "function" && a != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, a, h, "setState");
  }, ce.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function ve() {
  }
  ve.prototype = ce.prototype;
  function Me(a, h, y) {
    this.props = a, this.context = h, this.refs = H, this.updater = y || P;
  }
  var J = Me.prototype = new ve();
  J.constructor = Me, F(J, ce.prototype), J.isPureReactComponent = !0;
  var Le = Array.isArray, N = { H: null, A: null, T: null, S: null, V: null }, Se = Object.prototype.hasOwnProperty;
  function Ae(a, h, y, v, C, R) {
    return y = R.ref, {
      $$typeof: t,
      type: a,
      key: h,
      ref: y !== void 0 ? y : null,
      props: R
    };
  }
  function te(a, h) {
    return Ae(
      a.type,
      h,
      void 0,
      void 0,
      void 0,
      a.props
    );
  }
  function le(a) {
    return typeof a == "object" && a !== null && a.$$typeof === t;
  }
  function Ke(a) {
    var h = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(y) {
      return h[y];
    });
  }
  var I = /\/+/g;
  function xe(a, h) {
    return typeof a == "object" && a !== null && a.key != null ? Ke("" + a.key) : h.toString(36);
  }
  function he() {
  }
  function ne(a) {
    switch (a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw a.reason;
      default:
        switch (typeof a.status == "string" ? a.then(he, he) : (a.status = "pending", a.then(
          function(h) {
            a.status === "pending" && (a.status = "fulfilled", a.value = h);
          },
          function(h) {
            a.status === "pending" && (a.status = "rejected", a.reason = h);
          }
        )), a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw a.reason;
        }
    }
    throw a;
  }
  function Y(a, h, y, v, C) {
    var R = typeof a;
    (R === "undefined" || R === "boolean") && (a = null);
    var w = !1;
    if (a === null) w = !0;
    else
      switch (R) {
        case "bigint":
        case "string":
        case "number":
          w = !0;
          break;
        case "object":
          switch (a.$$typeof) {
            case t:
            case e:
              w = !0;
              break;
            case _:
              return w = a._init, Y(
                w(a._payload),
                h,
                y,
                v,
                C
              );
          }
      }
    if (w)
      return C = C(a), w = v === "" ? "." + xe(a, 0) : v, Le(C) ? (y = "", w != null && (y = w.replace(I, "$&/") + "/"), Y(C, h, y, "", function(X) {
        return X;
      })) : C != null && (le(C) && (C = te(
        C,
        y + (C.key == null || a && a.key === C.key ? "" : ("" + C.key).replace(
          I,
          "$&/"
        ) + "/") + w
      )), h.push(C)), 1;
    w = 0;
    var q = v === "" ? "." : v + ":";
    if (Le(a))
      for (var E = 0; E < a.length; E++)
        v = a[E], R = q + xe(v, E), w += Y(
          v,
          h,
          y,
          R,
          C
        );
    else if (E = b(a), typeof E == "function")
      for (a = E.call(a), E = 0; !(v = a.next()).done; )
        v = v.value, R = q + xe(v, E++), w += Y(
          v,
          h,
          y,
          R,
          C
        );
    else if (R === "object") {
      if (typeof a.then == "function")
        return Y(
          ne(a),
          h,
          y,
          v,
          C
        );
      throw h = String(a), Error(
        "Objects are not valid as a React child (found: " + (h === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : h) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return w;
  }
  function oe(a, h, y) {
    if (a == null) return a;
    var v = [], C = 0;
    return Y(a, v, "", "", function(R) {
      return h.call(y, R, C++);
    }), v;
  }
  function je(a) {
    if (a._status === -1) {
      var h = a._result;
      h = h(), h.then(
        function(y) {
          (a._status === 0 || a._status === -1) && (a._status = 1, a._result = y);
        },
        function(y) {
          (a._status === 0 || a._status === -1) && (a._status = 2, a._result = y);
        }
      ), a._status === -1 && (a._status = 0, a._result = h);
    }
    if (a._status === 1) return a._result.default;
    throw a._result;
  }
  var de = typeof reportError == "function" ? reportError : function(a) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var h = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof a == "object" && a !== null && typeof a.message == "string" ? String(a.message) : String(a),
        error: a
      });
      if (!window.dispatchEvent(h)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", a);
      return;
    }
    console.error(a);
  };
  function Te() {
  }
  return D.Children = {
    map: oe,
    forEach: function(a, h, y) {
      oe(
        a,
        function() {
          h.apply(this, arguments);
        },
        y
      );
    },
    count: function(a) {
      var h = 0;
      return oe(a, function() {
        h++;
      }), h;
    },
    toArray: function(a) {
      return oe(a, function(h) {
        return h;
      }) || [];
    },
    only: function(a) {
      if (!le(a))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return a;
    }
  }, D.Component = ce, D.Fragment = n, D.Profiler = s, D.PureComponent = Me, D.StrictMode = r, D.Suspense = g, D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, D.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(a) {
      return N.H.useMemoCache(a);
    }
  }, D.cache = function(a) {
    return function() {
      return a.apply(null, arguments);
    };
  }, D.cloneElement = function(a, h, y) {
    if (a == null)
      throw Error(
        "The argument must be a React element, but you passed " + a + "."
      );
    var v = F({}, a.props), C = a.key, R = void 0;
    if (h != null)
      for (w in h.ref !== void 0 && (R = void 0), h.key !== void 0 && (C = "" + h.key), h)
        !Se.call(h, w) || w === "key" || w === "__self" || w === "__source" || w === "ref" && h.ref === void 0 || (v[w] = h[w]);
    var w = arguments.length - 2;
    if (w === 1) v.children = y;
    else if (1 < w) {
      for (var q = Array(w), E = 0; E < w; E++)
        q[E] = arguments[E + 2];
      v.children = q;
    }
    return Ae(a.type, C, void 0, void 0, R, v);
  }, D.createContext = function(a) {
    return a = {
      $$typeof: u,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, a.Provider = a, a.Consumer = {
      $$typeof: c,
      _context: a
    }, a;
  }, D.createElement = function(a, h, y) {
    var v, C = {}, R = null;
    if (h != null)
      for (v in h.key !== void 0 && (R = "" + h.key), h)
        Se.call(h, v) && v !== "key" && v !== "__self" && v !== "__source" && (C[v] = h[v]);
    var w = arguments.length - 2;
    if (w === 1) C.children = y;
    else if (1 < w) {
      for (var q = Array(w), E = 0; E < w; E++)
        q[E] = arguments[E + 2];
      C.children = q;
    }
    if (a && a.defaultProps)
      for (v in w = a.defaultProps, w)
        C[v] === void 0 && (C[v] = w[v]);
    return Ae(a, R, void 0, void 0, null, C);
  }, D.createRef = function() {
    return { current: null };
  }, D.forwardRef = function(a) {
    return { $$typeof: d, render: a };
  }, D.isValidElement = le, D.lazy = function(a) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: a },
      _init: je
    };
  }, D.memo = function(a, h) {
    return {
      $$typeof: j,
      type: a,
      compare: h === void 0 ? null : h
    };
  }, D.startTransition = function(a) {
    var h = N.T, y = {};
    N.T = y;
    try {
      var v = a(), C = N.S;
      C !== null && C(y, v), typeof v == "object" && v !== null && typeof v.then == "function" && v.then(Te, de);
    } catch (R) {
      de(R);
    } finally {
      N.T = h;
    }
  }, D.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, D.use = function(a) {
    return N.H.use(a);
  }, D.useActionState = function(a, h, y) {
    return N.H.useActionState(a, h, y);
  }, D.useCallback = function(a, h) {
    return N.H.useCallback(a, h);
  }, D.useContext = function(a) {
    return N.H.useContext(a);
  }, D.useDebugValue = function() {
  }, D.useDeferredValue = function(a, h) {
    return N.H.useDeferredValue(a, h);
  }, D.useEffect = function(a, h, y) {
    var v = N.H;
    if (typeof y == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return v.useEffect(a, h);
  }, D.useId = function() {
    return N.H.useId();
  }, D.useImperativeHandle = function(a, h, y) {
    return N.H.useImperativeHandle(a, h, y);
  }, D.useInsertionEffect = function(a, h) {
    return N.H.useInsertionEffect(a, h);
  }, D.useLayoutEffect = function(a, h) {
    return N.H.useLayoutEffect(a, h);
  }, D.useMemo = function(a, h) {
    return N.H.useMemo(a, h);
  }, D.useOptimistic = function(a, h) {
    return N.H.useOptimistic(a, h);
  }, D.useReducer = function(a, h, y) {
    return N.H.useReducer(a, h, y);
  }, D.useRef = function(a) {
    return N.H.useRef(a);
  }, D.useState = function(a) {
    return N.H.useState(a);
  }, D.useSyncExternalStore = function(a, h, y) {
    return N.H.useSyncExternalStore(
      a,
      h,
      y
    );
  }, D.useTransition = function() {
    return N.H.useTransition();
  }, D.version = "19.1.0", D;
}
var et = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
et.exports;
var Gn;
function is() {
  return Gn || (Gn = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      function n(i, l) {
        Object.defineProperty(c.prototype, i, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              l[0],
              l[1]
            );
          }
        });
      }
      function r(i) {
        return i === null || typeof i != "object" ? null : (i = ft && i[ft] || i["@@iterator"], typeof i == "function" ? i : null);
      }
      function s(i, l) {
        i = (i = i.constructor) && (i.displayName || i.name) || "ReactClass";
        var p = i + "." + l;
        fn[p] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          l,
          i
        ), fn[p] = !0);
      }
      function c(i, l, p) {
        this.props = i, this.context = l, this.refs = It, this.updater = p || pn;
      }
      function u() {
      }
      function d(i, l, p) {
        this.props = i, this.context = l, this.refs = It, this.updater = p || pn;
      }
      function g(i) {
        return "" + i;
      }
      function j(i) {
        try {
          g(i);
          var l = !1;
        } catch {
          l = !0;
        }
        if (l) {
          l = console;
          var p = l.error, m = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
          return p.call(
            l,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            m
          ), g(i);
        }
      }
      function _(i) {
        if (i == null) return null;
        if (typeof i == "function")
          return i.$$typeof === dr ? null : i.displayName || i.name || null;
        if (typeof i == "string") return i;
        switch (i) {
          case a:
            return "Fragment";
          case y:
            return "Profiler";
          case h:
            return "StrictMode";
          case w:
            return "Suspense";
          case q:
            return "SuspenseList";
          case Xe:
            return "Activity";
        }
        if (typeof i == "object")
          switch (typeof i.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), i.$$typeof) {
            case Te:
              return "Portal";
            case C:
              return (i.displayName || "Context") + ".Provider";
            case v:
              return (i._context.displayName || "Context") + ".Consumer";
            case R:
              var l = i.render;
              return i = i.displayName, i || (i = l.displayName || l.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
            case E:
              return l = i.displayName || null, l !== null ? l : _(i.type) || "Memo";
            case X:
              l = i._payload, i = i._init;
              try {
                return _(i(l));
              } catch {
              }
          }
        return null;
      }
      function f(i) {
        if (i === a) return "<>";
        if (typeof i == "object" && i !== null && i.$$typeof === X)
          return "<...>";
        try {
          var l = _(i);
          return l ? "<" + l + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function b() {
        var i = A.A;
        return i === null ? null : i.getOwner();
      }
      function P() {
        return Error("react-stack-top-frame");
      }
      function F(i) {
        if (gt.call(i, "key")) {
          var l = Object.getOwnPropertyDescriptor(i, "key").get;
          if (l && l.isReactWarning) return !1;
        }
        return i.key !== void 0;
      }
      function H(i, l) {
        function p() {
          vn || (vn = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            l
          ));
        }
        p.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: p,
          configurable: !0
        });
      }
      function ce() {
        var i = _(this.type);
        return jn[i] || (jn[i] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), i = this.props.ref, i !== void 0 ? i : null;
      }
      function ve(i, l, p, m, k, T, M, O) {
        return p = T.ref, i = {
          $$typeof: de,
          type: i,
          key: l,
          props: T,
          _owner: k
        }, (p !== void 0 ? p : null) !== null ? Object.defineProperty(i, "ref", {
          enumerable: !1,
          get: ce
        }) : Object.defineProperty(i, "ref", { enumerable: !1, value: null }), i._store = {}, Object.defineProperty(i._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(i, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(i, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: M
        }), Object.defineProperty(i, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: O
        }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
      }
      function Me(i, l) {
        return l = ve(
          i.type,
          l,
          void 0,
          void 0,
          i._owner,
          i.props,
          i._debugStack,
          i._debugTask
        ), i._store && (l._store.validated = i._store.validated), l;
      }
      function J(i) {
        return typeof i == "object" && i !== null && i.$$typeof === de;
      }
      function Le(i) {
        var l = { "=": "=0", ":": "=2" };
        return "$" + i.replace(/[=:]/g, function(p) {
          return l[p];
        });
      }
      function N(i, l) {
        return typeof i == "object" && i !== null && i.key != null ? (j(i.key), Le("" + i.key)) : l.toString(36);
      }
      function Se() {
      }
      function Ae(i) {
        switch (i.status) {
          case "fulfilled":
            return i.value;
          case "rejected":
            throw i.reason;
          default:
            switch (typeof i.status == "string" ? i.then(Se, Se) : (i.status = "pending", i.then(
              function(l) {
                i.status === "pending" && (i.status = "fulfilled", i.value = l);
              },
              function(l) {
                i.status === "pending" && (i.status = "rejected", i.reason = l);
              }
            )), i.status) {
              case "fulfilled":
                return i.value;
              case "rejected":
                throw i.reason;
            }
        }
        throw i;
      }
      function te(i, l, p, m, k) {
        var T = typeof i;
        (T === "undefined" || T === "boolean") && (i = null);
        var M = !1;
        if (i === null) M = !0;
        else
          switch (T) {
            case "bigint":
            case "string":
            case "number":
              M = !0;
              break;
            case "object":
              switch (i.$$typeof) {
                case de:
                case Te:
                  M = !0;
                  break;
                case X:
                  return M = i._init, te(
                    M(i._payload),
                    l,
                    p,
                    m,
                    k
                  );
              }
          }
        if (M) {
          M = i, k = k(M);
          var O = m === "" ? "." + N(M, 0) : m;
          return mn(k) ? (p = "", O != null && (p = O.replace(bn, "$&/") + "/"), te(k, l, p, "", function(ke) {
            return ke;
          })) : k != null && (J(k) && (k.key != null && (M && M.key === k.key || j(k.key)), p = Me(
            k,
            p + (k.key == null || M && M.key === k.key ? "" : ("" + k.key).replace(
              bn,
              "$&/"
            ) + "/") + O
          ), m !== "" && M != null && J(M) && M.key == null && M._store && !M._store.validated && (p._store.validated = 2), k = p), l.push(k)), 1;
        }
        if (M = 0, O = m === "" ? "." : m + ":", mn(i))
          for (var S = 0; S < i.length; S++)
            m = i[S], T = O + N(m, S), M += te(
              m,
              l,
              p,
              T,
              k
            );
        else if (S = r(i), typeof S == "function")
          for (S === i.entries && (kn || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), kn = !0), i = S.call(i), S = 0; !(m = i.next()).done; )
            m = m.value, T = O + N(m, S++), M += te(
              m,
              l,
              p,
              T,
              k
            );
        else if (T === "object") {
          if (typeof i.then == "function")
            return te(
              Ae(i),
              l,
              p,
              m,
              k
            );
          throw l = String(i), Error(
            "Objects are not valid as a React child (found: " + (l === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : l) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return M;
      }
      function le(i, l, p) {
        if (i == null) return i;
        var m = [], k = 0;
        return te(i, m, "", "", function(T) {
          return l.call(p, T, k++);
        }), m;
      }
      function Ke(i) {
        if (i._status === -1) {
          var l = i._result;
          l = l(), l.then(
            function(p) {
              (i._status === 0 || i._status === -1) && (i._status = 1, i._result = p);
            },
            function(p) {
              (i._status === 0 || i._status === -1) && (i._status = 2, i._result = p);
            }
          ), i._status === -1 && (i._status = 0, i._result = l);
        }
        if (i._status === 1)
          return l = i._result, l === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            l
          ), "default" in l || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            l
          ), l.default;
        throw i._result;
      }
      function I() {
        var i = A.H;
        return i === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), i;
      }
      function xe() {
      }
      function he(i) {
        if (mt === null)
          try {
            var l = ("require" + Math.random()).slice(0, 7);
            mt = (t && t[l]).call(
              t,
              "timers"
            ).setImmediate;
          } catch {
            mt = function(m) {
              Cn === !1 && (Cn = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var k = new MessageChannel();
              k.port1.onmessage = m, k.port2.postMessage(void 0);
            };
          }
        return mt(i);
      }
      function ne(i) {
        return 1 < i.length && typeof AggregateError == "function" ? new AggregateError(i) : i[0];
      }
      function Y(i, l) {
        l !== yt - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), yt = l;
      }
      function oe(i, l, p) {
        var m = A.actQueue;
        if (m !== null)
          if (m.length !== 0)
            try {
              je(m), he(function() {
                return oe(i, l, p);
              });
              return;
            } catch (k) {
              A.thrownErrors.push(k);
            }
          else A.actQueue = null;
        0 < A.thrownErrors.length ? (m = ne(A.thrownErrors), A.thrownErrors.length = 0, p(m)) : l(i);
      }
      function je(i) {
        if (!Pt) {
          Pt = !0;
          var l = 0;
          try {
            for (; l < i.length; l++) {
              var p = i[l];
              do {
                A.didUsePromise = !1;
                var m = p(!1);
                if (m !== null) {
                  if (A.didUsePromise) {
                    i[l] = p, i.splice(0, l);
                    return;
                  }
                  p = m;
                } else break;
              } while (!0);
            }
            i.length = 0;
          } catch (k) {
            i.splice(0, l + 1), A.thrownErrors.push(k);
          } finally {
            Pt = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var de = Symbol.for("react.transitional.element"), Te = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), C = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), Xe = Symbol.for("react.activity"), ft = Symbol.iterator, fn = {}, pn = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(i) {
          s(i, "forceUpdate");
        },
        enqueueReplaceState: function(i) {
          s(i, "replaceState");
        },
        enqueueSetState: function(i) {
          s(i, "setState");
        }
      }, gn = Object.assign, It = {};
      Object.freeze(It), c.prototype.isReactComponent = {}, c.prototype.setState = function(i, l) {
        if (typeof i != "object" && typeof i != "function" && i != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, i, l, "setState");
      }, c.prototype.forceUpdate = function(i) {
        this.updater.enqueueForceUpdate(this, i, "forceUpdate");
      };
      var Z = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, pt;
      for (pt in Z)
        Z.hasOwnProperty(pt) && n(pt, Z[pt]);
      u.prototype = c.prototype, Z = d.prototype = new u(), Z.constructor = d, gn(Z, c.prototype), Z.isPureReactComponent = !0;
      var mn = Array.isArray, dr = Symbol.for("react.client.reference"), A = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, gt = Object.prototype.hasOwnProperty, yn = console.createTask ? console.createTask : function() {
        return null;
      };
      Z = {
        "react-stack-bottom-frame": function(i) {
          return i();
        }
      };
      var vn, xn, jn = {}, fr = Z["react-stack-bottom-frame"].bind(Z, P)(), pr = yn(f(P)), kn = !1, bn = /\/+/g, _n = typeof reportError == "function" ? reportError : function(i) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var l = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof i == "object" && i !== null && typeof i.message == "string" ? String(i.message) : String(i),
            error: i
          });
          if (!window.dispatchEvent(l)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", i);
          return;
        }
        console.error(i);
      }, Cn = !1, mt = null, yt = 0, vt = !1, Pt = !1, wn = typeof queueMicrotask == "function" ? function(i) {
        queueMicrotask(function() {
          return queueMicrotask(i);
        });
      } : he;
      Z = Object.freeze({
        __proto__: null,
        c: function(i) {
          return I().useMemoCache(i);
        }
      }), e.Children = {
        map: le,
        forEach: function(i, l, p) {
          le(
            i,
            function() {
              l.apply(this, arguments);
            },
            p
          );
        },
        count: function(i) {
          var l = 0;
          return le(i, function() {
            l++;
          }), l;
        },
        toArray: function(i) {
          return le(i, function(l) {
            return l;
          }) || [];
        },
        only: function(i) {
          if (!J(i))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return i;
        }
      }, e.Component = c, e.Fragment = a, e.Profiler = y, e.PureComponent = d, e.StrictMode = h, e.Suspense = w, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A, e.__COMPILER_RUNTIME = Z, e.act = function(i) {
        var l = A.actQueue, p = yt;
        yt++;
        var m = A.actQueue = l !== null ? l : [], k = !1;
        try {
          var T = i();
        } catch (S) {
          A.thrownErrors.push(S);
        }
        if (0 < A.thrownErrors.length)
          throw Y(l, p), i = ne(A.thrownErrors), A.thrownErrors.length = 0, i;
        if (T !== null && typeof T == "object" && typeof T.then == "function") {
          var M = T;
          return wn(function() {
            k || vt || (vt = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(S, ke) {
              k = !0, M.then(
                function($e) {
                  if (Y(l, p), p === 0) {
                    try {
                      je(m), he(function() {
                        return oe(
                          $e,
                          S,
                          ke
                        );
                      });
                    } catch (mr) {
                      A.thrownErrors.push(mr);
                    }
                    if (0 < A.thrownErrors.length) {
                      var gr = ne(
                        A.thrownErrors
                      );
                      A.thrownErrors.length = 0, ke(gr);
                    }
                  } else S($e);
                },
                function($e) {
                  Y(l, p), 0 < A.thrownErrors.length && ($e = ne(
                    A.thrownErrors
                  ), A.thrownErrors.length = 0), ke($e);
                }
              );
            }
          };
        }
        var O = T;
        if (Y(l, p), p === 0 && (je(m), m.length !== 0 && wn(function() {
          k || vt || (vt = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), A.actQueue = null), 0 < A.thrownErrors.length)
          throw i = ne(A.thrownErrors), A.thrownErrors.length = 0, i;
        return {
          then: function(S, ke) {
            k = !0, p === 0 ? (A.actQueue = m, he(function() {
              return oe(
                O,
                S,
                ke
              );
            })) : S(O);
          }
        };
      }, e.cache = function(i) {
        return function() {
          return i.apply(null, arguments);
        };
      }, e.captureOwnerStack = function() {
        var i = A.getCurrentStack;
        return i === null ? null : i();
      }, e.cloneElement = function(i, l, p) {
        if (i == null)
          throw Error(
            "The argument must be a React element, but you passed " + i + "."
          );
        var m = gn({}, i.props), k = i.key, T = i._owner;
        if (l != null) {
          var M;
          e: {
            if (gt.call(l, "ref") && (M = Object.getOwnPropertyDescriptor(
              l,
              "ref"
            ).get) && M.isReactWarning) {
              M = !1;
              break e;
            }
            M = l.ref !== void 0;
          }
          M && (T = b()), F(l) && (j(l.key), k = "" + l.key);
          for (O in l)
            !gt.call(l, O) || O === "key" || O === "__self" || O === "__source" || O === "ref" && l.ref === void 0 || (m[O] = l[O]);
        }
        var O = arguments.length - 2;
        if (O === 1) m.children = p;
        else if (1 < O) {
          M = Array(O);
          for (var S = 0; S < O; S++)
            M[S] = arguments[S + 2];
          m.children = M;
        }
        for (m = ve(
          i.type,
          k,
          void 0,
          void 0,
          T,
          m,
          i._debugStack,
          i._debugTask
        ), k = 2; k < arguments.length; k++)
          T = arguments[k], J(T) && T._store && (T._store.validated = 1);
        return m;
      }, e.createContext = function(i) {
        return i = {
          $$typeof: C,
          _currentValue: i,
          _currentValue2: i,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, i.Provider = i, i.Consumer = {
          $$typeof: v,
          _context: i
        }, i._currentRenderer = null, i._currentRenderer2 = null, i;
      }, e.createElement = function(i, l, p) {
        for (var m = 2; m < arguments.length; m++) {
          var k = arguments[m];
          J(k) && k._store && (k._store.validated = 1);
        }
        if (m = {}, k = null, l != null)
          for (S in xn || !("__self" in l) || "key" in l || (xn = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), F(l) && (j(l.key), k = "" + l.key), l)
            gt.call(l, S) && S !== "key" && S !== "__self" && S !== "__source" && (m[S] = l[S]);
        var T = arguments.length - 2;
        if (T === 1) m.children = p;
        else if (1 < T) {
          for (var M = Array(T), O = 0; O < T; O++)
            M[O] = arguments[O + 2];
          Object.freeze && Object.freeze(M), m.children = M;
        }
        if (i && i.defaultProps)
          for (S in T = i.defaultProps, T)
            m[S] === void 0 && (m[S] = T[S]);
        k && H(
          m,
          typeof i == "function" ? i.displayName || i.name || "Unknown" : i
        );
        var S = 1e4 > A.recentlyCreatedOwnerStacks++;
        return ve(
          i,
          k,
          void 0,
          void 0,
          b(),
          m,
          S ? Error("react-stack-top-frame") : fr,
          S ? yn(f(i)) : pr
        );
      }, e.createRef = function() {
        var i = { current: null };
        return Object.seal(i), i;
      }, e.forwardRef = function(i) {
        i != null && i.$$typeof === E ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof i != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          i === null ? "null" : typeof i
        ) : i.length !== 0 && i.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          i.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), i != null && i.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var l = { $$typeof: R, render: i }, p;
        return Object.defineProperty(l, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return p;
          },
          set: function(m) {
            p = m, i.name || i.displayName || (Object.defineProperty(i, "name", { value: m }), i.displayName = m);
          }
        }), l;
      }, e.isValidElement = J, e.lazy = function(i) {
        return {
          $$typeof: X,
          _payload: { _status: -1, _result: i },
          _init: Ke
        };
      }, e.memo = function(i, l) {
        i == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          i === null ? "null" : typeof i
        ), l = {
          $$typeof: E,
          type: i,
          compare: l === void 0 ? null : l
        };
        var p;
        return Object.defineProperty(l, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return p;
          },
          set: function(m) {
            p = m, i.name || i.displayName || (Object.defineProperty(i, "name", { value: m }), i.displayName = m);
          }
        }), l;
      }, e.startTransition = function(i) {
        var l = A.T, p = {};
        A.T = p, p._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var m = i(), k = A.S;
          k !== null && k(p, m), typeof m == "object" && m !== null && typeof m.then == "function" && m.then(xe, _n);
        } catch (T) {
          _n(T);
        } finally {
          l === null && p._updatedFibers && (i = p._updatedFibers.size, p._updatedFibers.clear(), 10 < i && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), A.T = l;
        }
      }, e.unstable_useCacheRefresh = function() {
        return I().useCacheRefresh();
      }, e.use = function(i) {
        return I().use(i);
      }, e.useActionState = function(i, l, p) {
        return I().useActionState(
          i,
          l,
          p
        );
      }, e.useCallback = function(i, l) {
        return I().useCallback(i, l);
      }, e.useContext = function(i) {
        var l = I();
        return i.$$typeof === v && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), l.useContext(i);
      }, e.useDebugValue = function(i, l) {
        return I().useDebugValue(i, l);
      }, e.useDeferredValue = function(i, l) {
        return I().useDeferredValue(i, l);
      }, e.useEffect = function(i, l, p) {
        i == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var m = I();
        if (typeof p == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return m.useEffect(i, l);
      }, e.useId = function() {
        return I().useId();
      }, e.useImperativeHandle = function(i, l, p) {
        return I().useImperativeHandle(i, l, p);
      }, e.useInsertionEffect = function(i, l) {
        return i == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), I().useInsertionEffect(i, l);
      }, e.useLayoutEffect = function(i, l) {
        return i == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), I().useLayoutEffect(i, l);
      }, e.useMemo = function(i, l) {
        return I().useMemo(i, l);
      }, e.useOptimistic = function(i, l) {
        return I().useOptimistic(i, l);
      }, e.useReducer = function(i, l, p) {
        return I().useReducer(i, l, p);
      }, e.useRef = function(i) {
        return I().useRef(i);
      }, e.useState = function(i) {
        return I().useState(i);
      }, e.useSyncExternalStore = function(i, l, p) {
        return I().useSyncExternalStore(
          i,
          l,
          p
        );
      }, e.useTransition = function() {
        return I().useTransition();
      }, e.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(et, et.exports)), et.exports;
}
var Jn;
function ss() {
  return Jn || (Jn = 1, process.env.NODE_ENV === "production" ? Ct.exports = rs() : Ct.exports = is()), Ct.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function as() {
  return Zn || (Zn = 1, process.env.NODE_ENV !== "production" && function() {
    function t(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === Ke ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case H:
          return "Fragment";
        case ve:
          return "Profiler";
        case ce:
          return "StrictMode";
        case N:
          return "Suspense";
        case Se:
          return "SuspenseList";
        case le:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case F:
            return "Portal";
          case J:
            return (a.displayName || "Context") + ".Provider";
          case Me:
            return (a._context.displayName || "Context") + ".Consumer";
          case Le:
            var h = a.render;
            return a = a.displayName, a || (a = h.displayName || h.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case Ae:
            return h = a.displayName || null, h !== null ? h : t(a.type) || "Memo";
          case te:
            h = a._payload, a = a._init;
            try {
              return t(a(h));
            } catch {
            }
        }
      return null;
    }
    function e(a) {
      return "" + a;
    }
    function n(a) {
      try {
        e(a);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var y = h.error, v = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return y.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          v
        ), e(a);
      }
    }
    function r(a) {
      if (a === H) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === te)
        return "<...>";
      try {
        var h = t(a);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var a = I.A;
      return a === null ? null : a.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function u(a) {
      if (xe.call(a, "key")) {
        var h = Object.getOwnPropertyDescriptor(a, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function d(a, h) {
      function y() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      y.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: y,
        configurable: !0
      });
    }
    function g() {
      var a = t(this.type);
      return oe[a] || (oe[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function j(a, h, y, v, C, R, w, q) {
      return y = R.ref, a = {
        $$typeof: P,
        type: a,
        key: h,
        props: R,
        _owner: C
      }, (y !== void 0 ? y : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function _(a, h, y, v, C, R, w, q) {
      var E = h.children;
      if (E !== void 0)
        if (v)
          if (he(E)) {
            for (v = 0; v < E.length; v++)
              f(E[v]);
            Object.freeze && Object.freeze(E);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(E);
      if (xe.call(h, "key")) {
        E = t(a);
        var X = Object.keys(h).filter(function(ft) {
          return ft !== "key";
        });
        v = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", Te[E + v] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          v,
          E,
          X,
          E
        ), Te[E + v] = !0);
      }
      if (E = null, y !== void 0 && (n(y), E = "" + y), u(h) && (n(h.key), E = "" + h.key), "key" in h) {
        y = {};
        for (var Xe in h)
          Xe !== "key" && (y[Xe] = h[Xe]);
      } else y = h;
      return E && d(
        y,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), j(
        a,
        E,
        R,
        C,
        s(),
        y,
        w,
        q
      );
    }
    function f(a) {
      typeof a == "object" && a !== null && a.$$typeof === P && a._store && (a._store.validated = 1);
    }
    var b = ss(), P = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), ce = Symbol.for("react.strict_mode"), ve = Symbol.for("react.profiler"), Me = Symbol.for("react.consumer"), J = Symbol.for("react.context"), Le = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), Ae = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), Ke = Symbol.for("react.client.reference"), I = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xe = Object.prototype.hasOwnProperty, he = Array.isArray, ne = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var Y, oe = {}, je = b["react-stack-bottom-frame"].bind(
      b,
      c
    )(), de = ne(r(c)), Te = {};
    Ze.Fragment = H, Ze.jsx = function(a, h, y, v, C) {
      var R = 1e4 > I.recentlyCreatedOwnerStacks++;
      return _(
        a,
        h,
        y,
        !1,
        v,
        C,
        R ? Error("react-stack-top-frame") : je,
        R ? ne(r(a)) : de
      );
    }, Ze.jsxs = function(a, h, y, v, C) {
      var R = 1e4 > I.recentlyCreatedOwnerStacks++;
      return _(
        a,
        h,
        y,
        !0,
        v,
        C,
        R ? Error("react-stack-top-frame") : je,
        R ? ne(r(a)) : de
      );
    };
  }()), Ze;
}
var Qn;
function cs() {
  return Qn || (Qn = 1, process.env.NODE_ENV === "production" ? _t.exports = os() : _t.exports = as()), _t.exports;
}
var o = cs();
function eo(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Managing Component Palette"
    }), `
`, o.jsxs(e.p, {
      children: ["The ", o.jsx(e.code, {
        children: "asPalette"
      }), " property applies the parent element's palette color to the component while preserving its base saturation."]
    }), `
`, o.jsx(e.h3, {
      children: "Properties"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "asPalette"
        }), " — Boolean property. When ", o.jsx(e.code, {
          children: "true"
        }), ", the component inherits the color defined by its parent's palette class."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Description"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["When ", o.jsx(e.code, {
          children: "asPalette=false"
        }), ", the component uses its default color."]
      }), `
`, o.jsxs(e.li, {
        children: ["When ", o.jsx(e.code, {
          children: "asPalette=true"
        }), ", the component is colored according to the parent's palette class, maintaining its original saturation."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Recommendations"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsx(e.li, {
        children: "Use this property to automatically adapt components to the application's theme."
      }), `
`, o.jsx(e.li, {
        children: "Ensure the parent element has a valid palette class."
      }), `
`]
    })]
  });
}
function ls(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(eo, {
      ...t
    })
  }) : eo(t);
}
function to(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Управление палитрой компонента"
    }), `
`, o.jsxs(e.p, {
      children: ["Свойство ", o.jsx(e.code, {
        children: "asPalette"
      }), " отвечает за изменение цвета компонента в соответствии с классом палитры его родителя, сохраняя базовую насыщенность цвета."]
    }), `
`, o.jsx(e.h3, {
      children: "Свойства"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "asPalette"
        }), " — Булево свойство. Если ", o.jsx(e.code, {
          children: "true"
        }), ", компонент наследует цвет родительского элемента с палитрой."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Описание"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["При ", o.jsx(e.code, {
          children: "asPalette=false"
        }), " используется стандартный цвет компонента."]
      }), `
`, o.jsxs(e.li, {
        children: ["При ", o.jsx(e.code, {
          children: "asPalette=true"
        }), " компонент окрашивается в цвет, заданный классом палитры родителя, при этом сохраняется исходная насыщенность цвета."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Рекомендации"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsx(e.li, {
        children: "Применяйте для автоматической адаптации компонентов к теме приложения."
      }), `
`, o.jsx(e.li, {
        children: "Убедитесь, что у родительского элемента задан корректный класс палитры."
      }), `
`]
    })]
  });
}
function us(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(to, {
      ...t
    })
  }) : to(t);
}
function no(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Managing Component Direction"
    }), `
`, o.jsxs(e.p, {
      children: ["The ", o.jsx(e.code, {
        children: "dir"
      }), ` property controls the mirroring of the component based on the site's text direction (LTR/RTL).
It ensures the correct interface display for right-to-left languages.`]
    }), `
`, o.jsx(e.h3, {
      children: "Properties"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "dir"
        }), " — Boolean property. When ", o.jsx(e.code, {
          children: "true"
        }), ", the component will be mirrored when the page direction is ", o.jsx(e.code, {
          children: "rtl"
        }), "."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Description"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["When ", o.jsx(e.code, {
          children: "dir=false"
        }), ", the component is rendered normally."]
      }), `
`, o.jsxs(e.li, {
        children: ["When ", o.jsx(e.code, {
          children: "dir=true"
        }), ", the component is horizontally mirrored."]
      }), `
`, o.jsx(e.li, {
        children: "This property only affects the visual presentation, not the component's content."
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Recommendations"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsx(e.li, {
        children: "Use alongside your app's localization settings."
      }), `
`, o.jsx(e.li, {
        children: "Particularly useful for arrow icons that also need to flip when direction changes."
      }), `
`, o.jsx(e.li, {
        children: "Verify third-party SVG icons as they might have preset directions."
      }), `
`]
    })]
  });
}
function hs(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(no, {
      ...t
    })
  }) : no(t);
}
function oo(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Управление направлением компонента"
    }), `
`, o.jsxs(e.p, {
      children: ["Свойство ", o.jsx(e.code, {
        children: "dir"
      }), ` отвечает за зеркальное отображение компонента в зависимости от направления сайта (LTR/RTL).
Это обеспечивает корректное отображение интерфейсов для языков с правосторонним письмом.`]
    }), `
`, o.jsx(e.h3, {
      children: "Свойства"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "dir"
        }), " — Булево свойство. Если ", o.jsx(e.code, {
          children: "true"
        }), ", компонент будет зеркально отображен при направлении страницы ", o.jsx(e.code, {
          children: "rtl"
        }), "."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Описание"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["При ", o.jsx(e.code, {
          children: "dir=false"
        }), " компонент отображается в своем стандартном виде."]
      }), `
`, o.jsxs(e.li, {
        children: ["При ", o.jsx(e.code, {
          children: "dir=true"
        }), " компонент отображается зеркально в горизонтальной плоскости."]
      }), `
`, o.jsx(e.li, {
        children: "Свойство не влияет на содержимое компонента, только на его визуальное представление."
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Рекомендации"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsx(e.li, {
        children: "Используйте вместе с настройками локализации приложения."
      }), `
`, o.jsx(e.li, {
        children: "Особенно полезно для стрелочных иконок, которые также нужно отразить при смене направления."
      }), `
`, o.jsx(e.li, {
        children: "Проверяйте отображение сторонних SVG-иконок, так как они могут иметь собственные направления."
      }), `
`]
    })]
  });
}
function ds(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(oo, {
      ...t
    })
  }) : oo(t);
}
function ro(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Skeleton Mode"
    }), `
`, o.jsxs(e.p, {
      children: ["The ", o.jsx(e.code, {
        children: "isSkeleton"
      }), " property works in conjunction with the ", o.jsx(e.code, {
        children: "Skeleton"
      }), " component. When an element is a child of the ", o.jsx(e.code, {
        children: "Skeleton"
      }), " component and has the ", o.jsx(e.code, {
        children: "isSkeleton"
      }), " property, its display depends on the parent ", o.jsx(e.code, {
        children: "Skeleton"
      }), "'s state."]
    }), `
`, o.jsx(e.h3, {
      children: "Properties"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "isSkeleton"
        }), " — Boolean property. Determines whether the element participates in skeleton mode."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Description"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["When ", o.jsx(e.code, {
          children: "active=false"
        }), " on the ", o.jsx(e.code, {
          children: "Skeleton"
        }), " component, all child elements display normally, regardless of the ", o.jsx(e.code, {
          children: "isSkeleton"
        }), " value."]
      }), `
`, o.jsxs(e.li, {
        children: ["When ", o.jsx(e.code, {
          children: "active=true"
        }), " on the ", o.jsx(e.code, {
          children: "Skeleton"
        }), " component, all child elements enter skeleton mode, but behavior depends on ", o.jsx(e.code, {
          children: "isSkeleton"
        }), ":", `
`, o.jsxs(e.ul, {
          children: [`
`, o.jsxs(e.li, {
            children: ["If the element has ", o.jsx(e.code, {
              children: "isSkeleton=true"
            }), " — the element displays as a skeleton"]
          }), `
`, o.jsxs(e.li, {
            children: ["If the element has ", o.jsx(e.code, {
              children: "isSkeleton=false"
            }), " — the element becomes invisible"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Recommendations"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["Use only inside the ", o.jsx(e.code, {
          children: "Skeleton"
        }), " component."]
      }), `
`, o.jsx(e.li, {
        children: "Suitable for creating interactive loading states with smooth transitions."
      }), `
`]
    })]
  });
}
function fs(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(ro, {
      ...t
    })
  }) : ro(t);
}
function io(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Режим скелетона"
    }), `
`, o.jsxs(e.p, {
      children: ["Свойство ", o.jsx(e.code, {
        children: "isSkeleton"
      }), " работает в паре с компонентом ", o.jsx(e.code, {
        children: "Skeleton"
      }), ". Когда элемент является дочерним элементом компонента ", o.jsx(e.code, {
        children: "Skeleton"
      }), " и имеет свойство ", o.jsx(e.code, {
        children: "isSkeleton"
      }), ", его отображение зависит от состояния родительского ", o.jsx(e.code, {
        children: "Skeleton"
      }), "."]
    }), `
`, o.jsx(e.h3, {
      children: "Свойства"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "isSkeleton"
        }), " — Булево свойство. Определяет, участвует ли элемент в режиме скелетона."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Описание"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["При ", o.jsx(e.code, {
          children: "active=false"
        }), " у компонента ", o.jsx(e.code, {
          children: "Skeleton"
        }), " все дочерние элементы отображаются, как обычно, независимо от значения ", o.jsx(e.code, {
          children: "isSkeleton"
        }), "."]
      }), `
`, o.jsxs(e.li, {
        children: ["При ", o.jsx(e.code, {
          children: "active=true"
        }), " у компонента ", o.jsx(e.code, {
          children: "Skeleton"
        }), " все дочерние элементы переходят в режим скелетона, но поведение зависит от ", o.jsx(e.code, {
          children: "isSkeleton"
        }), ":", `
`, o.jsxs(e.ul, {
          children: [`
`, o.jsxs(e.li, {
            children: ["Если у элемента ", o.jsx(e.code, {
              children: "isSkeleton=true"
            }), " — элемент отображается как скелетон"]
          }), `
`, o.jsxs(e.li, {
            children: ["Если у элемента ", o.jsx(e.code, {
              children: "isSkeleton=false"
            }), " — элемент становится невидимым"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Рекомендации"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["Используйте только внутри компонента ", o.jsx(e.code, {
          children: "Skeleton"
        }), "."]
      }), `
`, o.jsx(e.li, {
        children: "Подходит для создания интерактивных состояний загрузки с плавными переходами."
      }), `
`]
    })]
  });
}
function ps(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(io, {
      ...t
    })
  }) : io(t);
}
const gs = {
  name: "Style",
  descriptions: {
    asPalette: { en: ls, ru: us },
    dir: { en: hs, ru: ds },
    isSkeleton: { en: fs, ru: ps }
  }
};
function so(t) {
  const e = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h3, {
      children: o.jsx(e.code, {
        children: "default"
      })
    }), `
`, o.jsx(e.p, {
      children: "Main slot for placing content inside the component."
    }), `
`, o.jsx(e.p, {
      children: "This slot allows you to:"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsx(e.li, {
        children: "Place any custom content inside the component"
      }), `
`, o.jsx(e.li, {
        children: "Pass text, HTML elements, or other Vue components"
      }), `
`, o.jsx(e.li, {
        children: "Customize the internal content of the component"
      }), `
`]
    }), `
`, o.jsxs(e.p, {
      children: ["The ", o.jsx(e.code, {
        children: "default"
      }), " slot is the primary way to add content to the component and supports all standard Vue slot capabilities."]
    })]
  });
}
function ms(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(so, {
      ...t
    })
  }) : so(t);
}
function ao(t) {
  const e = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h3, {
      children: o.jsx(e.code, {
        children: "default"
      })
    }), `
`, o.jsx(e.p, {
      children: "Основной слот для размещения контента внутри компонента."
    }), `
`, o.jsx(e.p, {
      children: "Этот слот позволяет:"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsx(e.li, {
        children: "Размещать любой пользовательский контент внутри компонента"
      }), `
`, o.jsx(e.li, {
        children: "Передавать текст, HTML-элементы или другие Vue-компоненты"
      }), `
`, o.jsx(e.li, {
        children: "Настраивать внутреннее содержимое компонента"
      }), `
`]
    }), `
`, o.jsxs(e.p, {
      children: ["Слот ", o.jsx(e.code, {
        children: "default"
      }), " является основным способом добавления контента в компонент и поддерживает все стандартные возможности Vue слотов."]
    })]
  });
}
function ys(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(ao, {
      ...t
    })
  }) : ao(t);
}
const vs = {
  name: "Slot",
  descriptions: {
    default: {
      en: ms,
      ru: ys
    }
  }
};
function co(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Icon State Management"
    }), `
`, o.jsxs(e.p, {
      children: ["The ", o.jsx(e.code, {
        children: "icon"
      }), ", ", o.jsx(e.code, {
        children: "iconActive"
      }), ", and ", o.jsx(e.code, {
        children: "active"
      }), " properties control the display of the icon based on its state. This allows for the creation of dynamic and interactive elements."]
    }), `
`, o.jsx(e.h3, {
      children: "Properties"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "icon"
        }), " — The main icon displayed by default."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "iconActive"
        }), " — The icon that is displayed when the component is in an active state (", o.jsx(e.code, {
          children: "active"
        }), " = ", o.jsx(e.code, {
          children: "true"
        }), ")."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "active"
        }), " — A boolean property that toggles the component's state between normal and active."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Description"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["The ", o.jsx(e.code, {
          children: "icon"
        }), " property is essential for displaying the icon."]
      }), `
`, o.jsxs(e.li, {
        children: ["If ", o.jsx(e.code, {
          children: "iconActive"
        }), " is not provided, there will be no visual change when the ", o.jsx(e.code, {
          children: "active"
        }), " state changes."]
      }), `
`, o.jsxs(e.li, {
        children: ["When ", o.jsx(e.code, {
          children: "active"
        }), " is set to ", o.jsx(e.code, {
          children: "true"
        }), ", the component will attempt to display the icon specified in ", o.jsx(e.code, {
          children: "iconActive"
        }), "."]
      }), `
`, o.jsxs(e.li, {
        children: ["The ", o.jsx(e.code, {
          children: "active"
        }), " property can be used to create toggles, indicators, and other interactive elements."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Recommendations"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["Use ", o.jsx(e.code, {
          children: "iconActive"
        }), " to provide visual feedback upon user interaction (e.g., on click or selection)."]
      }), `
`, o.jsxs(e.li, {
        children: ["Ensure that ", o.jsx(e.code, {
          children: "icon"
        }), " and ", o.jsx(e.code, {
          children: "iconActive"
        }), " are visually distinct enough for the user to easily identify the state change."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Usage Example"
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-html",
        children: `<!-- Normal icon -->
<Icon icon="home" />

<!-- Active icon -->
<!-- \`favorite\` will be displayed because active=true -->
<Icon icon="favorite_border" iconActive="favorite" :active="true" />

<!-- Dynamic state toggle -->
<template>
  <Icon
    icon="visibility"
    iconActive="visibility_off"
    :active="isVisible"
    @click="isVisible = !isVisible"
  />
</template>
`
      })
    })]
  });
}
function xs(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(co, {
      ...t
    })
  }) : co(t);
}
function lo(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Управление состоянием иконки"
    }), `
`, o.jsxs(e.p, {
      children: ["Свойства ", o.jsx(e.code, {
        children: "icon"
      }), ", ", o.jsx(e.code, {
        children: "iconActive"
      }), " и ", o.jsx(e.code, {
        children: "active"
      }), " отвечают за управление отображением иконки в зависимости от её состояния. Это позволяет создавать динамичные и интерактивные элементы."]
    }), `
`, o.jsx(e.h3, {
      children: "Свойства"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "icon"
        }), " — Основная иконка, отображаемая по умолчанию."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "iconActive"
        }), " — Иконка, которая отображается, когда компонент находится в активном состоянии (", o.jsx(e.code, {
          children: "active"
        }), " = ", o.jsx(e.code, {
          children: "true"
        }), ")."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "active"
        }), " — Булево свойство, которое переключает состояние компонента между обычным и активным."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Описание"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["Свойство ", o.jsx(e.code, {
          children: "icon"
        }), " является основным и обязательным для отображения иконки."]
      }), `
`, o.jsxs(e.li, {
        children: ["Если ", o.jsx(e.code, {
          children: "iconActive"
        }), " не задано, то при изменении состояния ", o.jsx(e.code, {
          children: "active"
        }), " визуально ничего не изменится."]
      }), `
`, o.jsxs(e.li, {
        children: ["Когда ", o.jsx(e.code, {
          children: "active"
        }), " установлено в ", o.jsx(e.code, {
          children: "true"
        }), ", компонент будет пытаться отобразить иконку, указанную в ", o.jsx(e.code, {
          children: "iconActive"
        }), "."]
      }), `
`, o.jsxs(e.li, {
        children: ["Свойство ", o.jsx(e.code, {
          children: "active"
        }), " можно использовать для создания переключателей, индикаторов и других интерактивных элементов."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Рекомендации"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["Используйте ", o.jsx(e.code, {
          children: "iconActive"
        }), " для обеспечения визуальной обратной связи при взаимодействии с пользователем (например, при нажатии или выборе)."]
      }), `
`, o.jsxs(e.li, {
        children: ["Убедитесь, что ", o.jsx(e.code, {
          children: "icon"
        }), " и ", o.jsx(e.code, {
          children: "iconActive"
        }), " достаточно различны визуально, чтобы пользователь мог легко определить изменение состояния."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Пример использования"
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-html",
        children: `<!-- Обычная иконка -->
<Icon icon="home" />

<!-- Активная иконка -->
<!-- Отобразится \`favorite\`, так как active=true -->
<Icon icon="favorite_border" iconActive="favorite" :active="true" />

<!-- Динамическое переключение состояния -->
<template>
  <Icon
    icon="visibility"
    iconActive="visibility_off"
    :active="isVisible"
    @click="isVisible = !isVisible"
  />
</template>
`
      })
    })]
  });
}
function js(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(lo, {
      ...t
    })
  }) : lo(t);
}
function uo(t) {
  const e = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h3, {
      children: o.jsx(e.code, {
        children: "isActive"
      })
    }), `
`, o.jsx(e.p, {
      children: "Computed property that determines whether the additional icon is active."
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-ts",
        children: `readonly isActive: ComputedRef<boolean>
`
      })
    }), `
`, o.jsxs(e.p, {
      children: ["Returns ", o.jsx(e.code, {
        children: "true"
      }), " only when both conditions are met:"]
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["The ", o.jsx(e.code, {
          children: "active"
        }), " property is set to ", o.jsx(e.code, {
          children: "true"
        })]
      }), `
`, o.jsxs(e.li, {
        children: ["The ", o.jsx(e.code, {
          children: "iconActive"
        }), " property is defined (not empty)"]
      }), `
`]
    }), `
`, o.jsx(e.p, {
      children: "This property is used internally by the component to control the display of primary and additional icons."
    })]
  });
}
function ks(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(uo, {
      ...t
    })
  }) : uo(t);
}
function ho(t) {
  const e = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h3, {
      children: o.jsx(e.code, {
        children: "isActive"
      })
    }), `
`, o.jsx(e.p, {
      children: "Вычисляемое свойство, которое определяет, активна ли дополнительная иконка."
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-ts",
        children: `readonly isActive: ComputedRef<boolean>
`
      })
    }), `
`, o.jsxs(e.p, {
      children: ["Возвращает ", o.jsx(e.code, {
        children: "true"
      }), " только когда выполняются оба условия:"]
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["Свойство ", o.jsx(e.code, {
          children: "active"
        }), " установлено в ", o.jsx(e.code, {
          children: "true"
        })]
      }), `
`, o.jsxs(e.li, {
        children: ["Свойство ", o.jsx(e.code, {
          children: "iconActive"
        }), " задано (не пустое)"]
      }), `
`]
    }), `
`, o.jsx(e.p, {
      children: "Это свойство используется внутри компонента для управления отображением основной и дополнительной иконок."
    })]
  });
}
function bs(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(ho, {
      ...t
    })
  }) : ho(t);
}
const _s = {
  name: "Icon",
  descriptions: {
    icon: {
      en: xs,
      ru: js
    },
    "expose.isActive": {
      en: ks,
      ru: bs
    }
  }
};
function fo(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Property value"
    }), `
`, o.jsxs(e.p, {
      children: ["The ", o.jsx(e.code, {
        children: "value"
      }), " property is responsible for the main content. It is a universal property that supports multiple types of values, making it as flexible as possible for various use cases."]
    }), `
`, o.jsx(e.h3, {
      children: "Supported value types"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "Icon name"
        }), " — The name of a built-in or custom icon (if supported by the system)."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "String (URL)"
        }), " — A direct link to an image file (e.g., PNG, JPG, SVG, GIF, WebP, etc.)."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "File object"
        }), " — A JavaScript ", o.jsx(e.code, {
          children: "File"
        }), " object, for example, obtained from ", o.jsx(e.code, {
          children: '<input type="file">'
        }), "."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "PDF link"
        }), " — A direct link to a PDF file (the PDF document itself will be displayed inside)."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Description"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["The ", o.jsx(e.code, {
          children: "value"
        }), " property is ", o.jsx(e.strong, {
          children: "optional"
        }), ". If not set, nothing will be displayed."]
      }), `
`, o.jsxs(e.li, {
        children: ["When a ", o.jsx(e.code, {
          children: "File"
        }), " object is passed, the component will try to read and display the image or file preview."]
      }), `
`, o.jsx(e.li, {
        children: "If a PDF link is provided, the PDF document itself will be displayed inside (for example, with page navigation)."
      }), `
`, o.jsx(e.li, {
        children: "If an icon name is provided, the corresponding icon will be displayed."
      }), `
`, o.jsx(e.li, {
        children: "The property is reactive and can be updated dynamically."
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Recommendations"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsx(e.li, {
        children: "For the best performance, use optimized image formats (WebP, SVG, etc.)."
      }), `
`, o.jsx(e.li, {
        children: "Always validate the file type when accepting user uploads."
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Usage example"
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-html",
        children: `<!-- Icon by name -->
<Image value="icon-user" />

<!-- Image by URL -->
<Image value="https://example.com/image.png" />

<!-- Image from a File object -->
<input type="file" @change="onFileChange" />
<Image :value="selectedFile" />

<!-- PDF by link -->
<Image value="https://example.com/file.pdf" />
`
      })
    })]
  });
}
function Cs(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(fo, {
      ...t
    })
  }) : fo(t);
}
function po(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Свойство value"
    }), `
`, o.jsxs(e.p, {
      children: ["Свойство ", o.jsx(e.code, {
        children: "value"
      }), ` отвечает за основной контент. Это универсальное свойство,
поддерживающее несколько типов значений, что делает его максимально гибким
для различных сценариев использования.`]
    }), `
`, o.jsx(e.h3, {
      children: "Поддерживаемые типы значений"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "Имя иконки"
        }), " — Имя встроенной или пользовательской иконки (если поддерживается системой)."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "Строка (URL)"
        }), " — Прямая ссылка на файл изображения (например, PNG, JPG, SVG, GIF, WebP и др.)."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "Объект File"
        }), " — JavaScript-объект ", o.jsx(e.code, {
          children: "File"
        }), ", например, полученный из ", o.jsx(e.code, {
          children: '<input type="file">'
        }), "."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "Ссылка на PDF"
        }), " — Прямая ссылка на PDF-файл (будет отображён сам PDF-документ внутри)."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Описание"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["Свойство ", o.jsx(e.code, {
          children: "value"
        }), " ", o.jsx(e.strong, {
          children: "необязательное"
        }), ". Если оно не задано, изображение не будет отображено."]
      }), `
`, o.jsxs(e.li, {
        children: ["При передаче объекта ", o.jsx(e.code, {
          children: "File"
        }), " будет предпринята попытка прочитать и отобразить изображение или предпросмотр файла."]
      }), `
`, o.jsx(e.li, {
        children: "Если передана ссылка на PDF, будет отображён сам PDF-документ внутри (например, с возможностью просмотра страниц)."
      }), `
`, o.jsx(e.li, {
        children: "Если передано имя иконки, будет отображена соответствующая иконка."
      }), `
`, o.jsx(e.li, {
        children: "Свойство реактивно и может динамически обновляться."
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Рекомендации"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsx(e.li, {
        children: "Для лучшей производительности используйте оптимизированные форматы изображений (WebP, SVG и др.)."
      }), `
`, o.jsx(e.li, {
        children: "Всегда проверяйте тип файла при загрузке от пользователя."
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Пример использования"
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-html",
        children: `<!-- Иконка по имени -->
<Image value="icon-user" />

<!-- Изображение по URL -->
<Image value="https://example.com/image.png" />

<!-- Изображение из объекта File -->
<input type="file" @change="onFileChange" />
<Image :value="selectedFile" />

<!-- PDF по ссылке -->
<Image value="https://example.com/file.pdf" />
`
      })
    })]
  });
}
function ws(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(po, {
      ...t
    })
  }) : po(t);
}
function go(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Image display control"
    }), `
`, o.jsx(e.h3, {
      children: "Description"
    }), `
`, o.jsxs(e.p, {
      children: ["The ", o.jsx(e.code, {
        children: "size"
      }), ", ", o.jsx(e.code, {
        children: "coordinator"
      }), ", ", o.jsx(e.code, {
        children: "x"
      }), ", and ", o.jsx(e.code, {
        children: "y"
      }), " properties allow you to precisely control image scaling, visible area, and positioning within the container. Each parameter is responsible for its own aspect of display and can be used individually or together to achieve the desired visual effect."]
    }), `
`, o.jsx(e.h3, {
      children: "Properties"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "size"
        }), " — Defines the scaling and fill mode of the image inside the container. Possible values: ", o.jsx(e.code, {
          children: "auto"
        }), " (default), ", o.jsx(e.code, {
          children: "contain"
        }), " (fit completely), ", o.jsx(e.code, {
          children: "cover"
        }), " (fill the container, possibly cropping the image)."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "coordinator"
        }), " — An array of four values that defines the visible area of the image: cropping from the left, top, right, and bottom, specified as percentages relative to the original image. Format: ", o.jsx(e.code, {
          children: "[left, top, right, bottom]"
        }), "."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "x"
        }), " — Horizontal offset (X axis) of the image relative to the container or selected area. Can be set in pixels, percentages, or other supported units."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "y"
        }), " — Vertical offset (Y axis) of the image relative to the container or selected area. Can be set in pixels, percentages, or other supported units."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Recommendations"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["Use ", o.jsx(e.code, {
          children: "size"
        }), " to select the appropriate image display mode for your layout and task."]
      }), `
`, o.jsxs(e.li, {
        children: ["The ", o.jsx(e.code, {
          children: "coordinator"
        }), " property is convenient for cropping or highlighting the desired part of the image."]
      }), `
`, o.jsxs(e.li, {
        children: ["Use the ", o.jsx(e.code, {
          children: "x"
        }), " and ", o.jsx(e.code, {
          children: "y"
        }), " parameters for precise image positioning within the container."]
      }), `
`, o.jsx(e.li, {
        children: "Combine parameters to achieve complex display effects."
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Usage example"
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-html",
        children: `<!-- Image with content mode -->
<Image value="image.png" size="contain" />

<!-- Cropping the image by coordinates -->
<Image value="image.png" :coordinator="[10, 20, 100, 80]" />

<!-- Shifting the image by X and Y -->
<Image value="image.png" x="15" y="-10" />
`
      })
    })]
  });
}
function Ds(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(go, {
      ...t
    })
  }) : go(t);
}
function mo(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Управление отображением изображения"
    }), `
`, o.jsx(e.h3, {
      children: "Описание"
    }), `
`, o.jsxs(e.p, {
      children: ["Свойства ", o.jsx(e.code, {
        children: "size"
      }), ", ", o.jsx(e.code, {
        children: "coordinator"
      }), ", ", o.jsx(e.code, {
        children: "x"
      }), " и ", o.jsx(e.code, {
        children: "y"
      }), ` позволяют детально управлять масштабированием,
областью видимости и позиционированием изображения внутри контейнера.
Каждый параметр отвечает за свой аспект отображения и может использоваться как по отдельности,
так и совместно для достижения нужного визуального эффекта.`]
    }), `
`, o.jsx(e.h3, {
      children: "Свойства"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "size"
        }), ` — Определяет режим масштабирования и заполнения изображения внутри контейнера.
Возможные значения: `, o.jsx(e.code, {
          children: "auto"
        }), " (по умолчанию), ", o.jsx(e.code, {
          children: "contain"
        }), " (вписать полностью), ", o.jsx(e.code, {
          children: "cover"
        }), " (заполнить контейнер с возможной обрезкой)."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "coordinator"
        }), " — Массив из четырёх значений, определяющий область изображения для отображения: обрезка слева, сверху, справа и снизу, задаётся в процентах относительно исходного изображения. Формат: ", o.jsx(e.code, {
          children: "[left, top, right, bottom]"
        }), "."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "x"
        }), " — Смещение изображения по горизонтали (ось X) относительно контейнера или выбранной области. Может быть задано в пикселях, процентах или других поддерживаемых единицах."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "y"
        }), " — Смещение изображения по вертикали (ось Y) относительно контейнера или выбранной области. Может быть задано в пикселях, процентах или других поддерживаемых единицах."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Рекомендации"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["Используйте ", o.jsx(e.code, {
          children: "size"
        }), " для выбора подходящего режима отображения изображения в зависимости от задачи и макета."]
      }), `
`, o.jsxs(e.li, {
        children: ["Свойство ", o.jsx(e.code, {
          children: "coordinator"
        }), " удобно для реализации обрезки или выделения нужной части изображения."]
      }), `
`, o.jsxs(e.li, {
        children: ["Параметры ", o.jsx(e.code, {
          children: "x"
        }), " и ", o.jsx(e.code, {
          children: "y"
        }), " применяйте для точного позиционирования изображения внутри контейнера."]
      }), `
`, o.jsx(e.li, {
        children: "Комбинируйте параметры для достижения сложных эффектов отображения."
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Пример использования"
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-html",
        children: `<!-- Изображение с режимом contain -->
<Image value="image.png" size="contain" />

<!-- Обрезка изображения по координатам -->
<Image value="image.png" :coordinator="[10, 20, 100, 80]" />

<!-- Смещение изображения по X и Y -->
<Image value="image.png" x="15" y="-10" />
`
      })
    })]
  });
}
function Es(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(mo, {
      ...t
    })
  }) : mo(t);
}
function yo(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Adaptive scaling and related properties"
    }), `
`, o.jsx(e.h3, {
      children: "Description"
    }), `
`, o.jsxs(e.p, {
      children: ["The ", o.jsx(e.code, {
        children: "adaptive"
      }), " property enables automatic scaling and alignment of images. For correct operation, it is recommended to use it together with additional properties that allow you to precisely control the behavior and display of the image."]
    }), `
`, o.jsx(e.h3, {
      children: "Properties"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "adaptive"
        }), " — Enables adaptive scaling mode for the image relative to other elements with the same ", o.jsx(e.code, {
          children: "adaptive-group"
        }), "."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "object-width"
        }), " — The physical width of the object in the image (in millimeters, pixels, or other units). Used for scale calculation."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "object-height"
        }), " — The physical height of the object in the image. Can be used instead of or together with ", o.jsx(e.code, {
          children: "object-width"
        }), "."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "adaptive-group"
        }), " — Adaptivity group. Elements with the same value of this property will be scaled proportionally to each other."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "adaptive-always"
        }), " — If specified, scaling and calculations will always be performed, even if the element is hidden off-screen."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Recommendations"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["Always specify at least one of the parameters: ", o.jsx(e.code, {
          children: "object-width"
        }), " or ", o.jsx(e.code, {
          children: "object-height"
        }), " for correct adaptivity."]
      }), `
`, o.jsxs(e.li, {
        children: ["Use ", o.jsx(e.code, {
          children: "adaptive-group"
        }), " if you need to synchronize the scale of several images."]
      }), `
`, o.jsxs(e.li, {
        children: ["Use ", o.jsx(e.code, {
          children: "adaptive-always"
        }), " only when necessary to avoid unnecessary calculations."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Usage example"
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-html",
        children: `<!-- Adaptive image with specified object width -->
<Image adaptive object-width="63.5" />

<!-- Adaptive image with height and group -->
<Image adaptive object-height="40" adaptive-group="products" />

<!-- Constant scaling regardless of visibility -->
<Image adaptive object-width="50" adaptive-always />
`
      })
    })]
  });
}
function Ms(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(yo, {
      ...t
    })
  }) : yo(t);
}
function vo(t) {
  const e = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h2, {
      children: "Адаптивное масштабирование и связанные параметры"
    }), `
`, o.jsxs(e.p, {
      children: ["Свойство ", o.jsx(e.code, {
        children: "adaptive"
      }), " включает режим автоматического масштабирования и выравнивания изображений. Для корректной работы рекомендуется использовать его совместно с дополнительными свойствами, которые позволяют точно управлять поведением и отображением изображения."]
    }), `
`, o.jsx(e.h3, {
      children: "Свойства"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "adaptive"
        }), " — Включает режим адаптивного масштабирования изображения относительно других элементов с тем же ", o.jsx(e.code, {
          children: "adaptive-group"
        }), "."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "object-width"
        }), " — Физическая ширина объекта на изображении (в миллиметрах, пикселях или другой единице). Используется для расчёта масштаба."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "object-height"
        }), " — Физическая высота объекта на изображении. Может использоваться вместо или вместе с ", o.jsx(e.code, {
          children: "object-width"
        }), "."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "adaptive-group"
        }), " — Группа адаптивности. Элементы с одинаковым значением этого свойства будут масштабироваться пропорционально друг другу."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.strong, {
          children: "adaptive-always"
        }), " — Если указано, масштабирование и расчёты будут выполняться всегда, даже если элемент скрыт за пределами экрана."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Описание"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["Свойство ", o.jsx(e.code, {
          children: "adaptive"
        }), " позволяет автоматически подбирать масштаб изображения, чтобы оно выглядело пропорционально с другими элементами в той же группе."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.code, {
          children: "object-width"
        }), " и ", o.jsx(e.code, {
          children: "object-height"
        }), " задают реальные размеры объекта на изображении, что необходимо для корректного расчёта масштаба."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.code, {
          children: "adaptive-group"
        }), " объединяет элементы в одну группу для совместного масштабирования."]
      }), `
`, o.jsxs(e.li, {
        children: [o.jsx(e.code, {
          children: "adaptive-always"
        }), " обеспечивает постоянные вычисления масштаба, даже если элемент временно скрыт."]
      }), `
`, o.jsx(e.li, {
        children: "Все свойства могут использоваться совместно для достижения нужного эффекта."
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Рекомендации"
    }), `
`, o.jsxs(e.ul, {
      children: [`
`, o.jsxs(e.li, {
        children: ["Всегда указывайте хотя бы один из параметров: ", o.jsx(e.code, {
          children: "object-width"
        }), " или ", o.jsx(e.code, {
          children: "object-height"
        }), " для корректной работы адаптивности."]
      }), `
`, o.jsxs(e.li, {
        children: ["Используйте ", o.jsx(e.code, {
          children: "adaptive-group"
        }), ", если требуется синхронизировать масштаб нескольких изображений."]
      }), `
`, o.jsxs(e.li, {
        children: ["Применяйте ", o.jsx(e.code, {
          children: "adaptive-always"
        }), " только при необходимости, чтобы избежать лишних вычислений."]
      }), `
`]
    }), `
`, o.jsx(e.h3, {
      children: "Пример использования"
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-html",
        children: `<!-- Адаптивное изображение с указанием ширины объекта -->
<Image adaptive object-width="63.5" />

<!-- Адаптивное изображение с высотой и группой -->
<Image adaptive object-height="40" adaptive-group="products" />

<!-- Постоянное масштабирование вне зависимости от видимости -->
<Image adaptive object-width="50" adaptive-always />
`
      })
    })]
  });
}
function Ss(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(vo, {
      ...t
    })
  }) : vo(t);
}
function xo(t) {
  const e = {
    code: "code",
    h3: "h3",
    p: "p",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h3, {
      children: o.jsx(e.code, {
        children: "load"
      })
    }), `
`, o.jsxs(e.p, {
      children: [`Triggered after the image is loaded.
The handler receives an object `, o.jsx(e.code, {
        children: "ImageEventData"
      }), " with image data and source type."]
    })]
  });
}
function As(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(xo, {
      ...t
    })
  }) : xo(t);
}
function jo(t) {
  const e = {
    code: "code",
    h3: "h3",
    p: "p",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h3, {
      children: o.jsx(e.code, {
        children: "load"
      })
    }), `
`, o.jsxs(e.p, {
      children: [`Вызывается после загрузки изображения.
В обработчике передаётся объект `, o.jsx(e.code, {
        children: "ImageEventData"
      }), " с данными изображения и типом источника."]
    })]
  });
}
function Ts(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(jo, {
      ...t
    })
  }) : jo(t);
}
function ko(t) {
  const e = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h3, {
      children: o.jsx(e.code, {
        children: "type"
      })
    }), `
`, o.jsx(e.p, {
      children: "Type of the uploaded image."
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-ts",
        children: `enum ImageTypeValue {
  pdf = 'pdf',
  file = 'file',
  image = 'image',
  flag = 'flag',
  color = 'color',
  public = 'public',
  filled = 'filled',
  outlined = 'outlined',
  round = 'round',
  sharp = 'sharp',
  twoTone = 'two-tone',
  material = 'material',
  icon = 'icon'
}
`
      })
    })]
  });
}
function Rs(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(ko, {
      ...t
    })
  }) : ko(t);
}
function bo(t) {
  const e = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h3, {
      children: o.jsx(e.code, {
        children: "type"
      })
    }), `
`, o.jsx(e.p, {
      children: "Тип загруженного изображения."
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-ts",
        children: `enum ImageTypeValue {
  pdf = 'pdf',
  file = 'file',
  image = 'image',
  flag = 'flag',
  color = 'color',
  public = 'public',
  filled = 'filled',
  outlined = 'outlined',
  round = 'round',
  sharp = 'sharp',
  twoTone = 'two-tone',
  material = 'material',
  icon = 'icon'
}
`
      })
    })]
  });
}
function zs(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(bo, {
      ...t
    })
  }) : bo(t);
}
function _o(t) {
  const e = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h3, {
      children: o.jsx(e.code, {
        children: "data"
      })
    }), `
`, o.jsx(e.p, {
      children: "Information about the uploaded image, including its type and source."
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-ts",
        children: `export type ImageEventItem = ImageItem | string | undefined
export type ImageItem = {
  image: HTMLImageElement
  src: string
  width: number
  height: number
}
`
      })
    })]
  });
}
function Ns(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(_o, {
      ...t
    })
  }) : _o(t);
}
function Co(t) {
  const e = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...t.components
  };
  return o.jsxs(o.Fragment, {
    children: [o.jsx(e.h3, {
      children: o.jsx(e.code, {
        children: "data"
      })
    }), `
`, o.jsx(e.p, {
      children: "Информация о загруженном изображении, включая его тип и источник."
    }), `
`, o.jsx(e.pre, {
      children: o.jsx(e.code, {
        className: "language-ts",
        children: `export type ImageEventItem = ImageItem | string | undefined
export type ImageItem = {
  image: HTMLImageElement
  src: string
  width: number
  height: number
}
`
      })
    })]
  });
}
function Os(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? o.jsx(e, {
    ...t,
    children: o.jsx(Co, {
      ...t
    })
  }) : Co(t);
}
const Is = {
  name: "Image",
  descriptions: {
    value: {
      en: Cs,
      ru: ws
    },
    size: {
      en: Ds,
      ru: Es
    },
    adaptive: {
      en: Ms,
      ru: Ss
    },
    "event.load": {
      en: As,
      ru: Ts
    },
    "expose.type": {
      en: Rs,
      ru: zs
    },
    "expose.data": {
      en: Ns,
      ru: Os
    }
  }
}, Ps = [
  gs,
  vs,
  _s,
  Is
];
class Vs {
  /**
   * Constructor
   * @param name - Name of the component to find in the descriptions/ Имя компонента для поиска в описаниях
   */
  constructor(e) {
    x(this, "item");
    x(this, "mdx");
    this.item = ns.find((n) => n.name === e), this.mdx = Ps.find((n) => n.name === e);
  }
  /**
   * Get the description of the component
   *
   * Возвращает описание компонента
   * @return The description of the component or undefined if not found/ Описание компонента или undefined, если не найдено
   */
  getItem() {
    return this.item;
  }
  /**
   * Get an additional description of the component for a specific type
   *
   * Возвращает дополнительное описание компонента для конкретного типа
   * @param type - Type of the description to retrieve/ тип описания для получения
   */
  getDescriptionByType(e) {
    var r, s;
    const n = (s = (r = this.mdx) == null ? void 0 : r.descriptions) == null ? void 0 : s[e];
    return ge(n ? ie(n) ? n[ee.getLanguage()] : (console.log("descriptions", n), n.replace(/DesignComponent/g, "asd")) : "");
  }
}
export {
  Ji as StorybookCategory,
  V as StorybookControl,
  Fs as WikiStorybook,
  Vs as WikiStorybookDescriptions,
  Zi as WikiStorybookItem
};
