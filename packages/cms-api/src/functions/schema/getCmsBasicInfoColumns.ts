import { getCmsDescriptionColumn } from './getCmsDescriptionColumn'
import { getCmsNameColumn } from './getCmsNameColumn'

/**
 * Returns the standard `name` and `description` basic info column definitions for CMS tables.
 *
 * Возвращает стандартные определения колонок базовой информации `name` и `description` для таблиц CMS.
 * @returns Drizzle column map with `name` and `description` / Объект колонок Drizzle с полями `name` и `description`
 */
export function getCmsBasicInfoColumns() {
  return {
    ...getCmsNameColumn(),
    ...getCmsDescriptionColumn()
  }
}
