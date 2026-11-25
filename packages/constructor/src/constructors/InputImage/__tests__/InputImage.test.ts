// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type App } from 'vue'

import { InputImageDesign } from '../InputImageDesign'
import type { InputImageProps } from '../props'
import type { InputImageClasses, InputImageComponents, InputImageExpose } from '../types'

const DATA_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='

const DropzoneMock = defineComponent({
  props: {
    disabled: { type: Boolean, default: false }
  },
  emits: ['input', 'focus', 'blur'],
  setup(_props, { emit, expose }) {
    const openSpy = vi.fn()
    expose({ open: openSpy })

    return () => h(
      'button',
      {
        type: 'button',
        class: 'test-dropzone',
        onClick: () => {
          const file = new File(['abc'], 'photo.png', { type: 'image/png' })
          const fileList = {
            0: file,
            length: 1,
            item: (index: number) => (index === 0 ? file : null)
          } as unknown as FileList

          emit('input', new Event('input'), { value: fileList })
        }
      },
      'Dropzone'
    )
  }
})

const ActionsMock = defineComponent({
  props: {
    list: { type: Array as () => Array<{ label?: string, onClick?: () => void }>, default: () => [] }
  },
  setup(props) {
    return () => h(
      'div',
      { class: 'test-actions' },
      props.list.map((action, index) => h(
        'button',
        {
          key: index,
          type: 'button',
          class: `test-action-${index}`,
          onClick: action.onClick
        },
        action.label
      ))
    )
  }
})

const ImageCropMock = defineComponent({
  props: {
    image: { type: String, default: undefined },
    value: { type: Array, default: undefined }
  },
  emits: ['resize'],
  setup(props, { emit }) {
    return () => h(
      'div',
      {
        'class': 'test-imageCrop',
        'data-image': props.image,
        'onClick': () => emit('resize', {
          direction: 'center',
          value: 0,
          coordinator: [5, 5, 5, 5]
        })
      },
      'Crop'
    )
  }
})

const FieldLabelMock = defineComponent({
  props: {
    label: { type: String, default: undefined },
    counter: { type: Number, default: undefined },
    maxlength: { type: Number, default: undefined },
    counterShow: { type: Boolean, default: false },
    counterId: { type: String, default: undefined }
  },
  setup(props, { slots }) {
    return () => h(
      'label',
      {
        'class': 'test-label',
        'data-counter-show': String(Boolean(props.counterShow)),
        'data-counter': String(props.counter ?? ''),
        'data-maxlength': String(props.maxlength ?? '')
      },
      [
        slots.label ? slots.label({}) : props.label,
        props.counterShow ? h('span', { id: props.counterId, class: 'test-counter' }, String(props.maxlength ?? '')) : null
      ]
    )
  }
})

const FieldMessageMock = defineComponent({
  props: {
    helperMessage: { type: String, default: undefined },
    validationMessage: { type: String, default: undefined },
    helperId: { type: String, default: undefined },
    validationId: { type: String, default: undefined }
  },
  setup(props) {
    return () => h(
      'div',
      {
        class: 'test-message',
        id: props.validationId || props.helperId
      },
      props.validationMessage || props.helperMessage
    )
  }
})

describe('InputImage (Integration)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  const mountInputImage = (
    props: InputImageProps = {},
    attrs: Record<string, unknown> = {}
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const exposedRef = ref<InputImageExpose | undefined>()
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
        value: { type: [String, Object], default: undefined },
        modelValue: { type: [String, Object], default: undefined },
        label: { type: String, default: undefined },
        helperMessage: { type: String, default: undefined },
        validationMessage: { type: String, default: undefined },
        maxPixel: { type: Number, default: undefined },
        maxFileSize: { type: Number, default: undefined },
        counterShow: { type: Boolean, default: undefined },
        counterType: { type: String, default: 'auto' },
        crop: { type: Array, default: undefined },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false }
      },
      emits: ['update:value', 'update:modelValue', 'input', 'inputLite', 'change', 'changeLite'],
      setup(componentProps, { expose }) {
        const design = new InputImageDesign<
          InputImageComponents,
          InputImageExpose,
          InputImageClasses,
          InputImageProps
        >(
          'd1.inputImage',
          componentProps as Readonly<InputImageProps>,
          {
            emits: recordEmit as never,
            classes: computed(() => ({
              main: { 'd1-inputImage': true },
              body: 'd1-inputImage__body',
              crop: 'd1-inputImage__crop',
              dropzone: 'd1-inputImage__dropzone',
              actions: 'd1-inputImage__actions'
            })),
            components: {
              actions: ActionsMock as never,
              dropzone: DropzoneMock as never,
              fieldLabel: FieldLabelMock as never,
              fieldMessage: FieldMessageMock as never,
              imageCrop: ImageCropMock as never
            }
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Component as never, { ...props, ...attrs, ref: exposedRef })
    })

    app.mount(container)
    mountedApps.push({ app, container })

    return {
      root: container.firstElementChild as HTMLElement,
      exposed: exposedRef,
      emitted
    }
  }

  it('renders ARIA links, crop, and actions for an initial image value and clears on action click', async () => {
    const { root, exposed, emitted } = mountInputImage({
      label: 'Profile photo',
      helperMessage: 'PNG or JPG',
      maxPixel: 1024,
      counterShow: true,
      value: {
        value: DATA_IMAGE,
        crop: [1, 2, 3, 4]
      }
    })

    await nextTick()

    expect(root.classList.contains('d1-inputImage--hasImage')).toBe(true)
    expect(root.getAttribute('aria-describedby')).toBeTruthy()
    expect(root.querySelector('.test-label')?.getAttribute('data-maxlength')).toBe('1024')
    expect(root.querySelector('.test-imageCrop')?.getAttribute('data-image')).toBe(DATA_IMAGE)

    root.querySelector<HTMLElement>('.test-imageCrop')?.click()
    await nextTick()
    expect(exposed.value?.getValue()).toMatchObject({
      value: DATA_IMAGE,
      crop: [5, 5, 5, 5]
    })
    expect(emitted['update:modelValue']?.at(-1)?.[0]).toMatchObject({
      crop: [5, 5, 5, 5]
    })

    root.querySelector<HTMLElement>('.test-action-1')?.click()
    await nextTick()

    expect(root.classList.contains('d1-inputImage--hasImage')).toBe(false)
    expect(root.querySelector('.test-imageCrop')).toBeNull()
    expect(root.querySelector('.test-actions')).toBeNull()
  })
})
