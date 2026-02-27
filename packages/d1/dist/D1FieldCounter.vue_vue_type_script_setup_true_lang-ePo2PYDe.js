import { h as p, computed as a, defineComponent as f, openBlock as C, createBlock as M, unref as b, mergeDefaults as y } from "vue";
import { DesignConstructorAbstract as T, isFilled as O, applyTemplate as _, toNumber as g } from "@dxtmisha/functional";
import { a as D } from "./TextInclude--GERRCGj-qSMWmRIC.js";
import { l as x } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
var R = Object.defineProperty, S = (s, t, e) => t in s ? R(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, r = (s, t, e) => S(s, typeof t != "symbol" ? t + "" : t, e);
class A {
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
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
   */
  constructor(t, e, o, l, n, c, h, u, m) {
    r(this, "text"), r(this, "is", a(() => this.props.counter !== void 0 || this.isMax.value)), r(this, "isMax", a(() => this.getMax() > 0)), r(this, "item", a(() => {
      const i = this.getCounter().toString(), v = this.getMax().toString();
      return O(this.props.template) ? this.props.template.replace("[c]", i).replace("[m]", v) : this.isMax.value ? `${i} / ${v}` : i;
    })), r(this, "ariaText", a(() => {
      if (this.isMax.value) {
        const i = this.getRemaining();
        if (i <= 0)
          return this.text.characterLimit.value;
        if (i <= this.getMaxlengthOnce() && this.text.characterRemaining.value)
          return _(
            this.text.characterRemaining.value,
            { left: i }
          );
      }
    })), this.props = t, this.refs = e, this.element = o, this.classDesign = l, this.className = n, this.components = c, this.slots = h, this.emits = u;
    const {
      TextIncludeConstructor: d = D
    } = m != null ? m : {};
    this.text = new d(this.props);
  }
  /**
   * Returns the number of input characters.
   *
   * Возвращает количество вводимых символов.
   */
  getCounter() {
    var t;
    return g((t = this.props.counter) != null ? t : 0);
  }
  /**
   * Returns the maximum available input number.
   *
   * Возвращает максимально доступное вводимое число.
   */
  getMax() {
    var t;
    return g((t = this.props.maxlength) != null ? t : 0);
  }
  /**
   * Returns the number of characters remaining at which the screen reader starts announcing.
   *
   * Возвращает количество оставшихся символов, при котором скринридер начинает произносить.
   */
  getMaxlengthOnce() {
    return this.props.maxlengthOnce !== void 0 ? g(this.props.maxlengthOnce) : Math.ceil(this.getMax() * 0.1);
  }
  /**
   * Returns the number of remaining characters.
   *
   * Возвращает количество оставшихся символов.
   */
  getRemaining() {
    return this.getMax() - this.getCounter();
  }
}
const F = {};
class k extends T {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, e, o, l = A) {
    super(
      t,
      e,
      o
    ), r(this, "item"), r(this, "renderAria", () => {
      var n;
      return this.item.ariaText.value ? [
        p(
          "div",
          {
            class: (n = this.classes) == null ? void 0 : n.value.aria,
            ...x.live("polite")
          },
          [
            p(
              "span",
              {
                ...x.role("img"),
                ...x.label(this.item.ariaText.value)
              }
            )
          ]
        )
      ] : [];
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
      aria: this.getSubClass("aria")
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
    var t;
    if (this.item.is.value)
      return [
        p(
          "span",
          {
            ...this.getAttrs(),
            id: this.props.id,
            class: (t = this.classes) == null ? void 0 : t.value.main,
            innerHTML: this.item.item.value
          }
        ),
        ...this.renderAria()
      ];
  }
}
const w = {
  ...F
}, $ = /* @__PURE__ */ f({
  name: "D1FieldCounter",
  __name: "D1FieldCounter",
  props: /* @__PURE__ */ y({
    textCharacterLimit: { type: [String, Function] },
    textCharacterRemaining: { type: [String, Function] },
    counter: {},
    maxlength: {},
    maxlengthOnce: {},
    template: {},
    id: {}
  }, w),
  setup(s, { expose: t, emit: e }) {
    const o = e, l = s, n = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-fieldCounter": !0
        // :classes-values [!] System label / Системная метка
      }
    })), c = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new k(
      "d1.fieldCounter",
      l,
      {
        emits: o,
        classes: n,
        styles: c
      }
    ), u = h.render();
    return t(h.expose()), (m, d) => (C(), M(b(u)));
  }
});
export {
  $ as _
};
