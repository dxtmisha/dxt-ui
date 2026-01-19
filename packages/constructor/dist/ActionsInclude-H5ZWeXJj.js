var h = Object.defineProperty;
var p = (o, s, t) => s in o ? h(o, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[s] = t;
var n = (o, s, t) => p(o, typeof s != "symbol" ? s + "" : s, t);
import { computed as r } from "vue";
import { toBinds as l, getRef as d } from "@dxtmisha/functional";
class b {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(s, t, i, e, c, a) {
    /**
     * Checks whether actions should be displayed/
     * Проверяет, нужно ли отображать действия
     */
    n(this, "is", r(() => !!(!this.props.actionsHide && (this.binds.value.list || this.binds.value.listSecondary))));
    /** Computed bindings for the actions/ Вычисляемые привязки для действий */
    n(this, "binds", r(() => {
      var t, i;
      const s = l(
        d(this.extra),
        this.props.actionsAttrs,
        { class: `${this.className}__actions` }
      );
      return {
        ...s,
        list: (t = this.props.actionsList) != null ? t : s.list,
        listSecondary: (i = this.props.actionsSecondary) != null ? i : s.listSecondary,
        onClick: this.onClick
      };
    }));
    /**
     * Render the Actions component
     *
     * Рендер компонента действий
     */
    n(this, "render", () => this.components && this.is.value ? this.components.render(
      "actions",
      this.binds.value,
      void 0,
      this.index
    ) : []);
    /**
     * Handles click events from Actions and emits related events/
     * Обрабатывает клики по действиям и испускает связанные события
     *
     * @param event native mouse event/ native событие мыши
     * @param value payload with { type, value, detail }/ данные события с { type, value, detail }
     */
    n(this, "onClick", (s, t) => {
      var i, e;
      (i = this.emits) == null || i.call(this, "actions", s, t), (e = this.emits) == null || e.call(this, "actionsLite", t);
    });
    this.props = s, this.className = t, this.components = i, this.emits = e, this.extra = c, this.index = a;
  }
}
export {
  b as A
};
