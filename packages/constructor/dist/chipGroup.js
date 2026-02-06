var u = Object.defineProperty;
var p = (i, e, t) => e in i ? u(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var r = (i, e, t) => p(i, typeof e != "symbol" ? e + "" : e, t);
import { h as f } from "vue";
import { ListDataRef as v, DesignConstructorAbstract as g, forEach as C, toBinds as D } from "@dxtmisha/functional";
import { E as L } from "./EventClickInclude-CgbuezDm.js";
import { M as k } from "./ModelValueInclude-CJmm5go9.js";
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
   * @param EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param ModelValueIncludeConstructor class for working with model value/ класс для работы со значением модели
   * @param ListDataRefConstructor class for working with list data/ класс для работы с данными списка
   */
  constructor(e, t, s, n, o, h, l, a, d = L, c = k, m = v) {
    r(this, "data");
    r(this, "event");
    r(this, "model");
    this.props = e, this.refs = t, this.element = s, this.classDesign = n, this.className = o, this.components = h, this.slots = l, this.emits = a, this.event = new d(void 0, void 0, this.emits), this.model = new c(
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
const b = {
  readonly: !0
};
class A extends g {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, s, n, o = y) {
    super(
      t,
      s,
      n
    );
    r(this, "item");
    /**
     * List rendering.
     *
     * Рендеринг списка.
     */
    r(this, "renderList", () => C(
      this.item.getList(),
      (t) => this.renderItem(t)
    ));
    /**
     * Element rendering.
     *
     * Рендеринг элемента.
     * @param item selected element/ выбранный элемент
     */
    r(this, "renderItem", (t) => {
      var s;
      return this.components.renderOne(
        "chip",
        D(
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
    return this.initSlot("default", t), f(
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
  A as ChipGroupDesign,
  b as defaultsChipGroup
};
