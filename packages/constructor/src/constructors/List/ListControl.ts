import { computed, onUnmounted, watch } from 'vue'
import { EventItem, isDomRuntime, ListDataRef } from '@dxtmisha/functional'

import { ListSearch } from './ListSearch'
import { ListGo } from './ListGo'

import type { ListProps } from './props'

/**
 * Class for managing keyboard navigation and event handling in list components.
 * Provides keyboard shortcuts, search functionality, and navigation controls.
 *
 * Класс для управления навигацией с клавиатуры и обработкой событий в компонентах списка.
 * Предоставляет клавиатурные сокращения, функциональность поиска и элементы управления навигацией.
 */
export class ListControl {
  protected event?: EventItem<HTMLElement, any>

  /**
   * Creates an instance of ListControl for managing keyboard navigation and events.
   *
   * Создает экземпляр ListControl для управления навигацией с клавиатуры и событиями.
   * @param props input data/ входные данные
   * @param search search functionality controller / контроллер функциональности поиска
   * @param data list data manager / менеджер данных списка
   * @param go navigation controller / контроллер навигации
   */
  constructor(
    protected readonly props: ListProps,
    protected readonly search: ListSearch,
    protected readonly data: ListDataRef,
    protected readonly go: ListGo
  ) {
    watch(
      this.isActive,
      (status) => {
        if (status) {
          this.start()
        } else {
          this.stop()
        }
      },
      { immediate: true }
    )

    onUnmounted(() => this.stop())
  }

  /**
   * Checks if the menu is active.
   *
   * Проверяет, активное ли меню.
   */
  readonly isActive = computed<boolean>(() => {
    return Boolean(this.props.control)
  })

  /**
   * Checks if the event target is not an input.
   *
   * Проверяет, не является ли цель события input.
   * @param target selected element/ выбранный элемент
   */
  protected isNotInput(target: HTMLElement): boolean {
    return ['INPUT', 'TEXTAREA'].indexOf(target.nodeName) === -1
      || Boolean(this.getActiveElement())
  }

  /**
   * Gets the currently active input element with menu control.
   *
   * Получает текущий активный элемент input с управлением меню.
   * @returns active input element or undefined / активный элемент input или undefined
   */
  protected getActiveElement(): HTMLInputElement | undefined {
    if (isDomRuntime()) {
      const element = document.activeElement as HTMLInputElement

      if (
        element
        && element.dataset?.menuControl === '1'
      ) {
        return element
      }
    }

    return undefined
  }

  /**
   * Starts the event.
   *
   * Запускает событие.
   */
  protected start() {
    if (isDomRuntime()) {
      if (!this.event) {
        this.event = new EventItem<HTMLElement, any>(
          document.body,
          ['keydown', 'keypress'],
          this.on
        )
      }

      this.go.reset()
      this.event.start()
    }
  }

  /**
   * Stops the event.
   *
   * Останавливает событие.
   */
  protected stop() {
    if (this.event) {
      this.event.stop()
      this.event = undefined
      this.go.stop()
    }
  }

  /**
   * Updates the search value based on keyboard input.
   *
   * Обновляет значение поиска на основе ввода с клавиатуры.
   * @param event keyboard event / событие клавиатуры
   */
  protected updateSearch(event: KeyboardEvent) {
    const element = this.getActiveElement()

    if (element) {
      requestAnimationFrame(() => this.search.set(element.value))
    } else {
      this.search.add(event.key)
    }
  }

  /**
   * Method for tracking keys when a window is open.
   *
   * Метод для отслеживания нажатий при открытом окне.
   * @param event event object/ объект события
   */
  protected readonly on = (event: KeyboardEvent) => {
    if (
      this.isNotInput(event.target as HTMLElement)
      && this.data.getLength()
    ) {
      if (event.type === 'keypress') {
        this.updateSearch(event)
      } else {
        const key = event.code || event.key || (event as any).keyCode

        switch (key) {
          case 'Backspace':
          case 8:
            this.updateSearch(event)
            break
          case 'ArrowUp':
          case 38:
            event.preventDefault()
            this.go.previous()
            break
          case 'ArrowDown':
          case 40:
            event.preventDefault()
            this.go.next()
            break
          case 'Enter':
          case 'ArrowRight':
          case ' ':
          case 13:
          case 39:
            event.preventDefault()
            this.go.open()
            break
          case 'ArrowLeft':
          case 37:
            event.preventDefault()
            this.go.close()
            break
          case 'Space':
          case 32:
            if (!this.getActiveElement()) {
              event.preventDefault()
              this.go.open()
            }
            break
        }
      }
    }
  }
}
