import { computed, nextTick, watch } from 'vue'
import {
  DesignLifecycleAbstract,
  GeoPhone,
  type GeoPhoneMap
} from '@dxtmisha/functional'

import type { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { WindowEmitOptions } from '../Window'
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
   * @param props input data / входные данные
   * @param country function returning country manager / функция, возвращающая менеджер страны
   * @param element function returning field element manager / функция, возвращающая менеджер элемента поля
   * @param event function returning field event manager / функция, возвращающая менеджер событий поля
   * @param value function returning field value manager / функция, возвращающая менеджер значения поля
   */
  constructor(
    protected readonly props: Readonly<InputPhonePropsBasic>,
    protected readonly country: () => InputPhoneCountry,
    protected readonly countryList: () => InputPhoneCountryList,
    protected readonly element: () => FieldElementInclude,
    protected readonly event: () => FieldEventInclude,
    protected readonly value: () => FieldValueInclude<string>
  ) {
    super()
    void this.event
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
