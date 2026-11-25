// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Form } from '../Form'
import { FormElements } from '../FormElements'
import type { FormProps } from '../props'

const cleanups: Array<() => void> = []

describe('Form (unit)', () => {
  const naming = new DesignName('d1.form')

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(unmount => unmount())
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation and DesignLogicAbstract lifecycle', () => {
    it('should keep all 7 subordinate helpers unallocated in an isolated scope until accessed', () => {
      const scope = effectScope()
      const element = ref<HTMLFormElement>()
      const props = reactive<FormProps>({})

      scope.run(() => {
        const form = new Form(props, element, naming)

        expect(form.hasInstance('elements')).toBe(false)
        expect(form.hasInstance('error')).toBe(false)
        expect(form.hasInstance('event')).toBe(false)
        expect(form.hasInstance('model')).toBe(false)
        expect(form.hasInstance('native')).toBe(false)
        expect(form.hasInstance('provide')).toBe(false)
        expect(form.hasInstance('value')).toBe(false)

        // Reading binds instantiates only event, keeping model/value/elements/native/error unallocated
        const binds = form.binds
        expect(binds.novalidate).toBe(true)
        expect(form.hasInstance('event')).toBe(true)
        expect(form.hasInstance('elements')).toBe(false)
        expect(form.hasInstance('error')).toBe(false)
        expect(form.hasInstance('model')).toBe(false)
        expect(form.hasInstance('native')).toBe(false)
        expect(form.hasInstance('value')).toBe(false)
      })

      scope.stop()
    })

    it('should eagerly initialize provide during component setup while keeping value lazy until condition activates', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      const props = reactive<FormProps>({})
      const element = ref<HTMLFormElement>()
      let form!: Form

      const Host = defineComponent({
        setup() {
          form = new Form(props, element, naming)
          return () => h('form', { ref: element })
        }
      })

      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())
      await nextTick()

      expect(form.hasInstance('provide')).toBe(true)
      expect(form.hasInstance('elements')).toBe(false)
      expect(form.hasInstance('value')).toBe(false)
      expect(form.hasInstance('error')).toBe(false)

      // Activating FormValue.is(props) triggers conditions watcher and instantiates value
      props.value = { username: 'alice' }
      await nextTick()

      expect(form.hasInstance('value')).toBe(true)
    })

    it('should support DI constructor overrides via constructors parameter', () => {
      class CustomFormElements extends FormElements {
        readonly isCustom = true
      }

      const scope = effectScope()
      const element = ref<HTMLFormElement>()
      const props = reactive<FormProps>({})

      scope.run(() => {
        const form = new Form(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          { elements: CustomFormElements }
        )

        const instance = form.i('elements') as CustomFormElements
        expect(instance).toBeInstanceOf(CustomFormElements)
        expect(instance.isCustom).toBe(true)
      })

      scope.stop()
    })
  })

  describe('Bindings and domain actions', () => {
    it('should expose standard HTML form attributes and event handlers in binds', () => {
      const scope = effectScope()
      const element = ref<HTMLFormElement>()
      const props = reactive<FormProps>({
        action: '/api/save',
        autocomplete: 'off',
        enctype: 'multipart/form-data',
        method: 'post',
        target: '_self'
      })

      scope.run(() => {
        const form = new Form(props, element, naming)
        const binds = form.binds

        expect(binds.action).toBe('/api/save')
        expect(binds.autocomplete).toBe('off')
        expect(binds.enctype).toBe('multipart/form-data')
        expect(binds.method).toBe('post')
        expect(binds.novalidate).toBe(true)
        expect(binds.target).toBe('_self')
        expect(typeof binds.onChange).toBe('function')
        expect(typeof binds.onInput).toBe('function')
        expect(typeof binds.onReset).toBe('function')
        expect(typeof binds.onSubmit).toBe('function')
      })

      scope.stop()
    })

    it('should preserve omitted fields in model emit on setValues and replace all on setValuesAll', () => {
      const scope = effectScope()
      const element = ref<HTMLFormElement>()
      const props = reactive<FormProps>({ native: false })
      const emits = vi.fn()

      scope.run(() => {
        const form = new Form(props, element, naming, undefined, undefined, emits)
        const usernameRef = ref<unknown>('john')
        const emailRef = ref<unknown>('john@example.com')

        form.i('elements').register({
          name: 'username',
          value: usernameRef,
          getValue: () => usernameRef.value,
          setValue: (nextValue: unknown) => {
            usernameRef.value = nextValue
          },
          clear: () => {
            usernameRef.value = undefined
          },
          isChanged: () => false,
          checkValidity: () => true,
          getValidationMessage: () => ''
        })
        form.i('elements').register({
          name: 'email',
          value: emailRef,
          getValue: () => emailRef.value,
          setValue: (nextValue: unknown) => {
            emailRef.value = nextValue
          },
          clear: () => {
            emailRef.value = undefined
          },
          isChanged: () => false,
          checkValidity: () => true,
          getValidationMessage: () => ''
        })

        form.setValues({ username: 'alice' })
        expect(form.getValues()).toEqual({ username: 'alice', email: 'john@example.com' })
        expect(emits).toHaveBeenCalledWith('update:value', { username: 'alice', email: 'john@example.com' })
        expect(emits).toHaveBeenCalledWith('update:modelValue', { username: 'alice', email: 'john@example.com' })

        form.set('username', 'bob')
        expect(form.getValues()).toEqual({ username: 'bob', email: 'john@example.com' })

        form.setValuesAll({ username: 'charlie' })
        expect(form.getValues()).toEqual({ username: 'charlie' })
        expect(emits).toHaveBeenCalledWith('update:modelValue', { username: 'charlie' })

        expect(form.checkValidity()).toBe(true)

        form.reset()
        expect(form.getValues()).toEqual({})
      })

      scope.stop()
    })

    it('should call requestSubmit when available, fall back to submit, and no-op when unmounted', () => {
      const scope = effectScope()
      const element = ref<HTMLFormElement>()
      const props = reactive<FormProps>({})

      scope.run(() => {
        const form = new Form(props, element, naming)

        expect(() => form.submit()).not.toThrow()

        const formWithRequestSubmit = document.createElement('form')
        const requestSubmitSpy = vi.fn()
        const submitSpy = vi.fn()
        formWithRequestSubmit.requestSubmit = requestSubmitSpy
        formWithRequestSubmit.submit = submitSpy

        element.value = formWithRequestSubmit
        form.submit()
        expect(requestSubmitSpy).toHaveBeenCalledTimes(1)
        expect(submitSpy).not.toHaveBeenCalled()

        const formWithoutRequestSubmit = document.createElement('form')
        const fallbackSubmitSpy = vi.fn()
        Object.defineProperty(formWithoutRequestSubmit, 'requestSubmit', {
          value: undefined,
          configurable: true
        })
        formWithoutRequestSubmit.submit = fallbackSubmitSpy

        element.value = formWithoutRequestSubmit
        form.submit()
        expect(fallbackSubmitSpy).toHaveBeenCalledTimes(1)
      })

      scope.stop()
    })
  })
})
