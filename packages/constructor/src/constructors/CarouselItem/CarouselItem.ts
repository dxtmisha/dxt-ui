import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ImageInclude } from '../Image'
import { SkeletonInclude } from '../Skeleton'

import { CarouselItemData } from './CarouselItemData'

import type { AriaList } from '../../types/ariaTypes'
import type { CarouselItemSlotDefault } from './basicTypes'
import type { CarouselItemProps } from './props'
import type { CarouselItemComponents, CarouselItemEmits, CarouselItemSlots } from './types'

/** CarouselItem dependency constructors type / Тип конструкторов зависимостей CarouselItem */
export type CarouselItemConstructors = {
  /** CarouselItem data controller constructor / Конструктор контроллера данных CarouselItem */
  data: typeof CarouselItemData
  /** Click event include constructor / Конструктор подключения событий клика */
  event: typeof EventClickInclude
  /** Image include constructor / Конструктор подключения изображения */
  image: typeof ImageInclude
  /** Skeleton include constructor / Конструктор подключения скелетона */
  skeleton: typeof SkeletonInclude
}

/**
 * Class representing the business logic and state orchestration of the CarouselItem component.
 * Coordinates slide data, accessibility attributes, click events, image presentation, and skeleton state.
 *
 * Класс, представляющий бизнес-логику и оркестрацию состояний компонента CarouselItem.
 * Координирует данные слайда, атрибуты доступности, события клика, отображение изображения и состояние скелетона.
 */
export class CarouselItem extends DesignLogicAbstract<
  HTMLDivElement,
  CarouselItemComponents,
  CarouselItemEmits,
  CarouselItemSlots,
  CarouselItemProps,
  CarouselItemConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<CarouselItemConstructors> = {
    data: {
      item: CarouselItemData,
      parameters: () => [
        this.props
      ]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        this.props,
        undefined,
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
        this.emits
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
    }
  }

  /**
   * Returns aggregated ARIA attributes and tabindex for the root slide element.
   *
   * Возвращает агрегированные ARIA-атрибуты и tabindex для корневого элемента слайда.
   * @returns ARIA attribute dictionary / словарь ARIA-атрибутов
   */
  get aria(): AriaList {
    const data = this.i('data')
    const aria: AriaList = {
      ...data.aria
    }

    if (!data.isSelected()) {
      aria.tabindex = -1
    }

    return aria
  }

  /**
   * Returns HTML, event, and ARIA attribute bindings for the root element.
   *
   * Возвращает привязки HTML-атрибутов, событий и ARIA для корневого элемента.
   * @returns bindings dictionary / словарь привязок
   */
  get binds(): ConstrBind {
    const binds: ConstrBind = {
      ...this.i('event').binds,
      ...this.aria
    }

    if (this.props.value !== undefined) {
      binds['data-value'] = this.props.value
    }

    return binds
  }

  /**
   * Returns internal dynamic classes for the root element.
   *
   * Возвращает внутренние динамические классы для корневого элемента.
   * @returns class dictionary / словарь классов
   */
  get classes(): ConstrClassObject {
    return this.callInstance('skeleton', item => item.classes, {})
  }

  /**
   * Returns properties passed to the default scoped slot.
   *
   * Возвращает свойства, передаваемые в слот по умолчанию.
   * @returns default slot properties / свойства слота по умолчанию
   */
  get slotData(): CarouselItemSlotDefault {
    const data = this.i('data')

    return {
      selected: data.isSelected(),
      slide: data.slide
    }
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

    if (
      this.props.to
      || this.props.href
    ) {
      return 'a'
    }

    return 'div'
  }
}
