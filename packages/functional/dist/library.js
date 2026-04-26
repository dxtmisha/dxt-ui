import { Api as e, ApiMethodItem as t, BroadcastMessage as n, Cookie as r, DataStorage as i, Datetime as a, ErrorCenter as o, EventItem as s, Formatters as c, Geo as l, GeoFlag as u, GeoIntl as d, Hash as f, Icons as p, Loading as m, MetaStatic as h, ScrollbarWidth as g, SearchList as _, ServerStorage as v, Translate as y, executeFunction as b, executePromise as x, forEach as S, getColumn as C, getElementId as w, getExp as T, isApiSuccess as ee, isArray as te, isDomRuntime as E, isFunction as ne, isObject as D, isObjectNotArray as O, isSelected as k, isString as A, random as re, toArray as j, toCamelCase as ie, toDate as ae } from "@dxtmisha/functional-basic";
import { computed as M, customRef as oe, effectScope as se, getCurrentInstance as ce, h as le, hasInjectionContext as ue, inject as de, isRef as N, onUnmounted as fe, provide as pe, ref as P, shallowRef as F, toRefs as me, triggerRef as he, useAttrs as ge, useSlots as _e, watch as I, watchEffect as ve } from "vue";
export * from "@dxtmisha/functional-basic";
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/typeof.js
function L(e) {
	"@babel/helpers - typeof";
	return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, L(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/toPrimitive.js
function ye(e, t) {
	if (L(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (L(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/toPropertyKey.js
function be(e) {
	var t = ye(e, "string");
	return L(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/defineProperty.js
function R(e, t, n) {
	return (t = be(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/design/DesignChanged.ts
var xe = class {
	constructor(e, t = Object.keys(e)) {
		R(this, "cache", {}), this.props = e, this.watch = t;
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
}, Se = class {
	constructor(e, t, n) {
		R(this, "event", {}), R(this, "changed", void 0), this.props = e, this.callback = t, this.changed = new xe(e, n);
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
}, Ce = class extends Se {
	make(e) {
		return this.makeCallback(e).then(), this;
	}
	async makeCallback(e) {
		(e || this.changed.isChanged()) && (await this.initEvent(), this.makeCallbackItem(), this.changed.update());
	}
};
//#endregion
//#region src/functions/ref/getRef.ts
function z(e) {
	return N(e) ? e.value : e;
}
//#endregion
//#region src/functions/render/getClassName.ts
function we(e) {
	return e && "class" in e && typeof e.class == "string" ? e.class : void 0;
}
//#endregion
//#region src/functions/render/getIndexForRender.ts
function Te(e, t, n) {
	let r = t == null ? void 0 : t.id, i = t == null ? void 0 : t.index, a = we(t), o = "";
	if (A(e) && (o += e), n && (o += `.${n}`), i && A(i) && (o += `.${i}`), a && (o += `.${a}`), r && (o += `.${r}`), o !== "") return o;
}
//#endregion
//#region src/functions/ref/render.ts
function Ee(e, t, n, r) {
	let i = t, a = t && "key" in t;
	return (!t || !a) && (i = {
		...t,
		key: Te(e, t, r)
	}), le(e, i, n);
}
//#endregion
//#region src/functions/toBind.ts
function B(e, t) {
	let n = e == null ? void 0 : e.class, r = t == null ? void 0 : t.class, i = e == null ? void 0 : e.style, a = t == null ? void 0 : t.style, o = {
		...e,
		...t
	};
	return n && r && (o.class = [], n && o.class.push(n), r && o.class.push(r)), i && a && (o.style = [], i && o.style.push(i), a && o.style.push(a)), o;
}
//#endregion
//#region src/functions/toBinds.ts
function V(...e) {
	let t = {};
	return e.forEach((e) => {
		e && (t = B(t, e));
	}), t;
}
//#endregion
//#region src/classes/design/DesignComponents.ts
var H = class {
	constructor(e = {}, t) {
		R(this, "caching", {}), this.components = e, this.modification = t;
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
			if (n) return t ? V(n.value, t) : n.value;
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
			return Ee(this.get(e), this.getModification(i, t), n, i);
		}
	}
	renderAdd(e, t, n, r, i) {
		return e.push(...this.render(t, n, r, i)), this;
	}
	computeModification(e) {
		var t;
		let n = z((t = this.modification) == null ? void 0 : t[e]);
		if (n && O(n)) {
			let e = {};
			return S(n, (t, n) => {
				e[n] = z(t);
			}), e;
		}
		return {};
	}
}, De = class extends H {}, Oe = class {
	constructor(e, t, n) {
		R(this, "name", void 0), R(this, "element", P()), R(this, "refs", void 0), R(this, "components", void 0), R(this, "emits", void 0), R(this, "classes", void 0), R(this, "classesSub", void 0), R(this, "styles", void 0), R(this, "stylesSub", void 0), R(this, "attrs", void 0), R(this, "slots", void 0), R(this, "dataExpose", void 0), this.props = t, this.options = n, this.name = this.initName(e), this.refs = this.props ? me(this.props) : {}, this.components = new H(n == null ? void 0 : n.components, n == null ? void 0 : n.compMod), this.emits = n == null ? void 0 : n.emits, this.classes = M(() => this.updateClasses()), this.styles = M(() => this.updateStyles()), this.attrs = ge(), this.slots = _e();
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
function U(e) {
	return N(e) ? e : P(e);
}
//#endregion
//#region src/classes/ref/DatetimeRef.ts
var ke = class {
	constructor(e, t = "date", n = l.getLocation()) {
		R(this, "item", void 0), R(this, "type", void 0), R(this, "code", void 0), R(this, "date", void 0), R(this, "datetime", void 0), R(this, "year", P(2e3)), R(this, "month", P(1)), R(this, "day", P(1)), R(this, "hour", P(1)), R(this, "minute", P(1)), R(this, "second", P(1)), this.item = U(e), this.type = U(t), this.code = U(n), this.date = P(ae(this.item.value)), this.datetime = new a(this.date.value, this.type.value, this.code.value), I(this.item, (e) => {
			this.date.value = ae(e);
		}), I(this.type, (e) => this.datetime.setType(e)), I(this.code, (e) => this.datetime.setCode(e)), I(this.date, (e) => {
			this.datetime.setDate(e), this.updateDate();
		}), this.datetime.setWatch(() => he(this.date)), this.updateDate();
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
}, W = class {
	static run(e) {
		return this.getScope().run(e);
	}
	static getScope() {
		return v.get("__ui:effect-scope-global__", () => se(!0));
	}
}, Ae = class extends s {
	constructor(e, t, n = ["click"], r, i, a) {
		let o = U(e), s = U(t);
		super(o.value, n, r, i, a), s.value && this.setElementControl(s.value), I(o, (e) => this.setElement(e)), I(s, (e) => this.setElementControl(e));
	}
}, je = class {
	constructor(e = l.getLocation()) {
		R(this, "code", void 0), R(this, "flag", void 0), this.code = U(e), this.flag = new u(this.code.value), I(this.code, (e) => this.flag.setCode(e));
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
}, G, K = class {
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
G = K, R(K, "country", M(() => G.get().value.country)), R(K, "language", M(() => G.get().value.language)), R(K, "standard", M(() => G.get().value.standard)), R(K, "firstDay", M(() => G.get().value.firstDay));
//#endregion
//#region src/classes/ref/GeoIntlRef.ts
var Me = class {
	constructor(e) {
		R(this, "location", void 0), R(this, "intl", void 0), this.location = U(e), this.intl = M(() => {
			var e;
			return new d((e = this.location.value) == null ? K.getLanguage().value : e);
		});
	}
	display(e, t) {
		return M(() => this.intl.value.display(z(e), t));
	}
	languageName(e, t) {
		return M(() => this.intl.value.languageName(z(e), t));
	}
	countryName(e, t) {
		return M(() => this.intl.value.countryName(z(e), t));
	}
	number(e, t) {
		return M(() => this.intl.value.number(z(e), t));
	}
	decimal() {
		return M(() => this.intl.value.decimal());
	}
	currency(e, t, n = !1) {
		return M(() => this.intl.value.currency(z(e), z(t), n));
	}
	currencySymbol(e, t = "symbol") {
		return M(() => this.intl.value.currencySymbol(z(e), t));
	}
	unit(e, t) {
		return M(() => this.intl.value.unit(z(e), t));
	}
	sizeFile(e, t = "byte") {
		return M(() => this.intl.value.sizeFile(z(e), t));
	}
	percent(e, t) {
		return M(() => this.intl.value.percent(z(e), t));
	}
	percentBy100(e, t) {
		return M(() => this.intl.value.percentBy100(z(e), t));
	}
	plural(e, t, n, r) {
		return M(() => this.intl.value.plural(z(e), t, n, r));
	}
	date(e, t, n, r) {
		return M(() => this.intl.value.date(z(e), t, n, r));
	}
	relative(e, t, n) {
		return M(() => this.intl.value.relative(z(e), t, n));
	}
	relativeLimit(e, t, n, r, i, a, o) {
		return M(() => this.intl.value.relativeLimit(z(e), t, n, r, i, a, o));
	}
	relativeByValue(e, t, n) {
		return M(() => this.intl.value.relativeByValue(z(e), t, n));
	}
	month(e, t) {
		return M(() => this.intl.value.month(z(e), t));
	}
	months(e) {
		return M(() => this.intl.value.months(e));
	}
	weekday(e, t) {
		return M(() => this.intl.value.weekday(z(e), t));
	}
	weekdays(e) {
		return M(() => this.intl.value.weekdays(e));
	}
	time(e) {
		return M(() => this.intl.value.time(z(e)));
	}
	sort(e, t = (e, t) => [e, t]) {
		return M(() => this.intl.value.sort([...z(e)], t));
	}
}, Ne = class e {
	constructor(e, t, n, r, i, a, o, s, c, l = 0, u = 9999999, d) {
		R(this, "subList", {}), R(this, "data", M(() => S(z(this.list) || [], (e, t) => this.initItem(t, e)))), R(this, "liteData", M(() => {
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
		})), R(this, "fullData", M(() => {
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
		})), R(this, "map", M(() => {
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
		})), R(this, "mapItems", M(() => this.map.value.filter((e) => e.type === "item"))), R(this, "items", M(() => this.map.value.filter((e) => e.type === "item" || e.type === "group" || e.type === "menu"))), R(this, "highlightFirstItem", M(() => {
			let e = this.getHighlight();
			if (e && e.length >= this.getHighlightLengthStart()) {
				let t = T(e, "i");
				if (t) return this.map.value.findIndex((e) => {
					var n, r, i;
					return ((n = e.label) == null ? void 0 : n.toString().match(t)) || ((r = e.index) == null ? void 0 : r.toString().match(t)) || ((i = e.search) == null ? void 0 : i.toString().match(t));
				});
			}
			return -1;
		})), R(this, "isSelected", M(() => {
			let e = this.getSelected();
			return !!e && this.mapItems.value.findIndex((t) => k(t.index, e)) !== -1;
		})), R(this, "isSelectedMin", M(() => {
			let e = Number(z(this.min) || 0);
			return e > 0 ? this.selectedListInGroup.value.length >= e : !1;
		})), R(this, "isSelectedMax", M(() => {
			let e = Number(z(this.max) || 9999999);
			return e > 0 ? this.selectedListInGroup.value.length >= e : !1;
		})), R(this, "selectedList", M(() => {
			let e = this.getSelected();
			return e && this.isSelected.value ? this.mapItems.value.filter((t) => k(t.index, e)) : [];
		})), R(this, "selectedListInGroup", M(() => {
			let e = this.getSelected();
			return e && this.isSelected.value ? this.data.value.filter((t) => k(t.index, e)) : [];
		})), R(this, "selectedNames", M(() => C(this.selectedList.value, "label"))), R(this, "selectedValues", M(() => C(this.selectedList.value, "value"))), this.list = e, this.focus = t, this.highlight = n, this.highlightLengthStart = r, this.filterMode = i, this.selected = a, this.keyValue = o, this.keyLabel = s, this.lite = c, this.min = l, this.max = u, this.parent = d, N(e) && I(e, () => {
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
}, Pe = "__ui:router-item-ref__", q = class {
	static get() {
		return v.get(Pe);
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
		v.set(Pe, () => e);
	}
	static setOneTime(e) {
		this.get() || this.set(e);
	}
	static rawToHref(e) {
		return O(e) && "name" in e && A(e == null ? void 0 : e.name) ? this.getHref(e.name) : {};
	}
}, Fe = class {
	constructor() {
		R(this, "item", P()), R(this, "width", P(0)), R(this, "is", M(() => this.item.value !== void 0)), E() && (g.is().then((e) => {
			this.item.value = e;
		}), g.get().then((e) => {
			this.width.value = e;
		}));
	}
}, J = (e) => typeof e == "string" ? { method: e } : e || {};
//#endregion
//#region src/composables/ref/useApiRequest.ts
function Y(n, r = t.post, i, a, o = !0, s, c = e.getItem()) {
	let l = P(!1), u = U(J(s));
	return {
		loading: l,
		async send(e) {
			l.value = !0;
			let t;
			try {
				if (t = await c.request({
					path: z(n),
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
function Ie(e, n, r, i = !0, a, o) {
	return Y(e, t.delete, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiGet.ts
function Le(e, n, r, i = !0, a, o) {
	return Y(e, t.get, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiRef.ts
var X;
function Re(t, n, r = !0, i, a, o, s = !0, c = e.getItem()) {
	let l = P(), u = U(J(n)), d = P(!1), f = P(!1), p = P(), m, h = !0, g, _ = async () => {
		if (h) return;
		m && m.abort(), m = u.value.controller || new AbortController();
		let e = z(t);
		if ((!i || i.value) && e) {
			d.value = !0, f.value = !0;
			try {
				let t = await c.request({
					path: e,
					controller: m,
					...u.value
				});
				console.log("response", t), t && (p.value = o == null ? void 0 : o(t), a ? l.value = a(t, p.value) : l.value = t);
			} catch (e) {
				l.value = void 0;
			}
			d.value = !1;
		} else l.value !== void 0 && (l.value = void 0);
	}, v = () => {
		g == null || g(), l.value = void 0, h = !0;
	}, y = async () => {
		if (h) {
			if (h = !1, E()) _().then();
			else {
				await _(), console.log("item", l.value);
				return;
			}
			s ? (b(), ce() && fe(() => v())) : W.run(() => b());
		}
	}, b = () => {
		let e = [];
		r && e.push(u), N(t) && e.push(t), i && e.push(i), X && e.push(X), e.length > 0 && (g = I(e, async () => {
			d.value || await _();
		}));
	}, x = M(() => (y().then(), l.value)), S = M(() => Array.isArray(l.value) ? l.value.length : +!!l.value), C = M(() => l.value === void 0);
	return {
		data: x,
		get item() {
			return y().then(), l;
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
var ze = (e) => {
	X || (X = e);
};
//#endregion
//#region src/composables/ref/useApiPost.ts
function Be(e, n, r, i = !0, a, o) {
	return Y(e, t.post, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiPut.ts
function Ve(e, n, r, i = !0, a, o) {
	return Y(e, t.put, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useFormattersRef.ts
function He(e, t) {
	let n = new c(t);
	return {
		listFormat: M(() => n.setList(e.value).to()),
		length: M(() => n.setList(e.value).length())
	};
}
//#endregion
//#region src/composables/ref/useSearchValueRef.ts
function Ue(e, t) {
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
function We(e, t, n, r) {
	let i = new _(void 0, t, void 0, r), { search: a, searchDelay: o, loading: s } = Ue(i, n), c = () => z(b(e)) || [], l = M(() => i.setValue(o.value).getItem().isSearch()), u = M(() => i.setList(c()).setValue(o.value).to());
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
function Ge(e, t, n, r, i, a, o, s) {
	let { path: c, options: l, reactivity: u, conditions: d, transformation: f, validateResponseContract: p, typeData: m, unmounted: h, skeleton: g } = e, _, v, y, b, S, C = Re(c, l, u, d, f, p, h, s), w = M(() => m === void 0 ? !0 : C.isStarting() ? !1 : ne(m) ? m(C.data.value) : C.data.value instanceof m), T = M(() => C.isStarting() && g ? g() : C.data.value);
	if (t && (_ = He(T, t)), n && (v = We(M(() => {
		var e;
		let t = (e = _ == null ? void 0 : _.listFormat.value) == null ? C.data.value : e;
		if (Array.isArray(t)) return t;
	}), n.columns, n.value, n.options)), r || i || a) {
		let e = (e) => {
			o == null || o(), ee(e) && C.reset().then();
		}, t = (t) => async (n) => {
			ne(t) && await x(t(n)), e(n);
		};
		r && (y = Be(r.path, t(r.action), r.transformation, r.toData, r.options, s)), i && (b = Ve(i.path, t(i.action), i.transformation, i.toData, i.options, s)), a && (S = Ie(a.path, t(a.action), a.transformation, a.toData, a.options, s));
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
var Ke = () => v.get("__ui:broadcast-value-ref__", () => ({}));
function qe(e, t) {
	let r = `broadcast--${e}`, i = Ke();
	if (r in i) return i[r];
	let a = P(b(t));
	if (E()) {
		let e = new n(r, (e) => {
			a.value !== e.data.message && (a.value = e.data.message);
		});
		W.run(() => {
			I(a, (t) => e.post({ message: t }));
		});
	}
	return i[r] = a, a;
}
//#endregion
//#region src/composables/ref/useCookieRef.ts
var Je = () => v.get("__ui:cookie-ref__", () => ({}));
function Ye(e, t, n) {
	let i = Je();
	if (e in i) return i[e];
	let a = new r(e), o = qe(`__cookie:${e}`, a.get(t, n));
	return W.run(() => {
		I(o, (e) => {
			a.set(e, n);
		});
	}), i[e] = o, o;
}
//#endregion
//#region src/composables/ref/useGeoIntlRef.ts
function Xe() {
	return new Me();
}
//#endregion
//#region src/composables/ref/useHashRef.ts
var Ze = () => v.get("__ui:hash-ref__", () => ({}));
function Qe(e, t) {
	let n = Ze();
	if (e in n) return n[e];
	let r = F(f.get(e, t));
	return E() && (W.run(() => {
		I(r, (t) => f.set(e, t));
	}), f.addWatch(e, (e) => {
		r.value = e;
	})), n[e] = r, r;
}
//#endregion
//#region src/composables/ref/useLazyRef.ts
var $e = (e = { rootMargin: "128px 0px" }) => {
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
}, et = () => v.get("__ui:lazy-item-by-margin-ref__", () => []), tt = (e) => {
	let t = et(), n = t.find((t) => t.rootMargin === e);
	if (n) return n.item;
	let r = $e({ rootMargin: e });
	return t.push({
		rootMargin: e,
		item: r
	}), r;
}, nt = (e, t) => {
	let n = tt(t);
	return {
		lazyItemStatus: n.addLazyItem(e),
		get lazyItem() {
			return n.getItem(e.value);
		}
	};
};
//#endregion
//#region src/composables/ref/useLoadingRef.ts
function rt() {
	let e = F(m.is());
	return E() && m.registrationEvent(({ detail: t }) => {
		e.value = t.loading;
	}), e;
}
//#endregion
//#region src/functions/executeUse.ts
var Z = /* @__PURE__ */ function(e) {
	return e.global = "global", e.provide = "provide", e.local = "local", e;
}({}), it = 1, at = re(1e5, 999999), ot = () => `__execute_use${at}::${it++}`, st = () => v.get("__ui:execute-use-global__", () => []);
function Q(e, t = Z.provide) {
	let n = ot(), r, i = (t) => {
		let n = Object.freeze(e(...t));
		return {
			...n,
			init() {
				return n;
			}
		};
	}, a = (e) => {
		let t = Object.freeze(i(e));
		return pe(n, t), t;
	}, o = (e) => {
		let t = i(e);
		return Object.freeze({
			...t,
			destroyExecute() {
				r = void 0;
			}
		});
	}, s = (...e) => t === Z.provide ? de(n, void 0) || a(e) : (r || W.run(() => {
		r = o(e);
	}), r);
	return t === Z.global && st().push(s), s;
}
function ct(e) {
	return Q(e, Z.global);
}
function lt(e) {
	return Q(e, Z.provide);
}
function ut(e) {
	return Q(e, Z.local);
}
function dt() {
	st().forEach((e) => e());
}
//#endregion
//#region src/composables/ref/useMeta.ts
var ft = ut(() => {
	let e = h, t = P(e.getTitle()), n = P(e.getKeywords()), r = P(e.getDescription()), i = P(e.getImage()), a = P(e.getCanonical()), o = P(e.getRobots()), s = P(e.getAuthor()), c = P(e.getSiteName());
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
}), pt = () => ft(), mt = (e, t, n = !0) => {
	var r;
	let i = N(t) ? t : P(t || ((r = e.value) == null || (r = r[0]) == null ? void 0 : r.value) || ""), a = () => o(i.value), o = (t) => {
		var n;
		return (n = e.value) == null ? void 0 : n.find((e) => e.value === t);
	}, s = (e) => {
		e && e !== i.value && o(e) && (i.value = e, q.push({ name: e }));
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
}, ht = () => v.get("__ui:session-ref__", () => ({}));
function gt(e, t) {
	let n = ht();
	if (e in n) return n[e];
	let r = new i(e, !0), a = P(r.get(t));
	return W.run(() => {
		I(a, (e) => r.set(e));
	}), n[e] = a, a;
}
//#endregion
//#region src/composables/ref/useStorageRef.ts
var _t = () => v.get("__ui:storage-ref__", () => ({}));
function vt(e, t, n) {
	let r = _t();
	if (e in r) return r[e];
	let a = new i(e), o = P(a.get(t, n));
	return W.run(() => {
		I(o, (e) => a.set(e));
	}), E() && window.addEventListener("storage", () => {
		a.update(), o.value = a.get();
	}), r[e] = o, o;
}
//#endregion
//#region src/composables/ref/useTranslateRef.ts
function yt(e, t = y.getItem()) {
	let n = F(t.getListSync(e, !0)), r = async () => {
		n.value = { ...await t.getList(e) };
	};
	if (E()) {
		I(K.getLanguage(), r);
		for (let e in n.value) if (n.value[e] === e || n.value[e] === " ") {
			r().then();
			break;
		}
	}
	return n;
}
var bt = (e) => yt(e);
//#endregion
//#region src/functions/computedAsync.ts
function xt(e, t, n, r) {
	let i = F(b(t)), a = !0, o = async () => {
		let t = await x(e);
		t !== n && (i.value = t);
	}, s = () => {
		a && (a = !1, E() ? ve(o) : o().then());
	};
	return M(() => (s(), i.value), r);
}
//#endregion
//#region src/functions/computedByLanguage.ts
function St(e, t = () => void 0, n, r) {
	return M(() => {
		if (K.get().value && (n === void 0 || n())) {
			let t = e();
			if (t !== void 0) return t;
		}
		return b(t);
	}, r);
}
//#endregion
//#region src/functions/computedEternity.ts
function Ct(e, t) {
	return oe((n, r) => {
		let i = F(b(t)), a = !1, o = async () => {
			i.value = await x(e), r();
		}, s = () => {
			a || (a = !0, E() ? W.run(() => {
				ve(async () => await o());
			}) : o().then());
		};
		return {
			get() {
				return s(), n(), i.value;
			},
			set(e) {
				console.warn("computedEternity: value is read-only.");
			}
		};
	});
}
//#endregion
//#region src/functions/dxtFunctionalPlugin.ts
var wt = { install(t, n = {}) {
	if (n.api && e.setConfig(n.api), n.translate && y.setConfig(n.translate), n.icons && p.setConfig(n.icons), n.metaSuffix && pt().setSuffix(n.metaSuffix), n.router) q.set(n.router);
	else {
		let e = t.config.globalProperties.$router;
		console.log("global router", e), e && q.set(e);
	}
	n.errorCauses && o.addList(n.errorCauses), dt();
} };
//#endregion
//#region src/functions/getInject.ts
function Tt(e) {
	if (ue()) {
		let t = de(e);
		if (t) return t;
	}
}
//#endregion
//#region src/functions/render/getBind.ts
function $(e, t = {}, n = "value", r = !1) {
	let i = typeof t == "string", a = i ? t : n, o = i ? {} : t;
	return e ? e && O(e) && (a in e || r) ? B(o, e) : B(o, { [a]: e }) : i ? {} : { ...o };
}
//#endregion
//#region src/functions/ref/getBindRef.ts
function Et(e, t = {}, n = "value") {
	return M(() => $(z(e), z(t), n));
}
//#endregion
//#region src/functions/ref/setRef.ts
function Dt(e, t) {
	e.value !== t && (e.value = t);
}
//#endregion
export { ke as DatetimeRef, Se as DesignAbstract, Ce as DesignAsyncAbstract, xe as DesignChanged, De as DesignComp, H as DesignComponents, Oe as DesignConstructorAbstract, W as EffectScopeGlobal, Ae as EventRef, Z as ExecuteUseType, je as GeoFlagRef, Me as GeoIntlRef, K as GeoRef, Ne as ListDataRef, q as RouterItemRef, Fe as ScrollbarWidthRef, xt as computedAsync, St as computedByLanguage, Ct as computedEternity, wt as dxtFunctionalPlugin, Q as executeUse, ct as executeUseGlobal, dt as executeUseGlobalInit, ut as executeUseLocal, lt as executeUseProvide, $ as getBind, Et as getBindRef, we as getClassName, Te as getIndexForRender, Tt as getInject, J as getOptions, z as getRef, Ee as render, ze as setApiRefGlobalConditions, Dt as setRef, bt as t, B as toBind, V as toBinds, U as toRefItem, Ie as useApiDelete, Le as useApiGet, Ge as useApiManagementRef, Be as useApiPost, Ve as useApiPut, Re as useApiRef, Y as useApiRequest, qe as useBroadcastValueRef, Ye as useCookieRef, He as useFormattersRef, Xe as useGeoIntlRef, Qe as useHashRef, nt as useLazyItemByMarginRef, $e as useLazyRef, rt as useLoadingRef, pt as useMeta, mt as useRouterList, We as useSearchRef, Ue as useSearchValueRef, gt as useSessionRef, vt as useStorageRef, yt as useTranslateRef };
