import { computed as n, h as v, onMounted as S, nextTick as g, defineComponent as f, openBlock as b, createBlock as y, unref as _, mergeDefaults as x } from "vue";
import { DesignConstructorAbstract as D, goScrollTo as N, inArray as T } from "@dxtmisha/functional";
var w = Object.defineProperty, $ = (s, e, t) => e in s ? w(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, p = (s, e, t) => $(s, typeof e != "symbol" ? e + "" : e, t);
class k {
  /**
   * Constructor
   * @param element element/ элемент
   */
  constructor(e) {
    p(this, "binds", n(() => ({
      onWheelPassive: this.onScrollToX
    }))), p(this, "onScrollToX", (t) => {
      this.element.value && t.deltaY !== 0 && this.isNotScrollSnap() && (t.preventDefault(), this.element.value.scrollLeft += Number(t.deltaY));
    }), this.element = e;
  }
  /**
   * Checks if scroll snap is not enabled.
   *
   * Проверяет, не включена ли привязка прокрутки.
   */
  isNotScrollSnap() {
    return this.element.value ? getComputedStyle(this.element.value).scrollSnapType !== "x mandatory" : !0;
  }
}
var z = Object.defineProperty, I = (s, e, t) => e in s ? z(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, o = (s, e, t) => I(s, typeof e != "symbol" ? e + "" : e, t);
class C {
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
   * @param constructors.ScrollToXIncludeConstructor class for working with scroll/ класс для работы со скроллом
   */
  constructor(e, t, l, i, a, c, r, h, u) {
    o(this, "scroll"), o(this, "binds", n(() => ({
      ref: this.element,
      ...this.scroll.binds.value
    }))), o(this, "expose", {
      toSelected: () => this.toSelected()
    }), o(this, "slotData", n(() => ({
      classItem: `${this.className}__item`,
      classItemSelected: `${this.className}__item--selected`,
      binds: {
        class: `${this.className}__item`
      }
    }))), o(this, "toSelected", () => {
      const d = this.getItemSelected();
      this.element.value && d && N(
        this.element.value,
        d
      );
    }), this.props = e, this.refs = t, this.element = l, this.classDesign = i, this.className = a, this.components = c, this.slots = r, this.emits = h;
    const {
      ScrollToXIncludeConstructor: m = k
    } = u != null ? u : {};
    this.scroll = new m(l), S(async () => {
      await g(), requestAnimationFrame(() => this.toSelected());
    });
  }
  /**
   * Returns the selected element.
   *
   * Возвращает выбранный элемент.
   */
  getItemSelected() {
    var e, t;
    return (t = (e = this.element.value) == null ? void 0 : e.querySelector(
      `.${this.slotData.value.classItemSelected}`
    )) != null ? t : void 0;
  }
}
const A = {
  tag: "div",
  // :default [!] System label / Системная метка
  flush: !0,
  align: "stretch"
};
class B extends D {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(e, t, l, i = C) {
    super(
      e,
      t,
      l
    ), o(this, "item"), this.item = new i(
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
      ...this.item.expose
    };
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {}
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
    var e, t;
    const l = [];
    return this.initSlot("default", l, this.item.slotData.value), v(
      (e = this.props.tag) != null ? e : "div",
      {
        ...this.getAttrs(),
        class: (t = this.classes) == null ? void 0 : t.value.main,
        ...this.item.binds.value
      },
      l
    );
  }
}
const P = {
  // :values [!] System label / Системная метка
  align: ["block", "center", "left", "right"]
  // :values [!] System label / Системная метка
}, X = {
  ...A,
  // :default [!] System label / Системная метка
  flush: !0,
  align: "stretch"
}, H = /* @__PURE__ */ f({
  name: "D1HorizontalScroll",
  __name: "D1HorizontalScroll",
  props: /* @__PURE__ */ x({
    flush: { type: Boolean },
    tag: {},
    align: {}
  }, X),
  setup(s, { expose: e, emit: t }) {
    const l = t, i = s, a = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-horizontalScroll": !0,
        "d1-horizontalScroll--flush": i.flush,
        [`d1-horizontalScroll--align--${i.align}`]: T(P.align, i.align)
        // :classes-values [!] System label / Системная метка
      }
    })), c = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new B(
      "d1.horizontalScroll",
      i,
      {
        emits: l,
        classes: a,
        styles: c
      }
    ), h = r.render();
    return e(r.expose()), (u, m) => (b(), y(_(h)));
  }
});
export {
  H as _
};
