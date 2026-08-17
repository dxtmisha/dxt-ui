import { isFunction, type ConstrEmit } from '@dxtmisha/functional'

import type { CropAreaCoordinator, CropAreaDirection, CropAreaEventParameters } from './basicTypes'
import type { CropAreaEmits } from './types'

/**
 * Class managing event emissions for CropArea.
 *
 * Класс, управляющий испусканием событий для CropArea.
 */
export class CropAreaEmit {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param emits event emitter function / функция испускания событий
   */
  constructor(
    protected readonly emits?: ConstrEmit<CropAreaEmits>
  ) {
  }

  /**
   * Emits the resize event with current parameters.
   *
   * Испускает событие resize с текущими параметрами.
   * @param direction interaction direction / направление взаимодействия
   * @param value updated single coordinate value / обновленное значение отдельной координаты
   * @param coordinator full current coordinates / полные текущие координаты
   */
  onResize(
    direction: CropAreaDirection,
    value: number,
    coordinator: CropAreaCoordinator
  ): void {
    if (isFunction(this.emits)) {
      const parameters: CropAreaEventParameters = {
        direction,
        value,
        coordinator
      }

      this.emits('resize', parameters)
    }
  }
}
