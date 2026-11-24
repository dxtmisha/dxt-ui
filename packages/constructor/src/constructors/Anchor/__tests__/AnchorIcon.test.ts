// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AnchorIcon } from '../AnchorIcon'
import type { AnchorEvent } from '../AnchorEvent'

describe('AnchorIcon', () => {
  let mockEvent: { isCopy: ReturnType<typeof vi.fn> }

  beforeEach(() => {
    mockEvent = {
      isCopy: vi.fn().mockReturnValue(false)
    }
  })

  it('should evaluate static is() across hide and isCopy combinations', () => {
    expect(AnchorIcon.is({ hide: true, iconLink: 'link' })).toBe(false)
    expect(AnchorIcon.is({ isCopy: false, iconLink: 'link' })).toBe(true)
    expect(AnchorIcon.is({ isCopy: false, iconTag: 'tag' })).toBe(false)
    expect(AnchorIcon.is({ isCopy: true, iconTag: 'tag' })).toBe(true)
    expect(AnchorIcon.is({ isCopy: true, iconLink: 'link' })).toBe(false)
    expect(AnchorIcon.is(undefined)).toBe(false)
  })

  it('should return undefined icon if props.hide is true', () => {
    const anchorIcon = new AnchorIcon(
      { hide: true, iconLink: 'link-icon' },
      () => mockEvent as unknown as AnchorEvent
    )
    expect(anchorIcon.icon).toBeUndefined()
    expect(anchorIcon.is()).toBe(false)
  })

  it('should return iconTag if isCopy is true and iconLink otherwise', () => {
    const copyIcon = new AnchorIcon(
      { isCopy: true, iconTag: 'tag-icon', iconLink: 'link-icon' },
      () => mockEvent as unknown as AnchorEvent
    )
    expect(copyIcon.icon).toBe('tag-icon')
    expect(copyIcon.is()).toBe(true)

    const linkIcon = new AnchorIcon(
      { isCopy: false, iconTag: 'tag-icon', iconLink: 'link-icon' },
      () => mockEvent as unknown as AnchorEvent
    )
    expect(linkIcon.icon).toBe('link-icon')
    expect(linkIcon.is()).toBe(true)
  })

  it('should compile icon binds lazily without calling event getter when isCopy is false', () => {
    const eventFactory = vi.fn(() => mockEvent as unknown as AnchorEvent)
    const linkIcon = new AnchorIcon(
      { isCopy: false, iconLink: 'link-icon', iconContentCopy: 'copied-icon' },
      eventFactory
    )

    expect(linkIcon.binds).toEqual({
      icon: 'link-icon',
      iconActive: undefined,
      active: false
    })
    expect(eventFactory).not.toHaveBeenCalled()

    mockEvent.isCopy.mockReturnValue(true)
    const copyIcon = new AnchorIcon(
      { isCopy: true, iconTag: 'tag-icon', iconContentCopy: 'copied-icon' },
      eventFactory
    )

    expect(copyIcon.binds).toEqual({
      icon: 'tag-icon',
      iconActive: 'copied-icon',
      active: true
    })
    expect(eventFactory).toHaveBeenCalledTimes(1)
  })

  it('should unwrap object IconValue configurations via getBind', () => {
    const objectLinkIcon = new AnchorIcon(
      { isCopy: false, iconLink: { icon: 'link', turn: true } },
      () => mockEvent as unknown as AnchorEvent
    )

    expect(objectLinkIcon.binds).toEqual({
      icon: 'link',
      turn: true,
      iconActive: undefined,
      active: false
    })

    mockEvent.isCopy.mockReturnValue(true)
    const objectCopyIcon = new AnchorIcon(
      { isCopy: true, iconTag: { icon: 'share' }, iconContentCopy: { icon: 'check' } },
      () => mockEvent as unknown as AnchorEvent
    )

    expect(objectCopyIcon.binds).toEqual({
      icon: 'share',
      iconActive: 'check',
      active: true
    })
  })
})
