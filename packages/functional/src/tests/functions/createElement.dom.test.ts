// @vitest-environment jsdom

import { expect, test } from 'vitest'
import { createElement } from '../../functions/createElement.ts'

test(
  'Creating a div element/ Создание элемента div',
  () => expect(createElement()).toStrictEqual(document.createElement('div'))
)

test(
  'Creating a span element/ Создание элемента span',
  () => expect(createElement(undefined, 'span'))
    .toStrictEqual(document.createElement('span'))
)

test(
  'Adding an element to the parent element/ Добавление элемента к элементу-предку',
  () => {
    const element = document.createElement('div')

    return expect(createElement(element, 'span')?.parentElement)
      .toBe(element)
  }
)

test(
  'Inserting an element between other elements/ Добавление элемента между другими элементами',
  () => {
    const element = document.createElement('div')
    const child1 = document.createElement('div')
    const child2 = document.createElement('div')
    const child3 = document.createElement('div')

    element.appendChild(child1)
    element.appendChild(child2)
    element.appendChild(child3)

    return expect(createElement(element, 'span', undefined, child2)?.previousElementSibling)
      .toBe(child1)
  }
)

test(
  'Adding an element with attribute passing/ Добавление элемента с передачей атрибутов',
  () => expect(
    createElement<HTMLInputElement>(
      undefined,
      'input',
      { value: 'value' }
    )?.value
  )
    .toBe('value')
)

test(
  'Adding an element with a function call to modify the element/ Добавление элемента с вызовом функции для изменения элемента',
  () => expect(
    createElement<HTMLInputElement>(
      undefined,
      'input',
      (element: HTMLInputElement) => {
        element.value = 'value'
      }
    )?.value
  )
    .toBe('value')
)
