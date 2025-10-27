import { getMouseClientX } from './getMouseClientX'
import { getMouseClientY } from './getMouseClientY'

import { type ImageCoordinator } from '../types/basicTypes'

/**
 * Returns the position of the mouse cursor or the location of the click.
 *
 * Возвращает позицию курсора мыши или место нажатия.
 * @param event event object/ объект события
 */
export function getMouseClient(event: MouseEvent & TouchEvent): ImageCoordinator {
  return {
    x: getMouseClientX(event),
    y: getMouseClientY(event)
  }
}
