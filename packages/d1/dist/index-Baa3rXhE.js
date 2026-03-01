import { defineComponent as u, computed as l, openBlock as m, createBlock as y, unref as f, mergeDefaults as g } from "vue";
import { inArray as i } from "@dxtmisha/functional";
import { M as h } from "./ButtonDesign-CVm0z3Hs-Cfqtv-p1.js";
import { _ as B } from "./D1Icon.vue_vue_type_script_setup_true_lang-Cs247ZwJ.js";
import { _ as v } from "./D1Progress.vue_vue_type_script_setup_true_lang-BBIs4Qvn.js";
import { _ as x } from "./D1Ripple.vue_vue_type_script_setup_true_lang-CX94jwSw.js";
const _ = {
  tag: "span"
};
class b extends h {
}
const t = {
  // :values [!] System label / Системная метка
  adaptive: ["iconAlways", "block", "auto", "iconSm", "iconMd", "iconLg", "iconXl", "icon2xl", "fullSm", "fullMd", "fullLg", "fullXl", "full2xl"],
  container: ["iconSm", "iconMd", "iconLg", "iconXl", "icon2xl", "fullSm", "fullMd", "fullLg", "fullXl", "full2xl"],
  textAlign: ["left", "center", "right"],
  size: ["sm", "md", "lg"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, k = {
  ..._,
  // :default [!] System label / Системная метка
  input: !0,
  size: "md"
}, A = /* @__PURE__ */ u({
  name: "D1Chip",
  __name: "D1Chip",
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
    href: {},
    value: {},
    detail: {},
    ariaLabel: {},
    tag: {},
    type: {},
    focus: { type: Boolean },
    adaptive: {},
    container: {},
    inverse: { type: Boolean },
    grid: { type: Boolean },
    textAlign: {},
    input: { type: Boolean },
    assistive: { type: Boolean },
    size: {},
    roundedFull: { type: Boolean },
    palette: {}
  }, k),
  emits: ["click", "clickLite"],
  setup(n, { expose: a, emit: s }) {
    const c = s, e = n, p = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-chip": !0,
        "d1-chip--focus": e.focus,
        "d1-chip--disabled": e.disabled,
        "d1-chip--selected": e.selected,
        "d1-chip--readonly": e.readonly,
        [`d1-chip--adaptive--${e.adaptive}`]: i(t.adaptive, e.adaptive),
        [`d1-chip--container--${e.container}`]: i(t.container, e.container),
        "d1-chip--inverse": e.inverse,
        "d1-chip--grid": e.grid,
        [`d1-chip--textAlign--${e.textAlign}`]: i(t.textAlign, e.textAlign),
        "d1-chip--input": e.input && !e.assistive,
        "d1-chip--assistive": e.assistive,
        [`d1-chip--size--${e.size}`]: i(t.size, e.size),
        "d1-chip--roundedFull": e.roundedFull,
        [`d1-palette d1-palette--${e.palette}`]: i(t.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), r = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new b(
      "d1.chip",
      e,
      {
        emits: c,
        classes: p,
        styles: r,
        components: {
          icon: B,
          progress: v,
          ripple: x
        }
      }
    ), d = o.render();
    return a(o.expose()), (z, D) => (m(), y(f(d)));
  }
}), C = A;
export {
  C as D
};
