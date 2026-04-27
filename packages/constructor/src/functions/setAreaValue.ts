import { provide, type Ref } from 'vue'
import { AREA_PROP_NAME } from '../types/areaTypes'

/**
 * Changes the area value for the child component.
 *
 * Изменяет значение области для дочернего компонента.
 * @param value value or reactive element/ значение или реактивный элемент
 */
export function setAreaValue(value: string | Ref<string>) {
  provide(AREA_PROP_NAME, value)
}
