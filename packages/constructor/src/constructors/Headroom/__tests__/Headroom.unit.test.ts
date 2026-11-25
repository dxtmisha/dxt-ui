// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref, type EffectScope } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { HeadroomInclude } from '../../../classes/HeadroomInclude'
import { Headroom, type HeadroomConstructors } from '../Headroom'
import type { HeadroomProps } from '../props'

describe('Headroom (Unit)', () => {
  const naming = new DesignName('d-headroom')
  const scopes: EffectScope[] = []

  const createInScope = <T>(factory: () => T): T => {
    const scope = effectScope()
    scopes.push(scope)
    return scope.run(factory) as T
  }

  afterEach(() => {
    while (scopes.length > 0) {
      scopes.pop()?.stop()
    }
    vi.restoreAllMocks()
  })

  it('returns tag from props with fallback to div for undefined or empty string', () => {
    const element = ref<HTMLDivElement | undefined>(undefined)

    const defaultHeadroom = createInScope(() => new Headroom({}, element, naming))
    expect(defaultHeadroom.tag).toBe('div')

    const headerHeadroom = createInScope(() => new Headroom({ tag: 'header' }, element, naming))
    expect(headerHeadroom.tag).toBe('header')

    const emptyTagHeadroom = createInScope(() => new Headroom({ tag: '' }, element, naming))
    expect(emptyTagHeadroom.tag).toBe('div')
  })

  it('lazily instantiates HeadroomInclude only when expose is accessed', () => {
    const element = ref<HTMLDivElement | undefined>(undefined)
    const headroom = createInScope(() => new Headroom({}, element, naming))

    expect(headroom.hasInstance('headroom')).toBe(false)

    const exposed = headroom.expose
    expect(headroom.hasInstance('headroom')).toBe(true)
    expect(exposed.isSticky.value).toBe(false)
    expect(typeof exposed.getValues).toBe('function')
    expect(typeof exposed.update).toBe('function')
  })

  it('supports dependency injection via constructors parameter', () => {
    const element = ref<HTMLDivElement | undefined>(undefined)
    const props = reactive<HeadroomProps>({ disappears: true, transformThreshold: 80 })
    const customUpdate = vi.fn()

    class MockHeadroomInclude extends HeadroomInclude {
      override get expose() {
        return {
          ...super.expose,
          update: customUpdate
        }
      }
    }

    const constructors: Partial<HeadroomConstructors> = {
      headroom: MockHeadroomInclude
    }

    const headroom = createInScope(() => new Headroom(
      props,
      element,
      naming,
      undefined,
      undefined,
      undefined,
      constructors
    ))

    headroom.expose.update()
    expect(customUpdate).toHaveBeenCalledTimes(1)
    expect(headroom.i('headroom')).toBeInstanceOf(MockHeadroomInclude)
  })

  it('runs cleanly inside an effectScope without leaking on scope stop', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement | undefined>(document.createElement('div'))

    scope.run(() => {
      const headroom = new Headroom({ transformThreshold: 50 }, element, naming)
      expect(headroom.expose.getValues().transformThreshold).toBe(50)
    })

    expect(() => scope.stop()).not.toThrow()
  })
})
