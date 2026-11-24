// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { ClockPeriod } from '../ClockPeriod'
import { ClockPeriodDesign } from '../ClockPeriodDesign'
import { ClockPeriodType } from '../basicTypes'
import { defaultsClockPeriod, type ClockPeriodProps } from '../props'
import type {
  ClockPeriodClasses,
  ClockPeriodComponents,
  ClockPeriodEmits,
  ClockPeriodExpose
} from '../types'

describe('ClockPeriod (integrated component)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).forEach(cleanup => cleanup())
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  const mountIntegrated = (initialProps: ClockPeriodProps = {}) => {
    const props = reactive<ClockPeriodProps>({
      ...defaultsClockPeriod,
      ...initialProps
    })
    const emits = vi.fn()
    let orchestrator: ClockPeriod | undefined
    let exposed: ClockPeriodExpose | undefined

    const setOrchestrator = (instance: ClockPeriod): void => {
      orchestrator = instance
    }

    class TrackedClockPeriod extends ClockPeriod {
      constructor(...args: ConstructorParameters<typeof ClockPeriod>) {
        super(...args)
        setOrchestrator(this)
      }
    }

    const Host = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-clockPeriod': true,
            'd1-clockPeriod--disabled': Boolean(props.disabled),
            'd1-clockPeriod--readonly': Boolean(props.readonly),
            [`d1-clockPeriod--orientation--${props.orientation}`]: Boolean(props.orientation)
          }
        }))
        const design = new ClockPeriodDesign<
          ClockPeriodComponents,
          ClockPeriodExpose,
          ClockPeriodClasses,
          ClockPeriodProps
        >(
          'd1.clockPeriod',
          props,
          {
            emits: emits as unknown as ConstrEmit<ClockPeriodEmits>,
            classes
          },
          TrackedClockPeriod
        )
        exposed = design.expose()
        return design.render()
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    if (!orchestrator || !exposed) {
      throw new Error('Integrated ClockPeriod failed to initialize')
    }

    return {
      container,
      props,
      emits,
      orchestrator,
      exposed,
      unmount: () => {
        app.unmount()
      }
    }
  }

  it('should render complete AM/PM DOM hierarchy, default ARIA, and keep event/eventClick/model lazy before interaction', () => {
    const { container, orchestrator } = mountIntegrated()

    const root = container.firstElementChild as HTMLDivElement
    const buttons = root.querySelectorAll('button')

    expect(root.classList.contains('d1-clockPeriod')).toBe(true)
    expect(root.classList.contains('d1-clockPeriod--orientation--vertical')).toBe(true)
    expect(root.getAttribute('role')).toBe('radiogroup')
    expect(root.getAttribute('aria-orientation')).toBe('vertical')
    expect(root.getAttribute('tabindex')).toBe('0')

    expect(buttons).toHaveLength(2)
    expect(buttons[0]?.textContent).toBe('AM')
    expect(buttons[0]?.getAttribute('aria-checked')).toBe('true')
    expect(buttons[0]?.classList.contains('d1-clockPeriod--selected')).toBe(true)

    expect(buttons[1]?.textContent).toBe('PM')
    expect(buttons[1]?.getAttribute('aria-checked')).toBe('false')
    expect(buttons[1]?.classList.contains('d1-clockPeriod--selected')).toBe(false)

    // Interactive and model helpers remain lazily unallocated until first interaction or value change
    expect(orchestrator.hasInstance('event')).toBe(false)
    expect(orchestrator.hasInstance('eventClick')).toBe(false)
    expect(orchestrator.hasInstance('model')).toBe(false)
  })

  it('should toggle AM and PM on click, update DOM classes/ARIA, and emit click + v-model updates', async () => {
    const { container, emits, exposed } = mountIntegrated({ value: ClockPeriodType.am })
    const buttons = container.querySelectorAll('button')

    buttons[1]?.click()
    await nextTick()

    expect(exposed.get()).toBe(ClockPeriodType.pm)
    expect(buttons[0]?.getAttribute('aria-checked')).toBe('false')
    expect(buttons[0]?.classList.contains('d1-clockPeriod--selected')).toBe(false)
    expect(buttons[1]?.getAttribute('aria-checked')).toBe('true')
    expect(buttons[1]?.classList.contains('d1-clockPeriod--selected')).toBe(true)

    expect(emits).toHaveBeenCalledWith('update:value', ClockPeriodType.pm)
    expect(emits).toHaveBeenCalledWith('update:modelValue', ClockPeriodType.pm)
    expect(emits).toHaveBeenCalledWith('clickLite', {
      type: 'item',
      value: ClockPeriodType.pm,
      detail: undefined
    })

    // Clicking already selected PM emits nothing
    emits.mockClear()
    buttons[1]?.click()
    await nextTick()
    expect(emits).not.toHaveBeenCalled()
  })

  it('should support full keyboard navigation and guard against IME composition', async () => {
    const { container, emits, exposed } = mountIntegrated({
      value: ClockPeriodType.am,
      orientation: 'horizontal'
    })
    const root = container.firstElementChild as HTMLDivElement

    expect(root.getAttribute('aria-orientation')).toBe('horizontal')

    // IME composition should be ignored
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true }))
    await nextTick()
    expect(exposed.get()).toBe(ClockPeriodType.am)
    expect(emits).not.toHaveBeenCalled()

    // ArrowRight selects PM
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    await nextTick()
    expect(exposed.get()).toBe(ClockPeriodType.pm)

    // ArrowLeft selects AM
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }))
    await nextTick()
    expect(exposed.get()).toBe(ClockPeriodType.am)

    // Space toggles to PM
    root.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }))
    await nextTick()
    expect(exposed.get()).toBe(ClockPeriodType.pm)

    // Enter toggles back to AM
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    await nextTick()
    expect(exposed.get()).toBe(ClockPeriodType.am)
  })

  it('should block interaction and update ARIA/disabled attributes in disabled and readonly modes', async () => {
    const { container, props, emits, exposed } = mountIntegrated({
      value: ClockPeriodType.am,
      disabled: true
    })
    const root = container.firstElementChild as HTMLDivElement
    const buttons = root.querySelectorAll('button')

    expect(root.getAttribute('tabindex')).toBe('-1')
    expect(root.getAttribute('aria-disabled')).toBe('true')
    expect(buttons[0]?.disabled).toBe(true)
    expect(buttons[1]?.disabled).toBe(true)

    buttons[1]?.click()
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    await nextTick()
    expect(exposed.get()).toBe(ClockPeriodType.am)
    expect(emits).not.toHaveBeenCalled()

    props.disabled = false
    props.readonly = true
    await nextTick()

    expect(root.getAttribute('tabindex')).toBe(-1 + '')
    expect(root.getAttribute('aria-readonly')).toBe('true')
    expect(root.getAttribute('aria-disabled')).toBe('true')

    buttons[1]?.click()
    await nextTick()
    expect(exposed.get()).toBe(ClockPeriodType.am)
    expect(emits).not.toHaveBeenCalled()
  })

  it('should react to prop updates, custom Unicode labels, expose methods, and stop syncing after unmount', async () => {
    const { container, props, exposed, unmount } = mountIntegrated({
      modelValue: ClockPeriodType.am,
      textAm: 'Буйный Утро 🌅',
      textPm: 'Buổi chiều 🌇'
    })
    const buttons = container.querySelectorAll('button')

    expect(buttons[0]?.textContent).toBe('Буйный Утро 🌅')
    expect(buttons[1]?.textContent).toBe('Buổi chiều 🌇')

    props.modelValue = ClockPeriodType.pm
    await nextTick()
    expect(exposed.get()).toBe(ClockPeriodType.pm)
    expect(buttons[1]?.getAttribute('aria-checked')).toBe('true')

    exposed.setByHour(0)
    await nextTick()
    expect(exposed.get()).toBe(ClockPeriodType.am)

    exposed.setByHour(12)
    await nextTick()
    expect(exposed.get()).toBe(ClockPeriodType.pm)

    unmount()
    props.modelValue = ClockPeriodType.am
    await nextTick()
    expect(exposed.get()).toBe(ClockPeriodType.pm)
  })
})
