import type { CollageElement } from './CollageElement'
import type { CollageGrow } from './CollageGrow'

/**
 * Class managing vertical masonry variant layout and grow factors for Collage. /
 * Класс, управляющий макетом варианта вертикальной кладки и коэффициентами роста для Collage.
 */
export class CollageMasonryVertical {
  /**
   * Constructor for CollageMasonryVertical. /
   * Конструктор для CollageMasonryVertical.
   * @param grow manager for item grow factors and CSS properties / менеджер коэффициентов роста элементов и CSS-свойств
   * @param element manager for container DOM elements / менеджер DOM-элементов контейнера
   */
  constructor(
    protected readonly grow: CollageGrow,
    protected readonly element: CollageElement
  ) { }

  /**
   * Recalculates vertical masonry layout setting grow factors according to element scroll heights. /
   * Пересчитывает вертикальный плиточный макет, устанавливая коэффициенты роста по высоте содержимого элементов.
   */
  resize(): void {
    this.grow.resetGrow()

    requestAnimationFrame(() => {
      this.element.getItems()
        .forEach((itemElement) => {
          const itemHeight = parseInt(itemElement.dataset.height || '1', 10)
          const computedStyle = getComputedStyle(itemElement)
          const minHeight = parseFloat(computedStyle.minHeight.replace('px', ''))

          if (
            minHeight > 0
            && itemElement.scrollHeight > minHeight + 4
          ) {
            const heightRatio = minHeight / (itemHeight || 1)
            const computedGrow = Math.round(itemElement.scrollHeight / heightRatio)
            this.grow.setGrow(itemElement, computedGrow)
          }
        })
    })
  }
}
