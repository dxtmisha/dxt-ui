import { t as e } from "./nitroAppTypes-BlLQoRNM.js";
import { ServerStorage as t, isDomRuntime as n } from "@dxtmisha/functional-basic";
import { createSSRApp as r, getCurrentInstance as i, inject as a } from "vue";
import { dxtFunctionalPlugin as o } from "@dxtmisha/functional";
import { createMemoryHistory as s, createRouter as c, createWebHistory as l } from "vue-router";
//#region src/functions/uiCreateSsrRouter.ts
function u(e, t = {}) {
	return c({
		...t,
		history: n() ? l() : s(),
		routes: e
	});
}
//#endregion
//#region src/functions/uiCreateApp.ts
function d(t, n = {}) {
	let i = r(t), a;
	if (n.router) a = n.router, i.use(n.router);
	else if (n.appRouter) {
		let t = u(n.appRouter.routes, n.appRouter.options);
		i.provide(e, { storage: {} }), i.use(t);
	}
	return i.use(o, n), {
		app: i,
		router: a
	};
}
//#endregion
//#region src/functions/uiServerStorage.ts
function f() {
	t.init(() => {
		if (i()) {
			let t = a(e);
			if (t && t != null && t.storage) return t.storage;
		}
		return {};
	});
}
//#endregion
export { e as NITRO_APP_STORAGE, d as uiCreateApp, u as uiCreateSsrRouter, f as uiServerStorage };
