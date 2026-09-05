import type { Ref, ToRefs } from 'vue'
import {
  type ConstrClass,
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { EnabledInclude } from '../../classes/EnabledInclude'
import { TextInclude } from '../../classes/TextInclude'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import { ActionsInclude } from '../Actions'
import { DropzoneInclude } from '../Dropzone'
import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'
import { ImageCropInclude } from '../ImageCrop'

import { InputImageEvent } from './InputImageEvent'
import { InputImageFiles } from './InputImageFiles'
import { InputImageSize } from './InputImageSize'

import type { FieldElementInput } from '../../types/fieldTypes'

import type { InputImageItem } from './basicTypes'
import type { InputImageProps } from './props'
import type { InputImageComponents, InputImageEmits, InputImageSlots } from './types'

/**
 * Main orchestrator class for managing image input, upload, resizing, drag-and-drop, cropping, and validation.
 *
 * Главный класс-оркестратор для управления вводом изображения, загрузкой, изменением размера, перетаскиванием, кадрированием и валидацией.
 */
export class InputImage {
  /** Actions component inclusion controller / Контроллер включения компонента действий */
  readonly actions: ActionsInclude

  /** Field attributes manager / Менеджер атрибутов поля */
  readonly attributes: FieldAttributesInclude

  /** Field change state manager / Менеджер состояния изменения поля */
  readonly change: FieldChangeInclude

  /** Field code manager / Менеджер кода поля */
  readonly code: FieldCodeInclude

  /** Dropzone component inclusion controller / Контроллер включения компонента Dropzone */
  readonly dropzone: DropzoneInclude

  /** Input element manager / Менеджер элемента ввода */
  readonly elementItem: FieldElementInclude

  /** Enabled state controller / Контроллер состояния активности */
  readonly enabled: EnabledInclude

  /** Field events manager / Менеджер событий поля */
  readonly event: FieldEventInclude

  /** File and crop state manager helper instance / Вспомогательный класс для управления файлами и кадрированием */
  readonly files: InputImageFiles

  /** ImageCrop component inclusion controller / Контроллер включения компонента кадрирования изображения */
  readonly imageCrop: ImageCropInclude

  /** InputImage event manager helper instance / Вспомогательный класс для управления событиями ввода изображения */
  readonly eventItem: InputImageEvent

  /** Label controller / Контроллер метки */
  readonly label: FieldLabelInclude

  /** Message component inclusion controller / Контроллер включения сообщения поля */
  readonly message: FieldMessageInclude<any, any>

  /** Image size manager helper instance / Вспомогательный класс для управления размером изображения */
  readonly size: InputImageSize

  /** Text manager for translations / Менеджер текста для переводов */
  readonly text: TextInclude

  /** Field validation manager / Менеджер валидации поля */
  readonly validation: FieldValidationInclude

  /** Field form manager / Менеджер формы поля */
  readonly form: FieldFormInclude

  /** Field value manager / Менеджер значения поля */
  readonly value: FieldValueInclude<InputImageItem>

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
   * @param constructors.ActionsIncludeConstructor class for working with actions / класс для работы с действиями
   * @param constructors.DropzoneIncludeConstructor class for working with dropzone / класс для работы с областью загрузки
   * @param constructors.EnabledConstructor class for creating the enabled state / класс для создания состояния активности
   * @param constructors.FieldAttributesIncludeConstructor class for creating field attributes / класс для создания атрибутов поля
   * @param constructors.FieldChangeIncludeConstructor class for creating field change attributes / класс для создания атрибутов изменения поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code / класс для работы с кодом поля
   * @param constructors.FieldElementIncludeConstructor class for creating field element attributes / класс для создания атрибутов элемента поля
   * @param constructors.FieldEventIncludeConstructor class for creating field event / класс для создания событий поля
   * @param constructors.FieldFormIncludeConstructor class for working with form / класс для работы с формой
   * @param constructors.FieldLabelConstructor class for creating field label / класс для создания метки поля
   * @param constructors.FieldMessageConstructor class for creating field message / класс для создания сообщения поля
   * @param constructors.FieldValidationIncludeConstructor class for creating field validation / класс для создания валидации поля
   * @param constructors.FieldValueIncludeConstructor class for creating field value attributes / класс для создания атрибутов значения поля
   * @param constructors.ImageCropIncludeConstructor class for working with image crop / класс для работы с кадрированием изображения
   * @param constructors.InputImageEventConstructor class for working with input image events / класс для работы с событиями ввода изображения
   * @param constructors.InputImageFilesConstructor class for working with files / класс для работы с файлами
   * @param constructors.InputImageSizeConstructor class for working with image size / класс для работы с размером изображения
   * @param constructors.TextIncludeConstructor class for working with text / класс для работы с текстом
   */
  constructor(
    protected readonly props: InputImageProps,
    protected readonly refs: ToRefs<InputImageProps>,
    protected readonly element: Ref<FieldElementInput>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<InputImageComponents, InputImageProps>,
    protected readonly slots?: InputImageSlots,
    protected readonly emits?: ConstrEmit<InputImageEmits>,
    constructors: {
      ActionsIncludeConstructor?: typeof ActionsInclude
      DropzoneIncludeConstructor?: typeof DropzoneInclude
      EnabledConstructor?: typeof EnabledInclude
      FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude
      FieldChangeIncludeConstructor?: typeof FieldChangeInclude
      FieldCodeIncludeConstructor?: typeof FieldCodeInclude
      FieldElementIncludeConstructor?: typeof FieldElementInclude
      FieldEventIncludeConstructor?: typeof FieldEventInclude
      FieldFormIncludeConstructor?: typeof FieldFormInclude
      FieldLabelConstructor?: typeof FieldLabelInclude
      FieldMessageConstructor?: typeof FieldMessageInclude
      FieldValidationIncludeConstructor?: typeof FieldValidationInclude
      FieldValueIncludeConstructor?: typeof FieldValueInclude<InputImageItem>
      ImageCropIncludeConstructor?: typeof ImageCropInclude
      InputImageEventConstructor?: typeof InputImageEvent
      InputImageFilesConstructor?: typeof InputImageFiles
      InputImageSizeConstructor?: typeof InputImageSize
      TextIncludeConstructor?: typeof TextInclude
    } = {}
  ) {
    const {
      ActionsIncludeConstructor = ActionsInclude,
      DropzoneIncludeConstructor = DropzoneInclude,
      EnabledConstructor = EnabledInclude,
      FieldAttributesIncludeConstructor = FieldAttributesInclude,
      FieldChangeIncludeConstructor = FieldChangeInclude,
      FieldCodeIncludeConstructor = FieldCodeInclude,
      FieldElementIncludeConstructor = FieldElementInclude,
      FieldEventIncludeConstructor = FieldEventInclude,
      FieldFormIncludeConstructor = FieldFormInclude,
      FieldLabelConstructor = FieldLabelInclude,
      FieldMessageConstructor = FieldMessageInclude,
      FieldValidationIncludeConstructor = FieldValidationInclude,
      FieldValueIncludeConstructor = FieldValueInclude,
      ImageCropIncludeConstructor = ImageCropInclude,
      InputImageEventConstructor = InputImageEvent,
      InputImageFilesConstructor = InputImageFiles,
      InputImageSizeConstructor = InputImageSize,
      TextIncludeConstructor = TextInclude
    } = constructors

    this.change = new FieldChangeIncludeConstructor(this.props)

    this.elementItem = new FieldElementIncludeConstructor(this.props, this.element)
    this.attributes = new FieldAttributesIncludeConstructor(
      this.props,
      undefined,
      undefined,
      undefined,
      'file'
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

    this.files = new InputImageFilesConstructor(this.props, this.value)
    this.size = new InputImageSizeConstructor(this.props, this.files)
    this.enabled = new EnabledConstructor(props)
    this.text = new TextIncludeConstructor(this.props)

    this.dropzone = new DropzoneIncludeConstructor(
      this.className,
      this.props,
      this.components,
      () => ({
        accept: this.props.accept,
        disabled: this.props.disabled,
        readonly: this.props.readonly,
        isSkeleton: this.props.isSkeleton,
        inputAttrs: this.attributes.listForInput,
        onInput: this.eventItem.onDropzoneInput
      })
    )

    this.eventItem = new InputImageEventConstructor(
      this.files,
      this.dropzone,
      this.event
    )

    this.label = new FieldLabelConstructor(
      this.className,
      this.props,
      this.components,
      () => ({
        ...this.size.getExtra(),
        isSkeleton: this.props.isSkeleton
      }),
      undefined,
      undefined,
      () => this.size.isCounter()
    )

    this.message = new FieldMessageConstructor(
      this.className,
      this.props,
      this.components,
      undefined,
      undefined,
      () => this.validation.message
    )

    this.imageCrop = new ImageCropIncludeConstructor(
      this.className,
      this.props,
      this.components,
      () => ({
        value: this.files.crop,
        image: this.files.src,
        disabled: this.props.disabled,
        readonly: this.props.readonly,
        onResize: this.eventItem.onCropResize
      })
    )

    this.actions = new ActionsIncludeConstructor(
      this.className,
      props,
      this.components,
      () => ({
        list: [
          {
            icon: this.props.iconUpload,
            label: this.text.change,
            onClick: this.eventItem.open
          },
          {
            icon: this.props.iconClose,
            label: this.text.cancel,
            onClick: this.event.onClear
          }
        ]
      })
    )
  }

  /**
   * Computed list of classes for the main element.
   *
   * Вычисляемый список классов для главного элемента.
   * @returns computed classes / вычисленные классы
   */
  get classes(): ConstrClass {
    return {
      [`${this.className}--hasImage`]: this.files.hasImage()
    }
  }
}
