import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  type ListNames,
  toBinds
} from '@dxtmisha/functional'

import { MenuButton } from './MenuButton'

import type { MenuControlItem } from '../Menu/basicTypes'
import {
  type MenuButtonPropsBasic
} from './props'
import {
  type MenuButtonClasses,
  type MenuButtonComponents,
  type MenuButtonEmits,
  type MenuButtonExpose,
  type MenuButtonSlots
} from './types'

/**
 * MenuButtonDesign
 */
export class MenuButtonDesign<
  COMP extends MenuButtonComponents,
  EXPOSE extends MenuButtonExpose,
  CLASSES extends MenuButtonClasses,
  P extends MenuButtonPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  MenuButtonEmits,
  EXPOSE,
  MenuButtonSlots,
  CLASSES,
  P
> {
  protected readonly item: MenuButton

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MenuButtonEmits, P>,
    ItemConstructor: typeof MenuButton = MenuButton
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.menu.expose,
      value: this.item.value.item,
      checkValidity: this.item.validation.checkValidity,
      validationMessage: this.item.validation.message
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
        label: this.getSubClass('label'),
        separator: this.getSubClass('separator'),
        selected: this.getSubClass('selected'),
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
  protected initRender(): VNode[] {
    return this.item.menu.render(
      {
        control: (props: MenuControlItem) => this.renderButton(props),
        title: props => this.renderTitle(props),
        footer: props => this.initSlot('footer', undefined, props),
        contextTop: props => this.initSlot('contextTop', undefined, props),
        contextBottom: props => this.initSlot('contextBottom', undefined, props)
      },
      {
        selected: this.item.value.item.value,
        highlight: this.item.filter.get()
      }
    )
  }

  protected readonly renderButton = (props: MenuControlItem): VNode[] => {
    return this.item.button.render(
      props.binds,
      { default: () => this.renderButtonLabel(props.selectedNames?.value) }
    )
  }

  protected readonly renderButtonLabel = (selectedNames?: ListNames): VNode[] => {
    const hasValue = selectedNames && selectedNames.length > 0
    const children: any[] = []

    if (
      this.props.label
      && (
        !hasValue
        || !this.props.hideLabelValue
      )
    ) {
      children.push(
        h('span', { class: this.classes?.value.label }, this.props.label)
      )

      if (hasValue) {
        children.push(
          h('span', { class: this.classes?.value.separator }, this.props.labelSeparator)
        )
      }
    }

    if (hasValue) {
      children.push(
        h(
          'span',
          { class: this.classes?.value.selected },
          selectedNames.join(', ')
        )
      )
    }

    return children
  }

  /**
   * Render title element.
   *
   * Рендер элемента заголовка.
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderTitle = (props: MenuControlItem) => {
    const children: any[] = []

    if (this.props.showSearch) {
      children.push(this.renderFilterInput(props))
    }

    this.initSlot('title', children, props)

    return children
  }

  /**
   * Render filter input.
   *
   * Рендер фильтра ввода.
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderFilterInput = (props: MenuControlItem): VNode => {
    return h(
      'div',
      {
        class: [
          this.classes?.value.input,
          props.classesWindow.static
        ]
      },
      this.components.renderOne(
        'input',
        toBinds(
          {
            icon: this.props.iconSearch,
            onInputLite: this.item.filter.onInput,
            inputAttrs: {
              'data-menu-control': '1'
            }
          },
          this.props.inputSearchAttrs
        )
      )
    )
  }
}
