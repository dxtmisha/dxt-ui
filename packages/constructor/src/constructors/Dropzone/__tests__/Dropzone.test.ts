// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { Dropzone } from '../Dropzone'
import { DropzoneDesign } from '../DropzoneDesign'
import type { DropzoneProps } from '../props'
import type {
  DropzoneClasses,
  DropzoneComponents,
  DropzoneEmits,
  DropzoneExpose
} from '../types'

const createMockFileList = (names: string[]): FileList => {
  const files = names.map(name => new File(['content'], name, { type: 'text/plain' }))

  return {
    length: files.length,
    item: (index: number) => files[index] ?? null,
    [Symbol.iterator]: function* () {
      for (const file of files) {
        yield file
      }
    }
  } as unknown as FileList
}

describe('Dropzone (integrated component)', () => {
  const cleanups: Array<() => void> = []
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    cleanups.splice(0).forEach(cleanup => cleanup())
    document.body.innerHTML = ''
    expect(warnSpy).not.toHaveBeenCalled()
    vi.restoreAllMocks()
  })

  const MockIcon = defineComponent({
    name: 'MockIcon',
    props: {
      icon: { type: [String, Object], default: undefined }
    },
    setup(props) {
      return () => h('span', { 'class': 'mock-icon', 'data-icon': String(props.icon ?? '') })
    }
  })

  const mountIntegrated = (
    initialProps: DropzoneProps = {},
    slots: Record<string, () => unknown> = {}
  ) => {
    const props = reactive<DropzoneProps>(initialProps)
    const emits = vi.fn()
    let orchestrator: Dropzone | undefined
    let exposed: DropzoneExpose | undefined

    const setOrchestrator = (instance: Dropzone): void => {
      orchestrator = instance
    }

    class TrackedDropzone extends Dropzone {
      constructor(...args: ConstructorParameters<typeof Dropzone>) {
        super(...args)
        setOrchestrator(this)
      }
    }

    const Inner = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-dropzone': true,
            'd1-dropzone--disabled': Boolean(props.disabled),
            'd1-dropzone--readonly': Boolean(props.readonly)
          }
        }))
        const design = new DropzoneDesign<
          DropzoneComponents,
          DropzoneExpose,
          DropzoneClasses,
          DropzoneProps
        >(
          'd1.dropzone',
          props,
          {
            emits: emits as unknown as ConstrEmit<DropzoneEmits>,
            classes,
            components: {
              icon: MockIcon
            }
          },
          TrackedDropzone
        )
        exposed = design.expose()
        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Inner, null, slots)
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    if (!orchestrator || !exposed) {
      throw new Error('Integrated Dropzone failed to initialize')
    }

    return {
      container,
      props,
      emits,
      orchestrator,
      exposed
    }
  }

  describe('Default DOM hierarchy and lazy dependency instantiation', () => {
    it('should render default dropzone markup with ARIA and keep optional helpers lazy', () => {
      const { container, orchestrator } = mountIntegrated()

      const root = container.firstElementChild as HTMLLabelElement
      const input = root.querySelector('input[type="file"]') as HTMLInputElement
      const label = root.querySelector('.d1-dropzone__label') as HTMLSpanElement

      expect(root.tagName).toBe('LABEL')
      expect(root.classList.contains('d1-dropzone')).toBe(true)
      expect(root.classList.contains('d1-dropzone--enter')).toBe(false)
      expect(root.getAttribute('aria-labelledby')).toBe(label.id)
      expect(root.getAttribute('aria-describedby')).toBeNull()
      expect(root.getAttribute('aria-disabled')).toBeNull()
      expect(root.getAttribute('aria-readonly')).toBeNull()

      expect(input).not.toBeNull()
      expect(input.classList.contains('d1-dropzone__input')).toBe(true)
      expect(input.disabled).toBe(false)
      expect(label.textContent).toBe('Drop files here or click to upload')

      // Optional and interaction-only helpers stay lazily unallocated
      expect(orchestrator.hasInstance('icon')).toBe(false)
      expect(orchestrator.hasInstance('description')).toBe(false)
      expect(orchestrator.hasInstance('skeleton')).toBe(false)
      expect(orchestrator.hasInstance('files')).toBe(false)
      expect(orchestrator.hasInstance('model')).toBe(false)
    })
  })

  describe('Drag-and-drop and file selection interactions', () => {
    it('should toggle --enter class on dragenter, dragleave, and drop', async () => {
      const { container } = mountIntegrated()
      const root = container.firstElementChild as HTMLLabelElement
      const input = root.querySelector('input') as HTMLInputElement

      input.dispatchEvent(new Event('dragenter', { bubbles: true }))
      await nextTick()
      expect(root.classList.contains('d1-dropzone--enter')).toBe(true)

      input.dispatchEvent(new Event('dragleave', { bubbles: true }))
      await nextTick()
      expect(root.classList.contains('d1-dropzone--enter')).toBe(false)

      input.dispatchEvent(new Event('dragenter', { bubbles: true }))
      await nextTick()
      expect(root.classList.contains('d1-dropzone--enter')).toBe(true)

      input.dispatchEvent(new Event('drop', { bubbles: true }))
      await nextTick()
      expect(root.classList.contains('d1-dropzone--enter')).toBe(false)
    })

    it('should handle file selection via change event, emit field and v-model events, and support clear()', async () => {
      const { container, emits, exposed, orchestrator } = mountIntegrated({
        accept: '.txt,.pdf',
        multiple: true
      })
      const input = container.querySelector('input') as HTMLInputElement
      const mockFiles = createMockFileList(['document.pdf', 'notes.txt'])

      expect(input.getAttribute('accept')).toBe('.txt,.pdf')
      expect(input.multiple).toBe(true)

      Object.defineProperty(input, 'files', {
        configurable: true,
        writable: true,
        value: mockFiles
      })

      const changeEvent = new Event('change', { bubbles: true })
      input.dispatchEvent(changeEvent)
      await nextTick()

      expect(orchestrator.hasInstance('files')).toBe(true)
      expect(orchestrator.hasInstance('model')).toBe(true)
      expect(orchestrator.i('files').get()).toBe(mockFiles)

      const expectedValidation = {
        status: true,
        isFull: true,
        value: mockFiles,
        valueInput: mockFiles
      }

      expect(emits).toHaveBeenCalledWith('input', changeEvent, expectedValidation)
      expect(emits).toHaveBeenCalledWith('change', changeEvent, expectedValidation)
      expect(emits).toHaveBeenCalledWith('inputLite', expectedValidation)
      expect(emits).toHaveBeenCalledWith('changeLite', expectedValidation)
      expect(emits).toHaveBeenCalledWith('update:files', mockFiles)
      expect(emits).toHaveBeenCalledWith('update:modelFiles', mockFiles)

      emits.mockClear()
      exposed.clear()
      await nextTick()

      expect(orchestrator.i('files').get()).toBeUndefined()
      expect(input.value).toBe('')
      expect(emits).toHaveBeenCalledWith('inputLite', {
        status: true,
        isFull: false,
        value: undefined,
        valueInput: undefined
      })
      expect(emits).toHaveBeenCalledWith('update:files', undefined)
      expect(emits).toHaveBeenCalledWith('update:modelFiles', undefined)
    })

    it('should emit focus and blur events and trigger native input click via exposed open()', async () => {
      const { container, emits, exposed } = mountIntegrated()
      const input = container.querySelector('input') as HTMLInputElement
      const clickSpy = vi.spyOn(input, 'click')

      exposed.open()
      expect(clickSpy).toHaveBeenCalledTimes(1)

      const focusEvent = new FocusEvent('focus')
      input.dispatchEvent(focusEvent)
      expect(emits).toHaveBeenCalledWith('focus', focusEvent)

      const blurEvent = new FocusEvent('blur')
      input.dispatchEvent(blurEvent)
      expect(emits).toHaveBeenCalledWith('blur', blurEvent)
    })
  })

  describe('Disabled, readonly, skeleton, slots, and Unicode reactivity', () => {
    it('should block drag and open interactions and update ARIA when disabled or readonly', async () => {
      const { container, props, exposed } = mountIntegrated({ disabled: true })
      const root = container.firstElementChild as HTMLLabelElement
      const input = root.querySelector('input') as HTMLInputElement
      const clickSpy = vi.spyOn(input, 'click')

      expect(root.getAttribute('aria-disabled')).toBe('true')
      expect(root.classList.contains('d1-dropzone--disabled')).toBe(true)
      expect(input.disabled).toBe(true)

      input.dispatchEvent(new Event('dragenter'))
      exposed.open()
      await nextTick()

      expect(root.classList.contains('d1-dropzone--enter')).toBe(false)
      expect(clickSpy).not.toHaveBeenCalled()

      props.disabled = false
      props.readonly = true
      await nextTick()

      expect(root.getAttribute('aria-disabled')).toBeNull()
      expect(root.getAttribute('aria-readonly')).toBe('true')
      expect(input.disabled).toBe(true)

      exposed.open()
      expect(clickSpy).not.toHaveBeenCalled()
    })

    it('should reactively activate icon, description, skeleton, and Unicode labels', async () => {
      const { container, props, orchestrator } = mountIntegrated({
        label: 'Загрузите файлы 🚀',
        description: 'Hỗ trợ PNG, JPG tối đa 10MB'
      })

      const root = container.firstElementChild as HTMLLabelElement
      const label = root.querySelector('.d1-dropzone__label') as HTMLSpanElement
      const description = root.querySelector('.d1-dropzone__description') as HTMLDivElement

      expect(label.textContent).toBe('Загрузите файлы 🚀')
      expect(description.textContent).toBe('Hỗ trợ PNG, JPG tối đa 10MB')
      expect(root.getAttribute('aria-describedby')).toBe(description.id)
      expect(orchestrator.hasInstance('text')).toBe(false)

      props.icon = 'cloud_upload'
      props.isSkeleton = true
      await nextTick()

      expect(root.querySelector('.mock-icon')?.getAttribute('data-icon')).toBe('cloud_upload')
      expect(root.classList.contains('d1-skeleton__background')).toBe(true)
      expect(label.classList.contains('d1-skeleton__background')).toBe(true)
    })

    it('should project default and description slots without duplicate rendering', () => {
      const { container, orchestrator } = mountIntegrated(
        { icon: 'upload' },
        {
          default: () => h('strong', { class: 'custom-title' }, 'Tải lên tài liệu'),
          description: () => h('span', { class: 'custom-hint' }, 'Максимальный размер 25МБ')
        }
      )

      const root = container.firstElementChild as HTMLLabelElement
      const titles = root.querySelectorAll('.custom-title')
      const hints = root.querySelectorAll('.custom-hint')
      const description = root.querySelector('.d1-dropzone__description') as HTMLDivElement

      expect(titles).toHaveLength(1)
      expect(hints).toHaveLength(1)
      expect(root.querySelector('.d1-dropzone__label')?.textContent).toBe('Tải lên tài liệu')
      expect(description.textContent).toBe('Максимальный размер 25МБ')
      expect(root.getAttribute('aria-describedby')).toBe(description.id)
      expect(orchestrator.hasInstance('text')).toBe(false)
    })
  })
})
