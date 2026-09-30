import type { Ref, ToRefs } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { TextInclude } from '../../classes/TextInclude'

import {
  ButtonInclude,
  type ButtonProps
} from '../Button'
import { IconInclude } from '../Icon'
import { ImageInclude } from '../Image'
import {
  ProgressInclude,
  type ProgressProps
} from '../Progress'
import { SkeletonInclude } from '../Skeleton'

import { InputFileItemAppearance } from './InputFileItemAppearance'
import { InputFileItemEvent } from './InputFileItemEvent'
import { InputFileItemFile } from './InputFileItemFile'
import { InputFileItemProgress } from './InputFileItemProgress'
import { InputFileItemStatus } from './InputFileItemStatus'

import type { AriaList } from '../../types/ariaTypes'
import type {
  InputFileItemComponents,
  InputFileItemEmits,
  InputFileItemSlots
} from './types'
import type { InputFileItemProps } from './props'

/**
 * Main orchestrator class for managing single file upload item display, states, and user interactions.
 *
 * Главный класс-оркестратор для управления отображением отдельного элемента загружаемого файла, состояниями и взаимодействием.
 */
export class InputFileItem {
  /** Appearance manager for display mode / Менеджер режима отображения */
  readonly appearance: InputFileItemAppearance

  /** Button include for delete/remove action / Подключение кнопки для действия удаления */
  readonly buttonDelete: ButtonInclude

  /** Button include for retry action / Подключение кнопки для действия повтора */
  readonly buttonRetry: ButtonInclude

  /** Caption manager for secondary text / Менеджер подписи для вторичного текста */
  readonly caption: CaptionInclude

  /** Enabled state controller / Контроллер состояния активности */
  readonly enabled: EnabledInclude

  /** Event interaction manager / Менеджер событий взаимодействия */
  readonly event: InputFileItemEvent

  /** File data and formatting helper / Вспомогательный класс для данных и форматирования файла */
  readonly file: InputFileItemFile

  /** Status icon include / Подключение иконки статуса */
  readonly iconStatus: IconInclude

  /** Thumbnail image include / Подключение изображения миниатюры */
  readonly image: ImageInclude

  /** Label manager for file name / Менеджер метки для имени файла */
  readonly label: LabelInclude

  /** Progress indicator include / Подключение индикатора прогресса */
  readonly progress: ProgressInclude

  /** Upload progress manager / Менеджер прогресса загрузки */
  readonly progressValue: InputFileItemProgress

  /** Skeleton loading placeholder include / Подключение скелетона загрузки */
  readonly skeleton: SkeletonInclude

