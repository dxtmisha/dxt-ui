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

/**
 * ArrowDesign.
 * Class for managing the visual representation of the arrow.
 * It handles rendering of the arrow SVG and its border, as well as managing reactive points for the polygon.
 *
 * ArrowDesign.
 * Класс для управления визуальным представлением стрелки.
 * Управляет рендерингом SVG стрелки и её границы, а также управляет реактивными точками для полигона.
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
  /** Arrow logic instance / Экземпляр логики стрелки */
  protected readonly item: Arrow

  /** Reactive string for SVG points / Реактивная строка для точек SVG */
  protected readonly points = ref<string>('')

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor arrow item class / класс элемента стрелки
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ArrowEmits, P>,
    ItemConstructor: typeof Arrow = Arrow
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
      this.getName()
    )

    this.init()

    watch([this.classes], () => {
      nextTick().then(
        () => requestAnimationFrame(() => {
          this.points.value = this.item.points
        })
      )
    }, { immediate: true })
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns expose object / объект expose
   */
  protected initExpose(): EXPOSE {
    return {
      update: this.item.position.update
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns classes object / объект классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
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
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {
      ...this.item.styles
    }
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns VNode or undefined / VNode или undefined
   */
  protected initRender(): VNode | undefined {
    if (!this.item.clientOnly.isRender) {
      return undefined
    }

    const children: any[] = [
      ...this.renderArrow()
    ]

    if (this.item.parent.isBorder()) {
      children.push(
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
   * @returns list of nodes / список узлов
   */
  readonly renderArrow = (): VNode[] => {
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
   * Method for rendering a border.
   *
   * Метод для рендеринга границы.
   * @returns list of nodes / список узлов
   */
  readonly renderBorder = (): VNode[] => {
    return [
      h('div', {
        key: 'border',
        class: this.classes?.value.border
      })
    ]
  }
}
