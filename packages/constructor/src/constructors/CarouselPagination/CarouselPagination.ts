import type { Ref, ToRefs } from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrStyles,
  type DesignComp
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TextInclude } from '../../classes/TextInclude'
import type { AriaList } from '../../types/ariaTypes'

import { CarouselPaginationItems } from './CarouselPaginationItems'
import { CarouselPaginationSelected } from './CarouselPaginationSelected'
import type { CarouselPaginationComponents, CarouselPaginationEmits, CarouselPaginationSlots } from './types'
import type { CarouselPaginationProps } from './props'

/**
 * CarouselPagination orchestrator class coordinating pagination items, state synchronization, and click interactions.
 *
 * Класс-оркестратор CarouselPagination, координирующий элементы пагинации, синхронизацию состояния и клик-взаимодействия.
 */
export class CarouselPagination {
  /** Helper for calculating items, dynamic bullets, fraction, and progress / Вспомогательный класс для расчетов элементов, динамических буллетов, дроби и прогресса */
  readonly items: CarouselPaginationItems

  /** Slide selection and transition helper / Вспомогательный класс для выбора слайда и навигации */
  readonly selected: CarouselPaginationSelected

  /** Text manager for pagination / Менеджер текста для пагинации */
  readonly text: TextInclude

  /**
   * Constructor
   * @param props input configuration properties / входные конфигурационные свойства
   * @param refs reactive references of properties / реактивные ссылки свойств
   * @param element main HTML element / главный HTML-элемент
   * @param classDesign design class token name / имя токена класса дизайна
   * @param className base class name / базовое имя класса
   * @param components registry of design components / реестр дизайн-компонентов
   * @param slots slot functions wrapper / обертка функций слотов
   * @param emits event emitter callback / функция обратного вызова для генерации событий
   * @param constructors optional custom implementation class constructors / опциональные пользовательские конструкторы классов
   * @param constructors.CarouselPaginationItemsConstructor custom items calculation constructor / пользовательский конструктор расчета элементов
   * @param constructors.CarouselPaginationSelectedConstructor custom selection constructor / пользовательский конструктор выбора слайда
   * @param constructors.ModelIncludeConstructor class for working with model / класс для работы с моделью
   * @param constructors.TextIncludeConstructor class for managing text and translations / класс для управления текстом и переводами
   */
  constructor(
    protected readonly props: CarouselPaginationProps,
    protected readonly refs: ToRefs<CarouselPaginationProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<CarouselPaginationComponents, CarouselPaginationProps>,
    protected readonly slots?: CarouselPaginationSlots,
    protected readonly emits?: ConstrEmit<CarouselPaginationEmits>,
    constructors: {
      CarouselPaginationItemsConstructor?: typeof CarouselPaginationItems
      CarouselPaginationSelectedConstructor?: typeof CarouselPaginationSelected
      ModelIncludeConstructor?: typeof ModelInclude<number>
      TextIncludeConstructor?: typeof TextInclude
    } = {}
  ) {
    const {
      CarouselPaginationItemsConstructor = CarouselPaginationItems,
      CarouselPaginationSelectedConstructor = CarouselPaginationSelected,
      ModelIncludeConstructor = ModelInclude,
      TextIncludeConstructor = TextInclude
    } = constructors

    this.text = new TextIncludeConstructor(props)
    this.selected = new CarouselPaginationSelectedConstructor(props, refs, emits)
    this.items = new CarouselPaginationItemsConstructor(
      props,
      refs,
      this.selected,
      emits
    )

    new ModelIncludeConstructor('selected', emits, this.selected.item)
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
      ...AriaStaticInclude.label(this.text.pagination)
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
      [`${this.className}--hide`]: this.items.isHide()
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
      [`--${this.className}-sys-percent`]: `${this.items.percent}%`
    }
  }
}
