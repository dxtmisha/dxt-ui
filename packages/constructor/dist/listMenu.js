var u = Object.defineProperty;
var c = (i, t, s) => t in i ? u(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var n = (i, t, s) => c(i, typeof t != "symbol" ? t + "" : t, s);
import { computed as d } from "vue";
import { DesignConstructorAbstract as w } from "@dxtmisha/functional";
import { L as f } from "./ListGroupOpen-Bl_HIQoV.js";
import { W as g } from "./WindowInclude-BWm4-0Gh.js";
class x {
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
   * @param ListGroupOpenConstructor class for working with list group open/ класс для работы с открытием группы списка
   * @param WindowIncludeConstructor class for working with window/ класс для работы с окном
   */
  constructor(t, s, e, o, r, h, a, p, l = f, m = g) {
    n(this, "open");
    n(this, "window");
    this.props = t, this.refs = s, this.element = e, this.classDesign = o, this.className = r, this.components = h, this.slots = a, this.emits = p, this.open = new l(this.props), this.window = new m(
      this.props,
      this.className,
      this.components,
      this.emits,
      d(() => ({
        adaptive: "menu",
        axis: this.props.axis,
        onWindow: this.open.onOpen,
        role: "menu",
        ariaHaspopup: "menu"
      }))
    );
  }
}
const D = {};
class M extends w {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(s, e, o, r = x) {
    super(
      s,
      e,
      o
    );
    n(this, "item");
    this.item = new r(
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
        class: (s = this.classes) == null ? void 0 : s.value.main,
        autoTabIndex: !1,
        closeOnEsc: !1
      }
    );
  }
}
export {
  x as ListMenu,
  M as ListMenuDesign,
  D as defaultsListMenu
};
