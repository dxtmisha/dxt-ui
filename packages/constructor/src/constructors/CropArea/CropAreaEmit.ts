import { isFunction, type ConstrEmit } from '@dxtmisha/functional'

import type { CropAreaPosition } from './CropAreaPosition'
import type { CropAreaDirection, CropAreaEventParameters } from './basicTypes'
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
   * @param position position coordinator manager / менеджер координат позиции
   * @param emits event emitter function / функция испускания событий
   */
  constructor(
    protected readonly position: CropAreaPosition,
    protected readonly emits?: ConstrEmit<CropAreaEmits>
  ) {
  }

  /**
   * Emits the resize event with current parameters.
   *
   * Испускает событие изменения размера с текущими параметрами.
   * @param direction interaction direction / направление взаимодействия
   * @param value updated single coordinate value / обновленное значение отдельной координаты
   */
  resize(
    direction: CropAreaDirection,
    value = 0
  ): void {
    if (isFunction(this.emits)) {
      const parameters: CropAreaEventParameters = {
        direction,
        value,
        coordinator: this.position.get()
      }

      this.emits('resize', parameters)
    }
  }
}
