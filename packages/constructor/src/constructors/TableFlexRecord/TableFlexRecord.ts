import type {
  ConstrClassObject,
  ConstrItems,
  ConstrStyles,
  SortColumnItem
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import { TableHeaderItemInclude } from '../TableHeaderItem'
import { TableItemInclude } from '../TableItem'
import { TableRecord, type TableRecordConstructors } from '../TableRecord'
import { TableFlexRecordLazy } from './TableFlexRecordLazy'

import type { AriaList } from '../../types/ariaTypes'
import type { TableFlexRecordProps } from './props'
import type {
  TableFlexRecordComponents,
  TableFlexRecordEmits,
  TableFlexRecordSlots
} from './types'

/** TableFlexRecord dependency constructors type / Тип конструкторов зависимостей TableFlexRecord */
export type TableFlexRecordConstructors = TableRecordConstructors & {
  /** Lazy loading handler constructor / Конструктор обработчика ленивой загрузки */
  lazy: typeof TableFlexRecordLazy
}

/**
 * Class representing a flex table record constructor (TableFlexRecord).
 * Inherits row coordination from TableRecord and adds lazy viewport rendering, row ARIA role, and lazy state classes/styles.
 *
 * Класс, представляющий конструктор записи флекс-таблицы (TableFlexRecord).
 * Наследует координацию строки от TableRecord и добавляет ленивый рендеринг в области видимости, ARIA-роль строки и классы/стили ленивого состояния.
 */
export class TableFlexRecord extends TableRecord<
  HTMLElement,
  TableFlexRecordComponents,
  TableFlexRecordEmits,
  TableFlexRecordSlots,
  TableFlexRecordProps,
  TableFlexRecordConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<TableFlexRecordConstructors> = {
    lazy: {
      item: TableFlexRecordLazy,
      canCreate: () => TableFlexRecordLazy.is(this.props),
      conditions: () => TableFlexRecordLazy.is(this.props),
      parameters: () => [
        this.props,
        this.element,
        this.naming,
        this.isMounted
      ]
    },
    tableHeaderItem: {
      item: TableHeaderItemInclude,
      canCreate: () => Boolean(this.components?.is('tableHeaderItem')),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        { onSort: (item: SortColumnItem) => this.emits?.('sort', item) },
        this.slots
      ]
    },
    tableItem: {
      item: TableItemInclude,
      canCreate: () => Boolean(this.components?.is('tableItem')),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        undefined,
        this.slots
      ]
    }
  }

  /**
   * Computed ARIA attributes for the flex table record row.
   *
   * Вычисляемые ARIA-атрибуты для строки записи флекс-таблицы.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  override get aria(): AriaList {
    return {
      ...super.aria,
      ...AriaStaticInclude.role('row')
    }
  }

  /**
   * Computed classes for the flex table record row.
   *
   * Вычисляемые классы для строки записи флекс-таблицы.
   * @returns classes object / объект классов
   */
  get classes(): ConstrClassObject {
    return this.callInstance('lazy', item => item.classes, {})
  }

  /**
   * Computed styles for the flex table record row.
   *
   * Вычисляемые стили для строки записи флекс-таблицы.
   * @returns styles object / объект стилей
   */
  get styles(): ConstrStyles {
    return this.callInstance('lazy', item => item.styles, {})
  }

  /**
   * Returns whether the flex table record should render its column cells.
   *
   * Возвращает, должна ли запись флекс-таблицы рендерить ячейки колонок.
   * @returns true if column cells should be rendered / true, если ячейки колонок должны рендериться
   */
  isRender(): boolean {
    return this.callInstance('lazy', item => item.is(), true)
  }
}
