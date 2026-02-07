import { computed, type Ref, type ToRefs } from 'vue'
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
   * @param TextIncludeConstructor class for working with text/ класс для работы с текстом
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
    TextIncludeConstructor: typeof TextInclude = TextInclude
  ) {
    this.text = new TextIncludeConstructor(this.props)
  }

  /** Checks if it is necessary to display the number of input characters/ Проверяет, надо ли выводить количество вводимых символов */
  readonly is = computed<boolean>(() => this.props.counter !== undefined || this.isMax.value)

  /** Checks if it is necessary to display the maximum available number of characters/ Проверяет, надо ли выводить максимальное доступное количество символов */
  readonly isMax = computed<boolean>(() => this.getMax() > 0)

  /** Returns text for output/ Возвращает текст для вывода */
  readonly item = computed<string>(() => {
    const counter = this.getCounter().toString()
    const max = this.getMax().toString()

    if (isFilled(this.props.template)) {
      return this.props.template
        .replace('[c]', counter)
        .replace('[m]', max)
    }

    if (this.isMax.value) {
      return `${counter} / ${max}`
    }

    return counter
  })

  /**
   * Returns the text for the screen reader.
   *
   * Возвращает текст для скринридера.
   */
  readonly ariaText = computed<string | undefined>(() => {
    if (this.isMax.value) {
      const remaining = this.getRemaining()

      if (remaining <= 0) {
        return this.text.characterLimit.value
      }

      if (
        remaining <= this.getMaxlengthOnce()
        && this.text.characterRemaining.value
      ) {
        return applyTemplate(
          this.text.characterRemaining.value,
          { left: remaining }
        )
      }
    }

    return undefined
  })

  /**
   * Returns the number of input characters.
   *
   * Возвращает количество вводимых символов.
   */
  getCounter(): number {
    return toNumber(this.props.counter ?? 0)
  }

  /**
   * Returns the maximum available input number.
   *
   * Возвращает максимально доступное вводимое число.
   */
  getMax(): number {
    return toNumber(this.props.maxlength ?? 0)
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

    return Math.ceil(this.getMax() * 0.1)
  }

  /**
   * Returns the number of remaining characters.
   *
   * Возвращает количество оставшихся символов.
   */
  getRemaining(): number {
    return this.getMax() - this.getCounter()
  }
}
