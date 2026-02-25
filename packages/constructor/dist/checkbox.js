var D = Object.defineProperty;
var V = (n, s, e) => s in n ? D(n, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[s] = e;
var t = (n, s, e) => V(n, typeof s != "symbol" ? s + "" : s, e);
import { getBind as A, DesignConstructorAbstract as B, toBinds as H } from "@dxtmisha/functional";
import { D as R } from "./DescriptionInclude-D4ane9aR.js";
import { E as L } from "./EnabledInclude-B9oXYBtR.js";
import { L as M } from "./LabelInclude-D-mLvjK5.js";
import { F as P, a as N, b as O, c as T, d as j, e as q, f as z } from "./FieldEventInclude-h5Fg7306.js";
import { computed as G, h as r } from "vue";
import { F as J } from "./FieldMessageInclude-BJDnir34.js";
import { S as K } from "./SkeletonInclude-BIUzAO2s.js";
import { P as Q } from "./ProgressInclude-DlEbC7XP.js";
import { R as U } from "./RippleInclude-Du5yIzX_.js";
import { A as c } from "./AriaStaticInclude-DRHG8ILX.js";
class W {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param value object for working with values /<br>объект для работы со значениями
   */
  constructor(s, e) {
    /**
     * Returns data for the icon.
     *
     * Возвращает данные для иконки.
     */
    t(this, "item", G(
      () => A(this.getIcon(), "value")
    ));
    this.props = s, this.value = e;
  }
  /**
   * Returns the name of the icon.
   *
   * Возвращает название иконки.
   */
  getIcon() {
    if (this.value.boolean.value && !this.props.loading)
      return this.props.indeterminate ? this.props.iconIndeterminate : this.props.iconCheckbox;
  }
}
class X {
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
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.DescriptionConstructor class for creating a description/ класс для создания описания
   * @param constructors.EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
   * @param constructors.ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param constructors.RippleConstructor class for creating a ripple effect/ класс для создания эффекта волны
   * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   * @param constructors.FieldAttributesIncludeConstructor class for creating field attributes/ класс для создания атрибутов поля
   * @param constructors.FieldChangeIncludeConstructor class for creating field change attributes/ класс для создания атрибутов изменения поля
   * @param constructors.FieldElementIncludeConstructor class for creating field element attributes/ класс для создания атрибутов элемента поля
   * @param constructors.FieldEventIncludeConstructor class for creating field event/ класс для создания событий поля
   * @param constructors.FieldMessageConstructor class for creating field message/ класс для создания сообщения поля
   * @param constructors.FieldValidationIncludeConstructor class for creating field validation/ класс для создания валидации поля
   * @param constructors.FieldValueIncludeConstructor class for creating field value attributes/ класс для создания атрибутов значения поля
   */
  constructor(s, e, i, l, o, d, a, u, h) {
    t(this, "type", "checkbox");
    t(this, "attributes");
    t(this, "change");
    t(this, "code");
    t(this, "description");
    t(this, "elementItem");
    t(this, "enabled");
    t(this, "event");
    t(this, "icon");
    t(this, "label");
    t(this, "message");
    t(this, "progress");
    t(this, "ripple");
    t(this, "skeleton");
    t(this, "validation");
    t(this, "value");
    this.props = s, this.refs = e, this.element = i, this.classDesign = l, this.className = o, this.components = d, this.slots = a, this.emits = u;
    const {
      CheckboxIconConstructor: p = W,
      DescriptionConstructor: m = R,
      EnabledConstructor: v = L,
      FieldAttributesIncludeConstructor: g = P,
      FieldChangeIncludeConstructor: b = N,
      FieldCodeIncludeConstructor: C = O,
      FieldElementIncludeConstructor: I = T,
      FieldEventIncludeConstructor: f = j,
      FieldMessageConstructor: k = J,
      FieldValidationIncludeConstructor: F = q,
      FieldValueIncludeConstructor: w = z,
      LabelConstructor: S = M,
      ProgressConstructor: x = Q,
      RippleConstructor: y = U,
      SkeletonConstructor: E = K
    } = h != null ? h : {};
    this.skeleton = new E(this.props, this.classDesign, ["classText"]), this.progress = new x(
      this.props,
      this.className,
      this.components,
      {
        circular: !0,
        inverse: !0
      }
    ), this.change = new b(this.props), this.elementItem = new I(this.props, this.element), this.attributes = new g(this.props), this.value = new w(
      this.props,
      this.refs,
      this.elementItem
    ), this.code = new C(this.props), this.validation = new F(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    ), this.event = new f(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    ), this.message = new k(
      this.props,
      this.className,
      this.components,
      this.validation.message
    ), this.icon = new p(this.props, this.value), this.label = new S(
      s,
      o,
      void 0,
      a,
      void 0,
      void 0,
      void 0,
      this.skeleton
    ), this.description = new m(
      s,
      o,
      a,
      this.skeleton
    ), this.enabled = new v(s, this.progress), this.ripple = new y(o, d, this.enabled);
  }
}
const ae = {
  valueVariantHide: "0",
  // :default [!] System label / Системная метка
  block: !0,
  itemCenter: !0
};
class he extends B {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(e, i, l, o = X) {
    super(
      e,
      i,
      l
    );
    t(this, "item");
    /**
     * Rendering of the main body.
     *
     * Рендеринг главного body.
     */
    t(this, "renderBody", () => {
      var i;
      const e = [
        ...this.renderChecked(),
        ...this.renderInfo()
      ];
      return r("span", {
        class: (i = this.classes) == null ? void 0 : i.value.body
      }, e);
    });
    /**
     * Rendering of the main input.
     *
     * Рендеринг главного input.
     */
    t(this, "renderInput", () => {
      var e;
      return r("input", H(
        this.item.attributes.listForCheckbox.value,
        {
          class: (e = this.classes) == null ? void 0 : e.value.input,
          type: this.item.type,
          checked: this.item.value.item.value,
          onInput: this.item.event.onChecked,
          ...c.invalid(this.item.validation.isError())
        }
      ));
    });
    /**
     * Rendering of the hidden input.
     *
     * Рендеринг скрытого input.
     */
    t(this, "renderInputHidden", () => r("input", {
      name: this.props.name,
      type: "hidden",
      value: this.props.valueVariantHide
    }));
    /**
     * Rendering of the checkbox element.
     *
     * Рендеринг элемента checkbox.
     */
    t(this, "renderChecked", () => {
      var e, i;
      return [
        r(
          "span",
          {
            class: (e = this.classes) == null ? void 0 : e.value.item,
            ...c.hidden()
          },
          [
            ...this.item.progress.render(),
            r(
              "span",
              {
                class: [
                  (i = this.classes) == null ? void 0 : i.value.icon,
                  this.item.skeleton.classesSkeleton.classBackground
                ]
              },
              [
                this.components.renderOne(
                  "image",
                  this.item.icon.item.value
                )
              ]
            ),
            ...this.item.ripple.render()
          ]
        )
      ];
    });
    /**
     * Rendering of the informational text element.
     *
     * Рендеринг элемента информационного текста.
     */
    t(this, "renderInfo", () => {
      var e;
      return this.item.label.is.value || this.item.description.is.value ? [r(
        "span",
        { class: (e = this.classes) == null ? void 0 : e.value.info },
        [
          ...this.item.label.render(),
          ...this.item.description.render(),
          ...this.item.message.render()
        ]
      )] : [];
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
    return {
      value: this.item.value.item,
      checkValidity: this.item.validation.checkValidity,
      validationMessage: this.item.validation.message
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
      input: this.getSubClass("input"),
      body: this.getSubClass("body"),
      item: this.getSubClass("item"),
      icon: this.getSubClass("icon"),
      loading: this.getSubClass("loading"),
      info: this.getSubClass("info"),
      label: this.getSubClass("label")
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
    return r(
      "label",
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (e = this.classes) == null ? void 0 : e.value.main
      },
      [
        this.renderInputHidden(),
        this.renderInput(),
        this.renderBody()
      ]
    );
  }
}
export {
  X as Checkbox,
  he as CheckboxDesign,
  ae as defaultsCheckbox
};
