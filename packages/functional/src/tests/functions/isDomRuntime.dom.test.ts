// @vitest-environment jsdom

import { expect, test } from 'vitest'
import { isDomRuntime } from '../../functions/isDomRuntime.ts'

test(
  'Checking the function\'s operation/ Проверка работы функции',
  () => expect(isDomRuntime()).toBe(true)
)
