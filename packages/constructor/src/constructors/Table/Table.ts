import { type Ref, type ToRefs, computed } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  forEach,
  getLast,
  isArray,
  isFilled
} from '@dxtmisha/functional'

import { TableRecordInclude } from '../TableRecord'

import type { TableComponents, TableEmits, TableSlots } from './types'
import type { TableProps } from './props'

/**
 * Class representing a table constructor (Table).
 * Coordinates table column indices, rendering of header/item rows, and scroll synchronization.
 *
 * Класс, представляющий конструктор таблицы (Table).
 * Координирует индексы колонок таблицы, рендеринг строк шапки/элементов и синхронизацию прокрутки.
 */
export class Table {
  /** Table record include manager instance / Экземпляр включения записей таблицы */
  readonly tableRecord: TableRecordInclude

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
   * @param constructors.TableRecordIncludeConstructor class for creating a table record include / класс для создания включения записи таблицы
   */
  constructor(
    protected readonly props: TableProps,
    protected readonly refs: ToRefs<TableProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TableComponents, TableProps>,
    protected readonly slots?: TableSlots,
    protected readonly emits?: ConstrEmit<TableEmits>,
    constructors: {
      TableRecordIncludeConstructor?: typeof TableRecordInclude
    } = {}
  ) {
    const {
      TableRecordIncludeConstructor = TableRecordInclude
    } = constructors

    this.tableRecord = new TableRecordIncludeConstructor(
      classDesign,
      className,
      props,
      components,
      undefined,
      slots
    )
  }

  /**
   * Returns a list of available columns. /
   * Возвращает список доступных колонок.
   */
  get columns(): string[] {
    if (this.props.columns) {
      return this.props.columns
    }

    if (isFilled(this.props.header)) {
      if (isArray(this.props.header)) {
        const last = getLast(this.props.header)

        if (last) {
          return Object.keys(last)
        }
      } else {
        return Object.keys(this.props.header)
      }
    }

    return []
  }

  /**
   * Returns a normalized record of the table header. /
   * Возвращает нормализованную запись заголовков таблицы.
   */
  readonly headerData = computed<Record<string, any> | undefined>(() => {
    if (this.props.header) {
      const data: Record<string, any> = {}

      forEach(this.props.header, (item, index) => {
        data[index] = item
      })

      return data
    }

    return undefined
  })

  /**
   * Returns the key identifier data of the record. /
   * Возвращает данные идентификатора ключа записи.
   * @param item record data / данные записи
   * @param key index in the array / номер в массиве
   * @returns unique key string / строка уникального ключа
   */
  readonly getKeyItem = (
    item: TableProps['tableItemAttrs'],
    key: number
  ): string => {
    return (this.props.keyValue && item?.[this.props.keyValue])
      ?? item?.index
      ?? item?.value
      ?? key.toString()
  }
}
