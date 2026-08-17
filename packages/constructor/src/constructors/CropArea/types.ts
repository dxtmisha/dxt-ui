import type { ConstrClass } from '@dxtmisha/functional'

import type { ModelEmits } from '../../types/modelTypes'
import type { CropAreaCoordinator, CropAreaEventParameters } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CropAreaComponents = {
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type CropAreaEmits = ModelEmits<CropAreaCoordinator>
  & {
    /** Event emitted during resizing or moving / Событие, вызываемое при изменении размера или перемещении */
    resize: [parameters: CropAreaEventParameters]
  }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface CropAreaExpose {
  /** Get current coordinator array [top, right, bottom, left] / Получить текущий массив координат [сверху, справа, снизу, слева] */
  get: () => CropAreaCoordinator
  /** Sets coordinator values / Устанавливает значения координат */
  set: (coordinator: CropAreaCoordinator) => void
  /** Resets coordinator values to defaults / Сбрасывает значения координат к начальным */
  reset: () => void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface CropAreaSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type CropAreaClasses = {
  /** Main root CSS class / Основной класс CSS */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  left: string
  center: string
  right: string
  crop: string
  move: string
  // :classes [!] System label / Системная метка
}
