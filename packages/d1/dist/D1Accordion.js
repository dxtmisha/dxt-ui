import { defineComponent as u, mergeDefaults as y, computed as o, createBlock as m, openBlock as g, unref as B } from "vue";
import { inArray as n } from "@dxtmisha/functional";
import { defaultsActions as k, ActionsDesign as $ } from "@dxtmisha/constructor/Actions";
import { defaultsButton as h, ButtonDesign as z } from "@dxtmisha/constructor/Button";
import { defaultsIcon as T, IconDesign as D } from "@dxtmisha/constructor/Icon";
import { D as A } from "./index-BWyEZpKM.js";
import { defaultsProgress as S, ProgressDesign as w } from "@dxtmisha/constructor/Progress";
import { defaultsRipple as L, RippleDesign as I } from "@dxtmisha/constructor/Ripple";
const v = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  size: ["auto", "x", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
  rounded: ["auto", "sm", "md", "lg", "xl", "full"]
  // :values [!] System label / Системная метка
}, P = {
  ...T,
  // :default [!] System label / Системная метка
  animationType: "type1",
  square: !0,
  size: "auto",
  rounded: "auto"
}, M = /* @__PURE__ */ u({
  name: "D1Icon",
  __name: "D1Icon",
  props: /* @__PURE__ */ y({
    isSkeleton: { type: Boolean },
    ariaLabel: {},
    active: { type: Boolean },
    icon: {},
    iconActive: {},
    role: {},
    turn: { type: Boolean },
    disabled: { type: Boolean },
    hide: { type: Boolean },
    asPalette: { type: Boolean },
    dir: { type: Boolean },
    overlay: { type: Boolean },
    dynamic: { type: Boolean },
    start: { type: Boolean },
    end: { type: Boolean },
    high: { type: Boolean },
    animationType: {},
    animationShow: { type: Boolean },
    square: { type: Boolean },
    circle: { type: Boolean },
    rect: { type: Boolean },
    size: {},
    inverse: { type: Boolean },
    rounded: {}
  }, P),
  emits: ["load"],
  setup(i, { expose: s, emit: a }) {
    const l = a, e = i, r = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-icon": !0,
        "d1-icon--turn": e.turn,
        "d1-icon--disabled": e.disabled,
        "d1-icon--hide": e.hide,
        "d1-icon--asPalette": e.asPalette,
        "d1-icon--dir": e.dir,
        "d1-icon--overlay": e.overlay,
        "d1-icon--dynamic": e.dynamic,
        "d1-icon--start": e.start,
        "d1-icon--end": e.end,
        "d1-icon--high": e.high,
        [`d1-icon--animationType--${e.animationType}`]: n(v.animationType, e.animationType),
        "d1-icon--animationShow": e.animationShow,
        "d1-icon--square": e.square && !e.circle && !e.rect,
        "d1-icon--circle": e.circle,
        "d1-icon--rect": e.rect,
        [`d1-icon--size--${e.size}`]: n(v.size, e.size),
        "d1-icon--inverse": e.inverse,
        [`d1-icon--rounded--${e.rounded}`]: n(v.rounded, e.rounded)
        // :classes-values [!] System label / Системная метка
      }
    })), d = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new D(
      "d1.icon",
      e,
      {
        emits: l,
        components: {
          image: A
        },
        classes: r,
        styles: d
      }
    ), c = t.render();
    return s(t.expose()), (x, b) => (g(), m(B(c)));
  }
}), f = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom", "static"],
  size: ["sm", "md", "lg"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, X = {
  ...S,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top",
  size: "md"
}, q = /* @__PURE__ */ u({
  name: "D1Progress",
  __name: "D1Progress",
  props: /* @__PURE__ */ y({
    ariaLabel: {},
    ariaLive: {},
    visible: { type: Boolean },
    value: {},
    max: {},
    linear: { type: Boolean },
    circular: { type: Boolean },
    point: { type: Boolean },
    delay: {},
    delayHide: {},
    indeterminate: {},
    position: {},
    dense: { type: Boolean },
    inverse: { type: Boolean },
    size: {},
    palette: {}
  }, X),
  setup(i, { expose: s, emit: a }) {
    const l = a, e = i, r = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-progress": !0,
        "d1-progress--point": e.point,
        "d1-progress--linear": e.linear && !e.circular,
        "d1-progress--circular": e.circular,
        [`d1-progress--indeterminate--${e.indeterminate}`]: n(f.indeterminate, e.indeterminate),
        [`d1-progress--position--${e.position}`]: n(f.position, e.position),
        "d1-progress--dense": e.dense,
        "d1-progress--inverse": e.inverse,
        [`d1-progress--size--${e.size}`]: n(f.size, e.size),
        [`d1-palette d1-palette--${e.palette}`]: n(f.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), d = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new w(
      "d1.progress",
      e,
      {
        emits: l,
        classes: r,
        styles: d
      }
    ), c = t.render();
    return s(t.expose()), (x, b) => (g(), m(B(c)));
  }
}), R = {
  ...L
}, V = /* @__PURE__ */ u({
  name: "D1Ripple",
  __name: "D1Ripple",
  props: /* @__PURE__ */ y({
    disabled: { type: Boolean }
  }, R),
  setup(i, { expose: s, emit: a }) {
    const l = a, e = i, r = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), d = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new I(
      "d1.ripple",
      e,
      {
        emits: l,
        classes: r,
        styles: d
      }
    ), c = t.render();
    return s(t.expose()), (x, b) => (g(), m(B(c)));
  }
}), p = {
  // :values [!] System label / Системная метка
  adaptive: ["iconAlways", "block", "auto", "iconSm", "iconMd", "iconLg", "iconXl", "icon2xl", "fullSm", "fullMd", "fullLg", "fullXl", "full2xl"],
  container: ["iconSm", "iconMd", "iconLg", "iconXl", "icon2xl", "fullSm", "fullMd", "fullLg", "fullXl", "full2xl"],
  textAlign: ["left", "center", "right"],
  size: ["xs", "sm", "md", "lg", "xl"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, F = {
  ...h,
  // :default [!] System label / Системная метка
  primary: !0,
  size: "md"
}, O = /* @__PURE__ */ u({
  name: "D1Button",
  __name: "D1Button",
  props: /* @__PURE__ */ y({
    label: {},
    labelId: {},
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    iconTrailing: {},
    iconTrailingTurnOnly: { type: Boolean },
    iconTrailingDirOnly: { type: Boolean },
    iconTrailingPalette: { type: Boolean },
    loading: { type: [Boolean, Object] },
    isSkeleton: { type: Boolean },
    to: {},
    value: {},
    detail: {},
    ariaLabel: {},
    tag: {},
    type: {},
    focus: { type: Boolean },
    adaptive: {},
    container: {},
    inverse: { type: Boolean },
    grid: { type: Boolean },
    textAlign: {},
    primary: { type: Boolean },
    secondary: { type: Boolean },
    outline: { type: Boolean },
    text: { type: Boolean },
    size: {},
    roundedFull: { type: Boolean },
    palette: {}
  }, F),
  emits: ["click", "clickLite"],
  setup(i, { expose: s, emit: a }) {
    const l = a, e = i, r = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-button": !0,
        "d1-button--focus": e.focus,
        "d1-button--disabled": e.disabled,
        "d1-button--selected": e.selected,
        "d1-button--readonly": e.readonly,
        [`d1-button--adaptive--${e.adaptive}`]: n(p.adaptive, e.adaptive),
        [`d1-button--container--${e.container}`]: n(p.container, e.container),
        "d1-button--inverse": e.inverse,
        "d1-button--grid": e.grid,
        [`d1-button--textAlign--${e.textAlign}`]: n(p.textAlign, e.textAlign),
        "d1-button--primary": e.primary && !e.secondary && !e.outline && !e.text,
        "d1-button--secondary": e.secondary,
        "d1-button--outline": e.outline,
        "d1-button--text": e.text,
        [`d1-button--size--${e.size}`]: n(p.size, e.size),
        "d1-button--roundedFull": e.roundedFull,
        [`d1-palette d1-palette--${e.palette}`]: n(p.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), d = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new z(
      "d1.button",
      e,
      {
        emits: l,
        classes: r,
        styles: d,
        components: {
          icon: M,
          progress: q,
          ripple: V
        }
      }
    ), c = t.render();
    return s(t.expose()), (x, b) => (g(), m(B(c)));
  }
}), H = O, _ = {
  // :values [!] System label / Системная метка
  align: ["none", "center", "left", "right", "block", "auto"],
  flexible: ["adaptiveSm", "adaptiveMd", "adaptiveLg", "adaptiveXl", "adaptive2xl", "containerSm", "containerMd", "containerLg", "containerXl", "container2xl"],
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, j = {
  ...k,
  buttonSecondaryAttrs: {
    text: !0,
    inverse: !0
  },
  // :default [!] System label / Системная метка
  align: "right",
  paddingByIndent: !0
}, C = /* @__PURE__ */ u({
  name: "D1Actions",
  __name: "D1Actions",
  props: /* @__PURE__ */ y({
    list: {},
    listSecondary: {},
    buttonAttrs: {},
    buttonSecondaryAttrs: {},
    align: {},
    flexible: {},
    padding: {},
    paddingByIndent: { type: Boolean }
  }, j),
  emits: ["click", "clickLite"],
  setup(i, { expose: s, emit: a }) {
    const l = a, e = i, r = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-actions": !0,
        [`d1-actions--align--${e.align}`]: n(_.align, e.align),
        [`d1-actions--flexible--${e.flexible}`]: n(_.flexible, e.flexible),
        [`d1-actions--padding--${e.padding}`]: n(_.padding, e.padding),
        "d1-actions--paddingByIndent": e.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), d = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new $(
      "d1.actions",
      e,
      {
        emits: l,
        classes: r,
        styles: d,
        components: {
          button: H
        }
      }
    ), c = t.render();
    return s(t.expose()), (x, b) => (g(), m(B(c)));
  }
}), Y = C;
export {
  Y as D1Actions
};
