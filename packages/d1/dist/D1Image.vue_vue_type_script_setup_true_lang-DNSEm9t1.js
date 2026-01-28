import { defineComponent as m, computed as a, openBlock as c, createBlock as l, unref as u, mergeDefaults as g } from "vue";
import { inArray as y } from "@dxtmisha/functional";
import { defaultsImage as f, ImageDesign as B } from "@dxtmisha/constructor/Image";
const h = {
  // :values [!] System label / Системная метка
  size: ["auto", "contain", "cover"]
  // :values [!] System label / Системная метка
}, v = {
  ...f
}, k = /* @__PURE__ */ m({
  name: "D1Image",
  __name: "D1Image",
  props: /* @__PURE__ */ g({
    value: {},
    url: {},
    adaptiveGroup: {},
    adaptiveAlways: { type: Boolean },
    objectWidth: {},
    objectHeight: {},
    coordinator: {},
    x: {},
    y: {},
    tagImg: { type: Boolean },
    srcset: {},
    picture: {},
    alt: {},
    lazy: { type: Boolean },
    preloadOffset: {},
    fetchPriority: {},
    turn: { type: Boolean },
    disabled: { type: Boolean },
    hide: { type: Boolean },
    adaptive: { type: Boolean },
    size: {}
  }, v),
  emits: ["load"],
  setup(o, { expose: s, emit: i }) {
    const n = i, e = o, r = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-image": !0,
        "d1-image--turn": e.turn,
        "d1-image--disabled": e.disabled,
        "d1-image--hide": e.hide,
        "d1-image--adaptive": e.adaptive,
        [`d1-image--size--${e.size}`]: y(h.size, e.size)
        // :classes-values [!] System label / Системная метка
      }
    })), d = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new B(
      "d1.image",
      e,
      {
        emits: n,
        classes: r,
        styles: d
      }
    ), p = t.render();
    return s(t.expose()), (z, _) => (c(), l(u(p)));
  }
});
export {
  k as _
};
