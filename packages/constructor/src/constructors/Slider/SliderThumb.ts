import { computed, ref } from 'vue'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import type { AriaList } from '../../types/ariaTypes'

import type { SliderMarks } from './SliderMarks'
import type { SliderMarksData } from './SliderMarksData'
import type { SliderValue } from './SliderValue'

import type { SliderMarkItem, SliderThumbSlot } from './basicTypes'
import type { SliderPropsBasic } from './props'

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

  /** Computed normalized mark item for this thumb value / Вычисляемый нормализованный элемент метки для значения этого ползунка */
  readonly item = computed<SliderMarkItem>(() => this.marks.getItem(this.mark))

  /**
   * Constructor
   * @param props properties / свойства
   * @param marksData slider marks data manager / менеджер данных меток слайдера
   * @param marks slider marks manager / менеджер меток слайдера
   * @param valueItem slider value manager / менеджер значения слайдера
   */
  constructor(
    protected readonly props: SliderPropsBasic,
    protected readonly marksData: SliderMarksData,
    protected readonly marks: SliderMarks,
    protected readonly valueItem: SliderValue
  ) { }

  /**
   * Returns current numeric mark for this thumb / Абстрактный метод.
   *
   * Возвращает текущее числовое значение метки для этого ползунка.
   * @returns numeric mark / числовое значение метки
   */
  abstract get mark(): number

  /**
   * Returns current numeric value for this thumb / Абстрактный метод.
   *
   * Возвращает текущее числовое значение для этого ползунка.
   * @returns numeric value / числовое значение
   */
  abstract get value(): number

  /**
   * Returns minimum allowed value for ARIA attributes.
   *
   * Возвращает минимально допустимое значение для ARIA-атрибутов.
   * @returns minimum numeric value / минимальное числовое значение
   */
  abstract get valuemin(): number

  /**
   * Returns maximum allowed value for ARIA attributes.
   *
   * Возвращает максимально допустимое значение для ARIA-атрибутов.
   * @returns maximum numeric value / максимальное числовое значение
   */
  abstract get valuemax(): number

  /**
   * Returns ARIA attributes list for thumb handle button element.
   *
   * Возвращает список ARIA-атрибутов для элемента кнопки ползунка.
   * @returns ARIA attributes list / список ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role('slider'),
      ...AriaStaticInclude.valueMinMax(
        this.value,
        this.valuemin,
        this.valuemax
      ),
      ...AriaStaticInclude.orientation(this.props.vertical ? 'vertical' : 'horizontal')
    }
  }

  /**
   * Returns text string for thumb label.
   *
   * Возвращает текстовую строку для метки ползунка.
   * @returns label text / текст метки
   */
  get label(): string {
    return this.getItem().label
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
   * @returns DOM-элемент или undefined
   */
  getElement(): HTMLElement | undefined {
    return this.element.value
  }

  /**
   * Returns current normalized mark item for this thumb.
   *
   * Возвращает текущий нормализованный элемент метки для этого ползунка.
   * @returns mark item / элемент метки
   */
  getItem(): SliderMarkItem {
    return this.item.value
  }

  /**
   * Returns slot payload object containing value and mark item.
   *
   * Возвращает объект данных для слота, содержащий значение и элемент метки.
   * @returns slot payload data / данные для слота
   */
  getSlot(): SliderThumbSlot {
    return {
      value: this.value,
      item: this.getItem()
    }
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
