// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type App } from 'vue'

import { InputSocialDesign } from '../InputSocialDesign'
import type { InputSocialProps } from '../props'
import type { InputSocialClasses, InputSocialComponents, InputSocialExpose } from '../types'

const FieldStub = defineComponent({
  props: {
    label: { type: [String, Number], default: undefined },
    prefix: { type: [String, Number], default: undefined },
    icon: { type: String, default: undefined }
  },
  setup(props, { slots }) {
    return () => h(
      'div',
      {
        'class': 'd1-field',
        'data-label': String(props.label ?? ''),
        'data-prefix': String(props.prefix ?? ''),
        'data-icon': String(props.icon ?? '')
      },
      [
        slots.prefix ? h('span', { class: 'slot-prefix' }, slots.prefix({})) : null,
        slots.default ? slots.default({ className: 'd1-field__input', binds: { 'data-input': true } }) : null
      ]
    )
  }
})

const MaskStub = defineComponent({
  props: {
    value: { type: [String, Number], default: undefined }
  },
  emits: ['input', 'change'],
  setup(props) {
    return () => h('div', { 'class': 'd1-mask', 'data-value': String(props.value ?? '') })
  }
})

describe('InputSocialDesign', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  it('switches between plain input and masked input based on socialType and forwards slots', async () => {
    const mountComponent = (initialProps: InputSocialProps) => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      const exposedRef = ref<InputSocialExpose | undefined>()

      const Component = defineComponent({
        props: {
          socialType: { type: String, default: undefined },
          value: { type: String, default: undefined },
          socialIcons: { type: Object, default: undefined }
        },
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
              classes: computed(() => ({
                main: { 'd1-inputSocial': true }
              })),
              components: {
                field: FieldStub as never,
                mask: MaskStub as never
              }
            } as never
          )

          expose(design.expose())
          return design.render()
        }
      })

      const app = createApp({
        render: () => h(Component as never, { ...initialProps, ref: exposedRef }, {
          prefix: () => h('span', '@')
        })
      })
      app.mount(container)
      mountedApps.push({ app, container })

      return { container, exposed: exposedRef }
    }

    const plain = mountComponent({ value: 'plain_user' })
    await nextTick()
    expect(plain.container.querySelector('input[data-input="true"]')).not.toBeNull()
    expect(plain.container.querySelector('.d1-mask')).toBeNull()

    const masked = mountComponent({
      socialType: 'telegram',
      value: 'misha',
      socialIcons: { telegram: 'tg-custom' }
    })
    await nextTick()
    expect(masked.container.querySelector('.d1-mask')).not.toBeNull()
    expect(masked.container.querySelector('.d1-field')?.getAttribute('data-label')).toBe('Telegram')
    expect(masked.container.querySelector('.d1-field')?.getAttribute('data-prefix')).toBe('https://t.me/')
    expect(masked.container.querySelector('.d1-field')?.getAttribute('data-icon')).toBe('tg-custom')
    expect(masked.container.querySelector('.slot-prefix')?.textContent).toBe('@')
  })
})
