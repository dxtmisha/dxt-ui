import { defineComponent as p, computed as o, openBlock as m, createBlock as l, unref as w, mergeDefaults as h } from "vue";
import { inArray as u } from "@dxtmisha/functional";
import { defaultsActionSheet as b, ActionSheetDesign as f } from "@dxtmisha/constructor/ActionSheet";
import { D as B } from "./index-Dike0osZ.js";
import { D as y } from "./index-RVXlLQ5Y.js";
import { D } from "./index-BS9sgqvG.js";
const A = {
  // :values [!] System label / Системная метка
  width: ["sm", "md", "lg", "auto"]
  // :values [!] System label / Системная метка
}, S = {
  ...b,
  // :default [!] System label / Системная метка
  width: "md"
}, v = /* @__PURE__ */ p({
  name: "D1ActionSheet",
  __name: "D1ActionSheet",
  props: /* @__PURE__ */ h({
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
    open: { type: Boolean },
    touchClose: { type: Boolean },
    width: {}
  }, S),
  emits: ["window", "bars", "barsLite", "barsBack", "actions", "actionsLite"],
  setup(s, { expose: n, emit: i }) {
    const a = i, e = s, r = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-actionSheet": !0,
        [`d1-actionSheet--width--${e.width}`]: u(A.width, e.width)
        // :classes-values [!] System label / Системная метка
      }
    })), c = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new f(
      "d1.actionSheet",
      e,
      {
        emits: a,
        classes: r,
        styles: c,
        components: {
          window: B,
          bars: y,
          actions: D
        },
        compMod: {
          window: {
            divider: !0
          }
        }
      }
    ), d = t.render();
    return n(t.expose()), (_, k) => (m(), l(w(d)));
  }
});
export {
  v as _
};
