import { expect, test } from 'vitest'
import { frame } from '../../functions/frame.ts'

test(
  'Checking execution in the Node environment/ Проверка выполнения в среде Node',
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
