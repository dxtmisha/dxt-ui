import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { CollageBar } from './CollageBar'

import {
  type CollageBarProps
} from './props'
import {
  type CollageBarClasses,
  type CollageBarComponents,
  type CollageBarEmits,
  type CollageBarExpose,
  type CollageBarSlots
} from './types'

/**
 * CollageBarDesign constructor class responsible for assembling and rendering the CollageBar component.
 * It coordinates class resolution, styles initialization, and the final DOM VNode rendering tree.
 *
 * Класс-конструктор CollageBarDesign, отвечающий за сборку и рендеринг компонента CollageBar.
 * Координирует разрешение классов, инициализацию стилей и финальное дерево рендеринга VNode DOM.
 */
export class CollageBarDesign<
  COMP extends CollageBarComponents,
  EXPOSE extends CollageBarExpose,
  CLASSES extends CollageBarClasses,
  P extends CollageBarProps
> extends DesignConstructorAbstract<
    HTMLElement,
    COMP,
    CollageBarEmits,
    EXPOSE,
    CollageBarSlots,
    CLASSES,
    P
  > {
  /** CollageBar logic orchestrator instance / Экземпляр оркестратора логики CollageBar */
  protected readonly item: CollageBar

  /**
   * Constructor for creating a CollageBarDesign instance.
   *
   * Конструктор для создания экземпляра дизайна CollageBar.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, CollageBarEmits, P>,
    ItemConstructor: typeof CollageBar = CollageBar
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
      ...this.item.i('event').expose
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
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        context: this.naming.getSubClass('context'),
        label: this.naming.getSubClass('label'),
        description: this.naming.getSubClass('description'),
        button: this.naming.getSubClass('button')
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
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node / виртуальная нода
   */
  protected initRender(): VNode {
    const children: VNode[] = [
      ...this.renderContext(),
      ...this.item.callInstance('button', item => item.render(), [])
    ]

    this.initSlot('trailing', children)

    return h(
      this.item.tag,
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

  /**
   * Content and text area rendering.
   *
   * Рендеринг области контента и текста.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderContext = (): VNode[] => {
    const children: VNode[] = [
      ...this.renderBody()
    ]

    if (children.length > 0) {
      return [
        h(
          'div',
          this.getKeyClass('context'),
          children
        )
      ]
    }

    return []
  }

  /**
   * Body rendering.
   *
   * Рендеринг тела.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderBody = (): VNode[] => {
    const children: VNode[] = [
      ...this.item.callInstance('label', item => item.render(), []),
      ...this.item.callInstance('description', item => item.render(), [])
    ]

    this.initSlot('body', children)

    return children
  }
}
