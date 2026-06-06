import { h, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import type { ButtonPropsBasic } from '../Button'
import type { MenuControlItem } from '../Menu'
import { Pagination } from './Pagination'

import {
  type PaginationPropsBasic
} from './props'
import {
  type PaginationClasses,
  type PaginationComponents,
  type PaginationEmits,
  type PaginationExpose,
  type PaginationSlots
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
   * Initializes Exposed APIs and properties for external reference.
   *
   * Инициализирует公開ные API и свойства для внешних ссылок.
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
        button: this.getSubClass('button'),
        more: this.getSubClass('more'),
        spacer: this.getSubClass('spacer'),
        text: this.getSubClass('text'),
        menu: this.getSubClass('menu'),
        info: this.getSubClass('info'),
        navigation: this.getSubClass('navigation')
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
   * @returns assembled Vue VNode object / собранный объект Vue VNode
   */
  protected initRender(): VNode | undefined {
    if (
      !this.props.hideIfOne
      || this.item.page.pagesCount > 1
    ) {
      const children: any[] = [
        ...this.renderMore(),
        ...this.renderInfo(),
        ...this.renderSpacer(),
        ...this.renderNavigation()
      ]

      const menu = this.renderMenu()
      if (menu) {
        children.push(...menu)
      }

      return h('div', {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main
      }, children)
    }

    return undefined
  }

  /**
   * Renders the "Show more" button if configured and visible.
   *
   * Рендерит кнопку «Показать еще», если она настроена и видима.
   * @returns rendered button element or undefined / рендерируемый элемент кнопки или undefined
   */
  readonly renderMore = (): VNode[] => {
    if (this.item.button.showMore()) {
      const node = this.renderButton({
        ...this.item.button.more,
        class: this.classes?.value.more
      })

      if (node) {
        return [node]
      }
    }

    return []
  }

  /**
   * Renders the page range information section.
   *
   * Рендерит секцию информации о диапазоне страниц.
   * @returns info text element or undefined / элемент информационного текста или undefined
   */
  readonly renderInfo = (): VNode[] => {
    if (this.props.showInfo) {
      return [h(
        'div',
        { class: this.classes?.value.info },
        this.item.page.info.value
      )]
    }

    return []
  }

  /**
   * Renders the rows per page limit selector menu.
   *
   * Рендерит меню выбора количества строк на странице.
   * @returns list of nodes for menu section or undefined / список узлов для секции меню или undefined
   */
  readonly renderMenu = (): VNode[] | undefined => {
    if (
      this.props.menu
      && this.props.menu.length > 0
    ) {
      return [
        h('div', { class: this.classes?.value.text }, this.item.menuRows.labelRowsPerPage),
        h('div', { class: this.classes?.value.menu }, [
          this.components.renderOne('menu', {
            'list': this.item.menuRows.menuList.value,
            'selected': this.props.rows,
            ...this.props.menuAttrs,
            'onUpdate:selected': (value: any) => this.item.event.onRows(undefined as any, {
              type: 'rows',
              value: Number(value),
              detail: undefined
            })
          }, {
            control: (menuProps: MenuControlItem) => {
              return this.renderButton({
                ...this.item.button.menu,
                text: this.props.rows?.toString(),
                iconTrailing: this.props.iconArrowDown,
                iconTrailingTurnOnly: true,
                iconTurn: menuProps.open.value,
                ...menuProps.binds
              })
            }
          })
        ])
      ]
    }
    return undefined
  }

  /**
   * Renders the page navigation control buttons list.
   *
   * Рендерит список кнопок управления постраничной навигацией.
   * @returns navigation container element or undefined / элемент контейнера навигации или undefined
   */
  readonly renderNavigation = (): VNode[] => {
    if (this.props.showPagination) {
      return [h(
        'div',
        { class: this.classes?.value.navigation },
        [
          ...this.renderFirst(),
          ...this.renderBack(),
          ...this.renderPagination(),
          ...this.renderNext(),
          ...this.renderLast()
        ]
      )]
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

    this.item.button.pagination.value.forEach((pageProps) => {
      const node = this.renderButton(pageProps)

      if (node) {
        children.push(node)
      }
    })

    return children
  }

  /**
   * Renders the "First page" navigation button.
   *
   * Рендерит кнопку навигации «Первая страница».
   * @returns array of virtual button nodes / массив виртуальных узлов кнопок
   */
  readonly renderFirst = (): VNode[] => {
    if (this.props.showFirstLast) {
      const node = this.renderButton(this.item.button.first)

      if (node) {
        return [node]
      }
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
      const node = this.renderButton(this.item.button.last)

      if (node) {
        return [node]
      }
    }

    return []
  }

  /**
   * Renders the "Back" page navigation button.
   *
   * Рендерит кнопку навигации «Назад».
   * @returns array of virtual button nodes / массив виртуальных узлов кнопок
   */
  readonly renderBack = (): VNode[] => {
    if (this.props.showArrows) {
      const node = this.renderButton(this.item.button.back)

      if (node) {
        return [node]
      }
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
      const node = this.renderButton(this.item.button.next)

      if (node) {
        return [node]
      }
    }

    return []
  }

  /**
   * Renders a button component.
   *
   * Рендерит компонент кнопки.
   * @param props button binding properties / свойства привязки кнопки
   * @returns button virtual node or undefined / виртуальный узел кнопки или undefined
   */
  readonly renderButton = (props: ConstrBind<ButtonPropsBasic>): VNode | undefined => {
    return this.components.renderOne(
      'button',
      toBinds(
        props,
        { class: this.classes?.value.button }
      ))
  }

  /**
   * Renders the spacer element.
   *
   * Рендерит элемент-разделитель.
   * @returns spacer element / элемент-разделитель
   */
  readonly renderSpacer = (): VNode[] => {
    return [h('div', { class: this.classes?.value.spacer })]
  }
}
