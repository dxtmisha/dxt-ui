import { type Ref, type ToRefs } from 'vue'
import {
  applyTemplate,
  type ConstrEmit,
  type DesignComp,
  isFilled,
  toNumber
} from '@dxtmisha/functional'

import { TextInclude } from '../../classes/TextInclude'

import type { FieldCounterComponents, FieldCounterEmits, FieldCounterSlots } from './types'
import type { FieldCounterProps } from './props'

/**
 * FieldCounter
 */
export class FieldCounter {
  readonly text: TextInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
   */
  constructor(
    protected readonly props: FieldCounterProps,
    protected readonly refs: ToRefs<FieldCounterProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<FieldCounterComponents, FieldCounterProps>,
    protected readonly slots?: FieldCounterSlots,
    protected readonly emits?: ConstrEmit<FieldCounterEmits>,
    constructors: {
      TextIncludeConstructor?: typeof TextInclude
    } = {}
  ) {
    const {
      TextIncludeConstructor = TextInclude
    } = constructors

    this.text = new TextIncludeConstructor(this.props)
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
   * Returns the maximum available input number.
   *
   * Возвращает максимально доступное вводимое число.
   * @returns maximum available input number / максимально доступное вводимое число
   */
  get max(): number {
    return toNumber(this.props.maxlength ?? 0)
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
        return this.text.characterLimit
      }

      if (
        remaining <= this.getMaxlengthOnce()
        && this.text.characterRemaining
      ) {
        return applyTemplate(
          this.text.characterRemaining,
          { left: remaining }
        )
      }
    }

    return undefined
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
        .replace('[c]', counter)
        .replace('[m]', max)
    }

    if (this.isMax()) {
      return `${counter} / ${max}`
    }

    return counter
  }

  /**
   * Checks if it is necessary to display the number of input characters.
   *
   * Проверяет, надо ли выводить количество вводимых символов.
   * @returns true if the counter should be displayed / true, если счетчик должен быть выведен
   */
  is(): boolean {
    return this.props.counter !== undefined || this.isMax()
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
   */
  getRemaining(): number {
    return this.max - this.counter
  }
}
