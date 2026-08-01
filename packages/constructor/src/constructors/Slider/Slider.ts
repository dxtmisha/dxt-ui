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

import { ModelValueInclude } from '../../classes/ModelValueInclude'
import { SliderElement } from './SliderElement'
import { SliderMarks } from './SliderMarks'
import { SliderMarksData } from './SliderMarksData'
import { SliderThumb } from './SliderThumb'

import type { SliderComponents, SliderEmits, SliderSlots } from './types'
import type { SliderEventDetail, SliderValueType } from './basicTypes'
import type { SliderProps } from './props'

/**
 * Slider orchestrator class.
 * Manages slider value state, range handling, drag interaction, keyboard navigation, and ARIA attributes.
 *
 * Оркестраторный класс слайдера.
 * Управляет состоянием значения слайдера, обработкой диапазона, перетаскиванием, клавиатурной навигацией и ARIA-атрибутами.
 */
export class Slider {
  /** Active handle focus ('min' or 'max') / Фокус активного ползунка ('min' или 'max') */
  readonly focus = ref<'min' | 'max'>('max')

  /** Min thumb handle manager / Менеджер минимального ползунка */
  readonly min: SliderThumb

  /** Max thumb handle manager / Менеджер максимального ползунка */
  readonly max: SliderThumb

  /** Slider element manager instance / Экземпляр менеджера элементов слайдера */
  readonly sliderElement: SliderElement

  /** Slider marks data manager instance / Экземпляр менеджера данных меток слайдера */
  readonly marksData: SliderMarksData

  /** Slider marks manager instance / Экземпляр менеджера меток слайдера */
  readonly marks: SliderMarks

