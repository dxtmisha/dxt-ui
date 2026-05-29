import { type Ref, type ToRefs } from 'vue'
import { type ConstrClassObject, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { FieldCounterInclude } from '../FieldCounter'
import { FieldMessageMessage } from './FieldMessageMessage'
import { SkeletonInclude } from '../Skeleton'

import type { FieldMessageComponents, FieldMessageEmits, FieldMessageSlots } from './types'
import type { FieldMessageSlot } from './basicTypes'
import type { FieldMessageProps } from './props'

/**
 * Manager for handling helper messages, validation messages, and counters.
 * It coordinates text output for information or validation and controls the associated character counters.
 *
 * Менеджер для обработки вспомогательных сообщений, сообщений валидации и счетчиков.
 * Координирует вывод текста для информации или валидации и управляет соответствующими счетчиками символов.
 */
export class FieldMessage {
  /** Field counter functionality / Функциональность счетчика поля */
  readonly fieldCounter: FieldCounterInclude

  /** Message functionality / Функциональность сообщений */
  readonly message: FieldMessageMessage

  /** Skeleton include / Подключение скелетона */
  readonly skeleton: SkeletonInclude

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
   * @param constructors object with classes / объект с классами
   * @param constructors.FieldCounterIncludeConstructor class for working with field counter / класс для работы со счетчиком поля
   * @param constructors.FieldMessageMessageConstructor class for working with messages / класс для работы с сообщениями
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton / класс для работы со скелетоном
   */
  constructor(
    protected readonly props: FieldMessageProps,
    protected readonly refs: ToRefs<FieldMessageProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<FieldMessageComponents, FieldMessageProps>,
    protected readonly slots?: FieldMessageSlots,
    protected readonly emits?: ConstrEmit<FieldMessageEmits>,
    constructors?: {
      FieldCounterIncludeConstructor?: typeof FieldCounterInclude
      FieldMessageMessageConstructor?: typeof FieldMessageMessage
      SkeletonIncludeConstructor?: typeof SkeletonInclude
    }
  ) {
    const {
      FieldCounterIncludeConstructor = FieldCounterInclude,
      FieldMessageMessageConstructor = FieldMessageMessage,
      SkeletonIncludeConstructor = SkeletonInclude
    } = constructors ?? {}

    this.fieldCounter = new FieldCounterIncludeConstructor(
      this.className,
      this.props,
      this.components
    )

    this.message = new FieldMessageMessageConstructor(this.props, this.slots)
    this.skeleton = new SkeletonIncludeConstructor(
      this.props as any,
      this.classDesign,
      ['classTextVariant']
    )
  }

  /**
   * Returns data for the main style class.
   *
   * Возвращает данные для главного класса стиля.
   * @returns object of class names / объект названий классов
   */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--validation`]: this.message.isValidation()
    }
  }

  /**
   * Data for helper slot.
   *
   * Данные для слота helper.
   * @returns slot data object / объект данных слота
   */
  get slotHelperData(): FieldMessageSlot {
    return {
      message: this.props.helperMessage,
      helperMessage: this.props.helperMessage,
      validationMessage: this.props.validationMessage
    }
  }

  /**
   * Data for validation slot.
   *
   * Данные для слота validation.
   * @returns slot data object / объект данных слота
   */
  get slotValidationData(): FieldMessageSlot {
    return {
      message: this.props.validationMessage,
      helperMessage: this.props.helperMessage,
      validationMessage: this.props.validationMessage
    }
  }

  /**
   * Checks if there are values for outputting the element.
   *
   * Проверяет, есть ли значения для вывода элемента.
   * @returns boolean value / логическое значение
   */
  is(): boolean {
    return (
      (
        this.props.forceShow
        || !this.props.disabled
      )
      && (
        this.message.is()
        || this.fieldCounter.is
      )
    )
  }

  /**
   * Checks if there is a helper message.
   *
   * Проверяет, есть ли вспомогательное сообщение.
   * @returns boolean value / логическое значение
   */
  isHelper(): boolean {
    return Boolean(this.props.helperMessage) || Boolean(this.slots && 'helper' in this.slots)
  }

  /**
   * Checks if there is a validation message.
   *
   * Проверяет, есть ли сообщение о валидации.
   * @returns boolean value / логическое значение
   */
  isValidation(): boolean {
    return Boolean(this.props.validationMessage) || Boolean(this.slots && 'validation' in this.slots)
  }
}
