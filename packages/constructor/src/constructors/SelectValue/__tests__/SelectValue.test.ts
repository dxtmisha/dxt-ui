// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, type App } from 'vue'

import { SelectValueDesign } from '../SelectValueDesign'
import type { SelectValueProps } from '../props'
import type { SelectValueClasses, SelectValueComponents, SelectValueExpose } from '../types'

const ChipInteractiveStub = defineComponent({
  props: {
    label: { type: [String, Number], default: undefined },
    value: { type: [String, Number], default: undefined },
    detail: { type: Object, default: undefined },
    disabled: { type: Boolean, default: false }
  },
  emits: ['click'],
  setup(props, { emit }) {
    return () => h(
      'div',
      { 'class': 'test-chip', 'data-disabled': String(props.disabled) },
      [
        h('span', String(props.label ?? '')),
        h('button', {
          type: 'button',
          class: 'test-chip-remove',
          onClick: (event: MouseEvent) => emit('click', event, {
            type: 'cancel',
            value: props.value,
            detail: props.detail
          })
        }, 'x')
      ]
    )
  }
})

describe('SelectValue (Integration)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  it('emits click events from chip cancel without bubbling to parent container', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const parentClickSpy = vi.fn()
    const emittedClick = vi.fn()
    const emittedClickLite = vi.fn()

    const Component = defineComponent({
      props: {
        multiple: { type: Boolean, default: true },
        value: {
          type: Array,
          default: () => [
            { label: 'Vue', value: 'vue', index: 'vue', detail: { id: 1 } }
          ]
        }
      },
      emits: ['click', 'clickLite'],
      setup(props, { emit }) {
        const forwardEmit = (name: string, ...args: unknown[]) => {
          if (name === 'click') {
            emittedClick(...args)
          } else if (name === 'clickLite') {
            emittedClickLite(...args)
          }
          emit(name as 'click', ...(args as [MouseEvent, never]))
        }

        const design = new SelectValueDesign<
          SelectValueComponents,
          SelectValueExpose,
          SelectValueClasses,
          SelectValueProps
        >(
          'd1.selectValue',
          props as Readonly<SelectValueProps>,
          {
            emits: forwardEmit as never,
            classes: computed(() => ({
              main: { 'd1-selectValue': true },
              item: 'd1-selectValue__item',
              trailing: 'd1-selectValue__trailing'
            })),
            components: {
              chip: ChipInteractiveStub as never
            }
          } as never
        )

        return design.render()
      }
    })

    const app = createApp({
      render: () => h('div', { onClick: parentClickSpy }, [h(Component as never)])
    })
    app.mount(container)
    mountedApps.push({ app, container })
    await nextTick()

    container.querySelector<HTMLButtonElement>('.test-chip-remove')?.click()
    await nextTick()

    expect(parentClickSpy).not.toHaveBeenCalled()
    expect(emittedClick).toHaveBeenCalledTimes(1)
    expect(emittedClickLite).toHaveBeenCalledWith(expect.objectContaining({
      type: 'cancel',
      value: 'vue',
      detail: { id: 1 }
    }))
  })
})
