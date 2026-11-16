import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ListGroup } from './ListGroup'

import type { MotionTransformControlItem } from '../MotionTransform'
import type { ListGroupPropsBasic } from './props'
import type {
  ListGroupClasses,
  ListGroupComponents,
  ListGroupEmits,
  ListGroupExpose,
  ListGroupSlots
} from './types'

/**
 * ListGroupDesign is a design constructor for the ListGroup component.
 * It connects the ListGroup logic, sets up slots, classes, styles, and defines the rendering function.
 *
 * ListGroupDesign — конструктор дизайна для компонента ListGroup.
 * Он связывает логику ListGroup, настраивает слоты, классы, стили и определяет функцию рендеринга.
 */
export class ListGroupDesign<
  COMP extends ListGroupComponents,
  EXPOSE extends ListGroupExpose,
  CLASSES extends ListGroupClasses,
  P extends ListGroupPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ListGroupEmits,
    EXPOSE,
    ListGroupSlots,
    CLASSES,
    P
  > {
  /** ListGroup logic orchestrator instance / Экземпляр логического оркестратора ListGroup */
  protected readonly item: ListGroup

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ListGroupEmits, P>,
    ItemConstructor: typeof ListGroup = ListGroup
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
   * Initialization of all the necessary properties for exposure.
   *
   * Инициализация всех необходимых свойств для экспозиции.
   * @returns exposed properties / экспонируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      getOpen: () => this.item.isOpen()
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns initialized classes / инициализированные классы
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        head: this.naming.getSubClass('head'),
        list: this.naming.getSubClass('list')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns initialized styles / инициализированные стили
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering the component.
   *
   * Метод для рендеринга компонента.
   * @returns component virtual node / виртуальный узел компонента
   */
  protected initRender(): VNode {
    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        this.item.binds,
        this.item.aria,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      this.renderTransform()
    )
  }

  /**
   * Render transformation element.
   *
   * Рендер элемента трансформации.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderTransform = (): VNode[] => {
    return this.components?.render(
      'motionTransform',
      this.item.transformBinds,
      {
        head: this.renderHead,
        body: this.renderList
      }
    ) ?? []
  }

  /**
   * Render title element.
   *
   * Рендер элемента заголовка.
   * @param item motion transform item / элемент движения трансформации
   * @returns head virtual node / виртуальный узел заголовка
   */
  readonly renderHead = (item: MotionTransformControlItem): VNode => {
    return h(
      'div',
      this.getKeyClass('head'),
      this.initSlot(
        'head',
        undefined,
        {
          open: this.item.isOpen(),
          ...item.binds
        }
      )
    )
  }

  /**
   * Render list element.
   *
   * Рендер элемента списка.
   * @returns list virtual node / виртуальный узел списка
   */
  readonly renderList = (): VNode => {
    return h(
      'div',
      this.getKeyClass('list'),
      this.initSlot('list')
    )
  }
}
