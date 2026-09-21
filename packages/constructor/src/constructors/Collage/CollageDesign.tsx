import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'
import { h, type VNode } from 'vue'

import { Collage } from './Collage'

import {
  type CollagePropsBasic
} from './props'
import {
  type CollageClasses,
  type CollageComponents,
  type CollageEmits,
  type CollageExpose,
  type CollageSlots
} from './types'

/**
 * CollageDesign class for assembling the Collage component VNode tree.
 *
 * Класс CollageDesign для сборки дерева виртуальных узлов VNode компонента Collage.
 */
export class CollageDesign<
  COMP extends CollageComponents,
  EXPOSE extends CollageExpose,
  CLASSES extends CollageClasses,
  P extends CollagePropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  CollageEmits,
  EXPOSE,
  CollageSlots,
  CLASSES,
  P
> {
  protected readonly item: Collage

  /**
   * Constructor for CollageDesign.
   *
   * Конструктор для CollageDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, CollageEmits, P>,
    ItemConstructor: typeof Collage = Collage
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
   * @returns expose object / объект экспонируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.event.expose,
      update: this.item.variant.update
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes map / частичная карта классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        body: this.getSubClass('body'),
        item: this.getSubClass('item')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return this.item.styles
  }

  /**
   * A method for rendering the root container.
   *
   * Метод для рендеринга корневого контейнера.
   * @returns virtual node / виртуальный узел
   */
  protected initRender(): VNode {
    return h(
      'div',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        ...this.item.focusDirection.binds
      },
      this.renderBody()
    )
  }

  /**
   * Rendering the body container.
   *
   * Рендеринг контейнера тела.
   * @returns virtual node / виртуальный узел
   */
  readonly renderBody = (): VNode => {
    return h(
      'div',
      {
        class: this.classes?.value.body
      },
      this.renderList()
    )
  }

  /**
   * List of items rendering.
   *
   * Рендеринг списка элементов.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderList = (): VNode[] => {
    const children: any[] = []

    if (this.props.images) {
      const list = this.item.data.fullData.value

      if (list) {
        list.forEach((item, key) => {
          this.components.renderAdd(
            children,
            'collageItem',
            toBinds(
              {
                class: this.classes?.value.item,
                onClick: this.item.model.onClick,
                ...this.item.focusDirection.bindsItem()
              },
              this.props.collageItemAttrs,
              item
            ),
            undefined,
            item?.value || item?.index || key
          )
        })
      }
    }

    this.initSlot('default', children)

    return children
  }
}
