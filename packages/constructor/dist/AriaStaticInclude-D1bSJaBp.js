import { isString as s } from "@dxtmisha/functional";
class n {
  /**
   * Get role by props.
   *
   * Получить роль по пропсам.
   * @param role ARIA role type/ Тип ARIA роли
   */
  static role(a) {
    return {
      role: a
    };
  }
  /**
   * Get ARIA atomic attribute.
   *
   * Получить атрибут ARIA atomic.
   * @param isAtomic is atomic/ является атомарным
   */
  static atomic(a) {
    return {
      "aria-atomic": this.isTrueOrFalse(a)
    };
  }
  /**
   * Get ARIA checked attribute.
   *
   * Получить атрибут ARIA checked.
   * @param isChecked is checked/ является отмеченным
   */
  static checked(a) {
    return {
      "aria-checked": this.isTrueOrFalse(a)
    };
  }
  /**
   * Get ARIA controls attribute.
   *
   * Получить атрибут ARIA controls.
   * @param controls ARIA controls attribute/ Атрибут ARIA controls
   */
  static controls(a) {
    return this.isDataToData("aria-controls", a);
  }
  /**
   * Get ARIA current attribute.
   *
   * Получить атрибут ARIA current.
   * @param value ARIA current attribute/ Атрибут ARIA current
   */
  static current(a) {
    const t = s(a) ? a : this.isTrueOrFalse(a);
    return this.isDataToData("aria-current", t);
  }
  /**
   * Get ARIA busy attribute.
   *
   * Получить атрибут ARIA busy.
   * @param isBusy is busy/ является занятым
   */
  static busy(a) {
    return {
      "aria-busy": this.isTrueOrFalse(a)
    };
  }
  /**
   * Get ARIA describedby attribute.
   *
   * Получить атрибут ARIA describedby.
   * @param id Element ID/ Идентификатор элемента
   */
  static describedby(a) {
    return this.isDataToData("aria-describedby", a);
  }
  /**
   * Get ARIA disabled attribute.
   *
   * Получить атрибут ARIA disabled.
   * @param isDisabled is disabled/ является отключенным
   */
  static disabled(a = !0) {
    return a ? {
      "aria-disabled": this.isTrueOrFalse(a)
    } : {};
  }
  /**
   * Get ARIA expanded attribute.
   *
   * Получить атрибут ARIA expanded.
   * @param isExpanded is expanded/ является расширенным
   */
  static expanded(a) {
    return {
      "aria-expanded": this.isTrueOrFalse(a)
    };
  }
  /**
   * Get ARIA haspopup attribute.
   *
   * Получить атрибут ARIA haspopup.
   * @param haspopup ARIA haspopup attribute/ Атрибут ARIA haspopup
   */
  static haspopup(a) {
    return this.isDataToData("aria-haspopup", a);
  }
  /**
   * Get ARIA label.
   *
   * Получить ARIA label.
   * @param label ARIA label/ ARIA метка
   */
  static label(a) {
    return this.isDataToData("aria-label", a);
  }
  /**
   * Get ARIA labelledby attribute.
   *
   * Получить атрибут ARIA labelledby.
   * @param id Element ID/ Идентификатор элемента
   */
  static labelledby(a) {
    return this.isDataToData("aria-labelledby", a);
  }
  /**
   * Get ARIA invalid attribute.
   *
   * Получить атрибут ARIA invalid.
   * @param isInvalid is invalid/ является недействительным
   */
  static invalid(a = !0) {
    return {
      "aria-invalid": this.isTrueOrFalse(a)
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
  static control(a, t, r, i) {
    return {
      id: a,
      ...this.controls(t),
      ...this.haspopup(r),
      ...this.expanded(i)
    };
  }
  /**
   * Get ARIA hidden attribute.
   *
   * Получить атрибут ARIA hidden.
   * @param isHidden is hidden/ является скрытым
   */
  static hidden(a = !0) {
    return {
      "aria-hidden": this.isTrueOrFalse(a)
    };
  }
  /**
   * Get ARIA live attribute.
   *
   * Получить атрибут ARIA live.
   * @param live ARIA live attribute/ Атрибут ARIA live
   */
  static live(a) {
    return this.isDataToData("aria-live", a);
  }
  /**
   * Get ARIA modal attribute.
   *
   * Получить атрибут ARIA modal.
   * @param isModal is modal/ является модальным
   */
  static ariaModal(a = !0) {
    return this.isDataToData("aria-modal", a);
  }
  /**
   * Get modal role.
   *
   * Получить модальную роль.
   * @param isModal is modal/ является модальным
   * @param ariaLabelledby ARIA labelledby attribute/ Атрибут ARIA labelledby
   * @param ariaDescribedby ARIA describedby attribute/ Атрибут ARIA describedby
   */
  static modal(a = !0, t, r) {
    return {
      ...this.ariaModal(a),
      ...this.labelledby(t),
      ...this.describedby(r)
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
  static valueMinMax(a, t, r) {
    return {
      "aria-valuenow": a,
      "aria-valuemin": t,
      "aria-valuemax": r
    };
  }
  /**
   * Returns 'true' or 'false' based on the boolean value.
   *
   * Возвращает 'true' или 'false' в зависимости от булевого значения.
   * @param value boolean value/ булевое значение
   */
  static isTrueOrFalse(a) {
    return a ? "true" : "false";
  }
  /**
   * Returns data as ARIA attribute.
   *
   * Возвращает данные в виде ARIA атрибута.
   * @param name attribute name/ имя атрибута
   * @param value attribute value/ значение атрибута
   */
  static isDataToData(a, t) {
    return t ? {
      [a]: t
    } : {};
  }
}
export {
  n as A
};
