import { expect, test } from 'vitest'
import { anyToString } from '../../functions/anyToString.ts'

test(
  'functions/ anyToString/ undefined',
  () => expect(anyToString(undefined)).toBe('')
)

test(
  'functions/ anyToString/ null',
  () => expect(anyToString(null)).toBe('')
)

test(
  'functions/ anyToString/ string',
  () => expect(anyToString('1')).toBe('1')
)

test(
  'functions/ anyToString/ number',
  () => expect(anyToString(1)).toBe('1')
)

test(
  'functions/ anyToString/ array',
  () => expect(anyToString([1, 2, '3'])).toBe('1, 2, 3')
)

test(
  'functions/ anyToString/ array-object',
  () => expect(anyToString([1, 2, '3'])).toBe('1, 2, 3')
)

test(
  'functions/ anyToString/ object',
  () => expect(anyToString({ a: 1 })).toBe('{"a":1}')
)
