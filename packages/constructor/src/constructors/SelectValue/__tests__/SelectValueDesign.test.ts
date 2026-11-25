// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, type App } from 'vue'

import { SelectValueDesign } from '../SelectValueDesign'
import type { SelectValueProps } from '../props'
import type { SelectValueClasses, SelectValueComponents, SelectValueExpose } from '../types'

const ChipStub = defineComponent({
  props: {
    label: { type: [String, Number], default: undefined },
    value: { type: [String, Number], default: undefined }
  },
  emits: ['click'],
  setup(props, { emit }) {
    return () => h('button', {
      'type': 'button',
      'class': 'd1-chip',
      'data-value': String(props.value ?? ''),
      'onClick': (event: MouseEvent) => emit('click', event, { type: 'cancel', value: props.value })
    }, String(props.label ?? ''))
  }
})

describe('SelectValueDesign', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  const mountDesign = (props: SelectValueProps) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const emitsSpy = vi.fn()

    const Component = defineComponent({
      props: {
        placeholder: { type: String, default: undefined },
        value: { type: Array, default: undefined },
        multiple: { type: Boolean, default: false },
        iconShow: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
      },
      setup(componentProps) {
        const design = new SelectValueDesign<
          SelectValueComponents,
          SelectValueExpose,
          SelectValueClasses,
          SelectValueProps
        >(
          'd1.selectValue',
          componentProps as Readonly<SelectValueProps>,
          {
            emits: emitsSpy as never,
            classes: computed(() => ({
              main: { 'd1-selectValue': true },
              item: 'd1-selectValue__item',
              trailing: 'd1-selectValue__trailing'
            })),
            components: {
              chip: ChipStub as never
            }
          } as never
        )

        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Component as never, props as never)
    })
    app.mount(container)
    mountedApps.push({ app, container })

    return { container, emitsSpy }
  }

  it('renders placeholder, single value (including numeric 0), and multiple chips', async () => {
    const placeholderView = mountDesign({ placeholder: 'Select item' })
    await nextTick()
    expect(placeholderView.container.textContent).toBe('Select item')
    expect(placeholderView.container.firstElementChild?.classList.contains('d1-selectValue--placeholder')).toBe(true)

    const zeroView = mountDesign({ value: [{ label: 0 as unknown as string, value: 0, index: '0', type: 'item' }] })
    await nextTick()
    expect(zeroView.container.textContent).toBe('0')

    const zeroStringView = mountDesign({ value: [{ label: '0', value: 0, index: '0', type: 'item' }] })
    await nextTick()
    expect(zeroStringView.container.textContent).toBe('0')

    const multiView = mountDesign({
      multiple: true,
      value: [
        { label: 'Alpha', value: 'a', index: 'a', type: 'item' },
        { label: 'Beta', value: 'b', index: 'b', type: 'item' }
      ]
    })
    await nextTick()
    const chips = multiView.container.querySelectorAll('.d1-chip')
    expect(chips.length).toBe(2)
    expect(chips[0]?.textContent).toBe('Alpha')
    expect(chips[1]?.textContent).toBe('Beta')
  })
})
