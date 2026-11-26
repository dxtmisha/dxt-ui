import { mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { TextLabel } from './TextLabel'

import type {
  TextLabelPropsBasic
} from './props'
import type {
  TextLabelClasses,
  TextLabelComponents,
  TextLabelEmits,
  TextLabelExpose,
  TextLabelSlots
} from './types'

/**
 * TextLabelDesign constructor class responsible for rendering textual labels
 * with dynamic tag wrapping, merged attributes, and token classes/styles.
 *
 * Класс-конструктор TextLabelDesign, отвечающий за рендеринг текстовых меток
 * с динамической оберткой тегом, объединением атрибутов и токенами классов/стилей.
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
  /** TextLabel logic orchestrator instance / Экземпляр оркестратора логики TextLabel */
  protected readonly item: TextLabel

  /**
   * Constructor for creating a TextLabelDesign instance.
   *
   * Конструктор для создания экземпляра TextLabelDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструктора
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
        label: this.naming.getSubClass('label')
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
   * A method for rendering the label element.
   *
   * Метод для рендеринга элемента метки.
   * @returns array of rendered virtual nodes / массив отрендеренных виртуальных узлов
   */
  protected initRender(): VNode[] {
    return this.item.callInstance(
      'label',
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
