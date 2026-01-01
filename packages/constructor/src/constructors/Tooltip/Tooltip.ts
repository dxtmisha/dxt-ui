import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxtmisha/functional'

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
   */
  constructor(
    protected readonly props: TooltipProps,
    protected readonly refs: ToRefs<TooltipProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TooltipComponents, TooltipProps>,
    protected readonly slots?: TooltipSlots,
    protected readonly emits?: ConstrEmit<TooltipEmits>
  ) {
    this.classes = new TooltipClasses(this.className)
    this.style = new TooltipStyle(this.element, this.className)
    this.status = new TooltipStatus(this.props, this.slots)
    this.position = new TooltipPosition(
      this.props,
      this.element,
      this.classes,
      this.style
    )
    this.open = new TooltipOpen(
      this.props,
      this.refs,
      this.style,
      this.status,
      this.position
    )
    this.event = new TooltipEvent(
      this.classes,
      this.status,
      this.open
    )

    this.arrow = new ArrowInclude(
      this.props,
      this.className,
      this.components,
      this.classes.getSelectorControl()
    )

    this.label = new LabelInclude(
      this.props,
      this.className,
      undefined,
      this.slots
    )
    this.description = new DescriptionInclude(
      this.props,
      this.className,
      this.slots
    )

    const binds = {
      class: this.classes.getControl(),
      onclick: this.event.onClick,
      onmouseover: this.event.onMouseover,
      onmouseout: this.event.onMouseout
    }

    this.slotData = {
      ...binds,
      open: this.status.open,
      binds
    }
  }
}
