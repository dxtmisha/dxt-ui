// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DescriptionInclude } from '../DescriptionInclude'

describe('DescriptionInclude', () => {
  it('should return correct is value', () => {
    const include1 = new DescriptionInclude({ description: 'Hello Description' }, 'my-class')
    expect(include1.is).toBe(true)

    const include2 = new DescriptionInclude({ description: undefined }, 'my-class')
    expect(include2.is).toBe(false)

    const include3 = new DescriptionInclude({}, 'my-class', { description: () => 'slot content' })
    expect(include3.is).toBe(true)
  })

  it('should return correct id', () => {
    const include1 = new DescriptionInclude({ description: 'Hello', descriptionId: 'custom-id' }, 'my-class')
    expect(include1.id).toBe('custom-id')

    const include2 = new DescriptionInclude({}, 'my-class')
    expect(include2.id).toBeDefined()
    expect(typeof include2.id).toBe('string')
  })

  it('should render correct vnodes when description is present', () => {
    const include = new DescriptionInclude(
      { description: 'Hello Description', descriptionId: 'desc-id' },
      'my-class',
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
      'my-class',
      { description: slotMock }
    )
    const nodes = include.render(['extra content'])
    expect(nodes.length).toBe(1)
    expect(slotMock).toHaveBeenCalled()
    expect(nodes[0].children).toContain('slot content')
    expect(nodes[0].children).toContain('extra content')
  })

  it('should render empty array when no description and no slot', () => {
    const include = new DescriptionInclude({}, 'my-class')
    const nodes = include.render()
    expect(nodes).toEqual([])
  })
})
