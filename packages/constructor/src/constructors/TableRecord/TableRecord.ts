import { type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  DesignLogicAbstract,
  isObjectNotArray,
  isString,
  type SortColumnItem
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import { TableHeaderItemInclude } from '../TableHeaderItem'
import { TableItemInclude } from '../TableItem'

import type { AriaList } from '../../types/ariaTypes'
import type { TableRecordProps } from './props'
import type { TableRecordComponents, TableRecordEmits, TableRecordSlots } from './types'

/** TableRecord dependency constructors type / Тип конструкторов зависимостей TableRecord */
export type TableRecordConstructors = {
  /** Table header item include constructor / Конструктор включения ячейки шапки таблицы */
  tableHeaderItem: typeof TableHeaderItemInclude
  /** Table item include constructor / Конструктор включения ячейки таблицы */
  tableItem: typeof TableItemInclude
}

/**
 * Class representing a table record constructor (TableRecord).
 * Provides lazy coordination for rendering table items, header items, row bindings, and ARIA attributes.
 *
 * Класс, представляющий конструктор записи таблицы (TableRecord).
 * Обеспечивает ленивую координацию рендеринга ячеек таблицы, ячеек шапки, привязок строки и ARIA-атрибутов.
 */
export class TableRecord<
  E extends HTMLElement = HTMLElement,
  COMP extends TableRecordComponents = TableRecordComponents,
  EMITS extends TableRecordEmits = TableRecordEmits,
  SLOTS extends TableRecordSlots = TableRecordSlots,
  P extends TableRecordProps = TableRecordProps,
  CONSTRUCTORS extends TableRecordConstructors & Record<string, new (...parameters: never[]) => unknown> = TableRecordConstructors
> extends DesignLogicAbstract<
    E,
    COMP,
    EMITS,
    SLOTS,
    P,
    CONSTRUCTORS
  > {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<CONSTRUCTORS> = {
    tableHeaderItem: {
      item: TableHeaderItemInclude,
      canCreate: () => Boolean(this.components?.is('tableHeaderItem')),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        { onSort: (item: SortColumnItem) => (this.emits as ConstrEmit<TableRecordEmits> | undefined)?.('sort', item) },
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
  } as unknown as ConstrItems<CONSTRUCTORS>

  /**
   * Computed ARIA attributes for the table record row.
   *
   * Вычисляемые ARIA-атрибуты для строки записи таблицы.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.selected(this.props.selected || undefined),
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled))
    }
  }

  /**
   * Computed HTML attributes and bindings for the main element.
   *
   * Вычисляемые HTML-атрибуты и привязки для главного элемента.
   * @returns HTML attributes and bindings object / объект HTML-атрибутов и привязок
   */
  get binds(): ConstrBind {
    return {
      'data-key': this.key,
      ...this.aria
    }
  }

  /**
   * Returns the key identifier of the row element.
   * Prefers explicit `props.index` and falls back to own `item.index` or `item.value` scalar identifiers.
   *
   * Возвращает ключ-идентификатор элемента строки.
   * Отдаёт приоритет явному `props.index` и при его отсутствии использует собственные скалярные поля `item.index` или `item.value`.
   * @returns key identifier or undefined / ключ-идентификатор или undefined
   */
  get key(): string | undefined {
    const explicitKey = this.resolveKeyValue(this.props.index)

    if (explicitKey !== undefined) {
      return explicitKey
    }

    const record = this.props.item

    if (isObjectNotArray(record)) {
      if (Object.hasOwn(record, 'index')) {
        const indexKey = this.resolveKeyValue(record.index)

        if (indexKey !== undefined) {
          return indexKey
        }
      }

      if (Object.hasOwn(record, 'value')) {
        const valueKey = this.resolveKeyValue(record.value)

        if (valueKey !== undefined) {
          return valueKey
        }
      }
    }

    return undefined
  }

  /**
   * Renders the column cell depending on whether it is a header cell or a data cell.
   *
   * Рендерит ячейку колонки в зависимости от того, является ли она ячейкой заголовка или данных.
   * @param index column index / индекс колонки
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  renderColumn(index: string): VNode | undefined {
    const rowKey = this.key
    const cellKey = rowKey !== undefined ? `${rowKey}__${index}` : index

    if (this.isHeaderColumn(index)) {
      const scope = this.props.isHeader
        ? 'col'
        : (!this.props.isFoot ? 'row' : undefined)

      return this.callInstance(
        'tableHeaderItem',
        item => item.renderItem(
          cellKey,
          index,
          this.props.item,
          scope ? { scope } : undefined
        )
      )
    }

    return this.callInstance(
      'tableItem',
      item => item.renderItem(cellKey, index, this.props.item)
    )
  }

  /**
   * Checks whether the column should be rendered as a header cell.
   *
   * Проверяет, должна ли колонка рендериться как ячейка-заголовок.
   * @param index column index / индекс колонки
   * @returns true if header column / true, если колонка является заголовком
   */
  protected isHeaderColumn(index: string): boolean {
    if (this.props.isHeader || this.props.isFoot) {
      return true
    }

    const record = this.props.item

    if (
      isObjectNotArray(record)
      && Object.hasOwn(record, index)
    ) {
      const cell = record[index]

      return isObjectNotArray(cell) && Boolean(cell.isHeader)
    }

    return false
  }

  /**
   * Resolves a scalar key candidate (non-empty string or finite number) to a string identifier.
   *
   * Преобразует скалярный кандидат ключа (непустую строку или конечное число) в строковый идентификатор.
   * @param value candidate key value / проверяемое значение ключа
   * @returns normalized string key or undefined / нормализованный строковый ключ или undefined
   */
  protected resolveKeyValue(value: unknown): string | undefined {
    if (isString(value) && value !== '') {
      return value
    }

    if (typeof value === 'number' && Number.isFinite(value)) {
      return String(value)
    }

    return undefined
  }
}
