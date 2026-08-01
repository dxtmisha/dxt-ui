import {
  computed,
  nextTick,
  onMounted,
  ref,
  watch,
  type ComputedRef,
  type Ref,
  type ToRefs
} from 'vue'
import {
  EventItem,
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import type {
  SliderEventPayload,
  SliderMarkItem,
  SliderMarksValue
} from './basicTypes'
import type { SliderProps } from './props'
import type {
  SliderComponents,
  SliderEmits,
  SliderExpose,
  SliderSlots
} from './types'

/**
 * Class representing the logical implementation of the Slider component.
 *
 * Класс, представляющий логическую реализацию компонента Slider.
 */
export class Slider implements SliderExpose {
  /** Reference for active focused thumb button ('min' or 'max') */
  readonly focusThumb = ref<'min' | 'max'>('max')

  /** Reference to minimum thumb HTML button element */
  readonly elementMin = ref<HTMLButtonElement | undefined>(undefined)

  /** Reference to maximum thumb HTML button element */
  readonly elementMax = ref<HTMLButtonElement | undefined>(undefined)

  /** Reference to minimum thumb label HTML element */
  readonly elementMinLabel = ref<HTMLElement | undefined>(undefined)

  /** Reference to maximum thumb label HTML element */
  readonly elementMaxLabel = ref<HTMLElement | undefined>(undefined)

  /** Reactive internal mark value or range tuple */
  readonly propMark: Ref<number | [number, number]>

  /** Event listener instance for global mouse and touch drag movement */
  protected dragEventMove?: EventItem<Document, Event>

  /** Event listener instance for global mouse and touch drag release */
  protected dragEventEnd?: EventItem<Document, Event>

  /** Last recorded point during drag movement */
  protected lastPoint?: number

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits function called when an event is triggered / функция вызывается при срабатывании события
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
  ) {
    this.propMark = ref(this.getInitialMark(this.props.value ?? this.props.modelValue))

    watch(
      () => [this.props.value, this.props.modelValue],
      async () => {
        const incomingValue = this.props.value ?? this.props.modelValue
        this.propMark.value = this.getInitialMark(incomingValue)
        await nextTick()
        this.updateAllPositions()
      }
    )

    watch(
      () => this.props.multiple,
      () => this.updateAllPositions()
    )

    onMounted(() => {
      this.updateAllPositions()
    })
  }

  /**
   * Minimum slider value computed getter.
   */
  readonly valueMin: ComputedRef<number> = computed<number>(() => {
    if (this.props.multiple) {
      return Array.isArray(this.propMark.value) ? (this.propMark.value[0] ?? 0) : 0
    }
    return 0
  })

  /**
   * Maximum slider value computed getter.
   */
  readonly valueMax: ComputedRef<number> = computed<number>(() => {
    if (this.props.multiple || Array.isArray(this.propMark.value)) {
      return Array.isArray(this.propMark.value)
        ? (this.propMark.value[1] ?? 100)
        : (typeof this.propMark.value === 'number' ? this.propMark.value : 100)
    }
    return typeof this.propMark.value === 'number' ? this.propMark.value : 0
  })

  /**
   * Current slider value (single number or range tuple) computed getter.
   */
  readonly currentValue: ComputedRef<number | number[]> = computed<number | number[]>(() => {
    if (this.props.multiple) {
      return [this.valueMin.value, this.valueMax.value]
    }
    return this.valueMax.value
  })

  /**
   * Parsed list of marks for display.
   */
  readonly parsedMarks: ComputedRef<SliderMarkItem[] | undefined> = computed<
    SliderMarkItem[] | undefined
  >(() => {
    if (!this.props.marks) {
      return undefined
    }

    const marksList: SliderMarkItem[] = []
    const rawMarks = this.props.marks

    if (Array.isArray(rawMarks)) {
      rawMarks.forEach((item) => {
        if (typeof item === 'number' || typeof item === 'string') {
          const numValue = Number(item)
          marksList.push({
            mark: numValue,
            text: String(item),
            value: numValue,
            style: {
              [`--${this.className}-sys-mark-position`]: `${this.toPercent(numValue)}%`
            }
          })
        } else if (item && typeof item === 'object') {
          const markValue = Number(item.mark ?? item.value ?? 0)
          marksList.push({
            ...item,
            mark: markValue,
            text: String(item.text ?? item.value ?? markValue),
            value: item.value ?? markValue,
            style: {
              [`--${this.className}-sys-mark-position`]: `${this.toPercent(markValue)}%`
            }
          })
        }
      })
    } else if (typeof rawMarks === 'object') {
      Object.entries(rawMarks as Record<number, string>).forEach(([key, textValue]) => {
        const numKey = Number(key)
        marksList.push({
          mark: numKey,
          text: String(textValue),
          value: numKey,
          style: {
            [`--${this.className}-sys-mark-position`]: `${this.toPercent(numKey)}%`
          }
        })
      })
    }

    return marksList.length > 0 ? marksList : undefined
  })

  /**
   * Helper to convert numeric value to percentage between min and max.
   * @param value numeric value
   */
  toPercent(value: number): number {
    const range = (this.props.max ?? 100) - (this.props.min ?? 0)
    if (range <= 0) {
      return 0
    }
    return (100 / range) * (value - (this.props.min ?? 0))
  }

  /**
   * Returns initial mark state from input prop.
   * @param inputVal incoming value
   */
  protected getInitialMark(inputVal?: number | number[]): number | [number, number] {
    if (Array.isArray(inputVal)) {
      return [inputVal[0] ?? (this.props.min ?? 0), inputVal[1] ?? (this.props.max ?? 100)]
    }
    if (typeof inputVal === 'number') {
      return inputVal
    }
    return this.props.min ?? 0
  }

  /**
   * Returns display text for given numeric value.
   * @param value mark value
   */
  getText(value: number): string {
    if (this.parsedMarks.value) {
      const match = this.parsedMarks.value.find((item) => item.mark === value)
      if (match) {
        return match.text
      }
    }
    return String(value)
  }

  /**
   * Finds neighboring marks for magnetic snap navigation.
   */
  protected getNeighborMark(): [number | undefined, number | undefined] {
    if (!this.parsedMarks.value) {
      return [undefined, undefined]
    }

    const currentMarkValue =
      this.focusThumb.value === 'min' ? this.valueMin.value : this.valueMax.value
    let previousMark: number | undefined
    let nextMark: number | undefined

    this.parsedMarks.value.forEach((item) => {
      if (item.mark < currentMarkValue) {
        previousMark = item.mark
      } else if (item.mark > currentMarkValue && nextMark === undefined) {
        nextMark = item.mark
      }
    })

    return [previousMark, nextMark]
  }

  /**
   * Converts raw drag percent into nearest stepped or magnetic mark.
   * @param percent position percentage
   */
  toMark(percent: number): number {
    const minValue = this.props.min ?? 0
    const maxValue = this.props.max ?? 100
    const stepValue = this.props.step ?? 1

    const rawMark =
      Math.round(((maxValue - minValue) / 100 * percent + minValue) / stepValue) * stepValue

    if (this.props.magnet && this.parsedMarks.value) {
      let closestMark = rawMark
      let minDifference = Infinity

      this.parsedMarks.value.forEach((item) => {
        const difference = Math.abs(item.mark - rawMark)
        if (difference < minDifference) {
          closestMark = item.mark
          minDifference = difference
        }
      })

      return closestMark
    }

    return rawMark
  }

  /**
   * Validates and clamps given value according to bounds and minimum distance.
   * @param value candidate value
   */
  checkValue(value: number): number {
    const minValue = this.props.min ?? 0
    const maxValue = this.props.max ?? 100
    const minDistance = this.props.minimumDistance ?? 1

    if (this.props.multiple) {
      const currentMin = this.valueMin.value
      const currentMax = this.valueMax.value
      let clampedValue = value

      switch (this.focusThumb.value) {
        case 'min':
          if (value > currentMax - minDistance) {
            clampedValue = currentMax - minDistance
          } else if (value < minValue) {
            clampedValue = minValue
          }
          break
        case 'max':
          if (value < currentMin + minDistance) {
            clampedValue = currentMin + minDistance
          } else if (value > maxValue) {
            clampedValue = maxValue
          }
          break
      }

      return clampedValue
    }

    if (value < minValue) {
      return minValue
    }
    if (value > maxValue) {
      return maxValue
    }
    return value
  }

  /**
   * Updates state value for specified thumb ('min' or 'max').
   * @param type thumb selector
   * @param value new mark value
   * @param eventType optional event emit trigger
   */
  protected setValue(
    type: 'min' | 'max',
    value: number,
    eventType?: 'on-input' | 'on-change'
  ): void {
    if (this.props.multiple) {
      const key = type === 'min' ? 0 : 1
      if (!Array.isArray(this.propMark.value)) {
        this.propMark.value = [this.props.min ?? 0, this.props.max ?? 100]
      }
      if (this.propMark.value[key] !== value) {
        this.propMark.value[key] = value
        if (eventType) {
          this.emit(eventType)
        }
      }
    } else if (this.propMark.value !== value) {
      this.propMark.value = value
      if (eventType) {
        this.emit(eventType)
      }
    }
  }

  /**
   * Emits slider update event.
   * @param eventType type of event
   */
  emit(eventType: 'on-input' | 'on-change'): void {
    const minMatch = this.parsedMarks.value?.find((item) => item.mark === this.valueMin.value) ?? {
      mark: this.valueMin.value,
      text: String(this.valueMin.value),
      value: this.valueMin.value
    }

    const maxMatch = this.parsedMarks.value?.find((item) => item.mark === this.valueMax.value) ?? {
      mark: this.valueMax.value,
      text: String(this.valueMax.value),
      value: this.valueMax.value
    }

    const items = this.props.multiple ? [minMatch, maxMatch] : maxMatch

    const payload: SliderEventPayload = {
      value: this.currentValue.value,
      mark: this.propMark.value,
      item: items
    }

    this.emits?.(eventType, payload)
    this.emits?.('update:value', payload.value)
    this.emits?.('update:modelValue', payload.value)
  }

  /**
   * Updates position CSS variables and label texts.
   * @param mark candidate mark
   * @param eventType event to emit
   */
  updatePosition(mark: number, eventType?: 'on-input' | 'on-change'): void {
    const checkedMark = this.checkValue(mark)
    let percent = this.toPercent(checkedMark)

    if (percent < 0) {
      percent = 0
    } else if (percent > 100) {
      percent = 100
    }

    this.setValue(this.focusThumb.value, checkedMark, eventType)
    this.updateStyleVariable(this.focusThumb.value, percent)
    this.updateTextLabels()
  }

  /**
   * Recalculates and updates both thumb positions and text labels.
   */
  updateAllPositions(): void {
    const minPercent = this.toPercent(this.valueMin.value)
    const maxPercent = this.toPercent(this.valueMax.value)

    this.updateStyleVariable('min', minPercent < 0 ? 0 : minPercent > 100 ? 100 : minPercent)
    this.updateStyleVariable('max', maxPercent < 0 ? 0 : maxPercent > 100 ? 100 : maxPercent)
    this.updateTextLabels()
  }

  /**
   * Sets CSS custom property on main slider container element.
   * @param type thumb type ('min' or 'max')
   * @param percent percentage value
   */
  protected updateStyleVariable(type: 'min' | 'max', percent: number): void {
    if (this.element.value) {
      const varName = `--${this.className}-sys-${type}-x`
      this.element.value.style.setProperty(varName, `${percent}%`)
    }
  }

  /**
   * Updates inner text of label elements.
   */
  protected updateTextLabels(): void {
    if (this.elementMinLabel.value) {
      this.elementMinLabel.value.innerText = this.getText(this.valueMin.value)
    }
    if (this.elementMaxLabel.value) {
      this.elementMaxLabel.value.innerText = this.getText(this.valueMax.value)
    }
  }

  /**
   * Extracts screen coordinate from mouse or touch event.
   * @param event mouse or touch event
   */
  getCoordinates(event: MouseEvent | TouchEvent): number {
    const touchEvent = event as TouchEvent
    const mouseEvent = event as MouseEvent

    if (this.props.vertical) {
      return (
        touchEvent.targetTouches?.[0]?.clientY ??
        touchEvent.touches?.[0]?.clientY ??
        mouseEvent.clientY ??
        0
      )
    }

    return (
      touchEvent.targetTouches?.[0]?.clientX ??
      touchEvent.touches?.[0]?.clientX ??
      mouseEvent.clientX ??
      0
    )
  }

  /**
   * Converts coordinate to percent position relative to slider bounding rect.
   * @param coordinate client X or Y coordinate
   */
  getMovePercent(coordinate: number): number {
    if (!this.element.value) {
      return 0
    }

    const rect = this.element.value.getBoundingClientRect()
    if (this.props.vertical) {
      if (rect.height <= 0) {
        return 0
      }
      return (100 / rect.height) * (rect.bottom - coordinate)
    }

    if (rect.width <= 0) {
      return 0
    }
    return (100 / rect.width) * (coordinate - rect.left)
  }

  /**
   * Determines whether coordinate target is closer to min or max thumb button.
   * @param coordinate client X or Y coordinate
   */
  getTypeByFocus(coordinate: number): 'min' | 'max' {
    if (this.props.multiple && this.elementMin.value && this.elementMax.value) {
      const rectMin = this.elementMin.value.getBoundingClientRect()
      const rectMax = this.elementMax.value.getBoundingClientRect()
      const indexProp = this.props.vertical ? 'top' : 'left'

      return Math.abs(rectMin[indexProp] - coordinate) < Math.abs(rectMax[indexProp] - coordinate)
        ? 'min'
        : 'max'
    }

    return 'max'
  }

  /**
   * Handles user interaction start (mousedown / touchstart).
   * @param event mouse or touch event
   */
  readonly onMousedown = (event: MouseEvent | TouchEvent): void => {
    if (this.props.disabled || this.props.readonly) {
      return
    }

    const coordinate = this.getCoordinates(event)
    this.focusThumb.value = this.getTypeByFocus(coordinate)

    const targetElement =
      this.focusThumb.value === 'min' ? this.elementMin.value : this.elementMax.value
    targetElement?.focus()

    document.body.classList.add(`${this.className}__body--dragging`)

    event.preventDefault()
    event.stopPropagation()

    this.updatePosition(this.toMark(this.getMovePercent(coordinate)), 'on-input')

    this.stopDragListeners()

    const onMove = (moveEvent: Event) => {
      const currentCoordinate = this.getCoordinates(moveEvent as MouseEvent | TouchEvent)
      if (currentCoordinate !== this.lastPoint) {
        this.updatePosition(this.toMark(this.getMovePercent(currentCoordinate)), 'on-input')
        this.lastPoint = currentCoordinate
      }
    }

    const onEnd = () => {
      this.stopDragListeners()
      document.body.classList.remove(`${this.className}__body--dragging`)
      this.emit('on-change')
    }

    this.dragEventMove = new EventItem(
      document,
      ['mousemove', 'touchmove'],
      onMove,
      { passive: false }
    ).start()

    this.dragEventEnd = new EventItem(
      document,
      ['mouseup', 'contextmenu', 'touchend', 'touchcancel'],
      onEnd
    ).start()
  }

  /**
   * Stops active drag movement event listeners.
   */
  protected stopDragListeners(): void {
    this.dragEventMove?.stop()
    this.dragEventEnd?.stop()
    this.dragEventMove = undefined
    this.dragEventEnd = undefined
  }

  /**
   * Handles keyboard navigation on thumb buttons.
   * @param event keyboard event
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
    }
  }

  /**
   * Increases slider value by step or to next mark.
   */
  increase(): void {
    const [_, nextMark] = this.getNeighborMark()
    const currentVal =
      this.focusThumb.value === 'min' ? this.valueMin.value : this.valueMax.value
    const targetMark =
      this.props.magnet && nextMark !== undefined
        ? nextMark
        : currentVal + (this.props.step ?? 1)

    this.updatePosition(targetMark, 'on-input')
    this.updatePosition(targetMark, 'on-change')
  }

  /**
   * Decreases slider value by step or to previous mark.
   */
  decrease(): void {
    const [previousMark] = this.getNeighborMark()
    const currentVal =
      this.focusThumb.value === 'min' ? this.valueMin.value : this.valueMax.value
    const targetMark =
      this.props.magnet && previousMark !== undefined
        ? previousMark
        : currentVal - (this.props.step ?? 1)

    this.updatePosition(targetMark, 'on-input')
    this.updatePosition(targetMark, 'on-change')
  }

  /**
   * Directly sets slider value from external caller.
   * @param value target mark value
   * @param type target thumb ('min' or 'max')
   */
  set(value: number | number[], type: 'min' | 'max' = 'max'): void {
    this.focusThumb.value = type
    if (Array.isArray(value)) {
      this.updatePosition(value[0], 'on-input')
      this.focusThumb.value = 'max'
      this.updatePosition(value[1], 'on-input')
    } else {
      this.updatePosition(value, 'on-input')
    }
    this.emit('on-change')
  }

  /**
   * Process numeric input from min/max text fields in SliderField.
   * @param inputValue target value number
   * @param eventType event type trigger
   */
  updateValueByThumb(
    inputValue: number,
    eventType: 'on-input' | 'on-change' = 'on-input'
  ): void {
    this.updatePosition(inputValue, eventType)
  }
}
