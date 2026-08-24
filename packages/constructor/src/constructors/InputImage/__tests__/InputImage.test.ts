// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { reactive, ref, toRefs } from 'vue'

import { ImageFile } from '../../Image/ImageFile'
import { FieldElementInclude } from '../../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../../classes/Field/FieldEventInclude'
import { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import { FieldValidationInclude } from '../../../classes/Field/FieldValidationInclude'
import { FieldChangeInclude } from '../../../classes/Field/FieldChangeInclude'
import { FieldAttributesInclude } from '../../../classes/Field/FieldAttributesInclude'
import { InputImage } from '../InputImage'
import { InputImageFiles } from '../InputImageFiles'
import { InputImageInclude } from '../InputImageInclude'
import type { InputImageProps } from '../props'
import type { InputImageItem, InputImageValue } from '../basicTypes'

describe('InputImage', () => {
  let originalImage: typeof Image

  beforeEach(() => {
    vi.restoreAllMocks()
    originalImage = globalThis.Image
  })

  afterEach(() => {
    globalThis.Image = originalImage
  })

  it('should initialize orchestrator with DI and provide default state and getters', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const props = reactive({
      value: undefined,
      disabled: false
    }) as InputImageProps

    const refs = toRefs(props)
    const emits = vi.fn()

    const inputImage = new InputImage(
      props,
      refs,
      elementRef,
      'd1',
      'd1-input-image',
      undefined,
      undefined,
      emits
    )

    expect(inputImage.files.hasImage()).toBe(false)
    expect(inputImage.files.get()).toBeUndefined()
    expect(inputImage.binds.onBlur).toBeDefined()
    expect(inputImage.binds.onInput).toBeDefined()
    expect(inputImage.binds.onChange).toBeDefined()
  })

  it('should initialize with string value and object value', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const props = reactive({
      value: {
        value: 'https://example.com/test.jpg',
        crop: [10, 20, 30, 40] as [number, number, number, number]
      },
      disabled: false
    }) as InputImageProps

    const refs = toRefs(props)
    const emits = vi.fn()

    const inputImage = new InputImage(
      props,
      refs,
      elementRef,
      'd1',
      'd1-input-image',
      undefined,
      undefined,
      emits
    )

    expect(inputImage.files.hasImage()).toBe(true)
    expect(inputImage.files.get()).toEqual({
      value: 'https://example.com/test.jpg',
      crop: [10, 20, 30, 40]
    })
  })

  it('should handle crop coordinator updates and update files value', () => {
    const props = reactive({
      value: 'https://example.com/test.jpg',
      disabled: false
    }) as InputImageProps
    const refs = toRefs(props)
    const elementRef = ref(document.createElement('div'))
    const emits = vi.fn()

    const elementItem = new FieldElementInclude(props, elementRef)
    const value = new FieldValueInclude<InputImageItem>(props, refs, elementItem)
    const change = new FieldChangeInclude(props)
    const attributes = new FieldAttributesInclude(props)
    const validation = new FieldValidationInclude(props, attributes, value, change)
    const event = new FieldEventInclude(props, change, value, validation, emits)

    const files = new InputImageFiles(props, value, event)

    expect(files.get()).toEqual({
      value: 'https://example.com/test.jpg',
      crop: undefined
    })

    files.setCrop([5, 10, 15, 20])

    const expected: InputImageValue = {
      value: 'https://example.com/test.jpg',
      crop: [5, 10, 15, 20]
    }

    expect(files.get()).toEqual(expected)
  })

  it('should process and resize image file in InputImageFiles', async () => {
    class MockImage {
      naturalWidth = 2000
      naturalHeight = 1000
      onload: (() => void) | null = null
      onerror: (() => void) | null = null
      private _src = ''

      set src(value: string) {
        this._src = value
        setTimeout(() => this.onload?.(), 0)
      }

      get src() {
        return this._src
      }
    }
    globalThis.Image = MockImage as unknown as typeof Image

    const props = reactive({
      maxSize: 500,
      disabled: false
    }) as InputImageProps

    const refs = toRefs(props)
    const elementRef = ref(document.createElement('div'))
    const emits = vi.fn()

    const elementItem = new FieldElementInclude(props, elementRef)
    const value = new FieldValueInclude<InputImageItem>(props, refs, elementItem)
    const change = new FieldChangeInclude(props)
    const attributes = new FieldAttributesInclude(props)
    const validation = new FieldValidationInclude(props, attributes, value, change)
    const event = new FieldEventInclude(props, change, value, validation, emits)

    const files = new InputImageFiles(props, value, event)

    vi.spyOn(ImageFile, 'isImage').mockReturnValue(true)
    vi.spyOn(ImageFile, 'getFileResult').mockResolvedValue('data:image/png;base64,original')

    const mockFile = new File(['mock'], 'photo.png', { type: 'image/png' })
    const result = await files.setFile(mockFile)

    expect(result).toBeDefined()
    expect(files.get().value).toBeDefined()
  })

  it('should handle setFiles and call setFile with first file', async () => {
    const props = reactive({
      disabled: false
    }) as InputImageProps

    const refs = toRefs(props)
    const elementRef = ref(document.createElement('div'))
    const emits = vi.fn()

    const elementItem = new FieldElementInclude(props, elementRef)
    const value = new FieldValueInclude<InputImageItem>(props, refs, elementItem)
    const change = new FieldChangeInclude(props)
    const attributes = new FieldAttributesInclude(props)
    const validation = new FieldValidationInclude(props, attributes, value, change)
    const event = new FieldEventInclude(props, change, value, validation, emits)

    const files = new InputImageFiles(props, value, event)
    const setFileSpy = vi.spyOn(files, 'setFile').mockResolvedValue('data:image/png;base64,mock')

    const mockFile = new File(['image-bytes'], 'photo.jpg', { type: 'image/jpeg' })
    const fileList = {
      0: mockFile,
      length: 1,
      item: (i: number) => (i === 0 ? mockFile : null)
    } as unknown as FileList

    await files.setFiles(fileList)
    expect(setFileSpy).toHaveBeenCalledWith(mockFile)
  })

  it('should clear values and call open', () => {
    const props = reactive({
      value: 'https://example.com/image.png',
      disabled: false
    }) as InputImageProps

    const refs = toRefs(props)
    const emits = vi.fn()
    const elementRef = ref(document.createElement('div'))

    const inputImage = new InputImage(
      props,
      refs,
      elementRef,
      'd1',
      'd1-input-image',
      undefined,
      undefined,
      emits
    )

    expect(inputImage.files.hasImage()).toBe(true)
    inputImage.clear()
    expect(inputImage.files.hasImage()).toBe(false)
    expect(inputImage.files.get()).toBeUndefined()

    expect(inputImage.actions).toBeDefined()
    expect(typeof inputImage.open).toBe('function')
  })

  it('should instantiate InputImageInclude correctly', () => {
    const props = {
      inputImage: true
    }

    const include = new InputImageInclude('d1-test', props)
    expect(include).toBeDefined()
  })
})
