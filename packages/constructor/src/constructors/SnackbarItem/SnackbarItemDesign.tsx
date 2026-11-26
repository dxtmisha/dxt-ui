import { h, mergeProps, toRaw, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

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
 * SnackbarItemDesign constructor class responsible for assembling and rendering the SnackbarItem component.
 * Manages subclass resolution, root element attribute merging, and rendering of tool, context, body, and actions areas.
 *
 * Класс-конструктор SnackbarItemDesign, отвечающий за сборку и рендеринг компонента SnackbarItem.
 * Управляет разрешением подклассов, слиянием атрибутов корневого элемента и рендерингом областей инструмента, контекста, тела и действий.
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
  /** SnackbarItem logic orchestrator instance / Экземпляр логического оркестратора SnackbarItem */
  protected readonly item: SnackbarItem

  /**
   * Constructor for SnackbarItemDesign.
   *
   * Конструктор для SnackbarItemDesign.
   * @param name class name / название класса
   * @param props component properties / свойства компонента
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor SnackbarItem logic class / класс логики SnackbarItem
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties object / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns custom classes object / объект пользовательских классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        tool: this.naming.getSubClass('tool'),
        icon: this.naming.getSubClass('icon'),
        trailing: this.naming.getSubClass('trailing'),
        context: this.naming.getSubClass('context'),
        label: this.naming.getSubClass('label'),
        description: this.naming.getSubClass('description'),
        body: this.naming.getSubClass('body'),
        button: this.naming.getSubClass('button'),
        close: this.naming.getSubClass('close'),
        actions: this.naming.getSubClass('actions')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns custom styles object / объект пользовательских стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node / виртуальная нода
   */
  protected initRender(): VNode {
    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        this.item.aria,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      [
        ...this.renderMain(),
        ...this.item.callInstance('actions', item => item.render(), [])
      ]
    )
  }

  /**
   * Rendering part of the content including icon, context, action button, and close button.
   *
   * Рендер основной части содержимого, включая иконку, контекст, кнопку действия и кнопку закрытия.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderMain = (): VNode[] => {
    return [
      h(
        'div',
        this.getKeyClass('tool'),
        [
          ...this.item.callInstance('icon', item => item.render(), []),
          ...this.renderContext(),
          ...this.item.callInstance('button', item => item.render(), []),
          ...this.item.callInstance('buttonClose', item => item.render(), [])
        ]
      )
    ]
  }

  /**
   * Context area rendering including label, description, and body content.
   *
   * Рендер зоны контекста, включая метку, описание и содержимое тела.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderContext = (): VNode[] => {
    return [
      h(
        'div',
        this.getKeyClass('context'),
        [
          ...this.item.callInstance('label', item => item.render(), []),
          ...this.item.callInstance('description', item => item.render(), []),
          ...this.renderBody()
        ]
      )
    ]
  }

  /**
   * Rendering of the body content from HTML string, body slot, or custom component.
   *
   * Рендер содержимого тела из HTML-строки, слота body или пользовательского компонента.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderBody = (): VNode[] => {
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
        typeof this.props.component === 'string'
          ? h(this.props.component, this.props.componentProps)
          : h(toRaw(this.props.component), this.props.componentProps)
      ))
    }

    return children
  }
}
