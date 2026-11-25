// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, reactive } from 'vue'
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

describe('DropzoneDesign (isolated design class)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).forEach(cleanup => cleanup())
    document.body.innerHTML = ''
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

  const mountDesign = (
    initialProps: DropzoneProps = {},
    attrs: Record<string, unknown> = {},
    slots: Record<string, () => unknown> = {},
    ItemConstructor: typeof Dropzone = Dropzone
  ) => {
    const props = reactive<DropzoneProps>(initialProps)
    const emits = vi.fn()
    let designInstance: DropzoneDesign<
      DropzoneComponents,
      DropzoneExpose,
      DropzoneClasses,
      DropzoneProps
    > | undefined
    let exposed: DropzoneExpose | undefined

    const Inner = defineComponent({
      inheritAttrs: false,
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
          ItemConstructor
        )
        designInstance = design
        exposed = design.expose()
        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Inner, attrs, slots)
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    if (!designInstance || !exposed) {
      throw new Error('DropzoneDesign failed to initialize')
    }

    return {
      container,
      props,
      emits,
      design: designInstance,
      exposed
    }
  }

  describe('Root assembly and attribute merging', () => {
    it('should render root label with merged external attrs, class, style, ref, and child inclusions', () => {
      const externalClick = vi.fn()
      const { container, design } = mountDesign(
        {
          icon: 'upload',
          label: 'Drop files',
          labelId: 'custom-label-id',
          description: 'PNG or JPG',
          descriptionId: 'custom-desc-id',
          inputAttrs: {
            'class': 'extra-input-class',
            'data-testid': 'dz-input'
          }
        },
        {
          'class': 'external-dropzone',
          'style': { opacity: '0.85' },
          'data-testid': 'dz-root',
          'onClick': externalClick
        }
      )

      const root = container.querySelector('[data-testid="dz-root"]') as HTMLLabelElement | null
      expect(root).not.toBeNull()
      expect(root?.tagName).toBe('LABEL')
      expect(root?.classList.contains('d1-dropzone')).toBe(true)
      expect(root?.classList.contains('external-dropzone')).toBe(true)
      expect(root?.style.opacity).toBe('0.85')
      expect(root?.getAttribute('aria-labelledby')).toBe('custom-label-id')
      expect(root?.getAttribute('aria-describedby')).toBe('custom-desc-id')

      const input = root?.querySelector('input[data-testid="dz-input"]') as HTMLInputElement | null
      expect(input).not.toBeNull()
      expect(input?.type).toBe('file')
      expect(input?.classList.contains('d1-dropzone__input')).toBe(true)
      expect(input?.classList.contains('extra-input-class')).toBe(true)

      const icon = root?.querySelector('.mock-icon')
      expect(icon?.getAttribute('data-icon')).toBe('upload')

      const label = root?.querySelector('.d1-dropzone__label')
      expect(label?.textContent).toBe('Drop files')
      expect(label?.id).toBe('custom-label-id')

      const description = root?.querySelector('.d1-dropzone__description')
      expect(description?.textContent).toBe('PNG or JPG')
      expect(description?.id).toBe('custom-desc-id')

      root?.click()
      expect(externalClick).toHaveBeenCalled()

      // Public renderInput helper returns VNode array directly
      const inputNodes = design.renderInput()
      expect(inputNodes).toHaveLength(1)
      expect(inputNodes[0]?.type).toBe('input')
    })

    it('should render default slot once inside label without duplication', () => {
      const { container } = mountDesign(
        {},
        {},
        {
          default: () => h('strong', { class: 'slot-title' }, 'Custom Upload Title'),
          description: () => h('em', { class: 'slot-desc' }, 'Custom Description')
        }
      )

      const slotTitles = container.querySelectorAll('.slot-title')
      expect(slotTitles).toHaveLength(1)
      expect(slotTitles[0]?.parentElement?.classList.contains('d1-dropzone__label')).toBe(true)
      expect(slotTitles[0]?.parentElement?.textContent).toBe('Custom Upload Title')

      const slotDescriptions = container.querySelectorAll('.slot-desc')
      expect(slotDescriptions).toHaveLength(1)
      expect(slotDescriptions[0]?.parentElement?.classList.contains('d1-dropzone__description')).toBe(true)
    })
  })

  describe('Expose and custom orchestrator DI', () => {
    it('should expose open and clear delegated to injected custom Dropzone orchestrator', () => {
      const openSpy = vi.fn()
      const clearSpy = vi.fn()

      class CustomDropzone extends Dropzone {
        override readonly open = openSpy
        override readonly clear = clearSpy
      }

      const { exposed } = mountDesign({}, {}, {}, CustomDropzone)

      exposed.open()
      exposed.clear()

      expect(openSpy).toHaveBeenCalledTimes(1)
      expect(clearSpy).toHaveBeenCalledTimes(1)
    })
  })
})
