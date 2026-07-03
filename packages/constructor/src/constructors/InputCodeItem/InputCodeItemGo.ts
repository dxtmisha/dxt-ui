import { type Ref } from 'vue'
import { isFilled } from '@dxtmisha/functional'

import type { InputCodeItemElement } from './basicTypes'
import type { InputCodeItemProps } from './props'

/**
 * Class for handling the movement of elements in a list.
 *
 * Класс для работы с перемещением элементов по списку.
 */
export class InputCodeItemGo {
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
  ) {}

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
  next() {
    this.toFocus(this.element.value?.nextElementSibling)
  }

  /**
   * Return to the previous element.
   *
   * Вернуться на предыдущий элемент.
   */
  back() {
    this.toFocus(this.element.value?.previousElementSibling)
  }

  /**
   * Changes the focus location depending on the value entered.
   *
   * Изменяет место фокусировки в зависимости от заполнения значения.
   */
  focusToPreviousEmpty() {
    if (
      this.isMove()
      && this.element.value
      && !this.isValue()
    ) {
      let maximum = 32
      let element: InputCodeItemElement = this.element.value.previousElementSibling
      let elementOld: InputCodeItemElement = this.element.value

      while (maximum-- > 0) {
        if (!element) {
          if (elementOld) {
            this.toFocus(elementOld)
          }

          break
        }

        const input = this.getInput(element)

        if (
          input
          && isFilled(input.value, true)
        ) {
          this.toFocus(elementOld)
          break
        }

        elementOld = element
        element = element.previousElementSibling
      }
    }
  }

  /**
   * Focus to the next unfilled element.
   *
   * Сфокусироваться на следующем незаполненном элементе.
   */
  focusToNextEmpty() {
    if (
      this.isMove()
      && this.element.value
    ) {
      let maximum = 32
      let element: InputCodeItemElement = this.element.value.nextElementSibling

      while (maximum-- > 0) {
        if (!element) {
          break
        }

        const input = this.getInput(element)

        if (
          input
          && !isFilled(input.value, true)
        ) {
          this.toFocus(element)
          break
        }

        element = element.nextElementSibling
      }
    }
  }

  /**
   * Highlights the text of the element.
   *
   * Выделяет текст элемента.
   * @param element selected element / выбранный элемент
   */
  selection(element: InputCodeItemElement = this.element.value) {
    const input = this.getInput(element)

    if (input) {
      setTimeout(() => {
        input.selectionStart = 0
        input.selectionEnd = input.value.length
      }, 32)
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
  protected toFocus(element?: InputCodeItemElement) {
    if (this.isMove()) {
      const input = this.getInput(element)

      if (input) {
        input.focus()
        this.selection(element)
      }
    }
  }
}
