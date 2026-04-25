import { createSSRApp as e, hasInjectionContext as t, inject as n } from "vue";
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
//#region src/functions/getRequestOrigin.ts
function y(e) {
	return new URL(e.url).origin;
}
//#endregion
//#region src/functions/getRequestUrl.ts
function b(e) {
	return new URL(e.url).pathname;
}
//#endregion
//#region src/functions/initApi.ts
function x(e) {
	r.setOrigin(y(e)), console.log("getRequestOrigin(request)", y(e), r.getOrigin());
}
//#endregion
//#region src/functions/initClientRouter.ts
async function S(e) {
	e && await e.isReady();
}
//#endregion
//#region src/functions/initCookieStorage.ts
function C(e, t) {
	e.provide(g, t.headers.get("Cookie") || "");
}
//#endregion
//#region src/functions/initHeaders.ts
function w(e) {
	let t = new Headers();
	t.set("Content-Type", "text/html;charset=UTF-8"), e.provide(_, t);
}
//#endregion
//#region src/functions/initScriptsJson.ts
function T() {
	return [s.toString(), r.getHydration().toString()].join("");
}
//#endregion
//#region src/functions/initServerRouter.ts
async function E(e, t) {
	t && (await t.push(b(e)), await t.isReady());
}
//#endregion
//#region src/functions/initServerStorage.ts
function D(e) {
	e.provide(h, { storage: {} }), console.log("initServerStorage");
}
//#endregion
//#region src/functions/initSsrApp.ts
async function O(e, t = {}) {
	return {
		appHtml: await l(e, t),
		teleportsHtml: t.teleports ? Object.values(t.teleports).join("") : "",
		context: t
	};
}
//#endregion
//#region src/functions/uiCookieStorage.ts
function k() {
	i.init(void 0, () => {
		var e;
		return (e = m("__ui_server_cookie")) == null ? "" : e;
	}, (e, t, n) => {
		let r = v();
		r && r.set("Set-Cookie", n);
	});
}
//#endregion
//#region src/functions/uiServerStorage.ts
function A() {
	s.init(() => {
		let e = m(h);
		return e == null ? void 0 : e.storage;
	});
}
//#endregion
//#region src/functions/uiBootstrapServer.ts
function j() {
	k(), A();
}
//#endregion
//#region src/functions/uiCreateSsrRouter.ts
function M(e, t = {}) {
	return f({
		...t,
		history: c() ? p() : d(),
		routes: e
	});
}
//#endregion
//#region src/functions/uiCreateApp.ts
function N(t, n = {}) {
	let r = e(t), i;
	return n.router ? (i = n.router, r.use(n.router)) : n.appRouter && (i = M(n.appRouter.routes, n.appRouter.options), r.use(i)), r.use(u, n), {
		app: r,
		router: i
	};
}
//#endregion
//#region src/functions/uiCreateClientApp.ts
async function P(e, t = "#app", n, r) {
	await S(n), r && await r(e), t && e.mount(t, !0);
}
//#endregion
//#region src/functions/uiCreateServerApp.ts
async function F(e, t, n, r, i = {}, s) {
	w(e), D(e), C(e, t), e.runWithContext(() => x(t)), await E(t, n), r && await r(e);
	let c = await O(e, i);
	return e.runWithContext(() => {
		let e = v(), t = a.getStandard(), n = o.htmlTitle(), r = o.html(), i = T(), l;
		return l = s ? s.replace("<!--ssr-lang-->", t).replace("<!--ssr-title-->", n).replace("<!--ssr-meta-->", r).replace("<!--ssr-scriptsJson-->", i).replace("<!--ssr-outlet-->", c.appHtml).replace("<!--ssr-teleports-->", c.teleportsHtml) : c.appHtml, {
			headers: e,
			lang: t,
			title: n,
			meta: r,
			scriptsJson: i,
			body: l,
			...c
		};
	});
}
//#endregion
export { _ as NITRO_API_HEADERS, g as NITRO_APP_COOKIE, h as NITRO_APP_STORAGE, m as getInject, y as getRequestOrigin, b as getRequestUrl, x as initApi, S as initClientRouter, C as initCookieStorage, w as initHeaders, T as initScriptsJson, E as initServerRouter, D as initServerStorage, O as initSsrApp, j as uiBootstrapServer, k as uiCookieStorage, N as uiCreateApp, P as uiCreateClientApp, F as uiCreateServerApp, M as uiCreateSsrRouter, A as uiServerStorage, v as useHeaders };
