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
//#region src/functions/initHeaders.ts
function x(e) {
	let t = new Headers();
	t.set("Content-Type", "text/html;charset=UTF-8"), e.provide(_, t);
}
//#endregion
//#region src/functions/initRouter.ts
async function S(e, t) {
	t && (await t.push(y(e)), await t.isReady());
}
//#endregion
//#region src/functions/initScriptsJson.ts
function C() {
	return [s.toString(), r.getHydration().toString()].join("");
}
//#endregion
//#region src/functions/initServerStorage.ts
function w(e) {
	e.provide(h, { storage: {} });
}
//#endregion
//#region src/functions/initSsrApp.ts
async function T(e, t = {}) {
	return {
		appHtml: await l(e, t),
		teleportsHtml: t.teleports ? Object.values(t.teleports).join("") : "",
		context: t
	};
}
//#endregion
//#region src/functions/uiCookieStorage.ts
function E() {
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
function D(e, t = {}) {
	return f({
		...t,
		history: c() ? p() : d(),
		routes: e
	});
}
//#endregion
//#region src/functions/uiCreateApp.ts
function O(t, n = {}) {
	let r = e(t), i;
	if (n.router) i = n.router, r.use(n.router);
	else if (n.appRouter) {
		let e = D(n.appRouter.routes, n.appRouter.options);
		r.use(e);
	}
	return r.use(u, n), {
		app: r,
		router: i
	};
}
//#endregion
//#region src/functions/uiCreateServerApp.ts
async function k(e, t, n, r = {}, i) {
	x(e), b(e, t), w(e), await S(t, n);
	let s = await T(e, r), c = v(), l = a.getStandard(), u = o.htmlTitle(), d = o.html(), f = C(), p;
	return p = i ? i.replace("<!--ssr-lang-->", l).replace("<!--ssr-title-->", u).replace("<!--ssr-meta-->", d).replace("<!--ssr-scriptsJson-->", f).replace("<!--ssr-outlet-->", s.appHtml).replace("<!--ssr-teleports-->", s.teleportsHtml) : s.appHtml, {
		headers: c,
		lang: l,
		title: u,
		meta: d,
		scriptsJson: f,
		body: p,
		...s
	};
}
//#endregion
//#region src/functions/uiServerStorage.ts
function A() {
	s.init(() => {
		var e;
		let t = m(h);
		return (e = t == null ? void 0 : t.storage) == null ? {} : e;
	});
}
//#endregion
export { _ as NITRO_API_HEADERS, g as NITRO_APP_COOKIE, h as NITRO_APP_STORAGE, m as getInject, y as getRequestUrl, b as initCookieStorage, x as initHeaders, S as initRouter, C as initScriptsJson, w as initServerStorage, T as initSsrApp, E as uiCookieStorage, O as uiCreateApp, k as uiCreateServerApp, D as uiCreateSsrRouter, A as uiServerStorage, v as useHeaders };
