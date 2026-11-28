import { isArrow } from '@dxtmisha/functional-basic'
import type { FocusDirectionActive } from './FocusDirectionActive'

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
 * Class for 2D spatial coordinate calculations and finding the nearest focusable candidate element
 * in a given arrow-key direction.
 *
 * Класс для расчёта 2D-координат и поиска ближайшего элемента-кандидата для фокуса
 * в заданном направлении стрелки клавиатуры.
 */
export class FocusDirectionCoordinates<E extends HTMLElement = HTMLElement> {
  /**
   * Constructor for FocusDirectionCoordinates.
   *
   * Конструктор для FocusDirectionCoordinates.
   * @param active active descendant state manager / менеджер состояния активного потомка
   * @param selector selector for elements participating in focus / селектор элементов, участвующих в фокусировке
   */
  constructor(
    protected readonly active: FocusDirectionActive<E>,
    protected readonly selector: string = '.sys-focusDirection__item'
  ) {
  }

  /**
   * Finds the nearest candidate element in the specified direction relative to the active element.
   *
   * Находит ближайший элемент-кандидат в указанном направлении относительно активного элемента.
   * @param direction keyboard arrow key direction / направление стрелки клавиатуры
   * @returns nearest candidate element or undefined / ближайший элемент-кандидат или undefined
   */
  findNearest(direction: string): HTMLElement | undefined {
    if (
      !this.selector
      || !isArrow(direction)
    ) {
      return undefined
    }

    const activeElement = this.active.get()

    if (!activeElement) {
      return undefined
    }

    const candidates = this.active.getElement()?.querySelectorAll<HTMLElement>(this.selector)

    if (
      !candidates
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

      if (this.isCorrectDirection(difference, direction)) {
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
      return difference.x * difference.x * CROSS_AXIS_WEIGHT + difference.y * difference.y
    }

    return difference.x * difference.x + difference.y * difference.y * CROSS_AXIS_WEIGHT
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
}
