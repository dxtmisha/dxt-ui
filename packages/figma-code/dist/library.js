import "@dxtmisha/scripts/ai";
import { executeFunction as e, forEach as t, getCurrentTime as n, isNull as r, uint8ArrayToBase64 as i } from "@dxtmisha/functional-basic";
import { FigmaPostAbstract as a, FigmaPostCode as o, UI_FIGMA_CLIENT_STORAGE_GET as s, UI_FIGMA_CLIENT_STORAGE_SET as c, UI_FIGMA_FRAMES_POST_NAME as l, UI_FIGMA_FRAMES_SELECTED_ADD_NAME as u, UI_FIGMA_FRAMES_SELECTED_POST_NAME as d, UI_FIGMA_FRAME_SET_SELECTION as f, UI_FIGMA_STORAGE_GET as p, UI_FIGMA_STORAGE_SET as m } from "@dxtmisha/figma";
//#region src/config.ts
var h = "image/jpeg", g = "texts", _ = "\nНужно из список текст преобразовать в префикс + ключи текст\nпример:\n{\n  \"global-calendar\": \"Календарь\",\n  \"events-table-title\": \"Детализация по месяцам\"\n}\n\n0) изучи скриншоты. И нужно вот что сделать\n\n1) придумать префик для ключи текст. Префик отображает содержимый страница. Префик глобальный, то есть он 1 для всего страница (что на скрине)\n2) определить какие тексты являеться моковым данный, токие переместит в группа моговый данный\n3) если текст можно использовать на нескольких страницах (простые фразы, слова, названия компания, пример \"страна\", \"купить\", \"жен.\"), то вынести его в глобальный префикс (global-*)/ в названия ключ дольжен отражать содердимый. Не какой отображения место использования. То есть не какой footer, link для приер\n4) составить список ключи текст с префиксом и текстом. Названия ключа дольжен отображать место использования текста\n5) если видишь, в текст подставлено какой значения, надо его знаменить на [xxx] - где xxx это название значения\nпример: \"Мастерские каникулы 2025\" => \"Мастерские каникулы [year]\"\n5.1) так же добавить доп ключ, на основе орининал и разделить текст на несколько частей. место разделения это место подстановки значения\nпример:\"получателю Васильева Л. (ID 2154643)\" => \"получателю [name] (ID [id])\" дольжен добавииться ключи:\n{\n...\n\"order-recipient\": \"получателю [name] (ID [id])\",\n\"order-recipient-part1\": \"получателю \",\n\"order-recipient-part2\": \" (ID \",\n\"order-recipient-part3\": \")\",\n...\n}\n7) что дольжень получить в итоге (json с даными):\n{\n    \"global\":{\n    \"глобальный-префикс-клчю-текст\": \"текст\",\n    \"глобальный-префикс-клчю-текст\": \"текст\",\n    \"глобальный-префикс-клчю-текст\": \"текст\",\n    \"глобальный-префикс-клчю-текст\": \"текст\"\n    },\n    \"page\": {\n    \"префикс-клчю-текст\": \"текст\",\n    \"префикс-клчю-текст\": \"текст\",\n    \"префикс-клчю-текст\": \"текст\",\n    \"префикс-клчю-текст\": \"текст\"\n    },\n    \"mock\":{\n    \"префикс-клчю-текст\": \"текст\",\n    \"префикс-клчю-текст\": \"текст\",\n    \"префикс-клчю-текст\": \"текст\",\n    \"префикс-клчю-текст\": \"текст\",\n    }\n}\n8) не придумывать тексты, использовать только те что в список ниже\n\nСписок текст:\n[texts]\n", v = class {
	constructor(e, t) {
		this.ai = e, this.data = t;
	}
	async make() {
		return this.ai.resetImages(), this.makeImage(), console.warn("texts", _.replace("[texts]", this.initTexts())), console.log("getImages", this.ai.getImages(), await this.ai.generate(_.replace("[texts]", this.initTexts()))), this;
	}
	makeImage() {
		return this.data.screenshot.forEach((e) => {
			this.ai.addImage({
				mime: h,
				base64: i(e)
			});
		}), this;
	}
	initTexts() {
		return t(this.data.texts, (e) => e.text).join("\r\n");
	}
};
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/typeof.js
function y(e) {
	"@babel/helpers - typeof";
	return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, y(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/toPrimitive.js
function b(e, t) {
	if (y(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (y(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/toPropertyKey.js
function x(e) {
	var t = b(e, "string");
	return y(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/defineProperty.js
function S(e, t, n) {
	return (t = x(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/FigmaStorageData.ts
var C = class {
	constructor(e, t) {
		S(this, "value", void 0), S(this, "age", void 0), this.name = e, this.cache = t;
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
		return `${o.get()}-${this.name}`;
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
}, w = class {
	constructor(e, t) {
		S(this, "data", void 0), this.name = e, this.cache = t, this.data = new C(e, t);
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
}, T = class e {
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
}, E = class {
	constructor(e, t = !1) {
		S(this, "mainItem", []), S(this, "items", []), this.page = e, this.selection = t, this.mainItem = this.initMain(), this.items = this.initBySelection();
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
		return this.isSelection() ? t([...this.page.selection], (e) => new T(e)) : [new T(this.page)];
	}
	initItems(e) {
		let t = [];
		if ("children" in e) for (let n of e.children) t.push(new T(n), ...this.initItems(n));
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
	toMain(e = new T(this.page)) {
		let t = e.getParentItem();
		return t && !t.isDocument() ? this.toMain(t) : e;
	}
}, D = class extends a {
	post(e, t) {
		figma.ui.postMessage({
			code: o.get(),
			type: e,
			message: t
		});
	}
	prepare() {
		figma.ui.onmessage = (e) => this.onMessage(e);
	}
}, O;
function k() {
	return O || (O = new D(), O.make()), O;
}
//#endregion
//#region src/classes/FigmaStorage.ts
var A = class {
	constructor(e, t = figma.root, n) {
		S(this, "data", void 0), this.name = e, this.item = t, this.cache = n, this.data = new C(e, n);
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
}, j = class {
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
		let e = k();
		e.add(d, () => this.post()), e.add(u, ({ id: e, selected: t }) => this.toggle(e, t));
	}
	static getList() {
		var e;
		return (e = this.storage.get()) == null ? [] : e;
	}
	static set(e) {
		this.selected = e, this.storage.set(e);
	}
	static post() {
		k().post(d, this.get());
	}
};
S(j, "storage", new A(d)), S(j, "selected", void 0);
//#endregion
//#region src/classes/FigmaTopLevelFrames.ts
var M = class {
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
		let e = k();
		e.add(l, () => {
			this.get().then((t) => {
				e.post(l, t);
			});
		});
	}
	static getList() {
		return new E(figma.currentPage).getMainFrames();
	}
};
S(M, "frames", void 0);
//#endregion
//#region src/composables/useFigmaClientStorage.ts
var N = {};
function P(e, t) {
	if (e in N) return N[e];
	let n = new w(e, t);
	return N[e] = n, n;
}
//#endregion
//#region src/composables/useFigmaStorage.ts
var F = {};
function I(e, t = figma.root, n) {
	let r = `${"id" in t ? t.id : "root"}:${e}`;
	if (r in F) return F[r];
	let i = new A(e, t, n);
	return F[r] = i, i;
}
//#endregion
//#region src/functions/getFigmaItemById.ts
async function L(e) {
	let t = await figma.getNodeByIdAsync(e);
	if (t) return new T(t);
}
//#endregion
//#region src/functions/getFigmaItemByIdOrRoot.ts
async function R(e) {
	let t = e ? await L(e) : void 0;
	return t ? t.get() : figma.root;
}
//#endregion
//#region src/functions/makeFigmaTexts.ts
var z = () => {
	figma.on("selectionchange", async () => {
		let e = new E(figma.currentPage, !0);
		k().post(g, {
			frame: e,
			texts: e.getTexts(),
			screenshot: await e.screenshot()
		});
	});
};
//#endregion
//#region src/functions/setupClientStorage.ts
function B() {
	let e = k(), t = (t, n) => e.post(s, {
		name: t,
		value: n
	});
	e.add(s, async ({ name: e, value: n }) => {
		t(e, await P(e).get(n));
	}), e.add(c, async ({ name: e, value: n }) => {
		t(e, await P(e).set(n));
	});
}
//#endregion
//#region src/functions/toFrameSelection.ts
async function V(e) {
	if (e) {
		let t = await L(e);
		t && t.toPageAndSelection();
	}
}
//#endregion
//#region src/functions/setupSelectionByMessage.ts
function H() {
	k().add(f, ({ id: e }) => {
		V(e).then();
	});
}
//#endregion
//#region src/functions/setupStorage.ts
function U() {
	let e = k(), t = async (e, t) => I(e, await R(t)), n = (t, n, r) => e.post(p, {
		id: r,
		name: t,
		value: n
	});
	e.add(p, async ({ id: e, name: r, value: i }) => {
		n(r, (await t(r, e)).get(i), e);
	}), e.add(m, async ({ id: e, name: r, value: i }) => {
		n(r, (await t(r, e)).set(i), e);
	});
}
//#endregion
export { v as FigmaAiText, w as FigmaClientStorage, E as FigmaFrame, j as FigmaFramesSelected, T as FigmaItem, D as FigmaPluginMessenger, A as FigmaStorage, C as FigmaStorageData, M as FigmaTopLevelFrames, L as getFigmaItemById, R as getFigmaItemByIdOrRoot, z as makeFigmaTexts, B as setupClientStorage, H as setupSelectionByMessage, U as setupStorage, V as toFrameSelection, P as useFigmaClientStorage, k as useFigmaPluginMessenger, I as useFigmaStorage };
