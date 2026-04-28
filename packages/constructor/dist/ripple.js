import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./RippleInclude-BAN_mvA_.js";
import { h as r } from "vue";
import { DesignConstructorAbstract as i, createElement as a } from "@dxtmisha/functional";
//#region src/constructors/Ripple/RippleItem.ts
var o = class {
	constructor(e, n, r) {
		t(this, "classItem", void 0), t(this, "classEnd", void 0), t(this, "styleX", void 0), t(this, "styleY", void 0), this.props = e, this.element = n, this.className = r, this.classItem = `${this.className}__item`, this.classEnd = `${this.className}--end`, this.styleX = `--${this.className}-sys-x`, this.styleY = `--${this.className}-sys-y`;
	}
	add(e, t) {
		var n;
		if ((n = this.props) != null && n.disabled) return;
		let r = this.element.value;
		r && a(r, "span", (n) => {
			n.onanimationend = () => n.classList.add(this.classEnd), n.ontransitionend = () => {
				var e;
				return (e = n.parentElement) == null ? void 0 : e.removeChild(n);
			}, n.style.setProperty(this.styleX, `${e}px`), n.style.setProperty(this.styleY, `${t}px`), n.classList.add(this.classItem);
		});
	}
}, s = class {
	constructor(e, n, r, i, a, s, c, l) {
		t(this, "item", void 0), t(this, "onClick", (e) => this.item.add(e.offsetX, e.offsetY)), this.props = e, this.refs = n, this.element = r, this.className = i, this.components = a, this.slots = s, this.emits = c;
		let { RippleItemConstructor: u = o } = l == null ? {} : l;
		this.item = new u(e, r, i);
	}
}, c = {}, l = class extends i {
	constructor(e, n, r, i = s) {
		super(e, n, r), t(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: {},
			item: this.getSubClass("item")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var t;
		return r("span", {
			ref: this.element,
			key: "ripple",
			class: (t = this.classes) == null ? void 0 : t.value.main,
			onPointerdown: this.item.onClick,
			...e.hidden()
		});
	}
};
//#endregion
export { s as Ripple, l as RippleDesign, n as RippleInclude, o as RippleItem, c as defaultsRipple };
