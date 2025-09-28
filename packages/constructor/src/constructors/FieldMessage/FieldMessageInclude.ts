import { computed, type VNode } from 'vue'
import {
  type ConstrBind,
  DesignComponents,
  getRef,
  isFilled,
  type RefOrNormal,
  type RefType,
  toBinds
} from '@dxtmisha/functional'

import { FieldCounterInclude } from '../FieldCounter'

import type {
  FieldMessageComponentInclude,
  FieldMessagePropsInclude
} from './basicTypes'
import type { FieldMessagePropsBasic } from './props'

/**
 * The class returns data for working with the FieldMessage component
 *
 * Класс возвращает данные для работы с компонентом FieldMessage
 */
export class FieldMessageInclude<
  Props extends FieldMessagePropsInclude = FieldMessagePropsInclude,
  PropsExtra extends ConstrBind<FieldMessagePropsBasic> = ConstrBind<FieldMessagePropsBasic>
> {
  /** Field counter include/ Подключение счетчика поля */
  private readonly fieldCounter: FieldCounterInclude

  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param validationMessage error line/ строка ошибки
   * @param isCounter whether to display the counter/ отображать ли счетчик
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<FieldMessageComponentInclude, Props>,
    protected readonly validationMessage?: RefOrNormal<string>,
    protected readonly isCounter?: RefType<boolean | undefined>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
    this.fieldCounter = new FieldCounterInclude(this.props, this.className)
  }

  /** Validation message computed/ Вычисляемое сообщение валидации */
  readonly validation = computed<string | undefined>(() =>
    isFilled(this.props.validationMessage)
      ? this.props.validationMessage
      : getRef(this.validationMessage)
  )

  /** Checks if validation message should be displayed/ Проверяет, надо ли отображать сообщение валидации */
  readonly isValidationMessage = computed<boolean>(() =>
    isFilled(this.validation.value)
  )

  /** Computed bindings for FieldMessage/ Вычисляемые привязки для FieldMessage */
  readonly binds = computed<PropsExtra>(() => {
    return toBinds<PropsExtra>(
      getRef(this.extra),
      this.isCounter?.value
        ? this.fieldCounter.bindsIntermediary.value
        : {},
      {
        disabled: this.props.disabled,
        forceShow: this.props.forceShowMessage,
        helperMessage: this.props.helperMessage,
        validationMessage: this.validation.value
      },
      this.props.fieldMessageAttrs
    )
  })

  /**
   * Render the FieldMessage component.
   *
   * Рендер компонента FieldMessage.
   */
  readonly render = (): VNode[] => {
    if (this.components) {
      return this.components.render(
        'fieldMessage',
        {
          ...toBinds(
            this.binds.value,
            { class: `${this.className}__fieldMessage` }
          )
        },
        undefined,
        this.index
      )
    }

    return []
  }
}
