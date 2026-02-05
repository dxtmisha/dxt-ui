import { defineComponent as c, computed as n, openBlock as f, createBlock as y, unref as u, mergeDefaults as B } from "vue";
import { inArray as t } from "@dxtmisha/functional";
import { defaultsMotionTransform as T, MotionTransformDesign as g } from "@dxtmisha/constructor/MotionTransform";
const a = {
  // :values [!] System label / Системная метка
  animationHeadPosition: ["top", "toBottom"],
  adaptive: ["planeAlways", "planeSm", "planeMd", "planeLg", "planeXl", "plane2xl"]
  // :values [!] System label / Системная метка
}, v = {
  ...T,
  // :default [!] System label / Системная метка
  animationHeadPosition: "top",
  adaptive: "planeMd"
}, k = /* @__PURE__ */ c({
  name: "D1MotionTransform",
  __name: "D1MotionTransform",
  props: /* @__PURE__ */ B({
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
  }, v),
  emits: ["transform", "transformLite", "update:open", "update:modelOpen"],
  setup(i, { expose: s, emit: p }) {
    const r = p, o = i, m = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-motionTransform": !0,
        "d1-motionTransform--section": o.section,
        [`d1-motionTransform--animationHeadPosition--${o.animationHeadPosition}`]: t(a.animationHeadPosition, o.animationHeadPosition),
        [`d1-motionTransform--adaptive--${o.adaptive}`]: t(a.adaptive, o.adaptive)
        // :classes-values [!] System label / Системная метка
      }
    })), d = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new g(
      "d1.motionTransform",
      o,
      {
        emits: r,
        classes: m,
        styles: d
      }
    ), l = e.render();
    return s(e.expose()), (H, P) => (f(), y(u(l)));
  }
});
export {
  k as _
};
