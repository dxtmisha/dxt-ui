import {
  type ConstrBind,
  type DesignComponents,
  executeFunctionRef,
  getElementId,
  isFilled,
  type RefOrNormalOrFunction
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import { FieldCounterInclude } from '../FieldCounter'

import type {
  ComponentIncludeExtra,
  ComponentIncludeProps
} from '../../types/componentInclude'
import type {
  FieldMessageComponentInclude,
  FieldMessagePropsInclude
} from './basicTypes'
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
  /** Unique identifier for the helper message / Уникальный идентификатор для вспомогательного сообщения */
  readonly helperId: string = getElementId()

  /** Unique identifier for the validation message / Уникальный идентификатор для сообщения валидации */
  readonly validationId: string = getElementId()

  /** Unique identifier for the counter / Уникальный идентификатор для счетчика */
  readonly counterId: string = getElementId()

  /** Field counter include / Подключение счетчика поля */
  private readonly fieldCounter: FieldCounterInclude

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
   * Checks if the validation message should be displayed.
   *
   * Проверяет, нужно ли отображать сообщение валидации.
   * @returns boolean value indicating display status / логическое значение, указывающее на статус отображения
   */
  isValidationMessage(): boolean {
    return isFilled(this.validation)
  }

  /**
   * Checks if the counter should be displayed.
   *
   * Проверяет, нужно ли отображать счетчик.
   * @returns boolean value indicating whether to show the counter / логическое значение, указывающее, нужно ли показывать счетчик
   */
  showCounter(): boolean {
    return Boolean(
      executeFunctionRef(this.isCounter)
    )
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @returns combined bindings object / объект объединенных привязок
   */
  protected override toBinds(): ConstrBind<PropsExtra> {
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
