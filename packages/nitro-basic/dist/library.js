import { dxtFunctionalPlugin as e, getInject as t } from "@dxtmisha/functional";
import { Api as n, CookieStorage as r, Geo as i, MetaStatic as a, ServerStorage as o, initGetElementId as s, isDomRuntime as c } from "@dxtmisha/functional-basic";
import { renderToString as l } from "vue/server-renderer";
import { createSSRApp as u, getCurrentInstance as d, useId as f } from "vue";
import { createMemoryHistory as p, createRouter as m, createWebHistory as h } from "vue-router";
//#region src/types/nitroAppTypes.ts
var g = "__ui_server_storage", _ = "__ui_server_cookie", v = "__ui_server_headers";
//#endregion
//#region src/composables/useHeaders.ts
function y(e) {
	let n = t(v);
	if (e && n) {
		var r;
		return (r = n.get(e)) == null ? void 0 : r;
	}
	return n;
}
//#endregion
//#region src/functions/getRequestOrigin.ts
function b(e) {
	return new URL(e.url).origin;
}
//#endregion
//#region src/functions/getRequestUrl.ts
function x(e) {
	return new URL(e.url).pathname;
}
//#endregion
//#region src/functions/initApi.ts
function S(e) {
	n.setOrigin(b(e));
}
//#endregion
//#region src/functions/initClientRouter.ts
async function C(e) {
	e && await e.isReady();
}
//#endregion
//#region src/functions/initCookieStorage.ts
function w(e, t) {
	e.provide(_, t.headers.get("Cookie") || "");
}
//#endregion
//#region src/functions/initHeaders.ts
function T(e) {
	let t = new Headers();
	t.set("Content-Type", "text/html;charset=UTF-8"), e.provide(v, t);
}
//#endregion
//#region src/functions/initScriptsJson.ts
function E() {
	return [o.toString(), n.getHydration().toString()].join("");
}
//#endregion
//#region src/functions/initServerRouter.ts
async function D(e, t) {
	t && (await t.push(x(e)), await t.isReady());
}
//#endregion
//#region src/functions/initServerStorage.ts
function O(e) {
	e.provide(g, { storage: {} });
}
//#endregion
//#region src/functions/initSsrApp.ts
async function k(e, t = {}) {
	return {
		appHtml: await l(e, t),
		teleportsHtml: t.teleports ? Object.values(t.teleports).join("") : "",
		context: t
	};
}
//#endregion
//#region src/functions/uiId.ts
var A = 1e4;
function j() {
	s(() => d() ? f() : `ui-${A++}`);
}
//#endregion
//#region src/functions/uiBootstrapClient.ts
function M() {
	j();
}
//#endregion
//#region src/functions/uiCookieStorage.ts
function N() {
	r.init(void 0, () => {
		var e;
		return (e = t("__ui_server_cookie")) == null ? "" : e;
	}, (e, t, n) => {
		let r = y();
		r && r.set("Set-Cookie", n);
	});
}
//#endregion
//#region src/functions/uiServerStorage.ts
function P() {
	o.init(() => {
		let e = t(g);
		return e == null ? void 0 : e.storage;
	});
}
//#endregion
//#region src/functions/uiBootstrapServer.ts
function F() {
	N(), P(), j();
}
//#endregion
//#region src/functions/uiCreateSsrRouter.ts
function I(e, t = {}) {
	return m({
		...t,
		history: c() ? h() : p(),
		routes: e
	});
}
//#endregion
//#region src/functions/uiCreateApp.ts
function L(e, t = {}) {
	let n = u(e), r;
	return t.router ? (r = t.router, n.use(t.router)) : t.appRouter && (r = I(t.appRouter.routes, t.appRouter.options), n.use(r)), {
		app: n,
		router: r,
		options: t
	};
}
//#endregion
//#region src/functions/uiCreateClientApp.ts
async function R(t, n = "#app", r, i = {}, a) {
	t.use(e, i), await C(r), a && await a(t), n && t.mount(n, !0);
}
//#endregion
//#region src/functions/uiCreateServerApp.ts
async function z(t, n, r, o = {}, s, c = {}, l) {
	T(t), O(t), w(t, n), t.runWithContext(() => {
		S(n), t.use(e, o);
	}), await D(n, r), s && await s(t);
	let u = await k(t, c);
	return t.runWithContext(() => {
		let e = y(), t = i.getStandard(), n = a.htmlTitle(), r = a.html(), o = E(), s;
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
export { v as NITRO_API_HEADERS, _ as NITRO_APP_COOKIE, g as NITRO_APP_STORAGE, b as getRequestOrigin, x as getRequestUrl, S as initApi, C as initClientRouter, w as initCookieStorage, T as initHeaders, E as initScriptsJson, D as initServerRouter, O as initServerStorage, k as initSsrApp, M as uiBootstrapClient, F as uiBootstrapServer, N as uiCookieStorage, L as uiCreateApp, R as uiCreateClientApp, z as uiCreateServerApp, I as uiCreateSsrRouter, j as uiId, P as uiServerStorage, y as useHeaders };
