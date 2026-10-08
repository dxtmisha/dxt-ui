import type { Ref, ToRefs } from 'vue'
import type { ConstrEmit, DesignComp } from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldInputModeInclude } from '../../classes/Field/FieldInputModeInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { TextInclude } from '../../classes/TextInclude'
import { FieldInclude } from '../Field'

import { InputSearchQuery } from './InputSearchQuery'

import type { FieldElementInput } from '../../types/fieldTypes'
import type { InputSearchComponents, InputSearchEmits, InputSearchSlots } from './types'
import type { InputSearchProps } from './props'

/**
 * InputSearch constructor class for managing search input logic, debounce timing, and field states.
 *
 * Класс-конструктор InputSearch для управления логикой ввода поиска, задержкой debounce и состояниями поля.
 */
export class InputSearch {
  /** Text translations utility / Утилита переводов текста */
  readonly text: TextInclude
  /** Field change state manager / Менеджер состояния изменения поля */
  readonly change: FieldChangeInclude
  /** Field input mode manager / Менеджер режима ввода поля */
  readonly inputMode: FieldInputModeInclude
  /** Field attributes manager / Менеджер атрибутов поля */
  readonly attributes: FieldAttributesInclude

  /** Input element reference manager / Менеджер ссылки на элемент ввода */
  readonly elementItem: FieldElementInclude
  /** Input value state manager / Менеджер состояния значения ввода */
  readonly value: FieldValueInclude<string>

  /** Field code error message manager / Менеджер сообщений ошибок кода поля */
  readonly code: FieldCodeInclude
  /** Field validation manager / Менеджер валидации поля */
  readonly validation: FieldValidationInclude
  /** Field form integration manager / Менеджер интеграции с формой поля */
  readonly form: FieldFormInclude
  /** Field event manager / Менеджер событий поля */
  readonly event: FieldEventInclude
  /** Search query manager / Менеджер поискового запроса */
  readonly query: InputSearchQuery

  /** Outer field wrapper component manager / Менеджер компонента внешней обертки поля */
  readonly field: FieldInclude

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element ref / ссылка на элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits function called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with override constructors / объект с переопределяемыми конструкторами
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes / класс для работы с атрибутами поля
   * @param constructors.FieldChangeIncludeConstructor class for working with field change / класс для работы с изменением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code / класс для работы с кодом поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element / класс для работы с элементом поля
   * @param constructors.FieldEventIncludeConstructor class for working with field events / класс для работы с событиями поля
   * @param constructors.FieldFormIncludeConstructor class for working with form / класс для работы с формой
   * @param constructors.FieldIncludeConstructor class for working with field / класс для работы с полем
   * @param constructors.FieldInputModeIncludeConstructor class for working with field input mode / класс для работы с режимом ввода поля
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation / класс для работы с валидацией поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value / класс для работы со значением поля
   * @param constructors.InputSearchQueryConstructor class for working with search queries / класс для работы с поисковыми запросами
   * @param constructors.TextIncludeConstructor class for working with text / класс для работы с текстом
   */
  constructor(
    protected readonly props: InputSearchProps,
    protected readonly refs: ToRefs<InputSearchProps>,
    protected readonly element: Ref<FieldElementInput>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<InputSearchComponents, InputSearchProps>,
    protected readonly slots?: InputSearchSlots,
    protected readonly emits?: ConstrEmit<InputSearchEmits>,
    constructors: {
      FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude
      FieldChangeIncludeConstructor?: typeof FieldChangeInclude
      FieldCodeIncludeConstructor?: typeof FieldCodeInclude
      FieldElementIncludeConstructor?: typeof FieldElementInclude
      FieldEventIncludeConstructor?: typeof FieldEventInclude
      FieldFormIncludeConstructor?: typeof FieldFormInclude
      FieldIncludeConstructor?: typeof FieldInclude
      FieldInputModeIncludeConstructor?: typeof FieldInputModeInclude
      FieldValidationIncludeConstructor?: typeof FieldValidationInclude
      FieldValueIncludeConstructor?: typeof FieldValueInclude
      InputSearchQueryConstructor?: typeof InputSearchQuery
      TextIncludeConstructor?: typeof TextInclude
    } = {}
  ) {
    const {
      FieldAttributesIncludeConstructor = FieldAttributesInclude,
      FieldChangeIncludeConstructor = FieldChangeInclude,
      FieldCodeIncludeConstructor = FieldCodeInclude,
      FieldElementIncludeConstructor = FieldElementInclude,
      FieldEventIncludeConstructor = FieldEventInclude,
      FieldFormIncludeConstructor = FieldFormInclude,
      FieldIncludeConstructor = FieldInclude,
      FieldInputModeIncludeConstructor = FieldInputModeInclude,
      FieldValidationIncludeConstructor = FieldValidationInclude,
      FieldValueIncludeConstructor = FieldValueInclude,
      InputSearchQueryConstructor = InputSearchQuery,
      TextIncludeConstructor = TextInclude
    } = constructors

    this.text = new TextIncludeConstructor(this.props)
    this.change = new FieldChangeIncludeConstructor(this.props)
    this.inputMode = new FieldInputModeIncludeConstructor(this.props)
    this.attributes = new FieldAttributesIncludeConstructor(
      () => ({
        placeholder: this.text.search,
        ...this.props
      }),
      undefined,
      undefined,
      this.inputMode,
      'search'
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
    this.query = new InputSearchQueryConstructor(
      this.props,
      this.value,
      this.event
    )

    this.field = new FieldIncludeConstructor(
      this.className,
      this.props,
      this.components,
      () => ({
        loading: this.props.loading ?? this.query.loading.value
      }),
      undefined,
      this.value,
      this.event
    )
  }

  /**
   * Input binding values and event handlers.
   *
   * Значения привязок ввода и обработчики событий.
   * @returns object with input bindings / объект с привязками для поля ввода
   */
  get binds(): Record<string, any> {
    return {
      ...this.attributes.listForInput,
      value: this.value.item.value,
      onBlur: this.event.onBlur,
      onInput: this.query.onInput,
      onChange: this.query.onChange,
      onKeydown: this.query.onKeydown
    }
  }
}
