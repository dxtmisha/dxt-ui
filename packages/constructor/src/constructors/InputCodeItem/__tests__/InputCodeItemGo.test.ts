// @vitest-environment jsdom
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest'
import { ref } from 'vue'
import { InputCodeItemGo } from '../InputCodeItemGo'

describe('InputCodeItemGo', () => {
  let originalSetTimeout: typeof setTimeout

  beforeAll(() => {
    originalSetTimeout = window.setTimeout
    window.setTimeout = ((cb: () => void) => {
      cb()
      return 0
    }) as any
  })

  afterAll(() => {
    window.setTimeout = originalSetTimeout
  })

  it('should focus to previous, next and select inputs', () => {
    const parent = document.createElement('div')

    const el1 = document.createElement('div')
    const input1 = document.createElement('input')
    input1.setAttribute('data-code', '')
    el1.appendChild(input1)

    const el2 = document.createElement('div')
    const input2 = document.createElement('input')
    input2.setAttribute('data-code', '')
    el2.appendChild(input2)

    parent.appendChild(el1)
    parent.appendChild(el2)

    Object.defineProperty(el1, 'nextElementSibling', { value: el2 })
    Object.defineProperty(el2, 'previousElementSibling', { value: el1 })

    const go = new InputCodeItemGo({ move: true }, ref(el1))

    expect(go.getKey()).toBe('data-code')

    const focusSpy1 = vi.spyOn(input1, 'focus')
    const focusSpy2 = vi.spyOn(input2, 'focus')

    go.next()
    expect(focusSpy2).toHaveBeenCalled()

    const go2 = new InputCodeItemGo({ move: true }, ref(el2))
    go2.back()
    expect(focusSpy1).toHaveBeenCalled()
  })
})
