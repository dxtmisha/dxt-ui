// @vitest-environment jsdom

import { expect, test } from 'vitest'
import { getElement } from '../../functions/getElement.ts'

test(
  'Passing a window/ Передача окна',
  () => expect(getElement(window)).toBe(document.body)
)

test(
  'Passing an element/ Передача элемента',
  () => expect(getElement(document.body)).toBe(document.body)
)

test(
  'Passing a string/ Передача строки',
  () => expect(getElement('body')).toBe(document.body)
)
