import { ref as f, watch as y, h as g, defineComponent as C, computed as d, openBlock as b, createBlock as k, unref as D, mergeDefaults as w } from "vue";
import { DesignConstructorAbstract as x, ListDataRef as L, forEach as S, toBinds as V } from "@dxtmisha/functional";
import { g as A } from "./D1Icon.vue_vue_type_script_setup_true_lang-Cs247ZwJ.js";
import { V as B } from "./ModelInclude-BiYm_iCQ-BvlyUUtY.js";
import { D as G } from "./index-Baa3rXhE.js";
var _ = Object.defineProperty, I = (s, e, t) => e in s ? _(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, p = (s, e, t) => I(s, typeof e != "symbol" ? e + "" : e, t);
let E = class {
  /**
   * Constructor
   * @param index identifier/ идентификатор
   * @param emits emits function/ функция эмитов
   * @param event event click handler/ обработчик клика
   * @param inputValue input value reference/ ссылка на входное значение
   * @param readonly readonly flag/ флаг только для чтения
   */
  constructor(e, t, o, l, i) {
    p(this, "value", f()), p(this, "onClick", (n, r) => {
      var a, c;
      r && "value" in r && !((a = this.readonly) != null && a.value) && (this.value.value = r.value), (c = this.event) == null || c.onClick(n, r);
    }), this.index = e, this.emits = t, this.event = o, this.inputValue = l, this.readonly = i, new B(this.index, this.emits, this.value), y(
      [this.inputValue],
      () => {
        var n;
        this.value.value = (n = this.inputValue) == null ? void 0 : n.value;
      },
      { immediate: !0 }
    );
  }
  /**
   * Returns the current value.
   *
   * Возвращает текущее значение.
   */
  getValue() {
    return this.value.value;
  }
};
var N = Object.defineProperty, O = (s, e, t) => e in s ? N(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, u = (s, e, t) => O(s, typeof e != "symbol" ? e + "" : e, t);
class R {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.ListDataRefConstructor class for working with list data/ класс для работы с данными списка
   * @param constructors.ModelValueIncludeConstructor class for working with model value/ класс для работы со значением модели
   */
  constructor(e, t, o, l, i, n, r, a, c) {
    u(this, "data"), u(this, "event"), u(this, "model"), this.props = e, this.refs = t, this.element = o, this.classDesign = l, this.className = i, this.components = n, this.slots = r, this.emits = a;
    const {
      EventClickIncludeConstructor: h = A,
      ListDataRefConstructor: m = L,
      ModelValueIncludeConstructor: v = E
    } = c != null ? c : {};
    this.event = new h(void 0, void 0, this.emits), this.model = new v(
      "selected",
      this.emits,
      this.event,
      this.refs.selected,
      this.refs.readonly
    ), this.data = new m(
      this.refs.list,
      void 0,
      void 0,
      void 0,
      void 0,
      this.model.value,
      this.refs.keyValue,
      this.refs.keyLabel
    );
  }
  /**
   * Get list of items.
   *
   * Получить список элементов.
   */
  getList() {
    return this.data.fullData.value;
  }
}
const $ = {
  readonly: !0
};
class j extends x {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(e, t, o, l = R) {
    super(
      e,
      t,
      o
    ), u(this, "item"), u(this, "renderList", () => S(
      this.item.getList(),
      (i) => this.renderItem(i)
    )), u(this, "renderItem", (i) => {
      var n;
      return this.components.renderOne(
        "chip",
        V(
          {
            class: (n = this.classes) == null ? void 0 : n.value.item,
            iconHide: this.props.iconWhenSelected && !i.selected,
            onClick: this.item.model.onClick
          },
          this.props.chipAttrs,
          i
        ),
        void 0,
        i.index
      );
    }), this.item = new l(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    ), this.init();
  }
  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {};
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {},
      // :classes [!] System label / Системная метка
      item: this.getSubClass("item")
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    var e;
    const t = this.renderList();
    return this.initSlot("default", t), g(
      "div",
      {
        ...this.getAttrs(),
        class: (e = this.classes) == null ? void 0 : e.value.main
      },
      t
    );
  }
}
const F = {
  ...$
}, P = /* @__PURE__ */ C({
  name: "D1ChipGroup",
  __name: "D1ChipGroup",
  props: /* @__PURE__ */ w({
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
  }, F),
  emits: ["click", "clickLite", "update:selected", "update:modelSelected"],
  setup(s, { expose: e, emit: t }) {
    const o = t, l = s, i = d(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-chipGroup": !0
        // :classes-values [!] System label / Системная метка
      }
    })), n = d(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new j(
      "d1.chipGroup",
      l,
      {
        emits: o,
        classes: i,
        styles: n,
        components: {
          chip: G
        }
      }
    ), a = r.render();
    return e(r.expose()), (c, h) => (b(), k(D(a)));
  }
}), z = P;
export {
  z as D1ChipGroup
};
