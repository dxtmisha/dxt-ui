import { t as _plugin_vue_export_helper_default } from "../entry-server.js";
import { createTextVNode, resolveComponent, useSSRContext, withCtx } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
//#region src/views/About.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_router_link = resolveComponent("router-link");
	_push(`<div${ssrRenderAttrs(_attrs)}><h1>О нас</h1>`);
	_push(ssrRenderComponent(_component_router_link, { to: "/" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`На главную`);
			else return [createTextVNode("На главную")];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/About.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var About_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { About_default as default };
