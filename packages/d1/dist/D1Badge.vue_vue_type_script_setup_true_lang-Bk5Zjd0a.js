import { defineComponent as m, computed as r, openBlock as g, createBlock as y, unref as u, mergeDefaults as b } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { defaultsBadge as B, BadgeDesign as h } from "@dxtmisha/constructor/Badge";
import { _ as v } from "./D1Icon.vue_vue_type_script_setup_true_lang-xas36wzc.js";
const t = {
  // :values [!] System label / Системная метка
  overlap: ["rectangular", "circular", "static"],
  vertical: ["top", "center", "bottom"],
  horizontal: ["right", "center", "left"],
  size: ["sm", "md", "lg", "none"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, z = {
  ...B,
  // :default [!] System label / Системная метка
  overlap: "rectangular",
  vertical: "top",
  horizontal: "right",
  primary: !0,
  size: "md"
}, w = /* @__PURE__ */ m({
  name: "D1Badge",
  __name: "D1Badge",
  props: /* @__PURE__ */ b({
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    label: {},
    labelId: {},
    labelMax: {},
    formatting: { type: Boolean },
    ariaLabel: {},
    dot: { type: Boolean },
    hide: { type: Boolean },
    overlap: {},
    vertical: {},
    horizontal: {},
    primary: { type: Boolean },
    secondary: { type: Boolean },
    outline: { type: Boolean },
    size: {},
    palette: {}
  }, z),
  setup(l, { expose: n, emit: i }) {
    const s = i, e = l, d = r(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-badge": !0,
        "d1-badge--selected": e.selected,
        "d1-badge--hide": e.hide,
        "d1-badge--dot": e.dot,
        [`d1-badge--overlap--${e.overlap}`]: o(t.overlap, e.overlap),
        [`d1-badge--vertical--${e.vertical}`]: o(t.vertical, e.vertical),
        [`d1-badge--horizontal--${e.horizontal}`]: o(t.horizontal, e.horizontal),
        "d1-badge--primary": e.primary && !e.secondary && !e.outline,
        "d1-badge--secondary": e.secondary,
        "d1-badge--outline": e.outline,
        [`d1-badge--size--${e.size}`]: o(t.size, e.size),
        [`d1-palette d1-palette--${e.palette}`]: o(t.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), c = r(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new h(
      "d1.badge",
      e,
      {
        emits: s,
        classes: d,
        styles: c,
        components: {
          icon: v
        }
      }
    ), p = a.render();
    return n(a.expose()), (f, _) => (g(), y(u(p)));
  }
});
export {
  w as _
};
