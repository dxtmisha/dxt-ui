import { computed, type Ref, shallowRef } from 'vue'

import type { SnackbarList, SnackbarValue } from './basicTypes'
import type { SnackbarProps } from './props'

/** Item number / Номер элемента */
let itemNumber = 0

/**
 * Class for managing data.
 *
 * Класс для управления данными.
 */
export class SnackbarData {
  /** Message list / Список сообщений */
  readonly item = shallowRef<SnackbarList>([])

  /**
   * Constructor
   * @param props input data / входные данные
   * @param element window element / элемент окна
   * @param className class name / название класса
   */

  constructor(
    protected readonly props: Readonly<SnackbarProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly className: string
  ) {
  }

  /**
   * Checks if there is an active element.
   *
   * Проверяет, есть ли активный элемент.
   */
  readonly isItem = computed<boolean>(() => this.item.value.length > 0)

  /**
   * Checks if the element is prioritized.
   *
   * Проверяет, есть ли элемент в приоритете.
   */
  readonly isPriority = computed<boolean>(
    () => this.isItem.value
      && this.item.value.findIndex(
        item => item.highPriority === true
      ) !== -1
  )

  /**
   * Add message element.
   *
   * Добавить элемент сообщения.
   * @param item add element / элемент добавления
   */
  readonly add = (item: SnackbarValue): void => {
    const value = this.getItemValue(item)
    const delay = this.getItemDelay(item)

    this.item.value = [
      ...this.item.value,
      {
        ...item,
        delay,
        value
      }
    ]

    this.toScroll()
    this.toShow(value, delay)
  }

  /**
   * Deleting message element.
   *
   * Удаление элемента сообщения.
   * @param value element identification / идентификация элемента
   */
  readonly remove = (value: string): void => {
    if (this.getItemByValue(value)) {
      const element = this.getElementItem(value)

      if (element) {
        element.addEventListener('transitionend', () => this.toNone(value))
        element.classList.add(`${this.className}--hide`)
      } else {
        this.toNone(value)
      }
    }
  }

  /**
   * Clear all message elements.
   *
   * Очистить все элементы сообщений.
   */
  readonly clear = (): void => {
    this.item.value.forEach(item => item.value && this.remove(item.value))
  }

  /**
   * Returns a message element by its value.
   *
   * Возвращает элемент сообщения по его идентификации.
   * @param value element identification / идентификация элемента
   */
  protected getElementItem(value: string) {
    return document.querySelector(`[data-snackbar-item="${value}"]`)
  }

  /**
   * Returns a message element by its value.
   *
   * Возвращает запись сообщения по его идентификации.
   * @param value element identification / идентификация элемента
   */
  protected getItemByValue(value: string): SnackbarValue | undefined {
    return this.item.value.find(item => item.value === value)
  }

  /**
   * Returns a message value.
   *
   * Возвращает идентификация сообщения.
   * @param item message element / элемент сообщения
   */
  protected getItemValue(item: SnackbarValue) {
    return item.value ?? `snackbar-item-${++itemNumber}`
  }

  /**
   * Returns a message delay.
   *
   * Возвращает задержку сообщения.
   * @param item message element / элемент сообщения
   */
  protected getItemDelay(item: SnackbarValue) {
    return item.delay ?? this.props.delay ?? 10_000
  }

  /**
   * Record deletion.
   *
   * Удаление записи.
   * @param value element identification / идентификация элемента
   */
  protected toNone(value: string) {
    this.item.value = this.item.value.filter(item => item.value !== value)
  }

  /**
   * Managing the element during display.
   *
   * Управление элементом при выводе.
   * @param value element identification / идентификация элемента
   * @param delay delay for closing the element / задержка для закрытия элемента
   */
  protected toShow(
    value: string,
    delay: number
  ) {
    requestAnimationFrame(() => {
      if (delay > 0) {
        const element = this.getElementItem(value)

        if (element) {
          element.addEventListener('animationend', () => {
            setTimeout(() => this.remove(value), delay)
          })
        } else {
          this.toShow(value, delay)
        }
      }
    })
  }

  /**
   * Scroll to the end.
   *
   * Прокрутить до конца.
   */
  protected toScroll() {
    requestAnimationFrame(() => {
      if (this.element.value) {
        this.element.value.scrollTop = 1_000_000
      }
    })
  }
}
