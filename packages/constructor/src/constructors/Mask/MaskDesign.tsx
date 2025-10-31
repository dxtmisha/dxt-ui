import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { Mask } from './Mask'

import {
  type MaskPropsBasic
} from './props'
import {
  type MaskClasses,
  type MaskComponents,
  type MaskEmits,
  type MaskExpose,
  type MaskSlots
} from './types'

/**
 * MaskDesign
 */
export class MaskDesign<
  COMP extends MaskComponents,
  EXPOSE extends MaskExpose,
  CLASSES extends MaskClasses,
  P extends MaskPropsBasic
> extends DesignConstructorAbstract<
    HTMLInputElement,
    COMP,
    MaskEmits,
    EXPOSE,
    MaskSlots,
    CLASSES,
    P
  > {
  protected readonly item: Mask

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MaskEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Mask(
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
      valueBasic: this.item.basic,
      value: this.item.value.item,
      setValue: this.item.set,
      clear: this.item.clear
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes.value,
      ...{
        // :classes [!] System label / Системная метка
        input: this.getSubClass('input'),
        character: this.getSubClass('character'),
        characterItem: this.getSubClass('character__item')
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
  protected initRender(): VNode {
    const children: any[] = [
      ...this.renderData(),
      ...this.renderInput(),
      ...this.renderView()
    ]

    return h('span', {
      ...this.getAttrs(),
      class: this.classes?.value.main
    }, children)
  }

  /**
   * Element for storing the final data.
   *
   * Элемент для хранения конечных данных.
   */
  protected renderData = (): VNode[] => {
    if (this.props.name) {
      return [
        h('input', {
          type: 'hidden',
          name: this.props.name,
          value: this.item.value.item.value
        })
      ]
    }

    return []
  }

  /**
   * Rendering method for input.
   *
   * Метод рендеринга для ввода.
   */
  protected renderInput = (): VNode[] => {
    return [
      h(
        'input',
        toBinds(
          this.props.inputAttrs,
          {
            ref: this.element,
            class: this.classes?.value.input,

            type: 'text',
            value: this.item.basic.value,

            onFocus: this.item.event.onFocus,
            onBlur: this.item.event.onBlur,
            onKeydown: this.item.event.onKeydown,
            onKeyup: this.item.event.onKeyup,
            onBeforeinput: this.item.event.onBeforeinput,
            onInput: this.item.event.onInput,
            onChange: this.item.event.onChange,
            onPaste: this.item.event.onPaste,
            onClick: this.item.event.onClick
          }
        )
      )
    ]
  }

  /**
   * Rendering method for displaying the mask and the input data.
   *
   * Метод рендеринга для вывода маски и вводимых данных.
   */
  protected renderView = (): VNode[] => {
    const view = this.item.view.item.value
    const children: any[] = []
    let innerHTML: undefined | string = undefined

    if (view.length > 0) {
      view.forEach((character, key) => {
        children.push(
          h('span', {
            key,
            class: character.className,
            innerHTML: character.value === ' ' ? '&nbsp;' : character.value
          })
        )
      })
    } else {
      innerHTML = '&nbsp;'
    }

    return [
      h(
        'span',
        {
          'class': this.classes?.value.character,
          'data-length': '1',
          innerHTML
        },
        children
      )
    ]
  }
}
