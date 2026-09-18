import type { Ref } from 'vue'

import { FocusDirectionInclude } from '../../classes/FocusDirectionInclude'
import type { CarouselPaginationProps } from './props'

/**
 * Class for managing focus state, keyboard directional navigation, and focus bindings in carousel pagination.
 *
 * Класс для управления состоянием фокуса, клавиатурной навигацией по направлениям и привязками фокуса в пагинации карусели.
 */
export class CarouselPaginationFocus {
  /** Focus direction keyboard navigation helper / Вспомогательный класс для клавиатурной навигации фокуса */
  readonly focusDirection: FocusDirectionInclude

  /**
   * Constructor
   * @param props input configuration properties / входные конфигурационные свойства
   * @param element main HTML element / главный HTML-элемент
   * @param className base class name / базовое имя класса
   * @param constructors optional custom implementation class constructors / опциональные пользовательские конструкторы классов
   * @param constructors.FocusDirectionIncludeConstructor class for keyboard navigation / класс для клавиатурной навигации
   */
  constructor(
    protected readonly props: CarouselPaginationProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    constructors: {
      FocusDirectionIncludeConstructor?: typeof FocusDirectionInclude
    } = {}
  ) {
    const {
      FocusDirectionIncludeConstructor = FocusDirectionInclude
    } = constructors

    this.focusDirection = new FocusDirectionIncludeConstructor(
      this.element,
      `.${className}__item`,
      `.${className}__item--selected`,
      `${className}__item--focus`
    )
  }

  /**
   * Returns binding attributes for the container element.
   *
   * Возвращает атрибуты привязки для элемента контейнера.
   * @returns binding attributes object / объект атрибутов привязки
   */
  get binds(): Record<string, any> {
    if (this.isFocusable()) {
      return this.focusDirection.binds
    }

    return {}
  }

  /**
   * Checks whether the pagination is focusable.
   *
   * Проверяет, доступна ли пагинация для фокуса.
   * @returns true if pagination is focusable / true, если пагинация доступна для фокуса
   */
  isFocusable(): boolean {
    return this.props.clickable !== false
      && this.props.type !== 'fraction'
      && this.props.type !== 'progressbar'
  }
}
