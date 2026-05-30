import { type Ref, ref } from 'vue'

import type { MotionAxisClassStatus } from './basicTypes'

/**
 * Class for managing element DOM states, styles, and animation cycles.
 * It encapsulates CSS class updates, transitions, and scroll block states.
 *
 * Класс для управления состояниями DOM-элементов, стилями и циклами анимации.
 * Инкапсулирует обновления CSS-классов, переходы и состояния блокировки прокрутки.
 */
export class MotionAxisElement {
  /** Map of standard slide CSS class names for different states / Карта стандартных имён CSS-классов слайдов для различных состояний */
  protected readonly classStatus: MotionAxisClassStatus
  /** Reactive state indicating if start of transition has occurred / Реактивное состояние, указывающее, произошел ли старт перехода */
  protected readonly start = ref<boolean>(false)
  /** Reactive state indicating if active transition motion is running / Реактивное состояние, указывающее, запущено ли движение перехода */
  protected readonly move = ref<boolean>(false)

  /**
   * Constructor for initializing element managers.
   *
   * Конструктор для инициализации менеджеров элементов.
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
   * @returns true if active / true если активен
   */
  isActive(element: HTMLDivElement): boolean {
    return element.classList.contains(this.classStatus.active)
  }

  /**
   * Returns the primary container element.
   *
   * Возвращает основной элемент контейнера.
   * @returns HTMLDivElement or undefined / HTMLDivElement или undefined
   */
  get(): HTMLDivElement | undefined {
    return this.element.value
  }

  /**
   * Returns the start state.
   *
   * Возвращает состояние старта.
   * @returns start activation status / статус активации старта
   */
  getStart(): boolean {
    return this.start.value
  }

  /**
   * Returns the move state.
   *
   * Возвращает состояние движения.
   * @returns move activation status / статус активации движения
   */
  getMove(): boolean {
    return this.move.value
  }

  /**
   * Returns a list of all classes by status.
   *
   * Возвращает список всех классов по статусу.
   * @returns mapping of slide classes / сопоставление классов слайдов
   */
  getClassStatus(): MotionAxisClassStatus {
    return this.classStatus
  }

  /**
   * Returns the element for preparation to transition to the active element.
   *
   * Возвращает элемент для подготовки к переходу к активному элементу.
   * @returns preparation element or null / элемент подготовки или null
   */
  getElementPreparation(): HTMLDivElement | null | undefined {
    return this.element.value
      ?.querySelector<HTMLDivElement>(`.${this.classStatus.preparation}`)
  }

  /**
   * Blocks scrolling on the closest scroll container.
   *
   * Блокирует прокрутку в ближайшем контейнере прокрутки.
   */
  blockScroll() {
    const scrollElement = this.getElementScroll()

    if (scrollElement) {
      scrollElement.classList.add(this.getClassScrollHidden())
    }
  }

  /**
   * Restores scrolling on the closest scroll container.
   *
   * Восстанавливает прокрутку в ближайшем контейнере прокрутки.
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
      const go = () => {
        if (this.move.value) {
          callback()
          this.element.value?.removeEventListener('transitionend', listener)
          this.toStop()
          clearTimeout(timeout)
        }
      }
      const listener = (event: TransitionEvent) => {
        if (this.isTransitionend(event)) {
          go()
        }
      }
      const timeout = setTimeout(go, 1024)

      this.element.value.addEventListener('transitionend', listener)
    }
  }

  /**
   * Returns class names by status.
   *
   * Возвращает названия классов по статусу.
   * @param status status name / название статуса
   * @returns formatted CSS class string / строка отформатированного CSS-класса
   */
  protected getClassStatusItem(status?: string): string {
    return `${this.className}__slide${status ? `--${status}` : ''}`
  }

  /**
   * Returns the class name for the scroll element.
   *
   * Возвращает название класса для элемента прокрутки.
   * @returns CSS class name / имя CSS-класса
   */
  protected getClassScroll(): string {
    return `${this.className}__scroll`
  }

  /**
   * Returns the class name for the hidden scroll element.
   *
   * Возвращает название класса для скрытого элемента прокрутки.
   * @returns CSS class name / имя CSS-класса
   */
  protected getClassScrollHidden(): string {
    return `${this.className}__scroll--hidden`
  }

  /**
   * Returns the scroll element closest to the container.
   *
   * Возвращает элемент прокрутки, ближайший к контейнеру.
   * @returns scroll HTMLElement / HTMLElement прокрутки
   */
  protected getElementScroll(): HTMLElement | undefined {
    return this.element.value?.closest(`.${this.getClassScroll()}`) ?? undefined
  }

  /**
   * Checking if the current transitionend event matches key axis transformation.
   *
   * Проверка соответствия события transitionend ключевому преобразованию осей.
   * @param event event object / объект события
   * @returns true if it is valid transitionend / true если переход валидный
   */
  protected isTransitionend(event: TransitionEvent): boolean {
    return ['transform', 'translate', 'scale'].indexOf(event.propertyName) !== -1
      && this.isActive(event.target as HTMLDivElement)
  }
}
