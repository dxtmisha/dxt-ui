import {
  type Ref,
  type ToRefs
} from 'vue'

import {
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrStyles,
  type DesignComp
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelValueInclude } from '../../classes/ModelValueInclude'
import { TextInclude } from '../../classes/TextInclude'

import { ClockPeriodEvent } from './ClockPeriodEvent'
import { ClockPeriodList } from './ClockPeriodList'
import { ClockPeriodValue } from './ClockPeriodValue'

import type { AriaList } from '../../types/ariaTypes'
import type { ClockPeriodComponents, ClockPeriodEmits, ClockPeriodSlots } from './types'
import type { ClockPeriodProps } from './props'
import type { ClockPeriodType } from './basicTypes'

/**
 * ClockPeriod orchestrator class.
 * Coordinates period value (AM / PM), list items, accessibility, and user interactions.
 *
 * Оркестраторный класс компонента ClockPeriod.
 * Координирует значение периода (AM / PM), элементы списка, доступность и пользовательские взаимодействия.
 */
export class ClockPeriod {
  /** Enabled state helper instance / Экземпляр помощника состояния активности */
  readonly enabled: EnabledInclude

  /** Model value include helper / Помощник значения модели */
  readonly model: ModelValueInclude<ClockPeriodType>

  /** Text manager helper instance / Экземпляр помощника менеджера текста */
  readonly text: TextInclude

  /** Clock period value manager instance / Экземпляр менеджера значения периода часов */
  readonly value: ClockPeriodValue

  /** Event click include instance / Экземпляр помощника события клика */
  readonly eventClick: EventClickInclude

  /** Clock period list manager instance / Экземпляр менеджера списка периодов часов */
  readonly list: ClockPeriodList

  /** Event manager instance for interactions / Экземпляр менеджера событий для взаимодействий */
  readonly event: ClockPeriodEvent

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors helper class constructors / конструкторы вспомогательных классов
   * @param constructors.EnabledIncludeConstructor class for working with enabled state / класс для работы с состоянием активности
   * @param constructors.ModelValueIncludeConstructor class for working with model value / класс для работы со значением модели
   * @param constructors.TextIncludeConstructor class for working with text / класс для работы с текстом
   * @param constructors.ClockPeriodValueConstructor class for working with period values / класс для работы со значениями периода
   * @param constructors.EventClickIncludeConstructor class for working with click event / класс для работы с событием клика
   * @param constructors.ClockPeriodListConstructor class for working with items list / класс для работы со списком элементов
   * @param constructors.ClockPeriodEventConstructor class for working with events / класс для работы с событиями
   */
  constructor(
    protected readonly props: ClockPeriodProps,
    protected readonly refs: ToRefs<ClockPeriodProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ClockPeriodComponents, ClockPeriodProps>,
    protected readonly slots?: ClockPeriodSlots,
    protected readonly emits?: ConstrEmit<ClockPeriodEmits>,
    constructors: {
      EnabledIncludeConstructor?: typeof EnabledInclude
      ModelValueIncludeConstructor?: typeof ModelValueInclude<ClockPeriodType>
      TextIncludeConstructor?: typeof TextInclude
      ClockPeriodValueConstructor?: typeof ClockPeriodValue
      EventClickIncludeConstructor?: typeof EventClickInclude
      ClockPeriodListConstructor?: typeof ClockPeriodList
      ClockPeriodEventConstructor?: typeof ClockPeriodEvent
    } = {}
  ) {
    const {
      EnabledIncludeConstructor = EnabledInclude,
      ModelValueIncludeConstructor = ModelValueInclude,
      TextIncludeConstructor = TextInclude,
      ClockPeriodValueConstructor = ClockPeriodValue,
      EventClickIncludeConstructor = EventClickInclude,
      ClockPeriodListConstructor = ClockPeriodList,
      ClockPeriodEventConstructor = ClockPeriodEvent
    } = constructors

    this.text = new TextIncludeConstructor(props)
    this.enabled = new EnabledIncludeConstructor(props)

    this.value = new ClockPeriodValueConstructor(props)

    this.eventClick = new EventClickIncludeConstructor(
      undefined,
      this.enabled,
      emits
    )
    this.model = new ModelValueIncludeConstructor(
      'value',
      emits,
      this.eventClick,
      this.value.value,
      refs.readonly
    )

    this.list = new ClockPeriodListConstructor(this.text, this.value, this.enabled)
    this.event = new ClockPeriodEventConstructor(
      props,
      this.enabled,
      this.value,
      this.list,
      this.eventClick,
      this.model
    )
  }

  /**
   * Returns ARIA attributes for the clock period component.
   *
   * Возвращает ARIA-атрибуты для компонента периода часов.
   * @returns ARIA attributes record / запись ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role('radiogroup'),
      ...AriaStaticInclude.orientation(this.props.orientation ?? 'vertical'),
      ...this.enabled.aria
    }
  }

  /**
   * Returns binding attributes and event listeners for root element.
   *
   * Возвращает атрибуты привязки и слушатели событий для корневого элемента.
   * @returns binds record / запись привязок
   */
  get binds(): Record<string, any> {
    return {
      tabindex: this.tabindex,
      onKeydown: this.event.onKeydown,
      ...this.aria
    }
  }

  /**
   * Computed class list for root element.
   *
   * Вычисляемый список классов для корневого элемента.
   * @returns computed classes / вычисленные классы
   */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--selected-am`]: this.value.isAm(),
      [`${this.className}--selected-pm`]: this.value.isPm()
    }
  }

  /**
   * Computed CSS custom property styles.
   *
   * Вычисляемые стили пользовательских переменных CSS.
   * @returns style dictionary / словарь стилей
   */
  get styles(): ConstrStyles {
    return {}
  }

  /**
   * Tabindex value for root element.
   *
   * Значение tabindex для корневого элемента.
   * @returns tabindex number or undefined / значение tabindex или undefined
   */
  get tabindex(): number | undefined {
    return this.enabled.isEnabled ? 0 : -1
  }
}
