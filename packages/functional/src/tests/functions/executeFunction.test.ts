import { expect, test } from 'vitest'
import { executeFunction } from '../../functions/executeFunction.ts'

test(
  'functions/ executeFunction/ value',
  () => expect(executeFunction(1)).toBe(1)
)

test(
  'functions/ executeFunction/ value',
  () => expect(executeFunction(() => 1)).toBe(1)
)
