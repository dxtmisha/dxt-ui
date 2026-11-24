import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Container } from './Container'

import type {
  ContainerPropsBasic
} from './props'
import type {
  ContainerClasses,
  ContainerComponents,
  ContainerEmits,
  ContainerExpose,
  ContainerSlots
} from './types'

/**
 * ContainerDesign class constructor for managing container layout classes, styles,
 * root element ref binding, and default slot rendering.
 *
 * Класс-конструктор дизайна ContainerDesign для управления классами и стилями контейнера,
 * привязкой ссылки на корневой элемент и рендерингом слота по умолчанию.
 */
export class ContainerDesign<
  COMP extends ContainerComponents,
  EXPOSE extends ContainerExpose,
  CLASSES extends ContainerClasses,
  P extends ContainerPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ContainerEmits,
    EXPOSE,
    ContainerSlots,
    CLASSES,
    P
  > {
  /** Container logic orchestrator instance / Экземпляр оркестратора логики Container */
  protected readonly item: Container

  /**
   * Constructor for creating a ContainerDesign instance.
   *
   * Конструктор для создания экземпляра ContainerDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor container logic constructor class / класс конструктора логики контейнера
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ContainerEmits, P>,
    ItemConstructor: typeof Container = Container
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
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes object / частичный объект классов
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
   * @returns custom styles object / объект пользовательских стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering the root container `<div>` element and default slot content.
   *
   * Метод для рендеринга корневого элемента `<div>` контейнера и содержимого слота по умолчанию.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected initRender(): VNode {
    const children: VNode[] = []

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
