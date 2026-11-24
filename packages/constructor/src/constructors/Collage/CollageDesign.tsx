import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  getObjectNoUndefined,
  type ListList
} from '@dxtmisha/functional'

import { Collage } from './Collage'

import type { CollageProps } from './props'
import type {
  CollageClasses,
  CollageComponents,
  CollageEmits,
  CollageExpose,
  CollageSlots
} from './types'

/**
 * CollageDesign class for assembling the Collage component VNode tree.
 * Coordinates root container bindings, body grid layout, item rendering, and slot projection.
 *
 * Класс CollageDesign для сборки дерева виртуальных узлов VNode компонента Collage.
 * Координирует привязки корневого контейнера, сетку тела, рендеринг элементов и проекцию слотов.
 */
export class CollageDesign<
  COMP extends CollageComponents,
  EXPOSE extends CollageExpose,
  CLASSES extends CollageClasses,
  P extends CollageProps
> extends DesignConstructorAbstract<
    HTMLElement,
    COMP,
    CollageEmits,
    EXPOSE,
    CollageSlots,
    CLASSES,
    P
  > {
  /** Collage logic orchestrator instance / Экземпляр оркестратора логики Collage */
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Renders the body container wrapping items and default slot content.
   *
   * Рендерит контейнер тела, оборачивающий элементы и содержимое слота по умолчанию.
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
   * Renders a single collage item with merged shared attributes, item properties, and event handlers.
   *
   * Рендерит отдельный элемент коллажа с объединёнными общими атрибутами, свойствами элемента и обработчиками событий.
   * @param item normalized collage item data / нормализованные данные элемента коллажа
   * @param key fallback item index / резервный индекс элемента
   * @returns rendered virtual node or undefined / отрендеренный виртуальный узел или undefined
   */
  readonly renderItem = (
    item: ListList[number],
    key: number
  ): VNode | undefined => {
    return this.components?.renderOne(
      'collageItem',
      mergeProps(
        getObjectNoUndefined({
          class: this.classes?.value.item,
          onClick: this.item.onClick,
          ...this.item.getBindsItem()
        }),
        getObjectNoUndefined((this.props.collageItemAttrs ?? {}) as Record<string, unknown>),
        getObjectNoUndefined(item as Record<string, unknown>)
      ),
      undefined,
      String(item.value ?? item.index ?? key)
    )
  }

  /**
   * Renders the list of collage items followed by default slot content.
   *
   * Рендерит список элементов коллажа с последующим содержимым слота по умолчанию.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderList = (): VNode[] => {
    const children: VNode[] = []
    const list = this.item.getList()
    const length = list.length

    for (let index = 0; index < length; index++) {
      const node = this.renderItem(list[index] as ListList[number], index)

      if (node) {
        children.push(node)
      }
    }

    this.initSlot('default', children)

    return children
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns expose object / объект экспонируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {
      getValue: () => this.item.i('event').expose.getValue?.(),
      getDetail: () => this.item.i('event').expose.getDetail?.(),
      update: this.item.update
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
        body: this.naming.getSubClass('body'),
        item: this.naming.getSubClass('item')
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
      mergeProps(
        this.getAttrs(),
        this.item.binds,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      this.renderBody()
    )
  }
}
