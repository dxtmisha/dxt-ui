// ai-none

import { type ConstrBind, getKey } from '@dxtmisha/functional'

import type { EnabledInclude } from '../../classes/EnabledInclude'

import type { SliderDragEvent } from './SliderDragEvent'
import type { SliderElement } from './SliderElement'
import type { SliderEmit } from './SliderEmit'
import type { SliderFocus } from './SliderFocus'
import type { SliderGo } from './SliderGo'
import type { SliderMarksData } from './SliderMarksData'
import type { SliderThumbMax } from './SliderThumbMax'
import type { SliderThumbMin } from './SliderThumbMin'
import type { SliderValue } from './SliderValue'

import { SliderFocusType } from './basicTypes'

/**
 * Class for handling slider events and keyboard interaction.
 *
 * Класс для обработки событий и клавиатурной навигации слайдера.
 */
export class SliderEvent {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param dragEvent getter returning drag event manager / функция, возвращающая менеджер событий перетаскивания
   * @param emitsItem getter returning event emission manager / функция, возвращающая менеджер эмита событий
   * @param enabled getter returning enabled state manager / функция, возвращающая менеджер активности
   * @param focus getter returning handle focus manager / функция, возвращающая менеджер фокуса ползунков
   * @param go getter returning navigation step manager / функция, возвращающая менеджер навигации и шагов
   * @param marksData getter returning marks calculation data manager / функция, возвращающая менеджер данных вычисления меток
   * @param maxElement getter returning max thumb handle manager / функция, возвращающая менеджер максимального ползунка
   * @param minElement getter returning min thumb handle manager / функция, возвращающая менеджер минимального ползунка
   * @param sliderElement getter returning element layout manager / функция, возвращающая менеджер верстки и координат
   * @param value getter returning slider value bounds manager / функция, возвращающая менеджер значений слайдера
   */
  constructor(
    protected readonly dragEvent: () => SliderDragEvent,
    protected readonly emitsItem: () => SliderEmit,
    protected readonly enabled: () => EnabledInclude,
    protected readonly focus: () => SliderFocus,
    protected readonly go: () => SliderGo,
    protected readonly marksData: () => SliderMarksData,
    protected readonly maxElement: () => SliderThumbMax,
    protected readonly minElement: () => SliderThumbMin,
    protected readonly sliderElement: () => SliderElement,
    protected readonly value: () => SliderValue
  ) { }

  /**
   * Returns object containing event handlers for maximum thumb handle element.
   *
   * Возвращает объект с обработчиками событий для элемента максимального ползунка.
   * @returns object with event handlers / объект с обработчиками событий
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
   * Returns object containing event handlers for minimum thumb handle element.
   *
   * Возвращает объект с обработчиками событий для элемента минимального ползунка.
   * @returns object with event handlers / объект с обработчиками событий
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
   * Focuses corresponding thumb element based on current focus type.
   *
   * Фокусирует соответствующий элемент ползунка на основе текущего типа фокуса.
   */
  focusElement(): void {
    if (this.focus().isMin()) {
      this.minElement().focus()
    } else {
      this.maxElement().focus()
    }
  }

  /**
   * Handles focus event for maximum thumb handle.
   *
   * Обрабатывает событие фокуса для максимального ползунка.
   */
  readonly onFocusMax = (): void => {
    this.focus().set(SliderFocusType.max)
  }

  /**
   * Handles focus event for minimum thumb handle.
   *
   * Обрабатывает событие фокуса для минимального ползунка.
   */
  readonly onFocusMin = (): void => {
    this.focus().set(SliderFocusType.min)
  }

