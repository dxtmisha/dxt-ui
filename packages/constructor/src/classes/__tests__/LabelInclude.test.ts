// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { LabelInclude } from '../LabelInclude'

describe('LabelInclude', () => {
  it('should return correct is state', () => {
    const include = new LabelInclude({ label: 'Hello' }, 'prefix')
    expect(include.is).toBe(true)

    const includeEmpty = new LabelInclude({}, 'prefix')
    expect(includeEmpty.is).toBe(false)

    const includeReplacing = new LabelInclude({}, 'prefix', undefined, undefined, undefined, ref('replacement'))
    expect(includeReplacing.is).toBe(true)

    const includeSlot = new LabelInclude({}, 'prefix', undefined, { default: () => 'slot' })
    expect(includeSlot.is).toBe(true)

    const includeAltSlot = new LabelInclude({}, 'prefix', undefined, { label: () => 'slot' }, undefined, undefined, true)
    expect(includeAltSlot.is).toBe(true)
  })

  it('should return correct id', () => {
    const include = new LabelInclude({ labelId: 'custom-id' }, 'prefix')
    expect(include.id).toBe('custom-id')
  })

  it('should render label text correctly', () => {
    const include = new LabelInclude({ label: 'Test Label' }, 'prefix')
    const nodes = include.render()
    expect(nodes.length).toBe(1)
    expect(nodes[0].type).toBe('span')
    expect(nodes[0].props.class).toContain('prefix__label')
    expect(nodes[0].children).toContain('Test Label')
  })

  it('should render replacing content with innerHTML', () => {
    const replacingRef = ref('<strong>replacing</strong>')
    const include = new LabelInclude({}, 'prefix', undefined, undefined, undefined, replacingRef)
    const nodes = include.render()
    expect(nodes.length).toBe(1)

    const highlightNode = nodes[0].children[0]
    expect(highlightNode.type).toBe('span')
    expect(highlightNode.props.innerHTML).toBe('<strong>replacing</strong>')
  })
})
