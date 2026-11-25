// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type App } from 'vue'

import { InputFileDropzoneDesign } from '../InputFileDropzoneDesign'
import type { InputFileDropzoneProps } from '../props'
import type {
  InputFileDropzoneClasses,
  InputFileDropzoneComponents,
  InputFileDropzoneExpose
} from '../types'

const openSpy = vi.fn()

const DropzoneStub = defineComponent({
  props: {
    accept: { type: String, default: undefined },
    multiple: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    isSkeleton: { type: Boolean, default: false },
    textDropzone: { type: String, default: undefined },
    onInput: { type: Function, default: undefined }
  },
  setup(props, { slots, expose }) {
    expose({ open: openSpy })

    return () => h(
      'div',
      {
        'class': 'd1-dropzone',
        'data-accept': props.accept,
        'data-multiple': String(Boolean(props.multiple)),
        'data-disabled': String(Boolean(props.disabled)),
        'data-readonly': String(Boolean(props.readonly))
      },
      [
        h('span', { class: 'd1-dropzone__text' }, props.textDropzone),
        slots.default?.(),
        h('button', {
          'type': 'button',
          'data-testid': 'trigger-drop',
          'onClick': () => {
            const validFile = new File(['ok'], 'test.txt', { type: 'text/plain' })
            const largeFile = new File(['x'.repeat(200)], 'large.txt', { type: 'text/plain' })
            props.onInput?.(new Event('change'), { value: [validFile, largeFile] })
          }
        })
      ]
    )
  }
})

const FieldLabelStub = defineComponent({
  props: {
    label: { type: String, default: undefined },
    isSkeleton: { type: Boolean, default: false }
  },
  setup(props, { slots }) {
    return () => h(
      'label',
      { class: 'd1-fieldLabel' },
      slots.label ? slots.label() : props.label
    )
  }
})

const FieldMessageStub = defineComponent({
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
        class: 'd1-fieldMessage',
        id: props.validationId || props.helperId
      },
      props.validationMessage || props.helperMessage
    )
  }
})

describe('InputFileDropzone (Integration)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    openSpy.mockReset()
  })

  const mountDropzone = (
    props: InputFileDropzoneProps = {},
    attrs: Record<string, unknown> = {},
    slotsObj?: Record<string, () => unknown>
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const exposedRef = ref<InputFileDropzoneExpose | undefined>()
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
        accept: { type: String, default: undefined },
        multiple: { type: Boolean, default: false },
        maxFileSize: { type: Number, default: undefined },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        isSkeleton: { type: Boolean, default: false },
        label: { type: String, default: undefined },
        helperMessage: { type: String, default: undefined },
        validationMessage: { type: String, default: undefined },
        textDropzone: { type: String, default: undefined }
      },
      emits: ['add', 'reject'],
      setup(componentProps, { expose, slots }) {
        const design = new InputFileDropzoneDesign<
          InputFileDropzoneComponents,
          InputFileDropzoneExpose,
          InputFileDropzoneClasses,
          InputFileDropzoneProps
        >(
          'd1.inputFileDropzone',
          componentProps as Readonly<InputFileDropzoneProps>,
          {
            emits: recordEmit as never,
            classes: computed(() => ({
              main: { 'd1-inputFileDropzone': true },
              body: 'd1-inputFileDropzone__body',
              dropzone: 'd1-inputFileDropzone__dropzone'
            })),
            components: {
              dropzone: DropzoneStub as never,
              fieldLabel: FieldLabelStub as never,
              fieldMessage: FieldMessageStub as never
            }
          }
        )

        void slots
        expose(design.expose())
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Component as never, { ...props, ...attrs, ref: exposedRef }, slotsObj as never)
    })

    app.mount(container)
    mountedApps.push({ app, container })

    return {
      rootElement: container.firstElementChild as HTMLElement,
      exposed: exposedRef,
      emitted
    }
  }

  it('should render dropzone with label, message, ARIA bindings, and emit add on dropzone input', async () => {
    const { rootElement, exposed, emitted } = mountDropzone(
      {
        accept: 'image/*',
        multiple: true,
        maxFileSize: 100,
        label: 'Upload images',
        helperMessage: 'Max 5MB'
      },
      {
        class: 'custom-dz'
      },
      {
        default: () => h('span', { class: 'custom-slot-body' }, 'Drop custom content')
      }
    )

    await nextTick()

    expect(rootElement.classList.contains('d1-inputFileDropzone')).toBe(true)
    expect(rootElement.classList.contains('custom-dz')).toBe(true)
    expect(rootElement.getAttribute('aria-describedby')).toBeTruthy()
    expect(rootElement.querySelector('.d1-fieldLabel')?.textContent).toBe('Upload images')
    expect(rootElement.querySelector('.d1-fieldMessage')?.textContent).toBe('Max 5MB')
    expect(rootElement.querySelector('.custom-slot-body')?.textContent).toBe('Drop custom content')

    const trigger = rootElement.querySelector('[data-testid="trigger-drop"]') as HTMLButtonElement
    trigger.click()
    await nextTick()
    expect(emitted.add).toHaveLength(1)
    expect((emitted.add?.[0]?.[0] as File[])[0]?.name).toBe('test.txt')
    expect(emitted.reject).toHaveLength(1)
    expect((emitted.reject?.[0]?.[0] as File[])[0]?.name).toBe('large.txt')

    exposed.value?.open()
    expect(openSpy).toHaveBeenCalledTimes(1)
  })
})
