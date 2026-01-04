import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Anchor } from './Anchor'

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
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, AnchorEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Anchor(
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
    // const children: any[] = []

    return h('a', {
      ...this.getAttrs(),
      class: this.classes?.value.main,
      name: this.props.name
    })
  }

  readonly renderIcon(): VNode[] {
    if (this.item.icon.is()) {
      return this.components.render(
        'icon',
        this.item.icon.binds.value
      )
    }
  }
}
