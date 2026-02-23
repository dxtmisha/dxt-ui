var D = Object.defineProperty;
var E = (n, s, e) => s in n ? D(n, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[s] = e;
var t = (n, s, e) => E(n, typeof s != "symbol" ? s + "" : s, e);
import { getBind as V, DesignConstructorAbstract as B, toBinds as A } from "@dxtmisha/functional";
import { D as H } from "./DescriptionInclude-D4ane9aR.js";
import { E as R } from "./EnabledInclude-DIc_ZLNR.js";
import { L } from "./LabelInclude-D-mLvjK5.js";
import { F as M, a as P, b as N, c as O, d as T, e as j, f as q } from "./FieldEventInclude-Ccqwkr8z.js";
import { computed as z, h as r } from "vue";
import { F as G } from "./FieldMessageInclude-BJDnir34.js";
import { S as J } from "./SkeletonInclude-BIUzAO2s.js";
import { P as K } from "./ProgressInclude-CezBrQhM.js";
import { R as Q } from "./RippleInclude-Du5yIzX_.js";
class U {
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
    t(this, "item", z(
      () => V(this.getIcon(), "value")
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
class W {
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
  constructor(s, e, i, l, o, d, a, c, h) {
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
    this.props = s, this.refs = e, this.element = i, this.classDesign = l, this.className = o, this.components = d, this.slots = a, this.emits = c;
    const {
      CheckboxIconConstructor: u = U,
      DescriptionConstructor: p = H,
      EnabledConstructor: m = R,
      FieldAttributesIncludeConstructor: v = M,
      FieldChangeIncludeConstructor: g = P,
      FieldCodeIncludeConstructor: b = N,
      FieldElementIncludeConstructor: C = O,
      FieldEventIncludeConstructor: I = T,
      FieldMessageConstructor: f = G,
      FieldValidationIncludeConstructor: k = j,
      FieldValueIncludeConstructor: F = q,
      LabelConstructor: w = L,
      ProgressConstructor: x = K,
      RippleConstructor: y = Q,
      SkeletonConstructor: S = J
    } = h != null ? h : {};
    this.skeleton = new S(this.props, this.classDesign, ["classText"]), this.progress = new x(
      this.props,
      this.className,
      this.components,
      {
        circular: !0,
        inverse: !0
      }
    ), this.change = new g(this.props), this.elementItem = new C(this.props, this.element), this.attributes = new v(this.props), this.value = new F(
      this.props,
      this.refs,
      this.elementItem
    ), this.code = new b(this.props), this.validation = new k(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    ), this.event = new I(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    ), this.message = new f(
      this.props,
      this.className,
      this.components,
      this.validation.message
    ), this.icon = new u(this.props, this.value), this.label = new w(
      s,
      o,
      void 0,
      a,
      void 0,
      void 0,
      void 0,
      this.skeleton
    ), this.description = new p(
      s,
      o,
      a,
      this.skeleton
    ), this.enabled = new m(s, this.progress), this.ripple = new y(o, d, this.enabled);
  }
}
const oe = {
  valueVariantHide: "0",
  // :default [!] System label / Системная метка
  block: !0,
  itemCenter: !0
};
class le extends B {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(e, i, l, o = W) {
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
      return r("input", A(
        this.item.attributes.listForCheckbox.value,
        {
          class: (e = this.classes) == null ? void 0 : e.value.input,
          type: this.item.type,
          checked: this.item.value.item.value,
          onInput: this.item.event.onChecked
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
          { class: (e = this.classes) == null ? void 0 : e.value.item },
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
  W as Checkbox,
  le as CheckboxDesign,
  oe as defaultsCheckbox
};
