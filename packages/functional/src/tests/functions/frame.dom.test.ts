// @vitest-environment jsdom

import { expect, test } from 'vitest'
import { frame } from '../../functions/frame.ts'

test(
  'Checking function execution/ Проверка выполнения функции',
  async () => {
    let count = 0

    await (
      new Promise((resolve) => {
        frame(
          () => count++,
          () => count < 10,
          () => resolve(undefined)
        )
      })
    )

    return expect(count).toBe(10)
  }
)
