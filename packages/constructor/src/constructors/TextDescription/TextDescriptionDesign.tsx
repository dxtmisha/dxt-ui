import { mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { TextDescription } from './TextDescription'

import type {
  TextDescriptionPropsBasic
} from './props'
import type {
  TextDescriptionClasses,
  TextDescriptionComponents,
  TextDescriptionEmits,
  TextDescriptionExpose,
  TextDescriptionSlots
} from './types'

/**
 * TextDescriptionDesign constructor class responsible for rendering textual descriptions
 * with dynamic tag wrapping, merged attributes, and token classes/styles.
 *
 * Класс-конструктор TextDescriptionDesign, отвечающий за рендеринг текстовых описаний
 * с динамической оберткой тегом, объединением атрибутов и токенами классов/стилей.
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
  /** TextDescription logic orchestrator instance / Экземпляр оркестратора логики TextDescription */
  protected readonly item: TextDescription

  /**
   * Constructor for creating a TextDescriptionDesign instance.
   *
   * Конструктор для создания экземпляра TextDescriptionDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструктора
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
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
        description: this.naming.getSubClass('description')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties object / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * A method for rendering the description element.
   *
   * Метод для рендеринга элемента описания.
   * @returns array of rendered virtual nodes / массив отрендеренных виртуальных узлов
   */
  protected initRender(): VNode[] {
    return this.item.callInstance(
      'description',
      item => item.render(
        undefined,
        mergeProps(
          this.getAttrs(),
          {
            ref: this.element,
            class: this.classes?.value.main,
            style: this.styles?.value
          }
        )
      ),
      []
    )
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns custom styles object / объект пользовательских стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }
}
