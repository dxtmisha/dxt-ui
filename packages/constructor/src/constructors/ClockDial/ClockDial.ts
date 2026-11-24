import { computed } from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract
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
import type { ClockDialProps } from './props'
import type {
  ClockDialComponents,
  ClockDialEmits,
  ClockDialSlots
} from './types'

/** ClockDial dependency constructors type / Тип конструкторов зависимостей ClockDial */
export type ClockDialConstructors = {
  /** Clock hands (arrows) manager constructor / Конструктор менеджера стрелок часов */
  arrows: typeof ClockDialArrows
  /** Clock dial keyboard control manager constructor / Конструктор менеджера клавиатурного управления циферблатом */
  control: typeof ClockDialControl
  /** Clock dial emit manager constructor / Конструктор менеджера отправки событий циферблата */
  emit: typeof ClockDialEmit
  /** Enabled include helper constructor / Конструктор помощника состояния активности */
  enabled: typeof EnabledInclude
  /** Pointer, touch, and keyboard event manager constructor / Конструктор менеджера событий указателя, касания и клавиатуры */
  event: typeof ClockDialEvent
  /** Clock dial items list manager constructor / Конструктор менеджера списка элементов циферблата */
  list: typeof ClockDialList
  /** Model value include helper constructor / Конструктор помощника значения модели */
  model: typeof ModelValueInclude<number>
  /** Coordinate hit-testing selector constructor / Конструктор селектора проверки попадания координат */
  select: typeof ClockDialSelect
  /** Clock dial time values manager constructor / Конструктор менеджера значений времени циферблата */
  value: typeof ClockDialValue
}

/**
 * ClockDial orchestrator class.
 * Manages clock face items, hour/minute/second hands, coordinate selection, and pointer interactions.
 *
 * Оркестраторный класс циферблата часов.
 * Управляет элементами циферблата, стрелками часов/минут/секунд, выбором по координатам и взаимодействием указателя.
 */
export class ClockDial extends DesignLogicAbstract<
  HTMLDivElement,
  ClockDialComponents,
  ClockDialEmits,
  ClockDialSlots,
  ClockDialProps,
  ClockDialConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ClockDialConstructors> = {
    arrows: {
      item: ClockDialArrows,
      parameters: () => [
        this.naming,
        () => this.i('list'),
        () => this.i('value')
      ]
    },
    control: {
      item: ClockDialControl,
      parameters: () => [
        this.props,
        () => this.i('emit'),
        () => this.i('enabled'),
        () => this.i('list'),
        () => this.i('value')
      ]
    },
    emit: {
      item: ClockDialEmit,
      parameters: () => [
        this.props,
        () => this.i('list'),
        () => this.i('value'),
        this.emits
      ]
    },
    enabled: {
      item: EnabledInclude,
      parameters: () => [
        this.props
      ]
    },
    event: {
      item: ClockDialEvent,
      canCreate: () => ClockDialEvent.is(this.props),
      parameters: () => [
        this.props,
        this.element,
        () => this.i('control'),
        () => this.i('emit'),
        () => this.i('enabled'),
        () => this.i('list'),
        () => this.i('model'),
        () => this.i('select')
      ]
    },
    list: {
      item: ClockDialList,
      parameters: () => [
        this.props,
        this.naming
      ]
    },
    model: {
      item: ModelValueInclude<number>,
      parameters: () => [
        'value',
        this.emits,
        undefined,
        computed(() => this.props.modelValue ?? this.props.value),
        () => this.props.readonly
      ]
    },
    select: {
      item: ClockDialSelect,
      canCreate: () => ClockDialSelect.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('enabled'),
        () => this.i('list'),
        () => this.i('model')
      ]
    },
    value: {
      item: ClockDialValue,
      parameters: () => [
        this.props,
        () => this.i('model')
      ]
    }
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
        ...AriaStaticInclude.label(this.i('value').text),
        ...this.i('enabled').aria
      }
    }

    return {
      ...AriaStaticInclude.role('slider'),
      ...AriaStaticInclude.valueMinMax(
        this.i('value').value,
        this.props.min,
        this.props.max
      ),
      ...this.i('enabled').aria,
      ...AriaStaticInclude.readonly(Boolean(this.props.readonly))
    }
  }

  /**
   * Returns binding attributes and event listeners for root element.
   *
   * Возвращает атрибуты привязки и слушатели событий для корневого элемента.
   * @returns binds record / запись привязок
   */
  get binds(): ConstrBind {
    const binds: ConstrBind = {
      tabindex: this.tabindex,
      ...this.aria
    }

    if (ClockDialEvent.is(this.props)) {
      binds.onKeydown = this.onKeydown
    }

    return binds
  }

  /**
   * Computed class list for root element.
   *
   * Вычисляемый список классов для корневого элемента.
   * @returns computed classes / вычисленные классы
   */
  get classes(): ConstrClassObject {
    const valueItem = this.i('value')
    const isSelected = valueItem.isSelectVisible()

    return {
      [this.naming.getStatusClass('section')]: isSelected && this.i('list').isSection(valueItem.value),
      [this.naming.getStatusClass('selected')]: isSelected
    }
  }

  /**
   * Tabindex value for root element.
   *
   * Значение tabindex для корневого элемента.
   * @returns tabindex number or undefined / значение tabindex или undefined
   */
  get tabindex(): number | undefined {
    return this.props.clock ? undefined : (this.i('enabled').isEnabled ? 0 : -1)
  }

  /**
   * Delegates click event on a clock dial mark element to the lazy event manager.
   *
   * Делегирует событие клика по элементу метки циферблата ленивому менеджеру событий.
   * @param event native mouse event / нативное событие мыши
   */
  readonly onClick = (event: MouseEvent): void => {
    this.callInstance('event', item => item.onClick(event))
  }

  /**
   * Delegates keyboard keydown event on the clock dial to the lazy event manager.
   *
   * Делегирует событие нажатия клавиши клавиатуры на циферблате ленивому менеджеру событий.
   * @param event native keyboard event / нативное событие клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    this.callInstance('event', item => item.onKeydown(event))
  }

  /**
   * Delegates drag start event on the censor area to the lazy event manager.
   *
   * Делегирует событие начала перетаскивания на области цензора ленивому менеджеру событий.
   * @param event native mouse or touch event / нативное событие мыши или касания
   */
  readonly onStart = (event: MouseEvent | TouchEvent): void => {
    this.callInstance('event', item => item.onStart(event))
  }
}
