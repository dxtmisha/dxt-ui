import { expect, test } from 'vitest'
import { isDomRuntime } from '../../functions/isDomRuntime.ts'

test(
  'Checking execution in the Node environment/ Проверка выполнения в среде Node',
  () => expect(isDomRuntime()).toBe(false)
)
