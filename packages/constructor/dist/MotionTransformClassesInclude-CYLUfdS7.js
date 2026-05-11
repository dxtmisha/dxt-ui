import { t as e } from "./defineProperty-3CuEayIP.js";
import { computed as t } from "vue";
import { getElementId as n } from "@dxtmisha/functional";
//#region src/constructors/MotionTransform/basicTypes.ts
var r = "--sys-type-body", i = class r {
	constructor(i, a, o, s) {
		e(this, "id", n()), e(this, "idControl", `${this.id}-control`), e(this, "idBody", `${this.id}-body`), e(this, "classes", void 0), e(this, "style", void 0), e(this, "is", t(() => !!this.element.value)), this.props = i, this.element = a, this.elementContext = o, this.className = s, this.classes = r.getClassesList(s), this.style = {
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
		return !(this.props.ignore && e.closest(n(this.props.ignore, ""))) && !(this.props.ignoreSelector && e.closest(this.props.ignoreSelector));
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
		return `#${n(this.element.value)}`;
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
}, a = class {
	constructor(e) {
		this.design = e;
	}
	get() {
		return i.getClassesListByDesign(this.design);
	}
	getObject() {
		return { classesMotionTransform: this.get() };
	}
};
//#endregion
export { i as n, r, a as t };
