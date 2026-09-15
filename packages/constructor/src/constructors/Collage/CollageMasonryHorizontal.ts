import type { CollageElementRow } from './basicTypes'
import type { CollageElement } from './CollageElement'
import type { CollageGrow } from './CollageGrow'

/** Maximum vertical center difference tolerance for grouping items into a row / Максимально допустимая разница вертикальных центров для группировки элементов в строку */
export const COLLAGE_MASONRY_ROW_TOLERANCE = 16

/**
 * Class managing horizontal masonry variant layout, row lines, and grow factors for Collage. /
 * Класс, управляющий макетом варианта горизонтальной кладки, строками и коэффициентами роста для Collage.
 */
export class CollageMasonryHorizontal {
  /**
   * Constructor for CollageMasonryHorizontal. /
   * Конструктор для CollageMasonryHorizontal.
   * @param grow manager for item grow factors and CSS properties / менеджер коэффициентов роста элементов и CSS-свойств
   * @param element manager for container DOM elements / менеджер DOM-элементов контейнера
   */
  constructor(
    protected readonly grow: CollageGrow,
    protected readonly element: CollageElement
  ) { }

  /**
   * Recalculates horizontal masonry layout distributing grow factors across row items. /
   * Пересчитывает горизонтальный плиточный макет, распределяя коэффициенты роста по элементам строк.
   */
  resize(): void {
    this.grow.resetGrow()

    requestAnimationFrame(() => {
      const lines = this.getLines()
      const { columnsTotals, maxColumns } = this.getColumnsTotals(lines)

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
              this.grow.setGrow(itemElement, growValue)
            }
          })
        }
      })
    })
  }

  /**
   * Calculates column totals for each line and finds the maximum column count. /
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
        currentColumnSum += isNaN(itemWidth) ? 1 : itemWidth
      })

      if (maxColumns < currentColumnSum) {
        maxColumns = currentColumnSum
      }

      columnsTotals.push(currentColumnSum)
    })

    return { columnsTotals, maxColumns }
  }

  /**
   * Returns the vertical center coordinate of the given item element using offset properties. /
   * Возвращает вертикальную координату центра указанного элемента через offset-свойства.
   * @param itemElement target item element / целевой элемент
   * @returns vertical center coordinate / вертикальная координата центра
   */
  protected getItemCenter(itemElement: HTMLElement): number {
    return Math.ceil(itemElement.offsetTop + itemElement.offsetHeight / 2)
  }

  /**
   * Groups child items into visual horizontal lines (rows) by their vertical center position. /
   * Группирует дочерние элементы в визуальные горизонтальные линии (строки) по их вертикальному центру.
   * @returns array of rows containing elements / массив строк, содержащих элементы
   */
  protected getLines(): HTMLElement[][] {
    const rows: CollageElementRow[] = []

    this.element
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
