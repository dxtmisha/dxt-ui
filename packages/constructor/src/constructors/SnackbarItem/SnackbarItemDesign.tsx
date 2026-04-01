import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { SnackbarItem } from './SnackbarItem'

import {
  type SnackbarItemPropsBasic
} from './props'
import {
  type SnackbarItemClasses,
  type SnackbarItemComponents,
  type SnackbarItemEmits,
  type SnackbarItemExpose,
  type SnackbarItemSlots
} from './types'

/**
 * SnackbarItemDesign
 */
export class SnackbarItemDesign<
  COMP extends SnackbarItemComponents,
  EXPOSE extends SnackbarItemExpose,
  CLASSES extends SnackbarItemClasses,
  P extends SnackbarItemPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SnackbarItemEmits,
    EXPOSE,
    SnackbarItemSlots,
    CLASSES,
    P
  > {
  protected readonly item: SnackbarItem

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
    options?: ConstrOptions<COMP, SnackbarItemEmits, P>,
    ItemConstructor: typeof SnackbarItem = SnackbarItem
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
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
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
        tool: this.getSubClass('tool'),
        icon: this.getSubClass('icon'),
        trailing: this.getSubClass('trailing'),
        context: this.getSubClass('context'),
        label: this.getSubClass('label'),
        description: this.getSubClass('description'),
        body: this.getSubClass('body'),
        button: this.getSubClass('button'),
        close: this.getSubClass('close'),
        actions: this.getSubClass('actions')
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
        class: this.classes?.value.main,
        ...AriaStaticInclude.role(this.props.role),
        ...AriaStaticInclude.atomic(true)
      },
      [
        ...this.renderMain(),
        ...this.item.actions.render()
      ]
    )
  }

  /**
   * Rendering part of the content.
   *
   * Рендер части содержимого.
   */
  protected readonly renderMain = (): VNode[] => {
    return [
      h(
        'div',
        {
          key: 'tool',
          class: this.classes?.value.tool
        },
        [
          ...this.item.icon.render(),
          ...this.renderContext(),
          ...this.item.button.render({
            class: this.classes?.value.button
          }),
          ...this.renderClose()
        ]
      )
    ]
  }

  /**
   * Description area rendering.
   *
   * Рендер зоны описания.
   */
  protected readonly renderContext = (): VNode[] => {
    return [
      h(
        'div',
        {
          key: 'context',
          class: this.classes?.value.context
        },
        [
          ...this.item.label.render(),
          ...this.item.description.render(),
          ...this.renderBody()
        ]
      )
    ]
  }

  /**
   * Rendering of the body content in the body slot.
   *
   * Рендер тела, содержимый в слоте body.
   */
  protected readonly renderBody = (): VNode[] => {
    const children: VNode[] = []

    if (this.props.html) {
      children.push(h(
        'div',
        {
          key: 'body',
          class: this.classes?.value.body,
          innerHTML: this.props.html
        }
      ))
    }

    if (
      this.slots
      && 'body' in this.slots
    ) {
      children.push(h(
        'div',
        {
          key: 'body-slot',
          class: this.classes?.value.body
        },
        this.initSlot('body')
      ))
    }

    if (this.props.component) {
      children.push(h(
        'div',
        {
          key: 'body-component',
          class: this.classes?.value.body
        },
        h(this.props.component, this.props.componentProps)
      ))
    }

    return children
  }

  /**
   * Generates an element to display the close button.
   *
   * Генерирует элемент для вывода кнопки закрытия.
   */
  readonly renderClose = (): VNode[] => {
    if (this.props.closeButton) {
      return this.components.render(
        'button',
        {
          key: 'button-close',
          class: this.classes?.value.close,
          icon: this.props.iconClose,
          ...AriaStaticInclude.label(this.item.text.close.value)
        }
      )
    }

    return []
  }
}
