import { type Ref } from 'vue'
import { getRef } from '@dxtmisha/functional'

import type { ControlProps } from '../types/controlTypes'

/**
 * Abstract base class for managing keyboard control, item navigation, and focus delegation across components.
 *
 * Абстрактный базовый класс для управления клавиатурным управлением, навигацией по элементам и делегированием фокуса в компонентах.
 */
export abstract class ControlAbstract {
  /**
   * Constructor for ControlAbstract.
   *
   * Конструктор для ControlAbstract.
   * @param props input control properties / входные свойства управления
   * @param element reference to container HTML element / ссылка на контейнерный HTML-элемент
   */
  constructor(
    protected readonly props: ControlProps | undefined,
    protected readonly element: Ref<HTMLElement | undefined>
  ) { }

  /**
   * Returns binding attributes for the container element.
   *
   * Возвращает атрибуты привязки для элемента контейнера.
   * @returns binding attributes object / объект атрибутов привязки
   */
  get binds(): Record<string, unknown> {
    if (this.isFocusable()) {
      return {
        onKeydown: this.onKeydown
      }
    }

    return {}
  }

  /**
   * Checks whether keyboard control and focus navigation are enabled.
   *
   * Проверяет, включены ли клавиатурное управление и навигация фокуса.
   * @returns true if control is focusable / true, если управление доступно для фокуса
   */
  protected isFocusable(): boolean {
    return this.props?.control !== false
  }

  /**
   * Returns the current active index.
   *
   * Возвращает текущий активный индекс.
   * @returns current active index / текущий активный индекс
   */
  protected abstract getIndex(): number

  /**
   * Returns maximum available index.
   *
   * Возвращает максимально доступный индекс.
   * @returns maximum index / максимальный индекс
   */
  protected abstract getMax(): number

  /**
   * Returns minimum available index.
   *
   * Возвращает минимально доступный индекс.
   * @returns minimum index / минимальный индекс
   */
  protected abstract getMin(): number

  /**
   * Returns DOM query selector for target index element.
   *
   * Возвращает селектор запроса DOM для элемента целевого индекса.
   * @param index target index / целевой индекс
   * @returns CSS query selector string / строка CSS-селектора
   */
  protected abstract getSelector(index: number): string

  /**
   * Sets the active index in the underlying component state.
   *
   * Устанавливает активный индекс в базовом состоянии компонента.
   * @param index new active index / новый активный индекс
   */
  protected abstract setIndex(index: number): void

  /**
   * Sets the active index and shifts focus to its element.
   *
   * Устанавливает активный индекс и переносит фокус на его элемент.
   * @param index target index / целевой индекс
   */
  protected set(index: number): void {
    this.setIndex(index)
    this.focus(index)
  }

  /**
   * Sets DOM focus to the element of the specified index.
   *
   * Устанавливает фокус DOM на элемент указанного индекса.
   * @param index optional target index / опциональный целевой индекс
   */
  protected focus(index?: number): void {
    const targetIndex = index ?? this.getIndex()

    requestAnimationFrame(() => {
      const containerElement = getRef(this.element)
      const targetElement = containerElement?.querySelector<HTMLElement>(
        this.getSelector(targetIndex)
      )

      targetElement?.focus()
    })
  }

  /**
   * Moves to the first item and sets focus to its element.
   *
   * Переходит к первому элементу и устанавливает фокус на его элемент.
   */
  protected first(): void {
    this.set(this.getMin())
  }

  /**
   * Moves to the last item and sets focus to its element.
   *
   * Переходит к последнему элементу и устанавливает фокус на его элемент.
   */
  protected last(): void {
    this.set(this.getMax())
  }

  /**
   * Advances to the next item and sets focus to its element.
   *
   * Переходит к следующему элементу и устанавливает фокус на его элемент.
   */
  protected next(): void {
    const currentIndex = this.getIndex()
    const totalCount = this.getMax()

    if (currentIndex < totalCount) {
      this.set(currentIndex + 1)
    }
  }

  /**
   * Moves to the previous item and sets focus to its element.
   *
   * Переходит к предыдущему элементу и устанавливает фокус на его элемент.
   */
  protected previous(): void {
    const currentIndex = this.getIndex()

    if (currentIndex > this.getMin()) {
      this.set(currentIndex - 1)
    }
  }

  /**
   * Keyboard event handler for arrow keys, Home, and End navigation.
   *
   * Обработчик событий клавиатуры для клавиш со стрелками, Home и End.
   * @param event native keyboard event / нативное событие клавиатуры
   */
  protected readonly onKeydown = (event: KeyboardEvent): void => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault()
        this.next()
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault()
        this.previous()
        break
      case 'Home':
        event.preventDefault()
        this.first()
        break
      case 'End':
        event.preventDefault()
        this.last()
        break
    }
  }
}
