var m = Object.defineProperty;
var v = (r, t, s) => t in r ? m(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s;
var e = (r, t, s) => v(r, typeof t != "symbol" ? t + "" : t, s);
import { computed as c, h } from "vue";
import { DesignConstructorAbstract as S, toBinds as d } from "@dxtmisha/functional";
import { E as f } from "./EventClickInclude-CgbuezDm.js";
import { A as k } from "./ActionsInclude-H5ZWeXJj.js";
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
   * @param EventConstructor class for creating an event/ класс для создания события
   */
  constructor(t, s, n, o, i, a, p, l, u = f) {
    e(this, "event");
    /**
     * Checks if the main list needs to be displayed/
     * Проверяет, нужно ли выводить главный список
     */
    e(this, "isList", c(() => !!(this.props.list || this.slots && "default" in this.slots)));
    /**
     * Checks if the secondary list needs to be displayed/
     * Проверяет, нужно ли выводить второстепенный список
     */
    e(this, "isSecondary", c(() => !!(this.props.listSecondary || this.slots && "secondary" in this.slots)));
    this.props = t, this.refs = s, this.element = n, this.classDesign = o, this.className = i, this.components = a, this.slots = p, this.emits = l, this.event = new u(
      void 0,
      void 0,
      l
    );
  }
}
const E = {
  // :default [!] System label / Системная метка
  align: "right"
};
class x extends S {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor actions item class/ класс элемента действий
   */
  constructor(s, n, o, i = y) {
    super(
      s,
      n,
      o
    );
    e(this, "item");
    /**
     * List rendering.
     *
     * Рендеринг списка.
     */
    e(this, "renderList", () => {
      const s = [];
      return this.item.isList.value && (this.props.list && this.props.list.forEach((n, o) => {
        var i, a;
        this.components.renderAdd(
          s,
          "button",
          d(
            {
              onClick: this.item.event.onClick
            },
            this.props.buttonAttrs,
            n,
            {
              class: [
                (i = this.classes) == null ? void 0 : i.value.item,
                (a = this.classes) == null ? void 0 : a.value.list
              ]
            }
          ),
          void 0,
          `list-${o}`
        );
      }), this.initSlot("default", s)), s;
    });
    /**
     * Secondary list rendering.
     *
     * Рендеринг вторичного списка.
     */
    e(this, "renderSecondary", () => {
      const s = [];
      return this.item.isSecondary.value && (this.props.listSecondary && this.props.listSecondary.forEach((n, o) => {
        var i, a;
        this.components.renderAdd(
          s,
          "button",
          d(
            this.props.buttonSecondaryAttrs,
            n,
            {
              class: [
                (i = this.classes) == null ? void 0 : i.value.item,
                (a = this.classes) == null ? void 0 : a.value.secondary
              ]
            }
          ),
          void 0,
          `secondary-${o}`
        );
      }), this.initSlot("secondary", s)), s;
    });
    /**
     * Separator rendering.
     *
     * Рендеринг разделителя.
     */
    e(this, "renderSpacer", () => {
      var s;
      return [h("div", { class: (s = this.classes) == null ? void 0 : s.value.spacer })];
    });
    this.item = new i(
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
      item: this.getSubClass("item"),
      list: this.getSubClass("list"),
      secondary: this.getSubClass("secondary"),
      spacer: this.getSubClass("spacer")
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
        class: (s = this.classes) == null ? void 0 : s.value.main
      },
      [
        ...this.renderList(),
        ...this.renderSpacer(),
        ...this.renderSecondary()
      ]
    );
  }
}
export {
  y as Actions,
  x as ActionsDesign,
  k as ActionsInclude,
  E as defaultsActions
};
