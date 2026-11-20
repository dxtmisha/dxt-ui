import { anyToString, GeoPhone } from '@dxtmisha/functional'

import { FieldInputCheckInclude } from '../../classes/Field/FieldInputCheckInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'

import type { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import type { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import type { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import type { FieldMatchInclude } from '../../classes/Field/FieldMatchInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { TextInclude } from '../../classes/TextInclude'
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
    protected override readonly props: FieldAllProps & Pick<InputPhonePropsBasic, 'countryBlock'>,
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
      cleanValue
      && (
        !this.value().isFull.value
        || !this.isAllowedByCountryList(cleanValue)
      )
    ) {
      return this.checkIncomplete(value)
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
   * Builds a failed validation result for an incomplete phone number.
   *
   * Формирует результат ошибки валидации для неполного номера телефона.
   * @param value checked phone value / проверяемое значение телефона
   * @returns validation item / элемент валидации
   */
  protected checkIncomplete(value: unknown): FieldValidationItem {
    return {
      group: FieldInputCheckInclude.getGroupDefault(),
      status: false,
      validationMessage: this.text?.().invalidPhone ?? '',
      value
    }
  }
}
