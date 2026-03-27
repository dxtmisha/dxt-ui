import { geo as e } from "@dxtmisha/media";
//#region src/functions/copyObjectLite.ts
function t(e, t) {
	return t ? Object.assign({}, e, t) : Object.assign({}, e);
}
//#endregion
//#region src/functions/isObject.ts
function n(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region src/functions/forEach.ts
function r(e, t, r) {
	if (n(e)) {
		let n = [];
		return e instanceof Map || Array.isArray(e) ? e.forEach((r, i) => n.push(t(r, i, e))) : Object.entries(e).forEach(([r, i]) => n.push(t(i, r, e))), r ? n : n.filter((e) => e !== void 0);
	}
	return [];
}
//#endregion
//#region src/functions/getRequestString.ts
function i(e, t = "=", n = "&") {
	return r(e, (e, n) => `${n}${t}${encodeURIComponent(String(e).trim())}`).sort().join(n);
}
//#endregion
//#region src/functions/isArray.ts
function a(e) {
	return Array.isArray(e);
}
//#endregion
//#region src/functions/isNull.ts
function o(e) {
	return e == null;
}
//#endregion
//#region src/functions/isFilled.ts
function s(e, t) {
	if (e) {
		if (t && e === "0") return !0;
		switch (typeof e) {
			case "bigint":
			case "number": return e !== 0;
			case "boolean": return e;
			case "function":
			case "symbol": return !0;
			case "object": return Array.isArray(e) ? e.length > 0 : Object.values(e).some((e) => !o(e));
			case "string": return ![
				"",
				"undefined",
				"null",
				"0",
				"false",
				"[]"
			].includes(e);
			case "undefined": return !1;
			default: return !!e;
		}
	}
	return !1;
}
//#endregion
//#region src/functions/isObjectNotArray.ts
function c(e) {
	return n(e) && !Array.isArray(e);
}
//#endregion
//#region src/functions/isString.ts
function l(e) {
	return typeof e == "string";
}
//#endregion
//#region src/functions/copyObject.ts
function u(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region src/functions/isDomRuntime.ts
function d() {
	return typeof window < "u" && !!window.document;
}
//#endregion
//#region src/functions/isNumber.ts
function f(e) {
	switch (typeof e) {
		case "number": return !0;
		case "string": return !!e.match(/^-?[0-9]+(\.[0-9]+)?$/);
		default: return !1;
	}
}
//#endregion
//#region src/functions/toNumber.ts
function p(e) {
	if (typeof e == "number") return e;
	if (!e) return 0;
	let t = e.replace(/[^\d., ]+/gi, "");
	return t = t.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/gi) ? t.replace(/ /gi, "").replace(/,/gi, ".") : t.match(/,[0-9]{3}[,.]/gi) ? t.replace(/,/gi, "") : t.match(/[.][0-9]{3}[,.]/gi) ? t.replace(/[.]/gi, "").replace(/,/gi, ".") : t.replace(/,/gi, "."), parseFloat(t);
}
//#endregion
//#region src/functions/isSelected.ts
function m(e, t) {
	return o(e) ? !1 : Array.isArray(t) ? t.includes(e) : f(e) && f(t) ? p(e) === p(t) : e === t;
}
//#endregion
//#region src/functions/isFunction.ts
function h(e) {
	return e instanceof Function || typeof e == "function";
}
//#endregion
//#region src/functions/executeFunction.ts
function g(e) {
	return h(e) ? e() : e;
}
//#endregion
//#region src/functions/isDomData.ts
function _() {
	return location.href.startsWith("data:");
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/typeof.js
function v(e) {
	"@babel/helpers - typeof";
	return v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, v(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPrimitive.js
function ee(e, t) {
	if (v(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (v(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPropertyKey.js
function te(e) {
	var t = ee(e, "string");
	return v(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/defineProperty.js
function y(e, t, n) {
	return (t = te(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/DataStorage.ts
var ne = {}, re = "ui-storage", b = class {
	static setPrefix(e) {
		re = e;
	}
	constructor(e, t = !1) {
		y(this, "value", void 0), y(this, "age", void 0), this.name = e, this.isSession = t;
		let n = `${t ? "session" : "storage"}#${e}`;
		if (n in ne) return ne[n];
		this.make(), ne[n] = this;
	}
	get(e, t) {
		if (this.value !== null && this.value !== void 0 && this.isCache(t)) return this.value;
		if (e !== void 0) return this.set(e);
	}
	set(e) {
		if (this.value = g(e), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0) this.remove();
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
		return o(e) || this.age && this.age + e * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
	}
	getMethod() {
		if (d() && !_()) {
			var e, t;
			let n = this.isSession ? (e = window) == null ? void 0 : e.sessionStorage : (t = window) == null ? void 0 : t.localStorage;
			if (n) return n;
		}
	}
	getIndex() {
		return `${re}__${this.name}`;
	}
	getValue() {
		var e;
		let t = (e = this.getMethod()) == null ? void 0 : e.getItem(this.getIndex());
		if (t) try {
			return JSON.parse(t);
		} catch (e) {
			console.error("DataStorage", e);
		}
	}
	make() {
		let e = this.getValue();
		return e ? (this.value = e.value, this.age = e.age) : (this.value = void 0, this.age = void 0), this;
	}
}, x, ie = "geo-code", S = class {
	static get() {
		return this.item;
	}
	static getCountry() {
		return this.item.country;
	}
	static getLanguage() {
		return this.language;
	}
	static getStandard() {
		return this.item.standard;
	}
	static getFirstDay() {
		return this.item.firstDay;
	}
	static getLocation() {
		return this.location;
	}
	static getItem() {
		return t(this.item, { language: this.language });
	}
	static getList() {
		return e;
	}
	static getByCode(e) {
		var t;
		let n;
		return e && (e.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (n = this.getByCodeFull(e)), !n && e.match(/[A-Z]{2}/) && (n = this.getByCountry(this.toCountry(e))), !n && e.match(/[a-z]{2}/) && (n = this.getByLanguage(this.toLanguage(e)))), this.toFull(u((t = n) == null ? this.getList()[0] : t));
	}
	static getByCodeFull(e) {
		return this.getList().find((t) => m(e, [`${t.language}-${t.country}`, `${t.country}-${t.language}`]));
	}
	static getByCountry(e) {
		return this.getList().find((t) => {
			var n;
			return t.country === e || (t == null || (n = t.countryAlternative) == null ? void 0 : n.find((t) => t === e));
		});
	}
	static getByLanguage(e) {
		return this.getList().find((t) => {
			var n;
			return t.language === e || (t == null || (n = t.languageAlternative) == null ? void 0 : n.find((t) => t === e));
		});
	}
	static getTimezone() {
		return this.timezone;
	}
	static getTimezoneFormat() {
		let e = Math.abs(Math.trunc(this.timezone / 60)).toString().padStart(2, "0"), t = Math.abs(this.timezone % 60).toString().padStart(2, "0");
		return this.timezone >= 0 ? `-${e}:${t}` : `+${e}:${t}`;
	}
	static find(e) {
		return this.getByCode(e);
	}
	static toStandard(e) {
		return `${e.language}-${e.country}`;
	}
	static set(e, t) {
		this.location = e, this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location), t && this.storage.set(this.location);
	}
	static setTimezone(e) {
		this.timezone = e;
	}
	static findLocation() {
		var e;
		return d() && (this.storage.get() || ((e = document.querySelector("html")) == null ? void 0 : e.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
	}
	static findLanguage(e) {
		return e && e.match(/[a-z]{2}/) ? this.toLanguage(e) : this.item.language;
	}
	static toCountry(e) {
		return e.replace(/[^A-Z]+/g, "");
	}
	static toLanguage(e) {
		return e.replace(/[^a-z]+/g, "");
	}
	static toFull(e) {
		return t(e, {
			standard: this.toStandard(e),
			firstDay: (e == null ? void 0 : e.firstDay) || "Mo"
		});
	}
};
x = S, y(S, "storage", new b(ie)), y(S, "location", void 0), y(S, "item", void 0), y(S, "language", void 0), y(S, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), x.location = x.findLocation(), x.language = x.findLanguage(x.location), x.item = x.getByCode(x.location);
//#endregion
//#region src/functions/isWindow.ts
function ae(e) {
	return d() && e === window;
}
//#endregion
//#region src/functions/getElement.ts
function C(e) {
	if (d()) {
		if (ae(e)) return document.body;
		if (l(e)) {
			var t;
			return (t = document.querySelector(e)) == null ? void 0 : t;
		}
		return e;
	}
}
//#endregion
//#region src/functions/getElementOrWindow.ts
function oe(e) {
	return ae(e) ? e : C(e);
}
//#endregion
//#region src/functions/isInDom.ts
function se(e) {
	var t;
	return !!((t = C(e)) != null && t.closest("html"));
}
//#endregion
//#region src/functions/toArray.ts
function w(e) {
	return Array.isArray(e) ? e : [e];
}
//#endregion
//#region src/classes/EventItem.ts
var ce = class {
	constructor(e, t = ["click"], r, i, a) {
		y(this, "element", void 0), y(this, "elementControl", void 0), y(this, "elementControlEdit", void 0), y(this, "type", void 0), y(this, "listenerRecent", (e) => {
			if (se(this.elementControl)) {
				var t, r;
				(t = this.listener) == null || t.call(this.element, e, this.detail), n(this.options) && (r = this.options) != null && r.once && this.stop();
			} else this.stop();
		}), y(this, "activity", !1), y(this, "activityItems", []), this.listener = r, this.options = i, this.detail = a, this.element = oe(e), this.elementControl = C(e), this.type = w(t);
	}
	isActive() {
		return this.activity;
	}
	getElement() {
		return this.element;
	}
	setElement(e) {
		let t = oe(e);
		return this.elementControlEdit || (this.elementControl = C(e)), this.element = t, this.reset(), this;
	}
	setElementControl(e) {
		return this.elementControl = C(e), this.elementControlEdit = !o(this.elementControl), this.elementControlEdit || (this.elementControl = C(this.element)), this;
	}
	setType(e) {
		return this.type = w(e), this.reset(), this;
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
}, le, ue = "ui-loading", T = class {
	static is() {
		return this.value > 0;
	}
	static get() {
		return this.value;
	}
	static show() {
		this.value++, this.dispatch();
	}
	static hide() {
		this.is() && (this.value--, this.dispatch());
	}
	static registrationEvent(e, t) {
		if (d()) {
			let n = new ce(window, ue, e).setElementControl(t).start();
			this.registrationList.push({
				item: n,
				listener: e,
				element: t
			});
		}
	}
	static unregistrationEvent(e, t) {
		this.registrationList = this.registrationList.filter((n) => n.listener === e && n.element === t ? (n.item.stop(), !1) : !0);
	}
	static dispatch() {
		var e;
		(e = this.event) == null || e.dispatch({ loading: this.is() });
	}
};
le = T, y(T, "value", 0), y(T, "event", void 0), y(T, "registrationList", []), d() && (le.event = new ce(window, ue));
//#endregion
//#region src/classes/ApiHeaders.ts
var de = class {
	constructor() {
		y(this, "headers", {});
	}
	get(e, n = "application/json;charset=UTF-8") {
		if (e !== null) {
			let r = t(this.headers, e);
			return s(n) && (r["Content-Type"] = n), r;
		}
	}
	set(e) {
		return c(e) && (this.headers = e), this;
	}
}, E = /* @__PURE__ */ function(e) {
	return e.get = "GET", e.post = "POST", e.put = "PUT", e.delete = "DELETE", e;
}({}), fe = class {
	constructor() {
		y(this, "value", void 0);
	}
	is() {
		return !!this.value;
	}
	get() {
		return this.value;
	}
	request(e) {
		let n = this.get();
		if (n) {
			if (e instanceof FormData) this.addByFormData(e, n);
			else if (c(e)) return t(n, e);
		}
		return e;
	}
	set(e) {
		this.value = e;
	}
	addByFormData(e, t) {
		for (let n in t) e.has(n) || e.set(n, t[n]);
	}
}, D = class {
	constructor() {
		y(this, "value", void 0);
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
		return e && c(e) && ("message" in e && this.setLastMessage(String(e.message)), "status" in e && this.setLastStatus(String(e.status))), this.set({ lastResponse: e }), this;
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
async function pe(e) {
	let t = g(e);
	return t instanceof Promise ? await t : t;
}
//#endregion
//#region src/functions/random.ts
function O(e, t) {
	return Math.floor(Math.random() * (t - e + 1) + e);
}
//#endregion
//#region src/classes/ApiResponse.ts
var me = "d-response-loading", he = class {
	constructor(e) {
		y(this, "first", []), y(this, "response", []), y(this, "loading", void 0), y(this, "devMode", !1), this.requestDefault = e;
	}
	get(e = "", t, n, r) {
		return this.response.find((i) => !this.isDisable(i) && this.isPath(i, e) && t === i.method && this.isFirst(i, r) && this.isResponse(i, n) ? (this.isDevMode(r) && console.warn(`Response type: ${i.path}`), this.first.push(i), !0) : !1);
	}
	getList() {
		return this.response.filter((e) => e.isForGlobal !== !0);
	}
	add(e) {
		return this.response.push(...w(e)), this;
	}
	setDevMode(e) {
		return this.devMode = e, this;
	}
	async emulator(e) {
		let { path: t = "", method: n = E.get, global: r = n === E.get, devMode: i = !1 } = e;
		if (r || this.isDevMode(i)) {
			let r = this.requestDefault.request(e.request), a = this.get(t, n, r, i);
			if (a) {
				let e = await this.fetch(a, r);
				return this.isDevMode(i) && console.warn("Response data:", t, r, e), e;
			}
		}
	}
	isDisable(e) {
		return !!g(e == null ? void 0 : e.disable);
	}
	isPath(e, t) {
		return t === e.path || !!(e.path instanceof RegExp && t.match(e.path));
	}
	isDevMode(e) {
		return e || this.devMode;
	}
	isFirst(e, t) {
		return this.first.indexOf(e) === -1 || this.isDevMode(t);
	}
	isResponse(e, t) {
		let n = this.requestDefault.request(e == null ? void 0 : e.request);
		return t === n || n === "*any" || s(t) && s(n) && c(t) && c(n) && !(t instanceof FormData) && !(n instanceof FormData) && Object.values(t).length === Object.values(n).length && Object.entries(n).reduce((e, [n, r]) => e && (r === (t == null ? void 0 : t[n]) || r === "*any"), !0);
	}
	fetch(e, t) {
		return this.startResponseLoading(), new Promise((n) => {
			pe(h(e.response) ? e.response(t) : e.response).then((t) => {
				e != null && e.lag ? (T.show(), setTimeout(() => {
					this.stopResponseLoading(), n(t), T.hide();
				}, O(0, 2e3))) : (this.stopResponseLoading(), n(t));
			});
		});
	}
	startResponseLoading() {
		this.loading && clearTimeout(this.loading), d() && document.body.classList.add(me);
	}
	stopResponseLoading() {
		this.loading = setTimeout(() => {
			this.loading = void 0, d() && document.body.classList.remove(me);
		}, 1200);
	}
}, ge = class {
	constructor() {
		y(this, "callback", void 0), y(this, "callbackEnd", void 0), y(this, "loading", !1);
	}
	async make(e, t) {
		if (e && this.callback) return this.go(t);
	}
	async makeEnd(e, t, n) {
		let r = {};
		return e && this.callbackEnd && (r = await this.callbackEnd(t, n)), r;
	}
	set(e) {
		return this.callback = e, this;
	}
	setEnd(e) {
		return this.callbackEnd = e, this;
	}
	async go(e) {
		return new Promise((t) => {
			this.loading ? setTimeout(() => this.go(e).then(t), 160) : this.callback ? (this.loading = !0, this.callback(e).then(() => {
				this.loading = !1, t();
			})) : t();
		});
	}
	async end(e, t) {
		let n = {};
		return this.callbackEnd && (n = await this.callbackEnd(e, t)), n;
	}
}, _e = class {
	constructor(e = "/api/") {
		y(this, "headers", new de()), y(this, "requestDefault", new fe()), y(this, "status", new D()), y(this, "response", new he(this.requestDefault)), y(this, "preparation", new ge()), this.url = e;
	}
	isLocalhost() {
		return typeof location > "u" || location.hostname === "localhost";
	}
	getStatus() {
		return this.status;
	}
	getResponse() {
		return this.response;
	}
	getUrl(e, t = !0) {
		return `${t ? this.url : ""}${e}`.replace("{locale}", S.getLocation()).replace("{country}", S.getCountry()).replace("{language}", S.getLanguage());
	}
	getBody(e = {}, t = E.get) {
		if (e instanceof FormData) return e;
		if (t !== E.get && s(e)) return l(e) ? e : JSON.stringify(e);
	}
	getBodyForGet(e, t = "", n = E.get) {
		if (n === E.get) {
			let n = t.match(/\?/) ? "&" : "?", r = typeof e == "object" ? i(e) : e;
			if (s(r)) return `${n}${r}`;
		}
		return "";
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
	async request(e) {
		return l(e) ? await this.fetch({ path: e }) : await this.fetch(e);
	}
	get(e) {
		return this.request(t(e, { method: E.get }));
	}
	post(e) {
		return this.request(t(e, { method: E.post }));
	}
	put(e) {
		return this.request(t(e, { method: E.put }));
	}
	delete(e) {
		return this.request(t(e, { method: E.delete }));
	}
	async fetch(e) {
		let { toData: t = !0, hideError: n = !1, queryReturn: r = void 0, globalPreparation: i = !0, globalEnd: a = !0 } = e, o = await this.response.emulator(e);
		if (o) return o;
		let s = new D(), c;
		T.show();
		try {
			await this.preparation.make(i, e);
			let t = await this.makeQuery(e), n = await this.preparation.makeEnd(a, t, e);
			if (s.setStatus(t.status, t.statusText), this.status.setStatus(t.status, t.statusText), n != null && n.reset) return T.hide(), await this.fetch(e);
			c = await this.readData(t, r, n);
		} catch (e) {
			throw n || console.error("Api: ", e), s.setError(String(e)), this.status.setError(String(e)), T.hide(), e;
		}
		return T.hide(), s.setLastResponse(c), this.status.setLastResponse(c), this.makeStatus(this.makeData(c, t), s);
	}
	async readData(e, t, n) {
		var r;
		return t ? await t(e) : "data" in n ? n.data : ((r = e.headers.get("Content-Type")) == null ? "" : r).match("application/json") ? await e.json() : { data: await e.text() };
	}
	async makeQuery(e) {
		let n = this.requestDefault.request(e.request), { api: r = !0, path: i = "", pathFull: a = void 0, method: o = E.get, headers: s = {}, type: c = "application/json;charset=UTF-8", init: l = {}, controller: u = void 0 } = e, d = a == null ? this.getUrl(i, r) : a, f = `${d}${this.getBodyForGet(n, d, o)}`, p = this.headers.get(s, c), m = t(l, {
			method: o,
			body: this.getBody(n, o)
		});
		return p && (m.headers = p), u && (m.signal = u.signal), await fetch(f, m);
	}
	makeData(e, n) {
		if (!n || !e || !c(e) || !("data" in e)) return e;
		if (e.data !== null && typeof e.data != "object" || a(e.data)) return e.data;
		let r = t(e.data);
		return "success" in e && !("success" in r) && (r.success = e.success), "status" in e && !("status" in r) && (r.status = e.status), "message" in e && !("message" in r) && (r.message = e.message), r;
	}
	makeStatus(e, t) {
		return e && c(e) ? {
			...e,
			statusObject: t.get()
		} : e;
	}
}, k = class e {
	static isLocalhost() {
		return this.item.isLocalhost();
	}
	static getItem() {
		return this.item;
	}
	static getStatus() {
		return this.item.getStatus();
	}
	static getResponse() {
		return this.item.getResponse();
	}
	static getUrl(e, t = !0) {
		return this.item.getUrl(e, t);
	}
	static getBody(e = {}, t = E.get) {
		return this.item.getBody(e, t);
	}
	static getBodyForGet(e, t = "", n = E.get) {
		return this.item.getBodyForGet(e, t, n);
	}
	static setHeaders(t) {
		return this.item.setHeaders(t), e;
	}
	static setRequestDefault(t) {
		return this.item.setRequestDefault(t), e;
	}
	static setUrl(t) {
		return this.item.setUrl(t), e;
	}
	static setPreparation(t) {
		return this.item.setPreparation(t), e;
	}
	static setEnd(t) {
		return this.item.setEnd(t), e;
	}
	static async request(e) {
		return this.item.request(e);
	}
	static get(e) {
		return this.item.get(e);
	}
	static post(e) {
		return this.item.post(e);
	}
	static put(e) {
		return this.item.put(e);
	}
	static delete(e) {
		return this.item.delete(e);
	}
};
y(k, "item", new _e());
//#endregion
//#region src/classes/BroadcastMessage.ts
var ve = class {
	constructor(e, t, n) {
		if (y(this, "channel", void 0), y(this, "update", (e) => {
			var t;
			return (t = this.callback) == null || t.call(this, e), this;
		}), y(this, "updateError", (e) => {
			var t;
			return (t = this.callbackError) == null || t.call(this, e), this;
		}), this.callback = t, this.callbackError = n, d()) try {
			this.channel = new BroadcastChannel(`${ye()}__${e}`), this.channel.onmessage = this.update, this.channel.onmessageerror = this.updateError;
		} catch (t) {
			console.error(`BroadcastMessage ${e}:`, t);
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
}, ye = () => new b("__broadcast-name").get(() => `name_${O(1e6, 9999999)}`), be = class {
	constructor(e) {
		y(this, "cache", void 0), y(this, "cacheOld", void 0), y(this, "comparisons", []), this.callback = e;
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
}, xe = class {
	constructor() {
		y(this, "cache", {});
	}
	get(e, t, n) {
		return this.getCacheItem(e, t).getCache(n == null ? [] : n);
	}
	async getAsync(e, t, n) {
		return await this.getCacheItem(e, t).getCacheAsync(n == null ? [] : n);
	}
	getCacheItem(e, t) {
		return e in this.cache || (this.cache[e] = new be(t)), this.cache[e];
	}
}, Se, Ce = class {
	static get(e, t, n) {
		return this.cache.get(e, t, n);
	}
};
Se = Ce, y(Ce, "cache", void 0), Se.cache = new xe();
//#endregion
//#region src/functions/transformation.ts
function we(e, t = !1) {
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
					console.error("transformation: JSON error", e);
				}
				else if (/^[0-9]+\.[0-9.]+$/.exec(r)) return parseFloat(r);
				else if (/^[0-9]+$/.exec(r)) return parseInt(r, 10);
				else if (t && d() && typeof ((n = window) == null ? void 0 : n[r]) == "function") return window[r];
		}
	}
	return e;
}
//#endregion
//#region src/classes/CookieBlock.ts
var Te = "cookie-block", Ee = class {
	static get() {
		var e;
		return (e = this.storage.get()) == null ? !1 : e;
	}
	static set(e) {
		this.storage.set(e);
	}
};
y(Ee, "storage", new b(Te));
//#endregion
//#region src/classes/Cookie.ts
var De, A = {}, Oe = class {
	constructor(e) {
		if (y(this, "value", void 0), y(this, "options", {}), this.name = e, e in j) return j[e];
		this.value = A == null ? void 0 : A[e], j[e] = this;
	}
	get(e, t) {
		return this.value === void 0 && e && this.set(e, t), this.value;
	}
	set(e, t) {
		this.value = g(e), Object.assign(this.options, t), this.update();
	}
	remove() {
		this.set("");
	}
	getAge() {
		var e, t;
		return (e = (t = this.options) == null ? void 0 : t.age) == null ? 10080 * 60 : e;
	}
	update() {
		if (d() && !_() && !Ee.get()) {
			var e, t, n, r, i;
			let a = String((e = this.value) == null ? "" : e);
			document.cookie = [
				`${encodeURIComponent(this.name)}=${encodeURIComponent(a)}`,
				`max-age=${a === "" ? "-1" : this.getAge()}`,
				`SameSite=${(t = (n = this.options) == null ? void 0 : n.sameSite) == null ? "strict" : t}`,
				...(r = (i = this.options) == null ? void 0 : i.arguments) == null ? [] : r
			].join("; ");
		}
	}
	static updateData() {
		for (let e of document.cookie.split(";")) {
			let [t, n] = e.trim().split("=");
			t && s(n) && (A[t] = we(n));
		}
	}
};
De = Oe, d() && !_() && De.updateData();
var j = {};
//#endregion
//#region src/functions/toDate.ts
function M(e) {
	var t, n, r, i, a, s, c, l;
	if (e instanceof Date) return e;
	if (o(e)) return /* @__PURE__ */ new Date();
	if (typeof e == "number") return new Date(e);
	let u = e, d = S.getTimezoneFormat().trim();
	e.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (e, t, n) => (u = t, d = n.trim(), e));
	let f = (t = (n = (r = (i = (a = (s = (c = (l = /^\d{4}\d{2}\d{2}$/.exec(u) && `${u.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) == null ? /^\d{4}\d{2}$/.exec(u) && `${u.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00` : l) == null ? /^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(u) && u.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6") : c) == null ? /^\d{4}-\d{2}-\d{2}$/.exec(u) && `${u}T00:00:00` : s) == null ? /^\d{4}-\d{2}$/.exec(u) && `${u}-01T00:00:00` : a) == null ? /^\d{4}$/.exec(u) && `${u}-01-01T00:00:00` : i) == null ? /^\d{2}:\d{2}$/.exec(u) && `2000-01-01T${u}:00` : r) == null ? /^\d{2}:\d{2}:\d{2}$/.exec(u) && `2000-01-01T${u}` : n) == null ? u.replace(" ", "T") : t;
	return /* @__PURE__ */ new Date(`${f.trim()}${d}`);
}
//#endregion
//#region src/functions/getColumn.ts
function ke(e, t) {
	return r(e, (e) => e == null ? void 0 : e[t], !0);
}
//#endregion
//#region src/classes/GeoIntl.ts
var N = class e {
	static getInstance(t = S.getLocation()) {
		return new e(t);
	}
	constructor(e = S.getLocation()) {
		y(this, "geo", void 0), this.geo = S.find(e);
		let t = this.getLocation();
		if (t in Ae) return Ae[t];
		Ae[t] = this;
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
			console.error("display: ", e);
		}
		return (n = (r = a) == null ? e : r) == null ? "" : n;
	}
	languageName(e, t) {
		let n = {
			type: "language",
			style: t
		};
		return this.display(S.getByCode(e).language, n);
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
		return ((n = this.numberObject(t)) == null || (r = n.format) == null ? void 0 : r.call(n, p(e))) || e.toString();
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
			return t ? ke(t.formatToParts(p(e)).filter((e) => ["literal", "currency"].indexOf(e.type) === -1), "value").join("") : e.toString();
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
		let n = p(e);
		if (n > 1024 && l(t)) switch (t) {
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
		return this.percent(p(e) / 100, t);
	}
	plural(e, t, n, r) {
		var i;
		let a = p(e), o = t.split("|");
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
			console.error("plural: ", e);
		}
		return `${this.number(a, r)} ${(i = o == null ? void 0 : o[0]) == null ? "" : i}`.trim();
	}
	date(e, t, n, r) {
		let i = M(e), a = typeof n == "string", o = this.dateOptions(t, a ? n : "short");
		return r && (o.hour12 = !1), a || Object.assign(o, n), i.toLocaleString(this.getLocation(), o);
	}
	relative(e, t, n) {
		let r = M(e), i = n || /* @__PURE__ */ new Date(), a = {
			numeric: "auto",
			...typeof t == "string" ? { style: t } : t || {}
		}, o = "second", s = (r.getTime() - i.getTime()) / 1e3;
		return Math.abs(s) >= 60 && (o = "minute", s /= 60, Math.abs(s) >= 60 && (o = "hour", s /= 60, Math.abs(s) >= 24 && (o = "day", s /= 24, Math.abs(s) >= 30 && (o = "month", s /= 30, Math.abs(s) >= 12 && (o = "year", s /= 12))))), this.relativeByValue(s, o, a);
	}
	relativeLimit(e, t, n, r, i, a, o) {
		let s = M(e), c = n || /* @__PURE__ */ new Date(), l = new Date(c), u = new Date(c);
		return l.setDate(c.getDate() - t), u.setDate(c.getDate() + t), s >= l && s <= u ? this.relative(s, r, c) : this.date(s, a, i, o);
	}
	relativeByValue(e, t, n) {
		let r = {
			numeric: "auto",
			...typeof n == "string" ? { style: n } : n || {}
		};
		try {
			if (this.hasIntl() && Intl.RelativeTimeFormat !== void 0) return new Intl.RelativeTimeFormat(this.getLocation(), r).format(Math.round(p(e)), t);
		} catch (e) {
			console.error("relative: ", e);
		}
		return "";
	}
	month(e, t) {
		try {
			if (this.hasIntlDateTimeFormat()) return Intl.DateTimeFormat(this.getLocation(), { month: t || "long" }).format(M(e));
		} catch (e) {
			console.error("month: ", e);
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
			console.error("months: ", e);
		}
		return t;
	}
	weekday(e, t) {
		try {
			if (this.hasIntlDateTimeFormat()) return Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }).format(M(e));
		} catch (e) {
			console.error("weekday: ", e);
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
			console.error("weekdays: ", e);
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
			console.error("numberObject: ", e);
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
}, Ae = {}, je = class e {
	constructor(e, t = "date", n = S.getLocation()) {
		y(this, "date", void 0), y(this, "hour24", !1), y(this, "watch", void 0), this.type = t, this.code = n, this.date = M(e);
	}
	getIntl() {
		return new N(this.code);
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
		return this.date = M(e), this.update(), this;
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
		d() && this.getIntl().number(Math.trunc(e), {
			signDisplay: "always",
			minimumIntegerDigits: 2
		});
		let t = Math.trunc(e).toString();
		return t.length < 2 && (t = `0${t}`), `${e >= 0 ? "+" : "-"}${t}`;
	}
	update() {
		var e;
		return (e = this.watch) == null || e.call(this, this.date, this.type, this.hour24), this;
	}
};
//#endregion
//#region src/functions/anyToString.ts
function P(e, t = !0) {
	var r;
	return l(e) ? e.trim() : a(e) && e.findIndex((e) => n(e)) === -1 && t ? e.join(",") : n(e) ? JSON.stringify(e) : e === !0 ? "1" : e === !1 ? "0" : (r = e == null ? void 0 : e.toString()) == null ? "" : r;
}
//#endregion
//#region src/functions/strSplit.ts
function Me(e, t, n) {
	let r = P(e);
	if (!n || n <= 0) return r.split(t);
	let i = r.split(t, n), a = r.split(t);
	return i.length === a.length ? i : (i.pop(), [...i, a.slice(n - 1).join(t)]);
}
//#endregion
//#region src/functions/getItemByPath.ts
function F(e, t) {
	var r;
	if (!s(t)) return;
	let i = Me(t, ".", 2), a = i[0];
	return a && e != null && e[a] && n(e[a]) && i != null && i[1] ? F(e[a], i[1]) : (r = s(a) && (e == null ? void 0 : e[a])) == null ? void 0 : r;
}
//#endregion
//#region src/functions/toCamelCase.ts
function I(e) {
	return e.toString().trim().replace(/[^\w-. ]+/g, "").replace(/[ .]+/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (e) => `${e.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...e) => `${String(e[1]).toUpperCase()}`).replace(/^([A-Z])/, (e) => `${e.toLowerCase()}`);
}
//#endregion
//#region src/types/formattersTypes.ts
var L = /* @__PURE__ */ function(e) {
	return e.currency = "currency", e.date = "date", e.name = "name", e.number = "number", e.plural = "plural", e.unit = "unit", e;
}({}), Ne = class {
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
		return this.list ? w(this.list) : [];
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
			let i = `${I(r)}Format`, a = F(e, r);
			n != null && n.transformation ? s(a) ? t[i] = n.transformation(a, e, n.options) : t[i] = "" : t[i] = this.transformation(a, e, n.type, n.options);
		}), t;
	}
	transformation(e, t, n, r) {
		if (s(e) || n === L.name) switch (n) {
			case L.currency: return this.formatCurrency(e, t, r);
			case L.date: return this.formatDate(e, r);
			case L.name: return this.formatName(t, r);
			case L.number: return this.formatNumber(e, r);
			case L.plural: return this.formatPlural(e, r);
			case L.unit: return this.formatUnit(e, r);
			default: return String(e);
		}
		return "";
	}
	formatCurrency(e, t, n) {
		var r;
		let i = n != null && n.currencyPropName ? F(t, n.currencyPropName) : t == null ? void 0 : t.currency;
		return N.getInstance().currency(e, (r = n == null ? void 0 : n.options) == null ? i : r, n == null ? void 0 : n.numberOnly);
	}
	formatDate(e, t) {
		return N.getInstance().date(e, t == null ? void 0 : t.type, t == null ? void 0 : t.options, t == null ? void 0 : t.hour24);
	}
	formatName(e, t) {
		var n, r, i;
		let a = F(e, (n = t == null ? void 0 : t.lastPropName) == null ? "lastName" : n), o = F(e, (r = t == null ? void 0 : t.firstPropName) == null ? "firstName" : r), s = F(e, (i = t == null ? void 0 : t.surname) == null ? "surname" : i);
		return a && o ? N.getInstance().fullName(a, o, s, t == null ? void 0 : t.short) : "";
	}
	formatNumber(e, t) {
		return N.getInstance().number(e, t == null ? void 0 : t.options);
	}
	formatPlural(e, t) {
		return t && t.words ? N.getInstance().plural(e, t == null ? void 0 : t.words, t == null ? void 0 : t.options, t == null ? void 0 : t.optionsNumber) : e;
	}
	formatUnit(e, t) {
		return t && t.unit ? N.getInstance().unit(e, t.unit) : e;
	}
}, Pe = "f", Fe = class e {
	constructor(e = S.getLocation()) {
		this.code = e;
	}
	get(t = this.code) {
		let n = S.find(t);
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
		return new N(this.code);
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
y(Fe, "flags", {
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
var R, z = class {
	static get(e) {
		return this.list.find((t) => e === t.value);
	}
	static getByPhone(e) {
		let t = this.toNumber(e), n = [""], r = this.map, i;
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
		return this.list;
	}
	static getMap() {
		return this.map;
	}
	static toMask(e, t) {
		if (s(e) && Array.isArray(t) && t.length > 0) {
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
		this.list = r(S.getList(), (e) => {
			if (e != null && e.phoneMask) return {
				phone: (e == null ? void 0 : e.phoneCode) && Number(e.phoneCode.replace(/[^0-9]+/, "")) || void 0,
				within: (e == null ? void 0 : e.phoneWithin) || 0,
				mask: w(e.phoneMask),
				value: e.country
			};
		}).sort((e, t) => e.phone - t.phone);
	}
	static makeMap() {
		this.list.forEach((e) => {
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
R = z, y(z, "list", []), y(z, "map", {}), R.makeList(), R.makeMap();
//#endregion
//#region src/classes/Global.ts
var B, Ie = class {
	static get(e) {
		return B && (B == null ? void 0 : B[e]);
	}
	static add(e) {
		B === void 0 && (B = t(e));
	}
}, V, H = class {
	static get(e, t) {
		return !(e in this.hash) && t && this.set(e, t), this.hash[e];
	}
	static set(e, t) {
		var n;
		let r = g(t);
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
		return location.hash.replace(/([\w-]+)[:=]([^;]+)/gi, (...t) => (e[String(t[1])] = we(t[2]), "")), e;
	}
	static update() {
		this.block = !0, history.replaceState(null, "", `#${i(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
V = H, y(H, "hash", {}), y(H, "watch", {}), y(H, "block", !1), d() && (V.reload(), addEventListener("hashchange", () => V.reload()));
//#endregion
//#region src/classes/Icons.ts
var Le, Re = "__UI_ICON", ze = 320, Be = "--LOAD--", U = class {
	static is(e) {
		return e in this.icons || this.getName(e) in this.icons;
	}
	static async get(e, t = "", n = 1e3 * 60 * 3) {
		var r, i, a, o;
		let s = (r = (i = (a = this.icons) == null ? void 0 : a[this.getName(e)]) == null ? (o = this.icons) == null ? void 0 : o[e] : i) == null ? `${e.replace(/^@/, t == null ? this.url : t)}.svg` : r;
		return typeof s == "string" ? s === Be && n > 0 ? (await this.wait(), this.get(e, t, n - ze)) : s : h(s) ? await s() : await s;
	}
	static getNameList() {
		return r(this.icons, (e, t) => t.replace(/^@/, ""));
	}
	static getUrlGlobal() {
		return `${k.isLocalhost(), ""}${this.url}`;
	}
	static add(e, t) {
		this.icons[this.getName(e)] = t;
	}
	static addLoad(e) {
		this.icons[this.getName(e)] = Be;
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
	static getName(e) {
		return `@${e}`;
	}
	static wait() {
		return new Promise((e) => setTimeout(() => e(), ze));
	}
};
Le = U, y(U, "icons", {}), y(U, "url", "/icons/"), d() && (Re in window || (window[Re] = {}), Le.icons = window[Re]);
//#endregion
//#region src/functions/getElementItem.ts
function Ve(e, t, n) {
	var r, i;
	return (r = (i = C(e)) == null ? void 0 : i[t]) == null ? n : r;
}
//#endregion
//#region src/functions/setElementItem.ts
function He(e, t, i) {
	let a = C(e);
	if (a) {
		let e = Ve(a, t);
		if (n(e) && n(i)) r(i, (t, n) => {
			e[n] = g(t);
		});
		else {
			let e = g(i);
			!(t in a) && typeof e == "string" ? a.setAttribute(t.toString(), e) : a[t] = g(i);
		}
	}
	return a;
}
//#endregion
//#region src/functions/createElement.ts
function W(e, t = "div", n, i) {
	if (!d()) return;
	let a = document.createElement(t);
	return typeof n == "function" ? n(a) : c(n) && r(n, (e, t) => {
		He(a, t, e);
	}), e == null || e.insertBefore(a, i == null ? null : i), a;
}
//#endregion
//#region src/functions/encodeAttribute.ts
function Ue(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").trim();
}
//#endregion
//#region src/classes/MetaManager.ts
var G = class {
	constructor(e, t = !1) {
		y(this, "items", {}), this.listMeta = e, this.isProperty = t, this.update();
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
		if (!d()) return;
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
		else if (d()) {
			let t = { content: r };
			this.isProperty ? t.property = e : t.name = e, W(document.head, "meta", t);
		}
		return this;
	}
	toHtmlString(e) {
		var t;
		let n = Ue((t = this.items[e]) == null ? "" : t);
		return n ? `<meta ${this.getAttributeName()}="${e}" content="${n}">` : "";
	}
	update() {
		return this.listMeta.forEach((e) => {
			var t, n;
			this.items[e] = (t = (n = this.findMetaElement(e)) == null ? void 0 : n.content) == null ? "" : t;
		}), this;
	}
}, K = /* @__PURE__ */ function(e) {
	return e.description = "description", e.keywords = "keywords", e.canonical = "canonical", e.robots = "robots", e.author = "author", e;
}({}), We = /* @__PURE__ */ function(e) {
	return e.indexFollow = "index, follow", e.noIndexFollow = "noindex, follow", e.indexNoFollow = "index, nofollow", e.noIndexNoFollow = "noindex, nofollow", e.noArchive = "noarchive", e.noSnippet = "nosnippet", e.noImageIndex = "noimageindex", e.images = "images", e.noTranslate = "notranslate", e.noPreview = "nopreview", e.textOnly = "textonly", e.noIndexSubpages = "noindex, noarchive", e.none = "none", e;
}({}), q = /* @__PURE__ */ function(e) {
	return e.title = "og:title", e.type = "og:type", e.url = "og:url", e.image = "og:image", e.description = "og:description", e.locale = "og:locale", e.siteName = "og:site_name", e.localeAlternate = "og:locale:alternate", e.imageUrl = "og:image:url", e.imageSecureUrl = "og:image:secure_url", e.imageType = "og:image:type", e.imageWidth = "og:image:width", e.imageHeight = "og:image:height", e.imageAlt = "og:image:alt", e.video = "og:video", e.videoUrl = "og:video:url", e.videoSecureUrl = "og:video:secure_url", e.videoType = "og:video:type", e.videoWidth = "og:video:width", e.videoHeight = "og:video:height", e.audio = "og:audio", e.audioSecureUrl = "og:audio:secure_url", e.audioType = "og:audio:type", e.articlePublishedTime = "article:published_time", e.articleModifiedTime = "article:modified_time", e.articleExpirationTime = "article:expiration_time", e.articleAuthor = "article:author", e.articleSection = "article:section", e.articleTag = "article:tag", e.bookAuthor = "book:author", e.bookIsbn = "book:isbn", e.bookReleaseDate = "book:release_date", e.bookTag = "book:tag", e.musicDuration = "music:duration", e.musicAlbum = "music:album", e.musicAlbumDisc = "music:album:disc", e.musicAlbumTrack = "music:album:track", e.musicMusician = "music:musician", e.musicSong = "music:song", e.musicSongDisc = "music:song:disc", e.musicSongTrack = "music:song:track", e.musicReleaseDate = "music:release_date", e.musicCreator = "music:creator", e.videoActor = "video:actor", e.videoActorRole = "video:actor:role", e.videoDirector = "video:director", e.videoWriter = "video:writer", e.videoDuration = "video:duration", e.videoReleaseDate = "video:release_date", e.videoTag = "video:tag", e.videoSeries = "video:series", e.profileFirstName = "profile:first_name", e.profileLastName = "profile:last_name", e.profileUsername = "profile:username", e.profileGender = "profile:gender", e.productBrand = "product:brand", e.productAvailability = "product:availability", e.productCondition = "product:condition", e.productPriceAmount = "product:price:amount", e.productPriceCurrency = "product:price:currency", e.productRetailerItemId = "product:retailer_item_id", e.productCategory = "product:category", e.productEan = "product:ean", e.productIsbn = "product:isbn", e.productMfrPartNo = "product:mfr_part_no", e.productUpc = "product:upc", e.productWeightValue = "product:weight:value", e.productWeightUnits = "product:weight:units", e.productColor = "product:color", e.productMaterial = "product:material", e.productPattern = "product:pattern", e.productAgeGroup = "product:age_group", e.productGender = "product:gender", e;
}({}), Ge = /* @__PURE__ */ function(e) {
	return e.website = "website", e.article = "article", e.video = "video.other", e.videoTvShow = "video.tv_show", e.videoEpisode = "video.episode", e.videoMovie = "video.movie", e.musicAlbum = "music.album", e.musicPlaylist = "music.playlist", e.musicSong = "music.song", e.musicRadioStation = "music.radio_station", e.app = "app", e.product = "product", e.business = "business.business", e.place = "place", e.event = "event", e.profile = "profile", e.book = "book", e;
}({}), Ke = /* @__PURE__ */ function(e) {
	return e.inStock = "in stock", e.outOfStock = "out of stock", e.preorder = "preorder", e.backorder = "backorder", e.discontinued = "discontinued", e.pending = "pending", e;
}({}), qe = /* @__PURE__ */ function(e) {
	return e.new = "new", e.used = "used", e.refurbished = "refurbished", e;
}({}), Je = /* @__PURE__ */ function(e) {
	return e.newborn = "newborn", e.infant = "infant", e.toddler = "toddler", e.kids = "kids", e.adult = "adult", e;
}({}), Ye = /* @__PURE__ */ function(e) {
	return e.female = "female", e.male = "male", e.unisex = "unisex", e;
}({}), J = /* @__PURE__ */ function(e) {
	return e.card = "twitter:card", e.site = "twitter:site", e.creator = "twitter:creator", e.url = "twitter:url", e.title = "twitter:title", e.description = "twitter:description", e.image = "twitter:image", e.imageAlt = "twitter:image:alt", e.imageSrc = "twitter:image:src", e.imageWidth = "twitter:image:width", e.imageHeight = "twitter:image:height", e.label1 = "twitter:label1", e.data1 = "twitter:data1", e.label2 = "twitter:label2", e.data2 = "twitter:data2", e.appNameIphone = "twitter:app:name:iphone", e.appIdIphone = "twitter:app:id:iphone", e.appUrlIphone = "twitter:app:url:iphone", e.appNameIpad = "twitter:app:name:ipad", e.appIdIpad = "twitter:app:id:ipad", e.appUrlIpad = "twitter:app:url:ipad", e.appNameGooglePlay = "twitter:app:name:googleplay", e.appIdGooglePlay = "twitter:app:id:googleplay", e.appUrlGooglePlay = "twitter:app:url:googleplay", e.player = "twitter:player", e.playerWidth = "twitter:player:width", e.playerHeight = "twitter:player:height", e.playerStream = "twitter:player:stream", e.playerStreamContentType = "twitter:player:stream:content_type", e;
}({}), Xe = /* @__PURE__ */ function(e) {
	return e.summary = "summary", e.summaryLargeImage = "summary_large_image", e.app = "app", e.player = "player", e.product = "product", e.gallery = "gallery", e.photo = "photo", e.leadGeneration = "lead_generation", e.audio = "audio", e.poll = "poll", e;
}({}), Ze = class extends G {
	constructor() {
		super(Object.values(q), !0);
	}
	getTitle() {
		return this.get(q.title);
	}
	getType() {
		return this.get(q.type);
	}
	getUrl() {
		return this.get(q.url);
	}
	getImage() {
		return this.get(q.image);
	}
	getDescription() {
		return this.get(q.description);
	}
	getLocale() {
		return this.get(q.locale);
	}
	getSiteName() {
		return this.get(q.siteName);
	}
	setTitle(e) {
		return this.set(q.title, e);
	}
	setType(e) {
		return this.set(q.type, e);
	}
	setUrl(e) {
		return this.set(q.url, e);
	}
	setImage(e) {
		return this.set(q.image, e);
	}
	setDescription(e) {
		return this.set(q.description, e);
	}
	setLocale(e) {
		return this.set(q.locale, e);
	}
	setSiteName(e) {
		return this.set(q.siteName, e);
	}
}, Qe = class extends G {
	constructor() {
		super(Object.values(J));
	}
	getCard() {
		return this.get(J.card);
	}
	getSite() {
		return this.get(J.site);
	}
	getCreator() {
		return this.get(J.creator);
	}
	getUrl() {
		return this.get(J.url);
	}
	getTitle() {
		return this.get(J.title);
	}
	getDescription() {
		return this.get(J.description);
	}
	getImage() {
		return this.get(J.image);
	}
	setCard(e) {
		return this.set(J.card, e), this;
	}
	setSite(e) {
		return this.set(J.site, e), this;
	}
	setCreator(e) {
		return this.set(J.creator, e), this;
	}
	setUrl(e) {
		return this.set(J.url, e), this;
	}
	setTitle(e) {
		return this.set(J.title, e), this;
	}
	setDescription(e) {
		return this.set(J.description, e), this;
	}
	setImage(e) {
		return this.set(J.image, e), this;
	}
}, $e = class extends G {
	constructor() {
		super(Object.values(K)), y(this, "suffix", void 0), y(this, "og", void 0), y(this, "twitter", void 0), this.og = new Ze(), this.twitter = new Qe();
	}
	getOg() {
		return this.og;
	}
	getTwitter() {
		return this.twitter;
	}
	getTitle() {
		return d() ? document.title.replace(this.getSuffix(), "").trim() : "";
	}
	getKeywords() {
		return this.get(K.keywords);
	}
	getDescription() {
		return this.get(K.description);
	}
	getImage() {
		return this.og.getImage();
	}
	getCanonical() {
		return this.get(K.canonical);
	}
	getRobots() {
		return this.get(K.robots);
	}
	getAuthor() {
		return this.get(K.author);
	}
	getSiteName() {
		return this.og.getSiteName();
	}
	getLocale() {
		return this.og.getLocale();
	}
	setTitle(e) {
		if (d()) {
			let t = s(e) ? `${e}${this.getSuffix()}` : this.suffix ? this.suffix : "";
			document.title = t, this.og.setTitle(t), this.twitter.setTitle(t);
		}
		return this;
	}
	setKeywords(e) {
		return this.set(K.keywords, w(e).join(", ")), this;
	}
	setDescription(e) {
		return this.set(K.description, e), this;
	}
	setImage(e) {
		return this.og.setImage(e), this.twitter.setImage(e), this;
	}
	setCanonical(e) {
		return this.set(K.canonical, e), this.og.setUrl(e), this.twitter.setUrl(e), this;
	}
	setRobots(e) {
		return this.set(K.robots, e), this;
	}
	setAuthor(e) {
		return this.set(K.author, e), this;
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
		return s(this.suffix) ? ` - ${this.suffix}` : "";
	}
}, Y = class {
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
y(Y, "storage", new b("scrollbar", !0)), y(Y, "calculate", !1);
//#endregion
//#region src/functions/escapeExp.ts
function X(e) {
	return e.replace(/([[\]\\^$.?*+(){}/|])/g, "\\$1");
}
//#endregion
//#region src/functions/getSeparatingSearchExp.ts
function et(e) {
	let t = r(e.split(" "), (e) => X(e)).join("|");
	return RegExp(`(${t})`, "ig");
}
//#endregion
//#region src/functions/addTagHighlightMatch.ts
function tt(e, t, n = "sys-highlight-match") {
	return t ? String(e).replace(et(t), `<span class="${n}">$1</span>`) : e;
}
//#endregion
//#region src/classes/SearchListData.ts
var nt = class {
	constructor(e, t, n, r) {
		y(this, "listCache", void 0), this.list = e, this.columns = t, this.item = n, this.options = r;
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
			let i = this.getColumnName(r), a = F(e, r);
			n[i] = s(a) && t ? this.addTag(a) : P(a);
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
		return tt(P(e), this.item.get(), this.options.getClassName());
	}
	generateCache() {
		if (!this.isList()) return [];
		let e = [];
		for (let t of this.list) {
			let n = "";
			if (this.columns) for (let e of this.columns) {
				let r = F(t, e);
				s(r) && (n += ` ${P(r)}`);
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
}, rt = class {
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
function it(e, t = "ig", n = ":value") {
	let r = X(e);
	return new RegExp(n.replace(/:value/g, r), t);
}
//#endregion
//#region src/functions/getExactSearchExp.ts
function at(e) {
	return it(e, "i", "(:value)");
}
//#endregion
//#region src/functions/getSearchExp.ts
function ot(e) {
	let t = "";
	return e.split(" ").forEach((e) => {
		let n = X(e).trim();
		s(n) && (t += `(?=.*?${n})`);
	}), RegExp(`^${t}`, "ig");
}
//#endregion
//#region src/classes/SearchListMatcher.ts
var st = class {
	constructor(e, t) {
		y(this, "matcher", void 0), this.item = e, this.options = t, this.initMatcher();
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
		this.item.is() ? this.matcher = this.options.getFindExactMatch() ? at(this.item.get()) : ot(this.item.get()) : this.matcher = void 0;
	}
}, ct = class {
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
}, lt = class {
	constructor(e, t, n, r) {
		y(this, "options", void 0), y(this, "item", void 0), y(this, "matcher", void 0), y(this, "data", void 0), y(this, "callbackToSelection", (e, t) => {
			if (this.matcher.isSelection(t)) return this.data.toFormatItem(e, !0);
			if (this.options.getReturnEverything()) return this.data.toFormatItem(e, !1);
		}), y(this, "callbackToNone", (e) => this.data.toFormatItem(e, !1)), this.options = new ct(r), this.item = new rt(n, this.options), this.matcher = new st(this.item, this.options), this.data = new nt(e, t, this.item, this.options);
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
}, ut = [
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
], dt = (e, t = {}) => {
	let n = String(e);
	if (e.match(/%[a-z]/)) {
		let e = 0;
		r(t, (t) => {
			n = n.replace(RegExp(`%${ut[e++]}`, "g"), String(t));
		});
	}
	return c(t) && r(t, (e, t) => {
		n = n.replace(RegExp(`(?:\\[|\\{)${t}(?:\\]|\\})(.*?)(?:\\[|\\{)\\/${t}(?:\\]|\\})`, "g"), (t, n) => String(e).replace(/(?:\[|\{)content(?:\]|\})/g, n)).replace(RegExp(`(?:\\[|\\{)${t}(?:\\]|\\})`, "g"), String(e));
	}), n;
}, ft = "global", pt = 160, Z = class {
	static isFile() {
		return Object.keys(this.files).length > 0 && this.getIndex() !== void 0;
	}
	static async getList() {
		let e = this.getIndex();
		if (e) {
			var t;
			return (t = this.getByData(e)) == null ? await this.getByFile(e) : t;
		}
	}
	static add(e) {
		r(e, (e, t) => {
			h(e) && (this.files[t] = e);
		});
	}
	static getIndex() {
		if (S.getLocation() in this.files) return S.getLocation();
		if (S.getLanguage() in this.files) return S.getLanguage();
		if ("global" in this.files) return ft;
	}
	static getByData(e) {
		if (e in this.data) return this.data[e];
	}
	static async getByFile(e) {
		if (e in this.files) {
			let t = await g(this.files[e]);
			return t && (this.data[e] = t), t;
		}
	}
};
y(Z, "files", {}), y(Z, "data", {});
//#endregion
//#region src/classes/Translate.ts
var Q = class e {
	static async get(e, t) {
		var n;
		let r = this.getText(e);
		return r ? this.replacement(r, t) : (k.isLocalhost() || await this.add(e), this.replacement((n = this.getText(e)) == null ? e : n));
	}
	static getSync(e, t = !1, n) {
		let r = this.getText(e);
		return r ? this.replacement(r, n) : t ? " " : e;
	}
	static getList(e) {
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
	static getListSync(e, t = !1) {
		let n = {};
		for (let r of e) {
			let e = Array.isArray(r) ? r[0] : r, i = Array.isArray(r) ? r.slice(1) : void 0;
			n[e] = this.getSync(e, t, i);
		}
		return n;
	}
	static add(e) {
		return new Promise((t) => {
			this.getNamesNone(e).length > 0 ? (this.cache.push(...this.getNamesNone(e)), this.resolveList.push(t), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
				this.timeout = void 0, this.make().then(() => {
					this.resolveList.forEach((e) => e()), this.resolveList = [];
				});
			}, 160)) : t();
		});
	}
	static addSync(e) {
		r(e, (e, t) => {
			l(e) && s(e) && (this.data[this.getName(t)] = e);
		});
	}
	static async addNormalOrSync(e) {
		if (s(e)) if (k.isLocalhost()) this.addSync(e);
		else {
			let t = Object.keys(e);
			t.length > 0 && await this.add(t);
		}
	}
	static addSyncByLocation(e) {
		r(e, (e, t) => r(e, (e, n) => {
			let r = `${t}-${n}`;
			r in this.data || (this.data[r] = e);
		}));
	}
	static addSyncByFile(e) {
		Z.add(e);
	}
	static setUrl(t) {
		return this.url = t, e;
	}
	static setPropsName(e) {
		return this.propsName = e, this;
	}
	static setReadApi(e) {
		return this.isReadApi = e, this;
	}
	static hasName(e) {
		return this.getName(e) in this.data || this.getNameByLanguage(e) in this.data || this.getNameByGlobal(e) in this.data;
	}
	static getText(e) {
		let t = this.getName(e);
		if (t in this.data) return this.data[t];
		let n = this.getNameByLanguage(e);
		if (n in this.data) return this.data[n];
		let r = this.getNameByGlobal(e);
		if (r in this.data) return this.data[r];
	}
	static getName(e) {
		return `${S.getLocation()}-${e}`;
	}
	static getNameByLanguage(e) {
		return `${S.getLanguage()}-${e}`;
	}
	static getNameByGlobal(e) {
		return `${ft}-${e}`;
	}
	static getNamesNone(e) {
		let t = [];
		return w(e).forEach((e) => {
			e !== "__TRANSLATE_START__" && e !== "__TRANSLATE_END__" && !(this.getName(e) in this.data) && t.push(e);
		}), t;
	}
	static async getResponse() {
		let e = await k.get({
			api: !1,
			path: this.url,
			request: { [this.propsName]: this.cache },
			toData: !0,
			global: !0
		});
		return e == null ? {} : e;
	}
	static replacement(e, t) {
		return t ? dt(e, t) : e;
	}
	static async make() {
		let e;
		Z.isFile() ? e = await Z.getList() : this.isReadApi && (e = await this.getResponse()), e && this.makeList(e);
	}
	static makeList(e) {
		this.cache.forEach((t) => {
			var n;
			this.data[this.getName(t)] = (n = e == null ? void 0 : e[t]) == null ? "" : n;
		}), this.cache = [];
	}
};
y(Q, "url", "/api/translate"), y(Q, "propsName", "list"), y(Q, "data", {}), y(Q, "cache", []), y(Q, "resolveList", []), y(Q, "timeout", void 0), y(Q, "isReadApi", !0);
//#endregion
//#region src/functions/arrFill.ts
function mt(e, t) {
	return Array(t).fill(e);
}
//#endregion
//#region src/functions/blobToBase64.ts
function ht(e) {
	return new Promise((t, n) => {
		let r = new FileReader();
		r.onloadend = () => t(r.result), r.onerror = n, r.readAsDataURL(e);
	});
}
//#endregion
//#region src/functions/domQuerySelector.ts
function gt(e) {
	if (d()) {
		var t;
		return (t = document.querySelector(e)) == null ? void 0 : t;
	}
}
//#endregion
//#region src/functions/domQuerySelectorAll.ts
function _t(e) {
	if (d()) return document.querySelectorAll(e);
}
//#endregion
//#region src/functions/getElementImage.ts
function vt(e) {
	return l(e) ? W(void 0, "img", { src: e }) : e;
}
//#endregion
//#region src/functions/resizeImageByMax.ts
function yt(e, t = "auto") {
	switch (t) {
		case "auto": return e.naturalWidth >= e.naturalHeight;
		case "width": return !0;
		case "height": return !1;
	}
}
function bt(e, t, n = "auto", r) {
	let i = vt(e);
	if (i && (i.naturalWidth > t && (n === "auto" || n === "width") || i.naturalHeight > t && (n === "auto" || n === "height"))) {
		var a;
		let e = yt(i, n), o = (a = document.createElement("canvas")) == null ? void 0 : a.getContext("2d");
		if (o) return o.canvas.width = e ? t : i.naturalWidth / i.naturalHeight * t, o.canvas.height = e ? i.naturalHeight / i.naturalWidth * t : t, o.drawImage(i, 0, 0, o.canvas.width, o.canvas.height), o.canvas.toDataURL(r);
	}
}
//#endregion
//#region src/functions/ensureMaxSize.ts
async function xt(e, t = .56, n = "image/jpeg") {
	return new Promise((r) => {
		let i = new Blob([e], { type: n }), a = vt(URL.createObjectURL(i));
		a ? a.onload = () => {
			let e = bt(a, t * a.naturalWidth, "width", n);
			r(e == null ? "" : e);
		} : ht(i).then((e) => r(String(e == null ? "" : e)));
	});
}
//#endregion
//#region src/functions/eventStopPropagation.ts
function St(e) {
	e.preventDefault(), e.stopPropagation();
}
//#endregion
//#region src/functions/frame.ts
function Ct(e, t, n) {
	let r = () => {
		e(), t != null && t() ? Ct(e, t, n) : n == null || n();
	};
	d() ? requestAnimationFrame(r) : r();
}
//#endregion
//#region src/functions/getAttributes.ts
function wt(e) {
	let t = {}, n = C(e);
	if (n) for (let e of n.attributes) {
		var r;
		t[e.name] = (r = (e == null ? void 0 : e.value) || (e == null ? void 0 : e.textContent)) == null ? void 0 : r;
	}
	return t;
}
//#endregion
//#region src/functions/getClipboardData.ts
async function Tt(e) {
	var t, n;
	return (t = e == null || (n = e.clipboardData) == null ? void 0 : n.getData("text")) == null ? await navigator.clipboard.readText() || "" : t;
}
//#endregion
//#region src/functions/getCurrentDate.ts
function Et(e = "datetime") {
	return new je(void 0, e).standard();
}
//#endregion
//#region src/functions/getElementId.ts
var Dt = O(1e5, 9e5);
function Ot(e, t) {
	let n = C(e);
	return n ? (s(n.id) || n.setAttribute("id", `id-${Dt++}`), t ? `#${n.id}${t}`.trim() : n.id) : `id-${Dt++}`;
}
//#endregion
//#region src/functions/getKey.ts
function kt(e) {
	var t, n, r;
	return (t = (n = e == null ? void 0 : e.key) == null ? e == null ? void 0 : e.code : n) == null ? e == null || (r = e.keyCode) == null ? void 0 : r.toString() : t;
}
//#endregion
//#region src/functions/getLengthOfAllArray.ts
function At(e) {
	return r(e, (e) => e.length);
}
//#endregion
//#region src/functions/getMaxLengthAllArray.ts
function jt(e) {
	return Math.max(...At(e));
}
//#endregion
//#region src/functions/getMinLengthAllArray.ts
function Mt(e) {
	return Math.min(...At(e));
}
//#endregion
//#region src/functions/getMouseClientX.ts
function Nt(e) {
	var t, n;
	return (e == null ? void 0 : e.clientX) || (e == null || (t = e.targetTouches) == null || (t = t[0]) == null ? void 0 : t.clientX) || (e == null || (n = e.touches) == null || (n = n[0]) == null ? void 0 : n.clientX) || 0;
}
//#endregion
//#region src/functions/getMouseClientY.ts
function Pt(e) {
	var t, n;
	return (e == null ? void 0 : e.clientY) || (e == null || (t = e.targetTouches) == null || (t = t[0]) == null ? void 0 : t.clientY) || (e == null || (n = e.touches) == null || (n = n[0]) == null ? void 0 : n.clientY) || 0;
}
//#endregion
//#region src/functions/getMouseClient.ts
function Ft(e) {
	return {
		x: Nt(e),
		y: Pt(e)
	};
}
//#endregion
//#region src/functions/getObjectByKeys.ts
function It(e, t) {
	let n = {};
	return t.forEach((t) => {
		t in e && e[t] !== void 0 && (n[t] = e[t]);
	}), n;
}
//#endregion
//#region src/functions/getObjectNoUndefined.ts
function Lt(e, t = void 0) {
	let n = {};
	return r(e, (e, r) => {
		e !== t && (n[r] = e);
	}), n;
}
//#endregion
//#region src/functions/getObjectOrNone.ts
function Rt(e) {
	return c(e) ? e : {};
}
//#endregion
//#region src/functions/strFill.ts
function zt(e, t) {
	return mt(e, t).join("");
}
//#endregion
//#region src/functions/getRandomText.ts
function Bt(e, t, n = "#", r = 2, i = 12) {
	let a = O(e, t), o = [];
	for (let e = 0; e < a; e++) o.push(zt(n, O(r, i)));
	return o.join(" ");
}
//#endregion
//#region src/functions/getStepPercent.ts
function Vt(e, t) {
	let n = e == null ? 0 : e;
	return t > n ? 100 / (t - n) : 0;
}
//#endregion
//#region src/functions/getStepValue.ts
function Ht(e, t) {
	let n = e == null ? 0 : e;
	return t > n ? (t - n) / 100 : 0;
}
//#endregion
//#region src/functions/goScroll.ts
var Ut = 0;
function Wt(e, t, n) {
	let r = t == null ? void 0 : t.closest(e);
	if (t && r && r.scrollHeight !== r.offsetHeight) {
		let e = r.getBoundingClientRect(), i = t.getBoundingClientRect();
		if (n) {
			let a = n.getBoundingClientRect();
			r.scrollTop = t.offsetTop - (a.top - e.top) - (a.height / 2 - i.height / 2), r.scrollTop + r.offsetHeight < t.offsetTop + t.offsetHeight && (r.scrollTop = t.offsetTop + t.offsetHeight - r.offsetHeight);
		} else r.scrollTop > t.offsetTop ? r.scrollTop = i.top - e.top - Ut : r.scrollTop + r.offsetHeight < t.offsetTop + t.offsetHeight && (r.scrollTop = i.top - e.top + i.height - e.height + Ut);
	}
}
//#endregion
//#region src/functions/goScrollSmooth.ts
function Gt(e, t, n = 0) {
	if (!d()) return;
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
function Kt(e, t, n = "smooth") {
	if (!d() || !e || !t) return;
	let r = e.getBoundingClientRect(), i = t.getBoundingClientRect();
	e.scrollBy({
		top: i.top - r.top,
		left: i.left - r.left,
		behavior: n
	});
}
//#endregion
//#region src/functions/isShare.ts
function qt() {
	return d() && typeof navigator < "u" && !!navigator.share;
}
//#endregion
//#region src/functions/handleShare.ts
async function Jt(e) {
	if (qt() && navigator.canShare && navigator.canShare(e)) try {
		return await navigator.share(e), !0;
	} catch (e) {
		console.error("handleShare error:", e);
	}
	return !1;
}
//#endregion
//#region src/functions/inArray.ts
function Yt(e, t) {
	return e.indexOf(t) !== -1;
}
//#endregion
//#region src/functions/initScrollbarOffset.ts
async function Xt() {
	if (d()) {
		let e = await Y.get();
		document.body.style.setProperty("--sys-scrollbar-offset", `${e}px`);
	}
}
//#endregion
//#region src/functions/intersectKey.ts
function Zt(e, t) {
	let i = {};
	return n(e) && n(t) && r(e, (e, n) => {
		n in t && (i[n] = e);
	}), i;
}
//#endregion
//#region src/functions/isApiSuccess.ts
var Qt = (e) => {
	var t;
	return a(e) ? !0 : !!(e && c(e) && ((e == null ? void 0 : e.status) === "success" || e != null && e.success || !(e == null || (t = e.statusObject) == null) && t.status && String(e.statusObject.status).match(/^2/) || !("status" in e) && !("success" in e) && !("statusObject" in e) && String(k.getStatus().getStatus()).match(/^2/)));
};
//#endregion
//#region src/functions/isDifferent.ts
function $t(e, t) {
	let n = Object.keys(e).length !== Object.keys(t).length;
	return n || r(e, (e, r) => {
		e !== (t == null ? void 0 : t[r]) && (n = !0);
	}), n;
}
//#endregion
//#region src/functions/isElementVisible.ts
function en(e) {
	if (!d()) return !1;
	let t = C(e);
	if (!t || "isConnected" in t && t.isConnected === !1) return !1;
	let n = window.getComputedStyle(t);
	return n.display !== "none" && n.visibility !== "hidden" && n.opacity !== "0" && t.offsetWidth !== 0 && t.offsetHeight !== 0;
}
//#endregion
//#region src/functions/isInput.ts
var tn = (e) => {
	if (e instanceof HTMLElement) {
		let t = e.tagName.toLowerCase();
		return !!(t === "input" || t === "textarea" || t === "select" || e.isContentEditable || e.getAttribute("contenteditable") === "true");
	}
	return !1;
}, nn = (e, t) => e.code === "Space" || e.code === "Enter" || e.key === " " || e.key === "Spacebar" || e.key === "Enter" || e.keyCode === 13 || e.keyCode === 32 ? t === void 0 ? !tn(e.target) : !t : !1;
//#endregion
//#region src/functions/isFloat.ts
function rn(e) {
	switch (typeof e) {
		case "number": return !0;
		case "string": return !!e.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
		default: return !1;
	}
}
//#endregion
//#region src/functions/isIntegerBetween.ts
function an(e, t) {
	let n = Math.floor(t);
	return e >= n && e < n + 1;
}
//#endregion
//#region src/functions/isSelectedByList.ts
function on(e, t) {
	return Array.isArray(e) ? e.every((e) => m(e, t)) : m(e, t);
}
//#endregion
//#region src/functions/removeCommonPrefix.ts
function sn(e, t) {
	if (e.startsWith(t)) return e.slice(t.length).trim();
	let n = 0;
	for (; e[n] === t[n] && n < e.length && n < t.length;) n++;
	return e.slice(n).trim();
}
//#endregion
//#region src/functions/replaceComponentName.ts
var cn = (e, t, n) => {
	var r;
	return e == null || (r = e.replace(RegExp(`<${t}`, "ig"), `<${n}`)) == null || (r = r.replace(RegExp(`</${t}`, "ig"), `</${n}`)) == null ? void 0 : r.trim();
};
//#endregion
//#region src/functions/uniqueArray.ts
function ln(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/functions/replaceRecursive.ts
function $(e, t, i = !0) {
	let a = u(e);
	return n(e) && n(t) && r(t, (t, r) => {
		let o = e == null ? void 0 : e[r];
		n(o) && n(t) ? i && Array.isArray(o) && Array.isArray(t) ? a[r] = u(ln([...o, ...t])) : a[r] = $(Array.isArray(o) ? { ...o } : o, t, i) : a[r] = n(t) ? u(t) : t;
	}), a;
}
//#endregion
//#region src/functions/replaceTemplate.ts
function un(e, t) {
	let n = e;
	return r(t, (e, t) => {
		n = n.replace(it(`[${t}]`), g(e));
	}), n;
}
//#endregion
//#region src/functions/secondToTime.ts
function dn(e) {
	let t = p(e);
	return t > 0 ? `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}` : "00:00";
}
//#endregion
//#region src/functions/setValues.ts
function fn(e, t, { multiple: n = !1, maxlength: r = 0, alwaysChange: i = !0, notEmpty: o = !1 }) {
	if (n) {
		if (a(e)) {
			let n = e.indexOf(t), i = [...e];
			return n === -1 ? (!r || e.length < r) && i.push(t) : (!o || i.length > 1) && i.splice(n, 1), i;
		}
		return e === t ? [] : e ? [e, t] : [t];
	}
	return i || e !== t ? t : e;
}
//#endregion
//#region src/functions/splice.ts
function pn(e, t, i) {
	if (n(e) && n(t)) {
		if (i) {
			let a = {}, o = !1;
			return r(e, (e, r) => {
				!o && (i === r || i === e) ? (o = !0, a = $(a, t)) : o ? a = $(a, { [r]: e }) : a[r] = n(e) ? u(e) : e;
			}), o ? a : $(e, t);
		}
		if (n(t)) return $(e, t);
	}
	return u(e);
}
//#endregion
//#region src/functions/toCamelCaseFirst.ts
function mn(e) {
	return I(e).replace(/^([a-z])/, (e) => `${e.toUpperCase()}`);
}
//#endregion
//#region src/functions/toKebabCase.ts
function hn(e) {
	return e.toString().trim().replace(/[^\w-. ]+/g, "").replace(/[ .]+/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (e) => `${e.toLowerCase()}`).replace(/^[A-Z]/, (e) => e.toLowerCase()).replace(/(?<=[\w ])[A-Z]/g, (e) => `-${e.toLowerCase()}`).replace(/[A-Z]/g, (e) => e.toLowerCase());
}
//#endregion
//#region src/functions/toNumberByMax.ts
function gn(e, t, n, r) {
	let i = p(e), a = p(t);
	return t && a < i ? `${_n(a, n, r)}+` : _n(i, n, r);
}
var _n = (e, t, n) => t ? new N(n).number(e) : e;
//#endregion
//#region src/functions/toPercent.ts
function vn(e, t) {
	return 1 / e * t;
}
//#endregion
//#region src/functions/toPercentBy100.ts
function yn(e, t) {
	return vn(e, t) * 100;
}
//#endregion
//#region src/functions/uint8ArrayToBase64.ts
function bn(e) {
	let t = "";
	for (let n of e) t += String.fromCharCode(n);
	if (d()) return window.btoa(t);
	if (globalThis && globalThis.Buffer) {
		var n;
		return (n = globalThis) == null ? void 0 : n.Buffer.from(e).toString("base64");
	}
	return "";
}
//#endregion
//#region src/functions/writeClipboardData.ts
async function xn(e) {
	if (d()) try {
		await navigator.clipboard.writeText(e);
	} catch (n) {
		var t;
		(t = document) == null || t.execCommand(e);
	}
}
//#endregion
export { k as Api, fe as ApiDefault, de as ApiHeaders, _e as ApiInstance, E as ApiMethodItem, ge as ApiPreparation, he as ApiResponse, D as ApiStatus, ve as BroadcastMessage, xe as Cache, be as CacheItem, Ce as CacheStatic, Oe as Cookie, Ee as CookieBlock, b as DataStorage, je as Datetime, ce as EventItem, Ne as Formatters, L as FormattersType, Pe as GEO_FLAG_ICON_NAME, S as Geo, Fe as GeoFlag, N as GeoIntl, z as GeoPhone, Ie as Global, H as Hash, U as Icons, T as Loading, $e as Meta, G as MetaManager, Ze as MetaOg, Je as MetaOpenGraphAge, Ke as MetaOpenGraphAvailability, qe as MetaOpenGraphCondition, Ye as MetaOpenGraphGender, q as MetaOpenGraphTag, Ge as MetaOpenGraphType, We as MetaRobots, K as MetaTag, Qe as MetaTwitter, Xe as MetaTwitterCard, J as MetaTwitterTag, Y as ScrollbarWidth, lt as SearchList, nt as SearchListData, rt as SearchListItem, st as SearchListMatcher, ct as SearchListOptions, ft as TRANSLATE_GLOBAL_PREFIX, pt as TRANSLATE_TIME_OUT, Q as Translate, Z as TranslateFile, tt as addTagHighlightMatch, P as anyToString, dt as applyTemplate, mt as arrFill, ht as blobToBase64, u as copyObject, t as copyObjectLite, W as createElement, gt as domQuerySelector, _t as domQuerySelectorAll, Ue as encodeAttribute, xt as ensureMaxSize, X as escapeExp, St as eventStopPropagation, g as executeFunction, pe as executePromise, r as forEach, Ct as frame, wt as getAttributes, Tt as getClipboardData, ke as getColumn, Et as getCurrentDate, C as getElement, Ot as getElementId, vt as getElementImage, Ve as getElementItem, oe as getElementOrWindow, at as getExactSearchExp, it as getExp, F as getItemByPath, kt as getKey, At as getLengthOfAllArray, jt as getMaxLengthAllArray, Mt as getMinLengthAllArray, Ft as getMouseClient, Nt as getMouseClientX, Pt as getMouseClientY, It as getObjectByKeys, Lt as getObjectNoUndefined, Rt as getObjectOrNone, Bt as getRandomText, i as getRequestString, ot as getSearchExp, et as getSeparatingSearchExp, Vt as getStepPercent, Ht as getStepValue, Wt as goScroll, Gt as goScrollSmooth, Kt as goScrollTo, Jt as handleShare, Yt as inArray, Xt as initScrollbarOffset, Zt as intersectKey, Qt as isApiSuccess, a as isArray, $t as isDifferent, _ as isDomData, d as isDomRuntime, en as isElementVisible, nn as isEnter, s as isFilled, rn as isFloat, h as isFunction, se as isInDom, tn as isInput, an as isIntegerBetween, o as isNull, f as isNumber, n as isObject, c as isObjectNotArray, m as isSelected, on as isSelectedByList, qt as isShare, l as isString, ae as isWindow, O as random, sn as removeCommonPrefix, cn as replaceComponentName, $ as replaceRecursive, un as replaceTemplate, bt as resizeImageByMax, dn as secondToTime, He as setElementItem, fn as setValues, pn as splice, zt as strFill, Me as strSplit, w as toArray, I as toCamelCase, mn as toCamelCaseFirst, M as toDate, hn as toKebabCase, p as toNumber, gn as toNumberByMax, vn as toPercent, yn as toPercentBy100, we as transformation, bn as uint8ArrayToBase64, ln as uniqueArray, xn as writeClipboardData };
