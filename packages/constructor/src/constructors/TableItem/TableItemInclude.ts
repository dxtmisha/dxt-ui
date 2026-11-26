// ai-none

import { mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrComponent,
  type ConstrItem,
  type DesignComponents,
  type DesignName,
  executeFunctionRef,
  getObjectNoUndefined,
  isArray,
  isFunction,
  isObject,
  isObjectNotArray
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ComponentIncludeExtra, ComponentIncludeProps } from '../../types/componentInclude'

import type { TableItemPropsInclude } from './basicTypes'
import type { TableItemPropsBasic } from './props'
import type { TableItemExpose, TableItemSlots } from './types'

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
   * @param props input properties / входные свойства
   * @param naming component naming helper / помощник именования компонента
   * @param components design components registry / реестр дизайн-компонентов
   * @param extra additional properties or attributes / дополнительные свойства или атрибуты
   * @param slots parent slots / родительские слоты
   * @param index unique index key for rendering / уникальный ключ индекса для рендеринга
   */
  constructor(
    props: ComponentIncludeProps<TableItemPropsInclude>,
    naming: DesignName,
    components?: DesignComponents<ConstrComponent, TableItemPropsInclude>,
    extra?: ComponentIncludeExtra<TableItemPropsBasic>,
    protected readonly slots?: ConstrItem,
    index?: string
  ) {
    super(props, naming, components, extra, index)
  }

  /**
   * Renders the table item with default logic.
   *
   * Рендерит ячейку таблицы со стандартной логикой.
   * @param key unique rendering key / уникальный ключ рендеринга
   * @param index column index / индекс колонки
   * @param value cell value / значение ячейки
   * @param attrs additional cell properties/attributes / дополнительные свойства/атрибуты ячейки
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  renderDefault(
    key: string,
    index: string,
    value: unknown,
    attrs?: ComponentIncludeExtra<TableItemPropsBasic>
  ): VNode | undefined {
    const extraAttrs = executeFunctionRef(attrs)

    return this.components?.renderOne(
      this.name,
      mergeProps(
        this.getBinds(index),
        this.getCellAttrs(value) ?? { label: value },
        extraAttrs ?? {}
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
   * @param attrs additional cell properties/attributes / дополнительные свойства/атрибуты ячейки
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  readonly renderItem = (
    key: string,
    index: string,
    row: unknown,
    attrs?: ComponentIncludeExtra<TableItemPropsBasic>
  ): VNode | undefined => {
    if (this.components) {
      const value = isObject(row) && Object.hasOwn(row, index)
        ? (row as Record<string, unknown>)[index]
        : undefined

      return this.renderSlot(key, index, row, value, attrs)
        || this.renderDefault(key, index, value, attrs)
    }

    return undefined
  }

  /**
   * Renders the table item using a slot.
   *
   * Рендерит ячейку таблицы с использованием слота.
   * @param key unique rendering key / уникальный ключ рендеринга
   * @param index column index / индекс колонки
   * @param row row data object / объект данных строки
   * @param value cell value / значение ячейки
   * @param attrs additional cell properties/attributes / дополнительные свойства/атрибуты ячейки
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  renderSlot(
    key: string,
    index: string,
    row: unknown,
    value: unknown,
    attrs?: ComponentIncludeExtra<TableItemPropsBasic>
  ): VNode | undefined {
    const slotsName = this.getSlotsName(index)
    const slot = this.slots?.[slotsName]

    if (isFunction(slot)) {
      const extraAttrs = executeFunctionRef(attrs)

      return this.components?.renderOne(
        this.name,
        mergeProps(
          this.getBinds(index),
          this.getCellAttrs(value) ?? {},
          extraAttrs ?? {}
        ),
        {
          context: () => slot({
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
   * Returns binding properties for the table item.
   *
   * Возвращает свойства привязки для ячейки таблицы.
   * @param index column index / индекс колонки
   * @returns component bindings / привязки компонента
   */
  protected getBinds(index: string): ConstrBind {
    const props = this.getProps()
    const columnAttrs = props.tableItemColumnAttrs && Object.hasOwn(props.tableItemColumnAttrs, index)
      ? props.tableItemColumnAttrs[index]
      : undefined

    return mergeProps(
      this.getAttrs(),
      columnAttrs ?? {},
      getObjectNoUndefined({
        selected: props.selected,
        disabled: props.disabled,
        stickyTop: props.stickyTop,
        stickyLeft: isArray(props.stickyLeft) ? props.stickyLeft.includes(index) : undefined,
        isSkeleton: props.isSkeleton,
        index
      })
    )
  }

  /**
   * Resolves the cell attributes from the given value.
   *
   * Разрешает атрибуты ячейки из переданного значения.
   * @param value cell value / значение ячейки
   * @returns object containing cell attributes or undefined / объект, содержащий атрибуты ячейки, или undefined
   */
  protected getCellAttrs(value: unknown): ConstrBind | undefined {
    if (value === '*none') {
      return {
        class: this.naming.getStatusClass('none')
      }
    }

    return isObjectNotArray(value) ? value as ConstrBind : undefined
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
   * Returns the class name for the table item component.
   *
   * Возвращает имя класса для компонента ячейки таблицы.
   * @returns class name / имя класса
   */
  protected getItemClassName(): string {
    return `${this.naming.getDesign()}-${this.name}`
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
      && !isFunction(this.slots[index])
      && isFunction(this.slots.default)
    ) {
      return 'default'
    }

    return index
  }
}
