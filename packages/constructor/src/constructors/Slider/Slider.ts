import {
  onUnmounted,
  ref,
  type Ref,
  type ToRefs
} from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrStyles,
  type DesignComp,
  isArray
} from '@dxtmisha/functional'

import { EnabledInclude } from '../../classes/EnabledInclude'
import { ModelValueInclude } from '../../classes/ModelValueInclude'

import { SliderElement } from './SliderElement'
import { SliderEmit } from './SliderEmit'
import { SliderMarks } from './SliderMarks'
import { SliderMarksData } from './SliderMarksData'
import { SliderThumbMin } from './SliderThumbMin'
import { SliderThumbMax } from './SliderThumbMax'
import { SliderValue } from './SliderValue'

import type { SliderValueType } from './basicTypes'
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
  /** Enabled include helper instance / Экземпляр помощника состояния активности */
  readonly enabled: EnabledInclude

  /** Slider emit manager instance / Экземпляр менеджера событий слайдера */
  readonly emitsItem: SliderEmit

  /** Active handle focus ('min' or 'max') / Фокус активного ползунка ('min' или 'max') */
  readonly focus = ref<'min' | 'max'>('max')

  /** Min thumb handle manager / Менеджер минимального ползунка */
  readonly minElement: SliderThumbMin

  /** Max thumb handle manager / Менеджер максимального ползунка */
  readonly maxElement: SliderThumbMax

  /** Slider element manager instance / Экземпляр менеджера элементов слайдера */
  readonly sliderElement: SliderElement

  /** Slider marks data manager instance / Экземпляр менеджера данных меток слайдера */
  readonly marksData: SliderMarksData

  /** Slider marks manager instance / Экземпляр менеджера меток слайдера */
  readonly marks: SliderMarks

  /** Model value include helper / Помощник значения модели */
  readonly model: ModelValueInclude<SliderValueType>

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
      SliderMarksConstructor?: typeof SliderMarks
      SliderMarksDataConstructor?: typeof SliderMarksData
      SliderThumbMinConstructor?: typeof SliderThumbMin
      SliderThumbMaxConstructor?: typeof SliderThumbMax
      SliderValueConstructor?: typeof SliderValue
    } = {}
  ) {
    const {
      EnabledIncludeConstructor = EnabledInclude,
      ModelValueIncludeConstructor = ModelValueInclude,
      SliderElementConstructor = SliderElement,
      SliderEmitConstructor = SliderEmit,
      SliderMarksConstructor = SliderMarks,
      SliderMarksDataConstructor = SliderMarksData,
      SliderThumbMinConstructor = SliderThumbMin,
      SliderThumbMaxConstructor = SliderThumbMax,
      SliderValueConstructor = SliderValue
    } = constructors

    this.enabled = new EnabledIncludeConstructor(props)

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
    this.value = new SliderValueConstructor(this.model, this.marksData, props)

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

    if (this.model.getValue() === undefined) {
      this.model.value.value = this.getInitialValue()
    }

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
   * Gets initial value from props or defaults.
   *
   * Получает начальное значение из свойств или по умолчанию.
   * @returns initial value / начальное значение
   */
  protected getInitialValue(): SliderValueType {
    if (this.props.value !== undefined) {
      return this.props.value
    }
    if (this.props.modelValue !== undefined) {
      return this.props.modelValue
    }
    if (this.props.default !== undefined) {
      return this.props.default
    }
    return this.props.multiple ? [this.marksData.minNumber, this.marksData.maxNumber] : this.marksData.minNumber
  }

  /**
   * Programmatically sets slider value.
   *
   * Программно устанавливает значение слайдера.
   * @param targetValue new slider value / новое значение слайдера
   * @param focusType handle focus / фокус ползунка
   */
  setValue(targetValue: SliderValueType, focusType: 'min' | 'max' = 'max'): void {
    this.focus.value = focusType

    if (this.props.multiple && isArray(targetValue)) {
      const checkedMin = this.marks.checkValue(targetValue[0], this.value.min, this.value.max, 'min')
      const checkedMax = this.marks.checkValue(targetValue[1], checkedMin, this.value.max, 'max')
      this.model.value.value = [checkedMin, checkedMax]
    } else if (typeof targetValue === 'number') {
      const checkedValue = this.marks.checkValue(targetValue, this.value.min, this.value.max, focusType)

      if (this.props.multiple) {
        if (focusType === 'min') {
          this.model.value.value = [checkedValue, this.value.max]
        } else {
          this.model.value.value = [this.value.min, checkedValue]
        }
      } else {
        this.model.value.value = checkedValue
      }
    }

    this.emitsItem.emit('input')
  }

  /**
   * Position update from pointer coordinate.
   *
   * Обновление позиции по координате указателя.
   * @param coordinate pointer coordinate / координата указателя
   */
  updateFromCoordinate(coordinate: number): void {
    const sliderRect = this.sliderElement.rectangle
    if (!sliderRect) {
      return
    }

    const percentage = this.sliderElement.getMovePercent(coordinate, sliderRect)
    const markValue = this.marks.toMark(percentage)

    this.setValue(markValue, this.focus.value)
  }

  /**
   * Increases active thumb value by step or neighbor mark.
   *
   * Увеличивает значение активного ползунка на шаг или соседнюю метку.
   */
  increase(): void {
    if (!this.enabled.isEnabled) {
      return
    }
    const currentActiveValue = this.focus.value === 'min' ? this.value.min : this.value.max
    const nextValue = this.marks.getMarkNeighbor(currentActiveValue, true)
    this.setValue(nextValue, this.focus.value)
    this.emitsItem.emit('change')
  }

  /**
   * Decreases active thumb value by step or neighbor mark.
   *
   * Уменьшает значение активного ползунка на шаг или соседнюю метку.
   */
  decrease(): void {
    if (!this.enabled.isEnabled) {
      return
    }
    const currentActiveValue = this.focus.value === 'min' ? this.value.min : this.value.max
    const prevValue = this.marks.getMarkNeighbor(currentActiveValue, false)
    this.setValue(prevValue, this.focus.value)
    this.emitsItem.emit('change')
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
        this.increase()
        break
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault()
        this.decrease()
        break
      case 'Home':
        event.preventDefault()
        this.setValue(this.marksData.minNumber, this.focus.value)
        this.emitsItem.emit('change')
        break
      case 'End':
        event.preventDefault()
        this.setValue(this.marksData.maxNumber, this.focus.value)
        this.emitsItem.emit('change')
        break
      case 'PageUp': {
        event.preventDefault()
        const range = this.marksData.maxNumber - this.marksData.minNumber
        const pageStep = Math.max(this.marksData.stepNumber, Math.round(range * 0.1))
        const currentValue = this.focus.value === 'min' ? this.value.min : this.value.max
        this.setValue(currentValue + pageStep, this.focus.value)
        this.emitsItem.emit('change')
        break
      }
      case 'PageDown': {
        event.preventDefault()
        const range = this.marksData.maxNumber - this.marksData.minNumber
        const pageStep = Math.max(this.marksData.stepNumber, Math.round(range * 0.1))
        const currentValue = this.focus.value === 'min' ? this.value.min : this.value.max
        this.setValue(currentValue - pageStep, this.focus.value)
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
  readonly onMousedown = (event: MouseEvent | TouchEvent, forcedFocus?: 'min' | 'max'): void => {
    if (!this.enabled.isEnabled) {
      return
    }

    event.preventDefault()
    event.stopPropagation()

    const coordinate = this.getCoordinates(event)

    if (forcedFocus) {
      this.focus.value = forcedFocus
    } else {
      this.focus.value = this.sliderElement.getTypeByCoordinate(
        coordinate,
        this.minElement.rectangle,
        this.maxElement.rectangle
      )
    }

    if (this.focus.value === 'min') {
      this.minElement.focus()
    } else {
      this.maxElement.focus()
    }

    this.updateFromCoordinate(coordinate)
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
        this.updateFromCoordinate(coordinate)
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