  /** File status manager / Менеджер статуса файла */
  readonly status: InputFileItemStatus

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
   * @param constructors.ButtonIncludeConstructor class for creating a button / класс для создания кнопки
   * @param constructors.CaptionIncludeConstructor class for creating a caption / класс для создания подписи
   * @param constructors.EnabledConstructor class for creating the enabled state / класс для создания состояния активности
   * @param constructors.IconIncludeConstructor class for creating an icon / класс для создания иконки
   * @param constructors.ImageIncludeConstructor class for creating an image / класс для создания изображения
   * @param constructors.InputFileItemAppearanceConstructor class for managing appearance / класс для управления режимом отображения
   * @param constructors.InputFileItemEventConstructor class for managing file events / класс для управления событиями файла
   * @param constructors.InputFileItemFileConstructor class for managing file data / класс для управления данными файла
   * @param constructors.InputFileItemProgressConstructor class for managing file progress / класс для управления прогрессом файла
   * @param constructors.InputFileItemStatusConstructor class for managing file status / класс для управления статусом файла
   * @param constructors.LabelIncludeConstructor class for creating a label / класс для создания метки
   * @param constructors.ProgressIncludeConstructor class for creating a progress indicator / класс для создания индикатора прогресса
   * @param constructors.SkeletonIncludeConstructor class for creating a skeleton loader / класс для создания скелетона загрузки
   * @param constructors.TextIncludeConstructor class for managing text / класс для управления текстом
   */
  constructor(
    protected readonly props: InputFileItemProps,
    protected readonly refs: ToRefs<InputFileItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<InputFileItemComponents, InputFileItemProps>,
    protected readonly slots?: InputFileItemSlots,
    protected readonly emits?: ConstrEmit<InputFileItemEmits>,
    constructors: {
      ButtonIncludeConstructor?: typeof ButtonInclude
      CaptionIncludeConstructor?: typeof CaptionInclude
      EnabledConstructor?: typeof EnabledInclude
      IconIncludeConstructor?: typeof IconInclude
      ImageIncludeConstructor?: typeof ImageInclude
      InputFileItemAppearanceConstructor?: typeof InputFileItemAppearance
      InputFileItemEventConstructor?: typeof InputFileItemEvent
      InputFileItemFileConstructor?: typeof InputFileItemFile
      InputFileItemProgressConstructor?: typeof InputFileItemProgress
      InputFileItemStatusConstructor?: typeof InputFileItemStatus
      LabelIncludeConstructor?: typeof LabelInclude
      ProgressIncludeConstructor?: typeof ProgressInclude
      SkeletonIncludeConstructor?: typeof SkeletonInclude
      TextIncludeConstructor?: typeof TextInclude
    } = {}
  ) {
    const {
      ButtonIncludeConstructor = ButtonInclude,
      CaptionIncludeConstructor = CaptionInclude,
      EnabledConstructor = EnabledInclude,
      IconIncludeConstructor = IconInclude,
      ImageIncludeConstructor = ImageInclude,
      InputFileItemAppearanceConstructor = InputFileItemAppearance,
      InputFileItemEventConstructor = InputFileItemEvent,
      InputFileItemFileConstructor = InputFileItemFile,
      InputFileItemProgressConstructor = InputFileItemProgress,
      InputFileItemStatusConstructor = InputFileItemStatus,
      LabelIncludeConstructor = LabelInclude,
      ProgressIncludeConstructor = ProgressInclude,
      SkeletonIncludeConstructor = SkeletonInclude,
      TextIncludeConstructor = TextInclude
    } = constructors

    this.appearance = new InputFileItemAppearanceConstructor(this.props)
    this.enabled = new EnabledConstructor(this.props)
    this.file = new InputFileItemFileConstructor(this.props)
    this.text = new TextIncludeConstructor(this.props)

    this.event = new InputFileItemEventConstructor(
      this.props,
      this.file,
      this.emits
    )
    this.progressValue = new InputFileItemProgressConstructor(
      this.props,
      this.file
    )
    this.status = new InputFileItemStatusConstructor(
      this.props,
      this.file,
      this.text
    )

    this.buttonDelete = new ButtonIncludeConstructor(
      this.className,
      this.props,
      this.components,
      () => this.getButtonDelete(),
      'buttonDelete'
    )

    this.buttonRetry = new ButtonIncludeConstructor(
      this.className,
      this.props,
      this.components,
      () => this.getButtonRetry(),
      'buttonRetry'
    )

    this.caption = new CaptionIncludeConstructor(
      () => ({ caption: this.status.message }),
      this.className
    )

    this.iconStatus = new IconIncludeConstructor(
      () => ({
        selected: this.status.isUploaded(),
        icon: {
          icon: this.props.iconError,
          iconActive: this.props.iconSuccess,
          success: this.status.isUploaded(),
          error: this.status.isError()
        }
      }),
      this.className,
      this.components
    )

    this.image = new ImageIncludeConstructor(
      this.className,
      this.props,
      this.components,
      () => ({
        value: this.file.image,
        alt: this.file.name
      })
    )

    this.label = new LabelIncludeConstructor(
      () => ({ label: this.file.name }),
      this.className
    )

    this.progress = new ProgressIncludeConstructor(
      this.className,
      this.props,
      this.components,
      () => this.progressProps
    )

    this.skeleton = new SkeletonIncludeConstructor(
      this.props,
      this.classDesign,
      ['classBackground']
    )
  }

  /**
   * Returns reactive ARIA attribute mappings.
   *
   * Возвращает реактивные привязки атрибутов ARIA.
   * @returns ARIA attributes list / список атрибутов ARIA
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.disabled(this.props.disabled),
      ...AriaStaticInclude.busy(this.status.isUploading())
    }
  }

  /**
   * Resolves properties and settings for the progress indicator.
   *
   * Определяет свойства и настройки для индикатора прогресса.
   * @returns progress configuration object / объект конфигурации прогресса
   */
  protected get progressProps(): ProgressProps {
    const item: ProgressProps = {
      position: 'static',
      visible: this.status.isUploading()
    }

    if (this.progressValue.isDeterminate()) {
      item.value = this.progressValue.value
      item.max = this.progressValue.max
    }

    if (this.appearance.isCircular()) {
      return {
        ...item,
        circular: true
      }
    }

    return {
      ...item,
      linear: true
    }
  }

  /**
   * Resolves properties and settings for the delete action button.
   *
   * Определяет свойства и настройки для кнопки действия удаления.
   * @returns button configuration object or undefined / объект конфигурации кнопки или undefined
   */
  protected getButtonDelete(): ConstrBind<ButtonProps> | undefined {
    if (this.props.readonly) {
      return undefined
    }

    return {
      title: this.text.delete,
      icon: this.props.iconDelete,
      disabled: this.props.disabled,
      readonly: this.props.readonly,
      onClick: this.event.onDelete,
      ...AriaStaticInclude.label(this.text.delete),
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled)),
      ...AriaStaticInclude.readonly(Boolean(this.props.readonly))
    }
  }

  /**
   * Resolves properties and settings for the retry action button.
   *
   * Определяет свойства и настройки для кнопки действия повтора.
   * @returns button configuration object or undefined / объект конфигурации кнопки или undefined
   */
  protected getButtonRetry(): ConstrBind<ButtonProps> | undefined {
    if (this.props.readonly) {
      return undefined
    }

    return {
      title: this.text.retry,
      icon: this.props.iconRetry,
      disabled: this.props.disabled,
      readonly: this.props.readonly,
      onClick: this.event.onRetry,
      ...AriaStaticInclude.label(this.text.retry),
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled)),
      ...AriaStaticInclude.readonly(Boolean(this.props.readonly))
    }
  }
}
