import type { Ref, ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'

import { CollageBarInclude } from '../CollageBar'
import { IconLiteInclude } from '../Icon'
import { ImageInclude } from '../Image'

import { CollageItemDimensions } from './CollageItemDimensions'

import type { CollageItemComponents, CollageItemEmits, CollageItemSlots } from './types'
import type { CollageItemProps } from './props'

/**
 * CollageItem controller class coordinating image presentation, dimensions, selection states, and collage bars. /
 * Класс контроллера CollageItem, координирующий представление изображения, размеры, состояния выбора и панели коллажа.
 */
export class CollageItem {
  /** Dimensions and aspect ratio controller / Контроллер размеров и соотношения сторон */
  readonly dimensions: CollageItemDimensions

  /** Click event and routing controller / Контроллер событий клика и маршрутизации */
  readonly event: EventClickInclude

  /** Icon presentation controller / Контроллер представления иконки */
  readonly icon: IconLiteInclude

  /** Image presentation controller / Контроллер представления изображения */
  readonly image: ImageInclude

  /** Collage bar presentation controller / Контроллер представления панели коллажа */
  readonly collageBar: CollageBarInclude

  /**
   * Constructor for CollageItem.
   *
   * Конструктор для CollageItem.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.CollageBarIncludeConstructor class for working with collage bar / класс для работы с панелью коллажа
   * @param constructors.DimensionsConstructor class for managing dimensions / класс для управления размерами
   * @param constructors.EventClickIncludeConstructor class for working with click events / класс для работы с событиями клика
   * @param constructors.IconLiteIncludeConstructor class for working with icon / класс для работы с иконкой
   * @param constructors.ImageIncludeConstructor class for working with image / класс для работы с изображением
   */
  constructor(
    protected readonly props: CollageItemProps,
    protected readonly refs: ToRefs<CollageItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<CollageItemComponents, CollageItemProps>,
    protected readonly slots?: CollageItemSlots,
    protected readonly emits?: ConstrEmit<CollageItemEmits>,
    constructors: {
      CollageBarIncludeConstructor?: typeof CollageBarInclude
      DimensionsConstructor?: typeof CollageItemDimensions
      EventClickIncludeConstructor?: typeof EventClickInclude
      IconLiteIncludeConstructor?: typeof IconLiteInclude
      ImageIncludeConstructor?: typeof ImageInclude
    } = {}
  ) {
    const {
      CollageBarIncludeConstructor = CollageBarInclude,
      DimensionsConstructor = CollageItemDimensions,
      EventClickIncludeConstructor = EventClickInclude,
      IconLiteIncludeConstructor = IconLiteInclude,
      ImageIncludeConstructor = ImageInclude
    } = constructors

    this.dimensions = new DimensionsConstructor(props, className, emits)
    this.event = new EventClickIncludeConstructor(props, undefined, emits)

    this.image = new ImageIncludeConstructor(
      className,
      props,
      components,
      () => ({
        tagImg: true,
        coordinator: this.props.coordinator,
        x: this.props.x,
        y: this.props.y,
        onLoad: this.dimensions.onLoad
      }),
      emits
    )
    this.icon = new IconLiteIncludeConstructor(
      () => ({
        icon: this.props.iconCheck ?? 'check_circle'
      }),
      className,
      components
    )

    this.collageBar = new CollageBarIncludeConstructor(
      className,
      props,
      components
    )
  }
}
