var l = Object.defineProperty;
var d = (t, s, i) => s in t ? l(t, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[s] = i;
var h = (t, s, i) => d(t, typeof s != "symbol" ? s + "" : s, i);
import { toBinds as m, getBind as u, getRef as r } from "@dxtmisha/functional";
import { a as b } from "./ButtonDesign-De5q40Xf.js";
import { computed as f } from "vue";
class B {
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
  constructor(s, i, e, n, o, p, a, c) {
    this.props = s, this.refs = i, this.element = e, this.classDesign = n, this.className = o, this.components = p, this.slots = a, this.emits = c;
  }
}
const D = {
  tag: "span"
};
class N extends b {
}
class A {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   * @param index index identifier/ идентификатор индекса
   */
  constructor(s, i, e, n, o) {
    /**
     * Computed bindings for the chip/ Вычисляемые привязки для чипа
     */
    h(this, "binds", f(
      () => m(
        this.props.chipAttrs,
        u(
          r(this.props),
          r(this.extra),
          "label"
        )
      )
    ));
    /**
     * Renders the chip component with provided properties and configuration.
     * Returns an array of VNode elements representing the rendered chip, or an empty
     * array if the component cannot be rendered.
     *
     * Отрисовывает компонент чипа с предоставленными свойствами и конфигурацией.
     * Возвращает массив VNode элементов, представляющих отрисованный чип, или пустой
     * массив, если компонент не может быть отрисован.
     *
     * @param props additional properties/ дополнительные свойства
     */
    h(this, "render", (s) => {
      var i;
      return this.components && ("label" in this.binds.value || "icon" in this.binds.value || "iconTrailing" in this.binds.value) ? this.components.render(
        "chip",
        {
          ...this.binds.value,
          ...r(s)
        },
        void 0,
        (i = this.index) != null ? i : "chip"
      ) : [];
    });
    this.props = s, this.className = i, this.components = e, this.extra = n, this.index = o;
  }
}
export {
  B as Chip,
  N as ChipDesign,
  A as ChipInclude,
  D as defaultsChip
};
