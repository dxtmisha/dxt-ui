// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive
} from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ProgressInclude } from '../ProgressInclude'
import type { ProgressPropsInclude } from '../basicTypes'

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.useRealTimers()
})

describe('ProgressInclude (isolated class)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should evaluate static is correctly across different prop values', () => {
      expect(ProgressInclude.is()).toBe(false)
      expect(ProgressInclude.is({})).toBe(false)
      expect(ProgressInclude.is({ loading: false })).toBe(false)
      expect(ProgressInclude.is({ loading: true })).toBe(true)
      expect(ProgressInclude.is({ loading: { circular: true } })).toBe(true)
    })

    it('should determine reactive is property based on loading prop', () => {
      const props: ProgressPropsInclude = reactive({ loading: false })
      const naming = new DesignName('d1.button')
      const include = new ProgressInclude(props, naming)

      expect(include.is).toBe(false)

      props.loading = true
      expect(include.is).toBe(true)

      props.loading = false
      expect(include.is).toBe(false)
    })

    it('should provide aria attributes matching disabled state when loading', () => {
      const props: ProgressPropsInclude = reactive({ loading: false })
      const naming = new DesignName('d1.button')
      const include = new ProgressInclude(props, naming)

      expect(include.aria.value).toEqual({})

      props.loading = true
      expect(include.aria.value).toEqual({ 'aria-disabled': 'true' })
    })

    it('should resolve extra properties mapping loading to visible and include loading class', () => {
      const props: ProgressPropsInclude = reactive({ loading: true })
      const naming = new DesignName('d1.button')
      const include = new ProgressInclude(props, naming)

      expect(include.binds.value).toEqual({
        class: 'd1-button__loading',
        visible: true
      })

      props.loading = false
      expect(include.binds.value).toEqual({
        class: 'd1-button__loading',
        visible: false
      })
    })
  })

  describe('Edge cases, boundaries, and reactivity', () => {
    it('should handle undefined and empty props gracefully', () => {
      const naming = new DesignName('d1.button')
      const include = new ProgressInclude({}, naming)

      expect(include.is).toBe(false)
      expect(include.aria.value).toEqual({})
      expect(include.binds.value).toEqual({
        class: 'd1-button__loading'
      })
    })

    it('should handle extra configurations passed to constructor', () => {
      const props: ProgressPropsInclude = reactive({ loading: true })
      const naming = new DesignName('d1.button')
      const include = new ProgressInclude(props, naming, undefined, { circular: true, inverse: true })

      expect(include.binds.value).toEqual({
        circular: true,
        class: 'd1-button__loading',
        inverse: true,
        visible: true
      })
    })

    it('should reactively update when component is rendered in a Vue tree', async () => {
      const props: ProgressPropsInclude = reactive({ loading: false })
      const naming = new DesignName('d1.button')
      let includeInstance: ProgressInclude | undefined

      const HostComponent = defineComponent({
        setup() {
          const localInstance = new ProgressInclude(props, naming)
          includeInstance = localInstance
          return () => h('div', { ...localInstance.aria.value }, localInstance.render())
        }
      })

      const container = document.createElement('div')
      const app = createApp(HostComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())

      expect(container.firstElementChild?.hasAttribute('aria-disabled')).toBe(false)

      props.loading = true
      await nextTick()

      expect(includeInstance?.is).toBe(true)
      expect(container.firstElementChild?.getAttribute('aria-disabled')).toBe('true')
    })
  })
})
