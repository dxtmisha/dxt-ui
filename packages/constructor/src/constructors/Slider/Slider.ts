import { computed, type Ref, ref, type ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  EventItem,
  isFilled
} from '@dxtmisha/functional'

import type {
  SliderEventPayload,
  SliderMarkItem,
  SliderValue
} from './basicTypes'
import type { SliderProps } from './props'
import type { SliderComponents, SliderEmits, SliderSlots } from './types'

/**
 * Slider
 */
export class Slider {
  readonly focusThumb = ref<'min' | 'max'>('max')
  readonly isDragging = ref(false)

  protected dragListenerMove?: EventItem<Window, Event>
  protected dragListenerEnd?: EventItem<Window, Event>

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
   */
  constructor(
    protected readonly props: SliderProps,
    protected readonly refs: ToRefs<SliderProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SliderComponents, SliderProps>,
    protected readonly slots?: SliderSlots,
    protected readonly emits?: ConstrEmit<SliderEmits>
  ) {}

  /**
   * Minimum bound of the slider.
   */
  get minNumber(): number {
    return this.props.min ?? 0
  }

  /**
   * Maximum bound of the slider.
   */
  get maxNumber(): number {
    return this.props.max ?? 100
  }

  /**
   * Step increment of the slider.
   */
  get stepNumber(): number {
    return this.props.step ?? 1
  }

  /**
   * Computed current slider value (array for multiple, single number otherwise).
   */
  readonly currentValue = computed<SliderValue>(() => {
    const rawValue = this.props.value ?? this.props.modelValue ?? 0
    if (this.props.multiple) {
      if (Array.isArray(rawValue)) {
        return [rawValue[0], rawValue[1]]
      }
      return [this.minNumber, Number(rawValue)]
    }
    return Array.isArray(rawValue) ? rawValue[0] : Number(rawValue)
  })

  /**
   * Minimum active value for multiple range.
   */
  readonly valueMin = computed<number>(() => {
    if (this.props.multiple && Array.isArray(this.currentValue.value)) {
      return this.currentValue.value[0]
    }
    return this.minNumber
  })

  /**
   * Maximum active value for single or multiple range.
   */
  readonly valueMax = computed<number>(() => {
    if (this.props.multiple && Array.isArray(this.currentValue.value)) {
      return this.currentValue.value[1]
    }
    return typeof this.currentValue.value === 'number'
      ? this.currentValue.value
      : this.maxNumber
  })

  /**
   * Convert raw numeric value to percentage between min and max bounds.
   * @param numericValue target number
   */
  toPercent(numericValue: number): number {
    const range = this.maxNumber - this.minNumber
    if (range <= 0) {
      return 0
    }
    const percent = ((numericValue - this.minNumber) / range) * 100
    return Math.max(0, Math.min(100, percent))
  }

  /**
   * Min percentage for track styling and thumb position.
   */
  readonly percentMin = computed<number>(() => {
    return this.props.multiple ? this.toPercent(this.valueMin.value) : 0
  })

  /**
   * Max percentage for track styling and thumb position.
   */
  readonly percentMax = computed<number>(() => {
    return this.toPercent(this.valueMax.value)
  })

  /**
   * Computed list of scale mark items.
   */
  readonly propMarks = computed<SliderMarkItem[] | undefined>(() => {
    if (!this.props.marks) {
      return undefined
    }
    if (Array.isArray(this.props.marks)) {
      return this.props.marks.map((item) => {
        const numericMark = typeof item === 'number' ? item : item.mark ?? item.value
        return {
          mark: numericMark,
          value: typeof item === 'object' && item.value !== undefined ? item.value : numericMark,
          text: typeof item === 'object' && item.text ? item.text : String(numericMark),
          style: {
            '--_sl__mark': `${this.toPercent(numericMark)}%`
          }
        }
      })
    }
    return undefined
  })

  /**
   * Calculate target numeric value from click/drag percentage.
   * @param percent percentage position
   */
  toMarkValue(percent: number): number {
    const rawValue = (this.maxNumber - this.minNumber) * (percent / 100) + this.minNumber
    const stepRatio = Math.round((rawValue - this.minNumber) / this.stepNumber)
    let calculated = stepRatio * this.stepNumber + this.minNumber

    if (this.props.magnet && isFilled(this.propMarks.value)) {
      let nearest = calculated
      let minDifference = Number.MAX_VALUE

      this.propMarks.value.forEach((item) => {
        const difference = Math.abs(item.mark - calculated)
        if (difference < minDifference) {
          nearest = item.mark
          minDifference = difference
        }
      })
      calculated = nearest
    }

    return Math.max(this.minNumber, Math.min(this.maxNumber, calculated))
  }

  /**
   * Extract pointer coordinates from event.
   * @param event pointer event
   */
  getCoordinates(event: MouseEvent | TouchEvent): { x: number; y: number } {
    if ('touches' in event && event.touches.length > 0) {
      return {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      }
    }
    const mouseEvent = event as MouseEvent
    return {
      x: mouseEvent.clientX,
      y: mouseEvent.clientY
    }
  }

