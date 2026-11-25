// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type App } from 'vue'

import { InputImageDesign } from '../InputImageDesign'
import type { InputImageProps } from '../props'
import type { InputImageClasses, InputImageComponents, InputImageExpose } from '../types'

const DropzoneStub = defineComponent({
  props: {
    disabled: { type: Boolean, default: false }
  },
  setup(props, { expose }) {
    const open = vi.fn()
    expose({ open })
    return () => h('div', { 'class': 'd1-dropzone', 'data-disabled': String(props.disabled) })
  }
})

const ActionsStub = defineComponent({
  props: {
    list: { type: Array, default: () => [] }
  },
  setup(props) {
    return () => h('div', { 'class': 'd1-actions', 'data-count': String(props.list.length) })
  }
})

const ImageCropStub = defineComponent({
  props: {
    image: { type: String, default: undefined },
    value: { type: Array, default: undefined }
  },
  setup(props) {
    return () => h('div', { 'class': 'd1-imageCrop', 'data-image': props.image })
  }
})

const FieldLabelStub = defineComponent({
  props: { label: { type: String, default: undefined } },
  setup(props) {
    return () => h('label', { class: 'd1-fieldLabel' }, props.label)
  }
})

const FieldMessageStub = defineComponent({
  props: {
    helperMessage: { type: String, default: undefined },
    helperId: { type: String, default: undefined }
  },
  setup(props) {
    return () => h('div', { class: 'd1-fieldMessage', id: props.helperId }, props.helperMessage)
  }
})

describe('InputImageDesign', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  const mountDesign = (initialProps: Partial<InputImageProps> = {}) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const exposedRef = ref<InputImageExpose | undefined>()
    const emitsSpy = vi.fn()

    const Component = defineComponent({
      inheritAttrs: false,
      props: {
        value: { type: [String, Object], default: undefined },
        label: { type: String, default: undefined },
        helperMessage: { type: String, default: undefined },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false }
      },
      setup(props, { attrs, expose }) {
        const design = new InputImageDesign<
          InputImageComponents,
          InputImageExpose,
          InputImageClasses,
          InputImageProps
        >(
          'd1.inputImage',
          props as Readonly<InputImageProps>,
          {
            emits: emitsSpy as never,
            attrs,
            classes: computed(() => ({
              main: { 'd1-inputImage': true },
              body: 'd1-inputImage__body',
              crop: 'd1-inputImage__crop',
              dropzone: 'd1-inputImage__dropzone',
              actions: 'd1-inputImage__actions'
            })),
            components: {
              actions: ActionsStub as never,
              dropzone: DropzoneStub as never,
              fieldLabel: FieldLabelStub as never,
              fieldMessage: FieldMessageStub as never,
              imageCrop: ImageCropStub as never
            }
          } as never
        )

        expose(design.expose())
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Component as never, { ...initialProps, ref: exposedRef })
    })

    app.mount(container)
    mountedApps.push({ app, container })

    return {
      container,
      root: container.firstElementChild as HTMLElement,
      exposed: exposedRef,
      emitsSpy
    }
  }

  it('omits crop and actions when no image is set and renders them when image exists', async () => {
    const empty = mountDesign({ label: 'Avatar', helperMessage: 'Upload' })
    await nextTick()

    expect(empty.root.querySelector('.d1-dropzone')).not.toBeNull()
    expect(empty.root.querySelector('.d1-imageCrop')).toBeNull()
    expect(empty.root.querySelector('.d1-actions')).toBeNull()
    expect(empty.root.getAttribute('aria-describedby')).toBeTruthy()

    const withImage = mountDesign({
      value: 'https://example.com/photo.png',
      label: 'Avatar'
    })
    await nextTick()

    expect(withImage.root.querySelector('.d1-imageCrop')?.getAttribute('data-image')).toBe('https://example.com/photo.png')
    expect(withImage.root.querySelector('.d1-actions')?.getAttribute('data-count')).toBe('2')

    withImage.exposed.value?.clear()
    await nextTick()

    expect(withImage.root.querySelector('.d1-imageCrop')).toBeNull()
    expect(withImage.root.querySelector('.d1-actions')).toBeNull()
  })

  it('hides actions when disabled or readonly even with image', async () => {
    const disabled = mountDesign({
      value: 'https://example.com/photo.png',
      disabled: true
    })
    await nextTick()

    expect(disabled.root.querySelector('.d1-imageCrop')).not.toBeNull()
    expect(disabled.root.querySelector('.d1-actions')).toBeNull()

    const readonly = mountDesign({
      value: 'https://example.com/photo.png',
      readonly: true
    })
    await nextTick()

    expect(readonly.root.querySelector('.d1-imageCrop')).not.toBeNull()
    expect(readonly.root.querySelector('.d1-actions')).toBeNull()
  })
})
