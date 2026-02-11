import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, toBinds } from '@dxtmisha/functional'

import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldInclude } from '../Field/FieldInclude'
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'

import type { TextareaComponents, TextareaEmits, TextareaSlots } from './types'
import type { TextareaProps } from './props'
import type { FieldElementInput } from '../../types/fieldTypes'

/**
 * Textarea
 */
export class Textarea {
  readonly attributes: FieldAttributesInclude
  readonly elementItem: FieldElementInclude
  readonly change: FieldChangeInclude
  readonly value: FieldValueInclude
  readonly code: FieldCodeInclude
  readonly validation: FieldValidationInclude
  readonly event: FieldEventInclude
  readonly field: FieldInclude

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
   * @param constructors.FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
   * @param constructors.FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
   * @param constructors.FieldIncludeConstructor class for working with field/ класс для работы с полем
   */
  constructor(
    protected readonly props: TextareaProps,
    protected readonly refs: ToRefs<TextareaProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TextareaComponents, TextareaProps>,
    protected readonly slots?: TextareaSlots,
    protected readonly emits?: ConstrEmit<TextareaEmits>,
    constructors?: {
      FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude
      FieldChangeIncludeConstructor?: typeof FieldChangeInclude
      FieldCodeIncludeConstructor?: typeof FieldCodeInclude
      FieldElementIncludeConstructor?: typeof FieldElementInclude
      FieldEventIncludeConstructor?: typeof FieldEventInclude
      FieldIncludeConstructor?: typeof FieldInclude
      FieldValidationIncludeConstructor?: typeof FieldValidationInclude
      FieldValueIncludeConstructor?: typeof FieldValueInclude
    }
  ) {
    const {
      FieldAttributesIncludeConstructor = FieldAttributesInclude,
      FieldChangeIncludeConstructor = FieldChangeInclude,
      FieldCodeIncludeConstructor = FieldCodeInclude,
      FieldElementIncludeConstructor = FieldElementInclude,
      FieldEventIncludeConstructor = FieldEventInclude,
      FieldIncludeConstructor = FieldInclude,
      FieldValidationIncludeConstructor = FieldValidationInclude,
      FieldValueIncludeConstructor = FieldValueInclude
    } = constructors ?? {}

    this.change = new FieldChangeIncludeConstructor(this.props)
    this.attributes = new FieldAttributesIncludeConstructor(this.props)

    this.elementItem = new FieldElementIncludeConstructor(
      this.props,
      this.element as Ref<FieldElementInput>
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
      this.code
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
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      computed(() => ({
        maxlength: this.props.maxlength
      }))
    )
  }

  /**
   * Returns bindings for the textarea element.
   *
   * Возвращает привязки для элемента textarea.
   */
  readonly binds = computed(() => ({
    ref: this.element,
    autosize: this.props.autosize,
    value: this.value.item.value,
    onBlur: this.event.onBlur,
    onInput: this.event.onInput,
    onChange: this.event.onChange
  }))

  /**
   * Returns properties for the input element.
   *
   * Возвращает свойства для элемента ввода.
   */
  readonly bindsInput = computed(() => toBinds(
    this.attributes.listForInput.value,
    this.props.textareaAttrs,
    {
      cols: this.props.cols,
      rows: this.props.rows,
      fieldSizing: this.props.fieldSizing
    }
  ))
}
