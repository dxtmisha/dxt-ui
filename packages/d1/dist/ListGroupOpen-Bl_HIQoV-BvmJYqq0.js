import { computed as e, ref as t } from "vue";
//#region ../constructor/dist/ListGroupOpen-Bl_HIQoV.js
var n = Object.defineProperty, r = (e, t, r) => t in e ? n(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r
}) : e[t] = r, i = (e, t, n) => r(e, typeof t == "symbol" ? t : t + "", n), a = class {
	constructor(n) {
		i(this, "open", t(!1)), i(this, "is", e(() => this.open.value || !!this.props.open)), i(this, "onOpen", ({ open: e }) => {
			this.open.value !== e && (this.open.value = e);
		}), this.props = n;
	}
};
//#endregion
export { a as t };
