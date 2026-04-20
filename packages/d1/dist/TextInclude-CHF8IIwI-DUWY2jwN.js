import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { computed as t, shallowRef as n } from "vue";
import { executeFunction as r, toCamelCase as i } from "@dxtmisha/functional";
//#region ../constructor/dist/TextInclude-CHF8IIwI.js
var a = class n {
	static initText(e) {
		this.list.value = {
			...this.list.value,
			...e
		};
	}
	constructor(t) {
		e(this, "texts", {}), this.props = t;
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
	get notifications() {
		return this.get("textNotifications");
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
	get(e) {
		if (e in this.texts) return this.texts[e];
		let n = i(String(e).replace("text", "")), r = t(() => {
			var t;
			return this.getText(n, (t = this.props) == null ? void 0 : t[e]);
		});
		return this.texts[e] = r;
	}
	getText(e, t) {
		return t ? r(t) : this.getGlobalText(e);
	}
	getGlobalText(e) {
		var t;
		if ((t = n.list.value) != null && t[e]) return r(n.list.value[e]);
	}
};
e(a, "list", n({
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
	notifications: "Notifications",
	ok: "OK",
	previous: "Previous",
	show: "Show"
}));
//#endregion
export { a as t };
