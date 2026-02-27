import { computed as m, toRef as D, onMounted as F, watch as x, ref as f, nextTick as S, defineComponent as A, openBlock as $, createBlock as z, unref as B, mergeDefaults as _ } from "vue";
import { DesignConstructorAbstract as L, ListDataRef as T, isSelected as R, toBinds as k, getRef as I, isDomRuntime as E, EventItem as P, toArray as H } from "@dxtmisha/functional";
import { l as q } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { m as V } from "./D1Icon.vue_vue_type_script_setup_true_lang-BINcl8rE.js";
import { V as M } from "./ModelInclude-BiYm_iCQ-BvlyUUtY.js";
import { _ as O } from "./D1HorizontalScroll.vue_vue_type_script_setup_true_lang-DKBCR2d3.js";
import { _ as j } from "./D1TabItem.vue_vue_type_script_setup_true_lang-BWsduNVZ.js";
var U = Object.defineProperty, X = (n, t, e) => t in n ? U(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, s = (n, t, e) => X(n, typeof t != "symbol" ? t + "" : t, e);
class Y {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, e, r, l, c) {
    s(this, "element", f()), s(this, "elementHtml", m(() => {
      var o;
      return (o = this.element.value) == null ? void 0 : o.elementHtml;
    })), s(this, "binds", m(
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
      var o, i;
      (i = (o = this.element.value) == null ? void 0 : o.toSelected) == null || i.call(o);
    }), s(this, "render", (o, i) => {
      var a;
      return this.components ? this.components.render(
        "horizontalScroll",
        {
          ...this.binds.value,
          ...I(i)
        },
        o,
        (a = this.index) != null ? a : "horizontalScroll"
      ) : [];
    }), this.props = t, this.className = e, this.components = r, this.extra = l, this.index = c;
  }
}
class G {
  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(t) {
    s(this, "item", f()), s(this, "actualItem", f()), this.props = t, this.item.value = t.selected, this.actualItem.value = t.selected;
  }
  /**
   * Checks if the value is selected.
   *
   * Проверяет, выбрано ли значение.
   * @param selected value to check/ значение для проверки
   */
  isSelected(t) {
    return R(t, this.actualItem.value);
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
class J {
  /**
   * Constructor
   * @param element main element/ главный элемент
   * @param selected selected value object/ объект значения выделения
   */
  constructor(t, e) {
    s(this, "item", f()), this.element = t, this.selected = e;
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
    return this.item.value = (t = H(this.selected.actualItem.value)) == null ? void 0 : t[0], this;
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
class K {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element main element/ главный элемент
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param selected selection value object/ объект значения выделения
   */
  constructor(t, e, r, l, c, o) {
    s(this, "go", async (i, a) => {
      await S();
      const h = this.getItem(i), u = this.getItem(a);
      if (h && u) {
        const d = `${this.classDesign}-${this.getItemClassName()}`, g = h.getBoundingClientRect(), v = u.getBoundingClientRect(), p = v.left - g.left, y = `${p}px ${p >= 0 ? "-" : "+"} var(--${d}-gap, 0px)`;
        h.style.setProperty(`--${d}-sys-left`, y), h.style.setProperty(`--${d}-sys-width`, v.width + "px"), this.reset(h);
      }
      requestAnimationFrame(() => {
        this.selected.setActual(i);
      });
    }), s(this, "reset", (i) => {
      setTimeout(() => {
        i.style.removeProperty(`--${this.className}-sys-left`), i.style.removeProperty(`--${this.className}-sys-width`);
      }, 384);
    }), this.props = t, this.refs = e, this.element = r, this.classDesign = l, this.className = c, this.selected = o, x(
      this.selected.item,
      (i, a) => this.go(i, a)
    ), S().then(
      () => requestAnimationFrame(
        () => {
          var i, a;
          r.value && (r.value.scrollLeft = (a = (i = this.getItem(this.selected.item.value)) == null ? void 0 : i.offsetLeft) != null ? a : 0);
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
class Q {
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
    }), s(this, "on", (l) => {
      if (this.data.getLength())
        switch (l.code || l.key || l.keyCode) {
          case "ArrowLeft":
          case "Left":
          case 37:
            l.preventDefault(), this.prev();
            break;
          case "ArrowRight":
          case "Right":
          case 39:
            l.preventDefault(), this.next();
            break;
          case "Enter":
          case 13:
          case "Space":
          case "Spacebar":
          case " ":
          case 32:
            l.preventDefault(), this.selected.set(this.focus.item.value);
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
    E() && (this.event || (this.event = new P(
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
   * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
   * @param constructors.TabsNavigationFocusConstructor class for working with focus/ класс для работы с фокусом
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.HorizontalScrollIncludeConstructor class for working with horizontal scroll/ класс для работы с горизонтальной прокруткой
   * @param constructors.ListDataRefConstructor class for working with data list/ класс для работы со списком данных
   * @param constructors.TabsNavigationControlConstructor class for working with control/ класс для работы с управлением
   * @param constructors.TabsNavigationIndicatorConstructor class for working with indicator/ класс для работы с индикатором
   * @param constructors.TabsNavigationSelectedConstructor class for working with selected/ класс для работы с выбранным
   */
  constructor(t, e, r, l, c, o, i, a, h) {
    s(this, "scroll"), s(this, "selected"), s(this, "focus"), s(this, "data"), s(this, "indicator"), s(this, "control"), s(this, "event"), s(this, "binds", m(() => ({
      tabindex: 0,
      ...this.control.binds,
      ...q.role("tablist")
    }))), s(this, "onClick", (w, b) => {
      this.selected.set(b == null ? void 0 : b.value), this.event.onClick(w, b);
    }), this.props = t, this.refs = e, this.element = r, this.classDesign = l, this.className = c, this.components = o, this.slots = i, this.emits = a;
    const {
      EventClickIncludeConstructor: u = V,
      HorizontalScrollIncludeConstructor: d = Y,
      ListDataRefConstructor: g = T,
      ModelIncludeConstructor: v = M,
      TabsNavigationControlConstructor: p = Q,
      TabsNavigationFocusConstructor: y = J,
      TabsNavigationIndicatorConstructor: C = K,
      TabsNavigationSelectedConstructor: N = G
    } = h != null ? h : {};
    this.scroll = new d(
      this.props,
      this.className,
      this.components
    ), this.selected = new N(this.props), this.focus = new y(
      this.element,
      this.selected
    ), this.data = new g(
      D(this.props, "list"),
      this.focus.item,
      void 0,
      void 0,
      void 0,
      this.selected.actualItem,
      this.refs.keyValue,
      this.refs.keyLabel
    ), this.indicator = new C(
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
    ), this.event = new u(
      void 0,
      void 0,
      this.emits
    ), new v(
      "selected",
      this.emits,
      this.selected.item
    ), this.initSelected(), F(() => {
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
const Z = {
  horizontalScrollFlush: !0,
  horizontalScrollAlign: "left"
};
class tt extends L {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(t, e, r, l = W) {
    super(
      t,
      e,
      r
    ), s(this, "item"), s(this, "renderList", (c) => {
      const o = [];
      return this.initSlot("leading", o), this.item.data.fullData.value.forEach(
        (i) => o.push(
          this.renderItem(c, i)
        )
      ), this.initSlot("trailing", o), o;
    }), s(this, "renderItem", (c, o) => {
      const i = this.item.selected.isSelected(o.index);
      return this.components.renderOne(
        "tabItem",
        k(
          {
            tag: this.props.tag,
            key: o.index
          },
          this.props.itemAttrs,
          o,
          c.binds,
          {
            onClick: this.item.onClick,
            class: {
              [c.classItemSelected]: i
            }
          }
        )
      );
    }), this.item = new l(
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
const et = O, st = j, it = {
  ...Z,
  divider: !0
}, ut = /* @__PURE__ */ A({
  name: "D1TabsNavigation",
  __name: "D1TabsNavigation",
  props: /* @__PURE__ */ _({
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
  }, it),
  emits: ["click", "clickLite", "update:selected", "update:modelSelected"],
  setup(n, { expose: t, emit: e }) {
    const r = e, l = n, c = m(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-tabsNavigation": !0,
        "d1-tabsNavigation--focus": l.focus,
        "d1-tabsNavigation--divider": l.divider
        // :classes-values [!] System label / Системная метка
      }
    })), o = m(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), i = new tt(
      "d1.tabsNavigation",
      l,
      {
        emits: r,
        classes: c,
        styles: o,
        components: {
          horizontalScroll: et,
          tabItem: st
        }
      }
    ), a = i.render();
    return t(i.expose()), (h, u) => ($(), z(B(a)));
  }
});
export {
  ut as _
};
