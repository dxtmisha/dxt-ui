import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { Progress } from './Progress'

import {
  type ProgressProps
} from './props'
import {
  type ProgressClasses,
  type ProgressComponents,
  type ProgressEmits,
  type ProgressExpose,
  type ProgressSlots
} from './types'

/**
 * ProgressDesign
 */
export class ProgressDesign<
  COMP extends ProgressComponents,
  EXPOSE extends ProgressExpose,
  CLASSES extends ProgressClasses,
  P extends ProgressProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ProgressEmits,
    EXPOSE,
    ProgressSlots,
    CLASSES,
    P
  > {
  protected readonly item: Progress

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ProgressEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Progress(
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
   * Render elements for the circular loader.
   *
   * Рендер элементов для кругового загрузчика.
   */
  protected readonly renderCircle = (): VNode[] => {
    if (this.props.circular) {
      return [
        h('circle', {
          class: this.classes?.value.circleSub,
          cx: '24',
          cy: '24',
          r: '20'
        }),
        h('circle', {
          class: this.classes?.value.circle,
          cx: '24',
          cy: '24',
          r: '20'
        })
      ]
    }

    return []
  }

  /**
   * Render dot at the end.
   *
   * Рендер точки в конце.
   */
  protected readonly renderPoint = (): VNode[] => {
    if (
      this.props.linear
      && this.props.point && (
        this.props.value
        || this.props.indeterminate === 'type1'
      )
    ) {
      return [h('span', { class: this.classes?.value.point })]
    }

    return []
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
        circle: this.getSubClass('circle'),
        circleSub: this.getSubClass('circleSub'),
        point: this.getSubClass('point')
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
    return this.item.styles.value
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    const children: any[] = [
      ...this.renderCircle(),
      ...this.renderPoint()
    ]

    return h(
      this.item.tag.value,
      {
        ...this.getAttrs(),
        class: this.classes?.value.main,
        style: this.styles?.value,
        viewBox: '0 0 48 48',
        onAnimationend: this.item.onAnimation
      },
      children
    )
  }
}
