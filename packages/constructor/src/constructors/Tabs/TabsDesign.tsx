import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Tabs } from './Tabs'

import {
  type TabsPropsBasic
} from './props'
import {
  type TabsClasses,
  type TabsComponents,
  type TabsEmits,
  type TabsExpose,
  type TabsSlots
} from './types'

/**
 * TabsDesign
 */
export class TabsDesign<
  COMP extends TabsComponents,
  EXPOSE extends TabsExpose,
  CLASSES extends TabsClasses,
  P extends TabsPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TabsEmits,
    EXPOSE,
    TabsSlots,
    CLASSES,
    P
  > {
  protected readonly item: Tabs

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TabsEmits, P>,
    ItemConstructor: typeof Tabs = Tabs
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
    return {} as EXPOSE
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
        slide: this.getSubClass('slide')
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
    return [
      ...this.item.tabsNavigation.render(),
      ...this.item.motionAxis.render(this.slidesRender())
    ]
  }

  /**
   * Rendering of slides.
   *
   * Рендеринг слайдов.
   */
  readonly slidesRender = (): Record<string, () => any> | undefined => {
    if (this.slots) {
      const slots: Record<string, () => VNode> = {}

      for (const key in this.slots) {
        slots[key] = () => h(
          'div',
          { class: this.classes?.value.slide },
          this.initSlot(key)
        )
      }

      return slots
    }

    return undefined
  }
}
