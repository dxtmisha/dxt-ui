import { blobToBase64 as e, forEach as t, getElementImage as n, random as r, resizeImageByMax as i } from "@dxtmisha/functional-basic";
//#region src/classes/FigmaItem.ts
var a = class e {
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
function o(e) {
	"@babel/helpers - typeof";
	return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, o(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPrimitive.js
function s(e, t) {
	if (o(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (o(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPropertyKey.js
function c(e) {
	var t = s(e, "string");
	return o(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/defineProperty.js
function l(e, t, n) {
	return (t = c(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/FigmaFrame.ts
var u = class {
	constructor(e, t = !1) {
		l(this, "mainItem", []), l(this, "items", []), this.page = e, this.selection = t, this.mainItem = this.initMain(), this.items = this.initBySelection();
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
		return this.isSelection() ? t([...this.page.selection], (e) => new a(e)) : [new a(this.page)];
	}
	initItems(e) {
		let t = [];
		if ("children" in e) for (let n of e.children) t.push(new a(n), ...this.initItems(n));
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
	toMain(e = new a(this.page)) {
		let t = e.getParentItem();
		return t && !t.isDocument() ? this.toMain(t) : e;
	}
}, d = class {
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
l(d, "code", `figma-${r(1e5, 999999)}`), l(d, "isEditable", !0);
//#endregion
//#region src/classes/FigmaPostAbstract.ts
var f = class {
	constructor() {
		l(this, "isMake", !1), l(this, "posts", {}), l(this, "onMessage", (e) => {
			e && d.is(e.code) && this.notify(e.type, e.message);
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
}, p = class extends f {
	post(e, t) {
		figma.ui.postMessage({
			code: d.get(),
			type: e,
			message: t
		});
	}
	prepare() {
		figma.ui.onmessage = (e) => this.onMessage(e);
	}
}, m = class extends f {
	post(e, t) {
		parent.postMessage({ pluginMessage: {
			code: d.get(),
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
}, h;
function g() {
	return h || (h = new p(), h.make()), h;
}
//#endregion
//#region src/composables/useFigmaUiMessenger.ts
var _;
function v() {
	return _ || (_ = new m(), _.make()), _;
}
//#endregion
//#region src/config.ts
var y = "image/jpeg", b = "texts";
//#endregion
//#region src/functions/ensureMaxSize.ts
async function x(t, r = .56) {
	return new Promise((a) => {
		let o = new Blob([t], { type: y }), s = n(URL.createObjectURL(o));
		s ? s.onload = () => {
			let e = i(s, r * s.naturalWidth, "width", y);
			a(e == null ? "" : e);
		} : e(o).then((e) => a(String(e == null ? "" : e)));
	});
}
//#endregion
//#region src/functions/makeFigmaTexts.ts
var S = () => {
	figma.on("selectionchange", async () => {
		let e = new u(figma.currentPage, !0);
		g().post(b, {
			frame: e,
			texts: e.getTexts(),
			screenshot: await e.screenshot()
		});
	});
};
//#endregion
export { u as FigmaFrame, a as FigmaItem, p as FigmaPluginMessenger, f as FigmaPostAbstract, d as FigmaPostCode, m as FigmaUiMessenger, x as ensureMaxSize, S as makeFigmaTexts, g as useFigmaPluginMessenger, v as useFigmaUiMessenger };
