import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { Accordion } from './Accordion'

import type { MotionTransformControlItem } from '../MotionTransform'
import {
  type AccordionProps
} from './props'
import {
  type AccordionClasses,
  type AccordionComponents,
  type AccordionEmits,
  type AccordionExpose,
  type AccordionSlots
} from './types'

/**
 * AccordionDesign
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
  protected readonly item: Accordion

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, AccordionEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Accordion(
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
      ...this.item.motionTransform.expose
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
        body: this.getSubClass('body')
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
    return this.item.motionTransform.render(
      {
        head: this.renderHead,
        body: this.renderBody
      },
      {
        ...this.getAttrs(),
        'class': this.classes?.value.main,
        'data-divider': this.props.divider ? 'divider' : undefined,
        ...this.item.model.getBinds()
      }
    )
  }

  /**
   * Generates data for the header.
   *
   * Генерирует данные для заголовка.
   * @param open open status/ статус открытия
   */
  protected readonly renderHead = (
    { isOpen, idBody }: MotionTransformControlItem
  ): VNode | undefined => {
    const slots: Record<string, any> = {}

    if (this.slots) {
      if ('label' in this.slots) {
        slots.label = (props: any) => this.initSlot('label', undefined, props)
      }
      if ('description' in this.slots) {
        slots.description = (props: any) => this.initSlot('description', undefined, props)
      }
      if ('caption' in this.slots) {
        slots.caption = (props: any) => this.initSlot('caption', undefined, props)
      }
      if ('trailing' in this.slots) {
        slots.trailing = (props: any) => this.initSlot('trailing', undefined, props)
      }
      if ('body' in this.slots) {
        slots.body = (props: any) => this.initSlot('body', undefined, props)
      }
    }

    return this.components.renderOne(
      'cell',
      toBinds(
        {
          'icon': this.props.icon,
          'iconTrailing': this.props.iconArrowDown,
          'iconTurn': isOpen.value,
          'label': this.props.label,
          'description': this.props.description,
          'class': this.classes?.value.head,
          'dynamic': true,
          'onClick': this.item.event.onClick,
          'role': 'button',
          'aria-expanded': isOpen.value ? 'true' : 'false',
          'aria-controls': idBody
        },
        this.props.cellAttrs
      ),
      slots
    )
  }

  /**
   * Generates data for the body.
   *
   * Генерирует данные для тела.
   */
  protected readonly renderBody = (props: any): VNode => {
    return h(
      'div',
      { class: this.classes?.value.body },
      this.initSlot('default', undefined, props)
    )
  }
}
