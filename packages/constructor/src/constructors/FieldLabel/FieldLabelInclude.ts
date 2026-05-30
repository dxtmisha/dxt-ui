import {
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
  FieldLabelComponentInclude,
  FieldLabelPropsInclude,
  FieldLabelSlotsInclude
} from './basicTypes'
import type { FieldLabelPropsBasic } from './props'

/**
 * The class returns data for working with the FieldLabel component.
 *
 * Класс возвращает данные для работы с компонентом FieldLabel.
 */
export class FieldLabelInclude<
  Props extends FieldLabelPropsInclude = FieldLabelPropsInclude,
  PropsExtra extends FieldLabelPropsBasic = FieldLabelPropsBasic
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    Record<string, any>,
    FieldLabelSlotsInclude
  > {
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
   * @param className class name / название класса
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param forId element ID / идентификатор элемента
   * @param isCounter whether to display the counter / отображать ли счетчик
   */
  constructor(
    className: string,
    props: ComponentIncludeProps<Props>,
    components?: DesignComponents<FieldLabelComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly forId?: RefOrNormalOrFunction<string>,
    protected readonly isCounter?: RefOrNormalOrFunction<boolean | undefined>
  ) {
    super(className, props, components, extra, index)

    this.fieldCounter = new FieldCounterInclude(className, props)
  }

  /**
   * Checks whether the component should be displayed.
   *
   * Проверяет, нужно ли отображать компонент.
   */
  override get is(): boolean {
    return isFilled(this.getProps().label) || this.showCounter()
  }

  /**
   * Returns the identifier.
   *
   * Возвращает идентификатор.
   */
  get id(): string {
    if (
      this.showCounter()
      && this.getProps().counterShow
    ) {
      return this.counterId
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
   */
  protected override toBinds() {
    const props = this.getProps()
    const binds = {
      ...super.toBinds(),

      for: executeFunctionRef(this.forId),
      label: props.label,
      required: props.required,

      labelId: this.labelId,
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
