import { computed as l } from "vue";
import "@dxtmisha/functional";
import { M as d, a as g } from "./ModalDesignAbstract-CBmtR0oy.js";
const f = {
  barsBackHide: !0,
  // :default [!] System label / Системная метка
  imagePosition: "top"
};
class m extends d {
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
   */
  constructor(t, s, i, e, a, o, h, n) {
    super(
      t,
      s,
      i,
      e,
      a,
      o,
      h,
      n,
      l(() => ({
        open: t.open,
        image: t.image,
        adaptive: "modal",
        imagePosition: t.imagePosition,
        closeButton: t.barsBackHide
      }))
    ), this.props = t, this.refs = s, this.element = i, this.classDesign = e, this.className = a, this.components = o, this.slots = h, this.emits = n;
  }
}
class M extends g {
  initItem(t) {
    return new (t != null ? t : m)(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    );
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
      title: this.getSubClass("title"),
      header: this.getSubClass("header"),
      body: this.getSubClass("body"),
      footer: this.getSubClass("footer")
    };
  }
}
export {
  m as Modal,
  M as ModalDesign,
  f as defaultsModal
};
