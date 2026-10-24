// ai-none

import { type Ref } from 'vue'
import { createElement, type DesignName } from '@dxtmisha/functional'
import type { ImageCoordinator } from '@dxtmisha/functional-basic'

import type { RippleProps } from './props'

/**
 * Class for managing ripple wave elements.
 * Imperatively creates a span for each press, positions it via CSS variables
 * and removes it after the end animation.
 *
 * Класс для управления элементами волны (ripple).
 * Императивно создаёт span на каждое нажатие, позиционирует его через CSS-переменные
 * и удаляет после завершающей анимации.
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
   * @param naming component naming helper / помощник именования компонента
   */
  constructor(
    protected readonly props: RippleProps,
    protected readonly element: Ref<HTMLSpanElement | undefined>,
    protected readonly naming: DesignName
  ) {
    this.classItem = this.naming.getSubClass('item')
    this.classEnd = this.naming.getStatusClass('end')

    this.styleX = this.naming.getStyle('x')
    this.styleY = this.naming.getStyle('y')
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
        item.onanimationend = () => item.classList.add(this.classEnd)
        item.ontransitionend = () => item.parentElement?.removeChild(item)

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
