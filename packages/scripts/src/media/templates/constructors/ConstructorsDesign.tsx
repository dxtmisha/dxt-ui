import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Constructors } from './Constructors'

import {
  type ConstructorsPropsBasic
} from './props'
import {
  type ConstructorsClasses,
  type ConstructorsComponents,
  type ConstructorsEmits,
  type ConstructorsExpose,
  type ConstructorsSlots
} from './types'

/**
 * ConstructorsDesign rendering and composition class.
 *
 * Класс рендеринга и композиции ConstructorsDesign.
 */
export class ConstructorsDesign<
  COMP extends ConstructorsComponents,
  EXPOSE extends ConstructorsExpose,
  CLASSES extends ConstructorsClasses,
  P extends ConstructorsPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ConstructorsEmits,
    EXPOSE,
    ConstructorsSlots,
    CLASSES,
    P
  > {
  /** Constructors logic constructor / Логический конструктор Constructors */
  protected readonly item: Constructors

  /**
   * Constructor for creating a ConstructorsDesign instance.
   *
   * Конструктор для создания экземпляра ConstructorsDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ConstructorsEmits, P>,
    ItemConstructor: typeof Constructors = Constructors
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
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
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
    return {
      ...this.item.styles
    }
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node of the root element / виртуальный узел корневого элемента
   */
  protected initRender(): VNode {
    const children: VNode[] = []

    // this.initSlot('default', children)

    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        },
        this.item.binds
      ),
      children
    )
  }
}
