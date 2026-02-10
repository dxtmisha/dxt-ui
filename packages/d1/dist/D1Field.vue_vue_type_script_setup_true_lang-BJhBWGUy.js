import { defineComponent as u, computed as a, openBlock as y, createBlock as g, unref as m, mergeDefaults as B } from "vue";
import { inArray as o, isFilled as w } from "@dxtmisha/functional";
import { defaultsField as b, FieldDesign as h } from "@dxtmisha/constructor/Field";
import { D as _ } from "./index-CItcax-E.js";
import { _ as x, D as A } from "./D1FieldLabel.vue_vue_type_script_setup_true_lang-BNUuk2qa.js";
import { _ as D } from "./D1FieldMessage.vue_vue_type_script_setup_true_lang-BwscBukK.js";
const k = x, T = D, l = {
  // :values [!] System label / Системная метка
  arrowAlign: ["center", "right", "left"],
  cancel: ["auto", "always", "none"],
  align: ["center", "right", "left"],
  width: [],
  size: ["sm", "md", "lg", "display"]
  // :values [!] System label / Системная метка
}, M = {
  ...b,
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
}, P = /* @__PURE__ */ u({
  name: "D1Field",
  __name: "D1Field",
  props: /* @__PURE__ */ B({
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
    prefixId: {},
    suffix: {},
    suffixId: {},
    caption: {},
    captionDecorative: { type: Boolean },
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
    textCancel: { type: [String, Function] },
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
  }, M),
  emits: ["click", "clickLite"],
  setup(t, { expose: d, emit: r }) {
    const s = r, e = t, c = a(() => ({
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
        [`d1-field--arrowAlign--${e.arrowAlign}`]: o(l.arrowAlign, e.arrowAlign),
        [`d1-field--cancel--${e.cancel}`]: o(l.cancel, e.cancel),
        [`d1-field--align--${e.align}`]: o(l.align, e.align),
        "d1-field--width--custom": w(e.width) && !o(l.width, e.width),
        [`d1-field--size--${e.size}`]: o(l.size, e.size)
        // :classes-values [!] System label / Системная метка
      }
    })), p = a(() => {
      var i;
      return {
        // :styles-values [!] System label / Системная метка
        "--d1-field-sys-width": (i = e.width) != null ? i : null
        // :styles-values [!] System label / Системная метка
      };
    }), n = new h(
      "d1.field",
      e,
      {
        emits: s,
        classes: c,
        styles: p,
        components: {
          icon: _,
          fieldLabel: k,
          fieldMessage: T,
          progress: A
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
    ), f = n.render();
    return d(n.expose()), (i, C) => (y(), g(m(f)));
  }
});
export {
  P as _
};
