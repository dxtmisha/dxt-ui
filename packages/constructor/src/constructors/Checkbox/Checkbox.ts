import type { Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { FieldMessageInclude } from '../FieldMessage'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import { CheckboxIcon } from './CheckboxIcon'
import { CheckboxSelected } from './CheckboxSelected'

import type { CheckboxProps } from './props'
import type { CheckboxComponents, CheckboxEmits, CheckboxSlots } from './types'

/** Checkbox dependency constructors type / Тип конструкторов зависимостей Checkbox */
export type CheckboxConstructors = {
  /** Field attributes constructor / Конструктор атрибутов поля */
  attributes: typeof FieldAttributesInclude
  /** Field change constructor / Конструктор изменения поля */
  change: typeof FieldChangeInclude
  /** Field code constructor / Конструктор кода поля */
  code: typeof FieldCodeInclude
  /** Description constructor / Конструктор описания */
  description: typeof DescriptionInclude
  /** Field element constructor / Конструктор элемента поля */
  elementItem: typeof FieldElementInclude
  /** Enabled status constructor / Конструктор статуса активности */
  enabled: typeof EnabledInclude
  /** Field event constructor / Конструктор события поля */
  event: typeof FieldEventInclude
  /** Field form constructor / Конструктор формы поля */
  form: typeof FieldFormInclude
  /** Checkbox icon constructor / Конструктор иконки флажка */
  icon: typeof CheckboxIcon
  /** Label constructor / Конструктор метки */
  label: typeof LabelInclude
  /** Field message constructor / Конструктор сообщения поля */
  message: typeof FieldMessageInclude<any, any>
  /** Model constructor / Конструктор модели */
  model: typeof ModelInclude<string | undefined>
  /** Progress constructor / Конструктор индикатора прогресса */
  progress: typeof ProgressInclude
  /** Ripple constructor / Конструктор эффекта волны */
  ripple: typeof RippleInclude
  /** Checkbox selected state constructor / Конструктор выбранного состояния флажка */
  selected: typeof CheckboxSelected
  /** Skeleton constructor / Конструктор скелетона */
  skeleton: typeof SkeletonInclude
  /** Field validation constructor / Конструктор валидации поля */
  validation: typeof FieldValidationInclude
  /** Field value constructor / Конструктор значения поля */
  value: typeof FieldValueInclude<boolean>
}

/**
 * Class representing the Checkbox component business logic and state management.
 * Coordinates input attributes, selection states, validations, labels, icons, and interactions.
 *
 * Класс, представляющий бизнес-логику и управление состоянием компонента Checkbox.
 * Координирует атрибуты ввода, состояния выбора, валидацию, метки, иконки и взаимодействия.
 */
export class Checkbox extends DesignLogicAbstract<
  HTMLLabelElement,
  CheckboxComponents,
  CheckboxEmits,
  CheckboxSlots,
  CheckboxProps,
  CheckboxConstructors
> {
  /** Input element type / Тип элемента ввода */
  readonly type: string = 'checkbox'

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<CheckboxConstructors> = {
    attributes: {
      item: FieldAttributesInclude,
      parameters: () => [
        this.props,
        undefined,
        undefined,
        undefined,
        this.type
      ]
    },
    change: {
      item: FieldChangeInclude,
      parameters: () => [this.props]
    },
    code: {
      item: FieldCodeInclude,
      parameters: () => [this.props]
    },
    description: {
      item: DescriptionInclude,
      canCreate: () => DescriptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots,
        () => this.callInstance('skeleton', item => item)
      ]
    },
    elementItem: {
      item: FieldElementInclude,
      parameters: () => [
        this.props,
        this.element
      ]
    },
    enabled: {
      item: EnabledInclude,
      parameters: () => [
        this.props,
        () => this.callInstance('progress', item => item)
      ]
    },
    event: {
      item: FieldEventInclude,
      parameters: () => [
        this.props,
        () => this.i('change'),
        () => this.i('value'),
        () => this.i('validation'),
        this.emits,
        () => this.callInstance('form', item => item)
      ]
    },
    form: {
      item: FieldFormInclude,
      canCreate: () => FieldFormInclude.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('value'),
        () => this.i('validation')
      ]
    },
    icon: {
      item: CheckboxIcon,
      parameters: () => [
        this.props,
        () => this.i('value')
      ]
    },
    label: {
      item: LabelInclude,
      canCreate: () => LabelInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots,
        undefined,
        undefined,
        undefined,
        () => this.callInstance('skeleton', item => item)
      ]
    },
    message: {
      item: FieldMessageInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        undefined,
        undefined,
        () => this.i('validation').message
      ]
    },
    model: {
      item: ModelInclude<string | undefined>,
      parameters: () => [
        'selected',
        this.emits
      ]
    },
    progress: {
      item: ProgressInclude,
      canCreate: () => ProgressInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        {
          circular: true,
          inverse: true
        }
      ]
    },
    ripple: {
      item: RippleInclude,
      canCreate: () => RippleInclude.is(this.props),
      parameters: () => [
        this.naming,
        () => this.i('enabled'),
        this.components
      ]
    },
    selected: {
      item: CheckboxSelected,
      canCreate: () => CheckboxSelected.is(this.props),
      conditions: () => CheckboxSelected.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('value'),
        () => this.i('model')
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      canCreate: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        ['classText']
      ]
    },
    validation: {
      item: FieldValidationInclude,
      parameters: () => [
        this.props,
        () => this.i('attributes'),
        () => this.i('value'),
        () => this.i('change'),
        () => this.i('code')
      ]
    },
    value: {
      item: FieldValueInclude<boolean>,
      parameters: () => [
        this.props,
        () => this.i('elementItem'),
        undefined,
        false,
        Boolean(this.props.valueVariant)
      ]
    }
  }

  /**
   * Constructor for the Checkbox component.
   *
   * Конструктор для компонента Checkbox.
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<CheckboxProps>,
    element: Ref<HTMLLabelElement | undefined>,
    naming: DesignName,
    components?: DesignComp<CheckboxComponents, CheckboxProps>,
    slots?: CheckboxSlots,
    emits?: ConstrEmit<CheckboxEmits>,
    constructors?: Partial<CheckboxConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    this.i('event')
    this.i('validation')

    if (FieldFormInclude.is(this.props)) {
      this.i('form')
    }

    if (CheckboxSelected.is(this.props)) {
      this.i('selected')
    }
  }

  /**
   * Computed bindings for the root label element.
   *
   * Вычисляемые привязки для корневого элемента label.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ConstrBind {
    return {
      ...AriaStaticInclude.labelledby(this.callInstance('label', item => item.id)),
      ...AriaStaticInclude.describedby(this.callInstance('description', item => item.id))
    }
  }

  /**
   * Prevents native checkbox or radio toggling when the control is read-only.
   *
   * Предотвращает нативное переключение флажка или радиокнопки в режиме только для чтения.
   * @param event click event object / объект события клика
   */
  readonly onClick = (event: MouseEvent): void => {
    if (this.props.readonly) {
      event.preventDefault()
    }
  }

  /**
   * Triggering the event for changes in the checkbox.
   *
   * Вызов события для изменения в checkbox.
   * @param event event object / объект события
   */
  readonly onInput = (event: Event): void => {
    if (
      this.props.readonly
      && event.target instanceof HTMLInputElement
    ) {
      event.target.checked = Boolean(this.i('value').item.value)
    }

    this.i('event').onChecked(event)
  }
}
