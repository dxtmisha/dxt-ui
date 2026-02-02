var b = Object.defineProperty;
var g = (i, s, t) => s in i ? b(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var a = (i, s, t) => g(i, typeof s != "symbol" ? s + "" : s, t);
import { computed as n } from "vue";
import { getElementId as d, render as r, getRef as m, isFilled as h } from "@dxtmisha/functional";
class x {
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
  constructor(s, t, e, l, o, u, p, c, f = "span") {
    /** Label presence check/ Проверка наличия метки */
    a(this, "is", n(() => {
      var s;
      return this.props.label || (s = this.labelReplacing) != null && s.value ? !0 : this.slots ? this.alternativeSlots ? "label" in this.slots : "default" in this.slots : !1;
    }));
    /** Identifier for the element/ Идентификатор для элемента */
    a(this, "id", n(
      () => this.props.labelId || d()
    ));
    this.props = s, this.className = t, this.classesExtra = e, this.slots = l, this.elementsExtra = o, this.labelReplacing = u, this.alternativeSlots = p, this.skeleton = c, this.tag = f;
  }
  /**
   * Render the label
   *
   * Рендер метки
   * @param childrenExtra additional children/ дополнительные дочерние элементы
   */
  render(s) {
    const t = [];
    if (this.is.value) {
      const e = [
        ...this.initLabel(),
        ...this.initLabelReplacing(),
        ...this.initSlot()
      ];
      this.elementsExtra && e.push(...this.elementsExtra()), s && e.push(...s), e.length > 0 && t.push(
        r(
          m(this.tag),
          {
            id: this.id.value,
            class: this.getClassName()
          },
          e,
          "label"
        )
      );
    }
    return t;
  }
  /**
   * Get the class name for the label
   *
   * Получение имени класса для метки
   */
  getClassName() {
    const s = [`${this.className}__label`];
    return this.classesExtra && s.push(this.classesExtra), this.skeleton && s.push(this.skeleton.classes.value), s;
  }
  /**
   * Adds the label text if it exists
   *
   * Добавляет текст метки, если он есть
   */
  initLabel() {
    var s;
    return !((s = this.labelReplacing) != null && s.value) && h(this.props.label) ? [this.props.label] : [];
  }
  /**
   * Adds alternative label text if it exists
   *
   * Добавляет альтернативный текст метки, если он есть
   */
  initLabelReplacing() {
    var s;
    return h((s = this.labelReplacing) == null ? void 0 : s.value) ? [
      r(
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
    var s, t, e, l;
    if (this.slots) {
      if (this.alternativeSlots) {
        if ("label" in this.slots)
          return [(t = (s = this.slots).label) == null ? void 0 : t.call(s, {})];
      } else if ("default" in this.slots)
        return [(l = (e = this.slots).default) == null ? void 0 : l.call(e, {})];
    }
    return [];
  }
}
export {
  x as L
};
