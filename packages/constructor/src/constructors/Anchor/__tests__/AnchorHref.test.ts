// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { AnchorHref } from '../AnchorHref'

describe('AnchorHref', () => {
  it('should return correct href formats', () => {
    const anchor = new AnchorHref({ name: 'my-anchor' })
    expect(anchor.href).toBe('#my-anchor')
    expect(anchor.get()).toBe('#my-anchor')
    expect(anchor.is()).toBe(true)

    const anchorEmpty = new AnchorHref({})
    expect(anchorEmpty.href).toBeUndefined()
    expect(anchorEmpty.get()).toBeUndefined()
    expect(anchorEmpty.is()).toBe(false)
  })

  it('should return the full link', () => {
    const anchor = new AnchorHref({ name: 'target' })
    expect(anchor.getLink()).toBe(`${window.location.origin}${window.location.pathname}#target`)
  })
})
