import { ref as d, watch as v, nextTick as f, h as c, defineComponent as z, computed as p, openBlock as x, createBlock as A, unref as y, mergeDefaults as T } from "vue";
import { DesignConstructorAbstract as C, inArray as D } from "@dxtmisha/functional";
var S = Object.defineProperty, b = (n, e, t) => e in n ? S(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, a = (n, e, t) => b(n, typeof e != "symbol" ? e + "" : e, t);
class w {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(e, t, r) {
    a(this, "item", d("")), this.props = e, this.refs = t, this.emits = r, v(
      [t.value],
      () => this.set(e.value),
      { immediate: !0 }
    );
  }
  /**
   * Changes values.
   *
   * Изменяет значения.
   * @param value changeable value/ изменяемое значение
   */
  set(e) {
    return this.isDifference(e) ? (this.item.value = e != null ? e : "", !0) : !1;
  }
  /**
   * Event for changing the value.
   *
   * Событие для изменения значения.
   * @param event invoked event/ вызываемое событие
   */
  on(e) {
    var t;
    this.set(e.target.value) && ((t = this.emits) == null || t.call(this, "input", e));
  }
  /**
   * Checks if the value has actually been changed.
   *
   * Проверяет, было ли значение действительно изменено.
   * @param value changeable value/ изменяемое значение
   */
  isDifference(e) {
    return this.item.value !== e;
  }
}
class E {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param value object for working with values/ объект для работы со значениями
   */
  constructor(e, t, r) {
    a(this, "clone", d()), a(this, "updateSize", () => {
      if (this.isElements()) {
        const s = getComputedStyle(this.element.value), i = this.clone.value.style;
        i.paddingTop = s.paddingTop, i.paddingRight = s.paddingRight, i.paddingBottom = s.paddingBottom, i.paddingLeft = s.paddingLeft, i.width = `${this.element.value.offsetWidth}px`;
      }
    }), a(this, "on", () => {
      this.updateSize(), this.updateValue();
    }), a(this, "onInput", (s) => {
      this.value.on(s), this.updateSize(), this.updateValue();
    }), a(this, "updateHeight", () => {
      this.isElements() && (this.element.value.style.height = `${this.clone.value.offsetHeight}px`);
    }), this.props = e, this.element = t, this.value = r, v(this.value.item, this.on), f().then(() => requestAnimationFrame(this.on));
  }
  /**
   * Checks if all elements are present.
   *
   * Проверяет, есть ли все элементы.
   */
  isElements() {
    return !!(this.props.autosize && this.element.value && getComputedStyle(this.element.value).getPropertyValue("--sys-field-sizing-none") === '"--YES--"' && this.clone.value);
  }
  /**
   * Updates the content of the clone element.
   *
   * Обновляет содержимое элемента клона.
   */
  updateValue() {
    this.isElements() && (this.clone.value.innerText = `${this.value.item.value} --`, requestAnimationFrame(this.updateHeight));
  }
}
class V {
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
   * @param constructors.TextareaAutosizeResizeConstructor class for working with resize/ класс для работы с изменением размера
   * @param constructors.TextareaAutosizeValueConstructor class for working with value/ класс для работы со значением
   */
  constructor(e, t, r, s, i, h, o, u, l) {
    a(this, "value"), a(this, "resize"), this.props = e, this.refs = t, this.element = r, this.classDesign = s, this.className = i, this.components = h, this.slots = o, this.emits = u;
    const {
      TextareaAutosizeResizeConstructor: m = E,
      TextareaAutosizeValueConstructor: g = w
    } = l != null ? l : {};
    this.value = new g(e, t, u), this.resize = new m(e, r, this.value);
  }
}
const _ = {
  // :default [!] System label / Системная метка
  autosize: !0
};
class k extends C {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(e, t, r, s = V) {
    super(
      e,
      t,
      r
    ), a(this, "item"), a(this, "renderTextarea", () => {
      var i;
      return c("textarea", {
        ...this.getAttrs(),
        ...this.props.inputAttrs,
        ref: this.element,
        value: this.item.value.item.value,
        class: (i = this.classes) == null ? void 0 : i.value.main,
        onFocus: this.item.resize.on,
        onInput: this.item.resize.onInput
      });
    }), a(this, "renderClone", () => {
      var i;
      return c("div", {
        ref: this.item.resize.clone,
        class: (i = this.classes) == null ? void 0 : i.value.clone
      });
    }), this.item = new s(
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
    return {
      value: this.item.value.item
    };
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
      clone: this.getSubClass("clone")
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
    return [
      this.renderClone(),
      this.renderTextarea()
    ];
  }
}
const B = {
  // :values [!] System label / Системная метка
  height: ["xs", "sm", "md", "lg", "xl"]
  // :values [!] System label / Системная метка
}, R = {
  ..._,
  // :default [!] System label / Системная метка
  autosize: !0,
  height: "md"
}, $ = /* @__PURE__ */ z({
  name: "D1TextareaAutosize",
  __name: "D1TextareaAutosize",
  props: /* @__PURE__ */ T({
    value: {},
    inputAttrs: {},
    autosize: { type: Boolean },
    height: {}
  }, R),
  emits: ["input"],
  setup(n, { expose: e, emit: t }) {
    const r = t, s = n, i = p(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-textareaAutosize": !0,
        "d1-textareaAutosize--autosize": s.autosize,
        [`d1-textareaAutosize--height--${s.height}`]: D(B.height, s.height)
        // :classes-values [!] System label / Системная метка
      }
    })), h = p(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new k(
      "d1.textareaAutosize",
      s,
      {
        emits: r,
        classes: i,
        styles: h
      }
    ), u = o.render();
    return e(o.expose()), (l, m) => (x(), A(y(u)));
  }
}), I = $;
export {
  I as D
};
