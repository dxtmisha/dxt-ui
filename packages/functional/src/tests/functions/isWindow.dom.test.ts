// @vitest-environment jsdom

import { expect, test } from 'vitest'
import { isWindow } from '../../functions/isWindow'

test(
  'Passing window/ Передача window',
  () => expect(isWindow(window)).toBe(true)
)

test(
  'Passing an element/ Передача элемента',
  () => expect(isWindow(document.body)).toBe(false)
)
