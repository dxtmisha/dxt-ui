import { computed, inject, type Ref, type ToRefs, type VNode } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  isString
} from '@dxtmisha/functional'

import { SkeletonInclude } from '../Skeleton'
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
  /** Skeleton loader manager instance / Экземпляр менеджера скелетонов */
  readonly skeleton: SkeletonInclude
  /** Shared table headers / Общие заголовки таблицы */
  readonly tableHeader?: Ref<Record<string, string> | undefined>
  /** Table header items include instance / Экземпляр включения ячеек шапки таблицы */
  readonly tableHeaderItem: TableHeaderItemInclude
  /** Table items include instance / Экземпляр включения ячеек таблицы */
  readonly tableItem: TableItemInclude

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
   * @param constructors.SkeletonConstructor class for creating a skeleton / класс для создания скелета
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
      SkeletonConstructor?: typeof SkeletonInclude
      TableHeaderItemIncludeConstructor?: typeof TableHeaderItemInclude
      TableItemIncludeConstructor?: typeof TableItemInclude
    } = {}
  ) {
    const {
      SkeletonConstructor = SkeletonInclude,
      TableHeaderItemIncludeConstructor = TableHeaderItemInclude,
      TableItemIncludeConstructor = TableItemInclude
    } = constructors

    this.skeleton = new SkeletonConstructor(props, classDesign)
    this.tableHeader = inject('tableHeader')

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
  }

  /**
   * Returns the key identifier of the element.
   *
   * Возвращает ключ идентификатора элемента.
   */
  readonly key = computed<string>(() => {
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
  })

  /**
   * Renders the column cell depending on whether it is a header row or data row.
   *
   * Рендерит ячейку колонки в зависимости от того, является ли строка шапкой или данными.
   * @param index column index / индекс колонки
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  renderColumn(index: string): VNode | undefined {
    const key = `${this.key.value}__${index}`

    if (this.props.header) {
      const label = this.tableHeader?.value?.[index]
      return this.tableHeaderItem.renderDefault(key, index, label)
    }

    return this.tableItem.renderItem(key, index, this.props.item)
  }
}
