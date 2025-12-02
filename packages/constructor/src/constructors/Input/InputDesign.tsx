import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { Input } from './Input'

import type { FieldControl } from '../Field'
import {
  type InputPropsBasic
} from './props'
import {
  type InputClasses,
  type InputComponents,
  type InputEmits,
  type InputExpose,
  type InputSlots
} from './types'

/**
 * InputDesign
 */
export class InputDesign<
  COMP extends InputComponents,
  EXPOSE extends InputExpose,
  CLASSES extends InputClasses,
  P extends InputPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    InputEmits,
    EXPOSE,
    InputSlots,
    CLASSES,
    P
  > {
  protected readonly item: Input

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, InputEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Input(
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
    if (this.item.mask.isActive()) {
      return this.renderMask(input)
    }

    return [h(
      'input',
      toBinds(
        this.item.attributes.listForInput.value,
        input.binds,
        {
          ref: this.element,
          value: this.item.value.item.value,
          onBlur: this.item.event.onBlur,
          onInput: this.item.event.onInput,
          onChange: this.item.event.onChange
        }
      )
    )]
  }

  /**
   * Rendering mask element.
   *
   * Рендеринг элемента маски.
   * @param input data for the input element/ данные для элемента ввода
   */
  protected readonly renderMask = (input: FieldControl): VNode[] => {
    return this.item.mask.render({
      ref: this.element,
      id: input.id,
      class: input.className,
      align: this.props.align,
      inputAttrs: this.item.attributes.listForInput.value,

      onBlur: this.item.event.onBlur,
      onInput: this.item.event.onInput
    })
  }
}
