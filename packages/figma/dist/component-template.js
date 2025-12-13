import { defineComponent, mergeDefaults, createElementBlock, openBlock, toDisplayString } from "/Users/tung/Documents/GitHub/dxt-ui/node_modules/vue/dist/vue.runtime.esm-bundler.js";
const F1TestDefaults = {
  // value: 'value'
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "F1Test"
  },
  __name: "F1Test",
  props: /* @__PURE__ */ mergeDefaults({
    value: { type: String, required: false }
  }, F1TestDefaults),
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "f1-test" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1,
    toDisplayString($props.value),
    1
    /* TEXT */
  );
}
const item = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/tung/Documents/GitHub/dxt-ui/packages/figma/src/components/F1Test/F1Test.vue"]]);
const F1Test = item;
export {
  F1Test
};
//# sourceMappingURL=component-template.js.map
