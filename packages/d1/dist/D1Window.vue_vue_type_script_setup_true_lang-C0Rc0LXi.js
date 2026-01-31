import { defineComponent as w, computed as l, openBlock as u, createBlock as y, unref as b, mergeDefaults as B } from "vue";
import { inArray as o, isFilled as h } from "@dxtmisha/functional";
import { defaultsWindow as v, WindowDesign as f } from "@dxtmisha/constructor/Window";
import { defaultsScrollbar as S, ScrollbarDesign as x } from "@dxtmisha/constructor/Scrollbar";
import { _ } from "./D1Button.vue_vue_type_script_setup_true_lang-D41llYta.js";
import { _ as T } from "./D1Image.vue_vue_type_script_setup_true_lang-DNSEm9t1.js";
const F = {
  ...S
}, $ = /* @__PURE__ */ w({
  name: "D1Scrollbar",
  __name: "D1Scrollbar",
  props: /* @__PURE__ */ B({
    tag: {},
    visible: { type: Boolean },
    divider: { type: Boolean },
    dividerTop: { type: Boolean },
    dividerBottom: { type: Boolean },
    dividerHide: { type: Boolean },
    inverse: { type: Boolean },
    standard: { type: Boolean }
  }, F),
  emits: ["top", "reachTop", "leaveTop", "bottom", "reachBottom", "leaveBottom", "edge"],
  setup(d, { expose: s, emit: r }) {
    const c = r, e = d, p = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-scrollbar": !0,
        "d1-scrollbar--visible": e.visible,
        "d1-scrollbar--divider": e.divider,
        "d1-scrollbar--dividerTop": e.dividerTop,
        "d1-scrollbar--dividerBottom": e.dividerBottom,
        "d1-scrollbar--dividerHide": e.dividerHide,
        "d1-scrollbar--inverse": e.inverse,
        "d1-scrollbar--standard": e.standard
        // :classes-values [!] System label / Системная метка
      }
    })), m = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), i = new x(
      "d1.scrollbar",
      e,
      {
        emits: c,
        classes: p,
        styles: m
      }
    ), g = i.render();
    return s(i.expose()), (n, a) => (u(), y(b(g)));
  }
}), t = {
  // :values [!] System label / Системная метка
  width: ["auto", "max", "sm", "md", "lg"],
  height: ["auto", "max", "sm", "md", "lg"],
  axis: ["x", "y", "on"],
  imagePosition: ["top", "left"],
  alignment: ["center", "top", "topRight", "topLeft", "topFull", "right", "rightFull", "bottom", "bottomRight", "bottomLeft", "bottomFull", "left", "leftFull"],
  origin: ["center", "top", "right", "bottom", "left", "topToBottom", "rightToLeft", "bottomToTop", "leftToRight"],
  adaptive: ["menu", "menuWindow", "modal", "modalDynamic", "actionSheetRight", "actionSheetBottom", "static", "actionSheet", "actionSheetToModal", "autoStaticSm", "autoStaticMd", "autoStaticLg", "autoStaticXl", "autoStatic2xl"],
  imageSize: ["sm", "md", "lg", "quarter", "half"]
  // :values [!] System label / Системная метка
}, D = {
  ...v,
  iconClose: "close",
  // :default [!] System label / Системная метка
  width: "md",
  axis: "y",
  imagePosition: "top",
  overscroll: !0,
  imageSize: "md"
}, C = /* @__PURE__ */ w({
  name: "D1Window",
  __name: "D1Window",
  props: /* @__PURE__ */ B({
    scrollbarAttrs: {},
    image: {},
    role: {},
    ariaLabelledby: {},
    ariaDescribedby: {},
    ariaHaspopup: { type: [String, Boolean] },
    textClose: { type: [String, Function] },
    open: { type: Boolean },
    disabled: { type: Boolean },
    preparation: { type: Function },
    beforeOpening: { type: Function },
    opening: { type: Function },
    beforeClosing: { type: Function },
    closing: { type: Function },
    contextmenu: { type: Boolean },
    staticMode: { type: Boolean },
    overElement: {},
    autoClose: { type: Boolean },
    persistent: { type: Boolean },
    flash: { type: Boolean },
    inDom: { type: Boolean },
    indent: {},
    divider: { type: Boolean },
    closeButton: { type: Boolean },
    iconClose: {},
    modelOpen: { type: Boolean },
    "onUpdate:open": { type: Function },
    "onUpdate:modelOpen": { type: Function },
    embedded: { type: Boolean },
    width: {},
    height: {},
    hide: { type: Boolean },
    axis: {},
    imagePosition: {},
    dense: { type: Boolean },
    alignment: {},
    origin: {},
    adaptive: {},
    fullscreen: { type: Boolean },
    overscroll: { type: Boolean },
    closeMobileHide: { type: Boolean },
    widthMatch: { type: Boolean },
    imageSize: {}
  }, D),
  emits: ["scrollbarTop", "scrollbarReachTop", "scrollbarLeaveTop", "scrollbarBottom", "scrollbarReachBottom", "scrollbarLeaveBottom", "scrollbarEdge", "load", "window", "update:open", "update:modelOpen"],
  setup(d, { expose: s, emit: r }) {
    const c = r, e = d, p = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-window": !0,
        "d1-window--width--custom": h(e.width) && !o(t.width, e.width),
        [`d1-window--width--${e.width}`]: o(t.width, e.width),
        "d1-window--height--custom": h(e.height) && !o(t.height, e.height),
        [`d1-window--height--${e.height}`]: o(t.height, e.height),
        "d1-window--hide": e.hide,
        [`d1-window--axis--${e.axis}`]: o(t.axis, e.axis),
        [`d1-window--imagePosition--${e.imagePosition}`]: o(t.imagePosition, e.imagePosition),
        "d1-window--dense": e.dense,
        [`d1-window--alignment--${e.alignment}`]: o(t.alignment, e.alignment),
        [`d1-window--origin--${e.origin}`]: o(t.origin, e.origin),
        [`d1-window--adaptive--${e.adaptive}`]: o(t.adaptive, e.adaptive),
        "d1-window--fullscreen": e.fullscreen,
        "d1-window--overscroll": e.overscroll,
        "d1-window--closeMobileHide": e.closeMobileHide,
        "d1-window--widthMatch": e.widthMatch,
        [`d1-window--imageSize--${e.imageSize}`]: o(t.imageSize, e.imageSize)
        // :classes-values [!] System label / Системная метка
      }
    })), m = l(() => {
      var n, a;
      return {
        // :styles-values [!] System label / Системная метка
        "--d1-window-sys-width": (n = e.width) != null ? n : null,
        "--d1-window-sys-height": (a = e.height) != null ? a : null
        // :styles-values [!] System label / Системная метка
      };
    }), i = new f(
      "d1.window",
      e,
      {
        emits: c,
        classes: p,
        styles: m,
        components: {
          scrollbar: $,
          button: _,
          image: T
        },
        compMod: {
          button: {
            secondary: !0,
            roundedFull: !0,
            size: "xs",
            palette: "neutral"
          }
        }
      }
    ), g = i.render();
    return s(i.expose()), (n, a) => (u(), y(b(g)));
  }
});
export {
  C as _,
  $ as a
};
