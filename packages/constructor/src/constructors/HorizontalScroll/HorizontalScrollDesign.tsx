import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { HorizontalScroll } from './HorizontalScroll'

import {
  type HorizontalScrollPropsBasic
} from './props'
import {
  type HorizontalScrollClasses,
  type HorizontalScrollComponents,
  type HorizontalScrollEmits,
  type HorizontalScrollExpose,
  type HorizontalScrollSlots
} from './types'

/**
 * HorizontalScrollDesign class constructor for managing classes, styles, and rendering the HorizontalScroll component.
 * It acts as the bridge between component configuration and standard HTML/Vue virtual DOM nodes.
 *
 * Класс-конструктор дизайна HorizontalScrollDesign для управления классами, стилями и рендерингом компонента HorizontalScroll.
 * Служит мостом между конфигурацией компонента и стандартными виртуальными DOM-нодами Vue.
 */
export class HorizontalScrollDesign<
  COMP extends HorizontalScrollComponents,
  EXPOSE extends HorizontalScrollExpose,
  CLASSES extends HorizontalScrollClasses,
  P extends HorizontalScrollPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    HorizontalScrollEmits,
    EXPOSE,
    HorizontalScrollSlots,
    CLASSES,
    P
  > {
  /** Main component instance / Основной экземпляр компонента */
  protected readonly item: HorizontalScroll

  /**
   * Constructor for HorizontalScrollDesign.
   *
   * Конструктор для HorizontalScrollDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, HorizontalScrollEmits, P>,
    ItemConstructor: typeof HorizontalScroll = HorizontalScroll
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
      ...this.item.expose
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
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  protected initRender(): VNode {
    const children: any[] = []

    this.initSlot('default', children, this.item.slotData)

    return h(
      this.props.tag ?? 'div',
      {
        ...this.getAttrs(),
        class: this.classes?.value.main,
        ...this.item.binds
      },
      children
    )
  }
}
