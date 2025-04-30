import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { Icon } from './Icon'

import {
  type IconProps
} from './props'
import {
  type IconClasses,
  type IconComponents,
  type IconEmits,
  type IconExpose,
  type IconSlots
} from './types'

/**
 * IconDesign
 */
export class IconDesign<
  COMP extends IconComponents,
  EXPOSE extends IconExpose,
  CLASSES extends IconClasses,
  P extends IconProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    IconEmits,
    EXPOSE,
    IconSlots,
    CLASSES,
    P
  > {
  protected readonly item: Icon

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, IconEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Icon(
      this.props,
      this.refs,
      this.element,
      this.getName(),
      this.components,
      this.slots,
      this.emits
    )

    // TODO: Method for initializing base objects
    // TODO: Метод для инициализации базовых объектов

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.<br>
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
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  protected initStyles(): ConstrStyles {
    return {
      // TODO: list of user styles
      // TODO: список пользовательских стилей
    }
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    // const children: any[] = []

    return h('div', {
      // ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    })
  }
}
