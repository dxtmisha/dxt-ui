var b = Object.defineProperty;
var f = (o, i, t) => i in o ? b(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var s = (o, i, t) => f(o, typeof i != "symbol" ? i + "" : i, t);
import { watch as B, ref as k, computed as r, reactive as d, h as p } from "vue";
import { toBind as u, getBind as C, forEach as w, DesignConstructorAbstract as x } from "@dxtmisha/functional";
import { A as m } from "./AriaStaticInclude-CuMRRW17.js";
import { L as I } from "./LabelInclude-BtZrrbCf.js";
import { D as g } from "./DescriptionInclude-DxWNon_J.js";
import { E as S } from "./EventClickInclude-CgbuezDm.js";
import { M as L } from "./ModelInclude-BiYm_iCQ.js";
import { T as A } from "./TextInclude-CodMN5BH.js";
import { S as D } from "./SkeletonInclude-BIUzAO2s.js";
import { W as T } from "./WindowClassesInclude-B56usxgx.js";
import { M as E } from "./MotionTransformClassesInclude-B23RIq0Q.js";
import { B as U } from "./BarsInclude-IM3Gdslg.js";
class M {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   */
  constructor(i, t) {
    /** Текущее состояние action‑режима / Current action mode state */
    s(this, "action", k(!1));
    /** Вычисляемый флаг активности action / Computed active flag */
    s(this, "is", r(() => this.props.action || this.action.value));
    this.props = i, this.refs = t, t.action && B(
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
   */
  constructor(i, t, e, n, a, v, c, h) {
    /** Управление action‑режимом */
    s(this, "action");
    s(this, "label");
    s(this, "description");
    s(this, "event");
    /** Helper for Window CSS classes/ Вспомогательный класс для CSS‑классов Window */
    s(this, "windowClasses");
    /** Helper for MotionTransform CSS classes/ Вспомогательный класс для CSS‑классов MotionTransform */
    s(this, "motionTransformClasses");
    /** Подключение скелетона для текста/описания */
    s(this, "skeleton");
    s(this, "text");
    /** Returns the button data/ Возвращает данные кнопки */
    s(this, "backBinds", r(
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
    s(this, "barsBinds", r(() => this.initList(this.props.bars)));
    /**
     * Returns the list of active control buttons/
     * Возвращает список активных кнопок управления
     */
    s(this, "actionBarsBinds", r(() => this.initList(this.props.actionBars, !0)));
    /** Returns the button name/ Возвращает название кнопки */
    s(this, "backLabel", r(() => {
      var i;
      return this.action.is.value || (i = this.backBinds.value) == null ? void 0 : i.label;
    }));
    /** Binds for label text/ Привязки для текста метки */
    s(this, "labelBinds", d({
      label: r(() => this.action.is.value ? this.props.actionLabel : this.props.label)
    }));
    /** Binds for description text/ Привязки для текста описания */
    s(this, "descriptionBinds", d({
      description: r(() => this.action.is.value ? this.props.actionDescription : this.props.description)
    }));
    /**
     * Click handler for the "back" button
     *
     * Обработчик клика по кнопке «назад»: закрывает action‑режим и проксирует событие.
     */
    s(this, "onClickBack", (i, t) => {
      (t == null ? void 0 : t.value) === "back" && this.action.close(), this.event.onClick(i, t);
    });
    this.props = i, this.refs = t, this.element = e, this.classDesign = n, this.className = a, this.components = v, this.slots = c, this.emits = h;
    const l = new D(this.props, this.classDesign, ["classTextVariant"]);
    this.action = new M(this.props, this.refs), this.label = new I(
      this.labelBinds,
      a,
      void 0,
      c,
      void 0,
      void 0,
      void 0,
      l
    ), this.description = new g(this.descriptionBinds, a, c, l), this.event = new S(void 0, void 0, h), this.windowClasses = new T(n), this.motionTransformClasses = new E(n), this.skeleton = l, this.text = new A(this.props), new L("action", this.emits, this.action.action);
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
      ...u(
        (n = this.props.buttonAttrs) != null ? n : {},
        i != null ? i : {}
      ),
      key: `${e ? "action" : ""}Bar-${(a = i == null ? void 0 : i.value) != null ? a : t}`,
      icon: C(i == null ? void 0 : i.icon, { animationShow: e }, "icon")
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
      return w(
        i,
        (e, n) => this.initItem(e, n, t)
      );
  }
}
const K = {};
class N extends x {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, e, n) {
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
    s(this, "renderBackButton", () => this.props.backHide && (!this.item.action.is.value || this.props.backActionHide) ? [] : [
      this.components.renderOne(
        "button",
        {
          label: this.item.backLabel.value,
          selected: this.item.action.is.value,
          ...this.item.backBinds.value
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
      return this.item.action.is.value || (t.push(...this.renderList(this.item.barsBinds.value)), this.initSlot("bars", t)), t;
    });
    /**
     * Rendering the control button.
     *
     * Рендеринг кнопки управления.
     */
    s(this, "renderActionBars", () => {
      const t = [];
      return this.item.action.is.value && (t.push(...this.renderList(this.item.actionBarsBinds.value)), this.initSlot("actionBars", t)), t;
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
    this.item = new y(
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
      ...this.item.label.expose,
      ...this.item.description.expose
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
        ...m.live(this.props.action ? "polite" : "off")
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
  y as Bars,
  N as BarsDesign,
  U as BarsInclude,
  K as defaultsBars
};
