import { type Ref, type ToRefs, type VNode } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  isString,
  isObjectNotArray,
  type SortColumnItem
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { TableHeaderItemInclude } from '../TableHeaderItem'
import { TableItemInclude } from '../TableItem'

import type { TableRecordComponents, TableRecordEmits, TableRecordSlots } from './types'
import type { TableRecordProps } from './props'

/**
 * Class representing a table record constructor (TableRecord).
 * Coordinates rendering of table items and header items within a row.
 *
 * Класс, представляющий конструктор записи таблицы (TableRecord).
 * Координирует рендеринг ячеек таблицы и элементов шапки в пределах строки.
 */
export class TableRecord {
  /** Table header items include instance / Экземпляр включения ячеек шапки таблицы */
  readonly tableHeaderItem: TableHeaderItemInclude
  /** Table items include instance / Экземпляр включения ячеек таблицы */
  readonly tableItem: TableItemInclude

  /**
   * Constructor for TableRecord.
   *
   * Конструктор для TableRecord.
   * @param props input properties / входные свойства
   * @param refs input properties in the form of reactive references / входные свойства в виде реактивных ссылок
   * @param element target HTML element / целевой HTML-элемент
   * @param classDesign design system prefix / префикс дизайн-системы
   * @param className base CSS class name / базовое имя CSS-класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   * @param constructors.TableHeaderItemIncludeConstructor class for creating a table header item include / класс для создания включения ячейки шапки таблицы
   * @param constructors.TableItemIncludeConstructor class for creating a table item include / класс для создания включения ячейки таблицы
   */
  constructor(
    protected readonly props: TableRecordProps,
    protected readonly refs: ToRefs<TableRecordProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TableRecordComponents, TableRecordProps>,
    protected readonly slots?: TableRecordSlots,
    protected readonly emits?: ConstrEmit<TableRecordEmits>,
    constructors: {
      TableHeaderItemIncludeConstructor?: typeof TableHeaderItemInclude
      TableItemIncludeConstructor?: typeof TableItemInclude
    } = {}
  ) {
    const {
      TableHeaderItemIncludeConstructor = TableHeaderItemInclude,
      TableItemIncludeConstructor = TableItemInclude
    } = constructors

    this.tableHeaderItem = new TableHeaderItemIncludeConstructor(
      classDesign,
      className,
      props,
      components,
      { onSort: (item: SortColumnItem) => this.emits?.('sort', item) },
      slots
    )

    this.tableItem = new TableItemIncludeConstructor(
      classDesign,
      className,
      props,
      components,
      undefined,
      slots
    )
  }

  /**
   * Returns the key identifier of the element.
   *
   * Возвращает ключ идентификатора элемента.
   * @returns key identifier or undefined / ключ идентификатора или undefined
   */
  get key(): string | undefined {
    if (this.props.item) {
      if (isString(this.props.item?.index)) {
        return this.props.item.index
      }

      if (isString(this.props.item?.value)) {
        return this.props.item.value
      }
    }

    if (this.props.index) {
      return this.props.index
    }

    return undefined
  }

  /**
   * Computed HTML attributes and bindings for the main element.
   *
   * Вычисляемые HTML-атрибуты и привязки для главного элемента.
   * @returns HTML attributes and bindings object / объект HTML-атрибутов и привязок
   */
  get binds(): Record<string, any> {
    return {
      'data-key': this.key,
      ...AriaStaticInclude.selected(this.props.selected),
      ...AriaStaticInclude.disabled(this.props.disabled)
    }
  }

  /**
   * Renders the column cell depending on whether it is a header row or data row.
   *
   * Рендерит ячейку колонки в зависимости от того, является ли строка шапкой или данными.
   * @param index column index / индекс колонки
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  renderColumn(index: string): VNode | undefined {
    const key = `${this.key}__${index}`

    if (this.isHeaderColumn(index)) {
      return this.tableHeaderItem.renderItem(key, index, this.props.item, {
        scope: this.props.isHeader ? 'col' : 'row'
      })
    }

    return this.tableItem.renderItem(key, index, this.props.item)
  }

  /**
   * Checks whether the column is a header cell.
   *
   * Проверяет, является ли колонка ячейкой-заголовком.
   * @param index column index / индекс колонки
   * @returns true if header column / true, если заголовок колонки
   */
  protected isHeaderColumn(index: string): boolean {
    if (this.props.isHeader) {
      return true
    }

    const item = this.props.item?.[index]

    return isObjectNotArray(item) && Boolean(item?.isHeader)
  }
}
