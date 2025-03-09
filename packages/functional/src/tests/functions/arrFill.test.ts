import { expect, test } from 'vitest'
import { arrFill } from '../../functions/arrFill.ts'

test(
  'Creating an array of 3 values `a`/ Создание массива из 3 значений `a`',
  () => expect(arrFill('a', 3)).toStrictEqual(['a', 'a', 'a'])
)
