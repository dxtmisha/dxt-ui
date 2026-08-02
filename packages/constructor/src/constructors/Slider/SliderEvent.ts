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
import type { SliderProps } from './props'

/**
 * Class for handling slider events and keyboard interaction.
 *
 * Класс для обработки событий и клавиатурной навигации слайдера.
 */
export class SliderEvent {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param dragEvent drag event manager / менеджер событий перетаскивания
   * @param emitsItem event emission manager / менеджер эмита событий
   * @param enabled enabled state manager / менеджер активности
   * @param focus handle focus manager / менеджер фокуса ползунков
   * @param go navigation step manager / менеджер навигации и шагов
   * @param marksData marks calculation data manager / менеджер данных вычисления меток
   * @param maxElement max thumb handle manager / менеджер максимального ползунка
   * @param minElement min thumb handle manager / менеджер минимального ползунка
   * @param sliderElement element layout manager / менеджер верстки и координат
   * @param value slider value bounds manager / менеджер значений слайдера
   */
  constructor(
    protected readonly props: SliderProps,
    protected readonly dragEvent: SliderDragEvent,
    protected readonly emitsItem: SliderEmit,
    protected readonly enabled: EnabledInclude,
    protected readonly focus: SliderFocus,
    protected readonly go: SliderGo,
    protected readonly marksData: SliderMarksData,
    protected readonly maxElement: SliderThumbMax,
    protected readonly minElement: SliderThumbMin,
    protected readonly sliderElement: SliderElement,
    protected readonly value: SliderValue
  ) { }

  /**
   * Focuses corresponding thumb element based on current focus type.
   *
   * Фокусирует соответствующий элемент ползунка на основе текущего типа фокуса.
   */
  focusElement(): void {
    if (this.focus.isMin()) {
      this.minElement.focus()
    } else {
      this.maxElement.focus()
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
        this.set(this.marksData.minNumber)
        break
      case 'End':
        event.preventDefault()
        this.set(this.marksData.maxNumber)
        break
      case 'PageUp':
        event.preventDefault()
        this.page(true)
        break
      case 'PageDown':
        event.preventDefault()
        this.page(false)
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
    if (!this.enabled.isEnabled) {
      return
    }

    event.preventDefault()
    event.stopPropagation()

    const coordinate = this.dragEvent.getCoordinates(event)

    if (forcedFocus) {
      this.focus.set(forcedFocus)
    } else {
      this.focus.set(this.sliderElement.getTypeByCoordinate(coordinate))
    }

    this.focusElement()

    this.go.updateFromCoordinate(coordinate)
    this.dragEvent.start()
  }

  /**
   * Navigates active thumb value by page step in direction.
   *
   * Изменяет значение активного ползунка на страницу (крупный шаг) в указанном направлении.
   * @param isIncrease direction flag / флаг направления
   */
  protected page(isIncrease: boolean): void {
    const range = this.marksData.maxNumber - this.marksData.minNumber
    const pageStep = Math.max(this.marksData.stepNumber, Math.round(range * 0.1))
    const currentValue = this.focus.isMin() ? this.value.min : this.value.max
    const targetValue = isIncrease ? currentValue + pageStep : currentValue - pageStep

    this.set(targetValue)
  }

  /**
   * Sets value for active focused thumb and emits change event.
   *
   * Устанавливает значение для активного ползунка и вызывает событие изменения.
   * @param value target numeric value / целевое числовое значение
   */
  protected set(value: number): void {
    this.value.set(value, this.focus.get())
    this.emitsItem.emit('change')
  }
}
