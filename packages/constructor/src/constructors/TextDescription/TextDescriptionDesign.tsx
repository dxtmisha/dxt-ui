import { type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { TextDescription } from './TextDescription'

import {
  type TextDescriptionPropsBasic
} from './props'
import {
  type TextDescriptionClasses,
  type TextDescriptionComponents,
  type TextDescriptionEmits,
  type TextDescriptionExpose,
  type TextDescriptionSlots
} from './types'

/**
 * TextDescriptionDesign
 */
export class TextDescriptionDesign<
  COMP extends TextDescriptionComponents,
  EXPOSE extends TextDescriptionExpose,
  CLASSES extends TextDescriptionClasses,
  P extends TextDescriptionPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TextDescriptionEmits,
    EXPOSE,
    TextDescriptionSlots,
    CLASSES,
    P
  > {
  protected readonly item: TextDescription

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
    options?: ConstrOptions<COMP, TextDescriptionEmits, P>,
    ItemConstructor: typeof TextDescription = TextDescription
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
        description: this.getSubClass('description')
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
    return this.item.description.render(
      undefined,
      {
        ...this.getAttrs(),
        class: this.classes?.value.main
      }
    )
  }
}
