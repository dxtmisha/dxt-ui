import { describe, expect, expectTypeOf, it } from 'vitest'
import { ref, type VNode } from 'vue'
import { DesignComp } from '../DesignComp'
import { DesignComponents } from '../DesignComponents'

describe('DesignComp', () => {
  it('retains the typed registry contract and handles an empty registry', () => {
    const registry = new DesignComp({ button: 'button', missing: undefined })
    expect(registry).toBeInstanceOf(DesignComponents)
    expectTypeOf(registry.get('button')).toEqualTypeOf<string>()
    expect(registry.get('button')).toBe('button')
    expect(registry.render('missing')).toEqual([])
    expect(new DesignComp().render('button')).toEqual([])
  })

  it('applies inherited reactive modifications during subsequent renders', () => {
    const disabled = ref(false)
    const registry = new DesignComp({ button: 'button' }, { button: { disabled } })
    expect(registry.renderOne('button')?.props?.disabled).toBe(false)
    disabled.value = true
    expect(registry.renderOne('button')?.props?.disabled).toBe(true)
    expect(registry.renderOne('button', { disabled: false })?.props?.disabled).toBe(false)
  })

  it('keeps inherited accumulation fluent without sharing instance modifications', () => {
    const first = new DesignComp({ button: 'button' }, { button: { title: 'first' } })
    const second = new DesignComp({ button: 'button' }, { button: { title: 'second' } })
    const nodes: VNode[] = []
    expect(first.renderAdd(nodes, 'button')).toBe(first)
    expect(second.renderAdd(nodes, 'button')).toBe(second)
    expect(nodes.map(node => node.props?.title)).toEqual(['first', 'second'])
  })
})
