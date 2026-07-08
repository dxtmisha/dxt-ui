import { type Ref, type ToRefs, onUnmounted, watch, watchEffect } from 'vue'
import { type ConstrEmit, type DesignComp, EventRef } from '@dxtmisha/functional'
import { getElement } from '@dxtmisha/functional-basic'

import type { ScrollStickyComponents, ScrollStickyEmits, ScrollStickySlots } from './types'
import type { ScrollStickyProps } from './props'

/**
 * ScrollSticky class coordinates sticky horizontal scrollbar synchronization. /
 * Класс ScrollSticky координирует липкую синхронизацию горизонтальной прокрутки.
 */
export class ScrollSticky {
  protected eventTarget?: EventRef<HTMLDivElement, Event>
  protected eventScroll?: EventRef<HTMLDivElement, Event>

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
    protected readonly props: ScrollStickyProps,
    protected readonly refs: ToRefs<ScrollStickyProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ScrollStickyComponents, ScrollStickyProps>,
    protected readonly slots?: ScrollStickySlots,
    protected readonly emits?: ConstrEmit<ScrollStickyEmits>
  ) {
    watchEffect(() => {
      if (this.props.target) {
        this.getEventTarget().start()
        this.getEventScroll().start()
      } else {
        this.stop()
      }
    })

    watch(
      this.element,
      () => this.getEventScroll().toggle(Boolean(this.element.value))
    )

    onUnmounted(() => {
      this.stop()
    })
  }

  /**
   * Stops the scroll synchronization events. /
   * Останавливает синхронизацию событий прокрутки.
   */
  stop(): void {
    if (this.eventTarget) {
      this.getEventTarget().stop()
    }

    if (this.eventScroll) {
      this.getEventScroll().stop()
    }
  }

  /**
   * Returns the resolved target scrollable element. /
   * Возвращает разрешенный целевой прокручиваемый элемент.
   */
  protected getTargetElement(): HTMLDivElement | undefined {
    return getElement(this.props.target) as HTMLDivElement | undefined
  }

  /**
   * Returns the resolved header scrollable element. /
   * Возвращает разрешенный прокручиваемый элемент шапки.
   */
  protected getHeaderElement(): HTMLDivElement | undefined {
    return getElement(this.props.header) as HTMLDivElement | undefined
  }

  /**
   * Returns an object for working with target element scroll sync events. /
   * Возвращает объект для работы с событиями синхронизации прокрутки целевого элемента.
   */
  protected getEventTarget(): EventRef<HTMLDivElement, Event> {
    if (!this.eventTarget) {
      this.eventTarget = new EventRef(
        this.refs.target as any,
        undefined,
        ['scroll-sync'],
        this.onTargetScroll
      )
    }

    return this.eventTarget
  }

  /**
   * Returns an object for working with custom scrollbar scroll sync events. /
   * Возвращает объект для работы с событиями синхронизации кастомной полосы прокрутки.
   */
  protected getEventScroll(): EventRef<HTMLDivElement, Event> {
    if (!this.eventScroll) {
      this.eventScroll = new EventRef(
        this.element as any,
        undefined,
        ['scroll-sync'],
        this.onCustomScroll
      )
    }

    return this.eventScroll
  }

  /**
   * Listener for target element scroll. /
   * Метод прослушивания прокрутки целевого элемента.
   */
  protected readonly onTargetScroll = () => {
    const target = this.getTargetElement()
    const header = this.getHeaderElement()
    const scroll = this.element.value

    if (target) {
      if (header) {
        header.scrollLeft = target.scrollLeft
      }
      if (scroll) {
        scroll.scrollLeft = target.scrollLeft
      }
    }
  }

  /**
   * Listener for custom scrollbar scroll. /
   * Метод прослушивания прокрутки кастомной полосы прокрутки.
   */
  protected readonly onCustomScroll = () => {
    const target = this.getTargetElement()
    const header = this.getHeaderElement()
    const scroll = this.element.value

    if (scroll) {
      if (header) {
        header.scrollLeft = scroll.scrollLeft
      }
      if (target) {
        target.scrollLeft = scroll.scrollLeft
      }
    }
  }
}
