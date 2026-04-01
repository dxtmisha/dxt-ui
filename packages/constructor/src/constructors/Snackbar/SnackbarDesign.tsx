import { h, markRaw, Teleport, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Snackbar } from './Snackbar'

import type { SnackbarValue } from './basicTypes'
import {
  type SnackbarPropsBasic
} from './props'
import {
  type SnackbarClasses,
  type SnackbarComponents,
  type SnackbarEmits,
  type SnackbarExpose,
  type SnackbarSlots
} from './types'

/**
 * SnackbarDesign
 */
export class SnackbarDesign<
  COMP extends SnackbarComponents,
  EXPOSE extends SnackbarExpose,
  CLASSES extends SnackbarClasses,
  P extends SnackbarPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SnackbarEmits,
    EXPOSE,
    SnackbarSlots,
    CLASSES,
    P
  > {
  protected readonly item: Snackbar

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
    options?: ConstrOptions<COMP, SnackbarEmits, P>,
    ItemConstructor: typeof Snackbar = Snackbar
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
      isItem: this.item.data.isItem,
      add: this.item.data.add,
      remove: this.item.data.remove,
      clear: this.item.data.clear
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
        item: this.getSubClass('item'),
        space: this.getSubClass('space'),
        priority: this.getSubClass('priority')
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
    if (this.item.data.isItem.value) {
      return h(
        Teleport,
        {
          key: 'teleport',
          to: 'body'
        },
        h(
          'div',
          {
            ...this.getAttrs(),
            ref: this.element,
            class: this.classes?.value.main
          },
          [
            ...this.renderData(),
            ...this.renderSpace()
          ]
        )
      )
    }

    return undefined
  }

  /**
   * Rendering a list of elements.
   *
   * Рендер списка элементов.
   */
  protected readonly renderData = (): VNode[] => {
    const children: any[] = []

    this.item.data.item.value.forEach(
      item => children.push(h(
        'aside',
        {
          'key': item.value,
          'class': {
            [this.classes?.value.item ?? 'item']: true,
            [this.classes?.value.priority ?? 'priority']: item.highPriority
          },
          'data-snackbar-item': item.value
        },
        this.renderItem(item)
      ))
    )

    return children
  }

  /**
   * Element rendering.
   *
   * Рендер элемента.
   * @param item add element / элемент добавления
   */
  protected readonly renderItem = (item: SnackbarValue): VNode => {
    if (item.component) {
      const component = { ...markRaw(item.component) }

      return h(
        component,
        {
          ...item.data,
          value: item.value,
          onClose: this.item.onClose
        }
      )
    }

    return this.components.renderOne(
      'snackbarItem',
      {
        ...item.data,
        value: item.value,
        onClose: this.item.onClose
      },
      undefined,
      item.value
    ) as VNode
  }

  /**
   * Render separators by priority.
   *
   * Рендер разделителей по приоритету.
   */
  protected readonly renderSpace = (): VNode[] => {
    if (this.item.data.isPriority.value) {
      return [
        h('div', { class: this.classes?.value.space })
      ]
    }

    return []
  }
}
