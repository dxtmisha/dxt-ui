import { ref, type Ref, watch } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName,
  isFilled
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'
import { InputCodeItemInclude } from '../InputCodeItem'

import type { AriaList } from '../../types/ariaTypes'
import type { InputCodeProps } from './props'
import type {
  InputCodeComponents,
  InputCodeEmits,
  InputCodeExpose,
  InputCodeSlots
} from './types'

/** InputCode dependency constructors type / Тип конструкторов зависимостей InputCode */
export type InputCodeConstructors = {
  /** Field label controller constructor / Конструктор контроллера метки поля */
  fieldLabel: typeof FieldLabelInclude
  /** Field message controller constructor / Конструктор контроллера сообщения поля */
  fieldMessage: typeof FieldMessageInclude
  /** Code input item list controller constructor / Конструктор контроллера списка элементов ввода кода */
  inputCodeItem: typeof InputCodeItemInclude
  /** Model binding controller constructor / Конструктор контроллера привязки модели */
  model: typeof ModelInclude
}

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
export class InputCode extends DesignLogicAbstract<
  HTMLDivElement,
  InputCodeComponents,
  InputCodeEmits,
  InputCodeSlots,
  InputCodeProps,
  InputCodeConstructors
> {
  /** Reactive value of the input / Реактивное значение поля ввода */
  readonly value = ref<string>('')

  /** Stop handle for value props watcher / Функция остановки наблюдателя за свойствами значения */
  protected stopWatch?: () => void

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<InputCodeConstructors> = {
    fieldLabel: {
      item: FieldLabelInclude,
      canCreate: () => FieldLabelInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({ loading: this.props.loading })
      ]
    },
    fieldMessage: {
      item: FieldMessageInclude,
      canCreate: () => (
        isFilled(this.props.helperMessage)
        || isFilled(this.props.warningMessage)
        || isFilled(this.props.validationMessage)
        || Boolean(this.props.fieldMessageAttrs)
      ),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    inputCodeItem: {
      item: InputCodeItemInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        this.onInput
      ]
    },
    model: {
      item: ModelInclude,
      parameters: () => [
        'value',
        this.emits,
        this.value
      ]
    }
  }

  /**
   * Constructor
   *
   * Конструктор
   * @param props input properties / входные свойства
   * @param element main HTML element ref / ссылка на основной HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components sub-components configuration object / объект конфигурации подкомпонентов
   * @param slots slots configuration object / объект конфигурации слотов
   * @param emits event emitter function / функция для вызова событий
   * @param constructors override constructors map / объект переопределения конструкторов
   */
  constructor(
    props: InputCodeProps,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<InputCodeComponents, InputCodeProps>,
    slots?: InputCodeSlots,
    emits?: ConstrEmit<InputCodeEmits>,
    constructors?: Partial<InputCodeConstructors>
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
      ...AriaStaticInclude.labelledby(this.callInstance('fieldLabel', item => item.id)),
      ...AriaStaticInclude.describedby(this.callInstance('fieldMessage', item => item.id))
    }
  }

  /**
   * Returns exposed methods and properties of the component.
   *
   * Возвращает методы и свойства компонента, доступные извне.
   * @returns object with exposed methods / объект с открытыми методами
   */
  get expose(): InputCodeExpose {
    return {
      getValue: () => this.value.value,
      set: (value: string | number) => this.i('inputCodeItem').update(String(value)),
      reset: () => this.i('inputCodeItem').resetValue(),
      focus: () => this.i('inputCodeItem').focus()
    }
  }

  /**
   * Checks if there is an active validation message or state.
   *
   * Проверяет, есть ли активное сообщение или состояние валидации.
   * @returns true if validation is active / true, если валидация активна
   */
  isValidation(): boolean {
    return isFilled(
      this.props.validation
      || this.callInstance('fieldMessage', item => item.validation)
    )
  }

  /**
   * Updates current code value and synchronizes code items.
   *
   * Обновляет текущее значение кода и синхронизирует элементы кода.
   */
  readonly update = (): void => {
    const value = this.props.value ?? this.props.modelValue ?? ''

    this.value.value = value
    this.i('inputCodeItem').update(value)
  }

  /**
   * Synchronizes initial code value and registers reactive value watchers after mount.
   *
   * Синхронизирует начальное значение кода и регистрирует реактивные наблюдатели после монтирования.
   */
  protected override readonly onMounted = (): void => {
    this.update()

    this.stopWatch?.()
    this.stopWatch = watch(
      [
        () => this.props.value,
        () => this.props.modelValue
      ],
      this.update
    )
  }

  /**
   * Cleans up reactive watchers on component unmount.
   *
   * Очищает реактивные наблюдатели при размонтировании компонента.
   */
  protected override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
  }

  /**
   * Callback event handler triggered when input value changes.
   *
   * Обработчик события, вызываемый при изменении вводимого значения.
   * @param value new input value / новое значение ввода
   */
  protected readonly onInput = (value: string): void => {
    if (
      this.value.value !== value
    ) {
      this.value.value = value
      this.i('model').emit(value)
      this.emits?.('input', value)
    }
  }
}
