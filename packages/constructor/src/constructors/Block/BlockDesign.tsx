import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Block } from './Block'

import {
  type BlockPropsBasic
} from './props'
import {
  type BlockClasses,
  type BlockComponents,
  type BlockEmits,
  type BlockExpose,
  type BlockSlots
} from './types'

/**
 * BlockDesign
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
  protected readonly item: Block

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor block item class/ класс элемента блока
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        headline: this.getSubClass('headline'),
        header: this.getSubClass('header'),
        description: this.getSubClass('description'),
        body: this.getSubClass('body')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    const children: any[] = [
      ...this.renderBody()
    ]

    this.initSlot('default', children)

    return h(this.item.tag.value, this.getProps(), children)
  }

  /**
   * Headline rendering.
   *
   * Рендеринг заголовка.
   */
  protected readonly renderHeadline = (): VNode[] => {
    if (this.item.isHeadline.value) {
      const children: any[] = []

      if (this.props.headline) {
        children.push(this.props.headline)
      }

      this.initSlot('headline', children)

      return [
        h('div', {
          key: 'headline',
          class: this.classes?.value.headline
        }, children)
      ]
    }

    return []
  }

  /**
   * Header rendering.
   *
   * Рендеринг заголовка.
   */
  protected readonly renderHeader = (): VNode[] => {
    if (this.item.header.is.value) {
      return this.item.header.render()
    }

    return []
  }

  /**
   * Body rendering.
   *
   * Рендеринг тела.
   */
  protected readonly renderBody = (): VNode[] => {
    const children: any[] = [
      ...this.renderHeadline(),
      ...this.renderHeader(),
      ...this.item.description.render()
    ]

    if (children.length > 0) {
      return [
        h('div', {
          key: 'body',
          class: this.classes?.value.body
        }, children)
      ]
    }

    return []
  }

  /**
   * Returns properties for the main element.
   *
   * Возвращает свойства для главного элемента.
   */
  protected getProps() {
    const props = {
      ...this.getAttrs(),
      class: this.classes?.value.main
    }

    if (this.props.label) {
      Object.assign(
        props,
        AriaStaticInclude.labelledby(this.item.labelId)
      )
    }

    if (this.item.description.is.value) {
      Object.assign(
        props,
        AriaStaticInclude.describedby(this.item.description.id.value)
      )
    }

    return props
  }
}
