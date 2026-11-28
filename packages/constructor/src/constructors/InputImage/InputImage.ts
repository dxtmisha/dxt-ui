import type { Ref } from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { TextInclude } from '../../classes/TextInclude'

import { ActionsInclude } from '../Actions'
import { DropzoneInclude } from '../Dropzone'
import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'
import { ImageCropInclude } from '../ImageCrop'

import { InputImageEvent } from './InputImageEvent'
import { InputImageFiles } from './InputImageFiles'
import { InputImageSize } from './InputImageSize'

import type { AriaList } from '../../types/ariaTypes'
import type { InputImageItem } from './basicTypes'
import type { InputImageProps } from './props'
import type { InputImageComponents, InputImageEmits, InputImageSlots } from './types'

/** InputImage dependency constructors type / Тип конструкторов зависимостей InputImage */
export type InputImageConstructors = {
  /** Actions component constructor / Конструктор компонента действий */
  actions: typeof ActionsInclude
  /** Field attributes constructor / Конструктор атрибутов поля */
  attributes: typeof FieldAttributesInclude
  /** Field change constructor / Конструктор изменения поля */
  change: typeof FieldChangeInclude
  /** Field code constructor / Конструктор кода поля */
  code: typeof FieldCodeInclude
  /** Dropzone component constructor / Конструктор компонента области загрузки */
  dropzone: typeof DropzoneInclude
  /** Field element constructor / Конструктор элемента поля */
  elementItem: typeof FieldElementInclude
  /** Field event constructor / Конструктор событий поля */
  event: typeof FieldEventInclude
  /** InputImage event helper constructor / Конструктор помощника событий InputImage */
  eventItem: typeof InputImageEvent
  /** InputImage files manager constructor / Конструктор менеджера файлов InputImage */
  files: typeof InputImageFiles
  /** Field form constructor / Конструктор формы поля */
  form: typeof FieldFormInclude
  /** ImageCrop component constructor / Конструктор компонента кадрирования */
  imageCrop: typeof ImageCropInclude
  /** Field label constructor / Конструктор метки поля */
  label: typeof FieldLabelInclude
  /** Field message constructor / Конструктор сообщения поля */
  message: typeof FieldMessageInclude
  /** InputImage size calculator constructor / Конструктор вычисления размера изображения */
  size: typeof InputImageSize
  /** Text localization constructor / Конструктор локализации текста */
  text: typeof TextInclude
  /** Field validation constructor / Конструктор валидации поля */
  validation: typeof FieldValidationInclude
  /** Field value constructor / Конструктор значения поля */
  value: typeof FieldValueInclude<InputImageItem>
}

/**
 * Main orchestrator class for managing image input, upload, resizing, drag-and-drop, cropping, and validation.
 *
 * Главный класс-оркестратор для управления вводом изображения, загрузкой, изменением размера, перетаскиванием, кадрированием и валидацией.
 */
export class InputImage extends DesignLogicAbstract<
  HTMLDivElement,
  InputImageComponents,
  InputImageEmits,
  InputImageSlots,
  InputImageProps,
  InputImageConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<InputImageConstructors> = {
    actions: {
      item: ActionsInclude,
      canCreate: () => this.i('files').hasImage() && !this.props.disabled && !this.props.readonly,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          list: [
            {
              icon: this.props.iconUpload,
              label: this.i('text').change,
              onClick: this.i('eventItem').open
            },
            {
              icon: this.props.iconClose,
              label: this.i('text').cancel,
              onClick: this.i('event').onClear
            }
          ]
        })
      ]
    },
    attributes: {
      item: FieldAttributesInclude,
      parameters: () => [
        this.props,
        undefined,
        undefined,
        undefined,
        'file'
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
    dropzone: {
      item: DropzoneInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          accept: this.props.accept,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          isSkeleton: this.props.isSkeleton,
          inputAttrs: this.i('attributes').listForInput,
          onInput: this.i('eventItem').onDropzoneInput,
          onFocus: this.i('event').onFocus,
          onBlur: this.i('event').onBlur
        })
      ]
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
    eventItem: {
      item: InputImageEvent,
      parameters: () => [
        () => this.i('dropzone'),
        () => this.i('event'),
        () => this.i('files')
      ]
    },
    files: {
      item: InputImageFiles,
      parameters: () => [
        this.props,
        () => this.i('value')
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
    imageCrop: {
      item: ImageCropInclude,
      canCreate: () => this.i('files').hasImage(),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          value: this.i('files').crop,
          image: this.i('files').src,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          onResize: this.i('eventItem').onCropResize
        })
      ]
    },
    label: {
      item: FieldLabelInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          ...this.i('size').getExtra(),
          isSkeleton: this.props.isSkeleton
        }),
        undefined,
        undefined,
        () => this.i('size').isCounter()
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
    size: {
      item: InputImageSize,
      parameters: () => [
        this.props,
        () => this.i('files')
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
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
      item: FieldValueInclude<InputImageItem>,
      parameters: () => [
        this.props,
        () => this.i('elementItem')
      ]
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
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<InputImageProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<InputImageComponents, InputImageProps>,
    slots?: InputImageSlots,
    emits?: ConstrEmit<InputImageEmits>,
    constructors?: Partial<InputImageConstructors>
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
  }

  /**
   * Computed ARIA attributes for the root container.
   *
   * Вычисляемые ARIA-атрибуты для корневого контейнера.
   * @returns ARIA attribute object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.labelledby(this.i('label').id),
      ...AriaStaticInclude.describedby(this.i('message').id)
    }
  }

  /**
   * Computed list of classes for the main element.
   *
   * Вычисляемый список классов для главного элемента.
   * @returns computed classes / вычисленные классы
   */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('hasImage')]: this.i('files').hasImage()
    }
  }
}
