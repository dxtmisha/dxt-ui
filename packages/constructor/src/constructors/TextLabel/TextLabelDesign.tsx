import { type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { TextLabel } from './TextLabel'

import {
  type TextLabelPropsBasic
} from './props'
import {
  type TextLabelClasses,
  type TextLabelComponents,
  type TextLabelEmits,
  type TextLabelExpose,
  type TextLabelSlots
} from './types'

/**
 * TextLabelDesign
 */
export class TextLabelDesign<
  COMP extends TextLabelComponents,
  EXPOSE extends TextLabelExpose,
  CLASSES extends TextLabelClasses,
  P extends TextLabelPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TextLabelEmits,
    EXPOSE,
    TextLabelSlots,
    CLASSES,
    P
  > {
  protected readonly item: TextLabel

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TextLabelEmits, P>,
    ItemConstructor: typeof TextLabel = TextLabel
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
        label: this.getSubClass('label')
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
  protected initRender(): VNode[] {
    return this.item.label.render(
      undefined,
      {
        ...this.getAttrs(),
        class: this.classes?.value.main
      }
    )
  }
}
