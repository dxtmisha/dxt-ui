// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  inject,
  nextTick,
  onScopeDispose,
  reactive,
  ref,
  type VNode
} from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { FieldFormInclude } from '../../../classes/Field/FieldFormInclude'
import type { FieldValidationInclude } from '../../../classes/Field/FieldValidationInclude'
import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../basicTypes'
import { FormDesign } from '../FormDesign'
import type { FormPropsBasic } from '../props'
import type { FormClasses, FormComponents, FormEmits, FormExpose, FormSlots } from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

/**
 * Mock child field component integrating with Form via FORM_NAME_ELEMENT provide/inject.
 *
 * Мок дочернего поля, интегрирующегося с Form через provide/inject FORM_NAME_ELEMENT.
 */
const MockField = defineComponent({
  name: 'MockField',
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    initialValue: { type: [String, Number, Boolean], default: undefined },
    required: { type: Boolean, default: false }
  },
  setup(fieldProps) {
    const value = ref<unknown>(fieldProps.initialValue)
    const context = inject<FormElementRegistration | undefined>(FORM_NAME_ELEMENT, undefined)

    const isFieldValid = (): boolean => {
      if (fieldProps.required && (value.value === undefined || value.value === '')) {
        return false
      }
      return true
    }

    context?.register({
      id: fieldProps.id,
      name: fieldProps.name,
      value,
      getValue: () => value.value,
      setValue: (nextValue: unknown) => {
        value.value = nextValue
      },
      clear: () => {
        value.value = undefined
      },
      isChanged: () => value.value !== fieldProps.initialValue,
      checkValidity: isFieldValid,
      getValidationMessage: () => (isFieldValid() ? '' : `${fieldProps.name} is required`)
    })

    onScopeDispose(() => {
      context?.unregister?.(fieldProps.id)
    })

    const onInput = (event: Event) => {
      const target = event.target as HTMLInputElement
      value.value = target.value
      context?.updateData(
        fieldProps.id,
        {
          value: target.value,
          status: isFieldValid(),
          validationMessage: isFieldValid() ? '' : `${fieldProps.name} is required`
        },
        event as InputEvent
      )
    }

    return () => h('input', {
      'data-field-id': fieldProps.id,
      'name': fieldProps.name,
      'value': value.value ?? '',
      onInput
    })
  }
})

/**
 * Mounts full Form component integration setup in jsdom.
 *
 * Монтирует полную интеграцию компонента Form в jsdom.
 */
async function mountForm(
  initialProps: FormPropsBasic = {},
  customSlots: FormSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  mountedCleanups.push(() => container.remove())

  const props = reactive<FormPropsBasic>({ ...initialProps })
  const emitted: Array<{ event: keyof FormEmits, args: unknown[] }> = []
  let exposed!: FormExpose

  const Host = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: { 'd1-form': true }
      }))

      const design = new FormDesign<
        FormComponents,
        FormExpose,
        FormClasses,
        FormPropsBasic
      >('d1.form', props, {
        classes: classesToken,
        emits: ((event: keyof FormEmits, ...args: unknown[]) => {
          emitted.push({ event, args })
        }) as never
      })

      exposed = design.expose()
      return design.render()
    }
  })

  const app = createApp({
    render() {
      return h(Host, extraAttrs, customSlots as Record<string, () => VNode[]>)
    }
  })

  app.mount(container)
  mountedCleanups.push(() => app.unmount())
  await nextTick()

  return {
    container,
    props,
    emitted,
    exposed
  }
}

