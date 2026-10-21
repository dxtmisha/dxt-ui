import { isArray } from './isArray'
import { isNull } from './isNull'

/**
 * Options for configuring value modification in setValues.
 *
 * Опции для настройки модификации значений в setValues.
 */
export interface SetValuesOptions {
  /** Support for multiple values / Поддержка нескольких значений */
  multiple?: boolean
  /** Maximum number of values in multiple mode / Максимальное количество значений в режиме множественного выбора */
  maxlength?: number
  /** Always update the value in single mode / Всегда обновлять значение в одиночном режиме */
  alwaysChange?: boolean
  /** Do not allow the collection to become empty / Запретить оставлять коллекцию пустой */
  notEmpty?: boolean
}

/**
 * Modifies data according to its type and settings.
 *
 * Изменяет данные в соответствии с их типом и настройками.
 * @param selected base value or list of values / базовое значение или список значений
 * @param value new value to set or toggle / новое значение для установки или переключения
 * @param options configuration options / объект настроек
 * @returns modified values / измененные значения
 */
export function setValues<T>(
  selected: T | T[] | undefined,
  value: T,
  options?: SetValuesOptions
): T | T[] | undefined {
  const {
    multiple = false,
    maxlength = 0,
    alwaysChange = true,
    notEmpty = false
  } = options ?? {}

  if (multiple) {
    if (isArray(selected)) {
      const itemIndex = selected.indexOf(value)
      const data = [...selected]

      if (itemIndex !== -1) {
        if (!notEmpty || data.length > 1) {
          data.splice(itemIndex, 1)
        }
      } else if (!maxlength || selected.length < maxlength) {
        data.push(value)
      }

      return data as T[]
    }

    if (selected === value) {
      return notEmpty && !isNull(selected) ? [selected] : []
    }

    if (!isNull(selected)) {
      if (maxlength === 1) {
        return [value]
      }

      return [selected, value]
    }

    return [value]
  }

  if (
    alwaysChange
    || selected !== value
  ) {
    return value
  }

  return selected
}
