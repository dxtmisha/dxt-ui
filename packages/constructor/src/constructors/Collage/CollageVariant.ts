import { EventItem } from '@dxtmisha/functional'
import {
  type ToRefs,
  onMounted,
  onUnmounted,
  provide,
  watch
} from 'vue'

import type { CollageElement } from './CollageElement'
import type { CollageGrow } from './CollageGrow'
import type { CollageMasonryHorizontal } from './CollageMasonryHorizontal'
import type { CollageMasonryVertical } from './CollageMasonryVertical'
import type { CollageWoven } from './CollageWoven'

import {
  COLLAGE_NAME_UPDATE,
  type CollageUpdate
} from './basicTypes'
import type { CollageProps } from './props'

/**
 * Class managing dynamic layout modes, resize calculations, and coordinate synchronization for Collage.
 *
 * Класс, управляющий динамическими режимами макета, расчетами при изменении размера и синхронизацией координат для Collage.
 */
export class CollageVariant {
  /** Timeout identifier for debounced layout updates / Идентификатор таймера для отложенных обновлений макета */
  protected timeoutResize?: ReturnType<typeof setTimeout>

  /** Container element resize event listener controller / Контроллер слушателя событий изменения размера элемента контейнера */
  protected eventResize?: EventItem<HTMLElement, Event>

  /**
   * Constructor for CollageVariant.
   *
   * Конструктор для CollageVariant.
   * @param props input component properties / входные свойства компонента
   * @param refs input reactive properties / входные реактивные свойства
   * @param elementItem manager for container DOM elements / менеджер DOM-элементов контейнера
   * @param woven manager for woven variant layout / менеджер макета варианта woven
   * @param masonryHorizontal manager for horizontal masonry variant layout / менеджер макета варианта горизонтальной кладки
   * @param masonryVertical manager for vertical masonry variant layout / менеджер макета варианта вертикальной кладки
   * @param grow manager for item grow factors and CSS properties / менеджер коэффициентов роста элементов и CSS-свойств
   */
  constructor(
    protected readonly props: CollageProps,
    protected readonly refs: ToRefs<CollageProps>,
    protected readonly elementItem: CollageElement,
    protected readonly woven: CollageWoven,
    protected readonly masonryHorizontal: CollageMasonryHorizontal,
    protected readonly masonryVertical: CollageMasonryVertical,
    protected readonly grow: CollageGrow
  ) {
    provide<CollageUpdate>(COLLAGE_NAME_UPDATE, this.update)

    onMounted(() => {
      watch(
        [
          this.refs.variant,
          this.refs.columns,
          this.refs.cellSize,
          this.refs.images
        ],
        this.update,
        { immediate: true }
      )
    })

    onUnmounted(() => {
      this.stopEvents()
    })
  }

  /**
   * Updates collage layout and initializes resize watchers if necessary.
   *
   * Обновляет макет коллажа и инициализирует наблюдатели изменения размера при необходимости.
   */
  readonly update = (): void => {
    if (
      this.elementItem.is()
      && this.isResize()
    ) {
      if (!this.eventResize) {
        const element = this.elementItem.getElement().value

        if (element) {
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
   * Debounced layout recalculation triggered by window resize.
   *
   * Отложенный перерасчет макета, вызываемый при изменении размера окна.
   */
  readonly updateByTime = (): void => {
    if (this.elementItem.isResize()) {
      if (this.timeoutResize !== undefined) {
        clearTimeout(this.timeoutResize)
      }

      this.timeoutResize = setTimeout(this.resize, 320)
    }
  }

  /**
   * Checks if the current variant mode requires dynamic resize recalculation. /
   * Проверяет, требует ли текущий вариант динамического перерасчета при изменении размера.
   * @returns true if variant requires resize calculation / true, если вариант требует перерасчета
   */
  protected isResize(): boolean {
    return this.props.variant === 'woven'
      || this.props.variant === 'masonryHorizontal'
      || this.props.variant === 'masonryVertical'
  }

  /**
   * Dispatches resize recalculation based on current variant mode.
   *
   * Выполняет перерасчет макета в зависимости от текущего варианта.
   */
  protected readonly resize = (): void => {
    this.woven.reset()
    this.grow.resetGrow()

    switch (this.props.variant) {
      case 'woven':
        this.woven.resize()
        break
      case 'masonryHorizontal':
        this.masonryHorizontal.resize()
        break
      case 'masonryVertical':
        this.masonryVertical.resize()
        break
    }
  }

  /**
   * Stops event listeners and clears active timers.
   *
   * Останавливает слушатели событий и очищает активные таймеры.
   */
  protected stopEvents(): void {
    if (this.eventResize) {
      this.eventResize.stop()
      this.eventResize = undefined
    }

    if (this.timeoutResize !== undefined) {
      clearTimeout(this.timeoutResize)
      this.timeoutResize = undefined
    }

    this.woven.reset()
    this.grow.resetGrow()
  }
}
