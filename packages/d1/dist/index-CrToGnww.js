import { h, defineComponent as c, computed as u, openBlock as v, createBlock as f, unref as g, mergeDefaults as D } from "vue";
import { DesignConstructorAbstract as b } from "@dxtmisha/functional";
import { u as y } from "./ListGroupOpen-Bl_HIQoV-DiTsTNMG.js";
import { l as T } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { D as G } from "./index-DvM8ec2g.js";
var L = Object.defineProperty, C = (t, s, e) => s in t ? L(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e, n = (t, s, e) => C(t, typeof s != "symbol" ? s + "" : s, e);
class x {
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
   * @param constructors.ListGroupOpenConstructor class for working with list group open/ класс для работы с открытием группы списка
   */
  constructor(s, e, a, o, i, r, l, p, d) {
    n(this, "open"), n(this, "transformBinds", () => ({
      autoClose: !1,
      section: !0,
      adaptive: "planeAlways",
      onTransformLite: this.open.onOpen
    })), this.props = s, this.refs = e, this.element = a, this.classDesign = o, this.className = i, this.components = r, this.slots = l, this.emits = p;
    const {
      ListGroupOpenConstructor: m = y
    } = d != null ? d : {};
    this.open = new m(this.props);
  }
}
const B = {};
class _ extends b {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(s, e, a, o = x) {
    super(
      s,
      e,
      a
    ), n(this, "item"), n(this, "renderTransform", () => this.components.render(
      "motionTransform",
      {
        ...this.item.transformBinds(),
        open: this.item.open.is.value
      },
      {
        head: this.renderHead,
        body: this.renderList
      }
    )), n(this, "renderHead", (i) => {
      var r;
      return h(
        "div",
        {
          class: (r = this.classes) == null ? void 0 : r.value.head
        },
        this.initSlot(
          "head",
          void 0,
          {
            open: this.item.open.is.value,
            ...i.binds
          }
        )
      );
    }), n(this, "renderList", () => {
      var i;
      return h(
        "div",
        {
          class: (i = this.classes) == null ? void 0 : i.value.list
        },
        this.initSlot("list")
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
      open: this.item.open.is
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
      head: this.getSubClass("head"),
      list: this.getSubClass("list")
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
    var s;
    return h(
      "div",
      {
        ...this.getAttrs(),
        class: (s = this.classes) == null ? void 0 : s.value.main,
        "data-open": this.item.open.is.value ? "open" : "close",
        "data-divider": this.props.divider ? "divider" : void 0,
        ...T.role("group")
      },
      this.renderTransform()
    );
  }
}
const w = {
  ...B
}, S = /* @__PURE__ */ c({
  name: "D1ListGroup",
  __name: "D1ListGroup",
  props: /* @__PURE__ */ D({
    divider: { type: Boolean },
    open: { type: Boolean }
  }, w),
  setup(t, { expose: s, emit: e }) {
    const a = e, o = t, i = u(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-listGroup": !0,
        "d1-listGroup--open": o.open,
        "d1-listGroup--divider": o.divider
        // :classes-values [!] System label / Системная метка
      }
    })), r = u(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), l = new _(
      "d1.listGroup",
      o,
      {
        emits: a,
        classes: i,
        styles: r,
        components: {
          motionTransform: G
        }
      }
    ), p = l.render();
    return s(l.expose()), (d, m) => (v(), f(g(p)));
  }
}), j = S;
export {
  j as D
};
