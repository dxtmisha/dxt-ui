import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Bullet } from './Bullet'

import type {
  BulletPropsBasic
} from './props'
import type {
  BulletClasses,
  BulletComponents,
  BulletEmits,
  BulletExpose,
  BulletSlots
} from './types'

/**
 * BulletDesign class constructor for managing classes, styles, and rendering
 * the semantic `<ul>` bullet list from `list` items, sanitized `html`, or default slot content.
 *
 * Класс-конструктор дизайна BulletDesign для управления классами, стилями и рендерингом
 * семантического маркированного списка `<ul>` из массива `list`, санитизированного `html` или слота по умолчанию.
 */
export class BulletDesign<
  COMP extends BulletComponents,
  EXPOSE extends BulletExpose,
  CLASSES extends BulletClasses,
  P extends BulletPropsBasic
> extends DesignConstructorAbstract<
    HTMLUListElement,
    COMP,
    BulletEmits,
    EXPOSE,
    BulletSlots,
    CLASSES,
    P
  > {
  /** Bullet logic orchestrator instance / Экземпляр оркестратора логики Bullet */
  protected readonly item: Bullet

  /**
   * Constructor for creating a BulletDesign instance.
   *
   * Конструктор для создания экземпляра BulletDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, BulletEmits, P>,
    ItemConstructor: typeof Bullet = Bullet
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
        item: this.naming.getSubClass('item')
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
   * A method for rendering the `<ul>` element with HTML markup or `BulletItem` / slot children.
   *
   * Метод для рендеринга элемента `<ul>` с HTML-разметкой или дочерними элементами `BulletItem` / слота.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected initRender(): VNode {
    const html = this.item.getHtml()
    const rootProps = mergeProps(
      this.getAttrs(),
      {
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value
      }
    )

    if (html !== undefined) {
      return h('ul', {
        ...rootProps,
        innerHTML: html
      })
    }

    const children: VNode[] = [
      ...this.item.callInstance('list', item => item.render(), [])
    ]

    this.initSlot('default', children)

    return h('ul', rootProps, children)
  }
}
