import { h, mergeProps, type VNode } from 'vue'
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
  /** CarouselPagination logic orchestrator instance / Экземпляр оркестратора логики CarouselPagination */
  protected readonly item: CarouselPagination

  /**
   * Constructor for CarouselPaginationDesign.
   *
   * Конструктор для CarouselPaginationDesign.
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Renders the list of bullets or lines.
   *
   * Рендерит список буллетов или линий.
   * @returns list of bullet VNodes / список VNode буллетов
   */
  readonly renderBullets = (): VNode[] => {
    const itemClass = this.classes?.value.item ?? ''

    return this.item.i('items').list.value
      .map((paginationItem: CarouselPaginationItem) => {
        const binds: CarouselPaginationItemBinds = {
          ...paginationItem.binds,
          class: {
            [itemClass]: Boolean(itemClass),
            [`${itemClass}--selected`]: Boolean(itemClass) && paginationItem.selected
          }
        }

        const slot = this.initSlot('item', undefined, {
          key: paginationItem.index,
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
    const selectedInstance = this.item.i('selected')
    const itemsInstance = this.item.i('items')
    const binds: CarouselPaginationFractionBinds = {
      ...this.getKeyClass('fraction'),
      ...AriaStaticInclude.live('polite')
    }

    const slot = this.initSlot('fraction', undefined, {
      binds,
      active: selectedInstance.item.value,
      total: selectedInstance.total.value,
      text: itemsInstance.fractionText
    })

    if (slot) {
      return [slot]
    }

    return [
      h(
        'div',
        binds,
        itemsInstance.fractionText
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
    const selectedInstance = this.item.i('selected')
    const itemsInstance = this.item.i('items')
    const active = selectedInstance.item.value
    const total = selectedInstance.total.value
    const binds: CarouselPaginationProgressBinds = {
      ...this.getKeyClass('progress'),
      ...AriaStaticInclude.role('progressbar'),
      ...AriaStaticInclude.valueMinMax(
        total > 0 ? active : 0,
        total > 0 ? 1 : 0,
        total
      )
    }

    const slot = this.initSlot('progress', undefined, {
      binds,
      active,
      total,
      percent: itemsInstance.percent
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

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties / экспортируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      getSelected: () => this.item.i('selected').get(),
      getCount: () => this.item.i('selected').total.value,
      set: (selected: number) => this.item.i('selected').set(selected),
      next: () => this.item.i('selected').next(),
      previous: () => this.item.i('selected').previous()
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
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        item: this.naming.getSubClass('item'),
        fraction: this.naming.getSubClass('fraction'),
        progress: this.naming.getSubClass('progress'),
        progressBar: this.naming.getSubClass('progressBar')
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
    if (this.item.isHide()) {
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
      case 'dots':
      case 'lines':
      case 'bullets':
      default:
        children = this.renderBullets()
        break
    }

    return h(
      this.item.tag,
      mergeProps(
        this.getAttrs(),
        this.item.binds,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      children
    )
  }
}
