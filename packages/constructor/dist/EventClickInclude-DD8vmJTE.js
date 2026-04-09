import { t as e } from "./defineProperty-DblGXmzD.js";
import { toRefs as t } from "vue";
import { RouterItemRef as n, isEnter as r, isObjectNotArray as i } from "@dxtmisha/functional";
//#region src/classes/EventClickInclude.ts
var a = class {
	constructor(n, i, a) {
		e(this, "refs", void 0), e(this, "onClick", (e, t) => {
			if (this.emits) if (t) this.emit(e, t);
			else if (this.toRouter()) e.preventDefault();
			else if (this.enabled) {
				let t = this.getOptions(e);
				(this.enabled.isEnabled.value || t.type === "icon-trailing" && !this.enabled.isDisabled.value) && this.emit(e, t);
			} else this.emit(e, this.getOptions(e));
		}), e(this, "onKeydown", (e, t) => {
			r(e) && (this.onClick(e, t), e.preventDefault());
		}), this.props = n, this.enabled = i, this.emits = a, this.refs = n ? t(n) : void 0;
	}
	get binds() {
		return {
			...this.getHref(),
			onClick: this.onClick,
			onKeydown: this.onKeydown
		};
	}
	get expose() {
		var e, t;
		return {
			value: (e = this.refs) == null ? void 0 : e.value,
			detail: (t = this.refs) == null ? void 0 : t.detail
		};
	}
	getHref() {
		var e, t, r;
		let a = (e = this.props) == null ? void 0 : e.to;
		return (t = this.props) != null && t.to && i(a) && "name" in a ? n.rawToHref(a) : { href: (r = this.props) == null ? void 0 : r.href };
	}
	getOptions(e) {
		var t, n;
		return {
			type: this.getTargetType(e),
			value: (t = this.props) == null ? void 0 : t.value,
			detail: (n = this.props) == null ? void 0 : n.detail
		};
	}
	getTargetType(e) {
		var t;
		let n = (t = e.target) == null || (t = t.closest("[data-event-type]")) == null || (t = t.dataset) == null ? void 0 : t.eventType;
		return n == null ? "click" : n;
	}
	toRouter() {
		var e;
		if ((e = this.props) != null && e.to) {
			var t;
			return n.push((t = this.props) == null ? void 0 : t.to), !0;
		}
		return !1;
	}
	emit(e, t) {
		this.emits && (this.emits("click", e, t), this.emits("clickLite", t));
	}
};
//#endregion
export { a as t };
