// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, DesignName, ServerStorage } from '@dxtmisha/functional'

import { ClockDial } from '../ClockDial'
import { ClockDialDesign } from '../ClockDialDesign'
import type { ClockDialProps } from '../props'

describe('ClockDial (SSR)', () => {
  const naming = new DesignName('d1.clockDial')

  it('initializes orchestrator bindings cleanly in Node SSR without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<ClockDialProps>({
      type: '12',
      value: 6,
      min: 1,
      max: 12
    })

    scope.run(() => {
      const clockDial = new ClockDial(props, element, naming)

      expect(clockDial.binds.role).toBe('slider')
      expect(clockDial.binds['aria-valuenow']).toBe(6)
      expect(clockDial.binds.tabindex).toBe(0)
      expect(clockDial.classes['d1-clockDial--selected']).toBe(true)

      expect(clockDial.hasInstance('event')).toBe(false)
      expect(clockDial.hasInstance('select')).toBe(false)
      expect(clockDial.hasInstance('control')).toBe(false)
      expect(clockDial.hasInstance('emit')).toBe(false)
    })

    scope.stop()
  })

  it('renders full interactive ClockDialDesign to deterministic HTML string in SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    let logicInstance!: ClockDial

    const captureLogicInstance = (instance: ClockDial) => {
      logicInstance = instance
    }

    class InspectableClockDial extends ClockDial {
      constructor(...args: ConstructorParameters<typeof ClockDial>) {
        super(...args)
        captureLogicInstance(this)
      }
    }

    const TestComponent = defineComponent({
      setup() {
        const props: ClockDialProps = {
          type: '12',
          value: 6,
          min: 1,
          max: 12
        }
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-clockDial': true }
        }))
        const design = new ClockDialDesign(
          'd1.clockDial',
          props,
          { classes: classesToken },
          InspectableClockDial
        )
        const render = design.render()
        return () => h(render)
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const app = createSSRApp(TestComponent)
    const html = await renderToString(app)

    expect(html).toContain('role="slider"')
    expect(html).toContain('aria-valuenow="6"')
    expect(html).toContain('data-value="6"')
    expect(html).toContain('d1-clockDial__arrowSelect')
    expect(html).toContain('d1-clockDial__censor')
    expect(html).toContain('--d1-clockDial-sys-arrowRotate:180deg')

    // Lazy interaction helpers must remain unallocated in SSR
    expect(logicInstance.hasInstance('select')).toBe(false)
    expect(logicInstance.hasInstance('event')).toBe(false)
    expect(logicInstance.hasInstance('control')).toBe(false)
    expect(logicInstance.hasInstance('emit')).toBe(false)
  })

  it('renders all ClockDial variants (24h, minute, second, clock + showTime, disabled, readonly) in SSR', async () => {
    const variants: ClockDialProps[] = [
      { type: '24', value: 14 },
      { type: 'minute', value: 0, step: 5 },
      { type: 'second', value: 45 },
      { type: '24', clock: true, showTime: true, hour: 14, minute: 30, second: 15 },
      { type: '12', value: 3, disabled: true },
      { type: '12', value: 3, readonly: true }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new ClockDialDesign('d1.clockDial', props)
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp(TestComponent)
      const html = await renderToString(app)

      expect(typeof html).toBe('string')
      expect(html).toContain('d1-clockDial__list')

      if (props.clock) {
        expect(html).toContain('role="timer"')
        expect(html).toContain('d1-clockDial__arrowHour')
        expect(html).not.toContain('d1-clockDial__censor')
      } else {
        expect(html).toContain('role="slider"')
      }
    }
  })
})
