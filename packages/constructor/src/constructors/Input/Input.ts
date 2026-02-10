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
   * @param constructors object with classes/ объект с классами
   * @param constructors.FieldArrowIncludeConstructor class for working with field arrow/ класс для работы со стрелкой поля
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
   * @param constructors.FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
   * @param constructors.FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
   * @param constructors.FieldIncludeConstructor class for working with field/ класс для работы с полем
   * @param constructors.FieldInputModeIncludeConstructor class for working with field input mode/ класс для работы с режимом ввода поля
   * @param constructors.FieldMatchIncludeConstructor class for working with field match/ класс для работы с совпадением поля
   * @param constructors.FieldPatternIncludeConstructor class for working with field pattern/ класс для работы с шаблоном поля
   * @param constructors.FieldTypeIncludeConstructor class for working with field type/ класс для работы с типом поля
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
   * @param constructors.FieldVisibilityIncludeConstructor class for working with field visibility/ класс для работы с видимостью поля
   * @param constructors.InputPasswordConstructor class for working with input password/ класс для работы с паролем ввода
   * @param constructors.MaskIncludeConstructor class for working with mask/ класс для работы с маской
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
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
    constructors?: {
      FieldArrowIncludeConstructor?: typeof FieldArrowInclude
      FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude
      FieldChangeIncludeConstructor?: typeof FieldChangeInclude
      FieldCodeIncludeConstructor?: typeof FieldCodeInclude
      FieldElementIncludeConstructor?: typeof FieldElementInclude
      FieldEventIncludeConstructor?: typeof FieldEventInclude
      FieldIncludeConstructor?: typeof FieldInclude
      FieldInputModeIncludeConstructor?: typeof FieldInputModeInclude
      FieldMatchIncludeConstructor?: typeof FieldMatchInclude
      FieldPatternIncludeConstructor?: typeof FieldPatternInclude
      FieldTypeIncludeConstructor?: typeof FieldTypeInclude
      FieldValidationIncludeConstructor?: typeof FieldValidationInclude
      FieldValueIncludeConstructor?: typeof FieldValueInclude
      FieldVisibilityIncludeConstructor?: typeof FieldVisibilityInclude
      InputPasswordConstructor?: typeof InputPassword
      MaskIncludeConstructor?: typeof MaskInclude
      TextIncludeConstructor?: typeof TextInclude
    }
  ) {
    const {
      FieldArrowIncludeConstructor = FieldArrowInclude,
      FieldAttributesIncludeConstructor = FieldAttributesInclude,
      FieldChangeIncludeConstructor = FieldChangeInclude,
      FieldCodeIncludeConstructor = FieldCodeInclude,
      FieldElementIncludeConstructor = FieldElementInclude,
      FieldEventIncludeConstructor = FieldEventInclude,
      FieldIncludeConstructor = FieldInclude,
      FieldInputModeIncludeConstructor = FieldInputModeInclude,
      FieldMatchIncludeConstructor = FieldMatchInclude,
      FieldPatternIncludeConstructor = FieldPatternInclude,
      FieldTypeIncludeConstructor = FieldTypeInclude,
      FieldValidationIncludeConstructor = FieldValidationInclude,
      FieldValueIncludeConstructor = FieldValueInclude,
      FieldVisibilityIncludeConstructor = FieldVisibilityInclude,
      InputPasswordConstructor = InputPassword,
      MaskIncludeConstructor = MaskInclude,
      TextIncludeConstructor = TextInclude
    } = constructors ?? {}

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
