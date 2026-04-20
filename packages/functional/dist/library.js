import { Api as e, ApiMethodItem as t, BroadcastMessage as n, Cookie as r, DataStorage as i, Datetime as a, ErrorCenter as o, EventItem as s, Formatters as c, Geo as l, GeoFlag as u, GeoIntl as d, Hash as f, Icons as p, Loading as m, Meta as h, ScrollbarWidth as g, SearchList as _, ServerStorage as v, Translate as y, executeFunction as b, executePromise as x, forEach as S, getColumn as C, getElementId as w, getExp as T, isApiSuccess as ee, isArray as te, isDomRuntime as E, isFunction as ne, isObject as D, isObjectNotArray as O, isSelected as k, isString as A, random as re, toArray as j, toCamelCase as ie, toDate as ae } from "@dxtmisha/functional-basic";
import { computed as M, customRef as oe, effectScope as se, getCurrentInstance as ce, h as le, inject as ue, isRef as N, onUnmounted as de, provide as fe, ref as P, shallowRef as F, toRefs as pe, triggerRef as me, useAttrs as he, useSlots as ge, watch as I, watchEffect as L } from "vue";
export * from "@dxtmisha/functional-basic";
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/typeof.js
function R(e) {
	"@babel/helpers - typeof";
	return R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, R(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/toPrimitive.js
function _e(e, t) {
	if (R(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (R(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/toPropertyKey.js
function ve(e) {
	var t = _e(e, "string");
	return R(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/defineProperty.js
function z(e, t, n) {
	return (t = ve(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/design/DesignChanged.ts
var ye = class {
	constructor(e, t = Object.keys(e)) {
		z(this, "cache", {}), this.props = e, this.watch = t;
	}
	is(e) {
		return te(e) ? !!e.find((e) => this.isDifferent(e)) : this.isDifferent(e);
	}
	isChanged() {
		let e = this.props;
		return !!this.watch.find((t) => t in e && this.isDifferent(t));
	}
	update() {
		let e = this.props;
		this.watch.forEach((t) => {
			t in e && this.isDifferent(t) && (this.cache[t] = e[t]);
		});
	}
	isDifferent(e) {
		var t, n;
		return ((t = this.cache) == null ? void 0 : t[e]) !== ((n = this.props) == null ? void 0 : n[e]);
	}
}, be = class {
	constructor(e, t, n) {
		z(this, "event", {}), z(this, "changed", void 0), this.props = e, this.callback = t, this.changed = new ye(e, n);
	}
	make(e) {
		return this.makeCallback(e), this;
	}
	is(e) {
		return e in this.props;
	}
	isChanged(e, t) {
		return !(e in this.event) || this.changed.is(t || e);
	}
	makeCallback(e = !1) {
		(e || this.changed.isChanged()) && (this.initEvent(), this.makeCallbackItem(), this.changed.update());
	}
	makeCallbackItem() {
		this.callback && this.callback(this.event);
	}
}, xe = class extends be {
	make(e) {
		return this.makeCallback(e).then(), this;
	}
	async makeCallback(e) {
		(e || this.changed.isChanged()) && (await this.initEvent(), this.makeCallbackItem(), this.changed.update());
	}
};
//#endregion
//#region src/functions/ref/getRef.ts
function B(e) {
	return N(e) ? e.value : e;
}
//#endregion
//#region src/functions/render/getClassName.ts
function Se(e) {
	return e && "class" in e && typeof e.class == "string" ? e.class : void 0;
}
//#endregion
//#region src/functions/render/getIndexForRender.ts
function V(e, t, n) {
	let r = t == null ? void 0 : t.id, i = t == null ? void 0 : t.index, a = Se(t), o = "";
	if (A(e) && (o += e), n && (o += `.${n}`), i && A(i) && (o += `.${i}`), a && (o += `.${a}`), r && (o += `.${r}`), o !== "") return o;
}
//#endregion
//#region src/functions/ref/render.ts
function Ce(e, t, n, r) {
	let i = t, a = t && "key" in t;
	return (!t || !a) && (i = {
		...t,
		key: V(e, t, r)
	}), le(e, i, n);
}
//#endregion
//#region src/functions/toBind.ts
function H(e, t) {
	let n = e == null ? void 0 : e.class, r = t == null ? void 0 : t.class, i = e == null ? void 0 : e.style, a = t == null ? void 0 : t.style, o = {
		...e,
		...t
	};
	return n && r && (o.class = [], n && o.class.push(n), r && o.class.push(r)), i && a && (o.style = [], i && o.style.push(i), a && o.style.push(a)), o;
}
//#endregion
//#region src/functions/toBinds.ts
function we(...e) {
	let t = {};
	return e.forEach((e) => {
		e && (t = H(t, e));
	}), t;
}
//#endregion
//#region src/classes/design/DesignComponents.ts
var U = class {
	constructor(e = {}, t) {
		z(this, "caching", {}), this.components = e, this.modification = t;
	}
	is(e) {
		return e in this.components;
	}
	get(e) {
		var t;
		return (t = this.components) == null ? void 0 : t[e];
	}
	getModification(e, t) {
		if (e) {
			e in this.caching || (this.caching[e] = M(() => this.computeModification(e)));
			let n = this.caching[e];
			if (n) return t ? we(n.value, t) : n.value;
		}
		return t;
	}
	render(e, t, n, r) {
		let i = this.renderOne(e, t, n, r);
		return i ? [i] : [];
	}
	renderOne(e, t, n, r) {
		if (this.is(e)) {
			let i = r == null ? e : r;
			return Ce(this.get(e), this.getModification(i, t), n, i);
		}
	}
	renderAdd(e, t, n, r, i) {
		return e.push(...this.render(t, n, r, i)), this;
	}
	computeModification(e) {
		var t;
		let n = B((t = this.modification) == null ? void 0 : t[e]);
		if (n && O(n)) {
			let e = {};
			return S(n, (t, n) => {
				e[n] = B(t);
			}), e;
		}
		return {};
	}
}, Te = class extends U {}, Ee = class {
	constructor(e, t, n) {
		z(this, "name", void 0), z(this, "element", P()), z(this, "refs", void 0), z(this, "components", void 0), z(this, "emits", void 0), z(this, "classes", void 0), z(this, "classesSub", void 0), z(this, "styles", void 0), z(this, "stylesSub", void 0), z(this, "attrs", void 0), z(this, "slots", void 0), z(this, "dataExpose", void 0), this.props = t, this.options = n, this.name = this.initName(e), this.refs = this.props ? pe(this.props) : {}, this.components = new U(n == null ? void 0 : n.components, n == null ? void 0 : n.compMod), this.emits = n == null ? void 0 : n.emits, this.classes = M(() => this.updateClasses()), this.styles = M(() => this.updateStyles()), this.attrs = he(), this.slots = ge();
	}
	init() {
		return this.classesSub = M(() => this.initClasses()), this.stylesSub = M(() => this.initStyles()), this.dataExpose = this.initExpose(), this;
	}
	getName() {
		return this.name.join("-");
	}
	getDesign() {
		return String(this.name[0]);
	}
	getSubClass(e) {
		return `${this.getName()}__${j(e).join("__")}`;
	}
	getStatusClass(e) {
		return `${this.getName()}--${j(e).join("--")}`;
	}
	getStyle(e) {
		return `--${this.getName()}-sys-${j(e).join("-")}`;
	}
	getAttrs() {
		var e;
		let t = { ...(e = this.attrs) == null ? {} : e };
		return "class" in t && delete t.class, "style" in t && delete t.style, t;
	}
	expose() {
		var e;
		return {
			...(e = this.dataExpose) == null ? {} : e,
			elementHtml: this.element
		};
	}
	render() {
		return () => this.initRender();
	}
	initSlot(e, t, n = {}) {
		var r;
		if (this.slots && (r = this.slots) != null && r[e] && typeof this.slots[e] == "function") {
			let r = this.slots[e](n);
			return t && t.push(r), r;
		}
	}
	toClass(e) {
		return O(e) ? e : Array.isArray(e) ? { [e.filter((e) => typeof e == "string" && e.trim() !== "").join(" ")]: !0 } : typeof e == "string" ? { [e]: !0 } : {};
	}
	toClassName(e) {
		if (D(e)) {
			let t = {};
			return S(e, (e, n) => {
				n.match(/\?\?/) ? t[n.replace(/\?\?/, this.getName())] = e : n.match(/\?/) ? t[n.replace(/\?/, this.getDesign())] = e : t[n] = e;
			}), t;
		}
		return {};
	}
	initName(e) {
		return S(e.split(".", 2), (e) => ie(e));
	}
	updateClasses() {
		var e, t, n;
		let r = (e = this.classesSub) == null ? void 0 : e.value, i = (t = this.options) == null || (t = t.classes) == null ? void 0 : t.value;
		if (r && i) {
			var a;
			return {
				...r,
				...i,
				main: {
					...this.toClass(r == null ? void 0 : r.main),
					...this.toClass(i == null ? void 0 : i.main),
					...this.toClass((a = this.attrs) == null ? void 0 : a.class)
				}
			};
		}
		return (n = i == null ? r : i) == null ? { main: {} } : n;
	}
	updateStyles() {
		var e, t, n;
		let r = (e = this.stylesSub) == null ? void 0 : e.value, i = (t = this.options) == null || (t = t.styles) == null ? void 0 : t.value;
		return r && i ? {
			...r,
			...i
		} : (n = i == null ? r : i) == null ? {} : n;
	}
};
//#endregion
//#region src/functions/ref/toRefItem.ts
function W(e) {
	return N(e) ? e : P(e);
}
//#endregion
//#region src/classes/ref/DatetimeRef.ts
var De = class {
	constructor(e, t = "date", n = l.getLocation()) {
		z(this, "item", void 0), z(this, "type", void 0), z(this, "code", void 0), z(this, "date", void 0), z(this, "datetime", void 0), z(this, "year", P(2e3)), z(this, "month", P(1)), z(this, "day", P(1)), z(this, "hour", P(1)), z(this, "minute", P(1)), z(this, "second", P(1)), this.item = W(e), this.type = W(t), this.code = W(n), this.date = P(ae(this.item.value)), this.datetime = new a(this.date.value, this.type.value, this.code.value), I(this.item, (e) => {
			this.date.value = ae(e);
		}), I(this.type, (e) => this.datetime.setType(e)), I(this.code, (e) => this.datetime.setCode(e)), I(this.date, (e) => {
			this.datetime.setDate(e), this.updateDate();
		}), this.datetime.setWatch(() => me(this.date)), this.updateDate();
	}
	getItem() {
		return this.item;
	}
	getDate() {
		return this.date;
	}
	getDatetime() {
		return this.datetime;
	}
	getHoursType() {
		return M(() => this.date.value && this.datetime.getHoursType());
	}
	getFirstDayCode() {
		return M(() => this.date.value && this.datetime.getFirstDayCode());
	}
	getYear() {
		return M(() => this.year.value);
	}
	getMonth() {
		return M(() => this.month.value);
	}
	getDay() {
		return M(() => this.day.value);
	}
	getHour() {
		return M(() => this.hour.value);
	}
	getMinute() {
		return M(() => this.minute.value);
	}
	getSecond() {
		return M(() => this.second.value);
	}
	getMaxDay() {
		return M(() => this.date.value && this.datetime.getMaxDay());
	}
	locale(e = this.type.value, t) {
		return M(() => this.date.value && this.datetime.locale(e, t));
	}
	standard(e = !0) {
		return M(() => this.date.value && this.datetime.standard(e));
	}
	updateDate() {
		return this.year.value = this.datetime.getYear(), this.month.value = this.datetime.getMonth(), this.day.value = this.datetime.getDay(), this.hour.value = this.datetime.getHour(), this.minute.value = this.datetime.getMinute(), this.second.value = this.datetime.getSecond(), this;
	}
}, G = class {
	static run(e) {
		return this.getScope().run(e);
	}
	static getScope() {
		return v.get("__ui:effect-scope-global__", () => se(!0));
	}
}, Oe = class extends s {
	constructor(e, t, n = ["click"], r, i, a) {
		let o = W(e), s = W(t);
		super(o.value, n, r, i, a), s.value && this.setElementControl(s.value), I(o, (e) => this.setElement(e)), I(s, (e) => this.setElementControl(e));
	}
}, ke = class {
	constructor(e = l.getLocation()) {
		z(this, "code", void 0), z(this, "flag", void 0), this.code = W(e), this.flag = new u(this.code.value), I(this.code, (e) => this.flag.setCode(e));
	}
	getCode() {
		return this.code;
	}
	get(e = this.code.value) {
		return M(() => this.flag.get(e));
	}
	getFlag(e = this.code.value) {
		return M(() => {
			var t;
			return (t = this.flag.get(e)) == null ? void 0 : t.icon;
		});
	}
	getList(e) {
		return M(() => this.flag.getList(e));
	}
	getNational(e) {
		return M(() => this.flag.getNational(e));
	}
}, K, q = class {
	static get() {
		return v.get("__ui:geo-ref__", () => F(l.getItem()));
	}
	static getCountry() {
		return this.country;
	}
	static getLanguage() {
		return this.language;
	}
	static getStandard() {
		return this.standard;
	}
	static getFirstDay() {
		return this.firstDay;
	}
	static set(e) {
		l.set(e, !0), this.get().value = l.getItem();
	}
};
K = q, z(q, "country", M(() => K.get().value.country)), z(q, "language", M(() => K.get().value.language)), z(q, "standard", M(() => K.get().value.standard)), z(q, "firstDay", M(() => K.get().value.firstDay));
//#endregion
//#region src/classes/ref/GeoIntlRef.ts
var Ae = class {
	constructor(e) {
		z(this, "location", void 0), z(this, "intl", void 0), this.location = W(e), this.intl = M(() => {
			var e;
			return new d((e = this.location.value) == null ? q.getLanguage().value : e);
		});
	}
	display(e, t) {
		return M(() => this.intl.value.display(B(e), t));
	}
	languageName(e, t) {
		return M(() => this.intl.value.languageName(B(e), t));
	}
	countryName(e, t) {
		return M(() => this.intl.value.countryName(B(e), t));
	}
	number(e, t) {
		return M(() => this.intl.value.number(B(e), t));
	}
	decimal() {
		return M(() => this.intl.value.decimal());
	}
	currency(e, t, n = !1) {
		return M(() => this.intl.value.currency(B(e), B(t), n));
	}
	currencySymbol(e, t = "symbol") {
		return M(() => this.intl.value.currencySymbol(B(e), t));
	}
	unit(e, t) {
		return M(() => this.intl.value.unit(B(e), t));
	}
	sizeFile(e, t = "byte") {
		return M(() => this.intl.value.sizeFile(B(e), t));
	}
	percent(e, t) {
		return M(() => this.intl.value.percent(B(e), t));
	}
	percentBy100(e, t) {
		return M(() => this.intl.value.percentBy100(B(e), t));
	}
	plural(e, t, n, r) {
		return M(() => this.intl.value.plural(B(e), t, n, r));
	}
	date(e, t, n, r) {
		return M(() => this.intl.value.date(B(e), t, n, r));
	}
	relative(e, t, n) {
		return M(() => this.intl.value.relative(B(e), t, n));
	}
	relativeLimit(e, t, n, r, i, a, o) {
		return M(() => this.intl.value.relativeLimit(B(e), t, n, r, i, a, o));
	}
	relativeByValue(e, t, n) {
		return M(() => this.intl.value.relativeByValue(B(e), t, n));
	}
	month(e, t) {
		return M(() => this.intl.value.month(B(e), t));
	}
	months(e) {
		return M(() => this.intl.value.months(e));
	}
	weekday(e, t) {
		return M(() => this.intl.value.weekday(B(e), t));
	}
	weekdays(e) {
		return M(() => this.intl.value.weekdays(e));
	}
	time(e) {
		return M(() => this.intl.value.time(B(e)));
	}
	sort(e, t = (e, t) => [e, t]) {
		return M(() => this.intl.value.sort([...B(e)], t));
	}
}, je = class e {
	constructor(e, t, n, r, i, a, o, s, c, l = 0, u = 9999999, d) {
		z(this, "subList", {}), z(this, "data", M(() => S(B(this.list) || [], (e, t) => this.initItem(t, e)))), z(this, "liteData", M(() => {
			if (this.isLite()) {
				let e = [];
				for (let t of this.data.value) {
					let n = {
						parent: this.parent,
						index: t.index,
						type: t.type,
						label: t.label,
						description: t.description,
						value: t.value
					};
					"description" in t && (n.description = t.description), e.push(n);
				}
				return e;
			}
			return this.data.value;
		})), z(this, "fullData", M(() => {
			let e = this.getFocus(), t = this.getHighlight(), n = this.getSelected();
			return S(this.data.value, (r) => {
				var i, a;
				let o = k(r.index, n);
				return {
					...r,
					focus: e === r.index,
					highlight: t,
					filterMode: (i = this.filterMode) == null ? void 0 : i.value,
					selected: o,
					disabled: (a = r.disabled) == null ? !o && r.type === "item" && this.isSelectedMax.value : a
				};
			});
		})), z(this, "map", M(() => {
			let e = [];
			return this.data.value.forEach((t) => {
				switch (t.type) {
					case "item":
						e.push(t);
						break;
					case "group":
					case "menu":
						e.push(t, ...this.getSubList(t).map.value);
						break;
				}
			}), e;
		})), z(this, "mapItems", M(() => this.map.value.filter((e) => e.type === "item"))), z(this, "items", M(() => this.map.value.filter((e) => e.type === "item" || e.type === "group" || e.type === "menu"))), z(this, "highlightFirstItem", M(() => {
			let e = this.getHighlight();
			if (e && e.length >= this.getHighlightLengthStart()) {
				let t = T(e, "i");
				if (t) return this.map.value.findIndex((e) => {
					var n, r, i;
					return ((n = e.label) == null ? void 0 : n.toString().match(t)) || ((r = e.index) == null ? void 0 : r.toString().match(t)) || ((i = e.search) == null ? void 0 : i.toString().match(t));
				});
			}
			return -1;
		})), z(this, "isSelected", M(() => {
			let e = this.getSelected();
			return !!e && this.mapItems.value.findIndex((t) => k(t.index, e)) !== -1;
		})), z(this, "isSelectedMin", M(() => {
			let e = Number(B(this.min) || 0);
			return e > 0 ? this.selectedListInGroup.value.length >= e : !1;
		})), z(this, "isSelectedMax", M(() => {
			let e = Number(B(this.max) || 9999999);
			return e > 0 ? this.selectedListInGroup.value.length >= e : !1;
		})), z(this, "selectedList", M(() => {
			let e = this.getSelected();
			return e && this.isSelected.value ? this.mapItems.value.filter((t) => k(t.index, e)) : [];
		})), z(this, "selectedListInGroup", M(() => {
			let e = this.getSelected();
			return e && this.isSelected.value ? this.data.value.filter((t) => k(t.index, e)) : [];
		})), z(this, "selectedNames", M(() => C(this.selectedList.value, "label"))), z(this, "selectedValues", M(() => C(this.selectedList.value, "value"))), this.list = e, this.focus = t, this.highlight = n, this.highlightLengthStart = r, this.filterMode = i, this.selected = a, this.keyValue = o, this.keyLabel = s, this.lite = c, this.min = l, this.max = u, this.parent = d, N(e) && I(e, () => {
			this.subList = {};
		});
	}
	isLite() {
		var e;
		return !!((e = this.lite) != null && e.value && this.data.value.length > this.lite.value);
	}
	isFocus() {
		let e = this.getFocus();
		return !!(e && this.map.value.findIndex((t) => t.index === e) !== -1);
	}
	isHighlight() {
		return this.highlightFirstItem.value !== -1;
	}
	isHighlightActive() {
		var e, t;
		return ((e = (t = this.getHighlight()) == null ? void 0 : t.length) == null ? 0 : e) < this.getHighlightLengthStart() || this.isHighlight();
	}
	getLength() {
		return this.data.value.length;
	}
	getLengthByMap() {
		return this.map.value.length;
	}
	getLengthByItems() {
		return this.items.value.length;
	}
	getFocus() {
		var e;
		return (e = this.focus) == null ? void 0 : e.value;
	}
	getHighlight() {
		var e;
		return (e = this.highlight) == null ? void 0 : e.value;
	}
	getHighlightLengthStart() {
		var e, t;
		return (e = (t = this.highlightLengthStart) == null ? void 0 : t.value) == null ? 2 : e;
	}
	getSelected() {
		var e;
		return (e = this.selected) == null ? void 0 : e.value;
	}
	getSelectedByStep(e) {
		var t, n;
		let r = (t = this.selectedList.value) == null ? void 0 : t[0];
		if (r) {
			var i;
			return (i = this.getItemByStep(r, e)) == null ? void 0 : i.index;
		}
		return (n = this.mapItems.value[0]) == null ? void 0 : n.index;
	}
	getSelectedNext() {
		return this.getSelectedByStep(1);
	}
	getSelectedPrev() {
		return this.getSelectedByStep(-1);
	}
	getItemByStep(e, t) {
		let n = this.mapItems.value, r = n.findIndex((t) => t.index === e.index);
		if (r !== -1) {
			let e = r + t;
			if (e in n) return n[e];
		}
		if (t > 0) return n[0];
		if (t < 0) return n[n.length - 1];
	}
	getItemNext(e) {
		return this.getItemByStep(e, 1);
	}
	getItemPrev(e) {
		return this.getItemByStep(e, -1);
	}
	getIndexByStep(e, t) {
		let n = this.getItemByIndex(e);
		if (n) return this.getItemByStep(n.item, t);
	}
	getIndexNext(e) {
		return this.getIndexByStep(e, 1);
	}
	getIndexPrev(e) {
		return this.getIndexByStep(e, -1);
	}
	getItemByIndex(e) {
		let t = this.map.value.findIndex((t) => t.index === e);
		if (t !== -1) return {
			key: t,
			item: this.map.value[t]
		};
	}
	getItemByKey(e) {
		var t;
		return (t = this.map.value) == null ? void 0 : t[e];
	}
	getFirstItemByParent(e) {
		return this.map.value.find((t) => this.isInParent(e, t));
	}
	getLastItemByParent(e) {
		return this.map.value.filter((t) => this.isInParent(e, t)).pop();
	}
	getSubList(t) {
		return t.index in this.subList || (this.subList[t.index] = new e(t.value, this.focus, this.highlight, this.highlightLengthStart, this.filterMode, this.selected, this.keyValue, this.keyLabel, this.lite, this.min, this.max, t.index)), this.subList[t.index];
	}
	isItem(e) {
		return e.type === "item" || e.type === "group" || e.type === "menu";
	}
	isInParent(e, t) {
		return t.parent === e && this.isItem(t);
	}
	getIndex(e, t, n, r) {
		return e && !D(e) ? e : t && !D(t) ? t : n && r;
	}
	initItem(e, t) {
		if (O(t)) {
			var n, r, i, a, o, s;
			let c = t == null ? void 0 : t[(n = (r = this.keyValue) == null ? void 0 : r.value) == null ? "value" : n], l = (i = t == null ? void 0 : t[(a = (o = this.keyLabel) == null ? void 0 : o.value) == null ? "label" : a]) == null ? c : i, u = this.getIndex(t == null ? void 0 : t.index, c, e, l);
			return {
				...t,
				parent: this.parent,
				index: u,
				type: (s = t == null ? void 0 : t.type) == null ? "item" : s,
				label: l,
				value: c
			};
		}
		return {
			parent: this.parent,
			index: e.toString(),
			type: "item",
			label: t,
			value: e
		};
	}
}, Me = "__ui:router-item-ref__", J = class {
	static get() {
		return v.get(Me);
	}
	static getLink(e, t, n) {
		var r;
		return (r = this.get()) == null ? void 0 : r.resolve({
			name: e,
			params: t,
			query: n
		}).href;
	}
	static getHref(e, t, n) {
		if (e) {
			let r = this.getLink(e, t, n);
			if (r) return { href: r };
		}
		return {};
	}
	static push(e) {
		let t = this.get();
		t && t.push(e).then();
	}
	static set(e) {
		v.set(Me, () => e);
	}
	static setOneTime(e) {
		this.get() || this.set(e);
	}
	static rawToHref(e) {
		return O(e) && "name" in e && A(e == null ? void 0 : e.name) ? this.getHref(e.name) : {};
	}
}, Ne = class {
	constructor() {
		z(this, "item", P()), z(this, "width", P(0)), z(this, "is", M(() => this.item.value !== void 0)), E() && (g.is().then((e) => {
			this.item.value = e;
		}), g.get().then((e) => {
			this.width.value = e;
		}));
	}
}, Y = (e) => typeof e == "string" ? { method: e } : e || {};
//#endregion
//#region src/composables/ref/useApiRequest.ts
function X(n, r = t.post, i, a, o = !0, s, c = e.getItem()) {
	let l = P(!1), u = W(Y(s));
	return {
		loading: l,
		async send(e) {
			l.value = !0;
			let t;
			try {
				if (t = await c.request({
					path: B(n),
					method: r,
					request: e,
					toData: o,
					...u.value
				}), t && (a && (t = a(t)), i)) {
					let e = i(t);
					e instanceof Promise && await e;
				}
			} catch (e) {
				t = void 0;
			}
			return l.value = !1, t;
		}
	};
}
//#endregion
//#region src/composables/ref/useApiDelete.ts
function Pe(e, n, r, i = !0, a, o) {
	return X(e, t.delete, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiGet.ts
function Fe(e, n, r, i = !0, a, o) {
	return X(e, t.get, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiRef.ts
var Z;
function Ie(t, n, r = !0, i, a, o, s = !0, c = e.getItem()) {
	let l = P(), u = W(Y(n)), d = P(!1), f = P(!1), p = P(), m, h = !0, g, _ = async () => {
		if (h) return;
		m && m.abort(), m = u.value.controller || new AbortController();
		let e = B(t);
		if ((!i || i.value) && e) {
			d.value = !0, f.value = !0;
			try {
				let t = await c.request({
					path: e,
					controller: m,
					...u.value
				});
				t && (p.value = o == null ? void 0 : o(t), a ? l.value = a(t, p.value) : l.value = t);
			} catch (e) {
				l.value = void 0;
			}
			d.value = !1;
		} else l.value !== void 0 && (l.value = void 0);
	}, v = () => {
		g == null || g(), l.value = void 0, h = !0;
	}, y = () => {
		h && (h = !1, _().then(), s ? (b(), ce() && de(() => v())) : G.run(() => b()));
	}, b = () => {
		let e = [];
		r && e.push(u), N(t) && e.push(t), i && e.push(i), Z && e.push(Z), e.length > 0 && (g = I(e, async () => {
			d.value || await _();
		}));
	}, x = M(() => (y(), l.value)), S = M(() => Array.isArray(l.value) ? l.value.length : +!!l.value), C = M(() => l.value === void 0);
	return {
		data: x,
		get item() {
			return y(), l;
		},
		isResponseContractValid: M(() => {
			var e;
			return ((e = p.value) == null ? void 0 : e.status) === "success";
		}),
		responseValidationResult: M(() => p.value),
		length: S,
		starting: C,
		loading: d,
		reading: f,
		isStarting() {
			return l.value === void 0;
		},
		isLoading() {
			return d.value;
		},
		isReading() {
			return f.value;
		},
		getItem() {
			return l.value;
		},
		init: y,
		reset: _,
		stop: v,
		abort: () => m == null ? void 0 : m.abort()
	};
}
var Le = (e) => {
	Z || (Z = e);
};
//#endregion
//#region src/composables/ref/useApiPost.ts
function Re(e, n, r, i = !0, a, o) {
	return X(e, t.post, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiPut.ts
function ze(e, n, r, i = !0, a, o) {
	return X(e, t.put, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useFormattersRef.ts
function Be(e, t) {
	let n = new c(t);
	return {
		listFormat: M(() => n.setList(e.value).to()),
		length: M(() => n.setList(e.value).length())
	};
}
//#endregion
//#region src/composables/ref/useSearchValueRef.ts
function Ve(e, t) {
	let n = t == null ? P("") : t, r = P(n.value), i = P(!1), a;
	return I(n, (t, o, s) => {
		let c = e.getOptions().getDelay();
		c && E() ? (i.value = !0, a = setTimeout(() => {
			a = void 0, r.value = n.value, i.value = !1;
		}, c), s(() => {
			a && clearTimeout(a);
		})) : r.value = n.value;
	}), {
		search: n,
		searchDelay: r,
		loading: i
	};
}
//#endregion
//#region src/composables/ref/useSearchRef.ts
function He(e, t, n, r) {
	let i = new _(void 0, t, void 0, r), { search: a, searchDelay: o, loading: s } = Ve(i, n), c = () => B(b(e)) || [], l = M(() => i.setValue(o.value).getItem().isSearch()), u = M(() => i.setList(c()).setValue(o.value).to());
	return {
		isSearch: l,
		search: a,
		loading: s,
		listSearch: u,
		length: M(() => u.value.length)
	};
}
//#endregion
//#region src/composables/ref/useApiManagementRef.ts
function Ue(e, t, n, r, i, a, o, s) {
	let { path: c, options: l, reactivity: u, conditions: d, transformation: f, validateResponseContract: p, typeData: m, unmounted: h, skeleton: g } = e, _, v, y, b, S, C = Ie(c, l, u, d, f, p, h, s), w = M(() => m === void 0 ? !0 : C.isStarting() ? !1 : ne(m) ? m(C.data.value) : C.data.value instanceof m), T = M(() => C.isStarting() && g ? g() : C.data.value);
	if (t && (_ = Be(T, t)), n && (v = He(M(() => {
		var e;
		let t = (e = _ == null ? void 0 : _.listFormat.value) == null ? C.data.value : e;
		if (Array.isArray(t)) return t;
	}), n.columns, n.value, n.options)), r || i || a) {
		let e = (e) => {
			o == null || o(), ee(e) && C.reset().then();
		}, t = (t) => async (n) => {
			ne(t) && await x(t(n)), e(n);
		};
		r && (y = Re(r.path, t(r.action), r.transformation, r.toData, r.options, s)), i && (b = ze(i.path, t(i.action), i.transformation, i.toData, i.options, s)), a && (S = Pe(a.path, t(a.action), a.transformation, a.toData, a.options, s));
	}
	return {
		isValid: w,
		list: M(() => {
			if (w.value) {
				if (v && Array.isArray(C.data.value)) return v.listSearch.value;
				if (_) return _.listFormat.value;
			}
			return T.value;
		}),
		get data() {
			return C.data;
		},
		get length() {
			return v ? v.length : C.length;
		},
		lengthData: C.length,
		starting: C.starting,
		reading: C.reading,
		loading: C.loading,
		loadingSearch: v == null ? void 0 : v.loading,
		loadingPost: y == null ? void 0 : y.loading,
		loadingPut: b == null ? void 0 : b.loading,
		loadingDelete: S == null ? void 0 : S.loading,
		isSearch: v == null ? void 0 : v.isSearch,
		search: v == null ? void 0 : v.search,
		reset: C.reset,
		abort: C.abort,
		sendPost: async (e) => await (y == null ? void 0 : y.send(e)),
		sendPut: async (e) => await (b == null ? void 0 : b.send(e)),
		sendDelete: async (e) => await (S == null ? void 0 : S.send(e))
	};
}
//#endregion
//#region src/composables/ref/useBroadcastValueRef.ts
var We = () => v.get("__ui:broadcast-value-ref__", () => ({}));
function Ge(e, t) {
	let r = `broadcast--${e}`, i = We();
	if (r in i) return i[r];
	let a = P(b(t));
	if (E()) {
		let e = new n(r, (e) => {
			a.value !== e.data.message && (a.value = e.data.message);
		});
		G.run(() => {
			I(a, (t) => e.post({ message: t }));
		});
	}
	return i[r] = a, a;
}
//#endregion
//#region src/composables/ref/useCookieRef.ts
var Ke = () => v.get("__ui:cookie-ref__", () => ({}));
function qe(e, t, n) {
	let i = Ke();
	if (e in i) return i[e];
	let a = new r(e), o = Ge(`__cookie:${e}`, a.get(t, n));
	return G.run(() => {
		I(o, (e) => {
			a.set(e, n);
		});
	}), i[e] = o, o;
}
//#endregion
//#region src/composables/ref/useGeoIntlRef.ts
function Je() {
	return new Ae();
}
//#endregion
//#region src/composables/ref/useHashRef.ts
var Ye = () => v.get("__ui:hash-ref__", () => ({}));
function Xe(e, t) {
	let n = Ye();
	if (e in n) return n[e];
	let r = F(f.get(e, t));
	return E() && (G.run(() => {
		I(r, (t) => f.set(e, t));
	}), f.addWatch(e, (e) => {
		r.value = e;
	})), n[e] = r, r;
}
//#endregion
//#region src/composables/ref/useLazyRef.ts
var Ze = (e = { rootMargin: "128px 0px" }) => {
	let t = {}, n = E() && "IntersectionObserver" in window ? new IntersectionObserver((e) => {
		e.forEach((e) => {
			let n = w(e.target);
			if (n in t) {
				let r = t[n];
				r.status.value = e.isIntersecting, r.ratio.value = e.intersectionRatio, r.entry.value = e;
			}
		});
	}, e) : void 0, r = (e) => {
		if (e) {
			let i = w(e);
			if (i in t) {
				var r;
				n == null || n.unobserve(e), (r = t[i]) == null || r.stopWatch(), delete t[i];
			}
		}
	};
	return {
		intersectionObserver: n,
		getItem(e) {
			return t[w(e)];
		},
		addLazyItem(e) {
			let i = F(!n);
			if (n) {
				let a;
				a = I(e, (o, s) => {
					if (s && r(s), e.value) {
						let r = w(e.value);
						t[r] = {
							status: i,
							ratio: F(0),
							entry: F(void 0),
							stopWatch: () => a == null ? void 0 : a()
						}, n.observe(e.value);
					} else r(e.value);
				}, { immediate: !0 });
			}
			return i;
		},
		removeLazyItem: r,
		disconnectLazy: () => n == null ? void 0 : n.disconnect()
	};
}, Qe = () => v.get("__ui:lazy-item-by-margin-ref__", () => []), $e = (e) => {
	let t = Qe(), n = t.find((t) => t.rootMargin === e);
	if (n) return n.item;
	let r = Ze({ rootMargin: e });
	return t.push({
		rootMargin: e,
		item: r
	}), r;
}, et = (e, t) => {
	let n = $e(t);
	return {
		lazyItemStatus: n.addLazyItem(e),
		get lazyItem() {
			return n.getItem(e.value);
		}
	};
};
//#endregion
//#region src/composables/ref/useLoadingRef.ts
function tt() {
	let e = F(m.is());
	return E() && m.registrationEvent(({ detail: t }) => {
		e.value = t.loading;
	}), e;
}
//#endregion
//#region src/functions/executeUse.ts
var Q = /* @__PURE__ */ function(e) {
	return e.global = "global", e.provide = "provide", e.local = "local", e;
}({}), nt = 1, rt = re(1e5, 999999), it = () => `__execute_use${rt}::${nt++}`, at = () => v.get("__ui:execute-use-global__", () => []);
function $(e, t = Q.provide) {
	let n = it(), r, i = (t) => {
		let n = Object.freeze(e(...t));
		return {
			...n,
			init() {
				return n;
			}
		};
	}, a = (e) => {
		let t = Object.freeze(i(e));
		return fe(n, t), t;
	}, o = (e) => {
		let t = i(e);
		return Object.freeze({
			...t,
			destroyExecute() {
				r = void 0;
			}
		});
	}, s = (...e) => t === Q.provide ? ue(n, void 0) || a(e) : (r || (t === Q.local ? G.run(() => {
		r = o(e);
	}) : r = o(e)), r);
	return t === Q.global && at().push(s), s;
}
function ot(e) {
	return $(e, Q.global);
}
function st(e) {
	return $(e, Q.provide);
}
function ct(e) {
	return $(e, Q.local);
}
function lt() {
	let e = at();
	e.forEach((e) => e()), e.length = 0;
}
//#endregion
//#region src/composables/ref/useMeta.ts
var ut = ct(() => {
	let e = new h(), t = P(e.getTitle()), n = P(e.getKeywords()), r = P(e.getDescription()), i = P(e.getImage()), a = P(e.getCanonical()), o = P(e.getRobots()), s = P(e.getAuthor()), c = P(e.getSiteName());
	return I(t, () => {
		e.setTitle(t.value);
	}), I(n, () => {
		e.setKeywords(n.value);
	}), I(r, () => {
		e.setDescription(r.value);
	}), I(i, () => {
		e.setImage(i.value);
	}), I(a, () => {
		e.setCanonical(a.value);
	}), I(o, () => {
		e.setRobots(o.value);
	}), I(s, () => {
		e.setAuthor(s.value);
	}), I(c, () => {
		e.setSiteName(c.value);
	}), {
		meta: e,
		title: t,
		keyword: n,
		description: r,
		author: s,
		image: i,
		canonical: a,
		robots: o,
		siteName: c,
		getHtmlMeta: () => e.html(),
		setSuffix: (t) => e.setSuffix(t)
	};
}), dt = () => ut(), ft = (e, t, n = !0) => {
	var r;
	let i = N(t) ? t : P(t || ((r = e.value) == null || (r = r[0]) == null ? void 0 : r.value) || ""), a = () => o(i.value), o = (t) => {
		var n;
		return (n = e.value) == null ? void 0 : n.find((e) => e.value === t);
	}, s = (e) => {
		e && e !== i.value && o(e) && (i.value = e, J.push({ name: e }));
	};
	return {
		item: M(() => a()),
		selected: i,
		label: M(() => {
			var e;
			return ((e = a()) == null ? void 0 : e.label) || "";
		}),
		list: M(() => e.value ? S(e.value, (e) => n && !("to" in e) ? {
			...e,
			to: { name: e.value }
		} : e) : []),
		to: s,
		toMain() {
			var t;
			s((t = e.value) == null || (t = t[0]) == null ? void 0 : t.value);
		}
	};
}, pt = () => v.get("__ui:session-ref__", () => ({}));
function mt(e, t) {
	let n = pt();
	if (e in n) return n[e];
	let r = new i(e, !0), a = P(r.get(t));
	return G.run(() => {
		I(a, (e) => r.set(e));
	}), n[e] = a, a;
}
//#endregion
//#region src/composables/ref/useStorageRef.ts
var ht = () => v.get("__ui:storage-ref__", () => ({}));
function gt(e, t, n) {
	let r = ht();
	if (e in r) return r[e];
	let a = new i(e), o = P(a.get(t, n));
	return G.run(() => {
		I(o, (e) => a.set(e));
	}), E() && window.addEventListener("storage", () => {
		a.update(), o.value = a.get();
	}), r[e] = o, o;
}
//#endregion
//#region src/composables/ref/useTranslateRef.ts
function _t(e, t = y.getItem()) {
	let n = F(t.getListSync(e, !0)), r = async () => {
		n.value = { ...await t.getList(e) };
	};
	if (E()) {
		I(q.getLanguage(), r);
		for (let e in n.value) if (n.value[e] === e || n.value[e] === " ") {
			r().then();
			break;
		}
	}
	return n;
}
var vt = (e) => _t(e);
//#endregion
//#region src/functions/computedAsync.ts
function yt(e, t, n) {
	let r = P(), i = !0, a = () => {
		i && (i = !1, L(async () => {
			let n = await x(e);
			n !== t && (r.value = n);
		}));
	};
	return M(() => (a(), r.value), n);
}
//#endregion
//#region src/functions/computedByLanguage.ts
function bt(e, t = () => void 0, n, r) {
	return M(() => {
		if (q.get().value && (n === void 0 || n())) {
			let t = e();
			if (t !== void 0) return t;
		}
		return b(t);
	}, r);
}
//#endregion
//#region src/functions/computedEternity.ts
function xt(e) {
	return oe((t, n) => {
		let r = P(), i = !1, a = async () => {
			r.value = await x(e), n();
		}, o = () => {
			i || (i = !0, G.run(() => {
				L(async () => await a());
			}));
		};
		return {
			get() {
				return o(), t(), r.value;
			},
			set(e) {
				console.warn("computedEternity: value is read-only.");
			}
		};
	});
}
//#endregion
//#region src/functions/dxtFunctionalPlugin.ts
var St = { install(t, n = {}) {
	if (n.api && e.setConfig(n.api), n.translate && y.setConfig(n.translate), n.icons && p.setConfig(n.icons), n.metaSuffix && dt().setSuffix(n.metaSuffix), n.router) J.set(n.router);
	else {
		let e = t.config.globalProperties.$router;
		e && J.set(e);
	}
	n.errorCauses && o.addList(n.errorCauses), lt();
} };
//#endregion
//#region src/functions/render/getBind.ts
function Ct(e, t = {}, n = "value", r = !1) {
	let i = typeof t == "string", a = i ? t : n, o = i ? {} : t;
	return e ? e && O(e) && (a in e || r) ? H(o, e) : H(o, { [a]: e }) : i ? {} : { ...o };
}
//#endregion
//#region src/functions/ref/getBindRef.ts
function wt(e, t = {}, n = "value") {
	return M(() => Ct(B(e), B(t), n));
}
//#endregion
//#region src/functions/ref/setRef.ts
function Tt(e, t) {
	e.value !== t && (e.value = t);
}
//#endregion
export { De as DatetimeRef, be as DesignAbstract, xe as DesignAsyncAbstract, ye as DesignChanged, Te as DesignComp, U as DesignComponents, Ee as DesignConstructorAbstract, G as EffectScopeGlobal, Oe as EventRef, Q as ExecuteUseType, ke as GeoFlagRef, Ae as GeoIntlRef, q as GeoRef, je as ListDataRef, J as RouterItemRef, Ne as ScrollbarWidthRef, yt as computedAsync, bt as computedByLanguage, xt as computedEternity, St as dxtFunctionalPlugin, $ as executeUse, ot as executeUseGlobal, lt as executeUseGlobalInit, ct as executeUseLocal, st as executeUseProvide, Ct as getBind, wt as getBindRef, Se as getClassName, V as getIndexForRender, Y as getOptions, B as getRef, Ce as render, Le as setApiRefGlobalConditions, Tt as setRef, vt as t, H as toBind, we as toBinds, W as toRefItem, Pe as useApiDelete, Fe as useApiGet, Ue as useApiManagementRef, Re as useApiPost, ze as useApiPut, Ie as useApiRef, X as useApiRequest, Ge as useBroadcastValueRef, qe as useCookieRef, Be as useFormattersRef, Je as useGeoIntlRef, Xe as useHashRef, et as useLazyItemByMarginRef, Ze as useLazyRef, tt as useLoadingRef, dt as useMeta, ft as useRouterList, He as useSearchRef, Ve as useSearchValueRef, mt as useSessionRef, gt as useStorageRef, _t as useTranslateRef };
