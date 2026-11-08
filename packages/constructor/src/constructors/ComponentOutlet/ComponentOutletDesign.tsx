import { type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  type RawSlots,
  render,
  toBinds
} from '@dxtmisha/functional'

import { ComponentOutlet } from './ComponentOutlet'

import {
  type ComponentOutletPropsBasic
} from './props'
import {
  type ComponentOutletClasses,
  type ComponentOutletComponents,
  type ComponentOutletEmits,
  type ComponentOutletExpose,
  type ComponentOutletSlots
} from './types'

/**
 * ComponentOutletDesign rendering and composition class.
 * Renders a registered component from `ComponentStorage` by name without a wrapper element and forwards slots.
 *
 * Класс рендеринга и композиции ComponentOutletDesign.
 * Рендерит зарегистрированный компонент из `ComponentStorage` по имени без элемента-обёртки и пробрасывает слоты.
 */
export class ComponentOutletDesign<
  COMP extends ComponentOutletComponents,
  EXPOSE extends ComponentOutletExpose,
  CLASSES extends ComponentOutletClasses,
  P extends ComponentOutletPropsBasic
> extends DesignConstructorAbstract<
    Element,
    COMP,
    ComponentOutletEmits,
    EXPOSE,
    ComponentOutletSlots,
    CLASSES,
    P
  > {
  /** ComponentOutlet logic constructor / Логический конструктор ComponentOutlet */
  protected readonly item: ComponentOutlet

  /**
   * Constructor for creating a ComponentOutletDesign instance.
   *
   * Конструктор для создания экземпляра ComponentOutletDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ComponentOutletEmits, P>,
    ItemConstructor: typeof ComponentOutlet = ComponentOutlet
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
   * @returns exposed properties / открытые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      getElement: this.item.getElement
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node of the resolved component or default slot / виртуальный узел разрешённого компонента или слота по умолчанию
   */
  protected initRender(): VNode | undefined {
    const component = this.item.component

    if (component) {
      return render(
        component.component,
        toBinds(
          this.item.binds,
          this.getAttrs(),
          {
            class: this.classes?.value.main,
            style: this.styles?.value
          },
          component.props
        ),
        this.slots as RawSlots,
        this.props.name
      )
    }

    return this.initSlot('default')
  }
}
