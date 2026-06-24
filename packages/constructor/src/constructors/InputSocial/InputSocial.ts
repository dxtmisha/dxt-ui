import type { Ref, ToRefs } from 'vue'
import { MediaSocial, type InputSocialItem } from '@dxtmisha/media'
import type { ConstrEmit, DesignComp, NumberOrString } from '@dxtmisha/functional'

import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'

import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'

import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'

import { FieldInclude } from '../Field'
import { MaskInclude, type MaskPropsInclude } from '../Mask'

import type { FieldElementInput } from '../../types/fieldTypes'
import type { InputSocialComponents, InputSocialEmits, InputSocialSlots } from './types'
import type { InputSocialProps } from './props'

/**
 * Core class for managing social network input fields.
 * It handles the retrieval of social network configuration (mask, icons, prefixes) and binds them to the underlying input component.
 *
 * Базовый класс для управления полями ввода социальных сетей.
 * Обрабатывает получение конфигурации социальной сети (маски, иконки, префиксы) и связывает их с базовым компонентом ввода.
 */
export class InputSocial {
  /** Field attributes manager / Менеджер атрибутов поля */
  readonly attributes: FieldAttributesInclude

  /** Input element manager / Менеджер элемента ввода */
  readonly elementItem: FieldElementInclude

  /** Field change state manager / Менеджер состояния изменения поля */
  readonly change: FieldChangeInclude

  /** Field value manager / Менеджер значения поля */
  readonly value: FieldValueInclude

  /** Field code manager / Менеджер кода поля */
  readonly code: FieldCodeInclude

  /** Field validation manager / Менеджер валидации поля */
  readonly validation: FieldValidationInclude

  /** Field events manager / Менеджер событий поля */
  readonly event: FieldEventInclude

  /** Basic field component manager / Менеджер базового компонента поля */
  readonly field: FieldInclude

  /** Mask component manager / Менеджер компонента маски */
  readonly mask: MaskInclude

  /**
   * Constructor for InputSocial.
   *
   * Конструктор для InputSocial.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes / класс для работы с атрибутами поля
   * @param constructors.FieldChangeIncludeConstructor class for working with field change / класс для работы с изменением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code / класс для работы с кодом поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element / класс для работы с элементом поля
   * @param constructors.FieldEventIncludeConstructor class for working with field event / класс для работы с событием поля
   * @param constructors.FieldIncludeConstructor class for working with field / класс для работы с полем
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation / класс для работы с валидацией поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value / класс для работы со значением поля
   * @param constructors.MaskIncludeConstructor class for working with mask / класс для работы с маской
   */
  constructor(
    protected readonly props: InputSocialProps,
    protected readonly refs: ToRefs<InputSocialProps>,
    protected readonly element: Ref<FieldElementInput>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<InputSocialComponents, InputSocialProps>,
    protected readonly slots?: InputSocialSlots,
    protected readonly emits?: ConstrEmit<InputSocialEmits>,
    constructors: {
      FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude
      FieldChangeIncludeConstructor?: typeof FieldChangeInclude
      FieldCodeIncludeConstructor?: typeof FieldCodeInclude
      FieldElementIncludeConstructor?: typeof FieldElementInclude
      FieldEventIncludeConstructor?: typeof FieldEventInclude
      FieldIncludeConstructor?: typeof FieldInclude
      FieldValidationIncludeConstructor?: typeof FieldValidationInclude
      FieldValueIncludeConstructor?: typeof FieldValueInclude
      MaskIncludeConstructor?: typeof MaskInclude
    } = {}
  ) {
    const {
      FieldAttributesIncludeConstructor = FieldAttributesInclude,
      FieldChangeIncludeConstructor = FieldChangeInclude,
      FieldCodeIncludeConstructor = FieldCodeInclude,
      FieldElementIncludeConstructor = FieldElementInclude,
      FieldEventIncludeConstructor = FieldEventInclude,
      FieldIncludeConstructor = FieldInclude,
      FieldValidationIncludeConstructor = FieldValidationInclude,
      FieldValueIncludeConstructor = FieldValueInclude,
      MaskIncludeConstructor = MaskInclude
    } = constructors

    this.change = new FieldChangeIncludeConstructor(this.props)
    this.attributes = new FieldAttributesIncludeConstructor(this.props)

    this.elementItem = new FieldElementIncludeConstructor(
      this.props,
      this.element
    )

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
      this.code,
      undefined
    )
    this.event = new FieldEventIncludeConstructor(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    )

    this.field = new FieldIncludeConstructor(
      this.className,
      this.props,
      this.components,
      undefined,
      undefined,
      this.value,
      this.event
    )
    this.mask = new MaskIncludeConstructor(
      this.className,
      () => this.bindsMask,
      this.components,
      undefined,
      undefined,
      this.value,
      '-'
    )
  }

  /**
   * Retrieves the current social network configuration based on the selected socialType.
   *
   * Возвращает текущую конфигурацию социальной сети на основе выбранного socialType.
   */
  get data(): InputSocialItem | undefined {
    return (this.props.socialType && MediaSocial.get(this.props.socialType)) || undefined
  }

  /**
   * Returns the label of the social network to display in the input.
   *
   * Возвращает метку социальной сети для отображения в поле ввода.
   */
  get label(): NumberOrString | undefined {
    return this.data?.name
  }

  /**
   * Returns the URL prefix for the current social network profile.
   *
   * Возвращает префикс URL для профиля текущей социальной сети.
   */
  get prefix(): NumberOrString | undefined {
    return this.data?.prefix
  }

  /**
   * Returns the URL suffix for the current social network profile.
   *
   * Возвращает суффикс URL для профиля текущей социальной сети.
   */
  get suffix(): NumberOrString | undefined {
    return this.data?.suffix
  }

  /**
   * Returns the specific icon for the social network from the provided socialIcons property.
   *
   * Возвращает конкретную иконку для социальной сети из переданного свойства socialIcons.
   */
  get icon(): string | undefined {
    if (
      this.props.socialType
      && this.props.socialIcons
    ) {
      return this.props.socialIcons[this.props.socialType]
    }

    return undefined
  }

  /** InputSocial binding values and event handlers / Значения привязок ввода и обработчики событий */
  get binds(): Record<string, any> {
    return {
      ...this.attributes.listForInput,
      value: this.value.item.value,
      onBlur: this.event.onBlur,
      onInput: this.event.onInput,
      onChange: this.event.onChange
    }
  }

  /**
   * Generates binding properties for the mask component.
   *
   * Генерирует свойства привязки для компонента маски.
   */
  get bindsMask(): MaskPropsInclude {
    return {
      ...this.props,
      mask: this.data?.mask,
      maskVisible: false
    }
  }
}
