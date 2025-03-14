import { expect, test } from 'vitest'
import { isWindow } from '../../functions/isWindow'

test(
  'Checking execution in the Node environment/ Проверка выполнения в среде Node',
  () => expect(isWindow(undefined)).toBe(false)
)
