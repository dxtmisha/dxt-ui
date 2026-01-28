import { defineComponent as c, computed as t, openBlock as m, createBlock as y, unref as u, mergeDefaults as g } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { defaultsAccordion as b, AccordionDesign as D } from "@dxtmisha/constructor/Accordion";
import { defaultsCell as $, CellDesign as k } from "@dxtmisha/constructor/Cell";
import { defaultsIcon as h, IconDesign as w } from "@dxtmisha/constructor/Icon";
import { _ as L } from "./D1Image.vue_vue_type_script_setup_true_lang-DNSEm9t1.js";
import { defaultsProgress as P, ProgressDesign as z } from "@dxtmisha/constructor/Progress";
import { defaultsRipple as I, RippleDesign as A } from "@dxtmisha/constructor/Ripple";
import { defaultsMotionTransform as H, MotionTransformDesign as S } from "@dxtmisha/constructor/MotionTransform";
const M = L, _ = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  size: ["auto", "x", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
  rounded: ["auto", "sm", "md", "lg", "xl", "full"]
  // :values [!] System label / Системная метка
}, O = {
  ...h,
  // :default [!] System label / Системная метка
  animationType: "type1",
  square: !0,
  size: "auto",
  rounded: "auto"
}, C = /* @__PURE__ */ c({
  name: "D1Icon",
  __name: "D1Icon",
  props: /* @__PURE__ */ g({
    isSkeleton: { type: Boolean },
    ariaLabel: {},
    active: { type: Boolean },
    icon: {},
    iconActive: {},
    role: {},
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
  }, O),
  emits: ["load"],
  setup(i, { expose: a, emit: s }) {
    const d = s, e = i, r = t(() => ({
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
        [`d1-icon--animationType--${e.animationType}`]: o(_.animationType, e.animationType),
        "d1-icon--animationShow": e.animationShow,
        "d1-icon--square": e.square && !e.circle && !e.rect,
        "d1-icon--circle": e.circle,
        "d1-icon--rect": e.rect,
        [`d1-icon--size--${e.size}`]: o(_.size, e.size),
        "d1-icon--inverse": e.inverse,
        [`d1-icon--rounded--${e.rounded}`]: o(_.rounded, e.rounded)
        // :classes-values [!] System label / Системная метка
      }
    })), l = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new w(
      "d1.icon",
      e,
      {
        emits: d,
        components: {
          image: M
        },
        classes: r,
        styles: l
      }
    ), p = n.render();
    return a(n.expose()), (B, f) => (m(), y(u(p)));
  }
}), v = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom", "static"],
  size: ["sm", "md", "lg"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, V = {
  ...P,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top",
  size: "md"
}, q = /* @__PURE__ */ c({
  name: "D1Progress",
  __name: "D1Progress",
  props: /* @__PURE__ */ g({
    ariaLabel: {},
    ariaLive: {},
    visible: { type: Boolean },
    value: {},
    max: {},
    linear: { type: Boolean },
    circular: { type: Boolean },
    point: { type: Boolean },
    delay: {},
    delayHide: {},
    indeterminate: {},
    position: {},
    dense: { type: Boolean },
    inverse: { type: Boolean },
    size: {},
    palette: {}
  }, V),
  setup(i, { expose: a, emit: s }) {
    const d = s, e = i, r = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-progress": !0,
        "d1-progress--point": e.point,
        "d1-progress--linear": e.linear && !e.circular,
        "d1-progress--circular": e.circular,
        [`d1-progress--indeterminate--${e.indeterminate}`]: o(v.indeterminate, e.indeterminate),
        [`d1-progress--position--${e.position}`]: o(v.position, e.position),
        "d1-progress--dense": e.dense,
        "d1-progress--inverse": e.inverse,
        [`d1-progress--size--${e.size}`]: o(v.size, e.size),
        [`d1-palette d1-palette--${e.palette}`]: o(v.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), l = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new z(
      "d1.progress",
      e,
      {
        emits: d,
        classes: r,
        styles: l
      }
    ), p = n.render();
    return a(n.expose()), (B, f) => (m(), y(u(p)));
  }
}), F = {
  ...I
}, R = /* @__PURE__ */ c({
  name: "D1Ripple",
  __name: "D1Ripple",
  props: /* @__PURE__ */ g({
    disabled: { type: Boolean }
  }, F),
  setup(i, { expose: a, emit: s }) {
    const d = s, e = i, r = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), l = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new A(
      "d1.ripple",
      e,
      {
        emits: d,
        classes: r,
        styles: l
      }
    ), p = n.render();
    return a(n.expose()), (B, f) => (m(), y(u(p)));
  }
}), T = {
  // :values [!] System label / Системная метка
  dividerLabel: ["always", "none", "adaptiveSm", "adaptiveMd", "adaptiveLg", "adaptiveXl", "adaptive2xl", "containerSm", "containerMd", "containerLg", "containerXl", "container2xl"],
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, U = {
  ...$,
  // :default [!] System label / Системная метка
  divider: !0,
  padding: "none",
  paddingByIndent: !0
}, X = /* @__PURE__ */ c({
  name: "D1Cell",
  __name: "D1Cell",
  props: /* @__PURE__ */ g({
    label: {},
    labelId: {},
    description: {},
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
  }, U),
  emits: ["click", "clickLite"],
  setup(i, { expose: a, emit: s }) {
    const d = s, e = i, r = t(() => ({
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
        [`d1-cell--dividerLabel--${e.dividerLabel}`]: o(T.dividerLabel, e.dividerLabel),
        "d1-cell--iconTop": e.iconTop,
        [`d1-cell--padding--${e.padding}`]: o(T.padding, e.padding),
        "d1-cell--paddingByIndent": e.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), l = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new k(
      "d1.cell",
      e,
      {
        emits: d,
        classes: r,
        styles: l,
        components: {
          icon: C,
          progress: q,
          ripple: R
        }
      }
    ), p = n.render();
    return a(n.expose()), (B, f) => (m(), y(u(p)));
  }
}), j = X, x = {
  // :values [!] System label / Системная метка
  animationHeadPosition: ["top", "toBottom"],
  adaptive: ["planeAlways", "planeSm", "planeMd", "planeLg", "planeXl", "plane2xl"]
  // :values [!] System label / Системная метка
}, E = {
  ...H,
  // :default [!] System label / Системная метка
  animationHeadPosition: "top",
  adaptive: "planeMd"
}, G = /* @__PURE__ */ c({
  name: "D1MotionTransform",
  __name: "D1MotionTransform",
  props: /* @__PURE__ */ g({
    role: {},
    ariaLabelledby: {},
    ariaDescribedby: {},
    open: { type: Boolean },
    inDom: { type: Boolean },
    ignore: {},
    ignoreSelector: {},
    clickOpen: { type: Boolean },
    autoClose: { type: Boolean },
    animationShow: { type: Boolean },
    tagBody: {},
    modelOpen: { type: Boolean },
    "onUpdate:open": { type: Function },
    "onUpdate:modelOpen": { type: Function },
    section: { type: Boolean },
    animationHeadPosition: {},
    adaptive: {}
  }, E),
  emits: ["transform", "transformLite", "update:open", "update:modelOpen"],
  setup(i, { expose: a, emit: s }) {
    const d = s, e = i, r = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-motionTransform": !0,
        "d1-motionTransform--section": e.section,
        [`d1-motionTransform--animationHeadPosition--${e.animationHeadPosition}`]: o(x.animationHeadPosition, e.animationHeadPosition),
        [`d1-motionTransform--adaptive--${e.adaptive}`]: o(x.adaptive, e.adaptive)
        // :classes-values [!] System label / Системная метка
      }
    })), l = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new S(
      "d1.motionTransform",
      e,
      {
        emits: d,
        classes: r,
        styles: l
      }
    ), p = n.render();
    return a(n.expose()), (B, f) => (m(), y(u(p)));
  }
}), J = G, K = {
  // :values [!] System label / Системная метка
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, N = {
  ...b,
  iconArrowDown: "keyboard_arrow_down",
  // :default [!] System label / Системная метка
  divider: !0,
  padding: "none",
  paddingByIndent: !0
}, ae = /* @__PURE__ */ c({
  name: "D1Accordion",
  __name: "D1Accordion",
  props: /* @__PURE__ */ g({
    label: {},
    labelId: {},
    description: {},
    icon: {},
    open: { type: Boolean },
    clickOpen: { type: Boolean },
    autoClose: { type: Boolean },
    motionTransformAttrs: {},
    cellAttrs: {},
    iconArrowDown: {},
    modelOpen: { type: Boolean },
    "onUpdate:open": { type: Function },
    "onUpdate:modelOpen": { type: Function },
    divider: { type: Boolean },
    padding: {},
    paddingByIndent: { type: Boolean }
  }, N),
  emits: ["click", "clickLite", "transform", "transformLite", "update:open", "update:modelOpen"],
  setup(i, { expose: a, emit: s }) {
    const d = s, e = i, r = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-accordion": !0,
        "d1-accordion--divider": e.divider,
        [`d1-accordion--padding--${e.padding}`]: o(K.padding, e.padding),
        "d1-accordion--paddingByIndent": e.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), l = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new D(
      "d1.accordion",
      e,
      {
        emits: d,
        classes: r,
        styles: l,
        components: {
          cell: j,
          motionTransform: J
        }
      }
    ), p = n.render();
    return a(n.expose()), (B, f) => (m(), y(u(p)));
  }
});
export {
  J as D,
  ae as _,
  R as a,
  q as b,
  C as c,
  X as d,
  G as e
};
