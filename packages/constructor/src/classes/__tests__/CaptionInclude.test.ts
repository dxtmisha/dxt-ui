// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { CaptionInclude } from '../CaptionInclude'

describe('CaptionInclude', () => {
  it('should return correct is value', () => {
    const include1 = new CaptionInclude({ caption: 'Hello' }, 'my-class')
    expect(include1.is).toBe(true)

    const include2 = new CaptionInclude({ caption: undefined }, 'my-class')
    expect(include2.is).toBe(false)

    const include3 = new CaptionInclude({}, 'my-class', { caption: () => 'slot content' })
    expect(include3.is).toBe(true)
  })

  it('should return correct binds when not decorative', () => {
    const include = new CaptionInclude({ caption: 'Hello' }, 'my-class')
    expect(include.binds).toEqual({
      class: {
        'my-class__caption': true
      },
      'data-event-type': 'caption',
      'aria-live': 'polite',
      'aria-atomic': 'true'
    })
  })

  it('should return correct binds when decorative', () => {
    const include = new CaptionInclude({ caption: 'Hello', captionDecorative: true }, 'my-class')
    expect(include.binds).toEqual({
      class: {
        'my-class__caption': true
      },
      'data-event-type': 'caption',
      'aria-hidden': 'true'
    })
  })

  it('should return correct binds with skeleton classes', () => {
    const skeletonMock = {
      classes: { 'sys-skeleton': true, 'sys-skeleton--loading': true }
    } as any
    const include = new CaptionInclude({ caption: 'Hello' }, 'my-class', undefined, skeletonMock)
    expect(include.binds.class).toEqual({
      'my-class__caption': true,
      'sys-skeleton': true,
      'sys-skeleton--loading': true
    })
  })

  it('should render correct vnodes when caption is present', () => {
    const include = new CaptionInclude({ caption: 'Hello' }, 'my-class')
    const nodes = include.render()
    expect(nodes.length).toBe(1)
    expect(nodes[0].type).toBe('div')
    expect(nodes[0].props).toEqual({
      class: 'my-class__caption',
      'data-event-type': 'caption',
      'aria-live': 'polite',
      'aria-atomic': 'true',
      key: 'div.caption'
    })
    expect(nodes[0].children).toContain('Hello')
  })

  it('should render slot content when slot is present', () => {
    const slotMock = vi.fn().mockReturnValue('slot content')
    const include = new CaptionInclude({}, 'my-class', { caption: slotMock })
    const nodes = include.render()
    expect(nodes.length).toBe(1)
    expect(slotMock).toHaveBeenCalled()
    expect(nodes[0].children).toContain('slot content')
  })

  it('should render empty array when no caption and no slot', () => {
    const include = new CaptionInclude({}, 'my-class')
    const nodes = include.render()
    expect(nodes).toEqual([])
  })
})
