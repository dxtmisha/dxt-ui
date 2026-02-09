var b = Object.defineProperty;
var g = (i, e, s) => e in i ? b(i, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[e] = s;
var t = (i, e, s) => g(i, typeof e != "symbol" ? e + "" : e, s);
import { computed as v, h as a } from "vue";
import { DesignConstructorAbstract as C } from "@dxtmisha/functional";
import { L as F } from "./LabelInclude-D-mLvjK5.js";
import { F as q } from "./FieldCounterInclude-D0oojGWY.js";
import { P as I } from "./ProgressInclude-NyOp5bMZ.js";
import { S as L } from "./SkeletonInclude-BIUzAO2s.js";
import { A as S } from "./AriaStaticInclude-BVCgDZbU.js";
import { F as z } from "./FieldLabelInclude-Bkxf6rRw.js";
class k {
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
   * @param LabelConstructor class for creating a label/ класс для создания метки
   * @param FieldCounterConstructor class for working with field counter/ класс для работы со счетчиком поля
   * @param ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   */
  constructor(e, s, r, l, n, h, u, c, m = F, d = q, p = I, f = L) {
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
    this.props = e, this.refs = s, this.element = r, this.classDesign = l, this.className = n, this.components = h, this.slots = u, this.emits = c;
    const o = new f(this.props, this.classDesign, ["classTextVariant"]);
    this.label = new m(
      this.props,
      this.className,
      void 0,
      this.slots,
      void 0,
      void 0,
      !0,
      o
    ), this.fieldCounter = new d(
      this.props,
      this.className,
      this.components
    ), this.progress = new p(
      this.props,
      this.className,
      this.components,
      {
        circular: !0,
        position: "static",
        dense: !0
      }
    ), this.skeleton = o;
  }
}
const E = {};
class T extends C {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor field label item class/ класс элемента метки поля
   */
  constructor(s, r, l, n = k) {
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
        a(
          "span",
          {
            class: (s = this.classes) == null ? void 0 : s.value.required,
            ...S.hidden()
          },
          "*"
        )
      ] : [];
    });
    this.item = new n(
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
    const s = [
      ...this.item.label.render(this.renderRequired()),
      ...this.item.progress.render(),
      ...this.item.fieldCounter.render()
    ];
    if (this.item.label.is.value || this.item.progress.is.value || this.item.fieldCounter.isCounter.value)
      return a(
        "label",
        {
          ...this.getAttrs(),
          class: (r = this.classes) == null ? void 0 : r.value.main,
          for: this.props.for
        },
        s
      );
  }
}
export {
  k as FieldLabel,
  T as FieldLabelDesign,
  z as FieldLabelInclude,
  E as defaultsFieldLabel
};
