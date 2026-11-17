// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { SkeletonInclude } from '../../constructors/Skeleton'
import { LabelHighlightInclude } from '../LabelHighlightInclude'

describe('LabelHighlightInclude', () => {
  it('should determine if highlight is required', () => {
    const includeNoHighlight = new LabelHighlightInclude({ label: 'Hello World' }, new DesignName('prefix'))
    expect(includeNoHighlight.isHighlight()).toBe(true)

    const includeShortHighlight = new LabelHighlightInclude({ label: 'Hello World', highlight: 'h' }, new DesignName('prefix'))
    expect(includeShortHighlight.isHighlight()).toBe(true)

    const includeWithHighlight = new LabelHighlightInclude({ label: 'Hello World', highlight: 'hello' }, new DesignName('prefix'))
    expect(includeWithHighlight.isHighlight()).toBe(true)

    const includeNoMatch = new LabelHighlightInclude({ label: 'Hello World', highlight: 'missing' }, new DesignName('prefix'))
    expect(includeNoMatch.isHighlight()).toBe(false)

    const includeNoLabel = new LabelHighlightInclude({ highlight: 'missing' }, new DesignName('prefix'))
    expect(includeNoLabel.isHighlight()).toBe(false)
  })

  it('should respect custom highlightLengthStart', () => {
    const includeTooShort = new LabelHighlightInclude(
      { label: 'Hello World', highlight: 'he', highlightLengthStart: 3 },
      new DesignName('prefix')
    )
    expect(includeTooShort.isHighlight()).toBe(true)
    expect((includeTooShort.render()[0]?.children as unknown[])[0]).toBe('Hello World')

    const includeLongEnough = new LabelHighlightInclude(
      { label: 'Hello World', highlight: 'hel', highlightLengthStart: 3 },
      new DesignName('prefix')
    )
    expect(includeLongEnough.isHighlight()).toBe(true)
    const highlightNode = (includeLongEnough.render()[0]?.children as unknown as { props: { innerHTML: string } }[])[0]
    expect(highlightNode.props.innerHTML).toBe('<span class="prefix__highlight">Hel</span>lo World')
  })

  it('should highlight label text when matching including regex metacharacters and Unicode', () => {
    const include = new LabelHighlightInclude({ label: 'Hello World', highlight: 'world' }, new DesignName('prefix'))
    const nodes = include.render()
    expect(nodes.length).toBe(1)

    const highlightNode = (nodes[0].children as unknown as { type: string, props: { innerHTML: string } }[])[0]
    expect(highlightNode.type).toBe('span')
    expect(highlightNode.props.innerHTML).toBe('Hello <span class="prefix__highlight">World</span>')

    const includeRegex = new LabelHighlightInclude({ label: 'Learn C++ $10', highlight: 'c++' }, new DesignName('prefix'))
    const regexNode = (includeRegex.render()[0]?.children as unknown as { props: { innerHTML: string } }[])[0]
    expect(regexNode.props.innerHTML).toBe('Learn <span class="prefix__highlight">C++</span> $10')

    const includeUnicode = new LabelHighlightInclude({ label: 'Tiếng Việt', highlight: 'việt' }, new DesignName('prefix'))
    const unicodeNode = (includeUnicode.render()[0]?.children as unknown as { props: { innerHTML: string } }[])[0]
    expect(unicodeNode.props.innerHTML).toBe('Tiếng <span class="prefix__highlight">Việt</span>')
  })

  it('should fallback to highlight entire label if value matches', () => {
    const include = new LabelHighlightInclude({ label: 'Title', value: 'val', highlight: 'val' }, new DesignName('prefix'))
    const nodes = include.render()
    expect(nodes.length).toBe(1)

    const highlightNode = (nodes[0].children as unknown as { props: { innerHTML: string } }[])[0]
    expect(highlightNode.props.innerHTML).toBe('<span class="prefix__highlight">Title</span>')

    const includeZeroValue = new LabelHighlightInclude({ label: 'Zero', value: 0, highlight: '0', highlightLengthStart: 1 }, new DesignName('prefix'))
    expect(includeZeroValue.isHighlight()).toBe(true)
    const zeroNode = (includeZeroValue.render()[0]?.children as unknown as { props: { innerHTML: string } }[])[0]
    expect(zeroNode.props.innerHTML).toBe('<span class="prefix__highlight">Zero</span>')
  })

  it('should apply skeleton classes lazily via getter callback', () => {
    const skeleton = new SkeletonInclude({ isSkeleton: true }, new DesignName('d1.listItem'), ['classTextVariant'])
    const include = new LabelHighlightInclude(
      { label: 'Item' },
      new DesignName('d1.listItem'),
      undefined,
      undefined,
      undefined,
      () => skeleton
    )
    const nodes = include.render()
    expect(nodes[0]?.props?.class).toContain('d1-skeleton__textVariant')
  })
})
