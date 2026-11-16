// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { FieldCounterInclude } from '../FieldCounterInclude'
import type { FieldCounterPropsInclude } from '../basicTypes'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
})

describe('FieldCounterInclude (isolated class)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should evaluate static is correctly across prop combinations', () => {
      expect(FieldCounterInclude.is()).toBe(false)
      expect(FieldCounterInclude.is({})).toBe(false)
      expect(FieldCounterInclude.is({ counter: 5 })).toBe(false)
      expect(FieldCounterInclude.is({ counterShow: true })).toBe(false)
      expect(FieldCounterInclude.is({ counterShow: true, counter: 0 })).toBe(true)
      expect(FieldCounterInclude.is({ counterShow: true, counter: '12' })).toBe(true)
      expect(FieldCounterInclude.is({ counterShow: true, maxlength: 50 })).toBe(true)
      expect(FieldCounterInclude.is({ counterShow: false, maxlength: 50 })).toBe(false)
      expect(FieldCounterInclude.is({ counterShow: true, counter: null as unknown as number })).toBe(false)
    })

    it('should reactively evaluate instance is getter', () => {
      const props = reactive<FieldCounterPropsInclude>({
        counterShow: false,
        counter: 10
      })
      const include = new FieldCounterInclude(props, new DesignName('d1.input'))

      expect(include.is).toBe(false)

      props.counterShow = true
      expect(include.is).toBe(true)

      props.counter = undefined
      expect(include.is).toBe(false)

      props.maxlength = 100
      expect(include.is).toBe(true)
    })

    it('should expose bindsIntermediary with all counter-related properties', () => {
      const attrs = { class: 'custom-counter' }
      const props: FieldCounterPropsInclude = {
        counter: 12,
        counterShow: true,
        counterTemplate: '[c]/[m]',
        counterId: 'counter-1',
        maxlength: 50,
        fieldCounterAttrs: attrs
      }
      const include = new FieldCounterInclude(props, new DesignName('d1.input'))

      expect(include.bindsIntermediary).toEqual({
        counter: 12,
        counterShow: true,
        counterTemplate: '[c]/[m]',
        counterId: 'counter-1',
        maxlength: 50,
        fieldCounterAttrs: attrs
      })
    })

    it('should compute binds mapping counterId, counter, maxlength, template and fieldCounterAttrs', () => {
      const props = reactive<FieldCounterPropsInclude>({
        counterShow: true,
        counter: 4,
        maxlength: 10,
        counterId: 'my-counter',
        counterTemplate: '[c] / [m]',
        fieldCounterAttrs: {
          'data-test': 'counter'
        }
      })
      const include = new FieldCounterInclude(props, new DesignName('d1.input'))

      expect(include.binds.value).toEqual({
        'ref': expect.anything(),
        'class': 'd1-input__fieldCounter',
        'data-test': 'counter',
        'id': 'my-counter',
        'counter': 4,
        'maxlength': 10,
        'template': '[c] / [m]'
      })
    })
  })

  describe('Edge cases, non-destructive merging, and rendering', () => {
    it('should preserve fieldCounterAttrs values when direct props are undefined', () => {
      const props: FieldCounterPropsInclude = {
        counterShow: true,
        maxlength: 20,
        fieldCounterAttrs: {
          id: 'attr-id',
          template: 'From attrs: [c]'
        }
      }
      const include = new FieldCounterInclude(props, new DesignName('d1.input'))

      expect(include.binds.value).toEqual({
        ref: expect.anything(),
        class: 'd1-input__fieldCounter',
        id: 'attr-id',
        maxlength: 20,
        template: 'From attrs: [c]'
      })
    })

    it('should render lazily when component is registered and isShow condition passes', async () => {
      const props = reactive<FieldCounterPropsInclude>({
        counterShow: false,
        counter: 3
      })
      const MockCounter = defineComponent({
        props: {
          counter: [String, Number]
        },
        setup(componentProps) {
          return () => h('span', { class: 'mock-counter' }, String(componentProps.counter ?? ''))
        }
      })

      const include = new FieldCounterInclude(
        props,
        new DesignName('d1.input'),
        new DesignComponents({ fieldCounter: MockCounter })
      )

      const Host = defineComponent({
        setup() {
          return () => h('div', include.render())
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())
      await nextTick()

      expect(container.querySelector('.mock-counter')).toBeNull()

      props.counterShow = true
      await nextTick()

      expect(container.querySelector('.mock-counter')?.textContent).toBe('3')
      expect(include.render(undefined, undefined, () => false)).toEqual([])
    })
  })
})
