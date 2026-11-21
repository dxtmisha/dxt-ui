import { GeoPhone, isAutofillEvent } from '@dxtmisha/functional'

import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import type { InputPhoneResolved } from './basicTypes'
import type { InputPhoneCountry } from './InputPhoneCountry'
import type { InputPhonePaste } from './InputPhonePaste'

/**
 * Browser autofill handler manager for InputPhone component.
 * Intercepts autofill `input` and `animationstart` events, deduplicating active dial code prefixes
 * before Mask processes the value.
 *
 * Менеджер обработки автозаполнения браузера для компонента InputPhone.
 * Перехватывает события `input` и `animationstart` при автозаполнении, удаляя дублированный префикс
 * кода страны до обработки значения маской.
 */
export class InputPhoneAutofill {
  /**
   * Constructor
   *
   * Конструктор
   * @param country function returning country manager / функция, возвращающая менеджер страны
   * @param event function returning field event manager / функция, возвращающая менеджер событий поля
   * @param paste function returning paste manager / функция, возвращающая менеджер вставки
   */
  constructor(
    protected readonly country: () => InputPhoneCountry,
    protected readonly event: () => FieldEventInclude,
    protected readonly paste: () => InputPhonePaste
  ) { }

  /**
   * Handles input events triggered by browser autofill, `insertReplacementText`, or multi-digit insertion.
   * Normalizes full numbers and strips duplicated active dial code prefixes before Mask runs.
   *
   * Обрабатывает события input, вызванные автозаполнением браузера, `insertReplacementText` или вставкой нескольких цифр.
   * Нормализует полные номера и удаляет дублированный префикс активной страны до обработки в Mask.
   * @param event input event / событие ввода
   */
  readonly onInput = (event: InputEvent | Event): void => {
    if (!this.event().isEnabled()) {
      return
    }

    const target = event.target as HTMLInputElement | null

    if (
      !target
      || !this.isAutofillInput(event, target)
    ) {
      return
    }

    this.handleAutofill(event, target.value)
  }

  /**
   * Handles CSS animation start events fired when Chrome/Safari applies browser autofill.
   *
   * Обрабатывает события начала CSS-анимации, возникающие при автозаполнении в Chrome/Safari.
   * @param event animation event / событие анимации
   */
  readonly onAnimationstart = (event: AnimationEvent): void => {
    if (
      !this.event().isEnabled()
      || !event.animationName.includes('autofill')
    ) {
      return
    }

    const target = event.target as HTMLInputElement | null

    if (target?.value) {
      this.handleAutofill(event, target.value)
    }
  }

  /**
   * Resolves autofill value from event payload or full input string and applies it when allowed.
   *
   * Определяет номер из данных события автозаполнения или значения поля и применяет его при разрешении.
   * @param event DOM event / DOM-событие
   * @param rawValue current input string / текущая строка поля ввода
   */
  protected handleAutofill(
    event: Event,
    rawValue: string
  ): void {
    const eventData = 'data' in event && typeof event.data === 'string'
      ? event.data
      : undefined
    const cleanEventData = eventData ? GeoPhone.cleanPhone(eventData) : ''

    const resolved = (
      cleanEventData.length > 1
        ? this.resolveAutofill(eventData as string)
        : undefined
    ) ?? this.resolveAutofill(rawValue)

    this.paste().applyResolved(event, resolved)
  }

  /**
   * Checks whether the input event represents browser autofill or batch replacement rather than single-key typing.
   *
   * Проверяет, является ли событие input автозаполнением браузера или пакетной заменой, а не посимвольным вводом.
   * @param event input event / событие ввода
   * @param target input element / элемент ввода
   * @returns true if autofill or batch insertion is detected / true, если обнаружено автозаполнение или пакетная вставка
   */
  protected isAutofillInput(
    event: Event,
    target: HTMLInputElement
  ): boolean {
    if (isAutofillEvent(event, target)) {
      return true
    }

    const inputType = 'inputType' in event && typeof event.inputType === 'string'
      ? event.inputType
      : ''

    if (inputType === 'insertFromPaste') {
      return true
    }

    if (
      inputType === 'insertText'
      || inputType === 'insertCompositionText'
    ) {
      const data = 'data' in event && typeof event.data === 'string'
        ? event.data
        : ''

      return GeoPhone.cleanPhone(data).length > 1
    }

    return false
  }

  /**
   * Resolves an autofilled string into country and formatted phone, stripping duplicated leading dial codes if needed.
   * Legitimate numbers whose national part starts with the same digits as the country code (e.g. KZ `+7-7...`, IT `+39-39...`)
   * match on the full mask first and are never trimmed.
   *
   * Определяет страну и отформатированный номер при автозаполнении, при необходимости удаляя продублированный префикс кода страны.
   * Легитимные номера, у которых национальная часть совпадает с кодом (например KZ `+7-7...`, IT `+39-39...`),
   * распознаются полной маской на первом шаге и не обрезаются.
   * @param rawValue raw autofill string / исходная строка автозаполнения
   * @returns resolved country code and formatted phone, or undefined / код страны и номер или undefined
   */
  protected resolveAutofill(rawValue: string): InputPhoneResolved | undefined {
    const appendedPlus = rawValue.match(/^[^\d+]*\+?\d+[^\d+]*(\+[\d\s()-]+)$/)?.[1]

    if (appendedPlus) {
      const byAppended = this.paste().resolveFull(GeoPhone.cleanPhone(appendedPlus))

      if (byAppended) {
        return byAppended
      }
    }

    const clean = GeoPhone.cleanPhone(rawValue)

    if (!clean) {
      return undefined
    }

    const direct = this.paste().resolveFull(clean)

    if (direct) {
      return direct
    }

    const activePrefix = this.country().toPhone()

    if (
      activePrefix
      && clean.startsWith(activePrefix)
    ) {
      return this.paste().resolveFull(clean.slice(activePrefix.length))
    }

    return undefined
  }
}
