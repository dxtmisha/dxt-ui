import { afterEach, describe, expect, it, vi } from 'vitest'
import { h, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { DropzoneInclude } from '../DropzoneInclude'
import type { DropzonePropsInclude } from '../basicTypes'

describe('DropzoneInclude', () => {
  const naming = new DesignName('d1.inputFile')

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Binding resolution and shorthand props', () => {
    it('should map dropzoneLabel, dropzoneDescription, dropzoneIcon, and BEM class', () => {
      const props = reactive<DropzonePropsInclude>({
        dropzoneLabel: 'Upload documents',
        dropzoneDescription: 'PDF up to 5MB',
        dropzoneIcon: 'upload'
      })
      const include = new DropzoneInclude(props, naming)

      expect(include.binds.value).toMatchObject({
        class: 'd1-inputFile__dropzone',
        label: 'Upload documents',
        description: 'PDF up to 5MB',
        icon: 'upload'
      })
      expect(include.binds.value.ref).toBeDefined()
    })

    it('should preserve falsy numeric zero and empty string shorthand values', () => {
      const props = reactive<DropzonePropsInclude>({
        dropzoneLabel: 0,
        dropzoneDescription: 0
      })
      const include = new DropzoneInclude(props, naming)

      expect(include.binds.value.label).toBe(0)
      expect(include.binds.value.description).toBe(0)

      props.dropzoneLabel = ''
      expect(include.binds.value.label).toBe('')
    })

    it('should preserve label, description, and icon from dropzoneAttrs and extra when shorthand props are omitted', () => {
      const props = reactive<DropzonePropsInclude>({
        dropzoneAttrs: {
          label: 'From attrs',
          description: 'Attrs hint',
          icon: 'cloud_upload',
          multiple: true
        }
      })
      const include = new DropzoneInclude(
        props,
        naming,
        undefined,
        () => ({
          accept: '.png',
          icon: 'extra_icon'
        })
      )

      expect(include.binds.value.label).toBe('From attrs')
      expect(include.binds.value.description).toBe('Attrs hint')
      expect(include.binds.value.icon).toBe('cloud_upload')
      expect(include.binds.value.accept).toBe('.png')
      expect(include.binds.value.multiple).toBe(true)
    })

    it('should let explicit shorthand dropzone props override dropzoneAttrs values', () => {
      const props = reactive<DropzonePropsInclude>({
        dropzoneLabel: 'Shorthand label',
        dropzoneDescription: 'Shorthand description',
        dropzoneIcon: 'file_upload',
        dropzoneAttrs: {
          label: 'Attrs label',
          description: 'Attrs description',
          icon: 'attrs_icon'
        }
      })
      const include = new DropzoneInclude(props, naming)

      expect(include.binds.value.label).toBe('Shorthand label')
      expect(include.binds.value.description).toBe('Shorthand description')
      expect(include.binds.value.icon).toBe('file_upload')
    })

    it('should support reactive getter functions for props and extra', () => {
      const state = reactive({
        title: 'Initial',
        disabled: false
      })
      const include = new DropzoneInclude(
        () => ({
          dropzoneLabel: state.title
        }),
        naming,
        undefined,
        () => ({
          disabled: state.disabled
        })
      )

      expect(include.binds.value.label).toBe('Initial')
      expect(include.binds.value.disabled).toBe(false)

      state.title = 'Updated'
      state.disabled = true

      expect(include.binds.value.label).toBe('Updated')
      expect(include.binds.value.disabled).toBe(true)
    })
  })

  describe('Expose proxying and rendering', () => {
    it('should expose open and clear proxy methods that delegate to mounted component ref', () => {
      const openSpy = vi.fn()
      const clearSpy = vi.fn()
      const include = new DropzoneInclude({}, naming)

      expect(() => include.expose.open()).not.toThrow()
      expect(() => include.expose.clear()).not.toThrow()

      const refTarget = include.binds.value.ref as { value: unknown }
      refTarget.value = {
        open: openSpy,
        clear: clearSpy
      }

      expect(include.getElement()).toEqual({ open: openSpy, clear: clearSpy })
      include.expose.open()
      include.expose.clear()

      expect(openSpy).toHaveBeenCalledTimes(1)
      expect(clearSpy).toHaveBeenCalledTimes(1)
    })

    it('should render included dropzone component via DesignComponents and respect isShow guard', () => {
      const MockDropzone = {
        name: 'MockDropzone',
        render: () => h('label', 'mock')
      }
      const components = new DesignComponents({ dropzone: MockDropzone })
      const renderSpy = vi.spyOn(components, 'render')
      const include = new DropzoneInclude(
        { dropzoneLabel: 'Attach file' },
        naming,
        components
      )

      const nodes = include.render(
        undefined,
        { multiple: true }
      )

      expect(nodes).toHaveLength(1)
      expect(renderSpy).toHaveBeenCalledWith(
        'dropzone',
        expect.objectContaining({
          label: 'Attach file',
          multiple: true
        }),
        undefined,
        undefined
      )

      expect(include.render(undefined, undefined, () => false)).toEqual([])
    })

    it('should return an empty array when components registry is not provided', () => {
      const include = new DropzoneInclude({}, naming)

      expect(include.render()).toEqual([])
    })
  })
})
