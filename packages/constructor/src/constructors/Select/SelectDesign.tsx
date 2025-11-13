import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Select } from './Select'

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
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SelectEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Select(
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
  protected initRender(): VNode {
    // const children: any[] = []

    return h('div', {
      // ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    })
  }

  /**
   * Rendering the menu element.<br>
   * Рендер элемента меню.
   * @param input data for the input element /<br>данные для элемента ввода
   */
  protected readonly renderData = (input: FieldSetup['slotInput']): VNode[] => {
    const setup = this.setup()

    return [
      setup.renderInput(input),
      ...setup.renderMenu(
        {
          control: (binds: UseMenuControl) => {
            if (this.props.editValue) {
              return h(
                'input',
                {
                  ...binds.binds,
                  'placeholder': this.props.placeholder,
                  'class': [
                    binds.binds.class,
                    binds.classesWindow.controlOpenOnly,
                    input.className
                  ],
                  'value': setup.value.value,
                  'data-menu-control': '1',
                  'onInput': setup.onSelect
                }
              )
            }

            return this.components.renderOne('selectValue', {
              ...binds.binds,
              class: [
                binds.binds.class,
                input.className
              ],
              value: binds.selectedList.value,
              multiple: this.props.multiple,
              placeholder: this.props.placeholder,
              onClick: setup.onSelect
            })
          },
          top: props => this.renderTop(props),
          bottom: props => this.initSlot('bottom', undefined, props)
        },
        {
          selected: setup.value.value,
          filter: this.item.filter.value
        }
      )
    ]
  }

  protected readonly renderInput = (input: FieldSetup['slotInput']): VNode => {
    const setup = this.setup()

    return h('input', {
      ...setup.inputBind.value,
      ref: this.element,
      id: input.id,
      class: input.classHidden,
      onInput: setup.onInput
    })
  }

  protected readonly renderTop = (props: UseMenuControl) => {
    const setup = this.setup()
    const children: any[] = []

    if (this.props.showSearch) {
      children.push(
        h(
          'div',
          {
            class: [
              setup.classes.value.input,
              props.classesWindow.static
            ]
          },
          this.components.renderOne(
            'input',
            {
              icon: this.props.iconSearch,
              onInput: (_: Event, { value }: { value: string }) => {
                this.item.filter.value = value
              },
              inputAttrs: {
                'data-menu-control': '1'
              }
            }
          )
        )
      )
    }

    this.initSlot('top', children, props)

    return children
  }
}
