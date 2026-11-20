// ai-none

import { computed, ref, watch } from 'vue'
import {
  DesignLifecycleAbstract,
  Geo,
  GeoPhone,
  isArray,
  isFilled
} from '@dxtmisha/functional'

import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { ModelInclude } from '../../classes/ModelInclude'
import type { InputPhoneCountryList } from './InputPhoneCountryList'
import type { InputPhoneData } from './InputPhoneData'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { InputPhonePropsBasic } from './props'

/**
 * Country state and selection manager for InputPhone component.
 * Handles active country resolution, `v-model:country` sync, and country selection events.
 *
 * Менеджер состояния и выбора страны для компонента InputPhone.
 * Отвечает за определение активной страны, синхронизацию `v-model:country` и события выбора страны.
 */
export class InputPhoneCountry extends DesignLifecycleAbstract {
  /** Selected country code ref / Ссылка на выбранный код страны */
  readonly item = ref<string>(Geo.getCountry())

  /** Cleanup function for active country watcher / Функция очистки наблюдателя active */
  protected watchActiveStop?: () => void
  /** Cleanup function for country prop watcher / Функция очистки наблюдателя свойства country */
  protected watchPropStop?: () => void
  /** Cleanup function for countryDefault watcher / Функция очистки наблюдателя countryDefault */
  protected watchDefaultStop?: () => void
  /** Cleanup function for allowed country list watcher / Функция очистки наблюдателя разрешённых стран */
  protected watchAllowedStop?: () => void

  /**
   * Constructor
   * @param props input data / входные данные
   * @param list function returning country list manager / функция, возвращающая менеджер списка стран
   * @param data function returning phone data manager / функция, возвращающая менеджер данных телефона
   * @param event function returning field event manager / функция, возвращающая менеджер событий поля
   * @param value function returning field value manager / функция, возвращающая менеджер значения поля
   * @param modelCountry function returning country model manager / функция, возвращающая менеджер модели страны
   */
  constructor(
    protected readonly props: Readonly<InputPhonePropsBasic>,
    protected readonly list: () => InputPhoneCountryList,
    protected readonly data: () => InputPhoneData,
    protected readonly event: () => FieldEventInclude,
    protected readonly value: () => FieldValueInclude<string>,
    protected readonly modelCountry?: () => ModelInclude<string>
  ) {
    super()

    this.initItem()
  }

  /** Computed active country code preserving manual/default shared-code selection / Вычисляемый активный код страны с сохранением ручного или заданного выбора для общих префиксов */
  readonly active = computed<string>(() => {
    if (this.isSameGroup()) {
      return this.item.value
    }

    return this.list().resolveAllowed(this.data().valueItem.value) ?? this.item.value
  })

  /** Computed active dial code value matching selected country or alternative subcode / Вычисляемый код для меню с учётом альтернативных подкодов */
  readonly activeDialCode = computed<string>(() => {
    const country = this.active.value
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

  /**
   * Normalizes country code to a starting phone prefix.
   *
   * Нормализует код страны в стартовый телефонный префикс.
   * @param country country code / код страны
   * @returns phone prefix / телефонный префикс
   */
  toPhone(country: string = this.item.value): string {
    return (GeoPhone.get(country)?.phone ?? 1).toString()
  }

  /**
   * Updates the country code based on the current phone value item.
   *
   * Обновляет код страны на основе текущего элемента значения телефона.
   */
  update(): void {
    const resolvedCountry = this.list().resolveAllowed(this.data().valueItem.value)

    if (
      resolvedCountry
      && !this.isSameGroup()
    ) {
      this.item.value = resolvedCountry
    }
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

      if (!this.list().isAllowed(country)) {
        return
      }

      const phone = data.detail?.phone
        ? String(data.detail.phone)
        : this.toPhone(country)

      this.item.value = country
      this.value().setFull(false)
      this.event().onValue(phone)
    }
  }

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    this.resetWatch()
    this.updateDefault()
    this.update()

    const countryProp = this.props.country ?? this.props.modelCountry

    if (
      countryProp !== undefined
      && countryProp !== this.active.value
    ) {
      this.modelCountry?.().emit(this.active.value)
    }

    this.watchActiveStop = watch(
      this.active,
      country => this.modelCountry?.().emit(country)
    )
    this.watchPropStop = watch(
      () => this.props.country ?? this.props.modelCountry,
      country => this.updateByProp(country)
    )
    this.watchDefaultStop = watch(
      () => this.props.countryDefault,
      () => this.updateDefault()
    )
    this.watchAllowedStop = watch(
      this.list().item,
      () => this.updateByAllowed()
    )
  }

