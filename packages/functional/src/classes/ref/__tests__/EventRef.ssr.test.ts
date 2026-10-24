// @vitest-environment node
import { assert, describe, expect, it, vi } from 'vitest'
import { effectScope, ref } from 'vue'
import { EventRef } from '../EventRef'

describe('EventRef in Node SSR', () => {
  it('constructs, starts and disposes safely without browser globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')
    const scope = effectScope()
    const listener = vi.fn()
    const target = ref<HTMLElement>()
    try {
      const event = scope.run(() => new EventRef(target, undefined, 'click', listener))
      assert(event)
      expect(event.getElement()).toBeUndefined()
      expect(event.start()).toBe(event)
      expect(event.isActive()).toBe(false)
      expect(event.stop()).toBe(event)
      expect(listener).not.toHaveBeenCalled()
    } finally {
      scope.stop()
    }
  })
})
