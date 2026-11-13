// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, nextTick, reactive } from 'vue'

import { ProgressDesign } from '../ProgressDesign'
import { defaultsProgress, type ProgressProps } from '../props'

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.useRealTimers()
})

describe('Progress component integration', () => {
  it('reacts to value, range and display mode changes', async () => {
    const properties = reactive<ProgressProps>({ ...defaultsProgress, indeterminate: 'type1', position: 'top', value: 25, max: 100, point: true })
    const component = defineComponent({
      setup() {
        const design = new ProgressDesign('d1.progress', properties, {
          classes: computed(() => ({ main: { 'test-progress': true } }))
        })
        return design.render()
      }
    })
    const container = document.createElement('div')
    const app = createApp(component)
    app.mount(container)
    mountedCleanups.push(() => app.unmount())

    let progress = container.querySelector('.test-progress')
    expect(progress?.tagName.toLowerCase()).toBe('div')
    expect(progress?.getAttribute('aria-valuenow')).toBe('25')
    expect(progress?.querySelector('.d1-progress__point')).not.toBeNull()

    properties.value = 0.5
    properties.max = 0.5
    properties.circular = true
    await nextTick()

    progress = container.querySelector('.test-progress')
    expect(progress?.tagName.toLowerCase()).toBe('svg')
    expect(progress?.getAttribute('aria-valuenow')).toBe('0.5')
    expect(progress?.getAttribute('aria-valuemax')).toBe('0.5')
    expect(progress?.getAttribute('style')).toContain('--d1-progress-sys-value: 100')
    expect(progress?.querySelector('.d1-progress__point')).toBeNull()
  })

  it('keeps the indicator visible until the configured hide delay', async () => {
    vi.useFakeTimers()
    const properties = reactive<ProgressProps>({ ...defaultsProgress, indeterminate: 'type1', position: 'top', visible: true, delay: 0, delayHide: 100 })
    const component = defineComponent({
      setup() {
        const design = new ProgressDesign('d1.progress', properties, {
          classes: computed(() => ({ main: { 'test-progress': true } }))
        })
        return design.render()
      }
    })
    const container = document.createElement('div')
    const app = createApp(component)
    app.mount(container)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    const progress = container.querySelector('.test-progress')
    expect(progress?.classList.contains('d1-progress--visible')).toBe(true)
    properties.visible = false
    await nextTick()
    expect(progress?.classList.contains('d1-progress--visible')).toBe(true)

    await vi.advanceTimersByTimeAsync(100)
    await nextTick()
    expect(progress?.classList.contains('d1-progress--visible')).toBe(false)
    expect(progress?.classList.contains('d1-progress--hide')).toBe(true)
  })
})
