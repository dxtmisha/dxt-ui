import { expect, test } from 'vitest'
import { executePromise } from '../../functions/executePromise.ts'

test(
  'functions/ executePromise/ sync',
  async () => expect(await executePromise(() => 1)).toBe(1)
)

test(
  'functions/ executePromise/ async',
  async () => expect(await executePromise(async () => 1)).toBe(1)
)
