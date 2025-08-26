import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract, type RawSlots, toBind
} from '@dxt-ui/functional'

import { Menu } from './Menu'

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
import type { WindowControlItem } from '../Window'
import type { MenuControlItem } from './basicTypes.ts'

/**
 * MenuDesign
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
  protected readonly item: Menu

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MenuEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Menu(
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
      ...this.item.window.expose,

      list: this.item.dataLite.item,

      isSelected: this.item.data.isSelected,
      selectedList: this.item.data.selectedList,
      selectedNames: this.item.data.selectedNames,
      selectedValues: this.item.data.selectedValues
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
        bars: this.getSubClass('bars'),
        list: this.getSubClass('list')
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
  protected initRender(): VNode[] {
    return this.item.window.render(
      {
        control: this.renderControl,
        title: this.renderTitle,
        default: this.renderList,
        footer: this.renderFooter
      }
    )
  }

  /**
   * Generates data for control.
   *
   * Генерирует данные для контроля.
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderControl = (
    props: WindowControlItem
  ): VNode | undefined => {
    return this.initSlot('control', undefined, this.getBinds(props))
  }

  /**
   * Render title element.
   *
   * Рендер элемента заголовка.
   */
  protected readonly renderTitle = (
    props: WindowControlItem
  ): VNode | undefined => {
    return this.initSlot('title', undefined, this.getBinds(props))
  }

  /**
   * Render list element.
   *
   * Рендер элемента списка.
   */
  protected readonly renderList = (): VNode | undefined => {
    const list = this.item.dataLite.item.value

    if (list) {
      const children: any[] = []

      if (this.item.bars.is) {
        children.push(...this.item.bars.render())
      }

      children.push(
        this.components.render(
          'list',
          toBind(
            this.props.listAttrs ?? {},
            {
              tag: this.props.tag,
              focus: this.item.focus.focus.value,
              selected: this.props.selected,
              list: list,
              highlight: this.item.search.item.value,
              class: this.classes?.value.list,
              onClick: this.item.event.onClick
            }
          ),
          this.slots as RawSlots
        )
      )

      return h(
        'div',
        {
          ...this.getAttrs(),
          ref: this.element,
          class: this.classes?.value.main,
          onClick: this.item.onClickSlot
        },
        children
      )
    }

    return undefined
  }

  /**
   * Render footer element.
   *
   * Рендер элемента футера.
   */
  protected readonly renderFooter = (
    props: WindowControlItem
  ): VNode | undefined => {
    return this.initSlot('footer', undefined, this.getBinds(props))
  }

  /**
   * Generates data for control.
   *
   * Генерирует данные для контроля.
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected getBinds(
    props: WindowControlItem
  ): MenuControlItem {
    return {
      ...props,
      ...this.item.getControlBinds()
    }
  }
}
