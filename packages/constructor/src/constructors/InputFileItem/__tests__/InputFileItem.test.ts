// @vitest-environment jsdom
import { describe, it, expect, afterEach } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type App } from 'vue'

import { InputFileItemDesign } from '../InputFileItemDesign'
import type { InputFileItemProps } from '../props'
import type {
  InputFileItemClasses,
  InputFileItemComponents,
  InputFileItemExpose
} from '../types'

const ButtonStub = defineComponent({
  props: {
    label: { type: String, default: undefined },
    title: { type: String, default: undefined },
    icon: { type: String, default: undefined },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    onClick: { type: Function, default: undefined }
  },
  setup(props, { attrs }) {
    return () => h('button', {
      'type': 'button',
      ...attrs,
      'aria-label': props.title,
      'disabled': props.disabled,
      'onClick': (event: MouseEvent) => props.onClick?.(event)
    }, props.icon || props.title)
  }
})

const DialogStub = defineComponent({
  props: {
    label: { type: String, default: undefined },
    description: { type: String, default: undefined },
    beforeOpening: { type: Function, default: undefined },
    onOk: { type: Function, default: undefined }
  },
  setup(props, { slots }) {
    return () => h('div', { 'class': 'd1-dialog', 'data-dialog': props.label || 'confirm' }, [
      slots.control?.({ binds: { onClick: () => props.beforeOpening?.() } }),
      slots.default?.(),
      h('button', {
        type: 'button',
        class: 'd1-dialog__ok',
        onClick: () => props.onOk?.()
      }, 'OK')
    ])
  }
})

const IconStub = defineComponent({
  props: {
    selected: { type: Boolean, default: false },
    icon: { type: Object, default: undefined }
  },
  setup(props) {
    return () => h('span', { 'class': 'd1-icon', 'data-selected': String(Boolean(props.selected)) })
  }
})

const ImageStub = defineComponent({
  props: {
    image: { type: [String, Object], default: undefined },
    alt: { type: String, default: undefined }
  },
  setup(props) {
    return () => h('img', { class: 'd1-image', alt: props.alt })
  }
})

const ImageCropStub = defineComponent({
  props: {
    onResize: { type: Function, default: undefined }
  },
  setup(props) {
    return () => h('div', {
      class: 'd1-imageCrop',
      onClick: () => props.onResize?.({ coordinator: [12, 12, 12, 12] })
    })
  }
})

const ProgressStub = defineComponent({
  props: {
    visible: { type: Boolean, default: false },
    circular: { type: Boolean, default: false },
    linear: { type: Boolean, default: false },
    value: { type: Number, default: undefined },
    max: { type: Number, default: undefined }
  },
  setup(props) {
    return () => h('div', {
      'class': 'd1-progress',
      'data-circular': String(Boolean(props.circular)),
      'data-linear': String(Boolean(props.linear)),
      'data-value': props.value
    })
  }
})

describe('InputFileItem (Integration)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
  })

  const mountItem = (
    props: InputFileItemProps = {},
    attrs: Record<string, unknown> = {}
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const exposedRef = ref<InputFileItemExpose | undefined>()
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
        appearance: { type: String, default: 'list' },
        status: { type: String, default: 'idle' },
        loading: { type: [Boolean, Object], default: false },
        value: { type: Object, default: undefined },
        file: { type: Object, default: undefined },
        crop: { type: Boolean, default: true },
        confirmDelete: { type: Boolean, default: true },
        selected: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        isSkeleton: { type: Boolean, default: false },
        iconCrop: { type: String, default: 'crop' },
        iconDelete: { type: String, default: 'delete' },
        iconRetry: { type: String, default: 'refresh' },
        iconSuccess: { type: String, default: 'check_circle' },
        iconError: { type: String, default: 'cancel' },
        iconWarning: { type: String, default: 'error' }
      },
      emits: ['crop', 'delete', 'retry'],
      setup(componentProps, { expose }) {
        const design = new InputFileItemDesign<
          InputFileItemComponents,
          InputFileItemExpose,
          InputFileItemClasses,
          InputFileItemProps
        >(
          'd1.inputFileItem',
          componentProps as Readonly<InputFileItemProps>,
          {
            emits: recordEmit as never,
            classes: computed(() => ({
              main: { 'd1-inputFileItem': true },
              thumbnail: 'd1-inputFileItem__thumbnail',
              body: 'd1-inputFileItem__body',
              label: 'd1-inputFileItem__label',
              caption: 'd1-inputFileItem__caption',
              progress: 'd1-inputFileItem__progress',
              actions: 'd1-inputFileItem__actions',
              buttonCrop: 'd1-inputFileItem__buttonCrop',
              buttonDelete: 'd1-inputFileItem__buttonDelete',
              buttonRetry: 'd1-inputFileItem__buttonRetry'
            })),
            components: {
              button: ButtonStub as never,
              dialog: DialogStub as never,
              icon: IconStub as never,
              image: ImageStub as never,
              imageCrop: ImageCropStub as never,
              progress: ProgressStub as never
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
      rootElement: container.firstElementChild as HTMLElement,
      exposed: exposedRef,
      emitted
    }
  }

  it('should render list mode without spurious aria-disabled and handle direct delete + retry + crop dialog', async () => {
    const { rootElement, exposed, emitted } = mountItem(
      {
        status: 'error',
        confirmDelete: false,
        crop: true,
        value: { name: 'contract.pdf', size: 2048 }
      },
      { class: 'extra-file-item' }
    )

    await nextTick()

    expect(rootElement.classList.contains('d1-inputFileItem')).toBe(true)
    expect(rootElement.classList.contains('extra-file-item')).toBe(true)
    expect(rootElement.getAttribute('aria-disabled')).toBeNull()
    expect(rootElement.getAttribute('aria-busy')).toBe('false')
    expect(rootElement.querySelector('.d1-icon')?.getAttribute('data-selected')).toBe('false')

    const retryButton = rootElement.querySelector('.d1-inputFileItem__buttonRetry') as HTMLButtonElement
    retryButton.click()
    expect(emitted.retry).toHaveLength(1)

    const deleteButton = rootElement.querySelector('.d1-inputFileItem__buttonDelete') as HTMLButtonElement
    deleteButton.click()
    expect(emitted.delete).toHaveLength(1)

    const imageCrop = rootElement.querySelector('.d1-imageCrop') as HTMLElement
    imageCrop.click()
    const cropOkButton = rootElement.querySelector('.d1-dialog .d1-dialog__ok') as HTMLButtonElement
    cropOkButton.click()
    expect(emitted.crop).toHaveLength(1)
    expect(exposed.value?.getCrop()).toEqual([12, 12, 12, 12])
  })

  it('should render uploading circular progress in tile mode and hide actions when readonly', async () => {
    const { rootElement } = mountItem({
      appearance: 'tile',
      status: 'uploading',
      loading: { visible: true, value: 500 },
      readonly: true,
      isSkeleton: true,
      value: { name: 'photo.jpg', size: 1000 }
    })

    await nextTick()

    expect(rootElement.getAttribute('aria-busy')).toBe('true')
    expect(rootElement.classList.contains('d1-skeleton__background')).toBe(true)
    expect(rootElement.querySelector('.d1-progress')?.getAttribute('data-circular')).toBe('true')
    expect(rootElement.querySelector('.d1-progress')?.getAttribute('data-value')).toBe('500')
    expect(rootElement.querySelector('.d1-inputFileItem__actions')).toBeNull()
  })
})
