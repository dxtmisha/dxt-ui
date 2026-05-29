import {
  type DesignComponents,
  executeFunctionRef,
  getElementId,
  isFilled,
  type RefOrNormalOrFunction
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import { FieldCounterInclude } from '../FieldCounter'

import type { ComponentIncludeExtra, ComponentIncludeProps } from '../../types/componentInclude'
import type { FieldMessageComponentInclude, FieldMessagePropsInclude } from './basicTypes'
import type { FieldMessagePropsBasic } from './props'

/**
 * The class returns data for working with the FieldMessage component.
 *
 * Класс возвращает данные для работы с компонентом FieldMessage.
 */
export class FieldMessageInclude<
  Props extends FieldMessagePropsInclude = FieldMessagePropsInclude,
  PropsExtra extends FieldMessagePropsBasic = FieldMessagePropsBasic
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra
  > {
  /** Default unique identifier for the helper message / Уникальный идентификатор по умолчанию для вспомогательного сообщения */
  readonly helperIdDefault: string = getElementId()

  /** Default unique identifier for the validation message / Уникальный идентификатор по умолчанию для сообщения валидации */
  readonly validationIdDefault: string = getElementId()

  /** Default unique identifier for the counter / Уникальный идентификатор по умолчанию для счетчика */
  readonly counterIdDefault: string = getElementId()

  /** Field counter include / Подключение счетчика поля */
  protected readonly fieldCounter: FieldCounterInclude

  /** Component name / Название компонента */
  protected readonly name = 'fieldMessage'

  /** Name of the property for component attributes / Название свойства для атрибутов компонента */
  protected readonly propsAttrsName = 'fieldMessageAttrs'

  /**
   * Constructor
   * @param className class name / название класса
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param validationMessage error line / строка ошибки
   * @param isCounter whether to display the counter / отображать ли счетчик
   */
  constructor(
    className: string,
    props: ComponentIncludeProps<Props>,
    components?: DesignComponents<FieldMessageComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly validationMessage?: RefOrNormalOrFunction<string>,
    protected readonly isCounter?: RefOrNormalOrFunction<boolean | undefined>
  ) {
    super(className, props, components, extra, index)

    this.fieldCounter = new FieldCounterInclude(this.className, this.props)
  }

  /**
   * Returns the identifier.
   *
   * Возвращает идентификатор.
   * @returns unique space-separated ID list / список уникальных идентификаторов через пробел
   */
  get id(): string {
    const props = this.getProps()
    const ids: string[] = []

    if (props.helperMessage) {
      ids.push(this.helperId)
    }

    if (props.validationMessage) {
      ids.push(this.validationId)
    }

    if (
      this.showCounter()
      && props.counterShow
    ) {
      ids.push(this.counterId)
    }

    return ids.join(' ')
  }

  /**
   * Get the helper message identifier.
   *
   * Получить идентификатор вспомогательного сообщения.
   * @returns unique helper message ID / уникальный идентификатор вспомогательного сообщения
   */
  get helperId(): string {
    return this.getProps().helperId ?? this.helperIdDefault
  }

  /**
   * Get the validation message identifier.
   *
   * Получить идентификатор сообщения валидации.
   * @returns unique validation message ID / уникальный идентификатор сообщения валидации
   */
  get validationId(): string {
    return this.getProps().validationId ?? this.validationIdDefault
  }

  /**
   * Get the character counter identifier.
   *
   * Получить идентификатор счетчика символов.
   * @returns unique counter ID / уникальный идентификатор счетчика
   */
  get counterId(): string {
    return this.getProps().counterId ?? this.counterIdDefault
  }

  /**
   * Returns the validation message.
   *
   * Возвращает сообщение валидации.
   * @returns validation message or undefined / сообщение валидации или undefined
   */
  get validation(): string | undefined {
    const props = this.getProps()

    return isFilled(props.validationMessage)
      ? props.validationMessage
      : executeFunctionRef(this.validationMessage)
  }

  /**
   * Checks if the counter should be displayed.
   *
   * Проверяет, нужно ли отображать счетчик.
   * @returns boolean value indicating whether to show the counter / логическое значение, указывающее, нужно ли показывать счетчик
   */
  showCounter(): boolean {
    return Boolean(executeFunctionRef(this.isCounter))
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @returns combined bindings object / объект объединенных привязок
   */
  protected override toBinds() {
    const props = this.getProps()
    const binds = {
      ...super.toBinds(),

      disabled: props.disabled,
      forceShow: props.forceShowMessage,
      helperMessage: props.helperMessage,
      validationMessage: this.validation,

      helperId: this.helperId,
      validationId: this.validationId,
      counterId: this.counterId
    }

    if (this.showCounter()) {
      return {
        ...binds,
        ...this.fieldCounter.bindsIntermediary
      }
    }

    return binds
  }
}
