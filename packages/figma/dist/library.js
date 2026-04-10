import { StorageCallback as e, random as t } from "@dxtmisha/functional-basic";
//#region \0@oxc-project+runtime@0.123.0/helpers/typeof.js
function n(e) {
	"@babel/helpers - typeof";
	return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, n(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/toPrimitive.js
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
//#region \0@oxc-project+runtime@0.123.0/helpers/toPropertyKey.js
function i(e) {
	var t = r(e, "string");
	return n(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.123.0/helpers/defineProperty.js
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
}, l, u = "ui-figma-frames-list", d = "ui-figma-frames-selected", f = "ui-figma-frames-selected-add", p = "ui-figma-frame-set-selection", m = "ui-figma-client-storage-get", h = "ui-figma-client-storage-set", g = "ui-figma-storage-get", _ = "ui-figma-storage-set", v = !1;
function y(e, t, n, r = !0) {
	S();
	let i = x(e);
	i.addCallback(t, r), i.isLoading() || (i.preparation(), c.getInstance().post(m, {
		name: e,
		defaultValue: n
	}));
}
var b = (e) => `figma:client-storage:${e}`, x = (t) => e.getInstance(b(t)), S = () => {
	v || (v = !0, c.getInstance().add(m, (e) => {
		x(e.name).run(e.value);
	}));
}, C, w = !1;
function T(e) {
	if (C) {
		e(C);
		return;
	}
	if (w) {
		setTimeout(() => T(e), 160);
		return;
	}
	w = !0, c.getInstance().add(d, (t) => {
		C = t, w = !1, e(C);
	}).post(d);
}
//#endregion
//#region src/functions/fetchStorage.ts
var E = !1;
function D(e, t, n, r, i = !0) {
	A();
	let a = k(e, n);
	a.addCallback(t, i), a.isLoading() || (a.preparation(), c.getInstance().post(g, {
		name: e,
		id: n,
		defaultValue: r
	}));
}
var O = (e, t) => `figma:storage:${t ? `${e}:${t}` : e}`, k = (t, n) => e.getInstance(O(t, n)), A = () => {
	E || (E = !0, c.getInstance().add(g, (e) => {
		k(e.name, e.id).run(e.value);
	}));
}, j, M = !1;
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
	let t = c.getInstance(), n = (r) => {
		j = r, j.length > 0 && (e(j), t.remove(u, n), M = !1);
	};
	t.add(u, n).post(u);
}
//#endregion
//#region src/functions/sendClientStorage.ts
function P(e, t) {
	c.getInstance().post(h, {
		name: e,
		value: t
	});
}
//#endregion
//#region src/functions/sendFrameSelection.ts
function F(e) {
	c.getInstance().post(p, { id: e });
}
//#endregion
//#region src/functions/sendFramesSelected.ts
function I(e, t) {
	c.getInstance().post(f, {
		id: e,
		selected: t
	});
}
//#endregion
//#region src/functions/sendStorage.ts
function L(e, t, n) {
	c.getInstance().post(_, {
		name: e,
		value: t,
		id: n
	});
}
//#endregion
export { s as FigmaPostAbstract, o as FigmaPostCode, c as FigmaUiMessenger, m as UI_FIGMA_CLIENT_STORAGE_GET, h as UI_FIGMA_CLIENT_STORAGE_SET, u as UI_FIGMA_FRAMES_POST_NAME, f as UI_FIGMA_FRAMES_SELECTED_ADD_NAME, d as UI_FIGMA_FRAMES_SELECTED_POST_NAME, p as UI_FIGMA_FRAME_SET_SELECTION, g as UI_FIGMA_STORAGE_GET, _ as UI_FIGMA_STORAGE_SET, y as fetchClientStorage, T as fetchFramesSelected, D as fetchStorage, N as fetchTopLevelFrames, P as sendClientStorage, F as sendFrameSelection, I as sendFramesSelected, L as sendStorage };
