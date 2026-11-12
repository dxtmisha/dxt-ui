import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { Accordion } from './Accordion'

import type { MotionTransformControlItem } from '../MotionTransform'
import type { AccordionProps } from './props'
import type {
  AccordionClasses,
  AccordionComponents,
  AccordionEmits,
  AccordionExpose,
  AccordionSlots
} from './types'

/**
 * AccordionDesign rendering and composition class.
 *
 * Класс рендеринга и композиции AccordionDesign.
 */
export class AccordionDesign<
  COMP extends AccordionComponents,
  EXPOSE extends AccordionExpose,
  CLASSES extends AccordionClasses,
  P extends AccordionProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    AccordionEmits,
    EXPOSE,
    AccordionSlots,
    CLASSES,
    P
  > {
  /** Accordion logic orchestrator instance / Экземпляр оркестратора логики Accordion */
  protected readonly item: Accordion

  /**
   * Constructor for creating an AccordionDesign instance.
   *
   * Конструктор для создания экземпляра дизайна аккордеона.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor accordion item class / класс элемента аккордеона
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, AccordionEmits, P>,
    ItemConstructor: typeof Accordion = Accordion
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
   * @returns expose object / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.i('motionTransform').expose
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes object / объект классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        head: this.naming.getSubClass('head'),
        body: this.naming.getSubClass('body')
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
   * @returns virtual nodes array / массив виртуальных узлов
   */
  protected initRender(): VNode[] {
    return this.item.i('motionTransform').render(
      {
        head: this.renderHead,
        body: this.renderBody
      },
      {
        ...this.getAttrs(),
        class: this.classes?.value.main,
        style: this.styles?.value,
        ...this.item.binds
      }
    )
  }

  /**
   * Generates data for the header.
   *
   * Генерирует данные для заголовка.
   * @param controlItem motion transform control items / параметры управления анимацией перехода
   * @returns virtual node or undefined / виртуальный узел или undefined
   */
  readonly renderHead = (
    { isOpen, binds }: MotionTransformControlItem
  ): VNode | undefined => {
    return this.components?.renderOne(
      'cell',
      toBinds(
        this.item.i('head').binds,
        binds,
        {
          iconTurn: isOpen,
          class: this.classes?.value.head
        }
      ),
      this.renderHeadSlots()
    )
  }

  /**
   * Generates slots for the header cell.
   *
   * Генерирует слоты для ячейки заголовка.
   * @returns slots object / объект слотов
   */
  readonly renderHeadSlots = (): Record<string, any> => {
    const slots: Record<string, any> = {}

    if (this.slots) {
      if ('body' in this.slots) {
        slots.body = (props: any) => this.initSlot('body', undefined, props)
      }
      if ('caption' in this.slots) {
        slots.caption = (props: any) => this.initSlot('caption', undefined, props)
      }
      if ('description' in this.slots) {
        slots.description = (props: any) => this.initSlot('description', undefined, props)
      }
      if ('label' in this.slots) {
        slots.label = (props: any) => this.initSlot('label', undefined, props)
      }
      if ('trailing' in this.slots) {
        slots.trailing = (props: any) => this.initSlot('trailing', undefined, props)
      }
    }

    return slots
  }

  /**
   * Generates data for the body.
   *
   * Генерирует данные для тела.
   * @param props slot props / параметры слота
   * @returns virtual node / виртуальный узел
   */
  readonly renderBody = (props: any): VNode => {
    return h(
      'div',
      this.getKeyClass('body'),
      this.initSlot('default', undefined, props)
    )
  }
}
