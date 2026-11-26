import { computed } from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  type ConstrStyles,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { EnabledInclude } from '../../classes/EnabledInclude'
import { ModelValueInclude } from '../../classes/ModelValueInclude'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import { SliderDragEvent } from './SliderDragEvent'
import { SliderElement } from './SliderElement'
import { SliderEmit } from './SliderEmit'
import { SliderEvent } from './SliderEvent'
import { SliderFocus } from './SliderFocus'
import { SliderGo } from './SliderGo'
import { SliderMarks } from './SliderMarks'
import { SliderMarksData } from './SliderMarksData'
import { SliderThumbMax } from './SliderThumbMax'
import { SliderThumbMin } from './SliderThumbMin'
import { SliderValue } from './SliderValue'

import type { SliderValueType } from './basicTypes'
import type { SliderProps } from './props'
import type { SliderComponents, SliderEmits, SliderSlots } from './types'

/** Slider dependency constructors type / Тип конструкторов зависимостей Slider */
export type SliderConstructors = {
  /** Slider drag event manager constructor / Конструктор менеджера событий перетаскивания слайдера */
  dragEvent: typeof SliderDragEvent
  /** Slider emit manager constructor / Конструктор менеджера событий слайдера */
  emit: typeof SliderEmit
  /** Enabled include helper constructor / Конструктор помощника состояния активности */
  enabled: typeof EnabledInclude
  /** Slider keyboard and pointer event manager constructor / Конструктор менеджера событий клавиатуры и указателя слайдера */
  event: typeof SliderEvent
  /** Slider focus manager constructor / Конструктор менеджера фокуса слайдера */
  focus: typeof SliderFocus
  /** Slider navigation and step manager constructor / Конструктор менеджера навигации и шагов слайдера */
  go: typeof SliderGo
  /** Slider marks manager constructor / Конструктор менеджера меток слайдера */
  marks: typeof SliderMarks
  /** Slider marks data manager constructor / Конструктор менеджера данных меток слайдера */
  marksData: typeof SliderMarksData
  /** Model value include helper constructor / Конструктор помощника значения модели */
  model: typeof ModelValueInclude<SliderValueType>
  /** Ripple include helper constructor / Конструктор помощника эффекта волны */
  ripple: typeof RippleInclude
  /** Skeleton include helper constructor / Конструктор помощника скелетона */
  skeleton: typeof SkeletonInclude
  /** Slider element manager constructor / Конструктор менеджера элементов слайдера */
  sliderElement: typeof SliderElement
  /** Max thumb handle manager constructor / Конструктор менеджера максимального ползунка */
  thumbMax: typeof SliderThumbMax
  /** Min thumb handle manager constructor / Конструктор менеджера минимального ползунка */
  thumbMin: typeof SliderThumbMin
  /** Slider value bounds manager constructor / Конструктор менеджера значений слайдера */
  value: typeof SliderValue
}

/**
 * Slider orchestrator class.
 * Manages slider value state, range handling, drag interaction, keyboard navigation, and ARIA attributes.
 *
 * Оркестраторный класс слайдера.
 * Управляет состоянием значения слайдера, обработкой диапазона, перетаскиванием, клавиатурной навигацией и ARIA-атрибутами.
 */
