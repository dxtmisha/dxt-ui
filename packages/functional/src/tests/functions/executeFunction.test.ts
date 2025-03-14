import { expect, test } from 'vitest'
import { executeFunction } from '../../functions/executeFunction'

test(
  'Checking value passing/ Проверка передачи значения',
  () => expect(executeFunction(1)).toBe(1)
)

test(
  'Checking function passing/ Проверка передачи функции',
  () => expect(executeFunction(() => 1)).toBe(1)
)
