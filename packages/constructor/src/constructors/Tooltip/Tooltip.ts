import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { TeleportInclude } from '../../classes/TeleportInclude'

import { ArrowInclude } from '../Arrow'

import { TooltipClassesData } from './TooltipClassesData'
import { TooltipEvent } from './TooltipEvent'
import { TooltipOpen } from './TooltipOpen'
import { TooltipPosition } from './TooltipPosition'
import { TooltipStatus } from './TooltipStatus'
import { TooltipStyle } from './TooltipStyle'

import type { AriaList } from '../../types/ariaTypes'
import type { RoleType } from '../../types/roleTypes'
import type { TooltipControl, TooltipControlBinds } from './basicTypes'
import type { TooltipProps } from './props'
import type { TooltipComponents, TooltipEmits, TooltipSlots } from './types'

/** Tooltip dependency constructors type / Тип конструкторов зависимостей Tooltip */
export type TooltipConstructors = {
  /** Arrow manager constructor / Конструктор менеджера стрелки */
  arrow: typeof ArrowInclude
  /** Classes data manager constructor / Конструктор менеджера имен классов */
  classesData: typeof TooltipClassesData
  /** Description manager constructor / Конструктор менеджера описания */
  description: typeof DescriptionInclude
  /** Event manager constructor / Конструктор менеджера событий */
  event: typeof TooltipEvent
  /** Label manager constructor / Конструктор менеджера метки */
  label: typeof LabelInclude
  /** Open state manager constructor / Конструктор менеджера состояния открытия */
  open: typeof TooltipOpen
  /** Position manager constructor / Конструктор менеджера позиции */
  position: typeof TooltipPosition
  /** Status manager constructor / Конструктор менеджера статусов */
  status: typeof TooltipStatus
  /** Style manager constructor / Конструктор менеджера стилей */
  style: typeof TooltipStyle
  /** Teleport manager constructor / Конструктор менеджера телепорта */
  teleport: typeof TeleportInclude
}

/**
 * Tooltip controller class managing classes, styles, states, position, teleport, and elements.
 *
 * Класс контроллера Tooltip, управляющий классами, стилями, состояниями, позицией, телепортом и элементами.
 */
export class Tooltip extends DesignLogicAbstract<
  HTMLDivElement,
  TooltipComponents,
  TooltipEmits,
  TooltipSlots,
  TooltipProps,
  TooltipConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<TooltipConstructors> = {
    arrow: {
      item: ArrowInclude,
      canCreate: () => Boolean(this.props.arrowShow) && this.i('status').isArrow(),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        undefined,
        undefined,
        this.i('classesData').getSelectorControl()
      ]
    },
    classesData: {
      item: TooltipClassesData,
      parameters: () => [this.naming]
    },
    description: {
      item: DescriptionInclude,
      canCreate: () => DescriptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots
      ]
    },
    event: {
      item: TooltipEvent,
      parameters: () => [
        this.props,
        () => this.i('classesData'),
        () => this.i('open'),
        () => this.i('status'),
        () => this.i('style')
      ]
    },
    label: {
      item: LabelInclude,
      canCreate: () => LabelInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots
      ]
    },
    open: {
      item: TooltipOpen,
      conditions: () => TooltipOpen.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('position'),
        () => this.i('status'),
        () => this.i('style'),
        this.emits
      ]
    },
    position: {
      item: TooltipPosition,
      parameters: () => [
        this.props,
        this.element,
        () => this.i('classesData'),
        () => this.i('style')
      ]
    },
    status: {
      item: TooltipStatus,
      parameters: () => [
        this.props,
        this.slots
      ]
    },
    style: {
      item: TooltipStyle,
      parameters: () => [
        this.element,
        this.naming
      ]
    },
    teleport: {
      item: TeleportInclude
    }
  }

  /**
   * ARIA attributes for the tooltip element.
   *
   * ARIA-атрибуты для элемента подсказки.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role(this.role),
      ...AriaStaticInclude.labelledby(this.callInstance('label', item => item.is ? item.id : undefined)),
      ...AriaStaticInclude.describedby(this.callInstance('description', item => item.is ? item.id : undefined))
    }
  }

  /**
   * Computed bindings for the tooltip element.
   *
   * Вычисляемые привязки для элемента подсказки.
   * @returns bindings object / объект привязок
   */
  get binds(): ConstrBind {
    const event = this.i('event')

    return {
      id: this.i('classesData').getIdItem(),
      onMouseover: event.onMouseoverTooltip,
      onMouseout: event.onMouseout,
      onTransitionend: event.onTransitionend,
      ...this.aria
    }
  }

  /**
   * Computed bindings for the control element.
   *
   * Вычисляемые привязки для элемента управления.
   * @returns binds control object / объект привязок управления
   */
  get bindsControl(): TooltipControlBinds {
    const classesData = this.i('classesData')
    const event = this.i('event')
    const data = {
      class: classesData.getControl(),
      onClick: event.onClick,
      onMouseover: event.onMouseover,
      onMouseout: event.onMouseout
    }

    if (this.props.interactive) {
      return {
        ...data,
        ...AriaStaticInclude.expanded(this.i('status').open.value),
        ...AriaStaticInclude.controls(classesData.getIdItem())
      }
    }

    return {
      ...data,
      ...AriaStaticInclude.describedby(classesData.getIdItem())
    }
  }

  /**
   * Computed role for the tooltip.
   *
   * Вычисляемая роль для подсказки.
   * @returns ARIA role / роль ARIA
   */
  get role(): RoleType {
    if (this.props.interactive) {
      return 'region'
    }

    return 'tooltip'
  }

  /**
   * Data for the control slot.
   *
   * Данные для слота управления.
   * @returns control slot data / данные слота управления
   */
  get slotData(): TooltipControl {
    const binds = this.bindsControl

    return {
      ...binds,
      open: this.i('status').open,
      binds
    }
  }

  /**
   * Checks whether the arrow should be displayed.
   *
   * Проверяет, должна ли отображаться стрелка.
   * @returns true if arrow should be displayed / true, если стрелка должна отображаться
   */
  isArrow(): boolean {
    return Boolean(this.props.arrowShow) && this.i('status').isArrow()
  }

  /**
   * Checks whether the tooltip element should be rendered.
   *
   * Проверяет, должен ли рендериться элемент тултипа.
   * @returns true if tooltip should be rendered / true, если тултип должен рендериться
   */
  isShow(): boolean {
    return this.i('status').isShow()
  }
}
