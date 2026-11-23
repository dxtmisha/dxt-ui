import { nextTick } from 'vue'
import { eventStopPropagation, GeoPhone, type GeoPhoneMapInfoFull } from '@dxtmisha/functional'

import type { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { InputPhoneResolved } from './basicTypes'
import type { InputPhoneCountry } from './InputPhoneCountry'
import type { InputPhoneCountryList } from './InputPhoneCountryList'

import type { InputPhonePropsBasic } from './props'

/**
 * Paste handler manager for InputPhone component.
 * Processes clipboard paste events when there is no partial text selection, checking whether the pasted value
 * matches a full phone format (indicating a full number with country code).
 *
 * Менеджер обработки вставки из буфера обмена для компонента InputPhone.
 * Обрабатывает событие paste при отсутствии частичного выделения текста, проверяя соответствие
 * вставляемого значения полному формату номера телефона с кодом страны.
 */
export class InputPhonePaste {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param country function returning country manager / функция, возвращающая менеджер страны
   * @param countryList function returning country list manager / функция, возвращающая менеджер списка стран
   * @param element function returning field element manager / функция, возвращающая менеджер элемента поля
   * @param event function returning field event manager / функция, возвращающая менеджер событий поля
   * @param value function returning field value manager / функция, возвращающая менеджер значения поля
   */
  constructor(
    protected readonly props: Readonly<InputPhonePropsBasic>,
    protected readonly country: () => InputPhoneCountry,
    protected readonly countryList: () => InputPhoneCountryList,
    protected readonly element: () => FieldElementInclude,
    protected readonly event: () => FieldEventInclude,
    protected readonly value: () => FieldValueInclude<string>
  ) { }

  /**
   * Handles paste event on the phone input element.
   * Performs full-format phone detection when there is no partial text selection (or when the entire value is selected).
   *
   * Обрабатывает событие вставки в поле ввода телефона.
   * Выполняет проверку полного формата номера при отсутствии частичного выделения (или при полном выделении значения).
   * @param event clipboard event / событие буфера обмена
   */
  readonly onPaste = (event: ClipboardEvent): void => {
    if (
      !this.event().isEnabled()
      || this.hasSelection(event)
    ) {
      return
    }

    const clipboardText = event.clipboardData?.getData('text')
    const cleanPasted = clipboardText ? GeoPhone.cleanPhone(clipboardText) : ''

    if (!cleanPasted) {
      return
    }

    this.applyResolved(event, this.resolveFull(cleanPasted))
  }

  /**
   * Resolves cleaned phone digits into a country code and full formatted phone string.
   * Falls back to normalizing the active country's domestic trunk prefix (`within`) to its dial code.
   *
   * Определяет код страны и полный отформатированный номер по очищенным цифрам.
   * При отсутствии прямого совпадения заменяет внутренний префикс активной страны (`within`) на её код.
   * @param cleanPhone cleaned digits string / строка из очищенных цифр
   * @returns resolved country code and formatted phone, or undefined / код страны и номер или undefined
   */
  resolveFull(cleanPhone: string): InputPhoneResolved | undefined {
    const directInfo = this.getFullInfo(cleanPhone)

    if (directInfo?.item?.value) {
      return {
        country: this.countryList().resolveAllowed(directInfo.item) ?? directInfo.item.value,
        format: directInfo.format
      }
    }

    const activeCountry = this.country().active.value
    const within = GeoPhone.get(activeCountry)?.within

    if (
      !within
      || !cleanPhone.startsWith(within)
    ) {
      return undefined
    }

    const normalizedInfo = this.getFullInfo(
      `${this.country().toPhone(activeCountry)}${cleanPhone.slice(within.length)}`
    )

    if (normalizedInfo?.item?.items.some(entry => entry.value === activeCountry)) {
      return {
        country: activeCountry,
        format: normalizedInfo.format
      }
    }

    return undefined
  }

  /**
   * Stops event propagation and applies a resolved full phone if allowed by `countryBlock` and `countryList`.
   *
   * Останавливает всплытие события и применяет определённый полный номер при разрешении `countryBlock` и `countryList`.
   * @param event DOM event / DOM-событие
   * @param resolved resolved country and formatted phone / определённый код страны и отформатированный номер
   */
  applyResolved(
    event: Event,
    resolved?: InputPhoneResolved
  ): void {
    if (
      resolved
      && this.isAllowedPaste(resolved.country, resolved.format)
    ) {
      eventStopPropagation(event)
      void this.applyFullPaste(resolved.country, resolved.format)
    }
  }

  /**
   * Validates whether a digit sequence matches a complete phone mask.
   *
   * Проверяет, соответствует ли последовательность цифр полной маске номера.
   * @param phone digits string / строка из цифр
   * @returns full phone info if complete, otherwise undefined / полная информация о номере или undefined
   */
  protected getFullInfo(phone: string): GeoPhoneMapInfoFull | undefined {
    const info = GeoPhone.getByPhoneFull(phone)

    if (
      info.item?.value
      && info.format !== phone
    ) {
      return info
    }

    return undefined
  }

  /**
   * Checks whether the resolved phone is allowed under the current `countryBlock` and `countryList` settings.
   *
   * Проверяет, разрешён ли определённый номер с учётом флага `countryBlock` и списка `countryList`.
   * @param targetCountry resolved country code / определённый код страны
   * @param format formatted full phone string / отформатированный полный номер
   * @returns true if allowed / true, если применение разрешено
   */
  protected isAllowedPaste(
    targetCountry: string,
    format: string
  ): boolean {
    if (!this.countryList().isAllowed(targetCountry)) {
      return false
    }

    return !this.props.countryBlock
      || GeoPhone.cleanPhone(format).startsWith(
        this.country().toPhone()
      )
  }

  /**
   * Checks whether the target input element has a partial text selection range.
   * Full-field selection (`start === 0 && end >= target.value.length`) is treated as a full replacement.
   *
   * Проверяет, есть ли частичное выделение текста в элементе ввода.
   * Полное выделение поля (`start === 0 && end >= target.value.length`) считается полной заменой номера.
   * @param event clipboard event / событие буфера обмена
   * @returns true if a partial selection range exists / true, если есть частичное выделение текста
   */
  protected hasSelection(event: ClipboardEvent): boolean {
    const target = event.target as HTMLInputElement | null
    const start = target?.selectionStart ?? 0
    const end = target?.selectionEnd ?? 0

    return start !== end && (start > 0 || end < (target?.value.length ?? 0))
  }

  /**
   * Applies a full phone number with its resolved country code.
   *
   * Применяет полный номер телефона с определённым кодом страны.
   * @param targetCountry resolved country code / определённый код страны
   * @param formattedPhone formatted full phone string / отформатированная строка полного номера
   */
  protected async applyFullPaste(
    targetCountry: string,
    formattedPhone: string
  ): Promise<void> {
    if (!this.props.countryBlock) {
      this.country().item.value = targetCountry
    }

    this.value().setFull(true)
    this.event().onValue(formattedPhone)

    await nextTick()

    const element = this.element().getElement().value

    if (
      element
      && 'setValue' in element
      && typeof element.setValue === 'function'
    ) {
      element.setValue(formattedPhone)
    }
  }
}
