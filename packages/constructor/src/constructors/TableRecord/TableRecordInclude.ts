import { type VNode } from 'vue'
import {
  type ConstrBind,
  type DesignComponents,
  isSelected,
  toBinds
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ComponentIncludeExtra, ComponentIncludeProps } from '../../types/componentInclude'

import type { TableRecordPropsInclude } from './basicTypes'
import type { TableRecordExpose, TableRecordSlots } from './types'
import type { TableRecordPropsBasic } from './props'

/**
 * TableRecordInclude class provides functionality for rendering table record items
 * within other components. It manages row-level configuration and component rendering.
 *
 * // @note
 * When extending this class:
 * - Place properties and event listeners that are static or change RARELY during the component's
 *   lifetime (such as style configurations, constant bindings, or callbacks) inside `toBinds()`.
 * - Merge properties that change FREQUENTLY/CONSTANTLY during runtime (such as active state,
 *   values, or open states) inside `getAttrs()` to ensure correct and optimal reactive updates.
 *
 * Класс TableRecordInclude предоставляет функциональность для рендеринга элементов записей таблицы
 * внутри других компонентов. Управляет конфигурацией на уровне строк и рендерингом компонентов.
 */
export class TableRecordInclude extends ComponentIncludeAbstract<
  TableRecordPropsInclude,
  TableRecordPropsBasic,
  TableRecordExpose,
  TableRecordSlots
> {
  /** Component sub-name / Дополнительное имя компонента */
  protected readonly name: string = 'tableRecord'
  /** Property name for attributes / Имя свойства для атрибутов */
  protected readonly propsAttrsName = 'tableRecordAttrs'

  /**
   * Constructor for TableRecordInclude.
   *
   * Конструктор для TableRecordInclude.
   * @param classDesign design system prefix / префикс дизайн-системы
   * @param className base class name / базовое имя класса
   * @param props input properties / входные свойства
   * @param components design components registry / реестр дизайн-компонентов
   * @param extra additional properties or attributes / дополнительные свойства или атрибуты
   * @param slots parent slots / родительские слоты
   * @param index unique index key for rendering / уникальный ключ индекса для рендеринга
   */
  constructor(
    protected readonly classDesign: string,
    className: string,
    props: ComponentIncludeProps<TableRecordPropsInclude>,
    components?: DesignComponents<any, TableRecordPropsInclude>,
    extra?: ComponentIncludeExtra<TableRecordPropsBasic>,
    protected readonly slots?: Record<string, any>,
    index?: string
  ) {
    super(className, props, components, extra, index)
  }

  /**
   * Renders the table record.
   *
   * Рендерит запись таблицы.
   * @param key unique rendering key / уникальный ключ рендеринга
   * @param columns column list / список колонок
   * @param item row data object / объект данных строки
   * @param header whether it is a header / является ли шапкой
   * @param attrs additional properties/attributes for this row / дополнительные свойства/атрибуты для этой строки
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  readonly renderRecord = (
    key: string,
    columns: string[],
    item: any,
    header?: boolean,
    attrs?: ConstrBind<TableRecordPropsBasic>
  ): VNode | undefined => {
    if (this.components) {
      const props = this.getProps()

      return this.components.renderOne(
        this.name,
        toBinds(
          {
            tableItemAttrs: props.tableItemAttrs,
            tableItemColumnAttrs: props.tableItemColumnAttrs
          },
          props.tableRecordAttrs,
          props.tableRowAttrs?.[key],
          attrs,
          {
            key,
            columns,
            item,
            selected: isSelected(key, props.selected),
            header,
            index: key
          }
        ),
        this.slots,
        key
      )
    }

    return undefined
  }
}
