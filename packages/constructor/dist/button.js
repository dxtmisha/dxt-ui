var a = Object.defineProperty;
var d = (i, t, s) => t in i ? a(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var n = (i, t, s) => d(i, typeof t != "symbol" ? t + "" : t, s);
import { B as g, a as A } from "./ButtonDesign-D2FFTD2Z.js";
import { computed as h } from "vue";
import { toBinds as p, getBind as l, getRef as o } from "@dxtmisha/functional";
const B = {};
class f {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, s, e, r, u) {
    /**
     * Computed bindings for the button/ Вычисляемые привязки для кнопки
     */
    n(this, "binds", h(
      () => p(
        this.props.buttonAttrs,
        l(
          o(this.props),
          o(this.extra),
          "label"
        )
      )
    ));
    /**
     * Renders the button component with provided properties and configuration.
     * Returns an array of VNode elements representing the rendered button, or an empty
     * array if the component cannot be rendered.
     *
     * Обрисовывает компонент кнопки с предоставленными свойствами и конфигурацией.
     * Возвращает массив VNode элементов, представляющих отрисованную кнопку, или пустой
     * массив, если компонент не может быть отрисованы.
     *
     * @param props additional properties/ дополнительные свойства
     */
    n(this, "render", (t) => {
      var s;
      return this.components && ("label" in this.binds.value || "icon" in this.binds.value || "iconTrailing" in this.binds.value) ? this.components.render(
        "button",
        {
          ...this.binds.value,
          ...o(t)
        },
        void 0,
        (s = this.index) != null ? s : "button"
      ) : [];
    });
    this.props = t, this.className = s, this.components = e, this.extra = r, this.index = u;
  }
}
export {
  g as Button,
  A as ButtonDesign,
  f as ButtonInclude,
  B as defaultsButton
};
