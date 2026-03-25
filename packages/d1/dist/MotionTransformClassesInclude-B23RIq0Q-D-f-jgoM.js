import { computed as e } from "vue";
import { getElementId as t } from "@dxtmisha/functional";
//#region ../constructor/dist/MotionTransformClassesInclude-B23RIq0Q.js
var n = Object.defineProperty, r = (e, t, r) => t in e ? n(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r
}) : e[t] = r, i = (e, t, n) => r(e, typeof t == "symbol" ? t : t + "", n), a = class n {
	constructor(r, a, o, s) {
		i(this, "id", t()), i(this, "idControl", `${this.id}-control`), i(this, "idBody", `${this.id}-body`), i(this, "classes"), i(this, "style"), i(this, "is", e(() => !!this.element.value)), this.props = r, this.element = a, this.elementContext = o, this.className = s, this.classes = n.getClassesList(s), this.style = {
			top: `--${this.className}-sys-top`,
			left: `--${this.className}-sys-left`,
			height: `--${this.className}-sys-height`,
			scale: `--${this.className}-sys-scale`,
			contextWidth: `--${this.className}-sys-context-width`,
			contextHeight: `--${this.className}-sys-context-height`,
			headWidth: `--${this.className}-sys-head-width`,
			headHeight: `--${this.className}-sys-head-height`,
			headScale: `--${this.className}-sys-head-scale`,
			bodyHeight: `--${this.className}-sys-body-height`
		};
	}
	isClick(e) {
		return !!(e.closest(`.${this.classes.click}`) || !e.closest(`.${this.classes.none}`));
	}
	isClickGlobal(e) {
		return !e.closest(`.${this.classes.noneGlobal}`);
	}
	isClose(e) {
		return !!e.closest(`${this.getId()} .${this.classes.close}`);
	}
	isOutside(e) {
		return !e.closest(this.getId());
	}
	isIgnore(e) {
		return !(this.props.ignore && e.closest(t(this.props.ignore, ""))) && !(this.props.ignoreSelector && e.closest(this.props.ignoreSelector));
	}
	isAnimation() {
		return !!(this.elementContext.value && this.props.animationShow);
	}
	isWindow() {
		return !!(this.element.value && getComputedStyle(this.element.value).getPropertyValue("--sys-type-body") === "\"--WINDOW--\"");
	}
	isSection() {
		return !!this.props.section;
	}
	getElement() {
		return this.element.value;
	}
	getElementContext() {
		return this.elementContext.value;
	}
	getElementHead() {
		var e;
		return ((e = this.getElement()) == null ? void 0 : e.querySelector(`.${this.className}__head`)) || void 0;
	}
	getElementBody() {
		var e;
		return ((e = this.getElement()) == null ? void 0 : e.querySelector(`.${this.className}__body`)) || void 0;
	}
	getId() {
		return `#${t(this.element.value)}`;
	}
	getRect() {
		var e;
		return (e = this.getElementContext()) == null ? void 0 : e.getBoundingClientRect();
	}
	static getClassesList(e) {
		return {
			show: `${e}--show`,
			open: `${e}--open`,
			window: `${e}--window`,
			click: `${e}--click`,
			close: `${e}--close`,
			none: `${e}--none`,
			noneGlobal: `${e}--noneGlobal`
		};
	}
	static getClassesListByDesign(e) {
		return this.getClassesList(`${e}-motionTransform`);
	}
}, o = class {
	constructor(e) {
		this.design = e;
	}
	get() {
		return a.getClassesListByDesign(this.design);
	}
	getObject() {
		return { classesMotionTransform: this.get() };
	}
};
//#endregion
export { a as n, o as t };
