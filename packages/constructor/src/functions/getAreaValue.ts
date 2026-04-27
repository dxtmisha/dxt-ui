import { inject } from 'vue'
import { getRef, type RefOrNormal } from '@dxtmisha/functional'
import { AREA_PROP_NAME } from '../types/areaTypes'

/**
 * Returns the area value.
 *
 * Возвращает значение области.
 * @returns area value/ значение области
 */
export function getAreaValue(): string | undefined {
  const area = inject<RefOrNormal<string> | undefined>(AREA_PROP_NAME, undefined)

  if (area) {
    return getRef(area)
  }

  return undefined
}
