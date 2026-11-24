// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { ClockPeriodDesign } from '../ClockPeriodDesign'
import { ClockPeriodType } from '../basicTypes'
import { defaultsClockPeriod, type ClockPeriodProps } from '../props'
import type {
  ClockPeriodClasses,
  ClockPeriodComponents,
  ClockPeriodExpose
} from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const createSsrClockPeriod = (props: ClockPeriodProps = {}) => {
  const Host = defineComponent({
    setup() {
      const mergedProps: ClockPeriodProps = {
        ...defaultsClockPeriod,
        ...props
      }
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-clockPeriod': true,
          'd1-clockPeriod--disabled': Boolean(mergedProps.disabled),
          'd1-clockPeriod--readonly': Boolean(mergedProps.readonly),
          [`d1-clockPeriod--orientation--${mergedProps.orientation}`]: Boolean(mergedProps.orientation)
        }
      }))
      const design = new ClockPeriodDesign<
        ClockPeriodComponents,
        ClockPeriodExpose,
        ClockPeriodClasses,
        ClockPeriodProps
      >(
        'd1.clockPeriod',
        mergedProps,
        { classes }
      )
      return design.render()
    }
  })

  return createSSRApp({
    render: () => h(Host)
  })
}

describe('ClockPeriod (SSR)', () => {
  it('should render AM/PM buttons, classes, and WAI-ARIA attributes cleanly in Node SSR without browser globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrClockPeriod({
      value: ClockPeriodType.pm,
      orientation: 'horizontal'
    }))

    expect(html).toContain('d1-clockPeriod')
    expect(html).toContain('d1-clockPeriod--orientation--horizontal')
    expect(html).toContain('role="radiogroup"')
    expect(html).toContain('aria-orientation="horizontal"')
    expect(html).toContain('tabindex="0"')
    expect(html).toContain('d1-clockPeriod__am')
    expect(html).toContain('d1-clockPeriod__pm')
    expect(html).toContain('data-value="am"')
    expect(html).toContain('data-value="pm"')
    expect(html).toContain('aria-checked="true"')
    expect(html).toContain('aria-checked="false"')
    expect(html).toContain('d1-clockPeriod--selected')
    expect(html).toContain('>AM</button>')
    expect(html).toContain('>PM</button>')
  })

  it('should render disabled, readonly, and custom Unicode labels cleanly during SSR', async () => {
    const disabledHtml = await renderToString(createSsrClockPeriod({
      value: ClockPeriodType.am,
      disabled: true,
      textAm: 'Утро',
      textPm: 'Вечер'
    }))

    expect(disabledHtml).toContain('d1-clockPeriod--disabled')
    expect(disabledHtml).toContain('tabindex="-1"')
    expect(disabledHtml).toContain('aria-disabled="true"')
    expect(disabledHtml).toContain('disabled')
    expect(disabledHtml).toContain('>Утро</button>')
    expect(disabledHtml).toContain('>Вечер</button>')

    const readonlyHtml = await renderToString(createSsrClockPeriod({
      readonly: true,
      textAm: 'Sáng',
      textPm: 'Chiều'
    }))

    expect(readonlyHtml).toContain('d1-clockPeriod--readonly')
    expect(readonlyHtml).toContain('aria-readonly="true"')
    expect(readonlyHtml).toContain('aria-disabled="true"')
    expect(readonlyHtml).toContain('>Sáng</button>')
    expect(readonlyHtml).toContain('>Chiều</button>')
  })

  it('should produce isolated deterministic SSR output across concurrent requests', async () => {
    const [amHtml, pmHtml] = await Promise.all([
      renderToString(createSsrClockPeriod({
        modelValue: ClockPeriodType.am,
        textAm: 'First AM',
        textPm: 'First PM'
      })),
      renderToString(createSsrClockPeriod({
        modelValue: ClockPeriodType.pm,
        textAm: 'Second AM',
        textPm: 'Second PM'
      }))
    ])

    expect(amHtml).toContain('First AM')
    expect(amHtml).toContain('d1-clockPeriod__am d1-clockPeriod--selected')
    expect(pmHtml).toContain('Second PM')
    expect(pmHtml).toContain('d1-clockPeriod__pm d1-clockPeriod--selected')
  })
})
