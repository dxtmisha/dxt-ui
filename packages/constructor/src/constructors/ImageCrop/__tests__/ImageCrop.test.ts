// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, type App } from 'vue'

import { ImageCropDesign } from '../ImageCropDesign'
import type { ImageCropProps } from '../props'
import type { ImageCropClasses, ImageCropComponents, ImageCropExpose } from '../types'

const MockImage = defineComponent({
  name: 'MockImage',
  props: {
    value: { type: [String, Object], default: undefined },
    alt: { type: String, default: undefined },
    disabled: { type: Boolean, default: false }
  },
  emits: ['load'],
  setup(props, { emit }) {
    return () => h('img', {
      'data-testid': 'mock-image',
      'src': typeof props.value === 'string' ? props.value : '',
      'alt': props.alt,
      'onClick': () => emit('load', {
        type: 'img',
        image: { width: 1200, height: 600, image: {} as HTMLImageElement, src: 'demo.jpg' }
      })
    })
  }
})

const MockCropArea = defineComponent({
  name: 'MockCropArea',
  props: {
    value: { type: Array, default: undefined },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false }
  },
  emits: ['resize'],
  setup(_props, { emit }) {
    return () => h('div', {
      'data-testid': 'mock-crop-area',
      'onClick': () => emit('resize', {
        direction: 'top',
        value: 10,
        coordinator: [10, 20, 30, 40]
      })
    })
  }
})

const MockProgress = defineComponent({
  name: 'MockProgress',
  setup() {
    return () => h('div', { 'data-testid': 'mock-progress' })
  }
})

describe('ImageCrop (Integration)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  const mountImageCrop = (
    props: ImageCropProps = {},
    attrs: Record<string, unknown> = {},
    withSlot: boolean = false
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const emitted: Record<string, unknown[][]> = {}
    const recordEmit = (name: string, ...args: unknown[]) => {
      if (!emitted[name]) {
        emitted[name] = []
      }
      emitted[name].push(args)
    }

    const Component = defineComponent({
      inheritAttrs: false,
      props: {
        image: { type: [String, Object], default: undefined },
        value: { type: Array, default: undefined },
        modelValue: { type: Array, default: undefined },
        alt: { type: String, default: undefined },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        imageAttrs: { type: Object, default: undefined },
        cropAreaAttrs: { type: Object, default: undefined }
      },
      emits: ['load', 'resize', 'update:value', 'update:modelValue'],
      setup(componentProps) {
        const design = new ImageCropDesign<
          ImageCropComponents,
          ImageCropExpose,
          ImageCropClasses,
          ImageCropProps
        >(
          'd1.imageCrop',
          componentProps as Readonly<ImageCropProps>,
          {
            emits: recordEmit as never,
            classes: computed(() => ({ main: { 'd1-imageCrop': true } })),
            components: {
              image: MockImage,
              cropArea: MockCropArea,
              progress: MockProgress
            }
          }
        )

        return design.render()
      }
    })

    const app = createApp({
      render: () => h(
        Component,
        { ...props, ...attrs },
        withSlot ? { default: () => h('span', { 'data-testid': 'custom-overlay' }, 'Overlay') } : undefined
      )
    })

    app.mount(container)
    mountedApps.push({ app, container })

    return {
      container,
      rootElement: container.firstElementChild as HTMLElement,
      emitted
    }
  }

  it('should render body, image, cropArea, and default slot', () => {
    const { rootElement } = mountImageCrop(
      {
        image: 'sample.jpg',
        alt: 'Preview',
        value: [10, 10, 10, 10]
      },
      { 'class': 'custom-crop', 'data-custom': 'yes' },
      true
    )

    expect(rootElement.classList.contains('d1-imageCrop')).toBe(true)
    expect(rootElement.classList.contains('custom-crop')).toBe(true)
    expect(rootElement.getAttribute('data-custom')).toBe('yes')
    expect(rootElement.querySelector('.d1-imageCrop__body')).not.toBeNull()
    expect(rootElement.querySelector('[data-testid="mock-image"]')?.getAttribute('alt')).toBe('Preview')
    expect(rootElement.querySelector('[data-testid="mock-crop-area"]')).not.toBeNull()
    expect(rootElement.querySelector('[data-testid="custom-overlay"]')?.textContent).toBe('Overlay')
  })

  it('should hide cropArea in readonly mode and set aria-disabled when disabled', () => {
    const { rootElement } = mountImageCrop({
      image: 'sample.jpg',
      disabled: true,
      readonly: true
    })

    expect(rootElement.getAttribute('aria-disabled')).toBe('true')
    expect(rootElement.querySelector('[data-testid="mock-image"]')).not.toBeNull()
    expect(rootElement.querySelector('[data-testid="mock-crop-area"]')).toBeNull()
  })

  it('should update CSS aspect ratio styles on image load and emit model updates on cropArea resize', async () => {
    const { rootElement, emitted } = mountImageCrop({
      image: 'sample.jpg',
      value: [0, 0, 0, 0]
    })

    ;(rootElement.querySelector('[data-testid="mock-image"]') as HTMLElement).click()
    await nextTick()
    expect(emitted.load).toBeTruthy()
    expect(rootElement.style.getPropertyValue('--d1-imageCrop-sys-aspect-ratio')).toBe('1200 / 600')

    ;(rootElement.querySelector('[data-testid="mock-crop-area"]') as HTMLElement).click()
    await nextTick()
    expect(emitted['update:value']?.[0]).toEqual([[10, 20, 30, 40]])
    expect(emitted['update:modelValue']?.[0]).toEqual([[10, 20, 30, 40]])
    expect(emitted.resize).toBeTruthy()
  })
})
