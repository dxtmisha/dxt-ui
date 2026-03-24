import { blobToBase64 as e, executeFunction as t, forEach as n, getElementImage as r, isNull as i, random as a, resizeImageByMax as o } from "@dxtmisha/functional-basic";
//#region src/classes/FigmaItem.ts
var s = class e {
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
function c(e) {
	"@babel/helpers - typeof";
	return c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, c(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPrimitive.js
function l(e, t) {
	if (c(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (c(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPropertyKey.js
function u(e) {
	var t = l(e, "string");
	return c(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/defineProperty.js
function d(e, t, n) {
	return (t = u(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/FigmaFrame.ts
var f = class {
	constructor(e, t = !1) {
		d(this, "mainItem", []), d(this, "items", []), this.page = e, this.selection = t, this.mainItem = this.initMain(), this.items = this.initBySelection();
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
		return this.isSelection() ? n([...this.page.selection], (e) => new s(e)) : [new s(this.page)];
	}
	initItems(e) {
		let t = [];
		if ("children" in e) for (let n of e.children) t.push(new s(n), ...this.initItems(n));
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
	toMain(e = new s(this.page)) {
		let t = e.getParentItem();
		return t && !t.isDocument() ? this.toMain(t) : e;
	}
}, p = class {
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
d(p, "code", `figma-${a(1e5, 999999)}`), d(p, "isEditable", !0);
//#endregion
//#region src/classes/FigmaPostAbstract.ts
var m = class {
	constructor() {
		d(this, "isMake", !1), d(this, "posts", {}), d(this, "onMessage", (e) => {
			e && p.is(e.code) && this.notify(e.type, e.message);
		});
	}
	add(e, t) {
		return this.posts[e] || (this.posts[e] = []), this.posts[e].push(t), this;
	}
	make() {
		return this.isMake || (this.isMake = !0, this.prepare()), this;
	}
	notify(e, t) {
		var n;
		(n = this.posts[e]) == null || n.forEach((e) => e(t));
	}
}, h = class extends m {
	post(e, t) {
		figma.ui.postMessage({
			code: p.get(),
			type: e,
			message: t
		});
	}
	prepare() {
		figma.ui.onmessage = (e) => this.onMessage(e);
	}
}, g = class {
	constructor(e, t = figma.root, n) {
		d(this, "value", void 0), d(this, "age", void 0), this.name = e, this.item = t, this.cache = n;
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
}, _ = class extends m {
	post(e, t) {
		parent.postMessage({ pluginMessage: {
			code: p.get(),
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
}, v;
function y() {
	return v || (v = new h(), v.make()), v;
}
//#endregion
//#region src/composables/useFigmaStorage.ts
function b(e, t = figma.root, n) {
	let r = `${"id" in t ? t.id : "root"}:${e}`;
	if (r in x) return x[r];
	let i = new g(e, t, n);
	return x[r] = i, i;
}
var x = {}, S;
function C() {
	return S || (S = new _(), S.make()), S;
}
//#endregion
//#region src/config.ts
var w = "image/jpeg", T = "texts";
//#endregion
//#region src/functions/ensureMaxSize.ts
async function E(t, n = .56) {
	return new Promise((i) => {
		let a = new Blob([t], { type: w }), s = r(URL.createObjectURL(a));
		s ? s.onload = () => {
			let e = o(s, n * s.naturalWidth, "width", w);
			i(e == null ? "" : e);
		} : e(a).then((e) => i(String(e == null ? "" : e)));
	});
}
//#endregion
//#region src/functions/makeFigmaTexts.ts
var D = () => {
	figma.on("selectionchange", async () => {
		let e = new f(figma.currentPage, !0);
		y().post(T, {
			frame: e,
			texts: e.getTexts(),
			screenshot: await e.screenshot()
		});
	});
};
//#endregion
export { f as FigmaFrame, s as FigmaItem, h as FigmaPluginMessenger, m as FigmaPostAbstract, p as FigmaPostCode, g as FigmaStorage, _ as FigmaUiMessenger, E as ensureMaxSize, D as makeFigmaTexts, y as useFigmaPluginMessenger, b as useFigmaStorage, C as useFigmaUiMessenger };
