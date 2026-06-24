import { h, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { InputSocial } from './InputSocial'

import type { FieldControl } from '../Field'
import {
  type InputSocialPropsBasic
} from './props'
import {
  type InputSocialClasses,
  type InputSocialComponents,
  type InputSocialEmits,
  type InputSocialExpose,
  type InputSocialSlots
} from './types'

/**
 * InputSocialDesign
 */
export class InputSocialDesign<
  COMP extends InputSocialComponents,
  EXPOSE extends InputSocialExpose,
  CLASSES extends InputSocialClasses,
  P extends InputSocialPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    InputSocialEmits,
    EXPOSE,
    InputSocialSlots,
    CLASSES,
    P
  > {
  protected readonly item: InputSocial

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
    options?: ConstrOptions<COMP, InputSocialEmits, P>,
    ItemConstructor: typeof InputSocial = InputSocial
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
        default: this.renderInput
      },
      {
        ...this.getAttrs(),
        class: this.classes?.value.main,
        validationMessage: this.item.validation.message
      }
    )
  }

  /**
   * Rendering the input element.
   *
   * Рендер элемента ввода.
   * @param input data for the input element / данные для элемента ввода
   * @returns array of VNodes / массив VNode
   */
  readonly renderInput = (input: FieldControl): VNode[] => {
    if (this.item.mask.is) {
      return this.renderMask(input)
    }

    return [h(
      'input',
      toBinds(
        this.item.binds,
        input.binds,
        {
          ref: this.element
        }
      )
    )]
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
