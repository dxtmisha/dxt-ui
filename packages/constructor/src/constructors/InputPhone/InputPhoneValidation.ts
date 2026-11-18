import { anyToString, GeoPhone } from '@dxtmisha/functional'

import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'

import type { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import type { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import type { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import type { FieldMatchInclude } from '../../classes/Field/FieldMatchInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
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
   * @param data function returning phone data manager / функция, возвращающая менеджер данных телефона
   * @param change function returning object for change state / функция, возвращающая объект для состояния изменения
   * @param code function returning object for error codes / функция, возвращающая объект для работы с кодами ошибок
   * @param match function returning object for match checking / функция, возвращающая объект для проверки совпадений
   */
  constructor(
    protected override readonly props: FieldAllProps & Pick<InputPhonePropsBasic, 'countryBlock'>,
    attributes: () => FieldAttributesInclude,
    value: () => FieldValueInclude,
    protected readonly data: () => InputPhoneData,
    change?: () => FieldChangeInclude,
    code?: () => FieldCodeInclude,
    match?: () => FieldMatchInclude
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
   * Checks the value using hidden input element, normalizing bare default country prefix to empty string.
   *
   * Проверяет значение с помощью скрытого input, нормализуя голый префикс страны по умолчанию в пустую строку.
   * @param value value to check / значение для проверки
   * @returns validation item or undefined / элемент валидации или undefined
   */
  protected override checkByInput(value: unknown): FieldValidationItem | undefined {
    const cleanValue = GeoPhone.cleanPhone(anyToString(value))

    if (
      !this.props.countryBlock
      && cleanValue === this.data().valueDefault.value
    ) {
      return super.checkByInput('')
    }

    return super.checkByInput(value)
  }
}
