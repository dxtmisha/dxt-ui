import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldVisibilityInclude } from '../../classes/Field/FieldVisibilityInclude'
import { FieldTypeInclude } from '../../classes/Field/FieldTypeInclude'
import { FieldPatternInclude } from '../../classes/Field/FieldPatternInclude'
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'

import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'

import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { FieldArrowInclude } from '../../classes/Field/FieldArrowInclude'
import { InputPassword } from './InputPassword'
import { FieldMatchInclude } from '../../classes/Field/FieldMatchInclude'

import { FieldInputModeInclude } from '../../classes/Field/FieldInputModeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { TextInclude } from '../../classes/TextInclude'

import { FieldInclude } from '../Field/FieldInclude'
import { MaskInclude } from '../Mask/MaskInclude'

import type { FieldElementInput } from '../../types/fieldTypes'
import type { InputComponents, InputEmits, InputSlots } from './types'
import type { InputProps } from './props'

/**
 * Input
 */
export class Input {
  readonly text: TextInclude
  readonly visibility: FieldVisibilityInclude
  readonly type: FieldTypeInclude
  readonly pattern: FieldPatternInclude
  readonly inputMode: FieldInputModeInclude
  readonly attributes: FieldAttributesInclude

  readonly elementItem: FieldElementInclude
  readonly change: FieldChangeInclude

  readonly value: FieldValueInclude
  readonly arrow: FieldArrowInclude
  readonly password: InputPassword
  readonly match: FieldMatchInclude

  readonly code: FieldCodeInclude
  readonly validation: FieldValidationInclude
  readonly event: FieldEventInclude

  readonly field: FieldInclude
  readonly mask: MaskInclude

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
   * @param FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
   * @param FieldVisibilityIncludeConstructor class for working with field visibility/ класс для работы с видимостью поля
   * @param FieldTypeIncludeConstructor class for working with field type/ класс для работы с типом поля
   * @param FieldPatternIncludeConstructor class for working with field pattern/ класс для работы с шаблоном поля
   * @param FieldInputModeIncludeConstructor class for working with field input mode/ класс для работы с режимом ввода поля
   * @param FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
   * @param FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
   * @param FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
   * @param FieldArrowIncludeConstructor class for working with field arrow/ класс для работы со стрелкой поля
   * @param InputPasswordConstructor class for working with input password/ класс для работы с паролем ввода
   * @param FieldMatchIncludeConstructor class for working with field match/ класс для работы с совпадением поля
   * @param FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
   * @param FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
   * @param FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
   * @param FieldIncludeConstructor class for working with field/ класс для работы с полем
   * @param MaskIncludeConstructor class for working with mask/ класс для работы с маской
   * @param TextIncludeConstructor class for working with text/ класс для работы с текстом
   */
  constructor(
    protected readonly props: InputProps,
    protected readonly refs: ToRefs<InputProps>,
    protected readonly element: Ref<FieldElementInput>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<InputComponents, InputProps>,
    protected readonly slots?: InputSlots,
    protected readonly emits?: ConstrEmit<InputEmits>,
    FieldChangeIncludeConstructor: typeof FieldChangeInclude = FieldChangeInclude,
    FieldVisibilityIncludeConstructor: typeof FieldVisibilityInclude = FieldVisibilityInclude,
    FieldTypeIncludeConstructor: typeof FieldTypeInclude = FieldTypeInclude,
    FieldPatternIncludeConstructor: typeof FieldPatternInclude = FieldPatternInclude,
    FieldInputModeIncludeConstructor: typeof FieldInputModeInclude = FieldInputModeInclude,
    FieldAttributesIncludeConstructor: typeof FieldAttributesInclude = FieldAttributesInclude,
    FieldElementIncludeConstructor: typeof FieldElementInclude = FieldElementInclude,
    FieldValueIncludeConstructor: typeof FieldValueInclude = FieldValueInclude,
    FieldArrowIncludeConstructor: typeof FieldArrowInclude = FieldArrowInclude,
    InputPasswordConstructor: typeof InputPassword = InputPassword,
    FieldMatchIncludeConstructor: typeof FieldMatchInclude = FieldMatchInclude,
    FieldCodeIncludeConstructor: typeof FieldCodeInclude = FieldCodeInclude,
    FieldValidationIncludeConstructor: typeof FieldValidationInclude = FieldValidationInclude,
    FieldEventIncludeConstructor: typeof FieldEventInclude = FieldEventInclude,
    FieldIncludeConstructor: typeof FieldInclude = FieldInclude,
    MaskIncludeConstructor: typeof MaskInclude = MaskInclude,
    TextIncludeConstructor: typeof TextInclude = TextInclude
  ) {
    this.text = new TextIncludeConstructor(this.props)
    this.change = new FieldChangeIncludeConstructor(this.props)
    this.visibility = new FieldVisibilityIncludeConstructor()
    this.type = new FieldTypeIncludeConstructor(this.props, this.visibility)
    this.pattern = new FieldPatternIncludeConstructor(this.props, this.type)
    this.inputMode = new FieldInputModeIncludeConstructor(this.props, this.type)
    this.attributes = new FieldAttributesIncludeConstructor(
      this.props,
      this.type,
      this.pattern,
      this.inputMode
    )

    this.elementItem = new FieldElementIncludeConstructor(
      this.props,
      this.element
    )

    this.value = new FieldValueIncludeConstructor(
      this.props,
      this.refs,
      this.elementItem
    )
    this.arrow = new FieldArrowIncludeConstructor(this.props, this.value, this.type)
    this.password = new InputPasswordConstructor(this.props, this.visibility, this.text)
    this.match = new FieldMatchIncludeConstructor(
      this.props,
      this.elementItem,
      this.value
    )

    this.code = new FieldCodeIncludeConstructor(this.props)
    this.validation = new FieldValidationIncludeConstructor(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code,
      this.match
    )
    this.event = new FieldEventIncludeConstructor(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    )

    this.field = new FieldIncludeConstructor(
      this.props,
      this.value,
      this.components,
      this.event,
      this.arrow,
      undefined,
      () => this.password.toggle(),
      undefined,
      undefined,
      computed(() => ({
        iconTrailing: this.password.icon.value ?? this.props.iconTrailing,
        maxlength: this.props.maxlength ?? this.props.max
      }))
    )
    this.mask = new MaskIncludeConstructor(
      this.props,
      this.className,
      this.value,
      '',
      this.components,
      this.type
    )
  }
}
