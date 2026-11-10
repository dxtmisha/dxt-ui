import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Window } from './Window'
import { WindowStatic } from './WindowStatic'

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
 * WindowDesign class that handles component rendering, exposure of public methods,
 * class management, and slot delegation for Window.
 *
 * Класс WindowDesign, управляющий рендерингом компонента, экспонированием публичных методов,
 * управлением классами и делегированием слотов для Window.
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
   * @param ItemConstructor window item class/ класс элемента окна
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, WindowEmits, P>,
    ItemConstructor: typeof Window = Window
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed methods and properties / экспонированные методы и свойства
   */
  protected initExpose(): EXPOSE {
    return {
      getId: () => this.item.i('classesData').getId(),
      getOpen: () => this.item.i('open').item.value,
      getControl: () => this.item.slotData,

      setOpen: this.item.i('open').set,
      toOpen: this.item.i('open').open,
      toClose: this.item.i('open').close,
      toggle: this.item.i('open').toggle
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns class list object / объект списка классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        body: this.naming.getSubClass('body'),
        bodyGroup: this.naming.getSubClass('body__group'),
        bodyContext: this.naming.getSubClass('body__context'),
        control: this.naming.getSubClass('control'),
        image: this.naming.getSubClass('image'),
        close: this.naming.getSubClass('close'),
        teleport: this.naming.getSubClass('teleport')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered virtual nodes / отрендеренные виртуальные узлы
   */
  protected initRender(): VNode[] {
    const main: any[] = []

    this.initSlot('control', main, this.item.slotData)

    if (this.item.i('open').inDom) {
      if (
        (
          WindowStatic.is(this.props)
          && this.item.i('staticMode').item.value
          && this.item.isRender()
        )
        || this.props.embedded
      ) {
        main.push(this.renderMain())
      } else {
        main.push(
          ...this.item.i('teleport').render(
            h(
              'div',
              {
                'class': this.classes?.value.teleport,
                'data-window-teleport': this.item.i('classesData').getId()
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
   * @returns main window virtual node / виртуальный узел главного окна
   */
  readonly renderMain = (): VNode => {
    return h(
      'div',
      {
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        ...this.item.binds
      },
      this.renderBody()
    )
  }

  /**
   * Render body element.
   *
   * Рендер элемента тела.
   * @returns body virtual node / виртуальный узел тела
   */
  readonly renderBody = (): VNode => {
    return h(
      'div',
      {
        key: 'body',
        ...this.getAttrs(),
        class: [
          this.classes?.value.body,
          this.attrs?.class
        ]
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
   * @returns array of body group nodes / массив узлов группы тела
   */
  readonly renderBodyGroup = (): VNode[] => {
    const children: any[] = []

    this.initSlot('title', children, this.item.slotData)
    children.push(this.renderBodyContext())
    this.initSlot('footer', children, this.item.slotData)

    return [
      h('div', this.getKeyClass('bodyGroup'), children)
    ]
  }

  /**
   * Render context element.
   *
   * Рендер элемента контекста.
   * @returns array of context nodes / массив узлов контекста
   */
  readonly renderBodyContext = (): VNode[] => {
    const binds = {
      'key': 'bodyContext',
      'class': this.classes?.value.bodyContext,
      'divider': this.props.divider,
      'data-window-body': '1'
    }

    if (this.components?.is('scrollbar')) {
      return this.item.i('scrollbar').render(
        'div',
        binds,
        this.renderDefault
      )
    }

    return [
      h(
        'div',
        binds,
        this.renderDefault()
      )
    ]
  }

  /**
   * Render default slot content.
   *
   * Рендер содержимого слота по умолчанию.
   * @returns default slot virtual node or undefined / виртуальный узел слота по умолчанию или undefined
   */
  readonly renderDefault = (): VNode | undefined => {
    return this.initSlot('default', undefined, this.item.slotData)
  }

  /**
   * Generates an element to display the image.
   *
   * Генерирует элемент для вывода изображения.
   * @returns array of image nodes / массив узлов изображения
   */
  readonly renderBodyImage = (): VNode[] => {
    if (this.props.image) {
      return this.item.i('image').render()
    }

    return []
  }

  /**
   * Generates an element to display the close button.
   *
   * Генерирует элемент для вывода кнопки закрытия.
   * @returns array of close button nodes / массив узлов кнопки закрытия
   */
  readonly renderBodyClose = (): VNode[] => {
    if (this.props.closeButton) {
      return this.components?.render(
        'button',
        {
          key: 'button-close',
          class: [
            this.classes?.value.close,
            this.item.i('classesData').list.close
          ],
          icon: this.props.iconClose,
          ...AriaStaticInclude.label(this.item.i('text').close)
        }
      ) ?? []
    }

    return []
  }
}
