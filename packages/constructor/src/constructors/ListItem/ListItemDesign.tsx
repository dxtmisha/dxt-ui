import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ListItem } from './ListItem'

import {
  type ListItemPropsBasic
} from './props'
import {
  type ListItemClasses,
  type ListItemComponents,
  type ListItemEmits,
  type ListItemExpose,
  type ListItemSlots
} from './types'

/**
 * ListItemDesign
 */
export class ListItemDesign<
  COMP extends ListItemComponents,
  EXPOSE extends ListItemExpose,
  CLASSES extends ListItemClasses,
  P extends ListItemPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ListItemEmits,
    EXPOSE,
    ListItemSlots,
    CLASSES,
    P
  > {
  protected readonly item: ListItem

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ListItemEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ListItem(
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
      ...this.item.event.expose
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes.value,
      ...{
        // :classes [!] System label / Системная метка
        body: this.getSubClass('body'),
        context: this.getSubClass('context'),
        label: this.getSubClass('label'),
        highlight: this.getSubClass('highlight'),
        prefix: this.getSubClass('prefix'),
        caption: this.getSubClass('caption'),
        description: this.getSubClass('description'),
        icon: this.getSubClass('icon'),
        trailing: this.getSubClass('trailing'),
        badge: this.getSubClass('badge'),
        input: this.getSubClass('input')
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
    if (
      this.props.filterMode
      && !this.item.label.isHighlight()
    ) {
      return undefined
    }

    const children: any[] = []

    this.initSlot('leading', children)
    children.push(...this.renderBody())
    this.initSlot('trailing', children)

    children.push(
      ...this.item.icon.render(),
      ...this.item.progress.render(),
      ...this.item.ripple.render()
    )

    return h(
      this.item.tag.value,
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        ...this.item.bindsAndOpen.value
      },
      children
    )
  }

  /**
   * Method for rendering the main part of the component.
   *
   * Метод для рендеринга основной части компонента.
   */
  readonly renderBody = (): VNode[] => {
    const children: any[] = [
      ...this.renderContext(),
      ...this.item.description.render()
    ]

    this.initSlot('body', children)

    return [
      h(
        'div',
        { class: this.classes?.value.body },
        children
      )
    ]
  }

  /**
   * Method for rendering the context part of the component.
   * This includes prefix, caption, suffix, badge, and label.
   *
   * Метод для рендеринга контекстной части компонента.
   * Включает в себя префикс, подпись, суффикс, значок и метку.
   */
  readonly renderContext = (): VNode[] => {
    return [
      h(
        'div',
        { class: this.classes?.value.context },
        [
          ...this.item.prefix.render(),
          ...this.item.caption.render(),
          ...this.item.suffix.render(),
          ...this.item.label.render(),
          ...this.item.badge.render()
        ]
      )
    ]
  }
}
