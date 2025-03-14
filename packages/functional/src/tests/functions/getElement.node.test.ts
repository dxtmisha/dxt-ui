import { expect, test } from 'vitest'
import { getElement } from '../../functions/getElement'

test(
  'Checking execution in the Node environment/ Проверка выполнения в среде Node',
  () => expect(getElement('body')).toBe(undefined)
)
