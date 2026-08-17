import { computed, type ComputedRef, type Ref, type ToRefs } from 'vue'
import { type ConstrClass, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { ModelInclude } from '../../classes/ModelInclude'
import { CropAreaClassesData } from './CropAreaClassesData'
import { CropAreaEmit } from './CropAreaEmit'
import { CropAreaEvents } from './CropAreaEvents'
import { CropAreaPosition } from './CropAreaPosition'
import { CropAreaStyle } from './CropAreaStyle'

import type { CropAreaCoordinator, CropAreaSlotProps } from './basicTypes'
import type { CropAreaComponents, CropAreaEmits, CropAreaSlots } from './types'
import type { CropAreaProps } from './props'

/**
 * Main orchestrator class for managing CropArea state, positioning, and events.
 *
 * Главный класс-оркестратор для управления состоянием, позиционированием и событиями CropArea.
 */
export class CropArea {
  /** Classes helper instance / Экземпляр помощника по классам */
  readonly classes: CropAreaClassesData

  /** Style helper instance / Экземпляр помощника по стилям */
  readonly style: CropAreaStyle

  /** Position coordinator helper / Помощник по координатам позиции */
  readonly position: CropAreaPosition

  /** Event emit helper / Помощник по испусканию событий */
  readonly emit: CropAreaEmit

  /** Event listeners helper / Помощник по слушателям событий */
  readonly events: CropAreaEvents

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.CropAreaClassesConstructor class for working with classes / класс для работы с классами
   * @param constructors.CropAreaStyleConstructor class for working with styles / класс для работы со стилями
   * @param constructors.CropAreaPositionConstructor class for working with coordinates / класс для работы с координатами
   * @param constructors.CropAreaEmitConstructor class for working with emits / класс для работы с событиями
   * @param constructors.CropAreaEventsConstructor class for working with events / класс для работы с событиями
   * @param constructors.ModelIncludeConstructor class for working with model synchronization / класс для работы с синхронизацией модели
   */
  constructor(
    protected readonly props: CropAreaProps,
    protected readonly refs: ToRefs<CropAreaProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<CropAreaComponents, CropAreaProps>,
    protected readonly slots?: CropAreaSlots,
    protected readonly emits?: ConstrEmit<CropAreaEmits>,
    constructors: {
      CropAreaClassesConstructor?: typeof CropAreaClassesData
      CropAreaStyleConstructor?: typeof CropAreaStyle
      CropAreaPositionConstructor?: typeof CropAreaPosition
      CropAreaEmitConstructor?: typeof CropAreaEmit
      CropAreaEventsConstructor?: typeof CropAreaEvents
      ModelIncludeConstructor?: typeof ModelInclude<CropAreaCoordinator>
    } = {}
  ) {
    const {
      CropAreaClassesConstructor = CropAreaClassesData,
      CropAreaStyleConstructor = CropAreaStyle,
      CropAreaPositionConstructor = CropAreaPosition,
      CropAreaEmitConstructor = CropAreaEmit,
      CropAreaEventsConstructor = CropAreaEvents,
      ModelIncludeConstructor = ModelInclude
    } = constructors

    this.classes = new CropAreaClassesConstructor(element, classDesign, className)
    this.style = new CropAreaStyleConstructor(this.classes)
    this.position = new CropAreaPositionConstructor(props, this.style)
    this.emit = new CropAreaEmitConstructor(emits)
    this.events = new CropAreaEventsConstructor(props, this.classes, this.position, this.emit)

    new ModelIncludeConstructor('value', this.emits, this.position.item)
  }

  /**
   * Returns HTML tag name.
   *
   * Возвращает имя HTML-тега.
   * @returns tag name / имя тега
   */
  get tag(): string {
    return this.props.tag || 'div'
  }

  /**
   * Returns computed coordinator array.
   *
   * Возвращает вычисляемый массив координат.
   * @returns computed coordinator / вычисляемые координаты
   */
  get coordinator(): ComputedRef<CropAreaCoordinator> {
    return computed(() => this.position.get())
  }

  /**
   * Returns slot properties for default slot.
   *
   * Возвращает свойства слота для слота по умолчанию.
   * @returns slot properties / свойства слота
   */
  get slotProps(): CropAreaSlotProps {
    return {
      coordinator: this.position.get()
    }
  }

  /**
   * Returns reactive CSS classes for the root element.
   *
   * Возвращает реактивные CSS-классы для корневого элемента.
   * @returns CSS classes object / объект CSS-классов
   */
  get classesData(): ConstrClass {
    return {
      [`${this.className}--disabled`]: Boolean(this.props.disabled),
      [`${this.className}--disabledTop`]: Boolean(this.props.disabled || this.props.disabledTop),
      [`${this.className}--disabledRight`]: Boolean(this.props.disabled || this.props.disabledRight),
      [`${this.className}--disabledBottom`]: Boolean(this.props.disabled || this.props.disabledBottom),
      [`${this.className}--disabledLeft`]: Boolean(this.props.disabled || this.props.disabledLeft)
    }
  }
}
