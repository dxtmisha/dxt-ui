import { computed as e, shallowRef as t } from "vue";
import { executeFunction as n, toCamelCase as r } from "@dxtmisha/functional";
//#region ../constructor/dist/TextInclude--GERRCGj.js
var i = Object.defineProperty, a = (e, t, n) => t in e ? i(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, o = (e, t, n) => a(e, typeof t == "symbol" ? t : t + "", n), s = class t {
	constructor(e) {
		o(this, "texts", {}), this.props = e;
	}
	static initText(e) {
		this.list.value = {
			...this.list.value,
			...e
		};
	}
	get cancel() {
		return this.get("textCancel");
	}
	get characterLimit() {
		return this.get("textCharacterLimit");
	}
	get characterRemaining() {
		return this.get("textCharacterRemaining");
	}
	get close() {
		return this.get("textClose");
	}
	get copiedClipboard() {
		return this.get("textCopiedClipboard");
	}
	get decrement() {
		return this.get("textDecrement");
	}
	get entriesMatch() {
		return this.get("textEntriesMatch");
	}
	get hide() {
		return this.get("textHide");
	}
	get increment() {
		return this.get("textIncrement");
	}
	get loading() {
		return this.get("textLoading");
	}
	get next() {
		return this.get("textNext");
	}
	get ok() {
		return this.get("textOk");
	}
	get previous() {
		return this.get("textPrevious");
	}
	get show() {
		return this.get("textShow");
	}
	get(t) {
		if (t in this.texts) return this.texts[t];
		let n = r(String(t).replace("text", "")), i = e(() => {
			var e;
			return this.getText(n, (e = this.props) == null ? void 0 : e[t]);
		});
		return this.texts[t] = i;
	}
	getText(e, t) {
		return t ? n(t) : this.getGlobalText(e);
	}
	getGlobalText(e) {
		var r;
		if ((r = t.list.value) != null && r[e]) return n(t.list.value[e]);
	}
};
o(s, "list", t({
	cancel: "Cancel",
	characterLimit: "Character limit exceeded",
	characterRemaining: "Remaining [left] characters",
	close: "Close",
	copiedClipboard: "Copied to the clipboard",
	decrement: "Decrease",
	entriesMatch: "Entries do not match",
	hide: "Hide",
	increment: "Increase",
	loading: "Loading",
	next: "Next",
	ok: "OK",
	previous: "Previous",
	show: "Show"
}));
var c = s;
//#endregion
export { c as t };
