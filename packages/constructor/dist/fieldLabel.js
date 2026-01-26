var m = Object.defineProperty;
var d = (i, e, s) => e in i ? m(i, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[e] = s;
var t = (i, e, s) => d(i, typeof e != "symbol" ? e + "" : e, s);
import { computed as p, h as o } from "vue";
import { DesignConstructorAbstract as f } from "@dxtmisha/functional";
import { L as b } from "./LabelInclude-BtZrrbCf.js";
import { F as g } from "./FieldCounterInclude-D0oojGWY.js";
import { S as v } from "./SkeletonInclude-BIUzAO2s.js";
import { P as C } from "./ProgressInclude-UBipdctr.js";
import { A as F } from "./AriaStaticInclude-CFGewqpn.js";
import { F as E } from "./FieldLabelInclude-BSISy_cb.js";
class q {
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
  constructor(e, s, r, l, a, h, u, c) {
    /** Label include/ Подключение метки */
    t(this, "label");
    /** Field counter include/ Подключение счетчика поля */
    t(this, "fieldCounter");
    /** Progress include/ Подключение прогресса */
    t(this, "progress");
    /** Skeleton include/ Подключение скелетона */
    t(this, "skeleton");
    /**
     * Values for the class.
     *
     * Значения для класса.
     * Возвращает объект классов, включающий классы скелетона, если он активен.
     */
    t(this, "classes", p(() => ({
      ...this.skeleton.classes.value
    })));
    this.props = e, this.refs = s, this.element = r, this.classDesign = l, this.className = a, this.components = h, this.slots = u, this.emits = c;
    const n = new v(this.props, this.classDesign, ["classTextVariant"]);
    this.label = new b(
      this.props,
      this.className,
      void 0,
      this.slots,
      void 0,
      void 0,
      !0,
      n
    ), this.fieldCounter = new g(
      this.props,
      this.className,
      this.components
    ), this.progress = new C(
      this.props,
      this.className,
      this.components,
      {
        circular: !0,
        position: "static",
        dense: !0
      }
    ), this.skeleton = n;
  }
}
const A = {};
class R extends f {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(s, r, l) {
    super(
      s,
      r,
      l
    );
    t(this, "item");
    /**
     * Display of the asterisk, an indication of required fields.
     *
     * Вывод звездочки, признак обязательного заполнения.
     */
    t(this, "renderRequired", () => {
      var s;
      return this.props.required ? [
        o(
          "span",
          {
            class: (s = this.classes) == null ? void 0 : s.value.required,
            ...F.hidden()
          },
          "*"
        )
      ] : [];
    });
    this.item = new q(
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
      ...this.item.label.expose
    };
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: this.item.classes.value,
      // :classes [!] System label / Системная метка
      label: this.getSubClass("label"),
      required: this.getSubClass("required")
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
    var r;
    const s = [
      ...this.item.label.render(this.renderRequired()),
      ...this.item.progress.render(),
      ...this.item.fieldCounter.render()
    ];
    if (this.item.label.is.value || this.item.progress.is.value || this.item.fieldCounter.isCounter.value)
      return o(
        "div",
        {
          ...this.getAttrs(),
          class: (r = this.classes) == null ? void 0 : r.value.main
        },
        s
      );
  }
}
export {
  q as FieldLabel,
  R as FieldLabelDesign,
  E as FieldLabelInclude,
  A as defaultsFieldLabel
};
