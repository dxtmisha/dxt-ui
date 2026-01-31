import { defineComponent as c, computed as n, openBlock as m, createBlock as y, unref as g, mergeDefaults as u } from "vue";
import { inArray as p } from "@dxtmisha/functional";
import { defaultsAccordion as T, AccordionDesign as b } from "@dxtmisha/constructor/Accordion";
import { defaultsCell as D, CellDesign as k } from "@dxtmisha/constructor/Cell";
import { _ as L } from "./D1Icon.vue_vue_type_script_setup_true_lang-xas36wzc.js";
import { _ as $ } from "./D1Progress.vue_vue_type_script_setup_true_lang-C7VFkdo_.js";
import { _ as x } from "./D1Ripple.vue_vue_type_script_setup_true_lang-BbVI6dIs.js";
import { defaultsMotionTransform as w, MotionTransformDesign as A } from "@dxtmisha/constructor/MotionTransform";
const v = {
  // :values [!] System label / Системная метка
  dividerLabel: ["always", "none", "adaptiveSm", "adaptiveMd", "adaptiveLg", "adaptiveXl", "adaptive2xl", "containerSm", "containerMd", "containerLg", "containerXl", "container2xl"],
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, H = {
  ...D,
  // :default [!] System label / Системная метка
  divider: !0,
  padding: "none",
  paddingByIndent: !0
}, M = /* @__PURE__ */ c({
  name: "D1Cell",
  __name: "D1Cell",
  props: /* @__PURE__ */ u({
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
  }, H),
  emits: ["click", "clickLite"],
  setup(a, { expose: t, emit: i }) {
    const d = i, e = a, l = n(() => ({
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
        [`d1-cell--dividerLabel--${e.dividerLabel}`]: p(v.dividerLabel, e.dividerLabel),
        "d1-cell--iconTop": e.iconTop,
        [`d1-cell--padding--${e.padding}`]: p(v.padding, e.padding),
        "d1-cell--paddingByIndent": e.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), s = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new k(
      "d1.cell",
      e,
      {
        emits: d,
        classes: l,
        styles: s,
        components: {
          icon: L,
          progress: $,
          ripple: x
        }
      }
    ), r = o.render();
    return t(o.expose()), (B, f) => (m(), y(g(r)));
  }
}), O = M, _ = {
  // :values [!] System label / Системная метка
  animationHeadPosition: ["top", "toBottom"],
  adaptive: ["planeAlways", "planeSm", "planeMd", "planeLg", "planeXl", "plane2xl"]
  // :values [!] System label / Системная метка
}, I = {
  ...w,
  // :default [!] System label / Системная метка
  animationHeadPosition: "top",
  adaptive: "planeMd"
}, P = /* @__PURE__ */ c({
  name: "D1MotionTransform",
  __name: "D1MotionTransform",
  props: /* @__PURE__ */ u({
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
  }, I),
  emits: ["transform", "transformLite", "update:open", "update:modelOpen"],
  setup(a, { expose: t, emit: i }) {
    const d = i, e = a, l = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-motionTransform": !0,
        "d1-motionTransform--section": e.section,
        [`d1-motionTransform--animationHeadPosition--${e.animationHeadPosition}`]: p(_.animationHeadPosition, e.animationHeadPosition),
        [`d1-motionTransform--adaptive--${e.adaptive}`]: p(_.adaptive, e.adaptive)
        // :classes-values [!] System label / Системная метка
      }
    })), s = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new A(
      "d1.motionTransform",
      e,
      {
        emits: d,
        classes: l,
        styles: s
      }
    ), r = o.render();
    return t(o.expose()), (B, f) => (m(), y(g(r)));
  }
}), C = P, S = {
  // :values [!] System label / Системная метка
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, h = {
  ...T,
  iconArrowDown: "keyboard_arrow_down",
  // :default [!] System label / Системная метка
  divider: !0,
  padding: "none",
  paddingByIndent: !0
}, G = /* @__PURE__ */ c({
  name: "D1Accordion",
  __name: "D1Accordion",
  props: /* @__PURE__ */ u({
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
  }, h),
  emits: ["click", "clickLite", "transform", "transformLite", "update:open", "update:modelOpen"],
  setup(a, { expose: t, emit: i }) {
    const d = i, e = a, l = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-accordion": !0,
        "d1-accordion--divider": e.divider,
        [`d1-accordion--padding--${e.padding}`]: p(S.padding, e.padding),
        "d1-accordion--paddingByIndent": e.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), s = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new b(
      "d1.accordion",
      e,
      {
        emits: d,
        classes: l,
        styles: s,
        components: {
          cell: O,
          motionTransform: C
        }
      }
    ), r = o.render();
    return t(o.expose()), (B, f) => (m(), y(g(r)));
  }
});
export {
  C as D,
  G as _,
  M as a,
  P as b
};
