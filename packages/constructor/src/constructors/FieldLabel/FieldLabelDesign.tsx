import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { FieldLabel } from './FieldLabel'

import {
  type FieldLabelPropsBasic
} from './props'
import {
  type FieldLabelClasses,
  type FieldLabelComponents,
  type FieldLabelEmits,
  type FieldLabelExpose,
  type FieldLabelSlots
} from './types'

/**
 * FieldLabelDesign
 */
export class FieldLabelDesign<
  COMP extends FieldLabelComponents,
  EXPOSE extends FieldLabelExpose,
  CLASSES extends FieldLabelClasses,
  P extends FieldLabelPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    FieldLabelEmits,
    EXPOSE,
    FieldLabelSlots,
    CLASSES,
    P
  > {
  protected readonly item: FieldLabel

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, FieldLabelEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new FieldLabel(
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
        label: this.getSubClass('label'),
        required: this.getSubClass('required')
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
    const children: any[] = [
      ...this.item.label.render(this.renderRequired()),
      ...this.item.progress.render(),
      ...this.item.fieldCounter.render()
    ]

    if (
      this.item.label.is.value
      || this.item.progress.is.value
      || this.item.fieldCounter.isCounter.value
    ) {
      return h(
        'div',
        {
          ...this.getAttrs(),
          class: this.classes?.value.main
        },
        children
      )
    }

    return undefined
  }

  /**
   * Display of the asterisk, an indication of required fields.
   *
   * Вывод звездочки, признак обязательного заполнения.
   */
  readonly renderRequired = (): VNode[] => {
    if (this.props.required) {
      return [
        h(
          'span',
          {
            class: this.classes?.value.required
          },
          '*'
        )
      ]
    }

    return []
  }
}
