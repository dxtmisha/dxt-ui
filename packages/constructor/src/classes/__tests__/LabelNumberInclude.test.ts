// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { LabelNumberInclude } from '../LabelNumberInclude'
import { GeoRef } from '@dxtmisha/functional'

describe('LabelNumberInclude', () => {
  it('should format number correctly', () => {
    vi.spyOn(GeoRef, 'getLanguage').mockReturnValue({ value: 'en' } as any)

    const include = new LabelNumberInclude({ label: 50, labelMax: 100 }, 'prefix')
    const nodes = include.render()
    expect(nodes.length).toBe(1)

    const highlightNode = (nodes[0].children as unknown as { props: { innerHTML: string } }[])[0]
    expect(highlightNode.props.innerHTML).toBe('50')
  })

  it('should format number capped at cap value correctly', () => {
    vi.spyOn(GeoRef, 'getLanguage').mockReturnValue({ value: 'en' } as any)

    const include = new LabelNumberInclude({ label: 150, labelMax: 100 }, 'prefix')
    const nodes = include.render()
    expect(nodes.length).toBe(1)

    const highlightNode = (nodes[0].children as unknown as { props: { innerHTML: string } }[])[0]
    expect(highlightNode.props.innerHTML).toBe('100+')
  })

  it('should render original text if label is not a number', () => {
    const include = new LabelNumberInclude({ label: 'not-a-number' as any }, 'prefix')
    const nodes = include.render()
    expect(nodes.length).toBe(1)
    expect(nodes[0].children).toContain('not-a-number')
  })
})
