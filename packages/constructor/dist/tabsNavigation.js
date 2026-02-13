var S = Object.defineProperty;
var b = (r, t, e) => t in r ? S(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var i = (r, t, e) => b(r, typeof t != "symbol" ? t + "" : t, e);
import { ref as m, computed as d, watch as w, nextTick as u, toRef as x } from "vue";
import { toBinds as p, getRef as v, isSelected as k, ListDataRef as D, DesignConstructorAbstract as $ } from "@dxtmisha/functional";
import { E as T } from "./EventClickInclude-Co8CpJqL.js";
import { M as A } from "./ModelInclude-BiYm_iCQ.js";
class L {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, e, s, l, n) {
    /**
     * Element of the component.
     *
     * Элемент компонента.
     */
    i(this, "element", m());
    /**
     * HTML element of the component.
     *
     * HTML элемент компонента.
     */
    i(this, "elementHtml", d(() => {
      var t;
      return (t = this.element.value) == null ? void 0 : t.elementHtml;
    }));
    /**
     * Computed bindings for the horizontal scroll/ Вычисляемые привязки для горизонтальной прокрутки
     */
    i(this, "binds", d(
      () => p(
        v(this.extra),
        {
          ref: this.element,
          flush: this.props.horizontalScrollFlush
        },
        this.props.horizontalScrollAttrs
      )
    ));
    /**
     * Scrolls to the selected element.
     *
     * Прокручивает к выбранному элементу.
     */
    i(this, "toSelected", () => {
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
    i(this, "render", (t, e) => {
      var s;
      return this.components ? this.components.render(
        "horizontalScroll",
        {
          ...this.binds.value,
          ...v(e)
        },
        t,
        (s = this.index) != null ? s : "horizontalScroll"
      ) : [];
    });
    this.props = t, this.className = e, this.components = s, this.extra = l, this.index = n;
  }
}
class R {
  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(t) {
    i(this, "item", m());
    i(this, "actualItem", m());
    this.props = t, this.item.value = t.selected, this.actualItem.value = t.selected;
  }
  /**
   * Checks if the value is selected.
   *
   * Проверяет, выбрано ли значение.
   * @param selected value to check/ значение для проверки
   */
  isSelected(t) {
    return k(t, this.actualItem.value);
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
class z {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element main element/ главный элемент
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param selected selection value object/ объект значения выделения
   */
  constructor(t, e, s, l, n, c) {
    /**
     * Changes the selection state.
     *
     * Изменяет состояние выделения.
     * @param newSelected new selection/ новое выделение
     * @param oldSelected old selection/ старое выделение
     */
    i(this, "go", async (t, e) => {
      await u();
      const s = this.getItem(t), l = this.getItem(e);
      if (s && l) {
        const n = `${this.classDesign}-${this.getItemClassName()}`, c = s.getBoundingClientRect(), a = l.getBoundingClientRect(), o = a.left - c.left, h = `${o}px ${o >= 0 ? "-" : "+"} var(--${n}-gap, 0px)`;
        s.style.setProperty(`--${n}-sys-left`, h), s.style.setProperty(`--${n}-sys-width`, a.width + "px");
      }
      requestAnimationFrame(() => this.selected.setActual(t));
    });
    /**
     * Resets the given styles.
     *
     * Сбрасывает данные стили.
     * @param item element/ элемент
     */
    i(this, "reset", (t) => {
      setTimeout(() => {
        t.style.removeProperty(`--${this.className}-sys-left`), t.style.removeProperty(`--${this.className}-sys-width`);
      }, 384);
    });
    this.props = t, this.refs = e, this.element = s, this.classDesign = l, this.className = n, this.selected = c, w(
      this.selected.item,
      (a, o) => this.go(a, o)
    ), u().then(
      () => requestAnimationFrame(
        () => {
          var a, o;
          console.log("element.value", s.value), s.value && (s.value.scrollLeft = (o = (a = this.getItem(this.selected.item.value)) == null ? void 0 : a.offsetLeft) != null ? o : 0);
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
class E {
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
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.HorizontalScrollIncludeConstructor class for working with horizontal scroll/ класс для работы с горизонтальной прокруткой
   * @param constructors.ListDataRefConstructor class for working with data list/ класс для работы со списком данных
   * @param constructors.TabsNavigationIndicatorConstructor class for working with indicator/ класс для работы с индикатором
   * @param constructors.TabsNavigationSelectedConstructor class for working with selected/ класс для работы с выбранным
   */
  constructor(t, e, s, l, n, c, a, o, h) {
    i(this, "scroll");
    i(this, "data");
    i(this, "selected");
    i(this, "indicator");
    i(this, "event");
    i(this, "model");
    i(this, "onClick", (t, e) => {
      this.selected.set(e == null ? void 0 : e.value), this.event.onClick(t, e);
    });
    this.props = t, this.refs = e, this.element = s, this.classDesign = l, this.className = n, this.components = c, this.slots = a, this.emits = o;
    const {
      EventClickIncludeConstructor: f = T,
      HorizontalScrollIncludeConstructor: g = L,
      ListDataRefConstructor: I = D,
      ModelIncludeConstructor: C = A,
      TabsNavigationIndicatorConstructor: N = z,
      TabsNavigationSelectedConstructor: y = R
    } = h != null ? h : {};
    this.scroll = new g(
      this.props,
      this.className,
      this.components
    ), this.selected = new y(this.props), this.indicator = new N(
      this.props,
      this.refs,
      this.scroll.elementHtml,
      this.classDesign,
      this.className,
      this.selected
    ), this.data = new I(
      x(this.props, "list"),
      void 0,
      void 0,
      void 0,
      void 0,
      this.selected.item,
      this.refs.keyValue,
      this.refs.keyLabel
    ), this.event = new f(
      void 0,
      void 0,
      this.emits
    ), this.model = new C(
      "selected",
      this.emits,
      this.selected.item
    );
  }
}
const M = {};
class O extends $ {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(e, s, l, n = E) {
    super(
      e,
      s,
      l
    );
    i(this, "item");
    i(this, "renderList", (e) => {
      const s = [];
      return this.item.data.fullData.value.forEach(
        (l) => s.push(
          this.renderItem(e, l)
        )
      ), s;
    });
    /**
     * Generates an element.
     *
     * Генерирует элемент.
     * @param props data for the transferable property/ данные для передаваемого свойства
     * @param item selected element / выбранный элемент
     */
    i(this, "renderItem", (e, s) => {
      const l = this.item.selected.isSelected(s.index);
      return this.components.renderOne(
        "tabItem",
        p(
          {
            tag: this.props.tag,
            key: s.index
          },
          this.props.itemAttrs,
          s,
          e.binds,
          {
            onClick: this.item.onClick,
            class: {
              [e.classItemSelected]: l
            },
            selected: l
          }
        )
      );
    });
    this.item = new n(
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
      { class: (e = this.classes) == null ? void 0 : e.value.main }
    );
  }
}
export {
  E as TabsNavigation,
  O as TabsNavigationDesign,
  M as defaultsTabsNavigation
};
