import {
  type ConstrBind,
  type ConstrConstructors,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { SkeletonInclude } from '../Skeleton'

import type { AriaList } from '../../types/ariaTypes'
import type { TableItemProps } from './props'
import type { TableItemComponents, TableItemEmits, TableItemSlots } from './types'

/** TableItem dependency constructors type / Тип конструкторов зависимостей TableItem */
export type TableItemConstructors = {
  /** Description constructor / Конструктор описания */
  description: typeof DescriptionInclude
  /** Label constructor / Конструктор метки */
  label: typeof LabelInclude
  /** Skeleton constructor / Конструктор скелетона */
  skeleton: typeof SkeletonInclude
}

/**
 * Class representing a table cell constructor (TableItem).
 * Provides lazy coordination for label, description, skeleton, HTML bindings, and ARIA attributes.
 *
 * Класс, представляющий конструктор ячейки таблицы (TableItem).
 * Обеспечивает ленивую координацию метки, описания, скелетона, HTML-привязок и ARIA-атрибутов.
 */
export class TableItem<
  E extends HTMLElement = HTMLElement,
  COMP extends TableItemComponents = TableItemComponents,
  EMITS extends TableItemEmits = TableItemEmits,
  SLOTS extends TableItemSlots = TableItemSlots,
  P extends TableItemProps = TableItemProps,
  CONSTRUCTORS extends TableItemConstructors & ConstrConstructors<CONSTRUCTORS> = TableItemConstructors
> extends DesignLogicAbstract<
    E,
    COMP,
    EMITS,
    SLOTS,
    P,
    CONSTRUCTORS
  > {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<CONSTRUCTORS> = {
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
    }
  } as unknown as ConstrItems<CONSTRUCTORS>

  /**
   * Computed ARIA attributes for the table cell.
   *
   * Вычисляемые ARIA-атрибуты для ячейки таблицы.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.selected(this.props.selected || undefined),
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled))
    }
  }

  /**
   * Computed HTML attributes and bindings for the main element.
   *
   * Вычисляемые HTML-атрибуты и привязки для главного элемента.
   * @returns HTML attributes and bindings object / объект HTML-атрибутов и привязок
   */
  get binds(): ConstrBind {
    return {
      'colspan': this.props.colspan,
      'rowspan': this.props.rowspan,
      'data-index': this.props.index,
      ...this.aria
    }
  }

  /**
   * Returns the HTML tag for the table cell.
   *
   * Возвращает HTML-тег для ячейки таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  get tag(): string {
    return this.props.tag || 'td'
  }
}
