import { type Ref, unref } from 'vue'
import { type ConstrBind, isDomRuntime } from '@dxtmisha/functional'
import { isRtl } from '@dxtmisha/functional-basic'

import { FrameAbstract } from './FrameAbstract'

import type { ControlProps } from '../types/controlTypes'

/**
 * Abstract base class for managing keyboard control, item navigation, and focus delegation across components.
 *
 * Абстрактный базовый класс для управления клавиатурным управлением, навигацией по элементам и делегированием фокуса в компонентах.
 */
export abstract class ControlAbstract extends FrameAbstract {
  /**
   * Checks whether keyboard control and focus navigation are enabled for the given properties.
   *
   * Проверяет, включены ли клавиатурное управление и навигация фокуса для заданных свойств.
   * @param props input control properties / входные свойства управления
   * @returns true if control is focusable / true, если управление доступно для фокуса
   */
  static is(props?: Readonly<ControlProps>): boolean {
    return props?.control !== false
  }

  /**
   * Constructor for ControlAbstract.
   *
   * Конструктор для ControlAbstract.
   * @param props input control properties / входные свойства управления
   * @param element reference to container HTML element / ссылка на контейнерный HTML-элемент
   */
  constructor(
    protected readonly props: Readonly<ControlProps> | undefined,
    protected readonly element: Ref<HTMLElement | undefined>
  ) {
    super()
  }

  /**
   * Returns binding attributes for the container element.
   *
   * Возвращает атрибуты привязки для элемента контейнера.
   * @returns binding attributes object / объект атрибутов привязки
   */
  get binds(): ConstrBind {
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
    return ControlAbstract.is(this.props)
  }

  /**
   * Checks whether the navigation container uses right-to-left (RTL) text direction.
   *
   * Проверяет, использует ли контейнер навигации направление текста справа налево (RTL).
   * @returns true if RTL direction is active / true, если активно направление RTL
   */
  protected isRtl(): boolean {
    return isRtl(unref(this.element))
  }

  /**
   * Returns the current active index.
   *
   * Возвращает текущий активный индекс.
   * @returns current active index / текущий активный индекс
   */
  protected abstract getIndex(): number

  /**
   * Returns minimum available index.
   *
   * Возвращает минимально доступный индекс.
   * @returns minimum index / минимальный индекс
   */
  protected abstract getMin(): number

  /**
   * Returns maximum available index.
   *
   * Возвращает максимально доступный индекс.
   * @returns maximum index / максимальный индекс
   */
  protected abstract getMax(): number

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
   * Sets the active index and shifts focus to its element if the index is within [min, max].
   *
   * Устанавливает активный индекс и переносит фокус на его элемент, если индекс находится в диапазоне [min, max].
   * @param index target index / целевой индекс
   */
  protected set(index: number): void {
    if (
      index >= this.getMin()
      && index <= this.getMax()
    ) {
      this.setIndex(index)
      this.focus(index)
    }
  }

  /**
   * Sets DOM focus to the element of the specified index.
   *
   * Устанавливает фокус DOM на элемент указанного индекса.
   * @param index optional target index / опциональный целевой индекс
   */
  protected focus(index?: number): void {
    if (!isDomRuntime()) {
      return
    }

    const targetIndex = index ?? this.getIndex()

    this.startFrame(() => {
      const containerElement = unref(this.element)
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
    this.set(this.getIndex() + 1)
  }

  /**
   * Moves to the previous item and sets focus to its element.
   *
   * Переходит к предыдущему элементу и устанавливает фокус на его элемент.
   */
  protected previous(): void {
    this.set(this.getIndex() - 1)
  }

  /**
   * Keyboard event handler for arrow keys, Home, and End navigation.
   *
   * Обработчик событий клавиатуры для клавиш со стрелками, Home и End.
   * @param event native keyboard event / нативное событие клавиатуры
   */
  protected readonly onKeydown = (event: KeyboardEvent): void => {
    if (
      event.isComposing
      || !this.isFocusable()
    ) {
      return
    }

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault()

        if (this.isRtl()) {
          this.previous()
        } else {
          this.next()
        }
        break
      case 'ArrowDown':
        event.preventDefault()
        this.next()
        break
      case 'ArrowLeft':
        event.preventDefault()

        if (this.isRtl()) {
          this.next()
        } else {
          this.previous()
        }
        break
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
