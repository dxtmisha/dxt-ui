// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { PrefixInclude } from '../PrefixInclude'

describe('PrefixInclude', () => {
  it('should return correct is state', () => {
    const include = new PrefixInclude({ prefix: 'Pre' }, new DesignName('prefix'))
    expect(include.is).toBe(true)

    const includeEmpty = new PrefixInclude({}, new DesignName('prefix'))
    expect(includeEmpty.is).toBe(false)
  })

  it('should return correct id and describedby', () => {
    const include = new PrefixInclude({ prefix: 'Pre', prefixId: 'pref-id' }, new DesignName('prefix'))
    expect(include.id).toBe('pref-id')
    expect(include.describedby).toBe('pref-id')

    const includeEmpty = new PrefixInclude({}, new DesignName('prefix'))
    expect(includeEmpty.describedby).toBe('')
  })

  it('should render prefix correctly', () => {
    const include = new PrefixInclude({ prefix: 'Pre', prefixId: 'pref-id' }, new DesignName('my.class'))
    const nodes = include.render()
    expect(nodes.length).toBe(1)
    expect(nodes[0].type).toBe('div')
    expect(nodes[0].props).toEqual({
      'id': 'pref-id',
      'class': 'my-class__prefix',
      'data-event-type': 'prefix',
      'key': 'div.prefix.pref-id'
    })
    expect(nodes[0].children).toContain('Pre')
  })
})
