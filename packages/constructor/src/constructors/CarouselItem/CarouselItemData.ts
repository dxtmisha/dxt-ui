// ai-none

import { isNull } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import type { AriaList } from '../../types/ariaTypes'
import type { RoleType } from '../../types/roleTypes'
import type { CarouselItemProps } from './props'

/**
 * Helper class for managing CarouselItem data, states, and accessibility.
 *
 * Вспомогательный класс для управления данными, состояниями и доступностью CarouselItem.
 */
export class CarouselItemData {
  /**
   * Constructor for initializing CarouselItemData.
   *
   * Конструктор для инициализации CarouselItemData.
   * @param props input reactive properties / входные реактивные свойства
   */
  constructor(
    protected readonly props: Readonly<CarouselItemProps>
  ) {}

  /**
   * Returns the ARIA attribute dictionary according to WAI-ARIA Carousel Pattern.
   *
   * Возвращает словарь ARIA-атрибутов в соответствии с шаблоном WAI-ARIA Carousel.
   * @returns ARIA attribute dictionary / словарь ARIA-атрибутов
   */
  get aria(): AriaList {
    const isSelected = this.isSelected()

    return {
      ...AriaStaticInclude.role(this.role),
      ...AriaStaticInclude.roledescription('slide'),
      ...AriaStaticInclude.label(this.label),
      ...AriaStaticInclude.hidden(!isSelected)
    }
  }

  /**
   * Generates or retrieves the accessible label for the slide.
   *
   * Генерирует или получает метку доступности для слайда.
   * @returns label string or undefined / строка метки или undefined
   */
  get label(): string | undefined {
    if (this.props.ariaLabel) {
      return this.props.ariaLabel
    }

    if (
      !isNull(this.props.slide)
      && this.props.slide !== ''
    ) {
      if (
        !isNull(this.props.total)
        && this.props.total !== ''
      ) {
        return `${this.props.slide} / ${this.props.total}`
      }

      return String(this.props.slide)
    }

    return undefined
  }

  /**
   * Returns the ARIA role of the slide container.
   *
   * Возвращает ARIA-роль контейнера слайда.
   * @returns role string / строка роли
   */
  get role(): RoleType {
    return this.props.role || 'group'
  }

  /**
   * Returns the slide number or identifier.
   *
   * Возвращает номер или идентификатор слайда.
   * @returns slide number or identifier / номер или идентификатор слайда
   */
  get slide(): number | string | undefined {
    return this.props.slide
  }

  /**
   * Checks whether the current slide is selected.
   *
   * Проверяет, выбран ли текущий слайд.
   * @returns true if slide is selected / true, если слайд выбран
   */
  isSelected(): boolean {
    return Boolean(this.props.selected)
  }
}
