import { a as k, D as pe, _ as ue, b as me, c as ye } from "./D1Accordion.vue_vue_type_script_setup_true_lang-vRgssOYc.js";
import { defineComponent as m, computed as o, openBlock as y, createBlock as g, unref as B, mergeDefaults as h } from "vue";
import { inArray as d, isFilled as v } from "@dxtmisha/functional";
import { defaultsActionSheet as ge, ActionSheetDesign as Be } from "@dxtmisha/constructor/ActionSheet";
import { defaultsWindow as he, WindowDesign as fe } from "@dxtmisha/constructor/Window";
import { defaultsScrollbar as be, ScrollbarDesign as we } from "@dxtmisha/constructor/Scrollbar";
import { defaultsButton as _e, ButtonDesign as xe } from "@dxtmisha/constructor/Button";
import { _ as b } from "./D1Icon.vue_vue_type_script_setup_true_lang-xas36wzc.js";
import { _ as T } from "./D1Ripple.vue_vue_type_script_setup_true_lang-BbVI6dIs.js";
import { _ as O } from "./D1Image.vue_vue_type_script_setup_true_lang-DNSEm9t1.js";
import { defaultsBars as De, BarsDesign as ke } from "@dxtmisha/constructor/Bars";
import { defaultsActions as $e, ActionsDesign as Ae } from "@dxtmisha/constructor/Actions";
import { defaultsAnchor as ve, AnchorDesign as Te } from "@dxtmisha/constructor/Anchor";
import { defaultsTooltip as Se, TooltipDesign as Le } from "@dxtmisha/constructor/Tooltip";
import { defaultsArrow as Me, ArrowDesign as Ie } from "@dxtmisha/constructor/Arrow";
import { defaultsBadge as ze, BadgeDesign as Ce } from "@dxtmisha/constructor/Badge";
import { defaultsBlock as Fe, BlockDesign as Pe } from "@dxtmisha/constructor/Block";
import { defaultsChip as Ve, ChipDesign as He } from "@dxtmisha/constructor/Chip";
import { defaultsChipGroup as Oe, ChipGroupDesign as Ge } from "@dxtmisha/constructor/ChipGroup";
import { defaultsDialog as We, DialogDesign as je } from "@dxtmisha/constructor/Dialog";
import { defaultsField as Ue, FieldDesign as Xe } from "@dxtmisha/constructor/Field";
import { defaultsFieldLabel as Re, FieldLabelDesign as qe } from "@dxtmisha/constructor/FieldLabel";
import { defaultsFieldCounter as Ne, FieldCounterDesign as Ee } from "@dxtmisha/constructor/FieldCounter";
import { defaultsFieldMessage as Ke, FieldMessageDesign as Je } from "@dxtmisha/constructor/FieldMessage";
import { defaultsInput as Qe, InputDesign as Ye } from "@dxtmisha/constructor/Input";
import { defaultsMask as Ze, MaskDesign as et } from "@dxtmisha/constructor/Mask";
import { defaultsList as tt, ListDesign as ot } from "@dxtmisha/constructor/List";
import { defaultsListItem as nt, ListItemDesign as st } from "@dxtmisha/constructor/ListItem";
import { defaultsListGroup as it, ListGroupDesign as at } from "@dxtmisha/constructor/ListGroup";
import { defaultsListMenu as lt, ListMenuDesign as rt } from "@dxtmisha/constructor/ListMenu";
import { defaultsMenu as ct, MenuDesign as dt } from "@dxtmisha/constructor/Menu";
import { defaultsModal as pt, ModalDesign as ut } from "@dxtmisha/constructor/Modal";
import { defaultsPage as mt, PageDesign as yt } from "@dxtmisha/constructor/Page";
import { defaultsSection as gt, SectionDesign as Bt } from "@dxtmisha/constructor/Section";
import { defaultsSelect as ht, SelectDesign as ft } from "@dxtmisha/constructor/Select";
import { defaultsSelectValue as bt, SelectValueDesign as wt } from "@dxtmisha/constructor/SelectValue";
import { defaultsSkeleton as _t, SkeletonDesign as xt } from "@dxtmisha/constructor/Skeleton";
import { defaultsTextareaAutosize as Dt, TextareaAutosizeDesign as kt } from "@dxtmisha/constructor/TextareaAutosize";
const $t = {
  ...be
}, G = /* @__PURE__ */ m({
  name: "D1Scrollbar",
  __name: "D1Scrollbar",
  props: /* @__PURE__ */ h({
    tag: {},
    visible: { type: Boolean },
    divider: { type: Boolean },
    dividerTop: { type: Boolean },
    dividerBottom: { type: Boolean },
    dividerHide: { type: Boolean },
    inverse: { type: Boolean },
    standard: { type: Boolean }
  }, $t),
  emits: ["top", "reachTop", "leaveTop", "bottom", "reachBottom", "leaveBottom", "edge"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
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
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new we(
      "d1.scrollbar",
      e,
      {
        emits: a,
        classes: l,
        styles: r
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), w = {
  // :values [!] System label / Системная метка
  adaptive: ["iconAlways", "block", "auto", "iconSm", "iconMd", "iconLg", "iconXl", "icon2xl", "fullSm", "fullMd", "fullLg", "fullXl", "full2xl"],
  container: ["iconSm", "iconMd", "iconLg", "iconXl", "icon2xl", "fullSm", "fullMd", "fullLg", "fullXl", "full2xl"],
  textAlign: ["left", "center", "right"],
  size: ["xs", "sm", "md", "lg", "xl"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, At = {
  ..._e,
  // :default [!] System label / Системная метка
  primary: !0,
  size: "md"
}, C = /* @__PURE__ */ m({
  name: "D1Button",
  __name: "D1Button",
  props: /* @__PURE__ */ h({
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
  }, At),
  emits: ["click", "clickLite"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-button": !0,
        "d1-button--focus": e.focus,
        "d1-button--disabled": e.disabled,
        "d1-button--selected": e.selected,
        "d1-button--readonly": e.readonly,
        [`d1-button--adaptive--${e.adaptive}`]: d(w.adaptive, e.adaptive),
        [`d1-button--container--${e.container}`]: d(w.container, e.container),
        "d1-button--inverse": e.inverse,
        "d1-button--grid": e.grid,
        [`d1-button--textAlign--${e.textAlign}`]: d(w.textAlign, e.textAlign),
        "d1-button--primary": e.primary && !e.secondary && !e.outline && !e.text,
        "d1-button--secondary": e.secondary,
        "d1-button--outline": e.outline,
        "d1-button--text": e.text,
        [`d1-button--size--${e.size}`]: d(w.size, e.size),
        "d1-button--roundedFull": e.roundedFull,
        [`d1-palette d1-palette--${e.palette}`]: d(w.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new xe(
      "d1.button",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          icon: b,
          progress: k,
          ripple: T
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), f = {
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
}, vt = {
  ...he,
  iconClose: "close",
  // :default [!] System label / Системная метка
  width: "md",
  axis: "y",
  imagePosition: "top",
  overscroll: !0,
  imageSize: "md"
}, W = /* @__PURE__ */ m({
  name: "D1Window",
  __name: "D1Window",
  props: /* @__PURE__ */ h({
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
  }, vt),
  emits: ["scrollbarTop", "scrollbarReachTop", "scrollbarLeaveTop", "scrollbarBottom", "scrollbarReachBottom", "scrollbarLeaveBottom", "scrollbarEdge", "load", "window", "update:open", "update:modelOpen"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-window": !0,
        "d1-window--width--custom": v(e.width) && !d(f.width, e.width),
        [`d1-window--width--${e.width}`]: d(f.width, e.width),
        "d1-window--height--custom": v(e.height) && !d(f.height, e.height),
        [`d1-window--height--${e.height}`]: d(f.height, e.height),
        "d1-window--hide": e.hide,
        [`d1-window--axis--${e.axis}`]: d(f.axis, e.axis),
        [`d1-window--imagePosition--${e.imagePosition}`]: d(f.imagePosition, e.imagePosition),
        "d1-window--dense": e.dense,
        [`d1-window--alignment--${e.alignment}`]: d(f.alignment, e.alignment),
        [`d1-window--origin--${e.origin}`]: d(f.origin, e.origin),
        [`d1-window--adaptive--${e.adaptive}`]: d(f.adaptive, e.adaptive),
        "d1-window--fullscreen": e.fullscreen,
        "d1-window--overscroll": e.overscroll,
        "d1-window--closeMobileHide": e.closeMobileHide,
        "d1-window--widthMatch": e.widthMatch,
        [`d1-window--imageSize--${e.imageSize}`]: d(f.imageSize, e.imageSize)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => {
      var p, u;
      return {
        // :styles-values [!] System label / Системная метка
        "--d1-window-sys-width": (p = e.width) != null ? p : null,
        "--d1-window-sys-height": (u = e.height) != null ? u : null
        // :styles-values [!] System label / Системная метка
      };
    }), t = new fe(
      "d1.window",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          scrollbar: G,
          button: C,
          image: O
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
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), $ = W, j = C, Tt = {
  // :values [!] System label / Системная метка
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, St = {
  ...De,
  iconBack: "arrow_back",
  iconClose: "close",
  // :default [!] System label / Системная метка
  paddingByIndent: !0
}, U = /* @__PURE__ */ m({
  name: "D1Bars",
  __name: "D1Bars",
  props: /* @__PURE__ */ h({
    label: {},
    labelId: {},
    description: {},
    isSkeleton: { type: Boolean },
    textClose: { type: [String, Function] },
    backButton: {},
    backHide: { type: Boolean },
    backActionHide: { type: Boolean },
    bars: {},
    actionLabel: {},
    actionDescription: {},
    actionBars: {},
    buttonAttrs: {},
    iconBack: {},
    iconClose: {},
    modelAction: { type: Boolean },
    "onUpdate:action": { type: Function },
    "onUpdate:modelAction": { type: Function },
    action: { type: Boolean },
    padding: {},
    paddingByIndent: { type: Boolean }
  }, St),
  emits: ["click", "clickLite", "update:action", "update:modelAction"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-bars": !0,
        "d1-bars--action": e.action,
        [`d1-bars--padding--${e.padding}`]: d(Tt.padding, e.padding),
        "d1-bars--paddingByIndent": e.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new ke(
      "d1.bars",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          button: j
        },
        compMod: {
          button: {
            text: !0,
            size: "xs",
            inverse: !0
          }
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), S = U, M = {
  // :values [!] System label / Системная метка
  align: ["none", "center", "left", "right", "block", "auto"],
  flexible: ["adaptiveSm", "adaptiveMd", "adaptiveLg", "adaptiveXl", "adaptive2xl", "containerSm", "containerMd", "containerLg", "containerXl", "container2xl"],
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, Lt = {
  ...$e,
  buttonSecondaryAttrs: {
    text: !0,
    inverse: !0
  },
  // :default [!] System label / Системная метка
  align: "right",
  paddingByIndent: !0
}, X = /* @__PURE__ */ m({
  name: "D1Actions",
  __name: "D1Actions",
  props: /* @__PURE__ */ h({
    list: {},
    listSecondary: {},
    buttonAttrs: {},
    buttonSecondaryAttrs: {},
    align: {},
    flexible: {},
    padding: {},
    paddingByIndent: { type: Boolean }
  }, Lt),
  emits: ["click", "clickLite"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-actions": !0,
        [`d1-actions--align--${e.align}`]: d(M.align, e.align),
        [`d1-actions--flexible--${e.flexible}`]: d(M.flexible, e.flexible),
        [`d1-actions--padding--${e.padding}`]: d(M.padding, e.padding),
        "d1-actions--paddingByIndent": e.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new Ae(
      "d1.actions",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          button: j
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), F = X, P = {
  // :values [!] System label / Системная метка
  padding: ["sm", "md", "lg"],
  width: ["sm", "md", "lg", "auto"]
  // :values [!] System label / Системная метка
}, Mt = {
  ...ge,
  // :default [!] System label / Системная метка
  paddingByIndent: !0,
  width: "md"
}, It = /* @__PURE__ */ m({
  name: "D1ActionSheet",
  __name: "D1ActionSheet",
  props: /* @__PURE__ */ h({
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    barsLabel: {},
    barsDescription: {},
    barsBackHide: { type: Boolean },
    barsHide: { type: Boolean },
    barsList: {},
    barsAttrs: {},
    actionsHide: { type: Boolean },
    actionsList: {},
    actionsSecondary: {},
    actionsAttrs: {},
    open: { type: Boolean },
    touchClose: { type: Boolean },
    padding: {},
    paddingByIndent: { type: Boolean },
    width: {}
  }, Mt),
  emits: ["window", "bars", "barsLite", "barsBack", "actions", "actionsLite"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-actionSheet": !0,
        [`d1-actionSheet--padding--${e.padding}`]: d(P.padding, e.padding),
        "d1-actionSheet--paddingByIndent": e.paddingByIndent,
        [`d1-actionSheet--width--${e.width}`]: d(P.width, e.width)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new Be(
      "d1.actionSheet",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          window: $,
          bars: S,
          actions: F
        },
        compMod: {
          window: {
            divider: !0
          }
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), L = b, V = {
  // :values [!] System label / Системная метка
  position: ["auto", "top", "bottom", "left", "right"],
  size: ["sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, zt = {
  ...Me,
  // :default [!] System label / Системная метка
  position: "auto",
  size: "md"
}, R = /* @__PURE__ */ m({
  name: "D1Arrow",
  __name: "D1Arrow",
  props: /* @__PURE__ */ h({
    elementTarget: {},
    position: {},
    inverse: { type: Boolean },
    size: {}
  }, zt),
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-arrow": !0,
        [`d1-arrow--position--${e.position}`]: d(V.position, e.position),
        "d1-arrow--inverse": e.inverse,
        [`d1-arrow--size--${e.size}`]: d(V.size, e.size)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new Ie(
      "d1.arrow",
      e,
      {
        emits: a,
        classes: l,
        styles: r
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), Ct = R, Ft = {
  // :values [!] System label / Системная метка
  maxWidth: ["sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, Pt = {
  ...Se,
  // :default [!] System label / Системная метка
  maxWidth: "md"
}, q = /* @__PURE__ */ m({
  name: "D1Tooltip",
  __name: "D1Tooltip",
  props: /* @__PURE__ */ h({
    label: {},
    labelId: {},
    description: {},
    arrowShow: { type: Boolean },
    arrowPosition: {},
    arrowAttrs: {},
    open: { type: Boolean },
    disabled: { type: Boolean },
    inDom: { type: Boolean },
    top: { type: Boolean },
    indent: {},
    delay: {},
    delayHide: {},
    maxWidth: {}
  }, Pt),
  emits: ["tooltip"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-tooltip": !0,
        [`d1-tooltip--maxWidth--${e.maxWidth}`]: d(Ft.maxWidth, e.maxWidth)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new Le(
      "d1.tooltip",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          arrow: Ct
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), Vt = q, Ht = {
  ...ve,
  iconLink: "link",
  iconTag: "tag",
  iconContentCopy: "content_copy"
}, Ot = /* @__PURE__ */ m({
  name: "D1Anchor",
  __name: "D1Anchor",
  props: /* @__PURE__ */ h({
    label: {},
    labelId: {},
    tooltipAttrs: {},
    textCopiedClipboard: { type: [String, Function] },
    shift: {},
    behavior: {},
    block: {},
    inline: {},
    hide: { type: Boolean },
    name: {},
    isCopy: { type: Boolean },
    iconLink: {},
    iconTag: {},
    iconContentCopy: {},
    delayHide: {}
  }, Ht),
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-anchor": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new Te(
      "d1.anchor",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          icon: L,
          tooltip: Vt
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), _ = {
  // :values [!] System label / Системная метка
  overlap: ["rectangular", "circular", "static"],
  vertical: ["top", "center", "bottom"],
  horizontal: ["right", "center", "left"],
  size: ["sm", "md", "lg", "none"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, Gt = {
  ...ze,
  // :default [!] System label / Системная метка
  overlap: "rectangular",
  vertical: "top",
  horizontal: "right",
  primary: !0,
  size: "md"
}, N = /* @__PURE__ */ m({
  name: "D1Badge",
  __name: "D1Badge",
  props: /* @__PURE__ */ h({
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    label: {},
    labelId: {},
    labelMax: {},
    formatting: { type: Boolean },
    ariaLabel: {},
    dot: { type: Boolean },
    hide: { type: Boolean },
    overlap: {},
    vertical: {},
    horizontal: {},
    primary: { type: Boolean },
    secondary: { type: Boolean },
    outline: { type: Boolean },
    size: {},
    palette: {}
  }, Gt),
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-badge": !0,
        "d1-badge--selected": e.selected,
        "d1-badge--hide": e.hide,
        "d1-badge--dot": e.dot,
        [`d1-badge--overlap--${e.overlap}`]: d(_.overlap, e.overlap),
        [`d1-badge--vertical--${e.vertical}`]: d(_.vertical, e.vertical),
        [`d1-badge--horizontal--${e.horizontal}`]: d(_.horizontal, e.horizontal),
        "d1-badge--primary": e.primary && !e.secondary && !e.outline,
        "d1-badge--secondary": e.secondary,
        "d1-badge--outline": e.outline,
        [`d1-badge--size--${e.size}`]: d(_.size, e.size),
        [`d1-palette d1-palette--${e.palette}`]: d(_.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new Ce(
      "d1.badge",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          icon: b
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), Wt = {
  ...Fe
}, jt = /* @__PURE__ */ m({
  name: "D1Block",
  __name: "D1Block",
  props: /* @__PURE__ */ h({
    label: {},
    labelId: {},
    description: {},
    caption: {},
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    headline: {},
    tag: {},
    tagHeader: {}
  }, Wt),
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-block": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new Pe(
      "d1.block",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          icon: L
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), x = {
  // :values [!] System label / Системная метка
  adaptive: ["iconAlways", "block", "auto", "iconSm", "iconMd", "iconLg", "iconXl", "icon2xl", "fullSm", "fullMd", "fullLg", "fullXl", "full2xl"],
  container: ["iconSm", "iconMd", "iconLg", "iconXl", "icon2xl", "fullSm", "fullMd", "fullLg", "fullXl", "full2xl"],
  textAlign: ["left", "center", "right"],
  size: ["sm", "md", "lg"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, Ut = {
  ...Ve,
  // :default [!] System label / Системная метка
  input: !0,
  size: "md"
}, E = /* @__PURE__ */ m({
  name: "D1Chip",
  __name: "D1Chip",
  props: /* @__PURE__ */ h({
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
    input: { type: Boolean },
    assistive: { type: Boolean },
    size: {},
    roundedFull: { type: Boolean },
    palette: {}
  }, Ut),
  emits: ["click", "clickLite"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-chip": !0,
        "d1-chip--focus": e.focus,
        "d1-chip--disabled": e.disabled,
        "d1-chip--selected": e.selected,
        "d1-chip--readonly": e.readonly,
        [`d1-chip--adaptive--${e.adaptive}`]: d(x.adaptive, e.adaptive),
        [`d1-chip--container--${e.container}`]: d(x.container, e.container),
        "d1-chip--inverse": e.inverse,
        "d1-chip--grid": e.grid,
        [`d1-chip--textAlign--${e.textAlign}`]: d(x.textAlign, e.textAlign),
        "d1-chip--input": e.input && !e.assistive,
        "d1-chip--assistive": e.assistive,
        [`d1-chip--size--${e.size}`]: d(x.size, e.size),
        "d1-chip--roundedFull": e.roundedFull,
        [`d1-palette d1-palette--${e.palette}`]: d(x.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new He(
      "d1.chip",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          icon: b,
          progress: k,
          ripple: T
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), K = E, Xt = {
  ...Oe
}, Rt = /* @__PURE__ */ m({
  name: "D1ChipGroup",
  __name: "D1ChipGroup",
  props: /* @__PURE__ */ h({
    modelSelected: {},
    "onUpdate:selected": { type: Function },
    "onUpdate:modelSelected": { type: Function },
    readonly: { type: Boolean },
    selected: { type: [Number, String, Boolean, Array] },
    list: {},
    iconWhenSelected: { type: Boolean },
    keyLabel: {},
    keyValue: {},
    chipAttrs: {}
  }, Xt),
  emits: ["click", "clickLite", "update:selected", "update:modelSelected"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-chipGroup": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new Ge(
      "d1.chipGroup",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          chip: K
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), I = {
  // :values [!] System label / Системная метка
  imagePosition: ["top", "left"],
  padding: ["sm", "md", "lg"],
  width: ["sm", "md", "lg", "auto"]
  // :values [!] System label / Системная метка
}, qt = {
  ...We,
  buttonClose: {
    outline: !0
  },
  iconSuccess: "check_circle",
  iconError: "error",
  iconAttrs: {
    size: "3xl"
  },
  // :default [!] System label / Системная метка
  imagePosition: "top",
  paddingByIndent: !0,
  width: "md"
}, Nt = /* @__PURE__ */ m({
  name: "D1Dialog",
  __name: "D1Dialog",
  props: /* @__PURE__ */ h({
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    barsLabel: {},
    barsDescription: {},
    barsBackHide: { type: Boolean },
    barsHide: { type: Boolean },
    barsList: {},
    barsAttrs: {},
    actionsHide: { type: Boolean },
    actionsList: {},
    actionsSecondary: {},
    actionsAttrs: {},
    image: {},
    label: {},
    labelId: {},
    description: {},
    textClose: { type: [String, Function] },
    textOk: { type: [String, Function] },
    open: { type: Boolean },
    icon: {},
    buttonOk: {},
    buttonClose: {},
    closeButton: { type: Boolean },
    clickOkAndClose: { type: Boolean },
    iconSuccess: {},
    iconError: {},
    iconAttrs: {},
    success: { type: Boolean },
    error: { type: Boolean },
    imagePosition: {},
    padding: {},
    paddingByIndent: { type: Boolean },
    width: {}
  }, qt),
  emits: ["window", "bars", "barsLite", "barsBack", "actions", "actionsLite", "ok", "close"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-dialog": !0,
        "d1-dialog--success": e.success,
        "d1-dialog--error": e.error,
        [`d1-dialog--imagePosition--${e.imagePosition}`]: d(I.imagePosition, e.imagePosition),
        [`d1-dialog--padding--${e.padding}`]: d(I.padding, e.padding),
        "d1-dialog--paddingByIndent": e.paddingByIndent,
        [`d1-dialog--width--${e.width}`]: d(I.width, e.width)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new je(
      "d1.dialog",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          window: $,
          bars: S,
          actions: F,
          icon: L
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), Et = {
  ...Ne
}, J = /* @__PURE__ */ m({
  name: "D1FieldCounter",
  __name: "D1FieldCounter",
  props: /* @__PURE__ */ h({
    counter: {},
    maxlength: {},
    template: {},
    id: {}
  }, Et),
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-fieldCounter": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new Ee(
      "d1.fieldCounter",
      e,
      {
        emits: a,
        classes: l,
        styles: r
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), Q = J, Y = k, Kt = {
  ...Re
}, Z = /* @__PURE__ */ m({
  name: "D1FieldLabel",
  __name: "D1FieldLabel",
  props: /* @__PURE__ */ h({
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
    required: { type: Boolean }
  }, Kt),
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-fieldLabel": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new qe(
      "d1.fieldLabel",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          fieldCounter: Q,
          progress: Y
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), Jt = Z, Qt = {
  ...Ke
}, ee = /* @__PURE__ */ m({
  name: "D1FieldMessage",
  __name: "D1FieldMessage",
  props: /* @__PURE__ */ h({
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
  }, Qt),
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-fieldMessage": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new Je(
      "d1.fieldMessage",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          fieldCounter: Q
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), Yt = ee, D = {
  // :values [!] System label / Системная метка
  arrowAlign: ["center", "right", "left"],
  cancel: ["auto", "always", "none"],
  align: ["center", "right", "left"],
  width: [],
  size: ["sm", "md", "lg", "display"]
  // :values [!] System label / Системная метка
}, Zt = {
  ...Ue,
  iconArrowLeft: "keyboard_arrow_left",
  iconArrowRight: "keyboard_arrow_right",
  iconPlus: "add",
  iconMinus: "remove",
  iconClose: "close_small",
  // :default [!] System label / Системная метка
  classic: !0,
  arrowAlign: "right",
  cancel: "auto",
  size: "md"
}, te = /* @__PURE__ */ m({
  name: "D1Field",
  __name: "D1Field",
  props: /* @__PURE__ */ h({
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
    prefix: {},
    suffix: {},
    caption: {},
    label: {},
    labelId: {},
    counter: {},
    counterShow: { type: Boolean },
    counterTemplate: {},
    counterId: {},
    maxlength: {},
    fieldCounterAttrs: {},
    required: { type: Boolean },
    fieldLabelAttrs: {},
    forceShowMessage: { type: Boolean },
    disabled: { type: Boolean },
    helperMessage: {},
    validationMessage: {},
    fieldMessageAttrs: {},
    helperId: {},
    validationId: {},
    loading: { type: [Boolean, Object] },
    readonly: { type: Boolean },
    to: {},
    value: {},
    detail: {},
    isSkeleton: { type: Boolean },
    disabledPrevious: { type: Boolean },
    disabledNext: { type: Boolean },
    id: {},
    counterTop: { type: Boolean },
    cancelShow: { type: Boolean },
    iconArrowLeft: {},
    iconArrowRight: {},
    iconPlus: {},
    iconMinus: {},
    iconClose: {},
    focus: { type: Boolean },
    block: { type: Boolean },
    isValue: { type: Boolean },
    basic: { type: Boolean },
    boxed: { type: Boolean },
    tonal: { type: Boolean },
    filled: { type: Boolean },
    outlined: { type: Boolean },
    classic: { type: Boolean },
    arrowCarousel: { type: Boolean },
    arrowStepper: { type: Boolean },
    arrowAlign: {},
    cancel: {},
    align: {},
    width: {},
    size: {}
  }, Zt),
  emits: ["click", "clickLite"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-field": !0,
        "d1-field--focus": e.focus,
        "d1-field--disabled": e.disabled,
        "d1-field--selected": e.selected,
        "d1-field--readonly": e.readonly,
        "d1-field--block": e.block,
        "d1-field--isValue": e.isValue,
        "d1-field--basic": e.basic,
        "d1-field--boxed": e.boxed,
        "d1-field--tonal": e.tonal,
        "d1-field--filled": e.filled,
        "d1-field--outlined": e.outlined,
        "d1-field--classic": e.classic && !e.basic && !e.boxed && !e.tonal && !e.filled && !e.outlined,
        "d1-field--arrowCarousel": e.arrowCarousel,
        "d1-field--arrowStepper": e.arrowStepper,
        [`d1-field--arrowAlign--${e.arrowAlign}`]: d(D.arrowAlign, e.arrowAlign),
        [`d1-field--cancel--${e.cancel}`]: d(D.cancel, e.cancel),
        [`d1-field--align--${e.align}`]: d(D.align, e.align),
        "d1-field--width--custom": v(e.width) && !d(D.width, e.width),
        [`d1-field--size--${e.size}`]: d(D.size, e.size)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => {
      var p;
      return {
        // :styles-values [!] System label / Системная метка
        "--d1-field-sys-width": (p = e.width) != null ? p : null
        // :styles-values [!] System label / Системная метка
      };
    }), t = new Xe(
      "d1.field",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          icon: L,
          fieldLabel: Jt,
          fieldMessage: Yt,
          progress: Y
        },
        compMod: {
          icon: {
            rounded: "full"
          },
          iconTrailing: {
            rounded: "full"
          },
          cancel: {
            rounded: "full"
          },
          previous: {
            rounded: "full"
          },
          next: {
            rounded: "full"
          }
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), H = {
  // :values [!] System label / Системная метка
  align: ["center", "left", "right"],
  dir: ["ltr", "rtl"]
  // :values [!] System label / Системная метка
}, eo = {
  ...Ze,
  // :default [!] System label / Системная метка
  visible: !0
}, oe = /* @__PURE__ */ m({
  name: "D1Mask",
  __name: "D1Mask",
  props: /* @__PURE__ */ h({
    name: {},
    value: {},
    valueDefault: {},
    currency: {},
    currencyHide: { type: Boolean },
    fullOnly: { type: Boolean },
    mask: {},
    special: {},
    match: {},
    groupSave: { type: Boolean },
    pattern: { type: [String, Object, Function] },
    check: { type: [String, Object, Function] },
    fraction: { type: [String, Boolean, Number] },
    type: {},
    view: {},
    inputAttrs: {},
    language: {},
    visible: { type: Boolean },
    visiblePartly: { type: Boolean },
    align: {},
    dir: {}
  }, eo),
  emits: ["focus", "blur", "keydown", "keyup", "beforeinput", "input", "inputLite", "change", "changeLite", "paste", "reset"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-mask": !0,
        "d1-mask--visible": e.visible,
        "d1-mask--visiblePartly": e.visiblePartly,
        [`d1-mask--align--${e.align}`]: d(H.align, e.align),
        [`d1-mask--dir--${e.dir}`]: d(H.dir, e.dir)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new et(
      "d1.mask",
      e,
      {
        emits: a,
        classes: l,
        styles: r
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), to = oe, ne = te, oo = {
  ...Qe,
  iconVisibility: "visibility",
  iconVisibilityOff: "visibility_off"
}, se = /* @__PURE__ */ m({
  name: "D1Input",
  __name: "D1Input",
  props: /* @__PURE__ */ h({
    name: {},
    mask: {},
    maskVisible: { type: Boolean },
    maskNone: { type: Boolean },
    currency: {},
    currencyHide: { type: Boolean },
    fraction: { type: [String, Boolean, Number] },
    maskAttrs: {},
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
    prefix: {},
    suffix: {},
    caption: {},
    label: {},
    labelId: {},
    counterShow: { type: Boolean },
    counterId: {},
    fieldCounterAttrs: {},
    required: { type: Boolean },
    fieldLabelAttrs: {},
    forceShowMessage: { type: Boolean },
    disabled: { type: Boolean },
    helperMessage: {},
    validationMessage: {},
    fieldMessageAttrs: {},
    helperId: {},
    validationId: {},
    loading: { type: [Boolean, Object] },
    readonly: { type: Boolean },
    detail: {},
    isSkeleton: { type: Boolean },
    id: {},
    focus: { type: Boolean },
    align: {},
    cancel: {},
    fieldAttrs: {},
    modelValue: {},
    "onUpdate:value": { type: Function },
    "onUpdate:modelValue": { type: Function },
    placeholder: {},
    value: {},
    type: {},
    autofocus: { type: Boolean },
    tabindex: {},
    form: {},
    validationCode: {},
    match: {},
    inputAttrs: {},
    step: {},
    min: {},
    max: {},
    arrow: {},
    arrowStep: {},
    arrowAlign: {},
    minlength: {},
    maxlength: {},
    pattern: {},
    autocomplete: {},
    autocapitalize: {},
    inputMode: {},
    enterKeyHint: {},
    spellcheck: { type: [Boolean, String] },
    autocorrect: {},
    list: {},
    iconVisibility: {},
    iconVisibilityOff: {}
  }, oo),
  emits: ["update:value", "update:modelValue", "input", "inputLite", "change", "changeLite"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-input": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new Ye(
      "d1.input",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          mask: to,
          field: ne
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), A = {
  // :values [!] System label / Системная метка
  iconAlign: ["center", "edge"],
  fill: [],
  size: ["sm", "md", "lg"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, no = {
  ...nt,
  // :default [!] System label / Системная метка
  iconAlign: "edge",
  size: "md"
}, ie = /* @__PURE__ */ m({
  name: "D1ListItem",
  __name: "D1ListItem",
  props: /* @__PURE__ */ h({
    label: {},
    labelId: {},
    highlight: {},
    highlightLengthStart: {},
    value: {},
    description: {},
    prefix: {},
    caption: {},
    suffix: {},
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
    badge: {},
    badgeDot: { type: Boolean },
    loading: { type: [Boolean, Object] },
    isSkeleton: { type: Boolean },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    to: {},
    detail: {},
    role: {},
    index: {},
    href: {},
    tag: {},
    filterMode: { type: Boolean },
    divider: { type: Boolean },
    tabindex: {},
    type: {},
    parent: {},
    listId: {},
    search: {},
    isMenu: { type: Boolean },
    isItemMenu: { type: Boolean },
    focus: { type: Boolean },
    open: { type: Boolean },
    selectedChild: { type: Boolean },
    iconTop: { type: Boolean },
    iconAlign: {},
    fill: {},
    size: {},
    dense: { type: Boolean },
    palette: {}
  }, no),
  emits: ["click", "clickLite"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-listItem": !0,
        "d1-listItem--focus": e.focus,
        "d1-listItem--open": e.open,
        "d1-listItem--selected": e.selected,
        "d1-listItem--selectedChild": e.selectedChild,
        "d1-listItem--readonly": e.readonly,
        "d1-listItem--disabled": e.disabled,
        "d1-listItem--iconTop": e.iconTop,
        [`d1-listItem--iconAlign--${e.iconAlign}`]: d(A.iconAlign, e.iconAlign),
        "d1-listItem--fill--custom": v(e.fill) && !d(A.fill, e.fill),
        "d1-listItem--divider": e.divider,
        [`d1-listItem--size--${e.size}`]: d(A.size, e.size),
        "d1-listItem--dense": e.dense,
        [`d1-palette d1-palette--${e.palette}`]: d(A.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => {
      var p;
      return {
        // :styles-values [!] System label / Системная метка
        "--d1-listItem-sys-fill": (p = e.fill) != null ? p : null
        // :styles-values [!] System label / Системная метка
      };
    }), t = new st(
      "d1.listItem",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          icon: b,
          badge: N,
          progress: k,
          ripple: T
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), so = ie, io = {
  ...it
}, ae = /* @__PURE__ */ m({
  name: "D1ListGroup",
  __name: "D1ListGroup",
  props: /* @__PURE__ */ h({
    divider: { type: Boolean },
    open: { type: Boolean }
  }, io),
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-listGroup": !0,
        "d1-listGroup--open": e.open,
        "d1-listGroup--divider": e.divider
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new at(
      "d1.listGroup",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          motionTransform: pe
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), ao = ae, lo = {
  // :values [!] System label / Системная метка
  axis: ["x", "y"]
  // :values [!] System label / Системная метка
}, ro = {
  ...lt
}, le = /* @__PURE__ */ m({
  name: "D1ListMenu",
  __name: "D1ListMenu",
  props: /* @__PURE__ */ h({
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    open: { type: Boolean },
    axis: {},
    divider: { type: Boolean }
  }, ro),
  emits: ["window"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-listMenu": !0,
        "d1-listMenu--open": e.open,
        [`d1-listMenu--axis--${e.axis}`]: d(lo.axis, e.axis),
        "d1-listMenu--divider": e.divider
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new rt(
      "d1.listMenu",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          window: $
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), co = le, po = {
  // :values [!] System label / Системная метка
  axis: ["x", "y"]
  // :values [!] System label / Системная метка
}, uo = {
  ...tt,
  iconArrowDown: "keyboard_arrow_down",
  iconArrowRight: "keyboard_arrow_right",
  // :default [!] System label / Системная метка
  axis: "y"
}, re = /* @__PURE__ */ m({
  name: "D1List",
  __name: "D1List",
  props: /* @__PURE__ */ h({
    focus: { type: [Number, String, Boolean] },
    selected: { type: [Number, String, Boolean, Array] },
    disabled: { type: Boolean },
    lite: { type: Boolean },
    list: {},
    liteThreshold: {},
    highlight: {},
    highlightLengthStart: {},
    filterMode: { type: Boolean },
    keyLabel: {},
    keyValue: {},
    max: {},
    tag: {},
    axis: {},
    divider: { type: Boolean },
    itemAttrs: {},
    itemManagementAttrs: {},
    itemGroupAttrs: {},
    itemMenuAttrs: {},
    iconArrowDown: {},
    iconArrowRight: {},
    roleItem: {},
    control: { type: Boolean }
  }, uo),
  emits: ["click", "clickLite", "close"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-list": !0,
        [`d1-list--axis--${e.axis}`]: d(po.axis, e.axis),
        "d1-list--divider": e.divider
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new ot(
      "d1.list",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          listItem: so,
          listGroup: ao,
          listMenu: co
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), mo = re, yo = {
  // :values [!] System label / Системная метка
  barsAdaptive: ["showAlways", "showSm", "showMd", "showLg", "showXl", "show2xl"]
  // :values [!] System label / Системная метка
}, go = {
  ...ct
}, ce = /* @__PURE__ */ m({
  name: "D1Menu",
  __name: "D1Menu",
  props: /* @__PURE__ */ h({
    barsLabel: {},
    barsDescription: {},
    barsBackHide: { type: Boolean },
    barsHide: { type: Boolean },
    barsList: {},
    barsAttrs: {},
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    modelSelected: {},
    "onUpdate:selected": { type: Function },
    "onUpdate:modelSelected": { type: Function },
    selected: { type: [Number, String, Boolean, Array] },
    hideList: { type: Boolean },
    list: {},
    liteThreshold: {},
    highlight: {},
    highlightLengthStart: {},
    filterMode: { type: Boolean },
    ajax: { type: [String, Function] },
    request: {},
    cache: { type: Boolean },
    keyLabel: {},
    keyValue: {},
    max: {},
    tag: {},
    step: {},
    listAttrs: {},
    itemAttrs: {},
    roleItem: {},
    isSelectedByValue: { type: Boolean },
    barsAdaptive: {}
  }, go),
  emits: ["bars", "barsLite", "barsBack", "click", "clickLite", "window", "update:selected", "update:modelSelected", "updateValue", "clickSlot"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-menu": !0,
        "d1-menu--hideList": e.hideList,
        [`d1-menu--barsAdaptive--${e.barsAdaptive}`]: d(yo.barsAdaptive, e.barsAdaptive)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new dt(
      "d1.menu",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          list: mo,
          bars: S,
          window: $
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), z = {
  // :values [!] System label / Системная метка
  imagePosition: ["top", "left"],
  padding: ["sm", "md", "lg"],
  width: ["sm", "md", "lg", "auto"]
  // :values [!] System label / Системная метка
}, Bo = {
  ...pt,
  // :default [!] System label / Системная метка
  imagePosition: "top",
  paddingByIndent: !0,
  width: "md"
}, ho = /* @__PURE__ */ m({
  name: "D1Modal",
  __name: "D1Modal",
  props: /* @__PURE__ */ h({
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    barsLabel: {},
    barsDescription: {},
    barsBackHide: { type: Boolean },
    barsHide: { type: Boolean },
    barsList: {},
    barsAttrs: {},
    actionsHide: { type: Boolean },
    actionsList: {},
    actionsSecondary: {},
    actionsAttrs: {},
    image: {},
    open: { type: Boolean },
    imagePosition: {},
    padding: {},
    paddingByIndent: { type: Boolean },
    width: {}
  }, Bo),
  emits: ["window", "bars", "barsLite", "barsBack", "actions", "actionsLite"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-modal": !0,
        [`d1-modal--imagePosition--${e.imagePosition}`]: d(z.imagePosition, e.imagePosition),
        [`d1-modal--padding--${e.padding}`]: d(z.padding, e.padding),
        "d1-modal--paddingByIndent": e.paddingByIndent,
        [`d1-modal--width--${e.width}`]: d(z.width, e.width)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new ut(
      "d1.modal",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          window: $,
          bars: S,
          actions: F
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), fo = {
  ...mt
}, bo = /* @__PURE__ */ m({
  name: "D1Page",
  __name: "D1Page",
  props: /* @__PURE__ */ h({
    label: {},
    labelId: {},
    description: {},
    caption: {},
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    headline: {},
    tag: {},
    tagHeader: {}
  }, fo),
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-page": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new yt(
      "d1.page",
      e,
      {
        emits: a,
        classes: l,
        styles: r
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), wo = {
  ...gt
}, _o = /* @__PURE__ */ m({
  name: "D1Section",
  __name: "D1Section",
  props: /* @__PURE__ */ h({
    label: {},
    labelId: {},
    description: {},
    caption: {},
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    headline: {},
    tag: {},
    tagHeader: {}
  }, wo),
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-section": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new Bt(
      "d1.section",
      e,
      {
        emits: a,
        classes: l,
        styles: r
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), xo = ce, Do = {
  ...bt,
  chipAttrs: {
    size: "sm"
  },
  iconCancel: "close_small"
}, de = /* @__PURE__ */ m({
  name: "D1SelectValue",
  __name: "D1SelectValue",
  props: /* @__PURE__ */ h({
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    chipAttrs: {},
    placeholder: {},
    value: {},
    multiple: { type: Boolean },
    iconShow: { type: Boolean },
    iconAttrs: {},
    iconCancel: {}
  }, Do),
  emits: ["click", "clickLite"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-selectValue": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new wt(
      "d1.selectValue",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          chip: K
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), ko = de, $o = se, Ao = {
  ...ht,
  iconArrowDown: "keyboard_arrow_down",
  iconSearch: "search",
  menuAttrs: {
    itemAttrs: {
      dense: !0
    }
  },
  inputSearchAttrs: {
    fieldAttrs: {
      size: "sm"
    }
  }
}, vo = /* @__PURE__ */ m({
  name: "D1Select",
  __name: "D1Select",
  props: /* @__PURE__ */ h({
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
    prefix: {},
    suffix: {},
    caption: {},
    label: {},
    labelId: {},
    counterShow: { type: Boolean },
    counterId: {},
    fieldCounterAttrs: {},
    required: { type: Boolean },
    fieldLabelAttrs: {},
    forceShowMessage: { type: Boolean },
    disabled: { type: Boolean },
    helperMessage: {},
    validationMessage: {},
    fieldMessageAttrs: {},
    helperId: {},
    validationId: {},
    loading: { type: [Boolean, Object] },
    readonly: { type: Boolean },
    detail: {},
    isSkeleton: { type: Boolean },
    id: {},
    focus: { type: Boolean },
    align: {},
    cancel: {},
    fieldAttrs: {},
    modelValue: {},
    "onUpdate:value": { type: Function },
    "onUpdate:modelValue": { type: Function },
    placeholder: {},
    value: {},
    name: {},
    autofocus: { type: Boolean },
    tabindex: {},
    form: {},
    validationCode: {},
    match: {},
    inputAttrs: {},
    max: {},
    arrow: {},
    arrowStep: {},
    arrowAlign: {},
    autocomplete: {},
    autocapitalize: {},
    inputMode: {},
    enterKeyHint: {},
    spellcheck: { type: [Boolean, String] },
    autocorrect: {},
    option: {},
    multiple: { type: Boolean },
    menuAttrs: {},
    editValue: { type: Boolean },
    hideList: { type: Boolean },
    showSearch: { type: Boolean },
    filterMode: { type: Boolean },
    iconArrowDown: {},
    iconSearch: {},
    inputSearchAttrs: {}
  }, Ao),
  emits: ["update:value", "update:modelValue", "input", "inputLite", "change", "changeLite"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-select": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new ft(
      "d1.select",
      e,
      {
        emits: a,
        classes: l,
        styles: r,
        components: {
          menu: xo,
          field: ne,
          selectValue: ko,
          input: $o
        }
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), To = {
  ..._t
}, So = /* @__PURE__ */ m({
  name: "D1Skeleton",
  __name: "D1Skeleton",
  props: /* @__PURE__ */ h({
    active: { type: Boolean }
  }, To),
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-skeleton": !0,
        "d1-skeleton--active": e.active
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new xt(
      "d1.skeleton",
      e,
      {
        emits: a,
        classes: l,
        styles: r
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), Lo = {
  // :values [!] System label / Системная метка
  height: ["xs", "sm", "md", "lg", "xl"]
  // :values [!] System label / Системная метка
}, Mo = {
  ...Dt,
  // :default [!] System label / Системная метка
  height: "md"
}, Io = /* @__PURE__ */ m({
  name: "D1TextareaAutosize",
  __name: "D1TextareaAutosize",
  props: /* @__PURE__ */ h({
    value: {},
    autosize: { type: Boolean },
    inputAttrs: {},
    height: {}
  }, Mo),
  emits: ["input"],
  setup(n, { expose: s, emit: i }) {
    const a = i, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-textareaAutosize": !0,
        [`d1-textareaAutosize--height--${e.height}`]: d(Lo.height, e.height)
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new kt(
      "d1.textareaAutosize",
      e,
      {
        emits: a,
        classes: l,
        styles: r
      }
    ), c = t.render();
    return s(t.expose()), (p, u) => (y(), g(B(c)));
  }
}), fn = ue, bn = It, wn = X, _n = Ot, xn = R, Dn = N, kn = U, $n = jt, An = C, vn = me, Tn = E, Sn = Rt, Ln = Nt, Mn = te, In = J, zn = Z, Cn = ee, Fn = b, Pn = O, Vn = se, Hn = re, On = ae, Gn = ie, Wn = le, jn = oe, Un = ce, Xn = ho, Rn = ye, qn = bo, Nn = k, En = T, Kn = G, Jn = _o, Qn = vo, Yn = de, Zn = So, es = Io, ts = q, os = W;
export {
  fn as D1Accordion,
  bn as D1ActionSheet,
  wn as D1Actions,
  _n as D1Anchor,
  xn as D1Arrow,
  Dn as D1Badge,
  kn as D1Bars,
  $n as D1Block,
  An as D1Button,
  vn as D1Cell,
  Tn as D1Chip,
  Sn as D1ChipGroup,
  Ln as D1Dialog,
  Mn as D1Field,
  In as D1FieldCounter,
  zn as D1FieldLabel,
  Cn as D1FieldMessage,
  Fn as D1Icon,
  Pn as D1Image,
  Vn as D1Input,
  Hn as D1List,
  On as D1ListGroup,
  Gn as D1ListItem,
  Wn as D1ListMenu,
  jn as D1Mask,
  Un as D1Menu,
  Xn as D1Modal,
  Rn as D1MotionTransform,
  qn as D1Page,
  Nn as D1Progress,
  En as D1Ripple,
  Kn as D1Scrollbar,
  Jn as D1Section,
  Qn as D1Select,
  Yn as D1SelectValue,
  Zn as D1Skeleton,
  es as D1TextareaAutosize,
  ts as D1Tooltip,
  os as D1Window
};
