import { type Ref, type ToRefs, type VNode } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  isString
} from '@dxtmisha/functional'

import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'
import { TableHeaderItemInclude } from '../TableHeaderItem'
import { TableItemInclude } from '../TableItem'
import { TableRecordLazy } from './TableRecordLazy'

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

  /** Client-only rendering include / Подключение рендеринга только на клиенте */
  readonly clientOnly: ClientOnlyInclude
  /** Table record lazy loading handler instance / Экземпляр обработчика ленивой загрузки записи таблицы */
  readonly lazy: TableRecordLazy

  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param refs input properties in the form of reactive references / входные свойства в виде реактивных ссылок
   * @param element target HTML element / целевой HTML-элемент
   * @param classDesign design system prefix / префикс дизайн-системы
   * @param className base CSS class name / базовое имя CSS-класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   * @param constructors.ClientOnlyIncludeConstructor class for creating a client only include / класс для создания включения рендеринга только на клиенте
   * @param constructors.TableHeaderItemIncludeConstructor class for creating a table header item include / класс для создания включения ячейки шапки таблицы
   * @param constructors.TableItemIncludeConstructor class for creating a table item include / класс для создания включения ячейки таблицы
   * @param constructors.TableRecordLazyConstructor class for creating a table record lazy loading handler / класс для создания обработчика ленивой загрузки записи таблицы
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
      ClientOnlyIncludeConstructor?: typeof ClientOnlyInclude
      TableHeaderItemIncludeConstructor?: typeof TableHeaderItemInclude
      TableItemIncludeConstructor?: typeof TableItemInclude
      TableRecordLazyConstructor?: typeof TableRecordLazy
    } = {}
  ) {
    const {
      ClientOnlyIncludeConstructor = ClientOnlyInclude,
      TableHeaderItemIncludeConstructor = TableHeaderItemInclude,
      TableItemIncludeConstructor = TableItemInclude,
      TableRecordLazyConstructor = TableRecordLazy
    } = constructors

    this.tableHeaderItem = new TableHeaderItemIncludeConstructor(
      classDesign,
      className,
      props,
      components,
      undefined,
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

    this.clientOnly = new ClientOnlyIncludeConstructor()
    this.lazy = new TableRecordLazyConstructor(
      props,
      element,
      className,
      this.clientOnly
    )
  }

  /**
   * Returns the key identifier of the element.
   *
   * Возвращает ключ идентификатора элемента.
   */
  get key(): string {
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

    return ''
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

    if (this.props.isHeader) {
      return this.tableHeaderItem.renderItem(key, index, this.props.item)
    }

    return this.tableItem.renderItem(key, index, this.props.item)
  }
}
