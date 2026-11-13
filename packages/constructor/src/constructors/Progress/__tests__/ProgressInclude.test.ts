// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  createApp,
  computed,
  defineComponent,
  h,
  nextTick,
  reactive
} from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { ProgressInclude } from '../ProgressInclude'
import { ProgressDesign } from '../ProgressDesign'
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
    it('should render lazily and respect an explicit rendering condition', () => {
      const props: ProgressPropsInclude = reactive({ loading: false })
      const component = defineComponent({ render: () => null })
      const include = new ProgressInclude(
        props,
        new DesignName('d1.button'),
        new DesignComponents({ progress: component })
      )

      expect(include.render()).toEqual([])
      props.loading = true
      expect(include.render()).toHaveLength(1)
      props.loading = false
      expect(include.render()).toHaveLength(1)
      expect(include.render(undefined, undefined, () => false)).toEqual([])
    })

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

    it('should retain the progress component until its hide delay has elapsed', async () => {
      vi.useFakeTimers()
      const props: ProgressPropsInclude = reactive({ loading: true })
      const progressComponent = defineComponent({
        props: {
          visible: Boolean
        },
        setup(progressProps) {
          const properties = reactive({
            get visible() { return progressProps.visible },
            clientOnly: false,
            delay: 0,
            delayHide: 100
          })
          const design = new ProgressDesign('d1.progress', properties, {
            classes: computed(() => ({ main: { 'test-progress': true } }))
          })
          return design.render()
        }
      })
      const components = new DesignComponents({ progress: progressComponent })
      const HostComponent = defineComponent({
        setup() {
          const include = new ProgressInclude(props, new DesignName('d1.button'), components)
          return () => h('div', { ...include.aria.value }, include.render())
        }
      })
      const container = document.createElement('div')
      const app = createApp(HostComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())
      await nextTick()

      const progress = container.querySelector('.test-progress')
      expect(progress?.classList.contains('d1-progress--visible')).toBe(true)
      expect(container.firstElementChild?.getAttribute('aria-disabled')).toBe('true')

      props.loading = false
      await nextTick()
      expect(container.querySelector('.test-progress')).toBe(progress)
      expect(container.firstElementChild?.hasAttribute('aria-disabled')).toBe(false)
      expect(progress?.classList.contains('d1-progress--visible')).toBe(true)

      await vi.advanceTimersByTimeAsync(100)
      await nextTick()
      expect(container.querySelector('.test-progress')).toBe(progress)
      expect(progress?.classList.contains('d1-progress--hide')).toBe(true)
      expect(progress?.classList.contains('d1-progress--visible')).toBe(false)

      props.loading = true
      await nextTick()
      expect(container.querySelector('.test-progress')).toBe(progress)
      expect(progress?.classList.contains('d1-progress--visible')).toBe(true)
      expect(container.firstElementChild?.getAttribute('aria-disabled')).toBe('true')
    })
  })
})
