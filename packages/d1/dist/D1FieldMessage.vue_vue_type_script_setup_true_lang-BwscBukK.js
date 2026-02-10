import { defineComponent as c, computed as s, openBlock as p, createBlock as m, unref as u, mergeDefaults as f } from "vue";
import "@dxtmisha/functional";
import { defaultsFieldMessage as g, FieldMessageDesign as M } from "@dxtmisha/constructor/FieldMessage";
import { D as _ } from "./index-B921j10s.js";
const h = {
  ...g
}, C = /* @__PURE__ */ c({
  name: "D1FieldMessage",
  __name: "D1FieldMessage",
  props: /* @__PURE__ */ f({
    counter: {},
    counterShow: { type: Boolean },
    counterTemplate: {},
    counterId: {},
    maxlength: {},
    fieldCounterAttrs: {},
    isSkeleton: { type: Boolean },
    forceShow: { type: Boolean },
    disabled: { type: Boolean },
    helperMessage: {},
    validationMessage: {},
    helperId: {},
    validationId: {}
  }, h),
  setup(o, { expose: t, emit: n }) {
    const r = n, a = o, l = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-fieldMessage": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new M(
      "d1.fieldMessage",
      a,
      {
        emits: r,
        classes: l,
        styles: i,
        components: {
          fieldCounter: _
        }
      }
    ), d = e.render();
    return t(e.expose()), (y, B) => (p(), m(u(d)));
  }
});
export {
  C as _
};
