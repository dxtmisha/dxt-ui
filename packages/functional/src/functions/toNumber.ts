import type { NumberOrString } from '../types/basicTypes'

/**
 * The method parses a string argument and returns a floating point number.
 *
 * Метод принимает строку в качестве аргумента и возвращает десятичное число
 * @param value input value/ входное значение
 */
export function toNumber<T extends NumberOrString>(value?: T): (T & number) | number {
  if (typeof value === 'number') {
    return value
  }

  if (!value) {
    return 0
  }

  console.log('value', value)
  let number = value.replace(/[^\d., ]+/ig, '')

  if (number.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig)) {
    number = number
      .replace(/ /ig, '')
      .replace(/,/ig, '.')
  } else if (number.match(/,[0-9]{3}[,.]/ig)) {
    number = number.replace(/,/ig, '')
  } else if (number.match(/[.][0-9]{3}[,.]/ig)) {
    number = number
      .replace(/[.]/ig, '')
      .replace(/,/ig, '.')
  } else {
    number = number.replace(/,/ig, '.')
  }

  return parseFloat(number)
}
