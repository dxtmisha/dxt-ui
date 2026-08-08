import {
  computed,
  onUnmounted,
  type Ref,
  type ToRefs
} from 'vue'

import {
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrStyles,
  type DesignComp
} from '@dxtmisha/functional'

import { EnabledInclude } from '../../classes/EnabledInclude'
import { ModelValueInclude } from '../../classes/ModelValueInclude'
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

import { type SliderValueType } from './basicTypes'
import type { SliderComponents, SliderEmits, SliderSlots } from './types'
import type { SliderProps } from './props'

/**
 * Slider orchestrator class.
 * Manages slider value state, range handling, drag interaction, keyboard navigation, and ARIA attributes.
 *
 * Оркестраторный класс слайдера.
 * Управляет состоянием значения слайдера, обработкой диапазона, перетаскиванием, клавиатурной навигацией и ARIA-атрибутами.
 */
export class Slider {
  /** Slider drag event manager instance / Экземпляр менеджера событий перетаскивания слайдера */
  readonly dragEvent: SliderDragEvent

  /** Slider emit manager instance / Экземпляр менеджера событий слайдера */
  readonly emitsItem: SliderEmit

  /** Enabled include helper instance / Экземпляр помощника состояния активности */
  readonly enabled: EnabledInclude

  /** Slider keyboard event manager instance / Экземпляр менеджера событий клавиатуры слайдера */
  readonly event: SliderEvent

  /** Slider focus manager instance / Экземпляр менеджера фокуса слайдера */
  readonly focus: SliderFocus

  /** Slider navigation and step manager instance / Экземпляр менеджера навигации и шагов слайдера */
  readonly go: SliderGo

  /** Slider marks manager instance / Экземпляр менеджера меток слайдера */
  readonly marks: SliderMarks

  /** Slider marks data manager instance / Экземпляр менеджера данных меток слайдера */
  readonly marksData: SliderMarksData

  /** Max thumb handle manager / Менеджер максимального ползунка */
  readonly maxElement: SliderThumbMax

  /** Min thumb handle manager / Менеджер минимального ползунка */
  readonly minElement: SliderThumbMin

  /** Model value include helper / Помощник значения модели */
  readonly model: ModelValueInclude<SliderValueType>

  /** Skeleton include helper instance / Экземпляр помощника скелетона */
  readonly skeleton: SkeletonInclude

  /** Slider element manager instance / Экземпляр менеджера элементов слайдера */
  readonly sliderElement: SliderElement

  /** Slider value bounds manager instance / Экземпляр менеджера значений слайдера */
  readonly value: SliderValue

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
   * @param constructors.EnabledIncludeConstructor class for working with enabled / класс для работы с активностью
   */
  constructor(
    protected readonly props: SliderProps,
    protected readonly refs: ToRefs<SliderProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SliderComponents, SliderProps>,
    protected readonly slots?: SliderSlots,
    protected readonly emits?: ConstrEmit<SliderEmits>,
    constructors: {
      EnabledIncludeConstructor?: typeof EnabledInclude
      ModelValueIncludeConstructor?: typeof ModelValueInclude<SliderValueType>
      SkeletonIncludeConstructor?: typeof SkeletonInclude
      SliderDragEventConstructor?: typeof SliderDragEvent
      SliderElementConstructor?: typeof SliderElement
      SliderEmitConstructor?: typeof SliderEmit
      SliderEventConstructor?: typeof SliderEvent
      SliderFocusConstructor?: typeof SliderFocus
      SliderGoConstructor?: typeof SliderGo
      SliderMarksConstructor?: typeof SliderMarks
      SliderMarksDataConstructor?: typeof SliderMarksData
      SliderThumbMaxConstructor?: typeof SliderThumbMax
      SliderThumbMinConstructor?: typeof SliderThumbMin
      SliderValueConstructor?: typeof SliderValue
    } = {}
  ) {
    const {
      EnabledIncludeConstructor = EnabledInclude,
      ModelValueIncludeConstructor = ModelValueInclude,
      SkeletonIncludeConstructor = SkeletonInclude,
      SliderDragEventConstructor = SliderDragEvent,
      SliderElementConstructor = SliderElement,
      SliderEmitConstructor = SliderEmit,
      SliderEventConstructor = SliderEvent,
      SliderFocusConstructor = SliderFocus,
      SliderGoConstructor = SliderGo,
      SliderMarksConstructor = SliderMarks,
      SliderMarksDataConstructor = SliderMarksData,
      SliderThumbMaxConstructor = SliderThumbMax,
      SliderThumbMinConstructor = SliderThumbMin,
      SliderValueConstructor = SliderValue
    } = constructors

    this.skeleton = new SkeletonIncludeConstructor(
      props,
      classDesign
    )
    this.enabled = new EnabledIncludeConstructor(props)
    this.focus = new SliderFocusConstructor()

    this.model = new ModelValueIncludeConstructor(
      'value',
      emits,
      undefined,
      computed(() => props.modelValue ?? props.value),
      refs.readonly,
      refs.multiple
    )

    this.marksData = new SliderMarksDataConstructor(props, className)
    this.marks = new SliderMarksConstructor(props, className, this.marksData)
    this.value = new SliderValueConstructor(this.focus, this.marks, this.model, props)

    this.minElement = new SliderThumbMinConstructor(props, this.marksData, this.marks, this.value)
    this.maxElement = new SliderThumbMaxConstructor(props, this.marksData, this.marks, this.value)
    this.sliderElement = new SliderElementConstructor(
      props,
      element,
      this.maxElement,
      this.minElement
    )
    this.emitsItem = new SliderEmitConstructor(
      props,
      this.model,
      this.value,
      this.minElement,
      this.maxElement,
      emits
    )

    this.go = new SliderGoConstructor(
      this.emitsItem,
      this.enabled,
      this.focus,
      this.marks,
      this.sliderElement,
      this.value
    )

    this.dragEvent = new SliderDragEventConstructor(
      props,
      this.emitsItem,
      this.go
    )

    this.event = new SliderEventConstructor(
      props,
      this.dragEvent,
      this.emitsItem,
      this.enabled,
      this.focus,
      this.go,
      this.marksData,
      this.maxElement,
      this.minElement,
      this.sliderElement,
      this.value
    )

    onUnmounted(() => {
      this.dragEvent.stop()
    })
  }

  /**
   * Computed class list for root element.
   *
   * Вычисляемый список классов для корневого элемента.
   * @returns computed classes / вычисленные классы
   */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--mark`]: this.marksData.is()
    }
  }

  /**
   * Computed CSS custom property styles.
   *
   * Вычисляемые стили пользовательских переменных CSS.
   * @returns style dictionary / словарь стилей
   */
  get styles(): ConstrStyles {
    return {
      [`--${this.className}-sys-thumb-min-x`]: `${this.marksData.toPercent(this.value.min)}%`,
      [`--${this.className}-sys-thumb-max-x`]: `${this.marksData.toPercent(this.value.max)}%`
    }
  }

  /**
   * Returns tabindex value based on enabled state.
   *
   * Возвращает значение tabindex на основе состояния активности.
   * @returns tabindex number (0 if enabled, -1 if disabled) / значение tabindex
   */
  get tabindex(): number {
    return this.enabled.isEnabled ? 0 : -1
  }

  /**
   * Checks if ripple animation is enabled.
   *
   * Проверяет, включена ли анимация ripple.
   * @returns check result / результат проверки
   */
  isRipple(): boolean {
    return Boolean(
      !this.props.isSkeleton
      && this.enabled.isEnabled
    )
  }
}
