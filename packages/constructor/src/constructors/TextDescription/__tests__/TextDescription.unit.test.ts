// @vitest-environment jsdom
import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { DesignLogicAbstract, DesignName } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../../classes/DescriptionInclude'
import { TextDescription, type TextDescriptionConstructors } from '../TextDescription'
import type { TextDescriptionProps } from '../props'

const cleanups: Array<() => void> = []

function createInScope<T>(factory: () => T): T {
  const scope = effectScope()
  const value = scope.run(factory) as T
  cleanups.push(() => scope.stop())

  return value
}

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('TextDescription (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should extend DesignLogicAbstract and keep DescriptionInclude lazily unallocated until needed', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const instance = createInScope(() => {
        const props = reactive<TextDescriptionProps>({
          description: 'Detailed explanation',
          tag: 'p'
        })
        const element = ref<HTMLElement | undefined>(undefined)
        const naming = new DesignName('d1.textDescription')

        return new TextDescription(props, element, naming)
      })

      expect(instance).toBeInstanceOf(DesignLogicAbstract)
      expect(instance.hasInstance('description')).toBe(false)
      expectTypeOf<TextDescriptionConstructors>().toEqualTypeOf<{
        description: typeof DescriptionInclude
      }>()

      const nodes = instance.callInstance('description', item => item.render(), [])
      expect(instance.hasInstance('description')).toBe(true)
      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.type).toBe('p')
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should reactively track tag updates through toRef when rendering DescriptionInclude', () => {
      const props = reactive<TextDescriptionProps>({
        description: 'Reactive tag text',
        tag: 'div'
      })
      const instance = createInScope(() => new TextDescription(
        props,
        ref<HTMLElement | undefined>(undefined),
        new DesignName('d1.textDescription')
      ))

      const firstNodes = instance.callInstance('description', item => item.render(), [])
      expect(firstNodes[0]?.type).toBe('div')

      props.tag = 'span'
      const secondNodes = instance.callInstance('description', item => item.render(), [])
      expect(secondNodes[0]?.type).toBe('span')

      props.tag = undefined
      const fallbackNodes = instance.callInstance('description', item => item.render(), [])
      expect(fallbackNodes[0]?.type).toBe('div')
    })

    it('should support dependency injection overrides via constructors parameter', () => {
      const renderSpy = vi.fn(() => [h('section', 'Custom')])

      class CustomDescriptionInclude extends DescriptionInclude {
        override render = renderSpy
      }

      const props = reactive<TextDescriptionProps>({
        description: 'Custom description',
        tag: 'section'
      })
      const instance = createInScope(() => new TextDescription(
        props,
        ref<HTMLElement | undefined>(undefined),
        new DesignName('d1.textDescription'),
        undefined,
        undefined,
        undefined,
        { description: CustomDescriptionInclude }
      ))

      const nodes = instance.callInstance('description', item => item.render(), [])
      expect(instance.i('description')).toBeInstanceOf(CustomDescriptionInclude)
      expect(renderSpy).toHaveBeenCalledTimes(1)
      expect(nodes[0]?.type).toBe('section')
    })
  })

  describe('Boundary values, zero/falsy traps, and slot guards', () => {
    it('should skip instantiating DescriptionInclude when description is empty, whitespace-only, or omitted without slots', () => {
      const naming = new DesignName('d1.textDescription')

      for (const description of [undefined, '', '   ', '\t\n']) {
        const instance = createInScope(() => new TextDescription(
          reactive<TextDescriptionProps>({ description }),
          ref<HTMLElement | undefined>(undefined),
          naming
        ))

        const nodes = instance.callInstance('description', item => item.render(), [])
        expect(nodes).toEqual([])
        expect(instance.hasInstance('description')).toBe(false)
      }
    })

    it('should instantiate DescriptionInclude for numeric 0 and when description slot is provided', () => {
      const naming = new DesignName('d1.textDescription')

      const zeroInstance = createInScope(() => new TextDescription(
        reactive<TextDescriptionProps>({ description: 0 }),
        ref<HTMLElement | undefined>(undefined),
        naming
      ))
      const zeroNodes = zeroInstance.callInstance('description', item => item.render(), [])
      expect(zeroInstance.hasInstance('description')).toBe(true)
      expect(zeroNodes).toHaveLength(1)

      const slotInstance = createInScope(() => new TextDescription(
        reactive<TextDescriptionProps>({}),
        ref<HTMLElement | undefined>(undefined),
        naming,
        undefined,
        { description: () => 'Slot description' }
      ))
      const slotNodes = slotInstance.callInstance('description', item => item.render(), [])
      expect(slotInstance.hasInstance('description')).toBe(true)
      expect(slotNodes).toHaveLength(1)
    })

    it('should continue invoking existing instance when description dynamically clears after creation', () => {
      const props = reactive<TextDescriptionProps>({ description: 'Initial' })
      const instance = createInScope(() => new TextDescription(
        props,
        ref<HTMLElement | undefined>(undefined),
        new DesignName('d1.textDescription')
      ))

      expect(instance.callInstance('description', item => item.render(), [])).toHaveLength(1)
      expect(instance.hasInstance('description')).toBe(true)

      props.description = ''
      expect(instance.callInstance('description', item => item.render(), [])).toEqual([])
    })
  })

  describe('Lifecycle orchestration and instance isolation', () => {
    it('should transition isMounted inside a mounted Vue component and isolate instances', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      let mountedInstance: TextDescription | undefined

      const Component = defineComponent({
        setup() {
          const props = reactive<TextDescriptionProps>({ description: 'Mounted' })
          const element = ref<HTMLElement | undefined>(undefined)
          const naming = new DesignName('d1.textDescription')
          mountedInstance = new TextDescription(props, element, naming)

          return () => h('div', { ref: element })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Component)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const standalone = createInScope(() => new TextDescription(
        reactive<TextDescriptionProps>({ description: 'Standalone' }),
        ref<HTMLElement | undefined>(undefined),
        new DesignName('d1.textDescription')
      ))

      expect(mountedInstance?.isMounted.value).toBe(true)
      expect(standalone.isMounted.value).toBe(false)
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })
})
