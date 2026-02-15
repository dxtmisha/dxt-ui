var x = Object.defineProperty;
var w = (n, t, e) => t in n ? x(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var s = (n, t, e) => w(n, typeof t != "symbol" ? t + "" : t, e);
import { ref as u, computed as d, watch as k, nextTick as m, toRef as F } from "vue";
import { toBinds as f, getRef as v, isSelected as A, toArray as D, isDomRuntime as T, EventItem as $, ListDataRef as L, DesignConstructorAbstract as R } from "@dxtmisha/functional";
import { E as z } from "./EventClickInclude-Co8CpJqL.js";
import { M as E } from "./ModelInclude-BiYm_iCQ.js";
import { A as B } from "./AriaStaticInclude-ZrgMZ2ja.js";
class P {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, e, i, r, o) {
    /**
     * Element of the component.
     *
     * Элемент компонента.
     */
    s(this, "element", u());
    /**
     * HTML element of the component.
     *
     * HTML элемент компонента.
     */
    s(this, "elementHtml", d(() => {
      var t;
      return (t = this.element.value) == null ? void 0 : t.elementHtml;
    }));
    /**
     * Computed bindings for the horizontal scroll/ Вычисляемые привязки для горизонтальной прокрутки
     */
    s(this, "binds", d(
      () => f(
        v(this.extra),
        {
          ref: this.element,
          flush: this.props.horizontalScrollFlush,
          align: this.props.horizontalScrollAlign
        },
        this.props.horizontalScrollAttrs
      )
    ));
    /**
     * Scrolls to the selected element.
     *
     * Прокручивает к выбранному элементу.
     */
    s(this, "toSelected", () => {
      var t, e;
      (e = (t = this.element.value) == null ? void 0 : t.toSelected) == null || e.call(t);
    });
    /**
     * Renders the horizontal scroll component with provided properties and configuration.
     * Returns an array of VNode elements representing the rendered horizontal scroll, or an empty
     * array if the component cannot be rendered.
     *
     * Обрисовывает компонент горизонтальной прокрутки с предоставленными свойствами и конфигурацией.
     * Возвращает массив VNode элементов, представляющих отрисованную горизонтальную прокрутку, или пустой
     * массив, если компонент не может быть отрисованы.
     *
     * @param children content for the default slot/ контент для слота по умолчанию
     * @param props additional properties/ дополнительные свойства
     */
    s(this, "render", (t, e) => {
      var i;
      return this.components ? this.components.render(
        "horizontalScroll",
        {
          ...this.binds.value,
          ...v(e)
        },
        t,
        (i = this.index) != null ? i : "horizontalScroll"
      ) : [];
    });
    this.props = t, this.className = e, this.components = i, this.extra = r, this.index = o;
  }
}
class H {
  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(t) {
    s(this, "item", u());
    s(this, "actualItem", u());
    this.props = t, this.item.value = t.selected, this.actualItem.value = t.selected;
  }
  /**
   * Checks if the value is selected.
   *
   * Проверяет, выбрано ли значение.
   * @param selected value to check/ значение для проверки
   */
  isSelected(t) {
    return A(t, this.actualItem.value);
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
class q {
  /**
   * Constructor
   * @param element main element/ главный элемент
   * @param selected selected value object/ объект значения выделения
   */
  constructor(t, e) {
    /**
     * Current focus value.
     *
     * Текущее значение фокуса.
     */
    s(this, "item", u());
    this.element = t, this.selected = e;
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
    return this.item.value = (t = D(this.selected.actualItem.value)) == null ? void 0 : t[0], this;
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
class M {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element main element/ главный элемент
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param selected selection value object/ объект значения выделения
   */
  constructor(t, e, i, r, o, c) {
    /**
     * Changes the selection state.
     *
     * Изменяет состояние выделения.
     * @param newSelected new selection/ новое выделение
     * @param oldSelected old selection/ старое выделение
     */
    s(this, "go", async (t, e) => {
      await m();
      const i = this.getItem(t), r = this.getItem(e);
      if (i && r) {
        const o = `${this.classDesign}-${this.getItemClassName()}`, c = i.getBoundingClientRect(), a = r.getBoundingClientRect(), l = a.left - c.left, h = `${l}px ${l >= 0 ? "-" : "+"} var(--${o}-gap, 0px)`;
        i.style.setProperty(`--${o}-sys-left`, h), i.style.setProperty(`--${o}-sys-width`, a.width + "px"), this.reset(i);
      }
      requestAnimationFrame(() => {
        this.selected.setActual(t);
      });
    });
    /**
     * Resets the given styles.
     *
     * Сбрасывает данные стили.
     * @param item element/ элемент
     */
    s(this, "reset", (t) => {
      setTimeout(() => {
        t.style.removeProperty(`--${this.className}-sys-left`), t.style.removeProperty(`--${this.className}-sys-width`);
      }, 384);
    });
    this.props = t, this.refs = e, this.element = i, this.classDesign = r, this.className = o, this.selected = c, k(
      this.selected.item,
      (a, l) => this.go(a, l)
    ), m().then(
      () => requestAnimationFrame(
        () => {
          var a, l;
          i.value && (i.value.scrollLeft = (l = (a = this.getItem(this.selected.item.value)) == null ? void 0 : a.offsetLeft) != null ? l : 0);
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
class O {
  /**
   * Constructor
   * @param selected selection management object/ объект управления выделением
   * @param focus focus management object/ объект управления фокусом
   * @param data data list object/ объект списка данных
   */
  constructor(t, e, i) {
    s(this, "event");
    /**
     * Handler for the focus event.
     *
     * Обработчик события фокуса.
     */
    s(this, "onFocus", () => {
      this.start();
    });
    /**
     * Handler for the blur event.
     *
     * Обработчик события потери фокуса.
     */
    s(this, "onBlur", () => {
      this.stop();
    });
    /**
     * Method for tracking keys when a window is open.
     *
     * Метод для отслеживания нажатий при открытом окне.
     * @param event event object/ объект события
     */
    s(this, "on", (t) => {
      if (this.data.getLength())
        switch (t.code || t.key || t.keyCode) {
          case "ArrowLeft":
          case "Left":
          case 37:
            t.preventDefault(), this.prev();
            break;
          case "ArrowRight":
          case "Right":
          case 39:
            t.preventDefault(), this.next();
            break;
          case "Enter":
          case 13:
          case "Space":
          case "Spacebar":
          case " ":
          case 32:
            t.preventDefault(), this.selected.set(this.focus.item.value);
            break;
        }
    });
    this.selected = t, this.focus = e, this.data = i;
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
    T() && (this.event || (this.event = new $(
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
    var e;
    const t = this.getFocus();
    return t && this.focus.set(
      (e = this.data.getIndexPrev(t)) == null ? void 0 : e.index
    ), this;
  }
  /**
   * Moves focus to the next item.
   *
   * Перемещает фокус на следующий элемент.
   */
  next() {
    var e;
    const t = this.getFocus();
    return t && this.focus.set(
      (e = this.data.getIndexNext(t)) == null ? void 0 : e.index
    ), this;
  }
}
class V {
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
  constructor(t, e, i, r, o, c, a, l, h) {
    s(this, "scroll");
    s(this, "selected");
    s(this, "focus");
    s(this, "data");
    s(this, "indicator");
    s(this, "control");
    s(this, "event");
    s(this, "model");
    /**
     * Returns bindings for the element.
     *
     * Возвращает привязки для элемента.
     */
    s(this, "binds", d(() => ({
      tabindex: 0,
      ...this.control.binds,
      ...B.role("tablist")
    })));
    /**
     * Handler for the click event.
     *
     * Обработчик события клика.
     * @param event event object/ объект события
     * @param options additional event options/ дополнительные опции события
     */
    s(this, "onClick", (t, e) => {
      this.selected.set(e == null ? void 0 : e.value), this.event.onClick(t, e);
    });
    this.props = t, this.refs = e, this.element = i, this.classDesign = r, this.className = o, this.components = c, this.slots = a, this.emits = l;
    const {
      EventClickIncludeConstructor: g = z,
      HorizontalScrollIncludeConstructor: p = P,
      ListDataRefConstructor: I = L,
      ModelIncludeConstructor: b = E,
      TabsNavigationControlConstructor: y = O,
      TabsNavigationFocusConstructor: S = q,
      TabsNavigationIndicatorConstructor: C = M,
      TabsNavigationSelectedConstructor: N = H
    } = h != null ? h : {};
    this.scroll = new p(
      this.props,
      this.className,
      this.components
    ), this.selected = new N(this.props), this.focus = new S(
      this.element,
      this.selected
    ), this.data = new I(
      F(this.props, "list"),
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
    ), this.control = new y(
      this.selected,
      this.focus,
      this.data
    ), this.event = new g(
      void 0,
      void 0,
      this.emits
    ), this.model = new b(
      "selected",
      this.emits,
      this.selected.item
    ), this.initSelected();
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
const W = {
  horizontalScrollFlush: !0,
  horizontalScrollAlign: "left"
};
class X extends R {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(e, i, r, o = V) {
    super(
      e,
      i,
      r
    );
    s(this, "item");
    /**
     * Generates a list of elements.
     *
     * Генерирует список элементов.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderList", (e) => {
      const i = [];
      return this.item.data.fullData.value.forEach(
        (r) => i.push(
          this.renderItem(e, r)
        )
      ), i;
    });
    /**
     * Generates an element.
     *
     * Генерирует элемент.
     * @param props data for the transferable property/ данные для передаваемого свойства
     * @param item selected element / выбранный элемент
     */
    s(this, "renderItem", (e, i) => {
      const r = this.item.selected.isSelected(i.index);
      return this.components.renderOne(
        "tabItem",
        f(
          {
            tag: this.props.tag,
            key: i.index
          },
          this.props.itemAttrs,
          i,
          e.binds,
          {
            onClick: this.item.onClick,
            class: {
              [e.classItemSelected]: r
            }
          }
        )
      );
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
    var e;
    return this.item.scroll.render(
      { default: this.renderList },
      {
        ...this.item.binds.value,
        class: (e = this.classes) == null ? void 0 : e.value.main
      }
    );
  }
}
export {
  V as TabsNavigation,
  X as TabsNavigationDesign,
  W as defaultsTabsNavigation
};
