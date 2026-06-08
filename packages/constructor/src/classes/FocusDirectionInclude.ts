import { onMounted, onUnmounted, watch, type Ref } from 'vue'
import { EventItem } from '@dxtmisha/functional'

/**
 * Coordinate structure representing element center or coordinates difference.
 *
 * Структура координат, представляющая центр элемента или разность координат.
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
export class FocusDirectionInclude {
  /** Event item for focus event / Элемент события для события фокуса */
  protected focusEvent?: EventItem<HTMLElement, FocusEvent>

  /** Event item for blur event / Элемент события для события потери фокуса */
  protected blurEvent?: EventItem<HTMLElement, FocusEvent>

  /** Event item for keydown event / Элемент события для события нажатия клавиши */
  protected keydownEvent?: EventItem<HTMLElement, KeyboardEvent>

  /** Currently active focus element / Текущий активный элемент фокуса */
  protected currentActive?: HTMLElement

  /**
   * Constructor for FocusDirectionInclude.
   *
   * Конструктор для FocusDirectionInclude.
   * @param element reference to the parent element / ссылка на родительский элемент
   * @param selector selector for elements participating in focus / селектор элементов, участвующих в фокусировке
   * @param activeSelector selector for default element to receive focus / селектор элемента, получающего фокус по умолчанию
   * @param activeClass CSS class name indicating that element is focused / имя CSS-класса для указания, что элемент сейчас в фокусе
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly selector: string = '.sys-focusDirection__item',
    protected readonly activeSelector: string = '.sys-focusDirection__item--active',
    protected readonly activeClass: string = 'sys-focusDirection__item--active'
  ) {
    onMounted(() => {
      watch(
        this.element,
        (newElement) => {
          this.stop()
          if (newElement) {
            this.start(newElement)
          }
        },
        { immediate: true }
      )
    })

    onUnmounted(() => {
      this.stop()
    })
  }

  /**
   * Sets focus to the default/initial child element.
   *
   * Устанавливает фокус на начальный дочерний элемент по умолчанию.
   * @returns this instance / текущий экземпляр
   */
  activateDefault(): this {
    const container = this.element.value

    if (
      !container
      || this.getActiveElement()
    ) {
      return this
    }

    this.currentActive = (this.activeSelector && container.querySelector<HTMLElement>(this.activeSelector))
      || container.querySelector<HTMLElement>(this.selector)
      || undefined

    this.currentActive?.classList.add(this.activeClass)

    return this
  }

  /**
   * Clears the active focus class from all child elements.
   *
   * Удаляет активный класс фокуса со всех дочерних элементов.
   * @returns this instance / текущий экземпляр
   */
  clearActive(): this {
    this.currentActive = undefined
    this.clearAllActiveClasses()

    return this
  }

  /**
   * Starts event listeners.
   *
   * Запускает слушатели событий.
   * @param targetElement HTML element to listen on / HTML-элемент для прослушивания
   */
  protected start(targetElement: HTMLElement): void {
    this.focusEvent = new EventItem<HTMLElement, FocusEvent>(targetElement, 'focus', this.onFocus, { capture: true })
      .start()

    this.blurEvent = new EventItem<HTMLElement, FocusEvent>(targetElement, 'blur', this.onBlur, { capture: true })
      .start()

    this.keydownEvent = new EventItem<HTMLElement, KeyboardEvent>(targetElement, 'keydown', this.onKeydown)
      .start()
  }

  /**
   * Stops event listeners.
   *
   * Останавливает слушатели событий.
   */
  protected stop(): void {
    this.focusEvent?.stop()
    this.blurEvent?.stop()
    this.keydownEvent?.stop()
  }

  /**
   * Moves focus to the nearest element in the given direction.
   *
   * Перемещает фокус на ближайший элемент в указанном направлении.
   * @param direction keyboard arrow key direction / направление стрелки клавиатуры
   */
  protected move(direction: string): void {
    const bestCandidate = this.findNearestCandidate(direction)

    if (bestCandidate) {
      this.clearAllActiveClasses()

      bestCandidate.classList.add(this.activeClass)
      bestCandidate?.scrollIntoView({ block: 'nearest', inline: 'nearest' })

      this.currentActive = bestCandidate
    }
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
        return difference.y < -1
      case 'ArrowDown':
        return difference.y > 1
      case 'ArrowLeft':
        return difference.x < -1
      case 'ArrowRight':
        return difference.x > 1
    }
    return false
  }

  /**
   * Gets the currently active child element or activates the default one.
   *
   * Получает текущий активный дочерний элемент или активирует элемент по умолчанию.
   * @returns active element or undefined / активный элемент или undefined
   */
  protected getActiveElement(): HTMLElement | undefined {
    if (!this.currentActive) {
      this.currentActive = this.element.value?.querySelector<HTMLElement>(`.${this.activeClass}`) ?? undefined
    }

    return this.currentActive
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
      return difference.x * difference.x * 4 + difference.y * difference.y
    }

    return difference.x * difference.x + difference.y * difference.y * 4
  }

  /**
   * Calculates the center coordinates of a given element.
   *
   * Вычисляет координаты центра заданного элемента.
   * @param targetElement target HTML element / целевой HTML-элемент
   * @returns object with x and y coordinates of element center / объект с координатами x и y центра элемента
   */
  protected getElementCenter(targetElement: HTMLElement): FocusCoordinates {
    const rect = targetElement.getBoundingClientRect()
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    }
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
    const candidates = this.element.value?.querySelectorAll<HTMLElement>(this.selector)

    if (
      !this.currentActive
      || !candidates
      || candidates.length <= 1
    ) {
      return undefined
    }

    const activeCenter = this.getElementCenter(this.currentActive)

    let bestCandidate: HTMLElement | undefined
    let minDistance = Infinity

    for (const candidate of candidates) {
      if (candidate === this.currentActive) {
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
   * Removes the active class from all elements inside the container.
   *
   * Удаляет активный класс со всех элементов внутри контейнера.
   */
  protected clearAllActiveClasses(): void {
    this.element.value
      ?.querySelectorAll(`.${this.activeClass}`)
      ?.forEach((activeElementItem) => {
        activeElementItem.classList.remove(this.activeClass)
      })
  }

  /** Handler for focus event / Обработчик для события фокуса */
  protected readonly onFocus = (): void => {
    this.activateDefault()
  }

  /** Handler for blur event / Обработчик для события потери фокуса */
  protected readonly onBlur = (): void => {
    this.clearActive()
  }

  /**
   * Handler for keydown event.
   *
   * Обработчик для события нажатия клавиши.
   * @param event keyboard event object / объект события клавиатуры
   */
  protected readonly onKeydown = (event: KeyboardEvent): void => {
    const key = event.key

    if (
      key === 'ArrowUp'
      || key === 'ArrowDown'
      || key === 'ArrowLeft'
      || key === 'ArrowRight'
    ) {
      event.preventDefault()
      this.move(key)
    }
  }
}
