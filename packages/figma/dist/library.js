import { random as e } from "@dxtmisha/functional-basic";
//#region \0@oxc-project+runtime@0.120.0/helpers/typeof.js
function t(e) {
	"@babel/helpers - typeof";
	return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, t(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPrimitive.js
function n(e, n) {
	if (t(e) != "object" || !e) return e;
	var r = e[Symbol.toPrimitive];
	if (r !== void 0) {
		var i = r.call(e, n || "default");
		if (t(i) != "object") return i;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (n === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/toPropertyKey.js
function r(e) {
	var r = n(e, "string");
	return t(r) == "symbol" ? r : r + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.120.0/helpers/defineProperty.js
function i(e, t, n) {
	return (t = r(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/classes/FigmaPostCode.ts
var a = class {
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
i(a, "code", `figma-${e(1e5, 999999)}`), i(a, "isEditable", !0);
//#endregion
//#region src/classes/FigmaPostAbstract.ts
var o = class {
	constructor() {
		i(this, "isMake", !1), i(this, "posts", {}), i(this, "onMessage", (e) => {
			e && a.is(e.code) && this.notify(e.type, e.message);
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
}, s = class extends o {
	post(e, t) {
		parent.postMessage({ pluginMessage: {
			code: a.get(),
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
}, c;
function l() {
	return c || (c = new s(), c.make()), c;
}
//#endregion
//#region src/types/framesTypes.ts
var u = "ui-figma-frames-list", d = "ui-figma-frames-selected", f = "ui-figma-frames-selected-add", p = "ui-figma-frame-set-selection";
//#endregion
//#region src/functions/addFramesSelected.ts
function m(e, t) {
	l().post(f, {
		id: e,
		selected: t
	});
}
//#endregion
//#region src/functions/fetchFramesSelected.ts
var h, g = !1;
function _(e) {
	if (h) {
		e(h);
		return;
	}
	if (g) {
		setTimeout(() => _(e), 160);
		return;
	}
	g = !0, l().add(d, (t) => {
		h = t, g = !1, e(h);
	}).post(d);
}
//#endregion
//#region src/functions/fetchTopLevelFrames.ts
var v, y = !1;
function b(e) {
	if (v) {
		e(v);
		return;
	}
	if (y) {
		setTimeout(() => b(e), 160);
		return;
	}
	y = !0;
	let t = l(), n = (r) => {
		v = r, v.length > 0 && (e(v), t.remove(u, n), y = !1);
	};
	t.add(u, n).post(u);
}
//#endregion
//#region src/functions/sendSelectionFrame.ts
function x(e) {
	l().post(p, { id: e });
}
//#endregion
export { o as FigmaPostAbstract, a as FigmaPostCode, s as FigmaUiMessenger, u as UI_FIGMA_FRAMES_POST_NAME, f as UI_FIGMA_FRAMES_SELECTED_ADD_NAME, d as UI_FIGMA_FRAMES_SELECTED_POST_NAME, p as UI_FIGMA_FRAME_SET_SELECTION, m as addFramesSelected, _ as fetchFramesSelected, b as fetchTopLevelFrames, x as sendSelectionFrame, l as useFigmaUiMessenger };
