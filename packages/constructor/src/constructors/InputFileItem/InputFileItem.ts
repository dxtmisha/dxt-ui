import { computed, type Ref, type ToRefs } from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
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
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import { InputFileItemEvent } from './InputFileItemEvent'
import { InputFileItemFile } from './InputFileItemFile'
import { InputFileItemProgress } from './InputFileItemProgress'
import { InputFileItemStatus } from './InputFileItemStatus'

import type { AriaList } from '../../types/ariaTypes'
import type { ProgressProps } from '../Progress'
import type { InputFileItemProps } from './props'
import type {
  InputFileItemComponents,
  InputFileItemEmits,
  InputFileItemSlots
} from './types'

/**
 * Main orchestrator class for managing single file upload item display, states, and user interactions.
 *
 * Главный класс-оркестратор для управления отображением отдельного элемента загружаемого файла, состояниями и взаимодействием.
 */
export class InputFileItem {
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

  /** Ripple click effect include / Подключение эффекта волны при клике */
  readonly ripple: RippleInclude

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
   * @param constructors.InputFileItemEventConstructor class for managing file events / класс для управления событиями файла
   * @param constructors.InputFileItemFileConstructor class for managing file data / класс для управления данными файла
   * @param constructors.InputFileItemProgressConstructor class for managing file progress / класс для управления прогрессом файла
   * @param constructors.InputFileItemStatusConstructor class for managing file status / класс для управления статусом файла
   * @param constructors.LabelIncludeConstructor class for creating a label / класс для создания метки
   * @param constructors.ProgressIncludeConstructor class for creating a progress indicator / класс для создания индикатора прогресса
   * @param constructors.RippleIncludeConstructor class for creating a ripple effect / класс для создания эффекта волны
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
      InputFileItemEventConstructor?: typeof InputFileItemEvent
      InputFileItemFileConstructor?: typeof InputFileItemFile
      InputFileItemProgressConstructor?: typeof InputFileItemProgress
      InputFileItemStatusConstructor?: typeof InputFileItemStatus
      LabelIncludeConstructor?: typeof LabelInclude
      ProgressIncludeConstructor?: typeof ProgressInclude
      RippleIncludeConstructor?: typeof RippleInclude
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
      InputFileItemEventConstructor = InputFileItemEvent,
      InputFileItemFileConstructor = InputFileItemFile,
      InputFileItemProgressConstructor = InputFileItemProgress,
      InputFileItemStatusConstructor = InputFileItemStatus,
      LabelIncludeConstructor = LabelInclude,
      ProgressIncludeConstructor = ProgressInclude,
      RippleIncludeConstructor = RippleInclude,
      SkeletonIncludeConstructor = SkeletonInclude,
      TextIncludeConstructor = TextInclude
    } = constructors

    this.enabled = new EnabledConstructor(this.props)
    this.text = new TextIncludeConstructor(this.props)

    this.file = new InputFileItemFileConstructor(this.props)
    this.progressValue = new InputFileItemProgressConstructor(
      this.props,
      this.file
    )
    this.status = new InputFileItemStatusConstructor(
      this.props,
      this.file,
      this.text
    )
    this.event = new InputFileItemEventConstructor(
      this.props,
      this.file,
      this.emits
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

    this.progress = new ProgressIncludeConstructor(
      this.className,
      this.props,
      this.components,
      () => this.getProgress()
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

    this.iconStatus = new IconIncludeConstructor(
      () => ({
        icon: this.status.is('uploaded')
          ? this.props.iconSuccess
          : this.props.iconError
      }),
      this.className,
      this.components,
      () => ({
        class: {
          [`${this.className}__statusIcon`]: true,
          [`${this.className}__statusIcon--success`]: this.status.is('uploaded'),
          [`${this.className}__statusIcon--error`]: this.status.is('error')
        }
      })
    )

    this.label = new LabelIncludeConstructor(
      this.props,
      this.className,
      undefined,
      this.slots,
      undefined,
      computed(() => this.file.name)
    )

    this.caption = new CaptionIncludeConstructor(
      this.props,
      this.className,
      this.slots
    )

    this.skeleton = new SkeletonIncludeConstructor(
      this.props,
      this.classDesign,
      ['classBackground']
    )

    this.ripple = new RippleIncludeConstructor(
      this.className,
      this.components,
      this.enabled
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
      ...AriaStaticInclude.busy(this.status.is('uploading'))
    }
  }

  /**
   * Returns root element HTML bindings and event listeners.
   *
   * Возвращает HTML-привязки и слушатели событий для корневого элемента.
   * @returns bindings object / объект привязок
   */
  get binds() {
    return {
      ...this.aria
    }
  }

  /**
   * Returns dynamic internal classes for the component root.
   *
   * Возвращает динамические внутренние классы для корневого элемента компонента.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--uploading`]: this.status.is('uploading'),
      [`${this.className}--uploaded`]: this.status.is('uploaded'),
      [`${this.className}--error`]: this.status.is('error')
    }
  }

  /**
   * Resolves properties and settings for the delete action button.
   *
   * Определяет свойства и настройки для кнопки действия удаления.
   * @returns button configuration object / объект конфигурации кнопки
   */
  protected getButtonDelete(): ConstrBind<ButtonProps> {
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
   * @returns button configuration object / объект конфигурации кнопки
   */
  protected getButtonRetry(): ConstrBind<ButtonProps> {
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

  /**
   * Resolves properties and settings for the progress indicator.
   *
   * Определяет свойства и настройки для индикатора прогресса.
   * @returns progress configuration object / объект конфигурации прогресса
   */
  protected getProgress(): ProgressProps {
    const item: ProgressProps = {
      visible: this.status.is('uploading')
    }

    if (this.progressValue.isDeterminate()) {
      item.value = this.progressValue.value
      item.max = this.progressValue.max
    }

    if (this.props.appearance === 'compact' || this.props.appearance === 'tile') {
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
}
