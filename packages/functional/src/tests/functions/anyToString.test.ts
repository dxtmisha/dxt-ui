import { expect, test } from 'vitest'
import { anyToString } from '../../functions/anyToString.ts'

test(
  'Passing a value of type undefined/ Передача значения типа undefined',
  () => expect(anyToString(undefined)).toBe('')
)

test(
  'Passing a value of type null/ Передача значения типа null',
  () => expect(anyToString(null)).toBe('')
)

test(
  'Passing a string/ Передача строки',
  () => expect(anyToString('1')).toBe('1')
)

test(
  'Passing a number/ Передача числа',
  () => expect(anyToString(1)).toBe('1')
)

test(
  'Passing an array/ Передача массива',
  () => expect(anyToString([1, 2, '3'])).toBe('1, 2, 3')
)

test(
  'Passing an array containing an object/ Передача массива, содержащего объект',
  () => expect(anyToString([1, 2, { a: '3' }])).toBe('[1,2,{"a":"3"}]')
)

test(
  'Passing an object/ Передача объекта',
  () => expect(anyToString({ a: 1 })).toBe('{"a":1}')
)
