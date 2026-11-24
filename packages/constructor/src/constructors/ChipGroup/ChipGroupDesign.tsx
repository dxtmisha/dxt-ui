import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  getObjectNoUndefined
} from '@dxtmisha/functional'

import { ChipGroup } from './ChipGroup'

import type { ChipGroupItem } from './basicTypes'
import type { ChipGroupPropsBasic } from './props'
import type {
  ChipGroupClasses,
  ChipGroupComponents,
  ChipGroupEmits,
  ChipGroupExpose,
  ChipGroupSlots
} from './types'

/**
 * ChipGroupDesign class constructor for managing classes, styles, and rendering a group
 * of chip elements with shared attributes and default slot content.
 *
 * Класс-конструктор дизайна ChipGroupDesign для управления классами, стилями и рендерингом
 * группы чипов с общими атрибутами и содержимым слота по умолчанию.
 */
export class ChipGroupDesign<
  COMP extends ChipGroupComponents,
  EXPOSE extends ChipGroupExpose,
  CLASSES extends ChipGroupClasses,
  P extends ChipGroupPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ChipGroupEmits,
    EXPOSE,
    ChipGroupSlots,
    CLASSES,
    P
  > {
  /** ChipGroup logic orchestrator instance / Экземпляр оркестратора логики ChipGroup */
  protected readonly item: ChipGroup

  /**
   * Constructor for creating a ChipGroupDesign instance.
   *
   * Конструктор для создания экземпляра ChipGroupDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ChipGroupEmits, P>,
    ItemConstructor: typeof ChipGroup = ChipGroup
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
   * Renders the full list of chip items.
   *
   * Рендерит полный список элементов чипов.
   * @returns array of rendered chip VNodes / массив отрендеренных VNode чипов
   */
  readonly renderList = (): VNode[] => {
    const children: VNode[] = []
    const list = this.item.getList()
    const length = list.length

    for (let index = 0; index < length; index++) {
      const node = this.renderItem(list[index] as ChipGroupItem)

      if (node) {
        children.push(node)
      }
    }

    return children
  }

  /**
   * Renders a single chip element with merged shared attributes, item props, and click handler.
   *
   * Рендерит отдельный элемент чипа с объединёнными общими атрибутами, свойствами элемента и обработчиком клика.
   * @param item chip item configuration / конфигурация элемента чипа
   * @returns rendered chip VNode or undefined / отрендеренный VNode чипа или undefined
   */
  readonly renderItem = (item: ChipGroupItem): VNode | undefined => {
    return this.components?.renderOne(
      'chip',
      mergeProps(
        getObjectNoUndefined({
          class: this.classes?.value.item,
          iconHide: this.props.iconWhenSelected ? !item.selected : undefined,
          onClick: this.item.onClick
        }),
        getObjectNoUndefined((this.props.chipAttrs ?? {}) as Record<string, unknown>),
        getObjectNoUndefined(item as Record<string, unknown>)
      ),
      undefined,
      String(item.index)
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
   * A method for rendering the root container with chip items and default slot children.
   *
   * Метод для рендеринга корневого контейнера с элементами чипов и содержимым слота по умолчанию.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected initRender(): VNode {
    const children: VNode[] = this.renderList()

    this.initSlot('default', children)

    return h(
      'div',
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
