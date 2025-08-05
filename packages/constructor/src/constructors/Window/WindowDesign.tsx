import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { Window } from './Window'

import {
  type WindowPropsBasic
} from './props'
import {
  type WindowClasses,
  type WindowComponents,
  type WindowEmits,
  type WindowExpose,
  type WindowSlots
} from './types'

/**
 * WindowDesign
 */
export class WindowDesign<
  COMP extends WindowComponents,
  EXPOSE extends WindowExpose,
  CLASSES extends WindowClasses,
  P extends WindowPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    WindowEmits,
    EXPOSE,
    WindowSlots,
    CLASSES,
    P
  > {
  protected readonly item: Window

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, WindowEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Window(
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
        body: this.getSubClass('body'),
        bodyGroup: this.getSubClass('body__group'),
        bodyContext: this.getSubClass('body__context'),
        control: this.getSubClass('control'),
        image: this.getSubClass('image'),
        close: this.getSubClass('close'),
        teleport: this.getSubClass('teleport')
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
