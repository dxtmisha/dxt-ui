import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { ModelInclude } from '../../classes/ModelInclude'

import { CropAreaCoordinates } from './CropAreaCoordinates'
import { CropAreaElement } from './CropAreaElement'
import { CropAreaEmit } from './CropAreaEmit'
import { CropAreaEvents } from './CropAreaEvents'
import { CropAreaPosition } from './CropAreaPosition'
import { CropAreaStyle } from './CropAreaStyle'

import type { CropAreaCoordinator } from './basicTypes'
import type { CropAreaComponents, CropAreaEmits, CropAreaSlots } from './types'
import type { CropAreaProps } from './props'

/**
 * Main orchestrator class for managing CropArea state, positioning, and events.
 *
 * Главный класс-оркестратор для управления состоянием, позиционированием и событиями CropArea.
 */
export class CropArea {
  /** Element helper instance / Экземпляр помощника по элементу */
  readonly elementItem: CropAreaElement

  /** Style helper instance / Экземпляр помощника по стилям */
  readonly style: CropAreaStyle

  /** Position coordinator helper / Помощник по координатам позиции */
  readonly position: CropAreaPosition

  /** Event emit helper / Помощник по испусканию событий */
  readonly emit: CropAreaEmit

  /** Coordinates helper instance / Экземпляр помощника по координатам */
  readonly coordinates: CropAreaCoordinates

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
   * @param constructors.CropAreaElementConstructor class for working with element / класс для работы с элементом
   * @param constructors.CropAreaStyleConstructor class for working with styles / класс для работы со стилями
   * @param constructors.CropAreaPositionConstructor class for working with position coordinates / класс для работы с координатами позиции
   * @param constructors.CropAreaEmitConstructor class for working with emits / класс для работы с событиями
   * @param constructors.CropAreaCoordinatesConstructor class for working with coordinates / класс для работы с координатами
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
      CropAreaElementConstructor?: typeof CropAreaElement
      CropAreaStyleConstructor?: typeof CropAreaStyle
      CropAreaPositionConstructor?: typeof CropAreaPosition
      CropAreaEmitConstructor?: typeof CropAreaEmit
      CropAreaCoordinatesConstructor?: typeof CropAreaCoordinates
      CropAreaEventsConstructor?: typeof CropAreaEvents
      ModelIncludeConstructor?: typeof ModelInclude<CropAreaCoordinator>
    } = {}
  ) {
    const {
      CropAreaElementConstructor = CropAreaElement,
      CropAreaStyleConstructor = CropAreaStyle,
      CropAreaPositionConstructor = CropAreaPosition,
      CropAreaEmitConstructor = CropAreaEmit,
      CropAreaCoordinatesConstructor = CropAreaCoordinates,
      CropAreaEventsConstructor = CropAreaEvents,
      ModelIncludeConstructor = ModelInclude
    } = constructors

    this.elementItem = new CropAreaElementConstructor(element, className)
    this.style = new CropAreaStyleConstructor(element, className)
    this.position = new CropAreaPositionConstructor(props, this.style)
    this.emit = new CropAreaEmitConstructor(this.position, emits)
    this.coordinates = new CropAreaCoordinatesConstructor(this.elementItem, this.position, this.emit)
    this.events = new CropAreaEventsConstructor(props, this.elementItem, this.coordinates)

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
}
