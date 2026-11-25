// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, reactive, ref, type App } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { InputCode } from '../InputCode'
import type { InputCodeProps } from '../props'

describe('InputCode (Unit)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  it('should lazily skip fieldLabel and fieldMessage when props are absent', () => {
    const elementRef = ref<HTMLDivElement | undefined>(document.createElement('div'))
    const props = reactive<InputCodeProps>({
      length: 4
    })

    const scope = effectScope()
    let instance!: InputCode

    scope.run(() => {
      instance = new InputCode(props, elementRef, new DesignName('d1.inputCode'))
    })

    expect(instance.hasInstance('fieldLabel')).toBe(false)
    expect(instance.hasInstance('fieldMessage')).toBe(false)
    expect(instance.aria).toEqual({
      role: 'group'
    })
    expect(instance.isValidation()).toBe(false)
    expect(instance.hasInstance('fieldLabel')).toBe(false)
    expect(instance.hasInstance('fieldMessage')).toBe(false)

    scope.stop()
  })

  it('should instantiate fieldLabel and fieldMessage when enabled and expose aria and validation state', () => {
    const elementRef = ref<HTMLDivElement | undefined>(document.createElement('div'))
    const props = reactive<InputCodeProps>({
      label: 'SMS Code',
      helperMessage: 'Enter 4 digits',
      validationMessage: 'Invalid code'
    })

    const scope = effectScope()
    let instance!: InputCode

    scope.run(() => {
      instance = new InputCode(props, elementRef, new DesignName('d1.inputCode'))
    })

    const aria = instance.aria
    expect(instance.hasInstance('fieldLabel')).toBe(true)
    expect(instance.hasInstance('fieldMessage')).toBe(true)
    expect(aria.role).toBe('group')
    expect(aria['aria-describedby']).toBeTruthy()
    expect(instance.isValidation()).toBe(true)

    scope.stop()
  })

  it('should evaluate isValidation from explicit validation prop without creating fieldMessage', () => {
    const props = reactive<InputCodeProps>({
      validation: true
    })

    const scope = effectScope()
    let instance!: InputCode

    scope.run(() => {
      instance = new InputCode(props, ref<HTMLDivElement | undefined>(), new DesignName('d1.inputCode'))
    })

    expect(instance.isValidation()).toBe(true)
    expect(instance.hasInstance('fieldMessage')).toBe(false)

    scope.stop()
  })

  it('should respect value over modelValue on update, deduplicate onInput emits, and delegate expose', () => {
    const updateSpy = vi.fn()
    const resetValueSpy = vi.fn()
    const focusSpy = vi.fn()
    let capturedOnInput: ((value: string) => void) | undefined

    class StubInputCodeItemInclude {
      update = updateSpy
      resetValue = resetValueSpy
      focus = focusSpy

      constructor(
        _props: unknown,
        _naming: unknown,
        _components: unknown,
        onInput?: (value: string) => void
      ) {
        capturedOnInput = onInput
      }
    }

    const emitSpy = vi.fn()
    const props = reactive<InputCodeProps>({
      value: '1234',
      modelValue: '9999'
    })

    const scope = effectScope()
    let instance!: InputCode

    scope.run(() => {
      instance = new InputCode(
        props,
        ref<HTMLDivElement | undefined>(),
        new DesignName('d1.inputCode'),
        undefined,
        undefined,
        emitSpy as never,
        {
          inputCodeItem: StubInputCodeItemInclude as never
        }
      )
    })

    instance.update()
    expect(instance.value.value).toBe('1234')
    expect(updateSpy).toHaveBeenCalledWith('1234')

    props.value = undefined
    instance.update()
    expect(instance.value.value).toBe('9999')

    props.modelValue = undefined
    instance.update()
    expect(instance.value.value).toBe('')

    capturedOnInput?.('5678')
    expect(instance.expose.getValue()).toBe('5678')
    expect(emitSpy).toHaveBeenCalledWith('update:value', '5678')
    expect(emitSpy).toHaveBeenCalledWith('update:modelValue', '5678')
    expect(emitSpy).toHaveBeenCalledWith('input', '5678')

    emitSpy.mockClear()
    capturedOnInput?.('5678')
    expect(emitSpy).not.toHaveBeenCalled()

    instance.expose.set(2468)
    expect(updateSpy).toHaveBeenLastCalledWith('2468')

    instance.expose.reset()
    expect(resetValueSpy).toHaveBeenCalledTimes(1)

    instance.expose.focus()
    expect(focusSpy).toHaveBeenCalledTimes(1)

    scope.stop()
  })

  it('should sync on mount, watch modelValue updates, and stop watcher on unmount', async () => {
    const modelValue = ref('12')
    let capturedInstance!: InputCode
    const updateCalls: string[] = []

    class SpyInputCodeItemInclude {
      update = (value: string) => {
        updateCalls.push(value)
      }
    }

    const Host = defineComponent({
      props: {
        modelValue: { type: String, default: '' }
      },
      setup(props) {
        const element = ref<HTMLDivElement | undefined>()
        capturedInstance = new InputCode(
          props as InputCodeProps,
          element,
          new DesignName('d1.inputCode'),
          undefined,
          undefined,
          undefined,
          {
            inputCodeItem: SpyInputCodeItemInclude as never
          }
        )

        return () => h('div', { ref: element })
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp({
      render: () => h(Host as never, { modelValue: modelValue.value })
    })

    app.mount(container)
    mountedApps.push({ app, container })
    await nextTick()

    expect(capturedInstance.value.value).toBe('12')
    expect(updateCalls).toEqual(['12'])

    modelValue.value = '34'
    await nextTick()
    expect(capturedInstance.value.value).toBe('34')
    expect(updateCalls).toEqual(['12', '34'])

    app.unmount()
    modelValue.value = '56'
    await nextTick()
    expect(capturedInstance.value.value).toBe('34')
  })
})
