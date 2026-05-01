import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./ListGroupOpen-CPFBGdVV.js";
import { h as r } from "vue";
import { DesignConstructorAbstract as i } from "@dxtmisha/functional";
//#region src/constructors/ListGroup/ListGroup.ts
var a = class {
	constructor(e, r, i, a, o, s, c, l, u) {
		t(this, "open", void 0), t(this, "transformBinds", () => ({
			autoClose: !1,
			section: !0,
			adaptive: "planeAlways",
			onTransformLite: this.open.onOpen
		})), this.props = e, this.refs = r, this.element = i, this.classDesign = a, this.className = o, this.components = s, this.slots = c, this.emits = l;
		let { ListGroupOpenConstructor: d = n } = u == null ? {} : u;
		this.open = new d(this.props);
	}
}, o = {}, s = class extends i {
	constructor(e, n, i, o = a) {
		super(e, n, i), t(this, "item", void 0), t(this, "renderTransform", () => this.components.render("motionTransform", {
			...this.item.transformBinds(),
			open: this.item.open.is.value
		}, {
			head: this.renderHead,
			body: this.renderList
		})), t(this, "renderHead", (e) => {
			var t;
			return r("div", { class: (t = this.classes) == null ? void 0 : t.value.head }, this.initSlot("head", void 0, {
				open: this.item.open.is.value,
				...e.binds
			}));
		}), t(this, "renderList", () => {
			var e;
			return r("div", { class: (e = this.classes) == null ? void 0 : e.value.list }, this.initSlot("list"));
		}), this.item = new o(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { open: this.item.open.is };
	}
	initClasses() {
		return {
			main: {},
			head: this.getSubClass("head"),
			list: this.getSubClass("list")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var t;
		return r("div", {
			...this.getAttrs(),
			class: (t = this.classes) == null ? void 0 : t.value.main,
			"data-open": this.item.open.is.value ? "open" : "close",
			"data-divider": this.props.divider ? "divider" : void 0,
			...e.role("group")
		}, this.renderTransform());
	}
};
//#endregion
export { a as ListGroup, s as ListGroupDesign, n as ListGroupOpen, o as defaultsListGroup };
