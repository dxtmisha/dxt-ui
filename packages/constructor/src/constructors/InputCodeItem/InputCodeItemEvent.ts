import {
  type ConstrEmit,
  eventStopPropagation,
  getClipboardData,
  isMetaKey
} from '@dxtmisha/functional'

import { InputCodeItemGo } from './InputCodeItemGo'
import { InputCodeItemValue } from './InputCodeItemValue'

import type { InputCodeItemEmits } from './types'
import type { InputCodeItemProps } from './props'

/**
 * Class for handling events.
 *
 * Класс для работы с событиями.
 */
export class InputCodeItemEvent {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input property / входное свойство
   * @param value object for working with entered data / объект для работы с введёнными данными
   * @param go object for handling movement between elements / объект для работы с перемещением между элементами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: Readonly<InputCodeItemProps>,
    protected readonly value: InputCodeItemValue,
    protected readonly go: InputCodeItemGo,
    protected readonly emits?: ConstrEmit<InputCodeItemEmits>
  ) { }

  /**
   * Focus event handler.
   *
   * Обработчик события фокуса.
   */
  readonly onFocus = (): void => {
    if (this.value.is()) {
      this.go.selection()
    } else {
      this.go.focusToPreviousEmpty()
    }
  }

  /**
   * Keyboard key press event listener.
   *
   * Событий нажатия клавиш клавиатуры.
   * @param event invoked event / вызываемое событие
   */
  readonly onKeydown = (event: KeyboardEvent) => {
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
        this.go.focusToPrevious()
        event.preventDefault()
        return
      case 'ArrowRight':
        this.go.focusToNext()
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
    if (this.value.is()) {
      if (this.props.hide) {
        this.go.focusToNextEmpty()
      } else {
        this.go.selection()
      }
    }
  }

  /**
   * Event for character change.
   *
   * Событие для изменения символа.
   * @param event invoked event / вызываемое событие
   */
  readonly onInput = (event: InputEvent) => {
    const value = (event.target as HTMLInputElement).value

    this.value.set(value)
    this.emits?.('input', this.getIndex(), value)

    if (this.value.is()) {
      this.go.next()
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

    eventStopPropagation(event)
  }

  /**
   * Checks if the input character is valid.
   *
   * Проверяет, подходит ли символ ввода.
   * @param key symbol that needs to be added / символ, который необходимо добавить
   * @returns status / статус
   */
  protected isMatch(key: string): boolean {
    return Boolean(
      this.props.match
      && key.match(this.props.match)
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
  protected backspace() {
    if (this.value.is()) {
      requestAnimationFrame(() => this.emits?.('backspace', this.getIndex()))
    }

    this.go.back()
  }
}
