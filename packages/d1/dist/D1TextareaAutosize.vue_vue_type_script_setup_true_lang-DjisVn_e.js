import { defineComponent as m, computed as s, openBlock as p, createBlock as h, unref as l, mergeDefaults as x } from "vue";
import { inArray as d } from "@dxtmisha/functional";
import { defaultsTextareaAutosize as g, TextareaAutosizeDesign as f } from "@dxtmisha/constructor/TextareaAutosize";
const A = {
  // :values [!] System label / Системная метка
  height: ["xs", "sm", "md", "lg", "xl"]
  // :values [!] System label / Системная метка
}, z = {
  ...g,
  // :default [!] System label / Системная метка
  height: "md"
}, B = /* @__PURE__ */ m({
  name: "D1TextareaAutosize",
  __name: "D1TextareaAutosize",
  props: /* @__PURE__ */ x({
    value: {},
    autosize: { type: Boolean },
    inputAttrs: {},
    height: {}
  }, z),
  emits: ["input"],
  setup(o, { expose: r, emit: a }) {
    const n = a, e = o, i = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-textareaAutosize": !0,
        [`d1-textareaAutosize--height--${e.height}`]: d(A.height, e.height)
        // :classes-values [!] System label / Системная метка
      }
    })), u = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new f(
      "d1.textareaAutosize",
      e,
      {
        emits: n,
        classes: i,
        styles: u
      }
    ), c = t.render();
    return r(t.expose()), (_, T) => (p(), h(l(c)));
  }
});
export {
  B as _
};
