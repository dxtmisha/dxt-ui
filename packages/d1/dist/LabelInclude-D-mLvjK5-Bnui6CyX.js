import { computed as r } from "vue";
import { getElementId as g, render as n, getRef as d, isFilled as h } from "@dxtmisha/functional";
var f = Object.defineProperty, m = (i, t, s) => t in i ? f(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s, o = (i, t, s) => m(i, typeof t != "symbol" ? t + "" : t, s);
class E {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param labelReplacing additional elements/ дополнительные элементы
   * @param alternativeSlots alternative slots/ альтернативные слоты
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   * @param tag tag name/ имя тега
   */
  constructor(t, s, l, e, u, p, c, b, v = "span") {
    o(this, "is", r(() => {
      var a;
      return this.props.label || (a = this.labelReplacing) != null && a.value ? !0 : this.slots ? this.alternativeSlots ? "label" in this.slots : "default" in this.slots : !1;
    })), o(this, "id", r(
      () => this.props.labelId || g()
    )), this.props = t, this.className = s, this.classesExtra = l, this.slots = e, this.elementsExtra = u, this.labelReplacing = p, this.alternativeSlots = c, this.skeleton = b, this.tag = v;
  }
  /**
   * Render the label
   *
   * Рендер метки
   * @param childrenExtra additional children/ дополнительные дочерние элементы
   * @param props additional properties/ дополнительные свойства
   */
  render(t, s = {}) {
    const l = [];
    if (this.is.value) {
      const e = [
        ...this.initLabel(),
        ...this.initLabelReplacing(),
        ...this.initSlot()
      ];
      this.elementsExtra && e.push(...this.elementsExtra()), t && e.push(...t), e.length > 0 && l.push(
        n(
          d(this.tag),
          {
            id: this.id.value,
            class: this.getClassName(),
            ...s
          },
          e,
          "label"
        )
      );
    }
    return l;
  }
  /**
   * Get the class name for the label
   *
   * Получение имени класса для метки
   */
  getClassName() {
    const t = [`${this.className}__label`];
    return this.classesExtra && t.push(this.classesExtra), this.skeleton && t.push(this.skeleton.classes.value), t;
  }
  /**
   * Adds the label text if it exists
   *
   * Добавляет текст метки, если он есть
   */
  initLabel() {
    var t;
    return !((t = this.labelReplacing) != null && t.value) && h(this.props.label) ? [this.props.label] : [];
  }
  /**
   * Adds alternative label text if it exists
   *
   * Добавляет альтернативный текст метки, если он есть
   */
  initLabelReplacing() {
    var t;
    return h((t = this.labelReplacing) == null ? void 0 : t.value) ? [
      n(
        "span",
        { innerHTML: this.labelReplacing.value },
        void 0,
        "highlight"
      )
    ] : [];
  }
  /**
   * Adds a slot for the label if it exists
   *
   * Добавляет слот для метки, если он есть
   */
  initSlot() {
    var t, s, l, e;
    if (this.slots) {
      if (this.alternativeSlots) {
        if ("label" in this.slots)
          return [(s = (t = this.slots).label) == null ? void 0 : s.call(t, {})];
      } else if ("default" in this.slots)
        return [(e = (l = this.slots).default) == null ? void 0 : e.call(l, {})];
    }
    return [];
  }
}
export {
  E as x
};
