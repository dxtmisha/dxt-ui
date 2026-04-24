import { t as e } from "./nitroAppTypes-BlLQoRNM.js";
import { useStorage as t } from "nitro/storage";
import { ApiCache as n, CookieStorage as r, ErrorCenter as i, isObjectNotArray as a } from "@dxtmisha/functional-basic";
//#region src/functions/initApiCache.ts
function o(e = "Ui_ApiCache", r) {
	let a = t(e), o = (e) => `Ui_ApiCache_${e}`;
	n.init(async (e) => {
		try {
			var t;
			return (t = await a.getItem(o(e))) == null ? void 0 : t;
		} catch (e) {
			i.on({
				group: "api",
				code: "cacheGet",
				details: e
			});
			return;
		}
	}, async (e, t) => {
		try {
			return await a.setItem(o(e), t), !0;
		} catch (e) {
			return i.on({
				group: "api",
				code: "cacheSet",
				details: e
			}), !1;
		}
	}, async (e) => {
		try {
			return await a.removeItem(o(e)), !0;
		} catch (e) {
			return i.on({
				group: "api",
				code: "cacheRemove",
				details: e
			}), !1;
		}
	}, r);
}
//#endregion
//#region src/functions/initBasic.ts
function s(e, t = {}) {
	var n, r;
	o((n = t.api) == null ? void 0 : n.cacheStorageKey, (r = t.api) == null ? void 0 : r.cacheStepAgeClearOld);
}
//#endregion
//#region ../../node_modules/rou3/dist/index.mjs
var c = /* @__PURE__ */ (() => {
	let e = function() {};
	return e.prototype = Object.create(null), Object.freeze(e.prototype), e;
})();
function l(e, t, n, r) {
	return r === n.length ? t(e) : n[r](e, () => l(e, t, n, r + 1));
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/typeof.js
function u(e) {
	"@babel/helpers - typeof";
	return u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, u(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/toPrimitive.js
function d(e, t) {
	if (u(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (u(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/toPropertyKey.js
function f(e) {
	var t = d(e, "string");
	return u(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/defineProperty.js
function p(e, t, n) {
	return (t = f(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region ../../node_modules/srvx/dist/adapters/service-worker.mjs
var m = URL;
typeof self < "u" && "skipWaiting" in self;
//#endregion
//#region ../../node_modules/h3/dist/h3-Bz4OPZv_.mjs
var h;
function g(e) {
	return decodeURI(e.includes("%25") ? e.replace(/%25/g, "%2525") : e);
}
var _ = "h3.internal.event.", v = /* @__PURE__ */ Symbol.for(`${_}res`), y = /* @__PURE__ */ Symbol.for(`${_}res.headers`), b = /* @__PURE__ */ Symbol.for(`${_}res.err.headers`);
h = class {
	constructor(e, t, n) {
		p(this, "app", void 0), p(this, "req", void 0), p(this, "url", void 0), p(this, "context", void 0), this.context = t || e.context || new c(), this.req = e, this.app = n;
		let r = e._url, i = r && r instanceof URL ? r : new m(e.url);
		i.pathname.includes("%") && (i.pathname = g(i.pathname)), this.url = i;
	}
	get res() {
		return this[v] || (this[v] = new x());
	}
	get runtime() {
		return this.req.runtime;
	}
	waitUntil(e) {
		var t, n;
		(t = (n = this.req).waitUntil) == null || t.call(n, e);
	}
	toString() {
		return `[${this.req.method}] ${this.req.url}`;
	}
	toJSON() {
		return this.toString();
	}
	get node() {
		var e;
		return (e = this.req.runtime) == null ? void 0 : e.node;
	}
	get headers() {
		return this.req.headers;
	}
	get path() {
		return this.url.pathname + this.url.search;
	}
	get method() {
		return this.req.method;
	}
}, p(h, "__is_event__", !0);
var x = class {
	constructor() {
		p(this, "status", void 0), p(this, "statusText", void 0);
	}
	get headers() {
		return this[y] || (this[y] = new Headers());
	}
	get errHeaders() {
		return this[b] || (this[b] = new Headers());
	}
}, S = 3456e4;
function C(e, t, n) {
	let r = e.indexOf(";", t);
	return r === -1 ? n : r;
}
function w(e, t, n) {
	let r = e.indexOf("=", t);
	return r < n ? r : -1;
}
function T(e, t, n) {
	if (t === n) return "";
	let r = t, i = n;
	do {
		let t = e.charCodeAt(r);
		if (t !== 32 && t !== 9) break;
	} while (++r < i);
	for (; i > r;) {
		let t = e.charCodeAt(i - 1);
		if (t !== 32 && t !== 9) break;
		i--;
	}
	return e.slice(r, i);
}
var E = /* @__PURE__ */ (() => {
	let e = function() {};
	return e.prototype = Object.create(null), e;
})();
function D(e, t) {
	let n = new E(), r = e.length;
	if (r < 2) return n;
	let i = (t == null ? void 0 : t.decode) || O, a = (t == null ? void 0 : t.allowMultiple) || !1, o = 0;
	do {
		let s = w(e, o, r);
		if (s === -1) break;
		let c = C(e, o, r);
		if (s > c) {
			o = e.lastIndexOf(";", s - 1) + 1;
			continue;
		}
		let l = T(e, o, s);
		if (t != null && t.filter && !t.filter(l)) {
			o = c + 1;
			continue;
		}
		let u = i(T(e, s + 1, c));
		if (a) {
			let e = n[l];
			e === void 0 ? n[l] = u : Array.isArray(e) ? e.push(u) : n[l] = [e, u];
		} else n[l] === void 0 && (n[l] = u);
		o = c + 1;
	} while (o < r);
	return n;
}
function O(e) {
	if (!e.includes("%")) return e;
	try {
		return decodeURIComponent(e);
	} catch (t) {
		return e;
	}
}
var k = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, A = /^[\u0021-\u003A\u003C-\u007E]*$/, j = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, M = /^[\u0020-\u003A\u003C-\u007E]*$/, N = Object.prototype.toString;
function P(e, t, n) {
	let r = typeof e == "object" && !!e, i = r ? t : n, a = (i == null ? void 0 : i.stringify) || JSON.stringify, o = r ? e : {
		...n,
		name: e,
		value: t == null ? "" : typeof t == "string" ? t : a(t)
	}, s = (i == null ? void 0 : i.encode) || encodeURIComponent;
	if (!k.test(o.name)) throw TypeError(`argument name is invalid: ${o.name}`);
	let c = o.value ? s(o.value) : "";
	if (!A.test(c)) throw TypeError(`argument val is invalid: ${o.value}`);
	if (!o.secure) {
		if (o.partitioned) throw TypeError("Partitioned cookies must have the Secure attribute");
		if (o.sameSite && String(o.sameSite).toLowerCase() === "none") throw TypeError("SameSite=None cookies must have the Secure attribute");
		if (o.name.length > 9 && o.name.charCodeAt(0) === 95 && o.name.charCodeAt(1) === 95) {
			let e = o.name.toLowerCase();
			if (e.startsWith("__secure-") || e.startsWith("__host-")) throw TypeError(`${o.name} cookies must have the Secure attribute`);
		}
	}
	if (o.name.length > 7 && o.name.charCodeAt(0) === 95 && o.name.charCodeAt(1) === 95 && o.name.toLowerCase().startsWith("__host-")) {
		if (o.path !== "/") throw TypeError("__Host- cookies must have Path=/");
		if (o.domain) throw TypeError("__Host- cookies must not have a Domain attribute");
	}
	let l = o.name + "=" + c;
	if (o.maxAge !== void 0) {
		if (!Number.isInteger(o.maxAge)) throw TypeError(`option maxAge is invalid: ${o.maxAge}`);
		l += "; Max-Age=" + Math.max(0, Math.min(o.maxAge, S));
	}
	if (o.domain) {
		if (!j.test(o.domain)) throw TypeError(`option domain is invalid: ${o.domain}`);
		l += "; Domain=" + o.domain;
	}
	if (o.path) {
		if (!M.test(o.path)) throw TypeError(`option path is invalid: ${o.path}`);
		l += "; Path=" + o.path;
	}
	if (o.expires) {
		if (!F(o.expires) || !Number.isFinite(o.expires.valueOf())) throw TypeError(`option expires is invalid: ${o.expires}`);
		l += "; Expires=" + o.expires.toUTCString();
	}
	if (o.httpOnly && (l += "; HttpOnly"), o.secure && (l += "; Secure"), o.partitioned && (l += "; Partitioned"), o.priority) switch (typeof o.priority == "string" ? o.priority.toLowerCase() : void 0) {
		case "low":
			l += "; Priority=Low";
			break;
		case "medium":
			l += "; Priority=Medium";
			break;
		case "high":
			l += "; Priority=High";
			break;
		default: throw TypeError(`option priority is invalid: ${o.priority}`);
	}
	if (o.sameSite) switch (typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite) {
		case !0:
		case "strict":
			l += "; SameSite=Strict";
			break;
		case "lax":
			l += "; SameSite=Lax";
			break;
		case "none":
			l += "; SameSite=None";
			break;
		default: throw TypeError(`option sameSite is invalid: ${o.sameSite}`);
	}
	return l;
}
function F(e) {
	return N.call(e) === "[object Date]";
}
var I = /^-?\d+$/, L = /* @__PURE__ */ Object.getPrototypeOf({});
function R(e, t) {
	let n = e.length, r = n, i = -1;
	for (let t = 0; t < n; t++) {
		let n = e.charCodeAt(t);
		if (n === 59) {
			r = t;
			break;
		}
		n === 61 && i === -1 && (i = t);
	}
	i >= r && (i = -1);
	let a = i === -1 ? "" : z(e, 0, i);
	if (a && a in L) return;
	let o = i === -1 ? z(e, 0, r) : z(e, i + 1, r);
	if (!a && !o || a.length + o.length > 4096) return;
	(t == null ? void 0 : t.decode) !== !1 && (o = B(o, t == null ? void 0 : t.decode));
	let s = {
		name: a,
		value: o
	}, c = r + 1;
	for (; c < n;) {
		let t = n, r = -1;
		for (let i = c; i < n; i++) {
			let n = e.charCodeAt(i);
			if (n === 59) {
				t = i;
				break;
			}
			n === 61 && r === -1 && (r = i);
		}
		r >= t && (r = -1);
		let i = r === -1 ? z(e, c, t) : z(e, c, r), a = r === -1 ? void 0 : z(e, r + 1, t);
		if (a === void 0 || a.length <= 1024) switch (i.toLowerCase()) {
			case "httponly":
				s.httpOnly = !0;
				break;
			case "secure":
				s.secure = !0;
				break;
			case "partitioned":
				s.partitioned = !0;
				break;
			case "domain":
				a && (s.domain = (a.charCodeAt(0) === 46 ? a.slice(1) : a).toLowerCase());
				break;
			case "path":
				s.path = a;
				break;
			case "max-age":
				a && I.test(a) && (s.maxAge = Math.min(Number(a), S));
				break;
			case "expires": {
				if (!a) break;
				let e = new Date(a);
				if (Number.isFinite(e.valueOf())) {
					let t = new Date(Date.now() + S * 1e3);
					s.expires = e > t ? t : e;
				}
				break;
			}
			case "priority": {
				if (!a) break;
				let e = a.toLowerCase();
				(e === "low" || e === "medium" || e === "high") && (s.priority = e);
				break;
			}
			case "samesite": {
				if (!a) break;
				let e = a.toLowerCase();
				e === "lax" || e === "strict" || e === "none" ? s.sameSite = e : s.sameSite = "lax";
				break;
			}
			default: {
				let e = i.toLowerCase();
				e && !(e in L) && (s[e] = a);
			}
		}
		c = t + 1;
	}
	return s;
}
function z(e, t, n) {
	if (t === n) return "";
	let r = t, i = n;
	for (; r < i && (e.charCodeAt(r) === 32 || e.charCodeAt(r) === 9);) r++;
	for (; i > r && (e.charCodeAt(i - 1) === 32 || e.charCodeAt(i - 1) === 9);) i--;
	return e.slice(r, i);
}
function B(e, t) {
	if (!t && !e.includes("%")) return e;
	try {
		return (t || decodeURIComponent)(e);
	} catch (t) {
		return e;
	}
}
function V(e) {
	return D(e.req.headers.get("cookie") || "");
}
function H(e, t) {
	return V(e)[t];
}
function U(e, t, n, r) {
	let i = P({
		name: t,
		value: n,
		path: "/",
		...r
	}), a = e.res.headers.getSetCookie();
	if (a.length === 0) {
		e.res.headers.set("set-cookie", i);
		return;
	}
	let o = W(t, r || {});
	e.res.headers.delete("set-cookie");
	for (let t of a) {
		var s;
		let n = R(t);
		n && W((s = t.split("=")) == null ? void 0 : s[0], n) !== o && e.res.headers.append("set-cookie", t);
	}
	e.res.headers.append("set-cookie", i);
}
function W(e, t) {
	return [
		e,
		t.domain || "",
		t.path || "/"
	].join(";");
}
//#endregion
//#region src/functions/initCookieStorage.ts
function G(e, t = 10080 * 60, n = "strict") {
	r.init((t) => H(e, t), (r, i, o) => {
		var s, c;
		let l = {
			maxAge: (s = o == null ? void 0 : o.age) == null ? t : s,
			sameSite: (c = o == null ? void 0 : o.sameSite) == null ? n : c
		};
		o != null && o.arguments && a(o == null ? void 0 : o.arguments) && Object.assign(l, o == null ? void 0 : o.arguments), U(e, r, i, l);
	});
}
//#endregion
export { e as NITRO_APP_STORAGE, o as initApiCache, s as initBasic, G as initCookieStorage };
