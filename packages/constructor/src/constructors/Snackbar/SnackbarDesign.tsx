import { h, mergeProps, toRaw, type VNode } from 'vue'
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
 * SnackbarDesign constructor class responsible for assembling, teleporting, and rendering
 * the Snackbar notification container, priority spacers, and individual notification items.
 *
 * Класс-конструктор SnackbarDesign, отвечающий за сборку, телепортацию и рендеринг
 * контейнера уведомлений Snackbar, разделителей приоритета и отдельных элементов уведомлений.
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
  /** Snackbar logic orchestrator instance / Экземпляр логического оркестратора Snackbar */
  protected readonly item: Snackbar

  /**
   * Constructor for SnackbarDesign.
   *
   * Конструктор для SnackbarDesign.
   * @param name class name / название класса
   * @param props component properties / свойства компонента
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor Snackbar logic class / класс логики Snackbar
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
   * @returns exposed methods object / объект экспортируемых методов
   */
  protected initExpose(): EXPOSE {
    return {
      isItem: () => this.item.i('data').isItem(),
      add: (item: SnackbarValue) => this.item.i('data').add(item),
      remove: (value: string) => this.item.i('data').remove(value),
      clear: () => this.item.i('data').clear()
    } as EXPOSE
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
        item: this.naming.getSubClass('item'),
        space: this.naming.getSubClass('space'),
        priority: this.naming.getSubClass('priority')
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
   * @returns list of virtual nodes / список виртуальных узлов
   */
  protected initRender(): VNode[] {
    if (this.item.i('data').isItem()) {
      return this.item.i('teleport').render(
        h(
          'div',
          mergeProps(
            this.getAttrs(),
            this.item.binds,
            {
              ref: this.element,
              class: this.classes?.value.main,
              style: this.styles?.value
            }
          ),
          [
            ...this.renderData(),
            ...this.renderSpace()
          ]
        )
      )
    }

    return []
  }

  /**
   * Renders the list of notification wrapper elements.
   *
   * Рендерит список элементов-обёрток уведомлений.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderData = (): VNode[] => {
    const children: VNode[] = []

    this.item.i('data').item.value.forEach(
      item => children.push(h(
        item.highPriority ? 'aside' : 'div',
        {
          'key': item.value,
          'class': {
            [this.classes?.value.item ?? 'item']: true,
            [this.classes?.value.priority ?? 'priority']: Boolean(item.highPriority)
          },
          'data-snackbar-item': item.value
        },
        this.renderItem(item)
      ))
    )

    return children
  }

  /**
   * Renders an individual notification item using a custom component or the connected `snackbarItem` component.
   *
   * Рендерит отдельный элемент уведомления через пользовательский компонент или подключённый компонент `snackbarItem`.
   * @param item notification configuration object / объект конфигурации уведомления
   * @returns virtual node or undefined / виртуальный узел или undefined
   */
  readonly renderItem = (item: SnackbarValue): VNode | undefined => {
    const props = mergeProps(
      item.data ?? {},
      {
        value: item.value,
        onClose: this.item.onClose
      }
    )

    if (item.component) {
      return typeof item.component === 'string'
        ? h(item.component, props)
        : h(toRaw(item.component), props)
    }

    return this.components?.renderOne(
      'snackbarItem',
      props,
      undefined,
      item.value
    )
  }

  /**
   * Renders the priority separator element when at least one high-priority item exists.
   *
   * Рендерит элемент-разделитель по приоритету при наличии хотя бы одного приоритетного уведомления.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderSpace = (): VNode[] => {
    if (this.item.i('data').isPriority()) {
      return [
        h('div', this.getKeyClass('space'))
      ]
    }

    return []
  }
}
