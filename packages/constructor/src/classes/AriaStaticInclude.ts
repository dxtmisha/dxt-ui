import type { AriaList, AriaTrueOrFalse } from '../types/ariaTypes'
import type { RoleType } from '../types/roleTypes'

/**
 * The class returns static ARIA attributes.
 *
 * Класс возвращает статические ARIA атрибуты.
 */
export class AriaStaticInclude {
  /**
   * Get role by props.
   *
   * Получить роль по пропсам.
   * @param role ARIA role type/ Тип ARIA роли
   */
  static role(role?: RoleType): AriaList {
    return {
      role
    }
  }

  /**
   * Get ARIA atomic attribute.
   *
   * Получить атрибут ARIA atomic.
   * @param isAtomic is atomic/ является атомарным
   */
  static atomic(isAtomic?: boolean): AriaList {
    return {
      'aria-atomic': this.isTrueOrFalse(isAtomic)
    }
  }

  /**
   * Get ARIA checked attribute.
   *
   * Получить атрибут ARIA checked.
   * @param isChecked is checked/ является отмеченным
   */
  static checked(isChecked?: boolean): AriaList {
    return {
      'aria-checked': this.isTrueOrFalse(isChecked)
    }
  }

  /**
   * Get ARIA busy attribute.
   *
   * Получить атрибут ARIA busy.
   * @param isBusy is busy/ является занятым
   */
  static busy(isBusy?: boolean): AriaList {
    return {
      'aria-busy': this.isTrueOrFalse(isBusy)
    }
  }

  /**
   * Get ARIA describedby attribute.
   *
   * Получить атрибут ARIA describedby.
   * @param id Element ID/ Идентификатор элемента
   */
  static describedby(id?: string): AriaList {
    return this.isDataToData('aria-describedby', id)
  }

  /**
   * Get ARIA disabled attribute.
   *
   * Получить атрибут ARIA disabled.
   * @param isDisabled is disabled/ является отключенным
   */
  static disabled(isDisabled: boolean = true): AriaList {
    return {
      'aria-disabled': this.isTrueOrFalse(isDisabled)
    }
  }

  /**
   * Get ARIA expanded attribute.
   *
   * Получить атрибут ARIA expanded.
   * @param isExpanded is expanded/ является расширенным
   */
  static expanded(isExpanded?: boolean): AriaList {
    return {
      'aria-expanded': this.isTrueOrFalse(isExpanded)
    }
  }

  /**
   * Get ARIA haspopup attribute.
   *
   * Получить атрибут ARIA haspopup.
   * @param haspopup ARIA haspopup attribute/ Атрибут ARIA haspopup
   */
  static haspopup(haspopup?: AriaList['aria-haspopup']): AriaList {
    return this.isDataToData('aria-haspopup', haspopup)
  }

  /**
   * Get ARIA label.
   *
   * Получить ARIA label.
   * @param label ARIA label/ ARIA метка
   */
  static label(label?: string): AriaList {
    return this.isDataToData('aria-label', label)
  }

  /**
   * Get ARIA labelledby attribute.
   *
   * Получить атрибут ARIA labelledby.
   * @param id Element ID/ Идентификатор элемента
   */
  static labelledby(id?: string): AriaList {
    return this.isDataToData('aria-labelledby', id)
  }

  /**
   * Get ARIA invalid attribute.
   *
   * Получить атрибут ARIA invalid.
   * @param isInvalid is invalid/ является недействительным
   */
  static invalid(isInvalid: boolean = true): AriaList {
    return {
      'aria-invalid': this.isTrueOrFalse(isInvalid)
    }
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
  static control(
    id?: string,
    controls?: string,
    haspopup?: AriaList['aria-haspopup'],
    expanded?: boolean
  ): AriaList {
    return {
      id,
      'aria-controls': controls,
      ...this.haspopup(haspopup),
      ...this.expanded(expanded)
    }
  }

  /**
   * Get ARIA hidden attribute.
   *
   * Получить атрибут ARIA hidden.
   * @param isHidden is hidden/ является скрытым
   */
  static hidden(
    isHidden: boolean = true
  ): AriaList {
    return {
      'aria-hidden': this.isTrueOrFalse(isHidden)
    }
  }

  /**
   * Get ARIA live attribute.
   *
   * Получить атрибут ARIA live.
   * @param live ARIA live attribute/ Атрибут ARIA live
   */
  static live(
    live?: AriaList['aria-live']
  ): AriaList {
    return {
      'aria-live': live
    }
  }

  /**
   * Get modal role.
   *
   * Получить модальную роль.
   * @param isModal is modal/ является модальным
   * @param ariaLabelledby ARIA labelledby attribute/ Атрибут ARIA labelledby
   * @param ariaDescribedby ARIA describedby attribute/ Атрибут ARIA describedby
   */
  static modal(
    isModal: boolean = true,
    ariaLabelledby?: string,
    ariaDescribedby?: string
  ): AriaList {
    return {
      ...this.isDataToData('aria-modal', isModal),
      ...this.labelledby(ariaLabelledby),
      ...this.describedby(ariaDescribedby)
    }
  }

  /**
   * Returns ARIA value now, min and max.
   *
   * Возвращает ARIA value now, min и max.
   * @param value Current value/ Текущее значение
   * @param min Minimum value/ Минимальное значение
   * @param max Maximum value/ Максимальное значение
   */
  static valueMinMax(
    value?: string | number,
    min?: string | number,
    max?: string | number
  ): AriaList {
    return {
      'aria-valuenow': value,
      'aria-valuemin': min,
      'aria-valuemax': max
    }
  }

  /**
   * Returns 'true' or 'false' based on the boolean value.
   *
   * Возвращает 'true' или 'false' в зависимости от булевого значения.
   * @param value boolean value/ булевое значение
   */
  static isTrueOrFalse(value?: boolean): AriaTrueOrFalse | undefined {
    return value ? 'true' : 'false'
  }

  /**
   * Returns data as ARIA attribute.
   *
   * Возвращает данные в виде ARIA атрибута.
   * @param name attribute name/ имя атрибута
   * @param value attribute value/ значение атрибута
   */
  protected static isDataToData<V>(
    name: string,
    value?: V
  ): AriaList {
    if (value) {
      return {
        [name]: value
      }
    }

    return {}
  }
}
