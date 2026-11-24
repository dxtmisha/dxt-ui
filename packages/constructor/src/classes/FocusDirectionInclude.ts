import {
  type ConstrBind,
  DesignLifecycleAbstract,
  EventItem,
  executeFunction,
  type FunctionOr,
  isEnter,
  isFunction
} from '@dxtmisha/functional'
import {
  ref,
  type Ref,
  unref
} from 'vue'

/**
 * Minimum coordinate offset in pixels along the target axis to consider a candidate in that direction /
 * Минимальное смещение координат в пикселях вдоль целевой оси для отбора кандидата в данном направлении
 */
const DIRECTION_THRESHOLD = 1

/**
 * Weight multiplier applied to squared orthogonal distance to prioritize aligned elements /
 * Весовой коэффициент для квадрата перпендикулярного расстояния с приоритетом выровненных элементов
 */
const CROSS_AXIS_WEIGHT = 4

/**
 * Coordinate structure representing element center or coordinates difference /
 * Структура координат, представляющая центр элемента или разность координат
 */
export type FocusCoordinates = {
  /** Horizontal coordinate / Горизонтальная координата */
  x: number
  /** Vertical coordinate / Вертикальная координата */
  y: number
}

/**
 * Class for managing directional focus navigation on child elements via keyboard arrow keys,
 * while keeping actual browser focus on the parent element.
 *
 * Класс для управления направленной навигацией фокуса по дочерним элементам с помощью клавиш со стрелками,
 * сохраняя фактический фокус браузера на родительском элементе.
 */
export class FocusDirectionInclude<E extends HTMLElement = HTMLElement> extends DesignLifecycleAbstract {
  /** Event item for keydown event / Элемент события для события нажатия клавиши */
  protected keydownEvent?: EventItem<HTMLElement, KeyboardEvent>

  /** Currently active focus element / Текущий активный элемент фокуса */
  protected currentActive?: HTMLElement

  /**
   * Constructor for FocusDirectionInclude.
   *
   * Конструктор для FocusDirectionInclude.
   * @param element reference or getter for the parent element / ссылка или геттер родительского элемента
   * @param selector selector for elements participating in focus / селектор элементов, участвующих в фокусировке
   * @param activeSelector selector for default element to receive focus / селектор элемента, получающего фокус по умолчанию
   * @param activeClass CSS class name indicating that element is focused / имя CSS-класса для указания, что элемент сейчас в фокусе
   * @param control whether focus navigation is enabled / включено ли управление навигацией фокуса
   */
  constructor(
    protected readonly element: Ref<E | undefined> | (() => E | undefined),
    protected readonly selector: string = '.sys-focusDirection__item',
    protected readonly activeSelector: string = '.sys-focusDirection__item--active',
    protected readonly activeClass: string = 'sys-focusDirection__item--active',
    protected readonly control: FunctionOr<boolean | undefined> = true
  ) {
    super()
  }

  /** Reactive ID of the currently active descendant element / Реактивный ID текущего активного дочернего элемента */
  protected readonly activeId = ref<string | undefined>(undefined)

  /**
   * Returns binding properties for the parent focus container element.
   *
   * Возвращает свойства привязки для родительского элемента контейнера фокуса.
   * @returns binding properties object / объект свойств привязки
   */
  get binds(): ConstrBind {
    if (!this.is()) {
      return {}
    }

    const binds: ConstrBind = {
      tabindex: 0,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }

    if (this.activeId.value) {
      binds['aria-activedescendant'] = this.activeId.value
    }

    return binds
  }

  /**
   * Checks whether directional navigation control is enabled.
   *
   * Проверяет, включено ли управление направленной навигацией.
   * @returns true if control is enabled / true, если управление включено
   */
  is(): boolean {
    return Boolean(executeFunction(this.control))
  }

  /**
   * Sets focus to the default/initial child element.
   *
   * Устанавливает фокус на начальный дочерний элемент по умолчанию.
   * @returns this instance / текущий экземпляр
   */
  activateDefault(): this {
    const container = this.getElement()

    if (
      !container
      || !this.is()
      || this.getActiveElement()
    ) {
      return this
    }

    this.currentActive = (this.activeSelector && container.querySelector<HTMLElement>(this.activeSelector))
      || container.querySelector<HTMLElement>(this.selector)
      || undefined

    this.currentActive?.classList.add(this.activeClass)
    this.syncActiveId()

    return this
  }

  /**
   * Returns binding properties for a child item element to disable direct tab focus.
   *
   * Возвращает свойства привязки для дочернего элемента для запрета прямого фокуса.
   * @param extra additional properties / дополнительные свойства
   * @returns binding properties for child element / свойства привязки для дочернего элемента
   */
  bindsItem(extra?: ConstrBind): ConstrBind {
    if (this.is()) {
      return {
        ...extra,
        tabindex: extra?.tabindex ?? -1
      }
    }

    return {
      ...extra
    }
  }

