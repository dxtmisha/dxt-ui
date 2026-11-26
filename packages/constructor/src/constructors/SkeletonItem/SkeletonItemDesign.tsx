import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { SkeletonItem } from './SkeletonItem'

import type { SkeletonItemPropsBasic } from './props'
import type {
  SkeletonItemClasses,
  SkeletonItemComponents,
  SkeletonItemEmits,
  SkeletonItemExpose,
  SkeletonItemSlots
} from './types'

/**
 * Constructor class for the SkeletonItem component design.
 * Integrates the abstract design constructor, merges external and item attributes, applies skeleton token classes, and renders slot or placeholder content.
 *
 * Класс конструктора дизайна для компонента SkeletonItem.
 * Интегрирует абстрактный конструктор дизайна, объединяет внешние и элементные атрибуты, применяет классы токенов скелетона и рендерит слот либо содержимое-заглушку.
 */
export class SkeletonItemDesign<
  COMP extends SkeletonItemComponents,
  EXPOSE extends SkeletonItemExpose,
  CLASSES extends SkeletonItemClasses,
  P extends SkeletonItemPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SkeletonItemEmits,
    EXPOSE,
    SkeletonItemSlots,
    CLASSES,
    P
  > {
  /** Constructor logic instance / Экземпляр логики конструктора */
  protected readonly item: SkeletonItem

  /**
   * Constructor for creating a SkeletonItemDesign instance.
   *
   * Конструктор для создания экземпляра SkeletonItemDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструктора
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SkeletonItemEmits, P>,
    ItemConstructor: typeof SkeletonItem = SkeletonItem
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
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns object with exposed properties / объект с открытыми свойствами
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * A method for rendering the skeleton item virtual node.
   *
   * Метод для рендеринга виртуального узла элемента скелетона.
   * @returns virtual node / виртуальный узел
   */
  protected initRender(): VNode {
    const attrs = this.getAttrs()
    const hasExternalAriaLabel = Boolean(
      attrs['aria-label']
      || attrs['aria-labelledby']
      || attrs.ariaLabel
      || attrs.ariaLabelledby
    )
    const props = mergeProps(
      hasExternalAriaLabel ? {} : this.item.aria,
      attrs,
      this.item.binds,
      {
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value
      }
    )

    if (this.item.isObject()) {
      return h(
        this.item.tag,
        props,
        this.slots?.default
          ? {
              default: () => {
                const slotChildren: VNode[] = []
                this.initSlot('default', slotChildren)
                return slotChildren
              }
            }
          : undefined
      )
    }

    if (this.slots?.default) {
      const children: VNode[] = []
      this.initSlot('default', children)

      return h(
        this.item.tag,
        props,
        children
      )
    }

    return h(
      this.item.tag,
      props,
      String(this.item.label)
    )
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }
}
