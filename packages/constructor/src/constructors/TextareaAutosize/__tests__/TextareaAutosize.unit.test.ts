// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, reactive, ref } from 'vue'
import { DesignLogicAbstract, DesignName } from '@dxtmisha/functional'

import { TextareaAutosize, type TextareaAutosizeConstructors } from '../TextareaAutosize'
import { TextareaAutosizeResize } from '../TextareaAutosizeResize'
import { TextareaAutosizeValue } from '../TextareaAutosizeValue'
import type { TextareaAutosizeProps } from '../props'

/**
 * Exposes internal DesignLogicAbstract instances map for lazy-loading assertions.
 *
 * Предоставляет внутреннюю карту экземпляров DesignLogicAbstract для проверки ленивой инициализации.
 */
class InspectableTextareaAutosize extends TextareaAutosize {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof TextareaAutosizeConstructors, unknown>> {
    return this.instances
  }
}

describe('TextareaAutosize (Unit)', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>
  let errorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    expect(warnSpy).not.toHaveBeenCalled()
    expect(errorSpy).not.toHaveBeenCalled()
    vi.restoreAllMocks()
  })

  describe('Architecture and lazy instantiation', () => {
    it('should extend DesignLogicAbstract and keep all dependencies lazy upon construction', () => {
      const scope = effectScope()
      const element = ref<HTMLTextAreaElement | undefined>(document.createElement('textarea'))
      const props = reactive<TextareaAutosizeProps>({ autosize: true, value: 'initial' })

      const instance = scope.run(() => new InspectableTextareaAutosize(
        props,
        element,
        new DesignName('d1.textareaAutosize')
      ))!

      expect(instance).toBeInstanceOf(DesignLogicAbstract)
      expect(instance.hasInstance('value')).toBe(false)
      expect(instance.hasInstance('resize')).toBe(false)
      expect(Object.keys(instance.instantiatedItems)).toHaveLength(0)

      scope.stop()
    })

    it('should lazily instantiate value via binds and getValue without instantiating resize', () => {
      const scope = effectScope()
      const element = ref<HTMLTextAreaElement | undefined>(document.createElement('textarea'))
      const props = reactive<TextareaAutosizeProps>({ autosize: true, value: 'hello' })

      const instance = scope.run(() => new InspectableTextareaAutosize(
        props,
        element,
        new DesignName('d1.textareaAutosize')
      ))!

      const binds = instance.binds
      expect(binds.value).toBe('hello')
      expect(binds.onFocus).toBe(instance.onFocus)
      expect(binds.onInput).toBe(instance.onInput)
      expect(instance.getValue()).toBe('hello')
      expect(instance.hasInstance('value')).toBe(true)
      expect(instance.hasInstance('resize')).toBe(false)

      scope.stop()
    })
  })

  describe('Event delegation and canCreate gating', () => {
    it('should skip resize instantiation on focus and input when autosize is false while still updating value and emitting input', () => {
      const scope = effectScope()
      const element = ref<HTMLTextAreaElement | undefined>(document.createElement('textarea'))
      const props = reactive<TextareaAutosizeProps>({ autosize: false, value: 'old' })
      const emits = vi.fn()

      const instance = scope.run(() => new InspectableTextareaAutosize(
        props,
        element,
        new DesignName('d1.textareaAutosize'),
        undefined,
        undefined,
        emits
      ))!

      instance.onFocus()
      expect(instance.hasInstance('resize')).toBe(false)

      const inputEvent = { target: { value: 'new text' } } as unknown as InputEvent
      instance.onInput(inputEvent)

      expect(instance.hasInstance('resize')).toBe(false)
      expect(instance.hasInstance('value')).toBe(true)
      expect(instance.getValue()).toBe('new text')
      expect(emits).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('input', inputEvent)

      scope.stop()
    })

    it('should instantiate and delegate to resize on focus and input when autosize is true', () => {
      const scope = effectScope()
      const element = ref<HTMLTextAreaElement | undefined>(document.createElement('textarea'))
      const props = reactive<TextareaAutosizeProps>({ autosize: true, value: 'start' })
      const emits = vi.fn()

      const instance = scope.run(() => new InspectableTextareaAutosize(
        props,
        element,
        new DesignName('d1.textareaAutosize'),
        undefined,
        undefined,
        emits
      ))!

      instance.onFocus()
      expect(instance.hasInstance('resize')).toBe(true)

      const resizeOnSpy = vi.spyOn(instance.i('resize'), 'on')
      const inputEvent = { target: { value: 'typed' } } as unknown as InputEvent

      instance.onInput(inputEvent)

      expect(instance.getValue()).toBe('typed')
      expect(emits).toHaveBeenCalledWith('input', inputEvent)
      expect(resizeOnSpy).toHaveBeenCalledTimes(1)

      scope.stop()
    })
  })

  describe('Conditional lifecycle activation (conditions)', () => {
    it('should activate resize automatically when autosize toggles from false to true after mount', async () => {
      const props = reactive<TextareaAutosizeProps>({ autosize: false, value: 'text' })
      const host = document.createElement('div')
      document.body.appendChild(host)

      let instance!: InspectableTextareaAutosize
      const component = defineComponent({
        setup() {
          const element = ref<HTMLTextAreaElement | undefined>()
          instance = new InspectableTextareaAutosize(
            props,
            element,
            new DesignName('d1.textareaAutosize')
          )

          return () => h('textarea', { ref: element })
        }
      })

      const app = createApp(component)

      try {
        app.mount(host)
        expect(instance.hasInstance('resize')).toBe(false)

        props.autosize = true
        await nextTick()

        expect(instance.hasInstance('resize')).toBe(true)
        expect(instance.i('resize')).toBeInstanceOf(TextareaAutosizeResize)
      } finally {
        app.unmount()
        host.remove()
      }
    })
  })

  describe('Dependency Injection overrides', () => {
    it('should support overriding resize and value constructors via DI', () => {
      const onResizeCalls = vi.fn()
      const onValueCalls = vi.fn()

      /** Custom resize subclass for DI testing / Пользовательский подкласс resize для тестирования DI */
      class CustomResize extends TextareaAutosizeResize {
        override readonly on = (): void => {
          onResizeCalls()
        }
      }

      /** Custom value subclass for DI testing / Пользовательский подкласс value для тестирования DI */
      class CustomValue extends TextareaAutosizeValue {
        override on(event: InputEvent): void {
          onValueCalls(event)
          super.on(event)
        }
      }

      const scope = effectScope()
      const element = ref<HTMLTextAreaElement | undefined>(document.createElement('textarea'))
      const props = reactive<TextareaAutosizeProps>({ autosize: true, value: 'di' })

      const instance = scope.run(() => new InspectableTextareaAutosize(
        props,
        element,
        new DesignName('d1.textareaAutosize'),
        undefined,
        undefined,
        undefined,
        {
          resize: CustomResize,
          value: CustomValue
        }
      ))!

      const inputEvent = { target: { value: 'di-updated' } } as unknown as InputEvent
      instance.onInput(inputEvent)

      expect(instance.i('resize')).toBeInstanceOf(CustomResize)
      expect(instance.i('value')).toBeInstanceOf(CustomValue)
      expect(onValueCalls).toHaveBeenCalledWith(inputEvent)
      expect(onResizeCalls).toHaveBeenCalledTimes(1)
      expect(instance.getValue()).toBe('di-updated')

      scope.stop()
    })
  })
})
