import { type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ClientOnly } from './ClientOnly'

import {
  type ClientOnlyPropsBasic
} from './props'
import {
  type ClientOnlyClasses,
  type ClientOnlyComponents,
  type ClientOnlyEmits,
  type ClientOnlyExpose,
  type ClientOnlySlots
} from './types'

/**
 * ClientOnlyDesign
 */
export class ClientOnlyDesign<
  COMP extends ClientOnlyComponents,
  EXPOSE extends ClientOnlyExpose,
  CLASSES extends ClientOnlyClasses,
  P extends ClientOnlyPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ClientOnlyEmits,
    EXPOSE,
    ClientOnlySlots,
    CLASSES,
    P
  > {
  protected readonly item: ClientOnly

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
    options?: ConstrOptions<COMP, ClientOnlyEmits, P>,
    ItemConstructor: typeof ClientOnly = ClientOnly
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
    if (this.item.clientOnly.is()) {
      return this.initSlot('default')
    }

    return undefined
  }
}
