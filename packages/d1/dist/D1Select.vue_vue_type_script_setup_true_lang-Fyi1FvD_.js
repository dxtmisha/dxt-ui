import { defineComponent as p, computed as t, openBlock as d, createBlock as u, unref as m, mergeDefaults as y } from "vue";
import "@dxtmisha/functional";
import { defaultsSelect as f, SelectDesign as B } from "@dxtmisha/constructor/Select";
import { _ as g } from "./D1Menu.vue_vue_type_script_setup_true_lang-CX9mv1RX.js";
import { _ as h, D as _ } from "./D1Input.vue_vue_type_script_setup_true_lang-BtKtLPy3.js";
import { _ as S } from "./D1SelectValue.vue_vue_type_script_setup_true_lang-CMmmYTxu.js";
const A = g, D = S, w = h, x = {
  ...f,
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
}, F = /* @__PURE__ */ p({
  name: "D1Select",
  __name: "D1Select",
  props: /* @__PURE__ */ y({
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
  }, x),
  emits: ["update:value", "update:modelValue", "input", "inputLite", "change", "changeLite"],
  setup(o, { expose: n, emit: a }) {
    const l = a, i = o, r = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-select": !0
        // :classes-values [!] System label / Системная метка
      }
    })), s = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new B(
      "d1.select",
      i,
      {
        emits: l,
        classes: r,
        styles: s,
        components: {
          menu: A,
          field: _,
          selectValue: D,
          input: w
        }
      }
    ), c = e.render();
    return n(e.expose()), (T, b) => (d(), u(m(c)));
  }
});
export {
  F as _
};
