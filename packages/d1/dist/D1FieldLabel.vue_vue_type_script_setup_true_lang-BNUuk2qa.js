import { defineComponent as p, computed as o, openBlock as d, createBlock as m, unref as u, mergeDefaults as f } from "vue";
import "@dxtmisha/functional";
import { defaultsFieldLabel as _, FieldLabelDesign as b } from "@dxtmisha/constructor/FieldLabel";
import { D } from "./index-B921j10s.js";
import { _ as g } from "./D1Progress.vue_vue_type_script_setup_true_lang-C7VFkdo_.js";
const y = g, B = {
  ..._
}, w = /* @__PURE__ */ p({
  name: "D1FieldLabel",
  __name: "D1FieldLabel",
  props: /* @__PURE__ */ f({
    label: {},
    labelId: {},
    counter: {},
    counterShow: { type: Boolean },
    counterTemplate: {},
    counterId: {},
    maxlength: {},
    fieldCounterAttrs: {},
    loading: { type: [Boolean, Object] },
    isSkeleton: { type: Boolean },
    for: {},
    required: { type: Boolean }
  }, B),
  setup(t, { expose: n, emit: s }) {
    const r = s, l = t, a = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-fieldLabel": !0
        // :classes-values [!] System label / Системная метка
      }
    })), c = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new b(
      "d1.fieldLabel",
      l,
      {
        emits: r,
        classes: a,
        styles: c,
        components: {
          fieldCounter: D,
          progress: y
        }
      }
    ), i = e.render();
    return n(e.expose()), (L, k) => (d(), m(u(i)));
  }
});
export {
  y as D,
  w as _
};
