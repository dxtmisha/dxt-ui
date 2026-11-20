import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Input } from './Input'

import type { FieldControl, FieldPropsBasic } from '../Field'
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
 * Design constructor class for the Input component.
 *
 * Класс конструктора дизайна для компонента Input.
 */
export class InputDesign<
  COMP extends InputComponents,
  EXPOSE extends InputExpose,
  CLASSES extends InputClasses,
  P extends InputPropsBasic
> extends DesignConstructorAbstract<
    HTMLElement,
    COMP,
    InputEmits,
    EXPOSE,
    InputSlots,
    CLASSES,
    P
  > {
  /** Input logic instance / Экземпляр логики Input */
  protected readonly item: Input

  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, InputEmits, P>,
    ItemConstructor: typeof Input = Input
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
      ...this.item.i('value').expose(),
      ...this.item.i('validation').expose()
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
    return this.item.i('field').render(
      {
        ...this.slots,
        default: this.renderInput
      },
      mergeProps(
        this.getAttrs(),
        {
          class: this.classes?.value.main,
          style: this.styles?.value,
          validationMessage: this.item.i('validation').message
        }
      ) as Partial<ConstrBind<FieldPropsBasic>>
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
    if (this.item.i('mask').is) {
      return this.renderMask(input)
    }

    return [h(
      'input',
      mergeProps(
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
    const event = this.item.i('event')

    return this.item.i('mask').render(undefined, {
      ref: this.element,
      class: input.className,
      align: this.props.align,
      inputAttrs: mergeProps(
        this.item.i('attributes').listForInput,
        input.binds
      ) as Partial<HTMLInputElement>,
      onFocus: event.onFocus,
      onBlur: event.onBlur,
      onInput: event.onInput,
      onChange: event.onChange
    })
  }
}
