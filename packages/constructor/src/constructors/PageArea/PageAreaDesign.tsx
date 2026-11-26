import { mergeProps, type VNode } from 'vue'
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
 * PageAreaDesign class delegates rendering to `page`, `section`, `block`, or `group` based on layout area context.
 *
 * Класс PageAreaDesign делегирует рендеринг компонентам `page`, `section`, `block` или `group` в зависимости от контекста области.
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
  /** PageArea logic controller instance / Экземпляр логического контроллера PageArea */
  protected readonly item: PageArea

  /**
   * Constructor for PageAreaDesign.
   *
   * Конструктор для PageAreaDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
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
   * @returns delegated virtual node or undefined / виртуальная нода делегируемого компонента или undefined
   */
  protected initRender(): VNode | undefined {
    return this.components?.renderOne(
      this.item.componentName,
      mergeProps(this.getAttrs(), this.props),
      this.slots as RawSlots
    )
  }
}
