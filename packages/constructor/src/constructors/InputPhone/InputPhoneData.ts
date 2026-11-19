import { computed, nextTick, ref, watch } from 'vue'
import {
  DesignLifecycleAbstract,
  Geo,
  GeoPhone,
  type GeoPhoneMap,
  isArray,
  isFilled
} from '@dxtmisha/functional'

import type { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { WindowEmitOptions } from '../Window'

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

  /** Cleanup function for valueItem watcher / Функция очистки наблюдателя valueItem */
  protected watchStop?: () => void
  /** Cleanup function for countryDefault watcher / Функция очистки наблюдателя countryDefault */
  protected watchCountryDefaultStop?: () => void

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param element function returning field element manager / функция, возвращающая менеджер элемента поля
   * @param event function returning field event manager / функция, возвращающая менеджер событий поля
   * @param value function returning field value manager / функция, возвращающая менеджер значения поля
   */
  constructor(
    protected readonly props: Readonly<InputPhonePropsBasic>,
    protected readonly element: () => FieldElementInclude,
    protected readonly event: () => FieldEventInclude,
    protected readonly value: () => FieldValueInclude<string>
  ) {
    super()

    if (this.props.countryDefault) {
      this.country.value = this.props.countryDefault
    }
  }

  /** Computed active country code preserving manual/default shared-code selection / Вычисляемый активный код страны с сохранением ручного или заданного выбора для общих префиксов */
  readonly activeCountry = computed<string>(() => {
    if (this.isSameCountryGroup()) {
      return this.country.value
    }

    return this.valueItem.value?.value ?? this.country.value
  })

  /** Computed active dial code value matching selected country or alternative subcode / Вычисляемый код для меню с учётом альтернативных подкодов */
  readonly activeDialCode = computed<string>(() => {
    const country = this.activeCountry.value
    const codes = GeoPhone.getCodes(country)

    if (codes.length > 1) {
      const currentValue = this.value().item.value
      const cleanValue = currentValue ? GeoPhone.cleanPhone(currentValue) : ''

      for (let index = 1; index < codes.length; index++) {
        const code = codes[index]

        if (
          code
          && cleanValue.startsWith(GeoPhone.cleanPhone(code))
        ) {
          return `${country}-${code}`
        }
      }
    }

    return country
  })

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
   * Moves focus to the phone input element.
   *
   * Перемещает фокус на элемент ввода телефона.
   */
  focus(): void {
    this.element().get()?.focus()
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

    if (
      data
      && !isArray(data.value)
      && isFilled(data.value)
    ) {
      const country = String(data.detail?.country ?? data.value)
      const phone = data.detail?.phone
        ? String(data.detail.phone)
        : this.toPhone(country)

      this.country.value = country
      this.event().onValue(phone)
    }
  }

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    this.resetWatch()
    this.updateCountryDefault()

    if (!this.value().boolean) {
      this.value().set(this.toPhone(this.country.value))
    }

    this.updateCountry()
    this.watchStop = watch(
      [this.valueItem, () => this.value().item.value],
      () => this.updateCountry()
    )
    this.watchCountryDefaultStop = watch(
      () => this.props.countryDefault,
      () => this.updateCountryDefault()
    )
  }

  /** Callback after component unmounting / Обработчик после размонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.resetWatch()
  }

  /**
   * Handler for dial code window state change event.
   * Moves focus back to the phone input after closing the window.
   *
   * Обработчик события изменения состояния окна выбора кода страны.
   * Перемещает фокус обратно на поле ввода телефона после закрытия окна.
   * @param options window state options / параметры состояния окна
   */
  readonly onWindow = (options: WindowEmitOptions): void => {
    if (!options.open) {
      nextTick(() => {
        this.focus()
      })
    }
  }

  /**
   * Checks whether the current phone value still belongs to the selected country or only holds its shared prefix.
   *
   * Проверяет, соответствует ли текущее значение выбранной стране или содержит только её общий префикс.
   * @returns true if the current country should be preserved / true, если текущую страну нужно сохранить
   */
  protected isSameCountryGroup(): boolean {
    const valueItem = this.valueItem.value
    const currentValue = this.value().item.value

    if (
      !valueItem
      || !currentValue
    ) {
      return true
    }

    const country = this.country.value
    const cleanValue = GeoPhone.cleanPhone(currentValue)

    return cleanValue === this.toPhone(country)
      || valueItem.items.some(item => item.value === country)
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
    if (
      this.valueItem.value
      && !this.isSameCountryGroup()
    ) {
      this.country.value = this.valueItem.value.value ?? Geo.getCountry()
    }
  }

  /**
   * Updates the country code when countryDefault changes and the country has not been modified yet.
   *
   * Обновляет код страны при изменении countryDefault, если страна ещё не была изменена.
   */
  protected updateCountryDefault(): void {
    const countryDefault = this.props.countryDefault

    if (
      countryDefault
      && countryDefault !== this.country.value
      && this.country.value === Geo.getCountry()
    ) {
      this.country.value = countryDefault
      this.value().set(this.valueDefault.value)
    }
  }

  /**
   * Stops and resets active watchers.
   *
   * Останавливает и сбрасывает активные наблюдатели.
   */
  protected resetWatch(): void {
    this.watchStop?.()
    this.watchStop = undefined
    this.watchCountryDefaultStop?.()
    this.watchCountryDefaultStop = undefined
  }
}
