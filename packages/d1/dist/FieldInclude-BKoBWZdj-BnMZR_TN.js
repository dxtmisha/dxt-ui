import { computed as f } from "vue";
import { toBinds as k, getRef as C, toBind as M, eventStopPropagation as p, isEnter as D } from "@dxtmisha/functional";
var O = Object.defineProperty, B = (t, e, r) => e in t ? O(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, h = (t, e, r) => B(t, typeof e != "symbol" ? e + "" : e, r);
class q {
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
  constructor(e, r, w, b, x, y, T, m, A, P, S) {
    h(this, "binds", f(() => {
      var i, s, o, l, n, a;
      return k(
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
          arrowStepper: (l = (o = this.arrow) == null ? void 0 : o.isStepper()) != null ? l : this.props.arrow === "stepper",
          arrowAlign: (a = (n = this.arrow) == null ? void 0 : n.align()) != null ? a : this.props.arrowAlign,
          isSkeleton: this.props.isSkeleton,
          fieldLabelAttrs: this.props.fieldLabelAttrs,
          fieldMessageAttrs: this.props.fieldMessageAttrs,
          fieldCounterAttrs: this.props.fieldCounterAttrs,
          onClick: this.on,
          onKeydown: this.onKeydown
        },
        C(this.extra),
        this.props.fieldAttrs
      );
    })), h(this, "valueBinds", f(() => {
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
    })), h(this, "render", (i, s) => this.components ? this.components.render(
      "field",
      M(
        this.valueBinds.value,
        s != null ? s : {}
      ),
      i,
      this.index
    ) : []), h(this, "on", (i, { type: s }) => {
      var o, l, n, a, u, c, d, v, g;
      if (i.target.closest('[data-element="scoreboard"]'))
        switch (s) {
          case "icon":
            (o = this.onIcon) == null || o.call(this), p(i);
            break;
          case "icon-trailing":
            (l = this.onTrailing) == null || l.call(this), p(i);
            break;
          case "cancel":
            (n = this.event) == null || n.onClear(i), p(i);
            break;
          case "next":
            (a = this.onNext) == null || a.call(this), (u = this.arrow) == null || u.next(), (c = this.event) == null || c.on(i), p(i);
            break;
          case "previous":
            (d = this.onPrevious) == null || d.call(this), (v = this.arrow) == null || v.previous(), (g = this.event) == null || g.on(i), p(i);
            break;
        }
    }), h(this, "onKeydown", (i, s) => {
      D(i) && (this.on(i, s != null ? s : {}), i.preventDefault());
    }), this.props = e, this.value = r, this.components = w, this.event = b, this.arrow = x, this.onIcon = y, this.onTrailing = T, this.onNext = m, this.onPrevious = A, this.extra = P, this.index = S;
  }
}
export {
  q as y
};
