// ai-none

import { GeoPhone, isArray } from '@dxtmisha/functional'

import type { InputPhoneDialCodeProps } from './props'

/**
 * Class for managing disabled and read-only status resolution for InputPhoneDialCode.
 *
 * Класс для управления состоянием отключения и режима «только для чтения» для InputPhoneDialCode.
 */
export class InputPhoneDialCodeStatus {
  /**
   * Constructor
   * @param props input properties / входящие свойства
   */
  constructor(
    protected readonly props: Readonly<InputPhoneDialCodeProps>
  ) {
  }

  /**
   * Returns button status bindings (`disabled` and `readonly`) when defined or implied.
   *
   * Возвращает привязки статуса кнопки (`disabled` и `readonly`), если они заданы или вычислены.
   * @returns status bindings object / объект привязок статуса
   */
  get binds(): { disabled?: boolean, readonly?: boolean } {
    return {
      ...this.getDisabledBind(),
      ...this.getReadonlyBind()
    }
  }

  /**
   * Returns menu status bindings (`disabled`) when interaction is blocked.
   *
   * Возвращает привязки статуса меню (`disabled`), если взаимодействие заблокировано.
   * @returns menu status bindings object / объект привязок статуса меню
   */
  get bindsMenu(): { disabled?: boolean } {
    if (this.isBlocked()) {
      return { disabled: true }
    }

    return {}
  }

  /**
   * Returns `disabled` binding object when the disabled prop is explicitly defined.
   *
   * Возвращает объект привязки `disabled`, если свойство задано явно.
   * @returns disabled binding object / объект привязки `disabled`
   */
  protected getDisabledBind(): { disabled?: boolean } {
    if (this.props.disabled !== undefined) {
      return { disabled: this.props.disabled }
    }

    return {}
  }

  /**
   * Returns `readonly` binding object when read-only mode is active.
   *
   * Возвращает объект привязки `readonly`, если активен режим «только для чтения».
   * @returns readonly binding object / объект привязки `readonly`
   */
  protected getReadonlyBind(): { readonly?: boolean } {
    if (this.isReadonly()) {
      return { readonly: true }
    }

    return {}
  }

  /**
   * Checks whether country selection is read-only (explicit readonly or at most one single-code country in list).
   *
   * Проверяет, заблокирован ли выбор страны (явный readonly или список не более чем из одной страны с одним кодом).
   * @returns true if selector interaction is read-only / true, если селектор доступен только для чтения
   */
  isReadonly(): boolean {
    if (this.props.readonly) {
      return true
    }

    const countryList = this.props.countryList ?? this.props.menuCountryAttrs?.list

    if (
      isArray(countryList)
      && countryList.length <= 1
    ) {
      const singleCountry = countryList[0]

      return !singleCountry || GeoPhone.getCodes(singleCountry).length <= 1
    }

    return false
  }

  /**
   * Checks whether interaction with the country selector is blocked (disabled or read-only).
   *
   * Проверяет, заблокировано ли взаимодействие с выбором страны (отключено или только для чтения).
   * @returns true if blocked / true, если взаимодействие заблокировано
   */
  isBlocked(): boolean {
    return Boolean(this.props.disabled || this.isReadonly())
  }
}
