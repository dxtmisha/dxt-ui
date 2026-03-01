import { computed as m, ref as u, watch as N, h as C, defineComponent as D, openBlock as _, createBlock as y, unref as k, mergeDefaults as w } from "vue";
import { DesignConstructorAbstract as S, isSelected as I, getRef as p, toBinds as d, getBind as T } from "@dxtmisha/functional";
import { g as M } from "./D1Icon.vue_vue_type_script_setup_true_lang-Cs247ZwJ.js";
import { V as R } from "./ModelInclude-BiYm_iCQ-BvlyUUtY.js";
import { l as b } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { D as B } from "./index-CrPo9kEE.js";
import { D as $ } from "./index-DvBKCMWu.js";
var E = Object.defineProperty, F = (o, t, e) => t in o ? E(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, s = (o, t, e) => F(o, typeof t != "symbol" ? t + "" : t, e);
class U {
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
  constructor(t, e, r, h, l, i, n) {
    s(this, "element", u()), s(this, "selectedItem", m(() => this.selected ? p(this.selected) : this.props.selected)), s(this, "binds", m(() => d(
      p(this.extra),
      {
        class: `${this.className}__motionAxis`
      },
      this.props.motionAxisAttrs
    ))), s(this, "render", (c, a) => this.components ? this.components.render(
      "motionAxis",
      {
        ...d(
          a,
          this.binds.value,
          { selected: this.selectedItem.value }
        ),
        ref: this.element,
        onMotionAxis: this.onMotionAxis
      },
      c,
      this.index
    ) : []), s(this, "onMotionAxis", (c) => {
      var a;
      (a = this.emits) == null || a.call(this, "motionAxis", c);
    }), this.props = t, this.className = e, this.components = r, this.emits = h, this.extra = l, this.selected = i, this.index = n;
  }
}
class j {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, e, r, h, l) {
    s(this, "element", u()), s(this, "binds", m(() => d(
      p(this.extra),
      {
        class: `${this.className}__tabsNavigation`,
        itemAttrs: this.props.tabItemAttrs
      },
      T(this.props.tabs, "list"),
      this.props.tabsNavigationAttrs
    ))), s(this, "ids", m(() => {
      var i;
      return (i = this.element.value) == null ? void 0 : i.ids;
    })), s(this, "render", (i, n) => this.components ? this.components.render(
      "tabsNavigation",
      d(
        n,
        this.binds.value,
        { ref: this.element }
      ),
      i,
      this.index
    ) : []), this.props = t, this.className = e, this.components = r, this.extra = h, this.index = l;
  }
}
class G {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   */
  constructor(t, e) {
    s(this, "item", u()), s(this, "set", (r) => {
      this.item.value = r;
    }), s(this, "update", () => {
      this.is(this.props.selected) || this.set(this.props.selected);
    }), this.props = t, this.refs = e, this.item.value = t.selected, N([this.refs.selected], this.update);
  }
  /**
   * Checks if the value is selected.
   *
   * Проверяет, выбрано ли значение.
   * @param selected value to check/ значение для проверки
   */
  is(t) {
    return I(t, this.item.value);
  }
}
class L {
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
  constructor(t, e, r, h, l, i, n, c, a) {
    s(this, "event"), s(this, "motionAxis"), s(this, "tabsNavigation"), s(this, "selected"), this.props = t, this.refs = e, this.element = r, this.classDesign = h, this.className = l, this.components = i, this.slots = n, this.emits = c;
    const {
      EventClickIncludeConstructor: v = M,
      ModelIncludeConstructor: x = R,
      MotionAxisIncludeConstructor: g = U,
      TabsNavigationIncludeConstructor: f = j,
      TabsSelectedConstructor: A = G
    } = a != null ? a : {};
    this.selected = new A(this.props, this.refs), this.event = new v(void 0, void 0, this.emits), this.tabsNavigation = new f(
      this.props,
      this.className,
      this.components,
      m(() => ({
        selected: this.selected.item.value,
        onClick: this.event.onClick,
        "onUpdate:selected": this.selected.set
      }))
    ), this.motionAxis = new g(
      this.props,
      this.className,
      this.components,
      this.emits,
      void 0,
      m(() => String(this.selected.item.value))
    ), new x("selected", this.emits, this.selected.item);
  }
}
const O = {};
class P extends S {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(t, e, r, h = L) {
    super(
      t,
      e,
      r
    ), s(this, "item"), s(this, "slidesRender", () => {
      var l;
      if (this.slots) {
        const i = {};
        for (const n in this.slots) {
          const c = (l = this.item.tabsNavigation.ids.value) == null ? void 0 : l[n];
          i[n] = () => {
            var a;
            return C(
              "div",
              {
                class: (a = this.classes) == null ? void 0 : a.value.slide,
                ...b.role("tabpanel"),
                ...b.labelledby(c)
              },
              this.initSlot(n)
            );
          };
        }
        return i;
      }
    }), this.item = new h(
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
const V = {
  ...O
}, q = /* @__PURE__ */ D({
  name: "D1Tabs",
  __name: "D1Tabs",
  props: /* @__PURE__ */ w({
    tabs: {},
    tabItemAttrs: {},
    tabsNavigationAttrs: {},
    selected: {},
    motionAxisAttrs: {},
    modelSelected: {},
    "onUpdate:selected": { type: Function },
    "onUpdate:modelSelected": { type: Function }
  }, V),
  emits: ["click", "clickLite", "update:selected", "update:modelSelected", "motionAxis"],
  setup(o, { expose: t, emit: e }) {
    const r = e, h = o, l = m(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-tabs": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = m(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new P(
      "d1.tabs",
      h,
      {
        emits: r,
        classes: l,
        styles: i,
        components: {
          tabsNavigation: B,
          motionAxis: $
        }
      }
    ), c = n.render();
    return t(n.expose()), (a, v) => (_(), y(k(c)));
  }
}), Y = q;
export {
  Y as D1Tabs
};
