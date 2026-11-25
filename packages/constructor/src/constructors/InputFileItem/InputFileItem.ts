import type { Ref } from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { TextInclude } from '../../classes/TextInclude'

import { ButtonInclude } from '../Button'
import { IconInclude } from '../Icon'
import { ImageInclude } from '../Image'
import { ImageCropInclude } from '../ImageCrop'
import { ProgressInclude } from '../Progress'
import { SkeletonInclude } from '../Skeleton'

import { InputFileItemAppearance } from './InputFileItemAppearance'
import { InputFileItemButton } from './InputFileItemButton'
import { InputFileItemCrop } from './InputFileItemCrop'
import { InputFileItemDelete } from './InputFileItemDelete'
import { InputFileItemEvent } from './InputFileItemEvent'
import { InputFileItemFile } from './InputFileItemFile'
import { InputFileItemProgress } from './InputFileItemProgress'
import { InputFileItemStatus } from './InputFileItemStatus'

import type { AriaList } from '../../types/ariaTypes'
import type {
  InputFileItemComponents,
  InputFileItemEmits,
  InputFileItemExpose,
  InputFileItemSlots
} from './types'
import type { InputFileItemProps } from './props'

/** InputFileItem dependency constructors type / Тип конструкторов зависимостей InputFileItem */
export type InputFileItemConstructors = {
  /** Appearance manager constructor / Конструктор менеджера режима отображения */
  appearance: typeof InputFileItemAppearance
  /** Action buttons manager constructor / Конструктор менеджера кнопок действий */
  button: typeof InputFileItemButton
  /** Crop button include constructor / Конструктор подключения кнопки кадрирования */
  buttonCrop: typeof ButtonInclude
  /** Delete button include constructor / Конструктор подключения кнопки удаления */
  buttonDelete: typeof ButtonInclude
  /** Retry button include constructor / Конструктор подключения кнопки повтора */
  buttonRetry: typeof ButtonInclude
  /** Caption include constructor / Конструктор подключения подписи */
  caption: typeof CaptionInclude
  /** Image crop manager constructor / Конструктор менеджера кадрирования изображения */
  crop: typeof InputFileItemCrop
  /** Delete confirmation manager constructor / Конструктор менеджера подтверждения удаления */
  delete: typeof InputFileItemDelete
  /** Enabled state controller constructor / Конструктор контроллера состояния активности */
  enabled: typeof EnabledInclude
  /** Event interaction manager constructor / Конструктор менеджера событий взаимодействия */
  event: typeof InputFileItemEvent
  /** File data helper constructor / Конструктор помощника данных файла */
  file: typeof InputFileItemFile
  /** Status icon include constructor / Конструктор подключения иконки статуса */
  iconStatus: typeof IconInclude
  /** Thumbnail image include constructor / Конструктор подключения изображения миниатюры */
  image: typeof ImageInclude
  /** ImageCrop component include constructor / Конструктор подключения компонента ImageCrop */
  imageCrop: typeof ImageCropInclude
  /** Label include constructor / Конструктор подключения метки */
  label: typeof LabelInclude
  /** Progress indicator include constructor / Конструктор подключения индикатора прогресса */
  progress: typeof ProgressInclude
  /** Upload progress helper constructor / Конструктор помощника прогресса загрузки */
  progressValue: typeof InputFileItemProgress
  /** Skeleton include constructor / Конструктор подключения скелетона */
  skeleton: typeof SkeletonInclude
  /** File status manager constructor / Конструктор менеджера статуса файла */
  status: typeof InputFileItemStatus
  /** Text translations controller constructor / Конструктор контроллера переводов текста */
  text: typeof TextInclude
}

/**
 * Main orchestrator class for managing single file upload item display, states, and user interactions.
 *
 * Главный класс-оркестратор для управления отображением отдельного элемента загружаемого файла, состояниями и взаимодействием.
 */
