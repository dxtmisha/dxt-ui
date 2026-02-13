import { computed, nextTick, onMounted, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, goScrollTo } from '@dxtmisha/functional'

import { ScrollToXInclude } from '../../classes/ScrollToXInclude'

import type { HorizontalScrollControlItem } from './basicTypes'
import type {
  HorizontalScrollComponents,
  HorizontalScrollEmits,
  HorizontalScrollSlots
} from './types'
import type { HorizontalScrollProps } from './props'

/**
 * HorizontalScroll
 */
export class HorizontalScroll {
  readonly scroll: ScrollToXInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.ScrollToXIncludeConstructor class for working with scroll/ класс для работы со скроллом
   */
  constructor(
    protected readonly props: HorizontalScrollProps,
    protected readonly refs: ToRefs<HorizontalScrollProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<HorizontalScrollComponents, HorizontalScrollProps>,
    protected readonly slots?: HorizontalScrollSlots,
    protected readonly emits?: ConstrEmit<HorizontalScrollEmits>,
    constructors?: {
      ScrollToXIncludeConstructor?: typeof ScrollToXInclude
    }
  ) {
    const {
      ScrollToXIncludeConstructor = ScrollToXInclude
    } = constructors ?? {}

    this.scroll = new ScrollToXIncludeConstructor(element)

    onMounted(async () => {
      await nextTick()
      requestAnimationFrame(() => this.toSelected())
    })
  }

  /**
   * Returns bindings for the element.
   *
   * Возвращает привязки для элемента.
   */
  readonly binds = computed(() => {
    return {
      ref: this.element,
      ...this.scroll.binds.value
    }
  })

  /**
   * Exposed properties and methods.
   *
   * Открытые свойства и методы.
   */
  readonly expose = {
    toSelected: () => this.toSelected()
  }

  /** Returns data for managing slot data/ Возвращает данные для управления данными слотами */
  readonly slotData = computed<HorizontalScrollControlItem>(() => {
    return {
      classItem: `${this.className}__item`,
      classItemSelected: `${this.className}__item--selected`,
      binds: {
        class: `${this.className}__item`
      }
    }
  })

  /**
   * Returns the selected element.
   *
   * Возвращает выбранный элемент.
   */
  protected getItemSelected(): HTMLElement | undefined {
    return this.element.value?.querySelector<HTMLElement>(
      `.${this.slotData.value.classItemSelected}`
    ) ?? undefined
  }

  /**
   * Scrolls to the selected element.
   *
   * Прокручивает к выбранному элементу.
   */
  protected toSelected = () => {
    const item = this.getItemSelected()

    if (
      this.element.value
      && item
    ) {
      goScrollTo(
        this.element.value,
        item
      )
    }
  }
}
