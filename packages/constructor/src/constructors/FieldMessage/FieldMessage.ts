import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrClassObject, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { FieldCounterInclude } from '../FieldCounter'
import { FieldMessageMessage } from './FieldMessageMessage'
import { SkeletonInclude } from '../Skeleton'

import type { FieldMessageComponents, FieldMessageEmits, FieldMessageSlots } from './types'
import type { FieldMessageSlot } from './basicTypes'
import type { FieldMessageProps } from './props'

/**
 * FieldMessage
 */
export class FieldMessage {
  /** Field counter functionality/ Функциональность счетчика поля */
  readonly fieldCounter: FieldCounterInclude<FieldMessageProps>

  /** Message functionality/ Функциональность сообщений */
  readonly message: FieldMessageMessage

  /** Skeleton include/ Подключение скелетона */
  readonly skeleton: SkeletonInclude

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
   * @param constructors.FieldCounterIncludeConstructor class for working with field counter/ класс для работы со счетчиком поля
   * @param constructors.FieldMessageMessageConstructor class for working with messages/ класс для работы с сообщениями
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
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
      this.props,
      this.className,
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
   * Checks if there are values for outputting the element/ Проверяет, есть ли значения для вывода элемента
   */
  readonly is = computed<boolean>(() => {
    return (
      this.props.forceShow
      || !this.props.disabled
    )
    && (
      this.message.is.value
      || this.fieldCounter.isCounter.value
    )
  })

  /**
   * Checks if there is a helper message.
   *
   * Проверяет, есть ли вспомогательное сообщение.
   */
  readonly isHelper = computed<boolean>(() => {
    return Boolean(this.props.helperMessage) || Boolean(this.slots && 'helper' in this.slots)
  })

  /**
   * Checks if there is a validation message.
   *
   * Проверяет, есть ли сообщение о валидации.
   */
  readonly isValidation = computed<boolean>(() => {
    return Boolean(this.props.validationMessage) || Boolean(this.slots && 'validation' in this.slots)
  })

  /**
   * Returns data for the main style class/ Возвращает данные для главного класса стиля
   */
  readonly classes = computed<ConstrClassObject>(() => ({
    [`${this.className}--validation`]: this.message.isValidation.value
  }))

  /**
   * Data for helper slot/ Данные для слота helper
   */
  readonly slotHelperData = computed<FieldMessageSlot>(() => ({
    message: this.props.helperMessage,
    helperMessage: this.props.helperMessage,
    validationMessage: this.props.validationMessage
  }))

  /**
   * Data for validation slot/ Данные для слота validation
   */
  readonly slotValidationData = computed<FieldMessageSlot>(() => ({
    message: this.props.validationMessage,
    helperMessage: this.props.helperMessage,
    validationMessage: this.props.validationMessage
  }))
}
