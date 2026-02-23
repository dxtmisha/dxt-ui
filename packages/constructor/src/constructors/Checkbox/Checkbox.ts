import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import { FieldMessageInclude } from '../FieldMessage'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import { CheckboxIcon } from './CheckboxIcon'

import type { CheckboxComponents, CheckboxEmits, CheckboxSlots } from './types'
import type { CheckboxProps } from './props'

/**
 * Checkbox
 */
export class Checkbox {
  readonly type: string = 'checkbox'

  readonly attributes: FieldAttributesInclude
  readonly change: FieldChangeInclude
  readonly code: FieldCodeInclude
  readonly description: DescriptionInclude
  readonly elementItem: FieldElementInclude
  readonly enabled: EnabledInclude
  readonly event: FieldEventInclude
  readonly icon: CheckboxIcon
  readonly label: LabelInclude
  readonly message: FieldMessageInclude
  readonly progress: ProgressInclude
  readonly ripple: RippleInclude
  readonly skeleton: SkeletonInclude
  readonly validation: FieldValidationInclude
  readonly value: FieldValueInclude<boolean>

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
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.DescriptionConstructor class for creating a description/ класс для создания описания
   * @param constructors.EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
   * @param constructors.ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param constructors.RippleConstructor class for creating a ripple effect/ класс для создания эффекта волны
   * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   * @param constructors.FieldAttributesIncludeConstructor class for creating field attributes/ класс для создания атрибутов поля
   * @param constructors.FieldChangeIncludeConstructor class for creating field change attributes/ класс для создания атрибутов изменения поля
   * @param constructors.FieldElementIncludeConstructor class for creating field element attributes/ класс для создания атрибутов элемента поля
   * @param constructors.FieldEventIncludeConstructor class for creating field event/ класс для создания событий поля
   * @param constructors.FieldMessageConstructor class for creating field message/ класс для создания сообщения поля
   * @param constructors.FieldValidationIncludeConstructor class for creating field validation/ класс для создания валидации поля
   * @param constructors.FieldValueIncludeConstructor class for creating field value attributes/ класс для создания атрибутов значения поля
   */
  constructor(
    protected readonly props: CheckboxProps,
    protected readonly refs: ToRefs<CheckboxProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<CheckboxComponents, CheckboxProps>,
    protected readonly slots?: CheckboxSlots,
    protected readonly emits?: ConstrEmit<CheckboxEmits>,
    constructors?: {
      CheckboxIconConstructor?: typeof CheckboxIcon
      DescriptionConstructor?: typeof DescriptionInclude
      EnabledConstructor?: typeof EnabledInclude
      FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude
      FieldChangeIncludeConstructor?: typeof FieldChangeInclude
      FieldCodeIncludeConstructor?: typeof FieldCodeInclude
      FieldElementIncludeConstructor?: typeof FieldElementInclude
      FieldEventIncludeConstructor?: typeof FieldEventInclude
      FieldMessageConstructor?: typeof FieldMessageInclude
      FieldValidationIncludeConstructor?: typeof FieldValidationInclude
      FieldValueIncludeConstructor?: typeof FieldValueInclude<boolean>
      LabelConstructor?: typeof LabelInclude
      ProgressConstructor?: typeof ProgressInclude
      RippleConstructor?: typeof RippleInclude
      SkeletonConstructor?: typeof SkeletonInclude
    }
  ) {
    const {
      CheckboxIconConstructor = CheckboxIcon,
      DescriptionConstructor = DescriptionInclude,
      EnabledConstructor = EnabledInclude,
      FieldAttributesIncludeConstructor = FieldAttributesInclude,
      FieldChangeIncludeConstructor = FieldChangeInclude,
      FieldCodeIncludeConstructor = FieldCodeInclude,
      FieldElementIncludeConstructor = FieldElementInclude,
      FieldEventIncludeConstructor = FieldEventInclude,
      FieldMessageConstructor = FieldMessageInclude,
      FieldValidationIncludeConstructor = FieldValidationInclude,
      FieldValueIncludeConstructor = FieldValueInclude,
      LabelConstructor = LabelInclude,
      ProgressConstructor = ProgressInclude,
      RippleConstructor = RippleInclude,
      SkeletonConstructor = SkeletonInclude
    } = constructors ?? {}

    this.skeleton = new SkeletonConstructor(this.props, this.classDesign, ['classText'])
    this.progress = new ProgressConstructor(
      this.props,
      this.className,
      this.components,
      {
        circular: true,
        inverse: true
      }
    )
    this.change = new FieldChangeIncludeConstructor(this.props)

    this.elementItem = new FieldElementIncludeConstructor(this.props, this.element)
    this.attributes = new FieldAttributesIncludeConstructor(this.props)

    this.value = new FieldValueIncludeConstructor(
      this.props,
      this.refs,
      this.elementItem
    )

    this.code = new FieldCodeIncludeConstructor(this.props)
    this.validation = new FieldValidationIncludeConstructor(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    )

    this.event = new FieldEventIncludeConstructor(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    )

    this.message = new FieldMessageConstructor(
      this.props,
      this.className,
      this.components,
      this.validation.message
    )

    this.icon = new CheckboxIconConstructor(this.props, this.value)
    this.label = new LabelConstructor(
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      undefined,
      this.skeleton
    )
    this.description = new DescriptionConstructor(
      props,
      className,
      slots,
      this.skeleton
    )

    this.enabled = new EnabledConstructor(props, this.progress)

    this.ripple = new RippleConstructor(className, components, this.enabled)
  }
}
