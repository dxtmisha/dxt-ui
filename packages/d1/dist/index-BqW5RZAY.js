import { h as d, computed as h, defineComponent as C, openBlock as v, createBlock as D, unref as y, mergeDefaults as k } from "vue";
import { DesignConstructorAbstract as w } from "@dxtmisha/functional";
import { x } from "./LabelInclude-D-mLvjK5-Bnui6CyX.js";
import { $ as q } from "./SkeletonInclude-BIUzAO2s-5OIs3oxk.js";
import { C as B } from "./FieldCounterInclude-D0oojGWY-Ni31uLiZ.js";
import { b as L } from "./ProgressInclude-DlEbC7XP-Cahi9k1c.js";
import { l as S } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { D as _ } from "./index-uGNHNXjI.js";
import { D as F } from "./index-B4sAKw5g.js";
var N = Object.defineProperty, T = (t, e, s) => e in t ? N(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, r = (t, e, s) => T(t, typeof e != "symbol" ? e + "" : e, s);
class A {
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
  constructor(e, s, o, n, i, a, l, c, u) {
    r(this, "label"), r(this, "fieldCounter"), r(this, "progress"), r(this, "skeleton"), r(this, "classes", h(() => ({
      ...this.skeleton.classes.value
    }))), this.props = e, this.refs = s, this.element = o, this.classDesign = n, this.className = i, this.components = a, this.slots = l, this.emits = c;
    const {
      FieldCounterConstructor: p = B,
      LabelConstructor: f = x,
      ProgressConstructor: b = L,
      SkeletonConstructor: g = q
    } = u != null ? u : {}, m = new g(this.props, this.classDesign, ["classTextVariant"]);
    this.label = new f(
      this.props,
      this.className,
      void 0,
      this.slots,
      void 0,
      void 0,
      !0,
      m
    ), this.fieldCounter = new p(
      this.props,
      this.className,
      this.components
    ), this.progress = new b(
      this.props,
      this.className,
      this.components,
      {
        circular: !0,
        position: "static",
        dense: !0
      }
    ), this.skeleton = m;
  }
}
const P = {};
class R extends w {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor field label item class/ класс элемента метки поля
   */
  constructor(e, s, o, n = A) {
    super(
      e,
      s,
      o
    ), r(this, "item"), r(this, "renderRequired", () => {
      var i;
      return this.props.required ? [
        d(
          "span",
          {
            class: (i = this.classes) == null ? void 0 : i.value.required,
            ...S.hidden()
          },
          "*"
        )
      ] : [];
    }), this.item = new n(
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
    var e;
    const s = [
      ...this.item.label.render(this.renderRequired()),
      ...this.item.progress.render(),
      ...this.item.fieldCounter.render()
    ];
    if (this.item.label.is.value || this.item.progress.is.value || this.item.fieldCounter.isCounter.value)
      return d(
        "label",
        {
          ...this.getAttrs(),
          class: (e = this.classes) == null ? void 0 : e.value.main,
          for: this.props.for
        },
        s
      );
  }
}
const $ = {
  ...P
}, j = /* @__PURE__ */ C({
  name: "D1FieldLabel",
  __name: "D1FieldLabel",
  props: /* @__PURE__ */ k({
    label: {},
    labelId: {},
    counter: {},
    counterShow: { type: Boolean },
    counterTemplate: {},
    counterId: {},
    maxlength: {},
    fieldCounterAttrs: {},
    loading: { type: [Boolean, Object] },
    isSkeleton: { type: Boolean },
    for: {},
    required: { type: Boolean }
  }, $),
  setup(t, { expose: e, emit: s }) {
    const o = s, n = t, i = h(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-fieldLabel": !0
        // :classes-values [!] System label / Системная метка
      }
    })), a = h(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), l = new R(
      "d1.fieldLabel",
      n,
      {
        emits: o,
        classes: i,
        styles: a,
        components: {
          fieldCounter: _,
          progress: F
        }
      }
    ), c = l.render();
    return e(l.expose()), (u, p) => (v(), D(y(c)));
  }
}), M = j;
export {
  M as D
};
