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
 * Design constructor class for the InputSocial component.
 * It connects the Vue component template, styles, and classes to the InputSocial logic core.
 *
 * Класс конструктора дизайна для компонента InputSocial.
 * Связывает шаблон компонента Vue, стили и классы с логическим ядром InputSocial.
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
   * Constructor for InputSocialDesign.
   *
   * Конструктор для InputSocialDesign.
   * @param name class name / название класса
   * @param props component properties / свойства компонента
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the logical item / класс для работы с логическим элементом
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
   * Initializes all necessary properties for the component's exposed interface.
   *
   * Инициализирует все необходимые свойства для экспонируемого интерфейса компонента.
   * @returns exposed properties / экспонируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.value.expose(),
      ...this.item.validation.expose()
    } as EXPOSE
  }

  /**
   * Refines the obtained list of classes.
   *
   * Дорабатывает полученный список классов.
   * @returns partial map of CSS classes / частичная карта CSS классов
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
   * Refines the received list of styles.
   *
   * Дорабатывает полученный список стилей.
   * @returns map of inline styles / карта инлайн-стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Renders the main field component with its inner structure.
   *
   * Рендерит основной компонент поля с его внутренней структурой.
   * @returns array of rendered VNodes / массив отрендеренных VNode
   */
  protected initRender(): VNode[] {
    return this.item.field.render(
      {
        default: this.renderInput
      },
      {
        ...this.getAttrs(),
        class: this.classes?.value.main,
        validationMessage: this.item.validation.message,
        icon: this.item.icon,
        label: this.item.label,
        prefix: this.item.prefix,
        suffix: this.item.suffix
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
   * Renders the mask element for the input.
   *
   * Рендерит элемент маски для ввода.
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
