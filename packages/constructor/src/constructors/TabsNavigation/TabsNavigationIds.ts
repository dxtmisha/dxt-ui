import { computed } from 'vue'
import {
  getElementId,
  hasKey,
  isNull,
  type ListDataRef,
  type NumberOrString
} from '@dxtmisha/functional'

import type { TabsNavigationIdsList } from './basicTypes'

/** Forbidden object prototype keys / Запрещённые ключи прототипа объекта */
const FORBIDDEN_KEYS = /* #__PURE__ */ new Set(['__proto__', 'constructor', 'prototype'])

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
   * @param data lazy getter returning data list manager / ленивый геттер, возвращающий менеджер списка данных
   */
  constructor(
    protected readonly data: () => ListDataRef
  ) {
  }

  /**
   * Computed list mapping each tab item value to its generated unique DOM element ID.
   *
   * Вычисляемый список, сопоставляющий значение каждого элемента вкладки с его сгенерированным уникальным DOM-идентификатором.
   */
  readonly ids = computed<TabsNavigationIdsList>(() => {
    const ids: TabsNavigationIdsList = {}
    let key = 1

    this.data().data.value.forEach((item) => {
      const value = item.value
      const valueString = isNull(value) ? 'none' : String(value)

      if (
        !isNull(value)
        && !FORBIDDEN_KEYS.has(valueString)
      ) {
        ids[value as NumberOrString] = `${this.idDefault}-${key++}-${valueString}`
      } else {
        key++
      }
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
    if (isNull(value)) {
      return ''
    }

    const ids = this.ids.value

    if (hasKey(ids, value)) {
      return ids[value] ?? String(value)
    }

    return String(value)
  }
}
