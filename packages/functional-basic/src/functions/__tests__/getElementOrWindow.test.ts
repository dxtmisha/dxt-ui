/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest'
import { getElementOrWindow } from '../getElementOrWindow'

describe('getElementOrWindow', () => {
  it('should return the Window object if window is passed', () => {
    expect(getElementOrWindow(window)).toBe(window)
  })

  it('should return the matched element by string selector', () => {
    const el = document.createElement('div')
    el.id = 'test-get-window-id'
    document.body.appendChild(el)

    expect(getElementOrWindow('#test-get-window-id')).toBe(el)

    document.body.removeChild(el)
  })

  it('should return undefined if no element matches', () => {
    expect(getElementOrWindow('.non-existent-class-for-window-test')).toBeUndefined()
  })

  it('should return the element itself if an Element is passed', () => {
    const el = document.createElement('span')
    expect(getElementOrWindow(el)).toBe(el)
  })
})
