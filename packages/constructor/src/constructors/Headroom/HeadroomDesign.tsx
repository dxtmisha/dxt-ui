import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Headroom } from './Headroom'

import {
  type HeadroomPropsBasic
} from './props'
import {
  type HeadroomClasses,
  type HeadroomComponents,
  type HeadroomEmits,
  type HeadroomExpose,
  type HeadroomSlots
} from './types'

/**
 * Class design constructor for Headroom component.
 * Handles rendering, exposes public methods, and manages CSS class bindings.
 *
 * Класс конструктора дизайна для компонента Headroom.
 * Управляет рендерингом, экспортирует публичные методы и сопоставляет CSS-классы.
 */
export class HeadroomDesign<
  COMP extends HeadroomComponents,
  EXPOSE extends HeadroomExpose,
  CLASSES extends HeadroomClasses,
  P extends HeadroomPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    HeadroomEmits,
    EXPOSE,
    HeadroomSlots,
    CLASSES,
    P
  > {
  /** Instance of Headroom logic class / Экземпляр класса логики Headroom */
  protected readonly item: Headroom

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, HeadroomEmits, P>,
    ItemConstructor: typeof Headroom = Headroom
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
   * Initialization of exposed properties.
   *
   * Инициализация экспортируемых свойств.
   * @returns object with exposed properties / объект с экспортируемыми свойствами
   */
  protected initExpose(): EXPOSE {
    return this.item.expose as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {
        ...this.item.classes
      },
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
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered VNode / сгенерированный VNode
   */
  protected initRender(): VNode {
    return h(
      'div',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main
      },
      this.initSlot('default')
    )
  }
}
