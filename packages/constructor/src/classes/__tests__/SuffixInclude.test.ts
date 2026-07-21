// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { SuffixInclude } from '../SuffixInclude'

describe('SuffixInclude', () => {
  it('should return correct is state', () => {
    const include = new SuffixInclude({ suffix: 'Suf' }, 'prefix')
    expect(include.is).toBe(true)

    const includeEmpty = new SuffixInclude({}, 'prefix')
    expect(includeEmpty.is).toBe(false)
  })

  it('should return correct id and describedby', () => {
    const include = new SuffixInclude({ suffix: 'Suf', suffixId: 'suf-id' }, 'prefix')
    expect(include.id).toBe('suf-id')
    expect(include.describedby).toBe('suf-id')

    const includeEmpty = new SuffixInclude({}, 'prefix')
    expect(includeEmpty.describedby).toBe('')
  })

  it('should render suffix correctly', () => {
    const include = new SuffixInclude({ suffix: 'Suf', suffixId: 'suf-id' }, 'my-class')
    const nodes = include.render()
    expect(nodes.length).toBe(1)
    expect(nodes[0].type).toBe('div')
    expect(nodes[0].props).toEqual({
      'id': 'suf-id',
      'class': 'my-class__suffix',
      'data-event-type': 'suffix',
      'key': 'div.suffix.suf-id'
    })
    expect(nodes[0].children).toContain('Suf')
  })
})
