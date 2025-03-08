import { expect, test } from 'vitest'
import { arrFill } from '../../functions/arrFill.ts'

test(
  'functions/ arrFill',
  () => expect(arrFill('test', 3)).toStrictEqual(['test', 'test', 'test'])
)
