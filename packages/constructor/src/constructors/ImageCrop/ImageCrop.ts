import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { CropAreaInclude } from '../CropArea'
import { ImageInclude } from '../Image'

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
  /** Model manager / Менеджер модели */
  readonly model: ModelInclude<CropAreaCoordinator>

  /** Image component inclusion controller / Контроллер включения компонента изображения */
  readonly image: ImageInclude

  /** CropArea component inclusion controller / Контроллер включения компонента CropArea */
  readonly cropArea: CropAreaInclude

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
   * @param constructors.ImageIncludeConstructor class for working with image inclusion / класс для работы с включением изображения
   * @param constructors.CropAreaIncludeConstructor class for working with crop area inclusion / класс для работы с включением области кадрирования
   * @param constructors.ModelIncludeConstructor class for working with model synchronization / класс для работы с синхронизацией модели
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
      ImageIncludeConstructor?: typeof ImageInclude
      CropAreaIncludeConstructor?: typeof CropAreaInclude
      ModelIncludeConstructor?: typeof ModelInclude<CropAreaCoordinator>
    } = {}
  ) {
    const {
      ImageIncludeConstructor = ImageInclude,
      CropAreaIncludeConstructor = CropAreaInclude,
      ModelIncludeConstructor = ModelInclude
    } = constructors

    this.model = new ModelIncludeConstructor('value', this.emits)

    this.image = new ImageIncludeConstructor(
      className,
      props,
      components,
      () => ({
        alt: this.props.alt,
        disabled: this.props.disabled,
        static: true,
        tagImg: true,
        size: 'contain'
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
        onResize: (event: CropAreaEventParameters) => this.model.emit(event.coordinator)
      })
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
      ...AriaStaticInclude.disabled(this.props.disabled)
    }
  }
}
