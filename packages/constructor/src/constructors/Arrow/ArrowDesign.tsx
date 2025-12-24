import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Arrow } from './Arrow'

import {
  type ArrowPropsBasic
} from './props'
import {
  type ArrowClasses,
  type ArrowComponents,
  type ArrowEmits,
  type ArrowExpose,
  type ArrowSlots
} from './types'

/**
 * ArrowDesign
 */
export class ArrowDesign<
  COMP extends ArrowComponents,
  EXPOSE extends ArrowExpose,
  CLASSES extends ArrowClasses,
  P extends ArrowPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ArrowEmits,
    EXPOSE,
    ArrowSlots,
    CLASSES,
    P
  > {
  protected readonly item: Arrow

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ArrowEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Arrow(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    )

    // TODO: Method for initializing base objects
    // TODO: Метод для инициализации базовых объектов

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
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
        hidden: this.getSubClass('hidden'),
        arrow: this.getSubClass('arrow')
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
    console.log('this.item.styles.value', this.item.styles.value)
    return {
      ...this.item.styles.value
    }
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode[] {
    const children: any[] = [
      ...this.renderMask(),
      ...this.renderArrow()
    ]

    return [
      h('svg', {
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        ...AriaStaticInclude.hidden()
      }, children)
    ]
  }

  /**
   * Method for rendering a mask.
   *
   * Метод для рендеринга маски.
   */
  protected renderMask(): VNode[] {
    return [
      h(
        'mask',
        {
          key: 'mask',
          id: this.item.idMask
        },
        [
          h(
            'rect',
            {
              key: 'rect-bg',
              width: '100%',
              height: '100%',
              fill: 'white'
            }
          ),
          h(
            'rect',
            {
              key: 'rect-hidden',
              class: this.classes?.value.hidden,
              rx: this.item.parent.borderRadius.value,
              fill: 'black'
            }
          )
        ]
      )
    ]
  }

  /**
   * Method for rendering an arrow.
   *
   * Метод для рендеринга стрелки.
   */
  protected renderArrow(): VNode[] {
    const width = this.item.elementItem.width.value
    const height = this.item.elementItem.height.value

    return [
      h(
        'polygon',
        {
          key: 'arrow',
          class: this.classes?.value.arrow,
          points: `0, ${height} ${width / 2}, 0 ${width}, ${height}`
        }
      )
    ]
  }
}
