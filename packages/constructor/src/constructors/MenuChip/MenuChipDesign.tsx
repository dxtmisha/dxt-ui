import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  type ListNames
} from '@dxtmisha/functional'

import { MenuChip } from './MenuChip'

import {
  type MenuChipPropsBasic
} from './props'
import {
  type MenuChipClasses,
  type MenuChipComponents,
  type MenuChipEmits,
  type MenuChipExpose,
  type MenuChipSlots
} from './types'
import type { MenuControlItem } from '../Menu/basicTypes'

/**
 * MenuChipDesign
 */
export class MenuChipDesign<
  COMP extends MenuChipComponents,
  EXPOSE extends MenuChipExpose,
  CLASSES extends MenuChipClasses,
  P extends MenuChipPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    MenuChipEmits,
    EXPOSE,
    MenuChipSlots,
    CLASSES,
    P
  > {
  protected readonly item: MenuChip

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
    options?: ConstrOptions<COMP, MenuChipEmits, P>,
    ItemConstructor: typeof MenuChip = MenuChip
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
        selected: this.getSubClass('selected')
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
        control: (props: MenuControlItem) => [
          this.renderControl(props),
          this.renderInput()
        ],
        title: props => this.renderTitle(props),
        footer: props => this.initSlot('footer', undefined, props),
        contextTop: props => this.initSlot('contextTop', undefined, props),
        contextBottom: props => this.initSlot('contextBottom', undefined, props)
      },
      {
        selected: this.item.value.item.value
      }
    )
  }

  /**
   * Renders the trigger button component using bindings and labels.
   *
   * Рендерит компонент кнопки-триггера, используя привязки и метки.
   * @param props control item properties / свойства элемента управления
   * @returns rendered button nodes / отрендеренные узлы кнопки
   */
  protected readonly renderControl = (props: MenuControlItem): VNode[] => {
    return this.item.chip.render(
      {
        default: () => this.renderControlLabel(props.selectedNames?.value)
      },
      {
        ...props.binds,
        iconTurn: props.open.value
      }
    )
  }

  /**
   * Formats and renders the inner contents of the button, handling labels, separators, and values.
   *
   * Форматирует и рендерит внутреннее содержимое кнопки, обрабатывая метки, разделители и значения.
   * @param selectedNames list of selected option labels / список меток выбранных опций
   * @returns array of rendered nodes / массив отрендеренных узлов
   */
  protected readonly renderControlLabel = (selectedNames?: ListNames): VNode[] => {
    const children: any[] = []
    const hasValue = selectedNames
      && selectedNames.length > 0
      && !(this.props.hideValueIcon && this.props.icon)

    if (
      this.props.label
      && (
        !hasValue
        || !this.props.hideLabelValue
      )
    ) {
      if (hasValue) {
        children.push(
          h('span', { class: this.classes?.value.label }, this.props.label),
          h('span', { class: this.classes?.value.separator }, this.props.labelSeparator)
        )
      } else {
        children.push(
          this.props.label
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
   * Renders the hidden input element used to carry the value.
   *
   * Рендерит скрытый элемент ввода, используемый для передачи значения.
   * @returns hidden input node / узел скрытого ввода
   */
  protected readonly renderInput = (): VNode => {
    return h(
      'input',
      {
        name: this.props.name,
        value: this.item.value.get(),
        type: 'hidden'
      }
    )
  }

  /**
   * Renders the title element, including search inputs and slot wrappers.
   *
   * Рендерит элемент заголовка, включая поля ввода поиска и обертки слотов.
   * @param props data for the transferable property / данные для передаваемого свойства
   * @returns list of children nodes representing the title / список дочерних узлов, представляющих заголовок
   */
  protected readonly renderTitle = (props: MenuControlItem) => {
    const children: any[] = []

    this.initSlot('title', children, props)

    return children
  }
}
