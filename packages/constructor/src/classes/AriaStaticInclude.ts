import type { AriaList, AriaTrueOrFalse } from '../types/ariaTypes'
import type { RoleType } from '../types/roleTypes'

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
   * Get ARIA label.
   *
   * Получить ARIA label.
   * @param label ARIA label/ ARIA метка
   */
  static label(label?: string): AriaList {
    return {
      'aria-label': label
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
    expanded?: string
  ): AriaList {
    return {
      id,
      'aria-controls': controls,
      'aria-haspopup': haspopup,
      'aria-expanded': expanded
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
      'aria-modal': this.isTrueOrFalse(isModal),
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby
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
}
