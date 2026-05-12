import { Api as e, ApiMethodItem as t, BroadcastMessage as n, Cookie as r, DataStorage as i, Datetime as a, ErrorCenter as o, EventItem as s, Formatters as c, Geo as l, GeoFlag as u, GeoIntl as d, Hash as f, Icons as p, Loading as m, MetaStatic as h, ScrollbarWidth as g, SearchList as _, ServerStorage as v, Translate as y, executeFunction as b, executePromise as x, forEach as S, getColumn as C, getElementId as w, getExp as T, isApiSuccess as ee, isArray as E, isDomRuntime as D, isFunction as te, isObject as O, isObjectNotArray as k, isSelected as A, isString as j, random as ne, toArray as M, toCamelCase as re, toDate as ie } from "@dxtmisha/functional-basic";
import { computed as N, customRef as ae, effectScope as oe, getCurrentInstance as se, h as ce, hasInjectionContext as le, inject as ue, isRef as P, onServerPrefetch as de, onUnmounted as fe, provide as pe, ref as F, shallowRef as I, toRefs as me, triggerRef as he, useAttrs as ge, useSlots as _e, watch as L, watchEffect as ve } from "vue";
export * from "@dxtmisha/functional-basic";
//#endregion
//#region \0@oxc-project+runtime@0.128.0/helpers/typeof.js
function R(e) {
	"@babel/helpers - typeof";
	return R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, R(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.128.0/helpers/toPrimitive.js
function ye(e, t) {
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
//#region \0@oxc-project+runtime@0.128.0/helpers/toPropertyKey.js
function be(e) {
	var t = ye(e, "string");
	return R(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.128.0/helpers/defineProperty.js
function z(e, t, n) {
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
		z(this, "cache", {}), this.props = e, this.watch = t;
	}
	is(e) {
		return E(e) ? !!e.find((e) => this.isDifferent(e)) : this.isDifferent(e);
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
		z(this, "event", {}), z(this, "changed", void 0), this.props = e, this.callback = t, this.changed = new xe(e, n);
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
function B(e) {
	return P(e) ? e.value : e;
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
	if (j(e) && (o += e), n && (o += `.${n}`), i && j(i) && (o += `.${i}`), a && (o += `.${a}`), r && (o += `.${r}`), o !== "") return o;
}
//#endregion
//#region src/functions/ref/render.ts
function Ee(e, t, n, r) {
	let i = t, a = t && "key" in t;
	return (!t || !a) && (i = {
		...t,
		key: Te(e, t, r)
	}), ce(e, i, n);
}
//#endregion
//#region src/functions/toBind.ts
function V(e, t) {
	let n = e == null ? void 0 : e.class, r = t == null ? void 0 : t.class, i = e == null ? void 0 : e.style, a = t == null ? void 0 : t.style, o = {
		...e,
		...t
	};
	return n && r && (o.class = [], n && o.class.push(n), r && o.class.push(r)), i && a && (o.style = [], i && o.style.push(i), a && o.style.push(a)), o;
}
//#endregion
//#region src/functions/toBinds.ts
function De(...e) {
	let t = {};
	return e.forEach((e) => {
		e && (t = V(t, e));
	}), t;
}
//#endregion
//#region src/classes/design/DesignComponents.ts
var H = class {
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
			e in this.caching || (this.caching[e] = N(() => this.computeModification(e)));
			let n = this.caching[e];
			if (n) return t ? De(n.value, t) : n.value;
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
		let n = B((t = this.modification) == null ? void 0 : t[e]);
		if (n && k(n)) {
			let e = {};
			return S(n, (t, n) => {
				e[n] = B(t);
			}), e;
		}
		return {};
	}
}, Oe = class extends H {}, ke = class {
	constructor(e, t, n) {
		z(this, "name", void 0), z(this, "element", F()), z(this, "refs", void 0), z(this, "components", void 0), z(this, "emits", void 0), z(this, "classes", void 0), z(this, "classesSub", void 0), z(this, "styles", void 0), z(this, "stylesSub", void 0), z(this, "attrs", void 0), z(this, "slots", void 0), z(this, "dataExpose", void 0), this.props = t, this.options = n, this.name = this.initName(e), this.refs = this.props ? me(this.props) : {}, this.components = new H(n == null ? void 0 : n.components, n == null ? void 0 : n.compMod), this.emits = n == null ? void 0 : n.emits, this.classes = N(() => this.updateClasses()), this.styles = N(() => this.updateStyles()), this.attrs = ge(), this.slots = _e();
	}
	init() {
		return this.classesSub = N(() => this.initClasses()), this.stylesSub = N(() => this.initStyles()), this.dataExpose = this.initExpose(), this;
	}
	getName() {
		return this.name.join("-");
	}
	getDesign() {
		return String(this.name[0]);
	}
	getSubClass(e) {
		return `${this.getName()}__${M(e).join("__")}`;
	}
	getStatusClass(e) {
		return `${this.getName()}--${M(e).join("--")}`;
	}
	getStyle(e) {
		return `--${this.getName()}-sys-${M(e).join("-")}`;
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
		return k(e) ? e : Array.isArray(e) ? { [e.filter((e) => typeof e == "string" && e.trim() !== "").join(" ")]: !0 } : typeof e == "string" ? { [e]: !0 } : {};
	}
	toClassName(e) {
		if (O(e)) {
			let t = {};
			return S(e, (e, n) => {
				n.match(/\?\?/) ? t[n.replace(/\?\?/, this.getName())] = e : n.match(/\?/) ? t[n.replace(/\?/, this.getDesign())] = e : t[n] = e;
			}), t;
		}
		return {};
	}
	initName(e) {
		return S(e.split(".", 2), (e) => re(e));
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
	return P(e) ? e : F(e);
}
//#endregion
//#region src/classes/ref/DatetimeRef.ts
var Ae = class {
	constructor(e, t = "date", n = l.getLocation()) {
		z(this, "item", void 0), z(this, "type", void 0), z(this, "code", void 0), z(this, "date", void 0), z(this, "datetime", void 0), z(this, "year", F(2e3)), z(this, "month", F(1)), z(this, "day", F(1)), z(this, "hour", F(1)), z(this, "minute", F(1)), z(this, "second", F(1)), this.item = U(e), this.type = U(t), this.code = U(n), this.date = F(ie(this.item.value)), this.datetime = new a(this.date.value, this.type.value, this.code.value), L(this.item, (e) => {
			this.date.value = ie(e);
		}), L(this.type, (e) => this.datetime.setType(e)), L(this.code, (e) => this.datetime.setCode(e)), L(this.date, (e) => {
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
		return N(() => this.date.value && this.datetime.getHoursType());
	}
	getFirstDayCode() {
		return N(() => this.date.value && this.datetime.getFirstDayCode());
	}
	getYear() {
		return N(() => this.year.value);
	}
	getMonth() {
		return N(() => this.month.value);
	}
	getDay() {
		return N(() => this.day.value);
	}
	getHour() {
		return N(() => this.hour.value);
	}
	getMinute() {
		return N(() => this.minute.value);
	}
	getSecond() {
		return N(() => this.second.value);
	}
	getMaxDay() {
		return N(() => this.date.value && this.datetime.getMaxDay());
	}
	locale(e = this.type.value, t) {
		return N(() => this.date.value && this.datetime.locale(e, t));
	}
	standard(e = !0) {
		return N(() => this.date.value && this.datetime.standard(e));
	}
	updateDate() {
		return this.year.value = this.datetime.getYear(), this.month.value = this.datetime.getMonth(), this.day.value = this.datetime.getDay(), this.hour.value = this.datetime.getHour(), this.minute.value = this.datetime.getMinute(), this.second.value = this.datetime.getSecond(), this;
	}
}, W = class {
	static run(e) {
		return this.getScope().run(e);
	}
	static getScope() {
		return v.get("__ui:effect-scope-global__", () => oe(!0));
	}
}, je = class extends s {
	constructor(e, t, n = ["click"], r, i, a) {
		let o = U(e), s = U(t);
		super(o.value, n, r, i, a), s.value && this.setElementControl(s.value), L(o, (e) => this.setElement(e)), L(s, (e) => this.setElementControl(e));
	}
}, Me = class {
	constructor(e = l.getLocation()) {
		z(this, "code", void 0), z(this, "flag", void 0), this.code = U(e), this.flag = new u(this.code.value), L(this.code, (e) => this.flag.setCode(e));
	}
	getCode() {
		return this.code;
	}
	get(e = this.code.value) {
		return N(() => this.flag.get(e));
	}
	getFlag(e = this.code.value) {
		return N(() => {
			var t;
			return (t = this.flag.get(e)) == null ? void 0 : t.icon;
		});
	}
	getList(e) {
		return N(() => this.flag.getList(e));
	}
	getNational(e) {
		return N(() => this.flag.getNational(e));
	}
}, G, K = class {
	static get() {
		return v.get("__ui:geo-ref__", () => I(l.getItem()));
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
G = K, z(K, "country", N(() => G.get().value.country)), z(K, "language", N(() => G.get().value.language)), z(K, "standard", N(() => G.get().value.standard)), z(K, "firstDay", N(() => G.get().value.firstDay));
//#endregion
//#region src/classes/ref/GeoIntlRef.ts
var Ne = class {
	constructor(e) {
		z(this, "location", void 0), z(this, "intl", void 0), this.location = U(e), this.intl = N(() => {
			var e;
			return new d((e = this.location.value) == null ? K.getLanguage().value : e);
		});
	}
	display(e, t) {
		return N(() => this.intl.value.display(B(e), t));
	}
	languageName(e, t) {
		return N(() => this.intl.value.languageName(B(e), t));
	}
	countryName(e, t) {
		return N(() => this.intl.value.countryName(B(e), t));
	}
	number(e, t) {
		return N(() => this.intl.value.number(B(e), t));
	}
	decimal() {
		return N(() => this.intl.value.decimal());
	}
	currency(e, t, n = !1) {
		return N(() => this.intl.value.currency(B(e), B(t), n));
	}
	currencySymbol(e, t = "symbol") {
		return N(() => this.intl.value.currencySymbol(B(e), t));
	}
	unit(e, t) {
		return N(() => this.intl.value.unit(B(e), t));
	}
	sizeFile(e, t = "byte") {
		return N(() => this.intl.value.sizeFile(B(e), t));
	}
	percent(e, t) {
		return N(() => this.intl.value.percent(B(e), t));
	}
	percentBy100(e, t) {
		return N(() => this.intl.value.percentBy100(B(e), t));
	}
	plural(e, t, n, r) {
		return N(() => this.intl.value.plural(B(e), t, n, r));
	}
	date(e, t, n, r) {
		return N(() => this.intl.value.date(B(e), t, n, r));
	}
	relative(e, t, n) {
		return N(() => this.intl.value.relative(B(e), t, n));
	}
	relativeLimit(e, t, n, r, i, a, o) {
		return N(() => this.intl.value.relativeLimit(B(e), t, n, r, i, a, o));
	}
	relativeByValue(e, t, n) {
		return N(() => this.intl.value.relativeByValue(B(e), t, n));
	}
	month(e, t) {
		return N(() => this.intl.value.month(B(e), t));
	}
	months(e) {
		return N(() => this.intl.value.months(e));
	}
	weekday(e, t) {
		return N(() => this.intl.value.weekday(B(e), t));
	}
	weekdays(e) {
		return N(() => this.intl.value.weekdays(e));
	}
	time(e) {
		return N(() => this.intl.value.time(B(e)));
	}
	sort(e, t = (e, t) => [e, t]) {
		return N(() => this.intl.value.sort([...B(e)], t));
	}
}, Pe = class e {
	constructor(e, t, n, r, i, a, o, s, c, l = 0, u = 9999999, d) {
		z(this, "subList", {}), z(this, "data", N(() => S(B(this.list) || [], (e, t) => this.initItem(t, e)))), z(this, "liteData", N(() => {
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
		})), z(this, "fullData", N(() => {
			let e = this.getFocus(), t = this.getHighlight(), n = this.getSelected();
			return S(this.data.value, (r) => {
				var i, a;
				let o = A(r.index, n);
				return {
					...r,
					focus: e === r.index,
					highlight: t,
					filterMode: (i = this.filterMode) == null ? void 0 : i.value,
					selected: o,
					disabled: (a = r.disabled) == null ? !o && r.type === "item" && this.isSelectedMax.value : a
				};
			});
		})), z(this, "map", N(() => {
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
		})), z(this, "mapItems", N(() => this.map.value.filter((e) => e.type === "item"))), z(this, "items", N(() => this.map.value.filter((e) => e.type === "item" || e.type === "group" || e.type === "menu"))), z(this, "highlightFirstItem", N(() => {
			let e = this.getHighlight();
			if (e && e.length >= this.getHighlightLengthStart()) {
				let t = T(e, "i");
				if (t) return this.map.value.findIndex((e) => {
					var n, r, i;
					return ((n = e.label) == null ? void 0 : n.toString().match(t)) || ((r = e.index) == null ? void 0 : r.toString().match(t)) || ((i = e.search) == null ? void 0 : i.toString().match(t));
				});
			}
			return -1;
		})), z(this, "isSelected", N(() => {
			let e = this.getSelected();
			return !!e && this.mapItems.value.findIndex((t) => A(t.index, e)) !== -1;
		})), z(this, "isSelectedMin", N(() => {
			let e = Number(B(this.min) || 0);
			return e > 0 ? this.selectedListInGroup.value.length >= e : !1;
		})), z(this, "isSelectedMax", N(() => {
			let e = Number(B(this.max) || 9999999);
			return e > 0 ? this.selectedListInGroup.value.length >= e : !1;
		})), z(this, "selectedList", N(() => {
			let e = this.getSelected();
			return e && this.isSelected.value ? this.mapItems.value.filter((t) => A(t.index, e)) : [];
		})), z(this, "selectedListInGroup", N(() => {
			let e = this.getSelected();
			return e && this.isSelected.value ? this.data.value.filter((t) => A(t.index, e)) : [];
		})), z(this, "selectedNames", N(() => C(this.selectedList.value, "label"))), z(this, "selectedValues", N(() => C(this.selectedList.value, "value"))), this.list = e, this.focus = t, this.highlight = n, this.highlightLengthStart = r, this.filterMode = i, this.selected = a, this.keyValue = o, this.keyLabel = s, this.lite = c, this.min = l, this.max = u, this.parent = d, P(e) && L(e, () => {
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
		return e && !O(e) ? e : t && !O(t) ? t : n && r;
	}
	initItem(e, t) {
		if (k(t)) {
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
}, Fe = "__ui:router-item-ref__", q = class {
	static get() {
		return v.get(Fe);
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
		v.set(Fe, () => e);
	}
	static setOneTime(e) {
		this.get() || this.set(e);
	}
	static rawToHref(e) {
		return k(e) && "name" in e && j(e == null ? void 0 : e.name) ? this.getHref(e.name) : {};
	}
}, Ie = class {
	constructor() {
		z(this, "item", F()), z(this, "width", F(0)), z(this, "is", N(() => this.item.value !== void 0)), D() && (g.is().then((e) => {
			this.item.value = e;
		}), g.get().then((e) => {
			this.width.value = e;
		}));
	}
}, J = (e) => typeof e == "string" ? { method: e } : e || {}, Y;
function X(t, n, r = !0, i, a, o, s = !0, c = e.getItem()) {
	let l = F(), u = U(J(n)), d = F(!1), f = F(!1), p = F(), m, h = !0, g, _ = () => {
		let e = B(t);
		return !!((!i || i.value) && e);
	}, v = () => ({
		path: B(t),
		...u.value
	}), y = () => {
		if (D() && _()) {
			let e = c.getResponse().emulatorAsync(v());
			e && (l.value = e);
		}
	}, b = async () => {
		if (!h) if (m && m.abort(), m = u.value.controller || new AbortController(), _()) {
			d.value = !0, f.value = !0;
			try {
				let e = await c.request({
					controller: m,
					...v()
				});
				e && (p.value = o == null ? void 0 : o(e), a ? l.value = a(e, p.value) : l.value = e);
			} catch (e) {
				l.value = void 0;
			}
			d.value = !1;
		} else l.value !== void 0 && (l.value = void 0);
	}, x = () => {
		g == null || g(), l.value = void 0, h = !0;
	}, S = () => {
		if (h) {
			if (h = !1, !D()) return;
			y(), l.value === void 0 && b().then(), s ? w() : W.run(() => w());
		}
	};
	s && se() && fe(() => x());
	let C = () => {
		D() || de(async () => {
			h = !1, await b();
		});
	}, w = () => {
		let e = [];
		r && e.push(u), P(t) && e.push(t), i && e.push(i), Y && e.push(Y), e.length > 0 && (g = L(e, async () => {
			d.value || await b();
		}));
	}, T = N(() => (S(), l.value)), ee = N(() => Array.isArray(l.value) ? l.value.length : +!!l.value), E = N(() => l.value === void 0);
	return {
		data: T,
		get item() {
			return S(), l;
		},
		isResponseContractValid: N(() => {
			var e;
			return ((e = p.value) == null ? void 0 : e.status) === "success";
		}),
		responseValidationResult: N(() => p.value),
		length: ee,
		starting: E,
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
		init: S,
		initSsr: C,
		reset: b,
		stop: x,
		abort: () => m == null ? void 0 : m.abort()
	};
}
var Le = (e) => {
	Y || (Y = e);
};
//#endregion
//#region src/composables/ref/useApiAsyncRef.ts
function Re(t, n, r = !0, i, a, o, s = !0, c = e.getItem()) {
	let l = X(t, n, r, i, a, o, s, c);
	return l.initSsr(), l;
}
//#endregion
//#region src/composables/ref/useApiRequest.ts
function Z(n, r = t.post, i, a, o = !0, s, c = e.getItem()) {
	let l = F(!1), u = U(J(s));
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
function ze(e, n, r, i = !0, a, o) {
	return Z(e, t.delete, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiGet.ts
function Be(e, n, r, i = !0, a, o) {
	return Z(e, t.get, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiPost.ts
function Ve(e, n, r, i = !0, a, o) {
	return Z(e, t.post, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiPut.ts
function He(e, n, r, i = !0, a, o) {
	return Z(e, t.put, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useFormattersRef.ts
function Ue(e, t) {
	let n = new c(t);
	return {
		listFormat: N(() => n.setList(e.value).to()),
		length: N(() => n.setList(e.value).length())
	};
}
//#endregion
//#region src/composables/ref/useSearchValueRef.ts
function We(e, t) {
	let n = t == null ? F("") : t, r = F(n.value), i = F(!1), a;
	return L(n, (t, o, s) => {
		let c = e.getOptions().getDelay();
		c && D() ? (i.value = !0, a = setTimeout(() => {
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
function Ge(e, t, n, r) {
	let i = new _(void 0, t, void 0, r), { search: a, searchDelay: o, loading: s } = We(i, n), c = () => B(b(e)) || [], l = N(() => i.setValue(o.value).getItem().isSearch()), u = N(() => i.setList(c()).setValue(o.value).to());
	return {
		isSearch: l,
		search: a,
		loading: s,
		listSearch: u,
		length: N(() => u.value.length)
	};
}
//#endregion
//#region src/composables/ref/useApiManagementRef.ts
function Ke(e, t, n, r, i, a, o, s) {
	let { path: c, options: l, reactivity: u, conditions: d, transformation: f, validateResponseContract: p, typeData: m, unmounted: h, skeleton: g } = e, _, v, y, b, S, C = X(c, l, u, d, f, p, h, s), w = N(() => m === void 0 ? !0 : C.isStarting() ? !1 : te(m) ? m(C.data.value) : C.data.value instanceof m), T = N(() => C.isStarting() && g ? g() : C.data.value);
	if (t && (_ = Ue(T, t)), n && (v = Ge(N(() => {
		var e;
		let t = (e = _ == null ? void 0 : _.listFormat.value) == null ? C.data.value : e;
		if (Array.isArray(t)) return t;
	}), n.columns, n.value, n.options)), r || i || a) {
		let e = (e) => {
			o == null || o(), ee(e) && C.reset().then();
		}, t = (t) => async (n) => {
			te(t) && await x(t(n)), e(n);
		};
		r && (y = Ve(r.path, t(r.action), r.transformation, r.toData, r.options, s)), i && (b = He(i.path, t(i.action), i.transformation, i.toData, i.options, s)), a && (S = ze(a.path, t(a.action), a.transformation, a.toData, a.options, s));
	}
	let E = N(() => {
		if (w.value) {
			if (v && Array.isArray(C.data.value)) return v.listSearch.value;
			if (_) return _.listFormat.value;
		}
		return T.value;
	});
	return {
		isValid: w,
		isResponseContractValid: C.isResponseContractValid,
		responseValidationResult: C.responseValidationResult,
		list: E,
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
		init: C.init,
		initSsr: C.initSsr,
		reset: C.reset,
		abort: C.abort,
		sendPost: async (e) => await (y == null ? void 0 : y.send(e)),
		sendPut: async (e) => await (b == null ? void 0 : b.send(e)),
		sendDelete: async (e) => await (S == null ? void 0 : S.send(e))
	};
}
//#endregion
//#region src/composables/ref/useApiManagementAsyncRef.ts
function qe(e, t, n, r, i, a, o, s) {
	let c = Ke(e, t, n, r, i, a, o, s);
	return c.initSsr(), c;
}
//#endregion
//#region src/composables/ref/useBroadcastValueRef.ts
var Je = () => v.get("__ui:broadcast-value-ref__", () => ({}));
function Ye(e, t) {
	let r = `broadcast--${e}`, i = Je();
	if (r in i) return i[r];
	let a = F(b(t));
	if (D()) {
		let e = new n(r, (e) => {
			a.value !== e.data.message && (a.value = e.data.message);
		});
		W.run(() => {
			L(a, (t) => e.post({ message: t }));
		});
	}
	return i[r] = a, a;
}
//#endregion
//#region src/composables/ref/useCookieRef.ts
var Xe = () => v.get("__ui:cookie-ref__", () => ({}));
function Ze(e, t, n) {
	let i = Xe();
	if (e in i) return i[e];
	let a = new r(e), o = Ye(`__cookie:${e}`, a.get(t, n));
	return W.run(() => {
		L(o, (e) => {
			a.set(e, n);
		});
	}), i[e] = o, o;
}
//#endregion
//#region src/composables/ref/useGeoIntlRef.ts
function Qe() {
	return new Ne();
}
//#endregion
//#region src/composables/ref/useHashRef.ts
var $e = () => v.get("__ui:hash-ref__", () => ({}));
function et(e, t) {
	let n = $e();
	if (e in n) return n[e];
	let r = I(f.get(e, t));
	return D() && (W.run(() => {
		L(r, (t) => f.set(e, t));
	}), f.addWatch(e, (e) => {
		r.value = e;
	})), n[e] = r, r;
}
//#endregion
//#region src/composables/ref/useLazyRef.ts
var tt = (e = { rootMargin: "128px 0px" }) => {
	let t = {}, n = D() && "IntersectionObserver" in window ? new IntersectionObserver((e) => {
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
			let i = I(!n);
			if (n) {
				let a;
				a = L(e, (o, s) => {
					if (s && r(s), e.value) {
						let r = w(e.value);
						t[r] = {
							status: i,
							ratio: I(0),
							entry: I(void 0),
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
}, nt = () => v.get("__ui:lazy-item-by-margin-ref__", () => []), rt = (e) => {
	let t = nt(), n = t.find((t) => t.rootMargin === e);
	if (n) return n.item;
	let r = tt({ rootMargin: e });
	return t.push({
		rootMargin: e,
		item: r
	}), r;
}, it = (e, t) => {
	let n = rt(t);
	return {
		lazyItemStatus: n.addLazyItem(e),
		get lazyItem() {
			return n.getItem(e.value);
		}
	};
};
//#endregion
//#region src/composables/ref/useLoadingRef.ts
function at() {
	let e = I(m.is());
	return D() && m.registrationEvent(({ detail: t }) => {
		e.value = t.loading;
	}), e;
}
//#endregion
//#region src/functions/executeUse.ts
var Q = /* @__PURE__ */ function(e) {
	return e.global = "global", e.provide = "provide", e.local = "local", e;
}({}), ot = 1, st = ne(1e5, 999999), ct = () => `__execute_use${st}::${ot++}`, lt = () => v.get("__ui:execute-use-global__", () => []);
function $(e, t = Q.provide) {
	let n = ct(), r, i = (t) => {
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
	}, s = (...e) => t === Q.provide ? ue(n, void 0) || a(e) : (r || W.run(() => {
		r = o(e);
	}), r);
	return t === Q.global && lt().push(s), s;
}
function ut(e) {
	return $(e, Q.global);
}
function dt(e) {
	return $(e, Q.provide);
}
function ft(e) {
	return $(e, Q.local);
}
function pt() {
	lt().forEach((e) => e());
}
//#endregion
//#region src/composables/ref/useMeta.ts
var mt = ft(() => {
	let e = h, t = F(e.getTitle()), n = F(e.getKeywords()), r = F(e.getDescription()), i = F(e.getImage()), a = F(e.getCanonical()), o = F(e.getRobots()), s = F(e.getAuthor()), c = F(e.getSiteName()), l = () => e.html(), u = (e) => {
		t.value = e, x();
	}, d = (e) => {
		n.value = e, x();
	}, f = (e) => {
		r.value = e, x();
	}, p = (e) => {
		i.value = e, x();
	}, m = (e) => {
		a.value = e, x();
	}, g = (e) => {
		o.value = e, x();
	}, _ = (e) => {
		s.value = e, x();
	}, v = (e) => {
		c.value = e, x();
	}, y = () => {
		t.value = e.getTitle(), n.value = e.getKeywords(), r.value = e.getDescription(), i.value = e.getImage(), a.value = e.getCanonical(), o.value = e.getRobots(), s.value = e.getAuthor(), c.value = e.getSiteName();
	}, b = () => {
		e.setTitle(t.value), e.setKeywords(n.value), e.setDescription(r.value), e.setImage(i.value), e.setCanonical(a.value), e.setRobots(o.value), e.setAuthor(s.value), e.setSiteName(c.value);
	}, x = () => {
		D() || b();
	};
	return L([
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c
	], () => b()), {
		meta: e,
		title: t,
		keyword: n,
		description: r,
		author: s,
		image: i,
		canonical: a,
		robots: o,
		siteName: c,
		getHtmlMeta: l,
		sync: y,
		update: b,
		updateSsr: x,
		setTitle: u,
		setKeywords: d,
		setDescription: f,
		setAuthor: _,
		setImage: p,
		setCanonical: m,
		setRobots: g,
		setSiteName: v,
		setSuffix: (t) => e.setSuffix(t)
	};
}), ht = () => mt(), gt = (e, t, n = !0) => {
	var r;
	let i = P(t) ? t : F(t || ((r = e.value) == null || (r = r[0]) == null ? void 0 : r.value) || ""), a = () => o(i.value), o = (t) => {
		var n;
		return (n = e.value) == null ? void 0 : n.find((e) => e.value === t);
	}, s = (e) => {
		e && e !== i.value && o(e) && (i.value = e, q.push({ name: e }));
	};
	return {
		item: N(() => a()),
		selected: i,
		label: N(() => {
			var e;
			return ((e = a()) == null ? void 0 : e.label) || "";
		}),
		list: N(() => e.value ? S(e.value, (e) => n && !("to" in e) ? {
			...e,
			to: { name: e.value }
		} : e) : []),
		to: s,
		toMain() {
			var t;
			s((t = e.value) == null || (t = t[0]) == null ? void 0 : t.value);
		}
	};
}, _t = () => v.get("__ui:session-ref__", () => ({}));
function vt(e, t) {
	let n = _t();
	if (e in n) return n[e];
	let r = new i(e, !0), a = F(r.get(t));
	return W.run(() => {
		L(a, (e) => r.set(e));
	}), n[e] = a, a;
}
//#endregion
//#region src/composables/ref/useStorageRef.ts
var yt = () => v.get("__ui:storage-ref__", () => ({}));
function bt(e, t, n) {
	let r = yt();
	if (e in r) return r[e];
	let a = new i(e), o = F(a.get(t, n));
	return W.run(() => {
		L(o, (e) => a.set(e));
	}), D() && window.addEventListener("storage", () => {
		a.update(), o.value = a.get();
	}), r[e] = o, o;
}
//#endregion
//#region src/composables/ref/useTranslateRef.ts
function xt(e, t = y.getItem()) {
	let n = I(t.getListSync(e, !0)), r = async () => {
		n.value = { ...await t.getList(e) };
	};
	if (D()) {
		L(K.getLanguage(), r);
		for (let e in n.value) if (n.value[e] === e || n.value[e] === " ") {
			r().then();
			break;
		}
	}
	return n;
}
var St = (e) => xt(e);
//#endregion
//#region src/functions/computedAsync.ts
function Ct(e, t, n, r) {
	let i = I(b(t)), a = !0, o = async () => {
		let t = await x(e);
		t !== n && (i.value = t);
	}, s = () => {
		a && (a = !1, D() ? ve(o) : o().then());
	};
	return N(() => (s(), i.value), r);
}
//#endregion
//#region src/functions/computedByLanguage.ts
function wt(e, t = () => void 0, n, r) {
	return N(() => {
		if (K.get().value && (n === void 0 || n())) {
			let t = e();
			if (t !== void 0) return t;
		}
		return b(t);
	}, r);
}
//#endregion
//#region src/functions/computedEternity.ts
function Tt(e, t) {
	return ae((n, r) => {
		let i = I(b(t)), a = !1, o = async () => {
			i.value = await x(e), r();
		}, s = () => {
			a || (a = !0, D() ? W.run(() => {
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
var Et = { install(t, n = {}) {
	if (n.api && e.setConfig(n.api), n.translate && y.setConfig(n.translate), n.icons && p.setConfig(n.icons), n.metaSuffix && ht().setSuffix(n.metaSuffix), n.router) q.set(n.router);
	else {
		let e = t.config.globalProperties.$router;
		e && q.set(e);
	}
	n.errorCauses && o.addList(n.errorCauses), pt();
} };
//#endregion
//#region src/functions/getInject.ts
function Dt(e) {
	if (le()) {
		let t = ue(e);
		if (t) return t;
	}
}
//#endregion
//#region src/functions/render/getBind.ts
function Ot(e, t = {}, n = "value", r = !1) {
	let i = typeof t == "string", a = i ? t : n, o = i ? {} : t;
	return e ? e && k(e) && (a in e || r) ? V(o, e) : V(o, { [a]: e }) : i ? {} : { ...o };
}
//#endregion
//#region src/functions/ref/getBindRef.ts
function kt(e, t = {}, n = "value") {
	return N(() => Ot(B(e), B(t), n));
}
//#endregion
//#region src/functions/ref/setRef.ts
function At(e, t) {
	e.value !== t && (e.value = t);
}
//#endregion
export { Ae as DatetimeRef, Se as DesignAbstract, Ce as DesignAsyncAbstract, xe as DesignChanged, Oe as DesignComp, H as DesignComponents, ke as DesignConstructorAbstract, W as EffectScopeGlobal, je as EventRef, Q as ExecuteUseType, Me as GeoFlagRef, Ne as GeoIntlRef, K as GeoRef, Pe as ListDataRef, q as RouterItemRef, Ie as ScrollbarWidthRef, Ct as computedAsync, wt as computedByLanguage, Tt as computedEternity, Et as dxtFunctionalPlugin, $ as executeUse, ut as executeUseGlobal, pt as executeUseGlobalInit, ft as executeUseLocal, dt as executeUseProvide, Ot as getBind, kt as getBindRef, we as getClassName, Te as getIndexForRender, Dt as getInject, J as getOptions, B as getRef, Ee as render, Le as setApiRefGlobalConditions, At as setRef, St as t, V as toBind, De as toBinds, U as toRefItem, Re as useApiAsyncRef, ze as useApiDelete, Be as useApiGet, qe as useApiManagementAsyncRef, Ke as useApiManagementRef, Ve as useApiPost, He as useApiPut, X as useApiRef, Z as useApiRequest, Ye as useBroadcastValueRef, Ze as useCookieRef, Ue as useFormattersRef, Qe as useGeoIntlRef, et as useHashRef, it as useLazyItemByMarginRef, tt as useLazyRef, at as useLoadingRef, ht as useMeta, gt as useRouterList, Ge as useSearchRef, We as useSearchValueRef, vt as useSessionRef, bt as useStorageRef, xt as useTranslateRef };
