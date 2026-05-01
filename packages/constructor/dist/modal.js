import { n as e, r as t, t as n } from "./ModalDesignAbstract-UBBS7nvU.js";
import { computed as r } from "vue";
import "@dxtmisha/functional";
//#region src/constructors/Modal/Modal.ts
var i = class extends t {
	constructor(e, t, n, i, a, o, s, c, l) {
		super(e, t, n, i, a, o, s, c, r(() => ({
			open: e.open,
			image: e.image,
			adaptive: "modal",
			imagePosition: e.imagePosition,
			closeButton: e.barsBackHide
		})), void 0, void 0, l), this.props = e, this.refs = t, this.element = n, this.classDesign = i, this.className = a, this.components = o, this.slots = s, this.emits = c;
	}
}, a = class extends n {
	initItem(e) {
		return new (e == null ? i : e)(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits);
	}
	initClasses() {
		return {
			main: {},
			title: this.getSubClass("title"),
			header: this.getSubClass("header"),
			body: this.getSubClass("body"),
			footer: this.getSubClass("footer")
		};
	}
};
//#endregion
export { i as Modal, t as ModalAbstract, a as ModalDesign, n as ModalDesignAbstract, e as defaultsModal };
