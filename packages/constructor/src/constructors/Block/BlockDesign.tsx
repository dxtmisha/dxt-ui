import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  isFilledOrNumber
} from '@dxtmisha/functional'

import { Block } from './Block'

import type {
  BlockPropsBasic
} from './props'
import type {
  BlockClasses,
  BlockComponents,
  BlockEmits,
  BlockExpose,
  BlockSlots
} from './types'

/**
 * BlockDesign component class for rendering the block component layout and slots.
 * Assembles the optional header/description body section and the default content slot.
 *
 * Класс компонента BlockDesign для рендеринга разметки и слотов компонента блока.
 * Собирает опциональную секцию шапки/описания и основной слот содержимого.
 */
export class BlockDesign<
  COMP extends BlockComponents,
  EXPOSE extends BlockExpose,
  CLASSES extends BlockClasses,
  P extends BlockPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    BlockEmits,
    EXPOSE,
    BlockSlots,
    CLASSES,
    P
  > {
  /** Block logic orchestrator instance / Экземпляр оркестратора логики блока */
  protected readonly item: Block

  /**
   * Constructor for creating a BlockDesign instance.
   *
   * Конструктор для создания экземпляра BlockDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor block item class / класс элемента блока
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, BlockEmits, P>,
    ItemConstructor: typeof Block = Block
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
   * Renders the body wrapper containing headline, header, and description when non-empty.
   *
   * Рендерит обёртку тела, содержащую хедлайн, шапку и описание, если они не пусты.
   * @returns array of VNodes / массив VNode
   */
  readonly renderBody = (): VNode[] => {
    const children: VNode[] = [
      ...this.renderHeadline(),
      ...this.item.callInstance('header', item => item.render(), []),
      ...this.item.callInstance('description', item => item.render(), [])
    ]

    if (children.length > 0) {
      return [
        h('div', this.getKeyClass('body'), children)
      ]
    }

    return []
  }

  /**
   * Renders the secondary headline element when headline prop or slot is provided.
   *
   * Рендерит элемент вторичного хедлайна при наличии свойства или слота headline.
   * @returns array of VNodes / массив VNode
   */
  readonly renderHeadline = (): VNode[] => {
    if (this.item.isHeadline()) {
      const children: Array<VNode | string | number> = []

      if (isFilledOrNumber(this.props.headline)) {
        children.push(this.props.headline)
      }

      this.initSlot('headline', children as VNode[])

      return [
        h('div', this.getKeyClass('headline'), children)
      ]
    }

    return []
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed API object / объект экспортируемого API
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes object / частичный объект классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        headline: this.naming.getSubClass('headline'),
        header: this.naming.getSubClass('header'),
        description: this.naming.getSubClass('description'),
        body: this.naming.getSubClass('body')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering the block root element, body header section, and default slot.
   *
   * Метод для рендеринга корневого элемента блока, секции шапки и слота по умолчанию.
   * @returns rendered VNode / отрисованный VNode
   */
  protected initRender(): VNode {
    const children: VNode[] = [
      ...this.renderBody()
    ]

    this.initSlot('default', children)

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
