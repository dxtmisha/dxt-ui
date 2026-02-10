import { defineComponent as p, computed as e, openBlock as w, createBlock as f, unref as b, mergeDefaults as g } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { defaultsModal as u, ModalDesign as B } from "@dxtmisha/constructor/Modal";
import { D } from "./index-Dike0osZ.js";
import { D as y } from "./index-RVXlLQ5Y.js";
import { D as h } from "./index-BS9sgqvG.js";
const i = {
  // :values [!] System label / Системная метка
  imagePosition: ["top", "left"],
  width: ["sm", "md", "lg", "xl", "auto"]
  // :values [!] System label / Системная метка
}, P = {
  ...u,
  // :default [!] System label / Системная метка
  imagePosition: "top",
  width: "md"
}, T = /* @__PURE__ */ p({
  name: "D1Modal",
  __name: "D1Modal",
  props: /* @__PURE__ */ g({
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
  setup(a, { expose: n, emit: r }) {
    const d = r, o = a, m = e(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-modal": !0,
        [`d1-modal--imagePosition--${o.imagePosition}`]: s(i.imagePosition, o.imagePosition),
        [`d1-modal--width--${o.width}`]: s(i.width, o.width)
        // :classes-values [!] System label / Системная метка
      }
    })), c = e(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new B(
      "d1.modal",
      o,
      {
        emits: d,
        classes: m,
        styles: c,
        components: {
          window: D,
          bars: y,
          actions: h
        }
      }
    ), l = t.render();
    return n(t.expose()), (_, k) => (w(), f(b(l)));
  }
});
export {
  T as _
};
