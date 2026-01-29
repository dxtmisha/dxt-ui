import { defineComponent as m, computed as t, openBlock as y, createBlock as g, unref as u, mergeDefaults as B } from "vue";
import { inArray as n } from "@dxtmisha/functional";
import { defaultsAccordion as b, AccordionDesign as D } from "@dxtmisha/constructor/Accordion";
import { defaultsCell as k, CellDesign as $ } from "@dxtmisha/constructor/Cell";
import { _ as L } from "./D1Icon.vue_vue_type_script_setup_true_lang-xas36wzc.js";
import { defaultsProgress as x, ProgressDesign as w } from "@dxtmisha/constructor/Progress";
import { _ as P } from "./D1Ripple.vue_vue_type_script_setup_true_lang-BbVI6dIs.js";
import { defaultsMotionTransform as H, MotionTransformDesign as A } from "@dxtmisha/constructor/MotionTransform";
const c = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom", "static"],
  size: ["sm", "md", "lg"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, M = {
  ...x,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top",
  size: "md"
}, O = /* @__PURE__ */ m({
  name: "D1Progress",
  __name: "D1Progress",
  props: /* @__PURE__ */ B({
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
  }, M),
  setup(i, { expose: a, emit: s }) {
    const d = s, e = i, r = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-progress": !0,
        "d1-progress--point": e.point,
        "d1-progress--linear": e.linear && !e.circular,
        "d1-progress--circular": e.circular,
        [`d1-progress--indeterminate--${e.indeterminate}`]: n(c.indeterminate, e.indeterminate),
        [`d1-progress--position--${e.position}`]: n(c.position, e.position),
        "d1-progress--dense": e.dense,
        "d1-progress--inverse": e.inverse,
        [`d1-progress--size--${e.size}`]: n(c.size, e.size),
        [`d1-palette d1-palette--${e.palette}`]: n(c.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), l = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new w(
      "d1.progress",
      e,
      {
        emits: d,
        classes: r,
        styles: l
      }
    ), p = o.render();
    return a(o.expose()), (f, v) => (y(), g(u(p)));
  }
}), _ = {
  // :values [!] System label / Системная метка
  dividerLabel: ["always", "none", "adaptiveSm", "adaptiveMd", "adaptiveLg", "adaptiveXl", "adaptive2xl", "containerSm", "containerMd", "containerLg", "containerXl", "container2xl"],
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, I = {
  ...k,
  // :default [!] System label / Системная метка
  divider: !0,
  padding: "none",
  paddingByIndent: !0
}, z = /* @__PURE__ */ m({
  name: "D1Cell",
  __name: "D1Cell",
  props: /* @__PURE__ */ B({
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
  }, I),
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
        [`d1-cell--dividerLabel--${e.dividerLabel}`]: n(_.dividerLabel, e.dividerLabel),
        "d1-cell--iconTop": e.iconTop,
        [`d1-cell--padding--${e.padding}`]: n(_.padding, e.padding),
        "d1-cell--paddingByIndent": e.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), l = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new $(
      "d1.cell",
      e,
      {
        emits: d,
        classes: r,
        styles: l,
        components: {
          icon: L,
          progress: O,
          ripple: P
        }
      }
    ), p = o.render();
    return a(o.expose()), (f, v) => (y(), g(u(p)));
  }
}), C = z, T = {
  // :values [!] System label / Системная метка
  animationHeadPosition: ["top", "toBottom"],
  adaptive: ["planeAlways", "planeSm", "planeMd", "planeLg", "planeXl", "plane2xl"]
  // :values [!] System label / Системная метка
}, S = {
  ...H,
  // :default [!] System label / Системная метка
  animationHeadPosition: "top",
  adaptive: "planeMd"
}, h = /* @__PURE__ */ m({
  name: "D1MotionTransform",
  __name: "D1MotionTransform",
  props: /* @__PURE__ */ B({
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
  }, S),
  emits: ["transform", "transformLite", "update:open", "update:modelOpen"],
  setup(i, { expose: a, emit: s }) {
    const d = s, e = i, r = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-motionTransform": !0,
        "d1-motionTransform--section": e.section,
        [`d1-motionTransform--animationHeadPosition--${e.animationHeadPosition}`]: n(T.animationHeadPosition, e.animationHeadPosition),
        [`d1-motionTransform--adaptive--${e.adaptive}`]: n(T.adaptive, e.adaptive)
        // :classes-values [!] System label / Системная метка
      }
    })), l = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new A(
      "d1.motionTransform",
      e,
      {
        emits: d,
        classes: r,
        styles: l
      }
    ), p = o.render();
    return a(o.expose()), (f, v) => (y(), g(u(p)));
  }
}), F = h, U = {
  // :values [!] System label / Системная метка
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, V = {
  ...b,
  iconArrowDown: "keyboard_arrow_down",
  // :default [!] System label / Системная метка
  divider: !0,
  padding: "none",
  paddingByIndent: !0
}, Q = /* @__PURE__ */ m({
  name: "D1Accordion",
  __name: "D1Accordion",
  props: /* @__PURE__ */ B({
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
  }, V),
  emits: ["click", "clickLite", "transform", "transformLite", "update:open", "update:modelOpen"],
  setup(i, { expose: a, emit: s }) {
    const d = s, e = i, r = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-accordion": !0,
        "d1-accordion--divider": e.divider,
        [`d1-accordion--padding--${e.padding}`]: n(U.padding, e.padding),
        "d1-accordion--paddingByIndent": e.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), l = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new D(
      "d1.accordion",
      e,
      {
        emits: d,
        classes: r,
        styles: l,
        components: {
          cell: C,
          motionTransform: F
        }
      }
    ), p = o.render();
    return a(o.expose()), (f, v) => (y(), g(u(p)));
  }
});
export {
  F as D,
  Q as _,
  O as a,
  z as b,
  h as c
};
