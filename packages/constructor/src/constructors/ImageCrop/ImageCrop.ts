import type { Ref } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type ConstrStyles,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { CropAreaInclude } from '../CropArea'
import { ImageInclude } from '../Image'
import { ProgressInclude } from '../Progress'

import { ImageCropImage } from './ImageCropImage'

import type { CropAreaCoordinator, CropAreaEventParameters } from '../CropArea'
import type { AriaList } from '../../types/ariaTypes'
import type { ImageCropComponents, ImageCropEmits, ImageCropSlots } from './types'
import type { ImageCropProps } from './props'

/** ImageCrop dependency constructors type / Тип конструкторов зависимостей ImageCrop */
export type ImageCropConstructors = {
  /** Crop area inclusion constructor / Конструктор включения области кадрирования */
  cropArea: typeof CropAreaInclude
  /** Image crop helper constructor / Конструктор помощника кадрирования изображения */
  cropImage: typeof ImageCropImage
  /** Image inclusion constructor / Конструктор включения изображения */
  image: typeof ImageInclude
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<CropAreaCoordinator>
  /** Progress indicator inclusion constructor / Конструктор включения индикатора прогресса */
  progress: typeof ProgressInclude
}

/**
 * Main orchestrator class for managing ImageCrop state, image loading, styling, and crop area.
 *
 * Главный класс-оркестратор для управления состоянием ImageCrop, загрузкой изображения, стилями и областью кадрирования.
 */
export class ImageCrop extends DesignLogicAbstract<
  HTMLDivElement,
  ImageCropComponents,
  ImageCropEmits,
  ImageCropSlots,
  ImageCropProps,
  ImageCropConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ImageCropConstructors> = {
    cropArea: {
      item: CropAreaInclude,
      canCreate: () => CropAreaInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          value: this.props.value,
          modelValue: this.props.modelValue,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          onResize: (event: CropAreaEventParameters) => {
            this.i('model').emit(event.coordinator)
            this.emits?.('resize', event)
          }
        })
      ]
    },
    cropImage: {
      item: ImageCropImage,
      parameters: () => [
        this.props,
        this.naming,
        this.emits
      ]
    },
    image: {
      item: ImageInclude,
      canCreate: () => ImageInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        this.emits,
        () => ({
          alt: this.props.alt,
          disabled: this.props.disabled,
          size: 'contain',
          static: true,
          tagImg: true,
          onLoad: this.i('cropImage').onLoad
        })
      ]
    },
    model: {
      item: ModelInclude<CropAreaCoordinator>,
      parameters: () => [
        'value',
        this.emits
      ]
    },
    progress: {
      item: ProgressInclude,
      canCreate: () => this.i('cropImage').isLoading(),
      parameters: () => [
        () => ({
          loading: this.i('cropImage').isLoading()
        }),
        this.naming,
        this.components,
        {
          circular: true
        }
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
   * @param constructors dependency injection overrides object / объект переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<ImageCropProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<ImageCropComponents, ImageCropProps>,
    slots?: ImageCropSlots,
    emits?: ConstrEmit<ImageCropEmits>,
    constructors?: Partial<ImageCropConstructors>
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
   * Returns ARIA accessibility attributes.
   *
   * Возвращает атрибуты доступности ARIA.
   * @returns ARIA attributes list / список атрибутов ARIA
   */
  get aria(): AriaList {
    return {
      ...this.callInstance('progress', item => item.aria.value),
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled))
    }
  }

  /**
   * Returns dynamic CSS variable styles for the root element.
   *
   * Возвращает динамические стили через CSS-переменные для корневого элемента.
   * @returns styles object / объект стилей
   */
  get styles(): ConstrStyles {
    return this.i('cropImage').styles
  }
}
