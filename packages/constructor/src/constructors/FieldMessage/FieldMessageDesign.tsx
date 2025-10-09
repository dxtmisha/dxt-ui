import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { FieldMessage } from './FieldMessage'

import {
  type FieldMessagePropsBasic
} from './props'
import {
  type FieldMessageClasses,
  type FieldMessageComponents,
  type FieldMessageEmits,
  type FieldMessageExpose,
  type FieldMessageSlots
} from './types'

/**
 * FieldMessageDesign
 */
export class FieldMessageDesign<
  COMP extends FieldMessageComponents,
  EXPOSE extends FieldMessageExpose,
  CLASSES extends FieldMessageClasses,
  P extends FieldMessagePropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    FieldMessageEmits,
    EXPOSE,
    FieldMessageSlots,
    CLASSES,
    P
  > {
  protected readonly item: FieldMessage

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, FieldMessageEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new FieldMessage(
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
      main: this.item.classes.value,
      ...{
        // :classes [!] System label / Системная метка
        info: this.getSubClass('info')
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
  protected initRender(): VNode | undefined {
    if (this.item.is.value) {
      return h(
        'div',
        {
          ...this.getAttrs(),
          key: 'main',
          class: this.classes?.value.main
        },
        [
          ...this.renderInfo(),
          ...this.item.fieldCounter.render()
        ]
      )
    }

    return undefined
  }

  /**
   * Rendering text.
   *
   * Рендеринг текста.
   */
  protected renderInfo = (): VNode[] => {
    const children: VNode[] = []
    const props: Record<string, any> = {
      key: 'message',
      class: [
        this.classes?.value.info,
        this.item.skeleton.classes.value
      ]
    }

    this.initSlot('helper', children, this.item.slotHelperData.value)
    this.initSlot('validation', children, this.item.slotValidationData.value)

    if (children.length < 1) {
      props.innerHTML = this.item.message.item.value
    }

    return [
      h(
        'div',
        props,
        children
      )
    ]
  }
}
