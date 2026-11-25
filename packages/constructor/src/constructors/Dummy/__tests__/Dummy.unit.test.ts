// @vitest-environment jsdom
import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { DesignLogicAbstract, DesignName } from '@dxtmisha/functional'

import { Dummy, type DummyConstructors } from '../Dummy'
import type { DummyProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('Dummy (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should extend DesignLogicAbstract and initialize cleanly inside an effectScope without warnings', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const scope = effectScope()
      let instance: Dummy | undefined

      scope.run(() => {
        const props = reactive<DummyProps>({})
        const element = ref<HTMLElement | undefined>(undefined)
        const naming = new DesignName('d1.dummy')
        instance = new Dummy(props, element, naming)
      })
      cleanups.push(() => scope.stop())

      expect(instance).toBeInstanceOf(DesignLogicAbstract)
      expect(instance?.isMounted.value).toBe(false)
      expectTypeOf<DummyConstructors>().toEqualTypeOf<{}>()
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should isolate reactive state across multiple independent instances', () => {
      const naming = new DesignName('d1.dummy')
      const first = new Dummy(
        reactive<DummyProps>({}),
        ref<HTMLElement | undefined>(undefined),
        naming
      )
      const second = new Dummy(
        reactive<DummyProps>({}),
        ref<HTMLElement | undefined>(undefined),
        naming
      )

      expect(first).not.toBe(second)
      expect(first.isMounted).not.toBe(second.isMounted)
      expect(first.isMounted.value).toBe(false)
      expect(second.isMounted.value).toBe(false)
    })
  })

  describe('Lifecycle orchestration', () => {
    it('should transition isMounted to true when instantiated inside a mounted Vue component', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      let instance: Dummy | undefined

      const Component = defineComponent({
        setup() {
          const props = reactive<DummyProps>({})
          const element = ref<HTMLElement | undefined>(undefined)
          const naming = new DesignName('d1.dummy')
          instance = new Dummy(props, element, naming)

          return () => h('div', { ref: element })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Component)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(instance?.isMounted.value).toBe(true)
      expect(host.firstElementChild?.tagName).toBe('DIV')
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should respect hasLifecycle=false when lifecycle registration is disabled', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      let instance: Dummy | undefined

      const Component = defineComponent({
        setup() {
          const props = reactive<DummyProps>({})
          const element = ref<HTMLElement | undefined>(undefined)
          const naming = new DesignName('d1.dummy')
          instance = new Dummy(
            props,
            element,
            naming,
            undefined,
            undefined,
            undefined,
            undefined,
            false
          )

          return () => h('div', { ref: element })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Component)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(instance?.isMounted.value).toBe(false)
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })
})
