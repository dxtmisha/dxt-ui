import { expect, test } from 'vitest'
import { forEach } from '../../functions/forEach'

test(
  'Checking keys when passing an array/ Проверка ключей при передаче массива',
  () => expect(forEach([1, 2], (_, key) => key)).toStrictEqual([0, 1])
)

test(
  'Checking values when passing an array/ Проверка значений при передаче массива',
  () => expect(forEach([1, 2], value => value)).toStrictEqual([1, 2])
)

test(
  'Checking keys when passing an object/ Проверка ключей при передаче объекта',
  () => expect(forEach({ a: 1, b: 2 }, (_, key) => key)).toStrictEqual(['a', 'b'])
)

test(
  'Checking values when passing an object/ Проверка значений при передаче объекта',
  () => expect(forEach({ a: 1, b: 2 }, value => value)).toStrictEqual([1, 2])
)