  /**
   * Clears the active focus class from all child elements.
   *
   * Удаляет активный класс фокуса со всех дочерних элементов.
   * @returns this instance / текущий экземпляр
   */
  clearActive(): this {
    this.currentActive = undefined
    this.activeId.value = undefined
    this.clearAllActiveClasses()

    return this
  }

  /**
   * Handler for focus event on the container element.
   *
   * Обработчик события фокуса на элементе контейнера.
   */
  readonly onFocus = (): void => {
    if (!this.is()) {
      return
    }

    this.activateDefault()
    this.start()
  }

  /**
   * Handler for blur event on the container element.
   *
   * Обработчик события потери фокуса на элементе контейнера.
   */
  readonly onBlur = (): void => {
    this.stop()
    this.clearActive()
  }

  /**
   * Cleanup lifecycle listeners and active reference on unmount.
   *
   * Очистка слушателей жизненного цикла и активной ссылки при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stop()
  }

  /**
   * Returns tabindex value for a child item element to disable direct tab focus.
   *
   * Возвращает значение tabindex для дочернего элемента для запрета прямого фокуса.
   * @returns tabindex number or undefined / значение tabindex или undefined
   */
  tabindexItem(): number | undefined {
    return this.is() ? -1 : undefined
  }

  /**
   * Checks if the coordinate offset matches the target direction.
   *
   * Проверяет, соответствует ли смещение координат целевому направлению.
   * @param difference coordinate difference object / объект разницы координат
   * @param direction target direction / целевое направление
   * @returns true if direction matches / true, если направление совпадает
   */
  protected isCorrectDirection(
    difference: FocusCoordinates,
    direction: string
  ): boolean {
    switch (direction) {
      case 'ArrowUp':
        return difference.y < -DIRECTION_THRESHOLD
      case 'ArrowDown':
        return difference.y > DIRECTION_THRESHOLD
      case 'ArrowLeft':
        return difference.x < -DIRECTION_THRESHOLD
      case 'ArrowRight':
        return difference.x > DIRECTION_THRESHOLD
    }
    return false
  }

  /**
   * Gets the currently active child element from cache or container DOM,
   * invalidating detached or foreign DOM references.
   *
   * Получает текущий активный дочерний элемент из кэша или DOM контейнера,
   * сбрасывая отсоединённые или сторонние DOM-ссылки.
   * @returns active element or undefined / активный элемент или undefined
   */
  protected getActiveElement(): HTMLElement | undefined {
    const container = this.getElement()

    if (
      this.currentActive
      && (
        !this.currentActive.isConnected
        || !container?.contains(this.currentActive)
      )
    ) {
      this.currentActive = undefined
      this.activeId.value = undefined
    }

    if (!this.currentActive) {
      this.currentActive = container?.querySelector<HTMLElement>(`.${this.activeClass}`) ?? undefined
      this.syncActiveId()
    }

    return this.currentActive
  }

  /**
   * Calculates the difference between two coordinates.
   *
   * Вычисляет разницу между двумя координатами.
   * @param center1 first coordinates / первые координаты
   * @param center2 second coordinates / вторые координаты
   * @returns difference object / объект разницы
   */
  protected getCoordinatesDifference(
    center1: FocusCoordinates,
    center2: FocusCoordinates
  ): FocusCoordinates {
    return {
      x: center1.x - center2.x,
      y: center1.y - center2.y
    }
  }

  /**
   * Gets the current active child element, activating the default one if none is active.
   *
   * Получает текущий активный дочерний элемент, активируя элемент по умолчанию, если ни один не активен.
   * @returns current active element or undefined / текущий активный элемент или undefined
   */
  protected getCurrentActive(): HTMLElement | undefined {
    this.activateDefault()
    return this.getActiveElement()
  }

  /**
   * Calculates the weighted distance between element centers based on direction.
   *
   * Вычисляет взвешенное расстояние между центрами элементов в зависимости от направления.
   * @param difference coordinate difference object / объект разницы координат
   * @param direction target direction / целевое направление
   * @returns calculated distance / рассчитанное расстояние
   */
  protected getDistance(
    difference: FocusCoordinates,
    direction: string
  ): number {
    if (
      direction === 'ArrowUp'
      || direction === 'ArrowDown'
    ) {
      return difference.x * difference.x * CROSS_AXIS_WEIGHT + difference.y * difference.y
    }

    return difference.x * difference.x + difference.y * difference.y * CROSS_AXIS_WEIGHT
  }

  /**
   * Resolves the parent container element from a ref or getter function.
   *
   * Получает родительский элемент контейнера из ref или функции-геттера.
   * @returns parent container element or undefined / родительский элемент контейнера или undefined
   */
  protected getElement(): E | undefined {
    if (isFunction(this.element)) {
      return this.element()
    }

    return unref(this.element)
  }

