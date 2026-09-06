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
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import { FieldMessageInclude } from '../FieldMessage'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import { CheckboxIcon } from './CheckboxIcon'
import { CheckboxSelected } from './CheckboxSelected'

import type { CheckboxComponents, CheckboxEmits, CheckboxSlots } from './types'
import type { CheckboxProps } from './props'

/**
 * Class representing the Checkbox component business logic and state management.
 * Coordinates input attributes, selection states, validations, labels, icons, and interactions.
 *
 * Класс, представляющий бизнес-логику и управление состоянием компонента Checkbox.
 * Координирует атрибуты ввода, состояния выбора, валидацию, метки, иконки и взаимодействия.
 */
export class Checkbox {
  /** Input element type / Тип элемента ввода */
  readonly type: string = 'checkbox'

  /** Object for working with field attributes / Объект для работы с атрибутами поля */
  readonly attributes: FieldAttributesInclude

  /** Object for working with field changes / Объект для работы с изменениями поля */
  readonly change: FieldChangeInclude

  /** Object for working with field code / Объект для работы с кодом поля */
  readonly code: FieldCodeInclude

  /** Object for working with description / Объект для работы с описанием */
  readonly description: DescriptionInclude

  /** Object for working with field DOM element / Объект для работы с DOM-элементом поля */
  readonly elementItem: FieldElementInclude

  /** Object for working with enabled state / Объект для работы с состоянием активности */
  readonly enabled: EnabledInclude

  /** Object for working with field form context / Объект для работы с контекстом формы поля */
  readonly form: FieldFormInclude

  /** Object for working with field events / Объект для работы с событиями поля */
  readonly event: FieldEventInclude

  /** Object for working with checkbox icon / Объект для работы с иконкой флажка */
  readonly icon: CheckboxIcon

  /** Object for working with label / Объект для работы с меткой */
  readonly label: LabelInclude

  /** Object for working with field message / Объект для работы с сообщением поля */
  readonly message: FieldMessageInclude<any, any>

  /** Object for working with progress indicator / Объект для работы с индикатором прогресса */
  readonly progress: ProgressInclude

  /** Object for working with ripple effect / Объект для работы с эффектом волны */
  readonly ripple: RippleInclude

  /** Object for working with skeleton loading / Объект для работы со скелетной загрузкой */
  readonly skeleton: SkeletonInclude

  /** Object for working with field validation / Объект для работы с валидацией поля */
  readonly validation: FieldValidationInclude

  /** Object for working with field value / Объект для работы со значением поля */
  readonly value: FieldValueInclude<boolean>

  /**
   * Constructor for the Checkbox component.
   *
   * Конструктор для компонента Checkbox.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.CheckboxIconConstructor class for creating checkbox icon / класс для создания иконки флажка
   * @param constructors.DescriptionConstructor class for creating description / класс для создания описания
   * @param constructors.EnabledConstructor class for creating enabled state / класс для создания состояния активности
   * @param constructors.FieldAttributesIncludeConstructor class for creating field attributes / класс для создания атрибутов поля
   * @param constructors.FieldChangeIncludeConstructor class for creating field change attributes / класс для создания атрибутов изменения поля
   * @param constructors.FieldCodeIncludeConstructor class for creating field code / класс для создания кода поля
   * @param constructors.FieldElementIncludeConstructor class for creating field element attributes / класс для создания атрибутов элемента поля
   * @param constructors.FieldEventIncludeConstructor class for creating field events / класс для создания событий поля
   * @param constructors.FieldFormIncludeConstructor class for creating field form / класс для создания формы поля
   * @param constructors.FieldMessageConstructor class for creating field message / класс для создания сообщения поля
   * @param constructors.FieldValidationIncludeConstructor class for creating field validation / класс для создания валидации поля
   * @param constructors.FieldValueIncludeConstructor class for creating field value attributes / класс для создания атрибутов значения поля
   * @param constructors.LabelConstructor class for creating label / класс для создания метки
   * @param constructors.ProgressConstructor class for creating progress indicator / класс для создания индикатора прогресса
   * @param constructors.RippleConstructor class for creating ripple effect / класс для создания эффекта волны
   * @param constructors.SkeletonConstructor class for creating skeleton / класс для создания скелета
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
    constructors: {
      CheckboxIconConstructor?: typeof CheckboxIcon
      DescriptionConstructor?: typeof DescriptionInclude
      EnabledConstructor?: typeof EnabledInclude
      FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude
      FieldChangeIncludeConstructor?: typeof FieldChangeInclude
      FieldCodeIncludeConstructor?: typeof FieldCodeInclude
      FieldElementIncludeConstructor?: typeof FieldElementInclude
      FieldEventIncludeConstructor?: typeof FieldEventInclude
      FieldFormIncludeConstructor?: typeof FieldFormInclude
      FieldMessageConstructor?: typeof FieldMessageInclude
      FieldValidationIncludeConstructor?: typeof FieldValidationInclude
      FieldValueIncludeConstructor?: typeof FieldValueInclude<boolean>
      LabelConstructor?: typeof LabelInclude
      ProgressConstructor?: typeof ProgressInclude
      RippleConstructor?: typeof RippleInclude
      SkeletonConstructor?: typeof SkeletonInclude
    } = {}
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
      FieldFormIncludeConstructor = FieldFormInclude,
      FieldMessageConstructor = FieldMessageInclude,
      FieldValidationIncludeConstructor = FieldValidationInclude,
      FieldValueIncludeConstructor = FieldValueInclude,
      LabelConstructor = LabelInclude,
      ProgressConstructor = ProgressInclude,
      RippleConstructor = RippleInclude,
      SkeletonConstructor = SkeletonInclude
    } = constructors

    this.skeleton = new SkeletonConstructor(this.props, this.classDesign, ['classText'])
    this.progress = new ProgressConstructor(
      this.className,
      this.props,
      this.components,
      {
        circular: true,
        inverse: true
      }
    )
    this.change = new FieldChangeIncludeConstructor(this.props)

    this.elementItem = new FieldElementIncludeConstructor(this.props, this.element)
    this.attributes = new FieldAttributesIncludeConstructor(
      this.props,
      undefined,
      undefined,
      undefined,
      this.type
    )

    this.value = new FieldValueIncludeConstructor(
      this.props,
      this.refs,
      this.elementItem,
      undefined,
      false,
      Boolean(this.props.valueVariant)
    )

    this.code = new FieldCodeIncludeConstructor(this.props)
    this.validation = new FieldValidationIncludeConstructor(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    )
    this.form = new FieldFormIncludeConstructor(
      this.props,
      this.value,
      this.validation
    )
    this.event = new FieldEventIncludeConstructor(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits,
      this.form
    )

    this.message = new FieldMessageConstructor(
      this.className,
      this.props,
      this.components,
      undefined,
      undefined,
      () => this.validation.message
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

    new CheckboxSelected(
      this.props,
      this.refs,
      this.value,
      this.emits
    )

    this.enabled = new EnabledConstructor(props, this.progress)

    this.ripple = new RippleConstructor(className, components, this.enabled)
  }

  /**
   * Triggering the event for changes in the checkbox.
   *
   * Вызов события для изменения в checkbox.
   * @param event event object / объект события
   */
  readonly onInput = (event: Event): void => {
    this.event.onChecked(event)
  }
}
