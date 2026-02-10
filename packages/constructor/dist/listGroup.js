var u = Object.defineProperty;
var c = (e, t, s) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var i = (e, t, s) => c(e, typeof t != "symbol" ? t + "" : t, s);
import { h } from "vue";
import { DesignConstructorAbstract as v } from "@dxtmisha/functional";
import { L as f } from "./ListGroupOpen-Bl_HIQoV.js";
import { A as g } from "./AriaStaticInclude-CAURwJMb.js";
class L {
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
   * @param constructors.ListGroupOpenConstructor class for working with list group open/ класс для работы с открытием группы списка
   */
  constructor(t, s, r, n, o, p, l, d, a) {
    i(this, "open");
    /**
     * Returns the property for the transformation component.
     *
     * Возвращает свойство для компонента трансформации.
     */
    i(this, "transformBinds", () => ({
      autoClose: !1,
      section: !0,
      adaptive: "planeAlways",
      onTransformLite: this.open.onOpen
    }));
    this.props = t, this.refs = s, this.element = r, this.classDesign = n, this.className = o, this.components = p, this.slots = l, this.emits = d;
    const {
      ListGroupOpenConstructor: m = f
    } = a != null ? a : {};
    this.open = new m(this.props);
  }
}
const D = {};
class T extends v {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(s, r, n, o = L) {
    super(
      s,
      r,
      n
    );
    i(this, "item");
    /**
     * Render transformation element.
     *
     * Рендер элемента трансформации.
     */
    i(this, "renderTransform", () => this.components.render(
      "motionTransform",
      {
        ...this.item.transformBinds(),
        open: this.item.open.is.value
      },
      {
        head: this.renderHead,
        body: this.renderList
      }
    ));
    /**
     * Render title element.
     *
     * Рендер элемента заголовка.
     * @param item motion transform item/ элемент движения трансформации
     */
    i(this, "renderHead", (s) => {
      var r;
      return h(
        "div",
        {
          class: (r = this.classes) == null ? void 0 : r.value.head
        },
        this.initSlot(
          "head",
          void 0,
          {
            open: this.item.open.is.value,
            ...s.binds
          }
        )
      );
    });
    /**
     * Render list element.
     *
     * Рендер элемента списка.
     */
    i(this, "renderList", () => {
      var s;
      return h(
        "div",
        {
          class: (s = this.classes) == null ? void 0 : s.value.list
        },
        this.initSlot("list")
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
    return {
      open: this.item.open.is
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
      head: this.getSubClass("head"),
      list: this.getSubClass("list")
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
    return h(
      "div",
      {
        ...this.getAttrs(),
        class: (s = this.classes) == null ? void 0 : s.value.main,
        "data-open": this.item.open.is.value ? "open" : "close",
        "data-divider": this.props.divider ? "divider" : void 0,
        ...g.role("group")
      },
      this.renderTransform()
    );
  }
}
export {
  L as ListGroup,
  T as ListGroupDesign,
  D as defaultsListGroup
};
