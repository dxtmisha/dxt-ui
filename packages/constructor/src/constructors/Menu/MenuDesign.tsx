import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  type RawSlots,
  toBinds
} from '@dxt-ui/functional'

import { Menu } from './Menu'

import type { WindowControlItem } from '../Window'
import type { MenuControlItem } from './basicTypes'
import {
  type MenuProps
} from './props'
import {
  type MenuClasses,
  type MenuComponents,
  type MenuEmits,
  type MenuExpose,
  type MenuSlots
} from './types'

/**
 * MenuDesign
 */
export class MenuDesign<
  COMP extends MenuComponents,
  EXPOSE extends MenuExpose,
  CLASSES extends MenuClasses,
  P extends MenuProps
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
      ...this.item.getControlBinds()
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
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderTitle = (
    props: WindowControlItem
  ): VNode[] => {
    const children: any[] = []

    if (this.item.bars.is) {
      children.push(...this.item.bars.render())
    }

    this.initSlot('title', children, this.getBinds(props))

    return children
  }

  /**
   * Render list element.
   *
   * Рендер элемента списка.
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderList = (
    props: WindowControlItem
  ): VNode | undefined => {
    if (this.props.list) {
      const children: any[] = []

      this.initSlot('contextTop', children, this.getBinds(props))

      if (!this.props.hideList) {
        children.push(
          this.components.render(
            'list',
            toBinds(
              {
                ...this.item.binds.value,
                class: this.classes?.value.list,

                selected: this.props.selected,
                highlight: this.item.search.item.value,

                lite: this.item.menuWindow.lite.value,
                control: this.item.menuWindow.control.value
              },
              this.props.listAttrs
            ),
            this.slots as RawSlots
          )
        )
      }

      this.initSlot('contextBottom', children, this.getBinds(props))

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
   * @param props data for the transferable property/ данные для передаваемого свойства
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
