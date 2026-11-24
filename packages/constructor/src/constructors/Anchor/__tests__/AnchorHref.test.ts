// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { AnchorHref } from '../AnchorHref'

describe('AnchorHref', () => {
  it('should detect anchor name via static is()', () => {
    expect(AnchorHref.is({ name: 'section-1' })).toBe(true)
    expect(AnchorHref.is({ name: '' })).toBe(false)
    expect(AnchorHref.is({})).toBe(false)
    expect(AnchorHref.is(undefined)).toBe(false)
  })

  it('should return formatted hash href when name is present and undefined otherwise', () => {
    const anchor = new AnchorHref({ name: 'my-anchor' })
    expect(anchor.href).toBe('#my-anchor')
    expect(anchor.get()).toBe('#my-anchor')
    expect(anchor.is()).toBe(true)

    const anchorEmpty = new AnchorHref({})
    expect(anchorEmpty.href).toBeUndefined()
    expect(anchorEmpty.get()).toBeUndefined()
    expect(anchorEmpty.is()).toBe(false)
  })

  it('should return full link when name exists and empty string when name is absent', () => {
    const anchor = new AnchorHref({ name: 'target' })
    expect(anchor.getLink()).toBe(`${window.location.origin}${window.location.pathname}#target`)

    const anchorEmpty = new AnchorHref({})
    expect(anchorEmpty.getLink()).toBe('')
  })
})
