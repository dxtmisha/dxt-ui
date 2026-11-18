import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { InputPhone } from './InputPhone'

import type { FieldControl, FieldPropsBasic } from '../Field'
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
 * Abstract class for managing the design-level rendering and styling of the InputPhone component.
 *
 * Абстрактный класс для управления рендерингом и стилизацией компонента InputPhone на уровне дизайна.
 */
export class InputPhoneDesign<
  COMP extends InputPhoneComponents,
  EXPOSE extends InputPhoneExpose,
  CLASSES extends InputPhoneClasses,
  P extends InputPhonePropsBasic
> extends DesignConstructorAbstract<
    HTMLElement,
    COMP,
    InputPhoneEmits,
    EXPOSE,
    InputPhoneSlots,
    CLASSES,
    P
  > {
  /** InputPhone logic instance / Экземпляр логики InputPhone */
  protected readonly item: InputPhone

  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Initializes exposed reactive properties.
   *
   * Инициализирует экспонируемые реактивные свойства.
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
        default: this.renderMask,
        ...(!this.props.countryBlock
          ? { leading: () => this.item.callInstance('dialCode', item => item.render(), []) }
          : {})
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
   * Rendering mask element.
   *
   * Рендеринг элемента маски.
   * @param input data for the input element / данные для элемента ввода
   * @returns array of VNodes / массив VNode
   */
  readonly renderMask = (input: FieldControl): VNode[] => {
    if (
      this.props.disabled
      || this.props.readonly
    ) {
      return [h(
        'input',
        mergeProps(
          {
            inputMode: 'tel'
          },
          this.item.i('attributes').listForInput,
          input.binds,
          {
            ref: this.element,
            value: this.item.i('value').item.value
          }
        )
      )]
    }

    const event = this.item.i('event')

    return this.item.i('mask').render(undefined, {
      ref: this.element,
      class: input.className,
      align: this.props.align,
      inputAttrs: mergeProps(
        {
          inputMode: 'tel'
        },
        this.item.i('attributes').listForInput,
        input.binds
      ) as Partial<HTMLInputElement>,
      onBlur: event.onBlur,
      onInput: event.onInput,
      onChange: event.onChange
    })
  }
}
