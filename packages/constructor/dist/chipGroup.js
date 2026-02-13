var p = Object.defineProperty;
var f = (i, e, t) => e in i ? p(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var n = (i, e, t) => f(i, typeof e != "symbol" ? e + "" : e, t);
import { h as v } from "vue";
import { ListDataRef as C, DesignConstructorAbstract as g, forEach as D, toBinds as L } from "@dxtmisha/functional";
import { E as k } from "./EventClickInclude-Co8CpJqL.js";
import { M as I } from "./ModelValueInclude-CJmm5go9.js";
class y {
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
  constructor(e, t, s, r, o, l, a, d, h) {
    n(this, "data");
    n(this, "event");
    n(this, "model");
    this.props = e, this.refs = t, this.element = s, this.classDesign = r, this.className = o, this.components = l, this.slots = a, this.emits = d;
    const {
      EventClickIncludeConstructor: c = k,
      ListDataRefConstructor: m = C,
      ModelValueIncludeConstructor: u = I
    } = h != null ? h : {};
    this.event = new c(void 0, void 0, this.emits), this.model = new u(
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
const A = {
  readonly: !0
};
class G extends g {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, s, r, o = y) {
    super(
      t,
      s,
      r
    );
    n(this, "item");
    /**
     * List rendering.
     *
     * Рендеринг списка.
     */
    n(this, "renderList", () => D(
      this.item.getList(),
      (t) => this.renderItem(t)
    ));
    /**
     * Element rendering.
     *
     * Рендеринг элемента.
     * @param item selected element/ выбранный элемент
     */
    n(this, "renderItem", (t) => {
      var s;
      return this.components.renderOne(
        "chip",
        L(
          {
            class: (s = this.classes) == null ? void 0 : s.value.item,
            iconHide: this.props.iconWhenSelected && !t.selected,
            onClick: this.item.model.onClick
          },
          this.props.chipAttrs,
          t
        ),
        void 0,
        t.index
      );
    });
    this.item = new o(
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
    var s;
    const t = this.renderList();
    return this.initSlot("default", t), v(
      "div",
      {
        ...this.getAttrs(),
        class: (s = this.classes) == null ? void 0 : s.value.main
      },
      t
    );
  }
}
export {
  y as ChipGroup,
  G as ChipGroupDesign,
  A as defaultsChipGroup
};
