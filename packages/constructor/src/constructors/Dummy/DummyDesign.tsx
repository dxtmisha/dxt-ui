import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Dummy } from './Dummy'

import type {
  DummyPropsBasic
} from './props'
import type {
  DummyClasses,
  DummyComponents,
  DummyEmits,
  DummyExpose,
  DummySlots
} from './types'

/**
 * DummyDesign constructor class responsible for rendering the placeholder dummy block
 * with root element ref binding, merged attributes, token classes/styles, and default slot projection.
 *
 * Класс-конструктор DummyDesign, отвечающий за рендеринг блока-заглушки
 * с привязкой ссылки корневого элемента, объединением атрибутов, токенами классов/стилей и проекцией слота по умолчанию.
 */
export class DummyDesign<
  COMP extends DummyComponents,
  EXPOSE extends DummyExpose,
  CLASSES extends DummyClasses,
  P extends DummyPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    DummyEmits,
    EXPOSE,
    DummySlots,
    CLASSES,
    P
  > {
  /** Dummy logic orchestrator instance / Экземпляр оркестратора логики Dummy */
  protected readonly item: Dummy

  /**
   * Constructor for creating a DummyDesign instance.
   *
   * Конструктор для создания экземпляра DummyDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструктора
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, DummyEmits, P>,
    ItemConstructor: typeof Dummy = Dummy
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
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes object / частичный объект классов
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
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties object / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * A method for rendering the dummy root `<div>` element and default slot content.
   *
   * Метод для рендеринга корневого элемента `<div>` заглушки и содержимого слота по умолчанию.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected initRender(): VNode {
    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      this.initSlot('default')
    )
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
}
