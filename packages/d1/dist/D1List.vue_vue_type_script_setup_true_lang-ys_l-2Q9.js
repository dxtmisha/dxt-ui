import { defineComponent as m, computed as o, openBlock as p, createBlock as d, unref as u, mergeDefaults as _ } from "vue";
import { inArray as y } from "@dxtmisha/functional";
import { defaultsList as f, ListDesign as g } from "@dxtmisha/constructor/List";
import { _ as h } from "./D1ListItem.vue_vue_type_script_setup_true_lang-iPuUcwIy.js";
import { _ as x } from "./D1ListGroup.vue_vue_type_script_setup_true_lang-C_u-9aGr.js";
import { _ as k } from "./D1ListMenu.vue_vue_type_script_setup_true_lang-RqCdMNKM.js";
const w = h, A = x, B = k, L = {
  // :values [!] System label / Системная метка
  axis: ["x", "y"]
  // :values [!] System label / Системная метка
}, D = {
  ...f,
  iconArrowDown: "keyboard_arrow_down",
  iconArrowRight: "keyboard_arrow_right",
  // :default [!] System label / Системная метка
  axis: "y"
}, N = /* @__PURE__ */ m({
  name: "D1List",
  __name: "D1List",
  props: /* @__PURE__ */ _({
    role: {},
    ariaMultiselectable: { type: Boolean },
    focus: { type: [Number, String, Boolean] },
    selected: { type: [Number, String, Boolean, Array] },
    disabled: { type: Boolean },
    lite: { type: Boolean },
    list: {},
    liteThreshold: {},
    highlight: {},
    highlightLengthStart: {},
    filterMode: { type: Boolean },
    keyLabel: {},
    keyValue: {},
    max: {},
    tag: {},
    axis: {},
    divider: { type: Boolean },
    itemAttrs: {},
    itemManagementAttrs: {},
    itemGroupAttrs: {},
    itemMenuAttrs: {},
    iconArrowDown: {},
    iconArrowRight: {},
    roleItem: {},
    control: { type: Boolean }
  }, D),
  emits: ["click", "clickLite", "close"],
  setup(s, { expose: i, emit: r }) {
    const n = r, e = s, a = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-list": !0,
        [`d1-list--axis--${e.axis}`]: y(L.axis, e.axis),
        "d1-list--divider": e.divider
        // :classes-values [!] System label / Системная метка
      }
    })), l = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new g(
      "d1.list",
      e,
      {
        emits: n,
        classes: a,
        styles: l,
        components: {
          listItem: w,
          listGroup: A,
          listMenu: B
        }
      }
    ), c = t.render();
    return i(t.expose()), (b, M) => (p(), d(u(c)));
  }
});
export {
  N as _
};