export class Slider extends DesignLogicAbstract<
  HTMLDivElement,
  SliderComponents,
  SliderEmits,
  SliderSlots,
  SliderProps,
  SliderConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<SliderConstructors> = {
    dragEvent: {
      item: SliderDragEvent,
      parameters: () => [
        this.props,
        () => this.i('emit'),
        () => this.i('go')
      ]
    },
    emit: {
      item: SliderEmit,
      parameters: () => [
        this.props,
        () => this.i('thumbMax'),
        () => this.i('thumbMin'),
        () => this.i('model'),
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
      item: SliderEvent,
      parameters: () => [
        () => this.i('dragEvent'),
        () => this.i('emit'),
        () => this.i('enabled'),
        () => this.i('focus'),
        () => this.i('go'),
        () => this.i('marksData'),
        () => this.i('thumbMax'),
        () => this.i('thumbMin'),
        () => this.i('sliderElement'),
        () => this.i('value')
      ]
    },
    focus: {
      item: SliderFocus,
      parameters: () => []
    },
    go: {
      item: SliderGo,
      parameters: () => [
        () => this.i('emit'),
        () => this.i('enabled'),
        () => this.i('focus'),
        () => this.i('marks'),
        () => this.i('sliderElement'),
        () => this.i('value')
      ]
    },
    marks: {
      item: SliderMarks,
      parameters: () => [
        this.props,
        () => this.i('marksData')
      ]
    },
    marksData: {
      item: SliderMarksData,
      parameters: () => [
        this.props,
        this.naming
      ]
    },
    model: {
      item: ModelValueInclude<SliderValueType>,
      parameters: () => [
        'value',
        this.emits,
        undefined,
        computed(() => this.props.modelValue ?? this.props.value),
        () => this.props.readonly,
        () => this.props.multiple
      ]
    },
    ripple: {
      item: RippleInclude,
      canCreate: () => !this.props.isSkeleton && RippleInclude.is(this.props),
      parameters: () => [
        this.naming,
        () => this.i('enabled'),
        this.components
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      canCreate: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming
      ]
    },
    sliderElement: {
      item: SliderElement,
      parameters: () => [
        this.props,
        this.element,
        () => this.i('thumbMax'),
        () => this.i('thumbMin')
      ]
    },
    thumbMax: {
      item: SliderThumbMax,
      parameters: () => [
        this.props,
        () => this.i('marks'),
        () => this.i('marksData'),
        () => this.i('value')
      ]
    },
    thumbMin: {
      item: SliderThumbMin,
      canCreate: () => SliderThumbMin.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('marks'),
        () => this.i('marksData'),
        () => this.i('value')
      ]
    },
    value: {
      item: SliderValue,
      parameters: () => [
        this.props,
        () => this.i('focus'),
        () => this.i('marks'),
        () => this.i('marksData'),
        () => this.i('model')
      ]
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
      [this.naming.getStatusClass('mark')]: this.i('marksData').is()
    }
  }

  /**
   * Returns lazy event handlers for maximum thumb handle element.
   *
   * Возвращает ленивые обработчики событий для элемента максимального ползунка.
   * @returns event bindings for maximum thumb / привязки событий для максимального ползунка
   */
  get eventsMax(): ConstrBind {
    return {
      onFocus: this.onFocusMax,
      onKeydown: this.onKeydown,
      onMousedown: this.onMousedownMax,
      onTouchstart: this.onMousedownMax
    }
  }

  /**
   * Returns lazy event handlers for minimum thumb handle element.
   *
   * Возвращает ленивые обработчики событий для элемента минимального ползунка.
   * @returns event bindings for minimum thumb / привязки событий для минимального ползунка
   */
  get eventsMin(): ConstrBind {
    return {
      onFocus: this.onFocusMin,
      onKeydown: this.onKeydown,
      onMousedown: this.onMousedownMin,
      onTouchstart: this.onMousedownMin
    }
  }

  /**
   * Computed CSS custom property styles.
   *
   * Вычисляемые стили пользовательских переменных CSS.
   * @returns style dictionary / словарь стилей
   */
  get styles(): ConstrStyles {
    const marksData = this.i('marksData')
    const valueItem = this.i('value')

    return {
      [this.naming.getStyle('thumb-min-x')]: `${marksData.toPercent(valueItem.min)}%`,
      [this.naming.getStyle('thumb-max-x')]: `${marksData.toPercent(valueItem.max)}%`
    }
  }

  /**
   * Returns tabindex value based on enabled state.
   *
   * Возвращает значение tabindex на основе состояния активности.
   * @returns tabindex number (0 if enabled, -1 if disabled) / значение tabindex (0 если активен, -1 если отключён)
   */
  get tabindex(): number {
    return this.i('enabled').isEnabled ? 0 : -1
  }

  /**
   * Delegates focus event for maximum thumb handle to the lazy event manager.
   *
   * Делегирует событие фокуса максимального ползунка ленивому менеджеру событий.
   */
  readonly onFocusMax = (): void => {
    this.i('event').onFocusMax()
  }

  /**
   * Delegates focus event for minimum thumb handle to the lazy event manager.
   *
   * Делегирует событие фокуса минимального ползунка ленивому менеджеру событий.
   */
  readonly onFocusMin = (): void => {
    this.i('event').onFocusMin()
  }

  /**
   * Delegates keyboard navigation event to the lazy event manager.
   *
   * Делегирует событие клавиатурной навигации ленивому менеджеру событий.
   * @param event keyboard event / событие клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    this.i('event').onKeydown(event)
  }

  /**
   * Delegates pointer start interaction on selection track to the lazy event manager.
   *
   * Делегирует начало взаимодействия указателем на дорожке выбора ленивому менеджеру событий.
   * @param event mouse or touch event / событие мыши или касания
   */
  readonly onMousedown = (event: MouseEvent | TouchEvent): void => {
    this.i('event').onMousedown(event)
  }

  /**
   * Delegates pointer start interaction for maximum thumb handle to the lazy event manager.
   *
   * Делегирует начало взаимодействия указателем для максимального ползунка ленивому менеджеру событий.
   * @param event mouse or touch event / событие мыши или касания
   */
  readonly onMousedownMax = (event: MouseEvent | TouchEvent): void => {
    this.i('event').onMousedownMax(event)
  }

  /**
   * Delegates pointer start interaction for minimum thumb handle to the lazy event manager.
   *
   * Делегирует начало взаимодействия указателем для минимального ползунка ленивому менеджеру событий.
   * @param event mouse or touch event / событие мыши или касания
   */
  readonly onMousedownMin = (event: MouseEvent | TouchEvent): void => {
    this.i('event').onMousedownMin(event)
  }
}
