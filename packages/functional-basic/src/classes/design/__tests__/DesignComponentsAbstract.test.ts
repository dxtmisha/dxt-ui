import { describe, it, expect } from 'vitest'
import { DesignComponentsAbstract } from '../DesignComponentsAbstract'
import type { ConstrComponent, ConstrItem } from '../../../types/constructorTypes'

type MockComponent = { name: string }
type MockProps = {
  button?: { size?: string, color?: string }
  icon?: { name?: string }
}
type MockRender = { type: MockComponent, props?: ConstrItem, children?: string, key?: string }

class TestDesignComponents extends DesignComponentsAbstract<
  Record<string, MockComponent>,
  MockProps,
  MockRender,
  string
> {
  getModification<K extends keyof MockProps>(
    index?: K & string | string,
    props?: MockProps[K] | ConstrItem
  ): ConstrItem | undefined {
    if (index) {
      const mod = this.computeModification(index)
      return { ...mod, ...props }
    }

    return props as ConstrItem | undefined
  }

  renderOne<K extends string, PK extends keyof MockProps>(
    name: K,
    props?: MockProps[PK] & ConstrItem | ConstrItem,
    children?: string,
    index?: PK & string | string
  ): MockRender | undefined {
    if (this.is(name)) {
      return {
        type: this.get(name),
        props: this.getModification(index ?? name, props),
        children,
        key: index ?? name
      }
    }

    return undefined
  }

  protected computeModification<K extends keyof MockProps>(
    index: K & string | string
  ): ConstrItem {
    return (this.modification?.[index] as ConstrItem) ?? {}
  }
}

describe('DesignComponentsAbstract', () => {
  const mockButton: MockComponent = { name: 'Button' }
  const mockIcon: MockComponent = { name: 'Icon' }
  const components = {
    button: mockButton,
    icon: mockIcon
  }
  const modification = {
    button: { size: 'large' }
  }

  it('initializes with default empty components when none provided', () => {
    class EmptyDesignComponents extends DesignComponentsAbstract<ConstrComponent, ConstrItem> {
      getModification(): ConstrItem | undefined {
        return undefined
      }

      renderOne(): undefined {
        return undefined
      }

      protected computeModification(): ConstrItem {
        return {}
      }
    }

    const instance = new EmptyDesignComponents()
    expect(instance.is('button')).toBe(false)
    expect(instance.get('button')).toBeUndefined()
  })

  describe('is()', () => {
    it('returns true when component is registered', () => {
      const instance = new TestDesignComponents(components, modification)
      expect(instance.is('button')).toBe(true)
      expect(instance.is('icon')).toBe(true)
    })

    it('returns false when component is not registered', () => {
      const instance = new TestDesignComponents(components, modification)
      expect(instance.is('badge')).toBe(false)
    })
  })

  describe('get()', () => {
    it('returns registered component', () => {
      const instance = new TestDesignComponents(components, modification)
      expect(instance.get('button')).toBe(mockButton)
      expect(instance.get('icon')).toBe(mockIcon)
    })

    it('returns undefined for unregistered component', () => {
      const instance = new TestDesignComponents(components, modification)
      expect(instance.get('badge')).toBeUndefined()
    })
  })

  describe('render()', () => {
    it('returns single-item array when renderOne produces an element', () => {
      const instance = new TestDesignComponents(components, modification)
      const result = instance.render('button', { color: 'blue' }, 'Click me')

      expect(result).toHaveLength(1)
      expect(result[0]).toEqual({
        type: mockButton,
        props: { size: 'large', color: 'blue' },
        children: 'Click me',
        key: 'button'
      })
    })

    it('returns empty array when renderOne produces undefined', () => {
      const instance = new TestDesignComponents(components, modification)
      const result = instance.render('badge')

      expect(result).toEqual([])
    })
  })

  describe('renderAdd()', () => {
    it('pushes rendered element into target array and returns this instance for chaining', () => {
      const instance = new TestDesignComponents(components, modification)
      const list: unknown[] = []
      const returned = instance.renderAdd(list, 'button', { color: 'green' })

      expect(returned).toBe(instance)
      expect(list).toHaveLength(1)
      expect(list[0]).toEqual({
        type: mockButton,
        props: { size: 'large', color: 'green' },
        children: undefined,
        key: 'button'
      })
    })

    it('does not push anything when component is not registered', () => {
      const instance = new TestDesignComponents(components, modification)
      const list: unknown[] = []
      instance.renderAdd(list, 'missing')

      expect(list).toHaveLength(0)
    })
  })
})
