import { computed, ref } from 'vue'

import type { TooltipSlots } from './types'
import type { TooltipProps } from './props'

/**
 * Class for working with display statuses.
 *
 * Класс для работы со статусами отображения.
 */
export class TooltipStatus {
  readonly open = ref(false)
  readonly show = ref(false)
  readonly preparation = ref(false)

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param slots object for working with slots/ объект для работы со слотами
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
   */
  readonly isText = computed<boolean>(() =>
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

  /** Checks if the element needs to be displayed/ Проверяет, нужно ли отображать элемент */
  readonly isShow = computed<boolean>(() => (this.show.value || this.open.value) && this.isText.value)

  /** Checks if the content is an array/ Проверяет, является ли содержимое массивом */
  readonly isArray = computed<boolean>(
    () => Boolean(this.props.arrowShow && this.preparation.value)
  )

  /**
   * Checks if the current status matches the selected one.
   *
   * Проверяет, соответствует ли текущий статус выбранному.
   * @param open the value of the current state/ значение текущего состояния
   */
  isMatch(open: boolean): boolean {
    return this.open.value === open
  }

  /**
   * Changes the open state.
   *
   * Изменяет состояние открытия.
   * @param open the value of the current state/ значение текущего состояния
   */
  setOpen(open: boolean) {
    this.open.value = open
  }

  /**
   * Changes the display state.
   *
   * Изменяет состояние показа.
   * @param show the value of the current state/ значение текущего состояния
   */
  setShow(show: boolean) {
    this.show.value = show
  }

  /**
   * Changes the preparation status.
   *
   * Изменяет статус подготовки.
   * @param preparation the value of the current state/ значение текущего состояния
   */
  setPreparation(preparation: boolean) {
    this.preparation.value = preparation
  }
}
