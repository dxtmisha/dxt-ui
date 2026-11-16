// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { FieldMessageInclude } from '../FieldMessageInclude'
import type { FieldMessagePropsInclude } from '../basicTypes'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
})

describe('FieldMessageInclude (isolated class)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should compute id from active helper, validation, and counter parts', () => {
      const props = reactive<FieldMessagePropsInclude>({
        helperMessage: 'Enter phone',
        helperId: 'custom-helper',
        validationMessage: 'Invalid format',
        validationId: 'custom-validation',
        counterShow: true,
        counter: 4,
        counterId: 'custom-counter'
      })
      const isCounter = ref(true)
      const include = new FieldMessageInclude(
        props,
        new DesignName('d1.field'),
        undefined,
        undefined,
        undefined,
        undefined,
        isCounter
      )

      expect(include.id).toBe('custom-helper custom-validation custom-counter')

      props.counter = undefined
      props.maxlength = undefined
      expect(include.id).toBe('custom-helper custom-validation')

      props.validationMessage = ''
      expect(include.id).toBe('custom-helper')

      props.helperMessage = ''
      expect(include.id).toBe('')
    })

    it('should include callback validationId in id and omit id when disabled without forceShowMessage', () => {
      const validationCallback = ref('Async error')
      const props = reactive<FieldMessagePropsInclude>({
        helperMessage: 'Helper',
        helperId: 'h-id',
        validationId: 'v-id',
        disabled: false
      })
      const include = new FieldMessageInclude(
        props,
        new DesignName('d1.field'),
        undefined,
        undefined,
        undefined,
        validationCallback
      )

      expect(include.validation).toBe('Async error')
      expect(include.id).toBe('h-id v-id')

      props.disabled = true
      expect(include.id).toBe('')

      props.forceShowMessage = true
      expect(include.id).toBe('h-id v-id')
    })

    it('should build binds with counter intermediary and preserve fieldMessageAttrs', () => {
      const isCounter = ref(true)
      const props = reactive<FieldMessagePropsInclude>({
        helperMessage: 'Hint',
        helperId: 'h-1',
        validationId: 'v-1',
        counterId: 'c-1',
        forceShowMessage: true,
        hasHtmlCode: true,
        counterShow: true,
        counter: 0,
        maxlength: 10,
        counterTemplate: '[c]/[m]',
        fieldMessageAttrs: {
          'data-test': 'msg',
          'validationMessage': 'From attrs'
        }
      })

      const include = new FieldMessageInclude(
        props,
        new DesignName('d1.field'),
        undefined,
        undefined,
        undefined,
        undefined,
        isCounter
      )

      expect(include.binds.value).toEqual({
        'ref': expect.anything(),
        'class': 'd1-field__fieldMessage',
        'data-test': 'msg',
        'forceShow': true,
        'hasHtmlCode': true,
        'helperMessage': 'Hint',
        'validationMessage': 'From attrs',
        'helperId': 'h-1',
        'validationId': 'v-1',
        'counterId': 'c-1',
        'counter': 0,
        'counterShow': true,
        'counterTemplate': '[c]/[m]',
        'maxlength': 10
      })
    })
  })

  describe('Fallback IDs and component rendering', () => {
    it('should fall back to fieldMessageAttrs IDs and default IDs when direct props are omitted', () => {
      const includeWithAttrs = new FieldMessageInclude(
        {
          helperMessage: 'Hint',
          fieldMessageAttrs: {
            helperId: 'attrs-helper-id',
            validationId: 'attrs-validation-id',
            counterId: 'attrs-counter-id'
          }
        },
        new DesignName('d1.field')
      )

      expect(includeWithAttrs.helperId).toBe('attrs-helper-id')
      expect(includeWithAttrs.validationId).toBe('attrs-validation-id')
      expect(includeWithAttrs.counterId).toBe('attrs-counter-id')
      expect(includeWithAttrs.id).toBe('attrs-helper-id')

      const includeDefaults = new FieldMessageInclude({}, new DesignName('d1.field'))
      expect(includeDefaults.helperId).toBe(includeDefaults.helperIdDefault)
      expect(includeDefaults.validationId).toBe(includeDefaults.validationIdDefault)
      expect(includeDefaults.counterId).toBe(includeDefaults.counterIdDefault)
    })

    it('should render registered FieldMessage component reactively', async () => {
      const props = reactive<FieldMessagePropsInclude>({
        helperMessage: 'Initial hint'
      })

      const MockFieldMessage = defineComponent({
        props: {
          helperMessage: String,
          validationMessage: String
        },
        setup(componentProps) {
          return () => h(
            'div',
            { class: 'mock-field-message' },
            componentProps.validationMessage || componentProps.helperMessage
          )
        }
      })

      const include = new FieldMessageInclude(
        props,
        new DesignName('d1.field'),
        new DesignComponents({ fieldMessage: MockFieldMessage })
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

      expect(container.querySelector('.mock-field-message')?.textContent).toBe('Initial hint')

      props.validationMessage = 'Error occurred'
      await nextTick()

      expect(container.querySelector('.mock-field-message')?.textContent).toBe('Error occurred')
    })
  })
})
