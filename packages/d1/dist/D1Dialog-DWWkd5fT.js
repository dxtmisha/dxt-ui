import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { t } from "./LabelInclude-DoZ7EUYO-lGSFdcB1.js";
import { t as n } from "./DescriptionInclude-B_Xf_j3l-DKfEbhTV.js";
import { t as r } from "./IconInclude-BhzGfa3o-CvSCVAc2.js";
import { t as i } from "./TextInclude-OwyVCAbS-CAlHZ-54.js";
import { r as a, t as o } from "./ModalDesignAbstract-BaVdtb1N-CW8RThHA.js";
import { t as s } from "./Actions-COAAvHzp.js";
import { t as c } from "./Icon-BClQj0Xi.js";
import { i as l } from "./WindowClassesInclude-zm-ITw5d-QVDLqfAL.js";
import { t as u } from "./Bars-CnTE-Uzk.js";
import { t as d } from "./Window-CSPRlXz9.js";
import { computed as f, createBlock as p, defineComponent as m, h, mergeDefaults as g, openBlock as _, readonly as v, unref as y } from "vue";
import { getBind as b, inArray as x, toBinds as S } from "@dxtmisha/functional";
//#region ../constructor/dist/dialog.js
var C = class extends o {
	constructor(a, o, s, c, u, d, p, m, h) {
		let { DescriptionIncludeConstructor: g = n, IconIncludeConstructor: _ = r, LabelIncludeConstructor: y = t, TextIncludeConstructor: x = i, WindowClassesIncludeConstructor: S = l } = h == null ? {} : h;
		super(a, o, s, c, u, d, p, m, f(() => ({
			open: a.open,
			image: a.image,
			adaptive: "modal",
			imagePosition: a.imagePosition,
			closeButton: this.props.closeButton
		})), void 0, f(() => {
			let e = [];
			return a.buttonClose !== null && e.push(b(a.buttonClose, {
				label: this.text.close.value,
				value: "close",
				class: this.windowClasses.get().close,
				onClick: () => {
					var e;
					return (e = this.emits) == null ? void 0 : e.call(this, "close");
				}
			}, "label", !0)), a.buttonOk !== null && e.push(b(a.buttonOk, {
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
		}), h), e(this, "icon", void 0), e(this, "label", void 0), e(this, "description", void 0), e(this, "windowClasses", void 0), e(this, "text", void 0), e(this, "iconValue", f(() => this.props.success ? this.props.iconSuccess : this.props.error ? this.props.iconError : this.props.icon)), this.props = a, this.refs = o, this.element = s, this.classDesign = c, this.className = u, this.components = d, this.slots = p, this.emits = m, this.icon = new _(v({ icon: this.iconValue }), u, d, o.iconAttrs), this.label = new y(a, u, void 0, p, void 0, void 0, !0), this.description = new g(a, u, p), this.windowClasses = new S(c), this.text = new x(this.props);
	}
}, w = {
	barsBackHide: !0,
	barsHide: !0,
	clickOkAndClose: !0,
	imagePosition: "top"
}, T = class extends a {
	constructor(...t) {
		super(...t), e(this, "renderContent", (e) => [...this.renderInformation(), ...this.renderDefault(e)]), e(this, "renderInformation", () => {
			var e;
			return [h("div", { class: (e = this.classes) == null ? void 0 : e.value.information }, [
				...this.item.icon.renderIcon(),
				...this.item.label.render(),
				...this.item.description.render()
			])];
		});
	}
	initItem() {
		return new C(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits);
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
		}, S({
			class: (e = this.classes) == null ? void 0 : e.value.main,
			"data-touch": "touch"
		}, this.getAttrs()));
	}
}, E = {
	imagePosition: ["top", "left"],
	width: [
		"sm",
		"md",
		"lg",
		"auto"
	]
}, D = {
	...w,
	imagePosition: "top",
	width: "md"
}, O = /* @__PURE__ */ m({
	name: "D1Dialog",
	__name: "D1Dialog",
	props: /* @__PURE__ */ g({
		disabled: { type: Boolean },
		autoClose: { type: Boolean },
		windowAttrs: {},
		barsLabel: {},
		barsDescription: {},
		barsBackHide: { type: Boolean },
		barsHide: { type: Boolean },
		barsList: {},
		barsAttrs: {},
		actionsHide: { type: Boolean },
		actionsList: {},
		actionsSecondary: {},
		actionsAttrs: {},
		image: {},
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
		textClose: { type: [String, Function] },
		textOk: { type: [String, Function] },
		open: { type: Boolean },
		icon: {},
		buttonOk: {},
		buttonClose: {},
		closeButton: { type: Boolean },
		clickOkAndClose: { type: Boolean },
		iconSuccess: {},
		iconError: {},
		iconAttrs: {},
		success: { type: Boolean },
		error: { type: Boolean },
		imagePosition: {},
		width: {}
	}, D),
	emits: [
		"window",
		"bars",
		"barsLite",
		"barsBack",
		"actions",
		"actionsLite",
		"ok",
		"close"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, a = new T("d1.dialog", i, {
			emits: r,
			classes: f(() => ({ main: {
				"d1-dialog": !0,
				"d1-dialog--success": i.success,
				"d1-dialog--error": i.error,
				[`d1-dialog--imagePosition--${i.imagePosition}`]: x(E.imagePosition, i.imagePosition),
				[`d1-dialog--width--${i.width}`]: x(E.width, i.width)
			} })),
			styles: f(() => ({})),
			components: {
				window: d,
				bars: u,
				actions: s,
				icon: c
			}
		}), o = a.render();
		return t(a.expose()), (e, t) => (_(), p(y(o)));
	}
});
//#endregion
export { O as t };
