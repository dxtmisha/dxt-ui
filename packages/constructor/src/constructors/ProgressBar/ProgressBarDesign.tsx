import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ProgressBar } from './ProgressBar'
import type { ProgressBarInfoItem } from './basicTypes'
import {
  type ProgressBarClasses,
  type ProgressBarComponents,
  type ProgressBarEmits,
  type ProgressBarExpose,
  type ProgressBarSlots
} from './types'
import {
  type ProgressBarPropsBasic
} from './props'

/**
 * ProgressBarDesign class for rendering and managing styles and classes of the progress bar.
 *
 * Класс ProgressBarDesign для рендеринга и управления стилями и классами прогресс-бара.
 */
export class ProgressBarDesign<
  COMP extends ProgressBarComponents,
  EXPOSE extends ProgressBarExpose,
  CLASSES extends ProgressBarClasses,
  P extends ProgressBarPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ProgressBarEmits,
    EXPOSE,
    ProgressBarSlots,
    CLASSES,
    P
  > {
  /** ProgressBar logic orchestrator instance / Экземпляр оркестратора логики ProgressBar */
  protected readonly item: ProgressBar

  /**
   * Constructor for ProgressBarDesign.
   *
   * Конструктор для ProgressBarDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ProgressBarEmits, P>,
    ItemConstructor: typeof ProgressBar = ProgressBar
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
   * Renders a single progress bar segment item.
   *
   * Рендерит отдельный сегмент прогресс-бара.
   * @param item processed progress item data / обработанные данные элемента прогресса
   * @param index item position index / индекс позиции элемента
   * @returns virtual node / виртуальный узел
   */
  readonly renderItem = (item: ProgressBarInfoItem, index: number): VNode => {
    const children: VNode[] = []

    if (
      item.label
      && this.props.showLabel
    ) {
      children.push(h(
        'div',
        {
          class: {
            [this.classes?.value.itemLabel ?? '']: true,
            [this.item.getSkeletonTextClass()]: Boolean(this.props.isSkeleton)
          }
        },
        item.label
      ))
    }

    children.push(h('div', {
      class: {
        [this.classes?.value.itemProgress ?? '']: true,
        [this.item.getSkeletonBackgroundClass()]: Boolean(this.props.isSkeleton)
      }
    }))

    return h(
      'div',
      {
        'key': item.index ?? index,
        'class': {
          [this.classes?.value.item ?? '']: true,
          ...item.classes
        },
        'style': item.style,
        'data-index': item.index,
        ...item.aria
      },
      children
    )
  }

  /**
   * Renders all progress bar segments.
   *
   * Рендерит все сегменты прогресс-бара.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderList = (): VNode[] => {
    return this.item.item.value.map((item, index) => this.renderItem(item, index))
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
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns custom classes object / объект пользовательских классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        item: this.naming.getSubClass('item'),
        itemLabel: this.naming.getSubClass('item__label'),
        itemProgress: this.naming.getSubClass('item__progress')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
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

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
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
      this.renderList()
    )
  }
}
