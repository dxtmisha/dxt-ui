import { defineComponent as m, computed as n, openBlock as d, createBlock as y, unref as g, mergeDefaults as k } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { defaultsMask as f, MaskDesign as b } from "@dxtmisha/constructor/Mask";
const a = {
  // :values [!] System label / Системная метка
  align: ["center", "left", "right"],
  dir: ["ltr", "rtl"]
  // :values [!] System label / Системная метка
}, v = {
  ...f,
  // :default [!] System label / Системная метка
  visible: !0
}, M = /* @__PURE__ */ m({
  name: "D1Mask",
  __name: "D1Mask",
  props: /* @__PURE__ */ k({
    name: {},
    value: {},
    valueDefault: {},
    currency: {},
    currencyHide: { type: Boolean },
    fullOnly: { type: Boolean },
    mask: {},
    special: {},
    match: {},
    groupSave: { type: Boolean },
    pattern: { type: [String, Object, Function] },
    check: { type: [String, Object, Function] },
    fraction: { type: [String, Boolean, Number] },
    type: {},
    view: {},
    inputAttrs: {},
    language: {},
    visible: { type: Boolean },
    visiblePartly: { type: Boolean },
    align: {},
    dir: {}
  }, v),
  emits: ["focus", "blur", "keydown", "keyup", "beforeinput", "input", "inputLite", "change", "changeLite", "paste", "reset"],
  setup(i, { expose: r, emit: o }) {
    const l = o, e = i, c = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-mask": !0,
        "d1-mask--visible": e.visible,
        "d1-mask--visiblePartly": e.visiblePartly,
        [`d1-mask--align--${e.align}`]: s(a.align, e.align),
        [`d1-mask--dir--${e.dir}`]: s(a.dir, e.dir)
        // :classes-values [!] System label / Системная метка
      }
    })), p = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new b(
      "d1.mask",
      e,
      {
        emits: l,
        classes: c,
        styles: p
      }
    ), u = t.render();
    return r(t.expose()), (B, _) => (d(), y(g(u)));
  }
});
export {
  M as _
};
