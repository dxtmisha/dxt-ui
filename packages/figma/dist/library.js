import "@dxtmisha/scripts/ai";
import { blobToBase64 as e, executeFunction as t, forEach as n, getElementImage as r, isNull as i, random as a, resizeImageByMax as o, uint8ArrayToBase64 as s } from "@dxtmisha/functional-basic";
//#region src/config.ts
var c = "image/jpeg", l = "texts", u = "\nНужно из список текст преобразовать в префикс + ключи текст\nпример:\n{\n  \"global-calendar\": \"Календарь\",\n  \"events-table-title\": \"Детализация по месяцам\"\n}\n\n0) изучи скриншоты. И нужно вот что сделать\n\n1) придумать префик для ключи текст. Префик отображает содержимый страница. Префик глобальный, то есть он 1 для всего страница (что на скрине)\n2) определить какие тексты являеться моковым данный, токие переместит в группа моговый данный\n3) если текст можно использовать на нескольких страницах (простые фразы, слова, названия компания, пример \"страна\", \"купить\", \"жен.\"), то вынести его в глобальный префикс (global-*)/ в названия ключ дольжен отражать содердимый. Не какой отображения место использования. То есть не какой footer, link для приер\n4) составить список ключи текст с префиксом и текстом. Названия ключа дольжен отображать место использования текста\n5) если видишь, в текст подставлено какой значения, надо его знаменить на [xxx] - где xxx это название значения\nпример: \"Мастерские каникулы 2025\" => \"Мастерские каникулы [year]\"\n5.1) так же добавить доп ключ, на основе орининал и разделить текст на несколько частей. место разделения это место подстановки значения\nпример:\"получателю Васильева Л. (ID 2154643)\" => \"получателю [name] (ID [id])\" дольжен добавииться ключи:\n{\n...\n\"order-recipient\": \"получателю [name] (ID [id])\",\n\"order-recipient-part1\": \"получателю \",\n\"order-recipient-part2\": \" (ID \",\n\"order-recipient-part3\": \")\",\n...\n}\n7) что дольжень получить в итоге (json с даными):\n{\n    \"global\":{\n    \"глобальный-префикс-клчю-текст\": \"текст\",\n    \"глобальный-префикс-клчю-текст\": \"текст\",\n    \"глобальный-префикс-клчю-текст\": \"текст\",\n    \"глобальный-префикс-клчю-текст\": \"текст\"\n    },\n    \"page\": {\n    \"префикс-клчю-текст\": \"текст\",\n    \"префикс-клчю-текст\": \"текст\",\n    \"префикс-клчю-текст\": \"текст\",\n    \"префикс-клчю-текст\": \"текст\"\n    },\n    \"mock\":{\n    \"префикс-клчю-текст\": \"текст\",\n    \"префикс-клчю-текст\": \"текст\",\n    \"префикс-клчю-текст\": \"текст\",\n    \"префикс-клчю-текст\": \"текст\",\n    }\n}\n8) не придумывать тексты, использовать только те что в список ниже\n\nСписок текст:\n[texts]\n", d = class {
	constructor(e, t) {
		this.ai = e, this.data = t;
	}
	async make() {
		return this.ai.resetImages(), this.makeImage(), console.warn("texts", u.replace("[texts]", this.initTexts())), console.log("getImages", this.ai.getImages(), await this.ai.generate(u.replace("[texts]", this.initTexts()))), this;
	}
	makeImage() {
		return this.data.screenshot.forEach((e) => {
			this.ai.addImage({
				mime: c,
				base64: s(e)
			});
		}), this;
	}
	initTexts() {
		return n(this.data.texts, (e) => e.text).join("\r\n");
	}
}, f = class e {
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
function p(e) {
	"@babel/helpers - typeof";
	return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, p(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPrimitive.js
function m(e, t) {
	if (p(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (p(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPropertyKey.js
function h(e) {
	var t = m(e, "string");
	return p(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/defineProperty.js
function g(e, t, n) {
	return (t = h(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/FigmaFrame.ts
var _ = class {
	constructor(e, t = !1) {
		g(this, "mainItem", []), g(this, "items", []), this.page = e, this.selection = t, this.mainItem = this.initMain(), this.items = this.initBySelection();
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
		return this.isSelection() ? n([...this.page.selection], (e) => new f(e)) : [new f(this.page)];
	}
	initItems(e) {
		let t = [];
		if ("children" in e) for (let n of e.children) t.push(new f(n), ...this.initItems(n));
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
	toMain(e = new f(this.page)) {
		let t = e.getParentItem();
		return t && !t.isDocument() ? this.toMain(t) : e;
	}
}, v = class {
	static is(e) {
		return this.code === e;
	}
	static get() {
		return this.code;
	}
	static set(e) {
		this.isEditable && (this.code = `figma-${e}`, this.isEditable = !1);
	}
};
g(v, "code", `figma-${a(1e5, 999999)}`), g(v, "isEditable", !0);
//#endregion
//#region src/classes/FigmaPostAbstract.ts
var y = class {
	constructor() {
		g(this, "isMake", !1), g(this, "posts", {}), g(this, "onMessage", (e) => {
			e && v.is(e.code) && this.notify(e.type, e.message);
		});
	}
	add(e, t, n = !1) {
		return this.posts[e] || (this.posts[e] = {
			type: e,
			callbackList: []
		}), this.posts[e].callbackList.push({
			callback: t,
			once: n
		}), this;
	}
	remove(e, t) {
		return this.posts[e] && (this.posts[e].callbackList = this.posts[e].callbackList.filter((e) => e.callback !== t)), this;
	}
	make() {
		return this.isMake || (this.isMake = !0, this.prepare()), this;
	}
	notify(e, t) {
		e in this.posts && this.posts[e].callbackList.forEach((n) => {
			n.callback(t), n.once && this.remove(e, n.callback);
		});
	}
}, b = class extends y {
	post(e, t) {
		figma.ui.postMessage({
			code: v.get(),
			type: e,
			message: t
		});
	}
	prepare() {
		figma.ui.onmessage = (e) => this.onMessage(e);
	}
}, x = class {
	constructor(e, t = figma.root, n) {
		g(this, "value", void 0), g(this, "age", void 0), this.name = e, this.item = t, this.cache = n;
	}
	get(e) {
		if (this.make(), this.value !== void 0 && this.isCache()) return this.value;
		if (e !== void 0) return this.set(e);
	}
	getName() {
		return this.name;
	}
	set(e) {
		return this.value = t(e), this.age = this.getTime(), this.value === void 0 ? this.remove() : this.item.setPluginData(this.getName(), this.toValue()), this.value;
	}
	remove() {
		return this.value = void 0, this.age = void 0, this.item.setPluginData(this.getName(), ""), this;
	}
	isCache() {
		return i(this.cache) || this.age && this.age + this.cache * 1e3 >= this.getTime();
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
}, S = class extends y {
	post(e, t) {
		parent.postMessage({ pluginMessage: {
			code: v.get(),
			type: e,
			message: t
		} }, "*");
	}
	prepare() {
		window.addEventListener("message", (e) => {
			var t;
			return this.onMessage((t = e.data) == null ? void 0 : t.pluginMessage);
		});
	}
}, C;
function w() {
	return C || (C = new b(), C.make()), C;
}
//#endregion
//#region src/composables/useFigmaStorage.ts
function T(e, t = figma.root, n) {
	let r = `${"id" in t ? t.id : "root"}:${e}`;
	if (r in E) return E[r];
	let i = new x(e, t, n);
	return E[r] = i, i;
}
var E = {}, D;
function O() {
	return D || (D = new S(), D.make()), D;
}
//#endregion
//#region src/functions/ensureMaxSize.ts
async function k(t, n = .56) {
	return new Promise((i) => {
		let a = new Blob([t], { type: c }), s = r(URL.createObjectURL(a));
		s ? s.onload = () => {
			let e = o(s, n * s.naturalWidth, "width", c);
			i(e == null ? "" : e);
		} : e(a).then((e) => i(String(e == null ? "" : e)));
	});
}
//#endregion
//#region src/types/framesTypes.ts
var A = "ui-figma-frames-list", j, M = !1;
function N(e) {
	if (j) {
		e(j);
		return;
	}
	if (M) {
		setTimeout(() => N(e), 160);
		return;
	}
	M = !0;
	let t = O(), n = (r) => {
		j = r, j.length > 0 && (e(j), t.remove(A, n), M = !1);
	};
	t.add(A, n).post(A);
}
//#endregion
//#region src/functions/makeFigmaTexts.ts
var P = () => {
	figma.on("selectionchange", async () => {
		let e = new _(figma.currentPage, !0);
		w().post(l, {
			frame: e,
			texts: e.getTexts(),
			screenshot: await e.screenshot()
		});
	});
};
//#endregion
export { d as FigmaAiText, _ as FigmaFrame, f as FigmaItem, b as FigmaPluginMessenger, y as FigmaPostAbstract, v as FigmaPostCode, x as FigmaStorage, S as FigmaUiMessenger, A as UI_FIGMA_FRAMES_POST_NAME, k as ensureMaxSize, N as fetchTopLevelFrames, P as makeFigmaTexts, w as useFigmaPluginMessenger, T as useFigmaStorage, O as useFigmaUiMessenger };
