import { computed, ref, watch, onMounted, onUnmounted, type Ref, type ToRefs } from 'vue'
import { EventItem, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'
import type { ElementOrWindow } from '@dxtmisha/functional-basic'

import type { HeadroomComponents, HeadroomEmits, HeadroomExpose, HeadroomSlots } from './types'
import type { HeadroomProps } from './props'

/**
 * Headroom logic class managing sticky header position and scroll status calculations.
 * Handles scroll event binding, sticky state evaluation, transform CSS custom property calculation,
 * and disappears scroll mode offset updates.
 *
 * Класс логики Headroom, управляющий липким положением шапки и вычислениями состояния прокрутки.
 * Обрабатывает привязку событий прокрутки, вычисление состояния прилипания, расчет пользовательских CSS свойств трансформации
 * и обновление смещения в режиме прокрутки disappears.
 */
export class Headroom {
  /** Current scroll position in pixels / Текущая позиция прокрутки в пикселях */
  readonly value = ref<number>(0)

  /** Reactive state indicating whether scroll position is greater than zero / Реактивное состояние, указывающее, превышает ли прокрутка ноль */
  readonly isSticky = computed<boolean>(() => this.value.value > 0)

  /** Transformation offset in pixels capped at transform threshold / Смещение трансформации в пикселях, ограниченное порогом */
  readonly transformValue = computed<number>(() => (
    this.value.value <= this.transformThreshold
      ? this.value.value
      : this.transformThreshold
  ))

  /** Saved previous scroll position for disappears offset calculations / Сохраненное предыдущее значение прокрутки */
  protected previousScrollPosition?: number

  /** Scroll event listener instance / Экземпляр слушателя событий прокрутки */
  protected eventScroll?: EventItem<ElementOrWindow, Event>

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: HeadroomProps,
    protected readonly refs: ToRefs<HeadroomProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<HeadroomComponents, HeadroomProps>,
    protected readonly slots?: HeadroomSlots,
    protected readonly emits?: ConstrEmit<HeadroomEmits>
  ) {
    onMounted(() => {
      watch(
        this.isSticky,
        value => this.emits?.('sticky', value)
      )

      watch(
        [
          this.refs.scroll,
          this.refs.transform,
          this.refs.element
        ],
        () => this.toggle(),
        { immediate: true }
      )
    })

    onUnmounted(() => this.stop())
  }

  /**
   * Returns target element or window for scroll listening.
   *
   * Возвращает целевой элемент или окно для прослушивания прокрутки.
   * @returns scroll target element or window / элемент или окно для прокрутки
   */
  protected get eventElement(): ElementOrWindow {
    return this.props.element ?? window
  }

  /**
   * Returns transform threshold value in pixels.
   *
   * Возвращает пороговое значение трансформации в пикселях.
   * @returns transform threshold in pixels / значение порога трансформации в пикселях
   */
  protected get transformThreshold(): number {
    return this.props.transform ?? 0
  }

  /**
   * Returns current scroll position of event target element or window.
   *
   * Возвращает текущую позицию прокрутки целевого элемента или окна.
   * @returns current scroll position in pixels / текущее значение прокрутки в пикселях
   */
  protected getScroll(): number {
    const targetElement = this.eventElement
    return 'scrollY' in targetElement ? targetElement.scrollY : targetElement.scrollTop
  }

  /**
   * Calculates top offset for disappears scroll mode.
   *
   * Вычисляет верхнее смещение для режима прокрутки disappears.
   * @param mainElement target HTML element / целевой HTML элемент
   * @returns calculated move offset in pixels / вычисленное значение смещения в пикселях
   */
  protected getDisappearsOffset(mainElement: HTMLElement): number {
    const currentScroll = this.value.value
    const transformThreshold = this.transformThreshold
    const boundingClientRect = mainElement.getBoundingClientRect()
    const elementHeightOffset = (boundingClientRect.height + 64) * -1
    const moveOffset = boundingClientRect.top + (this.previousScrollPosition ?? currentScroll) - currentScroll

    if (
      moveOffset > 0
      || (transformThreshold > 0 && transformThreshold !== this.transformValue.value)
    ) {
      return 0
    }

    if (moveOffset < (currentScroll * -1)) {
      return currentScroll * -1
    }

    if (moveOffset < elementHeightOffset) {
      return elementHeightOffset
    }

    return moveOffset
  }

  /**
   * Triggers scroll event emit.
   *
   * Вызывает генерацию события прокрутки.
   * @returns this instance / текущий экземпляр
   */
  protected onScroll(): this {
    this.emits?.(
      'scroll',
      this.value.value,
      this.isSticky.value
    )

    return this
  }

  /**
   * Updates element transform CSS custom properties.
   *
   * Обновляет пользовательские свойства CSS трансформации элемента.
   * @returns this instance / текущий экземпляр
   */
  protected updateTransform(): this {
    const mainElement = this.element.value
    const transformThreshold = this.transformThreshold

    if (
      mainElement
      && transformThreshold > 0
    ) {
      const percentValue = (1 / transformThreshold) * this.transformValue.value

      mainElement.style.setProperty(`--${this.className}-sys-scroll`, `${this.transformValue.value}px`)
      mainElement.style.setProperty(`--${this.className}-sys-percent`, `${percentValue}`)
      mainElement.style.setProperty(`--${this.className}-sys-transform`, `${transformThreshold}px`)
    }

    return this
  }

  /**
   * Updates top offset and element CSS variables for disappears scroll mode.
   *
   * Обновляет верхнее смещение и пользовательские CSS свойства элемента для режима прокрутки disappears.
   * @returns this instance / текущий экземпляр
   */
  protected updateDisappears(): this {
    const mainElement = this.element.value

    if (
      mainElement
      && this.props.scroll === 'disappears'
    ) {
      this.previousScrollPosition = this.value.value
      mainElement.style.setProperty(
        `--${this.className}-sys-top`,
        `${this.getDisappearsOffset(mainElement)}px`
      )
    }

    return this
  }

  /**
   * Recalculates scroll metrics and updates headroom states and element styles.
   *
   * Пересчитывает метрики прокрутки, обновляет состояния headroom и стили элемента.
   * @returns this instance / текущий экземпляр
   */
  readonly update = (): this => {
    this.value.value = this.getScroll()

    this.onScroll()
    this.updateTransform()
    this.updateDisappears()

    return this
  }

  /**
   * Toggles scroll listening and performs initial state calculation.
   *
   * Переключает прослушивание прокрутки и выполняет первоначальный расчет состояния.
   * @returns this instance / текущий экземпляр
   */
  protected toggle(): this {
    const isScrollActive = this.props.scroll !== 'top' || this.transformThreshold > 0

    if (isScrollActive) {
      this.update()
      this.start()
    } else {
      this.stop()
    }

    return this
  }

  /**
   * Starts scroll event listener.
   *
   * Запускает слушатель событий прокрутки.
   * @returns this instance / текущий экземпляр
   */
  protected start(): this {
    const targetElement = this.eventElement

    if (this.eventScroll) {
      this.eventScroll.stop()
    }

    this.eventScroll = new EventItem(
      targetElement,
      'scroll',
      this.update
    )
    this.eventScroll.start()

    return this
  }

  /**
   * Stops scroll event listener.
   *
   * Останавливает слушатель событий прокрутки.
   * @returns this instance / текущий экземпляр
   */
  protected stop(): this {
    this.eventScroll?.stop()
    this.eventScroll = undefined

    return this
  }

  /**
   * Returns dynamic BEM CSS classes.
   *
   * Возвращает динамические CSS классы BEM.
   * @returns object with BEM class mappings / объект с сопоставлением классов BEM
   */
  get classes(): Record<string, boolean | undefined> {
    return {
      [`${this.className}--status-sticky`]: this.isSticky.value,
      [`${this.className}--scroll-${this.props.scroll}`]: Boolean(this.props.scroll),
      [`${this.className}--option-transform`]: this.transformThreshold > 0
    }
  }

  /**
   * Returns public expose interface for component.
   *
   * Возвращает публичный интерфейс экспорта для компонента.
   * @returns component expose state / состояние экспорта компонента
   */
  get expose(): HeadroomExpose {
    return {
      isSticky: () => this.isSticky.value,
      update: this.update
    }
  }
}
