import { onUnmounted, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'

import { ArrowInclude } from '../Arrow'

import { TooltipClasses } from './TooltipClasses'
import { TooltipStyle } from './TooltipStyle'
import { TooltipStatus } from './TooltipStatus'
import { TooltipPosition } from './TooltipPosition'
import { TooltipOpen } from './TooltipOpen'
import { TooltipEvent } from './TooltipEvent'

import type { TooltipControl } from './basicTypes'
import type { TooltipComponents, TooltipEmits, TooltipSlots } from './types'
import type { TooltipProps } from './props'

/**
 * Tooltip
 */
export class Tooltip {
  readonly classes: TooltipClasses
  readonly style: TooltipStyle
  readonly status: TooltipStatus
  readonly position: TooltipPosition
  readonly open: TooltipOpen
  readonly event: TooltipEvent

  readonly arrow: ArrowInclude
  readonly label: LabelInclude
  readonly description: DescriptionInclude

  /** Data for the control slot/ Данные для слота управления */
  readonly slotData: TooltipControl

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param TooltipClassesConstructor class for working with classes/ класс для работы с классами
   * @param TooltipStyleConstructor class for working with styles/ класс для работы со стилями
   * @param TooltipStatusConstructor class for working with status/ класс для работы со статусом
   * @param TooltipPositionConstructor class for working with position/ класс для работы с позицией
   * @param TooltipOpenConstructor class for working with open state/ класс для работы с состоянием открытия
   * @param TooltipEventConstructor class for working with events/ класс для работы с событиями
   * @param ArrowIncludeConstructor class for working with arrow/ класс для работы со стрелкой
   * @param LabelIncludeConstructor class for working with label/ класс для работы с меткой
   * @param DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
   */
  constructor(
    protected readonly props: TooltipProps,
    protected readonly refs: ToRefs<TooltipProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TooltipComponents, TooltipProps>,
    protected readonly slots?: TooltipSlots,
    protected readonly emits?: ConstrEmit<TooltipEmits>,
    protected readonly TooltipClassesConstructor: typeof TooltipClasses = TooltipClasses,
    protected readonly TooltipStyleConstructor: typeof TooltipStyle = TooltipStyle,
    protected readonly TooltipStatusConstructor: typeof TooltipStatus = TooltipStatus,
    protected readonly TooltipPositionConstructor: typeof TooltipPosition = TooltipPosition,
    protected readonly TooltipOpenConstructor: typeof TooltipOpen = TooltipOpen,
    protected readonly TooltipEventConstructor: typeof TooltipEvent = TooltipEvent,
    protected readonly ArrowIncludeConstructor: typeof ArrowInclude = ArrowInclude,
    protected readonly LabelIncludeConstructor: typeof LabelInclude = LabelInclude,
    protected readonly DescriptionIncludeConstructor: typeof DescriptionInclude = DescriptionInclude
  ) {
    this.classes = new TooltipClassesConstructor(this.className)
    this.style = new TooltipStyleConstructor(this.element, this.className)
    this.status = new TooltipStatusConstructor(this.props, this.slots)
    this.position = new TooltipPositionConstructor(
      this.props,
      this.element,
      this.classes,
      this.style
    )
    this.open = new TooltipOpenConstructor(
      this.props,
      this.refs,
      this.style,
      this.status,
      this.position
    )
    this.event = new TooltipEventConstructor(
      this.classes,
      this.style,
      this.status,
      this.open
    )

    this.arrow = new ArrowIncludeConstructor(
      this.props,
      this.className,
      this.components,
      this.classes.getSelectorControl()
    )

    this.label = new LabelIncludeConstructor(
      this.props,
      this.className,
      undefined,
      this.slots
    )
    this.description = new DescriptionIncludeConstructor(
      this.props,
      this.className,
      this.slots
    )

    const binds = {
      class: this.classes.getControl(),
      onclick: this.event.onClick,
      onmouseover: this.event.onMouseover,
      onmouseout: this.event.onMouseout,
      ...AriaStaticInclude.describedby(this.classes.getIdItem())
    }

    this.slotData = {
      ...binds,
      open: this.status.open,
      binds
    }

    onUnmounted(() => {
      this.open.eventStop()
    })
  }
}
