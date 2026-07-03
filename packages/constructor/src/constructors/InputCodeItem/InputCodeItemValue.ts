import { type Ref, ref } from 'vue'
import { isFilled } from '@dxtmisha/functional'

/**
 * Class for handling input values.
 *
 * Класс для работы с вводимыми значениями.
 */
export class InputCodeItemValue {
  /** Input value ref / Ссылка на значение ввода */
  readonly value = ref<string>('')

  /**
   * Constructor
   *
   * Конструктор
   * @param element instance of the element itself / экземпляр самого элемента
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>
  ) { }

  /**
   * Checks if the data is filled.
   *
   * Проверяет, заполнены ли данные.
   * @returns check status / статус проверки
   */
  is(): boolean {
    return isFilled(this.value.value, true)
  }

  /**
   * Get the current value.
   *
   * Получить текущее значение.
   * @returns current value / текущее значение
   */
  get(): string {
    return this.value.value
  }

  /**
   * Value change.
   *
   * Изменение значения.
   * @param value new value / новое значение
   */
  readonly set = (value: string) => {
    if (this.value.value !== value) {
      this.value.value = value
      this.update()
    }
  }

  /**
   * Value reset.
   *
   * Обнуление значения.
   */
  readonly reset = () => this.set('')

  /**
   * Data update.
   *
   * Обновление данных.
   */
  protected update() {
    const input = this.element.value?.querySelector<HTMLInputElement>('input')

    if (
      input
      && input.value !== this.value.value
    ) {
      input.value = this.value.value
    }
  }
}
