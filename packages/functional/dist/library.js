import { Api as e, ApiMethodItem as t, BroadcastMessage as n, Cookie as r, DataStorage as i, Datetime as a, EventItem as o, Formatters as s, Geo as c, GeoFlag as l, GeoIntl as u, Hash as d, Loading as f, Meta as p, ScrollbarWidth as m, SearchList as h, Translate as g, executeFunction as _, executePromise as v, forEach as y, getColumn as b, getElementId as x, getExp as S, isApiSuccess as ee, isArray as C, isDomRuntime as w, isFunction as te, isObject as ne, isObjectNotArray as T, isSelected as E, isString as D, random as re, toArray as O, toCamelCase as ie, toDate as ae } from "@dxtmisha/functional-basic";
import { computed as k, customRef as oe, effectScope as A, getCurrentInstance as se, h as ce, inject as le, isRef as j, onUnmounted as ue, provide as de, ref as M, shallowRef as N, toRefs as fe, triggerRef as pe, useAttrs as me, useSlots as he, watch as P, watchEffect as ge } from "vue";
export * from "@dxtmisha/functional-basic";
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/typeof.js
function F(e) {
	"@babel/helpers - typeof";
	return F = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, F(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPrimitive.js
function _e(e, t) {
	if (F(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (F(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPropertyKey.js
function ve(e) {
	var t = _e(e, "string");
	return F(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/defineProperty.js
function I(e, t, n) {
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
		I(this, "cache", {}), this.props = e, this.watch = t;
	}
	is(e) {
		return C(e) ? !!e.find((e) => this.isDifferent(e)) : this.isDifferent(e);
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
		I(this, "event", {}), I(this, "changed", void 0), this.props = e, this.callback = t, this.changed = new ye(e, n);
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
function L(e) {
	return j(e) ? e.value : e;
}
//#endregion
//#region src/functions/render/getClassName.ts
function Se(e) {
	return e && "class" in e && typeof e.class == "string" ? e.class : void 0;
}
//#endregion
//#region src/functions/render/getIndexForRender.ts
function Ce(e, t, n) {
	let r = t == null ? void 0 : t.id, i = t == null ? void 0 : t.index, a = Se(t), o = "";
	if (D(e) && (o += e), n && (o += `.${n}`), i && D(i) && (o += `.${i}`), a && (o += `.${a}`), r && (o += `.${r}`), o !== "") return o;
}
//#endregion
//#region src/functions/ref/render.ts
function we(e, t, n, r) {
	let i = t, a = t && "key" in t;
	return (!t || !a) && (i = {
		...t,
		key: Ce(e, t, r)
	}), ce(e, i, n);
}
//#endregion
//#region src/functions/toBind.ts
function R(e, t) {
	let n = e == null ? void 0 : e.class, r = t == null ? void 0 : t.class, i = e == null ? void 0 : e.style, a = t == null ? void 0 : t.style, o = {
		...e,
		...t
	};
	return n && r && (o.class = [], n && o.class.push(n), r && o.class.push(r)), i && a && (o.style = [], i && o.style.push(i), a && o.style.push(a)), o;
}
//#endregion
//#region src/functions/toBinds.ts
function Te(...e) {
	let t = {};
	return e.forEach((e) => {
		e && (t = R(t, e));
	}), t;
}
//#endregion
//#region src/classes/design/DesignComponents.ts
var z = class {
	constructor(e = {}, t) {
		I(this, "caching", {}), this.components = e, this.modification = t;
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
			e in this.caching || (this.caching[e] = k(() => this.computeModification(e)));
			let n = this.caching[e];
			if (n) return t ? Te(n.value, t) : n.value;
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
			return we(this.get(e), this.getModification(i, t), n, i);
		}
	}
	renderAdd(e, t, n, r, i) {
		return e.push(...this.render(t, n, r, i)), this;
	}
	computeModification(e) {
		var t;
		let n = L((t = this.modification) == null ? void 0 : t[e]);
		if (n && T(n)) {
			let e = {};
			return y(n, (t, n) => {
				e[n] = L(t);
			}), e;
		}
		return {};
	}
}, Ee = class extends z {}, De = class {
	constructor(e, t, n) {
		I(this, "name", void 0), I(this, "element", M()), I(this, "refs", void 0), I(this, "components", void 0), I(this, "emits", void 0), I(this, "classes", void 0), I(this, "classesSub", void 0), I(this, "styles", void 0), I(this, "stylesSub", void 0), I(this, "attrs", void 0), I(this, "slots", void 0), I(this, "dataExpose", void 0), this.props = t, this.options = n, this.name = this.initName(e), this.refs = this.props ? fe(this.props) : {}, this.components = new z(n == null ? void 0 : n.components, n == null ? void 0 : n.compMod), this.emits = n == null ? void 0 : n.emits, this.classes = k(() => this.updateClasses()), this.styles = k(() => this.updateStyles()), this.attrs = me(), this.slots = he();
	}
	init() {
		return this.classesSub = k(() => this.initClasses()), this.stylesSub = k(() => this.initStyles()), this.dataExpose = this.initExpose(), this;
	}
	getName() {
		return this.name.join("-");
	}
	getDesign() {
		return String(this.name[0]);
	}
	getSubClass(e) {
		return `${this.getName()}__${O(e).join("__")}`;
	}
	getStatusClass(e) {
		return `${this.getName()}--${O(e).join("--")}`;
	}
	getStyle(e) {
		return `--${this.getName()}-sys-${O(e).join("-")}`;
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
		return T(e) ? e : Array.isArray(e) ? { [e.filter((e) => typeof e == "string" && e.trim() !== "").join(" ")]: !0 } : typeof e == "string" ? { [e]: !0 } : {};
	}
	toClassName(e) {
		if (ne(e)) {
			let t = {};
			return y(e, (e, n) => {
				n.match(/\?\?/) ? t[n.replace(/\?\?/, this.getName())] = e : n.match(/\?/) ? t[n.replace(/\?/, this.getDesign())] = e : t[n] = e;
			}), t;
		}
		return {};
	}
	initName(e) {
		return y(e.split(".", 2), (e) => ie(e));
	}
	updateClasses() {
		var e, t, n;
		let r = (e = this.classesSub) == null ? void 0 : e.value, i = (t = this.options) == null || (t = t.classes) == null ? void 0 : t.value;
		return r && i ? {
			...r,
			...i,
			main: {
				...this.toClass(r == null ? void 0 : r.main),
				...this.toClass(i == null ? void 0 : i.main)
			}
		} : (n = i == null ? r : i) == null ? { main: {} } : n;
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
function B(e) {
	return j(e) ? e : M(e);
}
//#endregion
//#region src/classes/ref/DatetimeRef.ts
var Oe = class {
	constructor(e, t = "date", n = c.getLocation()) {
		I(this, "item", void 0), I(this, "type", void 0), I(this, "code", void 0), I(this, "date", void 0), I(this, "datetime", void 0), I(this, "year", M(2e3)), I(this, "month", M(1)), I(this, "day", M(1)), I(this, "hour", M(1)), I(this, "minute", M(1)), I(this, "second", M(1)), this.item = B(e), this.type = B(t), this.code = B(n), this.date = M(ae(this.item.value)), this.datetime = new a(this.date.value, this.type.value, this.code.value), P(this.item, (e) => {
			this.date.value = ae(e);
		}), P(this.type, (e) => this.datetime.setType(e)), P(this.code, (e) => this.datetime.setCode(e)), P(this.date, (e) => {
			this.datetime.setDate(e), this.updateDate();
		}), this.datetime.setWatch(() => pe(this.date)), this.updateDate();
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
		return k(() => this.date.value && this.datetime.getHoursType());
	}
	getFirstDayCode() {
		return k(() => this.date.value && this.datetime.getFirstDayCode());
	}
	getYear() {
		return k(() => this.year.value);
	}
	getMonth() {
		return k(() => this.month.value);
	}
	getDay() {
		return k(() => this.day.value);
	}
	getHour() {
		return k(() => this.hour.value);
	}
	getMinute() {
		return k(() => this.minute.value);
	}
	getSecond() {
		return k(() => this.second.value);
	}
	getMaxDay() {
		return k(() => this.date.value && this.datetime.getMaxDay());
	}
	locale(e = this.type.value, t) {
		return k(() => this.date.value && this.datetime.locale(e, t));
	}
	standard(e = !0) {
		return k(() => this.date.value && this.datetime.standard(e));
	}
	updateDate() {
		return this.year.value = this.datetime.getYear(), this.month.value = this.datetime.getMonth(), this.day.value = this.datetime.getDay(), this.hour.value = this.datetime.getHour(), this.minute.value = this.datetime.getMinute(), this.second.value = this.datetime.getSecond(), this;
	}
}, V = class {
	static run(e) {
		return this.getScope().run(e);
	}
	static getScope() {
		return this.scope || (this.scope = A(!0)), this.scope;
	}
};
I(V, "scope", void 0);
//#endregion
//#region src/classes/ref/EventRef.ts
var ke = class extends o {
	constructor(e, t, n = ["click"], r, i, a) {
		let o = B(e), s = B(t);
		super(o.value, n, r, i, a), s.value && this.setElementControl(s.value), P(o, (e) => this.setElement(e)), P(s, (e) => this.setElementControl(e));
	}
}, Ae = class {
	constructor(e = c.getLocation()) {
		I(this, "code", void 0), I(this, "flag", void 0), this.code = B(e), this.flag = new l(this.code.value), P(this.code, (e) => this.flag.setCode(e));
	}
	getCode() {
		return this.code;
	}
	get(e = this.code.value) {
		return k(() => this.flag.get(e));
	}
	getFlag(e = this.code.value) {
		return k(() => {
			var t;
			return (t = this.flag.get(e)) == null ? void 0 : t.icon;
		});
	}
	getList(e) {
		return k(() => this.flag.getList(e));
	}
	getNational(e) {
		return k(() => this.flag.getNational(e));
	}
}, H, U = class {
	static get() {
		return this.item;
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
		c.set(e, !0), this.item.value = c.getItem();
	}
};
H = U, I(U, "item", N(c.get())), I(U, "country", k(() => H.item.value.country)), I(U, "language", k(() => H.item.value.language)), I(U, "standard", k(() => H.item.value.standard)), I(U, "firstDay", k(() => H.item.value.firstDay));
//#endregion
//#region src/classes/ref/GeoIntlRef.ts
var je = class {
	constructor(e) {
		I(this, "location", void 0), I(this, "intl", void 0), this.location = B(e), this.intl = k(() => {
			var e;
			return new u((e = this.location.value) == null ? U.getLanguage().value : e);
		});
	}
	display(e, t) {
		return k(() => this.intl.value.display(L(e), t));
	}
	languageName(e, t) {
		return k(() => this.intl.value.languageName(L(e), t));
	}
	countryName(e, t) {
		return k(() => this.intl.value.countryName(L(e), t));
	}
	number(e, t) {
		return k(() => this.intl.value.number(L(e), t));
	}
	decimal() {
		return k(() => this.intl.value.decimal());
	}
	currency(e, t, n = !1) {
		return k(() => this.intl.value.currency(L(e), L(t), n));
	}
	currencySymbol(e, t = "symbol") {
		return k(() => this.intl.value.currencySymbol(L(e), t));
	}
	unit(e, t) {
		return k(() => this.intl.value.unit(L(e), t));
	}
	sizeFile(e, t = "byte") {
		return k(() => this.intl.value.sizeFile(L(e), t));
	}
	percent(e, t) {
		return k(() => this.intl.value.percent(L(e), t));
	}
	percentBy100(e, t) {
		return k(() => this.intl.value.percentBy100(L(e), t));
	}
	plural(e, t, n, r) {
		return k(() => this.intl.value.plural(L(e), t, n, r));
	}
	date(e, t, n, r) {
		return k(() => this.intl.value.date(L(e), t, n, r));
	}
	relative(e, t, n) {
		return k(() => this.intl.value.relative(L(e), t, n));
	}
	relativeLimit(e, t, n, r, i, a, o) {
		return k(() => this.intl.value.relativeLimit(L(e), t, n, r, i, a, o));
	}
	relativeByValue(e, t, n) {
		return k(() => this.intl.value.relativeByValue(L(e), t, n));
	}
	month(e, t) {
		return k(() => this.intl.value.month(L(e), t));
	}
	months(e) {
		return k(() => this.intl.value.months(e));
	}
	weekday(e, t) {
		return k(() => this.intl.value.weekday(L(e), t));
	}
	weekdays(e) {
		return k(() => this.intl.value.weekdays(e));
	}
	time(e) {
		return k(() => this.intl.value.time(L(e)));
	}
	sort(e, t = (e, t) => [e, t]) {
		return k(() => this.intl.value.sort([...L(e)], t));
	}
}, Me = class e {
	constructor(e, t, n, r, i, a, o, s, c, l = 0, u = 9999999, d) {
		I(this, "subList", {}), I(this, "data", k(() => y(L(this.list) || [], (e, t) => this.initItem(t, e)))), I(this, "liteData", k(() => {
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
		})), I(this, "fullData", k(() => {
			let e = this.getFocus(), t = this.getHighlight(), n = this.getSelected();
			return y(this.data.value, (r) => {
				var i, a;
				let o = E(r.index, n);
				return {
					...r,
					focus: e === r.index,
					highlight: t,
					filterMode: (i = this.filterMode) == null ? void 0 : i.value,
					selected: o,
					disabled: (a = r.disabled) == null ? !o && r.type === "item" && this.isSelectedMax.value : a
				};
			});
		})), I(this, "map", k(() => {
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
		})), I(this, "mapItems", k(() => this.map.value.filter((e) => e.type === "item"))), I(this, "items", k(() => this.map.value.filter((e) => e.type === "item" || e.type === "group" || e.type === "menu"))), I(this, "highlightFirstItem", k(() => {
			let e = this.getHighlight();
			if (e && e.length >= this.getHighlightLengthStart()) {
				let t = S(e, "i");
				if (t) return this.map.value.findIndex((e) => {
					var n, r, i;
					return ((n = e.label) == null ? void 0 : n.toString().match(t)) || ((r = e.index) == null ? void 0 : r.toString().match(t)) || ((i = e.search) == null ? void 0 : i.toString().match(t));
				});
			}
			return -1;
		})), I(this, "isSelected", k(() => {
			let e = this.getSelected();
			return !!e && this.mapItems.value.findIndex((t) => E(t.index, e)) !== -1;
		})), I(this, "isSelectedMin", k(() => {
			let e = Number(L(this.min) || 0);
			return e > 0 ? this.selectedListInGroup.value.length >= e : !1;
		})), I(this, "isSelectedMax", k(() => {
			let e = Number(L(this.max) || 9999999);
			return e > 0 ? this.selectedListInGroup.value.length >= e : !1;
		})), I(this, "selectedList", k(() => {
			let e = this.getSelected();
			return e && this.isSelected.value ? this.mapItems.value.filter((t) => E(t.index, e)) : [];
		})), I(this, "selectedListInGroup", k(() => {
			let e = this.getSelected();
			return e && this.isSelected.value ? this.data.value.filter((t) => E(t.index, e)) : [];
		})), I(this, "selectedNames", k(() => b(this.selectedList.value, "label"))), I(this, "selectedValues", k(() => b(this.selectedList.value, "value"))), this.list = e, this.focus = t, this.highlight = n, this.highlightLengthStart = r, this.filterMode = i, this.selected = a, this.keyValue = o, this.keyLabel = s, this.lite = c, this.min = l, this.max = u, this.parent = d, j(e) && P(e, () => {
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
		return e && !ne(e) ? e : t && !ne(t) ? t : n && r;
	}
	initItem(e, t) {
		if (T(t)) {
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
}, W = class {
	static get() {
		return this.router;
	}
	static getLink(e, t, n) {
		var r;
		return (r = this.router) == null ? void 0 : r.resolve({
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
		this.router && this.router.push(e).then();
	}
	static set(e) {
		this.router = e;
	}
	static setOneTime(e) {
		this.router || this.set(e);
	}
	static rawToHref(e) {
		return T(e) && "name" in e && D(e == null ? void 0 : e.name) ? this.getHref(e.name) : {};
	}
};
I(W, "router", void 0);
//#endregion
//#region src/classes/ref/ScrollbarWidthRef.ts
var Ne = class {
	constructor() {
		I(this, "item", M()), I(this, "width", M(0)), I(this, "is", k(() => this.item.value !== void 0)), m.is().then((e) => {
			this.item.value = e;
		}), m.get().then((e) => {
			this.width.value = e;
		});
	}
}, G = (e) => typeof e == "string" ? { method: e } : e || {};
//#endregion
//#region src/composables/ref/useApiRequest.ts
function K(n, r = t.post, i, a, o = !0, s, c = e.getItem()) {
	let l = M(!1), u = B(G(s));
	return {
		loading: l,
		async send(e) {
			l.value = !0;
			let t;
			try {
				if (t = await c.request({
					path: L(n),
					method: r,
					request: e,
					toData: o,
					...u.value
				}), t && (a && (t = a(t)), i)) {
					let e = i(t);
					e instanceof Promise && await e;
				}
			} catch (e) {
				console.error("useApiRequest: error", L(n), e);
			}
			return l.value = !1, t;
		}
	};
}
//#endregion
//#region src/composables/ref/useApiDelete.ts
function Pe(e, n, r, i = !0, a, o) {
	return K(e, t.delete, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiGet.ts
function Fe(e, n, r, i = !0, a, o) {
	return K(e, t.get, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiRef.ts
var q;
function Ie(t, n, r = !0, i, a, o = !0, s = e.getItem()) {
	let c = M(), l = B(G(n)), u = M(!1), d = M(!1), f, p = !0, m, h = async () => {
		if (p) return;
		f && f.abort(), f = l.value.controller || new AbortController();
		let e = L(t);
		if ((!i || i.value) && e) {
			u.value = !0, d.value = !0;
			try {
				let t = await s.request({
					path: e,
					controller: f,
					...l.value
				});
				t && (a ? c.value = a(t) : c.value = t);
			} catch (t) {
				console.error("useApiRef: error", e, t), c.value = void 0;
			}
			u.value = !1;
		} else c.value !== void 0 && (c.value = void 0);
	}, g = () => {
		console.warn("useApiRef: stop", L(t)), m == null || m(), c.value = void 0, p = !0;
	}, _ = () => {
		p && (p = !1, h().then(), o ? (v(), se() && ue(() => g())) : V.run(() => v()));
	}, v = () => {
		let e = [];
		r && e.push(l), j(t) && e.push(t), i && e.push(i), q && e.push(q), e.length > 0 && (m = P(e, async () => {
			u.value || await h();
		}));
	};
	return {
		data: k(() => (_(), c.value)),
		get item() {
			return _(), c;
		},
		length: k(() => Array.isArray(c.value) ? c.value.length : c.value ? 1 : 0),
		starting: k(() => c.value === void 0),
		loading: u,
		reading: d,
		isStarting() {
			return c.value === void 0;
		},
		isLoading() {
			return u.value;
		},
		isReading() {
			return d.value;
		},
		getItem() {
			return c.value;
		},
		init: _,
		reset: h,
		stop: g,
		abort: () => f == null ? void 0 : f.abort()
	};
}
var Le = (e) => {
	q || (q = e);
};
//#endregion
//#region src/composables/ref/useApiPost.ts
function Re(e, n, r, i = !0, a, o) {
	return K(e, t.post, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiPut.ts
function ze(e, n, r, i = !0, a, o) {
	return K(e, t.put, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useFormattersRef.ts
function Be(e, t) {
	let n = new s(t);
	return {
		listFormat: k(() => n.setList(e.value).to()),
		length: k(() => n.setList(e.value).length())
	};
}
//#endregion
//#region src/composables/ref/useSearchValueRef.ts
function Ve(e, t) {
	let n = t == null ? M("") : t, r = M(n.value), i = M(!1), a;
	return P(n, (t, o, s) => {
		let c = e.getOptions().getDelay();
		c ? (i.value = !0, a = setTimeout(() => {
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
	let i = new h(void 0, t, void 0, r), { search: a, searchDelay: o, loading: s } = Ve(i, n), c = () => L(_(e)) || [], l = k(() => i.setValue(o.value).getItem().isSearch()), u = k(() => i.setList(c()).setValue(o.value).to());
	return {
		isSearch: l,
		search: a,
		loading: s,
		listSearch: u,
		length: k(() => u.value.length)
	};
}
//#endregion
//#region src/composables/ref/useApiManagementRef.ts
function Ue(e, t, n, r, i, a, o, s) {
	let { path: c, options: l, reactivity: u, conditions: d, transformation: f, typeData: p, unmounted: m, skeleton: h } = e, g, _, y, b, x, S = Ie(c, l, u, d, f, m, s), C = k(() => p === void 0 ? !0 : S.isStarting() ? !1 : te(p) ? p(S.data.value) : S.data.value instanceof p), w = k(() => S.isStarting() && h ? h() : S.data.value);
	if (t && (g = Be(w, t)), n && (_ = He(k(() => {
		var e;
		let t = (e = g == null ? void 0 : g.listFormat.value) == null ? S.data.value : e;
		if (Array.isArray(t)) return t;
	}), n.columns, n.value, n.options)), r || i || a) {
		let e = (e) => {
			o == null || o(), ee(e) && S.reset();
		}, t = (t) => async (n) => {
			te(t) && await v(t(n)), e(n);
		};
		r && (y = Re(r.path, t(r.action), r.transformation, r.toData, r.options)), i && (b = ze(i.path, t(i.action), i.transformation, i.toData, i.options)), a && (x = Pe(a.path, t(a.action), a.transformation, a.toData, a.options));
	}
	return {
		isValid: C,
		list: k(() => {
			if (C.value) {
				if (_ && Array.isArray(S.data.value)) return _.listSearch.value;
				if (g) return g.listFormat.value;
			}
			return w.value;
		}),
		get data() {
			return S.data;
		},
		get length() {
			return _ ? _.length : S.length;
		},
		lengthData: S.length,
		starting: S.starting,
		reading: S.reading,
		loading: S.loading,
		loadingSearch: _ == null ? void 0 : _.loading,
		loadingPost: y == null ? void 0 : y.loading,
		loadingPut: b == null ? void 0 : b.loading,
		loadingDelete: x == null ? void 0 : x.loading,
		isSearch: _ == null ? void 0 : _.isSearch,
		search: _ == null ? void 0 : _.search,
		reset: S.reset,
		abort: S.abort,
		sendPost: async (e) => await (y == null ? void 0 : y.send(e)),
		sendPut: async (e) => await (b == null ? void 0 : b.send(e)),
		sendDelete: async (e) => await (x == null ? void 0 : x.send(e))
	};
}
//#endregion
//#region src/composables/ref/useBroadcastValueRef.ts
function We(e, t) {
	let r = `broadcast--${e}`;
	if (r in J) return J[r];
	let i = M(_(t)), a = new n(r, (e) => {
		i.value !== e.data.message && (i.value = e.data.message);
	});
	return V.run(() => {
		P(i, (e) => a.post({ message: e }));
	}), J[r] = i, i;
}
var J = {};
//#endregion
//#region src/composables/ref/useCookieRef.ts
function Ge(e, t, n) {
	if (e in Y) return Y[e];
	let i = new r(e), a = We(`__cookie:${e}`, i.get(t, n));
	return V.run(() => {
		P(a, (e) => {
			i.set(e, n);
		});
	}), Y[e] = a, a;
}
var Y = {};
//#endregion
//#region src/composables/ref/useGeoIntlRef.ts
function Ke() {
	return new je();
}
//#endregion
//#region src/composables/ref/useHashRef.ts
function qe(e, t) {
	if (e in X) return X[e];
	let n = N(d.get(e, t));
	return V.run(() => {
		P(n, (t) => d.set(e, t));
	}), d.addWatch(e, (e) => {
		n.value = e;
	}), X[e] = n, n;
}
var X = {}, Je = (e = { rootMargin: "128px 0px" }) => {
	let t = {}, n = w() && "IntersectionObserver" in window ? new IntersectionObserver((e) => {
		e.forEach((e) => {
			let n = x(e.target);
			if (n in t) {
				let r = t[n];
				r.status.value = e.isIntersecting, r.ratio.value = e.intersectionRatio, r.entry.value = e;
			}
		});
	}, e) : void 0, r = (e) => {
		if (e) {
			let i = x(e);
			if (i in t) {
				var r;
				n == null || n.unobserve(e), (r = t[i]) == null || r.stopWatch(), delete t[i];
			}
		}
	};
	return {
		intersectionObserver: n,
		getItem(e) {
			return t[x(e)];
		},
		addLazyItem(e) {
			let i = N(!n);
			if (n) {
				let a;
				a = P(e, (o, s) => {
					if (s && r(s), e.value) {
						let r = x(e.value);
						t[r] = {
							status: i,
							ratio: N(0),
							entry: N(void 0),
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
}, Ye = [], Xe = (e) => {
	let t = Ye.find((t) => t.rootMargin === e);
	if (t) return t.item;
	let n = Je({ rootMargin: e });
	return Ye.push({
		rootMargin: e,
		item: n
	}), n;
}, Ze = (e, t) => {
	let n = Xe(t);
	return {
		lazyItemStatus: n.addLazyItem(e),
		get lazyItem() {
			return n.getItem(e.value);
		}
	};
};
//#endregion
//#region src/composables/ref/useLoadingRef.ts
function Qe() {
	let e = N(f.is());
	return f.registrationEvent(({ detail: t }) => {
		e.value = t.loading;
	}), e;
}
//#endregion
//#region src/functions/executeUse.ts
var Z = /* @__PURE__ */ function(e) {
	return e.global = "global", e.provide = "provide", e.local = "local", e;
}({}), $e = () => `__execute_use${et}::${x()}`, et = re(1e5, 999999), Q = [], tt = A();
function $(e, t = Z.provide) {
	let n = $e(), r, i = (t) => {
		let n = Object.freeze(e(...t));
		return {
			...n,
			init() {
				return n;
			}
		};
	}, a = (e) => {
		let t = Object.freeze(i(e));
		return de(n, t), t;
	}, o = (e) => {
		let t = i(e);
		return Object.freeze({
			...t,
			destroyExecute() {
				r = void 0;
			}
		});
	}, s = (...e) => t === Z.provide ? le(n, void 0) || a(e) : (r || (t === Z.local ? tt.run(() => {
		r = o(e);
	}) : r = o(e)), r);
	return t === Z.global && Q.push(s), s;
}
function nt(e) {
	return $(e, Z.global);
}
function rt(e) {
	return $(e, Z.provide);
}
function it(e) {
	return $(e, Z.local);
}
function at() {
	Q.forEach((e) => e()), Q.length = 0;
}
//#endregion
//#region src/composables/ref/useMeta.ts
var ot = nt(() => {
	let e = new p(), t = M(e.getTitle()), n = M(e.getKeywords()), r = M(e.getDescription()), i = M(e.getImage()), a = M(e.getCanonical()), o = M(e.getRobots()), s = M(e.getAuthor()), c = M(e.getSiteName());
	return P(t, () => {
		e.setTitle(t.value);
	}), P(n, () => {
		e.setKeywords(n.value);
	}), P(r, () => {
		e.setDescription(r.value);
	}), P(i, () => {
		e.setImage(i.value);
	}), P(a, () => {
		e.setCanonical(a.value);
	}), P(o, () => {
		e.setRobots(o.value);
	}), P(s, () => {
		e.setAuthor(s.value);
	}), P(c, () => {
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
		getHtmlMeta: () => e.html()
	};
}), st = () => ot(), ct = (e, t, n = !0) => {
	var r;
	let i = j(t) ? t : M(t || ((r = e.value) == null || (r = r[0]) == null ? void 0 : r.value) || ""), a = () => o(i.value), o = (t) => {
		var n;
		return (n = e.value) == null ? void 0 : n.find((e) => e.value === t);
	}, s = (e) => {
		e && e !== i.value && o(e) && (i.value = e, W.push({ name: e }));
	};
	return {
		item: k(() => a()),
		selected: i,
		label: k(() => {
			var e;
			return ((e = a()) == null ? void 0 : e.label) || "";
		}),
		list: k(() => e.value ? y(e.value, (e) => n && !("to" in e) ? {
			...e,
			to: { name: e.value }
		} : e) : []),
		to: s,
		toMain() {
			var t;
			s((t = e.value) == null || (t = t[0]) == null ? void 0 : t.value);
		}
	};
};
//#endregion
//#region src/composables/ref/useSessionRef.ts
function lt(e, t) {
	if (e in ut) return ut[e];
	let n = new i(e, !0), r = M(n.get(t));
	return V.run(() => {
		P(r, (e) => n.set(e));
	}), ut[e] = r, r;
}
var ut = {};
//#endregion
//#region src/composables/ref/useStorageRef.ts
function dt(e, t, n) {
	if (e in ft) return ft[e];
	let r = new i(e), a = M(r.get(t, n));
	return V.run(() => {
		P(a, (e) => r.set(e));
	}), w() && window.addEventListener("storage", () => {
		r.update(), a.value = r.get();
	}), ft[e] = a, a;
}
var ft = {};
//#endregion
//#region src/composables/ref/useTranslateRef.ts
function pt(e, t = g.getItem()) {
	let n = N(t.getListSync(e, !0)), r = async () => {
		n.value = { ...await t.getList(e) };
	};
	P(U.getLanguage(), r);
	for (let e in n.value) if (n.value[e] === e || n.value[e] === " ") {
		r().then();
		break;
	}
	return n;
}
var mt = (e) => pt(e);
//#endregion
//#region src/functions/computedAsync.ts
function ht(e, t, n) {
	let r = M(), i = !0, a = () => {
		i && (i = !1, ge(async () => {
			let n = await v(e);
			n !== t && (r.value = n);
		}));
	};
	return k(() => (a(), r.value), n);
}
//#endregion
//#region src/functions/computedByLanguage.ts
function gt(e, t = () => void 0, n, r) {
	return k(() => {
		if (U.get().value && (n === void 0 || n())) {
			let t = e();
			if (t !== void 0) return t;
		}
		return _(t);
	}, r);
}
//#endregion
//#region src/functions/computedEternity.ts
var _t = A();
function vt(e) {
	return oe((t, n) => {
		let r = M(), i = !1, a = async () => {
			r.value = await v(e), n();
		}, o = () => {
			i || (i = !0, _t.run(() => {
				ge(async () => await a());
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
//#region src/functions/render/getBind.ts
function yt(e, t = {}, n = "value", r = !1) {
	let i = typeof t == "string", a = i ? t : n, o = i ? {} : t;
	return e ? e && T(e) && (a in e || r) ? R(o, e) : R(o, { [a]: e }) : i ? {} : { ...o };
}
//#endregion
//#region src/functions/ref/getBindRef.ts
function bt(e, t = {}, n = "value") {
	return k(() => yt(L(e), L(t), n));
}
//#endregion
//#region src/functions/ref/setRef.ts
function xt(e, t) {
	e.value !== t && (e.value = t);
}
//#endregion
export { Oe as DatetimeRef, be as DesignAbstract, xe as DesignAsyncAbstract, ye as DesignChanged, Ee as DesignComp, z as DesignComponents, De as DesignConstructorAbstract, V as EffectScopeGlobal, ke as EventRef, Z as ExecuteUseType, Ae as GeoFlagRef, je as GeoIntlRef, U as GeoRef, Me as ListDataRef, W as RouterItemRef, Ne as ScrollbarWidthRef, ht as computedAsync, gt as computedByLanguage, vt as computedEternity, $ as executeUse, nt as executeUseGlobal, at as executeUseGlobalInit, it as executeUseLocal, rt as executeUseProvide, yt as getBind, bt as getBindRef, Se as getClassName, Ce as getIndexForRender, G as getOptions, L as getRef, we as render, Le as setApiRefGlobalConditions, xt as setRef, mt as t, R as toBind, Te as toBinds, B as toRefItem, Pe as useApiDelete, Fe as useApiGet, Ue as useApiManagementRef, Re as useApiPost, ze as useApiPut, Ie as useApiRef, K as useApiRequest, We as useBroadcastValueRef, Ge as useCookieRef, Be as useFormattersRef, Ke as useGeoIntlRef, qe as useHashRef, Ze as useLazyItemByMarginRef, Je as useLazyRef, Qe as useLoadingRef, st as useMeta, ct as useRouterList, He as useSearchRef, Ve as useSearchValueRef, lt as useSessionRef, dt as useStorageRef, pt as useTranslateRef };
