import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { CropAreaCoordinates } from './CropAreaCoordinates'
import { CropAreaElement } from './CropAreaElement'
import { CropAreaEmit } from './CropAreaEmit'
import { CropAreaEvents } from './CropAreaEvents'
import { CropAreaPosition } from './CropAreaPosition'
import { CropAreaStyle } from './CropAreaStyle'

import type { AriaList } from '../../types/ariaTypes'
import type { CropAreaCoordinator } from './basicTypes'
import type { CropAreaProps } from './props'
import type { CropAreaComponents, CropAreaEmits, CropAreaSlots } from './types'

/** CropArea dependency constructors type / Тип конструкторов зависимостей CropArea */
export type CropAreaConstructors = {
  /** Coordinates helper constructor / Конструктор помощника по координатам */
  coordinates: typeof CropAreaCoordinates
  /** Element helper constructor / Конструктор помощника по элементу */
  elementItem: typeof CropAreaElement
  /** Event emit helper constructor / Конструктор помощника по испусканию событий */
  emit: typeof CropAreaEmit
  /** Event listeners helper constructor / Конструктор помощника по слушателям событий */
  events: typeof CropAreaEvents
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<CropAreaCoordinator>
  /** Position coordinator helper constructor / Конструктор помощника по координатам позиции */
  position: typeof CropAreaPosition
  /** Style helper constructor / Конструктор помощника по стилям */
  style: typeof CropAreaStyle
}

/**
 * Main orchestrator class for managing CropArea state, positioning, and events.
 *
 * Главный класс-оркестратор для управления состоянием, позиционированием и событиями CropArea.
 */
export class CropArea extends DesignLogicAbstract<
  HTMLElement,
  CropAreaComponents,
  CropAreaEmits,
  CropAreaSlots,
  CropAreaProps,
  CropAreaConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<CropAreaConstructors> = {
    coordinates: {
      item: CropAreaCoordinates,
      parameters: () => [
        () => this.i('elementItem'),
        () => this.i('emit'),
        () => this.i('position')
      ]
    },
    elementItem: {
      item: CropAreaElement,
      parameters: () => [
        this.element,
        this.naming
      ]
    },
    emit: {
      item: CropAreaEmit,
      parameters: () => [
        () => this.i('position'),
        this.emits
      ]
    },
    events: {
      item: CropAreaEvents,
      parameters: () => [
        this.props,
        () => this.i('coordinates'),
        () => this.i('elementItem')
      ]
    },
    model: {
      item: ModelInclude<CropAreaCoordinator>,
      parameters: () => [
        'value',
        this.emits
      ]
    },
    position: {
      item: CropAreaPosition,
      conditions: () => CropAreaPosition.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('model'),
        () => this.i('style')
      ]
    },
    style: {
      item: CropAreaStyle,
      parameters: () => [
        this.element,
        this.naming
      ]
    }
  }

  /**
   * Returns ARIA accessibility attributes.
   *
   * Возвращает атрибуты доступности ARIA.
   * @returns ARIA attributes list / список атрибутов ARIA
   */
  get aria(): AriaList {
    return AriaStaticInclude.disabled(Boolean(this.props.disabled))
  }

  /**
   * Returns binding attributes for the root element.
   *
   * Возвращает атрибуты привязки для корневого элемента.
   * @returns element binding properties / свойства привязки элемента
   */
  get binds(): ConstrBind {
    return {
      ...this.aria,
      ...this.i('events').binds
    }
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
