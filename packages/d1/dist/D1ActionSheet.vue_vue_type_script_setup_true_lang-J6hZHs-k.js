import { defineComponent as p, computed as o, openBlock as m, createBlock as l, unref as w, mergeDefaults as h } from "vue";
import { inArray as u } from "@dxtmisha/functional";
import { defaultsActionSheet as b, ActionSheetDesign as B } from "@dxtmisha/constructor/ActionSheet";
import { D as y, a as f, b as A } from "./index-CN2q2jvV.js";
const D = {
  // :values [!] System label / Системная метка
  width: ["sm", "md", "lg", "auto"]
  // :values [!] System label / Системная метка
}, S = {
  ...b,
  // :default [!] System label / Системная метка
  width: "md"
}, H = /* @__PURE__ */ p({
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
  setup(s, { expose: n, emit: a }) {
    const i = a, e = s, r = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-actionSheet": !0,
        [`d1-actionSheet--width--${e.width}`]: u(D.width, e.width)
        // :classes-values [!] System label / Системная метка
      }
    })), c = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new B(
      "d1.actionSheet",
      e,
      {
        emits: i,
        classes: r,
        styles: c,
        components: {
          window: A,
          bars: f,
          actions: y
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
  H as _
};
