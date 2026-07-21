// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { ListFocus } from '../ListFocus'

describe('ListFocus', () => {
  it('should verify focus item type checking and element selectors', () => {
    const el = document.createElement('div')
    const focus = new ListFocus({ focus: 'initial' }, ref(el), 123)

    expect(focus.focus.value).toBe('initial')
    expect(focus.getSelector('index1')).toBe('[data-list-id="123"][data-value="index1"]')

    focus.set({ index: 'index2', type: 'item' })
    expect(focus.focus.value).toBe('index2')
    expect(focus.isItem()).toBe(true)
    expect(focus.isGroup()).toBe(false)
    expect(focus.isMenu()).toBe(false)

    focus.reset()
    expect(focus.focus.value).toBe('initial')
  })
})
