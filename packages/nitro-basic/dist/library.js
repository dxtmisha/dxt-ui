import { dxtFunctionalPlugin as e, getInject as t } from "@dxtmisha/functional";
import { Api as n, CookieStorage as r, Geo as i, MetaStatic as a, ServerStorage as o, initGetElementId as s, isDomRuntime as c } from "@dxtmisha/functional-basic";
import { renderToString as l } from "vue/server-renderer";
import { createSSRApp as u, useId as d } from "vue";
import { createMemoryHistory as f, createRouter as p, createWebHistory as m } from "vue-router";
//#region src/types/nitroAppTypes.ts
var h = "__ui_server_storage", g = "__ui_server_cookie", _ = "__ui_server_headers";
//#endregion
//#region src/composables/useHeaders.ts
function v(e) {
	let n = t(_);
	if (e && n) {
		var r;
		return (r = n.get(e)) == null ? void 0 : r;
	}
	return n;
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
	n.setOrigin(y(e));
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
	return [o.toString(), n.getHydration().toString()].join("");
}
//#endregion
//#region src/functions/initServerRouter.ts
async function E(e, t) {
	t && (await t.push(b(e)), await t.isReady());
}
//#endregion
//#region src/functions/initServerStorage.ts
function D(e) {
	e.provide(h, { storage: {} });
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
//#region src/functions/uiBootstrapClient.ts
function k() {
	s(() => d());
}
//#endregion
//#region src/functions/uiCookieStorage.ts
function A() {
	r.init(void 0, () => {
		var e;
		return (e = t("__ui_server_cookie")) == null ? "" : e;
	}, (e, t, n) => {
		let r = v();
		r && r.set("Set-Cookie", n);
	});
}
//#endregion
//#region src/functions/uiServerStorage.ts
function j() {
	o.init(() => {
		let e = t(h);
		return e == null ? void 0 : e.storage;
	});
}
//#endregion
//#region src/functions/uiBootstrapServer.ts
function M() {
	A(), j();
}
//#endregion
//#region src/functions/uiCreateSsrRouter.ts
function N(e, t = {}) {
	return p({
		...t,
		history: c() ? m() : f(),
		routes: e
	});
}
//#endregion
//#region src/functions/uiCreateApp.ts
function P(e, t = {}) {
	let n = u(e), r;
	return t.router ? (r = t.router, n.use(t.router)) : t.appRouter && (r = N(t.appRouter.routes, t.appRouter.options), n.use(r)), {
		app: n,
		router: r,
		options: t
	};
}
//#endregion
//#region src/functions/uiCreateClientApp.ts
async function F(t, n = "#app", r, i = {}, a) {
	t.use(e, i), await S(r), a && await a(t), n && t.mount(n, !0);
}
//#endregion
//#region src/functions/uiCreateServerApp.ts
async function I(t, n, r, o = {}, s, c = {}, l) {
	w(t), D(t), C(t, n), t.runWithContext(() => {
		x(n), t.use(e, o);
	}), await E(n, r), s && await s(t);
	let u = await O(t, c);
	return t.runWithContext(() => {
		let e = v(), t = i.getStandard(), n = a.htmlTitle(), r = a.html(), o = T(), s;
		return s = l ? l.replace("<!--ssr-lang-->", t).replace("<!--ssr-title-->", n).replace("<!--ssr-meta-->", r).replace("<!--ssr-scriptsJson-->", o).replace("<!--ssr-outlet-->", u.appHtml).replace("<!--ssr-teleports-->", u.teleportsHtml) : u.appHtml, {
			headers: e,
			lang: t,
			title: n,
			meta: r,
			scriptsJson: o,
			body: s,
			...u
		};
	});
}
//#endregion
export { _ as NITRO_API_HEADERS, g as NITRO_APP_COOKIE, h as NITRO_APP_STORAGE, y as getRequestOrigin, b as getRequestUrl, x as initApi, S as initClientRouter, C as initCookieStorage, w as initHeaders, T as initScriptsJson, E as initServerRouter, D as initServerStorage, O as initSsrApp, k as uiBootstrapClient, M as uiBootstrapServer, A as uiCookieStorage, P as uiCreateApp, F as uiCreateClientApp, I as uiCreateServerApp, N as uiCreateSsrRouter, j as uiServerStorage, v as useHeaders };
