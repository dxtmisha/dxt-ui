import { type Ref, ref } from 'vue'

const openGlobal: string[] = []

/**
 * Class for managing the open state.
 *
 * Класс для управления состоянием открытия.
 */
export class MenuOpen {
  protected elementOld?: string

  readonly item = ref<boolean>(false)

  /**
   * Constructor
   * @param element input element / элемент ввода
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>
  ) {
  }

  /**
   * Checks if the current element is in focus.
   *
   * Проверяет, является ли текущий элемент в фокусе.
   */
  isFocus(): boolean {
    return Boolean(this.element.value && this.getWindowId() === openGlobal?.[0])
  }

  /**
   * State change.
   *
   * Изменение состояния.
   * @param value open state value / значение состояния открытия
   */
  set(value: boolean): this {
    this.item.value = value
    this.update()

    return this
  }

  protected getWindowId(): string | undefined {
    return this.element.value?.closest<HTMLDivElement>('*[data-window]')?.dataset.window
  }

  /**
   * Updates the focus status.
   *
   * Обновляет статус фокусировки.
   */
  protected readonly update = () => {
    const element = this.getWindowId() ?? this.elementOld

    if (element) {
      const key = openGlobal.indexOf(element)

      if (this.item.value) {
        if (key === -1) {
          openGlobal.unshift(element)
        }
      } else if (key !== -1) {
        openGlobal.splice(key, 1)
      }

      this.elementOld = element
    }
  }
}
