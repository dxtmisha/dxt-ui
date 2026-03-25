import { t as e } from "./LabelInclude-D-mLvjK5-BFCcbjFo.js";
import { t } from "./DescriptionInclude-D4ane9aR-o7gRirw3.js";
import { t as n } from "./IconInclude-CLqwI29Q-CYtp8tgy.js";
import { t as r } from "./TextInclude--GERRCGj-Dh1vBGhP.js";
import { t as i } from "./Bars-4aLg7pr8.js";
import { t as a } from "./Actions-BOdB5iOT.js";
import { t as o } from "./Window-9iCpMfYB.js";
import { n as s, t as c } from "./ModalDesignAbstract-CdF7kXxe-4727Mwk8.js";
import { i as l } from "./WindowClassesInclude-B56usxgx-lf4DY4p9.js";
import { t as u } from "./Icon-9c2pxWjK.js";
import { computed as d, createBlock as f, defineComponent as p, h as m, mergeDefaults as h, openBlock as g, readonly as _, unref as v } from "vue";
import { getBind as y, inArray as b, toBinds as x } from "@dxtmisha/functional";
//#region ../constructor/dist/dialog.js
var S = Object.defineProperty, C = (e, t, n) => t in e ? S(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, w = (e, t, n) => C(e, typeof t == "symbol" ? t : t + "", n), T = class extends c {
	constructor(i, a, o, s, c, u, f, p, m) {
		let { DescriptionIncludeConstructor: h = t, IconIncludeConstructor: g = n, LabelIncludeConstructor: v = e, TextIncludeConstructor: b = r, WindowClassesIncludeConstructor: x = l } = m == null ? {} : m;
		super(i, a, o, s, c, u, f, p, d(() => ({
			open: i.open,
			image: i.image,
			adaptive: "modal",
			imagePosition: i.imagePosition,
			closeButton: this.props.closeButton
		})), void 0, d(() => {
			let e = [];
			return i.buttonClose !== null && e.push(y(i.buttonClose, {
				label: this.text.close.value,
				value: "close",
				class: this.windowClasses.get().close,
				onClick: () => {
					var e;
					return (e = this.emits) == null ? void 0 : e.call(this, "close");
				}
			}, "label", !0)), i.buttonOk !== null && e.push(y(i.buttonOk, {
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
		})), w(this, "icon"), w(this, "label"), w(this, "description"), w(this, "windowClasses"), w(this, "text"), w(this, "iconValue", d(() => this.props.success ? this.props.iconSuccess : this.props.error ? this.props.iconError : this.props.icon)), this.props = i, this.refs = a, this.element = o, this.classDesign = s, this.className = c, this.components = u, this.slots = f, this.emits = p, this.icon = new g(_({ icon: this.iconValue }), c, u, a.iconAttrs), this.label = new v(i, c, void 0, f, void 0, void 0, !0), this.description = new h(i, c, f), this.windowClasses = new x(s), this.text = new b(this.props);
	}
}, E = {
	barsBackHide: !0,
	barsHide: !0,
	clickOkAndClose: !0,
	imagePosition: "top"
}, D = class extends s {
	constructor() {
		super(...arguments), w(this, "renderContent", (e) => [...this.renderInformation(), ...this.renderDefault(e)]), w(this, "renderInformation", () => {
			var e;
			return [m("div", { class: (e = this.classes) == null ? void 0 : e.value.information }, [
				...this.item.icon.renderIcon(),
				...this.item.label.render(),
				...this.item.description.render()
			])];
		});
	}
	initItem() {
		return new T(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits);
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
		}, x({
			class: (e = this.classes) == null ? void 0 : e.value.main,
			"data-touch": "touch"
		}, this.getAttrs()));
	}
}, O = {
	imagePosition: ["top", "left"],
	width: [
		"sm",
		"md",
		"lg",
		"auto"
	]
}, k = {
	...E,
	buttonClose: { outline: !0 },
	iconSuccess: "check_circle",
	iconError: "error",
	iconAttrs: { size: "3xl" },
	imagePosition: "top",
	width: "md"
}, A = /* @__PURE__ */ p({
	name: "D1Dialog",
	__name: "D1Dialog",
	props: /* @__PURE__ */ h({
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
	}, k),
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
		let r = n, s = e, c = new D("d1.dialog", s, {
			emits: r,
			classes: d(() => ({ main: {
				"d1-dialog": !0,
				"d1-dialog--success": s.success,
				"d1-dialog--error": s.error,
				[`d1-dialog--imagePosition--${s.imagePosition}`]: b(O.imagePosition, s.imagePosition),
				[`d1-dialog--width--${s.width}`]: b(O.width, s.width)
			} })),
			styles: d(() => ({})),
			components: {
				window: o,
				bars: i,
				actions: a,
				icon: u
			}
		}), l = c.render();
		return t(c.expose()), (e, t) => (g(), f(v(l)));
	}
});
//#endregion
export { A as t };
