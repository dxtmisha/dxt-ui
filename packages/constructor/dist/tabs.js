var N = Object.defineProperty;
var C = (i, t, s) => t in i ? N(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var e = (i, t, s) => C(i, typeof t != "symbol" ? t + "" : t, s);
import { ref as u, computed as h, watch as I, h as M } from "vue";
import { getRef as m, toBinds as l, getBind as S, isSelected as w, DesignConstructorAbstract as T } from "@dxtmisha/functional";
import { E as k } from "./EventClickInclude-Co8CpJqL.js";
import { M as D } from "./ModelInclude-BiYm_iCQ.js";
import { A as p } from "./AriaStaticInclude-DRHG8ILX.js";
class E {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param selected selected element/ выбранный элемент
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, s, n, o, r, a, c) {
    /** Reference to motionAxis element expose/ Ссылка на expose элемента motionAxis */
    e(this, "element", u());
    /** Computed selected element/ Вычисляемый выбранный элемент */
    e(this, "selectedItem", h(() => this.selected ? m(this.selected) : this.props.selected));
    /** Computed bindings for the motionAxis/ Вычисляемые привязки для motionAxis */
    e(this, "binds", h(() => l(
      m(this.extra),
      {
        class: `${this.className}__motionAxis`
      },
      this.props.motionAxisAttrs
    )));
    /**
     * Render the MotionAxis component with slots/
     * Рендер компонента MotionAxis со слотами
     * @param slotsChildren slots passed to the motionAxis/ слоты, передаваемые motionAxis
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    e(this, "render", (t, s) => this.components ? this.components.render(
      "motionAxis",
      {
        ...l(
          s,
          this.binds.value,
          { selected: this.selectedItem.value }
        ),
        ref: this.element,
        onMotionAxis: this.onMotionAxis
      },
      t,
      this.index
    ) : []);
    /**
     * Emits 'motionAxis' event upward/
     * Поднимает событие 'motionAxis' наверх
     * @param options event payload/ параметры события
     */
    e(this, "onMotionAxis", (t) => {
      var s;
      (s = this.emits) == null || s.call(this, "motionAxis", t);
    });
    this.props = t, this.className = s, this.components = n, this.emits = o, this.extra = r, this.selected = a, this.index = c;
  }
}
class R {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, s, n, o, r) {
    /** Computed bindings for the tabsNavigation/ Вычисляемые привязки для tabsNavigation */
    e(this, "binds", h(() => l(
      m(this.extra),
      {
        class: `${this.className}__tabsNavigation`,
        itemAttrs: this.props.tabItemAttrs
      },
      S(this.props.tabs, "list"),
      this.props.tabsNavigationAttrs
    )));
    /**
     * Render the TabsNavigation component with slots/
     * Рендер компонента TabsNavigation со слотами
     * @param slotsChildren slots passed to the tabsNavigation/ слоты, передаваемые tabsNavigation
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    e(this, "render", (t, s) => this.components ? this.components.render(
      "tabsNavigation",
      {
        ...l(
          s,
          this.binds.value
        )
      },
      t,
      this.index
    ) : []);
    this.props = t, this.className = s, this.components = n, this.extra = o, this.index = r;
  }
}
class _ {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   */
  constructor(t, s) {
    e(this, "item", u());
    /**
     * Sets the selected value.
     *
     * Устанавливает выбранное значение.
     * @param selected selected value/ выбранное значение
     */
    e(this, "set", (t) => {
      this.item.value = t;
    });
    /**
     * Updates the selected value.
     *
     * Обновляет выбранное значение.
     */
    e(this, "update", () => {
      this.is(this.props.selected) || this.set(this.props.selected);
    });
    this.props = t, this.refs = s, this.item.value = t.selected, I([this.refs.selected], this.update);
  }
  /**
   * Checks if the value is selected.
   *
   * Проверяет, выбрано ли значение.
   * @param selected value to check/ значение для проверки
   */
  is(t) {
    return w(t, this.item.value);
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
   * @param constructors object with classes/ объект с классами
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
   * @param constructors.MotionAxisIncludeConstructor class for working with motion axis/ класс для работы с осью движения
   * @param constructors.TabsNavigationIncludeConstructor class for working with tabs navigation/ класс для работы с навигацией вкладок
   * @param constructors.TabsSelectedConstructor class for working with selected/ класс для работы с выбранным
   */
  constructor(t, s, n, o, r, a, c, v, d) {
    e(this, "event");
    e(this, "motionAxis");
    e(this, "tabsNavigation");
    e(this, "selected");
    this.props = t, this.refs = s, this.element = n, this.classDesign = o, this.className = r, this.components = a, this.slots = c, this.emits = v;
    const {
      EventClickIncludeConstructor: b = k,
      ModelIncludeConstructor: x = D,
      MotionAxisIncludeConstructor: f = E,
      TabsNavigationIncludeConstructor: A = R,
      TabsSelectedConstructor: g = _
    } = d != null ? d : {};
    this.selected = new g(this.props, this.refs), this.event = new b(void 0, void 0, this.emits), this.tabsNavigation = new A(
      this.props,
      this.className,
      this.components,
      h(() => ({
        selected: this.selected.item.value,
        onClick: this.event.onClick,
        "onUpdate:selected": this.selected.set
      }))
    ), this.motionAxis = new f(
      this.props,
      this.className,
      this.components,
      this.emits,
      void 0,
      h(() => String(this.selected.item.value))
    ), new x("selected", this.emits, this.selected.item);
  }
}
const F = {};
class G extends T {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(s, n, o, r = y) {
    super(
      s,
      n,
      o
    );
    e(this, "item");
    /**
     * Rendering of slides.
     *
     * Рендеринг слайдов.
     */
    e(this, "slidesRender", () => {
      if (this.slots) {
        const s = {};
        for (const n in this.slots)
          s[n] = () => {
            var o;
            return M(
              "div",
              {
                class: (o = this.classes) == null ? void 0 : o.value.slide,
                ...p.role("tabpanel"),
                ...p.labelledby("")
              },
              this.initSlot(n)
            );
          };
        return s;
      }
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
      main: {},
      // :classes [!] System label / Системная метка
      slide: this.getSubClass("slide")
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
    return [
      ...this.item.tabsNavigation.render(),
      ...this.item.motionAxis.render(this.slidesRender())
    ];
  }
}
export {
  y as Tabs,
  G as TabsDesign,
  F as defaultsTabs
};
