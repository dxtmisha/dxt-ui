import { t as e } from "./defineProperty-DblGXmzD-DcKtCVOT.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { a as n } from "./FieldInputCheckInclude-DbHUdZcj-CWzcwt7k.js";
import { computed as r, createBlock as i, defineComponent as a, h as o, mergeDefaults as s, openBlock as c, ref as l, unref as u, watch as d } from "vue";
import { Datetime as f, DesignConstructorAbstract as p, GeoIntl as m, GeoRef as h, anyToString as g, eventStopPropagation as _, forEach as v, getBind as y, getClipboardData as b, getColumn as x, getExp as S, getMaxLengthAllArray as C, getRef as w, inArray as T, isArray as E, isFilled as D, isFloat as O, isObject as k, isObjectNotArray as A, isSelected as j, isString as M, replaceRecursive as N, strFill as P, toArray as F, toBind as I, toBinds as L, writeClipboardData as ee } from "@dxtmisha/functional";
//#region ../constructor/dist/MaskInclude-wNyyGR3g.js
var te = class {
	constructor(t, n, i, a, o, s, c, l) {
		e(this, "is", r(() => {
			var e;
			let t = (e = this.type) == null ? void 0 : e.get();
			return this.props.maskNone !== !0 && !!(this.props.mask || t && [
				"number",
				"number-format",
				"currency",
				"datetime",
				"date",
				"year-month",
				"time",
				"hour-minute"
			].indexOf(t) !== -1);
		})), e(this, "bindsStatic", r(() => {
			var e, t, n;
			let r = I((e = w(this.extra)) == null ? {} : e, (t = this.props.maskAttrs) == null ? {} : t);
			return {
				name: this.props.name,
				valueDefault: w(this.valueDefault),
				currency: this.props.currency,
				currencyHide: this.props.currencyHide,
				fraction: this.props.fraction,
				type: (n = this.type) == null ? void 0 : n.get(),
				visible: this.props.maskVisible,
				...y(this.props.mask, r, "mask")
			};
		})), e(this, "binds", r(() => {
			var e;
			return {
				...this.bindsStatic.value,
				value: (e = this.props.modelValue) == null ? this.props.value : e
			};
		})), e(this, "render", (e) => this.components ? this.components.render("mask", { ...I(e == null ? {} : e, this.binds.value) }, void 0, this.index) : []), this.props = t, this.className = n, this.value = i, this.valueDefault = a, this.components = o, this.type = s, this.extra = c, this.index = l, this.value && d(this.is, (e) => {
			e || this.value.setFull(!0);
		});
	}
	isActive() {
		return this.is.value;
	}
}, R = class {
	constructor(t) {
		e(this, "item", r(() => {
			var e;
			return (e = this.props.type) == null ? "text" : e;
		})), this.props = t;
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
}, z = class {
	constructor() {
		e(this, "chars", []), e(this, "start", !1);
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
}, B = class {
	constructor(t) {
		e(this, "value", !1), this.buffer = t;
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
}, V = class {
	constructor() {
		e(this, "length", l(0));
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
}, H = class {
	constructor() {
		e(this, "item", l({}));
	}
	is(e) {
		var t;
		return Number((t = this.item.value) == null ? void 0 : t[e]) > 0;
	}
	getByIndex(e) {
		var t, n;
		return (t = (n = this.item.value) == null ? void 0 : n[e]) == null ? 0 : t;
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
		return v(this.item.value, (e, n) => {
			t = t.replace(S(n, "g", "([:value]+)"), (t) => `${t}${P(n, e)}`);
		}), t;
	}
}, U = class {
	constructor() {
		e(this, "item", l(""));
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
}, W = {
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
			max: new f(`${(t = e == null || (n = e.Y) == null ? void 0 : n.value) == null ? "2000" : t}-${(r = e == null || (i = e.M) == null ? void 0 : i.value) == null ? "01" : r}-01`).getMaxDay().toString()
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
}, G = {
	Y: "y",
	M: "m",
	D: "d",
	h: "h",
	m: "m",
	s: "s"
}, K = class {
	constructor(t, n) {
		e(this, "mask", r(() => this.getDatetime().setHour24(!0).locale(void 0, "2-digit").replace("1987", "YYYY").replace("12", "MM").replace("18", "DD").replace("10", "hh").replace("20", "mm").replace("30", "ss").split(""))), this.props = t, this.type = n;
	}
	getDatetime(e) {
		return new f(e == null ? "1987-12-18T10:20:30" : e, this.type.getByDate(), this.props.language);
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
		let s = `${(e == null || (t = e.Y) == null ? void 0 : t.value) || "2000"}-${(e == null || (n = e.M) == null ? void 0 : n.value) || "01"}-${(e == null || (r = e.D) == null ? void 0 : r.value) || "01"}T${(e == null || (i = e.h) == null ? void 0 : i.value) || "00"}:${(e == null || (a = e.m) == null ? void 0 : a.value) || "00"}:${(e == null || (o = e.s) == null ? void 0 : o.value) || "00"}`;
		return isNaN(Date.parse(s)) ? "" : s;
	}
	getPattern() {
		return W;
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
		return G == null ? void 0 : G[e];
	}
}, q = class {
	constructor(t, n, i) {
		e(this, "special", {
			n: {},
			f: { defaultValue: "0" }
		}), e(this, "rubber", r(() => ({
			n: {
				rubber: !0,
				transitionChar: this.getDecimal(),
				maxLength: 10
			},
			f: {
				rubber: this.isFractionRubber(),
				maxLength: 4
			}
		}))), e(this, "view", r(() => this.type.isNumber() ? "⁠" : "0")), e(this, "fraction", r(() => {
			if (this.type.isCurrency()) return 2;
			let e = this.props.fraction;
			return typeof e == "number" ? e : typeof e == "string" && e.match(/[0-9]+/) ? Number(e) : this.rubberItem.is("f") ? this.rubberItem.getByIndex("f") + 1 : +(e === !0);
		})), e(this, "mask", r(() => this.type.isCurrency() ? this.toSpecial(this.getCurrency()) : this.type.isNumberFormat() ? this.toSpecial(this.getNumberFormat()) : this.toSpecial(this.getNumber()))), this.props = t, this.type = n, this.rubberItem = i;
	}
	isFractionRubber() {
		return this.props.fraction === !0;
	}
	getValueStandard(e) {
		var t, n;
		if (this.type.isNumber()) {
			var r;
			return (e == null || (r = e.n) == null ? void 0 : r.value) || "";
		}
		let i = `${(e == null || (t = e.n) == null ? void 0 : t.value) || "0"}.${(e == null || (n = e.f) == null ? void 0 : n.value) || "0"}`;
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
		return new m(this.props.language);
	}
	getNumberForString() {
		let e = this.fraction.value;
		return `${P("9", this.rubberItem.getByIndex("n") + 1)}${e ? `.${P("3", e)}` : ""}${this.type.isCurrency() && this.props.currency ? ` ${this.props.currency}` : ""}`;
	}
	toSpecial(e) {
		return e.replace(/9/gi, "n").replace(/3/gi, "f").split("");
	}
}, J = class {
	constructor(t, n, i, a) {
		e(this, "item", r(() => {
			if (this.type.isCurrencyOrNumber()) return this.format.getSpecial();
			if (this.type.isTime()) return this.date.getSpecialFull();
			if (this.type.isDate()) return this.date.getSpecialDate();
			let e = this.special.value;
			return E(e) ? e : k(e) ? Object.keys(e) : [e];
		})), e(this, "rubberList", r(() => {
			let e = {};
			return A(this.special.value) && v(this.special.value, (t, n) => {
				t != null && t.rubber && (e[n] = t);
			}), e;
		})), e(this, "special", r(() => {
			var e;
			return this.type.isCurrencyOrNumber() ? this.format.special : (e = this.props.special) == null ? "*" : e;
		})), this.props = t, this.type = n, this.date = i, this.format = a;
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
		if (A(t) && e in t) return t[e];
	}
}, Y = /[0-9]/, X = class {
	constructor(e, t) {
		this.props = e, this.special = t;
	}
	is(e, t) {
		let n = this.get(t);
		return n instanceof RegExp ? !!e.match(n) : M(n) ? !!e.match(new RegExp(n)) : !!e.match(Y);
	}
	get(e) {
		var t, n;
		return (t = (n = e && this.special.getMatch(e)) == null ? this.props.match : n) == null ? Y : t;
	}
	filter(e) {
		let t = this.special.item.value;
		return e.split("").filter((e) => t.find((t) => this.is(e, t)));
	}
}, Z = class {
	constructor(t, i, a, o) {
		e(this, "item", r(() => {
			let e = {};
			return v(this.list.value, (t, r) => {
				e[r] = new n(t, r);
			}), this.props.check && (e.check = new n(this.props.check)), e;
		})), e(this, "list", r(() => {
			let e = this.getByType();
			for (let t in e) {
				let n = this.getPattern(t);
				e[t] && (M(n) ? Object.assign(e[t], { pattern: n }) : A(n) && A(e[t]) && Object.assign(e[t], n));
			}
			return e;
		})), this.props = t, this.type = i, this.date = a, this.special = o;
	}
	isCheck() {
		return !!this.props.check;
	}
	getInput(e = n.getGroupDefault()) {
		var t;
		return (t = this.item.value) == null ? void 0 : t[e];
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
}, ne = {
	special: "*",
	match: /[0-9]/,
	type: "text",
	groupSave: !0,
	view: "_",
	visible: !0
}, re = class {
	constructor(e, t) {
		this.props = e, this.type = t;
	}
	isEnd() {
		return this.props.align !== "left" && (this.props.dir === "rtl" || this.type.isCurrency() && !this.props.currencyHide || this.type.isNumberFormat());
	}
	isRight() {
		return this.props.align === "right" || this.isEnd();
	}
}, ie = class {
	constructor(t, n, i, a, o, s, c) {
		e(this, "list", r(() => {
			let e = this.special.rubberList.value;
			return this.type.isCurrencyOrNumber() ? N(this.format.rubber.value, e) : e;
		})), e(this, "transition", r(() => x(Object.values(this.list.value).filter((e) => "transitionChar" in e && (M(e.transitionChar) || E(e.transitionChar))), "transitionChar").flat())), this.props = t, this.type = n, this.rubberItem = i, this.rubberTransition = a, this.special = o, this.match = s, this.format = c;
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
		return r && i ? j(n, r == null ? void 0 : r.transitionChar) || r != null && r.maxLength && (r == null ? void 0 : r.maxLength) <= (i == null ? void 0 : i.chars.length) ? (this.rubberTransition.set(t), !1) : (i.end && this.match.is(n, t) && !this.rubberTransition.isChar(t) && (this.rubberItem.add(t), this.rubberTransition.reset()), !0) : !1;
	}
	pop(e) {
		return this.rubberItem.pop(e);
	}
	reset() {
		return this.rubberItem.reset(), this.rubberTransition.reset(), this;
	}
}, ae = class {
	constructor(t, n, i, a, o, s, c) {
		e(this, "item", r(() => this.type.isCurrencyOrNumber() ? this.format.mask.value : this.type.isDate() ? this.date.mask.value : this.basic.value)), e(this, "info", r(() => {
			let e = [], t = 0;
			return this.item.value.forEach((n, r) => {
				this.special.isSpecial(n) && (e.push({
					index: t,
					key: r,
					char: n
				}), t++);
			}), e;
		})), e(this, "maxLength", r(() => {
			let e = this.getMask();
			return E(e) ? C(e) : this.item.value.length;
		})), e(this, "maskActive", r(() => {
			let e = this.getMask();
			return E(e) ? e.find((e) => this.getSpecialLength(e) >= this.characterLength.get()) || (e == null ? void 0 : e[e.length - 1]) || "" : e;
		})), e(this, "basic", r(() => this.rubberItem.expandMask(this.maskActive.value).split(""))), this.props = t, this.type = n, this.rubberItem = i, this.characterLength = a, this.date = o, this.format = s, this.special = c;
	}
	get(e) {
		var t, n;
		return (t = (n = this.item.value) == null ? void 0 : n[e]) == null ? "" : t;
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
}, oe = class {
	constructor(t, n) {
		e(this, "value", 0), e(this, "immediate", 0), e(this, "shift", !1), this.special = t, this.mask = n;
	}
	get() {
		return this.value;
	}
	getFirst() {
		var e, t;
		return (e = (t = this.mask.info.value) == null || (t = t[0]) == null ? void 0 : t.key) == null ? 0 : e;
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
}, se = class {
	constructor(t, n, r, i, a, o) {
		e(this, "item", l([])), this.props = t, this.rubberItem = n, this.characterLength = r, this.special = i, this.mask = a, this.selection = o;
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
		return this.item.value.splice(this.selection.get(), +!!this.isCharDelete(), e), this.selection.goNext().resetImmediate(), this.updateLength(), this;
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
		let e = this.selection.get() - 1, t = this.item.value.length;
		if (this.props.groupSave && e >= 0 && e <= t) {
			var n;
			let i = this.mask.info.value, a = i == null || (n = i[e]) == null ? void 0 : n.char;
			if (a && !this.rubberItem.is(a)) {
				for (let n = e; n < t; n++) if (i != null && i[n]) {
					var r;
					let e = (r = i[n]) == null ? void 0 : r.char;
					if (e && this.special.isSpecial(e) && a !== e) return !0;
				}
			}
		}
		return !1;
	}
	updateLength() {
		return this.characterLength.set(this.item.value.length), this;
	}
}, ce = class {
	constructor(t, n, i, a) {
		e(this, "item", r(() => {
			let e = this.character.item.value, t = [], n = 0;
			for (let r of this.mask.item.value) if (!this.special.isSpecial(r)) t.push(r);
			else if (n in e) {
				if (t.push(String(e[n++])), n > e.length && this.rubberTransition.is() && !this.rubberTransition.isChar(r)) break;
			} else break;
			return t.join("");
		})), this.rubberTransition = t, this.mask = n, this.special = i, this.character = a;
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
}, le = class {
	constructor(t, n, i, a, o, s, c) {
		e(this, "infoCache", void 0), e(this, "info", r(() => {
			let e = this.valueBasic.item.value, t = {};
			return this.mask.item.value.forEach((n, r) => {
				if (this.special.isSpecial(n)) {
					let i = this.add(t, n);
					this.isStandard(r) && e[r] !== "~" && i.chars.push(String(e[r])), i.maxLength++, i.end = i.maxLength === i.chars.length, i.full = this.special.isDefault(n) || i.end, i.value = i.full ? i.chars.join("") : "";
				}
			}), t;
		})), e(this, "item", r(() => this.getValue(this.info.value))), e(this, "isFull", r(() => {
			for (let e of Object.values(this.info.value)) if (!e.full) return !1;
			return !0;
		})), e(this, "isEnd", r(() => {
			for (let e of Object.values(this.info.value)) if (!e.end) return !1;
			return !0;
		})), e(this, "valueFinal", r(() => {
			let e = this.valueBasic.item.value.split(""), t = this.mask.item.value, n = "";
			for (let r in t) if (r in e) n += e[r];
			else if (t[r]) {
				let e = this.special.getDefault(t[r]);
				e && (n += e);
			}
			return n;
		})), this.props = t, this.type = n, this.date = i, this.format = a, this.mask = o, this.special = s, this.valueBasic = c, d(this.info, (e, t) => {
			this.type.isDate() && (this.infoCache = t);
		});
	}
	getValueCache() {
		return this.infoCache ? this.getValue(this.infoCache) : this.item.value;
	}
	getForCheck() {
		let e = this.item.value;
		return {
			group: n.getGroupDefault(),
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
}, ue = class {
	constructor(t, n) {
		e(this, "item", r(() => {
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
		})), this.pattern = t, this.value = n;
	}
	isError(e) {
		var t;
		let r = (t = this.item.value) == null ? void 0 : t.group;
		return !!(r && (r === e || r === n.getGroupDefault()));
	}
	checkValidity() {
		return this.item.value === void 0;
	}
	getValidationCheck() {
		if (this.value.isFull.value) {
			let t = this.value.getForCheck();
			if (this.pattern.isCheck()) {
				var e;
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
}, de = class {
	constructor(t, n, i, a, o, s, c, l, u, d) {
		e(this, "classNameItem", void 0), e(this, "item", r(() => {
			let e = [], t = this.valueBasic.item.value;
			return this.mask.item.value.forEach((n, r) => {
				let i = t == null ? void 0 : t[r];
				e.push({
					className: `${this.classNameItem} ${this.classNameItem}--${this.getStatus(n, i)}`,
					value: this.getValue(n, i)
				});
			}), e;
		})), e(this, "input", r(() => {
			let e = [], t = this.mask.item.value;
			return this.valueBasic.item.value.split("").forEach((n, r) => {
				if (n === "~") {
					var i, a;
					e.push((i = this.getSpecialToView((a = t == null ? void 0 : t[r]) == null ? "" : a)) == null ? n : i);
				} else e.push(n);
			}), e.join("");
		})), this.props = t, this.type = n, this.date = i, this.format = a, this.special = o, this.rubber = s, this.mask = c, this.valueBasic = l, this.validation = u, this.classNameItem = `${d}__character__item`;
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
		if (this.special.isSpecial(e)) {
			var t, n, r;
			return (t = (n = (r = this.getViewChar(e)) == null ? this.special.getView(e) : r) == null ? this.props.view : n) == null ? "_" : t;
		}
		return e;
	}
	getViewChar(e) {
		if (this.type.isDate()) return this.date.getView(e);
		if (this.type.isCurrencyOrNumber()) return this.format.view.value;
	}
}, fe = class {
	constructor(t, n) {
		e(this, "type", void 0), e(this, "event", void 0), this.validation = t, this.emits = n;
	}
	isValue() {
		return !!(this.type && ["input", "change"].indexOf(this.type) >= 0);
	}
	go() {
		if (this.type && this.event) {
			var e;
			let n = this.isValue() ? this.validation.item.value : void 0;
			if ((e = this.emits) == null || e.call(this, this.type, this.event, n), this.type === "inputLite" || this.type === "changeLite") {
				var t;
				(t = this.emits) == null || t.call(this, this.type, n);
			}
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
}, pe = class {
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
		this.type = e, this.buffer = t, this.focus = n, this.rubberTransition = r, this.date = i, this.special = a, this.match = o, this.rubber = s, this.mask = c, this.selection = l, this.character = u, this.valueBasic = d, this.value = f, this.emit = p, this.element = m;
	}
	add(e, t, n = !0) {
		let r = !1;
		return this.selection.setByMask(e, n), this.rubberTransition.reset(), F(t).forEach((e) => {
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
		if (this.character.reset(), this.rubber.reset(), D(e)) {
			let t = this.type.isDate() ? this.date.getValue(e) : e;
			this.add(0, this.extra(t.split("")));
		}
		return this;
	}
	extra(e) {
		var t;
		if (this.character.is()) return e;
		let n = this.mask.item.value, r = [...e], i = this.match.get((t = this.mask.info.value) == null || (t = t[0]) == null ? void 0 : t.char), a = 0;
		if (i) for (let e in n) {
			let t = n[e];
			if (t) {
				if (this.special.isSpecial(t)) {
					for (let e = a; e < r.length; e++) {
						var o;
						if (a++, !(r == null || (o = r[e]) == null) && o.match(i)) break;
					}
					i = this.match.get(t);
				} else if (t.match(i)) {
					let e = !1;
					for (let n = a; n < r.length; n++) {
						let o = r[n];
						if (a++, o != null && o.match(i)) {
							t === o ? (r.splice(n, 1), a--) : e = !0;
							break;
						}
					}
					if (e) break;
				}
			}
		}
		return r;
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
}, me = class {
	constructor(t, n, r, i, a, o, s, c) {
		e(this, "change", !1), e(this, "unidentified", void 0), e(this, "onFocus", (e) => {
			this.change = !1, this.focus.in(), this.emit.set("focus", e).go();
		}), e(this, "onBlur", (e) => {
			this.change && this.emit.setType("change").go(), this.focus.out(), this.emit.set("blur", e).go();
		}), e(this, "onKeydown", (e) => {
			let t = this.getSelectionInfo(e), { start: n, end: r } = t;
			this.emit.set("keydown", e).go(), this.isCut(e) && this.isSelection(t) && (this.data.pop(n, r), ee(e.target.value.slice(n, r)).then()), !this.isMetaKey(e) && (this.isKey(e) ? e.key === "Backspace" ? (n > 0 || n !== r) && this.data.pop(n, r) : e.key.length <= 1 && (n === r ? this.buffer.go(e.key) && this.data.add(n, e.key) : (this.buffer.goStart(), this.data.pop(n, r).add(this.selection.getShift(), e.key))) : this.unidentified = t);
		}), e(this, "onKeyup", (e) => {
			this.emit.set("keyup", e).go(), !this.isMetaKey(e) && this.isKey(e) && [
				"ArrowUp",
				"ArrowRight",
				"ArrowDown",
				"ArrowLeft"
			].indexOf(e.key) >= 0 && (this.makeToEnd(e), this.makeToStart(e));
		}), e(this, "onBeforeinput", (e) => {
			this.emit.set("beforeinput", e).go(), this.unidentified || (this.makeChange(e), _(e));
		}), e(this, "onInput", (e) => {
			if (this.unidentified) {
				let t = e.target;
				(this.unidentified.length > t.value.length || this.unidentified.start !== this.unidentified.end) && this.data.pop(this.unidentified.start, this.unidentified.end), "data" in e ? e.data && this.buffer.go(e.data) && this.data.add(this.unidentified.start, e.data) : this.data.reset(t.value), this.makeChange(e), this.unidentified = void 0;
			}
		}), e(this, "onPaste", (e) => {
			let { start: t, end: n } = this.getSelectionInfo(e);
			b(e).then((r) => {
				let i = r.split("");
				t === n ? this.data.add(t, this.data.extra(i)) : this.data.pop(t, n).add(this.selection.getShift(), this.data.extra(i)), this.change = !0, this.emit.set("paste", e).go();
			}).catch((e) => console.error("getClipboardData", e));
		}), e(this, "onChange", (e) => {
			let t = e.target;
			this.data.reset(t.value), this.emit.set("change", e).go();
		}), e(this, "onClick", (e) => {
			this.makeToEnd(e), this.makeToStart(e);
		}), this.buffer = t, this.focus = n, this.characterLength = r, this.right = i, this.selection = a, this.valueBasic = o, this.emit = s, this.data = c;
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
}, Q = class {
	constructor(t, n, i, a, o, s, c, l, u) {
		e(this, "type", void 0), e(this, "buffer", void 0), e(this, "focus", void 0), e(this, "characterLength", void 0), e(this, "rubberItem", void 0), e(this, "rubberTransition", void 0), e(this, "date", void 0), e(this, "format", void 0), e(this, "special", void 0), e(this, "match", void 0), e(this, "pattern", void 0), e(this, "right", void 0), e(this, "rubber", void 0), e(this, "item", void 0), e(this, "selection", void 0), e(this, "character", void 0), e(this, "valueBasic", void 0), e(this, "value", void 0), e(this, "validation", void 0), e(this, "view", void 0), e(this, "emit", void 0), e(this, "data", void 0), e(this, "event", void 0), e(this, "basic", r(() => {
			if (this.right.isRight()) {
				let e = "";
				return this.view.item.value.forEach((t) => {
					e += t.value;
				}), e;
			}
			return this.view.input.value;
		})), e(this, "classes", r(() => ({
			[`${this.className}--value`]: this.characterLength.is(),
			[`${this.className}--end`]: this.right.isEnd()
		}))), e(this, "set", (e) => this.reset(e)), e(this, "clear", () => {
			var e, t;
			this.data.reset(((e = this.props.valueDefault) == null ? "" : e).toString()), this.emit.set("reset", {}).go(), (t = this.element.value) == null || t.focus();
		}), this.props = t, this.refs = n, this.element = i, this.classDesign = a, this.className = o, this.components = s, this.slots = c, this.emits = l;
		let { MaskBufferConstructor: f = z, MaskCharacterConstructor: p = se, MaskCharacterLengthConstructor: m = V, MaskDataConstructor: _ = pe, MaskDateConstructor: v = K, MaskEmitConstructor: y = fe, MaskEventConstructor: b = me, MaskFocusConstructor: x = B, MaskFormatConstructor: S = q, MaskItemConstructor: C = ae, MaskMatchConstructor: w = X, MaskPatternConstructor: T = Z, MaskRightConstructor: E = re, MaskRubberConstructor: D = ie, MaskRubberItemConstructor: O = H, MaskRubberTransitionConstructor: k = U, MaskSelectionConstructor: A = oe, MaskSpecialConstructor: j = J, MaskTypeConstructor: M = R, MaskValidationConstructor: N = ue, MaskValueBasicConstructor: P = ce, MaskValueConstructor: F = le, MaskViewConstructor: I = de } = u == null ? {} : u;
		this.type = new M(this.props), this.buffer = new f(), this.focus = new x(this.buffer), this.characterLength = new m(), this.rubberItem = new O(), this.rubberTransition = new k(), this.date = new v(this.props, this.type), this.format = new S(this.props, this.type, this.rubberItem), this.special = new j(this.props, this.type, this.date, this.format), this.match = new w(this.props, this.special), this.pattern = new T(this.props, this.type, this.date, this.special), this.right = new E(this.props, this.type), this.rubber = new D(this.props, this.type, this.rubberItem, this.rubberTransition, this.special, this.match, this.format), this.item = new C(this.props, this.type, this.rubberItem, this.characterLength, this.date, this.format, this.special), this.selection = new A(this.special, this.item), this.character = new p(this.props, this.rubberItem, this.characterLength, this.special, this.item, this.selection), this.valueBasic = new P(this.rubberTransition, this.item, this.special, this.character), this.value = new F(this.props, this.type, this.date, this.format, this.item, this.special, this.valueBasic), this.validation = new N(this.pattern, this.value), this.view = new I(this.props, this.type, this.date, this.format, this.special, this.rubber, this.item, this.valueBasic, this.validation, this.className), this.emit = new y(this.validation, this.emits), this.data = new _(this.type, this.buffer, this.focus, this.rubberTransition, this.date, this.special, this.match, this.rubber, this.item, this.selection, this.character, this.valueBasic, this.value, this.emit, this.element), this.event = new b(this.buffer, this.focus, this.characterLength, this.right, this.selection, this.valueBasic, this.emit, this.data), d([n.value], () => this.reset(t.value)), d(this.basic, () => this.data.goSelection(!1)), d([h.getStandard(), n.language], () => this.reset(this.value.getValueCache())), t.value && this.data.reset(g(t.value));
	}
	reset(e) {
		let t = g(e);
		return t !== this.props.valueDefault && (this.value.item.value !== t || this.valueBasic.item.value !== t && !O(t)) ? (this.data.reset(t), this.emit.set("reset", {}).go(), !0) : !1;
	}
}, he = class extends p {
	constructor(n, r, i, a = Q) {
		super(n, r, i), e(this, "item", void 0), e(this, "renderData", () => this.props.name ? [o("input", {
			type: "hidden",
			name: this.props.name,
			value: this.item.value.item.value
		})] : []), e(this, "renderInput", () => {
			var e;
			return [o("input", L(this.props.inputAttrs, {
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
		}), e(this, "renderView", () => {
			var e;
			let n = this.item.view.item.value, r = [], i;
			return n.length > 0 ? n.forEach((e, t) => {
				r.push(o("span", {
					key: t,
					class: e.className,
					innerHTML: e.value === " " ? "&nbsp;" : e.value
				}));
			}) : i = "&nbsp;", [o("span", {
				class: (e = this.classes) == null ? void 0 : e.value.character,
				"data-length": "1",
				...t.hidden(),
				innerHTML: i
			}, r)];
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return o("span", {
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
}, ge = {
	...ne,
	visible: !0
}, _e = /* @__PURE__ */ a({
	name: "D1Mask",
	__name: "D1Mask",
	props: /* @__PURE__ */ s({
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
	}, ge),
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
	setup(e, { expose: t, emit: n }) {
		let a = n, o = e, s = new he("d1.mask", o, {
			emits: a,
			classes: r(() => ({ main: {
				"d1-mask": !0,
				"d1-mask--visible": o.visible,
				"d1-mask--visiblePartly": o.visiblePartly,
				[`d1-mask--align--${o.align}`]: T($.align, o.align),
				[`d1-mask--dir--${o.dir}`]: T($.dir, o.dir)
			} })),
			styles: r(() => ({}))
		}), l = s.render();
		return t(s.expose()), (e, t) => (c(), i(u(l)));
	}
});
//#endregion
export { te as n, _e as t };
