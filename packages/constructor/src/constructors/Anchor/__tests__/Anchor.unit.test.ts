// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { effectScope, reactive, ref, type EffectScope } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { Anchor } from '../Anchor'
import type { AnchorProps } from '../props'
import type { AnchorComponents, AnchorSlots } from '../types'

describe('Anchor (unit)', () => {
  let scope: EffectScope

  beforeEach(() => {
    scope = effectScope()
  })

  afterEach(() => {
    scope.stop()
  })

  function createAnchor(
    initialProps: Partial<AnchorProps> = {},
    slots?: AnchorSlots
  ): { anchor: Anchor, props: AnchorProps } {
    const props = reactive<AnchorProps>({ ...initialProps })
    const element = ref<HTMLAnchorElement | undefined>()
    const naming = new DesignName('d1.anchor')
    const components = new DesignComponents<AnchorComponents, AnchorProps>({
      icon: {},
      tooltip: {}
    })

    let anchor!: Anchor
    scope.run(() => {
      anchor = new Anchor(props, element, naming, components, slots)
    })

    return { anchor, props }
  }

  it('should keep all subordinate helpers lazily uninstantiated upon construction', () => {
    const { anchor } = createAnchor({ name: 'sec', label: 'Section' })

    expect(anchor.hasInstance('event')).toBe(false)
    expect(anchor.hasInstance('href')).toBe(false)
    expect(anchor.hasInstance('icon')).toBe(false)
    expect(anchor.hasInstance('label')).toBe(false)
    expect(anchor.hasInstance('text')).toBe(false)
    expect(anchor.hasInstance('to')).toBe(false)
    expect(anchor.hasInstance('tooltip')).toBe(false)
  })

  it('should evaluate isHref() and isHide() accurately', () => {
    const { anchor: empty } = createAnchor({})
    expect(empty.isHref()).toBe(false)

    const { anchor: noLabel } = createAnchor({ name: 'hidden-target' })
    expect(noLabel.isHref()).toBe(true)
    expect(noLabel.isHide()).toBe(true)
    expect(noLabel.hasInstance('label')).toBe(false)

    const { anchor: withLabel } = createAnchor({ name: 'visible', label: 'Heading' })
    expect(withLabel.isHide()).toBe(false)

    const { anchor: copyOnly } = createAnchor({ name: 'copy', isCopy: true })
    expect(copyOnly.isHide()).toBe(false)

    const { anchor: explicitHide } = createAnchor({ name: 'force-hide', label: 'Text', hide: true })
    expect(explicitHide.isHide()).toBe(true)
  })

  it('should compute aria and binds for navigation mode vs copy mode without instantiating event', () => {
    const { anchor: nav } = createAnchor({ name: 'intro', label: 'Intro', isCopy: false })
    expect(nav.aria).toEqual({ 'aria-current': 'page' })
    expect(nav.binds.href).toBe('#intro')
    expect(nav.binds.tabindex).toBe(0)
    expect(nav.binds.onKeydown).toBeUndefined()
    expect(nav.hasInstance('event')).toBe(false)

    const { anchor: copy } = createAnchor({ name: 'intro', label: 'Intro', isCopy: true })
    expect(copy.aria).toEqual({ role: 'button' })
    expect(copy.binds.href).toBeUndefined()
    expect(typeof copy.binds.onKeydown).toBe('function')
    expect(copy.hasInstance('event')).toBe(false)
  })

  it('should include ref and aria-hidden in bindsHide', () => {
    const { anchor } = createAnchor({ name: 'silent', hide: true })
    const hideBinds = anchor.bindsHide

    expect(hideBinds.key).toBe('main-hide')
    expect(hideBinds.name).toBe('silent')
    expect(hideBinds['aria-hidden']).toBe('true')
    expect(hideBinds.ref).toBeDefined()
  })
})
