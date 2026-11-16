// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { FieldLabelInclude } from '../FieldLabelInclude'
import type { FieldLabelPropsInclude } from '../basicTypes'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
})

describe('FieldLabelInclude (isolated class)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should evaluate static is and instance is getter correctly', () => {
      expect(FieldLabelInclude.is()).toBe(false)
      expect(FieldLabelInclude.is({})).toBe(false)
      expect(FieldLabelInclude.is({ label: 'Name' })).toBe(true)
      expect(FieldLabelInclude.is({ label: '' }, false)).toBe(false)
      expect(FieldLabelInclude.is({ label: '' }, true)).toBe(true)
      expect(FieldLabelInclude.is({ label: 123 })).toBe(true)
      expect(FieldLabelInclude.is({ label: 0 })).toBe(false)

      const props = reactive<FieldLabelPropsInclude>({})
      const isCounter = ref(false)
      const include = new FieldLabelInclude(
        props,
        new DesignName('d1.field'),
        undefined,
        undefined,
        undefined,
        undefined,
        isCounter
      )

      expect(include.is).toBe(false)

      props.label = 'Phone'
      expect(include.is).toBe(true)

      props.label = ''
      expect(include.is).toBe(false)

      isCounter.value = true
      expect(include.is).toBe(true)
    })

    it('should compute id only when counter is shown and fieldCounter is active', () => {
      const props = reactive<FieldLabelPropsInclude>({
        counterShow: true,
        counter: 3
      })
      const isCounter = ref(false)
      const include = new FieldLabelInclude(
        props,
        new DesignName('d1.field'),
        undefined,
        undefined,
        undefined,
        undefined,
        isCounter
      )

      expect(include.showCounter()).toBe(false)
      expect(include.id).toBe('')

      isCounter.value = true
      expect(include.showCounter()).toBe(true)
      const defaultId = include.id
      expect(defaultId).not.toBe('')
      expect(include.binds.value.counterId).toBe(defaultId)

      props.counterId = 'custom-counter-id'
      expect(include.id).toBe('custom-counter-id')
      expect(include.binds.value.counterId).toBe('custom-counter-id')

      props.counter = undefined
      props.maxlength = undefined
      expect(include.id).toBe('')
    })

    it('should compute binds with forId, label, required, labelId, counterId, fieldLabelAttrs, and counter bindings', () => {
      const forId = ref('input-1')
      const isCounter = ref(true)
      const props = reactive<FieldLabelPropsInclude>({
        label: 'Email',
        required: true,
        labelId: 'email-label',
        counterId: 'email-counter',
        counterShow: true,
        counter: 2,
        maxlength: 30,
        counterTemplate: '[c]/[m]',
        fieldLabelAttrs: {
          'data-test': 'field-label'
        }
      })

      const include = new FieldLabelInclude(
        props,
        new DesignName('d1.field'),
        undefined,
        undefined,
        undefined,
        forId,
        isCounter
      )

      expect(include.binds.value).toEqual({
        'ref': expect.anything(),
        'class': 'd1-field__fieldLabel',
        'data-test': 'field-label',
        'for': 'input-1',
        'label': 'Email',
        'required': true,
        'labelId': 'email-label',
        'counterId': 'email-counter',
        'counter': 2,
        'counterShow': true,
        'counterTemplate': '[c]/[m]',
        'maxlength': 30
      })
    })
  })

  describe('Edge cases, fallback preservation, and lazy rendering', () => {
    it('should preserve fieldLabelAttrs values when direct props are undefined', () => {
      const props: FieldLabelPropsInclude = {
        label: 'From direct',
        fieldLabelAttrs: {
          required: true,
          for: 'attr-for'
        }
      }

      const include = new FieldLabelInclude(props, new DesignName('d1.field'))

      expect(include.binds.value).toMatchObject({
        class: 'd1-field__fieldLabel',
        label: 'From direct',
        required: true,
        for: 'attr-for'
      })
      expect(include.binds.value).not.toHaveProperty('counterShow')
    })

    it('should render lazily when component is registered and condition is met', async () => {
      const props = reactive<FieldLabelPropsInclude>({
        label: undefined
      })

      const MockFieldLabel = defineComponent({
        props: {
          label: [String, Number]
        },
        setup(componentProps) {
          return () => h('label', { class: 'mock-field-label' }, String(componentProps.label ?? ''))
        }
      })

      const include = new FieldLabelInclude(
        props,
        new DesignName('d1.field'),
        new DesignComponents({ fieldLabel: MockFieldLabel })
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

      expect(container.querySelector('.mock-field-label')).toBeNull()

      props.label = 'Phone'
      await nextTick()

      expect(container.querySelector('.mock-field-label')?.textContent).toBe('Phone')
    })
  })
})
