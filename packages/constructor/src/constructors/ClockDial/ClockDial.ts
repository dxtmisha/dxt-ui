import {
  computed,
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
import { ModelValueInclude } from '../../classes/ModelValueInclude'

import { ClockDialArrows } from './ClockDialArrows'
import { ClockDialControl } from './ClockDialControl'
import { ClockDialEmit } from './ClockDialEmit'
import { ClockDialEvent } from './ClockDialEvent'
import { ClockDialList } from './ClockDialList'
import { ClockDialSelect } from './ClockDialSelect'
import { ClockDialValue } from './ClockDialValue'

import type { AriaList } from '../../types/ariaTypes'
import type { ClockDialComponents, ClockDialEmits, ClockDialSlots } from './types'
import type { ClockDialProps } from './props'

/**
 * ClockDial orchestrator class.
 * Manages clock face items, hour/minute/second hands, coordinate selection, and pointer interactions.
 *
 * Оркестраторный класс циферблата часов.
 * Управляет элементами циферблата, стрелками часов/минут/секунд, выбором по координатам и взаимодействием указателя.
 */
export class ClockDial {
  /** Clock hands (arrows) manager instance / Экземпляр менеджера стрелок часов */
  readonly arrows: ClockDialArrows

  /** Clock dial control manager instance / Экземпляр менеджера управления циферблатом часов */
  readonly control: ClockDialControl

  /** Clock dial emit manager instance / Экземпляр менеджера событий циферблата часов */
  readonly emitsItem: ClockDialEmit

  /** Enabled include helper instance / Экземпляр помощника состояния активности */
  readonly enabled: EnabledInclude

  /** Pointer and touch event manager instance / Экземпляр менеджера событий указателя и касания */
  readonly event: ClockDialEvent

  /** Clock dial items list manager instance / Экземпляр менеджера списка элементов циферблата */
  readonly list: ClockDialList

  /** Model value include helper / Помощник значения модели */
  readonly model: ModelValueInclude<number>

  /** Coordinate hit-testing selector instance / Экземпляр селектора проверки попадания координат */
  readonly select: ClockDialSelect

  /** Clock dial time values manager instance / Экземпляр менеджера значений времени циферблата */
  readonly valueItem: ClockDialValue

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
   * @param constructors.ClockDialListConstructor class for working with clock dial items list / класс для работы со списком элементов циферблата
   * @param constructors.ClockDialValueConstructor class for working with clock dial time values / класс для работы со значениями времени циферблата
   * @param constructors.ClockDialArrowsConstructor class for working with clock hands / класс для работы со стрелками часов
   * @param constructors.ClockDialSelectConstructor class for working with item selection / класс для работы с выбором элементов
   * @param constructors.ClockDialEmitConstructor class for working with emits / класс для работы с эмитами
   * @param constructors.ClockDialControlConstructor class for working with control / класс для работы с управлением
   * @param constructors.ClockDialEventConstructor class for working with events / класс для работы с событиями
   */
  constructor(
    protected readonly props: ClockDialProps,
    protected readonly refs: ToRefs<ClockDialProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ClockDialComponents, ClockDialProps>,
    protected readonly slots?: ClockDialSlots,
    protected readonly emits?: ConstrEmit<ClockDialEmits>,
    constructors: {
      EnabledIncludeConstructor?: typeof EnabledInclude
      ModelValueIncludeConstructor?: typeof ModelValueInclude<number>
      ClockDialListConstructor?: typeof ClockDialList
      ClockDialValueConstructor?: typeof ClockDialValue
      ClockDialArrowsConstructor?: typeof ClockDialArrows
      ClockDialSelectConstructor?: typeof ClockDialSelect
      ClockDialEmitConstructor?: typeof ClockDialEmit
      ClockDialControlConstructor?: typeof ClockDialControl
      ClockDialEventConstructor?: typeof ClockDialEvent
    } = {}
  ) {
    const {
      EnabledIncludeConstructor = EnabledInclude,
      ModelValueIncludeConstructor = ModelValueInclude,
      ClockDialListConstructor = ClockDialList,
      ClockDialValueConstructor = ClockDialValue,
      ClockDialArrowsConstructor = ClockDialArrows,
      ClockDialSelectConstructor = ClockDialSelect,
      ClockDialEmitConstructor = ClockDialEmit,
      ClockDialControlConstructor = ClockDialControl,
      ClockDialEventConstructor = ClockDialEvent
    } = constructors

    this.enabled = new EnabledIncludeConstructor(props)

    this.model = new ModelValueIncludeConstructor(
      'value',
      emits,
      undefined,
      computed(() => this.props.modelValue ?? this.props.value),
      refs.readonly
    )

    this.list = new ClockDialListConstructor(props, className)
    this.valueItem = new ClockDialValueConstructor(props, this.model)
    this.arrows = new ClockDialArrowsConstructor(
      props,
      className,
      this.list,
      this.valueItem
    )
    this.select = new ClockDialSelectConstructor(props, this.list, this.model, this.enabled)
    this.emitsItem = new ClockDialEmitConstructor(props, this.list, this.valueItem, emits)
    this.control = new ClockDialControlConstructor(
      props,
      this.emitsItem,
      this.enabled,
      this.list,
      this.valueItem
    )
    this.event = new ClockDialEventConstructor(
      props,
      this.control,
      this.emitsItem,
      this.enabled,
      this.model,
      this.select,
      this.element
    )
  }

  /**
   * Returns ARIA attributes for the clock dial.
   *
   * Возвращает ARIA-атрибуты для циферблата часов.
   * @returns ARIA attributes record / запись ARIA-атрибутов
   */
  get aria(): AriaList {
    if (this.props.clock) {
      return {
        ...AriaStaticInclude.role('timer'),
        ...AriaStaticInclude.label(this.valueItem.text),
        ...this.enabled.aria
      }
    }

    return {
      ...AriaStaticInclude.role('slider'),
      ...AriaStaticInclude.valueMinMax(
        this.valueItem.value,
        this.props.min,
        this.props.max
      ),
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
      [`${this.className}--section`]: this.list.isSection(this.valueItem.value),
      [`${this.className}--selected`]: this.valueItem.isSelectVisible()
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
    return this.props.clock ? undefined : (this.enabled.isEnabled ? 0 : -1)
  }
}
