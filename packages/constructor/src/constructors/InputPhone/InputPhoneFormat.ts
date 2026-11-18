import { computed } from 'vue'
import { GeoPhone } from '@dxtmisha/functional'

import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { InputPhoneData } from './InputPhoneData'

import type { InputPhonePropsBasic } from './props'

/**
 * Class for formatting phone values for display in disabled and readonly states.
 *
 * Класс для форматирования телефонных значений при отображении в состояниях disabled и readonly.
 */
export class InputPhoneFormat {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param data function returning data manager / функция, возвращающая менеджер данных
   * @param value function returning field value manager / функция, возвращающая менеджер значения поля
   */
  constructor(
    protected readonly props: Readonly<InputPhonePropsBasic>,
    protected readonly data: () => InputPhoneData,
    protected readonly value: () => FieldValueInclude<string>
  ) {
  }

  /** Formatted phone value for display in disabled/readonly input / Отформатированное значение телефона для отображения в полях disabled и readonly */
  readonly item = computed<string>(() => {
    const currentValue = this.value().item.value

    if (!currentValue) {
      return ''
    }

    if (this.props.countryBlock) {
      return this.formatByCountry(currentValue)
    }

    return GeoPhone.getByPhoneFull(currentValue, true).format
  })

  /**
   * Formats a phone value when countryBlock is enabled, ensuring the active country prefix is applied.
   *
   * Форматирует значение телефона при включенном countryBlock, подставляя префикс активной страны.
   * @param value raw phone value / исходное значение телефона
   * @returns formatted phone string / отформатированная строка телефона
   */
  protected formatByCountry(value: string): string {
    const defaultPrefix = this.data().valueDefault.value
    const cleanValue = GeoPhone.cleanPhone(value)
    const info = GeoPhone.getByPhoneFull(value, true)

    if (
      cleanValue
      && (
        info.item?.value !== this.data().country.value
        || !cleanValue.startsWith(defaultPrefix)
      )
    ) {
      const prefixedValue = `${defaultPrefix}${cleanValue}`
      const prefixed = GeoPhone.getByPhoneFull(prefixedValue, true)

      if (prefixed.format !== prefixedValue) {
        return prefixed.format
      }
    }

    return info.format
  }
}
