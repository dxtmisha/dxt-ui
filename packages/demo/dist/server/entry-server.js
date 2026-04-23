import { renderToString } from "@vue/server-renderer";
import { createSSRApp, mergeProps, resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { createMemoryHistory, createRouter } from "vue-router";
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region src/App.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_RouterView = resolveComponent("RouterView");
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "app-demo" }, _attrs))}>`);
	_push(ssrRenderComponent(_component_RouterView, null, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var App_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
//#region src/router.ts
function createSSRRouter() {
	return createRouter({
		history: createMemoryHistory(),
		routes: [{
			path: "/",
			component: () => import("./assets/Home-b_qxiwSc.js")
		}, {
			path: "/about",
			component: () => import("./assets/About-BcN2uOPw.js")
		}]
	});
}
//#endregion
//#region src/main.ts
function createApp() {
	const app = createSSRApp(App_default);
	const router = createSSRRouter();
	app.use(router);
	return {
		app,
		router
	};
}
//#endregion
//#region src/entry-server.ts
async function render(url) {
	const { app, router } = createApp();
	await router.push(url);
	await router.isReady();
	return await renderToString(app);
}
//#endregion
export { render, _plugin_vue_export_helper_default as t };
