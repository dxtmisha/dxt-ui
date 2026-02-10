import { defineComponent as m, computed as o, openBlock as i, createBlock as k, unref as d, mergeDefaults as u } from "vue";
import "@dxtmisha/functional";
import { defaultsSkeleton as f, SkeletonDesign as _ } from "@dxtmisha/constructor/Skeleton";
const x = {
  ...f
}, B = /* @__PURE__ */ m({
  name: "D1Skeleton",
  __name: "D1Skeleton",
  props: /* @__PURE__ */ u({
    active: { type: Boolean }
  }, x),
  setup(n, { expose: s, emit: c }) {
    const r = c, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-skeleton": !0,
        "d1-skeleton--active": e.active
        // :classes-values [!] System label / Системная метка
      }
    })), a = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new _(
      "d1.skeleton",
      e,
      {
        emits: r,
        classes: l,
        styles: a
      }
    ), p = t.render();
    return s(t.expose()), (D, S) => (i(), k(d(p)));
  }
});
export {
  B as _
};
