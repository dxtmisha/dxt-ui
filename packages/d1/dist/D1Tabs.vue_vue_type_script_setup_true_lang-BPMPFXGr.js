import { computed as m, ref as v, watch as N, h as _, defineComponent as C, openBlock as y, createBlock as k, unref as w, mergeDefaults as S } from "vue";
import { DesignConstructorAbstract as D, isSelected as I, getRef as p, toBinds as d, getBind as T } from "@dxtmisha/functional";
import { m as M } from "./D1Icon.vue_vue_type_script_setup_true_lang-BINcl8rE.js";
import { V as R } from "./ModelInclude-BiYm_iCQ-BvlyUUtY.js";
import { l as b } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { _ as B } from "./D1TabsNavigation.vue_vue_type_script_setup_true_lang-DLr4clGn.js";
import { _ as $ } from "./D1MotionAxis.vue_vue_type_script_setup_true_lang-Bmz_LwGt.js";
var E = Object.defineProperty, F = (i, t, s) => t in i ? E(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s, e = (i, t, s) => F(i, typeof t != "symbol" ? t + "" : t, s);
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
  constructor(t, s, o, c, r, a, n) {
    e(this, "element", v()), e(this, "selectedItem", m(() => this.selected ? p(this.selected) : this.props.selected)), e(this, "binds", m(() => d(
      p(this.extra),
      {
        class: `${this.className}__motionAxis`
      },
      this.props.motionAxisAttrs
    ))), e(this, "render", (l, h) => this.components ? this.components.render(
      "motionAxis",
      {
        ...d(
          h,
          this.binds.value,
          { selected: this.selectedItem.value }
        ),
        ref: this.element,
        onMotionAxis: this.onMotionAxis
      },
      l,
      this.index
    ) : []), e(this, "onMotionAxis", (l) => {
      var h;
      (h = this.emits) == null || h.call(this, "motionAxis", l);
    }), this.props = t, this.className = s, this.components = o, this.emits = c, this.extra = r, this.selected = a, this.index = n;
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
  constructor(t, s, o, c, r) {
    e(this, "binds", m(() => d(
      p(this.extra),
      {
        class: `${this.className}__tabsNavigation`,
        itemAttrs: this.props.tabItemAttrs
      },
      T(this.props.tabs, "list"),
      this.props.tabsNavigationAttrs
    ))), e(this, "render", (a, n) => this.components ? this.components.render(
      "tabsNavigation",
      {
        ...d(
          n,
          this.binds.value
        )
      },
      a,
      this.index
    ) : []), this.props = t, this.className = s, this.components = o, this.extra = c, this.index = r;
  }
}
class G {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   */
  constructor(t, s) {
    e(this, "item", v()), e(this, "set", (o) => {
      this.item.value = o;
    }), e(this, "update", () => {
      this.is(this.props.selected) || this.set(this.props.selected);
    }), this.props = t, this.refs = s, this.item.value = t.selected, N([this.refs.selected], this.update);
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
  constructor(t, s, o, c, r, a, n, l, h) {
    e(this, "event"), e(this, "motionAxis"), e(this, "tabsNavigation"), e(this, "selected"), this.props = t, this.refs = s, this.element = o, this.classDesign = c, this.className = r, this.components = a, this.slots = n, this.emits = l;
    const {
      EventClickIncludeConstructor: u = M,
      ModelIncludeConstructor: x = R,
      MotionAxisIncludeConstructor: f = U,
      TabsNavigationIncludeConstructor: A = j,
      TabsSelectedConstructor: g = G
    } = h != null ? h : {};
    this.selected = new g(this.props, this.refs), this.event = new u(void 0, void 0, this.emits), this.tabsNavigation = new A(
      this.props,
      this.className,
      this.components,
      m(() => ({
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
      m(() => String(this.selected.item.value))
    ), new x("selected", this.emits, this.selected.item);
  }
}
const O = {};
class P extends D {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(t, s, o, c = L) {
    super(
      t,
      s,
      o
    ), e(this, "item"), e(this, "slidesRender", () => {
      if (this.slots) {
        const r = {};
        for (const a in this.slots)
          r[a] = () => {
            var n;
            return _(
              "div",
              {
                class: (n = this.classes) == null ? void 0 : n.value.slide,
                ...b.role("tabpanel"),
                ...b.labelledby("")
              },
              this.initSlot(a)
            );
          };
        return r;
      }
    }), this.item = new c(
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
const V = B, q = $, z = {
  ...O
}, Z = /* @__PURE__ */ C({
  name: "D1Tabs",
  __name: "D1Tabs",
  props: /* @__PURE__ */ S({
    tabs: {},
    tabItemAttrs: {},
    tabsNavigationAttrs: {},
    selected: {},
    motionAxisAttrs: {},
    modelSelected: {},
    "onUpdate:selected": { type: Function },
    "onUpdate:modelSelected": { type: Function }
  }, z),
  emits: ["click", "clickLite", "update:selected", "update:modelSelected", "motionAxis"],
  setup(i, { expose: t, emit: s }) {
    const o = s, c = i, r = m(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-tabs": !0
        // :classes-values [!] System label / Системная метка
      }
    })), a = m(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new P(
      "d1.tabs",
      c,
      {
        emits: o,
        classes: r,
        styles: a,
        components: {
          tabsNavigation: V,
          motionAxis: q
        }
      }
    ), l = n.render();
    return t(n.expose()), (h, u) => (y(), k(w(l)));
  }
});
export {
  Z as _
};
