// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { ProgressBarDesign } from '../ProgressBarDesign'
import type { ProgressBarProps, ProgressBarPropsBasic } from '../props'
import type { ProgressBarClasses, ProgressBarComponents, ProgressBarExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('ProgressBar (integrated component)', () => {
  it('updates percentages, focus, overlay, skeleton classes, and safely escapes XSS labels', async () => {
    const state = reactive<ProgressBarProps>({
      value: 0,
      max: 0,
      showLabel: true
    })

    const container = document.createElement('div')
    const app = createApp(defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-progressBar': true,
            'd1-progressBar--overlay': Boolean(state.overlay)
          }
        }))
        const design = new ProgressBarDesign<
          ProgressBarComponents,
          ProgressBarExpose,
          ProgressBarClasses,
          ProgressBarPropsBasic
        >('d1.progressBar', state, { classes })
        return design.render()
      }
    }))
    app.mount(container)
    cleanups.push(() => app.unmount())

    const root = container.querySelector('.d1-progressBar')!
    const zeroItem = root.querySelector('.d1-progressBar__item') as HTMLElement
    expect(zeroItem.style.getPropertyValue('--d1-progressBar-sys-percent')).toBe('0%')
    expect(zeroItem.getAttribute('aria-label')).toBe('0%')

    state.max = 100
    state.overlay = true
    state.focus = 'seg-2'
    state.value = [
      { index: 'seg-1', value: 25, label: '<img src=x onerror=alert(1)>' },
      { index: 'seg-2', value: 50, label: 'Active 50%' }
    ]
    await nextTick()

    expect(root.classList.contains('d1-progressBar--overlay')).toBe(true)
    const segments = root.querySelectorAll('.d1-progressBar__item')
    expect(segments).toHaveLength(3)
    expect(segments[0]?.querySelector('.d1-progressBar__item__label')?.textContent).toBe('<img src=x onerror=alert(1)>')
    expect(segments[0]?.querySelector('img')).toBeNull()
    expect(segments[1]?.classList.contains('d1-progressBar__item--focus')).toBe(true)
    expect((segments[2] as HTMLElement).style.getPropertyValue('--d1-progressBar-sys-percent')).toBe('25%')
  })
})
