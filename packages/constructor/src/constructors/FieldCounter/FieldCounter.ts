import {
  applyTemplate,
  type ConstrItems,
  DesignLogicAbstract,
  isFilled,
  isNull,
  toNumber
} from '@dxtmisha/functional'

import { TextInclude } from '../../classes/TextInclude'

import type { FieldCounterProps } from './props'
import type { FieldCounterComponents, FieldCounterEmits, FieldCounterSlots } from './types'

/** FieldCounter dependency constructors type / Тип конструкторов зависимостей FieldCounter */
export type FieldCounterConstructors = {
  /** Localized text strings helper constructor / Конструктор помощника локализованных текстовых строк */
  text: typeof TextInclude
}

/**
 * FieldCounter class for managing character limit counters and screen reader announcements.
 *
 * Класс FieldCounter для управления счетчиками лимита символов и объявлениями для скринридеров.
 */
export class FieldCounter extends DesignLogicAbstract<
  HTMLElement,
  FieldCounterComponents,
  FieldCounterEmits,
  FieldCounterSlots,
  FieldCounterProps,
  FieldCounterConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<FieldCounterConstructors> = {
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    }
  }

  /**
   * Returns the text for the screen reader.
   *
   * Возвращает текст для скринридера.
   * @returns aria text or undefined / текст для скринридера или undefined
   */
  get ariaText(): string | undefined {
    if (this.isMax()) {
      const remaining = this.getRemaining()

      if (remaining <= 0) {
        return this.i('text').characterLimit
      }

      if (remaining <= this.getMaxlengthOnce()) {
        const characterRemaining = this.i('text').characterRemaining

        if (characterRemaining) {
          return applyTemplate(
            characterRemaining,
            { left: remaining }
          )
        }
      }
    }

    return undefined
  }

  /**
   * Returns the number of input characters.
   *
   * Возвращает количество вводимых символов.
   * @returns number of input characters / количество вводимых символов
   */
  get counter(): number {
    return toNumber(this.props.counter ?? 0)
  }

  /**
   * Returns text for output.
   *
   * Возвращает текст для вывода.
   * @returns text for output / текст для вывода
   */
  get item(): string {
    const counter = this.counter.toString()
    const max = this.max.toString()

    if (isFilled(this.props.template)) {
      return this.props.template
        .replace(/\[c\]/g, counter)
        .replace(/\[m\]/g, max)
    }

    if (this.isMax()) {
      return `${counter} / ${max}`
    }

    return counter
  }

  /**
   * Returns the maximum available input number.
   *
   * Возвращает максимально доступное вводимое число.
   * @returns maximum available input number / максимально доступное вводимое число
   */
  get max(): number {
    return toNumber(this.props.maxlength ?? 0)
  }

  /**
   * Checks if it is necessary to display the number of input characters.
   *
   * Проверяет, надо ли выводить количество вводимых символов.
   * @returns true if the counter should be displayed / true, если счетчик должен быть выведен
   */
  is(): boolean {
    return !isNull(this.props.counter) || this.isMax()
  }

  /**
   * Checks if it is necessary to display the maximum available number of characters.
   *
   * Проверяет, надо ли выводить максимальное доступное количество символов.
   * @returns true if max limit is displayed / true, если выводится максимальный лимит
   */
  isMax(): boolean {
    return this.max > 0
  }

  /**
   * Returns the number of characters remaining at which the screen reader starts announcing.
   *
   * Возвращает количество оставшихся символов, при котором скринридер начинает произносить.
   * @returns threshold character count / пороговое количество символов
   */
  getMaxlengthOnce(): number {
    if (this.props.maxlengthOnce !== undefined) {
      return toNumber(this.props.maxlengthOnce)
    }

    return Math.ceil(this.max * 0.1)
  }

  /**
   * Returns the number of remaining characters.
   *
   * Возвращает количество оставшихся символов.
   * @returns remaining characters count / количество оставшихся символов
   */
  getRemaining(): number {
    return this.max - this.counter
  }
}
