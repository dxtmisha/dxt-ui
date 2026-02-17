import { type Ref, ref } from 'vue'

import type { MotionAxisClassStatus } from './basicTypes'

/**
 * Class for managing elements.<br>
 * Класс для управления элементами.
 */
export class MotionAxisElement {
  protected readonly classStatus: MotionAxisClassStatus
  protected readonly start = ref<boolean>(false)
  protected readonly move = ref<boolean>(false)

  /**
   * Constructor
   * @param element window element /<br>элемент окна
   * @param classDesignComponent class name /<br>название класса
   */
  constructor(
    protected element: Ref<HTMLDivElement | undefined>,
    protected classDesignComponent: string | string[]
  ) {
    this.classStatus = {
      main: this.getClassStatusItem(),
      previous: this.getClassStatusItem('previous'),
      preparation: this.getClassStatusItem('preparation'),
      active: this.getClassStatusItem('active')
    }
  }

  /**
   * Checks if the element is an active slide.<br>
   * Проверяет, является ли элемент активным слайдом.
   * @param element selected element /<br>выбранный элемент
   */
  isActive(element: HTMLDivElement): boolean {
    return element.classList.contains(this.classStatus.active)
  }

  get(): HTMLDivElement | undefined {
    return this.element.value
  }

  getStart(): boolean {
    return this.start.value
  }

  getMove(): boolean {
    return this.move.value
  }

  /**
   * Returns a list of all classes by status.<br>
   * Возвращает список всех классов по статусу.
   */
  getClassStatus(): MotionAxisClassStatus {
    return this.classStatus
  }

  /**
   * Returns the element for preparation to transition to the active element.<br>
   * Возвращает элемент для подготовки к переходу к активному элементу.
   */
  getElementPreparation(): HTMLDivElement | null | undefined {
    return this.element.value
      ?.querySelector<HTMLDivElement>(`.${this.classStatus.preparation}`)
  }

  blockScroll() {
    const scrollElement = this.getElementScroll()

    if (scrollElement) {
      scrollElement.classList.add(this.getClassScrollHidden())
    }
  }

  returnScroll() {
    const scrollElement = this.getElementScroll()

    if (scrollElement) {
      scrollElement.classList.remove(this.getClassScrollHidden())
    }
  }

  toStart() {
    this.start.value = true
  }

  endStart() {
    this.start.value = false
  }

  toMove() {
    this.move.value = true
  }

  endMove() {
    this.move.value = false
  }

  /**
   * Activates event listeners for animation end.<br>
   * Активизирует события прослушивания окончания анимации.
   * @param callback event listener /<br>прослушивать события
   */
  initEvent(callback: () => void) {
    if (this.element.value) {
      const listener = (event: TransitionEvent) => {
        if (this.isTransitionend(event)) {
          callback()
          this.element.value?.removeEventListener('transitionend', listener)
          this.endMove()
        }
      }

      this.element.value.addEventListener('transitionend', listener)
    }
  }

  /**
   * Returns class names by status.<br>
   * Возвращает названия классов по статусу.
   * @param status status name /<br>название статуса
   */
  protected getClassStatusItem(status?: string): string {
    return `${this.classDesignComponent}__slide${status ? `--${status}` : ''}`
  }

  protected getClassScroll(): string {
    return `${this.classDesignComponent}__scroll`
  }

  protected getClassScrollHidden(): string {
    return `${this.classDesignComponent}__scroll--hidden`
  }

  protected getElementScroll(): HTMLElement | undefined {
    return this.element.value?.closest(`.${this.getClassScroll()}`) ?? undefined
  }

  /**
   * End of animation event.<br>
   * Событие окончания анимации.
   * @param event event object /<br>объект события
   */
  protected isTransitionend(event: TransitionEvent): boolean {
    return ['transform', 'translate', 'scale'].indexOf(event.propertyName) !== -1
      && this.isActive(event.target as HTMLDivElement)
  }
}
