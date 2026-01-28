var d = Object.defineProperty;
var c = (i, e, t) => e in i ? d(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var r = (i, e, t) => c(i, typeof e != "symbol" ? e + "" : e, t);
import { h as m } from "vue";
import { ListDataRef as u, DesignConstructorAbstract as p, forEach as f, toBinds as v } from "@dxtmisha/functional";
import { E as g } from "./EventClickInclude-CtY-88za.js";
import { M as C } from "./ModelValueInclude-CJmm5go9.js";
class D {
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
   */
  constructor(e, t, s, n, o, h, l, a) {
    r(this, "data");
    r(this, "event");
    r(this, "model");
    this.props = e, this.refs = t, this.element = s, this.classDesign = n, this.className = o, this.components = h, this.slots = l, this.emits = a, this.event = new g(void 0, void 0, this.emits), this.model = new C(
      "selected",
      this.emits,
      this.event,
      this.refs.selected,
      this.refs.readonly
    ), this.data = new u(
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
const E = {
  readonly: !0
};
class I extends p {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, s, n) {
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
    r(this, "renderList", () => f(
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
        v(
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
    this.item = new D(
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
    return this.initSlot("default", t), m(
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
  D as ChipGroup,
  I as ChipGroupDesign,
  E as defaultsChipGroup
};
