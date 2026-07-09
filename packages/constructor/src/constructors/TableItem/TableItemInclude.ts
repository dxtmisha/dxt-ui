import { type VNode } from 'vue'
import {
  type DesignComponents,
  isObjectNotArray,
  toBinds
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ComponentIncludeExtra, ComponentIncludeProps } from '../../types/componentInclude'

import type { TableItemPropsInclude } from './basicTypes'
import type { TableItemExpose, TableItemSlots } from './types'
import type { TableItemPropsBasic } from './props'

/**
 * TableItemInclude class provides functionality for rendering table cell items
 * within other components. It manages cell-level configuration and slot resolving.
 *
 * // @note
 * When extending this class:
 * - Place properties and event listeners that are static or change RARELY during the component's
 *   lifetime (such as style configurations, constant bindings, or callbacks) inside `toBinds()`.
 * - Merge properties that change FREQUENTLY/CONSTANTLY during runtime (such as active state,
 *   values, or open states) inside `getAttrs()` to ensure correct and optimal reactive updates.
 *
 * Класс TableItemInclude предоставляет функциональность для рендеринга элементов ячеек таблицы
 * внутри других компонентов. Управляет конфигурацией на уровне ячеек и разрешением слотов.
 */
export class TableItemInclude extends ComponentIncludeAbstract<
  TableItemPropsInclude,
  TableItemPropsBasic,
  TableItemExpose,
  TableItemSlots
> {
  /** Component sub-name / Дополнительное имя компонента */
  protected readonly name: string = 'tableItem'
  /** Property name for attributes / Имя свойства для атрибутов */
  protected readonly propsAttrsName = 'tableItemAttrs'

  /**
   * Constructor for TableItemInclude.
   *
   * Конструктор для TableItemInclude.
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
    props: ComponentIncludeProps<TableItemPropsInclude>,
    components?: DesignComponents<any, TableItemPropsInclude>,
    extra?: ComponentIncludeExtra<TableItemPropsBasic>,
    protected readonly slots?: Record<string, any>,
    index?: string
  ) {
    super(className, props, components, extra, index)
  }

  /**
   * Renders the table item using a slot.
   *
   * Рендерит ячейку таблицы с использованием слота.
   * @param key unique rendering key / уникальный ключ рендеринга
   * @param index column index / индекс колонки
   * @param row row data object / объект данных строки
   * @param value cell value / значение ячейки
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  renderSlot(
    key: string,
    index: string,
    row: any,
    value: any
  ): VNode | undefined {
    const slotsName = this.getSlotsName(index)

    if (
      this.slots
      && slotsName in this.slots
    ) {
      return this.components?.renderOne(
        this.name,
        toBinds(
          this.getBinds(key, index),
          this.getCellAttrs(value)
        ),
        {
          context: () => this.slots?.[slotsName]?.({
            item: row,
            value,
            classes: this.getItemClasses(),
            key,
            index,
            slotsName
          })
        },
        key
      )
    }

    return undefined
  }

  /**
   * Renders the table item with default logic.
   *
   * Рендерит ячейку таблицы со стандартной логикой.
   * @param key unique rendering key / уникальный ключ рендеринга
   * @param index column index / индекс колонки
   * @param value cell value / значение ячейки
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  renderDefault(
    key: string,
    index: string,
    value: any
  ): VNode | undefined {
    return this.components?.renderOne(
      this.name,
      toBinds(
        this.getBinds(key, index),
        this.getCellAttrs(value) ?? { label: value }
      ),
      undefined,
      key
    )
  }

  /**
   * Renders the table item by dynamically choosing slot or default renderer.
   *
   * Рендерит ячейку таблицы, динамически выбирая рендерер слота или стандартный.
   * @param key unique rendering key / уникальный ключ рендеринга
   * @param index column index / индекс колонки
   * @param row row data object / объект данных строки
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  readonly renderItem = (
    key: string,
    index: string,
    row: any
  ): VNode | undefined => {
    if (this.components) {
      const value: any = row?.[index]

      return this.renderSlot(key, index, row, value)
        || this.renderDefault(key, index, value)
    }

    return undefined
  }

  /**
   * Returns the class name for the table item component.
   *
   * Возвращает имя класса для компонента ячейки таблицы.
   * @returns class name / имя класса
   */
  protected getItemClassName(): string {
    return `${this.className}-tableItem`
  }

  /**
   * Returns class names for the table item elements.
   *
   * Возвращает имена классов для элементов ячейки таблицы.
   * @returns object with class names / объект с именами классов
   */
  protected getItemClasses(): Record<string, string> {
    const className = this.getItemClassName()

    return {
      label: `${className}__label`,
      description: `${className}__description`
    }
  }

  /**
   * Returns the slots name based on the column index.
   *
   * Возвращает имя слота на основе индекса колонки.
   * @param index column index / индекс колонки
   * @returns slots name / имя слота
   */
  protected getSlotsName(index: string): string {
    if (
      this.slots
      && !(index in this.slots)
      && 'default' in this.slots
    ) {
      return 'default'
    }

    return index
  }

  /**
   * Resolves the cell attributes from the given value. /
   * Разрешает атрибуты ячейки из переданного значения.
   * @param value cell value / значение ячейки
   * @returns object containing cell attributes or undefined / объект, содержащий атрибуты ячейки, или undefined
   */
  protected getCellAttrs(value: any): Record<string, any> | undefined {
    return isObjectNotArray(value) ? value : undefined
  }

  /**
   * Returns binding properties for the table item.
   *
   * Возвращает свойства привязки для ячейки таблицы.
   * @param key unique rendering key / уникальный ключ рендеринга
   * @param index column index / индекс колонки
   * @returns component bindings / привязки компонента
   */
  protected getBinds(key: string, index: string): Record<string, any> {
    const props = this.getProps()

    return toBinds(
      props.tableItemAttrs,
      props.tableItemColumnAttrs?.[index],
      {
        keyItem: key,
        index,
        selected: props.selected,
        disabled: props.disabled,
        isSkeleton: props.isSkeleton
      }
    )
  }
}
