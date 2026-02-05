import { defineComponent as g, computed as o, openBlock as m, createBlock as u, unref as f, mergeDefaults as y } from "vue";
import { inArray as e } from "@dxtmisha/functional";
import { defaultsActions as x, ActionsDesign as b } from "@dxtmisha/constructor/Actions";
import { D as B } from "./index-B34F7SrR.js";
const t = {
  // :values [!] System label / Системная метка
  align: ["none", "center", "left", "right", "block", "auto"],
  flexible: ["adaptiveSm", "adaptiveMd", "adaptiveLg", "adaptiveXl", "adaptive2xl", "containerSm", "containerMd", "containerLg", "containerXl", "container2xl"],
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, A = {
  ...x,
  buttonSecondaryAttrs: {
    text: !0,
    inverse: !0
  },
  // :default [!] System label / Системная метка
  align: "right",
  paddingByIndent: !0
}, I = /* @__PURE__ */ g({
  name: "D1Actions",
  __name: "D1Actions",
  props: /* @__PURE__ */ y({
    list: {},
    listSecondary: {},
    buttonAttrs: {},
    buttonSecondaryAttrs: {},
    align: {},
    flexible: {},
    wrap: { type: Boolean },
    padding: {},
    paddingByIndent: { type: Boolean }
  }, A),
  emits: ["click", "clickLite"],
  setup(a, { expose: s, emit: d }) {
    const r = d, n = a, c = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-actions": !0,
        [`d1-actions--align--${n.align}`]: e(t.align, n.align),
        [`d1-actions--flexible--${n.flexible}`]: e(t.flexible, n.flexible),
        "d1-actions--wrap": n.wrap,
        [`d1-actions--padding--${n.padding}`]: e(t.padding, n.padding),
        "d1-actions--paddingByIndent": n.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), l = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), i = new b(
      "d1.actions",
      n,
      {
        emits: r,
        classes: c,
        styles: l,
        components: {
          button: B
        }
      }
    ), p = i.render();
    return s(i.expose()), (k, _) => (m(), u(f(p)));
  }
});
export {
  I as _
};
