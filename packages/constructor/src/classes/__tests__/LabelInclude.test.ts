// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { LabelInclude } from '../LabelInclude'
import { SkeletonInclude } from '../../constructors/Skeleton'

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

  it('should handle numeric 0 and string "0" as valid labels', () => {
    expect(LabelInclude.is({ label: 0 })).toBe(true)
    expect(LabelInclude.is({ label: '0' })).toBe(true)
    expect(LabelInclude.is({ label: '' })).toBe(false)

    const includeZero = new LabelInclude({ label: 0 }, new DesignName('prefix'))
    expect(includeZero.is).toBe(true)
    const zeroNodes = includeZero.render()
    expect(zeroNodes.length).toBe(1)
    expect(zeroNodes[0].children).toContain(0)

    const includeStringZero = new LabelInclude({ label: '0' }, new DesignName('prefix'))
    expect(includeStringZero.is).toBe(true)
    const stringZeroNodes = includeStringZero.render()
    expect(stringZeroNodes.length).toBe(1)
    expect(stringZeroNodes[0].children).toContain('0')
  })

  it('should apply skeleton classes only when isSkeleton is active', () => {
    const skeleton = new SkeletonInclude({ isSkeleton: true }, new DesignName('d1.field'), ['classText'])
    const skeletonGetter = vi.fn(() => skeleton)

    const includeInactive = new LabelInclude(
      { label: 'Test Label' },
      new DesignName('prefix'),
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      skeletonGetter
    )
    const inactiveNodes = includeInactive.render()
    expect(inactiveNodes[0]?.props?.class).toBe('prefix__label')
    expect(skeletonGetter).not.toHaveBeenCalled()

    const includeActive = new LabelInclude(
      { label: 'Test Label', isSkeleton: true },
      new DesignName('prefix'),
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      skeletonGetter
    )
    const activeNodes = includeActive.render()
    expect(activeNodes[0]?.props?.class).toBe('prefix__label d1-skeleton__text')
    expect(skeletonGetter).toHaveBeenCalledTimes(1)
  })
})