  /** Model value include helper / Помощник значения модели */
  readonly model: ModelValueInclude<SliderValueType>

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
      ModelValueIncludeConstructor?: typeof ModelValueInclude<SliderValueType>
      SliderElementConstructor?: typeof SliderElement
      SliderMarksConstructor?: typeof SliderMarks
      SliderMarksDataConstructor?: typeof SliderMarksData
      SliderThumbConstructor?: typeof SliderThumb
    } = {}
  ) {
    const {
      ModelValueIncludeConstructor = ModelValueInclude,
      SliderElementConstructor = SliderElement,
      SliderMarksConstructor = SliderMarks,
      SliderMarksDataConstructor = SliderMarksData,
      SliderThumbConstructor = SliderThumb
    } = constructors

    this.sliderElement = new SliderElementConstructor(this.props)
    this.marksData = new SliderMarksDataConstructor(this.props, this.className)
    this.marks = new SliderMarksConstructor(this.props, this.className, this.marksData)

    this.min = new SliderThumbConstructor('min', this.marks, () => this.markMin)
    this.max = new SliderThumbConstructor('max', this.marks, () => this.markMax)

    this.model = new ModelValueIncludeConstructor(
      'value',
      this.emits,
      undefined,
      this.refs.value,
      this.refs.readonly,
      this.refs.multiple
    )

    if (this.model.value.value === undefined) {
      this.model.value.value = this.getInitialValue()
    }

    onUnmounted(() => {
      this.stopDrag()
    })
  }

  /**
   * Returns reactive reference to model value.
   *
   * Возвращает реактивную ссылку на значение модели.
   * @returns reactive reference to value / реактивная ссылка на значение
   */
  get value(): Ref<SliderValueType> {
    return this.model.value as Ref<SliderValueType>
  }

  /**
   * Returns current numeric min value in pair or 0.
   *
   * Возвращает текущее числовое минимальное значение в паре или 0.
   * @returns mark min / минимальное значение
   */
  get markMin(): number {
    const currentValue = this.value.value
    if (this.props.multiple && isArray(currentValue)) {
      return currentValue[0] ?? this.marksData.minNumber
    }
    return this.marksData.minNumber
  }

  /**
   * Returns current numeric max value in pair or single value.
   *
   * Возвращает текущее числовое максимальное значение в паре или одиночное значение.
   * @returns mark max / максимальное значение
   */
  get markMax(): number {
    const currentValue = this.value.value
    if (isArray(currentValue)) {
      return currentValue[1] ?? currentValue[0] ?? this.marksData.maxNumber
    }
    return typeof currentValue === 'number' ? currentValue : this.marksData.maxNumber
  }

  /**
   * Returns text string for min thumb label.
   *
   * Возвращает текстовую строку для метки минимального ползунка.
   * @returns min label text / текст метки мин
   */
  get minLabelText(): string {
    return this.min.labelText
  }

  /**
   * Returns text string for max thumb label.
   *
   * Возвращает текстовую строку для метки максимального ползунка.
   * @returns max label text / текст метки макс
   */
  get maxLabelText(): string {
    return this.max.labelText
  }

  /**
   * Checks if ripple animation is enabled.
   *
   * Проверяет, включена ли анимация ripple.
   * @returns check result / результат проверки
   */
  get isRipple(): boolean {
    return Boolean(this.props.ripple && this.props.appearance !== 'drop' && !this.props.disabled && !this.props.readonly)
  }

  /**
   * Computed class list for root element.
   *
   * Вычисляемый список классов для корневого элемента.
   * @returns computed classes / вычисленные классы
   */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--disabled`]: Boolean(this.props.disabled),
      [`${this.className}--readonly`]: Boolean(this.props.readonly),
      [`${this.className}--vertical`]: Boolean(this.props.vertical),
      [`${this.className}--mark`]: this.marksData.is(),
      [`${this.className}--appearance--${this.props.appearance}`]: Boolean(this.props.appearance)
    }
  }

  /**
   * Computed CSS custom property styles.
   *
   * Вычисляемые стили пользовательских переменных CSS.
   * @returns style dictionary / словарь стилей
   */
  get styles(): ConstrStyles {
    const minPercent = this.marksData.toPercent(this.markMin)
    const maxPercent = this.marksData.toPercent(this.markMax)

    return {
      [`--${this.className}-sys-thumb-min-x`]: `${minPercent}%`,
      [`--${this.className}-sys-thumb-max-x`]: `${maxPercent}%`
    }
  }

  /**
   * Returns BoundingClientRect for min thumb handle button.
   *
   * Возвращает BoundingClientRect для кнопки минимального ползунка.
   * @returns DOMRect or undefined / DOMRect или undefined
   */
  getMinRectangle(): DOMRect | undefined {
    return this.min.getRectangle()
  }

  /**
   * Returns BoundingClientRect for max thumb handle button.
   *
   * Возвращает BoundingClientRect для кнопки максимального ползунка.
   * @returns DOMRect or undefined / DOMRect или undefined
   */
  getMaxRectangle(): DOMRect | undefined {
    return this.max.getRectangle()
  }

  /**
   * Returns BoundingClientRect for slider root container.
   *
   * Возвращает BoundingClientRect для корневого контейнера слайдера.
   * @returns DOMRect or undefined / DOMRect или undefined
   */
  getSliderRectangle(): DOMRect | undefined {
    return this.element.value?.getBoundingClientRect()
  }

  /**
   * Emits input and change events with detail payload.
   *
   * Испускает события input и change с объектом деталей.
   * @param eventName event key / имя события
   */
  emitEvent(eventName: 'input' | 'change'): void {
    const detail = this.getEventDetail()
    ;(this.emits as any)?.(eventName, this.value.value, detail)
  }

  /**
   * Builds detail object payload for events.
   *
   * Формирует объект деталей для событий.
   * @returns event detail object / объект деталей события
   */
  getEventDetail(): SliderEventDetail {
    if (this.props.multiple) {
      const minItem = this.min.item
      const maxItem = this.max.item
      return {
        mark: [this.markMin, this.markMax],
        item: [minItem, maxItem],
        value: [minItem.value, maxItem.value]
      }
    } else {
      const maxItem = this.max.item
      return {
        mark: this.markMax,
        item: maxItem,
        value: maxItem.value
      }
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
      const checkedMin = this.marks.checkValue(targetValue[0], this.markMin, this.markMax, 'min')
      const checkedMax = this.marks.checkValue(targetValue[1], checkedMin, this.markMax, 'max')
      this.value.value = [checkedMin, checkedMax]
    } else if (typeof targetValue === 'number') {
      const checkedValue = this.marks.checkValue(targetValue, this.markMin, this.markMax, focusType)

      if (this.props.multiple) {
        if (focusType === 'min') {
          this.value.value = [checkedValue, this.markMax]
        } else {
          this.value.value = [this.markMin, checkedValue]
        }
      } else {
        this.value.value = checkedValue
      }
    }

    this.emitEvent('input')
  }

  /**
   * Position update from pointer coordinate.
   *
   * Обновление позиции по координате указателя.
   * @param coordinate pointer coordinate / координата указателя
   */
  updateFromCoordinate(coordinate: number): void {
    const sliderRect = this.getSliderRectangle()
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
    if (this.props.disabled || this.props.readonly) {
      return
    }
    const currentActiveValue = this.focus.value === 'min' ? this.markMin : this.markMax
    const nextValue = this.marks.getMarkNeighbor(currentActiveValue, true)
    this.setValue(nextValue, this.focus.value)
    this.emitEvent('change')
  }

  /**
   * Decreases active thumb value by step or neighbor mark.
   *
   * Уменьшает значение активного ползунка на шаг или соседнюю метку.
   */
  decrease(): void {
    if (this.props.disabled || this.props.readonly) {
      return
    }
    const currentActiveValue = this.focus.value === 'min' ? this.markMin : this.markMax
    const prevValue = this.marks.getMarkNeighbor(currentActiveValue, false)
    this.setValue(prevValue, this.focus.value)
    this.emitEvent('change')
  }

  /**
   * Handles keyboard navigation events on thumb handle buttons.
   *
   * Обрабатывает события клавиатурной навигации на кнопках ползунков.
   * @param event KeyboardEvent / событие клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    if (this.props.disabled || this.props.readonly) {
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
        this.emitEvent('change')
        break
      case 'End':
        event.preventDefault()
        this.setValue(this.marksData.maxNumber, this.focus.value)
        this.emitEvent('change')
        break
      case 'PageUp': {
        event.preventDefault()
        const range = this.marksData.maxNumber - this.marksData.minNumber
        const pageStep = Math.max(this.marksData.stepNumber, Math.round(range * 0.1))
        const currentValue = this.focus.value === 'min' ? this.markMin : this.markMax
        this.setValue(currentValue + pageStep, this.focus.value)
        this.emitEvent('change')
        break
      }
      case 'PageDown': {
        event.preventDefault()
        const range = this.marksData.maxNumber - this.marksData.minNumber
        const pageStep = Math.max(this.marksData.stepNumber, Math.round(range * 0.1))
        const currentValue = this.focus.value === 'min' ? this.markMin : this.markMax
        this.setValue(currentValue - pageStep, this.focus.value)
        this.emitEvent('change')
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
    if (this.props.disabled || this.props.readonly) {
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
        this.getMinRectangle(),
        this.getMaxRectangle()
      )
    }

    if (this.focus.value === 'min') {
      this.min.focus()
    } else {
      this.max.focus()
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
      this.emitEvent('change')
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
