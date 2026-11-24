// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
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

describe('ClockPeriodDesign (isolated design class)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).forEach(cleanup => cleanup())
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  const mountDesign = (
    initialProps: ClockPeriodProps = {},
    attrs: Record<string, unknown> = {},
    ItemConstructor: typeof ClockPeriod = ClockPeriod
  ) => {
    const props = reactive<ClockPeriodProps>({
      ...defaultsClockPeriod,
      ...initialProps
    })
    const emits = vi.fn()
    let designInstance: ClockPeriodDesign<
      ClockPeriodComponents,
      ClockPeriodExpose,
      ClockPeriodClasses,
      ClockPeriodProps
    > | undefined
    let exposed: ClockPeriodExpose | undefined

    const Inner = defineComponent({
      inheritAttrs: false,
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: { 'd1-clockPeriod': true }
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
          ItemConstructor
        )
        designInstance = design
        exposed = design.expose()
        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Inner, attrs)
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    if (!designInstance || !exposed) {
      throw new Error('ClockPeriodDesign was not initialized')
    }

    return {
      container,
      props,
      emits,
      design: designInstance,
      exposed
    }
  }

  describe('Render helpers and root DOM assembly', () => {
    it('should render root container with merged external attrs, class, style, ref, and AM/PM buttons', () => {
      const externalKeydown = vi.fn()
      const { container, design } = mountDesign(
        {
          value: ClockPeriodType.pm,
          textAm: 'Sáng',
          textPm: 'Chiều'
        },
        {
          'class': 'custom-clock-period',
          'style': { opacity: '0.9' },
          'data-testid': 'clock-period-root',
          'onKeydown': externalKeydown
        }
      )

      const root = container.querySelector('[data-testid="clock-period-root"]') as HTMLDivElement | null
      expect(root).not.toBeNull()
      expect(root?.classList.contains('d1-clockPeriod')).toBe(true)
      expect(root?.classList.contains('custom-clock-period')).toBe(true)
      expect(root?.style.opacity).toBe('0.9')
      expect(root?.getAttribute('role')).toBe('radiogroup')
      expect(root?.getAttribute('aria-orientation')).toBe('vertical')
      expect(root?.getAttribute('tabindex')).toBe('0')

      const buttons = root?.querySelectorAll('button')
      expect(buttons).toHaveLength(2)

      const amButton = buttons?.[0]
      const pmButton = buttons?.[1]

      expect(amButton?.textContent).toBe('Sáng')
      expect(amButton?.getAttribute('type')).toBe('button')
      expect(amButton?.getAttribute('role')).toBe('radio')
      expect(amButton?.getAttribute('aria-checked')).toBe('false')
      expect(amButton?.getAttribute('data-value')).toBe('am')
      expect(amButton?.getAttribute('tabindex')).toBe('-1')
      expect(amButton?.classList.contains('d1-clockPeriod__item')).toBe(true)
      expect(amButton?.classList.contains('d1-clockPeriod__am')).toBe(true)
      expect(amButton?.classList.contains('d1-clockPeriod--selected')).toBe(false)

      expect(pmButton?.textContent).toBe('Chiều')
      expect(pmButton?.getAttribute('aria-checked')).toBe('true')
      expect(pmButton?.getAttribute('data-value')).toBe('pm')
      expect(pmButton?.classList.contains('d1-clockPeriod__pm')).toBe(true)
      expect(pmButton?.classList.contains('d1-clockPeriod--selected')).toBe(true)

      // Both internal and external keydown listeners execute via mergeProps
      root?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }))
      expect(externalKeydown).toHaveBeenCalledTimes(1)

      // Public render helpers return VNodes directly
      expect(design.renderAm().type).toBe('button')
      expect(design.renderPm().type).toBe('button')
      expect(design.renderPeriod(ClockPeriodType.am, 'Custom').children).toBe('Custom')
    })

    it('should expose get, set, and setByHour methods bound to the logic orchestrator', async () => {
      const { container, exposed, emits } = mountDesign({ value: ClockPeriodType.am })

      expect(exposed.get()).toBe(ClockPeriodType.am)

      exposed.set(ClockPeriodType.pm)
      await nextTick()
      expect(exposed.get()).toBe(ClockPeriodType.pm)
      expect(emits).toHaveBeenCalledWith('update:modelValue', ClockPeriodType.pm)

      const buttons = container.querySelectorAll('button')
      expect(buttons[1]?.getAttribute('aria-checked')).toBe('true')

      exposed.setByHour(8)
      await nextTick()
      expect(exposed.get()).toBe(ClockPeriodType.am)
      expect(buttons[0]?.getAttribute('aria-checked')).toBe('true')
    })

    it('should support injecting a custom ClockPeriod orchestrator class', () => {
      class CustomClockPeriod extends ClockPeriod {
        override get tabindex(): number {
          return 5
        }
      }

      const { container } = mountDesign({}, {}, CustomClockPeriod)
      const root = container.firstElementChild
      expect(root?.getAttribute('tabindex')).toBe('5')
    })
  })
})
