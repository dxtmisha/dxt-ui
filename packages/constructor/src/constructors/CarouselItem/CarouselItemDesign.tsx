import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { CarouselItem } from './CarouselItem'

import type { CarouselItemPropsBasic } from './props'
import type {
  CarouselItemClasses,
  CarouselItemComponents,
  CarouselItemEmits,
  CarouselItemExpose,
  CarouselItemSlots
} from './types'

/**
 * Design rendering class for CarouselItem.
 *
 * Класс отрисовки дизайна для CarouselItem.
 */
export class CarouselItemDesign<
  COMP extends CarouselItemComponents,
  EXPOSE extends CarouselItemExpose,
  CLASSES extends CarouselItemClasses,
  P extends CarouselItemPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    CarouselItemEmits,
    EXPOSE,
    CarouselItemSlots,
    CLASSES,
    P
  > {
  protected readonly item: CarouselItem

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructor logic item class / класс логики конструктора элемента
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, CarouselItemEmits, P>,
    ItemConstructor: typeof CarouselItem = CarouselItem
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
   * Initialization of all exposed properties.
   *
   * Инициализация всех экспортируемых свойств.
   * @returns expose object / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {
      isSelected: () => this.item.data.isSelected(),
      getSlide: () => this.item.data.slide,
      ...this.item.event.expose
    } as EXPOSE
  }

  /**
   * Generates classes dictionary for the element and subclasses.
   *
   * Генерирует словарь классов для элемента и подклассов.
   * @returns partial classes dictionary / частичный словарь классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        body: this.getSubClass('body'),
        image: this.getSubClass('image')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Returns dynamic inline styles for the component.
   *
   * Возвращает динамические inline-стили для компонента.
   * @returns dynamic inline styles / динамические inline-стили
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Main render method constructing the virtual DOM tree.
   *
   * Основной метод рендеринга, создающий виртуальное DOM-дерево.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected initRender(): VNode {
    const children: any[] = [
      ...this.item.image.render()
    ]

    this.initSlot('default', children, {
      selected: this.item.data.isSelected(),
      slide: this.item.data.slide
    })

    return h(
      this.item.tag,
      {
        ...this.item.binds,
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value
      },
      children
    )
  }
}
