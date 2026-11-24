// ai-none

import {
  DesignLifecycleAbstract,
  isDomRuntime
} from '@dxtmisha/functional'

import type { CollageElement } from './CollageElement'
import type { CollageGrow } from './CollageGrow'
import type { CollageProps } from './props'

/** Minimum difference between scrollHeight and minHeight to trigger grow recalculation / Минимальная разница между scrollHeight и minHeight для запуска перерасчета grow */
export const COLLAGE_MASONRY_SCROLL_TOLERANCE = 4

/**
 * Class managing vertical masonry variant layout and grow factors for Collage.
 *
 * Класс, управляющий макетом варианта вертикальной кладки и коэффициентами роста для Collage.
 */
export class CollageMasonryVertical extends DesignLifecycleAbstract {
  /**
   * Checks if the current collage variant is vertical masonry.
   *
   * Проверяет, является ли текущий вариант коллажа вертикальной кладкой.
   * @param props component properties / свойства компонента
   * @returns true if vertical masonry variant is active / true, если активен вариант вертикальной кладки
   */
  static is(props?: Readonly<CollageProps>): boolean {
    return props?.variant === 'masonryVertical'
  }

  /** Pending animation frame identifier / Идентификатор ожидающего кадра анимации */
  protected animationFrameId?: number

  /**
   * Constructor for CollageMasonryVertical.
   *
   * Конструктор для CollageMasonryVertical.
   * @param elementItem getter returning container DOM element manager / геттер, возвращающий менеджер DOM-элементов контейнера
   * @param grow getter returning item grow factors manager / геттер, возвращающий менеджер коэффициентов роста элементов
   */
  constructor(
    protected readonly elementItem: () => CollageElement,
    protected readonly grow: () => CollageGrow
  ) {
    super()
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
   * Recalculates vertical masonry layout setting grow factors according to element scroll heights.
   *
   * Пересчитывает вертикальный плиточный макет, устанавливая коэффициенты роста по высоте содержимого элементов.
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

      const updates: Array<{
        element: HTMLElement
        growValue: number
      }> = []

      elementItem.getItems().forEach((itemElement) => {
        const parsedHeight = parseInt(itemElement.dataset.height || '1', 10)
        const itemHeight = !Number.isNaN(parsedHeight) && parsedHeight > 0 ? parsedHeight : 1
        const computedStyle = getComputedStyle(itemElement)
        const minHeight = parseFloat(computedStyle.minHeight || '0')
        const heightRatio = minHeight / itemHeight

        if (
          Number.isFinite(heightRatio)
          && heightRatio > 0
          && itemElement.scrollHeight > minHeight + COLLAGE_MASONRY_SCROLL_TOLERANCE
        ) {
          updates.push({
            element: itemElement,
            growValue: Math.round(itemElement.scrollHeight / heightRatio)
          })
        }
      })

      if (updates.length > 0) {
        const grow = this.grow()

        updates.forEach(({ element, growValue }) => {
          grow.setGrow(element, growValue)
        })
      }
    })
  }
}
