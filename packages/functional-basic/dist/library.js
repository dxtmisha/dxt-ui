import { geo as e } from "@dxtmisha/media";
//#region src/functions/isObject.ts
function t(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region src/functions/isObjectNotArray.ts
function n(e) {
	return t(e) && !Array.isArray(e);
}
//#endregion
//#region src/functions/forEach.ts
function r(e, n, r) {
	if (t(e)) {
		let t = [], i = (e, i, a) => {
			let o = n(e, i, a);
			(r || o !== void 0) && t.push(o);
		};
		if (Array.isArray(e)) e.forEach((t, n) => i(t, n, e));
		else if (e instanceof Map) e.forEach((t, n) => i(t, n, e));
		else if (e instanceof Set) e.forEach((t) => i(t, t, e));
		else for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && i(e[t], t, e);
		return t;
	}
	return [];
}
//#endregion
//#region src/functions/isArray.ts
function i(e) {
	return Array.isArray(e);
}
//#endregion
//#region src/functions/toString.ts
function a(e) {
	return String(e == null ? "" : e);
}
//#endregion
//#region src/functions/getRequestString.ts
function o(e, n = "=", s = "&", c) {
	return r(e, (r, l) => {
		let u = encodeURIComponent(a(l).trim());
		if (u !== "") {
			let l = c ? `${c}[${i(e) ? "" : u}]` : u;
			return t(r) ? o(r, n, s, l) : `${l}${n}${encodeURIComponent(a(r))}`;
		}
	}).sort().join(s);
}
//#endregion
//#region src/functions/isNull.ts
function s(e) {
	return e == null;
}
//#endregion
//#region src/functions/isFilled.ts
function c(e, t) {
	if (e) {
		if (t && e === "0") return !0;
		switch (typeof e) {
			case "function":
			case "symbol": return !0;
			case "object": return Array.isArray(e) ? e.length > 0 : e instanceof RegExp ? !0 : e instanceof Map || e instanceof Set ? e.size > 0 : Object.values(e).some((e) => !s(e));
			case "string": return ![
				"",
				"undefined",
				"null",
				"0",
				"false",
				"[]"
			].includes(e.trim());
			default: return !!e;
		}
	}
	return !1;
}
//#endregion
//#region src/functions/isOnLine.ts
function l() {
	return typeof navigator > "u" || navigator.onLine;
}
//#endregion
//#region src/functions/isString.ts
function u(e) {
	return typeof e == "string";
}
//#endregion
//#region src/functions/random.ts
function d(e, t) {
	return Math.floor(Math.random() * (t - e + 1) + e);
}
//#endregion
//#region src/functions/sleep.ts
function f(e) {
	return new Promise((t) => setTimeout(t, e));
}
//#endregion
//#region src/functions/isDomRuntime.ts
function p() {
	return typeof window < "u" && !!window.document;
}
//#endregion
//#region src/functions/isNumber.ts
var m = /^[-]?[0-9]+(\.[0-9]+)?$/;
function h(e) {
	switch (typeof e) {
		case "number": return Number.isFinite(e);
		case "bigint": return !0;
		case "string": return m.test(e.trim());
		default: return !1;
	}
}
//#endregion
//#region src/functions/toNumber.ts
var g = /[^-+\d., ]+/g, ee = /( [0-9]{3}[ ,.]|[0-9] [0-9])/, te = / /g, ne = /,/g, re = /,[0-9]{3}[,.]/, ie = /[.][0-9]{3}[,.]/, ae = /[.]/g;
function _(e) {
	if (typeof e == "number") return Number.isFinite(e) && e || 0;
	if (!e) return 0;
	let t = e.replace(g, "");
	return t = ee.test(t) ? t.replace(te, "").replace(ne, ".") : re.test(t) ? t.replace(ne, "") : ie.test(t) ? t.replace(ae, "").replace(ne, ".") : t.replace(ne, "."), parseFloat(t) || 0;
}
//#endregion
//#region src/functions/isSelected.ts
function v(e, t) {
	return s(e) ? !1 : Array.isArray(t) ? t.includes(e) : h(e) && h(t) ? _(e) === _(t) : e === t;
}
//#endregion
//#region src/functions/isFunction.ts
function y(e) {
	return e instanceof Function || typeof e == "function";
}
//#endregion
//#region src/functions/executeFunction.ts
function b(e, ...t) {
	return y(e) ? e(...t) : e;
}
//#endregion
//#region src/functions/isDomData.ts
function oe() {
	return location.href.startsWith("data:");
}
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/typeof.js
function x(e) {
	"@babel/helpers - typeof";
	return x = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, x(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/toPrimitive.js
function se(e, t) {
	if (x(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (x(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/toPropertyKey.js
function ce(e) {
	var t = se(e, "string");
	return x(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/defineProperty.js
function S(e, t, n) {
	return (t = ce(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/ErrorCenterHandler.ts
var le = class {
	constructor(e) {
		S(this, "handlers", []), e && this.addList(e);
	}
	has(e) {
		return !!this.get(e);
	}
	get(e) {
		return this.handlers.find((t) => t.group === e);
	}
	add(e, t) {
		let n = this.get(e);
		return n ? n.handlers.push(t) : this.handlers.push({
			group: e,
			handlers: [t]
		}), this;
	}
	addList(e) {
		return e.forEach((e) => e.handlers.forEach((t) => this.add(e.group, t))), this;
	}
	on(e) {
		var t;
		let n = (t = this.get(e.group)) == null ? this.get(void 0) : t;
		return n && n.handlers.forEach((t) => t(e)), this.toConsole(e), this;
	}
	toConsole(e) {
		return console.error(`Error Center: ${e.code}`), console.error(e.message), this;
	}
}, ue = class {
	constructor(e, t = new le()) {
		S(this, "causes", []), this.handler = t, e && this.addList(e);
	}
	has(e, t) {
		return !!this.get(e, t);
	}
	get(e, t) {
		return this.causes.find((n) => n.group === t && n.code === e);
	}
	add(e) {
		return this.causes.unshift(e), this;
	}
	addList(e) {
		return this.causes.unshift(...e), this;
	}
	addHandler(e, t) {
		return this.handler.add(e, t), this;
	}
	addHandlerList(e) {
		return this.handler.addList(e), this;
	}
	on(e) {
		return this.handler.on(this.assign(e)), this;
	}
	assign(e) {
		let t = this.get(e.code, e.group);
		if (t) {
			var n, r;
			return ((n = t.priority) == null ? 500 : n) > ((r = e.priority) == null ? 500 : r) ? {
				...e,
				...t
			} : {
				...t,
				...e
			};
		}
		return e;
	}
}, de = [
	{
		group: "api",
		code: "cacheClear",
		label: "Cache Clearing Error",
		message: "An error occurred during background cache cleaning."
	},
	{
		group: "api",
		code: "forbidden",
		label: "Forbidden",
		message: "You do not have the necessary permissions to access this resource."
	},
	{
		group: "api",
		code: "notFound",
		label: "Resource Not Found",
		message: "The requested resource could not be found on the server."
	},
	{
		group: "api",
		code: "offline",
		label: "No Internet Connection",
		message: "Your device is currently offline. Please check your network settings."
	},
	{
		group: "api",
		code: "server",
		label: "Internal Server Error",
		message: "Something went wrong on our end. We are working to fix it."
	},
	{
		group: "api",
		code: "timeout",
		label: "Request Timeout",
		message: "The request took too long to complete. Please check your connection."
	},
	{
		group: "api",
		code: "unauthorized",
		label: "Unauthorized access",
		message: "Your session has expired or you do not have permission to access this resource."
	},
	{
		group: "api",
		code: "unknown",
		label: "Unknown Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "broadcast",
		code: "error",
		label: "Broadcast Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "hydration",
		code: "error",
		label: "Hydration Error",
		message: "An error occurred during data hydration."
	},
	{
		group: "intl",
		code: "datetime",
		label: "Intl Datetime Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "intl",
		code: "display",
		label: "Intl Display Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "intl",
		code: "number",
		label: "Intl Number Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "intl",
		code: "plural",
		label: "Intl Plural Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "intl",
		code: "relative",
		label: "Intl Relative Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "share",
		code: "error",
		label: "Share Error",
		message: "An unexpected error occurred during sharing."
	},
	{
		group: "storage",
		code: "context",
		label: "Context Missing Error",
		message: "Storage context is missing (is init() called?). Isolation failed: data will not be saved for this request."
	},
	{
		group: "storage",
		code: "error",
		label: "Storage Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "transformation",
		code: "error",
		label: "Transformation Error",
		message: "An error occurred during data transformation."
	}
], C = class {
	static getItem() {
		return this.item;
	}
	static has(e, t) {
		return this.getItem().has(e, t);
	}
	static get(e, t) {
		return this.getItem().get(e, t);
	}
	static add(e) {
		this.getItem().add(e);
	}
	static addList(e) {
		this.getItem().addList(e);
	}
	static addHandler(e, t) {
		this.getItem().addHandler(e, t);
	}
	static addHandlerList(e) {
		this.getItem().addHandlerList(e);
	}
	static on(e) {
		this.getItem().on(e);
	}
};
S(C, "item", new ue(de));
//#endregion
//#region src/functions/getElementSafeScript.ts
function fe(e, t) {
	return `<script id="${e.replace(/"/g, "&quot;")}" type="application/json">${JSON.stringify(t).replace(/<\/(script)>/gi, "<\\/$1>")}<\/script>`;
}
//#endregion
//#region src/functions/getHydrationData.ts
function pe(e, t, n = !0) {
	if (typeof document < "u") {
		let t = document.getElementById(e);
		if (t) try {
			let e = JSON.parse(t.textContent || "");
			return n && t.remove(), e;
		} catch (t) {
			C.on({
				group: "hydration",
				code: "error",
				details: {
					id: e,
					error: t
				}
			});
		}
	}
	return t;
}
//#endregion
//#region src/classes/ServerStorage.ts
var me = "__dxt_server_storage__", he = "__ui:server:storage:id__", w = class {
	static init(e) {
		return this.listener || (this.listener = e), this;
	}
	static reset() {
		this.storage = void 0, this.listener = void 0;
	}
	static has(e) {
		return e in this.getStorage();
	}
	static get(e, t, n = !1) {
		let r = this.getStorage();
		if (e in r) return r[e].value;
		if (t) return this.set(e, t, n);
	}
	static set(e, t, n = !1) {
		let r = this.getStorage(), i = t();
		return r[e] = {
			value: i,
			hydration: n
		}, i;
	}
	static toString() {
		return fe(he, this.getDataForHydration());
	}
	static getStorage() {
		var e;
		if (p()) return this.getStorageDom();
		let t = (e = this.listener) == null ? void 0 : e.call(this);
		return t ? (me in t || (t[me] = {}), t[me]) : (C.on({
			group: "storage",
			code: "context"
		}), this.storage || (this.storage = {}), this.storage);
	}
	static getStorageDom() {
		if (!this.storage) {
			let e = pe(he, {});
			this.storage = {}, r(e, (e, t) => {
				this.storage[t] = {
					value: e,
					hydration: !0
				};
			});
		}
		return this.storage;
	}
	static getDataForHydration() {
		let e = this.getStorage(), t = {};
		return r(e, (e, n) => {
			e.hydration && (t[n] = e.value);
		}), t;
	}
};
S(w, "storage", void 0), S(w, "listener", void 0);
//#endregion
//#region src/classes/DataStorage.ts
var ge = "ui-storage", _e = () => w.get("__dxt_data_storage__", () => ({})), T = class {
	static setPrefix(e) {
		ge = e;
	}
	constructor(e, t = !1, n = C.getItem()) {
		S(this, "value", void 0), S(this, "age", void 0), this.name = e, this.isSession = t, this.errorCenter = n;
		let r = `${t ? "session" : "storage"}#${e}`, i = _e();
		if (r in i) return i[r];
		this.make(), i[r] = this;
	}
	get(e, t) {
		if (!s(this.value) && this.isCache(t)) return this.value;
		if (e !== void 0) return this.set(e);
	}
	set(e) {
		if (this.value = b(e), this.age = Date.now(), this.value === void 0) this.remove();
		else {
			var t;
			(t = this.getMethod()) == null || t.setItem(this.getIndex(), JSON.stringify({
				value: this.value,
				age: this.age
			}));
		}
		return this.value;
	}
	remove() {
		var e;
		return this.value = void 0, this.age = void 0, (e = this.getMethod()) == null || e.removeItem(this.getIndex()), this;
	}
	update() {
		return this.make(), this;
	}
	isCache(e) {
		return s(e) || this.age && this.age + e * 1e3 >= Date.now();
	}
	getMethod() {
		if (p() && !oe()) {
			var e, t;
			let n = this.isSession ? (e = window) == null ? void 0 : e.sessionStorage : (t = window) == null ? void 0 : t.localStorage;
			if (n) return n;
		}
	}
	getIndex() {
		return `${ge}__${this.name}`;
	}
	getValue() {
		var e;
		let t = (e = this.getMethod()) == null ? void 0 : e.getItem(this.getIndex());
		if (t) try {
			return JSON.parse(t);
		} catch (e) {
			this.errorCenter.on({
				group: "storage",
				code: "error",
				details: e
			});
		}
	}
	make() {
		let e = this.getValue();
		return e ? (this.value = e.value, this.age = e.age) : (this.value = void 0, this.age = void 0), this;
	}
}, ve = "geo-code", ye = class {
	constructor() {
		S(this, "storage", new T(ve)), S(this, "location", void 0), S(this, "item", void 0), S(this, "language", void 0), S(this, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), this.location = this.findLocation(), this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location);
	}
	get() {
		return this.item;
	}
	getCountry() {
		return this.item.country;
	}
	getLanguage() {
		return this.language;
	}
	getStandard() {
		return this.getItem().standard;
	}
	getFirstDay() {
		return this.item.firstDay;
	}
	getLocation() {
		return this.location;
	}
	getItem() {
		return {
			...this.item,
			language: this.language,
			standard: `${this.language}-${this.item.country}`
		};
	}
	getList() {
		return e;
	}
	getByCode(e) {
		var t;
		let n;
		return e && (/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/.test(e) && (n = this.getByCodeFull(e)), !n && /[a-z]{2}/.test(e) && (n = this.getByLanguage(this.toLanguage(e))), !n && /[A-Z]{2}/.test(e) && (n = this.getByCountry(this.toCountry(e)))), this.toFull((t = n) == null ? this.getList()[0] : t);
	}
	getByCodeFull(e) {
		return this.getList().find((t) => v(e, [`${t.language}-${t.country}`, `${t.country}-${t.language}`]));
	}
	getByCountry(e) {
		return this.getList().find((t) => {
			var n;
			return t.country === e || (t == null || (n = t.countryAlternative) == null ? void 0 : n.find((t) => t === e));
		});
	}
	getByLanguage(e) {
		return this.getList().find((t) => {
			var n;
			return t.language === e || (t == null || (n = t.languageAlternative) == null ? void 0 : n.find((t) => t === e));
		});
	}
	getTimezone() {
		return this.timezone;
	}
	getTimezoneFormat() {
		let e = Math.abs(Math.trunc(this.timezone / 60)).toString().padStart(2, "0"), t = Math.abs(this.timezone % 60).toString().padStart(2, "0");
		return this.timezone >= 0 ? `-${e}:${t}` : `+${e}:${t}`;
	}
	find(e) {
		return this.getByCode(e);
	}
	toStandard(e) {
		return `${e.language}-${e.country}`;
	}
	set(e, t) {
		this.location = e, this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location), t && this.storage.set(this.location);
	}
	setTimezone(e) {
		this.timezone = e;
	}
	findLocation() {
		var e;
		return p() && (this.storage.get() || ((e = document.querySelector("html")) == null ? void 0 : e.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
	}
	findLanguage(e) {
		return e && /[a-z]{2}/.test(e) ? this.toLanguage(e) : this.item.language;
	}
	toCountry(e) {
		return e.replace(/[^A-Z]+/g, "");
	}
	toLanguage(e) {
		return e.replace(/[^a-z]+/g, "");
	}
	toFull(e) {
		return {
			...e,
			standard: this.toStandard(e),
			firstDay: (e == null ? void 0 : e.firstDay) || "Mo"
		};
	}
}, E = class {
	static getItem() {
		return w.get("__dxt_geo_instance__", () => new ye());
	}
	static get() {
		return this.getItem().get();
	}
	static getCountry() {
		return this.getItem().getCountry();
	}
	static getLanguage() {
		return this.getItem().getLanguage();
	}
	static getStandard() {
		return this.getItem().getStandard();
	}
	static getFirstDay() {
		return this.getItem().getFirstDay();
	}
	static getLocation() {
		return this.getItem().getLocation();
	}
	static getItemFull() {
		return this.getItem().getItem();
	}
	static getList() {
		return this.getItem().getList();
	}
	static getByCode(e) {
		return this.getItem().getByCode(e);
	}
	static getByCodeFull(e) {
		return this.getItem().getByCodeFull(e);
	}
	static getByCountry(e) {
		return this.getItem().getByCountry(e);
	}
	static getByLanguage(e) {
		return this.getItem().getByLanguage(e);
	}
	static getTimezone() {
		return this.getItem().getTimezone();
	}
	static getTimezoneFormat() {
		return this.getItem().getTimezoneFormat();
	}
	static find(e) {
		return this.getItem().find(e);
	}
	static toStandard(e) {
		return this.getItem().toStandard(e);
	}
	static set(e, t) {
		this.getItem().set(e, t);
	}
	static setTimezone(e) {
		this.getItem().setTimezone(e);
	}
};
//#endregion
//#region src/functions/isWindow.ts
function be(e) {
	return p() && e === window;
}
//#endregion
//#region src/functions/getElement.ts
function D(e) {
	if (!p()) return u(e) ? void 0 : e;
	if (be(e)) return document.body;
	if (u(e)) {
		var t;
		return (t = document.querySelector(e)) == null ? void 0 : t;
	}
	return e;
}
//#endregion
//#region src/functions/getElementOrWindow.ts
function xe(e) {
	return be(e) ? e : D(e);
}
//#endregion
//#region src/functions/isInDom.ts
function Se(e) {
	var t;
	return !!((t = D(e)) != null && t.closest("html"));
}
//#endregion
//#region src/functions/toArray.ts
function O(e) {
	return Array.isArray(e) ? e : [e];
}
//#endregion
//#region src/classes/EventItem.ts
var Ce = class {
	constructor(e, n = ["click"], r, i, a) {
		S(this, "element", void 0), S(this, "elementControl", void 0), S(this, "elementControlEdit", void 0), S(this, "type", void 0), S(this, "listenerRecent", (e) => {
			if (Se(this.elementControl)) {
				var n, r;
				(n = this.listener) == null || n.call(this.element, e, this.detail), t(this.options) && (r = this.options) != null && r.once && this.stop();
			} else this.stop();
		}), S(this, "activity", !1), S(this, "activityItems", []), this.listener = r, this.options = i, this.detail = a, this.element = xe(e), this.elementControl = D(e), this.type = O(n);
	}
	isActive() {
		return this.activity;
	}
	getElement() {
		return this.element;
	}
	setElement(e) {
		let t = xe(e);
		return this.elementControlEdit || (this.elementControl = D(e)), this.element = t, this.reset(), this;
	}
	setElementControl(e) {
		return this.elementControl = D(e), this.elementControlEdit = !s(this.elementControl), this.elementControlEdit || (this.elementControl = D(this.element)), this;
	}
	setType(e) {
		return this.type = O(e), this.reset(), this;
	}
	setListener(e) {
		return this.listener = e, this;
	}
	setOptions(e) {
		return this.options = e, this.reset(), this;
	}
	setDetail(e) {
		return this.detail = e, this;
	}
	dispatch(e = this.detail) {
		return this.type.forEach((t) => {
			var n;
			return (n = this.element) == null ? void 0 : n.dispatchEvent(new CustomEvent(t, { detail: e }));
		}), this;
	}
	start() {
		return this.activity || (this.activity = !0, this.activityItems = [], this.type.forEach((e) => {
			this.element && !(e === "resize" && this.makeResize()) && !(e === "scroll-sync" && this.makeScroll()) && (this.element.addEventListener(e, this.listenerRecent, this.options), this.activityItems.push({
				element: this.element,
				type: e
			}));
		})), this;
	}
	stop() {
		return this.activity && (this.activity = !1, this.activityItems.forEach(({ element: e, type: t, listener: n, observer: r }) => {
			r ? r.disconnect() : n ? e == null || e.removeEventListener(t, n) : e == null || e.removeEventListener(t, this.listenerRecent);
		})), this;
	}
	toggle(e) {
		return e ? this.start() : this.stop();
	}
	reset() {
		return this.activity && (this.stop(), this.start()), this;
	}
	isObserver() {
		return "ResizeObserver" in window;
	}
	makeResize() {
		if (this.element && this.element instanceof HTMLElement && this.element !== document.body && this.isObserver()) {
			let e = new ResizeObserver((e) => this.listenerRecent(e == null ? void 0 : e[0]));
			return e.observe(this.element), this.activityItems.push({
				element: this.element,
				type: "resize",
				observer: e
			}), !0;
		}
		return !1;
	}
	makeScroll() {
		if (this.element) {
			let e = !1, t = (t) => {
				e || (e = !0, requestAnimationFrame(() => {
					this.listenerRecent(t), e = !1;
				}));
			};
			return this.element.addEventListener("scroll", t, this.options), this.element.addEventListener("resize", t, this.options), this.activityItems.push({
				element: this.element,
				type: "scroll",
				listener: t
			}, {
				element: this.element,
				type: "resize",
				listener: t
			}), !0;
		}
		return !1;
	}
}, we = "ui-loading", Te = class {
	constructor(e = we) {
		S(this, "value", 0), S(this, "event", void 0), S(this, "registrationList", []), this.eventName = e, p() && (this.event = new Ce(window, this.eventName));
	}
	is() {
		return this.value > 0;
	}
	get() {
		return this.value;
	}
	show() {
		this.value++, this.dispatch();
	}
	hide() {
		this.is() && (this.value--, this.dispatch());
	}
	registrationEvent(e, t) {
		if (p()) {
			let n = new Ce(window, this.eventName, e).setElementControl(t).start();
			this.registrationList.push({
				item: n,
				listener: e,
				element: t
			});
		}
	}
	unregistrationEvent(e, t) {
		this.registrationList = this.registrationList.filter((n) => n.listener === e && n.element === t ? (n.item.stop(), !1) : !0);
	}
	dispatch() {
		var e;
		(e = this.event) == null || e.dispatch({ loading: this.is() });
	}
}, k = class {
	static is() {
		return this.item.is();
	}
	static get() {
		return this.item.get();
	}
	static getItem() {
		return this.item;
	}
	static show() {
		this.item.show();
	}
	static hide() {
		this.item.hide();
	}
	static registrationEvent(e, t) {
		this.item.registrationEvent(e, t);
	}
	static unregistrationEvent(e, t) {
		this.item.unregistrationEvent(e, t);
	}
};
S(k, "item", new Te());
//#endregion
//#region src/classes/ApiCache.ts
var Ee, De = 1440 * 60, A = class {
	static init(e, t, n, r) {
		this.getListener = e, this.setListener = t, this.removeListener = n, r && (this.cacheStepAgeClearOld = r, this.stepAgeClearOld = r);
	}
	static reset() {
		return this.items = void 0, this.getListener = void 0, this.setListener = void 0, this.removeListener = void 0, this.stepAgeClearOld = this.cacheStepAgeClearOld, this;
	}
	static async get(e) {
		let t = await this.getItemOrListener(e);
		return this.clearOld().catch((e) => {
			C.on({
				group: "api",
				code: "cacheClear",
				details: e
			});
		}), t == null ? void 0 : t.value;
	}
	static async getByFetch(e) {
		if (!this.isCache(e)) return;
		let t = this.generateKey(e);
		return await this.get(t);
	}
	static async set(e, t, n = De) {
		let r = {
			value: t,
			age: n,
			cacheAge: Date.now()
		};
		await this.setItemOrListener(e, r);
	}
	static async setByFetch(e, t) {
		if (this.isCache(e)) {
			let n = this.generateKey(e);
			await this.set(n, t, e.cache);
		}
	}
	static async remove(e) {
		await this.removeItemOrListener(e);
	}
	static isCache(e) {
		if (p()) return !1;
		let { cache: t } = e;
		return !!t;
	}
	static isAge(e) {
		return e ? e.age ? e.age * 1e3 + e.cacheAge >= Date.now() : !0 : !1;
	}
	static isItem(e) {
		return e in this.getList();
	}
	static generateKey(e) {
		return JSON.stringify({
			api: e.api,
			auth: e.auth,
			init: e.init,
			method: e.method,
			path: e.path,
			pathFull: e.pathFull,
			request: e.request,
			toData: e.toData,
			cacheId: e.cacheId
		});
	}
	static async getItemOrListener(e) {
		let t = this.getListener ? await this.getListener(e) : this.getList()[e];
		if (this.isAge(t)) return t;
	}
	static getList() {
		return this.items || (this.items = {}), this.items;
	}
	static async setItemOrListener(e, t) {
		let n = this.setListener ? await this.setListener(e, t) : !1;
		this.getList()[e] = {
			...t,
			value: n ? void 0 : t.value
		};
	}
	static async removeItemOrListener(e) {
		this.removeListener && await this.removeListener(e), this.isItem(e) && delete this.getList()[e];
	}
	static async clearOld() {
		if (this.stepAgeClearOld-- > 0) return this;
		if (this.stepAgeClearOld = this.cacheStepAgeClearOld, this.items) for (let e in this.items) {
			let t = this.items[e];
			this.isAge(t) || await this.removeItemOrListener(e);
		}
		return this;
	}
};
Ee = A, S(A, "items", void 0), S(A, "getListener", void 0), S(A, "setListener", void 0), S(A, "removeListener", void 0), S(A, "cacheStepAgeClearOld", 16384), S(A, "stepAgeClearOld", Ee.cacheStepAgeClearOld);
//#endregion
//#region src/types/apiTypes.ts
var j = /* @__PURE__ */ function(e) {
	return e.delete = "DELETE", e.get = "GET", e.post = "POST", e.put = "PUT", e.patch = "PATCH", e;
}({}), Oe = class {
	constructor() {
		S(this, "value", void 0);
	}
	is() {
		return !!this.value;
	}
	get() {
		return this.value;
	}
	request(e) {
		let t = this.get();
		if (c(t)) {
			if (e instanceof FormData) this.addByFormData(e, t);
			else if (n(e)) return {
				...t,
				...e
			};
		}
		return e;
	}
	set(e) {
		return this.value = e, this;
	}
	addByFormData(e, t) {
		return Object.entries(t).forEach(([t, n]) => {
			e.has(t) || e.set(t, n);
		}), this;
	}
}, ke = class {
	constructor() {
		S(this, "headers", {});
	}
	get(e, t = "application/json;charset=UTF-8") {
		if (e === null) return;
		let r = { ...this.headers };
		return n(e) && Object.assign(r, e), c(t) && (r["Content-Type"] = t), r;
	}
	getByRequest(e, t, n = "application/json;charset=UTF-8") {
		return e instanceof FormData ? this.get(t, null) : this.get(t, n);
	}
	set(e) {
		return n(e) && (this.headers = e), this;
	}
}, Ae = "__ui:api:hydration:id__", je = class {
	constructor() {
		S(this, "list", []);
	}
	initResponse(e) {
		p() && e.add(this.getListByClient());
	}
	toClient(e, t) {
		let { path: n, method: r = j.get, request: i, global: a = r === j.get } = e;
		!a || !n || p() || this.list.push({
			path: n,
			method: r,
			request: i,
			response: t
		});
	}
	toString() {
		return fe(Ae, this.list);
	}
	getListByClient() {
		return pe(Ae, []);
	}
}, Me = class {
	constructor() {
		S(this, "callback", void 0), S(this, "callbackEnd", void 0), S(this, "loading", !1);
	}
	async make(e, t) {
		if (e && this.callback) return this.go(t);
	}
	async makeEnd(e, t, n) {
		return e && this.callbackEnd ? await this.callbackEnd(t, n) : {};
	}
	set(e) {
		return this.callback = e, this;
	}
	setEnd(e) {
		return this.callbackEnd = e, this;
	}
	async go(e, t = 32) {
		return new Promise((n) => {
			this.loading && t > 0 ? setTimeout(() => this.go(e, t - 1).then(n), 160) : this.callback ? (this.loading = !0, this.callback(e).then(() => {
				this.loading = !1, n();
			}).catch(() => {
				this.loading = !1, n();
			})) : n();
		});
	}
}, Ne = class {
	constructor() {
		S(this, "value", void 0);
	}
	get() {
		return this.value;
	}
	getStatus() {
		var e;
		return (e = this.get()) == null ? void 0 : e.status;
	}
	getStatusText() {
		var e;
		return (e = this.get()) == null ? void 0 : e.statusText;
	}
	getStatusType() {
		var e;
		return (e = this.get()) == null ? void 0 : e.lastStatus;
	}
	getError() {
		var e;
		return (e = this.get()) == null ? void 0 : e.error;
	}
	getResponse() {
		var e;
		return (e = this.get()) == null ? void 0 : e.lastResponse;
	}
	getMessage() {
		var e;
		return ((e = this.get()) == null ? void 0 : e.lastMessage) || "";
	}
	set(e) {
		return "status" in e && this.setValue("status", e.status), "statusText" in e && this.setValue("statusText", e.statusText), "error" in e && this.setValue("error", e.error), "lastResponse" in e && this.setValue("lastResponse", e.lastResponse), "lastMessage" in e && this.setValue("lastMessage", e.lastMessage), this;
	}
	setStatus(e, t) {
		return this.set({
			status: e,
			statusText: t
		}), this;
	}
	setError(e) {
		return this.set({ error: e }), this;
	}
	setLastResponse(e) {
		return e && n(e) && ("message" in e && this.setLastMessage(String(e.message)), "status" in e && this.setLastStatus(String(e.status))), this.set({ lastResponse: e }), this;
	}
	setLastStatus(e) {
		return this.set({ lastStatus: e }), this;
	}
	setLastMessage(e) {
		return this.set({ lastMessage: e }), this;
	}
	setValue(e, t) {
		this.value || (this.value = {}), this.value[e] = t;
	}
};
//#endregion
//#region src/functions/executePromise.ts
async function Pe(e, ...t) {
	let n = b(e, ...t);
	return n instanceof Promise ? await n : n;
}
//#endregion
//#region src/classes/ApiResponse.ts
var Fe = "d-response-loading", Ie = class {
	constructor(e) {
		S(this, "first", []), S(this, "response", []), S(this, "loading", void 0), S(this, "devMode", !1), this.requestDefault = e;
	}
	get(e = "", t, n, r) {
		return this.response.find((i) => !this.isDisable(i) && this.isPath(i, e) && t === i.method && this.isFirst(i, r) && this.isResponse(i, n) ? (this.isDevMode(r) && console.warn(`Response type: ${i.path}`), this.first.push(i), !0) : !1);
	}
	getList() {
		return this.response.filter((e) => e.isForGlobal !== !0);
	}
	add(e) {
		return this.response.push(...O(e)), this;
	}
	setDevMode(e) {
		return this.devMode = e, this;
	}
	async emulator(e) {
		if (!p()) return;
		let { path: t = "", method: n = j.get, global: r = n === j.get, devMode: i = !1 } = e;
		if (r || this.isDevMode(i)) {
			let r = this.requestDefault.request(e.request), a = this.get(t, n, r, i);
			if (a) {
				let e = await this.fetch(a, r);
				return this.isDevMode(i) && console.warn("Response data:", t, r, e), e;
			}
		}
	}
	isDisable(e) {
		return !!b(e == null ? void 0 : e.disable);
	}
	isPath(e, t) {
		return t === e.path || !!(e.path instanceof RegExp && e.path.test(t));
	}
	isDevMode(e) {
		return e || this.devMode;
	}
	isFirst(e, t) {
		return this.first.indexOf(e) === -1 || this.isDevMode(t);
	}
	isResponse(e, t) {
		let r = this.requestDefault.request(e == null ? void 0 : e.request);
		return t === r || r === "*any" || c(t) && c(r) && n(t) && n(r) && !(t instanceof FormData) && !(r instanceof FormData) && Object.values(t).length === Object.values(r).length && Object.entries(r).every(([e, n]) => n === (t == null ? void 0 : t[e]) || n === "*any");
	}
	fetch(e, t) {
		return this.startResponseLoading(), new Promise((n) => {
			Pe(y(e.response) ? e.response(t) : e.response).then((t) => {
				e != null && e.lag ? (k.show(), setTimeout(() => {
					this.stopResponseLoading(), n(t), k.hide();
				}, d(0, 2e3))) : (this.stopResponseLoading(), n(t));
			});
		});
	}
	startResponseLoading() {
		this.loading && clearTimeout(this.loading), p() && document.body.classList.add(Fe);
	}
	stopResponseLoading() {
		p() && (this.loading = setTimeout(() => {
			this.loading = void 0, document.body.classList.remove(Fe);
		}, 2400));
	}
}, Le = class {
	constructor(e = "/api/", t = {}) {
		S(this, "headers", void 0), S(this, "requestDefault", void 0), S(this, "status", void 0), S(this, "response", void 0), S(this, "preparation", void 0), S(this, "loading", void 0), S(this, "errorCenter", void 0), S(this, "hydration", void 0), S(this, "timeout", 16e3), this.url = e;
		let { headersClass: n = ke, requestDefaultClass: r = Oe, statusClass: i = Ne, responseClass: a = Ie, preparationClass: o = Me, loadingClass: s = k.getItem(), errorCenterClass: c = C.getItem(), hydrationClass: l = je } = t;
		this.headers = new n(), this.requestDefault = new r(), this.status = new i(), this.response = new a(this.requestDefault), this.preparation = new o(), this.loading = s, this.errorCenter = c, this.hydration = new l(), this.hydration.initResponse(this.response);
	}
	isLocalhost() {
		return typeof location < "u" && location.hostname === "localhost";
	}
	getStatus() {
		return this.status;
	}
	getResponse() {
		return this.response;
	}
	getHydration() {
		return this.hydration;
	}
	getUrl(e, t = !0) {
		return `${t ? this.url : ""}${e}`.replace("{locale}", E.getLocation()).replace("{country}", E.getCountry()).replace("{language}", E.getLanguage());
	}
	getBody(e = {}, t = j.get) {
		if (e instanceof FormData) return e;
		if (t !== j.get && c(e)) return u(e) ? e : JSON.stringify(e);
	}
	getBodyForGet(e, t = "", n = j.get) {
		if (n === j.get) {
			let n = t.match(/\?/) ? "&" : "?", r = typeof e == "object" ? o(e) : e;
			if (c(r)) return `${n}${r}`;
		}
		return "";
	}
	getHydrationScript() {
		return this.hydration.toString();
	}
	setHeaders(e) {
		return this.headers.set(e), this;
	}
	setRequestDefault(e) {
		return this.requestDefault.set(e), this;
	}
	setUrl(e) {
		return this.url = e, this;
	}
	setPreparation(e) {
		return this.preparation.set(e), this;
	}
	setEnd(e) {
		return this.preparation.setEnd(e), this;
	}
	setTimeout(e) {
		return this.timeout = e, this;
	}
	async request(e) {
		return u(e) ? await this.fetch({ path: e }) : await this.fetch(e);
	}
	get(e) {
		return this.request({
			...e,
			method: j.get
		});
	}
	post(e) {
		return this.request({
			...e,
			method: j.post
		});
	}
	put(e) {
		return this.request({
			...e,
			method: j.put
		});
	}
	patch(e) {
		return this.request({
			...e,
			method: j.patch
		});
	}
	delete(e) {
		return this.request({
			...e,
			method: j.delete
		});
	}
	getRetryDelay(e, t) {
		return d(t, t + e * t);
	}
	async fetch(e, t = 0) {
		let { toData: n = !0, hideError: r = !1, hideLoading: i = !1, retry: a = 0, retryDelay: o = 64, queryReturn: s = void 0, globalPreparation: c = !0, globalEnd: l = !0, endResetLimit: u = 8 } = e, d = await this.response.emulator(e);
		if (d) return d;
		let p = await A.getByFetch(e);
		if (p) return this.hydration.toClient(e, p), p;
		let m = new Ne(), h;
		i || this.loading.show();
		try {
			await this.preparation.make(c, e);
			let { query: n, timeoutId: d } = await this.makeQuery(e);
			d && clearTimeout(d);
			let p = await this.preparation.makeEnd(l, n, e);
			if (m.setStatus(n.status, n.statusText), this.status.setStatus(n.status, n.statusText), !r && n.status >= 400 && this.makeErrorQuery(n), p != null && p.reset && t < u || t < a) return await f(this.getRetryDelay(t, o)), i || this.loading.hide(), await this.fetch(e, t + 1);
			h = await this.readData(n, s, p);
		} catch (e) {
			throw r || this.makeError(e), m.setError(String(e)), this.status.setError(String(e)), i || this.loading.hide(), e;
		}
		m.setLastResponse(h), this.status.setLastResponse(h);
		let g = this.makeStatus(this.makeData(h, n), m);
		return i || this.loading.hide(), this.hydration.toClient(e, g), await A.setByFetch(e, g), g;
	}
	async readData(e, t, n) {
		var r;
		return t ? await t(e) : "data" in n ? n.data : ((r = e.headers.get("Content-Type")) == null ? "" : r).match("application/json") ? await e.json() : { data: await e.text() };
	}
	async makeQuery(e) {
		let t = this.requestDefault.request(e.request), { api: n = !0, path: r = "", pathFull: i = void 0, method: a = j.get, headers: o = {}, type: s = "application/json;charset=UTF-8", init: c = {} } = e, l = i == null ? this.getUrl(r, n) : i, u = `${l}${this.getBodyForGet(t, l, a)}`, d = this.headers.getByRequest(e.request, o, s), f = {
			...c,
			method: a,
			body: this.getBody(t, a)
		};
		if (d) {
			var p;
			f.headers = {
				...d,
				...(p = c.headers) == null ? {} : p
			};
		}
		let m = this.initController(e, f);
		return {
			query: await fetch(u, f),
			timeoutId: m
		};
	}
	makeData(e, t) {
		if (!t || !e || !n(e) || !("data" in e)) return e;
		if (e.data !== null && typeof e.data != "object" || i(e.data)) return e.data;
		let r = { ...e.data };
		return "success" in e && !("success" in r) && (r.success = e.success), "status" in e && !("status" in r) && (r.status = e.status), "message" in e && !("message" in r) && (r.message = e.message), r;
	}
	makeStatus(e, t) {
		return e && n(e) ? {
			...e,
			statusObject: t.get()
		} : e;
	}
	makeError(e, t = "api") {
		switch (e.name) {
			case "TimeoutError":
				this.errorCenter.on({
					group: t,
					code: "timeout",
					details: e
				});
				break;
			case "AbortError": break;
			default: l() ? this.errorCenter.on({
				group: t,
				code: "unknown",
				details: e
			}) : this.errorCenter.on({
				group: t,
				code: "offline",
				details: e
			});
		}
	}
	makeErrorQuery(e) {
		switch (e.status) {
			case 401:
				this.errorCenter.on({
					group: "api",
					code: "unauthorized",
					details: e
				});
				break;
			case 403:
				this.errorCenter.on({
					group: "api",
					code: "forbidden",
					details: e
				});
				break;
			case 404:
				this.errorCenter.on({
					group: "api",
					code: "notFound",
					details: e
				});
				break;
			case 500:
				this.errorCenter.on({
					group: "api",
					code: "server",
					details: e
				});
				break;
			default: this.errorCenter.on({
				group: "api-server",
				code: String(e.status),
				details: e
			});
		}
	}
	initController(e, t) {
		let { timeout: n = this.timeout, controller: r } = e;
		if (n && !r && typeof AbortSignal < "u" && typeof AbortSignal.timeout == "function") {
			t.signal = AbortSignal.timeout(n);
			return;
		}
		if (!n && r) {
			t.signal = r.signal;
			return;
		}
		if (n) {
			let e = r == null ? new AbortController() : r;
			return t.signal = e.signal, setTimeout(() => {
				e.abort(new DOMException("Timeout", "TimeoutError"));
			}, n);
		}
	}
}, M = class e {
	static isLocalhost() {
		return this.getItem().isLocalhost();
	}
	static getItem() {
		return w.get("__dxt_api_instance__", () => new Le());
	}
	static getStatus() {
		return this.getItem().getStatus();
	}
	static getResponse() {
		return this.getItem().getResponse();
	}
	static getHydration() {
		return this.getItem().getHydration();
	}
	static getHydrationScript() {
		return this.getItem().getHydrationScript();
	}
	static getUrl(e, t = !0) {
		return this.getItem().getUrl(e, t);
	}
	static getBody(e = {}, t = j.get) {
		return this.getItem().getBody(e, t);
	}
	static getBodyForGet(e, t = "", n = j.get) {
		return this.getItem().getBodyForGet(e, t, n);
	}
	static setHeaders(t) {
		return this.getItem().setHeaders(t), e;
	}
	static setRequestDefault(t) {
		return this.getItem().setRequestDefault(t), e;
	}
	static setUrl(t) {
		return this.getItem().setUrl(t), e;
	}
	static setPreparation(t) {
		return this.getItem().setPreparation(t), e;
	}
	static setEnd(t) {
		return this.getItem().setEnd(t), e;
	}
	static setTimeout(t) {
		return this.getItem().setTimeout(t), e;
	}
	static setConfig(e) {
		return e && n(e) && (e.urlRoot && this.setUrl(e.urlRoot), e.headers && this.setHeaders(e.headers), e.requestDefault && this.setRequestDefault(e.requestDefault), e.preparation && this.setPreparation(e.preparation), e.end && this.setEnd(e.end), e.timeout && this.setTimeout(e.timeout)), this;
	}
	static async request(e) {
		return this.getItem().request(e);
	}
	static get(e) {
		return this.getItem().get(e);
	}
	static post(e) {
		return this.getItem().post(e);
	}
	static put(e) {
		return this.getItem().put(e);
	}
	static patch(e) {
		return this.getItem().patch(e);
	}
	static delete(e) {
		return this.getItem().delete(e);
	}
}, Re = class {
	constructor(e, t, n, r = C.getItem()) {
		if (S(this, "channel", void 0), S(this, "update", (e) => {
			var t;
			return (t = this.callback) == null || t.call(this, e), this;
		}), S(this, "updateError", (e) => {
			var t;
			return (t = this.callbackError) == null || t.call(this, e), this;
		}), this.callback = t, this.callbackError = n, p()) try {
			this.channel = new BroadcastChannel(`${ze()}__${e}`), this.channel.onmessage = this.update, this.channel.onmessageerror = this.updateError;
		} catch (e) {
			r.on({
				group: "broadcast",
				code: "error",
				details: e
			});
		}
	}
	getChannel() {
		return this.channel;
	}
	post(e) {
		var t;
		return (t = this.channel) == null || t.postMessage(e), this;
	}
	setCallback(e) {
		return this.callback = e, this;
	}
	setCallbackError(e) {
		return this.callbackError = e, this;
	}
	destroy() {
		var e;
		(e = this.channel) == null || e.close(), this.channel = void 0;
	}
}, ze = () => new T("__broadcast-name").get(() => `name_${d(1e6, 9999999)}`), Be = class {
	constructor(e) {
		S(this, "cache", void 0), S(this, "cacheOld", void 0), S(this, "comparisons", []), this.callback = e;
	}
	getCache(e) {
		return this.isUpdate(e) && (this.cacheOld = this.cache, this.setCache()), this.cache;
	}
	getCacheOld() {
		return this.cacheOld;
	}
	async getCacheAsync(e) {
		return this.isUpdate(e) && (this.cacheOld = this.cache, await this.setCacheAsync()), this.cache;
	}
	setCache() {
		this.cache = this.callback();
	}
	async setCacheAsync() {
		this.cache = await this.callback();
	}
	isUpdate(e) {
		return this.cache === void 0 || this.comparisons.length !== e.length || this.comparisons.findIndex((t, n) => t !== e[n]) >= 0 ? (this.comparisons = [...e], !0) : !1;
	}
}, Ve = class {
	constructor() {
		S(this, "cache", {});
	}
	get(e, t, n) {
		return this.getCacheItem(e, t).getCache(n == null ? [] : n);
	}
	async getAsync(e, t, n) {
		return await this.getCacheItem(e, t).getCacheAsync(n == null ? [] : n);
	}
	getCacheItem(e, t) {
		return e in this.cache || (this.cache[e] = new Be(t)), this.cache[e];
	}
}, He = class {
	static getItem() {
		return w.get("__dxt_cache_static__", () => new Ve());
	}
	static get(e, t, n) {
		return this.getItem().get(e, t, n);
	}
	static async getAsync(e, t, n) {
		return await this.getItem().getAsync(e, t, n);
	}
};
//#endregion
//#region src/functions/anyToString.ts
function N(e, n = !0, r = !0) {
	var a;
	if (u(e)) return r ? e.trim() : e;
	if (s(e)) return "";
	if (i(e) && !e.some((e) => t(e)) && n) return e.join(",");
	if (t(e)) try {
		return JSON.stringify(e);
	} catch (t) {
		return String(e);
	}
	return e === !0 ? "1" : e === !1 ? "0" : (a = e == null ? void 0 : e.toString()) == null ? "" : a;
}
//#endregion
//#region src/functions/strSplit.ts
function Ue(e, t, n) {
	let r = N(e);
	if (!n || n <= 0) return r.split(t);
	let i = r.split(t, n), a = r.split(t);
	return i.length === a.length ? i : (i.pop(), [...i, a.slice(n - 1).join(t)]);
}
//#endregion
//#region src/functions/transformation.ts
function We(e, t = !1) {
	if (typeof e == "string") {
		let r = e.trim();
		switch (r) {
			case "undefined": return;
			case "null": return null;
			case "true": return !0;
			case "false": return !1;
			default:
				var n;
				if (/^[{[]/.exec(r)) try {
					return JSON.parse(r);
				} catch (e) {
					C.on({
						group: "transformation",
						code: "error",
						details: e
					});
				}
				else if (/^[0-9]+\.[0-9.]+$/.exec(r)) return parseFloat(r);
				else if (/^[0-9]+$/.exec(r)) return parseInt(r, 10);
				else if (t && p() && typeof ((n = window) == null ? void 0 : n[r]) == "function") return window[r];
		}
	}
	return e;
}
//#endregion
//#region src/classes/CookieBlockInstance.ts
var Ge = "cookie-block", Ke = class {
	constructor() {
		S(this, "storage", new T(Ge));
	}
	get() {
		var e;
		return (e = this.storage.get()) == null ? !1 : e;
	}
	set(e) {
		this.storage.set(e);
	}
}, qe = class {
	static getItem() {
		return w.get("__dxt_cookie_block__", () => new Ke());
	}
	static get() {
		return this.getItem().get();
	}
	static set(e) {
		this.getItem().set(e);
	}
}, P = class {
	static init(e, t) {
		this.getListener = e, this.setListener = t;
	}
	static reset() {
		this.items = void 0, this.getListener = void 0, this.setListener = void 0;
	}
	static get(e, t) {
		let n = this.getListener ? this.getListener(e) : this.initItems()[e];
		return n === void 0 && t !== void 0 ? this.set(e, t) : We(n);
	}
	static set(e, t, n) {
		let r = b(t);
		if (qe.get()) return r;
		let i = N(r, !1);
		if (this.setListener) this.setListener(e, i, n);
		else if (this.initItems()[e] = i === "" ? void 0 : r, this.hasDom()) {
			var a, o, s;
			document.cookie = [
				`${encodeURIComponent(e)}=${encodeURIComponent(i)}`,
				`max-age=${i === "" ? "-1" : (a = n == null ? void 0 : n.age) == null ? 10080 * 60 : a}`,
				`SameSite=${(o = n == null ? void 0 : n.sameSite) == null ? "strict" : o}`,
				...(s = n == null ? void 0 : n.arguments) == null ? [] : s
			].join("; ");
		}
		return r;
	}
	static remove(e) {
		this.set(e, "", { age: -1 });
	}
	static update() {
		this.initItems();
	}
	static hasDom() {
		return p() && !oe();
	}
	static initItems() {
		if (this.items) return this.items;
		if (this.items = {}, this.hasDom()) for (let e of document.cookie.split(";")) {
			let [t, n] = Ue(e.trim(), "=", 2);
			t && c(n) && (this.items[t] = n);
		}
		return this.items;
	}
};
S(P, "items", void 0), S(P, "getListener", void 0), S(P, "setListener", void 0);
//#endregion
//#region src/classes/Cookie.ts
var Je = () => w.get("__dxt_cookie_items__", () => ({})), Ye = class e {
	static getInstance(t) {
		let n = Je();
		return t in n ? n[t] : new e(t);
	}
	constructor(e) {
		S(this, "value", void 0), S(this, "options", {}), this.name = e;
		let t = Je();
		if (e in t) return t[e];
		this.value = P.get(this.name), t[e] = this;
	}
	get(e, t) {
		return this.value === void 0 && e && this.set(e, t), this.value;
	}
	set(e, t) {
		this.value = b(e), Object.assign(this.options, t), this.update();
	}
	remove() {
		this.set("");
	}
	update() {
		P.set(this.name, this.value, this.options);
	}
};
//#endregion
//#region src/functions/toDate.ts
function F(e) {
	var t, n, r, i, a, o, c, l;
	if (e instanceof Date) return e;
	if (s(e)) return /* @__PURE__ */ new Date();
	if (typeof e == "number") return new Date(e);
	let u = e, d = E.getTimezoneFormat().trim();
	e.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (e, t, n) => (u = t, d = n.trim(), e));
	let f = (t = (n = (r = (i = (a = (o = (c = (l = /^\d{4}\d{2}\d{2}$/.exec(u) && `${u.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) == null ? /^\d{4}\d{2}$/.exec(u) && `${u.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00` : l) == null ? /^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(u) && u.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6") : c) == null ? /^\d{4}-\d{2}-\d{2}$/.exec(u) && `${u}T00:00:00` : o) == null ? /^\d{4}-\d{2}$/.exec(u) && `${u}-01T00:00:00` : a) == null ? /^\d{4}$/.exec(u) && `${u}-01-01T00:00:00` : i) == null ? /^\d{2}:\d{2}$/.exec(u) && `2000-01-01T${u}:00` : r) == null ? /^\d{2}:\d{2}:\d{2}$/.exec(u) && `2000-01-01T${u}` : n) == null ? u.replace(" ", "T") : t;
	return /* @__PURE__ */ new Date(`${f.trim()}${d}`);
}
//#endregion
//#region src/functions/getColumn.ts
function Xe(e, t) {
	return r(e, (e) => e == null ? void 0 : e[t], !0);
}
//#endregion
//#region src/classes/GeoIntl.ts
var I = class e {
	static isItem(e = E.getLocation()) {
		return this.getLocation(e) in R;
	}
	static getLocation(e = E.getLocation()) {
		if (e in L) return L[e];
		let t = E.find(e);
		return L[e] = t.standard, t.standard;
	}
	static getInstance(t = E.getLocation()) {
		let n = this.getLocation(t);
		return n in R ? R[n] : new e(t);
	}
	constructor(e = E.getLocation(), t = C.getItem()) {
		S(this, "geo", void 0), this.errorCenter = t, this.geo = E.find(e);
		let n = this.getLocation();
		if (n in R) return R[n];
		L[e] = n, R[n] = this;
	}
	getLocation() {
		return this.geo.standard;
	}
	getFirstDay() {
		return this.geo.firstDay;
	}
	display(e, t) {
		var n, r;
		let i = { type: "language" }, a;
		t && (typeof t == "string" ? i.type = t : i = {
			...i,
			...t
		});
		try {
			typeof Intl < "u" && (e ? a = new Intl.DisplayNames(this.getLocation(), i).of(e) : i.type === "language" ? a = new Intl.DisplayNames(this.getLocation(), i).of(this.geo.language) : i.type === "region" && (a = new Intl.DisplayNames(this.getLocation(), i).of(this.geo.country)));
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "display",
				details: e
			});
		}
		return (n = (r = a) == null ? e : r) == null ? "" : n;
	}
	languageName(e, t) {
		let n = {
			type: "language",
			style: t
		};
		return this.display(E.getByCode(e).language, n);
	}
	countryName(e, t) {
		let n = {
			type: "region",
			style: t
		};
		return this.display(e, n);
	}
	fullName(e, t, n, r) {
		var i, a;
		let o = (i = (a = this.geo) == null ? void 0 : a.nameFormat) == null ? "fl" : i, s;
		switch (o) {
			case "fsl":
				s = `${t}${n ? ` ${n}` : ""} ${e}`;
				break;
			case "lf":
				s = `${e} ${t}`;
				break;
			case "lsf":
				s = `${e}${n ? ` ${n}` : ""} ${t}`;
				break;
			default:
				s = `${t} ${e}`;
				break;
		}
		return r ? s.replace(/ (.)[^ ]+/gi, " $1.") : s;
	}
	number(e, t) {
		var n, r;
		return ((n = this.numberObject(t)) == null || (r = n.format) == null ? void 0 : r.call(n, _(e))) || e.toString();
	}
	decimal() {
		var e, t, n;
		return ((e = this.numberObject()) == null || (t = e.formatToParts) == null || (t = t.call(e, 1.2)) == null || (n = t.find) == null || (n = n.call(t, (e) => e.type === "decimal")) == null ? void 0 : n.value) || ".";
	}
	currency(e, t, n = !1) {
		let r = {
			style: "currency",
			currencyDisplay: "symbol",
			...typeof t == "string" ? { currency: t } : t || {}
		}, i = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...e) => (r.currency = String(e[2]).toUpperCase(), String(e[1])));
		if (n) {
			let t = this.numberObject(r);
			return t ? Xe(t.formatToParts(_(e)).filter((e) => ["literal", "currency"].indexOf(e.type) === -1), "value").join("") : e.toString();
		} else if ("currency" in r) return this.number(typeof e == "number" ? e : i, r);
		else return this.number(typeof e == "number" ? e : i, {
			...r,
			style: "decimal"
		});
	}
	currencySymbol(e, t = "symbol") {
		var n, r, i;
		return ((n = this.numberObject({
			style: "currency",
			currencyDisplay: t,
			currency: e
		})) == null || (r = n.formatToParts) == null || (r = r.call(n, 100)) == null || (i = r.find) == null || (i = i.call(r, (e) => e.type === "currency")) == null ? void 0 : i.value) || e;
	}
	unit(e, t) {
		let n = {
			style: "unit",
			...typeof t == "string" ? { unit: t } : t || {}
		}, r = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...e) => (n.unit = String(e[2]).toLowerCase(), String(e[1])));
		return this.number(r, n);
	}
	sizeFile(e, t = "byte") {
		let n = _(e);
		if (n > 1024 && u(t)) switch (t) {
			case "byte": return this.sizeFile(n / 1024, "kilobyte");
			case "kilobyte": return this.sizeFile(n / 1024, "megabyte");
			case "megabyte": return this.sizeFile(n / 1024, "gigabyte");
			case "gigabyte": return this.sizeFile(n / 1024, "terabyte");
			case "terabyte": return this.sizeFile(n / 1024, "petabyte");
		}
		return this.unit(e, t);
	}
	percent(e, t) {
		return this.number(e, {
			style: "percent",
			...t || {}
		});
	}
	percentBy100(e, t) {
		return this.percent(_(e) / 100, t);
	}
	plural(e, t, n, r) {
		var i;
		let a = _(e), o = t.split("|");
		if (o.length > 1) try {
			if (typeof Intl < "u") {
				var s;
				let e = new Intl.PluralRules(this.getLocation(), n).select(a), t;
				switch (e) {
					case "zero":
						t = o[o.length - 1];
						break;
					case "one":
						t = o == null ? void 0 : o[0];
						break;
					case "two":
						t = o == null ? void 0 : o[1];
						break;
					case "few":
						t = o != null && o[3] ? o == null ? void 0 : o[2] : o == null ? void 0 : o[1];
						break;
					case "many":
						t = (o == null ? void 0 : o[3]) || (o == null ? void 0 : o[2]) || (o == null ? void 0 : o[1]);
						break;
					case "other":
						t = o.length === 6 ? o[o.length - 2] : o[o.length - 1];
						break;
				}
				return `${this.number(a, r)} ${(s = t) == null ? "" : s}`.trim();
			}
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "plural",
				details: e
			});
		}
		return `${this.number(a, r)} ${(i = o == null ? void 0 : o[0]) == null ? "" : i}`.trim();
	}
	date(e, t, n, r) {
		let i = F(e), a = typeof n == "string", o = this.dateOptions(t, a ? n : "short");
		return r && (o.hour12 = !1), a || Object.assign(o, n), i.toLocaleString(this.getLocation(), o);
	}
	relative(e, t, n) {
		let r = F(e), i = n || /* @__PURE__ */ new Date(), a = {
			numeric: "auto",
			...typeof t == "string" ? { style: t } : t || {}
		}, o = "second", s = (r.getTime() - i.getTime()) / 1e3;
		return Math.abs(s) >= 60 && (o = "minute", s /= 60, Math.abs(s) >= 60 && (o = "hour", s /= 60, Math.abs(s) >= 24 && (o = "day", s /= 24, Math.abs(s) >= 30 && (o = "month", s /= 30, Math.abs(s) >= 12 && (o = "year", s /= 12))))), this.relativeByValue(s, o, a);
	}
	relativeLimit(e, t, n, r, i, a, o) {
		let s = F(e), c = n || /* @__PURE__ */ new Date(), l = new Date(c), u = new Date(c);
		return l.setDate(c.getDate() - t), u.setDate(c.getDate() + t), s >= l && s <= u ? this.relative(s, r, c) : this.date(s, a, i, o);
	}
	relativeByValue(e, t, n) {
		let r = {
			numeric: "auto",
			...typeof n == "string" ? { style: n } : n || {}
		};
		try {
			if (this.hasIntl() && Intl.RelativeTimeFormat !== void 0) return new Intl.RelativeTimeFormat(this.getLocation(), r).format(Math.round(_(e)), t);
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "relative",
				details: e
			});
		}
		return "";
	}
	month(e, t) {
		try {
			if (this.hasIntlDateTimeFormat()) return Intl.DateTimeFormat(this.getLocation(), { month: t || "long" }).format(F(e));
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "datetime",
				details: e
			});
		}
		return "";
	}
	months(e) {
		let t = [{
			label: "",
			value: void 0
		}];
		try {
			if (this.hasIntlDateTimeFormat()) {
				let n = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { month: e || "long" });
				for (let e = 0; e < 12; e++) n.setMonth(e), t.push({
					label: r.format(n).replace(/^./, (e) => e.toUpperCase()),
					value: e + 1
				});
			}
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "datetime",
				details: e
			});
		}
		return t;
	}
	weekday(e, t) {
		try {
			if (this.hasIntlDateTimeFormat()) return Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }).format(F(e));
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "datetime",
				details: e
			});
		}
		return "";
	}
	weekdays(e) {
		let t = [{
			label: "",
			value: void 0
		}];
		try {
			if (this.hasIntlDateTimeFormat()) {
				let n = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }), i = n.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
				n.setDate(n.getDate() - i);
				for (let e = 0; e < 7; e++) t.push({
					label: r.format(n).replace(/^./, (e) => e.toUpperCase()),
					value: n.getDay()
				}), n.setDate(n.getDate() + 1);
			}
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "datetime",
				details: e
			});
		}
		return t;
	}
	time(e) {
		return this.date(e, "time");
	}
	sort(e, t = (e, t) => [e, t]) {
		if (this.hasIntl() && Intl.Collator !== void 0) {
			let n = new Intl.Collator(this.getLocation());
			return e.sort((e, r) => n.compare(...t(e, r)));
		}
		return e;
	}
	hasIntl() {
		return typeof Intl < "u";
	}
	hasIntlDateTimeFormat() {
		return this.hasIntl() && Intl.DateTimeFormat !== void 0;
	}
	numberObject(e) {
		try {
			if (this.hasIntl() && Intl.NumberFormat !== void 0) return new Intl.NumberFormat(this.getLocation(), e);
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "number",
				details: e
			});
		}
	}
	dateOptions(e, t = "short") {
		let n = {};
		return [
			"full",
			"datetime",
			"date",
			void 0,
			"year-month",
			"year"
		].indexOf(e) !== -1 && (n.year = "numeric"), [
			"full",
			"datetime",
			"date",
			void 0,
			"year-month",
			"month",
			"day-month"
		].indexOf(e) !== -1 && (n.month = t), [
			"full",
			"datetime",
			"date",
			void 0,
			"day",
			"day-month"
		].indexOf(e) !== -1 && (n.day = "2-digit"), e !== void 0 && ([
			"full",
			"datetime",
			"time",
			"hour-minute",
			"hour"
		].indexOf(e) !== -1 && (n.hour = "2-digit"), [
			"full",
			"datetime",
			"time",
			"hour-minute",
			"minute"
		].indexOf(e) !== -1 && (n.minute = "2-digit"), [
			"full",
			"time",
			"second"
		].indexOf(e) !== -1 && (n.second = "2-digit")), n;
	}
}, L = {}, R = {}, Ze = class e {
	constructor(e, t = "date", n = E.getLocation()) {
		S(this, "date", void 0), S(this, "hour24", !1), S(this, "watch", void 0), this.type = t, this.code = n, this.date = F(e);
	}
	getIntl() {
		return I.getInstance(this.code);
	}
	getDate() {
		return this.date;
	}
	getType() {
		return this.type;
	}
	getHoursType() {
		let e = this.clone();
		return e.setHours(23), e.toLocaleTimeString(this.getIntl().getLocation(), { hour: "2-digit" }).match(/23/gi) ? "24" : "12";
	}
	getHour24() {
		return this.hour24;
	}
	getTimeZoneOffset() {
		return this.date.getTimezoneOffset();
	}
	getTimeZone(e) {
		let t = this.getTimeZoneOffset();
		if (e === "minute") return t.toString();
		let n = t / 60 * -1;
		if (e === "hour") return this.getIntl().number(Math.trunc(n), { signDisplay: "always" });
		let r = this.toTimeZoneHourFormat(n), i = n.toString().match(/.\d+/) ? "30" : "00";
		return e === "RFC" ? `${r}${i}` : `${r}:${i}`;
	}
	getFirstDayCode() {
		let e = this.getIntl().getFirstDay();
		return e === "Sa" ? 6 : e === "Su" ? 0 : 1;
	}
	getYear() {
		return this.date.getFullYear();
	}
	getMonth() {
		return this.date.getMonth() + 1;
	}
	getDay() {
		return this.date.getDate();
	}
	getHour() {
		return this.date.getHours();
	}
	getMinute() {
		return this.date.getMinutes();
	}
	getSecond() {
		return this.date.getSeconds();
	}
	getMaxDay() {
		return this.getMonth() > 0 ? this.cloneDayLast().getDay() : 0;
	}
	locale(e = this.type, t) {
		return this.getIntl().date(this.date, e, t, this.hour24);
	}
	localeYear(e = "numeric") {
		return this.locale("year", { year: e });
	}
	localeMonth(e = "long") {
		return this.locale("month", { month: e });
	}
	localeDay(e = "numeric") {
		return this.locale("day", { day: e });
	}
	localeHour(e = "numeric") {
		return this.locale("hour", { hour: e });
	}
	localeMinute(e = "numeric") {
		return this.locale("minute", { minute: e });
	}
	localeSecond(e = "numeric") {
		return this.locale("second", { second: e });
	}
	standard(t = !0) {
		let n = new e(this.date, this.type, "en-GB"), r = [], i;
		return n.setHour24(!0), this.type === "hour-minute" ? i = n.locale(this.type, {
			year: "numeric",
			month: "2-digit",
			hour12: !1
		}) : ([
			"full",
			"datetime",
			"date",
			"year-month",
			"year",
			"month",
			"day"
		].indexOf(this.type) !== -1 && (r.push(n.localeYear()), r.push(n.localeMonth("2-digit"))), [
			"full",
			"datetime",
			"date",
			"year",
			"month",
			"day"
		].indexOf(this.type) !== -1 && r.push(n.localeDay("2-digit")), [
			"full",
			"datetime",
			"time",
			"hour",
			"minute",
			"second"
		].indexOf(this.type) !== -1 && (i = n.locale("time"))), `${r.join("-")}${i ? `T${i}${t ? n.getTimeZone() : ""}` : ""}`;
	}
	setDate(e) {
		return this.date = F(e), this.update(), this;
	}
	setType(e) {
		return this.type = e, this.update(), this;
	}
	setHour24(e) {
		return this.hour24 = e, this.update(), this;
	}
	setCode(e) {
		return this.code = e, this;
	}
	setWatch(e) {
		return this.watch = e, this;
	}
	setYear(e) {
		return this.date.setFullYear(e), this.update(), this;
	}
	setMonth(e) {
		return this.date.setMonth(e - 1), this.update(), this;
	}
	setDay(e) {
		return this.date.setDate(e), this.update(), this;
	}
	setHour(e) {
		return this.date.setHours(e), this.update(), this;
	}
	setMinute(e) {
		return this.date.setMinutes(e), this.update(), this;
	}
	setSecond(e) {
		return this.date.setSeconds(e), this.update(), this;
	}
	moveByYear(e) {
		return this.setYear(this.date.getFullYear() + e), this;
	}
	moveByMonth(e) {
		return this.setMonth(this.date.getMonth() + 1 + e), this;
	}
	moveByDay(e) {
		return this.setDay(this.date.getDate() + e), this;
	}
	moveByHour(e) {
		return this.setHour(this.date.getHours() + e), this;
	}
	moveByMinute(e) {
		return this.setMinute(this.date.getMinutes() + e), this;
	}
	moveBySecond(e) {
		return this.setSecond(this.date.getSeconds() + e), this;
	}
	moveMonthFirst() {
		return this.setMonth(1), this;
	}
	moveMonthLast() {
		return this.setMonth(12), this;
	}
	moveMonthNext() {
		return this.setDay(1).moveByMonth(1), this;
	}
	moveMonthPrevious() {
		return this.setDay(1).moveByMonth(-1), this;
	}
	moveWeekdayFirst() {
		let e = this.date.getDay(), t = this.getFirstDayCode();
		return this.moveByDay((t === 6 ? -1 : t) - e), this;
	}
	moveWeekdayLast() {
		return this.moveWeekdayFirst().moveByDay(6), this;
	}
	moveWeekdayFirstByMonth() {
		return this.moveDayFirst().moveWeekdayFirst(), this;
	}
	moveWeekdayLastByMonth() {
		return this.moveDayLast().moveWeekdayLast(), this;
	}
	moveWeekdayNext() {
		return this.moveWeekdayFirst().moveByDay(7), this;
	}
	moveWeekdayPrevious() {
		return this.moveWeekdayFirst().moveByDay(-7), this;
	}
	moveDayFirst() {
		return this.setDay(1), this;
	}
	moveDayLast() {
		return this.setDay(1).moveByMonth(1).moveByDay(-1), this;
	}
	moveDayNext() {
		return this.moveByDay(1), this;
	}
	moveDayPrevious() {
		return this.moveByDay(-1), this;
	}
	clone() {
		return new Date(this.date);
	}
	cloneClass() {
		return new this.constructor(this.clone(), this.type, this.code);
	}
	cloneMonthFirst() {
		return this.cloneClass().moveMonthFirst();
	}
	cloneMonthLast() {
		return this.cloneClass().moveMonthLast();
	}
	cloneMonthNext() {
		return this.cloneClass().moveMonthNext();
	}
	cloneMonthPrevious() {
		return this.cloneClass().moveMonthPrevious();
	}
	cloneWeekdayFirst() {
		return this.cloneClass().moveWeekdayFirst();
	}
	cloneWeekdayLast() {
		return this.cloneClass().moveWeekdayLast();
	}
	cloneWeekdayFirstByMonth() {
		return this.cloneClass().moveWeekdayFirstByMonth();
	}
	cloneWeekdayLastByMonth() {
		return this.cloneClass().moveWeekdayLastByMonth();
	}
	cloneWeekdayNext() {
		return this.cloneClass().moveWeekdayNext();
	}
	cloneWeekdayPrevious() {
		return this.cloneClass().moveWeekdayPrevious();
	}
	cloneDayFirst() {
		return this.cloneClass().moveDayFirst();
	}
	cloneDayLast() {
		return this.cloneClass().moveDayLast();
	}
	cloneDayNext() {
		return this.cloneClass().moveDayNext();
	}
	cloneDayPrevious() {
		return this.cloneClass().moveDayPrevious();
	}
	toTimeZoneHourFormat(e) {
		let t = Math.trunc(e).toString().replace("-", "").padStart(2, "0");
		return `${e >= 0 ? "+" : "-"}${t}`;
	}
	update() {
		var e;
		return (e = this.watch) == null || e.call(this, this.date, this.type, this.hour24), this;
	}
};
//#endregion
//#region src/functions/getItemByPath.ts
function z(e, n) {
	var r;
	if (!c(n, !0)) return;
	let i = Ue(n, ".", 2), a = i[0];
	return a && e != null && e[a] && t(e[a]) && i != null && i[1] ? z(e[a], i[1]) : (r = e == null ? void 0 : e[a]) == null ? void 0 : r;
}
//#endregion
//#region src/functions/toCamelCase.ts
function Qe(e) {
	return e.toString().trim().replace(/[^\w-. ]+/g, "").replace(/[ .]+/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (e) => `${e.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...e) => `${String(e[1]).toUpperCase()}`).replace(/^([A-Z])/, (e) => `${e.toLowerCase()}`);
}
//#endregion
//#region src/types/formattersTypes.ts
var B = /* @__PURE__ */ function(e) {
	return e.currency = "currency", e.date = "date", e.name = "name", e.number = "number", e.plural = "plural", e.unit = "unit", e;
}({}), $e = class {
	constructor(e, t) {
		this.options = e, this.list = t;
	}
	is() {
		return !!this.list;
	}
	isArray() {
		return Array.isArray(this.list);
	}
	length() {
		return this.list ? this.isArray() ? this.list.length : 1 : 0;
	}
	getList() {
		return this.list ? O(this.list) : [];
	}
	getOptions() {
		return this.options;
	}
	setList(e) {
		return this.list = e, this;
	}
	to() {
		let e = r(this.getList(), (e) => ({
			...e,
			...this.getFormatData(e)
		}));
		return this.isArray() ? e : e[0];
	}
	getFormatData(e) {
		let t = {};
		return r(this.options, (n, r) => {
			let i = `${Qe(r)}Format`, a = z(e, r);
			n != null && n.transformation ? c(a) ? t[i] = n.transformation(a, e, n.options) : t[i] = "" : t[i] = this.transformation(a, e, n.type, n.options);
		}), t;
	}
	transformation(e, t, n, r) {
		if (c(e) || n === B.name) switch (n) {
			case B.currency: return this.formatCurrency(e, t, r);
			case B.date: return this.formatDate(e, r);
			case B.name: return this.formatName(t, r);
			case B.number: return this.formatNumber(e, r);
			case B.plural: return this.formatPlural(e, r);
			case B.unit: return this.formatUnit(e, r);
			default: return String(e);
		}
		return "";
	}
	formatCurrency(e, t, n) {
		var r;
		let i = n != null && n.currencyPropName ? z(t, n.currencyPropName) : t == null ? void 0 : t.currency;
		return I.getInstance().currency(e, (r = n == null ? void 0 : n.options) == null ? i : r, n == null ? void 0 : n.numberOnly);
	}
	formatDate(e, t) {
		return I.getInstance().date(e, t == null ? void 0 : t.type, t == null ? void 0 : t.options, t == null ? void 0 : t.hour24);
	}
	formatName(e, t) {
		var n, r, i;
		let a = z(e, (n = t == null ? void 0 : t.lastPropName) == null ? "lastName" : n), o = z(e, (r = t == null ? void 0 : t.firstPropName) == null ? "firstName" : r), s = z(e, (i = t == null ? void 0 : t.surname) == null ? "surname" : i);
		return a && o ? I.getInstance().fullName(a, o, s, t == null ? void 0 : t.short) : "";
	}
	formatNumber(e, t) {
		return I.getInstance().number(e, t == null ? void 0 : t.options);
	}
	formatPlural(e, t) {
		return t && t.words ? I.getInstance().plural(e, t == null ? void 0 : t.words, t == null ? void 0 : t.options, t == null ? void 0 : t.optionsNumber) : e;
	}
	formatUnit(e, t) {
		return t && t.unit ? I.getInstance().unit(e, t.unit) : e;
	}
}, et = "f", tt = class e {
	constructor(e = E.getLocation()) {
		this.code = e;
	}
	get(t = this.code) {
		let n = E.find(t);
		if (n) {
			var r;
			let t = this.getCountry(n);
			return {
				language: this.getLanguage(n),
				country: t,
				standard: n.standard,
				icon: (r = e.flags) == null ? void 0 : r[n.country],
				label: t,
				value: n.country
			};
		}
	}
	getFlag(e = this.code) {
		var t;
		return (t = this.get(e)) == null ? void 0 : t.icon;
	}
	getList(e) {
		return r(this.getCodes(e), (e) => this.get(e));
	}
	getNational(t) {
		return r(this.getList(t), (t) => {
			let n = new e(t.standard).get(t.standard);
			return {
				...t,
				description: n == null ? void 0 : n.country,
				nationalLanguage: n == null ? void 0 : n.language,
				nationalCountry: n == null ? void 0 : n.country
			};
		});
	}
	setCode(e) {
		return this.code = e, this;
	}
	getLocation() {
		return new I(this.code);
	}
	getCodes(t) {
		return t == null ? Object.keys(e.flags) : t;
	}
	getLanguage(e) {
		return this.getLocation().languageName(e.language);
	}
	getCountry(e) {
		return this.getLocation().countryName(e.country);
	}
};
S(tt, "flags", {
	AD: "f-ad",
	AE: "f-ae",
	AF: "f-af",
	AG: "f-ag",
	AI: "f-ai",
	AL: "f-al",
	AM: "f-am",
	AN: "f-an",
	AO: "f-ao",
	AQ: "f-aq",
	AR: "f-ar",
	AS: "f-as",
	AT: "f-at",
	AU: "f-au",
	AW: "f-aw",
	AZ: "f-az",
	BA: "f-ba",
	BB: "f-bb",
	BD: "f-bd",
	BE: "f-be",
	BF: "f-bf",
	BG: "f-bg",
	BH: "f-bh",
	BI: "f-bi",
	BJ: "f-bj",
	BL: "f-bl",
	BM: "f-bm",
	BN: "f-bn",
	BO: "f-bo",
	BR: "f-br",
	BS: "f-bs",
	BT: "f-bt",
	BW: "f-bw",
	BY: "f-by",
	BZ: "f-bz",
	CA: "f-ca",
	CC: "f-cc",
	CD: "f-cd",
	CF: "f-cf",
	CG: "f-cg",
	CH: "f-ch",
	CI: "f-ci",
	CK: "f-ck",
	CL: "f-cl",
	CM: "f-cm",
	CN: "f-cn",
	CO: "f-co",
	CR: "f-cr",
	CU: "f-cu",
	CV: "f-cv",
	CW: "f-cw",
	CX: "f-cx",
	CY: "f-cy",
	CZ: "f-cz",
	DE: "f-de",
	DJ: "f-dj",
	DK: "f-dk",
	DM: "f-dm",
	DZ: "f-dz",
	EC: "f-ec",
	EE: "f-ee",
	EG: "f-eg",
	EH: "f-eh",
	ER: "f-er",
	ES: "f-es",
	ET: "f-et",
	FI: "f-fi",
	FJ: "f-fj",
	FK: "f-fk",
	FM: "f-fm",
	FO: "f-fo",
	FR: "f-fr",
	GA: "f-ga",
	GB: "f-gb",
	GD: "f-gd",
	GE: "f-ge",
	GF: "f-gf",
	GG: "f-gg",
	GH: "f-gh",
	GI: "f-gi",
	GL: "f-gl",
	GM: "f-gm",
	GN: "f-gn",
	GQ: "f-gq",
	GR: "f-gr",
	GT: "f-gt",
	GU: "f-gu",
	GW: "f-gw",
	GY: "f-gy",
	HK: "f-hk",
	HN: "f-hn",
	HR: "f-hr",
	HT: "f-ht",
	HU: "f-hu",
	ID: "f-id",
	IE: "f-ie",
	IL: "f-il",
	IM: "f-im",
	IN: "f-in",
	IO: "f-io",
	IQ: "f-iq",
	IR: "f-ir",
	IS: "f-is",
	IT: "f-it",
	JE: "f-je",
	JM: "f-jm",
	JO: "f-jo",
	JP: "f-jp",
	KE: "f-ke",
	KG: "f-kg",
	KH: "f-kh",
	KI: "f-ki",
	KM: "f-km",
	KN: "f-kn",
	KP: "f-kp",
	KR: "f-kr",
	KW: "f-kw",
	KY: "f-ky",
	KZ: "f-kz",
	LA: "f-la",
	LB: "f-lb",
	LC: "f-lc",
	LI: "f-li",
	LK: "f-lk",
	LR: "f-lr",
	LS: "f-ls",
	LT: "f-lt",
	LU: "f-lu",
	LV: "f-lv",
	LY: "f-ly",
	MA: "f-ma",
	MC: "f-mc",
	MD: "f-md",
	ME: "f-me",
	MF: "f-mf",
	MG: "f-mg",
	MH: "f-mh",
	MK: "f-mk",
	ML: "f-ml",
	MM: "f-mm",
	MN: "f-mn",
	MO: "f-mo",
	MP: "f-mp",
	MQ: "f-mq",
	MR: "f-mr",
	MS: "f-ms",
	MT: "f-mt",
	MU: "f-mu",
	MV: "f-mv",
	MW: "f-mw",
	MX: "f-mx",
	MY: "f-my",
	MZ: "f-mz",
	NA: "f-na",
	NC: "f-nc",
	NE: "f-ne",
	NF: "f-nf",
	NG: "f-ng",
	NI: "f-ni",
	NL: "f-nl",
	NO: "f-no",
	NP: "f-np",
	NR: "f-nr",
	NU: "f-nu",
	NZ: "f-nz",
	OM: "f-om",
	PA: "f-pa",
	PE: "f-pe",
	PF: "f-pf",
	PG: "f-pg",
	PH: "f-ph",
	PK: "f-pk",
	PL: "f-pl",
	PM: "f-pm",
	PN: "f-pn",
	PR: "f-pr",
	PS: "f-ps",
	PT: "f-pt",
	PW: "f-pw",
	PY: "f-py",
	QA: "f-qa",
	RE: "f-re",
	RO: "f-ro",
	RS: "f-rs",
	RU: "f-ru",
	RW: "f-rw",
	SA: "f-sa",
	SB: "f-sb",
	SC: "f-sc",
	SD: "f-sd",
	SE: "f-se",
	SG: "f-sg",
	SH: "f-sh",
	SI: "f-si",
	SJ: "f-sj",
	SK: "f-sk",
	SL: "f-sl",
	SM: "f-sm",
	SN: "f-sn",
	SO: "f-so",
	SR: "f-sr",
	SS: "f-ss",
	ST: "f-st",
	SV: "f-sv",
	SX: "f-sx",
	SY: "f-sy",
	SZ: "f-sz",
	TC: "f-tc",
	TD: "f-td",
	TG: "f-tg",
	TH: "f-th",
	TJ: "f-tj",
	TK: "f-tk",
	TL: "f-tl",
	TM: "f-tm",
	TN: "f-tn",
	TO: "f-to",
	TR: "f-tr",
	TT: "f-tt",
	TV: "f-tv",
	TW: "f-tw",
	TZ: "f-tz",
	UA: "f-ua",
	UG: "f-ug",
	US: "f-us",
	UY: "f-uy",
	UZ: "f-uz",
	VA: "f-va",
	VC: "f-vc",
	VE: "f-ve",
	VG: "f-vg",
	VI: "f-vi",
	VN: "f-vn",
	VU: "f-vu",
	WF: "f-wf",
	WS: "f-ws",
	YE: "f-ye",
	YT: "f-yt",
	ZA: "f-za",
	ZM: "f-zm",
	ZW: "f-zw"
});
//#endregion
//#region src/classes/GeoPhone.ts
var nt = class {
	static get(e) {
		return this.getList().find((t) => e === t.value);
	}
	static getByPhone(e) {
		let t = this.toNumber(e), n = [""], r = this.getMap(), i;
		for (let e of t) if (n[n.length - 1] += e, e in r) {
			var a, o, s;
			(a = r[e]) != null && a.value && (i = r[e], n.push("")), r = (o = (s = r[e]) == null ? void 0 : s.next) == null ? {} : o;
		} else break;
		return i ? (n.pop(), {
			item: i,
			phone: t.join("").slice(n.join("").length)
		}) : {
			item: void 0,
			phone: t.join("")
		};
	}
	static getByCode(e) {
		let t = this.get(e);
		if (t) {
			var n;
			return (n = this.getByPhone(t.phone.toString())) == null ? void 0 : n.item;
		}
	}
	static getList() {
		var e;
		return this.list || this.makeList(), (e = this.list) == null ? [] : e;
	}
	static getMap() {
		var e;
		return this.map || this.makeMap(), (e = this.map) == null ? {} : e;
	}
	static toMask(e, t) {
		if (c(e) && Array.isArray(t) && t.length > 0) {
			let n = this.removeZero(e), r = n.length;
			for (let e of t) if (this.getUnnecessaryLength(e) === r) return this.toStandard(n, e);
		}
	}
	static removeZero(e) {
		return e.match(/^0/) ? e.replace(/^0/, "") : e.match(/^89/) ? e.replace(/^8/, "") : e;
	}
	static getWithinSymbol(e) {
		switch (e) {
			case 4:
			case "4": return "$";
			case 8:
			case "8": return "~";
		}
		return "=";
	}
	static getUnnecessaryLength(e) {
		var t, n;
		return (t = (n = e.match(/\*/g)) == null ? void 0 : n.length) == null ? 0 : t;
	}
	static makeList() {
		this.list = r(E.getList(), (e) => {
			if (e != null && e.phoneMask) return {
				phone: (e == null ? void 0 : e.phoneCode) && Number(e.phoneCode.replace(/[^0-9]+/, "")) || void 0,
				within: (e == null ? void 0 : e.phoneWithin) || 0,
				mask: O(e.phoneMask),
				value: e.country
			};
		}).sort((e, t) => e.phone - t.phone);
	}
	static makeMap() {
		this.map = {}, this.getList().forEach((e) => {
			e.mask.forEach((t) => {
				let n = this.map, r;
				if (this.toNumber(t).forEach((e) => {
					var t;
					e in n || (n[e] = {
						items: [],
						info: void 0,
						value: void 0,
						mask: [],
						maskFull: [],
						next: {}
					}), r = n[e], n = (t = r == null ? void 0 : r.next) == null ? {} : t;
				}), r) {
					r.value === void 0 && (r.info = e, r.value = e.value);
					let n = this.toWithin(t, e.within);
					r.mask.push(n), r.maskFull.push(n.replace(/\d/gi, "*")), r.items.push(e);
				}
			});
		});
	}
	static toNumber(e) {
		return e.replace(/\D+/gi, "").split("");
	}
	static toStandard(e, t) {
		let n = 0;
		return t.replace(/\*/gi, () => String(e[n++]));
	}
	static toWithin(e, t) {
		return e.replace(/\*/, this.getWithinSymbol(t));
	}
};
S(nt, "list", void 0), S(nt, "map", void 0);
//#endregion
//#region src/functions/copyObjectLite.ts
function rt(e, t) {
	return Object.assign({}, e, t);
}
//#endregion
//#region src/classes/Global.ts
var V, it = class {
	static get(e) {
		return V && (V == null ? void 0 : V[e]);
	}
	static add(e) {
		V === void 0 && (V = rt(e));
	}
}, at, H = class {
	static get(e, t) {
		return !(e in this.hash) && t && this.set(e, t), this.hash[e];
	}
	static set(e, t) {
		var n;
		let r = b(t);
		r !== ((n = this.hash) == null ? void 0 : n[e]) && (this.hash[e] = r, this.update());
	}
	static addWatch(e, t) {
		if (e in this.watch) {
			var n;
			(n = this.watch[e]) == null || n.push(t);
		} else this.watch[e] = [t];
	}
	static removeWatch(e, t) {
		var n;
		let r = (n = this.watch) == null ? void 0 : n[e];
		r && (this.watch[e] = r.filter((e) => e !== t));
	}
	static reload() {
		if (!this.block) {
			let e = this.getLocation();
			this.makeWatch(e), this.hash = e;
		}
	}
	static getLocation() {
		let e = {};
		return location.hash.replace(/([\w-]+)[:=]([^;]+)/gi, (...t) => (e[String(t[1])] = We(t[2]), "")), e;
	}
	static update() {
		this.block = !0, history.replaceState(null, "", `#${o(this.hash, "=", ";")}`), requestAnimationFrame(() => {
			this.block = !1;
		});
	}
	static makeWatch(e) {
		r(this.watch, (t, n) => {
			var r;
			((r = this.hash) == null ? void 0 : r[n]) !== (e == null ? void 0 : e[n]) && t.forEach((t) => t(e[n]));
		});
	}
};
at = H, S(H, "hash", {}), S(H, "watch", {}), S(H, "block", !1), p() && (at.reload(), addEventListener("hashchange", () => at.reload()));
//#endregion
//#region src/classes/Icons.ts
var ot, st = "__UI_ICON", ct = 320, lt = "--LOAD--", U = class {
	static is(e) {
		return e in this.icons || this.getName(e) in this.icons;
	}
	static async get(e, t = "", n = 1e3 * 60 * 3) {
		var r, i, a, o;
		let s = (r = (i = (a = this.icons) == null ? void 0 : a[this.getName(e)]) == null ? (o = this.icons) == null ? void 0 : o[e] : i) == null ? `${e.replace(/^@/, t == null ? this.url : t)}.svg` : r;
		return typeof s == "string" ? s === lt && n > 0 ? (await this.wait(), this.get(e, t, n - ct)) : s : y(s) ? await s() : await s;
	}
	static getNameList() {
		return r(this.icons, (e, t) => t.replace(/^@/, ""));
	}
	static getUrlGlobal() {
		return `${M.isLocalhost(), ""}${this.url}`;
	}
	static add(e, t) {
		this.icons[this.getName(e)] = t;
	}
	static addLoad(e) {
		this.icons[this.getName(e)] = lt;
	}
	static addGlobal(e, t) {
		this.icons[this.getName(e)] = `${this.getUrlGlobal()}${t}`;
	}
	static addByList(e) {
		r(e, (e, t) => this.add(t, e));
	}
	static setUrl(e) {
		this.url = e;
	}
	static setConfig(e) {
		e.url && this.setUrl(e.url), e.list && this.addByList(e.list);
	}
	static getName(e) {
		return `@${e}`;
	}
	static wait() {
		return new Promise((e) => setTimeout(() => e(), ct));
	}
};
ot = U, S(U, "icons", {}), S(U, "url", "/icons/"), p() && (st in window || (window[st] = {}), ot.icons = window[st]);
//#endregion
//#region src/functions/getElementItem.ts
function ut(e, t, n) {
	var r, i;
	return (r = (i = D(e)) == null ? void 0 : i[t]) == null ? n : r;
}
//#endregion
//#region src/functions/setElementItem.ts
function dt(e, n, i) {
	let a = D(e);
	if (a) {
		let e = ut(a, n);
		if (t(e) && t(i)) r(i, (t, n) => {
			e[n] = b(t);
		});
		else {
			let e = b(i);
			!(n in a) && typeof e == "string" ? a.setAttribute(n.toString(), e) : a[n] = e;
		}
	}
	return a;
}
//#endregion
//#region src/functions/createElement.ts
function W(e, t = "div", i, a) {
	if (!p()) return;
	let o = document.createElement(t);
	return typeof i == "function" ? i(o) : n(i) && r(i, (e, t) => {
		dt(o, t, e);
	}), e == null || e.insertBefore(o, a == null ? null : a), o;
}
//#endregion
//#region src/functions/encodeAttribute.ts
var ft = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
function G(e) {
	return String(e).replace(/[&<>"']/g, (e) => {
		var t;
		return (t = ft == null ? void 0 : ft[e]) == null ? e : t;
	});
}
//#endregion
//#region src/classes/MetaManager.ts
var K = class {
	constructor(e, t = !1) {
		S(this, "items", {}), this.listMeta = e, this.isProperty = t, this.update();
	}
	getListMeta() {
		return this.listMeta;
	}
	get(e) {
		var t;
		return (t = this.items[e]) == null ? "" : t;
	}
	getItems() {
		return this.items;
	}
	html() {
		return r(this.listMeta, (e) => this.toHtmlString(e)).join("");
	}
	set(e, t) {
		return this.setItem(e, t).setMeta(e), this;
	}
	setByList(e) {
		return r(e, (e, t) => this.set(t, String(e))), this;
	}
	getAttributeName() {
		return this.isProperty ? "property" : "name";
	}
	findMetaElement(e) {
		if (!p()) return;
		let t = `meta[${this.getAttributeName()}="${e}"]`;
		return document.querySelector(t) || void 0;
	}
	setItem(e, t) {
		return this.items[e] = t, this;
	}
	setMeta(e) {
		var t;
		let n = this.findMetaElement(e), r = (t = this.items[e]) == null ? "" : t;
		if (n) n.content = r;
		else if (p()) {
			let t = { content: r };
			this.isProperty ? t.property = e : t.name = e, W(document.head, "meta", t);
		}
		return this;
	}
	toHtmlString(e) {
		var t;
		let n = G((t = this.items[e]) == null ? "" : t);
		return n ? `<meta ${this.getAttributeName()}="${e}" content="${n}">` : "";
	}
	update() {
		return this.listMeta.forEach((e) => {
			var t, n;
			this.items[e] = (t = (n = this.findMetaElement(e)) == null ? void 0 : n.content) == null ? "" : t;
		}), this;
	}
}, q = /* @__PURE__ */ function(e) {
	return e.description = "description", e.keywords = "keywords", e.canonical = "canonical", e.robots = "robots", e.author = "author", e;
}({}), pt = /* @__PURE__ */ function(e) {
	return e.indexFollow = "index, follow", e.noIndexFollow = "noindex, follow", e.indexNoFollow = "index, nofollow", e.noIndexNoFollow = "noindex, nofollow", e.noArchive = "noarchive", e.noSnippet = "nosnippet", e.noImageIndex = "noimageindex", e.images = "images", e.noTranslate = "notranslate", e.noPreview = "nopreview", e.textOnly = "textonly", e.noIndexSubpages = "noindex, noarchive", e.none = "none", e;
}({}), J = /* @__PURE__ */ function(e) {
	return e.title = "og:title", e.type = "og:type", e.url = "og:url", e.image = "og:image", e.description = "og:description", e.locale = "og:locale", e.siteName = "og:site_name", e.localeAlternate = "og:locale:alternate", e.imageUrl = "og:image:url", e.imageSecureUrl = "og:image:secure_url", e.imageType = "og:image:type", e.imageWidth = "og:image:width", e.imageHeight = "og:image:height", e.imageAlt = "og:image:alt", e.video = "og:video", e.videoUrl = "og:video:url", e.videoSecureUrl = "og:video:secure_url", e.videoType = "og:video:type", e.videoWidth = "og:video:width", e.videoHeight = "og:video:height", e.audio = "og:audio", e.audioSecureUrl = "og:audio:secure_url", e.audioType = "og:audio:type", e.articlePublishedTime = "article:published_time", e.articleModifiedTime = "article:modified_time", e.articleExpirationTime = "article:expiration_time", e.articleAuthor = "article:author", e.articleSection = "article:section", e.articleTag = "article:tag", e.bookAuthor = "book:author", e.bookIsbn = "book:isbn", e.bookReleaseDate = "book:release_date", e.bookTag = "book:tag", e.musicDuration = "music:duration", e.musicAlbum = "music:album", e.musicAlbumDisc = "music:album:disc", e.musicAlbumTrack = "music:album:track", e.musicMusician = "music:musician", e.musicSong = "music:song", e.musicSongDisc = "music:song:disc", e.musicSongTrack = "music:song:track", e.musicReleaseDate = "music:release_date", e.musicCreator = "music:creator", e.videoActor = "video:actor", e.videoActorRole = "video:actor:role", e.videoDirector = "video:director", e.videoWriter = "video:writer", e.videoDuration = "video:duration", e.videoReleaseDate = "video:release_date", e.videoTag = "video:tag", e.videoSeries = "video:series", e.profileFirstName = "profile:first_name", e.profileLastName = "profile:last_name", e.profileUsername = "profile:username", e.profileGender = "profile:gender", e.productBrand = "product:brand", e.productAvailability = "product:availability", e.productCondition = "product:condition", e.productPriceAmount = "product:price:amount", e.productPriceCurrency = "product:price:currency", e.productRetailerItemId = "product:retailer_item_id", e.productCategory = "product:category", e.productEan = "product:ean", e.productIsbn = "product:isbn", e.productMfrPartNo = "product:mfr_part_no", e.productUpc = "product:upc", e.productWeightValue = "product:weight:value", e.productWeightUnits = "product:weight:units", e.productColor = "product:color", e.productMaterial = "product:material", e.productPattern = "product:pattern", e.productAgeGroup = "product:age_group", e.productGender = "product:gender", e;
}({}), mt = /* @__PURE__ */ function(e) {
	return e.website = "website", e.article = "article", e.video = "video.other", e.videoTvShow = "video.tv_show", e.videoEpisode = "video.episode", e.videoMovie = "video.movie", e.musicAlbum = "music.album", e.musicPlaylist = "music.playlist", e.musicSong = "music.song", e.musicRadioStation = "music.radio_station", e.app = "app", e.product = "product", e.business = "business.business", e.place = "place", e.event = "event", e.profile = "profile", e.book = "book", e;
}({}), ht = /* @__PURE__ */ function(e) {
	return e.inStock = "in stock", e.outOfStock = "out of stock", e.preorder = "preorder", e.backorder = "backorder", e.discontinued = "discontinued", e.pending = "pending", e;
}({}), gt = /* @__PURE__ */ function(e) {
	return e.new = "new", e.used = "used", e.refurbished = "refurbished", e;
}({}), _t = /* @__PURE__ */ function(e) {
	return e.newborn = "newborn", e.infant = "infant", e.toddler = "toddler", e.kids = "kids", e.adult = "adult", e;
}({}), vt = /* @__PURE__ */ function(e) {
	return e.female = "female", e.male = "male", e.unisex = "unisex", e;
}({}), Y = /* @__PURE__ */ function(e) {
	return e.card = "twitter:card", e.site = "twitter:site", e.creator = "twitter:creator", e.url = "twitter:url", e.title = "twitter:title", e.description = "twitter:description", e.image = "twitter:image", e.imageAlt = "twitter:image:alt", e.imageSrc = "twitter:image:src", e.imageWidth = "twitter:image:width", e.imageHeight = "twitter:image:height", e.label1 = "twitter:label1", e.data1 = "twitter:data1", e.label2 = "twitter:label2", e.data2 = "twitter:data2", e.appNameIphone = "twitter:app:name:iphone", e.appIdIphone = "twitter:app:id:iphone", e.appUrlIphone = "twitter:app:url:iphone", e.appNameIpad = "twitter:app:name:ipad", e.appIdIpad = "twitter:app:id:ipad", e.appUrlIpad = "twitter:app:url:ipad", e.appNameGooglePlay = "twitter:app:name:googleplay", e.appIdGooglePlay = "twitter:app:id:googleplay", e.appUrlGooglePlay = "twitter:app:url:googleplay", e.player = "twitter:player", e.playerWidth = "twitter:player:width", e.playerHeight = "twitter:player:height", e.playerStream = "twitter:player:stream", e.playerStreamContentType = "twitter:player:stream:content_type", e;
}({}), yt = /* @__PURE__ */ function(e) {
	return e.summary = "summary", e.summaryLargeImage = "summary_large_image", e.app = "app", e.player = "player", e.product = "product", e.gallery = "gallery", e.photo = "photo", e.leadGeneration = "lead_generation", e.audio = "audio", e.poll = "poll", e;
}({}), bt = class extends K {
	constructor() {
		super(Object.values(J), !0);
	}
	getTitle() {
		return this.get(J.title);
	}
	getType() {
		return this.get(J.type);
	}
	getUrl() {
		return this.get(J.url);
	}
	getImage() {
		return this.get(J.image);
	}
	getDescription() {
		return this.get(J.description);
	}
	getLocale() {
		return this.get(J.locale);
	}
	getSiteName() {
		return this.get(J.siteName);
	}
	setTitle(e) {
		return this.set(J.title, e);
	}
	setType(e) {
		return this.set(J.type, e);
	}
	setUrl(e) {
		return this.set(J.url, e);
	}
	setImage(e) {
		return this.set(J.image, e);
	}
	setDescription(e) {
		return this.set(J.description, e);
	}
	setLocale(e) {
		return this.set(J.locale, e);
	}
	setSiteName(e) {
		return this.set(J.siteName, e);
	}
}, xt = class extends K {
	constructor() {
		super(Object.values(Y));
	}
	getCard() {
		return this.get(Y.card);
	}
	getSite() {
		return this.get(Y.site);
	}
	getCreator() {
		return this.get(Y.creator);
	}
	getUrl() {
		return this.get(Y.url);
	}
	getTitle() {
		return this.get(Y.title);
	}
	getDescription() {
		return this.get(Y.description);
	}
	getImage() {
		return this.get(Y.image);
	}
	setCard(e) {
		return this.set(Y.card, e), this;
	}
	setSite(e) {
		return this.set(Y.site, e), this;
	}
	setCreator(e) {
		return this.set(Y.creator, e), this;
	}
	setUrl(e) {
		return this.set(Y.url, e), this;
	}
	setTitle(e) {
		return this.set(Y.title, e), this;
	}
	setDescription(e) {
		return this.set(Y.description, e), this;
	}
	setImage(e) {
		return this.set(Y.image, e), this;
	}
}, St = class extends K {
	constructor() {
		super(Object.values(q)), S(this, "suffix", void 0), S(this, "og", void 0), S(this, "twitter", void 0), this.og = new bt(), this.twitter = new xt();
	}
	getOg() {
		return this.og;
	}
	getTwitter() {
		return this.twitter;
	}
	getTitle() {
		return p() ? document.title.replace(this.getSuffix(), "").trim() : "";
	}
	getKeywords() {
		return this.get(q.keywords);
	}
	getDescription() {
		return this.get(q.description);
	}
	getImage() {
		return this.og.getImage();
	}
	getCanonical() {
		return this.get(q.canonical);
	}
	getRobots() {
		return this.get(q.robots);
	}
	getAuthor() {
		return this.get(q.author);
	}
	getSiteName() {
		return this.og.getSiteName();
	}
	getLocale() {
		return this.og.getLocale();
	}
	setTitle(e) {
		if (p()) {
			let t = c(e) ? `${e}${this.getSuffix()}` : this.suffix ? this.suffix : "";
			document.title = t, this.og.setTitle(t), this.twitter.setTitle(t);
		}
		return this;
	}
	setKeywords(e) {
		return this.set(q.keywords, O(e).join(", ")), this;
	}
	setDescription(e) {
		return this.set(q.description, e), this;
	}
	setImage(e) {
		return this.og.setImage(e), this.twitter.setImage(e), this;
	}
	setCanonical(e) {
		return this.set(q.canonical, e), this.og.setUrl(e), this.twitter.setUrl(e), this;
	}
	setRobots(e) {
		return this.set(q.robots, e), this;
	}
	setAuthor(e) {
		return this.set(q.author, e), this;
	}
	setSiteName(e) {
		return this.og.setSiteName(e), this.twitter.setSite(e), this;
	}
	setLocale(e) {
		return this.og.setLocale(e), this;
	}
	setSuffix(e) {
		this.suffix = e;
	}
	html() {
		return `${super.html()}${this.og.html()}${this.twitter.html()}`;
	}
	getSuffix() {
		return c(this.suffix) ? ` - ${this.suffix}` : "";
	}
}, X = class {
	static async is() {
		let e = await this.get();
		return e !== -1 && e <= 8;
	}
	static async get() {
		var e;
		let t = (e = this.storage.get()) == null ? -1 : e;
		if (!this.calculate && t === -1) {
			let e = await this.init();
			return this.storage.set(e), e;
		}
		return t;
	}
	static getStorage() {
		return this.storage;
	}
	static getCalculate() {
		return this.calculate;
	}
	static createElement() {
		return W(document.body, "div", (e) => {
			e.style.height = "24px", e.style.overflowY = "scroll", e.style.position = "fixed", e.style.width = "100%", W(e, "div", (e) => {
				e.style.height = "100px";
			});
		});
	}
	static init() {
		return new Promise((e) => {
			this.calculate = !0;
			let t = this.createElement();
			t ? requestAnimationFrame(() => {
				e(t.offsetWidth - t.clientWidth), t.remove(), this.calculate = !1;
			}) : e(0);
		});
	}
};
S(X, "storage", new T("scrollbar", !0)), S(X, "calculate", !1);
//#endregion
//#region src/functions/escapeExp.ts
function Z(e) {
	return String(e).replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
}
//#endregion
//#region src/functions/getSeparatingSearchExp.ts
function Ct(e, t = 128) {
	if (e instanceof RegExp) return e;
	if (!e || e.trim().length === 0 || e.length > t) return /^/;
	let n = String(e).replace(/\s+/g, " ").trim().split(" ").map(Z).join("|");
	return RegExp(`(${n})`, "ig");
}
//#endregion
//#region src/functions/addTagHighlightMatch.ts
var wt = `___HIGHLIGHT_START_${d(1e5, 999999)}___`, Tt = `___HIGHLIGHT_END_${d(1e5, 999999)}___`, Et = RegExp(`${wt}|${Tt}`, "g");
function Dt(e, t, n = "sys-highlight-match", r = !1) {
	let i = a(e);
	if (c(i) && c(t)) {
		let e = i.replace(Ct(t), `${wt}$1${Tt}`);
		return r && (e = G(e)), e.replace(Et, (e) => e === wt ? `<span class="${n}">` : "</span>");
	}
	return r ? G(i) : i;
}
//#endregion
//#region src/classes/SearchListData.ts
var Ot = class {
	constructor(e, t, n, r) {
		S(this, "listCache", void 0), this.list = e, this.columns = t, this.item = n, this.options = r;
	}
	is() {
		return !!(this.list && this.columns);
	}
	isList() {
		return !!this.list;
	}
	getList() {
		return this.list;
	}
	getColumns() {
		return this.columns;
	}
	getCache() {
		var e;
		return this.listCache || this.initCache(), (e = this.listCache) == null ? [] : e;
	}
	setList(e) {
		return this.list = e, this.resetCache(), this;
	}
	setColumns(e) {
		return this.columns = e, this.resetCache(), this;
	}
	findCacheItem(e) {
		return this.getCache().find((t) => t.item === e);
	}
	forEach(e) {
		let t = [];
		return this.isList() && this.getCache().forEach((n) => {
			let r = e(n.item, n.value);
			r && t.push(r);
		}), t;
	}
	toFormatItem(e, t) {
		let n = {};
		return this.columns && this.columns.forEach((r) => {
			let i = this.getColumnName(r), a = z(e, r);
			n[i] = c(a) && t ? this.addTag(a) : N(a);
		}), {
			...e,
			...n,
			searchActive: t
		};
	}
	getColumnName(e) {
		return e.replace(/\.([a-z0-9])/gi, (e, t) => t.toUpperCase()) + "Search";
	}
	addTag(e) {
		return Dt(N(e), this.item.get(), this.options.getClassName());
	}
	generateCache() {
		if (!this.isList()) return [];
		let e = [];
		for (let t of this.list) {
			let n = "";
			if (this.columns) for (let e of this.columns) {
				let r = z(t, e);
				c(r) && (n += ` ${N(r)}`);
			}
			e.push({
				item: t,
				value: n
			});
		}
		return e;
	}
	initCache() {
		this.listCache = this.generateCache();
	}
	resetCache() {
		this.listCache = void 0;
	}
}, kt = class {
	constructor(e, t) {
		this.value = e, this.options = t;
	}
	is() {
		return !!this.value;
	}
	isSearch() {
		return this.is() && this.value.length >= this.options.getLimit();
	}
	get() {
		var e;
		return (e = this.value) == null ? "" : e;
	}
	set(e) {
		return this.value = e, this;
	}
};
//#endregion
//#region src/functions/getExp.ts
function At(e, t = "ig", n = ":value") {
	let r = Z(e);
	return new RegExp(n.replace(/:value/g, r), t);
}
//#endregion
//#region src/functions/getExactSearchExp.ts
function jt(e) {
	return At(e, "i", "(:value)");
}
//#endregion
//#region src/functions/getSearchExp.ts
function Mt(e, t = 128) {
	if (!u(e) || e.trim().length === 0 || e.length > t) return /^/;
	let n = [];
	return a(e).split(" ").forEach((e) => {
		let t = Z(e).trim();
		c(t) && n.push(`(?=.*?${t})`);
	}), RegExp(`^${n.join("")}`, "i");
}
//#endregion
//#region src/classes/SearchListMatcher.ts
var Nt = class {
	constructor(e, t) {
		S(this, "matcher", void 0), this.item = e, this.options = t, this.initMatcher();
	}
	is() {
		return !!this.matcher;
	}
	isSelection(e) {
		return this.matcher ? this.matcher.test(e) : !1;
	}
	get() {
		return this.matcher;
	}
	update() {
		this.initMatcher();
	}
	initMatcher() {
		this.item.is() ? this.matcher = this.options.getFindExactMatch() ? jt(this.item.get()) : Mt(this.item.get()) : this.matcher = void 0;
	}
}, Pt = class {
	constructor(e) {
		this.options = e;
	}
	getOptions() {
		return this.options || {};
	}
	getLimit() {
		var e;
		return (e = this.getOptions().limit) == null ? 2 : e;
	}
	getReturnEverything() {
		var e;
		return (e = this.getOptions().returnEverything) == null ? !1 : e;
	}
	getDelay() {
		var e;
		return (e = this.getOptions().delay) == null ? 0 : e;
	}
	getFindExactMatch() {
		var e;
		return (e = this.getOptions().findExactMatch) == null ? !1 : e;
	}
	getClassName() {
		var e;
		return (e = this.getOptions().classSearchName) == null ? "sys-search-selection" : e;
	}
	setOptions(e) {
		return this.options = e, this;
	}
}, Ft = class {
	constructor(e, t, n, r) {
		S(this, "options", void 0), S(this, "item", void 0), S(this, "matcher", void 0), S(this, "data", void 0), S(this, "callbackToSelection", (e, t) => {
			if (this.matcher.isSelection(t)) return this.data.toFormatItem(e, !0);
			if (this.options.getReturnEverything()) return this.data.toFormatItem(e, !1);
		}), S(this, "callbackToNone", (e) => this.data.toFormatItem(e, !1)), this.options = new Pt(r), this.item = new kt(n, this.options), this.matcher = new Nt(this.item, this.options), this.data = new Ot(e, t, this.item, this.options);
	}
	getData() {
		return this.data;
	}
	getList() {
		return this.data.getList();
	}
	getColumns() {
		return this.data.getColumns();
	}
	getItem() {
		return this.item;
	}
	getValue() {
		return this.item.get();
	}
	getOptions() {
		return this.options;
	}
	setList(e) {
		return this.data.setList(e), this;
	}
	setColumns(e) {
		return this.data.setColumns(e), this;
	}
	setValue(e) {
		return this.item.get() === e ? this : (this.item.set(e), this.matcher.update(), this);
	}
	setOptions(e) {
		return this.options.setOptions(e), this.matcher.update(), this;
	}
	to() {
		if (this.item.isSearch()) return this.data.forEach(this.callbackToSelection);
		let e = this.data.getList();
		return e ? r(e, this.callbackToNone) : [];
	}
}, It = class e {
	static getInstance(t, n = "main") {
		return new e(t, n);
	}
	constructor(e, t = "main") {
		S(this, "callbacks", []), S(this, "loading", !1), this.name = e, this.group = t;
		let n = `${t}:${e}`;
		if (n in Lt) return Lt[n];
		Lt[n] = this;
	}
	isLoading() {
		return this.loading;
	}
	getName() {
		return this.name;
	}
	getLoading() {
		return this.loading;
	}
	addCallback(e, t) {
		return this.callbacks.push({
			callback: e,
			isOnce: t
		}), this;
	}
	removeCallback(e) {
		return this.callbacks = this.callbacks.filter((t) => t.callback !== e), this;
	}
	preparation() {
		return this.loading = !0, this;
	}
	async run(e) {
		this.loading = !1;
		for (let { callback: t, isOnce: n } of this.callbacks) await Pe(t, e), n && this.removeCallback(t);
		return this;
	}
}, Lt = {}, Rt = [
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
], zt = RegExp(`%(${Rt.join("|")})`, "g"), Bt = (e, t = {}) => {
	let r = String(e);
	return Array.isArray(t) && e.match(/%[a-z]/) && (r = r.replace(zt, (e, n) => {
		let r = Rt.indexOf(n);
		if (r !== -1) {
			var i;
			return String((i = t == null ? void 0 : t[r]) == null ? "" : i);
		}
		return e;
	})), n(t) && (r = r.replace(/[[{](.*?)[\]}](.*?)[[{]\/\1[\]}]/g, (e, n, r) => {
		if (n in t) {
			var i;
			return String((i = t[n]) == null ? "" : i).replace(/[[{]content[\]}]/g, () => r);
		}
		return e;
	}), r = r.replace(/[[{](.*?)[\]}]/g, (e, n) => {
		if (n in t) {
			var r;
			return String((r = t[n]) == null ? "" : r);
		}
		return e;
	})), r;
}, Vt = "global", Ht = 160, Ut = class {
	constructor(e, t = () => E.getLanguage(), n = () => E.getLocation()) {
		S(this, "files", {}), S(this, "data", {}), this.language = t, this.location = n, e && this.add(e);
	}
	isFile() {
		return Object.keys(this.files).length > 0 && this.getIndex() !== void 0;
	}
	getLocation() {
		return b(this.location);
	}
	getLanguage() {
		return b(this.language);
	}
	async getList() {
		let e = this.getIndex();
		if (e) {
			var t;
			return (t = this.getByData(e)) == null ? await this.getByFile(e) : t;
		}
	}
	add(e) {
		r(e, (e, t) => {
			y(e) && (this.files[t] = e);
		});
	}
	getIndex() {
		let e = this.getLocation();
		if (e in this.files) return e;
		let t = this.getLanguage();
		if (t in this.files) return t;
		if ("global" in this.files) return Vt;
	}
	getByData(e) {
		if (e in this.data) return this.data[e];
	}
	async getByFile(e) {
		if (e in this.files) {
			let t = await b(this.files[e]);
			return t && (this.data[e] = t), t;
		}
	}
}, Wt = class {
	constructor(e = "/api/translate", t = "list", n = new Ut()) {
		S(this, "data", {}), S(this, "cache", []), S(this, "resolveList", []), S(this, "timeout", void 0), S(this, "isReadApi", !0), this.url = e, this.propsName = t, this.files = n;
	}
	async get(e, t) {
		var n;
		let r = this.getText(e);
		return r ? this.replacement(r, t) : (M.isLocalhost() || await this.add(e), this.replacement((n = this.getText(e)) == null ? e : n));
	}
	getSync(e, t = !1, n) {
		let r = this.getText(e);
		return r ? this.replacement(r, n) : t ? " " : e;
	}
	getList(e) {
		return new Promise((t) => {
			let n = {}, r = 0;
			for (let i of e) {
				let a = Array.isArray(i) ? i[0] : i, o = Array.isArray(i) ? i.slice(1) : void 0;
				this.get(a, o).then((i) => {
					n[a] = i, ++r >= e.length && t(n);
				});
			}
		});
	}
	getListSync(e, t = !1) {
		let n = {};
		for (let r of e) {
			let e = Array.isArray(r) ? r[0] : r, i = Array.isArray(r) ? r.slice(1) : void 0;
			n[e] = this.getSync(e, t, i);
		}
		return n;
	}
	add(e) {
		return new Promise((t) => {
			let n = this.getNamesNone(e);
			n.length > 0 ? (this.cache.push(...n), this.resolveList.push(t), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
				this.timeout = void 0, this.make().then(() => {
					this.resolveList.forEach((e) => e()), this.resolveList = [];
				});
			}, 160)) : t();
		});
	}
	addSync(e) {
		r(e, (e, t) => {
			u(e) && c(e) && (this.data[this.getName(t)] = e);
		});
	}
	async addNormalOrSync(e) {
		if (c(e)) if (M.isLocalhost()) this.addSync(e);
		else {
			let t = Object.keys(e);
			t.length > 0 && await this.add(t);
		}
	}
	addSyncByLocation(e) {
		r(e, (e, t) => r(e, (e, n) => {
			let r = `${t}-${n}`;
			r in this.data || (this.data[r] = e);
		}));
	}
	addSyncByFile(e) {
		this.files.add(e);
	}
	setUrl(e) {
		return this.url = e, this;
	}
	setPropsName(e) {
		return this.propsName = e, this;
	}
	setReadApi(e) {
		return this.isReadApi = e, this;
	}
	hasName(e) {
		return this.getName(e) in this.data || this.getNameByLanguage(e) in this.data || this.getNameByGlobal(e) in this.data;
	}
	getText(e) {
		let t = this.getName(e);
		if (t in this.data) return this.data[t];
		let n = this.getNameByLanguage(e);
		if (n in this.data) return this.data[n];
		let r = this.getNameByGlobal(e);
		if (r in this.data) return this.data[r];
	}
	getName(e) {
		return `${this.files.getLocation()}-${e}`;
	}
	getNameByLanguage(e) {
		return `${this.files.getLanguage()}-${e}`;
	}
	getNameByGlobal(e) {
		return `${Vt}-${e}`;
	}
	getNamesNone(e) {
		let t = [];
		return O(e).forEach((e) => {
			e !== "__TRANSLATE_START__" && e !== "__TRANSLATE_END__" && !this.hasName(e) && t.push(e);
		}), t;
	}
	async getResponse() {
		let e = await M.get({
			api: !1,
			path: this.url,
			request: { [this.propsName]: this.cache },
			toData: !0,
			global: !0
		});
		return e == null ? {} : e;
	}
	replacement(e, t) {
		return t ? Bt(e, t) : e;
	}
	async make() {
		let e;
		this.files.isFile() ? e = await this.files.getList() : this.isReadApi && (e = await this.getResponse()), e && this.makeList(e);
	}
	makeList(e) {
		this.cache.forEach((t) => {
			var n;
			this.data[this.getName(t)] = (n = e == null ? void 0 : e[t]) == null ? "" : n;
		}), this.cache = [];
	}
}, Gt = class {
	static async get(e, t) {
		return this.item.get(e, t);
	}
	static getItem() {
		return this.item;
	}
	static getSync(e, t = !1, n) {
		return this.item.getSync(e, t, n);
	}
	static getList(e) {
		return this.item.getList(e);
	}
	static getListSync(e, t = !1) {
		return this.item.getListSync(e, t);
	}
	static async add(e) {
		await this.item.add(e);
	}
	static addSync(e) {
		this.item.addSync(e);
	}
	static async addNormalOrSync(e) {
		await this.item.addNormalOrSync(e);
	}
	static addSyncByLocation(e) {
		this.item.addSyncByLocation(e);
	}
	static addSyncByFile(e) {
		this.item.addSyncByFile(e);
	}
	static setUrl(e) {
		return this.item.setUrl(e), this;
	}
	static setPropsName(e) {
		return this.item.setPropsName(e), this;
	}
	static setReadApi(e) {
		return this.item.setReadApi(e), this;
	}
	static setConfig(e) {
		return e.url && this.item.setUrl(e.url), e.propsName && this.item.setPropsName(e.propsName), typeof e.readApi == "boolean" && this.item.setReadApi(e.readApi), this;
	}
};
S(Gt, "item", new Wt());
//#endregion
//#region src/functions/arrFill.ts
function Kt(e, t) {
	return Array(t).fill(e);
}
//#endregion
//#region src/functions/blobToBase64.ts
var qt = () => Jt() !== void 0, Jt = () => {
	var e;
	return (e = globalThis) == null ? void 0 : e.Buffer;
}, Yt = async (e) => new Promise((t, n) => {
	if (typeof FileReader < "u") {
		let r = new FileReader();
		r.onloadend = () => {
			if (!(r != null && r.result)) {
				n(/* @__PURE__ */ Error("Failed to read blob"));
				return;
			}
			t(r.result.replace(/^data:.*?,/, ""));
		}, r.onerror = n, r.readAsDataURL(e);
	} else n();
}), Xt = (e) => {
	var t;
	return ((t = globalThis) == null ? void 0 : t.Buffer).from(e).toString("base64");
};
async function Zt(e, t = !1) {
	let n = p() ? await Yt(e) : qt() ? Xt(await e.arrayBuffer()) : void 0;
	if (n) return t ? n : `data:${e.type};base64,${n}`;
}
//#endregion
//#region src/functions/capitalize.ts
function Qt(e, t = !1) {
	let n = String(e);
	return n.length > 0 ? t ? n.charAt(0).toLocaleUpperCase(E.getLocation()) + n.slice(1) : n.charAt(0).toUpperCase() + n.slice(1) : n;
}
//#endregion
//#region src/functions/copyObject.ts
function Q(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region src/functions/domQuerySelector.ts
function $t(e) {
	if (p()) {
		var t;
		return (t = document.querySelector(e)) == null ? void 0 : t;
	}
}
//#endregion
//#region src/functions/domQuerySelectorAll.ts
function en(e) {
	if (p()) return document.querySelectorAll(e);
}
//#endregion
//#region src/functions/getElementImage.ts
function tn(e) {
	return u(e) ? W(void 0, "img", { src: e }) : e;
}
//#endregion
//#region src/functions/resizeImageByMax.ts
function nn(e, t = "auto") {
	switch (t) {
		case "auto": return e.naturalWidth >= e.naturalHeight;
		case "width": return !0;
		case "height": return !1;
	}
}
function rn(e, t, n = "auto", r) {
	let i = tn(e);
	if (p() && i && i.naturalWidth && i.naturalHeight && (i.naturalWidth > t && (n === "auto" || n === "width") || i.naturalHeight > t && (n === "auto" || n === "height"))) {
		var a;
		let e = nn(i, n), o = (a = document.createElement("canvas")) == null ? void 0 : a.getContext("2d");
		if (o) return o.canvas.width = e ? t : i.naturalWidth / i.naturalHeight * t, o.canvas.height = e ? i.naturalHeight / i.naturalWidth * t : t, o.drawImage(i, 0, 0, o.canvas.width, o.canvas.height), o.canvas.toDataURL(r);
	}
}
//#endregion
//#region src/functions/ensureMaxSize.ts
async function an(e, t = .56, n = "image/jpeg") {
	return new Promise((r) => {
		if (!p()) {
			r("");
			return;
		}
		let i = new Blob([e], { type: n }), a = URL.createObjectURL(i), o = tn(a);
		o ? o.onload = () => {
			let e = rn(o, t * o.naturalWidth, "width", n);
			r(e == null ? "" : e), URL.revokeObjectURL(a);
		} : Zt(i).then((e) => r(String(e == null ? "" : e)));
	});
}
//#endregion
//#region src/functions/eventStopPropagation.ts
function on(e) {
	e.preventDefault(), e.stopPropagation();
}
//#endregion
//#region src/functions/frame.ts
function sn(e, t, n) {
	let r = () => {
		e(), p() && t != null && t() ? sn(e, t, n) : n == null || n();
	};
	p() ? requestAnimationFrame(r) : r();
}
//#endregion
//#region src/functions/getArrayHighlightMatch.ts
function cn(e, t) {
	let n = a(e);
	if (c(n) && c(t)) {
		let e = [], r = Ct(t), i = 0, a;
		for (; (a = r.exec(n)) !== null && a.index !== r.lastIndex;) a.index > i && e.push({
			text: n.substring(i, a.index),
			isMatch: !1
		}), e.push({
			text: a[0],
			isMatch: !0
		}), i = r.lastIndex;
		return i < n.length && e.push({
			text: n.substring(i),
			isMatch: !1
		}), e;
	}
	return [{
		text: n,
		isMatch: !1
	}];
}
//#endregion
//#region src/functions/getAttributes.ts
function ln(e) {
	let t = {}, n = D(e);
	if (n) for (let e of n.attributes) {
		var r;
		t[e.name] = (r = (e == null ? void 0 : e.value) || (e == null ? void 0 : e.textContent)) == null ? void 0 : r;
	}
	return t;
}
//#endregion
//#region src/functions/getClipboardData.ts
async function un(e) {
	if (p()) {
		var t, n;
		return (t = e == null || (n = e.clipboardData) == null ? void 0 : n.getData("text")) == null ? await navigator.clipboard.readText() || "" : t;
	}
	return "";
}
//#endregion
//#region src/functions/getCurrentDate.ts
function dn(e = "datetime") {
	return new Ze(void 0, e).standard();
}
//#endregion
//#region src/functions/getCurrentTime.ts
function fn() {
	return Date.now();
}
//#endregion
//#region src/functions/getElementId.ts
var pn, mn = () => {
	let e = pn == null ? void 0 : pn();
	if (e) return `id-server-${e}`;
	let t = w.get("__dxt_getElementId__", () => ({ id: 1e5 }));
	return `id-${t.id++}`;
};
function hn(e, t) {
	if (e) {
		let n = D(e);
		if (n) return c(n.id) || n.setAttribute("id", mn()), t ? `#${n.id}${t}`.trim() : n.id;
	}
	return mn();
}
function gn(e) {
	pn || (pn = e);
}
//#endregion
//#region src/functions/getKey.ts
function _n(e) {
	var t, n, r;
	return (t = (n = e == null ? void 0 : e.key) == null ? e == null ? void 0 : e.code : n) == null ? e == null || (r = e.keyCode) == null ? void 0 : r.toString() : t;
}
//#endregion
//#region src/functions/getLengthOfAllArray.ts
function vn(e) {
	return r(e, (e) => {
		var t;
		return (t = e == null ? void 0 : e.length) == null ? 0 : t;
	});
}
//#endregion
//#region src/functions/getMaxLengthAllArray.ts
function yn(e) {
	if (!c(e)) return 0;
	let t = vn(e);
	return t.length > 1e4 ? t.reduce((e, t) => Math.max(e, t)) : Math.max(...t);
}
//#endregion
//#region src/functions/getMinLengthAllArray.ts
function bn(e) {
	if (!c(e)) return 0;
	let t = vn(e);
	return t.length > 1e4 ? t.reduce((e, t) => Math.min(e, t)) : Math.min(...t);
}
//#endregion
//#region src/functions/getMouseClientX.ts
function xn(e) {
	var t, n;
	return (e == null ? void 0 : e.clientX) || (e == null || (t = e.targetTouches) == null || (t = t[0]) == null ? void 0 : t.clientX) || (e == null || (n = e.touches) == null || (n = n[0]) == null ? void 0 : n.clientX) || 0;
}
//#endregion
//#region src/functions/getMouseClientY.ts
function Sn(e) {
	var t, n;
	return (e == null ? void 0 : e.clientY) || (e == null || (t = e.targetTouches) == null || (t = t[0]) == null ? void 0 : t.clientY) || (e == null || (n = e.touches) == null || (n = n[0]) == null ? void 0 : n.clientY) || 0;
}
//#endregion
//#region src/functions/getMouseClient.ts
function Cn(e) {
	return {
		x: xn(e),
		y: Sn(e)
	};
}
//#endregion
//#region src/functions/getObjectByKeys.ts
function wn(e, t) {
	let r = {};
	return n(e) && t.forEach((t) => {
		t in e && e[t] !== void 0 && (r[t] = e[t]);
	}), r;
}
//#endregion
//#region src/functions/getObjectNoUndefined.ts
function Tn(e, t = void 0) {
	let n = {};
	return r(e, (e, r) => {
		e !== t && (n[r] = e);
	}), n;
}
//#endregion
//#region src/functions/getObjectOrNone.ts
function En(e) {
	return n(e) ? e : {};
}
//#endregion
//#region src/functions/getOnlyText.ts
function Dn(e) {
	return N(e).replace(/[^\p{L}\p{N}\s]+/gu, "").trim();
}
//#endregion
//#region src/functions/strFill.ts
function On(e, t) {
	return Kt(e, t).join("");
}
//#endregion
//#region src/functions/getRandomText.ts
function kn(e, t, n = "#", r = 2, i = 12) {
	let a = d(e, t), o = [];
	for (let e = 0; e < a; e++) o.push(On(n, d(r, i)));
	return o.join(" ");
}
//#endregion
//#region src/functions/getStepPercent.ts
function An(e, t) {
	let n = e == null ? 0 : e;
	return t > n ? 100 / (t - n) : 0;
}
//#endregion
//#region src/functions/getStepValue.ts
function jn(e, t) {
	let n = e == null ? 0 : e;
	return t > n ? (t - n) / 100 : 0;
}
//#endregion
//#region src/functions/goScroll.ts
var Mn = 0;
function Nn(e, t, n) {
	if (!p()) return;
	let r = t == null ? void 0 : t.closest(e);
	if (t && r && r.scrollHeight !== r.offsetHeight) {
		let e = r.getBoundingClientRect(), i = t.getBoundingClientRect();
		if (n) {
			let a = n.getBoundingClientRect();
			r.scrollTop = t.offsetTop - (a.top - e.top) - (a.height / 2 - i.height / 2), r.scrollTop + r.offsetHeight < t.offsetTop + t.offsetHeight && (r.scrollTop = t.offsetTop + t.offsetHeight - r.offsetHeight);
		} else r.scrollTop > t.offsetTop ? r.scrollTop = i.top - e.top - Mn : r.scrollTop + r.offsetHeight < t.offsetTop + t.offsetHeight && (r.scrollTop = i.top - e.top + i.height - e.height + Mn);
	}
}
//#endregion
//#region src/functions/goScrollSmooth.ts
function Pn(e, t, n = 0) {
	if (!p()) return;
	let r = (t == null ? void 0 : t.behavior) || "smooth";
	if ("scrollIntoView" in e && !n) {
		e.scrollIntoView({
			behavior: r,
			block: (t == null ? void 0 : t.block) || "start",
			inline: (t == null ? void 0 : t.inline) || "start"
		});
		return;
	}
	if ("getBoundingClientRect" in e && "scrollTo" in window) {
		var i;
		let t = (((i = window) == null ? void 0 : i.scrollY) || window.pageYOffset) + e.getBoundingClientRect().top - n;
		window.scrollTo({
			top: t,
			behavior: r
		});
	}
}
//#endregion
//#region src/functions/goScrollTo.ts
function Fn(e, t, n = "smooth") {
	if (!p() || !e || !t) return;
	let r = e.getBoundingClientRect(), i = t.getBoundingClientRect();
	e.scrollBy({
		top: i.top - r.top,
		left: i.left - r.left,
		behavior: n
	});
}
//#endregion
//#region src/functions/isShare.ts
function In() {
	return p() && typeof navigator < "u" && !!navigator.share;
}
//#endregion
//#region src/functions/handleShare.ts
async function Ln(e) {
	if (In() && navigator.canShare && navigator.canShare(e)) try {
		return await navigator.share(e), !0;
	} catch (e) {
		C.on({
			group: "share",
			code: "error",
			details: e
		});
	}
	return !1;
}
//#endregion
//#region src/functions/inArray.ts
function Rn(e, t) {
	return e.includes(t);
}
//#endregion
//#region src/functions/initScrollbarOffset.ts
async function zn() {
	if (p()) {
		let e = await X.get();
		document.body.style.setProperty("--sys-scrollbar-offset", `${e}px`);
	}
}
//#endregion
//#region src/functions/intersectKey.ts
function Bn(e, n) {
	let i = {};
	return t(e) && t(n) && r(e, (e, t) => {
		t in n && (i[t] = e);
	}), i;
}
//#endregion
//#region src/functions/isApiSuccess.ts
var Vn = (e) => {
	var t;
	return i(e) ? !0 : !!(e && n(e) && ((e == null ? void 0 : e.status) === "success" || e != null && e.success || !(e == null || (t = e.statusObject) == null) && t.status && /^2/.test(String(e.statusObject.status)) || !("status" in e) && !("success" in e) && !("statusObject" in e) && /^2/.test(String(M.getStatus().getStatus()))));
};
//#endregion
//#region src/functions/isDifferent.ts
function Hn(e, t) {
	let n = Object.keys(e).length !== Object.keys(t).length;
	return n || r(e, (e, r) => {
		e !== (t == null ? void 0 : t[r]) && (n = !0);
	}), n;
}
//#endregion
//#region src/functions/isElementVisible.ts
function Un(e) {
	if (!p()) return !1;
	let t = D(e);
	if (!t || "isConnected" in t && t.isConnected === !1) return !1;
	let n = window.getComputedStyle(t);
	return n.display !== "none" && n.visibility !== "hidden" && n.opacity !== "0" && t.offsetWidth !== 0 && t.offsetHeight !== 0;
}
//#endregion
//#region src/functions/isInput.ts
var Wn = (e) => {
	if (e instanceof HTMLElement) {
		let t = e.tagName.toLowerCase();
		return !!(t === "input" || t === "textarea" || t === "select" || e.isContentEditable || e.getAttribute("contenteditable") === "true");
	}
	return !1;
}, Gn = (e, t) => e.code === "Space" || e.code === "Enter" || e.key === " " || e.key === "Spacebar" || e.key === "Enter" || e.keyCode === 13 || e.keyCode === 32 ? t === void 0 ? !Wn(e.target) : !t : !1;
//#endregion
//#region src/functions/isFloat.ts
function Kn(e) {
	switch (typeof e) {
		case "number": return !0;
		case "string": return !!e.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
		default: return !1;
	}
}
//#endregion
//#region src/functions/isIntegerBetween.ts
function qn(e, t) {
	let n = Math.floor(t);
	return e >= n && e < n + 1;
}
//#endregion
//#region src/functions/isSelectedByList.ts
function Jn(e, t) {
	return Array.isArray(e) ? e.every((e) => v(e, t)) : v(e, t);
}
//#endregion
//#region src/functions/removeCommonPrefix.ts
function Yn(e, t) {
	if (e.startsWith(t)) return e.slice(t.length).trim();
	let n = 0;
	for (; e[n] === t[n] && n < e.length && n < t.length;) n++;
	return e.slice(n).trim();
}
//#endregion
//#region src/functions/replaceComponentName.ts
var Xn = (e, t, n) => {
	var r;
	return e == null || (r = e.replace(RegExp(`<${t}`, "ig"), `<${n}`)) == null || (r = r.replace(RegExp(`</${t}`, "ig"), `</${n}`)) == null ? void 0 : r.trim();
};
//#endregion
//#region src/functions/uniqueArray.ts
function Zn(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/functions/replaceRecursive.ts
function $(e, n, i = !0) {
	let a = Q(e);
	return t(e) && t(n) && r(n, (n, r) => {
		let o = e == null ? void 0 : e[r];
		t(o) && t(n) ? i && Array.isArray(o) && Array.isArray(n) ? a[r] = Q(Zn([...o, ...n])) : a[r] = $(Array.isArray(o) ? { ...o } : o, n, i) : a[r] = t(n) ? Q(n) : n;
	}), a;
}
//#endregion
//#region src/functions/replaceTemplate.ts
function Qn(e, t) {
	let n = e;
	return r(t, (e, t) => {
		n = n.replace(At(`[${t}]`), b(e));
	}), n;
}
//#endregion
//#region src/functions/secondToTime.ts
function $n(e) {
	let t = _(e);
	return t > 0 ? `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}` : "00:00";
}
//#endregion
//#region src/functions/setValues.ts
function er(e, t, { multiple: n = !1, maxlength: r = 0, alwaysChange: a = !0, notEmpty: o = !1 }) {
	if (n) {
		if (i(e)) {
			let n = e.indexOf(t), i = [...e];
			return n === -1 ? (!r || e.length < r) && i.push(t) : (!o || i.length > 1) && i.splice(n, 1), i;
		}
		return e === t ? [] : e ? [e, t] : [t];
	}
	return a || e !== t ? t : e;
}
//#endregion
//#region src/functions/splice.ts
function tr(e, n, i) {
	if (t(e) && t(n)) {
		if (i) {
			let a = {}, o = !1;
			return r(e, (e, r) => {
				!o && (i === r || i === e) ? (o = !0, a = $(a, n)) : o ? a = $(a, { [r]: e }) : a[r] = t(e) ? Q(e) : e;
			}), o ? a : $(e, n);
		}
		if (t(n)) return $(e, n);
	}
	return Q(e);
}
//#endregion
//#region src/functions/toCamelCaseFirst.ts
function nr(e) {
	return Qe(e).replace(/^([a-z])/, (e) => `${e.toUpperCase()}`);
}
//#endregion
//#region src/functions/toKebabCase.ts
function rr(e) {
	return e.toString().trim().replace(/[^\w-. ]+/g, "").replace(/[ .]+/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (e) => `${e.toLowerCase()}`).replace(/^[A-Z]/, (e) => e.toLowerCase()).replace(/(?<=[\w ])[A-Z]/g, (e) => `-${e.toLowerCase()}`).replace(/[A-Z]/g, (e) => e.toLowerCase());
}
//#endregion
//#region src/functions/toNumberByMax.ts
function ir(e, t, n, r) {
	let i = _(e), a = _(t);
	return t && a < i ? `${ar(a, n, r)}+` : ar(i, n, r);
}
var ar = (e, t, n) => t ? new I(n).number(e) : e;
//#endregion
//#region src/functions/toPercent.ts
function or(e, t) {
	return 1 / e * t;
}
//#endregion
//#region src/functions/toPercentBy100.ts
function sr(e, t) {
	return or(e, t) * 100;
}
//#endregion
//#region src/functions/uint8ArrayToBase64.ts
function cr(e) {
	let t = "";
	for (let n of e) t += String.fromCharCode(n);
	if (p()) return window.btoa(t);
	if (globalThis && globalThis.Buffer) {
		var n;
		return (n = globalThis) == null ? void 0 : n.Buffer.from(e).toString("base64");
	}
	return "";
}
//#endregion
//#region src/functions/writeClipboardData.ts
async function lr(e) {
	if (p()) try {
		await navigator.clipboard.writeText(e);
	} catch (n) {
		var t;
		(t = document) == null || t.execCommand(e);
	}
}
//#endregion
export { M as Api, A as ApiCache, Oe as ApiDefault, ke as ApiHeaders, je as ApiHydration, Le as ApiInstance, j as ApiMethodItem, Me as ApiPreparation, Ie as ApiResponse, Ne as ApiStatus, Re as BroadcastMessage, Ve as Cache, Be as CacheItem, He as CacheStatic, Ye as Cookie, qe as CookieBlock, Ke as CookieBlockInstance, P as CookieStorage, T as DataStorage, Ze as Datetime, C as ErrorCenter, le as ErrorCenterHandler, ue as ErrorCenterInstance, Ce as EventItem, $e as Formatters, B as FormattersType, et as GEO_FLAG_ICON_NAME, E as Geo, tt as GeoFlag, ye as GeoInstance, I as GeoIntl, nt as GeoPhone, it as Global, H as Hash, U as Icons, k as Loading, Te as LoadingInstance, St as Meta, K as MetaManager, bt as MetaOg, _t as MetaOpenGraphAge, ht as MetaOpenGraphAvailability, gt as MetaOpenGraphCondition, vt as MetaOpenGraphGender, J as MetaOpenGraphTag, mt as MetaOpenGraphType, pt as MetaRobots, q as MetaTag, xt as MetaTwitter, yt as MetaTwitterCard, Y as MetaTwitterTag, X as ScrollbarWidth, Ft as SearchList, Ot as SearchListData, kt as SearchListItem, Nt as SearchListMatcher, Pt as SearchListOptions, w as ServerStorage, It as StorageCallback, Vt as TRANSLATE_GLOBAL_PREFIX, Ht as TRANSLATE_TIME_OUT, Gt as Translate, Ut as TranslateFile, Wt as TranslateInstance, Dt as addTagHighlightMatch, N as anyToString, Bt as applyTemplate, Kt as arrFill, Zt as blobToBase64, Qt as capitalize, Q as copyObject, rt as copyObjectLite, W as createElement, $t as domQuerySelector, en as domQuerySelectorAll, G as encodeAttribute, an as ensureMaxSize, Z as escapeExp, on as eventStopPropagation, b as executeFunction, Pe as executePromise, r as forEach, sn as frame, cn as getArrayHighlightMatch, ln as getAttributes, un as getClipboardData, Xe as getColumn, dn as getCurrentDate, fn as getCurrentTime, D as getElement, hn as getElementId, tn as getElementImage, ut as getElementItem, xe as getElementOrWindow, fe as getElementSafeScript, jt as getExactSearchExp, At as getExp, pe as getHydrationData, z as getItemByPath, _n as getKey, vn as getLengthOfAllArray, yn as getMaxLengthAllArray, bn as getMinLengthAllArray, Cn as getMouseClient, xn as getMouseClientX, Sn as getMouseClientY, wn as getObjectByKeys, Tn as getObjectNoUndefined, En as getObjectOrNone, Dn as getOnlyText, kn as getRandomText, o as getRequestString, Mt as getSearchExp, Ct as getSeparatingSearchExp, An as getStepPercent, jn as getStepValue, Nn as goScroll, Pn as goScrollSmooth, Fn as goScrollTo, Ln as handleShare, Rn as inArray, gn as initGetElementId, zn as initScrollbarOffset, Bn as intersectKey, Vn as isApiSuccess, i as isArray, Hn as isDifferent, oe as isDomData, p as isDomRuntime, Un as isElementVisible, Gn as isEnter, c as isFilled, Kn as isFloat, y as isFunction, Se as isInDom, Wn as isInput, qn as isIntegerBetween, s as isNull, h as isNumber, t as isObject, n as isObjectNotArray, l as isOnLine, v as isSelected, Jn as isSelectedByList, In as isShare, u as isString, be as isWindow, d as random, Yn as removeCommonPrefix, Xn as replaceComponentName, $ as replaceRecursive, Qn as replaceTemplate, rn as resizeImageByMax, $n as secondToTime, dt as setElementItem, er as setValues, f as sleep, tr as splice, On as strFill, Ue as strSplit, O as toArray, Qe as toCamelCase, nr as toCamelCaseFirst, F as toDate, rr as toKebabCase, _ as toNumber, ir as toNumberByMax, or as toPercent, sr as toPercentBy100, a as toString, We as transformation, cr as uint8ArrayToBase64, Zn as uniqueArray, lr as writeClipboardData };
