import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import type { ModalAbstract } from './ModalAbstract'
import type { WindowControlItem } from '../Window'

import type { ModalPropsBasic } from './props'
import type {
  ModalClasses,
  ModalComponents,
  ModalEmits,
  ModalExpose,
  ModalSlots
} from './types'

/**
 * ModalDesignAbstract
 *
 * Abstract design constructor class for modal window components.
 * Manages rendering, slots, headers, footers, control templates, and expose APIs.
 *
 * Абстрактный класс конструктора дизайна для компонентов модального окна.
 * Управляет рендерингом, слотами, заголовками, подвалами, шаблонами управления и экспортом API.
 */
export abstract class ModalDesignAbstract<
  COMP extends ModalComponents,
  EMITS extends ModalEmits,
  EXPOSE extends ModalExpose,
  SLOTS extends ModalSlots,
  CLASSES extends ModalClasses,
  P extends ModalPropsBasic,
  ITEM extends ModalAbstract = ModalAbstract
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    EMITS,
    EXPOSE,
    SLOTS,
    CLASSES,
    P
  > {
  /** Logic item instance / Экземпляр элемента логики */
  protected readonly item: ITEM

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor window item class / класс элемента окна
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, EMITS, P>,
    ItemConstructor?: any
  ) {
    super(
      name,
      props,
      options
    )

    this.item = this.initItem(ItemConstructor)
  }

  /**
   * Initialization of the main item.
   *
   * Инициализация основного элемента.
   * @param ItemConstructor constructor class / класс конструктора
   * @returns item instance / экземпляр элемента
   */
  protected abstract initItem(ItemConstructor?: any): ITEM

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns expose object / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.i('window').expose
    } as EXPOSE
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
   * @returns array of VNodes / массив VNode
   */
  protected initRender(): VNode[] {
    return this.item.i('window').render(
      {
        control: this.renderControl,
        title: this.renderTitle,
        default: this.renderDefault,
        footer: this.renderFooter
      },
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main
      }
    )
  }

  /**
   * Generates data for control.
   *
   * Генерирует данные для контроля.
   * @param props data for the transferable property / данные для передаваемого свойства
   * @returns VNode element or undefined / элемент VNode или undefined
   */
  readonly renderControl = (
    props: WindowControlItem
  ): VNode | undefined => {
    return this.initSlot('control', undefined, props)
  }

  /**
   * Generates data for the header.
   *
   * Генерирует данные для заголовка.
   * @param props data for the transferable property / данные для передаваемого свойства
   * @returns array of VNodes / массив VNode
   */
  readonly renderTitle = (
    props: WindowControlItem
  ): VNode[] => {
    const children: VNode[] = [
      ...this.item.i('bars').render()
    ]

    if (
      this.slots
      && 'title' in this.slots
    ) {
      children.push(
        h(
          'div',
          this.getKeyClass('title'),
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
   * @param props data for the transferable property / данные для передаваемого свойства
   * @returns array of VNodes / массив VNode
   */
  readonly renderDefault = (
    props: WindowControlItem
  ): VNode[] => {
    const children: VNode[] = []

    if (
      this.slots
      && 'header' in this.slots
    ) {
      children.push(
        h(
          'div',
          this.getKeyClass('header'),
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
          this.getKeyClass('body'),
          this.initSlot('default', undefined, props)
        )
      )
    }

    return children
  }

  /**
   * Generates data for the footer part.
   *
   * Генерирует данные для нужной части.
   * @param props data for the transferable property / данные для передаваемого свойства
   * @returns array of VNodes / массив VNode
   */
  readonly renderFooter = (
    props: WindowControlItem
  ): VNode[] => {
    const children: VNode[] = []

    if (this.item.i('actions').is) {
      children.push(...this.item.i('actions').render())
    }

    if (
      this.slots
      && 'footer' in this.slots
    ) {
      children.push(
        h(
          'div',
          this.getKeyClass('footer'),
          this.initSlot('footer', undefined, props)
        )
      )
    }

    return children
  }
}
