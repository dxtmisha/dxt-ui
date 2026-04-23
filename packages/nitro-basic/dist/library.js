import { useStorage as e } from "nitro/storage";
import { ApiCache as t, CookieStorage as n, ErrorCenter as r, ServerStorage as i, isObjectNotArray as a } from "@dxtmisha/functional-basic";
//#region src/functions/initApiCache.ts
function o(n = "Ui_ApiCache", i) {
	let a = e(n), o = (e) => `Ui_ApiCache_${e}`;
	t.init(async (e) => {
		try {
			var t;
			return (t = await a.getItem(o(e))) == null ? void 0 : t;
		} catch (e) {
			r.on({
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
			return r.on({
				group: "api",
				code: "cacheSet",
				details: e
			}), !1;
		}
	}, async (e) => {
		try {
			return await a.removeItem(o(e)), !0;
		} catch (e) {
			return r.on({
				group: "api",
				code: "cacheRemove",
				details: e
			}), !1;
		}
	}, i);
}
//#endregion
//#region ../../node_modules/rou3/dist/index.mjs
var s = /* @__PURE__ */ (() => {
	let e = function() {};
	return e.prototype = Object.create(null), Object.freeze(e.prototype), e;
})();
function c(e, t, n, r) {
	return r === n.length ? t(e) : n[r](e, () => c(e, t, n, r + 1));
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/typeof.js
function l(e) {
	"@babel/helpers - typeof";
	return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, l(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/toPrimitive.js
function u(e, t) {
	if (l(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (l(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/toPropertyKey.js
function d(e) {
	var t = u(e, "string");
	return l(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/defineProperty.js
function f(e, t, n) {
	return (t = d(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region ../../node_modules/srvx/dist/adapters/service-worker.mjs
var p = URL;
typeof self < "u" && "skipWaiting" in self;
//#endregion
//#region ../../node_modules/h3/dist/h3-Bz4OPZv_.mjs
var m;
function h(e) {
	return decodeURI(e.includes("%25") ? e.replace(/%25/g, "%2525") : e);
}
var g = "h3.internal.event.", _ = /* @__PURE__ */ Symbol.for(`${g}res`), v = /* @__PURE__ */ Symbol.for(`${g}res.headers`), y = /* @__PURE__ */ Symbol.for(`${g}res.err.headers`);
m = class {
	constructor(e, t, n) {
		f(this, "app", void 0), f(this, "req", void 0), f(this, "url", void 0), f(this, "context", void 0), this.context = t || e.context || new s(), this.req = e, this.app = n;
		let r = e._url, i = r && r instanceof URL ? r : new p(e.url);
		i.pathname.includes("%") && (i.pathname = h(i.pathname)), this.url = i;
	}
	get res() {
		return this[_] || (this[_] = new b());
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
}, f(m, "__is_event__", !0);
var b = class {
	constructor() {
		f(this, "status", void 0), f(this, "statusText", void 0);
	}
	get headers() {
		return this[v] || (this[v] = new Headers());
	}
	get errHeaders() {
		return this[y] || (this[y] = new Headers());
	}
}, x = 3456e4;
function S(e, t, n) {
	let r = e.indexOf(";", t);
	return r === -1 ? n : r;
}
function C(e, t, n) {
	let r = e.indexOf("=", t);
	return r < n ? r : -1;
}
function w(e, t, n) {
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
var T = /* @__PURE__ */ (() => {
	let e = function() {};
	return e.prototype = Object.create(null), e;
})();
function E(e, t) {
	let n = new T(), r = e.length;
	if (r < 2) return n;
	let i = (t == null ? void 0 : t.decode) || D, a = (t == null ? void 0 : t.allowMultiple) || !1, o = 0;
	do {
		let s = C(e, o, r);
		if (s === -1) break;
		let c = S(e, o, r);
		if (s > c) {
			o = e.lastIndexOf(";", s - 1) + 1;
			continue;
		}
		let l = w(e, o, s);
		if (t != null && t.filter && !t.filter(l)) {
			o = c + 1;
			continue;
		}
		let u = i(w(e, s + 1, c));
		if (a) {
			let e = n[l];
			e === void 0 ? n[l] = u : Array.isArray(e) ? e.push(u) : n[l] = [e, u];
		} else n[l] === void 0 && (n[l] = u);
		o = c + 1;
	} while (o < r);
	return n;
}
function D(e) {
	if (!e.includes("%")) return e;
	try {
		return decodeURIComponent(e);
	} catch (t) {
		return e;
	}
}
var O = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, k = /^[\u0021-\u003A\u003C-\u007E]*$/, A = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, j = /^[\u0020-\u003A\u003C-\u007E]*$/, M = Object.prototype.toString;
function N(e, t, n) {
	let r = typeof e == "object" && !!e, i = r ? t : n, a = (i == null ? void 0 : i.stringify) || JSON.stringify, o = r ? e : {
		...n,
		name: e,
		value: t == null ? "" : typeof t == "string" ? t : a(t)
	}, s = (i == null ? void 0 : i.encode) || encodeURIComponent;
	if (!O.test(o.name)) throw TypeError(`argument name is invalid: ${o.name}`);
	let c = o.value ? s(o.value) : "";
	if (!k.test(c)) throw TypeError(`argument val is invalid: ${o.value}`);
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
		l += "; Max-Age=" + Math.max(0, Math.min(o.maxAge, x));
	}
	if (o.domain) {
		if (!A.test(o.domain)) throw TypeError(`option domain is invalid: ${o.domain}`);
		l += "; Domain=" + o.domain;
	}
	if (o.path) {
		if (!j.test(o.path)) throw TypeError(`option path is invalid: ${o.path}`);
		l += "; Path=" + o.path;
	}
	if (o.expires) {
		if (!P(o.expires) || !Number.isFinite(o.expires.valueOf())) throw TypeError(`option expires is invalid: ${o.expires}`);
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
function P(e) {
	return M.call(e) === "[object Date]";
}
var F = /^-?\d+$/, I = /* @__PURE__ */ Object.getPrototypeOf({});
function L(e, t) {
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
	let a = i === -1 ? "" : R(e, 0, i);
	if (a && a in I) return;
	let o = i === -1 ? R(e, 0, r) : R(e, i + 1, r);
	if (!a && !o || a.length + o.length > 4096) return;
	(t == null ? void 0 : t.decode) !== !1 && (o = z(o, t == null ? void 0 : t.decode));
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
		let i = r === -1 ? R(e, c, t) : R(e, c, r), a = r === -1 ? void 0 : R(e, r + 1, t);
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
				a && F.test(a) && (s.maxAge = Math.min(Number(a), x));
				break;
			case "expires": {
				if (!a) break;
				let e = new Date(a);
				if (Number.isFinite(e.valueOf())) {
					let t = new Date(Date.now() + x * 1e3);
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
				e && !(e in I) && (s[e] = a);
			}
		}
		c = t + 1;
	}
	return s;
}
function R(e, t, n) {
	if (t === n) return "";
	let r = t, i = n;
	for (; r < i && (e.charCodeAt(r) === 32 || e.charCodeAt(r) === 9);) r++;
	for (; i > r && (e.charCodeAt(i - 1) === 32 || e.charCodeAt(i - 1) === 9);) i--;
	return e.slice(r, i);
}
function z(e, t) {
	if (!t && !e.includes("%")) return e;
	try {
		return (t || decodeURIComponent)(e);
	} catch (t) {
		return e;
	}
}
function B(e) {
	return E(e.req.headers.get("cookie") || "");
}
function V(e, t) {
	return B(e)[t];
}
function H(e, t, n, r) {
	let i = N({
		name: t,
		value: n,
		path: "/",
		...r
	}), a = e.res.headers.getSetCookie();
	if (a.length === 0) {
		e.res.headers.set("set-cookie", i);
		return;
	}
	let o = U(t, r || {});
	e.res.headers.delete("set-cookie");
	for (let t of a) {
		var s;
		let n = L(t);
		n && U((s = t.split("=")) == null ? void 0 : s[0], n) !== o && e.res.headers.append("set-cookie", t);
	}
	e.res.headers.append("set-cookie", i);
}
function U(e, t) {
	return [
		e,
		t.domain || "",
		t.path || "/"
	].join(";");
}
//#endregion
//#region src/functions/initCookieStorage.ts
function W(e, t = 10080 * 60, r = "strict") {
	n.init((t) => V(e, t), (n, i, o) => {
		var s, c;
		let l = {
			maxAge: (s = o == null ? void 0 : o.age) == null ? t : s,
			sameSite: (c = o == null ? void 0 : o.sameSite) == null ? r : c
		};
		o != null && o.arguments && a(o == null ? void 0 : o.arguments) && Object.assign(l, o == null ? void 0 : o.arguments), H(e, n, i, l);
	});
}
//#endregion
//#region src/functions/initBasic.ts
function G(e, t = {}) {
	e.hooks.hook("request", (e) => {
		var n, r, i, a;
		o((n = t.api) == null ? void 0 : n.cacheStorageKey, (r = t.api) == null ? void 0 : r.cacheStepAgeClearOld), W(e, (i = t.cookie) == null ? void 0 : i.age, (a = t.cookie) == null ? void 0 : a.sameSite);
	});
}
//#endregion
//#region src/functions/initServerStorage.ts
function K(e) {
	i.init(() => {
		try {
			return e().context;
		} catch (e) {
			return {};
		}
	});
}
//#endregion
export { o as initApiCache, G as initBasic, W as initCookieStorage, K as initServerStorage };
