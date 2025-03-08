import { expect, test } from 'vitest'
import { isDomRuntime } from '../../functions/isDomRuntime.ts'

test(
  'functions/ isDomRuntime',
  () => expect(isDomRuntime()).toBe(false)
)
