import { defineComponent, mergeDefaults, createElementBlock, openBlock, renderSlot, createTextVNode, createElementVNode, toDisplayString } from "/Volumes/T7/Git/dxt-ui/node_modules/vue/dist/vue.runtime.esm-bundler.js";
const UiPlayerLiteDefaults = {
  status: "stop"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "UiPlayerLite"
  },
  __name: "UiPlayerLite",
  props: /* @__PURE__ */ mergeDefaults({
    url: { type: String, required: false },
    status: { type: String, required: false }
  }, UiPlayerLiteDefaults),
  emits: ["status"],
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
const _hoisted_1 = { class: "ui-player-lite" };
const _hoisted_2 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "top"),
    createTextVNode(
      " status: " + toDisplayString($props.status) + " ",
      1
      /* TEXT */
    ),
    createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("status", "play"))
    }, "Go"),
    createElementVNode("video", {
      src: $props.url,
      class: "ui-player-lite__video"
    }, null, 8, _hoisted_2),
    renderSlot(_ctx.$slots, "default")
  ]);
}
const item = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Volumes/T7/Git/dxt-ui/packages/player/src/components/UiPlayerLite/UiPlayerLite.vue"]]);
const UiPlayerLite = item;
export {
  UiPlayerLite
};
//# sourceMappingURL=component-template.js.map
