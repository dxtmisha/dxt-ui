var g = Object.defineProperty;
var S = (a, i, t) => i in a ? g(a, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[i] = t;
var s = (a, i, t) => S(a, typeof i != "symbol" ? i + "" : i, t);
import { watch as A, ref as D, computed as o, reactive as d, h as p } from "vue";
import { toBind as u, getBind as T, forEach as E, DesignConstructorAbstract as M } from "@dxtmisha/functional";
import { A as m } from "./AriaStaticInclude-D1bSJaBp.js";
import { L as $ } from "./LabelInclude-C9Dk-o4t.js";
import { D as y } from "./DescriptionInclude-D4ane9aR.js";
import { E as H } from "./EventClickInclude-CgbuezDm.js";
import { M as P } from "./ModelInclude-BiYm_iCQ.js";
import { T as W } from "./TextInclude-CodMN5BH.js";
import { W as N } from "./WindowClassesInclude-B56usxgx.js";
import { M as O } from "./MotionTransformClassesInclude-B23RIq0Q.js";
import { S as R } from "./SkeletonInclude-BIUzAO2s.js";
import { B as nt } from "./BarsInclude-BOEoY-O4.js";
class V {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   */
  constructor(i, t) {
    /** Текущее состояние action‑режима / Current action mode state */
    s(this, "action", D(!1));
    /**
     * Checks if action mode is possible.
     *
     * Проверяет, возможен ли режим действий.
     */
    s(this, "isPossible", o(() => !!(this.props.actionLabel || this.props.actionDescription || this.props.actionBars)));
    this.props = i, this.refs = t, t.action && A(
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
class j {
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
   * @param BarsActionConstructor class for managing action mode/ класс для управления action-режимом
   * @param LabelConstructor class for creating a label/ класс для создания метки
   * @param DescriptionConstructor class for creating a description/ класс для создания описания
   * @param EventConstructor class for creating an event/ класс для создания события
   * @param WindowClassesConstructor helper class for Window CSS classes/ вспомогательный класс для CSS-классов Window
   * @param MotionTransformClassesConstructor helper class for MotionTransform CSS classes/ вспомогательный класс для CSS-классов MotionTransform
   * @param SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   * @param TextConstructor class for creating text/ класс для создания текста
   * @param ModelConstructor class for working with models/ класс для работы с моделями
   */
  constructor(i, t, e, n, r, v, c, h, b = V, B = $, f = y, k = H, C = N, w = O, I = R, x = W, L = P) {
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
          u(
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
              ...m.label(this.text.close.value)
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
    s(this, "labelBinds", d({
      label: o(() => this.action.action.value ? this.props.actionLabel : this.props.label),
      labelId: o(() => this.props.labelId)
    }));
    /** Binds for description text/ Привязки для текста описания */
    s(this, "descriptionBinds", d({
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
    this.props = i, this.refs = t, this.element = e, this.classDesign = n, this.className = r, this.components = v, this.slots = c, this.emits = h;
    const l = new I(this.props, this.classDesign, ["classTextVariant"]);
    this.action = new b(this.props, this.refs), this.label = new B(
      this.labelBinds,
      r,
      void 0,
      c,
      void 0,
      void 0,
      void 0,
      l
    ), this.description = new f(this.descriptionBinds, r, c, l), this.event = new k(void 0, void 0, h), this.windowClasses = new C(n), this.motionTransformClasses = new w(n), this.skeleton = l, this.text = new x(this.props), new L("action", this.emits, this.action.action);
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
    var n, r;
    return {
      isSkeleton: this.props.isSkeleton,
      onClick: this.event.onClick,
      ...u(
        (n = this.props.buttonAttrs) != null ? n : {},
        i != null ? i : {}
      ),
      key: `${e ? "action" : ""}Bar-${(r = i == null ? void 0 : i.value) != null ? r : t}`,
      icon: T(i == null ? void 0 : i.icon, { animationShow: e }, "icon")
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
      return E(
        i,
        (e, n) => this.initItem(e, n, t)
      );
  }
}
const tt = {};
class it extends M {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor bars item class/ класс элемента bars
   */
  constructor(t, e, n, r = j) {
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
        p(
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
    this.item = new r(
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
    return p(
      "div",
      {
        ...this.getAttrs(),
        class: (t = this.classes) == null ? void 0 : t.value.main,
        ...m.live(this.item.ariaLive.value)
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
  j as Bars,
  it as BarsDesign,
  nt as BarsInclude,
  tt as defaultsBars
};
