import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
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
 * Constructor class for the Mask design component.
 * Manages visual rendering, class bindings, and exposed methods of the Mask component.
 *
 * Класс-конструктор для дизайн-компонента Mask.
 * Управляет визуальным рендерингом, привязкой классов и экспонируемыми методами компонента Mask.
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
  /** Mask logic orchestrator instance / Экземпляр оркестратора логики Mask */
  protected readonly item: Mask

  /**
   * Constructor
   *
   * Конструктор
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor mask item class/ класс элемента маски
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MaskEmits, P>,
    ItemConstructor: typeof Mask = Mask
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
      getValueBasic: () => this.item.i('control').basic.value,
      getValue: () => this.item.i('value').item.value,
      setValue: (value: string) => this.item.i('control').set(value),
      clear: () => this.item.i('control').clear()
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
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        input: this.naming.getSubClass('input'),
        character: this.naming.getSubClass('character'),
        characterItem: this.naming.getSubClass('character__item')
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
   * @returns virtual node / виртуальный узел
   */
  protected initRender(): VNode {
    const children: VNode[] = [
      ...this.renderData(),
      ...this.renderInput(),
      ...this.renderView()
    ]

    return h(
      'span',
      mergeProps(
        this.getAttrs(),
        {
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      children
    )
  }

  /**
   * Element for storing the final data.
   *
   * Элемент для хранения конечных данных.
   * @returns array of VNodes / массив VNode
   */
  readonly renderData = (): VNode[] => {
    if (this.props.name) {
      return [
        h('input', {
          type: 'hidden',
          name: this.props.name,
          value: this.item.i('value').item.value
        })
      ]
    }

    return []
  }

  /**
   * Rendering method for input.
   *
   * Метод рендеринга для ввода.
   * @returns array of VNodes / массив VNode
   */
  readonly renderInput = (): VNode[] => {
    return [
      h(
        'input',
        mergeProps(
          this.item.binds,
          {
            ref: this.element,
            class: this.classes?.value.input,
            value: this.item.i('control').basic.value
          }
        )
      )
    ]
  }

  /**
   * Rendering method for displaying the mask and the input data.
   *
   * Метод рендеринга для вывода маски и вводимых данных.
   * @returns array of VNodes / массив VNode
   */
  readonly renderView = (): VNode[] => {
    const view = this.item.i('view').item.value
    const children: VNode[] = []
    let innerHTML: string | undefined

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
          'ref': this.item.i('scroll').elementView,
          'class': this.classes?.value.character,
          'data-length': '1',
          ...AriaStaticInclude.hidden(),
          innerHTML
        },
        children
      )
    ]
  }
}
