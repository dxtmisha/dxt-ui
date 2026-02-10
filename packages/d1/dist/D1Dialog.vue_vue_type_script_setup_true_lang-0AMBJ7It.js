import { defineComponent as m, computed as t, openBlock as u, createBlock as g, unref as b, mergeDefaults as D } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { defaultsDialog as y, DialogDesign as B } from "@dxtmisha/constructor/Dialog";
import { D as w } from "./index-Dike0osZ.js";
import { D as f } from "./index-RVXlLQ5Y.js";
import { D as k } from "./index-BS9sgqvG.js";
import { D as h } from "./index-CItcax-E.js";
const i = {
  // :values [!] System label / Системная метка
  imagePosition: ["top", "left"],
  width: ["sm", "md", "lg", "auto"]
  // :values [!] System label / Системная метка
}, A = {
  ...y,
  buttonClose: {
    outline: !0
  },
  iconSuccess: "check_circle",
  iconError: "error",
  iconAttrs: {
    size: "3xl"
  },
  // :default [!] System label / Системная метка
  imagePosition: "top",
  width: "md"
}, E = /* @__PURE__ */ m({
  name: "D1Dialog",
  __name: "D1Dialog",
  props: /* @__PURE__ */ D({
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
    label: {},
    labelId: {},
    description: {},
    descriptionId: {},
    textClose: { type: [String, Function] },
    textOk: { type: [String, Function] },
    open: { type: Boolean },
    icon: {},
    buttonOk: {},
    buttonClose: {},
    closeButton: { type: Boolean },
    clickOkAndClose: { type: Boolean },
    iconSuccess: {},
    iconError: {},
    iconAttrs: {},
    success: { type: Boolean },
    error: { type: Boolean },
    imagePosition: {},
    width: {}
  }, A),
  emits: ["window", "bars", "barsLite", "barsBack", "actions", "actionsLite", "ok", "close"],
  setup(n, { expose: r, emit: a }) {
    const c = a, o = n, l = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-dialog": !0,
        "d1-dialog--success": o.success,
        "d1-dialog--error": o.error,
        [`d1-dialog--imagePosition--${o.imagePosition}`]: s(i.imagePosition, o.imagePosition),
        [`d1-dialog--width--${o.width}`]: s(i.width, o.width)
        // :classes-values [!] System label / Системная метка
      }
    })), d = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new B(
      "d1.dialog",
      o,
      {
        emits: c,
        classes: l,
        styles: d,
        components: {
          window: w,
          bars: f,
          actions: k,
          icon: h
        }
      }
    ), p = e.render();
    return r(e.expose()), (_, x) => (u(), g(b(p)));
  }
});
export {
  E as _
};
