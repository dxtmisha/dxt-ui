import { h, type VNode } from 'vue'
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
    HTMLDivElement,
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
   * Initializes exposed reactive properties.
   *
   * Инициализирует экспонируемые реактивные свойства.
   * @returns exposed properties / экспонируемые свойства
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
    return this.item.field.render(
      {
        default: this.renderMask,
        leading: this.renderDialCode
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
    if (
      this.props.disabled
      || this.props.readonly
    ) {
      return [h('input', {
        value: this.item.value.item.value,
        disabled: this.props.disabled,
        readonly: this.props.readonly,
        class: input.className
      })]
    }

    return this.item.mask.render(undefined, {
      ref: this.element,
      class: input.className,
      align: this.props.align,
      inputAttrs: toBinds<ConstrBind<any>>(
        this.item.attributes.listForInput,
        input.binds,
        {
          inputMode: 'tel'
        },
        this.props.inputAttrs
      ),
      onBlur: this.item.event.onBlur,
      onInput: this.item.event.onInput
    })
  }

  /**
   * Rendering dial code element.
   *
   * Рендеринг элемента телефонного кода.
   * @returns array of VNodes / массив VNode
   */
  readonly renderDialCode = (): VNode[] => {
    if (this.props.countryBlock) {
      return []
    }

    return this.item.dialCode.render()
  }
}
