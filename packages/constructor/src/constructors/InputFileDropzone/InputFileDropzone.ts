import type { Ref, ToRefs } from 'vue'
import {
  type ConstrClass,
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { EnabledInclude } from '../../classes/EnabledInclude'
import { TextInclude } from '../../classes/TextInclude'

import { DropzoneInclude } from '../Dropzone'
import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'

import { InputFileDropzoneEvent } from './InputFileDropzoneEvent'
import { InputFileDropzoneFiles } from './InputFileDropzoneFiles'

import type { InputFileDropzoneProps } from './props'
import type { InputFileDropzoneComponents, InputFileDropzoneEmits, InputFileDropzoneSlots } from './types'

/**
 * Main orchestrator class for managing file dropzone input, drag-and-drop, and file addition events.
 *
 * Главный класс-оркестратор для управления областью сброса файлов, перетаскиванием и событиями добавления файлов.
 */
export class InputFileDropzone {
  /** Dropzone component inclusion controller / Контроллер включения компонента Dropzone */
  readonly dropzone: DropzoneInclude

  /** Enabled state controller / Контроллер состояния активности */
  readonly enabled: EnabledInclude

  /** File state manager helper instance / Вспомогательный класс для управления файлами */
  readonly files: InputFileDropzoneFiles

  /** InputFileDropzone event manager helper instance / Вспомогательный класс для управления событиями */
  readonly eventItem: InputFileDropzoneEvent

  /** Label controller / Контроллер метки */
  readonly label: FieldLabelInclude

  /** Message component inclusion controller / Контроллер включения сообщения поля */
  readonly message: FieldMessageInclude<any, any>

  /** Text manager for translations / Менеджер текста для переводов */
  readonly text: TextInclude

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.DropzoneIncludeConstructor class for working with dropzone / класс для работы с областью загрузки
   * @param constructors.EnabledConstructor class for creating the enabled state / класс для создания состояния активности
   * @param constructors.FieldLabelConstructor class for creating field label / класс для создания метки поля
   * @param constructors.FieldMessageConstructor class for creating field message / класс для создания сообщения поля
   * @param constructors.InputFileDropzoneEventConstructor class for working with events / класс для работы с событиями
   * @param constructors.InputFileDropzoneFilesConstructor class for working with files / класс для работы с файлами
   * @param constructors.TextIncludeConstructor class for working with text / класс для работы с текстом
   */
  constructor(
    protected readonly props: InputFileDropzoneProps,
    protected readonly refs: ToRefs<InputFileDropzoneProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<InputFileDropzoneComponents, InputFileDropzoneProps>,
    protected readonly slots?: InputFileDropzoneSlots,
    protected readonly emits?: ConstrEmit<InputFileDropzoneEmits>,
    constructors: {
      DropzoneIncludeConstructor?: typeof DropzoneInclude
      EnabledConstructor?: typeof EnabledInclude
      FieldLabelConstructor?: typeof FieldLabelInclude
      FieldMessageConstructor?: typeof FieldMessageInclude
      InputFileDropzoneEventConstructor?: typeof InputFileDropzoneEvent
      InputFileDropzoneFilesConstructor?: typeof InputFileDropzoneFiles
      TextIncludeConstructor?: typeof TextInclude
    } = {}
  ) {
    const {
      DropzoneIncludeConstructor = DropzoneInclude,
      EnabledConstructor = EnabledInclude,
      FieldLabelConstructor = FieldLabelInclude,
      FieldMessageConstructor = FieldMessageInclude,
      InputFileDropzoneEventConstructor = InputFileDropzoneEvent,
      InputFileDropzoneFilesConstructor = InputFileDropzoneFiles,
      TextIncludeConstructor = TextInclude
    } = constructors

    this.files = new InputFileDropzoneFilesConstructor(this.props, this.emits)
    this.enabled = new EnabledConstructor(this.props)
    this.text = new TextIncludeConstructor(this.props)

    this.dropzone = new DropzoneIncludeConstructor(
      this.className,
      this.props,
      this.components,
      () => ({
        accept: this.props.accept,
        multiple: this.props.multiple,
        disabled: this.props.disabled,
        readonly: this.props.readonly,
        isSkeleton: this.props.isSkeleton,
        textDropzone: this.text.dropzone,
        onInput: this.eventItem.onDropzoneInput
      })
    )

    this.eventItem = new InputFileDropzoneEventConstructor(
      this.files,
      this.dropzone
    )

    this.label = new FieldLabelConstructor(
      this.className,
      this.props,
      this.components,
      () => ({
        isSkeleton: this.props.isSkeleton
      })
    )

    this.message = new FieldMessageConstructor(
      this.className,
      this.props,
      this.components
    )
  }

  /**
   * Computed list of classes for the main element.
   *
   * Вычисляемый список классов для главного элемента.
   * @returns computed classes / вычисленные классы
   */
  get classes(): ConstrClass {
    return {}
  }
}
