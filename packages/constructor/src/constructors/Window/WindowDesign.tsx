import { h, Teleport, type VNode } from 'vue'
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

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      id: this.item.classes.getId(),
      open: this.item.open.item,
      setOpen: this.item.open.set,
      toOpen: this.item.open.open,
      toClose: this.item.open.close,
      toggle: this.item.open.toggle,
      control: this.item.slotData
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classesList.value,
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
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode[] {
    const main: any[] = []

    this.initSlot('control', main, this.item.slotData)

    if (this.item.open.inDom.value) {
      if (this.item.staticMode.item.value) {
        main.push(this.renderMain())
      } else {
        main.push(
          h(
            Teleport,
            {
              key: 'teleport',
              to: 'body'
            },
            h(
              'div',
              {
                'class': this.classes?.value.teleport,
                'data-window-teleport': this.item.classes.getId()
              },
              this.renderMain()
            )
          )
        )
      }
    }

    return main
  }

  /**
   * Render main window element.
   *
   * Рендер главного элемента окна.
   */
  protected readonly renderMain = (): VNode => {
    return h(
      'div',
      {
        'key': 'main',
        'ref': this.element,
        'class': this.classes?.value.main,
        'style': this.styles?.value,
        'data-window': this.item.classes.getId(),
        'onTransitionend': this.item.event.onTransition
      },
      this.renderBody()
    )
  }

  /**
   * Render body element.
   *
   * Рендер элемента тела.
   */
  protected readonly renderBody = (): VNode => {
    return h(
      'div',
      {
        key: 'body',
        ...this.getAttrs(),
        class: {
          [String(this.classes?.value.body)]: true,
          ...this.toClass(this.attrs?.class)
        }
      },
      [
        ...this.renderBodyImage(),
        ...this.renderBodyClose(),
        ...this.renderBodyGroup()
      ]
    )
  }

  /**
   * Generates an element to group the displayed data.
   *
   * Генерирует элемент для группировки выводимых данных.
   */
  protected readonly renderBodyGroup = (): VNode[] => {
    const children: any[] = []

    this.initSlot('title', children, this.item.slotData)
    children.push(this.renderBodyContext())
    this.initSlot('footer', children, this.item.slotData)

    return [
      h('div', {
        key: 'group',
        class: this.classes?.value.bodyGroup
      }, children)
    ]
  }

  /**
   * Render context element.
   *
   * Рендер элемента контекста.
   */
  protected readonly renderBodyContext = (): VNode[] => {
    return this.item.scrollbar.render(
      'div',
      {
        'key': 'bodyContext',
        'class': this.classes?.value.bodyContext,
        'divider': this.props.divider,
        'data-window-body': '1'
      },
      () => this.initSlot('default', undefined, this.item.slotData)
    )
  }

  /**
   * Generates an element to display the image.
   *
   * Генерирует элемент для вывода изображения
   */
  protected readonly renderBodyImage = (): VNode[] => {
    if (this.props.image) {
      return [h(
        'div',
        {
          class: this.classes?.value.image
        },
        this.item.image.render()
      )]
    }

    return []
  }

  /**
   * Generates an element to display the close button.
   *
   * Генерирует элемент для вывода кнопки закрытия.
   */
  protected readonly renderBodyClose = (): VNode[] => {
    if (this.props.closeButton) {
      return this.components.render(
        'button',
        {
          class: [
            this.classes?.value.close,
            this.item.classes.list.close
          ],
          icon: this.props.iconClose
        }
      )
    }

    return []
  }
}
