import { onMounted, ref, type Ref, type ToRefs, watch } from 'vue'
import { type ConstrEmit, type DesignComp, isFilled } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'
import { InputCodeItemInclude } from '../InputCodeItem'

import type { AriaList } from '../../types/ariaTypes'
import type { InputCodeComponents, InputCodeEmits } from './types'
import type { InputCodeProps } from './props'

/**
 * Class for managing code input components.
 * It coordinates the child component managers (field label, field message, code input items),
 * manages the reactive value binding, updates the code item highlights, and generates appropriate
 * ARIA roles and labels for accessibility.
 *
 * Класс для управления компонентами ввода кода.
 * Координирует управляющие подкомпонентов (метка поля, сообщение поля, элементы ввода кода),
 * управляет привязкой реактивного значения, обновляет подсветку элементов кода и генерирует соответствующие
 * роли и метки ARIA для доступности.
 */
export class InputCode {
  /** Field label manager / Управляющий меткой поля */
  readonly fieldLabel: FieldLabelInclude
  /** Field message manager / Управляющий сообщением поля */
  readonly fieldMessage: FieldMessageInclude
  /** Code input item list manager / Управляющий списком элементов ввода кода */
  readonly inputCodeItem: InputCodeItemInclude

  /** Model binding manager / Управляющий привязкой модели */
  readonly model: ModelInclude

  /** Reactive value of the input / Реактивное значение поля ввода */
  readonly value = ref<string>('')

  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param refs input properties as reactive references / входные свойства в виде реактивных ссылок
   * @param element main HTML element ref / ссылка на основной HTML-элемент
   * @param classDesign design class name / название класса дизайна
   * @param className basic CSS class name / базовое имя CSS-класса
   * @param components sub-components configuration object / объект конфигурации подкомпонентов
   * @param slots slots configuration object / объект конфигурации слотов
   * @param emits event emitter function / функция для вызова событий
   * @param constructors override constructors map / объект переопределения конструкторов
   * @param constructors.FieldLabelIncludeConstructor custom field label constructor / пользовательский конструктор метки поля
   * @param constructors.FieldMessageIncludeConstructor custom field message constructor / пользовательский конструктор сообщения поля
   * @param constructors.InputCodeItemIncludeConstructor custom input code item constructor / пользовательский конструктор элемента ввода кода
   * @param constructors.ModelIncludeConstructor custom model constructor / пользовательский конструктор модели
   */
  constructor(
    protected readonly props: InputCodeProps,
    protected readonly refs: ToRefs<InputCodeProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<InputCodeComponents, InputCodeProps>,
    protected readonly slots?: any,
    protected readonly emits?: ConstrEmit<InputCodeEmits>,
    constructors: {
      FieldLabelIncludeConstructor?: typeof FieldLabelInclude
      FieldMessageIncludeConstructor?: typeof FieldMessageInclude
      InputCodeItemIncludeConstructor?: typeof InputCodeItemInclude
      ModelIncludeConstructor?: typeof ModelInclude
    } = {}
  ) {
    const {
      FieldLabelIncludeConstructor = FieldLabelInclude,
      FieldMessageIncludeConstructor = FieldMessageInclude,
      InputCodeItemIncludeConstructor = InputCodeItemInclude,
      ModelIncludeConstructor = ModelInclude
    } = constructors

    this.fieldLabel = new FieldLabelIncludeConstructor(
      className,
      props,
      components,
      () => ({ loading: props.loading })
    )
    this.fieldMessage = new FieldMessageIncludeConstructor(className, props, components)

    this.inputCodeItem = new InputCodeItemIncludeConstructor(
      className,
      props,
      components,
      this.onInput
    )

    this.model = new ModelIncludeConstructor('value', emits, this.value)

    onMounted(() => {
      watch(
        [this.refs.value],
        () => this.inputCodeItem.update(this.props.value ?? ''),
        { immediate: true }
      )
    })
  }

  /**
   * Returns accessibility ARIA attributes for the component.
   *
   * Возвращает атрибуты доступности ARIA для компонента.
   * @returns object containing ARIA attributes / объект, содержащий ARIA-атрибуты
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role('group'),
      ...AriaStaticInclude.labelledby(this.fieldLabel.id),
      ...AriaStaticInclude.describedby(this.fieldMessage.id)
    }
  }

  /**
   * Checks if there is an active validation message or state.
   *
   * Проверяет, есть ли активное сообщение или состояние валидации.
   * @returns true if validation is active / true, если валидация активна
   */
  isValidation(): boolean {
    return isFilled(this.props.validation || this.fieldMessage.validation)
  }

  /**
   * Callback event handler triggered when input value changes.
   *
   * Обработчик события, вызываемый при изменении вводимого значения.
   * @param value new input value / новое значение ввода
   */
  protected readonly onInput = (value: string) => {
    if (
      this.value.value !== value
    ) {
      this.value.value = value
      this.emits?.('input', value)
      this.model.emit(value)
    }
  }
}
