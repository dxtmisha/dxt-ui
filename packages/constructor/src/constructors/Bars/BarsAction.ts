// ai-none

import { ref, watch } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'

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
    watch(() => this.props.action, this.update)
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
      || props?.actionLabel
      || props?.actionDescription
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
      this.props.actionLabel
      || this.props.actionDescription
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
    this.action.value = Boolean(this.props.action)
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
