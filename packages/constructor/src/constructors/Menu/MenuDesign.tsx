import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { Menu } from './Menu'

import {
  type MenuPropsBasic
} from './props'
import {
  type MenuClasses,
  type MenuComponents,
  type MenuEmits,
  type MenuExpose,
  type MenuSlots
} from './types'

/**
 * MenuDesign
 */
export class MenuDesign<
  COMP extends MenuComponents,
  EXPOSE extends MenuExpose,
  CLASSES extends MenuClasses,
  P extends MenuPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    MenuEmits,
    EXPOSE,
    MenuSlots,
    CLASSES,
    P
  > {
  protected readonly item: Menu

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MenuEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Menu(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
    } as EXPOSE
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
        bars: this.getSubClass('bars'),
        list: this.getSubClass('list')
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
    return {
      // TODO: list of user styles
      // TODO: список пользовательских стилей
    }
  }

  /**
   * A method for rendering.
   *
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
