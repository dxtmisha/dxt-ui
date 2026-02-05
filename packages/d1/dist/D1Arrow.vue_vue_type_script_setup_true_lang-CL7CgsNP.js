import { defineComponent as l, computed as s, openBlock as u, createBlock as f, unref as w, mergeDefaults as z } from "vue";
import { inArray as r } from "@dxtmisha/functional";
import { defaultsArrow as _, ArrowDesign as g } from "@dxtmisha/constructor/Arrow";
const t = {
  // :values [!] System label / Системная метка
  position: ["auto", "top", "bottom", "left", "right"],
  size: ["sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, A = {
  ..._,
  // :default [!] System label / Системная метка
  position: "auto",
  size: "md"
}, B = /* @__PURE__ */ l({
  name: "D1Arrow",
  __name: "D1Arrow",
  props: /* @__PURE__ */ z({
    elementTarget: {},
    position: {},
    inverse: { type: Boolean },
    size: {}
  }, A),
  setup(n, { expose: i, emit: p }) {
    const a = p, e = n, m = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-arrow": !0,
        [`d1-arrow--position--${e.position}`]: r(t.position, e.position),
        "d1-arrow--inverse": e.inverse,
        [`d1-arrow--size--${e.size}`]: r(t.size, e.size)
        // :classes-values [!] System label / Системная метка
      }
    })), c = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new g(
      "d1.arrow",
      e,
      {
        emits: a,
        classes: m,
        styles: c
      }
    ), d = o.render();
    return i(o.expose()), (k, x) => (u(), f(w(d)));
  }
});
export {
  B as _
};
