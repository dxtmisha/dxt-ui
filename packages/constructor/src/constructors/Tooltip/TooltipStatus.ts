import { ref } from 'vue'

import type { TooltipSlots } from './types'
import type { TooltipProps } from './props'

/**
 * Class for working with display statuses.
 *
 * Класс для работы со статусами отображения.
 */
export class TooltipStatus {
  /** Reactive state for open / Реактивное состояние открытия */
  readonly open = ref(false)
  /** Reactive state for display / Реактивное состояние показа */
  readonly show = ref(false)
  /** Reactive state for preparation / Реактивное состояние подготовки */
  readonly preparation = ref(false)

  /**
   * Constructor
   * @param props input data / входные данные
   * @param slots object for working with slots / объект для работы со слотами
   */
  constructor(
    protected readonly props: Readonly<TooltipProps>,
    protected readonly slots?: TooltipSlots
  ) {
  }

  /**
   * Checks if there is text to display.
   *
   * Проверяет, есть ли текст для отображения.
   * @returns true if there is text to display / true, если есть текст для отображения
   */
  isText(): boolean {
    return (
      !this.props.disabled
      && Boolean(
        this.props.label
        || this.props.description
        || (
          this.slots
          && (
            'default' in this.slots
            || 'description' in this.slots
            || 'body' in this.slots
          )
        )
      )
    )
  }

  /**
   * Checks if the element needs to be displayed.
   *
   * Проверяет, нужно ли отображать элемент.
   * @returns true if the element needs to be displayed / true, если элемент нужно отобразить
   */
  isShow(): boolean {
    return Boolean(this.show.value || this.open.value || this.props.inDom) && this.isText()
  }

  /**
   * Checks if the arrow needs to be displayed.
   *
   * Проверяет, нужно ли отображать стрелку.
   * @returns true if the arrow needs to be displayed / true, если стрелку нужно отобразить
   */
  isArrow(): boolean {
    return Boolean(this.props.arrowShow && this.preparation.value)
  }

  /**
   * Checks if the current status matches the selected one.
   *
   * Проверяет, соответствует ли текущий статус выбранному.
   * @param open the value of the current state / значение текущего состояния
   * @returns true if the current status matches / true, если текущий статус совпадает
   */
  isMatch(open: boolean): boolean {
    return this.open.value === open
  }

  /**
   * Changes the open state.
   *
   * Изменяет состояние открытия.
   * @param open the value of the current state / значение текущего состояния
   */
  setOpen(open: boolean) {
    this.open.value = open
  }

  /**
   * Changes the display state.
   *
   * Изменяет состояние показа.
   * @param show the value of the current state / значение текущего состояния
   */
  setShow(show: boolean) {
    this.show.value = show
  }

  /**
   * Changes the preparation status.
   *
   * Изменяет статус подготовки.
   * @param preparation the value of the current state / значение текущего состояния
   */
  setPreparation(preparation: boolean) {
    this.preparation.value = preparation
  }
}
