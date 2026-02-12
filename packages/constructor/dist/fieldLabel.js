var g = Object.defineProperty;
var C = (i, s, e) => s in i ? g(i, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[s] = e;
var t = (i, s, e) => C(i, typeof s != "symbol" ? s + "" : s, e);
import { computed as v, h } from "vue";
import { DesignConstructorAbstract as F } from "@dxtmisha/functional";
import { L } from "./LabelInclude-D-mLvjK5.js";
import { F as S } from "./FieldCounterInclude-D0oojGWY.js";
import { S as k } from "./SkeletonInclude-BIUzAO2s.js";
import { P as q } from "./ProgressInclude-hQsbbhvF.js";
import { A as I } from "./AriaStaticInclude-ZrgMZ2ja.js";
import { F as B } from "./FieldLabelInclude-Bkxf6rRw.js";
class w {
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
   * @param constructors.FieldCounterConstructor class for working with field counter/ класс для работы со счетчиком поля
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   */
  constructor(s, e, r, l, o, u, m, d, n) {
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
    t(this, "classes", v(() => ({
      ...this.skeleton.classes.value
    })));
    this.props = s, this.refs = e, this.element = r, this.classDesign = l, this.className = o, this.components = u, this.slots = m, this.emits = d;
    const {
      FieldCounterConstructor: c = S,
      LabelConstructor: p = L,
      ProgressConstructor: f = q,
      SkeletonConstructor: b = k
    } = n != null ? n : {}, a = new b(this.props, this.classDesign, ["classTextVariant"]);
    this.label = new p(
      this.props,
      this.className,
      void 0,
      this.slots,
      void 0,
      void 0,
      !0,
      a
    ), this.fieldCounter = new c(
      this.props,
      this.className,
      this.components
    ), this.progress = new f(
      this.props,
      this.className,
      this.components,
      {
        circular: !0,
        position: "static",
        dense: !0
      }
    ), this.skeleton = a;
  }
}
const T = {};
class V extends F {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor field label item class/ класс элемента метки поля
   */
  constructor(e, r, l, o = w) {
    super(
      e,
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
      var e;
      return this.props.required ? [
        h(
          "span",
          {
            class: (e = this.classes) == null ? void 0 : e.value.required,
            ...I.hidden()
          },
          "*"
        )
      ] : [];
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
    return {};
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
    const e = [
      ...this.item.label.render(this.renderRequired()),
      ...this.item.progress.render(),
      ...this.item.fieldCounter.render()
    ];
    if (this.item.label.is.value || this.item.progress.is.value || this.item.fieldCounter.isCounter.value)
      return h(
        "label",
        {
          ...this.getAttrs(),
          class: (r = this.classes) == null ? void 0 : r.value.main,
          for: this.props.for
        },
        e
      );
  }
}
export {
  w as FieldLabel,
  V as FieldLabelDesign,
  B as FieldLabelInclude,
  T as defaultsFieldLabel
};