  /**
   * Calculate percentage position from element bounding client rect.
   * @param position pointer coordinates
   */
  getMovePercent(position: { x: number; y: number }): number {
    if (!this.element.value) {
      return 0
    }
    const rectangle = this.element.value.getBoundingClientRect()
    if (this.props.vertical) {
      if (rectangle.height <= 0) return 0
      return ((rectangle.bottom - position.y) / rectangle.height) * 100
    }
    if (rectangle.width <= 0) return 0
    return ((position.x - rectangle.left) / rectangle.width) * 100
  }

  /**
   * Emit input/change events.
   * @param newValue updated slider value
   * @param eventName trigger event type
   */
  emitValue(newValue: SliderValue, eventName: 'on-input' | 'on-change' = 'on-input'): void {
    const payload: SliderEventPayload = {
      value: newValue
    }

    if (eventName === 'on-input') {
      this.emits?.('on-input', payload)
      this.emits?.('update:value', newValue)
      this.emits?.('update:modelValue', newValue)
    } else {
      this.emits?.('on-change', payload)
    }
  }

  /**
   * Determine which thumb (min or max) is closer to pointer position.
   * @param percent pointer percentage
   */
  determineFocusThumb(percent: number): 'min' | 'max' {
    if (!this.props.multiple) {
      return 'max'
    }
    const distanceMin = Math.abs(percent - this.percentMin.value)
    const distanceMax = Math.abs(percent - this.percentMax.value)
    return distanceMin < distanceMax ? 'min' : 'max'
  }

  /**
   * Update active slider value for currently focused thumb.
   * @param numericValue target number
   * @param eventName trigger event type
   */
  updateValueByThumb(numericValue: number, eventName: 'on-input' | 'on-change' = 'on-input'): void {
    const minimumDistance = this.props.minimumDistance ?? 0

    if (this.props.multiple) {
      let currentMin = this.valueMin.value
      let currentMax = this.valueMax.value

      if (this.focusThumb.value === 'min') {
        currentMin = Math.min(numericValue, currentMax - minimumDistance)
        currentMin = Math.max(this.minNumber, currentMin)
      } else {
        currentMax = Math.max(numericValue, currentMin + minimumDistance)
        currentMax = Math.min(this.maxNumber, currentMax)
      }

      this.emitValue([currentMin, currentMax], eventName)
    } else {
      const clamped = Math.max(this.minNumber, Math.min(this.maxNumber, numericValue))
      this.emitValue(clamped, eventName)
    }
  }

  /**
   * Start drag operation on pointer down.
   * @param event pointer event
   */
  onMousedown(event: MouseEvent | TouchEvent): void {
    if (this.props.disabled || this.props.readonly) {
      return
    }

    const coordinates = this.getCoordinates(event)
    const percent = this.getMovePercent(coordinates)

    this.focusThumb.value = this.determineFocusThumb(percent)
    this.isDragging.value = true

    const targetValue = this.toMarkValue(percent)
    this.updateValueByThumb(targetValue, 'on-input')

    this.stopDragListeners()

    this.dragListenerMove = new EventItem<Window, Event>(
      window,
      'mousemove',
      (moveEvent: Event) => this.onPointerMove(moveEvent as MouseEvent)
    )
    this.dragListenerEnd = new EventItem<Window, Event>(
      window,
      'mouseup',
      (endEvent: Event) => this.onPointerUp(endEvent as MouseEvent)
    )

    this.dragListenerMove.start()
    this.dragListenerEnd.start()
  }

  /**
   * Process pointer move during drag.
   * @param event pointer event
   */
  protected onPointerMove(event: MouseEvent | TouchEvent): void {
    if (!this.isDragging.value) {
      return
    }
    const coordinates = this.getCoordinates(event)
    const percent = this.getMovePercent(coordinates)
    const targetValue = this.toMarkValue(percent)
    this.updateValueByThumb(targetValue, 'on-input')
  }

  /**
   * Process pointer up to end drag.
   * @param event pointer event
   */
  protected onPointerUp(event: MouseEvent | TouchEvent): void {
    if (!this.isDragging.value) {
      return
    }
    const coordinates = this.getCoordinates(event)
    const percent = this.getMovePercent(coordinates)
    const targetValue = this.toMarkValue(percent)

    this.updateValueByThumb(targetValue, 'on-change')
    this.isDragging.value = false
    this.stopDragListeners()
  }

  /**
   * Stop active window drag listeners.
   */
  protected stopDragListeners(): void {
    this.dragListenerMove?.stop()
    this.dragListenerEnd?.stop()
  }

  /**
   * Keyboard arrow navigation.
   * @param event keyboard event
   */
  onKeydown(event: KeyboardEvent): void {
    if (this.props.disabled || this.props.readonly) {
      return
    }

    const step = this.stepNumber
    let currentValue = this.focusThumb.value === 'min' ? this.valueMin.value : this.valueMax.value

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        currentValue += step
        event.preventDefault()
        break
      case 'ArrowLeft':
      case 'ArrowDown':
        currentValue -= step
        event.preventDefault()
        break
      default:
        return
    }

    this.updateValueByThumb(currentValue, 'on-input')
    this.updateValueByThumb(currentValue, 'on-change')
  }
}
