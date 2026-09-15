import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { CarouselPagination } from './CarouselPagination'
import { type CarouselPaginationItem } from './basicTypes'
import { type CarouselPaginationPropsBasic } from './props'
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
  P extends CarouselPaginationPropsBasic
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
      selected: this.item.selected,
      count: this.item.count,
      set: this.item.set,
      next: this.item.next,
      previous: this.item.previous
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
    return {}
  }

  /**
   * Renders the list of bullets or lines.
   *
   * Рендерит список буллетов или линий.
   * @returns list of bullet VNodes / список VNode буллетов
   */
  readonly renderBullets = (): VNode[] => {
    return this.item.items.list.value.map((paginationItem: CarouselPaginationItem) => {
      if (this.slots?.item) {
        return this.slots.item({ item: paginationItem, index: paginationItem.index })
      }

      const isSelected = paginationItem.selected
      const itemClasses = [
        this.classes?.value.item,
        isSelected && `${this.classes?.value.item}--selected`
      ]

      const itemStyles = paginationItem.scale !== undefined && paginationItem.scale !== 1
        ? { transform: `scale(${paginationItem.scale})` }
        : undefined

      return h('button', {
        key: paginationItem.index,
        type: 'button',
        role: 'tab',
        class: itemClasses,
        style: itemStyles,
        'aria-selected': isSelected,
        'aria-label': `Slide ${paginationItem.index}`,
        tabindex: isSelected ? 0 : -1,
        onClick: (event: MouseEvent) => this.item.onClickItem(event, paginationItem.index)
      })
    })
  }

  /**
   * Renders the fraction display.
   *
   * Рендерит отображение дроби.
   * @returns fraction VNode / VNode дроби
   */
  readonly renderFraction = (): VNode => {
    const active = this.item.items.active.value
    const total = this.item.items.total.value
    const text = this.item.items.fractionText

    if (this.slots?.fraction) {
      return this.slots.fraction({ active, total, text })
    }

    return h(
      'div',
      {
        class: this.classes?.value.fraction,
        'aria-live': 'polite'
      },
      text
    )
  }

  /**
   * Renders the progress bar.
   *
   * Рендерит полосу прогресса.
   * @returns progress VNode / VNode прогресса
   */
  readonly renderProgress = (): VNode => {
    const active = this.item.items.active.value
    const total = this.item.items.total.value
    const percent = this.item.items.percent

    if (this.slots?.progress) {
      return this.slots.progress({ active, total, percent })
    }

    const isVertical = Boolean(this.props.vertical)

    return h(
      'div',
      {
        class: this.classes?.value.progress,
        role: 'progressbar',
        'aria-valuenow': active,
        'aria-valuemin': 1,
        'aria-valuemax': total
      },
      [
        h('div', {
          class: this.classes?.value.progressBar,
          style: {
            width: isVertical ? undefined : `${percent}%`,
            height: isVertical ? `${percent}%` : undefined
          }
        })
      ]
    )
  }

  /**
   * Main render method.
   *
   * Основной метод рендеринга.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected initRender(): VNode {
    if (this.item.items.isHide) {
      return h('span', { style: { display: 'none' } })
    }

    const type = this.props.type ?? 'bullets'
    let children: VNode | VNode[]

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
        ...this.item.aria,
        ref: this.element,
        class: this.classes?.value.main
      },
      Array.isArray(children) ? children : [children]
    )
  }
}
