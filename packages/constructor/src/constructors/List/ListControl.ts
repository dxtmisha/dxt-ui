import { computed, nextTick, onMounted, onUnmounted, ref, watch, type Ref } from 'vue'
import { EventItem, getKey, isDomRuntime, isInput, ListDataRef } from '@dxtmisha/functional'

import { ListSearch } from './ListSearch'
import { ListGo } from './ListGo'

import type { FieldValidationItem } from '../../types/fieldTypes'
import type { ListProps } from './props'

/**
 * Class for managing keyboard navigation and event handling in list components.
 * Provides keyboard shortcuts, search functionality, and navigation controls.
 *
 * Класс для управления навигацией с клавиатуры и обработкой событий в компонентах списка.
 * Предоставляет клавиатурные сокращения, функциональность поиска и элементы управления навигацией.
 */
export class ListControl {
  /** Reference to the input element / Ссылка на элемент ввода */
  readonly inputElement = ref<Record<string, any>>()

  /** Event manager for tracking keyboard events / Менеджер событий для отслеживания событий клавиатуры */
  protected event?: EventItem<HTMLElement, any>

  /**
   * Creates an instance of ListControl for managing keyboard navigation and events.
   *
   * Создает экземпляр ListControl для управления навигацией с клавиатуры и событиями.
   * @param props input data / входные данные
   * @param element reference to the element / ссылка на элемент
   * @param search search functionality controller / контроллер функциональности поиска
   * @param data list data manager / менеджер данных списка
   * @param go navigation controller / контроллер навигации
   */
  constructor(
    protected readonly props: ListProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly search: ListSearch,
    protected readonly data: ListDataRef,
    protected readonly go: ListGo
  ) {
    onMounted(() => {
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
    })
    onUnmounted(() => this.stop())
  }

  /**
   * Checks if the menu is active.
   *
   * Проверяет, активное ли меню.
   * @returns true if control mode is active / true, если режим управления активен
   */
  readonly isActive = computed<boolean>(() => {
    return Boolean(this.props.control)
  })

  /**
   * Handler for the focus event.
   *
   * Обработчик события фокуса.
   */
  readonly onFocus = () => {
    if (!this.props.control) {
      this.start()
    }
  }

  /**
   * Handler for the blur event.
   *
   * Обработчик события потери фокуса.
   */
  readonly onBlur = () => {
    if (!this.props.control) {
      this.stop()
    }
  }

  /**
   * Handler for the input event.
   *
   * Обработчик события ввода.
   * @param data field validation data / данные валидации поля
   */
  readonly onInput = (data: FieldValidationItem) => {
    this.search.set(data.value)
  }

  /**
   * Checks if the event target is not an input.
   *
   * Проверяет, не является ли цель события input.
   * @param target selected element / выбранный элемент
   * @returns true if target is not an input / true, если цель не является полем ввода
   */
  protected isNotInput(target: HTMLElement): boolean {
    return !isInput(target)
      || !this.getActiveElement()
  }

  /**
   * Checks if the pressed key is a control key.
   *
   * Проверяет, является ли нажатая клавиша управляющей.
   * @param event keyboard event / событие клавиатуры
   * @returns true if it is a control key / true, если клавиша является управляющей
   */
  protected isControlKey(event: KeyboardEvent): boolean {
    const key = getKey(event)

    return key !== undefined
      && [
        'ArrowUp',
        38,

        'ArrowDown',
        40,

        'Enter',
        13,

        'Backspace',
        8,

        'Escape',
        'Esc',
        37
      ].indexOf(key) !== -1
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
    if (!this.event) {
      this.event = new EventItem<HTMLElement, any>(
        document.body,
        ['keydown', 'keypress'],
        this.on
      )
    }

    if (!this.event.isActive()) {
      this.go.reset()
      this.event.start()

      if (this.props.control) {
        nextTick().then(() => {
          requestAnimationFrame(() => {
            const element = this.element.value?.querySelector<HTMLInputElement>('[data-menu-control="1"]')

            if (element) {
              element.focus()
            }
          })
        })
      }
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
   * @param isAdd indicates if the key should be added to the search string / указывает, следует ли добавлять ключ к строке поиска
   */
  protected updateSearch(event: KeyboardEvent, isAdd: boolean = true) {
    const element = this.getActiveElement()

    if (element) {
      requestAnimationFrame(() => this.search.set(element.value))
    } else if (isAdd) {
      this.search.add(event.key)
    }
  }

  /**
   * Method for tracking keys when a window is open.
   *
   * Метод для отслеживания нажатий при открытом окне.
   * @param event event object / объект события
   */
  protected readonly on = (event: KeyboardEvent) => {
    if (!this.data.getLength()) {
      return
    }

    const isKeypress = event.type === 'keypress'

    if (
      this.isNotInput(event.target as HTMLElement)
      || this.isControlKey(event)
      || !isKeypress
    ) {
      const key = getKey(event)

      switch (key) {
        case 'Backspace':
        case 8:
          this.updateSearch(event, false)
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
        case 'Escape':
        case 'Esc':
        case 27:
        case 37:
          event.preventDefault()
          this.go.close()
          break
        case 'Home':
        case 36:
          event.preventDefault()
          this.go.first()
          break
        case 'End':
        case 35:
          event.preventDefault()
          this.go.last()
          break
        case 'Space':
        case 32:
          if (!this.getActiveElement()) {
            event.preventDefault()
            this.go.open()
          }
          break
      }
    } else {
      this.updateSearch(event, isKeypress)
    }
  }
}
