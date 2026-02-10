import { defineComponent as p, computed as s, openBlock as c, createBlock as m, unref as u, mergeDefaults as b } from "vue";
import { inArray as y } from "@dxtmisha/functional";
import { defaultsMenu as h, MenuDesign as B } from "@dxtmisha/constructor/Menu";
import { _ as w } from "./D1List.vue_vue_type_script_setup_true_lang-ys_l-2Q9.js";
import { D as f } from "./index-RVXlLQ5Y.js";
import { D as A } from "./index-Dike0osZ.js";
const g = w, L = {
  // :values [!] System label / Системная метка
  barsAdaptive: ["showAlways", "showSm", "showMd", "showLg", "showXl", "show2xl"]
  // :values [!] System label / Системная метка
}, k = {
  ...h
}, T = /* @__PURE__ */ p({
  name: "D1Menu",
  __name: "D1Menu",
  props: /* @__PURE__ */ b({
    barsLabel: {},
    barsDescription: {},
    barsBackHide: { type: Boolean },
    barsHide: { type: Boolean },
    barsList: {},
    barsAttrs: {},
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    modelSelected: {},
    "onUpdate:selected": { type: Function },
    "onUpdate:modelSelected": { type: Function },
    selected: { type: [Number, String, Boolean, Array] },
    hideList: { type: Boolean },
    list: {},
    liteThreshold: {},
    highlight: {},
    highlightLengthStart: {},
    filterMode: { type: Boolean },
    ajax: { type: [String, Function] },
    request: {},
    cache: { type: Boolean },
    keyLabel: {},
    keyValue: {},
    max: {},
    tag: {},
    step: {},
    listAttrs: {},
    itemAttrs: {},
    roleList: {},
    roleItem: {},
    isSelectedByValue: { type: Boolean },
    embedded: { type: Boolean },
    barsAdaptive: {}
  }, k),
  emits: ["bars", "barsLite", "barsBack", "click", "clickLite", "window", "update:selected", "update:modelSelected", "updateValue", "clickSlot"],
  setup(o, { expose: a, emit: n }) {
    const r = n, e = o, i = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-menu": !0,
        "d1-menu--hideList": e.hideList,
        [`d1-menu--barsAdaptive--${e.barsAdaptive}`]: y(L.barsAdaptive, e.barsAdaptive)
        // :classes-values [!] System label / Системная метка
      }
    })), l = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new B(
      "d1.menu",
      e,
      {
        emits: r,
        classes: i,
        styles: l,
        components: {
          list: g,
          bars: f,
          window: A
        }
      }
    ), d = t.render();
    return a(t.expose()), (D, _) => (c(), m(u(d)));
  }
});
export {
  T as _
};
