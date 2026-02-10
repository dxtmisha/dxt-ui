import { defineComponent as l, computed as t, openBlock as u, createBlock as p, unref as d, mergeDefaults as f } from "vue";
import "@dxtmisha/functional";
import { defaultsFieldCounter as C, FieldCounterDesign as g } from "@dxtmisha/constructor/FieldCounter";
const x = {
  ...C
}, D = /* @__PURE__ */ l({
  name: "D1FieldCounter",
  __name: "D1FieldCounter",
  props: /* @__PURE__ */ f({
    textCharacterLimit: { type: [String, Function] },
    textCharacterRemaining: { type: [String, Function] },
    counter: {},
    maxlength: {},
    maxlengthOnce: {},
    template: {},
    id: {}
  }, x),
  setup(n, { expose: o, emit: r }) {
    const s = r, i = n, c = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-fieldCounter": !0
        // :classes-values [!] System label / Системная метка
      }
    })), a = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new g(
      "d1.fieldCounter",
      i,
      {
        emits: s,
        classes: c,
        styles: a
      }
    ), m = e.render();
    return o(e.expose()), (_, F) => (u(), p(d(m)));
  }
});
export {
  D as _
};
