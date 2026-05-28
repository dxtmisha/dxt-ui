import { onMounted, ref, type ToRefs, watch } from 'vue'
import type { BarsProps } from './props'

/**
 * Class for managing the action mode of the Bars component.
 * It tracks the active state of action bars and triggers panel updates.
 *
 * Класс для управления режимом действий (action-режимом) компонента Bars.
 * Отслеживает активное состояние панели действий и инициирует обновления панели.
 */
export class BarsAction {
  /** Current action mode state / Текущее состояние action-режима */
  readonly action = ref<boolean>(false)

  /**
   * Constructor for initializing BarsAction properties.
   *
   * Конструктор для инициализации свойств BarsAction.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   */
  constructor(
    protected readonly props: BarsProps,
    protected readonly refs: ToRefs<BarsProps>
  ) {
    onMounted(() => {
      watch(
        [refs.action],
        () => {
          this.action.value = Boolean(this.props.action)
        },
        { immediate: true }
      )
    })
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
