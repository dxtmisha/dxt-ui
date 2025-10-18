import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import type { ModalAbstract } from './ModalAbstract'
import type { WindowControlItem } from '../Window'
import {
  type ModalPropsBasic
} from './props'
import {
  type ModalClasses,
  type ModalComponents,
  type ModalEmits,
  type ModalExpose,
  type ModalSlots
} from './types'

/**
 * ModalDesign
 */
export abstract class ModalDesignAbstract<
  COMP extends ModalComponents,
  EXPOSE extends ModalExpose,
  CLASSES extends ModalClasses,
  P extends ModalPropsBasic,
  ITEM extends ModalAbstract = ModalAbstract
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ModalEmits,
    EXPOSE,
    ModalSlots,
    CLASSES,
    P
  > {
  protected readonly item: ITEM

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ModalEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = this.initItem()
    this.init()
  }

  /**
   * Initialization of the main item
   *
   * Инициализация основного элемента
   */
  protected abstract initItem(): ITEM

  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.window.expose
    } as EXPOSE
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
        default: this.renderDefault,
        footer: this.renderFooter
      },
      toBinds(
        {
          class: this.classes?.value.main
        },
        this.getAttrs()
      )
    )
  }

  /**
   * Generates data for control.<br>
   * Генерирует данные для контроля.
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderControl = (
    props: WindowControlItem
  ): VNode | undefined => {
    return this.initSlot('control', undefined, props)
  }

  /**
   * Generates data for the header.
   *
   * Генерирует данные для заголовка.
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderTitle = (
    props: WindowControlItem
  ): VNode[] => {
    const children: any[] = []

    if (this.item.bars.is.value) {
      children.push(...this.item.bars.render())
    }

    if (
      this.slots
      && 'title' in this.slots
    ) {
      children.push(
        h(
          'div',
          { class: this.classes?.value.title },
          this.initSlot('title', undefined, props)
        )
      )
    }

    return children
  }

  /**
   * Generates bodies.
   *
   * Генерирует тела.
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderDefault = (
    props: WindowControlItem
  ): VNode[] => {
    const children: any[] = []

    if (
      this.slots
      && 'header' in this.slots
    ) {
      children.push(
        h(
          'div',
          { class: this.classes?.value.header },
          this.initSlot('header', undefined, props)
        )
      )
    }

    if (
      this.slots
      && 'default' in this.slots
    ) {
      children.push(
        h(
          'div',
          { class: this.classes?.value.body },
          this.initSlot('default', undefined, props)
        )
      )
    }

    return children
  }

  /**
   * Generates data for the required part.
   *
   * Генерирует данные для нужной части.
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderFooter = (
    props: WindowControlItem
  ): VNode[] => {
    const children: any[] = []

    if (this.item.actions.is.value) {
      children.push(...this.item.actions.render())
    }

    if (
      this.slots
      && 'footer' in this.slots
    ) {
      children.push(
        h(
          'div',
          { class: this.classes?.value.footer },
          this.initSlot('footer', undefined, props)
        )
      )
    }

    return children
  }
}
