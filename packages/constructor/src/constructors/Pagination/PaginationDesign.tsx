import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

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
import type { MenuControlItem } from '../Menu'

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
  protected initRender(): VNode {
    const children: any[] = []

    if (!this.props.hideIfOne || this.item.page.pagesCount > 1) {
      const more = this.renderMore()
      if (more) {
        children.push(more)
      }

      children.push(this.renderSpacer())

      const menu = this.renderMenu()
      if (menu) {
        children.push(...menu)
      }

      const info = this.renderInfo()
      if (info) {
        children.push(info)
      }

      children.push(this.renderNavigation())
    }

    return h('div', {
      ...this.getAttrs(),
      ...this.item.event.binds,
      ref: this.element,
      class: this.classes?.value.main
    }, children)
  }

  /**
   * Renders a button component.
   *
   * Рендерит компонент кнопки.
   * @param props button binding properties / свойства привязки кнопки
   * @returns button virtual node or undefined / виртуальный узел кнопки или undefined
   */
  readonly renderButton = (props: any): VNode | undefined => {
    return this.components.renderOne('button', props)
  }

  /**
   * Renders the page range information section.
   *
   * Рендерит секцию информации о диапазоне страниц.
   * @returns info text element or undefined / элемент информационного текста или undefined
   */
  readonly renderInfo = (): VNode | undefined => {
    if (this.props.showInfo) {
      return h('div', { class: this.classes?.value.info }, this.item.page.info.value)
    }
    return undefined
  }

  /**
   * Renders the rows per page limit selector menu.
   *
   * Рендерит меню выбора количества строк на странице.
   * @returns list of nodes for menu section or undefined / список узлов для секции меню или undefined
   */
  readonly renderMenu = (): VNode[] | undefined => {
    if (this.props.menu && this.props.menu.length > 0) {
      return [
        h('div', { class: this.classes?.value.text }, this.item.limit.labelRowsPerPage),
        h('div', { class: this.classes?.value.menu }, [
          this.components.renderOne('menu', {
            'list': this.item.limit.menuList.value,
            'selected': this.props.rows,
            'readonly': true,
            ...this.props.menuAttrs,
            'onUpdate:selected': (value: any) => this.item.limit.onRows(undefined as any, { value: Number(value) })
          }, {
            control: (menuProps: MenuControlItem) => {
              return this.renderButton({
                ...this.item.button.binds,
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
   * Renders the "Show more" button if configured and visible.
   *
   * Рендерит кнопку «Показать еще», если она настроена и видима.
   * @returns rendered button element or undefined / рендерируемый элемент кнопки или undefined
   */
  readonly renderMore = (): VNode | undefined => {
    if (this.props.showMore && !this.item.button.more.hide) {
      return this.renderButton({
        ...this.item.button.more,
        class: this.classes?.value.more,
        onClick: this.item.button.onMore
      })
    }
    return undefined
  }

  /**
   * Renders the page navigation control buttons list.
   *
   * Рендерит список кнопок управления постраничной навигацией.
   * @returns navigation container element / элемент контейнера навигации
   */
  readonly renderNavigation = (): VNode => {
    return h('div', { class: this.classes?.value.navigation }, [
      this.renderButton(this.item.button.first),
      this.renderButton(this.item.button.back),
      ...this.renderPagination(),
      this.renderButton(this.item.button.next),
      this.renderButton(this.item.button.last)
    ])
  }

  /**
   * Renders the list of page number button components.
   *
   * Рендерит список компонентов числовых кнопок страниц.
   * @returns array of page button nodes / массив узлов кнопок страниц
   */
  readonly renderPagination = (): (VNode | undefined)[] => {
    const children: VNode[] = []

    this.item.button.pagination.value.forEach((pageProps: any) => {
      const node = this.renderButton(pageProps)

      if (node) {
        children.push(node)
      }
    })

    return children
  }

  /**
   * Renders the spacer element.
   *
   * Рендерит элемент-разделитель.
   * @returns spacer element / элемент-разделитель
   */
  readonly renderSpacer = (): VNode => {
    return h('div', { class: this.classes?.value.spacer })
  }
}
