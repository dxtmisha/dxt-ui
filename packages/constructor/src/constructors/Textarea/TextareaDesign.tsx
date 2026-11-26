import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Textarea } from './Textarea'

import type { FieldControl, FieldPropsBasic } from '../Field'
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
 * Design constructor class for the Textarea component.
 * Coordinates rendering of the Field wrapper with either TextareaAutosize or a native textarea fallback.
 *
 * Класс конструктора дизайна для компонента Textarea.
 * Координирует рендеринг обёртки Field вместе с компонентом TextareaAutosize либо нативным элементом textarea.
 */
export class TextareaDesign<
  COMP extends TextareaComponents,
  EXPOSE extends TextareaExpose,
  CLASSES extends TextareaClasses,
  P extends TextareaPropsBasic
> extends DesignConstructorAbstract<
    HTMLElement,
    COMP,
    TextareaEmits,
    EXPOSE,
    TextareaSlots,
    CLASSES,
    P
  > {
  /** Textarea logic orchestrator instance / Экземпляр оркестратора логики Textarea */
  protected readonly item: Textarea

  /**
   * Constructor for creating a Textarea design instance.
   *
   * Конструктор для создания экземпляра дизайна Textarea.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor logic orchestrator class / класс оркестратора логики
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Renders the textarea input element via TextareaAutosize or a native textarea fallback.
   *
   * Рендерит элемент ввода textarea через TextareaAutosize или нативный элемент textarea.
   * @param input data for the input element / данные для элемента ввода
   * @returns rendered input virtual nodes / отрендеренные виртуальные узлы элемента ввода
   */
  readonly renderInput = (input: FieldControl): VNode[] => {
    const props = mergeProps(
      input.binds,
      this.item.bindsInput
    )

    if (this.components?.is('textareaAutosize')) {
      return this.components.render(
        'textareaAutosize',
        mergeProps(
          this.item.binds,
          {
            ref: this.element,
            inputAttrs: props
          }
        )
      )
    }

    const event = this.item.i('event')
    const textareaAttrs: ConstrBind = { ...(this.props.textareaAttrs ?? {}) }

    delete textareaAttrs.inputAttrs
    delete textareaAttrs.autosize

    return [h(
      'textarea',
      mergeProps(
        textareaAttrs,
        props,
        {
          ref: this.element,
          value: this.item.i('value').item.value,
          onFocus: event.onFocus,
          onBlur: event.onBlur,
          onInput: event.onInput,
          onChange: event.onChange
        }
      )
    )]
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
   * @returns rendered virtual nodes / отрендеренные виртуальные узлы
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
}
