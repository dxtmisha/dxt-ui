import { computed } from 'vue'
import { getElementId, ListDataRef, type NumberOrString } from '@dxtmisha/functional'

import type { TabsNavigationProps } from './props'
import type { TabsNavigationIdsList } from './basicTypes.ts'

/**
 * Class for generating and managing element IDs for tabs.
 *
 * Класс для генерации и управления идентификаторами элементов вкладок.
 */
export class TabsNavigationIds {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param data object for working with data/ объект для работы с данными
   */
  constructor(
    protected readonly props: TabsNavigationProps,
    protected readonly data: ListDataRef
  ) {
  }

  /**
   * List of generated IDs.
   *
   * Список сгенерированных идентификаторов.
   */
  readonly ids = computed<TabsNavigationIdsList>(() => {
    const ids: TabsNavigationIdsList = {}

    this.data.fullData.value.forEach((item) => {
      ids[item.value] = getElementId()
    })

    return ids
  })

  /**
   * Returns the ID by value.
   *
   * Возвращает идентификатор по значению.
   * @param value value/ значение
   */
  getIdByValue(value?: NumberOrString): string {
    return this.ids.value[value ?? ''] ?? String(value)
  }
}
