import type { Ref } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName,
  isFilled
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { TextInclude } from '../../classes/TextInclude'

import { DropzoneInclude } from '../Dropzone'
import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'

import { InputFileDropzoneEvent } from './InputFileDropzoneEvent'
import { InputFileDropzoneFiles } from './InputFileDropzoneFiles'

import type { AriaList } from '../../types/ariaTypes'
import type { InputFileDropzoneProps } from './props'
import type {
  InputFileDropzoneComponents,
  InputFileDropzoneEmits,
  InputFileDropzoneExpose,
  InputFileDropzoneSlots
} from './types'

/** InputFileDropzone dependency constructors type / Тип конструкторов зависимостей InputFileDropzone */
export type InputFileDropzoneConstructors = {
  /** Dropzone controller constructor / Конструктор контроллера области сброса */
  dropzone: typeof DropzoneInclude
  /** Enabled state controller constructor / Конструктор контроллера состояния активности */
  enabled: typeof EnabledInclude
  /** Event handler constructor / Конструктор обработчика событий */
  eventItem: typeof InputFileDropzoneEvent
  /** File state manager constructor / Конструктор менеджера файлов */
  files: typeof InputFileDropzoneFiles
  /** Field label controller constructor / Конструктор контроллера метки поля */
  label: typeof FieldLabelInclude
  /** Field message controller constructor / Конструктор контроллера сообщения поля */
  message: typeof FieldMessageInclude
  /** Text translations controller constructor / Конструктор контроллера текстовых переводов */
  text: typeof TextInclude
}

/**
 * Main orchestrator class for managing file dropzone input, drag-and-drop, and file addition events.
 *
 * Главный класс-оркестратор для управления областью сброса файлов, перетаскиванием и событиями добавления файлов.
 */
export class InputFileDropzone extends DesignLogicAbstract<
  HTMLDivElement,
  InputFileDropzoneComponents,
  InputFileDropzoneEmits,
  InputFileDropzoneSlots,
  InputFileDropzoneProps,
  InputFileDropzoneConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<InputFileDropzoneConstructors> = {
    dropzone: {
      item: DropzoneInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          accept: this.props.accept,
          multiple: this.props.multiple,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          isSkeleton: this.props.isSkeleton,
          textDropzone: this.i('text').dropzone,
          onInput: this.i('eventItem').onDropzoneInput
        })
      ]
    },
    enabled: {
      item: EnabledInclude,
      parameters: () => [this.props]
    },
    eventItem: {
      item: InputFileDropzoneEvent,
      parameters: () => [
        this.i('files'),
        this.i('dropzone')
      ]
    },
    files: {
      item: InputFileDropzoneFiles,
      parameters: () => [
        this.props,
        this.emits
      ]
    },
    label: {
      item: FieldLabelInclude,
      canCreate: () => FieldLabelInclude.is(this.props) || Boolean(this.slots?.label),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          isSkeleton: this.props.isSkeleton
        })
      ]
    },
    message: {
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
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    }
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency injection overrides object / объект переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<InputFileDropzoneProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<InputFileDropzoneComponents, InputFileDropzoneProps>,
    slots?: InputFileDropzoneSlots,
    emits?: ConstrEmit<InputFileDropzoneEmits>,
    constructors?: Partial<InputFileDropzoneConstructors>
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
      ...AriaStaticInclude.labelledby(this.callInstance('label', item => item.id)),
      ...AriaStaticInclude.describedby(this.callInstance('message', item => item.id))
    }
  }

  /**
   * Returns exposed properties and methods of the component.
   *
   * Возвращает открытые свойства и методы компонента.
   * @returns exposed API object / объект открытого API
   */
  get expose(): InputFileDropzoneExpose {
    return {
      open: () => this.i('eventItem').open()
    }
  }
}
