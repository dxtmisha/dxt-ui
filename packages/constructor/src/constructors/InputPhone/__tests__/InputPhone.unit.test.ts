// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, provide, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../../Form/basicTypes'
import { InputPhone, type InputPhoneConstructors } from '../InputPhone'
import type { InputPhoneProps } from '../props'
import type { InputPhoneEmits } from '../types'

/**
 * Inspectable subclass exposing protected DesignLogicAbstract internals for testing.
 *
 * Подкласс для проверки защищённых членов DesignLogicAbstract в тестах.
 */
class InspectableInputPhone extends InputPhone {
  /**
   * Simulates component mount lifecycle.
   *
   * Симулирует жизненный цикл монтирования компонента.
   */
  triggerMounted(): void {
    this.isMounted.value = true
    this.callLifecycle('onMounted')
    this.initConditions()
  }

  /**
   * Simulates component unmount lifecycle.
   *
   * Симулирует жизненный цикл размонтирования компонента.
   */
  triggerUnmounted(): void {
    this.isMounted.value = false
    this.callLifecycle('onUnmounted')
  }
}

/**
 * Creates an InspectableInputPhone instance inside a Vue effectScope.
 *
 * Создаёт экземпляр InspectableInputPhone внутри effectScope Vue.
 */
function createInputPhone(
  properties: InputPhoneProps = {},
  emits?: (...args: unknown[]) => void,
  constructors?: Partial<InputPhoneConstructors>
) {
  const scope = effectScope()
  const props = reactive<InputPhoneProps>({ ...properties })
  const element = ref<HTMLElement | undefined>()
  const naming = new DesignName('d1.inputPhone')

  let instance!: InspectableInputPhone

  scope.run(() => {
    instance = new InspectableInputPhone(
      props,
      element,
      naming,
      undefined,
      undefined,
      emits as ((type: keyof InputPhoneEmits, ...args: unknown[]) => void) | undefined,
      constructors
    )
  })

  return {
    instance,
    props,
    element,
    stop: () => scope.stop()
  }
}

