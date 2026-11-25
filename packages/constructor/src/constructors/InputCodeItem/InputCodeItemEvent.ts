// ai-none

import {
  type ConstrEmit,
  DesignLifecycleAbstract,
  eventStopPropagation,
  getClipboardData,
  isDomRuntime,
  isMetaKey
} from '@dxtmisha/functional'

import type { InputCodeItemGo } from './InputCodeItemGo'
import type { InputCodeItemValue } from './InputCodeItemValue'

import type { InputCodeItemEmits } from './types'
import type { InputCodeItemProps } from './props'

/**
 * Class for handling events.
 *
 * Класс для работы с событиями.
 */
export class InputCodeItemEvent extends DesignLifecycleAbstract {
  /** Scheduled animation frame identifier for backspace event / Идентификатор кадра анимации для события backspace */
  protected backspaceFrameId?: number

  /**
   * Cancels any scheduled backspace animation frame on unmount.
   *
   * Отменяет запланированный кадр анимации backspace при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.clearBackspaceFrame()
  }

  /**
   * Constructor
   *
   * Конструктор
   * @param props input property / входное свойство
   * @param go getter for movement controller / геттер контроллера перемещения
   * @param value getter for input value manager / геттер менеджера значения ввода
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: Readonly<InputCodeItemProps>,
    protected readonly go: () => InputCodeItemGo,
    protected readonly value: () => InputCodeItemValue,
    protected readonly emits?: ConstrEmit<InputCodeItemEmits>
  ) {
    super()
  }

  /**
   * Focus event handler.
   *
   * Обработчик события фокуса.
   */
  readonly onFocus = (): void => {
    if (this.value().is()) {
      this.go().selection()
    } else {
      this.go().focusToPreviousEmpty()
    }
  }

  /**
   * Keyboard key press event listener.
   *
   * Событий нажатия клавиш клавиатуры.
   * @param event invoked event / вызываемое событие
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    if (event.isComposing) {
      return
    }

    if (
      isMetaKey(event)
      || this.isMatch(event.key)
    ) {
      return
    }

    switch (event.key) {
      case 'Tab':
        return
      case 'Backspace':
        this.backspace()
        return
      case 'ArrowLeft':
        this.go().focusToPrevious()
        event.preventDefault()
        return
      case 'ArrowRight':
        this.go().focusToNext()
        event.preventDefault()
        return
    }

    eventStopPropagation(event)
  }

  /**
   * Click event handler.
   *
   * Обработчик события клика.
   */
  readonly onClick = (): void => {
    if (this.value().is()) {
      this.go().focusToNextEmpty()
    }
  }

  /**
   * Event for character change.
   *
   * Событие для изменения символа.
   * @param event invoked event / вызываемое событие
   */
  readonly onInput = (event: InputEvent): void => {
    const inputValue = (event.target as HTMLInputElement).value

    if (inputValue.length > 1) {
      this.emits?.('paste', this.getIndex(), inputValue)
      return
    }

    const valueInstance = this.value()

    valueInstance.set(inputValue)
    this.emits?.('input', this.getIndex(), inputValue)

    if (valueInstance.is()) {
      this.go().next()
    }
  }

  /**
   * Intercepting the event of data insertion from the buffer.
   *
   * Перехват события вставки данных из буфера.
   * @param event invoked event / вызываемое событие
   */
  readonly onPaste = (event: ClipboardEvent): void => {
    getClipboardData(event)
      .then((data) => {
        this.emits?.('paste', this.getIndex(), data)
      })
      .catch(() => undefined)

    eventStopPropagation(event)
  }

  /**
   * Checks if the input character is valid.
   *
   * Проверяет, подходит ли символ ввода.
   * @param key symbol that needs to be added / символ, который необходимо добавить
   * @returns status / статус
   */
  protected isMatch(key?: string): boolean {
    return Boolean(
      this.props.match
      && key?.match(this.props.match)
    )
  }

  /**
   * Returns the component identifier.
   *
   * Возвращает идентификатор компонента.
   * @returns identifier / идентификатор
   */
  protected getIndex(): string | number {
    return this.props.index ?? 'none'
  }

  /**
   * Value deletion.
   *
   * Удаление значения.
   */
  protected backspace(): void {
    if (
      this.value().is()
      && isDomRuntime()
    ) {
      this.clearBackspaceFrame()
      this.backspaceFrameId = requestAnimationFrame(() => {
        this.backspaceFrameId = undefined
        this.emits?.('backspace', this.getIndex())
      })
    }

    this.go().back()
  }

  /**
   * Cancels the scheduled backspace animation frame if active.
   *
   * Отменяет запланированный кадр анимации backspace, если он активен.
   */
  protected clearBackspaceFrame(): void {
    if (
      this.backspaceFrameId !== undefined
      && isDomRuntime()
    ) {
      cancelAnimationFrame(this.backspaceFrameId)
      this.backspaceFrameId = undefined
    }
  }
}
