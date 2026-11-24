import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { CollageItem } from './CollageItem'

import {
  type CollageItemProps
} from './props'
import {
  type CollageItemClasses,
  type CollageItemComponents,
  type CollageItemEmits,
  type CollageItemExpose,
  type CollageItemSlots
} from './types'

/**
 * CollageItemDesign constructor class responsible for assembling and rendering the CollageItem component.
 * Coordinates figure container markup, interactive body rendering, image and selection icon projection,
 * and optional CollageBar rendering.
 *
 * Класс-конструктор CollageItemDesign, отвечающий за сборку и рендеринг компонента CollageItem.
 * Координирует разметку контейнера figure, рендеринг интерактивного тела, отображение изображения
 * и иконки выбора, а также опциональный рендеринг CollageBar.
 */
export class CollageItemDesign<
  COMP extends CollageItemComponents,
  EXPOSE extends CollageItemExpose,
  CLASSES extends CollageItemClasses,
  P extends CollageItemProps
> extends DesignConstructorAbstract<
    HTMLElement,
    COMP,
    CollageItemEmits,
    EXPOSE,
    CollageItemSlots,
    CLASSES,
    P
  > {
  /** CollageItem logic orchestrator instance / Экземпляр оркестратора логики CollageItem */
  protected readonly item: CollageItem

  /**
   * Constructor for creating a CollageItemDesign instance.
   *
   * Конструктор для создания экземпляра дизайна CollageItem.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, CollageItemEmits, P>,
    ItemConstructor: typeof CollageItem = CollageItem
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
   * @returns exposed properties object / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.i('event').expose,
      ...this.item.i('dimensions').expose
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns custom classes object / объект пользовательских классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        body: this.naming.getSubClass('body'),
        image: this.naming.getSubClass('image'),
        icon: this.naming.getSubClass('icon'),
        collageBar: this.naming.getSubClass('collageBar')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns custom styles object / объект пользовательских стилей
   */
  protected initStyles(): ConstrStyles {
    return this.item.styles
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node / виртуальная нода
   */
  protected initRender(): VNode {
    const children: VNode[] = [
      ...this.renderBody(),
      ...this.item.callInstance(
        'collageBar',
        item => item.render({
          body: this.slots?.barBody,
          trailing: this.slots?.barTrailing
        }),
        []
      )
    ]

    return h(
      'figure',
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

  /**
   * Body area rendering.
   *
   * Рендеринг области тела.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderBody = (): VNode[] => {
    const tag = this.item.tag
    const children: VNode[] = [
      ...this.item.callInstance('image', item => item.render(), []),
      ...this.item.callInstance('icon', item => item.renderIcon(), [])
    ]

    return [
      h(
        tag,
        mergeProps(
          this.item.i('event').binds,
          {
            class: [
              this.classes?.value.body,
              tag === 'a' ? getClassTagAStatic(this.naming.getDesign()) : undefined
            ]
          }
        ),
        children
      )
    ]
  }
}
