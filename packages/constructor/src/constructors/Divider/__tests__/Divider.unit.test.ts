// @vitest-environment jsdom
import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { DesignLogicAbstract, DesignName } from '@dxtmisha/functional'

import type { AriaList } from '../../../types/ariaTypes'
import { Divider } from '../Divider'
import type { DividerProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('Divider (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should extend DesignLogicAbstract and return semantic separator ARIA attributes', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const scope = effectScope()
      let instance: Divider | undefined

      scope.run(() => {
        const props = reactive<DividerProps>({})
        const element = ref<HTMLElement | undefined>(undefined)
        const naming = new DesignName('d1.divider')
        instance = new Divider(props, element, naming)
      })
      cleanups.push(() => scope.stop())

      expect(instance).toBeInstanceOf(DesignLogicAbstract)
      expect(instance?.isMounted.value).toBe(false)
      expect(instance?.aria).toEqual({ role: 'separator' })
      expectTypeOf(instance!.aria).toEqualTypeOf<AriaList>()
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should isolate returned ARIA objects and state across multiple instances', () => {
      const propsFirst = reactive<DividerProps>({})
      const propsSecond = reactive<DividerProps>({})
      const elementFirst = ref<HTMLElement | undefined>(undefined)
      const elementSecond = ref<HTMLElement | undefined>(undefined)
      const naming = new DesignName('d1.divider')

      const first = new Divider(propsFirst, elementFirst, naming)
      const second = new Divider(propsSecond, elementSecond, naming)

      const firstAria = first.aria
      firstAria.role = 'presentation'

      expect(first.aria).toEqual({ role: 'separator' })
      expect(second.aria).toEqual({ role: 'separator' })
      expect(first.isMounted).not.toBe(second.isMounted)
    })
  })

  describe('Lifecycle orchestration', () => {
    it('should transition isMounted to true when instantiated inside a mounted Vue component', () => {
      let instance: Divider | undefined

      const Component = defineComponent({
        setup() {
          const props = reactive<DividerProps>({})
          const element = ref<HTMLElement | undefined>(undefined)
          const naming = new DesignName('d1.divider')
          instance = new Divider(props, element, naming)

          return () => h('div', { ref: element, ...instance?.aria })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Component)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(instance?.isMounted.value).toBe(true)
      expect(host.firstElementChild?.getAttribute('role')).toBe('separator')
    })

    it('should respect hasLifecycle=false when lifecycle registration is disabled', () => {
      let instance: Divider | undefined

      const Component = defineComponent({
        setup() {
          const props = reactive<DividerProps>({})
          const element = ref<HTMLElement | undefined>(undefined)
          const naming = new DesignName('d1.divider')
          instance = new Divider(
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
    })
  })
})
