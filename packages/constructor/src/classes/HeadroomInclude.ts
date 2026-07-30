import { computed, ref, watch, onMounted, onUnmounted, type Ref, type ToRefs, nextTick } from 'vue'
import { EventItem, getElementOrWindow, type ConstrEmit } from '@dxtmisha/functional'
import type { ElementOrWindow } from '@dxtmisha/functional-basic'

import type { HeadroomEmitsInclude, HeadroomEventItem, HeadroomExposeInclude, HeadroomPropsInclude } from '../types/headroomTypes'

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

  /** Disappears top offset in pixels / Верхнее смещение скрытия в пикселях */
  readonly disappearsValue = ref<number>(0)

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

  /** Saved previous scroll position in pixels / Сохраненное предыдущее значение прокрутки в пикселях */
  protected readonly valuePrevious = ref<number>(0)

  /** Difference between previous and current scroll positions in pixels / Разница между предыдущей и текущей позицией прокрутки в пикселях */
  protected readonly valueDifference = computed<number>(() => (
    this.valuePrevious.value - this.value.value
  ))

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
    onMounted(async () => {
      await nextTick()

      watch(
        this.isSticky,
        () => this.emits?.('headroomSticky', this.eventItem)
      )

      watch(
        [
          this.refs.disappears,
          this.refs.transformThreshold,
          this.refs.scrollElement
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
      getValues: () => this.eventItem,
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
    this.updateValue()
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
    return getElementOrWindow(this.props.scrollElement) ?? window
  }

  /**
   * Returns current headroom event data.
   *
   * Возвращает текущие данные события headroom.
   * @returns object with headroom event metrics / объект с данными события headroom
   */
  protected get eventItem(): HeadroomEventItem {
    return {
      value: this.value.value,
      disappearsValue: this.disappearsValue.value,
      isSticky: this.isSticky.value,
      transformThreshold: this.transformThreshold,
      transformValue: this.transformValue.value,
      transformPercent: this.transformPercent.value,
      valueDifference: this.valueDifference.value
    }
  }

  /**
   * Returns transform threshold value in pixels.
   *
   * Возвращает пороговое значение трансформации в пикселях.
   * @returns transform threshold in pixels / значение порога трансформации в пикселях
   */
  protected get transformThreshold(): number {
    return this.props.transformThreshold ?? 0
  }

  /**
   * Calculates top offset for disappears scroll mode.
   *
   * Вычисляет верхнее смещение для режима прокрутки disappears.
   * @returns calculated move offset in pixels / вычисленное значение смещения в пикселях
   */
  protected getDisappearsOffset(): number {
    const mainElement = this.element.value

    if (!mainElement) {
      return 0
    }

    const { height, top } = this.getElementRect()
    const currentScroll = this.value.value
    const transformThreshold = this.transformThreshold
    const elementHeightOffset = (height + 64) * -1
    const moveOffset = top + this.valueDifference.value

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
   * Returns top position relative to scroll element and height of element.
   *
   * Возвращает верхнюю позицию относительно элемента прокрутки и высоту элемента.
   * @returns object containing element height and top position / объект, содержащий высоту и верхнюю позицию элемента
   */
  protected getElementRect(): { height: number, top: number } {
    const mainElement = this.element.value

    if (mainElement) {
      const boundingClientRect = mainElement.getBoundingClientRect()

      return {
        height: boundingClientRect.height,
        top: boundingClientRect.top - this.getScrollElementTop()
      }
    }

    return {
      height: 0,
      top: 0
    }
  }

  /**
   * Returns top position of scroll element.
   *
   * Возвращает верхнюю позицию элемента прокрутки.
   * @returns top position of scroll element in pixels / верхняя позиция элемента прокрутки в пикселях
   */
  protected getScrollElementTop(): number {
    const scrollElement = this.eventElement

    if (
      scrollElement
      && scrollElement !== window
      && 'getBoundingClientRect' in scrollElement
    ) {
      return scrollElement.getBoundingClientRect().top
    }

    return 0
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
   * Triggers scroll event emit.
   *
   * Вызывает генерацию события прокрутки.
   * @returns this instance / текущий экземпляр
   */
  protected readonly onScroll = (): this => {
    this.update()

    this.emits?.(
      'headroomScroll',
      this.eventItem
    )

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
      this.onScroll
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
      this.updateValue()
        .update()

      this.start()
    } else {
      this.stop()
    }

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
        mainElement.dataset.headroom = 'sticky'
      } else {
        mainElement.dataset.headroom = 'none'
      }

      if (this.valueDifference.value < 0) {
        mainElement.dataset.headroomDirection = 'down'
      } else if (this.valueDifference.value > 0) {
        mainElement.dataset.headroomDirection = 'up'
      } else {
        mainElement.dataset.headroomDirection = 'none'
      }

      if (this.transformThreshold > 0) {
        mainElement.dataset.headroomTransform = String(this.transformThreshold)
      } else {
        delete mainElement.dataset.headroomTransform
      }
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
      this.disappearsValue.value = this.getDisappearsOffset()

      mainElement.style.setProperty(
        `--${this.className}-sys-top`,
        `${this.disappearsValue.value}px`
      )
    } else {
      this.disappearsValue.value = 0
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

    if (mainElement) {
      mainElement.style.setProperty(`--${this.className}-sys-threshold`, `${this.transformThreshold}px`)
      mainElement.style.setProperty(`--${this.className}-sys-value`, `${this.transformValue.value}px`)
      mainElement.style.setProperty(`--${this.className}-sys-percent`, `${this.transformPercent.value}`)
      mainElement.style.setProperty(`--${this.className}-sys-difference`, `${this.valueDifference.value}px`)
    }

    return this
  }

  /**
   * Updates previous and current scroll position values.
   *
   * Обновляет значения предыдущей и текущей позиции прокрутки.
   * @returns this instance / текущий экземпляр
   */
  protected updateValue(): this {
    this.valuePrevious.value = this.value.value
    this.value.value = this.getScroll()
    this.getElementRect()

    return this
  }
}
