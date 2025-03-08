import { expect, test } from 'vitest'
import { createElement } from '../../functions/createElement.ts'

test(
  'functions/ createElement',
  () => expect(createElement()).toBe(undefined)
)
