// ai-none

import {
  DesignLifecycleAbstract,
  isDomRuntime
} from '@dxtmisha/functional'

import type { CollageElementRow } from './basicTypes'
import type { CollageElement } from './CollageElement'
import type { CollageGrow } from './CollageGrow'
import type { CollageProps } from './props'

/** Maximum vertical center difference tolerance for grouping items into a row / Максимально допустимая разница вертикальных центров для группировки элементов в строку */
export const COLLAGE_MASONRY_ROW_TOLERANCE = 16

/**
 * Class managing horizontal masonry variant layout, row lines, and grow factors for Collage.
 *
 * Класс, управляющий макетом варианта горизонтальной кладки, строками и коэффициентами роста для Collage.
 */
export class CollageMasonryHorizontal extends DesignLifecycleAbstract {
  /**
   * Checks if the current collage variant is horizontal masonry.
   *
   * Проверяет, является ли текущий вариант коллажа горизонтальной кладкой.
   * @param props component properties / свойства компонента
   * @returns true if horizontal masonry variant is active / true, если активен вариант горизонтальной кладки
   */
  static is(props?: Readonly<CollageProps>): boolean {
    return props?.variant === 'masonryHorizontal'
  }

  /** Pending animation frame identifier / Идентификатор ожидающего кадра анимации */
  protected animationFrameId?: number

  /**
   * Constructor for CollageMasonryHorizontal.
   *
   * Конструктор для CollageMasonryHorizontal.
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
   * Recalculates horizontal masonry layout distributing grow factors across row items.
   *
   * Пересчитывает горизонтальный плиточный макет, распределяя коэффициенты роста по элементам строк.
   */
  resize(): void {
    if (!isDomRuntime()) {
      return
    }

    this.cancel()

    this.animationFrameId = requestAnimationFrame(() => {
      this.animationFrameId = undefined

      if (!this.elementItem().is()) {
        return
      }

      const lines = this.getLines()
      const lastLineIndex = lines.length - 1

      if (lastLineIndex <= 0) {
        return
      }

      const { columnsTotals, maxColumns } = this.getColumnsTotals(lines)
      const grow = this.grow()

      lines.forEach((rowElements, index) => {
        if (index < lastLineIndex) {
          let remainingDifference = maxColumns - columnsTotals[index]

          if (remainingDifference <= 0) {
            return
          }

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
              grow.setGrow(itemElement, growValue)
            }
          })
        }
      })
    })
  }

  /**
   * Calculates column totals for each line and finds the maximum column count.
   *
   * Вычисляет суммы колонок для каждой строки и находит максимальное количество колонок.
   * @param lines array of rows containing elements / массив строк, содержащих элементы
   * @returns object with column totals for each row and maximum columns / объект с суммами колонок для каждой строки и максимальным числом колонок
   */
  protected getColumnsTotals(lines: HTMLElement[][]): {
    columnsTotals: number[]
    maxColumns: number
  } {
    const columnsTotals: number[] = []
    let maxColumns = 0

    lines.forEach((rowElements) => {
      let currentColumnSum = 0

      rowElements.forEach((itemElement) => {
        const itemWidth = parseInt(itemElement.dataset.width || '1', 10)
        currentColumnSum += Number.isNaN(itemWidth) || itemWidth <= 0 ? 1 : itemWidth
      })

      if (maxColumns < currentColumnSum) {
        maxColumns = currentColumnSum
      }

      columnsTotals.push(currentColumnSum)
    })

    return { columnsTotals, maxColumns }
  }

  /**
   * Returns the vertical center coordinate of the given item element using offset properties.
   *
   * Возвращает вертикальную координату центра указанного элемента через offset-свойства.
   * @param itemElement target item element / целевой элемент
   * @returns vertical center coordinate / вертикальная координата центра
   */
  protected getItemCenter(itemElement: HTMLElement): number {
    return Math.ceil(itemElement.offsetTop + itemElement.offsetHeight / 2)
  }

  /**
   * Groups child items into visual horizontal lines (rows) by their vertical center position.
   *
   * Группирует дочерние элементы в визуальные горизонтальные линии (строки) по их вертикальному центру.
   * @returns array of rows containing elements / массив строк, содержащих элементы
   */
  protected getLines(): HTMLElement[][] {
    const rows: CollageElementRow[] = []

    this.elementItem()
      .getItems()
      .forEach((itemElement) => {
        const rowCenter = this.getItemCenter(itemElement)
        const matchedRow = rows.find(
          row => Math.abs(row.center - rowCenter) <= COLLAGE_MASONRY_ROW_TOLERANCE
        )

        if (matchedRow) {
          matchedRow.items.push(itemElement)
        } else {
          rows.push({ center: rowCenter, items: [itemElement] })
        }
      })

    return rows
      .sort((firstRow, secondRow) => firstRow.center - secondRow.center)
      .map(row => row.items)
  }
}
