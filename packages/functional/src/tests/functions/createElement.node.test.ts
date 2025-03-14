import { expect, test } from 'vitest'
import { createElement } from '../../functions/createElement'

test(
  'Checking execution in the Node environment/ Проверка выполнения в среде Node',
  () => expect(createElement()).toBe(undefined)
)
