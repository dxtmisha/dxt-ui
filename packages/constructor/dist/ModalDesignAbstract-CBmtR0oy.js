var b = Object.defineProperty;
var p = (n, i, t) => i in n ? b(n, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[i] = t;
var o = (n, i, t) => p(n, typeof i != "symbol" ? i + "" : i, t);
import { h as d } from "vue";
import { getElementId as v, DesignConstructorAbstract as I, toBinds as A } from "@dxtmisha/functional";
import { B as S } from "./BarsInclude-BOEoY-O4.js";
import { A as g } from "./ActionsInclude-H5ZWeXJj.js";
import { W as D } from "./WindowInclude-D6g9qiAt.js";
class F {
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
  constructor(i, t, s, e, r, l, w, h, a, c, u) {
    o(this, "bars");
    o(this, "actions");
    o(this, "window");
    this.props = i, this.refs = t, this.element = s, this.classDesign = e, this.className = r, this.components = l, this.slots = w, this.emits = h, this.extraWindow = a, this.extraBars = c, this.extraActions = u;
    const f = v(), m = v();
    this.bars = new S(
      i,
      r,
      l,
      h,
      c,
      f,
      m
    ), this.actions = new g(
      i,
      r,
      l,
      h,
      u
    ), this.window = new D(
      i,
      r,
      l,
      h,
      a,
      f,
      m
    );
  }
}
class T extends I {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor window item class/ класс элемента окна
   */
  constructor(t, s, e, r) {
    super(
      t,
      s,
      e
    );
    o(this, "item");
    /**
     * Generates data for control.<br>
     * Генерирует данные для контроля.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    o(this, "renderControl", (t) => this.initSlot("control", void 0, t));
    /**
     * Generates data for the header.
     *
     * Генерирует данные для заголовка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    o(this, "renderTitle", (t) => {
      var e;
      const s = [];
      return this.item.bars.is.value && s.push(...this.item.bars.render()), this.slots && "title" in this.slots && s.push(
        d(
          "div",
          { class: (e = this.classes) == null ? void 0 : e.value.title },
          this.initSlot("title", void 0, t)
        )
      ), s;
    });
    /**
     * Generates bodies.
     *
     * Генерирует тела.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    o(this, "renderDefault", (t) => {
      var e, r;
      const s = [];
      return this.slots && "header" in this.slots && s.push(
        d(
          "div",
          { class: (e = this.classes) == null ? void 0 : e.value.header },
          this.initSlot("header", void 0, t)
        )
      ), this.slots && "default" in this.slots && s.push(
        d(
          "div",
          { class: (r = this.classes) == null ? void 0 : r.value.body },
          this.initSlot("default", void 0, t)
        )
      ), s;
    });
    /**
     * Generates data for the required part.
     *
     * Генерирует данные для нужной части.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    o(this, "renderFooter", (t) => {
      var e;
      const s = [];
      return this.item.actions.is.value && s.push(...this.item.actions.render()), this.slots && "footer" in this.slots && s.push(
        d(
          "div",
          { class: (e = this.classes) == null ? void 0 : e.value.footer },
          this.initSlot("footer", void 0, t)
        )
      ), s;
    });
    this.item = this.initItem(r), this.init();
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
      A(
        {
          class: (t = this.classes) == null ? void 0 : t.value.main
        },
        this.getAttrs()
      )
    );
  }
}
export {
  F as M,
  T as a
};
