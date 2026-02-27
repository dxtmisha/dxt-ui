var N = Object.defineProperty;
var C = (n, t, s) => t in n ? N(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s;
var e = (n, t, s) => C(n, typeof t != "symbol" ? t + "" : t, s);
import { ref as p, computed as a, watch as I, h as M } from "vue";
import { getRef as m, toBinds as l, getBind as S, isSelected as w, DesignConstructorAbstract as T } from "@dxtmisha/functional";
import { E as k } from "./EventClickInclude-DMbEP-nH.js";
import { M as D } from "./ModelInclude-BiYm_iCQ.js";
import { A as u } from "./AriaStaticInclude-DRHG8ILX.js";
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
  constructor(t, s, o, i, r, h, c) {
    /** Reference to motionAxis element expose/ Ссылка на expose элемента motionAxis */
    e(this, "element", p());
    /** Computed selected element/ Вычисляемый выбранный элемент */
    e(this, "selectedItem", a(() => this.selected ? m(this.selected) : this.props.selected));
    /** Computed bindings for the motionAxis/ Вычисляемые привязки для motionAxis */
    e(this, "binds", a(() => l(
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
    this.props = t, this.className = s, this.components = o, this.emits = i, this.extra = r, this.selected = h, this.index = c;
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
  constructor(t, s, o, i, r) {
    /** Reference to tabsNavigation element expose/ Ссылка на expose элемента tabsNavigation */
    e(this, "element", p());
    /** Computed bindings for the tabsNavigation/ Вычисляемые привязки для tabsNavigation */
    e(this, "binds", a(() => l(
      m(this.extra),
      {
        class: `${this.className}__tabsNavigation`,
        itemAttrs: this.props.tabItemAttrs
      },
      S(this.props.tabs, "list"),
      this.props.tabsNavigationAttrs
    )));
    /**
     * List of generated IDs.
     *
     * Список сгенерированных идентификаторов.
     */
    e(this, "ids", a(() => {
      var t;
      return (t = this.element.value) == null ? void 0 : t.ids;
    }));
    /**
     * Render the TabsNavigation component with slots/
     * Рендер компонента TabsNavigation со слотами
     * @param slotsChildren slots passed to the tabsNavigation/ слоты, передаваемые tabsNavigation
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    e(this, "render", (t, s) => this.components ? this.components.render(
      "tabsNavigation",
      l(
        s,
        this.binds.value,
        { ref: this.element }
      ),
      t,
      this.index
    ) : []);
    this.props = t, this.className = s, this.components = o, this.extra = i, this.index = r;
  }
}
class _ {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   */
  constructor(t, s) {
    e(this, "item", p());
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
  constructor(t, s, o, i, r, h, c, v, d) {
    e(this, "event");
    e(this, "motionAxis");
    e(this, "tabsNavigation");
    e(this, "selected");
    this.props = t, this.refs = s, this.element = o, this.classDesign = i, this.className = r, this.components = h, this.slots = c, this.emits = v;
    const {
      EventClickIncludeConstructor: b = k,
      ModelIncludeConstructor: x = D,
      MotionAxisIncludeConstructor: f = E,
      TabsNavigationIncludeConstructor: g = R,
      TabsSelectedConstructor: A = _
    } = d != null ? d : {};
    this.selected = new A(this.props, this.refs), this.event = new b(void 0, void 0, this.emits), this.tabsNavigation = new g(
      this.props,
      this.className,
      this.components,
      a(() => ({
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
      a(() => String(this.selected.item.value))
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
  constructor(s, o, i, r = y) {
    super(
      s,
      o,
      i
    );
    e(this, "item");
    /**
     * Rendering of slides.
     *
     * Рендеринг слайдов.
     */
    e(this, "slidesRender", () => {
      var s;
      if (this.slots) {
        const o = {};
        for (const i in this.slots) {
          const r = (s = this.item.tabsNavigation.ids.value) == null ? void 0 : s[i];
          o[i] = () => {
            var h;
            return M(
              "div",
              {
                class: (h = this.classes) == null ? void 0 : h.value.slide,
                ...u.role("tabpanel"),
                ...u.labelledby(r)
              },
              this.initSlot(i)
            );
          };
        }
        return o;
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
    return this.item.tabsNavigation.ids.value ? [
      ...this.item.tabsNavigation.render(),
      ...this.item.motionAxis.render(this.slidesRender())
    ] : this.item.tabsNavigation.render();
  }
}
export {
  y as Tabs,
  G as TabsDesign,
  F as defaultsTabs
};
