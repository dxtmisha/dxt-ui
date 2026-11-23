import { computed, nextTick, watch } from 'vue'
import {
  anyToString,
  DesignLifecycleAbstract,
  GeoPhone,
  type GeoPhoneMap,
  type GeoPhoneMapInfoFull
} from '@dxtmisha/functional'

import type { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { WindowEmitOptions } from '../Window'
import type { InputPhoneDetail } from './basicTypes'
import type { InputPhoneCountry } from './InputPhoneCountry'
import type { InputPhoneCountryList } from './InputPhoneCountryList'

import type { InputPhonePropsBasic } from './props'

/**
 * Data manager for InputPhone component.
 * Responsible for phone mask lookup, prefix defaults, completeness synchronization, and input focus.
 *
 * Менеджер данных для компонента InputPhone.
 * Отвечает за определение карты телефонной маски, префикс по умолчанию, синхронизацию полноты номера и фокус поля.
 */
export class InputPhoneData extends DesignLifecycleAbstract {
  /** Cleanup function for valueItem watcher / Функция очистки наблюдателя valueItem */
  protected watchStop?: () => void

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param country function returning country manager / функция, возвращающая менеджер страны
   * @param countryList function returning country list manager / функция, возвращающая менеджер списка стран
   * @param element function returning field element manager / функция, возвращающая менеджер элемента поля
   * @param value function returning field value manager / функция, возвращающая менеджер значения поля
   */
  constructor(
    protected readonly props: Readonly<InputPhonePropsBasic>,
    protected readonly country: () => InputPhoneCountry,
    protected readonly countryList: () => InputPhoneCountryList,
    protected readonly element: () => FieldElementInclude,
    protected readonly value: () => FieldValueInclude<string>
  ) {
    super()
  }

  /** Computed info of the current phone map / Вычисляемая информация о текущей карте телефона */
  readonly item = computed<GeoPhoneMap | undefined>(() => {
    return this.valueItem.value ?? GeoPhone.getByCode(this.country().item.value)
  })

  /** Computed phone map based on current phone number / Вычисляемая карта телефона на основе текущего телефонного номера */
  readonly valueItem = computed<GeoPhoneMap | undefined>(() => {
    const currentValue = this.value().item.value

    if (
      !this.props.countryBlock
      && currentValue
    ) {
      const matched = GeoPhone.getByPhone(currentValue)?.item

      if (
        matched
        && this.countryList().resolveAllowed(matched)
      ) {
        return matched
      }
    }

    return undefined
  })

  /** Default phone value based on current country / Значение телефона по умолчанию на основе текущей страны */
  readonly valueDefault = computed<string>(() => {
    return this.country().toPhone()
  })

  /** E.164 phone number when input is complete / Номер в формате E.164 при полном заполнении */
  readonly e164 = computed<string | undefined>(() => {
    if (
      this.value().isFull.value
      && this.value().item.value
    ) {
      return this.getDetail().e164 || undefined
    }

    return undefined
  })

  /** Digits-only phone number when input is complete / Цифры номера телефона при полном заполнении */
  readonly digits = computed<string | undefined>(() => {
    if (
      this.value().isFull.value
      && this.value().item.value
    ) {
      return this.getDetail().digits || undefined
    }

    return undefined
  })

  /**
   * Returns current phone metadata context preserving the `GeoPhoneMapInfoFull` structure (`item`, `phone`, `full`, `format`) plus `isFull`.
   *
   * Возвращает текущий контекст метаданных телефона в структуре `GeoPhoneMapInfoFull` (`item`, `phone`, `full`, `format`) с флагом `isFull`.
   * @param rawValue optional raw phone value to inspect / необязательное исходное значение телефона
   * @returns phone metadata context / контекст метаданных телефона
   */
  getDetail(rawValue?: unknown): InputPhoneDetail {
    const currentValue = rawValue === undefined
      ? anyToString(this.value().item.value)
      : anyToString(rawValue)
    const activeCountry = this.country().active.value
    const info = this.getPhoneInfo(currentValue, activeCountry)
    const activeItem = this.resolveActiveItem(info.item, activeCountry)

    return {
      ...info,
      item: activeItem,
      phone: info.phone ?? '',
      isFull: this.value().isFull.value
    }
  }

  /**
   * Moves focus to the phone input element.
   *
   * Перемещает фокус на элемент ввода телефона.
   */
  focus(): void {
    this.element().get()?.focus()
  }

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    this.resetWatch()

    if (!this.value().boolean) {
      this.value().set(this.valueDefault.value)
      this.value().setFull(false)
    }

    this.watchStop = watch(
      [this.valueItem, () => this.value().item.value],
      () => {
        this.country().update()
        this.syncFullState()
      },
      { flush: 'sync' }
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
   * Checks whether a digit string in `countryBlock` mode already includes the country dial code.
   *
   * Проверяет, содержит ли строка цифр в режиме `countryBlock` уже включённый телефонный код страны.
   * @param cleanValue cleaned digits string / строка из очищенных цифр
   * @param dialCode active country dial code digits / цифры телефонного кода активной страны
   * @returns true if digits already include the dial code / true, если цифры уже включают код страны
   */
  protected isPrefixedFullPhone(
    cleanValue: string,
    dialCode: string
  ): boolean {
    const directInfo = GeoPhone.getByPhoneFull(cleanValue)
    const isDirectFull = Boolean(
      directInfo.item?.value
      && directInfo.format !== cleanValue
    )

    if (!isDirectFull) {
      return false
    }

    const withPrefix = `${dialCode}${cleanValue}`
    const prefixedInfo = GeoPhone.getByPhoneFull(withPrefix)
    const isPrefixedFull = Boolean(
      prefixedInfo.item?.value
      && prefixedInfo.format !== withPrefix
    )

    return !isPrefixedFull
  }

  /**
   * Resolves `GeoPhoneMapInfoFull` for the given phone value, prepending active dial code in `countryBlock` mode when needed.
   *
   * Получает `GeoPhoneMapInfoFull` для указанного значения телефона, при необходимости подставляя префикс страны в режиме `countryBlock`.
   * @param rawValue raw input phone string / исходная строка номера
   * @param activeCountry active ISO country code / активный ISO-код страны
   * @returns extended GeoPhone info / расширенная информация GeoPhone
   */
  protected getPhoneInfo(
    rawValue: string,
    activeCountry: string
  ): GeoPhoneMapInfoFull {
    const cleanValue = GeoPhone.cleanPhone(rawValue)

    if (!cleanValue) {
      return {
        item: GeoPhone.getByCode(activeCountry),
        phone: '',
        full: '',
        format: '',
        mask: '',
        e164: '',
        digits: ''
      }
    }

    if (this.props.countryBlock) {
      const defaultPrefix = this.country().toPhone(activeCountry)
      const hasExplicitPrefix = defaultPrefix
        && cleanValue.startsWith(defaultPrefix)
        && (
          rawValue.trim().startsWith('+')
          || cleanValue === defaultPrefix
          || this.isPrefixedFullPhone(cleanValue, defaultPrefix)
        )

      if (!hasExplicitPrefix) {
        return GeoPhone.getByPhoneFull(`${defaultPrefix}${cleanValue}`, true)
      }
    }

    return GeoPhone.getByPhoneFull(rawValue, true)
  }

  /**
   * Resolves the `GeoPhoneMap` item matching the active country when nodes share a dial code or when empty.
   *
   * Определяет узел `GeoPhoneMap` для активной страны при общих телефонных кодах или пустом вводе.
   * @param matchedItem item returned by GeoPhone lookup / элемент, найденный через GeoPhone
   * @param activeCountry active ISO country code / активный ISO-код страны
   * @returns resolved GeoPhoneMap item / определённый элемент GeoPhoneMap
   */
  protected resolveActiveItem(
    matchedItem: GeoPhoneMap | undefined,
    activeCountry: string
  ): GeoPhoneMap | undefined {
    if (!matchedItem) {
      return GeoPhone.getByCode(activeCountry)
    }

    if (matchedItem.value === activeCountry) {
      return matchedItem
    }

    const byCountry = GeoPhone.getByCode(activeCountry)

    if (byCountry) {
      return byCountry
    }

    return matchedItem
  }

  /**
   * Stops and resets active watchers.
   *
   * Останавливает и сбрасывает активные наблюдатели.
   */
  protected resetWatch(): void {
    this.watchStop?.()
    this.watchStop = undefined
  }

  /**
   * Synchronizes the value completeness flag for bare dial prefixes and programmatically assigned full phone values.
   *
   * Синхронизирует флаг полноты значения для голых префиксов и программно заданных полных номеров телефона.
   */
  protected syncFullState(): void {
    if (this.props.countryBlock) {
      return
    }

    const currentValue = this.value().item.value

    if (!currentValue) {
      return
    }

    const cleanValue = GeoPhone.cleanPhone(currentValue)

    if (cleanValue === this.valueDefault.value) {
      this.value().setFull(false)
      return
    }

    if (
      !this.value().isFull.value
      && cleanValue
    ) {
      const info = GeoPhone.getByPhoneFull(cleanValue)

      if (
        info.item?.value
        && info.format !== cleanValue
        && this.countryList().resolveAllowed(info.item)
      ) {
        this.value().setFull(true)
      }
    }
  }
}
