import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Grid } from './Grid'

import {
  type GridPropsBasic
} from './props'
import {
  type GridClasses,
  type GridComponents,
  type GridEmits,
  type GridExpose,
  type GridSlots
} from './types'

/**
 * Design constructor class for the Grid layout component.
 * Connects the Grid logic orchestrator with reactive classes, styles, attributes, default slot, and root element rendering.
 *
 * Класс дизайн-конструктора для компонента макета сетки Grid.
 * Связывает логический оркестратор Grid с реактивными классами, стилями, атрибутами, слотом по умолчанию и рендерингом корневого элемента.
 */
export class GridDesign<
  COMP extends GridComponents,
  EXPOSE extends GridExpose,
  CLASSES extends GridClasses,
  P extends GridPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    GridEmits,
    EXPOSE,
    GridSlots,
    CLASSES,
    P
  > {
  /** Grid logic orchestrator instance / Экземпляр логического оркестратора сетки */
  protected readonly item: Grid

  /**
   * Constructor.
   *
   * Конструктор.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, GridEmits, P>,
    ItemConstructor: typeof Grid = Grid
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
   * @returns exposed component properties / экспортируемые свойства компонента
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes object / частичный объект классов
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
   * @returns component styles / стили компонента
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered VNode element / отрендеренный VNode-элемент
   */
  protected initRender(): VNode {
    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      this.initSlot('default')
    )
  }
}
