var a = Object.defineProperty;
var d = (s, t, n) => t in s ? a(s, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : s[t] = n;
var i = (s, t, n) => d(s, typeof t != "symbol" ? t + "" : t, n);
import { B as v, a as y } from "./ButtonDesign-BGzj_sb8.js";
import { computed as h } from "vue";
import { toBinds as p, getBind as l, getRef as o } from "@dxtmisha/functional";
const B = {
  tag: "button",
  type: "button"
};
class f {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, n, e, r, u) {
    /**
     * Computed bindings for the button/ Вычисляемые привязки для кнопки
     */
    i(this, "binds", h(
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
    i(this, "render", (t) => {
      var n;
      return this.components && ("label" in this.binds.value || "icon" in this.binds.value || "iconTrailing" in this.binds.value) ? this.components.render(
        "button",
        {
          ...this.binds.value,
          ...o(t)
        },
        void 0,
        (n = this.index) != null ? n : "button"
      ) : [];
    });
    this.props = t, this.className = n, this.components = e, this.extra = r, this.index = u;
  }
}
export {
  v as Button,
  y as ButtonDesign,
  f as ButtonInclude,
  B as defaultsButton
};
