import { defineComponent as c, computed as t, openBlock as u, createBlock as d, unref as y, mergeDefaults as m } from "vue";
import "@dxtmisha/functional";
import { defaultsInput as f, InputDesign as B } from "@dxtmisha/constructor/Input";
import { _ as g } from "./D1Mask.vue_vue_type_script_setup_true_lang-D8k5XAko.js";
import { _ as b } from "./D1Field.vue_vue_type_script_setup_true_lang-BJhBWGUy.js";
const _ = g, h = b, k = {
  ...f,
  iconVisibility: "visibility",
  iconVisibilityOff: "visibility_off"
}, S = /* @__PURE__ */ c({
  name: "D1Input",
  __name: "D1Input",
  props: /* @__PURE__ */ m({
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
    prefixId: {},
    suffix: {},
    suffixId: {},
    caption: {},
    captionDecorative: { type: Boolean },
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
    textCancel: { type: [String, Function] },
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
  }, k),
  emits: ["update:value", "update:modelValue", "input", "inputLite", "change", "changeLite"],
  setup(o, { expose: n, emit: i }) {
    const a = i, l = o, s = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-input": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new B(
      "d1.input",
      l,
      {
        emits: a,
        classes: s,
        styles: r,
        components: {
          mask: _,
          field: h
        }
      }
    ), p = e.render();
    return n(e.expose()), (x, D) => (u(), d(y(p)));
  }
});
export {
  h as D,
  S as _
};
