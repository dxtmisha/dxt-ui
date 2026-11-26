// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent } from 'vue'
import { renderToString } from '@vue/server-renderer'
import type { ConstrClasses } from '@dxtmisha/functional'

import { ProgressBarDesign } from '../ProgressBarDesign'
import type { ProgressBarProps, ProgressBarPropsBasic } from '../props'
import type { ProgressBarClasses, ProgressBarComponents, ProgressBarExpose } from '../types'

function createSsrProgressBarApp(props: ProgressBarProps) {
  const SsrProgressBar = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-progressBar': true,
          'd1-progressBar--overlay': Boolean(props.overlay)
        }
      }))
      const design = new ProgressBarDesign<
        ProgressBarComponents,
        ProgressBarExpose,
        ProgressBarClasses,
        ProgressBarPropsBasic
      >('d1.progressBar', props, { classes })
      return design.render()
    }
  })

  return createSSRApp(SsrProgressBar)
}

describe('ProgressBar (SSR)', () => {
  it('renders progress segments, ARIA attributes, labels, and space track in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrProgressBarApp({
      max: 100,
      showLabel: true,
      overlay: true,
      value: [
        { index: 'one', value: 40, label: '40%', palette: 'blue' },
        { index: 'two', value: 20, label: '20%', color: '#22c55e' }
      ]
    }))

    expect(html).toContain('class="d1-progressBar d1-progressBar--overlay"')
    expect(html).toContain('role="progressbar"')
    expect(html).toContain('aria-valuenow="40"')
    expect(html).toContain('aria-valuemax="100"')
    expect(html).toContain('40%')
    expect(html).toContain('d1-progressBar__item--space')
    expect(html).toContain('aria-hidden="true"')
  })

  it('handles zero value without NaN in Node SSR', async () => {
    const html = await renderToString(createSsrProgressBarApp({ value: 0 }))
    expect(html).not.toContain('NaN')
    expect(html).toContain('aria-label="0%"')
  })
})
