// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { CaptionInclude } from '../CaptionInclude'

describe('CaptionInclude', () => {
  it('should return correct is value including zero and string zero', () => {
    expect(CaptionInclude.is({ caption: 'Hello' })).toBe(true)
    expect(CaptionInclude.is({ caption: 0 })).toBe(true)
    expect(CaptionInclude.is({ caption: '0' })).toBe(true)
    expect(CaptionInclude.is({ caption: '' })).toBe(false)
    expect(CaptionInclude.is({ caption: undefined })).toBe(false)
    expect(CaptionInclude.is({}, { caption: () => 'slot content' })).toBe(true)

    const include1 = new CaptionInclude({ caption: 'Hello' }, new DesignName('my.class'))
    expect(include1.is).toBe(true)

    const includeZero = new CaptionInclude({ caption: 0 }, new DesignName('my.class'))
    expect(includeZero.is).toBe(true)

    const includeStringZero = new CaptionInclude({ caption: '0' }, new DesignName('my.class'))
    expect(includeStringZero.is).toBe(true)

    const include2 = new CaptionInclude({ caption: undefined }, new DesignName('my.class'))
    expect(include2.is).toBe(false)

    const include3 = new CaptionInclude({}, new DesignName('my.class'), { caption: () => 'slot content' })
    expect(include3.is).toBe(true)
  })

  it('should render numeric 0 and string "0" caption values', () => {
    const numericZero = new CaptionInclude({ caption: 0 }, new DesignName('my.class'))
    const numericNodes = numericZero.render()
    expect(numericNodes.length).toBe(1)
    expect(numericNodes[0].children).toEqual([0])

    const stringZero = new CaptionInclude({ caption: '0' }, new DesignName('my.class'))
    const stringNodes = stringZero.render()
    expect(stringNodes.length).toBe(1)
    expect(stringNodes[0].children).toEqual(['0'])
  })

  it('should return correct binds when not decorative', () => {
    const include = new CaptionInclude({ caption: 'Hello' }, new DesignName('my.class'))
    expect(include.binds).toEqual({
      'class': {
        'my-class__caption': true
      },
      'data-event-type': 'caption',
      'aria-live': 'polite',
      'aria-atomic': 'true'
    })
  })

  it('should return correct binds when decorative', () => {
    const include = new CaptionInclude({ caption: 'Hello', captionDecorative: true }, new DesignName('my.class'))
    expect(include.binds).toEqual({
      'class': {
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
    const skeletonGetter = vi.fn(() => skeletonMock)

    const includeInactive = new CaptionInclude({ caption: 'Hello' }, new DesignName('my.class'), undefined, skeletonGetter)
    expect(includeInactive.binds.class).toEqual({
      'my-class__caption': true
    })
    expect(skeletonGetter).not.toHaveBeenCalled()

    const includeActive = new CaptionInclude({ caption: 'Hello', isSkeleton: true }, new DesignName('my.class'), undefined, skeletonGetter)
    expect(includeActive.binds.class).toEqual({
      'my-class__caption': true,
      'sys-skeleton': true,
      'sys-skeleton--loading': true
    })
    expect(skeletonGetter).toHaveBeenCalledTimes(1)
  })

  it('should render correct vnodes when caption is present', () => {
    const include = new CaptionInclude({ caption: 'Hello' }, new DesignName('my.class'))
    const nodes = include.render()
    expect(nodes.length).toBe(1)
    expect(nodes[0].type).toBe('div')
    expect(nodes[0].props).toEqual({
      'class': 'my-class__caption',
      'data-event-type': 'caption',
      'aria-live': 'polite',
      'aria-atomic': 'true',
      'key': 'div.caption'
    })
    expect(nodes[0].children).toContain('Hello')
  })

  it('should render slot content when slot is present', () => {
    const slotMock = vi.fn().mockReturnValue('slot content')
    const include = new CaptionInclude({}, new DesignName('my.class'), { caption: slotMock })
    const nodes = include.render()
    expect(nodes.length).toBe(1)
    expect(slotMock).toHaveBeenCalled()
    expect(nodes[0].children).toContain('slot content')
  })

  it('should render empty array when no caption and no slot', () => {
    const include = new CaptionInclude({}, new DesignName('my.class'))
    const nodes = include.render()
    expect(nodes).toEqual([])
  })

  it('should render custom tag when tag parameter is provided', () => {
    const include = new CaptionInclude({ caption: 'Hello' }, new DesignName('my.class'), undefined, undefined, 'caption')
    const nodes = include.render()
    expect(nodes.length).toBe(1)
    expect(nodes[0].type).toBe('caption')
  })

  it('should render childrenExtra when passed to render', () => {
    const include = new CaptionInclude({ caption: 'Hello' }, new DesignName('my.class'))
    const nodes = include.render(['extra content'])
    expect(nodes.length).toBe(1)
    expect(nodes[0].children).toContain('Hello')
    expect(nodes[0].children).toContain('extra content')
  })
})
