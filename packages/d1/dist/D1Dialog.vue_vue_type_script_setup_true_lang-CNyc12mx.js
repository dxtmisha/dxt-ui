import { defineComponent as m, computed as t, openBlock as u, createBlock as g, unref as b, mergeDefaults as y } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { defaultsDialog as B, DialogDesign as w } from "@dxtmisha/constructor/Dialog";
import { D, a as f, b as k } from "./index-CN2q2jvV.js";
import { D as h } from "./index-CItcax-E.js";
const i = {
  // :values [!] System label / Системная метка
  imagePosition: ["top", "left"],
  width: ["sm", "md", "lg", "auto"]
  // :values [!] System label / Системная метка
}, A = {
  ...B,
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
}, I = /* @__PURE__ */ m({
  name: "D1Dialog",
  __name: "D1Dialog",
  props: /* @__PURE__ */ y({
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
  setup(n, { expose: a, emit: r }) {
    const c = r, o = n, l = t(() => ({
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
    })), e = new w(
      "d1.dialog",
      o,
      {
        emits: c,
        classes: l,
        styles: d,
        components: {
          window: k,
          bars: f,
          actions: D,
          icon: h
        }
      }
    ), p = e.render();
    return a(e.expose()), (_, x) => (u(), g(b(p)));
  }
});
export {
  I as _
};