describe('InputPhone (unit)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should instantiate only setup-required dependencies initially and keep lazy helpers unallocated', () => {
      const { instance, stop } = createInputPhone({ countryDefault: 'US' })
      cleanups.push(stop)

      expect(instance.hasInstance('country')).toBe(true)
      expect(instance.hasInstance('countryList')).toBe(true)
      expect(instance.hasInstance('data')).toBe(true)
      expect(instance.hasInstance('event')).toBe(true)
      expect(instance.hasInstance('validation')).toBe(true)

      expect(instance.hasInstance('attributes')).toBe(false)
      expect(instance.hasInstance('autofill')).toBe(false)
      expect(instance.hasInstance('change')).toBe(false)
      expect(instance.hasInstance('code')).toBe(false)
      expect(instance.hasInstance('dialCode')).toBe(false)
      expect(instance.hasInstance('elementItem')).toBe(false)
      expect(instance.hasInstance('field')).toBe(false)
      expect(instance.hasInstance('form')).toBe(false)
      expect(instance.hasInstance('format')).toBe(false)
      expect(instance.hasInstance('mask')).toBe(false)
      expect(instance.hasInstance('paste')).toBe(false)
      expect(instance.hasInstance('phoneMask')).toBe(false)
      expect(instance.hasInstance('value')).toBe(false)
    })

    it('should respect dialCode canCreate guard when countryBlock is true', () => {
      const { instance, props, stop } = createInputPhone({ countryBlock: true })
      cleanups.push(stop)

      const skippedResult = instance.callInstance('dialCode', item => item.binds.value, 'fallback')
      expect(skippedResult).toBe('fallback')
      expect(instance.hasInstance('dialCode')).toBe(false)

      props.countryBlock = false
      const createdResult = instance.callInstance('dialCode', item => item.binds.value)
      expect(createdResult).toBeDefined()
      expect(instance.hasInstance('dialCode')).toBe(true)
    })

    it('should lazily instantiate phoneMask and dialCode via i() with reactive country value', () => {
      const { instance, stop } = createInputPhone({
        countryDefault: 'US',
        value: '79001234567'
      })
      cleanups.push(stop)

      const dialCodeBinds = instance.i('dialCode').binds.value
      expect(dialCodeBinds.value).toBe('RU')
      expect(instance.hasInstance('dialCode')).toBe(true)
      expect(instance.hasInstance('phoneMask')).toBe(false)

      const phoneMask = instance.i('phoneMask')
      expect(phoneMask.maskProps.value.value).toBe('79001234567')
      expect(instance.hasInstance('phoneMask')).toBe(true)
    })
  })

  describe('Form registration during setup', () => {
    it('should register in Form context synchronously during setup when name is provided', async () => {
      const register = vi.fn()
      const updateData = vi.fn()
      const getValue = vi.fn()

      const Child = defineComponent({
        setup() {
          const props = reactive<InputPhoneProps>({ name: 'phone', countryDefault: 'US' })
          const element = ref<HTMLElement | undefined>()
          const naming = new DesignName('d1.inputPhone')
          const inputPhone = new InspectableInputPhone(props, element, naming)

          expect(inputPhone.hasInstance('form')).toBe(true)
          return () => h('div')
        }
      })

      const Parent = defineComponent({
        setup() {
          provide<FormElementRegistration>(FORM_NAME_ELEMENT, {
            register,
            updateData,
            getValue
          })
          return () => h(Child)
        }
      })

      const container = document.createElement('div')
      const app = createApp(Parent)
      app.mount(container)
      cleanups.push(() => app.unmount())
      await nextTick()

      expect(register).toHaveBeenCalledTimes(1)
      expect(register.mock.calls[0]?.[0]).toMatchObject({
        name: 'phone'
      })
    })
  })

  describe('Constructor overrides and lifecycle delegation', () => {
    it('should support constructor overrides via constructors parameter', () => {
      class CustomChange {
        readonly custom = true
      }

      const { instance, stop } = createInputPhone(
        {},
        undefined,
        {
          change: CustomChange as unknown as InputPhoneConstructors['change']
        }
      )
      cleanups.push(stop)

      expect(instance.i('change')).toBeInstanceOf(CustomChange)
    })

    it('should call onMounted and onUnmounted on lifecycle subordinates', () => {
      const { instance, stop } = createInputPhone({ countryDefault: 'US' })
      cleanups.push(stop)

      const country = instance.i('country')
      const data = instance.i('data')
      const countryMountedSpy = vi.spyOn(country, 'onMounted')
      const countryUnmountedSpy = vi.spyOn(country, 'onUnmounted')
      const onMountedSpy = vi.spyOn(data, 'onMounted')
      const onUnmountedSpy = vi.spyOn(data, 'onUnmounted')

      instance.triggerMounted()
      expect(countryMountedSpy).toHaveBeenCalledTimes(1)
      expect(onMountedSpy).toHaveBeenCalledTimes(1)

      instance.triggerUnmounted()
      expect(countryUnmountedSpy).toHaveBeenCalledTimes(1)
      expect(onUnmountedSpy).toHaveBeenCalledTimes(1)
    })

    it('should focus input element when dialCode window closes', async () => {
      const { instance, element, stop } = createInputPhone({ countryDefault: 'RU' })
      cleanups.push(stop)

      const input = document.createElement('input')
      const button = document.createElement('button')
      document.body.append(button, input)
      button.focus()

      element.value = { elementHtml: input } as unknown as HTMLElement

      const dialCodeBinds = instance.i('dialCode').binds.value
      ;(dialCodeBinds as { onWindow?: (options: unknown) => void }).onWindow?.({
        id: 'window-1',
        element: document.createElement('div'),
        control: button,
        open: false
      })

      await nextTick()
      expect(document.activeElement).toBe(input)
    })
  })
})
