import { defineComponent as u, computed as l, openBlock as y, createBlock as m, unref as f, mergeDefaults as g } from "vue";
import { inArray as t } from "@dxtmisha/functional";
import { defaultsButton as b, ButtonDesign as B } from "@dxtmisha/constructor/Button";
import { _ as x } from "./D1Icon.vue_vue_type_script_setup_true_lang-xas36wzc.js";
import { _ } from "./D1Progress.vue_vue_type_script_setup_true_lang-C7VFkdo_.js";
import { _ as k } from "./D1Ripple.vue_vue_type_script_setup_true_lang-BbVI6dIs.js";
const o = {
  // :values [!] System label / Системная метка
  adaptive: ["iconAlways", "block", "auto", "iconSm", "iconMd", "iconLg", "iconXl", "icon2xl", "fullSm", "fullMd", "fullLg", "fullXl", "full2xl"],
  container: ["iconSm", "iconMd", "iconLg", "iconXl", "icon2xl", "fullSm", "fullMd", "fullLg", "fullXl", "full2xl"],
  textAlign: ["left", "center", "right"],
  size: ["xs", "sm", "md", "lg", "xl"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, v = {
  ...b,
  // :default [!] System label / Системная метка
  primary: !0,
  size: "md"
}, w = /* @__PURE__ */ u({
  name: "D1Button",
  __name: "D1Button",
  props: /* @__PURE__ */ g({
    label: {},
    labelId: {},
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
    href: {},
    ariaLabel: {},
    tag: {},
    type: {},
    focus: { type: Boolean },
    adaptive: {},
    container: {},
    inverse: { type: Boolean },
    grid: { type: Boolean },
    textAlign: {},
    primary: { type: Boolean },
    secondary: { type: Boolean },
    outline: { type: Boolean },
    text: { type: Boolean },
    size: {},
    roundedFull: { type: Boolean },
    palette: {}
  }, v),
  emits: ["click", "clickLite"],
  setup(i, { expose: a, emit: r }) {
    const s = r, e = i, c = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-button": !0,
        "d1-button--focus": e.focus,
        "d1-button--disabled": e.disabled,
        "d1-button--selected": e.selected,
        "d1-button--readonly": e.readonly,
        [`d1-button--adaptive--${e.adaptive}`]: t(o.adaptive, e.adaptive),
        [`d1-button--container--${e.container}`]: t(o.container, e.container),
        "d1-button--inverse": e.inverse,
        "d1-button--grid": e.grid,
        [`d1-button--textAlign--${e.textAlign}`]: t(o.textAlign, e.textAlign),
        "d1-button--primary": e.primary && !e.secondary && !e.outline && !e.text,
        "d1-button--secondary": e.secondary,
        "d1-button--outline": e.outline,
        "d1-button--text": e.text,
        [`d1-button--size--${e.size}`]: t(o.size, e.size),
        "d1-button--roundedFull": e.roundedFull,
        [`d1-palette d1-palette--${e.palette}`]: t(o.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), d = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new B(
      "d1.button",
      e,
      {
        emits: s,
        classes: c,
        styles: d,
        components: {
          icon: x,
          progress: _,
          ripple: k
        }
      }
    ), p = n.render();
    return a(n.expose()), (A, z) => (y(), m(f(p)));
  }
});
export {
  w as _
};
