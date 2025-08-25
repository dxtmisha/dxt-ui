import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

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
    const children: any[] = []

    if (this.props.head) {
      children.push(this.renderTransform())
    } else {
      children.push(this.renderList())
    }

    return h('div', {
      ...this.getAttrs(),
      'class': this.classes?.value.main,
      'data-open': this.item.open.is.value ? 'open' : 'close',
      'data-divider': this.props.divider ? 'divider' : undefined
    }, children)
  }

  /**
   * Render transformation element.
   *
   * Рендер элемента трансформации.
   */
  protected readonly renderTransform = (): VNode[] => {
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
   */
  protected readonly renderHead = (): VNode | undefined => {
    if (this.props.head) {
      return this.components.renderOne(
        'listItem',
        this.item.headBinds.value
      )
    }

    return undefined
  }

  /**
   * Render list element.
   *
   * Рендер элемента списка.
   */
  protected readonly renderList = (): VNode | undefined => {
    return this.components.renderOne('list', {
      ...this.item.listBind.value,
      onClick: this.item.event.onClick
    })
  }
}
