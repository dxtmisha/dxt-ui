import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { CropArea } from './CropArea'

import type { CropAreaDirection } from './basicTypes'
import type { CropAreaProps } from './props'
import type {
  CropAreaClasses,
  CropAreaComponents,
  CropAreaEmits,
  CropAreaExpose,
  CropAreaSlots
} from './types'

/**
 * Design class for CropArea component.
 * Provides rendering, CSS class management, and DOM tree construction.
 *
 * Класс дизайна для компонента CropArea.
 * Обеспечивает рендеринг, управление CSS-классами и построение дерева DOM.
 */
export class CropAreaDesign<
  COMP extends CropAreaComponents,
  EXPOSE extends CropAreaExpose,
  CLASSES extends CropAreaClasses,
  P extends CropAreaProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    CropAreaEmits,
    EXPOSE,
    CropAreaSlots,
    CLASSES,
    P
  > {
  /** Orchestrator item / Элемент оркестратора */
  protected readonly item: CropArea

  /**
   * Constructor.
   *
   * Конструктор.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, CropAreaEmits, P>,
    ItemConstructor: typeof CropArea = CropArea
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
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
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
    return {
      get: this.item.position.get,
      set: this.item.position.set,
      reset: this.item.position.reset
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
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        left: this.getSubClass('left'),
        center: this.getSubClass('center'),
        right: this.getSubClass('right'),
        crop: this.getSubClass('crop'),
        move: this.getSubClass('move')
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
   * @returns rendered node / отрендеренный узел
   */
  protected initRender(): VNode | undefined {
    if (this.props.readonly) {
      return undefined
    }

    return h(
      this.item.tag,
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        ...this.item.binds
      },
      [
        this.renderLeft(),
        this.renderCenter(),
        this.renderRight()
      ]
    )
  }

  /**
   * Render left column of resize handles.
   *
   * Рендер левой колонки ручек изменения размера.
   * @returns left column node / узел левой колонки
   */
  protected readonly renderLeft = (): VNode => {
    return h('div', this.getKeyClass('left'), [
      this.renderMove('left-top'),
      this.renderMove('left'),
      this.renderMove('left-bottom')
    ])
  }

  /**
   * Render center column with top handle, active region, and bottom handle.
   *
   * Рендер центральной колонки с верхней ручкой, активной областью и нижней ручкой.
   * @returns center column node / узел центральной колонки
   */
  protected readonly renderCenter = (): VNode => {
    return h('div', this.getKeyClass('center'), [
      this.renderMove('top'),
      h('div', {
        ...this.getKeyClass('crop'),
        'data-value': 'center'
      }),
      this.renderMove('bottom')
    ])
  }

  /**
   * Render right column of resize handles.
   *
   * Рендер правой колонки ручек изменения размера.
   * @returns right column node / узел правой колонки
   */
  protected readonly renderRight = (): VNode => {
    return h('div', this.getKeyClass('right'), [
      this.renderMove('right-top'),
      this.renderMove('right'),
      this.renderMove('right-bottom')
    ])
  }

  /**
   * Render individual move handle element.
   *
   * Рендер отдельного элемента ручки перемещения.
   * @param direction direction name / имя направления
   * @returns move handle node / узел ручки перемещения
   */
  protected readonly renderMove = (direction: CropAreaDirection): VNode => {
    return h('div', {
      ...this.getKeyClass('move'),
      'data-value': direction
    })
  }
}
