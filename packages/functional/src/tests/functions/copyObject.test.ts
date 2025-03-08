import { expect, test } from 'vitest'
import { copyObject } from '../../functions/copyObject.ts'

test(
  'functions/ copyObject',
  () => expect(copyObject([1, 2, 3])).toStrictEqual([1, 2, 3])
)
