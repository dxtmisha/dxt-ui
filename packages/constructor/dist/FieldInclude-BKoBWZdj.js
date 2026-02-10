var f = Object.defineProperty;
var w = (n, i, s) => i in n ? f(n, i, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[i] = s;
var a = (n, i, s) => w(n, typeof i != "symbol" ? i + "" : i, s);
import { computed as g } from "vue";
import { toBinds as b, getRef as v, toBind as x, eventStopPropagation as l, isEnter as T } from "@dxtmisha/functional";
class y {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param value object for working with values/ объект для работы со значениями
   * @param components object for working with components/ объект для работы с компонентами
   * @param event object for working with events/ объект для работы с событиями
   * @param arrow object for working with arrows/ объект для работы со стрелками
   * @param onIcon Collection icon click handler/ Обработчик клика по иконке коллекции
   * @param onTrailing Trailing icon click handler/ Обработчик клика по иконке трейлинга
   * @param onNext Next arrow click handler/ Обработчик клика по следующей стрелке
   * @param onPrevious Previous arrow click handler/ Обработчик клика по предыдущей стрелке
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(i, s, e, r, o, t, p, h, c, d, u) {
    /** Returns properties for the field framework/ Возвращает свойства для каркаса поля */
    a(this, "binds", g(() => {
      var i, s, e, r, o, t;
      return b(
        {
          // Status
          focus: this.props.focus,
          selected: this.props.selected,
          readonly: this.props.readonly,
          disabled: this.props.disabled,
          loading: this.props.loading,
          forceShowMessage: this.props.forceShowMessage,
          // Value
          label: this.props.label,
          prefix: this.props.prefix,
          suffix: this.props.suffix,
          caption: this.props.caption,
          helperMessage: this.props.helperMessage,
          required: this.props.required,
          detail: this.props.detail,
          // Style
          cancel: this.props.cancel,
          counterShow: this.props.counterShow,
          icon: this.props.icon,
          iconTurn: this.props.iconTurn,
          iconHide: this.props.iconHide,
          iconDir: this.props.iconDir,
          iconPalette: this.props.iconPalette,
          iconTrailing: this.props.iconTrailing,
          iconTrailingTurnOnly: this.props.iconTrailingTurnOnly,
          iconTrailingDirOnly: this.props.iconTrailingDirOnly,
          iconTrailingPalette: this.props.iconTrailingPalette,
          iconAttrs: this.props.iconAttrs,
          align: this.props.align,
          arrowCarousel: (s = (i = this.arrow) == null ? void 0 : i.isCarousel()) != null ? s : this.props.arrow === "carousel",
          arrowStepper: (r = (e = this.arrow) == null ? void 0 : e.isStepper()) != null ? r : this.props.arrow === "stepper",
          arrowAlign: (t = (o = this.arrow) == null ? void 0 : o.align()) != null ? t : this.props.arrowAlign,
          isSkeleton: this.props.isSkeleton,
          fieldLabelAttrs: this.props.fieldLabelAttrs,
          fieldMessageAttrs: this.props.fieldMessageAttrs,
          fieldCounterAttrs: this.props.fieldCounterAttrs,
          onClick: this.on,
          onKeydown: this.onKeydown
        },
        v(this.extra),
        this.props.fieldAttrs
      );
    }));
    /**
     * Returns properties for working with the value of the Field framework/
     * Возвращает свойства для работы со значением каркаса поля
     */
    a(this, "valueBinds", g(() => {
      var i, s;
      return {
        ...this.binds.value,
        isValue: this.value.is.value,
        value: this.value.item.value,
        cancelShow: this.value.boolean.value,
        counter: this.value.length.value,
        disabledPrevious: (i = this.arrow) == null ? void 0 : i.disabledPrevious.value,
        disabledNext: (s = this.arrow) == null ? void 0 : s.disabledNext.value
      };
    }));
    /**
     * Renders the Field framework.
     *
     * Отрисовывает каркас поля.
     * @param slotsChildren
     * @param attrs
     */
    a(this, "render", (i, s) => this.components ? this.components.render(
      "field",
      x(
        this.valueBinds.value,
        s != null ? s : {}
      ),
      i,
      this.index
    ) : []);
    /**
     * Method for listening to events.
     *
     * Метод для прослушивания событий.
     * @param event event object/ объект события
     * @param type type of the object that was clicked/ тип объекта, который был нажат
     */
    a(this, "on", (i, { type: s }) => {
      var e, r, o, t, p, h, c, d, u;
      if (i.target.closest('[data-element="scoreboard"]'))
        switch (s) {
          case "icon":
            (e = this.onIcon) == null || e.call(this), l(i);
            break;
          case "icon-trailing":
            (r = this.onTrailing) == null || r.call(this), l(i);
            break;
          case "cancel":
            (o = this.event) == null || o.onClear(i), l(i);
            break;
          case "next":
            (t = this.onNext) == null || t.call(this), (p = this.arrow) == null || p.next(), (h = this.event) == null || h.on(i), l(i);
            break;
          case "previous":
            (c = this.onPrevious) == null || c.call(this), (d = this.arrow) == null || d.previous(), (u = this.event) == null || u.on(i), l(i);
            break;
        }
    });
    /**
     * Event trigger function when pressing the space bar or enter key.
     *
     * Функция вызова события при нажатии на пробел или клавишу Enter.
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    a(this, "onKeydown", (i, s) => {
      T(i) && (this.on(i, s != null ? s : {}), i.preventDefault());
    });
    this.props = i, this.value = s, this.components = e, this.event = r, this.arrow = o, this.onIcon = t, this.onTrailing = p, this.onNext = h, this.onPrevious = c, this.extra = d, this.index = u;
  }
}
export {
  y as F
};