describe('Form (integration)', () => {
  describe('Custom child fields via provide/inject, validation, and model sync', () => {
    it('should register child fields, apply initial value, update via input, validate, and reset', async () => {
      const { container, exposed, emitted } = await mountForm(
        {
          value: { username: 'john', email: 'john@example.com' }
        },
        {
          header: () => [h('h2', 'Profile')],
          default: () => [
            h(MockField, { id: 'f-user', name: 'username', required: true }),
            h(MockField, { id: 'f-email', name: 'email', required: true })
          ],
          footer: () => [h('button', { type: 'submit' }, 'Save')]
        }
      )

      const formElement = container.querySelector('form.d1-form') as HTMLFormElement
      expect(formElement).not.toBeNull()
      expect(exposed.getValues()).toEqual({ username: 'john', email: 'john@example.com' })
      expect(exposed.checkValidity()).toBe(true)

      const usernameInput = container.querySelector('input[data-field-id="f-user"]') as HTMLInputElement
      usernameInput.value = ''
      usernameInput.dispatchEvent(new InputEvent('input', { bubbles: true }))
      await nextTick()

      expect(exposed.checkValidity()).toBe(false)
      expect(emitted.some(item => item.event === 'inputValues')).toBe(true)
      expect(emitted.some(item => item.event === 'update:modelValue')).toBe(true)

      // Programmatic partial setValues preserves untouched fields
      exposed.setValues({ username: 'alice' })
      await nextTick()

      expect(exposed.getValues()).toEqual({ username: 'alice', email: 'john@example.com' })
      expect(exposed.checkValidity()).toBe(true)

      const lastModelUpdate = [...emitted].reverse().find(item => item.event === 'update:modelValue')
      expect(lastModelUpdate?.args[0]).toEqual({ username: 'alice', email: 'john@example.com' })

      // Native reset event restores initial cached values and emits reset/input/change
      const resetEvent = new Event('reset', { cancelable: true })
      formElement.dispatchEvent(resetEvent)
      await nextTick()

      expect(resetEvent.defaultPrevented).toBe(true)
      expect(exposed.getValues()).toEqual({ username: 'john', email: 'john@example.com' })
      expect(emitted.some(item => item.event === 'reset')).toBe(true)
      expect(emitted.some(item => item.event === 'changeValues')).toBe(true)
    })

    it('should synchronize reactive modelValue updates to all registered fields including clearing via empty object', async () => {
      const { props, exposed } = await mountForm(
        {
          modelValue: { username: 'initial', bio: 'hello' }
        },
        {
          default: () => [
            h(MockField, { id: 'f-1', name: 'username' }),
            h(MockField, { id: 'f-2', name: 'bio' })
          ]
        }
      )

      expect(exposed.getValues()).toEqual({ username: 'initial', bio: 'hello' })

      props.modelValue = { username: 'updated' }
      await nextTick()
      expect(exposed.getValues()).toEqual({ username: 'updated' })

      props.modelValue = {}
      await nextTick()
      expect(exposed.getValues()).toEqual({})
    })

    it('should automatically unregister dynamically unmounted (v-if) FieldFormInclude child fields from Form', async () => {
      const showOptional = ref(true)

      const FieldFormChild = defineComponent({
        props: {
          name: { type: String, required: true },
          initialValue: { type: String, default: undefined },
          valid: { type: Boolean, default: true }
        },
        setup(childProps) {
          const itemValue = ref<unknown>(childProps.initialValue)
          const valueInclude = {
            expose: () => ({
              value: itemValue,
              getValue: () => itemValue.value,
              setValue: (nextValue: unknown) => {
                itemValue.value = nextValue
              },
              clear: () => {
                itemValue.value = undefined
              },
              isChanged: () => false
            })
          } as unknown as FieldValueInclude
          const validationInclude = {
            item: ref({ value: childProps.initialValue, status: childProps.valid }),
            expose: () => ({
              checkValidity: () => childProps.valid,
              getValidationMessage: () => (childProps.valid ? '' : 'invalid')
            })
          } as unknown as FieldValidationInclude

          new FieldFormInclude(
            { name: childProps.name },
            () => valueInclude,
            () => validationInclude
          )

          return () => h('div', { 'data-field-name': childProps.name })
        }
      })

      const { exposed } = await mountForm(
        {},
        {
          default: () => [
            h(FieldFormChild, { name: 'username', initialValue: 'alice', valid: true }),
            ...(showOptional.value
              ? [h(FieldFormChild, { name: 'promoCode', initialValue: 'SAVE10', valid: false })]
              : [])
          ]
        }
      )

      expect(exposed.getValues()).toEqual({ username: 'alice', promoCode: 'SAVE10' })
      expect(exposed.checkValidity()).toBe(false)

      showOptional.value = false
      await nextTick()

      expect(exposed.getValues()).toEqual({ username: 'alice' })
      expect(exposed.checkValidity()).toBe(true)
    })
  })

  describe('Native HTML form elements mode (native = true)', () => {
    it('should read, validate, update, reset, and submit native HTML form controls end-to-end', async () => {
      const { container, exposed, emitted } = await mountForm(
        {
          native: true,
          action: '/api/native',
          method: 'post',
          value: { title: 'Initial Title', subscribe: true }
        },
        {
          default: () => [
            h('input', { name: 'title', required: true }),
            h('input', { name: 'subscribe', type: 'checkbox' }),
            h('select', { name: 'role' }, [
              h('option', { value: 'dev' }, 'Developer'),
              h('option', { value: 'pm' }, 'Manager')
            ])
          ]
        }
      )

      const formElement = container.querySelector('form.d1-form') as HTMLFormElement
      const titleInput = formElement.querySelector('input[name="title"]') as HTMLInputElement
      const checkbox = formElement.querySelector('input[name="subscribe"]') as HTMLInputElement

      expect(titleInput.value).toBe('Initial Title')
      expect(checkbox.checked).toBe(true)
      expect(exposed.checkValidity()).toBe(true)
      expect(exposed.getValues()).toEqual({
        title: 'Initial Title',
        subscribe: true,
        role: 'dev'
      })

      titleInput.value = ''
      titleInput.dispatchEvent(new InputEvent('input', { bubbles: true }))
      await nextTick()

      expect(exposed.checkValidity()).toBe(false)
      expect(emitted.some(item => item.event === 'inputValues')).toBe(true)

      exposed.set('title', 'Recovered')
      expect(exposed.checkValidity()).toBe(true)
      expect(exposed.getValues().title).toBe('Recovered')

      exposed.setValuesAll({ title: 'Only Title', role: 'pm' })
      expect(checkbox.checked).toBe(false)
      expect(exposed.getValues()).toEqual({
        title: 'Only Title',
        subscribe: false,
        role: 'pm'
      })

      exposed.reset()
      expect(titleInput.value).toBe('Initial Title')
      expect(checkbox.checked).toBe(true)

      const submitHandler = vi.fn((event: Event) => event.preventDefault())
      formElement.addEventListener('submit', submitHandler)
      exposed.submit()
      expect(submitHandler).toHaveBeenCalledTimes(1)
      expect(emitted.some(item => item.event === 'submit')).toBe(true)
    })
  })
})
