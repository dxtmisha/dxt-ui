import {
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

import { SliderElement } from './SliderElement'
import { SliderEmit } from './SliderEmit'
import { SliderFocus } from './SliderFocus'
import { SliderGo } from './SliderGo'
import { SliderMarks } from './SliderMarks'
import { SliderMarksData } from './SliderMarksData'
import { SliderThumbMax } from './SliderThumbMax'
import { SliderThumbMin } from './SliderThumbMin'
import { SliderValue } from './SliderValue'

import { SliderFocusType, type SliderValueType } from './basicTypes'
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
  /** Slider emit manager instance / Экземпляр менеджера событий слайдера */
  readonly emitsItem: SliderEmit

  /** Enabled include helper instance / Экземпляр помощника состояния активности */
  readonly enabled: EnabledInclude

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

  /** Slider element manager instance / Экземпляр менеджера элементов слайдера */
  readonly sliderElement: SliderElement

  /** Slider value bounds manager instance / Экземпляр менеджера значений слайдера */
  readonly value: SliderValue

  /** Previous pointer position for drag optimization / Предыдущая позиция указателя для оптимизации перетаскивания */
  protected previousPointerPosition: number | undefined = undefined

  /** Active document listeners cleanup function / Функция очистки активных слушателей документа */
  protected dragCleanup?: () => void

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
      SliderElementConstructor?: typeof SliderElement
      SliderEmitConstructor?: typeof SliderEmit
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
      SliderElementConstructor = SliderElement,
      SliderEmitConstructor = SliderEmit,
      SliderFocusConstructor = SliderFocus,
      SliderGoConstructor = SliderGo,
      SliderMarksConstructor = SliderMarks,
      SliderMarksDataConstructor = SliderMarksData,
      SliderThumbMaxConstructor = SliderThumbMax,
      SliderThumbMinConstructor = SliderThumbMin,
      SliderValueConstructor = SliderValue
    } = constructors

    this.enabled = new EnabledIncludeConstructor(props)
    this.focus = new SliderFocusConstructor()

    this.model = new ModelValueIncludeConstructor(
      'value',
      emits,
      undefined,
      refs.value,
      refs.readonly,
      refs.multiple
    )

    this.marksData = new SliderMarksDataConstructor(props, className)
    this.marks = new SliderMarksConstructor(props, className, this.marksData)
    this.value = new SliderValueConstructor(this.focus, this.marks, this.model, props)

    this.minElement = new SliderThumbMinConstructor(this.marks, this.value)
    this.maxElement = new SliderThumbMaxConstructor(this.marks, this.value)
    this.sliderElement = new SliderElementConstructor(props, element)
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

    onUnmounted(() => {
      this.stopDrag()
    })
  }

  /**
   * Checks if ripple animation is enabled.
   *
   * Проверяет, включена ли анимация ripple.
   * @returns check result / результат проверки
   */
  isRipple(): boolean {
    return Boolean(
      this.props.ripple
      && !this.props.drop
      && this.enabled.isEnabled
    )
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
   * Handles keyboard navigation events on thumb handle buttons.
   *
   * Обрабатывает события клавиатурной навигации на кнопках ползунков.
   * @param event KeyboardEvent / событие клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    if (!this.enabled.isEnabled) {
      return
    }

    const key = event.code || event.key

    switch (key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault()
        this.go.increase()
        break
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault()
        this.go.decrease()
        break
      case 'Home':
        event.preventDefault()
        this.value.set(this.marksData.minNumber, this.focus.get())
        this.emitsItem.emit('change')
        break
      case 'End':
        event.preventDefault()
        this.value.set(this.marksData.maxNumber, this.focus.get())
        this.emitsItem.emit('change')
        break
      case 'PageUp': {
        event.preventDefault()
        const range = this.marksData.maxNumber - this.marksData.minNumber
        const pageStep = Math.max(this.marksData.stepNumber, Math.round(range * 0.1))
        const currentValue = this.focus.isMin() ? this.value.min : this.value.max
        this.value.set(currentValue + pageStep, this.focus.get())
        this.emitsItem.emit('change')
        break
      }
      case 'PageDown': {
        event.preventDefault()
        const range = this.marksData.maxNumber - this.marksData.minNumber
        const pageStep = Math.max(this.marksData.stepNumber, Math.round(range * 0.1))
        const currentValue = this.focus.isMin() ? this.value.min : this.value.max
        this.value.set(currentValue - pageStep, this.focus.get())
        this.emitsItem.emit('change')
        break
      }
    }
  }

  /**
   * Extracts coordinate pointer value from MouseEvent or TouchEvent.
   *
   * Извлекает значение координаты указателя из MouseEvent или TouchEvent.
   * @param event Pointer/Touch event / событие указателя или касания
   * @returns numeric coordinate / числовая координата
   */
  getCoordinates(event: MouseEvent | TouchEvent): number {
    const isVertical = Boolean(this.props.vertical)

    if ('targetTouches' in event && event.targetTouches.length > 0) {
      const touch = event.targetTouches[0]
      return isVertical ? touch.clientY : touch.clientX
    }

    if ('touches' in event && event.touches.length > 0) {
      const touch = event.touches[0]
      return isVertical ? touch.clientY : touch.clientX
    }

    const mouseEvent = event as MouseEvent
    return isVertical ? mouseEvent.clientY : mouseEvent.clientX
  }

  /**
   * Handles pointer start interaction (mousedown / touchstart).
   *
   * Обрабатывает начало взаимодействия указателем (mousedown / touchstart).
   * @param event MouseEvent or TouchEvent / событие мыши или касания
   * @param forcedFocus optional explicit handle target / опциональная явная цель ползунка
   */
  readonly onMousedown = (event: MouseEvent | TouchEvent, forcedFocus?: SliderFocusType): void => {
    if (!this.enabled.isEnabled) {
      return
    }

    event.preventDefault()
    event.stopPropagation()

    const coordinate = this.getCoordinates(event)

    if (forcedFocus) {
      this.focus.set(forcedFocus)
    } else {
      this.focus.set(
        this.sliderElement.getTypeByCoordinate(
          coordinate,
          this.minElement.rectangle,
          this.maxElement.rectangle
        )
      )
    }

    this.focus.focus(this.minElement, this.maxElement)

    this.go.updateFromCoordinate(coordinate)
    this.startDrag()
  }

  /**
   * Starts drag global event listeners.
   *
   * Запускает глобальные слушатели событий перетаскивания.
   */
  protected startDrag(): void {
    this.stopDrag()

    const onPointerMove = (event: MouseEvent | TouchEvent): void => {
      const coordinate = this.getCoordinates(event)

      if (coordinate !== this.previousPointerPosition) {
        this.previousPointerPosition = coordinate
        this.go.updateFromCoordinate(coordinate)
      }
    }

    const onPointerEnd = (): void => {
      this.stopDrag()
      this.emitsItem.emit('change')
    }

    window.addEventListener('mousemove', onPointerMove)
    window.addEventListener('mouseup', onPointerEnd)
    window.addEventListener('touchmove', onPointerMove, { passive: false })
    window.addEventListener('touchend', onPointerEnd)
    window.addEventListener('touchcancel', onPointerEnd)

    this.dragCleanup = (): void => {
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('mouseup', onPointerEnd)
      window.removeEventListener('touchmove', onPointerMove)
      window.removeEventListener('touchend', onPointerEnd)
      window.removeEventListener('touchcancel', onPointerEnd)
    }
  }

  /**
   * Stops drag global event listeners.
   *
   * Останавливает глобальные слушатели событий перетаскивания.
   */
  protected stopDrag(): void {
    if (this.dragCleanup) {
      this.dragCleanup()
      this.dragCleanup = undefined
    }
    this.previousPointerPosition = undefined
  }
}
