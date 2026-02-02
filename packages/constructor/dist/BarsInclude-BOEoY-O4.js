var c = Object.defineProperty;
var d = (t, s, i) => s in t ? c(t, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[s] = i;
var r = (t, s, i) => d(t, typeof s != "symbol" ? s + "" : s, i);
import { ref as l, computed as a } from "vue";
import { toBinds as m, getRef as k } from "@dxtmisha/functional";
class u {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя
   * @param labelId identifier for the label/ идентификатор для метки
   * @param descriptionId identifier for the description/ идентификатор для описания
   * @param index index identifier/ идентификатор индекса
   */
  constructor(s, i, e, o, p, n, h, b) {
    /** Element reference/ Ссылка на элемент */
    r(this, "element", l());
    /**
     * Checks whether bars should be displayed/
     * Проверяет, нужно ли отображать панели
     */
    r(this, "is", a(() => !!(this.props.barsLabel || this.props.barsDescription || this.props.barsBackHide !== !0)));
    /** Computed bindings for the bars/ Вычисляемые привязки для панелей */
    r(this, "binds", a(() => ({
      ...m(
        k(this.extra),
        this.props.barsAttrs,
        { class: `${this.className}__bars` }
      ),
      labelId: this.labelId,
      label: this.props.barsLabel,
      descriptionId: this.descriptionId,
      description: this.props.barsDescription,
      backHide: this.props.barsBackHide,
      bars: this.props.barsList
    })));
    /**
     * Render the Bars component
     *
     * Рендер компонента панелей
     */
    r(this, "render", () => {
      var s;
      return this.components && !this.props.barsHide ? this.components.render(
        "bars",
        {
          ref: this.element,
          ...this.binds.value,
          onClick: this.onClick
        },
        void 0,
        (s = this.index) != null ? s : "bars"
      ) : [];
    });
    /**
     * Handles click events from Bars and emits related events/
     * Обрабатывает клики по панелям и испускает связанные события
     *
     * @param event native mouse event/ native событие мыши
     * @param value payload with { type, value, detail }/ данные события с { type, value, detail }
     */
    r(this, "onClick", (s, i) => {
      var e, o, p;
      (e = this.emits) == null || e.call(this, "bars", s, i), (o = this.emits) == null || o.call(this, "barsLite", i), i.type === "back" && ((p = this.emits) == null || p.call(this, "barsBack", i));
    });
    this.props = s, this.className = i, this.components = e, this.emits = o, this.extra = p, this.labelId = n, this.descriptionId = h, this.index = b;
  }
}
export {
  u as B
};
