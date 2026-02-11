import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Select } from './Select'

import type { MenuControlItem } from '../Menu'
import type { FieldControl } from '../Field'
import {
  type SelectPropsBasic
} from './props'
import {
  type SelectClasses,
  type SelectComponents,
  type SelectEmits,
  type SelectExpose,
  type SelectSlots
} from './types'

/**
 * SelectDesign
 */
export class SelectDesign<
  COMP extends SelectComponents,
  EXPOSE extends SelectExpose,
  CLASSES extends SelectClasses,
  P extends SelectPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SelectEmits,
    EXPOSE,
    SelectSlots,
    CLASSES,
    P
  > {
  protected readonly item: Select

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SelectEmits, P>,
    ItemConstructor: typeof Select = Select
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
    const open = this.item.menu.expose.open.value

    return this.item.field.render(
      {
        default: this.renderMenu
      },
      {
        ...this.getAttrs(),
        focus: open,
        iconTurn: open,
        class: this.classes?.value.main,
        validationMessage: this.item.validation.message.value
      }
    )
  }

  /**
   * Rendering the menu element.
   *
   * Рендер элемента меню.
   * @param input data for the input element/ данные для элемента ввода
   */
  protected readonly renderMenu = (input: FieldControl): VNode[] => {
    return this.item.menu.render(
      {
        control: (props: MenuControlItem) => this.renderMenuControl(input, props),
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

  /**
   * Render menu control.
   *
   * Рендер элемента управления меню.
   * @param input data for the input element/ данные для элемента ввода
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderMenuControl = (
    input: FieldControl,
    props: MenuControlItem
  ): VNode | VNode[] => {
    const children: any[] = []

    if (!this.item.input.isEdit.value) {
      children.push(this.renderMenuControlValue(input, props))
    }

    children.push(
      this.renderMenuControlInput(input, props)
    )

    return children
  }

  /**
   * Render input element.
   *
   * Рендер элемента ввода.
   * @param input data for the input element/ данные для элемента ввода
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderMenuControlInput = (
    input: FieldControl,
    props: MenuControlItem
  ): VNode => {
    const isEdit = this.item.input.isEdit.value
    const className = isEdit ? input.className : input.classForFocus
    const menuControl = {
    }

    return h(
      'input',
      toBinds(
        this.item.input.binds.value,
        props.binds,
        {
          ref: this.element,
          id: input.id,
          value: this.item.value.get(),
          class: [
            props.classesWindow.controlOpenOnly,
            className
          ],
          ...AriaStaticInclude.role('combobox')
        },
        isEdit ? undefined : menuControl
      )
    )
  }

  /**
   * Render menu control in static mode.
   *
   * Рендер элемента управления меню в статическом режиме.
   * @param input data for the input element/ данные для элемента ввода
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderMenuControlValue = (
    input: FieldControl,
    props: MenuControlItem
  ): VNode => {
    return this.components.renderOne(
      'selectValue',
      toBinds(
        props.binds,
        {
          class: input.className,
          disabled: this.props.disabled,
          value: props.selectedList.value,
          multiple: this.props.multiple,
          placeholder: this.props.placeholder,
          onClick: this.item.event.onSelect,
          ...AriaStaticInclude.role('combobox')
        }
      )
    ) as VNode
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
