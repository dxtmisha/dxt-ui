import { expect, test } from 'vitest'
import { executePromise } from '../../functions/executePromise'

test(
  'Checking a synchronous function/ Проверка синхронной функции',
  async () => expect(await executePromise(() => 1)).toBe(1)
)

test(
  'Checking an asynchronous function/ Проверка асинхронной функции',
  async () => expect(await executePromise(async () => 1)).toBe(1)
)
