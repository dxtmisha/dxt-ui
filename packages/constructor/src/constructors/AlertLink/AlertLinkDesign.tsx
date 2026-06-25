import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AlertLink } from './AlertLink'

import {
  type AlertLinkPropsBasic
} from './props'
import {
  type AlertLinkClasses,
  type AlertLinkComponents,
  type AlertLinkEmits,
  type AlertLinkExpose,
  type AlertLinkSlots
} from './types'

/**
 * AlertLinkDesign class responsible for rendering the AlertLink component.
 * It integrates the logical constructor and Vue setup/render contexts.
 *
 * Класс AlertLinkDesign, отвечающий за рендеринг компонента AlertLink.
 * Интегрирует логический конструктор и контексты Vue setup/render.
 */
export class AlertLinkDesign<
  COMP extends AlertLinkComponents,
  EXPOSE extends AlertLinkExpose,
  CLASSES extends AlertLinkClasses,
  P extends AlertLinkPropsBasic
> extends DesignConstructorAbstract<
    HTMLAnchorElement,
    COMP,
    AlertLinkEmits,
    EXPOSE,
    AlertLinkSlots,
    CLASSES,
    P
  > {
  /** Logical constructor instance / Экземпляр логического конструктора */
  protected readonly item: AlertLink

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
    options?: ConstrOptions<COMP, AlertLinkEmits, P>,
    ItemConstructor: typeof AlertLink = AlertLink
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
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed API object / объект экспортируемого API
   */
  protected initExpose(): EXPOSE {
    return this.item.event.expose as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns custom classes object / объект пользовательских классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        label: this.getSubClass('label')
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
   * A method for rendering the component.
   *
   * Метод для рендеринга компонента.
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  protected initRender(): VNode {
    return h(
      'a',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        ...this.item.event.binds
      },
      [
        ...this.item.label.render()
      ]
    )
  }
}
