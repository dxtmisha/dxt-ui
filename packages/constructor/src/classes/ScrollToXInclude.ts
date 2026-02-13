import { computed, type Ref } from 'vue'

/**
 * Class for working with horizontal scrolling.
 *
 * Класс для работы с горизонтальной прокруткой.
 */
export class ScrollToXInclude {
  /**
   * Constructor
   * @param element element/ элемент
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>
  ) {
  }

  /**
   * Returns bindings for the element.
   *
   * Возвращает привязки для элемента.
   */
  readonly binds = computed(() => {
    return {
      onWheelPassive: this.onScrollToX
    }
  })

  /**
   * Handler for the wheel event.
   *
   * Обработчик события колеса мыши.
   * @param event wheel event/ событие колеса мыши
   */
  readonly onScrollToX = (event: WheelEvent): void => {
    if (
      this.element.value
      && event.deltaY !== 0
      && this.isNotScrollSnap()
    ) {
      event.preventDefault()
      this.element.value.scrollLeft += Number(event.deltaY)
    }
  }

  /**
   * Checks if scroll snap is not enabled.
   *
   * Проверяет, не включена ли привязка прокрутки.
   */
  protected isNotScrollSnap(): boolean {
    if (this.element.value) {
      const styles = getComputedStyle(this.element.value)

      return styles.scrollSnapType !== 'x mandatory'
    }

    return true
  }
}
