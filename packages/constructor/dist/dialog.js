import { t as e } from "./defineProperty-hmGKPWdq.js";
import { t } from "./TextInclude-OwyVCAbS.js";
import { t as n } from "./LabelInclude-DoZ7EUYO.js";
import { t as r } from "./DescriptionInclude-B_Xf_j3l.js";
import { t as i } from "./WindowClassesInclude-zm-ITw5d.js";
import { r as a, t as o } from "./ModalDesignAbstract-BaVdtb1N.js";
import { t as s } from "./IconInclude-BhzGfa3o.js";
import { computed as c, h as l, readonly as u } from "vue";
import { getBind as d, toBinds as f } from "@dxtmisha/functional";
//#region src/constructors/Dialog/Dialog.ts
var p = class extends a {
	constructor(a, o, l, f, p, m, h, g, _) {
		let { DescriptionIncludeConstructor: v = r, IconIncludeConstructor: y = s, LabelIncludeConstructor: b = n, TextIncludeConstructor: x = t, WindowClassesIncludeConstructor: S = i } = _ == null ? {} : _;
		super(a, o, l, f, p, m, h, g, c(() => ({
			open: a.open,
			image: a.image,
			adaptive: "modal",
			imagePosition: a.imagePosition,
			closeButton: this.props.closeButton
		})), void 0, c(() => {
			let e = [];
			return a.buttonClose !== null && e.push(d(a.buttonClose, {
				label: this.text.close.value,
				value: "close",
				class: this.windowClasses.get().close,
				onClick: () => {
					var e;
					return (e = this.emits) == null ? void 0 : e.call(this, "close");
				}
			}, "label", !0)), a.buttonOk !== null && e.push(d(a.buttonOk, {
				label: this.text.ok.value,
				value: "ok",
				class: this.props.clickOkAndClose ? this.windowClasses.get().close : void 0,
				onClick: () => {
					var e;
					return (e = this.emits) == null ? void 0 : e.call(this, "ok");
				}
			}, "label", !0)), {
				list: e,
				align: "center"
			};
		}), _), e(this, "icon", void 0), e(this, "label", void 0), e(this, "description", void 0), e(this, "windowClasses", void 0), e(this, "text", void 0), e(this, "iconValue", c(() => this.props.success ? this.props.iconSuccess : this.props.error ? this.props.iconError : this.props.icon)), this.props = a, this.refs = o, this.element = l, this.classDesign = f, this.className = p, this.components = m, this.slots = h, this.emits = g, this.icon = new y(u({ icon: this.iconValue }), p, m, o.iconAttrs), this.label = new b(a, p, void 0, h, void 0, void 0, !0), this.description = new v(a, p, h), this.windowClasses = new S(f), this.text = new x(this.props);
	}
}, m = {
	barsBackHide: !0,
	barsHide: !0,
	clickOkAndClose: !0,
	imagePosition: "top"
}, h = class extends o {
	constructor(...t) {
		super(...t), e(this, "renderContent", (e) => [...this.renderInformation(), ...this.renderDefault(e)]), e(this, "renderInformation", () => {
			var e;
			return [l("div", { class: (e = this.classes) == null ? void 0 : e.value.information }, [
				...this.item.icon.renderIcon(),
				...this.item.label.render(),
				...this.item.description.render()
			])];
		});
	}
	initItem() {
		return new p(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits);
	}
	initClasses() {
		return {
			main: {},
			title: this.getSubClass("title"),
			header: this.getSubClass("header"),
			information: this.getSubClass("information"),
			icon: this.getSubClass("icon"),
			label: this.getSubClass("label"),
			description: this.getSubClass("description"),
			body: this.getSubClass("body"),
			footer: this.getSubClass("footer")
		};
	}
	initRender() {
		var e;
		return this.item.window.render({
			control: this.renderControl,
			title: this.renderTitle,
			default: this.renderContent,
			footer: this.renderFooter
		}, f({
			class: (e = this.classes) == null ? void 0 : e.value.main,
			"data-touch": "touch"
		}, this.getAttrs()));
	}
};
//#endregion
export { p as Dialog, h as DialogDesign, m as defaultsDialog };
