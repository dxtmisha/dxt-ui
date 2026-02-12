var m = Object.defineProperty;
var c = (n, s, t) => s in n ? m(n, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[s] = t;
var l = (n, s, t) => c(n, typeof s != "symbol" ? s + "" : s, t);
import { createElement as d, DesignConstructorAbstract as y } from "@dxtmisha/functional";
import { h as f } from "vue";
import { A as u } from "./AriaStaticInclude-ZrgMZ2ja.js";
import { R as b } from "./RippleInclude-Du5yIzX_.js";
class R {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element image element for scaling/ элемент изображения для масштабирования
   * @param className list of available classes/ список доступных классов
   */
  constructor(s, t, i) {
    l(this, "classItem");
    l(this, "classEnd");
    l(this, "styleX");
    l(this, "styleY");
    this.props = s, this.element = t, this.className = i, this.classItem = `${this.className}__item`, this.classEnd = `${this.className}--end`, this.styleX = `--${this.className}-sys-x`, this.styleY = `--${this.className}-sys-y`;
  }
  /**
   * Adding a new light element.
   *
   * Добавление нового элемента свечения.
   * @param x x-coordinate/ x-координата
   * @param y y-coordinate/ y-координата
   */
  add(s, t) {
    var a;
    if ((a = this.props) != null && a.disabled)
      return;
    const i = this.element.value;
    i && d(i, "span", (e) => {
      e.onanimationend = () => e.classList.add(this.classEnd), e.ontransitionend = () => {
        var h;
        return (h = e.parentElement) == null ? void 0 : h.removeChild(e);
      }, e.style.setProperty(this.styleX, `${s}px`), e.style.setProperty(this.styleY, `${t}px`), e.classList.add(this.classItem);
    });
  }
}
class x {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.RippleItemConstructor class for working with ripple item/ класс для работы с элементом волны
   */
  constructor(s, t, i, a, e, h, o, r) {
    l(this, "item");
    /**
     * The click event adds a wave effect element.
     *
     * Событие клика добавляет элемент эффекта волна.
     * @param event click event/ событие клика
     */
    l(this, "onClick", (s) => this.item.add(s.offsetX, s.offsetY));
    this.props = s, this.refs = t, this.element = i, this.className = a, this.components = e, this.slots = h, this.emits = o;
    const {
      RippleItemConstructor: p = R
    } = r != null ? r : {};
    this.item = new p(s, i, a);
  }
}
const $ = {};
class g extends y {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor ripple item class/ класс элемента ripple
   */
  constructor(t, i, a, e = x) {
    super(
      t,
      i,
      a
    );
    l(this, "item");
    this.item = new e(
      this.props,
      this.refs,
      this.element,
      this.getName(),
      this.components,
      this.slots,
      this.emits
    ), this.init();
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {};
  }
  /**
   * Improvement of the obtained list of classes.<br>
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
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.
   * Метод для рендеринга.
   */
  initRender() {
    var t;
    return f("span", {
      ref: this.element,
      key: "ripple",
      class: (t = this.classes) == null ? void 0 : t.value.main,
      onPointerdown: this.item.onClick,
      ...u.hidden()
    });
  }
}
export {
  x as Ripple,
  g as RippleDesign,
  b as RippleInclude,
  $ as defaultsRipple
};
