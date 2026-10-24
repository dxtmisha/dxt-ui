import { beforeEach, describe, expect, it } from 'vitest'
import { computed, h, reactive, ref, type VNode } from 'vue'
import { DesignComponents } from '../DesignComponents'

/** Component fixture registry / Реестр тестовых компонентов */
const components = {
  button: { render: (): VNode => h('button') },
  missing: undefined
}

/** Component input properties / Входные свойства компонентов */
export interface ComponentProps {
  button: { label?: string }
}

describe('DesignComponents', () => {
  let design: DesignComponents<typeof components, ComponentProps>

  beforeEach(() => {
    design = new DesignComponents(components, { button: { size: 'large' } })
  })

  describe('Registry lookup and empty inputs', () => {
    it('returns registered components and rejects empty entries', () => {
      expect(design.is('button')).toBe(true)
      expect(design.get('button')).toBe(components.button)
      expect(design.is('missing')).toBe(false)
      expect(design.get('missing')).toBeUndefined()
      const empty = new DesignComponents()
      expect(empty.is('button')).toBe(false)
      expect(empty.get('button')).toBeUndefined()
    })

    it('preserves props identity without a modification index', () => {
      const props = { label: 'Привет tiếng Việt 🚀' }
      expect(design.getModification(undefined, props)).toBe(props)
      expect(design.getModification('', props)).toBe(props)
      expect(design.getModification()).toBeUndefined()
    })

    it('uses an empty modification when the index has no configuration', () => {
      expect(design.getModification('unknown')).toEqual({})
      expect(design.getModification('unknown', { disabled: false, count: 0 })).toEqual({ disabled: false, count: 0 })
    })
  })

  describe('Reactive modifications and instance isolation', () => {
    it('unwraps nested refs and computed modification maps in a saved cache entry', () => {
      const size = ref('large')
      const active = ref(false)
      const modifications = computed(() => ({ size, active, count: 0 }))
      const registry = new DesignComponents(components, { button: modifications })
      const initial = registry.getModification('button')
      expect(initial).toEqual({ size: 'large', active: false, count: 0 })
      expect(registry.getModification('button')).toBe(initial)
      size.value = 'small'
      active.value = true
      expect(registry.getModification('button')).toEqual({ size: 'small', active: true, count: 0 })
    })

    it('merges classes and styles while props override ordinary defaults without mutations', () => {
      const defaults = { class: 'base', style: { color: 'red', padding: '1px' }, label: 'default' }
      const props = { class: 'external', style: { color: 'blue' }, label: 'explicit' }
      const registry = new DesignComponents(components, { button: defaults })
      expect(registry.getModification('button', props)).toEqual({
        class: ['base', 'external'], style: [defaults.style, props.style], label: 'explicit'
      })
      expect(defaults.label).toBe('default')
      expect(defaults.style.color).toBe('red')
      expect(props.class).toBe('external')
    })

    it('tracks replacement maps and keeps caches separate for each instance', () => {
      const modification = reactive({ button: { label: 'first' } })
      const first = new DesignComponents(components, modification)
      const second = new DesignComponents(components, { button: { label: 'second' } })
      expect(first.getModification('button')).toEqual({ label: 'first' })
      modification.button = { label: 'updated' }
      expect(first.getModification('button')).toEqual({ label: 'updated' })
      expect(second.getModification('button')).toEqual({ label: 'second' })
    })
  })

  describe('VNode rendering and accumulation', () => {
    it('renders real VNodes with modified props and default keys', () => {
      const node = design.renderOne('button', { label: 'Click' })
      expect(node?.type).toBe(components.button)
      expect(node?.key).toBe('.button')
      expect(node?.props).toMatchObject({ size: 'large', label: 'Click' })
    })

    it('uses an explicit index for modifications and respects an explicit VNode key', () => {
      const registry = new DesignComponents(components, { alternate: { disabled: true } })
      const children = { default: () => [h('span', 'child')] }
      const node = registry.renderOne('button', { key: 'custom' }, children, 'alternate')
      expect(node?.key).toBe('custom')
      expect(node?.props?.disabled).toBe(true)
      expect(node?.children).toMatchObject(children)
    })

    it('returns a one-node array or an empty array for missing entries', () => {
      const nodes = design.render('button')
      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.type).toBe(components.button)
      expect(design.renderOne('missing')).toBeUndefined()
      expect(design.render('missing')).toEqual([])
    })

    it('appends without replacing existing children and supports chaining for missing entries', () => {
      const first = h('span', 'retained')
      const children: VNode[] = [first]
      expect(design.renderAdd(children, 'button').renderAdd(children, 'missing')).toBe(design)
      expect(children).toHaveLength(2)
      expect(children[0]).toBe(first)
      expect(children[1]?.type).toBe(components.button)
    })
  })
})
