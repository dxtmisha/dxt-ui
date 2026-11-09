import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { LabelInclude } from '../../classes/LabelInclude'

import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
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
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        label: this.naming.getSubClass('label'),
        icon: this.naming.getSubClass('icon'),
        trailing: this.naming.getSubClass('trailing'),
        loading: this.naming.getSubClass('loading')
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
        ...this.item.binds,
        ref: this.element,

        class: this.classes?.value.main,
        style: this.styles?.value
      },
      [
        ...this.renderProgress(),
        ...this.renderLabel(),
        ...this.renderIcon(),
        ...this.renderRipple()
      ]
    )
  }

  /**
   * Renders the progress indicator element.
   *
   * Рендерит элемент индикатора прогресса.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderProgress = (): VNode[] => {
    if (ProgressInclude.is(this.props)) {
      return this.item.i('progress').render()
    }

    return []
  }

  /**
   * Renders the label element.
   *
   * Рендерит элемент метки.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderLabel = (): VNode[] => {
    if (LabelInclude.is(this.props, this.slots)) {
      return this.item.i('label').render()
    }

    return []
  }

  /**
   * Renders the icon element.
   *
   * Рендерит элемент иконки.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderIcon = (): VNode[] => {
    if (IconTrailingInclude.is(this.props)) {
      return this.item.i('icon').render()
    }

    return []
  }

  /**
   * Renders the ripple element.
   *
   * Рендерит элемент эффекта волны.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderRipple = (): VNode[] => {
    if (RippleInclude.is(this.props)) {
      return this.item.i('ripple').render()
    }

    return []
  }
}
