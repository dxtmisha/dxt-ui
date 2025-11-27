import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Button } from './Button'

import {
  type ButtonPropsBasic
} from './props'
import {
  type ButtonClasses,
  type ButtonComponents,
  type ButtonEmits,
  type ButtonExpose,
  type ButtonSlots
} from './types'

/**
 * ButtonDesign
 */
export class ButtonDesign<
  COMP extends ButtonComponents,
  EXPOSE extends ButtonExpose,
  CLASSES extends ButtonClasses,
  P extends ButtonPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ButtonEmits,
    EXPOSE,
    ButtonSlots,
    CLASSES,
    P
  > {
  protected readonly item: Button

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ButtonEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Button(
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
      ...this.item.event.expose,
      ...this.item.label.expose
    } as EXPOSE
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
        label: this.getSubClass('label'),
        icon: this.getSubClass('icon'),
        trailing: this.getSubClass('trailing'),
        loading: this.getSubClass('loading')
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
    return h(
      this.props.tag || 'button',
      {
        ...this.getAttrs(),
        'ref': this.element,
        'type': this.props.type,

        'class': this.classes?.value.main,
        'style': this.styles?.value,

        'data-value': this.props.value,

        'disabled': this.item.enabled.isDisabledOrUndefined.value,
        'onClick': this.item.event.onClick,
        ...this.item.aria.value
      },
      [
        ...this.item.progress.render(),
        ...this.item.label.render(),
        ...this.item.icon.render(),
        ...this.item.ripple.render()
      ]
    )
  }
}
