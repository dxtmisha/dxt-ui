import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Badge } from './Badge'

import {
  type BadgePropsBasic
} from './props'
import {
  type BadgeClasses,
  type BadgeComponents,
  type BadgeEmits,
  type BadgeExpose,
  type BadgeSlots
} from './types'

/**
 * BadgeDesign
 */
export class BadgeDesign<
  COMP extends BadgeComponents,
  EXPOSE extends BadgeExpose,
  CLASSES extends BadgeClasses,
  P extends BadgePropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    BadgeEmits,
    EXPOSE,
    BadgeSlots,
    CLASSES,
    P
  > {
  protected readonly item: Badge

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, BadgeEmits, P>,
    ItemConstructor: typeof Badge = Badge
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
      main: this.item.classes.value,
      ...{
        // :classes [!] System label / Системная метка
        label: this.getSubClass('label'),
        icon: this.getSubClass('icon')
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
    const children: any[] = []

    if (!this.props.dot) {
      children.push(
        ...this.item.label.render(undefined, this.item.aria.value),
        ...this.item.icon.renderIcon()
      )
    }

    return h('span', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main,
      ...AriaStaticInclude.label(this.props.ariaLabel)
    }, children)
  }
}
