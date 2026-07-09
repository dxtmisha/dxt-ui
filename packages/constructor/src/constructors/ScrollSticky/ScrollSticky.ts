import { type Ref, type ToRefs, onUnmounted, watch, ref, onMounted } from 'vue'
import { type ConstrEmit, type DesignComp, EventRef } from '@dxtmisha/functional'

import type {
  ScrollStickyComponents,
  ScrollStickyEmits,
  ScrollStickySlots
} from './types'
import type { ScrollStickyProps } from './props'

/**
 * ScrollSticky class coordinates sticky horizontal scrollbar synchronization. /
 * Класс ScrollSticky координирует липкую синхронизацию горизонтальной прокрутки.
 */
export class ScrollSticky {
  readonly scrollElement = ref<HTMLDivElement>()

  protected eventMain?: EventRef<HTMLDivElement, Event>
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
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ScrollStickyComponents, ScrollStickyProps>,
    protected readonly slots?: ScrollStickySlots,
    protected readonly emits?: ConstrEmit<ScrollStickyEmits>
  ) {
    onMounted(() => {
      watch(
        [
          this.element,
          this.scrollElement
        ],
        () => {
          this.on()
          this.onMain()
        },
        { immediate: true }
      )
    })

    onUnmounted(() => this.stop())
  }

  protected getEventTypes(): string[] {
    return [
      'scroll-sync',
      'resize'
    ]
  }

  protected getEvent(): EventRef<HTMLDivElement, Event> {
    if (!this.eventMain) {
      this.eventMain = new EventRef(
        this.element,
        undefined,
        this.getEventTypes(),
        this.onMain
      )
    }

    return this.eventMain
  }

  protected getEventScroll(): EventRef<HTMLDivElement, Event> {
    if (!this.eventScroll) {
      this.eventScroll = new EventRef(
        this.scrollElement,
        undefined,
        this.getEventTypes(),
        this.onScroll
      )
    }

    return this.eventScroll
  }

  protected checkScroll(
    callback?: (
      element: HTMLDivElement,
      scrollElement: HTMLDivElement
    ) => void
  ): boolean {
    const element = this.element.value
    const scrollElement = this.scrollElement.value

    if (
      element
      && scrollElement
    ) {
      callback?.(element, scrollElement)
      return true
    }

    return false
  }

  protected start(): void {
    this.getEvent().start()
    this.getEventScroll().start()
  }

  protected stop(): void {
    if (this.eventMain) {
      this.eventMain.stop()
    }

    if (this.eventScroll) {
      this.eventScroll.stop()
    }
  }

  protected readonly onMain = () => {
    this.checkScroll((element, scrollElement) => {
      scrollElement.scrollLeft = element.scrollLeft
    })
  }

  protected readonly onScroll = () => {
    this.checkScroll((element, scrollElement) => {
      element.scrollLeft = scrollElement.scrollLeft
    })
  }

  protected on = () => {
    if (this.checkScroll()) {
      this.start()
    } else {
      this.stop()
    }
  }
}
