var m = Object.defineProperty;
var l = (i, t, s) => t in i ? m(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var n = (i, t, s) => l(i, typeof t != "symbol" ? t + "" : t, s);
import { computed as u } from "vue";
import { DesignConstructorAbstract as c } from "@dxtmisha/functional";
import { L as d } from "./ListGroupOpen-Bl_HIQoV.js";
import { W as w } from "./WindowInclude-BWm4-0Gh.js";
class g {
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
  constructor(t, s, e, o, h, r, p, a) {
    n(this, "open");
    n(this, "window");
    this.props = t, this.refs = s, this.element = e, this.classDesign = o, this.className = h, this.components = r, this.slots = p, this.emits = a, this.open = new d(this.props), this.window = new w(
      this.props,
      this.className,
      this.components,
      this.emits,
      u(() => ({
        adaptive: "menu",
        axis: this.props.axis,
        onWindow: this.open.onOpen,
        role: "menu"
      }))
    );
  }
}
const C = {};
class D extends c {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(s, e, o) {
    super(
      s,
      e,
      o
    );
    n(this, "item");
    this.item = new g(
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
      ...this.item.window.expose
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
    return this.item.window.render(
      {
        control: (e) => this.initSlot("head", void 0, e),
        default: () => this.initSlot("list")
      },
      {
        ...this.getAttrs(),
        open: this.item.open.is.value,
        class: (s = this.classes) == null ? void 0 : s.value.main
      }
    );
  }
}
export {
  g as ListMenu,
  D as ListMenuDesign,
  C as defaultsListMenu
};
