import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./TouchEventInclude-DBTjgfyK.js";
import { r as n, t as r } from "./ModalDesignAbstract-DjDA86UL.js";
import { computed as i, h as a } from "vue";
import { toBinds as o } from "@dxtmisha/functional";
//#region src/constructors/ActionSheet/ActionSheet.ts
var s = class extends n {
	constructor(n, r, a, o, s, c, l, u, d) {
		let { TouchEventIncludeConstructor: f = t } = d == null ? {} : d;
		super(n, r, a, o, s, c, l, u, i(() => ({
			open: n.open,
			adaptive: "actionSheet",
			closeButton: n.barsBackHide,
			closeMobileHide: n.touchClose
		})), void 0, { align: "auto" }, d), e(this, "touchEvent", void 0), this.props = n, this.refs = r, this.element = a, this.classDesign = o, this.className = s, this.components = c, this.slots = l, this.emits = u, this.touchEvent = new f(void 0, (e, t, n, r) => r >= 0, (e, t) => t === "bottom" ? (this.window.expose.setOpen(!1).then(), !1) : !0);
	}
}, c = {
	barsBackHide: !0,
	touchClose: !0
}, l = class extends r {
	constructor(...t) {
		super(...t), e(this, "renderTitleTouch", (e) => {
			let t = this.renderTitle(e);
			if (this.props.touchClose) {
				var n, r;
				return [a("div", {
					class: (n = this.classes) == null ? void 0 : n.value.touch,
					...this.item.touchEvent.onTouch
				}, [a("div", { class: (r = this.classes) == null ? void 0 : r.value.tab }), ...t])];
			}
			return t;
		});
	}
	initItem() {
		return new s(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits);
	}
	initClasses() {
		return {
			main: {},
			title: this.getSubClass("title"),
			header: this.getSubClass("header"),
			body: this.getSubClass("body"),
			footer: this.getSubClass("footer"),
			touch: this.getSubClass("touch"),
			tab: this.getSubClass("tab")
		};
	}
	initRender() {
		var e;
		return this.item.window.render({
			control: this.renderControl,
			title: this.renderTitleTouch,
			default: this.renderDefault,
			footer: this.renderFooter
		}, o({
			class: (e = this.classes) == null ? void 0 : e.value.main,
			"data-touch": "touch"
		}, this.getAttrs()));
	}
};
//#endregion
export { s as ActionSheet, l as ActionSheetDesign, c as defaultsActionSheet };
