import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Alert } from './Alert'

import {
  type AlertPropsBasic
} from './props'
import {
  type AlertClasses,
  type AlertComponents,
  type AlertEmits,
  type AlertExpose,
  type AlertSlots
} from './types'

/**
 * AlertDesign constructor class responsible for assembling and rendering the Alert component.
 *
 * Класс-конструктор AlertDesign, отвечающий за сборку и рендеринг компонента Alert.
 */
export class AlertDesign<
  COMP extends AlertComponents,
  EXPOSE extends AlertExpose,
  CLASSES extends AlertClasses,
  P extends AlertPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    AlertEmits,
    EXPOSE,
    AlertSlots,
    CLASSES,
    P
  > {
  /** Alert control item instance / Экземпляр элемента управления Alert */
  protected readonly item: Alert

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor Alert item class / класс элемента Alert
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, AlertEmits, P>,
    ItemConstructor: typeof Alert = Alert
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
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns custom classes object / объект пользовательских классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.hide.classes,
      ...{
        // :classes [!] System label / Системная метка
        icon: this.getSubClass('icon'),
        trailing: this.getSubClass('trailing'),
        context: this.getSubClass('context'),
        label: this.getSubClass('label'),
        description: this.getSubClass('description'),
        body: this.getSubClass('body'),
        button: this.getSubClass('button'),
        buttons: this.getSubClass('buttons'),
        buttonClose: this.getSubClass('buttonClose'),
        links: this.getSubClass('links'),
        linksItem: this.getSubClass('links__item'),
        actions: this.getSubClass('actions')
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
  protected initRender(): VNode | undefined {
    if (this.item.hide.destroy.value) {
      return undefined
    }

    const children: any[] = [
      ...this.item.icon.render(),
      this.renderContext(),
      ...this.renderTrailing(),
      ...this.renderButtonClose()
    ]

    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main,
      onTransitionend: this.item.alertEvent.onTransition,
      ...this.item.ariaBind
    }, children)
  }

  /**
   * Description area rendering.
   *
   * Рендер зоны описания.
   * @returns virtual context node / виртуальная нода контекста
   */
  readonly renderContext = (): VNode => {
    return h(
      'div',
      {
        class: this.classes?.value.context
      },
      [
        ...this.item.label.render(),
        ...this.item.description.render(),
        ...this.renderBody(),
        ...this.item.link.render(),
        ...this.item.actions.render()
      ]
    )
  }

  /**
   * Right side rendering for the button.
   *
   * Рендер правой стороны для кнопки.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderTrailing = (): VNode[] => {
    const children: any[] = [
      ...this.item.button.render(
        undefined,
        { class: this.classes?.value.button }
      )
    ]

    if (
      this.slots
      && 'trailing' in this.slots
    ) {
      this.initSlot('trailing', children)
    }

    if (children.length > 0) {
      return [h('div', {
        class: this.classes?.value.trailing
      }, children)]
    }

    return []
  }

  /**
   * Rendering of the body content in the body slot.
   *
   * Рендер тела, содержимый в слоте body.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderBody = (): VNode[] => {
    if (
      this.slots
      && 'body' in this.slots
    ) {
      return [h(
        'div',
        { class: this.classes?.value.body },
        this.initSlot('body')
      )]
    }

    return []
  }

  /**
   * Close button rendering.
   *
   * Рендер кнопки закрытия.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderButtonClose = (): VNode[] => {
    if (this.props.closeButton) {
      return this.item.buttonClose.render(undefined, {
        class: this.classes?.value.buttonClose,
        onClick: this.item.alertEvent.onClose,
        ...AriaStaticInclude.label(this.item.text.close)
      })
    }

    return []
  }
}
