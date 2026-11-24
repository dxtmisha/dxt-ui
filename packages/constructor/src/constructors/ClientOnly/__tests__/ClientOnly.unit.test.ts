// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ClientOnly } from '../ClientOnly'
import { defaultsClientOnly, type ClientOnlyProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('ClientOnly (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should define clientOnly default as true', () => {
      expect(defaultsClientOnly.clientOnly).toBe(true)
    })

    it('should return false from isRender before mount when clientOnly is true', () => {
      const props = reactive<ClientOnlyProps>({ clientOnly: true })
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.clientOnly')
      const instance = new ClientOnly(props, element, naming)

      expect(instance.isMounted.value).toBe(false)
      expect(instance.isRender()).toBe(false)
    })

    it('should return true from isRender before mount when clientOnly is false', () => {
      const props = reactive<ClientOnlyProps>({ clientOnly: false })
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.clientOnly')
      const instance = new ClientOnly(props, element, naming)

      expect(instance.isMounted.value).toBe(false)
      expect(instance.isRender()).toBe(true)
    })

    it('should return true from isRender when clientOnly prop is omitted', () => {
      const props = reactive<ClientOnlyProps>({})
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.clientOnly')
      const instance = new ClientOnly(props, element, naming)

      expect(instance.isMounted.value).toBe(false)
      expect(instance.isRender()).toBe(true)
    })
  })

  describe('Reactivity and Vue lifecycle integration', () => {
    it('should reactively update isRender when clientOnly prop toggles before mount', () => {
      const props = reactive<ClientOnlyProps>({ clientOnly: true })
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.clientOnly')
      const instance = new ClientOnly(props, element, naming)

      expect(instance.isRender()).toBe(false)

      props.clientOnly = false
      expect(instance.isRender()).toBe(true)

      props.clientOnly = true
      expect(instance.isRender()).toBe(false)

      props.clientOnly = undefined
      expect(instance.isRender()).toBe(true)
    })

    it('should set isMounted to true on component mount and allow rendering even when clientOnly is true', async () => {
      const props = reactive<ClientOnlyProps>({ clientOnly: true })
      let logicInstance: ClientOnly | undefined
      let isRenderDuringSetup = true
      let isMountedDuringSetup = true

      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>(undefined)
          const naming = new DesignName('d1.clientOnly')
          logicInstance = new ClientOnly(props, element, naming)
          isMountedDuringSetup = logicInstance.isMounted.value
          isRenderDuringSetup = logicInstance.isRender()

          return () => h('div', logicInstance?.isRender() ? 'mounted' : 'pending')
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(isMountedDuringSetup).toBe(false)
      expect(isRenderDuringSetup).toBe(false)
      expect(logicInstance?.isMounted.value).toBe(true)
      expect(logicInstance?.isRender()).toBe(true)

      await nextTick()
      expect(container.textContent).toBe('mounted')

      props.clientOnly = false
      expect(logicInstance?.isRender()).toBe(true)

      props.clientOnly = true
      expect(logicInstance?.isRender()).toBe(true)
    })

    it('should not register mount lifecycle when hasLifecycle is false', () => {
      const props = reactive<ClientOnlyProps>({ clientOnly: true })
      let logicInstance: ClientOnly | undefined

      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>(undefined)
          const naming = new DesignName('d1.clientOnly')
          logicInstance = new ClientOnly(
            props,
            element,
            naming,
            undefined,
            undefined,
            undefined,
            undefined,
            false
          )

          return () => h('div')
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(logicInstance?.isMounted.value).toBe(false)
      expect(logicInstance?.isRender()).toBe(false)
    })
  })

  describe('Instance isolation and warning-free execution', () => {
    it('should not emit Vue warnings when instantiated outside a component instance', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const props = reactive<ClientOnlyProps>({ clientOnly: true })
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.clientOnly')

      const instance = new ClientOnly(props, element, naming)

      expect(instance.isMounted.value).toBe(false)
      expect(instance.isRender()).toBe(false)
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should keep state isolated between separate ClientOnly instances', () => {
      const elementFirst = ref<HTMLDivElement | undefined>(undefined)
      const elementSecond = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.clientOnly')

      const first = new ClientOnly(reactive<ClientOnlyProps>({ clientOnly: true }), elementFirst, naming)
      const second = new ClientOnly(reactive<ClientOnlyProps>({ clientOnly: false }), elementSecond, naming)

      expect(first.isRender()).toBe(false)
      expect(second.isRender()).toBe(true)

      first.isMounted.value = true
      expect(first.isRender()).toBe(true)
      expect(second.isMounted.value).toBe(false)
    })
  })
})
