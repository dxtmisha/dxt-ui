import { type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  type ListDataFullItem,
  toBinds
} from '@dxtmisha/functional'

import type { HorizontalScrollControlItem } from '../HorizontalScroll'
import type { TabItemPropsBasic } from '../TabItem'
import { TabsNavigation } from './TabsNavigation'

import {
  type TabsNavigationPropsBasic
} from './props'
import {
  type TabsNavigationClasses,
  type TabsNavigationComponents,
  type TabsNavigationEmits,
  type TabsNavigationExpose,
  type TabsNavigationSlots
} from './types'

/**
 * TabsNavigationDesign handles the visual layout, HTML rendering, and slot integration of TabsNavigation.
 * It maps data models into DOM nodes using HorizontalScroll and TabItem components.
 *
 * TabsNavigationDesign управляет визуальной разметкой, HTML-рендерингом и интеграцией слотов TabsNavigation.
 * Преобразует модели данных в DOM-узлы с использованием компонентов HorizontalScroll и TabItem.
 *
 * @template COMP type describing component configuration / тип, описывающий конфигурацию компонентов
 * @template EXPOSE type describing exposed API structure / тип, описывающий структуру экспортируемого API
 * @template CLASSES type describing CSS classes map / тип, описывающий карту CSS-классов
 * @template P type describing properties interface / тип, описывающий интерфейс свойств
 */
export class TabsNavigationDesign<
  COMP extends TabsNavigationComponents,
  EXPOSE extends TabsNavigationExpose,
  CLASSES extends TabsNavigationClasses,
  P extends TabsNavigationPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TabsNavigationEmits,
    EXPOSE,
    TabsNavigationSlots,
    CLASSES,
    P
  > {
  /** TabsNavigation business logic instance / Экземпляр бизнес-логики TabsNavigation */
  protected readonly item: TabsNavigation

  /**
   * Constructor for initializing the design renderer.
   *
   * Конструктор для инициализации отрисовщика дизайна.
   * @param name component tag class name / имя класса тега компонента
   * @param props reactive input properties / реактивные входные свойства
   * @param options additional construction configuration options / дополнительные параметры конфигурации сборки
   * @param ItemConstructor reference constructor of the business logic / конструктор ссылки бизнес-логики
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TabsNavigationEmits, P>,
    ItemConstructor: typeof TabsNavigation = TabsNavigation
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
   * Initializes exposed API methods to the parent template or context.
   *
   * Инициализирует методы API, экспортируемые в родительский шаблон или контекст.
   * @returns object containing exposed API maps / объект, содержащий карты экспортируемого API
   */
  protected initExpose(): EXPOSE {
    return {
      ids: () => this.item.ids.ids.value
    } as EXPOSE
  }

  /**
   * Generates and returns dynamic CSS classes map for rendering.
   *
   * Генерирует и возвращает карту динамических CSS-классов для рендеринга.
   * @returns object containing CSS class mappings / объект, содержащий сопоставления CSS-классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        item: this.getSubClass('item')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Generates and returns custom inline CSS styles map.
   *
   * Генерирует и возвращает карту пользовательских встроенных стилей CSS.
   * @returns object containing inline CSS rules / объект, содержащий встроенные правила CSS
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Main entry point for rendering the whole tab navigation component hierarchy.
   *
   * Главная точка входа для рендеринга всей иерархии компонентов навигации вкладок.
   * @returns array of VNodes representing scrollable wrapper with list items / массив VNode, представляющих прокручиваемую обертку с элементами списка
   */
  protected initRender(): VNode[] {
    return this.item.scroll.render(
      { default: this.renderList },
      {
        ...this.item.binds,
        class: this.classes?.value.main
      }
    )
  }

  /**
   * Helper method for rendering the list of tab items inside the scrollable container.
   *
   * Вспомогательный метод для рендеринга списка вкладок внутри прокручиваемого контейнера.
   * @param props horizontal scroll control parameters / параметры контроля горизонтальной прокрутки
   * @returns array of VNodes containing leading slot, list items, and trailing slot / массив VNode, содержащий ведущий слот, элементы списка и замыкающий слот
   */
  readonly renderList = (
    props: HorizontalScrollControlItem
  ): VNode[] => {
    const children: any[] = []

    this.initSlot('leading', children)

    this.item.data.fullData.value.forEach(
      item => children.push(
        this.renderItem(props, item)
      )
    )

    this.initSlot('trailing', children)

    return children
  }

  /**
   * Helper method for rendering a single tab item with appropriate bindings and selection classes.
   *
   * Вспомогательный метод для рендеринга отдельного элемента вкладки с соответствующими привязками и классами выбора.
   * @param props horizontal scroll control parameters / параметры контроля горизонтальной прокрутки
   * @param item single full tab list item state data / данные состояния одного элемента списка вкладок
   * @returns VNode of single rendered tab item / VNode одного отрендеренного элемента вкладки
   */
  readonly renderItem = (
    props: HorizontalScrollControlItem,
    item: ListDataFullItem<TabItemPropsBasic>
  ): VNode => {
    const isSelected = this.item.selected.isSelected(item.index)

    return this.components.renderOne(
      'tabItem',
      toBinds(
        this.props.itemAttrs,
        item,
        props.binds,
        {
          tag: this.props.tag,
          key: item.index,
          id: this.item.ids.getIdByValue(item.value),
          onClick: this.item.onClick,
          class: {
            [`${this.classes?.value.item}`]: true,
            [props.classItemSelected]: isSelected
          }
        }
      )
    ) as VNode
  }
}
