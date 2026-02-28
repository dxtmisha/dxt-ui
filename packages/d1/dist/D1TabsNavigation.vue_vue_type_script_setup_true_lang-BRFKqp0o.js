import { computed as u, toRef as F, onMounted as A, watch as x, ref as g, nextTick as S, defineComponent as B, openBlock as $, createBlock as _, unref as z, mergeDefaults as L } from "vue";
import { DesignConstructorAbstract as T, ListDataRef as R, isSelected as E, toBinds as k, getRef as I, isDomRuntime as P, EventItem as V, getElementId as H, toArray as q } from "@dxtmisha/functional";
import { l as M } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { g as O } from "./D1Icon.vue_vue_type_script_setup_true_lang-B26p6g1f.js";
import { V as j } from "./ModelInclude-BiYm_iCQ-BvlyUUtY.js";
import { _ as U } from "./D1HorizontalScroll.vue_vue_type_script_setup_true_lang-DKBCR2d3.js";
import { _ as G } from "./D1TabItem.vue_vue_type_script_setup_true_lang-CfQJPdlF.js";
var J = Object.defineProperty, K = (n, t, e) => t in n ? J(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, s = (n, t, e) => K(n, typeof t != "symbol" ? t + "" : t, e);
class Q {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, e, r, o, c) {
    s(this, "element", g()), s(this, "elementHtml", u(() => {
      var i;
      return (i = this.element.value) == null ? void 0 : i.elementHtml;
    })), s(this, "binds", u(
      () => k(
        I(this.extra),
        {
          ref: this.element,
          flush: this.props.horizontalScrollFlush,
          align: this.props.horizontalScrollAlign
        },
        this.props.horizontalScrollAttrs
      )
    )), s(this, "toSelected", () => {
      var i, l;
      (l = (i = this.element.value) == null ? void 0 : i.toSelected) == null || l.call(i);
    }), s(this, "render", (i, l) => {
      var a;
      return this.components ? this.components.render(
        "horizontalScroll",
        {
          ...this.binds.value,
          ...I(l)
        },
        i,
        (a = this.index) != null ? a : "horizontalScroll"
      ) : [];
    }), this.props = t, this.className = e, this.components = r, this.extra = o, this.index = c;
  }
}
class W {
  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(t) {
    s(this, "item", g()), s(this, "actualItem", g()), this.props = t, this.item.value = t.selected, this.actualItem.value = t.selected;
  }
  /**
   * Checks if the value is selected.
   *
   * Проверяет, выбрано ли значение.
   * @param selected value to check/ значение для проверки
   */
  isSelected(t) {
    return E(t, this.actualItem.value);
  }
  /**
   * Sets the selected value.
   *
   * Устанавливает выбранное значение.
   * @param selected selected value/ выбранное значение
   */
  set(t) {
    return this.item.value = t, this;
  }
  /**
   * Sets the actual selected value.
   *
   * Устанавливает актуальное выбранное значение.
   * @param selected selected value/ выбранное значение
   */
  setActual(t) {
    return this.actualItem.value = t, this;
  }
}
class X {
  /**
   * Constructor
   * @param element main element/ главный элемент
   * @param selected selected value object/ объект значения выделения
   */
  constructor(t, e) {
    s(this, "item", g()), this.element = t, this.selected = e;
  }
  /**
   * Returns the current focus value.
   *
   * Возвращает текущее значение фокуса.
   */
  get() {
    if (this.item.value)
      return String(this.item.value);
  }
  /**
   * Applies the current focus value to the selection.
   *
   * Применяет текущее значение фокуса к выделению.
   */
  apply() {
    return this.selected.set(this.item.value), this;
  }
  /**
   * Sets the focus to the specified value.
   *
   * Устанавливает фокус на указанное значение.
   * @param focus focus value/ значение фокуса
   */
  set(t) {
    var e;
    return this.item.value = t, (e = this.getElement()) == null || e.focus(), this;
  }
  /**
   * Sets the initial focus position based on the selected value.
   *
   * Устанавливает начальную позицию фокуса на основе выбранного значения.
   */
  position() {
    var t;
    return this.item.value = (t = q(this.selected.actualItem.value)) == null ? void 0 : t[0], this;
  }
  /**
   * Resets the focus.
   *
   * Сбрасывает фокус.
   */
  reset() {
    return this.item.value = void 0, this;
  }
  /**
   * Returns the focused element.
   *
   * Возвращает элемент в фокусе.
   */
  getElement() {
    var t;
    if (this.item.value)
      return ((t = this.element.value) == null ? void 0 : t.querySelector(`[data-value="${this.item.value}"]`)) || void 0;
  }
}
class Y {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param data object for working with data/ объект для работы с данными
   */
  constructor(t, e) {
    s(this, "ids", u(() => {
      const r = {};
      return this.data.fullData.value.forEach((o) => {
        r[o.value] = H();
      }), r;
    })), this.props = t, this.data = e;
  }
  /**
   * Returns the ID by value.
   *
   * Возвращает идентификатор по значению.
   * @param value value/ значение
   */
  getIdByValue(t) {
    var e;
    return (e = this.ids.value[t != null ? t : ""]) != null ? e : String(t);
  }
}
class Z {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element main element/ главный элемент
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param selected selection value object/ объект значения выделения
   */
  constructor(t, e, r, o, c, i) {
    s(this, "go", async (l, a) => {
      await S();
      const h = this.getItem(l), d = this.getItem(a);
      if (h && d) {
        const m = `${this.classDesign}-${this.getItemClassName()}`, f = h.getBoundingClientRect(), v = d.getBoundingClientRect(), p = v.left - f.left, y = `${p}px ${p >= 0 ? "-" : "+"} var(--${m}-gap, 0px)`;
        h.style.setProperty(`--${m}-sys-left`, y), h.style.setProperty(`--${m}-sys-width`, v.width + "px"), this.reset(h);
      }
      requestAnimationFrame(() => {
        this.selected.setActual(l);
      });
    }), s(this, "reset", (l) => {
      setTimeout(() => {
        l.style.removeProperty(`--${this.className}-sys-left`), l.style.removeProperty(`--${this.className}-sys-width`);
      }, 384);
    }), this.props = t, this.refs = e, this.element = r, this.classDesign = o, this.className = c, this.selected = i, x(
      this.selected.item,
      (l, a) => this.go(l, a)
    ), S().then(
      () => requestAnimationFrame(
        () => {
          var l, a;
          r.value && (r.value.scrollLeft = (a = (l = this.getItem(this.selected.item.value)) == null ? void 0 : l.offsetLeft) != null ? a : 0);
        }
      )
    );
  }
  /**
   * Returns the class name of the item.
   *
   * Возвращает имя класса элемента.
   */
  getItemClassName() {
    return "tabItem";
  }
  /**
   * Returns the selected element.
   *
   * Возвращает выделенный элемент.
   * @param selected selection number/ номер выделения
   */
  getItem(t) {
    var e;
    return ((e = this.element.value) == null ? void 0 : e.querySelector(`[data-value="${t != null ? t : ""}"]`)) || void 0;
  }
}
class tt {
  /**
   * Constructor
   * @param selected selection management object/ объект управления выделением
   * @param focus focus management object/ объект управления фокусом
   * @param data data list object/ объект списка данных
   */
  constructor(t, e, r) {
    s(this, "event"), s(this, "onFocus", () => {
      this.start();
    }), s(this, "onBlur", () => {
      this.stop();
    }), s(this, "on", (o) => {
      if (this.data.getLength())
        switch (o.code || o.key || o.keyCode) {
          case "ArrowLeft":
          case "Left":
          case 37:
            o.preventDefault(), this.prev();
            break;
          case "ArrowRight":
          case "Right":
          case 39:
            o.preventDefault(), this.next();
            break;
          case "Enter":
          case 13:
          case "Space":
          case "Spacebar":
          case " ":
          case 32:
            o.preventDefault(), this.selected.set(this.focus.item.value);
            break;
        }
    }), this.selected = t, this.focus = e, this.data = r;
  }
  /**
   * Returns bindings for the element.
   *
   * Возвращает привязки для элемента.
   */
  get binds() {
    return {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };
  }
  /**
   * Returns the first item in the list.
   *
   * Возвращает первый элемент в списке.
   */
  getFirstItem() {
    var t;
    return (t = this.data.getFirstItemByParent(void 0)) == null ? void 0 : t.index;
  }
  /**
   * Returns the current focus value or the first item.
   *
   * Возвращает текущее значение фокуса или первый элемент.
   */
  getFocus() {
    return this.focus.get() || this.getFirstItem();
  }
  /**
   * Starts the event.
   *
   * Запускает событие.
   */
  start() {
    P() && (this.event || (this.event = new V(
      document.body,
      ["keydown"],
      this.on
    )), this.focus.position(), this.event.start());
  }
  /**
   * Stops the event.
   *
   * Останавливает событие.
   */
  stop() {
    this.event && (this.event.stop(), this.event = void 0, this.focus.reset());
  }
  /**
   * Moves focus to the previous item.
   *
   * Перемещает фокус на предыдущий элемент.
   */
  prev() {
    var t;
    const e = this.getFocus();
    return e && this.focus.set(
      (t = this.data.getIndexPrev(e)) == null ? void 0 : t.index
    ), this;
  }
  /**
   * Moves focus to the next item.
   *
   * Перемещает фокус на следующий элемент.
   */
  next() {
    var t;
    const e = this.getFocus();
    return e && this.focus.set(
      (t = this.data.getIndexNext(e)) == null ? void 0 : t.index
    ), this;
  }
}
class et {
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
   * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
   * @param constructors.TabsNavigationFocusConstructor class for working with focus/ класс для работы с фокусом
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.HorizontalScrollIncludeConstructor class for working with horizontal scroll/ класс для работы с горизонтальной прокруткой
   * @param constructors.ListDataRefConstructor class for working with data list/ класс для работы со списком данных
   * @param constructors.TabsNavigationControlConstructor class for working with control/ класс для работы с управлением
   * @param constructors.TabsNavigationIdsConstructor class for working with ids/ класс для работы с идентификаторами
   * @param constructors.TabsNavigationIndicatorConstructor class for working with indicator/ класс для работы с индикатором
   * @param constructors.TabsNavigationSelectedConstructor class for working with selected/ класс для работы с выбранным
   */
  constructor(t, e, r, o, c, i, l, a, h) {
    s(this, "scroll"), s(this, "selected"), s(this, "focus"), s(this, "data"), s(this, "ids"), s(this, "indicator"), s(this, "control"), s(this, "event"), s(this, "binds", u(() => ({
      tabindex: 0,
      ...this.control.binds,
      ...M.role("tablist")
    }))), s(this, "onClick", (D, b) => {
      this.selected.set(b == null ? void 0 : b.value), this.event.onClick(D, b);
    }), this.props = t, this.refs = e, this.element = r, this.classDesign = o, this.className = c, this.components = i, this.slots = l, this.emits = a;
    const {
      EventClickIncludeConstructor: d = O,
      HorizontalScrollIncludeConstructor: m = Q,
      ListDataRefConstructor: f = R,
      ModelIncludeConstructor: v = j,
      TabsNavigationControlConstructor: p = tt,
      TabsNavigationIdsConstructor: y = Y,
      TabsNavigationFocusConstructor: C = X,
      TabsNavigationIndicatorConstructor: N = Z,
      TabsNavigationSelectedConstructor: w = W
    } = h != null ? h : {};
    this.scroll = new m(
      this.props,
      this.className,
      this.components
    ), this.selected = new w(this.props), this.focus = new C(
      this.element,
      this.selected
    ), this.data = new f(
      F(this.props, "list"),
      this.focus.item,
      void 0,
      void 0,
      void 0,
      this.selected.actualItem,
      this.refs.keyValue,
      this.refs.keyLabel
    ), this.ids = new y(
      this.props,
      this.data
    ), this.indicator = new N(
      this.props,
      this.refs,
      this.scroll.elementHtml,
      this.classDesign,
      this.className,
      this.selected
    ), this.control = new p(
      this.selected,
      this.focus,
      this.data
    ), this.event = new d(
      void 0,
      void 0,
      this.emits
    ), new v(
      "selected",
      this.emits,
      this.selected.item
    ), this.initSelected(), A(() => {
      x(
        [e.selected],
        () => this.selected.set(t.selected),
        { immediate: !0 }
      );
    });
  }
  /**
   * Initializes the selected element.
   *
   * Инициализирует выбранный элемент.
   */
  initSelected() {
    this.props.selected || this.selected.set(this.control.getFirstItem());
  }
}
const st = {
  horizontalScrollFlush: !0,
  horizontalScrollAlign: "left"
};
class it extends T {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(t, e, r, o = et) {
    super(
      t,
      e,
      r
    ), s(this, "item"), s(this, "renderList", (c) => {
      const i = [];
      return this.initSlot("leading", i), this.item.data.fullData.value.forEach(
        (l) => i.push(
          this.renderItem(c, l)
        )
      ), this.initSlot("trailing", i), i;
    }), s(this, "renderItem", (c, i) => {
      const l = this.item.selected.isSelected(i.index);
      return this.components.renderOne(
        "tabItem",
        k(
          {
            tag: this.props.tag,
            key: i.index
          },
          this.props.itemAttrs,
          i,
          c.binds,
          {
            id: this.item.ids.getIdByValue(i.value),
            onClick: this.item.onClick,
            class: {
              [c.classItemSelected]: l
            }
          }
        )
      );
    }), this.item = new o(
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
      ids: this.item.ids.ids
    };
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {}
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
    return this.item.scroll.render(
      { default: this.renderList },
      {
        ...this.item.binds.value,
        class: (t = this.classes) == null ? void 0 : t.value.main
      }
    );
  }
}
const lt = U, ot = G, rt = {
  ...st,
  divider: !0
}, vt = /* @__PURE__ */ B({
  name: "D1TabsNavigation",
  __name: "D1TabsNavigation",
  props: /* @__PURE__ */ L({
    horizontalScrollFlush: { type: Boolean },
    horizontalScrollAlign: {},
    horizontalScrollAttrs: {},
    modelSelected: {},
    "onUpdate:selected": { type: Function },
    "onUpdate:modelSelected": { type: Function },
    selected: { type: [Number, String, Boolean, Array] },
    list: {},
    tag: {},
    keyLabel: {},
    keyValue: {},
    itemAttrs: {},
    focus: { type: Boolean },
    divider: { type: Boolean }
  }, rt),
  emits: ["click", "clickLite", "update:selected", "update:modelSelected"],
  setup(n, { expose: t, emit: e }) {
    const r = e, o = n, c = u(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-tabsNavigation": !0,
        "d1-tabsNavigation--focus": o.focus,
        "d1-tabsNavigation--divider": o.divider
        // :classes-values [!] System label / Системная метка
      }
    })), i = u(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), l = new it(
      "d1.tabsNavigation",
      o,
      {
        emits: r,
        classes: c,
        styles: i,
        components: {
          horizontalScroll: lt,
          tabItem: ot
        }
      }
    ), a = l.render();
    return t(l.expose()), (h, d) => ($(), _(z(a)));
  }
});
export {
  vt as _
};
