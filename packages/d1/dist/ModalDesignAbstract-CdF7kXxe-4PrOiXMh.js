import { computed as f, h as u } from "vue";
import { toBinds as y, getRef as x, DesignConstructorAbstract as S, getElementId as w } from "@dxtmisha/functional";
import { u as g } from "./BarsInclude-BOEoY-O4-CYODSNy_.js";
import { v as C } from "./WindowInclude-qHcXkLtH-D0NScAjF.js";
var A = Object.defineProperty, D = (o, t, i) => t in o ? A(o, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[t] = i, v = (o, t, i) => D(o, typeof t != "symbol" ? t + "" : t, i);
let k = class {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, i, a, c, e, r) {
    v(this, "is", f(() => !!(!this.props.actionsHide && (this.binds.value.list || this.binds.value.listSecondary)))), v(this, "binds", f(() => {
      var s, n;
      const l = y(
        x(this.extra),
        this.props.actionsAttrs,
        { class: `${this.className}__actions` }
      );
      return {
        ...l,
        list: (s = this.props.actionsList) != null ? s : l.list,
        listSecondary: (n = this.props.actionsSecondary) != null ? n : l.listSecondary,
        onClick: this.onClick
      };
    })), v(this, "render", () => this.components && this.is.value ? this.components.render(
      "actions",
      this.binds.value,
      void 0,
      this.index
    ) : []), v(this, "onClick", (s, n) => {
      var l, d;
      (l = this.emits) == null || l.call(this, "actions", s, n), (d = this.emits) == null || d.call(this, "actionsLite", n);
    }), this.props = t, this.className = i, this.components = a, this.emits = c, this.extra = e, this.index = r;
  }
};
var F = Object.defineProperty, N = (o, t, i) => t in o ? F(o, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[t] = i, h = (o, t, i) => N(o, typeof t != "symbol" ? t + "" : t, i);
class I {
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
   * @param extraWindow additional parameters for WindowInclude/ дополнительные параметры для WindowInclude
   * @param extraBars additional parameters for BarsInclude/ дополнительные параметры для BarsInclude
   * @param extraActions additional parameters for ActionsInclude/ дополнительные параметры для ActionsInclude
   */
  constructor(t, i, a, c, e, r, s, n, l, d, m) {
    h(this, "bars"), h(this, "actions"), h(this, "window"), this.props = t, this.refs = i, this.element = a, this.classDesign = c, this.className = e, this.components = r, this.slots = s, this.emits = n, this.extraWindow = l, this.extraBars = d, this.extraActions = m;
    const p = w(), b = w();
    this.bars = new g(
      t,
      e,
      r,
      n,
      d,
      p,
      b
    ), this.actions = new k(
      t,
      e,
      r,
      n,
      m
    ), this.window = new C(
      t,
      e,
      r,
      n,
      l,
      p,
      b
    );
  }
}
class L extends S {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor window item class/ класс элемента окна
   */
  constructor(t, i, a, c) {
    super(
      t,
      i,
      a
    ), h(this, "item"), h(this, "renderControl", (e) => this.initSlot("control", void 0, e)), h(this, "renderTitle", (e) => {
      var r;
      const s = [];
      return this.item.bars.is.value && s.push(...this.item.bars.render()), this.slots && "title" in this.slots && s.push(
        u(
          "div",
          { class: (r = this.classes) == null ? void 0 : r.value.title },
          this.initSlot("title", void 0, e)
        )
      ), s;
    }), h(this, "renderDefault", (e) => {
      var r, s;
      const n = [];
      return this.slots && "header" in this.slots && n.push(
        u(
          "div",
          { class: (r = this.classes) == null ? void 0 : r.value.header },
          this.initSlot("header", void 0, e)
        )
      ), this.slots && "default" in this.slots && n.push(
        u(
          "div",
          { class: (s = this.classes) == null ? void 0 : s.value.body },
          this.initSlot("default", void 0, e)
        )
      ), n;
    }), h(this, "renderFooter", (e) => {
      var r;
      const s = [];
      return this.item.actions.is.value && s.push(...this.item.actions.render()), this.slots && "footer" in this.slots && s.push(
        u(
          "div",
          { class: (r = this.classes) == null ? void 0 : r.value.footer },
          this.initSlot("footer", void 0, e)
        )
      ), s;
    }), this.item = this.initItem(c), this.init();
  }
  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      ...this.item.window.expose
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
    return this.item.window.render(
      {
        control: this.renderControl,
        title: this.renderTitle,
        default: this.renderDefault,
        footer: this.renderFooter
      },
      y(
        {
          class: (t = this.classes) == null ? void 0 : t.value.main
        },
        this.getAttrs()
      )
    );
  }
}
export {
  I as F,
  L as T
};