  /** Callback after component unmounting / Обработчик после размонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.resetWatch()
  }

  /**
   * Initializes the selected country code from props and allowed list restrictions.
   *
   * Инициализирует выбранный код страны из пропсов с учётом ограничений списка разрешённых стран.
   */
  protected initItem(): void {
    const initialCountry = this.props.country ?? this.props.modelCountry ?? this.props.countryDefault

    if (
      initialCountry
      && this.list().isAllowed(initialCountry)
    ) {
      this.item.value = initialCountry
    } else if (!this.list().isAllowed(this.item.value)) {
      const firstAllowed = this.list().getFirst()

      if (firstAllowed) {
        this.item.value = firstAllowed
      }
    }
  }

  /**
   * Checks whether the current phone value still belongs to the selected country or only holds its shared prefix.
   *
   * Проверяет, соответствует ли текущее значение выбранной стране или содержит только её общий префикс.
   * @returns true if the current country should be preserved / true, если текущую страну нужно сохранить
   */
  protected isSameGroup(): boolean {
    const valueItem = this.data().valueItem.value
    const currentValue = this.value().item.value

    if (
      !valueItem
      || !currentValue
    ) {
      return true
    }

    const country = this.item.value
    const cleanValue = GeoPhone.cleanPhone(currentValue)

    return cleanValue === this.toPhone(country)
      || valueItem.items.some(item => item.value === country)
  }

  /**
   * Checks whether the current phone value already belongs to the specified country.
   *
   * Проверяет, соответствует ли текущее значение номера телефона указанной стране.
   * @param country country code / код страны
   * @returns true if phone value matches country / true, если номер соответствует стране
   */
  protected isMatchingValue(country: string): boolean {
    const currentValue = this.value().item.value

    if (!currentValue) {
      return false
    }

    if (GeoPhone.cleanPhone(currentValue) === this.toPhone(country)) {
      return true
    }

    const phoneItem = GeoPhone.getByPhone(currentValue)?.item

    if (!phoneItem) {
      return false
    }

    return phoneItem.value === country
      || phoneItem.items.some(item => item.value === country)
  }

  /**
   * Updates country state when the external country/modelCountry prop changes.
   *
   * Обновляет состояние страны при внешнем изменении пропса country/modelCountry.
   * @param country new country code / новый код страны
   */
  protected updateByProp(country?: string): void {
    if (
      country
      && country !== this.active.value
      && this.list().isAllowed(country)
    ) {
      this.item.value = country

      if (!this.isMatchingValue(country)) {
        this.value().setFull(false)
        this.event().onValue(this.toPhone(country))
      }
    }
  }

  /**
   * Updates country state when the allowed countries list changes and excludes the current country.
   *
   * Обновляет состояние страны при изменении списка разрешённых стран, если текущая страна больше не входит в список.
   */
  protected updateByAllowed(): void {
    if (!this.list().isAllowed(this.item.value)) {
      const fallbackCountry = this.list().getFirst()

      if (fallbackCountry) {
        this.item.value = fallbackCountry

        if (!this.isMatchingValue(fallbackCountry)) {
          this.value().setFull(false)
          this.event().onValue(this.toPhone(fallbackCountry))
        }
      }
    }
  }

  /**
   * Updates the country code when countryDefault changes and the country has not been modified yet.
   *
   * Обновляет код страны при изменении countryDefault, если страна ещё не была изменена.
   */
  protected updateDefault(): void {
    const countryDefault = this.props.countryDefault

    if (
      countryDefault
      && !this.props.country
      && !this.props.modelCountry
      && countryDefault !== this.item.value
      && this.item.value === Geo.getCountry()
      && this.list().isAllowed(countryDefault)
    ) {
      this.item.value = countryDefault
      this.value().set(this.toPhone(countryDefault))
      this.value().setFull(false)
    }
  }

  /**
   * Stops and resets active country watchers.
   *
   * Останавливает и сбрасывает активные наблюдатели страны.
   */
  protected resetWatch(): void {
    this.watchActiveStop?.()
    this.watchActiveStop = undefined
    this.watchPropStop?.()
    this.watchPropStop = undefined
    this.watchDefaultStop?.()
    this.watchDefaultStop = undefined
    this.watchAllowedStop?.()
    this.watchAllowedStop = undefined
  }
}
