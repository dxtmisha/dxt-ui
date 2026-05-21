import { type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { MenuCountry } from './MenuCountry'

import {
  type MenuCountryPropsBasic
} from './props'
import {
  type MenuCountryClasses,
  type MenuCountryComponents,
  type MenuCountryEmits,
  type MenuCountryExpose,
  type MenuCountrySlots
} from './types'

/**
 * MenuCountryDesign
 */
export class MenuCountryDesign<
  COMP extends MenuCountryComponents,
  EXPOSE extends MenuCountryExpose,
  CLASSES extends MenuCountryClasses,
  P extends MenuCountryPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    MenuCountryEmits,
    EXPOSE,
    MenuCountrySlots,
    CLASSES,
    P
  > {
  protected readonly item: MenuCountry

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MenuCountryEmits, P>,
    ItemConstructor: typeof MenuCountry = MenuCountry
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
    return {
      ...this.item.menu.expose
    } as EXPOSE
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
  protected initRender(): VNode[] {
    return this.item.menu.render(
      {
        title: props => this.initSlot('title', undefined, props),
        footer: props => this.initSlot('footer', undefined, props),
        contextTop: props => this.initSlot('contextTop', undefined, props),
        contextBottom: props => this.initSlot('contextBottom', undefined, props)
      }
    )
  }
}
