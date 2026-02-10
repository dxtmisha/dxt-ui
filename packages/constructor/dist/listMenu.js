var d = Object.defineProperty;
var c = (i, t, s) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var n = (i, t, s) => c(i, typeof t != "symbol" ? t + "" : t, s);
import { computed as w } from "vue";
import { DesignConstructorAbstract as f } from "@dxtmisha/functional";
import { L as g } from "./ListGroupOpen-Bl_HIQoV.js";
import { W as x } from "./WindowInclude-BWm4-0Gh.js";
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
   * @param constructors.ListGroupOpenConstructor class for working with list group open/ класс для работы с открытием группы списка
   * @param constructors.WindowIncludeConstructor class for working with window/ класс для работы с окном
   */
  constructor(t, s, e, o, h, a, p, l, r) {
    n(this, "open");
    n(this, "window");
    this.props = t, this.refs = s, this.element = e, this.classDesign = o, this.className = h, this.components = a, this.slots = p, this.emits = l;
    const {
      ListGroupOpenConstructor: m = g,
      WindowIncludeConstructor: u = x
    } = r != null ? r : {};
    this.open = new m(this.props), this.window = new u(
      this.props,
      this.className,
      this.components,
      this.emits,
      w(() => ({
        adaptive: "menu",
        axis: this.props.axis,
        onWindow: this.open.onOpen,
        role: "menu",
        ariaHaspopup: "menu"
      }))
    );
  }
}
const O = {};
class W extends f {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(s, e, o, h = C) {
    super(
      s,
      e,
      o
    );
    n(this, "item");
    this.item = new h(
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
  C as ListMenu,
  W as ListMenuDesign,
  O as defaultsListMenu
};
