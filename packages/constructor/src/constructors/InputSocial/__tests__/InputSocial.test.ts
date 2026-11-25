// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type App } from 'vue'

import { InputSocialDesign } from '../InputSocialDesign'
import type { InputSocialProps } from '../props'
import type { InputSocialClasses, InputSocialComponents, InputSocialExpose } from '../types'

const FieldMock = defineComponent({
  props: {
    label: { type: [String, Number], default: undefined },
    prefix: { type: [String, Number], default: undefined },
    suffix: { type: [String, Number], default: undefined }
  },
  setup(props, { slots }) {
    return () => h(
      'div',
      {
        'class': 'd1-field',
        'data-label': props.label,
        'data-prefix': props.prefix
      },
      slots.default ? slots.default({ className: 'd1-field__input', binds: { 'data-input': true } }) : undefined
    )
  }
})

const MaskMock = defineComponent({
  props: {
    value: { type: [String, Number], default: undefined },
    visible: { type: Boolean, default: undefined }
  },
  emits: ['focus', 'blur', 'input', 'change'],
  setup(props, { emit }) {
    return () => h('input', {
      class: 'd1-mask-input',
      value: props.value,
      onInput: (event: Event) => emit('input', event, { value: (event.target as HTMLInputElement).value }),
      onChange: (event: Event) => emit('change', event)
    })
  }
})

describe('InputSocial (Integration)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  it('handles reactive value updates and emits events for masked social input', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const exposedRef = ref<InputSocialExpose | undefined>()
    const emitted: Record<string, unknown[][]> = {}
    const recordEmit = (name: string, ...args: unknown[]) => {
      if (!emitted[name]) {
        emitted[name] = []
      }
      emitted[name].push(args)
    }

    const Component = defineComponent({
      props: {
        socialType: { type: String, default: 'telegram' },
        value: { type: String, default: '' }
      },
      emits: ['update:value', 'update:modelValue', 'input', 'inputLite', 'change', 'changeLite'],
      setup(props, { expose }) {
        const design = new InputSocialDesign<
          InputSocialComponents,
          InputSocialExpose,
          InputSocialClasses,
          InputSocialProps
        >(
          'd1.inputSocial',
          props as Readonly<InputSocialProps>,
          {
            emits: recordEmit as never,
            classes: computed(() => ({
              main: { 'd1-inputSocial': true }
            })),
            components: {
              field: FieldMock as never,
              mask: MaskMock as never
            }
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Component as never, { ref: exposedRef })
    })
    app.mount(container)
    mountedApps.push({ app, container })
    await nextTick()

    const input = container.querySelector<HTMLInputElement>('.d1-mask-input')!
    input.value = 'dxt_user'
    input.dispatchEvent(new Event('input'))
    input.dispatchEvent(new Event('change'))
    await nextTick()

    expect(exposedRef.value?.getValue()).toBe('dxt_user')
    expect(emitted['update:modelValue']?.at(-1)).toEqual(['dxt_user'])
    expect(emitted.change).toBeDefined()
  })
})
