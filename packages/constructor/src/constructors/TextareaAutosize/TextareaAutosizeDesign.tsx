import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { TextareaAutosize } from './TextareaAutosize'

import {
  type TextareaAutosizePropsBasic
} from './props'
import {
  type TextareaAutosizeClasses,
  type TextareaAutosizeComponents,
  type TextareaAutosizeEmits,
  type TextareaAutosizeExpose,
  type TextareaAutosizeSlots
} from './types'

/**
 * TextareaAutosizeDesign
 */
export class TextareaAutosizeDesign<
  COMP extends TextareaAutosizeComponents,
  EXPOSE extends TextareaAutosizeExpose,
  CLASSES extends TextareaAutosizeClasses,
  P extends TextareaAutosizePropsBasic
> extends DesignConstructorAbstract<
    HTMLTextAreaElement,
    COMP,
    TextareaAutosizeEmits,
    EXPOSE,
    TextareaAutosizeSlots,
    CLASSES,
    P
  > {
  protected readonly item: TextareaAutosize

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TextareaAutosizeEmits, P>,
    ItemConstructor: typeof TextareaAutosize = TextareaAutosize
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      value: this.item.value.item
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
        clone: this.getSubClass('clone')
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
    return [
      this.renderClone(),
      this.renderTextarea()
    ]
  }

  /**
   * Renders a textarea element.
   *
   * Рендерит элемент textarea.
   */
  protected readonly renderTextarea = (): VNode => {
    return h('textarea', {
      ...this.getAttrs(),
      ...this.props.inputAttrs,
      ref: this.element,
      value: this.item.value.item.value,
      class: this.classes?.value.main,
      onFocus: this.item.resize.on,
      onInput: this.item.resize.onInput
    })
  }

  /**
   * Renders a clone element.
   *
   * Рендерит элемент-клон.
   */
  protected readonly renderClone = (): VNode => {
    return h('div', {
      ref: this.item.resize.clone,
      class: this.classes?.value.clone
    })
  }
}
