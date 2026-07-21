// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { LabelHighlightInclude } from '../LabelHighlightInclude'

describe('LabelHighlightInclude', () => {
  it('should determine if highlight is required', () => {
    const includeNoHighlight = new LabelHighlightInclude({ label: 'Hello World' }, 'prefix')
    expect(includeNoHighlight.isHighlight()).toBe(true)

    const includeWithHighlight = new LabelHighlightInclude({ label: 'Hello World', highlight: 'hello' }, 'prefix')
    expect(includeWithHighlight.isHighlight()).toBe(true)

    const includeNoMatch = new LabelHighlightInclude({ label: 'Hello World', highlight: 'missing' }, 'prefix')
    expect(includeNoMatch.isHighlight()).toBe(false)
  })

  it('should highlight label text when matching', () => {
    const include = new LabelHighlightInclude({ label: 'Hello World', highlight: 'world' }, 'prefix')
    const nodes = include.render()
    expect(nodes.length).toBe(1)

    const highlightNode = (nodes[0].children as unknown as { type: string, props: { innerHTML: string } }[])[0]
    expect(highlightNode.type).toBe('span')
    expect(highlightNode.props.innerHTML).toBe('Hello <span class="prefix__highlight">World</span>')
  })

  it('should fallback to highlight entire label if value matches', () => {
    const include = new LabelHighlightInclude({ label: 'Title', value: 'val', highlight: 'val' }, 'prefix')
    const nodes = include.render()
    expect(nodes.length).toBe(1)

    const highlightNode = (nodes[0].children as unknown as { props: { innerHTML: string } }[])[0]
    expect(highlightNode.props.innerHTML).toBe('<span class="prefix__highlight">Title</span>')
  })
})
