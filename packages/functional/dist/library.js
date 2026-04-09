import { Api as e, ApiMethodItem as t, BroadcastMessage as n, Cookie as r, DataStorage as i, Datetime as a, ErrorCenter as o, EventItem as s, Formatters as c, Geo as l, GeoFlag as u, GeoIntl as d, Hash as f, Icons as p, Loading as m, Meta as h, ScrollbarWidth as g, SearchList as _, Translate as v, executeFunction as y, executePromise as b, forEach as x, getColumn as S, getElementId as C, getExp as w, isApiSuccess as ee, isArray as te, isDomRuntime as ne, isFunction as re, isObject as T, isObjectNotArray as E, isSelected as D, isString as O, random as ie, toArray as k, toCamelCase as ae, toDate as oe } from "@dxtmisha/functional-basic";
import { computed as A, customRef as se, effectScope as ce, getCurrentInstance as le, h as ue, inject as de, isRef as j, onUnmounted as fe, provide as pe, ref as M, shallowRef as N, toRefs as me, triggerRef as he, useAttrs as ge, useSlots as _e, watch as P, watchEffect as ve } from "vue";
export * from "@dxtmisha/functional-basic";
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/typeof.js
function F(e) {
	"@babel/helpers - typeof";
	return F = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, F(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/toPrimitive.js
function ye(e, t) {
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
//#region \0@oxc-project+runtime@0.123.0/helpers/toPropertyKey.js
function be(e) {
	var t = ye(e, "string");
	return F(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/defineProperty.js
function I(e, t, n) {
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
		I(this, "cache", {}), this.props = e, this.watch = t;
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
		I(this, "event", {}), I(this, "changed", void 0), this.props = e, this.callback = t, this.changed = new xe(e, n);
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
function L(e) {
	return j(e) ? e.value : e;
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
	if (O(e) && (o += e), n && (o += `.${n}`), i && O(i) && (o += `.${i}`), a && (o += `.${a}`), r && (o += `.${r}`), o !== "") return o;
}
//#endregion
//#region src/functions/ref/render.ts
function Ee(e, t, n, r) {
	let i = t, a = t && "key" in t;
	return (!t || !a) && (i = {
		...t,
		key: Te(e, t, r)
	}), ue(e, i, n);
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
function De(...e) {
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
			e in this.caching || (this.caching[e] = A(() => this.computeModification(e)));
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
		let n = L((t = this.modification) == null ? void 0 : t[e]);
		if (n && E(n)) {
			let e = {};
			return x(n, (t, n) => {
				e[n] = L(t);
			}), e;
		}
		return {};
	}
}, Oe = class extends z {}, ke = class {
	constructor(e, t, n) {
		I(this, "name", void 0), I(this, "element", M()), I(this, "refs", void 0), I(this, "components", void 0), I(this, "emits", void 0), I(this, "classes", void 0), I(this, "classesSub", void 0), I(this, "styles", void 0), I(this, "stylesSub", void 0), I(this, "attrs", void 0), I(this, "slots", void 0), I(this, "dataExpose", void 0), this.props = t, this.options = n, this.name = this.initName(e), this.refs = this.props ? me(this.props) : {}, this.components = new z(n == null ? void 0 : n.components, n == null ? void 0 : n.compMod), this.emits = n == null ? void 0 : n.emits, this.classes = A(() => this.updateClasses()), this.styles = A(() => this.updateStyles()), this.attrs = ge(), this.slots = _e();
	}
	init() {
		return this.classesSub = A(() => this.initClasses()), this.stylesSub = A(() => this.initStyles()), this.dataExpose = this.initExpose(), this;
	}
	getName() {
		return this.name.join("-");
	}
	getDesign() {
		return String(this.name[0]);
	}
	getSubClass(e) {
		return `${this.getName()}__${k(e).join("__")}`;
	}
	getStatusClass(e) {
		return `${this.getName()}--${k(e).join("--")}`;
	}
	getStyle(e) {
		return `--${this.getName()}-sys-${k(e).join("-")}`;
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
		return E(e) ? e : Array.isArray(e) ? { [e.filter((e) => typeof e == "string" && e.trim() !== "").join(" ")]: !0 } : typeof e == "string" ? { [e]: !0 } : {};
	}
	toClassName(e) {
		if (T(e)) {
			let t = {};
			return x(e, (e, n) => {
				n.match(/\?\?/) ? t[n.replace(/\?\?/, this.getName())] = e : n.match(/\?/) ? t[n.replace(/\?/, this.getDesign())] = e : t[n] = e;
			}), t;
		}
		return {};
	}
	initName(e) {
		return x(e.split(".", 2), (e) => ae(e));
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
function B(e) {
	return j(e) ? e : M(e);
}
//#endregion
//#region src/classes/ref/DatetimeRef.ts
var Ae = class {
	constructor(e, t = "date", n = l.getLocation()) {
		I(this, "item", void 0), I(this, "type", void 0), I(this, "code", void 0), I(this, "date", void 0), I(this, "datetime", void 0), I(this, "year", M(2e3)), I(this, "month", M(1)), I(this, "day", M(1)), I(this, "hour", M(1)), I(this, "minute", M(1)), I(this, "second", M(1)), this.item = B(e), this.type = B(t), this.code = B(n), this.date = M(oe(this.item.value)), this.datetime = new a(this.date.value, this.type.value, this.code.value), P(this.item, (e) => {
			this.date.value = oe(e);
		}), P(this.type, (e) => this.datetime.setType(e)), P(this.code, (e) => this.datetime.setCode(e)), P(this.date, (e) => {
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
		return A(() => this.date.value && this.datetime.getHoursType());
	}
	getFirstDayCode() {
		return A(() => this.date.value && this.datetime.getFirstDayCode());
	}
	getYear() {
		return A(() => this.year.value);
	}
	getMonth() {
		return A(() => this.month.value);
	}
	getDay() {
		return A(() => this.day.value);
	}
	getHour() {
		return A(() => this.hour.value);
	}
	getMinute() {
		return A(() => this.minute.value);
	}
	getSecond() {
		return A(() => this.second.value);
	}
	getMaxDay() {
		return A(() => this.date.value && this.datetime.getMaxDay());
	}
	locale(e = this.type.value, t) {
		return A(() => this.date.value && this.datetime.locale(e, t));
	}
	standard(e = !0) {
		return A(() => this.date.value && this.datetime.standard(e));
	}
	updateDate() {
		return this.year.value = this.datetime.getYear(), this.month.value = this.datetime.getMonth(), this.day.value = this.datetime.getDay(), this.hour.value = this.datetime.getHour(), this.minute.value = this.datetime.getMinute(), this.second.value = this.datetime.getSecond(), this;
	}
}, V = class {
	static run(e) {
		return this.getScope().run(e);
	}
	static getScope() {
		return this.scope || (this.scope = ce(!0)), this.scope;
	}
};
I(V, "scope", void 0);
//#endregion
//#region src/classes/ref/EventRef.ts
var je = class extends s {
	constructor(e, t, n = ["click"], r, i, a) {
		let o = B(e), s = B(t);
		super(o.value, n, r, i, a), s.value && this.setElementControl(s.value), P(o, (e) => this.setElement(e)), P(s, (e) => this.setElementControl(e));
	}
}, Me = class {
	constructor(e = l.getLocation()) {
		I(this, "code", void 0), I(this, "flag", void 0), this.code = B(e), this.flag = new u(this.code.value), P(this.code, (e) => this.flag.setCode(e));
	}
	getCode() {
		return this.code;
	}
	get(e = this.code.value) {
		return A(() => this.flag.get(e));
	}
	getFlag(e = this.code.value) {
		return A(() => {
			var t;
			return (t = this.flag.get(e)) == null ? void 0 : t.icon;
		});
	}
	getList(e) {
		return A(() => this.flag.getList(e));
	}
	getNational(e) {
		return A(() => this.flag.getNational(e));
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
		l.set(e, !0), this.item.value = l.getItem();
	}
};
H = U, I(U, "item", N(l.get())), I(U, "country", A(() => H.item.value.country)), I(U, "language", A(() => H.item.value.language)), I(U, "standard", A(() => H.item.value.standard)), I(U, "firstDay", A(() => H.item.value.firstDay));
//#endregion
//#region src/classes/ref/GeoIntlRef.ts
var Ne = class {
	constructor(e) {
		I(this, "location", void 0), I(this, "intl", void 0), this.location = B(e), this.intl = A(() => {
			var e;
			return new d((e = this.location.value) == null ? U.getLanguage().value : e);
		});
	}
	display(e, t) {
		return A(() => this.intl.value.display(L(e), t));
	}
	languageName(e, t) {
		return A(() => this.intl.value.languageName(L(e), t));
	}
	countryName(e, t) {
		return A(() => this.intl.value.countryName(L(e), t));
	}
	number(e, t) {
		return A(() => this.intl.value.number(L(e), t));
	}
	decimal() {
		return A(() => this.intl.value.decimal());
	}
	currency(e, t, n = !1) {
		return A(() => this.intl.value.currency(L(e), L(t), n));
	}
	currencySymbol(e, t = "symbol") {
		return A(() => this.intl.value.currencySymbol(L(e), t));
	}
	unit(e, t) {
		return A(() => this.intl.value.unit(L(e), t));
	}
	sizeFile(e, t = "byte") {
		return A(() => this.intl.value.sizeFile(L(e), t));
	}
	percent(e, t) {
		return A(() => this.intl.value.percent(L(e), t));
	}
	percentBy100(e, t) {
		return A(() => this.intl.value.percentBy100(L(e), t));
	}
	plural(e, t, n, r) {
		return A(() => this.intl.value.plural(L(e), t, n, r));
	}
	date(e, t, n, r) {
		return A(() => this.intl.value.date(L(e), t, n, r));
	}
	relative(e, t, n) {
		return A(() => this.intl.value.relative(L(e), t, n));
	}
	relativeLimit(e, t, n, r, i, a, o) {
		return A(() => this.intl.value.relativeLimit(L(e), t, n, r, i, a, o));
	}
	relativeByValue(e, t, n) {
		return A(() => this.intl.value.relativeByValue(L(e), t, n));
	}
	month(e, t) {
		return A(() => this.intl.value.month(L(e), t));
	}
	months(e) {
		return A(() => this.intl.value.months(e));
	}
	weekday(e, t) {
		return A(() => this.intl.value.weekday(L(e), t));
	}
	weekdays(e) {
		return A(() => this.intl.value.weekdays(e));
	}
	time(e) {
		return A(() => this.intl.value.time(L(e)));
	}
	sort(e, t = (e, t) => [e, t]) {
		return A(() => this.intl.value.sort([...L(e)], t));
	}
}, Pe = class e {
	constructor(e, t, n, r, i, a, o, s, c, l = 0, u = 9999999, d) {
		I(this, "subList", {}), I(this, "data", A(() => x(L(this.list) || [], (e, t) => this.initItem(t, e)))), I(this, "liteData", A(() => {
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
		})), I(this, "fullData", A(() => {
			let e = this.getFocus(), t = this.getHighlight(), n = this.getSelected();
			return x(this.data.value, (r) => {
				var i, a;
				let o = D(r.index, n);
				return {
					...r,
					focus: e === r.index,
					highlight: t,
					filterMode: (i = this.filterMode) == null ? void 0 : i.value,
					selected: o,
					disabled: (a = r.disabled) == null ? !o && r.type === "item" && this.isSelectedMax.value : a
				};
			});
		})), I(this, "map", A(() => {
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
		})), I(this, "mapItems", A(() => this.map.value.filter((e) => e.type === "item"))), I(this, "items", A(() => this.map.value.filter((e) => e.type === "item" || e.type === "group" || e.type === "menu"))), I(this, "highlightFirstItem", A(() => {
			let e = this.getHighlight();
			if (e && e.length >= this.getHighlightLengthStart()) {
				let t = w(e, "i");
				if (t) return this.map.value.findIndex((e) => {
					var n, r, i;
					return ((n = e.label) == null ? void 0 : n.toString().match(t)) || ((r = e.index) == null ? void 0 : r.toString().match(t)) || ((i = e.search) == null ? void 0 : i.toString().match(t));
				});
			}
			return -1;
		})), I(this, "isSelected", A(() => {
			let e = this.getSelected();
			return !!e && this.mapItems.value.findIndex((t) => D(t.index, e)) !== -1;
		})), I(this, "isSelectedMin", A(() => {
			let e = Number(L(this.min) || 0);
			return e > 0 ? this.selectedListInGroup.value.length >= e : !1;
		})), I(this, "isSelectedMax", A(() => {
			let e = Number(L(this.max) || 9999999);
			return e > 0 ? this.selectedListInGroup.value.length >= e : !1;
		})), I(this, "selectedList", A(() => {
			let e = this.getSelected();
			return e && this.isSelected.value ? this.mapItems.value.filter((t) => D(t.index, e)) : [];
		})), I(this, "selectedListInGroup", A(() => {
			let e = this.getSelected();
			return e && this.isSelected.value ? this.data.value.filter((t) => D(t.index, e)) : [];
		})), I(this, "selectedNames", A(() => S(this.selectedList.value, "label"))), I(this, "selectedValues", A(() => S(this.selectedList.value, "value"))), this.list = e, this.focus = t, this.highlight = n, this.highlightLengthStart = r, this.filterMode = i, this.selected = a, this.keyValue = o, this.keyLabel = s, this.lite = c, this.min = l, this.max = u, this.parent = d, j(e) && P(e, () => {
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
		return e && !T(e) ? e : t && !T(t) ? t : n && r;
	}
	initItem(e, t) {
		if (E(t)) {
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
		return E(e) && "name" in e && O(e == null ? void 0 : e.name) ? this.getHref(e.name) : {};
	}
};
I(W, "router", void 0);
//#endregion
//#region src/classes/ref/ScrollbarWidthRef.ts
var Fe = class {
	constructor() {
		I(this, "item", M()), I(this, "width", M(0)), I(this, "is", A(() => this.item.value !== void 0)), g.is().then((e) => {
			this.item.value = e;
		}), g.get().then((e) => {
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
				t = void 0;
			}
			return l.value = !1, t;
		}
	};
}
//#endregion
//#region src/composables/ref/useApiDelete.ts
function Ie(e, n, r, i = !0, a, o) {
	return K(e, t.delete, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiGet.ts
function Le(e, n, r, i = !0, a, o) {
	return K(e, t.get, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiRef.ts
var q;
function Re(t, n, r = !0, i, a, o = !0, s = e.getItem()) {
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
			} catch (e) {
				c.value = void 0;
			}
			u.value = !1;
		} else c.value !== void 0 && (c.value = void 0);
	}, g = () => {
		m == null || m(), c.value = void 0, p = !0;
	}, _ = () => {
		p && (p = !1, h().then(), o ? (v(), le() && fe(() => g())) : V.run(() => v()));
	}, v = () => {
		let e = [];
		r && e.push(l), j(t) && e.push(t), i && e.push(i), q && e.push(q), e.length > 0 && (m = P(e, async () => {
			u.value || await h();
		}));
	};
	return {
		data: A(() => (_(), c.value)),
		get item() {
			return _(), c;
		},
		length: A(() => Array.isArray(c.value) ? c.value.length : +!!c.value),
		starting: A(() => c.value === void 0),
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
var ze = (e) => {
	q || (q = e);
};
//#endregion
//#region src/composables/ref/useApiPost.ts
function Be(e, n, r, i = !0, a, o) {
	return K(e, t.post, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useApiPut.ts
function Ve(e, n, r, i = !0, a, o) {
	return K(e, t.put, n, r, i, a, o);
}
//#endregion
//#region src/composables/ref/useFormattersRef.ts
function He(e, t) {
	let n = new c(t);
	return {
		listFormat: A(() => n.setList(e.value).to()),
		length: A(() => n.setList(e.value).length())
	};
}
//#endregion
//#region src/composables/ref/useSearchValueRef.ts
function Ue(e, t) {
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
function We(e, t, n, r) {
	let i = new _(void 0, t, void 0, r), { search: a, searchDelay: o, loading: s } = Ue(i, n), c = () => L(y(e)) || [], l = A(() => i.setValue(o.value).getItem().isSearch()), u = A(() => i.setList(c()).setValue(o.value).to());
	return {
		isSearch: l,
		search: a,
		loading: s,
		listSearch: u,
		length: A(() => u.value.length)
	};
}
//#endregion
//#region src/composables/ref/useApiManagementRef.ts
function Ge(e, t, n, r, i, a, o, s) {
	let { path: c, options: l, reactivity: u, conditions: d, transformation: f, typeData: p, unmounted: m, skeleton: h } = e, g, _, v, y, x, S = Re(c, l, u, d, f, m, s), C = A(() => p === void 0 ? !0 : S.isStarting() ? !1 : re(p) ? p(S.data.value) : S.data.value instanceof p), w = A(() => S.isStarting() && h ? h() : S.data.value);
	if (t && (g = He(w, t)), n && (_ = We(A(() => {
		var e;
		let t = (e = g == null ? void 0 : g.listFormat.value) == null ? S.data.value : e;
		if (Array.isArray(t)) return t;
	}), n.columns, n.value, n.options)), r || i || a) {
		let e = (e) => {
			o == null || o(), ee(e) && S.reset();
		}, t = (t) => async (n) => {
			re(t) && await b(t(n)), e(n);
		};
		r && (v = Be(r.path, t(r.action), r.transformation, r.toData, r.options, s)), i && (y = Ve(i.path, t(i.action), i.transformation, i.toData, i.options, s)), a && (x = Ie(a.path, t(a.action), a.transformation, a.toData, a.options, s));
	}
	return {
		isValid: C,
		list: A(() => {
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
		loadingPost: v == null ? void 0 : v.loading,
		loadingPut: y == null ? void 0 : y.loading,
		loadingDelete: x == null ? void 0 : x.loading,
		isSearch: _ == null ? void 0 : _.isSearch,
		search: _ == null ? void 0 : _.search,
		reset: S.reset,
		abort: S.abort,
		sendPost: async (e) => await (v == null ? void 0 : v.send(e)),
		sendPut: async (e) => await (y == null ? void 0 : y.send(e)),
		sendDelete: async (e) => await (x == null ? void 0 : x.send(e))
	};
}
//#endregion
//#region src/composables/ref/useBroadcastValueRef.ts
function Ke(e, t) {
	let r = `broadcast--${e}`;
	if (r in J) return J[r];
	let i = M(y(t)), a = new n(r, (e) => {
		i.value !== e.data.message && (i.value = e.data.message);
	});
	return V.run(() => {
		P(i, (e) => a.post({ message: e }));
	}), J[r] = i, i;
}
var J = {};
//#endregion
//#region src/composables/ref/useCookieRef.ts
function qe(e, t, n) {
	if (e in Y) return Y[e];
	let i = new r(e), a = Ke(`__cookie:${e}`, i.get(t, n));
	return V.run(() => {
		P(a, (e) => {
			i.set(e, n);
		});
	}), Y[e] = a, a;
}
var Y = {};
//#endregion
//#region src/composables/ref/useGeoIntlRef.ts
function Je() {
	return new Ne();
}
//#endregion
//#region src/composables/ref/useHashRef.ts
function Ye(e, t) {
	if (e in X) return X[e];
	let n = N(f.get(e, t));
	return V.run(() => {
		P(n, (t) => f.set(e, t));
	}), f.addWatch(e, (e) => {
		n.value = e;
	}), X[e] = n, n;
}
var X = {}, Xe = (e = { rootMargin: "128px 0px" }) => {
	let t = {}, n = ne() && "IntersectionObserver" in window ? new IntersectionObserver((e) => {
		e.forEach((e) => {
			let n = C(e.target);
			if (n in t) {
				let r = t[n];
				r.status.value = e.isIntersecting, r.ratio.value = e.intersectionRatio, r.entry.value = e;
			}
		});
	}, e) : void 0, r = (e) => {
		if (e) {
			let i = C(e);
			if (i in t) {
				var r;
				n == null || n.unobserve(e), (r = t[i]) == null || r.stopWatch(), delete t[i];
			}
		}
	};
	return {
		intersectionObserver: n,
		getItem(e) {
			return t[C(e)];
		},
		addLazyItem(e) {
			let i = N(!n);
			if (n) {
				let a;
				a = P(e, (o, s) => {
					if (s && r(s), e.value) {
						let r = C(e.value);
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
}, Ze = [], Qe = (e) => {
	let t = Ze.find((t) => t.rootMargin === e);
	if (t) return t.item;
	let n = Xe({ rootMargin: e });
	return Ze.push({
		rootMargin: e,
		item: n
	}), n;
}, $e = (e, t) => {
	let n = Qe(t);
	return {
		lazyItemStatus: n.addLazyItem(e),
		get lazyItem() {
			return n.getItem(e.value);
		}
	};
};
//#endregion
//#region src/composables/ref/useLoadingRef.ts
function et() {
	let e = N(m.is());
	return m.registrationEvent(({ detail: t }) => {
		e.value = t.loading;
	}), e;
}
//#endregion
//#region src/functions/executeUse.ts
var Z = /* @__PURE__ */ function(e) {
	return e.global = "global", e.provide = "provide", e.local = "local", e;
}({}), tt = () => `__execute_use${nt}::${C()}`, nt = ie(1e5, 999999), Q = [], rt = ce();
function $(e, t = Z.provide) {
	let n = tt(), r, i = (t) => {
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
	}, s = (...e) => t === Z.provide ? de(n, void 0) || a(e) : (r || (t === Z.local ? rt.run(() => {
		r = o(e);
	}) : r = o(e)), r);
	return t === Z.global && Q.push(s), s;
}
function it(e) {
	return $(e, Z.global);
}
function at(e) {
	return $(e, Z.provide);
}
function ot(e) {
	return $(e, Z.local);
}
function st() {
	Q.forEach((e) => e()), Q.length = 0;
}
//#endregion
//#region src/composables/ref/useMeta.ts
var ct = it(() => {
	let e = new h(), t = M(e.getTitle()), n = M(e.getKeywords()), r = M(e.getDescription()), i = M(e.getImage()), a = M(e.getCanonical()), o = M(e.getRobots()), s = M(e.getAuthor()), c = M(e.getSiteName());
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
		getHtmlMeta: () => e.html(),
		setSuffix: (t) => e.setSuffix(t)
	};
}), lt = () => ct(), ut = (e, t, n = !0) => {
	var r;
	let i = j(t) ? t : M(t || ((r = e.value) == null || (r = r[0]) == null ? void 0 : r.value) || ""), a = () => o(i.value), o = (t) => {
		var n;
		return (n = e.value) == null ? void 0 : n.find((e) => e.value === t);
	}, s = (e) => {
		e && e !== i.value && o(e) && (i.value = e, W.push({ name: e }));
	};
	return {
		item: A(() => a()),
		selected: i,
		label: A(() => {
			var e;
			return ((e = a()) == null ? void 0 : e.label) || "";
		}),
		list: A(() => e.value ? x(e.value, (e) => n && !("to" in e) ? {
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
function dt(e, t) {
	if (e in ft) return ft[e];
	let n = new i(e, !0), r = M(n.get(t));
	return V.run(() => {
		P(r, (e) => n.set(e));
	}), ft[e] = r, r;
}
var ft = {};
//#endregion
//#region src/composables/ref/useStorageRef.ts
function pt(e, t, n) {
	if (e in mt) return mt[e];
	let r = new i(e), a = M(r.get(t, n));
	return V.run(() => {
		P(a, (e) => r.set(e));
	}), ne() && window.addEventListener("storage", () => {
		r.update(), a.value = r.get();
	}), mt[e] = a, a;
}
var mt = {};
//#endregion
//#region src/composables/ref/useTranslateRef.ts
function ht(e, t = v.getItem()) {
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
var gt = (e) => ht(e);
//#endregion
//#region src/functions/computedAsync.ts
function _t(e, t, n) {
	let r = M(), i = !0, a = () => {
		i && (i = !1, ve(async () => {
			let n = await b(e);
			n !== t && (r.value = n);
		}));
	};
	return A(() => (a(), r.value), n);
}
//#endregion
//#region src/functions/computedByLanguage.ts
function vt(e, t = () => void 0, n, r) {
	return A(() => {
		if (U.get().value && (n === void 0 || n())) {
			let t = e();
			if (t !== void 0) return t;
		}
		return y(t);
	}, r);
}
//#endregion
//#region src/functions/computedEternity.ts
var yt = ce();
function bt(e) {
	return se((t, n) => {
		let r = M(), i = !1, a = async () => {
			r.value = await b(e), n();
		}, o = () => {
			i || (i = !0, yt.run(() => {
				ve(async () => await a());
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
var xt = { install(t, n = {}) {
	if (n.api && e.setConfig(n.api), n.translate && v.setConfig(n.translate), n.icons && p.setConfig(n.icons), n.metaSuffix && lt().setSuffix(n.metaSuffix), n.router) W.set(n.router);
	else {
		let e = t.config.globalProperties.$router;
		e && W.set(e);
	}
	n.errorCauses && o.addList(n.errorCauses), st();
} };
//#endregion
//#region src/functions/render/getBind.ts
function St(e, t = {}, n = "value", r = !1) {
	let i = typeof t == "string", a = i ? t : n, o = i ? {} : t;
	return e ? e && E(e) && (a in e || r) ? R(o, e) : R(o, { [a]: e }) : i ? {} : { ...o };
}
//#endregion
//#region src/functions/ref/getBindRef.ts
function Ct(e, t = {}, n = "value") {
	return A(() => St(L(e), L(t), n));
}
//#endregion
//#region src/functions/ref/setRef.ts
function wt(e, t) {
	e.value !== t && (e.value = t);
}
//#endregion
export { Ae as DatetimeRef, Se as DesignAbstract, Ce as DesignAsyncAbstract, xe as DesignChanged, Oe as DesignComp, z as DesignComponents, ke as DesignConstructorAbstract, V as EffectScopeGlobal, je as EventRef, Z as ExecuteUseType, Me as GeoFlagRef, Ne as GeoIntlRef, U as GeoRef, Pe as ListDataRef, W as RouterItemRef, Fe as ScrollbarWidthRef, _t as computedAsync, vt as computedByLanguage, bt as computedEternity, xt as dxtFunctionalPlugin, $ as executeUse, it as executeUseGlobal, st as executeUseGlobalInit, ot as executeUseLocal, at as executeUseProvide, St as getBind, Ct as getBindRef, we as getClassName, Te as getIndexForRender, G as getOptions, L as getRef, Ee as render, ze as setApiRefGlobalConditions, wt as setRef, gt as t, R as toBind, De as toBinds, B as toRefItem, Ie as useApiDelete, Le as useApiGet, Ge as useApiManagementRef, Be as useApiPost, Ve as useApiPut, Re as useApiRef, K as useApiRequest, Ke as useBroadcastValueRef, qe as useCookieRef, He as useFormattersRef, Je as useGeoIntlRef, Ye as useHashRef, $e as useLazyItemByMarginRef, Xe as useLazyRef, et as useLoadingRef, lt as useMeta, ut as useRouterList, We as useSearchRef, Ue as useSearchValueRef, dt as useSessionRef, pt as useStorageRef, ht as useTranslateRef };
