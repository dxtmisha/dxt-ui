import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Divider } from './Divider'

import type {
  DividerPropsBasic
} from './props'
import type {
  DividerClasses,
  DividerComponents,
  DividerEmits,
  DividerExpose,
  DividerSlots
} from './types'

/**
 * DividerDesign constructor class responsible for rendering the visual separator element.
 *
 * Класс-конструктор DividerDesign, отвечающий за рендеринг элемента визуального разделителя.
 */
export class DividerDesign<
  COMP extends DividerComponents,
  EXPOSE extends DividerExpose,
  CLASSES extends DividerClasses,
  P extends DividerPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    DividerEmits,
    EXPOSE,
    DividerSlots,
    CLASSES,
    P
  > {
  /** Divider logic orchestrator instance / Экземпляр оркестратора логики Divider */
  protected readonly item: Divider

  /**
   * Constructor for creating a DividerDesign instance.
   *
   * Конструктор для создания экземпляра DividerDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструктора
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, DividerEmits, P>,
    ItemConstructor: typeof Divider = Divider
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
   * @returns exposed properties object / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns custom classes object / объект пользовательских классов
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
   * @returns custom styles object / объект пользовательских стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering the divider root element.
   *
   * Метод для рендеринга корневого элемента разделителя.
   * @returns virtual node / виртуальная нода
   */
  protected initRender(): VNode {
    return h(
      'div',
      mergeProps(
        this.item.aria,
        this.getAttrs(),
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      )
    )
  }
}
