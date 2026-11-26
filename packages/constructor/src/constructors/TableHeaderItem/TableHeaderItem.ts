import { getCurrentInstance, inject, type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  type DesignName,
  type SortDir
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { ChipInclude } from '../Chip'
import { SkeletonInclude } from '../Skeleton'
import { TableItem, type TableItemConstructors } from '../TableItem'
import { TooltipInclude } from '../Tooltip'
import { TableHeaderItemSort } from './TableHeaderItemSort'

import type { AriaList } from '../../types/ariaTypes'
import type { SortColumn } from '../../types/sortTypes'
import type { IconPropsBasic } from '../Icon'
import type { TableHeaderItemProps } from './props'
import type {
  TableHeaderItemComponents,
  TableHeaderItemEmits,
  TableHeaderItemSlots
} from './types'

/** TableHeaderItem dependency constructors type / Тип конструкторов зависимостей TableHeaderItem */
export type TableHeaderItemConstructors = TableItemConstructors & {
  /** Chip include constructor / Конструктор включения чипа */
  chip: typeof ChipInclude
  /** Sort logic constructor / Конструктор логики сортировки */
  sort: typeof TableHeaderItemSort
  /** Tooltip include constructor / Конструктор включения подсказки */
  tooltip: typeof TooltipInclude
}

/**
 * Class representing a table header cell constructor (TableHeaderItem).
 * Inherits table cell orchestration from TableItem and adds lazy coordination for sorting, chip controls, tooltips, and ARIA sort state.
 *
 * Класс, представляющий конструктор ячейки шапки таблицы (TableHeaderItem).
 * Наследует оркестрацию ячейки таблицы от TableItem и добавляет ленивую координацию сортировки, чипа управления, подсказки и ARIA-состояния сортировки.
 */
export class TableHeaderItem extends TableItem<
  HTMLElement,
  TableHeaderItemComponents,
  TableHeaderItemEmits,
  TableHeaderItemSlots,
  TableHeaderItemProps,
  TableHeaderItemConstructors
> {
  /** Injected reactive sort column ref / Инжектированная реактивная ссылка на колонку сортировки */
  protected readonly sortColumn?: Ref<SortColumn | undefined>
  /** Injected reactive sort direction ref / Инжектированная реактивная ссылка на направление сортировки */
  protected readonly sortDir?: Ref<SortDir | undefined>

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<TableHeaderItemConstructors> = {
    chip: {
      item: ChipInclude,
      canCreate: () => TableHeaderItemSort.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.i('sort').chipExtra()
      ]
    },
    description: {
      item: DescriptionInclude,
      canCreate: () => DescriptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots,
        () => this.callInstance('skeleton', item => item)
      ]
    },
    label: {
      item: LabelInclude,
      canCreate: () => LabelInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots,
        undefined,
        undefined,
        undefined,
        () => this.callInstance('skeleton', item => item)
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      canCreate: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        ['classTextVariant']
      ]
    },
    sort: {
      item: TableHeaderItemSort,
      canCreate: () => TableHeaderItemSort.is(this.props),
      parameters: () => [
        this.props,
        this.emits,
        this.sortColumn,
        this.sortDir
      ]
    },
    tooltip: {
      item: TooltipInclude,
      canCreate: () => TooltipInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        this.slots
      ]
    }
  }

  /**
   * Constructor for TableHeaderItem.
   *
   * Конструктор для TableHeaderItem.
   * @param props input parameters / входные параметры
   * @param element element / элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<TableHeaderItemProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<TableHeaderItemComponents, TableHeaderItemProps>,
    slots?: TableHeaderItemSlots,
    emits?: ConstrEmit<TableHeaderItemEmits>,
    constructors?: Partial<TableHeaderItemConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    if (getCurrentInstance()) {
      this.sortColumn = inject('sortColumn', undefined)
      this.sortDir = inject('sortDir', undefined)
    }
  }

  /**
   * Computed ARIA attributes for the table header cell.
   *
   * Вычисляемые ARIA-атрибуты для ячейки шапки таблицы.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  override get aria(): AriaList {
    return {
      ...super.aria,
      ...AriaStaticInclude.sort(this.ariaSort)
    }
  }

  /**
   * Returns the sorting direction for ARIA.
   *
   * Возвращает направление сортировки для ARIA.
   * @returns sorting direction for ARIA or undefined / направление сортировки для ARIA или undefined
   */
  get ariaSort(): AriaList['aria-sort'] | undefined {
    const sortColumn = this.sortColumn?.value ?? this.props.sortColumn

    if (sortColumn !== undefined) {
      const column = String(this.props.index ?? '')

      if (!column || String(sortColumn) !== column) {
        return undefined
      }
    }

    switch (this.sortDir?.value ?? this.props.sortDir) {
      case 'asc':
        return 'ascending'
      case 'desc':
        return 'descending'
    }

    return undefined
  }

  /**
   * Computed HTML attributes and bindings for the main element.
   *
   * Вычисляемые HTML-атрибуты и привязки для главного элемента.
   * @returns HTML attributes and bindings object / объект HTML-атрибутов и привязок
   */
  override get binds(): ConstrBind {
    return {
      ...super.binds,
      scope: this.props.scope
    }
  }

  /**
   * Returns the HTML tag for the table header cell.
   *
   * Возвращает HTML-тег для ячейки шапки таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  override get tag(): string {
    return this.props.tag || 'th'
  }

  /**
   * Returns data for the tooltip control button.
   *
   * Возвращает данные для кнопки управления подсказкой.
   * @returns tooltip control button binding object / объект привязки кнопки управления подсказкой
   */
  get tooltipControlBind(): ConstrBind<IconPropsBasic> {
    return {
      'class': this.naming.getSubClass('tooltip'),
      'icon': this.props.iconTooltip || 'help-circle',
      'data-event-type': 'tooltip'
    }
  }
}
