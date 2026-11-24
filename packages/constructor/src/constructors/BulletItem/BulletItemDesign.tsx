import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { BulletItem } from './BulletItem'

import type {
  BulletItemPropsBasic
} from './props'
import type {
  BulletItemClasses,
  BulletItemComponents,
  BulletItemEmits,
  BulletItemExpose,
  BulletItemSlots
} from './types'

/**
 * BulletItemDesign class responsible for rendering the semantic `<li>` bullet element,
 * binding root `elementHtml`, and composing description and default slot content.
 *
 * Класс BulletItemDesign, отвечающий за рендеринг семантического элемента маркированного списка `<li>`,
 * привязку корневого `elementHtml` и компоновку описания и слота по умолчанию.
 */
export class BulletItemDesign<
  COMP extends BulletItemComponents,
  EXPOSE extends BulletItemExpose,
  CLASSES extends BulletItemClasses,
  P extends BulletItemPropsBasic
> extends DesignConstructorAbstract<
    HTMLLIElement,
    COMP,
    BulletItemEmits,
    EXPOSE,
    BulletItemSlots,
    CLASSES,
    P
  > {
  /** BulletItem logic orchestrator instance / Экземпляр оркестратора логики BulletItem */
  protected readonly item: BulletItem

  /**
   * Constructor for creating a BulletItemDesign instance.
   *
   * Конструктор для создания экземпляра BulletItemDesign.
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
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
   * A method for rendering the `<li>` element with description and default slot children.
   *
   * Метод для рендеринга элемента `<li>` с описанием и содержимым слота по умолчанию.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected initRender(): VNode {
    const children: VNode[] = [
      ...this.item.callInstance('description', item => item.render(), [])
    ]

    this.initSlot('default', children)

    return h(
      'li',
      mergeProps(
        this.getAttrs(),
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
