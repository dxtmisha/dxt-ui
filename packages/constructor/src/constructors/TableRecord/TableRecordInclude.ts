// ai-none

import { mergeProps, type VNode } from 'vue'
import {
  type ConstrComponent,
  type ConstrItem,
  type DesignComponents,
  type DesignName,
  executeFunctionRef,
  getObjectNoUndefined,
  isArray,
  isObjectNotArray,
  isSelected,
  isString
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ComponentIncludeExtra, ComponentIncludeProps } from '../../types/componentInclude'

import type { TableRecordPropsInclude } from './basicTypes'
import type { TableRecordPropsBasic } from './props'
import type { TableRecordExpose, TableRecordSlots } from './types'

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
   * @param props input properties / входные свойства
   * @param naming component naming helper / помощник именования компонента
   * @param components design components registry / реестр дизайн-компонентов
   * @param extra additional properties or attributes / дополнительные свойства или атрибуты
   * @param slots parent slots / родительские слоты
   * @param index unique index key for rendering / уникальный ключ индекса для рендеринга
   */
  constructor(
    props: ComponentIncludeProps<TableRecordPropsInclude>,
    naming: DesignName,
    components?: DesignComponents<ConstrComponent, TableRecordPropsInclude>,
    extra?: ComponentIncludeExtra<TableRecordPropsBasic>,
    protected readonly slots?: ConstrItem,
    index?: string
  ) {
    super(props, naming, components, extra, index)
  }

  /**
   * Returns the unique key identifier for the table record item.
   * Resolves own scalar fields (`props.keyValue`, `item.index`, `item.value`) before falling back to `key`.
   *
   * Возвращает уникальный строковый ключ-идентификатор для элемента записи таблицы.
   * Разрешает собственные скалярные поля (`props.keyValue`, `item.index`, `item.value`) перед откатом к `key`.
   * @param key fallback index in the array / резервный индекс в массиве
   * @param item record item data / данные элемента записи
   * @returns unique key string / уникальная строка ключа
   */
  getKey(
    key: number | string,
    item?: unknown
  ): string {
    const props = this.getProps()

    if (isObjectNotArray(item)) {
      const record = item as Record<string, unknown>

      if (
        props.keyValue
        && Object.hasOwn(record, props.keyValue)
      ) {
        const customKey = this.resolveKeyValue(record[props.keyValue])

        if (customKey !== undefined) {
          return customKey
        }
      }

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

    return String(key)
  }

  /**
   * Renders the table record.
   *
   * Рендерит запись таблицы.
   * @param key unique rendering key / уникальный ключ рендеринга
   * @param columns column list / список колонок
   * @param item row data object / объект данных строки
   * @param isHeader whether it is a header / является ли шапкой
   * @param attrs additional properties/attributes for this row / дополнительные свойства/атрибуты для этой строки
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  readonly renderRecord = (
    key: string,
    columns: readonly string[],
    item?: unknown,
    isHeader?: boolean,
    attrs?: ComponentIncludeExtra<TableRecordPropsBasic>
  ): VNode | undefined => {
    if (this.components) {
      const props = this.getProps()
      const index = this.getKey(key, item)
      const rowAttrs = props.tableRowAttrs && Object.hasOwn(props.tableRowAttrs, index)
        ? props.tableRowAttrs[index]
        : undefined
      const extraAttrs = executeFunctionRef(attrs)
      const disabled = isObjectNotArray(item)
        && Object.hasOwn(item, 'disabled')
        && item.disabled !== undefined
        ? Boolean(item.disabled)
        : undefined

      return this.components.renderOne(
        this.name,
        mergeProps(
          getObjectNoUndefined({
            tableItemAttrs: props.tableItemAttrs,
            tableItemColumnAttrs: props.tableItemColumnAttrs,
            isSkeleton: props.isSkeleton,
            lazy: props.lazy,
            defaultHeight: props.defaultHeight
          }),
          this.getAttrs(),
          rowAttrs ?? {},
          getObjectNoUndefined({
            selected: props.selected !== undefined ? isSelected(index, props.selected) : undefined,
            disabled,
            item,
            columns,
            isHeader,
            stickyTop: isArray(props.stickyTop) ? props.stickyTop.includes(index) : undefined,
            stickyLeft: props.stickyLeft,
            index
          }),
          extraAttrs ?? {}
        ),
        this.slots,
        index
      )
    }

    return undefined
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
