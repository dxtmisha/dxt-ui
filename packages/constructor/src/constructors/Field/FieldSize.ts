import { onMounted, onUnmounted, onUpdated, type Ref, watch } from 'vue'
import { EventItem, isDomRuntime } from '@dxtmisha/functional'

/**
 * Input field margin control class.
 *
 * Класс управления отступами для элемента ввода.
 */
export class FieldSize {
  protected left: number = 0
  protected right: number = 0
  protected title: number = 0

  protected event?: EventItem<Window, Event>

  /**
   * Constructor
   * @param element main element/ главный элемент
   * @param className class name/ название класса
   */
  constructor(
    protected readonly element: Ref<HTMLLabelElement | undefined>,
    protected readonly className: string
  ) {
    watch(element, () => this.update, { immediate: true })

    if (isDomRuntime()) {
      this.event = new EventItem(window, 'resize', this.update)
      onUnmounted(() => this.event?.stop())
    }

    onMounted(this.update)
    onUpdated(this.update)
  }

  /**
   * Update margins.
   *
   * Обновление отступов.
   */
  readonly update = () => {
    requestAnimationFrame(() => {
      const elementSpace = this.getElementSpace()
      const elementPrefix = this.getElementPrefix()

      if (elementSpace) {
        this.left = elementSpace.offsetLeft
        this.right = (elementSpace.parentElement?.offsetWidth ?? 0) - this.left - elementSpace.offsetWidth
      }

      this.title = elementPrefix?.offsetLeft ?? elementSpace?.offsetLeft ?? 0

      this.make()
    })
  }

  /**
   * Returns separator elements.
   *
   * Возвращает элементы-разделители.
   */
  protected getElementSpace(): HTMLDivElement | undefined {
    return this.element.value?.querySelector(`.${this.className}__body__scoreboard__space`) ?? undefined
  }

  /**
   * Returns element with prefix.
   *
   * Возвращает элемент с префиксом.
   */
  protected getElementPrefix(): HTMLDivElement | undefined {
    return this.element.value?.querySelector(`.${this.className}__prefix`) ?? undefined
  }

  /**
   * Update input field margins.
   *
   * Обновление отступов для поля ввода.
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
