import { ref } from 'vue'

import type { SliderMarkItem } from './basicTypes'
import type { SliderMarks } from './SliderMarks'

/**
 * Class representing a slider thumb handle and its associated label element.
 * Manages element references, BoundingClientRect calculation, focus control, and label text retrieval.
 *
 * Класс, представляющий ползунок слайдера и связанный с ним элемент метки.
 * Управляет ссылками на элементы, вычислением BoundingClientRect, фокусом и получением текста метки.
 */
export class SliderThumb {
  /** Target element reference for thumb handle button / Ссылка на целевой элемент кнопки ползунка */
  readonly element = ref<HTMLElement | undefined>(undefined)

  /** Target element reference for thumb label / Ссылка на целевой элемент метки ползунка */
  readonly elementLabel = ref<HTMLElement | undefined>(undefined)

  /**
   * Constructor
   * @param type thumb handle type ('min' or 'max') / тип ползунка ('min' или 'max')
   * @param marks slider marks manager / менеджер меток слайдера
   * @param getValueCallback function returning current numeric value for this thumb / функция, возвращающая текущее значение ползунка
   */
  constructor(
    readonly type: 'min' | 'max',
    protected readonly marks: SliderMarks,
    protected readonly getValueCallback: () => number
  ) {}

  /**
   * Returns current numeric mark/value for this thumb.
   *
   * Возвращает текущее числовое значение метки для этого ползунка.
   * @returns numeric value / числовое значение
   */
  get mark(): number {
    return this.getValueCallback()
  }

  /**
   * Returns normalized mark item for this thumb value.
   *
   * Возвращает нормализованный элемент метки для значения этого ползунка.
   * @returns mark item / элемент метки
   */
  get item(): SliderMarkItem {
    return this.marks.getRead(this.mark)
  }

  /**
   * Returns text string for thumb label.
   *
   * Возвращает текстовую строку для метки ползунка.
   * @returns label text / текст метки
   */
  get labelText(): string {
    return this.item.text
  }

  /**
   * Returns BoundingClientRect for thumb handle button element.
   *
   * Возвращает BoundingClientRect для элемента кнопки ползунка.
   * @returns DOMRect or undefined / DOMRect или undefined
   */
  getRectangle(): DOMRect | undefined {
    return this.element.value?.getBoundingClientRect()
  }

  /**
   * Sets focus to thumb button element.
   *
   * Устанавливает фокус на элемент кнопки ползунка.
   */
  focus(): void {
    this.element.value?.focus()
  }
}
