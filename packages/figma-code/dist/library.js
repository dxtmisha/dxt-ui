import { executeFunction as e, forEach as t, getCurrentTime as n, isNull as r, toArray as i } from "@dxtmisha/functional-basic";
import { FIGMA_FRAME_STYLES_MESSENGER_NAME as a, FigmaPostAbstract as o, FigmaPostCode as s, UI_FIGMA_CLIENT_STORAGE_GET as c, UI_FIGMA_CLIENT_STORAGE_SET as l, UI_FIGMA_FRAMES_POST_NAME as u, UI_FIGMA_FRAMES_SELECTED_ADD_NAME as d, UI_FIGMA_FRAMES_SELECTED_POST_NAME as f, UI_FIGMA_FRAME_GET_SELECTION as p, UI_FIGMA_FRAME_SET_SELECTION as m, UI_FIGMA_STORAGE_GET as h, UI_FIGMA_STORAGE_SET as g } from "@dxtmisha/figma";
//#region \0@oxc-project+runtime@0.127.0/helpers/typeof.js
function _(e) {
	"@babel/helpers - typeof";
	return _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, _(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/toPrimitive.js
function v(e, t) {
	if (_(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (_(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/toPropertyKey.js
function y(e) {
	var t = v(e, "string");
	return _(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/defineProperty.js
function b(e, t, n) {
	return (t = y(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/FigmaStorageData.ts
var x = class {
	constructor(e, t) {
		b(this, "value", void 0), b(this, "age", void 0), this.name = e, this.cache = t;
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
		return `${s.get()}-${this.name}`;
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
}, S = class t {
	static getInstance(e) {
		if (e in C) return C[e];
		let n = new t(e);
		return C[e] = n, n;
	}
	constructor(e, t) {
		b(this, "data", void 0), this.name = e, this.cache = t, this.data = new x(e, t);
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
}, C = {}, w = class e {
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
	getText() {
		return this.isText() ? this.item.characters.trim() : "";
	}
	async getCss() {
		return "getCSSAsync" in this.item ? await this.item.getCSSAsync() : {};
	}
	async getInfo() {
		return {
			name: this.getName(),
			id: this.getId(),
			image: await this.exportJpg()
		};
	}
	async getStyles() {
		return {
			...await this.getInfo(),
			json: await this.exportJsonCompact(),
			text: this.getText(),
			styles: await this.getCss()
		};
	}
	async exportJpg() {
		return await this.exportItem("JPG");
	}
	async exportJson() {
		return await this.exportItem("JSON_REST_V1");
	}
	async exportJsonCompact() {
		let e = await this.exportJson();
		if (e) return {
			document: this.toJsonCompact(e.document),
			styles: e.styles
		};
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
	toJsonCompact(e) {
		let n = {
			id: String(e.id),
			name: String(e.name)
		};
		return "type" in e && (n.type = e.type), "characters" in e && (n.characters = e.characters), "style" in e && (n.style = e.style), "styles" in e && (n.styles = e.styles), "children" in e && e.children && e.children.length > 0 && (n.children = t(e.children, (e) => this.toJsonCompact(e))), n;
	}
}, T = class e {
	constructor(e, t = !1) {
		b(this, "mainItem", []), b(this, "items", []), this.page = e, this.selection = t, this.mainItem = this.initMain(), this.items = this.initBySelection();
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
	async getItemsInfo() {
		return await this.getInfoByItems(this.items);
	}
	async getItemsCss() {
		let e = {};
		for (let t of this.items) e[t.getId()] = await t.getCss();
		return e;
	}
	async getItemsStyles() {
		return await this.getStylesByItems(this.items);
	}
	getMainFrames() {
		let e = this.toMain();
		return e ? e.getChildrenItems().filter((e) => e.isFrame() || e.isSection()) : [];
	}
	async getMainItemsInfo() {
		return await this.getInfoByItems(this.mainItem);
	}
	async getMainItemsStyles() {
		return await this.getStylesByItems(this.mainItem, !0);
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
	async getInfoByItems(e) {
		let t = [];
		for (let n of e) t.push(await n.getInfo());
		return t;
	}
	async getStylesByItems(t, n = !1) {
		let r = [];
		for (let i of t) {
			let t = await i.getStyles();
			n && (t.childrenStyles = await new e(i.get()).getItemsCss()), r.push(t);
		}
		return r;
	}
	initMain() {
		return this.isSelection() ? t([...this.page.selection], (e) => new w(e)) : [new w(this.page)];
	}
	initItems(e) {
		let t = [];
		if ("children" in e) for (let n of e.children) t.push(new w(n), ...this.initItems(n));
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
	toMain(e = new w(this.page)) {
		let t = e.getParentItem();
		return t && !t.isDocument() ? this.toMain(t) : e;
	}
}, E = class e extends o {
	static getInstance() {
		return D || (D = new e(), D.make(), D);
	}
	post(e, t) {
		figma.ui.postMessage({
			code: s.get(),
			type: e,
			message: t
		});
	}
	prepare() {
		figma.ui.onmessage = (e) => this.onMessage(e);
	}
}, D;
//#endregion
//#region src/functions/getFigmaItemById.ts
async function O(e) {
	let t = await figma.getNodeByIdAsync(e);
	if (t) return new w(t);
}
//#endregion
//#region src/functions/getFigmaItemByIdOrRoot.ts
async function k(e) {
	let t = e ? await O(e) : void 0;
	return t ? t.get() : figma.root;
}
//#endregion
//#region src/classes/FigmaStorage.ts
var A = class t {
	static getInstance(e, n = figma.root) {
		let r = `${"id" in n ? n.id : "root"}:${e}`;
		if (r in j) return j[r];
		let i = new t(e, n);
		return j[r] = i, i;
	}
	static async getInstanceById(e, n) {
		let r = await k(n);
		return t.getInstance(e, r);
	}
	constructor(e, t = figma.root, n) {
		b(this, "data", void 0), this.name = e, this.item = t, this.cache = n, this.data = new x(e, n);
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
}, j = {}, M = class {
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
		let e = E.getInstance();
		e.add(f, () => this.post()), e.add(d, ({ id: e, selected: t }) => this.toggle(e, t));
	}
	static getList() {
		var e;
		return (e = this.storage.get()) == null ? [] : e;
	}
	static set(e) {
		this.selected = e, this.storage.set(e);
	}
	static post() {
		E.getInstance().post(f, this.get());
	}
};
b(M, "storage", new A(f)), b(M, "selected", void 0);
//#endregion
//#region src/classes/FigmaTopLevelFrames.ts
var N = class {
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
		let e = E.getInstance();
		e.add(u, () => {
			this.get().then((t) => {
				e.post(u, t);
			});
		});
	}
	static getList() {
		return new T(figma.currentPage).getMainFrames();
	}
};
b(N, "frames", void 0);
//#endregion
//#region src/functions/getFigmaFrameById.ts
async function P(e) {
	let t = await figma.getNodeByIdAsync(e);
	if (t) return new T(t);
}
//#endregion
//#region src/functions/makeFigmaFrameSelection.ts
var F = () => {
	figma.on("selectionchange", async () => await I()), I().then();
}, I = async () => {
	let e = new T(figma.currentPage, !0);
	E.getInstance().post(p, await e.getMainItemsInfo());
}, L = "texts", R = () => {
	figma.on("selectionchange", async () => {
		let e = new T(figma.currentPage, !0);
		E.getInstance().post(L, {
			frame: e,
			texts: e.getTexts(),
			screenshot: await e.screenshot()
		});
	});
};
//#endregion
//#region src/functions/setupClientStorage.ts
function z() {
	let e = E.getInstance(), t = (t, n) => e.post(c, {
		name: t,
		value: n
	});
	e.add(c, async ({ name: e, value: n }) => {
		t(e, await S.getInstance(e).get(n));
	}), e.add(l, async ({ name: e, value: n }) => {
		t(e, await S.getInstance(e).set(n));
	});
}
//#endregion
//#region src/functions/toFrameSelection.ts
async function B(e) {
	if (e) {
		let t = await O(e);
		t && t.toPageAndSelection();
	}
}
//#endregion
//#region src/functions/setupFrameSelection.ts
function V() {
	let e = E.getInstance();
	F(), e.add(m, ({ id: e }) => {
		B(e).then();
	});
}
//#endregion
//#region src/functions/setupFrameStyles.ts
function H() {
	let e = E.getInstance(), t = async (e, t) => {
		let n = await P(e);
		return n ? t ? await n.getItemsStyles() : await n.getMainItemsStyles() : [];
	};
	e.add(a, async ({ ids: n, children: r }) => {
		let o = i(n), s = [];
		for (let e of o) s.push({
			id: e,
			data: await t(e, r == null ? !0 : r)
		});
		e.post(a, s);
	});
}
//#endregion
//#region src/functions/setupStorage.ts
function U() {
	let e = E.getInstance(), t = (t, n, r) => e.post(h, {
		name: t,
		value: n,
		id: r
	});
	e.add(h, async (e) => {
		let { name: n, value: r, id: i } = e == null ? {} : e;
		t(n, (await A.getInstanceById(n, i)).get(r), i);
	}), e.add(g, async (e) => {
		let { name: n, value: r, id: i } = e == null ? {} : e;
		t(n, (await A.getInstanceById(n, i)).set(r), i);
	});
}
//#endregion
export { S as FigmaClientStorage, T as FigmaFrame, M as FigmaFramesSelected, w as FigmaItem, E as FigmaPluginMessenger, A as FigmaStorage, x as FigmaStorageData, N as FigmaTopLevelFrames, P as getFigmaFrameById, O as getFigmaItemById, k as getFigmaItemByIdOrRoot, F as makeFigmaFrameSelection, R as makeFigmaTexts, z as setupClientStorage, V as setupFrameSelection, H as setupFrameStyles, U as setupStorage, B as toFrameSelection };
