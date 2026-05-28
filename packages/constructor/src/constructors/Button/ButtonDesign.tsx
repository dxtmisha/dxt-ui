import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Button } from './Button'

import {
  type ButtonPropsBasic
} from './props'
import {
  type ButtonClasses,
  type ButtonComponents,
  type ButtonEmits,
  type ButtonExpose,
  type ButtonSlots
} from './types'

/**
 * ButtonDesign constructor class responsible for assembling and rendering the Button component.
 * It manages class resolution, styles initialization, and the final DOM VNode rendering tree.
 *
 * Класс-конструктор ButtonDesign, отвечающий за сборку и рендеринг компонента кнопки.
 * Управляет разрешением классов, инициализацией стилей и финальным деревом рендеринга VNode DOM.
 */
export class ButtonDesign<
  COMP extends ButtonComponents,
  EXPOSE extends ButtonExpose,
  CLASSES extends ButtonClasses,
  P extends ButtonPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  ButtonEmits,
  EXPOSE,
  ButtonSlots,
  CLASSES,
  P
> {
  /** Button control item instance / Экземпляр элемента управления кнопкой */
  protected readonly item: Button

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor button item class / класс элемента кнопки
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ButtonEmits, P>,
    ItemConstructor: typeof Button = Button
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
   * @returns exposed properties object / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.event.expose
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
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        label: this.getSubClass('label'),
        icon: this.getSubClass('icon'),
        trailing: this.getSubClass('trailing'),
        loading: this.getSubClass('loading')
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
    return h(
      this.item.tag,
      {
        ...this.getAttrs(),
        'ref': this.element,
        'type': this.props.type,

        'class': this.classes?.value.main,
        'style': this.styles?.value,

        'data-value': this.props.value,

        'disabled': this.item.enabled.isDisabledOrUndefined,
        ...this.item.eventList,
        ...this.item.aria
      },
      [
        ...this.item.progress.render(),
        ...this.item.label.render(),
        ...this.item.icon.render(),
        ...this.item.ripple.render()
      ]
    )
  }
}
