import { provide } from 'vue'
import type { RefOrNormal } from '@dxtmisha/functional'
import { AREA_PROP_NAME } from '../types/areaTypes'

/**
 * Changes the area value for the child component.
 *
 * Изменяет значение области для дочернего компонента.
 * @param value value or reactive element / значение или реактивный элемент
 */
export function setAreaValue(value: RefOrNormal<string | undefined>): void {
  provide(AREA_PROP_NAME, value)
}