  /**
   * Handles keyboard navigation events on thumb handle buttons.
   *
   * Обрабатывает события клавиатурной навигации на кнопках ползунков.
   * @param event KeyboardEvent / событие клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    if (
      event.isComposing
      || !this.enabled().isEnabled
    ) {
      return
    }

    const key = getKey(event)
    const sliderElement = this.sliderElement()
    const isHorizontalRtl = !sliderElement.isVertical() && sliderElement.isRtl()

    switch (key) {
      case 'ArrowRight':
        event.preventDefault()
        if (isHorizontalRtl) {
          this.go().decrease()
        } else {
          this.go().increase()
        }
        break
      case 'ArrowLeft':
        event.preventDefault()
        if (isHorizontalRtl) {
          this.go().increase()
        } else {
          this.go().decrease()
        }
        break
      case 'ArrowUp':
        event.preventDefault()
        this.go().increase()
        break
      case 'ArrowDown':
        event.preventDefault()
        this.go().decrease()
        break
      case 'Home':
        event.preventDefault()
        this.set(this.marksData().minNumber)
        break
      case 'End':
        event.preventDefault()
        this.set(this.marksData().maxNumber)
        break
      case 'PageUp':
        event.preventDefault()
        if (this.marksData().is()) {
          this.go().increase()
        } else {
          this.page(true)
        }
        break
      case 'PageDown':
        event.preventDefault()
        if (this.marksData().is()) {
          this.go().decrease()
        } else {
          this.page(false)
        }
        break
    }
  }

  /**
   * Handles pointer start interaction (mousedown / touchstart).
   *
   * Обрабатывает начало взаимодействия указателем (mousedown / touchstart).
   * @param event MouseEvent or TouchEvent / событие мыши или касания
   * @param forcedFocus optional explicit handle target / опциональная явная цель ползунка
   */
  readonly onMousedown = (
    event: MouseEvent | TouchEvent,
    forcedFocus?: SliderFocusType
  ): void => {
    if (
      !this.enabled().isEnabled
      || ('button' in event && event.button !== 0)
    ) {
      return
    }

    if (event.cancelable !== false) {
      event.preventDefault()
    }

    event.stopPropagation()

    const dragEvent = this.dragEvent()
    const coordinate = dragEvent.getCoordinates(event)

    if (forcedFocus) {
      this.focus().set(forcedFocus)
    } else {
      this.focus().set(this.sliderElement().getTypeByCoordinate(coordinate))
    }

    this.focusElement()

    this.go().updateFromCoordinate(coordinate)
    dragEvent.start()
  }

  /**
   * Handles pointer start interaction for maximum thumb handle.
   *
   * Обрабатывает начало взаимодействия указателем для максимального ползунка.
   * @param event MouseEvent or TouchEvent / событие мыши или касания
   */
  readonly onMousedownMax = (event: MouseEvent | TouchEvent): void => {
    this.onMousedown(event, SliderFocusType.max)
  }

  /**
   * Handles pointer start interaction for minimum thumb handle.
   *
   * Обрабатывает начало взаимодействия указателем для минимального ползунка.
   * @param event MouseEvent or TouchEvent / событие мыши или касания
   */
  readonly onMousedownMin = (event: MouseEvent | TouchEvent): void => {
    this.onMousedown(event, SliderFocusType.min)
  }

  /**
   * Sets value for active focused thumb and emits input and change events.
   *
   * Устанавливает значение для активного ползунка и вызывает события ввода и изменения.
   * @param value target numeric value / целевое числовое значение
   */
  protected set(value: number): void {
    const emitsItem = this.emitsItem()

    this.value().set(value, this.focus().get())
    emitsItem.emit('input')
    emitsItem.emit('change')
  }

  /**
   * Navigates active thumb value by page step in direction.
   *
   * Изменяет значение активного ползунка на страницу (крупный шаг) в указанном направлении.
   * @param isIncrease direction flag / флаг направления
   */
  protected page(isIncrease: boolean): void {
    const marksData = this.marksData()
    const range = marksData.maxNumber - marksData.minNumber
    const step = marksData.stepNumber
    const pageStep = Math.max(step, Math.round((range * 0.1) / step) * step)
    const currentValue = this.focus().isMin() ? this.value().min : this.value().max
    const targetValue = marksData.roundValue(
      isIncrease ? currentValue + pageStep : currentValue - pageStep
    )

    this.set(targetValue)
  }
}
