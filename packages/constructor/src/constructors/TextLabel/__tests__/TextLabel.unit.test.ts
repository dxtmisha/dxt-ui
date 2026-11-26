// @vitest-environment jsdom
import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { DesignLogicAbstract, DesignName } from '@dxtmisha/functional'

import { LabelInclude } from '../../../classes/LabelInclude'
import { TextLabel, type TextLabelConstructors } from '../TextLabel'
import type { TextLabelProps } from '../props'

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

describe('TextLabel (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should extend DesignLogicAbstract and keep LabelInclude lazily unallocated until needed', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const instance = createInScope(() => {
        const props = reactive<TextLabelProps>({
          label: 'Section Heading',
          tag: 'h2'
        })
        const element = ref<HTMLElement | undefined>(undefined)
        const naming = new DesignName('d1.textLabel')

        return new TextLabel(props, element, naming)
      })

      expect(instance).toBeInstanceOf(DesignLogicAbstract)
      expect(instance.hasInstance('label')).toBe(false)
      expectTypeOf<TextLabelConstructors>().toEqualTypeOf<{
        label: typeof LabelInclude
      }>()

      const nodes = instance.callInstance('label', item => item.render(), [])
      expect(instance.hasInstance('label')).toBe(true)
      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.type).toBe('h2')
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should reactively resolve tag via getter function and fallback to span when tag is undefined', () => {
      const props = reactive<TextLabelProps>({
        label: 'Dynamic label',
        tag: 'div'
      })
      const instance = createInScope(() => new TextLabel(
        props,
        ref<HTMLElement | undefined>(undefined),
        new DesignName('d1.textLabel')
      ))

      const divNodes = instance.callInstance('label', item => item.render(), [])
      expect(divNodes[0]?.type).toBe('div')

      props.tag = 'h3'
      const headingNodes = instance.callInstance('label', item => item.render(), [])
      expect(headingNodes[0]?.type).toBe('h3')

      props.tag = undefined
      const fallbackNodes = instance.callInstance('label', item => item.render(), [])
      expect(fallbackNodes[0]?.type).toBe('span')
    })

    it('should support dependency injection overrides via constructors parameter', () => {
      const renderSpy = vi.fn(() => [h('label', 'Custom Label')])

      class CustomLabelInclude extends LabelInclude {
        override render = renderSpy
      }

      const props = reactive<TextLabelProps>({
        label: 'Injected',
        tag: 'label'
      })
      const instance = createInScope(() => new TextLabel(
        props,
        ref<HTMLElement | undefined>(undefined),
        new DesignName('d1.textLabel'),
        undefined,
        undefined,
        undefined,
        { label: CustomLabelInclude }
      ))

      const nodes = instance.callInstance('label', item => item.render(), [])
      expect(instance.i('label')).toBeInstanceOf(CustomLabelInclude)
      expect(renderSpy).toHaveBeenCalledTimes(1)
      expect(nodes[0]?.type).toBe('label')
    })
  })

  describe('Boundary values, zero/falsy traps, and slot guards', () => {
    it('should skip instantiating LabelInclude when label is empty, whitespace-only, or omitted without slots', () => {
      const naming = new DesignName('d1.textLabel')

      for (const label of [undefined, '', '   ', '\t\n']) {
        const instance = createInScope(() => new TextLabel(
          reactive<TextLabelProps>({ label }),
          ref<HTMLElement | undefined>(undefined),
          naming
        ))

        const nodes = instance.callInstance('label', item => item.render(), [])
        expect(nodes).toEqual([])
        expect(instance.hasInstance('label')).toBe(false)
      }
    })

    it('should instantiate LabelInclude for numeric 0 and when default slot is provided', () => {
      const naming = new DesignName('d1.textLabel')

      const zeroInstance = createInScope(() => new TextLabel(
        reactive<TextLabelProps>({ label: 0 }),
        ref<HTMLElement | undefined>(undefined),
        naming
      ))
      const zeroNodes = zeroInstance.callInstance('label', item => item.render(), [])
      expect(zeroInstance.hasInstance('label')).toBe(true)
      expect(zeroNodes).toHaveLength(1)

      const slotInstance = createInScope(() => new TextLabel(
        reactive<TextLabelProps>({}),
        ref<HTMLElement | undefined>(undefined),
        naming,
        undefined,
        { default: () => 'Slot label' }
      ))
      const slotNodes = slotInstance.callInstance('label', item => item.render(), [])
      expect(slotInstance.hasInstance('label')).toBe(true)
      expect(slotNodes).toHaveLength(1)
    })

    it('should continue invoking existing instance when label dynamically clears after creation', () => {
      const props = reactive<TextLabelProps>({ label: 'Initial' })
      const instance = createInScope(() => new TextLabel(
        props,
        ref<HTMLElement | undefined>(undefined),
        new DesignName('d1.textLabel')
      ))

      expect(instance.callInstance('label', item => item.render(), [])).toHaveLength(1)
      expect(instance.hasInstance('label')).toBe(true)

      props.label = ''
      expect(instance.callInstance('label', item => item.render(), [])).toEqual([])
    })
  })

  describe('Lifecycle orchestration and instance isolation', () => {
    it('should transition isMounted inside a mounted Vue component and isolate instances', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      let mountedInstance: TextLabel | undefined

      const Component = defineComponent({
        setup() {
          const props = reactive<TextLabelProps>({ label: 'Mounted' })
          const element = ref<HTMLElement | undefined>(undefined)
          const naming = new DesignName('d1.textLabel')
          mountedInstance = new TextLabel(props, element, naming)

          return () => h('div', { ref: element })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Component)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const standalone = createInScope(() => new TextLabel(
        reactive<TextLabelProps>({ label: 'Standalone' }),
        ref<HTMLElement | undefined>(undefined),
        new DesignName('d1.textLabel')
      ))

      expect(mountedInstance?.isMounted.value).toBe(true)
      expect(standalone.isMounted.value).toBe(false)
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })
})
