import { n as e, t } from "./storybookTypes-RNr8gPGw.js";
import { t as n } from "./defineProperty-DblGXmzD.js";
import { Geo as r, forEach as i, isArray as a, isObjectNotArray as o, toCamelCase as s } from "@dxtmisha/functional";
import { isString as c, toKebabCase as l } from "@dxtmisha/functional-basic";
//#region src/classes/WikiStorybookItem.ts
var u = class {
	constructor(e, t) {
		this.name = e, this.item = t;
	}
	isHide() {
		return this.item.hide === !0;
	}
	isDemo() {
		return this.item.isDemo === !0;
	}
	getName() {
		return this.name;
	}
	getValue() {
		return this.item.options.value;
	}
	getOrder() {
		if (this.item.options.order) return this.item.options.order;
		switch (this.item.options.category) {
			case t.status: return 3e3;
			case t.value: return 5e3;
			case t.information: return 5100;
			case t.actions: return 5200;
			case t.icon: return 5200;
			case t.bars: return 5200;
			case t.counter: return 5200;
			case t.mask: return 5200;
			case t.form: return 6e3;
			case t.arrow: return 6900;
			case t.hook: return 7e3;
			case t.style: return 9e3;
			case t.option: return 9100;
			case t.attributes: return 9700;
			case t.text: return 9800;
			case t.aria: return 9900;
			default: return 9999;
		}
	}
	to() {
		switch (this.item.type) {
			case e.text:
			case e.string: return this.toString();
			case e.number: return this.toNumber();
			case e.boolean: return this.toBoolean();
			case e.select: return this.toSelect();
			case e.object:
			case e.array: return this.toObject();
		}
	}
	getDemo() {
		return this.isDemo() ? {
			isDemo: !0,
			demo: this.getDemoValue(),
			demoOptions: this.item.demoOptions,
			hide: this.item.hide
		} : { hide: this.item.hide };
	}
	getDemoValue() {
		if (this.item.demo) return this.item.demo;
		if (this.item.type === e.boolean) return !0;
	}
	getCategory() {
		let e = this.item.options.category;
		return e ? { category: e } : {};
	}
	getDefaultValue() {
		let e = this.item.options.type, t = this.item.options.defaultValue, n;
		if (t !== void 0) switch (typeof t) {
			case "boolean":
				n = t ? "true" : "false";
				break;
			default:
				n = String(t);
				break;
		}
		else e === "boolean" && (n = "false");
		return n ? { defaultValue: { summary: n } } : {};
	}
	getDescription() {
		let e = r.getLanguage(), t = this.item.options.description, n;
		return typeof t == "string" ? n = t : o(t) && e in t && (n = t[e]), n ? { description: n } : {};
	}
	getType() {
		let t = this.item.options.type, n = this.item.options.options, r;
		if (n) a(n) ? r = n.join(" | ") : o(n) && (r = Object.keys(n).join(" | "));
		else if (t) r = a(t) ? t.join(" | ") : t;
		else switch (this.item.type) {
			case e.select:
				r = String(e.object);
				break;
			case e.text:
				r = String(e.string);
				break;
			default: r = String(this.item.type);
		}
		return r ? { type: { summary: r } } : {};
	}
	toBoolean() {
		return {
			control: e.boolean,
			table: {
				...this.getCategory(),
				...this.getDefaultValue(),
				...this.getType()
			},
			...this.getDescription(),
			...this.getDemo()
		};
	}
	toNumber() {
		let t = this.item.options, n = { type: e.number }, r = {
			...this.getCategory(),
			...this.getDefaultValue(),
			...this.getType()
		};
		return "min" in t && (n.min = t.min), "max" in t && (n.min = t.max), {
			control: n,
			table: r,
			...this.getDescription(),
			...this.getDemo()
		};
	}
	toObject() {
		return {
			control: e.object,
			table: {
				...this.getCategory(),
				...this.getType()
			},
			...this.getDescription(),
			...this.getDemo()
		};
	}
	toSelect() {
		return {
			control: e.select,
			options: this.item.options.options,
			table: {
				...this.getCategory(),
				...this.getDefaultValue(),
				...this.getType()
			},
			...this.getDescription(),
			...this.getDemo()
		};
	}
	toString() {
		return {
			control: e.text,
			table: {
				...this.getCategory(),
				...this.getDefaultValue(),
				...this.getType()
			},
			...this.getDescription(),
			...this.getDemo()
		};
	}
}, d = class {
	constructor(e, t) {
		this.name = e, this.item = t;
	}
	isHide() {
		return this.item.hide === !0;
	}
	isDemo() {
		return this.item.isDemo === !0;
	}
	get() {
		return this.item;
	}
	getName() {
		return l(this.name);
	}
	getDefaultValue() {
		var e;
		return (e = this.item) == null || (e = e.table) == null || (e = e.defaultValue) == null ? void 0 : e.summary;
	}
	getType() {
		var t, n, r;
		return !((t = this.item) == null || (t = t.table) == null || (t = t.type) == null) && t.summary ? this.item.table.type.summary : c(this.item.control) ? this.item.control : (n = (r = this.item.control) == null ? void 0 : r.type) == null ? e.string : n;
	}
	getDescription() {
		var e;
		return (e = this.item.description) == null ? "" : e;
	}
	getOptions() {
		return this.item.options;
	}
	getDemo() {
		return this.item.demo;
	}
	getDemoOptions() {
		var e;
		return (e = this.item.demoOptions) == null ? {} : e;
	}
}, f = class {
	constructor(e, t, r, i = {}, a = {}, o = []) {
		n(this, "list", void 0), this.component = e, this.props = t, this.defaults = r, this.wikiDesign = i, this.wikiBasic = a, this.wikiDescriptions = o, this.list = this.initList();
	}
	getName() {
		return this.component;
	}
	getWiki() {
		return this.initPropsWiki();
	}
	getWikiObject() {
		return i(this.getWiki(), (e, t) => {
			if (e) return new d(t, e);
		});
	}
	getDescription() {
		var e;
		return this.toDescriptionText((e = this.getDescriptionItem()) == null ? void 0 : e.description);
	}
	getPossibilities() {
		var e;
		return this.toPossibilitiesText((e = this.getDescriptionItem()) == null ? void 0 : e.possibilities);
	}
	getValues() {
		let e = {};
		return this.list.forEach((t) => {
			e[t.getName()] = t.getValue();
		}), e;
	}
	getFilteredValues() {
		let e = {};
		return i(this.getValues(), (t, n) => {
			t !== void 0 && (e[n] = t);
		}), e;
	}
	getStoryItem(e) {
		let t = this.getDescriptionItem();
		if (t && t.stories) return t.stories.find((t) => t.id === e);
	}
	getStoryName(e) {
		var t;
		return this.toDescriptionText((t = this.getStoryItem(e)) == null ? void 0 : t.name);
	}
	getAiRender() {
		var e;
		return (e = this.getDescriptionItem()) == null || (e = e.ai) == null ? void 0 : e.render;
	}
	getAiDescription() {
		var e;
		return (e = this.getDescriptionItem()) == null || (e = e.ai) == null ? void 0 : e.description;
	}
	getAiHide() {
		var e, t;
		return (e = (t = this.getDescriptionItem()) == null || (t = t.ai) == null ? void 0 : t.hide) == null ? !1 : e;
	}
	getWikiItem(e) {
		if (e in this.wikiBasic || e in this.wikiDesign) {
			var t, n, r, i;
			return {
				...(t = (n = this.wikiBasic) == null ? void 0 : n[e]) == null ? {} : t,
				...(r = (i = this.wikiDesign) == null ? void 0 : i[e]) == null ? {} : r
			};
		}
	}
	getDescriptionItem() {
		return this.wikiDescriptions.find((e) => e.name === this.component);
	}
	toWikiItemChanged(e, t) {
		var n, r, i, a, o;
		return {
			...t,
			options: {
				...t.options,
				type: (n = (r = t.options) == null ? void 0 : r.type) == null ? e.type : n,
				defaultValue: this.defaults[e.name],
				options: (i = (a = e.option) == null ? (o = t.options) == null ? void 0 : o.options : a) == null ? void 0 : i
			}
		};
	}
	toDescriptionText(e) {
		if (e) {
			let i = r.getLanguage();
			if (o(e)) {
				var t, n;
				return String((t = e == null ? void 0 : e[i]) == null ? (n = Object.values(e)) == null ? void 0 : n[0] : t);
			}
			return e;
		}
		return "";
	}
	toPossibilitiesText(e) {
		if (e) {
			let a = r.getLanguage();
			if (o(e)) {
				var t, n, i;
				return (t = (n = e == null ? void 0 : e[a]) == null ? (i = Object.values(e)) == null ? void 0 : i[0] : n) == null ? [] : t;
			}
			return e;
		}
		return [];
	}
	initList() {
		let e = [];
		return this.props.forEach((t) => {
			var n;
			let r = `${s(this.component)}.${t.name}`, i = (n = this.getWikiItem(r)) == null ? this.getWikiItem(t.name) : n;
			i ? e.push(new u(t.name, this.toWikiItemChanged(t, i))) : console.error(`[WikiStorybook] ${t.name} not found`);
		}), e.sort((e, t) => {
			let n = e.getOrder(), r = t.getOrder();
			return n === r ? e.getName() > t.getName() ? 1 : -1 : n > r ? 1 : -1;
		}), e;
	}
	initPropsWiki() {
		let e = {};
		return this.list.forEach((t) => {
			e[t.getName()] = t.to();
		}), e;
	}
};
//#endregion
export { t as StorybookCategory, e as StorybookControl, f as WikiStorybook, u as WikiStorybookItem, d as WikiStorybookProp };
