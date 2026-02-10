import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract, toBinds
} from '@dxtmisha/functional'

import { Textarea } from './Textarea'

import type { FieldControl } from '../Field'
import {
  type TextareaPropsBasic
} from './props'
import {
  type TextareaClasses,
  type TextareaComponents,
  type TextareaEmits,
  type TextareaExpose,
  type TextareaSlots
} from './types'

/**
 * TextareaDesign
 */
export class TextareaDesign<
  COMP extends TextareaComponents,
  EXPOSE extends TextareaExpose,
  CLASSES extends TextareaClasses,
  P extends TextareaPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TextareaEmits,
    EXPOSE,
    TextareaSlots,
    CLASSES,
    P
  > {
  protected readonly item: Textarea

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TextareaEmits, P>,
    ItemConstructor: typeof Textarea = Textarea
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
      value: this.item.value.item,
      checkValidity: this.item.validation.checkValidity,
      validationMessage: this.item.validation.message
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
    return this.item.field.render(
      {
        default: this.renderInput
      },
      {
        ...this.getAttrs(),
        class: this.classes?.value.main,
        validationMessage: this.item.validation.message.value
      }
    )
  }

  /**
   * Rendering the input element.
   *
   * Рендер элемент input.
   * @param input data for the input element/ данные для элемента ввода
   */
  protected readonly renderInput = (input: FieldControl): VNode[] => {
    const props = toBinds(
      input.binds,
      {
        ref: this.element,
        autosize: this.props.autosize,
        value: this.item.value.item.value,
        onBlur: this.item.event.onBlur,
        onInput: this.item.event.onInput,
        onChange: this.item.event.onChange
      }
    )
    const propsInput = toBinds(
      this.item.attributes.listForInput.value,
      this.props.textareaAttrs
    )

    console.log('props', props, propsInput)

    if (this.components.is('textareaAutosize')) {
      return [this.components.renderOne('textareaAutosize', {
        ...props,
        inputAttrs: propsInput
      }) as VNode]
    }

    return [h('textarea', {
      ...props,
      ...propsInput
    })]
  }
}
