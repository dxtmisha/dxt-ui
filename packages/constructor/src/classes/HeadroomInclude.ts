import { computed, ref, watch, onMounted, onUnmounted, type Ref, type ToRefs } from 'vue'
import { EventItem, type ConstrEmit } from '@dxtmisha/functional'
import type { ElementOrWindow } from '@dxtmisha/functional-basic'

import type { HeadroomEmitsInclude, HeadroomExposeInclude, HeadroomPropsInclude } from '../types/headroomTypes'

/**
 * Headroom logic class managing sticky header position and scroll status calculations.
 * Handles scroll event binding, sticky state evaluation, transform CSS custom property calculation,
 * and disappears scroll mode offset updates.
 *
 * Класс логики Headroom, управляющий липким положением шапки и вычислениями состояния прокрутки.
 * Обрабатывает привязку событий прокрутки, вычисление состояния прилипания, расчет пользовательских CSS свойств трансформации
 * и обновление смещения в режиме прокрутки disappears.
 */
export class HeadroomInclude {
  /** Current scroll position in pixels / Текущая позиция прокрутки в пикселях */
  readonly value = ref<number>(0)

  /** Reactive state indicating whether scroll position is greater than zero / Реактивное состояние, указывающее, превышает ли прокрутка ноль */
  readonly isSticky = computed<boolean>(() => this.value.value > 0)

  /** Transformation offset in pixels capped at transform threshold / Смещение трансформации в пикселях, ограниченное порогом */
  readonly transformValue = computed<number>(() => Math.min(this.value.value, this.transformThreshold))

  /** Transformation percentage ratio from 0 to 1 / Процентное соотношение трансформации от 0 до 1 */
  readonly transformPercent = computed<number>(() => (
    this.transformThreshold > 0
      ? (1 / this.transformThreshold) * this.transformValue.value
      : 0
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
   * @param className class name / название класса
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: HeadroomPropsInclude,
    protected readonly refs: ToRefs<HeadroomPropsInclude>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string = 'headroom',
    protected readonly emits?: ConstrEmit<HeadroomEmitsInclude>
  ) {
    onMounted(() => {
      watch(
        this.isSticky,
        value => this.emits?.('headroomSticky', value)
      )

      watch(
        [
          this.refs.disappears,
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
   * Exported headroom values and methods.
   *
   * Экспонируемые значения и методы headroom.
   * @returns object with exposed properties and methods / объект с экспонируемыми свойствами и методами
   */
  get expose(): HeadroomExposeInclude {
    return {
      isSticky: this.isSticky,
      update: this.update
    }
  }

  /**
   * Recalculates scroll metrics and updates headroom states and element styles.
   *
   * Пересчитывает метрики прокрутки, обновляет состояния headroom и стили элемента.
   * @returns void
   */
  readonly update = (): void => {
    this.value.value = this.getScroll()

    this.onScroll()
      .updateData()
      .updateTransform()
      .updateDisappears()
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
      'headroomScroll',
      this.value.value,
      this.isSticky.value
    )

    return this
  }

  /**
   * Updates data-* attributes on target HTML element.
   *
   * Обновляет data-* атрибуты на целевом HTML элементе.
   * @returns this instance / текущий экземпляр
   */
  protected updateData(): this {
    const mainElement = this.element.value

    if (mainElement) {
      if (this.isSticky.value) {
        mainElement.dataset.status = 'sticky'
      } else {
        delete mainElement.dataset.status
      }

      if (this.transformThreshold > 0) {
        mainElement.dataset.transform = 'true'
      } else {
        delete mainElement.dataset.transform
      }
    }

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
      mainElement.style.setProperty(`--${this.className}-sys-scroll`, `${this.transformValue.value}px`)
      mainElement.style.setProperty(`--${this.className}-sys-percent`, `${this.transformPercent.value}`)
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
      && this.props.disappears
    ) {
      this.previousScrollPosition = this.value.value
      mainElement.style.top = `${this.getDisappearsOffset(mainElement)}px`
    }

    return this
  }

  /**
   * Toggles scroll listening and performs initial state calculation.
   *
   * Переключает прослушивание прокрутки и выполняет первоначальный расчет состояния.
   * @returns this instance / текущий экземпляр
   */
  protected toggle(): this {
    if (
      this.props.disappears
      || this.transformThreshold > 0
    ) {
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
      .start()

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
}
