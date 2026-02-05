import { defineComponent as p, computed as t, openBlock as w, createBlock as b, unref as g, mergeDefaults as u } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { defaultsModal as f, ModalDesign as B } from "@dxtmisha/constructor/Modal";
import { D as y, a as D, b as h } from "./index-CN2q2jvV.js";
const a = {
  // :values [!] System label / Системная метка
  imagePosition: ["top", "left"],
  width: ["sm", "md", "lg", "xl", "auto"]
  // :values [!] System label / Системная метка
}, P = {
  ...f,
  // :default [!] System label / Системная метка
  imagePosition: "top",
  width: "md"
}, H = /* @__PURE__ */ p({
  name: "D1Modal",
  __name: "D1Modal",
  props: /* @__PURE__ */ u({
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    barsLabel: {},
    barsDescription: {},
    barsBackHide: { type: Boolean },
    barsHide: { type: Boolean },
    barsList: {},
    barsAttrs: {},
    actionsHide: { type: Boolean },
    actionsList: {},
    actionsSecondary: {},
    actionsAttrs: {},
    image: {},
    open: { type: Boolean },
    imagePosition: {},
    width: {}
  }, P),
  emits: ["window", "bars", "barsLite", "barsBack", "actions", "actionsLite"],
  setup(i, { expose: n, emit: r }) {
    const d = r, o = i, m = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-modal": !0,
        [`d1-modal--imagePosition--${o.imagePosition}`]: s(a.imagePosition, o.imagePosition),
        [`d1-modal--width--${o.width}`]: s(a.width, o.width)
        // :classes-values [!] System label / Системная метка
      }
    })), c = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new B(
      "d1.modal",
      o,
      {
        emits: d,
        classes: m,
        styles: c,
        components: {
          window: h,
          bars: D,
          actions: y
        }
      }
    ), l = e.render();
    return n(e.expose()), (_, k) => (w(), b(g(l)));
  }
});
export {
  H as _
};
