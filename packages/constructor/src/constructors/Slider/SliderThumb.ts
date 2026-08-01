import { computed, ref } from 'vue'

import type { SliderMarkItem } from './basicTypes'
import type { SliderMarks } from './SliderMarks'
import type { SliderValue } from './SliderValue'

/**
 * Abstract class representing a slider thumb handle and its associated label element.
 * Manages element references, BoundingClientRect calculation, focus control, and label text retrieval.
 *
 * Абстрактный класс, представляющий ползунок слайдера и связанный с ним элемент метки.
 * Управляет ссылками на элементы, вычислением BoundingClientRect, фокусом и получением текста метки.
 */
export abstract class SliderThumb {
  /** Target element reference for thumb handle button / Ссылка на целевой элемент кнопки ползунка */
  readonly element = ref<HTMLElement | undefined>(undefined)

  /** Target element reference for thumb label / Ссылка на целевой элемент метки ползунка */
  readonly elementLabel = ref<HTMLElement | undefined>(undefined)

  /** Computed normalized mark item for this thumb value / Вычисляемый нормализованный элемент метки для значения этого ползунка */
  readonly item = computed<SliderMarkItem>(() => this.marks.getItem(this.mark))

  /**
   * Constructor
   * @param marks slider marks manager / менеджер меток слайдера
   * @param value slider value manager / менеджер значения слайдера
   */
  constructor(
    protected readonly marks: SliderMarks,
    protected readonly value: SliderValue
  ) { }

  /**
   * Returns current numeric mark/value for this thumb.
   *
   * Возвращает текущее числовое значение метки для этого ползунка.
   * @returns numeric value / числовое значение
   */
  abstract get mark(): number

  /**
   * Returns text string for thumb label.
   *
   * Возвращает текстовую строку для метки ползунка.
   * @returns label text / текст метки
   */
  get label(): string {
    return this.item.value.text
  }

  /**
   * Returns BoundingClientRect for thumb handle button element.
   *
   * Возвращает BoundingClientRect для элемента кнопки ползунка.
   * @returns DOMRect or undefined / DOMRect или undefined
   */
  get rectangle(): DOMRect | undefined {
    return this.getElement()?.getBoundingClientRect()
  }

  /**
   * Returns thumb handle button element instance.
   *
   * Возвращает экземпляр элемента кнопки ползунка.
   * @returns DOM element or undefined / DOM-элемент или undefined
   */
  getElement(): HTMLElement | undefined {
    return this.element.value
  }

  /**
   * Sets focus to thumb button element.
   *
   * Устанавливает фокус на элемент кнопки ползунка.
   */
  focus(): void {
    this.getElement()?.focus()
  }
}
