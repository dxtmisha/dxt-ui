import { EventItem } from '@dxtmisha/functional'
import {
  type ToRefs,
  onMounted,
  onUnmounted,
  provide,
  watch
} from 'vue'

import type { CollageElement } from './CollageElement'
import type { CollageStyle } from './CollageStyle'
import type { CollageWoven } from './CollageWoven'

import {
  COLLAGE_NAME_UPDATE,
  type CollageUpdate
} from './basicTypes'
import type { CollageProps } from './props'

/**
 * Class managing dynamic layout modes, resize calculations, and coordinate synchronization for Collage.
 *
 * Класс, управляющий динамическими режимами макета, расчетами при изменении размера и синхронизацией координат для Collage.
 */
export class CollageAppearance {
  /** Previous window inner width for resize tracking / Предыдущая внутренняя ширина окна для отслеживания изменения размера */
  protected previousWidth: number = 0

  /** Timeout identifier for debounced layout updates / Идентификатор таймера для отложенных обновлений макета */
  protected timeoutResize?: ReturnType<typeof setTimeout>

  /** Window resize event listener controller / Контроллер слушателя событий изменения размера окна */
  protected eventResize?: EventItem<Window, Event>

  /**
   * Constructor for CollageAppearance.
   *
   * Конструктор для CollageAppearance.
   * @param props input component properties / входные свойства компонента
   * @param refs input reactive properties / входные реактивные свойства
   * @param elementItem manager for container DOM elements / менеджер DOM-элементов контейнера
   * @param style manager for collage styles and CSS variables / менеджер стилей и CSS-переменных коллажа
   * @param woven manager for woven appearance layout / менеджер макета внешнего вида woven
   */
  constructor(
    protected readonly props: CollageProps,
    protected readonly refs: ToRefs<CollageProps>,
    protected readonly elementItem: CollageElement,
    protected readonly style: CollageStyle,
    protected readonly woven: CollageWoven
  ) {
    provide<CollageUpdate>(COLLAGE_NAME_UPDATE, this.update)

    onMounted(() => {
      watch([this.refs.appearance], this.update, { immediate: true })
    })

    onUnmounted(() => {
      this.stopEvents()
    })
  }

  /**
   * Recalculates woven layout alternating rows and even state.
   *
   * Пересчитывает макет woven, чередуя строки и состояние четности.
   */
  protected resizeWoven(): void {
    this.woven.resize()
  }

  /**
   * Recalculates horizontal masonry layout distributing grow factors across row items.
   *
   * Пересчитывает горизонтальный плиточный макет, распределяя коэффициенты роста по элементам строк.
   */
  protected resizeMasonryHorizontal(): void {
    if (!this.elementItem.is()) {
      return
    }

    this.style.resetGrow()

    requestAnimationFrame(() => {
      if (!this.elementItem.is()) {
        return
      }

      const lines = this.elementItem.getLines()
      const columnsTotals: number[] = []
      let maxColumns = 0

      lines.forEach((rowElements) => {
        let currentColumnSum = 0
        rowElements.forEach((itemElement) => {
          const itemWidth = parseInt(itemElement.dataset.width || '1', 10)
          currentColumnSum += isNaN(itemWidth) ? 1 : itemWidth
        })

        if (maxColumns < currentColumnSum) {
          maxColumns = currentColumnSum
        }

        columnsTotals.push(currentColumnSum)
      })

      lines.forEach((rowElements, index) => {
        if (index < lines.length - 1) {
          let remainingDifference = maxColumns - columnsTotals[index]
          const growPerItem = Math.ceil(remainingDifference / rowElements.length)

          rowElements.forEach((itemElement) => {
            let growValue = 0

            if (remainingDifference >= growPerItem) {
              growValue = growPerItem
              remainingDifference -= growPerItem
            } else if (remainingDifference > 0) {
              growValue = remainingDifference
              remainingDifference = 0
            }

            if (growValue > 0) {
              this.style.setGrow(itemElement, growValue)
            }
          })
        }
      })
    })
  }

  /**
   * Recalculates vertical masonry layout setting grow factors according to element scroll heights.
   *
   * Пересчитывает вертикальный плиточный макет, устанавливая коэффициенты роста по высоте содержимого элементов.
   */
  protected resizeMasonryVertical(): void {
    if (!this.elementItem.is()) {
      return
    }

    this.style.resetGrow()

    requestAnimationFrame(() => {
      if (!this.elementItem.is()) {
        return
      }

      this.elementItem.getItems().forEach((itemElement) => {
        const itemHeight = parseInt(itemElement.dataset.height || '1', 10)
        const computedStyle = getComputedStyle(itemElement)
        const minHeight = parseFloat(computedStyle.minHeight.replace('px', ''))

        if (minHeight > 0 && itemElement.scrollHeight > minHeight + 4) {
          const heightRatio = minHeight / (itemHeight || 1)
          const computedGrow = Math.round(itemElement.scrollHeight / heightRatio)
          this.style.setGrow(itemElement, computedGrow)
        }
      })
    })
  }

  /**
   * Dispatches resize recalculation based on current appearance mode.
   *
   * Выполняет перерасчет макета в зависимости от текущего режима внешнего вида.
   */
  protected readonly resize = (): void => {
    switch (this.props.appearance) {
      case 'woven':
        this.resizeWoven()
        break
      case 'masonryHorizontal':
        this.resizeMasonryHorizontal()
        break
      case 'masonryVertical':
        this.resizeMasonryVertical()
        break
    }
  }

  /**
   * Stops event listeners and clears active timers.
   *
   * Останавливает слушатели событий и очищает активные таймеры.
   */
  protected stopEvents(): void {
    if (this.eventResize) {
      this.eventResize.stop()
      this.eventResize = undefined
    }

    if (this.timeoutResize !== undefined) {
      clearTimeout(this.timeoutResize)
      this.timeoutResize = undefined
    }
  }

  /**
   * Updates collage layout and initializes resize watchers if necessary.
   *
   * Обновляет макет коллажа и инициализирует наблюдатели изменения размера при необходимости.
   */
  readonly update = (): void => {
    if (
      this.elementItem.is()
      && (
        this.props.appearance === 'woven'
        || this.props.appearance === 'masonryHorizontal'
        || this.props.appearance === 'masonryVertical'
      )
    ) {
      if (!this.eventResize) {
        this.eventResize = new EventItem(window, ['resize'], this.updateByTime)
        this.eventResize.start()
      }

      this.resize()
    } else {
      this.stopEvents()
    }
  }

  /**
   * Debounced layout recalculation triggered by window resize.
   *
   * Отложенный перерасчет макета, вызываемый при изменении размера окна.
   */
  readonly updateByTime = (): void => {
    if (window.innerWidth !== this.previousWidth) {
      if (this.timeoutResize !== undefined) {
        clearTimeout(this.timeoutResize)
      }

      this.previousWidth = window.innerWidth
      this.timeoutResize = setTimeout(this.resize, 320)
    }
  }
}
