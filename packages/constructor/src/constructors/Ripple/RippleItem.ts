// ai-none

import { type Ref } from 'vue'
import { createElement } from '@dxtmisha/functional'
import type { ImageCoordinator } from '@dxtmisha/functional-basic'

import type { RippleProps } from './props'

/**
 * Class for managing ripple wave elements.
 * Imperatively creates a span for each press, positions it via CSS variables
 * and removes it after the end animation (or by a fallback timeout).
 *
 * Класс для управления элементами волны (ripple).
 * Императивно создаёт span на каждое нажатие, позиционирует его через CSS-переменные
 * и удаляет после завершающей анимации (или по резервному таймауту).
 */
export class RippleItem {
  /** CSS class name for the ripple item element / CSS-класс для элемента эффекта */
  protected readonly classItem: string
  /** CSS class name for the active ending state / CSS-класс для состояния завершения эффекта */
  protected readonly classEnd: string

  /** CSS variable name for the x-coordinate / Имя CSS-переменной для координаты X */
  protected readonly styleX: string
  /** CSS variable name for the y-coordinate / Имя CSS-переменной для координаты Y */
  protected readonly styleY: string

  /**
   * Constructor for creating a ripple item instance.
   *
   * Конструктор для создания экземпляра элемента эффекта.
   * @param props input properties / входные свойства
   * @param element span element containing the ripple effects / span-элемент, содержащий эффекты волны
   * @param className base CSS class name / базовое имя CSS-класса
   */
  constructor(
    protected readonly props: RippleProps,
    protected readonly element: Ref<HTMLSpanElement | undefined>,
    protected readonly className: string
  ) {
    this.classItem = `${this.className}__item`
    this.classEnd = `${this.className}--end`

    this.styleX = `--${this.className}-sys-x`
    this.styleY = `--${this.className}-sys-y`
  }

  /**
   * Adding a new ripple element at the specified coordinates, or at the center if omitted.
   *
   * Добавление нового элемента волны по указанным координатам или по центру, если они не указаны.
   * @param coordinator layout coordinates / координаты макета
   */
  add(coordinator?: ImageCoordinator): void {
    if (this.props.disabled) {
      return
    }

    const element = this.element.value

    if (element) {
      const x = coordinator?.x ?? element.offsetWidth / 2
      const y = coordinator?.y ?? element.offsetHeight / 2

      createElement<HTMLSpanElement>(element, 'span', (item) => {
        const timeout = setTimeout(() => item.parentElement?.removeChild(item), 1000)

        item.onanimationend = () => item.classList.add(this.classEnd)
        item.ontransitionend = () => {
          clearTimeout(timeout)
          item.parentElement?.removeChild(item)
        }

        item.style.setProperty(this.styleX, `${x}px`)
        item.style.setProperty(this.styleY, `${y}px`)
        item.classList.add(this.classItem)
      })
    }
  }

  /**
   * Adding a new ripple element at the center of the target element.
   *
   * Добавление нового элемента волны по центру целевого элемента.
   */
  addCenter(): void {
    this.add()
  }
}
