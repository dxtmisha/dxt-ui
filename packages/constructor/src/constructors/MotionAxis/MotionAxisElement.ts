import { type Ref, ref } from 'vue'

import type { MotionAxisClassStatus } from './basicTypes'

/**
 * Class for managing elements.
 *
 * Класс для управления элементами.
 */
export class MotionAxisElement {
  protected readonly classStatus: MotionAxisClassStatus
  protected readonly start = ref<boolean>(false)
  protected readonly move = ref<boolean>(false)

  /**
   * Constructor
   * @param element window element / элемент окна
   * @param className class name / название класса
   */
  constructor(
    protected element: Ref<HTMLDivElement | undefined>,
    protected className: string | string[]
  ) {
    this.classStatus = {
      main: this.getClassStatusItem(),
      previous: this.getClassStatusItem('previous'),
      preparation: this.getClassStatusItem('preparation'),
      active: this.getClassStatusItem('active')
    }
  }

  /**
   * Checks if the element is an active slide.
   *
   * Проверяет, является ли элемент активным слайдом.
   * @param element selected element / выбранный элемент
   */
  isActive(element: HTMLDivElement): boolean {
    return element.classList.contains(this.classStatus.active)
  }

  /**
   * Returns the element.
   *
   * Возвращает элемент.
   */
  get(): HTMLDivElement | undefined {
    return this.element.value
  }

  /**
   * Returns the start state.
   *
   * Возвращает состояние старта.
   */
  getStart(): boolean {
    return this.start.value
  }

  /**
   * Returns the move state.
   *
   * Возвращает состояние движения.
   */
  getMove(): boolean {
    return this.move.value
  }

  /**
   * Returns a list of all classes by status.
   *
   * Возвращает список всех классов по статусу.
   */
  getClassStatus(): MotionAxisClassStatus {
    return this.classStatus
  }

  /**
   * Returns the element for preparation to transition to the active element.
   *
   * Возвращает элемент для подготовки к переходу к активному элементу.
   */
  getElementPreparation(): HTMLDivElement | null | undefined {
    return this.element.value
      ?.querySelector<HTMLDivElement>(`.${this.classStatus.preparation}`)
  }

  /**
   * Blocks scrolling.
   *
   * Блокирует прокрутку.
   */
  blockScroll() {
    const scrollElement = this.getElementScroll()

    if (scrollElement) {
      scrollElement.classList.add(this.getClassScrollHidden())
    }
  }

  /**
   * Restores scrolling.
   *
   * Восстанавливает прокрутку.
   */
  returnScroll() {
    const scrollElement = this.getElementScroll()

    if (scrollElement) {
      scrollElement.classList.remove(this.getClassScrollHidden())
    }
  }

  /**
   * Transition to start state.
   *
   * Переход в состояние старта.
   */
  toStart() {
    this.start.value = true
  }

  /**
   * End of start state.
   *
   * Окончание состояния старта.
   */
  toEnd() {
    this.start.value = false
  }

  /**
   * Transition to move state.
   *
   * Переход в состояние движения.
   */
  toMove() {
    this.move.value = true
  }

  /**
   * End of move state.
   *
   * Окончание состояния движения.
   */
  toStop() {
    this.move.value = false
  }

  /**
   * Activates event listeners for animation end.
   *
   * Активизирует события прослушивания окончания анимации.
   * @param callback event listener / прослушивать события
   */
  initEvent(callback: () => void) {
    if (this.element.value) {
      const listener = (event: TransitionEvent) => {
        if (this.isTransitionend(event)) {
          callback()
          this.element.value?.removeEventListener('transitionend', listener)
          this.toStop()
        }
      }

      this.element.value.addEventListener('transitionend', listener)
    }
  }

  /**
   * Returns class names by status.
   *
   * Возвращает названия классов по статусу.
   * @param status status name / название статуса
   */
  protected getClassStatusItem(status?: string): string {
    return `${this.className}__slide${status ? `--${status}` : ''}`
  }

  /**
   * Returns the class name for the scroll element.
   *
   * Возвращает название класса для элемента прокрутки.
   */
  protected getClassScroll(): string {
    return `${this.className}__scroll`
  }

  /**
   * Returns the class name for the hidden scroll element.
   *
   * Возвращает название класса для скрытого элемента прокрутки.
   */
  protected getClassScrollHidden(): string {
    return `${this.className}__scroll--hidden`
  }

  /**
   * Returns the scroll element.
   *
   * Возвращает элемент прокрутки.
   */
  protected getElementScroll(): HTMLElement | undefined {
    return this.element.value?.closest(`.${this.getClassScroll()}`) ?? undefined
  }

  /**
   * End of animation event.
   *
   * Событие окончания анимации.
   * @param event event object / объект события
   */
  protected isTransitionend(event: TransitionEvent): boolean {
    return ['transform', 'translate', 'scale'].indexOf(event.propertyName) !== -1
      && this.isActive(event.target as HTMLDivElement)
  }
}
