import { getRef, type RefOrNormal } from '@dxtmisha/functional'

import { AriaStaticInclude } from './AriaStaticInclude'

import type { RoleType } from '../types/roleTypes'
import type { AriaAll, AriaList } from '../types/ariaTypes'

/**
 * The class returns data for working with ARIA roles.
 *
 * Класс возвращает данные для работы с ARIA ролями.
 */
export class AriaInclude {
  constructor(
    protected readonly props: AriaAll,
    protected readonly valueDefault?: RefOrNormal<AriaList>
  ) {
  }

  /**
   * Get role by props.
   *
   * Получить роль по пропсам.
   * @param newRole new role/ новая роль
   */
  role(newRole?: RoleType): AriaList {
    return AriaStaticInclude.role(
      newRole ?? this.props.role ?? this.getValue('role')
    )
  }

  /**
   * Get control role.
   *
   * Получить роль управления.
   */
  control(): AriaList {
    return this.addRole(
      AriaStaticInclude.control(
        this.getValue('id'),
        this.props.ariaControls ?? this.getValue('aria-controls'),
        this.props.ariaHaspopup ?? this.getValue('aria-haspopup'),
        this.props.ariaExpanded ?? this.getValue('aria-expanded')
      ),
      true,
      'button'
    )
  }

  /**
   * Get ARIA label.
   *
   * Получить ARIA label.
   */
  label(): AriaList {
    return AriaStaticInclude.label(
      this.props.ariaLabel ?? this.getValue('aria-label')
    )
  }

  /**
   * Get ARIA live attribute.
   *
   * Получить атрибут ARIA live.
   */
  live(): AriaList {
    return AriaStaticInclude.live(
      this.props.ariaLive ?? this.getValue('aria-live')
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
   * Get value by min and max.
   *
   * Получить значение по мин и макс.
   */
  valueMinMax(): AriaList {
    return AriaStaticInclude.valueMinMax(
      this.getValue('aria-valuenow'),
      this.getValue('aria-valuemin'),
      this.getValue('aria-valuemax')
    )
  }

  /**
   * Get default value.
   *
   * Получить значение по умолчанию.
   */
  getValueDefault(): AriaList | undefined {
    return getRef(this.valueDefault)
  }

  /**
   * Get value by key.
   *
   * Получить значение по ключу.
   * @param key
   */
  getValue(key: keyof AriaList): any | undefined {
    return this.getValueDefault()?.[key]
  }

  /**
   * Add role to list.
   *
   * Добавить роль в список.
   * @param list list to add/ список для добавления
   * @param isAdd is add/ добавлять ли
   * @param role role type/ тип роли
   */
  protected addRole(
    list: AriaList,
    isAdd: boolean = true,
    role?: RoleType
  ): AriaList {
    if (!isAdd) {
      return this.role(role)
    }

    return {
      ...this.role(role),
      ...list
    }
  }
}
