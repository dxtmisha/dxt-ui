var h = Object.defineProperty;
var b = (i, s, t) => s in i ? h(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var r = (i, s, t) => b(i, typeof s != "symbol" ? s + "" : s, t);
import { ref as c, computed as a } from "vue";
import { toBinds as m, getRef as d } from "@dxtmisha/functional";
class B {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(s, t, e, o, p, n) {
    r(this, "element", c());
    /**
     * Checks whether bars should be displayed/
     * Проверяет, нужно ли отображать панели
     */
    r(this, "is", a(() => !!(this.props.barsLabel || this.props.barsDescription || this.props.barsBackHide !== !0)));
    /** Computed bindings for the bars/ Вычисляемые привязки для панелей */
    r(this, "binds", a(() => ({
      ...m(
        d(this.extra),
        this.props.barsAttrs,
        { class: `${this.className}__bars` }
      ),
      label: this.props.barsLabel,
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
    r(this, "onClick", (s, t) => {
      var e, o, p;
      (e = this.emits) == null || e.call(this, "bars", s, t), (o = this.emits) == null || o.call(this, "barsLite", t), t.type === "back" && ((p = this.emits) == null || p.call(this, "barsBack", t));
    });
    this.props = s, this.className = t, this.components = e, this.emits = o, this.extra = p, this.index = n;
  }
}
export {
  B
};
