import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { FieldCounter } from './FieldCounter'

import {
  type FieldCounterPropsBasic
} from './props'
import {
  type FieldCounterClasses,
  type FieldCounterComponents,
  type FieldCounterEmits,
  type FieldCounterExpose,
  type FieldCounterSlots
} from './types'

/**
 * FieldCounterDesign
 */
export class FieldCounterDesign<
  COMP extends FieldCounterComponents,
  EXPOSE extends FieldCounterExpose,
  CLASSES extends FieldCounterClasses,
  P extends FieldCounterPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  FieldCounterEmits,
  EXPOSE,
  FieldCounterSlots,
  CLASSES,
  P
> {
  protected readonly item: FieldCounter

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, FieldCounterEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new FieldCounter(
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
    return {} as EXPOSE
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
  protected initRender(): VNode {
    if (this.item.is.value) {
      return h(
        'div', {
          ...this.getAttrs(),
          class: this.classes?.value.main,
          innerHTML: this.item.item.value
        }
      )
    }

    return undefined
  }
}
