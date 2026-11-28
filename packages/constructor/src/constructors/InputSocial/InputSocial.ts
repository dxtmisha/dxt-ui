import { computed, mergeProps, type Ref } from 'vue'
import { MediaSocial, type InputSocialItem } from '@dxtmisha/media'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  type NumberOrString
} from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import { FieldInclude } from '../Field'
import { MaskInclude, type MaskPropsInclude } from '../Mask'

import type { InputSocialComponents, InputSocialEmits, InputSocialSlots } from './types'
import type { InputSocialProps } from './props'

/** InputSocial dependency constructors type / Тип конструкторов зависимостей InputSocial */
export type InputSocialConstructors = {
  /** Field attributes constructor / Конструктор атрибутов поля */
  attributes: typeof FieldAttributesInclude
  /** Field change constructor / Конструктор изменения поля */
  change: typeof FieldChangeInclude
  /** Field code constructor / Конструктор кода поля */
  code: typeof FieldCodeInclude
  /** Field element constructor / Конструктор элемента поля */
  elementItem: typeof FieldElementInclude
  /** Field event constructor / Конструктор событий поля */
  event: typeof FieldEventInclude
  /** Field constructor / Конструктор поля */
  field: typeof FieldInclude
  /** Field form constructor / Конструктор формы поля */
  form: typeof FieldFormInclude
  /** Mask constructor / Конструктор маски */
  mask: typeof MaskInclude
  /** Field validation constructor / Конструктор валидации поля */
  validation: typeof FieldValidationInclude
  /** Field value constructor / Конструктор значения поля */
  value: typeof FieldValueInclude<string>
}

/**
 * Core class for managing social network input fields.
 * It handles the retrieval of social network configuration (mask, icons, prefixes) and binds them to the underlying input component.
 *
 * Базовый класс для управления полями ввода социальных сетей.
 * Обрабатывает получение конфигурации социальной сети (маски, иконки, префиксы) и связывает их с базовым компонентом ввода.
 */
export class InputSocial extends DesignLogicAbstract<
  HTMLElement,
  InputSocialComponents,
  InputSocialEmits,
  InputSocialSlots,
  InputSocialProps,
  InputSocialConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<InputSocialConstructors> = {
    attributes: {
      item: FieldAttributesInclude,
      parameters: () => [this.props]
    },
    change: {
      item: FieldChangeInclude,
      parameters: () => [this.props]
    },
    code: {
      item: FieldCodeInclude,
      parameters: () => [this.props]
    },
    elementItem: {
      item: FieldElementInclude,
      parameters: () => [
        this.props,
        this.element
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
    field: {
      item: FieldInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        undefined,
        undefined,
        () => this.i('value'),
        () => this.i('event')
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
    mask: {
      item: MaskInclude,
      parameters: () => [
        () => this.bindsMask,
        this.naming,
        this.components,
        undefined,
        undefined,
        () => this.i('value'),
        '-'
      ]
    },
    validation: {
      item: FieldValidationInclude,
      parameters: () => [
        this.props,
        () => this.i('attributes'),
        () => this.i('value'),
        () => this.i('change'),
        () => this.i('code'),
        undefined,
        this.isMounted
      ]
    },
    value: {
      item: FieldValueInclude<string>,
      parameters: () => [
        this.props,
        () => this.i('elementItem')
      ]
    }
  }

  /**
   * Constructor for InputSocial.
   *
   * Конструктор для InputSocial.
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<InputSocialProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<InputSocialComponents, InputSocialProps>,
    slots?: InputSocialSlots,
    emits?: ConstrEmit<InputSocialEmits>,
    constructors?: Partial<InputSocialConstructors>
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
    this.callInstance('form', item => item)
    this.i('mask')
  }

  /**
   * Retrieves the current social network configuration based on the selected socialType.
   *
   * Возвращает текущую конфигурацию социальной сети на основе выбранного socialType.
   */
  readonly data = computed<InputSocialItem<MaskPropsInclude['mask']> | undefined>(() => {
    return (this.props.socialType && MediaSocial.get(this.props.socialType) as InputSocialItem<MaskPropsInclude['mask']>) || undefined
  })

  /**
   * Returns the label of the social network to display in the input.
   *
   * Возвращает метку социальной сети для отображения в поле ввода.
   */
  get label(): NumberOrString | undefined {
    return this.data.value?.name
  }

  /**
   * Returns the URL prefix for the current social network profile.
   *
   * Возвращает префикс URL для профиля текущей социальной сети.
   */
  get prefix(): NumberOrString | undefined {
    return this.data.value?.prefix
  }

  /**
   * Returns the URL suffix for the current social network profile.
   *
   * Возвращает суффикс URL для профиля текущей социальной сети.
   */
  get suffix(): NumberOrString | undefined {
    return this.data.value?.suffix
  }

  /**
   * Returns the specific icon for the social network from the provided socialIcons property.
   *
   * Возвращает конкретную иконку для социальной сети из переданного свойства socialIcons.
   */
  get icon(): string | undefined {
    const socialIcons: Partial<Record<string, string>> | undefined = this.props.socialIcons

    if (
      this.props.socialType
      && socialIcons?.[this.props.socialType]
    ) {
      return socialIcons[this.props.socialType]
    }

    return this.data.value?.icon
  }

  /** InputSocial binding values and event handlers / Значения привязок ввода и обработчики событий */
  get binds(): ConstrBind {
    const event = this.i('event')

    return mergeProps(
      this.i('attributes').listForInput,
      {
        value: this.i('value').item.value,
        onFocus: event.onFocus,
        onBlur: event.onBlur,
        onInput: event.onInput,
        onChange: event.onChange
      }
    )
  }

  /**
   * Generates binding properties for the mask component.
   *
   * Генерирует свойства привязки для компонента маски.
   */
  get bindsMask(): MaskPropsInclude {
    return {
      ...this.props,
      mask: this.data.value?.mask,
      maskVisible: false
    }
  }
}
