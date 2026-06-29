import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { BulletItem } from './BulletItem'

import {
  type BulletItemPropsBasic
} from './props'
import {
  type BulletItemClasses,
  type BulletItemComponents,
  type BulletItemEmits,
  type BulletItemExpose,
  type BulletItemSlots
} from './types'

/**
 * BulletItemDesign class responsible for rendering the BulletItem component, mapping props to elements, classes, and sub-components.
 *
 * Класс BulletItemDesign, отвечающий за рендеринг компонента BulletItem, сопоставление свойств с элементами, классами и подкомпонентами.
 */
export class BulletItemDesign<
  COMP extends BulletItemComponents,
  EXPOSE extends BulletItemExpose,
  CLASSES extends BulletItemClasses,
  P extends BulletItemPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  BulletItemEmits,
  EXPOSE,
  BulletItemSlots,
  CLASSES,
  P
> {
  /** Instance of the BulletItem constructor / Экземпляр конструктора BulletItem */
  protected readonly item: BulletItem

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, BulletItemEmits, P>,
    ItemConstructor: typeof BulletItem = BulletItem
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
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties / экспортируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns class dictionary / словарь классов
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
   * @returns style dictionary / словарь стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected initRender(): VNode {
    return h(
      'li',
      {
        ...this.getAttrs(),
        class: this.classes?.value.main
      },
      this.item.description.render()
    )
  }
}
