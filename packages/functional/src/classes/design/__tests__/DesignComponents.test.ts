import { describe, it, expect, vi, beforeEach } from 'vitest'
import { DesignComponents } from '../DesignComponents'

// Mocking the internal helper functions
vi.mock('../../functions/ref/render', () => ({
  render: vi.fn((comp, props, children, index) => ({ type: comp, props, children, key: index }))
}))

vi.mock('../../functions/ref/getRef', () => ({
  getRef: vi.fn(val => (val && typeof val === 'object' && 'value' in val ? val.value : val))
}))

vi.mock('../../functions/toBinds', () => ({
  toBinds: vi.fn((mod, props) => ({ ...mod, ...props }))
}))

// Subclass to access protected members
class TestDesignComponents extends DesignComponents<any, any> {
  public getCaching() {
    return this.caching
  }
}

describe('DesignComponents', () => {
  const mockComponent = { name: 'MockComp' }
  const components = { button: mockComponent }
  const modification = { button: { size: 'large' } }

  let design: TestDesignComponents

  beforeEach(() => {
    vi.clearAllMocks()
    design = new TestDesignComponents(components, modification)
  })

  describe('is()', () => {
    it('returns true for registered components', () => {
      expect(design.is('button')).toBe(true)
    })

    it('returns false for unregistered components', () => {
      expect(design.is('none' as any)).toBe(false)
    })
  })

  describe('get()', () => {
    it('returns the component object', () => {
      expect(design.get('button')).toBe(mockComponent)
    })

    it('returns undefined for non-existent components', () => {
      expect(design.get('none' as any)).toBeUndefined()
    })
  })

  describe('getModification()', () => {
    it('returns props if no index is provided', () => {
      const props = { color: 'red' }
      expect(design.getModification(undefined, props)).toBe(props)
    })

    it('returns modified props through cache/computed', () => {
      const props = { color: 'blue' }
      const result = design.getModification('button', props)

      expect(result).toEqual({ size: 'large', color: 'blue' })
    })

    it('caches the computed modification', () => {
      design.getModification('button')
      const cacheBefore = { ...design.getCaching() }
      expect(cacheBefore.button).toBeDefined()

      design.getModification('button')
      const cacheAfter = design.getCaching()

      // Should reuse the same computed object
      expect(cacheBefore.button).toBe(cacheAfter.button)
    })
  })

  describe('renderOne()', () => {
    it('returns a VNode for valid component', () => {
      const vnode = design.renderOne('button', { label: 'Click' })
      expect(vnode).toBeDefined()
      expect(vnode?.type).toBe(mockComponent)
      expect(vnode?.props).toEqual({ size: 'large', label: 'Click' })
    })

    it('returns undefined for invalid component', () => {
      const vnode = design.renderOne('none' as any)
      expect(vnode).toBeUndefined()
    })
  })

  describe('render()', () => {
    it('returns an array with VNode for a valid component', () => {
      const vnodes = design.render('button')
      expect(Array.isArray(vnodes)).toBe(true)
      expect(vnodes).toHaveLength(1)
      expect(vnodes[0]?.type).toBe(mockComponent)
    })

    it('returns an empty array for an invalid component', () => {
      const vnodes = design.render('none' as any)
      expect(vnodes).toEqual([])
    })
  })

  describe('renderAdd()', () => {
    it('pushes VNode to a provided array and returns this', () => {
      const list: any[] = []
      const result = design.renderAdd(list, 'button')

      expect(list).toHaveLength(1)
      expect(result).toBe(design)
    })
  })
})
