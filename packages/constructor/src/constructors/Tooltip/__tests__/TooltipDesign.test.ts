// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createApp, defineComponent, h, reactive, type Slots } from 'vue'

import { TooltipDesign } from '../TooltipDesign'
import type { TooltipControl } from '../basicTypes'
import type { TooltipProps } from '../props'

const cleanups: Array<() => void> = []

function mountTooltipDesign(
  initialProps: Partial<TooltipProps> = {},
  slots: Record<string, (...args: any[]) => any> = {},
  attrs: Record<string, unknown> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const props = reactive<TooltipProps>({ ...initialProps })
  let exposed: { toggle?: (open: boolean, flash?: boolean) => Promise<void> } = {}

  const TestComponent = defineComponent({
    inheritAttrs: false,
    setup(_, { expose }) {
      const design = new TooltipDesign('d1.tooltip', props)
      exposed = design.expose()
      expose(exposed)
      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      return () => h(TestComponent, attrs, slots as Slots)
    }
  })

  const app = createApp(Root)
  app.mount(container)

  const unmount = () => {
    app.unmount()
    container.remove()
  }
  cleanups.push(unmount)

  return { container, props, exposed, unmount }
}

describe('TooltipDesign', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0)
      return 1
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
  })

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(cleanup => cleanup())
    document.body.innerHTML = ''
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('should expose toggle method and render control slot', () => {
    const { container, exposed } = mountTooltipDesign(
      { label: 'Hello', embedded: true },
      {
        control: (control: TooltipControl) => h('button', control.binds, 'Trigger')
      }
    )

    expect(typeof exposed.toggle).toBe('function')
    expect(container.querySelector('button')?.textContent).toBe('Trigger')
  })

  it('should merge external attrs with tooltip binds via mergeProps in embedded mode', () => {
    const { container } = mountTooltipDesign(
      { label: 'Merged', inDom: true, embedded: true, interactive: false },
      {
        control: (control: TooltipControl) => h('button', control.binds, 'Trigger')
      },
      {
        'data-testid': 'custom-tooltip',
        'class': 'extra-tooltip-class'
      }
    )

    const tooltipElement = container.querySelector('[role="tooltip"]')
    expect(tooltipElement).not.toBeNull()
    expect(tooltipElement?.getAttribute('data-testid')).toBe('custom-tooltip')
    expect(tooltipElement?.classList.contains('extra-tooltip-class')).toBe(true)
  })

  it('should render body slot content when provided', () => {
    const { container } = mountTooltipDesign(
      { inDom: true, embedded: true },
      {
        control: (control: TooltipControl) => h('button', control.binds, 'Trigger'),
        body: () => h('p', { class: 'custom-body' }, 'Body content')
      }
    )

    expect(container.querySelector('.custom-body')?.textContent).toBe('Body content')
  })

  it('should handle missing control slot gracefully without errors', () => {
    const { container } = mountTooltipDesign(
      { label: 'No control', inDom: true, embedded: true }
    )

    expect(container.textContent).toContain('No control')
  })
})
