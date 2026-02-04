import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'
import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Anchor } from './Anchor'

import type { TooltipControl } from '../Tooltip'
import {
  type AnchorPropsBasic
} from './props'
import {
  type AnchorClasses,
  type AnchorComponents,
  type AnchorEmits,
  type AnchorExpose,
  type AnchorSlots
} from './types'

/**
 * AnchorDesign
 */
export class AnchorDesign<
  COMP extends AnchorComponents,
  EXPOSE extends AnchorExpose,
  CLASSES extends AnchorClasses,
  P extends AnchorPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    AnchorEmits,
    EXPOSE,
    AnchorSlots,
    CLASSES,
    P
  > {
  protected readonly item: Anchor

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the anchor/ класс для работы с якорем
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, AnchorEmits, P>,
    ItemConstructor: typeof Anchor = Anchor
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
        label: this.getSubClass('label')
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
  protected initRender(): VNode[] | undefined {
    if (this.item.href.is()) {
      if (this.item.isHide.value) {
        return this.renderItemHide()
      }

      if (this.props.isCopy) {
        return this.renderTooltip()
      }

      return this.renderItem()
    }

    return undefined
  }

  /**
   * Rendering the tooltip.
   *
   * Рендеринг подсказки.
   */
  readonly renderTooltip = (): VNode[] => {
    return this.item.tooltip.render(
      {
        control: (props: TooltipControl): VNode[] => this.renderItem(props)
      }
    )
  }

  /**
   * Rendering the main item.
   *
   * Рендеринг основного элемента.
   * @param props additional properties/ дополнительные свойства
   */
  readonly renderItem = (
    props?: TooltipControl
  ): VNode[] => {
    const classes = [
      this.classes?.value.main,
      getClassTagAStatic(this.getDesign())
    ]

    if (props) {
      classes.push(props.class)
    }

    return [
      h('a', {
        ...this.getMainProps(),
        class: classes
      }, this.renderChildren())
    ]
  }

  /**
   * Rendering the hidden item.
   *
   * Рендеринг скрытого элемента.
   */
  readonly renderItemHide = (): VNode[] => {
    return [
      h('a', {
        ...this.getAttrs(),
        key: 'main-hide',
        name: this.props.name
      })
    ]
  }

  /**
   * Rendering an icon if it is set.
   *
   * Рендеринг иконки, если она задана.
   */
  readonly renderIcon = (): VNode[] => {
    if (this.item.icon.is()) {
      return this.components.render(
        'icon',
        this.item.icon.binds.value
      )
    }

    return []
  }

  /**
   * Rendering children elements.
   *
   * Рендеринг дочерних элементов.
   */
  readonly renderChildren = (): VNode[] => {
    const children: VNode[] = []

    if (!this.props.hide) {
      children.push(
        ...this.renderIcon(),
        ...this.item.label.render()
      )
    }

    return children
  }

  /**
   * Get main element properties.
   *
   * Получить свойства основного элемента.
   */
  protected getMainProps(): Record<string, any> {
    const props: Record<string, any> = {
      ...this.getAttrs(),
      ref: this.element,
      key: 'main',
      name: this.props.name,
      onClick: this.item.event.onClick,
      tabindex: 0
    }

    if (!this.props.isCopy) {
      return {
        ...props,
        href: this.item.href.get(),
        ...AriaStaticInclude.current('page')
      }
    }

    return props
  }
}
