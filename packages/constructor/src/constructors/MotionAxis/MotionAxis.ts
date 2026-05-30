import { onMounted, type Ref, type ToRefs, watch } from 'vue'
import { type ConstrClassObject, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { ModelInclude } from '../../classes/ModelInclude'

import { MotionAxisElement } from './MotionAxisElement'
import { MotionAxisGo } from './MotionAxisGo'
import { MotionAxisPrevious } from './MotionAxisPrevious'
import { MotionAxisSelected } from './MotionAxisSelected'
import { MotionAxisSlides } from './MotionAxisSlides'
import { MotionAxisStatus } from './MotionAxisStatus'
import { MotionAxisStyles } from './MotionAxisStyles'

import type { MotionAxisComponents, MotionAxisEmits, MotionAxisSlots } from './types'
import type { MotionAxisProps } from './props'

/**
 * Controller class for managing axis-based transition animations (MotionAxis).
 * It orchestrates DOM elements, slides, selection state, and style updates.
 *
 * Класс-контроллер для управления анимациями перехода по осям (MotionAxis).
 * Управляет DOM-элементами, слайдами, состоянием выбора и обновлением стилей.
 */
export class MotionAxis {
  /** Controller for managing individual slide DOM elements / Контроллер для управления DOM-элементами отдельных слайдов */
  readonly elementItem: MotionAxisElement
  /** Manager handling animation direction and transitions / Менеджер, обрабатывающий направление анимации и переходы */
  readonly go: MotionAxisGo
  /** Handler tracking the previously active slide / Обработчик, отслеживающий ранее активный слайд */
  readonly previous: MotionAxisPrevious
  /** Reactive state container for the currently selected slide / Реактивный контейнер состояния для текущего выбранного слайда */
  readonly selected: MotionAxisSelected
  /** Controller managing slides configuration and rendering / Контроллер, управляющий конфигурацией и рендерингом слайдов */
  readonly slides: MotionAxisSlides
  /** Tracker for active transitions and element statuses / Трекер активных переходов и статусов элементов */
  readonly status: MotionAxisStatus
  /** Generator and manager of CSS classes and styles for motion / Генератор и менеджер CSS-классов и стилей движения */
  readonly styles: MotionAxisStyles

  /**
   * Constructor for initializing the MotionAxis controller.
   *
   * Конструктор для инициализации контроллера MotionAxis.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.ModelIncludeConstructor class for working with model / класс для работы с моделью
   * @param constructors.MotionAxisElementConstructor class for working with elements / класс для работы с элементами
   * @param constructors.MotionAxisGoConstructor class for working with go / класс для работы с переходом
   * @param constructors.MotionAxisPreviousConstructor class for working with previous / класс для работы с предыдущим
   * @param constructors.MotionAxisSelectedConstructor class for working with selected / класс для работы с выбранным
   * @param constructors.MotionAxisSlidesConstructor class for working with slides / класс для работы со слайдами
   * @param constructors.MotionAxisStatusConstructor class for working with status / класс для работы со статусом
   * @param constructors.MotionAxisStylesConstructor class for working with styles / класс для работы со стилями
   */
  constructor(
    protected readonly props: MotionAxisProps,
    protected readonly refs: ToRefs<MotionAxisProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MotionAxisComponents, MotionAxisProps>,
    protected readonly slots?: MotionAxisSlots,
    protected readonly emits?: ConstrEmit<MotionAxisEmits>,
    constructors: {
      ModelIncludeConstructor?: typeof ModelInclude
      MotionAxisElementConstructor?: typeof MotionAxisElement
      MotionAxisGoConstructor?: typeof MotionAxisGo
      MotionAxisPreviousConstructor?: typeof MotionAxisPrevious
      MotionAxisSelectedConstructor?: typeof MotionAxisSelected
      MotionAxisSlidesConstructor?: typeof MotionAxisSlides
      MotionAxisStatusConstructor?: typeof MotionAxisStatus
      MotionAxisStylesConstructor?: typeof MotionAxisStyles
    } = {}
  ) {
    const {
      ModelIncludeConstructor = ModelInclude,
      MotionAxisElementConstructor = MotionAxisElement,
      MotionAxisGoConstructor = MotionAxisGo,
      MotionAxisPreviousConstructor = MotionAxisPrevious,
      MotionAxisSelectedConstructor = MotionAxisSelected,
      MotionAxisSlidesConstructor = MotionAxisSlides,
      MotionAxisStatusConstructor = MotionAxisStatus,
      MotionAxisStylesConstructor = MotionAxisStyles
    } = constructors

    this.selected = new MotionAxisSelectedConstructor(props)

    this.elementItem = new MotionAxisElementConstructor(
      this.element,
      this.className
    )

    this.styles = new MotionAxisStylesConstructor(
      this.element,
      this.className,
      this.selected
    )

    this.previous = new MotionAxisPreviousConstructor(this.styles)
    this.status = new MotionAxisStatusConstructor(
      props,
      this.elementItem,
      this.selected,
      this.previous,
      this.styles,
      this.emits
    )

    this.slides = new MotionAxisSlidesConstructor(this.status, slots)
    this.go = new MotionAxisGoConstructor(
      props,
      refs,
      element,
      this.slides,
      this.status
    )

    new ModelIncludeConstructor(
      'selected',
      this.emits,
      this.selected.item
    )

    onMounted(() => {
      watch(
        [refs.selected],
        this.updateSelected,
        { immediate: true }
      )
    })
  }

  /**
   * Returns a list of available CSS classes based on the motion configuration.
   *
   * Возвращает список доступных CSS-классов на основе конфигурации движения.
   * @returns map of class names to boolean activation / карта имён классов и булевых значений активации
   */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--axis--${this.go.axis.value}`]: true,
      [`${this.className}--direction--${this.go.direction.value}`]: true,
      [`${this.className}--start`]: this.elementItem.getStart() && Boolean(this.props.animationHeight),
      [`${this.className}--move`]: this.elementItem.getMove() && Boolean(this.props.animationHeight)
    }
  }

  /**
   * Checking the element for inclusion in the DOM by key.
   *
   * Проверка элемента на включение в DOM по ключу.
   * @param key element key / ключ элемента
   * @returns true if the element is included in the DOM / true если элемент включен в DOM
   */
  isInDom(key: string): boolean {
    return this.props.inDom
      || this.isInDomSlide(key)
      || this.previous.is(key)
      || this.status.isPreparation(key)
      || this.status.isActive(key)
  }

  /**
   * Checking the element for inclusion in the DOM by key in slide.
   *
   * Проверка элемента на включение в DOM по ключу в слайде.
   * @param key element key / ключ элемента
   * @returns true if the element is included in the DOM / true если элемент включен в DOM
   */
  isInDomSlide(key: string): boolean {
    return Boolean(
      this.props.inDomSlide
      && this.props.inDomSlide.indexOf(key) !== -1
    )
  }

  /**
   * Updating data based on its status.
   *
   * Обновление данных по его статусу.
   */
  protected readonly updateSelected = (): void => {
    const selected = this.props.selected

    if (
      !this.selected.is(selected)
    ) {
      if (this.props.direction === 'auto') {
        this.go.to(selected)
        return
      }

      this.status.set(selected)
    }
  }
}
