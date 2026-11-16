// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ListGroup, type ListGroupConstructors } from '../ListGroup'
import { ListGroupOpen } from '../ListGroupOpen'
import type { ListGroupProps } from '../props'

class InspectableListGroup extends ListGroup {
  get instantiatedItems(): Partial<Record<keyof ListGroupConstructors, unknown>> {
    return this.instances
  }
}

describe('ListGroup (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.listGroup')

  describe('Lazy instantiation and Dependency Injection', () => {
    it('should not instantiate open helper until accessed, and aria should keep it lazy', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<ListGroupProps>({})

      scope.run(() => {
        const group = new InspectableListGroup(props, element, naming)

        expect(group.hasInstance('open')).toBe(false)
        expect(group.instantiatedItems.open).toBeUndefined()

        expect(group.aria).toEqual({ role: 'group' })
        expect(group.hasInstance('open')).toBe(false)

        expect(group.isOpen()).toBe(false)
        expect(group.hasInstance('open')).toBe(true)
      })

      scope.stop()
    })

    it('should support overriding ListGroupOpen via constructors DI', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<ListGroupProps>({})

      class CustomListGroupOpen extends ListGroupOpen<ListGroupProps> {
        override readonly is = (): boolean => true
      }

      scope.run(() => {
        const group = new ListGroup(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          { open: CustomListGroupOpen }
        )

        expect(group.i('open')).toBeInstanceOf(CustomListGroupOpen)
        expect(group.isOpen()).toBe(true)
        expect(group.binds['data-open']).toBe('open')
      })

      scope.stop()
    })
  })

  describe('Bindings, ARIA, and state transitions', () => {
    it('should compute binds and transformBinds for default, open, and divider states', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<ListGroupProps>({
        open: false,
        divider: false
      })

      scope.run(() => {
        const group = new ListGroup(props, element, naming)

        expect(group.aria).toEqual({ role: 'group' })
        expect(group.binds).toEqual({
          'data-open': 'close',
          'data-divider': undefined
        })
        expect(group.transformBinds).toMatchObject({
          autoClose: false,
          section: true,
          adaptive: 'planeAlways',
          open: false
        })

        props.divider = true
        expect(group.binds['data-divider']).toBe('divider')

        group.transformBinds.onTransformLite?.({ type: 'head', open: true })
        expect(group.isOpen()).toBe(true)
        expect(group.binds['data-open']).toBe('open')
        expect(group.transformBinds.open).toBe(true)

        group.transformBinds.onTransformLite?.({ type: 'head', open: false })
        expect(group.isOpen()).toBe(false)
        expect(group.binds['data-open']).toBe('close')
      })

      scope.stop()
    })

    it('should reflect reactive props.open changes', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<ListGroupProps>({})

      scope.run(() => {
        const group = new ListGroup(props, element, naming)

        expect(group.isOpen()).toBe(false)
        props.open = true
        expect(group.isOpen()).toBe(true)
        expect(group.binds['data-open']).toBe('open')

        props.open = false
        expect(group.isOpen()).toBe(false)
        expect(group.binds['data-open']).toBe('close')
      })

      scope.stop()
    })
  })
})
