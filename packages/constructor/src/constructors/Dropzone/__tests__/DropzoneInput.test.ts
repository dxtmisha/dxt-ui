// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { DropzoneEvents } from '../DropzoneEvents'
import { DropzoneFiles } from '../DropzoneFiles'
import { DropzoneInput } from '../DropzoneInput'
import type { DropzoneProps } from '../props'
import type { DropzoneEmits } from '../types'

describe('DropzoneInput', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Lazy dependency wiring and base bindings', () => {
    it('should not invoke dependency getters eagerly in constructor and should build file input binds', () => {
      const props = reactive<DropzoneProps>({
        accept: 'image/png,image/jpeg',
        multiple: true
      })
      const eventsInstance = new DropzoneEvents(props)
      const filesInstance = new DropzoneFiles()
      const eventsGetter = vi.fn(() => eventsInstance)
      const filesGetter = vi.fn(() => filesInstance)

      const input = new DropzoneInput(props, eventsGetter, filesGetter)

      expect(eventsGetter).not.toHaveBeenCalled()
      expect(filesGetter).not.toHaveBeenCalled()

      const binds = input.binds

      expect(eventsGetter).toHaveBeenCalledTimes(1)
      expect(filesGetter).not.toHaveBeenCalled()
      expect(binds.ref).toBe(input.element)
      expect(binds.key).toBe('input')
      expect(binds.type).toBe('file')
      expect(binds.accept).toBe('image/png,image/jpeg')
      expect(binds.multiple).toBe(true)
      expect(binds.disabled).toBeUndefined()
      expect(typeof binds.onDragenter).toBe('function')
      expect(typeof binds.onDragleave).toBe('function')
      expect(typeof binds.onDrop).toBe('function')
      expect(typeof binds.onFocus).toBe('function')
      expect(typeof binds.onBlur).toBe('function')
      expect(typeof binds.onClick).toBe('function')
      expect(typeof binds.onChange).toBe('function')
    })

    it('should mark input disabled when disabled or readonly prop is true', () => {
      const props = reactive<DropzoneProps>({ disabled: false, readonly: true })
      const eventsInstance = new DropzoneEvents(props)
      const filesInstance = new DropzoneFiles()
      const input = new DropzoneInput(props, () => eventsInstance, () => filesInstance)

      expect(input.binds.disabled).toBe(true)

      props.readonly = false
      props.disabled = true
      expect(input.binds.disabled).toBe(true)

      props.disabled = false
      expect(input.binds.disabled).toBeFalsy()
    })
  })

  describe('External inputAttrs merging via mergeProps', () => {
    it('should preserve external attributes, classes, styles, and compose event listeners without overwriting', () => {
      const externalChange = vi.fn()
      const externalFocus = vi.fn()
      const externalBlur = vi.fn()
      const externalClick = vi.fn()
      const externalDrop = vi.fn()
      const emits = vi.fn()

      const props = reactive<DropzoneProps>({
        inputAttrs: {
          'id': 'upload-field',
          'name': 'attachments',
          'class': 'custom-input',
          'style': { cursor: 'pointer' },
          'data-testid': 'file-input',
          'onChange': externalChange,
          'onFocus': externalFocus,
          'onBlur': externalBlur,
          'onClick': externalClick,
          'onDrop': externalDrop
        }
      })

      const eventsInstance = new DropzoneEvents(props)
      const filesInstance = new DropzoneFiles(undefined, emits as unknown as ConstrEmit<DropzoneEmits>)
      const setFilesSpy = vi.spyOn(filesInstance, 'set')
      const input = new DropzoneInput(
        props,
        () => eventsInstance,
        () => filesInstance,
        emits as unknown as ConstrEmit<DropzoneEmits>
      )

      const binds = input.binds

      expect(binds.id).toBe('upload-field')
      expect(binds.name).toBe('attachments')
      expect(binds.class).toBe('custom-input')
      expect(binds.style).toEqual({ cursor: 'pointer' })
      expect(binds['data-testid']).toBe('file-input')

      const invokeHandlers = (handler: unknown, ...args: unknown[]) => {
        if (Array.isArray(handler)) {
          handler.forEach(item => (item as (...params: unknown[]) => void)(...args))
        } else if (typeof handler === 'function') {
          ;(handler as (...params: unknown[]) => void)(...args)
        }
      }

      const focusEvent = new FocusEvent('focus')
      invokeHandlers(binds.onFocus, focusEvent)
      expect(externalFocus).toHaveBeenCalledWith(focusEvent)
      expect(emits).toHaveBeenCalledWith('focus', focusEvent)

      const blurEvent = new FocusEvent('blur')
      invokeHandlers(binds.onBlur, blurEvent)
      expect(externalBlur).toHaveBeenCalledWith(blurEvent)
      expect(emits).toHaveBeenCalledWith('blur', blurEvent)

      invokeHandlers(binds.onClick)
      expect(externalClick).toHaveBeenCalledTimes(1)

      ;(eventsInstance.binds.onDragenter as () => void)()
      expect(eventsInstance.enter.value).toBe(true)
      invokeHandlers(binds.onDrop)
      expect(externalDrop).toHaveBeenCalledTimes(1)
      expect(eventsInstance.enter.value).toBe(false)

      const changeEvent = new Event('change')
      invokeHandlers(binds.onChange, changeEvent)
      expect(externalChange).toHaveBeenCalledWith(changeEvent)
      expect(setFilesSpy).toHaveBeenCalledWith(undefined, changeEvent)
    })
  })

  describe('DOM interactions: open, clear, focus, blur, and change', () => {
    it('should click input element on open() when enabled and block when disabled or readonly', () => {
      const props = reactive<DropzoneProps>({})
      const input = new DropzoneInput(
        props,
        () => new DropzoneEvents(props),
        () => new DropzoneFiles()
      )

      const domInput = document.createElement('input')
      domInput.type = 'file'
      const clickSpy = vi.spyOn(domInput, 'click')
      input.element.value = domInput

      input.open()
      expect(clickSpy).toHaveBeenCalledTimes(1)

      props.disabled = true
      input.open()
      expect(clickSpy).toHaveBeenCalledTimes(1)

      props.disabled = false
      props.readonly = true
      input.open()
      expect(clickSpy).toHaveBeenCalledTimes(1)
    })

    it('should safely handle open() and clear() when element ref is undefined', () => {
      const props = reactive<DropzoneProps>({})
      const input = new DropzoneInput(
        props,
        () => new DropzoneEvents(props),
        () => new DropzoneFiles()
      )

      expect(() => input.open()).not.toThrow()
      expect(() => input.clear()).not.toThrow()
    })

    it('should clear input element value and files on clear() and on focus', () => {
      const props = reactive<DropzoneProps>({})
      const emits = vi.fn()
      const input = new DropzoneInput(
        props,
        () => new DropzoneEvents(props),
        () => new DropzoneFiles(),
        emits as unknown as ConstrEmit<DropzoneEmits>
      )

      const mockElement = {
        value: 'C:\\fakepath\\report.pdf',
        files: { length: 1 } as unknown as FileList
      } as unknown as HTMLInputElement
      input.element.value = mockElement

      input.clear()
      expect(mockElement.value).toBe('')
      expect(mockElement.files).toBeNull()

      mockElement.value = 'C:\\fakepath\\next.pdf'
      const focusEvent = new FocusEvent('focus')
      ;(input.binds.onFocus as (event: FocusEvent) => void)(focusEvent)
      expect(mockElement.value).toBe('')
      expect(emits).toHaveBeenCalledWith('focus', focusEvent)
    })

    it('should suppress focus and blur emits when disabled is true', () => {
      const props = reactive<DropzoneProps>({ disabled: true })
      const emits = vi.fn()
      const input = new DropzoneInput(
        props,
        () => new DropzoneEvents(props),
        () => new DropzoneFiles(),
        emits as unknown as ConstrEmit<DropzoneEmits>
      )

      ;(input.binds.onFocus as (event: FocusEvent) => void)(new FocusEvent('focus'))
      ;(input.binds.onBlur as (event: FocusEvent) => void)(new FocusEvent('blur'))

      expect(emits).not.toHaveBeenCalled()
    })

    it('should forward target.files on change and handle null target safely', () => {
      const props = reactive<DropzoneProps>({})
      const filesInstance = new DropzoneFiles()
      const setSpy = vi.spyOn(filesInstance, 'set')
      const input = new DropzoneInput(
        props,
        () => new DropzoneEvents(props),
        () => filesInstance
      )

      const mockFiles = { length: 1 } as unknown as FileList
      const mockTarget = { files: mockFiles } as unknown as HTMLInputElement
      const changeEvent = new Event('change')
      Object.defineProperty(changeEvent, 'target', { value: mockTarget })

      ;(input.binds.onChange as (event: Event) => void)(changeEvent)
      expect(setSpy).toHaveBeenCalledWith(mockFiles, changeEvent)

      const nullTargetEvent = new Event('change')
      ;(input.binds.onChange as (event: Event) => void)(nullTargetEvent)
      expect(setSpy).toHaveBeenCalledWith(undefined, nullTargetEvent)
    })
  })
})
