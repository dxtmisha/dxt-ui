var b = Object.defineProperty;
var w = (o, i, t) => i in o ? b(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var r = (o, i, t) => w(o, typeof i != "symbol" ? i + "" : i, t);
import { computed as p, h as a } from "vue";
import { getRef as A, DesignConstructorAbstract as D, toBinds as I } from "@dxtmisha/functional";
import { B as S } from "./BarsInclude-IM3Gdslg.js";
import { A as g } from "./ActionsInclude-H5ZWeXJj.js";
import { W as x } from "./WindowInclude-Is5RhGxt.js";
class T {
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
  constructor(i, t, s, e, n, l, v, h, d, c, u) {
    r(this, "bars");
    r(this, "actions");
    r(this, "window");
    this.props = i, this.refs = t, this.element = s, this.classDesign = e, this.className = n, this.components = l, this.slots = v, this.emits = h, this.extraWindow = d, this.extraBars = c, this.extraActions = u, this.bars = new S(
      i,
      n,
      l,
      h,
      c
    ), this.actions = new g(
      i,
      n,
      l,
      h,
      u
    ), this.window = new x(
      i,
      n,
      l,
      h,
      p(() => {
        var f, m;
        return {
          ...A(d),
          ariaLabelledby: (f = this.bars.element.value) == null ? void 0 : f.labelId,
          ariaDescribedby: (m = this.bars.element.value) == null ? void 0 : m.descriptionId
        };
      })
    );
  }
}
class W extends D {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, s, e) {
    super(
      t,
      s,
      e
    );
    r(this, "item");
    /**
     * Generates data for control.<br>
     * Генерирует данные для контроля.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    r(this, "renderControl", (t) => this.initSlot("control", void 0, t));
    /**
     * Generates data for the header.
     *
     * Генерирует данные для заголовка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    r(this, "renderTitle", (t) => {
      var e;
      const s = [];
      return this.item.bars.is.value && s.push(...this.item.bars.render()), this.slots && "title" in this.slots && s.push(
        a(
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
    r(this, "renderDefault", (t) => {
      var e, n;
      const s = [];
      return this.slots && "header" in this.slots && s.push(
        a(
          "div",
          { class: (e = this.classes) == null ? void 0 : e.value.header },
          this.initSlot("header", void 0, t)
        )
      ), this.slots && "default" in this.slots && s.push(
        a(
          "div",
          { class: (n = this.classes) == null ? void 0 : n.value.body },
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
    r(this, "renderFooter", (t) => {
      var e;
      const s = [];
      return this.item.actions.is.value && s.push(...this.item.actions.render()), this.slots && "footer" in this.slots && s.push(
        a(
          "div",
          { class: (e = this.classes) == null ? void 0 : e.value.footer },
          this.initSlot("footer", void 0, t)
        )
      ), s;
    });
    this.item = this.initItem(), this.init();
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
      I(
        {
          class: (t = this.classes) == null ? void 0 : t.value.main
        },
        this.getAttrs()
      )
    );
  }
}
export {
  T as M,
  W as a
};
