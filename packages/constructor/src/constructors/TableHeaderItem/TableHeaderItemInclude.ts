import { type VNode } from 'vue'
import {
  isObjectNotArray,
  toBinds
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { TableHeaderItemPropsInclude } from './basicTypes'
import type { TableHeaderItemExpose, TableHeaderItemSlots } from './types'
import type { TableHeaderItemPropsBasic } from './props'

/**
 * TableHeaderItemInclude class provides functionality for rendering table header cell items
 * within other components. It manages cell-level configuration and slot resolving.
 *
 * // @note
 * When extending this class:
 * - Place properties and event listeners that are static or change RARELY during the component's
 *   lifetime (such as style configurations, constant bindings, or callbacks) inside `toBinds()`.
 * - Merge properties that change FREQUENTLY/CONSTANTLY during runtime (such as active state,
 *   values, or open states) inside `getAttrs()` to ensure correct and optimal reactive updates.
 *
 *  Класс TableHeaderItemInclude предоставляет функциональность для рендеринга элементов ячеек шапки таблицы
 * внутри других компонентов. Управляет конфигурацией на уровне ячеек и разрешением слотов.
 */
export class TableHeaderItemInclude extends ComponentIncludeAbstract<
  TableHeaderItemPropsInclude,
  TableHeaderItemPropsBasic,
  TableHeaderItemExpose,
  TableHeaderItemSlots
> {
  /** Component sub-name / Дополнительное имя компонента */
  protected readonly name = 'tableHeaderItem'
  /** Property name for attributes / Имя свойства для атрибутов */
  protected readonly propsAttrsName = 'tableHeaderItemAttrs'

  /**
   * Helper method to extract the design system prefix (e.g. 'd1', 'c2') from the parent className.
   *
   * Вспомогательный метод для извлечения префикса дизайн-системы (например, 'd1', 'c2') из родительского имени класса.
   * @returns design system prefix / префикс дизайн-системы
   */
  getDesignPrefix(): string {
    return this.className.split('-')?.[0] || 'd1'
  }

  /**
   * Renders the TableHeaderItem component for a specific column cell.
   *
   * Рендерит компонент TableHeaderItem для ячейки определенной колонки.
   * @param key unique rendering key / уникальный ключ рендеринга
   * @param index column/field index name / имя индекса колонки/поля
   * @param row row data object / объект данных строки
   * @param header whether it is a header cell / является ли ячейка заголовком шапки
   * @param headerLabel custom label for the header / пользовательский заголовок для шапки
   * @param slots parent slots containing cell-level slots / родительские слоты, содержащие слоты уровня ячеек
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  readonly renderItem = (
    key: string,
    index: string,
    row: any,
    header?: boolean,
    headerLabel?: string,
    slots?: Record<string, any>
  ): VNode | undefined => {
    if (!this.components) {
      return undefined
    }

    const value: any = row?.[index]
    let slotsName: string = header ? `header-${index}` : String(index)

    if (
      slots
      && !header
      && !(slotsName in slots)
      && 'default' in slots
    ) {
      slotsName = 'default'
    }

    const itemProps = this.getProps()
    const prefix = this.getDesignPrefix()

    if (
      slots
      && slotsName in slots
    ) {
      return this.components.renderOne(
        this.name,
        toBinds(
          {
            headerLabel,
            'vertical': itemProps.vertical,
            'data-key': key,
            'data-index': index
          },
          itemProps.tableHeaderItemAttrs,
          itemProps.tableHeaderItemColumnAttrs?.[index]
        ),
        {
          context: () => slots[slotsName]?.({
            item: row,
            index,
            value,
            slotsName,
            classes: {
              label: `${prefix}-tableHeaderItem__label`,
              description: `${prefix}-tableHeaderItem__description`
            }
          })
        },
        key
      )
    }

    const cellAttrs = isObjectNotArray(value) ? value : { label: value }

    return this.components.renderOne(
      this.name,
      toBinds(
        {
          headerLabel,
          'vertical': itemProps.vertical,
          header,
          'data-key': key,
          'data-index': index
        },
        itemProps.tableHeaderItemAttrs,
        itemProps.tableHeaderItemColumnAttrs?.[index],
        cellAttrs
      ),
      undefined,
      key
    )
  }
}
