import { t as e } from "./defineProperty-DblGXmzD.js";
import { t } from "./FieldInputCheckInclude-DbHUdZcj.js";
import { computed as n } from "vue";
import { anyToString as r, isObject as i, toNumber as a } from "@dxtmisha/functional";
//#region src/classes/Field/FieldArrowInclude.ts
var o = class {
	constructor(t, r, i) {
		e(this, "is", n(() => !!(this.props.arrow && this.props.arrow !== "none"))), e(this, "disabledPrevious", n(() => !this.isPrevious(this.value.number.value))), e(this, "disabledNext", n(() => !this.isNext(this.value.number.value))), e(this, "step", n(() => {
			var e, t;
			return a((e = (t = this.props.arrowStep) == null ? this.props.step : t) == null ? 1 : e);
		})), e(this, "min", n(() => {
			var e;
			return (e = a(this.props.min)) == null ? void 0 : e;
		})), e(this, "max", n(() => a(this.props.max) || void 0)), this.props = t, this.value = r, this.type = i;
	}
	isCarousel() {
		return this.get() === "carousel";
	}
	isStepper() {
		return this.get() === "stepper";
	}
	isPrevious(e) {
		let t = this.min.value;
		return t === void 0 || e > t;
	}
	isNext(e) {
		let t = this.max.value;
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
		let e = this.value.number.value - this.step.value;
		return this.isPrevious(e) ? this.value.set(e.toString()) : this.toMin(), this;
	}
	next() {
		let e = this.value.number.value + this.step.value;
		return this.isNext(e) ? this.value.set(e.toString()) : this.toMax(), this;
	}
	toMin() {
		if (!this.disabledPrevious.value) {
			let e = this.min.value;
			e !== void 0 && this.value.set(e.toString());
		}
		return this;
	}
	toMax() {
		if (!this.disabledNext.value) {
			let e = this.max.value;
			e !== void 0 && this.value.set(e.toString());
		}
		return this;
	}
}, s = class {
	constructor(e, t, n, r) {
		this.props = e, this.element = t, this.value = n, this.text = r;
	}
	is() {
		return !!this.props.match;
	}
	getSelectors() {
		if (this.is()) return i(this.props.match) ? this.props.match.name : this.props.match;
	}
	getValidationMessage() {
		if (this.is()) {
			var e;
			if (i(this.props.match) && (e = this.props.match) != null && e.validationMessage) return this.props.match.validationMessage;
			if (this.text) {
				var t;
				return (t = this.text.entriesMatch.value) == null ? "" : t;
			}
		}
		return "";
	}
	check() {
		let e = this.getSelectors();
		if (e) {
			let n = this.element.findByName(e);
			if (n && r(n.value) !== this.value.string.value) return {
				group: t.getGroupDefault(),
				status: !1,
				input: this.element.get(),
				validationMessage: this.getValidationMessage(),
				value: this.value.item.value
			};
		}
	}
};
//#endregion
export { o as n, s as t };
