import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Input } from './Input'

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

    // TODO: Method for initializing base objects
    // TODO: Метод для инициализации базовых объектов

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
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
    return {
      // TODO: list of user styles
      // TODO: список пользовательских стилей
    }
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    // const children: any[] = []

    return h('div', {
      // ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    })
  }
}
