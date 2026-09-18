import { nextTick, type Ref } from 'vue'

import type { CarouselPaginationProps } from './props'
import type { CarouselPaginationSelected } from './CarouselPaginationSelected'

/**
 * Class for managing focus state, keyboard navigation, and event bindings in carousel pagination.
 *
 * Класс для управления состоянием фокуса, клавиатурной навигацией и привязками событий в пагинации карусели.
 */
export class CarouselPaginationFocus {
  /**
   * Constructor
   * @param props input configuration properties / входные конфигурационные свойства
   * @param element main HTML element / главный HTML-элемент
   * @param className base class name / базовое имя класса
   * @param selected slide selection manager instance / экземпляр менеджера выбора слайдов
   */
  constructor(
    protected readonly props: CarouselPaginationProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    protected readonly selected: CarouselPaginationSelected
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
   * Checks whether the pagination is focusable.
   *
   * Проверяет, доступна ли пагинация для фокуса.
   * @returns true if pagination is focusable / true, если пагинация доступна для фокуса
   */
  protected isFocusable(): boolean {
    return this.props.control !== false
      && this.props.clickable !== false
      && this.props.type !== 'fraction'
      && this.props.type !== 'progressbar'
  }

  /**
   * Sets the active slide index and sets focus to its button.
   *
   * Устанавливает индекс активного слайда и устанавливает фокус на его кнопку.
   * @param index slide index / индекс слайда
   */
  protected set(index: number): void {
    this.selected.set(index)
    this.focus(index)
  }

  /**
   * Sets DOM focus to the button of the specified slide index.
   *
   * Устанавливает фокус DOM на кнопку указанного индекса слайда.
   * @param index optional slide index / опциональный индекс слайда
   */
  protected focus(index?: number): void {
    const targetIndex = index ?? this.selected.item.value

    nextTick(() => {
      const targetElement = this.element.value?.querySelector<HTMLElement>(
        `[data-index="${targetIndex}"]`
      )

      targetElement?.focus()
    })
  }

  /**
   * Moves to the first slide and sets focus to its button.
   *
   * Переходит к первому слайду и устанавливает фокус на его кнопку.
   */
  protected first(): void {
    if (this.selected.total.value > 0) {
      this.set(1)
    }
  }

  /**
   * Moves to the last slide and sets focus to its button.
   *
   * Переходит к последнему слайду и устанавливает фокус на его кнопку.
   */
  protected last(): void {
    const totalCount = this.selected.total.value

    if (totalCount > 0) {
      this.set(totalCount)
    }
  }

  /**
   * Advances to the next slide and sets focus to its button.
   *
   * Переходит к следующему слайду и устанавливает фокус на его кнопку.
   */
  protected next(): void {
    const currentIndex = this.selected.item.value
    const totalCount = this.selected.total.value

    if (currentIndex < totalCount) {
      this.set(currentIndex + 1)
    }
  }

  /**
   * Moves to the previous slide and sets focus to its button.
   *
   * Переходит к предыдущему слайду и устанавливает фокус на его кнопку.
   */
  protected previous(): void {
    const currentIndex = this.selected.item.value

    if (currentIndex > 1) {
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
    if (!this.isFocusable()) {
      return
    }

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
