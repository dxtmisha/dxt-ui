import { ref as v, computed as m, h as y, defineComponent as x, openBlock as T, createBlock as M, unref as B, mergeDefaults as C } from "vue";
import { executePromise as b, toBinds as D, inArray as S } from "@dxtmisha/functional";
import { T as k, F as P, D as A } from "./index-DPpDsow-.js";
import { D as E } from "./index-CmCALbNS.js";
import { D as _ } from "./index-BmyhfVSr.js";
var $ = Object.defineProperty, H = (n, t, e) => t in n ? $(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, c = (n, t, e) => H(n, typeof t != "symbol" ? t + "" : t, e);
const d = 80;
class X {
  /**
   * Constructor
   * @param start callback on touch/mouse start/ колбэк при начале касания/клика
   * @param move callback on touch/mouse move/ колбэк при движении
   * @param end callback on touch/mouse end/ колбэк при завершении
   * @param element optional element reference/ необязательная ссылка на элемент
   */
  constructor(t, e, o, i) {
    c(this, "touche", v()), c(this, "toucheMove", v()), c(this, "mouse", v()), c(this, "mouseMove", v()), c(this, "onTouch", {
      onTouchstart: (s) => {
        var a, r, u, l, h;
        this.touche.value = (a = s.targetTouches) == null ? void 0 : a[0], this.mouse.value = {
          x: (u = (r = this.touche.value) == null ? void 0 : r.clientX) != null ? u : 0,
          y: (h = (l = this.touche.value) == null ? void 0 : l.clientY) != null ? h : 0
        }, this.update(s.target);
      },
      onTouchend: (s) => this.reset(s.target),
      onTouchcancel: (s) => this.reset(s.target),
      onTouchmove: (s) => {
        var a, r, u, l, h;
        this.toucheMove.value = (a = s.targetTouches) == null ? void 0 : a[0], this.mouseMove.value = {
          x: (u = (r = this.toucheMove.value) == null ? void 0 : r.clientX) != null ? u : 0,
          y: (h = (l = this.toucheMove.value) == null ? void 0 : l.clientY) != null ? h : 0
        }, this.updateMove(s.target);
      }
    }), c(this, "onMouse", {
      onMousedown: (s) => {
        this.mouse.value = {
          x: s.clientX,
          y: s.clientY
        }, this.update(s.target);
      },
      onMouseup: (s) => this.reset(s.target),
      onMousemove: (s) => {
        this.mouseMove.value = {
          x: s.clientX,
          y: s.clientY
        }, this.updateMove(s.target);
      }
    }), this.start = t, this.move = e, this.end = o, this.element = i;
  }
  /**
   * Gets the target element for touch events.
   *
   * Получает целевой элемент для событий касания.
   * @param target event target element/ целевой элемент события
   */
  getElement(t) {
    var e, o;
    return (o = (e = this.element) == null ? void 0 : e.value) != null ? o : t.closest("[data-touch]");
  }
  /**
   * Determines horizontal direction type from client X coordinate.
   *
   * Определяет тип горизонтального направления из координаты X.
   * @param clientX horizontal coordinate/ горизонтальная координата
   */
  getTypeX(t) {
    return t >= d ? "right" : t < -d ? "left" : "none";
  }
  /**
   * Determines vertical direction type from client Y coordinate.
   *
   * Определяет тип вертикального направления из координаты Y.
   * @param clientY vertical coordinate/ вертикальная координата
   */
  getTypeY(t) {
    return t >= d ? "bottom" : t < -d ? "top" : "none";
  }
  /**
   * Executes callback with calculated movement data.
   *
   * Выполняет колбэк с рассчитанными данными движения.
   * @param callback callback function/ функция обратного вызова
   */
  async callback(t) {
    const e = this.mouse.value, o = this.mouseMove.value;
    if (e && o) {
      const i = o.x - e.x, s = o.y - e.y;
      if (!t || await b(t(
        this.getTypeX(i),
        this.getTypeY(s),
        i,
        s,
        e,
        o,
        this.touche.value,
        this.toucheMove.value
      )))
        return {
          x: i,
          y: s
        };
    }
  }
  /**
   * Resets touch/mouse state and CSS properties after interaction ends.
   *
   * Сбрасывает состояние касания/мыши и CSS свойства после завершения взаимодействия.
   * @param target selected item/ выбранный элемент
   */
  reset(t) {
    const e = this.getElement(t);
    this.callback(this.end).then((o) => {
      e && (o ? this.resetData(e) : setTimeout(() => this.resetData(e), 400));
    });
  }
  /**
   * Resets all touch/mouse state and removes CSS custom properties.
   *
   * Сбрасывает все состояния касания/мыши и удаляет CSS кастомные свойства.
   * @param elementValue target element/ целевой элемент
   */
  resetData(t) {
    this.touche.value = void 0, this.toucheMove.value = void 0, this.mouse.value = void 0, this.mouseMove.value = void 0, t.style.removeProperty("--sys-touch-start-x"), t.style.removeProperty("--sys-touch-start-y"), t.style.removeProperty("--sys-touch-move-x"), t.style.removeProperty("--sys-touch-move-y");
  }
  /**
   * Updates initial touch/mouse position and sets CSS custom properties.
   *
   * Обновляет начальную позицию касания/мыши и устанавливает CSS кастомные свойства.
   * @param target selected item/ выбранный элемент
   */
  update(t) {
    var e;
    const o = this.getElement(t), i = this.mouse.value;
    o && i && (o.style.setProperty("--sys-touch-start-x", `${i.x}px`), o.style.setProperty("--sys-touch-start-y", `${i.y}px`), b((e = this.start) == null ? void 0 : e.call(this, i, this.touche.value)).then());
  }
  /**
   * Updates touch/mouse position during movement and sets CSS custom properties.
   *
   * Обновляет позицию касания/мыши во время движения и устанавливает CSS кастомные свойства.
   * @param target selected item/ выбранный элемент
   */
  updateMove(t) {
    const e = this.getElement(t);
    this.callback(this.move).then((o) => {
      e && o && (e.style.setProperty("--sys-touch-move-x", `${o.x}px`), e.style.setProperty("--sys-touch-move-y", `${o.y}px`));
    });
  }
}
var Y = Object.defineProperty, L = (n, t, e) => t in n ? Y(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, g = (n, t, e) => L(n, typeof t != "symbol" ? t + "" : t, e);
class I extends P {
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
   * @param constructors.TouchEventIncludeConstructor class for working with touch event/ класс для работы с событием касания
   */
  constructor(t, e, o, i, s, a, r, u, l) {
    const {
      TouchEventIncludeConstructor: h = X
    } = l != null ? l : {};
    super(
      t,
      e,
      o,
      i,
      s,
      a,
      r,
      u,
      m(() => ({
        open: t.open,
        adaptive: "actionSheet",
        closeButton: t.barsBackHide,
        closeMobileHide: t.touchClose
      })),
      void 0,
      { align: "auto" }
    ), g(this, "touchEvent"), this.props = t, this.refs = e, this.element = o, this.classDesign = i, this.className = s, this.components = a, this.slots = r, this.emits = u, this.touchEvent = new h(
      void 0,
      (f, p, R, w) => w >= 0,
      (f, p) => p === "bottom" ? (this.window.expose.setOpen(!1).then(), !1) : !0
    );
  }
}
const O = {
  barsBackHide: !0,
  touchClose: !0
};
class j extends k {
  constructor() {
    super(...arguments), g(this, "renderTitleTouch", (t) => {
      var e, o;
      const i = this.renderTitle(t);
      return this.props.touchClose ? [y(
        "div",
        {
          class: (e = this.classes) == null ? void 0 : e.value.touch,
          ...this.item.touchEvent.onTouch
        },
        [
          y("div", { class: (o = this.classes) == null ? void 0 : o.value.tab }),
          ...i
        ]
      )] : i;
    });
  }
  /**
   * Creates an instance of the item class.
   *
   * Создает экземпляр класса элемента.
   */
  initItem() {
    return new I(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    );
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
      title: this.getSubClass("title"),
      header: this.getSubClass("header"),
      body: this.getSubClass("body"),
      footer: this.getSubClass("footer"),
      touch: this.getSubClass("touch"),
      tab: this.getSubClass("tab")
    };
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    var t;
    return this.item.window.render(
      {
        control: this.renderControl,
        title: this.renderTitleTouch,
        default: this.renderDefault,
        footer: this.renderFooter
      },
      D(
        {
          class: (t = this.classes) == null ? void 0 : t.value.main,
          "data-touch": "touch"
        },
        this.getAttrs()
      )
    );
  }
}
const F = {
  // :values [!] System label / Системная метка
  width: ["sm", "md", "lg", "auto"]
  // :values [!] System label / Системная метка
}, N = {
  ...O,
  // :default [!] System label / Системная метка
  width: "md"
}, J = /* @__PURE__ */ x({
  name: "D1ActionSheet",
  __name: "D1ActionSheet",
  props: /* @__PURE__ */ C({
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    barsLabel: {},
    barsDescription: {},
    barsBackHide: { type: Boolean },
    barsHide: { type: Boolean },
    barsList: {},
    barsAttrs: {},
    actionsHide: { type: Boolean },
    actionsList: {},
    actionsSecondary: {},
    actionsAttrs: {},
    open: { type: Boolean },
    touchClose: { type: Boolean },
    width: {}
  }, N),
  emits: ["window", "bars", "barsLite", "barsBack", "actions", "actionsLite"],
  setup(n, { expose: t, emit: e }) {
    const o = e, i = n, s = m(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-actionSheet": !0,
        [`d1-actionSheet--width--${i.width}`]: S(F.width, i.width)
        // :classes-values [!] System label / Системная метка
      }
    })), a = m(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new j(
      "d1.actionSheet",
      i,
      {
        emits: o,
        classes: s,
        styles: a,
        components: {
          window: E,
          bars: _,
          actions: A
        },
        compMod: {
          window: {
            divider: !0
          }
        }
      }
    ), u = r.render();
    return t(r.expose()), (l, h) => (T(), M(B(u)));
  }
});
export {
  J as _
};
