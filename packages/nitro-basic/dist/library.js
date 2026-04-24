import { createSSRApp as e, getCurrentInstance as t, inject as n } from "vue";
import { Api as r, CookieStorage as i, Geo as a, MetaStatic as o, ServerStorage as s, isDomRuntime as c } from "@dxtmisha/functional-basic";
import { renderToString as l } from "vue/server-renderer";
import { dxtFunctionalPlugin as u } from "@dxtmisha/functional";
import { createMemoryHistory as d, createRouter as f, createWebHistory as p } from "vue-router";
//#region src/functions/getInject.ts
function m(e) {
	if (t()) {
		let t = n(e);
		if (t) return t;
	}
}
//#endregion
//#region src/types/nitroAppTypes.ts
var h = "__ui_server_storage", g = "__ui_server_cookie", _ = "__ui_server_headers";
//#endregion
//#region src/composables/useHeaders.ts
function v(e) {
	let t = m(_);
	if (e && t) {
		var n;
		return (n = t.get(e)) == null ? void 0 : n;
	}
	return t;
}
//#endregion
//#region src/functions/getRequestUrl.ts
function y(e) {
	return new URL(e.url).pathname;
}
//#endregion
//#region src/functions/initCookieStorage.ts
function b(e, t) {
	e.provide(g, t.headers.get("Cookie") || "");
}
//#endregion
//#region src/functions/initRouter.ts
async function x(e, t) {
	t && (await t.push(y(e)), await t.isReady());
}
//#endregion
//#region src/functions/initScriptsJson.ts
function S() {
	return [s.toString(), r.toString()].join("");
}
//#endregion
//#region src/functions/initServerStorage.ts
function C(e) {
	e.provide(h, { storage: {} });
}
//#endregion
//#region src/functions/initSsrApp.ts
async function w(e, t = {}) {
	return {
		appHtml: await l(e, t),
		teleportsHtml: t.teleports ? Object.values(t.teleports).join("") : "",
		context: t
	};
}
//#endregion
//#region src/functions/uiCookieStorage.ts
function T() {
	i.init(void 0, () => {
		var e;
		return (e = m("__ui_server_cookie")) == null ? "" : e;
	}, (e, t, n) => {
		let r = v();
		r && r.set("Set-Cookie", n);
	});
}
//#endregion
//#region src/functions/uiCreateSsrRouter.ts
function E(e, t = {}) {
	return f({
		...t,
		history: c() ? p() : d(),
		routes: e
	});
}
//#endregion
//#region src/functions/uiCreateApp.ts
function D(t, n = {}) {
	let r = e(t), i;
	if (n.router) i = n.router, r.use(n.router);
	else if (n.appRouter) {
		let e = E(n.appRouter.routes, n.appRouter.options);
		r.use(e);
	}
	return r.use(u, n), {
		app: r,
		router: i
	};
}
//#endregion
//#region src/functions/uiCreateServerApp.ts
async function O(e, t, n, r = {}) {
	b(e, t), C(e), await x(t, n);
	let i = await w(e, r);
	return {
		headers: v(),
		lang: a.getStandard(),
		scriptsJson: S(),
		meta: o.toString(),
		...i
	};
}
//#endregion
//#region src/functions/uiServerStorage.ts
function k() {
	s.init(() => {
		var e;
		let t = m(h);
		return (e = t == null ? void 0 : t.storage) == null ? {} : e;
	});
}
//#endregion
export { _ as NITRO_API_HEADERS, g as NITRO_APP_COOKIE, h as NITRO_APP_STORAGE, m as getInject, y as getRequestUrl, b as initCookieStorage, x as initRouter, S as initScriptsJson, C as initServerStorage, w as initSsrApp, T as uiCookieStorage, D as uiCreateApp, O as uiCreateServerApp, E as uiCreateSsrRouter, k as uiServerStorage, v as useHeaders };
