import { defineComponent as p, computed as t, openBlock as l, createBlock as m, unref as u, mergeDefaults as B } from "vue";
import { inArray as y } from "@dxtmisha/functional";
import { defaultsBars as g, BarsDesign as b } from "@dxtmisha/constructor/Bars";
import { D as k } from "./index-B34F7SrR.js";
const f = {
  // :values [!] System label / Системная метка
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, _ = {
  ...g,
  iconBack: "arrow_back",
  iconClose: "close",
  // :default [!] System label / Системная метка
  paddingByIndent: !0
}, L = /* @__PURE__ */ p({
  name: "D1Bars",
  __name: "D1Bars",
  props: /* @__PURE__ */ B({
    label: {},
    labelId: {},
    description: {},
    descriptionId: {},
    isSkeleton: { type: Boolean },
    textClose: { type: [String, Function] },
    action: { type: Boolean },
    backButton: {},
    backHide: { type: Boolean },
    backActionHide: { type: Boolean },
    bars: {},
    actionLabel: {},
    actionDescription: {},
    actionBars: {},
    buttonAttrs: {},
    iconBack: {},
    iconClose: {},
    modelAction: { type: Boolean },
    "onUpdate:action": { type: Function },
    "onUpdate:modelAction": { type: Function },
    padding: {},
    paddingByIndent: { type: Boolean }
  }, _),
  emits: ["click", "clickLite", "update:action", "update:modelAction"],
  setup(o, { expose: a, emit: s }) {
    const i = s, e = o, c = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-bars": !0,
        [`d1-bars--padding--${e.padding}`]: y(f.padding, e.padding),
        "d1-bars--paddingByIndent": e.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), d = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new b(
      "d1.bars",
      e,
      {
        emits: i,
        classes: c,
        styles: d,
        components: {
          button: k
        },
        compMod: {
          button: {
            text: !0,
            size: "xs",
            inverse: !0
          }
        }
      }
    ), r = n.render();
    return a(n.expose()), (x, D) => (l(), m(u(r)));
  }
});
export {
  L as _
};
