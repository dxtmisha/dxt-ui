import { computed, onMounted, ref, watch } from 'vue'
import { Geo, GeoPhone, type GeoPhoneMap } from '@dxtmisha/functional'

import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'

import type { InputPhonePropsBasic } from './props'

/**
 * Data manager for InputPhone component.
 * Responsible for handling phone values, identifying the corresponding country, and normalizing phone values.
 *
 * Менеджер данных для компонента InputPhone.
 * Отвечает за обработку значений телефона, определение соответствующей страны и нормализацию значений телефона.
 */
export class InputPhoneData {
  /** Selected country code ref / Ссылка на выбранный код страны */
  readonly country = ref<string>(Geo.getCountry())

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param value field value / значение поля
   * @param event field event / событие поля
   */
  constructor(
    protected readonly props: InputPhonePropsBasic,
    protected readonly value?: FieldValueInclude,
    protected readonly event?: FieldEventInclude
  ) {
    if (this.props.countryDefault) {
      this.country.value = this.props.countryDefault
    }

    this.value?.set(this.toPhone(this.country.value))

    onMounted(() => {
      watch(this.valueItem, () => this.updateCountry())
    })
  }

  /** Computed info of the current phone map / Вычисляемая информация о текущей карте телефона */
  readonly item = computed<GeoPhoneMap | undefined>(() => {
    return this.valueItem.value ?? GeoPhone.getByCode(this.country.value)
  })

  /** Computed phone map based on current phone number / Вычисляемая карта телефона на основе текущего телефонного номера */
  readonly valueItem = computed<GeoPhoneMap | undefined>(() => {
    if (
      !this.props.countryBlock
      && this.value?.item.value
    ) {
      return GeoPhone.getByPhone(this.value.item.value)?.item
    }

    return undefined
  })

  /** Default phone value based on current country / Значение телефона по умолчанию на основе текущей страны */
  readonly valueDefault = computed<string>(() => {
    return this.toPhone(this.country.value)
  })

  /**
   * Handler for input event.
   *
   * Обработчик события ввода.
   * @param event input event / событие ввода
   * @param data event data / данные события
   */
  readonly onInput = (
    event: InputEvent,
    data: Record<string, any>
  ) => {
    this.event?.onInput(event, {
      ...data,
      value: this.toPhone(data?.value)
    })
  }

  /**
   * Handler for country code change event.
   *
   * Обработчик события изменения кода страны.
   * @param _ input event / событие ввода
   * @param data event data / данные события
   */
  readonly onCountry = (
    _: InputEvent,
    data?: Record<string, any>
  ) => {
    this.country.value = data?.value
    this.event?.onValue(this.toPhone(data?.value))
  }

  /**
   * Normalizes country code to a starting phone prefix.
   *
   * Нормализует код страны в стартовый телефонный префикс.
   * @param country country code / код страны
   * @returns phone prefix / телефонный префикс
   */
  protected toPhone(country: string): string {
    return (GeoPhone.get(country)?.phone ?? 1).toString()
  }

  /**
   * Updates the country code based on the current value item.
   *
   * Обновляет код страны на основе текущего элемента значения.
   */
  protected updateCountry(): void {
    if (this.valueItem.value) {
      this.country.value = this.valueItem.value.value ?? Geo.getCountry()
    }
  }
}
