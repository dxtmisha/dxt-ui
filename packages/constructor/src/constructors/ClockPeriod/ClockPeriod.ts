import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TextInclude } from '../../classes/TextInclude'

import { ClockPeriodEvent } from './ClockPeriodEvent'
import { ClockPeriodValue } from './ClockPeriodValue'

import type { AriaList } from '../../types/ariaTypes'
import type { ClockPeriodType } from './basicTypes'
import type { ClockPeriodProps } from './props'
import type {
  ClockPeriodComponents,
  ClockPeriodEmits,
  ClockPeriodSlots
} from './types'

/** ClockPeriod dependency constructors type / Тип конструкторов зависимостей ClockPeriod */
export type ClockPeriodConstructors = {
  /** Enabled state manager constructor / Конструктор менеджера состояния активности */
  enabled: typeof EnabledInclude
  /** Period interaction event manager constructor / Конструктор менеджера событий взаимодействия периода */
  event: typeof ClockPeriodEvent
  /** Click event manager constructor / Конструктор менеджера событий клика */
  eventClick: typeof EventClickInclude
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<ClockPeriodType>
  /** Localized text manager constructor / Конструктор менеджера локализованного текста */
  text: typeof TextInclude
  /** Period value manager constructor / Конструктор менеджера значения периода */
  value: typeof ClockPeriodValue
}

/**
 * ClockPeriod orchestrator class.
 * Coordinates period value (AM / PM), accessibility attributes, model synchronization, and user interactions.
 *
 * Оркестраторный класс компонента ClockPeriod.
 * Координирует значение периода (AM / PM), атрибуты доступности, синхронизацию модели и пользовательские взаимодействия.
 */
export class ClockPeriod extends DesignLogicAbstract<
  HTMLDivElement,
  ClockPeriodComponents,
  ClockPeriodEmits,
  ClockPeriodSlots,
  ClockPeriodProps,
  ClockPeriodConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ClockPeriodConstructors> = {
    enabled: {
      item: EnabledInclude,
      parameters: () => [this.props]
    },
    event: {
      item: ClockPeriodEvent,
      parameters: () => [
        () => this.i('enabled'),
        () => this.i('eventClick'),
        () => this.i('value')
      ]
    },
    eventClick: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        () => this.i('enabled'),
        this.emits
      ]
    },
    model: {
      item: ModelInclude<ClockPeriodType>,
      parameters: () => [
        'value',
        this.emits
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    },
    value: {
      item: ClockPeriodValue,
      parameters: () => [
        this.props,
        () => this.i('model')
      ]
    }
  }

  /**
   * Returns ARIA attributes for the clock period root element.
   *
   * Возвращает ARIA-атрибуты для корневого элемента периода часов.
   * @returns ARIA attributes dictionary / словарь ARIA-атрибутов
   */
  get aria(): AriaList {
    const enabled = this.i('enabled')

    return {
      ...AriaStaticInclude.role('radiogroup'),
      ...AriaStaticInclude.orientation(this.props.orientation ?? 'vertical'),
      ...AriaStaticInclude.readonly(enabled.isReadonly),
      ...enabled.aria
    }
  }

  /**
   * Returns binding attributes and event listeners for the root element.
   *
   * Возвращает атрибуты привязки и слушатели событий для корневого элемента.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ConstrBind {
    return {
      tabindex: this.tabindex,
      onKeydown: this.onKeydown,
      ...this.aria
    }
  }

  /**
   * Tabindex value for the root element.
   *
   * Значение tabindex для корневого элемента.
   * @returns tabindex number / значение tabindex
   */
  get tabindex(): number {
    return this.i('enabled').isEnabled ? 0 : -1
  }

  /**
   * Returns ARIA attributes for a period item button.
   *
   * Возвращает ARIA-атрибуты для кнопки элемента периода.
   * @param period period type / тип периода
   * @returns ARIA attributes dictionary / словарь ARIA-атрибутов
   */
  getItemAria(period: ClockPeriodType): AriaList {
    return {
      ...AriaStaticInclude.role('radio'),
      ...AriaStaticInclude.checked(this.i('value').isSelected(period))
    }
  }

  /**
   * Handles click on a period item button.
   *
   * Обрабатывает клик по кнопке элемента периода.
   * @param event native mouse event / нативное событие мыши
   */
  readonly onClick = (event: MouseEvent): void => {
    this.i('event').onClick(event)
  }

  /**
   * Handles keyboard navigation on the root element.
   *
   * Обрабатывает клавиатурную навигацию на корневом элементе.
   * @param event native keyboard event / нативное событие клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    this.i('event').onKeydown(event)
  }
}
