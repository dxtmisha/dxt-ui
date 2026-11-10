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

import { ButtonInclude } from '../ButtonInclude'
import type { ButtonPropsInclude } from '../basicTypes'

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.useRealTimers()
})

describe('ButtonInclude (isolated class)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should determine is based on label, icon, or iconTrailing in binds', () => {
      const props: ButtonPropsInclude = reactive({})
      const naming = new DesignName('d1.alert')
      const include = new ButtonInclude(props, naming)

      expect(include.is).toBe(false)

      props.buttonAttrs = { label: 'Click me' }
      expect(include.is).toBe(true)

      props.buttonAttrs = { icon: 'home' }
      expect(include.is).toBe(true)

      props.buttonAttrs = { iconTrailing: 'arrow_forward' }
      expect(include.is).toBe(true)

      props.buttonAttrs = {}
      expect(include.is).toBe(false)
    })

    it('should resolve binds forwarding buttonAttrs and applying class name', () => {
      const props: ButtonPropsInclude = reactive({
        buttonAttrs: { label: 'Save', disabled: true }
      })
      const naming = new DesignName('d1.alert')
      const include = new ButtonInclude(props, naming)

      expect(include.binds.value).toEqual({
        class: 'd1-alert__button',
        disabled: true,
        label: 'Save'
      })
    })

    it('should merge extra configurations passed to constructor', () => {
      const props: ButtonPropsInclude = reactive({
        buttonAttrs: { label: 'Confirm' }
      })
      const naming = new DesignName('d1.alert')
      const include = new ButtonInclude(props, naming, undefined, { primary: true } as any)

      expect(include.binds.value).toEqual({
        class: 'd1-alert__button',
        label: 'Confirm',
        primary: true
      })
    })
  })

  describe('Edge cases and reactivity', () => {
    it('should handle undefined and empty props gracefully', () => {
      const naming = new DesignName('d1.alert')
      const include = new ButtonInclude({}, naming)

      expect(include.is).toBe(false)
      expect(include.binds.value).toEqual({
        class: 'd1-alert__button'
      })
    })

    it('should reactively update when rendered in a Vue component tree', async () => {
      const props: ButtonPropsInclude = reactive({})
      const naming = new DesignName('d1.alert')
      let includeInstance: ButtonInclude | undefined

      const HostComponent = defineComponent({
        setup() {
          const localInstance = new ButtonInclude(props, naming)
          includeInstance = localInstance
          return () => h('div', { class: 'host' }, localInstance.render())
        }
      })

      const container = document.createElement('div')
      const app = createApp(HostComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())

      expect(includeInstance?.is).toBe(false)

      props.buttonAttrs = { label: 'Active Action' }
      await nextTick()

      expect(includeInstance?.is).toBe(true)
      expect(includeInstance?.binds.value.label).toBe('Active Action')
    })
  })
})
