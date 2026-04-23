import { isDomRuntime as e } from "@dxtmisha/functional-basic";
import { createSSRApp as t } from "vue";
import { dxtFunctionalPlugin as n } from "@dxtmisha/functional";
import { createMemoryHistory as r, createRouter as i, createWebHistory as a } from "vue-router";
//#region src/functions/uiCreateSsrRouter.ts
function o(t, n = {}) {
	return i({
		...n,
		history: e() ? a() : r(),
		routes: t
	});
}
//#endregion
//#region src/functions/uiCreateApp.ts
function s(e, r = {}) {
	let i = t(e), a;
	if (r.router) a = r.router, i.use(r.router);
	else if (r.appRouter) {
		let e = o(r.appRouter.routes, r.appRouter.options);
		i.use(e);
	}
	return i.use(n, r), {
		app: i,
		router: a
	};
}
//#endregion
export { s as uiCreateApp, o as uiCreateSsrRouter };
