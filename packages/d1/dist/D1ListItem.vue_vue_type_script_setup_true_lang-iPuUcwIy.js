import { defineComponent as f, computed as n, openBlock as y, createBlock as g, unref as u, mergeDefaults as I } from "vue";
import { inArray as t, isFilled as B } from "@dxtmisha/functional";
import { defaultsListItem as _, ListItemDesign as h } from "@dxtmisha/constructor/ListItem";
import { _ as b } from "./D1Icon.vue_vue_type_script_setup_true_lang-xas36wzc.js";
import { _ as T } from "./D1Badge.vue_vue_type_script_setup_true_lang-Bk5Zjd0a.js";
import { _ as k } from "./D1Progress.vue_vue_type_script_setup_true_lang-C7VFkdo_.js";
import { _ as x } from "./D1Ripple.vue_vue_type_script_setup_true_lang-BbVI6dIs.js";
const i = {
  // :values [!] System label / Системная метка
  iconAlign: ["center", "edge"],
  fill: [],
  size: ["sm", "md", "lg"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, A = {
  ..._,
  // :default [!] System label / Системная метка
  iconAlign: "edge",
  size: "md"
}, P = /* @__PURE__ */ f({
  name: "D1ListItem",
  __name: "D1ListItem",
  props: /* @__PURE__ */ I({
    label: {},
    labelId: {},
    highlight: {},
    highlightLengthStart: {},
    value: {},
    description: {},
    descriptionId: {},
    prefix: {},
    prefixId: {},
    caption: {},
    captionDecorative: { type: Boolean },
    suffix: {},
    suffixId: {},
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
    badge: {},
    badgeDot: { type: Boolean },
    loading: { type: [Boolean, Object] },
    isSkeleton: { type: Boolean },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    to: {},
    detail: {},
    role: {},
    index: {},
    href: {},
    tag: {},
    filterMode: { type: Boolean },
    divider: { type: Boolean },
    tabindex: {},
    type: {},
    parent: {},
    listId: {},
    search: {},
    focus: { type: Boolean },
    open: { type: Boolean },
    selectedChild: { type: Boolean },
    iconTop: { type: Boolean },
    iconAlign: {},
    fill: {},
    size: {},
    dense: { type: Boolean },
    palette: {}
  }, A),
  emits: ["click", "clickLite"],
  setup(s, { expose: a, emit: d }) {
    const c = d, e = s, r = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-listItem": !0,
        "d1-listItem--focus": e.focus,
        "d1-listItem--open": e.open,
        "d1-listItem--selected": e.selected,
        "d1-listItem--selectedChild": e.selectedChild,
        "d1-listItem--readonly": e.readonly,
        "d1-listItem--disabled": e.disabled,
        "d1-listItem--iconTop": e.iconTop,
        [`d1-listItem--iconAlign--${e.iconAlign}`]: t(i.iconAlign, e.iconAlign),
        "d1-listItem--fill--custom": B(e.fill) && !t(i.fill, e.fill),
        "d1-listItem--divider": e.divider,
        [`d1-listItem--size--${e.size}`]: t(i.size, e.size),
        "d1-listItem--dense": e.dense,
        [`d1-palette d1-palette--${e.palette}`]: t(i.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), p = n(() => {
      var o;
      return {
        // :styles-values [!] System label / Системная метка
        "--d1-listItem-sys-fill": (o = e.fill) != null ? o : null
        // :styles-values [!] System label / Системная метка
      };
    }), l = new h(
      "d1.listItem",
      e,
      {
        emits: c,
        classes: r,
        styles: p,
        components: {
          icon: b,
          badge: T,
          progress: k,
          ripple: x
        }
      }
    ), m = l.render();
    return a(l.expose()), (o, z) => (y(), g(u(m)));
  }
});
export {
  P as _
};
