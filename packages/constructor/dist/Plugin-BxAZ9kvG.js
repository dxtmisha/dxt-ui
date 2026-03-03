var E = Object.defineProperty;
var L = (a, t, e) => t in a ? E(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var c = (a, t, e) => L(a, typeof t != "symbol" ? t + "" : t, e);
import { toKebabCase as R, toCamelCase as $ } from "@dxtmisha/functional-basic";
import { isFilled as _ } from "@dxtmisha/functional";
class C {
  /**
   * Checks if the id is a user’s file.
   *
   * Проверяет, является ли id файлом пользователя.
   * @param id file identification / идентификация файла
   */
  static isSrc(t) {
    return !!(t.match(/\/src\//i) && !t.match(/\/node_modules\//i));
  }
  /**
   * Checks if the id is a JS user’s file.
   *
   * Проверяет, является ли id файлом JS пользователя.
   * @param id file identification / идентификация файла
   */
  static isJs(t) {
    return this.isSrc(t) && !!t.match(/\.ts|js|tsx/);
  }
  /**
   * Checks if the id is a Vue user’s file.
   *
   * Проверяет, является ли id файлом vue пользователя.
   * @param id file identification / идентификация файла
   */
  static isVue(t) {
    return this.isSrc(t) && !!t.match(/\.vue$/);
  }
  /**
   * Checks if the id is a Style user’s file.
   *
   * Проверяет, является ли id файлом style пользователя.
   * @param id file identification / идентификация файла
   */
  static isCss(t) {
    return this.isSrc(t) && !!t.match(/\.(css|sass|scss)/);
  }
  /**
   * Checks if it is development mode.
   *
   * Проверяет, является ли режим разработка.
   * @param mode current mode / текущий режим
   */
  static isDev(t) {
    return t === "development";
  }
}
var N = 44, I = 59, y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", x = new Uint8Array(64), O = new Uint8Array(128);
for (let a = 0; a < y.length; a++) {
  const t = y.charCodeAt(a);
  x[a] = t, O[t] = a;
}
function d(a, t, e) {
  let i = t - e;
  i = i < 0 ? -i << 1 | 1 : i << 1;
  do {
    let n = i & 31;
    i >>>= 5, i > 0 && (n |= 32), a.write(x[n]);
  } while (i > 0);
  return t;
}
var S = 1024 * 16, k = typeof TextDecoder != "undefined" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer != "undefined" ? {
  decode(a) {
    return Buffer.from(a.buffer, a.byteOffset, a.byteLength).toString();
  }
} : {
  decode(a) {
    let t = "";
    for (let e = 0; e < a.length; e++)
      t += String.fromCharCode(a[e]);
    return t;
  }
}, P = class {
  constructor() {
    this.pos = 0, this.out = "", this.buffer = new Uint8Array(S);
  }
  write(a) {
    const { buffer: t } = this;
    t[this.pos++] = a, this.pos === S && (this.out += k.decode(t), this.pos = 0);
  }
  flush() {
    const { buffer: a, out: t, pos: e } = this;
    return e > 0 ? t + k.decode(a.subarray(0, e)) : t;
  }
};
function M(a) {
  const t = new P();
  let e = 0, i = 0, n = 0, s = 0;
  for (let r = 0; r < a.length; r++) {
    const o = a[r];
    if (r > 0 && t.write(I), o.length === 0) continue;
    let h = 0;
    for (let l = 0; l < o.length; l++) {
      const u = o[l];
      l > 0 && t.write(N), h = d(t, u[0], h), u.length !== 1 && (e = d(t, u[1], e), i = d(t, u[2], i), n = d(t, u[3], n), u.length !== 4 && (s = d(t, u[4], s)));
    }
  }
  return t.flush();
}
class m {
  constructor(t) {
    this.bits = t instanceof m ? t.bits.slice() : [];
  }
  add(t) {
    this.bits[t >> 5] |= 1 << (t & 31);
  }
  has(t) {
    return !!(this.bits[t >> 5] & 1 << (t & 31));
  }
}
class p {
  constructor(t, e, i) {
    this.start = t, this.end = e, this.original = i, this.intro = "", this.outro = "", this.content = i, this.storeName = !1, this.edited = !1, this.previous = null, this.next = null;
  }
  appendLeft(t) {
    this.outro += t;
  }
  appendRight(t) {
    this.intro = this.intro + t;
  }
  clone() {
    const t = new p(this.start, this.end, this.original);
    return t.intro = this.intro, t.outro = this.outro, t.content = this.content, t.storeName = this.storeName, t.edited = this.edited, t;
  }
  contains(t) {
    return this.start < t && t < this.end;
  }
  eachNext(t) {
    let e = this;
    for (; e; )
      t(e), e = e.next;
  }
  eachPrevious(t) {
    let e = this;
    for (; e; )
      t(e), e = e.previous;
  }
  edit(t, e, i) {
    return this.content = t, i || (this.intro = "", this.outro = ""), this.storeName = e, this.edited = !0, this;
  }
  prependLeft(t) {
    this.outro = t + this.outro;
  }
  prependRight(t) {
    this.intro = t + this.intro;
  }
  reset() {
    this.intro = "", this.outro = "", this.edited && (this.content = this.original, this.storeName = !1, this.edited = !1);
  }
  split(t) {
    const e = t - this.start, i = this.original.slice(0, e), n = this.original.slice(e);
    this.original = i;
    const s = new p(t, this.end, n);
    return s.outro = this.outro, this.outro = "", this.end = t, this.edited ? (s.edit("", !1), this.content = "") : this.content = i, s.next = this.next, s.next && (s.next.previous = s), s.previous = this, this.next = s, s;
  }
  toString() {
    return this.intro + this.content + this.outro;
  }
  trimEnd(t) {
    if (this.outro = this.outro.replace(t, ""), this.outro.length) return !0;
    const e = this.content.replace(t, "");
    if (e.length)
      return e !== this.content && (this.split(this.start + e.length).edit("", void 0, !0), this.edited && this.edit(e, this.storeName, !0)), !0;
    if (this.edit("", void 0, !0), this.intro = this.intro.replace(t, ""), this.intro.length) return !0;
  }
  trimStart(t) {
    if (this.intro = this.intro.replace(t, ""), this.intro.length) return !0;
    const e = this.content.replace(t, "");
    if (e.length) {
      if (e !== this.content) {
        const i = this.split(this.end - e.length);
        this.edited && i.edit(e, this.storeName, !0), this.edit("", void 0, !0);
      }
      return !0;
    } else if (this.edit("", void 0, !0), this.outro = this.outro.replace(t, ""), this.outro.length) return !0;
  }
}
function A() {
  return typeof globalThis != "undefined" && typeof globalThis.btoa == "function" ? (a) => globalThis.btoa(unescape(encodeURIComponent(a))) : typeof Buffer == "function" ? (a) => Buffer.from(a, "utf-8").toString("base64") : () => {
    throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
  };
}
const j = /* @__PURE__ */ A();
class T {
  constructor(t) {
    this.version = 3, this.file = t.file, this.sources = t.sources, this.sourcesContent = t.sourcesContent, this.names = t.names, this.mappings = M(t.mappings), typeof t.x_google_ignoreList != "undefined" && (this.x_google_ignoreList = t.x_google_ignoreList), typeof t.debugId != "undefined" && (this.debugId = t.debugId);
  }
  toString() {
    return JSON.stringify(this);
  }
  toUrl() {
    return "data:application/json;charset=utf-8;base64," + j(this.toString());
  }
}
function B(a) {
  const t = a.split(`
`), e = t.filter((s) => /^\t+/.test(s)), i = t.filter((s) => /^ {2,}/.test(s));
  if (e.length === 0 && i.length === 0)
    return null;
  if (e.length >= i.length)
    return "	";
  const n = i.reduce((s, r) => {
    const o = /^ +/.exec(r)[0].length;
    return Math.min(o, s);
  }, 1 / 0);
  return new Array(n + 1).join(" ");
}
function D(a, t) {
  const e = a.split(/[/\\]/), i = t.split(/[/\\]/);
  for (e.pop(); e[0] === i[0]; )
    e.shift(), i.shift();
  if (e.length) {
    let n = e.length;
    for (; n--; ) e[n] = "..";
  }
  return e.concat(i).join("/");
}
const U = Object.prototype.toString;
function V(a) {
  return U.call(a) === "[object Object]";
}
function v(a) {
  const t = a.split(`
`), e = [];
  for (let i = 0, n = 0; i < t.length; i++)
    e.push(n), n += t[i].length + 1;
  return function(n) {
    let s = 0, r = e.length;
    for (; s < r; ) {
      const l = s + r >> 1;
      n < e[l] ? r = l : s = l + 1;
    }
    const o = s - 1, h = n - e[o];
    return { line: o, column: h };
  };
}
const z = /\w/;
class F {
  constructor(t) {
    this.hires = t, this.generatedCodeLine = 0, this.generatedCodeColumn = 0, this.raw = [], this.rawSegments = this.raw[this.generatedCodeLine] = [], this.pending = null;
  }
  addEdit(t, e, i, n) {
    if (e.length) {
      const s = e.length - 1;
      let r = e.indexOf(`
`, 0), o = -1;
      for (; r >= 0 && s > r; ) {
        const l = [this.generatedCodeColumn, t, i.line, i.column];
        n >= 0 && l.push(n), this.rawSegments.push(l), this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, o = r, r = e.indexOf(`
`, r + 1);
      }
      const h = [this.generatedCodeColumn, t, i.line, i.column];
      n >= 0 && h.push(n), this.rawSegments.push(h), this.advance(e.slice(o + 1));
    } else this.pending && (this.rawSegments.push(this.pending), this.advance(e));
    this.pending = null;
  }
  addUneditedChunk(t, e, i, n, s) {
    let r = e.start, o = !0, h = !1;
    for (; r < e.end; ) {
      if (i[r] === `
`)
        n.line += 1, n.column = 0, this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, o = !0, h = !1;
      else {
        if (this.hires || o || s.has(r)) {
          const l = [this.generatedCodeColumn, t, n.line, n.column];
          this.hires === "boundary" ? z.test(i[r]) ? h || (this.rawSegments.push(l), h = !0) : (this.rawSegments.push(l), h = !1) : this.rawSegments.push(l);
        }
        n.column += 1, this.generatedCodeColumn += 1, o = !1;
      }
      r += 1;
    }
    this.pending = null;
  }
  advance(t) {
    if (!t) return;
    const e = t.split(`
`);
    if (e.length > 1) {
      for (let i = 0; i < e.length - 1; i++)
        this.generatedCodeLine++, this.raw[this.generatedCodeLine] = this.rawSegments = [];
      this.generatedCodeColumn = 0;
    }
    this.generatedCodeColumn += e[e.length - 1].length;
  }
}
const g = `
`, f = {
  insertLeft: !1,
  insertRight: !1,
  storeName: !1
};
class b {
  constructor(t, e = {}) {
    const i = new p(0, t.length, t);
    Object.defineProperties(this, {
      original: { writable: !0, value: t },
      outro: { writable: !0, value: "" },
      intro: { writable: !0, value: "" },
      firstChunk: { writable: !0, value: i },
      lastChunk: { writable: !0, value: i },
      lastSearchedChunk: { writable: !0, value: i },
      byStart: { writable: !0, value: {} },
      byEnd: { writable: !0, value: {} },
      filename: { writable: !0, value: e.filename },
      indentExclusionRanges: { writable: !0, value: e.indentExclusionRanges },
      sourcemapLocations: { writable: !0, value: new m() },
      storedNames: { writable: !0, value: {} },
      indentStr: { writable: !0, value: void 0 },
      ignoreList: { writable: !0, value: e.ignoreList },
      offset: { writable: !0, value: e.offset || 0 }
    }), this.byStart[0] = i, this.byEnd[t.length] = i;
  }
  addSourcemapLocation(t) {
    this.sourcemapLocations.add(t);
  }
  append(t) {
    if (typeof t != "string") throw new TypeError("outro content must be a string");
    return this.outro += t, this;
  }
  appendLeft(t, e) {
    if (t = t + this.offset, typeof e != "string") throw new TypeError("inserted content must be a string");
    this._split(t);
    const i = this.byEnd[t];
    return i ? i.appendLeft(e) : this.intro += e, this;
  }
  appendRight(t, e) {
    if (t = t + this.offset, typeof e != "string") throw new TypeError("inserted content must be a string");
    this._split(t);
    const i = this.byStart[t];
    return i ? i.appendRight(e) : this.outro += e, this;
  }
  clone() {
    const t = new b(this.original, { filename: this.filename, offset: this.offset });
    let e = this.firstChunk, i = t.firstChunk = t.lastSearchedChunk = e.clone();
    for (; e; ) {
      t.byStart[i.start] = i, t.byEnd[i.end] = i;
      const n = e.next, s = n && n.clone();
      s && (i.next = s, s.previous = i, i = s), e = n;
    }
    return t.lastChunk = i, this.indentExclusionRanges && (t.indentExclusionRanges = this.indentExclusionRanges.slice()), t.sourcemapLocations = new m(this.sourcemapLocations), t.intro = this.intro, t.outro = this.outro, t;
  }
  generateDecodedMap(t) {
    t = t || {};
    const e = 0, i = Object.keys(this.storedNames), n = new F(t.hires), s = v(this.original);
    return this.intro && n.advance(this.intro), this.firstChunk.eachNext((r) => {
      const o = s(r.start);
      r.intro.length && n.advance(r.intro), r.edited ? n.addEdit(
        e,
        r.content,
        o,
        r.storeName ? i.indexOf(r.original) : -1
      ) : n.addUneditedChunk(e, r, this.original, o, this.sourcemapLocations), r.outro.length && n.advance(r.outro);
    }), this.outro && n.advance(this.outro), {
      file: t.file ? t.file.split(/[/\\]/).pop() : void 0,
      sources: [
        t.source ? D(t.file || "", t.source) : t.file || ""
      ],
      sourcesContent: t.includeContent ? [this.original] : void 0,
      names: i,
      mappings: n.raw,
      x_google_ignoreList: this.ignoreList ? [e] : void 0
    };
  }
  generateMap(t) {
    return new T(this.generateDecodedMap(t));
  }
  _ensureindentStr() {
    this.indentStr === void 0 && (this.indentStr = B(this.original));
  }
  _getRawIndentString() {
    return this._ensureindentStr(), this.indentStr;
  }
  getIndentString() {
    return this._ensureindentStr(), this.indentStr === null ? "	" : this.indentStr;
  }
  indent(t, e) {
    const i = /^[^\r\n]/gm;
    if (V(t) && (e = t, t = void 0), t === void 0 && (this._ensureindentStr(), t = this.indentStr || "	"), t === "") return this;
    e = e || {};
    const n = {};
    e.exclude && (typeof e.exclude[0] == "number" ? [e.exclude] : e.exclude).forEach((u) => {
      for (let w = u[0]; w < u[1]; w += 1)
        n[w] = !0;
    });
    let s = e.indentStart !== !1;
    const r = (l) => s ? `${t}${l}` : (s = !0, l);
    this.intro = this.intro.replace(i, r);
    let o = 0, h = this.firstChunk;
    for (; h; ) {
      const l = h.end;
      if (h.edited)
        n[o] || (h.content = h.content.replace(i, r), h.content.length && (s = h.content[h.content.length - 1] === `
`));
      else
        for (o = h.start; o < l; ) {
          if (!n[o]) {
            const u = this.original[o];
            u === `
` ? s = !0 : u !== "\r" && s && (s = !1, o === h.start || (this._splitChunk(h, o), h = h.next), h.prependRight(t));
          }
          o += 1;
        }
      o = h.end, h = h.next;
    }
    return this.outro = this.outro.replace(i, r), this;
  }
  insert() {
    throw new Error(
      "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
    );
  }
  insertLeft(t, e) {
    return f.insertLeft || (console.warn(
      "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
    ), f.insertLeft = !0), this.appendLeft(t, e);
  }
  insertRight(t, e) {
    return f.insertRight || (console.warn(
      "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
    ), f.insertRight = !0), this.prependRight(t, e);
  }
  move(t, e, i) {
    if (t = t + this.offset, e = e + this.offset, i = i + this.offset, i >= t && i <= e) throw new Error("Cannot move a selection inside itself");
    this._split(t), this._split(e), this._split(i);
    const n = this.byStart[t], s = this.byEnd[e], r = n.previous, o = s.next, h = this.byStart[i];
    if (!h && s === this.lastChunk) return this;
    const l = h ? h.previous : this.lastChunk;
    return r && (r.next = o), o && (o.previous = r), l && (l.next = n), h && (h.previous = s), n.previous || (this.firstChunk = s.next), s.next || (this.lastChunk = n.previous, this.lastChunk.next = null), n.previous = l, s.next = h || null, l || (this.firstChunk = n), h || (this.lastChunk = s), this;
  }
  overwrite(t, e, i, n) {
    return n = n || {}, this.update(t, e, i, { ...n, overwrite: !n.contentOnly });
  }
  update(t, e, i, n) {
    if (t = t + this.offset, e = e + this.offset, typeof i != "string") throw new TypeError("replacement content must be a string");
    if (this.original.length !== 0) {
      for (; t < 0; ) t += this.original.length;
      for (; e < 0; ) e += this.original.length;
    }
    if (e > this.original.length) throw new Error("end is out of bounds");
    if (t === e)
      throw new Error(
        "Cannot overwrite a zero-length range – use appendLeft or prependRight instead"
      );
    this._split(t), this._split(e), n === !0 && (f.storeName || (console.warn(
      "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
    ), f.storeName = !0), n = { storeName: !0 });
    const s = n !== void 0 ? n.storeName : !1, r = n !== void 0 ? n.overwrite : !1;
    if (s) {
      const l = this.original.slice(t, e);
      Object.defineProperty(this.storedNames, l, {
        writable: !0,
        value: !0,
        enumerable: !0
      });
    }
    const o = this.byStart[t], h = this.byEnd[e];
    if (o) {
      let l = o;
      for (; l !== h; ) {
        if (l.next !== this.byStart[l.end])
          throw new Error("Cannot overwrite across a split point");
        l = l.next, l.edit("", !1);
      }
      o.edit(i, s, !r);
    } else {
      const l = new p(t, e, "").edit(i, s);
      h.next = l, l.previous = h;
    }
    return this;
  }
  prepend(t) {
    if (typeof t != "string") throw new TypeError("outro content must be a string");
    return this.intro = t + this.intro, this;
  }
  prependLeft(t, e) {
    if (t = t + this.offset, typeof e != "string") throw new TypeError("inserted content must be a string");
    this._split(t);
    const i = this.byEnd[t];
    return i ? i.prependLeft(e) : this.intro = e + this.intro, this;
  }
  prependRight(t, e) {
    if (t = t + this.offset, typeof e != "string") throw new TypeError("inserted content must be a string");
    this._split(t);
    const i = this.byStart[t];
    return i ? i.prependRight(e) : this.outro = e + this.outro, this;
  }
  remove(t, e) {
    if (t = t + this.offset, e = e + this.offset, this.original.length !== 0) {
      for (; t < 0; ) t += this.original.length;
      for (; e < 0; ) e += this.original.length;
    }
    if (t === e) return this;
    if (t < 0 || e > this.original.length) throw new Error("Character is out of bounds");
    if (t > e) throw new Error("end must be greater than start");
    this._split(t), this._split(e);
    let i = this.byStart[t];
    for (; i; )
      i.intro = "", i.outro = "", i.edit(""), i = e > i.end ? this.byStart[i.end] : null;
    return this;
  }
  reset(t, e) {
    if (t = t + this.offset, e = e + this.offset, this.original.length !== 0) {
      for (; t < 0; ) t += this.original.length;
      for (; e < 0; ) e += this.original.length;
    }
    if (t === e) return this;
    if (t < 0 || e > this.original.length) throw new Error("Character is out of bounds");
    if (t > e) throw new Error("end must be greater than start");
    this._split(t), this._split(e);
    let i = this.byStart[t];
    for (; i; )
      i.reset(), i = e > i.end ? this.byStart[i.end] : null;
    return this;
  }
  lastChar() {
    if (this.outro.length) return this.outro[this.outro.length - 1];
    let t = this.lastChunk;
    do {
      if (t.outro.length) return t.outro[t.outro.length - 1];
      if (t.content.length) return t.content[t.content.length - 1];
      if (t.intro.length) return t.intro[t.intro.length - 1];
    } while (t = t.previous);
    return this.intro.length ? this.intro[this.intro.length - 1] : "";
  }
  lastLine() {
    let t = this.outro.lastIndexOf(g);
    if (t !== -1) return this.outro.substr(t + 1);
    let e = this.outro, i = this.lastChunk;
    do {
      if (i.outro.length > 0) {
        if (t = i.outro.lastIndexOf(g), t !== -1) return i.outro.substr(t + 1) + e;
        e = i.outro + e;
      }
      if (i.content.length > 0) {
        if (t = i.content.lastIndexOf(g), t !== -1) return i.content.substr(t + 1) + e;
        e = i.content + e;
      }
      if (i.intro.length > 0) {
        if (t = i.intro.lastIndexOf(g), t !== -1) return i.intro.substr(t + 1) + e;
        e = i.intro + e;
      }
    } while (i = i.previous);
    return t = this.intro.lastIndexOf(g), t !== -1 ? this.intro.substr(t + 1) + e : this.intro + e;
  }
  slice(t = 0, e = this.original.length - this.offset) {
    if (t = t + this.offset, e = e + this.offset, this.original.length !== 0) {
      for (; t < 0; ) t += this.original.length;
      for (; e < 0; ) e += this.original.length;
    }
    let i = "", n = this.firstChunk;
    for (; n && (n.start > t || n.end <= t); ) {
      if (n.start < e && n.end >= e)
        return i;
      n = n.next;
    }
    if (n && n.edited && n.start !== t)
      throw new Error(`Cannot use replaced character ${t} as slice start anchor.`);
    const s = n;
    for (; n; ) {
      n.intro && (s !== n || n.start === t) && (i += n.intro);
      const r = n.start < e && n.end >= e;
      if (r && n.edited && n.end !== e)
        throw new Error(`Cannot use replaced character ${e} as slice end anchor.`);
      const o = s === n ? t - n.start : 0, h = r ? n.content.length + e - n.end : n.content.length;
      if (i += n.content.slice(o, h), n.outro && (!r || n.end === e) && (i += n.outro), r)
        break;
      n = n.next;
    }
    return i;
  }
  // TODO deprecate this? not really very useful
  snip(t, e) {
    const i = this.clone();
    return i.remove(0, t), i.remove(e, i.original.length), i;
  }
  _split(t) {
    if (this.byStart[t] || this.byEnd[t]) return;
    let e = this.lastSearchedChunk, i = e;
    const n = t > e.end;
    for (; e; ) {
      if (e.contains(t)) return this._splitChunk(e, t);
      if (e = n ? this.byStart[e.end] : this.byEnd[e.start], e === i) return;
      i = e;
    }
  }
  _splitChunk(t, e) {
    if (t.edited && t.content.length) {
      const n = v(this.original)(e);
      throw new Error(
        `Cannot split a chunk that has already been edited (${n.line}:${n.column} – "${t.original}")`
      );
    }
    const i = t.split(e);
    return this.byEnd[e] = t, this.byStart[e] = i, this.byEnd[i.end] = i, t === this.lastChunk && (this.lastChunk = i), this.lastSearchedChunk = t, !0;
  }
  toString() {
    let t = this.intro, e = this.firstChunk;
    for (; e; )
      t += e.toString(), e = e.next;
    return t + this.outro;
  }
  isEmpty() {
    let t = this.firstChunk;
    do
      if (t.intro.length && t.intro.trim() || t.content.length && t.content.trim() || t.outro.length && t.outro.trim())
        return !1;
    while (t = t.next);
    return !0;
  }
  length() {
    let t = this.firstChunk, e = 0;
    do
      e += t.intro.length + t.content.length + t.outro.length;
    while (t = t.next);
    return e;
  }
  trimLines() {
    return this.trim("[\\r\\n]");
  }
  trim(t) {
    return this.trimStart(t).trimEnd(t);
  }
  trimEndAborted(t) {
    const e = new RegExp((t || "\\s") + "+$");
    if (this.outro = this.outro.replace(e, ""), this.outro.length) return !0;
    let i = this.lastChunk;
    do {
      const n = i.end, s = i.trimEnd(e);
      if (i.end !== n && (this.lastChunk === i && (this.lastChunk = i.next), this.byEnd[i.end] = i, this.byStart[i.next.start] = i.next, this.byEnd[i.next.end] = i.next), s) return !0;
      i = i.previous;
    } while (i);
    return !1;
  }
  trimEnd(t) {
    return this.trimEndAborted(t), this;
  }
  trimStartAborted(t) {
    const e = new RegExp("^" + (t || "\\s") + "+");
    if (this.intro = this.intro.replace(e, ""), this.intro.length) return !0;
    let i = this.firstChunk;
    do {
      const n = i.end, s = i.trimStart(e);
      if (i.end !== n && (i === this.lastChunk && (this.lastChunk = i.next), this.byEnd[i.end] = i, this.byStart[i.next.start] = i.next, this.byEnd[i.next.end] = i.next), s) return !0;
      i = i.next;
    } while (i);
    return !1;
  }
  trimStart(t) {
    return this.trimStartAborted(t), this;
  }
  hasChanged() {
    return this.original !== this.toString();
  }
  _replaceRegexp(t, e) {
    function i(s, r) {
      return typeof e == "string" ? e.replace(/\$(\$|&|\d+)/g, (o, h) => h === "$" ? "$" : h === "&" ? s[0] : +h < s.length ? s[+h] : `$${h}`) : e(...s, s.index, r, s.groups);
    }
    function n(s, r) {
      let o;
      const h = [];
      for (; o = s.exec(r); )
        h.push(o);
      return h;
    }
    if (t.global)
      n(t, this.original).forEach((r) => {
        if (r.index != null) {
          const o = i(r, this.original);
          o !== r[0] && this.overwrite(r.index, r.index + r[0].length, o);
        }
      });
    else {
      const s = this.original.match(t);
      if (s && s.index != null) {
        const r = i(s, this.original);
        r !== s[0] && this.overwrite(s.index, s.index + s[0].length, r);
      }
    }
    return this;
  }
  _replaceString(t, e) {
    const { original: i } = this, n = i.indexOf(t);
    return n !== -1 && (typeof e == "function" && (e = e(t, n, i)), t !== e && this.overwrite(n, n + t.length, e)), this;
  }
  replace(t, e) {
    return typeof t == "string" ? this._replaceString(t, e) : this._replaceRegexp(t, e);
  }
  _replaceAllString(t, e) {
    const { original: i } = this, n = t.length;
    for (let s = i.indexOf(t); s !== -1; s = i.indexOf(t, s + n)) {
      const r = i.slice(s, s + n);
      let o = e;
      typeof e == "function" && (o = e(r, s, i)), r !== o && this.overwrite(s, s + n, o);
    }
    return this;
  }
  replaceAll(t, e) {
    if (typeof t == "string")
      return this._replaceAllString(t, e);
    if (!t.global)
      throw new TypeError(
        "MagicString.prototype.replaceAll called with a non-global RegExp argument"
      );
    return this._replaceRegexp(t, e);
  }
}
class J {
  /**
   * Constructor
   * @param id file ID / ID файла
   * @param code source code / исходный код
   */
  constructor(t, e) {
    c(this, "magicString");
    c(this, "newCode");
    this.id = t, this.code = e, this.magicString = new b(e), this.newCode = e;
  }
  /**
   * Checks if the file is a Vue component.
   *
   * Проверяет, является ли файл компонентом Vue.
   */
  isVue() {
    return C.isVue(this.id);
  }
  /**
   * Checks if the file is a SCSS file.
   *
   * Проверяет, является ли файл SCSS.
   */
  isScss() {
    return C.isCss(this.id);
  }
  /**
   * Returns the modified code.
   *
   * Возвращает измененный код.
   */
  get() {
    return this.newCode;
  }
  /**
   * Returns the file ID.
   *
   * Возвращает ID файла.
   */
  getId() {
    return this.id;
  }
  /**
   * Returns the original code.
   *
   * Возвращает оригинальный код.
   */
  getCode() {
    return this.code;
  }
  /**
   * Returns the source map.
   *
   * Возвращает карту кода.
   */
  getMaps() {
    return this.magicString.generateMap({
      source: this.id,
      includeContent: !0,
      hires: !0
    });
  }
  /**
   * Checks for the presence of code.
   *
   * Проверяет наличие кода.
   * @param pattern search pattern / паттерн поиска
   * @param flags search flags / флаги поиска
   */
  has(t, e = "i") {
    return typeof t == "string" ? this.code.includes(t) : new RegExp(t, e).test(this.code);
  }
  /**
   * Adds code after the <script setup> tag.
   * If the tag is missing, adds it to the beginning of the file.
   *
   * Добавляет код после тега <script setup>.
   * Если тег отсутствует, добавляет в начало файла.
   * @param code code to add / код для добавления
   */
  addAfterScript(t) {
    const e = /(<script[^>]*\bsetup\b[^>]*>)/;
    return this.code.match(e) ? this.newCode = this.newCode.replace(e, `$1${t}`) : this.newCode = `<script setup>\r
${t}<\/script>${this.newCode}`, this;
  }
  /**
   * Adds code to the beginning of the file.
   *
   * Добавляет код в начало файла.
   * @param code code to add / код для добавления
   */
  addStart(t) {
    return this.newCode = `${t}${this.newCode}`, this;
  }
  /**
   * Adds code to the beginning of the file if it is missing.
   *
   * Добавляет код в начало файла, если он отсутствует.
   * @param code code to add / код для добавления
   * @param pattern search pattern / паттерн поиска
   */
  addStartIfNone(t, e) {
    return this.has(e != null ? e : t) || this.addStart(t), this;
  }
  /**
   * Replaces the found fragment with new code in newCode.
   *
   * Заменяет найденный фрагмент на новый код в newCode.
   * @param pattern search pattern / паттерн поиска
   * @param replacement replacement string / строка замены
   */
  replace(t, e) {
    return this.newCode = this.newCode.replace(t, e), this;
  }
}
const q = [
  /* Flex */
  "flex-position",
  "flex-dynamic",
  "justify-content",
  /* Position */
  "inset",
  "horizon",
  "vertically",
  "left",
  "right",
  "absolute",
  "absolute-top",
  "absolute-bottom",
  "absolute-after",
  /* Padding */
  "padding-x",
  "padding-y",
  "padding-left",
  "padding-right",
  /* Margin */
  "margin-x",
  "margin-y",
  "margin-left",
  "margin-right",
  /* Dimension */
  "width",
  "height",
  "width-basis",
  "height-basis",
  "aspect-ratio",
  "aspect-ratio-width",
  "aspect-ratio-height",
  "squared",
  "circle",
  /* Font */
  "font-size",
  "line-height",
  "text-align",
  "text-overflow",
  "clamp",
  "text-select-none",
  "text-case",
  "paragraph-spacing",
  /* Color */
  "palette",
  "palette-var",
  "palette-color",
  "palette-stroke",
  "palette-background",
  "palette-fill",
  "palette-gradient",
  "palette-border",
  "color",
  "color-opacity",
  "stroke",
  "stroke-opacity",
  "background-color",
  "background-opacity",
  "background-size",
  "fill",
  "fill-opacity",
  "gradient",
  "gradient-opacity",
  "border-color",
  "border-opacity",
  /* Transform */
  "translate-x",
  "translate-y",
  "scale",
  "rotate"
];
class H {
  /**
   * Constructor
   * @param design design name / название дизайна
   * @param packageName package name / название пакета
   * @param componentsReg regular expression for finding components / регулярное выражение для поиска компонентов
   * @param styleVarsReg regular expression for finding variables / регулярное выражение для поиска переменных
   * @param componentsList list of components / список компонентов
   */
  constructor(t, e, i, n, s) {
    c(this, "styleModification");
    this.design = t, this.packageName = e, this.componentsReg = i, this.styleVarsReg = n, this.componentsList = s, this.styleModification = this.initStyleModification();
  }
  /**
   * Checks if the code contains a component.
   *
   * Проверяет, содержит ли код компонент.
   * @param code code to check / код для проверки
   */
  hasComponent(t) {
    return !!t.match(new RegExp(this.componentsReg, "i"));
  }
  /**
   * Checks if the code contains variables.
   *
   * Проверяет, содержит ли код переменные.
   * @param code code to check / код для проверки
   */
  hasVars(t) {
    return !!t.match(new RegExp(this.styleVarsReg, "i"));
  }
  /**
   * Returns the design name.
   *
   * Возвращает название дизайна.
   */
  getDesign() {
    return this.design;
  }
  /**
   * Returns the package name.
   *
   * Возвращает название пакета.
   */
  getPackageName() {
    return this.packageName;
  }
  /**
   * Returns a list of all components in the code.
   *
   * Возвращает список всех компонентов в коде.
   * @param code code to check / код для проверки
   */
  getComponents(t) {
    const e = t.match(this.componentsReg), i = [];
    return e && e.forEach((n) => {
      const s = this.findComponent(n.trim());
      s && !i.find((r) => r.name === s.name) && !t.match(`${this.getPackageName()}/${s.name}`) && i.push(s);
    }), i;
  }
  /**
   * Returns the regular expression for finding variables.
   *
   * Возвращает регулярное выражение для поиска переменных.
   */
  getStyleVarsReg() {
    return this.styleVarsReg;
  }
  /**
   * Returns the style modification map.
   *
   * Возвращает карту модификации стилей.
   */
  getStyleModification() {
    return this.styleModification;
  }
  /**
   * Finds a component by name.
   *
   * Находит компонент по имени.
   * @param component component name / название компонента
   */
  findComponent(t) {
    return this.componentsList.find(
      (e) => e.name === t || !!t.match(new RegExp(e.reg, "i"))
    );
  }
  /**
   * Initializes the style modification map.
   *
   * Инициализирует карту модификации стилей.
   */
  initStyleModification() {
    const t = {};
    return q.forEach((e) => {
      t[R(e)] = $(e);
    }), t;
  }
}
class K {
  /**
   * Constructor
   * @param packageName package name / название пакета
   * @param code file content / содержимое файла
   */
  constructor(t, e) {
    c(this, "code");
    this.packageName = t, this.code = e;
  }
  /**
   * Returns the file content.
   *
   * Возвращает содержимое файла.
   */
  get() {
    return this.code;
  }
  /**
   * Returns the style connection code.
   *
   * Возвращает код подключения стиля.
   */
  importStyle() {
    return this.makeImport("style.css"), this;
  }
  /**
   * Creates an import line.
   *
   * Создает строку импорта.
   * @param name file name / имя файла
   */
  makeImport(t) {
    const e = `${this.packageName}/${t}`;
    this.code.includes(e) || (this.code = `import '${e}';${this.code}`);
  }
}
class W {
  /**
   * Constructor
   * @param code file content / содержимое файла
   * @param pluginData plugin data / данные плагина
   */
  constructor(t, e) {
    this.code = t, this.pluginData = e;
  }
  /**
   * Initializes the data.
   *
   * Инициализирует данные.
   */
  make() {
    if (this.code.isVue() && this.pluginData.hasComponent(this.code.getCode())) {
      const t = this.pluginData.getComponents(this.code.getCode());
      if (t && t.length > 0) {
        const e = t.map((i) => this.importComponent(i)).join(`\r
`);
        this.code.addAfterScript(e);
      }
    }
  }
  /**
   * Returns the path to the component.
   *
   * Возвращает путь к компоненту.
   * @param item component data / данные компонента
   */
  getPath(t) {
    return `${this.pluginData.getPackageName()}/${t.name}`;
  }
  /**
   * Generates the import string for a component.
   *
   * Генерирует строку импорта для компонента.
   * @param item component data / данные компонента
   */
  importComponent(t) {
    return `import { ${t.name} } from'${this.getPath(t)}';`;
  }
}
class Y {
  /**
   * Constructor
   * @param code file content / содержимое файла
   * @param data plugin data / данные плагина
   */
  constructor(t, e) {
    this.code = t, this.data = e;
  }
  /**
   * Initialization of the transformation of all style properties.
   *
   * Инициализация преобразования всех свойств стилей.
   */
  make() {
    return this.is() && this.importDesign().makeColors().makeVars().makeProperties(), this;
  }
  /**
   * Checks whether this file needs to be transformed.
   *
   * Проверяет, нужно ли преобразовывать этот файл.
   */
  is() {
    return this.code.isScss() && _(this.code.getCode()) && !this.code.has(this.getIgnoreComment());
  }
  /**
   * Returns the comment for ignoring the file.
   *
   * Возвращает комментарий для игнорирования файла.
   */
  getIgnoreComment() {
    return `// ${this.data.getDesign()}-css-ignore`;
  }
  /**
   * Returns a string for a negative lookahead to exclude lines with a special comment.
   *
   * Возвращает строку для негативного просмотра вперед, чтобы исключить строки со специальным комментарием.
   */
  getPropertiesNone() {
    return `(?![^\r
]*// ${this.data.getDesign()}-mode-none)`;
  }
  /**
   * Returns a regular expression for finding properties that need to be replaced with mixins.
   *
   * Возвращает регулярное выражение для поиска свойств, которые необходимо заменить на миксины.
   */
  getModificationRef() {
    const t = this.data.getStyleModification();
    return new RegExp(
      `(?<=^\\s*)(${Object.keys(t).join("|")}):([^;\r
]+)(;*)${this.getPropertiesNone()}`,
      "igm"
    );
  }
  /**
   * Connects a list of tokens to work with values.
   *
   * Подключает список токенов для работы со значениями.
   */
  importDesign() {
    const t = `${this.data.getPackageName()}/style/ui-properties`, e = `@use '${t}.scss' as *;`;
    return this.code.addStartIfNone(e, t), this;
  }
  /**
   * Removes default values from colors.
   *
   * Удаляет значения по умолчанию у цветов.
   */
  makeColors() {
    const t = new RegExp(`(?<=var\\([^,]+), ?(#[0-9abcdf]{4,6}|rgba?\\([^)]+\\))${this.getPropertiesNone()}`, "ig");
    return this.code.has(t) && this.code.replace(t, ""), this;
  }
  /**
   * Transforms property values under the correct name.
   *
   * Преобразовывает значения свойств под правильным именем.
   */
  makeVars() {
    const t = this.data.getStyleVarsReg();
    return this.code.has(t) && this.code.replace(
      t,
      `${this.data.getDesign()}-$1`
    ), this;
  }
  /**
   * Transformation of all properties into non-standard ones used through mixins.
   *
   * Преобразование всех свойств в нестандартные, используемые через миксины.
   */
  makeProperties() {
    const t = this.data.getStyleModification(), e = this.getModificationRef();
    return this.code.has(e, "im") && this.code.replace(
      e,
      (i, n, s, r) => {
        const o = s.trim();
        return `@include ${t == null ? void 0 : t[n.trim()]}(${o.match(/[()]/) ? `#{${o}}` : o})${r}`;
      }
    ), this;
  }
}
class Z {
  /**
   * Constructor
   * @param design design name / название дизайна
   * @param packageName package name / название пакета
   * @param componentsReg regular expression for finding components / регулярное выражение для поиска компонентов
   * @param styleVarsReg regular expression for finding variables / регулярное выражение для поиска переменных
   * @param componentsList list of components / список компонентов
   * @param name plugin name / название плагина
   * @param options plugin options / настройки плагина
   */
  constructor(t, e, i, n, s, r = "vite-plugin-design-ui", o = {}) {
    c(this, "data");
    c(this, "first", !0);
    c(this, "mode", "production");
    this.design = t, this.packageName = e, this.componentsReg = i, this.styleVarsReg = n, this.componentsList = s, this.name = r, this.options = o, this.data = new H(
      t,
      e,
      i,
      n,
      s
    );
  }
  /**
   * Initializes the plugin.
   *
   * Инициализирует плагин.
   */
  init() {
    var t;
    return {
      name: this.name,
      enforce: "pre",
      apply: (e, i) => (this.mode = i.mode, !0),
      transform: (e, i) => this.transform(e, i),
      ...(t = this.options) == null ? void 0 : t.viteOptions
    };
  }
  /**
   * Checks if components should be processed.
   *
   * Проверяет, нужно ли обрабатывать компоненты.
   */
  isComponents() {
    var t, e;
    return !!((e = (t = this.options) == null ? void 0 : t.component) == null || e);
  }
  /**
   * Checks if styles should be processed.
   *
   * Проверяет, нужно ли обрабатывать стили.
   */
  isStyles() {
    var t, e;
    return !!((e = (t = this.options) == null ? void 0 : t.style) == null || e);
  }
  /**
   * Transforms the code.
   *
   * Преобразовывает код.
   * @param code file content / содержимое файла
   * @param id file identification / идентификация файла
   */
  transform(t, e) {
    this.first && C.isJs(e) && (t = this.initMain(t), this.first = !1);
    const i = new J(e, t);
    return this.makeComponents(i), this.initStyles(i), {
      code: i.get()
    };
  }
  /**
   * Initializes the main file.
   *
   * Инициализирует главный файл.
   * @param code file content / содержимое файла
   */
  initMain(t) {
    const e = new K(this.packageName, t);
    return e.importStyle(), e.get();
  }
  /**
   * Initializes components.
   *
   * Инициализирует компоненты.
   * @param code file content / содержимое файла
   */
  makeComponents(t) {
    return this.isComponents() && new W(t, this.data).make(), this;
  }
  /**
   * Initializes styles.
   *
   * Инициализирует стили.
   * @param code file content / содержимое файла
   */
  initStyles(t) {
    return this.isStyles() && new Y(t, this.data).make(), this;
  }
}
export {
  Z as P,
  J as a,
  W as b,
  H as c,
  K as d,
  Y as e,
  C as f
};
