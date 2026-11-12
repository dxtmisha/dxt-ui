// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { LabelInclude } from '../LabelInclude'

describe('LabelInclude', () => {
  it('should return correct is state', () => {
    const include = new LabelInclude({ label: 'Hello' }, new DesignName('prefix'))
    expect(include.is).toBe(true)

    const includeEmpty = new LabelInclude({}, new DesignName('prefix'))
    expect(includeEmpty.is).toBe(false)

    const includeReplacing = new LabelInclude({}, new DesignName('prefix'), undefined, undefined, undefined, ref('replacement'))
    expect(includeReplacing.is).toBe(true)

    const includeSlot = new LabelInclude({}, new DesignName('prefix'), undefined, { default: () => 'slot' })
    expect(includeSlot.is).toBe(true)

    const includeAltSlot = new LabelInclude({}, new DesignName('prefix'), undefined, { label: () => 'slot' }, undefined, undefined, true)
    expect(includeAltSlot.is).toBe(true)
  })

  it('should return correct id', () => {
    const include = new LabelInclude({ labelId: 'custom-id' }, new DesignName('prefix'))
    expect(include.id).toBe('custom-id')
  })

  it('should render label text correctly', () => {
    const include = new LabelInclude({ label: 'Test Label' }, new DesignName('prefix'))
    const nodes = include.render()
    expect(nodes.length).toBe(1)
    expect(nodes[0].type).toBe('span')
    expect(nodes[0].props?.class).toContain('prefix__label')
    expect(nodes[0].children).toContain('Test Label')
  })

  it('should render replacing content with innerHTML', () => {
    const replacingRef = ref('<strong>replacing</strong>')
    const include = new LabelInclude({}, new DesignName('prefix'), undefined, undefined, undefined, replacingRef)
    const nodes = include.render()
    expect(nodes.length).toBe(1)

    const highlightNode = (nodes[0].children as unknown as { type: string, props: { innerHTML: string } }[])[0]
    expect(highlightNode.type).toBe('span')
    expect(highlightNode.props.innerHTML).toBe('<strong>replacing</strong>')
  })

  it('should lazily render label nodes only when label or slot is active', () => {
    let called = false
    const include = new LabelInclude({ label: 'Test Label' }, new DesignName('prefix'))

    const getter = () => {
      called = true
      return include
    }

    expect(LabelInclude.renderLazy(getter, {})).toEqual([])
    expect(called).toBe(false)

    const activeResult = LabelInclude.renderLazy(getter, { label: 'Test Label' })
    expect(called).toBe(true)
    expect(activeResult.length).toBe(1)
    expect(activeResult[0].children).toContain('Test Label')

    const directResult = LabelInclude.renderLazy(include, { label: 'Test Label' })
    expect(directResult.length).toBe(1)
  })
})
