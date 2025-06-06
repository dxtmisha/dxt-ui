// @vitest-environment jsdom

import { describe, it, expect, vi } from 'vitest'
import { createElement } from '../../functions/createElement'

describe('createElement', () => {
  it('создаёт элемент с нужным тегом', () => {
    const parent = document.createElement('div')
    const el = createElement(parent, 'span')
    expect(el?.tagName).toBe('SPAN')
    expect(parent.contains(el!)).toBe(true)
  })

  it('устанавливает атрибуты через options', () => {
    const parent = document.createElement('div')
    const el = createElement(parent, 'button', { id: 'btn', tabIndex: 2 })
    expect(el?.id).toBe('btn')
    expect(el?.tabIndex).toBe(2)
  })

  it('вызывает функцию options', () => {
    const parent = document.createElement('div')
    const fn = vi.fn()
    createElement(parent, 'div', fn)
    expect(fn).toHaveBeenCalled()
  })
})
