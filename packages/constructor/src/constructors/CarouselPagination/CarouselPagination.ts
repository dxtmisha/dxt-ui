import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  type ConstrStyles,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TextInclude } from '../../classes/TextInclude'

import { CarouselPaginationFocus } from './CarouselPaginationFocus'
import { CarouselPaginationItems } from './CarouselPaginationItems'
import { CarouselPaginationSelected } from './CarouselPaginationSelected'

import type { AriaList } from '../../types/ariaTypes'
import type { CarouselPaginationProps } from './props'
import type {
  CarouselPaginationComponents,
  CarouselPaginationEmits,
  CarouselPaginationSlots
} from './types'

/** CarouselPagination dependency constructors type / Тип конструкторов зависимостей CarouselPagination */
export type CarouselPaginationConstructors = {
  /** Focus management and keyboard navigation constructor / Конструктор управления фокусом и клавиатурной навигацией */
  focus: typeof CarouselPaginationFocus
  /** Pagination items calculation constructor / Конструктор расчетов элементов пагинации */
  items: typeof CarouselPaginationItems
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<number>
  /** Slide selection manager constructor / Конструктор менеджера выбора слайдов */
  selected: typeof CarouselPaginationSelected
  /** Localized text manager constructor / Конструктор менеджера локализованного текста */
  text: typeof TextInclude
}

/**
 * CarouselPagination orchestrator class coordinating pagination items, state synchronization,
 * keyboard focus navigation, WAI-ARIA attributes, and click interactions.
 *
 * Класс-оркестратор CarouselPagination, координирующий элементы пагинации, синхронизацию состояния,
 * клавиатурную навигацию фокуса, ARIA-атрибуты и клик-взаимодействия.
 */
export class CarouselPagination extends DesignLogicAbstract<
  HTMLDivElement,
  CarouselPaginationComponents,
  CarouselPaginationEmits,
  CarouselPaginationSlots,
  CarouselPaginationProps,
  CarouselPaginationConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<CarouselPaginationConstructors> = {
    focus: {
      item: CarouselPaginationFocus,
      canCreate: () => CarouselPaginationFocus.is(this.props),
      parameters: () => [
        this.props,
        this.element,
        () => this.i('selected')
      ]
    },
    items: {
      item: CarouselPaginationItems,
      parameters: () => [
        this.props,
        () => this.i('selected'),
        this.emits
      ]
    },
    model: {
      item: ModelInclude<number>,
      parameters: () => [
        'selected',
        this.emits
      ]
    },
    selected: {
      item: CarouselPaginationSelected,
      parameters: () => [
        this.props,
        () => this.i('model'),
        this.emits
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    }
  }

  /**
   * Returns ARIA attributes for the root element.
   *
   * Возвращает ARIA-атрибуты для корневого элемента.
   * @returns ARIA attributes dictionary / словарь ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role('tablist'),
      ...AriaStaticInclude.orientation(this.props.vertical ? 'vertical' : 'horizontal'),
      ...AriaStaticInclude.label(this.i('text').pagination)
    }
  }

  /**
   * Returns root element binding attributes combining keyboard focus listeners and WAI-ARIA attributes.
   *
   * Возвращает атрибуты привязки для корневого элемента, объединяющие обработчики клавиатурного фокуса и WAI-ARIA атрибуты.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ConstrBind {
    return {
      ...this.callInstance('focus', item => item.binds, {}),
      ...this.aria
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
      [this.naming.getStatusClass('hide')]: this.isHide()
    }
  }

  /**
   * Returns styles for the root element.
   *
   * Возвращает стили для корневого элемента.
   * @returns styles dictionary / словарь стилей
   */
  get styles(): ConstrStyles {
    return {
      [this.naming.getStyle('percent')]: `${this.i('items').percent}%`
    }
  }

  /**
   * Returns HTML tag name for the root container element.
   *
   * Возвращает имя HTML-тега для корневого контейнерного элемента.
   * @returns HTML tag name / имя HTML-тега
   */
  get tag(): string {
    return this.props.tag || 'div'
  }

  /**
   * Checks whether the pagination should be hidden (e.g. when `hideIfOne` is true and count <= 1).
   *
   * Проверяет, должна ли пагинация быть скрыта (например, при `hideIfOne: true` и количестве слайдов <= 1).
   * @returns true if pagination should be hidden / true, если пагинация должна быть скрыта
   */
  isHide(): boolean {
    return this.i('items').isHide()
  }
}
