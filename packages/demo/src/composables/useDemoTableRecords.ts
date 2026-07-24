import { ref, computed } from 'vue'

import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { TableDataList } from '../types/tableTypes'

import { dataFirstNames } from '../media/data/dataFirstNames'
import { dataLastNames } from '../media/data/dataLastNames'
import { dataLocations } from '../media/data/dataLocations'
import { dataRoles } from '../media/data/dataRoles'
import { dataStatuses } from '../media/data/dataStatuses'

/**
 * Composable for managing and generating demo table records.
 *
 * Композиция для управления и генерации демонстрационных записей таблицы.
 * @param initialCount initial record count / начальное количество записей
 * @returns object containing records list, count states, and generator function / объект, содержащий список записей, состояния количества и функцию генератора
 */
export const useDemoTableRecords = (initialCount: number = 20) => {
  /** Reactive record count state / Реактивное состояние количества записей */
  const count = ref<number>(initialCount)

  /** String representation of record count for inputs / Строковое представление количества записей для инпутов */
  const countString = computed<string>(() => String(count.value))

  /** Computed list of generated table records / Вычисляемый список сгенерированных записей таблицы */
  const records = computed<TableDataList>(() => generateRecords(count.value))

  /**
   * Generates a deterministic full name string by record index for SSR compatibility.
   *
   * Генерирует детерминированную строку полного имени по индексу записи для совместимости с SSR.
   * @param index record sequence index / индекс последовательности записи
   * @returns deterministic full name string / детерминированная строка полного имени
   */
  const getRandomName = (index: number): string => {
    const firstName = dataFirstNames[index % dataFirstNames.length] ?? 'John'
    const lastName = dataLastNames[(index * 3) % dataLastNames.length] ?? 'Doe'

    return `${firstName} ${lastName}`
  }

  /**
   * Generates a deterministic email string from name and index for SSR compatibility.
   *
   * Генерирует детерминированную электронную почту на основе имени и индекса для совместимости с SSR.
   * @param name full name string / строка имени
   * @param index record sequence index / индекс последовательности записи
   * @returns formatted email string / отформатированная строка email
   */
  const getRandomEmail = (name: string, index: number): string => {
    const num = (index * 13) % 90 + 10
    return `${name.toLowerCase().replace(/\s+/g, '.')}${num}@example.com`
  }

  /**
   * Generates mock table data records deterministically for SSR compatibility.
   *
   * Генерирует моковые записи данных таблицы детерминированно для совместимости с SSR.
   * @param countQuantity quantity of records to generate / количество записей для генерации
   * @returns list of records / список записей
   */
  const generateRecords = (countQuantity: number): TableDataList => {
    const result: TableDataList = []

    for (let index = 1; index <= countQuantity; index++) {
      const name = getRandomName(index)
      const email = getRandomEmail(name, index)

      const location = dataLocations[index % dataLocations.length] ?? { country: 'USA', city: 'New York' }
      const role = dataRoles[index % dataRoles.length] ?? 'User'
      const status = dataStatuses[index % dataStatuses.length] ?? 'Active'
      const age = 18 + ((index * 7) % 48)
      const salary = `$${(3000 + ((index * 473) % 12000)).toLocaleString('en-US')}`

      result.push({
        id: index,
        name,
        status,
        role,
        email,
        age,
        country: location.country,
        city: location.city,
        salary
      })
    }

    return result
  }

  return {
    /** Reactive record count (number format) / Реактивное количество записей (числовой формат) */
    count,
    /** Reactive record count (string format for inputs) / Реактивное количество записей (строковый формат для инпутов) */
    countString,
    /** Generated records / Сгенерированные записи */
    records,

    /**
     * Generates mock table data records.
     *
     * Генерирует моковые записи данных таблицы.
     * @param countQuantity quantity of records to generate / количество записей для генерации
     * @returns list of records / список записей
     */
    generateRecords,
    /**
     * Sets the record count state.
     *
     * Устанавливает значение количества записей.
     * @param value new count number / новое значение количества
     */
    setCount: (value: number) => {
      count.value = value
    },
    /**
     * Input event handler for updating record count state.
     *
     * Обработчик события ввода для обновления количества записей.
     * @param item input item with validation and value data / элемент ввода с данными валидации и значения
     */
    onInput: (item: FieldValidationItem) => {
      console.log('onInput')
      count.value = Number(item.value)
    }
  }
}
