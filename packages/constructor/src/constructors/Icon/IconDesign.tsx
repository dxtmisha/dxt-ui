import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { Icon } from './Icon'

import {
  type IconPropsBasic
} from './props'
import {
  type IconClasses,
  type IconComponents,
  type IconEmits,
  type IconExpose,
  type IconSlots
} from './types'

/**
 * IconDesign
 */
export class IconDesign<
  COMP extends IconComponents,
  EXPOSE extends IconExpose,
  CLASSES extends IconClasses,
  P extends IconPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    IconEmits,
    EXPOSE,
    IconSlots,
    CLASSES,
    P
  > {
  protected readonly item: Icon

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, IconEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Icon(
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
   * Render the main icon.
   *
   * Рендер основной иконки.
   */
  readonly renderIcon = (): VNode | undefined => {
    return this.components.renderOne(
      'image',
      this.item.iconBind.value,
      undefined,
      'icon'
    )
  }

  /**
   * Render the secondary icon.
   *
   * Рендер вторичной иконки.
   */
  readonly renderIconActive = (): VNode | undefined => {
    return this.components.renderOne(
      'image',
      this.item.iconActiveBind.value,
      undefined,
      'iconActive'
    )
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      isActive: this.item.isActive
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes.value,
      ...{
        // :classes [!] System label / Системная метка
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    const children: any[] = []

    this.initSlot('default', children)

    if (this.props.icon) {
      children.push(this.renderIcon())
    }

    if (this.props.iconActive) {
      children.push(this.renderIconActive())
    }

    return h(
      'span',
      {
        ...this.getAttrs(),
        class: this.classes?.value.main
      },
      children
    )
  }
}
