import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import { CarouselPagination } from './CarouselPagination'
import {
  type CarouselPaginationFractionBinds,
  type CarouselPaginationItem,
  type CarouselPaginationItemBinds,
  type CarouselPaginationProgressBinds
} from './basicTypes'
import { type CarouselPaginationProps } from './props'
import {
  type CarouselPaginationClasses,
  type CarouselPaginationComponents,
  type CarouselPaginationEmits,
  type CarouselPaginationExpose,
  type CarouselPaginationSlots
} from './types'

/**
 * CarouselPaginationDesign handles rendering and DOM assembly for CarouselPagination component.
 *
 * Класс CarouselPaginationDesign отвечает за рендеринг и сборку DOM для компонента CarouselPagination.
 */
export class CarouselPaginationDesign<
  COMP extends CarouselPaginationComponents,
  EXPOSE extends CarouselPaginationExpose,
  CLASSES extends CarouselPaginationClasses,
  P extends CarouselPaginationProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  CarouselPaginationEmits,
  EXPOSE,
  CarouselPaginationSlots,
  CLASSES,
  P
> {
  protected readonly item: CarouselPagination

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, CarouselPaginationEmits, P>,
    ItemConstructor: typeof CarouselPagination = CarouselPagination
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    )

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties / экспортируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      getSelected: this.item.selected.get,
      getCount: () => this.item.selected.total.value,
      set: this.item.selected.set,
      next: this.item.selected.next,
      previous: this.item.selected.previous
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns class dictionary / словарь классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        item: this.getSubClass('item'),
        fraction: this.getSubClass('fraction'),
        progress: this.getSubClass('progress'),
        progressBar: this.getSubClass('progressBar')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns style dictionary / словарь стилей
   */
  protected initStyles(): ConstrStyles {
    return this.item.styles
  }

  /**
   * Main render method.
   *
   * Основной метод рендеринга.
   * @returns rendered virtual node or undefined / отрендеренный виртуальный узел или undefined
   */
  protected initRender(): VNode | undefined {
    if (this.item.items.isHide()) {
      return undefined
    }

    const type = this.props.type ?? 'bullets'
    let children: VNode[]

    switch (type) {
      case 'fraction':
        children = this.renderFraction()
        break
      case 'progressbar':
        children = this.renderProgress()
        break
      case 'lines':
      case 'bullets':
      default:
        children = this.renderBullets()
        break
    }

    return h(
      this.props.tag || 'div',
      {
        ...this.getAttrs(),
        ...this.item.focus.binds,
        ...this.item.aria,
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value
      },
      children
    )
  }

  /**
   * Renders the list of bullets or lines.
   *
   * Рендерит список буллетов или линий.
   * @returns list of bullet VNodes / список VNode буллетов
   */
  readonly renderBullets = (): VNode[] => {
    return this.item.items.list.value
      .map((paginationItem: CarouselPaginationItem) => {
        const binds: CarouselPaginationItemBinds = {
          ...paginationItem.binds,
          class: {
            [`${this.classes?.value.item}`]: true,
            [`${this.classes?.value.item}--selected`]: paginationItem.selected
          }
        }

        const slot = this.initSlot('item', undefined, {
          binds,
          item: paginationItem,
          index: paginationItem.index
        })

        if (slot) {
          return slot
        }

        return h('button', binds)
      })
  }

  /**
   * Renders the fraction display.
   *
   * Рендерит отображение дроби.
   * @returns fraction VNode array / массив VNode дроби
   */
  readonly renderFraction = (): VNode[] => {
    const binds: CarouselPaginationFractionBinds = {
      ...this.getKeyClass('fraction'),
      ...AriaStaticInclude.live('polite')
    }

    const slot = this.initSlot('fraction', undefined, {
      binds,
      active: this.item.selected.item.value,
      total: this.item.selected.total.value,
      text: this.item.items.fractionText
    })

    if (slot) {
      return [slot]
    }

    return [
      h(
        'div',
        binds,
        this.item.items.fractionText
      )
    ]
  }

  /**
   * Renders the progress bar.
   *
   * Рендерит полосу прогресса.
   * @returns progress VNode array / массив VNode прогресса
   */
  readonly renderProgress = (): VNode[] => {
    const binds: CarouselPaginationProgressBinds = {
      ...this.getKeyClass('progress'),
      ...AriaStaticInclude.role('progressbar'),
      ...AriaStaticInclude.valueMinMax(
        this.item.selected.item.value,
        1,
        this.item.selected.total.value
      )
    }

    const slot = this.initSlot('progress', undefined, {
      binds,
      active: this.item.selected.item.value,
      total: this.item.selected.total.value,
      percent: this.item.items.percent
    })

    if (slot) {
      return [slot]
    }

    return [
      h(
        'div',
        binds,
        [
          h('div', this.getKeyClass('progressBar'))
        ]
      )
    ]
  }
}
