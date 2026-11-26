import {
  type Ref,
  getCurrentInstance,
  nextTick,
  onUpdated,
  ref
} from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  ScrollbarWidthRef
} from '@dxtmisha/functional'

import { ScrollStickyScroll } from './ScrollStickyScroll'

import type {
  ScrollStickyComponents,
  ScrollStickyEmits,
  ScrollStickySlots
} from './types'
import type { ScrollStickyProps } from './props'

/** ScrollSticky dependency constructors type / Тип конструкторов зависимостей ScrollSticky */
export type ScrollStickyConstructors = {
  /** Scroll synchronization lifecycle manager constructor / Конструктор менеджера жизненного цикла синхронизации прокрутки */
  scroll: typeof ScrollStickyScroll
  /** Scrollbar width measurement constructor / Конструктор измерения ширины полосы прокрутки */
  width: typeof ScrollbarWidthRef
}

/**
 * ScrollSticky orchestrator class coordinating sticky horizontal scrollbar synchronization,
 * resize recalculation, and lazy lifecycle dependency management.
 *
 * Класс-оркестратор ScrollSticky, координирующий липкую синхронизацию горизонтальной прокрутки,
 * пересчёт размеров и ленивое управление зависимостями жизненного цикла.
 */
export class ScrollSticky extends DesignLogicAbstract<
  HTMLDivElement,
  ScrollStickyComponents,
  ScrollStickyEmits,
  ScrollStickySlots,
  ScrollStickyProps,
  ScrollStickyConstructors
> {
  /** Scroll element reference / Ссылка на элемент прокрутки */
  readonly scrollElement = ref<HTMLDivElement>()

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ScrollStickyConstructors> = {
    scroll: {
      item: ScrollStickyScroll,
      conditions: () => this.props.visible !== false,
      canCreate: () => this.props.visible !== false,
      parameters: () => [
        this.props,
        this.element,
        this.naming,
        () => this.i('width'),
        this.scrollElement
      ]
    },
    width: {
      item: ScrollbarWidthRef
    }
  }

  /**
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<ScrollStickyProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<ScrollStickyComponents, ScrollStickyProps>,
    slots?: ScrollStickySlots,
    emits?: ConstrEmit<ScrollStickyEmits>,
    constructors?: Partial<ScrollStickyConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    if (getCurrentInstance()) {
      onUpdated(async () => {
        await nextTick()

        if (this.isMounted.value) {
          this.onResize()
        }
      })
    }
  }

  /**
   * Recalculates the scroll width via the active scroll coordinator.
   *
   * Пересчитывает ширину прокрутки через активный координатор прокрутки.
   */
  readonly onResize = (): void => {
    this.callInstance('scroll', item => item.onResize())
  }
}
