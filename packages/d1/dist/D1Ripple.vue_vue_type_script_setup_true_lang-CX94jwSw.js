import { h as d, defineComponent as u, computed as p, openBlock as y, createBlock as f, unref as v, mergeDefaults as x } from "vue";
import { DesignConstructorAbstract as b, createElement as _ } from "@dxtmisha/functional";
import { l as C } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
var $ = Object.defineProperty, g = (n, s, t) => s in n ? $(n, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[s] = t, l = (n, s, t) => g(n, typeof s != "symbol" ? s + "" : s, t);
class k {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element image element for scaling/ элемент изображения для масштабирования
   * @param className list of available classes/ список доступных классов
   */
  constructor(s, t, i) {
    l(this, "classItem"), l(this, "classEnd"), l(this, "styleX"), l(this, "styleY"), this.props = s, this.element = t, this.className = i, this.classItem = `${this.className}__item`, this.classEnd = `${this.className}--end`, this.styleX = `--${this.className}-sys-x`, this.styleY = `--${this.className}-sys-y`;
  }
  /**
   * Adding a new light element.
   *
   * Добавление нового элемента свечения.
   * @param x x-coordinate/ x-координата
   * @param y y-coordinate/ y-координата
   */
  add(s, t) {
    var i;
    if ((i = this.props) != null && i.disabled)
      return;
    const r = this.element.value;
    r && _(r, "span", (e) => {
      e.onanimationend = () => e.classList.add(this.classEnd), e.ontransitionend = () => {
        var o;
        return (o = e.parentElement) == null ? void 0 : o.removeChild(e);
      }, e.style.setProperty(this.styleX, `${s}px`), e.style.setProperty(this.styleY, `${t}px`), e.classList.add(this.classItem);
    });
  }
}
class N {
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
  constructor(s, t, i, r, e, o, a, c) {
    l(this, "item"), l(this, "onClick", (m) => this.item.add(m.offsetX, m.offsetY)), this.props = s, this.refs = t, this.element = i, this.className = r, this.components = e, this.slots = o, this.emits = a;
    const {
      RippleItemConstructor: h = k
    } = c != null ? c : {};
    this.item = new h(s, i, r);
  }
}
const E = {};
class w extends b {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor ripple item class/ класс элемента ripple
   */
  constructor(s, t, i, r = N) {
    super(
      s,
      t,
      i
    ), l(this, "item"), this.item = new r(
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
    var s;
    return d("span", {
      ref: this.element,
      key: "ripple",
      class: (s = this.classes) == null ? void 0 : s.value.main,
      onPointerdown: this.item.onClick,
      ...C.hidden()
    });
  }
}
const R = {
  ...E
}, X = /* @__PURE__ */ u({
  name: "D1Ripple",
  __name: "D1Ripple",
  props: /* @__PURE__ */ x({
    disabled: { type: Boolean }
  }, R),
  setup(n, { expose: s, emit: t }) {
    const i = t, r = n, e = p(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), o = p(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new w(
      "d1.ripple",
      r,
      {
        emits: i,
        classes: e,
        styles: o
      }
    ), c = a.render();
    return s(a.expose()), (h, m) => (y(), f(v(c)));
  }
});
export {
  X as _
};
