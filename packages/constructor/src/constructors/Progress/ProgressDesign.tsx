import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Progress } from './Progress'

import {
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
      this.refs,
      this.getName()
    )

    this.init()
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
   * @returns refined styles / доработанные стили
   */
  protected initStyles(): ConstrStyles {
    return this.item.styles
  }

  /**
   * A method for rendering the main component.
   *
   * Метод для рендеринга основного компонента.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected initRender(): VNode | undefined {
    if (
      this.item.clientOnly.isRender()
      || this.item.isValue()
    ) {
      const children: any[] = [
        ...this.renderCircle(),
        ...this.renderPoint()
      ]

      return h(
        this.item.tag,
        this.attrsMain,
        children
      )
    }

    return undefined
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
   * Render dot at the end of the progress indicator.
   *
   * Рендер точки в конце индикатора прогресса.
   * @returns list of virtual nodes for the point / список виртуальных узлов для точки
   */
  readonly renderPoint = (): VNode[] => {
    if (
      this.props.linear
      && this.props.point && (
        this.props.value
        || ((this.props as any).indeterminate) === 'type1'
      )
    ) {
      return [h('span', { class: this.classes?.value.point })]
    }

    return []
  }

  /**
   * Properties for the main element.
   *
   * Свойства для главного элемента.
   * @returns {Record<string, any>} main element properties / свойства главного элемента
   */
  get attrsMain(): Record<string, any> {
    const props: Record<string, any> = {
      ...this.getAttrs(),
      class: this.classes?.value.main,
      style: this.styles?.value,
      onAnimationend: this.item.onAnimation,
      ...AriaStaticInclude.role(this.item.role),
      ...AriaStaticInclude.label(this.item.label)
    }

    if (this.props.circular) {
      props.viewBox = '0 0 48 48'
    }

    if (this.props.value) {
      return {
        ...props,
        ...AriaStaticInclude.valueMinMax(
          this.props.value,
          0,
          this.props.max
        )
      }
    }

    return props
  }
}