  /**
   * Calculates the center coordinates of a given element.
   *
   * Вычисляет координаты центра заданного элемента.
   * @param targetElement target HTML element / целевой HTML-элемент
   * @returns object with x and y coordinates of element center / объект с координатами x и y центра элемента
   */
  protected getElementCenter(targetElement: HTMLElement): FocusCoordinates {
    const boundingRect = targetElement.getBoundingClientRect()
    return {
      x: boundingRect.left + boundingRect.width / 2,
      y: boundingRect.top + boundingRect.height / 2
    }
  }

  /**
   * Removes the active class from all elements inside the container.
   *
   * Удаляет активный класс со всех элементов внутри контейнера.
   */
  protected clearAllActiveClasses(): void {
    this.getElement()
      ?.querySelectorAll(`.${this.activeClass}`)
      .forEach((activeElementItem) => {
        activeElementItem.classList.remove(this.activeClass)
      })
  }

  /**
   * Finds the nearest candidate element in the specified direction.
   *
   * Находит ближайший элемент-кандидат в указанном направлении.
   * @param direction keyboard arrow key direction / направление стрелки клавиатуры
   * @returns nearest candidate or undefined / ближайший кандидат или undefined
   */
  protected findNearestCandidate(
    direction: string
  ): HTMLElement | undefined {
    const activeElement = this.getActiveElement()
    const candidates = this.getElement()?.querySelectorAll<HTMLElement>(this.selector)

    if (
      !activeElement
      || !candidates
      || candidates.length <= 1
    ) {
      return undefined
    }

    const activeCenter = this.getElementCenter(activeElement)

    let bestCandidate: HTMLElement | undefined
    let minDistance = Infinity

    for (const candidate of candidates) {
      if (candidate === activeElement) {
        continue
      }

      const candidateCenter = this.getElementCenter(candidate)
      const difference = this.getCoordinatesDifference(candidateCenter, activeCenter)

      if (
        this.isCorrectDirection(difference, direction)
      ) {
        const distance = this.getDistance(difference, direction)

        if (distance < minDistance) {
          minDistance = distance
          bestCandidate = candidate
        }
      }
    }

    return bestCandidate
  }

  /**
   * Moves focus to the nearest element in the given direction,
   * or activates the default element if no active element is currently present.
   *
   * Перемещает фокус на ближайший элемент в указанном направлении
   * или активирует элемент по умолчанию, если активный элемент отсутствует.
   * @param direction keyboard arrow key direction / направление стрелки клавиатуры
   */
  protected move(direction: string): void {
    if (!this.getActiveElement()) {
      this.getCurrentActive()
      return
    }

    const bestCandidate = this.findNearestCandidate(direction)

    if (bestCandidate) {
      this.clearAllActiveClasses()

      bestCandidate.classList.add(this.activeClass)
      bestCandidate.scrollIntoView({ block: 'nearest', inline: 'nearest' })

      this.currentActive = bestCandidate
      this.syncActiveId()
    }
  }

  /**
   * Handler for keydown event.
   *
   * Обработчик для события нажатия клавиши.
   * @param event keyboard event object / объект события клавиатуры
   */
  protected readonly onKeydown = (event: KeyboardEvent): void => {
    if (!this.is()) {
      this.stop()
      this.clearActive()
      return
    }

    if (event.isComposing) {
      return
    }

    const key = event.key

    if (
      key === 'ArrowUp'
      || key === 'ArrowDown'
      || key === 'ArrowLeft'
      || key === 'ArrowRight'
    ) {
      event.preventDefault()
      this.move(key)
    } else if (isEnter(event)) {
      const activeElement = this.getActiveElement()

      if (activeElement) {
        event.preventDefault()
        activeElement.click()
      }
    }
  }

  /**
   * Starts event listeners.
   *
   * Запускает слушатели событий.
   */
  protected start(): void {
    this.keydownEvent?.stop()
    this.keydownEvent = undefined

    const container = this.getElement()

    if (
      !container
      || !this.is()
    ) {
      return
    }

    this.keydownEvent = new EventItem<HTMLElement, KeyboardEvent>(container, 'keydown', this.onKeydown)
    this.keydownEvent.start()
  }

  /**
   * Stops event listeners and releases cached active element reference.
   *
   * Останавливает слушатели событий и освобождает кэшированную ссылку на активный элемент.
   */
  protected stop(): void {
    this.keydownEvent?.stop()
    this.keydownEvent = undefined
    this.currentActive = undefined
    this.activeId.value = undefined
  }

  /**
   * Synchronizes the reactive active descendant ID from the current active element.
   *
   * Синхронизирует реактивный ID активного потомка из текущего активного элемента.
   */
  protected syncActiveId(): void {
    this.activeId.value = this.currentActive?.id || undefined
  }
}
