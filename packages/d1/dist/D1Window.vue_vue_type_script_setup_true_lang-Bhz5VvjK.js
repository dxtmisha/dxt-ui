import { defineComponent as g, computed as l, openBlock as u, createBlock as y, unref as B, mergeDefaults as f } from "vue";
import { inArray as o, isFilled as d } from "@dxtmisha/functional";
import { defaultsWindow as b, WindowDesign as x } from "@dxtmisha/constructor/Window";
import { _ as S } from "./D1Scrollbar.vue_vue_type_script_setup_true_lang-C4sfvVou.js";
import { _ } from "./D1Button.vue_vue_type_script_setup_true_lang-D41llYta.js";
import { _ as v } from "./D1Image.vue_vue_type_script_setup_true_lang-DNSEm9t1.js";
const t = {
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
}, F = {
  ...b,
  iconClose: "close",
  // :default [!] System label / Системная метка
  width: "md",
  axis: "y",
  imagePosition: "top",
  overscroll: !0,
  imageSize: "md"
}, P = /* @__PURE__ */ g({
  name: "D1Window",
  __name: "D1Window",
  props: /* @__PURE__ */ f({
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
    autoTabIndex: { type: Boolean },
    closeOnEsc: { type: Boolean },
    openOnArrowDown: { type: Boolean },
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
  }, F),
  emits: ["scrollbarTop", "scrollbarReachTop", "scrollbarLeaveTop", "scrollbarBottom", "scrollbarReachBottom", "scrollbarLeaveBottom", "scrollbarEdge", "load", "window", "update:open", "update:modelOpen"],
  setup(s, { expose: r, emit: p }) {
    const m = p, e = s, c = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-window": !0,
        "d1-window--width--custom": d(e.width) && !o(t.width, e.width),
        [`d1-window--width--${e.width}`]: o(t.width, e.width),
        "d1-window--height--custom": d(e.height) && !o(t.height, e.height),
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
        "d1-window--closeButton": e.closeButton,
        "d1-window--closeMobileHide": e.closeMobileHide,
        "d1-window--widthMatch": e.widthMatch,
        [`d1-window--imageSize--${e.imageSize}`]: o(t.imageSize, e.imageSize)
        // :classes-values [!] System label / Системная метка
      }
    })), w = l(() => {
      var i, n;
      return {
        // :styles-values [!] System label / Системная метка
        "--d1-window-sys-width": (i = e.width) != null ? i : null,
        "--d1-window-sys-height": (n = e.height) != null ? n : null
        // :styles-values [!] System label / Системная метка
      };
    }), a = new x(
      "d1.window",
      e,
      {
        emits: m,
        classes: c,
        styles: w,
        components: {
          scrollbar: S,
          button: _,
          image: v
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
    ), h = a.render();
    return r(a.expose()), (i, n) => (u(), y(B(h)));
  }
});
export {
  P as _
};
