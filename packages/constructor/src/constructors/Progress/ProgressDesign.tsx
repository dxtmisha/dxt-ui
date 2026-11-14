import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Progress } from './Progress'

import {
  type ProgressProps,
  type ProgressPropsBasic
} from './props'
import {
  type ProgressClasses,
  type ProgressComponents,
  type ProgressEmits,
  type ProgressExpose,
  type ProgressSlots
} from './types'

/**
 * Class design for Progress.
 * It coordinates classes, styles, attributes, and structural virtual nodes for progress visualization.
 *
 * Класс дизайна для Progress.
 * Координирует классы, стили, атрибуты и структурные виртуальные узлы для визуализации процесса.
 */
export class ProgressDesign<
  COMP extends ProgressComponents,
  EXPOSE extends ProgressExpose,
  CLASSES extends ProgressClasses,
  P extends ProgressPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ProgressEmits,
    EXPOSE,
    ProgressSlots,
    CLASSES,
    P
  > {
  /** Instance for progress control logic / Экземпляр логики управления прогрессом */
  protected readonly item: Progress

  /**
   * Constructor for ProgressDesign.
   *
   * Конструктор для ProgressDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor progress item class / класс элемента progress
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ProgressEmits, P>,
    ItemConstructor: typeof Progress = Progress
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
   * Render elements for the circular loader.
   *
   * Рендер элементов для кругового загрузчика.
   * @returns list of virtual nodes for the circle / список виртуальных узлов для круга
   */
  readonly renderCircle = (): VNode[] => {
    if (this.props.circular) {
      return [
        h('circle', {
          class: this.classes?.value.circleSub,
          cx: '24',
          cy: '24',
          r: '20',
          ...AriaStaticInclude.hidden()
        }),
        h('circle', {
          class: this.classes?.value.circle,
          cx: '24',
          cy: '24',
          r: '20',
          ...AriaStaticInclude.hidden()
        })
      ]
    }

    return []
  }

  /**
   * Render dot at the end of the linear progress indicator (supported only for determinate `value` or `indeterminate="type1"`).
   *
   * Рендер точки в конце линейного индикатора прогресса (поддерживается только для детерминированного `value` или `indeterminate="type1"`).
   * @returns list of virtual nodes for the point / список виртуальных узлов для точки
   */
  readonly renderPoint = (): VNode[] => {
    if (
      this.props.linear
      && !this.props.circular
      && this.props.point
      && (
        this.item.isValue()
        || (this.props as ProgressProps).indeterminate === 'type1'
      )
    ) {
      return [h('span', this.getKeyClass('point'))]
    }

    return []
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns refined class list / доработанный список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        circle: this.naming.getSubClass('circle'),
        circleSub: this.naming.getSubClass('circleSub'),
        point: this.naming.getSubClass('point')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties / экспортируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * A method for rendering the main component.
   *
   * Метод для рендеринга основного компонента.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected initRender(): VNode | undefined {
    if (
      this.item.isRender()
    ) {
      const children: VNode[] = [
        ...this.renderCircle(),
        ...this.renderPoint()
      ]

      return h(
        this.item.tag,
        mergeProps(
          this.getAttrs(),
          this.item.binds,
          {
            ref: this.element,
            class: this.classes?.value.main,
            style: this.styles?.value
          }
        ),
        children
      )
    }

    return undefined
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns refined styles / доработанные стили
   */
  protected initStyles(): ConstrStyles {
    return this.item.styles
  }
}
