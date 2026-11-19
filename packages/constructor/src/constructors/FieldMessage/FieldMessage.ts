import {
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { FieldCounterInclude } from '../FieldCounter'
import { SkeletonInclude } from '../Skeleton'

import { FieldMessageMessage } from './FieldMessageMessage'

import type { FieldMessageSlot } from './basicTypes'
import type { FieldMessagePropsBasic } from './props'
import type { FieldMessageComponents, FieldMessageEmits, FieldMessageSlots } from './types'

/** FieldMessage dependency constructors type / Тип конструкторов зависимостей FieldMessage */
export type FieldMessageConstructors = {
  /** Field counter constructor / Конструктор счетчика поля */
  fieldCounter: typeof FieldCounterInclude
  /** Message helper constructor / Конструктор помощника сообщений */
  message: typeof FieldMessageMessage
  /** Skeleton constructor / Конструктор скелетона */
  skeleton: typeof SkeletonInclude
}

/**
 * Manager for handling helper messages, validation messages, and counters.
 * It coordinates text output for information or validation and controls the associated character counters.
 *
 * Менеджер для обработки вспомогательных сообщений, сообщений валидации и счетчиков.
 * Координирует вывод текста для информации или валидации и управляет соответствующими счетчиками символов.
 */
export class FieldMessage extends DesignLogicAbstract<
  HTMLElement,
  FieldMessageComponents,
  FieldMessageEmits,
  FieldMessageSlots,
  FieldMessagePropsBasic,
  FieldMessageConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<FieldMessageConstructors> = {
    fieldCounter: {
      item: FieldCounterInclude,
      canCreate: () => FieldCounterInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    message: {
      item: FieldMessageMessage,
      parameters: () => [
        this.props,
        this.slots
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      canCreate: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        ['classTextVariant']
      ]
    }
  }

  /**
   * Returns data for the main style class.
   *
   * Возвращает данные для главного класса стиля.
   * @returns object of class names / объект названий классов
   */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('validation')]: this.isValidation(),
      [this.naming.getStatusClass('warning')]: this.isWarning()
    }
  }

  /**
   * Data for helper slot.
   *
   * Данные для слота helper.
   * @returns slot data object / объект данных слота
   */
  get slotHelperData(): FieldMessageSlot {
    return this.getSlotData(this.props.helperMessage)
  }

  /**
   * Data for warning slot.
   *
   * Данные для слота warning.
   * @returns slot data object / объект данных слота
   */
  get slotWarningData(): FieldMessageSlot {
    return this.getSlotData(this.props.warningMessage)
  }

  /**
   * Data for validation slot.
   *
   * Данные для слота validation.
   * @returns slot data object / объект данных слота
   */
  get slotValidationData(): FieldMessageSlot {
    return this.getSlotData(this.props.validationMessage)
  }

  /**
   * Checks if there are values for outputting the element.
   *
   * Проверяет, есть ли значения для вывода элемента.
   * @returns boolean value / логическое значение
   */
  is(): boolean {
    if (
      !this.props.forceShow
      && this.props.disabled
    ) {
      return false
    }

    return (
      this.i('message').is()
      || this.callInstance('fieldCounter', item => item.is, false)
    )
  }

  /**
   * Checks if there is a helper message.
   *
   * Проверяет, есть ли вспомогательное сообщение.
   * @returns boolean value / логическое значение
   */
  isHelper(): boolean {
    return this.i('message').isHelper()
  }

  /**
   * Checks if there is a warning message.
   *
   * Проверяет, есть ли предупреждающее сообщение.
   * @returns boolean value / логическое значение
   */
  isWarning(): boolean {
    return this.i('message').isWarning()
  }

  /**
   * Checks if there is a validation message.
   *
   * Проверяет, есть ли сообщение о валидации.
   * @returns boolean value / логическое значение
   */
  isValidation(): boolean {
    return this.i('message').isValidation()
  }

  /**
   * Get common slot data for messages.
   *
   * Получить общие данные слота для сообщений.
   * @param message main message / основное сообщение
   * @returns slot data object / объект данных слота
   */
  protected getSlotData(message?: string): FieldMessageSlot {
    return {
      message,
      helperMessage: this.props.helperMessage,
      warningMessage: this.props.warningMessage,
      validationMessage: this.props.validationMessage
    }
  }
}
