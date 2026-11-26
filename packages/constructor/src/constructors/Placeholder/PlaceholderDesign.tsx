import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Placeholder } from './Placeholder'

import {
  type PlaceholderPropsBasic
} from './props'
import {
  type PlaceholderClasses,
  type PlaceholderComponents,
  type PlaceholderEmits,
  type PlaceholderExpose,
  type PlaceholderSlots
} from './types'

/**
 * PlaceholderDesign class is responsible for compiling the visual DOM tree of the Placeholder component.
 *
 * Класс PlaceholderDesign отвечает за сборку визуального дерева DOM компонента Placeholder.
 */
export class PlaceholderDesign<
  COMP extends PlaceholderComponents,
  EXPOSE extends PlaceholderExpose,
  CLASSES extends PlaceholderClasses,
  P extends PlaceholderPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    PlaceholderEmits,
    EXPOSE,
    PlaceholderSlots,
    CLASSES,
    P
  > {
  /** Placeholder logical instance / Логический экземпляр заглушки */
  protected readonly item: Placeholder

  /**
   * Constructor for PlaceholderDesign.
   *
   * Конструктор для PlaceholderDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, PlaceholderEmits, P>,
    ItemConstructor: typeof Placeholder = Placeholder
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
   * Rendering the body for the image.
   *
   * Рендеринг тела для изображения.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderBodyImage = (): VNode[] => {
    const image = this.item.callInstanceArray('image', item => item.render())

    if (image.length > 0) {
      return [h(
        'div',
        this.getKeyClass('image'),
        image
      )]
    }

    return []
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns list of properties for export / список свойств для экспорта
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        image: this.naming.getSubClass('image'),
        label: this.naming.getSubClass('label'),
        description: this.naming.getSubClass('description'),
        actions: this.naming.getSubClass('actions')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns list of user styles / список пользовательских стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  protected initRender(): VNode {
    const children: VNode[] = [
      ...this.renderBodyImage(),
      ...this.item.callInstanceArray('label', item => item.render()),
      ...this.item.callInstanceArray('description', item => item.render())
    ]

    this.initSlot('context', children)
    children.push(...this.item.callInstanceArray('actions', item => item.render()))

    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        this.item.binds,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      children
    )
  }
}
