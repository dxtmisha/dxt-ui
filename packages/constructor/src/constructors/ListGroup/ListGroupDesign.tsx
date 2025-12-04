import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ListGroup } from './ListGroup'

import {
  type ListGroupPropsBasic
} from './props'
import {
  type ListGroupClasses,
  type ListGroupComponents,
  type ListGroupEmits,
  type ListGroupExpose,
  type ListGroupSlots
} from './types'
import type { MotionTransformControlItem } from '../MotionTransform'

/**
 * ListGroupDesign
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
  protected readonly item: ListGroup

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ListGroupEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ListGroup(
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
      open: this.item.open.is
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
        head: this.getSubClass('head'),
        list: this.getSubClass('list')
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
  protected initRender(): VNode {
    return h(
      'div',
      {
        ...this.getAttrs(),
        'class': this.classes?.value.main,
        'data-open': this.item.open.is.value ? 'open' : 'close',
        'data-divider': this.props.divider ? 'divider' : undefined,
        ...AriaStaticInclude.role('group')
      },
      this.renderTransform()
    )
  }

  /**
   * Render transformation element.
   *
   * Рендер элемента трансформации.
   */
  readonly renderTransform = (): VNode[] => {
    return this.components.render(
      'motionTransform',
      {
        ...this.item.transformBinds(),
        open: this.item.open.is.value
      },
      {
        head: this.renderHead,
        body: this.renderList
      }
    )
  }

  /**
   * Render title element.
   *
   * Рендер элемента заголовка.
   * @param item motion transform item/ элемент движения трансформации
   */
  readonly renderHead = (item: MotionTransformControlItem): VNode => {
    return h(
      'div',
      {
        class: this.classes?.value.head
      },
      this.initSlot(
        'head',
        undefined,
        {
          open: this.item.open.is.value,
          ...item.binds
        }
      )
    )
  }

  /**
   * Render list element.
   *
   * Рендер элемента списка.
   */
  readonly renderList = (): VNode => {
    return h(
      'div',
      {
        class: this.classes?.value.list
      },
      this.initSlot('list')
    )
  }
}
