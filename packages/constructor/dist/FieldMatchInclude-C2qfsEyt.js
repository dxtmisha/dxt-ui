import { t as e } from "./FieldInputCheckInclude-D9B4Dhf8.js";
import { anyToString as t, isObject as n, toNumber as r } from "@dxtmisha/functional";
//#region src/classes/Field/FieldArrowInclude.ts
var i = class {
	constructor(e, t, n) {
		this.props = e, this.value = t, this.type = n;
	}
	get is() {
		return !!(this.props.arrow && this.props.arrow !== "none");
	}
	get disabledPrevious() {
		return !this.isPrevious(this.value.number.value);
	}
	get disabledNext() {
		return !this.isNext(this.value.number.value);
	}
	isCarousel() {
		return this.get() === "carousel";
	}
	isStepper() {
		return this.get() === "stepper";
	}
	isPrevious(e) {
		let t = this.min;
		return t === void 0 || e > t;
	}
	isNext(e) {
		let t = this.max;
		return t === void 0 || e < t;
	}
	get() {
		switch (this.props.arrow) {
			case "auto":
				var e, t;
				if (((e = this.type) == null ? void 0 : e.get()) === "number" || ((t = this.type) == null ? void 0 : t.get()) === "number-format") return "stepper";
				break;
		}
		return this.props.arrow;
	}
	align() {
		return this.props.arrowAlign;
	}
	previous() {
		let e = this.value.number.value - this.step;
		return this.isPrevious(e) ? this.value.set(e.toString()) : this.toMin(), this;
	}
	next() {
		let e = this.value.number.value + this.step;
		return this.isNext(e) ? this.value.set(e.toString()) : this.toMax(), this;
	}
	toMin() {
		if (!this.disabledPrevious) {
			let e = this.min;
			e !== void 0 && this.value.set(e.toString());
		}
		return this;
	}
	toMax() {
		if (!this.disabledNext) {
			let e = this.max;
			e !== void 0 && this.value.set(e.toString());
		}
		return this;
	}
	get step() {
		var e, t;
		return r((e = (t = this.props.arrowStep) == null ? this.props.step : t) == null ? 1 : e);
	}
	get min() {
		var e;
		return (e = r(this.props.min)) == null ? void 0 : e;
	}
	get max() {
		return r(this.props.max) || void 0;
	}
}, a = class {
	constructor(e, t, n, r) {
		this.props = e, this.element = t, this.value = n, this.text = r;
	}
	is() {
		return !!this.props.match;
	}
	getSelectors() {
		if (this.is()) return n(this.props.match) ? this.props.match.name : this.props.match;
	}
	getValidationMessage() {
		if (this.is()) {
			var e;
			if (n(this.props.match) && (e = this.props.match) != null && e.validationMessage) return this.props.match.validationMessage;
			if (this.text) {
				var t;
				return (t = this.text.entriesMatch.value) == null ? "" : t;
			}
		}
		return "";
	}
	check() {
		let n = this.getSelectors();
		if (n) {
			let r = this.element.findByName(n);
			if (r && t(r.value) !== this.value.string.value) return {
				group: e.getGroupDefault(),
				status: !1,
				input: this.element.get(),
				validationMessage: this.getValidationMessage(),
				value: this.value.item.value
			};
		}
	}
};
//#endregion
export { i as n, a as t };
