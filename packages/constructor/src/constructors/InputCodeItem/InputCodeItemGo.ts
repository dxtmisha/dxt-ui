// ai-none

import { type Ref } from 'vue'
import { DesignLifecycleAbstract, isDomRuntime, isFilled } from '@dxtmisha/functional'

import type { InputCodeItemElement } from './basicTypes'
import type { InputCodeItemProps } from './props'

/** Maximum sibling steps when scanning code items / Максимальное число шагов по соседним элементам кода */
const MAX_SIBLING_TRAVERSAL = 32
/** Delay in milliseconds before selecting input text / Задержка в миллисекундах перед выделением текста ввода */
const SELECTION_DELAY_MS = 32

/**
 * Class for handling the movement of elements in a list.
 *
 * Класс для работы с перемещением элементов по списку.
 */
export class InputCodeItemGo extends DesignLifecycleAbstract {
  /** Active selection timeout identifier / Идентификатор активного таймера выделения */
  protected selectionTimer?: ReturnType<typeof setTimeout>

  /**
   * Clears pending selection timer on unmount.
   *
   * Очищает активный таймер выделения при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.clearSelectionTimer()
  }

  /**
   * Constructor
   *
   * Конструктор
   * @param props input property / входное свойство
   * @param element instance of the element itself / экземпляр самого элемента
   */
  constructor(
    protected readonly props: Readonly<InputCodeItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>
  ) {
    super()
  }

  /**
   * Get the key for identification.
   *
   * Получить ключ для определения.
   * @returns key string / строка ключа
   */
  getKey(): string {
    return 'data-code'
  }

  /**
   * Move to the next element.
   *
   * Перенести на следующий элемент.
   */
  next(): void {
    this.toFocus(this.element.value?.nextElementSibling)
  }

  /**
   * Return to the previous element.
   *
   * Вернуться на предыдущий элемент.
   */
  back(): void {
    this.toFocus(this.element.value?.previousElementSibling)
  }

  /**
   * Changes the focus location depending on the value entered.
   *
   * Изменяет место фокусировки в зависимости от заполнения значения.
   */
  focusToPreviousEmpty(): void {
    if (
      this.isMove()
      && this.element.value
      && !this.isValue()
    ) {
      let maximum = MAX_SIBLING_TRAVERSAL
      let element: InputCodeItemElement = this.element.value.previousElementSibling
      let previousElement: InputCodeItemElement = this.element.value

      while (maximum-- > 0) {
        if (!element) {
          if (previousElement) {
            this.toFocus(previousElement)
          }

          break
        }

        const input = this.getInput(element)

        if (
          input
          && isFilled(input.value, true)
        ) {
          this.toFocus(previousElement)
          break
        }

        previousElement = element
        element = element.previousElementSibling
      }
    }
  }

  /**
   * Focus to the previous element.
   *
   * Сфокусироваться на предыдущем элементе.
   */
  focusToPrevious(): void {
    if (
      this.isMove()
      && this.element.value
    ) {
      this.toFocus(this.element.value.previousElementSibling)
    }
  }

  /**
   * Focus to the next unfilled element.
   *
   * Сфокусироваться на следующем незаполненном элементе.
   */
  focusToNextEmpty(): void {
    if (
      this.isMove()
      && this.element.value
    ) {
      let maximum = MAX_SIBLING_TRAVERSAL
      let element: InputCodeItemElement = this.element.value.nextElementSibling

      while (maximum-- > 0) {
        if (!element) {
          break
        }

        const input = this.getInput(element)

        if (
          !element.nextElementSibling
          || (
            input
            && !isFilled(input.value, true)
          )
        ) {
          this.toFocus(element)
          break
        }

        element = element.nextElementSibling
      }
    }
  }

  /**
   * Focus to the next element.
   *
   * Сфокусироваться на следующем элементе.
   */
  focusToNext(): void {
    if (
      this.isMove()
      && this.element.value
    ) {
      this.toFocus(this.element.value.nextElementSibling)
    }
  }

  /**
   * Highlights the text of the element.
   *
   * Выделяет текст элемента.
   * @param element selected element / выбранный элемент
   */
  selection(element: InputCodeItemElement = this.element.value): void {
    const input = this.getInput(element)

    if (
      input
      && isDomRuntime()
    ) {
      this.clearSelectionTimer()
      this.selectionTimer = setTimeout(() => {
        this.selectionTimer = undefined
        input.selectionStart = 0
        input.selectionEnd = input.value.length
      }, SELECTION_DELAY_MS)
    }
  }

  /**
   * Checks if movement between elements is available.
   *
   * Проверяет, доступно ли перемещение между элементами.
   * @returns status / статус
   */
  protected isMove(): boolean {
    return Boolean(this.props.move)
  }

  /**
   * Checks if the element's value is filled.
   *
   * Проверяет, заполнено ли значение у элемента.
   * @returns status / статус
   */
  protected isValue(): boolean {
    return isFilled(this.getInput()?.value, true)
  }

  /**
   * Returns the input element of the item.
   *
   * Возвращает элемент ввода у элемента.
   * @param element selected element / выбранный элемент
   * @returns input element or undefined / элемент ввода или undefined
   */
  protected getInput(element: InputCodeItemElement = this.element.value): HTMLInputElement | undefined {
    return element?.querySelector<HTMLInputElement>(`input[${this.getKey()}]`) || undefined
  }

  /**
   * Set the element to focused state.
   *
   * Переводим элемент в состояние фокуса.
   * @param element selected element / выбранный элемент
   */
  protected toFocus(element?: InputCodeItemElement): void {
    if (this.isMove()) {
      const input = this.getInput(element)

      if (input) {
        input.focus()
        this.selection(element)
      }
    }
  }

  /**
   * Clears the pending selection timer if active.
   *
   * Очищает активный таймер выделения, если он запущен.
   */
  protected clearSelectionTimer(): void {
    if (this.selectionTimer !== undefined) {
      clearTimeout(this.selectionTimer)
      this.selectionTimer = undefined
    }
  }
}
