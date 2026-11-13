import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { EnabledInclude } from '../../../classes/EnabledInclude'
import { RippleInclude } from '../RippleInclude'
import type { RippleComponentInclude } from '../basicTypes'
import type { RipplePropsBasic } from '../props'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('RippleInclude', () => {
  it.each([
    [{}, true],
    [{ disabled: true }, false],
    [{ readonly: true }, false],
    [{ loading: true }, false]
  ])('checks whether the effect is available for %o', (props, expected) => {
    expect(RippleInclude.is(props)).toBe(expected)
  })

  it('renders the registered ripple with the parent subclass when enabled', () => {
    const RippleComponent = defineComponent({ name: 'TestRipple' })
    const components = new DesignComponents<RippleComponentInclude, RipplePropsBasic>({
      ripple: RippleComponent
    })
    const state = reactive({ disabled: false })
    const enabled = new EnabledInclude(state)
    const include = new RippleInclude(new DesignName('d1.button'), () => enabled, components)

    const nodes = include.render()
    expect(nodes).toHaveLength(1)
    expect(nodes[0]?.type).toBe(RippleComponent)
    expect(nodes[0]?.props?.class).toContain('d1-button__ripple')

    state.disabled = true
    expect(include.render()).toEqual([])
    state.disabled = false
    expect(include.render()).toHaveLength(1)
  })

  it('renders without an enabled manager and skips absent components', () => {
    const naming = new DesignName('d1.button')
    const components = new DesignComponents<RippleComponentInclude, RipplePropsBasic>({
      ripple: defineComponent({ name: 'TestRipple' })
    })

    expect(new RippleInclude(naming, undefined, components).render()).toHaveLength(1)
    expect(new RippleInclude(naming).render()).toEqual([])
    expect(new RippleInclude(naming, undefined, new DesignComponents({})).render()).toEqual([])
  })
})
