import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'
import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import type { AriaList } from '../../types/ariaTypes'
import type { ButtonPropsBasic } from './props'
import type { ButtonComponents, ButtonEmits, ButtonSlots } from './types'

/** Button dependency constructors type / Тип конструкторов зависимостей Button */
export type ButtonConstructors = {
  /** Enabled status constructor / Конструктор статуса активности */
  enabled: typeof EnabledInclude
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Icon trailing constructor / Конструктор иконки и завершающей иконки */
  icon: typeof IconTrailingInclude
  /** Label constructor / Конструктор метки */
  label: typeof LabelInclude
  /** Progress constructor / Конструктор индикатора прогресса */
  progress: typeof ProgressInclude
  /** Ripple constructor / Конструктор эффекта волны */
  ripple: typeof RippleInclude
  /** Skeleton constructor / Конструктор скелетона */
  skeleton: typeof SkeletonInclude
}

/**
 * Button class for managing the business logic of a button component (orchestrator).
 * It coordinates label, enabled state, icon, progress, ripple effect, skeleton, and event handling.
 *
 * Класс Button для управления бизнес-логикой компонента кнопки (оркестратор).
 * Координирует метку, состояние активности, иконку, прогресс, эффект волны, скелетон и обработку событий.
 */
export class Button extends DesignLogicAbstract<
  HTMLDivElement,
  ButtonComponents,
  ButtonEmits,
  ButtonSlots,
  ButtonPropsBasic,
  ButtonConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ButtonConstructors> = {
    enabled: {
      item: EnabledInclude,
      parameters: () => [
        this.props,
        () => this.i('progress')
      ]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        this.props,
        () => this.i('enabled'),
        this.emits
      ]
    },
    icon: {
      item: IconTrailingInclude,
      conditions: () => IconTrailingInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({ disabled: this.props.disabled })
      ]
    },
    label: {
      item: LabelInclude,
      conditions: () => LabelInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots
      ]
    },
    progress: {
      item: ProgressInclude,
      conditions: () => ProgressInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        {
          circular: true,
          inverse: true
        }
      ]
    },
    ripple: {
      item: RippleInclude,
      conditions: () => RippleInclude.is(this.props),
      parameters: () => [
        this.naming,
        this.components,
        this.i('enabled')
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      conditions: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        ['classBackground']
      ]
    }
  }

  /**
   * Returns list of aria properties for the button component.
   *
   * Возвращает список aria свойств для компонента Button.
   * @returns list of aria properties / список свойств aria
   */
  get aria(): AriaList {
    const isProgress = ProgressInclude.is(this.props)
    const aria: AriaList = {
      ...AriaStaticInclude.label(this.props.ariaLabel)
    }

    if (isProgress) {
      Object.assign(aria, this.i('progress').aria.value)
    }

    if (this.isTagNotButton()) {
      return {
        tabindex: '0',
        ...aria,
        ...AriaStaticInclude.role('button'),
        ...AriaStaticInclude.disabled(isProgress || !this.i('enabled').isEnabled)
      }
    }

    return aria
  }

  /**
   * Returns attributes for the main element.
   *
   * Возвращает атрибуты для главного элемента.
   * @returns main element properties / свойства главного элемента
   */
  get binds(): ConstrBind {
    return {
      'type': this.props.type ?? (this.tag === 'button' ? 'button' : undefined),
      'data-value': this.props.value,
      'disabled': this.i('enabled').isDisabledOrUndefined,
      ...this.eventList,
      ...this.aria
    }
  }

  /**
   * Returns values for the class.
   *
   * Возвращает значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    const icon = IconTrailingInclude.is(this.props) && this.i('icon').isIcon()
    const classes: ConstrClassObject = {
      [this.naming.getStatusClass('icon')]: icon,
      [getClassTagAStatic(this.naming.getDesign())]: true
    }

    if (SkeletonInclude.is(this.props)) {
      Object.assign(classes, this.i('skeleton').classes)
    }

    return classes
  }

  /**
   * Returns events for the button component.
   *
   * Возвращает события для компонента кнопки.
   * @returns object of events / объект событий
   */
  get eventList(): ConstrBind {
    const event = this.i('event')
    const events: ConstrBind = {
      ...event.href,
      onClick: event.onClick
    }

    if (this.isTagNotButton()) {
      events.onKeydown = event.onKeydown
    }

    return events
  }

  /**
   * Returns the tag name for the element.
   *
   * Возвращает название тега для элемента.
   * @returns tag name / название тега
   */
  get tag(): string {
    if (this.props.tag) {
      return this.props.tag
    }

    if (this.props.href) {
      return 'a'
    }

    return 'button'
  }

  /**
   * Checks if the tag is not a button or link.
   *
   * Проверяет, не является ли тег кнопкой или ссылкой.
   * @returns check result / результат проверки
   */
  protected isTagNotButton(): boolean {
    return Boolean(
      this.props.tag
      && !['a', 'button'].includes(this.props.tag)
    )
  }
}
