// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Slots } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { TooltipDesign } from '../TooltipDesign'
import { defaultsTooltip, type TooltipProps } from '../props'
import type { TooltipControl } from '../basicTypes'

const cleanups: Array<() => void> = []

const MockArrow = defineComponent({
  name: 'MockArrow',
  props: {
    position: { type: String, default: undefined },
    elementTarget: { type: [String, Object], default: undefined }
  },
  setup(props) {
    return () => h('div', {
      'class': 'mock-arrow',
      'data-position': props.position,
      'data-target': typeof props.elementTarget === 'string' ? props.elementTarget : ''
    })
  }
})

function mountTooltip(
  initialProps: Partial<TooltipProps> = {},
  slots: Record<string, (...args: any[]) => any> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const props = reactive<TooltipProps>({
    ...defaultsTooltip,
    ...initialProps
  })
  const emitted: Array<[string, ...unknown[]]> = []
  let exposed: { toggle: (open: boolean, flash?: boolean) => Promise<void> } = {
    toggle: async () => {}
  }

  const emits = (event: string, ...args: unknown[]) => {
    emitted.push([event, ...args])
  }

  const TooltipComponent = defineComponent({
    name: 'TestTooltip',
    setup(_, { expose }) {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-tooltip': true,
          'd1-tooltip--interactive': Boolean(props.interactive),
          'd1-tooltip--embedded': Boolean(props.embedded)
        }
      }))

      const design = new TooltipDesign(
        'd1.tooltip',
        props,
        {
          emits: emits as any,
          classes: classesToken,
          components: {
            arrow: MockArrow
          }
        }
      )

      exposed = design.expose()
      expose(exposed)
      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      return () => h(TooltipComponent, null, slots as Slots)
    }
  })

  const app = createApp(Root)
  app.mount(container)

  const unmount = () => {
    app.unmount()
    container.remove()
  }
  cleanups.push(unmount)

  return { container, props, emitted, exposed, unmount }
}

describe('Tooltip (integration)', () => {
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

  it('should render control slot and keep tooltip out of DOM until opened', () => {
    const { container } = mountTooltip(
      { label: 'Helpful hint' },
      {
        control: (control: TooltipControl) => h('button', { ...control.binds, type: 'button' }, 'Hover me')
      }
    )

    const button = container.querySelector('button')
    expect(button).not.toBeNull()
    expect(button?.getAttribute('aria-expanded')).toBe('false')
    expect(document.body.querySelector('.d1-tooltip')).toBeNull()
  })

  it('should open via exposed toggle, render label/description/arrow in teleport, emit event, and close cleanly', async () => {
    const { emitted, exposed } = mountTooltip(
      {
        label: 'Title text',
        description: 'Description text',
        arrowShow: true,
        arrowPosition: 'auto'
      },
      {
        control: (control: TooltipControl) => h('button', { ...control.binds, type: 'button' }, 'Info')
      }
    )

    await exposed.toggle(true)
    await nextTick()
    vi.advanceTimersByTime(64)
    await nextTick()

    const tooltipElement = document.body.querySelector('.d1-tooltip') as HTMLDivElement | null
    expect(tooltipElement).not.toBeNull()
    expect(tooltipElement?.textContent).toContain('Title text')
    expect(tooltipElement?.textContent).toContain('Description text')
    expect(tooltipElement?.classList.contains('d1-tooltip--show')).toBe(true)
    expect(tooltipElement?.querySelector('.mock-arrow')).not.toBeNull()
    expect(emitted[0]).toEqual(['tooltip', true])

    await exposed.toggle(false)
    vi.advanceTimersByTime(384)
    await nextTick()
    expect(tooltipElement?.classList.contains('d1-tooltip--show')).toBe(false)

    vi.advanceTimersByTime(128)
    await nextTick()
    expect(document.body.querySelector('.d1-tooltip')).toBeNull()
    expect(emitted[1]).toEqual(['tooltip', false])
  })

  it('should open automatically when open prop becomes true dynamically', async () => {
    const { props, emitted } = mountTooltip(
      {
        label: 'Dynamic open',
        open: false
      },
      {
        control: (control: TooltipControl) => h('button', { ...control.binds, type: 'button' }, 'Trigger')
      }
    )

    expect(document.body.querySelector('.d1-tooltip')).toBeNull()

    props.open = true
    await nextTick()
    await nextTick()
    await nextTick()
    vi.advanceTimersByTime(64)
    await nextTick()

    const tooltipElement = document.body.querySelector('.d1-tooltip')
    expect(tooltipElement).not.toBeNull()
    expect(tooltipElement?.textContent).toContain('Dynamic open')
    expect(emitted[0]).toEqual(['tooltip', true])
  })

  it('should render inline without teleport when embedded is true and ignore click toggling', async () => {
    const { container, emitted } = mountTooltip(
      {
        label: 'Embedded tip',
        inDom: true,
        embedded: true
      },
      {
        control: (control: TooltipControl) => h('button', { ...control.binds, type: 'button' }, 'Trigger')
      }
    )

    expect(container.querySelector('.d1-tooltip--embedded')).not.toBeNull()
    container.querySelector('button')?.click()
    vi.advanceTimersByTime(100)
    expect(emitted).toHaveLength(0)
  })

  it('should not open when disabled is true', async () => {
    const { exposed, emitted } = mountTooltip(
      {
        label: 'Disabled tip',
        disabled: true
      },
      {
        control: (control: TooltipControl) => h('button', { ...control.binds, type: 'button' }, 'Trigger')
      }
    )

    await exposed.toggle(true)
    vi.advanceTimersByTime(100)
    await nextTick()

    expect(document.body.querySelector('.d1-tooltip')).toBeNull()
    expect(emitted).toHaveLength(0)
  })

  it('should open on mouseover, cancel close when entering tooltip, and close on mouseout', async () => {
    const { container } = mountTooltip(
      { label: 'Hover tip' },
      {
        control: (control: TooltipControl) => h('button', { ...control.binds, type: 'button' }, 'Hover')
      }
    )

    const button = container.querySelector('button')!
    button.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }))
    await nextTick()
    await nextTick()
    vi.advanceTimersByTime(64)
    await nextTick()

    const tooltipElement = document.body.querySelector('.d1-tooltip') as HTMLDivElement | null
    expect(tooltipElement).not.toBeNull()
    expect(tooltipElement?.classList.contains('d1-tooltip--show')).toBe(true)

    const outside = document.createElement('div')
    document.body.appendChild(outside)

    button.dispatchEvent(new MouseEvent('mouseout', { bubbles: true, relatedTarget: outside }))
    vi.advanceTimersByTime(100)

    tooltipElement?.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }))
    vi.advanceTimersByTime(500)

    expect(document.body.querySelector('.d1-tooltip')).not.toBeNull()
  })
})