export class InputFileItem extends DesignLogicAbstract<
  HTMLDivElement,
  InputFileItemComponents,
  InputFileItemEmits,
  InputFileItemSlots,
  InputFileItemProps,
  InputFileItemConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<InputFileItemConstructors> = {
    appearance: {
      item: InputFileItemAppearance,
      parameters: () => [this.props]
    },
    button: {
      item: InputFileItemButton,
      parameters: () => [
        this.props,
        this.i('event'),
        this.i('text')
      ]
    },
    buttonCrop: {
      item: ButtonInclude,
      canCreate: () => !this.props.readonly && this.i('crop').is(),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.i('button').crop,
        'buttonCrop'
      ]
    },
    buttonDelete: {
      item: ButtonInclude,
      canCreate: () => !this.props.readonly,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.i('button').delete,
        'buttonDelete'
      ]
    },
    buttonRetry: {
      item: ButtonInclude,
      canCreate: () => !this.props.readonly && this.i('status').isError(),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.i('button').retry,
        'buttonRetry'
      ]
    },
    caption: {
      item: CaptionInclude,
      parameters: () => [
        {},
        this.naming
      ]
    },
    crop: {
      item: InputFileItemCrop,
      parameters: () => [
        this.props,
        this.i('text'),
        () => this.i('event').onCrop()
      ]
    },
    delete: {
      item: InputFileItemDelete,
      parameters: () => [
        this.props,
        this.i('event'),
        this.i('text')
      ]
    },
    enabled: {
      item: EnabledInclude,
      parameters: () => [this.props]
    },
    event: {
      item: InputFileItemEvent,
      parameters: () => [
        this.props,
        this.i('file'),
        this.emits
      ]
    },
    file: {
      item: InputFileItemFile,
      parameters: () => [
        this.props,
        this.i('crop')
      ]
    },
    iconStatus: {
      item: IconInclude,
      canCreate: () => this.i('status').isUploaded() || this.i('status').isError(),
      parameters: () => [
        () => ({
          selected: this.i('status').isUploaded(),
          icon: {
            icon: this.props.iconError,
            iconActive: this.props.iconSuccess,
            success: this.i('status').isUploaded(),
            error: this.i('status').isError()
          }
        }),
        this.naming,
        this.components
      ]
    },
    image: {
      item: ImageInclude,
      parameters: () => [
        () => ({
          ...this.props,
          image: this.i('file').image,
          coordinator: this.i('crop').coordinator
        }),
        this.naming,
        this.components,
        undefined,
        () => ({
          alt: this.i('file').name
        })
      ]
    },
    imageCrop: {
      item: ImageCropInclude,
      canCreate: () => !this.props.readonly && this.i('crop').is(),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          coordinator: this.i('crop').coordinator,
          image: this.i('file').imageOriginal,
          onResize: this.i('crop').onResize
        })
      ]
    },
    label: {
      item: LabelInclude,
      parameters: () => [
        () => ({ label: this.i('file').name }),
        this.naming
      ]
    },
    progress: {
      item: ProgressInclude,
      canCreate: () => this.i('status').isUploading(),
      parameters: () => [
        () => ({
          ...this.props,
          loading: this.props.loading ?? this.i('status').isUploading()
        }),
        this.naming,
        this.components,
        () => this.i('progressValue').progressProps
      ]
    },
    progressValue: {
      item: InputFileItemProgress,
      parameters: () => [
        this.props,
        this.i('file'),
        this.i('appearance'),
        this.i('status')
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      canCreate: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        ['classBackground']
      ]
    },
    status: {
      item: InputFileItemStatus,
      parameters: () => [
        this.props,
        this.i('file'),
        this.i('text')
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
    props: Readonly<InputFileItemProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<InputFileItemComponents, InputFileItemProps>,
    slots?: InputFileItemSlots,
    emits?: ConstrEmit<InputFileItemEmits>,
    constructors?: Partial<InputFileItemConstructors>
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
   * Returns reactive ARIA attribute mappings.
   *
   * Возвращает реактивные привязки атрибутов ARIA.
   * @returns ARIA attributes list / список атрибутов ARIA
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled)),
      ...AriaStaticInclude.busy(this.i('status').isUploading())
    }
  }

  /**
   * Returns CSS classes from skeleton controller when active.
   *
   * Возвращает CSS-классы из контроллера скелетона при его активации.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return this.callInstance('skeleton', item => item.classes, {})
  }

  /**
   * Returns exposed properties and methods of the component.
   *
   * Возвращает открытые свойства и методы компонента.
   * @returns exposed API object / объект открытого API
   */
  get expose(): InputFileItemExpose {
    return {
      getFile: () => this.i('file').getFile(),
      getStatus: () => this.i('status').status,
      getCrop: () => this.i('crop').coordinator,
      delete: () => this.i('event').onDelete(),
      retry: () => this.i('event').onRetry()
    }
  }
}
