import { isReadonly as e, isRef as t, watch as n } from "vue";
import { isFunction as r, toCamelCase as i, toCamelCaseFirst as a } from "@dxtmisha/functional";
//#region ../constructor/dist/ModelInclude-BiYm_iCQ.js
var o = Object.defineProperty, s = (e, t, n) => t in e ? o(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, c = (e, t, n) => s(e, typeof t == "symbol" ? t : t + "", n), l = class {
	constructor(e, t, r) {
		c(this, "update", (e) => {
			this.isValue() && (this.syncValue.value = e);
		}), this.index = e, this.emits = t, this.syncValue = r, r && n(r, (e) => {
			this.emit(e);
		}, { immediate: !0 });
	}
	isValue() {
		return t(this.syncValue) && !e(this.syncValue);
	}
	getBinds() {
		if (this.isValue()) {
			let e = a(this.index);
			return {
				[`model${e}`]: this.syncValue.value,
				[`onUpdate:${i(this.index)}`]: this.update,
				[`onUpdate:model${e}`]: this.update
			};
		}
		return {};
	}
	emit(e) {
		r(this.emits) && (this.emits(`update:${i(this.index)}`, e), this.emits(`update:model${a(this.index)}`, e));
	}
};
//#endregion
export { l as t };
