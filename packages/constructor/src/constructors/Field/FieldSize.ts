import { onMounted, onUnmounted, onUpdated, type Ref, watch } from 'vue'
import { EventItem } from '@dxtmisha/functional'

/**
 * Class for managing dynamic margins and padding of the input field based on accessory elements (prefix, suffix, space).
 * It calculates values reactively and sets CSS custom variables on the field element.
 *
 * Класс управления динамическими отступами для элемента ввода на основе вспомогательных элементов (префикс, суффикс, разделители).
 * Вычисляет значения реактивно и устанавливает пользовательские переменные CSS на элементе поля.
 */
export class FieldSize {
  /** Offset value from the left / Значение смещения слева */
  protected left: number = 0

  /** Offset value from the right / Значение смещения справа */
  protected right: number = 0

  /** Title offset position value / Значение позиции смещения заголовка */
  protected title: number = 0

  /** Window resize listener event / Событие слушателя изменения размеров окна */
  protected event?: EventItem<Window, Event>

  /**
   * Constructor for initializing FieldSize.
   *
   * Конструктор для инициализации FieldSize.
   * @param element main HTML element / главный HTML-элемент
   * @param className base CSS class name / базовое имя CSS-класса
   */
  constructor(
    protected readonly element: Ref<HTMLLabelElement | undefined>,
    protected readonly className: string
  ) {
    onMounted(() => {
      this.event = new EventItem(window, 'resize', () => this.update())
      watch(element, () => this.update(), { immediate: true })
    })
    onUnmounted(() => this.event?.stop())
    onUpdated(() => this.update())
  }

  /**
   * Updates field margins.
   *
   * Обновление отступов поля.
   * @param limit recursion limit to prevent infinite loops / лимит рекурсии для предотвращения бесконечных циклов
   */
  readonly update = (limit: number = 128) => {
    if (limit <= 0) {
      return
    }

    requestAnimationFrame(() => {
      const elementSpace = this.getElementSpace()
      const elementPrefix = this.getElementPrefix()

      if (elementSpace) {
        this.left = elementSpace.offsetLeft
        this.right = (elementSpace.parentElement?.offsetWidth ?? 0) - this.left - elementSpace.offsetWidth
      }

      this.title = elementPrefix?.offsetLeft ?? elementSpace?.offsetLeft ?? 0

      if (this.left <= 0) {
        this.update(limit - 1)
      } else {
        this.make()
      }
    })
  }

  /**
   * Returns the space separator element.
   *
   * Возвращает элемент-разделитель (пробел).
   * @returns space DOM element / элемент DOM разделителя
   */
  protected getElementSpace(): HTMLDivElement | undefined {
    return this.element.value?.querySelector(`.${this.className}__body__scoreboard__space`) ?? undefined
  }

  /**
   * Returns the prefix element.
   *
   * Возвращает элемент с префиксом.
   * @returns prefix DOM element / элемент DOM префикса
   */
  protected getElementPrefix(): HTMLDivElement | undefined {
    return this.element.value?.querySelector(`.${this.className}__prefix`) ?? undefined
  }

  /**
   * Updates CSS custom properties for input field margins and triggers show animation state.
   *
   * Обновляет пользовательские свойства CSS для отступов поля ввода и запускает анимацию показа.
   */
  protected make() {
    const element = this.element.value

    if (element) {
      element.style.setProperty(`--${this.className}-sys-left`, `${this.left}px`)
      element.style.setProperty(`--${this.className}-sys-right`, `${this.right}px`)
      element.style.setProperty(`--${this.className}-sys-title`, `${this.title}px`)

      if (!element.classList.contains(`${this.className}--show`)) {
        requestAnimationFrame(() => element.classList.add(`${this.className}--show`))
      }
    }
  }
}
