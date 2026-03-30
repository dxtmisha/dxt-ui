import { executeFunction as e, forEach as t, isNull as n } from "@dxtmisha/functional-basic";
import { FigmaPostAbstract as r, FigmaPostCode as i, UI_FIGMA_FRAMES_POST_NAME as a, UI_FIGMA_FRAMES_SELECTED_ADD_NAME as o, UI_FIGMA_FRAMES_SELECTED_POST_NAME as s } from "@dxtmisha/figma";
//#region src/classes/FigmaItem.ts
var c = class e {
	constructor(e) {
		this.item = e;
	}
	isDocument() {
		return this.getType() === "DOCUMENT";
	}
	isFrame() {
		return this.getType() === "FRAME";
	}
	isSection() {
		return this.getType() === "SECTION";
	}
	isText() {
		return this.getType() === "TEXT";
	}
	isTextNoValue() {
		if (this.isText()) {
			let e = this.getText();
			return !(e === "" || e.match(/^[\d., ]+(|[^ ]{1,3})$/));
		}
		return !1;
	}
	get() {
		return this.item;
	}
	getType() {
		if ("type" in this.item) return this.item.type;
	}
	getParent() {
		if ("parent" in this.item) {
			var e;
			return (e = this.item.parent) == null ? void 0 : e;
		}
	}
	getParentItem() {
		let t = this.getParent();
		if (t) return new e(t);
	}
	getChildren() {
		return "children" in this.item ? this.item.children : [];
	}
	getChildrenItems() {
		let t = [];
		for (let n of this.getChildren()) t.push(new e(n));
		return t;
	}
	getId() {
		return "id" in this.item ? this.item.id : "";
	}
	getName() {
		return "name" in this.item ? this.item.name : this.getId();
	}
	async exportJpg() {
		return await this.exportItem("JPG");
	}
	async exportJson() {
		return await this.exportItem("JSON_REST_V1");
	}
	getText() {
		return this.isText() ? this.item.characters.trim() : "";
	}
	getExportSettings(e) {
		switch (e) {
			case "JSON_REST_V1":
			case "JPG":
			case "PNG":
			case "SVG":
			case "PDF": return { format: e };
			default: return e;
		}
	}
	async exportItem(e) {
		return "exportAsync" in this.item ? await this.item.exportAsync(this.getExportSettings(e)) : "";
	}
};
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/typeof.js
function l(e) {
	"@babel/helpers - typeof";
	return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, l(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPrimitive.js
function u(e, t) {
	if (l(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (l(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPropertyKey.js
function d(e) {
	var t = u(e, "string");
	return l(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/defineProperty.js
function f(e, t, n) {
	return (t = d(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/FigmaFrame.ts
var p = class {
	constructor(e, t = !1) {
		f(this, "mainItem", []), f(this, "items", []), this.page = e, this.selection = t, this.mainItem = this.initMain(), this.items = this.initBySelection();
	}
	isSelection() {
		return this.selection && "selection" in this.page;
	}
	getItemsFrame() {
		return this.filter((e) => e.isFrame());
	}
	getItemsSection() {
		return this.filter((e) => e.isSection());
	}
	getItemsText() {
		return this.filter((e) => e.isText());
	}
	getMainFrames() {
		let e = this.toMain();
		return e ? e.getChildrenItems().filter((e) => e.isFrame() || e.isSection()) : [];
	}
	getTexts() {
		let e = [];
		return this.filter((e) => e.isTextNoValue()).forEach((t) => {
			let n = t.getText(), r = e.find((e) => e.text === n);
			r ? r.id.push(t.getId()) : e.push({
				id: [t.getId()],
				text: n
			});
		}), e;
	}
	async screenshot() {
		let e = [];
		for (let t of this.mainItem) e.push(await t.exportJpg());
		return e;
	}
	initMain() {
		return this.isSelection() ? t([...this.page.selection], (e) => new c(e)) : [new c(this.page)];
	}
	initItems(e) {
		let t = [];
		if ("children" in e) for (let n of e.children) t.push(new c(n), ...this.initItems(n));
		return t;
	}
	initBySelection() {
		if (this.isSelection()) {
			let e = [];
			for (let t of this.page.selection) e.push(...this.initItems(t));
			return e;
		}
		return this.initItems(this.page);
	}
	filter(e) {
		return this.items.filter(e);
	}
	toMain(e = new c(this.page)) {
		let t = e.getParentItem();
		return t && !t.isDocument() ? this.toMain(t) : e;
	}
}, m = class extends r {
	post(e, t) {
		figma.ui.postMessage({
			code: i.get(),
			type: e,
			message: t
		});
	}
	prepare() {
		figma.ui.onmessage = (e) => this.onMessage(e);
	}
}, h;
function g() {
	return h || (h = new m(), h.make()), h;
}
//#endregion
//#region src/classes/FigmaStorage.ts
var _ = class {
	constructor(e, t = figma.root, n) {
		f(this, "value", void 0), f(this, "age", void 0), this.name = e, this.item = t, this.cache = n;
	}
	get(e) {
		if (this.make(), this.value !== void 0 && this.isCache()) return this.value;
		if (e !== void 0) return this.set(e);
	}
	getName() {
		return this.name;
	}
	set(t) {
		return this.value = e(t), this.age = this.getTime(), this.value === void 0 ? this.remove() : this.item.setPluginData(this.getName(), this.toValue()), this.value;
	}
	remove() {
		return this.value = void 0, this.age = void 0, this.item.setPluginData(this.getName(), ""), this;
	}
	isCache() {
		return n(this.cache) || this.age && this.age + this.cache * 1e3 >= this.getTime();
	}
	getTime() {
		return (/* @__PURE__ */ new Date()).getTime();
	}
	getValue() {
		let e = this.item.getPluginData(this.getName());
		if (e) try {
			return JSON.parse(e);
		} catch (e) {
			console.error("FigmaStorage", this.getName(), e);
		}
	}
	make() {
		if (this.value === void 0) {
			let e = this.getValue();
			e && (this.value = e.value, this.age = e.age);
		}
		return this;
	}
	toValue() {
		return JSON.stringify({
			value: this.value,
			age: this.age
		});
	}
}, v = class {
	static has(e) {
		return this.get().includes(e);
	}
	static get() {
		return this.selected || (this.selected = this.getList()), this.selected;
	}
	static add(e) {
		if (this.has(e)) return;
		let t = this.get();
		t.push(e), this.set(t);
	}
	static remove(e) {
		if (this.has(e)) {
			let t = this.get();
			t.splice(t.indexOf(e), 1), this.set(t);
		}
	}
	static toggle(e, t) {
		t ? this.add(e) : this.remove(e);
	}
	static send() {
		let e = g();
		e.add(s, () => this.post()), e.add(o, ({ id: e, selected: t }) => this.toggle(e, t));
	}
	static getList() {
		var e;
		return (e = this.storage.get()) == null ? [] : e;
	}
	static set(e) {
		this.selected = e, this.storage.set(e);
	}
	static post() {
		console.log("post", this.get()), g().post(s, this.get());
	}
};
f(v, "storage", new _(s)), f(v, "selected", void 0);
//#endregion
//#region src/classes/FigmaTopLevelFrames.ts
var y = class {
	static async get() {
		if (!this.frames) {
			this.frames = [];
			for (let e of this.getList()) this.frames.push({
				name: e.getName(),
				id: e.getId(),
				image: await e.exportJpg()
			});
		}
		return this.frames;
	}
	static send() {
		let e = g();
		e.add(a, () => {
			this.get().then((t) => {
				e.post(a, t);
			});
		});
	}
	static getList() {
		return new p(figma.currentPage).getMainFrames();
	}
};
f(y, "frames", void 0);
//#endregion
//#region src/composables/useFigmaStorage.ts
function b(e, t = figma.root, n) {
	let r = `${"id" in t ? t.id : "root"}:${e}`;
	if (r in x) return x[r];
	let i = new _(e, t, n);
	return x[r] = i, i;
}
var x = {}, S = "texts", C = () => {
	figma.on("selectionchange", async () => {
		let e = new p(figma.currentPage, !0);
		g().post(S, {
			frame: e,
			texts: e.getTexts(),
			screenshot: await e.screenshot()
		});
	});
};
//#endregion
export { p as FigmaFrame, v as FigmaFramesSelected, c as FigmaItem, m as FigmaPluginMessenger, _ as FigmaStorage, y as FigmaTopLevelFrames, C as makeFigmaTexts, g as useFigmaPluginMessenger, b as useFigmaStorage };
