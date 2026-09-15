import { ref, type Ref, type ToRefs, watch } from 'vue'
import { type ConstrClassObject, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import type { AriaList } from '../../types/ariaTypes'

import { CarouselPaginationItems } from './CarouselPaginationItems'
import type { CarouselPaginationComponents, CarouselPaginationEmits, CarouselPaginationSlots } from './types'
import type { CarouselPaginationProps } from './props'

/**
 * CarouselPagination orchestrator class coordinating pagination items, state synchronization, and click interactions.
 *
 * Класс-оркестратор CarouselPagination, координирующий элементы пагинации, синхронизацию состояния и клик-взаимодействия.
 */
export class CarouselPagination {
  /** Internal active slide ref synchronized with v-model / Внутренняя ссылка на активный слайд, синхронизированная с v-model */
  readonly selectedItem = ref<number>(1)

  /** Helper for calculating items, dynamic bullets, fraction, and progress / Вспомогательный класс для расчетов элементов, динамических буллетов, дроби и прогресса */
  readonly items: CarouselPaginationItems

  /** Click event listener helper / Вспомогательный класс для обработки кликов */
  readonly eventClick: EventClickInclude

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
   * @param constructors.EventClickIncludeConstructor class for working with event click / класс для работы с событием клика
   * @param constructors.ModelIncludeConstructor class for working with model / класс для работы с моделью
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
      EventClickIncludeConstructor?: typeof EventClickInclude
      ModelIncludeConstructor?: typeof ModelInclude<number>
    } = {}
  ) {
    const {
      CarouselPaginationItemsConstructor = CarouselPaginationItems,
      EventClickIncludeConstructor = EventClickInclude,
      ModelIncludeConstructor = ModelInclude
    } = constructors

    this.items = new CarouselPaginationItemsConstructor(props, refs)
    this.eventClick = new EventClickIncludeConstructor(undefined, undefined, emits)

    this.selectedItem.value = this.items.active.value

    watch(this.items.active, (newActiveSlideIndex: number) => {
      if (this.selectedItem.value !== newActiveSlideIndex) {
        this.selectedItem.value = newActiveSlideIndex
      }
    })

    new ModelIncludeConstructor('selected', emits, this.selectedItem)
  }

  /**
   * Sets the active slide index and emits relevant events.
   *
   * Устанавливает индекс активного слайда и испускает соответствующие события.
   * @param index slide index / индекс слайда
   */
  readonly set = (index: number): void => {
    const totalCount = this.items.total.value
    const normalizedIndex = totalCount > 0
      ? Math.max(1, Math.min(totalCount, Math.floor(index)))
      : 1

    if (this.selectedItem.value !== normalizedIndex) {
      this.selectedItem.value = normalizedIndex
      this.emits?.('change', normalizedIndex)
      this.emits?.('update:selected', normalizedIndex)
      this.emits?.('update:modelSelected', normalizedIndex)
    }
  }

  /**
   * Returns the current active slide index.
   *
   * Возвращает текущий индекс активного слайда.
   * @returns active slide index / индекс активного слайда
   */
  readonly selected = (): number => this.items.active.value

  /**
   * Returns the total item count.
   *
   * Возвращает общее количество элементов.
   * @returns total item count / общее количество элементов
   */
  readonly count = (): number => this.items.total.value

  /**
   * Advances to the next slide.
   *
   * Переходит к следующему слайду.
   */
  readonly next = (): void => {
    if (this.selectedItem.value < this.items.total.value) {
      this.set(this.selectedItem.value + 1)
    }
  }

  /**
   * Moves to the previous slide.
   *
   * Переходит к предыдущему слайду.
   */
  readonly previous = (): void => {
    if (this.selectedItem.value > 1) {
      this.set(this.selectedItem.value - 1)
    }
  }

  /**
   * Handles click on an indicator/bullet.
   *
   * Обрабатывает клик по индикатору/буллету.
   * @param event native mouse event / нативное событие мыши
   * @param index slide index / индекс слайда
   */
  readonly onClickItem = (event: MouseEvent, index: number): void => {
    if (this.props.clickable !== false) {
      this.set(index)
      this.emits?.('click', event, index)
      this.emits?.('clickLite', index)
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
      [`${this.className}--hide`]: this.items.isHide
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
      role: 'tablist',
      'aria-label': 'Carousel pagination'
    }
  }
}
