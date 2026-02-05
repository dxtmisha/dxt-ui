import { defineComponent as y, computed as o, openBlock as m, createBlock as g, unref as B, mergeDefaults as v } from "vue";
import { inArray as i } from "@dxtmisha/functional";
import { defaultsCell as f, CellDesign as u } from "@dxtmisha/constructor/Cell";
import { _ } from "./D1Icon.vue_vue_type_script_setup_true_lang-xas36wzc.js";
import { _ as b } from "./D1Progress.vue_vue_type_script_setup_true_lang-C7VFkdo_.js";
import { _ as T } from "./D1Ripple.vue_vue_type_script_setup_true_lang-BbVI6dIs.js";
const l = {
  // :values [!] System label / Системная метка
  dividerLabel: ["always", "none", "adaptiveSm", "adaptiveMd", "adaptiveLg", "adaptiveXl", "adaptive2xl", "containerSm", "containerMd", "containerLg", "containerXl", "container2xl"],
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, L = {
  ...f,
  // :default [!] System label / Системная метка
  divider: !0,
  padding: "none",
  paddingByIndent: !0
}, M = /* @__PURE__ */ y({
  name: "D1Cell",
  __name: "D1Cell",
  props: /* @__PURE__ */ v({
    label: {},
    labelId: {},
    description: {},
    descriptionId: {},
    caption: {},
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    iconTrailing: {},
    iconTrailingTurnOnly: { type: Boolean },
    iconTrailingDirOnly: { type: Boolean },
    iconTrailingPalette: { type: Boolean },
    loading: { type: [Boolean, Object] },
    isSkeleton: { type: Boolean },
    to: {},
    value: {},
    detail: {},
    role: {},
    tag: {},
    divider: { type: Boolean },
    dynamic: { type: Boolean },
    focus: { type: Boolean },
    dynamicHover: { type: Boolean },
    dividerLabel: {},
    iconTop: { type: Boolean },
    padding: {},
    paddingByIndent: { type: Boolean }
  }, L),
  emits: ["click", "clickLite"],
  setup(d, { expose: a, emit: t }) {
    const c = t, e = d, r = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-cell": !0,
        "d1-cell--focus": e.focus,
        "d1-cell--selected": e.selected,
        "d1-cell--readonly": e.readonly,
        "d1-cell--disabled": e.disabled,
        "d1-cell--dynamic": e.dynamic,
        "d1-cell--dynamicHover": e.dynamicHover,
        "d1-cell--divider": e.divider,
        [`d1-cell--dividerLabel--${e.dividerLabel}`]: i(l.dividerLabel, e.dividerLabel),
        "d1-cell--iconTop": e.iconTop,
        [`d1-cell--padding--${e.padding}`]: i(l.padding, e.padding),
        "d1-cell--paddingByIndent": e.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), p = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new u(
      "d1.cell",
      e,
      {
        emits: c,
        classes: r,
        styles: p,
        components: {
          icon: _,
          progress: b,
          ripple: T
        }
      }
    ), s = n.render();
    return a(n.expose()), (k, x) => (m(), g(B(s)));
  }
});
export {
  M as _
};
