import { type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Area } from './Area'

import {
  type AreaPropsBasic
} from './props'
import {
  type AreaClasses,
  type AreaComponents,
  type AreaEmits,
  type AreaExpose,
  type AreaSlots
} from './types'

/**
 * AreaDesign
 */
export class AreaDesign<
  COMP extends AreaComponents,
  EXPOSE extends AreaExpose,
  CLASSES extends AreaClasses,
  P extends AreaPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    AreaEmits,
    EXPOSE,
    AreaSlots,
    CLASSES,
    P
  > {
  protected readonly item: Area

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, AreaEmits, P>,
    ItemConstructor: typeof Area = Area
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
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
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode | undefined {
    const area = this.item.area.value

    if (this.slots) {
      if (
        area
        && area in this.slots
      ) {
        return this.initSlot(area)
      }

      if ('default' in this.slots) {
        return this.initSlot('default')
      }
    }

    return undefined
  }
}
