import { StorageCallback as e, random as t } from "@dxtmisha/functional-basic";
//#region \0@oxc-project+runtime@0.127.0/helpers/typeof.js
function n(e) {
	"@babel/helpers - typeof";
	return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, n(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/toPrimitive.js
function r(e, t) {
	if (n(e) != "object" || !e) return e;
	var r = e[Symbol.toPrimitive];
	if (r !== void 0) {
		var i = r.call(e, t || "default");
		if (n(i) != "object") return i;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/toPropertyKey.js
function i(e) {
	var t = r(e, "string");
	return n(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/defineProperty.js
function a(e, t, n) {
	return (t = i(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/FigmaPostCode.ts
var o = class {
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
a(o, "code", `figma-${t(1e5, 999999)}`), a(o, "isEditable", !0);
//#endregion
//#region src/classes/FigmaPostAbstract.ts
var s = class {
	constructor() {
		a(this, "isMake", !1), a(this, "posts", {}), a(this, "onMessage", (e) => {
			e && o.is(e.code) && this.notify(e.type, e.message);
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
}, c = class e extends s {
	static getInstance() {
		return l || (l = new e(), l.make(), l);
	}
	post(e, t) {
		parent.postMessage({ pluginMessage: {
			code: o.get(),
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
}, l, u = "ui-figma-frames-list", d = "ui-figma-frames-selected", f = "ui-figma-frames-selected-add", p = "ui-figma-frame-get-selection", m = "ui-figma-frame-set-selection", h = "ui-figma-client-storage-get", g = "ui-figma-client-storage-set", _ = "ui-figma-storage-get", v = "ui-figma-storage-set", y = !1;
function b(e, t, n, r = !0) {
	C();
	let i = S(e);
	i.addCallback(t, r), i.isLoading() || (i.preparation(), c.getInstance().post(h, {
		name: e,
		defaultValue: n
	}));
}
var x = (e) => `figma:client-storage:${e}`, S = (t) => e.getInstance(x(t)), C = () => {
	y || (y = !0, c.getInstance().add(h, (e) => {
		S(e.name).run(e.value).then();
	}));
}, w = !1;
function T(e) {
	O();
	let t = D();
	t.addCallback(e), t.isLoading() || (t.preparation(), c.getInstance().post(p));
}
var E = () => "figma:frame-selection:get", D = () => e.getInstance(E()), O = () => {
	w || (w = !0, c.getInstance().add(p, (e) => {
		D().run(e);
	}));
}, k = "ui-figma-styles-update", A = !1;
function j(e) {
	P(), N().addCallback(e);
}
var M = () => "figma:frame-styles:get", N = () => e.getInstance(M()), P = () => {
	A || (A = !0, c.getInstance().add(k, (e) => {
		N().run(e).then();
	}));
}, F, I = !1;
function L(e) {
	if (F) {
		e(F);
		return;
	}
	if (I) {
		setTimeout(() => L(e), 160);
		return;
	}
	I = !0, c.getInstance().add(d, (t) => {
		F = t, I = !1, e(F);
	}).post(d);
}
//#endregion
//#region src/functions/fetchStorage.ts
var R = !1;
function z(e, t, n, r, i = !0) {
	H();
	let a = V(e, n);
	a.addCallback(t, i), a.isLoading() || (a.preparation(), c.getInstance().post(_, {
		name: e,
		id: n,
		defaultValue: r
	}));
}
var B = (e, t) => `figma:storage:${t ? `${e}:${t}` : e}`, V = (t, n) => e.getInstance(B(t, n)), H = () => {
	R || (R = !0, c.getInstance().add(_, (e) => {
		V(e.name, e.id).run(e.value);
	}));
}, U, W = !1;
function G(e) {
	if (U) {
		e(U);
		return;
	}
	if (W) {
		setTimeout(() => G(e), 160);
		return;
	}
	W = !0;
	let t = c.getInstance(), n = (r) => {
		U = r, U.length > 0 && (e(U), t.remove(u, n), W = !1);
	};
	t.add(u, n).post(u);
}
//#endregion
//#region src/functions/sendClientStorage.ts
function K(e, t) {
	c.getInstance().post(g, {
		name: e,
		value: t
	});
}
//#endregion
//#region src/functions/sendFrameSelection.ts
function q(e) {
	c.getInstance().post(m, { id: e });
}
//#endregion
//#region src/functions/sendFrameStyles.ts
function J(e) {
	c.getInstance().post(k, e);
}
//#endregion
//#region src/functions/sendFramesSelected.ts
function Y(e, t) {
	c.getInstance().post(f, {
		id: e,
		selected: t
	});
}
//#endregion
//#region src/functions/sendStorage.ts
function X(e, t, n) {
	c.getInstance().post(v, {
		name: e,
		value: t,
		id: n
	});
}
//#endregion
export { k as FIGMA_FRAME_STYLES_MESSENGER_NAME, s as FigmaPostAbstract, o as FigmaPostCode, c as FigmaUiMessenger, h as UI_FIGMA_CLIENT_STORAGE_GET, g as UI_FIGMA_CLIENT_STORAGE_SET, u as UI_FIGMA_FRAMES_POST_NAME, f as UI_FIGMA_FRAMES_SELECTED_ADD_NAME, d as UI_FIGMA_FRAMES_SELECTED_POST_NAME, p as UI_FIGMA_FRAME_GET_SELECTION, m as UI_FIGMA_FRAME_SET_SELECTION, _ as UI_FIGMA_STORAGE_GET, v as UI_FIGMA_STORAGE_SET, b as fetchClientStorage, T as fetchFrameSelection, j as fetchFrameStyles, L as fetchFramesSelected, z as fetchStorage, G as fetchTopLevelFrames, K as sendClientStorage, q as sendFrameSelection, J as sendFrameStyles, Y as sendFramesSelected, X as sendStorage };
