import {
  anyToString,
  GeoPhone,
  isFunction,
  isObjectNotArray,
  isRegExp,
  isString
} from '@dxtmisha/functional'

import { FieldInputCheckInclude } from '../../classes/Field/FieldInputCheckInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'

import type { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import type { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import type { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import type { FieldMatchInclude } from '../../classes/Field/FieldMatchInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { TextInclude } from '../../classes/TextInclude'
import type { InputPhoneMatch, InputPhoneMatchRule, InputPhoneValidationContext } from './basicTypes'
import type { InputPhoneCountryList } from './InputPhoneCountryList'
import type { InputPhoneData } from './InputPhoneData'

import type { FieldAllProps, FieldValidationItem } from '../../types/fieldTypes'
import type { InputPhonePropsBasic } from './props'

/**
 * Validation manager for the InputPhone component.
 * Extends FieldValidationInclude to treat a bare country dial prefix as empty during required validation
 * and prevents incomplete mask input statuses from overriding native input checks.
 *
 * Менеджер валидации для компонента InputPhone.
 * Расширяет FieldValidationInclude, чтобы считать голый телефонный префикс страны пустым значением при проверке required
 * и не перекрывать нативную проверку промежуточным статусом незаполненной маски.
 */
export class InputPhoneValidation extends FieldValidationInclude {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param attributes function returning object for working with input attributes / функция, возвращающая объект для работы с атрибутами ввода
   * @param value function returning object for value work / функция, возвращающая объект для работы со значениями
   * @param countryList function returning country list manager / функция, возвращающая менеджер списка стран
   * @param data function returning phone data manager / функция, возвращающая менеджер данных телефона
   * @param change function returning object for change state / функция, возвращающая объект для состояния изменения
   * @param code function returning object for error codes / функция, возвращающая объект для работы с кодами ошибок
   * @param match function returning object for match checking / функция, возвращающая объект для проверки совпадений
   * @param text function returning text localization helper / функция, возвращающая помощник локализации текста
   */
  constructor(
    protected override readonly props: Readonly<FieldAllProps & Pick<InputPhonePropsBasic, 'countryBlock' | 'phoneMatch'>>,
    attributes: () => FieldAttributesInclude,
    value: () => FieldValueInclude,
    protected readonly countryList: () => InputPhoneCountryList,
    protected readonly data: () => InputPhoneData,
    change?: () => FieldChangeInclude,
    code?: () => FieldCodeInclude,
    match?: () => FieldMatchInclude,
    protected readonly text?: () => TextInclude
  ) {
    super(
      props,
      attributes,
      value,
      change,
      code,
      match
    )
  }

  /**
   * Changes the validity data, clearing cached positive mask status so native checks remain active.
   *
   * Изменяет данные о валидности, сбрасывая кэшированный положительный статус маски для сохранения нативных проверок.
   * @param validation values for validity / значения для валидности
   * @returns current instance / текущий экземпляр
   */
  override set(validation: Record<string, unknown> | FieldValidationItem): this {
    if (
      'status' in validation
      && validation.status === true
    ) {
      this.validation.value = undefined
      return this
    }

    return super.set(validation)
  }

  /**
   * Checks the value using hidden input element, normalizing bare default country prefix to empty string
   * and validating phone mask completeness for non-empty values.
   *
   * Проверяет значение с помощью скрытого input, нормализуя голый префикс страны по умолчанию в пустую строку
   * и проверяя полноту заполнения телефонной маски для непустых значений.
   * @param value value to check / значение для проверки
   * @returns validation item or undefined / элемент валидации или undefined
   */
  protected override checkByInput(value: unknown): FieldValidationItem | undefined {
    const cleanValue = GeoPhone.cleanPhone(anyToString(value))

    if (
      !cleanValue
      || this.isBareDefaultPrefix(cleanValue)
    ) {
      return super.checkByInput('')
    }

    const nativeCheck = super.checkByInput(value)

    if (
      nativeCheck
      && !nativeCheck.status
    ) {
      return nativeCheck
    }

    if (
      !this.value().isFull.value
      || !this.isAllowedByCountryList(cleanValue)
    ) {
      return this.checkIncomplete(value)
    }

    const phoneMatchCheck = this.checkPhoneMatch(value)

    if (phoneMatchCheck) {
      return phoneMatchCheck
    }

    return nativeCheck
  }

  /**
   * Checks whether the phone digits belong to a country permitted by the configured country list.
   *
   * Проверяет, принадлежит ли номер телефона стране из разрешённого списка стран.
   * @param cleanValue digits-only phone string / строка телефона, содержащая только цифры
   * @returns true if allowed / true, если страна разрешена
   */
  protected isAllowedByCountryList(cleanValue: string): boolean {
    if (
      this.props.countryBlock
      || !this.countryList().item.value
    ) {
      return true
    }

    const phoneItem = GeoPhone.getByPhone(cleanValue)?.item

    if (!phoneItem) {
      return false
    }

    return Boolean(this.countryList().resolveAllowed(phoneItem))
  }

  /**
   * Checks whether the cleaned phone value is just the bare default country dial prefix.
   *
   * Проверяет, является ли очищенное значение только голым префиксом страны по умолчанию.
   * @param cleanValue digits-only phone string / строка телефона, содержащая только цифры
   * @returns true if value equals the bare default prefix / true, если значение равно голому префиксу по умолчанию
   */
  protected isBareDefaultPrefix(cleanValue: string): boolean {
    return !this.props.countryBlock
      && cleanValue === this.data().valueDefault.value
  }

  /**
   * Resolves the applicable validation rule for the active country from `phoneMatch`.
   *
   * Находит применимое правило валидации для активной страны из `phoneMatch`.
   * @param phoneMatch configured phoneMatch rule or country map / настроенное правило phoneMatch или карта стран
   * @param country active ISO country code / активный ISO-код страны
   * @returns matching rule or undefined / подходящее правило или undefined
   */
  protected getPhoneMatchRule(
    phoneMatch: InputPhoneMatch,
    country: string
  ): InputPhoneMatchRule | undefined {
    if (
      isFunction(phoneMatch)
      || isString(phoneMatch)
      || isRegExp(phoneMatch)
    ) {
      return phoneMatch
    }

    if (isObjectNotArray(phoneMatch)) {
      return phoneMatch[country]
        ?? phoneMatch[country.toUpperCase()]
        ?? phoneMatch[country.toLowerCase()]
    }

    return undefined
  }

  /**
   * Runs country-specific or custom validation configured via `phoneMatch`.
   *
   * Выполняет страно-специфичную или пользовательскую валидацию, заданную через `phoneMatch`.
   * @param value checked phone value / проверяемое значение телефона
   * @returns failed validation item or undefined when valid / элемент ошибки валидации или undefined при успехе
   */
  protected checkPhoneMatch(
    value: unknown
  ): FieldValidationItem | undefined {
    const phoneMatch = this.props.phoneMatch

    if (!phoneMatch) {
      return undefined
    }

    const context: InputPhoneValidationContext = {
      ...this.data().getDetail(value),
      value: anyToString(value)
    }
    const country = context.item?.value ?? ''
    const rule = this.getPhoneMatchRule(phoneMatch, country)

    if (!rule) {
      return undefined
    }

    return this.evaluatePhoneMatchRule(rule, value, context)
  }

  /**
   * Evaluates a resolved `phoneMatch` rule (callback, RegExp, or pattern string) against phone context.
   *
   * Проверяет найденное правило `phoneMatch` (колбэк, RegExp или строку паттерна) по контексту телефона.
   * @param rule validation rule to evaluate / проверяемое правило валидации
   * @param value checked phone value / проверяемое значение телефона
   * @param context phone validation context / контекст валидации телефона
   * @returns failed validation item or undefined when valid / элемент ошибки валидации или undefined при успехе
   */
  protected evaluatePhoneMatchRule(
    rule: InputPhoneMatchRule,
    value: unknown,
    context: InputPhoneValidationContext
  ): FieldValidationItem | undefined {
    if (isFunction(rule)) {
      const result = rule(context)

      if (result === false) {
        return this.checkIncomplete(value)
      }

      if (
        isString(result)
        && result.length > 0
      ) {
        return this.checkIncomplete(value, result)
      }

      return undefined
    }

    const phone = context.phone ?? ''

    if (isRegExp(rule)) {
      const matcher = new RegExp(rule.source, rule.flags.replace(/[gy]/g, ''))

      if (!matcher.test(phone)) {
        return this.checkIncomplete(value)
      }

      return undefined
    }

    try {
      if (!new RegExp(rule).test(phone)) {
        return this.checkIncomplete(value)
      }
    } catch {
      return this.checkIncomplete(value)
    }

    return undefined
  }

  /**
   * Builds a failed validation result for an incomplete or invalid phone number.
   *
   * Формирует результат ошибки валидации для неполного или некорректного номера телефона.
   * @param value checked phone value / проверяемое значение телефона
   * @param message optional custom error message / необязательное пользовательское сообщение об ошибке
   * @returns validation item / элемент валидации
   */
  protected checkIncomplete(
    value: unknown,
    message?: string
  ): FieldValidationItem {
    return {
      group: FieldInputCheckInclude.getGroupDefault(),
      status: false,
      validationMessage: message ?? this.text?.().invalidPhone ?? '',
      value
    }
  }
}
