import { t as e } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t } from "./FieldInputCheckInclude-CjNYyGTb-B0hPIzTB.js";
import { computed as n, createBlock as r, defineComponent as i, h as a, mergeDefaults as o, openBlock as s, ref as c, unref as l, watch as u } from "vue";
import { Datetime as d, DesignConstructorAbstract as f, GeoIntl as p, GeoRef as m, anyToString as h, eventStopPropagation as g, forEach as _, getClipboardData as v, getColumn as y, getExp as b, getMaxLengthAllArray as x, inArray as S, isArray as C, isFilled as w, isFloat as T, isObject as E, isObjectNotArray as D, isSelected as O, isString as k, replaceRecursive as A, strFill as j, toArray as M, toBinds as N, writeClipboardData as P } from "@dxtmisha/functional";
//#region ../constructor/dist/mask.js
var F = Object.defineProperty, I = (e, t, n) => t in e ? F(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, L = (e, t, n) => I(e, typeof t == "symbol" ? t : t + "", n), R = class {
	constructor(e) {
		L(this, "item", n(() => {
			var e;
			return (e = this.props.type) == null ? "text" : e;
		})), this.props = e;
	}
	isNumber() {
		return this.item.value === "number";
	}
	isNumberFormat() {
		return this.item.value === "number-format";
	}
	isCurrency() {
		return this.item.value === "currency";
	}
	isCurrencyOrNumber() {
		return this.isNumber() || this.isNumberFormat() || this.isCurrency();
	}
	isTime() {
		return [
			"full",
			"datetime",
			"time",
			"hour-minute",
			"hour",
			"minute",
			"second"
		].indexOf(this.item.value) !== -1;
	}
	isDate() {
		return this.isTime() || [
			"date",
			"year",
			"year-month",
			"month",
			"day",
			"day-month"
		].indexOf(this.item.value) !== -1;
	}
	getByDate() {
		return this.isDate() ? this.item.value : "date";
	}
}, ee = class {
	constructor() {
		L(this, "chars", []), L(this, "start", !1);
	}
	is() {
		return this.chars.length > 0;
	}
	get() {
		return this.chars;
	}
	add(e) {
		return this.chars.push(e), this;
	}
	go(e) {
		return this.start ? (this.add(e), !1) : (this.goStart(), !0);
	}
	goStart() {
		return this.start = !0, this;
	}
	reset() {
		return this.resetChars(), this.start = !1, this;
	}
	resetChars() {
		return this.chars = [], this;
	}
}, te = class {
	constructor(e) {
		L(this, "value", !1), this.buffer = e;
	}
	is() {
		return this.value;
	}
	in() {
		this.value = !0, this.buffer.reset();
	}
	out() {
		this.value = !1, this.buffer.reset();
	}
}, z = class {
	constructor() {
		L(this, "length", c(0));
	}
	is() {
		return this.length.value > 0;
	}
	get() {
		return this.length.value;
	}
	set(e) {
		return this.length.value = e, this;
	}
}, B = class {
	constructor() {
		L(this, "item", c({}));
	}
	is(e) {
		var t;
		return Number((t = this.item.value) == null ? void 0 : t[e]) > 0;
	}
	getByIndex(e) {
		var t, n;
		return (n = (t = this.item.value) == null ? void 0 : t[e]) == null ? 0 : n;
	}
	add(e) {
		return this.item.value = {
			...this.item.value,
			[e]: this.getByIndex(e) + 1
		}, this;
	}
	pop(e) {
		return this.is(e) ? (this.item.value = {
			...this.item.value,
			[e]: this.getByIndex(e) - 1
		}, !0) : !1;
	}
	reset() {
		return this.item.value = {}, this;
	}
	expandMask(e) {
		let t = e;
		return _(this.item.value, (e, n) => {
			t = t.replace(b(n, "g", "([:value]+)"), (t) => `${t}${j(n, e)}`);
		}), t;
	}
}, V = class {
	constructor() {
		L(this, "item", c(""));
	}
	is() {
		return this.item.value !== "";
	}
	isChar(e) {
		return this.item.value === e;
	}
	set(e) {
		return this.item.value = e, this;
	}
	reset() {
		return this.set("");
	}
}, H = {
	Y: "[0-9]{4}",
	M: {
		type: "number",
		min: "1",
		max: "12"
	},
	D: (e) => {
		var t, n, r, i;
		return {
			type: "number",
			min: "1",
			max: new d(`${(n = (t = e == null ? void 0 : e.Y) == null ? void 0 : t.value) == null ? "2000" : n}-${(i = (r = e == null ? void 0 : e.M) == null ? void 0 : r.value) == null ? "01" : i}-01`).getMaxDay().toString()
		};
	},
	h: {
		type: "number",
		min: "0",
		max: "23"
	},
	m: {
		type: "number",
		min: "0",
		max: "59"
	},
	s: {
		type: "number",
		min: "0",
		max: "59"
	}
}, U = {
	Y: "y",
	M: "m",
	D: "d",
	h: "h",
	m: "m",
	s: "s"
}, W = class {
	constructor(e, t) {
		L(this, "mask", n(() => this.getDatetime().setHour24(!0).locale(void 0, "2-digit").replace("1987", "YYYY").replace("12", "MM").replace("18", "DD").replace("10", "hh").replace("20", "mm").replace("30", "ss").split(""))), this.props = e, this.type = t;
	}
	getDatetime(e) {
		return new d(e == null ? "1987-12-18T10:20:30" : e, this.type.getByDate(), this.props.language);
	}
	getValue(e) {
		return this.getDatetime(e).locale(void 0, "2-digit");
	}
	getValueStandard(e) {
		let t = this.getValueStandardFull(e);
		return t === "" ? "" : this.getDatetime(t).standard(!1);
	}
	getValueStandardFull(e) {
		var t, n, r, i, a, o;
		let s = `${((t = e == null ? void 0 : e.Y) == null ? void 0 : t.value) || "2000"}-${((n = e == null ? void 0 : e.M) == null ? void 0 : n.value) || "01"}-${((r = e == null ? void 0 : e.D) == null ? void 0 : r.value) || "01"}T${((i = e == null ? void 0 : e.h) == null ? void 0 : i.value) || "00"}:${((a = e == null ? void 0 : e.m) == null ? void 0 : a.value) || "00"}:${((o = e == null ? void 0 : e.s) == null ? void 0 : o.value) || "00"}`;
		return isNaN(Date.parse(s)) ? "" : s;
	}
	getPattern() {
		return H;
	}
	getSpecialDate() {
		return [
			"Y",
			"M",
			"D"
		];
	}
	getSpecialFull() {
		return [
			...this.getSpecialDate(),
			"h",
			"m",
			"s"
		];
	}
	getView(e) {
		return U == null ? void 0 : U[e];
	}
}, G = class {
	constructor(e, t, r) {
		L(this, "special", {
			n: {},
			f: { defaultValue: "0" }
		}), L(this, "rubber", n(() => ({
			n: {
				rubber: !0,
				transitionChar: this.getDecimal(),
				maxLength: 10
			},
			f: {
				rubber: this.isFractionRubber(),
				maxLength: 4
			}
		}))), L(this, "view", n(() => this.type.isNumber() ? "⁠" : "0")), L(this, "fraction", n(() => {
			if (this.type.isCurrency()) return 2;
			let e = this.props.fraction;
			return typeof e == "number" ? e : typeof e == "string" && e.match(/[0-9]+/) ? Number(e) : this.rubberItem.is("f") ? this.rubberItem.getByIndex("f") + 1 : e === !0 ? 1 : 0;
		})), L(this, "mask", n(() => this.type.isCurrency() ? this.toSpecial(this.getCurrency()) : this.type.isNumberFormat() ? this.toSpecial(this.getNumberFormat()) : this.toSpecial(this.getNumber()))), this.props = e, this.type = t, this.rubberItem = r;
	}
	isFractionRubber() {
		return this.props.fraction === !0;
	}
	getValueStandard(e) {
		var t, n, r;
		if (this.type.isNumber()) return ((t = e == null ? void 0 : e.n) == null ? void 0 : t.value) || "";
		let i = `${((n = e == null ? void 0 : e.n) == null ? void 0 : n.value) || "0"}.${((r = e == null ? void 0 : e.f) == null ? void 0 : r.value) || "0"}`;
		return i === "0.0" ? "0" : i;
	}
	getNumber() {
		return this.getNumberForString();
	}
	getNumberFormat() {
		return this.getIntl().number(this.getNumberForString(), { maximumFractionDigits: 9 });
	}
	getCurrency() {
		return this.getIntl().currency(this.getNumberForString(), void 0, this.props.currencyHide);
	}
	getDecimal() {
		return [this.getIntl().decimal(), "."];
	}
	getSpecial() {
		return Object.keys(this.special);
	}
	getIntl() {
		return new p(this.props.language);
	}
	getNumberForString() {
		let e = this.fraction.value;
		return `${j("9", this.rubberItem.getByIndex("n") + 1)}${e ? `.${j("3", e)}` : ""}${this.type.isCurrency() && this.props.currency ? ` ${this.props.currency}` : ""}`;
	}
	toSpecial(e) {
		return e.replace(/9/gi, "n").replace(/3/gi, "f").split("");
	}
}, K = class {
	constructor(e, t, r, i) {
		L(this, "item", n(() => {
			if (this.type.isCurrencyOrNumber()) return this.format.getSpecial();
			if (this.type.isTime()) return this.date.getSpecialFull();
			if (this.type.isDate()) return this.date.getSpecialDate();
			let e = this.special.value;
			return C(e) ? e : E(e) ? Object.keys(e) : [e];
		})), L(this, "rubberList", n(() => {
			let e = {};
			return D(this.special.value) && _(this.special.value, (t, n) => {
				t != null && t.rubber && (e[n] = t);
			}), e;
		})), L(this, "special", n(() => {
			var e;
			return this.type.isCurrencyOrNumber() ? this.format.special : (e = this.props.special) == null ? "*" : e;
		})), this.props = e, this.type = t, this.date = r, this.format = i;
	}
	isSpecial(e) {
		return this.item.value.indexOf(e) !== -1;
	}
	isDefault(e) {
		return !!this.getDefault(e);
	}
	getDefault(e) {
		var t;
		return (t = this.getSpecialItem(e)) == null ? void 0 : t.defaultValue;
	}
	getMatch(e) {
		var t;
		return (t = this.getSpecialItem(e)) == null ? void 0 : t.match;
	}
	getPattern(e) {
		var t;
		return (t = this.getSpecialItem(e)) == null ? void 0 : t.pattern;
	}
	getView(e) {
		var t;
		return (t = this.getSpecialItem(e)) == null ? void 0 : t.view;
	}
	getSpecialItem(e) {
		let t = this.special.value;
		if (D(t) && e in t) return t[e];
	}
}, q = /[0-9]/, J = class {
	constructor(e, t) {
		this.props = e, this.special = t;
	}
	is(e, t) {
		let n = this.get(t);
		return n instanceof RegExp ? !!e.match(n) : k(n) ? !!e.match(new RegExp(n)) : !!e.match(q);
	}
	get(e) {
		var t, n;
		return (n = (t = e && this.special.getMatch(e)) == null ? this.props.match : t) == null ? q : n;
	}
	filter(e) {
		let t = this.special.item.value;
		return e.split("").filter((e) => t.find((t) => this.is(e, t)));
	}
}, Y = class {
	constructor(e, r, i, a) {
		L(this, "item", n(() => {
			let e = {};
			return _(this.list.value, (n, r) => {
				e[r] = new t(n, r);
			}), this.props.check && (e.check = new t(this.props.check)), e;
		})), L(this, "list", n(() => {
			let e = this.getByType();
			for (let t in e) {
				let n = this.getPattern(t);
				e[t] && (k(n) ? Object.assign(e[t], { pattern: n }) : D(n) && D(e[t]) && Object.assign(e[t], n));
			}
			return e;
		})), this.props = e, this.type = r, this.date = i, this.special = a;
	}
	isCheck() {
		return !!this.props.check;
	}
	getInput(e = t.getGroupDefault()) {
		var n;
		return (n = this.item.value) == null ? void 0 : n[e];
	}
	getByType() {
		if (this.type.isDate()) return this.date.getPattern();
		let e = {};
		return this.special.item.value.forEach((t) => {
			e[t] = {};
		}), e;
	}
	getPattern(e) {
		var t;
		return (t = e && this.special.getPattern(e)) == null ? this.props.pattern : t;
	}
}, X = {
	special: "*",
	match: /[0-9]/,
	type: "text",
	groupSave: !0,
	view: "_",
	visible: !0
}, Z = class {
	constructor(e, t) {
		this.props = e, this.type = t;
	}
	isEnd() {
		return this.props.align !== "left" && (this.props.dir === "rtl" || this.type.isCurrency() && !this.props.currencyHide || this.type.isNumberFormat());
	}
	isRight() {
		return this.props.align === "right" || this.isEnd();
	}
}, ne = class {
	constructor(e, t, r, i, a, o, s) {
		L(this, "list", n(() => {
			let e = this.special.rubberList.value;
			return this.type.isCurrencyOrNumber() ? A(this.format.rubber.value, e) : e;
		})), L(this, "transition", n(() => y(Object.values(this.list.value).filter((e) => "transitionChar" in e && (k(e.transitionChar) || C(e.transitionChar))), "transitionChar").flat())), this.props = e, this.type = t, this.rubberItem = r, this.rubberTransition = i, this.special = a, this.match = o, this.format = s;
	}
	isTransition(e) {
		return this.transition.value.indexOf(e) >= 0;
	}
	get(e) {
		var t;
		return (t = this.list.value) == null ? void 0 : t[e];
	}
	update(e, t, n) {
		let r = this.get(t), i = e == null ? void 0 : e[t];
		return r && i ? O(n, r == null ? void 0 : r.transitionChar) || r != null && r.maxLength && (r == null ? void 0 : r.maxLength) <= (i == null ? void 0 : i.chars.length) ? (this.rubberTransition.set(t), !1) : (i.end && this.match.is(n, t) && !this.rubberTransition.isChar(t) && (this.rubberItem.add(t), this.rubberTransition.reset()), !0) : !1;
	}
	pop(e) {
		return this.rubberItem.pop(e);
	}
	reset() {
		return this.rubberItem.reset(), this.rubberTransition.reset(), this;
	}
}, re = class {
	constructor(e, t, r, i, a, o, s) {
		L(this, "item", n(() => this.type.isCurrencyOrNumber() ? this.format.mask.value : this.type.isDate() ? this.date.mask.value : this.basic.value)), L(this, "info", n(() => {
			let e = [], t = 0;
			return this.item.value.forEach((n, r) => {
				this.special.isSpecial(n) && (e.push({
					index: t,
					key: r,
					char: n
				}), t++);
			}), e;
		})), L(this, "maxLength", n(() => {
			let e = this.getMask();
			return C(e) ? x(e) : this.item.value.length;
		})), L(this, "maskActive", n(() => {
			let e = this.getMask();
			return C(e) ? e.find((e) => this.getSpecialLength(e) >= this.characterLength.get()) || (e == null ? void 0 : e[e.length - 1]) || "" : e;
		})), L(this, "basic", n(() => this.rubberItem.expandMask(this.maskActive.value).split(""))), this.props = e, this.type = t, this.rubberItem = r, this.characterLength = i, this.date = a, this.format = o, this.special = s;
	}
	get(e) {
		var t, n;
		return (n = (t = this.item.value) == null ? void 0 : t[e]) == null ? "" : n;
	}
	getByChar(e, t = -1) {
		let n = t;
		return this.item.value.forEach((r, i) => {
			r === e && i >= t && (n = i);
		}), n;
	}
	getLength() {
		return this.item.value.length;
	}
	getLengthBySpecial() {
		return this.info.value.length;
	}
	getQuantity(e, t) {
		if (e === t) return 1;
		let n = 0;
		for (let r = e; r < t; r++) this.special.isSpecial(this.get(r)) && n++;
		return n;
	}
	getMask() {
		var e;
		return (e = this.props.mask) == null ? "" : e;
	}
	getSpecialLength(e) {
		return e.split("").filter((e) => this.special.isSpecial(e)).length;
	}
}, ie = class {
	constructor(e, t) {
		L(this, "value", 0), L(this, "immediate", 0), L(this, "shift", !1), this.special = e, this.mask = t;
	}
	get() {
		return this.value;
	}
	getFirst() {
		var e, t, n;
		return (n = (t = (e = this.mask.info.value) == null ? void 0 : e[0]) == null ? void 0 : t.key) == null ? 0 : n;
	}
	getFocus() {
		return this.getCharacter(this.value);
	}
	getNext() {
		return this.getCharacter(this.value + 1);
	}
	getPrevious() {
		return this.getCharacter(this.value - 1);
	}
	getImmediate() {
		return this.getCharacter(this.immediate);
	}
	getShift() {
		return this.shift ? this.value > 0 ? this.getCharacter(this.value - 1) + 1 : 0 : this.getFocus();
	}
	set(e) {
		return this.value = e, this;
	}
	setByMask(e, t = !0) {
		if (t) {
			let t, n;
			this.mask.info.value.forEach((r) => {
				t === void 0 && r.key >= e && (t = r.index), r.key <= e && (n = r.index);
			}), this.set(t === void 0 ? this.mask.getLengthBySpecial() : t), this.setImmediate(n === void 0 ? this.mask.getLengthBySpecial() : n);
		}
		return this;
	}
	setImmediate(e) {
		return this.immediate = e, this;
	}
	setShift(e) {
		return this.shift = e, this;
	}
	resetImmediate() {
		return this.immediate = this.value <= 0 ? 0 : this.value - 1, this;
	}
	goBack() {
		return this.value > 0 && this.value--, this;
	}
	goNext() {
		return this.value <= this.mask.getLength() && this.value++, this;
	}
	getCharacter(e) {
		for (let t of this.mask.info.value) if (t.index >= e) return t.key;
		return this.mask.getLength();
	}
}, ae = class {
	constructor(e, t, n, r, i, a) {
		L(this, "item", c([])), this.props = e, this.rubberItem = t, this.characterLength = n, this.special = r, this.mask = i, this.selection = a;
	}
	is() {
		return this.item.value.length > 0;
	}
	isCharDelete() {
		let e = this.selection.get();
		return e in this.item.value && this.item.value[e] === "~";
	}
	getFocus() {
		return this.mask.get(this.selection.getFocus());
	}
	getImmediate() {
		return this.mask.get(this.selection.getImmediate());
	}
	getNext() {
		return this.mask.get(this.selection.getNext());
	}
	add(e) {
		return this.item.value.splice(this.selection.get(), this.isCharDelete() ? 1 : 0, e), this.selection.goNext().resetImmediate(), this.updateLength(), this;
	}
	pop() {
		let e = this.selection.get() - 1;
		return this.isSpecialNextAnother() ? this.item.value[e] = "~" : (this.item.value.splice(e, 1), this.updateLength()), this.selection.goBack().resetImmediate(), this;
	}
	reset() {
		return this.item.value = [], this.selection.set(0).resetImmediate(), this.updateLength(), this;
	}
	shift(e = 1) {
		return this.characterLength.set(this.item.value.length + e), this;
	}
	isSpecialNextAnother() {
		var e, t;
		let n = this.selection.get() - 1, r = this.item.value.length;
		if (this.props.groupSave && n >= 0 && n <= r) {
			let i = this.mask.info.value, a = (e = i == null ? void 0 : i[n]) == null ? void 0 : e.char;
			if (a && !this.rubberItem.is(a)) {
				for (let e = n; e < r; e++) if (i != null && i[e]) {
					let n = (t = i[e]) == null ? void 0 : t.char;
					if (n && this.special.isSpecial(n) && a !== n) return !0;
				}
			}
		}
		return !1;
	}
	updateLength() {
		return this.characterLength.set(this.item.value.length), this;
	}
}, oe = class {
	constructor(e, t, r, i) {
		L(this, "item", n(() => {
			let e = this.character.item.value, t = [], n = 0;
			for (let r of this.mask.item.value) if (!this.special.isSpecial(r)) t.push(r);
			else if (n in e) {
				if (t.push(String(e[n++])), n > e.length && this.rubberTransition.is() && !this.rubberTransition.isChar(r)) break;
			} else break;
			return t.join("");
		})), this.rubberTransition = e, this.mask = t, this.special = r, this.character = i;
	}
	is() {
		return this.getLength() > 0;
	}
	getChar(e) {
		var t;
		return (t = this.item.value) == null ? void 0 : t[e];
	}
	getLength() {
		return this.item.value.length;
	}
}, se = class {
	constructor(e, t, r, i, a, o, s) {
		L(this, "infoCache"), L(this, "info", n(() => {
			let e = this.valueBasic.item.value, t = {};
			return this.mask.item.value.forEach((n, r) => {
				if (this.special.isSpecial(n)) {
					let i = this.add(t, n);
					this.isStandard(r) && e[r] !== "~" && i.chars.push(String(e[r])), i.maxLength++, i.end = i.maxLength === i.chars.length, i.full = this.special.isDefault(n) || i.end, i.value = i.full ? i.chars.join("") : "";
				}
			}), t;
		})), L(this, "item", n(() => this.getValue(this.info.value))), L(this, "isFull", n(() => {
			for (let e of Object.values(this.info.value)) if (!e.full) return !1;
			return !0;
		})), L(this, "isEnd", n(() => {
			for (let e of Object.values(this.info.value)) if (!e.end) return !1;
			return !0;
		})), L(this, "valueFinal", n(() => {
			let e = this.valueBasic.item.value.split(""), t = this.mask.item.value, n = "";
			for (let r in t) if (r in e) n += e[r];
			else if (t[r]) {
				let e = this.special.getDefault(t[r]);
				e && (n += e);
			}
			return n;
		})), this.props = e, this.type = t, this.date = r, this.format = i, this.mask = a, this.special = o, this.valueBasic = s, u(this.info, (e, t) => {
			this.type.isDate() && (this.infoCache = t);
		});
	}
	getValueCache() {
		return this.infoCache ? this.getValue(this.infoCache) : this.item.value;
	}
	getForCheck() {
		let e = this.item.value;
		return {
			group: t.getGroupDefault(),
			value: e,
			maxLength: e.length,
			full: this.isFull.value,
			end: this.isEnd.value,
			chars: e.split("")
		};
	}
	getInfoItem(e) {
		var t;
		return (t = this.info.value) == null ? void 0 : t[e];
	}
	isStandard(e) {
		return !!this.valueBasic.getChar(e);
	}
	getValue(e) {
		return this.type.isCurrencyOrNumber() ? this.format.getValueStandard(e) : this.type.isDate() ? this.isFull.value ? this.date.getValueStandard(e) : "" : this.props.fullOnly && !this.isFull.value ? "" : this.valueFinal.value;
	}
	add(e, t) {
		return t in e || (e[t] = {
			group: t,
			value: "",
			maxLength: 0,
			full: !1,
			end: !1,
			chars: []
		}), e[t];
	}
}, Q = class {
	constructor(e, t) {
		L(this, "item", n(() => {
			for (let e of Object.values(this.pattern.item.value)) {
				let t = this.value.getInfoItem(e.group);
				if (t && t.full) {
					let n = e.check(t.value);
					if (n && !n.status) return {
						...n,
						value: this.value.item.value
					};
				}
			}
			return this.getValidationCheck();
		})), this.pattern = e, this.value = t;
	}
	isError(e) {
		var n;
		let r = (n = this.item.value) == null ? void 0 : n.group;
		return !!(r && (r === e || r === t.getGroupDefault()));
	}
	checkValidity() {
		return this.item.value === void 0;
	}
	getValidationCheck() {
		var e;
		if (this.value.isFull.value) {
			let t = this.value.getForCheck();
			if (this.pattern.isCheck()) {
				let n = (e = this.pattern.getInput(t.group)) == null ? void 0 : e.check(t.value);
				if (n && !n.status) return n;
			}
			return {
				status: !0,
				value: t.value,
				isFull: !0
			};
		}
		return {
			status: !0,
			value: this.value.item.value,
			isFull: !1
		};
	}
}, ce = class {
	constructor(e, t, r, i, a, o, s, c, l, u) {
		L(this, "classNameItem"), L(this, "item", n(() => {
			let e = [], t = this.valueBasic.item.value;
			return this.mask.item.value.forEach((n, r) => {
				let i = t == null ? void 0 : t[r];
				e.push({
					className: `${this.classNameItem} ${this.classNameItem}--${this.getStatus(n, i)}`,
					value: this.getValue(n, i)
				});
			}), e;
		})), L(this, "input", n(() => {
			let e = [], t = this.mask.item.value;
			return this.valueBasic.item.value.split("").forEach((n, r) => {
				var i, a;
				n === "~" ? e.push((a = this.getSpecialToView((i = t == null ? void 0 : t[r]) == null ? "" : i)) == null ? n : a) : e.push(n);
			}), e.join("");
		})), this.props = e, this.type = t, this.date = r, this.format = i, this.special = a, this.rubber = o, this.mask = s, this.valueBasic = c, this.validation = l, this.classNameItem = `${u}__character__item`;
	}
	isValue(e) {
		return !!(e && e !== "~");
	}
	getStatus(e, t) {
		return this.isValue(t) ? this.special.isSpecial(e) ? this.validation.isError(e) ? "error" : "special" : "standard" : this.rubber.isTransition(e) ? "transition" : "placeholder";
	}
	getValue(e, t) {
		return this.isValue(t) ? t : this.getSpecialToView(e);
	}
	getSpecialToView(e) {
		var t, n, r;
		return this.special.isSpecial(e) ? (r = (n = (t = this.getViewChar(e)) == null ? this.special.getView(e) : t) == null ? this.props.view : n) == null ? "_" : r : e;
	}
	getViewChar(e) {
		if (this.type.isDate()) return this.date.getView(e);
		if (this.type.isCurrencyOrNumber()) return this.format.view.value;
	}
}, le = class {
	constructor(e, t) {
		L(this, "type"), L(this, "event"), this.validation = e, this.emits = t;
	}
	isValue() {
		return !!(this.type && ["input", "change"].indexOf(this.type) >= 0);
	}
	go() {
		var e, t;
		if (this.type && this.event) {
			let n = this.isValue() ? this.validation.item.value : void 0;
			(e = this.emits) == null || e.call(this, this.type, this.event, n), (this.type === "inputLite" || this.type === "changeLite") && ((t = this.emits) == null || t.call(this, this.type, n));
		}
		return this;
	}
	set(e, t) {
		return this.setType(e), this.setEvent(t), this;
	}
	setType(e) {
		return this.type = e, this;
	}
	setEvent(e) {
		return this.event = e, this;
	}
	reset() {
		return this.resetType(), this.resetEvent(), this;
	}
	resetType() {
		return this.type = void 0, this;
	}
	resetEvent() {
		return this.event = void 0, this;
	}
}, ue = class {
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
		this.type = e, this.buffer = t, this.focus = n, this.rubberTransition = r, this.date = i, this.special = a, this.match = o, this.rubber = s, this.mask = c, this.selection = l, this.character = u, this.valueBasic = d, this.value = f, this.emit = p, this.element = m;
	}
	add(e, t, n = !0) {
		let r = !1;
		return this.selection.setByMask(e, n), this.rubberTransition.reset(), M(t).forEach((e) => {
			let t = this.character.getFocus(), i = this.character.getImmediate();
			this.selection.setShift(this.rubber.update(this.value.info.value, i, e)), this.rubberTransition.is() && this.selection.setByMask(this.mask.getByChar(this.rubberTransition.item.value, this.selection.getImmediate()) + 1, n), this.match.is(e, t) && (this.character.shift(), this.character.getFocus() && (this.mask.maxLength.value > this.valueBasic.getLength() || this.character.isCharDelete()) && (this.character.add(e), r = !0));
		}), this.goSelection(), r;
	}
	pop(e, t = e, n = !0) {
		if (e >= 0 && t <= this.mask.maxLength.value) {
			let r = this.mask.getQuantity(e, t);
			for (n && this.selection.setByMask(t); r--;) this.rubberTransition.reset(), this.character.pop(), this.character.shift(0), this.selection.setShift(this.rubber.pop(this.character.getFocus()));
			this.goSelection();
		}
		return this;
	}
	reset(e = "") {
		if (this.character.reset(), this.rubber.reset(), w(e)) {
			let t = this.type.isDate() ? this.date.getValue(e) : e;
			this.add(0, this.extra(t.split("")));
		}
		return this;
	}
	extra(e) {
		var t, n, r;
		if (this.character.is()) return e;
		let i = this.mask.item.value, a = [...e], o = this.match.get((n = (t = this.mask.info.value) == null ? void 0 : t[0]) == null ? void 0 : n.char), s = 0;
		if (o) for (let e in i) {
			let t = i[e];
			if (t) {
				if (this.special.isSpecial(t)) {
					for (let e = s; e < a.length && (s++, !((r = a == null ? void 0 : a[e]) != null && r.match(o))); e++);
					o = this.match.get(t);
				} else if (t.match(o)) {
					let e = !1;
					for (let n = s; n < a.length; n++) {
						let r = a[n];
						if (s++, r != null && r.match(o)) {
							t === r ? (a.splice(n, 1), s--) : e = !0;
							break;
						}
					}
					if (e) break;
				}
			}
		}
		return a;
	}
	goSelection(e = !0) {
		return this.focus.is() && requestAnimationFrame(() => {
			if (this.element.value && (!e || !this.goBuffer())) {
				let e = this.valueBasic.getLength(), t = this.selection.getShift(), n = e < t ? e : t;
				this.element.value.selectionEnd = n, this.element.value.selectionStart = n;
			}
		}), this;
	}
	goBuffer() {
		return this.buffer.is() ? (this.add(this.selection.getShift(), this.buffer.get()), this.buffer.resetChars(), !0) : (this.buffer.reset(), this.emit.go(), !1);
	}
}, de = class {
	constructor(e, t, n, r, i, a, o, s) {
		L(this, "change", !1), L(this, "unidentified"), L(this, "onFocus", (e) => {
			this.change = !1, this.focus.in(), this.emit.set("focus", e).go();
		}), L(this, "onBlur", (e) => {
			this.change && this.emit.setType("change").go(), this.focus.out(), this.emit.set("blur", e).go();
		}), L(this, "onKeydown", (e) => {
			let t = this.getSelectionInfo(e), { start: n, end: r } = t;
			this.emit.set("keydown", e).go(), this.isCut(e) && this.isSelection(t) && (this.data.pop(n, r), P(e.target.value.slice(n, r)).then()), !this.isMetaKey(e) && (this.isKey(e) ? e.key === "Backspace" ? (n > 0 || n !== r) && this.data.pop(n, r) : e.key.length <= 1 && (n === r ? this.buffer.go(e.key) && this.data.add(n, e.key) : (this.buffer.goStart(), this.data.pop(n, r).add(this.selection.getShift(), e.key))) : this.unidentified = t);
		}), L(this, "onKeyup", (e) => {
			this.emit.set("keyup", e).go(), !this.isMetaKey(e) && this.isKey(e) && [
				"ArrowUp",
				"ArrowRight",
				"ArrowDown",
				"ArrowLeft"
			].indexOf(e.key) >= 0 && (this.makeToEnd(e), this.makeToStart(e));
		}), L(this, "onBeforeinput", (e) => {
			this.emit.set("beforeinput", e).go(), this.unidentified || (this.makeChange(e), g(e));
		}), L(this, "onInput", (e) => {
			if (this.unidentified) {
				let t = e.target;
				(this.unidentified.length > t.value.length || this.unidentified.start !== this.unidentified.end) && this.data.pop(this.unidentified.start, this.unidentified.end), "data" in e ? e.data && this.buffer.go(e.data) && this.data.add(this.unidentified.start, e.data) : this.data.reset(t.value), this.makeChange(e), this.unidentified = void 0;
			}
		}), L(this, "onPaste", (e) => {
			let { start: t, end: n } = this.getSelectionInfo(e);
			v(e).then((r) => {
				let i = r.split("");
				t === n ? this.data.add(t, this.data.extra(i)) : this.data.pop(t, n).add(this.selection.getShift(), this.data.extra(i)), this.change = !0, this.emit.set("paste", e).go();
			}).catch((e) => console.error("getClipboardData", e));
		}), L(this, "onChange", (e) => {
			let t = e.target;
			this.data.reset(t.value), this.emit.set("change", e).go();
		}), L(this, "onClick", (e) => {
			this.makeToEnd(e), this.makeToStart(e);
		}), this.buffer = e, this.focus = t, this.characterLength = n, this.right = r, this.selection = i, this.valueBasic = a, this.emit = o, this.data = s;
	}
	isMetaKey(e) {
		return e.metaKey || e.altKey || e.ctrlKey;
	}
	isCut(e) {
		return e.type === "cut" || !!(e.key.toLowerCase() === "x" && (e.metaKey || e.ctrlKey));
	}
	isKey(e) {
		return "key" in e && e.key !== "Unidentified";
	}
	isSelection(e) {
		let { start: t, end: n } = e;
		return t > 0 || t !== n;
	}
	getSelectionInfo(e) {
		var t, n;
		let r = e.target;
		return {
			target: r,
			start: (t = r.selectionStart) == null ? 0 : t,
			end: (n = r.selectionEnd) == null ? 0 : n,
			length: r.value.length
		};
	}
	makeChange(e) {
		this.change = !0, this.emit.set("input", e), !this.buffer.is() && (this.emit.go(), this.emit.resetType());
	}
	makeToEnd(e) {
		if (this.right.isRight()) {
			let t = this.valueBasic.getLength(), { target: n, start: r, end: i } = this.getSelectionInfo(e);
			r > t && (n.selectionStart = t), i > t && (n.selectionEnd = t);
		}
	}
	makeToStart(e) {
		let t = this.selection.getFirst(), { target: n, start: r } = this.getSelectionInfo(e);
		r < t && (n.selectionStart = t, n.selectionEnd = t);
	}
}, fe = class {
	constructor(e, t, r, i, a, o, s, c, l) {
		L(this, "type"), L(this, "buffer"), L(this, "focus"), L(this, "characterLength"), L(this, "rubberItem"), L(this, "rubberTransition"), L(this, "date"), L(this, "format"), L(this, "special"), L(this, "match"), L(this, "pattern"), L(this, "right"), L(this, "rubber"), L(this, "item"), L(this, "selection"), L(this, "character"), L(this, "valueBasic"), L(this, "value"), L(this, "validation"), L(this, "view"), L(this, "emit"), L(this, "data"), L(this, "event"), L(this, "basic", n(() => {
			if (this.right.isRight()) {
				let e = "";
				return this.view.item.value.forEach((t) => {
					e += t.value;
				}), e;
			}
			return this.view.input.value;
		})), L(this, "classes", n(() => ({
			[`${this.className}--value`]: this.characterLength.is(),
			[`${this.className}--end`]: this.right.isEnd()
		}))), L(this, "set", (e) => this.reset(e)), L(this, "clear", () => {
			var e, t;
			this.data.reset(((e = this.props.valueDefault) == null ? "" : e).toString()), this.emit.set("reset", {}).go(), (t = this.element.value) == null || t.focus();
		}), this.props = e, this.refs = t, this.element = r, this.classDesign = i, this.className = a, this.components = o, this.slots = s, this.emits = c;
		let { MaskBufferConstructor: d = ee, MaskCharacterConstructor: f = ae, MaskCharacterLengthConstructor: p = z, MaskDataConstructor: g = ue, MaskDateConstructor: _ = W, MaskEmitConstructor: v = le, MaskEventConstructor: y = de, MaskFocusConstructor: b = te, MaskFormatConstructor: x = G, MaskItemConstructor: S = re, MaskMatchConstructor: C = J, MaskPatternConstructor: w = Y, MaskRightConstructor: T = Z, MaskRubberConstructor: E = ne, MaskRubberItemConstructor: D = B, MaskRubberTransitionConstructor: O = V, MaskSelectionConstructor: k = ie, MaskSpecialConstructor: A = K, MaskTypeConstructor: j = R, MaskValidationConstructor: M = Q, MaskValueBasicConstructor: N = oe, MaskValueConstructor: P = se, MaskViewConstructor: F = ce } = l == null ? {} : l;
		this.type = new j(this.props), this.buffer = new d(), this.focus = new b(this.buffer), this.characterLength = new p(), this.rubberItem = new D(), this.rubberTransition = new O(), this.date = new _(this.props, this.type), this.format = new x(this.props, this.type, this.rubberItem), this.special = new A(this.props, this.type, this.date, this.format), this.match = new C(this.props, this.special), this.pattern = new w(this.props, this.type, this.date, this.special), this.right = new T(this.props, this.type), this.rubber = new E(this.props, this.type, this.rubberItem, this.rubberTransition, this.special, this.match, this.format), this.item = new S(this.props, this.type, this.rubberItem, this.characterLength, this.date, this.format, this.special), this.selection = new k(this.special, this.item), this.character = new f(this.props, this.rubberItem, this.characterLength, this.special, this.item, this.selection), this.valueBasic = new N(this.rubberTransition, this.item, this.special, this.character), this.value = new P(this.props, this.type, this.date, this.format, this.item, this.special, this.valueBasic), this.validation = new M(this.pattern, this.value), this.view = new F(this.props, this.type, this.date, this.format, this.special, this.rubber, this.item, this.valueBasic, this.validation, this.className), this.emit = new v(this.validation, this.emits), this.data = new g(this.type, this.buffer, this.focus, this.rubberTransition, this.date, this.special, this.match, this.rubber, this.item, this.selection, this.character, this.valueBasic, this.value, this.emit, this.element), this.event = new y(this.buffer, this.focus, this.characterLength, this.right, this.selection, this.valueBasic, this.emit, this.data), u([t.value], () => this.reset(e.value)), u(this.basic, () => this.data.goSelection(!1)), u([m.getStandard(), t.language], () => this.reset(this.value.getValueCache())), e.value && this.data.reset(h(e.value));
	}
	reset(e) {
		let t = h(e);
		return t !== this.props.valueDefault && (this.value.item.value !== t || this.valueBasic.item.value !== t && !T(t)) ? (this.data.reset(t), this.emit.set("reset", {}).go(), !0) : !1;
	}
}, pe = class extends f {
	constructor(t, n, r, i = fe) {
		super(t, n, r), L(this, "item"), L(this, "renderData", () => this.props.name ? [a("input", {
			type: "hidden",
			name: this.props.name,
			value: this.item.value.item.value
		})] : []), L(this, "renderInput", () => {
			var e;
			return [a("input", N(this.props.inputAttrs, {
				ref: this.element,
				class: (e = this.classes) == null ? void 0 : e.value.input,
				type: "text",
				value: this.item.basic.value,
				placeholder: "",
				onFocus: this.item.event.onFocus,
				onBlur: this.item.event.onBlur,
				onKeydown: this.item.event.onKeydown,
				onKeyup: this.item.event.onKeyup,
				onBeforeinput: this.item.event.onBeforeinput,
				onInput: this.item.event.onInput,
				onChange: this.item.event.onChange,
				onPaste: this.item.event.onPaste,
				onClick: this.item.event.onClick
			}))];
		}), L(this, "renderView", () => {
			var t;
			let n = this.item.view.item.value, r = [], i;
			return n.length > 0 ? n.forEach((e, t) => {
				r.push(a("span", {
					key: t,
					class: e.className,
					innerHTML: e.value === " " ? "&nbsp;" : e.value
				}));
			}) : i = "&nbsp;", [a("span", {
				class: (t = this.classes) == null ? void 0 : t.value.character,
				"data-length": "1",
				...e.hidden(),
				innerHTML: i
			}, r)];
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			valueBasic: this.item.basic,
			value: this.item.value.item,
			setValue: this.item.set,
			clear: this.item.clear
		};
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			input: this.getSubClass("input"),
			character: this.getSubClass("character"),
			characterItem: this.getSubClass("character__item")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		let t = [
			...this.renderData(),
			...this.renderInput(),
			...this.renderView()
		];
		return a("span", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, t);
	}
}, $ = {
	align: [
		"center",
		"left",
		"right"
	],
	dir: ["ltr", "rtl"]
}, me = {
	...X,
	visible: !0
}, he = /* @__PURE__ */ i({
	name: "D1Mask",
	__name: "D1Mask",
	props: /* @__PURE__ */ o({
		name: {},
		value: {},
		valueDefault: {},
		currency: {},
		currencyHide: { type: Boolean },
		fullOnly: { type: Boolean },
		mask: {},
		special: {},
		match: {},
		groupSave: { type: Boolean },
		pattern: { type: [
			String,
			Object,
			Function
		] },
		check: { type: [
			String,
			Object,
			Function
		] },
		fraction: { type: [
			String,
			Boolean,
			Number
		] },
		type: {},
		view: {},
		inputAttrs: {},
		language: {},
		visible: { type: Boolean },
		visiblePartly: { type: Boolean },
		align: {},
		dir: {}
	}, me),
	emits: [
		"focus",
		"blur",
		"keydown",
		"keyup",
		"beforeinput",
		"input",
		"inputLite",
		"change",
		"changeLite",
		"paste",
		"reset"
	],
	setup(e, { expose: t, emit: i }) {
		let a = i, o = e, c = new pe("d1.mask", o, {
			emits: a,
			classes: n(() => ({ main: {
				"d1-mask": !0,
				"d1-mask--visible": o.visible,
				"d1-mask--visiblePartly": o.visiblePartly,
				[`d1-mask--align--${o.align}`]: S($.align, o.align),
				[`d1-mask--dir--${o.dir}`]: S($.dir, o.dir)
			} })),
			styles: n(() => ({}))
		}), u = c.render();
		return t(c.expose()), (e, t) => (s(), r(l(u)));
	}
});
//#endregion
export { he as t };
