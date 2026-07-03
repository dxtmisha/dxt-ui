import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  isFilled
} from '@dxtmisha/functional'

import { InputCode } from './InputCode'

import {
  type InputCodeProps
} from './props'
import {
  type InputCodeClasses,
  type InputCodeComponents,
  type InputCodeEmits,
  type InputCodeExpose,
  type InputCodeSlots
} from './types'

/**
 * Design constructor class for InputCode component.
 *
 * Класс конструктора дизайна для компонента InputCode.
 */
export class InputCodeDesign<
  COMP extends InputCodeComponents,
  EXPOSE extends InputCodeExpose,
  CLASSES extends InputCodeClasses,
  P extends InputCodeProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    InputCodeEmits,
    EXPOSE,
    InputCodeSlots,
    CLASSES,
    P
  > {
  protected readonly item: InputCode

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, InputCodeEmits, P>,
    ItemConstructor: typeof InputCode = InputCode
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
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      value: this.item.value,
      set: (value: string | number) => this.item.inputCodeItem.update(String(value)),
      reset: () => this.item.inputCodeItem.resetValue(),
      focus: () => this.item.inputCodeItem.focus()
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
        context: this.getSubClass('context')
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
  protected initRender(): VNode {
    const children: any[] = [
      ...this.item.fieldLabel.render(),
      this.renderContext(),
      ...this.item.fieldMessage.render()
    ]

    return h(
      'div',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main
      },
      children
    )
  }

  /**
   * Rendering the context part of input fields.
   *
   * Рендеринг контекстной части полей ввода.
   */
  protected readonly renderContext = (): VNode => {
    return h(
      'div',
      { class: this.classes?.value.context },
      this.renderItems()
    )
  }

  /**
   * Rendering the individual code input items.
   *
   * Рендеринг отдельных элементов ввода кода.
   */
  protected readonly renderItems = (): VNode[] => {
    const children: any[] = []

    this.item.inputCodeItem.reset()

    for (let i = 0; i < (this.props.length ?? 1); i++) {
      children.push(...this.item.inputCodeItem.renderItem(
        i,
        true,
        undefined,
        isFilled(this.props.validation || this.item.fieldMessage.validation)
      ))
    }

    return children
  }
}
