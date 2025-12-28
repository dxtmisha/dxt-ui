import { h, nextTick, ref, type VNode, watch } from 'vue'
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
import { ArrowDirection } from './basicTypes.ts'

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
  protected readonly points = ref<string>('')

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

    this.init()

    watch([this.classes], () => {
      nextTick().then(
        () => requestAnimationFrame(() => {
          this.points.value = this.getRePoints()
        })
      )
    }, { immediate: true })
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
      main: this.item.classes.value,
      ...{
        // :classes [!] System label / Системная метка
        mask: this.getSubClass('mask'),
        arrow: this.getSubClass('arrow'),
        arrowLine: this.getSubClass('arrowLine'),
        arrowArea: this.getSubClass('arrowArea'),
        border: this.getSubClass('border'),
        borderHidden: this.getSubClass('borderHidden')
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
    return {
      ...this.item.styles.value
    }
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    const children: any[] = [
      ...this.renderArrow()
    ]

    if (this.item.parent.isBorder.value) {
      children.push(
        ...this.renderMask(),
        ...this.renderBorder()
      )
    }

    return h('div', {
      ref: this.element,
      class: this.classes?.value.main,
      style: this.styles?.value,
      ...AriaStaticInclude.hidden()
    }, children)
  }

  /**
   * Method for rendering an arrow.
   *
   * Метод для рендеринга стрелки.
   */
  protected renderArrow(): VNode[] {
    return [
      h(
        'svg',
        {
          key: 'svg-arrow',
          class: this.classes?.value.arrowArea
        },
        [
          h(
            'polygon',
            {
              key: 'arrow',
              class: this.classes?.value.arrow,
              points: this.points.value
            }
          ),
          h(
            'polyline',
            {
              key: 'arrow-line',
              class: this.classes?.value.arrowLine,
              points: this.points.value
            }
          )
        ]
      )
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
        'svg',
        {
          key: 'svg-mask',
          class: this.classes?.value.mask
        },
        h(
          'mask',
          {
            key: 'mask-border',
            id: this.item.idMaskBorder
          },
          [
            h(
              'rect',
              {
                key: 'rect-border',
                width: '100%',
                height: '100%',
                fill: 'white'
              }
            ),
            h(
              'rect',
              {
                key: 'rect-border-hidden',
                class: this.classes?.value.borderHidden,
                fill: 'black'
              }
            )
          ]
        )
      )
    ]
  }

  /**
   * Method for rendering a border.
   *
   * Метод для рендеринга границы.
   */
  protected renderBorder(): VNode[] {
    return [
      h('div', {
        key: 'border',
        class: this.classes?.value.border,
        ...AriaStaticInclude.hidden()
      })
    ]
  }

  /**
   * Gets the points for the arrow.
   *
   * Получает точки для стрелки.
   */
  protected readonly getRePoints = (): string => {
    const width = this.item.elementItem.getWidth()
    const height = this.item.elementItem.getHeight()

    switch (this.item.direction.value) {
      case ArrowDirection.BOTTOM:
        return `0, 0 ${width / 2}, ${height} ${width}, 0`
      case ArrowDirection.LEFT:
        return `${width}, 0 0, ${height / 2} ${width}, ${height}`
      case ArrowDirection.RIGHT:
        return `0, 0 ${width}, ${height / 2} 0, ${height}`
      default:
        return `0, ${height} ${width / 2}, 0 ${width}, ${height}`
    }
  }
}
