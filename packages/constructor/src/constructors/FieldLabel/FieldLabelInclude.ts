// ai-none

import {
  type ConstrBind,
  type DesignComponents,
  type DesignName,
  executeFunctionRef,
  getElementId,
  getObjectNoUndefined,
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
  FieldLabelComponentInclude,
  FieldLabelPropsInclude,
  FieldLabelSlotsInclude
} from './basicTypes'
import type { FieldLabelPropsBasic } from './props'
import type { FieldLabelExpose } from './types'

/**
 * The class returns data for working with the FieldLabel component.
 *
 * Класс возвращает данные для работы с компонентом FieldLabel.
 */
export class FieldLabelInclude extends ComponentIncludeAbstract<
  FieldLabelPropsInclude,
  FieldLabelPropsBasic,
  FieldLabelExpose,
  FieldLabelSlotsInclude
> {
  /**
   * Checks whether the FieldLabel component should be displayed from properties.
   *
   * Проверяет, нужно ли отображать компонент FieldLabel на основе свойств.
   * @param props input properties / входные свойства
   * @param isCounter whether to display the counter / отображать ли счетчик
   * @returns true if the label or counter should be displayed / true, если нужно отобразить метку или счетчик
   */
  static is(
    props?: FieldLabelPropsInclude,
    isCounter?: boolean
  ): boolean {
    return isFilled(props?.label) || Boolean(isCounter)
  }

  /** Component name / Название компонента */
  protected readonly name = 'fieldLabel'

  /** Name of the property for component attributes / Название свойства для атрибутов компонента */
  protected readonly propsAttrsName = 'fieldLabelAttrs'

  /** Field counter include / Подключение счетчика поля */
  protected readonly fieldCounter: FieldCounterInclude

  /** Unique identifier for the label / Уникальный идентификатор для метки */
  protected readonly labelId: string = getElementId()

  /** Unique identifier for the counter / Уникальный идентификатор для счетчика */
  protected readonly counterId: string = getElementId()

  /**
   * Constructor
   *
   * Конструктор
   * @param props input parameter / входной параметр
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param forId element ID / идентификатор элемента
   * @param isCounter whether to display the counter / отображать ли счетчик
   */
  constructor(
    props: ComponentIncludeProps<FieldLabelPropsInclude>,
    naming: DesignName,
    components?: DesignComponents<FieldLabelComponentInclude, FieldLabelPropsInclude>,
    extra?: ComponentIncludeExtra<FieldLabelPropsBasic>,
    index?: string,
    protected readonly forId?: RefOrNormalOrFunction<string>,
    protected readonly isCounter?: RefOrNormalOrFunction<boolean | undefined>
  ) {
    super(props, naming, components, extra, index)

    this.fieldCounter = new FieldCounterInclude(props, naming)
  }

  /**
   * Checks whether the component should be displayed.
   *
   * Проверяет, нужно ли отображать компонент.
   * @returns true if the component should be displayed / true, если компонент должен отображаться
   */
  override get is(): boolean {
    return FieldLabelInclude.is(this.getProps(), this.showCounter())
  }

  /**
   * Returns the identifier.
   *
   * Возвращает идентификатор.
   * @returns counter identifier or empty string / идентификатор счетчика или пустая строка
   */
  get id(): string {
    if (
      this.showCounter()
      && this.fieldCounter.is
    ) {
      return this.getProps().counterId ?? this.counterId
    }

    return ''
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
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): Partial<ConstrBind<FieldLabelPropsBasic>> {
    const props = this.getProps()
    const superBinds = super.toBinds()
    const binds: Partial<ConstrBind<FieldLabelPropsBasic>> = {
      ...superBinds,
      ...getObjectNoUndefined({
        for: executeFunctionRef(this.forId),
        label: props.label,
        required: props.required,

        labelId: props.labelId ?? superBinds.labelId ?? this.labelId,
        counterId: props.counterId ?? superBinds.counterId ?? this.counterId
      })
    }

    if (this.showCounter()) {
      return {
        ...binds,
        ...getObjectNoUndefined(this.fieldCounter.bindsIntermediary)
      }
    }

    return binds
  }
}
