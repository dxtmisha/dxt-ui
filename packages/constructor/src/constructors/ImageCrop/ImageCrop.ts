import type { Ref, ToRefs } from 'vue'
import type { ConstrEmit, DesignComp } from '@dxtmisha/functional'

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

/**
 * Main orchestrator class for managing ImageCrop state, image loading, styling, and crop area.
 *
 * Главный класс-оркестратор для управления состоянием ImageCrop, загрузкой изображения, стилями и областью кадрирования.
 */
export class ImageCrop {
  /** Image helper instance / Экземпляр помощника по изображению */
  readonly cropImage: ImageCropImage

  /** Image component inclusion controller / Контроллер включения компонента изображения */
  readonly image: ImageInclude

  /** CropArea component inclusion controller / Контроллер включения компонента CropArea */
  readonly cropArea: CropAreaInclude

  /** Progress indicator manager instance / Экземпляр менеджера индикатора прогресса */
  readonly progress: ProgressInclude

  /** Model manager / Менеджер модели */
  readonly model: ModelInclude<CropAreaCoordinator>

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
   * @param constructors.CropAreaIncludeConstructor class for working with crop area inclusion / класс для работы с включением области кадрирования
   * @param constructors.ImageCropImageConstructor class for working with image state / класс для работы с состоянием изображения
   * @param constructors.ImageIncludeConstructor class for working with image inclusion / класс для работы с включением изображения
   * @param constructors.ModelIncludeConstructor class for working with model synchronization / класс для работы с синхронизацией модели
   * @param constructors.ProgressConstructor class for creating a progress indicator / класс для создания индикатора прогресса
   */
  constructor(
    protected readonly props: ImageCropProps,
    protected readonly refs: ToRefs<ImageCropProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ImageCropComponents, ImageCropProps>,
    protected readonly slots?: ImageCropSlots,
    protected readonly emits?: ConstrEmit<ImageCropEmits>,
    constructors: {
      CropAreaIncludeConstructor?: typeof CropAreaInclude
      ImageCropImageConstructor?: typeof ImageCropImage
      ImageIncludeConstructor?: typeof ImageInclude
      ModelIncludeConstructor?: typeof ModelInclude<CropAreaCoordinator>
      ProgressConstructor?: typeof ProgressInclude
    } = {}
  ) {
    const {
      CropAreaIncludeConstructor = CropAreaInclude,
      ImageCropImageConstructor = ImageCropImage,
      ImageIncludeConstructor = ImageInclude,
      ModelIncludeConstructor = ModelInclude,
      ProgressConstructor = ProgressInclude
    } = constructors

    this.model = new ModelIncludeConstructor('value', this.emits)
    this.cropImage = new ImageCropImageConstructor(className, props, emits)

    this.image = new ImageIncludeConstructor(
      className,
      props,
      components,
      () => ({
        alt: this.props.alt,
        disabled: this.props.disabled,
        size: 'contain',
        static: true,
        tagImg: true,
        onLoad: this.cropImage.onLoad
      }),
      emits
    )

    this.cropArea = new CropAreaIncludeConstructor(
      className,
      props,
      components,
      () => ({
        value: this.props.value,
        modelValue: this.props.modelValue,
        disabled: this.props.disabled,
        readonly: this.props.readonly,
        onResize: (event: CropAreaEventParameters) => {
          this.model.emit(event.coordinator)
          this.emits?.('resize', event)
        }
      })
    )

    this.progress = new ProgressConstructor(
      className,
      () => ({
        loading: this.cropImage.isLoading()
      }),
      components,
      {
        circular: true
      }
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
      ...this.progress.aria.value,
      ...AriaStaticInclude.disabled(this.props.disabled)
    }
  }
}
