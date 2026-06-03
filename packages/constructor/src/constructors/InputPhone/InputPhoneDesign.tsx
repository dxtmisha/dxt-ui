import { type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { InputPhone } from './InputPhone'

import type { FieldControl } from '../Field'
import {
  type InputPhonePropsBasic
} from './props'
import {
  type InputPhoneClasses,
  type InputPhoneComponents,
  type InputPhoneEmits,
  type InputPhoneExpose,
  type InputPhoneSlots
} from './types'

/**
 * InputPhoneDesign
 */
export class InputPhoneDesign<
  COMP extends InputPhoneComponents,
  EXPOSE extends InputPhoneExpose,
  CLASSES extends InputPhoneClasses,
  P extends InputPhonePropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    InputPhoneEmits,
    EXPOSE,
    InputPhoneSlots,
    CLASSES,
    P
  > {
  protected readonly item: InputPhone

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
    options?: ConstrOptions<COMP, InputPhoneEmits, P>,
    ItemConstructor: typeof InputPhone = InputPhone
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
      ...this.item.value.expose(),
      ...this.item.validation.expose()
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
        default: this.renderMask,
        leading: this.item.dialCode.render
      },
      {
        ...this.getAttrs(),
        class: this.classes?.value.main,
        validationMessage: this.item.validation.message
      }
    )
  }

  /**
   * Rendering mask element.
   *
   * Рендеринг элемента маски.
   * @param input data for the input element / данные для элемента ввода
   * @returns array of VNodes / массив VNode
   */
  readonly renderMask = (input: FieldControl): VNode[] => {
    return this.item.mask.render(undefined, {
      ref: this.element,
      class: input.className,
      align: this.props.align,
      inputAttrs: toBinds<ConstrBind<any>>(
        this.item.attributes.listForInput,
        input.binds
      ),
      onBlur: this.item.event.onBlur,
      onInput: this.item.event.onInput
    })
  }
}
