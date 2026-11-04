import { computed, ref, watch } from 'vue'
import {
  type ConstrItem,
  DesignLifecycleAbstract,
  Geo,
  GeoPhone,
  type GeoPhoneMap
} from '@dxtmisha/functional'

import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { InputPhonePropsBasic } from './props'

/**
 * Data manager for InputPhone component.
 * Responsible for handling phone values, identifying the corresponding country, and normalizing phone values.
 *
 * Менеджер данных для компонента InputPhone.
 * Отвечает за обработку значений телефона, определение соответствующей страны и нормализацию значений телефона.
 */
export class InputPhoneData extends DesignLifecycleAbstract {
  /** Selected country code ref / Ссылка на выбранный код страны */
  readonly country = ref<string>(Geo.getCountry())

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param value function returning field value manager / функция, возвращающая менеджер значения поля
   * @param event function returning field event manager / функция, возвращающая менеджер событий поля
   */
  constructor(
    protected readonly props: InputPhonePropsBasic,
    protected readonly value: () => FieldValueInclude,
    protected readonly event?: () => FieldEventInclude
  ) {
    super()

    if (this.props.countryDefault) {
      this.country.value = this.props.countryDefault
    }
  }

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    if (!this.value().boolean) {
      this.value().set(this.toPhone(this.country.value))
    }

    this.updateCountry()
    watch(this.valueItem, () => this.updateCountry())
  }

  /** Computed info of the current phone map / Вычисляемая информация о текущей карте телефона */
  readonly item = computed<GeoPhoneMap | undefined>(() => {
    return this.valueItem.value ?? GeoPhone.getByCode(this.country.value)
  })

  /** Computed phone map based on current phone number / Вычисляемая карта телефона на основе текущего телефонного номера */
  readonly valueItem = computed<GeoPhoneMap | undefined>(() => {
    const currentValue = this.value().item.value

    if (
      !this.props.countryBlock
      && currentValue
    ) {
      return GeoPhone.getByPhone(currentValue)?.item
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
    data: ConstrItem
  ): void => {
    this.event?.().onInput(event, {
      ...data,
      value: this.toPhone(data?.value)
    })
  }

  /**
   * Handler for country code change event.
   *
   * Обработчик события изменения кода страны.
   * @param event click or input event / событие клика или ввода
   * @param data event data / данные события
   */
  readonly onCountry = (
    event: MouseEvent | InputEvent,
    data?: EventClickValue
  ): void => {
    void event
    this.country.value = data?.value
    this.event?.().onValue(this.toPhone(data?.value))
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
