// @vitest-environment jsdom

import { expect, test } from 'vitest'
import { createElement } from '../../functions/createElement.ts'

test(
  'functions/ createElement',
  () => expect(createElement()).toStrictEqual(document.createElement('div'))
)

test(
  'functions/ createElement/ span',
  () => expect(createElement(undefined, 'span'))
    .toStrictEqual(document.createElement('span'))
)

test(
  'functions/ createElement/ parent',
  () => {
    const element = document.createElement('div')

    return expect(createElement(element, 'span')?.parentElement)
      .toBe(element)
  }
)

test(
  'functions/ createElement/ reference',
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
  'functions/ createElement/ options/ object',
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
  'functions/ createElement/ options/ function',
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
