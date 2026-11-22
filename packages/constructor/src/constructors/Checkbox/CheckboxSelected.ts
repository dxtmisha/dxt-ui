// ai-none

import { ref, watch, type WatchStopHandle } from 'vue'
import { anyToString, DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { ModelInclude } from '../../classes/ModelInclude'

import type { CheckboxProps } from './props'

/**
 * Class for managing the selected state of a checkbox.
 *
 * Класс для управления состоянием выбора флажка.
 */
export class CheckboxSelected extends DesignLifecycleAbstract {
  /**
   * Checks whether selected state synchronization is enabled in properties.
   *
   * Проверяет, включена ли синхронизация состояния выбора в свойствах.
   * @param props input data / входные данные
   * @returns true if selected or valueVariant is defined / true, если задано selected или valueVariant
   */
  static is(props?: Readonly<CheckboxProps>): boolean {
    return props?.selected !== undefined || props?.valueVariant !== undefined
  }

  /** Watchers cleanup handlers / Функции остановки наблюдателей */
  protected watchStops: WatchStopHandle[] = []

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param value function returning field value inclusion object / функция, возвращающая объект включения значения поля
   * @param model function returning model inclusion object / функция, возвращающая объект включения модели
   */
  constructor(
    protected readonly props: Readonly<CheckboxProps>,
    protected readonly value: () => FieldValueInclude<boolean>,
    protected readonly model?: () => ModelInclude<string | undefined>
  ) {
    super()

    this.update()
  }

  /**
   * Internal reactive state for the selected value.
   *
   * Внутреннее реактивное состояние для выбранного значения.
   */
  protected readonly selected = ref<string>()

  /**
   * Registers reactive watchers when the component mounts.
   *
   * Регистрирует реактивные наблюдатели при монтировании компонента.
   */
  override readonly onMounted = (): void => {
    this.stopWatchers()

    this.watchStops.push(
      watch(
        () => this.props.selected,
        this.update
      ),
      watch(this.value().item, this.updateByValue),
      watch(this.selected, (newValue) => {
        this.model?.().emit(newValue)
      })
    )
  }

  /**
   * Stops registered reactive watchers when the component unmounts.
   *
   * Останавливает зарегистрированные реактивные наблюдатели при размонтировании компонента.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatchers()
  }

  /**
   * Updates the selected state based on the field value.
   *
   * Обновляет состояние выбора на основе значения поля.
   */
  protected readonly updateByValue = (): void => {
    const valueVariant = anyToString(this.props.valueVariant)

    if (
      this.value().item.value
      && this.selected.value !== valueVariant
    ) {
      this.selected.value = valueVariant
    }
  }

  /**
   * Updates the value state and the internal selected state based on the selected prop.
   *
   * Обновляет состояние значения и внутреннее состояние выбора на основе свойства selected.
   */
  protected readonly update = (): void => {
    if (this.props.selected === undefined) {
      return
    }

    this.value().set(
      this.props.valueVariant !== undefined
      && this.props.selected === anyToString(this.props.valueVariant)
    )
    this.selected.value = this.props.selected
  }

  /**
   * Stops and clears all active lifecycle watchers.
   *
   * Останавливает и очищает все активные наблюдатели жизненного цикла.
   */
  protected stopWatchers(): void {
    this.watchStops.forEach(stop => stop())
    this.watchStops = []
  }
}
