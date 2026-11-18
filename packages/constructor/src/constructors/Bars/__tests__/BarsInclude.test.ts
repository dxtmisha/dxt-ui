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
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { BarsInclude } from '../BarsInclude'
import type { BarsPropsInclude } from '../basicTypes'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.useRealTimers()
})

describe('BarsInclude (isolated class)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should evaluate static is() and instance is getter accurately', () => {
      expect(BarsInclude.is()).toBe(true)
      expect(BarsInclude.is({})).toBe(true)
      expect(BarsInclude.is({ barsBackHide: true })).toBe(false)
      expect(BarsInclude.is({ barsBackHide: true, barsLabel: 'Title' })).toBe(true)
      expect(BarsInclude.is({ barsBackHide: true, barsLabel: 0 })).toBe(true)
      expect(BarsInclude.is({ barsBackHide: true, barsLabel: '   ' })).toBe(false)
      expect(BarsInclude.is({ barsBackHide: true, barsDescription: 'Desc' })).toBe(true)
      expect(BarsInclude.is({ barsHide: true, barsLabel: 'Title' })).toBe(false)

      const props: BarsPropsInclude = reactive({ barsBackHide: true })
      const naming = new DesignName('d1.dialog')
      const include = new BarsInclude(props, naming)

      expect(include.is).toBe(false)

      props.barsLabel = 'Header'
      expect(include.is).toBe(true)

      props.barsHide = true
      expect(include.is).toBe(false)
    })

    it('should resolve binds with labelId, descriptionId, bars props, and barsAttrs', () => {
      const props: BarsPropsInclude = reactive({
        barsLabel: 'Title',
        barsDescription: 'Subtitle',
        barsBackHide: false,
        barsList: [{ value: 'close', label: 'Close' }],
        barsAttrs: { padding: 'sm' }
      })
      const naming = new DesignName('d1.dialog')
      const include = new BarsInclude(
        props,
        naming,
        undefined,
        undefined,
        undefined,
        undefined,
        'lbl-1',
        'desc-1'
      )

      expect(include.binds.value).toMatchObject({
        class: 'd1-dialog__bars',
        padding: 'sm',
        labelId: 'lbl-1',
        label: 'Title',
        descriptionId: 'desc-1',
        description: 'Subtitle',
        backHide: false,
        bars: [{ value: 'close', label: 'Close' }]
      })
      expect(typeof include.binds.value.onClick).toBe('function')
    })

    it('should emit bars, barsLite, and barsBack events on click', () => {
      const emits = vi.fn()
      const naming = new DesignName('d1.dialog')
      const include = new BarsInclude({}, naming, undefined, undefined, undefined, emits)

      const mouseEvent = new MouseEvent('click')
      include.onClick(mouseEvent, { value: 'save', type: 'save', detail: undefined })

      expect(emits).toHaveBeenCalledWith('bars', mouseEvent, { value: 'save', type: 'save', detail: undefined })
      expect(emits).toHaveBeenCalledWith('barsLite', { value: 'save', type: 'save', detail: undefined })
      expect(emits).not.toHaveBeenCalledWith('barsBack', expect.anything())

      include.onClick(mouseEvent, { value: 'back', type: 'back', detail: undefined })
      expect(emits).toHaveBeenCalledWith('barsBack', { value: 'back', type: 'back', detail: undefined })
    })

    it('should compose external barsAttrs.onClick with internal onClick via mergeProps', () => {
      const externalOnClick = vi.fn()
      const emits = vi.fn()
      const props: BarsPropsInclude = reactive({
        barsAttrs: { onClick: externalOnClick } as any
      })
      const naming = new DesignName('d1.dialog')
      const include = new BarsInclude(props, naming, undefined, undefined, undefined, emits)

      const mouseEvent = new MouseEvent('click')
      const onClick = include.binds.value.onClick as unknown as Array<(event: MouseEvent, value: any) => void>

      expect(Array.isArray(onClick)).toBe(true)
      onClick.forEach(handler => handler(mouseEvent, { value: 'back', type: 'back' }))

      expect(externalOnClick).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('barsBack', { value: 'back', type: 'back' })
    })
  })

  describe('Getter function props & Vue component integration', () => {
    it('should accept reactive getter function for props and update in component tree', async () => {
      const state = reactive<BarsPropsInclude>({
        barsBackHide: true
      })
      const naming = new DesignName('d1.modal')
      const MockBars = defineComponent({
        name: 'MockBars',
        props: {
          label: [String, Number]
        },
        setup(componentProps, { attrs }) {
          return () => h('div', { class: attrs.class }, String(componentProps.label ?? ''))
        }
      })

      const components = new DesignComponents({ bars: MockBars })
      let includeInstance: BarsInclude | undefined

      const Host = defineComponent({
        setup() {
          const instance = new BarsInclude(
            () => ({ ...state }),
            naming,
            components
          )
          includeInstance = instance

          return () => h('div', instance.render())
        }
      })

      const host = document.createElement('div')
      const app = createApp(Host)
      app.mount(host)
      mountedCleanups.push(() => app.unmount())

      await nextTick()
      expect(includeInstance?.is).toBe(false)
      expect(host.querySelector('.d1-modal__bars')).toBeNull()

      state.barsLabel = 'Modal Header'
      await nextTick()
      expect(includeInstance?.is).toBe(true)
      expect(host.querySelector('.d1-modal__bars')?.textContent).toBe('Modal Header')
    })
  })
})
