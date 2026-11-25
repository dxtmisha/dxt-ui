// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName, type ConstrEmit } from '@dxtmisha/functional'

import { Dropzone } from '../Dropzone'
import { DropzoneEvents } from '../DropzoneEvents'
import { DropzoneFiles } from '../DropzoneFiles'
import { DropzoneInput } from '../DropzoneInput'
import type { DropzoneProps } from '../props'
import type { DropzoneEmits, DropzoneSlots } from '../types'

describe('Dropzone (orchestrator unit)', () => {
  const naming = new DesignName('d1.dropzone')
  const scopes: Array<ReturnType<typeof effectScope>> = []

  const createDropzone = (
    initialProps: DropzoneProps = {},
    slots?: DropzoneSlots,
    emits?: ConstrEmit<DropzoneEmits>,
    constructors?: ConstructorParameters<typeof Dropzone>[6]
  ) => {
    const scope = effectScope()
    scopes.push(scope)
    const props = reactive<DropzoneProps>(initialProps)
    const element = ref<HTMLLabelElement>()
    let instance!: Dropzone

    scope.run(() => {
      instance = new Dropzone(
        props,
        element,
        naming,
        undefined,
        slots,
        emits,
        constructors
      )
    })

    return {
      scope,
      props,
      element,
      instance
    }
  }

  afterEach(() => {
    scopes.splice(0).forEach(scope => scope.stop())
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should not instantiate any subordinate helpers upon construction', () => {
      const { instance } = createDropzone()

      expect(instance.hasInstance('description')).toBe(false)
      expect(instance.hasInstance('events')).toBe(false)
      expect(instance.hasInstance('files')).toBe(false)
      expect(instance.hasInstance('icon')).toBe(false)
      expect(instance.hasInstance('input')).toBe(false)
      expect(instance.hasInstance('label')).toBe(false)
      expect(instance.hasInstance('model')).toBe(false)
      expect(instance.hasInstance('skeleton')).toBe(false)
      expect(instance.hasInstance('text')).toBe(false)
    })

    it('should keep description, icon, and skeleton unallocated when disabled and create them when enabled', () => {
      const { props, instance } = createDropzone()

      expect(instance.callInstance('description', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('icon', item => item.renderIcon(), [])).toEqual([])
      expect(instance.callInstance('skeleton', item => item.classes)).toBeUndefined()

      expect(instance.hasInstance('description')).toBe(false)
      expect(instance.hasInstance('icon')).toBe(false)
      expect(instance.hasInstance('skeleton')).toBe(false)

      props.description = 0
      props.icon = 'upload'
      props.isSkeleton = true

      expect(instance.callInstance('description', item => item.is, false)).toBe(true)
      expect(instance.callInstance('icon', item => item.isIcon(), false)).toBe(true)
      expect(instance.callInstance('skeleton', item => item.classes)).toBeDefined()

      expect(instance.hasInstance('description')).toBe(true)
      expect(instance.hasInstance('icon')).toBe(true)
      expect(instance.hasInstance('skeleton')).toBe(true)
    })
  })

  describe('Label resolution, ARIA, and bindings', () => {
    it('should fall back to localized dropzone text when neither label prop nor default slot is provided', () => {
      const { instance } = createDropzone({
        textDropzone: 'Перетащите файлы или выберите (Tải tệp lên)'
      })

      const nodes = instance.i('label').render()
      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.children).toEqual(['Перетащите файлы или выберите (Tải tệp lên)'])
      expect(instance.hasInstance('text')).toBe(true)
    })

    it('should use explicit label prop (including numeric 0) without instantiating text helper', () => {
      const { props, instance } = createDropzone({ label: 'Custom Upload' })

      expect(instance.i('label').render()[0]?.children).toEqual(['Custom Upload'])
      expect(instance.hasInstance('text')).toBe(false)

      props.label = 0
      expect(instance.i('label').render()[0]?.children).toEqual([0])
      expect(instance.hasInstance('text')).toBe(false)
    })

    it('should omit fallback dropzone text when default slot is provided without label prop', () => {
      const slots: DropzoneSlots = {
        default: () => 'Slot Title'
      }
      const { instance } = createDropzone({}, slots)

      const nodes = instance.i('label').render()
      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.children).toEqual(['Slot Title'])
      expect(instance.hasInstance('text')).toBe(false)
    })

    it('should compute ARIA attributes for disabled, readonly, label, and description', () => {
      const { props, instance } = createDropzone({
        label: 'Upload',
        labelId: 'dz-label',
        description: 'Max 10MB',
        descriptionId: 'dz-desc',
        disabled: true,
        readonly: true
      })

      expect(instance.aria).toEqual({
        'aria-disabled': 'true',
        'aria-readonly': 'true',
        'aria-labelledby': 'dz-label',
        'aria-describedby': 'dz-desc'
      })
      expect(instance.binds).toEqual(instance.aria)

      props.disabled = false
      props.readonly = false
      props.description = undefined

      expect(instance.aria).toEqual({
        'aria-labelledby': 'dz-label'
      })
    })

    it('should omit aria-disabled and aria-readonly when disabled and readonly props are omitted', () => {
      const { instance } = createDropzone({ labelId: 'default-label' })

      expect(instance.aria).toEqual({
        'aria-labelledby': 'default-label'
      })
      expect('aria-disabled' in instance.aria).toBe(false)
      expect('aria-readonly' in instance.aria).toBe(false)
    })
  })

  describe('Dynamic classes and skeleton integration', () => {
    it('should toggle enter status class and short-circuit when disabled or readonly', () => {
      const { props, instance } = createDropzone({ disabled: true })

      expect(instance.classes).toEqual({
        'd1-dropzone--enter': false
      })
      expect(instance.hasInstance('events')).toBe(false)

      props.disabled = false
      expect(instance.classes).toEqual({
        'd1-dropzone--enter': false
      })
      expect(instance.hasInstance('events')).toBe(true)

      instance.i('events').enter.value = true
      expect(instance.classes).toEqual({
        'd1-dropzone--enter': true
      })

      props.readonly = true
      expect(instance.classes).toEqual({
        'd1-dropzone--enter': false
      })
    })

    it('should merge skeleton background classes when isSkeleton is true', () => {
      const { instance } = createDropzone({ isSkeleton: true })

      expect(instance.classes).toMatchObject({
        'd1-dropzone--enter': false,
        'd1-skeleton__background': true
      })
      expect(instance.hasInstance('skeleton')).toBe(true)
    })
  })

  describe('Orchestrator actions and dependency injection', () => {
    it('should delegate open() and clear() to input and files helpers', () => {
      const openSpy = vi.fn()
      const inputClearSpy = vi.fn()
      const filesClearSpy = vi.fn()

      class CustomInput extends DropzoneInput {
        override readonly open = openSpy
        override readonly clear = inputClearSpy
      }

      class CustomFiles extends DropzoneFiles {
        override clear(): void {
          filesClearSpy()
        }
      }

      const { instance } = createDropzone(
        {},
        undefined,
        undefined,
        {
          input: CustomInput,
          files: CustomFiles
        }
      )

      instance.open()
      expect(openSpy).toHaveBeenCalledTimes(1)
      expect(instance.hasInstance('files')).toBe(false)

      instance.clear()
      expect(inputClearSpy).toHaveBeenCalledTimes(1)
      expect(filesClearSpy).toHaveBeenCalledTimes(1)
    })

    it('should allow overriding events constructor via DI', () => {
      class CustomEvents extends DropzoneEvents {
        constructor(props: Readonly<DropzoneProps>) {
          super(props)
          this.enter.value = true
        }
      }

      const { instance } = createDropzone(
        {},
        undefined,
        undefined,
        {
          events: CustomEvents
        }
      )

      expect(instance.classes['d1-dropzone--enter']).toBe(true)
    })
  })
})
