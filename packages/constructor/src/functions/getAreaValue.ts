import { getInjectNearest } from '@dxtmisha/functional'
import { AREA_PROP_NAME } from '../types/areaTypes'

/**
 * Returns the area value.
 *
 * Возвращает значение области.
 * @returns area value / значение области
 */
export function getAreaValue(): string | undefined {
  return getInjectNearest<string>(AREA_PROP_NAME)
}
