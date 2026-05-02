import { type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  type RawSlots
} from '@dxtmisha/functional'

import { PageArea } from './PageArea'

import {
  type PageAreaPropsBasic
} from './props'
import {
  type PageAreaClasses,
  type PageAreaComponents,
  type PageAreaEmits,
  type PageAreaExpose,
  type PageAreaSlots
} from './types'

/**
 * PageAreaDesign
 */
export class PageAreaDesign<
  COMP extends PageAreaComponents,
  EXPOSE extends PageAreaExpose,
  CLASSES extends PageAreaClasses,
  P extends PageAreaPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    PageAreaEmits,
    EXPOSE,
    PageAreaSlots,
    CLASSES,
    P
  > {
  protected readonly item: PageArea

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
    options?: ConstrOptions<COMP, PageAreaEmits, P>,
    ItemConstructor: typeof PageArea = PageArea
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
  protected initRender(): VNode | undefined {
    let componentName = 'group'

    switch (this.item.area.value) {
      case 'container':
        componentName = 'page'
        break
      case 'page':
        componentName = 'section'
        break
      case 'section':
        componentName = 'block'
        break
      case 'block':
        componentName = 'group'
        break
    }

    return this.components.renderOne(componentName as never, this.props, this.slots as RawSlots)
  }
}
