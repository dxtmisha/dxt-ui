import { isArray } from './isArray'

/**
 * Modifies data according to its type and settings.
 *
 * Изменяет данные в соответствии с их типом и настройками.
 * @param selected base values/ базовые значения
 * @param value new values/ новые значения
 * @param multiple support for multiple values/ поддержка нескольких значений
 * @param maxlength maximum values/ максимальные значения
 * @param alwaysChange updating values in any case/ обновление значений при любом случае
 * @param notEmpty do not make the values empty/ не делать значения пустыми
 */
export function setValues<T>(
  selected: T | T[] | undefined,
  value: any,
  {
    multiple = false,
    maxlength = 0,
    alwaysChange = true,
    notEmpty = false
  }
): T | T[] | undefined {
  if (multiple) {
    if (isArray(selected)) {
      const key = selected.indexOf(value)
      const data: any[] = [...selected]

      if (key !== -1) {
        if (!notEmpty || data.length > 1) {
          data.splice(key, 1)
        }
      } else if (!maxlength || selected.length < maxlength) {
        data.push(value)
      }

      return data
    }

    if (selected === value) {
      return []
    }

    if (selected) {
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
