import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import type { ButtonPropsBasic } from '../Button'
import type { MenuControlItem } from '../Menu'
import { Pagination } from './Pagination'
import { PaginationMenuRows } from './PaginationMenuRows'

import type { PaginationPropsBasic } from './props'
import type {
  PaginationClasses,
  PaginationComponents,
  PaginationEmits,
  PaginationExpose,
  PaginationSlots
} from './types'

/**
 * PaginationDesign class responsible for assembling the VNode tree, styles, classes, and reactive templates for Vue.
 * It connects the visual representation layer (markup and slots) with the orchestrator business logic (Pagination).
 *
 * Класс PaginationDesign, отвечающий за сборку дерева VNode, стилей, классов и реактивных шаблонов для Vue.
 * Он связывает слой визуального представления (разметку и слоты) с бизнес-логикой оркестратора (Pagination).
 */
export class PaginationDesign<
  COMP extends PaginationComponents,
  EXPOSE extends PaginationExpose,
  CLASSES extends PaginationClasses,
  P extends PaginationPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    PaginationEmits,
    EXPOSE,
    PaginationSlots,
    CLASSES,
    P
  > {
  /** Business logic orchestrator instance / Экземпляр оркестратора бизнес-логики */
  protected readonly item: Pagination

  /**
   * Constructor for component design layer.
   *
   * Конструктор слоя представления компонента.
   * @param name base component class name / базовое имя класса компонента
   * @param props reactive input properties / реактивные входные свойства
   * @param options set of configuration options / набор параметров конфигурации
   * @param ItemConstructor component logical core constructor / конструктор логического ядра компонента
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, PaginationEmits, P>,
    ItemConstructor: typeof Pagination = Pagination
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
   * Renders the "Back" page navigation button.
   *
   * Рендерит кнопку навигации «Назад».
   * @returns array of virtual button nodes / массив виртуальных узлов кнопок
   */
  readonly renderBack = (): VNode[] => {
    if (this.props.showArrows) {
      const node = this.renderButton(this.item.i('button').back)

      if (node) {
        return [node]
      }
    }

    return []
  }

  /**
   * Renders a button component with merged pagination button class.
   *
   * Рендерит компонент кнопки с объединённым классом кнопки пагинации.
   * @param props button binding properties / свойства привязки кнопки
   * @param index button preset key or identifier / ключ пресета или идентификатор кнопки
   * @returns button virtual node or undefined / виртуальный узел кнопки или undefined
   */
  readonly renderButton = (
    props: ConstrBind<ButtonPropsBasic>,
    index: string | undefined = props.selected ? 'selected' : undefined
  ): VNode | undefined => {
    return this.components?.renderOne(
      'button',
      mergeProps(
        props,
        { class: this.classes?.value.button }
      ),
      undefined,
      index
    )
  }

  /**
   * Renders the decorative ellipsis separator element with a unique key and aria-hidden.
   *
   * Рендерит декоративный элемент многоточия-разделителя с уникальным ключом и aria-hidden.
   * @param key unique VNode key for the ellipsis / уникальный ключ VNode для многоточия
   * @returns array containing ellipsis node / массив, содержащий узел многоточия
   */
  readonly renderEllipsis = (key: string = 'ellipsis'): VNode[] => {
    return [
      h(
        'span',
        {
          key,
          class: this.classes?.value.ellipsis,
          ...AriaStaticInclude.hidden()
        },
        this.props.ellipsis
      )
    ]
  }

  /**
   * Renders the "First page" navigation button.
   *
   * Рендерит кнопку навигации «Первая страница».
   * @returns array of virtual button nodes / массив виртуальных узлов кнопок
   */
  readonly renderFirst = (): VNode[] => {
    if (this.props.showFirstLast) {
      const node = this.renderButton(this.item.i('button').first)

      if (node) {
        return [node]
      }
    }

    return []
  }

  /**
   * Renders the first ellipsis separator.
   *
   * Рендерит первое многоточие-разделитель.
   * @returns array containing ellipsis node or empty / массив, содержащий узел многоточия или пустой
   */
  readonly renderFirstEllipsis = (): VNode[] => {
    if (this.item.i('button').showFirstEllipsis.value) {
      return this.renderEllipsis('ellipsisFirst')
    }

    return []
  }

  /**
   * Renders the page range information section.
   *
   * Рендерит секцию информации о диапазоне страниц.
   * @returns array containing info text element or empty / массив, содержащий элемент информационного текста или пустой
   */
  readonly renderInfo = (): VNode[] => {
    if (this.props.showInfo) {
      return [
        h(
          'div',
          this.getKeyClass('info'),
          this.item.i('page').info.value
        )
      ]
    }

    return []
  }

  /**
   * Renders the "Last page" navigation button.
   *
   * Рендерит кнопку навигации «Последняя страница».
   * @returns array of virtual button nodes / массив виртуальных узлов кнопок
   */
  readonly renderLast = (): VNode[] => {
    if (this.props.showFirstLast) {
      const node = this.renderButton(this.item.i('button').last)

      if (node) {
        return [node]
      }
    }

    return []
  }

  /**
   * Renders the last ellipsis separator.
   *
   * Рендерит последнее многоточие-разделитель.
   * @returns array containing ellipsis node or empty / массив, содержащий узел многоточия или пустой
   */
  readonly renderLastEllipsis = (): VNode[] => {
    if (this.item.i('button').showLastEllipsis.value) {
      return this.renderEllipsis('ellipsisLast')
    }

    return []
  }

  /**
   * Renders the rows per page limit selector menu lazily via callInstance.
   *
   * Лениво рендерит меню выбора количества строк на странице через callInstance.
   * @returns list of nodes for menu section or empty / список узлов для секции меню или пустой
   */
  readonly renderMenu = (): VNode[] => {
    return this.item.callInstance(
      'menuRows',
      (menuRows) => {
        if (!PaginationMenuRows.is(this.props)) {
          return []
        }

        const children: VNode[] = [
          ...this.renderMenuLabel(menuRows),
          ...this.renderMenuControl(menuRows)
        ]

        return [
          h('div', this.getKeyClass('menuRows'), children)
        ]
      },
      []
    )
  }

  /**
   * Renders the menu button used as the control slot of the rows per page menu.
   *
   * Рендерит кнопку меню, используемую в слоте управления меню количества строк на странице.
   * @param menuProps menu control slot properties / свойства слота управления меню
   * @returns button virtual node or undefined / виртуальный узел кнопки или undefined
   */
  readonly renderMenuButton = (menuProps: MenuControlItem): VNode | undefined => {
    return this.renderButton(
      mergeProps(
        this.item.i('button').menu,
        { iconTurn: menuProps.open.value },
        menuProps.binds
      )
    )
  }

  /**
   * Renders the limit selector menu control.
   *
   * Рендерит элемент управления меню выбора лимита.
   * @param menuRows menu rows manager instance / экземпляр менеджера меню количества строк
   * @returns array containing menu VNode or empty / массив с VNode меню или пустой
   */
  readonly renderMenuControl = (
    menuRows: PaginationMenuRows = this.item.i('menuRows')
  ): VNode[] => {
    const menu = this.components?.renderOne(
      'menu',
      menuRows.binds,
      { control: this.renderMenuButton }
    )

    if (menu) {
      return [menu]
    }

    return []
  }

  /**
   * Renders the menu label text for rows per page.
   *
   * Рендерит текстовую метку меню количества строк на странице.
   * @param menuRows menu rows manager instance / экземпляр менеджера меню количества строк
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderMenuLabel = (
    menuRows: PaginationMenuRows = this.item.i('menuRows')
  ): VNode[] => {
    if (this.props.showRowsPerPageLabel) {
      return [
        h(
          'div',
          this.getKeyClass('menuRowsLabel'),
          menuRows.labelRowsPerPage
        )
      ]
    }

    return []
  }

  /**
   * Renders the "Show more" button if configured and visible.
   *
   * Рендерит кнопку «Показать еще», если она настроена и видима.
   * @returns array containing rendered button node or empty / массив с отрендеренной кнопкой или пустой
   */
  readonly renderMore = (): VNode[] => {
    if (
      this.props.showMore
      && this.item.i('button').showMore()
    ) {
      const node = this.renderButton(
        mergeProps(
          this.item.i('button').more,
          { class: this.classes?.value.more }
        ),
        'more'
      )

      if (node) {
        return [node]
      }
    }

    return []
  }

  /**
   * Renders the "Show previous" button if configured and visible.
   *
   * Рендерит кнопку «Показать предыдущие», если она настроена и видима.
   * @returns array containing rendered button node or empty / массив с отрендеренной кнопкой или пустой
   */
  readonly renderMorePrev = (): VNode[] => {
    if (
      this.props.showMorePrev
      && this.item.i('button').showMorePrev()
    ) {
      const node = this.renderButton(
        mergeProps(
          this.item.i('button').morePrev,
          { class: this.classes?.value.morePrev }
        ),
        'morePrev'
      )

      if (node) {
        return [node]
      }
    }

    return []
  }

  /**
   * Renders the page navigation control buttons list.
   *
   * Рендерит список кнопок управления постраничной навигацией.
   * @returns array containing navigation container element or empty / массив с элементом контейнера навигации или пустой
   */
  readonly renderNavigation = (): VNode[] => {
    if (this.props.showPagination) {
      return [
        h(
          'div',
          this.getKeyClass('navigation'),
          [
            ...this.renderFirst(),
            ...this.renderBack(),
            ...this.renderPaginationFirst(),
            ...this.renderFirstEllipsis(),
            ...this.renderPagination(),
            ...this.renderLastEllipsis(),
            ...this.renderPaginationLast(),
            ...this.renderNext(),
            ...this.renderLast()
          ]
        )
      ]
    }

    return []
  }

  /**
   * Renders the "Next" page navigation button.
   *
   * Рендерит кнопку навигации «Вперед».
   * @returns array of virtual button nodes / массив виртуальных узлов кнопок
   */
  readonly renderNext = (): VNode[] => {
    if (this.props.showArrows) {
      const node = this.renderButton(this.item.i('button').next)

      if (node) {
        return [node]
      }
    }

    return []
  }

  /**
   * Renders the list of page number button components.
   *
   * Рендерит список компонентов числовых кнопок страниц.
   * @returns array of page button nodes / массив узлов кнопок страниц
   */
  readonly renderPagination = (): VNode[] => {
    const children: VNode[] = []
    const items = this.item.i('button').pagination.value
    const length = items.length

    for (let index = 0; index < length; index++) {
      const node = this.renderButton(items[index] as ConstrBind<ButtonPropsBasic>)

      if (node) {
        children.push(node)
      }
    }

    return children
  }

  /**
   * Renders the list of first page number button components.
   *
   * Рендерит список компонентов числовых кнопок первых страниц.
   * @returns array of page button nodes / массив узлов кнопок страниц
   */
  readonly renderPaginationFirst = (): VNode[] => {
    const children: VNode[] = []
    const items = this.item.i('button').paginationFirst.value
    const length = items.length

    for (let index = 0; index < length; index++) {
      const node = this.renderButton(items[index] as ConstrBind<ButtonPropsBasic>)

      if (node) {
        children.push(node)
      }
    }

    return children
  }

  /**
   * Renders the list of last page number button components.
   *
   * Рендерит список компонентов числовых кнопок последних страниц.
   * @returns array of page button nodes / массив узлов кнопок страниц
   */
  readonly renderPaginationLast = (): VNode[] => {
    const children: VNode[] = []
    const items = this.item.i('button').paginationLast.value
    const length = items.length

    for (let index = 0; index < length; index++) {
      const node = this.renderButton(items[index] as ConstrBind<ButtonPropsBasic>)

      if (node) {
        children.push(node)
      }
    }

    return children
  }

  /**
   * Renders the spacer element.
   *
   * Рендерит элемент-разделитель.
   * @returns array containing spacer element / массив с элементом-разделителем
   */
  readonly renderSpacer = (): VNode[] => {
    return [h('div', this.getKeyClass('spacer'))]
  }

  /**
   * Initializes exposed APIs and properties for external reference.
   *
   * Инициализирует публичные API и свойства для внешних ссылок.
   * @returns object containing exposed properties / объект, содержащий экспонируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Computes dynamic CSS class configuration mapping based on component configuration and styling modifiers.
   *
   * Вычисляет карту конфигурации динамических CSS-классов на основе настроек компонента и модификаторов стилей.
   * @returns partial mapping of dynamic class names / частичная карта динамических имен классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        button: this.naming.getSubClass('button'),
        navigation: this.naming.getSubClass('navigation'),
        more: this.naming.getSubClass('more'),
        morePrev: this.naming.getSubClass('morePrev'),
        info: this.naming.getSubClass('info'),
        menuRows: this.naming.getSubClass('menuRows'),
        menuRowsLabel: this.naming.getSubClass('menuRows__label'),
        ellipsis: this.naming.getSubClass('ellipsis'),
        spacer: this.naming.getSubClass('spacer')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Initializes and calculates inline dynamic CSS style properties mapping.
   *
   * Инициализирует и рассчитывает карту инлайновых динамических свойств CSS-стилей.
   * @returns calculated dynamic CSS styles mapping / рассчитанная карта динамических стилей CSS
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Core render method that generates the VNode tree hierarchy representing pagination elements (Show more, limits, info, page controls).
   *
   * Основной метод рендеринга, который генерирует иерархию дерева VNode, представляющую элементы пагинации (Показать еще, лимиты, инфо, переключатели страниц).
   * @returns assembled Vue VNode object or undefined when hidden / собранный объект Vue VNode или undefined при скрытии
   */
  protected initRender(): VNode | undefined {
    if (this.item.isRender()) {
      const children: VNode[] = []

      this.initSlot('leading', children)
      children.push(
        ...this.renderMorePrev(),
        ...this.renderMore(),
        ...this.renderInfo(),
        ...this.renderMenu()
      )
      this.initSlot('info', children)
      children.push(
        ...this.renderSpacer(),
        ...this.renderNavigation()
      )
      this.initSlot('trailing', children)

      return h(
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
        children
      )
    }

    return undefined
  }
}
