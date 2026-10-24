import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Ripple } from './Ripple'

import {
  type RipplePropsBasic
} from './props'
import {
  type RippleClasses,
  type RippleComponents,
  type RippleEmits,
  type RippleExpose,
  type RippleSlots
} from './types'

/**
 * Rendering class for the Ripple component.
 * Creates the logic class instance, builds CSS classes and renders the root span
 * that listens to pointer presses and hosts the ripple wave elements.
 *
 * Класс рендеринга компонента Ripple.
 * Создаёт экземпляр класса логики, формирует CSS-классы и рендерит корневой span,
 * который отслеживает нажатия указателя и содержит элементы волн.
 */
export class RippleDesign<
  COMP extends RippleComponents,
  EXPOSE extends RippleExpose,
  CLASSES extends RippleClasses,
  P extends RipplePropsBasic
> extends DesignConstructorAbstract<
    HTMLSpanElement,
    COMP,
    RippleEmits,
    EXPOSE,
    RippleSlots,
    CLASSES,
    P
  > {
  /** Ripple logic class instance / Экземпляр класса логики Ripple */
  protected readonly item: Ripple

  /**
   * Constructor for creating a ripple design instance.
   *
   * Конструктор для создания экземпляра дизайна эффекта волны.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor ripple logic class / класс логики ripple
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, RippleEmits, P>,
    ItemConstructor: typeof Ripple = Ripple
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
   * @returns exposed properties / открытые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      add: coordinator => this.item.i('item').add(coordinator),
      addCenter: () => this.item.i('item').addCenter()
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
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
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node of the root element / виртуальный узел корневого элемента
   */
  protected initRender(): VNode {
    return h('span', {
      ref: this.element,
      key: 'ripple',
      class: this.classes?.value.main,
      onPointerdown: this.item.onPointerdown,
      ...AriaStaticInclude.hidden()
    })
  }
}
