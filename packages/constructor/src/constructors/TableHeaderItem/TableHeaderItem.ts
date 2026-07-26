import type { Ref, ToRefs } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { ChipInclude } from '../Chip'
import { SkeletonInclude } from '../Skeleton'
import { TableItem } from '../TableItem'
import { TooltipInclude } from '../Tooltip'
import { TableHeaderItemSort } from './TableHeaderItemSort'

import type { IconPropsBasic } from '../Icon'
import type { TableHeaderItemComponents, TableHeaderItemEmits, TableHeaderItemSlots } from './types'
import type { TableHeaderItemProps } from './props'

/**
 * Class representing a table header cell constructor (TableHeaderItem).
 * Provides coordination for components such as label, description, tooltip, skeleton, and sort.
 *
 * Класс, представляющий конструктор ячейки шапки таблицы (TableHeaderItem).
 * Обеспечивает координацию работы таких компонентов, как метка, описание, всплывающая подсказка, скелетон и сортировка.
 */
export class TableHeaderItem extends TableItem {
  /** Sort manager instance / Экземпляр менеджера сортировки */
  readonly sort: TableHeaderItemSort

  /** Chip component manager instance for sorting / Экземпляр менеджера компонента чипа для сортировки */
  readonly chip: ChipInclude

  /** Tooltip component manager instance / Экземпляр менеджера компонента всплывающей подсказки */
  readonly tooltip: TooltipInclude

  /**
   * Constructor
   * @param props input parameters / входные параметры
   * @param refs input parameters in the form of reactive elements / входные параметры в виде реактивных элементов
   * @param element element / элемент
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors object with classes / объект с классами
   * @param constructors.ChipIncludeConstructor class for creating a chip component / класс для создания компонента чипа
   * @param constructors.DescriptionIncludeConstructor class for creating a description component / класс для создания компонента описания
   * @param constructors.LabelIncludeConstructor class for creating a label component / класс для создания компонента метки
   * @param constructors.SkeletonIncludeConstructor class for creating a skeleton component / класс для создания компонента скелетона
   * @param constructors.TableHeaderItemSortConstructor class for creating sort logic / класс для создания логики сортировки
   * @param constructors.TooltipIncludeConstructor class for creating a tooltip component / класс для создания компонента подсказки
   */
  constructor(
    protected readonly props: TableHeaderItemProps,
    protected readonly refs: ToRefs<TableHeaderItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TableHeaderItemComponents, TableHeaderItemProps>,
    protected readonly slots?: TableHeaderItemSlots,
    protected readonly emits?: ConstrEmit<TableHeaderItemEmits>,
    constructors: {
      ChipIncludeConstructor?: typeof ChipInclude
      DescriptionIncludeConstructor?: typeof DescriptionInclude
      LabelIncludeConstructor?: typeof LabelInclude
      SkeletonIncludeConstructor?: typeof SkeletonInclude
      TableHeaderItemSortConstructor?: typeof TableHeaderItemSort
      TooltipIncludeConstructor?: typeof TooltipInclude
    } = {}
  ) {
    const {
      ChipIncludeConstructor = ChipInclude,
      DescriptionIncludeConstructor,
      LabelIncludeConstructor,
      SkeletonIncludeConstructor,
      TableHeaderItemSortConstructor = TableHeaderItemSort,
      TooltipIncludeConstructor = TooltipInclude
    } = constructors

    super(
      props,
      refs,
      element,
      classDesign,
      className,
      components as any,
      slots as any,
      emits as any,
      {
        DescriptionConstructor: DescriptionIncludeConstructor,
        LabelConstructor: LabelIncludeConstructor,
        SkeletonConstructor: SkeletonIncludeConstructor
      }
    )

    this.sort = new TableHeaderItemSortConstructor(props, emits)

    this.chip = new ChipIncludeConstructor(
      className,
      props,
      components,
      this.sort.chipExtra
    )

    this.tooltip = new TooltipIncludeConstructor(className, props, components)
  }

  /**
   * Checks whether the tooltip is active.
   *
   * Проверяет, активна ли подсказка.
   */
  get isTooltip(): boolean {
    return Boolean(
      this.components?.is('tooltip')
      && (this.props.tooltipLabel || this.props.tooltipDescription || this.slots?.tooltip)
    )
  }

  /**
   * Returns data for the tooltip control button.
   *
   * Возвращает данные для кнопки управления подсказкой.
   */
  get tooltipControlBind(): ConstrBind<IconPropsBasic> {
    return {
      'class': `${this.className}__tooltip`,
      'icon': this.props.iconTooltip || 'help-circle',
      'data-event-type': 'tooltip'
    }
  }
}
