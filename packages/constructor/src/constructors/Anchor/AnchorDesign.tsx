import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'
import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

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
 * AnchorDesign constructor class responsible for assembling and rendering the Anchor component.
 *
 * Класс-конструктор AnchorDesign, отвечающий за сборку и рендеринг компонента Anchor.
 */
export class AnchorDesign<
  COMP extends AnchorComponents,
  EXPOSE extends AnchorExpose,
  CLASSES extends AnchorClasses,
  P extends AnchorPropsBasic
> extends DesignConstructorAbstract<
    HTMLAnchorElement,
    COMP,
    AnchorEmits,
    EXPOSE,
    AnchorSlots,
    CLASSES,
    P
  > {
  /** Anchor logic orchestrator instance / Экземпляр оркестратора логики Anchor */
  protected readonly item: Anchor

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the anchor / класс для работы с якорем
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed API object / объект экспортируемого API
   */
  protected initExpose(): EXPOSE {
    return {
      go: this.item.go
    } as EXPOSE
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
        label: this.naming.getSubClass('label')
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
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns array of VNodes or undefined / массив VNode или undefined
   */
  protected initRender(): VNode[] | undefined {
    if (this.item.isHref()) {
      if (this.item.isHide()) {
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
   * @returns array of VNodes / массив VNode
   */
  readonly renderTooltip = (): VNode[] => {
    return this.item.callInstance(
      'tooltip',
      item => item.render({
        control: (props: TooltipControl): VNode[] => this.renderItem(props)
      }),
      () => this.renderItem()
    )
  }

  /**
   * Rendering the main item.
   *
   * Рендеринг основного элемента.
   * @param props additional properties / дополнительные свойства
   * @returns array of VNodes / массив VNode
   */
  readonly renderItem = (
    props?: TooltipControl
  ): VNode[] => {
    const classes = [
      this.classes?.value.main,
      getClassTagAStatic(this.naming.getDesign())
    ]

    if (props) {
      classes.push(props.class)
    }

    return [
      h(
        'a',
        mergeProps(
          this.getAttrs(),
          this.item.binds,
          {
            class: classes,
            style: this.styles?.value
          }
        ),
        this.renderChildren()
      )
    ]
  }

  /**
   * Rendering the hidden item.
   *
   * Рендеринг скрытого элемента.
   * @returns array of VNodes / массив VNode
   */
  readonly renderItemHide = (): VNode[] => {
    return [
      h(
        'a',
        mergeProps(
          this.getAttrs(),
          this.item.bindsHide
        )
      )
    ]
  }

  /**
   * Rendering children elements.
   *
   * Рендеринг дочерних элементов.
   * @returns array of VNodes / массив VNode
   */
  readonly renderChildren = (): VNode[] => {
    if (!this.props.hide) {
      return [
        ...this.item.callInstance('icon', item => this.components?.render('icon', item.binds) ?? [], []),
        ...this.item.callInstance('label', item => item.render(), [])
      ]
    }

    return []
  }
}
