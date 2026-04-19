import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { componentsList as t, componentsReg as n, packageName as r, styleVarsReg as i } from "./design.js";
import { isFilled as a } from "@dxtmisha/functional";
import { toCamelCase as o, toKebabCase as s } from "@dxtmisha/functional-basic";
//#region ../constructor/dist/Plugin-D89XKCrg.js
var c = class {
	static isSrc(e) {
		return !!(e.match(/\/src\//i) && !e.match(/\/node_modules\//i));
	}
	static isJs(e) {
		return this.isSrc(e) && !!e.match(/\.ts|js|tsx/);
	}
	static isVue(e) {
		return this.isSrc(e) && !!e.match(/\.vue$/);
	}
	static isCss(e) {
		return this.isSrc(e) && !!e.match(/\.(css|sass|scss)/);
	}
	static isDev(e) {
		return e === "development";
	}
}, l = class {
	constructor(t, n) {
		e(this, "newCode", void 0), this.id = t, this.code = n, this.newCode = n;
	}
	isVue() {
		return c.isVue(this.id);
	}
	isScss() {
		return c.isCss(this.id);
	}
	get() {
		return this.newCode;
	}
	getId() {
		return this.id;
	}
	getCode() {
		return this.code;
	}
	has(e, t = "i") {
		return typeof e == "string" ? this.code.includes(e) : new RegExp(e, t).test(this.code);
	}
	addAfterScript(e) {
		let t = /(<script[^>]*\bsetup\b[^>]*>)/;
		return this.code.match(t) ? this.newCode = this.newCode.replace(t, `$1${e}`) : this.newCode = `<script setup>\r\n${e}<\/script>${this.newCode}`, this;
	}
	addStart(e) {
		return this.newCode = `${e}${this.newCode}`, this;
	}
	addStartIfNone(e, t) {
		return this.has(t == null ? e : t) || this.addStart(e), this;
	}
	replace(e, t) {
		return this.newCode = this.newCode.replace(e, t), this;
	}
}, u = /* @__PURE__ */ "flex-position.flex-dynamic.justify-content.inset.horizon.vertically.left.right.absolute.absolute-top.absolute-bottom.absolute-after.padding-x.padding-y.padding-left.padding-right.margin-x.margin-y.margin-left.margin-right.width.height.width-basis.height-basis.aspect-ratio.aspect-ratio-width.aspect-ratio-height.squared.circle.font-size.line-height.text-align.text-overflow.clamp.text-select-none.text-case.paragraph-spacing.palette.palette-var.palette-color.palette-stroke.palette-background.palette-fill.palette-gradient.palette-border.color.color-opacity.stroke.stroke-opacity.background-color.background-opacity.background-size.fill.fill-opacity.gradient.gradient-opacity.border-color.border-opacity.translate-x.translate-y.scale.rotate".split("."), d = class {
	constructor(t, n, r, i, a) {
		e(this, "styleModification", void 0), this.design = t, this.packageName = n, this.componentsReg = r, this.styleVarsReg = i, this.componentsList = a, this.styleModification = this.initStyleModification();
	}
	hasComponent(e) {
		return !!e.match(new RegExp(this.componentsReg, "i"));
	}
	hasVars(e) {
		return !!e.match(new RegExp(this.styleVarsReg, "i"));
	}
	getDesign() {
		return this.design;
	}
	getPackageName() {
		return this.packageName;
	}
	getComponents(e) {
		let t = e.match(this.componentsReg), n = [];
		return t && t.forEach((t) => {
			let r = this.findComponent(t.trim());
			r && !n.find((e) => e.name === r.name) && !e.match(`${this.getPackageName()}/${r.name}`) && n.push(r);
		}), n;
	}
	getStyleVarsReg() {
		return this.styleVarsReg;
	}
	getStyleModification() {
		return this.styleModification;
	}
	findComponent(e) {
		return this.componentsList.find((t) => t.name === e || !!e.match(new RegExp(t.reg, "i")));
	}
	initStyleModification() {
		let e = {};
		return u.forEach((t) => {
			e[s(t)] = o(t);
		}), e;
	}
}, f = class {
	constructor(t, n) {
		e(this, "code", void 0), this.packageName = t, this.code = n;
	}
	get() {
		return this.code;
	}
	importStyle() {
		return this.makeImport("style.css"), this;
	}
	makeImport(e) {
		let t = `${this.packageName}/${e}`;
		this.code.includes(t) || (this.code = `import '${t}';${this.code}`);
	}
}, p = class {
	constructor(e, t) {
		this.code = e, this.pluginData = t;
	}
	make() {
		if (this.code.isVue() && this.pluginData.hasComponent(this.code.getCode())) {
			let e = this.pluginData.getComponents(this.code.getCode());
			if (e && e.length > 0) {
				let t = e.map((e) => this.importComponent(e)).join("\r\n");
				this.code.addAfterScript(t);
			}
		}
	}
	getPath(e) {
		return `${this.pluginData.getPackageName()}/${e.name}`;
	}
	importComponent(e) {
		return `import { ${e.name} } from'${this.getPath(e)}';`;
	}
}, m = class {
	constructor(e, t) {
		this.code = e, this.data = t;
	}
	make() {
		return this.is() && this.importDesign().makeColors().makeVars().makeProperties(), this;
	}
	is() {
		return this.code.isScss() && a(this.code.getCode()) && !this.code.has(this.getIgnoreComment());
	}
	getIgnoreComment() {
		return `// ${this.data.getDesign()}-css-ignore`;
	}
	getPropertiesNone() {
		return `(?![^\r\n]*// ${this.data.getDesign()}-mode-none)`;
	}
	getModificationRef() {
		let e = this.data.getStyleModification();
		return RegExp(`(?<=^\\s*)(${Object.keys(e).join("|")}):([^;\r\n]+)(;*)${this.getPropertiesNone()}`, "igm");
	}
	importDesign() {
		let e = `${this.data.getPackageName()}/ui-properties`, t = `@use '${e}' as *;`;
		return this.code.addStartIfNone(t, e), this;
	}
	makeColors() {
		let e = RegExp(`(?<=var\\([^,]+), ?(#[0-9abcdf]{4,6}|rgba?\\([^)]+\\))${this.getPropertiesNone()}`, "ig");
		return this.code.has(e) && this.code.replace(e, ""), this;
	}
	makeVars() {
		let e = this.data.getStyleVarsReg();
		return this.code.has(e) && this.code.replace(e, `${this.data.getDesign()}-$1`), this;
	}
	makeProperties() {
		let e = this.data.getStyleModification(), t = this.getModificationRef();
		return this.code.has(t, "im") && this.code.replace(t, (t, n, r, i) => {
			let a = r.trim();
			return `@include ${e == null ? void 0 : e[n.trim()]}(${a.match(/[()]/) ? `#{${a}}` : a})${i}`;
		}), this;
	}
}, h = class {
	constructor(t, n, r, i, a, o = "vite-plugin-design-ui", s = {}) {
		e(this, "data", void 0), e(this, "first", !0), e(this, "mode", "production"), this.design = t, this.packageName = n, this.componentsReg = r, this.styleVarsReg = i, this.componentsList = a, this.name = o, this.options = s, this.data = new d(t, n, r, i, a);
	}
	init() {
		var e;
		return {
			name: this.name,
			enforce: "pre",
			apply: (e, t) => (this.mode = t.mode, !0),
			transform: (e, t) => this.transform(e, t),
			...(e = this.options) == null ? void 0 : e.viteOptions
		};
	}
	isComponents() {
		var e, t;
		return !!((e = (t = this.options) == null ? void 0 : t.component) == null || e);
	}
	isStyles() {
		var e, t;
		return !!((e = (t = this.options) == null ? void 0 : t.style) == null || e);
	}
	transform(e, t) {
		this.first && c.isJs(t) && (e = this.initMain(e), this.first = !1);
		let n = new l(t, e);
		return this.makeComponents(n), this.initStyles(n), { code: n.get() };
	}
	initMain(e) {
		let t = new f(this.packageName, e);
		return t.importStyle(), t.get();
	}
	makeComponents(e) {
		return this.isComponents() && new p(e, this.data).make(), this;
	}
	initStyles(e) {
		return this.isStyles() && new m(e, this.data).make(), this;
	}
};
//#endregion
//#region src/library/plugin.ts
function g(e = {}) {
	return new h("d1", r, n, i, t, "vite-plugin-d1-ui", e).init();
}
//#endregion
export { g as uiD1VitePlugin };
