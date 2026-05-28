import { type Ref } from 'vue'

/**
 * Class for managing horizontal scrolling mechanics using wheel interactions.
 * It provides custom wheel scroll behaviors, scroll snap compatibility checks,
 * and generates appropriate event bindings for scrollable container elements.
 *
 * Класс для управления механикой горизонтальной прокрутки с помощью взаимодействия с колесом мыши.
 * Обеспечивает настраиваемое поведение прокрутки колесом, проверку совместимости с привязкой
 * прокрутки (scroll snap) и генерирует соответствующие привязки событий для прокручиваемых контейнеров.
 */
export class ScrollToXInclude {
  /**
   * Constructor
   *
   * Конструктор
   * @param element target scrollable element reference / ссылка на целевой прокручиваемый элемент
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>
  ) {
  }

  /**
   * Returns bindings for the element.
   *
   * Возвращает привязки для элемента.
   * @returns object with scroll event handlers / объект с обработчиками событий прокрутки
   */
  get binds() {
    return {
      onWheelPassive: this.onScrollToX
    }
  }

  /**
   * Handler for the wheel event.
   *
   * Обработчик события колеса мыши.
   * @param event wheel event / событие колеса мыши
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
   * @returns checking state / состояние проверки
   */
  protected isNotScrollSnap(): boolean {
    if (this.element.value) {
      const styles = getComputedStyle(this.element.value)

      return styles.scrollSnapType !== 'x mandatory'
    }

    return true
  }
}
