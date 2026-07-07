import { computed, type Ref, type ToRefs } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { SkeletonInclude } from '../Skeleton'
import { TooltipInclude } from '../Tooltip'

import type { IconPropsBasic } from '../Icon'
import type { TableItemComponents, TableItemEmits, TableItemSlots } from './types'
import type { TableItemProps } from './props'

/**
 * Class representing a table cell constructor (TableItem).
 * Provides coordination for components such as label, description, tooltip, and skeleton.
 *
 * Класс, представляющий конструктор ячейки таблицы (TableItem).
 * Обеспечивает координацию работы таких компонентов, как метка, описание, всплывающая подсказка и скелетон.
 */
export class TableItem {
  /** Description text manager instance / Экземпляр менеджера текста описания */
  readonly description: DescriptionInclude
  /** Label text manager instance / Экземпляр менеджера текста метки */
  readonly label: LabelInclude
  /** Skeleton loader manager instance / Экземпляр менеджера скелетонов */
  readonly skeleton: SkeletonInclude
  /** Tooltip component manager instance / Экземпляр менеджера всплывающей подсказки */
  readonly tooltip: TooltipInclude

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
   * @param constructors.DescriptionConstructor class for creating a description / класс для создания описания
   * @param constructors.LabelConstructor class for creating a label / класс для создания метки
   * @param constructors.SkeletonConstructor class for creating a skeleton / класс для создания скелета
   * @param constructors.TooltipIncludeConstructor class for creating a tooltip / класс для создания подсказки
   */
  constructor(
    protected readonly props: TableItemProps,
    protected readonly refs: ToRefs<TableItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TableItemComponents, TableItemProps>,
    protected readonly slots?: TableItemSlots,
    protected readonly emits?: ConstrEmit<TableItemEmits>,
    constructors: {
      DescriptionConstructor?: typeof DescriptionInclude
      LabelConstructor?: typeof LabelInclude
      SkeletonConstructor?: typeof SkeletonInclude
      TooltipIncludeConstructor?: typeof TooltipInclude
    } = {}
  ) {
    const {
      DescriptionConstructor = DescriptionInclude,
      LabelConstructor = LabelInclude,
      SkeletonConstructor = SkeletonInclude,
      TooltipIncludeConstructor = TooltipInclude
    } = constructors

    this.skeleton = new SkeletonConstructor(props, classDesign, ['classTextVariant'])
    this.description = new DescriptionConstructor(props, className, slots, this.skeleton)
    this.label = new LabelConstructor(
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      undefined,
      this.skeleton
    )
    this.tooltip = new TooltipIncludeConstructor(
      this.className,
      this.props,
      this.components
    )
  }

  /**
   * Checks whether the tooltip is active.
   *
   * Проверяет, активна ли подсказка.
   */
  get isTooltip(): boolean {
    return Boolean((this.props.tooltipLabel || this.props.tooltipDescription || this.slots?.tooltip) && this.components?.is('tooltip'))
  }

  /**
   * Returns data for the tooltip control button.
   *
   * Возвращает данные для кнопки управления подсказкой.
   */
  readonly tooltipControlBind = computed<ConstrBind<IconPropsBasic>>(() => {
    return {
      'class': `${this.className}__tooltip`,
      'icon': this.props.iconTooltip || 'help-circle',
      'data-event-type': 'tooltip'
    }
  })

  /**
   * Computed HTML attributes and bindings for the main element.
   *
   * Вычисляемые HTML-атрибуты и привязки для главного элемента.
   */
  get binds() {
    return {
      'data-divider': this.props.disabled ? undefined : 'active'
    }
  }
}
