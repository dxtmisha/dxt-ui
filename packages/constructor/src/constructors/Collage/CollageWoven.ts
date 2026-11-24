// ai-none

import {
  DesignLifecycleAbstract,
  type DesignName,
  isDomRuntime
} from '@dxtmisha/functional'

import type { CollageElement } from './CollageElement'
import type { CollageProps } from './props'

/**
 * Class managing woven variant layout and compact item states for Collage.
 *
 * Класс, управляющий макетом варианта woven и компактными состояниями элементов для Collage.
 */
export class CollageWoven extends DesignLifecycleAbstract {
  /**
   * Checks if the current collage variant is woven.
   *
   * Проверяет, является ли текущий вариант коллажа режимом woven.
   * @param props component properties / свойства компонента
   * @returns true if woven variant is active / true, если активен вариант woven
   */
  static is(props?: Readonly<CollageProps>): boolean {
    return props?.variant === 'woven'
  }

  /** Class name for compact items in woven variant / Имя класса для компактных элементов в woven режиме */
  readonly classCompact: string

  /** Pending animation frame identifier / Идентификатор ожидающего кадра анимации */
  protected animationFrameId?: number

  /**
   * Constructor for CollageWoven.
   *
   * Конструктор для CollageWoven.
   * @param naming component naming helper / помощник именования компонента
   * @param elementItem getter returning container DOM element manager / геттер, возвращающий менеджер DOM-элементов контейнера
   */
  constructor(
    protected readonly naming: DesignName,
    protected readonly elementItem: () => CollageElement
  ) {
    super()

    this.classCompact = `${naming.getName()}Item--compact`
  }

  /**
   * Cancels any scheduled layout frame and resets injected compact classes on all items.
   *
   * Отменяет запланированный кадр перерасчёта и сбрасывает внедрённые классы компактности на всех элементах.
   */
  reset(): void {
    this.cancel()
    this.elementItem().getItems(`.${this.classCompact}`).forEach(
      itemElement => this.resetItem(itemElement)
    )
  }

  /**
   * Cancels any pending animation frame scheduled by resize.
   *
   * Отменяет ожидающий кадр анимации, запланированный вызовом resize.
   */
  cancel(): void {
    if (
      this.animationFrameId !== undefined
      && isDomRuntime()
    ) {
      cancelAnimationFrame(this.animationFrameId)
      this.animationFrameId = undefined
    }
  }

  /**
   * Cleanup pending animation frames on component unmount.
   *
   * Очищает ожидающие кадры анимации при размонтировании компонента.
   */
  override readonly onUnmounted = (): void => {
    this.cancel()
  }

  /**
   * Recalculates woven layout alternating items.
   *
   * Пересчитывает макет woven, чередуя элементы.
   */
  resize(): void {
    if (!isDomRuntime()) {
      return
    }

    this.cancel()

    this.animationFrameId = requestAnimationFrame(() => {
      this.animationFrameId = undefined

      const elementItem = this.elementItem()

      if (!elementItem.is()) {
        return
      }

      const items = elementItem.getItems()
      const columns = this.getColumns(items)

      if (columns <= 0) {
        return
      }

      items.forEach((itemElement, index) => {
        const rowIndex = Math.floor(index / columns)
        const columnIndex = index % columns
        const isCompact = (rowIndex + columnIndex) % 2 === 1

        this.setCompact(itemElement, isCompact)
      })
    })
  }

  /**
   * Checks whether the collage container uses right-to-left layout direction.
   *
   * Проверяет, использует ли контейнер коллажа направление раскладки справа налево (RTL).
   * @param itemElement fallback item element when container is unavailable / запасной элемент при недоступности контейнера
   * @returns true if direction is RTL / true, если направление RTL
   */
  protected isRtl(itemElement: HTMLElement): boolean {
    const container = this.elementItem().getElement().value ?? itemElement
    const direction = getComputedStyle(container).direction

    if (direction) {
      return direction === 'rtl'
    }

    return container.closest('[dir]')?.getAttribute('dir')?.toLowerCase() === 'rtl'
  }

  /**
   * Calculates column count based on item positions along the inline axis, supporting both LTR and RTL layouts.
   *
   * Вычисляет количество колонок на основе позиций элементов по строчной оси с поддержкой LTR и RTL.
   * @param items array of item elements / массив элементов
   * @returns calculated column count / вычисленное количество колонок
   */
  protected getColumns(items: HTMLElement[]): number {
    const length = items.length

    if (length === 0) {
      return 0
    }

    const rtl = this.isRtl(items[0])
    let previousLeft = items[0].offsetLeft

    for (let index = 1; index < length; index++) {
      const currentLeft = items[index].offsetLeft

      if (rtl ? currentLeft >= previousLeft : currentLeft <= previousLeft) {
        return index
      }

      previousLeft = currentLeft
    }

    return length
  }

  /**
   * Toggles the compact class on the given item element.
   *
   * Переключает класс компактности на указанном элементе.
   * @param itemElement target item element / целевой элемент
   * @param compactState compact state flag / флаг состояния компактности
   */
  protected setCompact(itemElement: HTMLElement, compactState: boolean): void {
    itemElement.classList.toggle(this.classCompact, compactState)
  }

  /**
   * Resets injected compact class on the given item element.
   *
   * Сбрасывает внедренный класс компактности на указанном элементе.
   * @param itemElement target item element / целевой элемент
   */
  protected resetItem(itemElement: HTMLElement): void {
    itemElement.classList.remove(this.classCompact)
  }
}
