import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { DraggableWrapper } from './DraggableWrapper'
import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'

import {
  type DraggableWrapperPropsBasic
} from './props'
import {
  type DraggableWrapperClasses,
  type DraggableWrapperComponents,
  type DraggableWrapperEmits,
  type DraggableWrapperExpose,
  type DraggableWrapperSlots
} from './types'

/**
 * Design constructor class for DraggableWrapper.
 *
 * Класс конструктора дизайна для DraggableWrapper.
 */
export class DraggableWrapperDesign<
  COMP extends DraggableWrapperComponents,
  EXPOSE extends DraggableWrapperExpose,
  CLASSES extends DraggableWrapperClasses,
  P extends DraggableWrapperPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    DraggableWrapperEmits,
    EXPOSE,
    DraggableWrapperSlots,
    CLASSES,
    P
  > {
  /** Orchestrator instance / Экземпляр оркестратора */
  protected readonly item: DraggableWrapper

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
    options?: ConstrOptions<COMP, DraggableWrapperEmits, P>,
    ItemConstructor: typeof DraggableWrapper = DraggableWrapper
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
   * Initializes component exposed properties.
   *
   * Инициализирует свойства, доступные извне компонента.
   * @returns exposed properties / свойства, доступные извне
   */
  protected initExpose(): EXPOSE {
    return {
      toNewPosition: (values, parameters) => this.item.toNewPosition(values, parameters)
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes map / частичная карта классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {
        [this.getStatusClass('disabled')]: this.props.disabled === true
      },
      ...{
        // :classes [!] System label / Системная метка
        square: this.getSubClass('square')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns style properties map / карта свойств стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node / виртуальный узел
   */
  protected initRender(): VNode {
    const classesList = DraggableWrapperClassesData.getClassesList(this.getDesign())
    return h(
      this.props.tag || 'div',
      {
        ...this.getAttrs(),
        ...this.item.events.binds,
        ref: this.element,
        class: this.classes?.value.main
      },
      [
        this.slots?.default?.({
          className: `${this.getSubClass('item')} ${this.item.classes.getId()}`,
          classClick: classesList.click,
          classDrop: classesList.drop,
          classPosition: classesList.position
        }),
        this.renderSquare()
      ]
    )
  }

  /**
   * Renders the square placeholder element.
   *
   * Рендерит элемент-заполнитель (square).
   * @returns virtual node / виртуальный узел
   */
  protected renderSquare(): VNode {
    return h('div', {
      ref: this.item.square.squareElement,
      class: [
        this.classes?.value.square,
        this.item.classes.getId()
      ]
    })
  }
}
