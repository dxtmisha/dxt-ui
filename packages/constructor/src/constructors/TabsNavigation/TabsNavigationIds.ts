import { computed } from 'vue'
import { getElementId, ListDataRef, type NumberOrString } from '@dxtmisha/functional'

import type { TabsNavigationIdsList } from './basicTypes'
import type { TabsNavigationProps } from './props'

/**
 * Class for generating, caching, and managing unique DOM element IDs for each tab item.
 *
 * Класс для генерации, кэширования и управления уникальными DOM-идентификаторами для каждого элемента вкладки.
 */
export class TabsNavigationIds {
  /** Unique base identifier generated for the component instance / Уникальный базовый идентификатор, сгенерированный для экземпляра компонента */
  readonly idDefault = getElementId()

  /**
   * Constructor for initializing tab element IDs manager.
   *
   * Конструктор для инициализации менеджера идентификаторов элементов вкладок.
   * @param props input configuration properties / входные конфигурационные свойства
   * @param data data list manager helper / помощник менеджера списка данных
   */
  constructor(
    protected readonly props: TabsNavigationProps,
    protected readonly data: ListDataRef
  ) {
  }

  /**
   * Computed list mapping each tab item value to its generated unique DOM element ID.
   *
   * Вычисляемый список, сопоставляющий значение каждого элемента вкладки с его сгенерированным уникальным DOM-идентификатором.
   * @returns object mapping tab value to DOM ID string / объект, сопоставляющий значение вкладки со строкой DOM ID
   */
  readonly ids = computed<TabsNavigationIdsList>(() => {
    const ids: TabsNavigationIdsList = {}
    let key = 1

    this.data.fullData.value.forEach((item) => {
      ids[item.value] = `${this.idDefault}-${key++}-${item.value ?? 'none'}`
    })

    return ids
  })

  /**
   * Resolves and returns the unique DOM element ID for a given tab item value.
   *
   * Находит и возвращает уникальный DOM-идентификатор элемента для заданного значения вкладки.
   * @param value key/value of the tab item / ключ/значение элемента вкладки
   * @returns unique DOM ID string / строка уникального DOM-идентификатора
   */
  getIdByValue(value?: NumberOrString): string {
    return this.ids.value[value ?? ''] ?? String(value)
  }
}
