import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

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
 * IconDesign rendering and composition class.
 *
 * Класс рендеринга и композиции IconDesign.
 */
export class IconDesign<
  COMP extends IconComponents,
  EXPOSE extends IconExpose,
  CLASSES extends IconClasses,
  P extends IconPropsBasic
> extends DesignConstructorAbstract<
    HTMLSpanElement,
    COMP,
    IconEmits,
    EXPOSE,
    IconSlots,
    CLASSES,
    P
  > {
  /** Icon logic class instance / Экземпляр класса логики Icon */
  protected readonly item: Icon

  /**
   * Constructor for creating an IconDesign instance.
   *
   * Конструктор для создания экземпляра дизайна иконки.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor icon item class / класс элемента иконки
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, IconEmits, P>,
    ItemConstructor: typeof Icon = Icon
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
   * @returns exposed properties / открытые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      getDetail: () => this.item.i('event').expose.getDetail?.(),
      getValue: () => this.item.i('event').expose.getValue?.(),
      isActive: this.item.isActive
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
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
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node of the root element / виртуальный узел корневого элемента
   */
  protected initRender(): VNode {
    const children: VNode[] = []

    this.initSlot('default', children)

    if (this.props.icon) {
      const iconNode = this.renderIcon()

      if (iconNode) {
        children.push(iconNode)
      }
    }

    if (this.props.iconActive) {
      const activeIconNode = this.renderIconActive()

      if (activeIconNode) {
        children.push(activeIconNode)
      }
    }

    return h(
      'span',
      {
        ...this.getAttrs(),
        ...this.item.binds,
        class: this.classes?.value.main,
        style: this.styles?.value
      },
      children
    )
  }

  /**
   * Render the main icon.
   *
   * Рендер основной иконки.
   * @returns rendered icon virtual node / отрендеренный виртуальный узел иконки
   */
  readonly renderIcon = (): VNode | undefined => {
    return this.components?.renderOne(
      'image',
      this.item.iconBind,
      undefined,
      'icon'
    )
  }

  /**
   * Render the secondary icon.
   *
   * Рендер вторичной иконки.
   * @returns rendered active icon virtual node / отрендеренный виртуальный узел активной иконки
   */
  readonly renderIconActive = (): VNode | undefined => {
    return this.components?.renderOne(
      'image',
      this.item.iconActiveBind,
      undefined,
      'iconActive'
    )
  }
}
