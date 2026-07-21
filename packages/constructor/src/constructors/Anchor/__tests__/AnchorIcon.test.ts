// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AnchorIcon } from '../AnchorIcon'

describe('AnchorIcon', () => {
  let mockEvent: any

  beforeEach(() => {
    mockEvent = {
      isCopy: vi.fn().mockReturnValue(false)
    }
  })

  it('should return undefined icon if props.hide is true', () => {
    const anchorIcon = new AnchorIcon({ hide: true, iconLink: 'link-icon' }, mockEvent)
    expect(anchorIcon.icon).toBeUndefined()
    expect(anchorIcon.is()).toBe(false)
  })

  it('should return iconTag if isCopy is true', () => {
    const anchorIcon = new AnchorIcon({ isCopy: true, iconTag: 'tag-icon', iconLink: 'link-icon' }, mockEvent)
    expect(anchorIcon.icon).toBe('tag-icon')
    expect(anchorIcon.is()).toBe(true)
  })

  it('should return iconLink if isCopy is false', () => {
    const anchorIcon = new AnchorIcon({ isCopy: false, iconTag: 'tag-icon', iconLink: 'link-icon' }, mockEvent)
    expect(anchorIcon.icon).toBe('link-icon')
    expect(anchorIcon.is()).toBe(true)
  })

  it('should compile icon binds correctly', () => {
    mockEvent.isCopy.mockReturnValue(true)
    const anchorIcon = new AnchorIcon(
      { isCopy: true, iconTag: 'tag-icon', iconContentCopy: 'copied-icon' },
      mockEvent
    )

    expect(anchorIcon.binds).toEqual({
      icon: 'tag-icon',
      iconActive: 'copied-icon',
      active: true
    })
  })
})
