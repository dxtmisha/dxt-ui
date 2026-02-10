var g = Object.defineProperty;
var A = (r, i, t) => i in r ? g(r, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[i] = t;
var s = (r, i, t) => A(r, typeof i != "symbol" ? i + "" : i, t);
import { watch as D, ref as T, computed as o, reactive as p, h as u } from "vue";
import { toBind as m, getBind as E, forEach as M, DesignConstructorAbstract as W } from "@dxtmisha/functional";
import { A as v } from "./AriaStaticInclude-CAURwJMb.js";
import { L as $ } from "./LabelInclude-D-mLvjK5.js";
import { D as y } from "./DescriptionInclude-D4ane9aR.js";
import { E as H } from "./EventClickInclude-WHJqxZ1b.js";
import { M as P } from "./ModelInclude-BiYm_iCQ.js";
import { T as N } from "./TextInclude--GERRCGj.js";
import { W as O } from "./WindowClassesInclude-B56usxgx.js";
import { M as R } from "./MotionTransformClassesInclude-B23RIq0Q.js";
import { S as V } from "./SkeletonInclude-BIUzAO2s.js";
import { B as ot } from "./BarsInclude-BOEoY-O4.js";
class j {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   */
  constructor(i, t) {
    /** Текущее состояние action‑режима / Current action mode state */
    s(this, "action", T(!1));
    /**
     * Checks if action mode is possible.
     *
     * Проверяет, возможен ли режим действий.
     */
    s(this, "isPossible", o(() => !!(this.props.actionLabel || this.props.actionDescription || this.props.actionBars)));
    this.props = i, this.refs = t, t.action && D(
      t.action,
      (e) => {
        this.action.value = !!e;
      },
      { immediate: !0 }
    );
  }
  /**
   * Включить action‑режим.
   *
   * Enable action mode.
   */
  open() {
    this.action.value || (this.action.value = !0);
  }
  /**
   * Выключить action‑режим.
   *
   * Disable action mode.
   */
  close() {
    this.action.value && (this.action.value = !1);
  }
}
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
   * @param constructors object with classes/ объект с классами
   * @param constructors.BarsActionConstructor class for managing action mode/ класс для управления action-режимом
   * @param constructors.DescriptionConstructor class for creating a description/ класс для создания описания
   * @param constructors.EventConstructor class for creating an event/ класс для создания события
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.ModelConstructor class for working with models/ класс для работы с моделями
   * @param constructors.MotionTransformClassesConstructor helper class for MotionTransform CSS classes/ вспомогательный класс для CSS-классов MotionTransform
   * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   * @param constructors.TextConstructor class for creating text/ класс для создания текста
   * @param constructors.WindowClassesConstructor helper class for Window CSS classes/ вспомогательный класс для CSS-классов Window
   */
  constructor(i, t, e, n, a, b, c, d, l) {
    /** Управление action‑режимом */
    s(this, "action");
    /** Label object/ Объект метки */
    s(this, "label");
    /** Description object/ Объект описания */
    s(this, "description");
    /** Event object/ Объект события */
    s(this, "event");
    /** Helper for Window CSS classes/ Вспомогательный класс для CSS‑классов Window */
    s(this, "windowClasses");
    /** Helper for MotionTransform CSS classes/ Вспомогательный класс для CSS‑классов MotionTransform */
    s(this, "motionTransformClasses");
    /** Подключение скелетона для текста/описания */
    s(this, "skeleton");
    /** Text object/ Объект текста */
    s(this, "text");
    /** Returns the button data/ Возвращает данные кнопки */
    s(this, "backBinds", o(
      () => {
        var i;
        return this.initItem(
          m(
            {
              icon: {
                icon: this.props.iconBack,
                iconActive: this.props.iconClose
              },
              iconDir: !0,
              value: "back",
              class: [
                this.windowClasses.get().close,
                this.motionTransformClasses.get().close
              ],
              onClick: this.onClickBack,
              ...v.label(this.text.close.value)
            },
            (i = this.props.backButton) != null ? i : {}
          ),
          "main-back"
        );
      }
    ));
    /** Returns the list of control buttons/ Возвращает список кнопок управления */
    s(this, "barsBinds", o(() => this.initList(this.props.bars)));
    /**
     * Returns the list of active control buttons/
     * Возвращает список активных кнопок управления
     */
    s(this, "actionBarsBinds", o(() => this.initList(this.props.actionBars, !0)));
    /** Returns the button name/ Возвращает название кнопки */
    s(this, "backLabel", o(() => {
      var i;
      return this.action.action.value || (i = this.backBinds.value) == null ? void 0 : i.label;
    }));
    /**
     * Values for the class.
     *
     * Значения для класса.
     */
    s(this, "classes", o(() => ({
      [`${this.className}--action`]: this.action.action.value
    })));
    /**
     * Returns the value for the aria-live property.
     *
     * Возвращает значение для свойства aria-live.
     */
    s(this, "ariaLive", o(() => {
      if (this.action.isPossible.value)
        return "polite";
    }));
    /** Binds for label text/ Привязки для текста метки */
    s(this, "labelBinds", p({
      label: o(() => this.action.action.value ? this.props.actionLabel : this.props.label),
      labelId: o(() => this.props.labelId)
    }));
    /** Binds for description text/ Привязки для текста описания */
    s(this, "descriptionBinds", p({
      description: o(() => this.action.action.value ? this.props.actionDescription : this.props.description),
      descriptionId: o(() => this.props.descriptionId)
    }));
    /**
     * Click handler for the "back" button
     *
     * Обработчик клика по кнопке «назад»: закрывает action‑режим и проксирует событие.
     */
    s(this, "onClickBack", (i, t) => {
      (t == null ? void 0 : t.value) === "back" && this.action.close(), this.event.onClick(i, t);
    });
    this.props = i, this.refs = t, this.element = e, this.classDesign = n, this.className = a, this.components = b, this.slots = c, this.emits = d;
    const {
      BarsActionConstructor: B = j,
      DescriptionConstructor: f = y,
      EventConstructor: C = H,
      LabelConstructor: k = $,
      ModelConstructor: w = P,
      MotionTransformClassesConstructor: I = R,
      SkeletonConstructor: x = V,
      TextConstructor: L = N,
      WindowClassesConstructor: S = O
    } = l != null ? l : {}, h = new x(this.props, this.classDesign, ["classTextVariant"]);
    this.action = new B(this.props, this.refs), this.label = new k(
      this.labelBinds,
      a,
      void 0,
      c,
      void 0,
      void 0,
      void 0,
      h
    ), this.description = new f(this.descriptionBinds, a, c, h), this.event = new C(void 0, void 0, d), this.windowClasses = new S(n), this.motionTransformClasses = new I(n), this.skeleton = h, this.text = new L(this.props), new w("action", this.emits, this.action.action);
  }
  /**
   * Prepares all parameters for the button.
   *
   * Подготавливает все параметры для кнопки.
   * @param item list of buttons/ список параметры
   * @param key button identifier/ идентификатор кнопки
   * @param isAction is action button/ является ли кнопка действия
   */
  initItem(i, t, e = !1) {
    var n, a;
    return {
      isSkeleton: this.props.isSkeleton,
      onClick: this.event.onClick,
      ...m(
        (n = this.props.buttonAttrs) != null ? n : {},
        i != null ? i : {}
      ),
      key: `${e ? "action" : ""}Bar-${(a = i == null ? void 0 : i.value) != null ? a : t}`,
      icon: E(i == null ? void 0 : i.icon, { animationShow: e }, "icon")
    };
  }
  /**
   * Prepares all parameters for the button.
   *
   * Подготавливает список параметры для кнопки.
   * @param bars list of buttons/ >список кнопок
   * @param isAction is action button/ является ли кнопка действия
   */
  initList(i, t = !1) {
    if (i)
      return M(
        i,
        (e, n) => this.initItem(e, n, t)
      );
  }
}
const it = {};
class st extends W {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor bars item class/ класс элемента bars
   */
  constructor(t, e, n, a = q) {
    super(
      t,
      e,
      n
    );
    s(this, "item");
    /**
     * Rendering the close button.
     *
     * Рендеринг кнопки закрытия.
     */
    s(this, "renderBackButton", () => this.props.backHide && (!this.item.action.action.value || this.props.backActionHide) ? [] : [
      this.components.renderOne(
        "button",
        {
          ...this.item.backBinds.value,
          label: this.item.backLabel.value,
          selected: this.item.action.action.value
        }
      )
    ]);
    /**
     * Rendering the content.
     *
     * Рендеринг контента.
     */
    s(this, "renderContext", () => {
      var t;
      return [
        u(
          "div",
          {
            class: (t = this.classes) == null ? void 0 : t.value.context
          },
          [
            ...this.item.label.render(),
            ...this.item.description.render()
          ]
        )
      ];
    });
    /**
     * Rendering the control button.
     *
     * Рендеринг кнопки управления.
     */
    s(this, "renderBars", () => {
      const t = [];
      return this.item.action.action.value || (t.push(...this.renderList(this.item.barsBinds.value)), this.initSlot("bars", t)), t;
    });
    /**
     * Rendering the control button.
     *
     * Рендеринг кнопки управления.
     */
    s(this, "renderActionBars", () => {
      const t = [];
      return this.item.action.action.value && (t.push(...this.renderList(this.item.actionBarsBinds.value)), this.initSlot("actionBars", t)), t;
    });
    /**
     * Rendering a list of buttons from the list.
     *
     * Рендеринг списка кнопок по списку.
     * @param list list of data for the button/ список данных для кнопки
     */
    s(this, "renderList", (t) => {
      const e = [];
      return t && t.forEach(
        (n) => this.components.renderAdd(e, "button", n)
      ), e;
    });
    this.item = new a(
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
      context: this.getSubClass("context"),
      label: this.getSubClass("label"),
      description: this.getSubClass("description")
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
    var t;
    return u(
      "div",
      {
        ...this.getAttrs(),
        class: (t = this.classes) == null ? void 0 : t.value.main,
        ...v.live(this.item.ariaLive.value)
      },
      [
        ...this.renderBackButton(),
        ...this.renderContext(),
        ...this.renderBars(),
        ...this.renderActionBars()
      ]
    );
  }
}
export {
  q as Bars,
  st as BarsDesign,
  ot as BarsInclude,
  it as defaultsBars
};
