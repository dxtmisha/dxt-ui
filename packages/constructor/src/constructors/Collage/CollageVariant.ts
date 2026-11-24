// ai-none

import { watch, type WatchStopHandle } from 'vue'
import {
  DesignLifecycleAbstract,
  EventItem,
  isDomRuntime
} from '@dxtmisha/functional'

import type { CollageElement } from './CollageElement'
import type { CollageGrow } from './CollageGrow'
import type { CollageMasonryHorizontal } from './CollageMasonryHorizontal'
import type { CollageMasonryVertical } from './CollageMasonryVertical'
import type { CollageWoven } from './CollageWoven'

import type { CollageProps } from './props'

/** Debounce delay in milliseconds for resize recalculation / Задержка дебаунса в миллисекундах для пересчета макета */
export const COLLAGE_RESIZE_DEBOUNCE_MS = 320

/**
 * Class managing dynamic layout modes, resize calculations, and coordinate synchronization for Collage.
 *
 * Класс, управляющий динамическими режимами макета, расчетами при изменении размера и синхронизацией координат для Collage.
 */
export class CollageVariant extends DesignLifecycleAbstract {
  /**
   * Checks if the current collage variant requires dynamic resize layout management.
   *
   * Проверяет, требует ли текущий вариант коллажа динамического управления перерасчетом макета.
   * @param props component properties / свойства компонента
   * @returns true if dynamic variant mode is active / true, если активен динамический режим макета
   */
  static is(props?: Readonly<CollageProps>): boolean {
    return props?.variant === 'woven'
      || props?.variant === 'masonryHorizontal'
      || props?.variant === 'masonryVertical'
  }

  /** Timeout identifier for debounced layout updates / Идентификатор таймера для отложенных обновлений макета */
  protected timeoutResize?: ReturnType<typeof setTimeout>

  /** Container element resize event listener controller / Контроллер слушателя событий изменения размера элемента контейнера */
  protected eventResize?: EventItem<HTMLElement, Event>

  /** Active reactive property watcher stop handle / Функция остановки активного наблюдателя реактивных свойств */
  protected watchStop?: WatchStopHandle

  /**
   * Constructor for CollageVariant.
   *
   * Конструктор для CollageVariant.
   * @param props input component properties / входные свойства компонента
   * @param elementItem getter returning container DOM elements manager / геттер, возвращающий менеджер DOM-элементов контейнера
   * @param grow getter returning item grow factors manager / геттер, возвращающий менеджер коэффициентов роста элементов
   * @param masonryHorizontal getter returning horizontal masonry layout manager / геттер, возвращающий менеджер макета горизонтальной кладки
   * @param masonryVertical getter returning vertical masonry layout manager / геттер, возвращающий менеджер макета вертикальной кладки
   * @param woven getter returning woven variant layout manager / геттер, возвращающий менеджер макета варианта woven
   */
  constructor(
    protected readonly props: Readonly<CollageProps>,
    protected readonly elementItem: () => CollageElement,
    protected readonly grow: () => CollageGrow | undefined,
    protected readonly masonryHorizontal: () => CollageMasonryHorizontal | undefined,
    protected readonly masonryVertical: () => CollageMasonryVertical | undefined,
    protected readonly woven: () => CollageWoven | undefined
  ) {
    super()
  }

  /**
   * Updates collage layout and initializes resize watchers if necessary.
   *
   * Обновляет макет коллажа и инициализирует наблюдатели изменения размера при необходимости.
   */
  readonly update = (): void => {
    const elementItem = this.elementItem()

    if (
      elementItem.is()
      && this.isResize()
    ) {
      const element = elementItem.getElement().value

      if (element) {
        if (
          this.eventResize
          && this.eventResize.getElement() !== element
        ) {
          this.eventResize.stop()
          this.eventResize = undefined
        }

        if (!this.eventResize) {
          this.eventResize = new EventItem(element, ['resize'], this.updateByTime)
          this.eventResize.start()
        }
      }

      this.resize()
    } else {
      this.stopEvents()
    }
  }

  /**
   * Debounced layout recalculation triggered by container resize.
   *
   * Отложенный перерасчет макета, вызываемый при изменении размера контейнера.
   */
  readonly updateByTime = (): void => {
    if (
      isDomRuntime()
      && this.elementItem().isResize()
    ) {
      this.clearTimeoutResize()
      this.timeoutResize = setTimeout(this.resize, COLLAGE_RESIZE_DEBOUNCE_MS)
    }
  }

  /**
   * Initializes reactive watchers and runs initial layout calculation on mount.
   *
   * Инициализирует реактивные наблюдатели и запускает первичный расчёт макета при монтировании.
   */
  override readonly onMounted = (): void => {
    this.stopWatch()

    this.watchStop = watch(
      [
        () => this.props.variant,
        () => this.props.columns,
        () => this.props.cellSize,
        () => this.props.images
      ],
      this.update
    )

    this.update()
  }

  /**
   * Stops watchers, resize observers, timers, and layout effects on unmount.
   *
   * Останавливает наблюдатели, слушатели изменения размера, таймеры и эффекты макета при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch()
    this.stopEvents()
  }

  /**
   * Checks if the current variant mode requires dynamic resize recalculation.
   *
   * Проверяет, требует ли текущий вариант динамического перерасчета при изменении размера.
   * @returns true if variant requires resize calculation / true, если вариант требует перерасчета
   */
  protected isResize(): boolean {
    return CollageVariant.is(this.props)
  }

  /**
   * Clears any pending debounced resize timer.
   *
   * Очищает активный таймер отложенного перерасчета макета.
   */
  protected clearTimeoutResize(): void {
    if (this.timeoutResize !== undefined) {
      clearTimeout(this.timeoutResize)
      this.timeoutResize = undefined
    }
  }

  /**
   * Dispatches resize recalculation based on current variant mode.
   *
   * Выполняет перерасчет макета в зависимости от текущего варианта.
   */
  protected readonly resize = (): void => {
    this.clearTimeoutResize()
    this.woven()?.reset()
    this.masonryHorizontal()?.cancel()
    this.masonryVertical()?.cancel()
    this.grow()?.resetGrow()

    switch (this.props.variant) {
      case 'woven':
        this.woven()?.resize()
        break
      case 'masonryHorizontal':
        this.masonryHorizontal()?.resize()
        break
      case 'masonryVertical':
        this.masonryVertical()?.resize()
        break
    }
  }

  /**
   * Stops event listeners, clears active timers, and resets variant layout modifications.
   *
   * Останавливает слушатели событий, очищает активные таймеры и сбрасывает модификации макета вариантов.
   */
  protected stopEvents(): void {
    if (this.eventResize) {
      this.eventResize.stop()
      this.eventResize = undefined
    }

    this.clearTimeoutResize()
    this.woven()?.reset()
    this.masonryHorizontal()?.cancel()
    this.masonryVertical()?.cancel()
    this.grow()?.resetGrow()
  }

  /**
   * Stops the active reactive property watcher if registered.
   *
   * Останавливает активный наблюдатель реактивных свойств, если он зарегистрирован.
   */
  protected stopWatch(): void {
    if (this.watchStop) {
      this.watchStop()
      this.watchStop = undefined
    }
  }
}
