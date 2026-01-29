import { defineComponent as m, computed as t, openBlock as y, createBlock as u, unref as B, mergeDefaults as x } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { defaultsIcon as h, IconDesign as f } from "@dxtmisha/constructor/Icon";
import { _ as g } from "./D1Image.vue_vue_type_script_setup_true_lang-DNSEm9t1.js";
const _ = g, n = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  size: ["auto", "x", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
  rounded: ["auto", "sm", "md", "lg", "xl", "full"]
  // :values [!] System label / Системная метка
}, v = {
  ...h,
  // :default [!] System label / Системная метка
  animationType: "type1",
  square: !0,
  size: "auto",
  rounded: "auto"
}, q = /* @__PURE__ */ m({
  name: "D1Icon",
  __name: "D1Icon",
  props: /* @__PURE__ */ x({
    isSkeleton: { type: Boolean },
    ariaLabel: {},
    to: {},
    value: {},
    detail: {},
    active: { type: Boolean },
    icon: {},
    iconActive: {},
    role: {},
    tabindex: {},
    turn: { type: Boolean },
    disabled: { type: Boolean },
    hide: { type: Boolean },
    asPalette: { type: Boolean },
    dir: { type: Boolean },
    overlay: { type: Boolean },
    dynamic: { type: Boolean },
    start: { type: Boolean },
    end: { type: Boolean },
    high: { type: Boolean },
    animationType: {},
    animationShow: { type: Boolean },
    square: { type: Boolean },
    circle: { type: Boolean },
    rect: { type: Boolean },
    size: {},
    inverse: { type: Boolean },
    rounded: {}
  }, v),
  emits: ["load", "click", "clickLite"],
  setup(a, { expose: c, emit: s }) {
    const d = s, e = a, r = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-icon": !0,
        "d1-icon--turn": e.turn,
        "d1-icon--disabled": e.disabled,
        "d1-icon--hide": e.hide,
        "d1-icon--asPalette": e.asPalette,
        "d1-icon--dir": e.dir,
        "d1-icon--overlay": e.overlay,
        "d1-icon--dynamic": e.dynamic,
        "d1-icon--start": e.start,
        "d1-icon--end": e.end,
        "d1-icon--high": e.high,
        [`d1-icon--animationType--${e.animationType}`]: o(n.animationType, e.animationType),
        "d1-icon--animationShow": e.animationShow,
        "d1-icon--square": e.square && !e.circle && !e.rect,
        "d1-icon--circle": e.circle,
        "d1-icon--rect": e.rect,
        [`d1-icon--size--${e.size}`]: o(n.size, e.size),
        "d1-icon--inverse": e.inverse,
        [`d1-icon--rounded--${e.rounded}`]: o(n.rounded, e.rounded)
        // :classes-values [!] System label / Системная метка
      }
    })), l = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), i = new f(
      "d1.icon",
      e,
      {
        emits: d,
        components: {
          image: _
        },
        classes: r,
        styles: l
      }
    ), p = i.render();
    return c(i.expose()), (T, k) => (y(), u(B(p)));
  }
});
export {
  q as _
};
