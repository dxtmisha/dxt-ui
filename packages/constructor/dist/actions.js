var u = Object.defineProperty;
var m = (e, t, s) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var i = (e, t, s) => m(e, typeof t != "symbol" ? t + "" : t, s);
import { computed as c, h } from "vue";
import { DesignConstructorAbstract as v, toBinds as d } from "@dxtmisha/functional";
import { E as S } from "./EventClickInclude-eDWqxK0d.js";
import { A as L } from "./ActionsInclude-H5ZWeXJj.js";
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
  constructor(t, s, r, n, o, a, p, l) {
    i(this, "event");
    /**
     * Checks if the main list needs to be displayed/
     * Проверяет, нужно ли выводить главный список
     */
    i(this, "isList", c(() => !!(this.props.list || this.slots && "default" in this.slots)));
    /**
     * Checks if the secondary list needs to be displayed/
     * Проверяет, нужно ли выводить второстепенный список
     */
    i(this, "isSecondary", c(() => !!(this.props.listSecondary || this.slots && "secondary" in this.slots)));
    this.props = t, this.refs = s, this.element = r, this.classDesign = n, this.className = o, this.components = a, this.slots = p, this.emits = l, this.event = new S(
      void 0,
      void 0,
      l
    );
  }
}
const C = {
  // :default [!] System label / Системная метка
  align: "right"
};
class E extends v {
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
     * List rendering.
     *
     * Рендеринг списка.
     */
    i(this, "renderList", () => {
      const s = [];
      return this.item.isList.value && (this.props.list && this.props.list.forEach((r, n) => {
        var o, a;
        this.components.renderAdd(
          s,
          "button",
          d(
            {
              onClick: this.item.event.onClick
            },
            this.props.buttonAttrs,
            r,
            {
              class: [
                (o = this.classes) == null ? void 0 : o.value.item,
                (a = this.classes) == null ? void 0 : a.value.list
              ]
            }
          ),
          void 0,
          `list-${n}`
        );
      }), this.initSlot("default", s)), s;
    });
    /**
     * Secondary list rendering.
     *
     * Рендеринг вторичного списка.
     */
    i(this, "renderSecondary", () => {
      const s = [];
      return this.item.isSecondary.value && (this.props.listSecondary && this.props.listSecondary.forEach((r, n) => {
        var o, a;
        this.components.renderAdd(
          s,
          "button",
          d(
            this.props.buttonSecondaryAttrs,
            r,
            {
              class: [
                (o = this.classes) == null ? void 0 : o.value.item,
                (a = this.classes) == null ? void 0 : a.value.secondary
              ]
            }
          ),
          void 0,
          `secondary-${n}`
        );
      }), this.initSlot("secondary", s)), s;
    });
    /**
     * Separator rendering.
     *
     * Рендеринг разделителя.
     */
    i(this, "renderSpacer", () => {
      var s;
      return [h("div", { class: (s = this.classes) == null ? void 0 : s.value.spacer })];
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
  f as Actions,
  E as ActionsDesign,
  L as ActionsInclude,
  C as defaultsActions
};
