import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  type RawSlots
} from '@dxtmisha/functional'

import { Menu } from './Menu'

import type { WindowControlItem } from '../Window'
import type { MenuControlItem } from './basicTypes'
import {
  type MenuPropsBasic
} from './props'
import {
  type MenuClasses,
  type MenuComponents,
  type MenuEmits,
  type MenuExpose,
  type MenuSlots
} from './types'

/**
 * MenuDesign is a design constructor for the Menu component.
 * It connects the Menu logic, sets up slots, classes, styles, and defines the rendering function.
 *
 * MenuDesign — конструктор дизайна для компонента Menu.
 * Он связывает логику Menu, настраивает слоты, классы, стили и определяет функцию рендеринга.
 */
export class MenuDesign<
  COMP extends MenuComponents,
  EXPOSE extends MenuExpose,
  CLASSES extends MenuClasses,
  P extends MenuPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    MenuEmits,
    EXPOSE,
    MenuSlots,
    CLASSES,
    P
  > {
  /** Menu logic orchestrator instance / Экземпляр логического оркестратора Menu */
  protected readonly item: Menu

  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MenuEmits, P>,
    ItemConstructor: typeof Menu = Menu
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
   * @returns exposed properties / экспонируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.i('window').expose,

      isSelected: () => this.item.i('data').isSelected.value,
      getSelectedList: () => this.item.i('data').selectedList.value,
      getSelectedNames: () => this.item.i('data').selectedNames.value,
      getSelectedValues: () => this.item.i('data').selectedValues.value,

      loading: () => this.item.i('request').progress.value,
      previous: () => this.item.i('go').previous(),
      next: () => this.item.i('go').next()
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes object / частичный объект классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        bars: this.naming.getSubClass('bars'),
        list: this.naming.getSubClass('list')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  protected initRender(): VNode[] {
    return this.item.i('window').render(
      {
        control: this.renderControl,
        title: this.renderTitle,
        default: this.renderList,
        footer: this.renderFooter
      },
      {
        class: this.classes?.value.main,
        style: this.styles?.value,
        closeOnEsc: false,
        ariaHaspopup: 'listbox',
        embedded: this.props.embedded
      }
    )
  }

  /**
   * Generates data for control.
   *
   * Генерирует данные для контроля.
   * @param props data for the transferable property / данные для передаваемого свойства
   * @returns control virtual node or undefined / виртуальный узел управления или undefined
   */
  readonly renderControl = (
    props: WindowControlItem
  ): VNode | undefined => {
    return this.initSlot('control', undefined, this.getBinds(props))
  }

  /**
   * Render title element.
   *
   * Рендер элемента заголовка.
   * @param props data for the transferable property / данные для передаваемого свойства
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderTitle = (
    props: WindowControlItem
  ): VNode[] => {
    const children: VNode[] = [
      ...this.item.callInstance('bars', item => item.render(), [])
    ]

    this.initSlot('title', children, this.getBinds(props))

    return children
  }

  /**
   * Render list element.
   *
   * Рендер элемента списка.
   * @param props data for the transferable property / данные для передаваемого свойства
   * @returns list container virtual node or undefined / виртуальный узел контейнера списка или undefined
   */
  readonly renderList = (
    props: WindowControlItem
  ): VNode | undefined => {
    const list = this.item.i('request').item.value

    if (list) {
      const children: VNode[] = []

      this.initSlot('contextTop', children, this.getBinds(props))

      if (!this.props.hideList) {
        children.push(
          ...(this.components?.render(
            'list',
            mergeProps(
              this.item.binds,
              {
                class: this.classes?.value.list,

                selected: this.item.i('value').selected.value,
                highlight: this.props.highlight,

                list,
                lite: this.item.i('menuWindow').lite.value,
                role: this.props.roleList,
                roleItem: this.props.roleItem
              },
              this.props.listAttrs ?? {}
            ),
            this.slots as RawSlots
          ) ?? [])
        )
      }

      this.initSlot('contextBottom', children, this.getBinds(props))

      return h(
        'div',
        mergeProps(
          this.getAttrs(),
          {
            ref: this.element,
            onClick: this.item.onClickSlot
          }
        ),
        children
      )
    }

    return undefined
  }

  /**
   * Render footer element.
   *
   * Рендер элемента футера.
   * @param props data for the transferable property / данные для передаваемого свойства
   * @returns footer virtual node or undefined / виртуальный узел футера или undefined
   */
  readonly renderFooter = (
    props: WindowControlItem
  ): VNode | undefined => {
    return this.initSlot('footer', undefined, this.getBinds(props))
  }

  /**
   * Generates data for control.
   *
   * Генерирует данные для контроля.
   * @param props data for the transferable property / данные для передаваемого свойства
   * @returns combined menu and window control data / объединенные данные управления меню и окном
   */
  protected getBinds(
    props: WindowControlItem
  ): MenuControlItem {
    return {
      ...props,
      ...this.item.slotData
    }
  }
}
