var d = Object.defineProperty;
var m = (e, t, s) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var i = (e, t, s) => m(e, typeof t != "symbol" ? t + "" : t, s);
import { h as o } from "vue";
import { DesignConstructorAbstract as u } from "@dxtmisha/functional";
import { L as c } from "./ListGroupOpen-Bl_HIQoV.js";
import { A as v } from "./AriaStaticInclude-BVCgDZbU.js";
class f {
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
  constructor(t, s, r, n, a, h, p, l) {
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
    this.props = t, this.refs = s, this.element = r, this.classDesign = n, this.className = a, this.components = h, this.slots = p, this.emits = l, this.open = new c(this.props);
  }
}
const C = {};
class D extends u {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(s, r, n) {
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
      return o(
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
      return o(
        "div",
        {
          class: (s = this.classes) == null ? void 0 : s.value.list
        },
        this.initSlot("list")
      );
    });
    this.item = new f(
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
    return o(
      "div",
      {
        ...this.getAttrs(),
        class: (s = this.classes) == null ? void 0 : s.value.main,
        "data-open": this.item.open.is.value ? "open" : "close",
        "data-divider": this.props.divider ? "divider" : void 0,
        ...v.role("group")
      },
      this.renderTransform()
    );
  }
}
export {
  f as ListGroup,
  D as ListGroupDesign,
  C as defaultsListGroup
};
