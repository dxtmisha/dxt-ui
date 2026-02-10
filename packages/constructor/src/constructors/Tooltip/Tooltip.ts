import { computed, onUnmounted, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

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

import type { RoleType } from '../../types/roleTypes'
import type { TooltipControl } from './basicTypes'
import type { TooltipComponents, TooltipEmits, TooltipSlots } from './types'
import type { TooltipProps } from './props'

/**
 * Tooltip
 */
export class Tooltip {
  /** Class manager for tooltip classes/ Менеджер классов для подсказки */
  readonly classes: TooltipClasses
  /** Style manager for tooltip styles/ Менеджер стилей для подсказки */
  readonly style: TooltipStyle
  /** Status manager for tooltip state/ Менеджер статуса для состояния подсказки */
  readonly status: TooltipStatus
  /** Position manager for tooltip placement/ Менеджер позиции для размещения подсказки */
  readonly position: TooltipPosition
  /** Open manager for tooltip visibility/ Менеджер открытия для видимости подсказки */
  readonly open: TooltipOpen
  /** Event manager for tooltip interactions/ Менеджер событий для взаимодействий с подсказкой */
  readonly event: TooltipEvent

  /** Arrow manager/ Менеджер стрелки */
  readonly arrow: ArrowInclude
  /** Label manager/ Менеджер метки */
  readonly label: LabelInclude
  /** Description manager/ Менеджер описания */
  readonly description: DescriptionInclude

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
   * @param constructors object with classes/ объект с классами
   * @param constructors.ArrowIncludeConstructor class for working with arrow/ класс для работы со стрелкой
   * @param constructors.DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
   * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
   * @param constructors.TooltipClassesConstructor class for working with classes/ класс для работы с классами
   * @param constructors.TooltipEventConstructor class for working with events/ класс для работы с событиями
   * @param constructors.TooltipOpenConstructor class for working with open state/ класс для работы с состоянием открытия
   * @param constructors.TooltipPositionConstructor class for working with position/ класс для работы с позицией
   * @param constructors.TooltipStatusConstructor class for working with status/ класс для работы со статусом
   * @param constructors.TooltipStyleConstructor class for working with styles/ класс для работы со стилями
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
    constructors?: {
      ArrowIncludeConstructor?: typeof ArrowInclude
      DescriptionIncludeConstructor?: typeof DescriptionInclude
      LabelIncludeConstructor?: typeof LabelInclude
      TooltipClassesConstructor?: typeof TooltipClasses
      TooltipEventConstructor?: typeof TooltipEvent
      TooltipOpenConstructor?: typeof TooltipOpen
      TooltipPositionConstructor?: typeof TooltipPosition
      TooltipStatusConstructor?: typeof TooltipStatus
      TooltipStyleConstructor?: typeof TooltipStyle
    }
  ) {
    const {
      ArrowIncludeConstructor = ArrowInclude,
      DescriptionIncludeConstructor = DescriptionInclude,
      LabelIncludeConstructor = LabelInclude,
      TooltipClassesConstructor = TooltipClasses,
      TooltipEventConstructor = TooltipEvent,
      TooltipOpenConstructor = TooltipOpen,
      TooltipPositionConstructor = TooltipPosition,
      TooltipStatusConstructor = TooltipStatus,
      TooltipStyleConstructor = TooltipStyle
    } = constructors ?? {}

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
      this.props,
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

    onUnmounted(() => {
      this.open.eventStop()
    })
  }

  /**
   * Computed bindings for the tooltip element/
   * Вычисляемые привязки для элемента подсказки
   */
  readonly binds = computed(() => {
    return {
      id: this.classes.getIdItem(),
      onMouseover: this.event.onMouseoverTooltip,
      onMouseout: this.event.onMouseout,
      onTransitionend: this.event.onTransitionend,
      ...AriaStaticInclude.role(this.role.value),
      ...AriaStaticInclude.labelledby(this.label.id.value),
      ...AriaStaticInclude.describedby(this.description.id.value)
    }
  })

  /**
   * Computed bindings for the control element/
   * Вычисляемые привязки для элемента управления
   */
  readonly bindsControl = computed<TooltipControl['binds']>(() => {
    const data = {
      class: this.classes.getControl(),
      onclick: this.event.onClick,
      onmouseover: this.event.onMouseover,
      onmouseout: this.event.onMouseout
    }

    if (this.props.interactive) {
      return {
        ...data,
        ...AriaStaticInclude.expanded(this.status.open.value),
        ...AriaStaticInclude.controls(this.classes.getIdItem())
      }
    }

    return {
      ...data,
      ...AriaStaticInclude.describedby(this.classes.getIdItem())
    }
  })

  /** Data for the control slot/ Данные для слота управления */
  readonly slotData = computed<TooltipControl>(() => {
    return {
      ...this.bindsControl.value,
      open: this.status.open,
      binds: this.bindsControl.value
    }
  })

  /** Computed role for the tooltip/ Вычисляемая роль для подсказки */
  readonly role = computed<RoleType>(() => {
    if (this.props.interactive) {
      return 'region'
    }

    return 'tooltip'
  })
}
