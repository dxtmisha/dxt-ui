import { defineComponent as a, computed as s, openBlock as d, createBlock as u, unref as l, mergeDefaults as f } from "vue";
import "@dxtmisha/functional";
import { defaultsListGroup as G, ListGroupDesign as _ } from "@dxtmisha/constructor/ListGroup";
import { D } from "./index-D387qGGl.js";
const k = {
  ...G
}, v = /* @__PURE__ */ a({
  name: "D1ListGroup",
  __name: "D1ListGroup",
  props: /* @__PURE__ */ f({
    divider: { type: Boolean },
    open: { type: Boolean }
  }, k),
  setup(t, { expose: n, emit: r }) {
    const p = r, e = t, i = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-listGroup": !0,
        "d1-listGroup--open": e.open,
        "d1-listGroup--divider": e.divider
        // :classes-values [!] System label / Системная метка
      }
    })), m = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new _(
      "d1.listGroup",
      e,
      {
        emits: p,
        classes: i,
        styles: m,
        components: {
          motionTransform: D
        }
      }
    ), c = o.render();
    return n(o.expose()), (x, y) => (d(), u(l(c)));
  }
});
export {
  v as _
};
