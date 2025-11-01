import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxtmisha/functional'

import { FieldChangeInclude } from '../../classes/field/FieldChangeInclude'
import { FieldVisibilityInclude } from '../../classes/field/FieldVisibilityInclude'
import { FieldTypeInclude } from '../../classes/field/FieldTypeInclude'
import { FieldPatternInclude } from '../../classes/field/FieldPatternInclude'
import { FieldAttributesInclude } from '../../classes/field/FieldAttributesInclude'

import { FieldElementInclude } from '../../classes/field/FieldElementInclude'

import { FieldValueInclude } from '../../classes/field/FieldValueInclude'
import { FieldArrowInclude } from '../../classes/field/FieldArrowInclude'
import { InputPassword } from './InputPassword'
import { FieldMatchInclude } from '../../classes/field/FieldMatchInclude'

import { FieldInputModeInclude } from '../../classes/field/FieldInputModeInclude'
import { FieldCodeInclude } from '../../classes/field/FieldCodeInclude'
import { FieldValidationInclude } from '../../classes/field/FieldValidationInclude'
import { FieldEventInclude } from '../../classes/field/FieldEventInclude'

import { FieldInclude } from '../Field/FieldInclude'
import { MaskInclude } from '../Mask/MaskInclude.ts'

import type { FieldElementInput } from '../../types/fieldTypes'
import type { InputComponents, InputEmits, InputSlots } from './types'
import type { InputProps } from './props'

/**
 * Input
 */
export class Input {
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
   */
  constructor(
    protected readonly props: InputProps,
    protected readonly refs: ToRefs<InputProps>,
    protected readonly element: Ref<FieldElementInput>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<InputComponents, InputProps>,
    protected readonly slots?: InputSlots,
    protected readonly emits?: ConstrEmit<InputEmits>
  ) {
    this.change = new FieldChangeInclude(this.props)
    this.visibility = new FieldVisibilityInclude()
    this.type = new FieldTypeInclude(this.props, this.visibility)
    this.pattern = new FieldPatternInclude(this.props, this.type)
    this.inputMode = new FieldInputModeInclude(this.props, this.type)
    this.attributes = new FieldAttributesInclude(
      this.props,
      this.type,
      this.pattern
    )

    this.elementItem = new FieldElementInclude(
      this.props,
      this.element
    )

    this.value = new FieldValueInclude(
      this.props,
      this.refs,
      this.elementItem
    )
    this.arrow = new FieldArrowInclude(this.props, this.value, this.type)
    this.password = new InputPassword(this.props, this.visibility)
    this.match = new FieldMatchInclude(
      this.props,
      this.elementItem,
      this.value
    )

    this.code = new FieldCodeInclude(this.props)
    this.validation = new FieldValidationInclude(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code,
      this.match
    )
    this.event = new FieldEventInclude(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    )

    this.field = new FieldInclude(
      this.props,
      this.value,
      this.components,
      this.event,
      this.arrow,
      undefined,
      () => this.password.toggle()
    )
    this.mask = new MaskInclude(
      this.props,
      this.className,
      this.value,
      '',
      this.components,
      this.type
    )
  }
}
