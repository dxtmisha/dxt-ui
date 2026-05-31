import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  getBind,
  toBinds
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
 * ListItemDesign class responsible for rendering the ListItem component, mapping props to elements, classes, and sub-components.
 *
 * Класс ListItemDesign, отвечающий за рендеринг компонента ListItem, сопоставление свойств с элементами, классами и подкомпонентами.
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
  /** Instance of the ListItem constructor / Экземпляр конструктора ListItem */
  protected readonly item: ListItem

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
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
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns expose object / объект экспонирования
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
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
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
        control: this.getSubClass('control'),
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
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered VNode or undefined / отрендеренный VNode или undefined
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
      ...this.renderControl(),
      ...this.item.ripple.render()
    )

    return h(
      this.item.tag,
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        ...this.item.binds,
        ...this.item.aria
      },
      children
    )
  }

  /**
   * Method for rendering the main part of the component.
   *
   * Метод для рендеринга основной части компонента.
   * @returns array of virtual nodes / массив виртуальных узлов
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
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderContext = (): VNode[] => {
    return [
      h(
        'div',
        { class: this.classes?.value.context },
        [
          ...this.item.prefix.render(),
          ...this.item.label.render(),
          ...this.item.caption.render(),
          ...this.item.suffix.render(),
          ...this.item.badge.render()
        ]
      )
    ]
  }

  /**
   * Method for rendering the control part of the component.
   *
   * Метод для рендеринга управляющей части компонента.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderControl = (): VNode[] => {
    const children: VNode[] = []

    switch (this.props.selectionStyle) {
      case 'checkbox':
        this.components.renderAdd(
          children,
          'checkbox',
          toBinds(
            this.props.checkboxAttrs,
            {
              value: this.props.selected
            }
          )
        )
        break
      case 'radio':
        this.components.renderAdd(
          children,
          'radio',
          toBinds(
            this.props.radioAttrs,
            {
              value: this.props.selected
            }
          )
        )
        break
      case 'checkmark':
        if (this.props.selected) {
          this.components.renderAdd(
            children,
            'icon',
            getBind(this.props.iconCheckbox, 'icon')
          )
        }
        break
    }

    if (children.length > 0) {
      return [
        h(
          'div',
          { class: this.classes?.value.control },
          children
        )
      ]
    }

    return []
  }
}
