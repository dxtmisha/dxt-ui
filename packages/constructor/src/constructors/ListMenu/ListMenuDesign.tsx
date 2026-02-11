import { type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ListMenu } from './ListMenu'

import type { WindowControlItem } from '../Window'
import {
  type ListMenuPropsBasic
} from './props'
import {
  type ListMenuClasses,
  type ListMenuComponents,
  type ListMenuEmits,
  type ListMenuExpose,
  type ListMenuSlots
} from './types'

/**
 * ListMenuDesign
 */
export class ListMenuDesign<
  COMP extends ListMenuComponents,
  EXPOSE extends ListMenuExpose,
  CLASSES extends ListMenuClasses,
  P extends ListMenuPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ListMenuEmits,
    EXPOSE,
    ListMenuSlots,
    CLASSES,
    P
  > {
  protected readonly item: ListMenu

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ListMenuEmits, P>,
    ItemConstructor: typeof ListMenu = ListMenu
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
    return {
      ...this.item.window.expose
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
        head: this.getSubClass('head'),
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
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode[] {
    return this.item.window.render(
      {
        control: (props: WindowControlItem) => this.initSlot('head', undefined, props),
        default: () => this.initSlot('list')
      },
      {
        ...this.getAttrs(),
        open: this.item.open.is.value,
        class: this.classes?.value.main,
        inert: false,
        autoTabIndex: false,
        closeOnEsc: false
      }
    )
  }
}
