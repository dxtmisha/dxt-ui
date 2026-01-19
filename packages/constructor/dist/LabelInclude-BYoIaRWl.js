var f = Object.defineProperty;
var m = (a, t, s) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[t] = s;
var r = (a, t, s) => m(a, typeof t != "symbol" ? t + "" : t, s);
import { isString as g, isFilled as n, render as h, getElementId as c, getRef as v } from "@dxtmisha/functional";
import { computed as o } from "vue";
class I {
  /**
   * Get role by props.
   *
   * Получить роль по пропсам.
   * @param role ARIA role type/ Тип ARIA роли
   */
  static role(t) {
    return {
      role: t
    };
  }
  /**
   * Get ARIA atomic attribute.
   *
   * Получить атрибут ARIA atomic.
   * @param isAtomic is atomic/ является атомарным
   */
  static atomic(t) {
    return {
      "aria-atomic": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get ARIA checked attribute.
   *
   * Получить атрибут ARIA checked.
   * @param isChecked is checked/ является отмеченным
   */
  static checked(t) {
    return {
      "aria-checked": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get ARIA current attribute.
   *
   * Получить атрибут ARIA current.
   * @param value ARIA current attribute/ Атрибут ARIA current
   */
  static current(t) {
    const s = g(t) ? t : this.isTrueOrFalse(t);
    return this.isDataToData("aria-current", s);
  }
  /**
   * Get ARIA busy attribute.
   *
   * Получить атрибут ARIA busy.
   * @param isBusy is busy/ является занятым
   */
  static busy(t) {
    return {
      "aria-busy": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get ARIA describedby attribute.
   *
   * Получить атрибут ARIA describedby.
   * @param id Element ID/ Идентификатор элемента
   */
  static describedby(t) {
    return this.isDataToData("aria-describedby", t);
  }
  /**
   * Get ARIA disabled attribute.
   *
   * Получить атрибут ARIA disabled.
   * @param isDisabled is disabled/ является отключенным
   */
  static disabled(t = !0) {
    return {
      "aria-disabled": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get ARIA expanded attribute.
   *
   * Получить атрибут ARIA expanded.
   * @param isExpanded is expanded/ является расширенным
   */
  static expanded(t) {
    return {
      "aria-expanded": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get ARIA haspopup attribute.
   *
   * Получить атрибут ARIA haspopup.
   * @param haspopup ARIA haspopup attribute/ Атрибут ARIA haspopup
   */
  static haspopup(t) {
    return this.isDataToData("aria-haspopup", t);
  }
  /**
   * Get ARIA label.
   *
   * Получить ARIA label.
   * @param label ARIA label/ ARIA метка
   */
  static label(t) {
    return this.isDataToData("aria-label", t);
  }
  /**
   * Get ARIA labelledby attribute.
   *
   * Получить атрибут ARIA labelledby.
   * @param id Element ID/ Идентификатор элемента
   */
  static labelledby(t) {
    return this.isDataToData("aria-labelledby", t);
  }
  /**
   * Get ARIA invalid attribute.
   *
   * Получить атрибут ARIA invalid.
   * @param isInvalid is invalid/ является недействительным
   */
  static invalid(t = !0) {
    return {
      "aria-invalid": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get control role.
   *
   * Получить роль управления.
   * @param id Element ID/ Идентификатор элемента
   * @param controls ARIA controls attribute/ Атрибут ARIA controls
   * @param haspopup ARIA haspopup attribute/ Атрибут ARIA haspopup
   * @param expanded ARIA expanded state/ Состояние ARIA expanded
   */
  static control(t, s, i, e) {
    return {
      id: t,
      "aria-controls": s,
      ...this.haspopup(i),
      ...this.expanded(e)
    };
  }
  /**
   * Get ARIA hidden attribute.
   *
   * Получить атрибут ARIA hidden.
   * @param isHidden is hidden/ является скрытым
   */
  static hidden(t = !0) {
    return {
      "aria-hidden": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get ARIA live attribute.
   *
   * Получить атрибут ARIA live.
   * @param live ARIA live attribute/ Атрибут ARIA live
   */
  static live(t) {
    return {
      "aria-live": t
    };
  }
  /**
   * Get modal role.
   *
   * Получить модальную роль.
   * @param isModal is modal/ является модальным
   * @param ariaLabelledby ARIA labelledby attribute/ Атрибут ARIA labelledby
   * @param ariaDescribedby ARIA describedby attribute/ Атрибут ARIA describedby
   */
  static modal(t = !0, s, i) {
    return {
      ...this.isDataToData("aria-modal", t),
      ...this.labelledby(s),
      ...this.describedby(i)
    };
  }
  /**
   * Returns ARIA value now, min and max.
   *
   * Возвращает ARIA value now, min и max.
   * @param value Current value/ Текущее значение
   * @param min Minimum value/ Минимальное значение
   * @param max Maximum value/ Максимальное значение
   */
  static valueMinMax(t, s, i) {
    return {
      "aria-valuenow": t,
      "aria-valuemin": s,
      "aria-valuemax": i
    };
  }
  /**
   * Returns 'true' or 'false' based on the boolean value.
   *
   * Возвращает 'true' или 'false' в зависимости от булевого значения.
   * @param value boolean value/ булевое значение
   */
  static isTrueOrFalse(t) {
    return t ? "true" : "false";
  }
  /**
   * Returns data as ARIA attribute.
   *
   * Возвращает данные в виде ARIA атрибута.
   * @param name attribute name/ имя атрибута
   * @param value attribute value/ значение атрибута
   */
  static isDataToData(t, s) {
    return s ? {
      [t]: s
    } : {};
  }
}
class F {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, s, i, e) {
    /**
     * Returns true if caption is filled
     *
     * Возвращает true, если caption заполнен
     */
    r(this, "is", o(() => {
      var t;
      return !!(this.props.caption || (t = this.slots) != null && t.caption);
    }));
    this.props = t, this.className = s, this.slots = i, this.skeleton = e;
  }
  /**
   * Renders caption element with content from props or slots.
   *
   * Отображает элемент caption с содержимым из props или slots.
   */
  render() {
    var s, i, e, l;
    const t = [];
    return n(this.props.caption) && t.push(this.props.caption), (s = this.slots) != null && s.caption && t.push((e = (i = this.slots).caption) == null ? void 0 : e.call(i, {})), t.length > 0 ? [
      h(
        "div",
        {
          class: {
            [`${this.className}__caption`]: !0,
            ...(l = this.skeleton) == null ? void 0 : l.classes.value
          },
          "data-event-type": "caption"
        },
        t,
        "caption"
      )
    ] : [];
  }
}
class k {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, s, i, e) {
    /** Unique identifier/ Уникальный идентификатор */
    r(this, "id", c());
    /**
     * Check for the presence of a description
     *
     * Проверка наличия описания
     */
    r(this, "is", o(() => {
      var t;
      return !!(this.props.description || (t = this.slots) != null && t.description);
    }));
    /** Description expose reference/ Ссылка на expose описания */
    r(this, "expose", {
      descriptionId: this.id
    });
    this.props = t, this.className = s, this.slots = i, this.skeleton = e;
  }
  /**
   * Get description ID
   *
   * Получить ID описания
   */
  getId() {
    return this.id;
  }
  /**
   * Render the description
   *
   * Рендер описания
   */
  render() {
    var s, i, e, l;
    const t = [];
    return n(this.props.description) && t.push(this.props.description), (s = this.slots) != null && s.description && t.push((e = (i = this.slots).description) == null ? void 0 : e.call(i, {})), t.length > 0 ? [
      h(
        "div",
        {
          class: {
            [`${this.className}__description`]: !0,
            ...(l = this.skeleton) == null ? void 0 : l.classes.value
          }
        },
        t,
        "description"
      )
    ] : [];
  }
}
class y {
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
  constructor(t, s, i, e, l, u, p, d, b = "span") {
    /** Unique identifier/ Уникальный идентификатор */
    r(this, "id", c());
    /** Label presence check/ Проверка наличия метки */
    r(this, "is", o(() => {
      var t;
      return this.props.label || (t = this.labelReplacing) != null && t.value ? !0 : this.slots ? this.alternativeSlots ? "label" in this.slots : "default" in this.slots : !1;
    }));
    /** Identifier for the element/ Идентификатор для элемента */
    r(this, "idElement", o(() => {
      if (this.is.value)
        return this.getId();
    }));
    /**
     * Expose helpers for Label state and actions.
     *
     * Вспомогательные методы expose для состояния и действий Label.
     */
    r(this, "expose", {
      labelId: this.getId()
    });
    this.props = t, this.className = s, this.classesExtra = i, this.slots = e, this.elementsExtra = l, this.labelReplacing = u, this.alternativeSlots = p, this.skeleton = d, this.tag = b;
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
      const i = [
        ...this.initLabel(),
        ...this.initLabelReplacing(),
        ...this.initSlot()
      ];
      this.elementsExtra && i.push(...this.elementsExtra()), t && i.push(...t), i.length > 0 && s.push(
        h(
          v(this.tag),
          {
            id: this.getId(),
            class: this.getClassName()
          },
          i,
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
    return !((t = this.labelReplacing) != null && t.value) && n(this.props.label) ? [this.props.label] : [];
  }
  /**
   * Adds alternative label text if it exists
   *
   * Добавляет альтернативный текст метки, если он есть
   */
  initLabelReplacing() {
    var t;
    return n((t = this.labelReplacing) == null ? void 0 : t.value) ? [
      h(
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
    var t, s, i, e;
    if (this.slots) {
      if (this.alternativeSlots) {
        if ("label" in this.slots)
          return [(s = (t = this.slots).label) == null ? void 0 : s.call(t, {})];
      } else if ("default" in this.slots)
        return [(e = (i = this.slots).default) == null ? void 0 : e.call(i, {})];
    }
    return [];
  }
}
export {
  I as A,
  F as C,
  k as D,
  y as L
};
