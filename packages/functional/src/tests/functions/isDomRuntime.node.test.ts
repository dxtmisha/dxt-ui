import { expect, test } from 'vitest'
import { isDomRuntime } from '../../functions/isDomRuntime'

test(
  'Checking execution in the Node environment/ Проверка выполнения в среде Node',
  () => expect(isDomRuntime()).toBe(false)
)
