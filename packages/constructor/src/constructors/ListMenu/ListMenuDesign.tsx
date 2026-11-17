import { mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ListMenu } from './ListMenu'

import type { WindowControlItem } from '../Window'
import type { ListMenuPropsBasic } from './props'
import type {
  ListMenuClasses,
  ListMenuComponents,
  ListMenuEmits,
  ListMenuExpose,
  ListMenuSlots
} from './types'

/**
 * ListMenuDesign is a design constructor for the ListMenu component.
 * It connects the ListMenu logic, sets up slots, classes, styles, and defines the rendering function.
 *
 * ListMenuDesign — конструктор дизайна для компонента ListMenu.
 * Он связывает логику ListMenu, настраивает слоты, классы, стили и определяет функцию рендеринга.
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
  /** ListMenu logic orchestrator instance / Экземпляр логического оркестратора ListMenu */
  protected readonly item: ListMenu

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Initialization of all the necessary properties for exposure.
   *
   * Инициализация всех необходимых свойств для экспозиции.
   * @returns exposed properties / экспонируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.i('window').expose
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns initialized classes / инициализированные классы
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        head: this.naming.getSubClass('head'),
        list: this.naming.getSubClass('list')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns initialized styles / инициализированные стили
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering the component.
   *
   * Метод для рендеринга компонента.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  protected initRender(): VNode[] {
    return this.item.i('window').render(
      {
        control: this.renderHead,
        default: this.renderList
      },
      mergeProps(
        this.getAttrs(),
        this.item.binds,
        {
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      )
    )
  }

  /**
   * Render head control slot.
   *
   * Рендер слота заголовка управления.
   * @param props window control item properties / свойства элемента управления окном
   * @returns head virtual node or undefined / виртуальный узел заголовка или undefined
   */
  readonly renderHead = (props: WindowControlItem): VNode | undefined => {
    return this.initSlot('head', undefined, props)
  }

  /**
   * Render menu list slot.
   *
   * Рендер слота списка меню.
   * @returns list virtual node or undefined / виртуальный узел списка или undefined
   */
  readonly renderList = (): VNode | undefined => {
    return this.initSlot('list')
  }
}
