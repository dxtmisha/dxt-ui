// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { DescriptionInclude } from '../DescriptionInclude'

describe('DescriptionInclude', () => {
  it('should return correct is value', () => {
    const include1 = new DescriptionInclude({ description: 'Hello Description' }, new DesignName('my.class'))
    expect(include1.is).toBe(true)

    const include2 = new DescriptionInclude({ description: undefined }, new DesignName('my.class'))
    expect(include2.is).toBe(false)

    const include3 = new DescriptionInclude({}, new DesignName('my.class'), { description: () => 'slot content' })
    expect(include3.is).toBe(true)
  })

  it('should return correct id', () => {
    const include1 = new DescriptionInclude({ description: 'Hello', descriptionId: 'custom-id' }, new DesignName('my.class'))
    expect(include1.id).toBe('custom-id')

    const include2 = new DescriptionInclude({}, new DesignName('my.class'))
    expect(include2.id).toBeDefined()
    expect(typeof include2.id).toBe('string')
  })

  it('should render correct vnodes when description is present', () => {
    const include = new DescriptionInclude(
      { description: 'Hello Description', descriptionId: 'desc-id' },
      new DesignName('my.class'),
      undefined,
      undefined,
      'p'
    )
    const nodes = include.render()
    expect(nodes.length).toBe(1)
    expect(nodes[0].type).toBe('p')
    expect(nodes[0].props).toEqual({
      id: 'desc-id',
      class: 'my-class__description',
      key: 'p.description.desc-id'
    })
    expect(nodes[0].children).toContain('Hello Description')
  })

  it('should render slot and extra children', () => {
    const slotMock = vi.fn().mockReturnValue('slot content')
    const include = new DescriptionInclude(
      {},
      new DesignName('my.class'),
      { description: slotMock }
    )
    const nodes = include.render(['extra content'])
    expect(nodes.length).toBe(1)
    expect(slotMock).toHaveBeenCalled()
    expect(nodes[0].children).toContain('slot content')
    expect(nodes[0].children).toContain('extra content')
  })

  it('should render empty array when no description and no slot', () => {
    const include = new DescriptionInclude({}, new DesignName('my.class'))
    const nodes = include.render()
    expect(nodes).toEqual([])
  })

  it('should render correct vnodes with skeleton classes', () => {
    const skeletonMock = {
      classes: { 'sys-skeleton': true, 'sys-skeleton--loading': true }
    } as any
    const include = new DescriptionInclude(
      { description: 'Hello Description' },
      new DesignName('my.class'),
      undefined,
      () => skeletonMock
    )
    const nodes = include.render()
    expect(nodes.length).toBe(1)
    expect(nodes[0].props?.class).toBe('my-class__description sys-skeleton sys-skeleton--loading')
  })

  it('should handle numeric 0 and string "0" as valid descriptions', () => {
    expect(DescriptionInclude.is({ description: 0 })).toBe(true)
    expect(DescriptionInclude.is({ description: '0' })).toBe(true)
    expect(DescriptionInclude.is({ description: '' })).toBe(false)

    const includeZero = new DescriptionInclude({ description: 0 }, new DesignName('my.class'))
    expect(includeZero.is).toBe(true)
    const zeroNodes = includeZero.render()
    expect(zeroNodes.length).toBe(1)
    expect(zeroNodes[0].children).toContain(0)

    const includeStringZero = new DescriptionInclude({ description: '0' }, new DesignName('my.class'))
    expect(includeStringZero.is).toBe(true)
    const stringZeroNodes = includeStringZero.render()
    expect(stringZeroNodes.length).toBe(1)
    expect(stringZeroNodes[0].children).toContain('0')
  })
})
