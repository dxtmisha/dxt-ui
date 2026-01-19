var d = Object.defineProperty;
var b = (i, t, s) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var l = (i, t, s) => b(i, typeof t != "symbol" ? t + "" : t, s);
import { computed as r } from "vue";
import { getElementId as g, render as n, getRef as m, isFilled as h } from "@dxtmisha/functional";
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
  constructor(t, s, e, a, o, u, p, c, f = "span") {
    /** Unique identifier/ Уникальный идентификатор */
    l(this, "id", g());
    /** Label presence check/ Проверка наличия метки */
    l(this, "is", r(() => {
      var t;
      return this.props.label || (t = this.labelReplacing) != null && t.value ? !0 : this.slots ? this.alternativeSlots ? "label" in this.slots : "default" in this.slots : !1;
    }));
    /** Identifier for the element/ Идентификатор для элемента */
    l(this, "idElement", r(() => {
      if (this.is.value)
        return this.getId();
    }));
    /**
     * Expose helpers for Label state and actions.
     *
     * Вспомогательные методы expose для состояния и действий Label.
     */
    l(this, "expose", {
      labelId: this.getId()
    });
    this.props = t, this.className = s, this.classesExtra = e, this.slots = a, this.elementsExtra = o, this.labelReplacing = u, this.alternativeSlots = p, this.skeleton = c, this.tag = f;
  }
  /**
   * Get the unique identifier.
   *
   * Получение уникального идентификатора.
   */
  getId() {
    var t;
    return ((t = this.props) == null ? void 0 : t.labelId) || this.id;
  }
  /**
   * Render the label
   *
   * Рендер метки
   * @param childrenExtra additional children/ дополнительные дочерние элементы
   */
  render(t) {
    const s = [];
    if (this.is.value) {
      const e = [
        ...this.initLabel(),
        ...this.initLabelReplacing(),
        ...this.initSlot()
      ];
      this.elementsExtra && e.push(...this.elementsExtra()), t && e.push(...t), e.length > 0 && s.push(
        n(
          m(this.tag),
          {
            id: this.getId(),
            class: this.getClassName()
          },
          e,
          "label"
        )
      );
    }
    return s;
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
    var t, s, e, a;
    if (this.slots) {
      if (this.alternativeSlots) {
        if ("label" in this.slots)
          return [(s = (t = this.slots).label) == null ? void 0 : s.call(t, {})];
      } else if ("default" in this.slots)
        return [(a = (e = this.slots).default) == null ? void 0 : a.call(e, {})];
    }
    return [];
  }
}
export {
  x as L
};
