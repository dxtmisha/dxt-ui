import { AriaStaticInclude } from './AriaStaticInclude'
import type { AriaAll, AriaList } from '../types/ariaTypes'

/**
 * The class returns data for working with ARIA roles.
 *
 * Класс возвращает данные для работы с ARIA ролями.
 */
export class AriaInclude {
  constructor(
    protected readonly props: AriaAll,
    protected readonly valueDefault?: AriaList
  ) {
  }

  /**
   * Get role by props.
   *
   * Получить роль по пропсам.
   */
  role(): AriaList {
    return AriaStaticInclude.role(this.props.role ?? this.valueDefault?.role)
  }

  /**
   * Get control role.
   *
   * Получить роль управления.
   */
  control(): AriaList {
    return this.addRole(
      AriaStaticInclude.control(
        this.valueDefault?.id,
        this.props.ariaControls ?? this.valueDefault?.['aria-controls'],
        this.props.ariaExpanded ?? this.valueDefault?.['aria-expanded']
      )
    )
  }

  /**
   * Get modal role.
   *
   * Получить модальную роль.
   * @param isModal is modal/ является модальным
   */
  modal(isModal: boolean = true): AriaList {
    return this.addRole(
      AriaStaticInclude.modal(
        true,
        this.props.ariaLabelledby,
        this.props.ariaDescribedby
      ),
      isModal
    )
  }

  /**
   * Add role to list.
   *
   * Добавить роль в список.
   * @param list list to add/ список для добавления
   * @param isAdd is add/ добавлять ли
   */
  protected addRole(
    list: AriaList,
    isAdd: boolean = true
  ): AriaList {
    if (!isAdd) {
      return this.role()
    }

    return {
      ...this.role(),
      ...list
    }
  }
}
