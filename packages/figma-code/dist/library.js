import { executeFunction as e, forEach as t, getCurrentTime as n, isNull as r } from "@dxtmisha/functional-basic";
import { FigmaPostAbstract as i, FigmaPostCode as a, UI_FIGMA_CLIENT_STORAGE_GET as o, UI_FIGMA_CLIENT_STORAGE_SET as s, UI_FIGMA_FRAMES_POST_NAME as c, UI_FIGMA_FRAMES_SELECTED_ADD_NAME as l, UI_FIGMA_FRAMES_SELECTED_POST_NAME as u, UI_FIGMA_FRAME_SET_SELECTION as d, UI_FIGMA_STORAGE_GET as f, UI_FIGMA_STORAGE_SET as p } from "@dxtmisha/figma";
//#region \0@oxc-project+runtime@0.123.0/helpers/typeof.js
function m(e) {
	"@babel/helpers - typeof";
	return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, m(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/toPrimitive.js
function h(e, t) {
	if (m(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (m(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/toPropertyKey.js
function g(e) {
	var t = h(e, "string");
	return m(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/defineProperty.js
function _(e, t, n) {
	return (t = g(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/FigmaStorageData.ts
var v = class {
	constructor(e, t) {
		_(this, "value", void 0), _(this, "age", void 0), this.name = e, this.cache = t;
	}
	isNull() {
		return r(this.value);
	}
	isCache() {
		return !!(r(this.cache) || this.age && this.age + this.cache * 1e3 >= n());
	}
	isValue() {
		return this.value !== void 0 && this.isCache();
	}
	get() {
		return this.value;
	}
	getAge() {
		return this.age;
	}
	getName() {
		return `${a.get()}-${this.name}`;
	}
	getCache() {
		return this.cache;
	}
	set(e, t) {
		return this.setValue(e).setAge(t);
	}
	setByObject(e) {
		return e ? this.set(e.value, e.age) : this;
	}
	setValue(e) {
		return this.value = e, this;
	}
	setAge(e) {
		return this.age = e, this;
	}
	update(e) {
		return e === void 0 ? this.remove() : this.setValue(e).setAge(n());
	}
	remove() {
		return this.set(void 0, void 0);
	}
	toValue() {
		return {
			value: this.value,
			age: this.age
		};
	}
}, y = class {
	constructor(e, t) {
		_(this, "data", void 0), this.name = e, this.cache = t, this.data = new v(e, t);
	}
	async get(e) {
		if (await this.make(), this.data.isValue()) return this.data.get();
		if (e !== void 0) return await this.set(e);
	}
	async set(t) {
		return this.data.update(await e(t)), await figma.clientStorage.setAsync(this.data.getName(), this.data.toValue()), this.data.get();
	}
	async remove() {
		return this.data.remove(), await figma.clientStorage.deleteAsync(this.data.getName()), this;
	}
	async getValue() {
		return await figma.clientStorage.getAsync(this.data.getName());
	}
	async make() {
		return this.data.isNull() && this.data.setByObject(await this.getValue()), this;
	}
}, b = class e {
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
	inCurrentPage() {
		var e;
		return ((e = this.getParentPage()) == null ? void 0 : e.id) === figma.currentPage.id;
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
	getParentPage() {
		let e = this.getParent();
		for (; e && e.type !== "PAGE";) if (e.parent) e = e.parent;
		else return;
		return e;
	}
	getParentPageItem() {
		let t = this.getParentPage();
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
	toSelection() {
		figma.currentPage.selection = [this.item], figma.viewport.scrollAndZoomIntoView([this.item]);
	}
	async toPageAndSelection() {
		this.inCurrentPage() && this.toSelection();
		let e = this.getParentPage();
		e && (await figma.setCurrentPageAsync(e), this.toSelection());
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
}, x = class {
	constructor(e, t = !1) {
		_(this, "mainItem", []), _(this, "items", []), this.page = e, this.selection = t, this.mainItem = this.initMain(), this.items = this.initBySelection();
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
		return this.isSelection() ? t([...this.page.selection], (e) => new b(e)) : [new b(this.page)];
	}
	initItems(e) {
		let t = [];
		if ("children" in e) for (let n of e.children) t.push(new b(n), ...this.initItems(n));
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
	toMain(e = new b(this.page)) {
		let t = e.getParentItem();
		return t && !t.isDocument() ? this.toMain(t) : e;
	}
}, S = class extends i {
	post(e, t) {
		figma.ui.postMessage({
			code: a.get(),
			type: e,
			message: t
		});
	}
	prepare() {
		figma.ui.onmessage = (e) => this.onMessage(e);
	}
}, C;
function w() {
	return C || (C = new S(), C.make()), C;
}
//#endregion
//#region src/classes/FigmaStorage.ts
var T = class {
	constructor(e, t = figma.root, n) {
		_(this, "data", void 0), this.name = e, this.item = t, this.cache = n, this.data = new v(e, n);
	}
	get(e) {
		if (this.make(), this.data.isValue()) return this.data.get();
		if (e !== void 0) return this.set(e);
	}
	set(t) {
		return this.data.update(e(t)), this.item.setPluginData(this.data.getName(), JSON.stringify(this.data.toValue())), this.data.get();
	}
	remove() {
		return this.data.remove(), this.item.setPluginData(this.data.getName(), ""), this;
	}
	getValue() {
		let e = this.item.getPluginData(this.data.getName());
		if (e) try {
			return JSON.parse(e);
		} catch (e) {
			console.error("FigmaStorage", this.data.getName(), e);
		}
	}
	make() {
		return this.data.isNull() && this.data.setByObject(this.getValue()), this;
	}
}, E = class {
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
		let e = w();
		e.add(u, () => this.post()), e.add(l, ({ id: e, selected: t }) => this.toggle(e, t));
	}
	static getList() {
		var e;
		return (e = this.storage.get()) == null ? [] : e;
	}
	static set(e) {
		this.selected = e, this.storage.set(e);
	}
	static post() {
		w().post(u, this.get());
	}
};
_(E, "storage", new T(u)), _(E, "selected", void 0);
//#endregion
//#region src/classes/FigmaTopLevelFrames.ts
var D = class {
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
		let e = w();
		e.add(c, () => {
			this.get().then((t) => {
				e.post(c, t);
			});
		});
	}
	static getList() {
		return new x(figma.currentPage).getMainFrames();
	}
};
_(D, "frames", void 0);
//#endregion
//#region src/composables/useFigmaClientStorage.ts
var O = {};
function k(e, t) {
	if (e in O) return O[e];
	let n = new y(e, t);
	return O[e] = n, n;
}
//#endregion
//#region src/composables/useFigmaStorage.ts
var A = {};
function j(e, t = figma.root, n) {
	let r = `${"id" in t ? t.id : "root"}:${e}`;
	if (r in A) return A[r];
	let i = new T(e, t, n);
	return A[r] = i, i;
}
//#endregion
//#region src/functions/getFigmaItemById.ts
async function M(e) {
	let t = await figma.getNodeByIdAsync(e);
	if (t) return new b(t);
}
//#endregion
//#region src/functions/getFigmaItemByIdOrRoot.ts
async function N(e) {
	let t = e ? await M(e) : void 0;
	return t ? t.get() : figma.root;
}
//#endregion
//#region src/config.ts
var P = "texts", F = () => {
	figma.on("selectionchange", async () => {
		let e = new x(figma.currentPage, !0);
		w().post(P, {
			frame: e,
			texts: e.getTexts(),
			screenshot: await e.screenshot()
		});
	});
};
//#endregion
//#region src/functions/setupClientStorage.ts
function I() {
	let e = w(), t = (t, n) => e.post(o, {
		name: t,
		value: n
	});
	e.add(o, async ({ name: e, value: n }) => {
		t(e, await k(e).get(n));
	}), e.add(s, async ({ name: e, value: n }) => {
		t(e, await k(e).set(n));
	});
}
//#endregion
//#region src/functions/toFrameSelection.ts
async function L(e) {
	if (e) {
		let t = await M(e);
		t && t.toPageAndSelection();
	}
}
//#endregion
//#region src/functions/setupFrameSelection.ts
function R() {
	w().add(d, ({ id: e }) => {
		L(e).then();
	});
}
//#endregion
//#region src/functions/setupStorage.ts
function z() {
	let e = w(), t = async (e, t) => j(e, await N(t)), n = (t, n, r) => e.post(f, {
		id: r,
		name: t,
		value: n
	});
	e.add(f, async ({ id: e, name: r, value: i }) => {
		n(r, (await t(r, e)).get(i), e);
	}), e.add(p, async ({ id: e, name: r, value: i }) => {
		n(r, (await t(r, e)).set(i), e);
	});
}
//#endregion
export { y as FigmaClientStorage, x as FigmaFrame, E as FigmaFramesSelected, b as FigmaItem, S as FigmaPluginMessenger, T as FigmaStorage, v as FigmaStorageData, D as FigmaTopLevelFrames, M as getFigmaItemById, N as getFigmaItemByIdOrRoot, F as makeFigmaTexts, I as setupClientStorage, R as setupFrameSelectionByMessage, z as setupStorage, L as toFrameSelection, k as useFigmaClientStorage, w as useFigmaPluginMessenger, j as useFigmaStorage };
