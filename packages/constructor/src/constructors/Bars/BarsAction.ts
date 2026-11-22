// ai-none

import { ref, watch, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract, isFilled, isNumber } from '@dxtmisha/functional'

import type { BarsProps } from './props'

/**
 * Class for managing the action mode of the Bars component.
 * It tracks the active state of action bars and triggers panel updates.
 *
 * Класс для управления режимом действий (action-режимом) компонента Bars.
 * Отслеживает активное состояние панели действий и инициирует обновления панели.
 */
export class BarsAction extends DesignLifecycleAbstract {
  /** Current action mode state / Текущее состояние action-режима */
  readonly action = ref<boolean>(false)
  /** Stop handle for the action prop watcher / Функция остановки наблюдателя свойства action */
  protected watchStop?: WatchStopHandle

  /**
   * Constructor for initializing BarsAction properties.
   *
   * Конструктор для инициализации свойств BarsAction.
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: Readonly<BarsProps>
  ) {
    super()
    this.update()
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  override readonly onMounted = (): void => {
    this.watchStop?.()
    this.watchStop = watch(() => Boolean(this.props.action || this.props.modelAction), this.update)
  }

  /**
   * Cleanup lifecycle watchers on unmount.
   *
   * Очистка наблюдателей жизненного цикла при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.watchStop?.()
    this.watchStop = undefined
  }

  /**
   * Checks if action mode is possible.
   *
   * Проверяет, возможен ли режим действий.
   * @param props component properties / свойства компонента
   * @returns true if action mode is active or possible / true, если режим действий активен или возможен
   */
  static is(props?: Readonly<BarsProps>): boolean {
    return Boolean(
      props?.action
      || props?.modelAction
      || isFilled(props?.actionLabel, true)
      || isNumber(props?.actionLabel)
      || isFilled(props?.actionDescription, true)
      || isNumber(props?.actionDescription)
      || props?.actionBars
    )
  }

  /**
   * Checks if action mode is possible.
   *
   * Проверяет, возможен ли режим действий.
   * @returns status check result / результат проверки возможности
   */
  isPossible(): boolean {
    return Boolean(
      isFilled(this.props.actionLabel, true)
      || isNumber(this.props.actionLabel)
      || isFilled(this.props.actionDescription, true)
      || isNumber(this.props.actionDescription)
      || this.props.actionBars
    )
  }

  /**
   * Sets the action mode state.
   *
   * Устанавливает состояние режима действий.
   * @param value new state value / новое значение состояния
   */
  set(value: boolean): void {
    if (this.action.value !== value) {
      this.action.value = value
    }
  }

  /**
   * Updates the action mode state based on props.
   *
   * Обновляет состояние режима действий на основе свойств.
   */
  readonly update = (): void => {
    this.action.value = Boolean(this.props.action || this.props.modelAction)
  }

  /**
   * Enables the action mode.
   *
   * Включает режим действий (action-режим).
   */
  open(): void {
    this.set(true)
  }

  /**
   * Disables the action mode.
   *
   * Выключает режим действий (action-режим).
   */
  close(): void {
    this.set(false)
  }
}
