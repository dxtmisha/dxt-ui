import type { Ref, ToRefs } from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ImageInclude } from '../Image'
import { SkeletonInclude } from '../Skeleton'

import { CarouselItemData } from './CarouselItemData'

import type { CarouselItemProps } from './props'
import type { CarouselItemComponents, CarouselItemEmits, CarouselItemSlots } from './types'

/**
 * Class representing the business logic and state orchestration of the CarouselItem component.
 *
 * Класс, представляющий бизнес-логику и оркестрацию состояний компонента CarouselItem.
 */
export class CarouselItem {
  /** Controller for data, accessibility, and dynamic styles / Контроллер данных, доступности и динамических стилей */
  readonly data: CarouselItemData

  /** Click event controller / Контроллер событий клика */
  readonly event: EventClickInclude

  /** Image presentation controller / Контроллер отображения изображения */
  readonly image: ImageInclude

  /** Skeleton loading controller / Контроллер скелетона загрузки */
  readonly skeleton: SkeletonInclude

  /**
   * Constructor for CarouselItem.
   *
   * Конструктор для CarouselItem.
   * @param props input reactive properties / входные реактивные свойства
   * @param refs raw properties wrapped as refs / исходные свойства в виде ссылок (refs)
   * @param element root DOM element reference / ссылка на корневой DOM-элемент
   * @param classDesign design name / название дизайна
   * @param className base class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits event emission function / функция отправки событий
   * @param constructors overridable constructor dependencies / переопределяемые конструкторы зависимостей
   */
  constructor(
    protected readonly props: CarouselItemProps,
    protected readonly refs: ToRefs<CarouselItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<CarouselItemComponents, CarouselItemProps>,
    protected readonly slots?: CarouselItemSlots,
    protected readonly emits?: ConstrEmit<CarouselItemEmits>,
    constructors: {
      CarouselItemDataConstructor?: typeof CarouselItemData
      EventClickIncludeConstructor?: typeof EventClickInclude
      ImageIncludeConstructor?: typeof ImageInclude
      SkeletonIncludeConstructor?: typeof SkeletonInclude
    } = {}
  ) {
    const {
      CarouselItemDataConstructor = CarouselItemData,
      EventClickIncludeConstructor = EventClickInclude,
      ImageIncludeConstructor = ImageInclude,
      SkeletonIncludeConstructor = SkeletonInclude
    } = constructors

    this.data = new CarouselItemDataConstructor(props)
    this.skeleton = new SkeletonIncludeConstructor(props, classDesign, ['classBackground'])
    this.event = new EventClickIncludeConstructor(props, undefined, emits)
    this.image = new ImageIncludeConstructor(
      className,
      props,
      components,
      undefined,
      emits
    )
  }

  /**
   * Resolves the HTML tag for the container.
   *
   * Определяет HTML-тег для контейнера.
   * @returns HTML tag name / имя HTML-тега
   */
  get tag(): string {
    if (this.props.tag) {
      return this.props.tag
    }

    if (this.props.to || this.props.href) {
      return 'a'
    }

    return 'div'
  }

  /**
   * HTML and ARIA attribute bindings for the root element.
   *
   * Привязки HTML и ARIA атрибутов для корневого элемента.
   * @returns bindings dictionary / словарь привязок
   */
  get binds(): Record<string, any> {
    return {
      ...this.event.binds,
      ...this.data.aria,
      tabindex: this.data.isSelected() ? undefined : -1
    }
  }

  /**
   * Returns internal dynamic classes for the root element.
   *
   * Возвращает внутренние динамические классы для корневого элемента.
   * @returns class dictionary / словарь классов
   */
  get classes(): ConstrClassObject {
    return {
      ...this.skeleton.classes
    }
  }
}
